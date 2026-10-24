/* PLEX PLAY 4.52 — Sistema de enseñanza: el CONTENIDO de las lecciones que siguen la plantilla de 10 fases.
   Solo datos (lo pinta js/plx122.js). Cada lección se revisa con `node herramientas/auditar-lecciones.mjs` antes de publicarla:
   si el auditor dice INCOMPLETA, no sale.

   Plantilla (todo en español salvo los campos fr):
   - objetivo   { que, podras[], previos[], capacidad }        Fase 1 · qué aprenderás, qué podrás hacer, qué necesitas saber
   - requiere   [ids de concepto de lecciones anteriores]       el auditor comprueba que ya se enseñaron
   - recupera   [ids de concepto]                               Fase 1 · repaso breve de lo anterior que se va a reutilizar
   - conceptos  { id: { n: nombre, b: bloque que lo enseña } }
   - contexto   { titulo, escena, pj: { id: { n, voz } }, lineas: [[pj, fr, es]], fijate }   Fase 2
   - ensena     [bloques]                                       Fase 3 · tipos: vocab, gram, pron, uso, ojo (solo los que hagan falta)
   - ejemplos   [{ sit, resp, pasos[], porque, mal? }]          Fase 4 · ejemplos resueltos
   - comprueba  [{ q, o[], a, porque, b }]                      Fase 5 · comprensión; b = bloque al que se vuelve si falla
   - practica   [ítems del reproductor + fase, c[], pista]      Fases 6 a 9 · fase: guiada | indep | aplica | dominio
   - dominio    { criterio, min }                               Fase 9 · acierto al primer intento por concepto
   - repaso     { dias[] }                                      Fase 10 · intervalos del repaso espaciado
   - lexico     { nombres[], previo[] }                         nombres propios, y léxico de niveles anteriores que se da por conocido */
window.__ENSENA = window.__ENSENA || {};
/* las fichas de cada curso están en ens/<curso>.js; plx122 las baja cuando hacen falta (versiones: integrar.py) */
window.__ENS_V = {"a1":"5c610dc0","a2":"48ba07c5","a1-a":"e0704b5a","a2-a":"3d9358aa","b11-a":"53e96d2d","b12-a":"fc18c359","b21-a":"a9f74b21","c12-a":"bff39400","fon-a":"1bdfc8cc","lit-a":"2abe9d9d","pp-a":"5e2d0c6b","prog-a":"d654372d","rem-a":"834c0992","b11":"c9455a2c","b12":"b3736df9","b21":"ded5ecb9","c12":"805c9a8f","fon":"cd3fb15b","lit":"e3f4c3ec","pp":"bd95625c","prog":"3afb5a82","rem":"04403a93"};

