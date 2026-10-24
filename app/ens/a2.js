/* PLEX PLAY 4.55 — Sistema de enseñanza: las fichas del curso «Francés A2» (a2). Solo datos (los pinta js/plx122.js).
   La app baja este archivo al abrir una lección del curso (y también A1, el curso anterior).
   A2 parte de A1: BASE son todos los conceptos de Primeros pasos y de A1, que las fichas dan por enseñados.
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
  "if-inf", "if-neg", "ae-sens", "ae-besoin", "bn-voyelle", "bn-fem", "pl2-s", "pl2-x", "cm-corps", "cm-cadre"];
var R = function(){ return BASE.concat([].slice.call(arguments)); };

/* ================================ A2·1 a A2·3 ================================ */

E["a2-passe-compose-avoir"] = {
  v: 1, arts: false, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Le passé composé avec avoir",
  objetivo: {
    que: "Vas a contar acciones terminadas con avoir + participio: j'ai mangé, nous avons fini.",
    corto: "J'ai mangé, j'ai fait.",
    podras: ["Formar el passé composé con avoir.", "Formar participios regulares: parlé, fini, attendu.", "Usar los irregulares: fait, pris, vu, bu, écrit…"],
    iconos: ["ic2/reloj-arena", "ic2/lapiz", "ic2/libros"],
    previos: ["avoir en presente (A1, lección 5) y los verbos en -er (A1, lección 4)."],
    capacidad: "Ahora puedes contar lo que hiciste ayer o el fin de semana."
  },
  requiere: R(), recupera: ["ir-etre-avoir", "er-term"],
  conceptos: {
    "pca-forma": { n: "avoir + participio; -é, -i, -u", b: "gr" },
    "pca-irreg": { n: "fait, pris, vu, eu, été, bu, lu, dit, écrit, mis", b: "gr" },
    "pca-neg": { n: "je n'ai pas + participio", b: "gr" }
  },
  video: {
    titulo: "El passé composé con avoir",
    voz: "es-CO-SalomeNeural",
    escenas: [
      {
        v: "persona",
        cap: "Para qué sirve",
        fondo: "esc/cafe-lyon",
        img: "pj/hugo-neutro",
        fr: "Qu'est-ce que tu as fait ce week-end ?",
        es: "¿Qué hiciste este fin de semana?",
        nota: "El lunes por la mañana",
        seg: [
          {
            es: "Es lunes. Hugo le pregunta a Camila por su fin de semana."
          },
          {
            fr: "Qu'est-ce que tu as fait ce week-end ?",
            p: 1
          },
          {
            es: "Para contar lo que hiciste necesitas el passé composé: el pasado más usado del francés. Hoy aprendes a armarlo con avoir.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "La fórmula",
        titulo: "Avoir + participio",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "j'ai parlé · tu as mangé",
            es: "hablé · comiste"
          },
          {
            p: 2,
            fr: "Nous avons fini l'examen.",
            es: "Terminamos el examen."
          },
          {
            p: 3,
            fr: "il a attendu",
            es: "esperó"
          },
          {
            p: 4,
            regla: "-er → -é (parlé) · -ir → -i (fini) · -re → -u (attendu)"
          }
        ],
        seg: [
          {
            es: "Avoir en presente, más el participio.",
            p: 1
          },
          {
            fr: "j'ai parlé",
            p: 1
          },
          {
            fr: "tu as mangé",
            p: 1
          },
          {
            es: "Los verbos en er terminan en é; los en ir, en i:",
            p: 2
          },
          {
            fr: "Nous avons fini l'examen.",
            p: 2
          },
          {
            es: "Y los en re, en u:",
            p: 3
          },
          {
            fr: "il a attendu",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Irregulares",
        titulo: "Participios que hay que memorizar",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Samedi, j'ai fait du sport.",
            es: "El sábado hice deporte. (faire → fait)"
          },
          {
            p: 2,
            fr: "Paul a pris le train.",
            es: "Paul tomó el tren. (prendre → pris)"
          },
          {
            p: 3,
            fr: "Hier soir, j'ai vu un film.",
            es: "Anoche vi una película. (voir → vu)"
          },
          {
            p: 4,
            fr: "Ma sœur a écrit une lettre.",
            es: "Mi hermana escribió una carta. (écrire → écrit)"
          }
        ],
        seg: [
          {
            es: "Los más usados son irregulares. Faire, fait:",
            p: 1
          },
          {
            fr: "Samedi, j'ai fait du sport.",
            p: 1
          },
          {
            es: "Prendre, pris:",
            p: 2
          },
          {
            fr: "Paul a pris le train.",
            p: 2
          },
          {
            es: "Voir, vu:",
            p: 3
          },
          {
            fr: "Hier soir, j'ai vu un film.",
            p: 3
          },
          {
            es: "Écrire, écrit:",
            p: 4
          },
          {
            fr: "Ma sœur a écrit une lettre.",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Más irregulares",
        titulo: "Être, boire, avoir",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Hier, j'ai été malade.",
            es: "Ayer estuve enfermo. (être → été)"
          },
          {
            p: 2,
            fr: "Qu'est-ce que vous avez bu ?",
            es: "¿Qué tomaron? (boire → bu)"
          },
          {
            p: 3,
            fr: "eu (avoir) · lu (lire) · dit (dire) · mis (mettre)",
            es: "tenido · leído · dicho · puesto"
          }
        ],
        seg: [
          {
            fr: "Hier, j'ai été malade.",
            p: 1
          },
          {
            fr: "Qu'est-ce que vous avez bu ?",
            p: 2
          },
          {
            es: "Y cuatro más, cortitos:",
            p: 3
          },
          {
            fr: "eu",
            p: 3
          },
          {
            fr: "lu",
            p: 3
          },
          {
            fr: "dit",
            p: 3
          },
          {
            fr: "mis",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En negativo",
        titulo: "Ne… pas rodea a avoir",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Je n'ai pas vu le film.",
            es: "No vi la película."
          },
          {
            p: 2,
            fr: "Nous n'avons pas mangé au restaurant.",
            es: "No comimos en el restaurante."
          },
          {
            p: 3,
            regla: "ne + avoir + pas + participio"
          }
        ],
        seg: [
          {
            es: "En negativo, ne y pas van alrededor de avoir, no del participio.",
            p: 1
          },
          {
            fr: "Je n'ai pas vu le film.",
            p: 1
          },
          {
            fr: "Nous n'avons pas mangé au restaurant.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En la vida real",
        titulo: "El fin de semana",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Qu'est-ce que tu as fait ce week-end ?",
            es: "¿Qué hiciste este fin de semana?"
          },
          {
            p: 2,
            fr: "Samedi, j'ai fait du sport et j'ai écrit à ma mère.",
            es: "El sábado hice deporte y le escribí a mi mamá."
          },
          {
            p: 3,
            fr: "Et dimanche ? Tu as vu le film de Céline Sciamma ?",
            es: "¿Y el domingo? ¿Viste la película de Céline Sciamma?"
          },
          {
            p: 4,
            fr: "Non, je n'ai pas vu le film. J'ai fini mes devoirs !",
            es: "No, no vi la película. ¡Terminé mis tareas!"
          }
        ],
        seg: [
          {
            es: "Escucha cómo suena en una conversación de verdad."
          },
          {
            fr: "Qu'est-ce que tu as fait ce week-end ?",
            p: 1
          },
          {
            fr: "Samedi, j'ai fait du sport et j'ai écrit à ma mère.",
            p: 2
          },
          {
            fr: "Et dimanche ? Tu as vu le film de Céline Sciamma ?",
            p: 3
          },
          {
            fr: "Non, je n'ai pas vu le film. J'ai fini mes devoirs !",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Contraste con el español",
        titulo: "Un solo pasado para dos",
        mz: "m2d/alerta",
        items: [
          {
            p: 1,
            regla: "Español: comí / he comido · francés: j'ai mangé (los dos)"
          },
          {
            p: 2,
            regla: "Español: tomé · francés: j'ai pris (no prendu)"
          },
          {
            p: 3,
            regla: "Español: no lo vi · francés: je n'ai pas vu (pas antes del participio)"
          }
        ],
        seg: [
          {
            es: "En español distinguimos comí y he comido. En francés, en la conversación, los dos son j'ai mangé.",
            p: 1
          },
          {
            es: "Cuidado con los irregulares: tomar es pris, no prendu.",
            p: 2
          },
          {
            es: "Y el pas va antes del participio.",
            p: 3
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Paul a prendu le train.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Paul a pris le train.",
          es: "prendre → pris."
        },
        seg: [
          {
            es: "Primera trampa: prendu.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Paul a pris le train.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Je n'ai vu pas le film.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Je n'ai pas vu le film.",
          es: "ne… pas rodea al auxiliar."
        },
        seg: [
          {
            es: "Segunda trampa: pas después del participio.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Je n'ai pas vu le film.",
            p: 2
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/pensativo",
        q: "«Comimos una pizza en casa.»",
        o: [
          "Nous avons mangé une pizza à la maison.",
          "Nous sommes mangé une pizza à la maison."
        ],
        a: 0,
        bien: "¡Eso es! Avec avoir.",
        mal: "Manger va con avoir: nous avons mangé.",
        seg: [
          {
            es: "Te toca. ¿Cómo dices comimos una pizza en casa?"
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/confundido",
        q: "«No terminé mis tareas.»",
        o: [
          "Je n'ai pas fini mes devoirs.",
          "Je n'ai fini pas mes devoirs."
        ],
        a: 0,
        bien: "¡Muy bien!",
        mal: "Pas va antes del participio: je n'ai pas fini.",
        seg: [
          {
            es: "Una más. ¿Cómo dices no terminé mis tareas?"
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
            fr: "Nous avons mangé une pizza à la maison.",
            es: "Comimos una pizza en casa."
          },
          {
            p: 2,
            fr: "Ma sœur a écrit à sa grand-mère.",
            es: "Mi hermana le escribió a su abuela."
          },
          {
            p: 3,
            fr: "Je n'ai pas fini mes devoirs.",
            es: "No terminé mis tareas."
          }
        ],
        seg: [
          {
            es: "Ahora tú. Escucha cada frase y repítela en voz alta."
          },
          {
            fr: "Nous avons mangé une pizza à la maison.",
            p: 1
          },
          {
            es: "Otra vez.",
            p: 1
          },
          {
            fr: "Nous avons mangé une pizza à la maison.",
            p: 1
          },
          {
            fr: "Ma sœur a écrit à sa grand-mère.",
            p: 2
          },
          {
            es: "Otra vez.",
            p: 2
          },
          {
            fr: "Ma sœur a écrit à sa grand-mère.",
            p: 2
          },
          {
            fr: "Je n'ai pas fini mes devoirs.",
            p: 3
          },
          {
            es: "Otra vez.",
            p: 3
          },
          {
            fr: "Je n'ai pas fini mes devoirs.",
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
                "Infinitivo",
                "Participio"
              ],
              [
                "parler · finir · attendre",
                "parlé · fini · attendu"
              ],
              [
                "faire · prendre",
                "fait · pris"
              ],
              [
                "voir · boire · lire",
                "vu · bu · lu"
              ],
              [
                "être · avoir · écrire",
                "été · eu · écrit"
              ]
            ]
          },
          {
            p: 2,
            regla: "avoir + participio · ne + avoir + pas + participio"
          }
        ],
        seg: [
          {
            es: "Repasemos.",
            p: 1
          },
          {
            es: "Avoir más el participio.",
            p: 1
          },
          {
            es: "Y los irregulares, de memoria. ¡Ahora, a practicar!",
            p: 2
          }
        ]
      }
    ]
  },
  contexto: {
    titulo: "El fin de semana", img: "bg-cafe", yo: "camila",
    escena: "El lunes, Hugo le pregunta a Camila por su fin de semana.",
    pj: PJ,
    lineas: [
      ["hugo", "Qu'est-ce que tu as fait ce week-end ?", "¿Qué hiciste este fin de semana?"],
      ["camila", "Samedi, j'ai fait du sport et j'ai écrit à ma mère.", "El sábado hice deporte y le escribí a mi mamá."],
      ["hugo", "Et dimanche ? Tu as vu le film de Céline Sciamma ?", "¿Y el domingo? ¿Viste la película de Céline Sciamma?"],
      ["camila", "Non, je n'ai pas vu le film. J'ai fini mes devoirs !", "No, no vi la película. ¡Terminé mis tareas!"]
    ],
    fijate: "Fíjate: j'ai fait, j'ai écrit, je n'ai pas vu, j'ai fini."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Avoir + participio",
      idea: "avoir en presente + participio. -er → -é (parlé), -ir → -i (fini), -re → -u (attendu). La negación rodea al auxiliar: je n'ai pas mangé.",
      intro: "Toca cada forma.",
      tabla: [["Francés", "Español", "Regla"], [
        ["j'ai parlé", "hablé / he hablado", "-er → -é"],
        ["tu as mangé", "comiste", "-er → -é"],
        ["Nous avons fini l'examen.", "Terminamos el examen.", "-ir → -i"],
        ["il a attendu", "esperó", "-re → -u"],
        ["Samedi, j'ai fait du sport.", "El sábado hice deporte.", "faire → fait"],
        ["Paul a pris le train.", "Paul tomó el tren.", "prendre → pris"],
        ["Hier soir, j'ai vu un film.", "Anoche vi una película.", "voir → vu"],
        ["Qu'est-ce que vous avez bu ?", "¿Qué tomaron?", "boire → bu"],
        ["Ma sœur a écrit une lettre.", "Mi hermana escribió una carta.", "écrire → écrit"],
        ["Hier, j'ai été malade.", "Ayer estuve enfermo.", "être → été"],
        ["Je n'ai pas vu le film.", "No vi la película.", "negación"],
        ["Nous n'avons pas mangé au restaurant.", "No comimos en el restaurante.", "negación"]
      ]],
      ej: [["eu (avoir)", "tenido"], ["lu (lire)", "leído"], ["dit (dire)", "dicho"], ["mis (mettre)", "puesto"], ["toute la journée", "todo el día"]] },
    {
      id: "ojo",
      tipo: "ojo",
      titulo: "Errores frecuentes",
      intro: "Tres errores que cometemos casi todos los hispanohablantes. Cázalos uno por uno.",
      errores: [
        {
          sit: "Camila cuenta:",
          frase: "Dimanche, Paul a prendu le train pour Lyon.",
          mal: "prendu",
          bien: "pris",
          porque: "Aplicamos la regla -re → -u.",
          truco: "Prendre es irregular: pris."
        },
        {
          sit: "Camila sigue:",
          frase: "Samedi, j'ai faisé du sport.",
          mal: "faisé",
          bien: "fait",
          porque: "Armamos el participio desde nous faisons.",
          truco: "Faire → fait."
        },
        {
          sit: "Camila responde:",
          frase: "Non, je n'ai vu pas le film.",
          mal: "n'ai vu pas",
          bien: "n'ai pas vu",
          porque: "Ponemos pas después del verbo que lleva el sentido.",
          truco: "Ne… pas rodean a avoir: je n'ai pas vu."
        }
      ]
    }
  ],
  ejemplos: [
    {
      sit: "«Comimos una pizza en casa.»",
      resp: "Nous avons mangé une pizza à la maison.",
      porque: "avons + mangé.",
      pasos: [
        {
          q: "¿Avoir o être?",
          ops: [
            "avoir",
            "être"
          ],
          ok: 0
        },
        {
          q: "¿Participio de manger?",
          ops: [
            "mangé",
            "manger"
          ],
          ok: 0
        },
        {
          q: "¿Con nous?",
          ops: [
            "avons mangé",
            "avez mangé"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«Mi hermana le escribió a su abuela.»",
      resp: "Ma sœur a écrit à sa grand-mère.",
      porque: "écrire → écrit.",
      pasos: [
        {
          q: "¿Avoir o être?",
          ops: [
            "avoir",
            "être"
          ],
          ok: 0
        },
        {
          q: "¿Participio de écrire?",
          ops: [
            "écrit",
            "écrivé"
          ],
          ok: 0
        },
        {
          q: "¿Cómo queda?",
          ops: [
            "a écrit",
            "est écrit"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«No terminé mis tareas.»",
      resp: "Je n'ai pas fini mes devoirs.",
      porque: "ne + ai + pas + fini.",
      pasos: [
        {
          q: "¿Participio de finir?",
          ops: [
            "fini",
            "finé"
          ],
          ok: 0
        },
        {
          q: "¿Dónde va pas?",
          ops: [
            "antes de fini",
            "después de fini"
          ],
          ok: 0
        },
        {
          q: "¿Cómo queda?",
          ops: [
            "je n'ai pas fini",
            "je n'ai fini pas"
          ],
          ok: 0
        }
      ]
    }
  ],
  comprueba: [
    { q: "El participio de prendre es…", o: ["pris", "prendu"], a: 0, b: "gr", porque: "Irregular." },
    { q: "En negación, ne… pas rodea…", o: ["al auxiliar", "al participio"], a: 0, b: "gr", porque: "je n'ai pas vu." },
    { q: "El participio de los verbos en -ir como finir es…", o: ["-i", "-é"], a: 0, b: "gr", porque: "fini." }
  ],
  practica: [
    { fase: "guiada", c: ["pca-irreg"], k: "choice", ask: "«Anoche vi una película en la tele.»", q: "«Hier soir, j'ai ___ un film à la télé.»", o: ["vu", "voir", "voyé"], a: 0, pista: "voir → ?", why: "<b>vu</b>." },
    { fase: "guiada", c: ["pca-forma"], k: "choice", ask: "«Comimos una pizza en casa.»", q: "«Samedi, nous ___ une pizza à la maison.»", o: ["avons mangé", "sommes mangé", "avons manger"], a: 0, pista: "avoir + -é.", why: "<b>avons mangé</b>." },
    { fase: "guiada", c: ["pca-irreg"], k: "match", ask: "Une cada infinitivo con su participio.", q: "Infinitivo → participio", pairs: [["faire", "fait"], ["prendre", "pris"], ["boire", "bu"], ["mettre", "mis"], ["écrire", "écrit"], ["lire", "lu"]], pista: "De memoria.", why: "Irregulares." },
    { fase: "indep", c: ["pca-forma", "pca-irreg"], k: "sort", ask: "¿Regular o irregular?", q: "Clasifica.", cats: ["Participio regular", "Participio irregular"], items: [["parlé (parler)", 0], ["fini (finir)", 0], ["attendu (attendre)", 0], ["dit (dire)", 1], ["eu (avoir)", 1], ["été (être)", 1], ["mis (mettre)", 1]], why: "Regulares e irregulares." },
    { fase: "indep", c: ["pca-irreg"], k: "spot", ask: "Encuentra el error.", s: "Dimanche , Paul a [prendu] le train pour Lyon .", fix: "pris", why: "<b>pris</b>." },
    { fase: "indep", c: ["pca-irreg"], k: "fill", ask: "Escribe écrire en passé composé (elle).", q: "Ma sœur ___ une lettre à sa grand-mère.", acc: ["a écrit"], why: "<b>a écrit</b>." },
    { fase: "aplica", c: ["pca-neg"], k: "choice", ask: "— «Vous avez mangé au restaurant ?» — «No.»", q: "«Non, nous ___ au restaurant.»", o: ["n'avons pas mangé", "avons pas mangé", "n'avons mangé pas"], a: 0, why: "<b>n'avons pas mangé</b>." },
    { fase: "aplica", c: ["pca-irreg"], k: "fill", ask: "Escribe être en passé composé (je).", q: "Hier, j'___ malade toute la journée.", acc: ["ai été"], why: "<b>ai été</b>." },
    { fase: "dominio", c: ["pca-irreg"], k: "choice", ask: "«¿Qué tomaron en el café?»", q: "«Qu'est-ce que vous avez ___ au café ?»", o: ["bu", "boire", "buvé"], a: 0, why: "<b>bu</b>." },
    { fase: "dominio", c: ["pca-neg"], k: "order", ask: "Ordena: «No terminé mis tareas».", tokens: ["Je", "n'ai pas", "fini", "mes devoirs."], why: "<b>Je n'ai pas fini mes devoirs.</b>" },
    { fase: "dominio", c: ["pca-forma", "pca-irreg", "pca-neg"], k: "listen", say: "Hier, j'ai été malade toute la journée.", acc: ["Hier, j'ai été malade toute la journée.", "Hier j'ai été malade toute la journée."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Hier, j'ai été malade toute la journée.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paul", "Lyon", "Céline", "Sciamma"], previo: ["hier", "week-end", "sport", "écrit", "mère", "film", "devoirs", "examen", "lettre", "grand-mère", "malade", "maison", "télé", "train", "voir", "écrire", "faire", "prendre", "mettre", "lire", "voyé", "buvé", "boire", "manger", "sommes"] }
};

E["a2-passe-compose-etre"] = {
  v: 1, arts: false, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Le passé composé avec être",
  objetivo: {
    que: "Vas a usar être con los verbos de movimiento o cambio y con los pronominales, y a concordar el participio.",
    corto: "Elle est partie.",
    podras: ["Reconocer los verbos con être (aller, venir, partir, naître…).", "Concordar: elle est allée, ils sont venus.", "Usar être con los pronominales: je me suis levé."],
    iconos: ["m2d/correr", "ic2/reloj-arena", "ic2/bombilla"],
    previos: ["El passé composé con avoir (lección 1) y être (A1)."],
    capacidad: "Ahora puedes contar adónde fuiste y cuándo llegaste."
  },
  requiere: R("pca-forma", "pca-irreg", "pca-neg"), recupera: ["pca-forma"],
  conceptos: {
    "pce-verbes": { n: "aller, venir, partir, arriver, naître, mourir… + être", b: "gr" },
    "pce-accord": { n: "concordancia: allée, venus, parties", b: "gr" }
  },
  video: {
    titulo: "El passé composé con être",
    voz: "es-CO-SalomeNeural",
    escenas: [
      {
        v: "persona",
        cap: "Para qué sirve",
        fondo: "esc/terraza-paris",
        img: "pj/hugo-neutro",
        fr: "Tu es allée où en vacances ?",
        es: "¿Adónde fuiste de vacaciones?",
        nota: "Las vacaciones",
        seg: [
          {
            es: "Hugo le pregunta a Camila por sus vacaciones en Colombia."
          },
          {
            fr: "Tu es allée où en vacances ?",
            p: 1
          },
          {
            es: "Unos pocos verbos forman el pasado con être, no con avoir, y su participio concuerda como un adjetivo. Hoy aprendes cuáles.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Los verbos",
        titulo: "Movimiento y cambio: être",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "aller · venir · partir · arriver",
            es: "ir · venir · irse · llegar"
          },
          {
            p: 2,
            fr: "entrer · sortir · rester · tomber",
            es: "entrar · salir · quedarse · caer"
          },
          {
            p: 3,
            fr: "naître → né · mourir → mort",
            es: "nacer · morir"
          },
          {
            p: 4,
            regla: "verbos de movimiento o cambio + todos los pronominales: être"
          }
        ],
        seg: [
          {
            es: "Van con être los verbos de movimiento:",
            p: 1
          },
          {
            fr: "aller",
            p: 1
          },
          {
            fr: "venir",
            p: 1
          },
          {
            fr: "partir",
            p: 1
          },
          {
            fr: "arriver",
            p: 1
          },
          {
            fr: "entrer",
            p: 2
          },
          {
            fr: "sortir",
            p: 2
          },
          {
            fr: "rester",
            p: 2
          },
          {
            fr: "tomber",
            p: 2
          },
          {
            es: "Y los de cambio de estado: nacer y morir.",
            p: 3
          },
          {
            fr: "naître",
            p: 3
          },
          {
            fr: "né",
            p: 3
          },
          {
            fr: "mourir",
            p: 3
          },
          {
            fr: "mort",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Concuerda",
        titulo: "El participio concuerda",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Je suis allé à Santa Marta.",
            es: "Fui a Santa Marta. (hombre)"
          },
          {
            p: 2,
            fr: "Je suis allée à Santa Marta.",
            es: "Fui a Santa Marta. (mujer)"
          },
          {
            p: 3,
            fr: "Elle est partie. · Elle est née à Cúcuta.",
            es: "Se fue. · Nació en Cúcuta."
          },
          {
            p: 4,
            regla: "con être: + e (ella) · + s (ellos) · + es (ellas)"
          }
        ],
        seg: [
          {
            es: "Con être, el participio concuerda con el sujeto, como un adjetivo.",
            p: 1
          },
          {
            fr: "Je suis allé à Santa Marta.",
            p: 1
          },
          {
            es: "Si es una mujer, más e:",
            p: 2
          },
          {
            fr: "Je suis allée à Santa Marta.",
            p: 2
          },
          {
            fr: "Elle est partie.",
            p: 3
          },
          {
            fr: "Elle est née à Cúcuta.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Plural",
        titulo: "Arrivés, rentrées",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Nous sommes arrivés le soir.",
            es: "Llegamos por la noche."
          },
          {
            p: 2,
            fr: "Elles sont rentrées à minuit.",
            es: "Volvieron a medianoche."
          },
          {
            p: 3,
            fr: "Paul et Sophie sont allés au Mexique.",
            es: "Paul y Sophie fueron a México."
          }
        ],
        seg: [
          {
            es: "En plural, s:",
            p: 1
          },
          {
            fr: "Nous sommes arrivés le soir.",
            p: 1
          },
          {
            es: "Solo mujeres, es:",
            p: 2
          },
          {
            fr: "Elles sont rentrées à minuit.",
            p: 2
          },
          {
            es: "Un hombre y una mujer: masculino plural.",
            p: 3
          },
          {
            fr: "Paul et Sophie sont allés au Mexique.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Pronominales",
        titulo: "Me suis levée",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Ce matin, je me suis levée à six heures.",
            es: "Esta mañana me levanté a las seis."
          },
          {
            p: 2,
            fr: "Il est resté à la maison.",
            es: "Se quedó en casa."
          },
          {
            p: 3,
            fr: "Nous ne sommes pas sortis.",
            es: "No salimos."
          }
        ],
        seg: [
          {
            es: "Todos los pronominales van con être:",
            p: 1
          },
          {
            fr: "Ce matin, je me suis levée à six heures.",
            p: 1
          },
          {
            fr: "Il est resté à la maison.",
            p: 2
          },
          {
            es: "Y en negativo, ne y pas alrededor de être:",
            p: 3
          },
          {
            fr: "Nous ne sommes pas sortis.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En la vida real",
        titulo: "Las vacaciones",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Tu es allée où en vacances ?",
            es: "¿Adónde fuiste de vacaciones?"
          },
          {
            p: 2,
            fr: "Je suis allée à Santa Marta. Mes parents sont arrivés en avion.",
            es: "Fui a Santa Marta. Mis padres llegaron en avión."
          },
          {
            p: 3,
            fr: "Et ta cousine ?",
            es: "¿Y tu prima?"
          },
          {
            p: 4,
            fr: "Elle est restée à Bogotá. Elle est née là-bas, en 2005.",
            es: "Se quedó en Bogotá. Nació allá, en 2005."
          }
        ],
        seg: [
          {
            es: "Escucha cómo suena en una conversación de verdad."
          },
          {
            fr: "Tu es allée où en vacances ?",
            p: 1
          },
          {
            fr: "Je suis allée à Santa Marta. Mes parents sont arrivés en avion.",
            p: 2
          },
          {
            fr: "Et ta cousine ?",
            p: 3
          },
          {
            fr: "Elle est restée à Bogotá. Elle est née là-bas, en 2005.",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Contraste con el español",
        titulo: "Fui… je suis allé",
        mz: "m2d/alerta",
        items: [
          {
            p: 1,
            regla: "Español: he ido · francés: je suis allé (no j'ai allé)"
          },
          {
            p: 2,
            regla: "En español el participio no cambia · en francés sí: allée, allés"
          },
          {
            p: 3,
            regla: "Truco: verbos de la «casa»: entrar, salir, subir, bajar, quedarse, nacer, morir"
          }
        ],
        seg: [
          {
            es: "En español todo va con haber. En francés, estos verbos van con être.",
            p: 1
          },
          {
            es: "Y el participio concuerda: allée, allés, allées.",
            p: 2
          },
          {
            es: "Un truco: piensa en una casa. Se entra, se sale, se sube, se baja, se nace y se muere.",
            p: 3
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "J'ai allé au cinéma.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Je suis allé au cinéma.",
          es: "aller: être."
        },
        seg: [
          {
            es: "Primera trampa: aller con avoir.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Je suis allé au cinéma.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Elles sont allés.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Elles sont allées.",
          es: "Solo mujeres: + es."
        },
        seg: [
          {
            es: "Segunda trampa: olvidar la concordancia.",
            p: 1
          },
          {
            es: "Se escribe:",
            p: 2
          },
          {
            fr: "Elles sont allées.",
            p: 2
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/pensativo",
        q: "«Mis padres llegaron en avión.»",
        o: [
          "Mes parents sont arrivés en avion.",
          "Mes parents ont arrivé en avion."
        ],
        a: 0,
        bien: "¡Eso es! Sont arrivés.",
        mal: "Arriver va con être, y concuerda: arrivés.",
        seg: [
          {
            es: "Te toca. ¿Cómo dices mis padres llegaron en avión?"
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/confundido",
        q: "«Léa fue al mercado.»",
        o: [
          "Léa est allée au marché.",
          "Léa est allé au marché."
        ],
        a: 0,
        bien: "¡Muy bien! Allée.",
        mal: "Léa es mujer: allée.",
        seg: [
          {
            es: "Una más. ¿Cómo dices Léa fue al mercado?"
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
            fr: "Mes parents sont arrivés en avion.",
            es: "Mis padres llegaron en avión."
          },
          {
            p: 2,
            fr: "Léa est allée au marché.",
            es: "Léa fue al mercado."
          },
          {
            p: 3,
            fr: "Nous ne sommes pas sortis de la maison.",
            es: "No salimos de casa."
          }
        ],
        seg: [
          {
            es: "Ahora tú. Escucha cada frase y repítela en voz alta."
          },
          {
            fr: "Mes parents sont arrivés en avion.",
            p: 1
          },
          {
            es: "Otra vez.",
            p: 1
          },
          {
            fr: "Mes parents sont arrivés en avion.",
            p: 1
          },
          {
            fr: "Léa est allée au marché.",
            p: 2
          },
          {
            es: "Otra vez.",
            p: 2
          },
          {
            fr: "Léa est allée au marché.",
            p: 2
          },
          {
            fr: "Nous ne sommes pas sortis de la maison.",
            p: 3
          },
          {
            es: "Otra vez.",
            p: 3
          },
          {
            fr: "Nous ne sommes pas sortis de la maison.",
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
                "aller (passé composé)"
              ],
              [
                "je (hombre / mujer)",
                "je suis allé / allée"
              ],
              [
                "il / elle",
                "il est allé / elle est allée"
              ],
              [
                "nous",
                "nous sommes allés"
              ],
              [
                "elles",
                "elles sont allées"
              ]
            ]
          },
          {
            p: 2,
            regla: "movimiento, cambio y pronominales: être + concordancia"
          }
        ],
        seg: [
          {
            es: "Repasemos.",
            p: 1
          },
          {
            es: "Estos verbos van con être.",
            p: 1
          },
          {
            es: "Y el participio concuerda: e, s, es. ¡Ahora, a practicar!",
            p: 2
          }
        ]
      }
    ]
  },
  contexto: {
    titulo: "Las vacaciones", img: "bg-paris", yo: "camila",
    escena: "Camila cuenta sus vacaciones en Colombia.",
    pj: PJ,
    lineas: [
      ["hugo", "Tu es allée où en vacances ?", "¿Adónde fuiste de vacaciones?"],
      ["camila", "Je suis allée à Santa Marta. Mes parents sont arrivés en avion.", "Fui a Santa Marta. Mis padres llegaron en avión."],
      ["hugo", "Et ta cousine ?", "¿Y tu prima?"],
      ["camila", "Elle est restée à Bogotá. Elle est née là-bas, en 2005.", "Se quedó en Bogotá. Nació allá, en 2005."]
    ],
    fijate: "Fíjate: je suis allée (Camila es mujer), ils sont arrivés, elle est née."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Être + participio",
      idea: "Verbos de movimiento o cambio (aller, venir, partir, arriver, entrer, sortir, rester, tomber, naître, mourir…) y todos los pronominales van con être. El participio concuerda con el sujeto: +e, +s, +es.",
      intro: "Toca cada forma.",
      tabla: [["Francés", "Español", "Concordancia"], [
        ["Je suis allé à Santa Marta.", "Fui a Santa Marta. (hombre)", "—"],
        ["Je suis allée à Santa Marta.", "Fui a Santa Marta. (mujer)", "+ e"],
        ["Elle est partie.", "Se fue.", "+ e"],
        ["Nous sommes arrivés le soir.", "Llegamos por la noche.", "+ s"],
        ["Elles sont rentrées à minuit.", "Volvieron a medianoche.", "+ es"],
        ["Elle est née à Cúcuta.", "Nació en Cúcuta.", "+ e"],
        ["Il est resté à la maison.", "Se quedó en casa.", "—"],
        ["Paul et Sophie sont allés au Mexique.", "Paul y Sophie fueron a México.", "grupo mixto: + s"],
        ["Ce matin, je me suis levée à six heures.", "Esta mañana me levanté a las seis.", "pronominal"],
        ["Nous ne sommes pas sortis.", "No salimos.", "negación"]
      ]],
      ej: [["naître → né", "nacer → nacido"], ["mourir → mort", "morir → muerto"], ["venir → venu", "venir → venido"], ["descendre → descendu", "bajar → bajado"], ["rester → resté", "quedarse"], ["tomber", "caerse"], ["l'été dernier", "el verano pasado"], ["très tôt", "muy temprano"], ["voir → vu", "ver (con avoir)"], ["entrer", "entrar"], ["Il est arrivé.", "Llegó."], ["Elles sont allées.", "Ellas fueron."]] },
    {
      id: "ojo",
      tipo: "ojo",
      titulo: "Errores frecuentes",
      intro: "Tres errores que cometemos casi todos los hispanohablantes. Cázalos uno por uno.",
      errores: [
        {
          sit: "Hugo cuenta el viaje:",
          frase: "Hier, nous avons partis très tôt.",
          mal: "avons partis",
          bien: "sommes partis",
          porque: "En español todo va con haber.",
          truco: "Partir va con être: nous sommes partis."
        },
        {
          sit: "Camila habla de su prima:",
          frase: "Ma cousine est né à Bogotá en 2005.",
          mal: "né",
          bien: "née",
          porque: "En español el participio no cambia.",
          truco: "Con être concuerda: elle est née."
        },
        {
          sit: "Camila cuenta:",
          frase: "J'ai allé à Santa Marta.",
          mal: "J'ai allé",
          bien: "Je suis allée",
          porque: "Pensamos en «he ido».",
          truco: "Aller va con être; Camila es mujer: je suis allée."
        }
      ]
    }
  ],
  ejemplos: [
    {
      sit: "«Mis padres llegaron en avión.»",
      resp: "Mes parents sont arrivés en avion.",
      porque: "arriver + être + s.",
      pasos: [
        {
          q: "¿Avoir o être?",
          ops: [
            "être",
            "avoir"
          ],
          ok: 0
        },
        {
          q: "¿Concuerda?",
          ops: [
            "sí: arrivés",
            "no: arrivé"
          ],
          ok: 0
        },
        {
          q: "¿Cómo queda?",
          ops: [
            "sont arrivés",
            "ont arrivé"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«Léa fue al mercado.»",
      resp: "Léa est allée au marché.",
      porque: "aller + être + e.",
      pasos: [
        {
          q: "¿Avoir o être?",
          ops: [
            "être",
            "avoir"
          ],
          ok: 0
        },
        {
          q: "¿Léa es…?",
          ops: [
            "mujer: allée",
            "hombre: allé"
          ],
          ok: 0
        },
        {
          q: "¿Al mercado?",
          ops: [
            "au marché",
            "à le marché"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«No salimos de casa.»",
      resp: "Nous ne sommes pas sortis de la maison.",
      porque: "ne + sommes + pas + sortis.",
      pasos: [
        {
          q: "¿Avoir o être?",
          ops: [
            "être",
            "avoir"
          ],
          ok: 0
        },
        {
          q: "¿Dónde va pas?",
          ops: [
            "después de sommes",
            "después de sortis"
          ],
          ok: 0
        },
        {
          q: "¿Concuerda?",
          ops: [
            "sortis",
            "sorti"
          ],
          ok: 0
        }
      ]
    }
  ],
  comprueba: [
    { q: "Con être, el participio…", o: ["concuerda con el sujeto", "no cambia nunca"], a: 0, b: "gr", porque: "+e, +s." },
    { q: "Un grupo de hombres y mujeres lleva…", o: ["masculino plural", "femenino plural"], a: 0, b: "gr", porque: "allés." },
    { q: "Los verbos pronominales en passé composé van con…", o: ["être", "avoir"], a: 0, b: "gr", porque: "Siempre être." }
  ],
  practica: [
    { fase: "guiada", c: ["pce-accord"], k: "choice", ask: "«Léa fue al mercado con su madre.»", q: "«Samedi, Léa ___ au marché avec sa mère.»", o: ["est allée", "a allé", "est allé"], a: 0, pista: "être + concordancia.", why: "<b>est allée</b>." },
    { fase: "guiada", c: ["pce-verbes"], k: "sort", ask: "¿Con avoir o con être?", q: "Clasifica.", cats: ["con avoir", "con être"], items: [["manger", 0], ["voir", 0], ["faire", 0], ["boire", 0], ["partir", 1], ["tomber", 1], ["rester", 1], ["se réveiller", 1]], pista: "Movimiento y pronominales: être.", why: "Auxiliares." },
    { fase: "guiada", c: ["pce-verbes"], k: "match", ask: "Une cada infinitivo con su participio.", q: "Infinitivo → participio", pairs: [["naître", "né"], ["mourir", "mort"], ["venir", "venu"], ["descendre", "descendu"], ["rester", "resté"]], pista: "naître → né.", why: "Participios." },
    { fase: "indep", c: ["pce-accord"], k: "fill", ask: "Escribe arriver en passé composé (ils).", q: "Mes parents ___ à Cartagena en avion.", acc: ["sont arrivés"], why: "<b>sont arrivés</b>." },
    { fase: "indep", c: ["pce-verbes"], k: "spot", ask: "Encuentra el error.", s: "Hier , nous [avons] partis très tôt .", fix: "sommes", why: "<b>sommes partis</b>." },
    { fase: "indep", c: ["pce-accord"], k: "spot", ask: "Encuentra el error.", s: "Ma cousine est [né] à Bogotá en 2005 .", fix: "née", why: "<b>née</b>." },
    { fase: "aplica", c: ["pce-verbes", "pce-accord"], k: "fill", ask: "Escribe se lever en passé composé (je, mujer).", q: "Ce matin, je ___ à six heures.", acc: ["me suis levée"], why: "<b>me suis levée</b>." },
    { fase: "aplica", c: ["pce-accord"], k: "choice", ask: "«Paul y Sophie fueron a México.»", q: "«Paul et Sophie sont ___ au Mexique l'été dernier.»", o: ["allés", "allées", "allé"], a: 0, why: "Grupo mixto: <b>allés</b>." },
    { fase: "dominio", c: ["pce-verbes"], k: "fill", ask: "Escribe sortir en negativo (nous).", q: "Dimanche, nous ___ de la maison.", acc: ["ne sommes pas sortis"], why: "<b>ne sommes pas sortis</b>." },
    { fase: "dominio", c: ["pce-accord"], k: "order", ask: "Ordena: «Volvieron a medianoche» (ellas).", tokens: ["Elles", "sont", "rentrées", "à minuit."], why: "<b>Elles sont rentrées à minuit.</b>" },
    { fase: "dominio", c: ["pce-verbes", "pce-accord"], k: "listen", say: "Mes parents sont arrivés à Cartagena en avion.", acc: ["Mes parents sont arrivés à Cartagena en avion."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Mes parents sont arrivés à Cartagena en avion.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Santa Marta", "Bogotá", "Cúcuta", "Cartagena", "Léa", "Paul", "Sophie", "Mexique"], previo: ["vacances", "parents", "avion", "cousine", "là-bas", "minuit", "marché", "mère", "dernier", "tôt", "matin", "maison", "2005", "allé", "a"] }
};

E["a2-imparfait"] = {
  v: 1, arts: false, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "L'imparfait pour décrire",
  objetivo: {
    que: "Vas a formar el imparfait y usarlo para describir el pasado y las costumbres.",
    corto: "Quand j'étais petit…",
    podras: ["Formar el imparfait desde nous: parl- + -ais.", "Usar la excepción j'étais.", "Distinguir descripción (imparfait) de acción puntual (passé composé)."],
    iconos: ["ic2/reloj-arena", "m2d/pensativo", "ic2/libros"],
    previos: ["El passé composé (lecciones 1 y 2)."],
    capacidad: "Ahora puedes describir cómo eran las cosas antes."
  },
  requiere: R("pca-forma", "pce-verbes"), recupera: ["er-term"],
  conceptos: {
    "imp-forma": { n: "radical de nous + -ais, -ait, -ions, -aient; j'étais", b: "gr" },
    "imp-uso": { n: "descripción y hábito vs. acción puntual", b: "gr" }
  },
  video: {
    titulo: "El imparfait para describir",
    voz: "es-CO-SalomeNeural",
    escenas: [
      {
        v: "persona",
        cap: "Para qué sirve",
        fondo: "esc/cafe-lyon",
        img: "pj/camila-leyendo",
        fr: "Quand j'étais petite, j'habitais à Cali.",
        es: "Cuando era pequeña, vivía en Cali.",
        nota: "Recuerdos",
        seg: [
          {
            es: "Camila le cuenta a Hugo cómo era su infancia."
          },
          {
            fr: "Quand j'étais petite, j'habitais à Cali.",
            p: 1
          },
          {
            es: "Para describir el pasado y contar costumbres usas el imparfait, nuestro copretérito: era, vivía, jugaba. Hoy aprendes a formarlo.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "La fórmula",
        titulo: "Raíz de nous + terminación",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "nous parlons → parl-",
            es: "la raíz sale de nous"
          },
          {
            p: 2,
            fr: "je parlais · il parlait",
            es: "hablaba · hablaba"
          },
          {
            p: 3,
            fr: "nous parlions · ils parlaient",
            es: "hablábamos · hablaban"
          },
          {
            p: 4,
            regla: "-ais, -ais, -ait, -ions, -iez, -aient"
          }
        ],
        seg: [
          {
            es: "Tomas nous en presente y quitas ons: esa es la raíz.",
            p: 1
          },
          {
            es: "Le añades ais, ait, ions, aient:",
            p: 2
          },
          {
            fr: "je parlais",
            p: 2
          },
          {
            fr: "il parlait",
            p: 2
          },
          {
            fr: "nous parlions",
            p: 3
          },
          {
            fr: "ils parlaient",
            p: 3
          },
          {
            es: "Je, tu, il e ils suenan igual.",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Irregulares",
        titulo: "Faire, prendre… y être",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "nous faisons → je faisais",
            es: "hacía"
          },
          {
            p: 2,
            fr: "nous prenons → je prenais · nous buvons → je buvais",
            es: "tomaba · bebía"
          },
          {
            p: 3,
            fr: "j'étais / nous étions",
            es: "era / éramos"
          },
          {
            p: 4,
            regla: "la única excepción: être → ét-"
          }
        ],
        seg: [
          {
            es: "Con la raíz de nous salen solos los irregulares.",
            p: 1
          },
          {
            fr: "je faisais",
            p: 1
          },
          {
            fr: "je prenais",
            p: 2
          },
          {
            fr: "je buvais",
            p: 2
          },
          {
            es: "Solo être es distinto: ét.",
            p: 3
          },
          {
            fr: "j'étais",
            p: 3
          },
          {
            fr: "nous étions",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Describir",
        titulo: "Cómo era, qué se hacía",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Il faisait beau.",
            es: "Hacía buen tiempo."
          },
          {
            p: 2,
            fr: "D'habitude, je prenais le bus.",
            es: "Normalmente tomaba el bus."
          },
          {
            p: 3,
            fr: "Je jouais au foot tous les samedis.",
            es: "Jugaba al fútbol todos los sábados."
          }
        ],
        seg: [
          {
            es: "Para describir:",
            p: 1
          },
          {
            fr: "Il faisait beau.",
            p: 1
          },
          {
            es: "Y para las costumbres:",
            p: 2
          },
          {
            fr: "D'habitude, je prenais le bus.",
            p: 2
          },
          {
            fr: "Je jouais au foot tous les samedis.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Con el passé composé",
        titulo: "Fondo y acción",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Je regardais la télé quand le téléphone a sonné.",
            es: "Veía la tele cuando sonó el teléfono."
          },
          {
            p: 2,
            regla: "imparfait: lo que pasaba (fondo) · passé composé: lo que pasó (acción)"
          }
        ],
        seg: [
          {
            es: "Los dos pasados juntos: el imparfait es el fondo; el passé composé, la acción que interrumpe.",
            p: 1
          },
          {
            fr: "Je regardais la télé quand le téléphone a sonné.",
            p: 1
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En la vida real",
        titulo: "Recuerdos",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Quand j'étais petite, j'habitais à Cali.",
            es: "Cuando era pequeña, vivía en Cali."
          },
          {
            p: 2,
            fr: "Il faisait chaud ?",
            es: "¿Hacía calor?"
          },
          {
            p: 3,
            fr: "Oui, toujours ! Tous les samedis, je jouais au foot avec mon frère.",
            es: "¡Sí, siempre! Todos los sábados jugaba fútbol con mi hermano."
          },
          {
            p: 4,
            fr: "Un jour, je regardais la télé quand mon père est arrivé avec un chat.",
            es: "Un día, veía la tele cuando mi papá llegó con un gato."
          }
        ],
        seg: [
          {
            es: "Escucha cómo suena en una conversación de verdad."
          },
          {
            fr: "Quand j'étais petite, j'habitais à Cali.",
            p: 1
          },
          {
            fr: "Il faisait chaud ?",
            p: 2
          },
          {
            fr: "Oui, toujours ! Tous les samedis, je jouais au foot avec mon frère.",
            p: 3
          },
          {
            fr: "Un jour, je regardais la télé quand mon père est arrivé avec un chat.",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Contraste con el español",
        titulo: "Como el copretérito",
        mz: "m2d/alerta",
        items: [
          {
            p: 1,
            regla: "Español: era, vivía, jugaba · francés: j'étais, j'habitais, je jouais"
          },
          {
            p: 2,
            regla: "Español: veía cuando sonó · francés: je regardais quand… a sonné (igual)"
          },
          {
            p: 3,
            regla: "nous mangeons → je mangeais (se conserva la e)"
          }
        ],
        seg: [
          {
            es: "La buena noticia: el imparfait se usa como nuestro copretérito.",
            p: 1
          },
          {
            es: "Veía cuando sonó: igual que en francés.",
            p: 2
          },
          {
            es: "Un detalle: con manger, la e se queda: je mangeais.",
            p: 3
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Quand j'ai été petit…",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Quand j'étais petit…",
          es: "Descripción: imparfait."
        },
        seg: [
          {
            es: "Primera trampa: passé composé para describir.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Quand j'étais petit…",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "je mangais",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "je mangeais",
          es: "Se conserva la e."
        },
        seg: [
          {
            es: "Segunda trampa: mangais sin e.",
            p: 1
          },
          {
            es: "Se escribe:",
            p: 2
          },
          {
            fr: "je mangeais",
            p: 2
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/pensativo",
        q: "«Jugaba al fútbol todos los sábados.»",
        o: [
          "Je jouais au foot tous les samedis.",
          "J'ai joué au foot tous les samedis."
        ],
        a: 0,
        bien: "¡Eso es! Costumbre: imparfait.",
        mal: "Una costumbre del pasado: je jouais.",
        seg: [
          {
            es: "Te toca. ¿Cómo dices jugaba al fútbol todos los sábados?"
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/confundido",
        q: "«Ayer hacía frío en París.»",
        o: [
          "Hier, il faisait froid à Paris.",
          "Hier, il a fait froid à Paris."
        ],
        a: 0,
        bien: "¡Muy bien! Descripción.",
        mal: "El tiempo que hacía es descripción: il faisait.",
        seg: [
          {
            es: "Una más. ¿Cómo dices ayer hacía frío en París?"
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
            fr: "Je jouais au foot tous les samedis.",
            es: "Jugaba al fútbol todos los sábados."
          },
          {
            p: 2,
            fr: "Hier, il faisait froid à Paris.",
            es: "Ayer hacía frío en París."
          },
          {
            p: 3,
            fr: "Je regardais la télé quand mon frère est arrivé.",
            es: "Veía la tele cuando llegó mi hermano."
          }
        ],
        seg: [
          {
            es: "Ahora tú. Escucha cada frase y repítela en voz alta."
          },
          {
            fr: "Je jouais au foot tous les samedis.",
            p: 1
          },
          {
            es: "Otra vez.",
            p: 1
          },
          {
            fr: "Je jouais au foot tous les samedis.",
            p: 1
          },
          {
            fr: "Hier, il faisait froid à Paris.",
            p: 2
          },
          {
            es: "Otra vez.",
            p: 2
          },
          {
            fr: "Hier, il faisait froid à Paris.",
            p: 2
          },
          {
            fr: "Je regardais la télé quand mon frère est arrivé.",
            p: 3
          },
          {
            es: "Otra vez.",
            p: 3
          },
          {
            fr: "Je regardais la télé quand mon frère est arrivé.",
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
                "Persona",
                "parler",
                "être"
              ],
              [
                "je · tu",
                "parlais",
                "étais"
              ],
              [
                "il · elle",
                "parlait",
                "était"
              ],
              [
                "nous · vous",
                "parlions · parliez",
                "étions · étiez"
              ],
              [
                "ils",
                "parlaient",
                "étaient"
              ]
            ]
          },
          {
            p: 2,
            regla: "imparfait: descripción y costumbre · passé composé: acción"
          }
        ],
        seg: [
          {
            es: "Repasemos.",
            p: 1
          },
          {
            es: "Raíz de nous más ais, ait, ions, aient.",
            p: 1
          },
          {
            es: "Para describir y para las costumbres. ¡Ahora, a practicar!",
            p: 2
          }
        ]
      }
    ]
  },
  contexto: {
    titulo: "Recuerdos", img: "bg-cafe", yo: "camila",
    escena: "Camila le cuenta a Hugo su infancia en Cali.",
    pj: PJ,
    lineas: [
      ["camila", "Quand j'étais petite, j'habitais à Cali.", "Cuando era pequeña, vivía en Cali."],
      ["hugo", "Il faisait chaud ?", "¿Hacía calor?"],
      ["camila", "Oui, toujours ! Tous les samedis, je jouais au foot avec mon frère.", "¡Sí, siempre! Todos los sábados jugaba fútbol con mi hermano."],
      ["camila", "Un jour, je regardais la télé quand mon père est arrivé avec un chat.", "Un día, veía la tele cuando mi papá llegó con un gato."]
    ],
    fijate: "Fíjate: j'étais, j'habitais, je jouais (descripción) / est arrivé (una vez)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Formar y usar el imparfait",
      idea: "Radical de nous en presente (nous parlons → parl-) + -ais, -ais, -ait, -ions, -iez, -aient. Excepción: être → j'étais. Descripción o hábito → imparfait; acción puntual → passé composé.",
      intro: "Toca cada forma.",
      tabla: [["Francés", "Español", "Regla"], [
        ["je parlais", "hablaba", "-ais"],
        ["il parlait", "hablaba", "-ait"],
        ["nous parlions", "hablábamos", "-ions"],
        ["ils parlaient", "hablaban", "-aient"],
        ["nous faisons → je faisais", "hacía", "radical fais-"],
        ["nous prenons → je prenais", "tomaba", "radical pren-"],
        ["nous buvons → je buvais", "bebía", "radical buv-"],
        ["j'étais / nous étions", "era / éramos", "excepción"],
        ["Il faisait beau.", "Hacía buen tiempo.", "descripción"],
        ["D'habitude, je prenais le bus.", "Normalmente tomaba el bus.", "hábito"],
        ["Je regardais la télé quand le téléphone a sonné.", "Veía la tele cuando sonó el teléfono.", "fondo + acción"]
      ]],
      ej: [["nous allions", "íbamos"], ["elle était", "era"], ["elle avait", "tenía"], ["nous finissons → je finissais", "terminaba"], ["nous mangeons → je mangeais", "comía"], ["j'avais", "tenía"], ["il pleuvait", "llovía"], ["soudain", "de repente"], ["d'habitude", "normalmente"], ["les bonbons", "los dulces"], ["les cheveux longs", "el pelo largo"]] },
    {
      id: "ojo",
      tipo: "ojo",
      titulo: "Errores frecuentes",
      intro: "Tres errores que cometemos casi todos los hispanohablantes. Cázalos uno por uno.",
      errores: [
        {
          sit: "Camila recuerda:",
          frase: "Mes grands-parents habitait dans une petite maison.",
          mal: "habitait",
          bien: "habitaient",
          porque: "Ils y il suenan igual y escribimos la forma de il.",
          truco: "Con ils: -aient → habitaient."
        },
        {
          sit: "Hugo cuenta:",
          frase: "Quand j'ai été petit, j'habitais à Cali.",
          mal: "j'ai été",
          bien: "j'étais",
          porque: "Usamos el pasado que ya conocemos.",
          truco: "Para describir: imparfait, j'étais."
        },
        {
          sit: "Camila recuerda:",
          frase: "Le dimanche, je mangais chez ma grand-mère.",
          mal: "mangais",
          bien: "mangeais",
          porque: "Pegamos -ais a mang.",
          truco: "La raíz es la de nous mangeons: je mangeais."
        }
      ]
    }
  ],
  ejemplos: [
    {
      sit: "«Jugaba al fútbol todos los sábados.»",
      resp: "Je jouais au foot tous les samedis.",
      porque: "Costumbre: imparfait.",
      pasos: [
        {
          q: "¿Costumbre o acción única?",
          ops: [
            "costumbre",
            "acción única"
          ],
          ok: 0
        },
        {
          q: "¿Qué tiempo?",
          ops: [
            "imparfait",
            "passé composé"
          ],
          ok: 0
        },
        {
          q: "¿Cómo queda?",
          ops: [
            "je jouais",
            "j'ai joué"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«Ayer hacía frío en París.»",
      resp: "Hier, il faisait froid à Paris.",
      porque: "Descripción: il faisait.",
      pasos: [
        {
          q: "¿Descripción o acción?",
          ops: [
            "descripción",
            "acción"
          ],
          ok: 0
        },
        {
          q: "¿Raíz de faire?",
          ops: [
            "fais-",
            "fai-"
          ],
          ok: 0
        },
        {
          q: "¿Cómo queda?",
          ops: [
            "il faisait",
            "il a fait"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«Veía la tele cuando llegó mi hermano.»",
      resp: "Je regardais la télé quand mon frère est arrivé.",
      porque: "fondo + acción.",
      pasos: [
        {
          q: "¿Veía?",
          ops: [
            "je regardais",
            "j'ai regardé"
          ],
          ok: 0
        },
        {
          q: "¿Llegó?",
          ops: [
            "est arrivé",
            "arrivait"
          ],
          ok: 0
        },
        {
          q: "¿Cuál es el fondo?",
          ops: [
            "veía la tele",
            "llegó"
          ],
          ok: 0
        }
      ]
    }
  ],
  comprueba: [
    { q: "El imparfait se forma desde…", o: ["nous en presente", "el infinitivo"], a: 0, b: "gr", porque: "nous parlons → parl-." },
    { q: "La única excepción es…", o: ["être (j'étais)", "avoir (j'avais)"], a: 0, b: "gr", porque: "ét-." },
    { q: "Una acción puntual (de repente sonó) va en…", o: ["passé composé", "imparfait"], a: 0, b: "gr", porque: "Una vez." }
  ],
  practica: [
    { fase: "guiada", c: ["imp-forma"], k: "choice", ask: "«Cuando era pequeño, jugaba al fútbol.»", q: "«Quand j'étais petit, je ___ au foot tous les samedis.»", o: ["jouais", "ai joué", "jouait"], a: 0, pista: "je → -ais.", why: "<b>jouais</b>." },
    { fase: "guiada", c: ["imp-forma"], k: "match", ask: "Une cada presente con su imparfait.", q: "nous… → je…", pairs: [["nous faisons", "je faisais"], ["nous prenons", "je prenais"], ["nous buvons", "je buvais"], ["nous finissons", "je finissais"], ["nous mangeons", "je mangeais"]], pista: "Radical de nous.", why: "Formación." },
    { fase: "guiada", c: ["imp-forma"], k: "choice", ask: "«Íbamos a casa de los abuelos.»", q: "«Quand nous étions enfants, nous ___ chez nos grands-parents.»", o: ["allions", "allons", "sommes allés"], a: 0, pista: "nous → -ions.", why: "<b>allions</b>." },
    { fase: "indep", c: ["imp-forma"], k: "spot", ask: "Encuentra el error.", s: "Mes grands-parents [habitait] dans une petite maison .", fix: "habitaient", why: "<b>habitaient</b>." },
    { fase: "indep", c: ["imp-forma"], k: "fill", ask: "Escribe faire en imparfait (il).", q: "Hier, il ___ froid à Paris.", acc: ["faisait"], why: "<b>faisait</b>." },
    { fase: "indep", c: ["imp-uso"], k: "sort", ask: "¿Imparfait o passé composé?", q: "Clasifica.", cats: ["Imparfait (descripción / hábito)", "Passé composé (acción puntual)"], items: [["Il faisait beau.", 0], ["D'habitude, je prenais le bus.", 0], ["La maison était grande.", 0], ["Soudain, le téléphone a sonné.", 1], ["Samedi dernier, j'ai acheté un vélo.", 1], ["Un jour, nous avons rencontré un acteur.", 1]], why: "Usos." },
    { fase: "aplica", c: ["imp-uso"], k: "choice", ask: "«Veía la tele cuando llegó mi hermano.»", q: "«Je regardais la télé quand mon frère ___ .»", o: ["est arrivé", "arrivait", "arrive"], a: 0, why: "Acción puntual: <b>est arrivé</b>." },
    { fase: "aplica", c: ["imp-forma"], k: "fill", ask: "Escribe être en imparfait (nous).", q: "Nous ___ très contents de notre voyage.", acc: ["étions"], why: "<b>étions</b>." },
    { fase: "dominio", c: ["imp-forma"], k: "choice", ask: "«Mi madre tenía el pelo largo.»", q: "«Quand elle était jeune, ma mère ___ les cheveux longs.»", o: ["avait", "a eu", "avais"], a: 0, why: "Descripción: <b>avait</b>." },
    { fase: "dominio", c: ["imp-uso"], k: "order", ask: "Ordena: «Llovía cuando salí».", tokens: ["Il pleuvait", "quand", "je suis sorti."], why: "<b>Il pleuvait quand je suis sorti.</b>" },
    { fase: "dominio", c: ["imp-forma", "imp-uso"], k: "listen", say: "Nous étions très contents de notre voyage.", acc: ["Nous étions très contents de notre voyage."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Nous étions très contents de notre voyage.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Cali", "Paris"], previo: ["petite", "petit", "toujours", "foot", "frère", "jour", "télé", "père", "chat", "grands-parents", "enfants", "maison", "hier", "contents", "notre", "voyage", "jeune", "mère", "téléphone", "sonné", "vélo", "rencontré", "acteur", "acheté", "joué", "allons", "jouait", "avais", "arrive", "arrivait", "sorti"] }
};

E["a2-futur"] = {
  v: 1, arts: false, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Futur proche et futur simple",
  objetivo: {
    que: "Vas a hablar del futuro: futur proche para planes cercanos y futur simple para proyectos y predicciones.",
    corto: "Je vais partir / je partirai.",
    podras: ["Formar aller + infinitivo sin à.", "Formar el futur simple: infinitivo + -ai, -as, -a…", "Usar los irregulares: serai, aurai, irai, ferai, pourrai, viendrai."],
    iconos: ["ic2/reloj-arena", "m2d/correr", "ic2/mundo"],
    previos: ["aller (A1, lección 5)."],
    capacidad: "Ahora puedes contar tus planes y tus proyectos."
  },
  requiere: R(), recupera: ["ir-aller-faire"],
  conceptos: {
    "fu-proche": { n: "aller + infinitivo (sin à)", b: "gr" },
    "fu-simple": { n: "infinitivo + -ai, -as, -a, -ons, -ez, -ont", b: "gr" },
    "fu-irreg": { n: "serai, aurai, irai, ferai, pourrai, viendrai", b: "gr" }
  },
  video: {
    titulo: "Futuro próximo y futuro simple",
    voz: "es-CO-SalomeNeural",
    escenas: [
      {
        v: "persona",
        cap: "Para qué sirve",
        fondo: "esc/cafe-lyon",
        img: "pj/hugo-neutro",
        fr: "Ce soir, nous allons regarder un film chez Paul. Tu viendras ?",
        es: "Esta noche vamos a ver una película donde Paul. ¿Vienes?",
        nota: "Planes",
        seg: [
          {
            es: "Hugo invita a Camila. Ella tiene otros planes, y grandes proyectos."
          },
          {
            fr: "Ce soir, nous allons regarder un film chez Paul. Tu viendras ?",
            p: 1
          },
          {
            es: "En francés hay dos futuros: el próximo, para lo que ya está decidido, y el simple, para proyectos y predicciones. Hoy aprendes los dos.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Futuro próximo",
        titulo: "Aller + infinitivo",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Je vais étudier ce soir.",
            es: "Voy a estudiar esta noche."
          },
          {
            p: 2,
            fr: "Nous allons regarder un film.",
            es: "Vamos a ver una película."
          },
          {
            p: 3,
            fr: "Je ne vais pas travailler dimanche.",
            es: "No voy a trabajar el domingo."
          },
          {
            p: 4,
            regla: "aller + infinitivo (sin à)"
          }
        ],
        seg: [
          {
            es: "Como en español, ir más infinitivo. Pero sin a.",
            p: 1
          },
          {
            fr: "Je vais étudier ce soir.",
            p: 1
          },
          {
            fr: "Nous allons regarder un film.",
            p: 2
          },
          {
            es: "En negativo, alrededor de aller:",
            p: 3
          },
          {
            fr: "Je ne vais pas travailler dimanche.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Futuro simple",
        titulo: "Infinitivo + -ai, -as, -a",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "je parlerai",
            es: "hablaré"
          },
          {
            p: 2,
            fr: "L'année prochaine, j'habiterai à Lyon.",
            es: "El año que viene viviré en Lyon."
          },
          {
            p: 3,
            fr: "nous partirons",
            es: "partiremos"
          },
          {
            p: 4,
            regla: "infinitivo + -ai, -as, -a, -ons, -ez, -ont"
          }
        ],
        seg: [
          {
            es: "El futuro simple: infinitivo más las terminaciones de avoir.",
            p: 1
          },
          {
            fr: "je parlerai",
            p: 1
          },
          {
            fr: "L'année prochaine, j'habiterai à Lyon.",
            p: 2
          },
          {
            fr: "nous partirons",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Irregulares",
        titulo: "Serai, aurai, irai, ferai",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "être → je serai · avoir → j'aurai",
            es: "seré · tendré"
          },
          {
            p: 2,
            fr: "aller → j'irai · faire → je ferai",
            es: "iré · haré"
          },
          {
            p: 3,
            fr: "pouvoir → je pourrai · venir → je viendrai",
            es: "podré · vendré"
          },
          {
            p: 4,
            fr: "Il fera chaud demain.",
            es: "Mañana hará calor."
          }
        ],
        seg: [
          {
            es: "Los irregulares cambian la raíz, pero las terminaciones son las mismas.",
            p: 1
          },
          {
            fr: "je serai",
            p: 1
          },
          {
            fr: "j'aurai",
            p: 1
          },
          {
            fr: "j'irai",
            p: 2
          },
          {
            fr: "je ferai",
            p: 2
          },
          {
            fr: "je pourrai",
            p: 3
          },
          {
            fr: "je viendrai",
            p: 3
          },
          {
            fr: "Il fera chaud demain.",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Quand",
        titulo: "Quand + futuro",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Quand je serai en vacances, je dormirai beaucoup.",
            es: "Cuando esté de vacaciones, dormiré mucho."
          },
          {
            p: 2,
            regla: "Español: cuando esté (subjuntivo) · francés: quand je serai (futuro)"
          }
        ],
        seg: [
          {
            es: "Después de quand, si hablas del futuro, futuro:",
            p: 1
          },
          {
            fr: "Quand je serai en vacances, je dormirai beaucoup.",
            p: 1
          },
          {
            es: "En español decimos cuando esté. En francés, quand je serai.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En la vida real",
        titulo: "Planes",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Ce soir, nous allons regarder un film chez Paul. Tu viendras ?",
            es: "Esta noche vamos a ver una película en casa de Paul. ¿Vienes?"
          },
          {
            p: 2,
            fr: "Non, je vais étudier. Demain, j'ai un examen.",
            es: "No, voy a estudiar. Mañana tengo un examen."
          },
          {
            p: 3,
            fr: "Et l'année prochaine ?",
            es: "¿Y el año que viene?"
          },
          {
            p: 4,
            fr: "J'irai en France pour étudier. Quand je serai à Lyon, je ferai beaucoup de choses !",
            es: "Iré a Francia a estudiar. ¡Cuando esté en Lyon, haré muchas cosas!"
          }
        ],
        seg: [
          {
            es: "Escucha cómo suena en una conversación de verdad."
          },
          {
            fr: "Ce soir, nous allons regarder un film chez Paul. Tu viendras ?",
            p: 1
          },
          {
            fr: "Non, je vais étudier. Demain, j'ai un examen.",
            p: 2
          },
          {
            fr: "Et l'année prochaine ?",
            p: 3
          },
          {
            fr: "J'irai en France pour étudier. Quand je serai à Lyon, je ferai beaucoup de choses !",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Contraste con el español",
        titulo: "Voy a… sin a",
        mz: "m2d/alerta",
        items: [
          {
            p: 1,
            regla: "Español: voy a estudiar · francés: je vais étudier (sin à)"
          },
          {
            p: 2,
            regla: "Español: hará · francés: il fera (no fairera)"
          },
          {
            p: 3,
            regla: "Español: cuando esté · francés: quand je serai"
          }
        ],
        seg: [
          {
            es: "Voy a estudiar: en francés, sin a.",
            p: 1
          },
          {
            es: "Hacer en futuro es fera, no fairera.",
            p: 2
          },
          {
            es: "Y después de quand, futuro, no presente.",
            p: 3
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Je vais à étudier.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Je vais étudier.",
          es: "Sin à."
        },
        seg: [
          {
            es: "Primera trampa: vais à.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Je vais étudier.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Demain, il fairera beau.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Demain, il fera beau.",
          es: "faire → fer-."
        },
        seg: [
          {
            es: "Segunda trampa: fairera.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Demain, il fera beau.",
            p: 2
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/pensativo",
        q: "«Esta noche vamos a ver una película.»",
        o: [
          "Ce soir, nous allons regarder un film.",
          "Ce soir, nous allons à regarder un film."
        ],
        a: 0,
        bien: "¡Eso es! Sin à.",
        mal: "Aller + infinitivo, sin à.",
        seg: [
          {
            es: "Te toca. ¿Cómo dices esta noche vamos a ver una película?"
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/confundido",
        q: "«El año que viene iré a Francia.»",
        o: [
          "L'année prochaine, j'irai en France.",
          "L'année prochaine, je vais en France."
        ],
        a: 0,
        bien: "¡Muy bien! J'irai.",
        mal: "Es un proyecto: futuro simple, j'irai.",
        seg: [
          {
            es: "Una más. ¿Cómo dices el año que viene iré a Francia?"
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
            fr: "Ce soir, nous allons regarder un film.",
            es: "Esta noche vamos a ver una película."
          },
          {
            p: 2,
            fr: "L'année prochaine, j'irai en France.",
            es: "El año que viene iré a Francia."
          },
          {
            p: 3,
            fr: "Nous ferons nos devoirs après le dîner.",
            es: "Haremos las tareas después de la cena."
          }
        ],
        seg: [
          {
            es: "Ahora tú. Escucha cada frase y repítela en voz alta."
          },
          {
            fr: "Ce soir, nous allons regarder un film.",
            p: 1
          },
          {
            es: "Otra vez.",
            p: 1
          },
          {
            fr: "Ce soir, nous allons regarder un film.",
            p: 1
          },
          {
            fr: "L'année prochaine, j'irai en France.",
            p: 2
          },
          {
            es: "Otra vez.",
            p: 2
          },
          {
            fr: "L'année prochaine, j'irai en France.",
            p: 2
          },
          {
            fr: "Nous ferons nos devoirs après le dîner.",
            p: 3
          },
          {
            es: "Otra vez.",
            p: 3
          },
          {
            fr: "Nous ferons nos devoirs après le dîner.",
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
                "",
                "Futuro próximo",
                "Futuro simple"
              ],
              [
                "Forma",
                "aller + infinitivo",
                "infinitivo + -ai, -as, -a…"
              ],
              [
                "Ejemplo",
                "je vais étudier",
                "j'étudierai"
              ],
              [
                "Irregulares",
                "—",
                "serai, aurai, irai, ferai, pourrai, viendrai"
              ]
            ]
          },
          {
            p: 2,
            regla: "sin à · quand + futuro"
          }
        ],
        seg: [
          {
            es: "Repasemos.",
            p: 1
          },
          {
            es: "Aller más infinitivo para lo decidido.",
            p: 1
          },
          {
            es: "Y el futuro simple para proyectos. ¡Ahora, a practicar!",
            p: 2
          }
        ]
      }
    ]
  },
  contexto: {
    titulo: "Planes", img: "bg-universidad", yo: "camila",
    escena: "Camila y Hugo hablan del futuro.",
    pj: PJ,
    lineas: [
      ["hugo", "Ce soir, nous allons regarder un film chez Paul. Tu viendras ?", "Esta noche vamos a ver una película en casa de Paul. ¿Vienes?"],
      ["camila", "Non, je vais étudier. Demain, j'ai un examen.", "No, voy a estudiar. Mañana tengo un examen."],
      ["hugo", "Et l'année prochaine ?", "¿Y el año que viene?"],
      ["camila", "J'irai en France pour étudier. Quand je serai à Lyon, je ferai beaucoup de choses !", "Iré a Francia a estudiar. ¡Cuando esté en Lyon, haré muchas cosas!"]
    ],
    fijate: "Fíjate: nous allons regarder, je vais étudier / j'irai, je serai, je ferai."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Dos futuros",
      idea: "Futur proche: aller + infinitivo (sin à). Futur simple: infinitivo + -ai, -as, -a, -ons, -ez, -ont. Irregulares: serai, aurai, irai, ferai, pourrai, viendrai. Tras quand, futuro.",
      intro: "Toca cada forma.",
      tabla: [["Francés", "Español", "Futuro"], [
        ["Je vais étudier ce soir.", "Voy a estudiar esta noche.", "proche"],
        ["Nous allons regarder un film.", "Vamos a ver una película.", "proche"],
        ["Je ne vais pas travailler dimanche.", "No voy a trabajar el domingo.", "proche neg."],
        ["je parlerai", "hablaré", "simple"],
        ["L'année prochaine, j'habiterai à Lyon.", "El año que viene viviré en Lyon.", "simple"],
        ["nous partirons", "partiremos", "simple"],
        ["être → je serai", "seré", "irregular"],
        ["avoir → j'aurai", "tendré", "irregular"],
        ["aller → j'irai", "iré", "irregular"],
        ["faire → je ferai / il fera", "haré / hará", "irregular"],
        ["pouvoir → je pourrai", "podré", "irregular"],
        ["venir → je viendrai", "vendré", "irregular"],
        ["Quand je serai en vacances, je dormirai beaucoup.", "Cuando esté de vacaciones, dormiré mucho.", "quand + futuro"]
      ]],
      ej: [["Il fera chaud demain.", "Hará calor mañana."], ["Tu viendras à la fête ?", "¿Vendrás a la fiesta?"], ["Vous pourrez m'aider ?", "¿Podrán ayudarme?"], ["Nous ferons nos devoirs.", "Haremos nuestras tareas."], ["tu auras", "tendrás"], ["il pourra", "podrá"], ["on ira", "iremos"], ["on va sortir", "vamos a salir"], ["vous allez voir", "van a ver"], ["elles vont manger", "van a comer"]] },
    {
      id: "ojo",
      tipo: "ojo",
      titulo: "Errores frecuentes",
      intro: "Tres errores que cometemos casi todos los hispanohablantes. Cázalos uno por uno.",
      errores: [
        {
          sit: "Hugo mira el pronóstico:",
          frase: "Demain, il fairera beau à Bogotá.",
          mal: "fairera",
          bien: "fera",
          porque: "Pegamos la terminación al infinitivo faire.",
          truco: "Faire es irregular: il fera."
        },
        {
          sit: "Camila responde:",
          frase: "Ce soir, je vais à étudier.",
          mal: "vais à étudier",
          bien: "vais étudier",
          porque: "En español «voy A estudiar».",
          truco: "Aller + infinitivo, sin à."
        },
        {
          sit: "Camila sueña:",
          frase: "Quand je suis en vacances, je dormirai beaucoup.",
          mal: "je suis",
          bien: "je serai",
          porque: "En español «cuando esté» no es futuro.",
          truco: "Quand + futuro: quand je serai."
        }
      ]
    }
  ],
  ejemplos: [
    {
      sit: "«Esta noche vamos a ver una película.»",
      resp: "Ce soir, nous allons regarder un film.",
      porque: "aller + infinitivo.",
      pasos: [
        {
          q: "¿Qué futuro?",
          ops: [
            "próximo: aller",
            "simple"
          ],
          ok: 0
        },
        {
          q: "¿Con à?",
          ops: [
            "no",
            "sí"
          ],
          ok: 0
        },
        {
          q: "¿Cómo queda?",
          ops: [
            "nous allons regarder",
            "nous allons à regarder"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«El año que viene iré a Francia.»",
      resp: "L'année prochaine, j'irai en France.",
      porque: "aller → ir-.",
      pasos: [
        {
          q: "¿Qué futuro?",
          ops: [
            "simple",
            "próximo"
          ],
          ok: 0
        },
        {
          q: "¿Raíz de aller?",
          ops: [
            "ir-",
            "aller-"
          ],
          ok: 0
        },
        {
          q: "¿Cómo queda?",
          ops: [
            "j'irai",
            "je vais"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«Haremos las tareas después de la cena.»",
      resp: "Nous ferons nos devoirs après le dîner.",
      porque: "faire → fer-.",
      pasos: [
        {
          q: "¿Raíz de faire?",
          ops: [
            "fer-",
            "fair-"
          ],
          ok: 0
        },
        {
          q: "¿Con nous?",
          ops: [
            "ferons",
            "ferez"
          ],
          ok: 0
        },
        {
          q: "¿Después de la cena?",
          ops: [
            "après le dîner",
            "après la dîner"
          ],
          ok: 0
        }
      ]
    }
  ],
  comprueba: [
    { q: "Entre aller y el infinitivo va…", o: ["nada", "à"], a: 0, b: "gr", porque: "Je vais étudier." },
    { q: "El futur simple de être es…", o: ["je serai", "je êtrai"], a: 0, b: "gr", porque: "Irregular." },
    { q: "Después de quand, en francés va…", o: ["futuro", "presente"], a: 0, b: "gr", porque: "Quand je serai…" }
  ],
  practica: [
    { fase: "guiada", c: ["fu-proche"], k: "choice", ask: "«Esta noche vamos a ver una película.»", q: "«Ce soir, nous ___ un film chez Paul.»", o: ["allons regarder", "allons à regarder", "regarderons à"], a: 0, pista: "aller + infinitivo.", why: "<b>allons regarder</b>." },
    { fase: "guiada", c: ["fu-irreg"], k: "match", ask: "Une cada infinitivo con su futuro.", q: "Infinitivo → futuro", pairs: [["être", "je serai"], ["avoir", "j'aurai"], ["faire", "je ferai"], ["pouvoir", "je pourrai"], ["venir", "je viendrai"], ["aller", "j'irai"]], pista: "De memoria.", why: "Irregulares." },
    { fase: "guiada", c: ["fu-proche", "fu-simple"], k: "sort", ask: "¿Futur proche o futur simple?", q: "Clasifica.", cats: ["Futur proche", "Futur simple"], items: [["je vais partir", 0], ["elles vont manger", 0], ["vous allez voir", 0], ["on va sortir", 0], ["nous partirons", 1], ["tu auras", 1], ["il pourra", 1], ["on ira", 1]], pista: "aller + infinitivo = proche.", why: "Dos futuros." },
    { fase: "indep", c: ["fu-irreg"], k: "fill", ask: "Escribe aller en futur simple (je).", q: "L'année prochaine, j'___ en France pour étudier.", acc: ["irai"], why: "<b>irai</b>." },
    { fase: "indep", c: ["fu-irreg"], k: "spot", ask: "Encuentra el error.", s: "Demain , il [fairera] beau à Bogotá .", fix: "fera", why: "<b>fera</b>." },
    { fase: "indep", c: ["fu-irreg"], k: "fill", ask: "Escribe venir en futur simple (tu).", q: "Tu ___ à la fête samedi ?", acc: ["viendras"], why: "<b>viendras</b>." },
    { fase: "aplica", c: ["fu-simple"], k: "choice", ask: "«Cuando esté de vacaciones, dormiré mucho.»", q: "«Quand je ___ en vacances, je dormirai beaucoup.»", o: ["serai", "suis", "vais être à"], a: 0, why: "quand + <b>futuro</b>." },
    { fase: "aplica", c: ["fu-irreg"], k: "fill", ask: "Escribe faire en futur simple (nous).", q: "Nous ___ nos devoirs après le dîner.", acc: ["ferons"], why: "<b>ferons</b>." },
    { fase: "dominio", c: ["fu-irreg"], k: "choice", ask: "«¿Podrán ayudarme mañana?»", q: "«Vous ___ m'aider demain ?»", o: ["pourrez", "pouvrez", "pourrons"], a: 0, why: "<b>pourrez</b>." },
    { fase: "dominio", c: ["fu-proche"], k: "order", ask: "Ordena: «No voy a trabajar el domingo».", tokens: ["Je ne vais pas", "travailler", "dimanche."], why: "<b>Je ne vais pas travailler dimanche.</b>" },
    { fase: "dominio", c: ["fu-proche", "fu-simple", "fu-irreg"], k: "listen", say: "L'année prochaine, j'irai en France pour étudier.", acc: ["L'année prochaine, j'irai en France pour étudier.", "L'année prochaine j'irai en France pour étudier."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>L'année prochaine, j'irai en France pour étudier.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paul", "Lyon", "France", "Bogotá"], previo: ["film", "examen", "année", "prochaine", "choses", "étudier", "travailler", "dormirai", "dormir", "vacances", "fête", "devoirs", "dîner", "chaud", "m'aider", "regarderons", "pouvrez", "pourrons"] }
};

E["a2-pronominaux"] = {
  v: 1, arts: false, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Les verbes pronominaux et la routine",
  objetivo: {
    que: "Vas a usar los verbos pronominales en presente, en negativo, en futur proche y en passé composé.",
    corto: "Je me suis levée.",
    podras: ["Poner el pronombre correcto: me, te, se, nous, vous.", "Negar: je ne me lève pas.", "Formar el passé composé con être: elle s'est levée."],
    iconos: ["ic2/reloj-arena", "m2d/correr", "ic2/bombilla"],
    previos: ["La rutina (A1, lección 21) y el passé composé con être (lección 2)."],
    capacidad: "Ahora puedes contar tu rutina de ayer, hoy y mañana."
  },
  requiere: R("pce-verbes", "pce-accord", "fu-proche"), recupera: ["ro-pron", "ro-verbos"],
  conceptos: {
    "pn-pres": { n: "me, te, se, nous, vous en presente y negación", b: "gr" },
    "pn-pc": { n: "passé composé con être + concordancia", b: "gr" }
  },
  video: {
    titulo: "Los verbos pronominales y la rutina",
    voz: "es-CO-SalomeNeural",
    escenas: [
      {
        v: "persona",
        cap: "Para qué sirve",
        fondo: "esc/cafe-lyon",
        img: "pj/hugo-neutro",
        fr: "Tu te réveilles à quelle heure ?",
        es: "¿A qué hora te despiertas?",
        nota: "La rutina",
        seg: [
          {
            es: "Hugo y Camila comparan sus rutinas."
          },
          {
            fr: "Tu te réveilles à quelle heure ?",
            p: 1
          },
          {
            es: "Ya conoces los pronominales en presente. Hoy los llevas al futuro próximo y al pasado, con su concordancia.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Presente",
        titulo: "Me, te, se, nous, vous, se",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Je me réveille à six heures.",
            es: "Me despierto a las seis."
          },
          {
            p: 2,
            fr: "Tu te couches à quelle heure ?",
            es: "¿A qué hora te acuestas?"
          },
          {
            p: 3,
            fr: "Nous nous habillons avant le petit-déjeuner.",
            es: "Nos vestimos antes del desayuno."
          },
          {
            p: 4,
            fr: "Je ne me lève pas tôt le dimanche.",
            es: "No me levanto temprano el domingo."
          }
        ],
        seg: [
          {
            es: "Repaso del presente:",
            p: 1
          },
          {
            fr: "Je me réveille à six heures.",
            p: 1
          },
          {
            fr: "Tu te couches à quelle heure ?",
            p: 2
          },
          {
            fr: "Nous nous habillons avant le petit-déjeuner.",
            p: 3
          },
          {
            es: "En negativo, ne antes del pronombre:",
            p: 4
          },
          {
            fr: "Je ne me lève pas tôt le dimanche.",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Futuro próximo",
        titulo: "Je vais me coucher",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Ce soir, je vais me coucher tôt.",
            es: "Esta noche me voy a acostar temprano."
          },
          {
            p: 2,
            regla: "el pronombre cambia con la persona: je vais me… · tu vas te…"
          }
        ],
        seg: [
          {
            es: "En futuro próximo, el pronombre va pegado al infinitivo, y cambia con la persona.",
            p: 1
          },
          {
            fr: "Ce soir, je vais me coucher tôt.",
            p: 1
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Pasado",
        titulo: "Être + concordancia",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Elle s'est habillée vite.",
            es: "Se vistió rápido."
          },
          {
            p: 2,
            fr: "Nous nous sommes promenés dans le parc.",
            es: "Paseamos por el parque."
          },
          {
            p: 3,
            fr: "Mes sœurs se sont levées à sept heures.",
            es: "Mis hermanas se levantaron a las siete."
          },
          {
            p: 4,
            regla: "pronominal en passé composé: siempre être, y concuerda"
          }
        ],
        seg: [
          {
            es: "En pasado, todos los pronominales van con être, y el participio concuerda.",
            p: 1
          },
          {
            fr: "Elle s'est habillée vite.",
            p: 1
          },
          {
            fr: "Nous nous sommes promenés dans le parc.",
            p: 2
          },
          {
            fr: "Mes sœurs se sont levées à sept heures.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Negativo en pasado",
        titulo: "Ne… pas alrededor",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Je ne me suis pas levé avant midi.",
            es: "No me levanté antes del mediodía."
          },
          {
            p: 2,
            regla: "ne + me + suis + pas + participio"
          }
        ],
        seg: [
          {
            es: "En negativo, ne antes del pronombre y pas después de être:",
            p: 1
          },
          {
            fr: "Je ne me suis pas levé avant midi.",
            p: 1
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En la vida real",
        titulo: "La rutina",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Tu te réveilles à quelle heure ?",
            es: "¿A qué hora te despiertas?"
          },
          {
            p: 2,
            fr: "Je me réveille à six heures et demie. Mais le dimanche, je ne me lève pas tôt !",
            es: "Me despierto a las seis y media. ¡Pero el domingo no me levanto temprano!"
          },
          {
            p: 3,
            fr: "Hier, je me suis couché très tard.",
            es: "Ayer me acosté muy tarde."
          },
          {
            p: 4,
            fr: "Ce soir, tu vas te coucher tôt ! Hier, nous nous sommes promenés dans le parc.",
            es: "¡Esta noche te vas a acostar temprano! Ayer paseamos por el parque."
          }
        ],
        seg: [
          {
            es: "Escucha cómo suena en una conversación de verdad."
          },
          {
            fr: "Tu te réveilles à quelle heure ?",
            p: 1
          },
          {
            fr: "Je me réveille à six heures et demie. Mais le dimanche, je ne me lève pas tôt !",
            p: 2
          },
          {
            fr: "Hier, je me suis couché très tard.",
            p: 3
          },
          {
            fr: "Ce soir, tu vas te coucher tôt ! Hier, nous nous sommes promenés dans le parc.",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Contraste con el español",
        titulo: "Me levanté… je me suis levé",
        mz: "m2d/alerta",
        items: [
          {
            p: 1,
            regla: "Español: me levanté (con haber: me he levantado) · francés: je me suis levé (être)"
          },
          {
            p: 2,
            regla: "Español: se levantaron (no cambia) · francés: elles se sont levées"
          },
          {
            p: 3,
            regla: "Español: me voy a acostar · francés: je vais me coucher"
          }
        ],
        seg: [
          {
            es: "En español los pronominales van con haber. En francés, con être: je me suis levé.",
            p: 1
          },
          {
            es: "Y concuerdan: levées si son ellas.",
            p: 2
          },
          {
            es: "Me voy a acostar: je vais me coucher, con el pronombre junto al infinitivo.",
            p: 3
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Je m'ai levé tard.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Je me suis levé tard.",
          es: "Pronominal: être."
        },
        seg: [
          {
            es: "Primera trampa: avoir con un pronominal.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Je me suis levé tard.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Mes sœurs se sont levés.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Mes sœurs se sont levées.",
          es: "Solo mujeres: + es."
        },
        seg: [
          {
            es: "Segunda trampa: olvidar la concordancia.",
            p: 1
          },
          {
            es: "Se escribe:",
            p: 2
          },
          {
            fr: "Mes sœurs se sont levées.",
            p: 2
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/pensativo",
        q: "«Ayer paseamos por el parque.»",
        o: [
          "Hier, nous nous sommes promenés dans le parc.",
          "Hier, nous nous avons promenés dans le parc."
        ],
        a: 0,
        bien: "¡Eso es! Sommes.",
        mal: "Pronominal en pasado: être.",
        seg: [
          {
            es: "Te toca. ¿Cómo dices ayer paseamos por el parque?"
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/confundido",
        q: "«No me levanto temprano el domingo.»",
        o: [
          "Je ne me lève pas tôt le dimanche.",
          "Je me ne lève pas tôt le dimanche."
        ],
        a: 0,
        bien: "¡Muy bien!",
        mal: "Ne va antes del pronombre: je ne me lève pas.",
        seg: [
          {
            es: "Una más. ¿Cómo dices no me levanto temprano el domingo?"
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
            fr: "Je me réveille à six heures et demie.",
            es: "Me despierto a las seis y media."
          },
          {
            p: 2,
            fr: "Hier, nous nous sommes promenés dans le parc.",
            es: "Ayer paseamos por el parque."
          },
          {
            p: 3,
            fr: "Je ne me lève pas tôt le dimanche.",
            es: "No me levanto temprano el domingo."
          }
        ],
        seg: [
          {
            es: "Ahora tú. Escucha cada frase y repítela en voz alta."
          },
          {
            fr: "Je me réveille à six heures et demie.",
            p: 1
          },
          {
            es: "Otra vez.",
            p: 1
          },
          {
            fr: "Je me réveille à six heures et demie.",
            p: 1
          },
          {
            fr: "Hier, nous nous sommes promenés dans le parc.",
            p: 2
          },
          {
            es: "Otra vez.",
            p: 2
          },
          {
            fr: "Hier, nous nous sommes promenés dans le parc.",
            p: 2
          },
          {
            fr: "Je ne me lève pas tôt le dimanche.",
            p: 3
          },
          {
            es: "Otra vez.",
            p: 3
          },
          {
            fr: "Je ne me lève pas tôt le dimanche.",
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
                "Ejemplo"
              ],
              [
                "presente",
                "je me lève · je ne me lève pas"
              ],
              [
                "futuro próximo",
                "je vais me lever"
              ],
              [
                "passé composé",
                "je me suis levé(e) · elles se sont levées"
              ]
            ]
          },
          {
            p: 2,
            regla: "pasado: être + concordancia · ne antes del pronombre"
          }
        ],
        seg: [
          {
            es: "Repasemos.",
            p: 1
          },
          {
            es: "El pronombre siempre antes del verbo.",
            p: 1
          },
          {
            es: "Y en pasado, être y concordancia. ¡Ahora, a practicar!",
            p: 2
          }
        ]
      }
    ]
  },
  contexto: {
    titulo: "La rutina", img: "bg-universidad", yo: "camila",
    escena: "Camila y Hugo comparan sus mañanas.",
    pj: PJ,
    lineas: [
      ["hugo", "Tu te réveilles à quelle heure ?", "¿A qué hora te despiertas?"],
      ["camila", "Je me réveille à six heures et demie. Mais le dimanche, je ne me lève pas tôt !", "Me despierto a las seis y media. ¡Pero el domingo no me levanto temprano!"],
      ["hugo", "Hier, je me suis couché très tard.", "Ayer me acosté muy tarde."],
      ["camila", "Ce soir, tu vas te coucher tôt ! Hier, nous nous sommes promenés dans le parc.", "¡Esta noche te vas a acostar temprano! Ayer paseamos por el parque."]
    ],
    fijate: "Fíjate: je ne me lève pas, je me suis couché, tu vas te coucher."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Los pronominales",
      idea: "je me, tu te, il se, nous nous, vous vous, ils se. Negación: je ne me lève pas. Futur proche: je vais me coucher. Passé composé: être + concordancia: elle s'est levée.",
      intro: "Toca cada forma.",
      tabla: [["Francés", "Español", "Tiempo"], [
        ["Je me réveille à six heures.", "Me despierto a las seis.", "presente"],
        ["Tu te couches à quelle heure ?", "¿A qué hora te acuestas?", "presente"],
        ["Elle se douche le soir.", "Se ducha por la noche.", "presente"],
        ["Nous nous habillons avant le petit-déjeuner.", "Nos vestimos antes del desayuno.", "presente"],
        ["Je ne me lève pas tôt le dimanche.", "No me levanto temprano el domingo.", "negación"],
        ["Ce soir, je vais me coucher tôt.", "Esta noche me voy a acostar temprano.", "futur proche"],
        ["Elle s'est habillée vite.", "Se vistió rápido.", "passé composé"],
        ["Nous nous sommes promenés dans le parc.", "Paseamos por el parque.", "passé composé"],
        ["Mes sœurs se sont levées à sept heures.", "Mis hermanas se levantaron a las siete.", "passé composé"],
        ["Je ne me suis pas levé avant midi.", "No me levanté antes del mediodía.", "pc negativo"]
      ]],
      ej: [["se lever", "levantarse"], ["se réveiller", "despertarse"], ["s'habiller", "vestirse"], ["se coucher", "acostarse"], ["se promener", "pasear"], ["se brosser les dents", "cepillarse los dientes"], ["se reposer", "descansar"], ["Ils se réveillent tard.", "Se despiertan tarde."], ["Je me brosse les dents.", "Me cepillo los dientes."], ["Tu te reposes le dimanche ?", "¿Descansas el domingo?"], ["Nous nous promenons au parc.", "Paseamos por el parque."]] },
    {
      id: "ojo",
      tipo: "ojo",
      titulo: "Errores frecuentes",
      intro: "Tres errores que cometemos casi todos los hispanohablantes. Cázalos uno por uno.",
      errores: [
        {
          sit: "Hugo cuenta:",
          frase: "Hier soir, Camille s'est couché très tard.",
          mal: "couché",
          bien: "couchée",
          porque: "En español el participio no cambia.",
          truco: "Camille es mujer: s'est couchée."
        },
        {
          sit: "Camila cuenta:",
          frase: "Mes sœurs se sont levés à sept heures.",
          mal: "levés",
          bien: "levées",
          porque: "Ponemos s y olvidamos el femenino.",
          truco: "Solo mujeres: + es → levées."
        },
        {
          sit: "Hugo admite:",
          frase: "Je m'ai levé tard.",
          mal: "m'ai levé",
          bien: "me suis levé",
          porque: "En español «me he levantado».",
          truco: "Pronominal: être → je me suis levé."
        }
      ]
    }
  ],
  ejemplos: [
    {
      sit: "«Me despierto a las seis y media.»",
      resp: "Je me réveille à six heures et demie.",
      porque: "je + me + réveille.",
      pasos: [
        {
          q: "¿Pronombre con je?",
          ops: [
            "me",
            "se"
          ],
          ok: 0
        },
        {
          q: "¿Despertarse?",
          ops: [
            "se réveiller",
            "se lever"
          ],
          ok: 0
        },
        {
          q: "¿Y media?",
          ops: [
            "et demie",
            "et demi"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«Ayer paseamos por el parque.»",
      resp: "Hier, nous nous sommes promenés dans le parc.",
      porque: "nous nous sommes + promenés.",
      pasos: [
        {
          q: "¿Avoir o être?",
          ops: [
            "être",
            "avoir"
          ],
          ok: 0
        },
        {
          q: "¿Concuerda?",
          ops: [
            "sí: promenés",
            "no: promené"
          ],
          ok: 0
        },
        {
          q: "¿Cómo queda?",
          ops: [
            "nous nous sommes promenés",
            "nous avons promenés"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«No me levanto temprano el domingo.»",
      resp: "Je ne me lève pas tôt le dimanche.",
      porque: "ne + me + lève + pas.",
      pasos: [
        {
          q: "¿Dónde va ne?",
          ops: [
            "antes de me",
            "después de me"
          ],
          ok: 0
        },
        {
          q: "¿Temprano?",
          ops: [
            "tôt",
            "tard"
          ],
          ok: 0
        },
        {
          q: "¿El domingo?",
          ops: [
            "le dimanche",
            "dimanche le"
          ],
          ok: 0
        }
      ]
    }
  ],
  comprueba: [
    { q: "En passé composé, los pronominales van con…", o: ["être", "avoir"], a: 0, b: "gr", porque: "Siempre." },
    { q: "En negación, ne va…", o: ["antes del pronombre", "después del pronombre"], a: 0, b: "gr", porque: "je ne me lève pas." },
    { q: "Con nous, el pronombre es…", o: ["nous", "se"], a: 0, b: "gr", porque: "nous nous." }
  ],
  practica: [
    { fase: "guiada", c: ["pn-pres"], k: "choice", ask: "«Me despierto a las seis y media.»", q: "«Le matin, je ___ à six heures et demie.»", o: ["me réveille", "se réveille", "réveille"], a: 0, pista: "je → me.", why: "<b>me réveille</b>." },
    { fase: "guiada", c: ["pn-pres"], k: "sort", ask: "¿Qué pronombre falta?", q: "Clasifica.", cats: ["me", "te", "se", "nous"], items: [["Je ___ lève tôt.", 0], ["Je ___ brosse les dents.", 0], ["Tu ___ couches à quelle heure ?", 1], ["Tu ___ reposes le dimanche ?", 1], ["Elle ___ douche le soir.", 2], ["Ils ___ réveillent tard.", 2], ["Nous ___ promenons au parc.", 3], ["Nous ___ couchons à minuit.", 3]], pista: "Mira el sujeto.", why: "Pronombres." },
    { fase: "guiada", c: ["pn-pres"], k: "match", ask: "Une cada verbo.", q: "Francés → español", pairs: [["se lever", "levantarse"], ["se réveiller", "despertarse"], ["s'habiller", "vestirse"], ["se coucher", "acostarse"], ["se promener", "pasear"]], pista: "se coucher = acostarse.", why: "Verbos." },
    { fase: "indep", c: ["pn-pres"], k: "fill", ask: "Escribe s'habiller (nous).", q: "Nous ___ toujours avant le petit-déjeuner.", acc: ["nous habillons"], why: "<b>nous habillons</b>." },
    { fase: "indep", c: ["pn-pc"], k: "spot", ask: "Encuentra el error.", s: "Hier soir , Camille s' est [couché] très tard .", fix: "couchée", why: "<b>couchée</b>." },
    { fase: "indep", c: ["pn-pres"], k: "fill", ask: "Escribe se coucher en futur proche (je).", q: "Ce soir, je vais ___ tôt parce que je suis fatigué.", acc: ["me coucher"], why: "<b>me coucher</b>." },
    { fase: "aplica", c: ["pn-pc"], k: "choice", ask: "«Ayer paseamos por el parque.»", q: "«Hier, nous ___ dans le parc.»", o: ["nous sommes promenés", "nous avons promenés", "sommes promenés"], a: 0, why: "<b>nous sommes promenés</b>." },
    { fase: "aplica", c: ["pn-pc"], k: "fill", ask: "Escribe se lever en passé composé negativo (je, hombre).", q: "Samedi, je ___ avant midi.", acc: ["ne me suis pas levé"], why: "<b>ne me suis pas levé</b>." },
    { fase: "dominio", c: ["pn-pc"], k: "choice", ask: "«Mis dos hermanas se levantaron a las siete.»", q: "«Ce matin, mes deux sœurs ___ à 7 heures.»", o: ["se sont levées", "se sont levés", "ont levées"], a: 0, why: "<b>se sont levées</b>." },
    { fase: "dominio", c: ["pn-pres"], k: "order", ask: "Ordena: «No me levanto temprano el domingo».", tokens: ["Je ne", "me lève", "pas tôt", "le dimanche."], why: "<b>Je ne me lève pas tôt le dimanche.</b>" },
    { fase: "dominio", c: ["pn-pres", "pn-pc"], k: "listen", say: "Hier, nous nous sommes promenés dans le parc.", acc: ["Hier, nous nous sommes promenés dans le parc.", "Hier nous nous sommes promenés dans le parc."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Hier, nous nous sommes promenés dans le parc.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Camille"], previo: ["quelle", "heure", "demie", "mais", "tôt", "tard", "hier", "très", "ce", "soir", "parc", "petit-déjeuner", "toujours", "vite", "sœurs", "midi", "dents", "minuit", "fatigué", "parce", "matin", "samedi", "deux", "avons", "ont", "réveille", "lève"] }
};

E["a2-partitifs"] = {
  v: 1, arts: false, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Articles partitifs et quantités",
  objetivo: {
    que: "Vas a repasar y combinar los partitivos, la negación pas de, las cantidades y los gustos.",
    corto: "du, pas de, un kilo de, j'adore le.",
    podras: ["Elegir du / de la / de l' / des.", "Usar pas de y cantidad + de.", "No confundir el partitivo con el artículo de los gustos."],
    iconos: ["ic2/cofre", "ic2/moneda", "ic2/bombilla"],
    previos: ["Los partitivos, pas de y las cantidades (A1, lecciones 38, 44 y 45)."],
    capacidad: "Ahora no fallas con los artículos de la comida."
  },
  requiere: R(), recupera: ["pa2-forma", "pd-de", "cq-de"],
  conceptos: {
    "pt3-choix": { n: "partitivo / pas de / cantidad + de", b: "gr" },
    "pt3-gout": { n: "gustos: le / la / les", b: "gr" }
  },
  video: {
    titulo: "Partitivos y cantidades",
    voz: "es-CO-SalomeNeural",
    escenas: [
      {
        v: "persona",
        cap: "Para qué sirve",
        fondo: "esc/cafe-lyon",
        img: "pj/hugo-neutro",
        fr: "Au petit-déjeuner, je bois du café. Tu veux de l'eau ?",
        es: "En el desayuno tomo café. ¿Quieres agua?",
        nota: "El desayuno",
        seg: [
          {
            es: "Hugo y Camila desayunan y preparan una receta."
          },
          {
            fr: "Au petit-déjeuner, je bois du café. Tu veux de l'eau ?",
            p: 1
          },
          {
            es: "Du, de la, de, le: hoy juntas todo lo que sabes de partitivos en cuatro reglas, y las aplicas a una receta.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Regla 1",
        titulo: "Una cantidad que no dices: du, de la",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Je voudrais du pain et de l'eau.",
            es: "Quisiera pan y agua."
          },
          {
            p: 2,
            fr: "de la confiture · des pommes",
            es: "mermelada · manzanas"
          }
        ],
        seg: [
          {
            es: "Cuando no dices cuánto: du, de la, de l', des.",
            p: 1
          },
          {
            fr: "Je voudrais du pain et de l'eau.",
            p: 1
          },
          {
            fr: "de la confiture",
            p: 2
          },
          {
            fr: "des pommes",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Regla 2",
        titulo: "En negativo: pas de",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Il n'y a pas de lait.",
            es: "No hay leche."
          },
          {
            p: 2,
            fr: "Elle n'a pas de frères.",
            es: "No tiene hermanos."
          }
        ],
        seg: [
          {
            es: "En negativo, todo se vuelve de.",
            p: 1
          },
          {
            fr: "Il n'y a pas de lait.",
            p: 1
          },
          {
            fr: "Elle n'a pas de frères.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Regla 3",
        titulo: "Una cantidad precisa: de",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Un kilo de tomates, s'il vous plaît.",
            es: "Un kilo de tomates, por favor."
          },
          {
            p: 2,
            fr: "Il y a beaucoup de sucre.",
            es: "Hay mucho azúcar."
          },
          {
            p: 3,
            fr: "une tranche de jambon · un morceau de fromage",
            es: "una tajada de jamón · un pedazo de queso"
          }
        ],
        seg: [
          {
            es: "Con una cantidad, solo de:",
            p: 1
          },
          {
            fr: "Un kilo de tomates, s'il vous plaît.",
            p: 1
          },
          {
            fr: "Il y a beaucoup de sucre.",
            p: 2
          },
          {
            fr: "une tranche de jambon",
            p: 3
          },
          {
            fr: "un morceau de fromage",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Regla 4",
        titulo: "Con gustos: le, la, les",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "J'adore le chocolat !",
            es: "¡Me encanta el chocolate!"
          },
          {
            p: 2,
            regla: "aimer, adorer, détester, préférer + le, la, les"
          }
        ],
        seg: [
          {
            es: "Con los gustos, el artículo definido:",
            p: 1
          },
          {
            fr: "J'adore le chocolat !",
            p: 1
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En la vida real",
        titulo: "El desayuno",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Au petit-déjeuner, je bois du café. Tu veux de l'eau ?",
            es: "En el desayuno tomo café. ¿Quieres agua?"
          },
          {
            p: 2,
            fr: "Oui, merci. Oh, il n'y a pas de lait dans le frigo !",
            es: "Sí, gracias. ¡Oh, no hay leche en la nevera!"
          },
          {
            p: 3,
            fr: "Pour la recette, il faut beaucoup de sucre et un kilo de tomates.",
            es: "Para la receta hacen falta mucho azúcar y un kilo de tomates."
          },
          {
            p: 4,
            fr: "Moi, je ne mange pas de viande. Mais j'adore le chocolat !",
            es: "Yo no como carne. ¡Pero me encanta el chocolate!"
          }
        ],
        seg: [
          {
            es: "Escucha cómo suena en una conversación de verdad."
          },
          {
            fr: "Au petit-déjeuner, je bois du café. Tu veux de l'eau ?",
            p: 1
          },
          {
            fr: "Oui, merci. Oh, il n'y a pas de lait dans le frigo !",
            p: 2
          },
          {
            fr: "Pour la recette, il faut beaucoup de sucre et un kilo de tomates.",
            p: 3
          },
          {
            fr: "Moi, je ne mange pas de viande. Mais j'adore le chocolat !",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Contraste con el español",
        titulo: "Cuatro reglas, un vistazo",
        mz: "m2d/alerta",
        items: [
          {
            p: 1,
            regla: "tomo café → je bois du café"
          },
          {
            p: 2,
            regla: "no hay leche → il n'y a pas de lait"
          },
          {
            p: 3,
            regla: "mucho azúcar → beaucoup de sucre · me encanta el chocolate → j'adore le chocolat"
          }
        ],
        seg: [
          {
            es: "En español el nombre va solo. En francés, du, de la.",
            p: 1
          },
          {
            es: "En negativo, de.",
            p: 2
          },
          {
            es: "Con cantidad, de; con gustos, le.",
            p: 3
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Je ne mange pas du pain.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Je ne mange pas de pain.",
          es: "Tras pas: de."
        },
        seg: [
          {
            es: "Primera trampa: pas du.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Je ne mange pas de pain.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "J'adore du chocolat.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "J'adore le chocolat.",
          es: "Gusto: le."
        },
        seg: [
          {
            es: "Segunda trampa: du con adorer.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "J'adore le chocolat.",
            p: 2
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/pensativo",
        q: "«No como carne.»",
        o: [
          "Je ne mange pas de viande.",
          "Je ne mange pas de la viande."
        ],
        a: 0,
        bien: "¡Eso es! Pas de.",
        mal: "En negativo: pas de viande.",
        seg: [
          {
            es: "Te toca. ¿Cómo dices no como carne?"
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/confundido",
        q: "«Hay mucho azúcar en la receta.»",
        o: [
          "Il y a beaucoup de sucre dans la recette.",
          "Il y a beaucoup du sucre dans la recette."
        ],
        a: 0,
        bien: "¡Muy bien! Beaucoup de.",
        mal: "Con cantidad, solo de.",
        seg: [
          {
            es: "Una más. ¿Cómo dices hay mucho azúcar en la receta?"
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
            fr: "Je bois du café.",
            es: "Tomo café."
          },
          {
            p: 2,
            fr: "Je ne mange pas de viande.",
            es: "No como carne."
          },
          {
            p: 3,
            fr: "Il y a beaucoup de sucre dans la recette.",
            es: "Hay mucho azúcar en la receta."
          }
        ],
        seg: [
          {
            es: "Ahora tú. Escucha cada frase y repítela en voz alta."
          },
          {
            fr: "Je bois du café.",
            p: 1
          },
          {
            es: "Otra vez.",
            p: 1
          },
          {
            fr: "Je bois du café.",
            p: 1
          },
          {
            fr: "Je ne mange pas de viande.",
            p: 2
          },
          {
            es: "Otra vez.",
            p: 2
          },
          {
            fr: "Je ne mange pas de viande.",
            p: 2
          },
          {
            fr: "Il y a beaucoup de sucre dans la recette.",
            p: 3
          },
          {
            es: "Otra vez.",
            p: 3
          },
          {
            fr: "Il y a beaucoup de sucre dans la recette.",
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
                "Forma",
                "Ejemplo"
              ],
              [
                "cantidad no dicha",
                "du, de la, de l', des",
                "je bois du café"
              ],
              [
                "negativo",
                "de",
                "pas de lait"
              ],
              [
                "cantidad precisa",
                "de",
                "beaucoup de sucre"
              ],
              [
                "gustos",
                "le, la, les",
                "j'adore le chocolat"
              ]
            ]
          },
          {
            p: 2,
            regla: "Cuatro casos, cuatro reglas"
          }
        ],
        seg: [
          {
            es: "Repasemos.",
            p: 1
          },
          {
            es: "Du, de la para una parte; de en negativo y con cantidades.",
            p: 1
          },
          {
            es: "Y le, la, les con los gustos. ¡Ahora, a practicar!",
            p: 2
          }
        ]
      }
    ]
  },
  contexto: {
    titulo: "El desayuno", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo preparan una receta.",
    pj: PJ,
    lineas: [
      ["hugo", "Au petit-déjeuner, je bois du café. Tu veux de l'eau ?", "En el desayuno tomo café. ¿Quieres agua?"],
      ["camila", "Oui, merci. Oh, il n'y a pas de lait dans le frigo !", "Sí, gracias. ¡Oh, no hay leche en la nevera!"],
      ["hugo", "Pour la recette, il faut beaucoup de sucre et un kilo de tomates.", "Para la receta hacen falta mucho azúcar y un kilo de tomates."],
      ["camila", "Moi, je ne mange pas de viande. Mais j'adore le chocolat !", "Yo no como carne. ¡Pero me encanta el chocolate!"]
    ],
    fijate: "Fíjate: du café, de l'eau, pas de lait, beaucoup de sucre, j'adore le chocolat."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Elegir el artículo",
      idea: "Cantidad no precisa: du, de la, de l', des. Negación: pas de. Cantidad precisa: beaucoup de, un kilo de. Gustos: le, la, les.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Caso"], [
        ["Je voudrais du pain et de l'eau.", "Quisiera pan y agua.", "partitivo"],
        ["Au petit-déjeuner, je bois du café.", "En el desayuno tomo café.", "partitivo"],
        ["de la confiture / des pommes", "mermelada / manzanas", "partitivo"],
        ["Il n'y a pas de lait.", "No hay leche.", "pas de"],
        ["Elle n'a pas de frères.", "No tiene hermanos.", "pas de"],
        ["Un kilo de tomates, s'il vous plaît.", "Un kilo de tomates, por favor.", "cantidad"],
        ["Il y a beaucoup de sucre.", "Hay mucho azúcar.", "cantidad"],
        ["une tranche de jambon / un morceau de fromage", "una tajada de jamón / un pedazo de queso", "cantidad"],
        ["J'adore le chocolat !", "¡Me encanta el chocolate!", "gusto"]
      ]],
      ej: [["beaucoup de", "mucho / mucha"], ["un peu de", "un poco de"], ["trop de", "demasiado"], ["assez de", "suficiente"], ["une tranche de", "una tajada de"], ["un morceau de", "un pedazo de"], ["de l'eau minérale", "agua mineral"], ["la recette", "la receta"]] },
    {
      id: "ojo",
      tipo: "ojo",
      titulo: "Errores frecuentes",
      intro: "Tres errores que cometemos casi todos los hispanohablantes. Cázalos uno por uno.",
      errores: [
        {
          sit: "Camila abre la nevera:",
          frase: "Il n'y a pas du lait dans le frigo.",
          mal: "pas du",
          bien: "pas de",
          porque: "En positivo decimos du lait.",
          truco: "En negativo: pas de lait."
        },
        {
          sit: "Hugo lee la receta:",
          frase: "Pour la recette, il faut beaucoup du sucre.",
          mal: "beaucoup du",
          bien: "beaucoup de",
          porque: "Pensamos «mucho DEL azúcar».",
          truco: "Cantidad: beaucoup de."
        },
        {
          sit: "Camila confiesa:",
          frase: "J'adore du chocolat !",
          mal: "du chocolat",
          bien: "le chocolat",
          porque: "Usamos du con todo lo que se come.",
          truco: "Con gustos: le chocolat."
        }
      ]
    }
  ],
  ejemplos: [
    {
      sit: "«Tomo café.»",
      resp: "Je bois du café.",
      porque: "Cantidad no dicha: du.",
      pasos: [
        {
          q: "¿Dices cuánto?",
          ops: [
            "no",
            "sí"
          ],
          ok: 0
        },
        {
          q: "¿Café es…?",
          ops: [
            "masculino: du",
            "femenino: de la"
          ],
          ok: 0
        },
        {
          q: "¿Cómo queda?",
          ops: [
            "je bois du café",
            "je bois café"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«No como carne.»",
      resp: "Je ne mange pas de viande.",
      porque: "Negativo: de.",
      pasos: [
        {
          q: "¿Afirmas o niegas?",
          ops: [
            "niego",
            "afirmo"
          ],
          ok: 0
        },
        {
          q: "¿Qué forma?",
          ops: [
            "de",
            "de la"
          ],
          ok: 0
        },
        {
          q: "¿Cómo queda?",
          ops: [
            "pas de viande",
            "pas de la viande"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«Hay mucho azúcar en la receta.»",
      resp: "Il y a beaucoup de sucre dans la recette.",
      porque: "Cantidad: de.",
      pasos: [
        {
          q: "¿Hay cantidad?",
          ops: [
            "sí: beaucoup",
            "no"
          ],
          ok: 0
        },
        {
          q: "¿Qué forma?",
          ops: [
            "de",
            "du"
          ],
          ok: 0
        },
        {
          q: "¿Cómo queda?",
          ops: [
            "beaucoup de sucre",
            "beaucoup du sucre"
          ],
          ok: 0
        }
      ]
    }
  ],
  comprueba: [
    { q: "Después de pas va…", o: ["de", "du"], a: 0, b: "gr", porque: "pas de." },
    { q: "Después de un kilo va…", o: ["de", "des"], a: 0, b: "gr", porque: "Cantidad." },
    { q: "Con adorer va…", o: ["le / la / les", "du / de la"], a: 0, b: "gr", porque: "Gusto." }
  ],
  practica: [
    { fase: "guiada", c: ["pt3-choix"], k: "choice", ask: "«En el desayuno tomo café.»", q: "«Au petit-déjeuner, je bois ___ café.»", o: ["du", "de", "le"], a: 0, pista: "Masculino.", why: "<b>du</b>." },
    { fase: "guiada", c: ["pt3-choix"], k: "sort", ask: "¿du, de la, de l' o des?", q: "Clasifica.", cats: ["du", "de la", "de l'", "des"], items: [["pain", 0], ["fromage", 0], ["confiture", 1], ["viande", 1], ["huile", 2], ["eau minérale", 2], ["pommes", 3], ["œufs", 3]], pista: "Género, vocal o plural.", why: "Partitivos." },
    { fase: "guiada", c: ["pt3-choix"], k: "match", ask: "Une cada expresión.", q: "Francés → español", pairs: [["beaucoup de", "mucho / mucha"], ["un peu de", "un poco de"], ["trop de", "demasiado"], ["assez de", "suficiente"], ["un morceau de", "un pedazo de"]], pista: "assez = suficiente.", why: "Cantidades." },
    { fase: "indep", c: ["pt3-choix"], k: "fill", ask: "Escribe el partitivo.", q: "Tu veux ___ eau ?", acc: ["de l'", "de l’"], why: "<b>de l'</b>." },
    { fase: "indep", c: ["pt3-choix"], k: "spot", ask: "Encuentra el error.", s: "Il n'y a pas [du] lait dans le frigo .", fix: "de", why: "<b>pas de</b>." },
    { fase: "indep", c: ["pt3-choix"], k: "fill", ask: "Escribe una sola palabra.", q: "Je voudrais un kilo ___ tomates, s'il vous plaît.", acc: ["de"], why: "<b>de</b>." },
    { fase: "aplica", c: ["pt3-choix"], k: "choice", ask: "«En esta receta hay mucho azúcar.»", q: "«Dans cette recette, il y a beaucoup ___ sucre.»", o: ["de", "du", "le"], a: 0, why: "<b>beaucoup de</b>." },
    { fase: "aplica", c: ["pt3-gout"], k: "choice", ask: "«¡Me encanta el chocolate!»", q: "«J'adore ___ chocolat !»", o: ["le", "du", "de"], a: 0, why: "Gusto: <b>le</b>." },
    { fase: "dominio", c: ["pt3-choix"], k: "fill", ask: "Escribe una sola palabra.", q: "Elle n'a pas ___ frères.", acc: ["de"], why: "<b>de</b>." },
    { fase: "dominio", c: ["pt3-choix", "pt3-gout"], k: "order", ask: "Ordena: «No como carne».", tokens: ["Je ne mange", "pas", "de viande."], why: "<b>Je ne mange pas de viande.</b>" },
    { fase: "dominio", c: ["pt3-choix", "pt3-gout"], k: "listen", say: "Au petit-déjeuner, je bois du café.", acc: ["Au petit-déjeuner, je bois du café.", "Au petit-déjeuner je bois du café."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Au petit-déjeuner, je bois du café.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["petit-déjeuner", "bois", "café", "veux", "merci", "oh", "lait", "frigo", "recette", "sucre", "tomates", "viande", "mais", "chocolat", "pain", "eau", "confiture", "pommes", "frères", "jambon", "fromage", "minérale", "huile", "œufs", "cette", "voudrais", "mange"] }
};

E["a2-comparatif"] = {
  v: 1, arts: false, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Comparatif et superlatif",
  objetivo: {
    que: "Vas a comparar con plus, moins, aussi + adjetivo + que, y con plus de / autant de + nombre; y a usar el superlativo.",
    corto: "Plus grand que, le meilleur.",
    podras: ["Comparar adjetivos: plus cher que, aussi grand que.", "Comparar cantidades: plus de livres que.", "Usar meilleur, mieux y le plus…"],
    iconos: ["ic2/trofeo", "m2d/pensativo", "ic2/moneda"],
    previos: ["Los adjetivos (A1, lecciones 10 y 65)."],
    capacidad: "Ahora puedes comparar precios, ciudades y personas."
  },
  requiere: R(), recupera: ["ad-accord", "ra-bonbien"],
  conceptos: {
    "cmp-adj": { n: "plus / moins / aussi + adjetivo + que", b: "gr" },
    "cmp-nom": { n: "plus de / moins de / autant de + nombre", b: "gr" },
    "cmp-sup": { n: "meilleur, mieux; le plus + adjetivo (+ de)", b: "gr" }
  },
  video: {
    titulo: "Comparativo y superlativo",
    voz: "es-CO-SalomeNeural",
    escenas: [
      {
        v: "persona",
        cap: "Para qué sirve",
        fondo: "esc/calle-paris",
        img: "pj/hugo-neutro",
        fr: "Le TGV est plus rapide que le bus, mais il est plus cher.",
        es: "El TGV es más rápido que el bus, pero es más caro.",
        nota: "Viajar a Lyon",
        seg: [
          {
            es: "Hugo y Camila comparan cómo viajar a Lyon."
          },
          {
            fr: "Le TGV est plus rapide que le bus, mais il est plus cher.",
            p: 1
          },
          {
            es: "Más, menos, tan… como, el mejor: hoy aprendes a comparar, con dos irregulares que confunden a todos.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Adjetivos",
        titulo: "Plus, moins, aussi + adjetivo + que",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Le TGV est plus rapide que le bus.",
            es: "El TGV es más rápido que el bus."
          },
          {
            p: 2,
            fr: "Ce vol est moins cher.",
            es: "Este vuelo es menos caro."
          },
          {
            p: 3,
            fr: "Ma sœur est aussi grande que moi.",
            es: "Mi hermana es tan alta como yo."
          },
          {
            p: 4,
            regla: "plus / moins / aussi + adjetivo + que"
          }
        ],
        seg: [
          {
            es: "Más: plus. Y el que va después.",
            p: 1
          },
          {
            fr: "Le TGV est plus rapide que le bus.",
            p: 1
          },
          {
            es: "Menos: moins.",
            p: 2
          },
          {
            fr: "Ce vol est moins cher.",
            p: 2
          },
          {
            es: "Tan… como: aussi… que. Ojo: que, no comme.",
            p: 3
          },
          {
            fr: "Ma sœur est aussi grande que moi.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Nombres",
        titulo: "Plus de, autant de + nombre",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "J'ai plus de livres que toi.",
            es: "Tengo más libros que tú."
          },
          {
            p: 2,
            fr: "Il a autant d'amis que moi.",
            es: "Tiene tantos amigos como yo."
          },
          {
            p: 3,
            regla: "plus de / moins de / autant de + nombre (sin artículo)"
          }
        ],
        seg: [
          {
            es: "Con nombres, plus de, sin artículo:",
            p: 1
          },
          {
            fr: "J'ai plus de livres que toi.",
            p: 1
          },
          {
            es: "Y tantos como: autant de.",
            p: 2
          },
          {
            fr: "Il a autant d'amis que moi.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Irregulares",
        titulo: "Bon → meilleur · bien → mieux",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Cette pizza est meilleure que l'autre.",
            es: "Esta pizza es mejor que la otra."
          },
          {
            p: 2,
            fr: "Ana parle anglais mieux que moi.",
            es: "Ana habla inglés mejor que yo."
          },
          {
            p: 3,
            regla: "bon (adjetivo) → meilleur, meilleure · bien (cómo) → mieux"
          }
        ],
        seg: [
          {
            es: "Bon no se dice plus bon: es meilleur, y concuerda.",
            p: 1
          },
          {
            fr: "Cette pizza est meilleure que l'autre.",
            p: 1
          },
          {
            es: "Bien, para cómo se hace algo, es mieux:",
            p: 2
          },
          {
            fr: "Ana parle anglais mieux que moi.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Superlativo",
        titulo: "Le plus, la plus, le meilleur",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "C'est la plus belle plage de Colombie.",
            es: "Es la playa más bonita de Colombia."
          },
          {
            p: 2,
            fr: "C'est le meilleur restaurant de la ville.",
            es: "Es el mejor restaurante de la ciudad."
          },
          {
            p: 3,
            regla: "le / la / les plus + adjetivo + de"
          }
        ],
        seg: [
          {
            es: "El superlativo: le, la o les plus. Y de para el grupo.",
            p: 1
          },
          {
            fr: "C'est la plus belle plage de Colombie.",
            p: 1
          },
          {
            fr: "C'est le meilleur restaurant de la ville.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En la vida real",
        titulo: "Viajar a Lyon",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Le TGV est plus rapide que le bus, mais il est plus cher.",
            es: "El TGV es más rápido que el bus, pero es más caro."
          },
          {
            p: 2,
            fr: "Et l'avion ? — Ce vol est moins cher, mais l'aéroport est plus loin.",
            es: "¿Y el avión? — Este vuelo es menos caro, pero el aeropuerto está más lejos."
          },
          {
            p: 3,
            fr: "À Lyon, il y a le meilleur restaurant de la ville !",
            es: "¡En Lyon está el mejor restaurante de la ciudad!"
          },
          {
            p: 4,
            fr: "Super ! Tu parles français mieux que moi : tu commandes !",
            es: "¡Genial! Hablas francés mejor que yo: ¡pides tú!"
          }
        ],
        seg: [
          {
            es: "Escucha cómo suena en una conversación de verdad."
          },
          {
            fr: "Le TGV est plus rapide que le bus, mais il est plus cher.",
            p: 1
          },
          {
            fr: "Et l'avion ? — Ce vol est moins cher, mais l'aéroport est plus loin.",
            p: 2
          },
          {
            fr: "À Lyon, il y a le meilleur restaurant de la ville !",
            p: 3
          },
          {
            fr: "Super ! Tu parles français mieux que moi : tu commandes !",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Contraste con el español",
        titulo: "Tan… como → aussi… que",
        mz: "m2d/alerta",
        items: [
          {
            p: 1,
            regla: "Español: tan alta como yo · francés: aussi grande que moi (que, no comme)"
          },
          {
            p: 2,
            regla: "Español: mejor (bueno y bien) · francés: meilleur (bon) o mieux (bien)"
          },
          {
            p: 3,
            regla: "Español: más libros · francés: plus de livres"
          }
        ],
        seg: [
          {
            es: "Tan como, en francés, es aussi que.",
            p: 1
          },
          {
            es: "Mejor tiene dos formas: meilleur si es bueno, mieux si es bien.",
            p: 2
          },
          {
            es: "Y con nombres, plus de.",
            p: 3
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Marie est aussi sympa comme sa sœur.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Marie est aussi sympa que sa sœur.",
          es: "aussi… que."
        },
        seg: [
          {
            es: "Primera trampa: aussi… comme.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Marie est aussi sympa que sa sœur.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Ana parle plus bien que moi.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Ana parle mieux que moi.",
          es: "bien → mieux."
        },
        seg: [
          {
            es: "Segunda trampa: plus bien.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Ana parle mieux que moi.",
            p: 2
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/pensativo",
        q: "«Tengo más libros que tú.»",
        o: [
          "J'ai plus de livres que toi.",
          "J'ai plus des livres que toi."
        ],
        a: 0,
        bien: "¡Eso es! Plus de.",
        mal: "Con nombres, plus de, sin artículo.",
        seg: [
          {
            es: "Te toca. ¿Cómo dices tengo más libros que tú?"
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/confundido",
        q: "«Esta pizza es mejor que la otra.»",
        o: [
          "Cette pizza est meilleure que l'autre.",
          "Cette pizza est plus bonne que l'autre."
        ],
        a: 0,
        bien: "¡Muy bien! Meilleure.",
        mal: "Bon no se dice plus bon: meilleur, meilleure.",
        seg: [
          {
            es: "Una más. ¿Cómo dices esta pizza es mejor que la otra?"
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
            fr: "Le TGV est plus rapide que le bus.",
            es: "El TGV es más rápido que el bus."
          },
          {
            p: 2,
            fr: "J'ai plus de livres que toi.",
            es: "Tengo más libros que tú."
          },
          {
            p: 3,
            fr: "C'est la plus belle plage de Colombie.",
            es: "Es la playa más bonita de Colombia."
          }
        ],
        seg: [
          {
            es: "Ahora tú. Escucha cada frase y repítela en voz alta."
          },
          {
            fr: "Le TGV est plus rapide que le bus.",
            p: 1
          },
          {
            es: "Otra vez.",
            p: 1
          },
          {
            fr: "Le TGV est plus rapide que le bus.",
            p: 1
          },
          {
            fr: "J'ai plus de livres que toi.",
            p: 2
          },
          {
            es: "Otra vez.",
            p: 2
          },
          {
            fr: "J'ai plus de livres que toi.",
            p: 2
          },
          {
            fr: "C'est la plus belle plage de Colombie.",
            p: 3
          },
          {
            es: "Otra vez.",
            p: 3
          },
          {
            fr: "C'est la plus belle plage de Colombie.",
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
                "Quieres decir",
                "Francés"
              ],
              [
                "más / menos rápido que",
                "plus / moins rapide que"
              ],
              [
                "tan alto como",
                "aussi grand que"
              ],
              [
                "más libros que",
                "plus de livres que"
              ],
              [
                "mejor (bueno · bien)",
                "meilleur · mieux"
              ],
              [
                "el más bonito",
                "le plus beau"
              ]
            ]
          },
          {
            p: 2,
            regla: "aussi… que (no comme) · bon → meilleur · bien → mieux"
          }
        ],
        seg: [
          {
            es: "Repasemos.",
            p: 1
          },
          {
            es: "Plus, moins y aussi con que.",
            p: 1
          },
          {
            es: "Y meilleur o mieux para mejor. ¡Ahora, a practicar!",
            p: 2
          }
        ]
      }
    ]
  },
  contexto: {
    titulo: "Viajar a Lyon", img: "bg-paris", yo: "camila",
    escena: "Camila y Hugo comparan cómo ir a Lyon.",
    pj: PJ,
    lineas: [
      ["hugo", "Le TGV est plus rapide que le bus, mais il est plus cher.", "El TGV es más rápido que el bus, pero es más caro."],
      ["camila", "Et l'avion ? — Ce vol est moins cher, mais l'aéroport est plus loin.", "¿Y el avión? — Este vuelo es menos caro, pero el aeropuerto está más lejos."],
      ["hugo", "À Lyon, il y a le meilleur restaurant de la ville !", "¡En Lyon está el mejor restaurante de la ciudad!"],
      ["camila", "Super ! Tu parles français mieux que moi : tu commandes !", "¡Genial! Hablas francés mejor que yo: ¡pides tú!"]
    ],
    fijate: "Fíjate: plus rapide que, moins cher, le meilleur restaurant, mieux que moi."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Comparativo y superlativo",
      idea: "plus / moins / aussi + adjetivo + que. plus de / moins de / autant de + nombre + que. bon → meilleur; bien → mieux. Superlativo: le / la / les plus + adjetivo (+ de).",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Forma"], [
        ["Le TGV est plus rapide que le bus.", "El TGV es más rápido que el bus.", "plus… que"],
        ["Ce vol est moins cher.", "Este vuelo es menos caro.", "moins"],
        ["Ma sœur est aussi grande que moi.", "Mi hermana es tan alta como yo.", "aussi… que"],
        ["J'ai plus de livres que toi.", "Tengo más libros que tú.", "plus de + nombre"],
        ["Il a autant d'amis que moi.", "Tiene tantos amigos como yo.", "autant de"],
        ["Cette pizza est meilleure que l'autre.", "Esta pizza es mejor que la otra.", "bon → meilleur"],
        ["Ana parle anglais mieux que moi.", "Ana habla inglés mejor que yo.", "bien → mieux"],
        ["C'est le meilleur restaurant de la ville.", "Es el mejor restaurante de la ciudad.", "superlativo"],
        ["C'est la plus belle plage de Colombie.", "Es la playa más bonita de Colombia.", "le plus + adj."],
        ["le moins loin", "el menos lejos", "superlativo"]
      ]],
      ej: [["plus cher que", "más caro que"], ["le plus cher", "el más caro"], ["la meilleure", "la mejor"], ["les plus jolies", "las más bonitas"], ["aussi beau que", "tan bonito como"], ["moins loin que", "menos lejos que"], ["le meilleur joueur du monde", "el mejor jugador del mundo"], ["Nous mesurons tous les deux 1,75 m.", "Los dos medimos 1,75 m."]] },
    {
      id: "ojo",
      tipo: "ojo",
      titulo: "Errores frecuentes",
      intro: "Tres errores que cometemos casi todos los hispanohablantes. Cázalos uno por uno.",
      errores: [
        {
          sit: "Hugo compara:",
          frase: "Marie est aussi sympa comme sa sœur.",
          mal: "comme",
          bien: "que",
          porque: "En español «tan simpática COMO».",
          truco: "Aussi… que: aussi sympa que."
        },
        {
          sit: "Camila prueba:",
          frase: "Cette pizza est plus bonne que l'autre.",
          mal: "plus bonne",
          bien: "meilleure",
          porque: "Aplicamos plus a todos los adjetivos.",
          truco: "Bon → meilleur, meilleure."
        },
        {
          sit: "Hugo admite:",
          frase: "Ana parle anglais plus bien que moi.",
          mal: "plus bien",
          bien: "mieux",
          porque: "Aplicamos plus también a bien.",
          truco: "Bien → mieux."
        }
      ]
    }
  ],
  ejemplos: [
    {
      sit: "«El TGV es más rápido que el bus.»",
      resp: "Le TGV est plus rapide que le bus.",
      porque: "plus + adjetivo + que.",
      pasos: [
        {
          q: "¿Más o menos?",
          ops: [
            "más: plus",
            "menos: moins"
          ],
          ok: 0
        },
        {
          q: "¿Adjetivo o nombre?",
          ops: [
            "adjetivo",
            "nombre"
          ],
          ok: 0
        },
        {
          q: "¿Y después?",
          ops: [
            "que",
            "comme"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«Tengo más libros que tú.»",
      resp: "J'ai plus de livres que toi.",
      porque: "plus de + nombre.",
      pasos: [
        {
          q: "¿Adjetivo o nombre?",
          ops: [
            "adjetivo",
            "nombre"
          ],
          ok: 1
        },
        {
          q: "¿Qué forma?",
          ops: [
            "plus de",
            "plus des"
          ],
          ok: 0
        },
        {
          q: "¿Que tú?",
          ops: [
            "que toi",
            "que tu"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«Es la playa más bonita de Colombia.»",
      resp: "C'est la plus belle plage de Colombie.",
      porque: "la plus + adjetivo + de.",
      pasos: [
        {
          q: "¿Comparativo o superlativo?",
          ops: [
            "superlativo",
            "comparativo"
          ],
          ok: 0
        },
        {
          q: "¿Qué forma?",
          ops: [
            "la plus belle",
            "plus belle"
          ],
          ok: 0
        },
        {
          q: "¿De Colombia?",
          ops: [
            "de Colombie",
            "en Colombie"
          ],
          ok: 0
        }
      ]
    }
  ],
  comprueba: [
    { q: "Más bueno se dice…", o: ["meilleur", "plus bon"], a: 0, b: "gr", porque: "Irregular." },
    { q: "Con un verbo (habla mejor) se usa…", o: ["mieux", "meilleur"], a: 0, b: "gr", porque: "Adverbio." },
    { q: "Tan alta como se dice…", o: ["aussi grande que", "aussi grande comme"], a: 0, b: "gr", porque: "aussi… que." }
  ],
  practica: [
    { fase: "guiada", c: ["cmp-adj"], k: "choice", ask: "«El TGV es más rápido que el bus.»", q: "«Le TGV est ___ rapide que le bus.»", o: ["plus", "aussi", "moins"], a: 0, pista: "Más.", why: "<b>plus</b>." },
    { fase: "guiada", c: ["cmp-sup"], k: "choice", ask: "«Esta pizza es mejor que la otra.»", q: "«Cette pizza est ___ que l'autre.»", o: ["meilleure", "plus bonne", "mieux"], a: 0, pista: "bon → ?", why: "<b>meilleure</b>." },
    { fase: "guiada", c: ["cmp-adj", "cmp-sup"], k: "match", ask: "Une cada forma.", q: "Francés → español", pairs: [["plus… que", "más… que"], ["moins… que", "menos… que"], ["aussi… que", "tan… como"], ["mieux", "mejor (con verbo)"], ["le plus…", "el más…"]], pista: "aussi = tan.", why: "Formas." },
    { fase: "indep", c: ["cmp-adj"], k: "fill", ask: "Escribe una palabra (los dos miden 1,75 m).", q: "Mon frère est ___ grand que moi.", acc: ["aussi"], why: "<b>aussi</b>." },
    { fase: "indep", c: ["cmp-sup"], k: "choice", ask: "«Ana habla inglés mejor que yo.»", q: "«Ana parle anglais ___ que moi.»", o: ["mieux", "meilleur", "plus bien"], a: 0, why: "Con verbo: <b>mieux</b>." },
    { fase: "indep", c: ["cmp-adj"], k: "spot", ask: "Encuentra el error.", s: "Marie est aussi sympa [comme] sa sœur .", fix: "que", why: "<b>que</b>." },
    { fase: "aplica", c: ["cmp-nom"], k: "fill", ask: "Tienes 50 libros y tu amigo 20. Escribe dos palabras.", q: "J'ai ___ livres que toi.", acc: ["plus de"], why: "<b>plus de</b>." },
    { fase: "aplica", c: ["cmp-adj", "cmp-sup"], k: "sort", ask: "¿Comparativo o superlativo?", q: "Clasifica.", cats: ["Comparativo", "Superlativo"], items: [["plus cher que", 0], ["meilleur que", 0], ["moins loin que", 0], ["aussi beau que", 0], ["le plus cher", 1], ["la meilleure", 1], ["le moins loin", 1], ["les plus jolies", 1]], why: "Dos grados." },
    { fase: "dominio", c: ["cmp-sup"], k: "fill", ask: "Escribe el superlativo de bon (dos palabras).", q: "Pour moi, c'est ___ joueur du monde.", acc: ["le meilleur"], why: "<b>le meilleur</b>." },
    { fase: "dominio", c: ["cmp-sup"], k: "order", ask: "Ordena: «Es la playa más bonita de Colombia».", tokens: ["C'est", "la plus belle", "plage", "de Colombie."], why: "<b>C'est la plus belle plage de Colombie.</b>" },
    { fase: "dominio", c: ["cmp-adj", "cmp-nom", "cmp-sup"], k: "listen", say: "Le TGV est plus rapide que le bus.", acc: ["Le TGV est plus rapide que le bus."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Le TGV est plus rapide que le bus.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Lyon", "Ana", "Marie", "Colombie", "TGV"], previo: ["rapide", "bus", "mais", "cher", "avion", "vol", "aéroport", "loin", "restaurant", "ville", "super", "parles", "français", "commandes", "sœur", "grande", "livres", "amis", "pizza", "l'autre", "autre", "anglais", "belle", "plage", "joueur", "monde", "sympa", "frère", "mesurons", "deux", "jolies", "beau", "toi", "moi"] }
};

/* ================================ A2·3 y A2·4 · Pronombres ================================ */

E["a2-pronoms"] = {
  v: 1, arts: false, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Les pronoms COD, COI, y et en",
  objetivo: {
    que: "Vas a conocer los cuatro grupos de pronombres complemento y cuándo se usa cada uno.",
    corto: "le, lui, y, en: el mapa.",
    podras: ["Ver qué viene tras el verbo: nada, à o de.", "Elegir le / la / les, lui / leur, y o en.", "Poner el pronombre delante del verbo."],
    iconos: ["ic2/bombilla", "m2d/pensativo", "ic2/engranaje"],
    previos: ["Los pronombres tónicos (A1, lección 59)."],
    capacidad: "Ahora tienes el mapa de los pronombres; las próximas lecciones van uno por uno."
  },
  requiere: R("pca-forma"), recupera: ["pt-forma"],
  conceptos: {
    "pr-mapa": { n: "sin preposición / à + persona / lugar / de o cantidad", b: "gr" },
    "pr-place": { n: "el pronombre va delante del verbo", b: "gr" }
  },
  video: {
    titulo: "Los pronombres COD, COI, y, en",
    voz: "es-CO-SalomeNeural",
    escenas: [
      {
        v: "persona",
        cap: "Para qué sirve",
        fondo: "esc/cafe-lyon",
        img: "pj/hugo-neutro",
        fr: "Tu connais Julie ?",
        es: "¿Conoces a Julie?",
        nota: "Preguntas rápidas",
        seg: [
          {
            es: "Hugo le hace preguntas rápidas a Camila. Ella responde sin repetir las palabras."
          },
          {
            fr: "Tu connais Julie ?",
            p: 1
          },
          {
            es: "Para no repetir, el francés usa pronombres: le, lui, y, en. Hoy aprendes a elegir el correcto con una sola pregunta: ¿qué va después del verbo?",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "COD",
        titulo: "Sin preposición: le, la, les",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Julie ? Je la connais bien.",
            es: "¿Julie? La conozco bien."
          },
          {
            p: 2,
            fr: "Tu aimes ce livre ? — Oui, je l'aime beaucoup.",
            es: "¿Te gusta este libro? — Sí, me gusta mucho."
          },
          {
            p: 3,
            fr: "Tu invites Sophie et Léa ? — Oui, je les invite.",
            es: "¿Invitas a Sophie y Léa? — Sí, las invito."
          }
        ],
        seg: [
          {
            es: "Si el verbo va directo, sin preposición: le, la, les.",
            p: 1
          },
          {
            fr: "Julie ? Je la connais bien.",
            p: 1
          },
          {
            fr: "Oui, je l'aime beaucoup.",
            p: 2
          },
          {
            fr: "Oui, je les invite.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "COI",
        titulo: "À + persona: lui, leur",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Je lui téléphone ce soir.",
            es: "Lo llamo esta noche."
          },
          {
            p: 2,
            fr: "Je leur parle souvent.",
            es: "Les hablo a menudo."
          },
          {
            p: 3,
            regla: "téléphoner à, parler à + persona → lui, leur"
          }
        ],
        seg: [
          {
            es: "Si va à más una persona: lui, o leur en plural.",
            p: 1
          },
          {
            fr: "Je lui téléphone ce soir.",
            p: 1
          },
          {
            fr: "Je leur parle souvent.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Y y en",
        titulo: "Lugar: y · cantidad: en",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Tu vas à la plage ? — Oui, j'y vais demain.",
            es: "¿Vas a la playa? — Sí, voy mañana."
          },
          {
            p: 2,
            fr: "Des frères ? J'en ai deux.",
            es: "¿Hermanos? Tengo dos."
          },
          {
            p: 3,
            fr: "Tu bois du thé ? — Non, je n'en bois pas.",
            es: "¿Tomas té? — No, no tomo."
          }
        ],
        seg: [
          {
            es: "Un lugar: y.",
            p: 1
          },
          {
            fr: "Oui, j'y vais demain.",
            p: 1
          },
          {
            es: "Una cantidad, o du, de la, des: en.",
            p: 2
          },
          {
            fr: "Des frères ? J'en ai deux.",
            p: 2
          },
          {
            fr: "Non, je n'en bois pas.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "El lugar",
        titulo: "Delante del verbo",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Les devoirs ? Je vais les faire ce soir.",
            es: "¿Las tareas? Las voy a hacer esta noche."
          },
          {
            p: 2,
            fr: "Tu as vu le film ? — Oui, je l'ai vu.",
            es: "¿Viste la película? — Sí, la vi."
          },
          {
            p: 3,
            regla: "delante del verbo · delante del infinitivo · delante del auxiliar"
          }
        ],
        seg: [
          {
            es: "El pronombre va delante del verbo. Con un infinitivo, delante del infinitivo:",
            p: 1
          },
          {
            fr: "Les devoirs ? Je vais les faire ce soir.",
            p: 1
          },
          {
            es: "Y en pasado, delante de avoir:",
            p: 2
          },
          {
            fr: "Oui, je l'ai vu.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En la vida real",
        titulo: "Preguntas rápidas",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Tu connais Julie ?",
            es: "¿Conoces a Julie?"
          },
          {
            p: 2,
            fr: "Oui, je la connais bien. Je lui téléphone ce soir.",
            es: "Sí, la conozco bien. La llamo esta noche."
          },
          {
            p: 3,
            fr: "Tu vas au supermarché ? — Oui, j'y vais maintenant.",
            es: "¿Vas al supermercado? — Sí, voy ahora."
          },
          {
            p: 4,
            fr: "Tu as des frères ? — Oui, j'en ai deux.",
            es: "¿Tienes hermanos? — Sí, tengo dos."
          }
        ],
        seg: [
          {
            es: "Escucha cómo suena en una conversación de verdad."
          },
          {
            fr: "Tu connais Julie ?",
            p: 1
          },
          {
            fr: "Oui, je la connais bien. Je lui téléphone ce soir.",
            p: 2
          },
          {
            fr: "Tu vas au supermarché ? — Oui, j'y vais maintenant.",
            p: 3
          },
          {
            fr: "Tu as des frères ? — Oui, j'en ai deux.",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Contraste con el español",
        titulo: "Le hablo… je lui parle",
        mz: "m2d/alerta",
        items: [
          {
            p: 1,
            regla: "Español: le hablo · francés: je lui parle (no je le parle)"
          },
          {
            p: 2,
            regla: "Español: lo vi · francés: je l'ai vu (antes de avoir)"
          },
          {
            p: 3,
            regla: "Español: tengo dos · francés: j'en ai deux (con en)"
          }
        ],
        seg: [
          {
            es: "En español decimos le hablo. En francés, le es para lo directo; con parler à, lui.",
            p: 1
          },
          {
            es: "En pasado, el pronombre va antes de avoir: je l'ai vu.",
            p: 2
          },
          {
            es: "Y con una cantidad, en, que en español no se dice.",
            p: 3
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Je le parle.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Je lui parle.",
          es: "parler à → lui."
        },
        seg: [
          {
            es: "Primera trampa: le con parler.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Je lui parle.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Je connais la.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Je la connais.",
          es: "Delante del verbo."
        },
        seg: [
          {
            es: "Segunda trampa: el pronombre detrás.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Je la connais.",
            p: 2
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/pensativo",
        q: "«¿Vas al supermercado? — Sí, voy.»",
        o: [
          "Oui, j'y vais.",
          "Oui, j'en vais."
        ],
        a: 0,
        bien: "¡Eso es! Y.",
        mal: "Un lugar: y.",
        seg: [
          {
            es: "Te toca. ¿Vas al supermercado? Respondes que sí."
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/confundido",
        q: "«¿Viste la película? — Sí, la vi.»",
        o: [
          "Oui, je l'ai vu.",
          "Oui, j'ai le vu."
        ],
        a: 0,
        bien: "¡Muy bien! Je l'ai vu.",
        mal: "El pronombre va delante de avoir.",
        seg: [
          {
            es: "Una más. ¿Viste la película? Respondes que sí."
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
            fr: "Je leur téléphone ce soir.",
            es: "¿Tus padres? Los llamo esta noche."
          },
          {
            p: 2,
            fr: "Oui, j'y vais.",
            es: "¿Vas al supermercado? — Sí, voy."
          },
          {
            p: 3,
            fr: "Oui, je l'ai vu.",
            es: "¿Viste la película? — Sí, la vi."
          }
        ],
        seg: [
          {
            es: "Ahora tú. Escucha cada frase y repítela en voz alta."
          },
          {
            fr: "Je leur téléphone ce soir.",
            p: 1
          },
          {
            es: "Otra vez.",
            p: 1
          },
          {
            fr: "Je leur téléphone ce soir.",
            p: 1
          },
          {
            fr: "Oui, j'y vais.",
            p: 2
          },
          {
            es: "Otra vez.",
            p: 2
          },
          {
            fr: "Oui, j'y vais.",
            p: 2
          },
          {
            fr: "Oui, je l'ai vu.",
            p: 3
          },
          {
            es: "Otra vez.",
            p: 3
          },
          {
            fr: "Oui, je l'ai vu.",
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
                "Después del verbo va…",
                "Pronombre"
              ],
              [
                "nada (directo)",
                "le, la, les"
              ],
              [
                "à + persona",
                "lui, leur"
              ],
              [
                "un lugar · à + cosa",
                "y"
              ],
              [
                "du, de la, des · cantidad",
                "en"
              ]
            ]
          },
          {
            p: 2,
            regla: "Siempre delante del verbo, del infinitivo o de avoir"
          }
        ],
        seg: [
          {
            es: "Repasemos.",
            p: 1
          },
          {
            es: "Mira qué va después del verbo.",
            p: 1
          },
          {
            es: "Y pon el pronombre delante. ¡Ahora, a practicar!",
            p: 2
          }
        ]
      }
    ]
  },
  contexto: {
    titulo: "Preguntas rápidas", img: "bg-cafe", yo: "camila",
    escena: "Hugo le hace preguntas rápidas a Camila.",
    pj: PJ,
    lineas: [
      ["hugo", "Tu connais Julie ?", "¿Conoces a Julie?"],
      ["camila", "Oui, je la connais bien. Je lui téléphone ce soir.", "Sí, la conozco bien. La llamo esta noche."],
      ["hugo", "Tu vas au supermarché ? — Oui, j'y vais maintenant.", "¿Vas al supermercado? — Sí, voy ahora."],
      ["camila", "Tu as des frères ? — Oui, j'en ai deux.", "¿Tienes hermanos? — Sí, tengo dos."]
    ],
    fijate: "Fíjate: je la connais, je lui téléphone, j'y vais, j'en ai deux."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Cuatro grupos",
      idea: "Sin preposición → le, la, les (COD). à + persona → lui, leur (COI). Lugar o à + cosa → y. du, de la, des, cantidad o de + cosa → en. El pronombre va delante del verbo.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Pronombre"], [
        ["Julie ? Je la connais bien.", "¿Julie? La conozco bien.", "COD"],
        ["Tu aimes ce livre ? — Oui, je l'aime beaucoup.", "¿Te gusta este libro? — Sí, me gusta mucho.", "COD"],
        ["Tu invites Sophie et Léa ? — Oui, je les invite.", "¿Invitas a Sophie y Léa? — Sí, las invito.", "COD"],
        ["Je lui téléphone ce soir.", "Lo llamo esta noche.", "COI"],
        ["Je leur parle souvent.", "Les hablo a menudo.", "COI"],
        ["Tu vas à la plage ? — Oui, j'y vais demain.", "¿Vas a la playa? — Sí, voy mañana.", "y"],
        ["Des frères ? J'en ai deux.", "¿Hermanos? Tengo dos.", "en"],
        ["Tu bois du thé ? — Non, je n'en bois pas.", "¿Tomas té? — No, no tomo.", "en"],
        ["Les devoirs ? Je vais les faire ce soir.", "¿Las tareas? Las voy a hacer esta noche.", "delante del infinitivo"],
        ["Tu as vu le film ? — Oui, je l'ai vu.", "¿Viste la película? — Sí, la vi.", "delante del auxiliar"]
      ]],
      ej: [["Je lui écris chaque semaine.", "Le escribo cada semana."], ["la voiture", "el carro"], ["les clés", "las llaves"], ["à mes amis", "a mis amigos"], ["à mon frère", "a mi hermano"], ["du pain", "pan"], ["des pommes", "manzanas"]] },
    {
      id: "ojo",
      tipo: "ojo",
      titulo: "Errores frecuentes",
      intro: "Tres errores que cometemos casi todos los hispanohablantes. Cázalos uno por uno.",
      errores: [
        {
          sit: "Camila responde:",
          frase: "— Tu parles à Marc ? — Oui, je le parle tous les jours.",
          mal: "le",
          bien: "lui",
          porque: "En español «le hablo» y copiamos le.",
          truco: "Parler à + persona: lui."
        },
        {
          sit: "Hugo responde:",
          frase: "Le film ? Oui, j'ai le vu.",
          mal: "j'ai le vu",
          bien: "je l'ai vu",
          porque: "Ponemos el pronombre cerca del participio.",
          truco: "Delante de avoir: je l'ai vu."
        },
        {
          sit: "Camila responde:",
          frase: "Julie ? Je connais la bien.",
          mal: "connais la",
          bien: "la connais",
          porque: "Ponemos el pronombre detrás, como en «conócela».",
          truco: "Delante del verbo: je la connais."
        }
      ]
    }
  ],
  ejemplos: [
    {
      sit: "«¿Tus padres? Los llamo esta noche.»",
      resp: "Je leur téléphone ce soir.",
      porque: "téléphoner à + personas → leur.",
      pasos: [
        {
          q: "¿Qué va después de téléphoner?",
          ops: [
            "à + personas",
            "nada"
          ],
          ok: 0
        },
        {
          q: "¿Qué pronombre?",
          ops: [
            "leur",
            "les"
          ],
          ok: 0
        },
        {
          q: "¿Dónde va?",
          ops: [
            "antes del verbo",
            "después del verbo"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«¿Vas al supermercado? — Sí, voy.»",
      resp: "Oui, j'y vais.",
      porque: "Lugar: y.",
      pasos: [
        {
          q: "¿Qué reemplazas?",
          ops: [
            "un lugar",
            "una persona"
          ],
          ok: 0
        },
        {
          q: "¿Qué pronombre?",
          ops: [
            "y",
            "en"
          ],
          ok: 0
        },
        {
          q: "¿Cómo queda?",
          ops: [
            "j'y vais",
            "je vais y"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«¿Viste la película? — Sí, la vi.»",
      resp: "Oui, je l'ai vu.",
      porque: "COD delante de avoir.",
      pasos: [
        {
          q: "¿Qué va después de voir?",
          ops: [
            "nada (directo)",
            "à"
          ],
          ok: 0
        },
        {
          q: "¿Qué pronombre?",
          ops: [
            "le → l'",
            "lui"
          ],
          ok: 0
        },
        {
          q: "¿Dónde va?",
          ops: [
            "antes de ai",
            "antes de vu"
          ],
          ok: 0
        }
      ]
    }
  ],
  comprueba: [
    { q: "Con à + persona se usa…", o: ["lui / leur", "le / la"], a: 0, b: "gr", porque: "COI." },
    { q: "Con una cantidad se usa…", o: ["en", "y"], a: 0, b: "gr", porque: "J'en ai deux." },
    { q: "El pronombre va…", o: ["delante del verbo", "detrás del verbo"], a: 0, b: "gr", porque: "Je la connais." }
  ],
  practica: [
    { fase: "guiada", c: ["pr-mapa"], k: "choice", ask: "— «¿Conoces a Julie?» — «Sí, la conozco bien.»", q: "«Oui, je ___ connais bien.»", o: ["la", "lui", "en"], a: 0, pista: "Sin preposición.", why: "<b>la</b>." },
    { fase: "guiada", c: ["pr-mapa"], k: "choice", ask: "— «¿Llamas a tus padres?» — «Sí, los llamo.»", q: "«Oui, je ___ téléphone.»", o: ["leur", "les", "y"], a: 0, pista: "téléphoner à.", why: "<b>leur</b>." },
    { fase: "guiada", c: ["pr-mapa"], k: "sort", ask: "¿Qué pronombre reemplaza cada complemento?", q: "Clasifica.", cats: ["le / la / les", "lui / leur", "y", "en"], items: [["(je prends) la voiture", 0], ["(je cherche) les clés", 0], ["(je parle) à mon frère", 1], ["(j'écris) à mes amis", 1], ["(je vais) à Paris", 2], ["(je vais) au cinéma", 2], ["(je mange) du pain", 3], ["(j'achète) des pommes", 3]], pista: "Mira la preposición.", why: "El mapa." },
    { fase: "indep", c: ["pr-mapa"], k: "fill", ask: "Escribe un pronombre.", q: "— Tu vas au supermarché ? — Oui, j'___ vais maintenant.", acc: ["y"], why: "<b>y</b>." },
    { fase: "indep", c: ["pr-mapa"], k: "fill", ask: "Escribe un pronombre.", q: "— Tu as des frères ? — Oui, j'___ ai deux.", acc: ["en"], why: "<b>en</b>." },
    { fase: "indep", c: ["pr-mapa"], k: "spot", ask: "Encuentra el error.", s: "— Tu parles à Marc ? — Oui , je [le] parle tous les jours .", fix: "lui", why: "<b>lui</b>." },
    { fase: "aplica", c: ["pr-mapa"], k: "match", ask: "Une cada pregunta con su respuesta.", q: "Pregunta → respuesta", pairs: [["Tu aimes ce livre ?", "Oui, je l'aime beaucoup."], ["Tu parles à tes voisins ?", "Oui, je leur parle souvent."], ["Tu vas à la plage ?", "Oui, j'y vais demain."], ["Tu bois du thé ?", "Non, je n'en bois pas."]], why: "Cuatro pronombres." },
    { fase: "aplica", c: ["pr-place"], k: "choice", ask: "— «¿Viste la película?» — «Sí, la vi.»", q: "«Oui, ___ .»", o: ["je l'ai vu", "j'ai le vu", "j'ai vu le"], a: 0, why: "Delante del auxiliar: <b>je l'ai vu</b>." },
    { fase: "dominio", c: ["pr-mapa"], k: "fill", ask: "Escribe un pronombre (escribir a la abuela).", q: "— Tu écris souvent à ta grand-mère ? — Oui, je ___ écris chaque semaine.", acc: ["lui"], why: "<b>lui</b>." },
    { fase: "dominio", c: ["pr-place"], k: "order", ask: "Ordena: «Las voy a hacer esta noche».", tokens: ["Je vais", "les", "faire", "ce soir."], why: "<b>Je vais les faire ce soir.</b>" },
    { fase: "dominio", c: ["pr-mapa", "pr-place"], k: "listen", say: "Oui, je la connais bien.", acc: ["Oui, je la connais bien.", "Oui je la connais bien."], num: false, dict: true, ask: "Escucha la respuesta y escríbela.", why: "Era <b>Oui, je la connais bien.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Julie", "Marc", "Sophie", "Léa", "Paris"], previo: ["connais", "téléphone", "téléphones", "ce", "soir", "supermarché", "maintenant", "frères", "deux", "livre", "aime", "beaucoup", "invite", "invites", "parle", "parles", "souvent", "voisins", "plage", "demain", "bois", "thé", "devoirs", "faire", "film", "vu", "écris", "chaque", "semaine", "grand-mère", "parents", "voiture", "clés", "prends", "cherche", "amis", "frère", "cinéma", "mange", "pain", "achète", "pommes", "tous", "jours"] }
};

E["a2-cod"] = {
  v: 1, arts: false, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Le pronom COD : le, la, l', les",
  objetivo: {
    que: "Vas a reemplazar el complemento directo por le, la, l' o les y ponerlo en su sitio.",
    corto: "Je la regarde.",
    podras: ["Reconocer el COD (sin preposición).", "Elegir le / la / l' / les.", "Ponerlo delante del verbo, del infinitivo o del auxiliar (y detrás en el imperativo)."],
    iconos: ["ic2/bombilla", "m2d/senalar", "ic2/engranaje"],
    previos: ["El mapa de los pronombres (lección 8)."],
    capacidad: "Ahora puedes no repetir las cosas y personas."
  },
  requiere: R("pr-mapa", "pr-place", "pca-forma", "im-forma"), recupera: ["pr-mapa"],
  conceptos: {
    "cod-forma": { n: "le, la, l', les: sin preposición", b: "gr" },
    "cod-place": { n: "delante del verbo / infinitivo / auxiliar; Prends-le !", b: "gr" }
  },
  video: {
    titulo: "El pronombre COD: le, la, l', les",
    voz: "es-CO-SalomeNeural",
    escenas: [
      {
        v: "persona",
        cap: "Para qué sirve",
        fondo: "esc/escritorio-noche",
        img: "pj/camila-cafe-laptop",
        fr: "Oui, je la regarde tous les soirs !",
        es: "¡Sí, la veo todas las noches!",
        nota: "La serie",
        seg: [
          {
            es: "Hugo le pregunta a Camila por la serie «Lupin»."
          },
          {
            fr: "Oui, je la regarde tous les soirs !",
            p: 1
          },
          {
            es: "El complemento directo, sin preposición, se reemplaza con le, la o les. Hoy aprendes dónde va, en cada tiempo.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Las formas",
        titulo: "Le, la, l', les",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Tu prends le métro ? — Oui, je le prends.",
            es: "¿Tomas el metro? — Sí, lo tomo."
          },
          {
            p: 2,
            fr: "La série ? Je la regarde.",
            es: "¿La serie? La veo."
          },
          {
            p: 3,
            fr: "J'attends le bus → Je l'attends.",
            es: "Espero el bus → Lo espero."
          },
          {
            p: 4,
            fr: "Je les cherche partout.",
            es: "Las busco por todas partes."
          }
        ],
        seg: [
          {
            es: "Masculino le, femenino la:",
            p: 1
          },
          {
            fr: "Oui, je le prends.",
            p: 1
          },
          {
            fr: "La série ? Je la regarde.",
            p: 2
          },
          {
            es: "Delante de vocal, l':",
            p: 3
          },
          {
            fr: "Je l'attends.",
            p: 3
          },
          {
            es: "Plural, les:",
            p: 4
          },
          {
            fr: "Je les cherche partout.",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Dónde va",
        titulo: "Delante del verbo o del infinitivo",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Je ne le bois pas.",
            es: "No lo tomo."
          },
          {
            p: 2,
            fr: "Les devoirs ? Je vais les faire.",
            es: "¿Las tareas? Las voy a hacer."
          },
          {
            p: 3,
            regla: "ne + pronombre + verbo + pas · aller + pronombre + infinitivo"
          }
        ],
        seg: [
          {
            es: "En negativo, el pronombre se queda junto al verbo:",
            p: 1
          },
          {
            fr: "Je ne le bois pas.",
            p: 1
          },
          {
            es: "Con un infinitivo, delante del infinitivo:",
            p: 2
          },
          {
            fr: "Les devoirs ? Je vais les faire.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Pasado e imperativo",
        titulo: "Je l'ai vue · lis-le !",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Je l'ai vue ce matin.",
            es: "La vi esta mañana."
          },
          {
            p: 2,
            fr: "Ce livre est génial : lis-le !",
            es: "Este libro es genial: ¡léelo!"
          },
          {
            p: 3,
            regla: "con avoir, el participio concuerda con el COD de delante · imperativo: detrás, con guion"
          }
        ],
        seg: [
          {
            es: "En pasado, delante de avoir. Y el participio concuerda con el pronombre: la profesora, vue.",
            p: 1
          },
          {
            fr: "Je l'ai vue ce matin.",
            p: 1
          },
          {
            es: "En el imperativo afirmativo, detrás, como en español:",
            p: 2
          },
          {
            fr: "Ce livre est génial : lis-le !",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Me, te, nous, vous",
        titulo: "También COD",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Tu m'entends ? — Oui, je t'entends bien.",
            es: "¿Me oyes? — Sí, te oigo bien."
          },
          {
            p: 2,
            fr: "Vous nous attendez ? — Oui, nous vous attendons.",
            es: "¿Nos esperan? — Sí, los esperamos."
          }
        ],
        seg: [
          {
            fr: "Tu m'entends ?",
            p: 1
          },
          {
            fr: "Oui, je t'entends bien.",
            p: 1
          },
          {
            fr: "Vous nous attendez ?",
            p: 2
          },
          {
            fr: "Oui, nous vous attendons.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En la vida real",
        titulo: "La serie",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Tu regardes la série « Lupin » ?",
            es: "¿Ves la serie «Lupin»?"
          },
          {
            p: 2,
            fr: "Oui, je la regarde tous les soirs ! Tu cherches tes clés ?",
            es: "¡Sí, la veo todas las noches! ¿Buscas tus llaves?"
          },
          {
            p: 3,
            fr: "Oui, je les cherche partout ! Et mes devoirs… je vais les faire demain.",
            es: "¡Sí, las busco por todas partes! Y mis tareas… las voy a hacer mañana."
          },
          {
            p: 4,
            fr: "Tu as vu la nouvelle professeure ? — Oui, je l'ai vue ce matin.",
            es: "¿Viste a la nueva profesora? — Sí, la vi esta mañana."
          }
        ],
        seg: [
          {
            es: "Escucha cómo suena en una conversación de verdad."
          },
          {
            fr: "Tu regardes la série « Lupin » ?",
            p: 1
          },
          {
            fr: "Oui, je la regarde tous les soirs ! Tu cherches tes clés ?",
            p: 2
          },
          {
            fr: "Oui, je les cherche partout ! Et mes devoirs… je vais les faire demain.",
            p: 3
          },
          {
            fr: "Tu as vu la nouvelle professeure ? — Oui, je l'ai vue ce matin.",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Contraste con el español",
        titulo: "Esperar a alguien… je l'attends",
        mz: "m2d/alerta",
        items: [
          {
            p: 1,
            regla: "Español: espero A Sophie · francés: j'attends Sophie → je l'attends (COD)"
          },
          {
            p: 2,
            regla: "Español: la vi · francés: je l'ai vue (concuerda)"
          },
          {
            p: 3,
            regla: "Español: voy a hacerlas · francés: je vais les faire (delante del infinitivo)"
          }
        ],
        seg: [
          {
            es: "Attendre no lleva à en francés: es COD. Entonces, je l'attends, no je lui attends.",
            p: 1
          },
          {
            es: "En pasado, el participio concuerda con el pronombre femenino: vue.",
            p: 2
          },
          {
            es: "Y en español podemos decir voy a hacerlas. En francés, solo je vais les faire.",
            p: 3
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Je lui attends.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Je l'attends.",
          es: "attendre sin à: COD."
        },
        seg: [
          {
            es: "Primera trampa: lui con attendre.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Je l'attends.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Je vais faire le.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Je vais le faire.",
          es: "Delante del infinitivo."
        },
        seg: [
          {
            es: "Segunda trampa: el pronombre al final.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Je vais le faire.",
            p: 2
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/pensativo",
        q: "«¿Invitas a Marie y Paul? — Sí, los invito.»",
        o: [
          "Oui, je les invite.",
          "Oui, je leur invite."
        ],
        a: 0,
        bien: "¡Eso es! Les.",
        mal: "Inviter va directo: COD, les.",
        seg: [
          {
            es: "Te toca. ¿Invitas a Marie y Paul? Respondes que sí."
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/confundido",
        q: "«¿Tomas este café? — No, no lo tomo.»",
        o: [
          "Non, je ne le bois pas.",
          "Non, je le ne bois pas."
        ],
        a: 0,
        bien: "¡Muy bien!",
        mal: "Ne va antes del pronombre: je ne le bois pas.",
        seg: [
          {
            es: "Una más. ¿Tomas este café? Respondes que no."
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
            fr: "Oui, je les invite.",
            es: "¿Invitas a Marie y Paul? — Sí, los invito."
          },
          {
            p: 2,
            fr: "Non, je ne le bois pas.",
            es: "¿Tomas este café? — No, no lo tomo."
          },
          {
            p: 3,
            fr: "Lis-le !",
            es: "¡Léelo!"
          }
        ],
        seg: [
          {
            es: "Ahora tú. Escucha cada frase y repítela en voz alta."
          },
          {
            fr: "Oui, je les invite.",
            p: 1
          },
          {
            es: "Otra vez.",
            p: 1
          },
          {
            fr: "Oui, je les invite.",
            p: 1
          },
          {
            fr: "Non, je ne le bois pas.",
            p: 2
          },
          {
            es: "Otra vez.",
            p: 2
          },
          {
            fr: "Non, je ne le bois pas.",
            p: 2
          },
          {
            fr: "Lis-le !",
            p: 3
          },
          {
            es: "Otra vez.",
            p: 3
          },
          {
            fr: "Lis-le !",
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
                "Ejemplo"
              ],
              [
                "presente",
                "je la regarde"
              ],
              [
                "negativo",
                "je ne le bois pas"
              ],
              [
                "con infinitivo",
                "je vais les faire"
              ],
              [
                "pasado",
                "je l'ai vue"
              ],
              [
                "imperativo",
                "lis-le !"
              ]
            ]
          },
          {
            p: 2,
            regla: "Delante del verbo, salvo en el imperativo afirmativo"
          }
        ],
        seg: [
          {
            es: "Repasemos.",
            p: 1
          },
          {
            es: "Le, la, l', les para lo directo.",
            p: 1
          },
          {
            es: "Y en pasado, el participio concuerda. ¡Ahora, a practicar!",
            p: 2
          }
        ]
      }
    ]
  },
  contexto: {
    titulo: "La serie", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo hablan de una serie.",
    pj: PJ,
    lineas: [
      ["hugo", "Tu regardes la série « Lupin » ?", "¿Ves la serie «Lupin»?"],
      ["camila", "Oui, je la regarde tous les soirs ! Tu cherches tes clés ?", "¡Sí, la veo todas las noches! ¿Buscas tus llaves?"],
      ["hugo", "Oui, je les cherche partout ! Et mes devoirs… je vais les faire demain.", "¡Sí, las busco por todas partes! Y mis tareas… las voy a hacer mañana."],
      ["camila", "Tu as vu la nouvelle professeure ? — Oui, je l'ai vue ce matin.", "¿Viste a la nueva profesora? — Sí, la vi esta mañana."]
    ],
    fijate: "Fíjate: je la regarde, je les cherche, je vais les faire, je l'ai vue."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "le, la, l', les",
      idea: "Sin à ni de → COD. Masculino le, femenino la, vocal l', plural les. Delante del verbo, del infinitivo o del auxiliar. Imperativo afirmativo: detrás (Prends-le !). Con el auxiliar avoir, el participio concuerda con el COD: je l'ai vue.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Regla"], [
        ["La série ? Je la regarde.", "¿La serie? La veo.", "la"],
        ["Tu prends le métro ? — Oui, je le prends.", "¿Tomas el metro? — Sí, lo tomo.", "le"],
        ["J'attends le bus → Je l'attends.", "Espero el bus → Lo espero.", "l' + vocal"],
        ["Je les cherche partout.", "Las busco por todas partes.", "les"],
        ["Les devoirs ? Je vais les faire.", "¿Las tareas? Las voy a hacer.", "+ infinitivo"],
        ["Je ne le bois pas.", "No lo tomo.", "negación"],
        ["Je l'ai vue ce matin.", "La vi esta mañana.", "pc: + e"],
        ["Ce livre est génial : lis-le !", "Este libro es genial: ¡léelo!", "imperativo"],
        ["Tu m'entends ? — Oui, je t'entends bien.", "¿Me oyes? — Sí, te oigo bien.", "me / te"],
        ["Vous nous attendez ? — Oui, nous vous attendons.", "¿Nos esperan? — Sí, los esperamos.", "nous / vous"]
      ]],
      ej: [["Je regarde la télé.", "Veo la tele."], ["J'écoute mes parents.", "Escucho a mis padres."], ["J'aide mon frère.", "Ayudo a mi hermano."], ["Je pense à mon examen.", "Pienso en mi examen."], ["Je téléphone à Luc.", "Llamo a Luc."], ["Je parle à Marie.", "Hablo con Marie."], ["Je vais à la plage.", "Voy a la playa."], ["depuis vingt minutes", "desde hace veinte minutos"]] },
    {
      id: "ojo",
      tipo: "ojo",
      titulo: "Errores frecuentes",
      intro: "Tres errores que cometemos casi todos los hispanohablantes. Cázalos uno por uno.",
      errores: [
        {
          sit: "Hugo responde:",
          frase: "— Tu attends Sophie ? — Oui, je lui attends depuis vingt minutes.",
          mal: "lui attends",
          bien: "l'attends",
          porque: "En español «la espero» o «le espero» y copiamos lui.",
          truco: "Attendre va directo: je l'attends."
        },
        {
          sit: "Camila responde:",
          frase: "Ce café ? Non, je le ne bois pas.",
          mal: "je le ne bois",
          bien: "je ne le bois",
          porque: "Pensamos que ne va justo antes del verbo.",
          truco: "Ne antes del pronombre: je ne le bois pas."
        },
        {
          sit: "Hugo responde:",
          frase: "La nouvelle professeure ? Je l'ai vu ce matin.",
          mal: "vu",
          bien: "vue",
          porque: "En español el participio no cambia.",
          truco: "Con un COD femenino delante: vue."
        }
      ]
    }
  ],
  ejemplos: [
    {
      sit: "«¿Invitas a Marie y Paul? — Sí, los invito.»",
      resp: "Oui, je les invite.",
      porque: "inviter directo → les.",
      pasos: [
        {
          q: "¿Inviter lleva à?",
          ops: [
            "no",
            "sí"
          ],
          ok: 0
        },
        {
          q: "¿Singular o plural?",
          ops: [
            "plural",
            "singular"
          ],
          ok: 0
        },
        {
          q: "¿Qué pronombre?",
          ops: [
            "les",
            "leur"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«¿Tomas este café? — No, no lo tomo.»",
      resp: "Non, je ne le bois pas.",
      porque: "ne + le + bois + pas.",
      pasos: [
        {
          q: "¿Qué pronombre?",
          ops: [
            "le",
            "lui"
          ],
          ok: 0
        },
        {
          q: "¿Dónde va ne?",
          ops: [
            "antes de le",
            "después de le"
          ],
          ok: 0
        },
        {
          q: "¿Cómo queda?",
          ops: [
            "je ne le bois pas",
            "je le ne bois pas"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«¡Léelo!»",
      resp: "Lis-le !",
      porque: "Imperativo afirmativo: detrás.",
      pasos: [
        {
          q: "¿Imperativo?",
          ops: [
            "sí",
            "no"
          ],
          ok: 0
        },
        {
          q: "¿Delante o detrás?",
          ops: [
            "detrás",
            "delante"
          ],
          ok: 0
        },
        {
          q: "¿Cómo queda?",
          ops: [
            "lis-le",
            "le lis"
          ],
          ok: 0
        }
      ]
    }
  ],
  comprueba: [
    { q: "Delante de vocal, le y la se vuelven…", o: ["l'", "lui"], a: 0, b: "gr", porque: "Elisión." },
    { q: "En el imperativo afirmativo el COD va…", o: ["detrás, con guion", "delante"], a: 0, b: "gr", porque: "Prends-le !" },
    { q: "Attendre lleva preposición…", o: ["no: es COD", "sí: es COI"], a: 0, b: "gr", porque: "Je l'attends." }
  ],
  practica: [
    { fase: "guiada", c: ["cod-forma"], k: "choice", ask: "— «¿Ves la serie?» — «Sí, la veo.»", q: "«Oui, je ___ regarde tous les soirs.»", o: ["la", "le", "lui"], a: 0, pista: "Femenino.", why: "<b>la</b>." },
    { fase: "guiada", c: ["cod-forma"], k: "choice", ask: "— «¿Buscas tus llaves?» — «Sí, las busco.»", q: "«Oui, je ___ cherche partout !»", o: ["les", "leur", "la"], a: 0, pista: "Plural.", why: "<b>les</b>." },
    { fase: "guiada", c: ["cod-forma"], k: "sort", ask: "¿Es COD o lleva preposición?", q: "Clasifica.", cats: ["COD (sin preposición)", "No es COD (lleva preposición)"], items: [["Je regarde la télé.", 0], ["J'attends le bus.", 0], ["J'écoute mes parents.", 0], ["J'aide mon frère.", 0], ["Je parle à Marie.", 1], ["Je pense à mon examen.", 1], ["Je téléphone à Luc.", 1], ["Je vais à la plage.", 1]], pista: "¿Hay à?", why: "COD o no." },
    { fase: "indep", c: ["cod-forma"], k: "fill", ask: "Escribe un pronombre.", q: "— Tu prends le métro ? — Oui, je ___ prends tous les jours.", acc: ["le"], why: "<b>le</b>." },
    { fase: "indep", c: ["cod-forma"], k: "spot", ask: "Encuentra el error.", s: "— Tu attends Sophie ? — Oui , je [lui] attends depuis vingt minutes .", fix: "l'", why: "<b>l'attends</b>." },
    { fase: "indep", c: ["cod-forma"], k: "fill", ask: "Escribe un pronombre.", q: "— Tu invites Marie et Paul ? — Oui, je ___ invite samedi.", acc: ["les"], why: "<b>les</b>." },
    { fase: "aplica", c: ["cod-place"], k: "choice", ask: "— «¿Viste a la nueva profesora?» — «Sí, la vi.»", q: "«Oui, je l'ai ___ ce matin.»", o: ["vue", "vu", "voir"], a: 0, why: "Concuerda con <b>la</b>: <b>vue</b>." },
    { fase: "aplica", c: ["cod-place"], k: "match", ask: "Une cada pregunta con su respuesta.", q: "Pregunta → respuesta", pairs: [["Tu fais tes devoirs ?", "Oui, je les fais."], ["Tu aimes cette ville ?", "Oui, je l'aime beaucoup."], ["Tu connais mon frère ?", "Non, je ne le connais pas."], ["Tu m'entends ?", "Oui, je t'entends bien."]], why: "COD." },
    { fase: "dominio", c: ["cod-place"], k: "choice", ask: "— «¿Tomas este café?» — «No.»", q: "«Non, ___ .»", o: ["je ne le bois pas", "je le ne bois pas", "je ne bois pas le"], a: 0, why: "<b>je ne le bois pas</b>." },
    { fase: "dominio", c: ["cod-place"], k: "order", ask: "Ordena: «Lo voy a hacer mañana».", tokens: ["Je vais", "le", "faire", "demain."], why: "<b>Je vais le faire demain.</b>" },
    { fase: "dominio", c: ["cod-forma", "cod-place"], k: "listen", say: "Ce livre est génial : lis-le !", acc: ["Ce livre est génial : lis-le !", "Ce livre est génial: lis-le!", "Ce livre est génial, lis-le !"], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Ce livre est génial : lis-le !</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Lupin", "Sophie", "Marie", "Paul", "Luc"], previo: ["regardes", "regarde", "série", "tous", "soirs", "cherches", "cherche", "tes", "clés", "partout", "mes", "devoirs", "demain", "nouvelle", "professeure", "matin", "métro", "prends", "attends", "attendez", "attendons", "bus", "bois", "café", "livre", "génial", "lis", "entends", "invites", "invite", "samedi", "depuis", "vingt", "minutes", "fais", "aimes", "cette", "ville", "connais", "frère", "télé", "écoute", "parents", "aide", "examen", "voir", "vu", "pense"] }
};

E["a2-coi"] = {
  v: 1, arts: false, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Le pronom COI : lui, leur",
  objetivo: {
    que: "Vas a reemplazar à + persona por lui (una) o leur (varias).",
    corto: "Je lui parle.",
    podras: ["Reconocer verbos con à: parler à, téléphoner à, écrire à…", "Elegir lui o leur (sin s).", "Saber que con COI el participio no concuerda."],
    iconos: ["ic2/amigos", "m2d/senalar", "ic2/movil"],
    previos: ["El COD (lección 9)."],
    capacidad: "Ahora puedes decir a quién hablas, escribes o llamas."
  },
  requiere: R("pr-mapa", "cod-forma", "cod-place", "pca-forma", "pca-irreg"), recupera: ["cod-forma"],
  conceptos: {
    "coi-forma": { n: "à + persona → lui / leur", b: "gr" },
    "coi-vs": { n: "COD (regarder) vs. COI (parler à)", b: "gr" }
  },
  video: {
    titulo: "El pronombre COI: lui, leur",
    voz: "es-CO-SalomeNeural",
    escenas: [
      {
        v: "persona",
        cap: "Para qué sirve",
        fondo: "esc/escritorio-noche",
        img: "pj/hugo-neutro",
        fr: "Tu téléphones à ta mère ?",
        es: "¿Llamas a tu mamá?",
        nota: "La familia",
        seg: [
          {
            es: "Hugo y Camila hablan de cómo se comunican con su familia."
          },
          {
            fr: "Tu téléphones à ta mère ?",
            p: 1
          },
          {
            es: "Cuando el verbo lleva à más una persona, el pronombre es lui o leur. Hoy aprendes cuáles verbos son y una trampa con el español.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Los verbos",
        titulo: "Verbo + à + persona",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "parler à · téléphoner à · écrire à",
            es: "hablar con · llamar a · escribir a"
          },
          {
            p: 2,
            fr: "répondre à · offrir à · ressembler à",
            es: "responder a · regalar a · parecerse a"
          },
          {
            p: 3,
            regla: "estos verbos llevan à: su pronombre es lui o leur"
          }
        ],
        seg: [
          {
            es: "Estos verbos llevan à delante de la persona.",
            p: 1
          },
          {
            fr: "parler à",
            p: 1
          },
          {
            fr: "téléphoner à",
            p: 1
          },
          {
            fr: "écrire à",
            p: 1
          },
          {
            fr: "répondre à",
            p: 2
          },
          {
            fr: "offrir à",
            p: 2
          },
          {
            fr: "ressembler à",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Lui, leur",
        titulo: "Una persona: lui · varias: leur",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Je parle à Julie → Je lui parle.",
            es: "Hablo con Julie → Le hablo."
          },
          {
            p: 2,
            fr: "Je téléphone à mes parents → Je leur téléphone.",
            es: "Llamo a mis padres → Los llamo."
          },
          {
            p: 3,
            fr: "Je leur offre un livre.",
            es: "Les regalo un libro."
          },
          {
            p: 4,
            regla: "lui (él o ella) · leur (ellos o ellas), sin s"
          }
        ],
        seg: [
          {
            es: "Una persona, hombre o mujer: lui.",
            p: 1
          },
          {
            fr: "Je lui parle.",
            p: 1
          },
          {
            es: "Varias: leur, sin s.",
            p: 2
          },
          {
            fr: "Je leur téléphone.",
            p: 2
          },
          {
            fr: "Je leur offre un livre.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En pasado",
        titulo: "Je lui ai répondu",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Je lui ai répondu hier.",
            es: "Le respondí ayer."
          },
          {
            p: 2,
            fr: "Je ne leur ai pas répondu.",
            es: "No les respondí."
          },
          {
            p: 3,
            fr: "Je vais leur écrire ce soir.",
            es: "Les voy a escribir esta noche."
          },
          {
            p: 4,
            regla: "con lui y leur el participio no concuerda"
          }
        ],
        seg: [
          {
            es: "En pasado, delante de avoir. Y aquí el participio no concuerda.",
            p: 1
          },
          {
            fr: "Je lui ai répondu hier.",
            p: 1
          },
          {
            fr: "Je ne leur ai pas répondu.",
            p: 2
          },
          {
            es: "Con un infinitivo, delante del infinitivo:",
            p: 3
          },
          {
            fr: "Je vais leur écrire ce soir.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "COD o COI",
        titulo: "¿Lleva à o no?",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Je regarde mon voisin. · Je parle à mon voisin.",
            es: "Miro a mi vecino. · Hablo con mi vecino."
          },
          {
            p: 2,
            fr: "J'appelle Sophie. · Je téléphone à Sophie.",
            es: "Llamo a Sophie. (los dos)"
          },
          {
            p: 3,
            fr: "Ayudo a mi hermano → Je l'aide.",
            es: "aider va directo: COD"
          }
        ],
        seg: [
          {
            es: "La pregunta es siempre la misma: ¿el verbo francés lleva à?",
            p: 1
          },
          {
            fr: "Je regarde mon voisin.",
            p: 1
          },
          {
            fr: "Je parle à mon voisin.",
            p: 1
          },
          {
            es: "Llamar tiene dos verbos: appeler, directo, y téléphoner à.",
            p: 2
          },
          {
            fr: "J'appelle Sophie.",
            p: 2
          },
          {
            fr: "Je téléphone à Sophie.",
            p: 2
          },
          {
            es: "Y ayudar, en francés, va directo: je l'aide.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En la vida real",
        titulo: "La familia",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Tu téléphones à ta mère ?",
            es: "¿Llamas a tu mamá?"
          },
          {
            p: 2,
            fr: "Oui, je lui téléphone ce soir. Et j'écris souvent à mes grands-parents.",
            es: "Sí, la llamo esta noche. Y les escribo seguido a mis abuelos."
          },
          {
            p: 3,
            fr: "Tu leur écris en français ?",
            es: "¿Les escribes en francés?"
          },
          {
            p: 4,
            fr: "Non ! Et ma sœur ? Je lui ressemble beaucoup. Je lui ai écrit hier.",
            es: "¡No! ¿Y mi hermana? Me parezco mucho a ella. Le escribí ayer."
          }
        ],
        seg: [
          {
            es: "Escucha cómo suena en una conversación de verdad."
          },
          {
            fr: "Tu téléphones à ta mère ?",
            p: 1
          },
          {
            fr: "Oui, je lui téléphone ce soir. Et j'écris souvent à mes grands-parents.",
            p: 2
          },
          {
            fr: "Tu leur écris en français ?",
            p: 3
          },
          {
            fr: "Non ! Et ma sœur ? Je lui ressemble beaucoup. Je lui ai écrit hier.",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Contraste con el español",
        titulo: "Mira el verbo francés",
        mz: "m2d/alerta",
        items: [
          {
            p: 1,
            regla: "Español: la llamo · francés: je lui téléphone (téléphoner à)"
          },
          {
            p: 2,
            regla: "Español: le ayudo · francés: je l'aide (aider, directo)"
          },
          {
            p: 3,
            regla: "leur nunca lleva s cuando es pronombre"
          }
        ],
        seg: [
          {
            es: "No te guíes por el español: la llamo es je lui téléphone.",
            p: 1
          },
          {
            es: "Y le ayudo es je l'aide.",
            p: 2
          },
          {
            es: "Leur, como pronombre, nunca lleva s.",
            p: 3
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Je la téléphone.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Je lui téléphone.",
          es: "téléphoner à."
        },
        seg: [
          {
            es: "Primera trampa: la con téléphoner.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Je lui téléphone.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Je leurs écris.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Je leur écris.",
          es: "Sin s."
        },
        seg: [
          {
            es: "Segunda trampa: leurs con s.",
            p: 1
          },
          {
            es: "Se escribe:",
            p: 2
          },
          {
            fr: "Je leur écris.",
            p: 2
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/pensativo",
        q: "«¿Respondiste al profesor? — Sí, le respondí.»",
        o: [
          "Oui, je lui ai répondu.",
          "Oui, je l'ai répondu."
        ],
        a: 0,
        bien: "¡Eso es! Lui.",
        mal: "Répondre à: lui.",
        seg: [
          {
            es: "Te toca. ¿Respondiste al profesor? Respondes que sí."
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/confundido",
        q: "«Les regalo un libro a mis amigos.»",
        o: [
          "Je leur offre un livre.",
          "Je les offre un livre."
        ],
        a: 0,
        bien: "¡Muy bien! Leur.",
        mal: "Offrir à + personas: leur.",
        seg: [
          {
            es: "Una más. ¿Cómo dices les regalo un libro?"
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
            fr: "Oui, je lui ai répondu.",
            es: "¿Respondiste al profesor? — Sí, le respondí."
          },
          {
            p: 2,
            fr: "Je leur offre un livre.",
            es: "Les regalo un libro a mis amigos."
          },
          {
            p: 3,
            fr: "Je l'aide.",
            es: "Ayudo a mi hermano."
          }
        ],
        seg: [
          {
            es: "Ahora tú. Escucha cada frase y repítela en voz alta."
          },
          {
            fr: "Oui, je lui ai répondu.",
            p: 1
          },
          {
            es: "Otra vez.",
            p: 1
          },
          {
            fr: "Oui, je lui ai répondu.",
            p: 1
          },
          {
            fr: "Je leur offre un livre.",
            p: 2
          },
          {
            es: "Otra vez.",
            p: 2
          },
          {
            fr: "Je leur offre un livre.",
            p: 2
          },
          {
            fr: "Je l'aide.",
            p: 3
          },
          {
            es: "Otra vez.",
            p: 3
          },
          {
            fr: "Je l'aide.",
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
                "Pronombre",
                "Ejemplo"
              ],
              [
                "parler à · téléphoner à",
                "lui, leur",
                "je lui parle"
              ],
              [
                "écrire à · répondre à",
                "lui, leur",
                "je leur écris"
              ],
              [
                "aider · appeler (directos)",
                "le, la, les",
                "je l'aide"
              ]
            ]
          },
          {
            p: 2,
            regla: "lui (una persona) · leur (varias, sin s)"
          }
        ],
        seg: [
          {
            es: "Repasemos.",
            p: 1
          },
          {
            es: "Verbo con à más persona: lui o leur.",
            p: 1
          },
          {
            es: "Y mira siempre el verbo francés. ¡Ahora, a practicar!",
            p: 2
          }
        ]
      }
    ]
  },
  contexto: {
    titulo: "La familia", img: "bg-cafe", yo: "camila",
    escena: "Hugo le pregunta a Camila por su familia en Colombia.",
    pj: PJ,
    lineas: [
      ["hugo", "Tu téléphones à ta mère ?", "¿Llamas a tu mamá?"],
      ["camila", "Oui, je lui téléphone ce soir. Et j'écris souvent à mes grands-parents.", "Sí, la llamo esta noche. Y les escribo seguido a mis abuelos."],
      ["hugo", "Tu leur écris en français ?", "¿Les escribes en francés?"],
      ["camila", "Non ! Et ma sœur ? Je lui ressemble beaucoup. Je lui ai écrit hier.", "¡No! ¿Y mi hermana? Me parezco mucho a ella. Le escribí ayer."]
    ],
    fijate: "Fíjate: je lui téléphone, je leur écris, je lui ai écrit."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "lui y leur",
      idea: "Verbo + à + persona (parler à, téléphoner à, écrire à, répondre à, offrir à, ressembler à). Una persona → lui; varias → leur (sin s). Delante del verbo o del auxiliar. Con COI el participio no concuerda.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Regla"], [
        ["Je parle à Julie → Je lui parle.", "Hablo con Julie → Le hablo.", "lui"],
        ["Je lui téléphone ce soir.", "La llamo esta noche.", "lui"],
        ["Je téléphone à mes parents → Je leur téléphone.", "Llamo a mis padres → Los llamo.", "leur"],
        ["Je leur écris souvent.", "Les escribo a menudo.", "leur"],
        ["Je leur offre un livre.", "Les regalo un libro.", "leur"],
        ["Je lui ai répondu hier.", "Le respondí ayer.", "pc"],
        ["Je lui ai écrit hier.", "Le escribí ayer.", "no concuerda"],
        ["Tu lui ressembles beaucoup !", "¡Te pareces mucho a ella!", "ressembler à"],
        ["Je vais leur écrire ce soir.", "Les voy a escribir esta noche.", "+ infinitivo"],
        ["Je ne leur ai pas répondu.", "No les respondí.", "negación"]
      ]],
      ej: [["Je regarde mon voisin.", "Miro a mi vecino."], ["Je parle à mon voisin.", "Hablo con mi vecino."], ["J'appelle Sophie.", "Llamo a Sophie."], ["Je téléphone à Sophie.", "Llamo a Sophie."], ["J'obéis à mes parents.", "Obedezco a mis padres."], ["J'aide mes amis.", "Ayudo a mis amigos."], ["Je souris à mes amis.", "Les sonrío a mis amigos."], ["J'aide mon frère avec ses devoirs.", "Ayudo a mi hermano con sus tareas."], ["une carte postale", "una postal"], ["envoie", "envío"]] },
    {
      id: "ojo",
      tipo: "ojo",
      titulo: "Errores frecuentes",
      intro: "Tres errores que cometemos casi todos los hispanohablantes. Cázalos uno por uno.",
      errores: [
        {
          sit: "Camila responde:",
          frase: "— Tu parles à Julie ? — Oui, je la parle tous les jours.",
          mal: "la",
          bien: "lui",
          porque: "Pensamos en Julie, femenino, y usamos la.",
          truco: "Parler à: lui, para hombre o mujer."
        },
        {
          sit: "Hugo cuenta:",
          frase: "Mes cousins ? Je leurs envoie une carte postale.",
          mal: "leurs",
          bien: "leur",
          porque: "Leurs con s existe como posesivo y lo mezclamos.",
          truco: "Pronombre: leur, sin s."
        },
        {
          sit: "Camila responde:",
          frase: "Ma mère ? Je la téléphone ce soir.",
          mal: "la",
          bien: "lui",
          porque: "En español «la llamo».",
          truco: "Téléphoner à: lui."
        }
      ]
    }
  ],
  ejemplos: [
    {
      sit: "«¿Respondiste al profesor? — Sí, le respondí.»",
      resp: "Oui, je lui ai répondu.",
      porque: "répondre à → lui.",
      pasos: [
        {
          q: "¿Répondre lleva à?",
          ops: [
            "sí",
            "no"
          ],
          ok: 0
        },
        {
          q: "¿Qué pronombre?",
          ops: [
            "lui",
            "le"
          ],
          ok: 0
        },
        {
          q: "¿Dónde va?",
          ops: [
            "antes de ai",
            "antes de répondu"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«Les regalo un libro a mis amigos.»",
      resp: "Je leur offre un livre.",
      porque: "offrir à + personas → leur.",
      pasos: [
        {
          q: "¿Una persona o varias?",
          ops: [
            "varias",
            "una"
          ],
          ok: 0
        },
        {
          q: "¿Qué pronombre?",
          ops: [
            "leur",
            "leurs"
          ],
          ok: 0
        },
        {
          q: "¿Cómo queda?",
          ops: [
            "je leur offre",
            "je les offre"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«Ayudo a mi hermano.»",
      resp: "Je l'aide.",
      porque: "aider directo → l'.",
      pasos: [
        {
          q: "¿Aider lleva à?",
          ops: [
            "no",
            "sí"
          ],
          ok: 0
        },
        {
          q: "¿Qué pronombre?",
          ops: [
            "le → l'",
            "lui"
          ],
          ok: 0
        },
        {
          q: "¿Cómo queda?",
          ops: [
            "je l'aide",
            "je lui aide"
          ],
          ok: 0
        }
      ]
    }
  ],
  comprueba: [
    { q: "Lui sirve para…", o: ["un hombre o una mujer", "solo un hombre"], a: 0, b: "gr", porque: "Ambos." },
    { q: "Leur (pronombre) lleva s…", o: ["nunca", "en plural"], a: 0, b: "gr", porque: "Invariable." },
    { q: "Aider se usa con…", o: ["COD: je l'aide", "COI: je lui aide"], a: 0, b: "gr", porque: "aider quelqu'un." }
  ],
  practica: [
    { fase: "guiada", c: ["coi-forma"], k: "choice", ask: "— «¿Llamas a tu madre?» — «Sí, la llamo esta noche.»", q: "«Oui, je ___ téléphone ce soir.»", o: ["lui", "la", "leur"], a: 0, pista: "téléphoner à + una.", why: "<b>lui</b>." },
    { fase: "guiada", c: ["coi-forma"], k: "choice", ask: "— «¿Escribes a tus abuelos?» — «Sí, les escribo a menudo.»", q: "«Oui, je ___ écris souvent.»", o: ["leur", "les", "leurs"], a: 0, pista: "Varias, sin s.", why: "<b>leur</b>." },
    { fase: "guiada", c: ["coi-vs"], k: "sort", ask: "¿COD o COI?", q: "Clasifica.", cats: ["COD : le, la, les", "COI : lui, leur"], items: [["Je regarde mon voisin.", 0], ["J'appelle Sophie.", 0], ["J'écoute mes parents.", 0], ["J'aide mes amis.", 0], ["Je parle à mon voisin.", 1], ["Je téléphone à Sophie.", 1], ["J'obéis à mes parents.", 1], ["Je souris à mes amis.", 1]], pista: "¿Hay à?", why: "COD o COI." },
    { fase: "indep", c: ["coi-forma"], k: "fill", ask: "Escribe un pronombre.", q: "— Tu as répondu au professeur ? — Oui, je ___ ai répondu hier.", acc: ["lui"], why: "<b>lui</b>." },
    { fase: "indep", c: ["coi-forma"], k: "spot", ask: "Encuentra el error.", s: "— Tu parles à Julie ? — Oui , je [la] parle tous les jours .", fix: "lui", why: "<b>lui</b>." },
    { fase: "indep", c: ["coi-forma"], k: "spot", ask: "Encuentra el error.", s: "Mes cousins ? Je [leurs] envoie une carte postale .", fix: "leur", why: "<b>leur</b>." },
    { fase: "aplica", c: ["coi-vs"], k: "choice", ask: "— «¿Ayudas a tu hermano?» — «Sí, lo ayudo.»", q: "«Oui, je ___ aide avec ses devoirs.»", o: ["l'", "lui", "leur"], a: 0, why: "aider sin à: <b>l'</b>." },
    { fase: "aplica", c: ["coi-forma"], k: "fill", ask: "Escribe un pronombre.", q: "— Tu offres un cadeau à tes amis ? — Oui, je ___ offre un livre.", acc: ["leur"], why: "<b>leur</b>." },
    { fase: "dominio", c: ["coi-forma"], k: "choice", ask: "«¿Tu hermana? ¡Te pareces mucho a ella!»", q: "«Ta sœur ? Tu ___ ressembles beaucoup !»", o: ["lui", "la", "leur"], a: 0, why: "ressembler à: <b>lui</b>." },
    { fase: "dominio", c: ["coi-forma"], k: "order", ask: "Ordena: «Les voy a escribir esta noche».", tokens: ["Je vais", "leur", "écrire", "ce soir."], why: "<b>Je vais leur écrire ce soir.</b>" },
    { fase: "dominio", c: ["coi-forma", "coi-vs"], k: "listen", say: "Je ne leur ai pas répondu.", acc: ["Je ne leur ai pas répondu."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je ne leur ai pas répondu.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Julie", "Sophie"], previo: ["téléphones", "téléphone", "ta", "mère", "ce", "soir", "écris", "souvent", "mes", "grands-parents", "français", "sœur", "ressemble", "ressembles", "beaucoup", "écrit", "hier", "parle", "parles", "parents", "offre", "offres", "livre", "cadeau", "tes", "amis", "répondu", "professeur", "tous", "jours", "cousins", "aide", "ses", "devoirs", "frère", "écrire", "regarde", "voisin", "appelle", "écoute", "obéis", "souris", "téléphoner", "offrir", "ressembler", "parler", "écrire", "répondre"] }
};

E["a2-y"] = {
  v: 1, arts: false, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Le pronom y",
  objetivo: {
    que: "Vas a reemplazar un lugar o à + cosa por y, y conocer expresiones con y.",
    corto: "J'y vais.",
    podras: ["Decir J'y vais, j'y habite.", "Decir J'y pense (à + cosa).", "Usar On y va !, Vas-y !, Ça y est !"],
    iconos: ["ic2/mundo", "m2d/correr", "ic2/bombilla"],
    previos: ["El COI (lección 10)."],
    capacidad: "Ahora puedes hablar de lugares sin repetirlos."
  },
  requiere: R("pr-mapa", "coi-forma", "pt-uso", "fu-irreg", "pce-verbes"), recupera: ["pr-mapa"],
  conceptos: {
    "y-lieu": { n: "lugar o à + cosa → y", b: "gr" },
    "y-pers": { n: "à + persona: no y (lui o à elle); j'irai sin y", b: "gr" }
  },
  video: {
    titulo: "El pronombre y",
    voz: "es-CO-SalomeNeural",
    escenas: [
      {
        v: "persona",
        cap: "Para qué sirve",
        fondo: "esc/biblioteca",
        img: "pj/hugo-neutro",
        fr: "Tu vas à la bibliothèque ?",
        es: "¿Vas a la biblioteca?",
        nota: "¿Vamos?",
        seg: [
          {
            es: "Hugo le pregunta a Camila por sus planes."
          },
          {
            fr: "Tu vas à la bibliothèque ?",
            p: 1
          },
          {
            es: "Y es una palabra corta que reemplaza un lugar o una cosa con à. Aparece en frases muy usadas, como on y va. Hoy la aprendes.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Lugar",
        titulo: "Y = allá",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Tu vas à la fac ? — Oui, j'y vais.",
            es: "¿Vas a la u? — Sí, voy."
          },
          {
            p: 2,
            fr: "Tu habites en Colombie ? — Oui, j'y habite.",
            es: "¿Vives en Colombia? — Sí, vivo allí."
          },
          {
            p: 3,
            fr: "Je n'y vais pas.",
            es: "No voy."
          }
        ],
        seg: [
          {
            es: "Y reemplaza un lugar. Con aller, no se puede quitar: j'y vais.",
            p: 1
          },
          {
            fr: "Oui, j'y vais.",
            p: 1
          },
          {
            fr: "Oui, j'y habite.",
            p: 2
          },
          {
            es: "En negativo:",
            p: 3
          },
          {
            fr: "Je n'y vais pas.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "À + cosa",
        titulo: "Penser à, répondre à",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Je pense à mon examen → J'y pense.",
            es: "Pienso en mi examen → Pienso en eso."
          },
          {
            p: 2,
            fr: "Je réponds à la question → J'y réponds.",
            es: "Respondo a la pregunta."
          },
          {
            p: 3,
            fr: "Je pense à ma sœur → Je pense à elle.",
            es: "Pienso en mi hermana. (persona: no y)"
          }
        ],
        seg: [
          {
            es: "Y también reemplaza à más una cosa:",
            p: 1
          },
          {
            fr: "J'y pense.",
            p: 1
          },
          {
            fr: "J'y réponds.",
            p: 2
          },
          {
            es: "Pero con una persona, no: je pense à elle.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Pasado y futuro",
        titulo: "J'y suis allé · j'irai",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Nous y sommes allés hier.",
            es: "Fuimos ayer."
          },
          {
            p: 2,
            fr: "Tu iras à Paris ? — Oui, j'irai.",
            es: "¿Irás a París? — Sí, iré."
          },
          {
            p: 3,
            regla: "aller en futuro: j'irai, sin y (no se dice j'y irai)"
          }
        ],
        seg: [
          {
            es: "En pasado, y va delante de être:",
            p: 1
          },
          {
            fr: "Nous y sommes allés hier.",
            p: 1
          },
          {
            es: "Un caso raro: con el futuro de aller, y desaparece.",
            p: 2
          },
          {
            fr: "Oui, j'irai.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Expresiones",
        titulo: "On y va, vas-y, ça y est",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "On y va !",
            es: "¡Vamos!"
          },
          {
            p: 2,
            fr: "Vas-y !",
            es: "¡Dale! ¡Adelante!"
          },
          {
            p: 3,
            fr: "Ça y est !",
            es: "¡Listo! ¡Ya está!"
          }
        ],
        seg: [
          {
            fr: "On y va !",
            p: 1
          },
          {
            fr: "Vas-y !",
            p: 2
          },
          {
            fr: "Ça y est !",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En la vida real",
        titulo: "¿Vamos?",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Tu vas à la bibliothèque ?",
            es: "¿Vas a la biblioteca?"
          },
          {
            p: 2,
            fr: "Oui, j'y vais cet après-midi. Je pense à mon examen, j'y pense tout le temps !",
            es: "Sí, voy esta tarde. Pienso en mi examen, ¡pienso en eso todo el tiempo!"
          },
          {
            p: 3,
            fr: "Et le concert ce soir ? Nous y sommes allés hier, c'était super.",
            es: "¿Y el concierto de esta noche? Fuimos ayer, estuvo genial."
          },
          {
            p: 4,
            fr: "Ça y est, j'ai fini ! On y va !",
            es: "¡Listo, terminé! ¡Vamos!"
          }
        ],
        seg: [
          {
            es: "Escucha cómo suena en una conversación de verdad."
          },
          {
            fr: "Tu vas à la bibliothèque ?",
            p: 1
          },
          {
            fr: "Oui, j'y vais cet après-midi. Je pense à mon examen, j'y pense tout le temps !",
            p: 2
          },
          {
            fr: "Et le concert ce soir ? Nous y sommes allés hier, c'était super.",
            p: 3
          },
          {
            fr: "Ça y est, j'ai fini ! On y va !",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Contraste con el español",
        titulo: "Sí, voy… oui, j'y vais",
        mz: "m2d/alerta",
        items: [
          {
            p: 1,
            regla: "Español: sí, voy · francés: oui, j'y vais (no je vais solo)"
          },
          {
            p: 2,
            regla: "Español: le respondo (a la pregunta) · francés: j'y réponds (cosa: y)"
          },
          {
            p: 3,
            regla: "Español: iré · francés: j'irai (sin y)"
          }
        ],
        seg: [
          {
            es: "En español decimos sí, voy. En francés, aller no va solo: j'y vais.",
            p: 1
          },
          {
            es: "Una pregunta es una cosa: j'y réponds, no je lui réponds.",
            p: 2
          },
          {
            es: "Y en futuro, j'irai, sin y.",
            p: 3
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Oui, je vais.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Oui, j'y vais.",
          es: "aller necesita y."
        },
        seg: [
          {
            es: "Primera trampa: je vais solo.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Oui, j'y vais.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Oui, j'y irai.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Oui, j'irai.",
          es: "Futuro de aller: sin y."
        },
        seg: [
          {
            es: "Segunda trampa: j'y irai.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Oui, j'irai.",
            p: 2
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/pensativo",
        q: "«¿Vas al cine esta noche? — No, no voy.»",
        o: [
          "Non, je n'y vais pas.",
          "Non, je ne vais pas."
        ],
        a: 0,
        bien: "¡Eso es! Je n'y vais pas.",
        mal: "Aller necesita y, también en negativo.",
        seg: [
          {
            es: "Te toca. ¿Vas al cine esta noche? Respondes que no."
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/confundido",
        q: "«¿Piensas en tu hermana? — Sí, pienso en ella.»",
        o: [
          "Oui, je pense à elle.",
          "Oui, j'y pense."
        ],
        a: 0,
        bien: "¡Muy bien! À elle.",
        mal: "Una persona no se reemplaza con y: à elle.",
        seg: [
          {
            es: "Una más. ¿Piensas en tu hermana? Respondes que sí."
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
            fr: "Non, je n'y vais pas.",
            es: "¿Vas al cine esta noche? — No, no voy."
          },
          {
            p: 2,
            fr: "Vas-y vite !",
            es: "¡El concierto empieza! ¡Rápido, dale!"
          },
          {
            p: 3,
            fr: "Oui, je pense à elle.",
            es: "¿Piensas en tu hermana? — Sí, pienso en ella."
          }
        ],
        seg: [
          {
            es: "Ahora tú. Escucha cada frase y repítela en voz alta."
          },
          {
            fr: "Non, je n'y vais pas.",
            p: 1
          },
          {
            es: "Otra vez.",
            p: 1
          },
          {
            fr: "Non, je n'y vais pas.",
            p: 1
          },
          {
            fr: "Vas-y vite !",
            p: 2
          },
          {
            es: "Otra vez.",
            p: 2
          },
          {
            fr: "Vas-y vite !",
            p: 2
          },
          {
            fr: "Oui, je pense à elle.",
            p: 3
          },
          {
            es: "Otra vez.",
            p: 3
          },
          {
            fr: "Oui, je pense à elle.",
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
                "Reemplaza…",
                "Ejemplo"
              ],
              [
                "un lugar",
                "j'y vais · j'y habite"
              ],
              [
                "à + cosa",
                "j'y pense · j'y réponds"
              ],
              [
                "à + persona",
                "no: je pense à elle"
              ],
              [
                "futuro de aller",
                "j'irai (sin y)"
              ]
            ]
          },
          {
            p: 2,
            regla: "on y va · vas-y · ça y est"
          }
        ],
        seg: [
          {
            es: "Repasemos.",
            p: 1
          },
          {
            es: "Y para lugares y para à más una cosa.",
            p: 1
          },
          {
            es: "Nunca para personas. ¡Ahora, a practicar!",
            p: 2
          }
        ]
      }
    ]
  },
  contexto: {
    titulo: "¿Vamos?", img: "bg-universidad", yo: "camila",
    escena: "Camila y Hugo salen de clase.",
    pj: PJ,
    lineas: [
      ["hugo", "Tu vas à la bibliothèque ?", "¿Vas a la biblioteca?"],
      ["camila", "Oui, j'y vais cet après-midi. Je pense à mon examen, j'y pense tout le temps !", "Sí, voy esta tarde. Pienso en mi examen, ¡pienso en eso todo el tiempo!"],
      ["hugo", "Et le concert ce soir ? Nous y sommes allés hier, c'était super.", "¿Y el concierto de esta noche? Fuimos ayer, estuvo genial."],
      ["camila", "Ça y est, j'ai fini ! On y va !", "¡Listo, terminé! ¡Vamos!"]
    ],
    fijate: "Fíjate: j'y vais, j'y pense, nous y sommes allés, on y va."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "El pronombre y",
      idea: "Lugar (à, en, chez, dans…) → y: j'y vais. à + cosa (penser à, répondre à une question) → y: j'y pense. à + persona → no y: lui / leur o à elle. En futuro de aller: j'irai (sin y).",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Uso"], [
        ["Tu vas à la fac ? — Oui, j'y vais.", "¿Vas a la u? — Sí, voy.", "lugar"],
        ["Tu habites en Colombie ? — Oui, j'y habite.", "¿Vives en Colombia? — Sí, vivo allí.", "lugar"],
        ["Je pense à mon examen → J'y pense.", "Pienso en mi examen → Pienso en eso.", "à + cosa"],
        ["Je réponds à la question → J'y réponds.", "Respondo a la pregunta.", "à + cosa"],
        ["Je pense à ma sœur → Je pense à elle.", "Pienso en mi hermana.", "persona: no y"],
        ["Je n'y vais pas.", "No voy.", "negación"],
        ["Nous y sommes allés hier.", "Fuimos ayer.", "pc"],
        ["Tu iras à Paris ? — Oui, j'irai.", "¿Irás a París? — Sí, iré.", "futuro: sin y"],
        ["On y va !", "¡Vamos!", "expresión"],
        ["Vas-y !", "¡Dale! ¡Adelante!", "expresión"],
        ["Ça y est !", "¡Listo! ¡Ya está!", "expresión"],
        ["Je n'y comprends rien.", "No entiendo nada de eso.", "expresión"]
      ]],
      ej: [["à la plage", "a la playa"], ["au Mexique", "a México"], ["chez le médecin", "al médico"], ["à ce problème", "en ese problema"], ["à mon père", "a mi papá"], ["à mes amies", "a mis amigas"], ["à ma professeure", "a mi profesora"], ["tout de suite", "enseguida"], ["depuis toujours", "desde siempre"]] },
    {
      id: "ojo",
      tipo: "ojo",
      titulo: "Errores frecuentes",
      intro: "Tres errores que cometemos casi todos los hispanohablantes. Cázalos uno por uno.",
      errores: [
        {
          sit: "Camila responde:",
          frase: "— Tu réponds à la question ? — Oui, je lui réponds tout de suite.",
          mal: "je lui réponds",
          bien: "j'y réponds",
          porque: "Pensamos en «le respondo».",
          truco: "Una cosa con à: j'y réponds."
        },
        {
          sit: "Hugo responde:",
          frase: "Tu iras à Paris ? — Oui, j'y irai.",
          mal: "j'y irai",
          bien: "j'irai",
          porque: "Aplicamos la regla de j'y vais.",
          truco: "Con el futuro de aller, sin y: j'irai."
        },
        {
          sit: "Camila responde:",
          frase: "Tu vas à la bibliothèque ? — Oui, je vais.",
          mal: "je vais",
          bien: "j'y vais",
          porque: "En español «sí, voy».",
          truco: "Aller no va solo: j'y vais."
        }
      ]
    }
  ],
  ejemplos: [
    {
      sit: "«¿Vas al cine esta noche? — No, no voy.»",
      resp: "Non, je n'y vais pas.",
      porque: "ne + y + vais + pas.",
      pasos: [
        {
          q: "¿Qué reemplazas?",
          ops: [
            "un lugar",
            "una persona"
          ],
          ok: 0
        },
        {
          q: "¿Qué pronombre?",
          ops: [
            "y",
            "en"
          ],
          ok: 0
        },
        {
          q: "¿Cómo queda?",
          ops: [
            "je n'y vais pas",
            "je ne vais y pas"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«¡El concierto empieza! ¡Rápido, dale!»",
      resp: "Vas-y vite !",
      porque: "Expresión: vas-y.",
      pasos: [
        {
          q: "¿Animas a alguien?",
          ops: [
            "sí",
            "no"
          ],
          ok: 0
        },
        {
          q: "¿Qué expresión?",
          ops: [
            "vas-y",
            "ça y est"
          ],
          ok: 0
        },
        {
          q: "¿Rápido?",
          ops: [
            "vite",
            "tôt"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«¿Piensas en tu hermana? — Sí, pienso en ella.»",
      resp: "Oui, je pense à elle.",
      porque: "Persona: à elle.",
      pasos: [
        {
          q: "¿Persona o cosa?",
          ops: [
            "persona",
            "cosa"
          ],
          ok: 0
        },
        {
          q: "¿Se usa y?",
          ops: [
            "no",
            "sí"
          ],
          ok: 0
        },
        {
          q: "¿Cómo queda?",
          ops: [
            "je pense à elle",
            "j'y pense"
          ],
          ok: 0
        }
      ]
    }
  ],
  comprueba: [
    { q: "Y reemplaza…", o: ["un lugar o à + cosa", "à + persona"], a: 0, b: "gr", porque: "Lugar o cosa." },
    { q: "«Ça y est !» significa…", o: ["¡Listo!", "¡Ahí está él!"], a: 0, b: "gr", porque: "Expresión." },
    { q: "Con el futuro de aller (iré) se dice…", o: ["j'irai", "j'y irai"], a: 0, b: "gr", porque: "Sin y." }
  ],
  practica: [
    { fase: "guiada", c: ["y-lieu"], k: "choice", ask: "— «¿Vas a la biblioteca?» — «Sí, voy esta tarde.»", q: "«Oui, j'___ vais cet après-midi.»", o: ["y", "en", "lui"], a: 0, pista: "Lugar.", why: "<b>y</b>." },
    { fase: "guiada", c: ["y-lieu"], k: "choice", ask: "— «¿Piensas en tu examen?» — «Sí, todo el tiempo.»", q: "«Oui, j'___ pense tout le temps.»", o: ["y", "le", "lui"], a: 0, pista: "à + cosa.", why: "<b>y</b>." },
    { fase: "guiada", c: ["y-lieu", "y-pers"], k: "sort", ask: "¿y o lui / leur?", q: "Clasifica.", cats: ["y", "lui / leur"], items: [["à la plage", 0], ["au Mexique", 0], ["à ce problème", 0], ["chez le médecin", 0], ["à mon père", 1], ["à mes amies", 1], ["à ma professeure", 1]], pista: "¿Persona?", why: "y o COI." },
    { fase: "indep", c: ["y-lieu"], k: "fill", ask: "Escribe un pronombre.", q: "— Tu habites en Colombie ? — Oui, j'___ habite depuis toujours.", acc: ["y"], why: "<b>y</b>." },
    { fase: "indep", c: ["y-lieu"], k: "spot", ask: "Encuentra el error.", s: "— Tu réponds à la question ? — Oui , je [lui] réponds tout de suite .", fix: "y", why: "<b>y</b>." },
    { fase: "indep", c: ["y-pers"], k: "choice", ask: "— «¿Piensas en tu hermana?» — «Sí, pienso en ella.»", q: "«Oui, je pense ___ .»", o: ["à elle", "y", "lui"], a: 0, why: "Persona: <b>à elle</b>." },
    { fase: "aplica", c: ["y-lieu"], k: "choice", ask: "— «¿Vas al cine esta noche?» — «No.»", q: "«Non, je ___ vais pas.»", o: ["n'y", "ne", "n'en"], a: 0, why: "<b>n'y vais pas</b>." },
    { fase: "aplica", c: ["y-pers"], k: "choice", ask: "— «¿Irás a París el próximo verano?» — «Sí, iré.»", q: "«Oui, ___ .»", o: ["j'irai", "j'y irai", "j'y vais irai"], a: 0, why: "Futuro de aller: <b>j'irai</b>." },
    { fase: "dominio", c: ["y-lieu"], k: "match", ask: "Une cada expresión.", q: "Francés → español", pairs: [["Il y a", "hay"], ["Ça y est !", "¡Listo!"], ["On y va !", "¡Vamos!"], ["Vas-y !", "¡Dale!"], ["Je n'y comprends rien.", "No entiendo nada de eso."]], why: "Expresiones." },
    { fase: "dominio", c: ["y-lieu"], k: "order", ask: "Ordena: «Fuimos ayer».", tokens: ["Nous", "y sommes", "allés", "hier."], why: "<b>Nous y sommes allés hier.</b>" },
    { fase: "dominio", c: ["y-lieu", "y-pers"], k: "listen", say: "Le concert commence ! Vas-y vite !", acc: ["Le concert commence ! Vas-y vite !", "Le concert commence! Vas-y vite!", "Le concert commence. Vas-y vite !"], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Le concert commence ! Vas-y vite !</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paris", "Colombie", "Mexique"], previo: ["bibliothèque", "cet", "après-midi", "pense", "examen", "tout", "temps", "concert", "ce", "soir", "hier", "c'était", "super", "fini", "fac", "habite", "réponds", "question", "sœur", "elle", "iras", "l'été", "prochain", "vite", "commence", "comprends", "rien", "vais", "cinéma", "toujours", "suite", "plage", "médecin", "problème", "père", "amies", "professeure", "irai"] }
};

E["a2-en"] = {
  v: 1, arts: false, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Le pronom en",
  objetivo: {
    que: "Vas a reemplazar du, de la, des, una cantidad o de + cosa por en.",
    corto: "J'en ai deux.",
    podras: ["Decir J'en veux, je n'en ai pas.", "Repetir la cantidad: j'en ai deux.", "No usar en con le, la, les, mon, ma…"],
    iconos: ["ic2/cofre", "ic2/bombilla", "ic2/moneda"],
    previos: ["Los partitivos (lección 6) y el pronombre y (lección 11)."],
    capacidad: "Ahora puedes hablar de cantidades sin repetir la cosa."
  },
  requiere: R("pr-mapa", "pt3-choix", "cod-forma", "ae-besoin", "av2-venir"), recupera: ["pt3-choix"],
  conceptos: {
    "en-part": { n: "du, de la, des, de + cosa → en", b: "gr" },
    "en-qte": { n: "cantidad: j'en ai deux; no con le / la / les", b: "gr" }
  },
  video: {
    titulo: "El pronombre en",
    voz: "es-CO-SalomeNeural",
    escenas: [
      {
        v: "persona",
        cap: "Para qué sirve",
        fondo: "esc/cafe-lyon",
        img: "pj/hugo-neutro",
        fr: "Tu veux du café ?",
        es: "¿Quieres café?",
        nota: "El café",
        seg: [
          {
            es: "Hugo le ofrece café a Camila y charlan."
          },
          {
            fr: "Tu veux du café ?",
            p: 1
          },
          {
            es: "En reemplaza du, de la, des y las cantidades. En español no lo decimos, por eso se olvida. Hoy aprendes cuándo es obligatorio.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Du, des",
        titulo: "Du, de la, des → en",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Tu veux du café ? — Oui, j'en veux.",
            es: "¿Quieres café? — Sí, quiero."
          },
          {
            p: 2,
            fr: "Tu manges des fruits ? — Oui, j'en mange tous les jours.",
            es: "¿Comes frutas? — Sí, todos los días."
          },
          {
            p: 3,
            fr: "Non, je n'en ai pas.",
            es: "No, no tengo."
          }
        ],
        seg: [
          {
            es: "Du, de la y des se reemplazan con en.",
            p: 1
          },
          {
            fr: "Oui, j'en veux.",
            p: 1
          },
          {
            fr: "Oui, j'en mange tous les jours.",
            p: 2
          },
          {
            es: "En negativo:",
            p: 3
          },
          {
            fr: "Non, je n'en ai pas.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Cantidades",
        titulo: "En + la cantidad",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Des frères ? J'en ai deux.",
            es: "¿Hermanos? Tengo dos."
          },
          {
            p: 2,
            fr: "Tu as combien de cours ? — J'en ai cinq.",
            es: "¿Cuántas clases tienes? — Tengo cinco."
          },
          {
            p: 3,
            fr: "J'en achète un kilo.",
            es: "Compro un kilo."
          },
          {
            p: 4,
            regla: "con una cantidad, en es obligatorio"
          }
        ],
        seg: [
          {
            es: "Con un número o una cantidad, en es obligatorio:",
            p: 1
          },
          {
            fr: "Des frères ? J'en ai deux.",
            p: 1
          },
          {
            fr: "J'en ai cinq.",
            p: 2
          },
          {
            fr: "J'en achète un kilo.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "De + cosa",
        titulo: "Besoin de, venir de",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Tu as besoin de ton dictionnaire ? — Oui, j'en ai besoin.",
            es: "¿Necesitas tu diccionario? — Sí, lo necesito."
          },
          {
            p: 2,
            fr: "Tu viens de la bibliothèque ? — Oui, j'en viens.",
            es: "¿Vienes de la biblioteca? — Sí, vengo de allí."
          },
          {
            p: 3,
            fr: "Il reste du lait ? — Oui, il en reste un peu.",
            es: "¿Queda leche? — Sí, queda un poco."
          }
        ],
        seg: [
          {
            es: "También de más una cosa o un lugar:",
            p: 1
          },
          {
            fr: "Oui, j'en ai besoin.",
            p: 1
          },
          {
            fr: "Oui, j'en viens.",
            p: 2
          },
          {
            fr: "Oui, il en reste un peu.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En o le",
        titulo: "¿En o le?",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Tu veux le gâteau ? — Oui, je le veux !",
            es: "¿Quieres el pastel? — ¡Sí, lo quiero!"
          },
          {
            p: 2,
            regla: "du, des, cantidad → en · le, la, les, mon, ma… → le, la, les"
          }
        ],
        seg: [
          {
            es: "Con le, la, les o un posesivo, no es en: es le.",
            p: 1
          },
          {
            fr: "Tu veux le gâteau ?",
            p: 1
          },
          {
            fr: "Oui, je le veux !",
            p: 1
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En la vida real",
        titulo: "El café",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Tu veux du café ?",
            es: "¿Quieres café?"
          },
          {
            p: 2,
            fr: "Oui, j'en veux bien. Tu as des frères, toi ?",
            es: "Sí, con gusto. ¿Tú tienes hermanos?"
          },
          {
            p: 3,
            fr: "Oui, j'en ai deux. Tu as une voiture ? — Non, je n'en ai pas.",
            es: "Sí, tengo dos. ¿Tienes carro? — No, no tengo."
          },
          {
            p: 4,
            fr: "Tu as besoin de ton dictionnaire ? — Oui, j'en ai besoin !",
            es: "¿Necesitas tu diccionario? — ¡Sí, lo necesito!"
          }
        ],
        seg: [
          {
            es: "Escucha cómo suena en una conversación de verdad."
          },
          {
            fr: "Tu veux du café ?",
            p: 1
          },
          {
            fr: "Oui, j'en veux bien. Tu as des frères, toi ?",
            p: 2
          },
          {
            fr: "Oui, j'en ai deux. Tu as une voiture ? — Non, je n'en ai pas.",
            p: 3
          },
          {
            fr: "Tu as besoin de ton dictionnaire ? — Oui, j'en ai besoin !",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Contraste con el español",
        titulo: "Tengo dos… j'en ai deux",
        mz: "m2d/alerta",
        items: [
          {
            p: 1,
            regla: "Español: tengo dos · francés: j'en ai deux (en obligatorio)"
          },
          {
            p: 2,
            regla: "Español: lo necesito · francés: j'en ai besoin (besoin de)"
          },
          {
            p: 3,
            regla: "Español: lo quiero (el pastel) · francés: je le veux"
          }
        ],
        seg: [
          {
            es: "En español decimos tengo dos, sin nada. En francés no: j'en ai deux.",
            p: 1
          },
          {
            es: "Lo necesito, con besoin de, es j'en ai besoin.",
            p: 2
          },
          {
            es: "Pero con el pastel, que lleva le, je le veux.",
            p: 3
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Oui, j'ai deux.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Oui, j'en ai deux.",
          es: "La cantidad sola necesita en."
        },
        seg: [
          {
            es: "Primera trampa: olvidar en.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Oui, j'en ai deux.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "J'en veux, le gâteau.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Je le veux, le gâteau.",
          es: "Con le: COD."
        },
        seg: [
          {
            es: "Segunda trampa: en con le gâteau.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Je le veux.",
            p: 2
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/pensativo",
        q: "«¿Tienes hermanos? — Sí, tengo dos.»",
        o: [
          "Oui, j'en ai deux.",
          "Oui, j'ai deux."
        ],
        a: 0,
        bien: "¡Eso es! J'en ai deux.",
        mal: "Con una cantidad, en es obligatorio.",
        seg: [
          {
            es: "Te toca. ¿Tienes hermanos? Respondes que sí, dos."
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/confundido",
        q: "«¿Quieres el pastel de chocolate? — Sí, lo quiero.»",
        o: [
          "Oui, je le veux !",
          "Oui, j'en veux !"
        ],
        a: 0,
        bien: "¡Muy bien! Je le veux.",
        mal: "Le gâteau lleva le: je le veux.",
        seg: [
          {
            es: "Una más. ¿Quieres el pastel de chocolate? Respondes que sí."
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
            fr: "Oui, j'en ai deux.",
            es: "¿Tienes hermanos? — Sí, tengo dos."
          },
          {
            p: 2,
            fr: "Oui, j'en mange tous les jours.",
            es: "¿Comes frutas? — Sí, todos los días."
          },
          {
            p: 3,
            fr: "Oui, je le veux !",
            es: "¿Quieres el pastel de chocolate? — Sí, lo quiero."
          }
        ],
        seg: [
          {
            es: "Ahora tú. Escucha cada frase y repítela en voz alta."
          },
          {
            fr: "Oui, j'en ai deux.",
            p: 1
          },
          {
            es: "Otra vez.",
            p: 1
          },
          {
            fr: "Oui, j'en ai deux.",
            p: 1
          },
          {
            fr: "Oui, j'en mange tous les jours.",
            p: 2
          },
          {
            es: "Otra vez.",
            p: 2
          },
          {
            fr: "Oui, j'en mange tous les jours.",
            p: 2
          },
          {
            fr: "Oui, je le veux !",
            p: 3
          },
          {
            es: "Otra vez.",
            p: 3
          },
          {
            fr: "Oui, je le veux !",
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
                "Reemplaza…",
                "Ejemplo"
              ],
              [
                "du, de la, des",
                "j'en veux · j'en mange"
              ],
              [
                "una cantidad",
                "j'en ai deux · j'en achète un kilo"
              ],
              [
                "de + cosa o lugar",
                "j'en ai besoin · j'en viens"
              ],
              [
                "le, la, les",
                "no: je le veux"
              ]
            ]
          },
          {
            p: 2,
            regla: "Con cantidad, en obligatorio"
          }
        ],
        seg: [
          {
            es: "Repasemos.",
            p: 1
          },
          {
            es: "En para du, des y cantidades.",
            p: 1
          },
          {
            es: "Y le para lo que lleva le. ¡Ahora, a practicar!",
            p: 2
          }
        ]
      }
    ]
  },
  contexto: {
    titulo: "El café", img: "bg-cafe", yo: "camila",
    escena: "Camila visita a Hugo.",
    pj: PJ,
    lineas: [
      ["hugo", "Tu veux du café ?", "¿Quieres café?"],
      ["camila", "Oui, j'en veux bien. Tu as des frères, toi ?", "Sí, con gusto. ¿Tú tienes hermanos?"],
      ["hugo", "Oui, j'en ai deux. Tu as une voiture ? — Non, je n'en ai pas.", "Sí, tengo dos. ¿Tienes carro? — No, no tengo."],
      ["camila", "Tu as besoin de ton dictionnaire ? — Oui, j'en ai besoin !", "¿Necesitas tu diccionario? — ¡Sí, lo necesito!"]
    ],
    fijate: "Fíjate: j'en veux, j'en ai deux, je n'en ai pas, j'en ai besoin."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "El pronombre en",
      idea: "du, de la, des → en: j'en mange. Cantidad → en + la cantidad: j'en ai deux. de + cosa o lugar (besoin de, venir de) → en. Con le, la, les, mon, ma… → COD: je le veux.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Uso"], [
        ["Tu veux du café ? — Oui, j'en veux.", "¿Quieres café? — Sí, quiero.", "partitivo"],
        ["Tu manges des fruits ? — Oui, j'en mange tous les jours.", "¿Comes frutas? — Sí, todos los días.", "partitivo"],
        ["Des frères ? J'en ai deux.", "¿Hermanos? Tengo dos.", "cantidad"],
        ["Tu as combien de cours ? — J'en ai cinq.", "¿Cuántas clases tienes? — Tengo cinco.", "cantidad"],
        ["J'en achète un kilo.", "Compro un kilo.", "cantidad"],
        ["Non, je n'en ai pas.", "No, no tengo.", "negación"],
        ["Tu as besoin de ton dictionnaire ? — Oui, j'en ai besoin.", "¿Necesitas tu diccionario? — Sí, lo necesito.", "de + cosa"],
        ["Tu viens de la bibliothèque ? — Oui, j'en viens.", "¿Vienes de la biblioteca? — Sí, vengo de allí.", "de + lugar"],
        ["Il reste du lait ? — Oui, il en reste un peu.", "¿Queda leche? — Sí, queda un poco.", "cantidad"],
        ["Tu veux le gâteau ? — Oui, je le veux !", "¿Quieres el pastel? — ¡Sí, lo quiero!", "le: no en"]
      ]],
      ej: [["du pain", "pan"], ["le pain", "el pan"], ["des photos", "fotos"], ["ces photos", "esas fotos"], ["beaucoup d'amis", "muchos amigos"], ["la pizza", "la pizza"], ["de la musique", "música"], ["mes livres", "mis libros"], ["Tu te souviens de ce voyage ? — Oui, je m'en souviens.", "¿Te acuerdas de ese viaje? — Sí, me acuerdo."], ["Tu prends de l'eau ? — Non, je n'en prends pas.", "¿Tomas agua? — No, no tomo."], ["Nous parlons d'elle.", "Hablamos de ella."]] },
    {
      id: "ojo",
      tipo: "ojo",
      titulo: "Errores frecuentes",
      intro: "Tres errores que cometemos casi todos los hispanohablantes. Cázalos uno por uno.",
      errores: [
        {
          sit: "Camila cuenta:",
          frase: "Des livres ? Je les ai lu trois.",
          mal: "Je les ai",
          bien: "J'en ai",
          porque: "Pensamos en «los libros».",
          truco: "Con una cantidad: j'en ai lu trois."
        },
        {
          sit: "Hugo responde:",
          frase: "Tu as des frères ? — Oui, j'ai deux.",
          mal: "j'ai deux",
          bien: "j'en ai deux",
          porque: "En español «tengo dos».",
          truco: "La cantidad sola necesita en: j'en ai deux."
        },
        {
          sit: "Camila responde:",
          frase: "Le gâteau ? Oui, j'en veux !",
          mal: "j'en veux",
          bien: "je le veux",
          porque: "Usamos en con todo lo que se come.",
          truco: "Le gâteau lleva le: je le veux."
        }
      ]
    }
  ],
  ejemplos: [
    {
      sit: "«¿Tienes hermanos? — Sí, tengo dos.»",
      resp: "Oui, j'en ai deux.",
      porque: "cantidad → en.",
      pasos: [
        {
          q: "¿Hay cantidad?",
          ops: [
            "sí: deux",
            "no"
          ],
          ok: 0
        },
        {
          q: "¿Qué pronombre?",
          ops: [
            "en",
            "les"
          ],
          ok: 0
        },
        {
          q: "¿Cómo queda?",
          ops: [
            "j'en ai deux",
            "j'ai deux"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«¿Comes frutas? — Sí, todos los días.»",
      resp: "Oui, j'en mange tous les jours.",
      porque: "des fruits → en.",
      pasos: [
        {
          q: "¿Qué reemplazas?",
          ops: [
            "des fruits",
            "les fruits"
          ],
          ok: 0
        },
        {
          q: "¿Qué pronombre?",
          ops: [
            "en",
            "les"
          ],
          ok: 0
        },
        {
          q: "¿Dónde va?",
          ops: [
            "antes del verbo",
            "después del verbo"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "«¿Quieres el pastel de chocolate? — Sí, lo quiero.»",
      resp: "Oui, je le veux !",
      porque: "le gâteau → le.",
      pasos: [
        {
          q: "¿Lleva le o du?",
          ops: [
            "le",
            "du"
          ],
          ok: 0
        },
        {
          q: "¿Qué pronombre?",
          ops: [
            "le",
            "en"
          ],
          ok: 0
        },
        {
          q: "¿Cómo queda?",
          ops: [
            "je le veux",
            "j'en veux"
          ],
          ok: 0
        }
      ]
    }
  ],
  comprueba: [
    { q: "Con una cantidad, después de en…", o: ["se repite la cantidad", "no se dice nada"], a: 0, b: "gr", porque: "J'en ai deux." },
    { q: "Con le gâteau se usa…", o: ["le", "en"], a: 0, b: "gr", porque: "Artículo definido." },
    { q: "Con avoir besoin de se usa…", o: ["en", "y"], a: 0, b: "gr", porque: "de + cosa." }
  ],
  practica: [
    { fase: "guiada", c: ["en-part"], k: "choice", ask: "— «¿Quieres café?» — «Sí, con gusto.»", q: "«Oui, j'___ veux bien.»", o: ["en", "y", "le"], a: 0, pista: "du café.", why: "<b>en</b>." },
    { fase: "guiada", c: ["en-qte"], k: "choice", ask: "— «¿Tienes hermanos?» — «Sí, tengo dos.»", q: "«Oui, ___ deux.»", o: ["j'en ai", "j'ai", "je les ai"], a: 0, pista: "Cantidad.", why: "<b>j'en ai</b>." },
    { fase: "guiada", c: ["en-part", "en-qte"], k: "sort", ask: "¿en o le / la / les?", q: "Clasifica.", cats: ["en", "le / la / les"], items: [["du pain", 0], ["des photos", 0], ["beaucoup d'amis", 0], ["de la musique", 0], ["le pain", 1], ["ces photos", 1], ["la pizza", 1], ["mes livres", 1]], pista: "¿du, des, cantidad?", why: "en o COD." },
    { fase: "indep", c: ["en-part"], k: "fill", ask: "Escribe un pronombre.", q: "— Tu as besoin de ton dictionnaire ? — Oui, j'___ ai besoin.", acc: ["en"], why: "<b>en</b>." },
    { fase: "indep", c: ["en-qte"], k: "spot", ask: "Encuentra el error.", s: "— Combien de livres tu as lus ? — J' [les] ai lu trois .", fix: "en", why: "<b>en</b>." },
    { fase: "indep", c: ["en-qte"], k: "choice", ask: "— «¿Tienes un carro?» — «No.»", q: "«Non, ___ .»", o: ["je n'en ai pas", "je n'ai pas", "je ne l'ai pas"], a: 0, why: "<b>je n'en ai pas</b>." },
    { fase: "aplica", c: ["en-qte"], k: "choice", ask: "— «¿Quieres el pastel de chocolate?» — «¡Sí!»", q: "«Oui, je ___ veux !»", o: ["le", "en", "y"], a: 0, why: "le gâteau: <b>le</b>." },
    { fase: "aplica", c: ["en-part"], k: "fill", ask: "Escribe un pronombre (venir de).", q: "— Tu viens de la bibliothèque ? — Oui, j'___ viens.", acc: ["en"], why: "<b>en</b>." },
    { fase: "dominio", c: ["en-part"], k: "match", ask: "Une cada pregunta con su respuesta.", q: "Pregunta → respuesta", pairs: [["Tu manges des fruits ?", "Oui, j'en mange tous les jours."], ["Tu as combien de cours ?", "J'en ai cinq."], ["Tu prends de l'eau ?", "Non, je n'en prends pas."], ["Il reste du lait ?", "Oui, il en reste un peu."]], why: "en." },
    { fase: "dominio", c: ["en-qte"], k: "order", ask: "Ordena: «Compro un kilo».", tokens: ["J'en", "achète", "un kilo."], why: "<b>J'en achète un kilo.</b>" },
    { fase: "dominio", c: ["en-part", "en-qte"], k: "listen", say: "Des frères ? J'en ai deux.", acc: ["Des frères ? J'en ai deux.", "Des frères? J'en ai deux.", "Des frères ? J'en ai 2."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Des frères ? J'en ai deux.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["veux", "café", "bien", "frères", "toi", "deux", "voiture", "besoin", "ton", "dictionnaire", "manges", "mange", "fruits", "tous", "jours", "combien", "cours", "cinq", "achète", "kilo", "viens", "bibliothèque", "reste", "lait", "peu", "gâteau", "chocolat", "pain", "photos", "ces", "beaucoup", "d'amis", "pizza", "musique", "mes", "livres", "lus", "lu", "trois", "souviens", "voyage", "prends", "eau", "parlons", "d'elle", "votre", "professeure"] }
};

E["a2-pronoms-choisir"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "COD, COI, y ou en ? Choisir le bon pronom",
  objetivo: {
    que: "Vas a elegir el pronombre correcto en cualquier frase, siguiendo el árbol de decisión.",
    corto: "El árbol de los pronombres.",
    podras: ["Aplicar el árbol: nada, à + persona, lugar o à + cosa, de o cantidad.", "Usarlo en presente y passé composé.", "No dejarte engañar por el español."],
    iconos: ["ic2/engranaje", "m2d/pensativo", "ic2/trofeo"],
    previos: ["COD, COI, y y en (lecciones 9 a 12)."],
    capacidad: "Ahora dominas los cuatro pronombres complemento."
  },
  requiere: R("pr-mapa", "pr-place", "cod-forma", "cod-place", "coi-forma", "coi-vs", "y-lieu", "y-pers", "en-part", "en-qte"), recupera: ["cod-forma", "coi-forma", "y-lieu", "en-part"],
  conceptos: {
    "ch-arbre": { n: "el árbol: nada → le; à + persona → lui; lugar → y; de → en", b: "gr" },
    "ch-pc": { n: "los pronombres en passé composé y en negación", b: "gr" }
  },
  video: {
    titulo: "Elegir el pronombre", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/engranaje", grande: "le? lui? y? en?", seg: [
        { es: "Hola. Mira el verbo francés, no el español." } ] },
      { v: "frase", filas: [
          { nota: "connaître (sin à)", p: 1, partes: [["Je le connais.", "-", 1]] },
          { nota: "parler à", p: 2, partes: [["Je lui parle.", "-", 2]] },
          { nota: "aller à", p: 3, partes: [["J'y vais.", "-", 3]] },
          { nota: "boire de l'eau", p: 4, partes: [["J'en bois.", "-", 4]] } ], seg: [
        { es: "Lo conozco,", p: 1 }, { es: "le hablo,", p: 2 }, { es: "voy,", p: 3 }, { es: "tomo.", p: 4 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«¿El director? Lo conozco bien.»", o: ["Je le connais bien.", "Je lui connais bien."], a: 0,
        bien: "¡Sí! Connaître sin à.", mal: "Connaître no lleva à: le.",
        seg: [ { es: "Pausa. Conocer." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Je le connais.", "Je lui parle.", "J'y vais.", "J'en bois."], seg: [
        { es: "Cuatro preguntas, cuatro respuestas.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El compañero de piso", img: "bg-cafe", yo: "camila",
    escena: "Hugo le pregunta a Camila por su compañero de piso.",
    pj: PJ,
    lineas: [
      ["hugo", "Tu parles à ton colocataire ?", "¿Hablas con tu compañero de piso?"],
      ["camila", "Oui, je lui parle tous les soirs. Il fait du sport, il en fait trois fois par semaine.", "Sí, le hablo todas las noches. Hace deporte, tres veces por semana."],
      ["hugo", "Il va à la fac en bus ? — Oui, il y va en bus.", "¿Va a la u en bus? — Sí, va en bus."],
      ["camila", "Et il lit le journal ? — Oui, il le lit le matin.", "¿Y lee el periódico? — Sí, lo lee por la mañana."]
    ],
    fijate: "Fíjate: je lui parle, il en fait, il y va, il le lit."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "El árbol",
      idea: "1. ¿Sin preposición? → le, la, les. 2. ¿à + persona? → lui, leur. 3. ¿Lugar o à + cosa? → y. 4. ¿du, de la, des, cantidad o de + cosa? → en.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Pronombre"], [
        ["Je regarde le film → Je le regarde.", "Veo la película → La veo.", "le"],
        ["Il lit le journal ? — Oui, il le lit.", "¿Lee el periódico? — Sí, lo lee.", "le"],
        ["Je parle à Léa → Je lui parle.", "Hablo con Léa → Le hablo.", "lui"],
        ["Tu as parlé à tes profs ? — Oui, je leur ai parlé.", "¿Hablaste con tus profes? — Sí, les hablé.", "leur"],
        ["Tu vas à la fac en bus ? — Oui, j'y vais en bus.", "¿Vas a la u en bus? — Sí.", "y"],
        ["Je bois de l'eau → J'en bois.", "Tomo agua → Tomo.", "en"],
        ["Tu fais du sport ? — Oui, j'en fais trois fois par semaine.", "¿Haces deporte? — Sí, tres veces por semana.", "en"],
        ["Tu as mangé des crêpes ? — Oui, j'en ai mangé deux.", "¿Comiste crepes? — Sí, dos.", "en + pc"],
        ["Tu as vu Léa et Marie ? — Oui, je les ai vues au café.", "¿Viste a Léa y Marie? — Sí, las vi en el café.", "les + pc"],
        ["Je ne leur ai pas répondu.", "No les respondí.", "negación"],
        ["C'est un secret : ne lui dis rien !", "Es un secreto: ¡no le digas nada!", "imperativo negativo"]
      ]],
      ej: [["regarder la télé", "ver la tele"], ["parler à ses amis", "hablar con sus amigos"], ["aller au cinéma", "ir al cine"], ["boire de l'eau", "tomar agua"], ["penser au futur", "pensar en el futuro"], ["écrire à sa mère", "escribirle a su mamá"], ["acheter trois livres", "comprar tres libros"], ["inviter ses voisins", "invitar a sus vecinos"], ["des stylos", "bolígrafos"], ["le directeur", "el director"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je lui connais bien.", "Je le connais bien.", "connaître sin à."], ["J'les ai trois (stylos).", "J'en ai trois.", "Cantidad: en."], ["Je le parle.", "Je lui parle.", "parler à."], ["Je lui vais.", "J'y vais.", "Lugar: y."]] }
  ],
  ejemplos: [
    { sit: "«¿Hiciste deporte? — Sí, tres veces.»", resp: "Oui, j'en ai fait trois fois.", pasos: ["du sport → en."], porque: "Partitivo." },
    { sit: "«¿Hablaste con tus profes? — Sí.»", resp: "Oui, je leur ai parlé.", pasos: ["parler à + varios → leur."], porque: "COI." },
    { sit: "«¡No le digas nada a tu hermana!»", resp: "Ne lui dis rien !", pasos: ["dire à → lui."], porque: "COI." }
  ],
  comprueba: [
    { q: "Connaître quelqu'un usa…", o: ["le / la", "lui"], a: 0, b: "gr", porque: "Sin à." },
    { q: "Penser au futur usa…", o: ["y", "lui"], a: 0, b: "gr", porque: "à + cosa." },
    { q: "Acheter trois livres usa…", o: ["en", "les"], a: 0, b: "gr", porque: "Cantidad." }
  ],
  practica: [
    { fase: "guiada", c: ["ch-arbre"], k: "choice", ask: "— «¿Hablas con tu compañero de piso?» — «Sí, todas las noches.»", q: "«Oui, je ___ parle tous les soirs.»", o: ["lui", "le", "y"], a: 0, pista: "parler à.", why: "<b>lui</b>." },
    { fase: "guiada", c: ["ch-arbre"], k: "choice", ask: "— «¿Haces deporte?» — «Sí, tres veces por semana.»", q: "«Oui, j'___ fais trois fois par semaine.»", o: ["en", "le", "y"], a: 0, pista: "du sport.", why: "<b>en</b>." },
    { fase: "guiada", c: ["ch-arbre"], k: "sort", ask: "¿Qué pronombre?", q: "Clasifica.", cats: ["le / la / les", "lui / leur", "y", "en"], items: [["regarder la télé", 0], ["inviter ses voisins", 0], ["parler à ses amis", 1], ["écrire à sa mère", 1], ["aller au cinéma", 2], ["penser au futur", 2], ["boire de l'eau", 3], ["acheter trois livres", 3]], pista: "El árbol.", why: "Cuatro pronombres." },
    { fase: "indep", c: ["ch-arbre"], k: "choice", ask: "— «¿Vas a la u en bus?» — «Sí.»", q: "«Oui, j'___ vais en bus.»", o: ["y", "en", "la"], a: 0, why: "<b>y</b>." },
    { fase: "indep", c: ["ch-arbre"], k: "choice", ask: "— «¿Lee el periódico?» — «Sí, por la mañana.»", q: "«Oui, il ___ lit le matin.»", o: ["le", "lui", "en"], a: 0, why: "<b>le</b>." },
    { fase: "indep", c: ["ch-arbre"], k: "spot", ask: "Encuentra el error.", s: "— Tu connais le directeur ? — Oui , je [lui] connais bien .", fix: "le", why: "<b>le</b>." },
    { fase: "aplica", c: ["ch-pc"], k: "fill", ask: "Escribe un pronombre.", q: "— Tu as parlé à tes profs ? — Oui, je ___ ai parlé.", acc: ["leur"], why: "<b>leur</b>." },
    { fase: "aplica", c: ["ch-pc"], k: "fill", ask: "Escribe un pronombre.", q: "— Tu as mangé des crêpes ? — Oui, j'___ ai mangé deux.", acc: ["en"], why: "<b>en</b>." },
    { fase: "dominio", c: ["ch-pc"], k: "fill", ask: "Escribe un pronombre.", q: "— Tu as vu Léa et Marie ? — Oui, je ___ ai vues au café.", acc: ["les"], why: "<b>les</b>." },
    { fase: "dominio", c: ["ch-arbre"], k: "spot", ask: "Encuentra el error.", s: "— Tu as des stylos ? — Oui , j' [les] ai trois .", fix: "en", why: "<b>en</b>." },
    { fase: "dominio", c: ["ch-arbre", "ch-pc"], k: "listen", say: "Je ne leur ai pas répondu.", acc: ["Je ne leur ai pas répondu."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je ne leur ai pas répondu.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Léa", "Marie"], previo: ["parles", "parle", "ton", "colocataire", "tous", "soirs", "fait", "fais", "sport", "trois", "fois", "par", "semaine", "va", "vais", "fac", "bus", "lit", "journal", "matin", "regarde", "film", "parlé", "tes", "profs", "bois", "eau", "mangé", "crêpes", "deux", "vu", "vues", "café", "répondu", "secret", "dis", "rien", "connais", "directeur", "stylos", "télé", "ses", "amis", "sa", "mère", "cinéma", "futur", "livres", "voisins", "inviter", "acheter", "boire", "aller", "penser", "écrire", "parler", "regarder"] }
};

/* ================================ A2·5 y A2·6 ================================ */

E["a2-pc-ou-imparfait"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Passé composé ou imparfait ? Raconter un souvenir",
  objetivo: {
    que: "Vas a contar un recuerdo mezclando el decorado (imparfait) con los hechos (passé composé).",
    corto: "Llovía cuando sonó el teléfono.",
    podras: ["Usar imparfait para describir y para costumbres.", "Usar passé composé para hechos puntuales.", "Reconocer las palabras pista: d'habitude, soudain, un jour…"],
    iconos: ["ic2/reloj-arena", "ic2/libros", "m2d/pensativo"],
    previos: ["El passé composé y el imparfait (lecciones 1 a 3)."],
    capacidad: "Ahora puedes contar un recuerdo como un francés."
  },
  requiere: R("pca-forma", "pca-irreg", "pce-verbes", "pce-accord", "imp-forma", "imp-uso"), recupera: ["imp-uso"],
  conceptos: {
    "pi-decor": { n: "imparfait: decorado, costumbre, acción en curso", b: "gr" },
    "pi-fait": { n: "passé composé: hecho puntual o serie de hechos", b: "gr" }
  },
  video: {
    titulo: "Contar un recuerdo", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/libros", grande: "Il pleuvait…", seg: [
        { es: "Hola. Un recuerdo tiene decorado y tiene hechos." } ] },
      { v: "dos",
        a: { tag: "decorado", fr: "Il pleuvait et je lisais.", es: "imparfait" },
        b: { tag: "hecho", fr: "Soudain, le téléphone a sonné.", es: "passé composé" },
        seg: [ { es: "El decorado:", p: 1 }, { fr: "Il pleuvait et je lisais.", p: 1 }, { es: "Lo que pasó:", p: 2 }, { fr: "Soudain, le téléphone a sonné.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Cuando llegué a Bogotá, hacía mucho frío.»", o: ["Quand je suis arrivé à Bogotá, il faisait très froid.", "Quand je suis arrivé à Bogotá, il a fait très froid."], a: 0,
        bien: "¡Sí! El clima es decorado.", mal: "El tiempo que hacía es decorado: imparfait.",
        seg: [ { es: "Pausa. Hacía frío." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["d'habitude", "autrefois", "tous les étés", "soudain", "tout à coup", "un jour", "une fois"], seg: [
        { es: "Truco: imperfecto español, imparfait; pretérito, passé composé.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Villa de Leyva", img: "bg-cafe", yo: "camila",
    escena: "Camila cuenta un viaje a Villa de Leyva.",
    pj: PJ,
    lineas: [
      ["camila", "Samedi dernier, il faisait beau, alors nous sommes allés à Villa de Leyva.", "El sábado pasado hacía buen tiempo, así que fuimos a Villa de Leyva."],
      ["camila", "Ce jour-là, nous avons pris le bus. J'étais fatiguée, mais contente.", "Ese día tomamos el bus. Estaba cansada, pero contenta."],
      ["hugo", "Et le soir ?", "¿Y por la noche?"],
      ["camila", "J'étais en train de cuisiner quand mes amis sont arrivés. Puis il a commencé à pleuvoir !", "Estaba cocinando cuando llegaron mis amigos. ¡Luego empezó a llover!"]
    ],
    fijate: "Fíjate: il faisait, j'étais (decorado) / nous sommes allés, nous avons pris, sont arrivés (hechos)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Decorado y hechos",
      idea: "Imparfait: tiempo, lugar, sentimientos, costumbres, acción en curso. Passé composé: hecho puntual o serie de hechos. Acción en curso interrumpida: la larga en imparfait, la que interrumpe en passé composé.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Tiempo"], [
        ["Il pleuvait et je lisais.", "Llovía y yo leía.", "imparfait"],
        ["Il faisait beau.", "Hacía sol.", "imparfait"],
        ["J'étais fatiguée.", "Estaba cansada.", "imparfait"],
        ["Je vivais à Pamplona.", "Vivía en Pamplona.", "imparfait"],
        ["Tous les dimanches, ma grand-mère préparait des arepas.", "Todos los domingos mi abuela preparaba arepas.", "costumbre"],
        ["Soudain, le téléphone a sonné.", "De repente, sonó el teléfono.", "passé composé"],
        ["J'ai vécu deux ans à Pamplona.", "Viví dos años en Pamplona.", "passé composé"],
        ["Il a commencé à pleuvoir.", "Empezó a llover.", "passé composé"],
        ["Nous dormions quand l'alarme a sonné.", "Dormíamos cuando sonó la alarma.", "interrupción"],
        ["J'étais en train de cuisiner quand mes amis sont arrivés.", "Estaba cocinando cuando llegaron mis amigos.", "interrupción"]
      ]],
      ej: [["d'habitude", "normalmente"], ["autrefois", "antes, en otros tiempos"], ["tous les étés", "todos los veranos"], ["quand j'étais enfant", "cuando era niño"], ["tout à coup", "de repente"], ["soudain", "de repente"], ["un jour", "un día"], ["une fois", "una vez"], ["ce jour-là", "ese día"], ["être en train de", "estar haciendo algo"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Quand je suis arrivé, il a fait froid.", "Quand je suis arrivé, il faisait froid.", "Clima: imparfait."], ["Tous les dimanches, ma grand-mère a préparé des arepas.", "Tous les dimanches, ma grand-mère préparait des arepas.", "Costumbre: imparfait."], ["Soudain, le téléphone sonnait.", "Soudain, le téléphone a sonné.", "Hecho puntual: passé composé."]] }
  ],
  ejemplos: [
    { sit: "«Cuando era pequeña, vivía en Cúcuta.»", resp: "Quand j'étais petite, je vivais à Cúcuta.", pasos: ["Descripción → imparfait."], porque: "Decorado." },
    { sit: "«Ese día tomamos el bus.»", resp: "Ce jour-là, nous avons pris le bus.", pasos: ["Hecho → passé composé."], porque: "Una vez." },
    { sit: "«Dormíamos cuando sonó la alarma.»", resp: "Nous dormions quand l'alarme a sonné.", pasos: ["Larga: imparfait.", "Corta: passé composé."], porque: "Interrupción." }
  ],
  comprueba: [
    { q: "El tiempo que hacía va en…", o: ["imparfait", "passé composé"], a: 0, b: "gr", porque: "Decorado." },
    { q: "Después de soudain suele ir…", o: ["passé composé", "imparfait"], a: 0, b: "gr", porque: "Hecho puntual." },
    { q: "Una costumbre del pasado va en…", o: ["imparfait", "passé composé"], a: 0, b: "gr", porque: "Hábito." }
  ],
  practica: [
    { fase: "guiada", c: ["pi-decor"], k: "choice", ask: "«Cuando era pequeño, jugaba fútbol todos los sábados.»", q: "«Quand j'étais petit, je ___ au foot tous les samedis.»", o: ["jouais", "ai joué", "joue"], a: 0, pista: "Costumbre.", why: "<b>jouais</b>." },
    { fase: "guiada", c: ["pi-fait"], k: "choice", ask: "«Veía la tele cuando, de repente, sonó el teléfono.»", q: "«Je regardais la télé quand tout à coup, le téléphone ___ .»", o: ["a sonné", "sonnait", "sonne"], a: 0, pista: "Hecho.", why: "<b>a sonné</b>." },
    { fase: "guiada", c: ["pi-decor", "pi-fait"], k: "sort", ask: "¿Pista de imparfait o de passé composé?", q: "Clasifica.", cats: ["Imparfait (costumbre, decorado)", "Passé composé (hecho puntual)"], items: [["d'habitude", 0], ["autrefois", 0], ["tous les étés", 0], ["quand j'étais enfant", 0], ["tout à coup", 1], ["soudain", 1], ["un jour", 1], ["une fois", 1]], pista: "soudain = de repente.", why: "Palabras pista." },
    { fase: "indep", c: ["pi-decor"], k: "fill", ask: "Escribe pleuvoir en imparfait.", q: "Hier soir, il ___ quand je suis sorti de la bibliothèque.", acc: ["pleuvait"], why: "<b>pleuvait</b>." },
    { fase: "indep", c: ["pi-fait"], k: "fill", ask: "Escribe prendre en passé composé (nous).", q: "Ce jour-là, nous ___ le bus pour aller à Villa de Leyva.", acc: ["avons pris"], why: "<b>avons pris</b>." },
    { fase: "indep", c: ["pi-decor"], k: "spot", ask: "Encuentra el error.", s: "Quand je suis arrivé à Bogotá , il [a fait] très froid .", fix: "faisait", why: "<b>faisait</b>." },
    { fase: "aplica", c: ["pi-decor"], k: "spot", ask: "Encuentra el error.", s: "Tous les dimanches , ma grand-mère [a préparé] des arepas .", fix: "préparait", why: "<b>préparait</b>." },
    { fase: "aplica", c: ["pi-decor", "pi-fait"], k: "match", ask: "Une cada frase con su traducción.", q: "Francés → español", pairs: [["Je vivais à Pamplona.", "Vivía en Pamplona."], ["J'ai vécu deux ans à Pamplona.", "Viví dos años en Pamplona."], ["Il faisait beau.", "Hacía sol."], ["Il a commencé à pleuvoir.", "Empezó a llover."]], why: "Dos tiempos." },
    { fase: "dominio", c: ["pi-decor", "pi-fait"], k: "choice", ask: "«El sábado pasado hacía buen tiempo, así que fuimos a la playa.»", q: "«Samedi dernier, il ___ beau, alors nous ___ à la plage.»", o: ["faisait / sommes allés", "a fait / allions", "faisait / allions"], a: 0, why: "Decorado + hecho." },
    { fase: "dominio", c: ["pi-decor"], k: "fill", ask: "Escribe dormir en imparfait (nous).", q: "Nous ___ quand l'alarme a sonné.", acc: ["dormions"], why: "<b>dormions</b>." },
    { fase: "dominio", c: ["pi-decor", "pi-fait"], k: "listen", say: "Quand j'étais petite, je vivais à Cúcuta.", acc: ["Quand j'étais petite, je vivais à Cúcuta.", "Quand j'étais petite je vivais à Cúcuta."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Quand j'étais petite, je vivais à Cúcuta.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Villa de Leyva", "Bogotá", "Pamplona", "Cúcuta"], previo: ["samedi", "dernier", "beau", "alors", "plage", "jour-là", "ce", "bus", "fatiguée", "contente", "soir", "cuisiner", "amis", "puis", "commencé", "pleuvoir", "lisais", "téléphone", "sonné", "vivais", "vécu", "deux", "ans", "dimanches", "grand-mère", "arepas", "dormions", "alarme", "l'alarme", "foot", "samedis", "télé", "bibliothèque", "sorti", "froid", "petit", "petite", "aller", "joue", "joué", "sonnait", "sonne", "allions"] }
};

E["a2-imperatif"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "L'impératif pour donner des conseils",
  objetivo: {
    que: "Vas a aconsejar con el imperativo: formas irregulares, verbos pronominales y pronombres.",
    corto: "Repose-toi !",
    podras: ["Usar sois, aie, sache, soyez.", "Formar repose-toi, dépêchons-nous.", "Poner el pronombre detrás (prends-le) o delante (ne le prends pas)."],
    iconos: ["m2d/senalar", "ic2/bombilla", "ic2/corazon"],
    previos: ["El imperativo de A1 (lección 36) y los pronombres (lecciones 9 a 12)."],
    capacidad: "Ahora puedes dar consejos y órdenes con pronombres."
  },
  requiere: R("im-forma", "im-er", "cod-forma", "cod-place", "coi-forma", "y-lieu", "pn-pres"), recupera: ["im-forma", "im-er"],
  conceptos: {
    "ip-irreg": { n: "sois, aie, sache, soyez; -er sin -s", b: "gr" },
    "ip-pron": { n: "afirmativo: prends-le, lève-toi; negativo: ne le prends pas", b: "gr" }
  },
  video: {
    titulo: "El imperativo", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/senalar", grande: "Repose-toi !", seg: [
        { es: "Hola. Para aconsejar: el presente sin sujeto." } ] },
      { v: "dos",
        a: { tag: "afirmativo", fr: "Prends-le ! Lève-toi !", es: "pronombre detrás" },
        b: { tag: "negativo", fr: "Ne le prends pas ! Ne te lève pas !", es: "pronombre delante" },
        seg: [ { es: "En afirmativo, el pronombre va detrás:", p: 1 }, { fr: "Prends-le !", p: 1 }, { es: "En negativo, delante:", p: 2 }, { fr: "Ne le prends pas !", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«¡Escúchame!»", o: ["Écoute-moi !", "Écoutes-me !"], a: 0,
        bien: "¡Sí! Sin s, y me → moi.", mal: "Sin s en -er, y me se vuelve moi detrás.",
        seg: [ { es: "Pausa. Escúchame." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["sois", "soyez", "aie", "sache", "va", "vas-y !", "dépêchons-nous"], seg: [
        { es: "Ojo: va, pero vas-y.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Consejos", img: "bg-universidad", yo: "camila",
    escena: "Camila está estresada antes del examen.",
    pj: PJ,
    lineas: [
      ["camila", "J'ai mal à la tête et j'ai un examen demain !", "¡Me duele la cabeza y tengo un examen mañana!"],
      ["hugo", "Ne t'inquiète pas. Repose-toi un peu.", "No te preocupes. Descansa un poco."],
      ["hugo", "Révise tes notes, mais ne te couche pas tard. Et ne mange pas trop de sucre !", "Repasa tus apuntes, pero no te acuestes tarde. ¡Y no comas demasiado azúcar!"],
      ["camila", "Merci ! Bon, nous sommes en retard : dépêchons-nous !", "¡Gracias! Bueno, vamos tarde: ¡apurémonos!"]
    ],
    fijate: "Fíjate: ne t'inquiète pas, repose-toi, ne te couche pas, dépêchons-nous."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Imperativo con pronombres",
      idea: "Presente sin sujeto (tu, nous, vous). -er y aller: sin -s con tu (parle, va). Irregulares: sois / soyez, aie / ayez, sache / sachez. Afirmativo: pronombre detrás con guion (prends-le, lève-toi; me → moi, te → toi). Negativo: delante (ne le prends pas).",
      intro: "Toca cada forma.",
      tabla: [["Francés", "Español", "Regla"], [
        ["Écoute-moi !", "¡Escúchame!", "me → moi"],
        ["Repose-toi.", "Descansa.", "te → toi"],
        ["Ne t'inquiète pas.", "No te preocupes.", "negativo"],
        ["Ne mange pas trop de sucre.", "No comas demasiado azúcar.", "-er sin s"],
        ["Il fait froid : prends ton manteau !", "Hace frío: ¡toma tu abrigo!", "prendre"],
        ["Soyez à l'heure.", "Sean puntuales.", "être"],
        ["Monsieur, soyez patient.", "Señor, sea paciente.", "être"],
        ["Sois sage !", "¡Pórtate bien!", "être"],
        ["Aie confiance.", "Ten confianza.", "avoir"],
        ["Sache que…", "Que sepas que…", "savoir"],
        ["Ce gâteau est délicieux : goûte-le !", "Este pastel está delicioso: ¡pruébalo!", "pronombre detrás"],
        ["Tu veux y aller ? Oui, vas-y !", "¿Quieres ir? ¡Sí, ve!", "va → vas-y"],
        ["Dépêchons-nous !", "¡Apurémonos!", "nous"]
      ]],
      ej: [["Prends-le.", "Tómalo."], ["Ne le prends pas.", "No lo tomes."], ["Lève-toi.", "Levántate."], ["Ne te lève pas.", "No te levantes."], ["Parle-lui.", "Háblale."], ["Ne lui parle pas.", "No le hables."], ["Aide-moi.", "Ayúdame."], ["Ne m'oublie pas.", "No me olvides."], ["fais", "haz"], ["révise tes notes", "repasa tus apuntes"], ["restez avec le groupe", "quédense con el grupo"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Écoutes-me !", "Écoute-moi !", "Sin s; me → moi."], ["Ne te couches pas tard.", "Ne te couche pas tard.", "-er sin s."], ["Le goûte !", "Goûte-le !", "Afirmativo: detrás."], ["Soyes patient.", "Soyez patient.", "être: soyez."]] }
  ],
  ejemplos: [
    { sit: "Tu amigo tiene dolor de cabeza.", resp: "Repose-toi un peu !", pasos: ["se reposer → repose-toi."], porque: "Pronominal." },
    { sit: "«Niños, ¡pórtense bien!»", resp: "Les enfants, soyez sages !", pasos: ["être → soyez."], porque: "Irregular." },
    { sit: "«No lo tomes.»", resp: "Ne le prends pas.", pasos: ["Negativo: delante."], porque: "Pronombre." }
  ],
  comprueba: [
    { q: "En imperativo afirmativo, el pronombre va…", o: ["detrás, con guion", "delante"], a: 0, b: "gr", porque: "Prends-le." },
    { q: "El imperativo de être con vous es…", o: ["soyez", "êtes"], a: 0, b: "gr", porque: "Irregular." },
    { q: "Detrás del verbo, me se vuelve…", o: ["moi", "me"], a: 0, b: "gr", porque: "Écoute-moi." }
  ],
  practica: [
    { fase: "guiada", c: ["ip-pron"], k: "choice", ask: "¿Te duele la cabeza? ¡Descansa un poco!", q: "«Tu as mal à la tête ? ___ un peu !»", o: ["Repose-toi", "Te repose", "Reposes-toi"], a: 0, pista: "Pronombre detrás.", why: "<b>Repose-toi</b>." },
    { fase: "guiada", c: ["ip-irreg"], k: "match", ask: "Une cada infinitivo con su imperativo (tu).", q: "Infinitivo → imperativo", pairs: [["aller", "va"], ["être", "sois"], ["avoir", "aie"], ["faire", "fais"], ["savoir", "sache"]], pista: "être → sois.", why: "Irregulares." },
    { fase: "guiada", c: ["ip-irreg"], k: "choice", ask: "Para aprobar, ¡repasa tus apuntes!", q: "«Pour réussir l'examen, ___ tes notes tous les jours.»", o: ["révise", "révises", "tu révises"], a: 0, pista: "-er sin s.", why: "<b>révise</b>." },
    { fase: "indep", c: ["ip-irreg"], k: "fill", ask: "Escribe prendre en imperativo (tu).", q: "Il fait froid : ___ ton manteau !", acc: ["prends"], why: "<b>prends</b>." },
    { fase: "indep", c: ["ip-irreg"], k: "fill", ask: "Escribe être en imperativo (vous).", q: "Monsieur, ___ patient, s'il vous plaît.", acc: ["soyez"], why: "<b>soyez</b>." },
    { fase: "indep", c: ["ip-irreg"], k: "spot", ask: "Encuentra el error.", s: "Si tu es fatiguée , ne te [couches] pas tard .", fix: "couche", why: "<b>couche</b>." },
    { fase: "aplica", c: ["ip-pron"], k: "sort", ask: "¿Pronombre detrás o delante?", q: "Clasifica.", cats: ["Pronombre detrás (afirmativo)", "Pronombre delante (negativo)"], items: [["Prends-le.", 0], ["Lève-toi.", 0], ["Parle-lui.", 0], ["Aide-moi.", 0], ["Ne le prends pas.", 1], ["Ne te lève pas.", 1], ["Ne lui parle pas.", 1], ["Ne m'oublie pas.", 1]], why: "Posición." },
    { fase: "aplica", c: ["ip-pron"], k: "spot", ask: "Encuentra el error.", s: "Ce gâteau est délicieux : [le goûte] !", fix: "goûte-le", why: "<b>goûte-le</b>." },
    { fase: "dominio", c: ["ip-pron"], k: "choice", ask: "¿Quieres ir a la biblioteca? ¡Sí, ve!", q: "«Tu veux aller à la bibliothèque ? Oui, ___ !»", o: ["vas-y", "va-y", "y va"], a: 0, why: "<b>vas-y</b>." },
    { fase: "dominio", c: ["ip-pron"], k: "fill", ask: "Escribe se dépêcher en imperativo (nous).", q: "Nous sommes en retard : ___ !", acc: ["dépêchons-nous"], why: "<b>dépêchons-nous</b>." },
    { fase: "dominio", c: ["ip-irreg", "ip-pron"], k: "listen", say: "Ne t'inquiète pas pour l'examen.", acc: ["Ne t'inquiète pas pour l'examen."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Ne t'inquiète pas pour l'examen.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["mal", "tête", "examen", "demain", "peu", "tes", "notes", "mais", "tard", "trop", "sucre", "merci", "bon", "retard", "froid", "ton", "manteau", "heure", "monsieur", "patient", "sage", "sages", "confiance", "gâteau", "délicieux", "veux", "aller", "bibliothèque", "enfants", "groupe", "fatiguée", "réussir", "tous", "jours", "pour", "goûte", "révises", "reposes", "va-y", "savoir", "aller", "être", "avoir", "faire"] }
};

E["a2-voyager"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Voyager : pays, villes et transports",
  objetivo: {
    que: "Vas a elegir la preposición de ciudades y países (à, en, au, aux; de, du, des) y de los transportes.",
    corto: "En France, au Canada, à Paris.",
    podras: ["Decir à Paris, en France, au Canada, aux États-Unis.", "Decir de dónde vienes: de France, du Mexique.", "Combinar con en bus, à pied."],
    iconos: ["ic2/mundo", "m2d/correr", "ic2/bandera"],
    previos: ["Los países (A1, lección 25) y los transportes (A1, lección 30)."],
    capacidad: "Ahora puedes hablar de tus viajes sin fallar las preposiciones."
  },
  requiere: R(), recupera: ["pn-prep", "tp-en", "tp-a"],
  conceptos: {
    "vo-aller": { n: "à + ciudad; en + país fem.; au + masc.; aux + plural", b: "gr" },
    "vo-venir": { n: "de + ciudad / país fem.; du, des", b: "gr" }
  },
  video: {
    titulo: "Ciudades y países", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/mundo", grande: "en France · au Canada", seg: [
        { es: "Hola. La preposición depende del lugar." } ] },
      { v: "frase", filas: [
          { nota: "ciudad", p: 1, partes: [["à Paris", "-", 1]] },
          { nota: "país femenino", p: 2, partes: [["en France · en Colombie", "-", 2]] },
          { nota: "país masculino", p: 3, partes: [["au Canada · au Mexique", "-", 3]] },
          { nota: "plural", p: 4, partes: [["aux États-Unis", "-", 4]] } ], seg: [
        { es: "Ciudad, à.", p: 1 }, { es: "País femenino, en.", p: 2 }, { es: "País masculino, au.", p: 3 }, { es: "Plural, aux.", p: 4 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Quisiera estudiar en Francia.»", o: ["Je voudrais étudier en France.", "Je voudrais étudier au France."], a: 0,
        bien: "¡Sí! France es femenino.", mal: "France termina en -e: femenino, en.",
        seg: [ { es: "Pausa. Francia." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["à Paris", "en France", "au Canada", "aux États-Unis", "de France", "du Mexique"], seg: [
        { es: "Para venir de: de, du, des.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Viajes", img: "bg-paris", yo: "camila",
    escena: "Camila y Hugo hablan de sus viajes.",
    pj: PJ,
    lineas: [
      ["hugo", "Cet été, je vais au Canada. Nous allons à Montréal en avion.", "Este verano voy a Canadá. Vamos a Montreal en avión."],
      ["camila", "Super ! Mon cousin habite aux États-Unis, et ma sœur vit en Espagne.", "¡Genial! Mi primo vive en Estados Unidos, y mi hermana vive en España."],
      ["hugo", "Et Luis ? — Il vient du Mexique. Il fait ses études à Lyon.", "¿Y Luis? — Viene de México. Estudia en Lyon."],
      ["camila", "Moi, je reviens du Chili la semaine prochaine.", "Yo vuelvo de Chile la semana que viene."]
    ],
    fijate: "Fíjate: au Canada, à Montréal, aux États-Unis, en Espagne, du Mexique."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Preposiciones de lugar",
      idea: "Ciudad: à / de. País femenino (casi todos en -e): en / de. País masculino: au / du. Plural: aux / des. Transporte: en si vas dentro (en bus), à si vas encima (à vélo, à pied).",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Regla"], [
        ["J'habite à Bogotá.", "Vivo en Bogotá.", "ciudad: à"],
        ["Elle fait ses études à Lyon.", "Estudia en Lyon.", "ciudad: à"],
        ["Je voudrais étudier en France.", "Quisiera estudiar en Francia.", "fem.: en"],
        ["Ma sœur vit en Espagne.", "Mi hermana vive en España.", "fem.: en"],
        ["Je vais au Mexique en avion.", "Voy a México en avión.", "masc.: au"],
        ["Cet été, je vais au Canada.", "Este verano voy a Canadá.", "masc.: au"],
        ["Mon cousin habite aux États-Unis.", "Mi primo vive en Estados Unidos.", "plural: aux"],
        ["Elle vient d'Espagne.", "Viene de España.", "fem.: de / d'"],
        ["Luis vient du Mexique.", "Luis viene de México.", "masc.: du"],
        ["Il revient des États-Unis.", "Vuelve de Estados Unidos.", "plural: des"],
        ["Je vais à la fac à pied.", "Voy a la universidad a pie.", "à pied"]
      ]],
      ej: [["la Colombie", "Colombia"], ["l'Italie", "Italia"], ["l'Allemagne", "Alemania"], ["le Brésil", "Brasil"], ["le Pérou", "Perú"], ["le Chili", "Chile"], ["les Pays-Bas", "los Países Bajos"], ["en train", "en tren"], ["à vélo", "en bicicleta"], ["à moto", "en moto"], ["le centre-ville", "el centro"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je vais en Paris en pied.", "Je vais à Paris à pied.", "Ciudad: à; a pie: à pied."], ["étudier au France", "étudier en France", "France es femenino."], ["Je vais en Canada.", "Je vais au Canada.", "Canada es masculino."], ["Il vient de Mexique.", "Il vient du Mexique.", "Masculino: du."]] }
  ],
  ejemplos: [
    { sit: "«Este verano voy a Canadá.»", resp: "Cet été, je vais au Canada.", pasos: ["Canada: masc. → au."], porque: "País masculino." },
    { sit: "«Mi hermana vive en España.»", resp: "Ma sœur vit en Espagne.", pasos: ["Espagne: fem. → en."], porque: "País femenino." },
    { sit: "«Vuelvo de Chile la semana que viene.»", resp: "Je reviens du Chili la semaine prochaine.", pasos: ["Chili: masc. → du."], porque: "Venir de." }
  ],
  comprueba: [
    { q: "Con una ciudad se usa…", o: ["à", "en"], a: 0, b: "gr", porque: "à Paris." },
    { q: "Con un país masculino se usa…", o: ["au", "en"], a: 0, b: "gr", porque: "au Canada." },
    { q: "Venir de un país masculino es…", o: ["du", "de"], a: 0, b: "gr", porque: "du Mexique." }
  ],
  practica: [
    { fase: "guiada", c: ["vo-aller"], k: "choice", ask: "«Este verano voy a Canadá.»", q: "«Cet été, je vais ___ Canada.»", o: ["au", "en", "à"], a: 0, pista: "Masculino.", why: "<b>au</b>." },
    { fase: "guiada", c: ["vo-aller"], k: "choice", ask: "«Mi primo vive en Estados Unidos.»", q: "«Mon cousin habite ___ États-Unis.»", o: ["aux", "au", "en"], a: 0, pista: "Plural.", why: "<b>aux</b>." },
    { fase: "guiada", c: ["vo-aller"], k: "sort", ask: "¿en, au o aux?", q: "Clasifica.", cats: ["en", "au", "aux"], items: [["Colombie", 0], ["Italie", 0], ["Allemagne", 0], ["Brésil", 1], ["Pérou", 1], ["Mexique", 1], ["Pays-Bas", 2], ["États-Unis", 2]], pista: "-e: femenino.", why: "Género del país." },
    { fase: "indep", c: ["vo-aller"], k: "fill", ask: "Escribe una palabra.", q: "Elle fait ses études ___ Lyon.", acc: ["à"], why: "<b>à</b>." },
    { fase: "indep", c: ["vo-aller"], k: "fill", ask: "Escribe una palabra.", q: "Ma sœur vit ___ Espagne depuis deux ans.", acc: ["en"], why: "<b>en</b>." },
    { fase: "indep", c: ["vo-venir"], k: "fill", ask: "Escribe una palabra.", q: "Luis vient ___ Mexique.", acc: ["du"], why: "<b>du</b>." },
    { fase: "aplica", c: ["vo-aller"], k: "spot", ask: "Encuentra el error.", s: "L'année prochaine , je voudrais étudier [au] France .", fix: "en", why: "<b>en France</b>." },
    { fase: "aplica", c: ["vo-aller"], k: "spot", ask: "Encuentra el error.", s: "Je vais à l'université [en] pied tous les jours .", fix: "à", why: "<b>à pied</b>." },
    { fase: "dominio", c: ["vo-venir"], k: "choice", ask: "«Vuelvo de Chile la semana que viene.»", q: "«Je reviens ___ Chili la semaine prochaine.»", o: ["du", "de", "au"], a: 0, why: "<b>du</b>." },
    { fase: "dominio", c: ["vo-aller"], k: "choice", ask: "«¿Vamos al centro en bus o a pie?»", q: "«On va au centre-ville ___ bus ou ___ pied ?»", o: ["en / à", "à / en", "en / en"], a: 0, why: "<b>en bus</b>, <b>à pied</b>." },
    { fase: "dominio", c: ["vo-aller", "vo-venir"], k: "listen", say: "Nous allons à Montréal en avion.", acc: ["Nous allons à Montréal en avion."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Nous allons à Montréal en avion.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Montréal", "Luis", "Lyon", "Bogotá", "Paris", "Canada", "États-Unis", "Espagne", "Mexique", "Chili", "France", "Colombie", "Italie", "Allemagne", "Brésil", "Pérou", "Pays-Bas"], previo: ["cet", "été", "vais", "allons", "avion", "super", "mon", "cousin", "habite", "ma", "sœur", "vit", "vient", "fait", "ses", "études", "reviens", "revient", "semaine", "prochaine", "étudier", "voudrais", "année", "université", "l'université", "pied", "tous", "jours", "depuis", "deux", "ans", "centre-ville", "bus", "va", "fac", "vélo", "train", "moto"] }
};

E["a2-medecin"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Chez le médecin : le corps, avoir mal à, depuis et il y a",
  objetivo: {
    que: "Vas a decir qué te duele con avoir mal à + artículo, y desde cuándo con depuis o il y a.",
    corto: "J'ai mal à la gorge depuis hier.",
    podras: ["Decir j'ai mal au dos, à la gorge, aux dents.", "Usar depuis (sigue) e il y a (terminó).", "Entender al médico: Qu'est-ce qui ne va pas ? une ordonnance."],
    iconos: ["ic2/corazon", "m2d/triste", "ic2/bombilla"],
    previos: ["El cuerpo (Primeros pasos) y avoir (A1)."],
    capacidad: "Ahora puedes explicar tus síntomas en una consulta."
  },
  requiere: R("y-pers"), recupera: ["co2-cuerpo", "ad-a"],
  conceptos: {
    "me2-mal": { n: "avoir mal au / à la / à l' / aux + cuerpo", b: "gr" },
    "me2-depuis": { n: "depuis (sigue) / il y a (terminó)", b: "gr" }
  },
  video: {
    titulo: "En el médico", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/triste", grande: "J'ai mal à la tête.", seg: [
        { es: "Hola. Para el dolor: avoir mal à, con artículo, nunca con posesivo." } ] },
      { v: "dos",
        a: { tag: "sigue hoy", fr: "Je tousse depuis trois jours.", es: "depuis" },
        b: { tag: "pasó y terminó", fr: "Je suis tombé il y a une semaine.", es: "il y a" },
        seg: [ { es: "Si todavía sigue:", p: 1 }, { fr: "Je tousse depuis trois jours.", p: 1 }, { es: "Si ya terminó:", p: 2 }, { fr: "Je suis tombé il y a une semaine.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Doctor, me duele la cabeza.»", o: ["Docteur, j'ai mal à la tête.", "Docteur, j'ai mal à ma tête."], a: 0,
        bien: "¡Sí! Con artículo.", mal: "No se usa posesivo: à la tête.",
        seg: [ { es: "Pausa. La cabeza." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["au dos", "à la gorge", "à l'oreille", "aux dents", "depuis", "il y a"], seg: [
        { es: "Al, a la, a l', a los: como siempre.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La consulta", img: "bg-universidad", yo: "camila",
    escena: "Camila va al médico.",
    pj: PJ,
    lineas: [
      ["sofia", "Bonjour. Qu'est-ce qui ne va pas ?", "Buenos días. ¿Qué le pasa?"],
      ["camila", "J'ai mal à la gorge et je tousse depuis trois jours.", "Me duele la garganta y toso desde hace tres días."],
      ["sofia", "Vous avez de la fièvre ? — Oui, ça fait deux jours que j'ai de la fièvre.", "¿Tiene fiebre? — Sí, hace dos días que tengo fiebre."],
      ["sofia", "Voici une ordonnance pour la pharmacie. Reposez-vous !", "Aquí tiene una receta para la farmacia. ¡Descanse!"]
    ],
    fijate: "Fíjate: j'ai mal à la gorge, depuis trois jours, ça fait deux jours que."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "El dolor y el tiempo",
      idea: "avoir mal au / à la / à l' / aux + parte del cuerpo (artículo, nunca posesivo). depuis: empezó y sigue. il y a: pasó y terminó. Ça fait + tiempo + que = depuis.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Regla"], [
        ["J'ai mal au ventre.", "Me duele el estómago.", "au"],
        ["J'ai mal à la gorge.", "Me duele la garganta.", "à la"],
        ["J'ai mal à l'oreille gauche.", "Me duele el oído izquierdo.", "à l'"],
        ["J'ai mal aux dents.", "Me duelen los dientes.", "aux"],
        ["J'ai mal au dos.", "Me duele la espalda.", "au"],
        ["Je tousse depuis trois jours.", "Toso desde hace tres días.", "depuis: sigue"],
        ["J'ai mal à la tête depuis hier.", "Me duele la cabeza desde ayer.", "depuis"],
        ["Je suis tombé il y a une semaine.", "Me caí hace una semana.", "il y a: terminó"],
        ["Je me suis cassé le bras il y a deux mois.", "Me rompí el brazo hace dos meses.", "il y a"],
        ["Ça fait deux jours que j'ai de la fièvre.", "Hace dos días que tengo fiebre.", "ça fait… que"],
        ["Qu'est-ce qui ne va pas ?", "¿Qué le pasa?", "médico"],
        ["une ordonnance", "una receta médica", "médico"]
      ]],
      ej: [["la gorge", "la garganta"], ["le dos", "la espalda"], ["le genou", "la rodilla"], ["le ventre", "el vientre, la barriga"], ["l'épaule", "el hombro"], ["la jambe", "la pierna"], ["l'estomac", "el estómago"], ["les pieds", "los pies"], ["les yeux", "los ojos"], ["tousser", "toser"], ["la fièvre", "la fiebre"], ["Ça continue.", "Sigue."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["J'ai mal à ma tête.", "J'ai mal à la tête.", "Artículo, no posesivo."], ["J'ai de la fièvre il y a trois jours.", "J'ai de la fièvre depuis trois jours.", "Sigue: depuis."], ["J'ai mal à le dos.", "J'ai mal au dos.", "à + le = au."]] }
  ],
  ejemplos: [
    { sit: "«Me duelen los dientes.»", resp: "J'ai mal aux dents.", pasos: ["à + les = aux."], porque: "Plural." },
    { sit: "«Toso desde hace una semana, y sigue.»", resp: "Je tousse depuis une semaine.", pasos: ["Sigue → depuis."], porque: "Duración." },
    { sit: "«Me rompí el brazo hace dos meses.»", resp: "Je me suis cassé le bras il y a deux mois.", pasos: ["Terminó → il y a."], porque: "Momento." }
  ],
  comprueba: [
    { q: "Con avoir mal à se usa…", o: ["el artículo", "el posesivo"], a: 0, b: "gr", porque: "à la tête." },
    { q: "Si el dolor todavía sigue, se usa…", o: ["depuis", "il y a"], a: 0, b: "gr", porque: "Sigue." },
    { q: "«une ordonnance» es…", o: ["una receta médica", "una orden de la policía"], a: 0, b: "gr", porque: "Médico." }
  ],
  practica: [
    { fase: "guiada", c: ["me2-mal"], k: "choice", ask: "«Doctor, me duele el estómago.»", q: "«Docteur, j'ai mal ___ ventre.»", o: ["au", "à le", "à la"], a: 0, pista: "le ventre.", why: "<b>au</b>." },
    { fase: "guiada", c: ["me2-mal"], k: "choice", ask: "«Le duelen los dientes.»", q: "«Elle a mal ___ dents.»", o: ["aux", "à les", "des"], a: 0, pista: "Plural.", why: "<b>aux</b>." },
    { fase: "guiada", c: ["me2-mal"], k: "sort", ask: "¿au, à la, à l' o aux?", q: "Clasifica.", cats: ["au", "à la", "à l'", "aux"], items: [["le dos", 0], ["le genou", 0], ["la gorge", 1], ["la jambe", 1], ["l'épaule", 2], ["l'estomac", 2], ["les pieds", 3], ["les yeux", 3]], pista: "Mira el artículo.", why: "Contracciones." },
    { fase: "indep", c: ["me2-mal"], k: "fill", ask: "Escribe à + artículo.", q: "J'ai mal ___ oreille gauche.", acc: ["à l'", "à l’"], why: "<b>à l'</b>." },
    { fase: "indep", c: ["me2-depuis"], k: "fill", ask: "Escribe una palabra (y sigue).", q: "Je tousse ___ une semaine, et ça continue.", acc: ["depuis"], why: "<b>depuis</b>." },
    { fase: "indep", c: ["me2-mal"], k: "spot", ask: "Encuentra el error.", s: "Docteur , j'ai mal à [ma] tête .", fix: "la", why: "<b>la</b>." },
    { fase: "aplica", c: ["me2-depuis"], k: "choice", ask: "«Me rompí el brazo hace dos meses.»", q: "«Je me suis cassé le bras ___ deux mois.»", o: ["il y a", "depuis", "pendant"], a: 0, why: "Terminó: <b>il y a</b>." },
    { fase: "aplica", c: ["me2-depuis"], k: "spot", ask: "Encuentra el error.", s: "J'ai de la fièvre [il y a] trois jours .", fix: "depuis", why: "<b>depuis</b>." },
    { fase: "dominio", c: ["me2-mal"], k: "match", ask: "Une cada parte del cuerpo.", q: "Francés → español", pairs: [["la gorge", "la garganta"], ["le dos", "la espalda"], ["le genou", "la rodilla"], ["le ventre", "el vientre"], ["l'épaule", "el hombro"]], why: "El cuerpo." },
    { fase: "dominio", c: ["me2-depuis"], k: "fill", ask: "Escribe una palabra.", q: "Ça fait deux jours ___ j'ai de la fièvre.", acc: ["que"], why: "<b>que</b>." },
    { fase: "dominio", c: ["me2-mal", "me2-depuis"], k: "listen", say: "J'ai mal à la tête depuis hier.", acc: ["J'ai mal à la tête depuis hier."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>J'ai mal à la tête depuis hier.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia"], previo: ["qu'est-ce", "qui", "va", "pas", "tousse", "trois", "jours", "avez", "fièvre", "fait", "deux", "voici", "pour", "pharmacie", "reposez-vous", "mal", "tête", "oreille", "gauche", "dents", "semaine", "tombé", "cassé", "bras", "mois", "hier", "docteur", "continue", "pendant", "une"] }
};

E["a2-participes-irreguliers"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Les participes passés irréguliers",
  objetivo: {
    que: "Vas a dominar los participios irregulares agrupados por terminación: -u, -is / -it y otros.",
    corto: "vu, pris, fait, été.",
    podras: ["Recordar los participios en -u: eu, vu, lu, bu, pu, voulu, venu.", "Recordar los de -is / -it: pris, mis, dit, écrit, fait.", "Recordar été, né, mort, ouvert."],
    iconos: ["ic2/libros", "ic2/lapiz", "ic2/trofeo"],
    previos: ["El passé composé (lecciones 1 y 2)."],
    capacidad: "Ahora no te equivocas con los participios más usados."
  },
  requiere: R("pca-forma", "pca-irreg", "pce-verbes"), recupera: ["pca-irreg"],
  conceptos: {
    "pi2-u": { n: "-u: eu, vu, lu, bu, pu, voulu, venu", b: "gr" },
    "pi2-is": { n: "-is / -it: pris, mis, dit, écrit, fait; été, né, mort, ouvert", b: "gr" }
  },
  video: {
    titulo: "Participios irregulares", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/libros", grande: "j'ai pris", seg: [
        { es: "Hola. Los irregulares se aprenden en familias." } ] },
      { v: "frase", filas: [
          { nota: "en -u", p: 1, partes: [["eu · vu · lu · bu · pu · voulu · venu", "-", 1]] },
          { nota: "en -is / -it", p: 2, partes: [["pris · mis · dit · écrit · fait", "-", 2]] },
          { nota: "otros", p: 3, partes: [["été · né · mort · ouvert", "-", 3]] } ], seg: [
        { es: "La familia de la u,", p: 1 }, { es: "la familia de is e it,", p: 2 }, { es: "y unos sueltos.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Vimos una película muy buena.»", o: ["Nous avons vu un très bon film.", "Nous avons voyé un très bon film."], a: 0,
        bien: "¡Sí! Voir → vu.", mal: "El participio de voir es vu.",
        seg: [ { es: "Pausa. Ver." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["avoir → eu", "être → été", "mettre → mis", "lire → lu", "dire → dit", "ouvrir → ouvert"], seg: [
        { es: "Eu suena como la u francesa.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El examen", img: "bg-universidad", yo: "camila",
    escena: "Camila cuenta su día a Hugo.",
    pj: PJ,
    lineas: [
      ["camila", "Hier, j'ai pris le train pour Lyon. Nous avons eu un examen difficile.", "Ayer tomé el tren a Lyon. Tuvimos un examen difícil."],
      ["hugo", "Tu as lu le livre avant ?", "¿Leíste el libro antes?"],
      ["camila", "Oui, je l'ai lu. Le soir, nous avons vu un très bon film et nous avons bu du vin rouge.", "Sí, lo leí. Por la noche vimos una película muy buena y tomamos vino tinto."],
      ["hugo", "Tu as écrit à ta mère ? — Oui, elle a dit : bravo !", "¿Le escribiste a tu mamá? — Sí, dijo: ¡bravo!"]
    ],
    fijate: "Fíjate: pris, eu, lu, vu, bu, écrit, dit."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Familias de participios",
      idea: "-u: avoir → eu, voir → vu, lire → lu, boire → bu, pouvoir → pu, vouloir → voulu, venir → venu. -is / -it: prendre → pris, mettre → mis, dire → dit, écrire → écrit, faire → fait. Otros: être → été, naître → né, mourir → mort, ouvrir → ouvert.",
      intro: "Toca cada forma.",
      tabla: [["Francés", "Español", "Familia"], [
        ["Nous avons eu un examen difficile.", "Tuvimos un examen difícil.", "-u"],
        ["Hier soir, nous avons vu un film.", "Anoche vimos una película.", "-u"],
        ["Tu as lu ce livre ?", "¿Leíste este libro?", "-u"],
        ["Nous avons bu du vin rouge.", "Tomamos vino tinto.", "-u"],
        ["Je n'ai pas pu venir.", "No pude venir.", "-u"],
        ["Il a voulu partir.", "Quiso irse.", "-u"],
        ["Hier, j'ai pris le train pour Lyon.", "Ayer tomé el tren a Lyon.", "-is"],
        ["J'ai mis mon manteau.", "Me puse el abrigo.", "-is"],
        ["Elle a dit : bravo !", "Dijo: ¡bravo!", "-it"],
        ["Elle a écrit une lettre.", "Escribió una carta.", "-it"],
        ["Hier, j'ai fait du sport.", "Ayer hice deporte.", "-ait"],
        ["J'ai été malade.", "Estuve enfermo.", "otros"],
        ["Il a ouvert la fenêtre.", "Abrió la ventana.", "otros"]
      ]],
      ej: [["venir → venu", "venido"], ["naître → né", "nacido"], ["mourir → mort", "muerto"], ["prendre", "tomar"], ["voir", "ver"], ["avoir", "tener"], ["être", "ser, estar"], ["mettre", "poner"], ["lire", "leer"], ["dire", "decir"], ["écrire", "escribir"], ["boire", "beber"], ["le journal", "el periódico"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["j'ai prendu", "j'ai pris", "prendre → pris."], ["nous avons voyé", "nous avons vu", "voir → vu."], ["j'ai mettu", "j'ai mis", "mettre → mis."], ["il a ouvri", "il a ouvert", "ouvrir → ouvert."]] }
  ],
  ejemplos: [
    { sit: "«Ayer hice deporte.»", resp: "Hier, j'ai fait du sport.", pasos: ["faire → fait."], porque: "Irregular." },
    { sit: "«Tomamos vino tinto.»", resp: "Nous avons bu du vin rouge.", pasos: ["boire → bu."], porque: "-u." },
    { sit: "«¿Leíste el periódico?»", resp: "Tu as lu le journal ?", pasos: ["lire → lu."], porque: "-u." }
  ],
  comprueba: [
    { q: "El participio de avoir es…", o: ["eu", "avu"], a: 0, b: "gr", porque: "eu." },
    { q: "El participio de mettre es…", o: ["mis", "mettu"], a: 0, b: "gr", porque: "-is." },
    { q: "El participio de ouvrir es…", o: ["ouvert", "ouvri"], a: 0, b: "gr", porque: "Otros." }
  ],
  practica: [
    { fase: "guiada", c: ["pi2-is"], k: "choice", ask: "prendre → ?", q: "«j'ai ___»", o: ["pris", "prendu", "prit"], a: 0, pista: "-is.", why: "<b>pris</b>." },
    { fase: "guiada", c: ["pi2-u"], k: "choice", ask: "voir → ?", q: "«j'ai ___»", o: ["vu", "voyé", "vi"], a: 0, pista: "-u.", why: "<b>vu</b>." },
    { fase: "guiada", c: ["pi2-u", "pi2-is"], k: "sort", ask: "¿En -u o en -is / -it?", q: "Clasifica.", cats: ["en -u", "en -is / -it"], items: [["vu", 0], ["lu", 0], ["bu", 0], ["voulu", 0], ["pris", 1], ["mis", 1], ["dit", 1], ["écrit", 1]], pista: "Mira la terminación.", why: "Familias." },
    { fase: "indep", c: ["pi2-is"], k: "fill", ask: "Escribe el participio de écrire.", q: "Elle a ___ une lettre à sa grand-mère.", acc: ["écrit"], why: "<b>écrit</b>." },
    { fase: "indep", c: ["pi2-u"], k: "fill", ask: "Escribe el participio de boire.", q: "Nous avons ___ du vin rouge.", acc: ["bu"], why: "<b>bu</b>." },
    { fase: "indep", c: ["pi2-u"], k: "spot", ask: "Encuentra el error.", s: "Hier soir , nous avons [voyé] un très bon film .", fix: "vu", why: "<b>vu</b>." },
    { fase: "aplica", c: ["pi2-u", "pi2-is"], k: "match", ask: "Une cada infinitivo con su participio.", q: "Infinitivo → participio", pairs: [["avoir", "eu"], ["être", "été"], ["mettre", "mis"], ["lire", "lu"], ["dire", "dit"]], why: "Irregulares." },
    { fase: "aplica", c: ["pi2-is"], k: "choice", ask: "«Ayer hice deporte.»", q: "«___»", o: ["Hier, j'ai fait du sport.", "Hier, j'ai faisé du sport.", "Hier, j'ai faire du sport."], a: 0, why: "<b>fait</b>." },
    { fase: "dominio", c: ["pi2-is"], k: "fill", ask: "Escribe el participio de ouvrir.", q: "Il a ___ la fenêtre.", acc: ["ouvert"], why: "<b>ouvert</b>." },
    { fase: "dominio", c: ["pi2-u"], k: "order", ask: "Ordena: «¿Leíste el periódico?».", tokens: ["Tu as", "lu", "le journal ?"], why: "<b>Tu as lu le journal ?</b>" },
    { fase: "dominio", c: ["pi2-u", "pi2-is"], k: "listen", say: "Hier, j'ai pris le train pour Lyon.", acc: ["Hier, j'ai pris le train pour Lyon.", "Hier j'ai pris le train pour Lyon."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Hier, j'ai pris le train pour Lyon.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Lyon"], previo: ["hier", "train", "pour", "examen", "difficile", "livre", "avant", "soir", "très", "bon", "film", "vin", "rouge", "ta", "mère", "bravo", "venir", "partir", "manteau", "lettre", "sa", "grand-mère", "sport", "malade", "fenêtre", "voyé", "prendu", "prit", "vi", "faisé", "faire"] }
};

E["a2-pc-negation"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Le passé composé : négation et questions",
  objetivo: {
    que: "Vas a negar y preguntar en passé composé: je n'ai pas mangé, as-tu mangé ?",
    corto: "Je n'ai jamais vu la mer.",
    podras: ["Poner ne… pas alrededor del auxiliar.", "Usar jamais, rien, personne, pas encore.", "Preguntar en tres registros: Tu as mangé ? / Est-ce que… / As-tu mangé ? A-t-il… ?"],
    iconos: ["m2d/pensativo", "ic2/pregunta", "ic2/reloj-arena"],
    previos: ["El passé composé (lecciones 1, 2 y 18) y las preguntas (A1, lección 57)."],
    capacidad: "Ahora puedes preguntar y negar en pasado con cualquier registro."
  },
  requiere: R("pca-forma", "pca-neg", "pca-irreg", "pce-verbes", "pce-accord", "pi2-u", "pi2-is"), recupera: ["pca-neg", "it-reg"],
  conceptos: {
    "pcn-neg": { n: "ne + auxiliar + pas / jamais / rien + participio", b: "gr" },
    "pcn-q": { n: "Tu as… ? / Est-ce que… ? / As-tu… ? A-t-il… ?", b: "gr" }
  },
  video: {
    titulo: "Negar y preguntar en pasado", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/pensativo", grande: "Je n'ai pas mangé.", seg: [
        { es: "Hola. Ne y pas abrazan al auxiliar, no al participio." } ] },
      { v: "frase", filas: [
          { nota: "oral", p: 1, partes: [["Tu as mangé ?", "-", 1]] },
          { nota: "neutro", p: 2, partes: [["Est-ce que tu as mangé ?", "-", 2]] },
          { nota: "formal", p: 3, partes: [["As-tu mangé ? A-t-il compris ?", "-", 3]] } ], seg: [
        { es: "Con amigos,", p: 1 }, { es: "en cualquier lugar,", p: 2 }, { es: "formal: con il, se añade te.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«No comí.»", o: ["Je n'ai pas mangé.", "Je n'ai mangé pas."], a: 0,
        bien: "¡Sí! Pas antes del participio.", mal: "Pas va justo después del auxiliar.",
        seg: [ { es: "Pausa. No comí." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["n'ai pas", "n'ai jamais", "n'ai rien", "n'ai vu personne", "pas encore", "A-t-il… ?"], seg: [
        { es: "Ojo: personne va después del participio.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "¿Has ido a Francia?", img: "bg-cafe", yo: "camila",
    escena: "Hugo le hace preguntas a Camila.",
    pj: PJ,
    lineas: [
      ["hugo", "Avez-vous déjà visité Paris ?", "¿Ya ha visitado París? (en broma, formal)"],
      ["camila", "Non, je n'ai jamais visité Paris ! Et ma sœur n'est jamais allée en France.", "¡No, nunca he visitado París! Y mi hermana nunca ha ido a Francia."],
      ["hugo", "Tu as mangé ? — Non, je n'ai pas encore mangé.", "¿Comiste? — No, todavía no he comido."],
      ["camila", "Et Paul ? A-t-il compris la question ? — Non, il n'a rien dit.", "¿Y Paul? ¿Entendió la pregunta? — No, no dijo nada."]
    ],
    fijate: "Fíjate: je n'ai jamais visité, je n'ai pas encore mangé, a-t-il compris, il n'a rien dit."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Negación y preguntas",
      idea: "Negación: ne + auxiliar + pas / jamais / rien / plus + participio. Personne va después del participio. Preguntas: Tu as mangé ? (oral) / Est-ce que tu as mangé ? (neutro) / As-tu mangé ? (formal); con il / elle: A-t-il compris ?",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Forma"], [
        ["Je n'ai pas fini.", "No he terminado.", "ne… pas"],
        ["Je n'ai pas compris la question.", "No entendí la pregunta.", "ne… pas"],
        ["Elle n'est pas venue.", "No vino.", "être"],
        ["Elle n'est jamais allée en France.", "Nunca ha ido a Francia.", "jamais"],
        ["Nous n'avons rien acheté.", "No compramos nada.", "rien"],
        ["Je n'ai vu personne.", "No vi a nadie.", "personne: después"],
        ["Je n'ai pas encore mangé.", "Todavía no he comido.", "pas encore"],
        ["Je ne l'ai jamais vu.", "Nunca lo he visto.", "con pronombre"],
        ["Tu as mangé ?", "¿Comiste?", "oral"],
        ["Est-ce que tu as mangé ?", "¿Comiste?", "neutro"],
        ["As-tu mangé ?", "¿Comiste?", "formal"],
        ["Avez-vous déjà visité Paris ?", "¿Ya ha visitado París?", "formal"],
        ["A-t-il compris ?", "¿Entendió?", "-t-"]
      ]],
      ej: [["T'as vu le film ?", "¿Viste la peli?"], ["Vous avez fini ?", "¿Terminaron?"], ["Il est parti ?", "¿Se fue?"], ["Avez-vous fini ?", "¿Han terminado?"], ["Est-il parti ?", "¿Se fue?"], ["A-t-elle répondu ?", "¿Respondió?"], ["Je n'ai rien vu.", "No vi nada."], ["la mer", "el mar"], ["déjà", "ya"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je n'ai mangé pas.", "Je n'ai pas mangé.", "pas antes del participio."], ["Elle n'a pas venue.", "Elle n'est pas venue.", "venir: être."], ["Je n'ai personne vu.", "Je n'ai vu personne.", "personne: después."], ["A il compris ?", "A-t-il compris ?", "Se añade -t-."]] }
  ],
  ejemplos: [
    { sit: "«Nunca he visitado Canadá.»", resp: "Nous n'avons jamais visité le Canada.", pasos: ["ne + avons + jamais + visité."], porque: "jamais." },
    { sit: "«No vi a nadie.»", resp: "Je n'ai vu personne.", pasos: ["personne después."], porque: "Excepción." },
    { sit: "«¿Entendió él?» (formal)", resp: "A-t-il compris ?", pasos: ["Inversión + -t-."], porque: "Formal." }
  ],
  comprueba: [
    { q: "En passé composé, pas va…", o: ["después del auxiliar", "después del participio"], a: 0, b: "gr", porque: "n'ai pas mangé." },
    { q: "Personne va…", o: ["después del participio", "antes del participio"], a: 0, b: "gr", porque: "n'ai vu personne." },
    { q: "En «A-t-il compris ?», la -t- sirve…", o: ["para unir dos vocales", "para el plural"], a: 0, b: "gr", porque: "Sonido." }
  ],
  practica: [
    { fase: "guiada", c: ["pcn-neg"], k: "choice", ask: "«No he terminado.»", q: "«___»", o: ["Je n'ai pas fini.", "Je n'ai fini pas.", "Je ne pas ai fini."], a: 0, pista: "Alrededor del auxiliar.", why: "<b>Je n'ai pas fini.</b>" },
    { fase: "guiada", c: ["pcn-neg"], k: "choice", ask: "«Ella no vino.»", q: "«___»", o: ["Elle n'est pas venue.", "Elle n'a pas venue.", "Elle n'est venue pas."], a: 0, pista: "venir: être.", why: "<b>Elle n'est pas venue.</b>" },
    { fase: "guiada", c: ["pcn-q"], k: "sort", ask: "¿Oral o formal?", q: "Clasifica.", cats: ["Oral", "Formal"], items: [["Tu as mangé ?", 0], ["T'as vu le film ?", 0], ["Vous avez fini ?", 0], ["Il est parti ?", 0], ["As-tu mangé ?", 1], ["Avez-vous fini ?", 1], ["Est-il parti ?", 1], ["A-t-elle répondu ?", 1]], pista: "Inversión: formal.", why: "Registros." },
    { fase: "indep", c: ["pcn-neg"], k: "fill", ask: "Completa la negación.", q: "Nous ___ avons rien acheté.", acc: ["n'"], why: "<b>n'</b>." },
    { fase: "indep", c: ["pcn-neg"], k: "fill", ask: "Escribe «nunca».", q: "Il n'a ___ vu la mer.", acc: ["jamais"], why: "<b>jamais</b>." },
    { fase: "indep", c: ["pcn-neg"], k: "spot", ask: "Encuentra el error.", s: "Elle [n'a] pas venue à la fête .", fix: "n'est", why: "<b>n'est</b>." },
    { fase: "aplica", c: ["pcn-q"], k: "choice", ask: "«¿Ha comprendido él?» (formal)", q: "«___»", o: ["A-t-il compris ?", "A il compris ?", "Il a-t-compris ?"], a: 0, why: "<b>A-t-il</b>." },
    { fase: "aplica", c: ["pcn-neg"], k: "match", ask: "Une cada frase.", q: "Francés → español", pairs: [["Je n'ai rien vu.", "No vi nada."], ["Je n'ai vu personne.", "No vi a nadie."], ["Je ne l'ai jamais vu.", "Nunca lo he visto."], ["Je n'ai pas encore mangé.", "Todavía no he comido."]], why: "Negaciones." },
    { fase: "dominio", c: ["pcn-neg"], k: "choice", ask: "«No vi a nadie.»", q: "«___»", o: ["Je n'ai vu personne.", "Je n'ai personne vu.", "Je n'ai pas vu personne."], a: 0, why: "<b>Je n'ai vu personne.</b>" },
    { fase: "dominio", c: ["pcn-neg"], k: "order", ask: "Ordena: «Nunca hemos visitado Canadá».", tokens: ["Nous", "n'avons jamais", "visité", "le Canada."], why: "<b>Nous n'avons jamais visité le Canada.</b>" },
    { fase: "dominio", c: ["pcn-neg", "pcn-q"], k: "listen", say: "Avez-vous déjà visité Paris ?", acc: ["Avez-vous déjà visité Paris ?", "Avez-vous déjà visité Paris?", "Avez-vous déjà visité Paris"], num: false, dict: true, ask: "Escucha la pregunta y escríbela.", why: "Era <b>Avez-vous déjà visité Paris ?</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paul", "Paris", "France", "Canada"], previo: ["visité", "ma", "sœur", "allée", "mangé", "encore", "compris", "question", "dit", "fini", "venue", "acheté", "vu", "mer", "film", "parti", "répondu", "fête", "ai", "avons", "a", "est", "ne", "pas"] }
};

E["a2-pc-pronominaux"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Le passé composé des verbes pronominaux",
  objetivo: {
    que: "Vas a contar en pasado con verbos pronominales: siempre être y concordancia con el sujeto.",
    corto: "Nous nous sommes amusés.",
    podras: ["Formar je me suis levé(e), ils se sont couchés.", "Negar: je ne me suis pas levé.", "Saber cuándo no concuerda: elle s'est lavé les mains."],
    iconos: ["ic2/reloj-arena", "m2d/celebrar", "ic2/bombilla"],
    previos: ["Los pronominales (lección 5) y el passé composé con être (lección 2)."],
    capacidad: "Ahora puedes contar tu día con todos sus verbos pronominales."
  },
  requiere: R("pn-pres", "pn-pc", "pce-verbes", "pce-accord", "pcn-neg"), recupera: ["pn-pc"],
  conceptos: {
    "pp2-forme": { n: "pronombre + être + participio concordado", b: "gr" },
    "pp2-neg": { n: "ne + pronombre + être + pas; sin concordancia con parte del cuerpo", b: "gr" }
  },
  video: {
    titulo: "Pronominales en pasado", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/celebrar", grande: "Ils se sont amusés.", seg: [
        { es: "Hola. Pronominal en pasado: siempre être." } ] },
      { v: "frase", filas: [
          { nota: "afirmativo", p: 1, partes: [["Elle s'est levée.", "-", 1]] },
          { nota: "negativo", p: 2, partes: [["Je ne me suis pas couché tard.", "-", 2]] },
          { nota: "parte del cuerpo", p: 3, partes: [["Elle s'est lavé les mains.", "-", 3]] } ], seg: [
        { es: "Se levantó: concuerda,", p: 1 }, { es: "no me acosté tarde,", p: 2 }, { es: "y con una parte del cuerpo detrás, no concuerda.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Se acostaron a medianoche.»", o: ["Ils se sont couchés à minuit.", "Ils se ont couchés à minuit."], a: 0,
        bien: "¡Sí! Siempre être.", mal: "Los pronominales van con être: se sont.",
        seg: [ { es: "Pausa. Se acostaron." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["je me suis trompé", "il s'est reposé", "nous nous sommes perdus", "elle s'est endormie"], seg: [
        { es: "Equivocarse, descansar, perderse, dormirse.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La fiesta", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo hablan de la fiesta de anoche.",
    pj: PJ,
    lineas: [
      ["hugo", "Tu t'es couchée tard ?", "¿Te acostaste tarde?"],
      ["camila", "Oui ! Mais ce matin, je me suis réveillée à six heures.", "¡Sí! Pero esta mañana me desperté a las seis."],
      ["hugo", "Nous nous sommes bien amusés à la fête. Paul s'est endormi sur le canapé !", "Nos divertimos mucho en la fiesta. ¡Paul se durmió en el sofá!"],
      ["camila", "Et Léa et Marie se sont perdues dans le métro…", "Y Léa y Marie se perdieron en el metro…"]
    ],
    fijate: "Fíjate: je me suis réveillée, nous nous sommes amusés, se sont perdues."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Pronombre + être",
      idea: "Pronombre + être + participio: je me suis réveillé(e). Concuerda con el sujeto: elle s'est levée, elles se sont amusées. Negación: je ne me suis pas levé. Con una parte del cuerpo después, sin concordancia: elle s'est lavé les mains.",
      intro: "Toca cada forma.",
      tabla: [["Francés", "Español", "Regla"], [
        ["Ce matin, je me suis réveillée à six heures.", "Esta mañana me desperté a las seis.", "+ e"],
        ["Tu t'es couché tard ?", "¿Te acostaste tarde?", "—"],
        ["Elle s'est habillée.", "Se vistió.", "+ e"],
        ["Nous nous sommes promenés dans le parc.", "Paseamos por el parque.", "+ s"],
        ["Ils se sont bien amusés à la fête.", "Se divirtieron mucho en la fiesta.", "+ s"],
        ["Mes sœurs se sont réveillées à sept heures.", "Mis hermanas se despertaron a las siete.", "+ es"],
        ["Je ne me suis pas couché tard.", "No me acosté tarde.", "negación"],
        ["Elle s'est lavé les mains.", "Se lavó las manos.", "sin concordancia"],
        ["Je me suis trompé.", "Me equivoqué.", "—"],
        ["Il s'est reposé.", "Descansó.", "—"],
        ["Nous nous sommes perdus.", "Nos perdimos.", "+ s"],
        ["Elle s'est endormie.", "Se durmió.", "+ e"]
      ]],
      ej: [["se lever", "levantarse"], ["s'amuser", "divertirse"], ["se reposer", "descansar"], ["se tromper", "equivocarse"], ["lever la main", "levantar la mano"], ["laver la voiture", "lavar el carro"], ["réveiller son frère", "despertar a su hermano"], ["habiller le bébé", "vestir al bebé"], ["le canapé", "el sofá"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je m'ai levé.", "Je me suis levé.", "Siempre être."], ["Ils se ont couchés.", "Ils se sont couchés.", "être."], ["Je me ne suis pas levé.", "Je ne me suis pas levé.", "ne antes del pronombre."], ["Elle s'est lavée les mains.", "Elle s'est lavé les mains.", "Parte del cuerpo: sin concordancia."]] }
  ],
  ejemplos: [
    { sit: "«Me levanté temprano.»", resp: "Je me suis levé tôt.", pasos: ["me + suis + levé."], porque: "être." },
    { sit: "«Ella se vistió.»", resp: "Elle s'est habillée.", pasos: ["Concuerda: + e."], porque: "Femenino." },
    { sit: "«No me acosté tarde.»", resp: "Je ne me suis pas couché tard.", pasos: ["ne + me + suis + pas."], porque: "Negación." }
  ],
  comprueba: [
    { q: "Los pronominales en passé composé usan…", o: ["être", "avoir"], a: 0, b: "gr", porque: "Siempre." },
    { q: "En negación, ne va…", o: ["antes del pronombre", "antes de être"], a: 0, b: "gr", porque: "je ne me suis pas…" },
    { q: "Con una parte del cuerpo después (les mains), el participio…", o: ["no concuerda", "concuerda"], a: 0, b: "gr", porque: "lavé les mains." }
  ],
  practica: [
    { fase: "guiada", c: ["pp2-forme"], k: "choice", ask: "«Paseamos por el parque.»", q: "«Nous nous ___ promenés dans le parc.»", o: ["sommes", "avons", "sont"], a: 0, pista: "être.", why: "<b>sommes</b>." },
    { fase: "guiada", c: ["pp2-forme"], k: "sort", ask: "¿Con être o con avoir?", q: "Clasifica.", cats: ["être", "avoir"], items: [["se lever", 0], ["s'amuser", 0], ["se reposer", 0], ["se tromper", 0], ["lever la main", 1], ["laver la voiture", 1], ["réveiller son frère", 1], ["habiller le bébé", 1]], pista: "¿Lleva se?", why: "Pronominal: être." },
    { fase: "guiada", c: ["pp2-forme"], k: "match", ask: "Une cada frase.", q: "Francés → español", pairs: [["Je me suis trompé.", "Me equivoqué."], ["Il s'est reposé.", "Descansó."], ["Nous nous sommes perdus.", "Nos perdimos."], ["Elle s'est endormie.", "Se durmió."]], pista: "tromper = equivocar.", why: "Pronominales." },
    { fase: "indep", c: ["pp2-forme"], k: "fill", ask: "Escribe el participio de réveiller concordado.", q: "Mes sœurs se sont ___ à sept heures.", acc: ["réveillées"], why: "<b>réveillées</b>." },
    { fase: "indep", c: ["pp2-forme"], k: "spot", ask: "Encuentra el error.", s: "Hier , ils se [ont] couchés à minuit .", fix: "sont", why: "<b>sont</b>." },
    { fase: "indep", c: ["pp2-forme"], k: "choice", ask: "«Ella se vistió.»", q: "«___»", o: ["Elle s'est habillée.", "Elle s'a habillée.", "Elle est habillé."], a: 0, why: "<b>s'est habillée</b>." },
    { fase: "aplica", c: ["pp2-neg"], k: "choice", ask: "«No me acosté tarde.»", q: "«___»", o: ["Je ne me suis pas couché tard.", "Je me ne suis pas couché tard.", "Je ne suis pas me couché tard."], a: 0, why: "<b>ne me suis pas</b>." },
    { fase: "aplica", c: ["pp2-neg"], k: "choice", ask: "«Se lavó las manos.»", q: "«Elle s'est ___ les mains.»", o: ["lavé", "lavée", "lavées"], a: 0, why: "Parte del cuerpo: <b>lavé</b>." },
    { fase: "dominio", c: ["pp2-forme"], k: "fill", ask: "Escribe se coucher (tu, hombre).", q: "Tu ___ tard ?", acc: ["t'es couché"], why: "<b>t'es couché</b>." },
    { fase: "dominio", c: ["pp2-forme"], k: "order", ask: "Ordena: «Nos divertimos mucho».", tokens: ["Nous", "nous sommes", "bien", "amusés."], why: "<b>Nous nous sommes bien amusés.</b>" },
    { fase: "dominio", c: ["pp2-forme", "pp2-neg"], k: "listen", say: "Ce matin, je me suis réveillée à six heures.", acc: ["Ce matin, je me suis réveillée à six heures.", "Ce matin je me suis réveillée à six heures.", "Ce matin, je me suis réveillée à 6 heures."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Ce matin, je me suis réveillée à six heures.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paul", "Léa", "Marie"], previo: ["tard", "mais", "ce", "matin", "six", "sept", "heures", "bien", "fête", "sur", "métro", "minuit", "mains", "parc", "sœurs", "tôt", "avons", "sont", "s'a", "est", "lavée", "lavées", "habillé", "main", "voiture", "frère", "bébé", "son"] }
};

E["a2-marqueurs-passe"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Hier, la semaine dernière, il y a deux jours",
  objetivo: {
    que: "Vas a situar acciones en el pasado con hier, la semaine dernière, il y a, en + año.",
    corto: "Il y a deux ans…",
    podras: ["Usar hier, avant-hier, hier soir.", "Usar la semaine dernière, l'année dernière.", "Decir il y a + duración, en 2019, le 3 mai."],
    iconos: ["ic2/reloj-arena", "ic2/libros", "m2d/pensativo"],
    previos: ["El passé composé (lecciones 1 y 2) y la fecha (A1, lección 19)."],
    capacidad: "Ahora puedes decir cuándo pasó cada cosa."
  },
  requiere: R("pca-forma", "pce-verbes", "me2-depuis"), recupera: ["da-forma", "me2-depuis"],
  conceptos: {
    "mp-mots": { n: "hier, avant-hier, la semaine dernière, l'année dernière", b: "voc" },
    "mp-ilya": { n: "il y a + duración; en + año / mes; le + fecha", b: "voc" }
  },
  video: {
    titulo: "Cuándo pasó", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/reloj-arena", grande: "il y a deux ans", seg: [
        { es: "Hola. Para decir cuándo: ayer, la semana pasada, hace dos años." } ] },
      { v: "dos",
        a: { tag: "pasado", fr: "la semaine dernière", es: "la semana pasada" },
        b: { tag: "futuro", fr: "la semaine prochaine", es: "la semana que viene" },
        seg: [ { es: "Pasado:", p: 1 }, { fr: "la semaine dernière", p: 1 }, { es: "Futuro:", p: 2 }, { fr: "la semaine prochaine", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Volví de vacaciones hace tres días.»", o: ["Je suis rentré de vacances il y a trois jours.", "Je suis rentré de vacances dans trois jours."], a: 0,
        bien: "¡Sí! Hace = il y a.", mal: "Dans es dentro de (futuro). Hace = il y a.",
        seg: [ { es: "Pausa. Hace tres días." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["hier", "avant-hier", "hier soir", "le mois dernier", "il y a longtemps", "en 2020"], seg: [
        { es: "Dernier concuerda: l'année dernière.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Desde que llegó", img: "bg-paris", yo: "camila",
    escena: "Hugo le pregunta a Camila por su llegada a Lyon.",
    pj: PJ,
    lineas: [
      ["hugo", "Tu es arrivée à Lyon quand ?", "¿Cuándo llegaste a Lyon?"],
      ["camila", "Je suis arrivée il y a deux semaines. L'année dernière, j'ai commencé l'université.", "Llegué hace dos semanas. El año pasado empecé la universidad."],
      ["hugo", "Et hier soir ?", "¿Y anoche?"],
      ["camila", "Hier soir, on est allés au concert. Et le mois dernier, j'ai déménagé !", "Anoche fuimos al concierto. ¡Y el mes pasado me mudé!"]
    ],
    fijate: "Fíjate: il y a deux semaines, l'année dernière, hier soir, le mois dernier."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "Marcadores de pasado",
      idea: "hier, avant-hier, hier soir, ce matin. la semaine dernière, le mois dernier, l'année dernière (dernier concuerda). il y a + duración = hace. en + año o mes; le + fecha.",
      intro: "Toca cada tarjeta.",
      palabras: [
        { fr: "hier", es: "ayer" },
        { fr: "avant-hier", es: "anteayer" },
        { fr: "hier soir", es: "anoche", ej: ["Hier soir, on est allés au concert.", "Anoche fuimos al concierto."] },
        { fr: "hier matin", es: "ayer por la mañana" },
        { fr: "la semaine dernière", es: "la semana pasada" },
        { fr: "le mois dernier", es: "el mes pasado", ej: ["Le mois dernier, j'ai déménagé.", "El mes pasado me mudé."] },
        { fr: "l'année dernière", es: "el año pasado" },
        { fr: "le week-end dernier", es: "el fin de semana pasado" },
        { fr: "il y a deux semaines", es: "hace dos semanas", ej: ["Je suis arrivée à Lyon il y a deux semaines.", "Llegué a Lyon hace dos semanas."] },
        { fr: "il y a longtemps", es: "hace mucho tiempo" },
        { fr: "en 2019 / en mars", es: "en 2019 / en marzo" },
        { fr: "le 3 mai", es: "el 3 de mayo" }
      ],
      clave: "Futuro: demain, la semaine prochaine, dans un an, après-demain." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["la semaine passée dernière", "la semaine dernière", "Pasada = dernière."], ["Je suis rentré dans trois jours.", "Je suis rentré il y a trois jours.", "Hace = il y a."], ["l'année dernier", "l'année dernière", "Concuerda."]] }
  ],
  ejemplos: [
    { sit: "«Empecé francés hace dos años.»", resp: "J'ai commencé le français il y a deux ans.", pasos: ["il y a + duración."], porque: "Hace." },
    { sit: "«El año pasado empecé la universidad.»", resp: "L'année dernière, j'ai commencé l'université.", pasos: ["l'année dernière."], porque: "Femenino." },
    { sit: "«Se fue hace una hora.»", resp: "Il est parti il y a une heure.", pasos: ["il y a une heure."], porque: "Hace." }
  ],
  comprueba: [
    { q: "«il y a trois jours» significa…", o: ["hace tres días", "dentro de tres días"], a: 0, b: "voc", porque: "Pasado." },
    { q: "«avant-hier» es…", o: ["anteayer", "pasado mañana"], a: 0, b: "voc", porque: "Pasado." },
    { q: "Con année, pasado se dice…", o: ["dernière", "dernier"], a: 0, b: "voc", porque: "Concuerda." }
  ],
  practica: [
    { fase: "guiada", c: ["mp-ilya"], k: "choice", ask: "«hace tres días»", q: "«___»", o: ["il y a trois jours", "dans trois jours", "depuis trois jours"], a: 0, pista: "Hace.", why: "<b>il y a</b>." },
    { fase: "guiada", c: ["mp-mots"], k: "choice", ask: "«el año pasado»", q: "«___»", o: ["l'année dernière", "l'année prochaine", "l'année dernier"], a: 0, pista: "Concuerda.", why: "<b>l'année dernière</b>." },
    { fase: "guiada", c: ["mp-mots"], k: "sort", ask: "¿Pasado o futuro?", q: "Clasifica.", cats: ["Pasado", "Futuro"], items: [["hier", 0], ["la semaine dernière", 0], ["il y a un an", 0], ["avant-hier", 0], ["demain", 1], ["la semaine prochaine", 1], ["dans un an", 1], ["après-demain", 1]], pista: "dans = dentro de.", why: "Marcadores." },
    { fase: "indep", c: ["mp-mots"], k: "fill", ask: "Escribe «pasado».", q: "Le mois ___ , j'ai déménagé.", acc: ["dernier"], why: "<b>dernier</b>." },
    { fase: "indep", c: ["mp-ilya"], k: "fill", ask: "Escribe «hace» (tres palabras).", q: "Il est parti ___ une heure.", acc: ["il y a"], why: "<b>il y a</b>." },
    { fase: "indep", c: ["mp-ilya"], k: "spot", ask: "Encuentra el error.", s: "Je suis rentré de vacances [dans] trois jours .", fix: "il y a", why: "<b>il y a</b>." },
    { fase: "aplica", c: ["mp-mots"], k: "match", ask: "Une cada marcador.", q: "Francés → español", pairs: [["avant-hier", "anteayer"], ["hier matin", "ayer por la mañana"], ["le week-end dernier", "el fin de semana pasado"], ["il y a longtemps", "hace mucho tiempo"]], why: "Marcadores." },
    { fase: "aplica", c: ["mp-mots"], k: "choice", ask: "«Anoche fuimos al concierto.»", q: "«___ , on est allés au concert.»", o: ["Hier soir", "Ce soir", "Demain soir"], a: 0, why: "<b>Hier soir</b>." },
    { fase: "dominio", c: ["mp-ilya"], k: "choice", es: true, say: "Je suis arrivée à Lyon il y a deux semaines.", ask: "Escucha. ¿Cuándo llegó?", q: "Elige.", o: ["Hace dos semanas", "Dentro de dos semanas", "Hace dos meses"], a: 0, why: "<b>il y a deux semaines</b>." },
    { fase: "dominio", c: ["mp-ilya"], k: "order", ask: "Ordena: «Empecé francés hace dos años».", tokens: ["J'ai commencé", "le français", "il y a", "deux ans."], why: "<b>J'ai commencé le français il y a deux ans.</b>" },
    { fase: "dominio", c: ["mp-mots", "mp-ilya"], k: "listen", say: "L'année dernière, j'ai commencé l'université.", acc: ["L'année dernière, j'ai commencé l'université.", "L'année dernière j'ai commencé l'université."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>L'année dernière, j'ai commencé l'université.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Lyon"], previo: ["arrivée", "quand", "deux", "semaines", "commencé", "université", "l'université", "allés", "concert", "déménagé", "parti", "heure", "rentré", "vacances", "trois", "jours", "français", "ans", "an", "demain", "après-demain", "prochaine", "dans", "depuis", "on", "est", "ce", "soir"] }
};

E["a2-raconter-weekend"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Raconter son week-end",
  objetivo: {
    que: "Vas a contar tu fin de semana en orden con d'abord, ensuite, puis, enfin, y opinar con c'était.",
    corto: "D'abord… ensuite… enfin.",
    podras: ["Ordenar con d'abord, ensuite, puis, après, enfin.", "Contar con el passé composé.", "Opinar: c'était super, c'était nul."],
    iconos: ["m2d/celebrar", "ic2/libros", "ic2/amigos"],
    previos: ["El passé composé (lecciones 1, 2 y 20) y los marcadores (lección 21)."],
    capacidad: "Ahora puedes contar tu fin de semana el lunes en clase."
  },
  requiere: R("pca-forma", "pca-irreg", "pce-verbes", "pce-accord", "pp2-forme", "mp-mots", "imp-forma"), recupera: ["pca-forma"],
  conceptos: {
    "rw-conn": { n: "d'abord, ensuite, puis, après, enfin", b: "voc" },
    "rw-avis": { n: "c'était super / nul / sympa", b: "voc" }
  },
  video: {
    titulo: "Contar el fin de semana", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/celebrar", grande: "C'était génial !", seg: [
        { es: "Hola. Cuenta en orden, y di qué te pareció." } ] },
      { v: "frase", filas: [
          { nota: "primero", p: 1, partes: [["D'abord, j'ai fait les courses.", "-", 1]] },
          { nota: "luego", p: 2, partes: [["Ensuite, je suis allée au cinéma.", "-", 2]] },
          { nota: "opinión", p: 3, partes: [["C'était génial !", "-", 3]] } ], seg: [
        { es: "Primero hice las compras,", p: 1 }, { es: "luego fui al cine,", p: 2 }, { es: "¡estuvo genial!", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«¡Estuvo súper!»", o: ["C'était super !", "C'est été super !"], a: 0,
        bien: "¡Sí! C'était.", mal: "La opinión sobre el pasado: c'était.",
        seg: [ { es: "Pausa. Estuvo súper." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["d'abord", "ensuite", "puis", "après", "enfin", "c'était…"], seg: [
        { es: "Y para preguntar: Tu as passé un bon week-end ?", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El lunes", img: "bg-universidad", yo: "camila",
    escena: "El lunes en clase, Hugo pregunta por el fin de semana.",
    pj: PJ,
    lineas: [
      ["hugo", "Tu as passé un bon week-end ? Qu'est-ce que tu as fait ?", "¿Pasaste un buen fin de semana? ¿Qué hiciste?"],
      ["camila", "D'abord, j'ai fait les courses. Ensuite, je suis allée au cinéma avec Léa.", "Primero hice las compras. Luego fui al cine con Léa."],
      ["camila", "Puis, nous avons mangé une pizza. Enfin, je suis rentrée à minuit.", "Después comimos una pizza. Por último, volví a medianoche."],
      ["hugo", "C'était sympa ? — C'était génial !", "¿Estuvo chévere? — ¡Estuvo genial!"]
    ],
    fijate: "Fíjate: d'abord, ensuite, puis, enfin + c'était génial."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "Conectores y opinión",
      idea: "d'abord (primero), ensuite / puis (luego), après (después), enfin / finalement (por último). Verbos en passé composé. Opinión: c'était super / sympa / nul.",
      intro: "Toca cada tarjeta.",
      palabras: [
        { fr: "d'abord", es: "primero", ej: ["D'abord, j'ai fait les courses.", "Primero hice las compras."] },
        { fr: "ensuite", es: "luego", ej: ["Ensuite, je suis allée au cinéma avec Léa.", "Luego fui al cine con Léa."] },
        { fr: "puis", es: "después, luego" },
        { fr: "après", es: "después" },
        { fr: "enfin", es: "por último" },
        { fr: "finalement", es: "finalmente" },
        { fr: "C'était génial !", es: "¡Estuvo genial!" },
        { fr: "C'était sympa.", es: "Estuvo chévere." },
        { fr: "C'était nul.", es: "Estuvo malísimo." },
        { fr: "C'était ennuyeux.", es: "Fue aburrido." },
        { fr: "Je me suis bien amusé.", es: "Me divertí mucho." },
        { fr: "Je me suis ennuyé.", es: "Me aburrí." },
        { fr: "Tu as passé un bon week-end ?", es: "¿Pasaste un buen fin de semana?" },
        { fr: "Quelle journée horrible !", es: "¡Qué día tan horrible!" }
      ],
      clave: "Qu'est-ce que tu as fait ce week-end ? = ¿Qué hiciste el fin de semana?" },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["C'est été super.", "C'était super.", "Opinión: c'était."], ["Dimanche, on a allé au marché.", "Dimanche, on est allés au marché.", "aller: être."]] }
  ],
  ejemplos: [
    { sit: "«Primero desayuné.»", resp: "D'abord, j'ai pris le petit-déjeuner.", pasos: ["D'abord + passé composé."], porque: "Orden." },
    { sit: "«Por último volvimos a casa.»", resp: "Enfin, nous sommes rentrés à la maison.", pasos: ["Enfin."], porque: "Final." },
    { sit: "«¿Qué hiciste el fin de semana?»", resp: "Qu'est-ce que tu as fait ce week-end ?", pasos: ["Qu'est-ce que + tu as fait."], porque: "Pregunta." }
  ],
  comprueba: [
    { q: "«d'abord» significa…", o: ["primero", "de acuerdo"], a: 0, b: "voc", porque: "Orden." },
    { q: "Para opinar sobre el fin de semana se dice…", o: ["c'était", "c'est été"], a: 0, b: "voc", porque: "Imparfait." },
    { q: "«C'était nul» significa…", o: ["Estuvo malísimo.", "No hubo nada."], a: 0, b: "voc", porque: "Negativo." }
  ],
  practica: [
    { fase: "guiada", c: ["rw-conn"], k: "choice", ask: "«Primero desayuné.»", q: "«___ , j'ai pris le petit-déjeuner.»", o: ["D'abord", "Enfin", "Après"], a: 0, pista: "Primero.", why: "<b>D'abord</b>." },
    { fase: "guiada", c: ["rw-conn"], k: "match", ask: "Une cada conector.", q: "Francés → español", pairs: [["d'abord", "primero"], ["ensuite", "luego"], ["après", "después"], ["finalement", "finalmente"]], pista: "d'abord = primero.", why: "Conectores." },
    { fase: "guiada", c: ["rw-avis"], k: "sort", ask: "¿Opinión positiva o negativa?", q: "Clasifica.", cats: ["Positiva", "Negativa"], items: [["C'était super.", 0], ["C'était sympa.", 0], ["Je me suis bien amusé.", 0], ["C'était génial.", 0], ["C'était nul.", 1], ["Je me suis ennuyé.", 1], ["C'était ennuyeux.", 1], ["Quelle journée horrible !", 1]], pista: "nul = malo.", why: "Opiniones." },
    { fase: "indep", c: ["rw-conn"], k: "fill", ask: "Escribe «Por último».", q: "___ , nous sommes rentrés à la maison.", acc: ["Enfin"], why: "<b>Enfin</b>." },
    { fase: "indep", c: ["rw-avis"], k: "choice", ask: "«Estuvo genial.»", q: "«___»", o: ["C'était génial.", "C'est été génial.", "C'était géniale."], a: 0, why: "<b>C'était génial.</b>" },
    { fase: "indep", c: ["rw-conn"], k: "spot", ask: "Encuentra el error.", s: "Dimanche , on [a] allé au marché .", fix: "est", why: "<b>est allé</b>." },
    { fase: "aplica", c: ["rw-conn"], k: "fill", ask: "Escribe el auxiliar.", q: "Samedi, je ___ allée à la plage.", acc: ["suis"], why: "<b>suis</b>." },
    { fase: "aplica", c: ["rw-conn"], k: "order", ask: "Ordena el relato.", tokens: ["D'abord, j'ai dormi.", "Ensuite, j'ai déjeuné.", "Puis, je suis sortie.", "Enfin, je suis rentrée."], why: "d'abord → ensuite → puis → enfin." },
    { fase: "dominio", c: ["rw-avis"], k: "choice", ask: "«¿Qué hiciste el fin de semana?»", q: "«___»", o: ["Qu'est-ce que tu as fait ce week-end ?", "Qu'est-ce que tu fais ce week-end ?", "Qu'est-ce que tu vas faire ce week-end ?"], a: 0, why: "Pasado: <b>tu as fait</b>." },
    { fase: "dominio", c: ["rw-conn"], k: "choice", es: true, say: "Ensuite, je suis allée au cinéma avec Léa.", ask: "Escucha. ¿Qué hizo luego?", q: "Elige.", o: ["Fue al cine con Léa.", "Fue al mercado con Léa.", "Vio a Léa en casa."], a: 0, why: "<b>au cinéma</b>." },
    { fase: "dominio", c: ["rw-conn", "rw-avis"], k: "listen", say: "D'abord, j'ai fait les courses. C'était génial !", acc: ["D'abord, j'ai fait les courses. C'était génial !", "D'abord, j'ai fait les courses. C'était génial!", "D'abord j'ai fait les courses. C'était génial !"], num: false, dict: true, ask: "Escucha y escribe.", why: "Era <b>D'abord, j'ai fait les courses. C'était génial !</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Léa"], previo: ["passé", "bon", "week-end", "qu'est-ce", "fait", "fais", "faire", "vas", "courses", "allée", "cinéma", "avec", "mangé", "pizza", "rentrée", "rentrés", "minuit", "pris", "petit-déjeuner", "maison", "samedi", "dimanche", "plage", "marché", "dormi", "déjeuné", "sortie", "allé", "géniale", "journée", "on", "a", "est"] }
};

E["a2-imparfait-habitudes"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Quand j'étais petit : l'imparfait des habitudes",
  objetivo: {
    que: "Vas a contar las costumbres de tu infancia con el imparfait.",
    corto: "Avant, je jouais tous les jours.",
    podras: ["Conjugar el imparfait completo (avoir, aller, lire…).", "Usar avant, autrefois, d'habitude, chaque été.", "Distinguir costumbre (imparfait) y hecho único (passé composé)."],
    iconos: ["ic2/reloj-arena", "m2d/pensativo", "ic2/corazon"],
    previos: ["El imparfait (lección 3) y el contraste con el passé composé (lección 14)."],
    capacidad: "Ahora puedes contar cómo era tu vida de niño."
  },
  requiere: R("imp-forma", "imp-uso", "pi-decor", "pi-fait"), recupera: ["imp-forma"],
  conceptos: {
    "ih-forme": { n: "imparfait completo: j'avais, nous allions, ils lisaient", b: "gr" },
    "ih-marq": { n: "avant, autrefois, d'habitude, chaque été, tous les jours", b: "gr" }
  },
  video: {
    titulo: "Las costumbres", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/pensativo", grande: "Quand j'étais petit…", seg: [
        { es: "Hola. ¿Qué hacías siempre de niño? Imparfait." } ] },
      { v: "dos",
        a: { tag: "costumbre", fr: "Chaque été, nous partions.", es: "imparfait" },
        b: { tag: "una vez", fr: "En 2010, ils ont déménagé.", es: "passé composé" },
        seg: [ { es: "Lo que se repetía:", p: 1 }, { fr: "Chaque été, nous partions.", p: 1 }, { es: "Lo que pasó una vez:", p: 2 }, { fr: "En 2010, ils ont déménagé.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Cuando era niña, vivía en Cali.»", o: ["Quand elle était enfant, elle habitait à Cali.", "Quand elle était enfant, elle habite à Cali."], a: 0,
        bien: "¡Sí! Habitait.", mal: "Costumbre del pasado: habitait.",
        seg: [ { es: "Pausa. Vivía." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["j'avais", "il avait", "nous avions", "vous aviez", "ils avaient"], seg: [
        { es: "Avoir en imparfait: muy útil para describir.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "En el campo", img: "bg-cafe", yo: "camila",
    escena: "Camila le cuenta a Hugo su infancia.",
    pj: PJ,
    lineas: [
      ["camila", "Quand j'étais petite, j'habitais à la campagne.", "Cuando era pequeña, vivía en el campo."],
      ["hugo", "Et tu avais un portable ?", "¿Y tenías celular?"],
      ["camila", "Non ! Avant, on n'avait pas de portable. Tous les étés, nous allions chez mes grands-parents.", "¡No! Antes no teníamos celular. Todos los veranos íbamos a casa de mis abuelos."],
      ["camila", "Mon grand-père était très drôle. Le soir, il lisait des histoires.", "Mi abuelo era muy chistoso. Por la noche leía cuentos."]
    ],
    fijate: "Fíjate: j'habitais, on n'avait pas, nous allions, il était, il lisait."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "El imparfait de las costumbres",
      idea: "Raíz de nous en presente + -ais, -ais, -ait, -ions, -iez, -aient. être → j'étais. Marcadores: avant, autrefois, d'habitude, tous les jours, chaque été, quand j'étais petit(e).",
      intro: "Toca cada forma.",
      tabla: [["Francés", "Español", "Forma"], [
        ["Quand j'étais petite, j'habitais à la campagne.", "Cuando era pequeña, vivía en el campo.", "être, habiter"],
        ["j'avais / il avait", "tenía", "avoir"],
        ["nous avions / vous aviez / ils avaient", "teníamos / tenían", "avoir"],
        ["Avant, on n'avait pas de portable.", "Antes no teníamos celular.", "negación"],
        ["Tous les étés, nous allions chez mes grands-parents.", "Todos los veranos íbamos donde mis abuelos.", "aller"],
        ["Avant, j'allais au lit à neuf heures.", "Antes me acostaba a las nueve.", "aller"],
        ["Ils lisaient beaucoup.", "Leían mucho.", "lire"],
        ["Mon grand-père était très drôle.", "Mi abuelo era muy chistoso.", "être"],
        ["D'habitude, on mangeait à midi.", "Normalmente comíamos a mediodía.", "manger"],
        ["Chaque été, nous partions.", "Cada verano nos íbamos.", "partir"],
        ["Avant, il fumait.", "Antes fumaba.", "fumer"]
      ]],
      ej: [["Je jouais tous les jours.", "Jugaba todos los días."], ["Un jour, je suis tombé.", "Un día me caí."], ["Hier, j'ai vu Paul.", "Ayer vi a Paul."], ["En 2010, ils ont déménagé.", "En 2010 se mudaron."], ["Ce matin, elle est partie.", "Esta mañana se fue."], ["j'allais", "iba"], ["nous habitions", "vivíamos"], ["elle habitait", "vivía"], ["autrefois", "antes, en otro tiempo"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Quand j'ai été petit…", "Quand j'étais petit…", "Descripción: imparfait."], ["Quand elle était enfant, elle habite à Cali.", "Quand elle était enfant, elle habitait à Cali.", "Pasado: imparfait."], ["nous allons (antes)", "nous allions", "Imparfait: -ions."]] }
  ],
  ejemplos: [
    { sit: "«Antes vivíamos en el campo.»", resp: "Avant, nous habitions à la campagne.", pasos: ["nous → -ions."], porque: "Costumbre." },
    { sit: "«Mi abuelo era muy chistoso.»", resp: "Mon grand-père était très drôle.", pasos: ["être → était."], porque: "Descripción." },
    { sit: "«Leían mucho.»", resp: "Ils lisaient beaucoup.", pasos: ["nous lisons → lis- + aient."], porque: "Hábito." }
  ],
  comprueba: [
    { q: "«Chaque été, nous partions» es…", o: ["una costumbre", "un hecho único"], a: 0, b: "gr", porque: "Se repetía." },
    { q: "El imparfait de avoir con ils es…", o: ["avaient", "ont eu"], a: 0, b: "gr", porque: "-aient." },
    { q: "«autrefois» significa…", o: ["antes, en otro tiempo", "otra vez"], a: 0, b: "gr", porque: "Marcador." }
  ],
  practica: [
    { fase: "guiada", c: ["ih-forme"], k: "choice", ask: "«Cuando era pequeño…»", q: "«___»", o: ["Quand j'étais petit…", "Quand j'ai été petit…", "Quand je suis petit…"], a: 0, pista: "Descripción.", why: "<b>j'étais</b>." },
    { fase: "guiada", c: ["ih-forme"], k: "choice", ask: "«Íbamos al parque todos los días.»", q: "«Nous ___ au parc tous les jours.»", o: ["allions", "allons", "sommes allés"], a: 0, pista: "nous → -ions.", why: "<b>allions</b>." },
    { fase: "guiada", c: ["ih-forme"], k: "match", ask: "Une cada sujeto con avoir en imparfait.", q: "Sujeto → forma", pairs: [["j'", "avais"], ["il", "avait"], ["nous", "avions"], ["vous", "aviez"], ["ils", "avaient"]], pista: "-ais, -ait…", why: "avoir." },
    { fase: "indep", c: ["ih-forme"], k: "fill", ask: "Escribe lire en imparfait (ils).", q: "Ils ___ beaucoup.", acc: ["lisaient"], why: "<b>lisaient</b>." },
    { fase: "indep", c: ["ih-forme"], k: "fill", ask: "Escribe être en imparfait (il).", q: "Mon grand-père ___ très drôle.", acc: ["était"], why: "<b>était</b>." },
    { fase: "indep", c: ["ih-forme"], k: "spot", ask: "Encuentra el error.", s: "Quand elle était enfant , elle [habite] à Cali .", fix: "habitait", why: "<b>habitait</b>." },
    { fase: "aplica", c: ["ih-marq"], k: "sort", ask: "¿Costumbre o acción puntual?", q: "Clasifica.", cats: ["Costumbre (imparfait)", "Acción puntual (passé composé)"], items: [["Je jouais tous les jours.", 0], ["D'habitude, on mangeait à midi.", 0], ["Chaque été, nous partions.", 0], ["Avant, il fumait.", 0], ["Un jour, je suis tombé.", 1], ["Hier, j'ai vu Paul.", 1], ["En 2010, ils ont déménagé.", 1], ["Ce matin, elle est partie.", 1]], why: "Dos usos." },
    { fase: "aplica", c: ["ih-forme"], k: "fill", ask: "Escribe aller en imparfait (je).", q: "Avant, j'___ au lit à neuf heures.", acc: ["allais"], why: "<b>allais</b>." },
    { fase: "dominio", c: ["ih-marq"], k: "choice", ask: "«Antes no teníamos celular.»", q: "«Avant, on ___ de portable.»", o: ["n'avait pas", "n'a pas eu", "n'avons pas"], a: 0, why: "<b>n'avait pas</b>." },
    { fase: "dominio", c: ["ih-forme"], k: "order", ask: "Ordena: «Antes vivíamos en el campo».", tokens: ["Avant,", "nous habitions", "à la campagne."], why: "<b>Avant, nous habitions à la campagne.</b>" },
    { fase: "dominio", c: ["ih-forme", "ih-marq"], k: "listen", say: "Tous les étés, nous allions chez mes grands-parents.", acc: ["Tous les étés, nous allions chez mes grands-parents.", "Tous les étés nous allions chez mes grands-parents."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Tous les étés, nous allions chez mes grands-parents.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Cali", "Paul"], previo: ["petite", "petit", "campagne", "portable", "étés", "été", "grands-parents", "grand-père", "très", "drôle", "soir", "histoires", "beaucoup", "lit", "neuf", "heures", "midi", "enfant", "parc", "jours", "jour", "tombé", "vu", "déménagé", "matin", "partie", "allons", "sommes", "allés", "suis", "ai", "été", "a", "eu", "avons"] }
};

E["a2-souvenirs"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Les souvenirs d'enfance",
  objetivo: {
    que: "Vas a contar recuerdos de la infancia con se souvenir de, à l'époque y el vocabulario de la escuela y la casa.",
    corto: "Je me souviens de…",
    podras: ["Decir je me souviens de + nombre.", "Usar à l'époque y mon meilleur souvenir, c'est…", "Nombrar la maîtresse, la récréation, les jouets."],
    iconos: ["ic2/corazon", "ic2/libros", "m2d/pensativo"],
    previos: ["El imparfait de las costumbres (lección 23)."],
    capacidad: "Ahora puedes contar un recuerdo de tu infancia."
  },
  requiere: R("ih-forme", "ih-marq", "imp-forma", "pn-pres"), recupera: ["ih-forme"],
  conceptos: {
    "so-souvenir": { n: "se souvenir de; à l'époque; mon meilleur souvenir", b: "voc" },
    "so-voc": { n: "la maîtresse, la récréation, les jouets, les dessins animés", b: "voc" }
  },
  video: {
    titulo: "Los recuerdos", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/corazon", grande: "Je me souviens…", seg: [
        { es: "Hola. Para recordar: se souvenir de." } ] },
      { v: "dos",
        a: { tag: "error típico", fr: "Je me souviens mon école.", es: "sin de" },
        b: { tag: "correcto", fr: "Je me souviens de mon école.", es: "con de" },
        seg: [ { es: "Así no:", p: 1 }, { fr: "Je me souviens mon école.", p: 1 }, { es: "Siempre con de:", p: 2 }, { fr: "Je me souviens de mon école.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«à l'époque» significa…", o: ["en esa época", "a la hora"], a: 0, es: true,
        bien: "¡Sí!", mal: "À l'époque = en esa época.",
        seg: [ { es: "Pausa. À l'époque." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["la maîtresse", "la récréation", "les jouets", "les dessins animés", "la balançoire", "le cartable"], seg: [
        { es: "Maestra, recreo, juguetes, dibujos animados, columpio y morral.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La escuela", img: "bg-universidad", yo: "camila",
    escena: "Camila y Hugo recuerdan su infancia.",
    pj: PJ,
    lineas: [
      ["hugo", "Tu te souviens de ton école ?", "¿Te acuerdas de tu escuela?"],
      ["camila", "Oui, je me souviens de ma première maîtresse. Elle était très gentille.", "Sí, me acuerdo de mi primera maestra. Era muy amable."],
      ["hugo", "À l'époque, je regardais des dessins animés le mercredi.", "En esa época, veía dibujos animados los miércoles."],
      ["camila", "Mon meilleur souvenir, c'est Noël chez mes grands-parents.", "Mi mejor recuerdo es la Navidad en casa de mis abuelos."]
    ],
    fijate: "Fíjate: je me souviens de, à l'époque, mon meilleur souvenir, c'est…"
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "Recuerdos",
      idea: "se souvenir de: je me souviens de mon école. Mon meilleur souvenir, c'est… À l'époque = en esa época. Vocabulario: l'école primaire, la maîtresse, la récréation, les jouets, les dessins animés.",
      intro: "Toca cada tarjeta.",
      palabras: [
        { fr: "Je me souviens de…", es: "Me acuerdo de…", ej: ["Je me souviens de ma première maîtresse.", "Me acuerdo de mi primera maestra."] },
        { fr: "à l'époque", es: "en esa época", ej: ["À l'époque, il n'y avait pas internet.", "En esa época no había internet."] },
        { fr: "mon meilleur souvenir", es: "mi mejor recuerdo", ej: ["Mon meilleur souvenir, c'est un voyage à la mer.", "Mi mejor recuerdo es un viaje al mar."] },
        { fr: "l'école primaire", es: "la escuela primaria" },
        { fr: "la maîtresse", es: "la maestra" },
        { fr: "la récréation", es: "el recreo" },
        { fr: "le cartable", es: "el morral escolar" },
        { fr: "la cantine", es: "el comedor escolar" },
        { fr: "les jouets", es: "los juguetes" },
        { fr: "les dessins animés", es: "los dibujos animados" },
        { fr: "la balançoire", es: "el columpio" },
        { fr: "la bicyclette", es: "la bicicleta" },
        { fr: "dehors", es: "afuera" },
        { fr: "nous passions", es: "pasábamos", ej: ["À l'époque, nous passions beaucoup de temps dehors.", "En esa época pasábamos mucho tiempo afuera."] }
      ],
      clave: "À l'époque, nous passions beaucoup de temps dehors." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je me souviens mon école.", "Je me souviens de mon école.", "se souvenir de."], ["Je me souviens du ma bicyclette.", "Je me souviens de ma bicyclette.", "de + ma."], ["Je souviens de…", "Je me souviens de…", "Pronominal."]] }
  ],
  ejemplos: [
    { sit: "«Me acuerdo de mi casa.»", resp: "Je me souviens de ma maison.", pasos: ["se souvenir de."], porque: "Con de." },
    { sit: "«En esa época veía dibujos animados.»", resp: "À l'époque, je regardais des dessins animés.", pasos: ["à l'époque + imparfait."], porque: "Costumbre." },
    { sit: "«Mi mejor recuerdo es Navidad con mis abuelos.»", resp: "Mon meilleur souvenir, c'est Noël chez mes grands-parents.", pasos: ["Mon meilleur souvenir, c'est…"], porque: "Recuerdo." }
  ],
  comprueba: [
    { q: "Se souvenir va con…", o: ["de", "à"], a: 0, b: "voc", porque: "se souvenir de." },
    { q: "«les dessins animés» son…", o: ["los dibujos animados", "los diseños animados"], a: 0, b: "voc", porque: "Tele." },
    { q: "«la récréation» es…", o: ["el recreo", "la recreación"], a: 0, b: "voc", porque: "Escuela." }
  ],
  practica: [
    { fase: "guiada", c: ["so-souvenir"], k: "choice", ask: "«Me acuerdo de mi casa.»", q: "«Je me souviens ___ ma maison.»", o: ["de", "à", "du"], a: 0, pista: "se souvenir…", why: "<b>de</b>." },
    { fase: "guiada", c: ["so-voc"], k: "match", ask: "Une cada palabra.", q: "Francés → español", pairs: [["la maîtresse", "la maestra"], ["la récréation", "el recreo"], ["les jouets", "los juguetes"], ["la balançoire", "el columpio"]], pista: "jouets = juguetes.", why: "Infancia." },
    { fase: "guiada", c: ["so-voc"], k: "sort", ask: "¿Escuela o casa?", q: "Clasifica.", cats: ["Escuela", "Casa"], items: [["la maîtresse", 0], ["la récréation", 0], ["le cartable", 0], ["la cantine", 0], ["les jouets", 1], ["ma chambre", 1], ["les repas en famille", 1], ["le jardin", 1]], pista: "cantine = comedor escolar.", why: "Lugares." },
    { fase: "indep", c: ["so-souvenir"], k: "fill", ask: "Escribe la preposición.", q: "Je me souviens ___ mes vacances à la plage.", acc: ["de"], why: "<b>de</b>." },
    { fase: "indep", c: ["so-souvenir"], k: "fill", ask: "Escribe passer en imparfait (nous).", q: "À l'époque, nous ___ beaucoup de temps dehors.", acc: ["passions"], why: "<b>passions</b>." },
    { fase: "indep", c: ["so-souvenir"], k: "spot", ask: "Encuentra el error.", s: "Je me souviens [du] ma première bicyclette .", fix: "de", why: "<b>de</b>." },
    { fase: "aplica", c: ["so-souvenir"], k: "choice", ask: "«En esa época no había internet.»", q: "«___ , il n'y avait pas internet.»", o: ["À l'époque", "À l'heure", "En ce moment"], a: 0, why: "<b>À l'époque</b>." },
    { fase: "aplica", c: ["so-voc"], k: "choice", es: true, say: "À l'époque, je regardais des dessins animés le mercredi.", ask: "Escucha. ¿Qué hacía los miércoles?", q: "Elige.", o: ["Veía dibujos animados.", "Dibujaba animales.", "Iba al recreo."], a: 0, why: "<b>dessins animés</b>." },
    { fase: "dominio", c: ["so-souvenir"], k: "choice", ask: "«Mi mejor recuerdo es un viaje al mar.»", q: "«___ , c'est un voyage à la mer.»", o: ["Mon meilleur souvenir", "Je me souviens", "Ma meilleure souvenir"], a: 0, why: "<b>Mon meilleur souvenir</b>." },
    { fase: "dominio", c: ["so-souvenir"], k: "order", ask: "Ordena: «Me acuerdo de mi primera maestra».", tokens: ["Je me souviens", "de ma", "première", "maîtresse."], why: "<b>Je me souviens de ma première maîtresse.</b>" },
    { fase: "dominio", c: ["so-souvenir", "so-voc"], k: "listen", say: "Mon meilleur souvenir, c'est Noël chez mes grands-parents.", acc: ["Mon meilleur souvenir, c'est Noël chez mes grands-parents.", "Mon meilleur souvenir c'est Noël chez mes grands-parents."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Mon meilleur souvenir, c'est Noël chez mes grands-parents.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Noël"], previo: ["ton", "école", "ma", "première", "gentille", "regardais", "mercredi", "grands-parents", "internet", "voyage", "mer", "maison", "vacances", "plage", "beaucoup", "temps", "chambre", "repas", "famille", "jardin", "heure", "moment", "meilleure", "souvenir", "souviens", "avait", "passer"] }
};

E["a2-venir-de"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Venir de + infinitif : le passé récent",
  objetivo: {
    que: "Vas a decir que algo acaba de pasar con venir de + infinitivo.",
    corto: "Je viens de manger.",
    podras: ["Formar je viens de + infinitivo (d' ante vocal).", "Distinguir venir de + infinitivo y venir de + lugar.", "Oponerlo a aller + infinitivo."],
    iconos: ["ic2/reloj-arena", "m2d/correr", "ic2/bombilla"],
    previos: ["venir (A1, lección 35) y el futur proche (lección 4)."],
    capacidad: "Ahora puedes decir lo que acabas de hacer."
  },
  requiere: R("av2-venir", "fu-proche"), recupera: ["av2-venir", "fu-proche"],
  conceptos: {
    "vd-forme": { n: "venir (presente) + de + infinitivo", b: "gr" },
    "vd-oppose": { n: "venir de (acabo de) / aller (voy a) / venir de + lugar", b: "gr" }
  },
  video: {
    titulo: "Acabar de", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/correr", grande: "Je viens de manger.", seg: [
        { es: "Hola. Acabo de comer: je viens de manger." } ] },
      { v: "dos",
        a: { tag: "acaba de pasar", fr: "Elle vient d'arriver.", es: "pasado reciente" },
        b: { tag: "va a pasar", fr: "Elle va arriver.", es: "futuro próximo" },
        seg: [ { es: "Acaba de llegar:", p: 1 }, { fr: "Elle vient d'arriver.", p: 1 }, { es: "Va a llegar:", p: 2 }, { fr: "Elle va arriver.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Acabo de terminar mis tareas.»", o: ["Je viens de terminer mes devoirs.", "Je viens de terminé mes devoirs."], a: 0,
        bien: "¡Sí! Infinitivo.", mal: "Después de venir de va el infinitivo: terminer.",
        seg: [ { es: "Pausa. Acabo de terminar." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["je viens de", "tu viens de", "il vient de", "nous venons de", "vous venez de", "ils viennent de"], seg: [
        { es: "Y si va un lugar, es procedencia: je viens de Colombie.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "¡Corre!", img: "bg-universidad", yo: "camila",
    escena: "Camila llega tarde a clase.",
    pj: PJ,
    lineas: [
      ["camila", "Le cours a commencé ?", "¿Ya empezó la clase?"],
      ["hugo", "Oui, le cours vient de commencer. Et le prof vient d'arriver.", "Sí, la clase acaba de empezar. Y el profe acaba de llegar."],
      ["camila", "Pff… Je viens de rater le bus !", "Uf… ¡Acabo de perder el bus!"],
      ["hugo", "Je viens de lire ton message. Assieds-toi !", "Acabo de leer tu mensaje. ¡Siéntate!"]
    ],
    fijate: "Fíjate: vient de commencer, vient d'arriver, je viens de rater."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "venir de + infinitivo",
      idea: "venir en presente + de + infinitivo = acabar de. Ante vocal: d'. No confundir con venir de + lugar (procedencia). Lo contrario: aller + infinitivo.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Uso"], [
        ["Je viens de manger.", "Acabo de comer.", "pasado reciente"],
        ["Elle vient de partir.", "Acaba de irse.", "pasado reciente"],
        ["Nous venons d'arriver à Paris.", "Acabamos de llegar a París.", "d' + vocal"],
        ["Le cours vient de commencer.", "La clase acaba de empezar.", "pasado reciente"],
        ["Tu viens de rater le bus !", "¡Acabas de perder el bus!", "pasado reciente"],
        ["Ils viennent de sortir.", "Acaban de salir.", "pasado reciente"],
        ["Il vient de pleuvoir.", "Acaba de llover.", "pasado reciente"],
        ["Je viens de lire ton message.", "Acabo de leer tu mensaje.", "pasado reciente"],
        ["Elle vient de Lyon.", "Viene de Lyon.", "procedencia"],
        ["Je vais rentrer.", "Voy a volver.", "futuro próximo"]
      ]],
      ej: [["Je viens de rentrer.", "Acabo de volver."], ["Il vient d'appeler.", "Acaba de llamar."], ["On vient de finir.", "Acabamos de terminar."], ["Elle vient d'arriver.", "Acaba de llegar."], ["Il va appeler.", "Va a llamar."], ["On va finir.", "Vamos a terminar."], ["Elle va arriver.", "Va a llegar."], ["Vous venez d'arriver ?", "¿Acaban de llegar?"], ["Elles viennent de partir.", "Acaban de irse."], ["terminer", "terminar"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je viens de mangé.", "Je viens de manger.", "Infinitivo."], ["Je viens de terminé.", "Je viens de terminer.", "Infinitivo."], ["Je viens d'arrivé.", "Je viens d'arriver.", "Infinitivo."]] }
  ],
  ejemplos: [
    { sit: "«Acabamos de terminar el examen.»", resp: "Nous venons de finir l'examen.", pasos: ["nous venons + de + finir."], porque: "Reciente." },
    { sit: "«El tren acaba de llegar.»", resp: "Le train vient d'arriver.", pasos: ["vient + d' + arriver."], porque: "Vocal." },
    { sit: "«Ella viene de Lyon.»", resp: "Elle vient de Lyon.", pasos: ["de + lugar = procedencia."], porque: "No es pasado." }
  ],
  comprueba: [
    { q: "«Je viens de manger» significa…", o: ["Acabo de comer.", "Vengo a comer."], a: 0, b: "gr", porque: "Pasado reciente." },
    { q: "Después de venir de va…", o: ["un infinitivo", "un participio"], a: 0, b: "gr", porque: "manger." },
    { q: "«Elle vient de Lyon» expresa…", o: ["procedencia", "pasado reciente"], a: 0, b: "gr", porque: "Lugar." }
  ],
  practica: [
    { fase: "guiada", c: ["vd-forme"], k: "choice", ask: "«Acabo de comer.»", q: "«___»", o: ["Je viens de manger.", "Je viens manger.", "Je vais manger."], a: 0, pista: "venir de.", why: "<b>Je viens de manger.</b>" },
    { fase: "guiada", c: ["vd-forme"], k: "choice", ask: "«Ellos acaban de salir.»", q: "«Ils ___ de sortir.»", o: ["viennent", "venent", "vont"], a: 0, pista: "ils.", why: "<b>viennent</b>." },
    { fase: "guiada", c: ["vd-oppose"], k: "sort", ask: "¿Pasado reciente o futuro próximo?", q: "Clasifica.", cats: ["Pasado reciente", "Futuro próximo"], items: [["Je viens de rentrer.", 0], ["Il vient d'appeler.", 0], ["On vient de finir.", 0], ["Elle vient d'arriver.", 0], ["Je vais rentrer.", 1], ["Il va appeler.", 1], ["On va finir.", 1], ["Elle va arriver.", 1]], pista: "venir de / aller.", why: "Opuestos." },
    { fase: "indep", c: ["vd-forme"], k: "fill", ask: "Escribe venir (nous).", q: "Nous ___ de finir l'examen.", acc: ["venons"], why: "<b>venons</b>." },
    { fase: "indep", c: ["vd-forme"], k: "fill", ask: "Escribe una palabra.", q: "Le film vient ___ commencer.", acc: ["de"], why: "<b>de</b>." },
    { fase: "indep", c: ["vd-forme"], k: "spot", ask: "Encuentra el error.", s: "Je viens de [terminé] mes devoirs .", fix: "terminer", why: "<b>terminer</b>." },
    { fase: "aplica", c: ["vd-oppose"], k: "choice", es: true, say: "Elle vient de Lyon.", ask: "Escucha. ¿Qué significa?", q: "Elige.", o: ["Viene de Lyon.", "Acaba de llegar a Lyon.", "Va a ir a Lyon."], a: 0, why: "Procedencia." },
    { fase: "aplica", c: ["vd-forme"], k: "match", ask: "Une cada frase.", q: "Francés → español", pairs: [["Je viens de lire ton message.", "Acabo de leer tu mensaje."], ["Il vient de pleuvoir.", "Acaba de llover."], ["Vous venez d'arriver ?", "¿Acaban de llegar?"], ["Elles viennent de partir.", "Acaban de irse."]], why: "venir de." },
    { fase: "dominio", c: ["vd-forme"], k: "choice", ask: "«¡Acabas de perder el bus!»", q: "«___»", o: ["Tu viens de rater le bus !", "Tu vas rater le bus !", "Tu viens rater le bus !"], a: 0, why: "<b>viens de rater</b>." },
    { fase: "dominio", c: ["vd-forme"], k: "order", ask: "Ordena: «El tren acaba de llegar».", tokens: ["Le train", "vient", "d'arriver."], why: "<b>Le train vient d'arriver.</b>" },
    { fase: "dominio", c: ["vd-forme", "vd-oppose"], k: "listen", say: "Le cours vient de commencer.", acc: ["Le cours vient de commencer."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Le cours vient de commencer.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paris", "Lyon"], previo: ["cours", "commencé", "commencer", "prof", "arriver", "pff", "rater", "bus", "lire", "ton", "message", "assieds-toi", "manger", "partir", "sortir", "pleuvoir", "rentrer", "appeler", "finir", "examen", "train", "film", "devoirs", "mes", "venent", "vont", "va", "vais"] }
};

E["a2-deja-encore"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Déjà, pas encore, toujours, ne… plus",
  objetivo: {
    que: "Vas a usar déjà / pas encore y toujours / ne… plus, y ponerlos en su sitio.",
    corto: "Déjà ? Pas encore.",
    podras: ["Responder Tu as déjà… ? — Pas encore.", "Decir Je n'habite plus à…", "Poner déjà entre el auxiliar y el participio."],
    iconos: ["ic2/reloj-arena", "m2d/pensativo", "ic2/bombilla"],
    previos: ["La negación en passé composé (lección 19)."],
    capacidad: "Ahora puedes decir lo que ya hiciste y lo que ya no haces."
  },
  requiere: R("pcn-neg", "pca-forma", "y-lieu", "fq-escala"), recupera: ["pcn-neg"],
  conceptos: {
    "de-deja": { n: "déjà ↔ pas encore", b: "gr" },
    "de-plus": { n: "toujours (todavía) ↔ ne… plus (ya no)", b: "gr" }
  },
  video: {
    titulo: "Ya, todavía no, ya no", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/pensativo", grande: "Déjà ? Pas encore.", seg: [
        { es: "Hola. Dos parejas de opuestos." } ] },
      { v: "dos",
        a: { tag: "ya / todavía no", fr: "Tu as déjà mangé ? — Pas encore.", es: "déjà ↔ pas encore" },
        b: { tag: "todavía / ya no", fr: "Tu habites toujours à Lyon ? — Non, je n'habite plus à Lyon.", es: "toujours ↔ ne… plus" },
        seg: [ { es: "Ya, y todavía no:", p: 1 }, { fr: "Tu as déjà mangé ? Pas encore.", p: 1 }, { es: "Todavía, y ya no:", p: 2 }, { fr: "Je n'habite plus à Lyon.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Ya no estoy cansado.»", o: ["Je ne suis plus fatigué.", "Je ne suis plus pas fatigué."], a: 0,
        bien: "¡Sí! Plus reemplaza a pas.", mal: "Plus ocupa el lugar de pas.",
        seg: [ { es: "Pausa. Ya no." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["déjà", "pas encore", "toujours", "ne… plus"], seg: [
        { es: "Toujours también es siempre: mira el contexto.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Noticias", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo se ponen al día.",
    pj: PJ,
    lineas: [
      ["hugo", "Tu as déjà visité Montréal ?", "¿Ya visitaste Montreal?"],
      ["camila", "Oui, j'ai déjà visité Montréal. Et toi, tu as fini ton travail ? — Non, pas encore.", "Sí, ya visité Montreal. ¿Y tú, terminaste tu trabajo? — No, todavía no."],
      ["hugo", "Tu habites toujours à Bogotá ?", "¿Todavía vives en Bogotá?"],
      ["camila", "Non, nous n'habitons plus à Bogotá. Et Paul ? Il ne travaille plus ici.", "No, ya no vivimos en Bogotá. ¿Y Paul? Ya no trabaja aquí."]
    ],
    fijate: "Fíjate: j'ai déjà visité, pas encore, toujours, n'habitons plus."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Dos parejas",
      idea: "déjà (ya) ↔ pas encore (todavía no). toujours (todavía) ↔ ne… plus (ya no). En passé composé, déjà y pas encore van entre el auxiliar y el participio. Plus reemplaza a pas.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Pareja"], [
        ["J'ai déjà visité Montréal.", "Ya visité Montreal.", "déjà"],
        ["J'ai déjà lu ce livre.", "Ya leí este libro.", "déjà"],
        ["Tu as déjà fini ? — Non, pas encore.", "¿Ya terminaste? — No, todavía no.", "pas encore"],
        ["Il n'a pas encore répondu.", "Todavía no ha respondido.", "pas encore"],
        ["Il n'est pas encore arrivé.", "Todavía no ha llegado.", "pas encore"],
        ["Tu habites toujours à Cali ?", "¿Todavía vives en Cali?", "toujours"],
        ["Je ne fume plus.", "Ya no fumo.", "ne… plus"],
        ["Elle ne travaille plus ici.", "Ya no trabaja aquí.", "ne… plus"],
        ["Nous n'habitons plus à Bogotá.", "Ya no vivimos en Bogotá.", "ne… plus"],
        ["Tu joues toujours au foot ? — Non, je n'y joue plus.", "¿Todavía juegas fútbol? — No, ya no.", "toujours / plus"]
      ]],
      ej: [["Il est déjà parti ?", "¿Ya se fue?"], ["Vous habitez toujours ici ?", "¿Todavía viven aquí?"], ["encore", "todavía, otra vez"], ["enfin", "por fin"], ["ne… jamais", "nunca"], ["pas du tout", "para nada"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je ne suis plus pas fatigué.", "Je ne suis plus fatigué.", "plus reemplaza a pas."], ["Je n'ai déjà fini.", "Je n'ai pas encore fini.", "Negación de déjà: pas encore."], ["J'ai visité déjà.", "J'ai déjà visité.", "Entre auxiliar y participio."]] }
  ],
  ejemplos: [
    { sit: "«¿Ya comiste? — Todavía no.»", resp: "Tu as déjà mangé ? — Pas encore.", pasos: ["déjà ↔ pas encore."], porque: "Pareja 1." },
    { sit: "«Ya no fumo.»", resp: "Je ne fume plus.", pasos: ["ne + verbo + plus."], porque: "Pareja 2." },
    { sit: "«¿Todavía vives en Cali?»", resp: "Tu habites toujours à Cali ?", pasos: ["toujours = todavía."], porque: "Pareja 2." }
  ],
  comprueba: [
    { q: "Lo contrario de déjà es…", o: ["pas encore", "ne… plus"], a: 0, b: "gr", porque: "Ya ↔ todavía no." },
    { q: "Lo contrario de toujours (todavía) es…", o: ["ne… plus", "pas encore"], a: 0, b: "gr", porque: "Todavía ↔ ya no." },
    { q: "En passé composé, déjà va…", o: ["entre el auxiliar y el participio", "al final"], a: 0, b: "gr", porque: "J'ai déjà vu." }
  ],
  practica: [
    { fase: "guiada", c: ["de-deja"], k: "choice", ask: "«¿Ya comiste? — Todavía no.»", q: "«Tu as déjà mangé ? — ___»", o: ["Pas encore.", "Déjà.", "Plus."], a: 0, pista: "Todavía no.", why: "<b>Pas encore.</b>" },
    { fase: "guiada", c: ["de-plus"], k: "choice", ask: "«Ya no fumo.»", q: "«___»", o: ["Je ne fume plus.", "Je ne fume pas encore.", "Je fume déjà."], a: 0, pista: "Ya no.", why: "<b>ne… plus</b>." },
    { fase: "guiada", c: ["de-deja", "de-plus"], k: "match", ask: "Une cada pregunta con su respuesta negativa.", q: "Pregunta → respuesta", pairs: [["Tu as déjà fini ?", "Non, pas encore."], ["Tu joues toujours au foot ?", "Non, je n'y joue plus."], ["Il est déjà parti ?", "Non, il n'est pas encore parti."], ["Vous habitez toujours ici ?", "Non, nous n'habitons plus ici."]], pista: "déjà → pas encore.", why: "Parejas." },
    { fase: "indep", c: ["de-deja"], k: "fill", ask: "Escribe «ya».", q: "J'ai ___ lu ce livre, il est super.", acc: ["déjà"], why: "<b>déjà</b>." },
    { fase: "indep", c: ["de-deja"], k: "fill", ask: "Escribe «todavía no» (dos palabras).", q: "Il n'est ___ arrivé.", acc: ["pas encore"], why: "<b>pas encore</b>." },
    { fase: "indep", c: ["de-deja"], k: "spot", ask: "Encuentra el error.", s: "Désolé , je n'ai [déjà] fini mon travail .", fix: "pas encore", why: "<b>pas encore</b>." },
    { fase: "aplica", c: ["de-deja", "de-plus"], k: "sort", ask: "¿Afirmativa o negativa?", q: "Clasifica.", cats: ["Afirmativa", "Negativa"], items: [["déjà", 0], ["toujours", 0], ["encore", 0], ["enfin", 0], ["pas encore", 1], ["ne… plus", 1], ["ne… jamais", 1], ["pas du tout", 1]], why: "Matices." },
    { fase: "aplica", c: ["de-plus"], k: "choice", ask: "«¿Todavía vives en Cali?»", q: "«___»", o: ["Tu habites toujours à Cali ?", "Tu habites déjà à Cali ?", "Tu n'habites plus à Cali ?"], a: 0, why: "<b>toujours</b>." },
    { fase: "dominio", c: ["de-plus"], k: "choice", ask: "«Ya no estoy cansado.»", q: "«___»", o: ["Je ne suis plus fatigué.", "Je ne suis plus pas fatigué.", "Je suis plus fatigué."], a: 0, why: "<b>ne suis plus</b>." },
    { fase: "dominio", c: ["de-plus"], k: "order", ask: "Ordena: «Ya no vivimos en Bogotá».", tokens: ["Nous", "n'habitons", "plus", "à Bogotá."], why: "<b>Nous n'habitons plus à Bogotá.</b>" },
    { fase: "dominio", c: ["de-deja", "de-plus"], k: "listen", say: "Il n'a pas encore répondu.", acc: ["Il n'a pas encore répondu."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Il n'a pas encore répondu.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Montréal", "Bogotá", "Cali", "Paul"], previo: ["visité", "toi", "fini", "ton", "travail", "habites", "habitez", "habitons", "travaille", "ici", "fume", "fatigué", "lu", "ce", "livre", "super", "mangé", "répondu", "arrivé", "parti", "joues", "joue", "foot", "désolé", "mon", "tout", "suis", "y"] }
};

E["a2-depuis-pendant"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Depuis, pendant, il y a : la durée",
  objetivo: {
    que: "Vas a expresar la duración con depuis (sigue), pendant (cerrada) e il y a (hace).",
    corto: "Depuis, pendant o il y a.",
    podras: ["Decir j'étudie le français depuis deux ans.", "Decir j'ai habité à Lyon pendant trois ans.", "Preguntar Depuis quand… ? Pendant combien de temps… ?"],
    iconos: ["ic2/reloj-arena", "m2d/pensativo", "ic2/bombilla"],
    previos: ["El médico: depuis e il y a (lección 17) y los marcadores (lección 21)."],
    capacidad: "Ahora puedes decir cuánto dura o duró algo."
  },
  requiere: R("me2-depuis", "mp-ilya", "pca-forma"), recupera: ["me2-depuis", "mp-ilya"],
  conceptos: {
    "dp-depuis": { n: "depuis + presente: empezó y sigue", b: "gr" },
    "dp-pendant": { n: "pendant: duración cerrada; il y a: hace", b: "gr" }
  },
  video: {
    titulo: "La duración", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/reloj-arena", grande: "depuis · pendant · il y a", seg: [
        { es: "Hola. Tres palabras para el tiempo, tres ideas distintas." } ] },
      { v: "frase", filas: [
          { nota: "sigue", p: 1, partes: [["J'apprends le français depuis un an.", "-", 1]] },
          { nota: "cerrada", p: 2, partes: [["Il a travaillé à Paris pendant cinq ans.", "-", 2]] },
          { nota: "hace", p: 3, partes: [["On s'est rencontrés il y a deux ans.", "-", 3]] } ], seg: [
        { es: "Aprendo francés desde hace un año, y sigo,", p: 1 }, { es: "trabajó en París durante cinco años, y terminó,", p: 2 }, { es: "nos conocimos hace dos años.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Conozco a Marie desde hace diez años.»", o: ["Je connais Marie depuis dix ans.", "Je connais Marie pendant dix ans."], a: 0,
        bien: "¡Sí! Sigue: depuis.", mal: "La amistad sigue: depuis.",
        seg: [ { es: "Pausa. La conozco todavía." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Depuis quand ?", "Depuis combien de temps ?", "Pendant combien de temps ?", "Il y a combien de temps ?"], seg: [
        { es: "Cuatro preguntas para la duración.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "¿Desde cuándo?", img: "bg-cafe", yo: "camila",
    escena: "Hugo entrevista a Camila para el periódico de la universidad.",
    pj: PJ,
    lineas: [
      ["hugo", "Depuis quand est-ce que tu apprends le français ?", "¿Desde cuándo aprendes francés?"],
      ["camila", "J'apprends le français depuis deux ans. J'habite ici depuis six mois.", "Aprendo francés desde hace dos años. Vivo aquí desde hace seis meses."],
      ["hugo", "Et avant ?", "¿Y antes?"],
      ["camila", "J'ai travaillé à Bogotá pendant un an. Je suis arrivée à Lyon il y a six mois.", "Trabajé en Bogotá durante un año. Llegué a Lyon hace seis meses."]
    ],
    fijate: "Fíjate: depuis deux ans (sigue), pendant un an (terminó), il y a six mois (hace)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Tres duraciones",
      idea: "depuis + presente: empezó y sigue (j'habite ici depuis 2020). pendant: duración cerrada (j'ai dormi pendant dix heures). il y a + duración = hace (il est parti il y a dix minutes).",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Uso"], [
        ["J'habite ici depuis trois ans.", "Vivo aquí desde hace tres años.", "depuis"],
        ["Elle travaille dans cette entreprise depuis 2019.", "Trabaja en esta empresa desde 2019.", "depuis"],
        ["Il pleut depuis ce matin.", "Llueve desde esta mañana.", "depuis"],
        ["J'ai étudié pendant deux heures.", "Estudié durante dos horas.", "pendant"],
        ["Nous avons voyagé pendant un mois en Europe.", "Viajamos durante un mes por Europa.", "pendant"],
        ["Il a travaillé à Paris pendant cinq ans.", "Trabajó en París durante cinco años.", "pendant"],
        ["Il est arrivé il y a une heure.", "Llegó hace una hora.", "il y a"],
        ["On s'est rencontrés il y a deux ans.", "Nos conocimos hace dos años.", "il y a"],
        ["Depuis quand ?", "¿Desde cuándo?", "pregunta"],
        ["Depuis combien de temps ?", "¿Desde hace cuánto?", "pregunta"],
        ["Pendant combien de temps ?", "¿Durante cuánto tiempo?", "pregunta"],
        ["Il y a combien de temps ?", "¿Hace cuánto?", "pregunta"]
      ]],
      ej: [["Je te connais depuis longtemps.", "Te conozco desde hace mucho."], ["Elle est malade depuis lundi.", "Está enferma desde el lunes."], ["Je suis arrivé il y a deux jours.", "Llegué hace dos días."], ["On s'est vus il y a un mois.", "Nos vimos hace un mes."], ["Il a téléphoné il y a une heure.", "Llamó hace una hora."], ["J'ai fini il y a cinq minutes.", "Terminé hace cinco minutos."], ["J'ai dormi pendant dix heures.", "Dormí diez horas."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["J'étudie le français il y a deux ans.", "J'étudie le français depuis deux ans.", "Sigue: depuis."], ["Je connais Marie pendant dix ans.", "Je connais Marie depuis dix ans.", "Sigue: depuis."], ["J'ai habité à Lyon depuis trois ans.", "J'ai habité à Lyon pendant trois ans.", "Terminó: pendant."]] }
  ],
  ejemplos: [
    { sit: "«Vivo aquí desde hace tres años.»", resp: "J'habite ici depuis trois ans.", pasos: ["Sigue → depuis + presente."], porque: "Continúa." },
    { sit: "«Estudié durante dos horas.»", resp: "J'ai étudié pendant deux heures.", pasos: ["Terminó → pendant."], porque: "Cerrada." },
    { sit: "«Llegó hace una hora.»", resp: "Il est arrivé il y a une heure.", pasos: ["Momento → il y a."], porque: "Hace." }
  ],
  comprueba: [
    { q: "Si la acción continúa hoy se usa…", o: ["depuis", "pendant"], a: 0, b: "gr", porque: "Sigue." },
    { q: "Una duración terminada usa…", o: ["pendant", "depuis"], a: 0, b: "gr", porque: "Cerrada." },
    { q: "Hace dos días se dice…", o: ["il y a deux jours", "depuis deux jours"], a: 0, b: "gr", porque: "Momento." }
  ],
  practica: [
    { fase: "guiada", c: ["dp-depuis"], k: "choice", ask: "«Vivo aquí desde hace tres años.»", q: "«J'habite ici ___ trois ans.»", o: ["depuis", "pendant", "il y a"], a: 0, pista: "Sigue.", why: "<b>depuis</b>." },
    { fase: "guiada", c: ["dp-pendant"], k: "choice", ask: "«Estudié durante dos horas.»", q: "«J'ai étudié ___ deux heures.»", o: ["pendant", "depuis", "il y a"], a: 0, pista: "Cerrada.", why: "<b>pendant</b>." },
    { fase: "guiada", c: ["dp-depuis", "dp-pendant"], k: "sort", ask: "¿depuis o il y a?", q: "Clasifica.", cats: ["depuis", "il y a"], items: [["J'habite ici … 2020.", 0], ["Je te connais … longtemps.", 0], ["Il pleut … ce matin.", 0], ["Elle est malade … lundi.", 0], ["Je suis arrivé … deux jours.", 1], ["On s'est vus … un mois.", 1], ["Il a téléphoné … une heure.", 1], ["J'ai fini … cinq minutes.", 1]], pista: "¿Sigue o fue un momento?", why: "Duración o momento." },
    { fase: "indep", c: ["dp-depuis"], k: "fill", ask: "Escribe la palabra.", q: "Elle travaille dans cette entreprise ___ 2019.", acc: ["depuis"], why: "<b>depuis</b>." },
    { fase: "indep", c: ["dp-pendant"], k: "fill", ask: "Escribe la palabra.", q: "Nous avons voyagé ___ un mois en Europe.", acc: ["pendant"], why: "<b>pendant</b>." },
    { fase: "indep", c: ["dp-depuis"], k: "spot", ask: "Encuentra el error.", s: "Je connais Marie [pendant] dix ans , c'est ma meilleure amie .", fix: "depuis", why: "<b>depuis</b>." },
    { fase: "aplica", c: ["dp-depuis", "dp-pendant"], k: "match", ask: "Une cada pregunta.", q: "Francés → español", pairs: [["Depuis quand ?", "¿Desde cuándo?"], ["Depuis combien de temps ?", "¿Desde hace cuánto?"], ["Pendant combien de temps ?", "¿Durante cuánto tiempo?"], ["Il y a combien de temps ?", "¿Hace cuánto?"]], why: "Preguntas." },
    { fase: "aplica", c: ["dp-pendant"], k: "choice", ask: "«Llegó hace una hora.»", q: "«Il est arrivé ___ une heure.»", o: ["il y a", "depuis", "pendant"], a: 0, why: "<b>il y a</b>." },
    { fase: "dominio", c: ["dp-depuis"], k: "choice", es: true, say: "J'apprends le français depuis un an.", ask: "Escucha. ¿Todavía aprende francés?", q: "Elige.", o: ["Sí, desde hace un año.", "No, aprendió durante un año.", "Empezó hace un año y lo dejó."], a: 0, why: "<b>depuis</b>: sigue." },
    { fase: "dominio", c: ["dp-depuis"], k: "order", ask: "Ordena: «¿Desde cuándo aprendes francés?».", tokens: ["Depuis quand", "est-ce que", "tu apprends", "le français ?"], why: "<b>Depuis quand est-ce que tu apprends le français ?</b>" },
    { fase: "dominio", c: ["dp-depuis", "dp-pendant"], k: "listen", say: "Il a travaillé à Paris pendant cinq ans.", acc: ["Il a travaillé à Paris pendant cinq ans.", "Il a travaillé à Paris pendant 5 ans."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Il a travaillé à Paris pendant cinq ans.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Marie", "Bogotá", "Lyon", "Paris", "Europe"], previo: ["apprends", "français", "habite", "ici", "six", "mois", "avant", "travaillé", "arrivée", "trois", "ans", "travaille", "cette", "entreprise", "pleut", "matin", "étudié", "deux", "heures", "voyagé", "mois", "cinq", "arrivé", "heure", "rencontrés", "connais", "longtemps", "malade", "lundi", "jours", "vus", "téléphoné", "fini", "minutes", "dormi", "dix", "meilleure", "amie", "est-ce", "2019", "2020"] }
};

E["a2-biographie"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Raconter une vie : naître, grandir, mourir",
  objetivo: {
    que: "Vas a contar la vida de una persona: nacer, crecer, estudiar, casarse, morir, con fechas.",
    corto: "Il est né en 1802…",
    podras: ["Usar naître, mourir, se marier con être.", "Usar grandir, faire des études, avoir des enfants con avoir.", "Dar fechas: en 1927, à l'âge de 83 ans."],
    iconos: ["ic2/libros", "ic2/reloj-arena", "ic2/pergamino"],
    previos: ["El passé composé con être (lección 2) y los marcadores (lección 21)."],
    capacidad: "Ahora puedes presentar la vida de un personaje famoso."
  },
  requiere: R("pce-verbes", "pce-accord", "pp2-forme", "mp-ilya", "pi2-is"), recupera: ["pce-verbes"],
  conceptos: {
    "bi-verbes": { n: "naître, mourir, se marier (être) / grandir, étudier (avoir)", b: "voc" },
    "bi-dates": { n: "en 1802, à l'âge de 20 ans, au XIXe siècle", b: "voc" }
  },
  video: {
    titulo: "Una vida", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/pergamino", grande: "Il est né en 1927.", seg: [
        { es: "Hola. Nacer y morir van con être." } ] },
      { v: "frase", filas: [
          { nota: "nacer", p: 1, partes: [["García Márquez est né à Aracataca en 1927.", "-", 1]] },
          { nota: "crecer", p: 2, partes: [["Il a grandi chez ses grands-parents.", "-", 2]] },
          { nota: "morir", p: 3, partes: [["Il est mort à l'âge de 87 ans.", "-", 3]] } ], seg: [
        { es: "Nació en Aracataca en 1927,", p: 1 }, { es: "creció donde sus abuelos,", p: 2 }, { es: "murió a los 87 años.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Frida Kahlo nació en México.»", o: ["Frida Kahlo est née à Mexico.", "Frida Kahlo a né à Mexico."], a: 0,
        bien: "¡Sí! Être y concordancia.", mal: "Naître va con être: est née.",
        seg: [ { es: "Pausa. Nació." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["naître", "grandir", "faire des études", "se marier", "devenir", "mourir"], seg: [
        { es: "Con fechas: en 1802, a los 30 años.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Victor Hugo", img: "bg-paris", yo: "camila",
    escena: "Camila presenta a Victor Hugo en clase.",
    pj: PJ,
    lineas: [
      ["camila", "Victor Hugo est né à Besançon en 1802.", "Victor Hugo nació en Besanzón en 1802."],
      ["camila", "Il a grandi à Paris et il a fait des études de droit.", "Creció en París y estudió Derecho."],
      ["camila", "Il s'est marié en 1822 et il a eu cinq enfants. Il est devenu très célèbre.", "Se casó en 1822 y tuvo cinco hijos. Llegó a ser muy famoso."],
      ["sofia", "Et il est mort à quel âge ? — Il est mort en 1885, à l'âge de 83 ans.", "¿Y a qué edad murió? — Murió en 1885, a los 83 años."]
    ],
    fijate: "Fíjate: est né, a grandi, s'est marié, est devenu, est mort."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "Las etapas de una vida",
      idea: "Con être: naître (né), mourir (mort), devenir (devenu), se marier. Con avoir: grandir, faire des études, avoir des enfants, écrire. Fechas: en 1802, le 26 février 1802, à l'âge de 30 ans, au XIXe siècle.",
      intro: "Toca cada tarjeta.",
      palabras: [
        { fr: "naître → il est né", es: "nacer → nació", ej: ["Gabriel García Márquez est né à Aracataca en 1927.", "García Márquez nació en Aracataca en 1927."] },
        { fr: "grandir → il a grandi", es: "crecer → creció", ej: ["Elle a grandi à Montréal.", "Creció en Montreal."] },
        { fr: "faire des études de droit", es: "estudiar Derecho" },
        { fr: "se marier → ils se sont mariés", es: "casarse → se casaron" },
        { fr: "avoir des enfants → il a eu trois enfants", es: "tener hijos → tuvo tres hijos" },
        { fr: "devenir → il est devenu", es: "llegar a ser → llegó a ser" },
        { fr: "mourir → il est mort", es: "morir → murió", ej: ["Il est mort à l'âge de 83 ans.", "Murió a los 83 años."] },
        { fr: "en 1802", es: "en 1802" },
        { fr: "à l'âge de 25 ans", es: "a los 25 años" },
        { fr: "au XIXe siècle", es: "en el siglo XIX" },
        { fr: "plus tard", es: "más tarde" },
        { fr: "quelques années après", es: "unos años después" },
        { fr: "à la fin de sa vie", es: "al final de su vida" }
      ],
      clave: "Con être, concordancia: elle est née, elle est morte." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Il a né en 1990.", "Il est né en 1990.", "naître: être."], ["Frida Kahlo est né à Mexico.", "Frida Kahlo est née à Mexico.", "Concuerda."], ["Il a mort en 2014.", "Il est mort en 2014.", "mourir: être."]] }
  ],
  ejemplos: [
    { sit: "«Nació en 1998.»", resp: "Il est né en 1998.", pasos: ["être + né."], porque: "naître." },
    { sit: "«Murió en 2014.»", resp: "Il est mort en 2014.", pasos: ["être + mort."], porque: "mourir." },
    { sit: "«Se casaron en 2010.»", resp: "Ils se sont mariés en 2010.", pasos: ["Pronominal → être + s."], porque: "Plural." }
  ],
  comprueba: [
    { q: "Naître y mourir van con…", o: ["être", "avoir"], a: 0, b: "voc", porque: "Movimiento de la vida." },
    { q: "Grandir va con…", o: ["avoir", "être"], a: 0, b: "voc", porque: "il a grandi." },
    { q: "«à l'âge de 25 ans» significa…", o: ["a los 25 años", "hace 25 años"], a: 0, b: "voc", porque: "Edad." }
  ],
  practica: [
    { fase: "guiada", c: ["bi-verbes"], k: "choice", ask: "«Nació en 1998.»", q: "«___ en 1998.»", o: ["Il est né", "Il a né", "Il est naît"], a: 0, pista: "être.", why: "<b>Il est né</b>." },
    { fase: "guiada", c: ["bi-verbes"], k: "match", ask: "Une cada verbo.", q: "Francés → español", pairs: [["naître", "nacer"], ["grandir", "crecer"], ["se marier", "casarse"], ["mourir", "morir"], ["devenir", "llegar a ser"]], pista: "grandir = crecer.", why: "Verbos de la vida." },
    { fase: "guiada", c: ["bi-verbes"], k: "sort", ask: "¿Con être o con avoir?", q: "Clasifica.", cats: ["être", "avoir"], items: [["naître", 0], ["mourir", 0], ["se marier", 0], ["devenir", 0], ["grandir", 1], ["étudier", 1], ["avoir des enfants", 1], ["écrire des livres", 1]], pista: "naître, mourir: être.", why: "Auxiliares." },
    { fase: "indep", c: ["bi-verbes"], k: "fill", ask: "Escribe «nacida».", q: "Elle est ___ à Bogotá.", acc: ["née"], why: "<b>née</b>." },
    { fase: "indep", c: ["bi-verbes"], k: "fill", ask: "Escribe el participio de se marier (ils).", q: "Ils se sont ___ en 2010.", acc: ["mariés"], why: "<b>mariés</b>." },
    { fase: "indep", c: ["bi-verbes"], k: "spot", ask: "Encuentra el error.", s: "Frida Kahlo est [né] à Mexico en 1907 .", fix: "née", why: "<b>née</b>." },
    { fase: "aplica", c: ["bi-dates"], k: "choice", ask: "«a los 25 años»", q: "«___»", o: ["à l'âge de 25 ans", "il y a 25 ans", "pendant 25 ans"], a: 0, why: "<b>à l'âge de</b>." },
    { fase: "aplica", c: ["bi-dates"], k: "choice", es: true, say: "Il est mort en 1885, à l'âge de 83 ans.", ask: "Escucha. ¿A qué edad murió?", q: "Elige.", o: ["A los 83 años", "A los 85 años", "En 1883"], a: 0, why: "<b>83 ans</b>." },
    { fase: "dominio", c: ["bi-verbes", "bi-dates"], k: "order", ask: "Ordena la biografía.", tokens: ["Il est né en 1802.", "Il a fait des études de droit.", "Il s'est marié.", "Il est mort en 1885."], why: "Nacer → estudiar → casarse → morir." },
    { fase: "dominio", c: ["bi-verbes"], k: "choice", ask: "«Llegó a ser muy famoso.»", q: "«Il ___ très célèbre.»", o: ["est devenu", "a devenu", "est devenue"], a: 0, why: "<b>est devenu</b>." },
    { fase: "dominio", c: ["bi-verbes", "bi-dates"], k: "listen", say: "Victor Hugo est né à Besançon en 1802.", acc: ["Victor Hugo est né à Besançon en 1802."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Victor Hugo est né à Besançon en 1802.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "Victor Hugo", "Victor", "Hugo", "Besançon", "Paris", "Gabriel", "García", "Márquez", "Aracataca", "Frida", "Kahlo", "Mexico", "Montréal", "Bogotá"], previo: ["droit", "cinq", "enfants", "très", "célèbre", "quel", "âge", "ans", "études", "livres", "écrire", "étudier", "grandi", "devenu", "devenue", "naît", "a", "1802", "1822", "1885", "1907", "1927", "1998", "2010", "2014", "83", "85", "87", "25", "1883"] }
};

E["a2-accord-etre-pluriel"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "L'accord du participe avec être",
  objetivo: {
    que: "Vas a concordar el participio con être en las cuatro formas: parti, partie, partis, parties.",
    corto: "Elles sont parties.",
    podras: ["Añadir -e, -s o -es según el sujeto.", "Usar el masculino plural para grupos mixtos.", "Concordar con nous y vous según quién habla."],
    iconos: ["ic2/lapiz", "ic2/amigos", "ic2/bombilla"],
    previos: ["El passé composé con être (lección 2)."],
    capacidad: "Ahora escribes el passé composé con être sin errores."
  },
  requiere: R("pce-verbes", "pce-accord", "bi-verbes"), recupera: ["pce-accord"],
  conceptos: {
    "ae2-forme": { n: "+ e, + s, + es según el sujeto", b: "gr" },
    "ae2-mixte": { n: "grupo mixto → masculino plural; nous / vous", b: "gr" }
  },
  video: {
    titulo: "La concordancia con être", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "parti · partie · partis · parties", seg: [
        { es: "Hola. Con être, el participio es como un adjetivo." } ] },
      { v: "frase", filas: [
          { nota: "él", p: 1, partes: [["il est parti", "-", 1]] },
          { nota: "ella", p: 2, partes: [["elle est partie", "-", 2]] },
          { nota: "ellos", p: 3, partes: [["ils sont partis", "-", 3]] },
          { nota: "ellas", p: 4, partes: [["elles sont parties", "-", 4]] } ], seg: [
        { es: "Él, sin nada;", p: 1 }, { es: "ella, más e;", p: 2 }, { es: "ellos, más s;", p: 3 }, { es: "ellas, más e s.", p: 4 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Paul y Ana se fueron.»", o: ["Paul et Ana sont partis.", "Paul et Ana sont parties."], a: 0,
        bien: "¡Sí! Mixto: masculino plural.", mal: "Un grupo mixto va en masculino plural.",
        seg: [ { es: "Pausa. Un hombre y una mujer." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["partie", "partis", "parties", "Paul et Ana sont partis."], seg: [
        { es: "Con nous y vous, mira quién habla.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La fiesta de Camila", img: "bg-cafe", yo: "camila",
    escena: "Camila cuenta quién vino a su fiesta.",
    pj: PJ,
    lineas: [
      ["camila", "Mes amies sont venues à ma fête. Elles sont arrivées en retard !", "Mis amigas vinieron a mi fiesta. ¡Llegaron tarde!"],
      ["hugo", "Et ta mère ?", "¿Y tu mamá?"],
      ["camila", "Ma mère est sortie. Mon frère et ma sœur sont restés à la maison.", "Mi mamá salió. Mi hermano y mi hermana se quedaron en casa."],
      ["hugo", "Paul et Ana sont partis à minuit.", "Paul y Ana se fueron a medianoche."]
    ],
    fijate: "Fíjate: venues, arrivées (ellas), sortie (ella), restés, partis (mixto)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Las cuatro formas",
      idea: "Femenino: + e. Masculino plural: + s. Femenino plural: + es. Grupo mixto: masculino plural. Con nous / vous, concuerda con quién es: nous sommes restées (solo mujeres).",
      intro: "Toca cada forma.",
      tabla: [["Francés", "Español", "Forma"], [
        ["il est parti", "se fue (él)", "—"],
        ["elle est partie", "se fue (ella)", "+ e"],
        ["ils sont partis", "se fueron (ellos)", "+ s"],
        ["elles sont parties", "se fueron (ellas)", "+ es"],
        ["Ma mère est sortie.", "Mi mamá salió.", "+ e"],
        ["Elles sont arrivées en retard.", "Llegaron tarde (ellas).", "+ es"],
        ["Mes amies sont venues à ma fête.", "Mis amigas vinieron a mi fiesta.", "+ es"],
        ["Paul et Ana sont partis.", "Paul y Ana se fueron.", "mixto: + s"],
        ["Mon frère et ma sœur sont nés à Cali.", "Mi hermano y mi hermana nacieron en Cali.", "mixto: + s"],
        ["Nous sommes restées à la maison.", "Nos quedamos en casa (nosotras).", "nous fem.: + es"],
        ["Mes amies sont restées à l'hôtel.", "Mis amigas se quedaron en el hotel.", "+ es"]
      ]],
      ej: [["elle est née", "nació"], ["elle est tombée", "se cayó"], ["Marie est montée", "Marie subió"], ["ma sœur est entrée", "mi hermana entró"], ["ils sont nés", "nacieron"], ["ils sont tombés", "se cayeron"], ["mes parents sont montés", "mis padres subieron"], ["les garçons sont entrés", "los muchachos entraron"], ["mes cousines", "mis primas"], ["nous sommes restés", "nos quedamos"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Elles sont parti.", "Elles sont parties.", "+ es."], ["Mes parents sont arrivé.", "Mes parents sont arrivés.", "+ s."], ["Paul et Ana sont parties.", "Paul et Ana sont partis.", "Mixto: masculino."]] }
  ],
  ejemplos: [
    { sit: "«Ellas llegaron tarde.»", resp: "Elles sont arrivées en retard.", pasos: ["elles → + es."], porque: "Fem. plural." },
    { sit: "«Mi mamá salió.»", resp: "Ma mère est sortie.", pasos: ["elle → + e."], porque: "Femenino." },
    { sit: "«Nosotros (mis hermanos y yo) nos quedamos en casa.»", resp: "Nous sommes restés à la maison.", pasos: ["Grupo mixto → + s."], porque: "Mixto." }
  ],
  comprueba: [
    { q: "Con elles, el participio lleva…", o: ["+ es", "+ s"], a: 0, b: "gr", porque: "Fem. plural." },
    { q: "Un grupo de hombres y mujeres lleva…", o: ["+ s (masculino)", "+ es"], a: 0, b: "gr", porque: "Mixto." },
    { q: "Con avoir (elle a mangé), el participio…", o: ["no concuerda con el sujeto", "concuerda"], a: 0, b: "gr", porque: "Solo con être." }
  ],
  practica: [
    { fase: "guiada", c: ["ae2-forme"], k: "choice", ask: "«Ellas llegaron tarde.»", q: "«Elles sont ___ en retard.»", o: ["arrivées", "arrivés", "arrivé"], a: 0, pista: "+ es.", why: "<b>arrivées</b>." },
    { fase: "guiada", c: ["ae2-mixte"], k: "choice", ask: "«Paul y Ana se fueron.»", q: "«Paul et Ana sont ___ .»", o: ["partis", "parties", "parti"], a: 0, pista: "Mixto.", why: "<b>partis</b>." },
    { fase: "guiada", c: ["ae2-forme"], k: "match", ask: "Une cada sujeto con su participio.", q: "Sujeto → forma", pairs: [["il est", "parti"], ["elle est", "partie"], ["ils sont", "partis"], ["elles sont", "parties"]], pista: "+ e, + s, + es.", why: "Cuatro formas." },
    { fase: "indep", c: ["ae2-forme"], k: "fill", ask: "Escribe el participio de venir.", q: "Mes cousines sont ___ hier.", acc: ["venues"], why: "<b>venues</b>." },
    { fase: "indep", c: ["ae2-mixte"], k: "fill", ask: "Escribe rester (mis hermanos y yo).", q: "Nous sommes ___ à la maison.", acc: ["restés"], why: "<b>restés</b>." },
    { fase: "indep", c: ["ae2-forme"], k: "spot", ask: "Encuentra el error.", s: "Mes parents sont [arrivé] à Paris ce matin .", fix: "arrivés", why: "<b>arrivés</b>." },
    { fase: "aplica", c: ["ae2-forme"], k: "sort", ask: "¿Femenino o masculino plural?", q: "Clasifica.", cats: ["Femenino", "Masculino plural"], items: [["elle est née", 0], ["elle est tombée", 0], ["Marie est montée", 0], ["ma sœur est entrée", 0], ["ils sont nés", 1], ["ils sont tombés", 1], ["mes parents sont montés", 1], ["les garçons sont entrés", 1]], why: "Concordancia." },
    { fase: "aplica", c: ["ae2-forme"], k: "choice", ask: "«Mi mamá salió.»", q: "«___»", o: ["Ma mère est sortie.", "Ma mère est sorti.", "Ma mère a sortie."], a: 0, why: "<b>est sortie</b>." },
    { fase: "dominio", c: ["ae2-mixte"], k: "choice", ask: "«Mi hermano y mi hermana nacieron en Cali.»", q: "«Mon frère et ma sœur sont ___ à Cali.»", o: ["nés", "nées", "né"], a: 0, why: "Mixto: <b>nés</b>." },
    { fase: "dominio", c: ["ae2-forme"], k: "order", ask: "Ordena: «Mis amigas se quedaron en el hotel».", tokens: ["Mes amies", "sont", "restées", "à l'hôtel."], why: "<b>Mes amies sont restées à l'hôtel.</b>" },
    { fase: "dominio", c: ["ae2-forme", "ae2-mixte"], k: "listen", say: "Mes amies sont venues à ma fête.", acc: ["Mes amies sont venues à ma fête."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Mes amies sont venues à ma fête.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paul", "Ana", "Marie", "Cali", "Paris"], previo: ["amies", "ma", "fête", "retard", "ta", "mère", "frère", "sœur", "maison", "minuit", "hôtel", "hier", "parents", "matin", "garçons", "a", "mangé", "arrivé", "arrivés", "parti", "nées", "né", "sorti", "mes", "ce"] }
};

E["a2-achats-ligne"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Acheter en ligne : commander, livrer, rembourser",
  objetivo: {
    que: "Vas a comprar por internet y resolver problemas: pedir, entrega, cambio y reembolso.",
    corto: "J'ai commandé en ligne.",
    podras: ["Contar el proceso: ajouter au panier, commander, payer, être livré.", "Explicar un problema: le colis n'est pas arrivé, l'article est abîmé.", "Pedir échanger o être remboursé."],
    iconos: ["ic2/laptop", "ic2/bolsa", "ic2/moneda"],
    previos: ["Las tiendas (A1, lección 37) y correos (A1, lección 39)."],
    capacidad: "Ahora puedes hacer y reclamar una compra en línea."
  },
  requiere: R("pca-forma", "pb-poste", "pz-cond"), recupera: ["pb-poste"],
  conceptos: {
    "al-proc": { n: "le panier, commander, la livraison, livrer", b: "voc" },
    "al-prob": { n: "abîmé, échanger, rembourser, retourner", b: "voc" }
  },
  video: {
    titulo: "Comprar en línea", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/laptop", grande: "le panier", seg: [
        { es: "Hola. Comprar en línea tiene su vocabulario." } ] },
      { v: "frase", filas: [
          { nota: "elegir", p: 1, partes: [["J'ajoute l'article au panier.", "-", 1]] },
          { nota: "pedir", p: 2, partes: [["Je passe commande.", "-", 2]] },
          { nota: "recibir", p: 3, partes: [["Je suis livré.", "-", 3]] } ], seg: [
        { es: "Agrego el artículo al carrito,", p: 1 }, { es: "hago el pedido,", p: 2 }, { es: "me lo entregan.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Pedí un pantalón en línea.»", o: ["J'ai commandé un pantalon en ligne.", "J'ai demandé un pantalon en ligne."], a: 0,
        bien: "¡Sí! Commander.", mal: "Hacer un pedido es commander.",
        seg: [ { es: "Pausa. Pedir en una tienda." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["le panier", "commander", "la livraison", "abîmé", "échanger", "rembourser"], seg: [
        { es: "Si algo falla: cambio o reembolso.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El paquete", img: "bg-cafe", yo: "camila",
    escena: "Camila tiene un problema con un pedido.",
    pj: PJ,
    lineas: [
      ["camila", "J'ai commandé un livre sur internet il y a une semaine.", "Pedí un libro por internet hace una semana."],
      ["hugo", "La livraison prend trois jours, normalement.", "La entrega tarda tres días, normalmente."],
      ["camila", "Oui, mais le colis est arrivé hier et l'article est abîmé !", "Sí, pero el paquete llegó ayer ¡y el artículo está dañado!"],
      ["hugo", "Tu peux le retourner. Écris : « Je voudrais être remboursée. »", "Puedes devolverlo. Escribe: «Quisiera que me devolvieran el dinero.»"]
    ],
    fijate: "Fíjate: j'ai commandé, la livraison, abîmé, le retourner, être remboursée."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "La compra en línea",
      idea: "Proceso: ajouter au panier → passer commande → payer → être livré. Problemas: le colis n'est pas arrivé, l'article est abîmé, ce n'est pas la bonne taille. Soluciones: échanger, retourner, être remboursé.",
      intro: "Toca cada tarjeta.",
      palabras: [
        { fr: "commander", es: "hacer un pedido", ej: ["J'ai commandé un livre sur internet.", "Pedí un libro por internet."] },
        { fr: "le panier", es: "el carrito", ej: ["J'ajoute la veste au panier.", "Agrego la chaqueta al carrito."] },
        { fr: "la commande", es: "el pedido" },
        { fr: "la livraison", es: "la entrega, el envío", ej: ["La livraison est gratuite à partir de 30 euros.", "El envío es gratis desde 30 euros."] },
        { fr: "livrer / être livré", es: "entregar / recibir la entrega" },
        { fr: "le délai", es: "el plazo" },
        { fr: "le colis", es: "el paquete" },
        { fr: "abîmé", es: "dañado" },
        { fr: "la taille", es: "la talla" },
        { fr: "échanger", es: "cambiar" },
        { fr: "retourner un article", es: "devolver un artículo" },
        { fr: "rembourser / être remboursé", es: "reembolsar / recibir el reembolso", ej: ["Je voudrais être remboursée.", "Quisiera que me devolvieran el dinero."] },
        { fr: "en retard", es: "atrasado" }
      ],
      clave: "La livraison prend trois jours. = La entrega tarda tres días." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["J'ai demandé un pantalon en ligne.", "J'ai commandé un pantalon en ligne.", "Pedido: commander."], ["Ma livrance est gratuite.", "Ma livraison est gratuite.", "livraison."]] }
  ],
  ejemplos: [
    { sit: "«Hice un pedido en internet.»", resp: "J'ai commandé sur internet.", pasos: ["commander."], porque: "Pedido." },
    { sit: "El artículo llegó dañado.", resp: "L'article est abîmé.", pasos: ["abîmé."], porque: "Problema." },
    { sit: "Quieres tu dinero.", resp: "Je voudrais être remboursé.", pasos: ["être remboursé."], porque: "Solución." }
  ],
  comprueba: [
    { q: "«le panier» en una tienda en línea es…", o: ["el carrito", "el pan"], a: 0, b: "voc", porque: "Compras." },
    { q: "«la livraison» es…", o: ["la entrega", "el libro"], a: 0, b: "voc", porque: "Envío." },
    { q: "«L'article est abîmé» significa…", o: ["El artículo está dañado.", "El artículo está abierto."], a: 0, b: "voc", porque: "Problema." }
  ],
  practica: [
    { fase: "guiada", c: ["al-proc"], k: "choice", ask: "«Hice un pedido en internet.»", q: "«J'ai ___ sur internet.»", o: ["commandé", "demandé", "livré"], a: 0, pista: "Pedido.", why: "<b>commandé</b>." },
    { fase: "guiada", c: ["al-proc", "al-prob"], k: "match", ask: "Une cada palabra.", q: "Francés → español", pairs: [["le colis", "el paquete"], ["la taille", "la talla"], ["échanger", "cambiar"], ["le délai", "el plazo"]], pista: "colis = paquete.", why: "Vocabulario." },
    { fase: "guiada", c: ["al-prob"], k: "sort", ask: "¿Problema o solución?", q: "Clasifica.", cats: ["Problema", "Solución"], items: [["Le colis n'est pas arrivé.", 0], ["L'article est abîmé.", 0], ["Ce n'est pas ma taille.", 0], ["La commande est en retard.", 0], ["Je voudrais échanger l'article.", 1], ["Je voudrais être remboursé.", 1], ["Vous pouvez le retourner.", 1]], pista: "abîmé = dañado.", why: "Reclamar." },
    { fase: "indep", c: ["al-proc"], k: "fill", ask: "Escribe «carrito».", q: "J'ajoute la veste au ___ .", acc: ["panier"], why: "<b>panier</b>." },
    { fase: "indep", c: ["al-prob"], k: "fill", ask: "Escribe «reembolsado».", q: "Si l'article ne vous plaît pas, vous êtes ___ .", acc: ["remboursé"], why: "<b>remboursé</b>." },
    { fase: "indep", c: ["al-proc"], k: "spot", ask: "Encuentra el error.", s: "Ma [livrance] est gratuite parce que j'ai commandé plus de 30 euros .", fix: "livraison", why: "<b>livraison</b>." },
    { fase: "aplica", c: ["al-proc"], k: "order", ask: "Ordena el proceso de compra.", tokens: ["Je choisis un article.", "Je l'ajoute au panier.", "Je paie.", "Je suis livré."], why: "Elegir → carrito → pagar → recibir." },
    { fase: "aplica", c: ["al-proc"], k: "choice", es: true, say: "La livraison est gratuite à partir de 30 euros.", ask: "Escucha. ¿Cuándo es gratis el envío?", q: "Elige.", o: ["Desde 30 euros", "Hasta 30 euros", "Siempre"], a: 0, why: "<b>à partir de 30 euros</b>." },
    { fase: "dominio", c: ["al-prob"], k: "choice", ask: "Quieres otra talla.", q: "«___»", o: ["Je voudrais échanger l'article.", "Je voudrais commander l'article.", "Je voudrais livrer l'article."], a: 0, why: "<b>échanger</b>." },
    { fase: "dominio", c: ["al-prob"], k: "fill", ask: "Escribe «dañado».", q: "Le colis est arrivé, mais l'article est ___ .", acc: ["abîmé"], why: "<b>abîmé</b>." },
    { fase: "dominio", c: ["al-proc", "al-prob"], k: "listen", say: "J'ai commandé un livre sur internet il y a une semaine.", acc: ["J'ai commandé un livre sur internet il y a une semaine."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>J'ai commandé un livre sur internet il y a une semaine.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["livre", "internet", "semaine", "prend", "trois", "jours", "normalement", "mais", "arrivé", "hier", "article", "l'article", "peux", "écris", "voudrais", "veste", "ajoute", "pantalon", "ligne", "gratuite", "partir", "30", "euros", "choisis", "paie", "plaît", "parce", "plus", "ma", "demandé", "livré", "l'ajoute", "retourner"] }
};

E["a2-soldes"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Les soldes et les magasins : essayer, la taille",
  objetivo: {
    que: "Vas a comprar ropa en la tienda: probarte, pedir talla y número, y decidir.",
    corto: "Je peux l'essayer ?",
    podras: ["Preguntar Je peux essayer ce pull ?", "Decir je fais du 38, quelle pointure ?", "Opinar: ça me va bien, c'est trop grand."],
    iconos: ["ic2/bolsa", "ic2/moneda", "m2d/senalar"],
    previos: ["La ropa (A1, lecciones 14 y 48) y el COD (lección 9)."],
    capacidad: "Ahora puedes comprar ropa en las rebajas."
  },
  requiere: R("cod-forma", "cod-place", "al-proc"), recupera: ["de-tienda", "vc-accord"],
  conceptos: {
    "sd-essayer": { n: "essayer, la cabine d'essayage, la taille, la pointure", b: "voc" },
    "sd-avis": { n: "ça me va bien / c'est trop grand; les soldes", b: "voc" }
  },
  video: {
    titulo: "En la tienda", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/bolsa", grande: "Je peux l'essayer ?", seg: [
        { es: "Hola. Las rebajas en Francia son en enero y en julio." } ] },
      { v: "dos",
        a: { tag: "ropa", fr: "Vous faites quelle taille ? — Je fais du 38.", es: "la taille" },
        b: { tag: "zapatos", fr: "Quelle pointure ? — Je fais du 40.", es: "la pointure" },
        seg: [ { es: "Para la ropa, la talla:", p: 1 }, { fr: "Je fais du 38.", p: 1 }, { es: "Para los zapatos, la pointure:", p: 2 }, { fr: "Quelle pointure ?", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«¿Qué número calza?» (zapatos)", o: ["Quelle pointure vous faites ?", "Quelle taille vous faites en chaussures ?"], a: 0,
        bien: "¡Sí! Pointure para zapatos.", mal: "Para los zapatos: la pointure.",
        seg: [ { es: "Pausa. Zapatos." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["essayer", "la cabine d'essayage", "la taille", "la pointure", "ça me va bien", "les soldes"], seg: [
        { es: "Y en la caja pagas.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Las rebajas", img: "bg-paris", yo: "camila",
    escena: "Camila compra ropa en las rebajas.",
    pj: PJ,
    lineas: [
      ["camila", "Bonjour, je peux essayer ce pull ?", "Buenos días, ¿puedo probarme este suéter?"],
      ["vendeur", "Bien sûr. Vous faites quelle taille ? Les cabines d'essayage sont au fond du magasin.", "Claro. ¿Qué talla usa? Los probadores están al fondo de la tienda."],
      ["camila", "Je fais du M. Hmm, cette veste est trop grande…", "Uso M. Mmm, esta chaqueta es muy grande…"],
      ["vendeur", "Ce pull vous va très bien ! Et il est en solde : moins 30 %.", "¡Este suéter le queda muy bien! Y está en rebaja: menos 30 %."]
    ],
    fijate: "Fíjate: essayer, quelle taille, je fais du M, trop grande, vous va très bien."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "Comprar ropa",
      idea: "essayer (probarse), la cabine d'essayage (el probador), la taille (la talla), la pointure (número de zapato). Je fais du 38. Ça me va bien / c'est trop grand / trop petit. Les soldes (rebajas), une réduction.",
      intro: "Toca cada tarjeta.",
      palabras: [
        { fr: "Je peux essayer ce pull ?", es: "¿Puedo probarme este suéter?" },
        { fr: "Je peux l'essayer ?", es: "¿Puedo probármelo?" },
        { fr: "la cabine d'essayage", es: "el probador" },
        { fr: "la taille", es: "la talla", ej: ["Je fais du M.", "Uso talla M."] },
        { fr: "la pointure", es: "el número de zapato" },
        { fr: "Ça me va bien.", es: "Me queda bien.", ej: ["Cette robe te va très bien.", "Ese vestido te queda muy bien."] },
        { fr: "trop grand / trop petit", es: "muy grande / muy pequeño" },
        { fr: "les soldes", es: "las rebajas", ej: ["Pendant les soldes, tout est moins cher.", "En las rebajas todo es más barato."] },
        { fr: "en solde", es: "en rebaja" },
        { fr: "une réduction", es: "un descuento" },
        { fr: "la caisse", es: "la caja" },
        { fr: "le rayon", es: "la sección" },
        { fr: "au fond du magasin", es: "al fondo de la tienda" }
      ],
      clave: "Vous faites quelle taille ? — Je fais du 38." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Ce pantalon me va petit.", "Ce pantalon est trop petit pour moi.", "Quedar pequeño: être trop petit."], ["Quelle taille en chaussures ?", "Quelle pointure ?", "Zapatos: pointure."], ["Je suis du 38.", "Je fais du 38.", "Talla: faire du."]] }
  ],
  ejemplos: [
    { sit: "«¿Puedo probármelo?»", resp: "Je peux l'essayer ?", pasos: ["le + essayer."], porque: "COD." },
    { sit: "«Uso talla 40.»", resp: "Je fais du 40.", pasos: ["faire du + talla."], porque: "Talla." },
    { sit: "«Te queda bien.»", resp: "Ça te va bien.", pasos: ["aller bien à quelqu'un."], porque: "Opinión." }
  ],
  comprueba: [
    { q: "«la pointure» es…", o: ["el número de zapato", "la puntuación"], a: 0, b: "voc", porque: "Zapatos." },
    { q: "«Ça te va bien» significa…", o: ["Te queda bien.", "Te va bien en la vida."], a: 0, b: "voc", porque: "Ropa." },
    { q: "«les soldes» son…", o: ["las rebajas", "los soldados"], a: 0, b: "voc", porque: "Descuentos." }
  ],
  practica: [
    { fase: "guiada", c: ["sd-essayer"], k: "choice", ask: "«¿Puedo probármelo?»", q: "«___»", o: ["Je peux l'essayer ?", "Je peux le prouver ?", "Je peux essayer le ?"], a: 0, pista: "essayer.", why: "<b>Je peux l'essayer ?</b>" },
    { fase: "guiada", c: ["sd-essayer"], k: "match", ask: "Une cada palabra.", q: "Francés → español", pairs: [["les soldes", "las rebajas"], ["la caisse", "la caja"], ["le rayon", "la sección"], ["la pointure", "el número de zapato"]], pista: "caisse = caja.", why: "La tienda." },
    { fase: "guiada", c: ["sd-avis"], k: "sort", ask: "¿Te lo llevas o no?", q: "Clasifica.", cats: ["Me lo llevo", "No me lo llevo"], items: [["Ça me va parfaitement.", 0], ["C'est ma taille.", 0], ["Le prix est intéressant.", 0], ["Il est en solde !", 0], ["C'est trop petit.", 1], ["C'est trop cher.", 1], ["La couleur ne me plaît pas.", 1], ["Ce n'est pas mon style.", 1]], pista: "trop = demasiado.", why: "Decidir." },
    { fase: "indep", c: ["sd-essayer"], k: "fill", ask: "Escribe «uso talla» (faire).", q: "Je ___ du 40.", acc: ["fais"], why: "<b>fais</b>." },
    { fase: "indep", c: ["sd-essayer"], k: "fill", ask: "Escribe la palabra (probador).", q: "Les cabines d'___ sont au fond du magasin.", acc: ["essayage"], why: "<b>essayage</b>." },
    { fase: "indep", c: ["sd-essayer"], k: "spot", ask: "Encuentra el error.", s: "Quelle [taille] vous faites en chaussures ?", fix: "pointure", why: "<b>pointure</b>." },
    { fase: "aplica", c: ["sd-avis"], k: "choice", ask: "La chaqueta te queda muy grande.", q: "«___»", o: ["Cette veste est trop grande.", "Cette veste me va grand.", "Cette veste est très grand."], a: 0, why: "<b>trop grande</b>." },
    { fase: "aplica", c: ["sd-avis"], k: "choice", es: true, say: "Pendant les soldes, tout est moins cher.", ask: "Escucha. ¿Qué pasa en las rebajas?", q: "Elige.", o: ["Todo es más barato.", "Todo es más caro.", "Todo está agotado."], a: 0, why: "<b>moins cher</b>." },
    { fase: "dominio", c: ["sd-avis"], k: "choice", ask: "«Ese vestido te queda muy bien.»", q: "«___»", o: ["Cette robe te va très bien.", "Cette robe te va très bon.", "Cette robe est très bien à toi."], a: 0, why: "<b>te va très bien</b>." },
    { fase: "dominio", c: ["sd-essayer"], k: "order", ask: "Ordena: «¿Puedo probarme este suéter?».", tokens: ["Je peux", "essayer", "ce pull ?"], why: "<b>Je peux essayer ce pull ?</b>" },
    { fase: "dominio", c: ["sd-essayer", "sd-avis"], k: "listen", say: "Vous faites quelle taille ?", acc: ["Vous faites quelle taille ?", "Vous faites quelle taille?", "Vous faites quelle taille"], num: false, dict: true, ask: "Escucha la pregunta y escríbela.", why: "Era <b>Vous faites quelle taille ?</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila"], previo: ["peux", "pull", "bien", "sûr", "faites", "quelle", "cabines", "fond", "magasin", "fais", "hmm", "cette", "veste", "grande", "grand", "très", "moins", "30", "chaussures", "robe", "prix", "intéressant", "couleur", "plaît", "mon", "style", "cher", "pendant", "tout", "parfaitement", "ma", "petit", "prouver", "bon", "toi", "pantalon", "suis"] }
};

E["a2-meilleur-mieux"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Meilleur ou mieux ?",
  objetivo: {
    que: "Vas a elegir entre meilleur (con un nombre) y mieux (con un verbo), en comparativo y superlativo.",
    corto: "Meilleur o mieux.",
    podras: ["Usar meilleur(e)(s) con nombres.", "Usar mieux con verbos.", "Decir Ça va mieux, Tant mieux, C'est mieux de…"],
    iconos: ["ic2/trofeo", "m2d/pensativo", "ic2/estrella"],
    previos: ["El comparativo (lección 7)."],
    capacidad: "Ahora no confundes mejor con mejor."
  },
  requiere: R("cmp-adj", "cmp-sup"), recupera: ["cmp-sup"],
  conceptos: {
    "mm-meilleur": { n: "bon → meilleur(e)(s): con un nombre", b: "gr" },
    "mm-mieux": { n: "bien → mieux: con un verbo; c'est mieux", b: "gr" }
  },
  video: {
    titulo: "Meilleur o mieux", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/trofeo", grande: "meilleur · mieux", seg: [
        { es: "Hola. En español los dos son mejor. En francés, depende." } ] },
      { v: "dos",
        a: { tag: "con un nombre", fr: "Ce restaurant est meilleur.", es: "meilleur" },
        b: { tag: "con un verbo", fr: "Tu danses mieux que moi.", es: "mieux" },
        seg: [ { es: "Si describe una cosa:", p: 1 }, { fr: "Ce restaurant est meilleur.", p: 1 }, { es: "Si describe cómo se hace:", p: 2 }, { fr: "Tu danses mieux que moi.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Mi hermano juega tenis mejor que yo.»", o: ["Mon frère joue mieux au tennis que moi.", "Mon frère joue meilleur au tennis que moi."], a: 0,
        bien: "¡Sí! Jugar es un verbo: mieux.", mal: "Con un verbo: mieux.",
        seg: [ { es: "Pausa. Juega mejor." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["meilleur", "meilleure", "meilleurs", "mieux", "Ça va mieux.", "Tant mieux !"], seg: [
        { es: "Meilleur concuerda; mieux nunca cambia.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "¿Cuál es mejor?", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo comparan restaurantes.",
    pj: PJ,
    lineas: [
      ["hugo", "Ce restaurant est meilleur que l'autre.", "Este restaurante es mejor que el otro."],
      ["camila", "Oui, et cette pizza est meilleure que celle d'hier.", "Sí, y esta pizza es mejor que la de ayer."],
      ["hugo", "Tu parles français mieux que moi !", "¡Hablas francés mejor que yo!"],
      ["camila", "Non… Mais je comprends mieux quand tu parles lentement. — Tant mieux !", "No… Pero entiendo mejor cuando hablas despacio. — ¡Mejor así!"]
    ],
    fijate: "Fíjate: meilleur, meilleure (cosa) / mieux (parler, comprendre)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Meilleur y mieux",
      idea: "bon → meilleur(e)(s): adjetivo, con un nombre, concuerda (une meilleure idée). bien → mieux: adverbio, con un verbo, no cambia (elle parle mieux). Superlativo: le meilleur / le mieux. C'est mieux de + infinitivo.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Forma"], [
        ["Ce restaurant est meilleur que l'autre.", "Este restaurante es mejor que el otro.", "meilleur"],
        ["Cette pizza est meilleure que celle d'hier.", "Esta pizza es mejor que la de ayer.", "meilleure"],
        ["C'est la meilleure solution.", "Es la mejor solución.", "superlativo"],
        ["un meilleur prix", "un mejor precio", "meilleur + nombre"],
        ["Tu danses mieux que moi.", "Bailas mejor que yo.", "mieux"],
        ["Elle chante mieux.", "Canta mejor.", "mieux"],
        ["Je comprends mieux quand tu parles lentement.", "Entiendo mejor cuando hablas despacio.", "mieux"],
        ["C'est mieux de partir tôt.", "Es mejor salir temprano.", "c'est mieux de"],
        ["Ça va mieux.", "Estoy mejor.", "expresión"],
        ["De mieux en mieux.", "Cada vez mejor.", "expresión"],
        ["Tant mieux !", "¡Mejor así!", "expresión"]
      ]],
      ej: [["un meilleur film", "una mejor película"], ["une meilleure note", "una mejor nota"], ["le meilleur restaurant", "el mejor restaurante"], ["mes meilleurs amis", "mis mejores amigos"], ["il travaille mieux", "trabaja mejor"], ["j'écris mieux", "escribo mejor"], ["elle dort mieux", "duerme mejor"], ["C'est meilleur.", "Está más rico."], ["Ce pain est meilleur.", "Este pan es mejor."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Il est plus bon.", "Il est meilleur.", "bon → meilleur."], ["Mon frère joue meilleur au tennis.", "Mon frère joue mieux au tennis.", "Verbo: mieux."], ["une meilleur idée", "une meilleure idée", "Concuerda."]] }
  ],
  ejemplos: [
    { sit: "«Este pan es mejor.»", resp: "Ce pain est meilleur.", pasos: ["pain: nombre → meilleur."], porque: "Adjetivo." },
    { sit: "«Ella canta mejor.»", resp: "Elle chante mieux.", pasos: ["chanter: verbo → mieux."], porque: "Adverbio." },
    { sit: "«Es la mejor idea.»", resp: "C'est la meilleure idée.", pasos: ["idée: femenino → meilleure."], porque: "Concuerda." }
  ],
  comprueba: [
    { q: "Con un verbo se usa…", o: ["mieux", "meilleur"], a: 0, b: "gr", porque: "Adverbio." },
    { q: "Meilleur concuerda en género y número…", o: ["sí", "no"], a: 0, b: "gr", porque: "Adjetivo." },
    { q: "«Ça va mieux» significa…", o: ["Estoy mejor.", "Va mejor el carro."], a: 0, b: "gr", porque: "Salud." }
  ],
  practica: [
    { fase: "guiada", c: ["mm-meilleur"], k: "choice", ask: "«Este pan es mejor.»", q: "«Ce pain est ___ .»", o: ["meilleur", "mieux", "plus bon"], a: 0, pista: "Nombre.", why: "<b>meilleur</b>." },
    { fase: "guiada", c: ["mm-mieux"], k: "choice", ask: "«Ella canta mejor.»", q: "«Elle chante ___ .»", o: ["mieux", "meilleur", "meilleure"], a: 0, pista: "Verbo.", why: "<b>mieux</b>." },
    { fase: "guiada", c: ["mm-meilleur", "mm-mieux"], k: "sort", ask: "¿meilleur(e) o mieux?", q: "Clasifica.", cats: ["meilleur(e)", "mieux"], items: [["un … film", 0], ["une … note", 0], ["le … restaurant", 0], ["mes … amis", 0], ["il travaille …", 1], ["ça va …", 1], ["j'écris …", 1], ["elle dort …", 1]], pista: "¿Nombre o verbo?", why: "Dos palabras." },
    { fase: "indep", c: ["mm-mieux"], k: "fill", ask: "Escribe «mejor».", q: "Je comprends ___ quand tu parles lentement.", acc: ["mieux"], why: "<b>mieux</b>." },
    { fase: "indep", c: ["mm-meilleur"], k: "fill", ask: "Escribe «mejor» (la pizza).", q: "Cette pizza est ___ que celle d'hier.", acc: ["meilleure"], why: "<b>meilleure</b>." },
    { fase: "indep", c: ["mm-mieux"], k: "spot", ask: "Encuentra el error.", s: "Mon frère joue [meilleur] au tennis que moi .", fix: "mieux", why: "<b>mieux</b>." },
    { fase: "aplica", c: ["mm-mieux"], k: "match", ask: "Une cada expresión.", q: "Francés → español", pairs: [["Ça va mieux.", "Estoy mejor."], ["C'est meilleur.", "Está más rico."], ["De mieux en mieux.", "Cada vez mejor."], ["Tant mieux !", "¡Mejor así!"]], why: "Expresiones." },
    { fase: "aplica", c: ["mm-meilleur"], k: "choice", ask: "«Es la mejor idea.»", q: "«C'est la ___ idée.»", o: ["meilleure", "meilleur", "mieux"], a: 0, why: "<b>meilleure</b>." },
    { fase: "dominio", c: ["mm-mieux"], k: "choice", ask: "«Es mejor salir temprano.»", q: "«___ de partir tôt.»", o: ["C'est mieux", "C'est meilleur", "C'est plus bien"], a: 0, why: "<b>C'est mieux de</b>." },
    { fase: "dominio", c: ["mm-mieux"], k: "order", ask: "Ordena: «Hablas francés mejor que yo».", tokens: ["Tu parles", "français", "mieux", "que moi."], why: "<b>Tu parles français mieux que moi.</b>" },
    { fase: "dominio", c: ["mm-meilleur", "mm-mieux"], k: "listen", say: "Ce restaurant est meilleur que l'autre.", acc: ["Ce restaurant est meilleur que l'autre."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Ce restaurant est meilleur que l'autre.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["restaurant", "l'autre", "cette", "pizza", "celle", "d'hier", "parles", "français", "mais", "comprends", "lentement", "tant", "danses", "chante", "solution", "prix", "partir", "tôt", "pain", "idée", "frère", "joue", "tennis", "film", "note", "amis", "travaille", "écris", "dort", "moi", "mon", "mes"] }
};

E["a2-budget"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "L'argent et le budget : dépenser, économiser",
  objetivo: {
    que: "Vas a hablar de tu presupuesto: gastar, ahorrar, el arriendo, las facturas, coûter cher.",
    corto: "Je dépense, j'économise.",
    podras: ["Decir je dépense beaucoup en…, j'économise pour…", "Nombrar le loyer, les factures, la bourse.", "Usar coûter cher (cher no cambia)."],
    iconos: ["ic2/moneda", "ic2/cofre", "ic2/bombilla"],
    previos: ["El dinero (Primeros pasos) y el banco (A1, lección 39)."],
    capacidad: "Ahora puedes explicar tu presupuesto de estudiante."
  },
  requiere: R("pb-banque", "cq-adv"), recupera: ["pb-banque", "ar2-voc"],
  conceptos: {
    "bu-verbes": { n: "dépenser, économiser, faire des économies, mettre de côté", b: "voc" },
    "bu-noms": { n: "le loyer, les factures, les charges; coûter cher", b: "voc" }
  },
  video: {
    titulo: "El presupuesto", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/moneda", grande: "J'économise.", seg: [
        { es: "Hola. Gastar y ahorrar: dépenser y économiser." } ] },
      { v: "dos",
        a: { tag: "gastar", fr: "Je dépense beaucoup en transport.", es: "dépenser" },
        b: { tag: "ahorrar", fr: "J'économise pour voyager.", es: "économiser" },
        seg: [ { es: "Gastar:", p: 1 }, { fr: "Je dépense beaucoup en transport.", p: 1 }, { es: "Ahorrar:", p: 2 }, { fr: "J'économise pour voyager.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Los libros cuestan caro.»", o: ["Les livres coûtent cher.", "Les livres coûtent chers."], a: 0,
        bien: "¡Sí! Cher no cambia.", mal: "En coûter cher, cher es invariable.",
        seg: [ { es: "Pausa. Cuestan caro." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["dépenser", "économiser", "le loyer", "les factures", "le salaire", "la bourse"], seg: [
        { es: "Arriendo, facturas, sueldo y beca.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Fin de mes", img: "bg-cafe", yo: "camila",
    escena: "Camila hace cuentas con Hugo.",
    pj: PJ,
    lineas: [
      ["camila", "Je paie mon loyer le premier du mois. Et les factures d'électricité !", "Pago mi arriendo el primero de mes. ¡Y las facturas de la luz!"],
      ["hugo", "Moi, je dépense trop d'argent au restaurant.", "Yo gasto demasiada plata en restaurantes."],
      ["camila", "Moi, je fais des économies pour acheter un ordinateur. J'achète d'occasion.", "Yo ahorro para comprar un computador. Compro de segunda mano."],
      ["hugo", "Bonne idée. Les ordinateurs coûtent cher !", "Buena idea. ¡Los computadores cuestan caro!"]
    ],
    fijate: "Fíjate: le loyer, les factures, je dépense, je fais des économies, coûtent cher."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "El dinero",
      idea: "dépenser (gastar), économiser / faire des économies / mettre de côté (ahorrar). le loyer (el arriendo), les charges, les factures. Ça coûte cher (cher invariable).",
      intro: "Toca cada tarjeta.",
      palabras: [
        { fr: "dépenser", es: "gastar", ej: ["Je dépense beaucoup en transport.", "Gasto mucho en transporte."] },
        { fr: "économiser", es: "ahorrar", ej: ["J'économise pour voyager.", "Ahorro para viajar."] },
        { fr: "faire des économies", es: "ahorrar" },
        { fr: "mettre de côté", es: "guardar, ahorrar" },
        { fr: "acheter d'occasion", es: "comprar de segunda mano" },
        { fr: "le loyer", es: "el arriendo", ej: ["Je paie le loyer tous les mois.", "Pago el arriendo cada mes."] },
        { fr: "les charges", es: "los gastos comunes" },
        { fr: "la facture d'électricité", es: "la factura de la luz" },
        { fr: "le salaire", es: "el sueldo" },
        { fr: "la bourse", es: "la beca" },
        { fr: "le compte", es: "la cuenta" },
        { fr: "coûter cher", es: "costar caro", ej: ["Les livres coûtent cher.", "Los libros cuestan caro."] },
        { fr: "être fauché", es: "estar sin plata (familiar)" }
      ],
      clave: "En coûter cher, cher no cambia: les livres coûtent cher." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Les livres coûtent chers.", "Les livres coûtent cher.", "cher invariable."], ["Je dépends trop d'argent.", "Je dépense trop d'argent.", "Gastar: dépenser."]] }
  ],
  ejemplos: [
    { sit: "«Ahorro para viajar.»", resp: "J'économise pour voyager.", pasos: ["économiser."], porque: "Ahorrar." },
    { sit: "«Estas zapatillas cuestan caro.»", resp: "Ces baskets coûtent cher.", pasos: ["cher invariable."], porque: "Precio." },
    { sit: "«Gasto demasiado en el restaurante.»", resp: "Je dépense trop d'argent au restaurant.", pasos: ["dépenser."], porque: "Gastar." }
  ],
  comprueba: [
    { q: "«le loyer» es…", o: ["el arriendo", "el lujo"], a: 0, b: "voc", porque: "Vivienda." },
    { q: "«économiser» significa…", o: ["ahorrar", "estudiar economía"], a: 0, b: "voc", porque: "Ahorro." },
    { q: "«la bourse» de un estudiante es…", o: ["la beca", "la bolsa"], a: 0, b: "voc", porque: "Ayuda." }
  ],
  practica: [
    { fase: "guiada", c: ["bu-verbes"], k: "choice", ask: "«Ahorro para viajar.»", q: "«___ pour voyager.»", o: ["J'économise", "Je dépense", "Je paie"], a: 0, pista: "Ahorrar.", why: "<b>J'économise</b>." },
    { fase: "guiada", c: ["bu-noms"], k: "match", ask: "Une cada palabra.", q: "Francés → español", pairs: [["le salaire", "el sueldo"], ["la bourse", "la beca"], ["le compte", "la cuenta"], ["les charges", "los gastos comunes"]], pista: "bourse = beca.", why: "Dinero." },
    { fase: "guiada", c: ["bu-verbes"], k: "sort", ask: "¿Gastar o ahorrar?", q: "Clasifica.", cats: ["Gastar", "Ahorrar"], items: [["dépenser", 0], ["acheter", 0], ["payer le loyer", 0], ["sortir au restaurant", 0], ["économiser", 1], ["mettre de côté", 1], ["faire des économies", 1], ["acheter d'occasion", 1]], pista: "économiser = ahorrar.", why: "Presupuesto." },
    { fase: "indep", c: ["bu-verbes"], k: "fill", ask: "Escribe «gasto».", q: "Je ___ trop d'argent au restaurant.", acc: ["dépense"], why: "<b>dépense</b>." },
    { fase: "indep", c: ["bu-noms"], k: "fill", ask: "Escribe «factura».", q: "Je dois payer la ___ d'électricité.", acc: ["facture"], why: "<b>facture</b>." },
    { fase: "indep", c: ["bu-noms"], k: "spot", ask: "Encuentra el error.", s: "Les appartements à Paris coûtent très [chers] .", fix: "cher", why: "<b>cher</b>." },
    { fase: "aplica", c: ["bu-noms"], k: "choice", ask: "«Estas zapatillas cuestan caro.»", q: "«___»", o: ["Ces baskets coûtent cher.", "Ces baskets coûtent chères.", "Ces baskets sont coûte cher."], a: 0, why: "<b>coûtent cher</b>." },
    { fase: "aplica", c: ["bu-verbes"], k: "choice", es: true, say: "Elle fait des économies pour acheter un ordinateur.", ask: "Escucha. ¿Qué hace?", q: "Elige.", o: ["Ahorra para un computador.", "Gasta en un computador.", "Estudia economía."], a: 0, why: "<b>fait des économies</b>." },
    { fase: "dominio", c: ["bu-noms"], k: "order", ask: "Ordena: «Pago el arriendo cada mes».", tokens: ["Je paie", "le loyer", "tous les mois."], why: "<b>Je paie le loyer tous les mois.</b>" },
    { fase: "dominio", c: ["bu-verbes"], k: "fill", ask: "Escribe «ahorrar» (faire des ___).", q: "Je fais des ___ pour voyager.", acc: ["économies"], why: "<b>économies</b>." },
    { fase: "dominio", c: ["bu-verbes", "bu-noms"], k: "listen", say: "Je paie mon loyer le premier du mois.", acc: ["Je paie mon loyer le premier du mois."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je paie mon loyer le premier du mois.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paris"], previo: ["paie", "mon", "premier", "mois", "électricité", "d'électricité", "trop", "d'argent", "argent", "restaurant", "acheter", "ordinateur", "j'achète", "bonne", "idée", "ordinateurs", "livres", "transport", "voyager", "ces", "baskets", "dois", "payer", "appartements", "très", "tous", "sortir", "chères", "sont", "coûte", "dépends"] }
};

/* ================================ A2·7 · Casa y convivencia; tiempo, fiestas y trabajo ================================ */

E["a2-logement-annonce"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Chercher un logement : lire une annonce",
  objetivo: {
    que: "Vas a leer anuncios de vivienda con sus abreviaturas y a preguntar por un apartamento.",
    corto: "Studio meublé, 450 € CC.",
    podras: ["Entender studio, T2, m², meublé, CC.", "Valorar: lumineux, calme, sans ascenseur, bruyant.", "Preguntar L'appartement est encore disponible ?"],
    iconos: ["ic2/cofre", "ic2/moneda", "m2d/senalar"],
    previos: ["La vivienda (A1, lección 11) y el presupuesto (lección 33)."],
    capacidad: "Ahora puedes buscar alojamiento en Francia."
  },
  requiere: R("bu-noms", "or-ieme"), recupera: ["lg-ilya", "bu-noms"],
  conceptos: {
    "la-annonce": { n: "studio, T2, m², meublé, charges comprises, à louer", b: "voc" },
    "la-visite": { n: "lumineux, bruyant, sans ascenseur; disponible, visiter", b: "voc" }
  },
  video: {
    titulo: "Un anuncio", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/cofre", grande: "Studio meublé · 450 € CC", seg: [
        { es: "Hola. Los anuncios franceses hablan en abreviaturas." } ] },
      { v: "frase", filas: [
          { nota: "tipo", p: 1, partes: [["Studio meublé de 20 m²", "-", 1]] },
          { nota: "precio", p: 2, partes: [["450 € charges comprises", "-", 2]] },
          { nota: "dónde", p: 3, partes: [["au troisième étage sans ascenseur", "-", 3]] } ], seg: [
        { es: "Estudio amueblado de 20 metros,", p: 1 }, { es: "450 euros con gastos incluidos,", p: 2 }, { es: "tercer piso sin ascensor.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«un apartamento amueblado»", o: ["un appartement meublé", "un appartement mobilié"], a: 0,
        bien: "¡Sí! Meublé.", mal: "Amueblado = meublé.",
        seg: [ { es: "Pausa. Amueblado." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["le studio", "le T2", "meublé", "charges comprises", "à louer", "le propriétaire"], seg: [
        { es: "Y para preguntar: est-ce que je peux le visiter ?", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El anuncio", img: "bg-paris", yo: "camila",
    escena: "Camila llama por un anuncio.",
    pj: PJ,
    lineas: [
      ["camila", "Bonjour, je cherche une colocation près de la fac. J'ai vu votre annonce.", "Buenos días, busco un piso compartido cerca de la universidad. Vi su anuncio."],
      ["vendeur", "C'est un studio meublé de 20 m², 450 € charges comprises.", "Es un estudio amueblado de 20 m², 450 € gastos incluidos."],
      ["camila", "L'appartement est encore disponible ? Il est lumineux ?", "¿El apartamento todavía está disponible? ¿Tiene buena luz?"],
      ["vendeur", "Oui, mais il est au troisième étage sans ascenseur. — Est-ce que je peux le visiter samedi ?", "Sí, pero está en el tercer piso sin ascensor. — ¿Puedo visitarlo el sábado?"]
    ],
    fijate: "Fíjate: meublé, charges comprises, disponible, sans ascenseur, le visiter."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "El anuncio",
      idea: "studio (estudio), T2 / F2 (salón + un cuarto), colocation (piso compartido). meublé / non meublé. charges comprises (CC) / hors charges (HC). à louer / à vendre. le propriétaire.",
      intro: "Toca cada tarjeta.",
      palabras: [
        { fr: "un studio", es: "un estudio (un solo espacio)" },
        { fr: "un T2", es: "un apartamento de dos piezas" },
        { fr: "une colocation", es: "un piso compartido", ej: ["Je cherche une colocation près de la fac.", "Busco un piso compartido cerca de la universidad."] },
        { fr: "meublé", es: "amueblado", ej: ["Studio meublé de 20 m², 450 € charges comprises.", "Estudio amueblado de 20 m², 450 € gastos incluidos."] },
        { fr: "charges comprises (CC)", es: "gastos incluidos" },
        { fr: "hors charges (HC)", es: "sin gastos" },
        { fr: "à louer", es: "se arrienda" },
        { fr: "à vendre", es: "se vende" },
        { fr: "le propriétaire", es: "el dueño" },
        { fr: "le RDC (rez-de-chaussée)", es: "la planta baja" },
        { fr: "lumineux", es: "con buena luz" },
        { fr: "bruyant", es: "ruidoso" },
        { fr: "sans ascenseur", es: "sin ascensor" },
        { fr: "proche des transports", es: "cerca del transporte" },
        { fr: "disponible", es: "disponible" }
      ],
      clave: "Est-ce que je peux le visiter ? = ¿Puedo visitarlo?",
      ej: [["CC : charges comprises", "gastos incluidos"], ["HC : hors charges", "sin gastos"], ["m² : mètres carrés", "metros cuadrados"], ["RDC : rez-de-chaussée", "planta baja"], ["T2 : deux pièces", "dos piezas"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["un appartement mobilié", "un appartement meublé", "Amueblado: meublé."], ["Studio mobilié de 25 m²", "Studio meublé de 25 m²", "meublé."], ["charges compris", "charges comprises", "Concuerda: charges es femenino plural."]] }
  ],
  ejemplos: [
    { sit: "Lees «450 € CC».", resp: "450 € charges comprises", pasos: ["CC = gastos incluidos."], porque: "Abreviatura." },
    { sit: "Preguntas si sigue libre.", resp: "L'appartement est encore disponible ?", pasos: ["encore disponible."], porque: "Pregunta." },
    { sit: "Pides visitarlo.", resp: "Est-ce que je peux le visiter ?", pasos: ["le + visiter."], porque: "COD." }
  ],
  comprueba: [
    { q: "«meublé» significa…", o: ["amueblado", "mueble"], a: 0, b: "voc", porque: "Con muebles." },
    { q: "«charges comprises» significa…", o: ["gastos incluidos", "cargas compradas"], a: 0, b: "voc", porque: "CC." },
    { q: "«bruyant» es…", o: ["ruidoso", "brillante"], a: 0, b: "voc", porque: "Inconveniente." }
  ],
  practica: [
    { fase: "guiada", c: ["la-annonce"], k: "choice", ask: "«amueblado»", q: "«___»", o: ["meublé", "mobilié", "meuble"], a: 0, pista: "meublé.", why: "<b>meublé</b>." },
    { fase: "guiada", c: ["la-annonce"], k: "match", ask: "Une cada abreviatura.", q: "Anuncio → español", pairs: [["m²", "metros cuadrados"], ["CC", "gastos incluidos"], ["T2", "dos piezas"], ["RDC", "planta baja"]], pista: "CC = charges comprises.", why: "Abreviaturas." },
    { fase: "guiada", c: ["la-visite"], k: "sort", ask: "¿Ventaja o inconveniente?", q: "Clasifica.", cats: ["Ventaja", "Inconveniente"], items: [["lumineux", 0], ["proche des transports", 0], ["calme", 0], ["charges comprises", 0], ["sans ascenseur", 1], ["bruyant", 1], ["loin du centre", 1], ["petite cuisine", 1]], pista: "bruyant = ruidoso.", why: "Valorar." },
    { fase: "indep", c: ["la-annonce"], k: "fill", ask: "Escribe «piso compartido».", q: "Je cherche une ___ avec d'autres étudiants.", acc: ["colocation"], why: "<b>colocation</b>." },
    { fase: "indep", c: ["la-visite"], k: "fill", ask: "Escribe «visitar».", q: "Est-ce que je peux ___ l'appartement samedi ?", acc: ["visiter"], why: "<b>visiter</b>." },
    { fase: "indep", c: ["la-annonce"], k: "spot", ask: "Encuentra el error.", s: "Studio [mobilié] de 25 m² près de la gare .", fix: "meublé", why: "<b>meublé</b>." },
    { fase: "aplica", c: ["la-annonce"], k: "choice", es: true, say: "Studio meublé de 20 m², 450 euros charges comprises.", ask: "Escucha. ¿Cuánto cuesta y qué incluye?", q: "Elige.", o: ["450 €, con gastos incluidos", "450 €, sin gastos", "20 €, amueblado"], a: 0, why: "<b>charges comprises</b>." },
    { fase: "aplica", c: ["la-annonce"], k: "choice", ask: "«Se arrienda»", q: "«___»", o: ["À louer", "À vendre", "À visiter"], a: 0, why: "<b>À louer</b>." },
    { fase: "dominio", c: ["la-visite"], k: "choice", ask: "Preguntas si el apartamento sigue libre.", q: "«___»", o: ["L'appartement est encore disponible ?", "L'appartement est déjà disponible ?", "L'appartement est à vendre ?"], a: 0, why: "<b>encore disponible</b>." },
    { fase: "dominio", c: ["la-visite"], k: "order", ask: "Ordena: «Está en el tercer piso sin ascensor».", tokens: ["Il est", "au troisième étage", "sans", "ascenseur."], why: "<b>Il est au troisième étage sans ascenseur.</b>" },
    { fase: "dominio", c: ["la-annonce", "la-visite"], k: "listen", say: "Je cherche une colocation près de la fac.", acc: ["Je cherche une colocation près de la fac."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je cherche une colocation près de la fac.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila"], previo: ["cherche", "près", "fac", "vu", "votre", "annonce", "20", "450", "25", "m²", "€", "appartement", "l'appartement", "encore", "mais", "troisième", "étage", "ascenseur", "peux", "samedi", "d'autres", "étudiants", "gare", "euros", "calme", "loin", "centre", "petite", "cuisine", "déjà", "meuble", "mobilié", "est-ce"] }
};

E["a2-colocation"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "La colocation : les règles avec devoir",
  objetivo: {
    que: "Vas a fijar las normas de un piso compartido con devoir, pouvoir e il est interdit de.",
    corto: "On doit sortir la poubelle.",
    podras: ["Conjugar devoir completo.", "Decir obligaciones: tu dois faire la vaisselle.", "Prohibir y permitir: il est interdit de fumer, on peut inviter."],
    iconos: ["ic2/pergamino", "ic2/amigos", "m2d/senalar"],
    previos: ["vouloir, pouvoir, devoir (A1, lección 15) e il faut (A1, lección 63)."],
    capacidad: "Ahora puedes escribir las reglas de tu piso compartido."
  },
  requiere: R("if-inf", "if-neg", "ta-faire", "ta-autres"), recupera: ["vp-conj", "if-inf"],
  conceptos: {
    "co3-devoir": { n: "je dois… ils doivent + infinitivo", b: "gr" },
    "co3-interdit": { n: "on ne doit pas / il est interdit de / on peut", b: "gr" }
  },
  video: {
    titulo: "Las reglas", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/pergamino", grande: "On doit…", seg: [
        { es: "Hola. Las reglas de la casa: deber, poder, prohibido." } ] },
      { v: "frase", filas: [
          { nota: "obligación", p: 1, partes: [["Chacun doit nettoyer sa chambre.", "-", 1]] },
          { nota: "prohibición", p: 2, partes: [["Il est interdit de fumer.", "-", 2]] },
          { nota: "permiso", p: 3, partes: [["On peut inviter des amis le week-end.", "-", 3]] } ], seg: [
        { es: "Cada uno debe limpiar su cuarto,", p: 1 }, { es: "está prohibido fumar,", p: 2 }, { es: "se puede invitar amigos el fin de semana.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Tienes que lavar los platos.»", o: ["Tu dois faire la vaisselle.", "Tu dois de faire la vaisselle."], a: 0,
        bien: "¡Sí! Sin preposición.", mal: "Devoir va directo con el infinitivo.",
        seg: [ { es: "Pausa. Tienes que." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["je dois", "il doit", "nous devons", "vous devez", "ils doivent", "il est interdit de"], seg: [
        { es: "Ils doivent: con o y e.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Las reglas del piso", img: "bg-cafe", yo: "camila",
    escena: "Camila y sus compañeros escriben las reglas.",
    pj: PJ,
    lineas: [
      ["hugo", "Bon, les règles. Chacun doit nettoyer sa chambre.", "Bueno, las reglas. Cada uno debe limpiar su cuarto."],
      ["camila", "Et on ne doit pas faire de bruit après 22 heures.", "Y no se debe hacer ruido después de las 22."],
      ["hugo", "Il est interdit de fumer dans l'appartement. Tu dois sortir la poubelle ce soir !", "Está prohibido fumar en el apartamento. ¡Tienes que sacar la basura esta noche!"],
      ["camila", "D'accord. Et nous pouvons inviter des amis le samedi ?", "De acuerdo. ¿Y podemos invitar amigos el sábado?"]
    ],
    fijate: "Fíjate: doit nettoyer, on ne doit pas, il est interdit de, tu dois, nous pouvons."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Devoir y las reglas",
      idea: "devoir: dois, dois, doit, devons, devez, doivent + infinitivo (sin preposición). Prohibición: on ne doit pas / il est interdit de + infinitivo. Permiso: on peut + infinitivo.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Regla"], [
        ["je dois / tu dois", "debo / debes", "devoir"],
        ["il doit / on doit", "debe", "devoir"],
        ["nous devons", "debemos", "devoir"],
        ["vous devez", "deben", "devoir"],
        ["ils doivent", "deben (ellos)", "devoir"],
        ["Chacun doit nettoyer sa chambre.", "Cada uno debe limpiar su cuarto.", "obligación"],
        ["Ils doivent payer le loyer.", "Deben pagar el arriendo.", "obligación"],
        ["On ne doit pas faire de bruit après 22 heures.", "No se debe hacer ruido después de las 22.", "prohibición"],
        ["Il est interdit de fumer.", "Está prohibido fumar.", "prohibición"],
        ["Vous pouvez utiliser la cuisine.", "Pueden usar la cocina.", "permiso"],
        ["On peut inviter des amis le week-end.", "Se puede invitar amigos el fin de semana.", "permiso"]
      ]],
      ej: [["On doit nettoyer la salle de bains.", "Hay que limpiar el baño."], ["Chacun doit faire ses courses.", "Cada uno hace sus compras."], ["Il faut payer à temps.", "Hay que pagar a tiempo."], ["On doit fermer la porte à clé.", "Hay que cerrar la puerta con llave."], ["On ne doit pas crier.", "No se debe gritar."], ["Pas d'animaux.", "No se permiten animales."], ["Défense de stationner.", "Prohibido estacionar."], ["les colocataires", "los compañeros de piso"], ["partager les frais", "compartir los gastos"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Tu dois de faire la vaisselle.", "Tu dois faire la vaisselle.", "Sin de."], ["Les colocataires doit partager.", "Les colocataires doivent partager.", "ils doivent."], ["Il est interdit fumer.", "Il est interdit de fumer.", "interdit de."]] }
  ],
  ejemplos: [
    { sit: "«Deben pagar el arriendo.»", resp: "Ils doivent payer le loyer.", pasos: ["ils doivent + infinitivo."], porque: "Obligación." },
    { sit: "«Está prohibido fumar.»", resp: "Il est interdit de fumer.", pasos: ["interdit de + infinitivo."], porque: "Prohibición." },
    { sit: "«Pueden invitar amigos el sábado.»", resp: "Vous pouvez inviter des amis le samedi.", pasos: ["pouvoir + infinitivo."], porque: "Permiso." }
  ],
  comprueba: [
    { q: "Después de devoir va…", o: ["el infinitivo directo", "de + infinitivo"], a: 0, b: "gr", porque: "Tu dois faire." },
    { q: "«ils» de devoir es…", o: ["doivent", "devent"], a: 0, b: "gr", porque: "Irregular." },
    { q: "«Défense de stationner» es…", o: ["una prohibición", "un permiso"], a: 0, b: "gr", porque: "Prohibido." }
  ],
  practica: [
    { fase: "guiada", c: ["co3-devoir"], k: "choice", ask: "«Deben pagar el arriendo.»", q: "«Ils ___ payer le loyer.»", o: ["doivent", "doit", "devent"], a: 0, pista: "ils.", why: "<b>doivent</b>." },
    { fase: "guiada", c: ["co3-devoir"], k: "match", ask: "Une cada sujeto con devoir.", q: "Sujeto → forma", pairs: [["je", "dois"], ["il", "doit"], ["nous", "devons"], ["vous", "devez"], ["ils", "doivent"]], pista: "nous devons.", why: "devoir." },
    { fase: "guiada", c: ["co3-devoir", "co3-interdit"], k: "sort", ask: "¿Obligación o prohibición?", q: "Clasifica.", cats: ["Obligación", "Prohibición"], items: [["On doit nettoyer la salle de bains.", 0], ["Chacun doit faire ses courses.", 0], ["Il faut payer à temps.", 0], ["On doit fermer la porte à clé.", 0], ["Il est interdit de fumer.", 1], ["On ne doit pas crier.", 1], ["Pas d'animaux.", 1], ["Défense de stationner.", 1]], pista: "interdit = prohibido.", why: "Reglas." },
    { fase: "indep", c: ["co3-devoir"], k: "fill", ask: "Conjuga devoir (tu).", q: "Tu ___ sortir la poubelle ce soir.", acc: ["dois"], why: "<b>dois</b>." },
    { fase: "indep", c: ["co3-interdit"], k: "fill", ask: "Conjuga pouvoir (vous).", q: "Vous ___ inviter des amis le samedi.", acc: ["pouvez"], why: "<b>pouvez</b>." },
    { fase: "indep", c: ["co3-devoir"], k: "spot", ask: "Encuentra el error.", s: "Les colocataires [doit] partager les frais .", fix: "doivent", why: "<b>doivent</b>." },
    { fase: "aplica", c: ["co3-interdit"], k: "choice", ask: "«Está prohibido fumar.»", q: "«___»", o: ["Il est interdit de fumer.", "Il est interdit fumer.", "Il doit fumer."], a: 0, why: "<b>interdit de</b>." },
    { fase: "aplica", c: ["co3-devoir"], k: "fill", ask: "Conjuga devoir (nous).", q: "Nous ___ ranger la cuisine.", acc: ["devons"], why: "<b>devons</b>." },
    { fase: "dominio", c: ["co3-interdit"], k: "choice", es: true, say: "On ne doit pas faire de bruit après 22 heures.", ask: "Escucha. ¿Qué regla es?", q: "Elige.", o: ["No hacer ruido después de las 22.", "Hacer ruido después de las 22.", "Llegar antes de las 22."], a: 0, why: "<b>on ne doit pas</b>." },
    { fase: "dominio", c: ["co3-devoir"], k: "order", ask: "Ordena: «Cada uno debe limpiar su cuarto».", tokens: ["Chacun", "doit", "nettoyer", "sa chambre."], why: "<b>Chacun doit nettoyer sa chambre.</b>" },
    { fase: "dominio", c: ["co3-devoir", "co3-interdit"], k: "listen", say: "On ne doit pas faire de bruit la nuit.", acc: ["On ne doit pas faire de bruit la nuit."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>On ne doit pas faire de bruit la nuit.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["bon", "règles", "chacun", "nettoyer", "sa", "chambre", "bruit", "après", "22", "heures", "fumer", "l'appartement", "appartement", "sortir", "poubelle", "ce", "soir", "d'accord", "inviter", "amis", "samedi", "payer", "loyer", "utiliser", "cuisine", "week-end", "ranger", "salle", "bains", "courses", "ses", "temps", "fermer", "porte", "clé", "crier", "animaux", "d'animaux", "stationner", "colocataires", "partager", "frais", "nuit", "faire", "devent"] }
};

E["a2-objets"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Décrire un objet : en bois, ça sert à",
  objetivo: {
    que: "Vas a describir un objeto que no sabes nombrar: material, forma y uso.",
    corto: "C'est en bois, ça sert à…",
    podras: ["Decir el material con en: en bois, en métal, en verre.", "Decir la forma: rond, carré, pointu.", "Decir el uso: ça sert à + infinitivo, on l'utilise pour…"],
    iconos: ["ic2/engranaje", "ic2/cofre", "ic2/bombilla"],
    previos: ["Los objetos (Primeros pasos) y el COD (lección 9)."],
    capacidad: "Ahora puedes explicar cualquier cosa aunque no sepas su nombre."
  },
  requiere: R("cod-forma", "cod-place"), recupera: ["ob-voc"],
  conceptos: {
    "ob2-mat": { n: "en bois, en métal, en verre, en tissu, en plastique", b: "voc" },
    "ob2-usage": { n: "rond, carré; ça sert à + inf.; on l'utilise pour", b: "voc" }
  },
  video: {
    titulo: "Describir un objeto", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/engranaje", grande: "Ça sert à…", seg: [
        { es: "Hola. ¿No sabes cómo se llama? Descríbelo." } ] },
      { v: "frase", filas: [
          { nota: "material", p: 1, partes: [["C'est un objet en verre…", "-", 1]] },
          { nota: "forma", p: 2, partes: [["… rond et petit…", "-", 2]] },
          { nota: "uso", p: 3, partes: [["… qui sert à boire.", "-", 3]] } ], seg: [
        { es: "De qué está hecho,", p: 1 }, { es: "cómo es,", p: 2 }, { es: "y para qué sirve.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«una mesa de madera»", o: ["une table en bois", "une table de bois"], a: 0,
        bien: "¡Sí! Material con en.", mal: "El material va con en: en bois.",
        seg: [ { es: "Pausa. De madera." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["en bois", "en métal", "en verre", "en tissu", "rond", "ça sert à"], seg: [
        { es: "Y en familia: un truc, un machin.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El objeto misterioso", img: "bg-cafe", yo: "camila",
    escena: "Camila busca un objeto en la cocina de Hugo.",
    pj: PJ,
    lineas: [
      ["camila", "Tu as un… truc pour ouvrir les bouteilles ?", "¿Tienes una… cosa para abrir las botellas?"],
      ["hugo", "C'est quoi ? Décris-le.", "¿Qué es? Descríbelo."],
      ["camila", "C'est un objet en métal, petit et pointu. Ça sert à ouvrir le vin.", "Es un objeto de metal, pequeño y puntiagudo. Sirve para abrir el vino."],
      ["hugo", "Ah, un tire-bouchon ! On l'utilise pour les bouteilles de vin.", "¡Ah, un sacacorchos! Se usa para las botellas de vino."]
    ],
    fijate: "Fíjate: en métal, pointu, ça sert à ouvrir, on l'utilise pour."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "Material, forma y uso",
      idea: "Material: en + material (en bois, en métal, en verre, en tissu, en plastique, en cuir, en papier). Forma: rond, carré, rectangulaire, long, pointu. Uso: ça sert à + infinitivo; on l'utilise pour + infinitivo.",
      intro: "Toca cada tarjeta.",
      palabras: [
        { fr: "en bois", es: "de madera", ej: ["C'est une boîte carrée en bois.", "Es una caja cuadrada de madera."] },
        { fr: "en métal", es: "de metal" },
        { fr: "en verre", es: "de vidrio", ej: ["C'est un objet en verre qui sert à boire.", "Es un objeto de vidrio que sirve para beber."] },
        { fr: "en tissu", es: "de tela" },
        { fr: "en plastique", es: "de plástico" },
        { fr: "en cuir", es: "de cuero" },
        { fr: "en papier", es: "de papel" },
        { fr: "rond / carré", es: "redondo / cuadrado" },
        { fr: "rectangulaire", es: "rectangular" },
        { fr: "pointu", es: "puntiagudo" },
        { fr: "Ça sert à…", es: "Sirve para…", ej: ["Ça sert à ouvrir les bouteilles.", "Sirve para abrir las botellas."] },
        { fr: "On l'utilise pour…", es: "Se usa para…" },
        { fr: "un truc / un machin", es: "una cosa (familiar)" }
      ],
      clave: "un couteau sert à couper; une clé sert à ouvrir." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["C'est de bois.", "C'est en bois.", "Material: en."], ["Ça sert pour couper.", "Ça sert à couper.", "servir à."], ["On utilise le pour écrire.", "On l'utilise pour écrire.", "Pronombre delante."]] }
  ],
  ejemplos: [
    { sit: "«Sirve para cortar.»", resp: "Ça sert à couper.", pasos: ["sert à + infinitivo."], porque: "Uso." },
    { sit: "«un bolso de tela»", resp: "un sac en tissu", pasos: ["en + material."], porque: "Material." },
    { sit: "«Se usa para escribir.»", resp: "On l'utilise pour écrire.", pasos: ["l' + utilise + pour."], porque: "Uso." }
  ],
  comprueba: [
    { q: "El material se dice con…", o: ["en", "de"], a: 0, b: "voc", porque: "en bois." },
    { q: "«en verre» significa…", o: ["de vidrio", "en verde"], a: 0, b: "voc", porque: "Material." },
    { q: "«Ça sert à…» significa…", o: ["Sirve para…", "Se sirve a…"], a: 0, b: "voc", porque: "Uso." }
  ],
  practica: [
    { fase: "guiada", c: ["ob2-mat"], k: "choice", ask: "«de madera»", q: "«___»", o: ["en bois", "de bois", "à bois"], a: 0, pista: "en.", why: "<b>en bois</b>." },
    { fase: "guiada", c: ["ob2-usage"], k: "match", ask: "¿Para qué sirve cada objeto?", q: "Objeto → uso", pairs: [["un couteau", "couper"], ["une clé", "ouvrir"], ["un parapluie", "se protéger de la pluie"], ["un réveil", "se réveiller"]], pista: "couteau = cuchillo.", why: "Usos." },
    { fase: "guiada", c: ["ob2-mat", "ob2-usage"], k: "sort", ask: "¿Material o forma?", q: "Clasifica.", cats: ["Material", "Forma"], items: [["en bois", 0], ["en métal", 0], ["en cuir", 0], ["en papier", 0], ["rond", 1], ["carré", 1], ["pointu", 1], ["rectangulaire", 1]], pista: "en + material.", why: "Describir." },
    { fase: "indep", c: ["ob2-mat"], k: "fill", ask: "Escribe la preposición.", q: "C'est un sac ___ tissu.", acc: ["en"], why: "<b>en</b>." },
    { fase: "indep", c: ["ob2-usage"], k: "fill", ask: "Escribe el pronombre (lo).", q: "On ___ utilise pour écrire.", acc: ["l'", "l’"], why: "<b>l'</b>." },
    { fase: "indep", c: ["ob2-mat"], k: "spot", ask: "Encuentra el error.", s: "C'est une table [de] bois très ancienne .", fix: "en", why: "<b>en</b>." },
    { fase: "aplica", c: ["ob2-usage"], k: "choice", ask: "«Sirve para abrir las botellas.»", q: "«___ ouvrir les bouteilles.»", o: ["Ça sert à", "Ça sert pour", "C'est servi à"], a: 0, why: "<b>Ça sert à</b>." },
    { fase: "aplica", c: ["ob2-mat", "ob2-usage"], k: "choice", es: true, say: "C'est un objet en verre qui sert à boire.", ask: "Escucha. ¿Qué objeto es?", q: "Elige.", o: ["Un vaso", "Un cuchillo", "Una llave"], a: 0, why: "Vidrio + beber = un vaso." },
    { fase: "dominio", c: ["ob2-usage"], k: "choice", ask: "Describes un objeto pequeño y puntiagudo de metal.", q: "«C'est un objet en métal, petit et ___ .»", o: ["pointu", "rond", "carré"], a: 0, why: "<b>pointu</b>." },
    { fase: "dominio", c: ["ob2-mat", "ob2-usage"], k: "order", ask: "Ordena: «Es un objeto de metal que sirve para abrir».", tokens: ["C'est un objet", "en métal", "qui sert", "à ouvrir."], why: "<b>C'est un objet en métal qui sert à ouvrir.</b>" },
    { fase: "dominio", c: ["ob2-mat", "ob2-usage"], k: "listen", say: "C'est une boîte carrée en bois.", acc: ["C'est une boîte carrée en bois."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>C'est une boîte carrée en bois.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["truc", "ouvrir", "bouteilles", "quoi", "décris-le", "objet", "petit", "vin", "ah", "tire-bouchon", "utilise", "boîte", "carrée", "boire", "sac", "écrire", "table", "très", "ancienne", "couteau", "couper", "clé", "parapluie", "protéger", "pluie", "réveil", "réveiller", "qui", "servi", "à"] }
};

E["a2-reclamation"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Se plaindre poliment : une réclamation",
  objetivo: {
    que: "Vas a quejarte con cortesía, de viva voz y por correo: explicar el problema y pedir una solución.",
    corto: "Est-ce que vous pourriez… ?",
    podras: ["Introducir: Excusez-moi, il y a un problème avec…", "Explicar: le chauffage ne marche pas, la chambre est sale.", "Pedir con condicional y escribir Je vous écris pour signaler…"],
    iconos: ["ic2/lapiz", "m2d/pensativo", "ic2/bombilla"],
    previos: ["La cortesía (A1, lección 58) y la compra en línea (lección 30)."],
    capacidad: "Ahora puedes reclamar sin sonar grosero."
  },
  requiere: R("pz-cond", "pz-reg", "al-prob", "cm-cadre"), recupera: ["pz-cond"],
  conceptos: {
    "rc-probleme": { n: "ne marche pas, en panne, sale, une fuite", b: "voc" },
    "rc-demande": { n: "Est-ce que vous pourriez… ? Je vous écris pour signaler…", b: "voc" }
  },
  video: {
    titulo: "Reclamar con cortesía", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/pensativo", grande: "Est-ce que vous pourriez… ?", seg: [
        { es: "Hola. Para quejarse, el condicional suaviza todo." } ] },
      { v: "dos",
        a: { tag: "brusco", fr: "Vous devez changer ma chambre !", es: "orden" },
        b: { tag: "cortés", fr: "Est-ce que vous pourriez changer ma chambre ?", es: "petición" },
        seg: [ { es: "Esto suena brusco:", p: 1 }, { fr: "Vous devez changer ma chambre !", p: 1 }, { es: "Mejor:", p: 2 }, { fr: "Est-ce que vous pourriez changer ma chambre ?", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«La ducha no funciona.»", o: ["La douche ne marche pas.", "La douche ne camine pas."], a: 0,
        bien: "¡Sí! Marcher.", mal: "Funcionar = marcher.",
        seg: [ { es: "Pausa. No funciona." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["ne marche pas", "en panne", "sale", "une fuite", "Je vous écris pour signaler…", "Je vous remercie par avance."], seg: [
        { es: "Y el correo empieza con Madame, Monsieur.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "En el hotel", img: "bg-paris", yo: "camila",
    escena: "Camila tiene problemas en la habitación del hotel.",
    pj: PJ,
    lineas: [
      ["camila", "Excusez-moi, il y a un problème avec ma chambre.", "Disculpe, hay un problema con mi habitación."],
      ["vendeur", "Je vous écoute, madame.", "La escucho, señora."],
      ["camila", "La douche ne marche pas et le chauffage est en panne. Et il y a du bruit.", "La ducha no funciona y la calefacción está averiada. Y hay ruido."],
      ["camila", "Est-ce que vous pourriez changer ma chambre, s'il vous plaît ?", "¿Podría cambiarme de habitación, por favor?"]
    ],
    fijate: "Fíjate: il y a un problème avec, ne marche pas, en panne, est-ce que vous pourriez."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "La reclamación",
      idea: "Introducir: Excusez-moi, il y a un problème avec… Explicar: … ne marche pas, … est en panne, c'est sale. Pedir: Est-ce que vous pourriez… ? Correo: Madame, Monsieur, je vous écris pour signaler… Je vous remercie par avance.",
      intro: "Toca cada tarjeta.",
      palabras: [
        { fr: "Excusez-moi, il y a un problème avec…", es: "Disculpe, hay un problema con…" },
        { fr: "… ne marche pas.", es: "… no funciona.", ej: ["Excusez-moi, la douche ne marche pas.", "Disculpe, la ducha no funciona."] },
        { fr: "le chauffage", es: "la calefacción" },
        { fr: "la climatisation", es: "el aire acondicionado" },
        { fr: "en panne", es: "averiado" },
        { fr: "une fuite", es: "una fuga" },
        { fr: "sale", es: "sucio" },
        { fr: "Il y a du bruit.", es: "Hay ruido." },
        { fr: "Est-ce que vous pourriez… ?", es: "¿Podría…?", ej: ["Est-ce que vous pourriez changer ma chambre ?", "¿Podría cambiarme de habitación?"] },
        { fr: "Je souhaite être remboursé.", es: "Deseo que me reembolsen." },
        { fr: "Madame, Monsieur,", es: "Señora, señor: (correo)" },
        { fr: "Je vous écris pour signaler…", es: "Le escribo para informar de…" },
        { fr: "Je vous remercie par avance.", es: "Le agradezco de antemano." }
      ],
      clave: "El condicional (pourriez) suaviza la petición." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Vous devez changer ma chambre !", "Est-ce que vous pourriez changer ma chambre ?", "Cortés: condicional."], ["La climatisation ne camine pas.", "La climatisation ne marche pas.", "Funcionar: marcher."], ["Je vous remercie en avance.", "Je vous remercie par avance.", "par avance."]] }
  ],
  ejemplos: [
    { sit: "Quieres que reparen la calefacción.", resp: "Est-ce que vous pourriez réparer le chauffage ?", pasos: ["pourriez + infinitivo."], porque: "Cortés." },
    { sit: "Empiezas un correo de reclamación.", resp: "Madame, Monsieur,", pasos: ["Saludo formal."], porque: "Correo." },
    { sit: "«Le escribo para informar de un problema de entrega.»", resp: "Je vous écris pour signaler un problème de livraison.", pasos: ["signaler."], porque: "Motivo." }
  ],
  comprueba: [
    { q: "«en panne» significa…", o: ["averiado", "en pan"], a: 0, b: "voc", porque: "No funciona." },
    { q: "«Le chauffage ne marche pas» significa…", o: ["La calefacción no funciona.", "La calefacción no camina."], a: 0, b: "voc", porque: "marcher = funcionar." },
    { q: "Para suavizar una petición se usa…", o: ["el condicional: pourriez", "el imperativo: changez"], a: 0, b: "voc", porque: "Cortesía." }
  ],
  practica: [
    { fase: "guiada", c: ["rc-demande"], k: "choice", ask: "Quieres que reparen la calefacción.", q: "«___ réparer le chauffage ?»", o: ["Est-ce que vous pourriez", "Vous devez", "Réparez"], a: 0, pista: "Condicional.", why: "<b>pourriez</b>." },
    { fase: "guiada", c: ["rc-probleme"], k: "match", ask: "Une cada palabra.", q: "Francés → español", pairs: [["le chauffage", "la calefacción"], ["la fuite", "la fuga"], ["en panne", "averiado"], ["sale", "sucio"]], pista: "sale = sucio.", why: "Problemas." },
    { fase: "guiada", c: ["rc-probleme", "rc-demande"], k: "sort", ask: "¿Explicar el problema o pedir una solución?", q: "Clasifica.", cats: ["Explicar el problema", "Pedir una solución"], items: [["La lumière ne marche pas.", 0], ["Il y a du bruit.", 0], ["La chambre est sale.", 0], ["Le colis est arrivé abîmé.", 0], ["Pourriez-vous le réparer ?", 1], ["Je voudrais changer de chambre.", 1], ["Je souhaite être remboursé.", 1]], pista: "Pourriez = pedir.", why: "Dos pasos." },
    { fase: "indep", c: ["rc-demande"], k: "fill", ask: "Escribe «informar de».", q: "Je vous écris pour ___ un problème.", acc: ["signaler"], why: "<b>signaler</b>." },
    { fase: "indep", c: ["rc-demande"], k: "fill", ask: "Escribe «de antemano» (par ___).", q: "Je vous remercie par ___ .", acc: ["avance"], why: "<b>avance</b>." },
    { fase: "indep", c: ["rc-probleme"], k: "spot", ask: "Encuentra el error.", s: "Excusez-moi , la climatisation ne [camine] pas .", fix: "marche", why: "<b>marche</b>." },
    { fase: "aplica", c: ["rc-demande"], k: "choice", ask: "Empiezas un correo de reclamación.", q: "«___»", o: ["Madame, Monsieur,", "Salut !", "Coucou,"], a: 0, why: "<b>Madame, Monsieur,</b>" },
    { fase: "aplica", c: ["rc-probleme"], k: "choice", es: true, say: "Le chauffage ne marche pas.", ask: "Escucha. ¿Cuál es el problema?", q: "Elige.", o: ["La calefacción no funciona.", "La ducha está sucia.", "Hay una fuga."], a: 0, why: "<b>chauffage</b>." },
    { fase: "dominio", c: ["rc-demande"], k: "choice", ask: "Pides cambiar de habitación con cortesía.", q: "«___»", o: ["Est-ce que vous pourriez changer ma chambre ?", "Vous devez changer ma chambre !", "Changez ma chambre !"], a: 0, why: "Cortés." },
    { fase: "dominio", c: ["rc-probleme"], k: "order", ask: "Ordena: «Disculpe, hay un problema con mi habitación».", tokens: ["Excusez-moi,", "il y a", "un problème", "avec ma chambre."], why: "<b>Excusez-moi, il y a un problème avec ma chambre.</b>" },
    { fase: "dominio", c: ["rc-probleme", "rc-demande"], k: "listen", say: "Je vous écris pour signaler un problème de livraison.", acc: ["Je vous écris pour signaler un problème de livraison."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je vous écris pour signaler un problème de livraison.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila"], previo: ["problème", "ma", "chambre", "écoute", "madame", "douche", "bruit", "changer", "réparer", "lumière", "colis", "arrivé", "abîmé", "livraison", "devez", "réparez", "changez", "salut", "coucou", "remercie", "écris", "souhaite", "remboursé", "marche", "camine"] }
};

E["a2-previsions"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "La météo de demain : le futur simple",
  objetivo: {
    que: "Vas a entender y dar el pronóstico del tiempo con el futur simple.",
    corto: "Demain, il pleuvra.",
    podras: ["Usar il fera, il pleuvra, il y aura, ce sera.", "Nombrar une averse, un orage, des éclaircies, nuageux.", "Decir les températures seront en hausse / en baisse."],
    iconos: ["ic2/luna", "ic2/rayo", "ic2/mundo"],
    previos: ["El tiempo (A1, lección 13) y el futur simple (lección 4)."],
    capacidad: "Ahora puedes entender el pronóstico en la tele francesa."
  },
  requiere: R("fu-simple", "fu-irreg"), recupera: ["ms-fait", "fu-irreg"],
  conceptos: {
    "pv-futur": { n: "il fera, il pleuvra, il y aura, ce sera", b: "gr" },
    "pv-voc": { n: "averse, orage, éclaircies, nuageux, ensoleillé", b: "gr" }
  },
  video: {
    titulo: "El pronóstico", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/rayo", grande: "Il pleuvra.", seg: [
        { es: "Hola. El pronóstico siempre habla en futuro." } ] },
      { v: "frase", filas: [
          { nota: "faire", p: 1, partes: [["Demain, il fera beau dans le sud.", "-", 1]] },
          { nota: "pleuvoir", p: 2, partes: [["Il pleuvra toute la journée à Paris.", "-", 2]] },
          { nota: "avoir", p: 3, partes: [["Il y aura du vent sur la côte.", "-", 3]] } ], seg: [
        { es: "Hará buen tiempo en el sur,", p: 1 }, { es: "lloverá todo el día en París,", p: 2 }, { es: "habrá viento en la costa.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Mañana hará calor.»", o: ["Demain, il fera chaud.", "Demain, il fairera chaud."], a: 0,
        bien: "¡Sí! Fer-.", mal: "Faire en futuro: il fera.",
        seg: [ { es: "Pausa. Hará." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["une averse", "un orage", "des éclaircies", "nuageux", "ensoleillé", "du brouillard"], seg: [
        { es: "Chubasco, tormenta, claros, nublado, soleado, niebla.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El fin de semana", img: "bg-paris", yo: "camila",
    escena: "Camila mira el pronóstico antes de un paseo.",
    pj: PJ,
    lineas: [
      ["camila", "Quel temps fera-t-il ce week-end ?", "¿Qué tiempo hará este fin de semana?"],
      ["hugo", "Selon la météo, samedi, il y aura des averses le matin, mais des éclaircies l'après-midi.", "Según el pronóstico, el sábado habrá chubascos por la mañana, pero claros por la tarde."],
      ["hugo", "Dimanche, ce sera ensoleillé. Les températures seront en hausse.", "El domingo estará soleado. Las temperaturas subirán."],
      ["camila", "Super ! Il ne pleuvra pas dimanche, alors on ira au parc.", "¡Genial! No lloverá el domingo, así que iremos al parque."]
    ],
    fijate: "Fíjate: il y aura, ce sera, seront, il ne pleuvra pas."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "El tiempo en futuro",
      idea: "faire → il fera; pleuvoir → il pleuvra; avoir → il y aura; être → ce sera / seront. Vocabulario: une averse, un orage, des éclaircies, nuageux, ensoleillé, du brouillard. Les températures seront en hausse / en baisse.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Verbo"], [
        ["Demain, il fera beau dans le sud.", "Mañana hará buen tiempo en el sur.", "faire"],
        ["Il fera froid.", "Hará frío.", "faire"],
        ["Il fera doux.", "Hará un tiempo templado.", "faire"],
        ["Il pleuvra toute la journée à Paris.", "Lloverá todo el día en París.", "pleuvoir"],
        ["Il y aura du vent sur la côte.", "Habrá viento en la costa.", "avoir"],
        ["Il y aura des orages.", "Habrá tormentas.", "avoir"],
        ["Demain, il y aura du soleil dans le nord.", "Mañana habrá sol en el norte.", "avoir"],
        ["Ce week-end, le temps sera ensoleillé.", "Este fin de semana estará soleado.", "être"],
        ["Les températures seront en hausse.", "Las temperaturas subirán.", "être"],
        ["Les températures seront en baisse.", "Las temperaturas bajarán.", "être"]
      ]],
      ej: [["un orage", "una tormenta"], ["une averse", "un chubasco"], ["des éclaircies", "claros"], ["nuageux", "nublado"], ["ensoleillé", "soleado"], ["un ciel dégagé", "un cielo despejado"], ["du brouillard", "niebla"], ["selon la météo", "según el pronóstico"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Demain, il fairera beau.", "Demain, il fera beau.", "faire → fer-."], ["Il pleuvoira.", "Il pleuvra.", "pleuvoir → pleuvr-."], ["Il y avoira du vent.", "Il y aura du vent.", "avoir → aur-."]] }
  ],
  ejemplos: [
    { sit: "«Mañana lloverá.»", resp: "Demain, il pleuvra.", pasos: ["pleuvoir → il pleuvra."], porque: "Irregular." },
    { sit: "«Habrá tormentas.»", resp: "Il y aura des orages.", pasos: ["il y a → il y aura."], porque: "Futuro." },
    { sit: "«Las temperaturas subirán.»", resp: "Les températures seront en hausse.", pasos: ["être → seront."], porque: "Plural." }
  ],
  comprueba: [
    { q: "El futuro de il y a es…", o: ["il y aura", "il y sera"], a: 0, b: "gr", porque: "avoir → aur-." },
    { q: "«des éclaircies» son…", o: ["claros entre nubes", "relámpagos"], a: 0, b: "gr", porque: "Buen tiempo." },
    { q: "«en baisse» significa…", o: ["bajando", "subiendo"], a: 0, b: "gr", porque: "Baja." }
  ],
  practica: [
    { fase: "guiada", c: ["pv-futur"], k: "choice", ask: "«Mañana lloverá.»", q: "«Demain, il ___ .»", o: ["pleuvra", "pleuvoira", "pleut"], a: 0, pista: "pleuvr-.", why: "<b>pleuvra</b>." },
    { fase: "guiada", c: ["pv-voc"], k: "match", ask: "Une cada palabra.", q: "Francés → español", pairs: [["une averse", "un chubasco"], ["des éclaircies", "claros"], ["nuageux", "nublado"], ["ensoleillé", "soleado"]], pista: "averse = chubasco.", why: "El tiempo." },
    { fase: "guiada", c: ["pv-voc"], k: "sort", ask: "¿Buen tiempo o mal tiempo?", q: "Clasifica.", cats: ["Buen tiempo", "Mal tiempo"], items: [["ensoleillé", 0], ["des éclaircies", 0], ["il fera doux", 0], ["un ciel dégagé", 0], ["des orages", 1], ["des averses", 1], ["du brouillard", 1], ["il pleuvra", 1]], pista: "orage = tormenta.", why: "Pronóstico." },
    { fase: "indep", c: ["pv-futur"], k: "fill", ask: "Escribe être en futuro (il).", q: "Ce week-end, le temps ___ ensoleillé.", acc: ["sera"], why: "<b>sera</b>." },
    { fase: "indep", c: ["pv-futur"], k: "fill", ask: "Escribe être en futuro (ils).", q: "Les températures ___ en hausse.", acc: ["seront"], why: "<b>seront</b>." },
    { fase: "indep", c: ["pv-futur"], k: "spot", ask: "Encuentra el error.", s: "Selon la météo , il [fairera] chaud demain .", fix: "fera", why: "<b>fera</b>." },
    { fase: "aplica", c: ["pv-futur"], k: "choice", ask: "«Habrá tormentas.»", q: "«___ des orages.»", o: ["Il y aura", "Il y sera", "Il aura"], a: 0, why: "<b>Il y aura</b>." },
    { fase: "aplica", c: ["pv-voc"], k: "choice", es: true, say: "Samedi, il y aura des averses le matin, mais des éclaircies l'après-midi.", ask: "Escucha. ¿Cómo será la tarde del sábado?", q: "Elige.", o: ["Con claros", "Con chubascos", "Con niebla"], a: 0, why: "<b>des éclaircies l'après-midi</b>." },
    { fase: "dominio", c: ["pv-futur"], k: "choice", ask: "«No lloverá el domingo.»", q: "«___ dimanche.»", o: ["Il ne pleuvra pas", "Il ne pleut pas", "Il pleuvra pas ne"], a: 0, why: "<b>Il ne pleuvra pas</b>." },
    { fase: "dominio", c: ["pv-futur"], k: "order", ask: "Ordena: «Mañana habrá sol en el norte».", tokens: ["Demain,", "il y aura", "du soleil", "dans le nord."], why: "<b>Demain, il y aura du soleil dans le nord.</b>" },
    { fase: "dominio", c: ["pv-futur", "pv-voc"], k: "listen", say: "Il pleuvra toute la journée à Paris.", acc: ["Il pleuvra toute la journée à Paris."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Il pleuvra toute la journée à Paris.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paris"], previo: ["quel", "temps", "fera-t-il", "week-end", "selon", "météo", "samedi", "matin", "mais", "l'après-midi", "après-midi", "dimanche", "températures", "hausse", "baisse", "super", "alors", "ira", "parc", "demain", "beau", "sud", "froid", "doux", "toute", "journée", "vent", "côte", "orages", "soleil", "nord", "chaud", "pleut", "pleuvoira", "aura"] }
};

E["a2-traditions"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Fêtes et traditions en France",
  objetivo: {
    que: "Vas a conocer las grandes fiestas francesas y contar qué se hace en cada una.",
    corto: "Le 14 juillet, la galette, les crêpes.",
    podras: ["Explicar le 14 juillet, la Chandeleur, la galette des rois.", "Usar on mange, on regarde, on fait.", "Comparar con las fiestas de Colombia."],
    iconos: ["m2d/celebrar", "ic2/bandera", "ic2/croissant"],
    previos: ["Las fiestas y los deseos (A1, lección 52) y el pronombre on (A1, lección 60)."],
    capacidad: "Ahora puedes hablar de las tradiciones francesas."
  },
  requiere: R("fe-voeux", "on-sens", "on-forma"), recupera: ["fe-voeux", "on-sens"],
  conceptos: {
    "tr-fetes": { n: "le 14 juillet, la Chandeleur, la galette des rois, le réveillon", b: "voc" },
    "tr-faire": { n: "le défilé, le feu d'artifice, la fève, les crêpes", b: "voc" }
  },
  video: {
    titulo: "Las fiestas francesas", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/bandera", grande: "le 14 juillet", seg: [
        { es: "Hola. Cada fiesta francesa tiene su comida y su costumbre." } ] },
      { v: "frase", filas: [
          { nota: "14 de julio", p: 1, partes: [["On regarde le feu d'artifice.", "-", 1]] },
          { nota: "2 de febrero", p: 2, partes: [["À la Chandeleur, on mange des crêpes.", "-", 2]] },
          { nota: "6 de enero", p: 3, partes: [["Qui trouve la fève est le roi !", "-", 3]] } ], seg: [
        { es: "El 14 de julio, fuegos artificiales;", p: 1 }, { es: "en la Chandeleur, crepes;", p: 2 }, { es: "y en la galette des rois, quien encuentra la figurita es el rey.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "¿Qué celebra el 14 de julio?", o: ["La fiesta nacional (la toma de la Bastilla)", "La Navidad francesa"], a: 0, es: true,
        bien: "¡Sí! La fête nationale.", mal: "Es la fiesta nacional: la toma de la Bastilla, 1789.",
        seg: [ { es: "Pausa. El 14 de julio." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["la galette des rois", "la Chandeleur", "Pâques", "la Fête de la musique", "le 14 juillet", "le réveillon"], seg: [
        { es: "Enero, febrero, primavera, junio, julio y diciembre.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Un año en Francia", img: "bg-paris", yo: "camila",
    escena: "Hugo le explica las fiestas a Camila.",
    pj: PJ,
    lineas: [
      ["hugo", "En janvier, on mange la galette des rois. Celui qui trouve la fève est le roi !", "En enero comemos la galette des rois. ¡Quien encuentra la figurita es el rey!"],
      ["camila", "Et à la Chandeleur ? — On mange des crêpes !", "¿Y en la Chandeleur? — ¡Comemos crepes!"],
      ["hugo", "Le 14 juillet, c'est la fête nationale : il y a un défilé et on regarde le feu d'artifice.", "El 14 de julio es la fiesta nacional: hay un desfile y vemos los fuegos artificiales."],
      ["camila", "Et pour le réveillon, toute la famille dîne ensemble, comme en Colombie !", "Y para el réveillon, toda la familia cena junta, ¡como en Colombia!"]
    ],
    fijate: "Fíjate: on mange la galette, la fève, le défilé, le feu d'artifice, le réveillon."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "Fiestas y costumbres",
      idea: "la galette des rois (enero: la fève), la Chandeleur (2 de febrero: crêpes), Pâques (œufs en chocolat), la Fête de la musique (21 de junio: conciertos en la calle), le 14 juillet (défilé, feu d'artifice, bal), Noël y le réveillon (la bûche de Noël).",
      intro: "Toca cada tarjeta.",
      palabras: [
        { fr: "la galette des rois", es: "el pastel de Reyes (enero)" },
        { fr: "la fève", es: "la figurita escondida en la galette" },
        { fr: "la Chandeleur", es: "la Candelaria (2 de febrero)", ej: ["À la Chandeleur, on mange des crêpes.", "En la Candelaria se comen crepes."] },
        { fr: "Pâques", es: "la Pascua" },
        { fr: "les œufs en chocolat", es: "los huevos de chocolate" },
        { fr: "la Fête de la musique", es: "la Fiesta de la Música (21 de junio)" },
        { fr: "les concerts dans la rue", es: "los conciertos en la calle" },
        { fr: "la fête nationale", es: "la fiesta nacional (14 de julio)" },
        { fr: "le défilé", es: "el desfile" },
        { fr: "le feu d'artifice", es: "los fuegos artificiales", ej: ["Le 14 juillet, on regarde le feu d'artifice.", "El 14 de julio se ven los fuegos artificiales."] },
        { fr: "le bal", es: "el baile" },
        { fr: "le réveillon", es: "la cena de Nochebuena o de Año Nuevo", ej: ["Pour le réveillon, toute la famille dîne ensemble.", "Para el réveillon cena toda la familia junta."] },
        { fr: "la bûche de Noël", es: "el tronco de Navidad (postre)" }
      ],
      clave: "Le 14 juillet celebra la toma de la Bastilla (1789)." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Le 14 juillet, c'est Noël de France.", "Le 14 juillet, c'est la fête nationale.", "Fiesta nacional."], ["un grand défilée", "un grand défilé", "Masculino."], ["les feux d'artifices", "le feu d'artifice", "Se dice en singular."]] }
  ],
  ejemplos: [
    { sit: "¿Qué se come en la Chandeleur?", resp: "On mange des crêpes.", pasos: ["2 de febrero → crêpes."], porque: "Tradición." },
    { sit: "¿Qué se busca en la galette des rois?", resp: "la fève", pasos: ["Quien la encuentra es el rey."], porque: "Juego." },
    { sit: "«El 31 de diciembre hacemos el réveillon de Año Nuevo.»", resp: "Le 31 décembre, on fait le réveillon du Nouvel An.", pasos: ["le réveillon."], porque: "Cena." }
  ],
  comprueba: [
    { q: "«le feu d'artifice» es…", o: ["los fuegos artificiales", "un incendio"], a: 0, b: "voc", porque: "14 de julio." },
    { q: "En la Chandeleur se comen…", o: ["crêpes", "galettes des rois"], a: 0, b: "voc", porque: "2 de febrero." },
    { q: "«le réveillon» es…", o: ["la cena de Nochebuena o Año Nuevo", "el despertador"], a: 0, b: "voc", porque: "Fiesta." }
  ],
  practica: [
    { fase: "guiada", c: ["tr-fetes"], k: "choice", ask: "¿Qué se come en la Chandeleur?", q: "«À la Chandeleur, on mange ___ .»", o: ["des crêpes", "la galette des rois", "la bûche de Noël"], a: 0, pista: "Febrero.", why: "<b>des crêpes</b>." },
    { fase: "guiada", c: ["tr-fetes"], k: "match", ask: "Une cada fiesta con su fecha.", q: "Fiesta → fecha", pairs: [["la galette des rois", "janvier"], ["la Chandeleur", "le 2 février"], ["la Fête de la musique", "le 21 juin"], ["la fête nationale", "le 14 juillet"]], pista: "Chandeleur: febrero.", why: "Calendario." },
    { fase: "guiada", c: ["tr-faire"], k: "sort", ask: "¿Comida o actividad?", q: "Clasifica.", cats: ["Comida", "Actividad"], items: [["les crêpes", 0], ["la galette des rois", 0], ["les œufs en chocolat", 0], ["la bûche de Noël", 0], ["le défilé", 1], ["le feu d'artifice", 1], ["les concerts dans la rue", 1], ["le bal", 1]], pista: "défilé = desfile.", why: "Tradiciones." },
    { fase: "indep", c: ["tr-fetes"], k: "fill", ask: "Escribe «música».", q: "Le 21 juin, c'est la Fête de la ___ .", acc: ["musique"], why: "<b>musique</b>." },
    { fase: "indep", c: ["tr-fetes"], k: "fill", ask: "Escribe la cena de fin de año.", q: "Le 31 décembre, on fait le ___ du Nouvel An.", acc: ["réveillon"], why: "<b>réveillon</b>." },
    { fase: "indep", c: ["tr-faire"], k: "spot", ask: "Encuentra el error.", s: "Le 14 juillet , il y a un grand [défilée] sur les Champs-Élysées .", fix: "défilé", why: "<b>défilé</b>." },
    { fase: "aplica", c: ["tr-faire"], k: "choice", ask: "¿Qué se busca en la galette des rois?", q: "«On cherche ___ .»", o: ["la fève", "le feu", "le bal"], a: 0, why: "<b>la fève</b>." },
    { fase: "aplica", c: ["tr-faire"], k: "choice", es: true, say: "Le 14 juillet, on regarde le feu d'artifice.", ask: "Escucha. ¿Qué se ve el 14 de julio?", q: "Elige.", o: ["Los fuegos artificiales", "Un partido", "Una obra de teatro"], a: 0, why: "<b>le feu d'artifice</b>." },
    { fase: "dominio", c: ["tr-fetes"], k: "choice", ask: "«El 14 de julio es la fiesta nacional.»", q: "«___»", o: ["Le 14 juillet, c'est la fête nationale.", "Le 14 juillet, c'est Noël.", "Le 14 juillet, c'est la Chandeleur."], a: 0, why: "<b>la fête nationale</b>." },
    { fase: "dominio", c: ["tr-fetes"], k: "order", ask: "Ordena: «En Navidad comemos con toda la familia».", tokens: ["À Noël,", "on mange", "avec toute", "la famille."], why: "<b>À Noël, on mange avec toute la famille.</b>" },
    { fase: "dominio", c: ["tr-fetes", "tr-faire"], k: "listen", say: "À la Chandeleur, on mange des crêpes.", acc: ["À la Chandeleur, on mange des crêpes.", "À la Chandeleur on mange des crêpes."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>À la Chandeleur, on mange des crêpes.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Noël", "Champs-Élysées", "Colombie", "Nouvel An"], previo: ["janvier", "février", "juin", "juillet", "décembre", "mange", "celui", "qui", "trouve", "roi", "rois", "regarde", "toute", "famille", "dîne", "ensemble", "comme", "grand", "fait", "cherche", "feu", "nouvel", "an", "2", "14", "21", "31"] }
};

E["a2-emploi-du-temps"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Mon emploi du temps au travail",
  objetivo: {
    que: "Vas a describir tu jornada de trabajo o de prácticas: horarios, pausas, reuniones y vacaciones.",
    corto: "Je commence à 8 h.",
    podras: ["Decir je commence à… et je finis à…", "Usar à temps plein, à mi-temps, un stage.", "Decir avoir une réunion, faire une pause, être en congé."],
    iconos: ["ic2/laptop", "ic2/reloj-arena", "ic2/amigos"],
    previos: ["La hora (A1, lecciones 8 y 20) y las profesiones (A1, lección 26)."],
    capacidad: "Ahora puedes explicar tu horario en una entrevista."
  },
  requiere: R("gh-hora", "ho2-officielle", "pf-sinart"), recupera: ["ho2-officielle", "pf-sinart"],
  conceptos: {
    "et-horaire": { n: "commencer à / finir à; faire une pause; une réunion", b: "voc" },
    "et-contrat": { n: "à temps plein, à mi-temps, un stage, être en congé", b: "voc" }
  },
  video: {
    titulo: "Mi jornada", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/laptop", grande: "Je commence à 8 h.", seg: [
        { es: "Hola. Tu horario: la hora siempre con à." } ] },
      { v: "dos",
        a: { tag: "tiempo completo", fr: "Je travaille à temps plein.", es: "à temps plein" },
        b: { tag: "medio tiempo", fr: "Je travaille à mi-temps.", es: "à mi-temps" },
        seg: [ { es: "Tiempo completo:", p: 1 }, { fr: "à temps plein", p: 1 }, { es: "Medio tiempo:", p: 2 }, { fr: "à mi-temps", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Empiezo mis prácticas a las ocho.»", o: ["Je commence mon stage à huit heures.", "Je commence mon stage en huit heures."], a: 0,
        bien: "¡Sí! La hora con à.", mal: "La hora va con à.",
        seg: [ { es: "Pausa. A las ocho." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["une réunion", "une pause", "un stage", "en congé", "le collègue", "le patron"], seg: [
        { es: "Reunión, pausa, prácticas, vacaciones, colega, jefe.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El trabajo", img: "bg-universidad", yo: "camila",
    escena: "Camila le cuenta a Hugo su nuevo trabajo.",
    pj: PJ,
    lineas: [
      ["camila", "Je travaille à mi-temps dans une librairie. Je commence à 14 h et je finis à 18 h.", "Trabajo medio tiempo en una librería. Empiezo a las 14 h y termino a las 18 h."],
      ["hugo", "Et le matin ?", "¿Y por la mañana?"],
      ["camila", "Le matin, je fais un stage. Le mardi, j'ai une réunion avec mon équipe.", "Por la mañana hago unas prácticas. Los martes tengo reunión con mi equipo."],
      ["hugo", "Tu as des vacances ? — Oui, je suis en congé la semaine prochaine !", "¿Tienes vacaciones? — ¡Sí, estoy de vacaciones la semana que viene!"]
    ],
    fijate: "Fíjate: à mi-temps, je commence à, je finis à, un stage, une réunion, en congé."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "La jornada",
      idea: "Je commence à 8 h et je finis à 17 h. J'ai une réunion. Je fais une pause. à temps plein / à mi-temps. un stage (prácticas). être en congé, poser un jour.",
      intro: "Toca cada tarjeta.",
      palabras: [
        { fr: "commencer à", es: "empezar a (una hora)", ej: ["Je commence à 8 h et je finis à 17 h.", "Empiezo a las 8 y termino a las 17."] },
        { fr: "finir à", es: "terminar a" },
        { fr: "une réunion", es: "una reunión", ej: ["Le mardi, j'ai une réunion avec mon équipe.", "Los martes tengo reunión con mi equipo."] },
        { fr: "faire une pause", es: "hacer una pausa" },
        { fr: "à temps plein", es: "tiempo completo" },
        { fr: "à mi-temps", es: "medio tiempo", ej: ["Je travaille à mi-temps dans une librairie.", "Trabajo medio tiempo en una librería."] },
        { fr: "un stage", es: "unas prácticas" },
        { fr: "être en congé", es: "estar de vacaciones (trabajo)" },
        { fr: "poser un jour", es: "pedir un día libre" },
        { fr: "le collègue", es: "el colega" },
        { fr: "le patron", es: "el jefe" },
        { fr: "le bureau", es: "la oficina" },
        { fr: "répondre aux mails", es: "responder los correos" }
      ],
      clave: "La hora siempre con à: à 8 heures." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je commence le travail en 8 heures.", "Je commence le travail à 8 heures.", "Hora: à."], ["Je travaille à demi-temps.", "Je travaille à mi-temps.", "mi-temps."], ["Je suis en congés de maladie.", "Je suis en congé maladie.", "Expresión fija."]] }
  ],
  ejemplos: [
    { sit: "«Trabajo medio tiempo.»", resp: "Je travaille à mi-temps.", pasos: ["à mi-temps."], porque: "Contrato." },
    { sit: "«Termino a las cinco.»", resp: "Je finis à cinq heures.", pasos: ["finir à + hora."], porque: "Horario." },
    { sit: "«Hago una pausa para el café a las diez.»", resp: "Je fais une pause café à dix heures.", pasos: ["faire une pause."], porque: "Pausa." }
  ],
  comprueba: [
    { q: "«un stage» es…", o: ["unas prácticas", "un escenario"], a: 0, b: "voc", porque: "Trabajo de estudiante." },
    { q: "«être en congé» significa…", o: ["estar de vacaciones", "estar enfermo"], a: 0, b: "voc", porque: "Descanso." },
    { q: "La hora va con…", o: ["à", "en"], a: 0, b: "voc", porque: "à 8 heures." }
  ],
  practica: [
    { fase: "guiada", c: ["et-contrat"], k: "choice", ask: "«Trabajo medio tiempo.»", q: "«Je travaille ___ .»", o: ["à mi-temps", "à temps plein", "en congé"], a: 0, pista: "Medio.", why: "<b>à mi-temps</b>." },
    { fase: "guiada", c: ["et-horaire", "et-contrat"], k: "match", ask: "Une cada palabra.", q: "Francés → español", pairs: [["le collègue", "el colega"], ["le patron", "el jefe"], ["le bureau", "la oficina"], ["un stage", "unas prácticas"]], pista: "patron = jefe.", why: "El trabajo." },
    { fase: "guiada", c: ["et-horaire", "et-contrat"], k: "sort", ask: "¿Trabajar o descansar?", q: "Clasifica.", cats: ["Trabajar", "Descansar"], items: [["avoir une réunion", 0], ["répondre aux mails", 0], ["faire un stage", 0], ["travailler à temps plein", 0], ["être en congé", 1], ["faire une pause", 1], ["poser un jour", 1], ["partir en vacances", 1]], pista: "congé = vacaciones.", why: "La jornada." },
    { fase: "indep", c: ["et-horaire"], k: "fill", ask: "Escribe «pausa».", q: "Je fais une ___ café à dix heures.", acc: ["pause"], why: "<b>pause</b>." },
    { fase: "indep", c: ["et-horaire"], k: "fill", ask: "Escribe «reunión».", q: "Demain, j'ai une ___ avec le directeur.", acc: ["réunion"], why: "<b>réunion</b>." },
    { fase: "indep", c: ["et-horaire"], k: "spot", ask: "Encuentra el error.", s: "Je commence mon stage [en] huit heures du matin .", fix: "à", why: "<b>à</b>." },
    { fase: "aplica", c: ["et-horaire"], k: "choice", ask: "«Termino a las cinco.»", q: "«___»", o: ["Je finis à cinq heures.", "Je finis en cinq heures.", "Je finis de cinq heures."], a: 0, why: "<b>à cinq heures</b>." },
    { fase: "aplica", c: ["et-contrat"], k: "choice", es: true, say: "Je suis en congé la semaine prochaine.", ask: "Escucha. ¿Qué pasa la semana que viene?", q: "Elige.", o: ["Está de vacaciones.", "Empieza unas prácticas.", "Tiene una reunión."], a: 0, why: "<b>en congé</b>." },
    { fase: "dominio", c: ["et-horaire"], k: "order", ask: "Ordena: «Los lunes tengo una reunión a las nueve».", tokens: ["Le lundi,", "j'ai une réunion", "à neuf heures."], why: "<b>Le lundi, j'ai une réunion à neuf heures.</b>" },
    { fase: "dominio", c: ["et-contrat"], k: "choice", ask: "«Trabajo tiempo completo.»", q: "«___»", o: ["Je travaille à temps plein.", "Je travaille à plein temps du jour.", "Je travaille tout le congé."], a: 0, why: "<b>à temps plein</b>." },
    { fase: "dominio", c: ["et-horaire", "et-contrat"], k: "listen", say: "Je travaille à mi-temps dans une librairie.", acc: ["Je travaille à mi-temps dans une librairie."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je travaille à mi-temps dans une librairie.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["travaille", "librairie", "14", "18", "17", "8", "h", "matin", "mardi", "mon", "équipe", "vacances", "semaine", "prochaine", "dix", "cinq", "huit", "neuf", "heures", "directeur", "demain", "lundi", "café", "partir", "travailler", "jour", "tout", "plein", "du", "congés", "maladie", "demi-temps"] }
};

E["a2-imperatif-pronoms"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "L'impératif avec un pronom : achète-le !",
  objetivo: {
    que: "Vas a dar órdenes con pronombres: detrás en afirmativo (achète-le), delante en negativo (ne l'achète pas).",
    corto: "Achète-le ! Ne l'achète pas !",
    podras: ["Poner el pronombre detrás con guion: prends-le, parle-lui.", "Cambiar me → moi y te → toi.", "Recuperar la s con y y en: vas-y, manges-en."],
    iconos: ["m2d/senalar", "ic2/engranaje", "ic2/bombilla"],
    previos: ["El imperativo (lección 15) y los pronombres (lecciones 9 a 13)."],
    capacidad: "Ahora puedes dar órdenes y consejos cortos y naturales."
  },
  requiere: R("ip-irreg", "ip-pron", "cod-forma", "coi-forma", "y-lieu", "en-part"), recupera: ["ip-pron"],
  conceptos: {
    "ipr-pos": { n: "afirmativo: verbo-pronombre; negativo: ne + pronombre + verbo + pas", b: "gr" },
    "ipr-moi": { n: "moi, toi; vas-y, manges-en", b: "gr" }
  },
  video: {
    titulo: "Órdenes con pronombre", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/senalar", grande: "Achète-le !", seg: [
        { es: "Hola. ¿Dónde va el pronombre en una orden?" } ] },
      { v: "dos",
        a: { tag: "afirmativo", fr: "Achète-le ! Aide-moi !", es: "detrás" },
        b: { tag: "negativo", fr: "Ne l'achète pas ! Ne me regarde pas !", es: "delante" },
        seg: [ { es: "Afirmativo, detrás con guion:", p: 1 }, { fr: "Achète-le !", p: 1 }, { es: "Negativo, delante:", p: 2 }, { fr: "Ne l'achète pas !", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«El película es genial: ¡mírala!» (le film)", o: ["Regarde-le !", "Regarde-la !"], a: 0,
        bien: "¡Sí! Le film: masculino.", mal: "Film es masculino en francés: regarde-le.",
        seg: [ { es: "Pausa. Le film." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Dis-le-moi !", "Vas-y !", "Assieds-toi !", "Ne t'inquiète pas !", "Prends-en !"], seg: [
        { es: "Con y y en, la s vuelve: vas-y, manges-en.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "De compras", img: "bg-paris", yo: "camila",
    escena: "Camila duda si comprar una chaqueta.",
    pj: PJ,
    lineas: [
      ["camila", "Elle est belle, cette veste… Je l'achète ?", "Qué linda esta chaqueta… ¿La compro?"],
      ["hugo", "Oui, achète-la ! Mais attends, elle coûte 200 euros… Non, ne l'achète pas !", "¡Sí, cómprala! Pero espera, cuesta 200 euros… ¡No, no la compres!"],
      ["camila", "Aide-moi, alors ! Dis-moi la vérité.", "¡Ayúdame entonces! Dime la verdad."],
      ["hugo", "Ne t'inquiète pas. Ta mère t'attend, téléphone-lui !", "No te preocupes. Tu mamá te espera, ¡llámala!"]
    ],
    fijate: "Fíjate: achète-la, ne l'achète pas, aide-moi, dis-moi, téléphone-lui."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Posición del pronombre",
      idea: "Afirmativo: verbo + guion + pronombre (prends-le, téléphone-lui, allez-y); me → moi, te → toi. Negativo: ne + pronombre + verbo + pas (ne le prends pas). Con y / en, los verbos en -er recuperan la s: vas-y, manges-en.",
      intro: "Toca cada forma.",
      tabla: [["Francés", "Español", "Forma"], [
        ["Achète-le !", "¡Cómpralo!", "afirmativo"],
        ["Ne l'achète pas !", "¡No lo compres!", "negativo"],
        ["Ce livre est super, lis-le !", "Este libro es genial, ¡léelo!", "afirmativo"],
        ["Aide-moi, s'il te plaît !", "¡Ayúdame, por favor!", "me → moi"],
        ["Lève-toi !", "¡Levántate!", "te → toi"],
        ["Téléphone-lui !", "¡Llámalo! / ¡Llámala!", "lui"],
        ["Ne me regarde pas comme ça !", "¡No me mires así!", "negativo"],
        ["Dis-le-moi !", "¡Dímelo!", "dos pronombres"],
        ["Vas-y !", "¡Ve! ¡Adelante!", "y: s"],
        ["Manges-en !", "¡Come un poco!", "en: s"],
        ["Assieds-toi !", "¡Siéntate!", "pronominal"],
        ["Ne t'inquiète pas !", "¡No te preocupes!", "pronominal neg."]
      ]],
      ej: [["Fais-le !", "¡Hazlo!"], ["Dis-moi !", "¡Dime!"], ["Prends-en !", "¡Toma un poco!"], ["Ne le fais pas !", "¡No lo hagas!"], ["Ne me dis rien !", "¡No me digas nada!"], ["N'y va pas !", "¡No vayas!"], ["N'en prends pas !", "¡No tomes!"], ["Regarde-le !", "¡Míralo!"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Le prends !", "Prends-le !", "Afirmativo: detrás."], ["Aide-me !", "Aide-moi !", "me → moi."], ["Regarde-la ! (le film)", "Regarde-le !", "Film: masculino."], ["Ne prends-le pas !", "Ne le prends pas !", "Negativo: delante."]] }
  ],
  ejemplos: [
    { sit: "«¡Cómpralo!»", resp: "Achète-le !", pasos: ["Verbo + guion + le."], porque: "Afirmativo." },
    { sit: "«¡No lo compres!»", resp: "Ne l'achète pas !", pasos: ["ne + l' + achète + pas."], porque: "Negativo." },
    { sit: "«¡Ayúdame!»", resp: "Aide-moi !", pasos: ["me → moi detrás."], porque: "Forma tónica." }
  ],
  comprueba: [
    { q: "En imperativo afirmativo, el pronombre va…", o: ["detrás, con guion", "delante"], a: 0, b: "gr", porque: "Achète-le." },
    { q: "Detrás del verbo, te se vuelve…", o: ["toi", "te"], a: 0, b: "gr", porque: "Lève-toi." },
    { q: "«Vas-y !» lleva s porque…", o: ["va seguido de y", "es plural"], a: 0, b: "gr", porque: "Sonido." }
  ],
  practica: [
    { fase: "guiada", c: ["ipr-pos"], k: "choice", ask: "«¡Cómpralo!»", q: "«___»", o: ["Achète-le !", "Le achète !", "Achète-lui !"], a: 0, pista: "Detrás.", why: "<b>Achète-le !</b>" },
    { fase: "guiada", c: ["ipr-moi"], k: "choice", ask: "«¡Ayúdame!»", q: "«___»", o: ["Aide-moi !", "Aide-me !", "Me aide !"], a: 0, pista: "me → moi.", why: "<b>Aide-moi !</b>" },
    { fase: "guiada", c: ["ipr-pos"], k: "sort", ask: "¿Afirmativo o negativo?", q: "Clasifica.", cats: ["Afirmativo", "Negativo"], items: [["Fais-le !", 0], ["Dis-moi !", 0], ["Vas-y !", 0], ["Prends-en !", 0], ["Ne le fais pas !", 1], ["Ne me dis rien !", 1], ["N'y va pas !", 1], ["N'en prends pas !", 1]], pista: "ne… pas.", why: "Posición." },
    { fase: "indep", c: ["ipr-pos"], k: "fill", ask: "Escribe el pronombre (téléphoner à sa mère).", q: "Ta mère t'attend, téléphone-___ !", acc: ["lui"], why: "<b>lui</b>." },
    { fase: "indep", c: ["ipr-moi"], k: "fill", ask: "Escribe el pronombre (te).", q: "Il est tard, lève-___ !", acc: ["toi"], why: "<b>toi</b>." },
    { fase: "indep", c: ["ipr-pos"], k: "spot", ask: "Encuentra el error.", s: "Le film est génial , [regarde-la] !", fix: "regarde-le", why: "<b>regarde-le</b>." },
    { fase: "aplica", c: ["ipr-pos"], k: "choice", ask: "«¡No lo compres!»", q: "«___»", o: ["Ne l'achète pas !", "N'achète-le pas !", "Ne pas l'achète !"], a: 0, why: "<b>Ne l'achète pas !</b>" },
    { fase: "aplica", c: ["ipr-moi"], k: "match", ask: "Une cada orden.", q: "Francés → español", pairs: [["Dis-le-moi !", "¡Dímelo!"], ["Vas-y !", "¡Adelante!"], ["Assieds-toi !", "¡Siéntate!"], ["Ne t'inquiète pas !", "¡No te preocupes!"]], why: "Expresiones." },
    { fase: "dominio", c: ["ipr-pos"], k: "choice", ask: "«¡No me mires así!»", q: "«___»", o: ["Ne me regarde pas comme ça !", "Ne regarde-moi pas comme ça !", "Regarde-moi pas comme ça !"], a: 0, why: "<b>Ne me regarde pas</b>." },
    { fase: "dominio", c: ["ipr-moi"], k: "order", ask: "Ordena: «¡Ayúdame, por favor!».", tokens: ["Aide-moi,", "s'il te", "plaît !"], why: "<b>Aide-moi, s'il te plaît !</b>" },
    { fase: "dominio", c: ["ipr-pos", "ipr-moi"], k: "listen", say: "Ne t'inquiète pas.", acc: ["Ne t'inquiète pas.", "Ne t'inquiète pas !", "Ne t'inquiète pas"], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Ne t'inquiète pas.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["belle", "cette", "veste", "l'achète", "mais", "attends", "coûte", "200", "euros", "alors", "vérité", "ta", "mère", "t'attend", "livre", "super", "s'il", "te", "plaît", "tard", "comme", "ça", "rien", "film", "génial", "achète", "pas"] }
};

E["a2-sante-conseils"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Rester en forme : conseils pour la santé",
  objetivo: {
    que: "Vas a dar consejos de salud con il faut, tu dois, il vaut mieux, évite de y n'oublie pas de.",
    corto: "Il vaut mieux dormir.",
    podras: ["Usar il vaut mieux + infinitivo (sin de).", "Usar évite de / n'oublie pas de + infinitivo.", "Hablar de être en forme, le stress, une alimentation équilibrée."],
    iconos: ["ic2/corazon", "m2d/correr", "ic2/bombilla"],
    previos: ["El médico (lección 17), el imperativo (lección 15) e il faut (A1, lección 63)."],
    capacidad: "Ahora puedes aconsejar a un amigo sobre su salud."
  },
  requiere: R("me2-mal", "ip-irreg", "co3-devoir", "mm-mieux"), recupera: ["if-inf", "me2-mal"],
  conceptos: {
    "sc-conseil": { n: "il faut, tu dois, il vaut mieux + infinitivo", b: "voc" },
    "sc-eviter": { n: "évite de / n'oublie pas de + infinitivo; être en forme", b: "voc" }
  },
  video: {
    titulo: "Consejos de salud", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/corazon", grande: "être en forme", seg: [
        { es: "Hola. Para aconsejar: hay que, es mejor, evita." } ] },
      { v: "frase", filas: [
          { nota: "es mejor", p: 1, partes: [["Il vaut mieux se coucher tôt.", "-", 1]] },
          { nota: "evita", p: 2, partes: [["Évite de boire trop de café.", "-", 2]] },
          { nota: "no olvides", p: 3, partes: [["N'oublie pas de boire de l'eau.", "-", 3]] } ], seg: [
        { es: "Es mejor acostarse temprano,", p: 1 }, { es: "evita tomar demasiado café,", p: 2 }, { es: "no olvides tomar agua.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Es mejor dormir.»", o: ["Il vaut mieux dormir.", "Il vaut mieux de dormir."], a: 0,
        bien: "¡Sí! Sin de.", mal: "Tras il vaut mieux, el infinitivo va sin de.",
        seg: [ { es: "Pausa. Es mejor." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["il faut", "tu dois", "il vaut mieux", "évite de", "n'oublie pas de", "être en forme"], seg: [
        { es: "Ojo: évite de y n'oublie pas de llevan de.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Estrés de exámenes", img: "bg-universidad", yo: "camila",
    escena: "Camila está agotada antes de los exámenes.",
    pj: PJ,
    lineas: [
      ["camila", "Je suis stressée et fatiguée. Je dors quatre heures par nuit !", "Estoy estresada y cansada. ¡Duermo cuatro horas por noche!"],
      ["hugo", "Il vaut mieux se coucher tôt avant un examen. Et évite de boire trop de café.", "Es mejor acostarse temprano antes de un examen. Y evita tomar demasiado café."],
      ["hugo", "Pour être en forme, il faut faire du sport et manger équilibré.", "Para estar en forma hay que hacer deporte y comer equilibrado."],
      ["camila", "D'accord. Et je dois boire de l'eau ? — Oui ! N'oublie pas de boire de l'eau.", "De acuerdo. ¿Y tengo que tomar agua? — ¡Sí! No olvides tomar agua."]
    ],
    fijate: "Fíjate: il vaut mieux se coucher, évite de boire, il faut faire, n'oublie pas de."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "Aconsejar",
      idea: "il faut / tu dois + infinitivo. il vaut mieux + infinitivo (sin de) = es mejor. évite de + infinitivo = evita. n'oublie pas de + infinitivo = no olvides. être en forme, le stress, une alimentation équilibrée.",
      intro: "Toca cada tarjeta.",
      palabras: [
        { fr: "il vaut mieux", es: "es mejor", ej: ["Il vaut mieux se coucher tôt avant un examen.", "Es mejor acostarse temprano antes de un examen."] },
        { fr: "évite de", es: "evita", ej: ["Évite de boire trop de café.", "Evita tomar demasiado café."] },
        { fr: "n'oublie pas de", es: "no olvides" },
        { fr: "être en forme", es: "estar en forma", ej: ["Pour être en forme, il faut faire du sport.", "Para estar en forma hay que hacer deporte."] },
        { fr: "manger équilibré", es: "comer equilibrado" },
        { fr: "une alimentation équilibrée", es: "una alimentación equilibrada" },
        { fr: "le stress", es: "el estrés" },
        { fr: "stressé", es: "estresado" },
        { fr: "la fatigue", es: "el cansancio" },
        { fr: "les écrans", es: "las pantallas" },
        { fr: "gras", es: "grasoso" },
        { fr: "rester assis", es: "quedarse sentado" },
        { fr: "porter des choses lourdes", es: "cargar cosas pesadas" }
      ],
      clave: "il vaut mieux + infinitivo, sin de." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Il vaut mieux de dormir.", "Il vaut mieux dormir.", "Sin de."], ["Il vaut meilleur manger des légumes.", "Il vaut mieux manger des légumes.", "mieux."], ["Évite manger trop.", "Évite de manger trop.", "évite de."]] }
  ],
  ejemplos: [
    { sit: "«Es mejor caminar.»", resp: "Il vaut mieux marcher.", pasos: ["il vaut mieux + infinitivo."], porque: "Consejo." },
    { sit: "«Evita comer demasiado azúcar.»", resp: "Évite de manger trop de sucre.", pasos: ["évite de + infinitivo."], porque: "Consejo." },
    { sit: "Tu amigo está estresado.", resp: "Fais du yoga !", pasos: ["Imperativo."], porque: "Consejo." }
  ],
  comprueba: [
    { q: "Tras il vaut mieux va…", o: ["el infinitivo sin de", "de + infinitivo"], a: 0, b: "voc", porque: "Directo." },
    { q: "«être en forme» significa…", o: ["estar en forma", "estar formado"], a: 0, b: "voc", porque: "Salud." },
    { q: "Tras évite va…", o: ["de + infinitivo", "el infinitivo sin de"], a: 0, b: "voc", porque: "évite de." }
  ],
  practica: [
    { fase: "guiada", c: ["sc-conseil"], k: "choice", ask: "«Es mejor caminar.»", q: "«___ marcher.»", o: ["Il vaut mieux", "Il vaut mieux de", "Il vaut meilleur"], a: 0, pista: "Sin de.", why: "<b>Il vaut mieux</b>." },
    { fase: "guiada", c: ["sc-conseil"], k: "match", ask: "Une cada problema con su consejo.", q: "Problema → consejo", pairs: [["Je suis stressé.", "Fais du yoga."], ["Je suis fatigué.", "Couche-toi plus tôt."], ["J'ai mal au dos.", "Évite de porter des choses lourdes."], ["J'ai soif.", "Bois de l'eau."]], pista: "soif → boire.", why: "Consejos." },
    { fase: "guiada", c: ["sc-eviter"], k: "sort", ask: "¿Bueno o malo para la salud?", q: "Clasifica.", cats: ["Bueno para la salud", "Malo para la salud"], items: [["dormir huit heures", 0], ["manger des fruits", 0], ["marcher tous les jours", 0], ["boire de l'eau", 0], ["fumer", 1], ["manger trop gras", 1], ["dormir quatre heures", 1], ["rester assis toute la journée", 1]], pista: "gras = grasoso.", why: "Salud." },
    { fase: "indep", c: ["sc-eviter"], k: "fill", ask: "Escribe la preposición.", q: "N'oublie pas ___ boire de l'eau.", acc: ["de"], why: "<b>de</b>." },
    { fase: "indep", c: ["sc-eviter"], k: "fill", ask: "Escribe «evita».", q: "Pour dormir mieux, ___ les écrans le soir.", acc: ["évite"], why: "<b>évite</b>." },
    { fase: "indep", c: ["sc-conseil"], k: "spot", ask: "Encuentra el error.", s: "Il vaut [meilleur] manger des légumes .", fix: "mieux", why: "<b>mieux</b>." },
    { fase: "aplica", c: ["sc-eviter"], k: "choice", ask: "«Evita tomar demasiado café.»", q: "«___ boire trop de café.»", o: ["Évite de", "Évite", "Il vaut mieux de"], a: 0, why: "<b>Évite de</b>." },
    { fase: "aplica", c: ["sc-conseil"], k: "choice", es: true, say: "Il vaut mieux se coucher tôt avant un examen.", ask: "Escucha. ¿Qué consejo da?", q: "Elige.", o: ["Acostarse temprano antes de un examen.", "Estudiar toda la noche.", "Tomar café antes del examen."], a: 0, why: "<b>se coucher tôt</b>." },
    { fase: "dominio", c: ["sc-conseil"], k: "order", ask: "Ordena: «Para estar en forma hay que dormir bien».", tokens: ["Pour être", "en forme,", "il faut", "bien dormir."], why: "<b>Pour être en forme, il faut bien dormir.</b>" },
    { fase: "dominio", c: ["sc-eviter"], k: "choice", ask: "«Estar en forma»", q: "«___»", o: ["être en forme", "être formé", "avoir la forme de"], a: 0, why: "<b>être en forme</b>." },
    { fase: "dominio", c: ["sc-conseil", "sc-eviter"], k: "listen", say: "Évite de boire trop de café.", acc: ["Évite de boire trop de café."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Évite de boire trop de café.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["stressée", "fatiguée", "dors", "quatre", "heures", "par", "nuit", "coucher", "tôt", "avant", "examen", "boire", "trop", "café", "pour", "faire", "sport", "manger", "d'accord", "dois", "eau", "marcher", "sucre", "yoga", "fais", "couche-toi", "plus", "dos", "soif", "bois", "dormir", "huit", "fruits", "tous", "jours", "fumer", "toute", "journée", "soir", "légumes", "bien", "formé", "forme", "meilleur", "mieux"] }
};

E["a2-qui-que"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Les pronoms relatifs qui et que",
  objetivo: {
    que: "Vas a unir frases con qui (sujeto) y que (complemento).",
    corto: "L'ami qui… / le livre que…",
    podras: ["Usar qui + verbo.", "Usar que + sujeto + verbo (qu' ante vocal).", "Aplicar el truco: verbo justo después → qui."],
    iconos: ["ic2/engranaje", "m2d/pensativo", "ic2/libros"],
    previos: ["Las preguntas con qui y que (A1, lección 57)."],
    capacidad: "Ahora puedes hacer frases más largas y naturales."
  },
  requiere: R("pca-forma"), recupera: ["it-mots"],
  conceptos: {
    "qq2-qui": { n: "qui + verbo (sujeto)", b: "gr" },
    "qq2-que": { n: "que / qu' + sujeto + verbo (complemento)", b: "gr" }
  },
  video: {
    titulo: "qui o que", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/engranaje", grande: "qui · que", seg: [
        { es: "Hola. En español los dos son que. En francés, mira lo que viene después." } ] },
      { v: "dos",
        a: { tag: "verbo después", fr: "J'ai un ami qui vit à Montréal.", es: "qui" },
        b: { tag: "sujeto después", fr: "La série que je regarde est géniale.", es: "que" },
        seg: [ { es: "Si viene un verbo:", p: 1 }, { fr: "un ami qui vit à Montréal", p: 1 }, { es: "Si viene un sujeto:", p: 2 }, { fr: "la série que je regarde", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«El muchacho que habla con Marie»", o: ["Le garçon qui parle avec Marie", "Le garçon que parle avec Marie"], a: 0,
        bien: "¡Sí! Verbo después: qui.", mal: "Después viene el verbo parle: qui.",
        seg: [ { es: "Pausa. ¿Qué viene después?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["l'ami qui vit", "le livre que je lis", "la prof qu'on préfère", "l'homme qui arrive"], seg: [
        { es: "Que se apostrofa; qui, nunca.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Personas y cosas", img: "bg-cafe", yo: "camila",
    escena: "Camila le habla a Hugo de su gente y sus gustos.",
    pj: PJ,
    lineas: [
      ["camila", "J'ai un ami qui vit à Montréal. Il parle trois langues !", "Tengo un amigo que vive en Montreal. ¡Habla tres idiomas!"],
      ["hugo", "Et la série que tu regardes ?", "¿Y la serie que estás viendo?"],
      ["camila", "La série que je regarde est géniale. C'est la prof qu'on préfère qui me l'a conseillée.", "La serie que veo es genial. Me la recomendó la profe que preferimos."],
      ["hugo", "Voici l'étudiante qui vient du Pérou. Et le gâteau que tu as fait est délicieux !", "Esta es la estudiante que viene de Perú. ¡Y el pastel que hiciste está delicioso!"]
    ],
    fijate: "Fíjate: qui vit, qui vient (verbo) / que je regarde, qu'on préfère, que tu as fait (sujeto)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "qui y que",
      idea: "qui + verbo (qui es el sujeto): l'ami qui habite à Lyon. que + sujeto + verbo (que es el complemento): le livre que je lis. Ante vocal: que → qu'; qui nunca se apostrofa.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Pronombre"], [
        ["J'ai un ami qui vit à Montréal.", "Tengo un amigo que vive en Montreal.", "qui"],
        ["C'est une fille qui parle trois langues.", "Es una chica que habla tres idiomas.", "qui"],
        ["J'ai une voisine qui joue du piano.", "Tengo una vecina que toca piano.", "qui"],
        ["Voici l'étudiante qui vient du Pérou.", "Esta es la estudiante que viene de Perú.", "qui"],
        ["La série que je regarde est géniale.", "La serie que veo es genial.", "que"],
        ["C'est le livre que je lis.", "Es el libro que leo.", "que"],
        ["Le gâteau que tu as fait est délicieux.", "El pastel que hiciste está delicioso.", "que"],
        ["C'est la prof qu'on préfère.", "Es la profe que preferimos.", "qu' + vocal"],
        ["Le cours qu'il donne est intéressant.", "La clase que da es interesante.", "qu' + vocal"],
        ["l'homme qui arrive", "el hombre que llega", "qui: sin apóstrofo"]
      ]],
      ej: [["J'ai un frère qui travaille à Lyon.", "Tengo un hermano que trabaja en Lyon."], ["C'est la chanson qu'on écoute toujours.", "Es la canción que siempre escuchamos."], ["Voici la dame qui vend des fleurs.", "Esta es la señora que vende flores."], ["… qui habite ici", "… que vive aquí"], ["… qui arrive demain", "… que llega mañana"], ["… qui parle vite", "… que habla rápido"], ["… qui est malade", "… que está enfermo"], ["… que je connais", "… que conozco"], ["… que tu préfères", "… que prefieres"], ["… qu'elle a acheté", "… que compró"], ["… qu'on regarde", "… que vemos"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Le garçon que parle avec Marie", "Le garçon qui parle avec Marie", "Verbo después: qui."], ["La femme que parle avec le directeur", "La femme qui parle avec le directeur", "qui."], ["l'homme qu'arrive", "l'homme qui arrive", "qui nunca se apostrofa."]] }
  ],
  ejemplos: [
    { sit: "«Es una película que adoro.»", resp: "C'est un film que j'adore.", pasos: ["Después: je → que."], porque: "Complemento." },
    { sit: "«Tengo una vecina que toca piano.»", resp: "J'ai une voisine qui joue du piano.", pasos: ["Después: joue → qui."], porque: "Sujeto." },
    { sit: "«La clase que da es interesante.»", resp: "Le cours qu'il donne est intéressant.", pasos: ["que + il → qu'il."], porque: "Elisión." }
  ],
  comprueba: [
    { q: "Si después del relativo viene un verbo, se usa…", o: ["qui", "que"], a: 0, b: "gr", porque: "Sujeto." },
    { q: "Ante vocal, que se vuelve…", o: ["qu'", "qui"], a: 0, b: "gr", porque: "Elisión." },
    { q: "Qui se apostrofa…", o: ["nunca", "ante vocal"], a: 0, b: "gr", porque: "Nunca qu' por qui." }
  ],
  practica: [
    { fase: "guiada", c: ["qq2-que"], k: "choice", ask: "«Es una película que adoro.»", q: "«C'est un film ___ j'adore.»", o: ["que", "qui", "qu'"], a: 0, pista: "Viene je.", why: "<b>que</b>." },
    { fase: "guiada", c: ["qq2-qui"], k: "choice", ask: "«Tengo una vecina que toca piano.»", q: "«J'ai une voisine ___ joue du piano.»", o: ["qui", "que", "qu'"], a: 0, pista: "Viene un verbo.", why: "<b>qui</b>." },
    { fase: "guiada", c: ["qq2-qui", "qq2-que"], k: "sort", ask: "¿qui o que / qu'?", q: "Clasifica.", cats: ["qui", "que / qu'"], items: [["… habite ici", 0], ["… arrive demain", 0], ["… parle vite", 0], ["… est malade", 0], ["… je connais", 1], ["… tu préfères", 1], ["… elle a acheté", 1], ["… on regarde", 1]], pista: "¿Verbo o sujeto?", why: "El truco." },
    { fase: "indep", c: ["qq2-qui"], k: "fill", ask: "Escribe el relativo.", q: "Voici l'étudiante ___ vient du Pérou.", acc: ["qui"], why: "<b>qui</b>." },
    { fase: "indep", c: ["qq2-que"], k: "fill", ask: "Escribe el relativo.", q: "Le gâteau ___ tu as fait est délicieux.", acc: ["que"], why: "<b>que</b>." },
    { fase: "indep", c: ["qq2-qui"], k: "spot", ask: "Encuentra el error.", s: "La femme [que] parle avec le directeur est ma mère .", fix: "qui", why: "<b>qui</b>." },
    { fase: "aplica", c: ["qq2-que"], k: "choice", ask: "«La clase que da es interesante.»", q: "«Le cours ___ il donne est intéressant.»", o: ["qu'", "qui", "que"], a: 0, why: "<b>qu'il</b>." },
    { fase: "aplica", c: ["qq2-qui", "qq2-que"], k: "match", ask: "Une cada principio con su final.", q: "Principio → final", pairs: [["C'est le livre", "que je lis."], ["J'ai un frère", "qui travaille à Lyon."], ["C'est la chanson", "qu'on écoute toujours."], ["Voici la dame", "qui vend des fleurs."]], why: "Relativos." },
    { fase: "dominio", c: ["qq2-qui"], k: "choice", ask: "«Tengo un amigo que vive en Montreal.»", q: "«___»", o: ["J'ai un ami qui vit à Montréal.", "J'ai un ami que vit à Montréal.", "J'ai un ami qu'il vit à Montréal."], a: 0, why: "<b>qui vit</b>." },
    { fase: "dominio", c: ["qq2-que"], k: "order", ask: "Ordena: «Es la canción que prefiero».", tokens: ["C'est", "la chanson", "que", "je préfère."], why: "<b>C'est la chanson que je préfère.</b>" },
    { fase: "dominio", c: ["qq2-qui", "qq2-que"], k: "listen", say: "La série que je regarde est géniale.", acc: ["La série que je regarde est géniale."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>La série que je regarde est géniale.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Montréal", "Pérou", "Lyon", "Marie"], previo: ["ami", "vit", "parle", "trois", "langues", "série", "regardes", "regarde", "géniale", "prof", "préfère", "préfères", "conseillée", "me", "l'a", "étudiante", "vient", "gâteau", "fait", "délicieux", "fille", "voisine", "joue", "piano", "livre", "lis", "cours", "donne", "intéressant", "homme", "l'homme", "arrive", "frère", "travaille", "chanson", "écoute", "toujours", "dame", "vend", "fleurs", "film", "adore", "j'adore", "garçon", "femme", "directeur", "mère", "ma", "habite", "ici", "demain", "vite", "malade", "connais", "acheté", "on"] }
};

E["a2-portrait"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Faire le portrait de quelqu'un : il a l'air",
  objetivo: {
    que: "Vas a describir la impresión que da alguien: avoir l'air, sembler, ressembler à, y su carácter.",
    corto: "Il a l'air sympa.",
    podras: ["Decir il a l'air + adjetivo (parece).", "Decir ressembler à quelqu'un (parecerse a).", "Describir el carácter: avoir de l'humour, être de bonne humeur."],
    iconos: ["ic2/amigos", "m2d/pensativo", "ic2/corazon"],
    previos: ["El físico y el carácter (A1, lecciones 27 y 28) y el COI (lección 10)."],
    capacidad: "Ahora puedes hacer el retrato de una persona."
  },
  requiere: R("coi-forma"), recupera: ["ca2-voc", "ph-avoir"],
  conceptos: {
    "po2-air": { n: "avoir l'air / sembler + adjetivo; ressembler à", b: "voc" },
    "po2-carac": { n: "avoir de l'humour, bon caractère, être de bonne humeur", b: "voc" }
  },
  video: {
    titulo: "El retrato", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/amigos", grande: "Il a l'air sympa.", seg: [
        { es: "Hola. ¿Qué impresión da? Avoir l'air." } ] },
      { v: "dos",
        a: { tag: "parecer (impresión)", fr: "Elle a l'air contente.", es: "avoir l'air" },
        b: { tag: "parecerse a alguien", fr: "Tu ressembles à ta mère.", es: "ressembler à" },
        seg: [ { es: "Parece contenta:", p: 1 }, { fr: "Elle a l'air contente.", p: 1 }, { es: "Te pareces a tu mamá:", p: 2 }, { fr: "Tu ressembles à ta mère.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Se parece a su papá.»", o: ["Il ressemble à son père.", "Il ressemble son père."], a: 0,
        bien: "¡Sí! Ressembler à.", mal: "Ressembler va con à.",
        seg: [ { es: "Pausa. Parecerse a." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["avoir l'air", "sembler", "ressembler à", "de bonne humeur", "avoir de l'humour", "têtu"], seg: [
        { es: "Y el carácter: humor, buen genio, terco.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El nuevo colega", img: "bg-universidad", yo: "camila",
    escena: "Camila y Hugo hablan del nuevo profesor.",
    pj: PJ,
    lineas: [
      ["hugo", "Tu as vu le nouveau prof ? Il a l'air sympathique.", "¿Viste al nuevo profe? Parece simpático."],
      ["camila", "Oui, il a de l'humour. Et il est toujours de bonne humeur.", "Sí, tiene sentido del humor. Y siempre está de buen humor."],
      ["hugo", "Sa fille est dans notre classe. Elle ressemble beaucoup à son père !", "Su hija está en nuestra clase. ¡Se parece mucho a su papá!"],
      ["camila", "Elle semble timide, mais elle a bon caractère.", "Parece tímida, pero tiene buen carácter."]
    ],
    fijate: "Fíjate: il a l'air sympathique, de bonne humeur, ressemble à, semble timide."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "Impresión y carácter",
      idea: "avoir l'air + adjetivo = parecer: elle a l'air contente. sembler + adjetivo: il semble timide. ressembler à = parecerse a. Carácter: avoir de l'humour, avoir bon caractère, être de bonne / mauvaise humeur.",
      intro: "Toca cada tarjeta.",
      palabras: [
        { fr: "avoir l'air + adjetivo", es: "parecer (impresión)", ej: ["Ton nouveau collègue a l'air sympathique.", "Tu nuevo colega parece simpático."] },
        { fr: "sembler", es: "parecer", ej: ["Il semble timide.", "Parece tímido."] },
        { fr: "ressembler à", es: "parecerse a", ej: ["Elle ressemble beaucoup à sa sœur.", "Se parece mucho a su hermana."] },
        { fr: "avoir de l'humour", es: "tener sentido del humor" },
        { fr: "avoir bon caractère", es: "tener buen carácter" },
        { fr: "être de bonne humeur", es: "estar de buen humor" },
        { fr: "être de mauvaise humeur", es: "estar de mal humor" },
        { fr: "avoir l'air sérieux", es: "parecer serio" },
        { fr: "têtu", es: "terco" },
        { fr: "généreux / généreuse", es: "generoso / generosa" },
        { fr: "les lunettes", es: "las gafas" },
        { fr: "les cheveux gris", es: "el pelo canoso" },
        { fr: "les mêmes yeux", es: "los mismos ojos" }
      ],
      clave: "avoir l'air + adjetivo: el adjetivo suele concordar con la persona." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Il ressemble son père.", "Il ressemble à son père.", "ressembler à."], ["Tu ressembles de ta mère.", "Tu ressembles à ta mère.", "à."], ["Il a l'air de fatigué.", "Il a l'air fatigué.", "avoir l'air + adjetivo."]] }
  ],
  ejemplos: [
    { sit: "«Parece cansado.»", resp: "Il a l'air fatigué.", pasos: ["avoir l'air + adjetivo."], porque: "Impresión." },
    { sit: "«Te pareces a tu papá.»", resp: "Tu ressembles à ton père.", pasos: ["ressembler à."], porque: "Parecido." },
    { sit: "«Está de mal humor.»", resp: "Il est de mauvaise humeur.", pasos: ["être de mauvaise humeur."], porque: "Estado." }
  ],
  comprueba: [
    { q: "«Il a l'air content» significa…", o: ["Parece contento.", "Tiene aire contento en la cara."], a: 0, b: "voc", porque: "Impresión." },
    { q: "Ressembler va con…", o: ["à", "de"], a: 0, b: "voc", porque: "ressembler à." },
    { q: "«têtu» es…", o: ["terco", "tímido"], a: 0, b: "voc", porque: "Carácter." }
  ],
  practica: [
    { fase: "guiada", c: ["po2-air"], k: "choice", ask: "«Parece cansado.»", q: "«Il ___ fatigué.»", o: ["a l'air", "est l'air", "ressemble"], a: 0, pista: "avoir l'air.", why: "<b>a l'air</b>." },
    { fase: "guiada", c: ["po2-carac"], k: "match", ask: "Une cada expresión.", q: "Francés → español", pairs: [["avoir de l'humour", "tener sentido del humor"], ["avoir bon caractère", "tener buen carácter"], ["être de bonne humeur", "estar de buen humor"], ["avoir l'air sérieux", "parecer serio"]], pista: "humeur = humor.", why: "Carácter." },
    { fase: "guiada", c: ["po2-air", "po2-carac"], k: "sort", ask: "¿Apariencia o carácter?", q: "Clasifica.", cats: ["Apariencia", "Carácter"], items: [["il a l'air jeune", 0], ["elle a les cheveux gris", 0], ["il porte des lunettes", 0], ["elle est très grande", 0], ["il a de l'humour", 1], ["elle est généreuse", 1], ["il est têtu", 1], ["elle a bon caractère", 1]], pista: "lunettes = gafas.", why: "Retrato." },
    { fase: "indep", c: ["po2-air"], k: "fill", ask: "Escribe «parece» (a ___).", q: "Elle a ___ contente de te voir.", acc: ["l'air", "l’air"], why: "<b>l'air</b>." },
    { fase: "indep", c: ["po2-air"], k: "fill", ask: "Escribe la preposición.", q: "Mon frère ressemble ___ mon grand-père.", acc: ["à"], why: "<b>à</b>." },
    { fase: "indep", c: ["po2-air"], k: "spot", ask: "Encuentra el error.", s: "Tu ressembles [de] ta mère , vous avez les mêmes yeux .", fix: "à", why: "<b>à</b>." },
    { fase: "aplica", c: ["po2-carac"], k: "choice", es: true, say: "Il est de mauvaise humeur.", ask: "Escucha. ¿Cómo está?", q: "Elige.", o: ["De mal humor", "De buen humor", "Enfermo"], a: 0, why: "<b>mauvaise humeur</b>." },
    { fase: "aplica", c: ["po2-air"], k: "choice", ask: "«Parece tímida.»", q: "«Elle ___ timide.»", o: ["semble", "ressemble", "a l'air de"], a: 0, why: "<b>semble</b>." },
    { fase: "dominio", c: ["po2-air"], k: "choice", ask: "«Se parece mucho a su hermana.»", q: "«___»", o: ["Elle ressemble beaucoup à sa sœur.", "Elle a l'air de sa sœur.", "Elle ressemble beaucoup sa sœur."], a: 0, why: "<b>ressemble à</b>." },
    { fase: "dominio", c: ["po2-air"], k: "order", ask: "Ordena: «Tu profesora parece simpática».", tokens: ["Ta professeure", "a l'air", "sympathique."], why: "<b>Ta professeure a l'air sympathique.</b>" },
    { fase: "dominio", c: ["po2-air", "po2-carac"], k: "listen", say: "Il est toujours de bonne humeur.", acc: ["Il est toujours de bonne humeur."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Il est toujours de bonne humeur.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["vu", "nouveau", "prof", "sympathique", "toujours", "sa", "fille", "notre", "classe", "beaucoup", "son", "père", "timide", "mais", "ton", "collègue", "sœur", "contente", "content", "voir", "frère", "grand-père", "mère", "yeux", "avez", "fatigué", "jeune", "grande", "très", "porte", "ta", "professeure", "est", "ressemble", "sérieux"] }
};

E["a2-relations"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Les relations : se rencontrer, se disputer, se réconcilier",
  objetivo: {
    que: "Vas a contar relaciones con verbos pronominales recíprocos, en presente y en passé composé.",
    corto: "Ils se sont rencontrés.",
    podras: ["Usar se rencontrer, s'entendre bien avec, se disputer, se réconcilier.", "Contarlo en pasado con être: ils se sont rencontrés.", "Decir sortir avec quelqu'un."],
    iconos: ["ic2/corazon", "ic2/amigos", "m2d/pensativo"],
    previos: ["Los pronominales en pasado (lección 20)."],
    capacidad: "Ahora puedes contar la historia de una pareja o una amistad."
  },
  requiere: R("pp2-forme", "pp2-neg", "pn-pres", "bi-verbes"), recupera: ["pp2-forme"],
  conceptos: {
    "rl-verbes": { n: "se rencontrer, s'entendre avec, se disputer, se réconcilier", b: "voc" },
    "rl-passe": { n: "en pasado con être: ils se sont rencontrés; sortir avec", b: "voc" }
  },
  video: {
    titulo: "Las relaciones", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/corazon", grande: "Ils se sont rencontrés.", seg: [
        { es: "Hola. Conocerse, pelear, reconciliarse: todos con se." } ] },
      { v: "frase", filas: [
          { nota: "conocerse", p: 1, partes: [["Ils se sont rencontrés à la fac.", "-", 1]] },
          { nota: "pelear", p: 2, partes: [["On s'est disputés…", "-", 2]] },
          { nota: "reconciliarse", p: 3, partes: [["… mais on s'est réconciliés.", "-", 3]] } ], seg: [
        { es: "Se conocieron en la universidad,", p: 1 }, { es: "peleamos,", p: 2 }, { es: "pero nos reconciliamos.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Me llevo bien con mi hermana.»", o: ["Je m'entends bien avec ma sœur.", "Je m'entends bien de ma sœur."], a: 0,
        bien: "¡Sí! Avec.", mal: "S'entendre avec quelqu'un.",
        seg: [ { es: "Pausa. Llevarse bien con." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["se rencontrer", "s'entendre bien", "se disputer", "se réconcilier", "se marier", "se séparer"], seg: [
        { es: "Y en pasado, siempre être.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Una historia", img: "bg-cafe", yo: "camila",
    escena: "Camila cuenta la historia de sus padres.",
    pj: PJ,
    lineas: [
      ["camila", "Mes parents se sont rencontrés à l'université. Ils se sont mariés en 1995.", "Mis papás se conocieron en la universidad. Se casaron en 1995."],
      ["hugo", "Ils s'entendent bien ?", "¿Se llevan bien?"],
      ["camila", "Oui ! Parfois ils se disputent, mais ils se réconcilient vite.", "¡Sí! A veces pelean, pero se reconcilian rápido."],
      ["hugo", "Moi, je m'entends très bien avec ma colocataire. Elle sort avec un garçon de sa classe.", "Yo me llevo muy bien con mi compañera de piso. Sale con un muchacho de su clase."]
    ],
    fijate: "Fíjate: se sont rencontrés, se sont mariés, s'entendent, se disputent, sort avec."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "Verbos de relación",
      idea: "Pronominales recíprocos: se rencontrer (conocerse), s'entendre bien / mal avec (llevarse bien / mal), se disputer (pelear), se réconcilier, se marier, se séparer. Pasado con être: ils se sont rencontrés. sortir avec = salir con.",
      intro: "Toca cada tarjeta.",
      palabras: [
        { fr: "se rencontrer", es: "conocerse", ej: ["Ils se sont rencontrés à la fac.", "Se conocieron en la universidad."] },
        { fr: "s'entendre bien avec", es: "llevarse bien con", ej: ["Je m'entends très bien avec ma colocataire.", "Me llevo muy bien con mi compañera de piso."] },
        { fr: "se disputer", es: "pelear, discutir" },
        { fr: "se réconcilier", es: "reconciliarse", ej: ["On s'est disputés, mais on s'est réconciliés.", "Peleamos, pero nos reconciliamos."] },
        { fr: "se marier", es: "casarse" },
        { fr: "se séparer", es: "separarse" },
        { fr: "sortir avec", es: "salir con (pareja)" },
        { fr: "tomber amoureux", es: "enamorarse" },
        { fr: "s'aimer", es: "quererse" },
        { fr: "s'énerver", es: "enojarse" },
        { fr: "ne plus se parler", es: "ya no hablarse" }
      ],
      clave: "En pasado: ils se sont disputés (être + concordancia)." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je m'entends bien de ma sœur.", "Je m'entends bien avec ma sœur.", "s'entendre avec."], ["Ils se ont disputés.", "Ils se sont disputés.", "Pronominal: être."], ["Elle sort de un garçon.", "Elle sort avec un garçon.", "sortir avec."]] }
  ],
  ejemplos: [
    { sit: "«Me llevo bien con mi hermano.»", resp: "Je m'entends bien avec mon frère.", pasos: ["s'entendre bien avec."], porque: "Relación." },
    { sit: "«Se conocieron en Lyon.»", resp: "Ils se sont rencontrés à Lyon.", pasos: ["se sont + rencontrés."], porque: "Pasado." },
    { sit: "«Mis padres se casaron en 1995.»", resp: "Mes parents se sont mariés en 1995.", pasos: ["se sont + mariés."], porque: "Pasado." }
  ],
  comprueba: [
    { q: "«se disputer» significa…", o: ["pelear, discutir", "disputar un partido"], a: 0, b: "voc", porque: "Relación." },
    { q: "S'entendre bien va con…", o: ["avec", "de"], a: 0, b: "voc", porque: "avec quelqu'un." },
    { q: "En pasado, estos verbos van con…", o: ["être", "avoir"], a: 0, b: "voc", porque: "Pronominales." }
  ],
  practica: [
    { fase: "guiada", c: ["rl-verbes"], k: "choice", ask: "«Me llevo bien con mi hermano.»", q: "«Je m'entends bien ___ mon frère.»", o: ["avec", "de", "à"], a: 0, pista: "avec.", why: "<b>avec</b>." },
    { fase: "guiada", c: ["rl-verbes"], k: "match", ask: "Une cada verbo.", q: "Francés → español", pairs: [["se rencontrer", "conocerse"], ["se marier", "casarse"], ["se séparer", "separarse"], ["se réconcilier", "reconciliarse"]], pista: "rencontrer = conocer.", why: "Relaciones." },
    { fase: "guiada", c: ["rl-verbes"], k: "sort", ask: "¿Va bien o va mal?", q: "Clasifica.", cats: ["Bien", "Mal"], items: [["s'entendre bien", 0], ["se réconcilier", 0], ["tomber amoureux", 0], ["s'aimer", 0], ["se disputer", 1], ["se séparer", 1], ["s'énerver", 1], ["ne plus se parler", 1]], pista: "énerver = enojar.", why: "Relaciones." },
    { fase: "indep", c: ["rl-passe"], k: "fill", ask: "Escribe el participio de se marier (ils).", q: "Mes parents se sont ___ en 1995.", acc: ["mariés"], why: "<b>mariés</b>." },
    { fase: "indep", c: ["rl-passe"], k: "fill", ask: "Escribe la preposición.", q: "Elle sort ___ un garçon de sa classe.", acc: ["avec"], why: "<b>avec</b>." },
    { fase: "indep", c: ["rl-passe"], k: "spot", ask: "Encuentra el error.", s: "Ils se [ont] disputés hier soir .", fix: "sont", why: "<b>sont</b>." },
    { fase: "aplica", c: ["rl-passe"], k: "choice", ask: "«Se conocieron en Lyon.»", q: "«___ à Lyon.»", o: ["Ils se sont rencontrés", "Ils ont se rencontrés", "Ils se sont rencontré"], a: 0, why: "<b>se sont rencontrés</b>." },
    { fase: "aplica", c: ["rl-verbes"], k: "choice", es: true, say: "On s'est disputés, mais on s'est réconciliés.", ask: "Escucha. ¿Qué pasó?", q: "Elige.", o: ["Pelearon y se reconciliaron.", "Se conocieron y se casaron.", "Se separaron."], a: 0, why: "<b>disputés… réconciliés</b>." },
    { fase: "dominio", c: ["rl-verbes"], k: "choice", ask: "«A veces pelean, pero se reconcilian rápido.»", q: "«Parfois ils ___ , mais ils se réconcilient vite.»", o: ["se disputent", "se disputer", "disputent"], a: 0, why: "<b>se disputent</b>." },
    { fase: "dominio", c: ["rl-passe"], k: "order", ask: "Ordena: «Nos conocimos en la universidad».", tokens: ["Nous", "nous sommes", "rencontrés", "à l'université."], why: "<b>Nous nous sommes rencontrés à l'université.</b>" },
    { fase: "dominio", c: ["rl-verbes", "rl-passe"], k: "listen", say: "Je m'entends très bien avec ma colocataire.", acc: ["Je m'entends très bien avec ma colocataire."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je m'entends très bien avec ma colocataire.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Lyon"], previo: ["parents", "l'université", "université", "1995", "parfois", "mais", "vite", "très", "ma", "colocataire", "sort", "garçon", "sa", "classe", "fac", "frère", "mon", "sœur", "hier", "soir", "s'entendent", "réconcilient", "disputent", "rencontré", "ont", "nous", "sommes"] }
};

E["a2-tout"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Tout, toute, tous, toutes",
  objetivo: {
    que: "Vas a concordar tout con el nombre: tout le temps, toute la journée, tous les jours, toutes les semaines.",
    corto: "Tous les jours.",
    podras: ["Elegir tout / toute / tous / toutes.", "Usar tout solo: tout va bien.", "Usar tout le monde, tous les deux, tout de suite."],
    iconos: ["ic2/bombilla", "ic2/reloj-arena", "ic2/amigos"],
    previos: ["La frecuencia (A1, lección 22) y el género (A1, lección 3)."],
    capacidad: "Ahora no fallas con todo, toda, todos, todas."
  },
  requiere: R("fq-escala", "ad-accord"), recupera: ["fq-escala"],
  conceptos: {
    "to-forme": { n: "tout / toute / tous / toutes + artículo + nombre", b: "gr" },
    "to-expr": { n: "tout le monde, tout de suite, tous les deux, tout va bien", b: "gr" }
  },
  video: {
    titulo: "tout", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/reloj-arena", grande: "tous les jours", seg: [
        { es: "Hola. Tout concuerda como un adjetivo." } ] },
      { v: "frase", filas: [
          { nota: "masc. sing.", p: 1, partes: [["tout le temps", "-", 1]] },
          { nota: "fem. sing.", p: 2, partes: [["toute la journée", "-", 2]] },
          { nota: "masc. pl.", p: 3, partes: [["tous les jours", "-", 3]] },
          { nota: "fem. pl.", p: 4, partes: [["toutes les semaines", "-", 4]] } ], seg: [
        { es: "Todo el tiempo,", p: 1 }, { es: "todo el día,", p: 2 }, { es: "todos los días,", p: 3 }, { es: "todas las semanas.", p: 4 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«todos los días»", o: ["tous les jours", "tout les jours"], a: 0,
        bien: "¡Sí! Masculino plural: tous.", mal: "Jours es masculino plural: tous.",
        seg: [ { es: "Pausa. Todos los días." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["tout le monde", "toute la famille", "tous les deux", "tout de suite", "Tout va bien."], seg: [
        { es: "Tout le monde es todo el mundo, con verbo en singular.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La rutina de Hugo", img: "bg-cafe", yo: "camila",
    escena: "Hugo cuenta su semana.",
    pj: PJ,
    lineas: [
      ["hugo", "Je travaille toute la journée et je fais du sport tous les matins.", "Trabajo todo el día y hago deporte todas las mañanas."],
      ["camila", "Toutes les semaines, je vais à la piscine. Et le week-end ?", "Todas las semanas voy a la piscina. ¿Y el fin de semana?"],
      ["hugo", "Toute la famille est là. Tout le monde est content !", "Toda la familia está. ¡Todo el mundo está contento!"],
      ["camila", "Tous les deux, on va au cinéma ? — D'accord, tout de suite !", "¿Vamos los dos al cine? — ¡De acuerdo, enseguida!"]
    ],
    fijate: "Fíjate: toute la journée, tous les matins, toutes les semaines, tout le monde."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Las cuatro formas",
      idea: "tout + masc. sing. (tout le monde, tout le temps). toute + fem. sing. (toute la journée). tous + masc. pl. (tous les jours, tous mes amis). toutes + fem. pl. (toutes les semaines). Solo: tout = todo (tout va bien).",
      intro: "Toca cada forma.",
      tabla: [["Francés", "Español", "Forma"], [
        ["tout le temps", "todo el tiempo", "tout"],
        ["Tout le monde est content.", "Todo el mundo está contento.", "tout"],
        ["J'ai lu tout le livre.", "Leí todo el libro.", "tout"],
        ["Je travaille toute la journée.", "Trabajo todo el día.", "toute"],
        ["Toute la famille est là.", "Toda la familia está.", "toute"],
        ["toute la nuit", "toda la noche", "toute"],
        ["Tous les étudiants sont arrivés.", "Todos los estudiantes llegaron.", "tous"],
        ["tous les jours / tous les matins", "todos los días / todas las mañanas", "tous"],
        ["tous mes amis", "todos mis amigos", "tous"],
        ["Toutes les semaines, je vais à la piscine.", "Todas las semanas voy a la piscina.", "toutes"],
        ["toutes les filles", "todas las chicas", "toutes"],
        ["Tout va bien.", "Todo va bien.", "solo"]
      ]],
      ej: [["tous les deux", "los dos"], ["tout de suite", "enseguida"], ["en une journée", "en un día"], ["la piscine", "la piscina"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["tout les jours", "tous les jours", "Masc. plural: tous."], ["Je fais du sport tout les matins.", "Je fais du sport tous les matins.", "tous."], ["tout la journée", "toute la journée", "Femenino: toute."]] }
  ],
  ejemplos: [
    { sit: "«toda la noche»", resp: "toute la nuit", pasos: ["nuit: fem. sing. → toute."], porque: "Concuerda." },
    { sit: "«Todos los estudiantes llegaron.»", resp: "Tous les étudiants sont arrivés.", pasos: ["masc. pl. → tous."], porque: "Plural." },
    { sit: "«Todas las semanas voy a la piscina.»", resp: "Toutes les semaines, je vais à la piscine.", pasos: ["fem. pl. → toutes."], porque: "Plural." }
  ],
  comprueba: [
    { q: "Con jours (masc. pl.) se usa…", o: ["tous", "tout"], a: 0, b: "gr", porque: "Plural." },
    { q: "Con journée (fem. sing.) se usa…", o: ["toute", "tout"], a: 0, b: "gr", porque: "Femenino." },
    { q: "«tout de suite» significa…", o: ["enseguida", "todo seguido"], a: 0, b: "gr", porque: "Expresión." }
  ],
  practica: [
    { fase: "guiada", c: ["to-forme"], k: "choice", ask: "«todos los días»", q: "«___ les jours»", o: ["tous", "tout", "toutes"], a: 0, pista: "Masc. plural.", why: "<b>tous</b>." },
    { fase: "guiada", c: ["to-forme"], k: "choice", ask: "«toda la noche»", q: "«___ la nuit»", o: ["toute", "tout", "toutes"], a: 0, pista: "Fem. singular.", why: "<b>toute</b>." },
    { fase: "guiada", c: ["to-forme"], k: "sort", ask: "¿tout / tous o toute / toutes?", q: "Clasifica.", cats: ["tout / tous", "toute / toutes"], items: [["… le temps", 0], ["… les jours", 0], ["… le monde", 0], ["… mes amis", 0], ["… la journée", 1], ["… les filles", 1], ["… la famille", 1], ["… les semaines", 1]], pista: "Mira el género.", why: "Concordancia." },
    { fase: "indep", c: ["to-forme"], k: "fill", ask: "Escribe tout concordado (semaines).", q: "___ les semaines, je vais à la piscine.", acc: ["Toutes"], why: "<b>Toutes</b>." },
    { fase: "indep", c: ["to-forme"], k: "fill", ask: "Escribe tout concordado (livre).", q: "J'ai lu ___ le livre en une journée.", acc: ["tout"], why: "<b>tout</b>." },
    { fase: "indep", c: ["to-forme"], k: "spot", ask: "Encuentra el error.", s: "Je fais du sport [tout] les matins .", fix: "tous", why: "<b>tous</b>." },
    { fase: "aplica", c: ["to-expr"], k: "match", ask: "Une cada expresión.", q: "Francés → español", pairs: [["tout le temps", "todo el tiempo"], ["toute la journée", "todo el día"], ["tous les deux", "los dos"], ["tout de suite", "enseguida"]], why: "Expresiones." },
    { fase: "aplica", c: ["to-expr"], k: "choice", ask: "«Todo el mundo está contento.»", q: "«___ est content.»", o: ["Tout le monde", "Tous le monde", "Toute le monde"], a: 0, why: "<b>Tout le monde</b>." },
    { fase: "dominio", c: ["to-forme"], k: "choice", ask: "«Todos los estudiantes llegaron.»", q: "«___ les étudiants sont arrivés.»", o: ["Tous", "Tout", "Toutes"], a: 0, why: "<b>Tous</b>." },
    { fase: "dominio", c: ["to-forme"], k: "order", ask: "Ordena: «Toda la familia está aquí».", tokens: ["Toute", "la famille", "est là."], why: "<b>Toute la famille est là.</b>" },
    { fase: "dominio", c: ["to-forme", "to-expr"], k: "listen", say: "Je travaille toute la journée.", acc: ["Je travaille toute la journée."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je travaille toute la journée.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["travaille", "journée", "fais", "sport", "matins", "semaines", "vais", "piscine", "week-end", "famille", "là", "monde", "content", "deux", "on", "va", "cinéma", "d'accord", "suite", "temps", "livre", "lu", "nuit", "étudiants", "arrivés", "jours", "mes", "amis", "filles", "bien"] }
};

E["a2-sentiments"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Exprimer ses sentiments : je suis content de, ça m'énerve",
  objetivo: {
    que: "Vas a expresar emociones: être content de, avoir peur de, ça me plaît, ça m'énerve, j'ai hâte de.",
    corto: "Ça m'énerve !",
    podras: ["Decir je suis content(e) de + infinitivo.", "Usar ça me plaît, ça m'énerve, ça m'inquiète.", "Decir j'ai hâte de y, en familia, j'en ai marre."],
    iconos: ["ic2/corazon", "m2d/enojado", "m2d/celebrar"],
    previos: ["Las emociones (Primeros pasos) y avoir peur (A1, lección 64)."],
    capacidad: "Ahora puedes decir cómo te sientes y por qué."
  },
  requiere: R("ae-sens", "ae-besoin"), recupera: ["em-voc", "ae-sens"],
  conceptos: {
    "se-etre": { n: "être content / heureux / déçu de + infinitivo", b: "voc" },
    "se-ca": { n: "ça me plaît / m'énerve / m'inquiète; j'ai hâte de; j'en ai marre", b: "voc" }
  },
  video: {
    titulo: "Las emociones", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/enojado", grande: "Ça m'énerve !", seg: [
        { es: "Hola. ¿Cómo te sientes? Hay dos estructuras." } ] },
      { v: "dos",
        a: { tag: "adjetivo + de", fr: "Je suis content de te voir.", es: "me alegra" },
        b: { tag: "ça me…", fr: "Ça m'énerve quand il arrive en retard.", es: "me molesta" },
        seg: [ { es: "Con un adjetivo, de:", p: 1 }, { fr: "Je suis content de te voir.", p: 1 }, { es: "Con ça me:", p: 2 }, { fr: "Ça m'énerve.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Estoy muy feliz de conocerte.»", o: ["Je suis très heureuse de faire ta connaissance.", "Je suis très heureuse à faire ta connaissance."], a: 0,
        bien: "¡Sí! Adjetivo + de.", mal: "Adjetivo de emoción + de.",
        seg: [ { es: "Pausa. Feliz de." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["ça me fait plaisir", "je suis ravi", "j'ai hâte", "ça m'inquiète", "je suis déçu", "j'en ai marre"], seg: [
        { es: "J'en ai marre es familiar: solo con amigos.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Antes del viaje", img: "bg-cafe", yo: "camila",
    escena: "Camila habla de sus emociones antes de viajar.",
    pj: PJ,
    lineas: [
      ["camila", "Je suis contente de partir en vacances ! J'ai hâte de revoir ma famille.", "¡Estoy contenta de irme de vacaciones! No veo la hora de volver a ver a mi familia."],
      ["hugo", "Ça me fait plaisir pour toi. Mais tu as peur de prendre l'avion ?", "Me alegro por ti. ¿Pero te da miedo tomar el avión?"],
      ["camila", "Un peu… Et ça m'énerve d'attendre à l'aéroport.", "Un poco… Y me molesta esperar en el aeropuerto."],
      ["hugo", "Moi, j'en ai marre des examens ! Je suis déçu de ma note.", "¡Yo estoy harto de los exámenes! Estoy decepcionado de mi nota."]
    ],
    fijate: "Fíjate: contente de, j'ai hâte de, ça me fait plaisir, ça m'énerve, j'en ai marre."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "Expresar emociones",
      idea: "être + adjetivo + de + infinitivo: je suis heureux de te voir. ça me + verbo: ça me plaît, ça m'énerve, ça m'inquiète, ça me fait peur, ça me fait plaisir. J'ai peur de…, j'ai hâte de… Familiar: j'en ai marre.",
      intro: "Toca cada tarjeta.",
      palabras: [
        { fr: "Je suis content(e) de…", es: "Me alegra… / Estoy contento de…", ej: ["Je suis contente de partir en vacances.", "Estoy contenta de irme de vacaciones."] },
        { fr: "Je suis ravi(e).", es: "Estoy encantado." },
        { fr: "Je suis déçu(e).", es: "Estoy decepcionado." },
        { fr: "Ça me fait plaisir.", es: "Me alegra, me da gusto." },
        { fr: "Ça me plaît.", es: "Me gusta." },
        { fr: "Ça m'énerve.", es: "Me molesta, me saca de quicio.", ej: ["Ça m'énerve quand il arrive en retard.", "Me molesta cuando llega tarde."] },
        { fr: "Ça m'inquiète.", es: "Me preocupa." },
        { fr: "Ça me touche.", es: "Me conmueve." },
        { fr: "J'ai peur de…", es: "Me da miedo…" },
        { fr: "J'ai hâte de…", es: "No veo la hora de…", ej: ["J'ai hâte de te revoir !", "¡No veo la hora de volver a verte!"] },
        { fr: "J'en ai marre.", es: "Estoy harto. (familiar)" }
      ],
      clave: "Adjetivo de emoción + de + infinitivo." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je suis content à te voir.", "Je suis content de te voir.", "Adjetivo + de."], ["Je suis très heureuse à faire ta connaissance.", "Je suis très heureuse de faire ta connaissance.", "de."], ["J'ai peur à rater.", "J'ai peur de rater.", "avoir peur de."]] }
  ],
  ejemplos: [
    { sit: "«Me alegra verte.»", resp: "Je suis content de te voir.", pasos: ["content + de + infinitivo."], porque: "Emoción." },
    { sit: "«Me molesta esperar.»", resp: "Ça m'énerve d'attendre.", pasos: ["ça m'énerve + de."], porque: "Molestia." },
    { sit: "«Me da miedo reprobar el examen.»", resp: "J'ai peur de rater l'examen.", pasos: ["avoir peur de."], porque: "Miedo." }
  ],
  comprueba: [
    { q: "«J'ai hâte de partir» significa…", o: ["No veo la hora de irme.", "Tengo prisa por irme."], a: 0, b: "voc", porque: "Ganas." },
    { q: "«Ça m'inquiète» significa…", o: ["Me preocupa.", "Me inquieta el estómago."], a: 0, b: "voc", porque: "Preocupación." },
    { q: "Tras un adjetivo de emoción va…", o: ["de", "à"], a: 0, b: "voc", porque: "content de." }
  ],
  practica: [
    { fase: "guiada", c: ["se-etre"], k: "choice", ask: "«Me alegra verte.»", q: "«Je suis content ___ te voir.»", o: ["de", "à", "pour"], a: 0, pista: "Adjetivo + …", why: "<b>de</b>." },
    { fase: "guiada", c: ["se-ca"], k: "match", ask: "Une cada expresión.", q: "Francés → español", pairs: [["Je suis déçu.", "Estoy decepcionado."], ["Je suis ravi.", "Estoy encantado."], ["J'en ai marre.", "Estoy harto."], ["Ça me touche.", "Me conmueve."]], pista: "déçu = decepcionado.", why: "Emociones." },
    { fase: "guiada", c: ["se-etre", "se-ca"], k: "sort", ask: "¿Emoción positiva o negativa?", q: "Clasifica.", cats: ["Positiva", "Negativa"], items: [["Ça me fait plaisir.", 0], ["Je suis ravi.", 0], ["J'ai hâte !", 0], ["Ça me plaît.", 0], ["Ça m'énerve.", 1], ["J'en ai marre.", 1], ["Ça m'inquiète.", 1], ["Je suis déçu.", 1]], pista: "énerver = molestar.", why: "Emociones." },
    { fase: "indep", c: ["se-ca"], k: "fill", ask: "Escribe la preposición.", q: "J'ai peur ___ rater l'examen.", acc: ["de"], why: "<b>de</b>." },
    { fase: "indep", c: ["se-ca"], k: "fill", ask: "Escribe «placer».", q: "Ça me fait ___ de te voir.", acc: ["plaisir"], why: "<b>plaisir</b>." },
    { fase: "indep", c: ["se-etre"], k: "spot", ask: "Encuentra el error.", s: "Je suis très heureuse [à] faire ta connaissance .", fix: "de", why: "<b>de</b>." },
    { fase: "aplica", c: ["se-ca"], k: "choice", ask: "«Me preocupa.»", q: "«___»", o: ["Ça m'inquiète.", "Ça m'énerve.", "Ça me plaît."], a: 0, why: "<b>Ça m'inquiète.</b>" },
    { fase: "aplica", c: ["se-ca"], k: "choice", es: true, say: "J'ai hâte de te revoir !", ask: "Escucha. ¿Qué siente?", q: "Elige.", o: ["Tiene muchas ganas de volver a verte.", "Tiene prisa por irse.", "Tiene miedo de verte."], a: 0, why: "<b>j'ai hâte de</b>." },
    { fase: "dominio", c: ["se-ca"], k: "choice", ask: "«Me molesta cuando llega tarde.»", q: "«___ quand il arrive en retard.»", o: ["Ça m'énerve", "Ça me plaît", "Je suis ravi"], a: 0, why: "<b>Ça m'énerve</b>." },
    { fase: "dominio", c: ["se-etre"], k: "order", ask: "Ordena: «Estoy contenta de irme de vacaciones».", tokens: ["Je suis", "contente", "de partir", "en vacances."], why: "<b>Je suis contente de partir en vacances.</b>" },
    { fase: "dominio", c: ["se-etre", "se-ca"], k: "listen", say: "Ça m'énerve d'attendre.", acc: ["Ça m'énerve d'attendre."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Ça m'énerve d'attendre.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["contente", "content", "partir", "vacances", "revoir", "ma", "famille", "toi", "mais", "peur", "prendre", "l'avion", "avion", "peu", "d'attendre", "attendre", "l'aéroport", "aéroport", "examens", "note", "voir", "te", "heureuse", "heureux", "faire", "ta", "connaissance", "rater", "l'examen", "examen", "arrive", "retard", "quand", "très", "pour"] }
};

E["a2-conseils-conditionnel"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Donner un conseil : tu devrais, à ta place",
  objetivo: {
    que: "Vas a aconsejar con suavidad usando el condicional: tu devrais, tu pourrais, à ta place je…, il faudrait.",
    corto: "Tu devrais dormir plus.",
    podras: ["Formar el condicional: raíz del futuro + -ais, -ait…", "Decir tu devrais / vous pourriez + infinitivo.", "Decir à ta place, je… e il faudrait…"],
    iconos: ["ic2/bombilla", "ic2/corazon", "m2d/pensativo"],
    previos: ["El futur simple (lección 4), el imparfait (lección 3) y la cortesía (A1, lección 58)."],
    capacidad: "Ahora puedes aconsejar sin sonar mandón."
  },
  requiere: R("fu-simple", "fu-irreg", "imp-forma", "co3-devoir", "sc-conseil"), recupera: ["pz-cond", "fu-irreg"],
  conceptos: {
    "cc-forme": { n: "condicional: raíz del futuro + -ais, -ait, -ions, -iez, -aient", b: "gr" },
    "cc-conseil": { n: "tu devrais, tu pourrais, à ta place je…, il faudrait", b: "gr" }
  },
  video: {
    titulo: "Aconsejar", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/bombilla", grande: "Tu devrais…", seg: [
        { es: "Hola. El condicional suaviza: deberías en vez de debes." } ] },
      { v: "dos",
        a: { tag: "orden", fr: "Tu dois dormir plus.", es: "debes" },
        b: { tag: "consejo", fr: "Tu devrais dormir plus.", es: "deberías" },
        seg: [ { es: "Esto suena a orden:", p: 1 }, { fr: "Tu dois dormir plus.", p: 1 }, { es: "Esto es un consejo:", p: 2 }, { fr: "Tu devrais dormir plus.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Deberías hablar con tu profesor.»", o: ["Tu devrais parler avec ton professeur.", "Tu devrait parler avec ton professeur."], a: 0,
        bien: "¡Sí! Tu devrais.", mal: "Con tu: devrais, con s.",
        seg: [ { es: "Pausa. Deberías." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["je devrais", "tu devrais", "il devrait", "vous devriez", "à ta place", "il faudrait"], seg: [
        { es: "Raíz del futuro, terminaciones del imparfait.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "¿Qué hago?", img: "bg-cafe", yo: "camila",
    escena: "Camila pide consejo a Hugo.",
    pj: PJ,
    lineas: [
      ["camila", "Je suis fatiguée et on m'a proposé un stage à Paris…", "Estoy cansada y me propusieron unas prácticas en París…"],
      ["hugo", "D'abord, tu devrais dormir plus. Et à ta place, j'accepterais ce stage !", "Primero, deberías dormir más. ¡Y yo en tu lugar aceptaría esas prácticas!"],
      ["camila", "Mais je ne parle pas assez bien français…", "Pero no hablo francés lo bastante bien…"],
      ["hugo", "Tu pourrais demander au professeur. Il faudrait réviser un peu chaque soir.", "Podrías preguntarle al profesor. Haría falta repasar un poco cada noche."]
    ],
    fijate: "Fíjate: tu devrais, j'accepterais, tu pourrais, il faudrait."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "El condicional para aconsejar",
      idea: "Condicional = raíz del futuro + -ais, -ais, -ait, -ions, -iez, -aient. devoir → je devrais; pouvoir → tu pourrais; prendre → je prendrais; falloir → il faudrait. Tu devrais + infinitivo. À ta place, je + condicional.",
      intro: "Toca cada forma.",
      tabla: [["Francés", "Español", "Uso"], [
        ["je devrais / tu devrais", "debería / deberías", "devoir"],
        ["il devrait", "debería", "devoir"],
        ["vous devriez", "deberían", "devoir"],
        ["Tu devrais dormir plus.", "Deberías dormir más.", "consejo"],
        ["Tu devrais te reposer.", "Deberías descansar.", "consejo"],
        ["Tu pourrais l'appeler.", "Podrías llamarla.", "pouvoir"],
        ["Vous pourriez demander au professeur.", "Podrían preguntarle al profesor.", "pouvoir"],
        ["À ta place, j'accepterais ce stage.", "Yo en tu lugar aceptaría esas prácticas.", "à ta place"],
        ["À ta place, je prendrais un taxi.", "Yo en tu lugar tomaría un taxi.", "prendre"],
        ["Il faudrait réviser ce soir.", "Haría falta repasar esta noche.", "falloir"]
      ]],
      ej: [["Tu devrais partir.", "Deberías irte."], ["À ta place, je partirais.", "Yo en tu lugar me iría."], ["Tu pourrais essayer.", "Podrías intentarlo."], ["Pars !", "¡Vete!"], ["Tu dois partir maintenant.", "Tienes que irte ya."], ["Il faut obéir.", "Hay que obedecer."], ["Tu devrais aller chez le médecin.", "Deberías ir al médico."], ["Tu pourrais prendre un taxi.", "Podrías tomar un taxi."], ["Tu devrais sortir avec des amis.", "Deberías salir con amigos."], ["Je m'ennuie.", "Me aburro."], ["J'ai raté le bus.", "Perdí el bus."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Tu devrait parler.", "Tu devrais parler.", "tu: -ais."], ["Tu dois dormir plus (consejo).", "Tu devrais dormir plus.", "Consejo: condicional."], ["À ta place, je prendrai un taxi.", "À ta place, je prendrais un taxi.", "Condicional: -ais."]] }
  ],
  ejemplos: [
    { sit: "«Deberías descansar.»", resp: "Tu devrais te reposer.", pasos: ["tu devrais + infinitivo."], porque: "Consejo." },
    { sit: "«Yo en tu lugar tomaría un taxi.»", resp: "À ta place, je prendrais un taxi.", pasos: ["à ta place + condicional."], porque: "Consejo." },
    { sit: "«Deberían repasar un poco más.»", resp: "Vous devriez réviser un peu plus.", pasos: ["vous devriez."], porque: "Plural." }
  ],
  comprueba: [
    { q: "El condicional usa la raíz…", o: ["del futuro", "del presente"], a: 0, b: "gr", porque: "devr-, pourr-." },
    { q: "«À ta place» significa…", o: ["Yo en tu lugar", "En tu casa"], a: 0, b: "gr", porque: "Consejo." },
    { q: "«il faudrait» significa…", o: ["haría falta", "faltó"], a: 0, b: "gr", porque: "Condicional de falloir." }
  ],
  practica: [
    { fase: "guiada", c: ["cc-conseil"], k: "choice", ask: "«Deberías descansar.»", q: "«___ te reposer.»", o: ["Tu devrais", "Tu dois", "Tu devrait"], a: 0, pista: "Condicional, tu.", why: "<b>Tu devrais</b>." },
    { fase: "guiada", c: ["cc-conseil"], k: "match", ask: "Une cada problema con su consejo.", q: "Problema → consejo", pairs: [["Je suis malade.", "Tu devrais aller chez le médecin."], ["J'ai raté le bus.", "Tu pourrais prendre un taxi."], ["Je m'ennuie.", "Tu devrais sortir avec des amis."], ["J'ai un examen.", "Il faudrait réviser ce soir."]], pista: "malade → médecin.", why: "Consejos." },
    { fase: "guiada", c: ["cc-conseil"], k: "sort", ask: "¿Consejo u orden?", q: "Clasifica.", cats: ["Consejo", "Orden"], items: [["Tu devrais partir.", 0], ["À ta place, je partirais.", 0], ["Tu pourrais essayer.", 0], ["Il faudrait réviser.", 0], ["Pars !", 1], ["Tu dois partir maintenant.", 1], ["Fais-le !", 1], ["Il faut obéir.", 1]], pista: "Condicional = consejo.", why: "Tono." },
    { fase: "indep", c: ["cc-forme"], k: "fill", ask: "Escribe devoir en condicional (vous).", q: "Vous ___ réviser un peu plus.", acc: ["devriez"], why: "<b>devriez</b>." },
    { fase: "indep", c: ["cc-forme"], k: "fill", ask: "Escribe prendre en condicional (je).", q: "À ta place, je ___ un taxi.", acc: ["prendrais"], why: "<b>prendrais</b>." },
    { fase: "indep", c: ["cc-forme"], k: "spot", ask: "Encuentra el error.", s: "Tu [devrait] parler avec ton professeur .", fix: "devrais", why: "<b>devrais</b>." },
    { fase: "aplica", c: ["cc-conseil"], k: "choice", ask: "«Podrías llamarla.»", q: "«___»", o: ["Tu pourrais l'appeler.", "Tu peux l'appeler !", "Tu pourras l'appeler."], a: 0, why: "<b>Tu pourrais</b>." },
    { fase: "aplica", c: ["cc-conseil"], k: "choice", es: true, say: "À ta place, j'accepterais ce stage.", ask: "Escucha. ¿Qué aconseja?", q: "Elige.", o: ["Aceptar las prácticas", "Rechazar las prácticas", "Buscar otro trabajo"], a: 0, why: "<b>j'accepterais</b>." },
    { fase: "dominio", c: ["cc-conseil"], k: "choice", ask: "«Haría falta repasar esta noche.»", q: "«___ réviser ce soir.»", o: ["Il faudrait", "Il faut que", "Il faudra de"], a: 0, why: "<b>Il faudrait</b>." },
    { fase: "dominio", c: ["cc-conseil"], k: "order", ask: "Ordena: «Yo en tu lugar aceptaría».", tokens: ["À ta place,", "j'", "accepterais."], why: "<b>À ta place, j'accepterais.</b>" },
    { fase: "dominio", c: ["cc-forme", "cc-conseil"], k: "listen", say: "Tu devrais dormir plus.", acc: ["Tu devrais dormir plus."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Tu devrais dormir plus.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paris"], previo: ["fatiguée", "proposé", "m'a", "stage", "d'abord", "dormir", "plus", "ce", "mais", "parle", "assez", "bien", "français", "demander", "professeur", "réviser", "peu", "chaque", "soir", "reposer", "te", "l'appeler", "taxi", "partir", "essayer", "maintenant", "obéir", "aller", "médecin", "sortir", "amis", "malade", "raté", "bus", "examen", "m'ennuie", "parler", "ton", "peux", "pourras", "faudra", "faut", "que"] }
};

E["a2-proposer"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Proposer, accepter, refuser : ça te dirait ?",
  objetivo: {
    que: "Vas a proponer planes con ça te dirait de… ? y et si on + imparfait, y a aceptar o rechazar con cortesía.",
    corto: "Et si on allait au cinéma ?",
    podras: ["Proponer con Ça te dirait de… ? y Et si on + imparfait ?", "Aceptar: Volontiers ! Ça marche !", "Rechazar: C'est gentil, mais je suis déjà pris."],
    iconos: ["ic2/amigos", "m2d/celebrar", "ic2/corazon"],
    previos: ["Las salidas (A1, lección 50) y el imparfait (lección 3)."],
    capacidad: "Ahora puedes proponer planes como un francés."
  },
  requiere: R("so-proposer", "so-repondre", "imp-forma", "on-forma"), recupera: ["so-proposer", "so-repondre"],
  conceptos: {
    "pr2-proposer": { n: "Ça te dirait de… ? Et si on + imparfait ?", b: "voc" },
    "pr2-repondre": { n: "Volontiers ! Ça marche ! C'est gentil, mais…", b: "voc" }
  },
  video: {
    titulo: "Proponer planes", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/amigos", grande: "Ça te dirait ?", seg: [
        { es: "Hola. Dos maneras elegantes de proponer." } ] },
      { v: "dos",
        a: { tag: "¿te apetecería?", fr: "Ça te dirait d'aller à la plage ?", es: "ça te dirait de" },
        b: { tag: "¿y si…?", fr: "Et si on regardait un film ?", es: "et si + imparfait" },
        seg: [ { es: "¿Te apetecería?", p: 1 }, { fr: "Ça te dirait d'aller à la plage ?", p: 1 }, { es: "¿Y si…? con imparfait:", p: 2 }, { fr: "Et si on regardait un film ?", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«¿Y si fuéramos a la playa mañana?»", o: ["Et si on allait à la plage demain ?", "Et si on va à la plage demain ?"], a: 0,
        bien: "¡Sí! Et si + imparfait.", mal: "Para proponer: et si + imparfait.",
        seg: [ { es: "Pausa. ¿Y si fuéramos?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Volontiers !", "Ça marche !", "Pourquoi pas ?", "Je suis déjà pris.", "Une autre fois ?"], seg: [
        { es: "Para rechazar, siempre con una excusa.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El sábado", img: "bg-cafe", yo: "camila",
    escena: "Hugo propone planes a Camila.",
    pj: PJ,
    lineas: [
      ["hugo", "Ça te dirait d'aller à la plage samedi ?", "¿Te apetecería ir a la playa el sábado?"],
      ["camila", "C'est gentil, mais je suis déjà prise. Une autre fois ?", "Es muy amable, pero ya tengo planes. ¿Otro día?"],
      ["hugo", "Et si on regardait un film ce soir ? On pourrait commander une pizza.", "¿Y si vemos una película esta noche? Podríamos pedir una pizza."],
      ["camila", "Volontiers ! Ça marche !", "¡Con gusto! ¡Hecho!"]
    ],
    fijate: "Fíjate: ça te dirait de, je suis déjà prise, et si on regardait, volontiers."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "Proponer y responder",
      idea: "Proponer: Ça te dirait de + infinitivo ? Et si on + imparfait ? On pourrait… Tu es libre… ? Aceptar: Volontiers ! Avec plaisir ! Ça marche ! Rechazar: C'est gentil, mais je ne peux pas / je suis déjà pris(e).",
      intro: "Toca cada tarjeta.",
      palabras: [
        { fr: "Ça te dirait de… ?", es: "¿Te apetecería…?", ej: ["Ça te dirait d'aller à la plage samedi ?", "¿Te apetecería ir a la playa el sábado?"] },
        { fr: "Et si on allait… ?", es: "¿Y si fuéramos…?", ej: ["Et si on regardait un film ?", "¿Y si vemos una película?"] },
        { fr: "On pourrait…", es: "Podríamos…" },
        { fr: "Volontiers !", es: "¡Con gusto!" },
        { fr: "Ça marche !", es: "¡Hecho!" },
        { fr: "Pourquoi pas ?", es: "¿Por qué no?" },
        { fr: "C'est gentil, mais…", es: "Es muy amable, pero…" },
        { fr: "Je suis déjà pris(e).", es: "Ya tengo planes." },
        { fr: "Une autre fois ?", es: "¿Otro día?" },
        { fr: "Et si on mangeait ensemble ?", es: "¿Y si comemos juntos?" },
        { fr: "Et si on sortait ?", es: "¿Y si salimos?" },
        { fr: "Et si on commandait une pizza ?", es: "¿Y si pedimos una pizza?" }
      ],
      clave: "Et si + imparfait = ¿y si…? (propuesta)." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Et si on va au cinéma ?", "Et si on allait au cinéma ?", "Et si + imparfait."], ["Ça te dirait aller ?", "Ça te dirait d'aller ?", "dirait de."], ["Je suis déjà pris (Camila).", "Je suis déjà prise.", "Mujer: prise."]] }
  ],
  ejemplos: [
    { sit: "«¿Te apetecería venir?»", resp: "Ça te dirait de venir ?", pasos: ["ça te dirait de + infinitivo."], porque: "Proponer." },
    { sit: "«¿Y si fuéramos al parque?»", resp: "Et si on allait au parc ?", pasos: ["et si + imparfait."], porque: "Proponer." },
    { sit: "Te invitan y no puedes.", resp: "C'est gentil, mais je ne peux pas.", pasos: ["Agradecer + excusa."], porque: "Rechazar." }
  ],
  comprueba: [
    { q: "«Volontiers !» significa…", o: ["¡Con gusto!", "¡Voluntario!"], a: 0, b: "voc", porque: "Aceptar." },
    { q: "Después de «et si» para proponer va…", o: ["imparfait", "presente"], a: 0, b: "voc", porque: "et si on allait." },
    { q: "«Je suis déjà pris» significa…", o: ["Ya tengo planes.", "Ya estoy preso."], a: 0, b: "voc", porque: "Rechazar." }
  ],
  practica: [
    { fase: "guiada", c: ["pr2-proposer"], k: "choice", ask: "«¿Te apetecería venir?»", q: "«___ de venir ?»", o: ["Ça te dirait", "Ça te dit que", "Tu dirais"], a: 0, pista: "Ça te dirait…", why: "<b>Ça te dirait</b>." },
    { fase: "guiada", c: ["pr2-repondre"], k: "match", ask: "Une cada expresión.", q: "Francés → español", pairs: [["Je suis déjà pris.", "Ya tengo planes."], ["Une autre fois ?", "¿Otro día?"], ["Pourquoi pas ?", "¿Por qué no?"], ["Ça marche !", "¡Hecho!"]], pista: "pris = ocupado.", why: "Respuestas." },
    { fase: "guiada", c: ["pr2-proposer", "pr2-repondre"], k: "sort", ask: "¿Proponer o responder?", q: "Clasifica.", cats: ["Proponer", "Responder"], items: [["Ça te dirait de… ?", 0], ["Et si on sortait ?", 0], ["Tu es libre samedi ?", 0], ["On pourrait aller au cinéma.", 0], ["Volontiers !", 1], ["Désolé, je ne peux pas.", 1], ["Pourquoi pas ?", 1], ["C'est gentil, mais…", 1]], pista: "Volontiers = con gusto.", why: "Diálogo." },
    { fase: "indep", c: ["pr2-repondre"], k: "fill", ask: "Escribe «Con gusto».", q: "— On va au concert ? — ___ !", acc: ["Volontiers"], why: "<b>Volontiers</b>." },
    { fase: "indep", c: ["pr2-proposer"], k: "fill", ask: "Escribe commander en imparfait (on).", q: "Et si on ___ une pizza ce soir ?", acc: ["commandait"], why: "<b>commandait</b>." },
    { fase: "indep", c: ["pr2-proposer"], k: "spot", ask: "Encuentra el error.", s: "Et si on [va] à la plage demain ?", fix: "allait", why: "<b>allait</b>." },
    { fase: "aplica", c: ["pr2-repondre"], k: "choice", ask: "Te invitan y no puedes.", q: "«___»", o: ["C'est gentil, mais je ne peux pas.", "Volontiers !", "Ça marche !"], a: 0, why: "Rechazas con cortesía." },
    { fase: "aplica", c: ["pr2-proposer"], k: "choice", es: true, say: "Et si on regardait un film ce soir ?", ask: "Escucha. ¿Qué propone?", q: "Elige.", o: ["Ver una película esta noche", "Ir al cine mañana", "Comer una pizza"], a: 0, why: "<b>regardait un film</b>." },
    { fase: "dominio", c: ["pr2-proposer"], k: "choice", ask: "«¿Y si fuéramos al parque?»", q: "«___»", o: ["Et si on allait au parc ?", "Et si on va au parc ?", "Et si on irait au parc ?"], a: 0, why: "<b>allait</b>." },
    { fase: "dominio", c: ["pr2-proposer"], k: "order", ask: "Ordena: «¿Te apetecería cenar juntos?».", tokens: ["Ça te dirait", "de dîner", "ensemble ?"], why: "<b>Ça te dirait de dîner ensemble ?</b>" },
    { fase: "dominio", c: ["pr2-proposer", "pr2-repondre"], k: "listen", say: "Ça te dirait d'aller à la plage samedi ?", acc: ["Ça te dirait d'aller à la plage samedi ?", "Ça te dirait d'aller à la plage samedi?", "Ça te dirait d'aller à la plage samedi"], num: false, dict: true, ask: "Escucha la pregunta y escríbela.", why: "Era <b>Ça te dirait d'aller à la plage samedi ?</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["d'aller", "aller", "plage", "samedi", "gentil", "mais", "prise", "pris", "autre", "fois", "regardait", "film", "ce", "soir", "commander", "pizza", "venir", "parc", "dîner", "ensemble", "concert", "libre", "cinéma", "désolé", "peux", "demain", "dit", "dirais", "irait", "va", "mangeait", "sortait"] }
};

E["a2-excuses"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "S'excuser : je suis désolé, pardon",
  objetivo: {
    que: "Vas a pedir perdón según la situación y responder a una disculpa.",
    corto: "Je suis désolé de…",
    podras: ["Usar Pardon, Excuse-moi, Je suis vraiment désolé(e) de…", "Escribir Je vous prie de m'excuser.", "Responder Ce n'est pas grave, ça arrive."],
    iconos: ["m2d/triste", "ic2/corazon", "ic2/amigos"],
    previos: ["La cortesía (A1, lección 58) y los sentimientos (lección 47)."],
    capacidad: "Ahora puedes disculparte bien en cualquier situación."
  },
  requiere: R("pz-reg", "se-etre", "ipr-moi"), recupera: ["pz-reg", "se-etre"],
  conceptos: {
    "ex-pardon": { n: "Pardon, Excuse-moi, Je suis désolé(e) de + infinitivo", b: "voc" },
    "ex-repondre": { n: "Ce n'est pas grave, Ne t'inquiète pas, Ça arrive", b: "voc" }
  },
  video: {
    titulo: "Pedir perdón", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/triste", grande: "Je suis désolée.", seg: [
        { es: "Hola. Hay perdones pequeños y perdones grandes." } ] },
      { v: "frase", filas: [
          { nota: "leve", p: 1, partes: [["Pardon !", "-", 1]] },
          { nota: "más fuerte", p: 2, partes: [["Je suis vraiment désolée d'être en retard.", "-", 2]] },
          { nota: "formal", p: 3, partes: [["Je vous prie de m'excuser pour ce retard.", "-", 3]] } ], seg: [
        { es: "Si empujas a alguien,", p: 1 }, { es: "si llegas tarde,", p: 2 }, { es: "y por escrito, formal.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Lamento llegar tarde.»", o: ["Je suis désolé d'arriver en retard.", "Je suis désolé pour arriver en retard."], a: 0,
        bien: "¡Sí! Désolé de.", mal: "Désolé de + infinitivo.",
        seg: [ { es: "Pausa. Lamento." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Ce n'est pas grave.", "Ne t'inquiète pas.", "Ça arrive.", "Il n'y a pas de mal."], seg: [
        { es: "Y para responder: no pasa nada.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Llegar tarde", img: "bg-cafe", yo: "camila",
    escena: "Camila llega tarde a la cita con Hugo.",
    pj: PJ,
    lineas: [
      ["camila", "Je suis vraiment désolée d'arriver en retard !", "¡Lo siento mucho por llegar tarde!"],
      ["hugo", "Ce n'est pas grave, ça arrive !", "¡No pasa nada, sucede!"],
      ["camila", "Et excuse-moi, j'ai oublié ton livre…", "Y perdona, olvidé tu libro…"],
      ["hugo", "Ne t'inquiète pas, ce n'est rien.", "No te preocupes, no es nada."]
    ],
    fijate: "Fíjate: désolée d'arriver, excuse-moi, ce n'est pas grave, ne t'inquiète pas."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "Disculparse",
      idea: "Leve: Pardon ! Excuse-moi / Excusez-moi. Más fuerte: Je suis (vraiment) désolé(e) de + infinitivo. Formal (escrito): Je vous prie de m'excuser. Responder: Ce n'est pas grave. Ne t'inquiète pas. Ça arrive. Il n'y a pas de mal.",
      intro: "Toca cada tarjeta.",
      palabras: [
        { fr: "Pardon !", es: "¡Perdón!" },
        { fr: "Excuse-moi / Excusez-moi", es: "Perdona / Disculpe", ej: ["Excuse-moi, j'ai oublié ton anniversaire.", "Perdona, olvidé tu cumpleaños."] },
        { fr: "Je suis vraiment désolé(e) de…", es: "Lo siento mucho por…", ej: ["Je suis désolée d'arriver en retard.", "Lamento llegar tarde."] },
        { fr: "Désolé pour le retard.", es: "Perdón por la demora." },
        { fr: "Je te demande pardon.", es: "Te pido perdón." },
        { fr: "Je vous prie de m'excuser.", es: "Le ruego que me disculpe. (formal)" },
        { fr: "Excusez-moi de vous interrompre.", es: "Disculpe que lo interrumpa." },
        { fr: "Ce n'est pas grave.", es: "No pasa nada." },
        { fr: "Ne t'inquiète pas.", es: "No te preocupes." },
        { fr: "Ça arrive.", es: "Sucede." },
        { fr: "Il n'y a pas de mal.", es: "No hay problema." },
        { fr: "Ce n'est rien.", es: "No es nada." }
      ],
      clave: "désolé(e) de + infinitivo; désolé pour + nombre." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je suis désolé pour arriver en retard.", "Je suis désolé d'arriver en retard.", "désolé de + infinitivo."], ["Je suis désolée pour être en retard.", "Je suis désolée d'être en retard.", "d'."], ["Excuse-me !", "Excuse-moi !", "me → moi."]] }
  ],
  ejemplos: [
    { sit: "Empujas a alguien en el metro.", resp: "Pardon !", pasos: ["Leve."], porque: "Situación." },
    { sit: "Carta a una empresa.", resp: "Je vous prie de m'excuser.", pasos: ["Formal."], porque: "Escrito." },
    { sit: "«Perdón, ¡lo olvidé!» Respondes.", resp: "Ce n'est pas grave.", pasos: ["Tranquilizar."], porque: "Respuesta." }
  ],
  comprueba: [
    { q: "Désolé + infinitivo lleva…", o: ["de", "pour"], a: 0, b: "voc", porque: "désolé d'arriver." },
    { q: "«Ce n'est pas grave» significa…", o: ["No pasa nada.", "No es grave la enfermedad."], a: 0, b: "voc", porque: "Respuesta." },
    { q: "La forma más formal es…", o: ["Je vous prie de m'excuser.", "Pardon !"], a: 0, b: "voc", porque: "Escrita." }
  ],
  practica: [
    { fase: "guiada", c: ["ex-pardon"], k: "choice", ask: "«Lamento llegar tarde.»", q: "«Je suis désolé ___ arriver en retard.»", o: ["d'", "pour", "à"], a: 0, pista: "désolé de.", why: "<b>d'</b>." },
    { fase: "guiada", c: ["ex-pardon"], k: "match", ask: "¿Qué dices en cada situación?", q: "Frase → situación", pairs: [["Désolé pour le retard.", "Llegas tarde."], ["Pardon !", "Empujas a alguien."], ["Je suis désolé, j'ai oublié.", "Olvidaste una cita."], ["Excusez-moi de vous interrompre.", "Interrumpes."]], pista: "Pardon: leve.", why: "Situaciones." },
    { fase: "guiada", c: ["ex-pardon", "ex-repondre"], k: "sort", ask: "¿Disculparse o responder?", q: "Clasifica.", cats: ["Disculparse", "Responder"], items: [["Pardon !", 0], ["Je suis vraiment désolé.", 0], ["Excusez-moi.", 0], ["Je te demande pardon.", 0], ["Ce n'est pas grave.", 1], ["Ne t'inquiète pas.", 1], ["Ça arrive.", 1], ["Il n'y a pas de mal.", 1]], pista: "grave = grave.", why: "Diálogo." },
    { fase: "indep", c: ["ex-pardon"], k: "fill", ask: "Escribe el pronombre (me).", q: "Excuse-___ , je ne t'ai pas vu.", acc: ["moi"], why: "<b>moi</b>." },
    { fase: "indep", c: ["ex-repondre"], k: "fill", ask: "Escribe «preocupes».", q: "Ne t'___ pas, ce n'est rien.", acc: ["inquiète"], why: "<b>inquiète</b>." },
    { fase: "indep", c: ["ex-pardon"], k: "spot", ask: "Encuentra el error.", s: "Je suis désolée [pour] être en retard .", fix: "d'", why: "<b>d'être</b>." },
    { fase: "aplica", c: ["ex-repondre"], k: "choice", ask: "— «Pardon, j'ai oublié !»", q: "Tú: «___»", o: ["Ce n'est pas grave.", "Je vous prie de m'excuser.", "Pardon !"], a: 0, why: "Tranquilizas." },
    { fase: "aplica", c: ["ex-pardon"], k: "choice", ask: "Escribes a una empresa.", q: "«___ pour ce retard.»", o: ["Je vous prie de m'excuser", "Oups, pardon", "Excuse-moi"], a: 0, why: "Formal." },
    { fase: "dominio", c: ["ex-pardon"], k: "choice", es: true, say: "Excuse-moi, j'ai oublié ton anniversaire.", ask: "Escucha. ¿Qué olvidó?", q: "Elige.", o: ["Tu cumpleaños", "Tu libro", "La cita"], a: 0, why: "<b>anniversaire</b>." },
    { fase: "dominio", c: ["ex-pardon"], k: "order", ask: "Ordena: «Perdona, olvidé tu libro».", tokens: ["Excuse-moi,", "j'ai oublié", "ton livre."], why: "<b>Excuse-moi, j'ai oublié ton livre.</b>" },
    { fase: "dominio", c: ["ex-pardon", "ex-repondre"], k: "listen", say: "Je suis vraiment désolée d'arriver en retard.", acc: ["Je suis vraiment désolée d'arriver en retard."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je suis vraiment désolée d'arriver en retard.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["vraiment", "désolée", "désolé", "d'arriver", "arriver", "retard", "grave", "oublié", "ton", "livre", "rien", "anniversaire", "d'être", "être", "vu", "t'ai", "interrompre", "oups", "ce", "cette"] }
};

E["a2-accord-desaccord"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Être d'accord ou pas : moi aussi, moi non plus",
  objetivo: {
    que: "Vas a reaccionar con moi aussi / moi non plus / moi si / moi non y a dar tu acuerdo o desacuerdo.",
    corto: "Moi aussi / moi non plus.",
    podras: ["Usar moi aussi tras una afirmación y moi non plus tras una negación.", "Oponerte con moi si / moi non.", "Decir je suis d'accord / pas d'accord, tu as raison / tort."],
    iconos: ["ic2/amigos", "m2d/pensativo", "ic2/bombilla"],
    previos: ["Los pronombres tónicos (A1, lección 59) y avoir raison (A1, lección 64)."],
    capacidad: "Ahora puedes reaccionar en una conversación."
  },
  requiere: R("pt-forma", "pt-uso", "ae-besoin", "de-plus"), recupera: ["pt-uso"],
  conceptos: {
    "ad2-moi": { n: "moi aussi / moi non plus / moi si / moi non", b: "voc" },
    "ad2-accord": { n: "je suis d'accord, tu as raison / tort, pas du tout, ça dépend", b: "voc" }
  },
  video: {
    titulo: "Yo también, yo tampoco", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/amigos", grande: "Moi aussi !", seg: [
        { es: "Hola. Para reaccionar, mira si la frase es positiva o negativa." } ] },
      { v: "dos",
        a: { tag: "frase positiva", fr: "J'aime voyager. — Moi aussi.", es: "yo también" },
        b: { tag: "frase negativa", fr: "Je ne fume pas. — Moi non plus.", es: "yo tampoco" },
        seg: [ { es: "Tras una frase positiva:", p: 1 }, { fr: "Moi aussi.", p: 1 }, { es: "Tras una frase negativa:", p: 2 }, { fr: "Moi non plus.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«No me gusta el café. — Yo tampoco.»", o: ["Moi non plus.", "Moi aussi."], a: 0,
        bien: "¡Sí! Tras negación.", mal: "Tras una negación: moi non plus.",
        seg: [ { es: "Pausa. Yo tampoco." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["moi aussi", "moi non plus", "moi si", "moi non", "je suis d'accord", "ça dépend"], seg: [
        { es: "Para oponerte: moi si, moi non.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Gustos", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo comparan sus gustos.",
    pj: PJ,
    lineas: [
      ["hugo", "J'adore le rap. — Moi non, je préfère le jazz.", "Me encanta el rap. — A mí no, prefiero el jazz."],
      ["camila", "Je n'aime pas le froid. — Moi si, j'adore l'hiver !", "No me gusta el frío. — ¡A mí sí, me encanta el invierno!"],
      ["hugo", "Je suis fatigué. — Moi aussi. Je ne parle pas allemand. — Moi non plus.", "Estoy cansado. — Yo también. No hablo alemán. — Yo tampoco."],
      ["camila", "Les réseaux sociaux, c'est mauvais. — Je ne suis pas d'accord. Ça dépend !", "Las redes sociales son malas. — No estoy de acuerdo. ¡Depende!"]
    ],
    fijate: "Fíjate: moi non, moi si, moi aussi, moi non plus, je ne suis pas d'accord, ça dépend."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "Reaccionar",
      idea: "Frase positiva → moi aussi (igual) / moi non (distinto). Frase negativa → moi non plus (igual) / moi si (distinto). Je suis d'accord / pas d'accord. Tu as raison / tort. C'est vrai. Pas du tout ! Ça dépend.",
      intro: "Toca cada tarjeta.",
      palabras: [
        { fr: "Moi aussi.", es: "Yo también.", ej: ["Je suis fatigué. — Moi aussi.", "Estoy cansado. — Yo también."] },
        { fr: "Moi non plus.", es: "Yo tampoco.", ej: ["Je ne parle pas allemand. — Moi non plus.", "No hablo alemán. — Yo tampoco."] },
        { fr: "Moi si.", es: "Yo sí. (tras negación)" },
        { fr: "Moi non.", es: "Yo no. (tras afirmación)" },
        { fr: "Je suis d'accord avec toi.", es: "Estoy de acuerdo contigo." },
        { fr: "Je ne suis pas d'accord.", es: "No estoy de acuerdo." },
        { fr: "Tu as raison.", es: "Tienes razón." },
        { fr: "Tu as tort.", es: "Estás equivocado." },
        { fr: "C'est vrai.", es: "Es verdad." },
        { fr: "Pas du tout !", es: "¡Para nada!" },
        { fr: "Ça dépend.", es: "Depende." },
        { fr: "Moi, je pense le contraire.", es: "Yo pienso lo contrario." }
      ],
      clave: "Negación → moi non plus / moi si." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je n'aime pas le café. — Moi aussi.", "Je n'aime pas le café. — Moi non plus.", "Tras negación: non plus."], ["Je ne comprends pas. — Moi aussi.", "Je ne comprends pas. — Moi non plus.", "non plus."], ["Je suis accord.", "Je suis d'accord.", "d'accord."]] }
  ],
  ejemplos: [
    { sit: "«Me encanta la música. — Yo también.»", resp: "Moi aussi.", pasos: ["Positiva + igual."], porque: "Acuerdo." },
    { sit: "«No me gusta el deporte. — Yo sí.»", resp: "Moi si.", pasos: ["Negativa + distinto."], porque: "Oposición." },
    { sit: "«No estoy de acuerdo contigo.»", resp: "Je ne suis pas d'accord avec toi.", pasos: ["pas d'accord avec."], porque: "Desacuerdo." }
  ],
  comprueba: [
    { q: "Tras una frase negativa, yo tampoco es…", o: ["moi non plus", "moi aussi"], a: 0, b: "voc", porque: "Negación." },
    { q: "Tras una frase negativa, yo sí es…", o: ["moi si", "moi oui"], a: 0, b: "voc", porque: "Oposición." },
    { q: "«Ça dépend» significa…", o: ["Depende.", "Eso cuelga."], a: 0, b: "voc", porque: "Matizar." }
  ],
  practica: [
    { fase: "guiada", c: ["ad2-moi"], k: "choice", ask: "— «Je n'aime pas le froid.» — «Yo tampoco.»", q: "«___»", o: ["Moi non plus.", "Moi aussi.", "Moi si."], a: 0, pista: "Negación.", why: "<b>Moi non plus.</b>" },
    { fase: "guiada", c: ["ad2-moi"], k: "match", ask: "Une cada frase con su reacción.", q: "Frase → reacción", pairs: [["J'aime voyager.", "Moi aussi."], ["Je ne fume pas.", "Moi non plus."], ["Je n'aime pas le froid.", "Moi si, j'adore l'hiver."], ["J'adore le rap.", "Moi non, je préfère le jazz."]], pista: "¿Positiva o negativa?", why: "Reacciones." },
    { fase: "guiada", c: ["ad2-accord"], k: "sort", ask: "¿Acuerdo o desacuerdo?", q: "Clasifica.", cats: ["Acuerdo", "Desacuerdo"], items: [["Moi aussi.", 0], ["Tu as raison.", 0], ["Je suis d'accord.", 0], ["C'est vrai.", 0], ["Pas du tout !", 1], ["Je ne suis pas d'accord.", 1], ["Moi, je pense le contraire.", 1], ["Tu as tort.", 1]], pista: "tort = equivocado.", why: "Opinión." },
    { fase: "indep", c: ["ad2-accord"], k: "fill", ask: "Completa.", q: "Je suis ___ accord avec toi.", acc: ["d'", "d’"], why: "<b>d'accord</b>." },
    { fase: "indep", c: ["ad2-moi"], k: "fill", ask: "Completa: «yo tampoco».", q: "— Je ne mange pas de viande. — Moi non ___ .", acc: ["plus"], why: "<b>plus</b>." },
    { fase: "indep", c: ["ad2-moi"], k: "spot", ask: "Encuentra el error.", s: "— Je ne comprends pas . — Moi [aussi] .", fix: "non plus", why: "<b>non plus</b>." },
    { fase: "aplica", c: ["ad2-moi"], k: "choice", ask: "— «Je n'aime pas le sport.» — «Yo sí.»", q: "«___»", o: ["Moi si.", "Moi aussi.", "Moi oui."], a: 0, why: "<b>Moi si.</b>" },
    { fase: "aplica", c: ["ad2-accord"], k: "choice", es: true, say: "Je ne suis pas d'accord. Ça dépend !", ask: "Escucha. ¿Qué opina?", q: "Elige.", o: ["No está de acuerdo: depende.", "Está totalmente de acuerdo.", "No entiende."], a: 0, why: "<b>pas d'accord, ça dépend</b>." },
    { fase: "dominio", c: ["ad2-moi"], k: "choice", ask: "— «J'adore la musique.» — «Yo también.»", q: "«___»", o: ["Moi aussi.", "Moi non plus.", "Moi si."], a: 0, why: "<b>Moi aussi.</b>" },
    { fase: "dominio", c: ["ad2-accord"], k: "order", ask: "Ordena: «No estoy de acuerdo contigo».", tokens: ["Je ne suis pas", "d'accord", "avec toi."], why: "<b>Je ne suis pas d'accord avec toi.</b>" },
    { fase: "dominio", c: ["ad2-moi", "ad2-accord"], k: "listen", say: "Je ne parle pas allemand. Moi non plus.", acc: ["Je ne parle pas allemand. Moi non plus."], num: false, dict: true, ask: "Escucha y escribe.", why: "Era <b>Je ne parle pas allemand. Moi non plus.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["adore", "rap", "préfère", "jazz", "aime", "froid", "l'hiver", "hiver", "fatigué", "parle", "allemand", "réseaux", "sociaux", "mauvais", "voyager", "fume", "musique", "sport", "comprends", "mange", "viande", "toi", "avec", "pense", "contraire", "oui"] }
};

E["a2-reseaux-sociaux"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Les réseaux sociaux : publier, partager, s'abonner",
  objetivo: {
    que: "Vas a hablar de redes sociales: publicar, compartir, comentar, seguir una cuenta.",
    corto: "Je m'abonne à ton compte.",
    podras: ["Usar publier, partager, commenter, liker.", "Decir s'abonner à un compte y les abonnés.", "Opinar: je passe trop de temps sur les réseaux."],
    iconos: ["ic2/movil", "ic2/corazon", "ic2/amigos"],
    previos: ["La tecnología (Primeros pasos) y el passé composé (lecciones 1 y 18)."],
    capacidad: "Ahora puedes hablar de tu vida digital en francés."
  },
  requiere: R("pca-forma", "pca-irreg", "pcn-neg"), recupera: ["tc-voc"],
  conceptos: {
    "rs-verbes": { n: "publier, partager, commenter, liker, s'abonner à", b: "voc" },
    "rs-noms": { n: "un abonné, une publication, une story, le compte, le fil d'actualité", b: "voc" }
  },
  video: {
    titulo: "Las redes", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/movil", grande: "Abonnez-vous !", seg: [
        { es: "Hola. Publicar, compartir, seguir: el vocabulario de las redes." } ] },
      { v: "frase", filas: [
          { nota: "publicar", p: 1, partes: [["Elle a publié une photo.", "-", 1]] },
          { nota: "compartir", p: 2, partes: [["Je partage une vidéo.", "-", 2]] },
          { nota: "seguir", p: 3, partes: [["Je m'abonne à ton compte.", "-", 3]] } ], seg: [
        { es: "Publicó una foto,", p: 1 }, { es: "comparto un video,", p: 2 }, { es: "sigo tu cuenta.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Seguí tu cuenta ayer.»", o: ["Je me suis abonné à ton compte hier.", "Je me suis abonné de ton compte hier."], a: 0,
        bien: "¡Sí! S'abonner à.", mal: "Seguir una cuenta: s'abonner à.",
        seg: [ { es: "Pausa. Seguir." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["publier", "partager", "commenter", "s'abonner", "les abonnés", "une story"], seg: [
        { es: "Y en pasado: je me suis abonné, con être.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Instagram", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo hablan de redes.",
    pj: PJ,
    lineas: [
      ["hugo", "Tu as vu ? Léa a publié une photo de ses vacances.", "¿Viste? Léa publicó una foto de sus vacaciones."],
      ["camila", "Oui, j'ai mis un commentaire. Je me suis abonnée à son compte hier.", "Sí, puse un comentario. Seguí su cuenta ayer."],
      ["hugo", "Moi, je ne partage jamais d'informations personnelles.", "Yo nunca comparto información personal."],
      ["camila", "Tu as raison. Et je passe trop de temps sur les réseaux…", "Tienes razón. Y paso demasiado tiempo en las redes…"]
    ],
    fijate: "Fíjate: a publié, un commentaire, je me suis abonnée à, je ne partage jamais."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "Las redes sociales",
      idea: "publier (publicar), partager (compartir), commenter, liker / aimer, s'abonner à (seguir). un abonné (seguidor), une publication, une story, un message privé, le compte, le fil d'actualité.",
      intro: "Toca cada tarjeta.",
      palabras: [
        { fr: "publier", es: "publicar", ej: ["Elle a publié une photo de ses vacances.", "Publicó una foto de sus vacaciones."] },
        { fr: "partager", es: "compartir", ej: ["Je ne partage jamais d'informations personnelles.", "Nunca comparto información personal."] },
        { fr: "commenter", es: "comentar" },
        { fr: "liker", es: "dar me gusta" },
        { fr: "s'abonner à", es: "seguir (una cuenta)", ej: ["Abonnez-vous à notre compte !", "¡Síganos!"] },
        { fr: "un abonné", es: "un seguidor" },
        { fr: "les abonnés", es: "los seguidores" },
        { fr: "une publication", es: "una publicación" },
        { fr: "un commentaire", es: "un comentario" },
        { fr: "une story", es: "una historia" },
        { fr: "un message privé", es: "un mensaje directo" },
        { fr: "le compte", es: "la cuenta" },
        { fr: "le fil d'actualité", es: "el feed" },
        { fr: "le mot de passe", es: "la contraseña" }
      ],
      clave: "Je passe trop de temps sur les réseaux. = Paso demasiado tiempo en las redes." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je m'abonne ton compte.", "Je m'abonne à ton compte.", "s'abonner à."], ["Je me suis abonné de ton compte.", "Je me suis abonné à ton compte.", "à."], ["J'ai publiqué une vidéo.", "J'ai publié une vidéo.", "publier → publié."]] }
  ],
  ejemplos: [
    { sit: "«Seguir una cuenta»", resp: "s'abonner à un compte", pasos: ["s'abonner à."], porque: "Redes." },
    { sit: "«Publiqué un video en mi cuenta.»", resp: "J'ai publié une vidéo sur mon compte.", pasos: ["publier → publié."], porque: "Pasado." },
    { sit: "«Nunca comparto mi dirección.»", resp: "Je ne partage jamais mon adresse.", pasos: ["ne… jamais."], porque: "Privacidad." }
  ],
  comprueba: [
    { q: "«partager» significa…", o: ["compartir", "partir"], a: 0, b: "voc", porque: "Redes." },
    { q: "«les abonnés» son…", o: ["los seguidores", "los abonos"], a: 0, b: "voc", porque: "Redes." },
    { q: "S'abonner va con…", o: ["à", "de"], a: 0, b: "voc", porque: "s'abonner à." }
  ],
  practica: [
    { fase: "guiada", c: ["rs-verbes"], k: "choice", ask: "«Seguir una cuenta»", q: "«___ un compte»", o: ["s'abonner à", "s'abonner de", "suivre à"], a: 0, pista: "à.", why: "<b>s'abonner à</b>." },
    { fase: "guiada", c: ["rs-noms"], k: "match", ask: "Une cada palabra.", q: "Francés → español", pairs: [["le fil d'actualité", "el feed"], ["un message privé", "un mensaje directo"], ["le mot de passe", "la contraseña"], ["le compte", "la cuenta"]], pista: "mot de passe = contraseña.", why: "Redes." },
    { fase: "guiada", c: ["rs-verbes", "rs-noms"], k: "sort", ask: "¿Acción o cosa?", q: "Clasifica.", cats: ["Acción", "Cosa"], items: [["publier", 0], ["partager", 0], ["commenter", 0], ["s'abonner", 0], ["une publication", 1], ["un commentaire", 1], ["un abonné", 1], ["une story", 1]], pista: "Verbos = acción.", why: "Vocabulario." },
    { fase: "indep", c: ["rs-verbes"], k: "fill", ask: "Escribe «publicado».", q: "J'ai ___ une vidéo sur mon compte.", acc: ["publié"], why: "<b>publié</b>." },
    { fase: "indep", c: ["rs-verbes"], k: "fill", ask: "Escribe la preposición.", q: "Abonnez-vous ___ notre page !", acc: ["à"], why: "<b>à</b>." },
    { fase: "indep", c: ["rs-verbes"], k: "spot", ask: "Encuentra el error.", s: "Je me suis abonné [de] ton compte hier .", fix: "à", why: "<b>à</b>." },
    { fase: "aplica", c: ["rs-verbes"], k: "choice", ask: "«Compartir»", q: "«___»", o: ["partager", "partir", "publier"], a: 0, why: "<b>partager</b>." },
    { fase: "aplica", c: ["rs-noms"], k: "choice", es: true, say: "Je passe trop de temps sur les réseaux.", ask: "Escucha. ¿Qué dice?", q: "Elige.", o: ["Pasa demasiado tiempo en las redes.", "No tiene redes.", "Publica mucho."], a: 0, why: "<b>trop de temps</b>." },
    { fase: "dominio", c: ["rs-verbes"], k: "order", ask: "Ordena: «Nunca comparto mi dirección».", tokens: ["Je ne partage", "jamais", "mon adresse."], why: "<b>Je ne partage jamais mon adresse.</b>" },
    { fase: "dominio", c: ["rs-verbes"], k: "choice", ask: "«Publicó una foto de sus vacaciones.»", q: "«___ une photo de ses vacances.»", o: ["Elle a publié", "Elle est publiée", "Elle a publiqué"], a: 0, why: "<b>a publié</b>." },
    { fase: "dominio", c: ["rs-verbes", "rs-noms"], k: "listen", say: "Elle a publié une photo de ses vacances.", acc: ["Elle a publié une photo de ses vacances."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Elle a publié une photo de ses vacances.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Léa", "Instagram"], previo: ["vu", "photo", "ses", "vacances", "mis", "son", "hier", "jamais", "d'informations", "informations", "personnelles", "raison", "passe", "trop", "temps", "sur", "réseaux", "vidéo", "mon", "notre", "page", "adresse", "suivre", "partir", "publiée", "ton", "abonné", "abonnée", "abonnez-vous", "vous"] }
};

E["a2-verbes-communication"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Dire, demander, répondre à quelqu'un",
  objetivo: {
    que: "Vas a usar los verbos de comunicación con à + persona y sus pronombres lui / leur.",
    corto: "Je lui dis, je leur réponds.",
    podras: ["Usar dire à, demander à, répondre à, écrire à.", "Decir demander à quelqu'un de + infinitivo.", "Reemplazar por lui / leur."],
    iconos: ["ic2/amigos", "ic2/movil", "ic2/lapiz"],
    previos: ["El COI (lección 10)."],
    capacidad: "Ahora puedes contar lo que dijiste, pediste o respondiste."
  },
  requiere: R("coi-forma", "coi-vs", "cod-forma", "pca-irreg"), recupera: ["coi-forma"],
  conceptos: {
    "vc2-verbes": { n: "dire / demander / répondre / écrire à quelqu'un", b: "gr" },
    "vc2-pron": { n: "lui / leur; demander à quelqu'un de + infinitivo", b: "gr" }
  },
  video: {
    titulo: "Decir, pedir, responder", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/amigos", grande: "Je lui dis…", seg: [
        { es: "Hola. Se dice algo a alguien: à. Por eso, lui y leur." } ] },
      { v: "frase", filas: [
          { nota: "decir", p: 1, partes: [["Je lui dis la vérité.", "-", 1]] },
          { nota: "responder", p: 2, partes: [["Je leur réponds.", "-", 2]] },
          { nota: "pedir que", p: 3, partes: [["Je lui ai demandé de venir.", "-", 3]] } ], seg: [
        { es: "Le digo la verdad,", p: 1 }, { es: "les respondo,", p: 2 }, { es: "le pedí que viniera.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Le digo buenos días (a ella).»", o: ["Je lui dis bonjour.", "Je la dis bonjour."], a: 0,
        bien: "¡Sí! Dire à → lui.", mal: "Se dice algo a alguien: lui.",
        seg: [ { es: "Pausa. Le digo." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["dire à", "demander à", "répondre à", "parler à", "écrire à", "téléphoner à"], seg: [
        { es: "Todos con à: lui y leur.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El mensaje", img: "bg-universidad", yo: "camila",
    escena: "Camila le cuenta a Hugo lo que pasó en clase.",
    pj: PJ,
    lineas: [
      ["camila", "J'ai demandé au professeur de répéter. Il m'a répondu gentiment.", "Le pedí al profesor que repitiera. Me respondió con amabilidad."],
      ["hugo", "Et Marie ? Tu lui as demandé son numéro ?", "¿Y Marie? ¿Le pediste su número?"],
      ["camila", "Oui, et elle m'a écrit un message. Réponds-lui vite, elle a dit !", "Sí, y me escribió un mensaje. ¡Respóndele rápido, dijo!"],
      ["hugo", "Moi, j'écris à mes parents : je leur écris chaque semaine.", "Yo les escribo a mis papás: les escribo cada semana."]
    ],
    fijate: "Fíjate: demandé au professeur de, tu lui as demandé, réponds-lui, je leur écris."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Verbos con à + persona",
      idea: "dire quelque chose à quelqu'un, demander quelque chose à quelqu'un, demander à quelqu'un de + infinitivo, répondre à, parler à, écrire à, téléphoner à. Pronombre: lui (una persona), leur (varias).",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Regla"], [
        ["Je dis bonjour à Marc. → Je lui dis bonjour.", "Le digo buenos días a Marc.", "dire à"],
        ["Je lui dis la vérité.", "Le digo la verdad.", "lui"],
        ["J'ai demandé au professeur de répéter.", "Le pedí al profesor que repitiera.", "demander à … de"],
        ["Je lui ai demandé de venir.", "Le pedí que viniera.", "lui"],
        ["Je leur réponds.", "Les respondo.", "leur"],
        ["Réponds-lui vite !", "¡Respóndele rápido!", "imperativo"],
        ["Tu as répondu à son message ?", "¿Respondiste a su mensaje?", "répondre à"],
        ["Je leur ai écrit une carte.", "Les escribí una tarjeta.", "écrire à"],
        ["Je leur ai dit au revoir.", "Les dije adiós.", "dire à"]
      ]],
      ej: [["dire la vérité à quelqu'un", "decirle la verdad a alguien"], ["demander à quelqu'un de venir", "pedirle a alguien que venga"], ["répondre à une question", "responder a una pregunta"], ["téléphoner à un ami", "llamar a un amigo"], ["Je le vois.", "Lo veo."], ["Je la regarde.", "La miro."], ["Je l'attends.", "Lo espero."], ["Je l'aime.", "Lo quiero."], ["Je lui parle.", "Le hablo."], ["Je lui téléphone.", "Lo llamo."], ["Je lui écris.", "Le escribo."], ["Je lui réponds.", "Le respondo."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je la dis bonjour.", "Je lui dis bonjour.", "dire à → lui."], ["Je la ai demandé son numéro.", "Je lui ai demandé son numéro.", "demander à → lui."], ["Je leurs réponds.", "Je leur réponds.", "leur sin s."]] }
  ],
  ejemplos: [
    { sit: "«Le digo la verdad (a ella).»", resp: "Je lui dis la vérité.", pasos: ["dire à → lui."], porque: "COI." },
    { sit: "«Les respondo.»", resp: "Je leur réponds.", pasos: ["répondre à + varios → leur."], porque: "COI." },
    { sit: "«Le pedí que viniera.»", resp: "Je lui ai demandé de venir.", pasos: ["demander à… de + infinitivo."], porque: "Petición." }
  ],
  comprueba: [
    { q: "Dire, demander y répondre llevan…", o: ["à + persona", "persona sin preposición"], a: 0, b: "gr", porque: "COI." },
    { q: "Pedirle a alguien que venga es…", o: ["demander à quelqu'un de venir", "demander quelqu'un venir"], a: 0, b: "gr", porque: "à… de." },
    { q: "Voir quelqu'un usa…", o: ["le / la", "lui"], a: 0, b: "gr", porque: "Sin à." }
  ],
  practica: [
    { fase: "guiada", c: ["vc2-pron"], k: "choice", ask: "«Le digo la verdad (a ella).»", q: "«Je ___ dis la vérité.»", o: ["lui", "la", "leur"], a: 0, pista: "dire à.", why: "<b>lui</b>." },
    { fase: "guiada", c: ["vc2-verbes"], k: "match", ask: "Une cada verbo con su complemento.", q: "Verbo → complemento", pairs: [["dire", "la vérité à quelqu'un"], ["demander", "à quelqu'un de venir"], ["répondre", "à une question"], ["téléphoner", "à un ami"]], pista: "Todos con à.", why: "Construcciones." },
    { fase: "guiada", c: ["vc2-pron"], k: "sort", ask: "¿lui / leur o le / la / les?", q: "Clasifica.", cats: ["lui / leur (a alguien)", "le / la / les (directo)"], items: [["Je … parle.", 0], ["Je … téléphone.", 0], ["Je … écris.", 0], ["Je … réponds.", 0], ["Je … vois.", 1], ["Je … regarde.", 1], ["Je … attends.", 1], ["Je … aime.", 1]], pista: "¿Lleva à?", why: "COI o COD." },
    { fase: "indep", c: ["vc2-verbes"], k: "fill", ask: "Escribe la preposición.", q: "Tu as répondu ___ son message ?", acc: ["à"], why: "<b>à</b>." },
    { fase: "indep", c: ["vc2-pron"], k: "fill", ask: "Escribe el pronombre (a mis padres).", q: "J'écris à mes parents : je ___ écris chaque semaine.", acc: ["leur"], why: "<b>leur</b>." },
    { fase: "indep", c: ["vc2-pron"], k: "spot", ask: "Encuentra el error.", s: "J'ai vu Marie et je [la] ai demandé son numéro .", fix: "lui", why: "<b>lui</b>." },
    { fase: "aplica", c: ["vc2-verbes"], k: "choice", ask: "«Le pedí que viniera.»", q: "«___»", o: ["Je lui ai demandé de venir.", "Je l'ai demandé de venir.", "Je lui ai demandé venir."], a: 0, why: "<b>lui… de venir</b>." },
    { fase: "aplica", c: ["vc2-pron"], k: "choice", ask: "«¡Respóndele rápido!»", q: "«___»", o: ["Réponds-lui vite !", "Réponds-le vite !", "Lui réponds vite !"], a: 0, why: "<b>Réponds-lui</b>." },
    { fase: "dominio", c: ["vc2-pron"], k: "choice", es: true, say: "J'ai demandé au professeur de répéter.", ask: "Escucha. ¿Qué pidió?", q: "Elige.", o: ["Que el profesor repitiera.", "Repetir el curso.", "Hablar con el profesor."], a: 0, why: "<b>de répéter</b>." },
    { fase: "dominio", c: ["vc2-pron"], k: "order", ask: "Ordena: «Les dije adiós».", tokens: ["Je", "leur", "ai dit", "au revoir."], why: "<b>Je leur ai dit au revoir.</b>" },
    { fase: "dominio", c: ["vc2-verbes", "vc2-pron"], k: "listen", say: "Je leur ai dit au revoir.", acc: ["Je leur ai dit au revoir."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je leur ai dit au revoir.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Marie", "Marc"], previo: ["professeur", "répéter", "m'a", "répondu", "gentiment", "as", "son", "numéro", "écrit", "message", "vite", "dit", "parents", "écris", "chaque", "semaine", "vérité", "venir", "carte", "revoir", "quelqu'un", "question", "ami", "vu", "dis", "réponds", "l'ai", "lui", "le", "la"] }
};

E["a2-rencontre"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Raconter une rencontre : passé composé et imparfait",
  objetivo: {
    que: "Vas a contar cómo conociste a alguien: el decorado en imparfait y la acción en passé composé.",
    corto: "J'étais au café quand…",
    podras: ["Describir la escena: c'était un lundi, il pleuvait.", "Contar la acción: une fille est arrivée.", "Unir con quand, pendant que, tout à coup."],
    iconos: ["ic2/corazon", "ic2/libros", "ic2/amigos"],
    previos: ["Passé composé o imparfait (lección 14) y las relaciones (lección 45)."],
    capacidad: "Ahora puedes contar la historia de un encuentro."
  },
  requiere: R("pi-decor", "pi-fait", "rl-verbes", "rl-passe", "imp-forma"), recupera: ["pi-decor", "pi-fait"],
  conceptos: {
    "rc2-decor": { n: "imparfait: c'était, il pleuvait, j'attendais", b: "gr" },
    "rc2-action": { n: "passé composé: est arrivée, m'a souri; quand / tout à coup", b: "gr" }
  },
  video: {
    titulo: "Un encuentro", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/corazon", grande: "C'était un lundi…", seg: [
        { es: "Hola. Primero el decorado, después la acción." } ] },
      { v: "frase", filas: [
          { nota: "decorado", p: 1, partes: [["Il pleuvait et j'attendais le bus.", "-", 1]] },
          { nota: "acción", p: 2, partes: [["Tout à coup, une fille est arrivée.", "-", 2]] },
          { nota: "acción", p: 3, partes: [["Elle m'a demandé l'heure.", "-", 3]] } ], seg: [
        { es: "Llovía y esperaba el bus,", p: 1 }, { es: "de repente llegó una chica,", p: 2 }, { es: "me preguntó la hora.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Leía un libro cuando entró mi hermano.»", o: ["Je lisais un livre quand mon frère est entré.", "Je lisais un livre quand mon frère entrait."], a: 0,
        bien: "¡Sí! La acción que interrumpe: passé composé.", mal: "Lo que interrumpe va en passé composé.",
        seg: [ { es: "Pausa. Entró." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["c'était", "il pleuvait", "j'attendais", "est arrivée", "m'a souri", "tout à coup"], seg: [
        { es: "Decorado en imparfait, acción en passé composé.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Cómo nos conocimos", img: "bg-cafe", yo: "camila",
    escena: "Hugo cuenta cómo conoció a su novia.",
    pj: PJ,
    lineas: [
      ["hugo", "C'était un lundi. Il pleuvait et j'attendais le bus.", "Era un lunes. Llovía y yo esperaba el bus."],
      ["hugo", "Tout à coup, une fille est arrivée. Elle m'a demandé l'heure.", "De repente llegó una chica. Me preguntó la hora."],
      ["camila", "Et après ?", "¿Y después?"],
      ["hugo", "Elle m'a souri, on a parlé et nous sommes partis ensemble au café !", "¡Me sonrió, hablamos y nos fuimos juntos al café!"]
    ],
    fijate: "Fíjate: c'était, il pleuvait, j'attendais (decorado) / est arrivée, m'a demandé, m'a souri (acción)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Decorado y acción",
      idea: "Imparfait: circunstancias y descripción (c'était un lundi, il pleuvait, j'attendais). Passé composé: lo que pasó (une fille est arrivée, elle m'a demandé l'heure). Imparfait + quand + passé composé: j'étudiais quand il a appelé.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Tiempo"], [
        ["C'était un lundi.", "Era un lunes.", "decorado"],
        ["Il pleuvait et nous attendions le bus.", "Llovía y esperábamos el bus.", "decorado"],
        ["Il y avait beaucoup de monde.", "Había mucha gente.", "decorado"],
        ["Une fille est arrivée.", "Llegó una chica.", "acción"],
        ["Elle m'a souri.", "Me sonrió.", "acción"],
        ["Tout à coup, quelqu'un m'a appelé.", "De repente, alguien me llamó.", "acción"],
        ["J'étais à la bibliothèque quand j'ai vu Léa.", "Estaba en la biblioteca cuando vi a Léa.", "interrupción"],
        ["Je lisais un livre quand mon frère est entré.", "Leía un libro cuando entró mi hermano.", "interrupción"],
        ["Nous buvions un café quand Paul est arrivé.", "Tomábamos un café cuando llegó Paul.", "interrupción"],
        ["Soudain, un chat est entré dans la classe.", "De repente entró un gato en el salón.", "acción"]
      ]],
      ej: [["Je dormais quand tu as appelé.", "Dormía cuando llamaste."], ["Il pleuvait quand nous sommes sortis.", "Llovía cuando salimos."], ["Elle lisait quand le prof est entré.", "Leía cuando entró el profe."], ["On mangeait quand l'alarme a sonné.", "Comíamos cuando sonó la alarma."], ["Il faisait froid.", "Hacía frío."], ["J'étais fatigué.", "Estaba cansado."], ["On a parlé.", "Hablamos."], ["Nous sommes partis ensemble.", "Nos fuimos juntos."], ["pendant que", "mientras"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["J'ai été au café quand il entrait.", "J'étais au café quand il est entré.", "Decorado: imparfait; acción: passé composé."], ["Je lisais quand mon frère entrait.", "Je lisais quand mon frère est entré.", "Lo que interrumpe: passé composé."], ["Il a plu et j'ai attendu le bus (decorado).", "Il pleuvait et j'attendais le bus.", "Decorado: imparfait."]] }
  ],
  ejemplos: [
    { sit: "«Estaba en casa cuando sonó el teléfono.»", resp: "J'étais à la maison quand le téléphone a sonné.", pasos: ["étais: decorado.", "a sonné: acción."], porque: "Interrupción." },
    { sit: "«Ese día hacía buen tiempo.»", resp: "Il faisait beau ce jour-là.", pasos: ["Descripción → imparfait."], porque: "Decorado." },
    { sit: "«Llovía cuando llegamos.»", resp: "Il pleuvait quand nous sommes arrivés.", pasos: ["Decorado + acción."], porque: "Los dos." }
  ],
  comprueba: [
    { q: "«Il pleuvait» describe…", o: ["el decorado", "una acción puntual"], a: 0, b: "gr", porque: "Imparfait." },
    { q: "«Une fille est arrivée» es…", o: ["una acción", "una descripción"], a: 0, b: "gr", porque: "Passé composé." },
    { q: "«tout à coup» significa…", o: ["de repente", "todo a la vez"], a: 0, b: "gr", porque: "Conector." }
  ],
  practica: [
    { fase: "guiada", c: ["rc2-decor"], k: "choice", ask: "«Ese día hacía buen tiempo.»", q: "«Il ___ beau ce jour-là.»", o: ["faisait", "a fait", "fait"], a: 0, pista: "Descripción.", why: "<b>faisait</b>." },
    { fase: "guiada", c: ["rc2-action"], k: "choice", ask: "«De repente, entró un gato en el salón.»", q: "«Soudain, un chat ___ entré dans la classe.»", o: ["est", "a", "était"], a: 0, pista: "entrer: être.", why: "<b>est entré</b>." },
    { fase: "guiada", c: ["rc2-decor", "rc2-action"], k: "sort", ask: "¿Decorado o acción?", q: "Clasifica.", cats: ["Decorado (imparfait)", "Acción (passé composé)"], items: [["Il faisait froid.", 0], ["J'attendais le bus.", 0], ["Il y avait beaucoup de monde.", 0], ["J'étais fatigué.", 0], ["Une fille est arrivée.", 1], ["Elle m'a souri.", 1], ["On a parlé.", 1], ["Nous sommes partis ensemble.", 1]], pista: "Imparfait = decorado.", why: "Dos tiempos." },
    { fase: "indep", c: ["rc2-decor"], k: "fill", ask: "Escribe boire en imparfait (nous).", q: "Nous ___ un café quand Paul est arrivé.", acc: ["buvions"], why: "<b>buvions</b>." },
    { fase: "indep", c: ["rc2-action"], k: "spot", ask: "Encuentra el error.", s: "Je lisais un livre quand mon frère [entrait] .", fix: "est entré", why: "<b>est entré</b>." },
    { fase: "indep", c: ["rc2-decor", "rc2-action"], k: "match", ask: "Une cada decorado con su acción.", q: "Decorado → acción", pairs: [["Je dormais", "quand tu as appelé."], ["Il pleuvait", "quand nous sommes sortis."], ["Elle lisait", "quand le prof est entré."], ["On mangeait", "quand l'alarme a sonné."]], why: "Interrupciones." },
    { fase: "aplica", c: ["rc2-decor", "rc2-action"], k: "choice", ask: "«Estaba en casa cuando sonó el teléfono.»", q: "«___»", o: ["J'étais à la maison quand le téléphone a sonné.", "J'ai été à la maison quand le téléphone sonnait.", "J'étais à la maison quand le téléphone sonnait."], a: 0, why: "Decorado + acción." },
    { fase: "aplica", c: ["rc2-action"], k: "choice", es: true, say: "Tout à coup, quelqu'un m'a appelé.", ask: "Escucha. ¿Qué pasó?", q: "Elige.", o: ["De repente alguien lo llamó.", "Alguien lo llamaba siempre.", "Llamó a alguien."], a: 0, why: "<b>tout à coup… m'a appelé</b>." },
    { fase: "dominio", c: ["rc2-decor", "rc2-action"], k: "order", ask: "Ordena el relato.", tokens: ["C'était un lundi.", "Il pleuvait.", "Tout à coup, une fille est arrivée.", "Elle m'a demandé l'heure."], why: "Decorado → acción." },
    { fase: "dominio", c: ["rc2-decor"], k: "choice", ask: "«Estaba en la biblioteca cuando vi a Léa.»", q: "«J'___ à la bibliothèque quand j'ai vu Léa.»", o: ["étais", "ai été", "suis"], a: 0, why: "<b>étais</b>." },
    { fase: "dominio", c: ["rc2-decor", "rc2-action"], k: "listen", say: "Il pleuvait quand nous sommes arrivés.", acc: ["Il pleuvait quand nous sommes arrivés."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Il pleuvait quand nous sommes arrivés.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Léa", "Paul"], previo: ["lundi", "bus", "fille", "m'a", "demandé", "l'heure", "heure", "après", "souri", "parlé", "ensemble", "café", "beaucoup", "monde", "quelqu'un", "appelé", "bibliothèque", "vu", "livre", "frère", "entré", "chat", "classe", "dormais", "tu", "as", "sortis", "lisait", "prof", "mangeait", "l'alarme", "alarme", "sonné", "froid", "fatigué", "maison", "téléphone", "beau", "jour-là", "arrivés", "sommes", "fait", "a", "était", "suis", "sonnait", "entrait"] }
};

/* ================================ A2·9 · Viajar; futuro, causas y consecuencias ================================ */

E["a2-reserver-voyage"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Réserver un voyage : aller simple, aller-retour",
  objetivo: {
    que: "Vas a reservar un viaje: ida o ida y vuelta, vuelo directo o con escala, equipaje.",
    corto: "Un aller-retour, s'il vous plaît.",
    podras: ["Pedir un aller simple / un aller-retour pour…", "Entender un vol direct / avec escale.", "Hablar de le départ, l'arrivée, le trajet, la valise."],
    iconos: ["ic2/mundo", "ic2/moneda", "m2d/correr"],
    previos: ["Viajar: países y transportes (lección 16) y el hotel (A1, lección 40)."],
    capacidad: "Ahora puedes comprar un billete de tren o de avión."
  },
  requiere: R("vo-aller", "vo-venir", "ho-reserver"), recupera: ["vo-aller", "ho-reserver"],
  conceptos: {
    "rv-billet": { n: "un aller simple, un aller-retour, réserver en ligne", b: "voc" },
    "rv-vol": { n: "un vol direct / avec escale, le départ, l'arrivée, le trajet, la valise", b: "voc" }
  },
  video: {
    titulo: "Reservar un viaje", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/mundo", grande: "un aller-retour", seg: [
        { es: "Hola. ¿Solo ida, o ida y vuelta?" } ] },
      { v: "dos",
        a: { tag: "solo ida", fr: "un aller simple pour Marseille", es: "aller simple" },
        b: { tag: "ida y vuelta", fr: "un aller-retour Paris-Lyon", es: "aller-retour" },
        seg: [ { es: "Solo ida:", p: 1 }, { fr: "un aller simple", p: 1 }, { es: "Ida y vuelta:", p: 2 }, { fr: "un aller-retour", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«un billete de ida y vuelta»", o: ["un aller-retour", "un retour-aller"], a: 0,
        bien: "¡Sí! Aller-retour.", mal: "Ida y vuelta: un aller-retour.",
        seg: [ { es: "Pausa. Ida y vuelta." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["le départ", "l'arrivée", "le vol", "une escale", "le trajet", "la valise"], seg: [
        { es: "Salida, llegada, vuelo, escala, trayecto, maleta.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "En la agencia", img: "bg-paris", yo: "camila",
    escena: "Camila reserva un viaje a Colombia.",
    pj: PJ,
    lineas: [
      ["camila", "Bonjour, je voudrais un aller-retour Paris-Bogotá pour le 12 décembre.", "Buenos días, quisiera un billete de ida y vuelta París-Bogotá para el 12 de diciembre."],
      ["vendeur", "Le vol direct est complet. Il y a un vol avec une escale à Madrid.", "El vuelo directo está lleno. Hay un vuelo con escala en Madrid."],
      ["camila", "D'accord. Le trajet dure combien de temps ?", "De acuerdo. ¿Cuánto dura el trayecto?"],
      ["vendeur", "Quatorze heures. Vous avez une valise ou seulement un bagage à main ?", "Catorce horas. ¿Lleva maleta o solo equipaje de mano?"]
    ],
    fijate: "Fíjate: un aller-retour, un vol direct, une escale, le trajet, un bagage à main."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "El billete y el vuelo",
      idea: "un aller simple (solo ida), un aller-retour (ida y vuelta), réserver en ligne. un vol direct / avec escale. le départ, l'arrivée, le trajet (dure… heures). un bagage à main, une valise en soute.",
      intro: "Toca cada tarjeta.",
      palabras: [
        { fr: "un aller simple", es: "un billete de ida", ej: ["Je voudrais un aller simple pour Marseille.", "Quisiera un billete de ida a Marsella."] },
        { fr: "un aller-retour", es: "un billete de ida y vuelta" },
        { fr: "réserver en ligne", es: "reservar en línea" },
        { fr: "le vol", es: "el vuelo" },
        { fr: "un vol direct", es: "un vuelo directo" },
        { fr: "une escale", es: "una escala", ej: ["Le vol a une escale à Bogotá.", "El vuelo tiene una escala en Bogotá."] },
        { fr: "le départ", es: "la salida" },
        { fr: "l'arrivée", es: "la llegada" },
        { fr: "le trajet", es: "el trayecto", ej: ["Le trajet dure trois heures.", "El trayecto dura tres horas."] },
        { fr: "le bagage à main", es: "el equipaje de mano" },
        { fr: "la valise", es: "la maleta" },
        { fr: "complet", es: "lleno, completo" },
        { fr: "la classe économique", es: "la clase económica" }
      ],
      clave: "Je voudrais un aller-retour pour Paris, s'il vous plaît." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["un billet d'aller et retour", "un aller-retour", "Ida y vuelta."], ["un retour-aller", "un aller-retour", "Primero aller."], ["Le trajet dure trois heure.", "Le trajet dure trois heures.", "Plural."]] }
  ],
  ejemplos: [
    { sit: "«Quisiera un billete de ida y vuelta a París.»", resp: "Je voudrais un aller-retour pour Paris.", pasos: ["un aller-retour pour…"], porque: "Reservar." },
    { sit: "«El vuelo tiene una escala en Madrid.»", resp: "Le vol a une escale à Madrid.", pasos: ["une escale."], porque: "Vuelo." },
    { sit: "«El trayecto dura dos horas.»", resp: "Le trajet dure deux heures.", pasos: ["le trajet dure."], porque: "Duración." }
  ],
  comprueba: [
    { q: "«un aller simple» es…", o: ["un billete de solo ida", "un billete sencillo de ida y vuelta"], a: 0, b: "voc", porque: "Solo ida." },
    { q: "«une escale» es…", o: ["una escala", "una escalera"], a: 0, b: "voc", porque: "Vuelo." },
    { q: "«le trajet» es…", o: ["el trayecto", "el traje"], a: 0, b: "voc", porque: "Viaje." }
  ],
  practica: [
    { fase: "guiada", c: ["rv-billet"], k: "choice", ask: "«un billete de ida y vuelta»", q: "«___»", o: ["un aller-retour", "un aller simple", "un retour-aller"], a: 0, pista: "Ida y vuelta.", why: "<b>un aller-retour</b>." },
    { fase: "guiada", c: ["rv-vol"], k: "match", ask: "Une cada palabra.", q: "Francés → español", pairs: [["le départ", "la salida"], ["l'arrivée", "la llegada"], ["le vol", "el vuelo"], ["la valise", "la maleta"]], pista: "valise = maleta.", why: "El viaje." },
    { fase: "guiada", c: ["rv-vol"], k: "sort", ask: "¿Tren o avión?", q: "Clasifica.", cats: ["Tren", "Avión"], items: [["le quai", 0], ["la voiture 12", 0], ["le TGV", 0], ["le contrôleur", 0], ["l'embarquement", 1], ["la porte 12", 1], ["l'escale", 1], ["le pilote", 1]], pista: "quai = andén.", why: "Transportes." },
    { fase: "indep", c: ["rv-vol"], k: "fill", ask: "Escribe «trayecto».", q: "Le ___ dure deux heures.", acc: ["trajet"], why: "<b>trajet</b>." },
    { fase: "indep", c: ["rv-billet"], k: "fill", ask: "Escribe «solo ida» (aller ___).", q: "Je voudrais un aller ___ pour Nice.", acc: ["simple"], why: "<b>simple</b>." },
    { fase: "indep", c: ["rv-billet"], k: "spot", ask: "Encuentra el error.", s: "Je voudrais un [retour-aller] pour Lyon , s'il vous plaît .", fix: "aller-retour", why: "<b>aller-retour</b>." },
    { fase: "aplica", c: ["rv-vol"], k: "choice", es: true, say: "Le vol direct est complet. Il y a un vol avec une escale à Madrid.", ask: "Escucha. ¿Qué vuelo queda?", q: "Elige.", o: ["Uno con escala en Madrid", "Uno directo", "Ninguno"], a: 0, why: "<b>avec une escale</b>." },
    { fase: "aplica", c: ["rv-vol"], k: "choice", ask: "«el equipaje de mano»", q: "«___»", o: ["le bagage à main", "la valise en soute", "le bagage de main"], a: 0, why: "<b>le bagage à main</b>." },
    { fase: "dominio", c: ["rv-billet"], k: "order", ask: "Ordena: «Quisiera un billete de ida y vuelta a París».", tokens: ["Je voudrais", "un aller-retour", "pour Paris."], why: "<b>Je voudrais un aller-retour pour Paris.</b>" },
    { fase: "dominio", c: ["rv-vol"], k: "choice", ask: "«¿Cuánto dura el trayecto?»", q: "«___»", o: ["Le trajet dure combien de temps ?", "Le trajet est combien ?", "Combien de trajet ?"], a: 0, why: "<b>dure combien de temps</b>." },
    { fase: "dominio", c: ["rv-billet", "rv-vol"], k: "listen", say: "Le vol a une escale à Bogotá.", acc: ["Le vol a une escale à Bogotá."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Le vol a une escale à Bogotá.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Paris", "Bogotá", "Madrid", "Marseille", "Nice", "Lyon", "Paris-Bogotá", "Paris-Lyon"], previo: ["voudrais", "pour", "12", "décembre", "direct", "d'accord", "dure", "combien", "temps", "quatorze", "heures", "avez", "seulement", "main", "trois", "deux", "quai", "voiture", "contrôleur", "l'embarquement", "embarquement", "porte", "pilote", "soute", "TGV", "s'il", "vous", "plaît", "est"] }
};

E["a2-aeroport"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "À l'aéroport : l'enregistrement, la porte d'embarquement",
  objetivo: {
    que: "Vas a moverte por el aeropuerto: check-in, control, puerta, retrasos y aduana.",
    corto: "Embarquement porte 15.",
    podras: ["Entender l'enregistrement, la carte d'embarquement, la porte.", "Entender anuncios: le vol est retardé / annulé.", "Nombrar la douane, le passeport, le tapis à bagages."],
    iconos: ["ic2/mundo", "ic2/reloj-arena", "m2d/correr"],
    previos: ["Reservar un viaje (lección 55)."],
    capacidad: "Ahora puedes entender los anuncios del aeropuerto."
  },
  requiere: R("rv-billet", "rv-vol", "if-inf"), recupera: ["rv-vol"],
  conceptos: {
    "ae3-etapes": { n: "l'enregistrement, la carte d'embarquement, le contrôle de sécurité, la porte", b: "voc" },
    "ae3-annonce": { n: "retardé, annulé, embarquement immédiat; la douane", b: "voc" }
  },
  video: {
    titulo: "En el aeropuerto", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/mundo", grande: "Porte B12", seg: [
        { es: "Hola. Escucha bien los anuncios del aeropuerto." } ] },
      { v: "frase", filas: [
          { nota: "check-in", p: 1, partes: [["l'enregistrement", "-", 1]] },
          { nota: "pase de abordar", p: 2, partes: [["la carte d'embarquement", "-", 2]] },
          { nota: "anuncio", p: 3, partes: [["Embarquement immédiat porte 15.", "-", 3]] } ], seg: [
        { es: "El check-in,", p: 1 }, { es: "el pase de abordar,", p: 2 }, { es: "embarque inmediato, puerta 15.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«El vuelo está cancelado.»", o: ["Le vol est annulé.", "Le vol est cancellé."], a: 0,
        bien: "¡Sí! Annulé.", mal: "Cancelado = annulé.",
        seg: [ { es: "Pausa. Cancelado." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["retardé", "annulé", "la douane", "le passeport", "le terminal", "le tapis à bagages"], seg: [
        { es: "Retrasado, cancelado, aduana, pasaporte, terminal, cinta.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El retraso", img: "bg-paris", yo: "camila",
    escena: "Camila está en el aeropuerto Charles-de-Gaulle.",
    pj: PJ,
    lineas: [
      ["vendeur", "Votre carte d'embarquement, s'il vous plaît. Vous devez passer le contrôle de sécurité.", "Su pase de abordar, por favor. Debe pasar el control de seguridad."],
      ["camila", "Le vol pour Bogotá est à l'heure ?", "¿El vuelo a Bogotá está a tiempo?"],
      ["vendeur", "Non, votre vol est retardé d'une heure. L'embarquement sera porte B12.", "No, su vuelo está retrasado una hora. El embarque será en la puerta B12."],
      ["camila", "Oh non ! Et le vol pour Madrid ? — Il est annulé à cause de la neige.", "¡Oh no! ¿Y el vuelo a Madrid? — Está cancelado por la nieve."]
    ],
    fijate: "Fíjate: la carte d'embarquement, le contrôle de sécurité, retardé, porte B12, annulé."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "El aeropuerto",
      idea: "s'enregistrer / l'enregistrement (check-in), la carte d'embarquement (pase de abordar), le contrôle de sécurité, la porte. Le vol est retardé / annulé. Embarquement immédiat porte 15. Al llegar: la douane, le passeport, le tapis à bagages.",
      intro: "Toca cada tarjeta.",
      palabras: [
        { fr: "l'enregistrement", es: "el check-in" },
        { fr: "s'enregistrer", es: "hacer el check-in", ej: ["Il faut s'enregistrer deux heures avant le départ.", "Hay que hacer el check-in dos horas antes de la salida."] },
        { fr: "la carte d'embarquement", es: "el pase de abordar" },
        { fr: "le contrôle de sécurité", es: "el control de seguridad" },
        { fr: "la porte", es: "la puerta", ej: ["Embarquement porte B12.", "Embarque puerta B12."] },
        { fr: "l'embarquement immédiat", es: "el embarque inmediato" },
        { fr: "retardé", es: "retrasado", ej: ["Votre vol est retardé d'une heure.", "Su vuelo está retrasado una hora."] },
        { fr: "annulé", es: "cancelado" },
        { fr: "la douane", es: "la aduana" },
        { fr: "le passeport", es: "el pasaporte" },
        { fr: "le tapis à bagages", es: "la cinta de equipaje" },
        { fr: "le terminal", es: "la terminal" },
        { fr: "la sortie", es: "la salida" }
      ],
      clave: "J'ai perdu ma carte d'embarquement ! = ¡Perdí mi pase de abordar!" },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Le vol est cancellé.", "Le vol est annulé.", "Cancelado: annulé."], ["Le vol est retardé de une heure.", "Le vol est retardé d'une heure.", "d'une."], ["la carte d'embarcation", "la carte d'embarquement", "embarquement."]] }
  ],
  ejemplos: [
    { sit: "«El vuelo está retrasado.»", resp: "Le vol est retardé.", pasos: ["retardé."], porque: "Anuncio." },
    { sit: "«Presente su pasaporte en el control.»", resp: "Présentez votre passeport au contrôle.", pasos: ["passeport."], porque: "Control." },
    { sit: "Oyes «Embarquement immédiat, porte douze».", resp: "Embarque inmediato en la puerta 12.", pasos: ["porte douze = puerta 12."], porque: "Anuncio." }
  ],
  comprueba: [
    { q: "«annulé» significa…", o: ["cancelado", "anulado de nulidad legal"], a: 0, b: "voc", porque: "Vuelo." },
    { q: "«la carte d'embarquement» es…", o: ["el pase de abordar", "la tarjeta de crédito"], a: 0, b: "voc", porque: "Aeropuerto." },
    { q: "«la douane» es…", o: ["la aduana", "la ducha"], a: 0, b: "voc", porque: "Llegada." }
  ],
  practica: [
    { fase: "guiada", c: ["ae3-annonce"], k: "choice", ask: "«El vuelo está cancelado.»", q: "«Le vol est ___ .»", o: ["annulé", "cancellé", "retardé"], a: 0, pista: "Cancelado.", why: "<b>annulé</b>." },
    { fase: "guiada", c: ["ae3-etapes"], k: "match", ask: "Une cada palabra.", q: "Francés → español", pairs: [["la douane", "la aduana"], ["le contrôle de sécurité", "el control de seguridad"], ["le tapis à bagages", "la cinta de equipaje"], ["le terminal", "la terminal"]], pista: "douane = aduana.", why: "El aeropuerto." },
    { fase: "guiada", c: ["ae3-etapes"], k: "sort", ask: "¿Antes de volar o al llegar?", q: "Clasifica.", cats: ["Antes de volar", "Al llegar"], items: [["l'enregistrement", 0], ["le contrôle de sécurité", 0], ["la porte d'embarquement", 0], ["l'embarquement", 0], ["la douane", 1], ["les bagages sur le tapis", 1], ["la sortie", 1], ["le taxi", 1]], pista: "douane: al llegar.", why: "Etapas." },
    { fase: "indep", c: ["ae3-etapes"], k: "fill", ask: "Escribe «pasaporte».", q: "Présentez votre ___ au contrôle.", acc: ["passeport"], why: "<b>passeport</b>." },
    { fase: "indep", c: ["ae3-etapes"], k: "fill", ask: "Escribe «hacer el check-in» (s'___).", q: "Il faut s'___ deux heures avant le départ.", acc: ["enregistrer"], why: "<b>enregistrer</b>." },
    { fase: "indep", c: ["ae3-annonce"], k: "spot", ask: "Encuentra el error.", s: "Notre vol pour Madrid est [cancellé] à cause de la neige .", fix: "annulé", why: "<b>annulé</b>." },
    { fase: "aplica", c: ["ae3-annonce"], k: "choice", es: true, say: "Embarquement immédiat, porte douze.", ask: "Escucha. ¿Qué anuncian?", q: "Elige.", o: ["Embarque inmediato en la puerta 12", "El vuelo está cancelado", "Retraso de doce minutos"], a: 0, why: "<b>porte douze</b>." },
    { fase: "aplica", c: ["ae3-annonce"], k: "choice", ask: "«Su vuelo está retrasado una hora.»", q: "«Votre vol est ___ d'une heure.»", o: ["retardé", "annulé", "arrivé"], a: 0, why: "<b>retardé</b>." },
    { fase: "dominio", c: ["ae3-etapes"], k: "order", ask: "Ordena: «¡Perdí mi pase de abordar!».", tokens: ["J'ai perdu", "ma carte", "d'embarquement !"], why: "<b>J'ai perdu ma carte d'embarquement !</b>" },
    { fase: "dominio", c: ["ae3-etapes"], k: "choice", ask: "«el check-in»", q: "«___»", o: ["l'enregistrement", "l'embarquement", "la douane"], a: 0, why: "<b>l'enregistrement</b>." },
    { fase: "dominio", c: ["ae3-etapes", "ae3-annonce"], k: "listen", say: "Votre vol est retardé d'une heure.", acc: ["Votre vol est retardé d'une heure."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Votre vol est retardé d'une heure.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Bogotá", "Madrid", "Charles-de-Gaulle"], previo: ["votre", "devez", "passer", "l'heure", "heure", "d'une", "sera", "oh", "cause", "neige", "présentez", "deux", "heures", "avant", "départ", "perdu", "ma", "notre", "douze", "taxi", "bagages", "vol", "arrivé", "faut", "il", "s'il", "vous", "plaît"] }
};

E["a2-gare"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "À la gare : horaires, quai, correspondance",
  objetivo: {
    que: "Vas a moverte por la estación de tren: horarios, andén, vía, transbordo y retrasos.",
    corto: "Le train part voie 5.",
    podras: ["Preguntar À quelle heure part le prochain train pour… ?", "Entender le quai, la voie, une correspondance.", "Decir le train a du retard, j'ai raté mon train."],
    iconos: ["m2d/correr", "ic2/reloj-arena", "ic2/mundo"],
    previos: ["Reservar un viaje (lección 55) y la hora oficial (A1, lección 20)."],
    capacidad: "Ahora puedes viajar en tren por Francia."
  },
  requiere: R("rv-billet", "rv-vol", "ho2-officielle"), recupera: ["ho2-officielle"],
  conceptos: {
    "ga-lieux": { n: "l'horaire, le quai, la voie, le guichet, la salle d'attente", b: "voc" },
    "ga-probleme": { n: "une correspondance, avoir du retard, rater son train", b: "voc" }
  },
  video: {
    titulo: "En la estación", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/correr", grande: "voie 5 · 14 h 32", seg: [
        { es: "Hola. En la estación: andén, vía y hora exacta." } ] },
      { v: "frase", filas: [
          { nota: "salida", p: 1, partes: [["Le train pour Lyon part de la voie 5 à 14 h 32.", "-", 1]] },
          { nota: "transbordo", p: 2, partes: [["Il y a une correspondance à Dijon.", "-", 2]] },
          { nota: "retraso", p: 3, partes: [["Le train a vingt minutes de retard.", "-", 3]] } ], seg: [
        { es: "El tren a Lyon sale de la vía 5 a las 14 y 32,", p: 1 }, { es: "hay que hacer transbordo en Dijon,", p: 2 }, { es: "el tren tiene veinte minutos de retraso.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«¡Perdí mi tren!»", o: ["J'ai raté mon train !", "J'ai perdé mon train !"], a: 0,
        bien: "¡Sí! Rater.", mal: "Perder un tren: rater.",
        seg: [ { es: "Pausa. Perdí el tren." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["le quai", "la voie", "une correspondance", "le guichet", "le contrôleur", "le TER"], seg: [
        { es: "TGV: alta velocidad; TER: regional.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El tren a Niza", img: "bg-paris", yo: "camila",
    escena: "Camila pregunta en la taquilla de la estación.",
    pj: PJ,
    lineas: [
      ["camila", "À quelle heure part le prochain train pour Nice ?", "¿A qué hora sale el próximo tren a Niza?"],
      ["vendeur", "À 10 h 15, voie 3. Il y a une correspondance à Marseille.", "A las 10 y 15, vía 3. Hay transbordo en Marsella."],
      ["camila", "Le train est à l'heure ?", "¿El tren está a tiempo?"],
      ["vendeur", "Non, il a vingt minutes de retard. Vous pouvez attendre dans la salle d'attente.", "No, tiene veinte minutos de retraso. Puede esperar en la sala de espera."]
    ],
    fijate: "Fíjate: le prochain train, voie 3, une correspondance, vingt minutes de retard."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "La estación",
      idea: "l'horaire (el horario), le quai (el andén), la voie (la vía), le guichet (la taquilla), la salle d'attente. une correspondance (un transbordo). Le train a du retard. J'ai raté mon train. le TGV, le TER, le contrôleur.",
      intro: "Toca cada tarjeta.",
      palabras: [
        { fr: "l'horaire", es: "el horario" },
        { fr: "le quai", es: "el andén", ej: ["Le train arrive quai B.", "El tren llega al andén B."] },
        { fr: "la voie", es: "la vía" },
        { fr: "le guichet", es: "la taquilla" },
        { fr: "la salle d'attente", es: "la sala de espera" },
        { fr: "une correspondance", es: "un transbordo", ej: ["J'ai raté ma correspondance.", "Perdí mi transbordo."] },
        { fr: "avoir du retard", es: "tener retraso", ej: ["Le train a vingt minutes de retard.", "El tren tiene veinte minutos de retraso."] },
        { fr: "rater son train", es: "perder el tren" },
        { fr: "le prochain train", es: "el próximo tren" },
        { fr: "le contrôleur", es: "el revisor" },
        { fr: "le voyageur", es: "el viajero" },
        { fr: "le conducteur", es: "el conductor" },
        { fr: "le TGV / le TER", es: "el tren de alta velocidad / el regional" }
      ],
      clave: "À quelle heure part le prochain train pour… ?" },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Le train a vingt minutes de retardé.", "Le train a vingt minutes de retard.", "Nombre: retard."], ["J'ai perdé mon train.", "J'ai raté mon train.", "rater."], ["le train de la vía 5", "le train de la voie 5", "voie."]] }
  ],
  ejemplos: [
    { sit: "«¿A qué hora sale el próximo tren a Niza?»", resp: "À quelle heure part le prochain train pour Nice ?", pasos: ["le prochain train pour…"], porque: "Pregunta." },
    { sit: "«Hay que hacer transbordo en Dijon.»", resp: "Il y a une correspondance à Dijon.", pasos: ["une correspondance."], porque: "Transbordo." },
    { sit: "«El tren tiene retraso.»", resp: "Le train a du retard.", pasos: ["avoir du retard."], porque: "Retraso." }
  ],
  comprueba: [
    { q: "«le quai» es…", o: ["el andén", "el muelle del puerto"], a: 0, b: "voc", porque: "Estación." },
    { q: "«une correspondance» en el tren es…", o: ["un transbordo", "una carta"], a: 0, b: "voc", porque: "Cambio de tren." },
    { q: "«rater son train» significa…", o: ["perder el tren", "rayar el tren"], a: 0, b: "voc", porque: "rater." }
  ],
  practica: [
    { fase: "guiada", c: ["ga-probleme"], k: "choice", ask: "«un transbordo»", q: "«___»", o: ["une correspondance", "un quai", "une voie"], a: 0, pista: "Cambio de tren.", why: "<b>une correspondance</b>." },
    { fase: "guiada", c: ["ga-lieux"], k: "match", ask: "Une cada palabra.", q: "Francés → español", pairs: [["l'horaire", "el horario"], ["la voie", "la vía"], ["le guichet", "la taquilla"], ["le contrôleur", "el revisor"]], pista: "guichet = taquilla.", why: "La estación." },
    { fase: "guiada", c: ["ga-lieux"], k: "sort", ask: "¿Lugar o persona?", q: "Clasifica.", cats: ["Lugar", "Persona"], items: [["le quai", 0], ["la voie", 0], ["le guichet", 0], ["la salle d'attente", 0], ["le contrôleur", 1], ["le voyageur", 1], ["le conducteur", 1]], pista: "-eur: persona.", why: "Estación." },
    { fase: "indep", c: ["ga-lieux"], k: "fill", ask: "Escribe «tren».", q: "Le prochain ___ pour Paris part à 10 h.", acc: ["train"], why: "<b>train</b>." },
    { fase: "indep", c: ["ga-probleme"], k: "fill", ask: "Escribe «perdido» (rater).", q: "J'ai ___ mon train !", acc: ["raté"], why: "<b>raté</b>." },
    { fase: "indep", c: ["ga-probleme"], k: "spot", ask: "Encuentra el error.", s: "Désolé , j'ai [perdé] mon train pour Lyon .", fix: "raté", why: "<b>raté</b>." },
    { fase: "aplica", c: ["ga-lieux"], k: "choice", es: true, say: "Le train à destination de Marseille partira voie trois.", ask: "Escucha. ¿De qué vía sale?", q: "Elige.", o: ["Vía 3", "Vía 13", "Andén B"], a: 0, why: "<b>voie trois</b>." },
    { fase: "aplica", c: ["ga-probleme"], k: "choice", ask: "«El tren tiene retraso.»", q: "«___»", o: ["Le train a du retard.", "Le train est retard.", "Le train a retardé."], a: 0, why: "<b>a du retard</b>." },
    { fase: "dominio", c: ["ga-lieux"], k: "order", ask: "Ordena: «¿A qué hora sale el próximo tren a Niza?».", tokens: ["À quelle heure", "part", "le prochain train", "pour Nice ?"], why: "<b>À quelle heure part le prochain train pour Nice ?</b>" },
    { fase: "dominio", c: ["ga-probleme"], k: "choice", ask: "«Perdí mi transbordo.»", q: "«___»", o: ["J'ai raté ma correspondance.", "J'ai perdu ma voie.", "J'ai raté mon quai."], a: 0, why: "<b>raté ma correspondance</b>." },
    { fase: "dominio", c: ["ga-lieux", "ga-probleme"], k: "listen", say: "Le train a vingt minutes de retard.", acc: ["Le train a vingt minutes de retard.", "Le train a 20 minutes de retard."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Le train a vingt minutes de retard.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Nice", "Marseille", "Lyon", "Dijon", "Paris"], previo: ["quelle", "heure", "l'heure", "part", "prochain", "train", "10", "15", "h", "3", "5", "14", "32", "vingt", "minutes", "pouvez", "attendre", "destination", "partira", "trois", "désolé", "mon", "ma", "pour", "perdu", "est", "retardé", "perdé", "B"] }
};

E["a2-decrire-ville"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Décrire une ville : on peut, il y a",
  objetivo: {
    que: "Vas a describir una ciudad: cómo es, qué hay, qué se puede hacer y por qué es conocida.",
    corto: "On peut visiter…",
    podras: ["Decir c'est une ville animée, calme, historique.", "Usar il y a… y on peut + infinitivo.", "Decir la ville est connue pour…, se trouve à…"],
    iconos: ["ic2/torre-eiffel", "ic2/mundo", "m2d/senalar"],
    previos: ["La ciudad (A1, lecciones 7 y 34) y on (A1, lección 60)."],
    capacidad: "Ahora puedes presentar tu ciudad a un francés."
  },
  requiere: R("on-sens", "ci-ilya", "lv-masc", "lv-fem"), recupera: ["lv-masc", "on-sens"],
  conceptos: {
    "dv-adj": { n: "une ville animée, calme, historique, polluée…", b: "voc" },
    "dv-onpeut": { n: "il y a…, on peut + infinitivo, connue pour, se trouve à", b: "voc" }
  },
  video: {
    titulo: "Describir una ciudad", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/torre-eiffel", grande: "connue pour…", seg: [
        { es: "Hola. ¿Cómo es tu ciudad? ¿Qué se puede hacer?" } ] },
      { v: "frase", filas: [
          { nota: "cómo es", p: 1, partes: [["Pamplona est une ville universitaire et calme.", "-", 1]] },
          { nota: "qué se puede hacer", p: 2, partes: [["On peut visiter la cathédrale.", "-", 2]] },
          { nota: "por qué es famosa", p: 3, partes: [["Lyon est connue pour sa gastronomie.", "-", 3]] } ], seg: [
        { es: "Pamplona es universitaria y tranquila,", p: 1 }, { es: "se puede visitar la catedral,", p: 2 }, { es: "Lyon es conocida por su gastronomía.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Burdeos es conocida por su vino.»", o: ["Bordeaux est connue pour son vin.", "Bordeaux est connue par son vin."], a: 0,
        bien: "¡Sí! Connue pour.", mal: "Conocida por = connue pour.",
        seg: [ { es: "Pausa. Conocida por." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["animée", "calme", "historique", "polluée", "on peut…", "se trouve à…"], seg: [
        { es: "Y para situarla: se trouve près de…", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Mi ciudad", img: "bg-universidad", yo: "camila",
    escena: "Camila presenta Pamplona en clase.",
    pj: PJ,
    lineas: [
      ["camila", "Pamplona est une ville universitaire et calme. Elle se trouve près de Cúcuta.", "Pamplona es una ciudad universitaria y tranquila. Está cerca de Cúcuta."],
      ["camila", "Dans ma ville, il y a beaucoup de parcs et une belle cathédrale.", "En mi ciudad hay muchos parques y una catedral bonita."],
      ["sofia", "Qu'est-ce qu'on peut faire à Pamplona ?", "¿Qué se puede hacer en Pamplona?"],
      ["camila", "On peut se promener dans le vieux quartier. La ville est connue pour sa Semaine sainte.", "Se puede pasear por el barrio antiguo. La ciudad es conocida por su Semana Santa."]
    ],
    fijate: "Fíjate: une ville calme, se trouve près de, il y a, on peut, connue pour."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "Describir una ciudad",
      idea: "C'est une ville + adjetivo (animée, historique, moderne, agréable). Il y a + lugares. On peut + infinitivo. La ville est connue pour… Elle se trouve à / près de…",
      intro: "Toca cada tarjeta.",
      palabras: [
        { fr: "une ville animée", es: "una ciudad animada, con vida" },
        { fr: "calme", es: "tranquila" },
        { fr: "historique", es: "histórica" },
        { fr: "touristique", es: "turística" },
        { fr: "agréable", es: "agradable" },
        { fr: "propre", es: "limpia" },
        { fr: "bruyante", es: "ruidosa" },
        { fr: "polluée", es: "contaminada" },
        { fr: "dangereuse", es: "peligrosa" },
        { fr: "On peut + infinitivo", es: "Se puede…", ej: ["On peut visiter la cathédrale et le parc.", "Se puede visitar la catedral y el parque."] },
        { fr: "connue pour", es: "conocida por", ej: ["Lyon est connue pour sa gastronomie.", "Lyon es conocida por su gastronomía."] },
        { fr: "se trouver", es: "estar situado", ej: ["Cúcuta se trouve près de la frontière.", "Cúcuta está cerca de la frontera."] },
        { fr: "au bord de la rivière", es: "a la orilla del río" }
      ],
      clave: "Dans ma ville, il y a beaucoup de parcs." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["La ville est connue par sa cuisine.", "La ville est connue pour sa cuisine.", "connue pour."], ["Bordeaux est connue par son vin.", "Bordeaux est connue pour son vin.", "pour."], ["Il y a beaucoup des parcs.", "Il y a beaucoup de parcs.", "beaucoup de."]] }
  ],
  ejemplos: [
    { sit: "«Se puede pasear a la orilla del río.»", resp: "On peut se promener au bord de la rivière.", pasos: ["on peut + infinitivo."], porque: "Actividad." },
    { sit: "«Es una ciudad tranquila con muchos parques.»", resp: "C'est une ville calme avec beaucoup de parcs.", pasos: ["C'est une ville + adjetivo."], porque: "Descripción." },
    { sit: "«Cúcuta está cerca de la frontera.»", resp: "Cúcuta se trouve près de la frontière.", pasos: ["se trouver."], porque: "Situación." }
  ],
  comprueba: [
    { q: "«une ville animée» es…", o: ["una ciudad con vida", "una ciudad de dibujos animados"], a: 0, b: "voc", porque: "Ambiente." },
    { q: "«connue pour» significa…", o: ["conocida por", "conocida para"], a: 0, b: "voc", porque: "Fama." },
    { q: "«polluée» significa…", o: ["contaminada", "con pollos"], a: 0, b: "voc", porque: "Negativo." }
  ],
  practica: [
    { fase: "guiada", c: ["dv-onpeut"], k: "choice", ask: "«conocida por»", q: "«connue ___»", o: ["pour", "par", "de"], a: 0, pista: "pour.", why: "<b>connue pour</b>." },
    { fase: "guiada", c: ["dv-onpeut"], k: "match", ask: "¿Qué se puede hacer en cada lugar?", q: "Lugar → actividad", pairs: [["le vieux quartier", "se promener"], ["le musée", "voir des tableaux"], ["le marché", "acheter des produits locaux"], ["le parc", "faire un pique-nique"]], pista: "tableaux = cuadros.", why: "Actividades." },
    { fase: "guiada", c: ["dv-adj"], k: "sort", ask: "¿Positivo o negativo?", q: "Clasifica.", cats: ["Positivo", "Negativo"], items: [["animée", 0], ["agréable", 0], ["propre", 0], ["verte", 0], ["bruyante", 1], ["polluée", 1], ["dangereuse", 1], ["sale", 1]], pista: "propre = limpia.", why: "Valorar." },
    { fase: "indep", c: ["dv-onpeut"], k: "fill", ask: "Escribe «está situada» (se ___).", q: "Cúcuta se ___ près de la frontière.", acc: ["trouve"], why: "<b>trouve</b>." },
    { fase: "indep", c: ["dv-onpeut"], k: "fill", ask: "Completa: «hay».", q: "Dans ma ville, il ___ beaucoup de parcs.", acc: ["y a"], why: "<b>y a</b>." },
    { fase: "indep", c: ["dv-onpeut"], k: "spot", ask: "Encuentra el error.", s: "Bordeaux est connue [par] son vin .", fix: "pour", why: "<b>pour</b>." },
    { fase: "aplica", c: ["dv-onpeut"], k: "choice", ask: "«Se puede pasear a la orilla del río.»", q: "«___ se promener au bord de la rivière.»", o: ["On peut", "Il peut", "On doit"], a: 0, why: "<b>On peut</b>." },
    { fase: "aplica", c: ["dv-adj"], k: "choice", es: true, say: "Pamplona est une ville universitaire et calme.", ask: "Escucha. ¿Cómo es Pamplona?", q: "Elige.", o: ["Universitaria y tranquila", "Turística y ruidosa", "Grande y moderna"], a: 0, why: "<b>universitaire et calme</b>." },
    { fase: "dominio", c: ["dv-adj"], k: "order", ask: "Ordena: «Es una ciudad tranquila con muchos parques».", tokens: ["C'est une ville", "calme", "avec beaucoup", "de parcs."], why: "<b>C'est une ville calme avec beaucoup de parcs.</b>" },
    { fase: "dominio", c: ["dv-adj"], k: "choice", ask: "«una ciudad contaminada»", q: "«une ville ___»", o: ["polluée", "propre", "animée"], a: 0, why: "<b>polluée</b>." },
    { fase: "dominio", c: ["dv-adj", "dv-onpeut"], k: "listen", say: "Lyon est connue pour sa gastronomie.", acc: ["Lyon est connue pour sa gastronomie."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Lyon est connue pour sa gastronomie.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "Pamplona", "Cúcuta", "Lyon", "Bordeaux", "Semaine sainte"], previo: ["universitaire", "près", "ma", "beaucoup", "parcs", "belle", "cathédrale", "qu'est-ce", "qu'on", "faire", "promener", "vieux", "quartier", "sa", "semaine", "sainte", "gastronomie", "frontière", "visiter", "parc", "rivière", "bord", "son", "vin", "tableaux", "voir", "produits", "locaux", "acheter", "pique-nique", "verte", "sale", "moderne", "doit", "musée", "marché", "cuisine", "des", "avec"] }
};

E["a2-recit-voyage"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Écrire un récit de voyage",
  objetivo: {
    que: "Vas a escribir un relato de viaje: introducción, descripción (imparfait), acciones (passé composé) y conclusión.",
    corto: "C'était inoubliable !",
    podras: ["Empezar: Cet été, je suis parti(e) à…", "Describir en imparfait y contar en passé composé.", "Concluir: C'était inoubliable ! Je te conseille d'y aller."],
    iconos: ["ic2/pergamino", "ic2/mundo", "m2d/celebrar"],
    previos: ["Passé composé o imparfait (lección 14) y contar el fin de semana (lección 22)."],
    capacidad: "Ahora puedes escribir sobre tus viajes."
  },
  requiere: R("pi-decor", "pi-fait", "rw-conn", "rw-avis", "y-lieu"), recupera: ["pi-decor", "rw-avis"],
  conceptos: {
    "rv2-structure": { n: "introducción, descripción (imparfait), acciones (passé composé)", b: "voc" },
    "rv2-conclusion": { n: "C'était inoubliable ! Je te conseille d'y aller.", b: "voc" }
  },
  video: {
    titulo: "Un relato de viaje", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/pergamino", grande: "C'était inoubliable !", seg: [
        { es: "Hola. Un buen relato tiene cuatro partes." } ] },
      { v: "frase", filas: [
          { nota: "introducción", p: 1, partes: [["Cet été, je suis partie à Nice.", "-", 1]] },
          { nota: "descripción", p: 2, partes: [["Il faisait très beau.", "-", 2]] },
          { nota: "acción", p: 3, partes: [["J'ai visité le vieux Nice.", "-", 3]] },
          { nota: "conclusión", p: 4, partes: [["C'était génial !", "-", 4]] } ], seg: [
        { es: "Adónde fuiste,", p: 1 }, { es: "cómo era,", p: 2 }, { es: "qué hiciste,", p: 3 }, { es: "qué te pareció.", p: 4 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Durante el viaje hacía mucho frío todos los días.»", o: ["Pendant le voyage, il faisait très froid tous les jours.", "Pendant le voyage, il fera très froid tous les jours."], a: 0,
        bien: "¡Sí! Descripción en imparfait.", mal: "Es pasado y es descripción: faisait.",
        seg: [ { es: "Pausa. Hacía frío." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["inoubliable", "dépaysant", "épuisant", "reposant", "Je te conseille d'y aller !"], seg: [
        { es: "Inolvidable, diferente, agotador, relajante.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Montreal", img: "bg-cafe", yo: "camila",
    escena: "Camila escribe un blog sobre su viaje.",
    pj: PJ,
    lineas: [
      ["camila", "L'année dernière, je suis allée à Montréal avec ma cousine.", "El año pasado fui a Montreal con mi prima."],
      ["camila", "Il faisait froid, mais la ville était magnifique. Les gens étaient très gentils.", "Hacía frío, pero la ciudad era magnífica. La gente era muy amable."],
      ["camila", "Nous avons visité le vieux port et nous avons goûté des spécialités locales.", "Visitamos el puerto viejo y probamos especialidades locales."],
      ["camila", "C'était un voyage inoubliable ! Je te conseille d'y aller.", "¡Fue un viaje inolvidable! Te aconsejo ir."]
    ],
    fijate: "Fíjate: je suis allée (introducción), il faisait, était (descripción), nous avons visité (acción), c'était (conclusión)."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "Partes del relato",
      idea: "Introducción: Cet été, je suis parti(e) à… avec… Descripción en imparfait: il faisait chaud, l'hôtel était près de la plage. Acciones en passé composé: nous avons visité…, j'ai goûté… Conclusión: C'était un voyage inoubliable. Je te conseille d'y aller !",
      intro: "Toca cada tarjeta.",
      palabras: [
        { fr: "Cet été, je suis partie à Nice.", es: "Este verano me fui a Niza." },
        { fr: "Il faisait froid, mais la ville était magnifique.", es: "Hacía frío, pero la ciudad era magnífica." },
        { fr: "L'hôtel était très confortable.", es: "El hotel era muy cómodo." },
        { fr: "Nous avons visité le musée du Louvre.", es: "Visitamos el museo del Louvre." },
        { fr: "Nous avons goûté des spécialités locales.", es: "Probamos especialidades locales." },
        { fr: "C'était un voyage inoubliable !", es: "¡Fue un viaje inolvidable!" },
        { fr: "Je te conseille d'y aller !", es: "¡Te aconsejo ir!" },
        { fr: "inoubliable", es: "inolvidable" },
        { fr: "dépaysant", es: "que te cambia de aires" },
        { fr: "épuisant", es: "agotador" },
        { fr: "reposant", es: "relajante" },
        { fr: "il y avait", es: "había" }
      ],
      clave: "Descripción: imparfait; acciones: passé composé; opinión: c'était." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Pendant le voyage, il fera très froid.", "Pendant le voyage, il faisait très froid.", "Pasado: imparfait."], ["C'est été inoubliable.", "C'était inoubliable.", "Opinión: c'était."], ["Je te conseille d'aller y.", "Je te conseille d'y aller.", "y delante del infinitivo."]] }
  ],
  ejemplos: [
    { sit: "«El hotel era muy cómodo.»", resp: "L'hôtel était très confortable.", pasos: ["Descripción → était."], porque: "Imparfait." },
    { sit: "«Visitamos el museo del Louvre.»", resp: "Nous avons visité le musée du Louvre.", pasos: ["Acción → avons visité."], porque: "Passé composé." },
    { sit: "Terminas tu relato.", resp: "C'était inoubliable !", pasos: ["Opinión → c'était."], porque: "Conclusión." }
  ],
  comprueba: [
    { q: "La descripción (el tiempo, el hotel) va en…", o: ["imparfait", "passé composé"], a: 0, b: "voc", porque: "Decorado." },
    { q: "Las acciones (visitar, probar) van en…", o: ["passé composé", "imparfait"], a: 0, b: "voc", porque: "Hechos." },
    { q: "«inoubliable» significa…", o: ["inolvidable", "inaguantable"], a: 0, b: "voc", porque: "Opinión." }
  ],
  practica: [
    { fase: "guiada", c: ["rv2-structure"], k: "choice", ask: "«El hotel era muy cómodo.» (descripción)", q: "«L'hôtel ___ très confortable.»", o: ["était", "a été", "sera"], a: 0, pista: "Descripción.", why: "<b>était</b>." },
    { fase: "guiada", c: ["rv2-conclusion"], k: "match", ask: "Une cada adjetivo.", q: "Francés → español", pairs: [["inoubliable", "inolvidable"], ["dépaysant", "que te cambia de aires"], ["épuisant", "agotador"], ["reposant", "relajante"]], pista: "épuisant = agotador.", why: "Opinión." },
    { fase: "guiada", c: ["rv2-structure"], k: "sort", ask: "¿Descripción o acción?", q: "Clasifica.", cats: ["Descripción (imparfait)", "Acción (passé composé)"], items: [["La mer était bleue.", 0], ["Il y avait des touristes.", 0], ["Il faisait chaud.", 0], ["Les gens étaient gentils.", 0], ["Nous avons nagé.", 1], ["J'ai acheté des souvenirs.", 1], ["On a pris le bateau.", 1], ["Nous sommes rentrés.", 1]], pista: "Imparfait = cómo era.", why: "Dos tiempos." },
    { fase: "indep", c: ["rv2-conclusion"], k: "fill", ask: "Escribe «aconsejo».", q: "Je te ___ d'aller à Québec !", acc: ["conseille"], why: "<b>conseille</b>." },
    { fase: "indep", c: ["rv2-structure"], k: "fill", ask: "Escribe el auxiliar.", q: "Nous ___ goûté des spécialités locales.", acc: ["avons"], why: "<b>avons</b>." },
    { fase: "indep", c: ["rv2-structure"], k: "spot", ask: "Encuentra el error.", s: "Pendant le voyage , il [fera] très froid tous les jours .", fix: "faisait", why: "<b>faisait</b>." },
    { fase: "aplica", c: ["rv2-structure"], k: "choice", ask: "«Visitamos el museo del Louvre.» (acción)", q: "«Nous ___ le musée du Louvre.»", o: ["avons visité", "visitions", "visiterons"], a: 0, why: "<b>avons visité</b>." },
    { fase: "aplica", c: ["rv2-conclusion"], k: "choice", ask: "Terminas tu relato de viaje.", q: "«___»", o: ["C'était inoubliable !", "C'est été inoubliable !", "Ce sera inoubliable !"], a: 0, why: "<b>C'était</b>." },
    { fase: "dominio", c: ["rv2-structure", "rv2-conclusion"], k: "order", ask: "Ordena el relato.", tokens: ["Cet été, je suis partie à Nice.", "Il faisait très beau.", "J'ai visité le vieux Nice.", "C'était génial !"], why: "Introducción → descripción → acción → conclusión." },
    { fase: "dominio", c: ["rv2-structure"], k: "choice", es: true, say: "Il faisait froid, mais la ville était magnifique.", ask: "Escucha. ¿Cómo era la ciudad?", q: "Elige.", o: ["Magnífica, aunque hacía frío", "Fea y fría", "Calurosa"], a: 0, why: "<b>magnifique</b>." },
    { fase: "dominio", c: ["rv2-structure", "rv2-conclusion"], k: "listen", say: "C'était un voyage inoubliable !", acc: ["C'était un voyage inoubliable !", "C'était un voyage inoubliable!", "C'était un voyage inoubliable."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>C'était un voyage inoubliable !</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Nice", "Montréal", "Québec", "Louvre"], previo: ["année", "dernière", "allée", "ma", "cousine", "froid", "mais", "ville", "magnifique", "gens", "gentils", "très", "visité", "vieux", "port", "goûté", "spécialités", "locales", "voyage", "conseille", "été", "partie", "beau", "génial", "hôtel", "l'hôtel", "confortable", "musée", "mer", "bleue", "touristes", "chaud", "nagé", "acheté", "souvenirs", "pris", "bateau", "rentrés", "pendant", "tous", "jours", "fera", "sera", "visitions", "visiterons", "avons", "c'est"] }
};

E["a2-futur-irreguliers"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Le futur simple des verbes irréguliers",
  objetivo: {
    que: "Vas a dominar las raíces irregulares del futuro: ser-, aur-, ir-, fer-, viendr-, pourr-, verr-…",
    corto: "J'irai, je ferai, je verrai.",
    podras: ["Usar las raíces irregulares con -ai, -as, -a, -ons, -ez, -ont.", "Añadir verr-, voudr-, saur-, devr-.", "Usar marcadores: dans deux ans, un jour, l'année prochaine."],
    iconos: ["ic2/reloj-arena", "ic2/estrella", "m2d/correr"],
    previos: ["El futuro (lección 4) y las previsiones (lección 38)."],
    capacidad: "Ahora puedes hablar de tu futuro con cualquier verbo."
  },
  requiere: R("fu-simple", "fu-irreg", "pv-futur"), recupera: ["fu-irreg"],
  conceptos: {
    "fi-racines": { n: "ser-, aur-, ir-, fer-, viendr-, pourr-, verr-, voudr-, saur-, devr-", b: "gr" },
    "fi-marq": { n: "demain, dans deux ans, un jour, l'année prochaine", b: "gr" }
  },
  video: {
    titulo: "Futuros irregulares", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/estrella", grande: "Un jour, je serai…", seg: [
        { es: "Hola. Terminaciones siempre iguales; solo cambia la raíz." } ] },
      { v: "frase", filas: [
          { nota: "aller", p: 1, partes: [["L'année prochaine, j'irai en France.", "-", 1]] },
          { nota: "avoir", p: 2, partes: [["Nous aurons notre diplôme dans deux ans.", "-", 2]] },
          { nota: "voir", p: 3, partes: [["Nous verrons le film demain.", "-", 3]] } ], seg: [
        { es: "Iré a Francia,", p: 1 }, { es: "tendremos el título dentro de dos años,", p: 2 }, { es: "veremos la película mañana.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Haré unas prácticas en París.»", o: ["Je ferai un stage à Paris.", "Je faira un stage à Paris."], a: 0,
        bien: "¡Sí! Je ferai.", mal: "Faire: fer- + ai.",
        seg: [ { es: "Pausa. Haré." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["tu pourras", "nous verrons", "je voudrai", "je saurai", "je devrai", "je viendrai"], seg: [
        { es: "Las mismas raíces sirven para el condicional.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "En diez años", img: "bg-universidad", yo: "camila",
    escena: "Camila y Hugo imaginan su futuro.",
    pj: PJ,
    lineas: [
      ["hugo", "Dans dix ans, tu seras où ?", "Dentro de diez años, ¿dónde estarás?"],
      ["camila", "J'aurai mon diplôme et je ferai un stage à Paris. Un jour, j'irai au Canada !", "Tendré mi título y haré unas prácticas en París. ¡Un día iré a Canadá!"],
      ["hugo", "Tu pourras venir à mon mariage ?", "¿Podrás venir a mi boda?"],
      ["camila", "Bien sûr ! Je viendrai et nous verrons tous nos amis.", "¡Claro! Vendré y veremos a todos nuestros amigos."]
    ],
    fijate: "Fíjate: tu seras, j'aurai, je ferai, j'irai, tu pourras, je viendrai, nous verrons."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Las raíces del futuro",
      idea: "Terminaciones: -ai, -as, -a, -ons, -ez, -ont. Raíces: être → ser-, avoir → aur-, aller → ir-, faire → fer-, venir → viendr-, pouvoir → pourr-, voir → verr-, vouloir → voudr-, savoir → saur-, devoir → devr-.",
      intro: "Toca cada forma.",
      tabla: [["Francés", "Español", "Raíz"], [
        ["je serai / nous serons", "seré / seremos", "ser-"],
        ["j'aurai / nous aurons", "tendré / tendremos", "aur-"],
        ["j'irai", "iré", "ir-"],
        ["je ferai / tu feras", "haré / harás", "fer-"],
        ["je viendrai / ils viendront", "vendré / vendrán", "viendr-"],
        ["tu pourras", "podrás", "pourr-"],
        ["nous verrons", "veremos", "verr-"],
        ["je voudrai", "querré", "voudr-"],
        ["je saurai", "sabré", "saur-"],
        ["je devrai", "deberé", "devr-"],
        ["Un jour, nous serons riches !", "¡Un día seremos ricos!", "ser-"],
        ["Nous aurons notre diplôme dans deux ans.", "Tendremos el título dentro de dos años.", "aur-"]
      ]],
      ej: [["il sera", "será"], ["je vais", "voy"], ["tu fais", "haces"], ["il est", "es"], ["nous avons", "tenemos"], ["Nous aurons le temps.", "Tendremos tiempo."], ["Ils viendront demain.", "Vendrán mañana."], ["J'irai à Lyon.", "Iré a Lyon."], ["dans deux ans", "dentro de dos años"], ["un jour", "algún día"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["ils viendrons","ils viendront","ils: -ont."], ["ils veniront","ils viendront","venir → viendr-."], ["tu pouvras","tu pourras","pouvoir → pourr-."], ["j'allerai", "j'irai", "aller → ir-."], ["je faira", "je ferai", "faire → fer- + ai."], ["je voirai", "je verrai", "voir → verr-."], ["je venirai", "je viendrai", "venir → viendr-."]] }
  ],
  ejemplos: [
    { sit: "«Iré a Lyon.»", resp: "J'irai à Lyon.", pasos: ["aller → ir- + ai."], porque: "Irregular." },
    { sit: "«Tendremos tiempo.»", resp: "Nous aurons le temps.", pasos: ["avoir → aur- + ons."], porque: "Irregular." },
    { sit: "«Vendrán mañana.»", resp: "Ils viendront demain.", pasos: ["venir → viendr- + ont."], porque: "Irregular." }
  ],
  comprueba: [
    { q: "El futuro de voir es…", o: ["je verrai", "je voirai"], a: 0, b: "gr", porque: "verr-." },
    { q: "Las terminaciones del futuro…", o: ["son siempre las mismas", "cambian con cada verbo"], a: 0, b: "gr", porque: "-ai, -as, -a…" },
    { q: "«dans deux ans» significa…", o: ["dentro de dos años", "hace dos años"], a: 0, b: "gr", porque: "Futuro." }
  ],
  practica: [
    { fase: "guiada", c: ["fi-racines"], k: "choice", ask: "«Iré a Lyon.»", q: "«___ à Lyon.»", o: ["J'irai", "J'allerai", "Je vais irai"], a: 0, pista: "ir-.", why: "<b>J'irai</b>." },
    { fase: "guiada", c: ["fi-racines"], k: "match", ask: "Une cada infinitivo con su raíz.", q: "Infinitivo → raíz", pairs: [["pouvoir", "pourr-"], ["voir", "verr-"], ["vouloir", "voudr-"], ["savoir", "saur-"], ["devoir", "devr-"]], pista: "voir → verr-.", why: "Raíces." },
    { fase: "guiada", c: ["fi-racines"], k: "sort", ask: "¿Futuro o presente?", q: "Clasifica.", cats: ["Futuro", "Presente"], items: [["j'irai", 0], ["tu feras", 0], ["il sera", 0], ["nous aurons", 0], ["je vais", 1], ["tu fais", 1], ["il est", 1], ["nous avons", 1]], pista: "-ai, -as, -a…", why: "Tiempos." },
    { fase: "indep", c: ["fi-racines"], k: "fill", ask: "Escribe faire en futuro (je).", q: "Demain, je ___ mes devoirs.", acc: ["ferai"], why: "<b>ferai</b>." },
    { fase: "indep", c: ["fi-racines"], k: "fill", ask: "Escribe être en futuro (nous).", q: "Un jour, nous ___ riches !", acc: ["serons"], why: "<b>serons</b>." },
    { fase: "indep", c: ["fi-racines"], k: "spot", ask: "Encuentra el error.", s: "L'année prochaine , je [faira] un stage à Paris .", fix: "ferai", why: "<b>ferai</b>." },
    { fase: "aplica", c: ["fi-racines"], k: "choice", ask: "«Vendrán mañana.»", q: "«Ils ___ demain.»", o: ["viendront", "veniront", "viendrons"], a: 0, why: "<b>viendront</b>." },
    { fase: "aplica", c: ["fi-marq"], k: "choice", es: true, say: "Nous aurons notre diplôme dans deux ans.", ask: "Escucha. ¿Cuándo tendrán el título?", q: "Elige.", o: ["Dentro de dos años", "Hace dos años", "Este año"], a: 0, why: "<b>dans deux ans</b>." },
    { fase: "dominio", c: ["fi-racines"], k: "choice", ask: "«¿Podrás venir a mi boda?»", q: "«Tu ___ venir à mon mariage ?»", o: ["pourras", "pouvras", "peux"], a: 0, why: "<b>pourras</b>." },
    { fase: "dominio", c: ["fi-racines"], k: "order", ask: "Ordena: «Veremos la película mañana».", tokens: ["Nous", "verrons", "le film", "demain."], why: "<b>Nous verrons le film demain.</b>" },
    { fase: "dominio", c: ["fi-racines", "fi-marq"], k: "listen", say: "L'année prochaine, j'irai en France.", acc: ["L'année prochaine, j'irai en France.", "L'année prochaine j'irai en France."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>L'année prochaine, j'irai en France.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paris", "Canada", "France", "Lyon"], previo: ["dix", "ans", "où", "mon", "diplôme", "stage", "mariage", "bien", "sûr", "tous", "nos", "amis", "riches", "notre", "deux", "temps", "demain", "devoirs", "mes", "film", "année", "prochaine", "venir", "peux", "vais", "irai", "vouloir", "savoir", "devoir", "pouvoir", "voir"] }
};

E["a2-si-futur"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Si + présent, futur : les conditions probables",
  objetivo: {
    que: "Vas a expresar condiciones probables: si + presente, futuro (o imperativo).",
    corto: "S'il pleut, on restera.",
    podras: ["Formar si + presente, futuro.", "Escribir s'il (pero si elle).", "Usar si + presente, imperativo."],
    iconos: ["ic2/engranaje", "ic2/luna", "ic2/bombilla"],
    previos: ["El futuro (lecciones 4 y 60) y el imperativo (lección 15)."],
    capacidad: "Ahora puedes hablar de lo que pasará si…"
  },
  requiere: R("fu-simple", "fu-irreg", "fi-racines", "ip-irreg"), recupera: ["fi-racines"],
  conceptos: {
    "sf-forme": { n: "si + presente, futuro (nunca futuro tras si)", b: "gr" },
    "sf-sil": { n: "s'il / si elle; si + presente, imperativo", b: "gr" }
  },
  video: {
    titulo: "Si…", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/luna", grande: "S'il fait beau…", seg: [
        { es: "Hola. Después de si, presente; después, futuro." } ] },
      { v: "dos",
        a: { tag: "condición", fr: "S'il fait beau demain,", es: "si + presente" },
        b: { tag: "consecuencia", fr: "nous irons à la plage.", es: "futuro" },
        seg: [ { es: "La condición, en presente:", p: 1 }, { fr: "S'il fait beau demain,", p: 1 }, { es: "La consecuencia, en futuro:", p: 2 }, { fr: "nous irons à la plage.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Si vienes, estaré contento.»", o: ["Si tu viens, je serai content.", "Si tu viendras, je serai content."], a: 0,
        bien: "¡Sí! Presente tras si.", mal: "Después de si nunca va futuro.",
        seg: [ { es: "Pausa. Si vienes." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["S'il pleut, on restera.", "Si tu viens, je serai content.", "Si elle vient…", "Si tu as froid, prends mon pull."], seg: [
        { es: "Si se apostrofa solo con il: s'il.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Planes con lluvia", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo planean el sábado.",
    pj: PJ,
    lineas: [
      ["hugo", "S'il fait beau demain, nous irons à la plage.", "Si hace buen tiempo mañana, iremos a la playa."],
      ["camila", "Et s'il pleut ? — S'il pleut, on restera à la maison.", "¿Y si llueve? — Si llueve, nos quedaremos en casa."],
      ["hugo", "Si j'ai le temps, je t'appellerai ce soir.", "Si tengo tiempo, te llamaré esta noche."],
      ["camila", "D'accord. Et si tu as froid, prends mon pull !", "De acuerdo. ¡Y si tienes frío, toma mi suéter!"]
    ],
    fijate: "Fíjate: s'il fait beau → nous irons; s'il pleut → on restera; si tu as froid → prends."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Si + presente, futuro",
      idea: "Si + presente, futuro: Si tu viens, je serai content. El orden puede cambiar: Je serai content si tu viens. si + il → s'il; si elle no se apostrofa. Si + presente, imperativo: Si tu as froid, prends mon pull.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Estructura"], [
        ["S'il fait beau demain, nous irons à la plage.", "Si hace buen tiempo mañana, iremos a la playa.", "si + presente, futuro"],
        ["Si j'ai le temps, je t'appellerai.", "Si tengo tiempo, te llamaré.", "si + presente, futuro"],
        ["S'il pleut, on restera à la maison.", "Si llueve, nos quedaremos en casa.", "s'il"],
        ["S'il pleut, nous ne sortirons pas.", "Si llueve, no saldremos.", "negación"],
        ["Tu réussiras si tu travailles.", "Aprobarás si trabajas.", "orden inverso"],
        ["Si elle vient, je serai content.", "Si ella viene, estaré contento.", "si elle"],
        ["Si tu as froid, prends mon pull.", "Si tienes frío, toma mi suéter.", "si + imperativo"],
        ["Si tu as faim, mange un sandwich.", "Si tienes hambre, come un sándwich.", "si + imperativo"],
        ["Si j'ai de l'argent, j'irai en Europe.", "Si tengo plata, iré a Europa.", "futuro irregular"]
      ]],
      ej: [["si tu étudies", "si estudias"], ["si on a le temps", "si tenemos tiempo"], ["si vous venez", "si vienen"], ["on ira à la plage", "iremos a la playa"], ["nous visiterons le musée", "visitaremos el museo"], ["on mangera tôt", "comeremos temprano"], ["S'il neige, nous ferons du ski.", "Si nieva, esquiaremos."], ["Si j'ai une bonne note, je serai très content.", "Si saco buena nota, estaré muy contento."], ["vous pourrez vous reposer", "podrán descansar"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Si tu viendras, je serai content.", "Si tu viens, je serai content.", "Tras si: presente."], ["Si il pleut…", "S'il pleut…", "si + il = s'il."], ["S'elle vient…", "Si elle vient…", "si elle: sin apóstrofo."]] }
  ],
  ejemplos: [
    { sit: "«Si llueve, no saldremos.»", resp: "S'il pleut, nous ne sortirons pas.", pasos: ["s'il + presente.", "futuro."], porque: "Condición." },
    { sit: "«Si llegas temprano, desayunaremos juntos.»", resp: "Si tu arrives tôt, on prendra le petit-déjeuner ensemble.", pasos: ["si + arrives.", "prendra."], porque: "Condición." },
    { sit: "«Si tienes hambre, come un sándwich.»", resp: "Si tu as faim, mange un sandwich.", pasos: ["si + presente, imperativo."], porque: "Consejo." }
  ],
  comprueba: [
    { q: "Después de si va…", o: ["el presente", "el futuro"], a: 0, b: "gr", porque: "Nunca futuro." },
    { q: "si + il se escribe…", o: ["s'il", "si il"], a: 0, b: "gr", porque: "Elisión." },
    { q: "La consecuencia va en…", o: ["futuro (o imperativo)", "presente siempre"], a: 0, b: "gr", porque: "Estructura." }
  ],
  practica: [
    { fase: "guiada", c: ["sf-forme"], k: "choice", ask: "«Si vienes, estaré contento.»", q: "«Si tu ___ , je serai content.»", o: ["viens", "viendras", "venir"], a: 0, pista: "Presente.", why: "<b>viens</b>." },
    { fase: "guiada", c: ["sf-sil"], k: "choice", ask: "«Si hace buen tiempo, iremos al parque.»", q: "«___ fait beau, on ira au parc.»", o: ["S'il", "Si il", "Si"], a: 0, pista: "Elisión.", why: "<b>S'il</b>." },
    { fase: "guiada", c: ["sf-forme"], k: "sort", ask: "¿Condición o consecuencia?", q: "Clasifica.", cats: ["Condición (si + presente)", "Consecuencia (futuro)"], items: [["si tu étudies", 0], ["s'il fait beau", 0], ["si on a le temps", 0], ["si vous venez", 0], ["tu réussiras", 1], ["on ira à la plage", 1], ["nous visiterons le musée", 1], ["je serai content", 1]], pista: "si = condición.", why: "Dos partes." },
    { fase: "indep", c: ["sf-forme"], k: "fill", ask: "Escribe arriver en presente (tu).", q: "Si tu ___ tôt, on prendra le petit-déjeuner ensemble.", acc: ["arrives"], why: "<b>arrives</b>." },
    { fase: "indep", c: ["sf-forme"], k: "fill", ask: "Escribe aller en futuro (je).", q: "Si j'ai de l'argent, j'___ en Europe.", acc: ["irai"], why: "<b>irai</b>." },
    { fase: "indep", c: ["sf-forme"], k: "spot", ask: "Encuentra el error.", s: "Si tu [viendras] ce soir , je ferai un gâteau .", fix: "viens", why: "<b>viens</b>." },
    { fase: "aplica", c: ["sf-sil"], k: "choice", ask: "«Si tienes hambre, come un sándwich.»", q: "«Si tu as faim, ___ un sandwich.»", o: ["mange", "mangeras", "manges"], a: 0, why: "Imperativo: <b>mange</b>." },
    { fase: "aplica", c: ["sf-forme"], k: "match", ask: "Une cada condición con su consecuencia.", q: "Condición → consecuencia", pairs: [["Si tu as faim,", "on mangera tôt."], ["S'il neige,", "nous ferons du ski."], ["Si j'ai une bonne note,", "je serai très content."], ["Si vous êtes fatigués,", "vous pourrez vous reposer."]], why: "Condiciones." },
    { fase: "dominio", c: ["sf-forme"], k: "choice", es: true, say: "S'il pleut, on restera à la maison.", ask: "Escucha. ¿Qué harán si llueve?", q: "Elige.", o: ["Se quedarán en casa.", "Irán a la playa.", "Saldrán igual."], a: 0, why: "<b>on restera à la maison</b>." },
    { fase: "dominio", c: ["sf-forme"], k: "order", ask: "Ordena: «Si tengo tiempo, te llamaré».", tokens: ["Si j'ai", "le temps,", "je", "t'appellerai."], why: "<b>Si j'ai le temps, je t'appellerai.</b>" },
    { fase: "dominio", c: ["sf-forme", "sf-sil"], k: "listen", say: "S'il fait beau demain, nous irons à la plage.", acc: ["S'il fait beau demain, nous irons à la plage.", "S'il fait beau demain nous irons à la plage."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>S'il fait beau demain, nous irons à la plage.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Europe"], previo: ["fait", "beau", "demain", "irons", "plage", "pleut", "restera", "maison", "temps", "t'appellerai", "ce", "soir", "d'accord", "froid", "prends", "mon", "pull", "sortirons", "réussiras", "travailles", "vient", "viens", "content", "faim", "mange", "sandwich", "argent", "d'argent", "irai", "étudies", "venez", "ira", "visiterons", "musée", "mangera", "tôt", "neige", "ferons", "ski", "bonne", "note", "très", "êtes", "fatigués", "pourrez", "reposer", "arrives", "prendra", "petit-déjeuner", "ensemble", "gâteau", "ferai", "parc", "viendras", "venir", "mangeras", "manges", "on"] }
};

E["a2-cause"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Exprimer la cause : parce que, car, comme, à cause de",
  objetivo: {
    que: "Vas a explicar el porqué con parce que, car, comme, à cause de y grâce à.",
    corto: "Comme il pleuvait…",
    podras: ["Usar parce que (respuesta) y car (escrito) + frase.", "Poner comme al principio de la frase.", "Usar à cause de (negativo) y grâce à (positivo) + nombre."],
    iconos: ["ic2/bombilla", "m2d/pensativo", "ic2/engranaje"],
    previos: ["Las interrogativas: pourquoi / parce que (A1, lección 57)."],
    capacidad: "Ahora puedes justificar lo que haces y lo que pasa."
  },
  requiere: R("it-mots", "pi-decor", "pi-fait"), recupera: ["it-mots"],
  conceptos: {
    "ca3-frase": { n: "parce que, car, comme + frase", b: "voc" },
    "ca3-nom": { n: "à cause de / grâce à + nombre", b: "voc" }
  },
  video: {
    titulo: "La causa", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/bombilla", grande: "parce que · grâce à", seg: [
        { es: "Hola. Para explicar por qué, hay varias palabras." } ] },
      { v: "dos",
        a: { tag: "causa negativa", fr: "à cause de la pluie", es: "por culpa de" },
        b: { tag: "causa positiva", fr: "grâce à ton aide", es: "gracias a" },
        seg: [ { es: "Si es algo malo:", p: 1 }, { fr: "à cause de la pluie", p: 1 }, { es: "Si es algo bueno:", p: 2 }, { fr: "grâce à ton aide", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«El vuelo está retrasado por la nieve.»", o: ["Le vol est retardé à cause de la neige.", "Le vol est retardé grâce à la neige."], a: 0,
        bien: "¡Sí! Algo malo: à cause de.", mal: "Grâce à es para algo bueno.",
        seg: [ { es: "Pausa. Por la nieve." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["parce que", "car", "comme", "puisque", "à cause de", "grâce à"], seg: [
        { es: "Comme siempre va al principio.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Excusas", img: "bg-universidad", yo: "camila",
    escena: "Camila llega tarde a clase y se explica.",
    pj: PJ,
    lineas: [
      ["sofia", "Pourquoi vous êtes en retard ?", "¿Por qué llega tarde?"],
      ["camila", "Je suis en retard parce que le bus n'est pas passé, à cause de la grève.", "Llego tarde porque el bus no pasó, por culpa de la huelga."],
      ["camila", "Comme il pleuvait, je ne suis pas venue à vélo.", "Como llovía, no vine en bicicleta."],
      ["sofia", "D'accord. Et bravo pour l'examen ! — Merci, j'ai réussi grâce à vous.", "De acuerdo. ¡Y felicitaciones por el examen! — Gracias, aprobé gracias a usted."]
    ],
    fijate: "Fíjate: parce que, à cause de la grève, comme il pleuvait, grâce à vous."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "Expresar la causa",
      idea: "+ frase: parce que (responde a pourquoi), car (más escrito), comme (al principio de la frase), puisque (ya que). + nombre: à cause de (negativo), grâce à (positivo).",
      intro: "Toca cada tarjeta.",
      palabras: [
        { fr: "parce que", es: "porque", ej: ["Je suis en retard parce que le bus n'est pas passé.", "Llego tarde porque el bus no pasó."] },
        { fr: "car", es: "pues, ya que (escrito)", ej: ["Il est absent, car il est malade.", "Está ausente, pues está enfermo."] },
        { fr: "comme", es: "como (al principio)", ej: ["Comme j'étais fatigué, je me suis couché tôt.", "Como estaba cansado, me acosté temprano."] },
        { fr: "puisque", es: "ya que" },
        { fr: "à cause de", es: "por culpa de", ej: ["Le match est annulé à cause de la pluie.", "El partido se canceló por la lluvia."] },
        { fr: "grâce à", es: "gracias a", ej: ["J'ai réussi grâce à toi.", "Aprobé gracias a ti."] },
        { fr: "en raison de", es: "debido a (formal)" },
        { fr: "pour cause de", es: "por motivo de" },
        { fr: "la grève", es: "la huelga" },
        { fr: "le GPS", es: "el GPS" }
      ],
      clave: "grâce au GPS (à + le = au)." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["À cause de ton aide, j'ai réussi.", "Grâce à ton aide, j'ai réussi.", "Positivo: grâce à."], ["Le vol est retardé grâce à la neige.", "Le vol est retardé à cause de la neige.", "Negativo: à cause de."], ["Je reste, comme je suis malade.", "Comme je suis malade, je reste.", "comme al principio."]] }
  ],
  ejemplos: [
    { sit: "«Aprobé gracias a mi profesor.»", resp: "J'ai réussi grâce à mon professeur.", pasos: ["Positivo → grâce à."], porque: "Causa buena." },
    { sit: "«Como hacía frío, tomé mi abrigo.»", resp: "Comme il faisait froid, j'ai pris mon manteau.", pasos: ["comme al principio."], porque: "Causa." },
    { sit: "«No vengo porque trabajo.»", resp: "Je ne viens pas parce que je travaille.", pasos: ["parce que + frase."], porque: "Respuesta." }
  ],
  comprueba: [
    { q: "Grâce à se usa para una causa…", o: ["positiva", "negativa"], a: 0, b: "voc", porque: "Gracias a." },
    { q: "Comme (causa) va…", o: ["al principio de la frase", "al final"], a: 0, b: "voc", porque: "Posición." },
    { q: "Después de à cause de va…", o: ["un nombre", "una frase con verbo"], a: 0, b: "voc", porque: "à cause de la pluie." }
  ],
  practica: [
    { fase: "guiada", c: ["ca3-nom"], k: "choice", ask: "«Aprobé gracias a mi profesor.»", q: "«J'ai réussi ___ mon professeur.»", o: ["grâce à", "à cause de", "parce que"], a: 0, pista: "Positivo.", why: "<b>grâce à</b>." },
    { fase: "guiada", c: ["ca3-frase"], k: "choice", ask: "«Como hacía frío, tomé mi abrigo.»", q: "«___ il faisait froid, j'ai pris mon manteau.»", o: ["Comme", "Car", "Parce que"], a: 0, pista: "Al principio.", why: "<b>Comme</b>." },
    { fase: "guiada", c: ["ca3-frase", "ca3-nom"], k: "sort", ask: "¿Va con un nombre o con una frase?", q: "Clasifica.", cats: ["+ nombre", "+ frase"], items: [["à cause de", 0], ["grâce à", 0], ["en raison de", 0], ["pour cause de", 0], ["parce que", 1], ["car", 1], ["comme", 1], ["puisque", 1]], pista: "de / à + nombre.", why: "Construcción." },
    { fase: "indep", c: ["ca3-frase"], k: "fill", ask: "Escribe «porque».", q: "Je ne viens pas ___ je travaille.", acc: ["parce que"], why: "<b>parce que</b>." },
    { fase: "indep", c: ["ca3-nom"], k: "fill", ask: "Escribe à + le.", q: "Nous sommes arrivés à l'heure grâce ___ GPS.", acc: ["au"], why: "<b>au</b>." },
    { fase: "indep", c: ["ca3-nom"], k: "spot", ask: "Encuentra el error.", s: "Le vol est retardé [grâce] à la neige .", fix: "à cause", why: "<b>à cause de</b>." },
    { fase: "aplica", c: ["ca3-frase", "ca3-nom"], k: "match", ask: "Une cada conector con su uso.", q: "Conector → uso", pairs: [["parce que", "respuesta a pourquoi"], ["car", "explicación escrita"], ["comme", "causa al principio"], ["grâce à", "causa positiva"]], why: "Conectores." },
    { fase: "aplica", c: ["ca3-nom"], k: "choice", ask: "«El partido se canceló por la lluvia.»", q: "«Le match est annulé ___ la pluie.»", o: ["à cause de", "grâce à", "parce que"], a: 0, why: "<b>à cause de</b>." },
    { fase: "dominio", c: ["ca3-frase"], k: "choice", es: true, say: "Comme il pleuvait, nous sommes restés à la maison.", ask: "Escucha. ¿Por qué se quedaron?", q: "Elige.", o: ["Porque llovía", "Porque hacía calor", "Porque estaban cansados"], a: 0, why: "<b>Comme il pleuvait</b>." },
    { fase: "dominio", c: ["ca3-frase"], k: "order", ask: "Ordena: «Como llovía, nos quedamos en casa».", tokens: ["Comme", "il pleuvait,", "nous sommes restés", "à la maison."], why: "<b>Comme il pleuvait, nous sommes restés à la maison.</b>" },
    { fase: "dominio", c: ["ca3-frase", "ca3-nom"], k: "listen", say: "J'ai réussi grâce à toi.", acc: ["J'ai réussi grâce à toi."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>J'ai réussi grâce à toi.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia"], previo: ["pourquoi", "êtes", "retard", "bus", "passé", "venue", "vélo", "pleuvait", "d'accord", "bravo", "l'examen", "examen", "merci", "réussi", "vous", "toi", "absent", "malade", "fatigué", "couché", "tôt", "match", "annulé", "pluie", "mon", "professeur", "faisait", "froid", "pris", "manteau", "viens", "travaille", "arrivés", "l'heure", "heure", "vol", "retardé", "neige", "restés", "maison", "aide", "ton"] }
};

E["a2-consequence"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Exprimer la conséquence : donc, alors, c'est pourquoi",
  objetivo: {
    que: "Vas a expresar la consecuencia con donc, alors, c'est pourquoi y, en familia, du coup.",
    corto: "J'ai raté le bus, donc…",
    podras: ["Usar donc (así que) y alors (entonces).", "Usar c'est pourquoi (escrito) y du coup (oral).", "No mezclar causa y consecuencia en la misma frase."],
    iconos: ["ic2/engranaje", "ic2/bombilla", "m2d/pensativo"],
    previos: ["La causa (lección 62)."],
    capacidad: "Ahora puedes encadenar causas y consecuencias."
  },
  requiere: R("ca3-frase", "ca3-nom"), recupera: ["ca3-frase"],
  conceptos: {
    "cs2-mots": { n: "donc, alors, c'est pourquoi, du coup", b: "voc" },
    "cs2-vs": { n: "causa (parce que…) ≠ consecuencia (donc…)", b: "voc" }
  },
  video: {
    titulo: "La consecuencia", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/engranaje", grande: "donc…", seg: [
        { es: "Hola. La causa explica; la consecuencia dice qué pasó después." } ] },
      { v: "frase", filas: [
          { nota: "así que", p: 1, partes: [["Il pleut, donc je prends mon parapluie.", "-", 1]] },
          { nota: "entonces (oral)", p: 2, partes: [["J'avais faim, alors j'ai mangé.", "-", 2]] },
          { nota: "por eso (escrito)", p: 3, partes: [["Il est malade, c'est pourquoi il est absent.", "-", 3]] } ], seg: [
        { es: "Llueve, así que llevo el paraguas,", p: 1 }, { es: "tenía hambre, entonces comí,", p: 2 }, { es: "está enfermo, por eso no vino.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Estaba enfermo, así que se quedó en cama.»", o: ["Il était malade, donc il est resté au lit.", "Il était malade, car il est resté au lit."], a: 0,
        bien: "¡Sí! Consecuencia: donc.", mal: "Car es causa; aquí es consecuencia: donc.",
        seg: [ { es: "Pausa. Así que." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["donc", "alors", "c'est pourquoi", "du coup"], seg: [
        { es: "Du coup: muy oral, solo con amigos.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Un mal día", img: "bg-cafe", yo: "camila",
    escena: "Camila cuenta su mañana.",
    pj: PJ,
    lineas: [
      ["camila", "J'ai raté le bus, donc je suis arrivée en retard.", "Perdí el bus, así que llegué tarde."],
      ["hugo", "Et le musée ? — Le musée était fermé, du coup on est allés au parc.", "¿Y el museo? — El museo estaba cerrado, así que fuimos al parque."],
      ["camila", "J'avais faim, alors j'ai mangé une crêpe.", "Tenía hambre, entonces me comí una crepe."],
      ["hugo", "Les places sont limitées, c'est pourquoi il faut réserver le concert.", "Las plazas son limitadas; por eso hay que reservar el concierto."]
    ],
    fijate: "Fíjate: donc, du coup, alors, c'est pourquoi."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "Expresar la consecuencia",
      idea: "donc (así que, por lo tanto), alors (entonces, oral), c'est pourquoi (por eso, escrito), du coup (así que, muy familiar). No se combinan con parce que en la misma frase.",
      intro: "Toca cada tarjeta.",
      palabras: [
        { fr: "donc", es: "así que, por lo tanto", ej: ["J'ai raté le bus, donc je suis arrivé en retard.", "Perdí el bus, así que llegué tarde."] },
        { fr: "alors", es: "entonces", ej: ["Il faisait beau, alors on est sortis.", "Hacía buen tiempo, entonces salimos."] },
        { fr: "c'est pourquoi", es: "por eso", ej: ["Les places sont limitées, c'est pourquoi il faut réserver.", "Las plazas son limitadas; por eso hay que reservar."] },
        { fr: "du coup", es: "así que (familiar)", ej: ["Le bus n'est pas passé, du coup je suis venu à pied.", "El bus no pasó, así que vine a pie."] },
        { fr: "un parapluie", es: "un paraguas" },
        { fr: "des biscottes", es: "pan tostado (de paquete)" },
        { fr: "limité", es: "limitado" },
        { fr: "Il n'y avait plus de pain.", es: "Ya no había pan." }
      ],
      clave: "Causa: parce que, car, comme. Consecuencia: donc, alors, c'est pourquoi, du coup." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Parce que j'avais faim, donc j'ai mangé.", "J'avais faim, donc j'ai mangé.", "No se combinan."], ["Il était malade, car il est resté au lit.", "Il était malade, donc il est resté au lit.", "Consecuencia: donc."], ["c'est pour quoi", "c'est pourquoi", "Una palabra."]] }
  ],
  ejemplos: [
    { sit: "«Estoy cansado, así que me voy a dormir.»", resp: "Je suis fatigué, donc je vais dormir.", pasos: ["donc."], porque: "Consecuencia." },
    { sit: "«No tenía plata; por eso no salí.»", resp: "Je n'avais pas d'argent, c'est pourquoi je ne suis pas sorti.", pasos: ["c'est pourquoi."], porque: "Escrito." },
    { sit: "«El museo está cerrado, así que vamos al parque.» (oral)", resp: "Le musée est fermé, du coup on va au parc.", pasos: ["du coup."], porque: "Familiar." }
  ],
  comprueba: [
    { q: "«donc» expresa…", o: ["una consecuencia", "una causa"], a: 0, b: "voc", porque: "Así que." },
    { q: "«c'est pourquoi» es más…", o: ["escrito", "familiar"], a: 0, b: "voc", porque: "Registro." },
    { q: "«du coup» es…", o: ["muy oral", "muy formal"], a: 0, b: "voc", porque: "Familiar." }
  ],
  practica: [
    { fase: "guiada", c: ["cs2-mots"], k: "choice", ask: "«Estoy cansado, así que me voy a dormir.»", q: "«Je suis fatigué, ___ je vais dormir.»", o: ["donc", "parce que", "car"], a: 0, pista: "Consecuencia.", why: "<b>donc</b>." },
    { fase: "guiada", c: ["cs2-vs"], k: "sort", ask: "¿Causa o consecuencia?", q: "Clasifica.", cats: ["Causa", "Consecuencia"], items: [["parce que", 0], ["car", 0], ["comme", 0], ["grâce à", 0], ["donc", 1], ["alors", 1], ["c'est pourquoi", 1], ["du coup", 1]], pista: "donc = así que.", why: "Dos grupos." },
    { fase: "guiada", c: ["cs2-mots"], k: "match", ask: "Une cada causa con su consecuencia.", q: "Causa → consecuencia", pairs: [["Il pleut,", "donc je prends un parapluie."], ["J'ai faim,", "alors je mange."], ["Le musée est fermé,", "du coup on va au parc."], ["Il travaille beaucoup,", "c'est pourquoi il réussit."]], pista: "Lógica.", why: "Consecuencias." },
    { fase: "indep", c: ["cs2-mots"], k: "fill", ask: "Escribe «así que».", q: "Il n'y avait plus de pain, ___ j'ai acheté des biscottes.", acc: ["donc"], why: "<b>donc</b>." },
    { fase: "indep", c: ["cs2-mots"], k: "fill", ask: "Completa «por eso».", q: "Je n'avais pas d'argent, c'est ___ je ne suis pas sorti.", acc: ["pourquoi"], why: "<b>pourquoi</b>." },
    { fase: "indep", c: ["cs2-vs"], k: "spot", ask: "Encuentra el error.", s: "Il était malade , [car] il est resté au lit .", fix: "donc", why: "<b>donc</b>." },
    { fase: "aplica", c: ["cs2-mots"], k: "choice", ask: "«por eso» (escrito)", q: "«___»", o: ["c'est pourquoi", "du coup", "parce que"], a: 0, why: "<b>c'est pourquoi</b>." },
    { fase: "aplica", c: ["cs2-mots"], k: "choice", es: true, say: "Le musée était fermé, du coup on est allés au parc.", ask: "Escucha. ¿Qué hicieron?", q: "Elige.", o: ["Fueron al parque porque el museo estaba cerrado.", "Fueron al museo.", "Se quedaron en casa."], a: 0, why: "<b>du coup… au parc</b>." },
    { fase: "dominio", c: ["cs2-vs"], k: "choice", ask: "«Tenía hambre, así que comí.»", q: "«___»", o: ["J'avais faim, donc j'ai mangé.", "Parce que j'avais faim, donc j'ai mangé.", "J'avais faim, car j'ai mangé."], a: 0, why: "Sin mezclar." },
    { fase: "dominio", c: ["cs2-mots"], k: "order", ask: "Ordena: «Perdí el tren, así que llegué tarde».", tokens: ["J'ai raté", "le train,", "donc", "je suis arrivé en retard."], why: "<b>J'ai raté le train, donc je suis arrivé en retard.</b>" },
    { fase: "dominio", c: ["cs2-mots", "cs2-vs"], k: "listen", say: "Il pleut, donc je prends mon parapluie.", acc: ["Il pleut, donc je prends mon parapluie.", "Il pleut donc je prends mon parapluie."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Il pleut, donc je prends mon parapluie.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["raté", "bus", "arrivée", "arrivé", "retard", "musée", "était", "fermé", "allés", "parc", "avais", "faim", "mangé", "crêpe", "places", "limitées", "faut", "réserver", "concert", "pleut", "prends", "mon", "mange", "travaille", "beaucoup", "réussit", "fatigué", "dormir", "vais", "plus", "pain", "acheté", "d'argent", "sorti", "malade", "resté", "lit", "train", "faisait", "beau", "sortis", "venu", "pied", "passé", "va"] }
};

E["a2-negation-avancee"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Ne… plus, ne… rien, ne… personne, ne… jamais",
  objetivo: {
    que: "Vas a negar con ne… plus, ne… jamais, ne… rien y ne… personne, también como sujeto.",
    corto: "Je ne vois rien.",
    podras: ["Usar ne… plus / jamais / rien / personne en lugar de pas.", "Poner rien y personne como sujeto: Personne n'est venu.", "Colocar personne detrás del participio."],
    iconos: ["m2d/pensativo", "ic2/bombilla", "ic2/pregunta"],
    previos: ["La negación en passé composé (lección 19) y déjà / ne… plus (lección 26)."],
    capacidad: "Ahora puedes negar con todos los matices."
  },
  requiere: R("pcn-neg", "de-plus", "de-deja"), recupera: ["pcn-neg", "de-plus"],
  conceptos: {
    "na2-mots": { n: "ne… plus, ne… jamais, ne… rien, ne… personne", b: "gr" },
    "na2-sujet": { n: "Rien n'est… / Personne ne… ; personne tras el participio", b: "gr" }
  },
  video: {
    titulo: "Negaciones", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/pensativo", grande: "Personne n'est venu.", seg: [
        { es: "Hola. Pas tiene compañeros: plus, jamais, rien, personne." } ] },
      { v: "frase", filas: [
          { nota: "nada", p: 1, partes: [["Je n'ai rien compris.", "-", 1]] },
          { nota: "nadie (sujeto)", p: 2, partes: [["Personne ne m'a appelé.", "-", 2]] },
          { nota: "ya no", p: 3, partes: [["Il n'y a plus de lait.", "-", 3]] } ], seg: [
        { es: "No entendí nada,", p: 1 }, { es: "nadie me llamó,", p: 2 }, { es: "ya no hay leche.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«No veo nada.»", o: ["Je ne vois rien.", "Je ne vois pas rien."], a: 0,
        bien: "¡Sí! Rien reemplaza a pas.", mal: "Rien ocupa el lugar de pas.",
        seg: [ { es: "Pausa. Nada." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["ne… plus", "ne… jamais", "ne… rien", "ne… personne", "Rien n'est facile.", "Personne ne sait."], seg: [
        { es: "Nunca pas junto con estas palabras.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Una casa vacía", img: "bg-cafe", yo: "camila",
    escena: "Camila vuelve a casa después de un viaje.",
    pj: PJ,
    lineas: [
      ["camila", "Il n'y a plus de lait et je ne trouve rien à manger !", "¡Ya no hay leche y no encuentro nada para comer!"],
      ["hugo", "Personne ne t'a appelée ?", "¿Nadie te llamó?"],
      ["camila", "Non, personne. Et je n'ai vu personne dans l'immeuble.", "No, nadie. Y no vi a nadie en el edificio."],
      ["hugo", "Moi, je ne fume plus depuis deux ans. Et je n'ai jamais vu la mer !", "Yo ya no fumo desde hace dos años. ¡Y nunca he visto el mar!"]
    ],
    fijate: "Fíjate: n'y a plus, ne trouve rien, personne ne, n'ai vu personne, ne fume plus, n'ai jamais vu."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Las otras negaciones",
      idea: "ne… plus (ya no), ne… jamais (nunca), ne… rien (nada), ne… personne (nadie) ocupan el lugar de pas. Como sujeto: Rien n'est facile. Personne ne parle. En passé composé, personne va detrás del participio: je n'ai vu personne.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Negación"], [
        ["Je ne fume plus.", "Ya no fumo.", "ne… plus"],
        ["Il n'y a plus de lait.", "Ya no hay leche.", "ne… plus"],
        ["Je ne mange jamais de viande.", "Nunca como carne.", "ne… jamais"],
        ["Je n'ai jamais vu la mer.", "Nunca he visto el mar.", "ne… jamais"],
        ["Je ne vois rien.", "No veo nada.", "ne… rien"],
        ["Je n'ai rien compris.", "No entendí nada.", "ne… rien"],
        ["Je ne connais personne.", "No conozco a nadie.", "ne… personne"],
        ["Je n'ai vu personne.", "No vi a nadie.", "personne tras el participio"],
        ["Personne ne m'a appelé.", "Nadie me llamó.", "personne sujeto"],
        ["Personne n'est venu.", "Nadie vino.", "personne sujeto"],
        ["Rien n'est facile.", "Nada es fácil.", "rien sujeto"]
      ]],
      ej: [["Je n'ai rien acheté.", "No compré nada."], ["Il ne dit rien.", "No dice nada."], ["Personne ne sait.", "Nadie sabe."], ["Il n'aime personne.", "No quiere a nadie."], ["Il n'y a plus de place dans le bus.", "Ya no hay cupo en el bus."], ["dans cette ville", "en esta ciudad"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je ne vois pas rien.", "Je ne vois rien.", "rien reemplaza a pas."], ["Je ne fume jamais depuis deux ans.", "Je ne fume plus depuis deux ans.", "Ya no: plus."], ["Personne n'a pas appelé.", "Personne n'a appelé.", "Sin pas."], ["Je n'ai personne vu.", "Je n'ai vu personne.", "personne detrás."]] }
  ],
  ejemplos: [
    { sit: "«No veo nada.»", resp: "Je ne vois rien.", pasos: ["ne + vois + rien."], porque: "Nada." },
    { sit: "«Nadie vino.»", resp: "Personne n'est venu.", pasos: ["Personne + ne + verbo."], porque: "Sujeto." },
    { sit: "«No vi a nadie.»", resp: "Je n'ai vu personne.", pasos: ["personne tras el participio."], porque: "Posición." }
  ],
  comprueba: [
    { q: "Con rien, la palabra pas…", o: ["desaparece", "se queda"], a: 0, b: "gr", porque: "rien reemplaza a pas." },
    { q: "«Personne n'est venu» significa…", o: ["Nadie vino.", "Una persona no vino."], a: 0, b: "gr", porque: "Sujeto." },
    { q: "En passé composé, personne va…", o: ["detrás del participio", "antes del participio"], a: 0, b: "gr", porque: "je n'ai vu personne." }
  ],
  practica: [
    { fase: "guiada", c: ["na2-mots"], k: "choice", ask: "«No veo nada.»", q: "«___»", o: ["Je ne vois rien.", "Je ne vois pas rien.", "Je vois rien pas."], a: 0, pista: "Sin pas.", why: "<b>Je ne vois rien.</b>" },
    { fase: "guiada", c: ["na2-mots"], k: "match", ask: "Une cada negación.", q: "Francés → español", pairs: [["ne… plus", "ya no"], ["ne… jamais", "nunca"], ["ne… rien", "nada"], ["ne… personne", "nadie"]], pista: "rien = nada.", why: "Negaciones." },
    { fase: "guiada", c: ["na2-mots", "na2-sujet"], k: "sort", ask: "¿Con cosas o con personas?", q: "Clasifica.", cats: ["Con cosas", "Con personas"], items: [["ne… rien", 0], ["Rien n'est facile.", 0], ["Je n'ai rien acheté.", 0], ["Il ne dit rien.", 0], ["ne… personne", 1], ["Personne ne sait.", 1], ["Je n'ai vu personne.", 1], ["Il n'aime personne.", 1]], pista: "personne = nadie.", why: "Cosas o personas." },
    { fase: "indep", c: ["na2-mots"], k: "fill", ask: "Escribe «ya no».", q: "Il n'y a ___ de place dans le bus.", acc: ["plus"], why: "<b>plus</b>." },
    { fase: "indep", c: ["na2-mots"], k: "fill", ask: "Escribe «nadie».", q: "Je ne connais ___ dans cette ville.", acc: ["personne"], why: "<b>personne</b>." },
    { fase: "indep", c: ["na2-mots"], k: "spot", ask: "Encuentra el error.", s: "Je ne fume [jamais] depuis deux ans .", fix: "plus", why: "<b>plus</b>." },
    { fase: "aplica", c: ["na2-sujet"], k: "choice", ask: "«Nadie vino.»", q: "«___»", o: ["Personne n'est venu.", "Personne n'est pas venu.", "Ne personne est venu."], a: 0, why: "<b>Personne n'est venu.</b>" },
    { fase: "aplica", c: ["na2-sujet"], k: "choice", ask: "«No vi a nadie.»", q: "«___»", o: ["Je n'ai vu personne.", "Je n'ai personne vu.", "Je n'ai pas vu personne."], a: 0, why: "<b>Je n'ai vu personne.</b>" },
    { fase: "dominio", c: ["na2-mots"], k: "choice", es: true, say: "Je n'ai rien compris.", ask: "Escucha. ¿Qué entendió?", q: "Elige.", o: ["Nada", "Todo", "Un poco"], a: 0, why: "<b>rien</b>." },
    { fase: "dominio", c: ["na2-mots"], k: "order", ask: "Ordena: «Nunca he visto el mar».", tokens: ["Je", "n'ai jamais", "vu", "la mer."], why: "<b>Je n'ai jamais vu la mer.</b>" },
    { fase: "dominio", c: ["na2-mots", "na2-sujet"], k: "listen", say: "Personne ne m'a appelé.", acc: ["Personne ne m'a appelé.", "Personne ne m'a appelée."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Personne ne m'a appelé.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["lait", "trouve", "manger", "t'a", "appelée", "appelé", "vu", "l'immeuble", "immeuble", "fume", "depuis", "deux", "ans", "mer", "mange", "viande", "vois", "compris", "connais", "venu", "facile", "acheté", "dit", "sait", "aime", "place", "bus", "cette", "ville", "m'a", "est", "ai", "n'ai", "y", "a", "pas"] }
};

E["a2-projets"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Parler de ses projets : j'ai l'intention de, je compte",
  objetivo: {
    que: "Vas a hablar de tus proyectos: j'ai l'intention de, je compte, j'aimerais, mon rêve, c'est de…",
    corto: "Je compte partir en France.",
    podras: ["Usar j'ai l'intention de / j'envisage de + infinitivo.", "Usar je compte + infinitivo (sin de).", "Decir j'aimerais…, mon rêve, c'est de…, dans cinq ans, je serai…"],
    iconos: ["ic2/estrella", "ic2/birrete", "m2d/celebrar"],
    previos: ["El futuro (lecciones 4 y 60) y el condicional (lección 48)."],
    capacidad: "Ahora puedes presentar tus planes en una entrevista o en un examen DELF."
  },
  requiere: R("fi-racines", "cc-forme", "fu-proche"), recupera: ["fi-racines", "cc-forme"],
  conceptos: {
    "pj2-intention": { n: "j'ai l'intention de, j'envisage de, je rêve de + infinitivo", b: "voc" },
    "pj2-compte": { n: "je compte + infinitivo; j'aimerais; mon rêve, c'est de…", b: "voc" }
  },
  video: {
    titulo: "Mis proyectos", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/estrella", grande: "Mon rêve, c'est de…", seg: [
        { es: "Hola. Tus planes y tus sueños, en francés." } ] },
      { v: "dos",
        a: { tag: "con de", fr: "J'ai l'intention de faire un master.", es: "tengo la intención de" },
        b: { tag: "sin de", fr: "Je compte partir en France.", es: "pienso" },
        seg: [ { es: "Con de:", p: 1 }, { fr: "J'ai l'intention de faire un master.", p: 1 }, { es: "Sin de:", p: 2 }, { fr: "Je compte partir en France.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Pienso viajar.»", o: ["Je compte voyager.", "Je compte de voyager."], a: 0,
        bien: "¡Sí! Compter sin de.", mal: "Compter + infinitivo, sin de.",
        seg: [ { es: "Pausa. Pienso viajar." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["j'ai l'intention de", "je compte", "j'aimerais", "j'envisage de", "je rêve de", "dans cinq ans"], seg: [
        { es: "Y para el futuro lejano: dans cinq ans, je serai…", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El futuro de Camila", img: "bg-universidad", yo: "camila",
    escena: "Camila habla de sus proyectos con la profesora.",
    pj: PJ,
    lineas: [
      ["sofia", "Quels sont vos projets, Camila ?", "¿Cuáles son sus proyectos, Camila?"],
      ["camila", "J'ai l'intention de passer le DELF B2. Ensuite, je compte faire un master en France.", "Tengo la intención de presentar el DELF B2. Luego pienso hacer una maestría en Francia."],
      ["sofia", "Et après ?", "¿Y después?"],
      ["camila", "J'aimerais travailler comme traductrice. Mon rêve, c'est de vivre à Montréal !", "Me gustaría trabajar como traductora. ¡Mi sueño es vivir en Montreal!"]
    ],
    fijate: "Fíjate: j'ai l'intention de, je compte faire, j'aimerais, mon rêve, c'est de."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "Proyectos",
      idea: "j'ai l'intention de + infinitivo; j'envisage de; je rêve de. je compte + infinitivo (sin de). j'aimerais / je voudrais + infinitivo. Mon rêve, c'est de + infinitivo. Dans cinq ans, je serai…",
      intro: "Toca cada tarjeta.",
      palabras: [
        { fr: "J'ai l'intention de…", es: "Tengo la intención de…", ej: ["J'ai l'intention d'apprendre une troisième langue.", "Tengo la intención de aprender una tercera lengua."] },
        { fr: "Je compte…", es: "Pienso… / Planeo…", ej: ["Je compte travailler comme traductrice.", "Pienso trabajar como traductora."] },
        { fr: "J'envisage de…", es: "Contemplo…" },
        { fr: "Je rêve de…", es: "Sueño con…" },
        { fr: "J'aimerais…", es: "Me gustaría…", ej: ["J'aimerais vivre en France.", "Me gustaría vivir en Francia."] },
        { fr: "Mon rêve, c'est de…", es: "Mi sueño es…", ej: ["Mon rêve, c'est de vivre à Montréal.", "Mi sueño es vivir en Montreal."] },
        { fr: "faire un master", es: "hacer una maestría" },
        { fr: "passer le DELF", es: "presentar el DELF" },
        { fr: "étudier à l'étranger", es: "estudiar en el extranjero" },
        { fr: "trouver un emploi", es: "encontrar un empleo" },
        { fr: "créer une entreprise", es: "crear una empresa" },
        { fr: "devenir traducteur", es: "llegar a ser traductor" }
      ],
      clave: "je compte + infinitivo, sin de." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je compte de partir.", "Je compte partir.", "Sin de."], ["J'ai l'intention à faire un master.", "J'ai l'intention de faire un master.", "de."], ["Mon rêve, c'est devenir professeur.", "Mon rêve, c'est de devenir professeur.", "c'est de."]] }
  ],
  ejemplos: [
    { sit: "«Pienso viajar.»", resp: "Je compte voyager.", pasos: ["compter + infinitivo."], porque: "Sin de." },
    { sit: "«Tengo la intención de estudiar.»", resp: "J'ai l'intention d'étudier.", pasos: ["l'intention de + vocal → d'."], porque: "Con de." },
    { sit: "«Mi sueño es llegar a ser profesor.»", resp: "Mon rêve, c'est de devenir professeur.", pasos: ["c'est de + infinitivo."], porque: "Sueño." }
  ],
  comprueba: [
    { q: "«Je compte partir» significa…", o: ["Pienso irme.", "Cuento para irme."], a: 0, b: "voc", porque: "Proyecto." },
    { q: "Compter + infinitivo lleva de…", o: ["no", "sí"], a: 0, b: "voc", porque: "Je compte partir." },
    { q: "«passer le DELF» significa…", o: ["presentar el DELF", "aprobar sin examen"], a: 0, b: "voc", porque: "Examen." }
  ],
  practica: [
    { fase: "guiada", c: ["pj2-compte"], k: "choice", ask: "«Pienso viajar.»", q: "«Je compte ___ .»", o: ["voyager", "de voyager", "à voyager"], a: 0, pista: "Sin de.", why: "<b>voyager</b>." },
    { fase: "guiada", c: ["pj2-intention"], k: "match", ask: "Une cada expresión.", q: "Francés → español", pairs: [["j'ai l'intention de", "tengo la intención de"], ["je compte", "pienso"], ["j'envisage de", "contemplo"], ["je rêve de", "sueño con"]], pista: "rêve = sueño.", why: "Proyectos." },
    { fase: "guiada", c: ["pj2-intention"], k: "sort", ask: "¿Estudios o trabajo?", q: "Clasifica.", cats: ["Estudios", "Trabajo"], items: [["faire un master", 0], ["étudier à l'étranger", 0], ["passer le DELF", 0], ["apprendre le portugais", 0], ["trouver un emploi", 1], ["devenir traducteur", 1], ["faire un stage", 1], ["créer une entreprise", 1]], pista: "emploi = empleo.", why: "Planes." },
    { fase: "indep", c: ["pj2-compte"], k: "fill", ask: "Escribe «me gustaría».", q: "J'___ bien vivre à l'étranger.", acc: ["aimerais"], why: "<b>aimerais</b>." },
    { fase: "indep", c: ["pj2-compte"], k: "fill", ask: "Escribe être en futuro (je).", q: "Dans cinq ans, je ___ professeure de français.", acc: ["serai"], why: "<b>serai</b>." },
    { fase: "indep", c: ["pj2-intention"], k: "spot", ask: "Encuentra el error.", s: "J'ai l'intention [à] faire un master en France .", fix: "de", why: "<b>de</b>." },
    { fase: "aplica", c: ["pj2-intention"], k: "choice", ask: "«Tengo la intención de estudiar.»", q: "«___»", o: ["J'ai l'intention d'étudier.", "J'ai l'intention étudier.", "Je compte d'étudier."], a: 0, why: "<b>l'intention d'étudier</b>." },
    { fase: "aplica", c: ["pj2-compte"], k: "choice", es: true, say: "Mon rêve, c'est de vivre à Montréal.", ask: "Escucha. ¿Cuál es su sueño?", q: "Elige.", o: ["Vivir en Montreal", "Viajar a Montreal", "Estudiar en Montreal"], a: 0, why: "<b>vivre à Montréal</b>." },
    { fase: "dominio", c: ["pj2-compte"], k: "choice", ask: "«Mi sueño es llegar a ser profesor.»", q: "«___»", o: ["Mon rêve, c'est de devenir professeur.", "Mon rêve, c'est devenir professeur.", "Mon rêve est à devenir professeur."], a: 0, why: "<b>c'est de</b>." },
    { fase: "dominio", c: ["pj2-intention", "pj2-compte"], k: "order", ask: "Ordena: «Me gustaría vivir en Francia».", tokens: ["J'aimerais", "vivre", "en France."], why: "<b>J'aimerais vivre en France.</b>" },
    { fase: "dominio", c: ["pj2-intention", "pj2-compte"], k: "listen", say: "Je compte travailler comme traductrice.", acc: ["Je compte travailler comme traductrice."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je compte travailler comme traductrice.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "France", "Montréal", "DELF", "B2"], previo: ["quels", "sont", "vos", "projets", "ensuite", "après", "travailler", "comme", "traductrice", "vivre", "apprendre", "troisième", "langue", "voyager", "étudier", "d'étudier", "devenir", "professeur", "professeure", "bien", "l'étranger", "dans", "cinq", "ans", "français", "portugais", "stage", "partir"] }
};

E["a2-quantite"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Trop, assez, beaucoup, peu : la quantité",
  objetivo: {
    que: "Vas a expresar cantidad con beaucoup, peu, assez, trop: con nombre (de), con verbo y con adjetivo.",
    corto: "Trop de sucre, c'est trop cher.",
    podras: ["Usar beaucoup de / peu de / assez de / trop de + nombre.", "Usar estos adverbios con un verbo (il travaille beaucoup).", "Distinguir peu de (poco) y un peu de (un poco)."],
    iconos: ["ic2/moneda", "ic2/bombilla", "ic2/cofre"],
    previos: ["Las cantidades (A1, lección 38) y los partitivos (lección 6)."],
    capacidad: "Ahora puedes decir si algo es mucho, poco, bastante o demasiado."
  },
  requiere: R("pt3-choix", "cq-adv", "cq-de"), recupera: ["cq-adv"],
  conceptos: {
    "qt-nom": { n: "beaucoup de / peu de / assez de / trop de + nombre", b: "gr" },
    "qt-verbe": { n: "con verbo (travaille beaucoup) y adjetivo (trop cher); peu ≠ un peu", b: "gr" }
  },
  video: {
    titulo: "La cantidad", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/moneda", grande: "trop de devoirs", seg: [
        { es: "Hola. Mucho, poco, bastante, demasiado." } ] },
      { v: "frase", filas: [
          { nota: "+ nombre", p: 1, partes: [["J'ai trop de devoirs.", "-", 1]] },
          { nota: "+ verbo", p: 2, partes: [["Il travaille beaucoup.", "-", 2]] },
          { nota: "+ adjetivo", p: 3, partes: [["C'est trop cher.", "-", 3]] } ], seg: [
        { es: "Con un nombre, de;", p: 1 }, { es: "con un verbo, detrás;", p: 2 }, { es: "con un adjetivo, delante.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Tengo muchos amigos.»", o: ["J'ai beaucoup d'amis.", "J'ai beaucoup des amis."], a: 0,
        bien: "¡Sí! Solo d'.", mal: "Tras beaucoup, solo de / d'.",
        seg: [ { es: "Pausa. Muchos amigos." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["beaucoup de", "peu de", "un peu de", "assez de", "trop de", "plein de"], seg: [
        { es: "Peu de es poco; un peu de, un poco.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La semana", img: "bg-universidad", yo: "camila",
    escena: "Camila se queja de su semana.",
    pj: PJ,
    lineas: [
      ["camila", "J'ai trop de devoirs cette semaine et pas assez de temps !", "¡Tengo demasiadas tareas esta semana y no tengo suficiente tiempo!"],
      ["hugo", "Tu travailles trop. Il faut dormir un peu.", "Trabajas demasiado. Hay que dormir un poco."],
      ["camila", "Et il n'y a pas assez de chaises à la bibliothèque. Il y a beaucoup d'étudiants !", "Y no hay suficientes sillas en la biblioteca. ¡Hay muchos estudiantes!"],
      ["hugo", "Moi, je parle peu, mais j'écoute beaucoup.", "Yo hablo poco, pero escucho mucho."]
    ],
    fijate: "Fíjate: trop de devoirs, pas assez de temps, tu travailles trop, beaucoup d'étudiants, je parle peu."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Adverbios de cantidad",
      idea: "+ nombre: beaucoup de, peu de, assez de, trop de (sin artículo; d' ante vocal). + verbo: il travaille beaucoup, tu manges trop. + adjetivo: très / trop / assez (c'est trop cher). peu de (poco) ≠ un peu de (un poco).",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Uso"], [
        ["J'ai trop de devoirs cette semaine.", "Tengo demasiadas tareas esta semana.", "+ nombre"],
        ["J'ai beaucoup d'amis.", "Tengo muchos amigos.", "+ nombre (d')"],
        ["Il n'y a pas assez de chaises.", "No hay suficientes sillas.", "+ nombre"],
        ["Il a peu d'amis.", "Tiene pocos amigos.", "+ nombre"],
        ["Je n'ai pas assez d'argent.", "No tengo suficiente plata.", "+ nombre"],
        ["Il travaille beaucoup.", "Trabaja mucho.", "+ verbo"],
        ["Tu manges trop.", "Comes demasiado.", "+ verbo"],
        ["Elle parle peu mais elle écoute beaucoup.", "Habla poco pero escucha mucho.", "+ verbo"],
        ["C'est trop cher.", "Es demasiado caro.", "+ adjetivo"],
        ["C'est assez grand.", "Es bastante grande.", "+ adjetivo"],
        ["un peu de sucre", "un poco de azúcar", "un peu de"]
      ]],
      ej: [["énormément de", "muchísimo"], ["plein de", "un montón de (familiar)"], ["pas assez de", "no lo suficiente"], ["très peu de", "muy poco"], ["Tu mets trop de sel !", "¡Pones demasiada sal!"], ["en été", "en verano"], ["des touristes", "turistas"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["beaucoup des amis", "beaucoup d'amis", "Solo d'."], ["Il y a beaucoup des touristes.", "Il y a beaucoup de touristes.", "Solo de."], ["Il a un peu d'amis (= pocos).", "Il a peu d'amis.", "Pocos: peu de."]] }
  ],
  ejemplos: [
    { sit: "«Es demasiado caro.»", resp: "C'est trop cher.", pasos: ["trop + adjetivo."], porque: "Exceso." },
    { sit: "«No tengo suficiente tiempo.»", resp: "Je n'ai pas assez de temps.", pasos: ["assez de + nombre."], porque: "Insuficiente." },
    { sit: "«Tiene pocos amigos.»", resp: "Il a peu d'amis.", pasos: ["peu d' + vocal."], porque: "Poco." }
  ],
  comprueba: [
    { q: "Tras beaucoup + nombre va…", o: ["de / d'", "des"], a: 0, b: "gr", porque: "Sin artículo." },
    { q: "«peu de» significa…", o: ["poco", "un poco"], a: 0, b: "gr", porque: "peu ≠ un peu." },
    { q: "«assez» significa…", o: ["bastante, suficiente", "asado"], a: 0, b: "gr", porque: "Cantidad." }
  ],
  practica: [
    { fase: "guiada", c: ["qt-nom"], k: "choice", ask: "«Tengo muchos amigos.»", q: "«J'ai ___ amis.»", o: ["beaucoup d'", "beaucoup des", "beaucoup"], a: 0, pista: "Solo d'.", why: "<b>beaucoup d'</b>." },
    { fase: "guiada", c: ["qt-verbe"], k: "match", ask: "Une cada adverbio.", q: "Francés → español", pairs: [["trop", "demasiado"], ["assez", "bastante"], ["peu", "poco"], ["beaucoup", "mucho"]], pista: "trop = demasiado.", why: "Cantidades." },
    { fase: "guiada", c: ["qt-nom"], k: "sort", ask: "¿Mucho o poco?", q: "Clasifica.", cats: ["Mucho", "Poco"], items: [["beaucoup de", 0], ["trop de", 0], ["énormément de", 0], ["plein de", 0], ["peu de", 1], ["pas assez de", 1], ["un peu de", 1], ["très peu de", 1]], pista: "peu = poco.", why: "Escala." },
    { fase: "indep", c: ["qt-nom"], k: "fill", ask: "Completa.", q: "Il n'y a pas assez ___ temps.", acc: ["de"], why: "<b>de</b>." },
    { fase: "indep", c: ["qt-verbe"], k: "fill", ask: "Escribe «demasiado».", q: "Tu mets ___ de sel !", acc: ["trop"], why: "<b>trop</b>." },
    { fase: "indep", c: ["qt-nom"], k: "spot", ask: "Encuentra el error.", s: "Il y a beaucoup [des] touristes en été .", fix: "de", why: "<b>de</b>." },
    { fase: "aplica", c: ["qt-verbe"], k: "choice", ask: "«Es demasiado caro.»", q: "«___»", o: ["C'est trop cher.", "C'est trop de cher.", "C'est beaucoup cher."], a: 0, why: "<b>trop cher</b>." },
    { fase: "aplica", c: ["qt-verbe"], k: "choice", es: true, say: "Elle parle peu mais elle écoute beaucoup.", ask: "Escucha. ¿Cómo es ella?", q: "Elige.", o: ["Habla poco y escucha mucho.", "Habla mucho y escucha poco.", "No habla nada."], a: 0, why: "<b>peu… beaucoup</b>." },
    { fase: "dominio", c: ["qt-verbe"], k: "choice", ask: "«Tiene pocos amigos.»", q: "«___»", o: ["Il a peu d'amis.", "Il a un peu d'amis.", "Il a peu des amis."], a: 0, why: "<b>peu d'amis</b>." },
    { fase: "dominio", c: ["qt-nom"], k: "order", ask: "Ordena: «No tengo suficiente plata».", tokens: ["Je n'ai pas", "assez", "d'argent."], why: "<b>Je n'ai pas assez d'argent.</b>" },
    { fase: "dominio", c: ["qt-nom", "qt-verbe"], k: "listen", say: "J'ai trop de devoirs cette semaine.", acc: ["J'ai trop de devoirs cette semaine."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>J'ai trop de devoirs cette semaine.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["devoirs", "cette", "semaine", "temps", "travailles", "travaille", "faut", "dormir", "chaises", "bibliothèque", "d'étudiants", "étudiants", "parle", "mais", "écoute", "d'amis", "amis", "d'argent", "argent", "manges", "cher", "grand", "sucre", "mets", "sel", "été", "touristes", "très", "un"] }
};

E["a2-adverbes-maniere"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Bien, mal, vite, lentement : les adverbes de manière",
  objetivo: {
    que: "Vas a decir cómo se hace algo con bien, mal, vite, lentement, fort, ensemble, y su lugar en la frase.",
    corto: "Il parle vite.",
    podras: ["Poner el adverbio detrás del verbo.", "En passé composé, los cortos entre auxiliar y participio: j'ai bien dormi.", "No confundir bon / bien y rapide / vite."],
    iconos: ["m2d/correr", "ic2/bombilla", "ic2/estrella"],
    previos: ["Meilleur o mieux (lección 32) y bon / bien (A1, lección 47)."],
    capacidad: "Ahora puedes describir cómo hace las cosas cada persona."
  },
  requiere: R("mm-meilleur", "mm-mieux", "pca-forma"), recupera: ["ra-bonbien", "mm-mieux"],
  conceptos: {
    "am2-place": { n: "detrás del verbo; j'ai bien dormi", b: "gr" },
    "am2-adj": { n: "bon / bien, rapide / vite, mauvais / mal, lent / lentement", b: "gr" }
  },
  video: {
    titulo: "Cómo se hace", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/correr", grande: "Il parle vite.", seg: [
        { es: "Hola. Los adverbios dicen cómo, y no cambian." } ] },
      { v: "dos",
        a: { tag: "adjetivo (cosa)", fr: "une voiture rapide", es: "rapide" },
        b: { tag: "adverbio (verbo)", fr: "Elle conduit vite.", es: "vite" },
        seg: [ { es: "Para describir una cosa:", p: 1 }, { fr: "une voiture rapide", p: 1 }, { es: "Para describir cómo se hace:", p: 2 }, { fr: "Elle conduit vite.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Mi hermano habla muy rápido.»", o: ["Mon frère parle très vite.", "Mon frère parle très rapide."], a: 0,
        bien: "¡Sí! Con verbo: vite.", mal: "Con un verbo se usa el adverbio vite.",
        seg: [ { es: "Pausa. Habla rápido." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["bien", "mal", "vite", "lentement", "fort", "ensemble"], seg: [
        { es: "En pasado: j'ai bien dormi, j'ai mal mangé.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Pide que hable despacio", img: "bg-universidad", yo: "camila",
    escena: "Camila habla con un compañero francés.",
    pj: PJ,
    lineas: [
      ["camila", "Pardon, tu parles très vite… Parle plus lentement, s'il te plaît.", "Perdón, hablas muy rápido… Habla más despacio, por favor."],
      ["hugo", "Désolé ! J'ai mal dormi cette nuit, je suis un peu nerveux.", "¡Perdón! Dormí mal anoche, estoy un poco nervioso."],
      ["camila", "Mais tu parles très bien français, c'est normal, tu es français !", "Pero hablas muy bien francés, ¡es normal, eres francés!"],
      ["hugo", "Ha ! Nous travaillons bien ensemble. Tu es une bonne étudiante.", "¡Ja! Trabajamos bien juntos. Eres una buena estudiante."]
    ],
    fijate: "Fíjate: parles vite, plus lentement, j'ai mal dormi, très bien, bien ensemble / une bonne étudiante."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Adverbios de modo",
      idea: "Van detrás del verbo conjugado y no cambian: il parle vite, elle chante bien. En passé composé, los cortos van entre auxiliar y participio: j'ai bien dormi. Adjetivo (cosa) ≠ adverbio (verbo): bon / bien, rapide / vite, mauvais / mal, lent / lentement.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Uso"], [
        ["Il parle vite.", "Habla rápido.", "vite"],
        ["Elle chante bien.", "Canta bien.", "bien"],
        ["Elle chante mal.", "Canta mal.", "mal"],
        ["Parle plus lentement, s'il te plaît.", "Habla más despacio, por favor.", "lentement"],
        ["Il parle fort.", "Habla fuerte.", "fort"],
        ["Nous travaillons bien ensemble.", "Trabajamos bien juntos.", "ensemble"],
        ["J'ai bien dormi.", "Dormí bien.", "pc: entre auxiliar y participio"],
        ["J'ai mal dormi cette nuit.", "Dormí mal anoche.", "pc"],
        ["une voiture rapide / elle conduit vite", "un carro rápido / maneja rápido", "rapide ≠ vite"],
        ["un bon professeur / il explique bien", "un buen profesor / explica bien", "bon ≠ bien"]
      ]],
      ej: [["bon", "bueno (adjetivo)"], ["rapide", "rápido (adjetivo)"], ["mauvais", "malo (adjetivo)"], ["lent", "lento (adjetivo)"], ["Il conduit vite.", "Maneja rápido."], ["Tu parles très bien français.", "Hablas muy bien francés."], ["Pouvez-vous parler plus lentement ?", "¿Puede hablar más despacio?"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Il parle rapide.", "Il parle vite.", "Verbo: vite."], ["Mon frère parle très rapide.", "Mon frère parle très vite.", "vite."], ["J'ai dormi bien.", "J'ai bien dormi.", "Entre auxiliar y participio."], ["C'est un bien professeur.", "C'est un bon professeur.", "Nombre: bon."]] }
  ],
  ejemplos: [
    { sit: "«Maneja rápido.»", resp: "Il conduit vite.", pasos: ["vite tras el verbo."], porque: "Adverbio." },
    { sit: "«Dormí bien.»", resp: "J'ai bien dormi.", pasos: ["ai + bien + dormi."], porque: "Posición." },
    { sit: "«Es un buen profesor: explica bien.»", resp: "C'est un bon professeur, il explique bien.", pasos: ["bon + nombre; bien + verbo."], porque: "Contraste." }
  ],
  comprueba: [
    { q: "Con un verbo (habla rápido) se usa…", o: ["vite", "rapide"], a: 0, b: "gr", porque: "Adverbio." },
    { q: "En «J'ai ___ dormi», el adverbio corto va…", o: ["entre auxiliar y participio", "al final"], a: 0, b: "gr", porque: "j'ai bien dormi." },
    { q: "Los adverbios de modo…", o: ["no cambian", "concuerdan con el sujeto"], a: 0, b: "gr", porque: "Invariables." }
  ],
  practica: [
    { fase: "guiada", c: ["am2-adj"], k: "choice", ask: "«Maneja rápido.»", q: "«Il conduit ___ .»", o: ["vite", "rapide", "rapidement de"], a: 0, pista: "Verbo.", why: "<b>vite</b>." },
    { fase: "guiada", c: ["am2-place"], k: "choice", ask: "«Dormí bien.»", q: "«___»", o: ["J'ai bien dormi.", "J'ai dormi bien.", "Je bien ai dormi."], a: 0, pista: "Entre auxiliar y participio.", why: "<b>J'ai bien dormi.</b>" },
    { fase: "guiada", c: ["am2-adj"], k: "sort", ask: "¿Adjetivo o adverbio?", q: "Clasifica.", cats: ["Adjetivo", "Adverbio"], items: [["bon", 0], ["rapide", 0], ["mauvais", 0], ["lent", 0], ["bien", 1], ["vite", 1], ["mal", 1], ["lentement", 1]], pista: "bien, vite: verbo.", why: "Dos clases." },
    { fase: "indep", c: ["am2-adj"], k: "fill", ask: "Escribe «despacio».", q: "Pouvez-vous parler plus ___ ?", acc: ["lentement"], why: "<b>lentement</b>." },
    { fase: "indep", c: ["am2-adj"], k: "fill", ask: "Escribe «buen» (adjetivo).", q: "C'est un ___ professeur, il explique bien.", acc: ["bon"], why: "<b>bon</b>." },
    { fase: "indep", c: ["am2-adj"], k: "spot", ask: "Encuentra el error.", s: "Mon frère parle très [rapide] , je ne comprends rien .", fix: "vite", why: "<b>vite</b>." },
    { fase: "aplica", c: ["am2-adj"], k: "match", ask: "Une cada adverbio.", q: "Francés → español", pairs: [["vite", "rápido"], ["lentement", "despacio"], ["fort", "fuerte"], ["ensemble", "juntos"]], why: "Adverbios." },
    { fase: "aplica", c: ["am2-place"], k: "choice", ask: "«Dormí mal anoche.»", q: "«___ cette nuit.»", o: ["J'ai mal dormi", "J'ai dormi mauvais", "J'ai mauvais dormi"], a: 0, why: "<b>J'ai mal dormi</b>." },
    { fase: "dominio", c: ["am2-adj"], k: "choice", es: true, say: "Parle plus lentement, s'il te plaît.", ask: "Escucha. ¿Qué pide?", q: "Elige.", o: ["Que hable más despacio", "Que hable más fuerte", "Que hable menos"], a: 0, why: "<b>lentement</b>." },
    { fase: "dominio", c: ["am2-adj", "am2-place"], k: "order", ask: "Ordena: «Hablas muy bien francés».", tokens: ["Tu parles", "très bien", "français."], why: "<b>Tu parles très bien français.</b>" },
    { fase: "dominio", c: ["am2-place", "am2-adj"], k: "listen", say: "Nous travaillons bien ensemble.", acc: ["Nous travaillons bien ensemble."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Nous travaillons bien ensemble.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["pardon", "parles", "parle", "très", "plus", "s'il", "te", "plaît", "désolé", "dormi", "cette", "nuit", "peu", "nerveux", "mais", "français", "normal", "ha", "travaillons", "bonne", "étudiante", "chante", "voiture", "conduit", "professeur", "explique", "frère", "mon", "comprends", "rien", "pouvez-vous", "parler", "rapidement"] }
};

})();
