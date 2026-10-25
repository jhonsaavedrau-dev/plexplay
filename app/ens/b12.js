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
    titulo: "La hipótesis con si",
    voz: "es-CO-SalomeNeural",
    escenas: [
      {
        v: "persona",
        cap: "Para qué sirve",
        fondo: "esc/cafe-lyon",
        img: "pj/camila-neutra",
        fr: "Tu sais, si j'avais une bourse, j'étudierais à Lyon.",
        es: "¿Sabes? Si tuviera una beca, estudiaría en Lyon.",
        nota: "Si tuviera una beca",
        seg: [
          {
            es: "Camila sueña: si j'avais une bourse, j'étudierais à Lyon. Hugo, más práctico: si tu es libre ce soir, appelle-moi. Dos hipótesis, dos construcciones."
          },
          {
            fr: "Tu sais, si j'avais une bourse, j'étudierais à Lyon.",
            p: 1
          },
          {
            es: "Hoy aprendes a construir hipótesis posibles e imaginarias con si.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Hipótesis posible",
        titulo: "si + presente",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Si tu es libre, appelle-moi.",
            es: "si + presente → imperativo"
          },
          {
            p: 2,
            fr: "S'il pleut, nous annulerons la visite.",
            es: "si + presente → futuro"
          },
          {
            p: 3,
            fr: "Si vous oubliez votre mot de passe, cliquez ici.",
            es: "Si olvida su contraseña, haga clic aquí."
          }
        ],
        seg: [
          {
            es: "Si la hipótesis es posible: si más presente, y después presente, futuro o imperativo.",
            p: 1
          },
          {
            fr: "Si tu es libre, appelle-moi.",
            p: 1
          },
          {
            fr: "S'il pleut, nous annulerons la visite.",
            p: 2
          },
          {
            fr: "Si vous oubliez votre mot de passe, cliquez ici.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Hipótesis imaginaria",
        titulo: "si + imparfait → condicional",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Si j'avais une bourse, j'étudierais à Lyon.",
            es: "si + imparfait → condicional"
          },
          {
            p: 2,
            fr: "Si j'étais riche, j'achèterais une maison. · Si j'étais ministre…",
            es: "Si fuera rico, compraría una casa."
          },
          {
            p: 3,
            fr: "Et si nous prenions le train au lieu de l'avion, nous polluerions moins.",
            es: "Y si tomáramos el tren en vez del avión, contaminaríamos menos."
          }
        ],
        seg: [
          {
            es: "Si es imaginaria: si más imparfait, y luego condicional.",
            p: 1
          },
          {
            fr: "Si j'avais une bourse, j'étudierais à Lyon.",
            p: 1
          },
          {
            fr: "Si j'étais riche, j'achèterais une maison.",
            p: 2
          },
          {
            fr: "Et si nous prenions le train au lieu de l'avion, nous polluerions moins.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "La regla de oro",
        titulo: "Nunca futuro ni condicional tras si",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            regla: "justo después de si: nunca futuro ni condicional"
          },
          {
            p: 2,
            fr: "si elle · si on · s'il",
            es: "si + il = s'il; pero si elle, si on"
          },
          {
            p: 3,
            fr: "Si tu as le temps, viens ! · Si j'avais le temps, je viendrais.",
            es: "posible · imaginaria"
          }
        ],
        seg: [
          {
            es: "La regla de oro: justo después de si, nunca futuro ni condicional.",
            p: 1
          },
          {
            es: "Y si más il da s'il; pero si elle y si on se quedan igual.",
            p: 2
          },
          {
            fr: "si elle, si on, s'il",
            p: 2
          },
          {
            fr: "Si tu as le temps, viens ! Si j'avais le temps, je viendrais.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En la vida real",
        titulo: "Si tuviera una beca",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Si tu es libre ce soir, appelle-moi.",
            es: "Si estás libre esta noche, llámame."
          },
          {
            p: 2,
            fr: "D'accord. Tu sais, si j'avais une bourse, j'étudierais à Lyon.",
            es: "De acuerdo. ¿Sabes? Si tuviera una beca, estudiaría en Lyon."
          },
          {
            p: 3,
            fr: "Et si nous prenions le train au lieu de l'avion, nous polluerions moins.",
            es: "Y si tomáramos el tren en lugar del avión, contaminaríamos menos."
          },
          {
            p: 4,
            fr: "S'il pleut demain, nous annulerons la visite du château. Si j'avais le temps, je ferais du bénévolat.",
            es: "Si llueve mañana, cancelaremos la visita al castillo. Si tuviera tiempo, haría voluntariado."
          }
        ],
        seg: [
          {
            es: "Escucha cómo suena en una conversación de verdad."
          },
          {
            fr: "Si tu es libre ce soir, appelle-moi.",
            p: 1
          },
          {
            fr: "D'accord. Tu sais, si j'avais une bourse, j'étudierais à Lyon.",
            p: 2
          },
          {
            fr: "Et si nous prenions le train au lieu de l'avion, nous polluerions moins.",
            p: 3
          },
          {
            fr: "S'il pleut demain, nous annulerons la visite du château. Si j'avais le temps, je ferais du bénévolat.",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Contraste con el español",
        titulo: "Si tuviera = si j'avais",
        mz: "m2d/alerta",
        items: [
          {
            p: 1,
            regla: "«si tuviera» (subjuntivo) = si j'avais (imparfait)"
          },
          {
            p: 2,
            regla: "nunca «si j'aurais» ni «si je serais»"
          },
          {
            p: 3,
            regla: "«si llueve mañana» = s'il pleut demain (no «s'il pleuvra»)"
          }
        ],
        seg: [
          {
            es: "En español, si tuviera lleva subjuntivo. En francés, imparfait: si j'avais.",
            p: 1
          },
          {
            es: "Nunca si j'aurais.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Si j'aurais le temps…",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Si j'avais le temps…",
          es: "Nunca condicional tras si."
        },
        seg: [
          {
            es: "Primera trampa: el condicional tras si.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Si j'avais le temps…",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Si je serais ministre, je protégerais les forêts.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Si j'étais ministre, je protégerais les forêts.",
          es: "Si + imparfait."
        },
        seg: [
          {
            es: "Segunda trampa: otra vez el condicional.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Si j'étais ministre, je protégerais les forêts.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "S'il pleuvra demain, nous annulerons la visite.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "S'il pleut demain, nous annulerons la visite.",
          es: "Nunca futuro después de si."
        },
        seg: [
          {
            es: "Una trampa más.",
            p: 1
          },
          {
            es: "Usamos el futuro.",
            p: 1
          },
          {
            es: "Lo correcto es:",
            p: 2
          },
          {
            fr: "S'il pleut demain, nous annulerons la visite.",
            p: 2
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/pensativo",
        q: "«Si tuviera tiempo…»",
        o: [
          "Si j'avais le temps…",
          "Si j'aurais le temps…"
        ],
        a: 0,
        bien: "¡Eso es! Si j'avais.",
        mal: "Si + imparfait.",
        seg: [
          {
            es: "Te toca. ¿Cómo lo dices?"
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/confundido",
        q: "Si + imparfait va con…",
        o: [
          "condicional",
          "futuro"
        ],
        a: 0,
        bien: "¡Muy bien! Condicional.",
        mal: "Hipótesis imaginaria.",
        seg: [
          {
            es: "Una más. ¿Qué tiempo sigue?"
          }
        ],
        es: true
      },
      {
        v: "pizarra",
        cap: "Repite conmigo",
        titulo: "Repite conmigo",
        mz: "m2d/explica",
        items: [
          {
            p: 1,
            fr: "Si tu as le temps, viens !",
            es: "Si tienes tiempo, ¡ven!"
          },
          {
            p: 2,
            fr: "Si j'avais le temps, je viendrais.",
            es: "Si tuviera tiempo, vendría."
          },
          {
            p: 3,
            fr: "S'il fait beau samedi, nous irons au parc.",
            es: "Si hace buen tiempo el sábado, iremos al parque."
          }
        ],
        seg: [
          {
            es: "Ahora tú. Escucha cada frase y repítela en voz alta."
          },
          {
            fr: "Si tu as le temps, viens !",
            p: 1
          },
          {
            es: "Otra vez.",
            p: 1
          },
          {
            fr: "Si tu as le temps, viens !",
            p: 1
          },
          {
            fr: "Si j'avais le temps, je viendrais.",
            p: 2
          },
          {
            es: "Otra vez.",
            p: 2
          },
          {
            fr: "Si j'avais le temps, je viendrais.",
            p: 2
          },
          {
            fr: "S'il fait beau samedi, nous irons au parc.",
            p: 3
          },
          {
            es: "Otra vez.",
            p: 3
          },
          {
            fr: "S'il fait beau samedi, nous irons au parc.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Repaso",
        titulo: "Resumen",
        mz: "m2d/celebrar",
        items: [
          {
            p: 1,
            tabla: [
              [
                "Hipótesis",
                "Construcción"
              ],
              [
                "posible",
                "si + presente → presente, futuro, imperativo"
              ],
              [
                "imaginaria",
                "si + imparfait → condicional"
              ],
              [
                "¡nunca!",
                "si + futuro · si + condicional"
              ],
              [
                "si + il",
                "s'il (pero si elle, si on)"
              ]
            ]
          },
          {
            p: 2,
            regla: "Si + presente o si + imparfait"
          }
        ],
        seg: [
          {
            es: "Repasemos.",
            p: 1
          },
          {
            es: "Posible o imaginaria.",
            p: 1
          },
          {
            es: "Y nunca futuro ni condicional tras si. ¡Ahora, a practicar!",
            p: 2
          }
        ]
      }
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
    {
      id: "ojo",
      tipo: "ojo",
      titulo: "Errores frecuentes",
      intro: "Tres errores que cometemos casi todos los hispanohablantes. Cázalos uno por uno.",
      errores: [
        {
          sit: "Camila escribe:",
          frase: "Si j'aurais le temps, je viendrais.",
          mal: "j'aurais",
          bien: "j'avais",
          porque: "Calcamos el condicional.",
          truco: "Nunca condicional después de si."
        },
        {
          sit: "Hugo escribe:",
          frase: "Si je serais ministre, je protégerais les forêts.",
          mal: "je serais",
          bien: "j'étais",
          porque: "Usamos el condicional.",
          truco: "Si + imparfait."
        },
        {
          sit: "Camila escribe:",
          frase: "S'il pleuvra demain, nous annulerons la visite.",
          mal: "pleuvra",
          bien: "pleut",
          porque: "Usamos el futuro.",
          truco: "Nunca futuro después de si."
        }
      ]
    }
  ],
  ejemplos: [
    {
      sit: "«Si tienes tiempo, ¡ven!»",
      resp: "Si tu as le temps, viens !",
      porque: "posible.",
      pasos: [
        {
          q: "¿Posible o imaginaria?",
          ops: [
            "posible",
            "imaginaria"
          ],
          ok: 0
        },
        {
          q: "¿Tras si?",
          ops: [
            "presente",
            "futuro"
          ],
          ok: 0
        },
        {
          q: "¿Después?",
          ops: [
            "imperativo: viens",
            "condicional"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«Si tuviera tiempo, vendría.»",
      resp: "Si j'avais le temps, je viendrais.",
      porque: "imaginaria.",
      pasos: [
        {
          q: "¿Posible o imaginaria?",
          ops: [
            "imaginaria",
            "posible"
          ],
          ok: 0
        },
        {
          q: "¿Tras si?",
          ops: [
            "imparfait: avais",
            "condicional: aurais"
          ],
          ok: 0
        },
        {
          q: "¿Después?",
          ops: [
            "condicional: viendrais",
            "futuro"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«Si hace buen tiempo el sábado, iremos al parque.»",
      resp: "S'il fait beau samedi, nous irons au parc.",
      porque: "posible.",
      pasos: [
        {
          q: "¿Si + il?",
          ops: [
            "s'il",
            "si il"
          ],
          ok: 0
        },
        {
          q: "¿Tras si?",
          ops: [
            "presente: fait",
            "futuro: fera"
          ],
          ok: 0
        },
        {
          q: "¿Después?",
          ops: [
            "futuro: irons",
            "condicional"
          ],
          ok: 0
        }
      ]
    }
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
    titulo: "El discurso indirecto en presente",
    voz: "es-CO-SalomeNeural",
    escenas: [
      {
        v: "persona",
        cap: "Para qué sirve",
        fondo: "esc/aula-universitaria",
        img: "pj/camila-neutra",
        fr: "L'agent me demande si j'ai mon passeport.",
        es: "El agente me pregunta si tengo mi pasaporte.",
        nota: "En la prefectura",
        seg: [
          {
            es: "Camila cuenta lo que le dicen en la prefectura: l'agent me demande si j'ai mon passeport, il nous dit de remplir ce formulaire. Así se repiten las palabras de otro."
          },
          {
            fr: "L'agent me demande si j'ai mon passeport.",
            p: 1
          },
          {
            es: "Hoy aprendes a pasar afirmaciones, preguntas y órdenes al discurso indirecto.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Afirmaciones y preguntas sí / no",
        titulo: "que, si",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "« Je viens. » → Il dit qu'il vient.",
            es: "afirmación: que"
          },
          {
            p: 2,
            fr: "« Tu viens ? » → Il demande si je viens.",
            es: "pregunta sí / no: si"
          },
          {
            p: 3,
            regla: "con el verbo en presente (il dit, il demande), los tiempos no cambian"
          }
        ],
        seg: [
          {
            es: "Una afirmación pasa con que: il dit qu'il vient.",
            p: 1
          },
          {
            fr: "Il dit qu'il vient.",
            p: 1
          },
          {
            es: "Una pregunta de sí o no, con si: il demande si je viens.",
            p: 2
          },
          {
            fr: "Il demande si je viens.",
            p: 2
          },
          {
            es: "Con el verbo en presente, los tiempos no cambian.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Preguntas con palabra interrogativa",
        titulo: "ce que, où, quand",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "« Qu'est-ce que tu apportes ? » → Il demande ce que j'apporte.",
            es: "qu'est-ce que → ce que"
          },
          {
            p: 2,
            fr: "« Quand viens-tu ? » → Il demande quand je viens.",
            es: "où, quand, pourquoi, comment se mantienen"
          },
          {
            p: 3,
            fr: "Il me demande où je vais en vacances.",
            es: "sin inversión"
          }
        ],
        seg: [
          {
            es: "Qu'est-ce que se vuelve ce que: il demande ce que j'apporte.",
            p: 1
          },
          {
            fr: "Il demande ce que j'apporte.",
            p: 1
          },
          {
            es: "Où, quand, pourquoi y comment se mantienen.",
            p: 2
          },
          {
            fr: "Il demande quand je viens.",
            p: 2
          },
          {
            es: "Y sin inversión: où je vais.",
            p: 3
          },
          {
            fr: "Il me demande où je vais en vacances.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Órdenes y pronombres",
        titulo: "de + infinitivo",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "« Viens ! » → Il me dit de venir.",
            es: "orden: de + infinitivo"
          },
          {
            p: 2,
            fr: "Elle me dit de ne pas publier cette photo.",
            es: "negativa: de ne pas + infinitivo"
          },
          {
            p: 3,
            fr: "« Je perds mon temps. » → Léa dit qu'elle perd son temps.",
            es: "cambian pronombres y posesivos"
          }
        ],
        seg: [
          {
            es: "Una orden pasa con de más infinitivo: il me dit de venir.",
            p: 1
          },
          {
            fr: "Il me dit de venir.",
            p: 1
          },
          {
            fr: "Elle me dit de ne pas publier cette photo.",
            p: 2
          },
          {
            es: "Y cambian los pronombres y los posesivos: mon temps, son temps.",
            p: 3
          },
          {
            fr: "Léa dit qu'elle perd son temps.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En la vida real",
        titulo: "En la prefectura",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "L'agent me demande si j'ai mon passeport.",
            es: "El agente me pregunta si tengo mi pasaporte."
          },
          {
            p: 2,
            fr: "Et après ?",
            es: "¿Y después?"
          },
          {
            p: 3,
            fr: "Le fonctionnaire nous dit de remplir ce formulaire. Il me demande pourquoi je suis en retard !",
            es: "El funcionario nos dice que llenemos este formulario. ¡Me pregunta por qué llegué tarde!"
          },
          {
            p: 4,
            fr: "Le professeur veut savoir ce que nous étudions. Et mon cousin me demande où je vais en vacances.",
            es: "El profesor quiere saber qué estudiamos. Y mi primo me pregunta adónde voy de vacaciones."
          }
        ],
        seg: [
          {
            es: "Escucha cómo suena en una conversación de verdad."
          },
          {
            fr: "L'agent me demande si j'ai mon passeport.",
            p: 1
          },
          {
            fr: "Et après ?",
            p: 2
          },
          {
            fr: "Le fonctionnaire nous dit de remplir ce formulaire. Il me demande pourquoi je suis en retard !",
            p: 3
          },
          {
            fr: "Le professeur veut savoir ce que nous étudions. Et mon cousin me demande où je vais en vacances.",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Contraste con el español",
        titulo: "Me pregunta qué quiero",
        mz: "m2d/alerta",
        items: [
          {
            p: 1,
            regla: "«me pregunta qué quiero» = il me demande ce que je veux (no «qu'est-ce que»)"
          },
          {
            p: 2,
            regla: "«me dice que venga» = il me dit de venir (de + infinitivo)"
          },
          {
            p: 3,
            regla: "sí / no: si (no «est-ce que»)"
          }
        ],
        seg: [
          {
            es: "Me pregunta qué quiero es il me demande ce que je veux.",
            p: 1
          },
          {
            es: "Y me dice que venga: il me dit de venir.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Il me demande qu'est-ce que je veux.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Il me demande ce que je veux.",
          es: "Qu'est-ce que → ce que."
        },
        seg: [
          {
            es: "Primera trampa: qu'est-ce que.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Il me demande ce que je veux.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Il me dit que je viens. (orden)",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Il me dit de venir.",
          es: "Orden: de + infinitivo."
        },
        seg: [
          {
            es: "Segunda trampa: la orden.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Il me dit de venir.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Il demande est-ce que tu viens.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Il demande si tu viens.",
          es: "Sí / no → si."
        },
        seg: [
          {
            es: "Una trampa más.",
            p: 1
          },
          {
            es: "Dejamos est-ce que.",
            p: 1
          },
          {
            es: "Lo correcto es:",
            p: 2
          },
          {
            fr: "Il demande si tu viens.",
            p: 2
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/pensativo",
        q: "« Tu viens ? » →",
        o: [
          "Il demande si tu viens.",
          "Il demande est-ce que tu viens."
        ],
        a: 0,
        bien: "¡Eso es! Si.",
        mal: "Sí / no → si.",
        seg: [
          {
            es: "Te toca. ¿Cómo lo pasas?"
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/confundido",
        q: "Una orden pasa con…",
        o: [
          "de + infinitivo",
          "que + presente"
        ],
        a: 0,
        bien: "¡Muy bien! De + infinitivo.",
        mal: "Il me dit de venir.",
        seg: [
          {
            es: "Una más. ¿Cómo pasa una orden?"
          }
        ],
        es: true
      },
      {
        v: "pizarra",
        cap: "Repite conmigo",
        titulo: "Repite conmigo",
        mz: "m2d/explica",
        items: [
          {
            p: 1,
            fr: "Il me demande si j'ai mon passeport.",
            es: " Tu as ton passeport ? "
          },
          {
            p: 2,
            fr: "Il veut savoir ce que nous étudions.",
            es: " Qu'est-ce que vous étudiez ? "
          },
          {
            p: 3,
            fr: "Il nous dit de remplir ce formulaire.",
            es: " Remplissez ce formulaire ! "
          }
        ],
        seg: [
          {
            es: "Ahora tú. Escucha cada frase y repítela en voz alta."
          },
          {
            fr: "Il me demande si j'ai mon passeport.",
            p: 1
          },
          {
            es: "Otra vez.",
            p: 1
          },
          {
            fr: "Il me demande si j'ai mon passeport.",
            p: 1
          },
          {
            fr: "Il veut savoir ce que nous étudions.",
            p: 2
          },
          {
            es: "Otra vez.",
            p: 2
          },
          {
            fr: "Il veut savoir ce que nous étudions.",
            p: 2
          },
          {
            fr: "Il nous dit de remplir ce formulaire.",
            p: 3
          },
          {
            es: "Otra vez.",
            p: 3
          },
          {
            fr: "Il nous dit de remplir ce formulaire.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Repaso",
        titulo: "Resumen",
        mz: "m2d/celebrar",
        items: [
          {
            p: 1,
            tabla: [
              [
                "Directo",
                "Indirecto"
              ],
              [
                "« Je viens. »",
                "Il dit qu'il vient."
              ],
              [
                "« Tu viens ? »",
                "Il demande si je viens."
              ],
              [
                "« Qu'est-ce que tu apportes ? »",
                "Il demande ce que j'apporte."
              ],
              [
                "« Quand viens-tu ? »",
                "Il demande quand je viens."
              ],
              [
                "« Viens ! »",
                "Il me dit de venir."
              ]
            ]
          },
          {
            p: 2,
            regla: "Que, si, ce que, de + infinitivo"
          }
        ],
        seg: [
          {
            es: "Repasemos.",
            p: 1
          },
          {
            es: "Repetir las palabras de otro.",
            p: 1
          },
          {
            es: "Y cambiar los pronombres. ¡Ahora, a practicar!",
            p: 2
          }
        ]
      }
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
    {
      id: "ojo",
      tipo: "ojo",
      titulo: "Errores frecuentes",
      intro: "Tres errores que cometemos casi todos los hispanohablantes. Cázalos uno por uno.",
      errores: [
        {
          sit: "Camila cuenta:",
          frase: "La secrétaire me demande qu'est-ce que je veux.",
          mal: "qu'est-ce que",
          bien: "ce que",
          porque: "Usamos la pregunta directa.",
          truco: "Qu'est-ce que → ce que."
        },
        {
          sit: "Camila cuenta:",
          frase: "Il me dit que je viens. (es una orden)",
          mal: "que je viens",
          bien: "de venir",
          porque: "Pasamos la orden con que.",
          truco: "Orden: de + infinitivo."
        },
        {
          sit: "Hugo cuenta:",
          frase: "Il demande est-ce que tu viens.",
          mal: "est-ce que",
          bien: "si",
          porque: "Dejamos est-ce que.",
          truco: "Sí / no → si."
        }
      ]
    }
  ],
  ejemplos: [
    {
      sit: "« Tu as ton passeport ? »",
      resp: "Il me demande si j'ai mon passeport.",
      porque: "sí / no.",
      pasos: [
        {
          q: "¿Tipo de pregunta?",
          ops: [
            "sí / no",
            "con palabra interrogativa"
          ],
          ok: 0
        },
        {
          q: "¿Conector?",
          ops: [
            "si",
            "que"
          ],
          ok: 0
        },
        {
          q: "¿Ton → ?",
          ops: [
            "mon",
            "son"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "« Qu'est-ce que vous étudiez ? »",
      resp: "Il veut savoir ce que nous étudions.",
      porque: "ce que.",
      pasos: [
        {
          q: "¿Qu'est-ce que → ?",
          ops: [
            "ce que",
            "qu'est-ce que"
          ],
          ok: 0
        },
        {
          q: "¿Vous → ?",
          ops: [
            "nous",
            "vous"
          ],
          ok: 0
        },
        {
          q: "¿Inversión?",
          ops: [
            "no",
            "sí"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "« Remplissez ce formulaire ! »",
      resp: "Il nous dit de remplir ce formulaire.",
      porque: "orden.",
      pasos: [
        {
          q: "¿Tipo?",
          ops: [
            "orden",
            "pregunta"
          ],
          ok: 0
        },
        {
          q: "¿Construcción?",
          ops: [
            "de + infinitivo",
            "que + presente"
          ],
          ok: 0
        },
        {
          q: "¿La frase?",
          ops: [
            "Il nous dit de remplir ce formulaire.",
            "Il nous dit que nous remplissons ce formulaire."
          ],
          ok: 0
        }
      ]
    }
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
    titulo: "Los pronombres dobles",
    voz: "es-CO-SalomeNeural",
    escenas: [
      {
        v: "persona",
        cap: "Para qué sirve",
        fondo: "esc/biblioteca",
        img: "pj/hugo-neutro",
        fr: "Le dictionnaire ? Je te le prête volontiers.",
        es: "¿El diccionario? Te lo presto con gusto.",
        nota: "Préstamos",
        seg: [
          {
            es: "Camila le presta un diccionario a Hugo: je te le prête. Él envió una dirección: je la leur ai envoyée. Dos pronombres juntos, en un orden fijo."
          },
          {
            fr: "Le dictionnaire ? Je te le prête volontiers.",
            p: 1
          },
          {
            es: "Hoy aprendes el orden de los pronombres dobles.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "El orden",
        titulo: "me te nous vous → le la les → lui leur → y → en",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Je te le prête. · Je te les ai rendues.",
            es: "me / te / nous / vous primero"
          },
          {
            p: 2,
            fr: "Je le lui ai prêté. · Je la leur ai envoyée.",
            es: "le / la / les antes de lui / leur"
          },
          {
            p: 3,
            fr: "Je lui en ai parlé. · Je t'en donne.",
            es: "en, siempre al final"
          }
        ],
        seg: [
          {
            es: "El orden: primero me, te, nous, vous; luego le, la, les.",
            p: 1
          },
          {
            fr: "Je te le prête. Je te les ai rendues.",
            p: 1
          },
          {
            es: "Pero le, la, les van antes de lui y leur.",
            p: 2
          },
          {
            fr: "Je le lui ai prêté. Je la leur ai envoyée.",
            p: 2
          },
          {
            es: "Y en, siempre al final.",
            p: 3
          },
          {
            fr: "Je lui en ai parlé. Je t'en donne.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Tiempos compuestos e infinitivo",
        titulo: "Delante del auxiliar o del infinitivo",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Je te les ai rendues. (les photos)",
            es: "delante del auxiliar; el participio concuerda con les"
          },
          {
            p: 2,
            fr: "Je vais vous les expliquer.",
            es: "con infinitivo: delante del infinitivo"
          },
          {
            p: 3,
            fr: "Il ne me l'a pas dit.",
            es: "negación alrededor del bloque"
          }
        ],
        seg: [
          {
            es: "En un tiempo compuesto, van delante del auxiliar, y el participio concuerda con le, la, les.",
            p: 1
          },
          {
            fr: "Je te les ai rendues.",
            p: 1
          },
          {
            es: "Con un infinitivo, delante del infinitivo.",
            p: 2
          },
          {
            fr: "Je vais vous les expliquer.",
            p: 2
          },
          {
            fr: "Il ne me l'a pas dit.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "El imperativo",
        titulo: "Donne-le-moi · Ne me les montre pas",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Donne-la-moi ! · Donne-le-moi !",
            es: "afirmativo: verbo-COD-COI"
          },
          {
            p: 2,
            fr: "Ne me les montre pas !",
            es: "negativo: el orden normal"
          },
          {
            p: 3,
            fr: "Tu as la clé ? Donne-la-moi, s'il te plaît.",
            es: "¿Tienes la llave? Dámela, por favor."
          }
        ],
        seg: [
          {
            es: "En el imperativo afirmativo: verbo, COD, COI. Donne-la-moi.",
            p: 1
          },
          {
            fr: "Donne-la-moi ! Donne-le-moi !",
            p: 1
          },
          {
            es: "En el negativo, el orden normal: ne me les montre pas.",
            p: 2
          },
          {
            fr: "Ne me les montre pas !",
            p: 2
          },
          {
            fr: "Tu as la clé ? Donne-la-moi, s'il te plaît.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En la vida real",
        titulo: "Préstamos",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Tu as mon dictionnaire ?",
            es: "¿Tienes mi diccionario?"
          },
          {
            p: 2,
            fr: "Le dictionnaire ? Je te le prête volontiers. Et tes livres ? Oui, je te les ai rendues… euh, rendus ce matin.",
            es: "¿El diccionario? Te lo presto con gusto. ¿Y tus libros? Sí, te los devolví esta mañana."
          },
          {
            p: 3,
            fr: "La nouvelle adresse ? Je la leur ai envoyée hier. Et les règles, je vais vous les expliquer.",
            es: "¿La nueva dirección? Se la envié ayer. Y las reglas, se las voy a explicar."
          },
          {
            p: 4,
            fr: "Tu as la clé ? Donne-la-moi, s'il te plaît. Et ces vidéos ? Ne me les montre pas !",
            es: "¿Tienes la llave? Dámela, por favor. ¿Y esos videos? ¡No me los muestres!"
          }
        ],
        seg: [
          {
            es: "Escucha cómo suena en una conversación de verdad."
          },
          {
            fr: "Tu as mon dictionnaire ?",
            p: 1
          },
          {
            fr: "Le dictionnaire ? Je te le prête volontiers. Et tes livres ? Oui, je te les ai rendues… euh, rendus ce matin.",
            p: 2
          },
          {
            fr: "La nouvelle adresse ? Je la leur ai envoyée hier. Et les règles, je vais vous les expliquer.",
            p: 3
          },
          {
            fr: "Tu as la clé ? Donne-la-moi, s'il te plaît. Et ces vidéos ? Ne me les montre pas !",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Contraste con el español",
        titulo: "Se lo doy = je le lui donne",
        mz: "m2d/alerta",
        items: [
          {
            p: 1,
            regla: "«te lo doy» = je te le donne (igual que en español)"
          },
          {
            p: 2,
            regla: "«se lo doy» = je le lui donne (al revés: le antes de lui)"
          },
          {
            p: 3,
            regla: "en español «se»; en francés lui o leur"
          }
        ],
        seg: [
          {
            es: "Te lo doy va igual que en español: je te le donne.",
            p: 1
          },
          {
            es: "Pero se lo doy va al revés: je le lui donne.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Je le te donne.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Je te le donne.",
          es: "Me / te primero."
        },
        seg: [
          {
            es: "Primera trampa: el orden.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Je te le donne.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Je lui le donne.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Je le lui donne.",
          es: "Le antes de lui."
        },
        seg: [
          {
            es: "Segunda trampa: el orden con lui.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Je le lui donne.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Ces photos ? Ma sœur me le a envoyées hier.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Ces photos ? Ma sœur me les a envoyées hier.",
          es: "Plural: les."
        },
        seg: [
          {
            es: "Una trampa más.",
            p: 1
          },
          {
            es: "Usamos el singular.",
            p: 1
          },
          {
            es: "Lo correcto es:",
            p: 2
          },
          {
            fr: "Ces photos ? Ma sœur me les a envoyées hier.",
            p: 2
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/pensativo",
        q: "«Te lo doy.»",
        o: [
          "Je te le donne.",
          "Je le te donne."
        ],
        a: 0,
        bien: "¡Eso es! Je te le donne.",
        mal: "Te primero.",
        seg: [
          {
            es: "Te toca. ¿Cómo lo dices?"
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/confundido",
        q: "«Se lo doy (a él).»",
        o: [
          "Je le lui donne.",
          "Je lui le donne."
        ],
        a: 0,
        bien: "¡Muy bien! Le lui.",
        mal: "Le antes de lui.",
        seg: [
          {
            es: "Una más. ¿Cómo lo dices?"
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Repite conmigo",
        titulo: "Repite conmigo",
        mz: "m2d/explica",
        items: [
          {
            p: 1,
            fr: "Je te le prête.",
            es: "¿El diccionario? Te lo presto."
          },
          {
            p: 2,
            fr: "Je la leur ai envoyée.",
            es: "Se la envié (la dirección, a ellos)."
          },
          {
            p: 3,
            fr: "Je lui en ai parlé la semaine dernière.",
            es: "Le hablé de eso la semana pasada."
          }
        ],
        seg: [
          {
            es: "Ahora tú. Escucha cada frase y repítela en voz alta."
          },
          {
            fr: "Je te le prête.",
            p: 1
          },
          {
            es: "Otra vez.",
            p: 1
          },
          {
            fr: "Je te le prête.",
            p: 1
          },
          {
            fr: "Je la leur ai envoyée.",
            p: 2
          },
          {
            es: "Otra vez.",
            p: 2
          },
          {
            fr: "Je la leur ai envoyée.",
            p: 2
          },
          {
            fr: "Je lui en ai parlé la semaine dernière.",
            p: 3
          },
          {
            es: "Otra vez.",
            p: 3
          },
          {
            fr: "Je lui en ai parlé la semaine dernière.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Repaso",
        titulo: "Resumen",
        mz: "m2d/celebrar",
        items: [
          {
            p: 1,
            tabla: [
              [
                "Orden",
                "Ejemplo"
              ],
              [
                "me/te/nous/vous + le/la/les",
                "Je te le prête."
              ],
              [
                "le/la/les + lui/leur",
                "Je le lui ai prêté. · Je la leur ai envoyée."
              ],
              [
                "… + en",
                "Je lui en ai parlé. · Je t'en donne."
              ],
              [
                "imperativo afirmativo",
                "Donne-le-moi !"
              ],
              [
                "imperativo negativo",
                "Ne me les montre pas !"
              ]
            ]
          },
          {
            p: 2,
            regla: "me te nous vous → le la les → lui leur → y → en"
          }
        ],
        seg: [
          {
            es: "Repasemos.",
            p: 1
          },
          {
            es: "El orden de los pronombres.",
            p: 1
          },
          {
            es: "Y le antes de lui. ¡Ahora, a practicar!",
            p: 2
          }
        ]
      }
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
    {
      id: "ojo",
      tipo: "ojo",
      titulo: "Errores frecuentes",
      intro: "Tres errores que cometemos casi todos los hispanohablantes. Cázalos uno por uno.",
      errores: [
        {
          sit: "Camila escribe:",
          frase: "Je le te donne.",
          mal: "le te",
          bien: "te le",
          porque: "Ponemos le primero.",
          truco: "Me / te / nous / vous primero."
        },
        {
          sit: "Hugo escribe:",
          frase: "Je lui le donne demain.",
          mal: "lui le",
          bien: "le lui",
          porque: "Ponemos lui primero.",
          truco: "Le / la / les antes de lui / leur."
        },
        {
          sit: "Camila escribe:",
          frase: "Ces photos ? Ma sœur me le a envoyées hier.",
          mal: "me le a",
          bien: "me les a",
          porque: "Usamos el singular.",
          truco: "Plural: les."
        }
      ]
    }
  ],
  ejemplos: [
    {
      sit: "«¿El diccionario? Te lo presto.»",
      resp: "Je te le prête.",
      porque: "te + le.",
      pasos: [
        {
          q: "¿Qué va primero?",
          ops: [
            "te",
            "le"
          ],
          ok: 0
        },
        {
          q: "¿Le reemplaza…?",
          ops: [
            "le dictionnaire",
            "à toi"
          ],
          ok: 0
        },
        {
          q: "¿La frase?",
          ops: [
            "Je te le prête.",
            "Je le te prête."
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«Se la envié (la dirección, a ellos).»",
      resp: "Je la leur ai envoyée.",
      porque: "la + leur.",
      pasos: [
        {
          q: "¿Orden?",
          ops: [
            "la leur",
            "leur la"
          ],
          ok: 0
        },
        {
          q: "¿Dónde van?",
          ops: [
            "delante del auxiliar",
            "detrás"
          ],
          ok: 0
        },
        {
          q: "¿Participio?",
          ops: [
            "envoyée (concuerda con la)",
            "envoyé"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«Le hablé de eso la semana pasada.»",
      resp: "Je lui en ai parlé la semaine dernière.",
      porque: "lui + en.",
      pasos: [
        {
          q: "¿De eso?",
          ops: [
            "en",
            "le"
          ],
          ok: 0
        },
        {
          q: "¿Orden?",
          ops: [
            "lui en",
            "en lui"
          ],
          ok: 0
        },
        {
          q: "¿Concordancia?",
          ops: [
            "no (en)",
            "sí"
          ],
          ok: 0
        }
      ]
    }
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
    titulo: "Expresar el tiempo: depuis, il y a, pendant, en, dans, pour",
    voz: "es-CO-SalomeNeural",
    escenas: [
      {
        v: "persona",
        cap: "Para qué sirve",
        fondo: "esc/aula-universitaria",
        img: "pj/camila-neutra",
        fr: "J'ai obtenu mon visa il y a trois semaines. Nous attendions la réponse depuis un mois !",
        es: "Obtuve mi visa hace tres semanas. ¡Esperábamos la respuesta desde hacía un mes!",
        nota: "La visa",
        seg: [
          {
            es: "Camila obtuvo su visa il y a trois semaines, tras esperar depuis un mois. Hugo llenó el formulario en dix minutes. Seis palabras para el tiempo, y cada una tiene su uso."
          },
          {
            fr: "J'ai obtenu mon visa il y a trois semaines. Nous attendions la réponse depuis un mois !",
            p: 1
          },
          {
            es: "Hoy aprendes a elegir entre il y a, depuis, pendant, pour, en y dans.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Pasado",
        titulo: "il y a, depuis, pendant",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "il y a trois semaines",
            es: "il y a = hace (acción terminada)"
          },
          {
            p: 2,
            fr: "depuis un mois · depuis 2020 · Il neige depuis ce matin.",
            es: "depuis = desde (sigue hasta hoy)"
          },
          {
            p: 3,
            fr: "pendant trois ans · pendant toute la nuit",
            es: "pendant = durante"
          }
        ],
        seg: [
          {
            es: "Il y a: hace, para una acción terminada.",
            p: 1
          },
          {
            fr: "il y a trois semaines",
            p: 1
          },
          {
            es: "Depuis: desde, la acción sigue hasta hoy.",
            p: 2
          },
          {
            fr: "depuis un mois, depuis 2020. Il neige depuis ce matin.",
            p: 2
          },
          {
            es: "Pendant: durante.",
            p: 3
          },
          {
            fr: "pendant trois ans, pendant toute la nuit",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Duración y futuro",
        titulo: "pour, en, dans",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Ma cousine part en France pour un semestre.",
            es: "pour = duración prevista (partir, venir, aller)"
          },
          {
            p: 2,
            fr: "J'ai rempli le formulaire en dix minutes.",
            es: "en = tiempo necesario"
          },
          {
            p: 3,
            fr: "Le bus pour l'aéroport part dans vingt minutes.",
            es: "dans = dentro de (futuro)"
          }
        ],
        seg: [
          {
            es: "Pour: duración prevista, con partir o venir.",
            p: 1
          },
          {
            fr: "Ma cousine part en France pour un semestre.",
            p: 1
          },
          {
            es: "En: el tiempo que tardas.",
            p: 2
          },
          {
            fr: "J'ai rempli le formulaire en dix minutes.",
            p: 2
          },
          {
            es: "Dans: dentro de, en el futuro.",
            p: 3
          },
          {
            fr: "Le bus pour l'aéroport part dans vingt minutes.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En la frase",
        titulo: "Tu habites ici depuis quand ?",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Je suis arrivé il y a deux jours.",
            es: "Llegué hace dos días."
          },
          {
            p: 2,
            fr: "Moi, j'apprends le français depuis deux ans.",
            es: "Yo aprendo francés desde hace dos años."
          },
          {
            p: 3,
            fr: "Je pars dans une semaine.",
            es: "Me voy dentro de una semana."
          }
        ],
        seg: [
          {
            fr: "Je suis arrivé il y a deux jours.",
            p: 1
          },
          {
            fr: "Moi, j'apprends le français depuis deux ans.",
            p: 2
          },
          {
            fr: "Je pars dans une semaine.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En la vida real",
        titulo: "La visa",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "J'ai obtenu mon visa il y a trois semaines. Nous attendions la réponse depuis un mois !",
            es: "Obtuve mi visa hace tres semanas. ¡Esperábamos la respuesta desde hacía un mes!"
          },
          {
            p: 2,
            fr: "J'ai rempli le formulaire en dix minutes : c'était très simple.",
            es: "Llené el formulario en diez minutos: era muy sencillo."
          },
          {
            p: 3,
            fr: "Le bus pour l'aéroport part dans vingt minutes. Ma cousine part en France pour un semestre.",
            es: "El bus al aeropuerto sale dentro de veinte minutos. Mi prima se va a Francia por un semestre."
          },
          {
            p: 4,
            fr: "Tu habites ici depuis quand ? Moi, j'apprends le français depuis deux ans.",
            es: "¿Desde cuándo vives aquí? Yo aprendo francés desde hace dos años."
          }
        ],
        seg: [
          {
            es: "Escucha cómo suena en una conversación de verdad."
          },
          {
            fr: "J'ai obtenu mon visa il y a trois semaines. Nous attendions la réponse depuis un mois !",
            p: 1
          },
          {
            fr: "J'ai rempli le formulaire en dix minutes : c'était très simple.",
            p: 2
          },
          {
            fr: "Le bus pour l'aéroport part dans vingt minutes. Ma cousine part en France pour un semestre.",
            p: 3
          },
          {
            fr: "Tu habites ici depuis quand ? Moi, j'apprends le français depuis deux ans.",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Contraste con el español",
        titulo: "Hace ≠ desde hace",
        mz: "m2d/alerta",
        items: [
          {
            p: 1,
            regla: "«llegué hace dos días» = il y a (no «depuis»)"
          },
          {
            p: 2,
            regla: "«viví allí tres años» (terminado) = pendant (no «depuis»)"
          },
          {
            p: 3,
            regla: "«dentro de una semana» = dans (no «en»)"
          }
        ],
        seg: [
          {
            es: "Hace es il y a; desde hace, depuis.",
            p: 1
          },
          {
            es: "Y dentro de es dans, no en.",
            p: 3
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Je suis arrivé depuis deux jours.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Je suis arrivé il y a deux jours.",
          es: "Acción terminada → il y a."
        },
        seg: [
          {
            es: "Primera trampa: depuis.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Je suis arrivé il y a deux jours.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Elle a vécu à Lyon depuis trois ans, puis elle est rentrée.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Elle a vécu à Lyon pendant trois ans, puis elle est rentrée.",
          es: "Terminó: pendant."
        },
        seg: [
          {
            es: "Segunda trampa: depuis con algo terminado.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Elle a vécu à Lyon pendant trois ans, puis elle est rentrée.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Je pars en une semaine.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Je pars dans une semaine.",
          es: "Dentro de = dans."
        },
        seg: [
          {
            es: "Una trampa más.",
            p: 1
          },
          {
            es: "Calcamos «en una semana».",
            p: 1
          },
          {
            es: "Lo correcto es:",
            p: 2
          },
          {
            fr: "Je pars dans une semaine.",
            p: 2
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/pensativo",
        q: "«J'ai obtenu mon visa ___ trois semaines.»",
        o: [
          "il y a",
          "depuis"
        ],
        a: 0,
        bien: "¡Eso es! Il y a.",
        mal: "Acción terminada.",
        seg: [
          {
            es: "Te toca. ¿Il y a o depuis?"
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/confundido",
        q: "«Me voy dentro de una semana.»",
        o: [
          "Je pars dans une semaine.",
          "Je pars en une semaine."
        ],
        a: 0,
        bien: "¡Muy bien! Dans.",
        mal: "Dentro de = dans.",
        seg: [
          {
            es: "Una más. ¿Cuál es correcta?"
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Repite conmigo",
        titulo: "Repite conmigo",
        mz: "m2d/explica",
        items: [
          {
            p: 1,
            fr: "J'ai obtenu mon visa il y a trois semaines.",
            es: "Obtuve la visa hace tres semanas."
          },
          {
            p: 2,
            fr: "Nous attendons depuis un mois.",
            es: "Esperamos desde hace un mes."
          },
          {
            p: 3,
            fr: "Je l'ai rempli en dix minutes.",
            es: "Lo llené en diez minutos."
          }
        ],
        seg: [
          {
            es: "Ahora tú. Escucha cada frase y repítela en voz alta."
          },
          {
            fr: "J'ai obtenu mon visa il y a trois semaines.",
            p: 1
          },
          {
            es: "Otra vez.",
            p: 1
          },
          {
            fr: "J'ai obtenu mon visa il y a trois semaines.",
            p: 1
          },
          {
            fr: "Nous attendons depuis un mois.",
            p: 2
          },
          {
            es: "Otra vez.",
            p: 2
          },
          {
            fr: "Nous attendons depuis un mois.",
            p: 2
          },
          {
            fr: "Je l'ai rempli en dix minutes.",
            p: 3
          },
          {
            es: "Otra vez.",
            p: 3
          },
          {
            fr: "Je l'ai rempli en dix minutes.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Repaso",
        titulo: "Resumen",
        mz: "m2d/celebrar",
        items: [
          {
            p: 1,
            tabla: [
              [
                "Palabra",
                "Uso"
              ],
              [
                "il y a",
                "hace (terminado)"
              ],
              [
                "depuis",
                "desde hace (sigue)"
              ],
              [
                "pendant",
                "durante"
              ],
              [
                "pour",
                "duración prevista"
              ],
              [
                "en",
                "tiempo necesario"
              ],
              [
                "dans",
                "dentro de (futuro)"
              ]
            ]
          },
          {
            p: 2,
            regla: "Cada palabra, su tiempo"
          }
        ],
        seg: [
          {
            es: "Repasemos.",
            p: 1
          },
          {
            es: "Hace, desde, durante, en, dentro de.",
            p: 1
          },
          {
            es: "Y depuis solo si sigue hasta hoy. ¡Ahora, a practicar!",
            p: 2
          }
        ]
      }
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
    {
      id: "ojo",
      tipo: "ojo",
      titulo: "Errores frecuentes",
      intro: "Tres errores que cometemos casi todos los hispanohablantes. Cázalos uno por uno.",
      errores: [
        {
          sit: "Hugo escribe:",
          frase: "Je suis arrivé depuis deux jours.",
          mal: "depuis",
          bien: "il y a",
          porque: "Usamos depuis con algo terminado.",
          truco: "Acción terminada → il y a."
        },
        {
          sit: "Camila escribe:",
          frase: "Elle a vécu à Lyon depuis trois ans, puis elle est rentrée en Colombie.",
          mal: "depuis",
          bien: "pendant",
          porque: "Usamos depuis con algo terminado.",
          truco: "Terminó: pendant."
        },
        {
          sit: "Camila escribe:",
          frase: "Je pars en une semaine.",
          mal: "en une semaine",
          bien: "dans une semaine",
          porque: "Calcamos «en una semana».",
          truco: "Dentro de = dans."
        }
      ]
    }
  ],
  ejemplos: [
    {
      sit: "«Obtuve la visa hace tres semanas.»",
      resp: "J'ai obtenu mon visa il y a trois semaines.",
      porque: "il y a.",
      pasos: [
        {
          q: "¿Terminada?",
          ops: [
            "sí",
            "no"
          ],
          ok: 0
        },
        {
          q: "¿Palabra?",
          ops: [
            "il y a",
            "depuis"
          ],
          ok: 0
        },
        {
          q: "¿Tiempo del verbo?",
          ops: [
            "passé composé",
            "presente"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«Esperamos desde hace un mes.»",
      resp: "Nous attendons depuis un mois.",
      porque: "depuis.",
      pasos: [
        {
          q: "¿Sigue hasta hoy?",
          ops: [
            "sí",
            "no"
          ],
          ok: 0
        },
        {
          q: "¿Palabra?",
          ops: [
            "depuis",
            "pendant"
          ],
          ok: 0
        },
        {
          q: "¿Tiempo del verbo?",
          ops: [
            "presente",
            "passé composé"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«Lo llené en diez minutos.»",
      resp: "Je l'ai rempli en dix minutes.",
      porque: "en.",
      pasos: [
        {
          q: "¿Qué expresa?",
          ops: [
            "el tiempo necesario",
            "un momento futuro"
          ],
          ok: 0
        },
        {
          q: "¿Palabra?",
          ops: [
            "en",
            "dans"
          ],
          ok: 0
        },
        {
          q: "¿Pronombre?",
          ops: [
            "l' (le formulaire)",
            "lui"
          ],
          ok: 0
        }
      ]
    }
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
    titulo: "Expresar la causa y la consecuencia",
    voz: "es-CO-SalomeNeural",
    escenas: [
      {
        v: "persona",
        cap: "Para qué sirve",
        fondo: "esc/calle-paris",
        img: "pj/hugo-neutro",
        fr: "Comme il y avait une grève, les cours ont été annulés.",
        es: "Como había una huelga, las clases fueron canceladas.",
        nota: "La huelga",
        seg: [
          {
            es: "Camila explica por qué no hubo clases: comme il y avait une grève. Hugo: la route est fermée à cause de la tempête. Y Camila obtuvo su beca grâce à ses notes."
          },
          {
            fr: "Comme il y avait une grève, les cours ont été annulés.",
            p: 1
          },
          {
            es: "Hoy aprendes a expresar causas y consecuencias, con una frase o con un nombre.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Causa + frase",
        titulo: "parce que, car, comme",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "parce que · car",
            es: "porque (car, más escrito)"
          },
          {
            p: 2,
            fr: "Comme il y avait une grève…",
            es: "comme: siempre al inicio de la frase"
          },
          {
            p: 3,
            fr: "Comme il pleuvait, je suis resté.",
            es: "Como llovía, me quedé."
          }
        ],
        seg: [
          {
            es: "Con una frase: parce que, car.",
            p: 1
          },
          {
            fr: "parce que, car",
            p: 1
          },
          {
            es: "Y comme, siempre al principio.",
            p: 2
          },
          {
            fr: "Comme il y avait une grève…",
            p: 2
          },
          {
            fr: "Comme il pleuvait, je suis resté.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Causa + nombre",
        titulo: "grâce à, à cause de",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "J'ai obtenu ma bourse grâce à mes bonnes notes. · grâce au tri",
            es: "grâce à: causa positiva (grâce au)"
          },
          {
            p: 2,
            fr: "La route est fermée à cause de la tempête.",
            es: "à cause de: causa negativa"
          },
          {
            p: 3,
            fr: "en raison de",
            es: "neutro, formal"
          }
        ],
        seg: [
          {
            es: "Con un nombre: grâce à, si la causa es positiva.",
            p: 1
          },
          {
            fr: "J'ai obtenu ma bourse grâce à mes bonnes notes.",
            p: 1
          },
          {
            es: "À cause de, si es negativa.",
            p: 2
          },
          {
            fr: "La route est fermée à cause de la tempête.",
            p: 2
          },
          {
            es: "Y en raison de, neutro y formal.",
            p: 3
          },
          {
            fr: "en raison de",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "La consecuencia",
        titulo: "donc, c'est pourquoi, si bien que",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Il était malade, donc il n'est pas venu. · alors",
            es: "así que · entonces"
          },
          {
            p: 2,
            fr: "Les transports sont gratuits ; c'est pourquoi beaucoup d'habitants ont laissé leur voiture.",
            es: "por eso"
          },
          {
            p: 3,
            fr: "Il a beaucoup plu, si bien que la rivière a débordé.",
            es: "de modo que"
          }
        ],
        seg: [
          {
            es: "La consecuencia: donc, alors.",
            p: 1
          },
          {
            fr: "Il était malade, donc il n'est pas venu.",
            p: 1
          },
          {
            es: "C'est pourquoi: por eso.",
            p: 2
          },
          {
            fr: "Les transports sont gratuits ; c'est pourquoi beaucoup d'habitants ont laissé leur voiture.",
            p: 2
          },
          {
            es: "Si bien que: de modo que.",
            p: 3
          },
          {
            fr: "Il a beaucoup plu, si bien que la rivière a débordé.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En la vida real",
        titulo: "La huelga",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Comme il y avait une grève, les cours ont été annulés.",
            es: "Como había una huelga, se cancelaron las clases."
          },
          {
            p: 2,
            fr: "Et la route est fermée à cause de la tempête. Il a beaucoup plu, si bien que la rivière a débordé.",
            es: "Y la carretera está cerrada por la tormenta. Llovió mucho, de modo que el río se desbordó."
          },
          {
            p: 3,
            fr: "Nous avons réduit nos déchets grâce au tri sélectif. J'ai obtenu ma bourse grâce à mes bonnes notes !",
            es: "Redujimos nuestros residuos gracias al reciclaje. ¡Obtuve mi beca gracias a mis buenas notas!"
          },
          {
            p: 4,
            fr: "Les transports sont gratuits ici ; c'est pourquoi beaucoup d'habitants ont laissé leur voiture au garage.",
            es: "Aquí el transporte es gratis; por eso muchos habitantes dejaron su carro en el garaje."
          }
        ],
        seg: [
          {
            es: "Escucha cómo suena en una conversación de verdad."
          },
          {
            fr: "Comme il y avait une grève, les cours ont été annulés.",
            p: 1
          },
          {
            fr: "Et la route est fermée à cause de la tempête. Il a beaucoup plu, si bien que la rivière a débordé.",
            p: 2
          },
          {
            fr: "Nous avons réduit nos déchets grâce au tri sélectif. J'ai obtenu ma bourse grâce à mes bonnes notes !",
            p: 3
          },
          {
            fr: "Les transports sont gratuits ici ; c'est pourquoi beaucoup d'habitants ont laissé leur voiture au garage.",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Contraste con el español",
        titulo: "Gracias a ≠ à cause de",
        mz: "m2d/alerta",
        items: [
          {
            p: 1,
            regla: "causa positiva = grâce à · negativa = à cause de"
          },
          {
            p: 2,
            regla: "grâce à (no «grâce de»)"
          },
          {
            p: 3,
            regla: "comme va al inicio (no «je suis resté comme il pleuvait»)"
          }
        ],
        seg: [
          {
            es: "Gracias a, para lo bueno; à cause de, para lo malo.",
            p: 1
          },
          {
            es: "Y comme siempre al principio.",
            p: 3
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "J'ai réussi à cause de mon professeur.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "J'ai réussi grâce à mon professeur.",
          es: "Causa positiva → grâce à."
        },
        seg: [
          {
            es: "Primera trampa: à cause de para algo bueno.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "J'ai réussi grâce à mon professeur.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "J'ai obtenu ma bourse grâce de mes notes.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "J'ai obtenu ma bourse grâce à mes notes.",
          es: "Grâce à."
        },
        seg: [
          {
            es: "Segunda trampa: la preposición.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "J'ai obtenu ma bourse grâce à mes notes.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Je suis resté comme il pleuvait.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Comme il pleuvait, je suis resté.",
          es: "Comme va al inicio de la frase."
        },
        seg: [
          {
            es: "Una trampa más.",
            p: 1
          },
          {
            es: "Ponemos comme en medio.",
            p: 1
          },
          {
            es: "Lo correcto es:",
            p: 2
          },
          {
            fr: "Comme il pleuvait, je suis resté.",
            p: 2
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/pensativo",
        q: "«Aprobé gracias a mi profesor.»",
        o: [
          "J'ai réussi grâce à mon professeur.",
          "J'ai réussi à cause de mon professeur."
        ],
        a: 0,
        bien: "¡Eso es! Grâce à.",
        mal: "Causa positiva.",
        seg: [
          {
            es: "Te toca. ¿Cuál es correcta?"
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/confundido",
        q: "Comme va siempre…",
        o: [
          "al inicio de la frase",
          "al final"
        ],
        a: 0,
        bien: "¡Muy bien! Al inicio.",
        mal: "Comme il pleuvait, …",
        seg: [
          {
            es: "Una más. ¿Dónde va comme?"
          }
        ],
        es: true
      },
      {
        v: "pizarra",
        cap: "Repite conmigo",
        titulo: "Repite conmigo",
        mz: "m2d/explica",
        items: [
          {
            p: 1,
            fr: "Comme il y avait une grève, les cours ont été annulés.",
            es: "Como había una huelga, se cancelaron las clases."
          },
          {
            p: 2,
            fr: "grâce au tri sélectif",
            es: "Gracias al reciclaje…"
          },
          {
            p: 3,
            fr: "C'est pourquoi ils dorment moins.",
            es: "Por eso duermen menos."
          }
        ],
        seg: [
          {
            es: "Ahora tú. Escucha cada frase y repítela en voz alta."
          },
          {
            fr: "Comme il y avait une grève, les cours ont été annulés.",
            p: 1
          },
          {
            es: "Otra vez.",
            p: 1
          },
          {
            fr: "Comme il y avait une grève, les cours ont été annulés.",
            p: 1
          },
          {
            fr: "grâce au tri sélectif",
            p: 2
          },
          {
            es: "Otra vez.",
            p: 2
          },
          {
            fr: "grâce au tri sélectif",
            p: 2
          },
          {
            fr: "C'est pourquoi ils dorment moins.",
            p: 3
          },
          {
            es: "Otra vez.",
            p: 3
          },
          {
            fr: "C'est pourquoi ils dorment moins.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Repaso",
        titulo: "Resumen",
        mz: "m2d/celebrar",
        items: [
          {
            p: 1,
            tabla: [
              [
                "Idea",
                "Conector"
              ],
              [
                "causa + frase",
                "parce que · car · comme (al inicio)"
              ],
              [
                "causa + nombre (+)",
                "grâce à (grâce au)"
              ],
              [
                "causa + nombre (−)",
                "à cause de"
              ],
              [
                "neutro",
                "en raison de"
              ],
              [
                "consecuencia",
                "donc · alors · c'est pourquoi · si bien que"
              ]
            ]
          },
          {
            p: 2,
            regla: "Grâce à lo bueno, à cause de lo malo"
          }
        ],
        seg: [
          {
            es: "Repasemos.",
            p: 1
          },
          {
            es: "Causas y consecuencias.",
            p: 1
          },
          {
            es: "Y comme al principio. ¡Ahora, a practicar!",
            p: 2
          }
        ]
      }
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
    {
      id: "ojo",
      tipo: "ojo",
      titulo: "Errores frecuentes",
      intro: "Tres errores que cometemos casi todos los hispanohablantes. Cázalos uno por uno.",
      errores: [
        {
          sit: "Camila escribe:",
          frase: "J'ai réussi à cause de mon professeur.",
          mal: "à cause de",
          bien: "grâce à",
          porque: "Usamos à cause de para algo bueno.",
          truco: "Causa positiva → grâce à."
        },
        {
          sit: "Camila escribe:",
          frase: "J'ai obtenu ma bourse grâce de mes bonnes notes.",
          mal: "grâce de",
          bien: "grâce à",
          porque: "Usamos de.",
          truco: "Grâce à."
        },
        {
          sit: "Hugo escribe:",
          frase: "Je suis resté comme il pleuvait.",
          mal: "Je suis resté comme il pleuvait",
          bien: "Comme il pleuvait, je suis resté",
          porque: "Ponemos comme en medio.",
          truco: "Comme va al inicio de la frase."
        }
      ]
    }
  ],
  ejemplos: [
    {
      sit: "«Como había una huelga, se cancelaron las clases.»",
      resp: "Comme il y avait une grève, les cours ont été annulés.",
      porque: "comme.",
      pasos: [
        {
          q: "¿Dónde va comme?",
          ops: [
            "al inicio",
            "en medio"
          ],
          ok: 0
        },
        {
          q: "¿Había?",
          ops: [
            "il y avait",
            "il y a eu"
          ],
          ok: 0
        },
        {
          q: "¿Se cancelaron?",
          ops: [
            "ont été annulés",
            "ont annulé"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«Gracias al reciclaje…»",
      resp: "grâce au tri sélectif",
      porque: "grâce à.",
      pasos: [
        {
          q: "¿Causa positiva?",
          ops: [
            "sí",
            "no"
          ],
          ok: 0
        },
        {
          q: "¿À + le?",
          ops: [
            "au",
            "à le"
          ],
          ok: 0
        },
        {
          q: "¿Forma?",
          ops: [
            "grâce au",
            "à cause du"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«Por eso duermen menos.»",
      resp: "C'est pourquoi ils dorment moins.",
      porque: "consecuencia.",
      pasos: [
        {
          q: "¿Por eso?",
          ops: [
            "c'est pourquoi",
            "parce que"
          ],
          ok: 0
        },
        {
          q: "¿Causa o consecuencia?",
          ops: [
            "consecuencia",
            "causa"
          ],
          ok: 0
        },
        {
          q: "¿Sinónimo?",
          ops: [
            "donc",
            "car"
          ],
          ok: 0
        }
      ]
    }
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
    titulo: "La voz pasiva",
    voz: "es-CO-SalomeNeural",
    escenas: [
      {
        v: "persona",
        cap: "Para qué sirve",
        fondo: "esc/calle-paris",
        img: "pj/camila-neutra",
        fr: "Le festival est organisé par la mairie. Le musée a été construit en 1990.",
        es: "El festival es organizado por la alcaldía. El museo fue construido en 1990.",
        nota: "El festival",
        seg: [
          {
            es: "Camila habla del festival: est organisé par la mairie. El museo: a été construit en 1990. La voz pasiva pone el foco en lo que se hace, no en quién lo hace."
          },
          {
            fr: "Le festival est organisé par la mairie. Le musée a été construit en 1990.",
            p: 1
          },
          {
            es: "Hoy aprendes a formar la pasiva en todos los tiempos.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Cómo se forma",
        titulo: "être en el tiempo de la frase + participio",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "La route est réparée. · Le festival est organisé.",
            es: "presente: est + participio"
          },
          {
            p: 2,
            fr: "La route a été réparée. · Les documents ont été envoyés.",
            es: "passé composé: a été + participio"
          },
          {
            p: 3,
            fr: "Les résultats seront publiés. · La route était réparée.",
            es: "futuro: sera · imparfait: était"
          }
        ],
        seg: [
          {
            es: "Toma el tiempo de la frase activa y ponlo en être: la route est réparée.",
            p: 1
          },
          {
            fr: "La route est réparée. Le festival est organisé.",
            p: 1
          },
          {
            es: "En passé composé: a été réparée.",
            p: 2
          },
          {
            fr: "La route a été réparée. Les documents ont été envoyés.",
            p: 2
          },
          {
            es: "Y en futuro, sera; en imparfait, était.",
            p: 3
          },
          {
            fr: "Les résultats seront publiés. La route était réparée.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "El autor",
        titulo: "par o de",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "La loi a été votée par le Parlement.",
            es: "par: el autor de la acción"
          },
          {
            p: 2,
            fr: "Ce professeur est très respecté de ses étudiants.",
            es: "de: con verbos de sentimiento"
          },
          {
            p: 3,
            fr: "La ville est entourée de montagnes.",
            es: "de: con verbos de descripción"
          }
        ],
        seg: [
          {
            es: "El autor va con par: la loi a été votée par le Parlement.",
            p: 1
          },
          {
            fr: "La loi a été votée par le Parlement.",
            p: 1
          },
          {
            es: "Con verbos de sentimiento o de descripción, con de.",
            p: 2
          },
          {
            fr: "Ce professeur est très respecté de ses étudiants.",
            p: 2
          },
          {
            fr: "La ville est entourée de montagnes.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Concordancia y oral",
        titulo: "envoyés · on a arrêté",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Cette photo a été partagée par des milliers d'internautes !",
            es: "el participio concuerda con el sujeto"
          },
          {
            p: 2,
            fr: "On a arrêté trois suspects.",
            es: "al hablar se prefiere on + activa"
          },
          {
            p: 3,
            regla: "ojo: elle est partie es activa (partir va con être), no pasiva"
          }
        ],
        seg: [
          {
            es: "El participio concuerda con el sujeto: cette photo a été partagée.",
            p: 1
          },
          {
            fr: "Cette photo a été partagée par des milliers d'internautes !",
            p: 1
          },
          {
            es: "Al hablar, se prefiere on con activa: on a arrêté trois suspects.",
            p: 2
          },
          {
            fr: "On a arrêté trois suspects.",
            p: 2
          },
          {
            es: "Y ojo: être más participio no siempre es pasiva.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En la vida real",
        titulo: "El festival",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Le festival est organisé par la mairie. Le musée a été construit en 1990.",
            es: "El festival es organizado por la alcaldía. El museo fue construido en 1990."
          },
          {
            p: 2,
            fr: "Et les résultats des examens ?",
            es: "¿Y los resultados de los exámenes?"
          },
          {
            p: 3,
            fr: "Les résultats seront publiés demain sur le site de l'université. Cette photo a été partagée par des milliers d'internautes !",
            es: "Los resultados serán publicados mañana en la página de la universidad. ¡Esta foto fue compartida por miles de internautas!"
          },
          {
            p: 4,
            fr: "Ce professeur est très respecté de ses étudiants. Et la ville est entourée de montagnes.",
            es: "Este profesor es muy respetado por sus estudiantes. Y la ciudad está rodeada de montañas."
          }
        ],
        seg: [
          {
            es: "Escucha cómo suena en una conversación de verdad."
          },
          {
            fr: "Le festival est organisé par la mairie. Le musée a été construit en 1990.",
            p: 1
          },
          {
            fr: "Et les résultats des examens ?",
            p: 2
          },
          {
            fr: "Les résultats seront publiés demain sur le site de l'université. Cette photo a été partagée par des milliers d'internautes !",
            p: 3
          },
          {
            fr: "Ce professeur est très respecté de ses étudiants. Et la ville est entourée de montagnes.",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Contraste con el español",
        titulo: "Fue construido = a été construit",
        mz: "m2d/alerta",
        items: [
          {
            p: 1,
            regla: "«fue construido» = a été construit (no «était construit» para un hecho)"
          },
          {
            p: 2,
            regla: "el participio concuerda: les documents ont été envoyés"
          },
          {
            p: 3,
            regla: "«respetado por» = respecté de (verbos de sentimiento)"
          }
        ],
        seg: [
          {
            es: "Fue construido es a été construit.",
            p: 1
          },
          {
            es: "Y el participio concuerda con el sujeto.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Les documents ont été envoyé.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Les documents ont été envoyés.",
          es: "Concuerda con el sujeto."
        },
        seg: [
          {
            es: "Primera trampa: la concordancia.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Les documents ont été envoyés.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Ce professeur est très respecté à ses étudiants.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Ce professeur est très respecté de ses étudiants.",
          es: "Sentimiento: de."
        },
        seg: [
          {
            es: "Segunda trampa: la preposición.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Ce professeur est très respecté de ses étudiants.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "La ville est entourée par des montagnes.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "La ville est entourée de des montagnes.",
          es: "Entourée de: más natural."
        },
        seg: [
          {
            es: "Una trampa más.",
            p: 1
          },
          {
            es: "Usamos par con un verbo de descripción.",
            p: 1
          },
          {
            es: "Lo correcto es:",
            p: 2
          },
          {
            fr: "La ville est entourée de des montagnes.",
            p: 2
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/pensativo",
        q: "«Les formulaires ont été ___ par la secrétaire.»",
        o: [
          "envoyés",
          "envoyé"
        ],
        a: 0,
        bien: "¡Eso es! Envoyés.",
        mal: "Concuerda con formulaires.",
        seg: [
          {
            es: "Te toca. ¿Envoyés o envoyé?"
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/confundido",
        q: "«Los resultados serán publicados mañana.»",
        o: [
          "Les résultats seront publiés demain.",
          "Les résultats ont été publiés demain."
        ],
        a: 0,
        bien: "¡Muy bien! Seront publiés.",
        mal: "Futuro: seront.",
        seg: [
          {
            es: "Una más. ¿Cuál es correcta?"
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Repite conmigo",
        titulo: "Repite conmigo",
        mz: "m2d/explica",
        items: [
          {
            p: 1,
            fr: "Les résultats seront publiés demain.",
            es: "Los resultados serán publicados mañana."
          },
          {
            p: 2,
            fr: "Le festival est organisé par la mairie.",
            es: "El festival es organizado por la alcaldía."
          },
          {
            p: 3,
            fr: "On a arrêté trois suspects.",
            es: "Arrestaron a tres sospechosos.» (oral)"
          }
        ],
        seg: [
          {
            es: "Ahora tú. Escucha cada frase y repítela en voz alta."
          },
          {
            fr: "Les résultats seront publiés demain.",
            p: 1
          },
          {
            es: "Otra vez.",
            p: 1
          },
          {
            fr: "Les résultats seront publiés demain.",
            p: 1
          },
          {
            fr: "Le festival est organisé par la mairie.",
            p: 2
          },
          {
            es: "Otra vez.",
            p: 2
          },
          {
            fr: "Le festival est organisé par la mairie.",
            p: 2
          },
          {
            fr: "On a arrêté trois suspects.",
            p: 3
          },
          {
            es: "Otra vez.",
            p: 3
          },
          {
            fr: "On a arrêté trois suspects.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Repaso",
        titulo: "Resumen",
        mz: "m2d/celebrar",
        items: [
          {
            p: 1,
            tabla: [
              [
                "Tiempo",
                "Pasiva"
              ],
              [
                "presente",
                "est réparée · est organisé"
              ],
              [
                "passé composé",
                "a été réparée · ont été envoyés"
              ],
              [
                "futuro",
                "sera réparée · seront publiés"
              ],
              [
                "imparfait",
                "était réparée"
              ],
              [
                "autor",
                "par le Parlement · respecté de ses étudiants"
              ]
            ]
          },
          {
            p: 2,
            regla: "Être en el tiempo de la frase + participio concordado"
          }
        ],
        seg: [
          {
            es: "Repasemos.",
            p: 1
          },
          {
            es: "La pasiva en todos los tiempos.",
            p: 1
          },
          {
            es: "Y al hablar, on + activa. ¡Ahora, a practicar!",
            p: 2
          }
        ]
      }
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
    {
      id: "ojo",
      tipo: "ojo",
      titulo: "Errores frecuentes",
      intro: "Tres errores que cometemos casi todos los hispanohablantes. Cázalos uno por uno.",
      errores: [
        {
          sit: "Hugo escribe:",
          frase: "Les formulaires ont été envoyé par la secrétaire.",
          mal: "envoyé",
          bien: "envoyés",
          porque: "Olvidamos la concordancia.",
          truco: "El participio concuerda con el sujeto."
        },
        {
          sit: "Camila escribe:",
          frase: "Ce professeur est très respecté à ses étudiants.",
          mal: "à",
          bien: "de",
          porque: "Usamos à.",
          truco: "Verbos de sentimiento: de."
        },
        {
          sit: "Camila escribe:",
          frase: "La ville est entourée par des montagnes.",
          mal: "par",
          bien: "de",
          porque: "Usamos par con un verbo de descripción.",
          truco: "Entourée de: más natural."
        }
      ]
    }
  ],
  ejemplos: [
    {
      sit: "«Los resultados serán publicados mañana.»",
      resp: "Les résultats seront publiés demain.",
      porque: "futuro.",
      pasos: [
        {
          q: "¿Être en futuro?",
          ops: [
            "seront",
            "sont"
          ],
          ok: 0
        },
        {
          q: "¿Participio?",
          ops: [
            "publiés",
            "publié"
          ],
          ok: 0
        },
        {
          q: "¿Por qué -s?",
          ops: [
            "concuerda con résultats",
            "por demain"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«El festival es organizado por la alcaldía.»",
      resp: "Le festival est organisé par la mairie.",
      porque: "presente.",
      pasos: [
        {
          q: "¿Être en presente?",
          ops: [
            "est",
            "a été"
          ],
          ok: 0
        },
        {
          q: "¿Autor?",
          ops: [
            "par la mairie",
            "de la mairie"
          ],
          ok: 0
        },
        {
          q: "¿La frase?",
          ops: [
            "Le festival est organisé par la mairie.",
            "Le festival organise la mairie."
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«Arrestaron a tres sospechosos.» (oral)",
      resp: "On a arrêté trois suspects.",
      porque: "on + activa.",
      pasos: [
        {
          q: "¿Registro?",
          ops: [
            "oral",
            "escrito formal"
          ],
          ok: 0
        },
        {
          q: "¿Qué se prefiere?",
          ops: [
            "on + activa",
            "la pasiva"
          ],
          ok: 0
        },
        {
          q: "¿La frase?",
          ops: [
            "On a arrêté trois suspects.",
            "Trois suspects ont arrêté."
          ],
          ok: 0
        }
      ]
    }
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
    titulo: "Los pronombres posesivos y demostrativos",
    voz: "es-CO-SalomeNeural",
    escenas: [
      {
        v: "persona",
        cap: "Para qué sirve",
        fondo: "esc/calle-paris",
        img: "pj/camila-neutra",
        fr: "Non, ce n'est pas le mien ; c'est celui de Julie.",
        es: "No, no es el mío; es el de Julie.",
        nota: "Las maletas",
        seg: [
          {
            es: "Hugo pregunta si el bolso es de Camila. Ella responde: ce n'est pas le mien, c'est celui de Julie. Dos pronombres para no repetir el nombre."
          },
          {
            fr: "Non, ce n'est pas le mien ; c'est celui de Julie.",
            p: 1
          },
          {
            es: "Hoy aprendes los pronombres posesivos y demostrativos.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Los posesivos",
        titulo: "le mien, la tienne, le nôtre",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "le mien · la tienne · la sienne",
            es: "concuerdan con el objeto poseído"
          },
          {
            p: 2,
            fr: "la nôtre · le nôtre · les vôtres",
            es: "nôtre y vôtre llevan circunflejo"
          },
          {
            p: 3,
            fr: "le leur · les leurs",
            es: "de ellos"
          }
        ],
        seg: [
          {
            es: "Los posesivos concuerdan con el objeto: le mien, la tienne, la sienne.",
            p: 1
          },
          {
            fr: "le mien, la tienne, la sienne",
            p: 1
          },
          {
            es: "Nôtre y vôtre llevan circunflejo.",
            p: 2
          },
          {
            fr: "la nôtre, le nôtre, les vôtres",
            p: 2
          },
          {
            fr: "le leur, les leurs",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Los demostrativos",
        titulo: "celui, celle, ceux, celles",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "celui de Marc · celle de · celui de Pedro",
            es: "+ de: el de, la de"
          },
          {
            p: 2,
            fr: "Ceux qui veulent partir en échange doivent déposer leur dossier.",
            es: "+ qui / que: los que"
          },
          {
            p: 3,
            fr: "Ces photos-ci sont floues, mais celles-là sont magnifiques.",
            es: "+ -ci / -là: estas · aquellas"
          }
        ],
        seg: [
          {
            es: "Celui, celle, ceux, celles, con de: celui de Marc.",
            p: 1
          },
          {
            fr: "celui de Marc, celle de",
            p: 1
          },
          {
            es: "Con qui o que: ceux qui veulent.",
            p: 2
          },
          {
            fr: "Ceux qui veulent partir en échange doivent déposer leur dossier.",
            p: 2
          },
          {
            es: "O con -ci y -là.",
            p: 3
          },
          {
            fr: "Ces photos-ci sont floues, mais celles-là sont magnifiques.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En la frase",
        titulo: "Le nôtre est plus écologique",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Ma valise est bleue. Et la tienne ?",
            es: "Mi maleta es azul. ¿Y la tuya?"
          },
          {
            p: 2,
            fr: "Votre projet est intéressant, mais le nôtre est plus écologique !",
            es: "Su proyecto es interesante, ¡pero el nuestro es más ecológico!"
          },
          {
            p: 3,
            fr: "Ce n'est pas mon vélo, c'est celui de Marc.",
            es: "No es mi bici, es la de Marc."
          }
        ],
        seg: [
          {
            fr: "Ma valise est bleue. Et la tienne ?",
            p: 1
          },
          {
            fr: "Votre projet est intéressant, mais le nôtre est plus écologique !",
            p: 2
          },
          {
            fr: "Ce n'est pas mon vélo, c'est celui de Marc.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En la vida real",
        titulo: "Las maletas",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "C'est ton sac ?",
            es: "¿Es tu bolso?"
          },
          {
            p: 2,
            fr: "Non, ce n'est pas le mien ; c'est celui de Julie. Ma valise est bleue. Et la tienne, elle est de quelle couleur ?",
            es: "No, no es el mío; es el de Julie. Mi maleta es azul. ¿Y la tuya, de qué color es?"
          },
          {
            p: 3,
            fr: "Rouge. Ces photos-ci sont floues, mais celles-là sont magnifiques.",
            es: "Roja. Estas fotos están borrosas, pero aquellas son magníficas."
          },
          {
            p: 4,
            fr: "Ceux qui veulent partir en échange doivent déposer leur dossier avant mars. Votre projet est intéressant, mais le nôtre est plus écologique !",
            es: "Los que quieren irse de intercambio deben entregar su expediente antes de marzo. ¡Su proyecto es interesante, pero el nuestro es más ecológico!"
          }
        ],
        seg: [
          {
            es: "Escucha cómo suena en una conversación de verdad."
          },
          {
            fr: "C'est ton sac ?",
            p: 1
          },
          {
            fr: "Non, ce n'est pas le mien ; c'est celui de Julie. Ma valise est bleue. Et la tienne, elle est de quelle couleur ?",
            p: 2
          },
          {
            fr: "Rouge. Ces photos-ci sont floues, mais celles-là sont magnifiques.",
            p: 3
          },
          {
            fr: "Ceux qui veulent partir en échange doivent déposer leur dossier avant mars. Votre projet est intéressant, mais le nôtre est plus écologique !",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Contraste con el español",
        titulo: "El de ≠ le de",
        mz: "m2d/alerta",
        items: [
          {
            p: 1,
            regla: "«el de mi compañero» = celui de mon colocataire (no «le de»)"
          },
          {
            p: 2,
            regla: "«los que quieren» = ceux qui veulent (no «les que»)"
          },
          {
            p: 3,
            regla: "le nôtre, con circunflejo (notre sin él es adjetivo)"
          }
        ],
        seg: [
          {
            es: "El de no es le de: es celui de.",
            p: 1
          },
          {
            es: "Y los que es ceux qui.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "le de mon colocataire",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "celui de mon colocataire",
          es: "«El de» = celui de."
        },
        seg: [
          {
            es: "Primera trampa: le de.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "celui de mon colocataire",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Votre projet est intéressant, mais le notre est plus écologique.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Votre projet est intéressant, mais le nôtre est plus écologique.",
          es: "Con circunflejo."
        },
        seg: [
          {
            es: "Segunda trampa: el acento.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Votre projet est intéressant, mais le nôtre est plus écologique.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Les que veulent partir en échange doivent déposer leur dossier.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Ceux qui veulent partir en échange doivent déposer leur dossier.",
          es: "«Los que» = ceux qui."
        },
        seg: [
          {
            es: "Una trampa más.",
            p: 1
          },
          {
            es: "Calcamos «los que».",
            p: 1
          },
          {
            es: "Lo correcto es:",
            p: 2
          },
          {
            fr: "Ceux qui veulent partir en échange doivent déposer leur dossier.",
            p: 2
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/pensativo",
        q: "«el de mi compañero de piso»",
        o: [
          "celui de mon colocataire",
          "le de mon colocataire"
        ],
        a: 0,
        bien: "¡Eso es! Celui de.",
        mal: "«El de» = celui de.",
        seg: [
          {
            es: "Te toca. ¿Cómo lo dices?"
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/confundido",
        q: "El posesivo concuerda con…",
        o: [
          "el objeto poseído",
          "el poseedor"
        ],
        a: 0,
        bien: "¡Muy bien! El objeto.",
        mal: "La valise → la mienne.",
        seg: [
          {
            es: "Una más. ¿Con qué concuerda?"
          }
        ],
        es: true
      },
      {
        v: "pizarra",
        cap: "Repite conmigo",
        titulo: "Repite conmigo",
        mz: "m2d/explica",
        items: [
          {
            p: 1,
            fr: "Non, ce n'est pas le mien.",
            es: "—¿Es tu bolso? —No, no es el mío."
          },
          {
            p: 2,
            fr: "Et la tienne ?",
            es: "Mi maleta es azul. ¿Y la tuya?"
          },
          {
            p: 3,
            fr: "celui de Pedro",
            es: "el de Pedro» (el bolso, le sac)"
          }
        ],
        seg: [
          {
            es: "Ahora tú. Escucha cada frase y repítela en voz alta."
          },
          {
            fr: "Non, ce n'est pas le mien.",
            p: 1
          },
          {
            es: "Otra vez.",
            p: 1
          },
          {
            fr: "Non, ce n'est pas le mien.",
            p: 1
          },
          {
            fr: "Et la tienne ?",
            p: 2
          },
          {
            es: "Otra vez.",
            p: 2
          },
          {
            fr: "Et la tienne ?",
            p: 2
          },
          {
            fr: "celui de Pedro",
            p: 3
          },
          {
            es: "Otra vez.",
            p: 3
          },
          {
            fr: "celui de Pedro",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Repaso",
        titulo: "Resumen",
        mz: "m2d/celebrar",
        items: [
          {
            p: 1,
            tabla: [
              [
                "Tipo",
                "Formas"
              ],
              [
                "posesivo",
                "le mien · la tienne · la sienne · le nôtre · le leur"
              ],
              [
                "demostrativo + de",
                "celui de Marc · celle de Julie"
              ],
              [
                "demostrativo + qui / que",
                "ceux qui veulent"
              ],
              [
                "demostrativo + -ci / -là",
                "celui-ci · celles-là"
              ]
            ]
          },
          {
            p: 2,
            regla: "Concuerdan con el objeto"
          }
        ],
        seg: [
          {
            es: "Repasemos.",
            p: 1
          },
          {
            es: "Posesivos y demostrativos.",
            p: 1
          },
          {
            es: "Y celui de, nunca le de. ¡Ahora, a practicar!",
            p: 2
          }
        ]
      }
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
    {
      id: "ojo",
      tipo: "ojo",
      titulo: "Errores frecuentes",
      intro: "Tres errores que cometemos casi todos los hispanohablantes. Cázalos uno por uno.",
      errores: [
        {
          sit: "Hugo escribe:",
          frase: "Mon ordinateur est lent ; le de mon colocataire est plus rapide.",
          mal: "le de",
          bien: "celui de",
          porque: "Calcamos «el de».",
          truco: "«El de» = celui de."
        },
        {
          sit: "Camila escribe:",
          frase: "Votre projet est intéressant, mais le notre est plus écologique.",
          mal: "notre",
          bien: "nôtre",
          porque: "Olvidamos el circunflejo.",
          truco: "Pronombre: con circunflejo."
        },
        {
          sit: "Camila escribe:",
          frase: "Les que veulent partir en échange doivent déposer leur dossier.",
          mal: "Les que",
          bien: "Ceux qui",
          porque: "Calcamos «los que».",
          truco: "«Los que» = ceux qui."
        }
      ]
    }
  ],
  ejemplos: [
    {
      sit: "«—¿Es tu bolso? —No, no es el mío.»",
      resp: "Non, ce n'est pas le mien.",
      porque: "posesivo.",
      pasos: [
        {
          q: "¿Sac es…?",
          ops: [
            "masculino",
            "femenino"
          ],
          ok: 0
        },
        {
          q: "¿El mío?",
          ops: [
            "le mien",
            "la mienne"
          ],
          ok: 0
        },
        {
          q: "¿La frase?",
          ops: [
            "Non, ce n'est pas le mien.",
            "Non, ce n'est pas la mienne."
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«Mi maleta es azul. ¿Y la tuya?»",
      resp: "Et la tienne ?",
      porque: "posesivo.",
      pasos: [
        {
          q: "¿Valise es…?",
          ops: [
            "femenino",
            "masculino"
          ],
          ok: 0
        },
        {
          q: "¿La tuya?",
          ops: [
            "la tienne",
            "le tien"
          ],
          ok: 0
        },
        {
          q: "¿Concuerda con…?",
          ops: [
            "la valise",
            "tú"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«el de Pedro» (el bolso, le sac)",
      resp: "celui de Pedro",
      porque: "demostrativo.",
      pasos: [
        {
          q: "¿Sac es…?",
          ops: [
            "masculino singular",
            "femenino"
          ],
          ok: 0
        },
        {
          q: "¿El de?",
          ops: [
            "celui de",
            "le de"
          ],
          ok: 0
        },
        {
          q: "¿Y la de (la valise)?",
          ops: [
            "celle de",
            "la de"
          ],
          ok: 0
        }
      ]
    }
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
    titulo: "El correo formal y el texto argumentativo",
    voz: "es-CO-SalomeNeural",
    escenas: [
      {
        v: "persona",
        cap: "Para qué sirve",
        fondo: "esc/escritorio-noche",
        img: "pj/camila-cafe-laptop",
        fr: "Madame, Monsieur, je me permets de vous écrire pour vous demander une attestation d'inscription.",
        es: "Señora, señor: me permito escribirles para pedirles un certificado de matrícula.",
        nota: "El correo a la universidad",
        seg: [
          {
            es: "Camila escribe a la universidad: Madame, Monsieur, je me permets de vous écrire. Y luego prepara un ensayo. Dos textos formales con sus fórmulas."
          },
          {
            fr: "Madame, Monsieur, je me permets de vous écrire pour vous demander une attestation d'inscription.",
            p: 1
          },
          {
            es: "Hoy aprendes las fórmulas del correo formal y la estructura de un texto argumentativo.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "El correo formal",
        titulo: "Madame, Monsieur, … Cordialement",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Madame, Monsieur, · Je me permets de vous écrire…",
            es: "inicio · siempre vous"
          },
          {
            p: 2,
            fr: "Je vous remercie par avance. · Dans l'attente de votre réponse,",
            es: "le agradezco de antemano · en espera de su respuesta"
          },
          {
            p: 3,
            fr: "Cordialement, · Je vous prie d'agréer, Madame, l'expression de mes salutations distinguées.",
            es: "cierres"
          }
        ],
        seg: [
          {
            es: "El inicio: Madame, Monsieur, si no sabes quién lee.",
            p: 1
          },
          {
            fr: "Madame, Monsieur, je me permets de vous écrire…",
            p: 1
          },
          {
            fr: "Je vous remercie par avance. Dans l'attente de votre réponse,",
            p: 2
          },
          {
            es: "Y el cierre: cordialement, o la fórmula larga.",
            p: 3
          },
          {
            fr: "Cordialement. Je vous prie d'agréer, Madame, l'expression de mes salutations distinguées.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "El texto argumentativo",
        titulo: "Introducción → argumentos → objeción → conclusión",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Aujourd'hui, la pollution est un problème majeur : faut-il interdire les voitures dans le centre-ville ?",
            es: "introducción: el problema con una pregunta"
          },
          {
            p: 2,
            fr: "Tout d'abord · De plus · Par exemple",
            es: "argumentos a favor"
          },
          {
            p: 3,
            fr: "Cependant · En revanche · En conclusion",
            es: "objeción · conclusión"
          }
        ],
        seg: [
          {
            es: "La introducción presenta el problema con una pregunta.",
            p: 1
          },
          {
            fr: "Aujourd'hui, la pollution est un problème majeur : faut-il interdire les voitures dans le centre-ville ?",
            p: 1
          },
          {
            es: "Luego, los argumentos: tout d'abord, de plus, par exemple.",
            p: 2
          },
          {
            fr: "Tout d'abord, de plus, par exemple",
            p: 2
          },
          {
            es: "La objeción: cependant, en revanche. Y la conclusión.",
            p: 3
          },
          {
            fr: "Cependant, en revanche, en conclusion",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Matizar",
        titulo: "Je ne pense pas que + subjuntivo",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Les réseaux sociaux permettent de rester en contact ; en revanche, ils peuvent créer une dépendance.",
            es: "a favor y en contra"
          },
          {
            p: 2,
            fr: "Je ne pense pas qu'ils soient dangereux pour tous.",
            es: "je ne pense pas que + subjuntivo"
          },
          {
            p: 3,
            fr: "Coucou ! · Bises · C'est super cool · À plus !",
            es: "¡nada de esto en un texto formal!"
          }
        ],
        seg: [
          {
            fr: "Les réseaux sociaux permettent de rester en contact ; en revanche, ils peuvent créer une dépendance.",
            p: 1
          },
          {
            es: "Y recuerda: je ne pense pas que, con subjuntivo.",
            p: 2
          },
          {
            fr: "Je ne pense pas qu'ils soient dangereux pour tous.",
            p: 2
          },
          {
            es: "Y nada de coucou ni de bises en un texto formal.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En la vida real",
        titulo: "El correo a la universidad",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Madame, Monsieur, je me permets de vous écrire pour vous demander une attestation d'inscription.",
            es: "Señora, señor: me permito escribirles para solicitarles un certificado de matrícula."
          },
          {
            p: 2,
            fr: "Je vous remercie par avance. Dans l'attente de votre réponse, je vous prie d'agréer, Monsieur, mes salutations distinguées.",
            es: "Les agradezco de antemano. En espera de su respuesta, le ruego aceptar, señor, mis saludos cordiales."
          },
          {
            p: 3,
            fr: "Et ton essai ? « Aujourd'hui, la pollution est un problème majeur : faut-il interdire les voitures dans le centre-ville ? »",
            es: "¿Y tu ensayo? «Hoy la contaminación es un problema mayor: ¿hay que prohibir los carros en el centro?»"
          },
          {
            p: 4,
            fr: "Oui. Les réseaux sociaux permettent de rester en contact ; en revanche, ils peuvent créer une dépendance. Je ne pense pas qu'ils soient dangereux pour tous.",
            es: "Sí. Las redes permiten estar en contacto; en cambio, pueden crear dependencia. No pienso que sean peligrosas para todos."
          }
        ],
        seg: [
          {
            es: "Escucha cómo suena en una conversación de verdad."
          },
          {
            fr: "Madame, Monsieur, je me permets de vous écrire pour vous demander une attestation d'inscription.",
            p: 1
          },
          {
            fr: "Je vous remercie par avance. Dans l'attente de votre réponse, je vous prie d'agréer, Monsieur, mes salutations distinguées.",
            p: 2
          },
          {
            fr: "Et ton essai ? « Aujourd'hui, la pollution est un problème majeur : faut-il interdire les voitures dans le centre-ville ? »",
            p: 3
          },
          {
            fr: "Oui. Les réseaux sociaux permettent de rester en contact ; en revanche, ils peuvent créer une dépendance. Je ne pense pas qu'ils soient dangereux pour tous.",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Contraste con el español",
        titulo: "Estimado señor ≠ estimé monsieur",
        mz: "m2d/alerta",
        items: [
          {
            p: 1,
            regla: "«Estimado señor» = Monsieur, (no «Estimé monsieur»)"
          },
          {
            p: 2,
            regla: "vous en todo el texto, nunca mezclado con tu"
          },
          {
            p: 3,
            regla: "sin abreviaturas ni emoticones"
          }
        ],
        seg: [
          {
            es: "Estimado señor es simplemente Monsieur.",
            p: 1
          },
          {
            es: "Y vous en todo el texto.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Estimé monsieur, … bisous",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Monsieur, … Cordialement",
          es: "Fórmulas francesas."
        },
        seg: [
          {
            es: "Primera trampa: calcar el español y despedirse como con un amigo.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Monsieur, … Cordialement",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Madame, je vous écris pour te demander une attestation.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Madame, je vous écris pour vous demander une attestation.",
          es: "Vous en todo el texto."
        },
        seg: [
          {
            es: "Segunda trampa: mezclar vous y tu.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Madame, je vous écris pour vous demander une attestation.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Je ne pense pas que les réseaux sont dangereux.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Je ne pense pas que les réseaux soient dangereux.",
          es: "Je ne pense pas que + subjuntivo."
        },
        seg: [
          {
            es: "Una trampa más.",
            p: 1
          },
          {
            es: "Usamos el indicativo tras la negación.",
            p: 1
          },
          {
            es: "Lo correcto es:",
            p: 2
          },
          {
            fr: "Je ne pense pas que les réseaux soient dangereux.",
            p: 2
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/pensativo",
        q: "Saludas en un correo formal:",
        o: [
          "Madame, Monsieur,",
          "Estimé monsieur,"
        ],
        a: 0,
        bien: "¡Eso es! Madame, Monsieur.",
        mal: "Fórmula francesa.",
        seg: [
          {
            es: "Te toca. ¿Cómo empiezas?"
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/confundido",
        q: "«Cependant» sirve para…",
        o: [
          "una objeción",
          "añadir un argumento"
        ],
        a: 0,
        bien: "¡Muy bien! Una objeción.",
        mal: "Añadir es de plus.",
        seg: [
          {
            es: "Una más. ¿Para qué sirve cependant?"
          }
        ],
        es: true
      },
      {
        v: "pizarra",
        cap: "Repite conmigo",
        titulo: "Repite conmigo",
        mz: "m2d/explica",
        items: [
          {
            p: 1,
            fr: "Madame, Monsieur,",
            es: "Saludas en un correo formal."
          },
          {
            p: 2,
            fr: "Je vous prie d'agréer, Madame, l'expression de mes salutations distinguées.",
            es: "Cierras un correo formal."
          },
          {
            p: 3,
            fr: "Aujourd'hui, la pollution est un problème majeur : faut-il interdire les voitures ?",
            es: "Introduces el tema del ensayo."
          }
        ],
        seg: [
          {
            es: "Ahora tú. Escucha cada frase y repítela en voz alta."
          },
          {
            fr: "Madame, Monsieur,",
            p: 1
          },
          {
            es: "Otra vez.",
            p: 1
          },
          {
            fr: "Madame, Monsieur,",
            p: 1
          },
          {
            fr: "Je vous prie d'agréer, Madame, l'expression de mes salutations distinguées.",
            p: 2
          },
          {
            es: "Otra vez.",
            p: 2
          },
          {
            fr: "Je vous prie d'agréer, Madame, l'expression de mes salutations distinguées.",
            p: 2
          },
          {
            fr: "Aujourd'hui, la pollution est un problème majeur : faut-il interdire les voitures ?",
            p: 3
          },
          {
            es: "Otra vez.",
            p: 3
          },
          {
            fr: "Aujourd'hui, la pollution est un problème majeur : faut-il interdire les voitures ?",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Repaso",
        titulo: "Resumen",
        mz: "m2d/celebrar",
        items: [
          {
            p: 1,
            tabla: [
              [
                "Parte",
                "Fórmula"
              ],
              [
                "inicio",
                "Madame, Monsieur, · Je me permets de vous écrire…"
              ],
              [
                "cierre",
                "Dans l'attente de votre réponse, … Cordialement"
              ],
              [
                "argumentar",
                "Tout d'abord · De plus · Par exemple"
              ],
              [
                "objetar",
                "Cependant · En revanche"
              ],
              [
                "concluir",
                "En conclusion"
              ]
            ]
          },
          {
            p: 2,
            regla: "Vous en todo el texto, fórmulas francesas"
          }
        ],
        seg: [
          {
            es: "Repasemos.",
            p: 1
          },
          {
            es: "Correo formal y ensayo.",
            p: 1
          },
          {
            es: "Y je ne pense pas que + subjuntivo. ¡Ahora, a practicar!",
            p: 2
          }
        ]
      }
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
    {
      id: "ojo",
      tipo: "ojo",
      titulo: "Errores frecuentes",
      intro: "Tres errores que cometemos casi todos los hispanohablantes. Cázalos uno por uno.",
      errores: [
        {
          sit: "Camila escribe a la universidad:",
          frase: "Estimé monsieur, … bisous",
          mal: "Estimé monsieur, … bisous",
          bien: "Monsieur, … Cordialement",
          porque: "Calcamos el español y usamos un cierre familiar.",
          truco: "Usa las fórmulas francesas."
        },
        {
          sit: "Camila escribe:",
          frase: "Madame, je vous écris pour te demander une attestation d'inscription.",
          mal: "te",
          bien: "vous",
          porque: "Mezclamos vous y tu.",
          truco: "Formal: vous en todo el texto."
        },
        {
          sit: "Camila escribe en su ensayo:",
          frase: "Je ne pense pas que les réseaux sont dangereux.",
          mal: "sont",
          bien: "soient",
          porque: "Usamos el indicativo tras la negación.",
          truco: "Je ne pense pas que + subjuntivo."
        }
      ]
    }
  ],
  ejemplos: [
    {
      sit: "Saludas en un correo formal.",
      resp: "Madame, Monsieur,",
      porque: "inicio.",
      pasos: [
        {
          q: "¿Sabes quién lee?",
          ops: [
            "no",
            "sí"
          ],
          ok: 0
        },
        {
          q: "¿Fórmula?",
          ops: [
            "Madame, Monsieur,",
            "Salut !"
          ],
          ok: 0
        },
        {
          q: "¿Qué sigue?",
          ops: [
            "una coma",
            "un punto"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "Cierras un correo formal.",
      resp: "Je vous prie d'agréer, Madame, l'expression de mes salutations distinguées.",
      porque: "cierre.",
      pasos: [
        {
          q: "¿Registro?",
          ops: [
            "formal",
            "familiar"
          ],
          ok: 0
        },
        {
          q: "¿Alternativa corta?",
          ops: [
            "Cordialement,",
            "Bises,"
          ],
          ok: 0
        },
        {
          q: "¿Tu o vous?",
          ops: [
            "vous",
            "tu"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "Introduces el tema del ensayo.",
      resp: "Aujourd'hui, la pollution est un problème majeur : faut-il interdire les voitures ?",
      porque: "introducción.",
      pasos: [
        {
          q: "¿Qué presentas?",
          ops: [
            "el problema",
            "la conclusión"
          ],
          ok: 0
        },
        {
          q: "¿Con qué?",
          ops: [
            "una pregunta",
            "un ejemplo"
          ],
          ok: 0
        },
        {
          q: "¿Qué sigue?",
          ops: [
            "los argumentos",
            "el cierre"
          ],
          ok: 0
        }
      ]
    }
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
    titulo: "Los indefinidos: quelqu'un, personne, rien, chaque, aucun",
    voz: "es-CO-SalomeNeural",
    escenas: [
      {
        v: "persona",
        cap: "Para qué sirve",
        fondo: "esc/biblioteca",
        img: "pj/camila-neutra",
        fr: "Non, je n'ai vu personne. Personne ne m'a appelée aujourd'hui.",
        es: "No, no vi a nadie. Nadie me llamó hoy.",
        nota: "El compañero de piso",
        seg: [
          {
            es: "Camila no vio a nadie: je n'ai vu personne. Busca a alguien serio para compartir piso: quelqu'un de sérieux. Palabras para hablar de personas y cosas sin nombrarlas."
          },
          {
            fr: "Non, je n'ai vu personne. Personne ne m'a appelée aujourd'hui.",
            p: 1
          },
          {
            es: "Hoy aprendes los indefinidos y cómo funcionan en la negación.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Afirmativos y negativos",
        titulo: "quelqu'un / personne, quelque chose / rien",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "quelqu'un · quelque chose · quelque part · plusieurs",
            es: "alguien · algo · en alguna parte · varios"
          },
          {
            p: 2,
            fr: "personne · rien · nulle part · aucun · aucune",
            es: "nadie · nada · en ninguna parte · ningún"
          },
          {
            p: 3,
            fr: "Personne n'est venu. · Je n'ai rien compris.",
            es: "con ne, sin pas"
          }
        ],
        seg: [
          {
            es: "Afirmativos: quelqu'un, quelque chose, quelque part, plusieurs.",
            p: 1
          },
          {
            fr: "quelqu'un, quelque chose, quelque part, plusieurs",
            p: 1
          },
          {
            es: "Negativos: personne, rien, nulle part, aucun.",
            p: 2
          },
          {
            fr: "personne, rien, nulle part, aucun, aucune",
            p: 2
          },
          {
            es: "Los negativos van con ne, pero sin pas.",
            p: 3
          },
          {
            fr: "Personne n'est venu. Je n'ai rien compris.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Cada",
        titulo: "chaque, chacun",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Chaque étudiant doit rendre son mémoire.",
            es: "chaque + nombre: cada"
          },
          {
            p: 2,
            fr: "Chacun a son opinion.",
            es: "chacun: cada uno"
          },
          {
            p: 3,
            fr: "Vous avez des questions ? Non, aucune !",
            es: "aucun(e): ninguno(a)"
          }
        ],
        seg: [
          {
            es: "Chaque va con un nombre: chaque étudiant.",
            p: 1
          },
          {
            fr: "Chaque étudiant doit rendre son mémoire.",
            p: 1
          },
          {
            es: "Chacun va solo: cada uno.",
            p: 2
          },
          {
            fr: "Chacun a son opinion.",
            p: 2
          },
          {
            fr: "Vous avez des questions ? Non, aucune !",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Con adjetivo y en passé composé",
        titulo: "quelque chose d'intéressant",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "quelque chose d'intéressant · quelqu'un de sérieux",
            es: "con adjetivo: de"
          },
          {
            p: 2,
            fr: "Je n'ai rien vu. · Je n'ai vu personne.",
            es: "rien antes del participio · personne después"
          },
          {
            p: 3,
            fr: "Moi, je cherche quelqu'un de sérieux pour partager l'appartement.",
            es: "Busco a alguien serio para compartir el apartamento."
          }
        ],
        seg: [
          {
            es: "Con un adjetivo, se añade de: quelque chose d'intéressant.",
            p: 1
          },
          {
            fr: "quelque chose d'intéressant, quelqu'un de sérieux",
            p: 1
          },
          {
            es: "En passé composé, rien antes del participio y personne después.",
            p: 2
          },
          {
            fr: "Je n'ai rien vu. Je n'ai vu personne.",
            p: 2
          },
          {
            fr: "Moi, je cherche quelqu'un de sérieux pour partager l'appartement.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En la vida real",
        titulo: "El compañero de piso",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Tu as vu quelqu'un à la bibliothèque ?",
            es: "¿Viste a alguien en la biblioteca?"
          },
          {
            p: 2,
            fr: "Non, je n'ai vu personne. Personne ne m'a appelée aujourd'hui, et je n'ai rien mangé depuis ce matin !",
            es: "No, no vi a nadie. Nadie me llamó hoy, ¡y no he comido nada desde esta mañana!"
          },
          {
            p: 3,
            fr: "Il y a quelque chose d'intéressant dans cet article : chaque étudiant doit rendre son mémoire avant juin.",
            es: "Hay algo interesante en este artículo: cada estudiante debe entregar su trabajo antes de junio."
          },
          {
            p: 4,
            fr: "Moi, je cherche quelqu'un de sérieux pour partager l'appartement. Plusieurs de mes amis parlent très bien français. Vous avez des questions ? Non, aucune !",
            es: "Yo busco a alguien serio para compartir el apartamento. Varios de mis amigos hablan muy bien francés. ¿Preguntas? ¡Ninguna!"
          }
        ],
        seg: [
          {
            es: "Escucha cómo suena en una conversación de verdad."
          },
          {
            fr: "Tu as vu quelqu'un à la bibliothèque ?",
            p: 1
          },
          {
            fr: "Non, je n'ai vu personne. Personne ne m'a appelée aujourd'hui, et je n'ai rien mangé depuis ce matin !",
            p: 2
          },
          {
            fr: "Il y a quelque chose d'intéressant dans cet article : chaque étudiant doit rendre son mémoire avant juin.",
            p: 3
          },
          {
            fr: "Moi, je cherche quelqu'un de sérieux pour partager l'appartement. Plusieurs de mes amis parlent très bien français. Vous avez des questions ? Non, aucune !",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Contraste con el español",
        titulo: "Nadie vino ≠ personne n'est pas venu",
        mz: "m2d/alerta",
        items: [
          {
            p: 1,
            regla: "en español «nadie no vino» no existe; en francés, tampoco pas: personne n'est venu"
          },
          {
            p: 2,
            regla: "«cada uno» = chacun (no «chaque un»)"
          },
          {
            p: 3,
            regla: "«algo interesante» = quelque chose d'intéressant (con de)"
          }
        ],
        seg: [
          {
            es: "Con personne, rien o aucun, nunca pas.",
            p: 1
          },
          {
            es: "Y cada uno es chacun.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Personne n'est pas venu.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Personne n'est venu.",
          es: "Sin pas."
        },
        seg: [
          {
            es: "Primera trampa: añadir pas.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Personne n'est venu.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Chaque un a présenté son projet.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Chacun a présenté son projet.",
          es: "Cada uno = chacun."
        },
        seg: [
          {
            es: "Segunda trampa: chaque un.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Chacun a présenté son projet.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Je n'ai vu rien d'intéressant dans ce film.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Je n'ai rien vu d'intéressant dans ce film.",
          es: "Rien va antes del participio."
        },
        seg: [
          {
            es: "Una trampa más.",
            p: 1
          },
          {
            es: "Ponemos rien después del participio.",
            p: 1
          },
          {
            es: "Lo correcto es:",
            p: 2
          },
          {
            fr: "Je n'ai rien vu d'intéressant dans ce film.",
            p: 2
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/pensativo",
        q: "«Nadie vino.»",
        o: [
          "Personne n'est venu.",
          "Personne n'est pas venu."
        ],
        a: 0,
        bien: "¡Eso es! Sin pas.",
        mal: "Personne + ne.",
        seg: [
          {
            es: "Te toca. ¿Cuál es correcta?"
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/confundido",
        q: "«Cada uno» se dice…",
        o: [
          "chacun",
          "chaque un"
        ],
        a: 0,
        bien: "¡Muy bien! Chacun.",
        mal: "Una sola palabra.",
        seg: [
          {
            es: "Una más. ¿Cómo dices cada uno?"
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Repite conmigo",
        titulo: "Repite conmigo",
        mz: "m2d/explica",
        items: [
          {
            p: 1,
            fr: "Je n'ai vu personne.",
            es: "No vi a nadie."
          },
          {
            p: 2,
            fr: "Chaque étudiant doit rendre son mémoire.",
            es: "Cada estudiante debe entregar su trabajo."
          },
          {
            p: 3,
            fr: "Je cherche quelqu'un de sérieux.",
            es: "Busco a alguien serio."
          }
        ],
        seg: [
          {
            es: "Ahora tú. Escucha cada frase y repítela en voz alta."
          },
          {
            fr: "Je n'ai vu personne.",
            p: 1
          },
          {
            es: "Otra vez.",
            p: 1
          },
          {
            fr: "Je n'ai vu personne.",
            p: 1
          },
          {
            fr: "Chaque étudiant doit rendre son mémoire.",
            p: 2
          },
          {
            es: "Otra vez.",
            p: 2
          },
          {
            fr: "Chaque étudiant doit rendre son mémoire.",
            p: 2
          },
          {
            fr: "Je cherche quelqu'un de sérieux.",
            p: 3
          },
          {
            es: "Otra vez.",
            p: 3
          },
          {
            fr: "Je cherche quelqu'un de sérieux.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Repaso",
        titulo: "Resumen",
        mz: "m2d/celebrar",
        items: [
          {
            p: 1,
            tabla: [
              [
                "Afirmativo",
                "Negativo"
              ],
              [
                "quelqu'un",
                "personne"
              ],
              [
                "quelque chose",
                "rien"
              ],
              [
                "quelque part",
                "nulle part"
              ],
              [
                "plusieurs",
                "aucun(e)"
              ],
              [
                "chaque + nombre · chacun",
                "—"
              ]
            ]
          },
          {
            p: 2,
            regla: "Ne + personne / rien / aucun, sin pas"
          }
        ],
        seg: [
          {
            es: "Repasemos.",
            p: 1
          },
          {
            es: "Indefinidos afirmativos y negativos.",
            p: 1
          },
          {
            es: "Y chacun, en una palabra. ¡Ahora, a practicar!",
            p: 2
          }
        ]
      }
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
    {
      id: "ojo",
      tipo: "ojo",
      titulo: "Errores frecuentes",
      intro: "Tres errores que cometemos casi todos los hispanohablantes. Cázalos uno por uno.",
      errores: [
        {
          sit: "Hugo escribe:",
          frase: "Personne n'est pas venu à la réunion.",
          mal: "n'est pas venu",
          bien: "n'est venu",
          porque: "Añadimos pas.",
          truco: "Con personne, rien, aucun: nunca pas."
        },
        {
          sit: "Camila escribe:",
          frase: "Chaque un a présenté son projet.",
          mal: "Chaque un",
          bien: "Chacun",
          porque: "Calcamos «cada uno».",
          truco: "«Cada uno» = chacun."
        },
        {
          sit: "Hugo escribe:",
          frase: "Je n'ai vu rien d'intéressant dans ce film.",
          mal: "vu rien",
          bien: "rien vu",
          porque: "Ponemos rien después del participio.",
          truco: "Rien va antes del participio."
        }
      ]
    }
  ],
  ejemplos: [
    {
      sit: "«No vi a nadie.»",
      resp: "Je n'ai vu personne.",
      porque: "personne.",
      pasos: [
        {
          q: "¿Nadie?",
          ops: [
            "personne",
            "rien"
          ],
          ok: 0
        },
        {
          q: "¿Lleva pas?",
          ops: [
            "no",
            "sí"
          ],
          ok: 0
        },
        {
          q: "¿Dónde va personne?",
          ops: [
            "después del participio",
            "antes"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«Cada estudiante debe entregar su trabajo.»",
      resp: "Chaque étudiant doit rendre son mémoire.",
      porque: "chaque.",
      pasos: [
        {
          q: "¿Va con un nombre?",
          ops: [
            "sí: chaque",
            "no: chacun"
          ],
          ok: 0
        },
        {
          q: "¿Singular o plural?",
          ops: [
            "singular",
            "plural"
          ],
          ok: 0
        },
        {
          q: "¿Su?",
          ops: [
            "son",
            "leur"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«Busco a alguien serio.»",
      resp: "Je cherche quelqu'un de sérieux.",
      porque: "con adjetivo.",
      pasos: [
        {
          q: "¿Alguien?",
          ops: [
            "quelqu'un",
            "personne"
          ],
          ok: 0
        },
        {
          q: "¿Con adjetivo lleva…?",
          ops: [
            "de",
            "nada"
          ],
          ok: 0
        },
        {
          q: "¿La frase?",
          ops: [
            "Je cherche quelqu'un de sérieux.",
            "Je cherche quelqu'un sérieux."
          ],
          ok: 0
        }
      ]
    }
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
    titulo: "El futur antérieur",
    voz: "es-CO-SalomeNeural",
    escenas: [
      {
        v: "persona",
        cap: "Para qué sirve",
        fondo: "esc/terraza-paris",
        img: "pj/camila-neutra",
        fr: "Je t'appellerai dès que j'aurai fini mon examen.",
        es: "Te llamaré en cuanto haya terminado mi examen.",
        nota: "Planes de fin de año",
        seg: [
          {
            es: "Camila promete llamar a Hugo dès que j'aurai fini mon examen. Dos acciones en el futuro, y una ocurre antes. Para esa, el futur antérieur."
          },
          {
            fr: "Je t'appellerai dès que j'aurai fini mon examen.",
            p: 1
          },
          {
            es: "Hoy aprendes a formar el futur antérieur y a usarlo.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Cómo se forma",
        titulo: "Auxiliar en futuro + participio",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "j'aurai fini · nous aurons terminé · tu auras fait",
            es: "avoir en futuro + participio"
          },
          {
            p: 2,
            fr: "elle sera arrivée · ils seront partis · elle sera sortie",
            es: "être en futuro + participio"
          },
          {
            p: 3,
            regla: "mismo auxiliar y misma concordancia que en el passé composé"
          }
        ],
        seg: [
          {
            es: "Se forma con el auxiliar en futuro y el participio: j'aurai fini.",
            p: 1
          },
          {
            fr: "j'aurai fini, nous aurons terminé, tu auras fait",
            p: 1
          },
          {
            es: "Los verbos de movimiento, con être: elle sera arrivée.",
            p: 2
          },
          {
            fr: "elle sera arrivée, ils seront partis, elle sera sortie",
            p: 2
          },
          {
            es: "Mismo auxiliar y concordancia que en el passé composé.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Para qué sirve",
        titulo: "La acción que pasa primero",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Quand j'aurai fini, je sortirai.",
            es: "tras quand, dès que, une fois que: la acción anterior"
          },
          {
            p: 2,
            fr: "Une fois que tu auras fait tes valises, on partira.",
            es: "la otra: futuro simple o imperativo"
          },
          {
            p: 3,
            fr: "D'ici juin, nous aurons terminé notre mémoire.",
            es: "d'ici: para entonces"
          }
        ],
        seg: [
          {
            es: "Tras quand, dès que o une fois que, para la acción que pasa primero.",
            p: 1
          },
          {
            fr: "Quand j'aurai fini, je sortirai.",
            p: 1
          },
          {
            fr: "Une fois que tu auras fait tes valises, on partira.",
            p: 2
          },
          {
            es: "Y con d'ici: para entonces.",
            p: 3
          },
          {
            fr: "D'ici juin, nous aurons terminé notre mémoire.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Suponer",
        titulo: "Il aura raté son bus",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Paul n'est pas là ? Il aura raté son bus.",
            es: "suposición: seguramente perdió el bus"
          },
          {
            p: 2,
            fr: "Il aura oublié le rendez-vous.",
            es: "habrá olvidado la cita"
          },
          {
            p: 3,
            fr: "Quand tu seras arrivée, envoie-moi un message.",
            es: "Cuando hayas llegado, mándame un mensaje."
          }
        ],
        seg: [
          {
            es: "También sirve para suponer: il aura raté son bus, seguramente lo perdió.",
            p: 1
          },
          {
            fr: "Paul n'est pas là ? Il aura raté son bus.",
            p: 1
          },
          {
            fr: "Il aura oublié le rendez-vous.",
            p: 2
          },
          {
            fr: "Quand tu seras arrivée, envoie-moi un message.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En la vida real",
        titulo: "Planes de fin de año",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Je t'appellerai dès que j'aurai fini mon examen.",
            es: "Te llamaré en cuanto haya terminado mi examen."
          },
          {
            p: 2,
            fr: "D'ici juin, nous aurons terminé notre mémoire. Une fois que tu auras fait tes valises, on partira.",
            es: "Para junio habremos terminado nuestro trabajo. Una vez que hayas hecho tus maletas, nos iremos."
          },
          {
            p: 3,
            fr: "Quand ma sœur sera arrivée en France, elle nous écrira. Quand ils seront partis, on rangera la salle.",
            es: "Cuando mi hermana haya llegado a Francia, nos escribirá. Cuando se hayan ido, ordenaremos la sala."
          },
          {
            p: 4,
            fr: "Paul n'est pas là ? Il aura raté son bus. Quand tu seras arrivée, envoie-moi un message.",
            es: "¿Paul no está? Habrá perdido el bus. Cuando hayas llegado, envíame un mensaje."
          }
        ],
        seg: [
          {
            es: "Escucha cómo suena en una conversación de verdad."
          },
          {
            fr: "Je t'appellerai dès que j'aurai fini mon examen.",
            p: 1
          },
          {
            fr: "D'ici juin, nous aurons terminé notre mémoire. Une fois que tu auras fait tes valises, on partira.",
            p: 2
          },
          {
            fr: "Quand ma sœur sera arrivée en France, elle nous écrira. Quand ils seront partis, on rangera la salle.",
            p: 3
          },
          {
            fr: "Paul n'est pas là ? Il aura raté son bus. Quand tu seras arrivée, envoie-moi un message.",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Contraste con el español",
        titulo: "Cuando haya terminado ≠ quand j'aie fini",
        mz: "m2d/alerta",
        items: [
          {
            p: 1,
            regla: "español: cuando haya terminado (subjuntivo) · francés: quand j'aurai fini (futur antérieur)"
          },
          {
            p: 2,
            regla: "nunca subjuntivo tras quand"
          },
          {
            p: 3,
            regla: "sortir va con être: elle sera sortie"
          }
        ],
        seg: [
          {
            es: "En español, cuando haya terminado lleva subjuntivo. En francés, futur antérieur.",
            p: 1
          },
          {
            es: "Nunca subjuntivo tras quand.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Je te rendrai ton livre quand je l'aie lu.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Je te rendrai ton livre quand je l'aurai lu.",
          es: "Futur antérieur."
        },
        seg: [
          {
            es: "Primera trampa: el subjuntivo.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Je te rendrai ton livre quand je l'aurai lu.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Dès qu'elle aura sortie, elle t'appellera.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Dès qu'elle sera sortie, elle t'appellera.",
          es: "Sortir va con être."
        },
        seg: [
          {
            es: "Segunda trampa: el auxiliar.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Dès qu'elle sera sortie, elle t'appellera.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Dès qu'elle aura sortie, elle t'appellera.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Dès qu'elle sera sortie, elle t'appellera.",
          es: "Sortir va con être."
        },
        seg: [
          {
            es: "Una trampa más.",
            p: 1
          },
          {
            es: "Usamos avoir con sortir.",
            p: 1
          },
          {
            es: "Lo correcto es:",
            p: 2
          },
          {
            fr: "Dès qu'elle sera sortie, elle t'appellera.",
            p: 2
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/pensativo",
        q: "«Cuando haya terminado, saldré.»",
        o: [
          "Quand j'aurai fini, je sortirai.",
          "Quand j'aie fini, je sortirai."
        ],
        a: 0,
        bien: "¡Eso es! J'aurai fini.",
        mal: "Nunca subjuntivo tras quand.",
        seg: [
          {
            es: "Te toca. ¿Cuál es correcta?"
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/confundido",
        q: "«Il aura oublié» puede expresar…",
        o: [
          "una suposición",
          "una orden"
        ],
        a: 0,
        bien: "¡Muy bien! Una suposición.",
        mal: "Habrá olvidado.",
        seg: [
          {
            es: "Una más. ¿Qué puede expresar?"
          }
        ],
        es: true
      },
      {
        v: "pizarra",
        cap: "Repite conmigo",
        titulo: "Repite conmigo",
        mz: "m2d/explica",
        items: [
          {
            p: 1,
            fr: "Quand j'aurai fini, je sortirai.",
            es: "Cuando haya terminado, saldré."
          },
          {
            p: 2,
            fr: "Quand elle sera arrivée, elle nous écrira.",
            es: "Cuando haya llegado, nos escribirá."
          },
          {
            p: 3,
            fr: "Il aura raté son bus.",
            es: "Habrá perdido el bus."
          }
        ],
        seg: [
          {
            es: "Ahora tú. Escucha cada frase y repítela en voz alta."
          },
          {
            fr: "Quand j'aurai fini, je sortirai.",
            p: 1
          },
          {
            es: "Otra vez.",
            p: 1
          },
          {
            fr: "Quand j'aurai fini, je sortirai.",
            p: 1
          },
          {
            fr: "Quand elle sera arrivée, elle nous écrira.",
            p: 2
          },
          {
            es: "Otra vez.",
            p: 2
          },
          {
            fr: "Quand elle sera arrivée, elle nous écrira.",
            p: 2
          },
          {
            fr: "Il aura raté son bus.",
            p: 3
          },
          {
            es: "Otra vez.",
            p: 3
          },
          {
            fr: "Il aura raté son bus.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Repaso",
        titulo: "Resumen",
        mz: "m2d/celebrar",
        items: [
          {
            p: 1,
            tabla: [
              [
                "Uso",
                "Ejemplo"
              ],
              [
                "formación",
                "j'aurai fini · elle sera arrivée"
              ],
              [
                "acción anterior en el futuro",
                "Quand j'aurai fini, je sortirai."
              ],
              [
                "para entonces",
                "D'ici juin, nous aurons terminé."
              ],
              [
                "suposición",
                "Il aura raté son bus."
              ]
            ]
          },
          {
            p: 2,
            regla: "Auxiliar en futuro + participio"
          }
        ],
        seg: [
          {
            es: "Repasemos.",
            p: 1
          },
          {
            es: "La acción que pasa primero en el futuro.",
            p: 1
          },
          {
            es: "Y nunca subjuntivo tras quand. ¡Ahora, a practicar!",
            p: 2
          }
        ]
      }
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
    {
      id: "ojo",
      tipo: "ojo",
      titulo: "Errores frecuentes",
      intro: "Tres errores que cometemos casi todos los hispanohablantes. Cázalos uno por uno.",
      errores: [
        {
          sit: "Camila escribe:",
          frase: "Je t'appellerai quand j'aie fini.",
          mal: "j'aie",
          bien: "j'aurai",
          porque: "Usamos el subjuntivo.",
          truco: "Después de quand, nunca subjuntivo."
        },
        {
          sit: "Hugo escribe:",
          frase: "Je te rendrai ton livre quand je l'aie lu.",
          mal: "l'aie",
          bien: "l'aurai",
          porque: "Usamos el subjuntivo.",
          truco: "Futur antérieur."
        },
        {
          sit: "Camila escribe:",
          frase: "Dès qu'elle aura sortie, elle t'appellera.",
          mal: "aura sortie",
          bien: "sera sortie",
          porque: "Usamos avoir con sortir.",
          truco: "Sortir va con être."
        }
      ]
    }
  ],
  ejemplos: [
    {
      sit: "«Cuando haya terminado, saldré.»",
      resp: "Quand j'aurai fini, je sortirai.",
      porque: "anterior.",
      pasos: [
        {
          q: "¿Qué pasa primero?",
          ops: [
            "terminar",
            "salir"
          ],
          ok: 0
        },
        {
          q: "¿Tiempo de terminar?",
          ops: [
            "futur antérieur",
            "subjuntivo"
          ],
          ok: 0
        },
        {
          q: "¿Y de salir?",
          ops: [
            "futuro simple",
            "futur antérieur"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«Cuando haya llegado, nos escribirá.»",
      resp: "Quand elle sera arrivée, elle nous écrira.",
      porque: "être.",
      pasos: [
        {
          q: "¿Arriver lleva…?",
          ops: [
            "être",
            "avoir"
          ],
          ok: 0
        },
        {
          q: "¿Concordancia?",
          ops: [
            "sí: arrivée",
            "no"
          ],
          ok: 0
        },
        {
          q: "¿La frase?",
          ops: [
            "Quand elle sera arrivée, elle nous écrira.",
            "Quand elle aura arrivé, elle nous écrira."
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«Habrá perdido el bus.»",
      resp: "Il aura raté son bus.",
      porque: "suposición.",
      pasos: [
        {
          q: "¿Qué expresa?",
          ops: [
            "una suposición",
            "un plan"
          ],
          ok: 0
        },
        {
          q: "¿Perder el bus?",
          ops: [
            "rater",
            "perdre"
          ],
          ok: 0
        },
        {
          q: "¿Tiempo?",
          ops: [
            "futur antérieur",
            "futuro simple"
          ],
          ok: 0
        }
      ]
    }
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
    titulo: "El discurso indirecto en pasado",
    voz: "es-CO-SalomeNeural",
    escenas: [
      {
        v: "persona",
        cap: "Para qué sirve",
        fondo: "esc/cafe-lyon",
        img: "pj/camila-neutra",
        fr: "Hier, Laura m'a dit qu'elle était malade. Elle a expliqué qu'elle avait perdu ses clés.",
        es: "Ayer Laura me dijo que estaba enferma. Explicó que había perdido sus llaves.",
        nota: "Lo que dijeron",
        seg: [
          {
            es: "Camila cuenta lo que le dijo Laura ayer: qu'elle était malade, qu'elle avait perdu ses clés. Con el verbo en pasado, los tiempos retroceden."
          },
          {
            fr: "Hier, Laura m'a dit qu'elle était malade. Elle a expliqué qu'elle avait perdu ses clés.",
            p: 1
          },
          {
            es: "Hoy aprendes la concordancia de tiempos en el discurso indirecto.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Los tiempos retroceden",
        titulo: "presente → imparfait…",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "« Je suis malade. » → Elle a dit qu'elle était malade.",
            es: "presente → imparfait"
          },
          {
            p: 2,
            fr: "« J'ai perdu mes clés. » → Elle a dit qu'elle avait perdu ses clés.",
            es: "passé composé → plus-que-parfait"
          },
          {
            p: 3,
            fr: "« Je finirai. » → Il a dit qu'il finirait. · ils allaient déménager",
            es: "futuro → condicional · futur proche → allait"
          }
        ],
        seg: [
          {
            es: "Con el verbo en pasado, el presente pasa a imparfait.",
            p: 1
          },
          {
            fr: "Elle a dit qu'elle était malade.",
            p: 1
          },
          {
            es: "El passé composé, a plus-que-parfait.",
            p: 2
          },
          {
            fr: "Elle a dit qu'elle avait perdu ses clés.",
            p: 2
          },
          {
            es: "El futuro, a condicional; y el futur proche, a allait.",
            p: 3
          },
          {
            fr: "Il a dit qu'il finirait. Ils ont annoncé qu'ils allaient déménager.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Preguntas y órdenes",
        titulo: "si, ce que, ce qui, de",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "« Tu viens ? » → Il m'a demandé si je venais.",
            es: "sí / no → si (nunca «que si»)"
          },
          {
            p: 2,
            fr: "Elle m'a demandé ce que je faisais. · Il a demandé ce qui se passait.",
            es: "qu'est-ce que → ce que · qu'est-ce qui → ce qui"
          },
          {
            p: 3,
            fr: "Le médecin m'a dit de me reposer.",
            es: "imperativo → de + infinitivo"
          }
        ],
        seg: [
          {
            es: "Preguntas de sí o no: si, nunca que si.",
            p: 1
          },
          {
            fr: "Il m'a demandé si je venais.",
            p: 1
          },
          {
            es: "Qu'est-ce que pasa a ce que; qu'est-ce qui, a ce qui.",
            p: 2
          },
          {
            fr: "Elle m'a demandé ce que je faisais. Il a demandé ce qui se passait.",
            p: 2
          },
          {
            es: "Y las órdenes, de más infinitivo.",
            p: 3
          },
          {
            fr: "Le médecin m'a dit de me reposer.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Las palabras de tiempo",
        titulo: "demain → le lendemain",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "demain → le lendemain · hier → la veille",
            es: "mañana → al día siguiente · ayer → la víspera"
          },
          {
            p: 2,
            fr: "aujourd'hui → ce jour-là · la semaine prochaine → la semaine suivante",
            es: "hoy → ese día"
          },
          {
            p: 3,
            fr: "Il a dit qu'il finirait le rapport le lendemain.",
            es: "Dijo que terminaría el informe al día siguiente."
          }
        ],
        seg: [
          {
            es: "Y las palabras de tiempo cambian: demain, le lendemain; hier, la veille.",
            p: 1
          },
          {
            fr: "demain, le lendemain. Hier, la veille.",
            p: 1
          },
          {
            fr: "aujourd'hui, ce jour-là. La semaine prochaine, la semaine suivante.",
            p: 2
          },
          {
            fr: "Il a dit qu'il finirait le rapport le lendemain.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En la vida real",
        titulo: "Lo que dijeron",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Hier, Laura m'a dit qu'elle était malade. Elle a expliqué qu'elle avait perdu ses clés.",
            es: "Ayer, Laura me dijo que estaba enferma. Explicó que había perdido sus llaves."
          },
          {
            p: 2,
            fr: "Et ton chef ?",
            es: "¿Y tu jefe?"
          },
          {
            p: 3,
            fr: "Il a dit qu'il finirait le rapport le lendemain. Il m'a demandé si je venais à la fête et où j'habitais.",
            es: "Dijo que terminaría el informe al día siguiente. Me preguntó si iba a la fiesta y dónde vivía."
          },
          {
            p: 4,
            fr: "Le médecin m'a dit de me reposer. Et mes voisins ont annoncé qu'ils allaient déménager.",
            es: "El médico me dijo que descansara. Y mis vecinos anunciaron que se iban a mudar."
          }
        ],
        seg: [
          {
            es: "Escucha cómo suena en una conversación de verdad."
          },
          {
            fr: "Hier, Laura m'a dit qu'elle était malade. Elle a expliqué qu'elle avait perdu ses clés.",
            p: 1
          },
          {
            fr: "Et ton chef ?",
            p: 2
          },
          {
            fr: "Il a dit qu'il finirait le rapport le lendemain. Il m'a demandé si je venais à la fête et où j'habitais.",
            p: 3
          },
          {
            fr: "Le médecin m'a dit de me reposer. Et mes voisins ont annoncé qu'ils allaient déménager.",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Contraste con el español",
        titulo: "Me preguntó si venía",
        mz: "m2d/alerta",
        items: [
          {
            p: 1,
            regla: "igual que en español: dijo que estaba, dijo que vendría"
          },
          {
            p: 2,
            regla: "«me preguntó si» = il m'a demandé si (no «que si»)"
          },
          {
            p: 3,
            regla: "«me dijo que descansara» = il m'a dit de me reposer"
          }
        ],
        seg: [
          {
            es: "Funciona como en español: dijo que estaba, dijo que vendría.",
            p: 1
          },
          {
            es: "Pero nunca que si: il m'a demandé si.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Il m'a demandé que si je venais.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Il m'a demandé si je venais.",
          es: "«Que si» no existe."
        },
        seg: [
          {
            es: "Primera trampa: que si.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Il m'a demandé si je venais.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Le médecin m'a dit que je me repose.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Le médecin m'a dit de me reposer.",
          es: "Orden: de + infinitivo."
        },
        seg: [
          {
            es: "Segunda trampa: la orden.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Le médecin m'a dit de me reposer.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Il a dit qu'il finira le rapport demain.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Il a dit qu'il finirait le rapport le lendemain.",
          es: "Futuro → condicional; demain → le lendemain."
        },
        seg: [
          {
            es: "Una trampa más.",
            p: 1
          },
          {
            es: "No retrocedemos el tiempo.",
            p: 1
          },
          {
            es: "Lo correcto es:",
            p: 2
          },
          {
            fr: "Il a dit qu'il finirait le rapport le lendemain.",
            p: 2
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/pensativo",
        q: "«Hier, Laura m'a dit qu'elle ___ malade.»",
        o: [
          "était",
          "est"
        ],
        a: 0,
        bien: "¡Eso es! Était.",
        mal: "Presente → imparfait.",
        seg: [
          {
            es: "Te toca. ¿Était o est?"
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/confundido",
        q: "«Il a dit qu'il ___ le rapport le lendemain.»",
        o: [
          "finirait",
          "finira"
        ],
        a: 0,
        bien: "¡Muy bien! Finirait.",
        mal: "Futuro → condicional.",
        seg: [
          {
            es: "Una más. ¿Finirait o finira?"
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Repite conmigo",
        titulo: "Repite conmigo",
        mz: "m2d/explica",
        items: [
          {
            p: 1,
            fr: "Laura m'a dit qu'elle était malade.",
            es: " Je suis malade. » (Laura, ayer)"
          },
          {
            p: 2,
            fr: "Elle a expliqué qu'elle avait perdu ses clés.",
            es: " J'ai perdu mes clés. "
          },
          {
            p: 3,
            fr: "Il a dit qu'il finirait le rapport le lendemain.",
            es: " Je finirai le rapport demain. "
          }
        ],
        seg: [
          {
            es: "Ahora tú. Escucha cada frase y repítela en voz alta."
          },
          {
            fr: "Laura m'a dit qu'elle était malade.",
            p: 1
          },
          {
            es: "Otra vez.",
            p: 1
          },
          {
            fr: "Laura m'a dit qu'elle était malade.",
            p: 1
          },
          {
            fr: "Elle a expliqué qu'elle avait perdu ses clés.",
            p: 2
          },
          {
            es: "Otra vez.",
            p: 2
          },
          {
            fr: "Elle a expliqué qu'elle avait perdu ses clés.",
            p: 2
          },
          {
            fr: "Il a dit qu'il finirait le rapport le lendemain.",
            p: 3
          },
          {
            es: "Otra vez.",
            p: 3
          },
          {
            fr: "Il a dit qu'il finirait le rapport le lendemain.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Repaso",
        titulo: "Resumen",
        mz: "m2d/celebrar",
        items: [
          {
            p: 1,
            tabla: [
              [
                "Directo",
                "Indirecto en pasado"
              ],
              [
                "presente",
                "imparfait: qu'elle était"
              ],
              [
                "passé composé",
                "plus-que-parfait: qu'elle avait perdu"
              ],
              [
                "futuro",
                "condicional: qu'il finirait"
              ],
              [
                "imperativo",
                "de + infinitivo: de me reposer"
              ],
              [
                "demain · hier",
                "le lendemain · la veille"
              ]
            ]
          },
          {
            p: 2,
            regla: "Con el verbo en pasado, los tiempos retroceden"
          }
        ],
        seg: [
          {
            es: "Repasemos.",
            p: 1
          },
          {
            es: "Contar lo que dijeron.",
            p: 1
          },
          {
            es: "Y si, nunca que si. ¡Ahora, a practicar!",
            p: 2
          }
        ]
      }
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
    {
      id: "ojo",
      tipo: "ojo",
      titulo: "Errores frecuentes",
      intro: "Tres errores que cometemos casi todos los hispanohablantes. Cázalos uno por uno.",
      errores: [
        {
          sit: "Camila cuenta:",
          frase: "Le professeur m'a demandé que si j'avais lu le texte.",
          mal: "que si",
          bien: "si",
          porque: "Calcamos «que si».",
          truco: "«Que si» no existe en francés."
        },
        {
          sit: "Hugo cuenta:",
          frase: "Le médecin m'a dit que je me repose.",
          mal: "que je me repose",
          bien: "de me reposer",
          porque: "Pasamos la orden con que.",
          truco: "Orden: de + infinitivo."
        },
        {
          sit: "Camila cuenta:",
          frase: "Il a dit qu'il finira le rapport demain.",
          mal: "finira le rapport demain",
          bien: "finirait le rapport le lendemain",
          porque: "No retrocedemos el tiempo.",
          truco: "Futuro → condicional; demain → le lendemain."
        }
      ]
    }
  ],
  ejemplos: [
    {
      sit: "« Je suis malade. » (Laura, ayer)",
      resp: "Laura m'a dit qu'elle était malade.",
      porque: "presente.",
      pasos: [
        {
          q: "¿Verbo introductor?",
          ops: [
            "pasado: m'a dit",
            "presente"
          ],
          ok: 0
        },
        {
          q: "¿Suis → ?",
          ops: [
            "était",
            "est"
          ],
          ok: 0
        },
        {
          q: "¿Je → ?",
          ops: [
            "elle",
            "je"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "« J'ai perdu mes clés. »",
      resp: "Elle a expliqué qu'elle avait perdu ses clés.",
      porque: "passé composé.",
      pasos: [
        {
          q: "¿Ai perdu → ?",
          ops: [
            "avait perdu",
            "a perdu"
          ],
          ok: 0
        },
        {
          q: "¿Mes → ?",
          ops: [
            "ses",
            "mes"
          ],
          ok: 0
        },
        {
          q: "¿Tiempo?",
          ops: [
            "plus-que-parfait",
            "imparfait"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "« Je finirai le rapport demain. »",
      resp: "Il a dit qu'il finirait le rapport le lendemain.",
      porque: "futuro.",
      pasos: [
        {
          q: "¿Finirai → ?",
          ops: [
            "finirait",
            "finira"
          ],
          ok: 0
        },
        {
          q: "¿Demain → ?",
          ops: [
            "le lendemain",
            "demain"
          ],
          ok: 0
        },
        {
          q: "¿Tiempo?",
          ops: [
            "condicional",
            "futuro"
          ],
          ok: 0
        }
      ]
    }
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
    titulo: "Expresar la finalidad: pour, afin de, pour que",
    voz: "es-CO-SalomeNeural",
    escenas: [
      {
        v: "persona",
        cap: "Para qué sirve",
        fondo: "esc/biblioteca",
        img: "pj/hugo-neutro",
        fr: "Je te prête mes notes pour que tu puisses réviser.",
        es: "Te presto mis apuntes para que puedas repasar.",
        nota: "El DELF",
        seg: [
          {
            es: "Camila ahorra pour partir en France. Hugo le presta sus apuntes pour que tu puisses réviser. Dos construcciones de finalidad, según el sujeto."
          },
          {
            fr: "Je te prête mes notes pour que tu puisses réviser.",
            p: 1
          },
          {
            es: "Hoy aprendes a expresar la finalidad: pour, afin de, pour que.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Mismo sujeto",
        titulo: "pour / afin de + infinitivo",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "J'économise pour partir en France.",
            es: "pour + infinitivo"
          },
          {
            p: 2,
            fr: "Je vais à la bibliothèque afin de réviser au calme. · dans le but de",
            es: "afin de: más formal"
          },
          {
            p: 3,
            fr: "Je note tout pour ne pas oublier mes rendez-vous.",
            es: "pour ne pas + infinitivo"
          }
        ],
        seg: [
          {
            es: "Si el sujeto es el mismo: pour o afin de, más infinitivo.",
            p: 1
          },
          {
            fr: "J'économise pour partir en France.",
            p: 1
          },
          {
            fr: "Je vais à la bibliothèque afin de réviser au calme.",
            p: 2
          },
          {
            es: "Para no: pour ne pas, juntos delante del infinitivo.",
            p: 3
          },
          {
            fr: "Je note tout pour ne pas oublier mes rendez-vous.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Otro sujeto",
        titulo: "pour que / afin que + subjuntivo",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Je parle lentement pour que tu comprennes.",
            es: "pour que + subjuntivo"
          },
          {
            p: 2,
            fr: "Le professeur répète la consigne afin que tout le monde comprenne.",
            es: "afin que: más formal"
          },
          {
            p: 3,
            fr: "Parle plus fort pour que je t'entende.",
            es: "Habla más fuerte para que te oiga."
          }
        ],
        seg: [
          {
            es: "Si el sujeto cambia: pour que o afin que, más subjuntivo.",
            p: 1
          },
          {
            fr: "Je parle lentement pour que tu comprennes.",
            p: 1
          },
          {
            fr: "Le professeur répète la consigne afin que tout le monde comprenne.",
            p: 2
          },
          {
            fr: "Parle plus fort pour que je t'entende.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Para evitar algo",
        titulo: "de peur de, de peur que",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "de peur d'être mouillé",
            es: "mismo sujeto: de peur de + infinitivo"
          },
          {
            p: 2,
            fr: "de peur que le chat ne sorte",
            es: "otro sujeto: de peur que + subjuntivo"
          },
          {
            p: 3,
            fr: "Je t'écris pour que tu saches la vérité.",
            es: "Te escribo para que sepas la verdad."
          }
        ],
        seg: [
          {
            es: "Para evitar algo: de peur de, con el mismo sujeto.",
            p: 1
          },
          {
            fr: "de peur d'être mouillé",
            p: 1
          },
          {
            es: "De peur que, con otro sujeto.",
            p: 2
          },
          {
            fr: "de peur que le chat ne sorte",
            p: 2
          },
          {
            fr: "Je t'écris pour que tu saches la vérité.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En la vida real",
        titulo: "El DELF",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "J'économise pour partir en France l'été prochain. J'étudie le français pour travailler au Canada.",
            es: "Ahorro para irme a Francia el próximo verano. Estudio francés para trabajar en Canadá."
          },
          {
            p: 2,
            fr: "Je vais à la bibliothèque afin de réviser au calme. Je te prête mes notes pour que tu puisses réviser.",
            es: "Voy a la biblioteca para repasar con calma. Te presto mis apuntes para que puedas repasar."
          },
          {
            p: 3,
            fr: "Merci ! Parle plus fort pour que je t'entende. Je note tout pour ne pas oublier mes rendez-vous.",
            es: "¡Gracias! Habla más fuerte para que te oiga. Lo anoto todo para no olvidar mis citas."
          },
          {
            p: 4,
            fr: "Le professeur répète la consigne afin que tout le monde comprenne. Je t'écris pour que tu saches la vérité.",
            es: "El profesor repite la consigna para que todos entiendan. Te escribo para que sepas la verdad."
          }
        ],
        seg: [
          {
            es: "Escucha cómo suena en una conversación de verdad."
          },
          {
            fr: "J'économise pour partir en France l'été prochain. J'étudie le français pour travailler au Canada.",
            p: 1
          },
          {
            fr: "Je vais à la bibliothèque afin de réviser au calme. Je te prête mes notes pour que tu puisses réviser.",
            p: 2
          },
          {
            fr: "Merci ! Parle plus fort pour que je t'entende. Je note tout pour ne pas oublier mes rendez-vous.",
            p: 3
          },
          {
            fr: "Le professeur répète la consigne afin que tout le monde comprenne. Je t'écris pour que tu saches la vérité.",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Contraste con el español",
        titulo: "Para que entiendas",
        mz: "m2d/alerta",
        items: [
          {
            p: 1,
            regla: "como en español: para que entiendas → pour que tu comprennes"
          },
          {
            p: 2,
            regla: "mismo sujeto: infinitivo (no «pour que je sois»)"
          },
          {
            p: 3,
            regla: "«para no olvidar» = pour ne pas oublier"
          }
        ],
        seg: [
          {
            es: "Funciona como en español: para que entiendas, pour que tu comprennes.",
            p: 1
          },
          {
            es: "Y con el mismo sujeto, infinitivo.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Je t'explique la règle pour que tu la comprends.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Je t'explique la règle pour que tu la comprennes.",
          es: "Pour que + subjuntivo."
        },
        seg: [
          {
            es: "Primera trampa: el indicativo.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Je t'explique la règle pour que tu la comprennes.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Je me lève tôt pour que je sois à l'heure.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Je me lève tôt pour être à l'heure.",
          es: "Mismo sujeto: infinitivo."
        },
        seg: [
          {
            es: "Segunda trampa: pour que con el mismo sujeto.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Je me lève tôt pour être à l'heure.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Je note tout pour ne oublier pas mes rendez-vous.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Je note tout pour ne pas oublier mes rendez-vous.",
          es: "Ne pas juntos delante del infinitivo."
        },
        seg: [
          {
            es: "Una trampa más.",
            p: 1
          },
          {
            es: "Separamos ne y pas.",
            p: 1
          },
          {
            es: "Lo correcto es:",
            p: 2
          },
          {
            fr: "Je note tout pour ne pas oublier mes rendez-vous.",
            p: 2
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/pensativo",
        q: "«Para que entiendas.»",
        o: [
          "pour que tu comprennes",
          "pour que tu comprends"
        ],
        a: 0,
        bien: "¡Eso es! Comprennes.",
        mal: "Subjuntivo.",
        seg: [
          {
            es: "Te toca. ¿Cuál es correcta?"
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/confundido",
        q: "«Para no olvidar.»",
        o: [
          "pour ne pas oublier",
          "pour ne oublier pas"
        ],
        a: 0,
        bien: "¡Muy bien! Ne pas juntos.",
        mal: "Delante del infinitivo.",
        seg: [
          {
            es: "Una más. ¿Cómo lo dices?"
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Repite conmigo",
        titulo: "Repite conmigo",
        mz: "m2d/explica",
        items: [
          {
            p: 1,
            fr: "J'économise pour partir en France.",
            es: "Ahorro para irme a Francia."
          },
          {
            p: 2,
            fr: "Il répète la consigne afin que tout le monde comprenne.",
            es: "Repite la consigna para que todos entiendan."
          },
          {
            p: 3,
            fr: "Je note tout pour ne pas oublier.",
            es: "Lo anoto para no olvidar."
          }
        ],
        seg: [
          {
            es: "Ahora tú. Escucha cada frase y repítela en voz alta."
          },
          {
            fr: "J'économise pour partir en France.",
            p: 1
          },
          {
            es: "Otra vez.",
            p: 1
          },
          {
            fr: "J'économise pour partir en France.",
            p: 1
          },
          {
            fr: "Il répète la consigne afin que tout le monde comprenne.",
            p: 2
          },
          {
            es: "Otra vez.",
            p: 2
          },
          {
            fr: "Il répète la consigne afin que tout le monde comprenne.",
            p: 2
          },
          {
            fr: "Je note tout pour ne pas oublier.",
            p: 3
          },
          {
            es: "Otra vez.",
            p: 3
          },
          {
            fr: "Je note tout pour ne pas oublier.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Repaso",
        titulo: "Resumen",
        mz: "m2d/celebrar",
        items: [
          {
            p: 1,
            tabla: [
              [
                "Sujeto",
                "Construcción"
              ],
              [
                "mismo",
                "pour / afin de + infinitivo"
              ],
              [
                "otro",
                "pour que / afin que + subjuntivo"
              ],
              [
                "para no",
                "pour ne pas + infinitivo"
              ],
              [
                "para evitar",
                "de peur de + inf. · de peur que + subj."
              ]
            ]
          },
          {
            p: 2,
            regla: "Mira los sujetos"
          }
        ],
        seg: [
          {
            es: "Repasemos.",
            p: 1
          },
          {
            es: "Finalidad con infinitivo o subjuntivo.",
            p: 1
          },
          {
            es: "Y ne pas juntos. ¡Ahora, a practicar!",
            p: 2
          }
        ]
      }
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
    {
      id: "ojo",
      tipo: "ojo",
      titulo: "Errores frecuentes",
      intro: "Tres errores que cometemos casi todos los hispanohablantes. Cázalos uno por uno.",
      errores: [
        {
          sit: "Hugo escribe:",
          frase: "Je t'explique la règle pour que tu la comprends.",
          mal: "comprends",
          bien: "comprennes",
          porque: "Usamos el indicativo.",
          truco: "Pour que + subjuntivo."
        },
        {
          sit: "Camila escribe:",
          frase: "Je me lève tôt pour que je sois à l'heure.",
          mal: "pour que je sois",
          bien: "pour être",
          porque: "Usamos pour que con el mismo sujeto.",
          truco: "Mismo sujeto: infinitivo."
        },
        {
          sit: "Camila escribe:",
          frase: "Je note tout pour ne oublier pas mes rendez-vous.",
          mal: "ne oublier pas",
          bien: "ne pas oublier",
          porque: "Separamos ne y pas.",
          truco: "Ne pas juntos delante del infinitivo."
        }
      ]
    }
  ],
  ejemplos: [
    {
      sit: "«Ahorro para irme a Francia.»",
      resp: "J'économise pour partir en France.",
      porque: "mismo sujeto.",
      pasos: [
        {
          q: "¿Mismo sujeto?",
          ops: [
            "sí",
            "no"
          ],
          ok: 0
        },
        {
          q: "¿Construcción?",
          ops: [
            "pour + infinitivo",
            "pour que + subjuntivo"
          ],
          ok: 0
        },
        {
          q: "¿A Francia?",
          ops: [
            "en France",
            "à France"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«Repite la consigna para que todos entiendan.»",
      resp: "Il répète la consigne afin que tout le monde comprenne.",
      porque: "otro sujeto.",
      pasos: [
        {
          q: "¿Mismo sujeto?",
          ops: [
            "no",
            "sí"
          ],
          ok: 0
        },
        {
          q: "¿Construcción?",
          ops: [
            "afin que + subjuntivo",
            "afin de + infinitivo"
          ],
          ok: 0
        },
        {
          q: "¿Comprendre en subjuntivo?",
          ops: [
            "comprenne",
            "comprend"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«Lo anoto para no olvidar.»",
      resp: "Je note tout pour ne pas oublier.",
      porque: "para no.",
      pasos: [
        {
          q: "¿Ne pas va…?",
          ops: [
            "junto, delante del infinitivo",
            "alrededor"
          ],
          ok: 0
        },
        {
          q: "¿Forma?",
          ops: [
            "pour ne pas oublier",
            "pour ne oublier pas"
          ],
          ok: 0
        },
        {
          q: "¿Mismo sujeto?",
          ops: [
            "sí",
            "no"
          ],
          ok: 0
        }
      ]
    }
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

/* ================================ B1.2·5 · Construcciones verbales y comparación matizada ================================ */
E["b12-subjonctif-infinitif"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Subjonctif ou infinitif ? Volonté, sentiment et doute",
  objetivo: {
    que: "Vas a elegir entre infinitivo (mismo sujeto) y que + subjuntivo (otro sujeto) con verbos de voluntad, sentimiento y duda.",
    corto: "Je veux partir. · Je veux que tu viennes.",
    podras: ["Usar el infinitivo cuando la misma persona quiere o siente y hace la acción.", "Usar de + infinitivo con las emociones: je suis content de partir.", "Usar que + subjuntivo (sin de) con otro sujeto, e indicativo con espérer, penser, croire, être sûr."],
    iconos: ["ic2/bombilla", "ic2/corazon", "ic2/pregunta"],
    previos: ["El subjuntivo (B1.1, lecciones 6 y 41), los sentimientos (B1.1, lección 44) y la duda (B1.1, lección 46)."],
    capacidad: "Ahora no dices «je veux que je parte»."
  },
  requiere: R("b1sj-usage", "b1se-struct", "b1cd-subj"), recupera: ["b1se-struct"],
  conceptos: {
    "b2si2-meme": { n: "mismo sujeto → infinitivo (je veux partir); emociones: de + infinitivo (je suis content de partir)", b: "gr" },
    "b2si2-autre": { n: "otro sujeto → que + subjuntivo, sin de (j'ai peur qu'il pleuve); espérer / penser / croire que + indicativo", b: "gr" }
  },
  video: {
    titulo: "¿Subjuntivo o infinitivo? Voluntad, sentimiento y duda",
    voz: "es-CO-SalomeNeural",
    escenas: [
      {
        v: "persona",
        cap: "Para qué sirve",
        fondo: "esc/aula-universitaria",
        img: "pj/camila-neutra",
        fr: "Je voudrais étudier un semestre en France. Mes parents veulent que je finisse mes études avant.",
        es: "Quisiera estudiar un semestre en Francia. Mis padres quieren que termine mis estudios antes.",
        nota: "La sustentación",
        seg: [
          {
            es: "Camila quiere estudiar en Francia: je voudrais étudier. Sus padres quieren que termine antes: veulent que je finisse. Un infinitivo y un subjuntivo. ¿Por qué?"
          },
          {
            fr: "Je voudrais étudier un semestre en France. Mes parents veulent que je finisse mes études avant.",
            p: 1
          },
          {
            es: "Hoy aprendes a elegir entre infinitivo y subjuntivo según quién hace la acción.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Misma persona",
        titulo: "Infinitivo",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Je veux partir. · Je voudrais étudier.",
            es: "quien quiere = quien actúa → infinitivo"
          },
          {
            p: 2,
            fr: "Je suis contente d'être ici. · Nous regrettons de partir.",
            es: "con emociones: de + infinitivo"
          },
          {
            p: 3,
            fr: "Je suis très contente d'être ici avec vous.",
            es: "Estoy muy contenta de estar aquí con ustedes."
          }
        ],
        seg: [
          {
            es: "Si quien quiere es quien actúa: infinitivo. Je veux partir.",
            p: 1
          },
          {
            fr: "Je veux partir. Je voudrais étudier.",
            p: 1
          },
          {
            es: "Con emociones: de más infinitivo.",
            p: 2
          },
          {
            fr: "Je suis contente d'être ici. Nous regrettons de partir.",
            p: 2
          },
          {
            fr: "Je suis très contente d'être ici avec vous.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Personas diferentes",
        titulo: "que + subjuntivo",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Je veux que tu viennes. · J'aimerais beaucoup que vous veniez.",
            es: "voluntad: que + subjuntivo"
          },
          {
            p: 2,
            fr: "Ta mère est triste que tu vives si loin ? · J'ai peur qu'il pleuve.",
            es: "sentimiento, miedo"
          },
          {
            p: 3,
            fr: "vouloir que · avoir peur que · douter que · être content que",
            es: "sin de: j'ai peur que (no «de que»)"
          }
        ],
        seg: [
          {
            es: "Si son personas diferentes: que más subjuntivo. Je veux que tu viennes.",
            p: 1
          },
          {
            fr: "Je veux que tu viennes. J'aimerais beaucoup que vous veniez.",
            p: 1
          },
          {
            fr: "Ta mère est triste que tu vives si loin ? J'ai peur qu'il pleuve.",
            p: 2
          },
          {
            es: "Y sin de: j'ai peur que, nunca de que.",
            p: 3
          },
          {
            fr: "vouloir que, avoir peur que, douter que, être content que",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "La excepción",
        titulo: "espérer que + indicativo",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "J'espère que tu es bien installée.",
            es: "espérer que: indicativo"
          },
          {
            p: 2,
            fr: "espérer que · penser que · être sûr que · croire que",
            es: "indicativo"
          },
          {
            p: 3,
            fr: "J'espère que tu vas bien.",
            es: "Espero que estés bien."
          }
        ],
        seg: [
          {
            es: "Ojo: espérer que va con indicativo. J'espère que tu es bien installée.",
            p: 1
          },
          {
            fr: "J'espère que tu es bien installée.",
            p: 1
          },
          {
            es: "Igual que penser que, croire que, être sûr que.",
            p: 2
          },
          {
            fr: "espérer que, penser que, être sûr que, croire que",
            p: 2
          },
          {
            fr: "J'espère que tu vas bien.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En la vida real",
        titulo: "La sustentación",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Je voudrais étudier un semestre en France l'année prochaine. Mes parents veulent que je finisse mes études avant.",
            es: "Quisiera estudiar un semestre en Francia el año que viene. Mis papás quieren que termine mis estudios antes."
          },
          {
            p: 2,
            fr: "Ta mère est triste que tu vives si loin d'elle ?",
            es: "¿Tu mamá está triste de que vivas tan lejos de ella?"
          },
          {
            p: 3,
            fr: "Un peu. Je suis très contente d'être ici avec vous. J'aimerais beaucoup que vous veniez à ma soutenance.",
            es: "Un poco. Estoy muy contenta de estar aquí con ustedes. Me gustaría mucho que vinieran a mi sustentación."
          },
          {
            p: 4,
            fr: "Bien sûr ! J'espère que tu es bien installée. Je voudrais que tu viennes avec moi au concert, après.",
            es: "¡Claro! Espero que estés bien instalada. Quisiera que vinieras conmigo al concierto, después."
          }
        ],
        seg: [
          {
            es: "Escucha cómo suena en una conversación de verdad."
          },
          {
            fr: "Je voudrais étudier un semestre en France l'année prochaine. Mes parents veulent que je finisse mes études avant.",
            p: 1
          },
          {
            fr: "Ta mère est triste que tu vives si loin d'elle ?",
            p: 2
          },
          {
            fr: "Un peu. Je suis très contente d'être ici avec vous. J'aimerais beaucoup que vous veniez à ma soutenance.",
            p: 3
          },
          {
            fr: "Bien sûr ! J'espère que tu es bien installée. Je voudrais que tu viennes avec moi au concert, après.",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Contraste con el español",
        titulo: "Espero que estés ≠ j'espère que tu sois",
        mz: "m2d/alerta",
        items: [
          {
            p: 1,
            regla: "español: espero que estés (subjuntivo) · francés: j'espère que tu es (indicativo)"
          },
          {
            p: 2,
            regla: "«tengo miedo de que» = j'ai peur que (sin de)"
          },
          {
            p: 3,
            regla: "mismo sujeto: infinitivo (je veux parler, no «que je parle»)"
          }
        ],
        seg: [
          {
            es: "La gran trampa: espero que estés lleva subjuntivo en español, pero indicativo en francés.",
            p: 1
          },
          {
            es: "Y tengo miedo de que es j'ai peur que, sin de.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "J'ai peur de que tu partes.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "J'ai peur que tu partes.",
          es: "Nunca «de que»."
        },
        seg: [
          {
            es: "Primera trampa: de que.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "J'ai peur que tu partes.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Je veux que je parle avec la directrice.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Je veux parler avec la directrice.",
          es: "Mismo sujeto: infinitivo."
        },
        seg: [
          {
            es: "Segunda trampa: que con el mismo sujeto.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Je veux parler avec la directrice.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "J'espère que tu sois bien installé dans ton nouvel appartement.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "J'espère que tu es bien installé dans ton nouvel appartement.",
          es: "Espérer que + indicativo."
        },
        seg: [
          {
            es: "Una trampa más.",
            p: 1
          },
          {
            es: "Usamos el subjuntivo, como en español.",
            p: 1
          },
          {
            es: "Lo correcto es:",
            p: 2
          },
          {
            fr: "J'espère que tu es bien installé dans ton nouvel appartement.",
            p: 2
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/pensativo",
        q: "«Espero que estés bien instalado.»",
        o: [
          "J'espère que tu es bien installé.",
          "J'espère que tu sois bien installé."
        ],
        a: 0,
        bien: "¡Eso es! Tu es.",
        mal: "Espérer que + indicativo.",
        seg: [
          {
            es: "Te toca. ¿Cuál es correcta?"
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/confundido",
        q: "«Tengo miedo de que te vayas.»",
        o: [
          "J'ai peur que tu partes.",
          "J'ai peur de que tu partes."
        ],
        a: 0,
        bien: "¡Muy bien! Sin de.",
        mal: "J'ai peur que.",
        seg: [
          {
            es: "Una más. ¿Cuál es correcta?"
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Repite conmigo",
        titulo: "Repite conmigo",
        mz: "m2d/explica",
        items: [
          {
            p: 1,
            fr: "Je veux que tu viennes.",
            es: "Quiero que vengas."
          },
          {
            p: 2,
            fr: "Je suis content de te voir.",
            es: "Me alegra verte."
          },
          {
            p: 3,
            fr: "J'espère que tu vas bien.",
            es: "Espero que estés bien."
          }
        ],
        seg: [
          {
            es: "Ahora tú. Escucha cada frase y repítela en voz alta."
          },
          {
            fr: "Je veux que tu viennes.",
            p: 1
          },
          {
            es: "Otra vez.",
            p: 1
          },
          {
            fr: "Je veux que tu viennes.",
            p: 1
          },
          {
            fr: "Je suis content de te voir.",
            p: 2
          },
          {
            es: "Otra vez.",
            p: 2
          },
          {
            fr: "Je suis content de te voir.",
            p: 2
          },
          {
            fr: "J'espère que tu vas bien.",
            p: 3
          },
          {
            es: "Otra vez.",
            p: 3
          },
          {
            fr: "J'espère que tu vas bien.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Repaso",
        titulo: "Resumen",
        mz: "m2d/celebrar",
        items: [
          {
            p: 1,
            tabla: [
              [
                "Caso",
                "Construcción"
              ],
              [
                "mismo sujeto",
                "je veux partir · je suis content de partir"
              ],
              [
                "otro sujeto",
                "je veux que tu viennes · j'ai peur qu'il pleuve"
              ],
              [
                "espérer, penser, croire que",
                "indicativo: j'espère que tu vas bien"
              ],
              [
                "¡nunca!",
                "de que"
              ]
            ]
          },
          {
            p: 2,
            regla: "Misma persona: infinitivo; otra: que + subjuntivo"
          }
        ],
        seg: [
          {
            es: "Repasemos.",
            p: 1
          },
          {
            es: "Voluntad, sentimiento y duda.",
            p: 1
          },
          {
            es: "Y espérer que con indicativo. ¡Ahora, a practicar!",
            p: 2
          }
        ]
      }
    ]
  },
  contexto: {
    titulo: "La sustentación", img: "bg-universidad", yo: "camila",
    escena: "Camila invita a Hugo a su sustentación.",
    pj: PJ,
    lineas: [
      ["camila", "Je voudrais étudier un semestre en France l'année prochaine. Mes parents veulent que je finisse mes études avant.", "Quisiera estudiar un semestre en Francia el año que viene. Mis papás quieren que termine mis estudios antes."],
      ["hugo", "Ta mère est triste que tu vives si loin d'elle ?", "¿Tu mamá está triste de que vivas tan lejos de ella?"],
      ["camila", "Un peu. Je suis très contente d'être ici avec vous. J'aimerais beaucoup que vous veniez à ma soutenance.", "Un poco. Estoy muy contenta de estar aquí con ustedes. Me gustaría mucho que vinieran a mi sustentación."],
      ["hugo", "Bien sûr ! J'espère que tu es bien installée. Je voudrais que tu viennes avec moi au concert, après.", "¡Claro! Espero que estés bien instalada. Quisiera que vinieras conmigo al concierto, después."]
    ],
    fijate: "Fíjate: je voudrais étudier, contente d'être (mismo sujeto); veulent que je finisse, triste que tu vives, que vous veniez, que tu viennes (otro sujeto); j'espère que tu es (indicativo)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "La regla de los sujetos",
      idea: "¿Quién quiere o siente? ¿Quién hace la acción? Misma persona → infinitivo: Je veux partir. Je voudrais étudier. Con emociones, de + infinitivo: Je suis content de partir. Nous regrettons de partir. Personas diferentes → que + subjuntivo, sin de: Je veux que tu viennes. Je suis content que tu viennes. J'ai peur qu'il pleuve. Ojo: espérer, penser, croire, être sûr que van con indicativo: J'espère que tu vas bien.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Regla"], [
        ["Je veux partir. · Je voudrais étudier. · étudier", "Quiero irme. · Quisiera estudiar.", "mismo sujeto"],
        ["Je suis contente d'être ici. · d'être · de", "Estoy contenta de estar aquí.", "emoción + de"],
        ["Je veux que tu viennes.", "Quiero que vengas.", "otro sujeto"],
        ["que je finisse · finisse", "que termine", "subjuntivo"],
        ["que je vive · vive", "que viva", "subjuntivo"],
        ["que vous veniez · veniez", "que vengan", "subjuntivo"],
        ["qu'il ait raison · ait", "que tenga razón", "subjuntivo"],
        ["vouloir que · avoir peur que · douter que · être content que", "querer que · temer que · dudar que · alegrarse de que", "+ subjuntivo"],
        ["espérer que · penser que · être sûr que · croire que", "esperar que · pensar que · estar seguro de que · creer que", "+ indicativo"],
        ["J'espère que tu es bien installé. · es", "Espero que estés bien instalado.", "indicativo"]
      ]],
      ej: [["Je veux partir.", "Quiero irme."], ["Je veux que tu viennes.", "Quiero que vengas."], ["J'ai peur qu'il pleuve.", "Tengo miedo de que llueva."], ["J'espère que tu vas bien.", "Espero que estés bien."]] },
    {
      id: "ojo",
      tipo: "ojo",
      titulo: "Errores frecuentes",
      intro: "Tres errores que cometemos casi todos los hispanohablantes. Cázalos uno por uno.",
      errores: [
        {
          sit: "Camila escribe:",
          frase: "J'ai peur de que tu te perdes dans le métro.",
          mal: "de que",
          bien: "que",
          porque: "Calcamos «de que».",
          truco: "Nunca «de que»."
        },
        {
          sit: "Camila dice:",
          frase: "Bonjour, je veux que je parle avec la directrice du programme.",
          mal: "que je parle",
          bien: "parler",
          porque: "Usamos que con el mismo sujeto.",
          truco: "Mismo sujeto = infinitivo."
        },
        {
          sit: "Hugo escribe:",
          frase: "J'espère que tu sois bien installé dans ton nouvel appartement.",
          mal: "sois",
          bien: "es",
          porque: "Usamos el subjuntivo, como en español.",
          truco: "Espérer que + indicativo."
        }
      ]
    }
  ],
  ejemplos: [
    {
      sit: "«Quiero que vengas.»",
      resp: "Je veux que tu viennes.",
      porque: "otro sujeto.",
      pasos: [
        {
          q: "¿Quién quiere y quién viene?",
          ops: [
            "yo / tú: distintos",
            "el mismo"
          ],
          ok: 0
        },
        {
          q: "¿Construcción?",
          ops: [
            "que + subjuntivo",
            "infinitivo"
          ],
          ok: 0
        },
        {
          q: "¿Venir con tu?",
          ops: [
            "viennes",
            "viens"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«Me alegra verte.»",
      resp: "Je suis content de te voir.",
      porque: "mismo sujeto.",
      pasos: [
        {
          q: "¿Quién se alegra y quién ve?",
          ops: [
            "yo y yo",
            "yo y otro"
          ],
          ok: 0
        },
        {
          q: "¿Construcción?",
          ops: [
            "de + infinitivo",
            "que + subjuntivo"
          ],
          ok: 0
        },
        {
          q: "¿La frase?",
          ops: [
            "Je suis content de te voir.",
            "Je suis content que je te voie."
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«Espero que estés bien.»",
      resp: "J'espère que tu vas bien.",
      porque: "espérer.",
      pasos: [
        {
          q: "¿Espérer que pide…?",
          ops: [
            "indicativo",
            "subjuntivo"
          ],
          ok: 0
        },
        {
          q: "¿Aller con tu?",
          ops: [
            "vas",
            "ailles"
          ],
          ok: 0
        },
        {
          q: "¿La frase?",
          ops: [
            "J'espère que tu vas bien.",
            "J'espère que tu ailles bien."
          ],
          ok: 0
        }
      ]
    }
  ],
  comprueba: [
    { q: "Con el mismo sujeto se usa…", o: ["el infinitivo", "que + subjuntivo"], a: 0, b: "gr", porque: "Je veux partir." },
    { q: "«Tengo miedo de que llueva» se dice…", o: ["J'ai peur qu'il pleuve.", "J'ai peur de qu'il pleuve."], a: 0, b: "gr", porque: "Sin de." },
    { q: "Espérer que va con…", o: ["indicativo", "subjuntivo"], a: 0, b: "gr", porque: "Excepción." }
  ],
  practica: [
    { fase: "guiada", c: ["b2si2-autre"], k: "sort", ask: "¿Que + subjuntivo o que + indicativo?", q: "Clasifica.", cats: ["que + subjuntivo", "que + indicativo"], items: [["vouloir que", 0], ["avoir peur que", 0], ["douter que", 0], ["être content que", 0], ["espérer que", 1], ["penser que", 1], ["être sûr que", 1], ["croire que", 1]], pista: "Espérer y creer: indicativo.", why: "Modos." },
    { fase: "guiada", c: ["b2si2-meme"], k: "choice", ask: "«Quisiera estudiar un semestre en Francia.»", q: "«Je voudrais ___ un semestre en France l'année prochaine.»", o: ["étudier", "que j'étudie"], a: 0, pista: "Mismo sujeto.", why: "<b>étudier</b>." },
    { fase: "guiada", c: ["b2si2-autre"], k: "choice", ask: "«Mis papás quieren que termine mis estudios.»", q: "«Mes parents veulent que je ___ mes études avant de voyager.»", o: ["finisse", "finis"], a: 0, pista: "Otro sujeto.", why: "<b>finisse</b>." },
    { fase: "indep", c: ["b2si2-meme"], k: "choice", ask: "«Estoy muy contenta de estar aquí.»", q: "«Je suis très contente ___ ici avec vous aujourd'hui.»", o: ["d'être", "que je sois"], a: 0, why: "<b>d'être</b>." },
    { fase: "indep", c: ["b2si2-autre"], k: "fill", ask: "Subjuntivo de vivre (je).", q: "Ma mère est triste que je ___ si loin d'elle.", acc: ["vive"], why: "<b>vive</b>." },
    { fase: "indep", c: ["b2si2-autre"], k: "fill", ask: "Subjuntivo de venir (vous).", q: "J'aimerais beaucoup que vous ___ à ma soutenance.", acc: ["veniez"], why: "<b>veniez</b>." },
    { fase: "aplica", c: ["b2si2-meme"], k: "fill", ask: "Escribe la preposición.", q: "Nous regrettons ___ partir si tôt.", acc: ["de"], why: "<b>de</b>." },
    { fase: "aplica", c: ["b2si2-autre"], k: "spot", ask: "Encuentra el error.", s: "J'ai peur [de que] tu te perdes dans le métro .", fix: "que", why: "<b>que</b>." },
    { fase: "aplica", c: ["b2si2-meme"], k: "spot", ask: "Encuentra el error.", s: "Bonjour , je veux [que je parle] avec la directrice du programme .", fix: "parler", why: "<b>parler</b>." },
    { fase: "dominio", c: ["b2si2-autre"], k: "spot", ask: "Encuentra el error.", s: "J'espère que tu [sois] bien installé dans ton nouvel appartement .", fix: "es", why: "<b>es</b>." },
    { fase: "dominio", c: ["b2si2-meme", "b2si2-autre"], k: "match", ask: "Une cada frase con su traducción.", q: "Español → francés", pairs: [["Quiero que vengas.", "Je veux que tu viennes."], ["Quiero venir.", "Je veux venir."], ["Me alegra verte.", "Je suis content de te voir."], ["Espero que estés bien.", "J'espère que tu vas bien."], ["Temo que llueva.", "J'ai peur qu'il pleuve."]], why: "Infinitivo / subjuntivo." },
    { fase: "dominio", c: ["b2si2-meme", "b2si2-autre"], k: "listen", say: "Je voudrais que tu viennes avec moi au concert.", acc: ["Je voudrais que tu viennes avec moi au concert."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je voudrais que tu viennes avec moi au concert.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

E["b12-infinitif-passe"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Avant de, après avoir : l'infinitif passé",
  objetivo: {
    que: "Vas a usar avant de + infinitivo y después de + infinitivo pasado: après avoir mangé, après être arrivé(e).",
    corto: "Avant de partir… · Après avoir mangé… · Merci d'être venus !",
    podras: ["Decir «antes de»: avant de + infinitivo.", "Decir «después de»: après avoir / être / s'être + participio, con concordancia si va con être.", "Usar el infinitivo pasado tras merci de, regretter de, content de, sans."],
    iconos: ["ic2/reloj-arena", "ic2/lapiz", "ic2/pergamino"],
    previos: ["Los articuladores del relato (B1.1, lección 15) y avant / après (B1.1, lección 25)."],
    capacidad: "Ahora ordenas acciones con una sola frase."
  },
  requiere: R("b1rc-avapres", "b1aa-prep", "b1ae-oui"), recupera: ["b1rc-avapres"],
  conceptos: {
    "b2ip-forme": { n: "après avoir + participio; après être / s'être + participio concordado (après être arrivées)", b: "gr" },
    "b2ip-usage": { n: "avant de + infinitivo; merci d'être venu, regretter de ne pas avoir lu, sans avoir mangé (mismo sujeto)", b: "gr" }
  },
  video: {
    titulo: "Avant de, après avoir: el infinitivo pasado",
    voz: "es-CO-SalomeNeural",
    escenas: [
      {
        v: "persona",
        cap: "Para qué sirve",
        fondo: "esc/terraza-paris",
        img: "pj/camila-neutra",
        fr: "Après être arrivées à Marseille, nous avons cherché notre hôtel.",
        es: "Después de llegar a Marsella, buscamos nuestro hotel.",
        nota: "El viaje a Marsella",
        seg: [
          {
            es: "Camila cuenta su viaje: après être arrivées à Marseille, après avoir mangé. Después de en francés no va con un infinitivo simple."
          },
          {
            fr: "Après être arrivées à Marseille, nous avons cherché notre hôtel.",
            p: 1
          },
          {
            es: "Hoy aprendes el infinitivo pasado y cuándo usarlo.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Antes y después",
        titulo: "avant de · après avoir",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Avant de partir… · avant de manger",
            es: "antes de + infinitivo (nunca «avant que partir»)"
          },
          {
            p: 2,
            fr: "après avoir mangé · après avoir fini · après avoir lu",
            es: "después de: après avoir + participio"
          },
          {
            p: 3,
            fr: "Après avoir suivi le cours… · après avoir dormi",
            es: "Después de seguir la clase…"
          }
        ],
        seg: [
          {
            es: "Antes de: avant de más infinitivo.",
            p: 1
          },
          {
            fr: "Avant de partir. Avant de manger.",
            p: 1
          },
          {
            es: "Después de: après avoir más participio.",
            p: 2
          },
          {
            fr: "après avoir mangé, après avoir fini, après avoir lu",
            p: 2
          },
          {
            fr: "Après avoir suivi le cours… Après avoir dormi…",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Con être",
        titulo: "après être allés, après s'être levée",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "après être arrivées · après être allés",
            es: "verbos de movimiento: être, con concordancia"
          },
          {
            p: 2,
            fr: "après s'être levée · après s'être habillé",
            es: "pronominales: s'être"
          },
          {
            p: 3,
            fr: "Après s'être levée, Julie prend toujours un café.",
            es: "Después de levantarse, Julie siempre toma un café."
          }
        ],
        seg: [
          {
            es: "Con los verbos de movimiento, être, y concuerda: après être arrivées.",
            p: 1
          },
          {
            fr: "après être arrivées, après être allés",
            p: 1
          },
          {
            es: "Con los pronominales, s'être: après s'être levée.",
            p: 2
          },
          {
            fr: "après s'être levée, après s'être habillé",
            p: 2
          },
          {
            fr: "Après s'être levée, Julie prend toujours un café.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Otros usos",
        titulo: "merci d'être venus",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Merci d'être venus si nombreux à ma fête !",
            es: "merci de + infinitivo pasado"
          },
          {
            p: 2,
            fr: "Je regrette de ne pas avoir lu ce livre. · sans avoir mangé",
            es: "regretter de · sans"
          },
          {
            p: 3,
            fr: "Nous sommes contents d'avoir réussi notre examen.",
            es: "être content de"
          }
        ],
        seg: [
          {
            es: "También tras merci de: merci d'être venus.",
            p: 1
          },
          {
            fr: "Merci d'être venus si nombreux à ma fête !",
            p: 1
          },
          {
            es: "Tras regretter de y sans.",
            p: 2
          },
          {
            fr: "Je regrette de ne pas avoir lu ce livre.",
            p: 2
          },
          {
            fr: "Nous sommes contents d'avoir réussi notre examen.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En la vida real",
        titulo: "El viaje a Marsella",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Après être arrivées à Marseille, nous avons cherché notre hôtel.",
            es: "Después de llegar a Marsella, buscamos nuestro hotel."
          },
          {
            p: 2,
            fr: "Et le matin ?",
            es: "¿Y por la mañana?"
          },
          {
            p: 3,
            fr: "Après s'être levée, Julie prend toujours un café. Après avoir mangé, on a fait une promenade sur le port.",
            es: "Después de levantarse, Julie siempre toma un café. Después de comer, dimos un paseo por el puerto."
          },
          {
            p: 4,
            fr: "Moi, je regrette de ne pas avoir lu ce livre avant l'examen. Merci d'être venus si nombreux à ma fête !",
            es: "Yo lamento no haber leído ese libro antes del examen. ¡Gracias por venir tantos a mi fiesta!"
          }
        ],
        seg: [
          {
            es: "Escucha cómo suena en una conversación de verdad."
          },
          {
            fr: "Après être arrivées à Marseille, nous avons cherché notre hôtel.",
            p: 1
          },
          {
            fr: "Et le matin ?",
            p: 2
          },
          {
            fr: "Après s'être levée, Julie prend toujours un café. Après avoir mangé, on a fait une promenade sur le port.",
            p: 3
          },
          {
            fr: "Moi, je regrette de ne pas avoir lu ce livre avant l'examen. Merci d'être venus si nombreux à ma fête !",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Contraste con el español",
        titulo: "Después de comer ≠ après manger",
        mz: "m2d/alerta",
        items: [
          {
            p: 1,
            regla: "«después de comer» = après avoir mangé (no «après manger»)"
          },
          {
            p: 2,
            regla: "«antes de salir» = avant de partir (no «avant que partir»)"
          },
          {
            p: 3,
            regla: "aller va con être: après être allés"
          }
        ],
        seg: [
          {
            es: "Después de comer es après avoir mangé, siempre en pasado.",
            p: 1
          },
          {
            es: "Y antes de salir, avant de partir.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Après manger, je dors.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Après avoir mangé, je dors.",
          es: "Infinitivo pasado."
        },
        seg: [
          {
            es: "Primera trampa: après con infinitivo simple.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Après avoir mangé, je dors.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Avant que partir, éteignez les lumières.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Avant de partir, éteignez les lumières.",
          es: "Avant de."
        },
        seg: [
          {
            es: "Segunda trampa: avant que.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Avant de partir, éteignez les lumières.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Après avoir allé au marché, nous avons cuisiné ensemble.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Après être allés au marché, nous avons cuisiné ensemble.",
          es: "Aller va con être."
        },
        seg: [
          {
            es: "Una trampa más.",
            p: 1
          },
          {
            es: "Usamos avoir con aller.",
            p: 1
          },
          {
            es: "Lo correcto es:",
            p: 2
          },
          {
            fr: "Après être allés au marché, nous avons cuisiné ensemble.",
            p: 2
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/pensativo",
        q: "«Después de comer…»",
        o: [
          "Après avoir mangé…",
          "Après manger…"
        ],
        a: 0,
        bien: "¡Eso es! Après avoir mangé.",
        mal: "Infinitivo pasado.",
        seg: [
          {
            es: "Te toca. ¿Cómo lo dices?"
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/confundido",
        q: "«Después de ir al mercado…»",
        o: [
          "Après être allés au marché…",
          "Après avoir allé au marché…"
        ],
        a: 0,
        bien: "¡Muy bien! Être allés.",
        mal: "Aller va con être.",
        seg: [
          {
            es: "Una más. ¿Cuál es correcta?"
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Repite conmigo",
        titulo: "Repite conmigo",
        mz: "m2d/explica",
        items: [
          {
            p: 1,
            fr: "Avant de sortir, vérifie que tu as tes clés.",
            es: "Antes de salir, revisa tus llaves."
          },
          {
            p: 2,
            fr: "Après être arrivées à Marseille…",
            es: "Después de llegar a Marsella (ellas)…"
          },
          {
            p: 3,
            fr: "Nous sommes contents d'avoir réussi notre examen.",
            es: "Estamos contentos de haber aprobado."
          }
        ],
        seg: [
          {
            es: "Ahora tú. Escucha cada frase y repítela en voz alta."
          },
          {
            fr: "Avant de sortir, vérifie que tu as tes clés.",
            p: 1
          },
          {
            es: "Otra vez.",
            p: 1
          },
          {
            fr: "Avant de sortir, vérifie que tu as tes clés.",
            p: 1
          },
          {
            fr: "Après être arrivées à Marseille…",
            p: 2
          },
          {
            es: "Otra vez.",
            p: 2
          },
          {
            fr: "Après être arrivées à Marseille…",
            p: 2
          },
          {
            fr: "Nous sommes contents d'avoir réussi notre examen.",
            p: 3
          },
          {
            es: "Otra vez.",
            p: 3
          },
          {
            fr: "Nous sommes contents d'avoir réussi notre examen.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Repaso",
        titulo: "Resumen",
        mz: "m2d/celebrar",
        items: [
          {
            p: 1,
            tabla: [
              [
                "Para…",
                "Se dice"
              ],
              [
                "antes de",
                "avant de partir"
              ],
              [
                "después de (avoir)",
                "après avoir mangé"
              ],
              [
                "después de (être)",
                "après être allés · après s'être levée"
              ],
              [
                "otros",
                "merci d'être venus · sans avoir mangé"
              ]
            ]
          },
          {
            p: 2,
            regla: "Après + infinitivo pasado"
          }
        ],
        seg: [
          {
            es: "Repasemos.",
            p: 1
          },
          {
            es: "Antes de y después de.",
            p: 1
          },
          {
            es: "Y aller con être. ¡Ahora, a practicar!",
            p: 2
          }
        ]
      }
    ]
  },
  contexto: {
    titulo: "El viaje a Marsella", img: "bg-paris", yo: "camila",
    escena: "Camila cuenta su viaje con amigas.",
    pj: PJ,
    lineas: [
      ["camila", "Après être arrivées à Marseille, nous avons cherché notre hôtel.", "Después de llegar a Marsella, buscamos nuestro hotel."],
      ["hugo", "Et le matin ?", "¿Y por la mañana?"],
      ["camila", "Après s'être levée, Julie prend toujours un café. Après avoir mangé, on a fait une promenade sur le port.", "Después de levantarse, Julie siempre toma un café. Después de comer, dimos un paseo por el puerto."],
      ["hugo", "Moi, je regrette de ne pas avoir lu ce livre avant l'examen. Merci d'être venus si nombreux à ma fête !", "Yo lamento no haber leído ese libro antes del examen. ¡Gracias por venir tantos a mi fiesta!"]
    ],
    fijate: "Fíjate: après être arrivées, après s'être levée (être, concordancia); après avoir mangé (avoir); ne pas avoir lu; merci d'être venus."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "El infinitivo pasado",
      idea: "Antes: avant de + infinitivo (avant de partir; nunca «avant que partir»). Después: après + infinitivo pasado: après avoir + participio (après avoir mangé, après avoir fini) o après être / s'être + participio con verbos de movimiento y pronominales (après être allés, après s'être levée), con concordancia. El infinitivo pasado aparece también tras merci de, regretter de, être content de, sans: merci d'être venus, je regrette de ne pas avoir lu, sans avoir mangé. Solo funciona si el sujeto es el mismo.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Forma"], [
        ["Avant de partir… · Avant de · avant de manger · de", "Antes de salir… · antes de comer", "avant de + infinitivo"],
        ["après avoir mangé · avoir mangé", "después de comer", "avoir"],
        ["Après avoir suivi le cours… · Après avoir suivi", "Después de seguir la clase…", "avoir"],
        ["après avoir fini · après avoir lu · après avoir dormi", "después de terminar · de leer · de dormir", "avoir"],
        ["après être arrivées · arrivées", "después de llegar (ellas)", "être + concordancia"],
        ["après être allés · être allés", "después de ir (ellos)", "être"],
        ["après s'être levée · s'être levée · après s'être habillé", "después de levantarse · de vestirse", "pronominal"],
        ["merci d'être venus · d'être", "gracias por haber venido", "merci de"],
        ["de ne pas avoir lu · avoir lu", "no haber leído", "negación"],
        ["d'avoir réussi · avoir réussi · sans avoir mangé", "de haber aprobado · sin haber comido", "infinitivo pasado"]
      ]],
      ej: [["Avant de partir, je ferme la porte.", "Antes de salir, cierro la puerta."], ["Après avoir mangé, on a marché.", "Después de comer, caminamos."], ["Après être arrivées, elles ont dormi.", "Después de llegar, ellas durmieron."], ["Merci d'être venus !", "¡Gracias por venir!"]] },
    {
      id: "ojo",
      tipo: "ojo",
      titulo: "Errores frecuentes",
      intro: "Tres errores que cometemos casi todos los hispanohablantes. Cázalos uno por uno.",
      errores: [
        {
          sit: "Camila escribe:",
          frase: "Après manger, on a fait une promenade sur le Malecón.",
          mal: "Après manger",
          bien: "Après avoir mangé",
          porque: "Usamos el infinitivo simple.",
          truco: "«Después de» exige el infinitivo pasado."
        },
        {
          sit: "Hugo escribe:",
          frase: "Avant que partir, éteignez les lumières.",
          mal: "Avant que",
          bien: "Avant de",
          porque: "Usamos avant que con infinitivo.",
          truco: "Con infinitivo: avant de."
        },
        {
          sit: "Camila escribe:",
          frase: "Après avoir allé au marché, nous avons cuisiné ensemble.",
          mal: "avoir allé",
          bien: "être allés",
          porque: "Usamos avoir con aller.",
          truco: "Aller va con être."
        }
      ]
    }
  ],
  ejemplos: [
    {
      sit: "«Antes de salir, revisa tus llaves.»",
      resp: "Avant de sortir, vérifie que tu as tes clés.",
      porque: "avant de.",
      pasos: [
        {
          q: "¿Antes de + verbo?",
          ops: [
            "avant de",
            "avant que"
          ],
          ok: 0
        },
        {
          q: "¿Infinitivo?",
          ops: [
            "simple: sortir",
            "pasado"
          ],
          ok: 0
        },
        {
          q: "¿La frase?",
          ops: [
            "Avant de sortir, vérifie que tu as tes clés.",
            "Avant que sortir, vérifie que tu as tes clés."
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«Después de llegar a Marsella (ellas)…»",
      resp: "Après être arrivées à Marseille…",
      porque: "être.",
      pasos: [
        {
          q: "¿Arriver lleva…?",
          ops: [
            "être",
            "avoir"
          ],
          ok: 0
        },
        {
          q: "¿Concordancia?",
          ops: [
            "sí: arrivées",
            "no"
          ],
          ok: 0
        },
        {
          q: "¿Forma?",
          ops: [
            "après être arrivées",
            "après arriver"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«Estamos contentos de haber aprobado.»",
      resp: "Nous sommes contents d'avoir réussi notre examen.",
      porque: "être content de.",
      pasos: [
        {
          q: "¿Qué sigue a contents?",
          ops: [
            "de + infinitivo pasado",
            "que"
          ],
          ok: 0
        },
        {
          q: "¿De + avoir?",
          ops: [
            "d'avoir",
            "de avoir"
          ],
          ok: 0
        },
        {
          q: "¿Aprobar?",
          ops: [
            "réussir",
            "approuver"
          ],
          ok: 0
        }
      ]
    }
  ],
  comprueba: [
    { q: "«Después de comer» se dice…", o: ["après avoir mangé", "après manger"], a: 0, b: "gr", porque: "Infinitivo pasado." },
    { q: "«Antes de salir» se dice…", o: ["avant de partir", "avant que partir"], a: 0, b: "gr", porque: "avant de." },
    { q: "Con aller, después de se dice…", o: ["après être allé", "après avoir allé"], a: 0, b: "gr", porque: "être." }
  ],
  practica: [
    { fase: "guiada", c: ["b2ip-forme"], k: "sort", ask: "¿Después de con avoir o con être?", q: "Clasifica.", cats: ["après avoir + participio", "après être / s'être + participio"], items: [["manger", 0], ["finir", 0], ["lire", 0], ["dormir", 0], ["aller", 1], ["venir", 1], ["partir", 1], ["se reposer", 1]], pista: "Movimiento y pronominales: être.", why: "Auxiliares." },
    { fase: "guiada", c: ["b2ip-forme"], k: "choice", ask: "«Después de seguir la clase de fonética, fuimos a la cafetería.»", q: "«___ le cours de phonétique, nous sommes allés à la cafétéria.»", o: ["Après avoir suivi", "Après suivre"], a: 0, pista: "Infinitivo pasado.", why: "<b>Après avoir suivi</b>." },
    { fase: "guiada", c: ["b2ip-usage"], k: "choice", ask: "«Antes de salir, revisa tus llaves.»", q: "«___ sortir, vérifie que tu as tes clés.»", o: ["Avant de", "Avant que"], a: 0, pista: "+ infinitivo.", why: "<b>Avant de</b>." },
    { fase: "indep", c: ["b2ip-forme"], k: "choice", ask: "«Después de llegar a Marsella (ellas)…»", q: "«Après être ___ à Marseille, elles ont cherché leur hôtel.»", o: ["arrivées", "arrivé"], a: 0, why: "<b>arrivées</b>." },
    { fase: "indep", c: ["b2ip-forme"], k: "fill", ask: "Infinitivo pasado de se lever (Julie).", q: "Après ___, Julie prend toujours un café.", acc: ["s'être levée", "s’être levée"], why: "<b>s'être levée</b>." },
    { fase: "indep", c: ["b2ip-usage"], k: "fill", ask: "«Gracias por haber venido»", q: "Merci ___ venus si nombreux !", acc: ["d'être", "d’être"], why: "<b>d'être</b>." },
    { fase: "aplica", c: ["b2ip-usage"], k: "fill", ask: "Infinitivo pasado de lire.", q: "Je regrette de ne pas ___ ce livre avant l'examen.", acc: ["avoir lu"], why: "<b>avoir lu</b>." },
    { fase: "aplica", c: ["b2ip-forme"], k: "spot", ask: "Encuentra el error.", s: "Après [manger] , on a fait une promenade sur le Malecón .", fix: "avoir mangé", why: "<b>avoir mangé</b>." },
    { fase: "aplica", c: ["b2ip-usage"], k: "spot", ask: "Encuentra el error.", s: "Avant [que] partir , éteignez les lumières .", fix: "de", why: "<b>Avant de</b>." },
    { fase: "dominio", c: ["b2ip-forme"], k: "spot", ask: "Encuentra el error.", s: "Après [avoir allé] au marché , nous avons cuisiné ensemble .", fix: "être allés", why: "<b>être allés</b>." },
    { fase: "dominio", c: ["b2ip-forme", "b2ip-usage"], k: "match", ask: "Une cada expresión con su traducción.", q: "Español → francés", pairs: [["después de comer", "après avoir mangé"], ["antes de comer", "avant de manger"], ["sin haber comido", "sans avoir mangé"], ["gracias por haber venido", "merci d'être venu"], ["después de vestirse", "après s'être habillé"]], why: "Formas." },
    { fase: "dominio", c: ["b2ip-forme", "b2ip-usage"], k: "listen", say: "Après avoir fini mes cours, je vais à la bibliothèque.", acc: ["Après avoir fini mes cours, je vais à la bibliothèque."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Après avoir fini mes cours, je vais à la bibliothèque.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Julie", "Marseille", "Malecón"], previo: [] }
};

E["b12-comparaison-nuancee"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Comparer avec nuance : de plus en plus, plus… plus, autant",
  objetivo: {
    que: "Vas a comparar con matices: evolución (de plus en plus), proporción (plus… plus) e igualdad (autant).",
    corto: "de plus en plus · Plus je lis, plus j'apprends. · autant de… que.",
    podras: ["Expresar evolución: de plus en plus (de), de moins en moins, de mieux en mieux.", "Expresar proporción: Plus…, plus… / Moins…, moins… (sin artículo).", "Expresar igualdad e intensidad: autant que, autant de… que, beaucoup plus, deux fois plus."],
    iconos: ["ic2/rayo", "ic2/estrella", "ic2/moneda"],
    previos: ["Meilleur o mieux (B1.1, lección 39) y el comparativo (A2, lección 7)."],
    capacidad: "Ahora comparas como en un texto argumentativo."
  },
  requiere: R("b1mm-choix", "cmp-adj", "cmp-nom"), recupera: ["cmp-nom"],
  conceptos: {
    "b2cn-evol": { n: "evolución: de plus en plus (de), de moins en moins, de mieux en mieux; proporción: plus…, plus… (sin artículo)", b: "gr" },
    "b2cn-egal": { n: "igualdad: autant que (verbo), autant de… que (nombre); intensidad: beaucoup plus, deux fois plus", b: "gr" }
  },
  video: {
    titulo: "Comparar con matices: de plus en plus, plus… plus, autant",
    voz: "es-CO-SalomeNeural",
    escenas: [
      {
        v: "persona",
        cap: "Para qué sirve",
        fondo: "esc/calle-paris",
        img: "pj/camila-neutra",
        fr: "À Bogotá, la vie devient de plus en plus chère.",
        es: "En Bogotá, la vida se vuelve cada vez más cara.",
        nota: "La vida en Bogotá",
        seg: [
          {
            es: "Camila habla de Bogotá: de plus en plus chère. Y de cómo aprende: plus je lis, plus je comprends. Comparaciones con matices."
          },
          {
            fr: "À Bogotá, la vie devient de plus en plus chère.",
            p: 1
          },
          {
            es: "Hoy aprendes a expresar evolución, proporción e igualdad.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "La evolución",
        titulo: "de plus en plus",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "de plus en plus · de moins en moins · de mieux en mieux",
            es: "cada vez más · menos · mejor"
          },
          {
            p: 2,
            fr: "Dans les grandes villes, il y a de plus en plus de voitures.",
            es: "con nombre: de plus en plus de"
          },
          {
            p: 3,
            fr: "Ça va de mieux en mieux pour toi, non ?",
            es: "Te va cada vez mejor, ¿no?"
          }
        ],
        seg: [
          {
            es: "Cada vez más: de plus en plus. Cada vez mejor: de mieux en mieux.",
            p: 1
          },
          {
            fr: "de plus en plus, de moins en moins, de mieux en mieux",
            p: 1
          },
          {
            es: "Con un nombre: de plus en plus de.",
            p: 2
          },
          {
            fr: "Dans les grandes villes, il y a de plus en plus de voitures.",
            p: 2
          },
          {
            fr: "Ça va de mieux en mieux pour toi, non ?",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "La proporción",
        titulo: "Plus…, plus…",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Plus je lis, plus je comprends.",
            es: "mientras más…, más…: sin artículo"
          },
          {
            p: 2,
            fr: "Moins on dort, moins on est concentré.",
            es: "mientras menos…, menos…"
          },
          {
            p: 3,
            fr: "d'autant plus qu'il pleut",
            es: "más aún porque llueve"
          }
        ],
        seg: [
          {
            es: "Mientras más, más: plus…, plus, sin artículo.",
            p: 1
          },
          {
            fr: "Plus je lis, plus je comprends.",
            p: 1
          },
          {
            fr: "Moins on dort, moins on est concentré.",
            p: 2
          },
          {
            es: "Y d'autant plus que: más aún porque.",
            p: 3
          },
          {
            fr: "d'autant plus qu'il pleut",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Igualdad e intensidad",
        titulo: "autant, beaucoup plus",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Paul travaille autant que son frère.",
            es: "verbo + autant que"
          },
          {
            p: 2,
            fr: "Cette année, il y a autant d'étudiants que l'an dernier.",
            es: "autant de + nombre + que"
          },
          {
            p: 3,
            fr: "beaucoup plus cher · deux fois plus cher",
            es: "mucho más (no «très plus») · el doble"
          }
        ],
        seg: [
          {
            es: "Igualdad con un verbo: autant que.",
            p: 1
          },
          {
            fr: "Paul travaille autant que son frère.",
            p: 1
          },
          {
            es: "Con un nombre: autant de.",
            p: 2
          },
          {
            fr: "Cette année, il y a autant d'étudiants que l'an dernier.",
            p: 2
          },
          {
            es: "Y mucho más es beaucoup plus; el doble, deux fois plus.",
            p: 3
          },
          {
            fr: "beaucoup plus cher, deux fois plus cher",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En la vida real",
        titulo: "La vida en Bogotá",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "À Bogotá, la vie devient de plus en plus chère. Les loyers sont de plus en plus chers.",
            es: "En Bogotá la vida es cada vez más cara. Los arriendos son cada vez más caros."
          },
          {
            p: 2,
            fr: "Ici aussi. Dans les grandes villes, il y a de plus en plus de voitures. Ce restaurant est deux fois plus cher que l'autre !",
            es: "Aquí también. En las grandes ciudades hay cada vez más carros. ¡Este restaurante es el doble de caro que el otro!"
          },
          {
            p: 3,
            fr: "Plus je lis en français, plus je comprends vite. Cette année, il y a autant d'étudiants que l'an dernier.",
            es: "Mientras más leo en francés, más rápido entiendo. Este año hay tantos estudiantes como el año pasado."
          },
          {
            p: 4,
            fr: "Paul travaille autant que son frère. Moins on dort, moins on est concentré. Ça va de mieux en mieux pour toi, non ?",
            es: "Paul trabaja tanto como su hermano. Mientras menos se duerme, menos concentrado se está. Te va cada vez mejor, ¿no?"
          }
        ],
        seg: [
          {
            es: "Escucha cómo suena en una conversación de verdad."
          },
          {
            fr: "À Bogotá, la vie devient de plus en plus chère. Les loyers sont de plus en plus chers.",
            p: 1
          },
          {
            fr: "Ici aussi. Dans les grandes villes, il y a de plus en plus de voitures. Ce restaurant est deux fois plus cher que l'autre !",
            p: 2
          },
          {
            fr: "Plus je lis en français, plus je comprends vite. Cette année, il y a autant d'étudiants que l'an dernier.",
            p: 3
          },
          {
            fr: "Paul travaille autant que son frère. Moins on dort, moins on est concentré. Ça va de mieux en mieux pour toi, non ?",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Contraste con el español",
        titulo: "Mientras más ≠ le plus",
        mz: "m2d/alerta",
        items: [
          {
            p: 1,
            regla: "«mientras más leo, más entiendo» = plus je lis, plus je comprends (sin artículo)"
          },
          {
            p: 2,
            regla: "«mucho más» = beaucoup plus (no «très plus»)"
          },
          {
            p: 3,
            regla: "«cada vez más» = de plus en plus (no «chaque fois plus»)"
          }
        ],
        seg: [
          {
            es: "Mientras más se dice plus, sin artículo ni mientras.",
            p: 1
          },
          {
            es: "Y mucho más, beaucoup plus.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Le plus je lis, le plus j'apprends.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Plus je lis, plus j'apprends.",
          es: "Sin artículo."
        },
        seg: [
          {
            es: "Primera trampa: el artículo.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Plus je lis, plus j'apprends.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Ce film est très plus intéressant que le livre.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Ce film est beaucoup plus intéressant que le livre.",
          es: "Mucho más = beaucoup plus."
        },
        seg: [
          {
            es: "Segunda trampa: très plus.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Ce film est beaucoup plus intéressant que le livre.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Les loyers à Bogotá sont chaque fois plus chers.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Les loyers à Bogotá sont de plus en plus chers.",
          es: "Cada vez más = de plus en plus."
        },
        seg: [
          {
            es: "Una trampa más.",
            p: 1
          },
          {
            es: "Calcamos «cada vez más».",
            p: 1
          },
          {
            es: "Lo correcto es:",
            p: 2
          },
          {
            fr: "Les loyers à Bogotá sont de plus en plus chers.",
            p: 2
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/pensativo",
        q: "«Mientras más leo, más aprendo.»",
        o: [
          "Plus je lis, plus j'apprends.",
          "Le plus je lis, le plus j'apprends."
        ],
        a: 0,
        bien: "¡Eso es! Sin artículo.",
        mal: "Plus…, plus…",
        seg: [
          {
            es: "Te toca. ¿Cuál es correcta?"
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/confundido",
        q: "«Los arriendos son cada vez más caros.»",
        o: [
          "Les loyers sont de plus en plus chers.",
          "Les loyers sont chaque fois plus chers."
        ],
        a: 0,
        bien: "¡Muy bien! De plus en plus.",
        mal: "Cada vez más.",
        seg: [
          {
            es: "Una más. ¿Cuál es correcta?"
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Repite conmigo",
        titulo: "Repite conmigo",
        mz: "m2d/explica",
        items: [
          {
            p: 1,
            fr: "Il y a de plus en plus de voitures.",
            es: "Cada vez hay más carros."
          },
          {
            p: 2,
            fr: "Plus on pratique, plus on progresse.",
            es: "Mientras más practicas, más progresas."
          },
          {
            p: 3,
            fr: "J'ai autant de devoirs que l'année dernière.",
            es: "Tengo tantas tareas como el año pasado."
          }
        ],
        seg: [
          {
            es: "Ahora tú. Escucha cada frase y repítela en voz alta."
          },
          {
            fr: "Il y a de plus en plus de voitures.",
            p: 1
          },
          {
            es: "Otra vez.",
            p: 1
          },
          {
            fr: "Il y a de plus en plus de voitures.",
            p: 1
          },
          {
            fr: "Plus on pratique, plus on progresse.",
            p: 2
          },
          {
            es: "Otra vez.",
            p: 2
          },
          {
            fr: "Plus on pratique, plus on progresse.",
            p: 2
          },
          {
            fr: "J'ai autant de devoirs que l'année dernière.",
            p: 3
          },
          {
            es: "Otra vez.",
            p: 3
          },
          {
            fr: "J'ai autant de devoirs que l'année dernière.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Repaso",
        titulo: "Resumen",
        mz: "m2d/celebrar",
        items: [
          {
            p: 1,
            tabla: [
              [
                "Idea",
                "Se dice"
              ],
              [
                "evolución",
                "de plus en plus · de moins en moins · de mieux en mieux"
              ],
              [
                "proporción",
                "Plus…, plus… · Moins…, moins…"
              ],
              [
                "igualdad",
                "autant que · autant de + nombre"
              ],
              [
                "intensidad",
                "beaucoup plus · deux fois plus"
              ]
            ]
          },
          {
            p: 2,
            regla: "Sin artículo en plus…, plus…"
          }
        ],
        seg: [
          {
            es: "Repasemos.",
            p: 1
          },
          {
            es: "Comparar con matices.",
            p: 1
          },
          {
            es: "Y beaucoup plus, nunca très plus. ¡Ahora, a practicar!",
            p: 2
          }
        ]
      }
    ]
  },
  contexto: {
    titulo: "La vida en Bogotá", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo comparan ciudades.",
    pj: PJ,
    lineas: [
      ["camila", "À Bogotá, la vie devient de plus en plus chère. Les loyers sont de plus en plus chers.", "En Bogotá la vida es cada vez más cara. Los arriendos son cada vez más caros."],
      ["hugo", "Ici aussi. Dans les grandes villes, il y a de plus en plus de voitures. Ce restaurant est deux fois plus cher que l'autre !", "Aquí también. En las grandes ciudades hay cada vez más carros. ¡Este restaurante es el doble de caro que el otro!"],
      ["camila", "Plus je lis en français, plus je comprends vite. Cette année, il y a autant d'étudiants que l'an dernier.", "Mientras más leo en francés, más rápido entiendo. Este año hay tantos estudiantes como el año pasado."],
      ["hugo", "Paul travaille autant que son frère. Moins on dort, moins on est concentré. Ça va de mieux en mieux pour toi, non ?", "Paul trabaja tanto como su hermano. Mientras menos se duerme, menos concentrado se está. Te va cada vez mejor, ¿no?"]
    ],
    fijate: "Fíjate: de plus en plus chère, de plus en plus de voitures, deux fois plus cher, plus je lis plus je comprends, autant d'étudiants que, autant que, moins… moins, de mieux en mieux."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Tres tipos de comparación",
      idea: "Evolución: de plus en plus (cada vez más), de plus en plus de + nombre, de moins en moins, de mieux en mieux. Proporción: Plus…, plus… / Moins…, moins… sin artículo y sin «mientras»: Plus je lis, plus j'apprends. Igualdad: autant que con un verbo (il travaille autant que moi), autant de + nombre + que (autant de cours que toi). Intensidad: beaucoup plus (mucho más; no «très plus»), deux fois plus (el doble). D'autant plus que = más aún porque.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Tipo"], [
        ["de plus en plus · de plus en plus de voitures · de plus en plus de", "cada vez más · cada vez más carros", "evolución"],
        ["de moins en moins · de mieux en mieux", "cada vez menos · cada vez mejor", "evolución"],
        ["Plus je lis, plus je comprends. · Plus… plus", "Mientras más leo, más entiendo.", "proporción"],
        ["Moins on dort, moins on est concentré. · moins", "Mientras menos se duerme, menos concentrado se está.", "proporción"],
        ["Paul travaille autant que son frère. · autant", "Paul trabaja tanto como su hermano.", "igualdad (verbo)"],
        ["autant d'étudiants que · autant d' · autant de", "tantos estudiantes como", "igualdad (nombre)"],
        ["beaucoup plus cher · beaucoup plus", "mucho más caro", "intensidad"],
        ["deux fois plus cher · deux fois", "el doble de caro", "intensidad"],
        ["d'autant plus qu'il pleut · d'autant plus qu'", "más aún porque llueve", "refuerzo"]
      ]],
      ej: [["Il fait de plus en plus chaud.", "Hace cada vez más calor."], ["Plus je lis, plus j'apprends.", "Mientras más leo, más aprendo."], ["J'ai autant de cours que toi.", "Tengo tantas clases como tú."], ["C'est beaucoup plus cher.", "Es mucho más caro."]] },
    {
      id: "ojo",
      tipo: "ojo",
      titulo: "Errores frecuentes",
      intro: "Tres errores que cometemos casi todos los hispanohablantes. Cázalos uno por uno.",
      errores: [
        {
          sit: "Camila escribe:",
          frase: "Le plus je lis, le plus j'apprends.",
          mal: "Le plus je lis, le plus",
          bien: "Plus je lis, plus",
          porque: "Ponemos artículo.",
          truco: "Sin artículo y sin «mientras»."
        },
        {
          sit: "Hugo escribe:",
          frase: "Ce film est très plus intéressant que le livre.",
          mal: "très plus",
          bien: "beaucoup plus",
          porque: "Calcamos «muy más».",
          truco: "«Mucho más» = beaucoup plus."
        },
        {
          sit: "Camila escribe:",
          frase: "Les loyers à Bogotá sont chaque fois plus chers.",
          mal: "chaque fois plus",
          bien: "de plus en plus",
          porque: "Calcamos «cada vez más».",
          truco: "Cada vez más = de plus en plus."
        }
      ]
    }
  ],
  ejemplos: [
    {
      sit: "«Cada vez hay más carros.»",
      resp: "Il y a de plus en plus de voitures.",
      porque: "evolución.",
      pasos: [
        {
          q: "¿Cada vez más?",
          ops: [
            "de plus en plus",
            "chaque fois plus"
          ],
          ok: 0
        },
        {
          q: "¿Con nombre lleva…?",
          ops: [
            "de",
            "des"
          ],
          ok: 0
        },
        {
          q: "¿La frase?",
          ops: [
            "Il y a de plus en plus de voitures.",
            "Il y a de plus en plus des voitures."
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«Mientras más practicas, más progresas.»",
      resp: "Plus on pratique, plus on progresse.",
      porque: "proporción.",
      pasos: [
        {
          q: "¿Artículo?",
          ops: [
            "no",
            "sí: le"
          ],
          ok: 0
        },
        {
          q: "¿Mientras?",
          ops: [
            "no se traduce",
            "pendant que"
          ],
          ok: 0
        },
        {
          q: "¿La frase?",
          ops: [
            "Plus on pratique, plus on progresse.",
            "Le plus on pratique, le plus on progresse."
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«Tengo tantas tareas como el año pasado.»",
      resp: "J'ai autant de devoirs que l'année dernière.",
      porque: "igualdad.",
      pasos: [
        {
          q: "¿Con nombre?",
          ops: [
            "autant de",
            "aussi"
          ],
          ok: 0
        },
        {
          q: "¿De o des?",
          ops: [
            "de",
            "des"
          ],
          ok: 0
        },
        {
          q: "¿Comparación con…?",
          ops: [
            "que",
            "comme"
          ],
          ok: 0
        }
      ]
    }
  ],
  comprueba: [
    { q: "«Cada vez más» se dice…", o: ["de plus en plus", "chaque fois plus"], a: 0, b: "gr", porque: "Evolución." },
    { q: "«Mientras más…, más…» se dice…", o: ["Plus…, plus…", "Le plus…, le plus…"], a: 0, b: "gr", porque: "Sin artículo." },
    { q: "«Tanto como» con un verbo se dice…", o: ["autant que", "aussi que"], a: 0, b: "gr", porque: "Igualdad." }
  ],
  practica: [
    { fase: "guiada", c: ["b2cn-evol", "b2cn-egal"], k: "sort", ask: "¿Evolución, proporción o igualdad?", q: "Clasifica.", cats: ["evolución", "proporción", "igualdad"], items: [["Il fait de plus en plus chaud.", 0], ["Les prix sont de moins en moins raisonnables.", 0], ["Ça va de mieux en mieux.", 0], ["Plus on pratique, plus on progresse.", 1], ["Moins tu dors, moins tu te concentres.", 1], ["Elle voyage autant que moi.", 2], ["Il y a autant de filles que de garçons.", 2]], pista: "¿Cambia, depende o es igual?", why: "Tipos." },
    { fase: "guiada", c: ["b2cn-evol"], k: "choice", ask: "«En las grandes ciudades hay cada vez más carros.»", q: "«Dans les grandes villes, il y a ___ voitures.»", o: ["de plus en plus de", "de plus en plus des"], a: 0, pista: "+ de.", why: "<b>de plus en plus de</b>." },
    { fase: "guiada", c: ["b2cn-evol"], k: "choice", ask: "«Mientras más leo, más rápido entiendo.»", q: "«___ je lis en français, ___ je comprends vite.»", o: ["Plus… plus", "Le plus… le plus"], a: 0, pista: "Sin artículo.", why: "<b>Plus… plus</b>." },
    { fase: "indep", c: ["b2cn-egal"], k: "choice", ask: "«Este año hay tantos estudiantes como el pasado.»", q: "«Cette année, il y a ___ étudiants que l'an dernier.»", o: ["autant d'", "aussi d'"], a: 0, why: "<b>autant d'</b>." },
    { fase: "indep", c: ["b2cn-egal"], k: "fill", ask: "Igualdad con un verbo.", q: "Paul travaille ___ que son frère.", acc: ["autant"], why: "<b>autant</b>." },
    { fase: "indep", c: ["b2cn-egal"], k: "fill", ask: "«el doble»", q: "Ce restaurant est ___ plus cher que l'autre.", acc: ["deux fois"], why: "<b>deux fois plus</b>." },
    { fase: "aplica", c: ["b2cn-evol"], k: "fill", ask: "«Mientras menos…, menos…»", q: "Moins on dort, ___ on est concentré.", acc: ["moins"], why: "<b>moins</b>." },
    { fase: "aplica", c: ["b2cn-egal"], k: "spot", ask: "Encuentra el error.", s: "Ce film est [très plus] intéressant que le livre .", fix: "beaucoup plus", why: "<b>beaucoup plus</b>." },
    { fase: "aplica", c: ["b2cn-evol"], k: "spot", ask: "Encuentra el error.", s: "Les loyers à Bogotá sont [chaque fois plus] chers .", fix: "de plus en plus", why: "<b>de plus en plus</b>." },
    { fase: "dominio", c: ["b2cn-egal"], k: "spot", ask: "Encuentra el error.", s: "Cette année , nous avons autant [des] devoirs que l'année dernière .", fix: "de", why: "<b>autant de</b>." },
    { fase: "dominio", c: ["b2cn-evol", "b2cn-egal"], k: "match", ask: "Une cada expresión con su traducción.", q: "Español → francés", pairs: [["cada vez más", "de plus en plus"], ["cada vez mejor", "de mieux en mieux"], ["mucho más", "beaucoup plus"], ["tanto como", "autant que"], ["el doble de", "deux fois plus de"]], why: "Expresiones." },
    { fase: "dominio", c: ["b2cn-evol", "b2cn-egal"], k: "listen", say: "Plus on pratique, plus on progresse vite.", acc: ["Plus on pratique, plus on progresse vite."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Plus on pratique, plus on progresse vite.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paul", "Bogotá"], previo: [] }
};

/* ================================ B1.2·6 · El condicional y el subjuntivo avanzados ================================ */
E["b12-conditionnel-passe"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Le conditionnel passé : ce qui aurait pu arriver",
  objetivo: {
    que: "Vas a expresar lo que habría pasado: si + plus-que-parfait → conditionnel passé.",
    corto: "Si j'avais su, je serais venu.",
    podras: ["Formar el conditionnel passé: aurais / serais + participio.", "Construir la hipótesis irreal del pasado: si + plus-que-parfait → conditionnel passé.", "Usarlo sin si: avec plus de temps, j'aurais fini; sans toi, je me serais perdu."],
    iconos: ["ic2/reloj-arena", "ic2/bombilla", "ic2/pergamino"],
    previos: ["El arrepentimiento (B1.1, lección 23), el plus-que-parfait (B1.1, lección 2) y la hipótesis con si (lección 1)."],
    capacidad: "Ahora imaginas cómo habría sido el pasado."
  },
  requiere: R("b1rg-forme", "b1pq-forme", "b2si-irreel"), recupera: ["b1rg-forme"],
  conceptos: {
    "b2cp-forme": { n: "aurais / serais + participio (j'aurais fait, elle serait partie, nous serions allés)", b: "gr" },
    "b2cp-si": { n: "si + plus-que-parfait → conditionnel passé (si j'avais su, je serais venu); sin si: sans toi, j'aurais…", b: "gr" }
  },
  video: {
    titulo: "El condicional pasado: lo que habría podido pasar",
    voz: "es-CO-SalomeNeural",
    escenas: [
      {
        v: "persona",
        cap: "Para qué sirve",
        fondo: "esc/cafe-lyon",
        img: "pj/camila-sorprendida",
        fr: "Si j'avais su que tu étais malade, je serais passée te voir !",
        es: "¡Si hubiera sabido que estabas enfermo, habría pasado a verte!",
        nota: "Si hubiera sabido",
        seg: [
          {
            es: "Camila no sabía que Hugo estaba enfermo: si j'avais su, je serais passée te voir. Una hipótesis sobre el pasado, que ya no se puede cambiar."
          },
          {
            fr: "Si j'avais su que tu étais malade, je serais passée te voir !",
            p: 1
          },
          {
            es: "Hoy aprendes el conditionnel passé y la hipótesis irreal del pasado.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Cómo se forma",
        titulo: "Auxiliar en condicional + participio",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "j'aurais fini · tu aurais compris",
            es: "avoir en condicional + participio"
          },
          {
            p: 2,
            fr: "elle serait partie · nous serions allés",
            es: "être en condicional + participio"
          },
          {
            p: 3,
            regla: "mismas reglas de auxiliar y concordancia que el passé composé"
          }
        ],
        seg: [
          {
            es: "Se forma con el auxiliar en condicional y el participio: j'aurais fini.",
            p: 1
          },
          {
            fr: "j'aurais fini, tu aurais compris",
            p: 1
          },
          {
            es: "Con être: elle serait partie, nous serions allés.",
            p: 2
          },
          {
            fr: "elle serait partie, nous serions allés",
            p: 2
          },
          {
            es: "Mismas reglas que el passé composé.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "La hipótesis irreal del pasado",
        titulo: "si + plus-que-parfait → conditionnel passé",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Si j'avais su, je serais venu.",
            es: "Si hubiera sabido, habría venido."
          },
          {
            p: 2,
            fr: "S'il avait fait beau, nous serions allés à la plage.",
            es: "Si hubiera hecho buen tiempo, habríamos ido a la playa."
          },
          {
            p: 3,
            fr: "Si j'avais étudié, j'aurais réussi.",
            es: "tras si: nunca condicional"
          }
        ],
        seg: [
          {
            es: "Para una hipótesis sobre el pasado: si más plus-que-parfait, y luego conditionnel passé.",
            p: 1
          },
          {
            fr: "Si j'avais su, je serais venu.",
            p: 1
          },
          {
            fr: "S'il avait fait beau, nous serions allés à la plage.",
            p: 2
          },
          {
            es: "Y tras si, nunca condicional.",
            p: 3
          },
          {
            fr: "Si j'avais étudié, j'aurais réussi.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Sin si",
        titulo: "Sans toi, avec un peu plus de temps",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Sans ton aide, je n'aurais jamais réussi l'examen.",
            es: "Sin tu ayuda, nunca habría aprobado."
          },
          {
            p: 2,
            fr: "Avec un peu plus de temps, j'aurais fini le livre.",
            es: "Con un poco más de tiempo, habría terminado el libro."
          },
          {
            p: 3,
            fr: "Nous aurions préféré partir plus tôt. · J'aurais aimé te voir.",
            es: "preferencia y deseo en el pasado"
          }
        ],
        seg: [
          {
            es: "También sin si: sans ton aide, je n'aurais jamais réussi.",
            p: 1
          },
          {
            fr: "Sans ton aide, je n'aurais jamais réussi l'examen.",
            p: 1
          },
          {
            fr: "Avec un peu plus de temps, j'aurais fini le livre.",
            p: 2
          },
          {
            fr: "Nous aurions préféré partir plus tôt. J'aurais aimé te voir.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En la vida real",
        titulo: "Si hubiera sabido",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Si j'avais su que tu étais malade, je serais passée te voir !",
            es: "¡Si hubiera sabido que estabas enfermo, habría pasado a verte!"
          },
          {
            p: 2,
            fr: "Merci. Sans ton aide, je n'aurais jamais réussi l'examen.",
            es: "Gracias. Sin tu ayuda, nunca habría aprobado el examen."
          },
          {
            p: 3,
            fr: "S'il avait fait beau, nous serions allés à la plage. Avec un peu plus de temps, j'aurais fini le livre.",
            es: "Si hubiera hecho buen tiempo, habríamos ido a la playa. Con un poco más de tiempo, habría terminado el libro."
          },
          {
            p: 4,
            fr: "Ma sœur serait partie plus tôt si elle avait pu. Nous aurions préféré partir plus tôt, nous aussi. J'aurais aimé te voir.",
            es: "Mi hermana se habría ido antes si hubiera podido. Nosotros también habríamos preferido salir antes. Me habría gustado verte."
          }
        ],
        seg: [
          {
            es: "Escucha cómo suena en una conversación de verdad."
          },
          {
            fr: "Si j'avais su que tu étais malade, je serais passée te voir !",
            p: 1
          },
          {
            fr: "Merci. Sans ton aide, je n'aurais jamais réussi l'examen.",
            p: 2
          },
          {
            fr: "S'il avait fait beau, nous serions allés à la plage. Avec un peu plus de temps, j'aurais fini le livre.",
            p: 3
          },
          {
            fr: "Ma sœur serait partie plus tôt si elle avait pu. Nous aurions préféré partir plus tôt, nous aussi. J'aurais aimé te voir.",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Contraste con el español",
        titulo: "Si hubiera sabido = si j'avais su",
        mz: "m2d/alerta",
        items: [
          {
            p: 1,
            regla: "«si hubiera sabido» = si j'avais su (plus-que-parfait, no «si j'aurais su»)"
          },
          {
            p: 2,
            regla: "«habría venido» = je serais venu (venir con être)"
          },
          {
            p: 3,
            regla: "partir, aller, tomber… con être: elle serait partie"
          }
        ],
        seg: [
          {
            es: "Si hubiera sabido es si j'avais su, nunca si j'aurais su.",
            p: 1
          },
          {
            es: "Y los verbos de movimiento, con être.",
            p: 3
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Si j'aurais su, je serais venu.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Si j'avais su, je serais venu.",
          es: "Tras si: plus-que-parfait."
        },
        seg: [
          {
            es: "Primera trampa: el condicional tras si.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Si j'avais su, je serais venu.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Si nous aurions eu de l'argent, nous aurions voyagé.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Si nous avions eu de l'argent, nous aurions voyagé.",
          es: "Plus-que-parfait tras si."
        },
        seg: [
          {
            es: "Segunda trampa: otra vez tras si.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Si nous avions eu de l'argent, nous aurions voyagé.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Elle aurait partie plus tôt si elle avait pu.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Elle serait partie plus tôt si elle avait pu.",
          es: "Partir va con être."
        },
        seg: [
          {
            es: "Una trampa más.",
            p: 1
          },
          {
            es: "Usamos avoir con partir.",
            p: 1
          },
          {
            es: "Lo correcto es:",
            p: 2
          },
          {
            fr: "Elle serait partie plus tôt si elle avait pu.",
            p: 2
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/pensativo",
        q: "«Si hubiera sabido, habría venido.»",
        o: [
          "Si j'avais su, je serais venu.",
          "Si j'aurais su, je serais venu."
        ],
        a: 0,
        bien: "¡Eso es! Si j'avais su.",
        mal: "Plus-que-parfait tras si.",
        seg: [
          {
            es: "Te toca. ¿Cuál es correcta?"
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/confundido",
        q: "«Elle ___ partie plus tôt si elle avait pu.»",
        o: [
          "serait",
          "aurait"
        ],
        a: 0,
        bien: "¡Muy bien! Serait.",
        mal: "Partir va con être.",
        seg: [
          {
            es: "Una más. ¿Serait o aurait?"
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Repite conmigo",
        titulo: "Repite conmigo",
        mz: "m2d/explica",
        items: [
          {
            p: 1,
            fr: "Si j'avais su, je serais venu.",
            es: "Si hubiera sabido, habría venido."
          },
          {
            p: 2,
            fr: "S'il avait fait beau, nous serions allés à la plage.",
            es: "Si hubiera hecho buen tiempo, habríamos ido a la playa."
          },
          {
            p: 3,
            fr: "Sans toi, je me serais perdu.",
            es: "Sin ti, me habría perdido."
          }
        ],
        seg: [
          {
            es: "Ahora tú. Escucha cada frase y repítela en voz alta."
          },
          {
            fr: "Si j'avais su, je serais venu.",
            p: 1
          },
          {
            es: "Otra vez.",
            p: 1
          },
          {
            fr: "Si j'avais su, je serais venu.",
            p: 1
          },
          {
            fr: "S'il avait fait beau, nous serions allés à la plage.",
            p: 2
          },
          {
            es: "Otra vez.",
            p: 2
          },
          {
            fr: "S'il avait fait beau, nous serions allés à la plage.",
            p: 2
          },
          {
            fr: "Sans toi, je me serais perdu.",
            p: 3
          },
          {
            es: "Otra vez.",
            p: 3
          },
          {
            fr: "Sans toi, je me serais perdu.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Repaso",
        titulo: "Resumen",
        mz: "m2d/celebrar",
        items: [
          {
            p: 1,
            tabla: [
              [
                "Parte",
                "Forma"
              ],
              [
                "condición (si)",
                "plus-que-parfait: si j'avais su"
              ],
              [
                "resultado",
                "conditionnel passé: je serais venu"
              ],
              [
                "sin si",
                "Sans toi, je me serais perdu."
              ],
              [
                "auxiliar",
                "avoir o être, como en el passé composé"
              ]
            ]
          },
          {
            p: 2,
            regla: "Si + plus-que-parfait → conditionnel passé"
          }
        ],
        seg: [
          {
            es: "Repasemos.",
            p: 1
          },
          {
            es: "Lo que habría podido pasar.",
            p: 1
          },
          {
            es: "Y nunca condicional tras si. ¡Ahora, a practicar!",
            p: 2
          }
        ]
      }
    ]
  },
  contexto: {
    titulo: "Si hubiera sabido", img: "bg-cafe", yo: "camila",
    escena: "Hugo estuvo enfermo; Camila no lo sabía.",
    pj: PJ,
    lineas: [
      ["camila", "Si j'avais su que tu étais malade, je serais passée te voir !", "¡Si hubiera sabido que estabas enfermo, habría pasado a verte!"],
      ["hugo", "Merci. Sans ton aide, je n'aurais jamais réussi l'examen.", "Gracias. Sin tu ayuda, nunca habría aprobado el examen."],
      ["camila", "S'il avait fait beau, nous serions allés à la plage. Avec un peu plus de temps, j'aurais fini le livre.", "Si hubiera hecho buen tiempo, habríamos ido a la playa. Con un poco más de tiempo, habría terminado el libro."],
      ["hugo", "Ma sœur serait partie plus tôt si elle avait pu. Nous aurions préféré partir plus tôt, nous aussi. J'aurais aimé te voir.", "Mi hermana se habría ido antes si hubiera podido. Nosotros también habríamos preferido salir antes. Me habría gustado verte."]
    ],
    fijate: "Fíjate: si j'avais su → je serais passée; s'il avait fait beau → nous serions allés; sans ton aide, je n'aurais jamais réussi; elle serait partie si elle avait pu."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Hipótesis irreal del pasado",
      idea: "Formación: auxiliar en condicional + participio: j'aurais fait, tu aurais compris, elle serait partie, nous serions allé(e)s. Mismas reglas de auxiliar y concordancia que el passé composé. Hipótesis irreal del pasado: si + plus-que-parfait → conditionnel passé: Si j'avais su, je serais venu. S'il avait plu, on serait restés. También sin si: Avec plus de temps, j'aurais fini. Sans toi, je me serais perdu. Tras si nunca va el condicional.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Uso"], [
        ["Si j'avais su, je serais venu.", "Si hubiera sabido, habría venido.", "si + pqp → cond. passé"],
        ["Si nous avions eu de l'argent… · avions", "Si hubiéramos tenido dinero…", "plus-que-parfait"],
        ["nous serions allés · serions allés · serions allées", "habríamos ido", "être"],
        ["elle serait partie · serait", "se habría ido", "être"],
        ["j'aurais fini · aurais", "habría terminado", "avoir"],
        ["Sans toi, je me serais perdu.", "Sin ti, me habría perdido.", "sin si"],
        ["… mangé · … compris · … pris · … vu (aurait)", "habría comido / entendido / tomado / visto", "con avoir"],
        ["… tombé · … resté · … né · … arrivé (serait)", "habría caído / quedado / nacido / llegado", "con être"],
        ["Si j'avais étudié, j'aurais réussi.", "Si hubiera estudiado, habría aprobado.", "ejemplo"]
      ]],
      ej: [["Si tu m'avais appelé, je serais venu te chercher.", "Si me hubieras llamado, habría ido a buscarte."], ["Sans ton aide, je n'aurais jamais réussi.", "Sin tu ayuda, nunca lo habría logrado."], ["Nous aurions préféré partir plus tôt.", "Habríamos preferido salir antes."], ["J'aurais aimé te voir.", "Me habría gustado verte."]] },
    {
      id: "ojo",
      tipo: "ojo",
      titulo: "Errores frecuentes",
      intro: "Tres errores que cometemos casi todos los hispanohablantes. Cázalos uno por uno.",
      errores: [
        {
          sit: "Camila escribe:",
          frase: "Si j'aurais su, je serais venu.",
          mal: "j'aurais su",
          bien: "j'avais su",
          porque: "Usamos el condicional tras si.",
          truco: "Tras si: plus-que-parfait, nunca condicional."
        },
        {
          sit: "Hugo escribe:",
          frase: "Si nous aurions eu de l'argent, nous aurions voyagé.",
          mal: "aurions eu",
          bien: "avions eu",
          porque: "Usamos el condicional tras si.",
          truco: "Plus-que-parfait tras si."
        },
        {
          sit: "Hugo escribe:",
          frase: "Elle aurait partie plus tôt si elle avait pu.",
          mal: "aurait partie",
          bien: "serait partie",
          porque: "Usamos avoir con partir.",
          truco: "Partir va con être."
        }
      ]
    }
  ],
  ejemplos: [
    {
      sit: "«Si hubiera sabido, habría venido.»",
      resp: "Si j'avais su, je serais venu.",
      porque: "irreal del pasado.",
      pasos: [
        {
          q: "¿Tras si?",
          ops: [
            "plus-que-parfait: avais su",
            "condicional"
          ],
          ok: 0
        },
        {
          q: "¿Resultado?",
          ops: [
            "conditionnel passé: serais venu",
            "imparfait"
          ],
          ok: 0
        },
        {
          q: "¿Venir lleva…?",
          ops: [
            "être",
            "avoir"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«Si hubiera hecho buen tiempo, habríamos ido a la playa.»",
      resp: "S'il avait fait beau, nous serions allés à la plage.",
      porque: "irreal del pasado.",
      pasos: [
        {
          q: "¿Si + il?",
          ops: [
            "s'il",
            "si il"
          ],
          ok: 0
        },
        {
          q: "¿Faire en plus-que-parfait?",
          ops: [
            "avait fait",
            "aurait fait"
          ],
          ok: 0
        },
        {
          q: "¿Aller lleva…?",
          ops: [
            "être: serions allés",
            "avoir"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«Sin ti, me habría perdido.»",
      resp: "Sans toi, je me serais perdu.",
      porque: "sin si.",
      pasos: [
        {
          q: "¿Hay si?",
          ops: [
            "no",
            "sí"
          ],
          ok: 0
        },
        {
          q: "¿Pronominal?",
          ops: [
            "sí: se perdre",
            "no"
          ],
          ok: 0
        },
        {
          q: "¿Auxiliar?",
          ops: [
            "être: me serais",
            "avoir"
          ],
          ok: 0
        }
      ]
    }
  ],
  comprueba: [
    { q: "Tras si, en la hipótesis irreal del pasado, va…", o: ["plus-que-parfait", "conditionnel passé"], a: 0, b: "gr", porque: "si j'avais su." },
    { q: "El conditionnel passé se forma con…", o: ["aurais / serais + participio", "avais / étais + participio"], a: 0, b: "gr", porque: "Condicional." },
    { q: "«Habría caído» se dice…", o: ["il serait tombé", "il aurait tombé"], a: 0, b: "gr", porque: "tomber → être." }
  ],
  practica: [
    { fase: "guiada", c: ["b2cp-forme"], k: "sort", ask: "¿Aurait o serait?", q: "Clasifica.", cats: ["aurait", "serait"], items: [["… mangé", 0], ["… compris", 0], ["… pris", 0], ["… vu", 0], ["… tombé", 1], ["… resté", 1], ["… né", 1], ["… arrivé", 1]], pista: "Movimiento y cambio de estado: être.", why: "Auxiliares." },
    { fase: "guiada", c: ["b2cp-si"], k: "choice", ask: "«Si hubiera sabido, habría venido.»", q: "«___»", o: ["Si j'avais su, je serais venu.", "Si j'aurais su, je serais venu."], a: 0, pista: "Tras si: pqp.", why: "<b>Si j'avais su</b>." },
    { fase: "guiada", c: ["b2cp-forme"], k: "choice", ask: "«Se habría ido antes si hubiera podido.»", q: "«Elle ___ partie plus tôt si elle avait pu.»", o: ["serait", "aurait"], a: 0, pista: "partir → être.", why: "<b>serait</b>." },
    { fase: "indep", c: ["b2cp-si"], k: "choice", ask: "«Sin ti, me habría perdido.»", q: "«___»", o: ["Sans toi, je me serais perdu.", "Sans toi, je m'aurais perdu."], a: 0, why: "Pronominal: <b>me serais</b>." },
    { fase: "indep", c: ["b2cp-forme"], k: "fill", ask: "Conditionnel passé de aller (nous).", q: "S'il avait fait beau, nous ___ à la plage.", acc: ["serions allés", "serions allées"], why: "<b>serions allés</b>." },
    { fase: "indep", c: ["b2cp-forme"], k: "fill", ask: "Auxiliar en condicional (je).", q: "Avec un peu plus de temps, j'___ fini le livre.", acc: ["aurais"], why: "<b>aurais</b>." },
    { fase: "aplica", c: ["b2cp-si"], k: "match", ask: "Une cada hipótesis con su consecuencia.", q: "Si… → consecuencia", pairs: [["Si j'avais étudié,", "j'aurais réussi."], ["Si tu étais venu,", "tu te serais amusé."], ["S'il avait neigé,", "on aurait skié."], ["Si nous étions partis tôt,", "nous serions arrivés à l'heure."]], why: "Hipótesis irreales." },
    { fase: "aplica", c: ["b2cp-si"], k: "spot", ask: "Encuentra el error.", s: "Si nous [aurions] eu de l'argent , nous aurions voyagé .", fix: "avions", why: "<b>avions</b>." },
    { fase: "dominio", c: ["b2cp-forme"], k: "order", ask: "Ordena: «Me habría gustado verte».", tokens: ["J'aurais", "aimé", "te voir."], why: "<b>J'aurais aimé te voir.</b>" },
    { fase: "dominio", c: ["b2cp-si"], k: "choice", ask: "«Sin tu ayuda, nunca lo habría logrado.»", q: "«Sans ton aide, je n'___ jamais réussi.»", o: ["aurais", "avais"], a: 0, why: "<b>aurais</b>." },
    { fase: "dominio", c: ["b2cp-forme", "b2cp-si"], k: "listen", say: "Si j'avais su que tu étais malade, je serais passé te voir.", acc: ["Si j'avais su que tu étais malade, je serais passé te voir.", "Si j'avais su que tu étais malade, je serais passée te voir."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Si j'avais su que tu étais malade, je serais passé te voir.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

E["b12-conditionnel-information"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Le conditionnel journalistique : une information non confirmée",
  objetivo: {
    que: "Vas a reconocer y usar el condicional de la prensa para una información no confirmada.",
    corto: "Le ministre serait malade. · L'incendie aurait fait trois victimes.",
    podras: ["Usar el conditionnel présent para un hecho presente no confirmado: le suspect serait en fuite.", "Usar el conditionnel passé para un hecho pasado no confirmado: le voleur aurait pris la fuite.", "Reconocer los equivalentes: selon certaines sources, d'après…, il semblerait que…"],
    iconos: ["ic2/libro", "ic2/pregunta", "ic2/movil"],
    previos: ["El condicional (B1.1, lección 7), los sucesos (B1.1, lección 65) y el conditionnel passé (lección 16)."],
    capacidad: "Ahora lees la prensa francesa sin confundir rumor y hecho."
  },
  requiere: R("b1co-usage", "b1fd-voc", "b2cp-forme"), recupera: ["b1co-usage"],
  conceptos: {
    "b2cj-present": { n: "presente no confirmado: conditionnel présent (le président serait malade, il y aurait mille manifestants)", b: "gr" },
    "b2cj-passe": { n: "pasado no confirmado: conditionnel passé (aurait annulé); selon, d'après; confirmado → indicativo", b: "gr" }
  },
  video: {
    titulo: "El condicional periodístico: una información no confirmada",
    voz: "es-CO-SalomeNeural",
    escenas: [
      {
        v: "persona",
        cap: "Para qué sirve",
        fondo: "esc/escritorio-noche",
        img: "pj/hugo-neutro",
        fr: "Écoute : « Selon la police, l'accident serait dû à la neige. »",
        es: "Escucha: «Según la policía, el accidente se debería a la nieve».",
        nota: "Las noticias",
        seg: [
          {
            es: "Hugo lee las noticias: l'accident serait dû à la neige, le chanteur aurait annulé sa tournée. El condicional dice que la información no está confirmada."
          },
          {
            fr: "Écoute : « Selon la police, l'accident serait dû à la neige. »",
            p: 1
          },
          {
            es: "Hoy aprendes a reconocer y usar el condicional de la prensa.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En presente",
        titulo: "conditionnel présent",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Le président serait malade.",
            es: "estaría enfermo (no confirmado)"
          },
          {
            p: 2,
            fr: "Il y aurait trois blessés.",
            es: "habría tres heridos"
          },
          {
            p: 3,
            fr: "Et il y aurait plus de mille manifestants dans le centre.",
            es: "Y habría más de mil manifestantes en el centro."
          }
        ],
        seg: [
          {
            es: "Para un hecho presente no confirmado: conditionnel présent. Le président serait malade.",
            p: 1
          },
          {
            fr: "Le président serait malade.",
            p: 1
          },
          {
            fr: "Il y aurait trois blessés.",
            p: 2
          },
          {
            fr: "Et il y aurait plus de mille manifestants dans le centre.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En pasado",
        titulo: "conditionnel passé",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Le voleur aurait pris la fuite.",
            es: "habría huido"
          },
          {
            p: 2,
            fr: "L'avion aurait eu un problème. · Le chanteur aurait annulé sa tournée.",
            es: "habría tenido · habría cancelado"
          },
          {
            p: 3,
            fr: "Il est parti. → Il serait parti. · Elle a gagné. → Elle aurait gagné.",
            es: "confirmado → no confirmado"
          }
        ],
        seg: [
          {
            es: "Para un hecho pasado: conditionnel passé. Le voleur aurait pris la fuite.",
            p: 1
          },
          {
            fr: "Le voleur aurait pris la fuite.",
            p: 1
          },
          {
            fr: "L'avion aurait eu un problème. Le chanteur aurait annulé sa tournée.",
            p: 2
          },
          {
            fr: "Il est parti, il serait parti. Elle a gagné, elle aurait gagné.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Las fuentes",
        titulo: "selon, d'après",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "selon · d'après · selon certaines sources",
            es: "según · según algunas fuentes"
          },
          {
            p: 2,
            fr: "D'après la presse, l'actrice serait enceinte !",
            es: "Según la prensa, la actriz estaría embarazada."
          },
          {
            p: 3,
            regla: "cuando se confirma, se pasa al indicativo: le suspect est en fuite"
          }
        ],
        seg: [
          {
            es: "Suele ir con selon o d'après.",
            p: 1
          },
          {
            fr: "selon, d'après, selon certaines sources",
            p: 1
          },
          {
            fr: "D'après la presse, l'actrice serait enceinte !",
            p: 2
          },
          {
            es: "Y cuando se confirma, se pasa al indicativo.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En la vida real",
        titulo: "Las noticias",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Écoute : « Selon la police, l'accident serait dû à la neige. »",
            es: "Escucha: «Según la policía, el accidente se debería a la nieve»."
          },
          {
            p: 2,
            fr: "Et le chanteur ? Il aurait annulé sa tournée ?",
            es: "¿Y el cantante? ¿Habría cancelado su gira?"
          },
          {
            p: 3,
            fr: "Oui. Et il y aurait plus de mille manifestants dans le centre. L'incendie aurait fait deux victimes.",
            es: "Sí. Y habría más de mil manifestantes en el centro. El incendio habría dejado dos víctimas."
          },
          {
            p: 4,
            fr: "Selon nos informations, le maire aurait l'intention de se représenter. D'après la presse, l'actrice serait enceinte !",
            es: "Según nuestra información, el alcalde tendría la intención de volver a presentarse. ¡Según la prensa, la actriz estaría embarazada!"
          }
        ],
        seg: [
          {
            es: "Escucha cómo suena en una conversación de verdad."
          },
          {
            fr: "Écoute : « Selon la police, l'accident serait dû à la neige. »",
            p: 1
          },
          {
            fr: "Et le chanteur ? Il aurait annulé sa tournée ?",
            p: 2
          },
          {
            fr: "Oui. Et il y aurait plus de mille manifestants dans le centre. L'incendie aurait fait deux victimes.",
            p: 3
          },
          {
            fr: "Selon nos informations, le maire aurait l'intention de se représenter. D'après la presse, l'actrice serait enceinte !",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Contraste con el español",
        titulo: "Habría tres heridos",
        mz: "m2d/alerta",
        items: [
          {
            p: 1,
            regla: "también en español: «habría tres heridos», «el ladrón habría huido»"
          },
          {
            p: 2,
            regla: "rumor: condicional (démissionnerait), no futuro (démissionnera)"
          },
          {
            p: 3,
            regla: "no confirmado: serait (no «sera»)"
          }
        ],
        seg: [
          {
            es: "En la prensa española también: habría tres heridos.",
            p: 1
          },
          {
            es: "No lo confundas con el futuro.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Selon des sources, le ministre démissionnera. (rumor)",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Selon des sources, le ministre démissionnerait.",
          es: "Rumor → condicional."
        },
        seg: [
          {
            es: "Primera trampa: el futuro.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Selon des sources, le ministre démissionnerait.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "D'après certaines sources, le suspect sera déjà à l'étranger.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "D'après certaines sources, le suspect serait déjà à l'étranger.",
          es: "No confirmado: serait."
        },
        seg: [
          {
            es: "Segunda trampa: sera.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "D'après certaines sources, le suspect serait déjà à l'étranger.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Selon la police, le voleur a pris la fuite. (no confirmado)",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Selon la police, le voleur aurait pris la fuite. (no confirmado)",
          es: "Pasado no confirmado: aurait pris."
        },
        seg: [
          {
            es: "Una trampa más.",
            p: 1
          },
          {
            es: "Usamos el indicativo para algo no confirmado.",
            p: 1
          },
          {
            es: "Lo correcto es:",
            p: 2
          },
          {
            fr: "Selon la police, le voleur aurait pris la fuite. (no confirmado)",
            p: 2
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/pensativo",
        q: "«Según la policía, el accidente se debería a la nieve.»",
        o: [
          "Selon la police, l'accident serait dû à la neige.",
          "Selon la police, l'accident sera dû à la neige."
        ],
        a: 0,
        bien: "¡Eso es! Serait.",
        mal: "No confirmado.",
        seg: [
          {
            es: "Te toca. ¿Cuál es correcta?"
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/confundido",
        q: "«Le président serait malade» indica…",
        o: [
          "una información no confirmada",
          "un deseo"
        ],
        a: 0,
        bien: "¡Muy bien! No confirmada.",
        mal: "Condicional de la prensa.",
        seg: [
          {
            es: "Una más. ¿Qué indica?"
          }
        ],
        es: true
      },
      {
        v: "pizarra",
        cap: "Repite conmigo",
        titulo: "Repite conmigo",
        mz: "m2d/explica",
        items: [
          {
            p: 1,
            fr: "Le président serait malade.",
            es: "El presidente estaría enfermo."
          },
          {
            p: 2,
            fr: "Il y aurait trois blessés.",
            es: "Habría tres heridos (según fuentes)."
          },
          {
            p: 3,
            fr: "Le voleur aurait pris la fuite.",
            es: "El ladrón habría huido."
          }
        ],
        seg: [
          {
            es: "Ahora tú. Escucha cada frase y repítela en voz alta."
          },
          {
            fr: "Le président serait malade.",
            p: 1
          },
          {
            es: "Otra vez.",
            p: 1
          },
          {
            fr: "Le président serait malade.",
            p: 1
          },
          {
            fr: "Il y aurait trois blessés.",
            p: 2
          },
          {
            es: "Otra vez.",
            p: 2
          },
          {
            fr: "Il y aurait trois blessés.",
            p: 2
          },
          {
            fr: "Le voleur aurait pris la fuite.",
            p: 3
          },
          {
            es: "Otra vez.",
            p: 3
          },
          {
            fr: "Le voleur aurait pris la fuite.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Repaso",
        titulo: "Resumen",
        mz: "m2d/celebrar",
        items: [
          {
            p: 1,
            tabla: [
              [
                "Hecho",
                "Forma"
              ],
              [
                "presente no confirmado",
                "conditionnel présent: il serait malade"
              ],
              [
                "pasado no confirmado",
                "conditionnel passé: il aurait pris la fuite"
              ],
              [
                "fuente",
                "selon · d'après"
              ],
              [
                "confirmado",
                "indicativo: il est en fuite"
              ]
            ]
          },
          {
            p: 2,
            regla: "El condicional pone distancia"
          }
        ],
        seg: [
          {
            es: "Repasemos.",
            p: 1
          },
          {
            es: "La prensa no confirma.",
            p: 1
          },
          {
            es: "Y cuando se confirma, indicativo. ¡Ahora, a practicar!",
            p: 2
          }
        ]
      }
    ]
  },
  contexto: {
    titulo: "Las noticias", img: "bg-cafe", yo: "camila",
    escena: "Hugo lee titulares a Camila.",
    pj: PJ,
    lineas: [
      ["hugo", "Écoute : « Selon la police, l'accident serait dû à la neige. »", "Escucha: «Según la policía, el accidente se debería a la nieve»."],
      ["camila", "Et le chanteur ? Il aurait annulé sa tournée ?", "¿Y el cantante? ¿Habría cancelado su gira?"],
      ["hugo", "Oui. Et il y aurait plus de mille manifestants dans le centre. L'incendie aurait fait deux victimes.", "Sí. Y habría más de mil manifestantes en el centro. El incendio habría dejado dos víctimas."],
      ["camila", "Selon nos informations, le maire aurait l'intention de se représenter. D'après la presse, l'actrice serait enceinte !", "Según nuestra información, el alcalde tendría la intención de volver a presentarse. ¡Según la prensa, la actriz estaría embarazada!"]
    ],
    fijate: "Fíjate: serait dû, aurait annulé, il y aurait, aurait fait, aurait l'intention, serait enceinte; selon, d'après."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Rumor o hecho",
      idea: "La prensa usa el condicional para una información no confirmada. Presente: conditionnel présent: Le suspect serait en fuite. Il y aurait trois blessés. Pasado: conditionnel passé: Le voleur aurait pris la fuite. L'avion aurait eu un problème technique. Suelen acompañarlo selon, d'après, selon certaines sources, il semblerait que. Cuando se confirma, se pasa al indicativo: Le suspect est en fuite.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Tipo"], [
        ["Le président serait malade. · serait", "El presidente estaría enfermo.", "presente no confirmado"],
        ["Il y aurait trois blessés.", "Habría tres heridos.", "presente no confirmado"],
        ["Le voleur aurait pris la fuite.", "El ladrón habría huido.", "pasado no confirmado"],
        ["L'avion aurait eu un problème. · aurait", "El avión habría tenido un problema.", "pasado no confirmado"],
        ["Il est parti. → Il serait parti.", "Se fue. → Se habría ido.", "transformación"],
        ["Elle a gagné. → Elle aurait gagné.", "Ganó. → Habría ganado.", "transformación"],
        ["Ils sont arrêtés. → Ils seraient arrêtés. · C'est vrai. → Ce serait vrai.", "Están detenidos. → Estarían detenidos.", "transformación"],
        ["Le musée a fermé. · Le match est annulé. · Il a démissionné. · Le prix a augmenté.", "hechos confirmados", "indicativo"],
        ["Le musée aurait fermé. · Le match serait annulé. · Il aurait démissionné. · Le prix aurait augmenté.", "no confirmados", "condicional"],
        ["selon · d'après · selon certaines sources", "según · según algunas fuentes", "fuente"]
      ]],
      ej: [["Selon la police, l'accident serait dû à la neige.", "Según la policía, el accidente se debería a la nieve."], ["Le chanteur aurait annulé sa tournée.", "El cantante habría cancelado su gira."], ["Il y aurait plus de mille manifestants.", "Habría más de mil manifestantes."]] },
    {
      id: "ojo",
      tipo: "ojo",
      titulo: "Errores frecuentes",
      intro: "Tres errores que cometemos casi todos los hispanohablantes. Cázalos uno por uno.",
      errores: [
        {
          sit: "Hugo lee un rumor:",
          frase: "Selon des sources, le ministre démissionnera.",
          mal: "démissionnera",
          bien: "démissionnerait",
          porque: "Usamos el futuro para un rumor.",
          truco: "Rumor → condicional."
        },
        {
          sit: "Camila lee:",
          frase: "D'après certaines sources, le suspect sera déjà à l'étranger.",
          mal: "sera",
          bien: "serait",
          porque: "Usamos el futuro.",
          truco: "No confirmado: serait."
        },
        {
          sit: "Hugo lee:",
          frase: "Selon la police, le voleur a pris la fuite. (no confirmado)",
          mal: "a pris",
          bien: "aurait pris",
          porque: "Usamos el indicativo para algo no confirmado.",
          truco: "Pasado no confirmado: aurait pris."
        }
      ]
    }
  ],
  ejemplos: [
    {
      sit: "«El presidente estaría enfermo.»",
      resp: "Le président serait malade.",
      porque: "presente.",
      pasos: [
        {
          q: "¿Confirmado?",
          ops: [
            "no",
            "sí"
          ],
          ok: 0
        },
        {
          q: "¿Tiempo?",
          ops: [
            "conditionnel présent",
            "futuro"
          ],
          ok: 0
        },
        {
          q: "¿Être?",
          ops: [
            "serait",
            "sera"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«Habría tres heridos (según fuentes).»",
      resp: "Il y aurait trois blessés.",
      porque: "presente.",
      pasos: [
        {
          q: "¿Il y a → ?",
          ops: [
            "il y aurait",
            "il y aura"
          ],
          ok: 0
        },
        {
          q: "¿Confirmado?",
          ops: [
            "no",
            "sí"
          ],
          ok: 0
        },
        {
          q: "¿Fuente?",
          ops: [
            "selon certaines sources",
            "je pense"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«El ladrón habría huido.»",
      resp: "Le voleur aurait pris la fuite.",
      porque: "pasado.",
      pasos: [
        {
          q: "¿Hecho pasado?",
          ops: [
            "sí",
            "no"
          ],
          ok: 0
        },
        {
          q: "¿Tiempo?",
          ops: [
            "conditionnel passé",
            "conditionnel présent"
          ],
          ok: 0
        },
        {
          q: "¿Huir?",
          ops: [
            "prendre la fuite",
            "partir vite"
          ],
          ok: 0
        }
      ]
    }
  ],
  comprueba: [
    { q: "«Le président serait malade» indica…", o: ["que la información no está confirmada", "un deseo"], a: 0, b: "gr", porque: "Prensa." },
    { q: "Un hecho pasado no confirmado va en…", o: ["conditionnel passé", "futur antérieur"], a: 0, b: "gr", porque: "aurait annulé." },
    { q: "Cuando la información se confirma, se usa…", o: ["el indicativo", "el condicional"], a: 0, b: "gr", porque: "Hecho." }
  ],
  practica: [
    { fase: "guiada", c: ["b2cj-present", "b2cj-passe"], k: "sort", ask: "¿Hecho confirmado o no confirmado?", q: "Clasifica.", cats: ["Hecho confirmado", "No confirmado"], items: [["Le musée a fermé.", 0], ["Le match est annulé.", 0], ["Il a démissionné.", 0], ["Le prix a augmenté.", 0], ["Le musée aurait fermé.", 1], ["Le match serait annulé.", 1], ["Il aurait démissionné.", 1], ["Le prix aurait augmenté.", 1]], pista: "Condicional: rumor.", why: "Rumor / hecho." },
    { fase: "guiada", c: ["b2cj-present"], k: "choice", es: true, ask: "«Le président serait malade.» indica…", q: "Elige.", o: ["que la información no está confirmada", "que el presidente quiere estar enfermo"], a: 0, pista: "Prensa.", why: "No confirmado." },
    { fase: "guiada", c: ["b2cj-passe"], k: "choice", ask: "«Parece que el ladrón huyó (sin confirmar).»", q: "«___»", o: ["Le voleur aurait pris la fuite.", "Le voleur a pris la fuite."], a: 0, pista: "Rumor.", why: "<b>aurait pris</b>." },
    { fase: "indep", c: ["b2cj-present"], k: "choice", ask: "«Habría tres heridos (según fuentes).»", q: "«___»", o: ["Il y aurait trois blessés.", "Il y a trois blessés."], a: 0, why: "<b>Il y aurait</b>." },
    { fase: "indep", c: ["b2cj-present"], k: "fill", ask: "Condicional de être.", q: "Selon la presse, l'actrice ___ enceinte.", acc: ["serait"], why: "<b>serait</b>." },
    { fase: "indep", c: ["b2cj-passe"], k: "fill", ask: "Auxiliar en condicional.", q: "L'avion ___ eu un problème technique.", acc: ["aurait"], why: "<b>aurait eu</b>." },
    { fase: "aplica", c: ["b2cj-present", "b2cj-passe"], k: "match", ask: "Une cada hecho con su versión no confirmada.", q: "Hecho → rumor", pairs: [["Il est parti.", "Il serait parti."], ["Elle a gagné.", "Elle aurait gagné."], ["Ils sont arrêtés.", "Ils seraient arrêtés."], ["C'est vrai.", "Ce serait vrai."]], why: "Transformación." },
    { fase: "aplica", c: ["b2cj-present"], k: "spot", ask: "Encuentra el error.", s: "D'après certaines sources , le suspect [sera] déjà à l'étranger .", fix: "serait", why: "<b>serait</b>." },
    { fase: "dominio", c: ["b2cj-passe"], k: "order", ask: "Ordena: «El incendio habría dejado dos víctimas».", tokens: ["L'incendie", "aurait fait", "deux victimes."], why: "<b>L'incendie aurait fait deux victimes.</b>" },
    { fase: "dominio", c: ["b2cj-present"], k: "choice", ask: "«Según la policía, el accidente se debería a la nieve.»", q: "«Selon la police, l'accident ___ dû à la neige.»", o: ["serait", "est"], a: 0, why: "<b>serait</b>." },
    { fase: "dominio", c: ["b2cj-present", "b2cj-passe"], k: "listen", say: "Selon nos informations, le maire aurait l'intention de se représenter.", acc: ["Selon nos informations, le maire aurait l'intention de se représenter."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Selon nos informations, le maire aurait l'intention de se représenter.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

E["b12-subjonctif-passe"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Le subjonctif passé : que j'aie fini",
  objetivo: {
    que: "Vas a usar el subjuntivo pasado para una acción ya terminada: je suis content que tu sois venu.",
    corto: "que j'aie fini · qu'elle soit partie.",
    podras: ["Formarlo: aie / sois en subjuntivo + participio.", "Usarlo para una acción anterior al sentimiento o la duda: je regrette que tu n'aies pas pu venir.", "Usarlo para una acción terminada antes de un momento futuro: il faut que tu aies fini avant 18 h."],
    iconos: ["ic2/pergamino", "ic2/corazon", "ic2/reloj-arena"],
    previos: ["Los subjuntivos irregulares (B1.1, lección 41) y los sentimientos (B1.1, lección 44)."],
    capacidad: "Ahora dices «me alegro de que hayas venido» en francés."
  },
  requiere: R("b1si-etre", "b1se-struct"), recupera: ["b1si-etre"],
  conceptos: {
    "b2sp-forme": { n: "subjuntivo de avoir / être + participio: que j'aie fini, qu'elle soit partie; concordancia con être", b: "gr" },
    "b2sp-usage": { n: "acción terminada respecto al verbo principal: content que tu sois venu, il faut que tu aies fini avant…", b: "gr" }
  },
  video: {
    titulo: "El subjuntivo pasado: que j'aie fini",
    voz: "es-CO-SalomeNeural",
    escenas: [
      {
        v: "persona",
        cap: "Para qué sirve",
        fondo: "esc/teatro",
        img: "pj/camila-neutra",
        fr: "Nous sommes très contents que vous soyez venus malgré la pluie !",
        es: "¡Estamos muy contentos de que hayan venido a pesar de la lluvia!",
        nota: "Después del espectáculo",
        seg: [
          {
            es: "Tras el espectáculo, Camila agradece: contents que vous soyez venus. Hugo: ravi que vous ayez aimé le spectacle. Un subjuntivo para algo que ya pasó."
          },
          {
            fr: "Nous sommes très contents que vous soyez venus malgré la pluie !",
            p: 1
          },
          {
            es: "Hoy aprendes a formar y usar el subjuntivo pasado.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Cómo se forma",
        titulo: "que j'aie / que je sois + participio",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "que j'aie · que tu aies · qu'il ait · que nous ayons · que vous ayez · qu'ils aient",
            es: "subjuntivo de avoir"
          },
          {
            p: 2,
            fr: "que tu sois venu · que vous soyez venus · qu'elle soit partie",
            es: "subjuntivo de être + participio"
          },
          {
            p: 3,
            regla: "mismo auxiliar y concordancia que en el passé composé"
          }
        ],
        seg: [
          {
            es: "Se forma con el subjuntivo de avoir o être y el participio.",
            p: 1
          },
          {
            fr: "que j'aie, que tu aies, qu'il ait, que nous ayons, que vous ayez, qu'ils aient",
            p: 1
          },
          {
            fr: "que tu sois venu, que vous soyez venus, qu'elle soit partie",
            p: 2
          },
          {
            es: "Mismo auxiliar y concordancia que en el passé composé.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Acción anterior",
        titulo: "Je suis content que tu sois venu",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Je suis ravi que vous ayez aimé le spectacle.",
            es: "acción anterior al sentimiento"
          },
          {
            p: 2,
            fr: "C'est dommage que Laura soit partie si tôt. · Je doute qu'elle ait reçu mon message.",
            es: "pena · duda"
          },
          {
            p: 3,
            fr: "Je regrette qu'ils ne soient pas restés plus longtemps.",
            es: "negación: ne soient pas restés"
          }
        ],
        seg: [
          {
            es: "Para una acción anterior al sentimiento: je suis ravi que vous ayez aimé.",
            p: 1
          },
          {
            fr: "Je suis ravi que vous ayez aimé le spectacle.",
            p: 1
          },
          {
            fr: "C'est dommage que Laura soit partie si tôt. Je doute qu'elle ait reçu mon message.",
            p: 2
          },
          {
            fr: "Je regrette qu'ils ne soient pas restés plus longtemps.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Antes de un momento futuro",
        titulo: "Il faut que vous ayez terminé",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Il faut que vous ayez terminé avant lundi.",
            es: "acción terminada antes de un momento"
          },
          {
            p: 2,
            fr: "qu'il vienne → qu'il soit venu · que tu fasses → que tu aies fait",
            es: "presente → pasado"
          },
          {
            p: 3,
            fr: "Je suis heureux que tu aies réussi !",
            es: "¡Me alegro de que hayas aprobado!"
          }
        ],
        seg: [
          {
            es: "Y para una acción terminada antes de un momento: il faut que vous ayez terminé avant lundi.",
            p: 1
          },
          {
            fr: "Il faut que vous ayez terminé avant lundi.",
            p: 1
          },
          {
            fr: "qu'il vienne, qu'il soit venu. Que tu fasses, que tu aies fait.",
            p: 2
          },
          {
            fr: "Je suis heureux que tu aies réussi !",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En la vida real",
        titulo: "Después del espectáculo",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Nous sommes très contents que vous soyez venus malgré la pluie !",
            es: "¡Estamos muy contentos de que hayan venido a pesar de la lluvia!"
          },
          {
            p: 2,
            fr: "Je suis ravi que vous ayez aimé le spectacle. C'est dommage que Laura soit partie si tôt.",
            es: "Me alegro de que les haya gustado el espectáculo. Es una pena que Laura se haya ido tan pronto."
          },
          {
            p: 3,
            fr: "Oui, et je doute qu'elle ait reçu mon message. Je regrette qu'ils ne soient pas restés plus longtemps.",
            es: "Sí, y dudo que haya recibido mi mensaje. Lamento que no se hayan quedado más tiempo."
          },
          {
            p: 4,
            fr: "Il faut que vous ayez terminé avant lundi, pour le prochain spectacle. Je suis heureux que tu aies réussi !",
            es: "Tienen que haber terminado antes del lunes, para el próximo espectáculo. ¡Me alegro de que te haya salido bien!"
          }
        ],
        seg: [
          {
            es: "Escucha cómo suena en una conversación de verdad."
          },
          {
            fr: "Nous sommes très contents que vous soyez venus malgré la pluie !",
            p: 1
          },
          {
            fr: "Je suis ravi que vous ayez aimé le spectacle. C'est dommage que Laura soit partie si tôt.",
            p: 2
          },
          {
            fr: "Oui, et je doute qu'elle ait reçu mon message. Je regrette qu'ils ne soient pas restés plus longtemps.",
            p: 3
          },
          {
            fr: "Il faut que vous ayez terminé avant lundi, pour le prochain spectacle. Je suis heureux que tu aies réussi !",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Contraste con el español",
        titulo: "Que hayas venido",
        mz: "m2d/alerta",
        items: [
          {
            p: 1,
            regla: "igual que en español: me alegro de que hayas venido → que tu sois venu"
          },
          {
            p: 2,
            regla: "nunca indicativo: que tu es venu ✗"
          },
          {
            p: 3,
            regla: "rester va con être: qu'ils ne soient pas restés"
          }
        ],
        seg: [
          {
            es: "Funciona como en español: que hayas venido, que tu sois venu.",
            p: 1
          },
          {
            es: "Nunca indicativo.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Je suis content que tu es venu.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Je suis content que tu sois venu.",
          es: "Subjuntivo pasado."
        },
        seg: [
          {
            es: "Primera trampa: el indicativo.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Je suis content que tu sois venu.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Je suis désolé que tu as raté ton train.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Je suis désolé que tu aies raté ton train.",
          es: "Subjuntivo: aies."
        },
        seg: [
          {
            es: "Segunda trampa: as.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Je suis désolé que tu aies raté ton train.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Je regrette qu'ils n'aient pas restés plus longtemps.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Je regrette qu'ils ne soient pas restés plus longtemps.",
          es: "Rester va con être."
        },
        seg: [
          {
            es: "Una trampa más.",
            p: 1
          },
          {
            es: "Usamos avoir con rester.",
            p: 1
          },
          {
            es: "Lo correcto es:",
            p: 2
          },
          {
            fr: "Je regrette qu'ils ne soient pas restés plus longtemps.",
            p: 2
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/pensativo",
        q: "«Me alegro de que hayas venido.»",
        o: [
          "Je suis content que tu sois venu.",
          "Je suis content que tu es venu."
        ],
        a: 0,
        bien: "¡Eso es! Sois venu.",
        mal: "Subjuntivo pasado.",
        seg: [
          {
            es: "Te toca. ¿Cuál es correcta?"
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/confundido",
        q: "«Je suis désolé que tu ___ raté ton train.»",
        o: [
          "aies",
          "as"
        ],
        a: 0,
        bien: "¡Muy bien! Aies.",
        mal: "Subjuntivo de avoir.",
        seg: [
          {
            es: "Una más. ¿Aies o as?"
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Repite conmigo",
        titulo: "Repite conmigo",
        mz: "m2d/explica",
        items: [
          {
            p: 1,
            fr: "Je suis content que tu sois venu.",
            es: "Me alegro de que hayas venido."
          },
          {
            p: 2,
            fr: "Je doute qu'il ait compris.",
            es: "Dudo que lo haya entendido."
          },
          {
            p: 3,
            fr: "Il faut que vous ayez terminé avant lundi.",
            es: "Tienen que haber terminado antes del lunes."
          }
        ],
        seg: [
          {
            es: "Ahora tú. Escucha cada frase y repítela en voz alta."
          },
          {
            fr: "Je suis content que tu sois venu.",
            p: 1
          },
          {
            es: "Otra vez.",
            p: 1
          },
          {
            fr: "Je suis content que tu sois venu.",
            p: 1
          },
          {
            fr: "Je doute qu'il ait compris.",
            p: 2
          },
          {
            es: "Otra vez.",
            p: 2
          },
          {
            fr: "Je doute qu'il ait compris.",
            p: 2
          },
          {
            fr: "Il faut que vous ayez terminé avant lundi.",
            p: 3
          },
          {
            es: "Otra vez.",
            p: 3
          },
          {
            fr: "Il faut que vous ayez terminé avant lundi.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Repaso",
        titulo: "Resumen",
        mz: "m2d/celebrar",
        items: [
          {
            p: 1,
            tabla: [
              [
                "Verbo",
                "Subjuntivo pasado"
              ],
              [
                "avoir + participio",
                "que j'aie fini · que tu aies raté"
              ],
              [
                "être + participio",
                "que tu sois venu · qu'elle soit partie"
              ],
              [
                "acción anterior",
                "Je suis content que tu sois venu."
              ],
              [
                "antes de un momento",
                "Il faut que vous ayez terminé avant lundi."
              ]
            ]
          },
          {
            p: 2,
            regla: "Subjuntivo de avoir / être + participio"
          }
        ],
        seg: [
          {
            es: "Repasemos.",
            p: 1
          },
          {
            es: "Algo que ya pasó, tras un sentimiento o una duda.",
            p: 1
          },
          {
            es: "Nunca indicativo. ¡Ahora, a practicar!",
            p: 2
          }
        ]
      }
    ]
  },
  contexto: {
    titulo: "Después del espectáculo", img: "bg-paris", yo: "camila",
    escena: "Camila agradece a sus amigos por venir a su obra.",
    pj: PJ,
    lineas: [
      ["camila", "Nous sommes très contents que vous soyez venus malgré la pluie !", "¡Estamos muy contentos de que hayan venido a pesar de la lluvia!"],
      ["hugo", "Je suis ravi que vous ayez aimé le spectacle. C'est dommage que Laura soit partie si tôt.", "Me alegro de que les haya gustado el espectáculo. Es una pena que Laura se haya ido tan pronto."],
      ["camila", "Oui, et je doute qu'elle ait reçu mon message. Je regrette qu'ils ne soient pas restés plus longtemps.", "Sí, y dudo que haya recibido mi mensaje. Lamento que no se hayan quedado más tiempo."],
      ["hugo", "Il faut que vous ayez terminé avant lundi, pour le prochain spectacle. Je suis heureux que tu aies réussi !", "Tienen que haber terminado antes del lunes, para el próximo espectáculo. ¡Me alegro de que te haya salido bien!"]
    ],
    fijate: "Fíjate: que vous soyez venus, que vous ayez aimé, que Laura soit partie, qu'elle ait reçu, qu'ils ne soient pas restés, que vous ayez terminé, que tu aies réussi."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Formar y usar el subjuntivo pasado",
      idea: "Formación: que j'aie / que je sois (subjuntivo de avoir o être) + participio: que tu aies compris, qu'elle soit partie, que nous ayons fini. Mismo auxiliar y misma concordancia que en el passé composé. Usos: acción anterior al verbo principal: Je regrette que tu n'aies pas pu venir. Je suis content que tu sois venu. Acción terminada antes de un momento futuro: Il faut que tu aies fini avant 18 h.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Forma"], [
        ["que j'aie · que tu aies · aies · qu'il ait", "que yo haya · que tú hayas · que él haya", "avoir"],
        ["que nous ayons · que vous ayez · ayez · qu'ils aient", "que hayamos · que hayan · que hayan", "avoir"],
        ["que tu sois venu · que vous soyez venus", "que hayas venido · que hayan venido", "être"],
        ["qu'elle soit partie · qu'ils ne soient pas restés · soient", "que se haya ido · que no se hayan quedado", "être"],
        ["qu'il vienne · que tu fasses · qu'elle parte · que nous comprenions", "que venga · que hagas · que se vaya · que entendamos", "presente"],
        ["qu'il soit venu · que tu aies fait · qu'elle soit partie · que nous ayons compris", "que haya venido · que hayas hecho · que se haya ido · que hayamos entendido", "pasado"],
        ["Il faut que vous ayez terminé avant lundi.", "Tienen que haber terminado antes del lunes.", "antes de un momento futuro"],
        ["Je doute qu'il ait compris.", "Dudo que lo haya entendido.", "duda"],
        ["C'est dommage qu'elle n'ait pas pu venir.", "Es una pena que no haya podido venir.", "sentimiento"]
      ]],
      ej: [["Je suis ravi que vous ayez aimé le spectacle.", "Me alegro de que les haya gustado el espectáculo."], ["C'est dommage qu'il soit parti si tôt.", "Es una pena que se haya ido tan pronto."], ["Je doute qu'elle ait reçu mon message.", "Dudo que haya recibido mi mensaje."]] },
    {
      id: "ojo",
      tipo: "ojo",
      titulo: "Errores frecuentes",
      intro: "Tres errores que cometemos casi todos los hispanohablantes. Cázalos uno por uno.",
      errores: [
        {
          sit: "Camila escribe:",
          frase: "Je suis content que tu es venu.",
          mal: "es venu",
          bien: "sois venu",
          porque: "Usamos el indicativo.",
          truco: "Sentimiento + acción pasada → subjuntivo pasado."
        },
        {
          sit: "Hugo escribe:",
          frase: "Je suis désolé que tu as raté ton train ce matin.",
          mal: "as",
          bien: "aies",
          porque: "Usamos el indicativo.",
          truco: "Subjuntivo: aies."
        },
        {
          sit: "Camila escribe:",
          frase: "Je regrette qu'ils n'aient pas restés plus longtemps.",
          mal: "n'aient pas restés",
          bien: "ne soient pas restés",
          porque: "Usamos avoir con rester.",
          truco: "Rester va con être."
        }
      ]
    }
  ],
  ejemplos: [
    {
      sit: "«Me alegro de que hayas venido.»",
      resp: "Je suis content que tu sois venu.",
      porque: "être.",
      pasos: [
        {
          q: "¿Venir lleva…?",
          ops: [
            "être",
            "avoir"
          ],
          ok: 0
        },
        {
          q: "¿Être en subjuntivo con tu?",
          ops: [
            "sois",
            "es"
          ],
          ok: 0
        },
        {
          q: "¿Participio?",
          ops: [
            "venu",
            "venir"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«Dudo que lo haya entendido.»",
      resp: "Je doute qu'il ait compris.",
      porque: "avoir.",
      pasos: [
        {
          q: "¿Douter que pide…?",
          ops: [
            "subjuntivo",
            "indicativo"
          ],
          ok: 0
        },
        {
          q: "¿Avoir con il?",
          ops: [
            "ait",
            "a"
          ],
          ok: 0
        },
        {
          q: "¿La frase?",
          ops: [
            "Je doute qu'il ait compris.",
            "Je doute qu'il a compris."
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«Tienen que haber terminado antes del lunes.»",
      resp: "Il faut que vous ayez terminé avant lundi.",
      porque: "antes de un momento.",
      pasos: [
        {
          q: "¿Il faut que pide…?",
          ops: [
            "subjuntivo",
            "indicativo"
          ],
          ok: 0
        },
        {
          q: "¿Avoir con vous?",
          ops: [
            "ayez",
            "avez"
          ],
          ok: 0
        },
        {
          q: "¿Participio?",
          ops: [
            "terminé",
            "terminer"
          ],
          ok: 0
        }
      ]
    }
  ],
  comprueba: [
    { q: "El subjuntivo pasado se forma con…", o: ["aie / sois + participio", "avais / étais + participio"], a: 0, b: "gr", porque: "Subjuntivo del auxiliar." },
    { q: "«Que hayas venido» se dice…", o: ["que tu sois venu", "que tu as venu"], a: 0, b: "gr", porque: "venir → être." },
    { q: "Qu'il ait es el subjuntivo de…", o: ["avoir", "être"], a: 0, b: "gr", porque: "avoir." }
  ],
  practica: [
    { fase: "guiada", c: ["b2sp-forme"], k: "sort", ask: "¿Subjuntivo presente o pasado?", q: "Clasifica.", cats: ["Presente", "Pasado"], items: [["qu'il vienne", 0], ["que tu fasses", 0], ["qu'elle parte", 0], ["que nous comprenions", 0], ["qu'il soit venu", 1], ["que tu aies fait", 1], ["qu'elle soit partie", 1], ["que nous ayons compris", 1]], pista: "¿Auxiliar + participio?", why: "Tiempos." },
    { fase: "guiada", c: ["b2sp-usage"], k: "choice", ask: "«Me alegro de que hayas venido.»", q: "«___»", o: ["Je suis content que tu sois venu.", "Je suis content que tu es venu."], a: 0, pista: "Subjuntivo.", why: "<b>sois venu</b>." },
    { fase: "guiada", c: ["b2sp-forme"], k: "choice", ask: "«Dudo que lo haya entendido.»", q: "«___»", o: ["Je doute qu'il ait compris.", "Je doute qu'il a compris."], a: 0, pista: "Duda.", why: "<b>ait compris</b>." },
    { fase: "indep", c: ["b2sp-usage"], k: "choice", ask: "«Es una pena que no haya podido venir.»", q: "«___»", o: ["C'est dommage qu'elle n'ait pas pu venir.", "C'est dommage qu'elle n'a pas pu venir."], a: 0, why: "<b>n'ait pas pu</b>." },
    { fase: "indep", c: ["b2sp-forme"], k: "fill", ask: "Subjuntivo de avoir (vous).", q: "Il faut que vous ___ terminé avant lundi.", acc: ["ayez"], why: "<b>ayez</b>." },
    { fase: "indep", c: ["b2sp-forme"], k: "fill", ask: "Subjuntivo de être (ils).", q: "Je regrette qu'ils ne ___ pas restés plus longtemps.", acc: ["soient"], why: "<b>soient</b>." },
    { fase: "aplica", c: ["b2sp-forme"], k: "match", ask: "Une cada sujeto con su subjuntivo de avoir.", q: "Sujeto → avoir", pairs: [["que j'", "aie"], ["que tu", "aies"], ["qu'il", "ait"], ["que nous", "ayons"], ["qu'ils", "aient"]], why: "Formas." },
    { fase: "aplica", c: ["b2sp-usage"], k: "spot", ask: "Encuentra el error.", s: "Je suis désolé que tu [as] raté ton train ce matin .", fix: "aies", why: "<b>aies</b>." },
    { fase: "dominio", c: ["b2sp-usage"], k: "order", ask: "Ordena: «Me alegro de que hayas aprobado».", tokens: ["Je suis heureux", "que tu", "aies réussi."], why: "<b>Je suis heureux que tu aies réussi.</b>" },
    { fase: "dominio", c: ["b2sp-usage"], k: "choice", ask: "«Me alegro de que les haya gustado el espectáculo.»", q: "«Je suis ravi que vous ___ aimé le spectacle.»", o: ["ayez", "avez"], a: 0, why: "<b>ayez</b>." },
    { fase: "dominio", c: ["b2sp-forme", "b2sp-usage"], k: "listen", say: "Nous sommes très contents que vous soyez venus malgré la pluie.", acc: ["Nous sommes très contents que vous soyez venus malgré la pluie."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Nous sommes très contents que vous soyez venus malgré la pluie.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Laura"], previo: [] }
};

E["b12-subjonctif-conjonctions"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Conjonctions + subjonctif : à condition que, avant que, sans que",
  objetivo: {
    que: "Vas a saber qué conjunciones piden subjuntivo (avant que, sans que, à condition que…) y cuáles indicativo (après que, dès que, parce que…).",
    corto: "Rentre avant qu'il pleuve. · Je partirai après qu'il sera arrivé.",
    podras: ["Usar el subjuntivo tras à condition que, avant que, sans que, à moins que, jusqu'à ce que, bien que, pour que.", "Usar el indicativo tras après que, parce que, pendant que, dès que.", "Pasar a preposición + infinitivo con el mismo sujeto: avant de partir, sans rien dire."],
    iconos: ["ic2/pregunta", "ic2/reloj-arena", "ic2/bombilla"],
    previos: ["La finalidad con pour que (lección 12), el subjuntivo (B1.1, lección 6) y la concesión (B1.1, lección 10)."],
    capacidad: "Ahora no dudas entre «avant qu'il vient» y «avant qu'il vienne»."
  },
  requiere: R("b2bu-subj", "b1sj-usage", "b1oc-conc"), recupera: ["b1sj-usage"],
  conceptos: {
    "b2sc-subj": { n: "+ subjuntivo: à condition que, avant que, sans que, à moins que, jusqu'à ce que, bien que, pour que", b: "gr" },
    "b2sc-indic": { n: "+ indicativo: après que, parce que, pendant que, dès que; mismo sujeto: avant de, sans, à condition de + infinitivo", b: "gr" }
  },
  video: {
    titulo: "Conjunciones + subjuntivo: à condition que, avant que, sans que",
    voz: "es-CO-SalomeNeural",
    escenas: [
      {
        v: "persona",
        cap: "Para qué sirve",
        fondo: "esc/calle-paris",
        img: "pj/camila-neutra",
        fr: "Oui, à condition que tu la rendes dimanche. Et rentre avant qu'il fasse nuit.",
        es: "Sí, a condición de que lo devuelvas el domingo. Y vuelve antes de que anochezca.",
        nota: "El carro prestado",
        seg: [
          {
            es: "Camila le presta el carro a Hugo: à condition que tu la rendes, avant qu'il fasse nuit. Conjunciones que piden subjuntivo."
          },
          {
            fr: "Oui, à condition que tu la rendes dimanche. Et rentre avant qu'il fasse nuit.",
            p: 1
          },
          {
            es: "Hoy aprendes qué conjunciones van con subjuntivo y cuáles con indicativo.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Con subjuntivo",
        titulo: "à condition que, avant que, sans que…",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "à condition que · avant que · sans que · à moins que",
            es: "a condición de que · antes de que · sin que · a menos que"
          },
          {
            p: 2,
            fr: "jusqu'à ce que · bien que · pour que · de peur que",
            es: "hasta que · aunque · para que · por miedo a que"
          },
          {
            p: 3,
            fr: "On ira, à moins qu'il fasse froid. · Je t'attendrai jusqu'à ce que tu reviennes.",
            es: "Iremos, a menos que haga frío. · Te esperaré hasta que vuelvas."
          }
        ],
        seg: [
          {
            es: "Con subjuntivo: à condition que, avant que, sans que, à moins que.",
            p: 1
          },
          {
            fr: "à condition que, avant que, sans que, à moins que",
            p: 1
          },
          {
            fr: "jusqu'à ce que, bien que, pour que, de peur que",
            p: 2
          },
          {
            fr: "On ira, à moins qu'il fasse froid. Je t'attendrai jusqu'à ce que tu reviennes.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Con indicativo",
        titulo: "après que, parce que, dès que",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "après que · parce que · dès que · pendant que",
            es: "después de que · porque · en cuanto · mientras"
          },
          {
            p: 2,
            fr: "Je partirai après qu'il sera arrivé.",
            es: "après que: indicativo (¡ojo!)"
          },
          {
            p: 3,
            fr: "Je t'appellerai dès que j'arriverai.",
            es: "Te llamaré en cuanto llegue."
          }
        ],
        seg: [
          {
            es: "Con indicativo: après que, parce que, dès que, pendant que.",
            p: 1
          },
          {
            fr: "après que, parce que, dès que, pendant que",
            p: 1
          },
          {
            es: "Ojo: après que va con indicativo.",
            p: 2
          },
          {
            fr: "Je partirai après qu'il sera arrivé.",
            p: 2
          },
          {
            fr: "Je t'appellerai dès que j'arriverai.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Mismo sujeto",
        titulo: "Preposición + infinitivo",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "avant de partir · sans rien dire · à condition de payer",
            es: "mismo sujeto: preposición + infinitivo"
          },
          {
            p: 2,
            fr: "Rentre avant qu'il pleuve.",
            es: "otro sujeto: avant que + subjuntivo"
          },
          {
            p: 3,
            fr: "Il est parti sans que personne le voie.",
            es: "Se fue sin que nadie lo viera."
          }
        ],
        seg: [
          {
            es: "Si el sujeto es el mismo: avant de, sans, à condition de, más infinitivo.",
            p: 1
          },
          {
            fr: "avant de partir, sans rien dire, à condition de payer",
            p: 1
          },
          {
            fr: "Rentre avant qu'il pleuve.",
            p: 2
          },
          {
            fr: "Il est parti sans que personne le voie.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En la vida real",
        titulo: "El carro prestado",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Tu peux me prêter ta voiture ce week-end ?",
            es: "¿Me puedes prestar tu carro este fin de semana?"
          },
          {
            p: 2,
            fr: "Oui, à condition que tu la rendes dimanche. Et rentre avant qu'il fasse nuit, la route est dangereuse.",
            es: "Sí, a condición de que lo devuelvas el domingo. Y vuelve antes de que se haga de noche, la carretera es peligrosa."
          },
          {
            p: 3,
            fr: "Promis. On ira à la mer, à moins qu'il fasse froid. Je t'appellerai dès que j'arriverai.",
            es: "Prometido. Iremos al mar, a menos que haga frío. Te llamaré en cuanto llegue."
          },
          {
            p: 4,
            fr: "Parfait. Et je t'explique les freins pour que tu comprennes bien. Je t'attendrai jusqu'à ce que tu reviennes !",
            es: "Perfecto. Y te explico los frenos para que entiendas bien. ¡Te esperaré hasta que vuelvas!"
          }
        ],
        seg: [
          {
            es: "Escucha cómo suena en una conversación de verdad."
          },
          {
            fr: "Tu peux me prêter ta voiture ce week-end ?",
            p: 1
          },
          {
            fr: "Oui, à condition que tu la rendes dimanche. Et rentre avant qu'il fasse nuit, la route est dangereuse.",
            p: 2
          },
          {
            fr: "Promis. On ira à la mer, à moins qu'il fasse froid. Je t'appellerai dès que j'arriverai.",
            p: 3
          },
          {
            fr: "Parfait. Et je t'explique les freins pour que tu comprennes bien. Je t'attendrai jusqu'à ce que tu reviennes !",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Contraste con el español",
        titulo: "Después de que llegue ≠ après qu'il soit",
        mz: "m2d/alerta",
        items: [
          {
            p: 1,
            regla: "español: después de que llegue (subjuntivo) · francés: après qu'il sera arrivé (indicativo)"
          },
          {
            p: 2,
            regla: "a condición de que: subjuntivo en los dos idiomas"
          },
          {
            p: 3,
            regla: "«antes de irme» = avant de partir (no «avant que je parte»)"
          }
        ],
        seg: [
          {
            es: "La gran trampa: después de que lleva subjuntivo en español, pero indicativo en francés.",
            p: 1
          },
          {
            es: "Y con el mismo sujeto, avant de.",
            p: 3
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Il a téléphoné après qu'il soit parti.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Il a téléphoné après qu'il est parti.",
          es: "Après que + indicativo."
        },
        seg: [
          {
            es: "Primera trampa: subjuntivo tras après que.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Il a téléphoné après qu'il est parti.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Je te prête ma voiture à condition que tu la rends.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Je te prête ma voiture à condition que tu la rendes.",
          es: "Condición: subjuntivo."
        },
        seg: [
          {
            es: "Segunda trampa: el indicativo.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Je te prête ma voiture à condition que tu la rendes.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Avant que je parte, je ferme la fenêtre.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Avant de partir, je ferme la fenêtre.",
          es: "Mismo sujeto: avant de + infinitivo."
        },
        seg: [
          {
            es: "Una trampa más.",
            p: 1
          },
          {
            es: "Usamos avant que con el mismo sujeto.",
            p: 1
          },
          {
            es: "Lo correcto es:",
            p: 2
          },
          {
            fr: "Avant de partir, je ferme la fenêtre.",
            p: 2
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/pensativo",
        q: "«Rentre avant qu'il ___.»",
        o: [
          "pleuve",
          "pleut"
        ],
        a: 0,
        bien: "¡Eso es! Pleuve.",
        mal: "Avant que + subjuntivo.",
        seg: [
          {
            es: "Te toca. ¿Pleuve o pleut?"
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/confundido",
        q: "Après que va con…",
        o: [
          "indicativo",
          "subjuntivo"
        ],
        a: 0,
        bien: "¡Muy bien! Indicativo.",
        mal: "Al revés que el español.",
        seg: [
          {
            es: "Una más. ¿Qué modo pide après que?"
          }
        ],
        es: true
      },
      {
        v: "pizarra",
        cap: "Repite conmigo",
        titulo: "Repite conmigo",
        mz: "m2d/explica",
        items: [
          {
            p: 1,
            fr: "Rentre avant qu'il pleuve.",
            es: "Vuelve antes de que llueva."
          },
          {
            p: 2,
            fr: "On ira, à moins qu'il fasse froid.",
            es: "Iremos, a menos que haga frío."
          },
          {
            p: 3,
            fr: "Je partirai après qu'il sera arrivé.",
            es: "Me iré después de que llegue."
          }
        ],
        seg: [
          {
            es: "Ahora tú. Escucha cada frase y repítela en voz alta."
          },
          {
            fr: "Rentre avant qu'il pleuve.",
            p: 1
          },
          {
            es: "Otra vez.",
            p: 1
          },
          {
            fr: "Rentre avant qu'il pleuve.",
            p: 1
          },
          {
            fr: "On ira, à moins qu'il fasse froid.",
            p: 2
          },
          {
            es: "Otra vez.",
            p: 2
          },
          {
            fr: "On ira, à moins qu'il fasse froid.",
            p: 2
          },
          {
            fr: "Je partirai après qu'il sera arrivé.",
            p: 3
          },
          {
            es: "Otra vez.",
            p: 3
          },
          {
            fr: "Je partirai après qu'il sera arrivé.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Repaso",
        titulo: "Resumen",
        mz: "m2d/celebrar",
        items: [
          {
            p: 1,
            tabla: [
              [
                "Modo",
                "Conjunciones"
              ],
              [
                "subjuntivo",
                "à condition que · avant que · sans que · à moins que · jusqu'à ce que"
              ],
              [
                "indicativo",
                "après que · parce que · dès que · pendant que"
              ],
              [
                "mismo sujeto",
                "avant de · sans · à condition de + infinitivo"
              ]
            ]
          },
          {
            p: 2,
            regla: "Avant que + subjuntivo, après que + indicativo"
          }
        ],
        seg: [
          {
            es: "Repasemos.",
            p: 1
          },
          {
            es: "Conjunciones y modos.",
            p: 1
          },
          {
            es: "Y preposición + infinitivo con el mismo sujeto. ¡Ahora, a practicar!",
            p: 2
          }
        ]
      }
    ]
  },
  contexto: {
    titulo: "El carro prestado", img: "bg-cafe", yo: "camila",
    escena: "Hugo le pide el carro a Camila.",
    pj: PJ,
    lineas: [
      ["hugo", "Tu peux me prêter ta voiture ce week-end ?", "¿Me puedes prestar tu carro este fin de semana?"],
      ["camila", "Oui, à condition que tu la rendes dimanche. Et rentre avant qu'il fasse nuit, la route est dangereuse.", "Sí, a condición de que lo devuelvas el domingo. Y vuelve antes de que se haga de noche, la carretera es peligrosa."],
      ["hugo", "Promis. On ira à la mer, à moins qu'il fasse froid. Je t'appellerai dès que j'arriverai.", "Prometido. Iremos al mar, a menos que haga frío. Te llamaré en cuanto llegue."],
      ["camila", "Parfait. Et je t'explique les freins pour que tu comprennes bien. Je t'attendrai jusqu'à ce que tu reviennes !", "Perfecto. Y te explico los frenos para que entiendas bien. ¡Te esperaré hasta que vuelvas!"]
    ],
    fijate: "Fíjate: à condition que tu la rendes, avant qu'il fasse nuit, à moins qu'il fasse froid, pour que tu comprennes, jusqu'à ce que tu reviennes (subjuntivo); dès que j'arriverai (indicativo)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "¿Subjuntivo o indicativo?",
      idea: "Con subjuntivo: à condition que (a condición de que), avant que (antes de que), sans que (sin que), à moins que (a menos que), jusqu'à ce que (hasta que), bien que (aunque), pour que (para que), de peur que (por miedo a que). Con indicativo: après que, parce que, pendant que, dès que, alors que. Ojo: après que va con indicativo: après qu'il est parti. Con el mismo sujeto se usa preposición + infinitivo: avant de partir, sans rien dire, à condition de payer.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Modo"], [
        ["à condition que · avant que · sans que · à moins que", "a condición de que · antes de que · sin que · a menos que", "+ subjuntivo"],
        ["jusqu'à ce que · bien que · pour que · de peur que", "hasta que · aunque · para que · por miedo a que", "+ subjuntivo"],
        ["après que · parce que · dès que · pendant que", "después de que · porque · en cuanto · mientras", "+ indicativo"],
        ["à condition que tu la rendes · rendes", "a condición de que lo devuelvas", "subjuntivo"],
        ["jusqu'à ce que tu reviennes · reviennes", "hasta que vuelvas", "subjuntivo"],
        ["sans qu'on l'aide · aide", "sin que lo ayuden", "subjuntivo"],
        ["Rentre avant qu'il pleuve.", "Vuelve antes de que llueva.", "subjuntivo"],
        ["On ira, à moins qu'il fasse froid.", "Iremos, a menos que haga frío.", "subjuntivo"],
        ["Je partirai après qu'il sera arrivé.", "Me iré después de que llegue.", "indicativo"],
        ["avant de partir · sans rien dire · à condition de payer", "antes de irse · sin decir nada · a condición de pagar", "mismo sujeto"]
      ]],
      ej: [["Je t'aiderai à condition que tu sois patient.", "Te ayudaré a condición de que seas paciente."], ["Rentre avant qu'il fasse nuit.", "Vuelve antes de que se haga de noche."], ["Il est parti sans que personne le voie.", "Se fue sin que nadie lo viera."]] },
    {
      id: "ojo",
      tipo: "ojo",
      titulo: "Errores frecuentes",
      intro: "Tres errores que cometemos casi todos los hispanohablantes. Cázalos uno por uno.",
      errores: [
        {
          sit: "Hugo escribe:",
          frase: "Il a téléphoné après qu'il soit parti.",
          mal: "soit",
          bien: "est",
          porque: "Usamos el subjuntivo, como en español.",
          truco: "Après que lleva indicativo."
        },
        {
          sit: "Camila escribe:",
          frase: "Je te prête ma voiture à condition que tu la rends demain.",
          mal: "rends",
          bien: "rendes",
          porque: "Usamos el indicativo.",
          truco: "Condición: subjuntivo."
        },
        {
          sit: "Camila escribe:",
          frase: "Avant que je parte, je ferme la fenêtre.",
          mal: "Avant que je parte",
          bien: "Avant de partir",
          porque: "Usamos avant que con el mismo sujeto.",
          truco: "Mismo sujeto: avant de + infinitivo."
        }
      ]
    }
  ],
  ejemplos: [
    {
      sit: "«Vuelve antes de que llueva.»",
      resp: "Rentre avant qu'il pleuve.",
      porque: "avant que.",
      pasos: [
        {
          q: "¿Mismo sujeto?",
          ops: [
            "no: tú / il",
            "sí"
          ],
          ok: 0
        },
        {
          q: "¿Avant que pide…?",
          ops: [
            "subjuntivo",
            "indicativo"
          ],
          ok: 0
        },
        {
          q: "¿Pleuvoir en subjuntivo?",
          ops: [
            "pleuve",
            "pleut"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«Iremos, a menos que haga frío.»",
      resp: "On ira, à moins qu'il fasse froid.",
      porque: "à moins que.",
      pasos: [
        {
          q: "¿A menos que?",
          ops: [
            "à moins que",
            "parce que"
          ],
          ok: 0
        },
        {
          q: "¿Modo?",
          ops: [
            "subjuntivo",
            "indicativo"
          ],
          ok: 0
        },
        {
          q: "¿Faire en subjuntivo?",
          ops: [
            "fasse",
            "fait"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«Me iré después de que llegue.»",
      resp: "Je partirai après qu'il sera arrivé.",
      porque: "après que.",
      pasos: [
        {
          q: "¿Après que pide…?",
          ops: [
            "indicativo",
            "subjuntivo"
          ],
          ok: 0
        },
        {
          q: "¿Tiempo?",
          ops: [
            "futur antérieur",
            "subjuntivo"
          ],
          ok: 0
        },
        {
          q: "¿La frase?",
          ops: [
            "Je partirai après qu'il sera arrivé.",
            "Je partirai après qu'il soit arrivé."
          ],
          ok: 0
        }
      ]
    }
  ],
  comprueba: [
    { q: "Avant que va con…", o: ["subjuntivo", "indicativo"], a: 0, b: "gr", porque: "avant qu'il pleuve." },
    { q: "Après que va con…", o: ["indicativo", "subjuntivo"], a: 0, b: "gr", porque: "après qu'il est parti." },
    { q: "Con el mismo sujeto, «antes de irme» se dice…", o: ["avant de partir", "avant que je parte"], a: 0, b: "gr", porque: "Infinitivo." }
  ],
  practica: [
    { fase: "guiada", c: ["b2sc-subj", "b2sc-indic"], k: "sort", ask: "¿Subjuntivo o indicativo?", q: "Clasifica.", cats: ["Subjuntivo", "Indicativo"], items: [["bien que", 0], ["avant que", 0], ["pour que", 0], ["sans que", 0], ["après que", 1], ["parce que", 1], ["dès que", 1], ["pendant que", 1]], pista: "Après que: indicativo.", why: "Modos." },
    { fase: "guiada", c: ["b2sc-subj"], k: "choice", ask: "«Vuelve antes de que llueva.»", q: "«Rentre avant qu'il ___.»", o: ["pleuve", "pleut"], a: 0, pista: "avant que.", why: "<b>pleuve</b>." },
    { fase: "guiada", c: ["b2sc-indic"], k: "choice", ask: "«Me iré después de que llegue.»", q: "«___»", o: ["Je partirai après qu'il sera arrivé.", "Je partirai après qu'il soit arrivé."], a: 0, pista: "après que.", why: "Indicativo." },
    { fase: "indep", c: ["b2sc-subj"], k: "choice", ask: "«Iremos, a menos que haga frío.»", q: "«On ira, ___ il fasse froid.»", o: ["à moins qu'", "parce qu'"], a: 0, why: "<b>à moins qu'</b>." },
    { fase: "indep", c: ["b2sc-subj"], k: "fill", ask: "Subjuntivo de revenir (tu).", q: "Je t'attendrai jusqu'à ce que tu ___.", acc: ["reviennes"], why: "<b>reviennes</b>." },
    { fase: "indep", c: ["b2sc-subj"], k: "fill", ask: "Subjuntivo de aider (on).", q: "Il a fini sans qu'on l'___.", acc: ["aide"], why: "<b>aide</b>." },
    { fase: "aplica", c: ["b2sc-subj"], k: "match", ask: "Une cada conjunción con su traducción.", q: "Francés → español", pairs: [["à condition que", "a condición de que"], ["à moins que", "a menos que"], ["jusqu'à ce que", "hasta que"], ["de peur que", "por miedo a que"], ["sans que", "sin que"]], why: "Conjunciones." },
    { fase: "aplica", c: ["b2sc-subj"], k: "spot", ask: "Encuentra el error.", s: "Je te prête ma voiture à condition que tu la [rends] demain .", fix: "rendes", why: "<b>rendes</b>." },
    { fase: "aplica", c: ["b2sc-indic"], k: "spot", ask: "Encuentra el error.", s: "Il a téléphoné après qu'il [soit] parti .", fix: "est", why: "<b>est</b>." },
    { fase: "dominio", c: ["b2sc-indic"], k: "choice", ask: "«Antes de irme, cierro la ventana.» (mismo sujeto)", q: "«___, je ferme la fenêtre.»", o: ["Avant de partir", "Avant que je parte"], a: 0, why: "<b>Avant de partir</b>." },
    { fase: "dominio", c: ["b2sc-subj"], k: "order", ask: "Ordena: «Explícalo para que entiendan».", tokens: ["Explique-le", "pour qu'ils", "comprennent."], why: "<b>Explique-le pour qu'ils comprennent.</b>" },
    { fase: "dominio", c: ["b2sc-subj", "b2sc-indic"], k: "listen", say: "Je reste ici jusqu'à ce que tu reviennes.", acc: ["Je reste ici jusqu'à ce que tu reviennes."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je reste ici jusqu'à ce que tu reviennes.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

E["b12-futur-dans-le-passe"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Le futur dans le passé : il a dit qu'il viendrait",
  objetivo: {
    que: "Vas a contar promesas, planes y previsiones del pasado: il a dit qu'il viendrait.",
    corto: "Il m'a dit qu'il viendrait. · Je pensais que tu aurais fini.",
    podras: ["Pasar el futuro simple a conditionnel présent: « Je viendrai » → il a dit qu'il viendrait.", "Pasar el futuro anterior a conditionnel passé: « J'aurai fini » → il a dit qu'il aurait fini.", "Pasar el futuro próximo a aller en imparfait: il a dit qu'il allait partir."],
    iconos: ["ic2/reloj-arena", "ic2/pergamino", "ic2/bombilla"],
    previos: ["El discurso indirecto en pasado (lección 11), el futuro anterior (lección 10) y el condicional (B1.1, lección 7)."],
    capacidad: "Ahora cuentas lo que alguien prometió."
  },
  requiere: R("b2dp-temps", "b2fa-forme", "b1co-forme"), recupera: ["b1co-forme"],
  conceptos: {
    "b2fd-cond": { n: "futuro visto desde el pasado → conditionnel présent (il a dit qu'il viendrait, je savais que tu gagnerais)", b: "gr" },
    "b2fd-passe": { n: "futuro anterior → conditionnel passé (il pensait qu'il aurait fini); futur proche → allait + infinitivo", b: "gr" }
  },
  video: {
    titulo: "El futuro en el pasado: il a dit qu'il viendrait",
    voz: "es-CO-SalomeNeural",
    escenas: [
      {
        v: "persona",
        cap: "Para qué sirve",
        fondo: "esc/cafe-lyon",
        img: "pj/camila-neutra",
        fr: "Tu m'avais juré que tu ne serais pas en retard !",
        es: "¡Me habías jurado que no llegarías tarde!",
        nota: "La promesa",
        seg: [
          {
            es: "Camila le reprocha a Hugo: tu m'avais juré que tu ne serais pas en retard. Una promesa del pasado sobre el futuro: el condicional."
          },
          {
            fr: "Tu m'avais juré que tu ne serais pas en retard !",
            p: 1
          },
          {
            es: "Hoy aprendes a expresar el futuro visto desde el pasado.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Futuro → condicional",
        titulo: "il viendrait",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "« Je partirai. » → il partirait. · il viendrait · elle ferait · tu serais",
            es: "futuro simple → conditionnel présent"
          },
          {
            p: 2,
            fr: "Il m'a dit qu'il appellerait.",
            es: "Me dijo que llamaría."
          },
          {
            p: 3,
            fr: "Ils ont annoncé qu'il pleuvrait demain.",
            es: "Anunciaron que llovería mañana."
          }
        ],
        seg: [
          {
            es: "Con un verbo en pasado, el futuro simple pasa a condicional: il partirait.",
            p: 1
          },
          {
            fr: "il partirait, il viendrait, elle ferait, tu serais",
            p: 1
          },
          {
            fr: "Il m'a dit qu'il appellerait.",
            p: 2
          },
          {
            fr: "Ils ont annoncé qu'il pleuvrait demain.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Futuro anterior y futur proche",
        titulo: "il aurait fini · il allait partir",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "« J'aurai fini. » → il aurait fini.",
            es: "futur antérieur → conditionnel passé"
          },
          {
            p: 2,
            fr: "Je pensais que j'aurais fini mon travail à six heures.",
            es: "Pensaba que habría terminado mi trabajo a las seis."
          },
          {
            p: 3,
            fr: "« Je vais partir. » → Il a dit qu'il allait partir.",
            es: "futur proche → aller en imparfait"
          }
        ],
        seg: [
          {
            es: "El futur antérieur pasa a conditionnel passé: il aurait fini.",
            p: 1
          },
          {
            fr: "il aurait fini",
            p: 1
          },
          {
            fr: "Je pensais que j'aurais fini mon travail à six heures.",
            p: 2
          },
          {
            es: "Y el futur proche, a aller en imparfait: il allait partir.",
            p: 3
          },
          {
            fr: "Il a dit qu'il allait partir.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En los relatos",
        titulo: "Je savais que tu gagnerais",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Je savais que tu gagnerais.",
            es: "Sabía que ganarías."
          },
          {
            p: 2,
            fr: "On savait que ce serait difficile.",
            es: "Sabíamos que sería difícil."
          },
          {
            p: 3,
            fr: "Elle m'a promis qu'elle m'écrirait.",
            es: "Me prometió que me escribiría."
          }
        ],
        seg: [
          {
            es: "También en los relatos: je savais que tu gagnerais.",
            p: 1
          },
          {
            fr: "Je savais que tu gagnerais.",
            p: 1
          },
          {
            fr: "On savait que ce serait difficile.",
            p: 2
          },
          {
            fr: "Elle m'a promis qu'elle m'écrirait.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En la vida real",
        titulo: "La promesa",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Tu m'avais juré que tu ne serais pas en retard !",
            es: "¡Me habías jurado que no llegarías tarde!"
          },
          {
            p: 2,
            fr: "Je sais. Je pensais que j'aurais fini mon travail à six heures.",
            es: "Lo sé. Pensaba que habría terminado mi trabajo a las seis."
          },
          {
            p: 3,
            fr: "Et Paul ? Il m'a dit qu'il appellerait. Il a dit qu'il allait partir tôt.",
            es: "¿Y Paul? Me dijo que llamaría. Dijo que iba a salir temprano."
          },
          {
            p: 4,
            fr: "Ils ont annoncé qu'il pleuvrait demain, il est peut-être resté chez lui. On savait que ce serait difficile.",
            es: "Anunciaron que llovería mañana, a lo mejor se quedó en su casa. Sabíamos que sería difícil."
          }
        ],
        seg: [
          {
            es: "Escucha cómo suena en una conversación de verdad."
          },
          {
            fr: "Tu m'avais juré que tu ne serais pas en retard !",
            p: 1
          },
          {
            fr: "Je sais. Je pensais que j'aurais fini mon travail à six heures.",
            p: 2
          },
          {
            fr: "Et Paul ? Il m'a dit qu'il appellerait. Il a dit qu'il allait partir tôt.",
            p: 3
          },
          {
            fr: "Ils ont annoncé qu'il pleuvrait demain, il est peut-être resté chez lui. On savait que ce serait difficile.",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Contraste con el español",
        titulo: "Dijo que vendría",
        mz: "m2d/alerta",
        items: [
          {
            p: 1,
            regla: "igual que en español: dijo que vendría → il a dit qu'il viendrait"
          },
          {
            p: 2,
            regla: "nunca futuro tras un verbo en pasado: qu'il viendra ✗"
          },
          {
            p: 3,
            regla: "«dijo que iba a salir» = qu'il allait sortir"
          }
        ],
        seg: [
          {
            es: "Funciona como en español: dijo que vendría.",
            p: 1
          },
          {
            es: "Nunca futuro tras un verbo en pasado.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Il a dit qu'il viendra.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Il a dit qu'il viendrait.",
          es: "Introductor en pasado → condicional."
        },
        seg: [
          {
            es: "Primera trampa: el futuro.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Il a dit qu'il viendrait.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Il avait annoncé qu'il neigera.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Il avait annoncé qu'il neigerait.",
          es: "Condicional."
        },
        seg: [
          {
            es: "Segunda trampa: otra vez el futuro.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Il avait annoncé qu'il neigerait.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Paul a dit qu'il va partir tôt.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Paul a dit qu'il allait partir tôt.",
          es: "Futur proche → allait."
        },
        seg: [
          {
            es: "Una trampa más.",
            p: 1
          },
          {
            es: "Usamos el presente.",
            p: 1
          },
          {
            es: "Lo correcto es:",
            p: 2
          },
          {
            fr: "Paul a dit qu'il allait partir tôt.",
            p: 2
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/pensativo",
        q: "«Me dijo que llamaría.»",
        o: [
          "Il m'a dit qu'il appellerait.",
          "Il a dit qu'il viendra."
        ],
        a: 0,
        bien: "¡Eso es! Appellerait.",
        mal: "Condicional.",
        seg: [
          {
            es: "Te toca. ¿Cuál es correcta?"
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/confundido",
        q: "«Dijo que iba a salir.»",
        o: [
          "Il a dit qu'il allait sortir.",
          "Il a dit qu'il va partir."
        ],
        a: 0,
        bien: "¡Muy bien! Allait.",
        mal: "Futur proche → allait.",
        seg: [
          {
            es: "Una más. ¿Cuál es correcta?"
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Repite conmigo",
        titulo: "Repite conmigo",
        mz: "m2d/explica",
        items: [
          {
            p: 1,
            fr: "Il m'a dit qu'il appellerait.",
            es: "Me dijo que llamaría."
          },
          {
            p: 2,
            fr: "Je pensais que tu aurais déjà fini.",
            es: "Pensaba que ya habrías terminado."
          },
          {
            p: 3,
            fr: "Il a dit qu'il allait sortir.",
            es: "Dijo que iba a salir."
          }
        ],
        seg: [
          {
            es: "Ahora tú. Escucha cada frase y repítela en voz alta."
          },
          {
            fr: "Il m'a dit qu'il appellerait.",
            p: 1
          },
          {
            es: "Otra vez.",
            p: 1
          },
          {
            fr: "Il m'a dit qu'il appellerait.",
            p: 1
          },
          {
            fr: "Je pensais que tu aurais déjà fini.",
            p: 2
          },
          {
            es: "Otra vez.",
            p: 2
          },
          {
            fr: "Je pensais que tu aurais déjà fini.",
            p: 2
          },
          {
            fr: "Il a dit qu'il allait sortir.",
            p: 3
          },
          {
            es: "Otra vez.",
            p: 3
          },
          {
            fr: "Il a dit qu'il allait sortir.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Repaso",
        titulo: "Resumen",
        mz: "m2d/celebrar",
        items: [
          {
            p: 1,
            tabla: [
              [
                "Directo",
                "Desde el pasado"
              ],
              [
                "futuro simple",
                "conditionnel présent: il viendrait"
              ],
              [
                "futur antérieur",
                "conditionnel passé: il aurait fini"
              ],
              [
                "futur proche",
                "aller en imparfait: il allait partir"
              ],
              [
                "relato",
                "Je savais que tu gagnerais."
              ]
            ]
          },
          {
            p: 2,
            regla: "Verbo en pasado → condicional"
          }
        ],
        seg: [
          {
            es: "Repasemos.",
            p: 1
          },
          {
            es: "El futuro visto desde el pasado.",
            p: 1
          },
          {
            es: "Y nunca futuro tras il a dit. ¡Ahora, a practicar!",
            p: 2
          }
        ]
      }
    ]
  },
  contexto: {
    titulo: "La promesa", img: "bg-universidad", yo: "camila",
    escena: "Camila esperaba a Hugo y él llegó tarde.",
    pj: PJ,
    lineas: [
      ["camila", "Tu m'avais juré que tu ne serais pas en retard !", "¡Me habías jurado que no llegarías tarde!"],
      ["hugo", "Je sais. Je pensais que j'aurais fini mon travail à six heures.", "Lo sé. Pensaba que habría terminado mi trabajo a las seis."],
      ["camila", "Et Paul ? Il m'a dit qu'il appellerait. Il a dit qu'il allait partir tôt.", "¿Y Paul? Me dijo que llamaría. Dijo que iba a salir temprano."],
      ["hugo", "Ils ont annoncé qu'il pleuvrait demain, il est peut-être resté chez lui. On savait que ce serait difficile.", "Anunciaron que llovería mañana, a lo mejor se quedó en su casa. Sabíamos que sería difícil."]
    ],
    fijate: "Fíjate: tu ne serais pas, j'aurais fini, il appellerait, il allait partir, il pleuvrait, ce serait: el futuro visto desde el pasado."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Las tres transformaciones",
      idea: "Cuando el verbo introductor está en pasado (il a dit, je pensais, je savais, ils ont annoncé), el futuro cambia: futuro simple → conditionnel présent: « Je viendrai » → Il a dit qu'il viendrait. Futuro anterior → conditionnel passé: « J'aurai fini » → Il a dit qu'il aurait fini. Futuro próximo → aller en imparfait: « Je vais partir » → Il a dit qu'il allait partir. También en relatos: Je savais qu'elle réussirait.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Tiempo"], [
        ["« Je partirai. » → il partirait. · il viendrait · elle ferait · on verrait · tu serais · serais", "partiría · vendría · haría · veríamos · serías", "conditionnel présent"],
        ["« J'aurai fini. » → il aurait fini. · il serait venu · elle aurait fait · on aurait vu · tu aurais été", "habría terminado · habría venido · habría hecho", "conditionnel passé"],
        ["« Je vais sortir. » → il allait sortir.", "iba a salir", "aller en imparfait"],
        ["« Je peux venir. » → il pouvait venir.", "podía venir", "imparfait"],
        ["Il m'a dit qu'il appellerait.", "Me dijo que llamaría.", "promesa"],
        ["Je savais que tu gagnerais.", "Sabía que ganarías.", "previsión"],
        ["Je pensais que tu aurais déjà fini.", "Pensaba que ya habrías terminado.", "anterior"],
        ["il pleuvrait · pleuvrait · il neigerait · neigerait", "llovería · nevaría", "meteo"],
        ["Il m'a promis qu'il viendrait.", "Me prometió que vendría.", "promesa"]
      ]],
      ej: [["Elle m'a promis qu'elle m'écrirait.", "Me prometió que me escribiría."], ["Je pensais que tu serais déjà parti.", "Pensaba que ya te habrías ido."], ["On savait que ce serait difficile.", "Sabíamos que sería difícil."]] },
    {
      id: "ojo",
      tipo: "ojo",
      titulo: "Errores frecuentes",
      intro: "Tres errores que cometemos casi todos los hispanohablantes. Cázalos uno por uno.",
      errores: [
        {
          sit: "Camila cuenta:",
          frase: "Il a dit qu'il viendra.",
          mal: "viendra",
          bien: "viendrait",
          porque: "Usamos el futuro.",
          truco: "Introductor en pasado → condicional."
        },
        {
          sit: "Hugo cuenta:",
          frase: "Le météorologue avait annoncé qu'il neigera le lendemain.",
          mal: "neigera",
          bien: "neigerait",
          porque: "Usamos el futuro.",
          truco: "Condicional."
        },
        {
          sit: "Camila cuenta:",
          frase: "Paul a dit qu'il va partir tôt.",
          mal: "va",
          bien: "allait",
          porque: "Usamos el presente.",
          truco: "Futur proche → allait."
        }
      ]
    }
  ],
  ejemplos: [
    {
      sit: "«Me dijo que llamaría.»",
      resp: "Il m'a dit qu'il appellerait.",
      porque: "condicional.",
      pasos: [
        {
          q: "¿Verbo introductor?",
          ops: [
            "pasado: m'a dit",
            "presente"
          ],
          ok: 0
        },
        {
          q: "¿Futuro → ?",
          ops: [
            "condicional",
            "futuro"
          ],
          ok: 0
        },
        {
          q: "¿Appeler en condicional?",
          ops: [
            "appellerait",
            "appellera"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«Pensaba que ya habrías terminado.»",
      resp: "Je pensais que tu aurais déjà fini.",
      porque: "conditionnel passé.",
      pasos: [
        {
          q: "¿Futur antérieur → ?",
          ops: [
            "conditionnel passé",
            "plus-que-parfait"
          ],
          ok: 0
        },
        {
          q: "¿Avoir con tu?",
          ops: [
            "aurais",
            "auras"
          ],
          ok: 0
        },
        {
          q: "¿Dónde va déjà?",
          ops: [
            "entre aurais y fini",
            "al final"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«Dijo que iba a salir.»",
      resp: "Il a dit qu'il allait sortir.",
      porque: "allait.",
      pasos: [
        {
          q: "¿Futur proche → ?",
          ops: [
            "aller en imparfait",
            "aller en presente"
          ],
          ok: 0
        },
        {
          q: "¿Forma?",
          ops: [
            "allait",
            "va"
          ],
          ok: 0
        },
        {
          q: "¿Qué sigue?",
          ops: [
            "infinitivo: sortir",
            "participio"
          ],
          ok: 0
        }
      ]
    }
  ],
  comprueba: [
    { q: "«Je viendrai» en estilo indirecto pasado es…", o: ["il a dit qu'il viendrait", "il a dit qu'il viendra"], a: 0, b: "gr", porque: "Condicional." },
    { q: "El futuro anterior pasa a…", o: ["conditionnel passé", "plus-que-parfait"], a: 0, b: "gr", porque: "aurait fini." },
    { q: "«Je vais partir» pasa a…", o: ["il allait partir", "il irait partir"], a: 0, b: "gr", porque: "aller en imparfait." }
  ],
  practica: [
    { fase: "guiada", c: ["b2fd-cond", "b2fd-passe"], k: "sort", ask: "¿Conditionnel présent o passé?", q: "Clasifica.", cats: ["conditionnel présent", "conditionnel passé"], items: [["il viendrait", 0], ["elle ferait", 0], ["on verrait", 0], ["tu serais", 0], ["il serait venu", 1], ["elle aurait fait", 1], ["on aurait vu", 1], ["tu aurais été", 1]], pista: "¿Auxiliar + participio?", why: "Tiempos." },
    { fase: "guiada", c: ["b2fd-cond"], k: "choice", ask: "«Me dijo que llamaría.»", q: "«Il m'a dit qu'il ___.»", o: ["appellerait", "appellera"], a: 0, pista: "Introductor en pasado.", why: "<b>appellerait</b>." },
    { fase: "guiada", c: ["b2fd-cond"], k: "choice", ask: "«Sabía que ganarías.»", q: "«___»", o: ["Je savais que tu gagnerais.", "Je savais que tu gagneras."], a: 0, pista: "Condicional.", why: "<b>gagnerais</b>." },
    { fase: "indep", c: ["b2fd-passe"], k: "choice", ask: "«Pensaba que ya habrías terminado.»", q: "«___»", o: ["Je pensais que tu aurais déjà fini.", "Je pensais que tu auras déjà fini."], a: 0, why: "<b>aurais fini</b>." },
    { fase: "indep", c: ["b2fd-cond"], k: "fill", ask: "Futuro en el pasado de pleuvoir.", q: "Ils ont annoncé qu'il ___ demain.", acc: ["pleuvrait"], why: "<b>pleuvrait</b>." },
    { fase: "indep", c: ["b2fd-cond"], k: "fill", ask: "Futuro en el pasado de être (tu).", q: "Tu m'avais juré que tu ne ___ pas en retard.", acc: ["serais"], why: "<b>serais</b>." },
    { fase: "aplica", c: ["b2fd-cond", "b2fd-passe"], k: "match", ask: "Une cada frase con su versión indirecta.", q: "Directo → «il a dit qu'…»", pairs: [["« Je partirai. »", "il partirait."], ["« J'aurai fini. »", "il aurait fini."], ["« Je vais sortir. »", "il allait sortir."], ["« Je peux venir. »", "il pouvait venir."]], why: "Transformaciones." },
    { fase: "aplica", c: ["b2fd-cond"], k: "spot", ask: "Encuentra el error.", s: "Le météorologue avait annoncé qu'il [neigera] le lendemain .", fix: "neigerait", why: "<b>neigerait</b>." },
    { fase: "aplica", c: ["b2fd-passe"], k: "spot", ask: "Encuentra el error.", s: "Paul a dit qu'il [va] partir tôt .", fix: "allait", why: "<b>allait</b>." },
    { fase: "dominio", c: ["b2fd-cond"], k: "order", ask: "Ordena: «Me prometió que vendría».", tokens: ["Il m'a promis", "qu'il", "viendrait."], why: "<b>Il m'a promis qu'il viendrait.</b>" },
    { fase: "dominio", c: ["b2fd-passe"], k: "choice", ask: "«Pensaba que habría terminado mi trabajo a las seis.»", q: "«Je pensais que j'___ fini mon travail à six heures.»", o: ["aurais", "aurai"], a: 0, why: "<b>aurais</b>." },
    { fase: "dominio", c: ["b2fd-cond", "b2fd-passe"], k: "listen", say: "À vingt ans, je ne savais pas encore que je deviendrais professeur.", acc: ["À vingt ans, je ne savais pas encore que je deviendrais professeur."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>À vingt ans, je ne savais pas encore que je deviendrais professeur.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paul"], previo: [] }
};

E["b12-concordance-temps"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "La concordance des temps dans le récit",
  objetivo: {
    que: "Vas a situar cada acción de un relato en pasado: antes (plus-que-parfait), al mismo tiempo (imparfait / passé composé) y después (conditionnel).",
    corto: "Quand je suis arrivé, le film avait déjà commencé.",
    podras: ["Usar el plus-que-parfait para lo anterior al momento del relato.", "Usar el imparfait para el fondo y el passé composé para la acción.", "Usar el conditionnel para lo posterior y los marcadores la veille, le lendemain, ce jour-là."],
    iconos: ["ic2/pergamino", "ic2/reloj-arena", "ic2/libro"],
    previos: ["Passé composé o imparfait (B1.1, lección 1), el plus-que-parfait (B1.1, lección 2) y el futuro en el pasado (lección 20)."],
    capacidad: "Ahora escribes un relato sin mezclar tiempos."
  },
  requiere: R("b1pq-usage", "b1pi-fait", "b2fd-cond"), recupera: ["b1pq-usage"],
  conceptos: {
    "b2ct-anter": { n: "anterior al relato → plus-que-parfait (il m'a dit qu'il avait perdu ses clés); fondo → imparfait; acción → passé composé", b: "gr" },
    "b2ct-poster": { n: "posterior → conditionnel (il ignorait qu'il deviendrait célèbre); marcadores: la veille, le lendemain, ce jour-là", b: "gr" }
  },
  video: {
    titulo: "La concordancia de tiempos en el relato",
    voz: "es-CO-SalomeNeural",
    escenas: [
      {
        v: "persona",
        cap: "Para qué sirve",
        fondo: "esc/escritorio-noche",
        img: "pj/camila-sorprendida",
        fr: "Quand je suis arrivée au cinéma, le film avait déjà commencé.",
        es: "Cuando llegué al cine, la película ya había empezado.",
        nota: "Llegué tarde",
        seg: [
          {
            es: "Camila llegó tarde al cine: le film avait déjà commencé. Sabía que el día sería largo porque había dormido mal. Antes, durante y después, en un solo relato."
          },
          {
            fr: "Quand je suis arrivée au cinéma, le film avait déjà commencé.",
            p: 1
          },
          {
            es: "Hoy aprendes a ordenar los tiempos en un relato en pasado.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Antes",
        titulo: "Plus-que-parfait",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "il avait plu · elle était partie · on avait fini · j'avais oublié",
            es: "anterior al momento del relato"
          },
          {
            p: 2,
            fr: "Quand je suis arrivé, ils étaient déjà partis.",
            es: "Cuando llegué, ya se habían ido."
          },
          {
            p: 3,
            fr: "Il m'a raconté qu'il avait vécu à Rome.",
            es: "Me contó que había vivido en Roma."
          }
        ],
        seg: [
          {
            es: "Lo anterior al momento del relato va en plus-que-parfait.",
            p: 1
          },
          {
            fr: "il avait plu, elle était partie, on avait fini",
            p: 1
          },
          {
            fr: "Quand je suis arrivé, ils étaient déjà partis.",
            p: 2
          },
          {
            fr: "Il m'a raconté qu'il avait vécu à Rome.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Durante y después",
        titulo: "imparfait / passé composé · conditionnel",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "il pleuvait · il faisait nuit · il a appelé · je suis arrivé",
            es: "simultáneo: imparfait (fondo) o passé composé (puntual)"
          },
          {
            p: 2,
            fr: "il pleuvrait · elle partirait · Il ignorait qu'il deviendrait célèbre.",
            es: "posterior: conditionnel"
          },
          {
            p: 3,
            fr: "Ce matin-là, je savais que la journée serait longue, car j'avais mal dormi.",
            es: "las tres cosas juntas"
          }
        ],
        seg: [
          {
            es: "Lo simultáneo: imparfait para el fondo, passé composé para lo puntual.",
            p: 1
          },
          {
            fr: "il pleuvait, il faisait nuit, il a appelé",
            p: 1
          },
          {
            es: "Lo posterior: condicional.",
            p: 2
          },
          {
            fr: "Il ignorait qu'il deviendrait célèbre.",
            p: 2
          },
          {
            fr: "Ce matin-là, je savais que la journée serait longue, car j'avais mal dormi.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Los marcadores",
        titulo: "la veille, le lendemain",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "la veille · le lendemain · ce jour-là · à ce moment-là",
            es: "la víspera · al día siguiente · ese día · en ese momento"
          },
          {
            p: 2,
            fr: "Paul m'a dit qu'il avait perdu ses clés la veille.",
            es: "Paul me dijo que había perdido sus llaves la víspera."
          },
          {
            p: 3,
            fr: "Elle était fatiguée parce qu'elle n'avait pas dormi.",
            es: "Estaba cansada porque no había dormido."
          }
        ],
        seg: [
          {
            es: "Los marcadores del relato: la veille, le lendemain, ce jour-là.",
            p: 1
          },
          {
            fr: "la veille, le lendemain, ce jour-là, à ce moment-là",
            p: 1
          },
          {
            fr: "Paul m'a dit qu'il avait perdu ses clés la veille.",
            p: 2
          },
          {
            fr: "Elle était fatiguée parce qu'elle n'avait pas dormi.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En la vida real",
        titulo: "Llegué tarde",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Ce matin-là, je savais que la journée serait longue, car j'avais mal dormi.",
            es: "Esa mañana sabía que el día sería largo, porque había dormido mal."
          },
          {
            p: 2,
            fr: "Qu'est-ce qui s'est passé ?",
            es: "¿Qué pasó?"
          },
          {
            p: 3,
            fr: "Quand je suis arrivée au cinéma, le film avait déjà commencé. Mes amis étaient déjà partis.",
            es: "Cuando llegué al cine, la película ya había empezado. Mis amigos ya se habían ido."
          },
          {
            p: 4,
            fr: "Paul m'a dit qu'il avait perdu ses clés la veille. Il m'a raconté qu'il avait vécu à Rome. Nous étions déjà partis quand il a appelé.",
            es: "Paul me dijo que había perdido sus llaves la víspera. Me contó que había vivido en Roma. Ya nos habíamos ido cuando llamó."
          }
        ],
        seg: [
          {
            es: "Escucha cómo suena en una conversación de verdad."
          },
          {
            fr: "Ce matin-là, je savais que la journée serait longue, car j'avais mal dormi.",
            p: 1
          },
          {
            fr: "Qu'est-ce qui s'est passé ?",
            p: 2
          },
          {
            fr: "Quand je suis arrivée au cinéma, le film avait déjà commencé. Mes amis étaient déjà partis.",
            p: 3
          },
          {
            fr: "Paul m'a dit qu'il avait perdu ses clés la veille. Il m'a raconté qu'il avait vécu à Rome. Nous étions déjà partis quand il a appelé.",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Contraste con el español",
        titulo: "Había perdido",
        mz: "m2d/alerta",
        items: [
          {
            p: 1,
            regla: "igual que en español: me dijo que había perdido → qu'il avait perdu"
          },
          {
            p: 2,
            regla: "sabía que sería → je savais que ce serait (no «sera»)"
          },
          {
            p: 3,
            regla: "la veille = antes del momento → plus-que-parfait"
          }
        ],
        seg: [
          {
            es: "Funciona como en español: me dijo que había perdido.",
            p: 1
          },
          {
            es: "Y sabía que sería, con condicional.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Il m'a dit qu'il a perdu ses clés.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Il m'a dit qu'il avait perdu ses clés.",
          es: "Anterior → plus-que-parfait."
        },
        seg: [
          {
            es: "Primera trampa: el passé composé.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Il m'a dit qu'il avait perdu ses clés.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Il était triste parce que son chien est mort la veille.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Il était triste parce que son chien était mort la veille.",
          es: "La veille: antes del momento."
        },
        seg: [
          {
            es: "Segunda trampa: otra vez lo anterior.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Il était triste parce que son chien était mort la veille.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Ce jour-là, je savais que ce sera difficile.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Ce jour-là, je savais que ce serait difficile.",
          es: "Posterior → condicional."
        },
        seg: [
          {
            es: "Una trampa más.",
            p: 1
          },
          {
            es: "Usamos el futuro.",
            p: 1
          },
          {
            es: "Lo correcto es:",
            p: 2
          },
          {
            fr: "Ce jour-là, je savais que ce serait difficile.",
            p: 2
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/pensativo",
        q: "«Cuando llegué, ya se habían ido.»",
        o: [
          "Quand je suis arrivé, ils étaient déjà partis.",
          "Il m'a dit qu'il a perdu ses clés."
        ],
        a: 0,
        bien: "¡Eso es! Étaient partis.",
        mal: "Anterior: plus-que-parfait.",
        seg: [
          {
            es: "Te toca. ¿Cuál es la traducción?"
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/confundido",
        q: "«Ce jour-là, je savais que ce ___ difficile.»",
        o: [
          "serait",
          "sera"
        ],
        a: 0,
        bien: "¡Muy bien! Serait.",
        mal: "Posterior → condicional.",
        seg: [
          {
            es: "Una más. ¿Serait o sera?"
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Repite conmigo",
        titulo: "Repite conmigo",
        mz: "m2d/explica",
        items: [
          {
            p: 1,
            fr: "Quand je suis arrivé, ils étaient déjà partis.",
            es: "Cuando llegué, ya se habían ido."
          },
          {
            p: 2,
            fr: "Il ignorait qu'il deviendrait célèbre.",
            es: "No sabía que se haría famoso."
          },
          {
            p: 3,
            fr: "Elle était fatiguée parce qu'elle n'avait pas dormi.",
            es: "Estaba cansada porque no había dormido."
          }
        ],
        seg: [
          {
            es: "Ahora tú. Escucha cada frase y repítela en voz alta."
          },
          {
            fr: "Quand je suis arrivé, ils étaient déjà partis.",
            p: 1
          },
          {
            es: "Otra vez.",
            p: 1
          },
          {
            fr: "Quand je suis arrivé, ils étaient déjà partis.",
            p: 1
          },
          {
            fr: "Il ignorait qu'il deviendrait célèbre.",
            p: 2
          },
          {
            es: "Otra vez.",
            p: 2
          },
          {
            fr: "Il ignorait qu'il deviendrait célèbre.",
            p: 2
          },
          {
            fr: "Elle était fatiguée parce qu'elle n'avait pas dormi.",
            p: 3
          },
          {
            es: "Otra vez.",
            p: 3
          },
          {
            fr: "Elle était fatiguée parce qu'elle n'avait pas dormi.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Repaso",
        titulo: "Resumen",
        mz: "m2d/celebrar",
        items: [
          {
            p: 1,
            tabla: [
              [
                "Momento",
                "Tiempo"
              ],
              [
                "anterior",
                "plus-que-parfait: il avait plu"
              ],
              [
                "simultáneo (fondo)",
                "imparfait: il pleuvait"
              ],
              [
                "simultáneo (puntual)",
                "passé composé: il a appelé"
              ],
              [
                "posterior",
                "conditionnel: il pleuvrait"
              ],
              [
                "marcadores",
                "la veille · le lendemain · ce jour-là"
              ]
            ]
          },
          {
            p: 2,
            regla: "Antes, durante y después"
          }
        ],
        seg: [
          {
            es: "Repasemos.",
            p: 1
          },
          {
            es: "Ordenar un relato en pasado.",
            p: 1
          },
          {
            es: "Con la veille y le lendemain. ¡Ahora, a practicar!",
            p: 2
          }
        ]
      }
    ]
  },
  contexto: {
    titulo: "Llegué tarde", img: "bg-paris", yo: "camila",
    escena: "Camila cuenta un día complicado.",
    pj: PJ,
    lineas: [
      ["camila", "Ce matin-là, je savais que la journée serait longue, car j'avais mal dormi.", "Esa mañana sabía que el día sería largo, porque había dormido mal."],
      ["hugo", "Qu'est-ce qui s'est passé ?", "¿Qué pasó?"],
      ["camila", "Quand je suis arrivée au cinéma, le film avait déjà commencé. Mes amis étaient déjà partis.", "Cuando llegué al cine, la película ya había empezado. Mis amigos ya se habían ido."],
      ["hugo", "Paul m'a dit qu'il avait perdu ses clés la veille. Il m'a raconté qu'il avait vécu à Rome. Nous étions déjà partis quand il a appelé.", "Paul me dijo que había perdido sus llaves la víspera. Me contó que había vivido en Roma. Ya nos habíamos ido cuando llamó."]
    ],
    fijate: "Fíjate: j'avais mal dormi, avait commencé, étaient partis, avait perdu (antes); je suis arrivée, il a appelé (acción); serait longue (después); la veille, ce matin-là."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Antes, durante, después",
      idea: "En un relato en pasado, el momento de la historia es el punto de referencia. Lo anterior va en plus-que-parfait: Il avait déjà mangé quand je suis arrivé. Lo simultáneo va en imparfait (fondo, descripción) o passé composé (acción puntual). Lo posterior va en conditionnel: Il savait qu'il réussirait. Marcadores del relato: la veille (la víspera), le lendemain (al día siguiente), ce jour-là, à ce moment-là.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Momento"], [
        ["il avait plu · elle était partie · on avait fini · j'avais oublié", "había llovido · se había ido · habíamos terminado · había olvidado", "antes (plus-que-parfait)"],
        ["il pleuvrait · elle partirait · on finirait · j'oublierais", "llovería · se iría · terminaríamos · olvidaría", "después (conditionnel)"],
        ["il pleuvait · il faisait nuit", "llovía · era de noche", "fondo (imparfait)"],
        ["il a appelé · je suis arrivé", "llamó · llegué", "acción (passé composé)"],
        ["Quand je suis arrivé, ils étaient déjà partis.", "Cuando llegué, ya se habían ido.", "antes"],
        ["Il m'a raconté qu'il avait vécu à Rome.", "Me contó que había vivido en Roma.", "antes"],
        ["Il ignorait qu'il deviendrait célèbre.", "No sabía que se haría famoso.", "después"],
        ["elle n'avait pas dormi · avait · nous étions partis · étions · était mort · était", "no había dormido · nos habíamos ido · había muerto", "plus-que-parfait"],
        ["la veille · le lendemain · ce jour-là · à ce moment-là", "la víspera · al día siguiente · ese día · en ese momento", "marcadores"]
      ]],
      ej: [["Quand je suis arrivé, le film avait déjà commencé.", "Cuando llegué, la película ya había empezado."], ["Elle savait qu'elle ne le reverrait jamais.", "Sabía que no volvería a verlo nunca."], ["Il m'a dit qu'il avait perdu ses clés.", "Me dijo que había perdido las llaves."]] },
    {
      id: "ojo",
      tipo: "ojo",
      titulo: "Errores frecuentes",
      intro: "Tres errores que cometemos casi todos los hispanohablantes. Cázalos uno por uno.",
      errores: [
        {
          sit: "Camila cuenta:",
          frase: "Il m'a dit qu'il a perdu ses clés.",
          mal: "a perdu",
          bien: "avait perdu",
          porque: "Usamos el passé composé.",
          truco: "Anterior al relato → plus-que-parfait."
        },
        {
          sit: "Hugo cuenta:",
          frase: "Il était triste parce que son chien est mort la veille.",
          mal: "est mort",
          bien: "était mort",
          porque: "Usamos el passé composé.",
          truco: "La veille: antes del momento."
        },
        {
          sit: "Camila cuenta:",
          frase: "Ce jour-là, je savais que ce sera difficile.",
          mal: "sera",
          bien: "serait",
          porque: "Usamos el futuro.",
          truco: "Posterior → condicional."
        }
      ]
    }
  ],
  ejemplos: [
    {
      sit: "«Cuando llegué, ya se habían ido.»",
      resp: "Quand je suis arrivé, ils étaient déjà partis.",
      porque: "anterior.",
      pasos: [
        {
          q: "¿Qué pasó primero?",
          ops: [
            "que se fueran",
            "que yo llegara"
          ],
          ok: 0
        },
        {
          q: "¿Tiempo?",
          ops: [
            "plus-que-parfait",
            "passé composé"
          ],
          ok: 0
        },
        {
          q: "¿Partir lleva…?",
          ops: [
            "être: étaient partis",
            "avoir"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«No sabía que se haría famoso.»",
      resp: "Il ignorait qu'il deviendrait célèbre.",
      porque: "posterior.",
      pasos: [
        {
          q: "¿Hacerse famoso fue…?",
          ops: [
            "posterior",
            "anterior"
          ],
          ok: 0
        },
        {
          q: "¿Tiempo?",
          ops: [
            "condicional",
            "futuro"
          ],
          ok: 0
        },
        {
          q: "¿Devenir en condicional?",
          ops: [
            "deviendrait",
            "deviendra"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«Estaba cansada porque no había dormido.»",
      resp: "Elle était fatiguée parce qu'elle n'avait pas dormi.",
      porque: "anterior.",
      pasos: [
        {
          q: "¿Estaba cansada?",
          ops: [
            "imparfait: était",
            "passé composé"
          ],
          ok: 0
        },
        {
          q: "¿No había dormido?",
          ops: [
            "plus-que-parfait",
            "imparfait"
          ],
          ok: 0
        },
        {
          q: "¿La frase?",
          ops: [
            "Elle était fatiguée parce qu'elle n'avait pas dormi.",
            "Elle était fatiguée parce qu'elle n'a pas dormi."
          ],
          ok: 0
        }
      ]
    }
  ],
  comprueba: [
    { q: "Lo anterior al momento del relato va en…", o: ["plus-que-parfait", "conditionnel"], a: 0, b: "gr", porque: "Antes." },
    { q: "Lo posterior al momento del relato va en…", o: ["conditionnel", "passé composé"], a: 0, b: "gr", porque: "Después." },
    { q: "«Le lendemain» significa…", o: ["al día siguiente", "la víspera"], a: 0, b: "gr", porque: "Marcador." }
  ],
  practica: [
    { fase: "guiada", c: ["b2ct-anter", "b2ct-poster"], k: "sort", ask: "¿Antes o después del momento del relato?", q: "Clasifica.", cats: ["Antes", "Después"], items: [["il avait plu", 0], ["elle était partie", 0], ["on avait fini", 0], ["j'avais oublié", 0], ["il pleuvrait", 1], ["elle partirait", 1], ["on finirait", 1], ["j'oublierais", 1]], pista: "Plus-que-parfait: antes.", why: "Concordancia." },
    { fase: "guiada", c: ["b2ct-anter"], k: "choice", ask: "«Cuando llegué, ya se habían ido.»", q: "«Quand je suis arrivé, ils ___ déjà partis.»", o: ["étaient", "sont"], a: 0, pista: "Antes.", why: "<b>étaient</b>." },
    { fase: "guiada", c: ["b2ct-anter"], k: "choice", ask: "«Me contó que había vivido en Roma.»", q: "«___»", o: ["Il m'a raconté qu'il avait vécu à Rome.", "Il m'a raconté qu'il a vécu à Rome."], a: 0, pista: "Plus-que-parfait.", why: "<b>avait vécu</b>." },
    { fase: "indep", c: ["b2ct-poster"], k: "choice", es: true, ask: "«Il ignorait qu'il deviendrait célèbre.» Deviendrait expresa…", q: "Elige.", o: ["una acción posterior", "una acción anterior"], a: 0, why: "Posterior." },
    { fase: "indep", c: ["b2ct-anter"], k: "fill", ask: "Auxiliar en plus-que-parfait.", q: "Elle était fatiguée parce qu'elle n'___ pas dormi.", acc: ["avait"], why: "<b>avait</b>." },
    { fase: "indep", c: ["b2ct-anter"], k: "fill", ask: "Auxiliar en plus-que-parfait (nous).", q: "Nous ___ déjà partis quand il a appelé.", acc: ["étions"], why: "<b>étions</b>." },
    { fase: "aplica", c: ["b2ct-anter", "b2ct-poster"], k: "match", ask: "Une cada momento con su tiempo.", q: "Momento → tiempo", pairs: [["anterior", "plus-que-parfait"], ["fondo", "imparfait"], ["acción puntual", "passé composé"], ["posterior", "conditionnel"]], why: "Concordancia." },
    { fase: "aplica", c: ["b2ct-anter"], k: "spot", ask: "Encuentra el error.", s: "Il était triste parce que son chien [est] mort la veille .", fix: "était", why: "<b>était</b>." },
    { fase: "aplica", c: ["b2ct-poster"], k: "spot", ask: "Encuentra el error.", s: "Ce jour-là , je savais que ce [sera] difficile .", fix: "serait", why: "<b>serait</b>." },
    { fase: "dominio", c: ["b2ct-anter"], k: "order", ask: "Ordena: «Él ya había cenado».", tokens: ["Il", "avait déjà", "dîné."], why: "<b>Il avait déjà dîné.</b>" },
    { fase: "dominio", c: ["b2ct-poster"], k: "choice", ask: "«Sabía que no volvería a verlo nunca.»", q: "«Elle savait qu'elle ne le ___ jamais.»", o: ["reverrait", "reverra"], a: 0, why: "<b>reverrait</b>." },
    { fase: "dominio", c: ["b2ct-anter", "b2ct-poster"], k: "listen", say: "Ce matin-là, je savais que la journée serait longue, car j'avais mal dormi.", acc: ["Ce matin-là, je savais que la journée serait longue, car j'avais mal dormi."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Ce matin-là, je savais que la journée serait longue, car j'avais mal dormi.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paul", "Rome"], previo: [] }
};

E["b12-participe-compose"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Le participe composé : ayant fini, étant parti",
  objetivo: {
    que: "Vas a condensar dos acciones con ayant / étant + participio, propio de la lengua escrita.",
    corto: "Ayant terminé, il est sorti. · Étant arrivée en retard, elle…",
    podras: ["Formar el participio compuesto: ayant + participio, o étant + participio con los verbos de être.", "Hacer la concordancia con étant: étant partie, étant arrivés.", "Mantener el mismo sujeto en las dos partes de la frase."],
    iconos: ["ic2/lapiz", "ic2/pergamino", "ic2/reloj-arena"],
    previos: ["El gerundio y el participio presente (B1.1, lección 5) y el infinitivo pasado (lección 14)."],
    capacidad: "Ahora escribes con más elegancia: «N'ayant pas reçu de réponse…»."
  },
  requiere: R("b1ge-forme", "b2ip-forme"), recupera: ["b1ge-forme"],
  conceptos: {
    "b2pc-forme": { n: "ayant + participio (ayant fini); étant + participio con verbos de être, con concordancia (étant arrivée)", b: "gr" },
    "b2pc-sujet": { n: "acción anterior o causa; el sujeto debe ser el mismo que el del verbo principal; = comme il avait…, après avoir…", b: "gr" }
  },
  video: {
    titulo: "El participio compuesto: ayant fini, étant parti",
    voz: "es-CO-SalomeNeural",
    escenas: [
      {
        v: "persona",
        cap: "Para qué sirve",
        fondo: "esc/escritorio-noche",
        img: "pj/camila-cafe-laptop",
        fr: "Écoute mon courriel : « N'ayant pas reçu votre réponse, je me permets de vous relancer. »",
        es: "Escucha mi correo: «Al no haber recibido su respuesta, me permito escribirle de nuevo».",
        nota: "El correo formal",
        seg: [
          {
            es: "Camila escribe un correo elegante: n'ayant pas reçu votre réponse. Y luego: étant arrivée en retard. Una forma formal de decir como o después de."
          },
          {
            fr: "Écoute mon courriel : « N'ayant pas reçu votre réponse, je me permets de vous relancer. »",
            p: 1
          },
          {
            es: "Hoy aprendes el participio compuesto y su regla clave.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Cómo se forma",
        titulo: "ayant / étant + participio",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Ayant terminé, il est sorti. · ayant vu",
            es: "ayant + participio"
          },
          {
            p: 2,
            fr: "Étant partis tôt, … · étant arrivée",
            es: "étant + participio (verbos con être): concuerda"
          },
          {
            p: 3,
            fr: "N'ayant pas reçu de réponse, … · N'ayant pas compris,",
            es: "negativo"
          }
        ],
        seg: [
          {
            es: "Se forma con ayant más participio: ayant terminé.",
            p: 1
          },
          {
            fr: "Ayant terminé, il est sorti.",
            p: 1
          },
          {
            es: "Con los verbos de être: étant, y concuerda. Étant arrivée.",
            p: 2
          },
          {
            fr: "Étant partis tôt… Étant arrivée…",
            p: 2
          },
          {
            fr: "N'ayant pas reçu de réponse… N'ayant pas compris…",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Qué significa",
        titulo: "Acción anterior, a menudo causa",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Ayant fini, = Après avoir fini,",
            es: "después de"
          },
          {
            p: 2,
            fr: "Étant malade, = Comme il était malade,",
            es: "como (causa)"
          },
          {
            p: 3,
            fr: "N'ayant pas compris, = Comme il n'avait pas compris, · Étant rentrée, = Après être rentrée,",
            es: "equivalencias"
          }
        ],
        seg: [
          {
            es: "Expresa una acción anterior, a menudo con valor de causa. Ayant fini equivale a après avoir fini.",
            p: 1
          },
          {
            fr: "Ayant fini, après avoir fini.",
            p: 1
          },
          {
            fr: "Étant malade, comme il était malade.",
            p: 2
          },
          {
            fr: "N'ayant pas compris, comme il n'avait pas compris.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "La regla clave",
        titulo: "El mismo sujeto",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            regla: "el sujeto del participio = el sujeto de la frase principal"
          },
          {
            p: 2,
            fr: "Ayant perdu ses clés, il a dû appeler un serrurier.",
            es: "él perdió y él llamó"
          },
          {
            p: 3,
            fr: "Étant arrivés tôt, nous avons trouvé de bonnes places.",
            es: "nosotros llegamos y nosotros encontramos"
          }
        ],
        seg: [
          {
            es: "La regla clave: el sujeto debe ser el mismo en las dos partes.",
            p: 1
          },
          {
            fr: "Ayant perdu ses clés, il a dû appeler un serrurier.",
            p: 2
          },
          {
            fr: "Étant arrivés tôt, nous avons trouvé de bonnes places.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En la vida real",
        titulo: "El correo formal",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Écoute mon courriel : « N'ayant pas reçu votre réponse, je me permets de vous relancer. »",
            es: "Escucha mi correo: «Al no haber recibido su respuesta, me permito escribirle de nuevo»."
          },
          {
            p: 2,
            fr: "Très élégant ! Et ensuite ?",
            es: "¡Muy elegante! ¿Y después?"
          },
          {
            p: 3,
            fr: "« Étant arrivée en retard à l'examen, j'ai raté le début. Ayant perdu mon passeport, j'ai contacté le consulat. »",
            es: "«Como llegué tarde al examen, me perdí el inicio. Habiendo perdido mi pasaporte, contacté al consulado»."
          },
          {
            p: 4,
            fr: "Parfait. Ayant vu le film, je peux te conseiller : ajoute une formule de politesse. Étant partis tôt, nous avons trouvé de bonnes places, d'ailleurs !",
            es: "Perfecto. Habiendo visto la película, te puedo aconsejar: agrega una fórmula de cortesía. ¡Por cierto, como salimos temprano, encontramos buenos puestos!"
          }
        ],
        seg: [
          {
            es: "Escucha cómo suena en una conversación de verdad."
          },
          {
            fr: "Écoute mon courriel : « N'ayant pas reçu votre réponse, je me permets de vous relancer. »",
            p: 1
          },
          {
            fr: "Très élégant ! Et ensuite ?",
            p: 2
          },
          {
            fr: "« Étant arrivée en retard à l'examen, j'ai raté le début. Ayant perdu mon passeport, j'ai contacté le consulat. »",
            p: 3
          },
          {
            fr: "Parfait. Ayant vu le film, je peux te conseiller : ajoute une formule de politesse. Étant partis tôt, nous avons trouvé de bonnes places, d'ailleurs !",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Contraste con el español",
        titulo: "Habiendo terminado",
        mz: "m2d/alerta",
        items: [
          {
            p: 1,
            regla: "como «habiendo terminado», pero más usado en lo escrito formal"
          },
          {
            p: 2,
            regla: "perdre va con avoir: ayant perdu (no «étant perdu»)"
          },
          {
            p: 3,
            regla: "con étant, concordancia: étant arrivée"
          }
        ],
        seg: [
          {
            es: "Es como nuestro habiendo terminado, muy usado en lo escrito formal.",
            p: 1
          },
          {
            es: "Y elige bien entre ayant y étant.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Ayant fini le travail, le patron m'a payé.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Ayant fini le travail, j'ai été payé.",
          es: "El sujeto debe coincidir."
        },
        seg: [
          {
            es: "Primera trampa: cambiar de sujeto.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Ayant fini le travail, j'ai été payé.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Étant perdu mon passeport, j'ai contacté le consulat.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Ayant perdu mon passeport, j'ai contacté le consulat.",
          es: "Perdre va con avoir."
        },
        seg: [
          {
            es: "Segunda trampa: el auxiliar.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Ayant perdu mon passeport, j'ai contacté le consulat.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Étant arrivé en retard, Laura a raté le début.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Étant arrivée en retard, Laura a raté le début.",
          es: "Con étant, concordancia."
        },
        seg: [
          {
            es: "Una trampa más.",
            p: 1
          },
          {
            es: "Olvidamos la concordancia.",
            p: 1
          },
          {
            es: "Lo correcto es:",
            p: 2
          },
          {
            fr: "Étant arrivée en retard, Laura a raté le début.",
            p: 2
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/pensativo",
        q: "«Habiendo perdido mi pasaporte…»",
        o: [
          "Ayant perdu mon passeport…",
          "Étant perdu mon passeport…"
        ],
        a: 0,
        bien: "¡Eso es! Ayant perdu.",
        mal: "Perdre con avoir.",
        seg: [
          {
            es: "Te toca. ¿Cuál es correcta?"
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/confundido",
        q: "«Étant ___ en retard, Laura a raté le début.»",
        o: [
          "arrivée",
          "arrivé"
        ],
        a: 0,
        bien: "¡Muy bien! Arrivée.",
        mal: "Con étant, concordancia.",
        seg: [
          {
            es: "Una más. ¿Arrivée o arrivé?"
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Repite conmigo",
        titulo: "Repite conmigo",
        mz: "m2d/explica",
        items: [
          {
            p: 1,
            fr: "Ayant terminé, il est sorti.",
            es: "Habiendo terminado, salió."
          },
          {
            p: 2,
            fr: "Étant partis tôt, …",
            es: "Como se fueron temprano…"
          },
          {
            p: 3,
            fr: "N'ayant pas reçu de réponse, …",
            es: "Al no haber recibido respuesta…"
          }
        ],
        seg: [
          {
            es: "Ahora tú. Escucha cada frase y repítela en voz alta."
          },
          {
            fr: "Ayant terminé, il est sorti.",
            p: 1
          },
          {
            es: "Otra vez.",
            p: 1
          },
          {
            fr: "Ayant terminé, il est sorti.",
            p: 1
          },
          {
            fr: "Étant partis tôt, …",
            p: 2
          },
          {
            es: "Otra vez.",
            p: 2
          },
          {
            fr: "Étant partis tôt, …",
            p: 2
          },
          {
            fr: "N'ayant pas reçu de réponse, …",
            p: 3
          },
          {
            es: "Otra vez.",
            p: 3
          },
          {
            fr: "N'ayant pas reçu de réponse, …",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Repaso",
        titulo: "Resumen",
        mz: "m2d/celebrar",
        items: [
          {
            p: 1,
            tabla: [
              [
                "Forma",
                "Ejemplo"
              ],
              [
                "ayant + participio",
                "Ayant terminé, il est sorti."
              ],
              [
                "étant + participio (concuerda)",
                "Étant partis tôt, nous…"
              ],
              [
                "negativo",
                "N'ayant pas reçu de réponse, …"
              ],
              [
                "regla",
                "mismo sujeto en las dos partes"
              ]
            ]
          },
          {
            p: 2,
            regla: "Ayant o étant + participio, mismo sujeto"
          }
        ],
        seg: [
          {
            es: "Repasemos.",
            p: 1
          },
          {
            es: "Una acción anterior, a menudo causa.",
            p: 1
          },
          {
            es: "Muy útil en lo escrito formal. ¡Ahora, a practicar!",
            p: 2
          }
        ]
      }
    ]
  },
  contexto: {
    titulo: "El correo formal", img: "bg-biblioteca", yo: "camila",
    escena: "Camila escribe un correo a la universidad.",
    pj: PJ,
    lineas: [
      ["camila", "Écoute mon courriel : « N'ayant pas reçu votre réponse, je me permets de vous relancer. »", "Escucha mi correo: «Al no haber recibido su respuesta, me permito escribirle de nuevo»."],
      ["hugo", "Très élégant ! Et ensuite ?", "¡Muy elegante! ¿Y después?"],
      ["camila", "« Étant arrivée en retard à l'examen, j'ai raté le début. Ayant perdu mon passeport, j'ai contacté le consulat. »", "«Como llegué tarde al examen, me perdí el inicio. Habiendo perdido mi pasaporte, contacté al consulado»."],
      ["hugo", "Parfait. Ayant vu le film, je peux te conseiller : ajoute une formule de politesse. Étant partis tôt, nous avons trouvé de bonnes places, d'ailleurs !", "Perfecto. Habiendo visto la película, te puedo aconsejar: agrega una fórmula de cortesía. ¡Por cierto, como salimos temprano, encontramos buenos puestos!"]
    ],
    fijate: "Fíjate: n'ayant pas reçu, ayant perdu, ayant vu (avoir); étant arrivée, étant partis (être, con concordancia)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Formar y usar el participio compuesto",
      idea: "Formación: ayant + participio (ayant fini, ayant perdu) o étant + participio con los verbos que van con être (étant parti, étant arrivée). Con étant, el participio concuerda con el sujeto: Étant partie tôt, elle… Expresa una acción anterior, a menudo con valor de causa. Equivale a Comme il avait fini…, Après avoir fini… Regla clave: el sujeto debe ser el mismo en las dos partes.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Forma"], [
        ["Ayant terminé, il est sorti. · Ayant · ayant vu", "Habiendo terminado, salió.", "ayant"],
        ["… mangé · … lu · … écrit · … oublié (ayant)", "habiendo comido / leído / escrito / olvidado", "con avoir"],
        ["… venu · … sorti · … descendu · … resté (étant)", "habiendo venido / salido / bajado / quedado", "con être"],
        ["Étant partis tôt, … · Étant · étant arrivée · arrivée", "Como se fueron temprano…", "étant + concordancia"],
        ["N'ayant pas reçu de réponse, … · N'ayant pas compris,", "Al no haber recibido respuesta…", "negación"],
        ["Ayant fini, = Après avoir fini,", "habiendo terminado", "equivalencia"],
        ["Étant malade, = Comme il était malade,", "como estaba enfermo", "equivalencia"],
        ["N'ayant pas compris, = Comme il n'avait pas compris,", "como no había entendido", "equivalencia"],
        ["Étant rentrée, = Après être rentrée,", "después de volver", "equivalencia"]
      ]],
      ej: [["Ayant perdu ses clés, il a dû appeler un serrurier.", "Habiendo perdido las llaves, tuvo que llamar a un cerrajero."], ["Étant arrivés tôt, nous avons trouvé de bonnes places.", "Como llegamos pronto, encontramos buenos sitios."], ["N'ayant pas reçu de réponse, je vous écris à nouveau.", "Al no haber recibido respuesta, le escribo de nuevo."]] },
    {
      id: "ojo",
      tipo: "ojo",
      titulo: "Errores frecuentes",
      intro: "Tres errores que cometemos casi todos los hispanohablantes. Cázalos uno por uno.",
      errores: [
        {
          sit: "Hugo escribe:",
          frase: "Ayant fini le travail, le patron m'a payé.",
          mal: "le patron m'a payé",
          bien: "j'ai été payé",
          porque: "Cambiamos de sujeto.",
          truco: "El sujeto debe coincidir."
        },
        {
          sit: "Camila escribe:",
          frase: "Étant perdu mon passeport, j'ai contacté le consulat.",
          mal: "Étant perdu",
          bien: "Ayant perdu",
          porque: "Usamos étant con perdre.",
          truco: "Perdre va con avoir."
        },
        {
          sit: "Camila escribe:",
          frase: "Étant arrivé en retard, Laura a raté le début.",
          mal: "arrivé",
          bien: "arrivée",
          porque: "Olvidamos la concordancia.",
          truco: "Con étant, concordancia."
        }
      ]
    }
  ],
  ejemplos: [
    {
      sit: "«Habiendo terminado, salió.»",
      resp: "Ayant terminé, il est sorti.",
      porque: "ayant.",
      pasos: [
        {
          q: "¿Terminer lleva…?",
          ops: [
            "avoir: ayant",
            "être: étant"
          ],
          ok: 0
        },
        {
          q: "¿Mismo sujeto?",
          ops: [
            "sí: il",
            "no"
          ],
          ok: 0
        },
        {
          q: "¿Equivale a…?",
          ops: [
            "Après avoir terminé",
            "Avant de terminer"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«Como se fueron temprano…»",
      resp: "Étant partis tôt, …",
      porque: "étant.",
      pasos: [
        {
          q: "¿Partir lleva…?",
          ops: [
            "être: étant",
            "avoir"
          ],
          ok: 0
        },
        {
          q: "¿Concordancia?",
          ops: [
            "sí: partis",
            "no"
          ],
          ok: 0
        },
        {
          q: "¿Valor?",
          ops: [
            "causa",
            "condición"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«Al no haber recibido respuesta…»",
      resp: "N'ayant pas reçu de réponse, …",
      porque: "negativo.",
      pasos: [
        {
          q: "¿Dónde va ne… pas?",
          ops: [
            "alrededor de ayant",
            "alrededor de reçu"
          ],
          ok: 0
        },
        {
          q: "¿Recevoir lleva…?",
          ops: [
            "avoir",
            "être"
          ],
          ok: 0
        },
        {
          q: "¿Registro?",
          ops: [
            "formal",
            "familiar"
          ],
          ok: 0
        }
      ]
    }
  ],
  comprueba: [
    { q: "Con los verbos de être, el participio compuesto usa…", o: ["étant", "ayant"], a: 0, b: "gr", porque: "étant parti." },
    { q: "En «Ayant fini, il est sorti», el sujeto de ayant fini es…", o: ["il", "otra persona"], a: 0, b: "gr", porque: "Mismo sujeto." },
    { q: "«Étant malade» equivale a…", o: ["Comme il était malade", "Après être malade"], a: 0, b: "gr", porque: "Causa." }
  ],
  practica: [
    { fase: "guiada", c: ["b2pc-forme"], k: "sort", ask: "¿Ayant o étant?", q: "Clasifica.", cats: ["ayant", "étant"], items: [["… mangé", 0], ["… lu", 0], ["… écrit", 0], ["… oublié", 0], ["… venu", 1], ["… sorti", 1], ["… descendu", 1], ["… resté", 1]], pista: "Movimiento: être.", why: "Auxiliares." },
    { fase: "guiada", c: ["b2pc-forme"], k: "choice", ask: "«Habiendo terminado, salió.»", q: "«___»", o: ["Ayant terminé, il est sorti.", "Étant terminé, il est sorti."], a: 0, pista: "terminer → avoir.", why: "<b>Ayant</b>." },
    { fase: "guiada", c: ["b2pc-forme"], k: "choice", ask: "«Como se fueron temprano…»", q: "«___, nous avons trouvé de bonnes places.»", o: ["Étant partis tôt", "Ayant partis tôt"], a: 0, pista: "partir → être.", why: "<b>Étant partis</b>." },
    { fase: "indep", c: ["b2pc-sujet"], k: "choice", ask: "«Al no haber recibido respuesta, le escribo de nuevo.»", q: "«___ de réponse, je vous écris à nouveau.»", o: ["N'ayant pas reçu", "Ne pas ayant reçu"], a: 0, why: "<b>N'ayant pas reçu</b>." },
    { fase: "indep", c: ["b2pc-forme"], k: "fill", ask: "Participio compuesto de voir.", q: "___ vu le film, je peux vous le conseiller.", acc: ["Ayant", "ayant"], why: "<b>Ayant</b>." },
    { fase: "indep", c: ["b2pc-forme"], k: "fill", ask: "Participio de arriver (femenino).", q: "Étant ___ en retard, elle a pris un taxi.", acc: ["arrivée"], why: "<b>arrivée</b>." },
    { fase: "aplica", c: ["b2pc-sujet"], k: "match", ask: "Une cada participio con su equivalente.", q: "Participio → equivalente", pairs: [["Ayant fini,", "Après avoir fini,"], ["Étant malade,", "Comme il était malade,"], ["N'ayant pas compris,", "Comme il n'avait pas compris,"], ["Étant rentrée,", "Après être rentrée,"]], why: "Equivalencias." },
    { fase: "aplica", c: ["b2pc-forme"], k: "spot", ask: "Encuentra el error.", s: "[Étant] perdu mon passeport , j'ai contacté le consulat .", fix: "Ayant", why: "<b>Ayant</b>." },
    { fase: "aplica", c: ["b2pc-sujet"], k: "choice", ask: "¿Qué frase es correcta? (mismo sujeto)", q: "«___»", o: ["Ayant fini le travail, j'ai été payé.", "Ayant fini le travail, le patron m'a payé."], a: 0, why: "Mismo sujeto: <b>j'</b>." },
    { fase: "dominio", c: ["b2pc-forme"], k: "spot", ask: "Encuentra el error.", s: "Étant [arrivé] en retard , Laura a raté le début .", fix: "arrivée", why: "<b>arrivée</b>." },
    { fase: "dominio", c: ["b2pc-sujet"], k: "order", ask: "Ordena: «Habiendo leído el libro, prefiero la película».", tokens: ["Ayant lu", "le livre,", "je préfère le film."], why: "<b>Ayant lu le livre, je préfère le film.</b>" },
    { fase: "dominio", c: ["b2pc-forme", "b2pc-sujet"], k: "listen", say: "N'ayant pas reçu votre réponse, je me permets de vous relancer.", acc: ["N'ayant pas reçu votre réponse, je me permets de vous relancer."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>N'ayant pas reçu votre réponse, je me permets de vous relancer.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Laura"], previo: [] }
};

E["b12-passe-simple"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Reconnaître le passé simple",
  objetivo: {
    que: "Vas a reconocer el passé simple, el tiempo de la novela y la historia: il parla, elle finit, il fut, ils vinrent.",
    corto: "Il ouvrit la porte et entra. · Victor Hugo naquit en 1802.",
    podras: ["Reconocer las terminaciones en -a (verbos en -er): il parla, ils parlèrent.", "Reconocer las terminaciones en -it y -ut: il finit, il prit, il fut, il eut, il put.", "Identificar los irregulares: il vint, il fit, il vit, il naquit."],
    iconos: ["ic2/libro", "ic2/pergamino", "ic2/lapiz"],
    previos: ["Passé composé o imparfait (B1.1, lección 1) y los articuladores del relato (B1.1, lección 15)."],
    capacidad: "Ahora lees un cuento francés sin trabarte en los verbos."
  },
  requiere: R("b1pi-fait", "b1rc-ordre"), recupera: ["b1pi-fait"],
  conceptos: {
    "b2ps-reg": { n: "verbos en -er: -a, -èrent (il parla, ils parlèrent); en -ir / -re: -it (il finit, il prit, il sortit)", b: "gr" },
    "b2ps-irr": { n: "en -ut: il fut (être), il eut (avoir), il put, il dut, il connut; irregulares: il vint, il fit (faire), il vit, il naquit", b: "gr" }
  },
  video: {
    titulo: "Reconocer el passé simple",
    voz: "es-CO-SalomeNeural",
    escenas: [
      {
        v: "persona",
        cap: "Para qué sirve",
        fondo: "esc/biblioteca",
        img: "pj/camila-leyendo",
        fr: "« Un soir, le prince ouvrit la porte du château et entra sans bruit. »",
        es: "«Una noche, el príncipe abrió la puerta del castillo y entró sin hacer ruido».",
        nota: "El cuento",
        seg: [
          {
            es: "Camila lee un cuento: le prince ouvrit la porte et entra. Es el passé simple, el tiempo de los libros. No se habla, pero hay que reconocerlo."
          },
          {
            fr: "« Un soir, le prince ouvrit la porte du château et entra sans bruit. »",
            p: 1
          },
          {
            es: "Hoy aprendes a reconocer el passé simple cuando lees.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Qué es",
        titulo: "El tiempo del relato escrito",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            regla: "equivale al passé composé, pero solo en literatura e historia"
          },
          {
            p: 2,
            regla: "casi siempre en tercera persona"
          },
          {
            p: 3,
            fr: "Ils arrivèrent tard. = Ils sont arrivés tard.",
            es: "Llegaron tarde."
          }
        ],
        seg: [
          {
            es: "El passé simple equivale al passé composé, pero se usa en los libros, no al hablar.",
            p: 1
          },
          {
            es: "Casi siempre aparece en tercera persona.",
            p: 2
          },
          {
            fr: "Ils arrivèrent tard. Ils sont arrivés tard.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Las terminaciones",
        titulo: "-a, -it, -ut",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "il parla · il chanta · ils parlèrent · ils arrivèrent",
            es: "-er: -a, -èrent"
          },
          {
            p: 2,
            fr: "il finit · il prit · il sortit · il ouvrit",
            es: "-ir / -re: -it"
          },
          {
            p: 3,
            fr: "il fut · il eut · il put · il dut · il reçut",
            es: "otros: -ut"
          }
        ],
        seg: [
          {
            es: "Los verbos en -er: -a, -èrent. Il parla, ils parlèrent.",
            p: 1
          },
          {
            fr: "il parla, il chanta, ils parlèrent, ils arrivèrent",
            p: 1
          },
          {
            es: "En -ir y -re: -it. Il finit, il prit.",
            p: 2
          },
          {
            fr: "il finit, il prit, il sortit, il ouvrit",
            p: 2
          },
          {
            es: "Y otros en -ut: il fut, il eut.",
            p: 3
          },
          {
            fr: "il fut, il eut, il put, il dut, il reçut",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Los irregulares",
        titulo: "il fit, il vint, il naquit",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "il fit · Elle fit un gâteau.",
            es: "faire (no «fue»)"
          },
          {
            p: 2,
            fr: "il vint · il vit · il mit",
            es: "venir · voir · mettre"
          },
          {
            p: 3,
            fr: "Victor Hugo naquit en 1802. · Ils furent très surpris.",
            es: "naître · être"
          }
        ],
        seg: [
          {
            es: "Cuidado con los irregulares: il fit viene de faire.",
            p: 1
          },
          {
            fr: "il fit. Elle fit un gâteau.",
            p: 1
          },
          {
            fr: "il vint, il vit, il mit",
            p: 2
          },
          {
            fr: "Victor Hugo naquit en 1802. Ils furent très surpris.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En la vida real",
        titulo: "El cuento",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "« Il était une fois une princesse. Un soir, le prince ouvrit la porte du château et entra sans bruit. »",
            es: "«Había una vez una princesa. Una noche, el príncipe abrió la puerta del castillo y entró sin ruido»."
          },
          {
            p: 2,
            fr: "Et la princesse ?",
            es: "¿Y la princesa?"
          },
          {
            p: 3,
            fr: "« Elle entra dans la pièce, regarda autour d'elle et sourit. Ils furent très surpris. »",
            es: "«Ella entró en la habitación, miró a su alrededor y sonrió. Se sorprendieron mucho»."
          },
          {
            p: 4,
            fr: "C'est le passé simple ! Comme dans les livres d'histoire : Victor Hugo naquit en 1802.",
            es: "¡Es el passé simple! Como en los libros de historia: Victor Hugo nació en 1802."
          }
        ],
        seg: [
          {
            es: "Escucha cómo suena en una conversación de verdad."
          },
          {
            fr: "« Il était une fois une princesse. Un soir, le prince ouvrit la porte du château et entra sans bruit. »",
            p: 1
          },
          {
            fr: "Et la princesse ?",
            p: 2
          },
          {
            fr: "« Elle entra dans la pièce, regarda autour d'elle et sourit. Ils furent très surpris. »",
            p: 3
          },
          {
            fr: "C'est le passé simple ! Comme dans les livres d'histoire : Victor Hugo naquit en 1802.",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Contraste con el español",
        titulo: "Il fit ≠ él fue",
        mz: "m2d/alerta",
        items: [
          {
            p: 1,
            regla: "il fit = él hizo (faire) · il fut = él fue (être)"
          },
          {
            p: 2,
            regla: "ouvrir → il ouvrit (no «ouvra»)"
          },
          {
            p: 3,
            regla: "al hablar: passé composé (j'ai parlé, no «je parlai»)"
          }
        ],
        seg: [
          {
            es: "La gran trampa: il fit es él hizo, no él fue. Él fue es il fut.",
            p: 1
          },
          {
            es: "Y al hablar, nunca passé simple.",
            p: 3
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Soudain, le prince ouvra la porte du château.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Soudain, le prince ouvrit la porte du château.",
          es: "Ouvrir hace ouvrit."
        },
        seg: [
          {
            es: "Primera trampa: ouvra.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Soudain, le prince ouvrit la porte du château.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Hier, je parlai avec ma mère. (oral)",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Hier, j'ai parlé avec ma mère.",
          es: "Al hablar: passé composé."
        },
        seg: [
          {
            es: "Segunda trampa: usarlo al hablar.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Hier, j'ai parlé avec ma mère.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Hier, je parlai avec ma mère.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Hier, j'ai parlé avec ma mère.",
          es: "Al hablar se usa el passé composé."
        },
        seg: [
          {
            es: "Una trampa más.",
            p: 1
          },
          {
            es: "Usamos el passé simple al hablar.",
            p: 1
          },
          {
            es: "Lo correcto es:",
            p: 2
          },
          {
            fr: "Hier, j'ai parlé avec ma mère.",
            p: 2
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/pensativo",
        q: "«il fut» viene de…",
        o: [
          "être",
          "faire"
        ],
        a: 0,
        bien: "¡Eso es! Être.",
        mal: "Il fit es de faire.",
        seg: [
          {
            es: "Te toca. ¿De qué verbo viene il fut?"
          }
        ],
        es: true
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/confundido",
        q: "«Abrió la puerta.» (en un cuento)",
        o: [
          "Il ouvrit la porte.",
          "Il ouvra la porte."
        ],
        a: 0,
        bien: "¡Muy bien! Ouvrit.",
        mal: "Ouvrir → ouvrit.",
        seg: [
          {
            es: "Una más. ¿Cuál es correcta?"
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Repite conmigo",
        titulo: "Repite conmigo",
        mz: "m2d/explica",
        items: [
          {
            p: 1,
            fr: "être",
            es: "il fut"
          },
          {
            p: 2,
            fr: "venir",
            es: "elle vint"
          },
          {
            p: 3,
            fr: "Ils sont arrivés tard.",
            es: "Ils arrivèrent tard.» en lengua oral"
          }
        ],
        seg: [
          {
            es: "Ahora tú. Escucha cada frase y repítela en voz alta."
          },
          {
            fr: "être",
            p: 1
          },
          {
            es: "Otra vez.",
            p: 1
          },
          {
            fr: "être",
            p: 1
          },
          {
            fr: "venir",
            p: 2
          },
          {
            es: "Otra vez.",
            p: 2
          },
          {
            fr: "venir",
            p: 2
          },
          {
            fr: "Ils sont arrivés tard.",
            p: 3
          },
          {
            es: "Otra vez.",
            p: 3
          },
          {
            fr: "Ils sont arrivés tard.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Repaso",
        titulo: "Resumen",
        mz: "m2d/celebrar",
        items: [
          {
            p: 1,
            tabla: [
              [
                "Verbo",
                "Passé simple"
              ],
              [
                "parler · arriver",
                "il parla · ils arrivèrent"
              ],
              [
                "finir · prendre · ouvrir",
                "il finit · il prit · il ouvrit"
              ],
              [
                "être · avoir",
                "il fut · il eut"
              ],
              [
                "faire · venir · voir · naître",
                "il fit · il vint · il vit · il naquit"
              ]
            ]
          },
          {
            p: 2,
            regla: "El tiempo de los libros"
          }
        ],
        seg: [
          {
            es: "Repasemos.",
            p: 1
          },
          {
            es: "Reconócelo al leer.",
            p: 1
          },
          {
            es: "Y al hablar, passé composé. ¡Ahora, a practicar!",
            p: 2
          }
        ]
      }
    ]
  },
  contexto: {
    titulo: "El cuento", img: "bg-biblioteca", yo: "camila",
    escena: "Camila lee un cuento en voz alta a Hugo.",
    pj: PJ,
    lineas: [
      ["camila", "« Il était une fois une princesse. Un soir, le prince ouvrit la porte du château et entra sans bruit. »", "«Había una vez una princesa. Una noche, el príncipe abrió la puerta del castillo y entró sin ruido»."],
      ["hugo", "Et la princesse ?", "¿Y la princesa?"],
      ["camila", "« Elle entra dans la pièce, regarda autour d'elle et sourit. Ils furent très surpris. »", "«Ella entró en la habitación, miró a su alrededor y sonrió. Se sorprendieron mucho»."],
      ["hugo", "C'est le passé simple ! Comme dans les livres d'histoire : Victor Hugo naquit en 1802.", "¡Es el passé simple! Como en los libros de historia: Victor Hugo nació en 1802."]
    ],
    fijate: "Fíjate: ouvrit, entra, regarda, sourit, furent, naquit: passé simple. Il était una vez: imparfait."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Reconocer el passé simple",
      idea: "El passé simple es el tiempo del relato literario e histórico; equivale al passé composé, pero no se usa al hablar. Casi siempre aparece en tercera persona. Verbos en -er: -a, -èrent: il parla, ils parlèrent. Verbos en -ir / -re: -it, -irent: il finit, il prit, il sortit. Otros en -ut: il fut (être), il eut (avoir), il put, il dut, il connut, il reçut. Irregulares: il vint (venir), il fit (faire), il vit (voir), il naquit (naître), il mit (mettre).",
      intro: "Toca cada frase.",
      tabla: [["Passé simple", "Infinitivo", "Grupo"], [
        ["il chanta · il marcha · il tomba · il pensa · il parla · entra", "chanter · marcher · tomber · penser · parler", "en -a"],
        ["ils parlèrent · ils arrivèrent", "parler · arriver", "-èrent"],
        ["il dit · il sortit · il finit · il prit · ouvrit · ouvrit", "dire · sortir · finir · prendre · ouvrir", "en -it"],
        ["il connut · il reçut · il dut · il put", "connaître · recevoir · devoir · pouvoir", "en -ut"],
        ["il fut · ils furent · fut", "être", "irregular"],
        ["il eut · Il eut peur.", "avoir", "irregular"],
        ["il fit · Elle fit un gâteau.", "faire", "irregular"],
        ["il vint · elle vint · il vit · il naquit · il mit", "venir · voir · naître · mettre", "irregular"],
        ["être · venir · avoir · faire · voir · prendre · devoir · naître · mettre", "infinitivos", "-"],
        ["Ils arrivèrent tard. = Ils sont arrivés tard.", "Llegaron tarde.", "equivale al passé composé"]
      ]],
      ej: [["Il ouvrit la porte et entra sans bruit.", "Abrió la puerta y entró sin ruido."], ["Ils furent très surpris.", "Se sorprendieron mucho."], ["Victor Hugo naquit en 1802.", "Victor Hugo nació en 1802."]] },
    {
      id: "ojo",
      tipo: "ojo",
      titulo: "Errores frecuentes",
      intro: "Tres errores que cometemos casi todos los hispanohablantes. Cázalos uno por uno.",
      errores: [
        {
          sit: "Camila escribe un cuento:",
          frase: "Le roi fit très content de la nouvelle.",
          mal: "fit",
          bien: "fut",
          porque: "Confundimos fit y fut.",
          truco: "Fit viene de faire; fut de être."
        },
        {
          sit: "Camila lee:",
          frase: "Soudain, le prince ouvra la porte du château.",
          mal: "ouvra",
          bien: "ouvrit",
          porque: "Usamos la terminación de -er.",
          truco: "Ouvrir hace ouvrit."
        },
        {
          sit: "Hugo dice:",
          frase: "Hier, je parlai avec ma mère.",
          mal: "je parlai",
          bien: "j'ai parlé",
          porque: "Usamos el passé simple al hablar.",
          truco: "Al hablar se usa el passé composé."
        }
      ]
    }
  ],
  ejemplos: [
    {
      sit: "«il fut»",
      resp: "être",
      porque: "reconocer.",
      pasos: [
        {
          q: "¿Terminación?",
          ops: [
            "-ut",
            "-it"
          ],
          ok: 0
        },
        {
          q: "¿Verbo?",
          ops: [
            "être",
            "faire"
          ],
          ok: 0
        },
        {
          q: "¿En passé composé?",
          ops: [
            "il a été",
            "il a fait"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«elle vint»",
      resp: "venir",
      porque: "reconocer.",
      pasos: [
        {
          q: "¿Verbo?",
          ops: [
            "venir",
            "voir"
          ],
          ok: 0
        },
        {
          q: "¿Significa?",
          ops: [
            "vino",
            "vio"
          ],
          ok: 0
        },
        {
          q: "¿En passé composé?",
          ops: [
            "elle est venue",
            "elle a vu"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«Ils arrivèrent tard.» en lengua oral",
      resp: "Ils sont arrivés tard.",
      porque: "oral.",
      pasos: [
        {
          q: "¿Verbo?",
          ops: [
            "arriver",
            "arrêter"
          ],
          ok: 0
        },
        {
          q: "¿Al hablar?",
          ops: [
            "passé composé",
            "passé simple"
          ],
          ok: 0
        },
        {
          q: "¿Auxiliar?",
          ops: [
            "être: sont arrivés",
            "avoir"
          ],
          ok: 0
        }
      ]
    }
  ],
  comprueba: [
    { q: "El passé simple se usa sobre todo…", o: ["en la novela y la historia", "en la conversación"], a: 0, b: "gr", porque: "Lengua escrita." },
    { q: "«il eut» viene de…", o: ["avoir", "être"], a: 0, b: "gr", porque: "Irregular." },
    { q: "«il parla» viene de…", o: ["parler", "partir"], a: 0, b: "gr", porque: "-er → -a." }
  ],
  practica: [
    { fase: "guiada", c: ["b2ps-reg", "b2ps-irr"], k: "sort", ask: "¿Terminación en -a o en -it / -ut?", q: "Clasifica.", cats: ["en -a", "en -it / -ut"], items: [["il chanta", 0], ["il marcha", 0], ["il tomba", 0], ["il pensa", 0], ["il dit", 1], ["il sortit", 1], ["il connut", 1], ["il reçut", 1]], pista: "-er → -a.", why: "Terminaciones." },
    { fase: "guiada", c: ["b2ps-irr"], k: "choice", ask: "«il fut» viene de…", q: "«il fut»", o: ["être", "faire"], a: 0, pista: "-ut.", why: "<b>être</b>." },
    { fase: "guiada", c: ["b2ps-irr"], k: "choice", ask: "«elle vint» viene de…", q: "«elle vint»", o: ["venir", "voir"], a: 0, pista: "Irregular.", why: "<b>venir</b>." },
    { fase: "indep", c: ["b2ps-reg"], k: "choice", ask: "«Ils arrivèrent tard.» en la lengua oral es…", q: "«Ils arrivèrent tard.»", o: ["Ils sont arrivés tard.", "Ils arrivaient tard."], a: 0, why: "Passé composé." },
    { fase: "indep", c: ["b2ps-irr"], k: "fill", ask: "¿De qué verbo viene eut?", q: "Il eut peur. → (___)", acc: ["avoir"], why: "<b>avoir</b>." },
    { fase: "indep", c: ["b2ps-irr"], k: "fill", ask: "¿De qué verbo viene fit?", q: "Elle fit un gâteau. → (___)", acc: ["faire"], why: "<b>faire</b>." },
    { fase: "aplica", c: ["b2ps-irr"], k: "match", ask: "Une cada forma con su infinitivo.", q: "Passé simple → infinitivo", pairs: [["il vit", "voir"], ["il prit", "prendre"], ["il dut", "devoir"], ["il naquit", "naître"], ["il mit", "mettre"]], why: "Irregulares." },
    { fase: "aplica", c: ["b2ps-reg"], k: "spot", ask: "Encuentra el error.", s: "Soudain , le prince [ouvra] la porte du château .", fix: "ouvrit", why: "<b>ouvrit</b>." },
    { fase: "aplica", c: ["b2ps-reg"], k: "choice", ask: "«il parla» viene de…", q: "«il parla»", o: ["parler", "partir"], a: 0, why: "<b>parler</b>." },
    { fase: "dominio", c: ["b2ps-irr"], k: "choice", ask: "«il fit» significa…", q: "«il fit»", o: ["il a fait", "il a été"], a: 0, why: "<b>il a fait</b>: él hizo." },
    { fase: "dominio", c: ["b2ps-reg"], k: "order", ask: "Ordena: «Había una vez una princesa».", tokens: ["Il était", "une fois", "une princesse."], why: "<b>Il était une fois une princesse.</b>" },
    { fase: "dominio", c: ["b2ps-reg", "b2ps-irr"], k: "listen", say: "Elle entra dans la pièce, regarda autour d'elle et sourit.", acc: ["Elle entra dans la pièce, regarda autour d'elle et sourit."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Elle entra dans la pièce, regarda autour d'elle et sourit.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Victor Hugo"], previo: [] }
};

/* ================================ B1.2·7 · Construcciones verbales ================================ */
E["b12-faire-causatif"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Faire faire et se faire + infinitif",
  objetivo: {
    que: "Vas a decir que otra persona hace algo por ti (je fais réparer ma voiture) o que algo te pasa (il s'est fait voler son sac).",
    corto: "Je fais réparer ma voiture. · Elle s'est fait couper les cheveux.",
    podras: ["Usar faire + infinitivo: otra persona hace la acción.", "Usar se faire + infinitivo: un servicio para uno o algo que se sufre.", "Poner los pronombres delante de faire y dejar fait invariable."],
    iconos: ["ic2/engranaje", "ic2/amigos", "ic2/lapiz"],
    previos: ["Los pronombres COD (B1.1, lección 29) y los verbos pronominales en pasado (A2, lección 20)."],
    capacidad: "Ahora dices «me corté el pelo» sin decir que lo hiciste tú."
  },
  requiere: R("b1cc-cod", "b1ap-cod"), recupera: ["b1cc-cod"],
  conceptos: {
    "b2fc-faire": { n: "faire + infinitivo: otra persona hace la acción (je fais réparer ma voiture); pronombre delante: je la fais laver; laisser + infinitivo = permitir", b: "gr" },
    "b2fc-se": { n: "se faire + infinitivo: servicio para uno o suceso sufrido (elle s'est fait couper les cheveux, il s'est fait voler); fait invariable", b: "gr" }
  },
  video: {
    titulo: "Faire faire y se faire + infinitivo",
    voz: "es-CO-SalomeNeural",
    escenas: [
      {
        v: "persona",
        cap: "Para qué sirve",
        fondo: "esc/calle-paris",
        img: "pj/hugo-neutro",
        fr: "Quelle semaine ! Je me suis fait voler mon portefeuille dans le métro.",
        es: "¡Qué semana! Me robaron la billetera en el metro.",
        nota: "Una semana difícil",
        seg: [
          {
            es: "A Hugo le robaron la billetera: je me suis fait voler. Camila manda reparar su computador: je fais réparer. Hacer que otro haga algo."
          },
          {
            fr: "Quelle semaine ! Je me suis fait voler mon portefeuille dans le métro.",
            p: 1
          },
          {
            es: "Hoy aprendes faire más infinitivo, se faire y laisser.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Faire + infinitivo",
        titulo: "Encargar a otro",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Je fais réparer mon ordinateur. · Je fais construire une maison.",
            es: "el sujeto no hace la acción, la encarga"
          },
          {
            p: 2,
            fr: "Je fais venir le plombier. · Il fait traduire le texte.",
            es: "hago venir · hace traducir"
          },
          {
            p: 3,
            fr: "Ta voiture ? Je la fais laver chaque mois.",
            es: "pronombres delante de faire"
          }
        ],
        seg: [
          {
            es: "Faire más infinitivo: no haces tú la acción, la encargas. Je fais réparer mon ordinateur.",
            p: 1
          },
          {
            fr: "Je fais réparer mon ordinateur. Je fais construire une maison.",
            p: 1
          },
          {
            fr: "Je fais venir le plombier. Il fait traduire le texte.",
            p: 2
          },
          {
            es: "Y los pronombres van delante de faire: je la fais laver.",
            p: 3
          },
          {
            fr: "Je la fais laver chaque mois.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Se faire + infinitivo",
        titulo: "Un servicio o algo que se sufre",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Elle s'est fait opérer du genou. · Elle s'est fait couper les cheveux.",
            es: "un servicio para uno mismo"
          },
          {
            p: 2,
            fr: "Il s'est fait voler son portefeuille. · Je me suis fait avoir.",
            es: "algo que se sufre"
          },
          {
            p: 3,
            regla: "fait + infinitivo no concuerda: elle s'est fait couper"
          }
        ],
        seg: [
          {
            es: "Se faire: un servicio para uno mismo. Elle s'est fait couper les cheveux.",
            p: 1
          },
          {
            fr: "Elle s'est fait opérer du genou. Elle s'est fait couper les cheveux.",
            p: 1
          },
          {
            es: "O algo que se sufre: il s'est fait voler son portefeuille.",
            p: 2
          },
          {
            fr: "Il s'est fait voler son portefeuille. Je me suis fait avoir.",
            p: 2
          },
          {
            es: "Y fait no concuerda en esta estructura.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Laisser + infinitivo",
        titulo: "Permitir",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Laisse-moi parler. · Laisse-le dormir.",
            es: "déjame hablar · déjalo dormir"
          },
          {
            p: 2,
            fr: "Je laisse jouer les enfants. · Elle laisse entrer le chat.",
            es: "dejo jugar · deja entrar"
          },
          {
            p: 3,
            fr: "Il fait rire tout le monde.",
            es: "faire rire: hacer reír"
          }
        ],
        seg: [
          {
            es: "Laisser más infinitivo significa permitir: laisse-moi parler.",
            p: 1
          },
          {
            fr: "Laisse-moi parler. Laisse-le dormir.",
            p: 1
          },
          {
            fr: "Je laisse jouer les enfants. Elle laisse entrer le chat.",
            p: 2
          },
          {
            es: "Y faire rire, hacer reír.",
            p: 3
          },
          {
            fr: "Il fait rire tout le monde.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En la vida real",
        titulo: "Una semana difícil",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Quelle semaine ! Je me suis fait voler mon portefeuille dans le métro.",
            es: "¡Qué semana! Me robaron la billetera en el metro."
          },
          {
            p: 2,
            fr: "Oh non ! Moi, je fais réparer mon ordinateur, et je dois faire réviser ma voiture avant les vacances.",
            es: "¡Ay, no! Yo mando reparar mi computador, y tengo que hacerle la revisión al carro antes de las vacaciones."
          },
          {
            p: 3,
            fr: "Ta voiture ? Je la fais laver chaque mois, moi. Et ma sœur s'est fait opérer du genou.",
            es: "¿Tu carro? Yo lo hago lavar cada mes. Y mi hermana se operó de la rodilla."
          },
          {
            p: 4,
            fr: "Et Julie s'est fait couper les cheveux très courts ! Elle fait rire tout le monde avec sa nouvelle tête. Laisse-moi te montrer la photo.",
            es: "¡Y Julie se cortó el pelo muy corto! Hace reír a todos con su nuevo look. Déjame mostrarte la foto."
          }
        ],
        seg: [
          {
            es: "Escucha cómo suena en una conversación de verdad."
          },
          {
            fr: "Quelle semaine ! Je me suis fait voler mon portefeuille dans le métro.",
            p: 1
          },
          {
            fr: "Oh non ! Moi, je fais réparer mon ordinateur, et je dois faire réviser ma voiture avant les vacances.",
            p: 2
          },
          {
            fr: "Ta voiture ? Je la fais laver chaque mois, moi. Et ma sœur s'est fait opérer du genou.",
            p: 3
          },
          {
            fr: "Et Julie s'est fait couper les cheveux très courts ! Elle fait rire tout le monde avec sa nouvelle tête. Laisse-moi te montrer la photo.",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Contraste con el español",
        titulo: "Me corté el pelo ≠ je me suis coupé",
        mz: "m2d/alerta",
        items: [
          {
            p: 1,
            regla: "«me corté el pelo» (en la peluquería) = je me suis fait couper les cheveux"
          },
          {
            p: 2,
            regla: "«me robaron» = je me suis fait voler"
          },
          {
            p: 3,
            regla: "«reparé mi carro» (en el taller) = j'ai fait réparer ma voiture"
          }
        ],
        seg: [
          {
            es: "En español decimos me corté el pelo aunque lo haga otro. En francés, je me suis fait couper.",
            p: 1
          },
          {
            es: "Y me robaron es je me suis fait voler.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Hier, Julie s'est faite couper les cheveux.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Hier, Julie s'est fait couper les cheveux.",
          es: "Fait + infinitivo: invariable."
        },
        seg: [
          {
            es: "Primera trampa: la concordancia.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Hier, Julie s'est fait couper les cheveux.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Mon vélo ? Je fais le réparer demain.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Mon vélo ? Je le fais réparer demain.",
          es: "Pronombre delante de faire."
        },
        seg: [
          {
            es: "Segunda trampa: el pronombre.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Mon vélo ? Je le fais réparer demain.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "J'ai réparé ma voiture au garage.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "J'ai fait réparer ma voiture au garage.",
          es: "Si lo hizo otro: faire réparer."
        },
        seg: [
          {
            es: "Una trampa más.",
            p: 1
          },
          {
            es: "Decimos que lo hicimos nosotros.",
            p: 1
          },
          {
            es: "Lo correcto es:",
            p: 2
          },
          {
            fr: "J'ai fait réparer ma voiture au garage.",
            p: 2
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/pensativo",
        q: "«Elle s'est ___ couper les cheveux.»",
        o: [
          "fait",
          "faite"
        ],
        a: 0,
        bien: "¡Eso es! Fait.",
        mal: "Invariable.",
        seg: [
          {
            es: "Te toca. ¿Fait o faite?"
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/confundido",
        q: "«Le robaron la billetera.»",
        o: [
          "Il s'est fait voler son portefeuille.",
          "Il a volé son portefeuille."
        ],
        a: 0,
        bien: "¡Muy bien! S'est fait voler.",
        mal: "Algo que se sufre.",
        seg: [
          {
            es: "Una más. ¿Cuál es correcta?"
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Repite conmigo",
        titulo: "Repite conmigo",
        mz: "m2d/explica",
        items: [
          {
            p: 1,
            fr: "Je fais réparer mon ordinateur.",
            es: "Mando reparar mi computador."
          },
          {
            p: 2,
            fr: "Il s'est fait voler son portefeuille.",
            es: "Le robaron la billetera."
          },
          {
            p: 3,
            fr: "Laisse-moi parler.",
            es: "Déjame hablar."
          }
        ],
        seg: [
          {
            es: "Ahora tú. Escucha cada frase y repítela en voz alta."
          },
          {
            fr: "Je fais réparer mon ordinateur.",
            p: 1
          },
          {
            es: "Otra vez.",
            p: 1
          },
          {
            fr: "Je fais réparer mon ordinateur.",
            p: 1
          },
          {
            fr: "Il s'est fait voler son portefeuille.",
            p: 2
          },
          {
            es: "Otra vez.",
            p: 2
          },
          {
            fr: "Il s'est fait voler son portefeuille.",
            p: 2
          },
          {
            fr: "Laisse-moi parler.",
            p: 3
          },
          {
            es: "Otra vez.",
            p: 3
          },
          {
            fr: "Laisse-moi parler.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Repaso",
        titulo: "Resumen",
        mz: "m2d/celebrar",
        items: [
          {
            p: 1,
            tabla: [
              [
                "Estructura",
                "Significa"
              ],
              [
                "faire + infinitivo",
                "encargar: Je fais réparer ma voiture."
              ],
              [
                "se faire + infinitivo",
                "servicio o sufrir: Elle s'est fait opérer."
              ],
              [
                "pronombres",
                "delante de faire: Je la fais laver."
              ],
              [
                "laisser + infinitivo",
                "permitir: Laisse-moi parler."
              ]
            ]
          },
          {
            p: 2,
            regla: "Faire = encargar, laisser = permitir"
          }
        ],
        seg: [
          {
            es: "Repasemos.",
            p: 1
          },
          {
            es: "Hacer que otro haga.",
            p: 1
          },
          {
            es: "Y fait no concuerda. ¡Ahora, a practicar!",
            p: 2
          }
        ]
      }
    ]
  },
  contexto: {
    titulo: "Una semana difícil", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo hablan de su semana.",
    pj: PJ,
    lineas: [
      ["hugo", "Quelle semaine ! Je me suis fait voler mon portefeuille dans le métro.", "¡Qué semana! Me robaron la billetera en el metro."],
      ["camila", "Oh non ! Moi, je fais réparer mon ordinateur, et je dois faire réviser ma voiture avant les vacances.", "¡Ay, no! Yo mando reparar mi computador, y tengo que hacerle la revisión al carro antes de las vacaciones."],
      ["hugo", "Ta voiture ? Je la fais laver chaque mois, moi. Et ma sœur s'est fait opérer du genou.", "¿Tu carro? Yo lo hago lavar cada mes. Y mi hermana se operó de la rodilla."],
      ["camila", "Et Julie s'est fait couper les cheveux très courts ! Elle fait rire tout le monde avec sa nouvelle tête. Laisse-moi te montrer la photo.", "¡Y Julie se cortó el pelo muy corto! Hace reír a todos con su nuevo look. Déjame mostrarte la foto."]
    ],
    fijate: "Fíjate: je fais réparer, faire réviser, je la fais laver, fait rire (faire + infinitivo); me suis fait voler, s'est fait opérer, s'est fait couper (se faire); laisse-moi te montrer."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Faire y se faire + infinitivo",
      idea: "Faire + infinitivo: el sujeto no hace la acción, la encarga a otra persona: Je fais réparer ma voiture (la repara el mecánico). Se faire + infinitivo: un servicio para uno mismo o algo que se sufre: Elle s'est fait opérer. Il s'est fait voler son sac. Los pronombres van delante de faire: Je la fais réparer. El participio fait no concuerda en esta estructura: Elle s'est fait couper les cheveux. No confundir con laisser + infinitivo, que significa permitir: Laisse-moi parler.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Estructura"], [
        ["Je fais réparer mon ordinateur.", "Mando reparar mi computador.", "faire + inf."],
        ["Je fais construire une maison.", "Me construyen una casa.", "faire + inf."],
        ["Je fais venir le plombier. · Elle fait réparer la porte. · On fait livrer les courses. · Il fait traduire le texte.", "Hago venir al plomero. · Hace reparar la puerta. · Nos traen el mercado. · Hace traducir el texto.", "otra persona (faire)"],
        ["Je la fais laver chaque mois. · la", "Lo hago lavar cada mes.", "pronombre delante"],
        ["Il s'est fait voler son portefeuille.", "Le robaron la billetera.", "se faire (suceso)"],
        ["Elle s'est fait opérer du genou. · fait", "Se operó de la rodilla.", "se faire (servicio)"],
        ["Je me suis fait avoir.", "Me engañaron.", "se faire (suceso)"],
        ["Il fait rire tout le monde.", "Hace reír a todos.", "faire + inf."],
        ["Laisse-moi parler. · Laisse-le dormir.", "Déjame hablar. · Déjalo dormir.", "laisser = permitir"],
        ["Je laisse jouer les enfants. · Laisse-moi faire. · Elle laisse entrer le chat. · On laisse passer les voitures.", "Dejo jugar a los niños. · Déjame a mí. · Deja entrar al gato. · Dejamos pasar los carros.", "el sujeto permite (laisser)"]
      ]],
      ej: [["Je fais nettoyer mon manteau au pressing.", "Llevo el abrigo a la lavandería."], ["Elle s'est fait couper les cheveux.", "Se cortó el pelo (en la peluquería)."], ["Il s'est fait arrêter par la police.", "Lo detuvo la policía."]] },
    {
      id: "ojo",
      tipo: "ojo",
      titulo: "Errores frecuentes",
      intro: "Tres errores que cometemos casi todos los hispanohablantes. Cázalos uno por uno.",
      errores: [
        {
          sit: "Camila escribe:",
          frase: "Hier, Julie s'est faite couper les cheveux très courts.",
          mal: "faite",
          bien: "fait",
          porque: "Concordamos fait.",
          truco: "Fait + infinitivo es invariable."
        },
        {
          sit: "Hugo escribe:",
          frase: "Mon vélo ? Je fais le réparer demain.",
          mal: "fais le",
          bien: "le fais",
          porque: "Ponemos el pronombre tras faire.",
          truco: "Pronombre delante de faire."
        },
        {
          sit: "Hugo escribe:",
          frase: "J'ai réparé ma voiture au garage.",
          mal: "J'ai réparé",
          bien: "J'ai fait réparer",
          porque: "Decimos que lo hicimos nosotros.",
          truco: "Si lo hizo otro: faire réparer."
        }
      ]
    }
  ],
  ejemplos: [
    {
      sit: "«Mando reparar mi computador.»",
      resp: "Je fais réparer mon ordinateur.",
      porque: "faire.",
      pasos: [
        {
          q: "¿Quién repara?",
          ops: [
            "otra persona",
            "yo"
          ],
          ok: 0
        },
        {
          q: "¿Estructura?",
          ops: [
            "faire + infinitivo",
            "laisser + infinitivo"
          ],
          ok: 0
        },
        {
          q: "¿La frase?",
          ops: [
            "Je fais réparer mon ordinateur.",
            "Je répare mon ordinateur."
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«Le robaron la billetera.»",
      resp: "Il s'est fait voler son portefeuille.",
      porque: "se faire.",
      pasos: [
        {
          q: "¿Lo sufrió él?",
          ops: [
            "sí",
            "no"
          ],
          ok: 0
        },
        {
          q: "¿Estructura?",
          ops: [
            "se faire + infinitivo",
            "voler solo"
          ],
          ok: 0
        },
        {
          q: "¿Auxiliar?",
          ops: [
            "être: s'est fait",
            "avoir"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«Déjame hablar.»",
      resp: "Laisse-moi parler.",
      porque: "laisser.",
      pasos: [
        {
          q: "¿Permitir o encargar?",
          ops: [
            "permitir",
            "encargar"
          ],
          ok: 0
        },
        {
          q: "¿Verbo?",
          ops: [
            "laisser",
            "faire"
          ],
          ok: 0
        },
        {
          q: "¿La frase?",
          ops: [
            "Laisse-moi parler.",
            "Fais-moi parler."
          ],
          ok: 0
        }
      ]
    }
  ],
  comprueba: [
    { q: "En «Je fais réparer ma voiture», ¿quién repara?", o: ["otra persona", "yo"], a: 0, b: "gr", porque: "faire + infinitivo." },
    { q: "«Elle s'est ___ couper les cheveux.»", o: ["fait", "faite"], a: 0, b: "gr", porque: "Invariable." },
    { q: "Laisser + infinitivo significa…", o: ["permitir", "encargar"], a: 0, b: "gr", porque: "Laisse-moi parler." }
  ],
  practica: [
    { fase: "guiada", c: ["b2fc-faire"], k: "sort", ask: "¿La hace otra persona (faire) o el sujeto permite (laisser)?", q: "Clasifica.", cats: ["Otra persona (faire)", "El sujeto permite (laisser)"], items: [["Je fais venir le plombier.", 0], ["Elle fait réparer la porte.", 0], ["On fait livrer les courses.", 0], ["Il fait traduire le texte.", 0], ["Je laisse jouer les enfants.", 1], ["Laisse-moi faire.", 1], ["Elle laisse entrer le chat.", 1], ["On laisse passer les voitures.", 1]], pista: "Laisser: permitir.", why: "Faire / laisser." },
    { fase: "guiada", c: ["b2fc-faire"], k: "choice", ask: "«Mando reparar mi computador.»", q: "«___»", o: ["Je fais réparer mon ordinateur.", "Je répare mon ordinateur."], a: 0, pista: "Lo hace otro.", why: "<b>fais réparer</b>." },
    { fase: "guiada", c: ["b2fc-se"], k: "choice", ask: "«Le robaron la billetera.»", q: "«___»", o: ["Il s'est fait voler son portefeuille.", "Il a volé son portefeuille."], a: 0, pista: "Suceso sufrido.", why: "<b>s'est fait voler</b>." },
    { fase: "indep", c: ["b2fc-faire"], k: "choice", ask: "«Déjame hablar.»", q: "«___»", o: ["Laisse-moi parler.", "Fais-moi parler."], a: 0, why: "<b>Laisse-moi</b>." },
    { fase: "indep", c: ["b2fc-se"], k: "fill", ask: "Participio de faire.", q: "Elle s'est ___ opérer du genou.", acc: ["fait"], why: "<b>fait</b>." },
    { fase: "indep", c: ["b2fc-faire"], k: "fill", ask: "Pronombre COD (ma voiture).", q: "Ma voiture ? Je ___ fais laver chaque mois.", acc: ["la"], why: "<b>la</b>." },
    { fase: "aplica", c: ["b2fc-faire", "b2fc-se"], k: "match", ask: "Une cada frase con su traducción.", q: "Francés → español", pairs: [["Je fais construire une maison.", "Me construyen una casa."], ["Je me suis fait avoir.", "Me engañaron."], ["Il fait rire tout le monde.", "Hace reír a todos."], ["Laisse-le dormir.", "Déjalo dormir."]], why: "Estructuras." },
    { fase: "aplica", c: ["b2fc-se"], k: "spot", ask: "Encuentra el error.", s: "Hier , Julie s'est [faite] couper les cheveux très courts .", fix: "fait", why: "<b>fait</b>." },
    { fase: "aplica", c: ["b2fc-faire"], k: "spot", ask: "Encuentra el error.", s: "Mon vélo ? Je [fais le] réparer demain .", fix: "le fais", why: "<b>le fais</b>." },
    { fase: "dominio", c: ["b2fc-se"], k: "order", ask: "Ordena: «Me hice un tatuaje».", tokens: ["Je me suis", "fait", "tatouer."], why: "<b>Je me suis fait tatouer.</b>" },
    { fase: "dominio", c: ["b2fc-se"], k: "choice", ask: "«Lo detuvo la policía.»", q: "«___»", o: ["Il s'est fait arrêter par la police.", "Il s'est arrêté par la police."], a: 0, why: "<b>s'est fait arrêter</b>." },
    { fase: "dominio", c: ["b2fc-faire", "b2fc-se"], k: "listen", say: "Je dois faire réviser ma voiture avant les vacances.", acc: ["Je dois faire réviser ma voiture avant les vacances."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je dois faire réviser ma voiture avant les vacances.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Julie"], previo: [] }
};

E["b12-verbes-pronominaux-sens"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Verbes pronominaux qui changent de sens",
  objetivo: {
    que: "Vas a usar verbos que cambian de sentido al volverse pronominales: s'apercevoir, se douter, se rendre, se passer de.",
    corto: "Je m'en doutais ! · Je ne peux pas me passer de café.",
    podras: ["Decir «darse cuenta»: s'apercevoir de / que, se rendre compte.", "Distinguir douter (dudar) de se douter (imaginarse).", "Usar se rendre (ir, rendirse), se passer de (prescindir), s'attendre à (esperar), se mettre à (ponerse a)."],
    iconos: ["ic2/bombilla", "ic2/pregunta", "ic2/cafe"],
    previos: ["Los pronominales en pasado (A2, lección 20) y la concordancia con être (B1.1, lección 27)."],
    capacidad: "Ahora dices «¡me lo imaginaba!» sin decir «dudaba»."
  },
  requiere: R("b1ae-oui", "b1ae-non"), recupera: ["b1ae-oui"],
  conceptos: {
    "b2vs-compte": { n: "darse cuenta: s'apercevoir de / que, se rendre compte; concordancia en pasado (elle s'est aperçue)", b: "gr" },
    "b2vs-autres": { n: "se douter (imaginarse ≠ douter), se passer de (prescindir), se rendre (ir), s'attendre à (esperar), se mettre à (ponerse a)", b: "gr" }
  },
  video: {
    titulo: "Verbos que cambian", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/bombilla", grande: "se douter", seg: [
        { es: "Hola. Con el pronombre, algunos verbos cambian de sentido." } ] },
      { v: "dos",
        a: { tag: "douter", fr: "Je doute qu'il vienne.", es: "dudo que venga" },
        b: { tag: "se douter", fr: "Je me doutais qu'il viendrait.", es: "me imaginaba que vendría" },
        seg: [ { es: "Dudar:", p: 1 }, { fr: "Je doute qu'il vienne.", p: 1 }, { es: "Imaginarse:", p: 2 }, { fr: "Je me doutais qu'il viendrait.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«No puedo prescindir de mi celular.»", o: ["Je ne peux pas me passer de mon portable.", "Je ne peux pas passer mon portable."], a: 0,
        bien: "¡Sí! Se passer de = prescindir.", mal: "Prescindir: se passer de.",
        seg: [ { es: "Pausa. Prescindir." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["s'apercevoir", "se rendre compte", "se douter", "se passer de", "s'attendre à"], seg: [
        { es: "Dudar no es imaginarse.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El teléfono olvidado", img: "bg-cafe", yo: "camila",
    escena: "Camila llega sin teléfono.",
    pj: PJ,
    lineas: [
      ["camila", "Je me suis aperçue que j'avais oublié mon téléphone à la maison !", "¡Me di cuenta de que había olvidado mi teléfono en la casa!"],
      ["hugo", "Je m'en doutais ! Tu ne répondais pas. Moi, je ne peux pas me passer de mon portable.", "¡Me lo imaginaba! No contestabas. Yo no puedo prescindir de mi celular."],
      ["camila", "Et puis, tout à coup, il s'est mis à pleuvoir. Je ne m'attendais pas à ça !", "Y luego, de repente, se puso a llover. ¡No me esperaba eso!"],
      ["hugo", "Demain, je me rends à Paris en train. Je ne me rendais pas compte que c'était si loin.", "Mañana voy a París en tren. No me daba cuenta de que era tan lejos."]
    ],
    fijate: "Fíjate: je me suis aperçue (darse cuenta), je m'en doutais (imaginarse), me passer de (prescindir), s'est mis à (ponerse a), je m'attendais (esperar), je me rends (ir), je me rendais compte."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Con y sin pronombre",
      idea: "Apercevoir = divisar; s'apercevoir de / que = darse cuenta (como se rendre compte). Douter = dudar; se douter de / que = imaginarse, sospechar: Je m'en doutais ! Rendre = devolver; se rendre à = ir a / rendirse. Passer = pasar; se passer = ocurrir; se passer de = prescindir. Attendre = esperar a alguien; s'attendre à = esperar algo, preverlo. Mettre = poner; se mettre à = ponerse a. En pasado van con être y concuerdan: Marie s'est aperçue de son erreur.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Sentido"], [
        ["s'apercevoir · se rendre compte · remarquer · constater", "darse cuenta · darse cuenta · notar · constatar", "darse cuenta"],
        ["Je me suis aperçu de mon erreur. · aperçue", "Me di cuenta de mi error.", "concordancia"],
        ["se douter · Je m'en doutais.", "imaginarse · Me lo imaginaba.", "≠ douter (dudar)"],
        ["se passer de · Je ne peux pas me passer de mon portable.", "prescindir de · No puedo prescindir de mi celular.", "prescindir"],
        ["se passer · Qu'est-ce qui se passe ?", "ocurrir · ¿Qué pasa?", "ocurrir"],
        ["se rendre · Il s'est rendu à Paris.", "ir / rendirse · Fue a París.", "ir"],
        ["s'attendre à · Je ne m'attendais pas à ça. · attendais", "esperar (prever) · No me esperaba eso.", "prever"],
        ["se mettre à · il s'est mis à pleuvoir · mis", "ponerse a · se puso a llover", "empezar"],
        ["s'en aller", "irse", "irse"]
      ]],
      ej: [["Je me suis aperçu que j'avais oublié mon téléphone.", "Me di cuenta de que había olvidado el teléfono."], ["Je m'en doutais !", "¡Me lo imaginaba!"], ["Je ne peux pas me passer de café.", "No puedo prescindir del café."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je doutais qu'il viendrait (= me lo imaginaba).", "Je me doutais qu'il viendrait.", "Se douter = imaginarse; douter = dudar."], ["Marie s'est aperçu de son erreur.", "Marie s'est aperçue de son erreur.", "Concordancia con el sujeto."], ["Je ne peux pas passer de café.", "Je ne peux pas me passer de café.", "Prescindir: se passer de."]] }
  ],
  ejemplos: [
    { sit: "«Me lo imaginaba.»", resp: "Je m'en doutais.", pasos: ["se douter de → en."], porque: "Imaginarse." },
    { sit: "«Fue a París.»", resp: "Il s'est rendu à Paris.", pasos: ["se rendre à = ir a."], porque: "Registro formal." },
    { sit: "«No me esperaba esa reacción.»", resp: "Je ne m'attendais pas à une telle réaction.", pasos: ["s'attendre à."], porque: "Prever." }
  ],
  comprueba: [
    { q: "«Je m'en doutais» significa…", o: ["Me lo imaginaba.", "Lo dudaba."], a: 0, b: "gr", porque: "se douter." },
    { q: "«Prescindir de» se dice…", o: ["se passer de", "passer de"], a: 0, b: "gr", porque: "Pronominal." },
    { q: "«Darse cuenta» se dice…", o: ["s'apercevoir", "apercevoir"], a: 0, b: "gr", porque: "Pronominal." }
  ],
  practica: [
    { fase: "guiada", c: ["b2vs-compte", "b2vs-autres"], k: "sort", ask: "¿Significa «darse cuenta» u otra cosa?", q: "Clasifica.", cats: ["Darse cuenta", "Otra cosa"], items: [["s'apercevoir", 0], ["se rendre compte", 0], ["remarquer", 0], ["constater", 0], ["se douter", 1], ["se passer", 1], ["s'attendre", 1], ["se rendre", 1]], pista: "Se rendre solo: ir.", why: "Sentidos." },
    { fase: "guiada", c: ["b2vs-autres"], k: "choice", es: true, ask: "«Je m'en doutais.» significa…", q: "Elige.", o: ["Me lo imaginaba.", "Lo dudaba."], a: 0, pista: "se douter.", why: "Imaginarse." },
    { fase: "guiada", c: ["b2vs-autres"], k: "choice", ask: "«No puedo prescindir de mi celular.»", q: "«___»", o: ["Je ne peux pas me passer de mon portable.", "Je ne peux pas passer de mon portable."], a: 0, pista: "Pronominal.", why: "<b>me passer de</b>." },
    { fase: "indep", c: ["b2vs-autres"], k: "choice", es: true, ask: "«Il s'est rendu à Paris.» significa…", q: "Elige.", o: ["Fue a París.", "Devolvió París."], a: 0, why: "se rendre = ir." },
    { fase: "indep", c: ["b2vs-autres"], k: "fill", ask: "«esperaba» (s'attendre, imparfait)", q: "Je ne m'___ pas à une telle réaction !", acc: ["attendais"], why: "<b>attendais</b>." },
    { fase: "indep", c: ["b2vs-autres"], k: "fill", ask: "«se puso» (se mettre)", q: "Tout à coup, il s'est ___ à pleuvoir.", acc: ["mis"], why: "<b>mis</b>." },
    { fase: "aplica", c: ["b2vs-compte", "b2vs-autres"], k: "match", ask: "Une cada verbo con su sentido.", q: "Francés → español", pairs: [["s'apercevoir", "darse cuenta"], ["se douter", "imaginarse"], ["se passer de", "prescindir de"], ["s'en aller", "irse"], ["se rendre", "ir / rendirse"]], why: "Sentidos." },
    { fase: "aplica", c: ["b2vs-compte"], k: "spot", ask: "Encuentra el error.", s: "Marie s'est [aperçu] de son erreur trop tard .", fix: "aperçue", why: "<b>aperçue</b>." },
    { fase: "aplica", c: ["b2vs-autres"], k: "spot", ask: "Encuentra el error (= me lo imaginaba).", s: "Je [doutais] qu'il viendrait , il adore les fêtes .", fix: "me doutais", why: "<b>me doutais</b>." },
    { fase: "dominio", c: ["b2vs-compte"], k: "order", ask: "Ordena: «Me di cuenta de mi error».", tokens: ["Je me suis", "aperçu", "de mon erreur."], why: "<b>Je me suis aperçu de mon erreur.</b>" },
    { fase: "dominio", c: ["b2vs-compte"], k: "choice", ask: "«No me daba cuenta de que era tan lejos.»", q: "«Je ne me rendais pas ___ que c'était si loin.»", o: ["compte", "compté"], a: 0, why: "<b>se rendre compte</b>." },
    { fase: "dominio", c: ["b2vs-compte", "b2vs-autres"], k: "listen", say: "Je ne me rendais pas compte que c'était si loin.", acc: ["Je ne me rendais pas compte que c'était si loin."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je ne me rendais pas compte que c'était si loin.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Marie", "Paris"], previo: [] }
};

E["b12-verbes-construction"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Un verbe, deux constructions : jouer à / de, manquer à / de",
  objetivo: {
    que: "Vas a usar verbos que cambian de sentido según la preposición: jouer à / de, penser à / de, manquer à / de, tenir à / de.",
    corto: "Tu me manques. · Il joue du piano. · Qu'est-ce que tu penses de…?",
    podras: ["Distinguir jouer à (deporte, juego) de jouer de (instrumento).", "Usar manquer à al revés que en español: Ma famille me manque.", "Distinguir penser à (pensar en) / penser de (opinar) y tenir à / tenir de."],
    iconos: ["ic2/audifonos", "ic2/corazon", "ic2/mando"],
    previos: ["Verbo + à / de (B1.1, lección 12)."],
    capacidad: "Ahora dices «te extraño» sin traducir palabra por palabra."
  },
  requiere: R("b1vp-a", "b1vp-de"), recupera: ["b1vp-a"],
  conceptos: {
    "b2vc-jouer": { n: "jouer à + deporte / juego (au foot), jouer de + instrumento (du piano); penser à (pensar en) / penser de (opinar)", b: "gr" },
    "b2vc-manquer": { n: "manquer à: lo que se extraña es el sujeto (tu me manques); manquer de = carecer; tenir à (apreciar) / tenir de (parecerse)", b: "gr" }
  },
  video: {
    titulo: "Una preposición, otro sentido", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/corazon", grande: "tu me manques", seg: [
        { es: "Hola. Te extraño, en francés, se dice al revés." } ] },
      { v: "dos",
        a: { tag: "jouer à", fr: "Il joue au foot.", es: "juega fútbol" },
        b: { tag: "jouer de", fr: "Il joue du violon.", es: "toca el violín" },
        seg: [ { es: "Deporte:", p: 1 }, { fr: "Il joue au foot.", p: 1 }, { es: "Instrumento:", p: 2 }, { fr: "Il joue du violon.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Extraño a mis amigos.»", o: ["Mes amis me manquent.", "Je manque mes amis."], a: 0,
        bien: "¡Sí! Lo extrañado es el sujeto.", mal: "Al revés: mes amis me manquent.",
        seg: [ { es: "Pausa. Extraño a mis amigos." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["jouer au foot", "jouer du piano", "tu me manques", "manquer de", "penser de"], seg: [
        { es: "Mira bien la preposición.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Lejos de casa", img: "bg-paris", yo: "camila",
    escena: "Camila habla de Colombia con Hugo.",
    pj: PJ,
    lineas: [
      ["camila", "Depuis que je vis à l'étranger, mon pays me manque énormément. Ma famille me manque beaucoup.", "Desde que vivo en el extranjero, extraño muchísimo mi país. Extraño mucho a mi familia."],
      ["hugo", "Je comprends. Ton frère joue toujours du piano ?", "Te entiendo. ¿Tu hermano todavía toca el piano?"],
      ["camila", "Oui, et il joue au tennis le week-end. Il tient de mon père : il ne manque pas de patience !", "Sí, y juega tenis los fines de semana. Se parece a mi papá: ¡no le falta paciencia!"],
      ["hugo", "Et qu'est-ce que tu penses de Paris, finalement ? Moi, je pense souvent à ma ville.", "¿Y qué opinas de París, al final? Yo pienso a menudo en mi ciudad."]
    ],
    fijate: "Fíjate: mon pays me manque, ma famille me manque (al revés); joue du piano, joue au tennis; tient de mon père; manque de patience; penses de (opinar), pense à (pensar en)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Dos preposiciones, dos sentidos",
      idea: "Jouer à + deporte o juego (jouer au foot, aux cartes); jouer de + instrumento (jouer du piano, de la guitare). Penser à = pensar en; penser de = opinar: Qu'est-ce que tu penses de ce film ? Manquer à = echar de menos, pero al revés que en español: lo que se extraña es el sujeto: Tu me manques (te extraño). Ma famille me manque. Manquer de = carecer: Il manque de patience. Tenir à = apreciar; tenir de = parecerse a.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Construcción"], [
        ["jouer au tennis · au · les cartes · le football · les échecs · cache-cache", "jugar tenis · las cartas · el fútbol · el ajedrez · las escondidas", "jouer à + juego"],
        ["jouer du piano · du · la flûte · la batterie · l'accordéon · la harpe", "tocar el piano · la flauta · la batería · el acordeón · el arpa", "jouer de + instrumento"],
        ["Il joue du violon.", "Toca el violín.", "instrumento"],
        ["Tu me manques. · me", "Te extraño.", "manquer à (al revés)"],
        ["Mes amis me manquent.", "Extraño a mis amigos.", "manquer à"],
        ["Il manque de patience. · manque d'expérience · d'", "Le falta paciencia. · le falta experiencia", "manquer de = carecer"],
        ["Qu'est-ce que tu penses de lui ?", "¿Qué opinas de él?", "penser de = opinar"],
        ["Je pense à ma ville.", "Pienso en mi ciudad.", "penser à"],
        ["tenir à quelqu'un · tenir de son père", "apreciar a alguien · parecerse a su padre", "tenir à / de"]
      ]],
      ej: [["Ma famille me manque beaucoup.", "Echo mucho de menos a mi familia."], ["Qu'est-ce que tu penses de ce film ?", "¿Qué opinas de esta película?"], ["Elle joue de la guitare depuis dix ans.", "Toca la guitarra desde hace diez años."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je manque ma mère.", "Ma mère me manque.", "Lo echado de menos es el sujeto."], ["Mon fils joue au piano.", "Mon fils joue du piano.", "Instrumento: jouer de."], ["Qu'est-ce que tu penses à ce film ?", "Qu'est-ce que tu penses de ce film ?", "Opinar: penser de."]] }
  ],
  ejemplos: [
    { sit: "«Extraño a mis amigos.»", resp: "Mes amis me manquent.", pasos: ["Sujeto: mes amis.", "Verbo en plural."], porque: "manquer à." },
    { sit: "«Toca el violín.»", resp: "Il joue du violon.", pasos: ["Instrumento: de + le = du."], porque: "jouer de." },
    { sit: "«¿Qué opinas de él?»", resp: "Qu'est-ce que tu penses de lui ?", pasos: ["Opinar: penser de."], porque: "Opinión." }
  ],
  comprueba: [
    { q: "«Tu me manques» significa…", o: ["Te extraño.", "Me extrañas."], a: 0, b: "gr", porque: "Al revés." },
    { q: "Con un instrumento se dice…", o: ["jouer de", "jouer à"], a: 0, b: "gr", porque: "jouer du piano." },
    { q: "«Il manque de patience» significa…", o: ["Le falta paciencia.", "Extraña la paciencia."], a: 0, b: "gr", porque: "manquer de." }
  ],
  practica: [
    { fase: "guiada", c: ["b2vc-jouer"], k: "sort", ask: "¿Jouer à o jouer de?", q: "Clasifica.", cats: ["jouer à", "jouer de"], items: [["les cartes", 0], ["le football", 0], ["les échecs", 0], ["cache-cache", 0], ["la flûte", 1], ["la batterie", 1], ["l'accordéon", 1], ["la harpe", 1]], pista: "Instrumento: de.", why: "Construcciones." },
    { fase: "guiada", c: ["b2vc-manquer"], k: "choice", ask: "«Extraño a mis amigos.»", q: "«___»", o: ["Mes amis me manquent.", "Je manque mes amis."], a: 0, pista: "Al revés.", why: "<b>Mes amis me manquent.</b>" },
    { fase: "guiada", c: ["b2vc-jouer"], k: "choice", ask: "«Toca el violín.»", q: "«Il joue ___ violon.»", o: ["du", "au"], a: 0, pista: "Instrumento.", why: "<b>du</b>." },
    { fase: "indep", c: ["b2vc-jouer"], k: "choice", ask: "«¿Qué opinas de él?»", q: "«Qu'est-ce que tu penses ___ lui ?»", o: ["de", "à"], a: 0, why: "<b>de</b>." },
    { fase: "indep", c: ["b2vc-manquer"], k: "fill", ask: "«carece de experiencia»", q: "Cette équipe manque ___ expérience.", acc: ["d'", "d’"], why: "<b>d'</b>." },
    { fase: "indep", c: ["b2vc-manquer"], k: "fill", ask: "«Te extraño, ¡vuelve pronto!»", q: "Tu ___ manques, reviens vite !", acc: ["me"], why: "<b>me</b>." },
    { fase: "aplica", c: ["b2vc-jouer", "b2vc-manquer"], k: "match", ask: "Une cada expresión con su traducción.", q: "Francés → español", pairs: [["jouer au tennis", "jugar tenis"], ["jouer du piano", "tocar el piano"], ["tenir à quelqu'un", "apreciar a alguien"], ["tenir de son père", "parecerse a su padre"]], why: "Construcciones." },
    { fase: "aplica", c: ["b2vc-jouer"], k: "spot", ask: "Encuentra el error.", s: "Mon fils joue [au] piano depuis l'âge de six ans .", fix: "du", why: "<b>du</b>." },
    { fase: "aplica", c: ["b2vc-manquer"], k: "spot", ask: "Encuentra el error (= extraño a mi mamá).", s: "Depuis septembre , [je manque ma mère] .", fix: "ma mère me manque", why: "<b>ma mère me manque</b>." },
    { fase: "dominio", c: ["b2vc-manquer"], k: "order", ask: "Ordena: «Te extraño mucho».", tokens: ["Tu", "me manques", "beaucoup."], why: "<b>Tu me manques beaucoup.</b>" },
    { fase: "dominio", c: ["b2vc-manquer"], k: "choice", ask: "«Le falta paciencia.»", q: "«___»", o: ["Il manque de patience.", "La patience lui manque de."], a: 0, why: "<b>manquer de</b>." },
    { fase: "dominio", c: ["b2vc-jouer", "b2vc-manquer"], k: "listen", say: "Depuis que je vis à l'étranger, mon pays me manque énormément.", acc: ["Depuis que je vis à l'étranger, mon pays me manque énormément."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Depuis que je vis à l'étranger, mon pays me manque énormément.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paris"], previo: [] }
};

E["b12-nominalisation"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "La nominalisation : du verbe au nom",
  objetivo: {
    que: "Vas a transformar verbos y adjetivos en nombres (partir → le départ, lent → la lenteur), como en titulares e informes.",
    corto: "Fermeture exceptionnelle lundi. · Hausse des prix.",
    podras: ["Formar nombres con -tion / -ation y -ment: l'organisation, le changement.", "Formar nombres con -age y -ure: le nettoyage, l'ouverture.", "Conocer los nombres irregulares (le départ, l'arrivée, le choix, la vente) y los de adjetivos (la lenteur)."],
    iconos: ["ic2/libro", "ic2/lapiz", "ic2/pergamino"],
    previos: ["La voz pasiva (lección 6) y la prensa (B1.1, lección 58)."],
    capacidad: "Ahora escribes titulares y informes con nombres en lugar de verbos."
  },
  requiere: R("b2vp-forme", "b1md-presse"), recupera: ["b1md-presse"],
  conceptos: {
    "b2no-suff": { n: "-tion / -ation (construire → la construction), -ment (changer → le changement): titulares e informes", b: "gr" },
    "b2no-autres": { n: "-age (le nettoyage), -ure (l'ouverture), irregulares (le départ, l'arrivée, le choix, la vente) y adjetivos (lent → la lenteur)", b: "gr" }
  },
  video: {
    titulo: "Del verbo al nombre", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/libro", grande: "fermer → la fermeture", seg: [
        { es: "Hola. Los titulares prefieren nombres." } ] },
      { v: "frase", filas: [
          { nota: "-tion", p: 1, partes: [["construire → la construction", "-", 1]] },
          { nota: "-ment", p: 2, partes: [["changer → le changement", "-", 2]] },
          { nota: "irregular", p: 3, partes: [["partir → le départ", "-", 3]] } ], seg: [
        { fr: "construire, la construction", p: 1 }, { fr: "changer, le changement", p: 2 }, { fr: "partir, le départ", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«La salida del tren está prevista a las 9:15.»", o: ["Le départ du train est prévu à 9 h 15.", "Le partement du train est prévu à 9 h 15."], a: 0,
        bien: "¡Sí! partir → le départ.", mal: "Irregular: le départ.",
        seg: [ { es: "Pausa. La salida." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["la construction", "le changement", "le nettoyage", "l'ouverture", "le départ", "la lenteur"], seg: [
        { es: "Típico de la prensa.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Los titulares", img: "bg-biblioteca", yo: "camila",
    escena: "Camila y Hugo leen titulares para el curso.",
    pj: PJ,
    lineas: [
      ["hugo", "Regarde : « Fermeture de l'usine de Lyon ». « Hausse des prix de l'énergie ».", "Mira: «Cierre de la fábrica de Lyon». «Subida de los precios de la energía»."],
      ["camila", "Et ici : « L'inauguration du nouveau musée aura lieu le premier juin. »", "Y aquí: «La inauguración del nuevo museo tendrá lugar el primero de junio»."],
      ["hugo", "C'est la nominalisation : fermer, la fermeture ; inaugurer, l'inauguration. L'augmentation des prix inquiète les consommateurs.", "Es la nominalización: cerrar, el cierre; inaugurar, la inauguración. El aumento de los precios preocupa a los consumidores."],
      ["camila", "Et « Le départ est prévu à 8 heures » : partir, le départ. On se plaint aussi de la lenteur du service.", "Y «La salida está prevista a las 8»: partir, la salida. También se quejan de la lentitud del servicio."]
    ],
    fijate: "Fíjate: la fermeture, la hausse, l'inauguration, l'augmentation, le départ, la lenteur: nombres en lugar de verbos o adjetivos."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Los sufijos de la nominalización",
      idea: "Nominalizar es transformar un verbo o un adjetivo en nombre. -tion / -ation (femenino): organiser → l'organisation, construire → la construction. -ment (masculino): changer → le changement, lancer → le lancement. -age (masculino): nettoyer → le nettoyage, laver → le lavage. -ure (femenino): ouvrir → l'ouverture, fermer → la fermeture. Irregulares: partir → le départ, arriver → l'arrivée, choisir → le choix, vendre → la vente, réussir → la réussite. De adjetivos: lent → la lenteur. Típico de titulares: Hausse des prix (los precios suben).",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Sufijo"], [
        ["construire → la construction · organiser → l'organisation · création · réparation · inscription · pollution", "construcción · organización · creación · reparación · inscripción · contaminación", "-tion"],
        ["changer → le changement · développement · remboursement · licenciement · déménagement", "cambio · desarrollo · reembolso · despido · mudanza", "-ment"],
        ["nettoyer → le nettoyage · laver → le lavage", "limpieza · lavado", "-age"],
        ["ouvrir → l'ouverture · ouverture · fermer → la fermeture", "apertura · cierre", "-ure"],
        ["partir → le départ · départ · arriver → l'arrivée", "salida · llegada", "irregular"],
        ["choisir → le choix · vendre → la vente · réussir → la réussite", "elección · venta · éxito", "irregular"],
        ["lent → la lenteur · lenteur", "lentitud", "adjetivo"],
        ["Hausse des prix", "Los precios suben", "titular"],
        ["L'inauguration du nouveau musée…", "La inauguración del nuevo museo…", "informe"]
      ]],
      ej: [["Fermeture exceptionnelle du magasin lundi.", "Cierre excepcional de la tienda el lunes."], ["L'augmentation des prix inquiète les consommateurs.", "La subida de precios preocupa a los consumidores."], ["Le départ est prévu à 8 heures.", "La salida está prevista a las 8."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["la partition (de partir)", "le départ", "Nominalización de partir: le départ."], ["le partement du train", "le départ du train", "Irregular."], ["la ouverture", "l'ouverture", "Elisión ante vocal."]] }
  ],
  ejemplos: [
    { sit: "construire →", resp: "la construction", pasos: ["-tion."], porque: "Femenino." },
    { sit: "arriver →", resp: "l'arrivée", pasos: ["Irregular."], porque: "Femenino." },
    { sit: "«Los precios suben» (titular)", resp: "Hausse des prix", pasos: ["Nombre sin verbo."], porque: "Prensa." }
  ],
  comprueba: [
    { q: "El nombre de partir es…", o: ["le départ", "la partition"], a: 0, b: "gr", porque: "Irregular." },
    { q: "Los nombres en -ment son…", o: ["masculinos", "femeninos"], a: 0, b: "gr", porque: "le changement." },
    { q: "El nombre de ouvrir es…", o: ["l'ouverture", "l'ouvrage"], a: 0, b: "gr", porque: "-ure." }
  ],
  practica: [
    { fase: "guiada", c: ["b2no-suff"], k: "sort", ask: "¿Sufijo -ment o -tion?", q: "Clasifica.", cats: ["-ment", "-tion"], items: [["développement", 0], ["remboursement", 0], ["licenciement", 0], ["déménagement", 0], ["pollution", 1], ["création", 1], ["réparation", 1], ["inscription", 1]], pista: "Mira el final.", why: "Sufijos." },
    { fase: "guiada", c: ["b2no-suff"], k: "choice", ask: "construire →", q: "«construire →»", o: ["la construction", "le construisement"], a: 0, pista: "-tion.", why: "<b>la construction</b>." },
    { fase: "guiada", c: ["b2no-autres"], k: "choice", ask: "arriver →", q: "«arriver →»", o: ["l'arrivée", "l'arrivement"], a: 0, pista: "Irregular.", why: "<b>l'arrivée</b>." },
    { fase: "indep", c: ["b2no-suff"], k: "choice", ask: "Titular: «Los precios suben».", q: "«___»", o: ["Hausse des prix", "Les prix hausse"], a: 0, why: "<b>Hausse des prix</b>." },
    { fase: "indep", c: ["b2no-autres"], k: "fill", ask: "Nombre de ouvrir.", q: "ouvrir → l'___", acc: ["ouverture"], why: "<b>ouverture</b>." },
    { fase: "indep", c: ["b2no-autres"], k: "fill", ask: "Nombre del adjetivo lent.", q: "lent → la ___", acc: ["lenteur"], why: "<b>lenteur</b>." },
    { fase: "aplica", c: ["b2no-suff", "b2no-autres"], k: "match", ask: "Une cada verbo con su nombre.", q: "Verbo → nombre", pairs: [["changer", "le changement"], ["nettoyer", "le nettoyage"], ["vendre", "la vente"], ["choisir", "le choix"], ["réussir", "la réussite"]], why: "Nominalización." },
    { fase: "aplica", c: ["b2no-autres"], k: "spot", ask: "Encuentra el error.", s: "Le [partement] du train est prévu à 9 h 15 .", fix: "départ", why: "<b>départ</b>." },
    { fase: "aplica", c: ["b2no-suff"], k: "spot", ask: "Encuentra el error.", s: "L'[organisement] du festival a coûté cher .", fix: "organisation", why: "<b>organisation</b>." },
    { fase: "dominio", c: ["b2no-autres"], k: "order", ask: "Ordena el titular: «Cierre de la fábrica de Lyon».", tokens: ["Fermeture", "de l'usine", "de Lyon"], why: "<b>Fermeture de l'usine de Lyon</b>" },
    { fase: "dominio", c: ["b2no-autres"], k: "choice", ask: "fermer →", q: "«fermer →»", o: ["la fermeture", "le fermement"], a: 0, why: "<b>la fermeture</b>." },
    { fase: "dominio", c: ["b2no-suff", "b2no-autres"], k: "listen", say: "L'inauguration du nouveau musée aura lieu le premier juin.", acc: ["L'inauguration du nouveau musée aura lieu le premier juin."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>L'inauguration du nouveau musée aura lieu le premier juin.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Lyon"], previo: [] }
};

E["b12-subjonctif-relative"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Le subjonctif dans la relative : je cherche quelqu'un qui sache",
  objetivo: {
    que: "Vas a usar el subjuntivo en la relativa cuando el antecedente se busca, se niega o va tras un superlativo.",
    corto: "Je cherche quelqu'un qui sache cuisiner. · C'est le meilleur film que j'aie vu.",
    podras: ["Usar el subjuntivo con un antecedente buscado o deseado: je cherche un appartement qui soit calme.", "Usarlo con un antecedente negado y tras le seul, le meilleur, le premier.", "Volver al indicativo cuando el antecedente existe: j'ai trouvé un appartement qui est calme."],
    iconos: ["ic2/pregunta", "ic2/estrella", "ic2/bombilla"],
    previos: ["Los relativos (B1.1, lección 4), el subjuntivo (B1.1, lección 6) y el superlativo (B1.1, lección 39)."],
    capacidad: "Ahora escribes un anuncio: «cherche colocataire qui soit…»."
  },
  requiere: R("b1rel-quique", "b1sj-usage", "b1mm-sup"), recupera: ["b1rel-quique"],
  conceptos: {
    "b2sr-subj": { n: "subjuntivo en la relativa: antecedente buscado (je cherche quelqu'un qui sache), negado (personne qui…) o tras superlativo / le seul", b: "gr" },
    "b2sr-indic": { n: "antecedente que existe y es concreto → indicativo (j'ai trouvé un appartement qui est calme)", b: "gr" }
  },
  video: {
    titulo: "¿Existe o lo busco?", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/pregunta", grande: "qui sache", seg: [
        { es: "Hola. Como en español: busco a alguien que sepa." } ] },
      { v: "dos",
        a: { tag: "lo busco", fr: "Je cherche un hôtel qui ait un parking.", es: "subjuntivo" },
        b: { tag: "existe", fr: "J'ai trouvé un hôtel qui a un parking.", es: "indicativo" },
        seg: [ { es: "No sé si existe:", p: 1 }, { fr: "Je cherche un hôtel qui ait un parking.", p: 1 }, { es: "Ya lo encontré:", p: 2 }, { fr: "J'ai trouvé un hôtel qui a un parking.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Buscamos un asistente que pueda trabajar el fin de semana.»", o: ["Nous cherchons un assistant qui puisse travailler le week-end.", "Nous cherchons un assistant qui peut travailler le week-end."], a: 0,
        bien: "¡Sí! Antecedente buscado: puisse.", mal: "No sabemos si existe: subjuntivo.",
        seg: [ { es: "Pausa. Que pueda." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["qui sache", "qui soit", "qui puisse", "le meilleur que j'aie vu", "qui est"], seg: [
        { es: "Si existe: indicativo.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El nuevo apartamento", img: "bg-cafe", yo: "camila",
    escena: "Camila busca apartamento y compañero de piso.",
    pj: PJ,
    lineas: [
      ["camila", "Je cherche un logement qui soit proche de mon travail et pas trop cher.", "Busco un alojamiento que esté cerca de mi trabajo y no sea muy caro."],
      ["hugo", "Et un colocataire ? Tu veux quelqu'un qui sache cuisiner ?", "¿Y un compañero de piso? ¿Quieres a alguien que sepa cocinar?"],
      ["camila", "Oui ! Mais il n'y a personne qui connaisse la réponse à mon annonce. C'est la seule solution qui soit possible pour moi.", "¡Sí! Pero no hay nadie que conozca la respuesta a mi anuncio. Es la única solución que sea posible para mí."],
      ["hugo", "Ma sœur a trouvé un appartement qui est lumineux. C'est la personne la plus gentille que je connaisse, elle va t'aider !", "Mi hermana encontró un apartamento que es luminoso. Es la persona más amable que conozco, ¡te va a ayudar!"]
    ],
    fijate: "Fíjate: qui soit, qui sache, qui connaisse, qui soit possible, que je connaisse (subjuntivo); un appartement qui est lumineux (existe: indicativo)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Subjuntivo o indicativo en la relativa",
      idea: "Subjuntivo cuando el antecedente es buscado o deseado (no se sabe si existe): Je cherche quelqu'un qui puisse m'aider. Cuando está negado: Il n'y a personne qui sache répondre. Il n'y a rien qui me plaise. Tras un superlativo o le seul, l'unique, le premier, le dernier: C'est le meilleur film que j'aie vu. C'est la seule personne qui me comprenne. Indicativo si el antecedente existe y es concreto: J'ai trouvé un appartement qui est calme.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Modo"], [
        ["Je cherche un hôtel qui ait une piscine. · ait un parking.", "Busco un hotel que tenga piscina.", "subjuntivo (buscado)"],
        ["Je cherche quelqu'un qui sache cuisiner. · sache", "Busco a alguien que sepa cocinar.", "subjuntivo"],
        ["qui puisse · puisse · qui soit · soit", "que pueda · que sea", "subjuntivo"],
        ["Il n'y a personne qui connaisse la réponse. · connaisse · Il n'y a rien qui me plaise.", "No hay nadie que sepa la respuesta. · No hay nada que me guste.", "subjuntivo (negado)"],
        ["Il n'y a personne qui veuille venir. · veuille venir.", "No hay nadie que quiera venir.", "subjuntivo (negado)"],
        ["C'est le seul ami qui me comprenne. · me fasse pleurer.", "Es el único amigo que me entiende.", "subjuntivo (le seul)"],
        ["C'est le meilleur livre que j'aie lu.", "Es el mejor libro que he leído.", "subjuntivo (superlativo)"],
        ["Connais-tu quelqu'un qui puisse venir ?", "¿Conoces a alguien que pueda venir?", "subjuntivo (pregunta)"],
        ["J'ai trouvé un appartement qui est lumineux. · J'ai un ami qui habite à Nice. · Voici l'hôtel qui a une piscine. · a un parking.", "Encontré un apartamento que es luminoso. · Tengo un amigo que vive en Niza.", "indicativo (existe)"],
        ["C'est un film qui dure trois heures. · Je connais quelqu'un qui peut venir.", "Es una película que dura tres horas. · Conozco a alguien que puede venir.", "indicativo"]
      ]],
      ej: [["Je cherche un stage qui soit bien payé.", "Busco unas prácticas que estén bien pagadas."], ["C'est le plus beau pays que je connaisse.", "Es el país más bonito que conozco."], ["Il n'y a rien qui puisse le consoler.", "No hay nada que pueda consolarlo."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je cherche quelqu'un qui sait parler chinois.", "Je cherche quelqu'un qui sache parler chinois.", "Antecedente buscado → subjuntivo."], ["Nous cherchons un assistant qui peut travailler le week-end.", "Nous cherchons un assistant qui puisse travailler le week-end.", "Subjuntivo."], ["J'ai trouvé un appartement qui soit calme.", "J'ai trouvé un appartement qui est calme.", "Existe → indicativo."]] }
  ],
  ejemplos: [
    { sit: "«Busco a alguien que sepa cocinar.»", resp: "Je cherche quelqu'un qui sache cuisiner.", pasos: ["Antecedente buscado: subjuntivo."], porque: "Hipotético." },
    { sit: "«Es el mejor libro que he leído.»", resp: "C'est le meilleur livre que j'aie lu.", pasos: ["Superlativo: subjuntivo pasado."], porque: "Superlativo." },
    { sit: "«Encontré un apartamento que es luminoso.»", resp: "J'ai trouvé un appartement qui est lumineux.", pasos: ["Existe: indicativo."], porque: "Concreto." }
  ],
  comprueba: [
    { q: "Si el antecedente se busca y no se sabe si existe, se usa…", o: ["subjuntivo", "indicativo"], a: 0, b: "gr", porque: "qui sache." },
    { q: "Tras «le seul», la relativa suele ir en…", o: ["subjuntivo", "condicional"], a: 0, b: "gr", porque: "le seul qui…" },
    { q: "«J'ai trouvé un hôtel qui ___ un parking.»", o: ["a", "ait"], a: 0, b: "gr", porque: "Existe." }
  ],
  practica: [
    { fase: "guiada", c: ["b2sr-subj", "b2sr-indic"], k: "sort", ask: "¿Subjuntivo o indicativo?", q: "Clasifica.", cats: ["Subjuntivo", "Indicativo"], items: [["Je cherche un hôtel qui ait une piscine.", 0], ["C'est le seul ami qui me comprenne.", 0], ["Il n'y a rien qui me plaise.", 0], ["Connais-tu quelqu'un qui puisse venir ?", 0], ["J'ai un ami qui habite à Nice.", 1], ["Voici l'hôtel qui a une piscine.", 1], ["C'est un film qui dure trois heures.", 1], ["Je connais quelqu'un qui peut venir.", 1]], pista: "¿Existe?", why: "Modos." },
    { fase: "guiada", c: ["b2sr-subj"], k: "choice", ask: "«Busco a alguien que sepa cocinar.»", q: "«Je cherche quelqu'un qui ___ cuisiner.»", o: ["sache", "sait"], a: 0, pista: "Buscado.", why: "<b>sache</b>." },
    { fase: "guiada", c: ["b2sr-subj"], k: "choice", ask: "«Es el mejor libro que he leído.»", q: "«___»", o: ["C'est le meilleur livre que j'aie lu.", "C'est le meilleur livre que j'ai lu."], a: 0, pista: "Superlativo.", why: "<b>j'aie lu</b>." },
    { fase: "indep", c: ["b2sr-indic"], k: "choice", ask: "«Encontré un apartamento que es luminoso.»", q: "«J'ai trouvé un appartement qui ___ lumineux.»", o: ["est", "soit"], a: 0, why: "<b>est</b>." },
    { fase: "indep", c: ["b2sr-subj"], k: "fill", ask: "Subjuntivo de connaître.", q: "Il n'y a personne qui ___ la réponse.", acc: ["connaisse"], why: "<b>connaisse</b>." },
    { fase: "indep", c: ["b2sr-subj"], k: "fill", ask: "Subjuntivo de être.", q: "C'est la seule solution qui ___ possible.", acc: ["soit"], why: "<b>soit</b>." },
    { fase: "aplica", c: ["b2sr-subj", "b2sr-indic"], k: "match", ask: "Une cada principio con su final.", q: "Antecedente → relativa", pairs: [["Je cherche un hôtel qui", "ait un parking."], ["J'ai trouvé un hôtel qui", "a un parking."], ["C'est le seul film qui", "me fasse pleurer."], ["Il n'y a personne qui", "veuille venir."]], why: "Modos." },
    { fase: "aplica", c: ["b2sr-subj"], k: "spot", ask: "Encuentra el error.", s: "Nous cherchons un assistant qui [peut] travailler le week-end .", fix: "puisse", why: "<b>puisse</b>." },
    { fase: "aplica", c: ["b2sr-indic"], k: "spot", ask: "Encuentra el error.", s: "Ma sœur a trouvé un appartement qui [soit] calme .", fix: "est", why: "<b>est</b>." },
    { fase: "dominio", c: ["b2sr-subj"], k: "order", ask: "Ordena: «Es la persona más amable que conozco».", tokens: ["C'est la personne", "la plus gentille", "que je connaisse."], why: "<b>C'est la personne la plus gentille que je connaisse.</b>" },
    { fase: "dominio", c: ["b2sr-subj"], k: "choice", ask: "«No hay nada que pueda consolarlo.»", q: "«Il n'y a rien qui ___ le consoler.»", o: ["puisse", "peut"], a: 0, why: "<b>puisse</b>." },
    { fase: "dominio", c: ["b2sr-subj", "b2sr-indic"], k: "listen", say: "Je cherche un logement qui soit proche de mon travail et pas trop cher.", acc: ["Je cherche un logement qui soit proche de mon travail et pas trop cher."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je cherche un logement qui soit proche de mon travail et pas trop cher.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Nice"], previo: [] }
};

/* ================================ B1.2·8 · Relaciones lógicas ================================ */
E["b12-condition"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Exprimer la condition : au cas où, à condition de, en cas de, pourvu que",
  objetivo: {
    que: "Vas a expresar la condición sin si: au cas où, en cas de, à condition de / que, pourvu que, sinon.",
    corto: "Au cas où il pleuvrait… · En cas d'urgence… · Pourvu qu'il fasse beau !",
    podras: ["Usar au cas où + condicional (por si) y en cas de + nombre (en caso de).", "Usar à condition de + infinitivo y à condition que / pourvu que + subjuntivo.", "Usar sinon para «si no»."],
    iconos: ["ic2/bombilla", "ic2/pregunta", "ic2/movil"],
    previos: ["La hipótesis con si (lección 1), las conjunciones con subjuntivo (lección 19) y el condicional (B1.1, lección 7)."],
    capacidad: "Ahora dejas instrucciones: «en cas de problème, appelle-moi»."
  },
  requiere: R("b2si-possible", "b2sc-subj", "b1co-forme"), recupera: ["b2sc-subj"],
  conceptos: {
    "b2cd-cas": { n: "au cas où + condicional (au cas où il pleuvrait); en cas de + nombre (en cas d'urgence)", b: "gr" },
    "b2cd-cond": { n: "à condition de + infinitivo / à condition que + subjuntivo; pourvu que + subjuntivo (con tal de que, ojalá); sinon", b: "gr" }
  },
  video: {
    titulo: "Condiciones sin si", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/bombilla", grande: "au cas où", seg: [
        { es: "Hola. Hay muchas formas de poner una condición." } ] },
      { v: "frase", filas: [
          { nota: "por si", p: 1, partes: [["Prends un parapluie au cas où il pleuvrait.", "-", 1]] },
          { nota: "en caso de", p: 2, partes: [["En cas d'urgence, appelez le 112.", "-", 2]] },
          { nota: "ojalá", p: 3, partes: [["Pourvu qu'il fasse beau !", "-", 3]] } ], seg: [
        { fr: "Prends un parapluie au cas où il pleuvrait.", p: 1 }, { fr: "En cas d'urgence, appelez le 112.", p: 2 }, { fr: "Pourvu qu'il fasse beau !", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Lleva tu abrigo por si hace frío esta noche.»", o: ["Prends ton manteau au cas où il ferait froid ce soir.", "Prends ton manteau au cas où il fait froid ce soir."], a: 0,
        bien: "¡Sí! Au cas où + condicional.", mal: "Au cas où va con condicional: ferait.",
        seg: [ { es: "Pausa. Por si hace frío." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["au cas où", "en cas de", "à condition de", "pourvu que", "sinon"], seg: [
        { es: "Cada una con su construcción.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Instrucciones para el viaje", img: "bg-universidad", yo: "camila",
    escena: "Camila deja instrucciones a Hugo antes de un paseo.",
    pj: PJ,
    lineas: [
      ["camila", "Je te laisse mon numéro au cas où tu aurais une question. En cas de problème, appelle-moi.", "Te dejo mi número por si tienes una pregunta. En caso de problema, llámame."],
      ["hugo", "D'accord. Je peux venir avec ma sœur ?", "De acuerdo. ¿Puedo ir con mi hermana?"],
      ["camila", "Oui, à condition de prévenir avant. Prends ton manteau au cas où il ferait froid ce soir.", "Sí, a condición de avisar antes. Lleva tu abrigo por si hace frío esta noche."],
      ["hugo", "Pourvu qu'il ne soit pas en retard, le bus ! Dépêche-toi, sinon tu vas le rater.", "¡Ojalá el bus no llegue tarde! Apúrate, si no lo vas a perder."]
    ],
    fijate: "Fíjate: au cas où tu aurais, au cas où il ferait (condicional); en cas de problème (nombre); à condition de prévenir (infinitivo); pourvu qu'il ne soit pas (subjuntivo); sinon."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Cada condición con su construcción",
      idea: "Au cas où + condicional = por si: Prends un parapluie au cas où il pleuvrait. En cas de + nombre = en caso de: En cas d'urgence, appelez le 112. À condition de + infinitivo (mismo sujeto) o à condition que + subjuntivo = a condición de (que). Pourvu que + subjuntivo = con tal de que, o un deseo: ¡Ojalá!: Pourvu qu'il fasse beau ! Sinon = si no, de lo contrario: Dépêche-toi, sinon tu vas rater le bus.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Construcción"], [
        ["au cas où il pleuvrait · Au cas où", "por si llueve", "au cas où + condicional"],
        ["au cas où tu viendrais · au cas où il ferait froid · ferait", "por si vienes · por si hace frío", "condicional"],
        ["en cas de panne · en cas d'absence · en cas de doute · en cas de pluie", "en caso de avería · ausencia · duda · lluvia", "en cas de + nombre"],
        ["En cas d'incendie, … · En cas de problème, …", "En caso de incendio… · de problema…", "en cas de"],
        ["à condition de prévenir · de", "a condición de avisar", "+ infinitivo"],
        ["à condition que tu paies", "a condición de que pagues", "+ subjuntivo"],
        ["pourvu qu'il vienne · Pourvu qu'il ne soit pas en retard !", "con tal de que venga · ¡Ojalá no llegue tarde!", "+ subjuntivo"],
        ["si tu veux", "si quieres", "si + indicativo"],
        ["sinon", "si no, de lo contrario", "alternativa"]
      ]],
      ej: [["Au cas où tu aurais besoin de moi, appelle-moi.", "Por si me necesitas, llámame."], ["En cas de retard, prévenez l'accueil.", "En caso de retraso, avisen a recepción."], ["Tu peux sortir à condition de rentrer avant minuit.", "Puedes salir a condición de volver antes de medianoche."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Au cas où il pleut, …", "Au cas où il pleuvrait, …", "Au cas où + condicional."], ["En cas d'il pleut, …", "En cas de pluie, …", "En cas de + nombre."], ["Pourvu qu'il fait beau !", "Pourvu qu'il fasse beau !", "Pourvu que + subjuntivo."]] }
  ],
  ejemplos: [
    { sit: "«Por si llueve…»", resp: "Au cas où il pleuvrait…", pasos: ["au cas où + condicional."], porque: "Previsión." },
    { sit: "«En caso de incendio…»", resp: "En cas d'incendie…", pasos: ["en cas de + nombre."], porque: "Instrucción." },
    { sit: "«¡Ojalá no llegue tarde!»", resp: "Pourvu qu'il ne soit pas en retard !", pasos: ["pourvu que + subjuntivo."], porque: "Deseo." }
  ],
  comprueba: [
    { q: "Au cas où va con…", o: ["condicional", "subjuntivo"], a: 0, b: "gr", porque: "au cas où il pleuvrait." },
    { q: "En cas de va con…", o: ["un nombre", "un verbo conjugado"], a: 0, b: "gr", porque: "en cas de pluie." },
    { q: "Pourvu que va con…", o: ["subjuntivo", "indicativo"], a: 0, b: "gr", porque: "pourvu qu'il vienne." }
  ],
  practica: [
    { fase: "guiada", c: ["b2cd-cas", "b2cd-cond"], k: "sort", ask: "¿Va seguido de un nombre o de un verbo conjugado?", q: "Clasifica.", cats: ["+ nombre", "+ verbo conjugado"], items: [["en cas de panne", 0], ["en cas d'absence", 0], ["en cas de doute", 0], ["en cas de pluie", 0], ["au cas où tu viendrais", 1], ["pourvu qu'il vienne", 1], ["à condition que tu paies", 1], ["si tu veux", 1]], pista: "En cas de: nombre.", why: "Construcciones." },
    { fase: "guiada", c: ["b2cd-cas"], k: "choice", ask: "«Por si llueve…»", q: "«___ il pleuvrait, prends un parapluie.»", o: ["Au cas où", "En cas de"], a: 0, pista: "+ verbo.", why: "<b>Au cas où</b>." },
    { fase: "guiada", c: ["b2cd-cas"], k: "choice", ask: "«En caso de incendio…»", q: "«___, sortez par l'escalier.»", o: ["En cas d'incendie", "Au cas où incendie"], a: 0, pista: "+ nombre.", why: "<b>En cas d'incendie</b>." },
    { fase: "indep", c: ["b2cd-cond"], k: "choice", ask: "«¡Ojalá no llegue tarde!»", q: "«___»", o: ["Pourvu qu'il ne soit pas en retard !", "Pourvu qu'il n'est pas en retard !"], a: 0, why: "<b>soit</b>." },
    { fase: "indep", c: ["b2cd-cond"], k: "fill", ask: "«a condición de avisar»", q: "Tu peux venir à condition ___ prévenir avant.", acc: ["de"], why: "<b>de</b>." },
    { fase: "indep", c: ["b2cd-cond"], k: "fill", ask: "«si no»", q: "Dépêche-toi, ___ tu vas rater le bus.", acc: ["sinon"], why: "<b>sinon</b>." },
    { fase: "aplica", c: ["b2cd-cas", "b2cd-cond"], k: "match", ask: "Une cada expresión con su construcción.", q: "Expresión → construcción", pairs: [["au cas où", "+ condicional"], ["en cas de", "+ nombre"], ["pourvu que", "+ subjuntivo"], ["à condition de", "+ infinitivo"]], why: "Construcciones." },
    { fase: "aplica", c: ["b2cd-cas"], k: "spot", ask: "Encuentra el error.", s: "Prends ton manteau au cas où il [fait] froid ce soir .", fix: "ferait", why: "<b>ferait</b>." },
    { fase: "aplica", c: ["b2cd-cond"], k: "spot", ask: "Encuentra el error.", s: "Pourvu qu'il [fait] beau demain !", fix: "fasse", why: "<b>fasse</b>." },
    { fase: "dominio", c: ["b2cd-cas"], k: "order", ask: "Ordena: «En caso de problema, llámame».", tokens: ["En cas", "de problème,", "appelle-moi."], why: "<b>En cas de problème, appelle-moi.</b>" },
    { fase: "dominio", c: ["b2cd-cas"], k: "choice", ask: "«Te dejo mi número por si tienes una pregunta.»", q: "«Je te laisse mon numéro au cas où tu ___ une question.»", o: ["aurais", "as"], a: 0, why: "<b>aurais</b>." },
    { fase: "dominio", c: ["b2cd-cas", "b2cd-cond"], k: "listen", say: "Je te laisse mon numéro au cas où tu aurais une question.", acc: ["Je te laisse mon numéro au cas où tu aurais une question."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je te laisse mon numéro au cas où tu aurais une question.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

E["b12-opposer-deux-idees"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Opposer deux idées : alors que, tandis que, en revanche, contrairement à",
  objetivo: {
    que: "Vas a contrastar dos hechos: alors que / tandis que, en revanche / par contre, contrairement à, au lieu de.",
    corto: "Ma sœur adore la ville, tandis que moi, je préfère la campagne.",
    podras: ["Usar alors que / tandis que + indicativo (mientras que).", "Usar en revanche (escrito) y par contre (oral) al inicio de la frase.", "Usar contrairement à + nombre y au lieu de + infinitivo."],
    iconos: ["ic2/espadas", "ic2/mundo", "ic2/lapiz"],
    previos: ["La oposición y la concesión (B1.1, lección 10) y las conjunciones con subjuntivo (lección 19)."],
    capacidad: "Ahora comparas dos países o dos opciones en un texto."
  },
  requiere: R("b1oc-oppo", "b1oc-conc"), recupera: ["b1oc-oppo"],
  conceptos: {
    "b2oi-conj": { n: "alors que / tandis que + indicativo (mientras que); d'une part… d'autre part", b: "gr" },
    "b2oi-mots": { n: "en revanche (escrito) / par contre (oral); contrairement à + nombre; au lieu de + infinitivo; malgré + nombre", b: "gr" }
  },
  video: {
    titulo: "Contrastar dos ideas", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/espadas", grande: "tandis que", seg: [
        { es: "Hola. Para oponer dos hechos en una frase." } ] },
      { v: "frase", filas: [
          { nota: "mientras que", p: 1, partes: [["Il aime la mer alors que je préfère la montagne.", "-", 1]] },
          { nota: "en cambio", p: 2, partes: [["Le quartier est bruyant ; en revanche, il est bien desservi.", "-", 2]] },
          { nota: "al contrario de", p: 3, partes: [["Contrairement à toi, je me lève tôt.", "-", 3]] } ], seg: [
        { fr: "Il aime la mer alors que je préfère la montagne.", p: 1 }, { fr: "Le quartier est bruyant ; en revanche, il est bien desservi.", p: 2 }, { fr: "Contrairement à toi, je me lève tôt.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Al contrario de lo que se piensa, este restaurante es barato.»", o: ["Contrairement à ce qu'on pense, ce restaurant est bon marché.", "Contrairement de ce qu'on pense, ce restaurant est bon marché."], a: 0,
        bien: "¡Sí! Contrairement à.", mal: "Siempre contrairement à.",
        seg: [ { es: "Pausa. Al contrario de." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["alors que", "tandis que", "en revanche", "par contre", "contrairement à", "au lieu de"], seg: [
        { es: "Par contre, mejor en el oral.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Francia y Colombia", img: "bg-cafe", yo: "camila",
    escena: "Camila compara costumbres con Hugo.",
    pj: PJ,
    lineas: [
      ["camila", "En France, on dîne à 20 h, alors qu'en Colombie on dîne souvent plus tôt.", "En Francia se cena a las 8, mientras que en Colombia se cena a menudo más temprano."],
      ["hugo", "Contrairement à toi, je préfère le thé. Ma sœur adore la ville, tandis que moi, je préfère la campagne.", "Al contrario de ti, prefiero el té. Mi hermana adora la ciudad, mientras que yo prefiero el campo."],
      ["camila", "Mon quartier est bruyant ; en revanche, il est bien desservi. D'une part, c'est pratique ; d'autre part, c'est cher.", "Mi barrio es ruidoso; en cambio, está bien comunicado. Por una parte es práctico; por otra, es caro."],
      ["hugo", "Au lieu de te plaindre, aide-moi à chercher un autre appartement !", "¡En lugar de quejarte, ayúdame a buscar otro apartamento!"]
    ],
    fijate: "Fíjate: alors qu'en Colombie, tandis que moi (+ frase); contrairement à toi (+ pronombre); en revanche; d'une part… d'autre part; au lieu de te plaindre (+ infinitivo)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Conectores de oposición",
      idea: "Alors que / tandis que + indicativo = mientras que: Il aime la mer alors que je préfère la montagne. En revanche (escrito) / par contre (oral) = en cambio, al inicio de la frase. Contrairement à + nombre o pronombre = al contrario de: Contrairement à son frère, elle adore le sport. Au lieu de + infinitivo = en lugar de: Au lieu de te plaindre, agis ! D'une part… d'autre part = por una parte… por otra.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Construcción"], [
        ["alors que · alors · tandis que · tandis · même si · bien que", "mientras que · aunque", "+ frase (verbo conjugado)"],
        ["contrairement à · au lieu de · malgré · à l'inverse de", "al contrario de · en lugar de · a pesar de · a la inversa de", "+ nombre o infinitivo"],
        ["Contrairement à toi, je préfère le thé. · à", "Al contrario de ti, prefiero el té.", "contrairement à"],
        ["En revanche, · en revanche", "En cambio (escrito)", "inicio de frase"],
        ["par contre", "en cambio (oral)", "inicio de frase"],
        ["Au lieu de te plaindre, aide-moi.", "En lugar de quejarte, ayúdame.", "au lieu de + infinitivo"],
        ["d'une part… d'autre part · autre", "por una parte… por otra", "estructura"],
        ["En revanche, le prix est élevé.", "En cambio, el precio es alto.", "ejemplo"]
      ]],
      ej: [["En France, on dîne à 20 h, alors qu'en Espagne on dîne plus tard.", "En Francia se cena a las 20 h, mientras que en España se cena más tarde."], ["Le quartier est bruyant ; en revanche, il est bien desservi.", "El barrio es ruidoso; en cambio, está bien comunicado."], ["Contrairement à son frère, elle adore le sport.", "Al contrario que su hermano, le encanta el deporte."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Contrairement de mon frère…", "Contrairement à mon frère…", "contrairement à."], ["Au lieu de tu te plains, agis !", "Au lieu de te plaindre, agis !", "au lieu de + infinitivo."], ["Par contre (en una carta formal)", "En revanche", "Par contre es oral."]] }
  ],
  ejemplos: [
    { sit: "«Al contrario que tú, yo prefiero el té.»", resp: "Contrairement à toi, je préfère le thé.", pasos: ["contrairement à + pronombre tónico."], porque: "Contraste." },
    { sit: "«En cambio» (escrito)", resp: "En revanche,", pasos: ["Registro formal."], porque: "Escrito." },
    { sit: "«En lugar de quejarte, ayúdame.»", resp: "Au lieu de te plaindre, aide-moi.", pasos: ["au lieu de + infinitivo."], porque: "Alternativa." }
  ],
  comprueba: [
    { q: "«Tandis que» va seguido de…", o: ["un verbo conjugado (indicativo)", "un infinitivo"], a: 0, b: "gr", porque: "+ frase." },
    { q: "En un texto escrito, «en cambio» se dice…", o: ["en revanche", "par contre"], a: 0, b: "gr", porque: "Registro." },
    { q: "«Au lieu de» va seguido de…", o: ["un infinitivo", "un verbo conjugado"], a: 0, b: "gr", porque: "au lieu de te plaindre." }
  ],
  practica: [
    { fase: "guiada", c: ["b2oi-conj", "b2oi-mots"], k: "sort", ask: "¿Va seguido de una frase o de un nombre / infinitivo?", q: "Clasifica.", cats: ["+ frase (verbo conjugado)", "+ nombre o infinitivo"], items: [["alors que", 0], ["tandis que", 0], ["même si", 0], ["bien que", 0], ["contrairement à", 1], ["au lieu de", 1], ["malgré", 1], ["à l'inverse de", 1]], pista: "Que: frase.", why: "Construcciones." },
    { fase: "guiada", c: ["b2oi-mots"], k: "choice", ask: "«Al contrario que tú, prefiero el té.»", q: "«___ toi, je préfère le thé.»", o: ["Contrairement à", "Contrairement de"], a: 0, pista: "à.", why: "<b>Contrairement à</b>." },
    { fase: "guiada", c: ["b2oi-mots"], k: "choice", ask: "«En cambio» en un texto escrito.", q: "«Le quartier est bruyant ; ___, il est bien desservi.»", o: ["en revanche", "par contre"], a: 0, pista: "Escrito.", why: "<b>en revanche</b>." },
    { fase: "indep", c: ["b2oi-mots"], k: "choice", ask: "«En lugar de quejarte, ayúdame.»", q: "«___»", o: ["Au lieu de te plaindre, aide-moi.", "Au lieu de tu te plains, aide-moi."], a: 0, why: "<b>Au lieu de te plaindre</b>." },
    { fase: "indep", c: ["b2oi-conj"], k: "fill", ask: "«mientras que» (alors…)", q: "Il travaille beaucoup ___ que son frère ne fait rien.", acc: ["alors", "tandis"], why: "<b>alors que / tandis que</b>." },
    { fase: "indep", c: ["b2oi-conj"], k: "fill", ask: "«por otra parte»", q: "D'une part, c'est pratique ; d'___ part, c'est cher.", acc: ["autre"], why: "<b>autre</b>." },
    { fase: "aplica", c: ["b2oi-conj", "b2oi-mots"], k: "match", ask: "Une cada conector con su uso.", q: "Conector → uso", pairs: [["par contre", "oral"], ["en revanche", "escrito"], ["tandis que", "+ indicativo"], ["contrairement à", "+ nombre"]], why: "Usos." },
    { fase: "aplica", c: ["b2oi-mots"], k: "spot", ask: "Encuentra el error.", s: "Contrairement [de] ce qu'on pense , ce restaurant est bon marché .", fix: "à", why: "<b>à</b>." },
    { fase: "aplica", c: ["b2oi-mots"], k: "spot", ask: "Encuentra el error.", s: "Au lieu [de tu regardes] la télé , fais tes devoirs .", fix: "de regarder", why: "<b>de regarder</b>." },
    { fase: "dominio", c: ["b2oi-mots"], k: "order", ask: "Ordena: «En cambio, el precio es alto».", tokens: ["En revanche,", "le prix", "est élevé."], why: "<b>En revanche, le prix est élevé.</b>" },
    { fase: "dominio", c: ["b2oi-conj"], k: "choice", ask: "«En Francia se cena a las 8, mientras que en Colombia se cena antes.»", q: "«En France, on dîne à 20 h, ___ en Colombie on dîne plus tôt.»", o: ["alors qu'", "au lieu d'"], a: 0, why: "<b>alors qu'</b>." },
    { fase: "dominio", c: ["b2oi-conj", "b2oi-mots"], k: "listen", say: "Ma sœur adore la ville, tandis que moi, je préfère la campagne.", acc: ["Ma sœur adore la ville, tandis que moi, je préfère la campagne."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Ma sœur adore la ville, tandis que moi, je préfère la campagne.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Colombie"], previo: [] }
};

E["b12-rapporter-opinion"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Rapporter l'opinion des autres : selon, d'après, pour",
  objetivo: {
    que: "Vas a citar la opinión de otros sin hacerla tuya: selon, d'après, pour, aux yeux de, comme le souligne X.",
    corto: "Selon les experts, … · D'après moi, … · Comme le dit le proverbe, …",
    podras: ["Citar una fuente con selon / d'après + nombre o pronombre.", "Distinguir tu opinión (selon moi, à mon avis) de la ajena (selon les chercheurs).", "Usar comme le souligne / l'affirme X, aux yeux de y el condicional de distancia."],
    iconos: ["ic2/libro", "ic2/microfono", "ic2/mundo"],
    previos: ["Dar su opinión (B1.1, lección 8) y el condicional de la prensa (lección 17)."],
    capacidad: "Ahora citas estudios y expertos en una redacción."
  },
  requiere: R("b1op-mode", "b2cj-present"), recupera: ["b1op-mode"],
  conceptos: {
    "b2ro-selon": { n: "selon / d'après + fuente (sin preposición: selon moi); pour + persona; aux yeux de; opinión propia vs. ajena", b: "gr" },
    "b2ro-comme": { n: "comme le dit / le souligne / l'affirme X; + condicional para tomar distancia (selon lui, la crise serait terminée)", b: "gr" }
  },
  video: {
    titulo: "Citar opiniones", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/microfono", grande: "selon les experts", seg: [
        { es: "Hola. Citar no es opinar." } ] },
      { v: "dos",
        a: { tag: "opinión propia", fr: "Selon moi, c'est une bonne idée.", es: "en mi opinión" },
        b: { tag: "opinión ajena", fr: "Selon les chercheurs, c'est une bonne idée.", es: "según ellos" },
        seg: [ { es: "Yo opino:", p: 1 }, { fr: "Selon moi, c'est une bonne idée.", p: 1 }, { es: "Ellos opinan:", p: 2 }, { fr: "Selon les chercheurs, c'est une bonne idée.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Según este informe, el desempleo habría bajado dos puntos.»", o: ["Selon ce rapport, le chômage aurait baissé de deux points.", "Selon ce rapport, le chômage aurais baissé de deux points."], a: 0,
        bien: "¡Sí! Aurait, tercera persona.", mal: "Il → aurait.",
        seg: [ { es: "Pausa. Habría bajado." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["selon", "d'après", "aux yeux de", "comme le souligne", "selon moi"], seg: [
        { es: "Selon, sin à.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La encuesta", img: "bg-biblioteca", yo: "camila",
    escena: "Camila prepara una redacción sobre el teletrabajo.",
    pj: PJ,
    lineas: [
      ["camila", "D'après une enquête récente, un Français sur deux fait du télétravail.", "Según una encuesta reciente, uno de cada dos franceses teletrabaja."],
      ["hugo", "Et selon ce sondage, les jeunes sont inquiets. Aux yeux des jeunes, le diplôme compte moins que l'expérience.", "Y según este sondeo, los jóvenes están preocupados. A ojos de los jóvenes, el título cuenta menos que la experiencia."],
      ["camila", "Comme le souligne l'auteur, la lecture ouvre l'esprit. Selon lui, la crise serait terminée.", "Como subraya el autor, la lectura abre la mente. Según él, la crisis habría terminado."],
      ["hugo", "Et toi, qu'est-ce que tu en penses ? — D'après moi, le télétravail est une bonne chose.", "¿Y tú qué piensas? — En mi opinión, el teletrabajo es algo bueno."]
    ],
    fijate: "Fíjate: d'après une enquête, selon ce sondage, aux yeux des jeunes, comme le souligne l'auteur, selon lui (+ serait), d'après moi."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Citar sin hacerlo tuyo",
      idea: "Selon / d'après + fuente, sin preposición: Selon les experts, …; D'après ce sondage, … Con un pronombre tónico: selon moi, d'après lui. Selon moi, d'après moi, pour moi = en mi opinión. Pour + persona: Pour les syndicats, … Aux yeux de = a ojos de. Comme le dit / le souligne / l'affirme X = como dice / subraya / afirma X. Para tomar distancia se combina con el condicional: Selon lui, la crise serait terminée.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Opinión"], [
        ["À mon avis, · Selon moi, · Personnellement, · Je trouve que", "En mi opinión · Personalmente · Me parece que", "propia"],
        ["Selon les chercheurs, · D'après le journal, · Pour les syndicats, · Aux yeux du public,", "Según los investigadores · Según el periódico · Para los sindicatos · A ojos del público", "ajena"],
        ["Selon les experts, · selon", "Según los expertos", "ajena"],
        ["D'après moi, · d'après moi", "En mi opinión", "propia"],
        ["Aux yeux des jeunes, … · yeux · aux yeux de", "A ojos de los jóvenes", "ajena"],
        ["Comme le souligne l'auteur · souligne · comme l'affirme", "como subraya el autor · como afirma", "cita"],
        ["Selon lui, la crise serait terminée.", "Según él, la crisis habría terminado.", "+ condicional"],
        ["le chômage aurait baissé · aurait", "el desempleo habría bajado", "+ condicional"],
        ["Selon ce sondage, les jeunes sont inquiets.", "Según este sondeo, los jóvenes están preocupados.", "ejemplo"]
      ]],
      ej: [["Selon une étude récente, les Français lisent moins.", "Según un estudio reciente, los franceses leen menos."], ["D'après le ministre, la réforme serait nécessaire.", "Según el ministro, la reforma sería necesaria."], ["Comme le dit le proverbe, l'union fait la force.", "Como dice el refrán, la unión hace la fuerza."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Selon à moi…", "Selon moi…", "Selon va directamente con el pronombre."], ["Selon ce rapport, le chômage aurais baissé.", "Selon ce rapport, le chômage aurait baissé.", "Tercera persona: aurait."], ["Aux yeux des jeunes, je pense que…", "Aux yeux des jeunes, le diplôme compte moins.", "Aux yeux de cita a otros."]] }
  ],
  ejemplos: [
    { sit: "«Según los expertos…»", resp: "Selon les experts,", pasos: ["selon + nombre."], porque: "Ajena." },
    { sit: "«En mi opinión…»", resp: "D'après moi,", pasos: ["d'après + pronombre tónico."], porque: "Propia." },
    { sit: "«Según él, la crisis habría terminado.»", resp: "Selon lui, la crise serait terminée.", pasos: ["Distancia: condicional."], porque: "Ajena." }
  ],
  comprueba: [
    { q: "«En mi opinión» se dice…", o: ["selon moi", "selon à moi"], a: 0, b: "gr", porque: "Sin preposición." },
    { q: "«Selon les chercheurs» expresa una opinión…", o: ["ajena", "propia"], a: 0, b: "gr", porque: "Cita." },
    { q: "Para tomar distancia de lo citado se usa…", o: ["el condicional", "el imperativo"], a: 0, b: "gr", porque: "serait." }
  ],
  practica: [
    { fase: "guiada", c: ["b2ro-selon"], k: "sort", ask: "¿Opinión propia o ajena?", q: "Clasifica.", cats: ["Propia", "Ajena"], items: [["À mon avis,", 0], ["Selon moi,", 0], ["Personnellement,", 0], ["Je trouve que", 0], ["Selon les chercheurs,", 1], ["D'après le journal,", 1], ["Pour les syndicats,", 1], ["Aux yeux du public,", 1]], pista: "¿Quién opina?", why: "Fuentes." },
    { fase: "guiada", c: ["b2ro-selon"], k: "choice", ask: "«Según los expertos…»", q: "«___, le climat change vite.»", o: ["Selon les experts", "Selon aux experts"], a: 0, pista: "Sin preposición.", why: "<b>Selon les experts</b>." },
    { fase: "guiada", c: ["b2ro-selon"], k: "choice", ask: "«En mi opinión…»", q: "«___, le télétravail est une bonne chose.»", o: ["D'après moi", "D'après à moi"], a: 0, pista: "Pronombre tónico.", why: "<b>D'après moi</b>." },
    { fase: "indep", c: ["b2ro-comme"], k: "choice", ask: "«Según él, la crisis habría terminado.»", q: "«___»", o: ["Selon lui, la crise serait terminée.", "Selon lui, la crise est terminée sûrement."], a: 0, why: "Condicional: <b>serait</b>." },
    { fase: "indep", c: ["b2ro-comme"], k: "fill", ask: "«subraya» (souligner)", q: "Comme le ___ l'auteur, la lecture ouvre l'esprit.", acc: ["souligne"], why: "<b>souligne</b>." },
    { fase: "indep", c: ["b2ro-selon"], k: "fill", ask: "«A ojos de los jóvenes»", q: "Aux ___ des jeunes, le diplôme compte moins que l'expérience.", acc: ["yeux"], why: "<b>yeux</b>." },
    { fase: "aplica", c: ["b2ro-selon", "b2ro-comme"], k: "match", ask: "Une cada expresión con su traducción.", q: "Francés → español", pairs: [["selon", "según"], ["aux yeux de", "a ojos de"], ["comme l'affirme", "como afirma"], ["d'après moi", "en mi opinión"]], why: "Expresiones." },
    { fase: "aplica", c: ["b2ro-comme"], k: "spot", ask: "Encuentra el error.", s: "Selon ce rapport , le chômage [aurais] baissé de deux points .", fix: "aurait", why: "<b>aurait</b>." },
    { fase: "aplica", c: ["b2ro-selon"], k: "spot", ask: "Encuentra el error.", s: "[Selon à] moi , cette réforme est nécessaire .", fix: "Selon", why: "<b>Selon moi</b>." },
    { fase: "dominio", c: ["b2ro-selon"], k: "order", ask: "Ordena: «Según este sondeo, los jóvenes están preocupados».", tokens: ["Selon ce sondage,", "les jeunes", "sont inquiets."], why: "<b>Selon ce sondage, les jeunes sont inquiets.</b>" },
    { fase: "dominio", c: ["b2ro-comme"], k: "choice", ask: "«Como dice el refrán, la unión hace la fuerza.»", q: "«___ le proverbe, l'union fait la force.»", o: ["Comme le dit", "Selon le dit"], a: 0, why: "<b>Comme le dit</b>." },
    { fase: "dominio", c: ["b2ro-selon", "b2ro-comme"], k: "listen", say: "D'après une enquête récente, un Français sur deux fait du télétravail.", acc: ["D'après une enquête récente, un Français sur deux fait du télétravail."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>D'après une enquête récente, un Français sur deux fait du télétravail.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

E["b12-verbes-introducteurs"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Les verbes introducteurs : affirmer, prétendre, reconnaître, nier",
  objetivo: {
    que: "Vas a reemplazar dire por verbos precisos que muestran la actitud: affirmer, prétendre, reconnaître, nier, démentir, souligner.",
    corto: "Il a reconnu son erreur. · L'entreprise dément la nouvelle.",
    podras: ["Usar verbos neutros (déclarer, expliquer, préciser) y de seguridad (affirmer, assurer).", "Usar verbos de concesión (reconnaître, admettre, avouer) y de negación (nier, démentir).", "Entender prétendre: afirmar algo dudoso, no «tener la intención»."],
    iconos: ["ic2/microfono", "ic2/libro", "ic2/pergamino"],
    previos: ["El discurso indirecto (lección 2) y el discurso indirecto en pasado (lección 11)."],
    capacidad: "Ahora resumes una noticia sin repetir «il a dit»."
  },
  requiere: R("b2di-question", "b2dp-temps"), recupera: ["b2dp-temps"],
  conceptos: {
    "b2vi-neutre": { n: "neutros (déclarer, expliquer, préciser), seguridad (affirmer, assurer), recordatorio (rappeler, souligner); prétendre = afirmar algo dudoso", b: "gr" },
    "b2vi-concede": { n: "acepta: reconnaître, admettre, avouer, concéder; niega: nier, démentir, contester, réfuter (il a nié)", b: "gr" }
  },
  video: {
    titulo: "Más que dire", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/microfono", grande: "reconnaître · nier", seg: [
        { es: "Hola. El verbo muestra lo que piensa el que habla." } ] },
      { v: "dos",
        a: { tag: "acepta", fr: "Il a reconnu son erreur.", es: "reconoció su error" },
        b: { tag: "niega", fr: "Le suspect nie toute participation.", es: "niega toda participación" },
        seg: [ { es: "Acepta:", p: 1 }, { fr: "Il a reconnu son erreur.", p: 1 }, { es: "Niega:", p: 2 }, { fr: "Le suspect nie toute participation.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Il prétend être malade.» significa que…", o: ["quizá no es verdad", "tiene la intención de enfermarse"], a: 0,
        bien: "¡Sí! Prétendre = afirmar algo dudoso.", mal: "Prétendre no es «pretender».",
        seg: [ { es: "Pausa. ¿Prétendre?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["affirmer", "prétendre", "reconnaître", "nier", "démentir", "souligner"], seg: [
        { es: "Prétendre es un falso amigo.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El escándalo", img: "bg-cafe", yo: "camila",
    escena: "Hugo resume una noticia política.",
    pj: PJ,
    lineas: [
      ["hugo", "Le ministre a reconnu qu'il y avait eu des erreurs. Mais il a nié avoir reçu de l'argent.", "El ministro reconoció que hubo errores. Pero negó haber recibido dinero."],
      ["camila", "Et le porte-parole ?", "¿Y el vocero?"],
      ["hugo", "Le porte-parole a démenti les rumeurs de démission. Il prétend qu'il n'était pas au courant.", "El vocero desmintió los rumores de renuncia. Asegura (aunque cuesta creerlo) que no estaba al tanto."],
      ["camila", "Le directeur a reconnu que le projet était trop cher. Notre professeur a souligné l'importance de la relecture, lui !", "El director reconoció que el proyecto era demasiado caro. ¡Nuestro profesor sí subrayó la importancia de releer!"]
    ],
    fijate: "Fíjate: a reconnu (acepta), a nié, a démenti (niega), prétend (afirma algo dudoso), a souligné (subraya)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Verbos que muestran la actitud",
      idea: "Neutros: dire, déclarer, expliquer, indiquer, préciser. Seguridad: affirmer, assurer, soutenir. Recordar e insistir: rappeler, souligner. Duda del que cita: prétendre = afirmar algo que quizá no es verdad (falso amigo: no significa «tener la intención»). Concesión: reconnaître, admettre, avouer, concéder. Negación: nier, démentir, contester, réfuter. Tras nier y prétendre se puede usar el infinitivo pasado: Il a nié avoir reçu de l'argent.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Actitud"], [
        ["reconnaître · admettre · avouer · concéder", "reconocer · admitir · confesar · conceder", "acepta / reconoce"],
        ["nier · démentir · contester · réfuter", "negar · desmentir · cuestionar · refutar", "rechaza / niega"],
        ["affirmer · assurer · soutenir", "afirmar · asegurar · sostener", "seguridad"],
        ["déclarer · expliquer · indiquer · préciser", "declarar · explicar · indicar · precisar", "neutro"],
        ["rappeler · souligner · a souligné · souligné", "recordar · subrayar", "recordatorio"],
        ["prétendre · Il prétend être malade.", "afirmar algo dudoso · Dice que está enfermo (quizá no es verdad).", "duda"],
        ["Le directeur a reconnu que… · a reconnu", "El director reconoció que…", "concesión"],
        ["Le suspect nie toute participation. · nie · a nié · nié", "El sospechoso niega toda participación.", "negación"],
        ["L'entreprise dément la nouvelle.", "La empresa desmiente la noticia.", "negación"],
        ["Il a reconnu son erreur.", "Reconoció su error.", "concesión"]
      ]],
      ej: [["Le ministre a reconnu qu'il y avait eu des erreurs.", "El ministro reconoció que había habido errores."], ["Il prétend qu'il n'était pas au courant.", "Asegura (sin que se le crea) que no estaba al corriente."], ["L'entreprise dément ces rumeurs.", "La empresa desmiente esos rumores."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je prétends aller à Paris (= tengo la intención).", "J'ai l'intention d'aller à Paris.", "Prétendre = afirmar algo dudoso."], ["Le ministre a niée avoir reçu de l'argent.", "Le ministre a nié avoir reçu de l'argent.", "Con avoir, sin concordancia."], ["Il a dit son erreur.", "Il a reconnu son erreur.", "Verbo preciso."]] }
  ],
  ejemplos: [
    { sit: "«Il prétend être malade.»", resp: "que quizá no es verdad", pasos: ["prétendre = afirmar algo dudoso."], porque: "Duda." },
    { sit: "«El director reconoció que el proyecto era caro.»", resp: "Le directeur a reconnu que le projet était trop cher.", pasos: ["reconnaître = concesión."], porque: "Acepta." },
    { sit: "«La empresa desmiente la noticia.»", resp: "L'entreprise dément la nouvelle.", pasos: ["démentir = negación."], porque: "Niega." }
  ],
  comprueba: [
    { q: "«Prétendre» significa…", o: ["afirmar algo dudoso", "tener la intención"], a: 0, b: "gr", porque: "Falso amigo." },
    { q: "«Nier» expresa…", o: ["negación", "concesión"], a: 0, b: "gr", porque: "negar." },
    { q: "«Reconnaître» expresa…", o: ["que se acepta algo", "que se niega algo"], a: 0, b: "gr", porque: "Concesión." }
  ],
  practica: [
    { fase: "guiada", c: ["b2vi-concede"], k: "sort", ask: "¿Acepta o niega?", q: "Clasifica.", cats: ["Acepta / reconoce", "Rechaza / niega"], items: [["reconnaître", 0], ["admettre", 0], ["avouer", 0], ["concéder", 0], ["nier", 1], ["démentir", 1], ["contester", 1], ["réfuter", 1]], pista: "Nier: negar.", why: "Actitudes." },
    { fase: "guiada", c: ["b2vi-neutre"], k: "choice", es: true, ask: "«Il prétend être malade.» significa que…", q: "Elige.", o: ["que quizá no es verdad", "que tiene la intención de enfermarse"], a: 0, pista: "Falso amigo.", why: "Duda." },
    { fase: "guiada", c: ["b2vi-concede"], k: "choice", ask: "«El director reconoció que el proyecto era demasiado caro.»", q: "«Le directeur ___ que le projet était trop cher.»", o: ["a reconnu", "a nié"], a: 0, pista: "Acepta.", why: "<b>a reconnu</b>." },
    { fase: "indep", c: ["b2vi-concede"], k: "choice", ask: "«La empresa desmiente la noticia.»", q: "«___»", o: ["L'entreprise dément la nouvelle.", "L'entreprise avoue la nouvelle."], a: 0, why: "<b>dément</b>." },
    { fase: "indep", c: ["b2vi-concede"], k: "fill", ask: "«niega» (nier)", q: "Le suspect ___ toute participation au vol.", acc: ["nie"], why: "<b>nie</b>." },
    { fase: "indep", c: ["b2vi-neutre"], k: "fill", ask: "«subrayado» (souligner)", q: "Le professeur a ___ l'importance de la relecture.", acc: ["souligné"], why: "<b>souligné</b>." },
    { fase: "aplica", c: ["b2vi-neutre", "b2vi-concede"], k: "match", ask: "Une cada verbo con la actitud que muestra.", q: "Verbo → actitud", pairs: [["affirmer", "seguridad"], ["admettre", "concesión"], ["démentir", "negación"], ["rappeler", "recordatorio"]], why: "Actitudes." },
    { fase: "aplica", c: ["b2vi-concede"], k: "spot", ask: "Encuentra el error.", s: "Le ministre a [niée] avoir reçu de l'argent .", fix: "nié", why: "<b>nié</b>." },
    { fase: "aplica", c: ["b2vi-neutre"], k: "spot", ask: "Encuentra el error (= tengo la intención).", s: "Cet été , [je prétends] aller à Paris avec ma sœur .", fix: "j'ai l'intention d'", why: "<b>j'ai l'intention d'</b>." },
    { fase: "dominio", c: ["b2vi-concede"], k: "order", ask: "Ordena: «Reconoció su error».", tokens: ["Il", "a reconnu", "son erreur."], why: "<b>Il a reconnu son erreur.</b>" },
    { fase: "dominio", c: ["b2vi-neutre"], k: "choice", ask: "«Asegura (sin que se le crea) que no estaba al corriente.»", q: "«Il ___ qu'il n'était pas au courant.»", o: ["prétend", "reconnaît"], a: 0, why: "<b>prétend</b>." },
    { fase: "dominio", c: ["b2vi-neutre", "b2vi-concede"], k: "listen", say: "Le porte-parole a démenti les rumeurs de démission.", acc: ["Le porte-parole a démenti les rumeurs de démission."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Le porte-parole a démenti les rumeurs de démission.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

/* ================================ B1.2·9 · El texto argumentativo ================================ */
E["b12-plan-essai"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Construire le plan d'un essai",
  objetivo: {
    que: "Vas a organizar un ensayo argumentativo: introducción, desarrollo en dos o tres partes y conclusión, y a anunciar el plan.",
    corto: "Dans un premier temps, nous verrons… ; puis… ; enfin…",
    podras: ["Construir la introducción: accroche, tema, problemática y anuncio del plan.", "Elegir un plan dialéctico (ventajas / inconvenientes / síntesis) o analítico (constat → causes → solutions).", "Anunciar el plan: Dans un premier temps…, dans un second temps…, enfin…"],
    iconos: ["ic2/pergamino", "ic2/lapiz", "ic2/libro"],
    previos: ["Los conectores para añadir (B1.1, lección 49) y para concluir (B1.1, lección 50)."],
    capacidad: "Ahora organizas una redacción del DELF B1 en tres partes."
  },
  requiere: R("b1ca-mots", "b1cl-annonce"), recupera: ["b1cl-annonce"],
  conceptos: {
    "b2pe-intro": { n: "partes: introducción (accroche, présentation du thème, problématique, annonce du plan), desarrollo, conclusión", b: "gr" },
    "b2pe-plan": { n: "plan dialéctico (avantages / inconvénients / synthèse) o analítico (constat, causes, solutions); dans un premier temps, dans un second temps, enfin", b: "gr" }
  },
  video: {
    titulo: "El plan de un ensayo", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/pergamino", grande: "introduction · développement · conclusion", seg: [
        { es: "Hola. Un buen ensayo empieza por un buen plan." } ] },
      { v: "frase", filas: [
          { nota: "1", p: 1, partes: [["Dans un premier temps, nous présenterons les avantages.", "-", 1]] },
          { nota: "2", p: 2, partes: [["Puis, nous en examinerons les limites.", "-", 2]] },
          { nota: "3", p: 3, partes: [["Enfin, nous proposerons quelques solutions.", "-", 3]] } ], seg: [
        { fr: "Dans un premier temps, nous présenterons les avantages.", p: 1 }, { fr: "Puis, nous en examinerons les limites.", p: 2 }, { fr: "Enfin, nous proposerons quelques solutions.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«En un segundo momento…»", o: ["Dans un second temps,", "Dans un deuxièmement temps,"], a: 0,
        bien: "¡Sí! Fórmula elegante.", mal: "Dans un second temps.",
        seg: [ { es: "Pausa. En un segundo momento." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["l'accroche", "la problématique", "l'annonce du plan", "dans un premier temps", "enfin"], seg: [
        { es: "Introducción, desarrollo, conclusión.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El ensayo del DELF", img: "bg-biblioteca", yo: "camila",
    escena: "Camila prepara su ensayo sobre el teletrabajo con Hugo.",
    pj: PJ,
    lineas: [
      ["camila", "Mon sujet, c'est le télétravail. Je commence par une accroche, puis la problématique.", "Mi tema es el teletrabajo. Empiezo con una frase gancho y luego la problemática."],
      ["hugo", "Et l'annonce du plan ? Choisis un plan dialectique : avantages, inconvénients, synthèse.", "¿Y el anuncio del plan? Elige un plan dialéctico: ventajas, inconvenientes, síntesis."],
      ["camila", "D'accord : « Dans un premier temps, nous présenterons les avantages du télétravail. Puis, nous en examinerons les limites. »", "Bueno: «En primer lugar, presentaremos las ventajas del teletrabajo. Luego, examinaremos sus límites»."],
      ["hugo", "« Enfin, nous proposerons quelques solutions. » Et pour la conclusion : un bilan et une ouverture.", "«Por último, propondremos algunas soluciones». Y para la conclusión: un balance y una apertura."]
    ],
    fijate: "Fíjate: une accroche, la problématique, l'annonce du plan, un plan dialectique; dans un premier temps, puis, enfin; la conclusion: bilan et ouverture."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Las partes de un ensayo",
      idea: "Introducción: l'accroche (frase para captar la atención), la présentation du thème, la problématique (la pregunta central) y l'annonce du plan. Desarrollo: dos o tres partes con argumentos, ejemplos, contraargumentos y transiciones. Conclusión: balance y apertura. Planes típicos: dialéctico (avantages / inconvénients o thèse / antithèse / synthèse) y analítico (constat → causes → solutions). Para anunciar el plan: Dans un premier temps, nous verrons… Dans un second temps… Enfin…",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Parte"], [
        ["l'accroche · la problématique · l'annonce du plan · la présentation du thème", "la frase gancho · la pregunta central · el anuncio del plan · la presentación del tema", "introducción"],
        ["un argument · un exemple · un contre-argument · une transition", "un argumento · un ejemplo · un contraargumento · una transición", "desarrollo"],
        ["la conclusion · un bilan · une ouverture", "la conclusión · un balance · una apertura", "conclusión"],
        ["avantages / inconvénients / synthèse", "ventajas / inconvenientes / síntesis", "plan dialéctico"],
        ["constat → causes → solutions", "constatación → causas → soluciones", "plan analítico"],
        ["Dans un premier temps, · premier · temps · Dans un second temps,", "En primer lugar · En un segundo momento", "anuncio"],
        ["Puis, · Enfin, · enfin", "Luego · Por último", "anuncio"],
        ["Nous verrons d'abord les causes.", "Veremos primero las causas.", "anuncio"]
      ]],
      ej: [["Dans un premier temps, nous présenterons les avantages du télétravail.", "En primer lugar, presentaremos las ventajas del teletrabajo."], ["Puis, nous en examinerons les limites.", "Luego, examinaremos sus límites."], ["Enfin, nous proposerons quelques solutions.", "Por último, propondremos algunas soluciones."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Dans un premièrement temps…", "Dans un premier temps…", "Premier, no premièrement."], ["Premièrement, deuxièmement… (en todo el ensayo)", "Dans un premier temps…, dans un second temps…", "Más elegante."], ["Un ensayo sin anunciar el plan", "Annonce du plan al final de la introducción", "El lector debe saber adónde vas."]] }
  ],
  ejemplos: [
    { sit: "¿Qué lleva la introducción?", resp: "problemática y anuncio del plan", pasos: ["Accroche, tema, problemática, plan."], porque: "Introducción." },
    { sit: "Plan dialéctico", resp: "ventajas / inconvenientes / síntesis", pasos: ["Tesis, antítesis, síntesis."], porque: "Plan." },
    { sit: "«En un segundo momento…»", resp: "Dans un second temps,", pasos: ["Anuncio del plan."], porque: "Fórmula." }
  ],
  comprueba: [
    { q: "La problématique es…", o: ["la pregunta central", "la frase final"], a: 0, b: "gr", porque: "Introducción." },
    { q: "Un plan dialéctico presenta…", o: ["ventajas / inconvenientes / síntesis", "solo argumentos a favor"], a: 0, b: "gr", porque: "Dialéctico." },
    { q: "«Por último» al anunciar el plan se dice…", o: ["Enfin,", "Finalement que"], a: 0, b: "gr", porque: "Anuncio." }
  ],
  practica: [
    { fase: "guiada", c: ["b2pe-intro"], k: "sort", ask: "¿Introducción o desarrollo?", q: "Clasifica.", cats: ["Introducción", "Desarrollo"], items: [["l'accroche", 0], ["la problématique", 0], ["l'annonce du plan", 0], ["la présentation du thème", 0], ["un argument", 1], ["un exemple", 1], ["un contre-argument", 1], ["une transition", 1]], pista: "La introducción presenta.", why: "Partes." },
    { fase: "guiada", c: ["b2pe-intro"], k: "choice", es: true, ask: "La introducción lleva…", q: "Elige.", o: ["problemática y anuncio del plan", "los ejemplos y la conclusión"], a: 0, pista: "Presentar.", why: "Introducción." },
    { fase: "guiada", c: ["b2pe-plan"], k: "choice", es: true, ask: "Un plan dialéctico es…", q: "Elige.", o: ["ventajas / inconvenientes / síntesis", "una lista de ejemplos"], a: 0, pista: "Tesis, antítesis.", why: "Dialéctico." },
    { fase: "indep", c: ["b2pe-plan"], k: "choice", ask: "«En un segundo momento…»", q: "«___ nous examinerons les limites.»", o: ["Dans un second temps,", "Dans un deuxièmement temps,"], a: 0, why: "<b>Dans un second temps</b>." },
    { fase: "indep", c: ["b2pe-plan"], k: "fill", ask: "«En primer lugar»", q: "Dans un premier ___ , nous verrons les causes du problème.", acc: ["temps"], why: "<b>temps</b>." },
    { fase: "indep", c: ["b2pe-plan"], k: "fill", ask: "«Por último»", q: "___ , nous proposerons des solutions.", acc: ["Enfin", "enfin"], why: "<b>Enfin</b>." },
    { fase: "aplica", c: ["b2pe-intro"], k: "match", ask: "Une cada parte con su función.", q: "Parte → función", pairs: [["accroche", "frase para captar la atención"], ["problématique", "la pregunta central"], ["développement", "argumentos y ejemplos"], ["conclusion", "balance y apertura"]], why: "Funciones." },
    { fase: "aplica", c: ["b2pe-plan"], k: "spot", ask: "Encuentra el error.", s: "Dans un [premièrement] temps , nous analyserons la situation actuelle .", fix: "premier", why: "<b>premier</b>." },
    { fase: "aplica", c: ["b2pe-plan"], k: "order", ask: "Ordena: «Veremos primero las causas».", tokens: ["Nous verrons", "d'abord", "les causes."], why: "<b>Nous verrons d'abord les causes.</b>" },
    { fase: "dominio", c: ["b2pe-intro"], k: "choice", es: true, ask: "L'accroche es…", q: "Elige.", o: ["una frase para captar la atención", "la pregunta central"], a: 0, why: "Accroche." },
    { fase: "dominio", c: ["b2pe-plan"], k: "choice", ask: "Plan analítico.", q: "«___»", o: ["constat → causes → solutions", "thèse → thèse → thèse"], a: 0, why: "Analítico." },
    { fase: "dominio", c: ["b2pe-intro", "b2pe-plan"], k: "listen", say: "Dans un premier temps, nous verrons les avantages ; puis, nous aborderons les limites.", acc: ["Dans un premier temps, nous verrons les avantages ; puis, nous aborderons les limites.", "Dans un premier temps, nous verrons les avantages; puis, nous aborderons les limites.", "Dans un premier temps, nous verrons les avantages, puis, nous aborderons les limites."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Dans un premier temps, nous verrons les avantages ; puis, nous aborderons les limites.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

E["b12-problematique"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Formuler une problématique",
  objetivo: {
    que: "Vas a formular la pregunta central de un texto: abierta y con tensión.",
    corto: "Faut-il… ? · Dans quelle mesure… ? · On peut se demander si…",
    podras: ["Preguntar con inversión: Les réseaux sociaux rapprochent-ils les gens ?", "Usar Faut-il + infinitivo y Dans quelle mesure + frase con inversión.", "Formular una pregunta indirecta: On peut se demander si…, Il convient de s'interroger sur…"],
    iconos: ["ic2/pregunta", "ic2/bombilla", "ic2/lapiz"],
    previos: ["La interrogación con inversión (B1.1, lección 11), el discurso indirecto (lección 2) y el plan del ensayo (lección 33)."],
    capacidad: "Ahora conviertes un tema en una buena pregunta."
  },
  requiere: R("b1in-registre", "b2di-question", "b2pe-intro"), recupera: ["b1in-registre"],
  conceptos: {
    "b2pb-forme": { n: "inversión (les jeunes lisent-ils… ?), Faut-il + infinitivo, Dans quelle mesure… ? ; pregunta abierta, no cerrada ni vaga", b: "gr" },
    "b2pb-indir": { n: "pregunta indirecta: On peut se demander si… (no «est-ce que»); Il convient de s'interroger sur…", b: "gr" }
  },
  video: {
    titulo: "La pregunta central", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/pregunta", grande: "Faut-il… ?", seg: [
        { es: "Hola. Un tema no es una problemática." } ] },
      { v: "dos",
        a: { tag: "tema", fr: "Le télétravail.", es: "solo un tema" },
        b: { tag: "problemática", fr: "Le télétravail est-il un progrès pour tous ?", es: "una pregunta con tensión" },
        seg: [ { es: "El tema:", p: 1 }, { fr: "Le télétravail.", p: 1 }, { es: "La problemática:", p: 2 }, { fr: "Le télétravail est-il un progrès pour tous ?", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Cabe preguntarse si los exámenes son realmente útiles.»", o: ["On peut se demander si les examens sont vraiment utiles.", "On peut se demander est-ce que les examens sont vraiment utiles."], a: 0,
        bien: "¡Sí! Pregunta indirecta con si.", mal: "Indirecta: si, nunca est-ce que.",
        seg: [ { es: "Pausa. Cabe preguntarse si." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Faut-il", "Dans quelle mesure", "On peut se demander si", "lisent-ils"], seg: [
        { es: "Abierta, clara y con tensión.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Del tema a la pregunta", img: "bg-universidad", yo: "camila",
    escena: "Hugo ayuda a Camila a formular su problemática.",
    pj: PJ,
    lineas: [
      ["camila", "Mon thème, c'est les portables à l'école. Ma problématique : « Aimez-vous les portables ? »", "Mi tema son los celulares en el colegio. Mi problemática: «¿Le gustan los celulares?»"],
      ["hugo", "C'est trop fermé. Essaie : « Faut-il interdire les portables à l'école ? »", "Es demasiado cerrada. Prueba: «¿Hay que prohibir los celulares en el colegio?»"],
      ["camila", "Ou : « Dans quelle mesure les réseaux sociaux influencent-ils nos choix ? »", "O: «¿En qué medida influyen las redes sociales en nuestras decisiones?»"],
      ["hugo", "Très bien. Tu peux aussi écrire : « On peut se demander si le progrès rend plus heureux. »", "Muy bien. También puedes escribir: «Cabe preguntarse si el progreso hace más feliz»."]
    ],
    fijate: "Fíjate: Faut-il interdire… ?; Dans quelle mesure… influencent-ils… ?; On peut se demander si…: preguntas abiertas. «Aimez-vous… ?» es demasiado cerrada."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Formular una problemática",
      idea: "La problemática es la pregunta central del texto. Debe ser abierta y mostrar una tensión, no una pregunta de sí o no sin debate (Aimez-vous le sport ?) ni demasiado vaga (Qu'est-ce que la vie ?). Formas: inversión: Les réseaux sociaux rapprochent-ils les gens ? Faut-il + infinitivo: Faut-il interdire les voitures en ville ? Dans quelle mesure + frase con inversión: Dans quelle mesure la technologie facilite-t-elle l'apprentissage ? Indirecta: On peut se demander si… Il convient de s'interroger sur…",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Forma"], [
        ["Faut-il… ? · Faut-il · Faut", "¿Hay que…?", "pregunta de decisión"],
        ["Dans quelle mesure… ?", "¿En qué medida…?", "pregunta de grado"],
        ["On peut se demander si… · si", "Cabe preguntarse si…", "pregunta indirecta"],
        ["Il convient de s'interroger sur…", "Conviene preguntarse sobre…", "planteamiento formal"],
        ["Les jeunes lisent-ils moins qu'avant ? · lisent-ils · ils", "¿Leen menos los jóvenes que antes?", "inversión"],
        ["Le télétravail est-il un progrès pour tous ?", "¿Es el teletrabajo un progreso para todos?", "inversión"],
        ["Faut-il limiter le tourisme de masse ? · Le sport à l'école est-il suffisant ? · Dans quelle mesure Internet change-t-il la lecture ? · Peut-on vivre sans voiture en ville ?", "preguntas abiertas", "buena problemática"],
        ["Paris est-elle en France ? · Qu'est-ce que la vie ? · Aimez-vous le sport ? · Le monde est-il grand ?", "demasiado cerradas o vagas", "mala problemática"],
        ["Faut-il interdire les voitures dans le centre ?", "¿Hay que prohibir los carros en el centro?", "ejemplo"]
      ]],
      ej: [["Faut-il rendre les transports publics gratuits ?", "¿Hay que hacer gratuito el transporte público?"], ["Dans quelle mesure l'école prépare-t-elle au monde du travail ?", "¿En qué medida prepara la escuela para el mundo laboral?"], ["On peut se demander si le progrès rend plus heureux.", "Cabe preguntarse si el progreso hace más feliz."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["On peut se demander est-ce que le progrès…", "On peut se demander si le progrès…", "Pregunta indirecta: si."], ["On peut se demander que les examens…", "On peut se demander si les examens…", "Indirecta: si."], ["Aimez-vous le sport ?", "Le sport à l'école est-il suffisant ?", "Abierta y con tensión."]] }
  ],
  ejemplos: [
    { sit: "Tema: el teletrabajo", resp: "Le télétravail est-il un progrès pour tous ?", pasos: ["Inversión.", "Tensión: ¿para todos?"], porque: "Abierta." },
    { sit: "«¿En qué medida…?»", resp: "Dans quelle mesure…", pasos: ["+ frase con inversión."], porque: "Grado." },
    { sit: "«Cabe preguntarse si…»", resp: "On peut se demander si…", pasos: ["Indirecta con si."], porque: "Formal." }
  ],
  comprueba: [
    { q: "Una buena problemática es…", o: ["abierta y con tensión", "una pregunta de sí o no"], a: 0, b: "gr", porque: "Debate." },
    { q: "La pregunta indirecta se introduce con…", o: ["si", "est-ce que"], a: 0, b: "gr", porque: "On peut se demander si." },
    { q: "«¿Hay que…?» se dice…", o: ["Faut-il… ?", "Il faut… ?"], a: 0, b: "gr", porque: "Inversión." }
  ],
  practica: [
    { fase: "guiada", c: ["b2pb-forme"], k: "sort", ask: "¿Es una buena problemática?", q: "Clasifica.", cats: ["Sí", "No (demasiado cerrada o vaga)"], items: [["Faut-il limiter le tourisme de masse ?", 0], ["Le sport à l'école est-il suffisant ?", 0], ["Dans quelle mesure Internet change-t-il la lecture ?", 0], ["Peut-on vivre sans voiture en ville ?", 0], ["Paris est-elle en France ?", 1], ["Qu'est-ce que la vie ?", 1], ["Aimez-vous le sport ?", 1], ["Le monde est-il grand ?", 1]], pista: "¿Hay debate?", why: "Problemáticas." },
    { fase: "guiada", c: ["b2pb-forme"], k: "choice", ask: "Tema: el teletrabajo.", q: "«___»", o: ["Le télétravail est-il un progrès pour tous ?", "Aimez-vous le télétravail ?"], a: 0, pista: "Tensión.", why: "Abierta." },
    { fase: "guiada", c: ["b2pb-forme"], k: "choice", ask: "«¿En qué medida…?»", q: "«___ les réseaux sociaux influencent-ils nos choix ?»", o: ["Dans quelle mesure", "En quelle mesure"], a: 0, pista: "Dans.", why: "<b>Dans quelle mesure</b>." },
    { fase: "indep", c: ["b2pb-indir"], k: "choice", ask: "«Cabe preguntarse si…»", q: "«___ le progrès rend plus heureux.»", o: ["On peut se demander si", "On peut se demander est-ce que"], a: 0, why: "<b>si</b>." },
    { fase: "indep", c: ["b2pb-forme"], k: "fill", ask: "«¿Hay que…?»", q: "___ -il interdire les portables à l'école ?", acc: ["Faut", "faut"], why: "<b>Faut-il</b>." },
    { fase: "indep", c: ["b2pb-forme"], k: "fill", ask: "Pronombre de la inversión.", q: "Les jeunes lisent-___ moins qu'avant ?", acc: ["ils"], why: "<b>ils</b>." },
    { fase: "aplica", c: ["b2pb-forme", "b2pb-indir"], k: "match", ask: "Une cada fórmula con su tipo.", q: "Fórmula → tipo", pairs: [["Faut-il… ?", "pregunta de decisión"], ["Dans quelle mesure… ?", "pregunta de grado"], ["On peut se demander si…", "pregunta indirecta"], ["Il convient de s'interroger sur…", "planteamiento formal"]], why: "Tipos." },
    { fase: "aplica", c: ["b2pb-indir"], k: "spot", ask: "Encuentra el error.", s: "On peut se demander [que] les examens sont vraiment utiles .", fix: "si", why: "<b>si</b>." },
    { fase: "aplica", c: ["b2pb-indir"], k: "spot", ask: "Encuentra el error.", s: "On peut se demander [est-ce que] la ville est durable .", fix: "si", why: "<b>si</b>." },
    { fase: "dominio", c: ["b2pb-forme"], k: "order", ask: "Ordena: «¿Hay que prohibir los carros en el centro?».", tokens: ["Faut-il", "interdire les voitures", "dans le centre ?"], why: "<b>Faut-il interdire les voitures dans le centre ?</b>" },
    { fase: "dominio", c: ["b2pb-indir"], k: "choice", ask: "Planteamiento formal: «Conviene preguntarse sobre…»", q: "«___ la place du sport à l'école.»", o: ["Il convient de s'interroger sur", "Il convient de demander si sur"], a: 0, why: "<b>Il convient de s'interroger sur</b>." },
    { fase: "dominio", c: ["b2pb-forme", "b2pb-indir"], k: "listen", say: "Dans quelle mesure les réseaux sociaux influencent-ils nos choix ?", acc: ["Dans quelle mesure les réseaux sociaux influencent-ils nos choix ?", "Dans quelle mesure les réseaux sociaux influencent-ils nos choix?"], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Dans quelle mesure les réseaux sociaux influencent-ils nos choix ?</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

E["b12-paragraphe-argumentatif"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Rédiger un paragraphe argumentatif",
  objetivo: {
    que: "Vas a escribir un párrafo argumentativo con el esquema idea → argumento → ejemplo → cierre.",
    corto: "Tout d'abord… En effet… Par exemple… C'est pourquoi…",
    podras: ["Presentar la idea con un conector de orden: Tout d'abord, De plus, Enfin.", "Justificarla con En effet, car, puisque, étant donné que.", "Ilustrar con Par exemple y cerrar con C'est pourquoi, Donc, Ainsi, Par conséquent."],
    iconos: ["ic2/lapiz", "ic2/pergamino", "ic2/bombilla"],
    previos: ["Ejemplificar (B1.1, lección 48), causa y consecuencia (lección 5) y el plan del ensayo (lección 33)."],
    capacidad: "Ahora cada párrafo de tu redacción tiene una lógica clara."
  },
  requiere: R("b1ex-mots", "b2cc-cause", "b2pe-plan"), recupera: ["b1ex-mots"],
  conceptos: {
    "b2pg-schema": { n: "esquema del párrafo: idée (Tout d'abord) → argument (En effet) → exemple (Par exemple) → clôture (C'est pourquoi)", b: "gr" },
    "b2pg-conn": { n: "justificar: en effet, car, puisque, étant donné que; concluir: donc, ainsi, c'est pourquoi, par conséquent", b: "gr" }
  },
  video: {
    titulo: "Un párrafo que convence", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "idée → argument → exemple", seg: [
        { es: "Hola. Cuatro pasos para un párrafo sólido." } ] },
      { v: "frase", filas: [
          { nota: "idea", p: 1, partes: [["Tout d'abord, le vélo est bon pour la santé.", "-", 1]] },
          { nota: "argumento", p: 2, partes: [["En effet, il permet de bouger chaque jour.", "-", 2]] },
          { nota: "cierre", p: 3, partes: [["C'est pourquoi il faut l'encourager.", "-", 3]] } ], seg: [
        { fr: "Tout d'abord, le vélo est bon pour la santé.", p: 1 }, { fr: "En effet, il permet de bouger chaque jour.", p: 2 }, { fr: "C'est pourquoi il faut l'encourager.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«En effet» introduce…", o: ["una justificación", "una conclusión"], a: 0,
        bien: "¡Sí! En effet = pues, en efecto.", mal: "En effet explica la idea.",
        seg: [ { es: "Pausa. ¿En effet?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Tout d'abord", "En effet", "Par exemple", "C'est pourquoi"], seg: [
        { es: "Idea, argumento, ejemplo, cierre.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El párrafo sobre el tren", img: "bg-biblioteca", yo: "camila",
    escena: "Camila escribe un párrafo sobre el transporte.",
    pj: PJ,
    lineas: [
      ["camila", "Écoute : « Tout d'abord, le train pollue moins. En effet, il émet peu de CO2. »", "Escucha: «Ante todo, el tren contamina menos. En efecto, emite poco CO2»."],
      ["hugo", "Bien. Et l'exemple ?", "Bien. ¿Y el ejemplo?"],
      ["camila", "« Par exemple, un Paris-Lyon en TGV pollue cinquante fois moins qu'en avion. C'est pourquoi il faut agir. »", "«Por ejemplo, un París-Lyon en TGV contamina cincuenta veces menos que en avión. Por eso hay que actuar»."],
      ["hugo", "Parfait. Tu as l'idée, l'argument, l'exemple et le cierre. Ensuite : « De plus, le vélo est économique, car il ne consomme pas d'essence. »", "Perfecto. Tienes la idea, el argumento, el ejemplo y el cierre. Luego: «Además, la bici es económica, porque no gasta gasolina»."]
    ],
    fijate: "Fíjate: Tout d'abord (idea), En effet (argumento), Par exemple (ejemplo), C'est pourquoi (cierre); De plus, car."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "El esquema del párrafo",
      idea: "Un párrafo argumentativo sigue el esquema idea → argumento → ejemplo → cierre. Idea, con un conector de orden: Tout d'abord, De plus, Enfin. Argumento: En effet (= pues, en efecto: explica, no añade un ejemplo), car, puisque, étant donné que. Ejemplo: Par exemple, Ainsi, C'est le cas de… Cierre: Donc, C'est pourquoi, Ainsi, Par conséquent.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Paso"], [
        ["Tout d'abord, · Tout d'abord · abord · De plus, · Enfin,", "Ante todo · Además · Por último", "idea"],
        ["En effet, · En effet · effet · en effet · car · puisque · étant donné que", "En efecto · porque · ya que · dado que", "argumento (justificar)"],
        ["Par exemple, · C'est le cas de…", "Por ejemplo · Es el caso de…", "ejemplo"],
        ["donc · ainsi · c'est pourquoi · C'est pourquoi · par conséquent", "entonces · así · por eso · por consiguiente", "cierre (concluir)"],
        ["idée → argument → exemple → clôture", "idea → argumento → ejemplo → cierre", "esquema"],
        ["C'est pourquoi il faut agir.", "Por eso hay que actuar.", "cierre"],
        ["Tout d'abord, lire développe l'imagination.", "Ante todo, leer desarrolla la imaginación.", "idea"]
      ]],
      ej: [["Tout d'abord, lire développe l'imagination.", "Ante todo, leer desarrolla la imaginación."], ["En effet, le lecteur doit se représenter les lieux et les personnages.", "En efecto, el lector debe imaginarse los lugares y los personajes."], ["C'est pourquoi la lecture reste essentielle à l'école.", "Por eso la lectura sigue siendo esencial en la escuela."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["En effet, par exemple au Japon… (para dar un ejemplo)", "Par exemple, au Japon…", "En effet justifica; el ejemplo va con par exemple."], ["En efet, il ne consomme pas d'essence.", "En effet, il ne consomme pas d'essence.", "Dos f."], ["Tout d'abbord, …", "Tout d'abord, …", "Una sola b."]] }
  ],
  ejemplos: [
    { sit: "«En effet, …» introduce…", resp: "una justificación", pasos: ["Explica la idea."], porque: "Argumento." },
    { sit: "Esquema del párrafo", resp: "idea → argumento → ejemplo → cierre", pasos: ["Cuatro pasos."], porque: "Lógica." },
    { sit: "Para concluir el párrafo", resp: "C'est pourquoi", pasos: ["Conector de cierre."], porque: "Cierre." }
  ],
  comprueba: [
    { q: "«En effet» sirve para…", o: ["justificar", "dar un ejemplo"], a: 0, b: "gr", porque: "Argumento." },
    { q: "Para cerrar el párrafo se usa…", o: ["C'est pourquoi", "Tout d'abord"], a: 0, b: "gr", porque: "Cierre." },
    { q: "El orden del párrafo es…", o: ["idea → argumento → ejemplo → cierre", "ejemplo → cierre → idea"], a: 0, b: "gr", porque: "Esquema." }
  ],
  practica: [
    { fase: "guiada", c: ["b2pg-conn"], k: "sort", ask: "¿Sirve para justificar o para concluir?", q: "Clasifica.", cats: ["Justificar", "Concluir"], items: [["en effet", 0], ["car", 0], ["puisque", 0], ["étant donné que", 0], ["donc", 1], ["ainsi", 1], ["c'est pourquoi", 1], ["par conséquent", 1]], pista: "Donc: concluir.", why: "Conectores." },
    { fase: "guiada", c: ["b2pg-conn"], k: "choice", es: true, ask: "«En effet, …» introduce…", q: "Elige.", o: ["una justificación", "un ejemplo"], a: 0, pista: "Explica.", why: "Justificación." },
    { fase: "guiada", c: ["b2pg-schema"], k: "choice", es: true, ask: "El esquema del párrafo es…", q: "Elige.", o: ["idea → argumento → ejemplo → cierre", "cierre → ejemplo → idea"], a: 0, pista: "Primero la idea.", why: "Esquema." },
    { fase: "indep", c: ["b2pg-schema"], k: "choice", ask: "Para concluir el párrafo.", q: "«___ il faut agir.»", o: ["C'est pourquoi", "Tout d'abord"], a: 0, why: "<b>C'est pourquoi</b>." },
    { fase: "indep", c: ["b2pg-schema"], k: "fill", ask: "«Ante todo»", q: "Tout d'___ , le sport réduit le stress.", acc: ["abord"], why: "<b>abord</b>." },
    { fase: "indep", c: ["b2pg-conn"], k: "fill", ask: "«En efecto»", q: "Le train pollue moins. En ___ , il émet peu de CO2.", acc: ["effet"], why: "<b>effet</b>." },
    { fase: "aplica", c: ["b2pg-schema"], k: "match", ask: "Une cada paso con su conector.", q: "Paso → conector", pairs: [["idea", "Tout d'abord,"], ["argumento", "En effet,"], ["ejemplo", "Par exemple,"], ["cierre", "C'est pourquoi"]], why: "Esquema." },
    { fase: "aplica", c: ["b2pg-conn"], k: "spot", ask: "Encuentra el error.", s: "Le vélo est économique . En [efet] , il ne consomme pas d'essence .", fix: "effet", why: "<b>effet</b>." },
    { fase: "aplica", c: ["b2pg-schema"], k: "order", ask: "Ordena: «Por eso hay que actuar».", tokens: ["C'est pourquoi", "il faut", "agir."], why: "<b>C'est pourquoi il faut agir.</b>" },
    { fase: "dominio", c: ["b2pg-schema"], k: "spot", ask: "Encuentra el error.", s: "[Tout d'abbord] , lire développe l'imagination .", fix: "Tout d'abord", why: "<b>Tout d'abord</b>." },
    { fase: "dominio", c: ["b2pg-conn"], k: "choice", ask: "«Además, la bici es económica, porque no gasta gasolina.»", q: "«De plus, le vélo est économique, ___ il ne consomme pas d'essence.»", o: ["car", "donc"], a: 0, why: "<b>car</b>: justifica." },
    { fase: "dominio", c: ["b2pg-schema", "b2pg-conn"], k: "listen", say: "Tout d'abord, le vélo est bon pour la santé. En effet, il permet de bouger chaque jour.", acc: ["Tout d'abord, le vélo est bon pour la santé. En effet, il permet de bouger chaque jour."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Tout d'abord, le vélo est bon pour la santé. En effet, il permet de bouger chaque jour.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paris", "Lyon", "TGV"], previo: [] }
};

E["b12-contre-argument"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Réfuter et concéder : certes… mais, on pourrait objecter que",
  objetivo: {
    que: "Vas a reconocer un argumento contrario antes de rebatirlo: certes… mais, il est vrai que… cependant, on pourrait objecter que, or.",
    corto: "Certes, c'est cher, mais c'est utile.",
    podras: ["Conceder: Certes, …, mais… / Il est vrai que…, cependant / néanmoins…", "Presentar una objeción: On pourrait objecter que…, Certains pensent que…", "Refutar: Pourtant, En réalité, Or (un dato que contradice)."],
    iconos: ["ic2/espadas", "ic2/bombilla", "ic2/lapiz"],
    previos: ["La concesión (B1.1, lección 10), oponer dos ideas (lección 30) y el párrafo argumentativo (lección 35)."],
    capacidad: "Ahora tu argumentación responde a las objeciones."
  },
  requiere: R("b1oc-conc", "b2oi-mots", "b2pg-schema"), recupera: ["b1oc-conc"],
  conceptos: {
    "b2ca-conceder": { n: "conceder: Certes, … mais (sin «que»), Il est vrai que…, Bien sûr, J'admets que…; cependant, néanmoins, toutefois", b: "gr" },
    "b2ca-refuter": { n: "objetar: On pourrait objecter que…; refutar: Pourtant, En réalité, Ce n'est pas le cas; Or = un dato que contradice", b: "gr" }
  },
  video: {
    titulo: "Conceder y refutar", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/espadas", grande: "certes… mais", seg: [
        { es: "Hola. Reconocer al otro te hace más convincente." } ] },
      { v: "frase", filas: [
          { nota: "conceder", p: 1, partes: [["Certes, la voiture est pratique,", "-", 1]] },
          { nota: "refutar", p: 2, partes: [["mais elle pollue beaucoup.", "-", 2]] },
          { nota: "objeción", p: 3, partes: [["On pourrait objecter que c'est cher.", "-", 3]] } ], seg: [
        { fr: "Certes, la voiture est pratique,", p: 1 }, { fr: "mais elle pollue beaucoup.", p: 2 }, { fr: "On pourrait objecter que c'est cher.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«On dit qu'il est riche. Or, il est endetté.» Or introduce…", o: ["un dato que contradice", "una conclusión"], a: 0,
        bien: "¡Sí! Or: un dato contrario.", mal: "Or no es «oro» ni «entonces».",
        seg: [ { es: "Pausa. ¿Or?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Certes", "Il est vrai que", "néanmoins", "On pourrait objecter que", "Or", "Pourtant"], seg: [
        { es: "Certes, sin que.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El debate", img: "bg-universidad", yo: "camila",
    escena: "Camila y Hugo preparan un debate sobre Internet.",
    pj: PJ,
    lineas: [
      ["camila", "Certes, Internet facilite l'accès à l'information, mais il favorise aussi les fausses nouvelles.", "Es cierto que Internet facilita el acceso a la información, pero también favorece las noticias falsas."],
      ["hugo", "On pourrait objecter que les livres numériques sont moins chers.", "Se podría objetar que los libros digitales son más baratos."],
      ["camila", "Il est vrai que ce projet coûte cher ; cependant, il est nécessaire. C'est difficile ; néanmoins, c'est possible.", "Es verdad que este proyecto es caro; sin embargo, es necesario. Es difícil; no obstante, es posible."],
      ["hugo", "On dit que les jeunes ne lisent plus. Or, ils lisent beaucoup sur leur téléphone ! En réalité, ils lisent autrement.", "Dicen que los jóvenes ya no leen. ¡Pero resulta que leen mucho en el teléfono! En realidad, leen de otra manera."]
    ],
    fijate: "Fíjate: Certes…, mais; On pourrait objecter que; Il est vrai que…; cependant; néanmoins; Or (dato contrario); En réalité."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Conceder, objetar, refutar",
      idea: "Conceder: Certes, …, mais… (certes va seguido de coma, sin que). Il est vrai que…, cependant… Bien sûr…, néanmoins… J'admets que… Presentar la objeción: On pourrait objecter que…, Certains pensent que… Refutar: Pourtant, En réalité, Ce n'est pas le cas car… Or introduce un dato que contradice lo anterior: On dit que c'est cher. Or, c'est gratuit.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Función"], [
        ["Certes, · Certes · Il est vrai que · Bien sûr, · J'admets que", "Es cierto que · Es verdad que · Claro · Admito que", "conceder"],
        ["Il est vrai que… · vrai", "Es verdad que…", "conceder"],
        ["Pourtant, · En réalité, · Ce n'est pas le cas · Or, · Or", "Sin embargo · En realidad · No es así · Pero resulta que", "refutar"],
        ["cependant · néanmoins · toutefois", "sin embargo · no obstante · con todo", "oponer (formal)"],
        ["On pourrait objecter que… · On pourrait objecter que", "Se podría objetar que…", "presentar una objeción"],
        ["Certes, c'est cher, mais c'est utile.", "Es cierto que es caro, pero es útil.", "concesión"],
        ["On dit qu'il est riche. Or, il est endetté.", "Dicen que es rico. Pero resulta que tiene deudas.", "Or"],
        ["Certes, c'est difficile, mais ça vaut la peine.", "Es cierto que es difícil, pero vale la pena.", "concesión"]
      ]],
      ej: [["Certes, la voiture est pratique, mais elle pollue beaucoup.", "Es cierto que el coche es práctico, pero contamina mucho."], ["On pourrait objecter que les livres numériques sont moins chers.", "Se podría objetar que los libros digitales son más baratos."], ["Il est vrai que c'est difficile ; néanmoins, c'est possible.", "Es verdad que es difícil; sin embargo, es posible."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Certes que la voiture est pratique…", "Certes, la voiture est pratique…", "Certes va seguido de coma, sin que."], ["Certe, ce film est long…", "Certes, ce film est long…", "Con s final."], ["Or = entonces", "Or = pero resulta que", "Introduce un dato contrario."]] }
  ],
  ejemplos: [
    { sit: "«Es cierto que es caro, pero es útil.»", resp: "Certes, c'est cher, mais c'est utile.", pasos: ["Certes + coma.", "mais refuta."], porque: "Concesión." },
    { sit: "«Se podría objetar que…»", resp: "On pourrait objecter que…", pasos: ["Condicional de cortesía."], porque: "Objeción." },
    { sit: "«On dit qu'il est riche. Or, il est endetté.» Or introduce…", resp: "un dato que contradice", pasos: ["Or = pero resulta que."], porque: "Refutación." }
  ],
  comprueba: [
    { q: "«Certes» sirve para…", o: ["conceder", "concluir"], a: 0, b: "gr", porque: "Certes, … mais." },
    { q: "Después de «Certes» va…", o: ["una coma", "que"], a: 0, b: "gr", porque: "Certes, …" },
    { q: "«En réalité» sirve para…", o: ["refutar", "conceder"], a: 0, b: "gr", porque: "Refutar." }
  ],
  practica: [
    { fase: "guiada", c: ["b2ca-conceder", "b2ca-refuter"], k: "sort", ask: "¿Sirve para conceder o para refutar?", q: "Clasifica.", cats: ["Conceder", "Refutar"], items: [["Certes,", 0], ["Il est vrai que", 0], ["Bien sûr,", 0], ["J'admets que", 0], ["Pourtant,", 1], ["En réalité,", 1], ["Ce n'est pas le cas", 1], ["Or,", 1]], pista: "Certes: conceder.", why: "Funciones." },
    { fase: "guiada", c: ["b2ca-conceder"], k: "choice", ask: "«Es cierto que es caro, pero es útil.»", q: "«___»", o: ["Certes, c'est cher, mais c'est utile.", "Certes que c'est cher, mais c'est utile."], a: 0, pista: "Sin que.", why: "<b>Certes,</b>" },
    { fase: "guiada", c: ["b2ca-refuter"], k: "choice", ask: "«Se podría objetar que…»", q: "«___ les livres numériques sont moins chers.»", o: ["On pourrait objecter que", "On peut objecter si"], a: 0, pista: "Condicional.", why: "<b>On pourrait objecter que</b>." },
    { fase: "indep", c: ["b2ca-refuter"], k: "choice", es: true, ask: "«On dit qu'il est riche. Or, il est endetté.» Or introduce…", q: "Elige.", o: ["un dato que contradice", "una conclusión"], a: 0, why: "Or." },
    { fase: "indep", c: ["b2ca-conceder"], k: "fill", ask: "«Es verdad que…»", q: "Il est ___ que ce projet coûte cher ; cependant, il est nécessaire.", acc: ["vrai"], why: "<b>vrai</b>." },
    { fase: "indep", c: ["b2ca-conceder"], k: "fill", ask: "«sin embargo» (formal)", q: "C'est difficile ; ___ , c'est possible.", acc: ["néanmoins", "cependant", "toutefois"], why: "<b>néanmoins</b>." },
    { fase: "aplica", c: ["b2ca-conceder", "b2ca-refuter"], k: "match", ask: "Une cada fórmula con su función.", q: "Fórmula → función", pairs: [["Certes,", "conceder"], ["On pourrait objecter que", "presentar una objeción"], ["Or,", "introducir un dato contrario"], ["En réalité,", "refutar"]], why: "Funciones." },
    { fase: "aplica", c: ["b2ca-conceder"], k: "spot", ask: "Encuentra el error.", s: "[Certe] , ce film est long , mais il est passionnant .", fix: "Certes", why: "<b>Certes</b>." },
    { fase: "aplica", c: ["b2ca-conceder"], k: "spot", ask: "Encuentra el error.", s: "[Certes que] la voiture est pratique , mais elle pollue .", fix: "Certes,", why: "<b>Certes,</b>" },
    { fase: "dominio", c: ["b2ca-conceder"], k: "order", ask: "Ordena: «Es cierto que es difícil, pero vale la pena».", tokens: ["Certes,", "c'est difficile,", "mais ça vaut la peine."], why: "<b>Certes, c'est difficile, mais ça vaut la peine.</b>" },
    { fase: "dominio", c: ["b2ca-refuter"], k: "choice", ask: "«Dicen que los jóvenes ya no leen. Pero resulta que leen mucho.»", q: "«On dit que les jeunes ne lisent plus. ___, ils lisent beaucoup.»", o: ["Or", "Donc"], a: 0, why: "<b>Or</b>." },
    { fase: "dominio", c: ["b2ca-conceder", "b2ca-refuter"], k: "listen", say: "Certes, Internet facilite l'accès à l'information, mais il favorise aussi les fausses nouvelles.", acc: ["Certes, Internet facilite l'accès à l'information, mais il favorise aussi les fausses nouvelles."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Certes, Internet facilite l'accès à l'information, mais il favorise aussi les fausses nouvelles.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Internet"], previo: [] }
};

/* ================================ B1.2·10 · Textos prácticos y matices ================================ */
E["b12-lettre-motivation"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "La lettre de motivation",
  objetivo: {
    que: "Vas a escribir una carta de motivación con el esquema vous → moi → nous y las fórmulas formales.",
    corto: "Madame, Monsieur, … Je me permets de vous adresser ma candidature…",
    podras: ["Escribir el encabezado (Objet : Candidature au poste de…) y el saludo formal: Madame, Monsieur,", "Organizar la carta: vous (la empresa), moi (tu perfil), nous (lo que aportarás).", "Usar las fórmulas: Je me permets de…, Titulaire de…, Je me tiens à votre disposition…, Veuillez agréer…"],
    iconos: ["ic2/pergamino", "ic2/birrete", "ic2/laptop"],
    previos: ["El correo formal (lección 8) y el mundo del trabajo (B1.1, lección 16)."],
    capacidad: "Ahora puedes postularte a unas prácticas en Francia."
  },
  requiere: R("b2ce-formules", "b1et-travail"), recupera: ["b2ce-formules"],
  conceptos: {
    "b2lm-plan": { n: "esquema vous (empresa y puesto) → moi (perfil) → nous (lo que aportarás); Objet : Candidature au poste de…; Madame, Monsieur,", b: "gr" },
    "b2lm-formules": { n: "Je me permets de vous adresser…, Titulaire de…, Je me tiens à votre disposition pour un entretien, Veuillez agréer…", b: "gr" }
  },
  video: {
    titulo: "La carta de motivación", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/pergamino", grande: "vous · moi · nous", seg: [
        { es: "Hola. Tres párrafos: ustedes, yo, nosotros." } ] },
      { v: "frase", filas: [
          { nota: "vous", p: 1, partes: [["Votre entreprise recherche un assistant commercial.", "-", 1]] },
          { nota: "moi", p: 2, partes: [["Titulaire d'une licence de langues, je parle trois langues.", "-", 2]] },
          { nota: "nous", p: 3, partes: [["Je souhaiterais mettre mes compétences au service de votre équipe.", "-", 3]] } ], seg: [
        { fr: "Votre entreprise recherche un assistant commercial.", p: 1 }, { fr: "Titulaire d'une licence de langues, je parle trois langues.", p: 2 }, { fr: "Je souhaiterais mettre mes compétences au service de votre équipe.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "Saludo de una carta formal a alguien que no conoces.", o: ["Madame, Monsieur,", "Chère Madame la directrice,"], a: 0,
        bien: "¡Sí! Sin cher / chère.", mal: "A un desconocido: Madame, Monsieur,",
        seg: [ { es: "Pausa. ¿Cómo saludas?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Objet", "Madame, Monsieur,", "Titulaire de", "un entretien", "Veuillez agréer"], seg: [
        { es: "Formal de principio a fin.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La postulación", img: "bg-biblioteca", yo: "camila",
    escena: "Camila escribe su carta para unas prácticas en Lyon.",
    pj: PJ,
    lineas: [
      ["camila", "« Objet : Candidature au poste d'assistante commerciale. Madame, Monsieur, je me permets de vous adresser ma candidature. »", "«Asunto: Candidatura al puesto de asistente comercial. Señora, señor: me permito enviarle mi candidatura»."],
      ["hugo", "Bien. Et ensuite, ton profil ?", "Bien. ¿Y luego, tu perfil?"],
      ["camila", "« Titulaire d'une licence de langues, je parle couramment trois langues. Je souhaiterais mettre mes compétences au service de votre équipe. »", "«Con una licenciatura en lenguas, hablo con fluidez tres idiomas. Quisiera poner mis competencias al servicio de su equipo»."],
      ["hugo", "Et la fin : « Je me tiens à votre disposition pour un entretien. Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées. »", "Y el final: «Quedo a su disposición para una entrevista. Reciba, señora, señor, un cordial saludo»."]
    ],
    fijate: "Fíjate: Objet; Madame, Monsieur,; je me permets de vous adresser; Titulaire d'une licence; au service de votre équipe; je me tiens à votre disposition; Veuillez agréer…"
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Esquema y fórmulas",
      idea: "Encabezado: Objet : Candidature au poste de… Saludo: Madame, Monsieur, (sin cher / chère si no conoces a la persona). Vous: la empresa y el puesto: Votre entreprise, leader dans…, recherche… Moi: tu perfil: Titulaire d'un master en…, j'ai acquis une expérience… Nous: lo que aportarás: Je souhaiterais mettre mes compétences au service de votre équipe. Final: Je me tiens à votre disposition pour un entretien. Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Parte"], [
        ["Objet : Candidature au poste de… · Objet", "Asunto: Candidatura al puesto de…", "encabezado"],
        ["Madame, Monsieur,", "Señora, señor:", "saludo formal"],
        ["Je me permets de vous adresser ma candidature. · Je me permets de vous adresser…", "Me permito enviarle mi candidatura.", "inicio"],
        ["Titulaire d'un diplôme en marketing, … · Titulaire de · Titulaire", "Con un título en marketing…", "moi"],
        ["Je me tiens à votre disposition pour un entretien. · disposition", "Quedo a su disposición para una entrevista.", "final"],
        ["un entretien · un entretien d'embauche", "una entrevista · una entrevista de trabajo", "vocabulario"],
        ["Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées. · Veuillez agréer · Veuillez agréer…", "Reciba un cordial saludo.", "fórmula final"],
        ["Je serais ravi de vous rencontrer.", "Me encantaría conocerle.", "formal"],
        ["Coucou ! · Bisous · Je veux ce boulot. · À plus !", "¡Hola! · Besos · Quiero ese trabajo. · ¡Chao!", "NO en una carta formal"]
      ]],
      ej: [["Je me permets de vous adresser ma candidature pour le poste d'assistant commercial.", "Me permito enviarle mi candidatura para el puesto de asistente comercial."], ["Titulaire d'une licence de langues, je parle couramment trois langues.", "Con una licenciatura en lenguas, hablo con fluidez tres idiomas."], ["Je me tiens à votre disposition pour un entretien.", "Quedo a su disposición para una entrevista."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Chère Madame la directrice,", "Madame la Directrice, / Madame, Monsieur,", "Sin cher / chère si no conoces a la persona."], ["Je me tiens à votre disponibilité.", "Je me tiens à votre disposition.", "Fórmula fija."], ["Je veux ce boulot.", "Je souhaiterais rejoindre votre équipe.", "Registro formal."]] }
  ],
  ejemplos: [
    { sit: "Saludo a un desconocido", resp: "Madame, Monsieur,", pasos: ["Sin cher."], porque: "Formal." },
    { sit: "«Quedo a su disposición para una entrevista.»", resp: "Je me tiens à votre disposition pour un entretien.", pasos: ["Fórmula fija."], porque: "Final." },
    { sit: "«un entretien d'embauche»", resp: "una entrevista de trabajo", pasos: ["Vocabulario."], porque: "Trabajo." }
  ],
  comprueba: [
    { q: "El esquema de la carta es…", o: ["vous → moi → nous", "moi → moi → moi"], a: 0, b: "gr", porque: "Empresa, perfil, aporte." },
    { q: "A un desconocido se le saluda con…", o: ["Madame, Monsieur,", "Coucou !"], a: 0, b: "gr", porque: "Formal." },
    { q: "«Titulaire de» significa…", o: ["con un título de", "el titular del periódico"], a: 0, b: "gr", porque: "Perfil." }
  ],
  practica: [
    { fase: "guiada", c: ["b2lm-formules"], k: "sort", ask: "¿Va en una carta de motivación?", q: "Clasifica.", cats: ["Sí", "No"], items: [["Madame, Monsieur,", 0], ["Je me permets de vous adresser…", 0], ["Veuillez agréer…", 0], ["Je serais ravi de vous rencontrer.", 0], ["Coucou !", 1], ["Bisous", 1], ["Je veux ce boulot.", 1], ["À plus !", 1]], pista: "Registro formal.", why: "Registro." },
    { fase: "guiada", c: ["b2lm-plan"], k: "choice", ask: "Saludo formal a alguien que no conoces.", q: "«___»", o: ["Madame, Monsieur,", "Chère Madame,"], a: 0, pista: "Sin cher.", why: "<b>Madame, Monsieur,</b>" },
    { fase: "guiada", c: ["b2lm-formules"], k: "choice", ask: "«Quedo a su disposición para una entrevista.»", q: "«___»", o: ["Je me tiens à votre disposition pour un entretien.", "Je suis à votre disponibilité pour un entretien."], a: 0, pista: "Fórmula fija.", why: "<b>Je me tiens à votre disposition</b>." },
    { fase: "indep", c: ["b2lm-formules"], k: "choice", es: true, ask: "«un entretien d'embauche» es…", q: "Elige.", o: ["una entrevista de trabajo", "un mantenimiento"], a: 0, why: "Entrevista." },
    { fase: "indep", c: ["b2lm-plan"], k: "fill", ask: "«Asunto»", q: "___ : Candidature au poste de réceptionniste.", acc: ["Objet"], why: "<b>Objet</b>." },
    { fase: "indep", c: ["b2lm-formules"], k: "fill", ask: "«Con un título de…» (titular)", q: "___ d'un diplôme en marketing, je souhaite rejoindre votre équipe.", acc: ["Titulaire"], why: "<b>Titulaire</b>." },
    { fase: "aplica", c: ["b2lm-plan"], k: "match", ask: "Une cada parte con su contenido.", q: "Parte → contenido", pairs: [["vous", "la empresa y el puesto"], ["moi", "mi perfil y experiencia"], ["nous", "lo que aportaré"], ["formule finale", "saludo de cortesía"]], why: "Esquema." },
    { fase: "aplica", c: ["b2lm-formules"], k: "spot", ask: "Encuentra el error.", s: "Je me tiens à votre [disponibilité] pour un entretien .", fix: "disposition", why: "<b>disposition</b>." },
    { fase: "aplica", c: ["b2lm-plan"], k: "spot", ask: "Encuentra el error (carta formal).", s: "[Chère Madame] , je me permets de vous adresser ma candidature .", fix: "Madame, Monsieur,", why: "<b>Madame, Monsieur,</b>" },
    { fase: "dominio", c: ["b2lm-formules"], k: "order", ask: "Ordena: «Me permito enviarle mi candidatura».", tokens: ["Je me permets", "de vous adresser", "ma candidature."], why: "<b>Je me permets de vous adresser ma candidature.</b>" },
    { fase: "dominio", c: ["b2lm-formules"], k: "choice", ask: "Fórmula final de la carta.", q: "«___, Madame, Monsieur, l'expression de mes salutations distinguées.»", o: ["Veuillez agréer", "Bisous"], a: 0, why: "<b>Veuillez agréer</b>." },
    { fase: "dominio", c: ["b2lm-plan", "b2lm-formules"], k: "listen", say: "Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées.", acc: ["Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Lyon"], previo: [] }
};

E["b12-compte-rendu"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Résumer un texte : le compte rendu",
  objetivo: {
    que: "Vas a resumir un texto: ideas principales, con tus palabras, sin opinar y en el orden del autor.",
    corto: "Cet article traite de… L'auteur souligne… Il conclut que…",
    podras: ["Identificar el tema, la tesis y los argumentos principales, y eliminar lo secundario.", "Presentar el texto: Ce texte traite de… L'auteur y défend l'idée que…", "Encadenar con verbos introductores: l'auteur explique, souligne, dénonce, conclut."],
    iconos: ["ic2/libro", "ic2/lapiz", "ic2/pergamino"],
    previos: ["Reformular (B1.1, lección 47), los verbos introductores (lección 32) y la nominalización (lección 27)."],
    capacidad: "Ahora haces el resumen de un artículo del DELF."
  },
  requiere: R("b1rf-expl", "b2vi-neutre", "b2no-suff"), recupera: ["b2vi-neutre"],
  conceptos: {
    "b2cr-regles": { n: "resumir: conservar tema, tesis, argumentos y conclusión; eliminar opinión, anécdotas, cifras de detalle y citas; reformular", b: "gr" },
    "b2cr-verbes": { n: "Ce texte traite de (no «parle sur»); l'auteur défend l'idée que, souligne, dénonce, montre, conclut", b: "gr" }
  },
  video: {
    titulo: "Resumir un texto", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/libro", grande: "le compte rendu", seg: [
        { es: "Hola. Resumir es reducir sin traicionar." } ] },
      { v: "frase", filas: [
          { nota: "tema", p: 1, partes: [["Cet article traite de la place du sport à l'école.", "-", 1]] },
          { nota: "idea", p: 2, partes: [["L'auteur souligne d'abord les bienfaits du sport.", "-", 2]] },
          { nota: "cierre", p: 3, partes: [["Il conclut en proposant deux heures de plus.", "-", 3]] } ], seg: [
        { fr: "Cet article traite de la place du sport à l'école.", p: 1 }, { fr: "L'auteur souligne d'abord les bienfaits du sport.", p: 2 }, { fr: "Il conclut en proposant deux heures de plus.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Este texto habla de los peligros de las pantallas.»", o: ["Ce texte parle des dangers des écrans.", "Ce texte parle sur les dangers des écrans."], a: 0,
        bien: "¡Sí! Parler de.", mal: "Nunca parler sur.",
        seg: [ { es: "Pausa. Habla de." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["traite de", "souligne", "défend", "dénonce", "conclut"], seg: [
        { es: "Sin tu opinión.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El resumen del artículo", img: "bg-biblioteca", yo: "camila",
    escena: "Camila resume un artículo para su clase.",
    pj: PJ,
    lineas: [
      ["camila", "« Cet article, publié dans Le Monde, traite de la place du sport à l'école. »", "«Este artículo, publicado en Le Monde, trata del lugar del deporte en la escuela»."],
      ["hugo", "Et tu ajoutes ton avis ?", "¿Y agregas tu opinión?"],
      ["camila", "Non ! Dans un résumé, pas d'opinion. « L'auteur souligne d'abord les bienfaits de l'activité physique. Puis il dénonce les inégalités. »", "¡No! En un resumen, nada de opinión. «El autor subraya primero los beneficios de la actividad física. Luego denuncia las desigualdades»."],
      ["hugo", "« Enfin, il conclut en proposant deux heures de sport supplémentaires. » Dans cet autre article, l'auteur montre que le télétravail transforme nos habitudes.", "«Por último, concluye proponiendo dos horas más de deporte». En este otro artículo, el autor muestra que el teletrabajo transforma nuestros hábitos."]
    ],
    fijate: "Fíjate: traite de, souligne d'abord, dénonce, puis, enfin, conclut en proposant, montre que: tercera persona, sin opinión."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Cómo resumir",
      idea: "Resumir es reducir un texto a sus ideas principales, con tus propias palabras, sin opinar y respetando el orden. Conservar: la tesis del autor, los argumentos principales, la conclusión, el tema. Eliminar: tu opinión, anécdotas secundarias, cifras de detalle, citas largas. Presentar: Ce texte, publié dans…, traite de… L'auteur y défend l'idée que… Encadenar: Il commence par…, puis il montre que…, enfin il conclut que… Ojo: traiter de, parler de (nunca parler sur).",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Uso"], [
        ["la thèse de l'auteur · les arguments principaux · la conclusion · le thème", "la tesis del autor · los argumentos principales · la conclusión · el tema", "conservar"],
        ["ton opinion · les anecdotes secondaires · les chiffres de détail · les longues citations", "tu opinión · las anécdotas secundarias · las cifras de detalle · las citas largas", "eliminar"],
        ["Ce texte traite de la pollution. · traite de · parle des · des", "Este texto trata de la contaminación.", "presentar"],
        ["L'auteur défend l'idée que… · défend", "El autor defiende la idea de que…", "tesis"],
        ["L'auteur souligne… · souligne", "El autor subraya…", "verbo"],
        ["L'auteur dénonce les inégalités. · dénonce", "El autor denuncia la desigualdad.", "verbo"],
        ["Il conclut en proposant une solution. · conclut", "Concluye proponiendo una solución.", "cierre"],
        ["Il commence par… puis il montre que… enfin…", "Empieza por… luego muestra que… por último…", "encadenar"]
      ]],
      ej: [["Cet article traite de la place du sport à l'école.", "Este artículo trata del lugar del deporte en la escuela."], ["L'auteur souligne d'abord les bienfaits de l'activité physique.", "El autor subraya primero los beneficios de la actividad física."], ["Il conclut en proposant deux heures de sport supplémentaires.", "Concluye proponiendo dos horas más de deporte."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Ce texte parle sur l'école.", "Ce texte parle de / traite de l'école.", "traiter de, parler de."], ["Je pense que l'auteur a raison.", "L'auteur défend l'idée que…", "Sin opinión en el resumen."], ["Copiar frases del texto", "Reformular con tus palabras", "Sinónimos y nominalizaciones."]] }
  ],
  ejemplos: [
    { sit: "¿Qué NO va en un resumen?", resp: "tu opinión personal", pasos: ["Resumir no es comentar."], porque: "Neutralidad." },
    { sit: "«Este texto trata de la contaminación.»", resp: "Ce texte traite de la pollution.", pasos: ["traiter de."], porque: "Presentar." },
    { sit: "«El autor denuncia la desigualdad.»", resp: "L'auteur dénonce les inégalités.", pasos: ["Verbo introductor."], porque: "Actitud." }
  ],
  comprueba: [
    { q: "En un resumen se conserva…", o: ["la tesis del autor", "tu opinión"], a: 0, b: "gr", porque: "Ideas principales." },
    { q: "«Trata de» se dice…", o: ["traite de", "parle sur"], a: 0, b: "gr", porque: "traiter de." },
    { q: "Un resumen se escribe…", o: ["con tus palabras y en el orden del autor", "copiando las frases"], a: 0, b: "gr", porque: "Reformular." }
  ],
  practica: [
    { fase: "guiada", c: ["b2cr-regles"], k: "sort", ask: "¿Se conserva o se elimina en el resumen?", q: "Clasifica.", cats: ["Conservar", "Eliminar"], items: [["la thèse de l'auteur", 0], ["les arguments principaux", 0], ["la conclusion", 0], ["le thème", 0], ["ton opinion", 1], ["les anecdotes secondaires", 1], ["les chiffres de détail", 1], ["les longues citations", 1]], pista: "Solo lo esencial.", why: "Selección." },
    { fase: "guiada", c: ["b2cr-regles"], k: "choice", es: true, ask: "¿Qué NO va en un resumen?", q: "Elige.", o: ["tu opinión personal", "la tesis del autor"], a: 0, pista: "Neutral.", why: "Sin opinión." },
    { fase: "guiada", c: ["b2cr-verbes"], k: "choice", ask: "«Este texto trata de la contaminación.»", q: "«___»", o: ["Ce texte traite de la pollution.", "Ce texte traite sur la pollution."], a: 0, pista: "traiter de.", why: "<b>traite de</b>." },
    { fase: "indep", c: ["b2cr-verbes"], k: "choice", ask: "«El autor denuncia la desigualdad.»", q: "«L'auteur ___ les inégalités.»", o: ["dénonce", "annonce"], a: 0, why: "<b>dénonce</b>." },
    { fase: "indep", c: ["b2cr-verbes"], k: "fill", ask: "«concluye» (conclure)", q: "L'auteur ___ en proposant une solution.", acc: ["conclut"], why: "<b>conclut</b>." },
    { fase: "indep", c: ["b2cr-verbes"], k: "fill", ask: "«defiende» (défendre)", q: "Dans cet article, la journaliste ___ l'idée que le travail doit évoluer.", acc: ["défend"], why: "<b>défend</b>." },
    { fase: "aplica", c: ["b2cr-regles"], k: "match", ask: "Une cada paso con su acción.", q: "Paso → acción", pairs: [["leer", "identificar el tema"], ["subrayar", "localizar la tesis"], ["reformular", "usar tus palabras"], ["encadenar", "ordenar con conectores"]], why: "Pasos." },
    { fase: "aplica", c: ["b2cr-verbes"], k: "spot", ask: "Encuentra el error.", s: "Ce texte parle [sur] les dangers des écrans chez les enfants .", fix: "des", why: "<b>parle des</b>." },
    { fase: "aplica", c: ["b2cr-regles"], k: "choice", ask: "¿Qué frase es correcta en un resumen?", q: "«___»", o: ["L'auteur défend l'idée que la lecture est essentielle.", "Je pense que la lecture est essentielle."], a: 0, why: "Sin opinión propia." },
    { fase: "dominio", c: ["b2cr-verbes"], k: "order", ask: "Ordena: «El autor defiende la idea de que…».", tokens: ["L'auteur", "défend", "l'idée que…"], why: "<b>L'auteur défend l'idée que…</b>" },
    { fase: "dominio", c: ["b2cr-verbes"], k: "choice", ask: "«El autor subraya primero los beneficios del deporte.»", q: "«L'auteur ___ d'abord les bienfaits du sport.»", o: ["souligne", "soulage"], a: 0, why: "<b>souligne</b>." },
    { fase: "dominio", c: ["b2cr-regles", "b2cr-verbes"], k: "listen", say: "Dans cet article, l'auteur montre que le télétravail transforme nos habitudes.", acc: ["Dans cet article, l'auteur montre que le télétravail transforme nos habitudes."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Dans cet article, l'auteur montre que le télétravail transforme nos habitudes.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Le Monde"], previo: [] }
};

E["b12-souhait"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Exprimer un souhait : j'aimerais que, je souhaite que, pourvu que",
  objetivo: {
    que: "Vas a expresar deseos para ti y para otros: j'aimerais voyager, j'aimerais que tu viennes, pourvu que…, vivement…",
    corto: "J'aimerais que tu viennes. · Vivement le week-end !",
    podras: ["Usar el infinitivo con el mismo sujeto: je souhaite partir.", "Usar que + subjuntivo con otro sujeto: j'aimerais que, je voudrais que, ce serait bien que, pourvu que.", "Recordar que espérer que va con indicativo y que vivement va con un nombre."],
    iconos: ["ic2/estrella", "ic2/regalo", "ic2/corazon"],
    previos: ["Subjuntivo o infinitivo (lección 13) y la condición con pourvu que (lección 29)."],
    capacidad: "Ahora escribes una tarjeta de buenos deseos en francés."
  },
  requiere: R("b2si2-meme", "b2si2-autre", "b2cd-cond"), recupera: ["b2si2-autre"],
  conceptos: {
    "b2sh-subj": { n: "deseo para otro: j'aimerais / je voudrais / je souhaite / ce serait bien que + subjuntivo; pourvu que + subjuntivo", b: "gr" },
    "b2sh-autres": { n: "mismo sujeto + infinitivo (j'aimerais voyager); espérer que + indicativo; vivement + nombre (vivement les vacances !)", b: "gr" }
  },
  video: {
    titulo: "Expresar un deseo", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/estrella", grande: "j'aimerais que…", seg: [
        { es: "Hola. Desear para uno o para otro cambia la frase." } ] },
      { v: "dos",
        a: { tag: "para mí", fr: "J'aimerais voyager.", es: "infinitivo" },
        b: { tag: "para otro", fr: "J'aimerais que tu viennes.", es: "que + subjuntivo" },
        seg: [ { es: "Para mí:", p: 1 }, { fr: "J'aimerais voyager.", p: 1 }, { es: "Para otro:", p: 2 }, { fr: "J'aimerais que tu viennes.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Espero que estés mejor desde la semana pasada.»", o: ["J'espère que tu vas mieux depuis la semaine dernière.", "J'espère que tu ailles mieux depuis la semaine dernière."], a: 0,
        bien: "¡Sí! Espérer que + indicativo.", mal: "Espérer que: indicativo, vas.",
        seg: [ { es: "Pausa. Espero que estés." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["j'aimerais que", "je souhaite que", "pourvu que", "ce serait bien que", "j'espère que", "vivement"], seg: [
        { es: "Espérer, la excepción.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El cumpleaños", img: "bg-cafe", yo: "camila",
    escena: "Camila invita a Hugo a su cumpleaños.",
    pj: PJ,
    lineas: [
      ["camila", "J'aimerais tellement que tu puisses venir à mon anniversaire !", "¡Me gustaría tanto que pudieras venir a mi cumpleaños!"],
      ["hugo", "Bien sûr ! J'espère que tu vas bien, depuis ton voyage. Pourvu qu'il ne pleuve pas samedi !", "¡Claro! Espero que estés bien desde tu viaje. ¡Ojalá no llueva el sábado!"],
      ["camila", "Ce serait bien que Sofia vienne aussi. J'aimerais que nous y allions ensemble.", "Sería bueno que Sofia también viniera. Me gustaría que fuéramos juntos."],
      ["hugo", "D'accord. Vivement samedi ! Et je souhaite que tes invités passent une excellente soirée.", "De acuerdo. ¡Que llegue ya el sábado! Y deseo que tus invitados pasen una excelente velada."]
    ],
    fijate: "Fíjate: j'aimerais que tu puisses, ce serait bien que Sofia vienne, que nous y allions, je souhaite que… passent, pourvu qu'il ne pleuve pas (subjuntivo); j'espère que tu vas (indicativo); vivement samedi."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Deseos: infinitivo, subjuntivo o indicativo",
      idea: "Mismo sujeto: souhaiter, vouloir, aimer + infinitivo: J'aimerais voyager. Je souhaite partir. Otro sujeto: que + subjuntivo: J'aimerais que tu viennes. Je voudrais que… Ce serait bien que… Je souhaite que vous passiez un excellent séjour. Pourvu que + subjuntivo expresa un deseo fuerte (ojalá): Pourvu qu'il fasse beau ! Excepción: espérer que + indicativo: J'espère que tu vas bien. Vivement + nombre: Vivement le week-end ! (¡que llegue ya…!).",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Modo"], [
        ["j'aimerais que · je voudrais que · pourvu que · ce serait bien que · je souhaite que", "me gustaría que · quisiera que · ojalá · sería bueno que · deseo que", "+ subjuntivo"],
        ["j'espère que · je pense que · je suis sûr que · je crois que", "espero que · pienso que · estoy seguro de que · creo que", "+ indicativo"],
        ["J'aimerais que tu viennes.", "Me gustaría que vinieras.", "subjuntivo"],
        ["Je souhaite que vous passiez un excellent séjour. · passiez", "Les deseo una excelente estadía.", "subjuntivo"],
        ["Pourvu qu'il ne pleuve pas ! · pleuve", "¡Ojalá no llueva!", "subjuntivo"],
        ["J'espère que tu vas bien. · vas", "Espero que estés bien.", "indicativo"],
        ["J'aimerais voyager. · Je souhaite partir.", "Me gustaría viajar. · Deseo irme.", "infinitivo"],
        ["Vivement les vacances ! · Vivement le week-end ! · vivement", "¡Que lleguen ya las vacaciones! · ¡Que llegue ya el fin de semana!", "+ nombre"]
      ]],
      ej: [["J'aimerais que tu m'appelles plus souvent.", "Me gustaría que me llamaras más a menudo."], ["J'espère que vous avez fait bon voyage.", "Espero que hayan tenido buen viaje."], ["Vivement le week-end !", "¡Que llegue ya el fin de semana!"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["J'espère que tu sois bien.", "J'espère que tu vas bien.", "espérer que + indicativo."], ["J'aimerais que je voyage.", "J'aimerais voyager.", "Mismo sujeto: infinitivo."], ["Pourvu qu'il fait beau !", "Pourvu qu'il fasse beau !", "Pourvu que + subjuntivo."]] }
  ],
  ejemplos: [
    { sit: "«Espero que estés bien.»", resp: "J'espère que tu vas bien.", pasos: ["espérer: indicativo."], porque: "Excepción." },
    { sit: "«Me gustaría que vinieras.»", resp: "J'aimerais que tu viennes.", pasos: ["Otro sujeto: subjuntivo."], porque: "Deseo." },
    { sit: "«¡Que lleguen ya las vacaciones!»", resp: "Vivement les vacances !", pasos: ["vivement + nombre."], porque: "Impaciencia." }
  ],
  comprueba: [
    { q: "«J'aimerais que» va con…", o: ["subjuntivo", "indicativo"], a: 0, b: "gr", porque: "Deseo para otro." },
    { q: "«J'espère que» va con…", o: ["indicativo", "subjuntivo"], a: 0, b: "gr", porque: "Excepción." },
    { q: "«Vivement» va seguido de…", o: ["un nombre", "que + subjuntivo"], a: 0, b: "gr", porque: "Vivement les vacances !" }
  ],
  practica: [
    { fase: "guiada", c: ["b2sh-subj", "b2sh-autres"], k: "sort", ask: "¿Subjuntivo o indicativo?", q: "Clasifica.", cats: ["Subjuntivo", "Indicativo"], items: [["j'aimerais que", 0], ["je voudrais que", 0], ["pourvu que", 0], ["ce serait bien que", 0], ["j'espère que", 1], ["je pense que", 1], ["je suis sûr que", 1], ["je crois que", 1]], pista: "Espérer: indicativo.", why: "Modos." },
    { fase: "guiada", c: ["b2sh-autres"], k: "choice", ask: "«Espero que estés bien.»", q: "«J'espère que tu ___ bien.»", o: ["vas", "ailles"], a: 0, pista: "Excepción.", why: "<b>vas</b>." },
    { fase: "guiada", c: ["b2sh-subj"], k: "choice", ask: "«Me gustaría que vinieras.»", q: "«___»", o: ["J'aimerais que tu viennes.", "J'aimerais que tu viens."], a: 0, pista: "Subjuntivo.", why: "<b>viennes</b>." },
    { fase: "indep", c: ["b2sh-autres"], k: "choice", ask: "«¡Que lleguen ya las vacaciones!»", q: "«___»", o: ["Vivement les vacances !", "Vivement que les vacances !"], a: 0, why: "<b>Vivement les vacances !</b>" },
    { fase: "indep", c: ["b2sh-subj"], k: "fill", ask: "Subjuntivo de passer (vous).", q: "Je souhaite que vous ___ un excellent séjour.", acc: ["passiez"], why: "<b>passiez</b>." },
    { fase: "indep", c: ["b2sh-subj"], k: "fill", ask: "Subjuntivo de pleuvoir.", q: "Pourvu qu'il ne ___ pas !", acc: ["pleuve"], why: "<b>pleuve</b>." },
    { fase: "aplica", c: ["b2sh-subj", "b2sh-autres"], k: "match", ask: "Une cada expresión con lo que pide.", q: "Expresión → construcción", pairs: [["J'espère que", "indicativo"], ["Je souhaite que", "subjuntivo"], ["Je souhaite", "infinitivo"], ["Vivement", "nombre"]], why: "Construcciones." },
    { fase: "aplica", c: ["b2sh-autres"], k: "spot", ask: "Encuentra el error.", s: "J'espère que tu [ailles] mieux depuis la semaine dernière .", fix: "vas", why: "<b>vas</b>." },
    { fase: "aplica", c: ["b2sh-autres"], k: "spot", ask: "Encuentra el error.", s: "J'aimerais [que je voyage] au Canada l'été prochain .", fix: "voyager", why: "<b>voyager</b>." },
    { fase: "dominio", c: ["b2sh-subj"], k: "order", ask: "Ordena: «Me gustaría que fuéramos juntos».", tokens: ["J'aimerais", "que nous y allions", "ensemble."], why: "<b>J'aimerais que nous y allions ensemble.</b>" },
    { fase: "dominio", c: ["b2sh-subj"], k: "choice", ask: "«Sería bueno que Sofia también viniera.»", q: "«Ce serait bien que Sofia ___ aussi.»", o: ["vienne", "vient"], a: 0, why: "<b>vienne</b>." },
    { fase: "dominio", c: ["b2sh-subj", "b2sh-autres"], k: "listen", say: "J'aimerais tellement que tu puisses venir à mon anniversaire.", acc: ["J'aimerais tellement que tu puisses venir à mon anniversaire."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>J'aimerais tellement que tu puisses venir à mon anniversaire.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Sofia", "Canada"], previo: [] }
};

E["b12-attenuer"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Atténuer ses propos : il semblerait que, dans une certaine mesure",
  objetivo: {
    que: "Vas a suavizar una afirmación para sonar prudente: je dirais que, il semblerait que, dans une certaine mesure, plutôt.",
    corto: "Je dirais que c'est plutôt cher. · Dans une certaine mesure, je suis d'accord.",
    podras: ["Usar el condicional de prudencia: je dirais que, on pourrait penser que, il semblerait que.", "Limitar lo que dices: dans une certaine mesure, en partie, plutôt, assez.", "Distinguir il semble que + subjuntivo de il me semble que + indicativo, y elogiar con litote: ce n'est pas mal."],
    iconos: ["ic2/flor", "ic2/bombilla", "ic2/pregunta"],
    previos: ["El condicional de cortesía (B1.1, lección 22) y la certeza y la duda (B1.1, lección 46)."],
    capacidad: "Ahora das tu opinión sin sonar tajante."
  },
  requiere: R("b1cp-conseil", "b1cd-indic", "b1cd-subj"), recupera: ["b1cd-subj"],
  conceptos: {
    "b2at-cond": { n: "condicional de prudencia: je dirais que, on pourrait penser que, il semblerait que; litote: ce n'est pas mal", b: "gr" },
    "b2at-limiter": { n: "limitar: dans une certaine mesure, en partie, plutôt, assez; il semble que + subjuntivo / il me semble que + indicativo", b: "gr" }
  },
  video: {
    titulo: "Suavizar lo que dices", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/flor", grande: "je dirais que…", seg: [
        { es: "Hola. En francés culto, se matiza mucho." } ] },
      { v: "dos",
        a: { tag: "tajante", fr: "C'est cher.", es: "es caro" },
        b: { tag: "atenuado", fr: "Je dirais que c'est plutôt cher.", es: "diría que es más bien caro" },
        seg: [ { es: "Tajante:", p: 1 }, { fr: "C'est cher.", p: 1 }, { es: "Prudente:", p: 2 }, { fr: "Je dirais que c'est plutôt cher.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Me parece que olvidaste algo.»", o: ["Il me semble que tu as oublié quelque chose.", "Il me semble que tu aies oublié quelque chose."], a: 0,
        bien: "¡Sí! Il me semble que + indicativo.", mal: "Con «me»: indicativo.",
        seg: [ { es: "Pausa. Me parece que." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["je dirais que", "il semblerait que", "dans une certaine mesure", "plutôt", "ce n'est pas mal"], seg: [
        { es: "Il semble que: subjuntivo; il me semble que: indicativo.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La reunión", img: "bg-universidad", yo: "camila",
    escena: "Camila y Hugo comentan los resultados de un proyecto.",
    pj: PJ,
    lineas: [
      ["hugo", "Il semblerait que les résultats soient positifs, du moins dans une certaine mesure.", "Parecería que los resultados son positivos, al menos hasta cierto punto."],
      ["camila", "Je dirais que c'est plutôt risqué. Il me semble que tu as oublié quelque chose.", "Diría que es más bien arriesgado. Me parece que olvidaste algo."],
      ["hugo", "En partie, oui. Dans une certaine mesure, cette décision est logique. Il semble que la situation soit meilleure.", "En parte, sí. Hasta cierto punto, esta decisión es lógica. Parece que la situación es mejor."],
      ["camila", "D'accord. Et le restaurant d'hier ? — Ce n'est pas mal du tout !", "Bueno. ¿Y el restaurante de ayer? — ¡No está nada mal!"]
    ],
    fijate: "Fíjate: il semblerait que… soient, il semble que… soit (subjuntivo); il me semble que tu as (indicativo); je dirais que, plutôt, en partie, dans une certaine mesure; ce n'est pas mal."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Hablar con prudencia",
      idea: "Condicional de prudencia: Je dirais que…, On pourrait penser que…, Il semblerait que + subjuntivo. Il semble que + subjuntivo; il me semble que + indicativo. Limitar: dans une certaine mesure, en partie, jusqu'à un certain point. Adverbios: plutôt, assez, un peu, relativement, peut-être. Litote (decir menos para decir más): Ce n'est pas mal = está bastante bien.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Tono"], [
        ["Il semblerait que… · Je dirais que… · En partie, · C'est plutôt bien.", "Parecería que… · Diría que… · En parte · Está más bien bien.", "atenuado"],
        ["C'est évident. · Sans aucun doute, · Absolument ! · C'est totalement faux.", "Es evidente. · Sin ninguna duda · ¡Absolutamente! · Es totalmente falso.", "tajante"],
        ["Il me semble qu'il a raison. · as", "Me parece que tiene razón.", "il me semble que + indicativo"],
        ["Il semble que la situation soit meilleure. · soit", "Parece que la situación es mejor.", "il semble que + subjuntivo"],
        ["Je dirais que c'est plutôt risqué. · plutôt · je dirais que", "Diría que es más bien arriesgado.", "suavizar"],
        ["dans une certaine mesure · mesure", "hasta cierto punto", "limitar"],
        ["Ce restaurant n'est pas mal. · ce n'est pas mal", "Este restaurante no está mal (= está bastante bien).", "litote"],
        ["Je dirais que c'est plutôt cher.", "Diría que es más bien caro.", "ejemplo"]
      ]],
      ej: [["Il semblerait que les résultats soient positifs.", "Parecería que los resultados son positivos."], ["Dans une certaine mesure, je suis d'accord avec vous.", "Hasta cierto punto, estoy de acuerdo con usted."], ["Ce film n'est pas mal du tout.", "Esta película no está nada mal."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Il me semble qu'il ait raison.", "Il me semble qu'il a raison.", "Il me semble que + indicativo."], ["Il semble que la situation est meilleure.", "Il semble que la situation soit meilleure.", "Il semble que + subjuntivo."], ["C'est totalement faux ! (en un debate cortés)", "Je dirais que ce n'est pas tout à fait exact.", "Atenuar."]] }
  ],
  ejemplos: [
    { sit: "«Me parece que tiene razón.»", resp: "Il me semble qu'il a raison.", pasos: ["il me semble que + indicativo."], porque: "Prudencia." },
    { sit: "Opinión prudente", resp: "Je dirais que c'est plutôt risqué.", pasos: ["Condicional + plutôt."], porque: "Atenuar." },
    { sit: "«Ce restaurant n'est pas mal.»", resp: "está bastante bien", pasos: ["Litote."], porque: "Elogio." }
  ],
  comprueba: [
    { q: "«Il semble que» va con…", o: ["subjuntivo", "indicativo"], a: 0, b: "gr", porque: "il semble que + subj." },
    { q: "«Il me semble que» va con…", o: ["indicativo", "subjuntivo"], a: 0, b: "gr", porque: "il me semble que + ind." },
    { q: "«Dans une certaine mesure» sirve para…", o: ["limitar", "insistir"], a: 0, b: "gr", porque: "Hasta cierto punto." }
  ],
  practica: [
    { fase: "guiada", c: ["b2at-cond", "b2at-limiter"], k: "sort", ask: "¿Atenuado o tajante?", q: "Clasifica.", cats: ["Atenuado", "Tajante"], items: [["Il semblerait que…", 0], ["Je dirais que…", 0], ["En partie,", 0], ["C'est plutôt bien.", 0], ["C'est évident.", 1], ["Sans aucun doute,", 1], ["Absolument !", 1], ["C'est totalement faux.", 1]], pista: "¿Matiza?", why: "Tono." },
    { fase: "guiada", c: ["b2at-limiter"], k: "choice", ask: "«Me parece que tiene razón.»", q: "«Il me semble qu'il ___ raison.»", o: ["a", "ait"], a: 0, pista: "Con «me».", why: "<b>a</b>." },
    { fase: "guiada", c: ["b2at-cond"], k: "choice", ask: "Opinión prudente.", q: "«___»", o: ["Je dirais que c'est plutôt risqué.", "C'est totalement risqué."], a: 0, pista: "Condicional.", why: "Atenuado." },
    { fase: "indep", c: ["b2at-cond"], k: "choice", es: true, ask: "«Ce restaurant n'est pas mal.» quiere decir…", q: "Elige.", o: ["está bastante bien", "es malo"], a: 0, why: "Litote." },
    { fase: "indep", c: ["b2at-limiter"], k: "fill", ask: "«Hasta cierto punto»", q: "Dans une certaine ___ , cette décision est logique.", acc: ["mesure"], why: "<b>mesure</b>." },
    { fase: "indep", c: ["b2at-limiter"], k: "fill", ask: "Subjuntivo de être.", q: "Il semble que la situation ___ meilleure.", acc: ["soit"], why: "<b>soit</b>." },
    { fase: "aplica", c: ["b2at-cond", "b2at-limiter"], k: "match", ask: "Une cada expresión con su función.", q: "Expresión → función", pairs: [["plutôt", "suavizar"], ["dans une certaine mesure", "limitar"], ["je dirais que", "opinar con prudencia"], ["ce n'est pas mal", "elogiar con litote"]], why: "Funciones." },
    { fase: "aplica", c: ["b2at-limiter"], k: "spot", ask: "Encuentra el error.", s: "Il me semble que tu [aies] oublié quelque chose .", fix: "as", why: "<b>as</b>." },
    { fase: "aplica", c: ["b2at-limiter"], k: "spot", ask: "Encuentra el error.", s: "Il semble que la situation [est] meilleure cette année .", fix: "soit", why: "<b>soit</b>." },
    { fase: "dominio", c: ["b2at-cond"], k: "order", ask: "Ordena: «Diría que es más bien caro».", tokens: ["Je dirais", "que c'est", "plutôt cher."], why: "<b>Je dirais que c'est plutôt cher.</b>" },
    { fase: "dominio", c: ["b2at-cond"], k: "choice", ask: "«Parecería que los resultados son positivos.»", q: "«Il ___ que les résultats soient positifs.»", o: ["semblerait", "semble sûr"], a: 0, why: "<b>semblerait</b>." },
    { fase: "dominio", c: ["b2at-cond", "b2at-limiter"], k: "listen", say: "Il semblerait que la situation s'améliore, du moins dans une certaine mesure.", acc: ["Il semblerait que la situation s'améliore, du moins dans une certaine mesure."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Il semblerait que la situation s'améliore, du moins dans une certaine mesure.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

E["b12-insister"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Insister et mettre en valeur : surtout, d'autant plus que, non seulement",
  objetivo: {
    que: "Vas a reforzar un argumento: surtout, même, d'autant plus que, j'insiste sur le fait que, bel et bien.",
    corto: "Il faut agir, d'autant plus que la situation empire.",
    podras: ["Destacar con surtout, notamment, en particulier y même (incluso).", "Añadir una razón más fuerte con d'autant plus que + indicativo.", "Insistir con j'insiste sur le fait que, il faut souligner que, bel et bien, non seulement… mais encore."],
    iconos: ["ic2/rayo", "ic2/microfono", "ic2/estrella"],
    previos: ["La mise en relief (B1.1, lección 9), los conectores para añadir (B1.1, lección 49) y atenuar (lección 40)."],
    capacidad: "Ahora tu argumento más fuerte se nota."
  },
  requiere: R("b1mr-cest", "b1ca-nonseul", "b2at-limiter"), recupera: ["b1ca-nonseul"],
  conceptos: {
    "b2ii-mots": { n: "surtout, notamment, en particulier; même (incluso); bel et bien (realmente)", b: "gr" },
    "b2ii-struct": { n: "d'autant plus que + indicativo (razón más fuerte); j'insiste sur le fait que (no «en»); il faut souligner que; non seulement… mais encore", b: "gr" }
  },
  video: {
    titulo: "Insistir", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/rayo", grande: "d'autant plus que", seg: [
        { es: "Hola. Ahora, lo contrario de atenuar." } ] },
      { v: "frase", filas: [
          { nota: "razón más fuerte", p: 1, partes: [["Il faut agir vite, d'autant plus que la situation empire.", "-", 1]] },
          { nota: "incluso", p: 2, partes: [["Même mon grand-père utilise un smartphone.", "-", 2]] },
          { nota: "insistir", p: 3, partes: [["J'insiste sur le fait que c'est gratuit.", "-", 3]] } ], seg: [
        { fr: "Il faut agir vite, d'autant plus que la situation empire.", p: 1 }, { fr: "Même mon grand-père utilise un smartphone.", p: 2 }, { fr: "J'insiste sur le fait que c'est gratuit.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Hay que insistir en la importancia de la educación.»", o: ["Il faut insister sur l'importance de l'éducation.", "Il faut insister en l'importance de l'éducation."], a: 0,
        bien: "¡Sí! Insister sur.", mal: "Insister sur, no en.",
        seg: [ { es: "Pausa. Insistir en." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["surtout", "même", "d'autant plus que", "j'insiste sur", "bel et bien"], seg: [
        { es: "Insister sur.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La campaña contra el plástico", img: "bg-universidad", yo: "camila",
    escena: "Camila defiende una propuesta ecológica.",
    pj: PJ,
    lineas: [
      ["camila", "Il faut réduire le plastique, d'autant plus que des solutions existent déjà.", "Hay que reducir el plástico, tanto más cuanto que ya existen soluciones."],
      ["hugo", "Tu as raison. Même les enfants le savent ! J'aime les langues, surtout le français, mais l'écologie aussi.", "Tienes razón. ¡Incluso los niños lo saben! Me gustan los idiomas, sobre todo el francés, pero también la ecología."],
      ["camila", "J'insiste sur le fait que c'est important. Il faut souligner que le projet est gratuit.", "Insisto en que es importante. Hay que subrayar que el proyecto es gratuito."],
      ["hugo", "C'est bel et bien la fin du plastique jetable. Surtout, n'oublie pas ta gourde demain !", "Es realmente el fin del plástico desechable. ¡Sobre todo, no olvides tu termo mañana!"]
    ],
    fijate: "Fíjate: d'autant plus que, même, surtout, j'insiste sur le fait que, il faut souligner que, bel et bien."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Reforzar un argumento",
      idea: "Destacar: surtout (sobre todo), notamment, en particulier. Même = incluso: Même les enfants l'ont compris. D'autant plus que + indicativo añade una razón todavía más fuerte: Je suis content, d'autant plus que c'est gratuit. Insistir: J'insiste sur le fait que + indicativo (insister sur, nunca «en»), il faut souligner que… Bel et bien = realmente, de verdad. Non seulement…, mais encore / mais aussi…",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Función"], [
        ["surtout · même · j'insiste sur · il faut souligner", "sobre todo · incluso · insisto en · hay que subrayar", "insistir"],
        ["plutôt · un peu · en partie · il semblerait", "más bien · un poco · en parte · parecería", "atenuar"],
        ["J'insiste sur le fait que c'est important. · sur", "Insisto en que es importante.", "insister sur"],
        ["Même les enfants le savent.", "Incluso los niños lo saben.", "même"],
        ["d'autant plus que · d'autant plus que c'est gratuit · une raison qui renforce", "tanto más cuanto que · una razón que refuerza", "razón más fuerte"],
        ["C'est bel et bien la fin. · bel et bien · bel", "Es realmente el fin.", "realmente"],
        ["J'aime les langues, surtout le français.", "Me gustan los idiomas, sobre todo el francés.", "surtout"],
        ["notamment · en particulier", "especialmente · en particular", "destacar"],
        ["non seulement…, mais encore…", "no solo…, sino también…", "sumar"],
        ["Surtout, n'oublie pas ton passeport.", "Sobre todo, no olvides tu pasaporte.", "consejo"]
      ]],
      ej: [["Il faut agir vite, d'autant plus que la situation empire.", "Hay que actuar rápido, tanto más cuanto que la situación empeora."], ["Même mon grand-père utilise un smartphone.", "Incluso mi abuelo usa un smartphone."], ["J'insiste sur le fait que c'est gratuit.", "Insisto en que es gratis."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["J'insiste en que c'est important.", "J'insiste sur le fait que c'est important.", "insister sur."], ["Il faut insister en l'importance…", "Il faut insister sur l'importance…", "sur."], ["Inclusivement les enfants…", "Même les enfants…", "Incluso = même."]] }
  ],
  ejemplos: [
    { sit: "«Insisto en que es importante.»", resp: "J'insiste sur le fait que c'est important.", pasos: ["insister sur le fait que."], porque: "Insistir." },
    { sit: "«Incluso los niños lo saben.»", resp: "Même les enfants le savent.", pasos: ["même delante del nombre."], porque: "Incluso." },
    { sit: "«Je suis content, d'autant plus que c'est gratuit.»", resp: "une raison qui renforce", pasos: ["d'autant plus que = razón más fuerte."], porque: "Refuerzo." }
  ],
  comprueba: [
    { q: "«Insistir en» se dice…", o: ["insister sur", "insister en"], a: 0, b: "gr", porque: "sur." },
    { q: "«Même» significa…", o: ["incluso", "mismo lugar"], a: 0, b: "gr", porque: "Même les enfants…" },
    { q: "«D'autant plus que» añade…", o: ["una razón más fuerte", "una concesión"], a: 0, b: "gr", porque: "Refuerzo." }
  ],
  practica: [
    { fase: "guiada", c: ["b2ii-mots", "b2ii-struct"], k: "sort", ask: "¿Sirve para insistir o para atenuar?", q: "Clasifica.", cats: ["Insistir", "Atenuar"], items: [["surtout", 0], ["même", 0], ["j'insiste sur", 0], ["il faut souligner", 0], ["plutôt", 1], ["un peu", 1], ["en partie", 1], ["il semblerait", 1]], pista: "Atenuar: matizar.", why: "Funciones." },
    { fase: "guiada", c: ["b2ii-struct"], k: "choice", ask: "«Insisto en que es importante.»", q: "«___»", o: ["J'insiste sur le fait que c'est important.", "J'insiste en que c'est important."], a: 0, pista: "sur.", why: "<b>insister sur</b>." },
    { fase: "guiada", c: ["b2ii-mots"], k: "choice", ask: "«Incluso los niños lo saben.»", q: "«___ les enfants le savent.»", o: ["Même", "Surtout"], a: 0, pista: "Incluso.", why: "<b>Même</b>." },
    { fase: "indep", c: ["b2ii-struct"], k: "choice", ask: "«Je suis content, d'autant plus que c'est gratuit.» D'autant plus que añade…", q: "«d'autant plus que»", o: ["une raison qui renforce", "une concession"], a: 0, why: "Refuerzo." },
    { fase: "indep", c: ["b2ii-mots"], k: "fill", ask: "«realmente» (… et bien)", q: "C'est ___ et bien la fin du projet.", acc: ["bel"], why: "<b>bel et bien</b>." },
    { fase: "indep", c: ["b2ii-mots"], k: "fill", ask: "«sobre todo»", q: "J'aime les langues, ___ le français.", acc: ["surtout"], why: "<b>surtout</b>." },
    { fase: "aplica", c: ["b2ii-mots", "b2ii-struct"], k: "match", ask: "Une cada expresión con su traducción.", q: "Francés → español", pairs: [["surtout", "sobre todo"], ["même", "incluso"], ["d'autant plus que", "tanto más cuanto que"], ["bel et bien", "realmente"]], why: "Expresiones." },
    { fase: "aplica", c: ["b2ii-struct"], k: "spot", ask: "Encuentra el error.", s: "Il faut insister [en] l'importance de l'éducation .", fix: "sur", why: "<b>sur</b>." },
    { fase: "aplica", c: ["b2ii-struct"], k: "spot", ask: "Encuentra el error.", s: "Le projet est utile , d'autant plus [qu'il soit] gratuit .", fix: "qu'il est", why: "<b>qu'il est</b>: indicativo." },
    { fase: "dominio", c: ["b2ii-mots"], k: "order", ask: "Ordena: «Sobre todo, no olvides tu pasaporte».", tokens: ["Surtout,", "n'oublie pas", "ton passeport."], why: "<b>Surtout, n'oublie pas ton passeport.</b>" },
    { fase: "dominio", c: ["b2ii-struct"], k: "choice", ask: "«No solo es barato, sino que también es ecológico.»", q: "«___ c'est bon marché, mais encore c'est écologique.»", o: ["Non seulement", "Non plus"], a: 0, why: "<b>Non seulement… mais encore</b>." },
    { fase: "dominio", c: ["b2ii-mots", "b2ii-struct"], k: "listen", say: "Il faut réduire le plastique, d'autant plus que des solutions existent déjà.", acc: ["Il faut réduire le plastique, d'autant plus que des solutions existent déjà."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Il faut réduire le plastique, d'autant plus que des solutions existent déjà.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

/* ================================ B1.2·11 · Trabajo, escuela y salud ================================ */
E["b12-monde-travail"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Le monde du travail : contrats, salaires et droits",
  objetivo: {
    que: "Vas a hablar del trabajo en Francia: contratos (CDI, CDD), salario (SMIC, prime), derechos (congés payés, grève) y fin del contrato.",
    corto: "Elle a décroché un CDI. · Les salariés font grève.",
    podras: ["Nombrar los contratos: un CDI, un CDD, un stage, l'intérim, le temps partiel.", "Hablar del salario y los derechos: le salaire brut / net, le SMIC, une prime, les congés payés, un syndicat, faire grève.", "Distinguir démissionner (irse uno) de être licencié (lo despiden)."],
    iconos: ["ic2/laptop", "ic2/moneda", "ic2/engranaje"],
    previos: ["Estudios y trabajo (B1.1, lección 16) y la carta de motivación (lección 37)."],
    capacidad: "Ahora entiendes una oferta de empleo francesa."
  },
  requiere: R("b1et-travail", "b2lm-plan"), recupera: ["b1et-travail"],
  conceptos: {
    "b2mt-contrat": { n: "contratos y salario: un CDI (indefinido), un CDD (temporal), un stage; le salaire brut / net, le SMIC, une prime; être embauché", b: "vo" },
    "b2mt-droits": { n: "derechos y salida: les congés payés, un syndicat, faire grève; démissionner (irse) ≠ être licencié (despedido); le chômage, la retraite", b: "vo" }
  },
  video: {
    titulo: "El trabajo en Francia", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/laptop", grande: "CDI · CDD", seg: [
        { es: "Hola. Las siglas del trabajo francés." } ] },
      { v: "dos",
        a: { tag: "démissionner", fr: "Il a démissionné.", es: "él se fue" },
        b: { tag: "être licencié", fr: "Il a été licencié.", es: "lo despidieron" },
        seg: [ { es: "Se fue por decisión propia:", p: 1 }, { fr: "Il a démissionné.", p: 1 }, { es: "Lo despidieron:", p: 2 }, { fr: "Il a été licencié.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Después de diez años en la empresa, renunció para cambiar de vida.»", o: ["Après dix ans dans l'entreprise, il a démissionné pour changer de vie.", "Après dix ans dans l'entreprise, il a licencié pour changer de vie."], a: 0,
        bien: "¡Sí! Renunciar: démissionner.", mal: "Licencier: despedir a otro.",
        seg: [ { es: "Pausa. Renunció." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["un CDI", "un CDD", "le SMIC", "les congés payés", "faire grève", "démissionner"], seg: [
        { es: "Uno démissionne; a uno lo licencian.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Las prácticas", img: "bg-cafe", yo: "camila",
    escena: "Camila cuenta noticias del trabajo de su amiga Laura.",
    pj: PJ,
    lineas: [
      ["camila", "Laura a enfin décroché un CDI ! Après six mois de stage, elle a été embauchée.", "¡Laura por fin consiguió un contrato indefinido! Después de seis meses de prácticas, la contrataron."],
      ["hugo", "Génial ! Elle gagne le SMIC ?", "¡Genial! ¿Gana el salario mínimo?"],
      ["camila", "Un peu plus, avec une prime. Et elle a cinq semaines de congés payés par an.", "Un poco más, con una bonificación. Y tiene cinco semanas de vacaciones pagadas al año."],
      ["hugo", "Chez moi, les employés font grève depuis lundi. Et mon cousin a démissionné pour créer son entreprise.", "Donde trabajo, los empleados hacen huelga desde el lunes. Y mi primo renunció para crear su empresa."]
    ],
    fijate: "Fíjate: un CDI, un stage, être embauchée, le SMIC, une prime, les congés payés, faire grève, démissionner."
  },
  ensena: [
    { id: "vo", tipo: "vocab", titulo: "Contratos, salario y derechos",
      intro: "Toca cada palabra.",
      palabras: [
        { fr: "un CDI", es: "un contrato indefinido" },
        { fr: "un CDD", es: "un contrato temporal" },
        { fr: "un stage", es: "unas prácticas" },
        { fr: "le salaire brut / net", es: "el salario bruto / neto" },
        { fr: "le SMIC", es: "el salario mínimo" },
        { fr: "une prime", es: "una prima / bonificación" },
        { fr: "un salarié", es: "un empleado" },
        { fr: "les congés payés", es: "las vacaciones pagadas" },
        { fr: "payés", es: "pagadas" },
        { fr: "un syndicat", es: "un sindicato" },
        { fr: "faire grève · grève", es: "hacer huelga · huelga" },
        { fr: "le chômage", es: "el paro, el desempleo" },
        { fr: "la retraite", es: "la jubilación" },
        { fr: "être embauché · signer un contrat · passer un entretien · décrocher un poste", es: "ser contratado · firmar un contrato · pasar una entrevista · conseguir un puesto" },
        { fr: "démissionner · être licencié · partir à la retraite · rompre le contrat", es: "renunciar · ser despedido · jubilarse · romper el contrato" },
        { fr: "Il a démissionné. · démissionné", es: "Renunció." },
        { fr: "Il a été licencié.", es: "Lo despidieron." },
        { fr: "Je cherche un CDI.", es: "Busco un contrato indefinido." }
      ],
      ej: [["Elle a enfin décroché un CDI.", "Por fin consiguió un contrato indefinido."], ["Les salariés font grève pour une augmentation.", "Los empleados hacen huelga por un aumento."], ["Il a démissionné pour créer son entreprise.", "Renunció para crear su empresa."]],
      clave: "Uno démissionne (se va); a uno lo licencient (lo despiden)." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Il a été démissionné.", "Il a été licencié. / Il a démissionné.", "Uno démissionne; a uno lo licencient."], ["Il a licencié pour changer de vie.", "Il a démissionné pour changer de vie.", "Renunciar: démissionner."], ["les vacances payées", "les congés payés", "Expresión fija."]] }
  ],
  ejemplos: [
    { sit: "un CDI", resp: "un contrato indefinido", pasos: ["Contrat à durée indéterminée."], porque: "Estabilidad." },
    { sit: "«Lo despidieron.»", resp: "Il a été licencié.", pasos: ["Pasiva: être licencié."], porque: "Despido." },
    { sit: "«Il gagne le SMIC.»", resp: "el salario mínimo", pasos: ["SMIC."], porque: "Salario." }
  ],
  comprueba: [
    { q: "Un CDI es…", o: ["un contrato indefinido", "un contrato temporal"], a: 0, b: "vo", porque: "Durée indéterminée." },
    { q: "«Renunció» se dice…", o: ["Il a démissionné.", "Il a été licencié."], a: 0, b: "vo", porque: "Se va él." },
    { q: "«Hacer huelga» se dice…", o: ["faire grève", "faire chômage"], a: 0, b: "vo", porque: "grève." }
  ],
  practica: [
    { fase: "guiada", c: ["b2mt-contrat", "b2mt-droits"], k: "sort", ask: "¿Entrar en un trabajo o salir de él?", q: "Clasifica.", cats: ["Entrar", "Salir"], items: [["être embauché", 0], ["signer un contrat", 0], ["passer un entretien", 0], ["décrocher un poste", 0], ["démissionner", 1], ["être licencié", 1], ["partir à la retraite", 1], ["rompre le contrat", 1]], pista: "Embaucher: contratar.", why: "Trabajo." },
    { fase: "guiada", c: ["b2mt-contrat"], k: "choice", es: true, ask: "Un CDI es…", q: "Elige.", o: ["un contrato indefinido", "un contrato temporal"], a: 0, pista: "Indéterminée.", why: "CDI." },
    { fase: "guiada", c: ["b2mt-droits"], k: "choice", ask: "«Lo despidieron.»", q: "«___»", o: ["Il a été licencié.", "Il a été démissionné."], a: 0, pista: "Lo despiden.", why: "<b>Il a été licencié.</b>" },
    { fase: "indep", c: ["b2mt-contrat"], k: "choice", es: true, ask: "«Il gagne le SMIC.» significa que gana…", q: "Elige.", o: ["el salario mínimo", "una prima"], a: 0, why: "SMIC." },
    { fase: "indep", c: ["b2mt-droits"], k: "fill", ask: "«huelga»", q: "Les employés font ___ depuis lundi.", acc: ["grève"], why: "<b>grève</b>." },
    { fase: "indep", c: ["b2mt-droits"], k: "fill", ask: "«vacaciones pagadas»", q: "J'ai cinq semaines de congés ___ par an.", acc: ["payés"], why: "<b>payés</b>." },
    { fase: "aplica", c: ["b2mt-contrat", "b2mt-droits"], k: "match", ask: "Une cada palabra con su traducción.", q: "Francés → español", pairs: [["un salarié", "un empleado"], ["une prime", "una prima / bonificación"], ["le chômage", "el paro, el desempleo"], ["la retraite", "la jubilación"], ["un syndicat", "un sindicato"]], why: "Vocabulario." },
    { fase: "aplica", c: ["b2mt-droits"], k: "spot", ask: "Encuentra el error.", s: "Après dix ans dans l'entreprise , il a [licencié] pour changer de vie .", fix: "démissionné", why: "<b>démissionné</b>." },
    { fase: "aplica", c: ["b2mt-droits"], k: "spot", ask: "Encuentra el error.", s: "J'ai cinq semaines de [vacances payées] par an .", fix: "congés payés", why: "<b>congés payés</b>." },
    { fase: "dominio", c: ["b2mt-contrat"], k: "order", ask: "Ordena: «Busco un contrato indefinido».", tokens: ["Je", "cherche", "un CDI."], why: "<b>Je cherche un CDI.</b>" },
    { fase: "dominio", c: ["b2mt-contrat"], k: "choice", ask: "«Un contrato temporal.»", q: "«___»", o: ["un CDD", "un CDI"], a: 0, why: "<b>un CDD</b>." },
    { fase: "dominio", c: ["b2mt-contrat", "b2mt-droits"], k: "listen", say: "Après six mois de stage, elle a été embauchée en CDI.", acc: ["Après six mois de stage, elle a été embauchée en CDI."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Après six mois de stage, elle a été embauchée en CDI.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Laura"], previo: [] }
};

E["b12-systeme-educatif"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Le système éducatif français",
  objetivo: {
    que: "Vas a entender el sistema escolar francés: maternelle, collège, lycée, bac, université, y los cursos contados al revés.",
    corto: "Mon fils entre en sixième. · Elle a eu son bac.",
    podras: ["Nombrar las etapas: la maternelle, le primaire, le collège, le lycée, le supérieur.", "Contar los cursos al revés: de la sixième a la troisième (collège), y seconde, première, terminale (lycée).", "Usar los títulos (le brevet, le bac, la licence, le master) y la vida escolar (un élève, une note sur 20, redoubler)."],
    iconos: ["ic2/birrete", "ic2/libros", "ic2/lapiz"],
    previos: ["Estudios y trabajo (B1.1, lección 16)."],
    capacidad: "Ahora entiendes a un francés cuando habla del colegio de sus hijos."
  },
  requiere: R("b1et-etudes"), recupera: ["b1et-etudes"],
  conceptos: {
    "b2ed-etapes": { n: "etapas: maternelle, élémentaire, collège (6e → 3e), lycée (seconde, première, terminale), supérieur; cursos al revés", b: "vo" },
    "b2ed-titres": { n: "títulos: le brevet, le bac, la licence, le master; un élève (colegio) ≠ un étudiant (universidad); une note sur 20, redoubler", b: "vo" }
  },
  video: {
    titulo: "El colegio en Francia", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/birrete", grande: "6e → terminale", seg: [
        { es: "Hola. En Francia, los cursos se cuentan al revés." } ] },
      { v: "frase", filas: [
          { nota: "11-15 años", p: 1, partes: [["le collège : sixième → troisième", "-", 1]] },
          { nota: "15-18 años", p: 2, partes: [["le lycée : seconde, première, terminale", "-", 2]] },
          { nota: "fin", p: 3, partes: [["le bac", "-", 3]] } ], seg: [
        { fr: "le collège : sixième, troisième", p: 1 }, { fr: "le lycée : seconde, première, terminale", p: 2 }, { fr: "le bac", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Mi hija tiene doce años, es alumna del collège.»", o: ["Ma fille a douze ans, elle est élève au collège.", "Ma fille a douze ans, elle est étudiante au collège."], a: 0,
        bien: "¡Sí! En el colegio: élève.", mal: "Étudiant: solo en la universidad.",
        seg: [ { es: "Pausa. Alumna." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["le collège", "le lycée", "la terminale", "le bac", "un élève", "redoubler"], seg: [
        { es: "Élève en el colegio; étudiant en la universidad.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Los hijos de la vecina", img: "bg-universidad", yo: "camila",
    escena: "Camila habla con Hugo de su vecina francesa.",
    pj: PJ,
    lineas: [
      ["camila", "Le fils de ma voisine entre en sixième en septembre. Il va au collège !", "¡El hijo de mi vecina empieza sexto en septiembre! Va al collège."],
      ["hugo", "Et sa fille ? Elle est en terminale ?", "¿Y su hija? ¿Está en el último año?"],
      ["camila", "Oui, elle a eu son bac avec mention très bien ! Elle a eu 15 sur 20 en maths : c'est une bonne note.", "¡Sí, aprobó el bachillerato con mención muy bien! Sacó 15 sobre 20 en matemáticas: es una buena nota."],
      ["hugo", "Moi, j'ai dû redoubler une année. Après le bac, beaucoup de jeunes s'inscrivent à l'université. Mon frère prépare un master de droit.", "Yo tuve que repetir un año. Después del bachillerato, muchos jóvenes se inscriben en la universidad. Mi hermano prepara una maestría en derecho."]
    ],
    fijate: "Fíjate: entre en sixième, le collège, en terminale, le bac, 15 sur 20, une note, redoubler, l'université, un master."
  },
  ensena: [
    { id: "vo", tipo: "vocab", titulo: "Etapas, cursos y títulos",
      intro: "Toca cada palabra.",
      palabras: [
        { fr: "la maternelle", es: "el preescolar (3-6 años)" },
        { fr: "le primaire · l'école élémentaire", es: "la primaria" },
        { fr: "le collège", es: "secundaria (11-15 años)" },
        { fr: "le lycée", es: "bachillerato (15-18 años)" },
        { fr: "la sixième · la cinquième · la quatrième · la troisième", es: "los cuatro cursos del collège (al revés)" },
        { fr: "la seconde · la première · la terminale", es: "los tres cursos del lycée" },
        { fr: "la terminale", es: "el último curso del lycée" },
        { fr: "le brevet", es: "el diploma del fin del collège" },
        { fr: "le bac", es: "el examen del fin del lycée" },
        { fr: "la licence · le master · le doctorat", es: "3 años · 5 años de universidad · el doctorado" },
        { fr: "un élève", es: "un alumno (colegio)" },
        { fr: "un étudiant", es: "un estudiante (universidad)" },
        { fr: "une note sur 20 · note", es: "una nota sobre 20" },
        { fr: "redoubler", es: "repetir curso" },
        { fr: "un élève de lycée", es: "un alumno de bachillerato" },
        { fr: "Il a eu son bac.", es: "Aprobó el bachillerato." }
      ],
      ej: [["Mon fils entre en sixième en septembre.", "Mi hijo empieza primero de secundaria en septiembre."], ["Elle a eu son bac avec mention très bien.", "Aprobó el bachillerato con mención muy bien."], ["Il prépare un master de droit.", "Prepara una maestría en derecho."]],
      clave: "En el colegio eres élève; en la universidad, étudiant. Los cursos del collège se cuentan al revés: la sixième es el primero." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["un étudiant de collège", "un élève de collège", "En el colegio: élève."], ["la sixième = el sexto curso de primaria", "la sixième = el primer curso del collège", "Al revés."], ["Il a passé son bac (= lo aprobó)", "Il a eu son bac.", "Passer = presentar; avoir = aprobar."]] }
  ],
  ejemplos: [
    { sit: "le collège", resp: "secundaria (11-15 años)", pasos: ["De la sixième a la troisième."], porque: "Etapa." },
    { sit: "Último curso del lycée", resp: "la terminale", pasos: ["Termina con el bac."], porque: "Curso." },
    { sit: "Un alumno de bachillerato", resp: "un élève de lycée", pasos: ["élève, no étudiant."], porque: "Colegio." }
  ],
  comprueba: [
    { q: "El collège es…", o: ["secundaria (11-15 años)", "la universidad"], a: 0, b: "vo", porque: "Etapa." },
    { q: "El último curso del lycée es…", o: ["la terminale", "la sixième"], a: 0, b: "vo", porque: "Al revés." },
    { q: "En el colegio se dice…", o: ["un élève", "un étudiant"], a: 0, b: "vo", porque: "élève." }
  ],
  practica: [
    { fase: "guiada", c: ["b2ed-etapes"], k: "sort", ask: "¿Collège o lycée?", q: "Clasifica.", cats: ["Collège", "Lycée"], items: [["la sixième", 0], ["la cinquième", 0], ["la quatrième", 0], ["la troisième", 0], ["la seconde", 1], ["la première", 1], ["la terminale", 1], ["le bac", 1]], pista: "El lycée termina con el bac.", why: "Cursos." },
    { fase: "guiada", c: ["b2ed-etapes"], k: "choice", es: true, ask: "Le collège es…", q: "Elige.", o: ["secundaria (11-15 años)", "la universidad"], a: 0, pista: "11-15.", why: "Collège." },
    { fase: "guiada", c: ["b2ed-etapes"], k: "choice", ask: "Último curso del lycée.", q: "«___»", o: ["la terminale", "la sixième"], a: 0, pista: "Al revés.", why: "<b>la terminale</b>." },
    { fase: "indep", c: ["b2ed-titres"], k: "choice", ask: "Un alumno de bachillerato.", q: "«___»", o: ["un élève de lycée", "un étudiant de lycée"], a: 0, why: "<b>élève</b>." },
    { fase: "indep", c: ["b2ed-titres"], k: "fill", ask: "«nota»", q: "Il a eu 15 sur 20 : c'est une bonne ___ .", acc: ["note"], why: "<b>note</b>." },
    { fase: "indep", c: ["b2ed-titres"], k: "fill", ask: "«repetir curso»", q: "Elle a raté son année, elle doit ___ .", acc: ["redoubler"], why: "<b>redoubler</b>." },
    { fase: "aplica", c: ["b2ed-titres"], k: "match", ask: "Une cada título con su etapa.", q: "Título → etapa", pairs: [["le brevet", "el diploma del fin del collège"], ["le bac", "el examen del fin del lycée"], ["la licence", "3 años de universidad"], ["le master", "5 años de universidad"]], why: "Títulos." },
    { fase: "aplica", c: ["b2ed-titres"], k: "spot", ask: "Encuentra el error.", s: "Ma fille a douze ans , elle est [étudiante] au collège .", fix: "élève", why: "<b>élève</b>." },
    { fase: "aplica", c: ["b2ed-titres"], k: "spot", ask: "Encuentra el error (= aprobó).", s: "Bravo , il [a passé] son bac avec mention !", fix: "a eu", why: "<b>a eu</b>." },
    { fase: "dominio", c: ["b2ed-titres"], k: "order", ask: "Ordena: «Aprobó el bachillerato».", tokens: ["Il", "a eu", "son bac."], why: "<b>Il a eu son bac.</b>" },
    { fase: "dominio", c: ["b2ed-etapes"], k: "choice", ask: "Primer curso del collège.", q: "«___»", o: ["la sixième", "la première"], a: 0, why: "<b>la sixième</b>." },
    { fase: "dominio", c: ["b2ed-etapes", "b2ed-titres"], k: "listen", say: "Après le bac, beaucoup de jeunes s'inscrivent à l'université.", acc: ["Après le bac, beaucoup de jeunes s'inscrivent à l'université."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Après le bac, beaucoup de jeunes s'inscrivent à l'université.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

E["b12-sante-publique"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Santé publique : prévention et système de soins",
  objetivo: {
    que: "Vas a hablar del sistema de salud francés (Sécu, carte Vitale, mutuelle) y de prevención (vacunación, cribado) y hábitos de riesgo.",
    corto: "Avez-vous votre carte Vitale ? · La prévention coûte moins cher que les soins.",
    podras: ["Nombrar el sistema: la Sécurité sociale, la carte Vitale, la mutuelle, le médecin traitant, être remboursé.", "Hablar de prevención: se faire vacciner, le dépistage, une campagne de sensibilisation.", "Nombrar problemas de salud pública: le tabagisme, la sédentarité, l'obésité, le stress, y decir aller aux urgences."],
    iconos: ["ic2/corazon", "ic2/medalla", "ic2/movil"],
    previos: ["En el médico y en la farmacia (B1.1, lección 56)."],
    capacidad: "Ahora te desenvuelves en el sistema de salud francés."
  },
  requiere: R("b1sa-symptomes", "b1sa-traitement"), recupera: ["b1sa-traitement"],
  conceptos: {
    "b2sa-systeme": { n: "sistema: la Sécu, la carte Vitale, la mutuelle (seguro complementario), le médecin traitant, être remboursé; aller aux urgences", b: "vo" },
    "b2sa-prev": { n: "prevención (la vaccination, le dépistage, se faire vacciner) y problemas (le tabagisme, la sédentarité, l'obésité, le stress)", b: "vo" }
  },
  video: {
    titulo: "La salud pública", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/corazon", grande: "la carte Vitale", seg: [
        { es: "Hola. Cómo funciona la salud en Francia." } ] },
      { v: "frase", filas: [
          { nota: "sistema", p: 1, partes: [["Grâce à la carte Vitale, on est remboursé plus vite.", "-", 1]] },
          { nota: "prevención", p: 2, partes: [["Le dépistage précoce sauve des vies.", "-", 2]] },
          { nota: "problema", p: 3, partes: [["La sédentarité est un problème de santé publique.", "-", 3]] } ], seg: [
        { fr: "Grâce à la carte Vitale, on est remboursé plus vite.", p: 1 }, { fr: "Le dépistage précoce sauve des vies.", p: 2 }, { fr: "La sédentarité est un problème de santé publique.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Esta noche tuve que ir a urgencias con mi hijo.»", o: ["Cette nuit, j'ai dû aller aux urgences avec mon fils.", "Cette nuit, j'ai dû aller à urgences avec mon fils."], a: 0,
        bien: "¡Sí! Les urgences: aux.", mal: "Les urgences va en plural: aux.",
        seg: [ { es: "Pausa. A urgencias." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["la Sécu", "la carte Vitale", "la mutuelle", "le dépistage", "le tabagisme", "aux urgences"], seg: [
        { es: "Prevenir es más barato que curar.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La noche en urgencias", img: "bg-cafe", yo: "camila",
    escena: "Hugo cuenta su noche en el hospital.",
    pj: PJ,
    lineas: [
      ["hugo", "Cette nuit, j'ai dû aller aux urgences avec mon petit frère. On m'a demandé : « Avez-vous votre carte Vitale ? »", "Anoche tuve que ir a urgencias con mi hermanito. Me preguntaron: «¿Tiene su tarjeta Vitale?»"],
      ["camila", "Et tu seras remboursé ?", "¿Y te van a reembolsar?"],
      ["hugo", "Oui, par la Sécu, et j'ai une bonne mutuelle. Je dois aussi choisir un médecin traitant.", "Sí, por la seguridad social, y tengo un buen seguro complementario. También tengo que elegir un médico de cabecera."],
      ["camila", "Moi, je vais me faire vacciner contre la grippe. Il faut se faire vacciner chaque année ! La prévention coûte moins cher que les soins.", "Yo me voy a vacunar contra la gripa. ¡Hay que vacunarse cada año! La prevención cuesta menos que los tratamientos."]
    ],
    fijate: "Fíjate: aux urgences, la carte Vitale, remboursé, la Sécu, une mutuelle, un médecin traitant, se faire vacciner, la prévention."
  },
  ensena: [
    { id: "vo", tipo: "vocab", titulo: "Sistema, prevención y problemas",
      intro: "Toca cada palabra.",
      palabras: [
        { fr: "la Sécurité sociale · la Sécu", es: "la seguridad social" },
        { fr: "la carte Vitale · Vitale", es: "la tarjeta del seguro médico" },
        { fr: "la mutuelle · une bonne mutuelle", es: "el seguro médico complementario" },
        { fr: "le médecin traitant", es: "el médico de cabecera" },
        { fr: "être remboursé", es: "recibir el reembolso" },
        { fr: "les urgences · aux urgences · aux", es: "urgencias (el servicio) · a urgencias" },
        { fr: "la vaccination · se faire vacciner", es: "la vacunación · vacunarse" },
        { fr: "le dépistage · le dépistage du cancer", es: "el cribado, la detección precoz" },
        { fr: "le sport régulier · une alimentation équilibrée", es: "el deporte regular · una alimentación equilibrada" },
        { fr: "le tabagisme", es: "el tabaquismo" },
        { fr: "l'obésité · le stress chronique", es: "la obesidad · el estrés crónico" },
        { fr: "la sédentarité", es: "el sedentarismo" },
        { fr: "Il faut se faire vacciner chaque année.", es: "Hay que vacunarse cada año." }
      ],
      ej: [["Grâce à la carte Vitale, on est remboursé plus vite.", "Gracias a la tarjeta Vitale, te reembolsan más rápido."], ["Le dépistage précoce sauve des vies.", "La detección precoz salva vidas."], ["La sédentarité est un problème de santé publique.", "El sedentarismo es un problema de salud pública."]],
      clave: "El servicio del hospital va en plural: les urgences (aller aux urgences). Une urgence = una emergencia." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["aller à urgences", "aller aux urgences", "El servicio va en plural."], ["le tabaquisme", "le tabagisme", "Con g."], ["la sédentarisme", "la sédentarité", "Termina en -ité."]] }
  ],
  ejemplos: [
    { sit: "«J'ai une bonne mutuelle.»", resp: "un seguro médico complementario", pasos: ["La mutuelle completa a la Sécu."], porque: "Sistema." },
    { sit: "«Fue a urgencias.»", resp: "Il est allé aux urgences.", pasos: ["aux urgences."], porque: "Plural." },
    { sit: "le dépistage du cancer", resp: "el cribado, la detección precoz", pasos: ["Prevención."], porque: "Prevención." }
  ],
  comprueba: [
    { q: "La mutuelle es…", o: ["un seguro médico complementario", "una farmacia"], a: 0, b: "vo", porque: "Sistema." },
    { q: "«A urgencias» se dice…", o: ["aux urgences", "à urgences"], a: 0, b: "vo", porque: "Plural." },
    { q: "«El tabaquismo» se dice…", o: ["le tabagisme", "le tabaquisme"], a: 0, b: "vo", porque: "Con g." }
  ],
  practica: [
    { fase: "guiada", c: ["b2sa-prev"], k: "sort", ask: "¿Prevención o problema de salud?", q: "Clasifica.", cats: ["Prevención", "Problema de salud"], items: [["la vaccination", 0], ["le dépistage", 0], ["le sport régulier", 0], ["une alimentation équilibrée", 0], ["le tabagisme", 1], ["l'obésité", 1], ["le stress chronique", 1], ["la sédentarité", 1]], pista: "Prevenir.", why: "Salud." },
    { fase: "guiada", c: ["b2sa-systeme"], k: "choice", es: true, ask: "«J'ai une bonne mutuelle.» Una mutuelle es…", q: "Elige.", o: ["un seguro médico complementario", "una farmacia"], a: 0, pista: "Sistema.", why: "Mutuelle." },
    { fase: "guiada", c: ["b2sa-systeme"], k: "choice", ask: "«Fue a urgencias.»", q: "«___»", o: ["Il est allé aux urgences.", "Il est allé à l'urgence."], a: 0, pista: "Plural.", why: "<b>aux urgences</b>." },
    { fase: "indep", c: ["b2sa-prev"], k: "choice", es: true, ask: "«le dépistage du cancer» es…", q: "Elige.", o: ["el cribado, la detección precoz", "el tratamiento"], a: 0, why: "Dépistage." },
    { fase: "indep", c: ["b2sa-systeme"], k: "fill", ask: "La tarjeta del seguro médico.", q: "Avez-vous votre carte ___ ?", acc: ["Vitale", "vitale"], why: "<b>Vitale</b>." },
    { fase: "indep", c: ["b2sa-prev"], k: "fill", ask: "«tabaquismo»", q: "Le ___ tue des milliers de personnes chaque année.", acc: ["tabagisme"], why: "<b>tabagisme</b>." },
    { fase: "aplica", c: ["b2sa-systeme", "b2sa-prev"], k: "match", ask: "Une cada palabra con su traducción.", q: "Francés → español", pairs: [["la Sécu", "la seguridad social"], ["le médecin traitant", "el médico de cabecera"], ["la sédentarité", "el sedentarismo"], ["se faire vacciner", "vacunarse"]], why: "Vocabulario." },
    { fase: "aplica", c: ["b2sa-systeme"], k: "spot", ask: "Encuentra el error.", s: "Cette nuit , j'ai dû aller [à] urgences avec mon fils .", fix: "aux", why: "<b>aux</b>." },
    { fase: "aplica", c: ["b2sa-prev"], k: "spot", ask: "Encuentra el error.", s: "La [sédentarisme] est un problème de santé publique .", fix: "sédentarité", why: "<b>sédentarité</b>." },
    { fase: "dominio", c: ["b2sa-prev"], k: "order", ask: "Ordena: «Hay que vacunarse cada año».", tokens: ["Il faut", "se faire vacciner", "chaque année."], why: "<b>Il faut se faire vacciner chaque année.</b>" },
    { fase: "dominio", c: ["b2sa-systeme"], k: "choice", ask: "«El médico de cabecera.»", q: "«___»", o: ["le médecin traitant", "le médecin de tête"], a: 0, why: "<b>le médecin traitant</b>." },
    { fase: "dominio", c: ["b2sa-systeme", "b2sa-prev"], k: "listen", say: "La prévention coûte moins cher que les soins.", acc: ["La prévention coûte moins cher que les soins."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>La prévention coûte moins cher que les soins.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

E["b12-technologie-ia"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Technologie et intelligence artificielle",
  objetivo: {
    que: "Vas a debatir sobre tecnología e IA: les données personnelles, un algorithme, la vie privée, la fracture numérique.",
    corto: "L'IA transforme de nombreux métiers. · Il faut protéger ses données personnelles.",
    podras: ["Nombrar lo digital: le numérique, un logiciel, une application, un écran, un mot de passe, télécharger.", "Hablar de IA: l'intelligence artificielle, un algorithme, automatiser.", "Hablar de riesgos y sociedad: la vie privée, les données personnelles, le piratage, la fracture numérique."],
    iconos: ["ic2/laptop", "ic2/movil", "ic2/candado"],
    previos: ["Los medios y las redes sociales (B1.1, lección 58)."],
    capacidad: "Ahora opinas sobre la IA en una redacción."
  },
  requiere: R("b1md-reseaux", "b1md-presse"), recupera: ["b1md-reseaux"],
  conceptos: {
    "b2ti-voc": { n: "lo digital y la IA: le numérique, un logiciel, une application, télécharger, un mot de passe; l'IA, un algorithme, automatiser", b: "vo" },
    "b2ti-risques": { n: "riesgos y sociedad: les données personnelles (≠ dates), la vie privée, le piratage, pirater, la fracture numérique", b: "vo" }
  },
  video: {
    titulo: "Tecnología e IA", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/laptop", grande: "l'IA", seg: [
        { es: "Hola. El vocabulario de la tecnología." } ] },
      { v: "frase", filas: [
          { nota: "IA", p: 1, partes: [["L'IA transforme de nombreux métiers.", "-", 1]] },
          { nota: "riesgo", p: 2, partes: [["Il faut protéger ses données personnelles.", "-", 2]] },
          { nota: "sociedad", p: 3, partes: [["La fracture numérique touche les personnes âgées.", "-", 3]] } ], seg: [
        { fr: "L'IA transforme de nombreux métiers.", p: 1 }, { fr: "Il faut protéger ses données personnelles.", p: 2 }, { fr: "La fracture numérique touche les personnes âgées.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Las redes sociales recopilan muchos datos personales.»", o: ["Les réseaux sociaux collectent beaucoup de données personnelles.", "Les réseaux sociaux collectent beaucoup de dates personnelles."], a: 0,
        bien: "¡Sí! Données = datos.", mal: "Date = fecha; données = datos.",
        seg: [ { es: "Pausa. Datos personales." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["les données personnelles", "un algorithme", "la vie privée", "la fracture numérique", "pirater"], seg: [
        { es: "Datos: données, nunca dates.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La cuenta pirateada", img: "bg-cafe", yo: "camila",
    escena: "Hugo le cuenta a Camila un problema con su cuenta.",
    pj: PJ,
    lineas: [
      ["hugo", "Mon compte a été piraté : j'ai perdu toutes mes photos !", "¡Me piratearon la cuenta: perdí todas mis fotos!"],
      ["camila", "Oh non ! Change ton mot de passe. Il faut protéger ses données personnelles.", "¡Ay, no! Cambia tu contraseña. Hay que proteger los datos personales."],
      ["hugo", "Oui. Et un algorithme décide quelles vidéos on voit… L'IA change notre façon de travailler.", "Sí. Y un algoritmo decide qué videos vemos… La IA cambia nuestra forma de trabajar."],
      ["camila", "C'est vrai. Mais ma grand-mère ne sait pas télécharger une application : c'est la fracture numérique.", "Es verdad. Pero mi abuela no sabe descargar una aplicación: es la brecha digital."]
    ],
    fijate: "Fíjate: piraté, un mot de passe, les données personnelles, un algorithme, l'IA, télécharger une application, la fracture numérique."
  },
  ensena: [
    { id: "vo", tipo: "vocab", titulo: "Lo digital, la IA y sus riesgos",
      intro: "Toca cada palabra.",
      palabras: [
        { fr: "le numérique", es: "lo digital" },
        { fr: "l'intelligence artificielle (l'IA)", es: "la inteligencia artificial (la IA)" },
        { fr: "un algorithme", es: "un algoritmo" },
        { fr: "un logiciel", es: "un programa informático" },
        { fr: "une application · télécharger une application", es: "una aplicación · descargar una aplicación" },
        { fr: "un écran", es: "una pantalla" },
        { fr: "un mot de passe", es: "una contraseña" },
        { fr: "les données personnelles · données", es: "los datos personales · los datos" },
        { fr: "la vie privée", es: "la privacidad" },
        { fr: "pirater · piraté · le piratage", es: "piratear · pirateado · la piratería" },
        { fr: "la fracture numérique", es: "la brecha digital" },
        { fr: "gagner du temps · accéder au savoir · automatiser les tâches · communiquer à distance", es: "ganar tiempo · acceder al saber · automatizar las tareas · comunicarse a distancia" },
        { fr: "la dépendance aux écrans · la surveillance · les fausses informations", es: "la dependencia de las pantallas · la vigilancia · las noticias falsas" },
        { fr: "L'IA change notre façon de travailler.", es: "La IA cambia nuestra forma de trabajar." }
      ],
      ej: [["L'IA transforme de nombreux métiers.", "La IA transforma muchos oficios."], ["Il faut protéger ses données personnelles.", "Hay que proteger los datos personales."], ["La fracture numérique touche surtout les personnes âgées.", "La brecha digital afecta sobre todo a las personas mayores."]],
      clave: "Date = fecha; données = datos." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["les dates personnelles", "les données personnelles", "Date = fecha; données = datos."], ["descharger une application", "télécharger une application", "Descargar = télécharger."], ["la brèche digitale", "la fracture numérique", "Expresión fija."]] }
  ],
  ejemplos: [
    { sit: "les données personnelles", resp: "los datos personales", pasos: ["données = datos."], porque: "Riesgo." },
    { sit: "la fracture numérique", resp: "la brecha digital", pasos: ["Desigualdad digital."], porque: "Sociedad." },
    { sit: "«Descargar una aplicación»", resp: "télécharger une application", pasos: ["télécharger."], porque: "Uso." }
  ],
  comprueba: [
    { q: "«Les données» son…", o: ["los datos", "las fechas"], a: 0, b: "vo", porque: "Falso amigo." },
    { q: "«La brecha digital» se dice…", o: ["la fracture numérique", "la brèche digitale"], a: 0, b: "vo", porque: "Expresión." },
    { q: "«Un logiciel» es…", o: ["un programa informático", "un lógico"], a: 0, b: "vo", porque: "Software." }
  ],
  practica: [
    { fase: "guiada", c: ["b2ti-voc", "b2ti-risques"], k: "sort", ask: "¿Ventaja o riesgo de la tecnología?", q: "Clasifica.", cats: ["Ventaja", "Riesgo"], items: [["gagner du temps", 0], ["accéder au savoir", 0], ["automatiser les tâches", 0], ["communiquer à distance", 0], ["le piratage", 1], ["la dépendance aux écrans", 1], ["la surveillance", 1], ["les fausses informations", 1]], pista: "¿Ayuda o amenaza?", why: "Debate." },
    { fase: "guiada", c: ["b2ti-risques"], k: "choice", es: true, ask: "«les données personnelles» son…", q: "Elige.", o: ["los datos personales", "las fechas personales"], a: 0, pista: "Falso amigo.", why: "Données." },
    { fase: "guiada", c: ["b2ti-risques"], k: "choice", es: true, ask: "«la fracture numérique» es…", q: "Elige.", o: ["la brecha digital", "una fractura de hueso"], a: 0, pista: "Sociedad.", why: "Brecha." },
    { fase: "indep", c: ["b2ti-voc"], k: "choice", ask: "«Descargar una aplicación.»", q: "«___»", o: ["télécharger une application", "décharger une application"], a: 0, why: "<b>télécharger</b>." },
    { fase: "indep", c: ["b2ti-risques"], k: "fill", ask: "«pirateado»", q: "Son compte a été ___ : il a perdu toutes ses photos.", acc: ["piraté"], why: "<b>piraté</b>." },
    { fase: "indep", c: ["b2ti-voc"], k: "fill", ask: "«algoritmo»", q: "Un ___ décide quelles vidéos on voit.", acc: ["algorithme"], why: "<b>algorithme</b>." },
    { fase: "aplica", c: ["b2ti-voc", "b2ti-risques"], k: "match", ask: "Une cada palabra con su traducción.", q: "Francés → español", pairs: [["un logiciel", "un programa informático"], ["la vie privée", "la privacidad"], ["un écran", "una pantalla"], ["un mot de passe", "una contraseña"]], why: "Vocabulario." },
    { fase: "aplica", c: ["b2ti-risques"], k: "spot", ask: "Encuentra el error.", s: "Les réseaux sociaux collectent beaucoup de [dates] personnelles .", fix: "données", why: "<b>données</b>." },
    { fase: "aplica", c: ["b2ti-voc"], k: "spot", ask: "Encuentra el error.", s: "Change ton [mot de pas] tous les trois mois .", fix: "mot de passe", why: "<b>mot de passe</b>." },
    { fase: "dominio", c: ["b2ti-voc"], k: "order", ask: "Ordena: «La IA cambia nuestra forma de trabajar».", tokens: ["L'IA change", "notre façon", "de travailler."], why: "<b>L'IA change notre façon de travailler.</b>" },
    { fase: "dominio", c: ["b2ti-risques"], k: "choice", ask: "«la privacidad»", q: "«___»", o: ["la vie privée", "la privatité"], a: 0, why: "<b>la vie privée</b>." },
    { fase: "dominio", c: ["b2ti-voc", "b2ti-risques"], k: "listen", say: "L'intelligence artificielle pose de nouvelles questions sur la vie privée.", acc: ["L'intelligence artificielle pose de nouvelles questions sur la vie privée."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>L'intelligence artificielle pose de nouvelles questions sur la vie privée.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

/* ================================ B1.2·12 · Instituciones y economía ================================ */
E["b12-institutions"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Les institutions françaises et la vie politique",
  objetivo: {
    que: "Vas a entender cómo funciona la política francesa: el presidente, el Premier ministre, los députés, las elecciones.",
    corto: "Le président est élu pour cinq ans. · Les députés ont voté la loi.",
    podras: ["Nombrar a las personas: le président de la République, le Premier ministre, un ministre, un député, un sénateur, le maire.", "Nombrar las instituciones: l'Élysée, Matignon, l'Assemblée nationale, le Sénat, la mairie.", "Hablar de elecciones y leyes: voter, le premier / second tour, l'abstention, un projet de loi."],
    iconos: ["ic2/bandera", "ic2/torre-eiffel", "ic2/pergamino"],
    previos: ["La prensa (B1.1, lección 58) y el condicional de la prensa (lección 17)."],
    capacidad: "Ahora entiendes un titular político francés."
  },
  requiere: R("b1md-presse", "b2cj-present"), recupera: ["b1md-presse"],
  conceptos: {
    "b2it-pers": { n: "personas e instituciones: le président (l'Élysée), le Premier ministre (Matignon), un député (l'Assemblée nationale), un sénateur (le Sénat), le maire (la mairie)", b: "vo" },
    "b2it-vote": { n: "elecciones y leyes: voter, un électeur, le premier / second tour, l'abstention, un projet de loi, voter une loi, un référendum", b: "vo" }
  },
  video: {
    titulo: "La política francesa", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/bandera", grande: "l'Élysée · Matignon", seg: [
        { es: "Hola. Dos palacios, dos jefes." } ] },
      { v: "dos",
        a: { tag: "el presidente", fr: "Le président vit à l'Élysée.", es: "elegido por cinco años" },
        b: { tag: "el primer ministro", fr: "Le Premier ministre travaille à Matignon.", es: "dirige el gobierno" },
        seg: [ { es: "El presidente:", p: 1 }, { fr: "Le président vit à l'Élysée.", p: 1 }, { es: "El primer ministro:", p: 2 }, { fr: "Le Premier ministre travaille à Matignon.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«El presidente de la República vive en el palacio del Elíseo.»", o: ["Le président de la République habite au palais de l'Élysée.", "Le président de la République habite au palais de Matignon."], a: 0,
        bien: "¡Sí! Matignon es del Premier ministre.", mal: "El presidente: l'Élysée.",
        seg: [ { es: "Pausa. ¿Dónde vive el presidente?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["l'Élysée", "Matignon", "un député", "le maire", "l'abstention", "le second tour"], seg: [
        { es: "Diputados en la Asamblea; senadores en el Senado.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Las elecciones", img: "bg-paris", yo: "camila",
    escena: "Hugo le explica a Camila las elecciones francesas.",
    pj: PJ,
    lineas: [
      ["camila", "Les citoyens votent dimanche prochain ? Pour quoi ?", "¿Los ciudadanos votan el próximo domingo? ¿Para qué?"],
      ["hugo", "Ce sont les élections municipales : elles permettent d'élire le maire et le conseil municipal.", "Son las elecciones municipales: permiten elegir al alcalde y al concejo municipal."],
      ["camila", "Et le président ? — Il est élu pour cinq ans. Il vit à l'Élysée, et le Premier ministre à Matignon.", "¿Y el presidente? — Lo eligen por cinco años. Vive en el Elíseo, y el primer ministro en Matignon."],
      ["hugo", "Exactement. Les députés siègent à l'Assemblée nationale. Le second tour a lieu dans deux semaines. J'espère que l'abstention sera faible !", "Exacto. Los diputados se sientan en la Asamblea Nacional. La segunda vuelta es en dos semanas. ¡Espero que la abstención sea baja!"]
    ],
    fijate: "Fíjate: voter, les élections municipales, le maire, le président, l'Élysée, Matignon, les députés, l'Assemblée nationale, le second tour, l'abstention."
  },
  ensena: [
    { id: "vo", tipo: "vocab", titulo: "Personas, instituciones y elecciones",
      intro: "Toca cada palabra.",
      palabras: [
        { fr: "le président de la République", es: "el presidente de la República" },
        { fr: "l'Élysée", es: "la residencia del presidente" },
        { fr: "le Premier ministre · Matignon", es: "el primer ministro · su sede" },
        { fr: "un député · députés · l'Assemblée nationale", es: "un diputado · diputados · la Asamblea Nacional" },
        { fr: "un sénateur · le Sénat", es: "un senador · el Senado" },
        { fr: "le maire · la mairie", es: "el alcalde · la alcaldía" },
        { fr: "le gouvernement · un ministre", es: "el gobierno · un ministro" },
        { fr: "voter · un électeur · un bureau de vote", es: "votar · un elector · un puesto de votación" },
        { fr: "le premier / second tour · tour", es: "la primera / segunda vuelta · vuelta" },
        { fr: "l'abstention", es: "la abstención (la gente que no vota)" },
        { fr: "un projet de loi · voter une loi · un référendum", es: "un proyecto de ley · votar una ley · un referendo" },
        { fr: "Les citoyens votent dimanche prochain.", es: "Los ciudadanos votan el próximo domingo." }
      ],
      ej: [["Le président est élu pour cinq ans.", "El presidente es elegido por cinco años."], ["Les députés ont voté la loi.", "Los diputados votaron la ley."], ["L'abstention a été très élevée.", "La abstención fue muy alta."]],
      clave: "El presidente vive en el Elíseo; el primer ministro, en Matignon." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Le Premier ministre vit à l'Élysée.", "Le président vit à l'Élysée ; le Premier ministre à Matignon.", "Dos palacios distintos."], ["la deuxième vuelta", "le second tour", "Vuelta = tour."], ["l'alcalde", "le maire", "Alcalde = maire."]] }
  ],
  ejemplos: [
    { sit: "Residencia del presidente", resp: "l'Élysée", pasos: ["Palacio del Elíseo."], porque: "Presidencia." },
    { sit: "Una ciudad la dirige…", resp: "le maire", pasos: ["En la mairie."], porque: "Municipio." },
    { sit: "«L'abstention a augmenté.»", resp: "la abstención (la gente que no vota)", pasos: ["Abstention."], porque: "Elecciones." }
  ],
  comprueba: [
    { q: "El presidente vive en…", o: ["l'Élysée", "Matignon"], a: 0, b: "vo", porque: "Presidencia." },
    { q: "Los diputados se sientan en…", o: ["l'Assemblée nationale", "la mairie"], a: 0, b: "vo", porque: "Parlamento." },
    { q: "«La segunda vuelta» se dice…", o: ["le second tour", "la deuxième vuelta"], a: 0, b: "vo", porque: "tour." }
  ],
  practica: [
    { fase: "guiada", c: ["b2it-pers"], k: "sort", ask: "¿Persona o institución?", q: "Clasifica.", cats: ["Persona", "Institución"], items: [["le maire", 0], ["un député", 0], ["un sénateur", 0], ["le Premier ministre", 0], ["le Sénat", 1], ["la mairie", 1], ["l'Assemblée nationale", 1], ["le gouvernement", 1]], pista: "¿Alguien o un lugar?", why: "Política." },
    { fase: "guiada", c: ["b2it-pers"], k: "choice", ask: "Residencia del presidente.", q: "«___»", o: ["l'Élysée", "Matignon"], a: 0, pista: "Presidencia.", why: "<b>l'Élysée</b>." },
    { fase: "guiada", c: ["b2it-pers"], k: "choice", ask: "Una ciudad la dirige…", q: "«___»", o: ["le maire", "le député"], a: 0, pista: "La mairie.", why: "<b>le maire</b>." },
    { fase: "indep", c: ["b2it-vote"], k: "choice", es: true, ask: "«L'abstention a augmenté.» L'abstention es…", q: "Elige.", o: ["la abstención (la gente que no vota)", "la votación"], a: 0, why: "Abstención." },
    { fase: "indep", c: ["b2it-vote"], k: "fill", ask: "«vuelta»", q: "Le second ___ de l'élection a lieu dans deux semaines.", acc: ["tour"], why: "<b>tour</b>." },
    { fase: "indep", c: ["b2it-pers"], k: "fill", ask: "«diputados»", q: "Les ___ siègent à l'Assemblée nationale.", acc: ["députés"], why: "<b>députés</b>." },
    { fase: "aplica", c: ["b2it-pers"], k: "match", ask: "Une cada institución con su papel.", q: "Institución → papel", pairs: [["l'Élysée", "la residencia del presidente"], ["Matignon", "la sede del Premier ministre"], ["l'Assemblée nationale", "los diputados"], ["la mairie", "la alcaldía"]], why: "Instituciones." },
    { fase: "aplica", c: ["b2it-pers"], k: "spot", ask: "Encuentra el error.", s: "Le président de la République habite au palais de [Matignon] .", fix: "l'Élysée", why: "<b>l'Élysée</b>." },
    { fase: "aplica", c: ["b2it-vote"], k: "spot", ask: "Encuentra el error.", s: "Les députés ont [votée] la loi hier soir .", fix: "voté", why: "<b>voté</b>." },
    { fase: "dominio", c: ["b2it-vote"], k: "order", ask: "Ordena: «Los ciudadanos votan el próximo domingo».", tokens: ["Les citoyens", "votent", "dimanche prochain."], why: "<b>Les citoyens votent dimanche prochain.</b>" },
    { fase: "dominio", c: ["b2it-vote"], k: "choice", ask: "«un proyecto de ley»", q: "«___»", o: ["un projet de loi", "un projet de droit"], a: 0, why: "<b>un projet de loi</b>." },
    { fase: "dominio", c: ["b2it-pers", "b2it-vote"], k: "listen", say: "Les élections municipales permettent d'élire le maire et le conseil municipal.", acc: ["Les élections municipales permettent d'élire le maire et le conseil municipal."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Les élections municipales permettent d'élire le maire et le conseil municipal.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Élysée", "Matignon"], previo: [] }
};

E["b12-justice-droits"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Justice, droits et citoyenneté",
  objetivo: {
    que: "Vas a hablar de justicia y derechos: un procès, le juge, l'avocat, une amende, porter plainte, la liberté d'expression.",
    corto: "Il a été condamné à une amende. · Le procès aura lieu en juin.",
    podras: ["Nombrar a las personas: le juge, l'avocat, l'accusé, la victime, le témoin, le jury.", "Describir el procedimiento: porter plainte, un procès (juicio), condamner, acquitter, faire appel.", "Nombrar sanciones y derechos: une amende, la prison, le sursis; la liberté d'expression, le droit de vote."],
    iconos: ["ic2/pergamino", "ic2/candado", "ic2/bandera"],
    previos: ["Los sucesos (B1.1, lección 65) y la voz pasiva (lección 6)."],
    capacidad: "Ahora entiendes una noticia judicial."
  },
  requiere: R("b1fd-voc", "b2vp-forme"), recupera: ["b1fd-voc"],
  conceptos: {
    "b2jd-pers": { n: "personas y procedimiento: le juge, l'avocat, l'accusé, le témoin, le jury; porter plainte, un procès (= juicio), condamner, acquitter, faire appel", b: "vo" },
    "b2jd-peine": { n: "sanciones y derechos: une amende (multa), la prison, le sursis; la liberté d'expression, le droit de vote, un citoyen", b: "vo" }
  },
  video: {
    titulo: "La justicia", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/pergamino", grande: "un procès", seg: [
        { es: "Hola. En justicia, un procès es un juicio." } ] },
      { v: "dos",
        a: { tag: "condenado", fr: "Il a été condamné.", es: "lo condenaron" },
        b: { tag: "absuelto", fr: "Il a été acquitté.", es: "lo absolvieron" },
        seg: [ { es: "Condenado:", p: 1 }, { fr: "Il a été condamné.", p: 1 }, { es: "Absuelto:", p: 2 }, { fr: "Il a été acquitté.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«El conductor pagó una multa de 135 euros.»", o: ["Le conducteur a payé une amende de 135 euros.", "Le conducteur a payé une almende de 135 euros."], a: 0,
        bien: "¡Sí! Une amende.", mal: "Multa: une amende.",
        seg: [ { es: "Pausa. Una multa." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["un procès", "le juge", "l'avocat", "une amende", "porter plainte", "acquitté"], seg: [
        { es: "Procès = juicio.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El juicio del vecino", img: "bg-cafe", yo: "camila",
    escena: "Hugo le cuenta a Camila el caso de un vecino.",
    pj: PJ,
    lineas: [
      ["hugo", "Mon voisin a reçu une amende de 500 euros. Et le procès de l'autre affaire commence lundi.", "Mi vecino recibió una multa de 500 euros. Y el juicio del otro caso empieza el lunes."],
      ["camila", "Il a un avocat ?", "¿Tiene abogado?"],
      ["hugo", "Oui : « Mon avocat me défendra au tribunal », il dit. Il peut être condamné à deux ans de prison, ou acquitté.", "Sí: «Mi abogado me defenderá en el tribunal», dice. Lo pueden condenar a dos años de cárcel, o absolver."],
      ["camila", "Et s'il est condamné, il va faire appel. Tout citoyen a le droit de porter plainte s'il est victime d'un délit.", "Y si lo condenan, va a apelar. Todo ciudadano tiene derecho a denunciar si es víctima de un delito."]
    ],
    fijate: "Fíjate: une amende, le procès, un avocat, le tribunal, condamné, acquitté, faire appel, porter plainte, un citoyen, la victime."
  },
  ensena: [
    { id: "vo", tipo: "vocab", titulo: "Personas, procedimiento y sanciones",
      intro: "Toca cada palabra.",
      palabras: [
        { fr: "le juge · l'avocat · avocat", es: "el juez · el abogado" },
        { fr: "l'accusé · la victime · le témoin · le jury", es: "el acusado · la víctima · el testigo · el jurado" },
        { fr: "un tribunal", es: "un tribunal" },
        { fr: "un procès", es: "un juicio" },
        { fr: "porter plainte", es: "denunciar, poner una denuncia" },
        { fr: "condamner · Il a été condamné.", es: "condenar · Lo condenaron." },
        { fr: "acquitter · Il a été acquitté. · acquitté", es: "absolver · Lo absolvieron." },
        { fr: "faire appel · appel", es: "apelar, recurrir" },
        { fr: "une amende", es: "una multa" },
        { fr: "la prison · le sursis · des travaux d'intérêt général", es: "la cárcel · la pena suspendida · trabajos comunitarios" },
        { fr: "la peine", es: "la pena" },
        { fr: "la liberté d'expression · le droit de vote · un citoyen", es: "la libertad de expresión · el derecho al voto · un ciudadano" },
        { fr: "Il a été condamné à deux ans de prison.", es: "Lo condenaron a dos años de cárcel." }
      ],
      ej: [["Il a été condamné à une amende de 500 euros.", "Fue condenado a una multa de 500 euros."], ["Le procès aura lieu en juin.", "El juicio tendrá lugar en junio."], ["La liberté d'expression est un droit fondamental.", "La libertad de expresión es un derecho fundamental."]],
      clave: "En justicia, un procès es un juicio, no un proceso cualquiera." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["un procès = un proceso cualquiera", "un procès = un juicio", "En justicia, procès = juicio."], ["une almende", "une amende", "Sin l."], ["mettre une plainte", "porter plainte", "Expresión fija."]] }
  ],
  ejemplos: [
    { sit: "«Il a reçu une amende.»", resp: "una multa", pasos: ["amende = multa."], porque: "Sanción." },
    { sit: "«Le procès commence lundi.»", resp: "un juicio", pasos: ["procès = juicio."], porque: "Procedimiento." },
    { sit: "«Lo absolvieron.»", resp: "Il a été acquitté.", pasos: ["acquitter."], porque: "Sentencia." }
  ],
  comprueba: [
    { q: "«Une amende» es…", o: ["una multa", "una almendra"], a: 0, b: "vo", porque: "Sanción." },
    { q: "«Un procès» es…", o: ["un juicio", "un trámite"], a: 0, b: "vo", porque: "Justicia." },
    { q: "«Denunciar» se dice…", o: ["porter plainte", "mettre plainte"], a: 0, b: "vo", porque: "Expresión." }
  ],
  practica: [
    { fase: "guiada", c: ["b2jd-pers", "b2jd-peine"], k: "sort", ask: "¿Persona o sanción?", q: "Clasifica.", cats: ["Persona", "Sanción"], items: [["le juge", 0], ["l'avocat", 0], ["le témoin", 0], ["le jury", 0], ["une amende", 1], ["la prison", 1], ["le sursis", 1], ["des travaux d'intérêt général", 1]], pista: "¿Alguien o una pena?", why: "Justicia." },
    { fase: "guiada", c: ["b2jd-peine"], k: "choice", es: true, ask: "«Il a reçu une amende.» Une amende es…", q: "Elige.", o: ["una multa", "una almendra"], a: 0, pista: "Sanción.", why: "Multa." },
    { fase: "guiada", c: ["b2jd-pers"], k: "choice", es: true, ask: "«Le procès commence lundi.» Un procès es…", q: "Elige.", o: ["un juicio", "un trámite"], a: 0, pista: "Justicia.", why: "Juicio." },
    { fase: "indep", c: ["b2jd-pers"], k: "choice", ask: "«Lo absolvieron.»", q: "«___»", o: ["Il a été acquitté.", "Il a été condamné."], a: 0, why: "<b>acquitté</b>." },
    { fase: "indep", c: ["b2jd-pers"], k: "fill", ask: "«recurrir» (faire …)", q: "L'accusé va faire ___ de la décision.", acc: ["appel"], why: "<b>appel</b>." },
    { fase: "indep", c: ["b2jd-pers"], k: "fill", ask: "«abogado»", q: "Mon ___ me défendra au tribunal.", acc: ["avocat"], why: "<b>avocat</b>." },
    { fase: "aplica", c: ["b2jd-pers", "b2jd-peine"], k: "match", ask: "Une cada palabra con su traducción.", q: "Francés → español", pairs: [["le juge", "el juez"], ["l'accusé", "el acusado"], ["la peine", "la pena"], ["le sursis", "la pena suspendida"]], why: "Vocabulario." },
    { fase: "aplica", c: ["b2jd-peine"], k: "spot", ask: "Encuentra el error.", s: "Le conducteur a payé une [almende] de 135 euros .", fix: "amende", why: "<b>amende</b>." },
    { fase: "aplica", c: ["b2jd-pers"], k: "spot", ask: "Encuentra el error.", s: "La victime a [mis plainte] contre son voisin .", fix: "porté plainte", why: "<b>porté plainte</b>." },
    { fase: "dominio", c: ["b2jd-peine"], k: "order", ask: "Ordena: «Lo condenaron a dos años de cárcel».", tokens: ["Il a été condamné", "à deux ans", "de prison."], why: "<b>Il a été condamné à deux ans de prison.</b>" },
    { fase: "dominio", c: ["b2jd-peine"], k: "choice", ask: "«la libertad de expresión»", q: "«___»", o: ["la liberté d'expression", "la libertade d'expression"], a: 0, why: "<b>la liberté d'expression</b>." },
    { fase: "dominio", c: ["b2jd-pers", "b2jd-peine"], k: "listen", say: "Tout citoyen a le droit de porter plainte s'il est victime d'un délit.", acc: ["Tout citoyen a le droit de porter plainte s'il est victime d'un délit."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Tout citoyen a le droit de porter plainte s'il est victime d'un délit.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

E["b12-economie-quotidien"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "L'économie au quotidien : budget, banque, impôts",
  objetivo: {
    que: "Vas a hablar de dinero en la vida diaria: le budget, un virement, faire des économies, un prêt, les impôts, le pouvoir d'achat.",
    corto: "J'ai fait un virement. · Nous faisons des économies.",
    podras: ["Usar el vocabulario del banco: un compte, un virement, un prélèvement, un découvert.", "Hablar del presupuesto: les dépenses, les revenus, faire des économies, boucler ses fins de mois.", "Hablar de crédito y economía: emprunter, un prêt, rembourser, les impôts, l'inflation, le pouvoir d'achat."],
    iconos: ["ic2/moneda", "ic2/cofre", "ic2/bolsa"],
    previos: ["Consumir (B1.1, lección 60) y buscar alojamiento (B1.1, lección 55)."],
    capacidad: "Ahora manejas tu banco francés."
  },
  requiere: R("b1cs-payer", "b1lg-argent"), recupera: ["b1lg-argent"],
  conceptos: {
    "b2ec-banque": { n: "banco y crédito: un compte, un virement (transferencia), un prélèvement, un découvert, emprunter, un prêt, rembourser", b: "vo" },
    "b2ec-budget": { n: "presupuesto y economía: les dépenses, les revenus, faire des économies (= ahorrar), les impôts, l'inflation, le pouvoir d'achat", b: "vo" }
  },
  video: {
    titulo: "El dinero de cada día", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/moneda", grande: "faire des économies", seg: [
        { es: "Hola. Hacer economías, en francés, es ahorrar." } ] },
      { v: "frase", filas: [
          { nota: "banco", p: 1, partes: [["J'ai fait un virement à mon propriétaire.", "-", 1]] },
          { nota: "ahorro", p: 2, partes: [["Nous faisons des économies.", "-", 2]] },
          { nota: "economía", p: 3, partes: [["Avec l'inflation, le pouvoir d'achat baisse.", "-", 3]] } ], seg: [
        { fr: "J'ai fait un virement à mon propriétaire.", p: 1 }, { fr: "Nous faisons des économies.", p: 2 }, { fr: "Avec l'inflation, le pouvoir d'achat baisse.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Cada mes guardo cien euros: ahorro.»", o: ["Chaque mois, je mets cent euros de côté : je fais des économies.", "Chaque mois, je mets cent euros de côté : je fais l'économie."], a: 0,
        bien: "¡Sí! Faire des économies.", mal: "Ahorrar: faire des économies, en plural.",
        seg: [ { es: "Pausa. Ahorrar." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["un virement", "faire des économies", "un prêt", "les impôts", "le pouvoir d'achat", "à découvert"], seg: [
        { es: "Économies = ahorros.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Fin de mes", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo hablan de su presupuesto.",
    pj: PJ,
    lineas: [
      ["camila", "J'ai fait un virement à mon propriétaire pour le loyer. Maintenant, je suis à découvert !", "Hice una transferencia a mi casero para el arriendo. ¡Ahora estoy en descubierto!"],
      ["hugo", "Avec la hausse des prix, beaucoup de familles ont du mal à boucler leurs fins de mois.", "Con la subida de los precios, muchas familias tienen dificultades para llegar a fin de mes."],
      ["camila", "Oui. Avec l'inflation, le pouvoir d'achat baisse. Mes parents ont emprunté de l'argent à la banque pour la maison.", "Sí. Con la inflación, el poder adquisitivo baja. Mis papás pidieron dinero prestado al banco para la casa."],
      ["hugo", "Moi, je fais des économies : chaque mois, je mets cent euros de côté. Et il faut payer ses impôts avant juin !", "Yo ahorro: cada mes guardo cien euros. ¡Y hay que pagar los impuestos antes de junio!"]
    ],
    fijate: "Fíjate: un virement, à découvert, boucler ses fins de mois, l'inflation, le pouvoir d'achat, emprunté, faire des économies, les impôts."
  },
  ensena: [
    { id: "vo", tipo: "vocab", titulo: "Banco, presupuesto y economía",
      intro: "Toca cada palabra.",
      palabras: [
        { fr: "un compte bancaire · ouvrir un compte", es: "una cuenta bancaria · abrir una cuenta" },
        { fr: "un virement", es: "una transferencia" },
        { fr: "un prélèvement", es: "un cargo domiciliado" },
        { fr: "un découvert · être à découvert · découvert", es: "un descubierto · estar en descubierto" },
        { fr: "les dépenses · les revenus", es: "los gastos · los ingresos" },
        { fr: "faire des économies · économies", es: "ahorrar · los ahorros" },
        { fr: "boucler ses fins de mois", es: "llegar a fin de mes" },
        { fr: "emprunter · emprunté · un prêt · rembourser", es: "pedir prestado · pedido prestado · un préstamo · devolver" },
        { fr: "les impôts · la TVA", es: "los impuestos · el IVA" },
        { fr: "l'inflation · le pouvoir d'achat", es: "la inflación · el poder adquisitivo" },
        { fr: "le salaire · un remboursement reçu · une prime · les allocations", es: "el salario · un reembolso recibido · una bonificación · los subsidios" },
        { fr: "le loyer · les courses · les factures", es: "el arriendo · el mercado · las facturas" },
        { fr: "Il faut payer ses impôts avant juin.", es: "Hay que pagar los impuestos antes de junio." }
      ],
      ej: [["J'ai fait un virement à mon propriétaire.", "Hice una transferencia a mi casero."], ["Avec l'inflation, le pouvoir d'achat baisse.", "Con la inflación, el poder adquisitivo baja."], ["Nous faisons des économies pour acheter une maison.", "Ahorramos para comprar una casa."]],
      clave: "Faire des économies = ahorrar; les économies = los ahorros." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["faire des économies = hacer economía", "faire des économies = ahorrar", "économies = ahorros."], ["je fais des économie", "je fais des économies", "En plural."], ["J'ai prêté de l'argent à la banque (= me prestaron).", "J'ai emprunté de l'argent à la banque.", "Emprunter: pedir prestado."]] }
  ],
  ejemplos: [
    { sit: "«J'ai fait un virement.»", resp: "una transferencia", pasos: ["virement."], porque: "Banco." },
    { sit: "«Je fais des économies.»", resp: "ahorrar", pasos: ["économies = ahorros."], porque: "Presupuesto." },
    { sit: "«Le pouvoir d'achat augmente.»", resp: "el poder adquisitivo", pasos: ["pouvoir d'achat."], porque: "Economía." }
  ],
  comprueba: [
    { q: "«Un virement» es…", o: ["una transferencia", "un viraje"], a: 0, b: "vo", porque: "Banco." },
    { q: "«Faire des économies» significa…", o: ["ahorrar", "estudiar economía"], a: 0, b: "vo", porque: "Falso amigo." },
    { q: "«Los impuestos» se dice…", o: ["les impôts", "les imposts"], a: 0, b: "vo", porque: "Con acento." }
  ],
  practica: [
    { fase: "guiada", c: ["b2ec-budget"], k: "sort", ask: "¿El dinero entra o sale?", q: "Clasifica.", cats: ["Entra", "Sale"], items: [["le salaire", 0], ["un remboursement reçu", 0], ["une prime", 0], ["les allocations", 0], ["le loyer", 1], ["les impôts", 1], ["les courses", 1], ["les factures", 1]], pista: "Ingresos y gastos.", why: "Presupuesto." },
    { fase: "guiada", c: ["b2ec-banque"], k: "choice", es: true, ask: "«J'ai fait un virement.» Un virement es…", q: "Elige.", o: ["una transferencia", "un viraje"], a: 0, pista: "Banco.", why: "Transferencia." },
    { fase: "guiada", c: ["b2ec-budget"], k: "choice", es: true, ask: "«Je fais des économies.» significa…", q: "Elige.", o: ["ahorrar", "estudiar economía"], a: 0, pista: "Falso amigo.", why: "Ahorrar." },
    { fase: "indep", c: ["b2ec-budget"], k: "choice", es: true, ask: "«Le pouvoir d'achat augmente.» Le pouvoir d'achat es…", q: "Elige.", o: ["el poder adquisitivo", "el poder político"], a: 0, why: "Economía." },
    { fase: "indep", c: ["b2ec-banque"], k: "fill", ask: "«en descubierto»", q: "Je suis à ___ : mon compte est négatif.", acc: ["découvert"], why: "<b>découvert</b>." },
    { fase: "indep", c: ["b2ec-banque"], k: "fill", ask: "«pedido prestado»", q: "Nous avons ___ de l'argent à la banque pour la maison.", acc: ["emprunté"], why: "<b>emprunté</b>." },
    { fase: "aplica", c: ["b2ec-banque", "b2ec-budget"], k: "match", ask: "Une cada palabra con su traducción.", q: "Francés → español", pairs: [["les impôts", "los impuestos"], ["un prêt", "un préstamo"], ["les dépenses", "los gastos"], ["un prélèvement", "un cargo domiciliado"]], why: "Vocabulario." },
    { fase: "aplica", c: ["b2ec-budget"], k: "spot", ask: "Encuentra el error.", s: "Chaque mois , je mets cent euros de côté : je fais des [économie] .", fix: "économies", why: "<b>économies</b>." },
    { fase: "aplica", c: ["b2ec-banque"], k: "spot", ask: "Encuentra el error (= me prestaron).", s: "J'ai [prêté] de l'argent à la banque pour acheter une voiture .", fix: "emprunté", why: "<b>emprunté</b>." },
    { fase: "dominio", c: ["b2ec-budget"], k: "order", ask: "Ordena: «Hay que pagar los impuestos antes de junio».", tokens: ["Il faut payer", "ses impôts", "avant juin."], why: "<b>Il faut payer ses impôts avant juin.</b>" },
    { fase: "dominio", c: ["b2ec-budget"], k: "choice", ask: "«llegar a fin de mes»", q: "«___»", o: ["boucler ses fins de mois", "arriver à fin de mois"], a: 0, why: "<b>boucler ses fins de mois</b>." },
    { fase: "dominio", c: ["b2ec-banque", "b2ec-budget"], k: "listen", say: "Avec la hausse des prix, beaucoup de familles ont du mal à boucler leurs fins de mois.", acc: ["Avec la hausse des prix, beaucoup de familles ont du mal à boucler leurs fins de mois."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Avec la hausse des prix, beaucoup de familles ont du mal à boucler leurs fins de mois.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

E["b12-ville-urbanisme"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "La ville de demain : urbanisme et mobilité",
  objetivo: {
    que: "Vas a hablar de la ciudad que cambia: zones piétonnes, pistes cyclables, transports en commun, embouteillages, banlieue.",
    corto: "La mairie a créé de nouvelles pistes cyclables.",
    podras: ["Nombrar los espacios: un quartier, le centre-ville, la banlieue, une zone piétonne, un espace vert.", "Hablar de movilidad: les transports en commun, une piste cyclable, la mobilité douce, le covoiturage, les embouteillages.", "Hablar de vivienda y política urbana: un HLM, la hausse des loyers, rénover, végétaliser."],
    iconos: ["ic2/torre-eiffel", "ic2/flor", "ic2/mundo"],
    previos: ["El medio ambiente (B1.1, lección 57) y la comparación matizada (lección 15)."],
    capacidad: "Ahora comparas tu ciudad con una ciudad francesa."
  },
  requiere: R("b1en-probleme", "b1en-solution", "b2cn-evol"), recupera: ["b1en-solution"],
  conceptos: {
    "b2vu-espaces": { n: "espacios y vivienda: un quartier, le centre-ville, la banlieue (periferia), une zone piétonne, un espace vert, un HLM, la hausse des loyers", b: "vo" },
    "b2vu-mobilite": { n: "movilidad: les transports en commun, une piste cyclable, la mobilité douce, le covoiturage, les embouteillages; végétaliser, rénover", b: "vo" }
  },
  video: {
    titulo: "La ciudad del mañana", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/torre-eiffel", grande: "une piste cyclable", seg: [
        { es: "Hola. Las ciudades se transforman." } ] },
      { v: "frase", filas: [
          { nota: "mejora", p: 1, partes: [["La mairie a créé de nouvelles pistes cyclables.", "-", 1]] },
          { nota: "mejora", p: 2, partes: [["Le centre-ville est devenu piéton.", "-", 2]] },
          { nota: "problema", p: 3, partes: [["Les embouteillages font perdre du temps.", "-", 3]] } ], seg: [
        { fr: "La mairie a créé de nouvelles pistes cyclables.", p: 1 }, { fr: "Le centre-ville est devenu piéton.", p: 2 }, { fr: "Les embouteillages font perdre du temps.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Por la mañana siempre hay trancones en el periférico.»", o: ["Le matin, il y a toujours des embouteillages sur le périphérique.", "Le matin, il y a toujours des bouteilles sur le périphérique."], a: 0,
        bien: "¡Sí! Les embouteillages.", mal: "Une bouteille es una botella.",
        seg: [ { es: "Pausa. Trancones." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["une zone piétonne", "une piste cyclable", "les transports en commun", "les embouteillages", "la banlieue"], seg: [
        { es: "Banlieue: la periferia, rica o pobre.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El nuevo barrio", img: "bg-paris", yo: "camila",
    escena: "Hugo le muestra a Camila su ciudad.",
    pj: PJ,
    lineas: [
      ["hugo", "J'habite dans un quartier calme, en banlieue. Je prends les transports en commun pour aller au travail.", "Vivo en un barrio tranquilo, en la periferia. Tomo el transporte público para ir al trabajo."],
      ["camila", "Et le centre ?", "¿Y el centro?"],
      ["hugo", "La rue principale est maintenant piétonne : les voitures sont interdites. La mairie a créé de nouvelles pistes cyclables.", "La calle principal ahora es peatonal: los carros están prohibidos. La alcaldía creó nuevas ciclorrutas."],
      ["camila", "Super ! Chez moi, il y a des embouteillages tous les jours. Ici, la ville a transformé l'ancienne gare en un grand espace vert.", "¡Súper! Donde vivo, hay trancones todos los días. Aquí la ciudad transformó la antigua estación en un gran espacio verde."]
    ],
    fijate: "Fíjate: un quartier, en banlieue, les transports en commun, piétonne, des pistes cyclables, des embouteillages, un espace vert."
  },
  ensena: [
    { id: "vo", tipo: "vocab", titulo: "Espacios, movilidad y vivienda",
      intro: "Toca cada palabra.",
      palabras: [
        { fr: "un quartier · le centre-ville", es: "un barrio · el centro" },
        { fr: "la banlieue · en banlieue", es: "la periferia de la ciudad · en la periferia" },
        { fr: "une zone piétonne · piétonne", es: "una zona peatonal · peatonal" },
        { fr: "un espace vert · un parc rénové", es: "un espacio verde · un parque renovado" },
        { fr: "les transports en commun · commun", es: "el transporte público" },
        { fr: "une piste cyclable · des pistes cyclables", es: "una ciclorruta, un carril bici" },
        { fr: "la mobilité douce · le covoiturage", es: "la movilidad sostenible · el carro compartido" },
        { fr: "les embouteillages", es: "los trancones, los atascos" },
        { fr: "la pollution sonore · la hausse des loyers · le manque d'espaces verts", es: "la contaminación sonora · la subida de los arriendos · la falta de espacios verdes" },
        { fr: "un nouveau tramway", es: "un nuevo tranvía" },
        { fr: "un HLM", es: "una vivienda social" },
        { fr: "végétaliser · rénover · aménager", es: "llenar de vegetación · renovar · acondicionar" },
        { fr: "J'habite dans un quartier calme.", es: "Vivo en un barrio tranquilo." }
      ],
      ej: [["La mairie a créé de nouvelles pistes cyclables.", "La alcaldía creó nuevas ciclorrutas."], ["Le centre-ville est devenu piéton.", "El centro se volvió peatonal."], ["Les embouteillages font perdre beaucoup de temps.", "Los trancones hacen perder mucho tiempo."]],
      clave: "La banlieue es la periferia: puede ser rica o pobre." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["la banlieue = barrio pobre (siempre)", "la banlieue = la periferia, los alrededores", "Puede ser rica o pobre."], ["des bouteilles sur la route", "des embouteillages", "Une bouteille es una botella."], ["les transports publics en commun", "les transports en commun", "Expresión fija."]] }
  ],
  ejemplos: [
    { sit: "«Il habite en banlieue.»", resp: "la periferia de la ciudad", pasos: ["banlieue."], porque: "Espacio." },
    { sit: "«Il y a des embouteillages.»", resp: "los trancones, los atascos", pasos: ["embouteillages."], porque: "Movilidad." },
    { sit: "une piste cyclable", resp: "una ciclorruta, un carril bici", pasos: ["Mobilité douce."], porque: "Movilidad." }
  ],
  comprueba: [
    { q: "«La banlieue» es…", o: ["la periferia de la ciudad", "siempre un barrio pobre"], a: 0, b: "vo", porque: "Falso amigo." },
    { q: "«Les embouteillages» son…", o: ["los trancones, los atascos", "las botellas"], a: 0, b: "vo", porque: "Tráfico." },
    { q: "«El transporte público» se dice…", o: ["les transports en commun", "les transports communs"], a: 0, b: "vo", porque: "Expresión." }
  ],
  practica: [
    { fase: "guiada", c: ["b2vu-espaces", "b2vu-mobilite"], k: "sort", ask: "¿Problema o mejora?", q: "Clasifica.", cats: ["Problema", "Mejora"], items: [["les embouteillages", 0], ["la pollution sonore", 0], ["la hausse des loyers", 0], ["le manque d'espaces verts", 0], ["une zone piétonne", 1], ["un nouveau tramway", 1], ["un parc rénové", 1], ["des pistes cyclables", 1]], pista: "¿Ayuda a vivir mejor?", why: "Ciudad." },
    { fase: "guiada", c: ["b2vu-espaces"], k: "choice", es: true, ask: "«Il habite en banlieue.» La banlieue es…", q: "Elige.", o: ["la periferia de la ciudad", "el centro histórico"], a: 0, pista: "Alrededores.", why: "Periferia." },
    { fase: "guiada", c: ["b2vu-mobilite"], k: "choice", es: true, ask: "«Il y a des embouteillages.» Son…", q: "Elige.", o: ["los trancones, los atascos", "las botellas"], a: 0, pista: "Tráfico.", why: "Trancones." },
    { fase: "indep", c: ["b2vu-mobilite"], k: "choice", es: true, ask: "«une piste cyclable» es…", q: "Elige.", o: ["una ciclorruta, un carril bici", "una pista de baile"], a: 0, why: "Ciclorruta." },
    { fase: "indep", c: ["b2vu-espaces"], k: "fill", ask: "«peatonal»", q: "La rue principale est maintenant ___ : les voitures sont interdites.", acc: ["piétonne"], why: "<b>piétonne</b>." },
    { fase: "indep", c: ["b2vu-mobilite"], k: "fill", ask: "«transporte público» (transports en …)", q: "Je prends les transports en ___ pour aller au travail.", acc: ["commun"], why: "<b>commun</b>." },
    { fase: "aplica", c: ["b2vu-espaces", "b2vu-mobilite"], k: "match", ask: "Une cada palabra con su traducción.", q: "Francés → español", pairs: [["un HLM", "una vivienda social"], ["végétaliser", "llenar de vegetación"], ["un quartier", "un barrio"], ["la mobilité douce", "la movilidad sostenible"]], why: "Vocabulario." },
    { fase: "aplica", c: ["b2vu-mobilite"], k: "spot", ask: "Encuentra el error.", s: "Le matin , il y a toujours des [bouteilles] sur le périphérique .", fix: "embouteillages", why: "<b>embouteillages</b>." },
    { fase: "aplica", c: ["b2vu-espaces"], k: "spot", ask: "Encuentra el error.", s: "Le centre-ville a maintenant une grande zone [piétone] .", fix: "piétonne", why: "<b>piétonne</b>." },
    { fase: "dominio", c: ["b2vu-espaces"], k: "order", ask: "Ordena: «Vivo en un barrio tranquilo».", tokens: ["J'habite", "dans un quartier", "calme."], why: "<b>J'habite dans un quartier calme.</b>" },
    { fase: "dominio", c: ["b2vu-mobilite"], k: "choice", ask: "«el carro compartido»", q: "«___»", o: ["le covoiturage", "la voiture partagée de nuit"], a: 0, why: "<b>le covoiturage</b>." },
    { fase: "dominio", c: ["b2vu-espaces", "b2vu-mobilite"], k: "listen", say: "La ville a transformé l'ancienne gare en un grand espace vert.", acc: ["La ville a transformé l'ancienne gare en un grand espace vert."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>La ville a transformé l'ancienne gare en un grand espace vert.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

/* ================================ B1.2·13 · Convivencia y compromiso ================================ */
E["b12-diversite"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Immigration, diversité et intégration",
  objetivo: {
    que: "Vas a hablar de migración e integración: un immigré, un réfugié, un titre de séjour, s'intégrer, les préjugés, le vivre-ensemble.",
    corto: "Apprendre la langue aide à s'intégrer. · La diversité est une richesse.",
    podras: ["Nombrar a las personas: un immigré, un étranger, un réfugié, un expatrié, un demandeur d'asile.", "Nombrar los trámites: un titre de séjour, un visa, la naturalisation, la préfecture.", "Hablar de integración y de problemas: s'intégrer, le vivre-ensemble; le racisme, la discrimination, les préjugés."],
    iconos: ["ic2/mundo", "ic2/amigos", "ic2/globo"],
    previos: ["Las relaciones (B1.1, lección 61) y los trámites del alojamiento (B1.1, lección 55)."],
    capacidad: "Ahora cuentas tu experiencia de extranjero en Francia."
  },
  requiere: R("b1rl-verbes", "b1lg-demarches"), recupera: ["b1lg-demarches"],
  conceptos: {
    "b2dv-pers": { n: "personas y trámites: un immigré, un étranger, un réfugié, un expatrié, un demandeur d'asile; un titre de séjour (permiso de residencia), la préfecture, la naturalisation", b: "vo" },
    "b2dv-integr": { n: "integración y problemas: s'intégrer, le vivre-ensemble, l'échange culturel; le racisme, la discrimination, les préjugés, l'exclusion", b: "vo" }
  },
  video: {
    titulo: "Diversidad e integración", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/mundo", grande: "le vivre-ensemble", seg: [
        { es: "Hola. Francia es un país de inmigración." } ] },
      { v: "frase", filas: [
          { nota: "trámite", p: 1, partes: [["Il a obtenu la nationalité française.", "-", 1]] },
          { nota: "integración", p: 2, partes: [["Apprendre la langue aide à s'intégrer.", "-", 2]] },
          { nota: "valor", p: 3, partes: [["La diversité culturelle est une richesse.", "-", 3]] } ], seg: [
        { fr: "Il a obtenu la nationalité française.", p: 1 }, { fr: "Apprendre la langue aide à s'intégrer.", p: 2 }, { fr: "La diversité culturelle est une richesse.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Para trabajar en Francia hace falta un permiso de residencia.»", o: ["Pour travailler en France, il faut un titre de séjour.", "Pour travailler en France, il faut un titule de séjour."], a: 0,
        bien: "¡Sí! Un titre de séjour.", mal: "Permiso de residencia: un titre de séjour.",
        seg: [ { es: "Pausa. Un permiso de residencia." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["un titre de séjour", "la préfecture", "s'intégrer", "les préjugés", "le vivre-ensemble"], seg: [
        { es: "Titre de séjour no es un título universitario.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La prefectura", img: "bg-paris", yo: "camila",
    escena: "Camila cuenta sus trámites de extranjera.",
    pj: PJ,
    lineas: [
      ["camila", "Pour renouveler mon visa, je vais à la préfecture demain. Il me faut un titre de séjour pour travailler.", "Para renovar mi visa, voy mañana a la prefectura. Necesito un permiso de residencia para trabajar."],
      ["hugo", "Bon courage ! Mon ami Karim a obtenu la nationalité française l'année dernière, après sa naturalisation.", "¡Ánimo! Mi amigo Karim obtuvo la nacionalidad francesa el año pasado, después de su naturalización."],
      ["camila", "Apprendre la langue du pays est la première étape pour bien s'intégrer. Mais il faut lutter contre les préjugés.", "Aprender el idioma del país es el primer paso para integrarse bien. Pero hay que luchar contra los prejuicios."],
      ["hugo", "Tu as raison. Le vivre-ensemble est une valeur importante. La diversité est une richesse.", "Tienes razón. La convivencia es un valor importante. La diversidad es una riqueza."]
    ],
    fijate: "Fíjate: la préfecture, un titre de séjour, la nationalité, la naturalisation, s'intégrer, les préjugés, le vivre-ensemble, la diversité."
  },
  ensena: [
    { id: "vo", tipo: "vocab", titulo: "Personas, trámites e integración",
      intro: "Toca cada palabra.",
      palabras: [
        { fr: "un immigré · un étranger", es: "un inmigrante · un extranjero" },
        { fr: "un réfugié · un expatrié", es: "un refugiado · un expatriado" },
        { fr: "le demandeur d'asile", es: "el solicitante de asilo" },
        { fr: "un titre de séjour · titre", es: "un permiso de residencia" },
        { fr: "la préfecture", es: "la oficina de extranjería (prefectura)" },
        { fr: "la naturalisation · la nationalité", es: "la nacionalización · la nacionalidad" },
        { fr: "s'intégrer", es: "integrarse" },
        { fr: "le vivre-ensemble · vivre", es: "la convivencia" },
        { fr: "l'ouverture d'esprit · le respect · l'apprentissage de la langue · l'échange culturel", es: "la apertura mental · el respeto · el aprendizaje del idioma · el intercambio cultural" },
        { fr: "le racisme · la discrimination · les préjugés · l'exclusion", es: "el racismo · la discriminación · los prejuicios · la exclusión" },
        { fr: "La diversité est une richesse.", es: "La diversidad es una riqueza." }
      ],
      ej: [["Il a obtenu la nationalité française l'année dernière.", "Obtuvo la nacionalidad francesa el año pasado."], ["Apprendre la langue aide à s'intégrer.", "Aprender el idioma ayuda a integrarse."], ["La diversité culturelle est une richesse.", "La diversidad cultural es una riqueza."]],
      clave: "Un titre de séjour es un permiso de residencia, no un título universitario." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["un titre de séjour = un título universitario", "un titre de séjour = un permiso de residencia", "Trámite."], ["un titule de séjour", "un titre de séjour", "titre."], ["les prejugés", "les préjugés", "Con é."]] }
  ],
  ejemplos: [
    { sit: "«Il a son titre de séjour.»", resp: "un permiso de residencia", pasos: ["titre de séjour."], porque: "Trámite." },
    { sit: "«Il faut lutter contre les préjugés.»", resp: "los prejuicios", pasos: ["préjugés."], porque: "Problema." },
    { sit: "Integrarse", resp: "s'intégrer", pasos: ["Pronominal."], porque: "Integración." }
  ],
  comprueba: [
    { q: "«Un titre de séjour» es…", o: ["un permiso de residencia", "un título universitario"], a: 0, b: "vo", porque: "Falso amigo." },
    { q: "«Integrarse» se dice…", o: ["s'intégrer", "intégrer"], a: 0, b: "vo", porque: "Pronominal." },
    { q: "«La convivencia» se dice…", o: ["le vivre-ensemble", "la convivence"], a: 0, b: "vo", porque: "Expresión." }
  ],
  practica: [
    { fase: "guiada", c: ["b2dv-integr"], k: "sort", ask: "¿Favorece o dificulta la integración?", q: "Clasifica.", cats: ["Favorece", "Dificulta"], items: [["l'ouverture d'esprit", 0], ["le respect", 0], ["l'apprentissage de la langue", 0], ["l'échange culturel", 0], ["le racisme", 1], ["la discrimination", 1], ["les préjugés", 1], ["l'exclusion", 1]], pista: "¿Une o separa?", why: "Integración." },
    { fase: "guiada", c: ["b2dv-pers"], k: "choice", es: true, ask: "«Il a son titre de séjour.» Un titre de séjour es…", q: "Elige.", o: ["un permiso de residencia", "un título universitario"], a: 0, pista: "Trámite.", why: "Permiso." },
    { fase: "guiada", c: ["b2dv-integr"], k: "choice", es: true, ask: "«Il faut lutter contre les préjugés.» Les préjugés son…", q: "Elige.", o: ["los prejuicios", "los perjuicios"], a: 0, pista: "Ideas previas.", why: "Prejuicios." },
    { fase: "indep", c: ["b2dv-integr"], k: "choice", ask: "Integrarse.", q: "«___»", o: ["s'intégrer", "intégrer"], a: 0, why: "<b>s'intégrer</b>." },
    { fase: "indep", c: ["b2dv-pers"], k: "fill", ask: "La oficina de los trámites de extranjería.", q: "Pour renouveler mon visa, je vais à la ___ .", acc: ["préfecture"], why: "<b>préfecture</b>." },
    { fase: "indep", c: ["b2dv-integr"], k: "fill", ask: "«convivencia» (… -ensemble)", q: "Le ___ -ensemble est une valeur importante.", acc: ["vivre"], why: "<b>vivre-ensemble</b>." },
    { fase: "aplica", c: ["b2dv-pers"], k: "match", ask: "Une cada palabra con su traducción.", q: "Francés → español", pairs: [["un réfugié", "un refugiado"], ["la naturalisation", "la nacionalización"], ["un expatrié", "un expatriado"], ["le demandeur d'asile", "el solicitante de asilo"]], why: "Vocabulario." },
    { fase: "aplica", c: ["b2dv-pers"], k: "spot", ask: "Encuentra el error.", s: "Pour travailler en France , il faut un [titule] de séjour .", fix: "titre", why: "<b>titre</b>." },
    { fase: "aplica", c: ["b2dv-integr"], k: "spot", ask: "Encuentra el error.", s: "Il faut lutter contre les [prejugés] .", fix: "préjugés", why: "<b>préjugés</b>." },
    { fase: "dominio", c: ["b2dv-integr"], k: "order", ask: "Ordena: «La diversidad es una riqueza».", tokens: ["La diversité", "est", "une richesse."], why: "<b>La diversité est une richesse.</b>" },
    { fase: "dominio", c: ["b2dv-pers"], k: "choice", ask: "«Obtuvo la nacionalidad francesa.»", q: "«___»", o: ["Il a obtenu la nationalité française.", "Il a obtenu la nation française."], a: 0, why: "<b>la nationalité</b>." },
    { fase: "dominio", c: ["b2dv-pers", "b2dv-integr"], k: "listen", say: "Apprendre la langue du pays est la première étape pour bien s'intégrer.", acc: ["Apprendre la langue du pays est la première étape pour bien s'intégrer."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Apprendre la langue du pays est la première étape pour bien s'intégrer.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Karim"], previo: [] }
};

E["b12-egalite"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "L'égalité femmes-hommes",
  objetivo: {
    que: "Vas a debatir sobre la igualdad entre mujeres y hombres: l'écart de salaire, la parité, le partage des tâches ménagères, le plafond de verre.",
    corto: "Elle a brisé le plafond de verre. · L'égalité salariale est un droit.",
    podras: ["Hablar del trabajo: l'écart de salaire, l'égalité salariale, la parité, le plafond de verre.", "Hablar del hogar: le partage des tâches ménagères, la charge mentale, le congé parental / de paternité.", "Hablar de la sociedad: les stéréotypes, le sexisme, le harcèlement; y feminizar oficios: une autrice, une ingénieure."],
    iconos: ["ic2/amigos", "ic2/corazon", "ic2/medalla"],
    previos: ["Las relaciones (B1.1, lección 61) y el mundo del trabajo (lección 42)."],
    capacidad: "Ahora participas en un debate sobre igualdad."
  },
  requiere: R("b1rl-famille", "b2mt-contrat"), recupera: ["b2mt-contrat"],
  conceptos: {
    "b2eg-travail": { n: "trabajo: l'écart de salaire (brecha), l'égalité salariale, la parité, le plafond de verre (techo de cristal); une ingénieure, une autrice", b: "vo" },
    "b2eg-maison": { n: "hogar y sociedad: les tâches ménagères, la charge mentale, le congé de paternité / parental; les stéréotypes, le sexisme, le harcèlement", b: "vo" }
  },
  video: {
    titulo: "La igualdad", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/amigos", grande: "le plafond de verre", seg: [
        { es: "Hola. El vocabulario de la igualdad." } ] },
      { v: "frase", filas: [
          { nota: "trabajo", p: 1, partes: [["Il existe encore un écart de salaire.", "-", 1]] },
          { nota: "hogar", p: 2, partes: [["Le partage des tâches ménagères progresse lentement.", "-", 2]] },
          { nota: "avance", p: 3, partes: [["Elle a brisé le plafond de verre.", "-", 3]] } ], seg: [
        { fr: "Il existe encore un écart de salaire.", p: 1 }, { fr: "Le partage des tâches ménagères progresse lentement.", p: 2 }, { fr: "Elle a brisé le plafond de verre.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«El techo de cristal»", o: ["le plafond de verre", "le toit de verre"], a: 0,
        bien: "¡Sí! Expresión fija.", mal: "Techo de cristal: plafond de verre.",
        seg: [ { es: "Pausa. El techo de cristal." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["l'écart de salaire", "la parité", "le plafond de verre", "les tâches ménagères", "la charge mentale"], seg: [
        { es: "Plafond, no toit.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El debate en clase", img: "bg-universidad", yo: "camila",
    escena: "Camila y Hugo preparan un debate sobre igualdad.",
    pj: PJ,
    lineas: [
      ["camila", "En France, l'écart de salaire entre hommes et femmes est encore de 15 %.", "En Francia, la brecha salarial entre hombres y mujeres todavía es del 15 %."],
      ["hugo", "Oui, et dans beaucoup de couples, les femmes font encore la majorité des tâches ménagères. C'est la charge mentale.", "Sí, y en muchas parejas las mujeres todavía hacen la mayoría de las tareas domésticas. Es la carga mental."],
      ["camila", "Mon frère a pris un congé de paternité à la naissance de sa fille. Et ma cousine, ingénieure, a brisé le plafond de verre !", "Mi hermano tomó una licencia de paternidad cuando nació su hija. ¡Y mi prima, ingeniera, rompió el techo de cristal!"],
      ["hugo", "Bravo ! L'égalité salariale est un droit. Le partage des tâches ménagères reste un enjeu important pour l'égalité.", "¡Bravo! La igualdad salarial es un derecho. El reparto de las tareas domésticas sigue siendo un reto importante para la igualdad."]
    ],
    fijate: "Fíjate: l'écart de salaire, les tâches ménagères, la charge mentale, un congé de paternité, ingénieure, le plafond de verre, l'égalité salariale, le partage."
  },
  ensena: [
    { id: "vo", tipo: "vocab", titulo: "Trabajo, hogar y sociedad",
      intro: "Toca cada palabra.",
      palabras: [
        { fr: "l'écart de salaire · écart", es: "la brecha salarial · la brecha" },
        { fr: "l'égalité salariale", es: "la igualdad salarial" },
        { fr: "la parité", es: "la igualdad numérica entre sexos" },
        { fr: "le plafond de verre", es: "el techo de cristal" },
        { fr: "les tâches ménagères · tâches", es: "las tareas domésticas" },
        { fr: "le partage des tâches", es: "el reparto de las tareas" },
        { fr: "la charge mentale", es: "la carga mental" },
        { fr: "le congé parental · le congé de paternité · paternité", es: "la licencia parental · la licencia de paternidad" },
        { fr: "les stéréotypes · le sexisme · le harcèlement", es: "los estereotipos · el sexismo · el acoso" },
        { fr: "une ingénieure · une autrice · une cheffe", es: "una ingeniera · una autora · una jefa" },
        { fr: "le congé parental partagé · plus de femmes dirigeantes", es: "la licencia parental compartida · más mujeres directivas" },
        { fr: "L'égalité salariale est un droit.", es: "La igualdad salarial es un derecho." }
      ],
      ej: [["Il existe encore un écart de salaire entre hommes et femmes.", "Todavía existe una brecha salarial entre hombres y mujeres."], ["Le partage des tâches ménagères progresse lentement.", "El reparto de las tareas domésticas avanza lentamente."], ["Elle a brisé le plafond de verre.", "Rompió el techo de cristal."]],
      clave: "Techo de cristal = le plafond de verre (no le toit)." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["le toit de verre", "le plafond de verre", "Expresión fija."], ["les taches ménagères", "les tâches ménagères", "Tâche (con ^) = tarea; tache = mancha."], ["la brèche salariale", "l'écart de salaire", "Brecha = écart."]] }
  ],
  ejemplos: [
    { sit: "le plafond de verre", resp: "el techo de cristal", pasos: ["Expresión fija."], porque: "Trabajo." },
    { sit: "«la parité dans les conseils»", resp: "la igualdad numérica entre sexos", pasos: ["parité."], porque: "Trabajo." },
    { sit: "Las tareas domésticas", resp: "les tâches ménagères", pasos: ["tâche con ^."], porque: "Hogar." }
  ],
  comprueba: [
    { q: "«El techo de cristal» se dice…", o: ["le plafond de verre", "le toit de verre"], a: 0, b: "vo", porque: "Expresión." },
    { q: "«La brecha salarial» se dice…", o: ["l'écart de salaire", "la brèche de salaire"], a: 0, b: "vo", porque: "écart." },
    { q: "«Las tareas domésticas» se dice…", o: ["les tâches ménagères", "les taches ménagères"], a: 0, b: "vo", porque: "Con ^." }
  ],
  practica: [
    { fase: "guiada", c: ["b2eg-travail", "b2eg-maison"], k: "sort", ask: "¿Avance o desigualdad?", q: "Clasifica.", cats: ["Avance", "Desigualdad"], items: [["la parité", 0], ["le congé parental partagé", 0], ["l'égalité salariale", 0], ["plus de femmes dirigeantes", 0], ["l'écart de salaire", 1], ["le plafond de verre", 1], ["les stéréotypes", 1], ["le harcèlement", 1]], pista: "¿Mejora o problema?", why: "Igualdad." },
    { fase: "guiada", c: ["b2eg-travail"], k: "choice", es: true, ask: "«le plafond de verre» es…", q: "Elige.", o: ["el techo de cristal", "una ventana"], a: 0, pista: "Expresión.", why: "Techo de cristal." },
    { fase: "guiada", c: ["b2eg-travail"], k: "choice", es: true, ask: "«la parité dans les conseils» es…", q: "Elige.", o: ["la igualdad numérica entre sexos", "la paridad del dólar"], a: 0, pista: "Mitad y mitad.", why: "Parité." },
    { fase: "indep", c: ["b2eg-maison"], k: "choice", ask: "Las tareas domésticas.", q: "«___»", o: ["les tâches ménagères", "les devoirs de maison"], a: 0, why: "<b>les tâches ménagères</b>." },
    { fase: "indep", c: ["b2eg-maison"], k: "fill", ask: "«licencia de paternidad»", q: "Il a pris un congé de ___ à la naissance de sa fille.", acc: ["paternité"], why: "<b>paternité</b>." },
    { fase: "indep", c: ["b2eg-travail"], k: "fill", ask: "«brecha»", q: "L'___ de salaire est encore de 15 %.", acc: ["écart"], why: "<b>écart</b>." },
    { fase: "aplica", c: ["b2eg-maison", "b2eg-travail"], k: "match", ask: "Une cada palabra con su traducción.", q: "Francés → español", pairs: [["la charge mentale", "la carga mental"], ["le sexisme", "el sexismo"], ["une ingénieure", "una ingeniera"], ["le harcèlement", "el acoso"]], why: "Vocabulario." },
    { fase: "aplica", c: ["b2eg-maison"], k: "spot", ask: "Encuentra el error.", s: "Dans beaucoup de couples , les femmes font encore la majorité des [taches] ménagères .", fix: "tâches", why: "<b>tâches</b>." },
    { fase: "aplica", c: ["b2eg-travail"], k: "spot", ask: "Encuentra el error.", s: "Ma cousine a brisé le [toit] de verre .", fix: "plafond", why: "<b>plafond</b>." },
    { fase: "dominio", c: ["b2eg-travail"], k: "order", ask: "Ordena: «La igualdad salarial es un derecho».", tokens: ["L'égalité salariale", "est", "un droit."], why: "<b>L'égalité salariale est un droit.</b>" },
    { fase: "dominio", c: ["b2eg-maison"], k: "choice", ask: "«la carga mental»", q: "«___»", o: ["la charge mentale", "la carge mentale"], a: 0, why: "<b>la charge mentale</b>." },
    { fase: "dominio", c: ["b2eg-travail", "b2eg-maison"], k: "listen", say: "Le partage des tâches ménagères reste un enjeu important pour l'égalité.", acc: ["Le partage des tâches ménagères reste un enjeu important pour l'égalité."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Le partage des tâches ménagères reste un enjeu important pour l'égalité.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

E["b12-alimentation-durable"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Alimentation et consommation responsable",
  objetivo: {
    que: "Vas a hablar de alimentación sostenible: local, de saison, bio, le gaspillage alimentaire, la date de péremption, le circuit court.",
    corto: "J'achète des fruits de saison au marché.",
    podras: ["Describir productos: local, de saison, bio, fait maison, transformé, industriel.", "Leer etiquetas: la date de péremption, les ingrédients, les additifs.", "Hablar de hábitos: manger équilibré, réduire la viande, le gaspillage alimentaire, le circuit court."],
    iconos: ["ic2/bolsa", "ic2/flor", "ic2/croissant"],
    previos: ["Consumir (B1.1, lección 60) y el medio ambiente (B1.1, lección 57)."],
    capacidad: "Ahora haces mercado como un francés consciente."
  },
  requiere: R("b1cs-payer", "b1en-solution"), recupera: ["b1en-solution"],
  conceptos: {
    "b2ad-produits": { n: "productos y etiquetas: local, de saison (de temporada), bio, fait maison, transformé; la date de péremption, les additifs", b: "vo" },
    "b2ad-habitudes": { n: "hábitos: manger équilibré, réduire la viande, cuisiner les restes; le gaspillage alimentaire; le circuit court, le marché", b: "vo" }
  },
  video: {
    titulo: "Comer de forma responsable", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/bolsa", grande: "de saison", seg: [
        { es: "Hola. Comer bien y cuidar el planeta." } ] },
      { v: "frase", filas: [
          { nota: "temporada", p: 1, partes: [["J'achète des fruits de saison au marché.", "-", 1]] },
          { nota: "problema", p: 2, partes: [["Le gaspillage alimentaire est un problème mondial.", "-", 2]] },
          { nota: "etiqueta", p: 3, partes: [["Vérifie la date de péremption.", "-", 3]] } ], seg: [
        { fr: "J'achète des fruits de saison au marché.", p: 1 }, { fr: "Le gaspillage alimentaire est un problème mondial.", p: 2 }, { fr: "Vérifie la date de péremption.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Estos yogures están vencidos, la fecha de caducidad ya pasó.»", o: ["Ces yaourts sont périmés, la date de péremption est dépassée.", "Ces yaourts sont périmés, la date de caducité est dépassée."], a: 0,
        bien: "¡Sí! La date de péremption.", mal: "Caducidad: péremption.",
        seg: [ { es: "Pausa. La fecha de caducidad." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["de saison", "bio", "fait maison", "le gaspillage", "la date de péremption", "le circuit court"], seg: [
        { es: "Local y de temporada.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El mercado del sábado", img: "bg-paris", yo: "camila",
    escena: "Camila y Hugo hacen mercado.",
    pj: PJ,
    lineas: [
      ["camila", "J'achète des légumes bio au marché. Je mange des légumes de saison : des tomates en été.", "Compro verduras orgánicas en el mercado. Como verduras de temporada: tomates en verano."],
      ["hugo", "Moi, j'achète en circuit court, directement au producteur. Et je cuisine les restes : le gaspillage alimentaire est un problème mondial.", "Yo compro en circuito corto, directamente al productor. Y cocino las sobras: el desperdicio de alimentos es un problema mundial."],
      ["camila", "Regarde ces yaourts : ils sont périmés, la date de péremption est dépassée !", "Mira estos yogures: ¡están vencidos, ya pasó la fecha de caducidad!"],
      ["hugo", "On les jette… Ce soir, je fais une tarte fait maison. Manger local et de saison est bon pour la santé et pour la planète.", "Los botamos… Esta noche hago una tarta casera. Comer local y de temporada es bueno para la salud y para el planeta."]
    ],
    fijate: "Fíjate: bio, de saison, en circuit court, les restes, le gaspillage alimentaire, périmés, la date de péremption, fait maison, local."
  },
  ensena: [
    { id: "vo", tipo: "vocab", titulo: "Productos, etiquetas y hábitos",
      intro: "Toca cada palabra.",
      palabras: [
        { fr: "local · de saison · saison", es: "local · de temporada · temporada" },
        { fr: "bio", es: "orgánico, ecológico" },
        { fr: "fait maison", es: "hecho en casa, casero" },
        { fr: "transformé · industriel", es: "procesado · industrial" },
        { fr: "la date de péremption · péremption · périmé", es: "la fecha de caducidad · vencido" },
        { fr: "les ingrédients · les additifs", es: "los ingredientes · los aditivos" },
        { fr: "équilibré · manger équilibré", es: "equilibrado · comer equilibrado" },
        { fr: "le gaspillage alimentaire · le gaspillage · gaspillage", es: "el desperdicio de alimentos" },
        { fr: "le circuit court · acheter en circuit court", es: "el circuito corto · comprar directamente al productor" },
        { fr: "acheter local · manger de saison · cuisiner les restes · réduire la viande", es: "comprar local · comer de temporada · cocinar las sobras · reducir la carne" },
        { fr: "jeter la nourriture · acheter trop d'emballages · manger des fraises en hiver · abuser des plats industriels", es: "botar la comida · comprar demasiados empaques · comer fresas en invierno · abusar de los platos industriales" },
        { fr: "J'achète des légumes bio au marché.", es: "Compro verduras orgánicas en el mercado." }
      ],
      ej: [["J'achète des fruits de saison au marché.", "Compro fruta de temporada en el mercado."], ["Le gaspillage alimentaire représente des tonnes chaque année.", "El desperdicio alimentario representa toneladas cada año."], ["Vérifie la date de péremption avant d'acheter.", "Mira la fecha de caducidad antes de comprar."]],
      clave: "De saison = de temporada (no de una estación de tren)." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["la date de caducité", "la date de péremption", "Caducidad = péremption."], ["un produit de saison = de la estación de tren", "un produit de saison = de temporada", "saison = temporada."], ["fait en maison", "fait maison", "Sin en."]] }
  ],
  ejemplos: [
    { sit: "«acheter en circuit court»", resp: "comprar directamente al productor", pasos: ["circuit court."], porque: "Hábito." },
    { sit: "«Regarde la date de péremption.»", resp: "la fecha de caducidad", pasos: ["péremption."], porque: "Etiqueta." },
    { sit: "Hecho en casa", resp: "fait maison", pasos: ["Sin en."], porque: "Producto." }
  ],
  comprueba: [
    { q: "«La fecha de caducidad» se dice…", o: ["la date de péremption", "la date de caducité"], a: 0, b: "vo", porque: "péremption." },
    { q: "«De saison» significa…", o: ["de temporada", "de la estación de tren"], a: 0, b: "vo", porque: "saison." },
    { q: "«El desperdicio» se dice…", o: ["le gaspillage", "le déchetage"], a: 0, b: "vo", porque: "gaspillage." }
  ],
  practica: [
    { fase: "guiada", c: ["b2ad-habitudes"], k: "sort", ask: "¿Responsable o poco sostenible?", q: "Clasifica.", cats: ["Responsable", "Poco sostenible"], items: [["acheter local", 0], ["manger de saison", 0], ["cuisiner les restes", 0], ["réduire la viande", 0], ["jeter la nourriture", 1], ["acheter trop d'emballages", 1], ["manger des fraises en hiver", 1], ["abuser des plats industriels", 1]], pista: "¿Cuida el planeta?", why: "Hábitos." },
    { fase: "guiada", c: ["b2ad-habitudes"], k: "choice", es: true, ask: "«acheter en circuit court» es…", q: "Elige.", o: ["comprar directamente al productor", "comprar rápido"], a: 0, pista: "Sin intermediarios.", why: "Circuito corto." },
    { fase: "guiada", c: ["b2ad-produits"], k: "choice", es: true, ask: "«Regarde la date de péremption.» Es…", q: "Elige.", o: ["la fecha de caducidad", "la fecha de compra"], a: 0, pista: "Etiqueta.", why: "Caducidad." },
    { fase: "indep", c: ["b2ad-produits"], k: "choice", ask: "Hecho en casa.", q: "«___»", o: ["fait maison", "fait en maison"], a: 0, why: "<b>fait maison</b>." },
    { fase: "indep", c: ["b2ad-produits"], k: "fill", ask: "«de temporada»", q: "Je mange des légumes de ___ : des tomates en été.", acc: ["saison"], why: "<b>saison</b>." },
    { fase: "indep", c: ["b2ad-habitudes"], k: "fill", ask: "«desperdicio»", q: "Le ___ alimentaire est un problème mondial.", acc: ["gaspillage"], why: "<b>gaspillage</b>." },
    { fase: "aplica", c: ["b2ad-produits"], k: "match", ask: "Une cada palabra con su traducción.", q: "Francés → español", pairs: [["bio", "orgánico, ecológico"], ["les additifs", "los aditivos"], ["transformé", "procesado"], ["équilibré", "equilibrado"]], why: "Vocabulario." },
    { fase: "aplica", c: ["b2ad-produits"], k: "spot", ask: "Encuentra el error.", s: "Ces yaourts sont périmés , la date de [caducité] est dépassée .", fix: "péremption", why: "<b>péremption</b>." },
    { fase: "aplica", c: ["b2ad-produits"], k: "spot", ask: "Encuentra el error.", s: "Ce soir , je fais une tarte [fait en maison] .", fix: "fait maison", why: "<b>fait maison</b>." },
    { fase: "dominio", c: ["b2ad-produits"], k: "order", ask: "Ordena: «Compro verduras orgánicas en el mercado».", tokens: ["J'achète", "des légumes bio", "au marché."], why: "<b>J'achète des légumes bio au marché.</b>" },
    { fase: "dominio", c: ["b2ad-habitudes"], k: "choice", ask: "«cocinar las sobras»", q: "«___»", o: ["cuisiner les restes", "cuisiner les sobres"], a: 0, why: "<b>cuisiner les restes</b>." },
    { fase: "dominio", c: ["b2ad-produits", "b2ad-habitudes"], k: "listen", say: "Manger local et de saison est bon pour la santé et pour la planète.", acc: ["Manger local et de saison est bon pour la santé et pour la planète."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Manger local et de saison est bon pour la santé et pour la planète.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

E["b12-tourisme-responsable"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Tourisme de masse et tourisme responsable",
  objetivo: {
    que: "Vas a debatir sobre el turismo: le surtourisme, la saturation, les locations saisonnières, voyager hors saison, le tourisme responsable.",
    corto: "Venise souffre du tourisme de masse. · Voyager hors saison, c'est plus calme.",
    podras: ["Nombrar los problemas: le surtourisme, la saturation, la hausse des loyers, les locations saisonnières.", "Nombrar las soluciones: le tourisme durable / responsable, voyager hors saison, une taxe de séjour.", "Nombrar los efectos positivos: créer des emplois, dynamiser l'économie, l'échange culturel."],
    iconos: ["ic2/globo", "ic2/torre-eiffel", "ic2/mundo"],
    previos: ["Los imprevistos de viaje (B1.1, lección 59) y la ciudad del mañana (lección 49)."],
    capacidad: "Ahora opinas sobre el turismo en Cartagena o en París."
  },
  requiere: R("b1vi-probleme", "b2vu-espaces"), recupera: ["b1vi-probleme"],
  conceptos: {
    "b2tr-probl": { n: "problemas: le surtourisme / tourisme de masse, la saturation, la hausse des loyers, les locations saisonnières (alquileres turísticos)", b: "vo" },
    "b2tr-sol": { n: "soluciones y efectos positivos: le tourisme responsable / durable, voyager hors saison, une taxe de séjour; créer des emplois", b: "vo" }
  },
  video: {
    titulo: "Turismo responsable", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/globo", grande: "hors saison", seg: [
        { es: "Hola. Viajar sin dañar el lugar." } ] },
      { v: "dos",
        a: { tag: "problema", fr: "Venise souffre du tourisme de masse.", es: "turismo de masas" },
        b: { tag: "solución", fr: "Voyager hors saison, c'est plus calme.", es: "fuera de temporada" },
        seg: [ { es: "El problema:", p: 1 }, { fr: "Venise souffre du tourisme de masse.", p: 1 }, { es: "Una solución:", p: 2 }, { fr: "Voyager hors saison, c'est plus calme.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Para evitar la multitud, más vale viajar fuera de temporada.»", o: ["Pour éviter la foule, il vaut mieux voyager hors saison.", "Pour éviter la foule, il vaut mieux voyager dehors saison."], a: 0,
        bien: "¡Sí! Hors saison.", mal: "Fuera de temporada: hors saison.",
        seg: [ { es: "Pausa. Fuera de temporada." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["le surtourisme", "hors saison", "la taxe de séjour", "les locations saisonnières", "créer des emplois"], seg: [
        { es: "Hors, no dehors.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Las vacaciones", img: "bg-playa", yo: "camila",
    escena: "Camila y Hugo planean un viaje a la costa.",
    pj: PJ,
    lineas: [
      ["camila", "À Cartagena, il y a trop de touristes en décembre. C'est le surtourisme.", "En Cartagena hay demasiados turistas en diciembre. Es el exceso de turismo."],
      ["hugo", "Comme à Venise ! Les habitants se plaignent des locations saisonnières : les loyers augmentent.", "¡Como en Venecia! Los habitantes se quejan de los alquileres turísticos: los arriendos suben."],
      ["camila", "Alors, voyageons hors saison : c'est plus calme et moins cher. Et on paie la taxe de séjour.", "Entonces viajemos fuera de temporada: es más tranquilo y más barato. Y pagamos el impuesto turístico."],
      ["hugo", "D'accord. Le tourisme crée des emplois, mais le tourisme responsable consiste à voyager en respectant les habitants et la nature.", "De acuerdo. El turismo crea empleos, pero el turismo responsable consiste en viajar respetando a los habitantes y la naturaleza."]
    ],
    fijate: "Fíjate: le surtourisme, les locations saisonnières, les loyers, hors saison, la taxe de séjour, crée des emplois, le tourisme responsable."
  },
  ensena: [
    { id: "vo", tipo: "vocab", titulo: "Problemas, soluciones y efectos",
      intro: "Toca cada palabra.",
      palabras: [
        { fr: "le surtourisme · le tourisme de masse", es: "el exceso de turistas · el turismo de masas" },
        { fr: "la saturation · la saturation des sites", es: "la saturación · la saturación de los lugares" },
        { fr: "les locations saisonnières · saisonnières", es: "los alquileres turísticos" },
        { fr: "la hausse des loyers · la pollution · la perte d'authenticité", es: "la subida de los arriendos · la contaminación · la pérdida de autenticidad" },
        { fr: "le tourisme responsable · durable", es: "el turismo responsable · sostenible" },
        { fr: "hors saison", es: "fuera de temporada" },
        { fr: "la taxe de séjour", es: "un impuesto turístico" },
        { fr: "créer des emplois · emplois · l'échange culturel · valoriser le patrimoine · dynamiser l'économie", es: "crear empleos · empleos · el intercambio cultural · valorizar el patrimonio · dinamizar la economía" },
        { fr: "un voyagiste · un habitant", es: "un operador turístico · un habitante" },
        { fr: "Le tourisme de masse nuit aux habitants.", es: "El turismo de masas perjudica a los habitantes." }
      ],
      ej: [["Venise souffre du tourisme de masse.", "Venecia sufre el turismo de masas."], ["Voyager hors saison, c'est plus calme et moins cher.", "Viajar fuera de temporada es más tranquilo y barato."], ["Certaines villes limitent les locations saisonnières.", "Algunas ciudades limitan los alquileres turísticos."]],
      clave: "Fuera de temporada = hors saison." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["voyager dehors saison", "voyager hors saison", "hors saison = fuera de temporada."], ["le tourisme massif", "le tourisme de masse", "Expresión fija."], ["une taxe de séjours", "une taxe de séjour", "En singular."]] }
  ],
  ejemplos: [
    { sit: "le surtourisme", resp: "el exceso de turistas", pasos: ["sur- = demasiado."], porque: "Problema." },
    { sit: "Fuera de temporada", resp: "hors saison", pasos: ["hors."], porque: "Solución." },
    { sit: "la taxe de séjour", resp: "un impuesto turístico", pasos: ["séjour = estadía."], porque: "Solución." }
  ],
  comprueba: [
    { q: "«Le surtourisme» es…", o: ["el exceso de turistas", "el turismo del sur"], a: 0, b: "vo", porque: "sur- = demasiado." },
    { q: "«Fuera de temporada» se dice…", o: ["hors saison", "dehors saison"], a: 0, b: "vo", porque: "hors." },
    { q: "«Un voyagiste» es…", o: ["un operador turístico", "un viajero"], a: 0, b: "vo", porque: "Actor." }
  ],
  practica: [
    { fase: "guiada", c: ["b2tr-probl", "b2tr-sol"], k: "sort", ask: "¿Efecto positivo o negativo del turismo?", q: "Clasifica.", cats: ["Positivo", "Negativo"], items: [["créer des emplois", 0], ["l'échange culturel", 0], ["valoriser le patrimoine", 0], ["dynamiser l'économie", 0], ["la hausse des loyers", 1], ["la pollution", 1], ["la saturation des sites", 1], ["la perte d'authenticité", 1]], pista: "¿Ayuda o perjudica?", why: "Efectos." },
    { fase: "guiada", c: ["b2tr-probl"], k: "choice", es: true, ask: "«le surtourisme» es…", q: "Elige.", o: ["el exceso de turistas", "el turismo del sur"], a: 0, pista: "sur- = demasiado.", why: "Surtourisme." },
    { fase: "guiada", c: ["b2tr-sol"], k: "choice", ask: "Fuera de temporada.", q: "«___»", o: ["hors saison", "dehors saison"], a: 0, pista: "hors.", why: "<b>hors saison</b>." },
    { fase: "indep", c: ["b2tr-sol"], k: "choice", es: true, ask: "«la taxe de séjour» es…", q: "Elige.", o: ["un impuesto turístico", "un taxi"], a: 0, why: "Impuesto." },
    { fase: "indep", c: ["b2tr-sol"], k: "fill", ask: "«empleos»", q: "Le tourisme crée des ___ dans la région.", acc: ["emplois"], why: "<b>emplois</b>." },
    { fase: "indep", c: ["b2tr-probl"], k: "fill", ask: "«turísticas, de temporada» (locations …)", q: "Les habitants se plaignent des locations ___ .", acc: ["saisonnières"], why: "<b>saisonnières</b>." },
    { fase: "aplica", c: ["b2tr-probl", "b2tr-sol"], k: "match", ask: "Une cada palabra con su traducción.", q: "Francés → español", pairs: [["un voyagiste", "un operador turístico"], ["la saturation", "la saturación"], ["durable", "sostenible"], ["un habitant", "un habitante"]], why: "Vocabulario." },
    { fase: "aplica", c: ["b2tr-sol"], k: "spot", ask: "Encuentra el error.", s: "Pour éviter la foule , il vaut mieux voyager [dehors] saison .", fix: "hors", why: "<b>hors</b>." },
    { fase: "aplica", c: ["b2tr-probl"], k: "spot", ask: "Encuentra el error.", s: "Venise souffre du tourisme [massif] .", fix: "de masse", why: "<b>de masse</b>." },
    { fase: "dominio", c: ["b2tr-probl"], k: "order", ask: "Ordena: «El turismo de masas perjudica a los habitantes».", tokens: ["Le tourisme de masse", "nuit", "aux habitants."], why: "<b>Le tourisme de masse nuit aux habitants.</b>" },
    { fase: "dominio", c: ["b2tr-sol"], k: "choice", ask: "«el turismo sostenible»", q: "«___»", o: ["le tourisme durable", "le tourisme soutenable de masse"], a: 0, why: "<b>le tourisme durable</b>." },
    { fase: "dominio", c: ["b2tr-probl", "b2tr-sol"], k: "listen", say: "Le tourisme responsable consiste à voyager en respectant les habitants et la nature.", acc: ["Le tourisme responsable consiste à voyager en respectant les habitants et la nature."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Le tourisme responsable consiste à voyager en respectant les habitants et la nature.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Cartagena", "Venise"], previo: [] }
};

E["b12-benevolat"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Le bénévolat et l'engagement associatif",
  objetivo: {
    que: "Vas a hablar del voluntariado: être bénévole, une association, s'engager, faire un don, la solidarité, l'entraide.",
    corto: "Je fais du bénévolat aux Restos du Cœur. · Chaque don compte.",
    podras: ["Nombrar a las personas: un bénévole (voluntario no remunerado), un militant, un adhérent, un donateur.", "Nombrar las acciones: s'engager dans, faire du bénévolat, adhérer à, faire un don, collecter.", "Hablar de valores: la solidarité, l'entraide, la générosité, se sentir utile."],
    iconos: ["ic2/corazon", "ic2/amigos", "ic2/regalo"],
    previos: ["El medio ambiente (B1.1, lección 57) y la diversidad (lección 50)."],
    capacidad: "Ahora cuentas tu experiencia de voluntariado en una entrevista."
  },
  requiere: R("b1en-solution", "b2dv-integr"), recupera: ["b2dv-integr"],
  conceptos: {
    "b2bv-pers": { n: "personas: un bénévole (no cobra), un militant, un adhérent (socio), un donateur; une association", b: "vo" },
    "b2bv-actions": { n: "acciones y valores: s'engager dans, faire du bénévolat, adhérer à, faire un don, collecter; la solidarité, l'entraide, se sentir utile", b: "vo" }
  },
  video: {
    titulo: "El voluntariado", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/corazon", grande: "un bénévole", seg: [
        { es: "Hola. Millones de franceses son voluntarios." } ] },
      { v: "frase", filas: [
          { nota: "persona", p: 1, partes: [["Il est bénévole aux Restos du Cœur.", "-", 1]] },
          { nota: "acción", p: 2, partes: [["Elle s'est engagée dans une association.", "-", 2]] },
          { nota: "valor", p: 3, partes: [["Chaque don compte.", "-", 3]] } ], seg: [
        { fr: "Il est bénévole aux Restos du Cœur.", p: 1 }, { fr: "Elle s'est engagée dans une association.", p: 2 }, { fr: "Chaque don compte.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Un bénévole» es…", o: ["un voluntario no remunerado", "un empleado con sueldo"], a: 0,
        bien: "¡Sí! No recibe salario.", mal: "Bénévole: no cobra.",
        seg: [ { es: "Pausa. ¿Un bénévole?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["un bénévole", "s'engager", "faire un don", "l'entraide", "la solidarité"], seg: [
        { es: "Se sentir utile.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El sábado solidario", img: "bg-cafe", yo: "camila",
    escena: "Hugo cuenta lo que hace los sábados.",
    pj: PJ,
    lineas: [
      ["hugo", "Je fais du bénévolat aux Restos du Cœur le samedi. Les bénévoles distribuent des repas chaque soir.", "Hago voluntariado en los Restos du Cœur los sábados. Los voluntarios reparten comidas cada noche."],
      ["camila", "C'est génial ! Moi, j'ai fait un don de 50 euros à la Croix-Rouge.", "¡Qué bien! Yo hice una donación de 50 euros a la Cruz Roja."],
      ["hugo", "Chaque don compte. Ma sœur s'est engagée dans une association écologique : elle est adhérente depuis un an.", "Cada donación cuenta. Mi hermana se comprometió con una asociación ecologista: es socia desde hace un año."],
      ["camila", "Je me sens utile en aidant les autres. Le bénévolat permet de se sentir utile et de rencontrer des gens.", "Me siento útil ayudando a los demás. El voluntariado permite sentirse útil y conocer gente."]
    ],
    fijate: "Fíjate: faire du bénévolat, les bénévoles, faire un don, s'engager dans une association, adhérente, se sentir utile."
  },
  ensena: [
    { id: "vo", tipo: "vocab", titulo: "Personas, acciones y valores",
      intro: "Toca cada palabra.",
      palabras: [
        { fr: "un bénévole · bénévoles", es: "un voluntario no remunerado · voluntarios" },
        { fr: "le bénévolat · faire du bénévolat · bénévolat", es: "el voluntariado · hacer voluntariado" },
        { fr: "une association", es: "una asociación" },
        { fr: "un militant · un adhérent · un donateur", es: "un militante · un socio · un donante" },
        { fr: "s'engager dans une association · s'engager", es: "comprometerse con una asociación · comprometerse" },
        { fr: "adhérer · adhérer à une association", es: "afiliarse · afiliarse a una asociación" },
        { fr: "faire un don · don", es: "hacer una donación · donación" },
        { fr: "collecter · une collecte", es: "recolectar · una colecta" },
        { fr: "la solidarité · l'entraide", es: "la solidaridad · la ayuda mutua" },
        { fr: "l'humanitaire", es: "la ayuda humanitaria" },
        { fr: "se sentir utile · Je me sens utile en aidant les autres.", es: "sentirse útil · Me siento útil ayudando a los demás." }
      ],
      ej: [["Je fais du bénévolat aux Restos du Cœur.", "Hago voluntariado en los Restos du Cœur."], ["Elle s'est engagée dans une association écologique.", "Se comprometió con una asociación ecologista."], ["Chaque don compte.", "Cada donación cuenta."]],
      clave: "Un bénévole no recibe salario." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Un bénévole reçoit un salaire.", "Un bénévole ne reçoit pas de salaire.", "Bénévole = voluntario no remunerado."], ["les benévoles", "les bénévoles", "Dos acentos."], ["faire une donation", "faire un don", "Más natural: un don."]] }
  ],
  ejemplos: [
    { sit: "«Il est bénévole.»", resp: "un voluntario no remunerado", pasos: ["No cobra."], porque: "Persona." },
    { sit: "Comprometerse con una asociación", resp: "s'engager dans une association", pasos: ["s'engager dans."], porque: "Acción." },
    { sit: "«l'entraide entre voisins»", resp: "la ayuda mutua", pasos: ["entre + aide."], porque: "Valor." }
  ],
  comprueba: [
    { q: "Un bénévole…", o: ["no recibe salario", "recibe un salario"], a: 0, b: "vo", porque: "Voluntario." },
    { q: "«Hacer una donación» se dice…", o: ["faire un don", "faire un donne"], a: 0, b: "vo", porque: "don." },
    { q: "«L'entraide» es…", o: ["la ayuda mutua", "la entrada"], a: 0, b: "vo", porque: "Valor." }
  ],
  practica: [
    { fase: "guiada", c: ["b2bv-pers", "b2bv-actions"], k: "sort", ask: "¿Persona o acción?", q: "Clasifica.", cats: ["Persona", "Acción"], items: [["un bénévole", 0], ["un militant", 0], ["un adhérent", 0], ["un donateur", 0], ["faire un don", 1], ["adhérer", 1], ["collecter", 1], ["s'engager", 1]], pista: "¿Alguien o algo que se hace?", why: "Voluntariado." },
    { fase: "guiada", c: ["b2bv-pers"], k: "choice", es: true, ask: "«Il est bénévole.» significa que es…", q: "Elige.", o: ["un voluntario no remunerado", "un empleado"], a: 0, pista: "No cobra.", why: "Bénévole." },
    { fase: "guiada", c: ["b2bv-actions"], k: "choice", ask: "Comprometerse con una asociación.", q: "«___»", o: ["s'engager dans une association", "s'engager à une association"], a: 0, pista: "dans.", why: "<b>s'engager dans</b>." },
    { fase: "indep", c: ["b2bv-actions"], k: "choice", es: true, ask: "«l'entraide entre voisins» es…", q: "Elige.", o: ["la ayuda mutua", "la entrada"], a: 0, why: "Entraide." },
    { fase: "indep", c: ["b2bv-actions"], k: "fill", ask: "«donación»", q: "J'ai fait un ___ de 50 euros à la Croix-Rouge.", acc: ["don"], why: "<b>don</b>." },
    { fase: "indep", c: ["b2bv-actions"], k: "fill", ask: "«voluntariado»", q: "Elle fait du ___ le samedi.", acc: ["bénévolat"], why: "<b>bénévolat</b>." },
    { fase: "aplica", c: ["b2bv-pers", "b2bv-actions"], k: "match", ask: "Une cada palabra con su traducción.", q: "Francés → español", pairs: [["un adhérent", "un socio"], ["une collecte", "una colecta"], ["l'humanitaire", "la ayuda humanitaria"], ["la solidarité", "la solidaridad"]], why: "Vocabulario." },
    { fase: "aplica", c: ["b2bv-pers"], k: "spot", ask: "Encuentra el error.", s: "Les [benévoles] distribuent des repas chaque soir .", fix: "bénévoles", why: "<b>bénévoles</b>." },
    { fase: "aplica", c: ["b2bv-pers"], k: "spot", ask: "Encuentra el error.", s: "Un bénévole [reçoit] un salaire chaque mois .", fix: "ne reçoit pas", why: "<b>ne reçoit pas</b>." },
    { fase: "dominio", c: ["b2bv-actions"], k: "order", ask: "Ordena: «Me siento útil ayudando a los demás».", tokens: ["Je me sens utile", "en aidant", "les autres."], why: "<b>Je me sens utile en aidant les autres.</b>" },
    { fase: "dominio", c: ["b2bv-actions"], k: "choice", ask: "«afiliarse a una asociación»", q: "«___»", o: ["adhérer à une association", "adhérer une association"], a: 0, why: "<b>adhérer à</b>." },
    { fase: "dominio", c: ["b2bv-pers", "b2bv-actions"], k: "listen", say: "Le bénévolat permet de se sentir utile et de rencontrer des gens.", acc: ["Le bénévolat permet de se sentir utile et de rencontrer des gens."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Le bénévolat permet de se sentir utile et de rencontrer des gens.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Restos du Cœur", "Croix-Rouge"], previo: [] }
};

/* ================================ B1.2·14 · El vocabulario preciso ================================ */
E["b12-faux-amis"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Les faux amis pour hispanophones",
  objetivo: {
    que: "Vas a evitar los falsos amigos más traicioneros: constipé, embarrassé, large, la librairie, assister, attendre.",
    corto: "Je suis enrhumé. · Elle est enceinte. · Cette route est très large.",
    podras: ["Distinguir constipé (estreñido) de enrhumé (resfriado) y embarrassé (incómodo) de enceinte (embarazada).", "Distinguir large (ancho) de long (largo) y la librairie (librería) de la bibliothèque (biblioteca).", "Usar bien la carte (el menú, el mapa), attendre (esperar), assister à (asistir a), un verre (un vaso)."],
    iconos: ["ic2/pregunta", "ic2/libros", "ic2/bombilla"],
    previos: ["En el médico (B1.1, lección 56) y los verbos con dos construcciones (lección 26)."],
    capacidad: "Ahora no dices que estás «constipado» cuando tienes gripa."
  },
  requiere: R("b1sa-symptomes", "b2vc-jouer"), recupera: ["b1sa-symptomes"],
  conceptos: {
    "b2fa-corps": { n: "constipé (estreñido) ≠ enrhumé (resfriado); embarrassé (incómodo) ≠ enceinte (embarazada)", b: "vo" },
    "b2fa-mots": { n: "large (ancho) ≠ long; la librairie (librería) ≠ la bibliothèque; la carte (menú, mapa); attendre (esperar); assister à (asistir)", b: "vo" }
  },
  video: {
    titulo: "Falsos amigos", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/pregunta", grande: "constipé ≠ resfriado", seg: [
        { es: "Hola. Palabras que parecen españolas, pero no lo son." } ] },
      { v: "dos",
        a: { tag: "falso amigo", fr: "Il est constipé.", es: "está estreñido" },
        b: { tag: "lo correcto", fr: "Il est enrhumé.", es: "está resfriado" },
        seg: [ { es: "Estreñido:", p: 1 }, { fr: "Il est constipé.", p: 1 }, { es: "Resfriado:", p: 2 }, { fr: "Il est enrhumé.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Mi hermana tiene seis meses de embarazo.»", o: ["Ma sœur est enceinte de six mois.", "Ma sœur est embarrassée de six mois."], a: 0,
        bien: "¡Sí! Enceinte = embarazada.", mal: "Embarrassée = incómoda.",
        seg: [ { es: "Pausa. Embarazada." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["enrhumé", "enceinte", "large", "la librairie", "la bibliothèque"], seg: [
        { es: "Desconfía de los parecidos.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Los malentendidos", img: "bg-cafe", yo: "camila",
    escena: "Camila le cuenta a Hugo sus errores con el francés.",
    pj: PJ,
    lineas: [
      ["camila", "Hier, j'ai dit au médecin : « Je suis constipée et j'ai de la fièvre. » Il m'a regardée bizarrement…", "Ayer le dije al médico: «Estoy estreñida y tengo fiebre». Me miró raro…"],
      ["hugo", "Ha ha ! Tu voulais dire « enrhumée » : resfriada. Constipé, c'est estreñido !", "¡Ja, ja! Querías decir «enrhumée»: resfriada. ¡Constipé es estreñido!"],
      ["camila", "Et ma sœur est enceinte de six mois. Pas « embarrassée » ! J'ai assisté à une conférence passionnante sur les faux amis.", "Y mi hermana tiene seis meses de embarazo. ¡No «embarrassée»! Asistí a una conferencia apasionante sobre los falsos amigos."],
      ["hugo", "Bon, je t'attends devant la bibliothèque. Après, je vais à la librairie acheter un livre.", "Bueno, te espero frente a la biblioteca. Después voy a la librería a comprar un libro."]
    ],
    fijate: "Fíjate: constipée (estreñida) ≠ enrhumée (resfriada); enceinte (embarazada) ≠ embarrassée; assisté à; t'attends (esperar); la bibliothèque ≠ la librairie."
  },
  ensena: [
    { id: "vo", tipo: "vocab", titulo: "Los falsos amigos más frecuentes",
      intro: "Toca cada palabra.",
      palabras: [
        { fr: "constipé", es: "estreñido" },
        { fr: "enrhumé", es: "resfriado" },
        { fr: "embarrassé", es: "incómodo" },
        { fr: "enceinte", es: "embarazada" },
        { fr: "large", es: "ancho" },
        { fr: "long", es: "largo" },
        { fr: "la librairie", es: "la librería" },
        { fr: "la bibliothèque", es: "la biblioteca" },
        { fr: "la carte", es: "el menú / el mapa" },
        { fr: "le parfum", es: "el sabor / el perfume" },
        { fr: "attendre", es: "esperar" },
        { fr: "assister à · assisté", es: "asistir a · asistí" },
        { fr: "un verre", es: "un vaso" },
        { fr: "le téléphone · la musique · la table · le chocolat", es: "amigos verdaderos: significan lo mismo" },
        { fr: "Je t'attends devant la bibliothèque.", es: "Te espero frente a la biblioteca." }
      ],
      ej: [["Je suis enrhumé, j'ai le nez qui coule.", "Estoy resfriado, me moquea la nariz."], ["Cette route est très large.", "Esta carretera es muy ancha."], ["J'ai acheté ce roman à la librairie.", "Compré esta novela en la librería."]],
      clave: "Embarazada = enceinte; resfriado = enrhumé; ancho = large." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Elle est embarrassée de trois mois.", "Elle est enceinte de trois mois.", "enceinte = embarazada."], ["Je suis constipé et j'ai de la fièvre.", "Je suis enrhumé et j'ai de la fièvre.", "Resfriado = enrhumé."], ["Je vais à la librairie pour réviser.", "Je vais à la bibliothèque pour réviser.", "Para estudiar: la biblioteca."]] }
  ],
  ejemplos: [
    { sit: "«Il est constipé.»", resp: "estreñido", pasos: ["Falso amigo."], porque: "Cuerpo." },
    { sit: "Para comprar un libro, voy a…", resp: "la librairie", pasos: ["Librería = librairie."], porque: "Lugar." },
    { sit: "«Ce pantalon est trop large.»", resp: "ancho", pasos: ["large = ancho."], porque: "Medida." }
  ],
  comprueba: [
    { q: "«Constipé» significa…", o: ["estreñido", "resfriado"], a: 0, b: "vo", porque: "Falso amigo." },
    { q: "«Embarazada» se dice…", o: ["enceinte", "embarrassée"], a: 0, b: "vo", porque: "Falso amigo." },
    { q: "«Large» significa…", o: ["ancho", "largo"], a: 0, b: "vo", porque: "Falso amigo." }
  ],
  practica: [
    { fase: "guiada", c: ["b2fa-corps", "b2fa-mots"], k: "sort", ask: "¿Falso amigo o amigo verdadero?", q: "Clasifica.", cats: ["Falso amigo", "Amigo verdadero"], items: [["constipé", 0], ["large", 0], ["embarrassé", 0], ["la librairie", 0], ["le téléphone", 1], ["la musique", 1], ["la table", 1], ["le chocolat", 1]], pista: "¿Significa lo mismo?", why: "Falsos amigos." },
    { fase: "guiada", c: ["b2fa-corps"], k: "choice", es: true, ask: "«Il est constipé.» significa que está…", q: "Elige.", o: ["estreñido", "resfriado"], a: 0, pista: "Falso amigo.", why: "Estreñido." },
    { fase: "guiada", c: ["b2fa-mots"], k: "choice", ask: "Para comprar un libro, voy a…", q: "«Pour acheter un livre, je vais à ___.»", o: ["la librairie", "la bibliothèque"], a: 0, pista: "Comprar.", why: "<b>la librairie</b>." },
    { fase: "indep", c: ["b2fa-mots"], k: "choice", es: true, ask: "«Ce pantalon est trop large.» significa que es demasiado…", q: "Elige.", o: ["ancho", "largo"], a: 0, why: "Ancho." },
    { fase: "indep", c: ["b2fa-corps"], k: "fill", ask: "«embarazada»", q: "Ma sœur est ___ de six mois.", acc: ["enceinte"], why: "<b>enceinte</b>." },
    { fase: "indep", c: ["b2fa-mots"], k: "fill", ask: "«asistí» (assister)", q: "J'ai ___ à une conférence passionnante.", acc: ["assisté"], why: "<b>assisté</b>." },
    { fase: "aplica", c: ["b2fa-corps", "b2fa-mots"], k: "match", ask: "Une cada palabra con su sentido real.", q: "Francés → español", pairs: [["embarrassé", "incómodo"], ["la carte", "el menú / el mapa"], ["le parfum", "el sabor / el perfume"], ["attendre", "esperar"], ["un verre", "un vaso"]], why: "Falsos amigos." },
    { fase: "aplica", c: ["b2fa-corps"], k: "spot", ask: "Encuentra el error (= resfriado).", s: "Je ne peux pas sortir , je suis très [constipé] et j'ai de la fièvre .", fix: "enrhumé", why: "<b>enrhumé</b>." },
    { fase: "aplica", c: ["b2fa-corps"], k: "spot", ask: "Encuentra el error (= embarazada).", s: "Elle est [embarrassée] de trois mois .", fix: "enceinte", why: "<b>enceinte</b>." },
    { fase: "dominio", c: ["b2fa-mots"], k: "order", ask: "Ordena: «Te espero frente a la biblioteca».", tokens: ["Je t'attends", "devant", "la bibliothèque."], why: "<b>Je t'attends devant la bibliothèque.</b>" },
    { fase: "dominio", c: ["b2fa-mots"], k: "choice", ask: "«Esta carretera es muy ancha.»", q: "«Cette route est très ___.»", o: ["large", "longue"], a: 0, why: "<b>large</b>." },
    { fase: "dominio", c: ["b2fa-corps", "b2fa-mots"], k: "listen", say: "Je vais à la librairie acheter un livre, puis à la bibliothèque pour réviser.", acc: ["Je vais à la librairie acheter un livre, puis à la bibliothèque pour réviser."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je vais à la librairie acheter un livre, puis à la bibliothèque pour réviser.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

E["b12-prefixes-suffixes"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Préfixes et suffixes : comprendre les mots nouveaux",
  objetivo: {
    que: "Vas a adivinar el sentido de palabras nuevas con prefijos (im-, il-, dé-, re-, pré-, mal-) y sufijos (-able, -eur, -erie, -ier).",
    corto: "impossible · illégal · refaire · lavable · la boulangerie",
    podras: ["Reconocer los prefijos de negación: in- / im- / il- / ir-, dé-, mal-.", "Reconocer re- (de nuevo), pré- (antes), anti- (contra).", "Reconocer los sufijos: -able / -ible, -eur / -euse (quien hace), -erie (tienda), -ier / -ière (oficio)."],
    iconos: ["ic2/lapiz", "ic2/libro", "ic2/bombilla"],
    previos: ["La nominalización (lección 27) y los adverbios en -ment (B1.1, lección 13)."],
    capacidad: "Ahora entiendes palabras que nunca has visto."
  },
  requiere: R("b2no-suff", "b1ad-forme"), recupera: ["b2no-suff"],
  conceptos: {
    "b2ps2-pref": { n: "prefijos: in- / im- / il- / ir- (impossible, illégal), dé- (défaire), mal- (malhonnête), re- (refaire), pré- (prévoir), anti-", b: "vo" },
    "b2ps2-suff": { n: "sufijos: -able / -ible (lavable), -eur / -euse (chanteur), -ier / -ière (jardinier), -erie (boulangerie, crêperie)", b: "vo" }
  },
  video: {
    titulo: "Prefijos y sufijos", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "im-possible · lav-able", seg: [
        { es: "Hola. Con prefijos y sufijos adivinas miles de palabras." } ] },
      { v: "frase", filas: [
          { nota: "negación", p: 1, partes: [["possible → impossible", "-", 1]] },
          { nota: "de nuevo", p: 2, partes: [["faire → refaire", "-", 2]] },
          { nota: "tienda", p: 3, partes: [["le boulanger → la boulangerie", "-", 3]] } ], seg: [
        { fr: "possible, impossible", p: 1 }, { fr: "faire, refaire", p: 2 }, { fr: "le boulanger, la boulangerie", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Estacionar aquí es ilegal.»", o: ["Stationner ici est illégal.", "Stationner ici est inlégal."], a: 0,
        bien: "¡Sí! Delante de l: il-.", mal: "Il- delante de l: illégal.",
        seg: [ { es: "Pausa. Ilegal." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["impossible", "illégal", "refaire", "lavable", "malhonnête", "une crêperie"], seg: [
        { es: "Mira el principio y el final.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El ejercicio imposible", img: "bg-biblioteca", yo: "camila",
    escena: "Camila estudia con Hugo.",
    pj: PJ,
    lineas: [
      ["camila", "Ce problème semble insoluble ! Ce texte est illisible…", "¡Este problema parece imposible de resolver! Este texto es ilegible…"],
      ["hugo", "Il faut réessayer. Il faut réécrire la lettre et refaire l'exercice.", "Hay que volver a intentarlo. Hay que reescribir la carta y rehacer el ejercicio."],
      ["camila", "D'accord. Et après, on va à la crêperie ? Elle est à côté de la boulangerie.", "Bueno. ¿Y después vamos a la crepería? Está al lado de la panadería."],
      ["hugo", "Oui ! Mais attention, stationner devant est illégal : tu vas avoir une amende.", "¡Sí! Pero ojo, estacionar al frente es ilegal: te van a poner una multa."]
    ],
    fijate: "Fíjate: insoluble, illisible, illégal (negación); réessayer, réécrire, refaire (de nuevo); la crêperie, la boulangerie (-erie: tienda)."
  },
  ensena: [
    { id: "vo", tipo: "vocab", titulo: "Prefijos y sufijos frecuentes",
      intro: "Toca cada palabra.",
      palabras: [
        { fr: "possible → impossible · impossible", es: "posible → imposible" },
        { fr: "légal → illégal · illégal", es: "legal → ilegal" },
        { fr: "inutile · irréel · illisible · insoluble", es: "inútil · irreal · ilegible · sin solución" },
        { fr: "honnête → malhonnête · malhonnête", es: "honesto → deshonesto" },
        { fr: "défaire · le désordre", es: "deshacer · el desorden" },
        { fr: "re- · refaire · réécrire · réessayer", es: "de nuevo · rehacer · reescribir · volver a intentar" },
        { fr: "pré- · prévoir", es: "antes · prever" },
        { fr: "dé- · anti- · un antivol", es: "deshacer · contra · un antirrobo" },
        { fr: "lavable · qu'on peut laver", es: "lavable · que se puede lavar" },
        { fr: "chanteur · jardinier · serveur · pâtissier", es: "cantante · jardinero · mesero · pastelero" },
        { fr: "boulangerie · librairie · épicerie · pâtisserie", es: "panadería · librería · tienda · pastelería" },
        { fr: "une crêperie", es: "una crepería: un lugar donde se venden crepes" },
        { fr: "Il faut réécrire la lettre.", es: "Hay que reescribir la carta." }
      ],
      ej: [["Ce texte est illisible.", "Este texto es ilegible."], ["Il faut refaire l'exercice.", "Hay que rehacer el ejercicio."], ["La boulangerie est à côté de la boucherie.", "La panadería está al lado de la carnicería."]],
      clave: "Delante de l, el prefijo es il-: illégal. Delante de p y b, im-: impossible." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["inlégal", "illégal", "Delante de l: il-."], ["inpossible", "impossible", "Delante de p: im-."], ["deshonnête", "malhonnête", "En francés: mal-."]] }
  ],
  ejemplos: [
    { sit: "possible ↔", resp: "impossible", pasos: ["im- delante de p."], porque: "Negación." },
    { sit: "légal ↔", resp: "illégal", pasos: ["il- delante de l."], porque: "Negación." },
    { sit: "une crêperie", resp: "una crepería", pasos: ["-erie: tienda."], porque: "Lugar." }
  ],
  comprueba: [
    { q: "El contrario de légal es…", o: ["illégal", "inlégal"], a: 0, b: "vo", porque: "il-." },
    { q: "El prefijo re- significa…", o: ["de nuevo", "antes"], a: 0, b: "vo", porque: "refaire." },
    { q: "El sufijo -erie indica…", o: ["una tienda", "una persona"], a: 0, b: "vo", porque: "boulangerie." }
  ],
  practica: [
    { fase: "guiada", c: ["b2ps2-suff"], k: "sort", ask: "¿Persona (-eur / -ier) o lugar (-erie)?", q: "Clasifica.", cats: ["Persona (-eur / -ier)", "Lugar (-erie)"], items: [["chanteur", 0], ["jardinier", 0], ["serveur", 0], ["pâtissier", 0], ["boulangerie", 1], ["librairie", 1], ["épicerie", 1], ["pâtisserie", 1]], pista: "-erie: tienda.", why: "Sufijos." },
    { fase: "guiada", c: ["b2ps2-pref"], k: "choice", ask: "El contrario de possible.", q: "«possible ↔ ___»", o: ["impossible", "inpossible"], a: 0, pista: "Delante de p.", why: "<b>impossible</b>." },
    { fase: "guiada", c: ["b2ps2-pref"], k: "choice", ask: "El contrario de légal.", q: "«légal ↔ ___»", o: ["illégal", "inlégal"], a: 0, pista: "Delante de l.", why: "<b>illégal</b>." },
    { fase: "indep", c: ["b2ps2-suff"], k: "choice", es: true, ask: "«une crêperie» es…", q: "Elige.", o: ["un lugar donde se venden crepes", "una persona que hace crepes"], a: 0, why: "-erie." },
    { fase: "indep", c: ["b2ps2-pref"], k: "fill", ask: "El contrario de honnête.", q: "honnête ↔ ___", acc: ["malhonnête"], why: "<b>malhonnête</b>." },
    { fase: "indep", c: ["b2ps2-suff"], k: "fill", ask: "«que se puede lavar»", q: "Qu'on peut laver → ___", acc: ["lavable"], why: "<b>lavable</b>." },
    { fase: "aplica", c: ["b2ps2-pref"], k: "match", ask: "Une cada prefijo con su sentido.", q: "Prefijo → sentido", pairs: [["re-", "de nuevo"], ["pré-", "antes"], ["dé-", "deshacer"], ["anti-", "contra"]], why: "Prefijos." },
    { fase: "aplica", c: ["b2ps2-pref"], k: "spot", ask: "Encuentra el error.", s: "Stationner ici est [inlégal] , tu vas avoir une amende .", fix: "illégal", why: "<b>illégal</b>." },
    { fase: "aplica", c: ["b2ps2-pref"], k: "spot", ask: "Encuentra el error.", s: "Ce vendeur est [deshonnête] .", fix: "malhonnête", why: "<b>malhonnête</b>." },
    { fase: "dominio", c: ["b2ps2-pref"], k: "order", ask: "Ordena: «Hay que reescribir la carta».", tokens: ["Il faut", "réécrire", "la lettre."], why: "<b>Il faut réécrire la lettre.</b>" },
    { fase: "dominio", c: ["b2ps2-pref"], k: "choice", ask: "«Este texto es ilegible.»", q: "«Ce texte est ___.»", o: ["illisible", "inlisible"], a: 0, why: "<b>illisible</b>." },
    { fase: "dominio", c: ["b2ps2-pref", "b2ps2-suff"], k: "listen", say: "Ce problème semble insoluble, mais il faut réessayer.", acc: ["Ce problème semble insoluble, mais il faut réessayer."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Ce problème semble insoluble, mais il faut réessayer.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

E["b12-verbes-precis"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Remplacer faire, dire, mettre, avoir par des verbes précis",
  objetivo: {
    que: "Vas a sustituir los verbos comodín (faire, dire, mettre, avoir) por verbos precisos en un texto cuidado.",
    corto: "faire du tennis → pratiquer le tennis · avoir son permis → obtenir son permis",
    podras: ["Reemplazar faire por préparer, construire, réaliser, effectuer, pratiquer, commettre.", "Reemplazar dire por affirmer, raconter, exprimer, annoncer, préciser.", "Reemplazar mettre por publier, placer, enfiler, y avoir por obtenir, posséder, disposer de."],
    iconos: ["ic2/lapiz", "ic2/pergamino", "ic2/estrella"],
    previos: ["Los verbos introductores (lección 32) y la nominalización (lección 27)."],
    capacidad: "Ahora tu redacción suena más rica y precisa."
  },
  requiere: R("b2vi-neutre", "b2no-suff"), recupera: ["b2vi-neutre"],
  conceptos: {
    "b2vp2-faire": { n: "faire → préparer (un gâteau), construire (une maison), réaliser, effectuer, pratiquer (un sport), commettre (une erreur)", b: "vo" },
    "b2vp2-autres": { n: "dire → exprimer, raconter, annoncer, préciser; mettre → publier, enfiler; avoir → obtenir, posséder", b: "vo" }
  },
  video: {
    titulo: "Verbos precisos", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "faire → réaliser", seg: [
        { es: "Hola. Un texto cuidado evita los verbos comodín." } ] },
      { v: "frase", filas: [
          { nota: "faire", p: 1, partes: [["faire du tennis → pratiquer le tennis", "-", 1]] },
          { nota: "avoir", p: 2, partes: [["avoir son permis → obtenir son permis", "-", 2]] },
          { nota: "dire", p: 3, partes: [["dire une histoire → raconter une histoire", "-", 3]] } ], seg: [
        { fr: "faire du tennis, pratiquer le tennis", p: 1 }, { fr: "avoir son permis, obtenir son permis", p: 2 }, { fr: "dire une histoire, raconter une histoire", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«En su carta, el director anuncia una noticia muy importante.»", o: ["Dans sa lettre, le directeur annonce une nouvelle très importante.", "Dans sa lettre, le directeur dit une nouvelle très importante."], a: 0,
        bien: "¡Sí! Annoncer una noticia.", mal: "Más preciso: annonce.",
        seg: [ { es: "Pausa. Anuncia." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["pratiquer", "obtenir", "raconter", "exprimer", "commettre", "enfiler"], seg: [
        { es: "El verbo exacto.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Corregir la redacción", img: "bg-biblioteca", yo: "camila",
    escena: "Hugo corrige la redacción de Camila.",
    pj: PJ,
    lineas: [
      ["camila", "J'ai écrit : « Ma sœur a eu son diplôme et elle fait du tennis. »", "Escribí: «Mi hermana tuvo su título y hace tenis»."],
      ["hugo", "Mieux : « Elle a obtenu son diplôme en juin et elle pratique le tennis. »", "Mejor: «Obtuvo su título en junio y practica tenis»."],
      ["camila", "Et « Il a dit son désaccord » ? — « Il a exprimé son désaccord. » J'ai aussi publié une photo sur Instagram.", "¿Y «Dijo su desacuerdo»? — «Expresó su desacuerdo». También publiqué una foto en Instagram."],
      ["hugo", "Parfait. Et dans un texte formel, on commet une erreur. Le chercheur a présenté les résultats et a précisé les limites de l'étude.", "Perfecto. Y en un texto formal, se comete un error. El investigador presentó los resultados y precisó los límites del estudio."]
    ],
    fijate: "Fíjate: a obtenu, pratique, a exprimé, publié, commet, a présenté, a précisé: verbos precisos en lugar de avoir, faire, dire, mettre."
  },
  ensena: [
    { id: "vo", tipo: "vocab", titulo: "Verbos comodín y verbos precisos",
      intro: "Toca cada palabra.",
      palabras: [
        { fr: "faire un gâteau → préparer", es: "preparar un pastel" },
        { fr: "faire une maison → construire · construit", es: "construir una casa" },
        { fr: "faire du tennis → pratiquer le tennis · pratiquer", es: "practicar tenis" },
        { fr: "faire une erreur → commettre une erreur · commettre · a commis · commis · faire un crime → commettre", es: "cometer un error / un crimen" },
        { fr: "réaliser · effectuer · préparer", es: "realizar · efectuar · preparar" },
        { fr: "dire son opinion → exprimer · exprimer", es: "expresar su opinión" },
        { fr: "dire une histoire → raconter une histoire · raconter", es: "contar una historia" },
        { fr: "affirmer · annoncer · annonce · préciser", es: "afirmar · anunciar · anuncia · precisar" },
        { fr: "mettre une photo → publier · publié", es: "publicar una foto · publicado" },
        { fr: "mettre sa veste → enfiler · enfiler", es: "ponerse la chaqueta" },
        { fr: "avoir son permis → obtenir son permis · obtenir", es: "sacar la licencia de conducción" },
        { fr: "avoir des qualités → posséder", es: "poseer cualidades" },
        { fr: "Il a exprimé son désaccord.", es: "Expresó su desacuerdo." }
      ],
      ej: [["Elle a obtenu son diplôme en juin.", "Obtuvo su título en junio."], ["Il pratique la natation depuis l'enfance.", "Practica natación desde niño."], ["L'entreprise a réalisé un gros bénéfice.", "La empresa obtuvo un gran beneficio."]],
      clave: "En un texto formal: commettre une erreur, obtenir un diplôme, pratiquer un sport." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["faire une erreur (en un texto formal)", "commettre une erreur", "Registro cuidado."], ["Le directeur dit une nouvelle.", "Le directeur annonce une nouvelle.", "Verbo preciso."], ["avoir son diplôme (en un CV)", "obtenir son diplôme", "Más preciso."]] }
  ],
  ejemplos: [
    { sit: "faire du tennis →", resp: "pratiquer le tennis", pasos: ["Deporte: pratiquer."], porque: "Precisión." },
    { sit: "avoir son permis →", resp: "obtenir son permis", pasos: ["Diploma: obtenir."], porque: "Precisión." },
    { sit: "dire une histoire →", resp: "raconter une histoire", pasos: ["Historia: raconter."], porque: "Precisión." }
  ],
  comprueba: [
    { q: "faire du tennis →", o: ["pratiquer le tennis", "effectuer le tennis"], a: 0, b: "vo", porque: "Deporte." },
    { q: "avoir son permis →", o: ["obtenir son permis", "posséder son permis"], a: 0, b: "vo", porque: "Diploma." },
    { q: "faire une erreur (formal) →", o: ["commettre une erreur", "réaliser une erreur"], a: 0, b: "vo", porque: "Registro." }
  ],
  practica: [
    { fase: "guiada", c: ["b2vp2-faire", "b2vp2-autres"], k: "sort", ask: "¿Reemplaza a faire o a dire?", q: "Clasifica.", cats: ["faire", "dire"], items: [["réaliser", 0], ["effectuer", 0], ["préparer", 0], ["pratiquer", 0], ["affirmer", 1], ["raconter", 1], ["annoncer", 1], ["préciser", 1]], pista: "Dire: palabras.", why: "Verbos." },
    { fase: "guiada", c: ["b2vp2-faire"], k: "choice", ask: "faire du tennis →", q: "«___»", o: ["pratiquer le tennis", "effectuer le tennis"], a: 0, pista: "Deporte.", why: "<b>pratiquer</b>." },
    { fase: "guiada", c: ["b2vp2-autres"], k: "choice", ask: "avoir son permis →", q: "«___»", o: ["obtenir son permis", "posséder son permis"], a: 0, pista: "Diploma.", why: "<b>obtenir</b>." },
    { fase: "indep", c: ["b2vp2-autres"], k: "choice", ask: "dire une histoire →", q: "«___»", o: ["raconter une histoire", "annoncer une histoire"], a: 0, why: "<b>raconter</b>." },
    { fase: "indep", c: ["b2vp2-autres"], k: "fill", ask: "«publicado» (en lugar de mis)", q: "J'ai ___ une photo sur Instagram.", acc: ["publié", "posté"], why: "<b>publié</b>." },
    { fase: "indep", c: ["b2vp2-faire"], k: "fill", ask: "«construido» (en lugar de fait)", q: "Ils ont ___ une maison au bord du lac.", acc: ["construit", "fait construire"], why: "<b>construit</b>." },
    { fase: "aplica", c: ["b2vp2-faire", "b2vp2-autres"], k: "match", ask: "Une cada expresión con su verbo preciso.", q: "Comodín → preciso", pairs: [["faire un gâteau", "préparer"], ["dire son opinion", "exprimer"], ["mettre sa veste", "enfiler"], ["faire un crime", "commettre"], ["avoir des qualités", "posséder"]], why: "Precisión." },
    { fase: "aplica", c: ["b2vp2-autres"], k: "spot", ask: "Encuentra el verbo poco preciso.", s: "Dans sa lettre , le directeur [dit] une nouvelle très importante : l'usine ferme .", fix: "annonce", why: "<b>annonce</b>." },
    { fase: "aplica", c: ["b2vp2-faire"], k: "spot", ask: "Encuentra el verbo poco preciso (registro formal).", s: "Le comptable a [fait] une erreur grave dans le rapport .", fix: "commis", why: "<b>commis</b>." },
    { fase: "dominio", c: ["b2vp2-autres"], k: "order", ask: "Ordena: «Expresó su desacuerdo».", tokens: ["Il", "a exprimé", "son désaccord."], why: "<b>Il a exprimé son désaccord.</b>" },
    { fase: "dominio", c: ["b2vp2-faire"], k: "choice", ask: "«La empresa obtuvo un gran beneficio.»", q: "«L'entreprise a ___ un gros bénéfice.»", o: ["réalisé", "fait"], a: 0, why: "<b>réalisé</b>." },
    { fase: "dominio", c: ["b2vp2-faire", "b2vp2-autres"], k: "listen", say: "Le chercheur a présenté les résultats et a précisé les limites de l'étude.", acc: ["Le chercheur a présenté les résultats et a précisé les limites de l'étude."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Le chercheur a présenté les résultats et a précisé les limites de l'étude.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Instagram"], previo: [] }
};

E["b12-adjectifs-nuance"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Nuancer avec les adjectifs : bien, bon, pas mal, excellent",
  objetivo: {
    que: "Vas a graduar tus valoraciones con adjetivos (excellent, satisfaisant, correct, médiocre, décevant) y matizadores (plutôt, vraiment).",
    corto: "Le service était correct, sans plus. · C'était vraiment exceptionnel.",
    podras: ["Ordenar los adjetivos de muy positivo a muy negativo: exceptionnel, satisfaisant, moyen, médiocre, lamentable.", "Intensificar o suavizar: assez, plutôt, vraiment, extrêmement, franchement.", "Recordar que los adjetivos absolutos (excellent, parfait) no llevan très."],
    iconos: ["ic2/estrella", "ic2/trofeo", "ic2/nota"],
    previos: ["Dar su opinión sobre una obra (B1.1, lección 62) y atenuar (lección 40)."],
    capacidad: "Ahora escribes una reseña con matices."
  },
  requiere: R("b1cc2-avis", "b2at-limiter"), recupera: ["b1cc2-avis"],
  conceptos: {
    "b2an-echelle": { n: "escala: exceptionnel, remarquable (muy +), satisfaisant, réussi (+), correct, moyen (neutro), médiocre, décevant, lamentable (−)", b: "vo" },
    "b2an-degre": { n: "graduar: assez, plutôt, vraiment, extrêmement; sans plus; adjetivos absolutos sin très (vraiment excellent)", b: "vo" }
  },
  video: {
    titulo: "Matizar con adjetivos", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/estrella", grande: "excellent → lamentable", seg: [
        { es: "Hola. Más allá de bien y mal." } ] },
      { v: "frase", filas: [
          { nota: "muy +", p: 1, partes: [["Ce spectacle était vraiment exceptionnel.", "-", 1]] },
          { nota: "neutro", p: 2, partes: [["Le service était correct, sans plus.", "-", 2]] },
          { nota: "−", p: 3, partes: [["Le film était décevant.", "-", 3]] } ], seg: [
        { fr: "Ce spectacle était vraiment exceptionnel.", p: 1 }, { fr: "Le service était correct, sans plus.", p: 2 }, { fr: "Le film était décevant.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Este restaurante es realmente perfecto, lo recomiendo.»", o: ["Ce restaurant est vraiment parfait, je le recommande.", "Ce restaurant est très parfait, je le recommande."], a: 0,
        bien: "¡Sí! Parfait no lleva très.", mal: "Adjetivo absoluto: vraiment parfait.",
        seg: [ { es: "Pausa. Realmente perfecto." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["exceptionnel", "satisfaisant", "correct", "décevant", "lamentable", "sans plus"], seg: [
        { es: "Nunca «très excellent».", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La reseña del hotel", img: "bg-playa", yo: "camila",
    escena: "Camila y Hugo escriben reseñas de su viaje.",
    pj: PJ,
    lineas: [
      ["camila", "L'hôtel était correct, sans plus. Mais le repas était plutôt bon.", "El hotel estuvo correcto, sin más. Pero la comida estuvo bastante buena."],
      ["hugo", "Oui, mais le service était franchement décevant. Et le film de l'avion était décevant aussi : j'attendais beaucoup mieux.", "Sí, pero el servicio fue francamente decepcionante. Y la película del avión también fue decepcionante: esperaba mucho más."],
      ["camila", "Par contre, le spectacle du soir était vraiment exceptionnel ! Et le restaurant de la plage est vraiment parfait.", "¡En cambio, el espectáculo de la noche fue realmente excepcional! Y el restaurante de la playa es realmente perfecto."],
      ["hugo", "D'accord. Et tes résultats de français sont plutôt satisfaisants, continue !", "De acuerdo. ¡Y tus resultados de francés son bastante satisfactorios, sigue así!"]
    ],
    fijate: "Fíjate: correct, sans plus; plutôt bon; franchement décevant; vraiment exceptionnel; vraiment parfait (no très); plutôt satisfaisants."
  },
  ensena: [
    { id: "vo", tipo: "vocab", titulo: "La escala de los adjetivos",
      intro: "Toca cada palabra.",
      palabras: [
        { fr: "excellent · remarquable · exceptionnel · parfait", es: "excelente · notable · excepcional · perfecto" },
        { fr: "génial (oral)", es: "genial" },
        { fr: "bon · satisfaisant · réussi · agréable", es: "bueno · satisfactorio · logrado · agradable" },
        { fr: "correct · moyen · passable · ordinaire", es: "correcto · regular · pasable · común" },
        { fr: "médiocre · décevant · insuffisant · lamentable", es: "mediocre · decepcionante · insuficiente · lamentable" },
        { fr: "nul (oral)", es: "malísimo" },
        { fr: "assez · plutôt · vraiment · extrêmement · franchement", es: "bastante · más bien · realmente · extremadamente · francamente" },
        { fr: "sans plus · C'était bien, sans plus.", es: "sin más · Estuvo bien, pero nada extraordinario." },
        { fr: "vraiment excellent · vraiment parfait", es: "realmente excelente · realmente perfecto" },
        { fr: "L'hôtel était correct, sans plus.", es: "El hotel estuvo correcto, sin más." }
      ],
      ej: [["Le service était correct, sans plus.", "El servicio fue correcto, sin más."], ["Ses résultats sont plutôt satisfaisants.", "Sus resultados son bastante satisfactorios."], ["Ce spectacle était vraiment exceptionnel.", "Este espectáculo fue realmente excepcional."]],
      clave: "Los adjetivos absolutos (excellent, parfait, exceptionnel) no llevan très: vraiment excellent." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["très excellent", "vraiment excellent / excellent", "Adjetivo absoluto."], ["Ce restaurant est très parfait.", "Ce restaurant est vraiment parfait.", "Sin très."], ["C'était bien, sans moins.", "C'était bien, sans plus.", "Expresión fija."]] }
  ],
  ejemplos: [
    { sit: "¿El más negativo?", resp: "lamentable", pasos: ["médiocre < décevant < lamentable."], porque: "Escala." },
    { sit: "«C'était bien, sans plus.»", resp: "Estuvo bien, pero nada extraordinario.", pasos: ["sans plus."], porque: "Matiz." },
    { sit: "Muy excelente →", resp: "vraiment excellent", pasos: ["Sin très."], porque: "Absoluto." }
  ],
  comprueba: [
    { q: "¿Cuál es el más negativo?", o: ["lamentable", "moyen"], a: 0, b: "vo", porque: "Escala." },
    { q: "«Muy excelente» se dice…", o: ["vraiment excellent", "très excellent"], a: 0, b: "vo", porque: "Absoluto." },
    { q: "«Décevant» significa…", o: ["decepcionante", "divertido"], a: 0, b: "vo", porque: "Negativo." }
  ],
  practica: [
    { fase: "guiada", c: ["b2an-echelle"], k: "sort", ask: "¿Valoración positiva o negativa?", q: "Clasifica.", cats: ["Positiva", "Negativa"], items: [["remarquable", 0], ["réussi", 0], ["agréable", 0], ["satisfaisant", 0], ["médiocre", 1], ["insuffisant", 1], ["décevant", 1], ["lamentable", 1]], pista: "¿Gustó?", why: "Escala." },
    { fase: "guiada", c: ["b2an-echelle"], k: "choice", ask: "¿El más negativo?", q: "«___»", o: ["lamentable", "moyen"], a: 0, pista: "El peor.", why: "<b>lamentable</b>." },
    { fase: "guiada", c: ["b2an-degre"], k: "choice", es: true, ask: "«C'était bien, sans plus.» significa…", q: "Elige.", o: ["Estuvo bien, pero nada extraordinario.", "Estuvo excelente."], a: 0, pista: "sans plus.", why: "Matiz." },
    { fase: "indep", c: ["b2an-degre"], k: "choice", ask: "Muy excelente →", q: "«___»", o: ["vraiment excellent", "très excellent"], a: 0, why: "<b>vraiment excellent</b>." },
    { fase: "indep", c: ["b2an-echelle"], k: "fill", ask: "«decepcionante»", q: "Le film était ___ : j'attendais beaucoup mieux.", acc: ["décevant"], why: "<b>décevant</b>." },
    { fase: "indep", c: ["b2an-degre"], k: "fill", ask: "«bastante»", q: "Tes résultats sont ___ satisfaisants, continue !", acc: ["plutôt", "assez"], why: "<b>plutôt</b>." },
    { fase: "aplica", c: ["b2an-echelle"], k: "match", ask: "Une cada adjetivo con su nivel.", q: "Adjetivo → nivel", pairs: [["exceptionnel", "muy positivo"], ["satisfaisant", "positivo"], ["moyen", "neutro"], ["médiocre", "negativo"]], why: "Escala." },
    { fase: "aplica", c: ["b2an-degre"], k: "spot", ask: "Encuentra el error.", s: "Ce restaurant est [très] parfait , je le recommande .", fix: "vraiment", why: "<b>vraiment</b>." },
    { fase: "aplica", c: ["b2an-degre"], k: "spot", ask: "Encuentra el error.", s: "Le concert était bien , sans [moins] .", fix: "plus", why: "<b>sans plus</b>." },
    { fase: "dominio", c: ["b2an-degre"], k: "order", ask: "Ordena: «El hotel estuvo correcto, sin más».", tokens: ["L'hôtel", "était correct,", "sans plus."], why: "<b>L'hôtel était correct, sans plus.</b>" },
    { fase: "dominio", c: ["b2an-echelle"], k: "choice", ask: "«El servicio fue francamente decepcionante.»", q: "«Le service était franchement ___.»", o: ["décevant", "déçu"], a: 0, why: "<b>décevant</b>." },
    { fase: "dominio", c: ["b2an-echelle", "b2an-degre"], k: "listen", say: "Le repas était plutôt bon, mais le service était franchement décevant.", acc: ["Le repas était plutôt bon, mais le service était franchement décevant."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Le repas était plutôt bon, mais le service était franchement décevant.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

/* ================================ B1.2·15 · Hablar con naturalidad y formalidad ================================ */
E["b12-mots-oral"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Les petits mots de l'oral : bon, ben, du coup, en fait, genre",
  objetivo: {
    que: "Vas a reconocer las muletillas del francés hablado (bon, ben, du coup, en fait, quoi, genre, bref) y a no usarlas en un texto formal.",
    corto: "Il pleuvait, du coup on est restés. · En fait, tu as raison.",
    podras: ["Entender du coup (así que), en fait (en realidad), quoi al final (vamos, o sea).", "Entender bon / ben / bah (bueno, pues), genre (tipo, como) y bref (en resumen).", "Reemplazarlas en lo escrito: par conséquent, en réalité, ainsi, en somme."],
    iconos: ["ic2/microfono", "ic2/audifonos", "ic2/amigos"],
    previos: ["Francés corriente y familiar (B1.1, lección 67)."],
    capacidad: "Ahora entiendes a los jóvenes franceses."
  },
  requiere: R("b1rf2-noms", "b1rf2-verbes"), recupera: ["b1rf2-verbes"],
  conceptos: {
    "b2mo-sens": { n: "du coup (así que), en fait (en realidad), quoi al final (vamos), bon / ben / bah (bueno, pues), genre (tipo), bref (en resumen)", b: "vo" },
    "b2mo-registre": { n: "oral familiar (du coup, genre, ben, en fait) vs. escrito formal (par conséquent, en réalité, ainsi, en somme)", b: "vo" }
  },
  video: {
    titulo: "Las muletillas del oral", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/microfono", grande: "du coup", seg: [
        { es: "Hola. Las palabritas que los franceses dicen todo el tiempo." } ] },
      { v: "dos",
        a: { tag: "oral", fr: "J'ai raté le bus, du coup je suis en retard.", es: "así que" },
        b: { tag: "escrito", fr: "J'ai raté le bus ; par conséquent, je suis en retard.", es: "por consiguiente" },
        seg: [ { es: "Hablando:", p: 1 }, { fr: "J'ai raté le bus, du coup je suis en retard.", p: 1 }, { es: "Escribiendo:", p: 2 }, { fr: "J'ai raté le bus ; par conséquent, je suis en retard.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "En un correo formal: «Su expediente está incompleto, así que no podemos tramitarlo.»", o: ["Votre dossier est incomplet, donc nous ne pouvons pas le traiter.", "Votre dossier est incomplet, genre nous ne pouvons pas le traiter."], a: 0,
        bien: "¡Sí! Genre es muy familiar.", mal: "En formal: donc, par conséquent.",
        seg: [ { es: "Pausa. Formal." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["du coup", "en fait", "quoi", "genre", "bref", "par conséquent"], seg: [
        { es: "Para escuchar, no para escribir.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La salida", img: "bg-cafe", yo: "camila",
    escena: "Hugo y Camila organizan una salida.",
    pj: PJ,
    lineas: [
      ["hugo", "Bon, ben, du coup, on se retrouve à quelle heure ?", "Bueno, pues, entonces, ¿a qué hora nos vemos?"],
      ["camila", "Ben, je sais pas, moi. Hier il pleuvait, du coup on est restés à la maison.", "Pues no sé, yo. Ayer llovía, así que nos quedamos en casa."],
      ["hugo", "En fait, tu as raison, il va pleuvoir. Le restaurant d'hier ? C'était trop cher, quoi.", "En realidad tienes razón, va a llover. ¿El restaurante de ayer? Era demasiado caro, o sea."],
      ["camila", "Il y avait genre cinquante personnes ! Bref, on va au cinéma.", "¡Había como cincuenta personas! En resumen, vamos al cine."]
    ],
    fijate: "Fíjate: bon, ben, du coup, en fait, quoi (al final), genre, bref: muletillas del oral."
  },
  ensena: [
    { id: "vo", tipo: "vocab", titulo: "Muletillas y sus equivalentes formales",
      intro: "Toca cada palabra.",
      palabras: [
        { fr: "du coup", es: "así que, por eso" },
        { fr: "en fait", es: "en realidad" },
        { fr: "bon · ben · bah · Ben", es: "bueno · pues" },
        { fr: "quoi (al final de la frase)", es: "vamos, o sea" },
        { fr: "genre", es: "tipo, como" },
        { fr: "bref", es: "en resumen" },
        { fr: "enfin", es: "bueno, quiero decir" },
        { fr: "par conséquent · donc", es: "por consiguiente · entonces (formal)" },
        { fr: "en réalité · ainsi · en somme", es: "en realidad · así · en suma (formal)" },
        { fr: "C'était trop cher, quoi.", es: "Era demasiado caro, o sea." },
        { fr: "En fait, tu as raison.", es: "En realidad, tienes razón." }
      ],
      ej: [["Il pleuvait, du coup on est restés à la maison.", "Llovía, así que nos quedamos en casa."], ["En fait, je n'ai pas bien compris.", "En realidad, no lo entendí bien."], ["Ben, je sais pas, moi.", "Pues no sé, yo."]],
      clave: "En un correo formal, evita du coup y genre: usa par conséquent, donc." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Du coup (en un correo formal)", "Par conséquent / C'est pourquoi", "En formal, evita du coup."], ["…, genre nous ne pouvons pas… (formal)", "…, donc nous ne pouvons pas…", "Genre es muy familiar."], ["en fait = de hecho (siempre)", "en fait = en realidad (rectifica)", "Corrige lo anterior."]] }
  ],
  ejemplos: [
    { sit: "«J'ai raté le bus, du coup je suis en retard.»", resp: "así que", pasos: ["du coup = consecuencia."], porque: "Oral." },
    { sit: "«En fait, je préfère rester.»", resp: "en realidad", pasos: ["Rectifica."], porque: "Oral." },
    { sit: "Registro formal", resp: "par conséquent", pasos: ["En vez de du coup."], porque: "Escrito." }
  ],
  comprueba: [
    { q: "«Du coup» significa…", o: ["así que", "de golpe"], a: 0, b: "vo", porque: "Consecuencia." },
    { q: "«En fait» significa…", o: ["en realidad", "en efecto"], a: 0, b: "vo", porque: "Rectifica." },
    { q: "En un correo formal se usa…", o: ["par conséquent", "du coup"], a: 0, b: "vo", porque: "Registro." }
  ],
  practica: [
    { fase: "guiada", c: ["b2mo-registre"], k: "sort", ask: "¿Oral familiar o escrito formal?", q: "Clasifica.", cats: ["Oral familiar", "Escrito formal"], items: [["du coup", 0], ["genre", 0], ["ben", 0], ["en fait", 0], ["par conséquent", 1], ["en réalité", 1], ["ainsi", 1], ["en somme", 1]], pista: "¿Lo dirías en una carta?", why: "Registro." },
    { fase: "guiada", c: ["b2mo-sens"], k: "choice", es: true, ask: "«J'ai raté le bus, du coup je suis en retard.» Du coup significa…", q: "Elige.", o: ["así que", "de golpe"], a: 0, pista: "Consecuencia.", why: "Du coup." },
    { fase: "guiada", c: ["b2mo-sens"], k: "choice", es: true, ask: "«En fait, je préfère rester.» En fait significa…", q: "Elige.", o: ["en realidad", "en efecto"], a: 0, pista: "Rectifica.", why: "En fait." },
    { fase: "indep", c: ["b2mo-registre"], k: "choice", ask: "Registro formal: «así que».", q: "«___»", o: ["par conséquent", "du coup"], a: 0, why: "<b>par conséquent</b>." },
    { fase: "indep", c: ["b2mo-sens"], k: "fill", ask: "«vamos, o sea» (al final)", q: "C'était trop cher, ___ .", acc: ["quoi"], why: "<b>quoi</b>." },
    { fase: "indep", c: ["b2mo-sens"], k: "fill", ask: "«pues» (oral)", q: "___ , je ne sais pas trop.", acc: ["Ben", "Bah", "Bon", "ben", "bah", "bon"], why: "<b>Ben</b>." },
    { fase: "aplica", c: ["b2mo-sens"], k: "match", ask: "Une cada muletilla con su sentido.", q: "Francés → español", pairs: [["du coup", "así que"], ["en fait", "en realidad"], ["genre", "tipo, como"], ["bref", "en resumen"]], why: "Muletillas." },
    { fase: "aplica", c: ["b2mo-registre"], k: "spot", ask: "Encuentra la palabra demasiado familiar.", s: "Madame , votre dossier est incomplet , [genre] nous ne pouvons pas le traiter .", fix: "donc", why: "<b>donc</b>." },
    { fase: "aplica", c: ["b2mo-registre"], k: "spot", ask: "Encuentra la palabra demasiado familiar.", s: "Monsieur le Directeur , [du coup] je vous envoie mon dossier .", fix: "par conséquent", why: "<b>par conséquent</b>." },
    { fase: "dominio", c: ["b2mo-sens"], k: "order", ask: "Ordena: «En realidad, tienes razón».", tokens: ["En fait,", "tu as", "raison."], why: "<b>En fait, tu as raison.</b>" },
    { fase: "dominio", c: ["b2mo-sens"], k: "choice", ask: "«Había como cincuenta personas.» (oral)", q: "«Il y avait ___ cinquante personnes !»", o: ["genre", "bref"], a: 0, why: "<b>genre</b>." },
    { fase: "dominio", c: ["b2mo-sens", "b2mo-registre"], k: "listen", say: "Bon, ben, du coup, on se retrouve à quelle heure ?", acc: ["Bon, ben, du coup, on se retrouve à quelle heure ?", "Bon, ben, du coup, on se retrouve à quelle heure?"], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Bon, ben, du coup, on se retrouve à quelle heure ?</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

E["b12-registre-soutenu"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Le registre soutenu : quelques équivalents",
  objetivo: {
    que: "Vas a reconocer y usar equivalentes cultos: débuter, achever, solliciter, demeurer, un ouvrage, Puis-je… ?, Je ne saurais…",
    corto: "Puis-je solliciter votre aide ? · Je ne saurais vous dire.",
    podras: ["Usar verbos cultos: débuter (commencer), achever (finir), solliciter (demander), demeurer (vivre).", "Usar nombres cultos: une demeure, un ouvrage (libro), un différend (desacuerdo).", "Usar la sintaxis culta: Puis-je… ?, Je ne saurais dire, y conectores como néanmoins, en outre."],
    iconos: ["ic2/corona", "ic2/pergamino", "ic2/libro"],
    previos: ["La interrogación con inversión (B1.1, lección 11) y la carta de motivación (lección 37)."],
    capacidad: "Ahora entiendes un discurso o una carta muy formal."
  },
  requiere: R("b1in-registre", "b2lm-formules"), recupera: ["b1in-registre"],
  conceptos: {
    "b2rs-mots": { n: "equivalentes cultos: débuter, achever, solliciter, demeurer; une demeure, un ouvrage, un différend; néanmoins, en outre", b: "vo" },
    "b2rs-syntaxe": { n: "sintaxis culta: Puis-je… ? (no «peux-je»), Je ne saurais dire (negación sin pas)", b: "vo" }
  },
  video: {
    titulo: "El registro culto", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/corona", grande: "Puis-je… ?", seg: [
        { es: "Hola. El francés más elegante." } ] },
      { v: "dos",
        a: { tag: "corriente", fr: "Je peux entrer ?", es: "¿puedo entrar?" },
        b: { tag: "culto", fr: "Puis-je entrer ?", es: "¿me permite entrar?" },
        seg: [ { es: "Corriente:", p: 1 }, { fr: "Je peux entrer ?", p: 1 }, { es: "Culto:", p: 2 }, { fr: "Puis-je entrer ?", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«¿Puedo hacerle una pregunta, señora ministra?»", o: ["Puis-je vous poser une question, Madame la Ministre ?", "Peux-je vous poser une question, Madame la Ministre ?"], a: 0,
        bien: "¡Sí! Puis-je.", mal: "La inversión de je peux es puis-je.",
        seg: [ { es: "Pausa. ¿Puedo?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["débuter", "achever", "solliciter", "un ouvrage", "Puis-je", "demeurer"], seg: [
        { es: "Nunca «peux-je».", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La carta al ministerio", img: "bg-biblioteca", yo: "camila",
    escena: "Camila escribe una carta muy formal.",
    pj: PJ,
    lineas: [
      ["camila", "« Madame la Ministre, puis-je solliciter un entretien afin de vous présenter mon projet ? »", "«Señora ministra: ¿puedo solicitar una entrevista para presentarle mi proyecto?»"],
      ["hugo", "Très élégant ! Tu peux aussi écrire : « Mon ouvrage débute par une analyse… »", "¡Muy elegante! También puedes escribir: «Mi obra comienza con un análisis…»"],
      ["camila", "« … et s'achève par une proposition. » Et mon professeur demeure à Paris depuis vingt ans.", "«… y concluye con una propuesta». Y mi profesor reside en París desde hace veinte años."],
      ["hugo", "Quand on te demande une date que tu ne connais pas : « Je ne saurais vous dire. »", "Cuando te pregunten una fecha que no sabes: «No sabría decirle»."]
    ],
    fijate: "Fíjate: puis-je solliciter, un ouvrage, débute, s'achève, demeure, je ne saurais vous dire: registro culto."
  },
  ensena: [
    { id: "vo", tipo: "vocab", titulo: "Equivalentes cultos",
      intro: "Toca cada palabra.",
      palabras: [
        { fr: "commencer → débuter · débuter", es: "comenzar" },
        { fr: "finir → achever · achever", es: "terminar, concluir" },
        { fr: "demander → solliciter · solliciter · solliciter un poste", es: "solicitar · solicitar un puesto" },
        { fr: "vivre → demeurer · demeure · demeurer", es: "residir · reside" },
        { fr: "une maison → une demeure", es: "una residencia" },
        { fr: "un livre → un ouvrage · ouvrage · un ouvrage", es: "una obra, un libro" },
        { fr: "un désaccord → un différend", es: "un desacuerdo" },
        { fr: "cependant → néanmoins · en outre · dès lors", es: "sin embargo · además · desde entonces" },
        { fr: "commencer · finir · livre · demander", es: "palabras corrientes" },
        { fr: "Puis-je entrer ? · Puis-je", es: "¿Puedo entrar? (culto)" },
        { fr: "Je ne saurais vous dire.", es: "No sabría decirle." }
      ],
      ej: [["Puis-je solliciter votre aide ?", "¿Puedo solicitar su ayuda?"], ["Il demeure à Paris depuis vingt ans.", "Reside en París desde hace veinte años."], ["Je ne saurais vous dire.", "No sabría decirle."]],
      clave: "La inversión de je peux es puis-je, nunca «peux-je»." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Peux-je vous aider ?", "Puis-je vous aider ?", "Inversión de je peux: Puis-je."], ["Je ne saurais pas vous dire. (culto)", "Je ne saurais vous dire.", "Negación sin pas en registro culto."], ["Il demeure à Paris (= se demora en París)", "Il demeure à Paris (= reside en París)", "Demeurer: residir o quedarse."]] }
  ],
  ejemplos: [
    { sit: "finir →", resp: "achever", pasos: ["Culto."], porque: "Verbo." },
    { sit: "demander un poste →", resp: "solliciter un poste", pasos: ["Culto."], porque: "Verbo." },
    { sit: "«¿Puedo entrar?» (culto)", resp: "Puis-je entrer ?", pasos: ["Inversión."], porque: "Sintaxis." }
  ],
  comprueba: [
    { q: "El equivalente culto de finir es…", o: ["achever", "débuter"], a: 0, b: "vo", porque: "Terminar." },
    { q: "«Un ouvrage» es…", o: ["una obra, un libro", "un obrero"], a: 0, b: "vo", porque: "Culto." },
    { q: "La inversión de je peux es…", o: ["Puis-je", "Peux-je"], a: 0, b: "vo", porque: "Culto." }
  ],
  practica: [
    { fase: "guiada", c: ["b2rs-mots"], k: "sort", ask: "¿Corriente o culto?", q: "Clasifica.", cats: ["Corriente", "Culto"], items: [["commencer", 0], ["finir", 0], ["livre", 0], ["demander", 0], ["débuter", 1], ["achever", 1], ["ouvrage", 1], ["solliciter", 1]], pista: "¿Lo dirías en un discurso?", why: "Registro." },
    { fase: "guiada", c: ["b2rs-mots"], k: "choice", ask: "finir →", q: "«___»", o: ["achever", "débuter"], a: 0, pista: "Terminar.", why: "<b>achever</b>." },
    { fase: "guiada", c: ["b2rs-mots"], k: "choice", ask: "demander un poste →", q: "«___»", o: ["solliciter un poste", "achever un poste"], a: 0, pista: "Pedir.", why: "<b>solliciter</b>." },
    { fase: "indep", c: ["b2rs-syntaxe"], k: "choice", ask: "«¿Puedo entrar?» (culto)", q: "«___»", o: ["Puis-je entrer ?", "Peux-je entrer ?"], a: 0, why: "<b>Puis-je</b>." },
    { fase: "indep", c: ["b2rs-mots"], k: "fill", ask: "«libro» (culto)", q: "un livre → un ___", acc: ["ouvrage"], why: "<b>ouvrage</b>." },
    { fase: "indep", c: ["b2rs-mots"], k: "fill", ask: "«reside» (culto)", q: "Il ___ dans une belle maison.", acc: ["demeure"], why: "<b>demeure</b>." },
    { fase: "aplica", c: ["b2rs-mots"], k: "match", ask: "Une cada palabra corriente con su equivalente culto.", q: "Corriente → culto", pairs: [["commencer", "débuter"], ["maison", "demeure"], ["désaccord", "différend"], ["cependant", "néanmoins"]], why: "Registro." },
    { fase: "aplica", c: ["b2rs-syntaxe"], k: "spot", ask: "Encuentra el error.", s: "[Peux-je] vous poser une question , Madame la Ministre ?", fix: "Puis-je", why: "<b>Puis-je</b>." },
    { fase: "aplica", c: ["b2rs-syntaxe"], k: "spot", ask: "Encuentra el error (registro culto).", s: "Je ne saurais [pas vous dire] .", fix: "vous dire", why: "Sin pas: <b>Je ne saurais vous dire.</b>" },
    { fase: "dominio", c: ["b2rs-syntaxe"], k: "order", ask: "Ordena: «No sabría decirle».", tokens: ["Je ne", "saurais", "vous dire."], why: "<b>Je ne saurais vous dire.</b>" },
    { fase: "dominio", c: ["b2rs-mots"], k: "choice", ask: "«Mi obra comienza con un análisis.»", q: "«Mon ouvrage ___ par une analyse.»", o: ["débute", "achève"], a: 0, why: "<b>débute</b>." },
    { fase: "dominio", c: ["b2rs-mots", "b2rs-syntaxe"], k: "listen", say: "Puis-je solliciter un entretien afin de vous présenter mon projet ?", acc: ["Puis-je solliciter un entretien afin de vous présenter mon projet ?", "Puis-je solliciter un entretien afin de vous présenter mon projet?"], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Puis-je solliciter un entretien afin de vous présenter mon projet ?</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paris"], previo: [] }
};

E["b12-telephone-pro"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Téléphoner dans un contexte professionnel",
  objetivo: {
    que: "Vas a llamar y contestar por teléfono en el trabajo con las fórmulas fijas.",
    corto: "Pourrais-je parler à M. Martin ? · C'est de la part de qui ? · Ne quittez pas.",
    podras: ["Presentarte y pedir a alguien: Ici Claire Martin. Pourrais-je parler à… ?", "Atender: C'est de la part de qui ? Ne quittez pas, je vous le passe.", "Explicar una ausencia y tomar un mensaje: Il est en réunion / en ligne. Voulez-vous laisser un message ? Il vous rappellera."],
    iconos: ["ic2/movil", "ic2/laptop", "ic2/nota"],
    previos: ["El condicional de cortesía (B1.1, lección 22) y tomar la palabra (B1.1, lección 51)."],
    capacidad: "Ahora haces una llamada profesional en francés sin miedo."
  },
  requiere: R("b1cp-demander", "b1pp-prendre"), recupera: ["b1cp-demander"],
  conceptos: {
    "b2tp-appel": { n: "quien llama: Ici… (presentarse), Pourrais-je parler à… ?, Je souhaiterais laisser un message, Pourriez-vous lui demander de me rappeler ?", b: "vo" },
    "b2tp-accueil": { n: "quien atiende: C'est de la part de qui ?, Ne quittez pas, Je vous le passe; il est en réunion / en ligne / absent; Il vous rappellera", b: "vo" }
  },
  video: {
    titulo: "El teléfono en el trabajo", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/movil", grande: "Ne quittez pas.", seg: [
        { es: "Hola. Al teléfono, todo son fórmulas." } ] },
      { v: "dos",
        a: { tag: "quien llama", fr: "Pourrais-je parler à M. Martin ?", es: "¿podría hablar con…?" },
        b: { tag: "quien atiende", fr: "C'est de la part de qui ?", es: "¿de parte de quién?" },
        seg: [ { es: "Quien llama:", p: 1 }, { fr: "Pourrais-je parler à M. Martin ?", p: 1 }, { es: "Quien atiende:", p: 2 }, { fr: "C'est de la part de qui ?", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Buenos días, quisiera hablar con el señor Bernard, por favor.»", o: ["Bonjour, je voudrais parler à Monsieur Bernard, s'il vous plaît.", "Bonjour, je voudrais parlé à Monsieur Bernard, s'il vous plaît."], a: 0,
        bien: "¡Sí! Parler, en infinitivo.", mal: "Después de voudrais: infinitivo, parler.",
        seg: [ { es: "Pausa. Hablar con." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["C'est de la part de qui ?", "Ne quittez pas.", "en ligne", "en réunion", "laisser un message"], seg: [
        { es: "De la part, no de la parte.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La llamada", img: "bg-universidad", yo: "camila",
    escena: "Camila llama a una empresa por sus prácticas.",
    pj: PJ,
    lineas: [
      ["camila", "Bonjour, ici Camila Rojas. Pourrais-je parler au responsable des ventes ?", "Buenos días, habla Camila Rojas. ¿Podría hablar con el responsable de ventas?"],
      ["hugo", "C'est de la part de qui ? — Camila Rojas. — Ne quittez pas, je vous le passe… Désolé, il est en ligne.", "¿De parte de quién? — Camila Rojas. — No cuelgue, se lo paso… Lo siento, está en otra línea."],
      ["camila", "Je rappellerai plus tard. Ou je souhaiterais laisser un message.", "Volveré a llamar más tarde. O quisiera dejar un mensaje."],
      ["hugo", "Bien sûr. Voulez-vous laisser un message ? — Pourriez-vous lui demander de me rappeler ? — Il vous rappellera.", "Claro. ¿Quiere dejar un mensaje? — ¿Podría pedirle que me devuelva la llamada? — Él la llamará."]
    ],
    fijate: "Fíjate: ici…, pourrais-je parler à, c'est de la part de qui, ne quittez pas, je vous le passe, en ligne, laisser un message, rappeler."
  },
  ensena: [
    { id: "vo", tipo: "vocab", titulo: "Fórmulas del teléfono profesional",
      intro: "Toca cada palabra.",
      palabras: [
        { fr: "Ici Paul Durand. · Ici Marc, de la société Lumen.", es: "Habla Paul Durand. · Habla Marc, de la empresa Lumen." },
        { fr: "Pourrais-je parler à… ? · Pourrais-je parler à Mme Roy ?", es: "¿Podría hablar con…?" },
        { fr: "parler à quelqu'un · parler", es: "hablar con alguien" },
        { fr: "C'est de la part de qui ?", es: "¿De parte de quién?" },
        { fr: "Ne quittez pas.", es: "No cuelgue." },
        { fr: "Je vous le passe. · Je vous la passe. · passe", es: "Se lo paso. · Se la paso." },
        { fr: "Il est en ligne. · en ligne", es: "Está hablando por otra línea." },
        { fr: "Il est en réunion. · en réunion · Elle est absente aujourd'hui.", es: "Está en una reunión. · Hoy no vino." },
        { fr: "Voulez-vous laisser un message ? · laisser un message · message", es: "¿Quiere dejar un mensaje? · dejar un mensaje" },
        { fr: "Je souhaiterais laisser un message. · Je rappellerai plus tard.", es: "Quisiera dejar un mensaje. · Volveré a llamar más tarde." },
        { fr: "Il vous rappellera.", es: "Él lo llamará." },
        { fr: "Pourriez-vous lui demander de me rappeler ?", es: "¿Podría pedirle que me devuelva la llamada?" }
      ],
      ej: [["C'est de la part de qui ?", "¿De parte de quién?"], ["Ne quittez pas, je vous passe le directeur.", "No cuelgue, le paso con el director."], ["Pourriez-vous lui demander de me rappeler ?", "¿Podría pedirle que me devuelva la llamada?"]],
      clave: "«De parte de quién» = C'est de la part de qui ? (sin «parte»)." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["C'est de la parte de qui ?", "C'est de la part de qui ?", "de la part de."], ["Ne coupez pas. (= no cuelgue)", "Ne quittez pas.", "Fórmula fija."], ["Je suis Claire Martin. (al teléfono)", "Ici Claire Martin.", "Al teléfono uno se presenta con ici."]] }
  ],
  ejemplos: [
    { sit: "«¿De parte de quién?»", resp: "C'est de la part de qui ?", pasos: ["de la part de."], porque: "Atender." },
    { sit: "«No cuelgue.»", resp: "Ne quittez pas.", pasos: ["Fórmula fija."], porque: "Atender." },
    { sit: "«Désolé, il est en ligne.»", resp: "Está hablando por otra línea.", pasos: ["en ligne."], porque: "Ausencia." }
  ],
  comprueba: [
    { q: "«¿De parte de quién?» se dice…", o: ["C'est de la part de qui ?", "C'est de la parte de qui ?"], a: 0, b: "vo", porque: "Fórmula." },
    { q: "«No cuelgue» se dice…", o: ["Ne quittez pas.", "Ne coupez pas."], a: 0, b: "vo", porque: "Fórmula." },
    { q: "«Il est en ligne» significa que…", o: ["está hablando por otra línea", "está conectado a Internet"], a: 0, b: "vo", porque: "Teléfono." }
  ],
  practica: [
    { fase: "guiada", c: ["b2tp-appel", "b2tp-accueil"], k: "sort", ask: "¿Lo dice quien llama o quien atiende?", q: "Clasifica.", cats: ["Quien llama", "Quien atiende"], items: [["Pourrais-je parler à Mme Roy ?", 0], ["Je rappellerai plus tard.", 0], ["Ici Marc, de la société Lumen.", 0], ["Je souhaiterais laisser un message.", 0], ["C'est de la part de qui ?", 1], ["Ne quittez pas.", 1], ["Je vous la passe.", 1], ["Elle est absente aujourd'hui.", 1]], pista: "¿Quién pide?", why: "Roles." },
    { fase: "guiada", c: ["b2tp-accueil"], k: "choice", ask: "«¿De parte de quién?»", q: "«___»", o: ["C'est de la part de qui ?", "C'est de la parte de qui ?"], a: 0, pista: "part.", why: "<b>de la part de</b>." },
    { fase: "guiada", c: ["b2tp-accueil"], k: "choice", ask: "«No cuelgue.»", q: "«___»", o: ["Ne quittez pas.", "Ne coupez pas."], a: 0, pista: "Fórmula fija.", why: "<b>Ne quittez pas.</b>" },
    { fase: "indep", c: ["b2tp-accueil"], k: "choice", es: true, ask: "«Désolé, il est en ligne.» significa que…", q: "Elige.", o: ["está hablando por otra línea", "está conectado a Internet"], a: 0, why: "En ligne." },
    { fase: "indep", c: ["b2tp-accueil"], k: "fill", ask: "«mensaje»", q: "Voulez-vous laisser un ___ ?", acc: ["message"], why: "<b>message</b>." },
    { fase: "indep", c: ["b2tp-accueil"], k: "fill", ask: "«paso» (passer)", q: "Je vous le ___ tout de suite.", acc: ["passe"], why: "<b>passe</b>." },
    { fase: "aplica", c: ["b2tp-appel", "b2tp-accueil"], k: "match", ask: "Une cada fórmula con su función.", q: "Fórmula → función", pairs: [["Ici Paul Durand.", "presentarse"], ["Pourrais-je parler à… ?", "pedir a alguien"], ["Il est en réunion.", "ausencia"], ["Il vous rappellera.", "promesa de llamada"]], why: "Funciones." },
    { fase: "aplica", c: ["b2tp-appel"], k: "spot", ask: "Encuentra el error.", s: "Bonjour , je voudrais [hablar] à Monsieur Bernard , s'il vous plaît .", fix: "parler", why: "<b>parler</b>." },
    { fase: "aplica", c: ["b2tp-accueil"], k: "spot", ask: "Encuentra el error.", s: "C'est de la [parte] de qui ?", fix: "part", why: "<b>part</b>." },
    { fase: "dominio", c: ["b2tp-appel"], k: "order", ask: "Ordena: «¿Podría pedirle que me devuelva la llamada?».", tokens: ["Pourriez-vous", "lui demander", "de me rappeler ?"], why: "<b>Pourriez-vous lui demander de me rappeler ?</b>" },
    { fase: "dominio", c: ["b2tp-appel"], k: "choice", ask: "Presentarse al teléfono.", q: "«___ Claire Martin.»", o: ["Ici", "Voici"], a: 0, why: "<b>Ici</b>." },
    { fase: "dominio", c: ["b2tp-appel", "b2tp-accueil"], k: "listen", say: "Bonjour, ici Claire Martin. Pourrais-je parler au responsable des ventes ?", acc: ["Bonjour, ici Claire Martin. Pourrais-je parler au responsable des ventes ?", "Bonjour, ici Claire Martin. Pourrais-je parler au responsable des ventes?"], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Bonjour, ici Claire Martin. Pourrais-je parler au responsable des ventes ?</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Camila Rojas", "Claire Martin", "Lumen", "Bernard", "Roy"], previo: [] }
};

/* ================================ B1.2·16 · Ortografía y norma ================================ */
E["b12-ponctuation"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "La ponctuation française : espaces, guillemets et majuscules",
  objetivo: {
    que: "Vas a puntuar como en francés: espacio antes de ; : ! ?, comillas « », sin ¿ ¡, y mayúsculas solo para los habitantes.",
    corto: "Tu viens ce soir ? · Il a dit : « Je reviens. » · Les Français parlent français.",
    podras: ["Poner un espacio antes de ; : ! ? y no usar ¿ ¡.", "Usar las comillas francesas « … » con espacios interiores.", "Escribir en minúscula los días, los meses, los idiomas y los adjetivos de nacionalidad; en mayúscula, los habitantes: un Français."],
    iconos: ["ic2/lapiz", "ic2/pergamino", "ic2/bandera"],
    previos: ["El discurso indirecto (lección 2) y el correo formal (lección 8)."],
    capacidad: "Ahora tus textos se ven escritos por un francés."
  },
  requiere: R("b2di-question", "b2ce-formules"), recupera: ["b2ce-formules"],
  conceptos: {
    "b2po-signes": { n: "espacio antes de ; : ! ?; sin ¿ ¡ (Tu viens ?); comillas « … » con espacios", b: "vo" },
    "b2po-maj": { n: "mayúscula: habitantes (les Italiens, un Belge); minúscula: idiomas, adjetivos, días y meses (le français, un vin italien, le lundi 3 mars)", b: "vo" }
  },
  video: {
    titulo: "La puntuación francesa", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "« … » · ?", seg: [
        { es: "Hola. Pequeñas diferencias que se notan mucho." } ] },
      { v: "frase", filas: [
          { nota: "pregunta", p: 1, partes: [["Tu viens ce soir ?", "-", 1]] },
          { nota: "cita", p: 2, partes: [["Il a dit : « Je reviens tout de suite. »", "-", 2]] },
          { nota: "mayúscula", p: 3, partes: [["Les Français parlent français.", "-", 3]] } ], seg: [
        { fr: "Tu viens ce soir ?", p: 1 }, { fr: "Il a dit : Je reviens tout de suite.", p: 2 }, { fr: "Les Français parlent français.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Nos vamos de vacaciones en agosto con unos amigos.»", o: ["Nous partons en vacances en août avec des amis.", "Nous partons en vacances en Août avec des amis."], a: 0,
        bien: "¡Sí! Los meses van en minúscula.", mal: "Mes: minúscula, août.",
        seg: [ { es: "Pausa. Agosto." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["les Italiens", "le français", "en février", "le mardi", "Tu viens ?"], seg: [
        { es: "Habitantes: mayúscula; idiomas: minúscula.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Corregir el correo", img: "bg-biblioteca", yo: "camila",
    escena: "Hugo corrige la puntuación de Camila.",
    pj: PJ,
    lineas: [
      ["camila", "J'ai écrit : « ¿Tu viens le Lundi 3 Mars? »", "Escribí: «¿Tu viens le Lundi 3 Mars?»"],
      ["hugo", "Trois erreurs ! Pas de ¿, minuscule pour lundi et mars, et un espace avant le point d'interrogation : « Tu viens le lundi 3 mars ? »", "¡Tres errores! Sin ¿, minúscula en lundi y mars, y un espacio antes del signo de interrogación: «Tu viens le lundi 3 mars ?»"],
      ["camila", "Et « Les espagnols parlent Espagnol » ? — « Les Espagnols parlent espagnol. » Les habitants avec une majuscule, la langue avec une minuscule.", "¿Y «Les espagnols parlent Espagnol»? — «Les Espagnols parlent espagnol». Los habitantes con mayúscula, el idioma con minúscula."],
      ["hugo", "Exactement. Les Espagnols et les Français dînent à des heures très différentes. Et les Canadiens adorent le hockey !", "Exacto. Los españoles y los franceses cenan a horas muy distintas. ¡Y a los canadienses les encanta el hockey!"]
    ],
    fijate: "Fíjate: Tu viens… ? (espacio, sin ¿); lundi, mars (minúscula); « … »; les Espagnols (habitantes), espagnol (idioma)."
  },
  ensena: [
    { id: "vo", tipo: "vocab", titulo: "Signos y mayúsculas",
      intro: "Toca cada palabra.",
      palabras: [
        { fr: "Tu viens ? · Tu viens ce soir ?", es: "¿Vienes? (sin ¿, con espacio antes de ?)" },
        { fr: "Attention ! · Voici la liste : du pain ; du lait.", es: "espacio antes de ; : ! ?" },
        { fr: "« Je suis prêt. » · Il a dit : « Je suis prêt. »", es: "comillas francesas con espacios interiores" },
        { fr: "un Belge · les Suisses · une Parisienne · les Allemands · les Italiens · les Canadiens · Canadiens", es: "habitantes: mayúscula" },
        { fr: "le belge (idioma) · le français · espagnol", es: "idiomas: minúscula" },
        { fr: "un chocolat suisse · un vin italien · la cuisine française", es: "adjetivos de nacionalidad: minúscula" },
        { fr: "en février · le mardi · le lundi 3 mars · août", es: "meses y días: minúscula" },
        { fr: "Les Français parlent français.", es: "Los franceses hablan francés." }
      ],
      ej: [["Tu viens ce soir ?", "¿Vienes esta noche?"], ["Il a dit : « Je reviens tout de suite. »", "Dijo: «Vuelvo enseguida»."], ["Les Français parlent français.", "Los franceses hablan francés."]],
      clave: "Habitantes con mayúscula (un Français); idioma y adjetivo con minúscula (le français, un vin français)." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Les français aiment le Fromage.", "Les Français aiment le fromage.", "Habitantes con mayúscula; nombres comunes, minúscula."], ["¿Tu viens?", "Tu viens ?", "Sin ¿ y con espacio."], ["en Août", "en août", "Meses en minúscula."]] }
  ],
  ejemplos: [
    { sit: "Pregunta", resp: "Tu viens ?", pasos: ["Sin ¿.", "Espacio antes de ?"], porque: "Signos." },
    { sit: "Los italianos", resp: "les Italiens", pasos: ["Habitantes: mayúscula."], porque: "Mayúscula." },
    { sit: "El lunes 3 de marzo", resp: "le lundi 3 mars", pasos: ["Días y meses: minúscula."], porque: "Minúscula." }
  ],
  comprueba: [
    { q: "Antes de ? en francés va…", o: ["un espacio", "nada"], a: 0, b: "vo", porque: "Tu viens ?" },
    { q: "«Los italianos» se escribe…", o: ["les Italiens", "les italiens"], a: 0, b: "vo", porque: "Habitantes." },
    { q: "El idioma francés se escribe…", o: ["le français", "le Français"], a: 0, b: "vo", porque: "Minúscula." }
  ],
  practica: [
    { fase: "guiada", c: ["b2po-maj"], k: "sort", ask: "¿Mayúscula o minúscula?", q: "Clasifica.", cats: ["Mayúscula", "Minúscula"], items: [["un Belge", 0], ["les Suisses", 0], ["une Parisienne", 0], ["les Allemands", 0], ["le belge (idioma)", 1], ["un chocolat suisse", 1], ["en février", 1], ["le mardi", 1]], pista: "Solo los habitantes.", why: "Mayúsculas." },
    { fase: "guiada", c: ["b2po-signes"], k: "choice", ask: "Pregunta: «¿Vienes?»", q: "«___»", o: ["Tu viens ?", "¿Tu viens?"], a: 0, pista: "Sin ¿.", why: "<b>Tu viens ?</b>" },
    { fase: "guiada", c: ["b2po-maj"], k: "choice", ask: "Los italianos.", q: "«___»", o: ["les Italiens", "les italiens"], a: 0, pista: "Habitantes.", why: "<b>les Italiens</b>." },
    { fase: "indep", c: ["b2po-maj"], k: "choice", ask: "El lunes 3 de marzo.", q: "«___»", o: ["le lundi 3 mars", "le Lundi 3 Mars"], a: 0, why: "<b>le lundi 3 mars</b>." },
    { fase: "indep", c: ["b2po-maj"], k: "fill", ask: "«español» (el idioma)", q: "Elle parle ___ et anglais.", acc: ["espagnol"], why: "<b>espagnol</b>." },
    { fase: "indep", c: ["b2po-maj"], k: "fill", ask: "«canadienses» (los habitantes)", q: "Les ___ adorent le hockey.", acc: ["Canadiens"], why: "<b>Canadiens</b>." },
    { fase: "aplica", c: ["b2po-signes", "b2po-maj"], k: "match", ask: "Une cada caso con su regla.", q: "Caso → regla", pairs: [["jours et mois", "minúscula"], ["habitants", "mayúscula"], ["? ! ; :", "espacio antes"], ["citas", "comillas « »"]], why: "Reglas." },
    { fase: "aplica", c: ["b2po-maj"], k: "spot", ask: "Encuentra el error.", s: "Nous partons en vacances en [Août] avec des amis .", fix: "août", why: "<b>août</b>." },
    { fase: "aplica", c: ["b2po-maj"], k: "spot", ask: "Encuentra el error.", s: "Les [français] aiment beaucoup le fromage .", fix: "Français", why: "<b>Français</b>." },
    { fase: "dominio", c: ["b2po-signes"], k: "order", ask: "Ordena: «Dijo: Estoy listo».", tokens: ["Il a dit :", "« Je suis", "prêt. »"], why: "<b>Il a dit : « Je suis prêt. »</b>" },
    { fase: "dominio", c: ["b2po-maj"], k: "choice", ask: "«un vino italiano»", q: "«___»", o: ["un vin italien", "un vin Italien"], a: 0, why: "<b>italien</b>: adjetivo." },
    { fase: "dominio", c: ["b2po-signes", "b2po-maj"], k: "listen", say: "Les Espagnols et les Français dînent à des heures très différentes.", acc: ["Les Espagnols et les Français dînent à des heures très différentes."], num: false, dict: true, ask: "Escucha la frase y escríbela (¡cuidado con las mayúsculas!).", why: "Era <b>Les Espagnols et les Français dînent à des heures très différentes.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

E["b12-accords-difficiles"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Accords difficiles : demi, nu, couleurs, adjectifs composés",
  objetivo: {
    que: "Vas a concordar bien demi, nu y los colores: une demi-heure / une heure et demie, des yeux marron, des robes bleu clair.",
    corto: "une demi-heure · midi et demi · des yeux marron",
    podras: ["Dejar demi y nu invariables delante del nombre (une demi-heure, nu-pieds) y concordarlos detrás (deux heures et demie, pieds nus).", "Dejar invariables los colores que vienen de un nombre: marron, orange, crème (excepto rose, mauve).", "Dejar invariables los colores compuestos: des yeux bleu foncé."],
    iconos: ["ic2/reloj-arena", "ic2/flor", "ic2/lapiz"],
    previos: ["El lugar del adjetivo (B1.1, lección 38) y la concordancia del participio (B1.1, lección 3)."],
    capacidad: "Ahora escribes la hora y los colores sin errores."
  },
  requiere: R("b1pa-place", "b1ap-cod"), recupera: ["b1pa-place"],
  conceptos: {
    "b2ac-demi": { n: "demi / nu delante + guion: invariables (une demi-heure, nu-pieds); detrás: concuerdan en género (deux heures et demie, pieds nus); midi et demi", b: "vo" },
    "b2ac-couleurs": { n: "colores de nombres (marron, orange, crème) y compuestos (bleu clair): invariables; rose, mauve, vert, noir: concuerdan", b: "vo" }
  },
  video: {
    titulo: "Concordancias difíciles", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/reloj-arena", grande: "demi-heure · heure et demie", seg: [
        { es: "Hola. Demi cambia según su lugar." } ] },
      { v: "dos",
        a: { tag: "delante", fr: "une demi-heure", es: "invariable" },
        b: { tag: "detrás", fr: "deux heures et demie", es: "concuerda" },
        seg: [ { es: "Delante, invariable:", p: 1 }, { fr: "une demi-heure", p: 1 }, { es: "Detrás, concuerda:", p: 2 }, { fr: "deux heures et demie", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Compré zapatos marrones para el invierno.»", o: ["J'ai acheté des chaussures marron pour l'hiver.", "J'ai acheté des chaussures marrons pour l'hiver."], a: 0,
        bien: "¡Sí! Marron es invariable.", mal: "Marron viene de un nombre: invariable.",
        seg: [ { es: "Pausa. Zapatos marrones." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["une demi-heure", "et demie", "pieds nus", "des yeux marron", "bleu clair"], seg: [
        { es: "Marron, orange: invariables.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El paseo", img: "bg-playa", yo: "camila",
    escena: "Camila cuenta un paseo por la playa.",
    pj: PJ,
    lineas: [
      ["camila", "Après une demi-heure de marche, nous sommes arrivés à midi et demi.", "Después de media hora de caminata, llegamos a las doce y media."],
      ["hugo", "Et ensuite ?", "¿Y después?"],
      ["camila", "Mon frère marchait pieds nus sur la plage. Ma sœur portait des robes bleu clair et des chaussures orange.", "Mi hermano caminaba descalzo por la playa. Mi hermana llevaba vestidos azul claro y zapatos naranja."],
      ["hugo", "Et le bus du retour ? — À trois heures et demie. Elle a des yeux marron magnifiques, ta sœur !", "¿Y el bus de regreso? — A las tres y media. ¡Tu hermana tiene unos ojos marrones preciosos!"]
    ],
    fijate: "Fíjate: une demi-heure, midi et demi, pieds nus, bleu clair, orange, trois heures et demie, des yeux marron."
  },
  ensena: [
    { id: "vo", tipo: "vocab", titulo: "Demi, nu y los colores",
      intro: "Toca cada palabra.",
      palabras: [
        { fr: "une demi-heure · une demi-bouteille", es: "media hora · media botella (invariable delante)" },
        { fr: "deux heures et demie · une heure et demie · trois heures et demie", es: "dos horas y media · una hora y media (concuerda detrás)" },
        { fr: "midi et demi", es: "las doce y media (midi es masculino)" },
        { fr: "nu-pieds · nu-tête", es: "descalzo · sin sombrero (invariable delante)" },
        { fr: "pieds nus · les pieds nus · nus", es: "descalzo (concuerda detrás)" },
        { fr: "marron · orange · crème · bleu clair", es: "invariables" },
        { fr: "des yeux marron · des chemises orange · des chaussures marron", es: "ojos marrones · camisas naranjas · zapatos marrones" },
        { fr: "des robes bleu clair · bleu · des yeux bleu foncé", es: "vestidos azul claro · ojos azul oscuro" },
        { fr: "rose · vert · noir · mauve", es: "concuerdan" },
        { fr: "des fleurs roses", es: "flores rosadas" },
        { fr: "Il est trois heures et demie.", es: "Son las tres y media." }
      ],
      ej: [["Je t'attends depuis une demi-heure.", "Te espero desde hace media hora."], ["Il est midi et demi.", "Son las doce y media."], ["Elle a des yeux marron.", "Tiene los ojos marrones."]],
      clave: "Marron (el fruto) y orange (la fruta) son nombres: como color, no cambian." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["des chaussures marrons", "des chaussures marron", "Marron → invariable."], ["une demie-heure", "une demi-heure", "Delante: invariable."], ["deux heures et demi", "deux heures et demie", "Detrás: concuerda con heure (femenino)."]] }
  ],
  ejemplos: [
    { sit: "Media hora", resp: "une demi-heure", pasos: ["Delante + guion: invariable."], porque: "demi." },
    { sit: "Dos horas y media", resp: "deux heures et demie", pasos: ["Detrás: femenino singular."], porque: "demi." },
    { sit: "Camisas naranjas", resp: "des chemises orange", pasos: ["Orange: invariable."], porque: "Color." }
  ],
  comprueba: [
    { q: "«Media hora» se escribe…", o: ["une demi-heure", "une demie-heure"], a: 0, b: "vo", porque: "Delante." },
    { q: "«Ojos marrones» se escribe…", o: ["des yeux marron", "des yeux marrons"], a: 0, b: "vo", porque: "Invariable." },
    { q: "¿Qué color concuerda?", o: ["rose", "orange"], a: 0, b: "vo", porque: "Excepción." }
  ],
  practica: [
    { fase: "guiada", c: ["b2ac-couleurs"], k: "sort", ask: "¿Color invariable o que concuerda?", q: "Clasifica.", cats: ["Invariable", "Concuerda"], items: [["marron", 0], ["orange", 0], ["crème", 0], ["bleu clair", 0], ["rose", 1], ["vert", 1], ["noir", 1], ["mauve", 1]], pista: "¿Viene de un nombre?", why: "Colores." },
    { fase: "guiada", c: ["b2ac-demi"], k: "choice", ask: "Media hora.", q: "«___»", o: ["une demi-heure", "une demie-heure"], a: 0, pista: "Delante.", why: "<b>une demi-heure</b>." },
    { fase: "guiada", c: ["b2ac-demi"], k: "choice", ask: "Dos horas y media.", q: "«___»", o: ["deux heures et demie", "deux heures et demi"], a: 0, pista: "Detrás.", why: "<b>et demie</b>." },
    { fase: "indep", c: ["b2ac-couleurs"], k: "choice", ask: "Camisas naranjas.", q: "«___»", o: ["des chemises orange", "des chemises oranges"], a: 0, why: "<b>orange</b>." },
    { fase: "indep", c: ["b2ac-demi"], k: "fill", ask: "«descalzo» (pieds …)", q: "Il marche pieds ___ sur la plage.", acc: ["nus"], why: "<b>nus</b>." },
    { fase: "indep", c: ["b2ac-couleurs"], k: "fill", ask: "«azul» (… clair)", q: "Elle porte des robes ___ clair.", acc: ["bleu"], why: "<b>bleu</b>." },
    { fase: "aplica", c: ["b2ac-demi", "b2ac-couleurs"], k: "match", ask: "Une cada expresión con su forma.", q: "Español → francés", pairs: [["media botella", "une demi-bouteille"], ["una hora y media", "une heure et demie"], ["ojos marrones", "des yeux marron"], ["flores rosadas", "des fleurs roses"]], why: "Concordancias." },
    { fase: "aplica", c: ["b2ac-couleurs"], k: "spot", ask: "Encuentra el error.", s: "J'ai acheté des chaussures [marrons] pour l'hiver .", fix: "marron", why: "<b>marron</b>." },
    { fase: "aplica", c: ["b2ac-demi"], k: "spot", ask: "Encuentra el error.", s: "Je t'attends depuis une [demie-heure] .", fix: "demi-heure", why: "<b>demi-heure</b>." },
    { fase: "dominio", c: ["b2ac-demi"], k: "order", ask: "Ordena: «Son las tres y media».", tokens: ["Il est", "trois heures", "et demie."], why: "<b>Il est trois heures et demie.</b>" },
    { fase: "dominio", c: ["b2ac-demi"], k: "choice", ask: "«Son las doce y media.»", q: "«Il est midi et ___.»", o: ["demi", "demie"], a: 0, why: "<b>midi et demi</b>: midi es masculino." },
    { fase: "dominio", c: ["b2ac-demi", "b2ac-couleurs"], k: "listen", say: "Après une demi-heure de marche, nous sommes arrivés à midi et demi.", acc: ["Après une demi-heure de marche, nous sommes arrivés à midi et demi."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Après une demi-heure de marche, nous sommes arrivés à midi et demi.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

E["b12-pluriels-difficiles"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Les pluriels difficiles : -al, -ail, -ou et noms composés",
  objetivo: {
    que: "Vas a formar los plurales irregulares: -al → -aux, -eau / -eu → -x, los siete en -ou → -oux, -ail → -aux.",
    corto: "un cheval → des chevaux · un festival → des festivals · un genou → des genoux",
    podras: ["Formar -al → -aux (journaux) y recordar las excepciones: bals, festivals, carnavals.", "Formar -eau / -au / -eu → -x (gâteaux, jeux), salvo pneus y bleus.", "Recordar los siete en -oux (bijoux, cailloux, choux, genoux, hiboux, joujoux, poux) y travaux, yeux, messieurs."],
    iconos: ["ic2/libro", "ic2/lapiz", "ic2/estrella"],
    previos: ["El lugar y la concordancia del adjetivo (B1.1, lección 38)."],
    capacidad: "Ahora escribes los plurales que más fallan."
  },
  requiere: R("b1pa-place"), recupera: ["b1pa-place"],
  conceptos: {
    "b2pl-al": { n: "-al → -aux (journal → journaux, animal → animaux), excepto bals, festivals, carnavals; -ail → -ails, excepto travaux, vitraux", b: "vo" },
    "b2pl-x": { n: "-eau / -au / -eu → +x (gâteaux, jeux), excepto pneus; -ou → -ous, salvo los 7 en -oux (bijoux, cailloux, genoux…); œil → yeux", b: "vo" }
  },
  video: {
    titulo: "Plurales difíciles", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/libro", grande: "des chevaux", seg: [
        { es: "Hola. No todo plural termina en s." } ] },
      { v: "frase", filas: [
          { nota: "-al → -aux", p: 1, partes: [["un journal → des journaux", "-", 1]] },
          { nota: "excepción", p: 2, partes: [["un festival → des festivals", "-", 2]] },
          { nota: "-ou → -oux", p: 3, partes: [["un genou → des genoux", "-", 3]] } ], seg: [
        { fr: "un journal, des journaux", p: 1 }, { fr: "un festival, des festivals", p: 2 }, { fr: "un genou, des genoux", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Hay muchos festivales de música en verano.»", o: ["Il y a beaucoup de festivals de musique en été.", "Il y a beaucoup de festivaux de musique en été."], a: 0,
        bien: "¡Sí! Festival es excepción.", mal: "Excepción: festivals.",
        seg: [ { es: "Pausa. Festivales." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["des chevaux", "des festivals", "des genoux", "des travaux", "des yeux"], seg: [
        { es: "Cuidado con las excepciones.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El campo", img: "bg-playa", yo: "camila",
    escena: "Camila cuenta un fin de semana en el campo.",
    pj: PJ,
    lineas: [
      ["camila", "À la campagne, les chevaux courent dans le champ et les enfants ramassent des cailloux.", "En el campo, los caballos corren en el prado y los niños recogen piedritas."],
      ["hugo", "Et toi ? Tu as marché beaucoup ?", "¿Y tú? ¿Caminaste mucho?"],
      ["camila", "Oui, j'ai mal aux genoux ! Et dans le village, il y a des travaux dans la rue.", "¡Sí, me duelen las rodillas! Y en el pueblo hay obras en la calle."],
      ["hugo", "Les journaux parlent des festivals d'été dans la région. Les enfants jouent avec leurs jeux, et les animaux dorment.", "Los periódicos hablan de los festivales de verano en la región. Los niños juegan con sus juegos, y los animales duermen."]
    ],
    fijate: "Fíjate: chevaux, cailloux, genoux, travaux, journaux, festivals, jeux, animaux."
  },
  ensena: [
    { id: "vo", tipo: "vocab", titulo: "Los plurales irregulares",
      intro: "Toca cada palabra.",
      palabras: [
        { fr: "un cheval → des chevaux · un journal → des journaux · journal", es: "-al → -aux" },
        { fr: "un animal → des animaux · animaux", es: "-al → -aux" },
        { fr: "un bal → des bals · un festival → des festivals · festivals · un carnaval → des carnavals · carnaval · bal", es: "excepciones: -als" },
        { fr: "un bateau → des bateaux · un jeu → des jeux · bateau · jeu", es: "-eau / -eu → +x" },
        { fr: "un pneu → des pneus · pneu", es: "excepción: +s" },
        { fr: "un trou → des trous · trou", es: "-ou → +s" },
        { fr: "un bijou → des bijoux · un caillou → des cailloux · caillou · un genou → des genoux · genoux", es: "los 7 en -oux: bijoux, cailloux, choux, genoux, hiboux, joujoux, poux" },
        { fr: "un travail → des travaux · travaux", es: "-ail → -aux" },
        { fr: "un détail → des détails", es: "-ail → -ails (regla general)" },
        { fr: "un œil → des yeux · yeux", es: "un ojo → unos ojos" },
        { fr: "monsieur → messieurs", es: "señor → señores" },
        { fr: "Les chevaux courent dans le champ.", es: "Los caballos corren en el prado." }
      ],
      ej: [["Les journaux parlent des festivals d'été.", "Los periódicos hablan de los festivales de verano."], ["J'ai mal aux genoux.", "Me duelen las rodillas."], ["Il y a des travaux dans la rue.", "Hay obras en la calle."]],
      clave: "Excepciones de -al: bals, festivals, carnavals, récitals." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["des festivaux", "des festivals", "Excepción: festivals."], ["des genous", "des genoux", "Uno de los 7 en -oux."], ["des œils", "des yeux", "Irregular."]] }
  ],
  ejemplos: [
    { sit: "un animal → des…", resp: "animaux", pasos: ["-al → -aux."], porque: "Regla." },
    { sit: "un festival → des…", resp: "festivals", pasos: ["Excepción."], porque: "Excepción." },
    { sit: "un genou → des…", resp: "genoux", pasos: ["Uno de los 7."], porque: "-oux." }
  ],
  comprueba: [
    { q: "El plural de journal es…", o: ["journaux", "journals"], a: 0, b: "vo", porque: "-al → -aux." },
    { q: "El plural de festival es…", o: ["festivals", "festivaux"], a: 0, b: "vo", porque: "Excepción." },
    { q: "El plural de œil es…", o: ["yeux", "œils"], a: 0, b: "vo", porque: "Irregular." }
  ],
  practica: [
    { fase: "guiada", c: ["b2pl-al", "b2pl-x"], k: "sort", ask: "¿Plural en -x o en -s?", q: "Clasifica.", cats: ["en -x", "en -s"], items: [["bateau", 0], ["jeu", 0], ["caillou", 0], ["journal", 0], ["trou", 1], ["bal", 1], ["pneu", 1], ["carnaval", 1]], pista: "Ojo con las excepciones.", why: "Plurales." },
    { fase: "guiada", c: ["b2pl-al"], k: "choice", ask: "un animal → des…", q: "«des ___»", o: ["animaux", "animals"], a: 0, pista: "-al.", why: "<b>animaux</b>." },
    { fase: "guiada", c: ["b2pl-al"], k: "choice", ask: "un festival → des…", q: "«des ___»", o: ["festivals", "festivaux"], a: 0, pista: "Excepción.", why: "<b>festivals</b>." },
    { fase: "indep", c: ["b2pl-x"], k: "choice", ask: "un genou → des…", q: "«des ___»", o: ["genoux", "genous"], a: 0, why: "<b>genoux</b>." },
    { fase: "indep", c: ["b2pl-x"], k: "fill", ask: "Plural de œil.", q: "un œil → des ___", acc: ["yeux"], why: "<b>yeux</b>." },
    { fase: "indep", c: ["b2pl-al"], k: "fill", ask: "Plural de travail.", q: "un travail → des ___", acc: ["travaux"], why: "<b>travaux</b>." },
    { fase: "aplica", c: ["b2pl-al", "b2pl-x"], k: "match", ask: "Une cada singular con su plural.", q: "Singular → plural", pairs: [["un cheval", "des chevaux"], ["un bijou", "des bijoux"], ["un pneu", "des pneus"], ["un détail", "des détails"], ["monsieur", "messieurs"]], why: "Plurales." },
    { fase: "aplica", c: ["b2pl-al"], k: "spot", ask: "Encuentra el error.", s: "Il y a beaucoup de [festivaux] de musique en été .", fix: "festivals", why: "<b>festivals</b>." },
    { fase: "aplica", c: ["b2pl-x"], k: "spot", ask: "Encuentra el error.", s: "J'ai mal aux [genous] après la randonnée .", fix: "genoux", why: "<b>genoux</b>." },
    { fase: "dominio", c: ["b2pl-al"], k: "order", ask: "Ordena: «Los caballos corren en el prado».", tokens: ["Les chevaux", "courent", "dans le champ."], why: "<b>Les chevaux courent dans le champ.</b>" },
    { fase: "dominio", c: ["b2pl-x"], k: "choice", ask: "un bateau → des…", q: "«des ___»", o: ["bateaux", "bateaus"], a: 0, why: "<b>bateaux</b>." },
    { fase: "dominio", c: ["b2pl-al", "b2pl-x"], k: "listen", say: "Les enfants ramassent des cailloux et jouent avec leurs jeux.", acc: ["Les enfants ramassent des cailloux et jouent avec leurs jeux."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Les enfants ramassent des cailloux et jouent avec leurs jeux.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

E["b12-nombres-ecrits"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Écrire les nombres en lettres : vingt, cent, mille",
  objetivo: {
    que: "Vas a escribir los números con letras: cuándo vingt y cent llevan s, por qué mille no cambia y dónde va et.",
    corto: "quatre-vingts · deux cents · deux cent cinquante · trois mille",
    podras: ["Poner -s a vingt y cent multiplicados y al final: quatre-vingts, deux cents.", "Quitarla si sigue otro número: quatre-vingt-deux, deux cent trois; y dejar mille invariable.", "Usar et en 21, 31… 71 (vingt et un, soixante et onze), no en 81 ni 91."],
    iconos: ["ic2/moneda", "ic2/lapiz", "ic2/nota"],
    previos: ["Las cifras: porcentajes y estadísticas (B1.1, lección 63)."],
    capacidad: "Ahora escribes un cheque o una fecha en letras."
  },
  requiere: R("b1ch-fraction", "b1ch-evolution"), recupera: ["b1ch-fraction"],
  conceptos: {
    "b2ne-s": { n: "vingt / cent + s si están multiplicados y al final (quatre-vingts, deux cents); sin s si sigue otro número (deux cent cinquante); mille invariable", b: "vo" },
    "b2ne-et": { n: "et en 21, 31, 41, 51, 61, 71 (vingt et un, soixante et onze), no en 81 ni 91; millions, milliards llevan s; septante / nonante en Bélgica y Suiza", b: "vo" }
  },
  video: {
    titulo: "Números en letras", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/moneda", grande: "quatre-vingts", seg: [
        { es: "Hola. ¿Cuándo lleva s vingt?" } ] },
      { v: "frase", filas: [
          { nota: "80", p: 1, partes: [["quatre-vingts", "-", 1]] },
          { nota: "82", p: 2, partes: [["quatre-vingt-deux", "-", 2]] },
          { nota: "3000", p: 3, partes: [["trois mille", "-", 3]] } ], seg: [
        { fr: "quatre-vingts", p: 1 }, { fr: "quatre-vingt-deux", p: 2 }, { fr: "trois mille", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«El billete cuesta doscientos cincuenta euros.»", o: ["Le billet coûte deux cent cinquante euros.", "Le billet coûte deux cents cinquante euros."], a: 0,
        bien: "¡Sí! Sigue otro número: sin s.", mal: "Cent + otro número: sin s.",
        seg: [ { es: "Pausa. Doscientos cincuenta." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["quatre-vingts", "deux cents", "deux cent cinquante", "trois mille", "vingt et un"], seg: [
        { es: "Mille nunca lleva s.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El concierto", img: "bg-paris", yo: "camila",
    escena: "Camila escribe una crónica del concierto.",
    pj: PJ,
    lineas: [
      ["camila", "J'écris : « Le concert a réuni quatre-vingts musiciens et deux mille spectateurs. »", "Escribo: «El concierto reunió a ochenta músicos y dos mil espectadores»."],
      ["hugo", "Bien : quatre-vingts avec s, et mille sans s. Combien coûtait le billet ?", "Bien: quatre-vingts con s, y mille sin s. ¿Cuánto costaba la boleta?"],
      ["camila", "Deux cent cinquante euros ! Et mon grand-père est né en mille neuf cent quatre-vingt-dix-huit… non, c'est moi !", "¡Doscientos cincuenta euros! Y mi abuelo nació en mil novecientos noventa y ocho… ¡no, soy yo!"],
      ["hugo", "Ha ha ! Moi, j'ai vingt et un ans. Et ma grand-mère a soixante et onze ans.", "¡Ja, ja! Yo tengo veintiún años. Y mi abuela tiene setenta y un años."]
    ],
    fijate: "Fíjate: quatre-vingts (s al final), deux mille (sin s), deux cent cinquante (sin s), quatre-vingt-dix-huit, vingt et un, soixante et onze."
  },
  ensena: [
    { id: "vo", tipo: "vocab", titulo: "Las reglas de vingt, cent y mille",
      intro: "Toca cada palabra.",
      palabras: [
        { fr: "quatre-vingts · quatre-vingts ans", es: "80 (s al final)" },
        { fr: "quatre-vingt-deux · quatre-vingt-un · quatre-vingt-dix", es: "82 · 81 · 90 (sin s)" },
        { fr: "deux cents · trois cents · cinq cents euros", es: "200 · 300 · 500 (s al final)" },
        { fr: "deux cent cinquante · trois cent cinq · cinq cent dix · cent un · cent", es: "250 · 305 · 510 · 101 (sin s)" },
        { fr: "deux mille · trois mille · mille", es: "2000 · 3000 (mille invariable)" },
        { fr: "deux millions · trois milliards", es: "dos millones · tres mil millones (con s)" },
        { fr: "vingt et un · soixante et onze · onze", es: "21 · 71 (con et)" },
        { fr: "septante · nonante", es: "70 · 90 en Bélgica y Suiza" },
        { fr: "mille neuf cent quatre-vingt-dix-huit", es: "1998" },
        { fr: "Ça coûte deux cent cinquante euros.", es: "Cuesta doscientos cincuenta euros." }
      ],
      ej: [["Quatre-vingts personnes sont venues.", "Vinieron ochenta personas."], ["Ça coûte deux cent cinquante euros.", "Cuesta doscientos cincuenta euros."], ["En l'an deux mille vingt-cinq.", "En el año dos mil veinticinco."]],
      clave: "Vingt y cent llevan s solo si están multiplicados y no les sigue otro número. Mille nunca." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["deux milles euros", "deux mille euros", "Mille es invariable."], ["deux cents cinquante", "deux cent cinquante", "Sigue otro número: sin s."], ["quatre-vingt et un", "quatre-vingt-un", "En 81 no hay et."]] }
  ],
  ejemplos: [
    { sit: "80", resp: "quatre-vingts", pasos: ["Multiplicado y al final: s."], porque: "Regla." },
    { sit: "200", resp: "deux cents", pasos: ["Multiplicado y al final: s."], porque: "Regla." },
    { sit: "3000", resp: "trois mille", pasos: ["Mille invariable."], porque: "Regla." }
  ],
  comprueba: [
    { q: "80 se escribe…", o: ["quatre-vingts", "quatre-vingt"], a: 0, b: "vo", porque: "Al final." },
    { q: "250 se escribe…", o: ["deux cent cinquante", "deux cents cinquante"], a: 0, b: "vo", porque: "Sigue otro número." },
    { q: "2000 se escribe…", o: ["deux mille", "deux milles"], a: 0, b: "vo", porque: "Invariable." }
  ],
  practica: [
    { fase: "guiada", c: ["b2ne-s"], k: "sort", ask: "¿Con s o sin s?", q: "Clasifica.", cats: ["Con s", "Sin s"], items: [["quatre-vingts ans", 0], ["cinq cents euros", 0], ["deux millions", 0], ["trois milliards", 0], ["quatre-vingt-deux", 1], ["cinq cent dix", 1], ["deux mille", 1], ["cent un", 1]], pista: "¿Sigue otro número?", why: "Reglas." },
    { fase: "guiada", c: ["b2ne-s"], k: "choice", ask: "80", q: "«___»", o: ["quatre-vingts", "quatre-vingt"], a: 0, pista: "Al final.", why: "<b>quatre-vingts</b>." },
    { fase: "guiada", c: ["b2ne-s"], k: "choice", ask: "200", q: "«___»", o: ["deux cents", "deux cent"], a: 0, pista: "Al final.", why: "<b>deux cents</b>." },
    { fase: "indep", c: ["b2ne-s"], k: "choice", ask: "3000", q: "«___»", o: ["trois mille", "trois milles"], a: 0, why: "<b>trois mille</b>." },
    { fase: "indep", c: ["b2ne-et"], k: "fill", ask: "71 en letras.", q: "71 = soixante et ___", acc: ["onze"], why: "<b>onze</b>." },
    { fase: "indep", c: ["b2ne-et"], k: "fill", ask: "90 en Bélgica.", q: "90 en Belgique = ___", acc: ["nonante"], why: "<b>nonante</b>." },
    { fase: "aplica", c: ["b2ne-s", "b2ne-et"], k: "match", ask: "Une cada cifra con su escritura.", q: "Cifra → letras", pairs: [["81", "quatre-vingt-un"], ["300", "trois cents"], ["305", "trois cent cinq"], ["21", "vingt et un"]], why: "Escritura." },
    { fase: "aplica", c: ["b2ne-s"], k: "spot", ask: "Encuentra el error.", s: "Le billet coûte deux [cents] cinquante euros .", fix: "cent", why: "<b>cent</b>." },
    { fase: "aplica", c: ["b2ne-s"], k: "spot", ask: "Encuentra el error.", s: "La voiture coûte vingt [milles] euros .", fix: "mille", why: "<b>mille</b>." },
    { fase: "dominio", c: ["b2ne-s"], k: "order", ask: "Ordena: 1998.", tokens: ["mille", "neuf cent", "quatre-vingt-dix-huit"], why: "<b>mille neuf cent quatre-vingt-dix-huit</b>" },
    { fase: "dominio", c: ["b2ne-et"], k: "choice", ask: "21", q: "«___»", o: ["vingt et un", "vingt-un"], a: 0, why: "<b>vingt et un</b>." },
    { fase: "dominio", c: ["b2ne-s", "b2ne-et"], k: "listen", say: "Le concert a réuni quatre-vingts musiciens et deux mille spectateurs.", acc: ["Le concert a réuni quatre-vingts musiciens et deux mille spectateurs.", "Le concert a réuni 80 musiciens et 2000 spectateurs.", "Le concert a réuni 80 musiciens et 2 000 spectateurs."], num: false, dict: true, ask: "Escucha la frase y escríbela (con los números en letras).", why: "Era <b>Le concert a réuni quatre-vingts musiciens et deux mille spectateurs.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

E["b12-francophonie"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Le français dans le monde : Belgique, Suisse, Québec, Afrique",
  objetivo: {
    que: "Vas a reconocer las variantes del francés en Bélgica, Suiza, Quebec y África: septante, le souper, magasiner, un char, un natel…",
    corto: "En Belgique, on dit septante. · Au Québec, on magasine le samedi.",
    podras: ["Reconocer los números de Bélgica y Suiza: septante, huitante (Suiza), nonante.", "Reconocer las comidas y palabras de Quebec: le déjeuner (mañana), le dîner (mediodía), le souper (noche), un char, magasiner, bienvenue.", "Reconocer palabras de Bélgica (une drache, un GSM), Suiza (un natel) y África (une essencerie, un maquis)."],
    iconos: ["ic2/mundo", "ic2/bandera", "ic2/globo"],
    previos: ["Las expresiones idiomáticas (B1.1, lección 66) y el francés familiar (B1.1, lección 67)."],
    capacidad: "Ahora entiendes a un quebequense o a un belga."
  },
  requiere: R("b1ei-autres", "b1rf2-noms"), recupera: ["b1ei-autres"],
  conceptos: {
    "b2fr-belsui": { n: "Bélgica y Suiza: septante (70), nonante (90), huitante (80, Suiza); une drache, un GSM (Bélgica); un natel (Suiza)", b: "vo" },
    "b2fr-quebec": { n: "Quebec: le déjeuner (mañana), le dîner (mediodía), le souper (noche), un char, magasiner, ma blonde, bienvenue (= de nada); África: une essencerie", b: "vo" }
  },
  video: {
    titulo: "El francés en el mundo", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/mundo", grande: "septante · le souper", seg: [
        { es: "Hola. El francés no es igual en todas partes." } ] },
      { v: "frase", filas: [
          { nota: "Bélgica", p: 1, partes: [["En Belgique, soixante-dix se dit septante.", "-", 1]] },
          { nota: "Quebec", p: 2, partes: [["Au Québec, on magasine le samedi.", "-", 2]] },
          { nota: "Quebec", p: 3, partes: [["Merci ! — Bienvenue !", "-", 3]] } ], seg: [
        { fr: "En Belgique, soixante-dix se dit septante.", p: 1 }, { fr: "Au Québec, on magasine le samedi.", p: 2 }, { fr: "Merci ! Bienvenue !", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "En Bruselas, la abuela cumple 70 años. En Bélgica se dice…", o: ["septante", "soixante-dix"], a: 0,
        bien: "¡Sí! Septante.", mal: "En Bélgica: septante.",
        seg: [ { es: "Pausa. 70 en Bélgica." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["septante", "nonante", "le souper", "magasiner", "un char", "un natel"], seg: [
        { es: "Mismo idioma, muchas voces.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Amigos francófonos", img: "bg-cafe", yo: "camila",
    escena: "Camila cuenta lo que aprendió de sus amigos francófonos.",
    pj: PJ,
    lineas: [
      ["camila", "Mon amie de Montréal m'a dit : « J'ai acheté un nouveau char. On va magasiner ? »", "Mi amiga de Montreal me dijo: «Compré un carro nuevo. ¿Vamos de compras?»"],
      ["hugo", "Au Québec, le repas du soir s'appelle le souper, et le dîner, c'est à midi ! À Montréal, on dit souvent bienvenue pour répondre à merci.", "En Quebec, la comida de la noche se llama souper, ¡y el dîner es al mediodía! En Montreal se dice a menudo bienvenue para responder a merci."],
      ["camila", "Et à Bruxelles, ma grand-mère fête ses septante ans. En Belgique, on dit septante et nonante.", "Y en Bruselas, mi abuela cumple setenta años. En Bélgica se dice septante y nonante."],
      ["hugo", "En Suisse, un téléphone portable s'appelle un natel. Et à Abidjan, on fait le plein à l'essencerie !", "En Suiza, un celular se llama natel. ¡Y en Abiyán se tanquea en la essencerie!"]
    ],
    fijate: "Fíjate: un char, magasiner, le souper, le dîner (midi), bienvenue (Quebec); septante, nonante (Bélgica); un natel (Suiza); l'essencerie (África)."
  },
  ensena: [
    { id: "vo", tipo: "vocab", titulo: "Variantes del francés",
      intro: "Toca cada palabra.",
      palabras: [
        { fr: "septante · nonante", es: "70 · 90 (Bélgica y Suiza)" },
        { fr: "huitante", es: "80 (Suiza)" },
        { fr: "une drache · un GSM", es: "un aguacero · un celular (Bélgica)" },
        { fr: "un natel · natel", es: "un celular (Suiza)" },
        { fr: "le déjeuner (matin) · le dîner (midi) · le souper · souper", es: "desayuno · almuerzo · cena (Quebec)" },
        { fr: "le petit-déjeuner · le déjeuner (midi) · le dîner (soir) · faire les courses", es: "desayuno · almuerzo · cena · hacer compras (Francia)" },
        { fr: "un char · un nouveau char", es: "un carro (Quebec)" },
        { fr: "magasiner", es: "ir de compras (Quebec)" },
        { fr: "ma blonde · un chum", es: "mi novia · un novio / amigo (Quebec)" },
        { fr: "Bienvenue ! (après merci)", es: "¡De nada! (Quebec)" },
        { fr: "une essencerie · un maquis", es: "una gasolinera · un restaurante popular (África occidental)" },
        { fr: "Au Québec, on soupe tôt.", es: "En Quebec se cena temprano." }
      ],
      ej: [["Au Québec, on magasine le samedi.", "En Quebec se va de compras el sábado."], ["En Belgique, soixante-dix se dit septante.", "En Bélgica, setenta se dice septante."], ["Merci ! — Bienvenue ! (Québec)", "¡Gracias! — ¡De nada!"]],
      clave: "En Quebec: déjeuner (mañana), dîner (mediodía), souper (noche)." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Au Québec, le dîner = la cena", "Au Québec, le dîner = el almuerzo", "Quebec: dîner al mediodía."], ["En Belgique, quatre-vingts = huitante", "En Belgique, on dit quatre-vingts", "Huitante es suizo."], ["Bienvenue ! = ¡Bienvenido! (siempre)", "Au Québec, Bienvenue ! = ¡De nada!", "Respuesta a merci."]] }
  ],
  ejemplos: [
    { sit: "«J'ai acheté un nouveau char.»", resp: "un carro (Quebec)", pasos: ["char."], porque: "Quebec." },
    { sit: "70 en Bélgica", resp: "septante", pasos: ["Bélgica y Suiza."], porque: "Números." },
    { sit: "«On va magasiner ?»", resp: "ir de compras (Quebec)", pasos: ["magasiner."], porque: "Quebec." }
  ],
  comprueba: [
    { q: "70 en Bélgica se dice…", o: ["septante", "soixante-dix"], a: 0, b: "vo", porque: "Bélgica." },
    { q: "En Quebec, le souper es…", o: ["la cena", "el desayuno"], a: 0, b: "vo", porque: "Quebec." },
    { q: "Un natel es…", o: ["un celular (Suiza)", "una natilla"], a: 0, b: "vo", porque: "Suiza." }
  ],
  practica: [
    { fase: "guiada", c: ["b2fr-quebec"], k: "sort", ask: "¿Uso de Francia o de Quebec?", q: "Clasifica.", cats: ["Francia", "Quebec"], items: [["le petit-déjeuner", 0], ["le déjeuner (midi)", 0], ["le dîner (soir)", 0], ["faire les courses", 0], ["le déjeuner (matin)", 1], ["le dîner (midi)", 1], ["le souper", 1], ["magasiner", 1]], pista: "Quebec: souper.", why: "Variantes." },
    { fase: "guiada", c: ["b2fr-quebec"], k: "choice", es: true, ask: "«J'ai acheté un nouveau char.» (Quebec) Un char es…", q: "Elige.", o: ["un carro (Quebec)", "un tanque de guerra"], a: 0, pista: "Quebec.", why: "Char." },
    { fase: "guiada", c: ["b2fr-belsui"], k: "choice", ask: "70 en Bélgica.", q: "«___»", o: ["septante", "soixante-dix"], a: 0, pista: "Bélgica.", why: "<b>septante</b>." },
    { fase: "indep", c: ["b2fr-quebec"], k: "choice", es: true, ask: "«On va magasiner ?» significa…", q: "Elige.", o: ["ir de compras (Quebec)", "ir al almacén a trabajar"], a: 0, why: "Magasiner." },
    { fase: "indep", c: ["b2fr-quebec"], k: "fill", ask: "La cena en Quebec.", q: "Au Québec, le repas du soir s'appelle le ___ .", acc: ["souper"], why: "<b>souper</b>." },
    { fase: "indep", c: ["b2fr-belsui"], k: "fill", ask: "El celular en Suiza.", q: "En Suisse, un téléphone portable s'appelle un ___ .", acc: ["natel"], why: "<b>natel</b>." },
    { fase: "aplica", c: ["b2fr-belsui", "b2fr-quebec"], k: "match", ask: "Une cada palabra con su región.", q: "Palabra → región", pairs: [["une drache", "Bélgica"], ["huitante", "Suiza"], ["ma blonde", "Quebec"], ["une essencerie", "África occidental"]], why: "Regiones." },
    { fase: "aplica", c: ["b2fr-belsui"], k: "spot", ask: "Encuentra la palabra que no usaría un belga.", s: "À Bruxelles , ma grand-mère fête ses [soixante-dix] ans .", fix: "septante", why: "<b>septante</b>." },
    { fase: "aplica", c: ["b2fr-quebec"], k: "spot", ask: "Encuentra el error (Quebec: la cena).", s: "Au Québec , on mange le [dîner] à sept heures du soir .", fix: "souper", why: "<b>souper</b>." },
    { fase: "dominio", c: ["b2fr-quebec"], k: "order", ask: "Ordena: «En Quebec se cena temprano».", tokens: ["Au Québec,", "on soupe", "tôt."], why: "<b>Au Québec, on soupe tôt.</b>" },
    { fase: "dominio", c: ["b2fr-belsui"], k: "choice", ask: "90 en Bélgica.", q: "«___»", o: ["nonante", "quatre-vingt-dix"], a: 0, why: "<b>nonante</b>." },
    { fase: "dominio", c: ["b2fr-belsui", "b2fr-quebec"], k: "listen", say: "À Montréal, on dit souvent bienvenue pour répondre à merci.", acc: ["À Montréal, on dit souvent bienvenue pour répondre à merci."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>À Montréal, on dit souvent bienvenue pour répondre à merci.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Montréal", "Bruxelles", "Abidjan", "Québec"], previo: [] }
};

E["b12-proverbes"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Proverbes et expressions de sagesse",
  objetivo: {
    que: "Vas a entender y usar refranes franceses frecuentes y sus equivalentes en español.",
    corto: "Mieux vaut prévenir que guérir. · Après la pluie, le beau temps.",
    podras: ["Usar refranes de paciencia: Petit à petit, l'oiseau fait son nid. Rome ne s'est pas faite en un jour.", "Usar refranes de relaciones: Qui se ressemble s'assemble. Loin des yeux, loin du cœur.", "Usar refranes de prudencia y esperanza: Mieux vaut prévenir que guérir. Après la pluie, le beau temps."],
    iconos: ["ic2/pergamino", "ic2/bombilla", "ic2/corona"],
    previos: ["Las expresiones idiomáticas (B1.1, lección 66)."],
    capacidad: "Ahora cierras una redacción con un buen refrán."
  },
  requiere: R("b1ei-humeur", "b1ei-autres"), recupera: ["b1ei-autres"],
  conceptos: {
    "b2pv-patience": { n: "paciencia y esfuerzo: Petit à petit, l'oiseau fait son nid; Rome ne s'est pas faite en un jour; Quand on veut, on peut", b: "vo" },
    "b2pv-autres": { n: "relaciones y prudencia: Qui se ressemble s'assemble; Loin des yeux, loin du cœur; Mieux vaut prévenir que guérir; Après la pluie, le beau temps", b: "vo" }
  },
  video: {
    titulo: "Refranes franceses", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/pergamino", grande: "petit à petit…", seg: [
        { es: "Hola. La sabiduría popular, en francés." } ] },
      { v: "frase", filas: [
          { nota: "prudencia", p: 1, partes: [["Mieux vaut prévenir que guérir.", "-", 1]] },
          { nota: "esperanza", p: 2, partes: [["Après la pluie, le beau temps.", "-", 2]] },
          { nota: "relaciones", p: 3, partes: [["Loin des yeux, loin du cœur.", "-", 3]] } ], seg: [
        { fr: "Mieux vaut prévenir que guérir.", p: 1 }, { fr: "Après la pluie, le beau temps.", p: 2 }, { fr: "Loin des yeux, loin du cœur.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Más vale prevenir que curar.»", o: ["Mieux vaut prévenir que guérir.", "Mieux vaut prévoir que guérir."], a: 0,
        bien: "¡Sí! Prévenir.", mal: "El verbo es prévenir.",
        seg: [ { es: "Pausa. Prevenir." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Petit à petit", "Qui se ressemble s'assemble", "Après la pluie", "L'union fait la force"], seg: [
        { es: "Un refrán al final de un texto convence.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Consejos de la abuela", img: "bg-cafe", yo: "camila",
    escena: "Camila está desanimada con el francés; Hugo la anima.",
    pj: PJ,
    lineas: [
      ["camila", "Je n'avance pas en français… C'est trop difficile.", "No avanzo en francés… Es demasiado difícil."],
      ["hugo", "Ne t'inquiète pas : après la pluie, le beau temps. Petit à petit, l'oiseau fait son nid. Quand on veut, on peut !", "No te preocupes: después de la tormenta llega la calma. Poco a poco se va lejos. ¡Querer es poder!"],
      ["camila", "Tu as raison. Rome ne s'est pas faite en un jour. Et toi et moi, on étudie toujours ensemble : qui se ressemble s'assemble !", "Tienes razón. No se ganó Zamora en una hora. Y tú y yo siempre estudiamos juntos: ¡Dios los cría y ellos se juntan!"],
      ["hugo", "Exactement. L'union fait la force. Mais attention, il ne faut pas vendre la peau de l'ours avant de l'avoir tué : l'examen n'est pas fini !", "Exacto. La unión hace la fuerza. Pero ojo, no hay que vender la piel del oso antes de cazarlo: ¡el examen no ha terminado!"]
    ],
    fijate: "Fíjate: après la pluie, le beau temps; petit à petit, l'oiseau fait son nid; quand on veut, on peut; Rome ne s'est pas faite en un jour; qui se ressemble s'assemble; l'union fait la force."
  },
  ensena: [
    { id: "vo", tipo: "vocab", titulo: "Refranes por tema",
      intro: "Toca cada frase.",
      palabras: [
        { fr: "Petit à petit, l'oiseau fait son nid. · Petit à petit", es: "Poco a poco se va lejos." },
        { fr: "Rome ne s'est pas faite en un jour.", es: "No se ganó Zamora en una hora." },
        { fr: "Quand on veut, on peut. · peut", es: "Querer es poder." },
        { fr: "Tout vient à point à qui sait attendre.", es: "Todo llega para quien sabe esperar." },
        { fr: "Qui se ressemble s'assemble.", es: "Dios los cría y ellos se juntan." },
        { fr: "Loin des yeux, loin du cœur.", es: "Ojos que no ven, corazón que no siente." },
        { fr: "Les bons comptes font les bons amis.", es: "Cuentas claras, amistades largas." },
        { fr: "Dis-moi qui tu fréquentes, je te dirai qui tu es.", es: "Dime con quién andas y te diré quién eres." },
        { fr: "Mieux vaut prévenir que guérir.", es: "Más vale prevenir que curar." },
        { fr: "Après la pluie, le beau temps. · Après la pluie · temps", es: "Después de la tormenta llega la calma." },
        { fr: "L'union fait la force.", es: "La unión hace la fuerza." },
        { fr: "L'habit ne fait pas le moine.", es: "El hábito no hace al monje." },
        { fr: "Il ne faut pas vendre la peau de l'ours avant de l'avoir tué.", es: "No hay que vender la piel del oso antes de cazarlo." }
      ],
      ej: [["Ne t'inquiète pas : après la pluie, le beau temps.", "No te preocupes: después de la tormenta llega la calma."], ["Mieux vaut prévenir que guérir.", "Más vale prevenir que curar."], ["Loin des yeux, loin du cœur.", "Ojos que no ven, corazón que no siente."]],
      clave: "Los refranes casi nunca se traducen palabra por palabra: busca el equivalente." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Mieux vaut prévoir que guérir.", "Mieux vaut prévenir que guérir.", "Verbo: prévenir."], ["Après la pluie, le soleil.", "Après la pluie, le beau temps.", "Forma fija."], ["Rome ne s'est pas fait en un jour.", "Rome ne s'est pas faite en un jour.", "Concordancia con Rome (femenino)."]] }
  ],
  ejemplos: [
    { sit: "«Más vale prevenir que curar.»", resp: "Mieux vaut prévenir que guérir.", pasos: ["prévenir."], porque: "Prudencia." },
    { sit: "«Qui se ressemble s'assemble.»", resp: "Dios los cría y ellos se juntan.", pasos: ["Equivalente."], porque: "Relaciones." },
    { sit: "Paciencia", resp: "Petit à petit, l'oiseau fait son nid.", pasos: ["Poco a poco."], porque: "Paciencia." }
  ],
  comprueba: [
    { q: "«Más vale prevenir que curar» se dice…", o: ["Mieux vaut prévenir que guérir.", "Mieux vaut prévoir que guérir."], a: 0, b: "vo", porque: "prévenir." },
    { q: "«Qui se ressemble s'assemble» equivale a…", o: ["Dios los cría y ellos se juntan.", "Más vale tarde que nunca."], a: 0, b: "vo", porque: "Relaciones." },
    { q: "«Après la pluie, le beau temps» habla de…", o: ["esperanza", "prudencia"], a: 0, b: "vo", porque: "Llega la calma." }
  ],
  practica: [
    { fase: "guiada", c: ["b2pv-patience", "b2pv-autres"], k: "sort", ask: "¿Habla de paciencia y esfuerzo o de relaciones?", q: "Clasifica.", cats: ["Paciencia / esfuerzo", "Relaciones"], items: [["Petit à petit, l'oiseau fait son nid.", 0], ["Rome ne s'est pas faite en un jour.", 0], ["Quand on veut, on peut.", 0], ["Tout vient à point à qui sait attendre.", 0], ["Qui se ressemble s'assemble.", 1], ["Loin des yeux, loin du cœur.", 1], ["Les bons comptes font les bons amis.", 1], ["Dis-moi qui tu fréquentes, je te dirai qui tu es.", 1]], pista: "¿Tiempo o personas?", why: "Temas." },
    { fase: "guiada", c: ["b2pv-autres"], k: "choice", ask: "«Más vale prevenir que curar.»", q: "«___»", o: ["Mieux vaut prévenir que guérir.", "Mieux vaut prévoir que guérir."], a: 0, pista: "prévenir.", why: "<b>prévenir</b>." },
    { fase: "guiada", c: ["b2pv-autres"], k: "choice", es: true, ask: "«Qui se ressemble s'assemble.» equivale a…", q: "Elige.", o: ["Dios los cría y ellos se juntan.", "Más vale tarde que nunca."], a: 0, pista: "Relaciones.", why: "Equivalente." },
    { fase: "indep", c: ["b2pv-patience"], k: "choice", ask: "Un refrán sobre la paciencia.", q: "«___»", o: ["Petit à petit, l'oiseau fait son nid.", "Loin des yeux, loin du cœur."], a: 0, why: "<b>Petit à petit…</b>" },
    { fase: "indep", c: ["b2pv-autres"], k: "fill", ask: "Completa el refrán.", q: "Après la pluie, le beau ___ .", acc: ["temps"], why: "<b>temps</b>." },
    { fase: "indep", c: ["b2pv-patience"], k: "fill", ask: "Completa el refrán.", q: "Quand on veut, on ___ .", acc: ["peut"], why: "<b>peut</b>." },
    { fase: "aplica", c: ["b2pv-patience", "b2pv-autres"], k: "match", ask: "Une cada principio con su final.", q: "Principio → final", pairs: [["Loin des yeux,", "loin du cœur."], ["L'union", "fait la force."], ["Rome ne s'est pas faite", "en un jour."], ["L'habit ne fait pas", "le moine."]], why: "Refranes." },
    { fase: "aplica", c: ["b2pv-autres"], k: "spot", ask: "Encuentra el error.", s: "Comme on dit , mieux vaut [prévoir] que guérir .", fix: "prévenir", why: "<b>prévenir</b>." },
    { fase: "aplica", c: ["b2pv-autres"], k: "spot", ask: "Encuentra el error.", s: "Courage ! Après la pluie , le [soleil] .", fix: "beau temps", why: "<b>le beau temps</b>." },
    { fase: "dominio", c: ["b2pv-autres"], k: "order", ask: "Ordena: «La unión hace la fuerza».", tokens: ["L'union", "fait", "la force."], why: "<b>L'union fait la force.</b>" },
    { fase: "dominio", c: ["b2pv-patience"], k: "choice", ask: "«No se ganó Zamora en una hora.»", q: "«___»", o: ["Rome ne s'est pas faite en un jour.", "Paris ne s'est pas faite en une heure."], a: 0, why: "<b>Rome ne s'est pas faite en un jour.</b>" },
    { fase: "dominio", c: ["b2pv-patience", "b2pv-autres"], k: "listen", say: "Il ne faut pas vendre la peau de l'ours avant de l'avoir tué.", acc: ["Il ne faut pas vendre la peau de l'ours avant de l'avoir tué."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Il ne faut pas vendre la peau de l'ours avant de l'avoir tué.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Rome"], previo: [] }
};

})();