window.__ENSENA["a1-saluer"] = {
  v: 1, arts: false, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Saluer et se présenter",
  objetivo: {
    que: "Vas a aprender a saludar, a despedirte y a decir cómo te llamas en francés, eligiendo bien entre hablar de tú y hablar de usted.",
    podras: [
      "Saludar a un amigo y a una profesora de la forma adecuada.",
      "Decir tu nombre y preguntar el de otra persona.",
      "Responder cuando te presentan a alguien.",
      "Despedirte."
    ],
    previos: [],
    corto: "¡Hoy aprendes a saludar y a presentarte en francés!",
    iconos: ["ic2/amigos", "m2d/cartel", "ic2/corazon", "m2d/saludar"],
    capacidad: "Ahora puedes saludar, decir cómo te llamas y preguntar el nombre de otra persona, de tú o de usted."
  },
  requiere: [],
  recupera: [],
  conceptos: {
    "saludar":          { n: "Saludar: Bonjour, Bonsoir, Salut", b: "saludos" },
    "despedirse":       { n: "Despedirse: Au revoir, Salut, À bientôt", b: "saludos" },
    "tratamiento":      { n: "Madame y Monsieur", b: "saludos" },
    "tu-vous":          { n: "¿Tú o usted? (tu / vous)", b: "tu-vous" },
    "presentarse":      { n: "Decir tu nombre: Je m'appelle…", b: "nombre" },
    "preguntar-nombre": { n: "Preguntar el nombre y devolver la pregunta", b: "nombre" },
    "enchante":         { n: "Enchanté / Enchantée", b: "nombre" },
    "pron":             { n: "Pronunciación: letras mudas, nasales y enlaces", b: "pron" }
  },

  /* Fase 2 · microvideo: Manzana lo explica en un minuto. Cada escena se pinta con su tipo (v); cada segmento es una frase
     narrada en español (es) o una frase en francés (fr), y p dice qué parte de la escena aparece con ella.
     Las frases en español no llevan palabras en francés: la voz española las leería mal. */
  video: {
    titulo: "Saludar y presentarse",
    voz: "es-CO-SalomeNeural",
    escenas: [
      {
        v: "persona",
        cap: "Para qué sirve",
        fondo: "esc/aula-universitaria",
        img: "pj/camila-neutra",
        fr: "Bonjour, Madame. Je m'appelle Camila.",
        es: "Buenos días, señora. Me llamo Camila.",
        nota: "¿Tú o usted?",
        seg: [
          {
            es: "Primer día de Camila en Lyon. Saluda a la profesora y luego a un compañero."
          },
          {
            fr: "Bonjour, Madame. Je m'appelle Camila.",
            p: 1
          },
          {
            es: "Con la profesora habla de usted; con Hugo, de tú. En francés esa diferencia cambia las palabras.",
            p: 2
          },
          {
            es: "Hoy aprendes a saludar, despedirte y presentarte eligiendo bien entre tú y usted.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Saludar",
        titulo: "Llegar y despedirse",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Bonjour · Bonsoir",
            es: "hola, buenos días · buenas noches (al llegar)"
          },
          {
            p: 2,
            fr: "Au revoir · À bientôt",
            es: "adiós · hasta pronto"
          },
          {
            p: 3,
            fr: "Salut",
            es: "hola y chao, solo con amigos"
          }
        ],
        seg: [
          {
            es: "Repasemos los saludos.",
            p: 1
          },
          {
            fr: "Bonjour",
            p: 1
          },
          {
            fr: "Bonsoir",
            p: 1
          },
          {
            es: "Para irte:",
            p: 2
          },
          {
            fr: "Au revoir",
            p: 2
          },
          {
            fr: "À bientôt",
            p: 2
          },
          {
            es: "Y salut, que sirve para llegar y para irte, pero solo con amigos.",
            p: 3
          },
          {
            fr: "Salut",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Tú y usted",
        titulo: "Tu o vous",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "tu",
            es: "tú · amigos, familia, gente de tu edad"
          },
          {
            p: 2,
            fr: "vous",
            es: "usted · profesores, desconocidos, mayores"
          },
          {
            p: 3,
            regla: "vous también es «ustedes» · si dudas, vous"
          }
        ],
        seg: [
          {
            es: "Como en español, hay dos maneras de hablarle a alguien.",
            p: 1
          },
          {
            es: "Tu, de tú: con amigos, familia y gente de tu edad.",
            p: 1
          },
          {
            fr: "tu",
            p: 1
          },
          {
            es: "Vous, de usted: con profesores, desconocidos y personas mayores.",
            p: 2
          },
          {
            fr: "vous",
            p: 2
          },
          {
            es: "Vous también es ustedes. Y si dudas, usa vous: es lo seguro.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Madame, Monsieur",
        titulo: "Señora, señor",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Bonjour, Madame !",
            es: "¡Buenos días, señora!"
          },
          {
            p: 2,
            fr: "Bonjour, Monsieur !",
            es: "¡Buenos días, señor!"
          },
          {
            p: 3,
            regla: "En Francia se saluda con Madame o Monsieur, sin el apellido"
          }
        ],
        seg: [
          {
            es: "En Francia, a una persona que tratas de usted se la saluda así:",
            p: 1
          },
          {
            fr: "Bonjour, Madame !",
            p: 1
          },
          {
            fr: "Bonjour, Monsieur !",
            p: 2
          },
          {
            es: "Sin apellido: es lo más educado.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Presentarse",
        titulo: "Llamarse: s'appeler",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Je m'appelle Camila.",
            es: "Me llamo Camila."
          },
          {
            p: 2,
            fr: "Tu t'appelles comment ?",
            es: "¿Cómo te llamas?"
          },
          {
            p: 3,
            fr: "Vous vous appelez comment ?",
            es: "¿Cómo se llama usted?"
          }
        ],
        seg: [
          {
            es: "Para presentarte: je m'appelle.",
            p: 1
          },
          {
            fr: "Je m'appelle Camila.",
            p: 1
          },
          {
            es: "Para preguntar, de tú:",
            p: 2
          },
          {
            fr: "Tu t'appelles comment ?",
            p: 2
          },
          {
            es: "Y de usted:",
            p: 3
          },
          {
            fr: "Vous vous appelez comment ?",
            p: 3
          },
          {
            es: "Fíjate: con vous se repite vous. Es normal.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Responder",
        titulo: "Y tú, y usted, mucho gusto",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Je m'appelle Hugo. Et toi ?",
            es: "Me llamo Hugo. ¿Y tú?"
          },
          {
            p: 2,
            fr: "Je m'appelle Andrés. Et vous ?",
            es: "Me llamo Andrés. ¿Y usted?"
          },
          {
            p: 3,
            fr: "Enchanté · Enchantée",
            es: "mucho gusto (hombre · mujer)"
          }
        ],
        seg: [
          {
            es: "Para devolver la pregunta:",
            p: 1
          },
          {
            fr: "Je m'appelle Hugo. Et toi ?",
            p: 1
          },
          {
            fr: "Je m'appelle Andrés. Et vous ?",
            p: 2
          },
          {
            es: "Y al conocer a alguien: enchanté si eres hombre, enchantée si eres mujer. Suenan igual.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En la vida real",
        titulo: "Primer día en Lyon",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Bonjour !",
            es: "¡Buenos días!"
          },
          {
            p: 2,
            fr: "Bonjour, Madame.",
            es: "Buenos días, señora."
          },
          {
            p: 3,
            fr: "Vous vous appelez comment ?",
            es: "¿Cómo se llama usted?"
          },
          {
            p: 4,
            fr: "Je m'appelle Camila.",
            es: "Me llamo Camila."
          }
        ],
        seg: [
          {
            es: "Escucha cómo suena en una conversación de verdad."
          },
          {
            fr: "Bonjour !",
            p: 1
          },
          {
            fr: "Bonjour, Madame.",
            p: 2
          },
          {
            fr: "Vous vous appelez comment ?",
            p: 3
          },
          {
            fr: "Je m'appelle Camila.",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Contraste con el español",
        titulo: "Las palabras van en equipo",
        mz: "m2d/alerta",
        items: [
          {
            p: 1,
            regla: "Equipo tú: Salut · tu t'appelles · Et toi ?"
          },
          {
            p: 2,
            regla: "Equipo usted: Bonjour, Madame · vous vous appelez · Et vous ?"
          },
          {
            p: 3,
            regla: "No se mezclan: nada de «Salut, Madame»"
          }
        ],
        seg: [
          {
            es: "La clave de esta lección: las palabras van en equipo.",
            p: 1
          },
          {
            es: "De tú: salut, tu t'appelles, et toi.",
            p: 1
          },
          {
            es: "De usted: bonjour, madame, vous vous appelez, et vous.",
            p: 2
          },
          {
            es: "No se mezclan. Salut, madame suena raro, como decirle quiubo a tu profesora.",
            p: 3
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Salut, Madame !",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Bonjour, Madame !",
          es: "Con Madame, bonjour."
        },
        seg: [
          {
            es: "Primera trampa: salut con madame.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Bonjour, Madame !",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Je me appelle Andrés.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Je m'appelle Andrés.",
          es: "me + vocal → m'."
        },
        seg: [
          {
            es: "Segunda trampa: me appelle separado.",
            p: 1
          },
          {
            es: "Se junta:",
            p: 2
          },
          {
            fr: "Je m'appelle Andrés.",
            p: 2
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/pensativo",
        q: "Saludas a tu profesora a las 9 de la mañana.",
        o: [
          "Bonjour, Madame !",
          "Salut, Madame !"
        ],
        a: 0,
        bien: "¡Eso es! De usted: bonjour, madame.",
        mal: "Salut es para amigos. Con la profesora: bonjour, madame.",
        seg: [
          {
            es: "Te toca. Son las nueve de la mañana y saludas a tu profesora."
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/confundido",
        q: "Le preguntas el nombre a un compañero de tu edad.",
        o: [
          "Tu t'appelles comment ?",
          "Vous vous appelez comment ?"
        ],
        a: 0,
        bien: "¡Muy bien! De tú.",
        mal: "Con un compañero de tu edad, de tú: tu t'appelles comment.",
        seg: [
          {
            es: "Una más. Le preguntas el nombre a un compañero de tu edad."
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
            fr: "Bonjour, Madame !",
            es: "Son las 9 de la mañana. Saludas a tu profesora al entrar en clase."
          },
          {
            p: 2,
            fr: "Tu t'appelles comment ?",
            es: "Un compañero nuevo de tu edad se sienta a tu lado. Le preguntas el nombre."
          },
          {
            p: 3,
            fr: "Enchantée, Monsieur.",
            es: "Eres mujer. Un señor que no conoces te dice su nombre. Le respondes."
          }
        ],
        seg: [
          {
            es: "Ahora tú. Escucha cada frase y repítela en voz alta."
          },
          {
            fr: "Bonjour, Madame !",
            p: 1
          },
          {
            es: "Otra vez.",
            p: 1
          },
          {
            fr: "Bonjour, Madame !",
            p: 1
          },
          {
            fr: "Tu t'appelles comment ?",
            p: 2
          },
          {
            es: "Otra vez.",
            p: 2
          },
          {
            fr: "Tu t'appelles comment ?",
            p: 2
          },
          {
            fr: "Enchantée, Monsieur.",
            p: 3
          },
          {
            es: "Otra vez.",
            p: 3
          },
          {
            fr: "Enchantée, Monsieur.",
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
                "De tú",
                "De usted"
              ],
              [
                "saludar",
                "Salut !",
                "Bonjour, Madame !"
              ],
              [
                "preguntar el nombre",
                "Tu t'appelles comment ?",
                "Vous vous appelez comment ?"
              ],
              [
                "devolver",
                "Et toi ?",
                "Et vous ?"
              ]
            ]
          },
          {
            p: 2,
            regla: "Je m'appelle… · Enchanté(e) · si dudas, vous"
          }
        ],
        seg: [
          {
            es: "Repasemos los dos equipos: tú y usted.",
            p: 1
          },
          {
            es: "Je m'appelle para tu nombre, enchanté o enchantée, y si dudas, vous. ¡Ahora, a practicar!",
            p: 2
          }
        ]
      }
    ]
  },

  /* Fase 2 · una situación real: primer día en una residencia de estudiantes en Lyon */
  contexto: {
    titulo: "Primer día en Lyon",
    img: "bg-universidad",
    yo: "camila",
    escena: "Camila, una estudiante colombiana, llega a su residencia en Lyon. Primero habla con Madame Martin, la directora; después conoce a Hugo, un estudiante francés de su edad.",
    pj: {
      martin: { n: "Madame Martin", voz: "fr-FR-DeniseNeural", rol: "la directora" },
      camila: { n: "Camila", voz: "fr-FR-VivienneMultilingualNeural", rol: "estudiante" },
      hugo:   { n: "Hugo", voz: "fr-FR-HenriNeural", rol: "estudiante" }
    },
    lineas: [
      ["martin", "Bonjour !", "¡Buenos días!"],
      ["camila", "Bonjour, Madame.", "Buenos días, señora."],
      ["martin", "Vous vous appelez comment ?", "¿Cómo se llama usted?"],
      ["camila", "Je m'appelle Camila.", "Me llamo Camila."],
      ["martin", "Enchantée, Camila.", "Mucho gusto, Camila."],
      ["hugo",   "Salut ! Tu t'appelles comment ?", "¡Hola! ¿Cómo te llamas?"],
      ["camila", "Camila. Et toi ?", "Camila. ¿Y tú?"],
      ["hugo",   "Je m'appelle Hugo. Enchanté !", "Me llamo Hugo. ¡Mucho gusto!"],
      ["camila", "Enchantée ! Au revoir, Madame.", "¡Mucho gusto! Adiós, señora."],
      ["martin", "Au revoir, Camila. À bientôt !", "Adiós, Camila. ¡Hasta pronto!"]
    ],
    fijate: "Fíjate: Camila habla de usted con la directora (vous, Madame) y de tú con Hugo (tu, Salut). En esta lección vas a aprender cada una de estas frases y cuándo usarlas."
  },

  /* Fase 3 · la enseñanza completa, en bloques cortos (una idea por pantalla) */
  ensena: [
    {
      id: "saludos", tipo: "vocab", titulo: "Saludar y despedirse",
      intro: "Toca cada tarjeta: suena y se da la vuelta. La etiqueta te dice con quién se usa.",
      dia: { titulo: "¿Bonjour o Bonsoir? Mueve el sol", corte: 18, de: 7, a: 23, dia: "Bonjour", noche: "Bonsoir" },
      palabras: [
        { fr: "Bonjour", ic: "sol", es: "Buenos días · buenas tardes · hola", reg: "neutro", nota: "Sirve todo el día, desde la mañana hasta el final de la tarde.", ej: ["Bonjour, Madame !", "¡Buenos días, señora!"] },
        { fr: "Bonsoir", ic: "ic2/luna", es: "Buenas noches (al llegar)", reg: "neutro", nota: "Para saludar por la noche, más o menos desde las seis de la tarde.", ej: ["Bonsoir, Monsieur !", "¡Buenas noches, señor!"] },
        { fr: "Salut", ic: "ic2/amigos", es: "Hola · chao", reg: "tú", nota: "Solo con amigos y gente de confianza. Sirve para llegar y para irte.", ej: ["Salut, Hugo !", "¡Hola, Hugo!"] },
        { fr: "Au revoir", ic: "m2d/saludar", es: "Adiós", reg: "neutro", nota: "Sirve con cualquier persona.", ej: ["Au revoir, Madame !", "¡Adiós, señora!"] },
        { fr: "À bientôt", ic: "ic2/reloj-arena", es: "Hasta pronto", reg: "neutro", nota: "Cuando vas a volver a ver a la persona.", ej: ["À bientôt, Camila !", "¡Hasta pronto, Camila!"] },
        { fr: "Madame", ic: "pf4/pf-sofia-e1", es: "señora", reg: "usted", nota: "Para dirigirte con respeto a una mujer: una profesora, una vendedora, una desconocida.", ej: ["Bonjour, Madame.", "Buenos días, señora."] },
        { fr: "Monsieur", ic: "pf4/pf-antoine-e1", es: "señor", reg: "usted", nota: "Lo mismo, para un hombre. Ojo: se pronuncia «mesié».", ej: ["Au revoir, Monsieur.", "Adiós, señor."] }
      ],
      clave: "Con una profesora o un desconocido: Bonjour / Au revoir + Madame o Monsieur. Con un amigo: Salut."
    },
    {
      id: "tu-vous", tipo: "uso", titulo: "¿Tú o usted?",
      intro: "En francés, como en español, hay dos maneras de hablarle a alguien: de tú (tu) y de usted (vous). Elegir bien es parte de saludar bien.",
      grupos: [
        { tag: "tu", t: "Confianza", img: "ic2/amigos", items: ["un amigo o una amiga", "un compañero de tu edad", "tu familia", "un niño"] },
        { tag: "vous", t: "Respeto o distancia", img: "pf4/pf-sofia-g1", items: ["un profesor o una profesora", "una persona desconocida", "una persona mayor", "un jefe, un recepcionista, un vendedor"] }
      ],
      toca: "Toca a cada persona: ¿le hablas de tú o de usted?",
      regla: [
        "Vous también sirve para hablarle a varias personas a la vez, conocidas o no: es el «ustedes» del español.",
        "Si dudas, usa vous: es lo seguro. Si la otra persona te habla de tú, puedes contestarle de tú.",
        "Las palabras van juntas: Salut va con tu; Bonjour, Madame va con vous."
      ],
      pares: [
        ["Salut ! Tu t'appelles comment ?", "¡Hola! ¿Cómo te llamas? (a un compañero)"],
        ["Bonjour, Monsieur. Vous vous appelez comment ?", "Buenos días, señor. ¿Cómo se llama usted? (a un desconocido)"]
      ]
    },
    {
      id: "nombre", tipo: "gram", titulo: "Decir y preguntar el nombre",
      intro: "Para presentarte usas el verbo s'appeler («llamarse»). Por ahora solo necesitas tres formas.",
      arma: { fichas: ["Je", "me", "appelle", "Camila"], une: [1, 2, "m'appelle"], es: "Me llamo Camila.", boton: "Toca para unir me + appelle" },
      tabla: [["Francés", "Español", "Cuándo"], [
        ["Je m'appelle Camila.", "Me llamo Camila.", "Para decir tu nombre"],
        ["Tu t'appelles comment ?", "¿Cómo te llamas?", "Para preguntar, de tú"],
        ["Vous vous appelez comment ?", "¿Cómo se llama usted?", "Para preguntar, de usted"]
      ]],
      regla: [
        "Je = yo. En francés el «yo» no se puede quitar: «Me llamo Camila» es Je m'appelle Camila, nunca «M'appelle Camila».",
        "Me se convierte en m' (con apóstrofo) porque appelle empieza por vocal: je me appelle → je m'appelle. Lo mismo con te: tu te appelles → tu t'appelles.",
        "Comment = cómo. Al hablar, los franceses lo ponen al final y suben la voz: Tu t'appelles comment ?",
        "Para devolver la pregunta: Et toi ? (¿Y tú?) o Et vous ? (¿Y usted?).",
        "Cuando te presentan a alguien: Enchanté si eres hombre, Enchantée si eres mujer. Significa «mucho gusto» y suenan igual."
      ],
      ej: [
        ["Je m'appelle Hugo. Et toi ?", "Me llamo Hugo. ¿Y tú?"],
        ["Je m'appelle Andrés. Et vous ?", "Me llamo Andrés. ¿Y usted?"],
        ["Enchantée, Monsieur.", "Mucho gusto, señor. (lo dice una mujer)"]
      ]
    },
    {
      id: "pron", tipo: "pron", titulo: "Cómo suena",
      intro: "En francés no todo lo que se escribe se pronuncia. Estas son las claves para decir bien las frases de hoy. Escucha cada ejemplo.",
      puntos: [
        { fr: "Salut", marca: "Salu[t]", regla: "Las consonantes del final casi nunca suenan: salut se dice sin t, comment sin t, vous sin s.", aprox: "salü · comán · vu" },
        { fr: "Bonjour", marca: "Bonjou{r}", regla: "Excepción útil: la r del final de bonjour, bonsoir y au revoir sí se oye, suave, en la garganta.", aprox: "bon-yur" },
        { fr: "Enchanté", marca: "{En}ch{an}té", regla: "on, an y en suenan por la nariz y la n no se pronuncia como en español: bonjour, enchanté, comment.", aprox: "an-shan-té" },
        { fr: "Bonsoir", marca: "Bons{oi}r", regla: "oi suena «ua» y au suena «o»: bonsoir, au revoir, toi.", aprox: "bon-suar · o-revuar · tua" },
        { fr: "Je m'appelle", marca: "Je m'appell[e]", regla: "El apóstrofo une las palabras: m'appelle se dice como una sola. Appelle y appelles suenan igual.", aprox: "ye-mapél" },
        { fr: "Vous vous appelez", marca: "Vou[s] vou{s}‿appele[z]", regla: "La s de vous se pega a la vocal que sigue y suena como z. Se llama «enlace».", aprox: "vu-vu-za-plé" },
        { fr: "Monsieur", marca: "M{on}sieu[r]", regla: "Monsieur no suena como se escribe.", aprox: "mesié" }
      ],
      leyenda: true,
      nota: "Las pronunciaciones entre comillas son aproximadas, para orientarte: el audio es la referencia."
    },
    {
      id: "uso", tipo: "uso", titulo: "En la vida real",
      intro: "Así se ven estas frases en dos situaciones distintas. Compara las palabras que cambian.",
      escenas: [
        { titulo: "En una fiesta de estudiantes (de tú)", lineas: [
          ["Hugo", "Salut ! Tu t'appelles comment ?", "¡Hola! ¿Cómo te llamas?"],
          ["Camila", "Camila. Et toi ?", "Camila. ¿Y tú?"],
          ["Hugo", "Je m'appelle Hugo. Enchanté !", "Me llamo Hugo. ¡Mucho gusto!"]
        ]},
        { titulo: "En una oficina (de usted)", lineas: [
          ["Andrés", "Bonjour, Monsieur. Je m'appelle Andrés. Et vous ?", "Buenos días, señor. Me llamo Andrés. ¿Y usted?"],
          ["Paul Petit", "Je m'appelle Paul Petit. Enchanté.", "Me llamo Paul Petit. Mucho gusto."],
          ["Andrés", "Enchanté, Monsieur.", "Mucho gusto, señor."]
        ]}
      ],
      notas: [
        "En Francia se saluda casi siempre al entrar en una tienda, una oficina o un ascensor: «Bonjour, Madame» o «Bonjour, Monsieur».",
        "Con Madame y Monsieur no se usa el nombre de pila: se dice Bonjour, Madame o Bonjour, Madame Martin, pero no «Madame Camila».",
        "También oirás Comment tu t'appelles ? Significa lo mismo que Tu t'appelles comment ? Por ahora usa las formas de esta lección."
      ]
    },
    {
      id: "ojo",
      tipo: "ojo",
      titulo: "Errores frecuentes",
      intro: "Tres errores que cometemos casi todos los hispanohablantes. Cázalos uno por uno.",
      errores: [
        {
          sit: "Camila llega a clase y saluda a la profesora:",
          frase: "Salut, Madame ! Je m'appelle Camila.",
          mal: "Salut",
          bien: "Bonjour",
          porque: "En español «hola» sirve con todos; salut es de confianza.",
          truco: "Con Madame o Monsieur va bonjour: equipo usted."
        },
        {
          sit: "Andrés se presenta:",
          frase: "Bonjour ! Je me appelle Andrés.",
          mal: "me appelle",
          bien: "m'appelle",
          porque: "En español «me llamo» va separado.",
          truco: "me + vocal → m': je m'appelle."
        },
        {
          sit: "Camila llega a cenar a las 8 de la noche a casa de su familia anfitriona:",
          frase: "Bonne nuit, Madame ! Je m'appelle Camila.",
          mal: "Bonne nuit",
          bien: "Bonsoir",
          porque: "En español «buenas noches» sirve para llegar y para ir a dormir.",
          truco: "Al llegar de noche: bonsoir. Bonne nuit es solo para ir a dormir."
        }
      ]
    }
  ],

  /* Fase 4 · ejemplos resueltos: cómo se construye cada respuesta y por qué */
  ejemplos: [
    {
      sit: "Son las 9 de la mañana. Saludas a tu profesora al entrar en clase.",
      resp: "Bonjour, Madame !",
      porque: "De día y de usted: bonjour, madame.",
      pasos: [
        {
          q: "¿Tú o usted?",
          ops: [
            "tú",
            "usted"
          ],
          ok: 1
        },
        {
          q: "¿Qué saludo?",
          ops: [
            "Bonjour",
            "Salut"
          ],
          ok: 0
        },
        {
          q: "¿Cómo sigue?",
          ops: [
            "Madame",
            "toi"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "Un compañero nuevo de tu edad se sienta a tu lado. Le preguntas el nombre.",
      resp: "Tu t'appelles comment ?",
      porque: "De tú: tu t'appelles comment.",
      pasos: [
        {
          q: "¿Tú o usted?",
          ops: [
            "tú",
            "usted"
          ],
          ok: 0
        },
        {
          q: "¿Qué pregunta?",
          ops: [
            "Tu t'appelles comment ?",
            "Vous vous appelez comment ?"
          ],
          ok: 0
        },
        {
          q: "¿Dónde va comment?",
          ops: [
            "al final",
            "al principio"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "Eres mujer. Un señor que no conoces te dice su nombre. Le respondes.",
      resp: "Enchantée, Monsieur.",
      porque: "Mujer: enchantée; de usted: Monsieur.",
      pasos: [
        {
          q: "¿Tú o usted?",
          ops: [
            "tú",
            "usted"
          ],
          ok: 1
        },
        {
          q: "¿Hombre o mujer quien habla?",
          ops: [
            "Enchanté",
            "Enchantée"
          ],
          ok: 1
        },
        {
          q: "¿Cómo sigue?",
          ops: [
            "Monsieur",
            "toi"
          ],
          ok: 0
        }
      ]
    }
  ],

  /* Fase 5 · comprobación de comprensión (no es un examen: si fallas, vuelves a la explicación) */
  comprueba: [
    { q: "«Je m'appelle Léa» significa…", o: ["Me llamo Léa.", "¿Te llamas Léa?", "Adiós, Léa."], a: 0, b: "nombre",
      porque: "Je = yo; m'appelle = me llamo." },
    { q: "¿Con quién hablas de usted (vous)?", o: ["Con una profesora", "Con tu mejor amigo", "Con tu hermano"], a: 0, b: "tu-vous",
      porque: "Con profesores, desconocidos y personas mayores se usa vous." },
    { q: "¿Qué palabra sirve para saludar y también para despedirte de un amigo?", o: ["Salut", "Bonjour", "Au revoir"], a: 0, b: "saludos",
      porque: "Salut sirve para llegar y para irte, pero solo con amigos." },
    { q: "Eres mujer y te presentan a alguien. Dices…", o: ["Enchantée !", "Enchanté !"], a: 0, b: "nombre",
      porque: "Las mujeres dicen Enchantée, con e al final. Suena igual que Enchanté." },
    { q: "Entras en una panadería en Francia. ¿Qué es lo normal?", o: ["Decir «Bonjour, Madame» o «Bonjour, Monsieur»", "Entrar sin saludar", "Decir «Salut»"], a: 0, b: "uso",
      porque: "En Francia se saluda casi siempre al entrar en una tienda o una oficina, y de usted: Bonjour, Madame / Monsieur." },
    { q: "En «comment», ¿se pronuncia la t final?", o: ["No, no suena", "Sí, suena"], a: 0, b: "pron",
      porque: "Las consonantes finales casi nunca suenan: comment se dice «comán»." }
  ],

  /* Fases 6 a 9 · práctica. Cada ítem dice qué conceptos evalúa (c). La guiada lleva pista. */
  practica: [
    /* 6 · práctica guiada */
    { fase: "guiada", c: ["saludar", "tratamiento"], k: "choice", ask: "Elige el saludo.", ctx: "Son las 10 de la mañana. Entras en la oficina de Madame Martin, la directora.",
      q: "___, Madame !", o: ["Bonjour", "Salut"], a: 0, pista: "Mira con quién hablas: ¿es una amiga o la directora?",
      why: "Con la directora se habla de usted: <b>Bonjour, Madame</b>. <i>Salut</i> es solo para amigos." },
    { fase: "guiada", c: ["presentarse"], k: "order", ask: "Ordena: «Me llamo Camila».", ctx: "Camila se presenta.",
      tokens: ["Je", "m'appelle", "Camila"], pista: "Empieza por je: en francés el «yo» no se quita.",
      why: "<b>Je m'appelle Camila.</b> Primero <i>je</i>, luego <i>m'appelle</i> y al final el nombre." },
    { fase: "guiada", c: ["preguntar-nombre", "tu-vous"], k: "fill", ask: "Completa la pregunta.", ctx: "Hugo le pregunta el nombre a una compañera de su edad.",
      q: "Tu ___ comment ?", acc: ["t'appelles"], pista: "De tú: t' + appelles (con s al final).",
      why: "Con <i>tu</i> se dice <b>t'appelles</b>: <i>Tu t'appelles comment ?</i>" },
    { fase: "guiada", c: ["enchante"], k: "choice", ask: "Elige la respuesta.", ctx: "Hugo acaba de conocer a Camila. ¿Qué dice él?",
      q: "Je m'appelle Hugo. ___ !", o: ["Enchanté", "Enchantée"], a: 0, pista: "¿Quién habla: un hombre o una mujer?",
      why: "Hugo es hombre: <b>Enchanté</b>, sin e al final." },
    { fase: "guiada", c: ["saludar", "despedirse"], k: "match", ask: "Une cada palabra con su significado.", q: "Francés → español",
      pairs: [["Bonjour", "Buenos días"], ["Bonsoir", "Buenas noches (al llegar)"], ["Au revoir", "Adiós"], ["À bientôt", "Hasta pronto"]],
      pista: "Bon = buen. Jour = día; soir = noche.",
      why: "<i>Bonjour</i> y <i>Bonsoir</i> son para llegar; <i>Au revoir</i> y <i>À bientôt</i>, para irte." },

    /* 7 · práctica independiente: sin pistas y con situaciones nuevas */
    { fase: "indep", c: ["tu-vous"], k: "sort", ask: "Clasifica: ¿se dice de tú o de usted?", q: "¿Tu o vous?",
      cats: ["De tú (tu)", "De usted (vous)"],
      items: [["Tu t'appelles comment ?", 0], ["Et toi ?", 0], ["Salut, Léa !", 0], ["Vous vous appelez comment ?", 1], ["Et vous ?", 1], ["Bonjour, Monsieur.", 1]],
      why: "<i>Tu, toi</i> y <i>Salut</i> son de tú. <i>Vous</i> y <i>Bonjour, Monsieur</i> son de usted." },
    { fase: "indep", c: ["presentarse"], k: "spot", ask: "Encuentra el error y corrígelo.", ctx: "Andrés se presenta a un amigo de Hugo.",
      s: "Salut ! Je [appelle] Andrés .", fix: "m'appelle",
      why: "Falta <i>m'</i>: se dice <b>Je m'appelle Andrés</b>." },
    { fase: "indep", c: ["presentarse", "pron"], k: "listen", say: "Je m'appelle Hugo.", acc: ["Je m'appelle Hugo."], num: false, dict: true,
      ask: "Escucha la frase y escríbela completa. Puedes oírla despacio.",
      why: "La frase era <b>Je m'appelle Hugo.</b> Recuerda el apóstrofo de <i>m'appelle</i> y la doble l." },
    { fase: "indep", c: ["preguntar-nombre", "tu-vous"], k: "choice", es: true, say: "Vous vous appelez comment ?", ask: "Escucha. ¿Qué te preguntan?",
      q: "Escucha la pregunta.", o: ["¿Cómo se llama usted?", "¿Cómo estás?", "¿Adónde vas?"], a: 0,
      why: "<i>Vous vous appelez comment ?</i> = <b>¿Cómo se llama usted?</b> Es la pregunta de usted." },
    { fase: "indep", c: ["saludar"], k: "choice", ask: "Elige el saludo.", ctx: "Son las 8 de la noche. Llegas a casa de tu familia anfitriona.",
      q: "___, Madame !", o: ["Bonsoir", "Bonne nuit", "Salut"], a: 0,
      why: "Al llegar de noche se dice <b>Bonsoir</b>. <i>Bonne nuit</i> es para irse a dormir y <i>Salut</i> es demasiado familiar con la señora de la casa." },
    { fase: "indep", c: ["preguntar-nombre", "tu-vous"], k: "fill", ask: "Devuelve la pregunta.", ctx: "Hugo, un compañero, te ha preguntado tu nombre. Ahora tú le preguntas el suyo.",
      q: "Je m'appelle Camila. Et ___ ?", acc: ["toi"],
      why: "Con un compañero se habla de tú: <b>Et toi ?</b> = ¿Y tú?" },
    { fase: "indep", c: ["pron"], k: "choice", es: true, say: "Salut !", ask: "Escucha la palabra.", q: "En «salut», ¿se pronuncia la t final?",
      o: ["No, no suena", "Sí, suena"], a: 0,
      why: "La t final de <i>salut</i> no suena: se dice «salü»." },

    /* 8 · aplicación comunicativa: una conversación completa en la residencia */
    { fase: "aplica", c: ["saludar", "tratamiento"], k: "choice", ask: "Eres Daniel. Llegas a la residencia: saluda.", ctx: "Son las 9 de la mañana. Madame Leroy, la recepcionista, te mira y sonríe.",
      q: "Tú: «___»", o: ["Bonjour, Madame !", "Salut !", "Bonsoir, Madame !"], a: 0,
      why: "Por la mañana y con la recepcionista: <b>Bonjour, Madame !</b>" },
    { fase: "aplica", c: ["presentarse"], k: "order", ask: "Responde con tu nombre (Daniel).", ctx: "Madame Leroy: «Vous vous appelez comment ?»",
      tokens: ["Je", "m'appelle", "Daniel"],
      why: "<b>Je m'appelle Daniel.</b>" },
    { fase: "aplica", c: ["enchante", "tratamiento"], k: "choice", ask: "Responde a Madame Leroy.", ctx: "Madame Leroy: «Enchantée, Daniel.»",
      q: "Tú (Daniel): «___»", o: ["Enchanté, Madame.", "Enchantée, Madame."], a: 0,
      why: "Daniel es hombre: <b>Enchanté</b>. Madame Leroy dijo <i>Enchantée</i> porque ella es mujer." },
    { fase: "aplica", c: ["preguntar-nombre", "tu-vous"], k: "fill", ask: "Pregúntale el nombre.", ctx: "En el pasillo te cruzas con una estudiante de tu edad.",
      q: "Salut ! Tu ___ comment ?", acc: ["t'appelles"],
      why: "Con una estudiante de tu edad, de tú: <b>Tu t'appelles comment ?</b>" },
    { fase: "aplica", c: ["presentarse", "enchante"], k: "choice", ask: "Contéstale.", ctx: "Ella: «Je m'appelle Léa. Et toi ?»",
      q: "Tú (Daniel): «___»", o: ["Je m'appelle Daniel. Enchanté !", "Vous vous appelez Daniel.", "Au revoir, Léa."], a: 0,
      why: "Le dices tu nombre y que te alegra conocerla: <b>Je m'appelle Daniel. Enchanté !</b>" },
    { fase: "aplica", c: ["despedirse", "tu-vous"], k: "choice", ask: "Despídete de Léa.", ctx: "Te tienes que ir. Vas a ver a Léa mañana en clase.",
      q: "Tú: «___»", o: ["Salut, Léa ! À bientôt !", "Bonjour, Léa !", "Enchanté, Madame !"], a: 0,
      why: "Con una compañera, <b>Salut</b> sirve para irte, y <b>À bientôt</b> porque la verás pronto." },

    /* 9 · demuestra lo que sabes: sin ayudas, todos los objetivos */
    { fase: "dominio", c: ["despedirse", "tratamiento"], k: "choice", ask: "Elige la despedida.", ctx: "Son las 11 de la mañana. Sales de la clase de Monsieur Petit.",
      q: "___, Monsieur !", o: ["Au revoir", "Salut", "Enchanté"], a: 0,
      why: "Con un profesor: <b>Au revoir, Monsieur !</b>" },
    { fase: "dominio", c: ["presentarse"], k: "fill", ask: "Completa la presentación.", ctx: "Camila se presenta a la clase.",
      q: "Bonjour ! Je ___ Camila.", acc: ["m'appelle"],
      why: "<b>Je m'appelle Camila.</b>" },
    { fase: "dominio", c: ["tu-vous", "preguntar-nombre"], k: "choice", ask: "Elige la pregunta.", ctx: "Conoces a la madre de tu amigo Hugo. No la conocías.",
      q: "Bonjour, Madame. ___", o: ["Vous vous appelez comment ?", "Tu t'appelles comment ?"], a: 0,
      why: "Es una persona mayor que no conoces: de usted, <b>Vous vous appelez comment ?</b>" },
    { fase: "dominio", c: ["saludar", "tratamiento", "pron"], k: "listen", say: "Bonsoir, Madame.", acc: ["Bonsoir, Madame."], num: false, dict: true,
      ask: "Escucha la frase y escríbela completa. Puedes oírla despacio.",
      why: "La frase era <b>Bonsoir, Madame.</b> <i>oi</i> suena «ua»." },
    { fase: "dominio", c: ["tu-vous"], k: "choice", es: true, say: "Salut ! Tu t'appelles comment ?", ask: "Escucha.", q: "¿Cómo te habla esta persona?",
      o: ["De tú: es informal", "De usted: es formal"], a: 0,
      why: "<i>Salut</i> y <i>tu t'appelles</i> son de tú." },
    { fase: "dominio", c: ["preguntar-nombre", "presentarse", "enchante"], k: "match", es: true, ask: "Une cada frase con su significado.", q: "Francés → español",
      pairs: [["Et vous ?", "¿Y usted?"], ["Et toi ?", "¿Y tú?"], ["Je m'appelle…", "Me llamo…"], ["Enchanté !", "¡Mucho gusto!"]],
      why: "<i>Et toi ?</i> es de tú y <i>Et vous ?</i> de usted." },
    { fase: "dominio", c: ["enchante"], k: "choice", ask: "Elige la respuesta.", ctx: "Camila conoce a Monsieur Petit, su profesor.",
      q: "Camila: «___»", o: ["Enchantée, Monsieur.", "Enchanté, Monsieur.", "Salut, Monsieur."], a: 0,
      why: "Camila es mujer: <b>Enchantée</b>; y con un profesor, <i>Monsieur</i>, no <i>Salut</i>." },
    { fase: "dominio", c: ["pron"], k: "choice", es: true, say: "Vous vous appelez comment ?", ask: "Escucha.", q: "En «vous appelez», ¿cómo suena la s de vous?",
      o: ["Como una z que se pega a appelez", "No suena", "Como una s fuerte"], a: 0,
      why: "Delante de vocal, la s de <i>vous</i> suena z y se une: «vu-za-plé». Es el enlace." }
  ],

  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Camila", "Hugo", "Léa", "Andrés", "Daniel", "Martin", "Leroy", "Petit", "Paul"] }
};
