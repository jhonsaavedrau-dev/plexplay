/* PLEX PLAY 4.52 — Sistema de enseñanza: las fichas del curso «Texto académico C1.1» (prog). Solo datos (los pinta
   js/plx122.js; la plantilla está explicada al principio de ensena.js). Cada ficha se revisa con
   `node herramientas/auditar-lecciones.mjs` antes de publicarla.
   Estilo de las explicaciones (pedido de Jhon, 19-oct-2026): «la idea» en una frase al principio de cada tarjeta, pocas
   reglas cortas comparadas con el español, términos técnicos solo los imprescindibles y explicados. */
window.__ENSENA = window.__ENSENA || {};
/* ======================================================================================================
   Texto académico C1.1 (prog) · Unidad «Structure textuelle» — rehecha con el sistema de enseñanza (19-oct-2026)
   Basada en las guías del curso PTA C1.1 (Universidad de Pamplona): le groupe nominal, les compléments du verbe,
   les pronoms compléments. Explicaciones en español, paso a paso; ejemplos y ejercicios en francés de nivel C1.
   ====================================================================================================== */

/* Lección 1 · El grupo nominal y sus expansiones */
window.__ENSENA["gnexp"] = {
  v: 1, arts: false, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Le groupe nominal et ses expansions",
  roles: { det: "determinante", nucleo: "núcleo", adj: "adjetivo", cn: "compl. del nombre", rel: "relativa" },
  objetivo: {
    que: "Vas a reconocer las piezas de un grupo nominal y a enriquecerlo para escribir frases más precisas, como en un texto académico.",
    corto: "Un nombre solo dice poco: hoy aprendes a enriquecerlo.",
    podras: [
      "Encontrar el núcleo de un grupo nominal, aunque sea largo.",
      "Distinguir las tres expansiones: adjetivo, complemento del nombre y relativa.",
      "Elegir qui, que u où en una relativa sencilla.",
      "Condensar dos frases cortas en un solo grupo nominal."
    ],
    iconos: ["m2d/senalar", "ic2/libros", "ic2/pregunta", "m2d/escribiendo"],
    previos: ["Los determinantes (le, un, ce, mon…) y la concordancia del adjetivo, vistos en A1 y A2."],
    capacidad: "Ahora puedes analizar y construir grupos nominales ricos: la base de una escritura académica precisa y sin repeticiones."
  },
  requiere: [],
  recupera: [],
  conceptos: {
    "gn-noyau":    { n: "El núcleo del grupo nominal", b: "partes" },
    "gn-det":      { n: "El determinante", b: "partes" },
    "gn-adj":      { n: "Expansión: el adjetivo", b: "expansiones" },
    "gn-cn":       { n: "Expansión: el complemento del nombre", b: "expansiones" },
    "gn-rel":      { n: "Expansión: la relativa (qui, que, où)", b: "relativas" },
    "gn-enrichir": { n: "Condensar frases en un grupo nominal", b: "condensar" }
  },

  video: {
    titulo: "El grupo nominal y sus expansiones",
    voz: "es-CO-SalomeNeural",
    escenas: [
      {
        v: "persona",
        cap: "Para qué sirve",
        fondo: "esc/biblioteca-sol",
        img: "pj/laura-laptop",
        fr: "La ville a des rues étroites pleines de cafés où les étudiants se retrouvent le soir.",
        es: "La ciudad tiene calles estrechas llenas de cafés donde los estudiantes se encuentran por la noche.",
        nota: "Corregir un párrafo",
        seg: [
          {
            es: "Laura escribe un párrafo para su tutora. Primero escribió tres frases cortas: la ciudad tiene calles; las calles son estrechas; están llenas de cafés."
          },
          {
            fr: "La ville a des rues étroites pleines de cafés où les étudiants se retrouvent le soir.",
            p: 1
          },
          {
            es: "Ahora es una sola frase, precisa y sin repeticiones. El secreto es el grupo nominal: un nombre con todo lo que lo acompaña. Hoy aprendes a construirlo, como en la escritura académica.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Las partes",
        titulo: "Determinante + núcleo + expansiones",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "un chat noir de ma voisine qui dort au soleil",
            es: "un gato negro de mi vecina que duerme al sol"
          },
          {
            p: 2,
            regla: "le noyau (el núcleo): el nombre principal · le déterminant: le, un, ce, mon, nos"
          },
          {
            p: 3,
            regla: "les expansions: todo lo demás; añaden información y se pueden quitar"
          }
        ],
        seg: [
          {
            es: "Un grupo nominal tiene un centro, el núcleo: aquí, chat.",
            p: 1
          },
          {
            fr: "un chat noir de ma voisine qui dort au soleil",
            p: 1
          },
          {
            es: "Delante va el determinante: un, le, ce, mon.",
            p: 2
          },
          {
            es: "Y todo lo demás son expansiones: noir, de ma voisine, qui dort au soleil. Si las quitas, la frase sigue en pie.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Encontrar el núcleo",
        titulo: "Quita lo que sobra",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "une grande cape de pourpre brodée d'hermine",
            es: "una gran capa de púrpura bordada de armiño"
          },
          {
            p: 2,
            regla: "quita el determinante, los adjetivos y lo que empieza por preposición: queda cape"
          },
          {
            p: 3,
            fr: "Les montagnes de ce monde sont immobiles.",
            es: "Las montañas de este mundo son inmóviles."
          },
          {
            p: 4,
            regla: "¿dudas? el núcleo es el nombre con el que concuerda el verbo: montagnes → sont"
          }
        ],
        seg: [
          {
            es: "Para encontrar el núcleo, quita capas. Une, grande, brodée, de pourpre, d'hermine. Queda cape.",
            p: 1
          },
          {
            fr: "une grande cape de pourpre brodée d'hermine",
            p: 1
          },
          {
            es: "Por eso brodée va en femenino: concuerda con cape.",
            p: 2
          },
          {
            es: "Otro truco: el verbo concuerda con el núcleo.",
            p: 3
          },
          {
            fr: "Les montagnes de ce monde sont immobiles.",
            p: 3
          },
          {
            es: "El verbo es sont, plural, porque el núcleo es montagnes, no monde.",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Expansión 1 y 2",
        titulo: "Adjetivo · complemento del nombre",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "des rues étroites",
            es: "calles estrechas"
          },
          {
            p: 2,
            fr: "une table en bois",
            es: "una mesa de madera"
          },
          {
            p: 3,
            fr: "une tasse à café · une tasse de café",
            es: "una taza para café · una taza llena de café"
          },
          {
            p: 4,
            fr: "la fille aux yeux verts",
            es: "la chica de los ojos verdes"
          }
        ],
        seg: [
          {
            es: "Primera expansión: el adjetivo. Concuerda con el núcleo.",
            p: 1
          },
          {
            fr: "des rues étroites",
            p: 1
          },
          {
            es: "Segunda: el complemento del nombre, una preposición y un nombre.",
            p: 2
          },
          {
            fr: "une table en bois",
            p: 2
          },
          {
            es: "Ojo con la preposición. À dice para qué sirve; de, lo que contiene.",
            p: 3
          },
          {
            fr: "une tasse à café, une tasse de café",
            p: 3
          },
          {
            es: "Y aux es à más les:",
            p: 4
          },
          {
            fr: "la fille aux yeux verts",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Expansión 3",
        titulo: "La relativa: qui, que, où",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "le chat qui dort",
            es: "el gato que duerme"
          },
          {
            p: 2,
            fr: "le livre que je lis",
            es: "el libro que leo"
          },
          {
            p: 3,
            fr: "la ville où je suis né · le jour où il est arrivé",
            es: "la ciudad donde nací · el día en que llegó"
          },
          {
            p: 4,
            regla: "qui + verbo · que + sujeto · où para un lugar o un momento"
          }
        ],
        seg: [
          {
            es: "Tercera: la relativa, una mini frase con su propio verbo. Qui si sigue un verbo.",
            p: 1
          },
          {
            fr: "le chat qui dort",
            p: 1
          },
          {
            es: "Que si sigue un sujeto.",
            p: 2
          },
          {
            fr: "le livre que je lis",
            p: 2
          },
          {
            es: "Y où para un lugar, o un momento: el día en que.",
            p: 3
          },
          {
            fr: "la ville où je suis né",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Condensar",
        titulo: "Dos frases → un grupo nominal",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            mal: "La ville a des rues. Les rues sont étroites.",
            bien: "La ville a des rues étroites.",
            es: "La segunda frase se vuelve un adjetivo."
          },
          {
            p: 2,
            mal: "J'ai lu un article. Il porte sur le climat.",
            bien: "J'ai lu un article sur le climat.",
            es: "Se vuelve un complemento del nombre."
          },
          {
            p: 3,
            mal: "Je lis un roman. Ce roman raconte l'exil.",
            bien: "Je lis un roman qui raconte l'exil.",
            es: "Se vuelve una relativa."
          }
        ],
        seg: [
          {
            es: "Para qué sirve todo esto: para condensar. Escribir mejor es decir lo mismo con menos frases.",
            p: 1
          },
          {
            fr: "La ville a des rues étroites.",
            p: 1
          },
          {
            fr: "J'ai lu un article sur le climat.",
            p: 2
          },
          {
            fr: "Je lis un roman qui raconte l'exil.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En la vida real",
        titulo: "Corregir un párrafo",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Lisez-moi votre première phrase, Laura.",
            es: "Léame su primera frase, Laura."
          },
          {
            p: 2,
            fr: "La ville a des rues. Les rues sont étroites. Elles sont pleines de cafés.",
            es: "La ciudad tiene calles. Las calles son estrechas. Están llenas de cafés."
          },
          {
            p: 3,
            fr: "C'est correct, mais c'est haché. Mettez tout dans un seul groupe nominal.",
            es: "Es correcto, pero entrecortado. Póngalo todo en un solo grupo nominal."
          },
          {
            p: 4,
            fr: "La ville a des rues étroites pleines de cafés.",
            es: "La ciudad tiene calles estrechas llenas de cafés."
          }
        ],
        seg: [
          {
            es: "Escucha cómo suena en una conversación de verdad."
          },
          {
            fr: "Lisez-moi votre première phrase, Laura.",
            p: 1
          },
          {
            fr: "La ville a des rues. Les rues sont étroites. Elles sont pleines de cafés.",
            p: 2
          },
          {
            fr: "C'est correct, mais c'est haché. Mettez tout dans un seul groupe nominal.",
            p: 3
          },
          {
            fr: "La ville a des rues étroites pleines de cafés.",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Contraste con el español",
        titulo: "Calles estrechas… des rues étroites",
        mz: "m2d/alerta",
        items: [
          {
            p: 1,
            regla: "Español: calles estrechas · francés: des rues étroites (concuerda en género y número)"
          },
          {
            p: 2,
            regla: "Español: el libro que leo · francés: le livre que je lis (no qui: sigue un sujeto)"
          },
          {
            p: 3,
            regla: "Español: la ciudad donde nací · francés: la ville où je suis né (no que)"
          }
        ],
        seg: [
          {
            es: "Como en español, el adjetivo concuerda. Pero en francés la concordancia se escribe aunque no se oiga: étroites.",
            p: 1
          },
          {
            es: "El español usa que para todo. El francés distingue qui y que.",
            p: 2
          },
          {
            es: "Y donde es où, nunca que.",
            p: 3
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Les rues étroit du vieux quartier sont calmes.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Les rues étroites du vieux quartier sont calmes.",
          es: "Concuerda con rues."
        },
        seg: [
          {
            es: "Primera trampa: el adjetivo sin concordar.",
            p: 1
          },
          {
            es: "Rues es femenino plural. Se dice:",
            p: 2
          },
          {
            fr: "Les rues étroites du vieux quartier sont calmes.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "C'est le livre qui je préfère.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "C'est le livre que je préfère.",
          es: "Sigue un sujeto: que."
        },
        seg: [
          {
            es: "Segunda trampa: qui delante de un sujeto.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "C'est le livre que je préfère.",
            p: 2
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/pensativo",
        q: "Une: «C'est une ville. J'ai étudié dans cette ville.»",
        o: [
          "C'est une ville où j'ai étudié.",
          "C'est une ville que j'ai étudié."
        ],
        a: 0,
        bien: "¡Eso es! Où.",
        mal: "Un lugar: où.",
        seg: [
          {
            es: "Te toca. Une las dos frases en una."
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/confundido",
        q: "¿Cuál es el núcleo de «une tasse à café»?",
        o: [
          "tasse",
          "café"
        ],
        a: 0,
        bien: "¡Muy bien! Tasse.",
        mal: "À café es una expansión: dice para qué sirve la taza.",
        seg: [
          {
            es: "Una más. ¿Cuál es el núcleo de une tasse à café?"
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
            fr: "cape",
            es: "Encuentra el núcleo de «une grande cape de pourpre brodée d'hermine»."
          },
          {
            p: 2,
            fr: "Je lis un roman qui raconte l'exil.",
            es: "Une: «Je lis un roman. Ce roman raconte l'exil."
          },
          {
            p: 3,
            fr: "C'est une ville où j'ai étudié.",
            es: "Une: «C'est une ville. J'ai étudié dans cette ville."
          }
        ],
        seg: [
          {
            es: "Ahora tú. Escucha cada frase y repítela en voz alta."
          },
          {
            fr: "cape",
            p: 1
          },
          {
            es: "Otra vez.",
            p: 1
          },
          {
            fr: "cape",
            p: 1
          },
          {
            fr: "Je lis un roman qui raconte l'exil.",
            p: 2
          },
          {
            es: "Otra vez.",
            p: 2
          },
          {
            fr: "Je lis un roman qui raconte l'exil.",
            p: 2
          },
          {
            fr: "C'est une ville où j'ai étudié.",
            p: 3
          },
          {
            es: "Otra vez.",
            p: 3
          },
          {
            fr: "C'est une ville où j'ai étudié.",
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
                "Expansión",
                "Ejemplo"
              ],
              [
                "adjetivo",
                "des rues étroites"
              ],
              [
                "complemento del nombre",
                "une table en bois · une tasse à café"
              ],
              [
                "relativa",
                "qui dort · que je lis · où je suis né"
              ],
              [
                "condensar",
                "deux phrases → un groupe nominal"
              ]
            ]
          },
          {
            p: 2,
            regla: "El núcleo manda: con él concuerdan el adjetivo y el verbo"
          }
        ],
        seg: [
          {
            es: "Repasemos.",
            p: 1
          },
          {
            es: "Busca el núcleo quitando capas.",
            p: 1
          },
          {
            es: "Y condensa con adjetivo, complemento o relativa. ¡Ahora, a practicar!",
            p: 2
          }
        ]
      }
    ]
  },

  contexto: {
    titulo: "Corregir un párrafo",
    img: "bg-biblioteca",
    yo: "laura",
    escena: "Laura, estudiante de licenciatura, lee a su tutora la primera frase de un ensayo sobre su ciudad. La frase es correcta, pero suena entrecortada.",
    pj: {
      tutrice: { n: "Madame Roche", voz: "fr-FR-DeniseNeural", rol: "la tutora" },
      laura:   { n: "Laura", voz: "fr-FR-VivienneMultilingualNeural", rol: "estudiante" }
    },
    lineas: [
      ["tutrice", "Lisez-moi votre première phrase, Laura.", "Léame su primera frase, Laura."],
      ["laura", "La ville a des rues. Les rues sont étroites. Elles sont pleines de cafés.", "La ciudad tiene calles. Las calles son estrechas. Están llenas de cafés."],
      ["tutrice", "C'est correct, mais c'est haché. Mettez tout dans un seul groupe nominal.", "Es correcto, pero entrecortado. Póngalo todo en un solo grupo nominal."],
      ["laura", "La ville a des rues étroites pleines de cafés.", "La ciudad tiene calles estrechas llenas de cafés."],
      ["tutrice", "Beaucoup mieux. Et si vous ajoutez une relative ?", "Mucho mejor. ¿Y si añade una relativa?"],
      ["laura", "La ville a des rues étroites pleines de cafés où les étudiants se retrouvent le soir.", "La ciudad tiene calles estrechas llenas de cafés donde los estudiantes se reúnen por la noche."],
      ["tutrice", "Voilà une phrase d'écrit académique : précise et sans répétition.", "Esa es una frase de escritura académica: precisa y sin repeticiones."]
    ],
    fijate: "Fíjate: Laura no añadió ideas nuevas. Metió las mismas ideas dentro del grupo nominal «des rues…». Eso es lo que vas a aprender: el núcleo y sus expansiones."
  },

  ensena: [
    {
      id: "partes", tipo: "gram", titulo: "Las piezas del grupo nominal",
      idea: "Un grupo nominal es un nombre con todo lo que lo acompaña, como «el gato negro de mi vecina».",
      intro: "En francés se llama groupe nominal (GN). Tiene una pieza central, el núcleo, y piezas alrededor.",
      analiza: { titulo: "Toca el altavoz para escuchar cada grupo", frases: [
        { partes: [["un", "det"], ["chat", "nucleo"]], es: "un gato" },
        { partes: [["le", "det"], ["chat", "nucleo"], ["noir", "adj"]], es: "el gato negro" },
        { partes: [["un", "det"], ["livre", "nucleo"], ["de recettes", "cn"]], es: "un libro de recetas" },
        { partes: [["la", "det"], ["maison", "nucleo"], ["que j'ai achetée", "rel"]], es: "la casa que compré" }
      ]},
      regla: [
        "El núcleo (le noyau) es el nombre principal: chat, livre, maison.",
        "El determinante (le déterminant) va delante y dice cuál o cuántos: le, un, ce, mon, nos.",
        "Todo lo demás son expansiones: añaden información y se pueden quitar.",
        "¿Dudas cuál es el núcleo? Es el nombre con el que concuerda el verbo: les montagnes de ce monde sont… → montagnes."
      ]
    },
    {
      id: "expansiones", tipo: "gram", titulo: "Las tres expansiones",
      idea: "Hay tres maneras de añadir información a un nombre: un adjetivo, un complemento con preposición o una relativa.",
      intro: "Cada una se reconoce por su forma. Mira los colores.",
      analiza: { titulo: "Mira cómo se acumulan", frases: [
        { partes: [["une", "det"], ["région", "nucleo"], ["montagneuse", "adj"]], es: "una región montañosa" },
        { partes: [["une", "det"], ["tasse", "nucleo"], ["à café", "cn"]], es: "una taza para café" },
        { partes: [["l'", "det"], ["immense", "adj"], ["traîne", "nucleo"], ["de sa cape", "cn"]], es: "la inmensa cola de su capa" },
        { partes: [["une", "det"], ["grande", "adj"], ["cape", "nucleo"], ["de pourpre", "cn"], ["brodée d'hermine", "adj"]], es: "una gran capa púrpura bordada de armiño" }
      ]},
      regla: [
        "Adjetivo (l'adjectif): una palabra que cambia con el nombre (femenino, plural): des rues étroites. Los participios funcionan igual: une cape brodée.",
        "Complemento del nombre (le complément du nom): preposición + nombre, como en español «libro de recetas»: une table en bois.",
        "Relativa (la relative): una mini-frase con su propio verbo, que empieza por qui, que u où: la maison que j'ai achetée.",
        "Ojo con la preposición: une tasse à café es para café; une tasse de café está llena. Y aux = à + les: la fille aux yeux verts (la de los ojos verdes)."
      ]
    },
    {
      id: "relativas", tipo: "uso", titulo: "La relativa: qui, que, où",
      idea: "qui si después viene un verbo; que si después viene un sujeto; où si hablas de un lugar o un momento.",
      intro: "Para elegir, mira qué viene justo después del hueco.",
      grupos: [
        { tag: "qui", t: "después viene un verbo", img: "m2d/senalar", items: ["un chat ___ dort au soleil", "un roman ___ raconte l'exil", "les étudiants ___ arrivent"] },
        { tag: "que", t: "después viene un sujeto", img: "ic2/libro", items: ["le livre ___ je lis", "la maison ___ j'ai achetée", "le mouton ___ tu veux"] },
        { tag: "où", t: "un lugar o un momento", img: "ic2/mundo", items: ["la ville ___ je suis né", "la bibliothèque ___ je travaille", "le jour ___ il est arrivé"] }
      ],
      toca: "Toca cada grupo para ver qué pronombre lleva.",
      regla: [
        "qui + verbo: le chat qui dort (el gato que duerme).",
        "que + sujeto + verbo: le livre que je lis (el libro que leo).",
        "où = «donde» o «en que»: la ville où je suis né, le jour où il est arrivé."
      ]
    },
    {
      id: "condensar", tipo: "ojo", titulo: "Condensar: de dos frases a una",
      idea: "Escribir mejor es decir lo mismo con menos frases: mete la segunda frase dentro del grupo nominal.",
      intro: "Así se transforma un texto entrecortado en uno académico.",
      etq: ["Antes", "Después"],
      toca: "Toca cada tarjeta para ver la versión condensada.",
      errores: [
        ["La ville a des rues. Les rues sont étroites.", "La ville a des rues étroites.", "La segunda frase solo describía las calles: se vuelve un adjetivo."],
        ["J'ai lu un article. Il porte sur le climat.", "J'ai lu un article sur le climat.", "Se vuelve un complemento del nombre con sur."],
        ["Je lis un roman. Ce roman raconte l'exil.", "Je lis un roman qui raconte l'exil.", "Después viene un verbo (raconte): qui."],
        ["C'est une ville. J'ai étudié dans cette ville.", "C'est une ville où j'ai étudié.", "Es un lugar: où."]
      ]
    },
    {
      id: "ojo",
      tipo: "ojo",
      titulo: "Errores frecuentes",
      intro: "Tres errores que cometemos casi todos los hispanohablantes. Cázalos uno por uno.",
      errores: [
        {
          sit: "Laura describe Pamplona:",
          frase: "Les rues étroit du vieux quartier sont calmes.",
          mal: "étroit",
          bien: "étroites",
          porque: "En español la concordancia se oye; en francés, a veces solo se escribe.",
          truco: "El adjetivo concuerda con el núcleo: rues → étroites."
        },
        {
          sit: "Laura recomienda:",
          frase: "C'est le livre qui je préfère.",
          mal: "qui",
          bien: "que",
          porque: "En español «que» sirve para todo.",
          truco: "Si sigue un sujeto (je), que."
        },
        {
          sit: "Laura presenta Pamplona:",
          frase: "C'est la ville que je suis né.",
          mal: "que",
          bien: "où",
          porque: "Traducimos «la ciudad que nací», sin pensar en el lugar.",
          truco: "Para un lugar: où, como «donde»."
        }
      ]
    }
  ],
  ejemplos: [
    {
      sit: "Encuentra el núcleo de «une grande cape de pourpre brodée d'hermine».",
      resp: "cape",
      porque: "Todo lo demás depende de cape.",
      pasos: [
        {
          q: "¿Qué quitas primero?",
          ops: [
            "el determinante: une",
            "cape"
          ],
          ok: 0
        },
        {
          q: "¿Y luego?",
          ops: [
            "adjetivos y lo que empieza por preposición",
            "el nombre"
          ],
          ok: 0
        },
        {
          q: "¿Qué queda?",
          ops: [
            "cape",
            "hermine"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "Une: «Je lis un roman. Ce roman raconte l'exil.»",
      resp: "Je lis un roman qui raconte l'exil.",
      porque: "La segunda frase se vuelve una relativa.",
      pasos: [
        {
          q: "¿Qué expansión usas?",
          ops: [
            "una relativa",
            "un adjetivo"
          ],
          ok: 0
        },
        {
          q: "¿Qué viene después?",
          ops: [
            "un verbo: raconte",
            "un sujeto"
          ],
          ok: 0
        },
        {
          q: "¿Qui o que?",
          ops: [
            "qui",
            "que"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "Une: «C'est une ville. J'ai étudié dans cette ville.»",
      resp: "C'est une ville où j'ai étudié.",
      porque: "Un lugar: où.",
      pasos: [
        {
          q: "¿Qué expansión usas?",
          ops: [
            "una relativa",
            "un complemento"
          ],
          ok: 0
        },
        {
          q: "¿Es un lugar?",
          ops: [
            "sí",
            "no"
          ],
          ok: 0
        },
        {
          q: "¿Qué relativo?",
          ops: [
            "où",
            "que"
          ],
          ok: 0
        }
      ]
    }
  ],

  comprueba: [
    { q: "En «le chat noir», el núcleo es…", o: ["chat", "noir", "le"], a: 0, b: "partes",
      porque: "chat es el nombre; le es el determinante y noir, el adjetivo." },
    { q: "Para encontrar el núcleo de un grupo largo, buscas…", o: ["el nombre que manda la concordancia", "el último nombre del grupo", "el nombre más largo"], a: 0, b: "partes",
      porque: "El verbo y los adjetivos concuerdan con el núcleo." },
    { q: "«de recettes» en «un livre de recettes» es…", o: ["un complemento del nombre", "una relativa", "un adjetivo"], a: 0, b: "expansiones",
      porque: "Empieza por una preposición (de) seguida de un nombre." },
    { q: "«le livre ___ je lis»: si después del hueco viene un sujeto (je), el pronombre es…", o: ["que", "qui", "où"], a: 0, b: "relativas",
      porque: "que: la mini-frase ya tiene sujeto (je) y el libro es lo leído." },
    { q: "¿Para qué sirve condensar en un grupo nominal en un texto académico?", o: ["Para decir lo mismo con menos frases y sin repeticiones", "Para usar palabras más difíciles", "Para alargar el texto"], a: 0, b: "condensar",
      porque: "Un grupo nominal rico evita repeticiones y frases entrecortadas." }
  ],

  practica: [
    /* 6 · guiada */
    { fase: "guiada", c: ["gn-noyau"], k: "choice", ask: "Elige el núcleo del grupo nominal.", q: "« les montagnes de ce monde »", o: ["montagnes", "monde", "ce"], a: 0,
      pista: "Busca el nombre que manda la concordancia: ¿cuál es plural, como les?",
      why: "<b>montagnes</b>: les montagnes… sont. «de ce monde» es un complemento del nombre." },
    { fase: "guiada", c: ["gn-adj", "gn-cn", "gn-rel"], k: "sort", ask: "Clasifica cada expansión.", q: "¿Qué expansión es?",
      cats: ["Adjetivo", "Complemento del nombre", "Relativa"],
      items: [["étroites", 0], ["brodée d'hermine", 0], ["de pourpre", 1], ["à café", 1], ["que tu veux", 2], ["où je suis né", 2]],
      pista: "¿Empieza por preposición? ¿Por qui, que u où? ¿O es una palabra que concuerda con el nombre?",
      why: "Adjetivos: <i>étroites, brodée d'hermine</i>. Complementos del nombre: <i>de pourpre, à café</i>. Relativas: <i>que tu veux, où je suis né</i>." },
    { fase: "guiada", c: ["gn-rel"], k: "choice", ask: "Elige el pronombre relativo.", q: "Je lis un roman ___ raconte l'exil.", o: ["qui", "que", "où"], a: 0,
      pista: "¿Qué viene después del hueco: un sujeto o un verbo?",
      why: "Después viene el verbo <i>raconte</i> y el roman es quien cuenta: <b>qui</b>." },
    { fase: "guiada", c: ["gn-cn"], k: "fill", ask: "Completa con la preposición.", ctx: "Quieres decir «una taza para café».", q: "une tasse ___ café", acc: ["à"],
      pista: "La preposición que indica para qué sirve algo.",
      why: "<b>une tasse à café</b>: à indica el uso. <i>Une tasse de café</i> es una taza llena de café." },
    { fase: "guiada", c: ["gn-enrichir", "gn-adj"], k: "order", ask: "Ordena el grupo nominal: «calles estrechas llenas de cafés».",
      tokens: ["des", "rues", "étroites", "pleines", "de", "cafés"],
      pista: "Determinante, núcleo, adjetivo y lo demás.",
      why: "<b>des rues étroites pleines de cafés</b>: determinante + núcleo + adjetivos con su complemento." },

    /* 7 · sin ayuda */
    { fase: "indep", c: ["gn-noyau"], k: "choice", ask: "¿Cuál es el núcleo?", q: "« l'immense traîne de sa cape »", o: ["traîne", "cape", "immense"], a: 0,
      why: "<b>traîne</b> es el núcleo; <i>immense</i> es un adjetivo y <i>de sa cape</i>, un complemento del nombre." },
    { fase: "indep", c: ["gn-rel"], k: "choice", ask: "Elige el pronombre relativo.", q: "C'est la ville ___ j'ai grandi.", o: ["où", "que", "qui"], a: 0,
      why: "Es un lugar: <b>où</b> (la ciudad donde crecí)." },
    { fase: "indep", c: ["gn-rel"], k: "choice", ask: "Elige el pronombre relativo.", q: "Voici le mouton ___ tu veux.", o: ["que", "qui", "où"], a: 0,
      why: "Después del hueco viene un sujeto (<i>tu</i>) y el cordero es lo que quieres: <b>que</b>." },
    { fase: "indep", c: ["gn-adj"], k: "spot", ask: "Encuentra el error de concordancia y corrígelo.", s: "Les rues [étroit] du vieux quartier sont calmes .", fix: "étroites",
      why: "El adjetivo concuerda con <i>rues</i> (femenino plural): <b>étroites</b>." },
    { fase: "indep", c: ["gn-cn"], k: "match", ask: "Une cada grupo nominal con su sentido.", q: "Francés → español",
      pairs: [["une tasse à café", "una taza para café"], ["une tasse de café", "una taza con café"], ["une table en bois", "una mesa de madera"], ["la fille aux yeux verts", "la chica de ojos verdes"]],
      why: "La preposición del complemento cambia el sentido: <i>à</i> (uso o característica), <i>de</i> (contenido), <i>en</i> (material)." },
    { fase: "indep", c: ["gn-enrichir"], k: "listen", say: "des rues étroites pleines de cafés", acc: ["des rues étroites pleines de cafés"], num: false, dict: true,
      ask: "Escucha el grupo nominal y escríbelo completo. Puedes oírlo despacio.",
      why: "Era <b>des rues étroites pleines de cafés</b>: núcleo <i>rues</i> con dos adjetivos." },
    { fase: "indep", c: ["gn-det"], k: "fill", ask: "Completa con un determinante demostrativo («esta»).", q: "___ réforme est ambitieuse.", acc: ["Cette", "cette"],
      why: "<i>réforme</i> es femenino singular: <b>cette</b>." },

    /* 8 · aplicación: la introducción de un ensayo */
    { fase: "aplica", c: ["gn-enrichir", "gn-rel"], k: "choice", ask: "Elige la versión más académica.", ctx: "Escribes la introducción de un ensayo sobre tu ciudad.",
      q: "¿Cuál condensa mejor la información?", o: ["Pamplona est une ville universitaire qui accueille des milliers d'étudiants.", "Pamplona est une ville. Elle est universitaire. Elle accueille des étudiants."], a: 0,
      why: "La primera mete todo en un grupo nominal: adjetivo (<i>universitaire</i>) y relativa con <b>qui</b>." },
    { fase: "aplica", c: ["gn-rel"], k: "order", ask: "Ordena: «un proyecto que transforma el barrio».", ctx: "Presentas un proyecto urbano.",
      tokens: ["un", "projet", "qui", "transforme", "le", "quartier"],
      why: "<b>un projet qui transforme le quartier</b>: el proyecto es el sujeto de <i>transforme</i> → qui." },
    { fase: "aplica", c: ["gn-cn"], k: "fill", ask: "Completa el título de tu ponencia.", ctx: "«Las políticas de vivienda en Colombia»", q: "Les politiques ___ logement en Colombie", acc: ["de"],
      why: "Complemento del nombre con <b>de</b>: <i>les politiques de logement</i>." },
    { fase: "aplica", c: ["gn-adj", "gn-enrichir"], k: "choice", ask: "Une las dos frases.", ctx: "«L'université a un campus. Ce campus est très vert.»",
      q: "Versión condensada:", o: ["L'université a un campus très vert.", "L'université a un campus que très vert.", "L'université a un campus où très vert."], a: 0,
      why: "La segunda frase solo describe el campus: se vuelve un adjetivo, <b>très vert</b>." },

    /* 9 · demuestra lo que sabes */
    { fase: "dominio", c: ["gn-noyau"], k: "choice", ask: "¿Cuál es el núcleo?", q: "« des trésors cachés dans les replis du temps »", o: ["trésors", "replis", "temps"], a: 0,
      why: "<b>trésors</b>: <i>cachés</i> concuerda con él (masculino plural)." },
    { fase: "dominio", c: ["gn-rel"], k: "choice", ask: "Elige el pronombre relativo.", q: "La bibliothèque ___ je travaille ferme à 20 h.", o: ["où", "que", "qui"], a: 0,
      why: "Es un lugar: <b>où</b>." },
    { fase: "dominio", c: ["gn-adj", "gn-cn", "gn-rel"], k: "sort", ask: "Clasifica cada expansión.", q: "¿Qué expansión es?",
      cats: ["Adjetivo", "Complemento del nombre", "Relativa"],
      items: [["solennelle", 0], ["dorée", 0], ["de sa cape", 1], ["en bois", 1], ["qui dort", 2], ["que j'ai achetée", 2]],
      why: "Adjetivos: <i>solennelle, dorée</i>. Complementos del nombre: <i>de sa cape, en bois</i>. Relativas: <i>qui dort, que j'ai achetée</i>." },
    { fase: "dominio", c: ["gn-det"], k: "fill", ask: "Completa con un posesivo («nuestros»).", q: "___ étudiants de master présentent leur mémoire.", acc: ["Nos", "nos"],
      why: "<b>Nos</b> étudiants: posesivo plural de <i>nous</i>." },
    { fase: "dominio", c: ["gn-rel"], k: "spot", ask: "Encuentra el error y corrígelo.", s: "C'est le livre [qui] je préfère .", fix: "que",
      why: "Después viene un sujeto (<i>je</i>) y el libro es lo preferido: <b>que</b>." },
    { fase: "dominio", c: ["gn-enrichir", "gn-cn"], k: "choice", ask: "Une las dos frases.", q: "«J'ai lu un article. Il porte sur le climat.»",
      o: ["J'ai lu un article sur le climat.", "J'ai lu un article qui le climat.", "J'ai lu un climat sur l'article."], a: 0,
      why: "La segunda frase se vuelve un complemento del nombre: <b>un article sur le climat</b>." }
  ],

  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche", "Pamplona", "Colombie"], previo: ["trésors"] }
};

/* Lección 2 · Los complementos del verbo (retoma el grupo nominal: un COD casi siempre es un grupo nominal) */
window.__ENSENA["compl"] = {
  v: 1, arts: false, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Les compléments du verbe",
  roles: { suj: "sujeto", verbe: "verbo", cod: "COD", coi: "COI", cc: "circunstancial", attr: "atributo" },
  objetivo: {
    que: "Vas a distinguir el complemento directo, el indirecto y el circunstancial, y a saber qué verbos llevan preposición en francés.",
    corto: "¿Con o sin preposición? Hoy aprendes a saberlo.",
    podras: [
      "Reconocer un COD, un COI y un complemento circunstancial con preguntas sencillas.",
      "No confundir un COD con un atributo del sujeto.",
      "Saber qué verbos llevan à y cuáles no, aunque en español sea distinto.",
      "Corregir construcciones calcadas del español en tus textos."
    ],
    iconos: ["m2d/senalar", "ic2/pregunta", "m2d/pensativo", "m2d/escribiendo"],
    previos: ["El grupo nominal: su núcleo y sus expansiones (lección anterior)."],
    capacidad: "Ahora puedes analizar los complementos de un verbo y construirlo bien, sin calcos del español."
  },
  requiere: ["gn-noyau", "gn-rel"],
  recupera: ["gn-noyau", "gn-rel"],
  conceptos: {
    "v-cod":   { n: "El complemento directo (COD)", b: "tipos" },
    "v-coi":   { n: "El complemento indirecto (COI)", b: "tipos" },
    "v-cc":    { n: "El complemento circunstancial", b: "tipos" },
    "v-attr":  { n: "No confundir: el atributo del sujeto", b: "attr" },
    "v-trans": { n: "Cómo se construye cada verbo", b: "construccion" }
  },

  video: {
    titulo: "Los complementos del verbo",
    voz: "es-CO-SalomeNeural",
    escenas: [
      {
        v: "persona",
        cap: "Para qué sirve",
        fondo: "esc/sala-examen-oral",
        img: "pj/roche-explicando",
        fr: "Le ministre a parlé aux journalistes.",
        es: "El ministro habló con los periodistas.",
        nota: "Una frase que no suena bien",
        seg: [
          {
            es: "Laura escribió: le ministre a parlé les journalistes. La tutora Roche le señala el error."
          },
          {
            fr: "Le ministre a parlé aux journalistes.",
            p: 1
          },
          {
            es: "En francés se habla a alguien: parler à. Cada verbo decide si lleva preposición o no, y eso decide el pronombre que vendrá después. Hoy aprendes a analizarlo.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "COD",
        titulo: "Sin preposición: complément d'objet direct",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Le gouvernement annonce une réforme.",
            es: "El gobierno anuncia una reforma."
          },
          {
            p: 2,
            fr: "Elle mange du pain.",
            es: "Ella come pan."
          },
          {
            p: 3,
            regla: "el COD va pegado al verbo y responde a quoi ? o qui ? · du pain: du es «algo de», no preposición"
          }
        ],
        seg: [
          {
            es: "El complemento directo va pegado al verbo, sin preposición. Responde a qué.",
            p: 1
          },
          {
            fr: "Le gouvernement annonce une réforme.",
            p: 1
          },
          {
            es: "Cuidado: en du pain, du no es una preposición. Significa algo de. Es COD.",
            p: 2
          },
          {
            fr: "Elle mange du pain.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "COI",
        titulo: "Con à o de: complément d'objet indirect",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Laura répond au professeur.",
            es: "Laura le responde al profesor."
          },
          {
            p: 2,
            fr: "Le médecin parle à l'infirmière.",
            es: "El médico habla con la enfermera."
          },
          {
            p: 3,
            regla: "à + le = au · à + les = aux · de + le = du · de + les = des"
          }
        ],
        seg: [
          {
            es: "El indirecto lleva à o de delante. Responde a quién.",
            p: 1
          },
          {
            fr: "Laura répond au professeur.",
            p: 1
          },
          {
            fr: "Le médecin parle à l'infirmière.",
            p: 2
          },
          {
            es: "Recuerda las contracciones: au, aux, du, des.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Circunstancial y atributo",
        titulo: "Dónde, cuándo, cómo · después de être",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Mes amis vont à Paris.",
            es: "Mis amigos van a París."
          },
          {
            p: 2,
            fr: "Elle semble fatiguée.",
            es: "Parece cansada."
          },
          {
            p: 3,
            regla: "circunstancial: dónde, cuándo, cómo · atributo: tras être, sembler, devenir, cambia con el sujeto"
          }
        ],
        seg: [
          {
            es: "El circunstancial dice dónde, cuándo o cómo. À Paris no es un COI: es un lugar.",
            p: 1
          },
          {
            fr: "Mes amis vont à Paris.",
            p: 1
          },
          {
            es: "Y después de être, sembler o devenir no hay complemento: hay un atributo, que describe al sujeto y concuerda con él.",
            p: 2
          },
          {
            fr: "Elle semble fatiguée.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "El verbo decide",
        titulo: "No siempre como en español",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "J'attends le bus.",
            es: "Espero el bus. (attendre: sin à)"
          },
          {
            p: 2,
            fr: "Il téléphone à sa mère.",
            es: "Llama a su mamá. (téléphoner: con à)"
          },
          {
            p: 3,
            fr: "Je cherche un appartement.",
            es: "Busco un apartamento. (chercher: sin preposición)"
          },
          {
            p: 4,
            regla: "attendre, chercher, écouter, regarder: COD · téléphoner, répondre, parler: à"
          }
        ],
        seg: [
          {
            es: "Cada verbo francés tiene su construcción. Esperar a alguien: attendre, sin à.",
            p: 1
          },
          {
            fr: "J'attends le bus.",
            p: 1
          },
          {
            es: "Llamar: téléphoner à.",
            p: 2
          },
          {
            fr: "Il téléphone à sa mère.",
            p: 2
          },
          {
            es: "Buscar: chercher, sin por.",
            p: 3
          },
          {
            fr: "Je cherche un appartement.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En la vida real",
        titulo: "Una frase que no suena bien",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Vous écrivez : « Le ministre a parlé les journalistes. » Qu'est-ce qui ne va pas ?",
            es: "Usted escribe: «El ministro ha hablado los periodistas». ¿Qué no está bien?"
          },
          {
            p: 2,
            fr: "Il manque quelque chose… On parle à quelqu'un !",
            es: "Falta algo… ¡Se le habla a alguien!"
          },
          {
            p: 3,
            fr: "Exactement : « Le ministre a parlé aux journalistes. » C'est un complément d'objet indirect.",
            es: "Exacto: «El ministro habló con los periodistas». Es un complemento indirecto."
          },
          {
            p: 4,
            fr: "Et dans « Le ministre a annoncé une réforme », il n'y a pas de préposition.",
            es: "Y en «El ministro anunció una reforma» no hay preposición."
          }
        ],
        seg: [
          {
            es: "Escucha cómo suena en una conversación de verdad."
          },
          {
            fr: "Vous écrivez : « Le ministre a parlé les journalistes. » Qu'est-ce qui ne va pas ?",
            p: 1
          },
          {
            fr: "Il manque quelque chose… On parle à quelqu'un !",
            p: 2
          },
          {
            fr: "Exactement : « Le ministre a parlé aux journalistes. » C'est un complément d'objet indirect.",
            p: 3
          },
          {
            fr: "Et dans « Le ministre a annoncé une réforme », il n'y a pas de préposition.",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Contraste con el español",
        titulo: "Espero a mi amigo… j'attends mon ami",
        mz: "m2d/alerta",
        items: [
          {
            p: 1,
            regla: "Español: espero a mi amigo · francés: j'attends mon ami (sin à)"
          },
          {
            p: 2,
            regla: "Español: busco un piso · francés: je cherche un appartement (no cherche pour)"
          },
          {
            p: 3,
            regla: "Español: responden las críticas · francés: ils répondent aux critiques (répondre à)"
          }
        ],
        seg: [
          {
            es: "La a personal del español no existe en francés: j'attends mon ami.",
            p: 1
          },
          {
            es: "Chercher ya significa buscar. Sin pour.",
            p: 2
          },
          {
            es: "Y répondre siempre lleva à, aunque en español a veces no.",
            p: 3
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Le ministre a parlé les journalistes hier.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Le ministre a parlé aux journalistes hier.",
          es: "parler à → aux."
        },
        seg: [
          {
            es: "Primera trampa: parler sin à.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Le ministre a parlé aux journalistes hier.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "L'auteur cherche pour une solution.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "L'auteur cherche une solution.",
          es: "chercher: sin preposición."
        },
        seg: [
          {
            es: "Segunda trampa: chercher pour.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "L'auteur cherche une solution.",
            p: 2
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/pensativo",
        q: "«Espero el autobús.»",
        o: [
          "J'attends le bus.",
          "J'attends au bus."
        ],
        a: 0,
        bien: "¡Eso es! J'attends le bus.",
        mal: "Attendre va sin preposición.",
        seg: [
          {
            es: "Te toca. ¿Cómo dices espero el autobús?"
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/confundido",
        q: "En «Elle semble fatiguée», ¿qué es fatiguée?",
        o: [
          "un atributo",
          "un COD"
        ],
        a: 0,
        bien: "¡Muy bien! Un atributo.",
        mal: "Después de sembler hay un atributo: describe al sujeto.",
        seg: [
          {
            es: "Una más. En elle semble fatiguée, ¿qué es fatiguée?"
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
            fr: "Laura répond au professeur.",
            es: "Analiza «Laura répond au professeur»."
          },
          {
            p: 2,
            fr: "J'attends le bus.",
            es: "Escribe «Espero el autobús» en francés."
          },
          {
            p: 3,
            fr: "Il donne un livre à son frère.",
            es: "Analiza «Il donne un livre à son frère»."
          }
        ],
        seg: [
          {
            es: "Ahora tú. Escucha cada frase y repítela en voz alta."
          },
          {
            fr: "Laura répond au professeur.",
            p: 1
          },
          {
            es: "Otra vez.",
            p: 1
          },
          {
            fr: "Laura répond au professeur.",
            p: 1
          },
          {
            fr: "J'attends le bus.",
            p: 2
          },
          {
            es: "Otra vez.",
            p: 2
          },
          {
            fr: "J'attends le bus.",
            p: 2
          },
          {
            fr: "Il donne un livre à son frère.",
            p: 3
          },
          {
            es: "Otra vez.",
            p: 3
          },
          {
            fr: "Il donne un livre à son frère.",
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
                "Complemento",
                "Cómo reconocerlo"
              ],
              [
                "COD",
                "sin preposición: annonce une réforme"
              ],
              [
                "COI",
                "con à o de: répond au professeur"
              ],
              [
                "circunstancial",
                "dónde, cuándo, cómo: vont à Paris"
              ],
              [
                "atributo",
                "tras être, sembler: semble fatiguée"
              ]
            ]
          },
          {
            p: 2,
            regla: "Pregunta después del verbo: ¿llega con à o de?"
          }
        ],
        seg: [
          {
            es: "Repasemos.",
            p: 1
          },
          {
            es: "Sin preposición, COD. Con à o de, COI.",
            p: 1
          },
          {
            es: "Y revisa cómo se construye cada verbo. ¡Ahora, a practicar!",
            p: 2
          }
        ]
      }
    ]
  },

  contexto: {
    titulo: "Una frase que no suena bien",
    img: "bg-biblioteca",
    yo: "laura",
    escena: "La tutora de Laura revisa el resumen de un artículo de prensa y encuentra una frase mal construida.",
    pj: {
      tutrice: { n: "Madame Roche", voz: "fr-FR-DeniseNeural", rol: "la tutora" },
      laura:   { n: "Laura", voz: "fr-FR-VivienneMultilingualNeural", rol: "estudiante" }
    },
    lineas: [
      ["tutrice", "Vous écrivez : « Le ministre a parlé les journalistes. » Qu'est-ce qui ne va pas ?", "Usted escribe: «El ministro ha hablado los periodistas». ¿Qué no está bien?"],
      ["laura", "Il manque quelque chose… On parle à quelqu'un !", "Falta algo… ¡Se le habla a alguien!"],
      ["tutrice", "Exactement : « Le ministre a parlé aux journalistes. » C'est un complément d'objet indirect.", "Exacto: «El ministro habló con los periodistas». Es un complemento indirecto."],
      ["laura", "Et dans « Le ministre a annoncé une réforme », il n'y a pas de préposition.", "Y en «El ministro anunció una reforma» no hay preposición."],
      ["tutrice", "Oui : « une réforme » répond à la question quoi ? C'est un complément d'objet direct.", "Sí: «una reforma» responde a ¿qué? Es un complemento directo."],
      ["laura", "Alors je dois toujours vérifier comment le verbe se construit.", "Entonces siempre debo comprobar cómo se construye el verbo."],
      ["tutrice", "Voilà. Et c'est la clé pour choisir le bon pronom dans la prochaine leçon.", "Eso es. Y es la clave para elegir el pronombre correcto en la próxima lección."]
    ],
    fijate: "Fíjate: el error de Laura es muy típico de quienes hablamos español. Cada verbo francés decide si su complemento lleva preposición o no."
  },

  ensena: [
    {
      id: "tipos", tipo: "gram", titulo: "Directo, indirecto y circunstancial",
      idea: "El complemento directo va pegado al verbo; el indirecto lleva à o de delante.",
      intro: "Igual que en español, los verbos tienen complementos. En francés se llaman COD, COI y circunstancial.",
      analiza: { titulo: "Escucha y mira el color de cada complemento", frases: [
        { partes: [["La souris", "suj"], ["mange", "verbe"], ["du pain", "cod"]], fr: "La souris mange du pain.", es: "El ratón come pan" },
        { partes: [["Le médecin", "suj"], ["parle", "verbe"], ["à l'infirmière", "coi"]], fr: "Le médecin parle à l'infirmière.", es: "El médico habla con la enfermera" },
        { partes: [["Mes amis", "suj"], ["vont", "verbe"], ["à Paris", "cc"]], fr: "Mes amis vont à Paris.", es: "Mis amigos van a París" },
        { partes: [["Il", "suj"], ["donne", "verbe"], ["un livre", "cod"], ["à son frère", "coi"]], fr: "Il donne un livre à son frère.", es: "Le da un libro a su hermano" }
      ]},
      regla: [
        "COD (complément d'objet direct): sin preposición. Responde a «¿qué?» o «¿a quién?»: Elle mange du pain.",
        "COI (complément d'objet indirect): con à o de delante: Le médecin parle à l'infirmière.",
        "Circunstancial (complément circonstanciel): dice dónde, cuándo o cómo: Mes amis vont à Paris.",
        "Recuerda: à + le = au, à + les = aux, de + le = du, de + les = des."
      ]
    },
    {
      id: "preguntas", tipo: "uso", titulo: "El truco de la pregunta",
      idea: "Pregunta después del verbo: si la respuesta llega sin preposición es COD; si llega con à o de, es COI.",
      intro: "Toca cada ejemplo y comprueba tu respuesta.",
      grupos: [
        { tag: "COD", t: "sin preposición", img: "ic2/libro", items: ["annoncer une réforme", "inviter ses amis", "manger du pain"] },
        { tag: "COI", t: "con à o de", img: "ic2/amigos", items: ["parler aux journalistes", "penser à l'examen", "parler de son voyage"] }
      ],
      toca: "Toca cada construcción: ¿COD o COI?",
      regla: [
        "Busca el verbo y pregunta: …quoi ? (¿qué?) o …à qui ? (¿a quién?).",
        "Sin preposición → COD. Con à o de → COI.",
        "Cuidado: en manger du pain, du significa «algo de»: no es una preposición, es COD."
      ]
    },
    {
      id: "attr", tipo: "uso", titulo: "No lo confundas: el atributo",
      idea: "Después de être, sembler o devenir no hay complemento directo: la palabra describe al sujeto.",
      intro: "En francés se llama attribut du sujet (atributo del sujeto).",
      pares: [
        ["Ce prince semble beau.", "Ese príncipe parece guapo · describe al príncipe: atributo"],
        ["Ce prince mange une pomme.", "Ese príncipe come una manzana · lo que come: COD"],
        ["Elle est devenue avocate.", "Se hizo abogada · describe a elle: atributo"]
      ],
      regla: ["Truco: el atributo cambia con el sujeto (Elle semble fatiguée); el COD no."]
    },
    {
      id: "construccion", tipo: "gram", titulo: "Cada verbo tiene su construcción",
      idea: "Cada verbo francés decide si lleva preposición, aunque en español sea distinto.",
      intro: "Por eso, al escribir, comprueba cómo se construye el verbo.",
      tabla: [["Francés", "Español", "Construcción"], [
        ["Je parle français.", "Hablo francés.", "sin preposición: COD"],
        ["Je parle à mes amis.", "Hablo con mis amigos.", "con à: COI"],
        ["Je parle.", "Hablo.", "sin complemento"]
      ]],
      regla: [
        "Esperar a alguien → attendre quelqu'un (sin à).",
        "Llamar a alguien → téléphoner à quelqu'un (con à).",
        "Buscar, escuchar, mirar algo → chercher, écouter, regarder quelque chose (sin preposición).",
        "Algunos verbos no llevan complemento: dormir, arriver."
      ]
    },
    {
      id: "ojo",
      tipo: "ojo",
      titulo: "Errores frecuentes",
      intro: "Tres errores que cometemos casi todos los hispanohablantes. Cázalos uno por uno.",
      errores: [
        {
          sit: "Laura escribe:",
          frase: "Le ministre a parlé les journalistes hier.",
          mal: "les",
          bien: "aux",
          porque: "En español «habló a los periodistas» se dice rápido y la a se pierde.",
          truco: "Parler à quelqu'un: aux journalistes."
        },
        {
          sit: "Laura resume:",
          frase: "L'auteur cherche pour une solution.",
          mal: "cherche pour",
          bien: "cherche",
          porque: "Traducimos «busca por».",
          truco: "Chercher ya significa buscar: cherche une solution."
        },
        {
          sit: "Laura resume:",
          frase: "Les chercheurs répondent les critiques.",
          mal: "les critiques",
          bien: "aux critiques",
          porque: "En español «responden las críticas», sin preposición.",
          truco: "Répondre à: aux critiques."
        }
      ]
    }
  ],
  ejemplos: [
    {
      sit: "Analiza «Laura répond au professeur».",
      resp: "Laura répond au professeur.",
      porque: "au professeur es un COI: répondre à + persona.",
      pasos: [
        {
          q: "¿Cuál es el verbo?",
          ops: [
            "répond",
            "professeur"
          ],
          ok: 0
        },
        {
          q: "¿El complemento lleva preposición?",
          ops: [
            "sí: au = à + le",
            "no"
          ],
          ok: 0
        },
        {
          q: "¿Qué es?",
          ops: [
            "un COI",
            "un COD"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "Escribe «Espero el autobús» en francés.",
      resp: "J'attends le bus.",
      porque: "attendre va sin à.",
      pasos: [
        {
          q: "¿Qué verbo?",
          ops: [
            "attendre",
            "espérer"
          ],
          ok: 0
        },
        {
          q: "¿Con preposición?",
          ops: [
            "no",
            "sí: à"
          ],
          ok: 0
        },
        {
          q: "¿Cómo queda?",
          ops: [
            "j'attends le bus",
            "j'attends au bus"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "Analiza «Il donne un livre à son frère».",
      resp: "Il donne un livre à son frère.",
      porque: "un livre es el COD; à son frère, el COI.",
      pasos: [
        {
          q: "¿Qué da?",
          ops: [
            "un livre: COD",
            "à son frère"
          ],
          ok: 0
        },
        {
          q: "¿A quién?",
          ops: [
            "à son frère: COI",
            "un livre"
          ],
          ok: 0
        },
        {
          q: "¿Cuántos complementos hay?",
          ops: [
            "dos",
            "uno"
          ],
          ok: 0
        }
      ]
    }
  ],

  comprueba: [
    { q: "El COD responde a…", o: ["qui ? / quoi ?, sin preposición", "à qui ? / de quoi ?", "où ? / quand ?"], a: 0, b: "tipos",
      porque: "El COD va pegado al verbo, sin preposición." },
    { q: "En «Le médecin parle à l'infirmière», «à l'infirmière» es…", o: ["un COI", "un COD", "un atributo"], a: 0, b: "tipos",
      porque: "Lleva la preposición à y responde a à qui ?" },
    { q: "En «Elle mange du pain», «du pain» es…", o: ["un COD: du es un artículo", "un COI: du es una preposición"], a: 0, b: "preguntas",
      porque: "manger quelque chose: du significa «algo de»." },
    { q: "En «Elle semble fatiguée», «fatiguée» es…", o: ["un atributo del sujeto", "un COD"], a: 0, b: "attr",
      porque: "Después de sembler, la palabra describe al sujeto." },
    { q: "¿Cómo se dice «Espero a mi amigo»?", o: ["J'attends mon ami.", "J'attends à mon ami."], a: 0, b: "construccion",
      porque: "attendre lleva COD: sin à." }
  ],

  practica: [
    /* 6 · guiada */
    { fase: "guiada", c: ["v-cod"], k: "choice", ask: "¿Qué complemento es?", q: "« Le gouvernement annonce une réforme. » — « une réforme » est…", o: ["un COD", "un COI", "un complément circonstanciel"], a: 0,
      pista: "Pregunta: annonce quoi ? ¿La respuesta lleva preposición?",
      why: "<i>annonce quoi ?</i> → une réforme, sin preposición: <b>COD</b>." },
    { fase: "guiada", c: ["v-coi"], k: "choice", ask: "¿Qué complemento es?", q: "« Laura répond au professeur. » — « au professeur » est…", o: ["un COI", "un COD"], a: 0,
      pista: "au = à + le.",
      why: "<i>répond à qui ?</i> → au professeur (à + le): <b>COI</b>." },
    { fase: "guiada", c: ["v-cod", "v-coi"], k: "sort", ask: "Clasifica el complemento de cada verbo.", q: "¿COD o COI?", cats: ["COD", "COI"],
      items: [["lire le journal", 0], ["inviter ses amis", 0], ["manger du pain", 0], ["téléphoner à sa mère", 1], ["parler de son voyage", 1], ["penser à l'examen", 1]],
      pista: "¿El complemento empieza por à o de? Ojo: en manger du pain, du es un artículo.",
      why: "Sin preposición: <i>le journal, ses amis, du pain</i> (COD). Con à o de: <i>à sa mère, de son voyage, à l'examen</i> (COI)." },
    { fase: "guiada", c: ["v-coi", "v-trans"], k: "fill", ask: "Completa con la preposición.", q: "Il téléphone ___ sa mère tous les soirs.", acc: ["à"],
      pista: "téléphoner se construye con una preposición.",
      why: "<b>téléphoner à</b> quelqu'un: COI." },
    { fase: "guiada", c: ["v-attr"], k: "choice", ask: "¿Qué es «beau»?", q: "« Ce prince semble beau. »", o: ["un attribut du sujet", "un COD"], a: 0,
      pista: "¿Describe al sujeto o recibe una acción?",
      why: "Después de <i>sembler</i>, <b>beau</b> describe al príncipe: atributo del sujeto." },

    /* 7 · sin ayuda */
    { fase: "indep", c: ["v-cod", "v-trans"], k: "fill", ask: "Completa (artículo o nada).", ctx: "«Espero el autobús desde hace veinte minutos.»", q: "J'attends ___ bus depuis vingt minutes.", acc: ["le"],
      why: "<i>attendre</i> lleva COD: <b>J'attends le bus</b>, sin à." },
    { fase: "indep", c: ["v-coi"], k: "choice", ask: "¿Qué complemento es?", q: "« Les étudiants parlent de leur mémoire. » — « de leur mémoire » est…", o: ["un COI", "un COD", "un attribut"], a: 0,
      why: "<i>parler de quelque chose</i>: preposición de → <b>COI</b>." },
    { fase: "indep", c: ["v-cc"], k: "choice", ask: "¿Qué complemento es?", q: "« Mes amis vont à Paris. » — « à Paris » est…", o: ["un complément circonstanciel", "un COI"], a: 0,
      why: "Responde a <i>où ?</i>: <b>circunstancial</b> (esencial, porque aller lo necesita)." },
    { fase: "indep", c: ["v-coi", "v-trans"], k: "spot", ask: "Encuentra el error y corrígelo.", s: "Le ministre a parlé [les] journalistes hier .", fix: "aux",
      why: "<i>parler à quelqu'un</i>: à + les = <b>aux</b>." },
    { fase: "indep", c: ["v-attr"], k: "choice", ask: "¿Qué es «avocate»?", q: "« Elle est devenue avocate. »", o: ["un attribut du sujet", "un COD", "un COI"], a: 0,
      why: "Después de <i>devenir</i>, <b>avocate</b> describe al sujeto: atributo." },
    { fase: "indep", c: ["v-trans"], k: "match", ask: "Une cada verbo con su construcción.", q: "Verbo → construcción",
      pairs: [["attendre", "quelqu'un (sin preposición)"], ["téléphoner", "à quelqu'un"], ["parler", "de quelque chose"], ["dormir", "sin complemento"]],
      why: "<i>attendre</i> COD, <i>téléphoner à</i> y <i>parler de</i> COI, <i>dormir</i> intransitivo." },
    { fase: "indep", c: ["v-coi"], k: "listen", say: "Le médecin parle à l'infirmière.", acc: ["Le médecin parle à l'infirmière."], num: false, dict: true,
      ask: "Escucha la frase y escríbela completa. Puedes oírla despacio.",
      why: "<b>Le médecin parle à l'infirmière.</b> El COI empieza por <i>à</i>." },

    /* 8 · aplicación: revisar el resumen de un artículo */
    { fase: "aplica", c: ["v-trans", "v-cod"], k: "choice", ask: "¿Qué frase está bien construida?", ctx: "Revisas tu resumen de un artículo antes de entregarlo.",
      q: "Elige la correcta:", o: ["L'auteur cherche une solution.", "L'auteur cherche pour une solution."], a: 0,
      why: "<i>chercher quelque chose</i>: COD, sin preposición." },
    { fase: "aplica", c: ["v-coi", "v-trans"], k: "choice", ask: "¿Qué frase está bien construida?", ctx: "Sigues revisando el resumen.",
      q: "Elige la correcta:", o: ["Les chercheurs répondent aux critiques.", "Les chercheurs répondent les critiques."], a: 0,
      why: "<i>répondre à</i>: à + les = <b>aux</b>." },
    { fase: "aplica", c: ["v-cod", "v-coi"], k: "order", ask: "Ordena: «La universidad ofrece becas a los estudiantes».", ctx: "Primero el COD, después el COI.",
      tokens: ["L'université", "offre", "des", "bourses", "aux", "étudiants"],
      why: "<b>L'université offre des bourses aux étudiants.</b> offrir quelque chose (COD) à quelqu'un (COI)." },
    { fase: "aplica", c: ["v-cc"], k: "choice", ask: "¿Qué es «Depuis 2020»?", ctx: "«Depuis 2020, le télétravail s'est généralisé.»",
      q: "« Depuis 2020 » est…", o: ["un complément circonstanciel de temps", "un COD"], a: 0,
      why: "Responde a <i>quand ?</i> y se puede mover: <b>circunstancial de tiempo</b>." },

    /* 9 · demuestra lo que sabes */
    { fase: "dominio", c: ["v-cod"], k: "choice", ask: "¿Qué complemento es?", q: "« Nous écoutons la radio chaque matin. » — « la radio » est…", o: ["un COD", "un COI", "un complément circonstanciel"], a: 0,
      why: "<i>écouter quelque chose</i>: <b>COD</b>." },
    { fase: "dominio", c: ["v-coi"], k: "choice", ask: "¿Qué complemento es?", q: "« Elle pense à son avenir. » — « à son avenir » est…", o: ["un COI", "un COD"], a: 0,
      why: "<i>penser à quelque chose</i>: <b>COI</b>." },
    { fase: "dominio", c: ["v-cod", "v-coi", "v-cc"], k: "sort", ask: "Clasifica cada complemento.", q: "¿Qué complemento es?", cats: ["COD", "COI", "Circunstancial"],
      items: [["(il lit) un roman", 0], ["(je bois) du café", 0], ["(elle écrit) à ses parents", 1], ["(il parle) de politique", 1], ["(ils partent) demain", 2], ["(nous travaillons) à la bibliothèque", 2]],
      why: "COD: <i>un roman, du café</i>. COI: <i>à ses parents, de politique</i>. Circunstancial: <i>demain</i> (cuándo), <i>à la bibliothèque</i> (dónde)." },
    { fase: "dominio", c: ["v-attr"], k: "choice", ask: "¿Qué es «solides»?", q: "« Les résultats paraissent solides. »", o: ["un attribut du sujet", "un COD"], a: 0,
      why: "Después de <i>paraître</i>, <b>solides</b> describe a los resultados: atributo." },
    { fase: "dominio", c: ["v-trans", "v-coi"], k: "fill", ask: "Completa.", q: "Il faut répondre ___ questions du jury.", acc: ["aux"],
      why: "<i>répondre à</i> + les questions: <b>aux</b>." },
    { fase: "dominio", c: ["v-cc", "v-trans"], k: "choice", ask: "Responde.", q: "En « Mes amis vont à Paris », ¿se puede quitar « à Paris » ?", o: ["No: aller lo necesita (circunstancial esencial)", "Sí, siempre se puede quitar"], a: 0,
      why: "«Mes amis vont» no se dice solo: es un <b>circunstancial esencial</b>." }
  ],

  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche", "Paris"] }
};

/* Lección 3 · Los pronombres complemento y su lugar (retoma COD y COI: el pronombre depende de la construcción del verbo) */
window.__ENSENA["pronoms"] = {
  v: 1, arts: false, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "La place des pronoms compléments",
  roles: { suj: "sujeto", verbe: "verbo", cod: "pron. COD", coi: "pron. COI", neg: "negación", inf: "infinitivo" },
  objetivo: {
    que: "Vas a usar le, la, les, lui y leur para no repetir palabras, y a ponerlos en el lugar correcto.",
    corto: "Escribe sin repetir: los pronombres hacen el trabajo.",
    podras: [
      "Elegir entre le, la, les (COD) y lui, leur (COI) según la construcción del verbo.",
      "Colocar el pronombre antes del verbo, también con negación.",
      "Colocarlo bien con un infinitivo: Je vais lui écrire.",
      "Ordenar dos pronombres juntos: Je le lui donne."
    ],
    iconos: ["m2d/escribiendo", "ic2/amigos", "m2d/senalar", "ic2/libro"],
    previos: ["El COD y el COI, y cómo se construye cada verbo (lección anterior)."],
    capacidad: "Ahora puedes evitar repeticiones con pronombres complemento bien elegidos y bien colocados, como en un texto académico."
  },
  requiere: ["v-cod", "v-coi"],
  recupera: ["v-cod", "v-coi"],
  conceptos: {
    "p-cod":    { n: "Pronombres COD: le, la, l', les", b: "cod" },
    "p-coi":    { n: "Pronombres COI: lui, leur", b: "coi" },
    "p-place":  { n: "El lugar del pronombre (negación, infinitivo)", b: "lugar" },
    "p-double": { n: "Dos pronombres juntos: le lui, les leur", b: "dobles" }
  },

  video: {
    titulo: "El lugar de los pronombres complemento",
    voz: "es-CO-SalomeNeural",
    escenas: [
      {
        v: "persona",
        cap: "Para qué sirve",
        fondo: "esc/biblioteca",
        img: "pj/laura-laptop",
        fr: "Le rapport présente les résultats et les analyse.",
        es: "El informe presenta los resultados y los analiza.",
        nota: "Un párrafo sin repeticiones",
        seg: [
          {
            es: "Laura repetía: le rapport présente les résultats. Le rapport analyse les résultats. Ahora lo dice en una frase."
          },
          {
            fr: "Le rapport présente les résultats et les analyse.",
            p: 1
          },
          {
            es: "Los pronombres evitan repetir, y en un texto académico eso es clave. Hoy repasas cuál usar y, sobre todo, dónde ponerlo, también con dos pronombres.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "El COD",
        titulo: "Le, la, les delante del verbo",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Nous invitons les voisins. → Nous les invitons.",
            es: "Invitamos a los vecinos. → Los invitamos."
          },
          {
            p: 2,
            fr: "Elle aime Paul. → Elle l'aime.",
            es: "Quiere a Paul. → Lo quiere."
          },
          {
            p: 3,
            regla: "le, la, les (l' ante vocal) · siempre antes del verbo"
          }
        ],
        seg: [
          {
            es: "Para un complemento directo: le, la, les, siempre antes del verbo.",
            p: 1
          },
          {
            fr: "Nous les invitons.",
            p: 1
          },
          {
            es: "Delante de vocal, l':",
            p: 2
          },
          {
            fr: "Elle l'aime.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "El COI",
        titulo: "Lui, leur",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Je parle à Marie. → Je lui parle.",
            es: "Hablo con Marie. → Le hablo."
          },
          {
            p: 2,
            fr: "J'écris à mes amis. → Je leur écris.",
            es: "Escribo a mis amigos. → Les escribo."
          },
          {
            p: 3,
            regla: "lui (él o ella) · leur (plural, nunca leurs) · lo decide el verbo: inviter → les; téléphoner à → leur"
          }
        ],
        seg: [
          {
            es: "Con à más persona: lui, para él o para ella.",
            p: 1
          },
          {
            fr: "Je lui parle.",
            p: 1
          },
          {
            es: "Y leur en plural, sin s.",
            p: 2
          },
          {
            fr: "Je leur écris.",
            p: 2
          },
          {
            es: "Lo decide el verbo francés, no el español.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "El lugar",
        titulo: "Negación, infinitivo, pasado",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Il ne la regarde pas.",
            es: "No la mira."
          },
          {
            p: 2,
            fr: "Je vais leur écrire.",
            es: "Les voy a escribir."
          },
          {
            p: 3,
            fr: "Je les ai invités.",
            es: "Los invité."
          },
          {
            p: 4,
            regla: "ne + pronombre + verbo + pas · delante del infinitivo · delante del auxiliar"
          }
        ],
        seg: [
          {
            es: "Con negación, el pronombre se queda pegado al verbo, dentro de ne y pas.",
            p: 1
          },
          {
            fr: "Il ne la regarde pas.",
            p: 1
          },
          {
            es: "Con un infinitivo, delante del infinitivo:",
            p: 2
          },
          {
            fr: "Je vais leur écrire.",
            p: 2
          },
          {
            es: "En pasado, delante del auxiliar:",
            p: 3
          },
          {
            fr: "Je les ai invités.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Dos pronombres",
        titulo: "Le, la, les antes de lui, leur",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Les auteurs le leur envoient.",
            es: "Los autores se lo envían."
          },
          {
            p: 2,
            fr: "Il vend sa voiture à son père. → Il la lui vend.",
            es: "Le vende su carro a su papá. → Se lo vende."
          },
          {
            p: 3,
            fr: "Tu me le prêtes ?",
            es: "¿Me lo prestas?"
          },
          {
            p: 4,
            regla: "le, la, les + lui, leur · pero me, te, nous, vous van primero"
          }
        ],
        seg: [
          {
            es: "Con dos pronombres, el directo va primero: le, la, les, y luego lui o leur.",
            p: 1
          },
          {
            fr: "Les auteurs le leur envoient.",
            p: 1
          },
          {
            fr: "Il la lui vend.",
            p: 2
          },
          {
            es: "Pero me, te, nous y vous van antes:",
            p: 3
          },
          {
            fr: "Tu me le prêtes ?",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En la vida real",
        titulo: "Un párrafo sin repeticiones",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Votre paragraphe répète beaucoup : « Le rapport présente les résultats. Le rapport analyse les résultats. »",
            es: "Su párrafo repite mucho: «El informe presenta los resultados. El informe analiza los resultados»."
          },
          {
            p: 2,
            fr: "Je peux écrire : « Le rapport présente les résultats et les analyse. »",
            es: "Puedo escribir: «El informe presenta los resultados y los analiza»."
          },
          {
            p: 3,
            fr: "Parfait : « les » remplace « les résultats ». Et ici : « Les auteurs envoient le texte aux éditeurs » ?",
            es: "Perfecto: «les» reemplaza a «los resultados». ¿Y aquí: «Los autores envían el texto a los editores»?"
          },
          {
            p: 4,
            fr: "Les auteurs leur envoient le texte.",
            es: "Los autores les envían el texto."
          }
        ],
        seg: [
          {
            es: "Escucha cómo suena en una conversación de verdad."
          },
          {
            fr: "Votre paragraphe répète beaucoup : « Le rapport présente les résultats. Le rapport analyse les résultats. »",
            p: 1
          },
          {
            fr: "Je peux écrire : « Le rapport présente les résultats et les analyse. »",
            p: 2
          },
          {
            fr: "Parfait : « les » remplace « les résultats ». Et ici : « Les auteurs envoient le texte aux éditeurs » ?",
            p: 3
          },
          {
            fr: "Les auteurs leur envoient le texte.",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Contraste con el español",
        titulo: "Se lo vende… il la lui vend",
        mz: "m2d/alerta",
        items: [
          {
            p: 1,
            regla: "Español: se lo vende (indirecto primero) · francés: il la lui vend (directo primero)"
          },
          {
            p: 2,
            regla: "Español: lo llamo · francés: je lui téléphone (téléphoner à)"
          },
          {
            p: 3,
            regla: "Español: no la veo · francés: je ne la vois pas (la pegada al verbo)"
          }
        ],
        seg: [
          {
            es: "En español decimos se lo: primero el indirecto. En francés, al revés: la lui.",
            p: 1
          },
          {
            es: "Llamar a alguien es téléphoner à: lui, no le.",
            p: 2
          },
          {
            es: "Y con negación, el pronombre no se separa del verbo.",
            p: 3
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Je les téléphone le dimanche.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Je leur téléphone le dimanche.",
          es: "téléphoner à → leur."
        },
        seg: [
          {
            es: "Primera trampa: les con téléphoner.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Je leur téléphone le dimanche.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Il lui la vend.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Il la lui vend.",
          es: "Primero la, después lui."
        },
        seg: [
          {
            es: "Segunda trampa: el orden del español.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Il la lui vend.",
            p: 2
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/pensativo",
        q: "«Les voy a escribir a mis papás.»",
        o: [
          "Je vais leur écrire.",
          "Je leur vais écrire."
        ],
        a: 0,
        bien: "¡Eso es! Je vais leur écrire.",
        mal: "Delante del infinitivo.",
        seg: [
          {
            es: "Te toca. ¿Cómo dices les voy a escribir?"
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/confundido",
        q: "Niega con pronombre: «Il regarde la télévision».",
        o: [
          "Il ne la regarde pas.",
          "Il ne regarde la pas."
        ],
        a: 0,
        bien: "¡Muy bien! Il ne la regarde pas.",
        mal: "El pronombre se queda pegado al verbo.",
        seg: [
          {
            es: "Una más. Niega con pronombre: il regarde la télévision."
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
            fr: "Nous les invitons.",
            es: "Reemplaza el complemento: «Nous invitons les voisins»."
          },
          {
            p: 2,
            fr: "Je vais leur écrire.",
            es: "Con infinitivo: «Je vais écrire à mes parents»."
          },
          {
            p: 3,
            fr: "Il la lui vend.",
            es: "Dos pronombres: «Il vend sa voiture à son père»."
          }
        ],
        seg: [
          {
            es: "Ahora tú. Escucha cada frase y repítela en voz alta."
          },
          {
            fr: "Nous les invitons.",
            p: 1
          },
          {
            es: "Otra vez.",
            p: 1
          },
          {
            fr: "Nous les invitons.",
            p: 1
          },
          {
            fr: "Je vais leur écrire.",
            p: 2
          },
          {
            es: "Otra vez.",
            p: 2
          },
          {
            fr: "Je vais leur écrire.",
            p: 2
          },
          {
            fr: "Il la lui vend.",
            p: 3
          },
          {
            es: "Otra vez.",
            p: 3
          },
          {
            fr: "Il la lui vend.",
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
                "Orden"
              ],
              [
                "COD",
                "je le vois"
              ],
              [
                "COI",
                "je lui parle · je leur écris"
              ],
              [
                "negación",
                "il ne la regarde pas"
              ],
              [
                "infinitivo · pasado",
                "je vais leur écrire · je les ai invités"
              ],
              [
                "dos pronombres",
                "il la lui vend · tu me le prêtes"
              ]
            ]
          },
          {
            p: 2,
            regla: "Siempre pegado delante del verbo del que depende"
          }
        ],
        seg: [
          {
            es: "Repasemos.",
            p: 1
          },
          {
            es: "Elige el pronombre según el verbo francés.",
            p: 1
          },
          {
            es: "Y ponlo pegado delante del verbo. ¡Ahora, a practicar!",
            p: 2
          }
        ]
      }
    ]
  },

  contexto: {
    titulo: "Un párrafo sin repeticiones",
    img: "bg-biblioteca",
    yo: "laura",
    escena: "La tutora de Laura señala que su párrafo repite los mismos grupos nominales. Laura los reemplaza por pronombres.",
    pj: {
      tutrice: { n: "Madame Roche", voz: "fr-FR-DeniseNeural", rol: "la tutora" },
      laura:   { n: "Laura", voz: "fr-FR-VivienneMultilingualNeural", rol: "estudiante" }
    },
    lineas: [
      ["tutrice", "Votre paragraphe répète beaucoup : « Le rapport présente les résultats. Le rapport analyse les résultats. »", "Su párrafo repite mucho: «El informe presenta los resultados. El informe analiza los resultados»."],
      ["laura", "Je peux écrire : « Le rapport présente les résultats et les analyse. »", "Puedo escribir: «El informe presenta los resultados y los analiza»."],
      ["tutrice", "Parfait : « les » remplace « les résultats ». Et ici : « Les auteurs envoient le texte aux éditeurs » ?", "Perfecto: «les» reemplaza a «los resultados». ¿Y aquí: «Los autores envían el texto a los editores»?"],
      ["laura", "Les auteurs leur envoient le texte.", "Los autores les envían el texto."],
      ["tutrice", "Oui, « leur » remplace « aux éditeurs ». Et avec les deux pronoms ?", "Sí, «leur» reemplaza a «a los editores». ¿Y con los dos pronombres?"],
      ["laura", "Les auteurs le leur envoient.", "Los autores se lo envían."],
      ["tutrice", "Exactement. Le direct passe avant l'indirect.", "Exacto. El directo va antes que el indirecto."]
    ],
    fijate: "Fíjate: para elegir les o leur, Laura pensó en la construcción del verbo (analyser quelque chose, envoyer à quelqu'un). Lo aprendiste en la lección anterior."
  },

  ensena: [
    {
      id: "cod", tipo: "gram", titulo: "le, la, les: el complemento directo",
      idea: "Para no repetir un complemento directo, usa le, la o les delante del verbo.",
      intro: "Funcionan como «lo», «la» y «los» en español, pero siempre van antes del verbo.",
      tabla: [["Con pronombre", "Sin pronombre · español", "Cuándo"], [
        ["Je le vois.", "Je vois le chat. · Lo veo.", "masculino"],
        ["Elle la lit.", "Elle lit la revue. · La lee.", "femenino"],
        ["Nous les invitons.", "Nous invitons les voisins. · Los invitamos.", "plural"],
        ["Elle l'aime.", "Elle aime Paul. · Lo quiere.", "delante de vocal: l'"]
      ]],
      regla: [
        "le = lo, la = la, les = los o las: Je le vois.",
        "Delante de vocal se acorta: l' (Elle l'aime).",
        "Siempre antes del verbo: Je le vois, nunca «Je vois le»."
      ]
    },
    {
      id: "coi", tipo: "gram", titulo: "lui, leur: el complemento indirecto",
      idea: "Si el verbo lleva à + persona, usa lui (una persona) o leur (varias).",
      intro: "Es como «le» y «les» en español: le hablo, les escribo.",
      tabla: [["Con pronombre", "Sin pronombre · español", "Cuándo"], [
        ["Je lui parle.", "Je parle à Marie. · Le hablo.", "una persona"],
        ["Je leur écris.", "J'écris à mes amis. · Les escribo.", "varias personas"],
        ["Il ne lui ressemble pas.", "Il ne ressemble pas à son père. · No se le parece.", "con negación"]
      ]],
      regla: [
        "lui sirve para él y para ella: Je lui parle.",
        "leur es plural y nunca lleva s.",
        "Lo decide el verbo francés: inviter quelqu'un → les; parler à quelqu'un → leur."
      ]
    },
    {
      id: "lugar", tipo: "gram", titulo: "¿Dónde va el pronombre?",
      idea: "El pronombre va pegado delante del verbo del que depende.",
      intro: "Mira los tres casos que más se usan.",
      analiza: { titulo: "Mira dónde queda el pronombre", frases: [
        { partes: [["Je", "suj"], ["ne", "neg"], ["le", "cod"], ["vois", "verbe"], ["pas", "neg"]], fr: "Je ne le vois pas.", es: "No lo veo" },
        { partes: [["Je", "suj"], ["vais", "verbe"], ["lui", "coi"], ["écrire", "inf"]], fr: "Je vais lui écrire.", es: "Voy a escribirle" },
        { partes: [["Je", "suj"], ["les", "cod"], ["ai invités", "verbe"]], fr: "Je les ai invités.", es: "Los invité" }
      ]},
      regla: [
        "Con negación: ne + pronombre + verbo + pas.",
        "Con infinitivo: delante del infinitivo (Je vais lui écrire).",
        "En pasado compuesto: delante del auxiliar (Je les ai invités)."
      ]
    },
    {
      id: "dobles", tipo: "gram", titulo: "Dos pronombres juntos",
      idea: "Con dos pronombres, primero le, la o les y después lui o leur: Je le lui donne.",
      intro: "En español decimos «se lo doy»; en francés no hay «se».",
      analiza: { titulo: "El directo va primero", frases: [
        { partes: [["Je", "suj"], ["le", "cod"], ["lui", "coi"], ["donne", "verbe"]], fr: "Je le lui donne.", es: "Se lo doy" },
        { partes: [["Les auteurs", "suj"], ["le", "cod"], ["leur", "coi"], ["envoient", "verbe"]], fr: "Les auteurs le leur envoient.", es: "Los autores se lo envían" },
        { partes: [["Tu", "suj"], ["me", "coi"], ["le", "cod"], ["prêtes", "verbe"], ["?", "-"]], fr: "Tu me le prêtes ?", es: "¿Me lo prestas?" }
      ]},
      regla: [
        "le, la, les van antes que lui o leur.",
        "Pero me, te, nous, vous van primero: Tu me le prêtes ?"
      ]
    },
    {
      id: "ojo",
      tipo: "ojo",
      titulo: "Errores frecuentes",
      intro: "Tres errores que cometemos casi todos los hispanohablantes. Cázalos uno por uno.",
      errores: [
        {
          sit: "Laura cuenta:",
          frase: "Je les téléphone le dimanche.",
          mal: "les",
          bien: "leur",
          porque: "En español «los llamo».",
          truco: "Téléphoner à quelqu'un: leur."
        },
        {
          sit: "Laura responde:",
          frase: "La télévision ? Non, je ne vois la pas.",
          mal: "ne vois la pas",
          bien: "ne la vois pas",
          porque: "Ponemos el pronombre detrás, como «no veo eso».",
          truco: "Negación: ne + la + vois + pas."
        },
        {
          sit: "La tutora corrige:",
          frase: "Sa voiture ? Il lui la vend.",
          mal: "lui la",
          bien: "la lui",
          porque: "Copiamos el orden de «se la vende».",
          truco: "Directo antes que indirecto: il la lui vend."
        }
      ]
    }
  ],
  ejemplos: [
    {
      sit: "Reemplaza el complemento: «Nous invitons les voisins».",
      resp: "Nous les invitons.",
      porque: "inviter va sin à → les.",
      pasos: [
        {
          q: "¿Con preposición?",
          ops: [
            "no: COD",
            "sí: COI"
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
      sit: "Con infinitivo: «Je vais écrire à mes parents».",
      resp: "Je vais leur écrire.",
      porque: "delante del infinitivo.",
      pasos: [
        {
          q: "¿Qué pronombre?",
          ops: [
            "leur",
            "les"
          ],
          ok: 0
        },
        {
          q: "¿Delante de qué verbo?",
          ops: [
            "écrire",
            "vais"
          ],
          ok: 0
        },
        {
          q: "¿Cómo queda?",
          ops: [
            "je vais leur écrire",
            "je leur vais écrire"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "Dos pronombres: «Il vend sa voiture à son père».",
      resp: "Il la lui vend.",
      porque: "directo antes que indirecto.",
      pasos: [
        {
          q: "¿Sa voiture?",
          ops: [
            "la",
            "lui"
          ],
          ok: 0
        },
        {
          q: "¿À son père?",
          ops: [
            "lui",
            "le"
          ],
          ok: 0
        },
        {
          q: "¿En qué orden?",
          ops: [
            "la lui",
            "lui la"
          ],
          ok: 0
        }
      ]
    }
  ],

  comprueba: [
    { q: "«Je vois le chat» con pronombre es…", o: ["Je le vois.", "Je vois le."], a: 0, b: "cod",
      porque: "El pronombre va delante del verbo." },
    { q: "Para reemplazar «à mes parents» usas…", o: ["leur", "les"], a: 0, b: "coi",
      porque: "à + personas en plural → leur." },
    { q: "«Je parle à Paul», en negativo y con pronombre:", o: ["Je ne lui parle pas.", "Je ne parle lui pas."], a: 0, b: "lugar",
      porque: "ne + pronombre + verbo + pas." },
    { q: "Con un infinitivo, el pronombre va…", o: ["delante del infinitivo", "delante del verbo conjugado"], a: 0, b: "lugar",
      porque: "Je vais lui écrire: lui es complemento de écrire." },
    { q: "¿Qué orden es correcto?", o: ["Je le lui donne.", "Je lui le donne."], a: 0, b: "dobles",
      porque: "Con lui, el directo va primero." }
  ],

  practica: [
    /* 6 · guiada */
    { fase: "guiada", c: ["p-cod"], k: "choice", ask: "Elige el pronombre.", q: "Nous invitons les voisins. → Nous ___ invitons.", o: ["les", "leur"], a: 0,
      pista: "inviter quelqu'un: ¿lleva à?",
      why: "<i>inviter quelqu'un</i> es COD: <b>les</b>." },
    { fase: "guiada", c: ["p-coi"], k: "choice", ask: "Elige el pronombre.", q: "Je parle à Marie. → Je ___ parle.", o: ["lui", "la"], a: 0,
      pista: "parler se construye con à.",
      why: "<i>parler à</i> → COI → <b>lui</b>." },
    { fase: "guiada", c: ["p-cod", "p-place"], k: "fill", ask: "Completa la respuesta.", ctx: "«¿Lee esta revista cada semana?»", q: "Elle lit cette revue ? Non, elle ne ___ lit pas.", acc: ["la"],
      pista: "revue es femenino singular y lire lleva COD.",
      why: "<b>Elle ne la lit pas</b>: la, dentro de la negación." },
    { fase: "guiada", c: ["p-place"], k: "order", ask: "Ordena: «Voy a escribirles».", tokens: ["Je", "vais", "leur", "écrire"],
      pista: "El pronombre va delante del infinitivo.",
      why: "<b>Je vais leur écrire.</b> leur depende de écrire." },
    { fase: "guiada", c: ["p-double"], k: "choice", ask: "Elige el orden correcto.", q: "Il donne le livre à Paul. → Il ___ donne.", o: ["le lui", "lui le"], a: 0,
      pista: "El directo va antes de lui.",
      why: "<b>Il le lui donne.</b>" },

    /* 7 · sin ayuda */
    { fase: "indep", c: ["p-cod"], k: "fill", ask: "Completa con el pronombre.", q: "Tu prends l'autobus tous les jours ? Oui, je ___ prends tous les jours.", acc: ["le"],
      why: "<i>prendre l'autobus</i>: COD masculino → <b>le</b>." },
    { fase: "indep", c: ["p-coi"], k: "choice", ask: "Elige el pronombre.", q: "Vous écrivez à vos amis ? Oui, nous ___ écrivons souvent.", o: ["leur", "les", "leurs"], a: 0,
      why: "<i>écrire à</i> + plural → <b>leur</b> (sin s)." },
    { fase: "indep", c: ["p-coi"], k: "spot", ask: "Encuentra el error y corrígelo.", ctx: "Hablas de llamar a tus padres.", s: "Je [les] téléphone le dimanche .", fix: "leur",
      why: "<i>téléphoner à</i> → COI → <b>leur</b>." },
    { fase: "indep", c: ["p-place"], k: "choice", ask: "¿Dónde va el pronombre?", q: "« Je ne vois pas Julie. » →", o: ["Je ne la vois pas.", "Je ne vois la pas.", "Je la ne vois pas."], a: 0,
      why: "ne + pronombre + verbo + pas: <b>Je ne la vois pas.</b>" },
    { fase: "indep", c: ["p-double"], k: "fill", ask: "Completa con los dos pronombres.", ctx: "«¿Dejan sus llaves a la vecina?»", q: "Vous laissez vos clés à la voisine ? Oui, nous ___ laissons.", acc: ["les lui"],
      why: "<i>vos clés</i> → les, <i>à la voisine</i> → lui: <b>nous les lui laissons</b>." },
    { fase: "indep", c: ["p-cod"], k: "listen", say: "Je ne les connais pas.", acc: ["Je ne les connais pas."], num: false, dict: true,
      ask: "Escucha la frase y escríbela completa. Puedes oírla despacio.",
      why: "<b>Je ne les connais pas.</b> les, dentro de la negación." },
    { fase: "indep", c: ["p-cod", "p-coi"], k: "choice", ask: "Elige el pronombre.", q: "J'attends mes collègues. → Je ___ attends.", o: ["les", "leur"], a: 0,
      why: "<i>attendre quelqu'un</i> es COD: <b>les</b>." },

    /* 8 · aplicación: quitar repeticiones de un párrafo */
    { fase: "aplica", c: ["p-cod"], k: "choice", ask: "Evita la repetición.", ctx: "«Le rapport présente les résultats. Le rapport analyse les résultats.»",
      q: "Versión sin repetición:", o: ["Le rapport présente les résultats et les analyse.", "Le rapport présente les résultats et leur analyse.", "Le rapport présente les résultats et analyse les."], a: 0,
      why: "<i>analyser quelque chose</i>: COD → <b>les</b>, delante del verbo." },
    { fase: "aplica", c: ["p-coi"], k: "choice", ask: "Reescribe con pronombre.", ctx: "«Les auteurs ont répondu aux critiques.»",
      q: "Con pronombre:", o: ["Les auteurs leur ont répondu.", "Les auteurs les ont répondu.", "Les auteurs ont leur répondu."], a: 0,
      why: "<i>répondre à</i> → <b>leur</b>, delante del auxiliar." },
    { fase: "aplica", c: ["p-double", "p-place"], k: "order", ask: "Ordena: «Los autores se lo envían» (el texto, a los editores).",
      tokens: ["Les", "auteurs", "le", "leur", "envoient"],
      why: "<b>Les auteurs le leur envoient.</b> Directo antes de leur." },
    { fase: "aplica", c: ["p-place", "p-coi"], k: "fill", ask: "Responde a tu tutora.", ctx: "«¿Va a escribirle a la directora?»", q: "Oui, je vais ___ écrire demain.", acc: ["lui"],
      why: "<i>écrire à</i> → lui, delante del infinitivo: <b>je vais lui écrire</b>." },

    /* 9 · demuestra lo que sabes */
    { fase: "dominio", c: ["p-cod"], k: "choice", ask: "Elige el pronombre.", q: "Elle aime ce film. → Elle ___ aime.", o: ["l'", "le", "lui"], a: 0,
      why: "COD delante de vocal: <b>l'</b>aime." },
    { fase: "dominio", c: ["p-coi"], k: "choice", ask: "Elige el pronombre.", q: "Ce film plaît aux étudiants ? Non, il ne ___ plaît pas.", o: ["leur", "les"], a: 0,
      why: "<i>plaire à</i> → <b>leur</b>." },
    { fase: "dominio", c: ["p-double"], k: "choice", ask: "Reemplaza los dos complementos.", q: "Il vend sa voiture à son père. →", o: ["Il la lui vend.", "Il lui la vend.", "Il la le vend."], a: 0,
      why: "la (COD) antes de lui (COI): <b>Il la lui vend.</b>" },
    { fase: "dominio", c: ["p-place"], k: "fill", ask: "Completa con el pronombre.", q: "Je dois appeler Paul. → Je dois ___ appeler.", acc: ["l'", "l’"],
      why: "Delante del infinitivo y ante vocal: <b>Je dois l'appeler.</b>" },
    { fase: "dominio", c: ["p-coi", "p-cod"], k: "choice", ask: "Elige el pronombre.", q: "Je demande l'information à Paul. → Je ___ demande l'information.", o: ["lui", "le"], a: 0,
      why: "Se reemplaza <i>à Paul</i> (COI): <b>lui</b>." },
    { fase: "dominio", c: ["p-place", "p-cod"], k: "choice", ask: "Responde en negativo.", q: "Tu regardes la télévision ?", o: ["Non, je ne la regarde pas.", "Non, je la ne regarde pas.", "Non, je ne regarde la pas."], a: 0,
      why: "<b>je ne la regarde pas</b>: el pronombre dentro de la negación." }
  ],

  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche", "Marie", "Paul", "Émilie", "Julie"] }
};

/* Lección 4 · El lugar del adjetivo (retoma el adjetivo como expansión del grupo nominal) */
window.__ENSENA["ordre"] = {
  v: 1, arts: false, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "La place de l'adjectif",
  roles: { det: "determinante", nucleo: "núcleo", adj: "adjetivo" },
  objetivo: {
    que: "Vas a saber dónde poner el adjetivo en francés: casi siempre después del nombre, salvo unos pocos que van antes o cambian de sentido.",
    corto: "¿Antes o después del nombre? Hoy lo resuelves.",
    podras: ["Poner el adjetivo después del nombre por defecto.", "Reconocer los adjetivos cortos que van antes.", "Distinguir un grand homme de un homme grand."],
    iconos: ["m2d/senalar", "ic2/libros", "m2d/pensativo"],
    previos: ["El adjetivo como expansión del grupo nominal (lección 1)."],
    capacidad: "Ahora colocas el adjetivo en su lugar y sabes cuándo la posición cambia el sentido."
  },
  requiere: ["gn-adj"],
  recupera: ["gn-adj"],
  conceptos: {
    "adj-apres": { n: "Por defecto: después del nombre", b: "apres" },
    "adj-avant": { n: "Los adjetivos cortos que van antes", b: "avant" },
    "adj-sens":  { n: "Adjetivos que cambian de sentido", b: "sens" },
    "adj-rel":   { n: "Dos adjetivos: el de «tipo» primero", b: "dos" }
  },
  video: {
    titulo: "El lugar del adjetivo",
    voz: "es-CO-SalomeNeural",
    escenas: [
      {
        v: "persona",
        cap: "Para qué sirve",
        fondo: "esc/sala-examen-oral",
        img: "pj/roche-explicando",
        fr: "Un grand homme.",
        es: "Un gran hombre.",
        nota: "Un adjetivo fuera de lugar",
        seg: [
          {
            es: "Laura escribió un homme grand para hablar de Victor Hugo. La tutora sonríe: eso es un hombre alto."
          },
          {
            fr: "Un grand homme.",
            p: 1
          },
          {
            es: "En francés el lugar del adjetivo puede cambiar el sentido. Hoy aprendes la regla general, los pocos que van antes, y los que cambian de significado.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "La regla",
        titulo: "Casi siempre después del nombre",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "une réforme politique",
            es: "una reforma política"
          },
          {
            p: 2,
            fr: "une voiture rouge · un étudiant colombien",
            es: "un carro rojo · un estudiante colombiano"
          },
          {
            p: 3,
            fr: "une analyse précise",
            es: "un análisis preciso"
          },
          {
            p: 4,
            regla: "colores, nacionalidades, adjetivos largos y casi todos los del texto académico: después"
          }
        ],
        seg: [
          {
            es: "La regla general: el adjetivo va después del nombre.",
            p: 1
          },
          {
            fr: "une réforme politique",
            p: 1
          },
          {
            es: "Siempre los colores y las nacionalidades:",
            p: 2
          },
          {
            fr: "une voiture rouge, un étudiant colombien",
            p: 2
          },
          {
            es: "Y casi todos los del texto académico:",
            p: 3
          },
          {
            fr: "une analyse précise",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Los que van antes",
        titulo: "Belleza, edad, bondad, tamaño",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "un beau livre · une jeune chercheuse",
            es: "un libro bonito · una investigadora joven"
          },
          {
            p: 2,
            fr: "un bon exemple · un grand projet",
            es: "un buen ejemplo · un gran proyecto"
          },
          {
            p: 3,
            fr: "une petite ville · le premier chapitre",
            es: "una ciudad pequeña · el primer capítulo"
          },
          {
            p: 4,
            regla: "truco: belleza, edad, bondad y tamaño → antes (y premier, dernier en una serie)"
          }
        ],
        seg: [
          {
            es: "Unos pocos adjetivos cortos y muy frecuentes van antes. El truco: belleza, edad, bondad y tamaño.",
            p: 1
          },
          {
            fr: "un beau livre, une jeune chercheuse",
            p: 1
          },
          {
            fr: "un bon exemple, un grand projet",
            p: 2
          },
          {
            fr: "une petite ville, le premier chapitre",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Cambian de sentido",
        titulo: "Antes: figurado · después: literal",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "un grand homme · un homme grand",
            es: "un gran hombre (famoso) · un hombre alto"
          },
          {
            p: 2,
            fr: "mon ancien professeur · un bâtiment ancien",
            es: "mi exprofesor · un edificio antiguo"
          },
          {
            p: 3,
            fr: "ma propre voiture · une voiture propre",
            es: "mi propio carro · un carro limpio"
          },
          {
            p: 4,
            fr: "la dernière semaine · la semaine dernière",
            es: "la última semana (de una serie) · la semana pasada"
          }
        ],
        seg: [
          {
            es: "Algunos cambian de sentido. Antes, sentido figurado; después, literal.",
            p: 1
          },
          {
            fr: "un grand homme, un homme grand",
            p: 1
          },
          {
            fr: "mon ancien professeur, un bâtiment ancien",
            p: 2
          },
          {
            fr: "ma propre voiture, une voiture propre",
            p: 3
          },
          {
            fr: "la dernière semaine, la semaine dernière",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Dos adjetivos",
        titulo: "El de tipo va pegado al nombre",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "une crise économique grave",
            es: "una crisis económica grave"
          },
          {
            p: 2,
            fr: "une décision politique importante",
            es: "una decisión política importante"
          },
          {
            p: 3,
            regla: "primero el de tipo (politique, économique, social) · después el que describe (grave, précise)"
          }
        ],
        seg: [
          {
            es: "Con dos adjetivos, el que dice el tipo va pegado al nombre. Luego el que describe.",
            p: 1
          },
          {
            fr: "une crise économique grave",
            p: 1
          },
          {
            fr: "une décision politique importante",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En la vida real",
        titulo: "Un adjetivo fuera de lugar",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Vous avez écrit « une politique réforme ». Où va l'adjectif ?",
            es: "Escribió «una política reforma». ¿Dónde va el adjetivo?"
          },
          {
            p: 2,
            fr: "Après le nom : une réforme politique.",
            es: "Después del nombre: una reforma política."
          },
          {
            p: 3,
            fr: "Oui. Et vous avez écrit aussi « un homme grand » pour parler de Victor Hugo.",
            es: "Sí. Y también escribió «un hombre alto» para hablar de Victor Hugo."
          },
          {
            p: 4,
            fr: "Ah, je voulais dire qu'il est célèbre : un grand homme.",
            es: "Ah, quería decir que es famoso: un gran hombre."
          }
        ],
        seg: [
          {
            es: "Escucha cómo suena en una conversación de verdad."
          },
          {
            fr: "Vous avez écrit « une politique réforme ». Où va l'adjectif ?",
            p: 1
          },
          {
            fr: "Après le nom : une réforme politique.",
            p: 2
          },
          {
            fr: "Oui. Et vous avez écrit aussi « un homme grand » pour parler de Victor Hugo.",
            p: 3
          },
          {
            fr: "Ah, je voulais dire qu'il est célèbre : un grand homme.",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Contraste con el español",
        titulo: "Una política decisión ✗",
        mz: "m2d/alerta",
        items: [
          {
            p: 1,
            regla: "Español: a veces antes por estilo · francés: después (une décision politique)"
          },
          {
            p: 2,
            regla: "Español: un gran hombre / un hombre grande · francés: un grand homme / un homme grand (igual)"
          },
          {
            p: 3,
            regla: "Español: un buen punto de partida · francés: un bon point de départ (bon antes)"
          }
        ],
        seg: [
          {
            es: "En español podemos mover el adjetivo por estilo. En francés, casi nunca.",
            p: 1
          },
          {
            es: "Con grand pasa como en español: gran hombre y hombre grande.",
            p: 2
          },
          {
            es: "Y bon va siempre antes: un bon point de départ.",
            p: 3
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Le gouvernement a pris une politique décision importante.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Le gouvernement a pris une décision politique importante.",
          es: "Tipo: después."
        },
        seg: [
          {
            es: "Primera trampa: el adjetivo de tipo antes.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Le gouvernement a pris une décision politique importante.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "C'est un point bon de départ.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "C'est un bon point de départ.",
          es: "bon va antes."
        },
        seg: [
          {
            es: "Segunda trampa: bon después.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "C'est un bon point de départ.",
            p: 2
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/pensativo",
        q: "Quieres decir «mi exprofesor».",
        o: [
          "mon ancien professeur",
          "mon professeur ancien"
        ],
        a: 0,
        bien: "¡Eso es! Mon ancien professeur.",
        mal: "Ex: ancien antes.",
        seg: [
          {
            es: "Te toca. Quieres decir mi exprofesor."
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/confundido",
        q: "«un joven investigador»",
        o: [
          "un jeune chercheur",
          "un chercheur jeune"
        ],
        a: 0,
        bien: "¡Muy bien! Un jeune chercheur.",
        mal: "Edad: antes del nombre.",
        seg: [
          {
            es: "Una más. ¿Cómo dices un joven investigador?"
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
            fr: "une décision politique importante",
            es: "Di «una decisión política importante»."
          },
          {
            p: 2,
            fr: "un jeune chercheur",
            es: "Di «un joven investigador»."
          },
          {
            p: 3,
            fr: "mon ancien professeur",
            es: "Quieres decir «mi exprofesor»."
          }
        ],
        seg: [
          {
            es: "Ahora tú. Escucha cada frase y repítela en voz alta."
          },
          {
            fr: "une décision politique importante",
            p: 1
          },
          {
            es: "Otra vez.",
            p: 1
          },
          {
            fr: "une décision politique importante",
            p: 1
          },
          {
            fr: "un jeune chercheur",
            p: 2
          },
          {
            es: "Otra vez.",
            p: 2
          },
          {
            fr: "un jeune chercheur",
            p: 2
          },
          {
            fr: "mon ancien professeur",
            p: 3
          },
          {
            es: "Otra vez.",
            p: 3
          },
          {
            fr: "mon ancien professeur",
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
                "Tipo de adjetivo",
                "Lugar"
              ],
              [
                "casi todos, colores, nacionalidades",
                "después: une analyse précise"
              ],
              [
                "belleza, edad, bondad, tamaño",
                "antes: un beau livre"
              ],
              [
                "grand, ancien, propre, dernier",
                "antes figurado · después literal"
              ],
              [
                "dos adjetivos",
                "tipo + descripción: une crise économique grave"
              ]
            ]
          },
          {
            p: 2,
            regla: "Por defecto, después del nombre"
          }
        ],
        seg: [
          {
            es: "Repasemos.",
            p: 1
          },
          {
            es: "Después, salvo belleza, edad, bondad y tamaño.",
            p: 1
          },
          {
            es: "Y ojo con los que cambian de sentido. ¡Ahora, a practicar!",
            p: 2
          }
        ]
      }
    ]
  },
  contexto: {
    titulo: "Un adjetivo fuera de lugar", img: "bg-biblioteca", yo: "laura",
    escena: "Laura escribe sobre una reforma y pone los adjetivos como en español.",
    pj: { tutrice: { n: "Madame Roche", voz: "fr-FR-DeniseNeural", rol: "la tutora" }, laura: { n: "Laura", voz: "fr-FR-VivienneMultilingualNeural", rol: "estudiante" } },
    lineas: [
      ["tutrice", "Vous avez écrit « une politique réforme ». Où va l'adjectif ?", "Escribió «una política reforma». ¿Dónde va el adjetivo?"],
      ["laura", "Après le nom : une réforme politique.", "Después del nombre: una reforma política."],
      ["tutrice", "Oui. Et vous avez écrit aussi « un homme grand » pour parler de Victor Hugo.", "Sí. Y también escribió «un hombre alto» para hablar de Victor Hugo."],
      ["laura", "Ah, je voulais dire qu'il est célèbre : un grand homme.", "Ah, quería decir que es famoso: un gran hombre."],
      ["tutrice", "Exactement. Ici, la place change le sens.", "Exacto. Aquí, el lugar cambia el sentido."]
    ],
    fijate: "Fíjate: como en español, «un gran hombre» y «un hombre grande» no significan lo mismo."
  },
  ensena: [
    { id: "apres", tipo: "gram", titulo: "Por defecto, después del nombre",
      idea: "En francés, casi todos los adjetivos van después del nombre.",
      intro: "Es la regla general. Si dudas, ponlo después.",
      analiza: { frases: [
        { partes: [["une", "det"], ["décision", "nucleo"], ["politique", "adj"]], es: "una decisión política" },
        { partes: [["un", "det"], ["texte", "nucleo"], ["argumentatif", "adj"]], es: "un texto argumentativo" },
        { partes: [["un", "det"], ["étudiant", "nucleo"], ["colombien", "adj"]], es: "un estudiante colombiano" },
        { partes: [["une", "det"], ["voiture", "nucleo"], ["rouge", "adj"]], es: "un carro rojo" }
      ]},
      regla: ["Colores, nacionalidades y adjetivos largos van siempre después: une voiture rouge, un étudiant colombien.", "La mayoría de los adjetivos del texto académico también: une analyse précise."] },
    { id: "avant", tipo: "gram", titulo: "Los pocos que van antes",
      idea: "Unos pocos adjetivos cortos y muy frecuentes van antes del nombre.",
      intro: "Son los de belleza, edad, bondad y tamaño.",
      tabla: [["Ejemplo", "Español", "Tipo"], [
        ["un beau livre", "un libro bonito", "belleza: beau"],
        ["une jeune chercheuse", "una investigadora joven", "edad: jeune, vieux, nouveau"],
        ["un bon exemple", "un buen ejemplo", "bondad: bon, mauvais"],
        ["un grand projet", "un gran proyecto", "tamaño: grand, petit"],
        ["une petite ville", "una ciudad pequeña", "tamaño: grand, petit"],
        ["le premier chapitre", "el primer capítulo", "orden: premier, dernier"]
      ]],
      regla: ["Truco: belleza, edad, bondad y tamaño → antes.", "premier y dernier también van antes cuando indican orden en una serie."] },
    { id: "sens", tipo: "gram", titulo: "Cuando el lugar cambia el sentido",
      idea: "Algunos adjetivos cambian de sentido: antes, sentido figurado; después, sentido literal.",
      intro: "Pasa lo mismo en español: «un gran hombre» no es «un hombre grande».",
      tabla: [["Francés", "Español", "Sentido"], [
        ["un grand homme", "un gran hombre (famoso)", "antes: figurado"],
        ["un homme grand", "un hombre alto", "después: literal"],
        ["mon ancien professeur", "mi exprofesor", "antes: «ex»"],
        ["un bâtiment ancien", "un edificio antiguo", "después: viejo"],
        ["ma propre voiture", "mi propio carro", "antes: «mío»"],
        ["une voiture propre", "un carro limpio", "después: limpio"],
        ["un pauvre homme", "un pobre hombre (da lástima)", "antes: figurado"],
        ["un homme pauvre", "un hombre pobre (sin dinero)", "después: literal"],
        ["la dernière semaine", "la última semana (de una serie)", "antes: orden"],
        ["la semaine dernière", "la semana pasada", "después: tiempo"]
      ]],
      regla: ["Antes del nombre: sentido figurado o subjetivo. Después: sentido concreto."] },
    { id: "dos", tipo: "gram", titulo: "Dos adjetivos después del nombre",
      idea: "Con dos adjetivos, el que dice el «tipo» (político, económico, social) va pegado al nombre.",
      intro: "El otro adjetivo, el que describe, va al final.",
      analiza: { frases: [
        { partes: [["une", "det"], ["analyse", "nucleo"], ["politique", "adj"], ["précise", "adj"]], es: "un análisis político preciso" },
        { partes: [["une", "det"], ["crise", "nucleo"], ["économique", "adj"], ["grave", "adj"]], es: "una crisis económica grave" },
        { partes: [["une", "det"], ["réforme", "nucleo"], ["sociale", "adj"], ["ambitieuse", "adj"]], es: "una reforma social ambiciosa" }
      ]},
      regla: ["Primero el de tipo: politique, économique, social, universitaire.", "Después el que describe: précise, grave, ambitieuse, rigoureux."] },
    {
      id: "ojo",
      tipo: "ojo",
      titulo: "Errores frecuentes",
      intro: "Tres errores que cometemos casi todos los hispanohablantes. Cázalos uno por uno.",
      errores: [
        {
          sit: "Laura escribe:",
          frase: "Le gouvernement a pris une politique décision importante.",
          mal: "politique décision",
          bien: "décision politique",
          porque: "En español podemos anteponer el adjetivo por estilo.",
          truco: "Adjetivo de tipo: después, une décision politique."
        },
        {
          sit: "Laura concluye:",
          frase: "C'est un point bon de départ.",
          mal: "un point bon",
          bien: "un bon point",
          porque: "Aplicamos la regla general a bon.",
          truco: "Bon va antes: un bon point de départ."
        },
        {
          sit: "Laura resume:",
          frase: "Le pays traverse une crise grave économique.",
          mal: "grave économique",
          bien: "économique grave",
          porque: "Ponemos primero el adjetivo que más pesa.",
          truco: "El de tipo va pegado al nombre: une crise économique grave."
        }
      ]
    }
  ],
  ejemplos: [
    {
      sit: "Di «una decisión política importante».",
      resp: "une décision politique importante",
      porque: "tipo + descripción, después.",
      pasos: [
        {
          q: "¿Dónde van los adjetivos?",
          ops: [
            "después del nombre",
            "antes"
          ],
          ok: 0
        },
        {
          q: "¿Cuál va pegado al nombre?",
          ops: [
            "politique (tipo)",
            "importante"
          ],
          ok: 0
        },
        {
          q: "¿Cómo queda?",
          ops: [
            "une décision politique importante",
            "une décision importante politique"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "Di «un joven investigador».",
      resp: "un jeune chercheur",
      porque: "edad → antes.",
      pasos: [
        {
          q: "¿Qué expresa jeune?",
          ops: [
            "la edad",
            "el tipo"
          ],
          ok: 0
        },
        {
          q: "¿Antes o después?",
          ops: [
            "antes",
            "después"
          ],
          ok: 0
        },
        {
          q: "¿Cómo queda?",
          ops: [
            "un jeune chercheur",
            "un chercheur jeune"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "Quieres decir «mi exprofesor».",
      resp: "mon ancien professeur",
      porque: "ancien antes = ex.",
      pasos: [
        {
          q: "¿Sentido figurado o literal?",
          ops: [
            "figurado: ex",
            "literal: viejo"
          ],
          ok: 0
        },
        {
          q: "¿Antes o después?",
          ops: [
            "antes",
            "después"
          ],
          ok: 0
        },
        {
          q: "¿Cómo queda?",
          ops: [
            "mon ancien professeur",
            "mon professeur ancien"
          ],
          ok: 0
        }
      ]
    }
  ],
  comprueba: [
    { q: "Por defecto, el adjetivo francés va…", o: ["después del nombre", "antes del nombre"], a: 0, b: "apres", porque: "Es la regla general." },
    { q: "¿Qué adjetivo va antes del nombre?", o: ["jeune", "colombien", "politique"], a: 0, b: "avant", porque: "Edad, corto y frecuente → antes." },
    { q: "«un grand homme» significa…", o: ["un hombre famoso", "un hombre alto"], a: 0, b: "sens", porque: "Antes del nombre, sentido figurado." },
    { q: "Con dos adjetivos, ¿cuál va pegado al nombre?", o: ["el de tipo: politique, économique", "el que describe: précise, grave"], a: 0, b: "dos", porque: "Primero el de tipo." }
  ],
  practica: [
    { fase: "guiada", c: ["adj-sens"], k: "choice", ask: "Elige según el sentido.", ctx: "Hablas de Ferdinand de Saussure, fundador de la lingüística moderna.", q: "« C'est un ___ : il a changé l'histoire de la linguistique. »", o: ["grand homme", "homme grand"], a: 0,
      pista: "¿Famoso o alto?", why: "Famoso = <b>un grand homme</b>, con el adjetivo antes." },
    { fase: "guiada", c: ["adj-apres"], k: "choice", ask: "Elige el orden correcto.", q: "«una decisión política»", o: ["une décision politique", "une politique décision"], a: 0,
      pista: "Regla general: ¿antes o después?", why: "Por defecto, después: <b>une décision politique</b>." },
    { fase: "guiada", c: ["adj-avant"], k: "choice", ask: "Elige el orden correcto.", q: "«un libro bonito»", o: ["un beau livre", "un livre beau"], a: 0,
      pista: "beau es de belleza, corto y frecuente.", why: "Belleza → antes: <b>un beau livre</b>." },
    { fase: "guiada", c: ["adj-rel"], k: "choice", ask: "Elige el orden de los dos adjetivos.", q: "«una crisis económica grave»", o: ["une crise économique grave", "une crise grave économique"], a: 0,
      pista: "¿Cuál dice el tipo de crisis?", why: "<i>économique</i> dice el tipo: va pegado. <b>une crise économique grave</b>." },
    { fase: "indep", c: ["adj-sens"], k: "choice", ask: "Elige el adjetivo.", ctx: "Hablas de un profesor que ya no te da clase.", q: "« C'est mon ___ professeur. »", o: ["ancien", "vieux"], a: 0,
      why: "«ex» = <b>ancien</b> antes del nombre. <i>vieux</i> hablaría de su edad." },
    { fase: "indep", c: ["adj-sens"], k: "match", ask: "Une cada expresión con su sentido.", q: "Expresión → sentido",
      pairs: [["un grand homme", "famoso"], ["un homme grand", "alto"], ["mon ancien professeur", "exprofesor"], ["un bâtiment ancien", "viejo"]],
      why: "Antes: figurado. Después: literal." },
    { fase: "indep", c: ["adj-apres"], k: "spot", ask: "Encuentra el error y corrígelo.", s: "Le gouvernement a pris une [politique décision] importante .", fix: "décision politique",
      why: "El adjetivo va después: <b>une décision politique</b>." },
    { fase: "indep", c: ["adj-avant"], k: "choice", ask: "Elige la frase correcta.", q: "«Es un buen punto de partida.»", o: ["C'est un bon point de départ.", "C'est un point bon de départ."], a: 0,
      why: "<i>bon</i> va antes: <b>un bon point de départ</b>." },
    { fase: "indep", c: ["adj-rel"], k: "choice", ask: "Elige el orden.", q: "«un análisis político preciso»", o: ["une analyse politique précise", "une analyse précise politique"], a: 0,
      why: "El de tipo primero: <b>politique précise</b>." },
    { fase: "indep", c: ["adj-avant", "adj-apres"], k: "listen", say: "une jeune chercheuse colombienne", acc: ["une jeune chercheuse colombienne"], num: false, dict: true,
      ask: "Escucha y escribe el grupo nominal.", why: "<b>une jeune chercheuse colombienne</b>: edad antes, nacionalidad después." },
    { fase: "aplica", c: ["adj-sens"], k: "choice", ask: "Elige la expresión.", ctx: "Escribes que fue la última semana del semestre (la última de la serie).", q: "Tu frase:", o: ["la dernière semaine du semestre", "la semaine dernière du semestre"], a: 0,
      why: "En una serie, <b>dernière</b> va antes. <i>la semaine dernière</i> es «la semana pasada»." },
    { fase: "aplica", c: ["adj-rel"], k: "order", ask: "Ordena: «una reforma social ambiciosa».", ctx: "Presentas una reforma en tu ensayo.", tokens: ["une", "réforme", "sociale", "ambitieuse"],
      why: "<b>une réforme sociale ambitieuse</b>: tipo primero, descripción después." },
    { fase: "aplica", c: ["adj-avant"], k: "fill", ask: "Completa con «joven».", ctx: "Presentas a un autor.", q: "Ce ___ chercheur a publié son premier livre.", acc: ["jeune"],
      why: "Edad → antes: <b>ce jeune chercheur</b>." },
    { fase: "dominio", c: ["adj-sens"], k: "choice", ask: "Elige la expresión.", q: "«mi propio carro»", o: ["ma propre voiture", "ma voiture propre"], a: 0,
      why: "«propio» = <b>propre</b> antes. Después significa «limpio»." },
    { fase: "dominio", c: ["adj-apres"], k: "choice", ask: "Elige la correcta.", q: "«un estudiante colombiano»", o: ["un étudiant colombien", "un colombien étudiant"], a: 0,
      why: "Nacionalidad → después." },
    { fase: "dominio", c: ["adj-rel"], k: "choice", ask: "Elige el orden.", q: "«un trabajo universitario riguroso»", o: ["un travail universitaire rigoureux", "un travail rigoureux universitaire"], a: 0,
      why: "<i>universitaire</i> dice el tipo: va pegado." },
    { fase: "dominio", c: ["adj-sens"], k: "choice", ask: "Elige la expresión.", q: "«¡Pobre hombre!» (da lástima)", o: ["un pauvre homme", "un homme pauvre"], a: 0,
      why: "Figurado → antes: <b>un pauvre homme</b>." },
    { fase: "dominio", c: ["adj-avant"], k: "choice", ask: "Elige la correcta.", q: "«una ciudad pequeña»", o: ["une petite ville", "une ville petite"], a: 0,
      why: "Tamaño → antes: <b>une petite ville</b>." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche", "Victor", "Hugo", "Saussure"] }
};

/* Lección 5 · Los adverbios en -ment (como -mente en español) */
window.__ENSENA["advment"] = {
  v: 1, arts: false, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Les adverbes en -ment",
  roles: {},
  objetivo: {
    que: "Vas a formar y escribir sin errores los adverbios en -ment, que en español terminan en -mente.",
    corto: "lentamente → lentement: casi como en español.",
    podras: ["Formar el adverbio a partir del femenino.", "Escribir bien -amment y -emment.", "Recordar los acentos e irregulares más usados."],
    iconos: ["ic2/lapiz", "m2d/escribiendo", "ic2/estrella"],
    previos: ["El femenino de los adjetivos (A2)."],
    capacidad: "Ahora escribes los adverbios en -ment sin faltas, incluso los difíciles."
  },
  requiere: [],
  recupera: [],
  conceptos: {
    "adv-gen": { n: "Regla general: femenino + -ment", b: "general" },
    "adv-voy": { n: "Masculino en vocal + -ment", b: "general" },
    "adv-ant": { n: "-ant → -amment, -ent → -emment", b: "ant" },
    "adv-irr": { n: "Acentos e irregulares", b: "irr" }
  },
  video: {
    titulo: "Los adverbios en -ment",
    voz: "es-CO-SalomeNeural",
    escenas: [
      {
        v: "persona",
        cap: "Para qué sirve",
        fondo: "esc/biblioteca",
        img: "pj/laura-laptop",
        fr: "Ces résultats sont évidemment provisoires.",
        es: "Estos resultados son evidentemente provisionales.",
        nota: "Una falta de ortografía",
        seg: [
          {
            es: "Laura escribió évidement, con una sola m. En español es evidentemente, y la tutora le explica la regla francesa."
          },
          {
            fr: "Ces résultats sont évidemment provisoires.",
            p: 1
          },
          {
            es: "Los adverbios en -ment son como los en -mente del español, pero con tres trampas de ortografía. Hoy las aprendes todas.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "La regla",
        titulo: "Femenino + -ment",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "lente → lentement",
            es: "lenta → lentamente"
          },
          {
            p: 2,
            fr: "sérieuse → sérieusement · douce → doucement",
            es: "seriamente · suavemente"
          },
          {
            p: 3,
            fr: "vrai → vraiment · absolu → absolument",
            es: "verdaderamente · absolutamente"
          },
          {
            p: 4,
            regla: "femenino + ment · masculino en vocal + ment (nunca vraiement) · nunca cambia"
          }
        ],
        seg: [
          {
            es: "Como en español: el adjetivo en femenino más -ment.",
            p: 1
          },
          {
            fr: "lentement",
            p: 1
          },
          {
            fr: "sérieusement, doucement",
            p: 2
          },
          {
            es: "Si el masculino termina en vocal, se añade -ment directo, sin e:",
            p: 3
          },
          {
            fr: "vraiment, absolument",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "-ant y -ent",
        titulo: "-amment, -emment",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "courant → couramment · constant → constamment",
            es: "con fluidez · constantemente"
          },
          {
            p: 2,
            fr: "évident → évidemment · récent → récemment",
            es: "evidentemente · recientemente"
          },
          {
            p: 3,
            fr: "prudent → prudemment · suffisant → suffisamment",
            es: "prudentemente · suficientemente"
          },
          {
            p: 4,
            regla: "-ant → -amment · -ent → -emment (con dos m, y los dos suenan «amán»)"
          }
        ],
        seg: [
          {
            es: "Primera trampa: los terminados en -ant se vuelven -amment.",
            p: 1
          },
          {
            fr: "couramment, constamment",
            p: 1
          },
          {
            es: "Los terminados en -ent, -emment. Se escribe con e pero suena a.",
            p: 2
          },
          {
            fr: "évidemment, récemment",
            p: 2
          },
          {
            fr: "prudemment, suffisamment",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Con acento o irregulares",
        titulo: "Précisément, gentiment",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "précisément · énormément · profondément",
            es: "precisamente · enormemente · profundamente"
          },
          {
            p: 2,
            fr: "gentil → gentiment · bref → brièvement",
            es: "amablemente · brevemente"
          },
          {
            p: 3,
            regla: "lent → lentement (excepción: no lemment)"
          }
        ],
        seg: [
          {
            es: "Segunda trampa: unos llevan é antes de -ment.",
            p: 1
          },
          {
            fr: "précisément, énormément, profondément",
            p: 1
          },
          {
            es: "Tercera: dos irregulares.",
            p: 2
          },
          {
            fr: "gentiment, brièvement",
            p: 2
          },
          {
            es: "Y lent es la excepción: lentement.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En la frase",
        titulo: "Nunca cambia",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Elle parle couramment français.",
            es: "Habla francés con fluidez."
          },
          {
            p: 2,
            fr: "J'ai récemment lu cet article.",
            es: "Recientemente leí este artículo."
          },
          {
            p: 3,
            regla: "el adverbio no tiene femenino ni plural"
          }
        ],
        seg: [
          {
            es: "El adverbio no cambia nunca.",
            p: 1
          },
          {
            fr: "Elle parle couramment français.",
            p: 1
          },
          {
            fr: "J'ai récemment lu cet article.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En la vida real",
        titulo: "Una falta de ortografía",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Vous avez écrit « évidement » avec un seul m.",
            es: "Escribió «évidement» con una sola m."
          },
          {
            p: 2,
            fr: "En espagnol, on dit « evidentemente »…",
            es: "En español se dice «evidentemente»…"
          },
          {
            p: 3,
            fr: "Oui, mais en français, évident donne évidemment : -ent devient -emment.",
            es: "Sí, pero en francés évident da évidemment: -ent se vuelve -emment."
          },
          {
            p: 4,
            fr: "Alors constant donne constamment ?",
            es: "¿Entonces constant da constamment?"
          }
        ],
        seg: [
          {
            es: "Escucha cómo suena en una conversación de verdad."
          },
          {
            fr: "Vous avez écrit « évidement » avec un seul m.",
            p: 1
          },
          {
            fr: "En espagnol, on dit « evidentemente »…",
            p: 2
          },
          {
            fr: "Oui, mais en français, évident donne évidemment : -ent devient -emment.",
            p: 3
          },
          {
            fr: "Alors constant donne constamment ?",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Contraste con el español",
        titulo: "Evidentemente… évidemment",
        mz: "m2d/alerta",
        items: [
          {
            p: 1,
            regla: "Español: evidentemente · francés: évidemment (no évidement)"
          },
          {
            p: 2,
            regla: "Español: constantemente · francés: constamment (no constantement)"
          },
          {
            p: 3,
            regla: "Español: verdaderamente · francés: vraiment (no vraiement)"
          }
        ],
        seg: [
          {
            es: "Copiar el español da errores: évidement, con una m, es un error.",
            p: 1
          },
          {
            es: "Constantemente no se traduce constantement: es constamment.",
            p: 2
          },
          {
            es: "Y vraiment, sin e.",
            p: 3
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Ces résultats sont évidement provisoires.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Ces résultats sont évidemment provisoires.",
          es: "-ent → -emment."
        },
        seg: [
          {
            es: "Primera trampa: una sola m.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Ces résultats sont évidemment provisoires.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Elle parle courament français.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Elle parle couramment français.",
          es: "Dos m."
        },
        seg: [
          {
            es: "Segunda trampa: courament.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Elle parle couramment français.",
            p: 2
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/pensativo",
        q: "Forma el adverbio de «évident».",
        o: [
          "évidemment",
          "évidement"
        ],
        a: 0,
        bien: "¡Eso es! Évidemment.",
        mal: "-ent → -emment, con dos m.",
        seg: [
          {
            es: "Te toca. Forma el adverbio de évident."
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/confundido",
        q: "Forma el adverbio de «prudent».",
        o: [
          "prudemment",
          "prudamment"
        ],
        a: 0,
        bien: "¡Muy bien! Prudemment.",
        mal: "-ent → -emment, con e.",
        seg: [
          {
            es: "Una más. Forma el adverbio de prudent."
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
            fr: "sérieusement",
            es: "Forma el adverbio de «sérieux»."
          },
          {
            p: 2,
            fr: "récemment",
            es: "Forma el adverbio de «récent»."
          },
          {
            p: 3,
            fr: "absolument",
            es: "Forma el adverbio de «absolu»."
          }
        ],
        seg: [
          {
            es: "Ahora tú. Escucha cada frase y repítela en voz alta."
          },
          {
            fr: "sérieusement",
            p: 1
          },
          {
            es: "Otra vez.",
            p: 1
          },
          {
            fr: "sérieusement",
            p: 1
          },
          {
            fr: "récemment",
            p: 2
          },
          {
            es: "Otra vez.",
            p: 2
          },
          {
            fr: "récemment",
            p: 2
          },
          {
            fr: "absolument",
            p: 3
          },
          {
            es: "Otra vez.",
            p: 3
          },
          {
            fr: "absolument",
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
                "Adjetivo",
                "Adverbio"
              ],
              [
                "femenino",
                "lente → lentement"
              ],
              [
                "en vocal",
                "vrai → vraiment"
              ],
              [
                "-ant",
                "constant → constamment"
              ],
              [
                "-ent",
                "évident → évidemment"
              ],
              [
                "con acento · irregular",
                "précisément · gentiment"
              ]
            ]
          },
          {
            p: 2,
            regla: "-ant → -amment · -ent → -emment, con dos m"
          }
        ],
        seg: [
          {
            es: "Repasemos.",
            p: 1
          },
          {
            es: "Femenino más -ment.",
            p: 1
          },
          {
            es: "Y -amment, -emment con dos m. ¡Ahora, a practicar!",
            p: 2
          }
        ]
      }
    ]
  },
  contexto: {
    titulo: "Una falta de ortografía", img: "bg-biblioteca", yo: "laura",
    escena: "La tutora encuentra una falta típica en el ensayo de Laura.",
    pj: { tutrice: { n: "Madame Roche", voz: "fr-FR-DeniseNeural", rol: "la tutora" }, laura: { n: "Laura", voz: "fr-FR-VivienneMultilingualNeural", rol: "estudiante" } },
    lineas: [
      ["tutrice", "Vous avez écrit « évidement » avec un seul m.", "Escribió «évidement» con una sola m."],
      ["laura", "En espagnol, on dit « evidentemente »…", "En español se dice «evidentemente»…"],
      ["tutrice", "Oui, mais en français, évident donne évidemment : -ent devient -emment.", "Sí, pero en francés évident da évidemment: -ent se vuelve -emment."],
      ["laura", "Alors constant donne constamment ?", "¿Entonces constant da constamment?"],
      ["tutrice", "Exactement : -ant devient -amment.", "Exacto: -ant se vuelve -amment."]
    ],
    fijate: "Fíjate: el español añade -mente y ya; el francés tiene reglas para -ant y -ent que conviene saber."
  },
  ensena: [
    { id: "general", tipo: "gram", titulo: "La regla general",
      idea: "Tomas el adjetivo en femenino y añades -ment, como el -mente del español.",
      intro: "Pero si el masculino ya termina en vocal, añades -ment al masculino.",
      tabla: [["Adverbio", "Viene de · español", "Regla"], [
        ["lentement", "lente · lentamente", "femenino + ment"],
        ["sérieusement", "sérieuse · seriamente", "femenino + ment"],
        ["doucement", "douce · suavemente", "femenino + ment"],
        ["vraiment", "vrai · verdaderamente", "vocal + ment"],
        ["absolument", "absolu · absolutamente", "vocal + ment"]
      ]],
      regla: ["Femenino + ment: lente → lentement.", "Masculino en vocal + ment: vrai → vraiment (nunca «vraiement»).", "El adverbio nunca cambia: no tiene femenino ni plural."] },
    { id: "ant", tipo: "gram", titulo: "-ant y -ent: con dos m",
      idea: "-ant se vuelve -amment y -ent se vuelve -emment; los dos suenan «amán».",
      intro: "Es la regla que más errores produce.",
      tabla: [["Adverbio", "Viene de · español", "Regla"], [
        ["couramment", "courant · con fluidez", "-ant → -amment"],
        ["suffisamment", "suffisant · suficientemente", "-ant → -amment"],
        ["constamment", "constant · constantemente", "-ant → -amment"],
        ["prudemment", "prudent · prudentemente", "-ent → -emment"],
        ["récemment", "récent · recientemente", "-ent → -emment"],
        ["évidemment", "évident · evidentemente", "-ent → -emment"]
      ]],
      regla: ["-ent → -emment se escribe con e pero suena a: prudemment rima con couramment.", "Excepción: lent → lentement (es una sola sílaba)."] },
    { id: "irr", tipo: "gram", titulo: "Acentos e irregulares",
      idea: "Unos pocos llevan acento antes de -ment o son irregulares: mejor memorizarlos.",
      intro: "Son muy frecuentes en los textos académicos.",
      tabla: [["Adverbio", "Viene de · español", "Detalle"], [
        ["précisément", "précis · precisamente", "é antes de -ment"],
        ["énormément", "énorme · enormemente", "é antes de -ment"],
        ["profondément", "profond · profundamente", "é antes de -ment"],
        ["gentiment", "gentil · amablemente", "irregular"],
        ["brièvement", "bref · brevemente", "irregular: iè"]
      ]],
      regla: ["Con acento: précisément, énormément, profondément.", "Irregulares: gentiment, brièvement."] },
    {
      id: "ojo",
      tipo: "ojo",
      titulo: "Errores frecuentes",
      intro: "Tres errores que cometemos casi todos los hispanohablantes. Cázalos uno por uno.",
      errores: [
        {
          sit: "Laura escribe:",
          frase: "Ces résultats sont évidement provisoires.",
          mal: "évidement",
          bien: "évidemment",
          porque: "En español «evidentemente», y nos sale con una m.",
          truco: "-ent → -emment: évidemment, con dos m."
        },
        {
          sit: "Laura presenta a una colega:",
          frase: "Elle parle courament français.",
          mal: "courament",
          bien: "couramment",
          porque: "Escribimos como suena.",
          truco: "-ant → -amment: couramment."
        },
        {
          sit: "Laura aconseja:",
          frase: "Il faut conduire prudamment.",
          mal: "prudamment",
          bien: "prudemment",
          porque: "Como suena «amán», escribimos -amment.",
          truco: "Prudent termina en -ent: prudemment."
        }
      ]
    }
  ],
  ejemplos: [
    {
      sit: "Forma el adverbio de «sérieux».",
      resp: "sérieusement",
      porque: "femenino + ment.",
      pasos: [
        {
          q: "¿Femenino de sérieux?",
          ops: [
            "sérieuse",
            "sérieux"
          ],
          ok: 0
        },
        {
          q: "¿Qué añades?",
          ops: [
            "-ment",
            "-amment"
          ],
          ok: 0
        },
        {
          q: "¿Cómo queda?",
          ops: [
            "sérieusement",
            "sérieuxment"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "Forma el adverbio de «récent».",
      resp: "récemment",
      porque: "-ent → -emment.",
      pasos: [
        {
          q: "¿Termina en -ant o -ent?",
          ops: [
            "-ent",
            "-ant"
          ],
          ok: 0
        },
        {
          q: "¿Qué terminación?",
          ops: [
            "-emment",
            "-amment"
          ],
          ok: 0
        },
        {
          q: "¿Cuántas m?",
          ops: [
            "dos",
            "una"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "Forma el adverbio de «absolu».",
      resp: "absolument",
      porque: "masculino en vocal + ment.",
      pasos: [
        {
          q: "¿Termina en vocal?",
          ops: [
            "sí: absolu",
            "no"
          ],
          ok: 0
        },
        {
          q: "¿Añades e?",
          ops: [
            "no",
            "sí"
          ],
          ok: 0
        },
        {
          q: "¿Cómo queda?",
          ops: [
            "absolument",
            "absoluement"
          ],
          ok: 0
        }
      ]
    }
  ],
  comprueba: [
    { q: "La regla general es…", o: ["femenino + -ment", "masculino + -ment siempre"], a: 0, b: "general", porque: "lente → lentement." },
    { q: "constant → ?", o: ["constamment", "constantement"], a: 0, b: "ant", porque: "-ant → -amment." },
    { q: "-emment suena…", o: ["como -amment", "con e"], a: 0, b: "ant", porque: "prudemment rima con couramment." },
    { q: "bref → ?", o: ["brièvement", "brèvement"], a: 0, b: "irr", porque: "Es irregular: iè." }
  ],
  practica: [
    { fase: "guiada", c: ["adv-gen"], k: "fill", ask: "Escribe el adverbio.", q: "lent → ___", acc: ["lentement"], pista: "Parte del femenino: lente.", why: "<b>lentement</b>: femenino + ment." },
    { fase: "guiada", c: ["adv-voy"], k: "fill", ask: "Escribe el adverbio.", q: "vrai → ___", acc: ["vraiment"], pista: "El masculino ya termina en vocal.", why: "<b>vraiment</b>, sin e." },
    { fase: "guiada", c: ["adv-ant"], k: "choice", ask: "Elige la ortografía.", q: "courant → ?", o: ["couramment", "courament", "courantement"], a: 0, pista: "-ant → -amment, con dos m.", why: "<b>couramment</b>." },
    { fase: "guiada", c: ["adv-irr"], k: "fill", ask: "Escribe el adverbio.", q: "précis → ___", acc: ["précisément"], pista: "Lleva acento antes de -ment.", why: "<b>précisément</b>." },
    { fase: "indep", c: ["adv-gen"], k: "fill", ask: "Escribe el adverbio.", q: "sérieux → ___", acc: ["sérieusement"], why: "Femenino <i>sérieuse</i> + ment: <b>sérieusement</b>." },
    { fase: "indep", c: ["adv-ant"], k: "choice", ask: "Elige la ortografía.", q: "prudent → ?", o: ["prudemment", "prudamment", "prudentement"], a: 0, why: "-ent → <b>-emment</b>." },
    { fase: "indep", c: ["adv-ant"], k: "choice", es: true, ask: "¿Cómo suena -emment?", q: "« prudemment »", o: ["como -amment", "con e, como se escribe"], a: 0, why: "Suena «amán», igual que <i>couramment</i>." },
    { fase: "indep", c: ["adv-irr"], k: "choice", ask: "Elige la forma correcta.", q: "gentil → ?", o: ["gentiment", "gentillement", "gentilement"], a: 0, why: "Irregular: <b>gentiment</b>." },
    { fase: "indep", c: ["adv-irr"], k: "fill", ask: "Escribe el adverbio.", q: "énorme → ___", acc: ["énormément"], why: "Con acento: <b>énormément</b>." },
    { fase: "indep", c: ["adv-voy", "adv-ant"], k: "match", ask: "Une cada adjetivo con su adverbio.", q: "Adjetivo → adverbio",
      pairs: [["constant", "constamment"], ["récent", "récemment"], ["absolu", "absolument"], ["doux", "doucement"]], why: "-ant → -amment, -ent → -emment, vocal + ment, femenino + ment." },
    { fase: "aplica", c: ["adv-ant"], k: "spot", ask: "Corrige la falta del ensayo.", ctx: "Revisas tu conclusión.", s: "Ces résultats sont [évidement] provisoires .", fix: "évidemment", why: "<b>évidemment</b>, con dos m." },
    { fase: "aplica", c: ["adv-gen"], k: "fill", ask: "Completa con el adverbio de «franc» (femenino: franche).", ctx: "Das tu opinión en un debate.", q: "Je vous le dis ___ : ce projet est trop coûteux.", acc: ["franchement"], why: "<b>franchement</b>: femenino + ment." },
    { fase: "aplica", c: ["adv-irr"], k: "fill", ask: "Completa con el adverbio de «bref».", ctx: "Introduces tu exposé.", q: "Je vais présenter ___ le sujet.", acc: ["brièvement"], why: "Irregular: <b>brièvement</b>." },
    { fase: "dominio", c: ["adv-gen"], k: "choice", ask: "Elige la forma correcta.", q: "doux → ?", o: ["doucement", "douxment"], a: 0, why: "Femenino <i>douce</i> + ment." },
    { fase: "dominio", c: ["adv-voy"], k: "choice", ask: "Elige la forma correcta.", q: "absolu → ?", o: ["absolument", "absoluement"], a: 0, why: "Vocal + ment: <b>absolument</b>." },
    { fase: "dominio", c: ["adv-ant"], k: "fill", ask: "Escribe el adverbio.", q: "suffisant → ___", acc: ["suffisamment"], why: "-ant → <b>-amment</b>." },
    { fase: "dominio", c: ["adv-voy", "adv-ant"], k: "fill", ask: "Escribe el adverbio.", q: "récent → ___", acc: ["récemment"], why: "-ent → <b>-emment</b>." },
    { fase: "dominio", c: ["adv-irr"], k: "choice", ask: "Elige la forma correcta.", q: "profond → ?", o: ["profondément", "profondement"], a: 0, why: "Con acento: <b>profondément</b>." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche"], previo: ["franchement"] }
};

/* Lección 6 · El lugar del adverbio (retoma los adverbios en -ment) */
window.__ENSENA["advplace"] = {
  v: 1, arts: false, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "La place de l'adverbe",
  roles: { suj: "sujeto", verbe: "verbo", aux: "auxiliar", part: "participio", adv: "adverbio", neg: "negación", inf: "infinitivo" },
  objetivo: {
    que: "Vas a poner el adverbio en su lugar en francés, sin calcar el orden del español.",
    corto: "«Él siempre llega tarde» no se dice así en francés.",
    podras: ["Poner el adverbio después del verbo en tiempo simple.", "Colocarlo bien en el passé composé.", "Colocarlo con negación e infinitivo."],
    iconos: ["m2d/senalar", "ic2/reloj-arena", "m2d/pensativo"],
    previos: ["Los adverbios en -ment (lección anterior)."],
    capacidad: "Ahora colocas los adverbios como un francófono, sin calcos del español."
  },
  requiere: ["adv-gen"],
  recupera: ["adv-ant"],
  conceptos: {
    "advp-simple": { n: "Tiempo simple: después del verbo", b: "simple" },
    "advp-comp":   { n: "Passé composé: corto en medio, largo después", b: "comp" },
    "advp-autres": { n: "Negación, infinitivo y voz pasiva", b: "autres" }
  },
  video: {
    titulo: "El lugar del adverbio",
    voz: "es-CO-SalomeNeural",
    escenas: [
      {
        v: "persona",
        cap: "Para qué sirve",
        fondo: "esc/sala-examen-oral",
        img: "pj/roche-explicando",
        fr: "L'auteur défend toujours cette idée.",
        es: "El autor siempre defiende esta idea.",
        nota: "El orden del español",
        seg: [
          {
            es: "Laura escribió: l'auteur toujours défend cette idée. Es el orden del español, y en francés no funciona."
          },
          {
            fr: "L'auteur défend toujours cette idée.",
            p: 1
          },
          {
            es: "En francés el adverbio nunca va entre el sujeto y el verbo. Hoy aprendes dónde va en cada caso: tiempo simple, compuesto, negación e infinitivo.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Tiempo simple",
        titulo: "Después del verbo",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Il arrive toujours en retard.",
            es: "Siempre llega tarde."
          },
          {
            p: 2,
            fr: "Elle réfléchit toujours avant de décider.",
            es: "Siempre reflexiona antes de decidir."
          },
          {
            p: 3,
            regla: "sujeto + verbo + adverbio (nunca sujeto + adverbio + verbo)"
          }
        ],
        seg: [
          {
            es: "En tiempo simple, el adverbio va justo después del verbo.",
            p: 1
          },
          {
            fr: "Il arrive toujours en retard.",
            p: 1
          },
          {
            fr: "Elle réfléchit toujours avant de décider.",
            p: 2
          },
          {
            es: "Nunca entre el sujeto y el verbo, aunque en español digamos él siempre llega.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Tiempo compuesto",
        titulo: "Corto en medio · largo al final",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "J'ai déjà terminé.",
            es: "Ya terminé."
          },
          {
            p: 2,
            fr: "Il a bien compris la consigne.",
            es: "Entendió bien la consigna."
          },
          {
            p: 3,
            fr: "Il vous a parlé gentiment.",
            es: "Les habló amablemente."
          },
          {
            p: 4,
            regla: "cortos (déjà, bien, mal, toujours, souvent, beaucoup): entre auxiliar y participio · en -ment: después"
          }
        ],
        seg: [
          {
            es: "En tiempo compuesto, los cortos van entre el auxiliar y el participio.",
            p: 1
          },
          {
            fr: "J'ai déjà terminé.",
            p: 1
          },
          {
            fr: "Il a bien compris la consigne.",
            p: 2
          },
          {
            es: "Los largos en -ment, después del participio:",
            p: 3
          },
          {
            fr: "Il vous a parlé gentiment.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Tiempo y lugar",
        titulo: "Hier, ici: nunca en medio",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Il a plu hier.",
            es: "Llovió ayer."
          },
          {
            p: 2,
            regla: "hier, demain, aujourd'hui, ici, là: al final o al principio, nunca entre auxiliar y participio"
          }
        ],
        seg: [
          {
            es: "Los de tiempo y lugar nunca van en medio.",
            p: 1
          },
          {
            fr: "Il a plu hier.",
            p: 1
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Negación e infinitivo",
        titulo: "Pas encore · bien réfléchir",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Elle n'avait pas encore parlé.",
            es: "Todavía no había hablado."
          },
          {
            p: 2,
            fr: "Il faut bien réfléchir.",
            es: "Hay que reflexionar bien."
          },
          {
            p: 3,
            fr: "La voiture a été rapidement réparée.",
            es: "El carro fue reparado rápidamente."
          },
          {
            p: 4,
            regla: "pas + adverbio (pas encore, pas toujours) · corto delante del infinitivo · pasiva: después de été"
          }
        ],
        seg: [
          {
            es: "Con negación, el adverbio va después de pas: pas encore.",
            p: 1
          },
          {
            fr: "Elle n'avait pas encore parlé.",
            p: 1
          },
          {
            es: "Con un infinitivo, el corto va delante:",
            p: 2
          },
          {
            fr: "Il faut bien réfléchir.",
            p: 2
          },
          {
            es: "Y en pasiva, después de été:",
            p: 3
          },
          {
            fr: "La voiture a été rapidement réparée.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En la vida real",
        titulo: "El orden del español",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Vous avez écrit : « L'auteur toujours défend cette idée. »",
            es: "Escribió: «El autor siempre defiende esta idea»."
          },
          {
            p: 2,
            fr: "Il faut dire : « L'auteur défend toujours cette idée » ?",
            es: "¿Hay que decir: «El autor defiende siempre esta idea»?"
          },
          {
            p: 3,
            fr: "Oui. Et ici : « Il a compris bien la consigne. »",
            es: "Sí. Y aquí: «Ha entendido bien la consigna»."
          },
          {
            p: 4,
            fr: "Il a bien compris la consigne.",
            es: "Ha entendido bien la consigna."
          }
        ],
        seg: [
          {
            es: "Escucha cómo suena en una conversación de verdad."
          },
          {
            fr: "Vous avez écrit : « L'auteur toujours défend cette idée. »",
            p: 1
          },
          {
            fr: "Il faut dire : « L'auteur défend toujours cette idée » ?",
            p: 2
          },
          {
            fr: "Oui. Et ici : « Il a compris bien la consigne. »",
            p: 3
          },
          {
            fr: "Il a bien compris la consigne.",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Contraste con el español",
        titulo: "Siempre llega… il arrive toujours",
        mz: "m2d/alerta",
        items: [
          {
            p: 1,
            regla: "Español: él siempre llega · francés: il arrive toujours"
          },
          {
            p: 2,
            regla: "Español: entendió bien · francés: il a bien compris (en medio)"
          },
          {
            p: 3,
            regla: "Español: todavía no · francés: pas encore (no encore pas)"
          }
        ],
        seg: [
          {
            es: "El español permite el adverbio antes del verbo. El francés, no.",
            p: 1
          },
          {
            es: "En pasado, bien se mete en medio: il a bien compris.",
            p: 2
          },
          {
            es: "Y el orden de pas encore es fijo.",
            p: 3
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Elle toujours réfléchit beaucoup avant de décider.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Elle réfléchit toujours beaucoup avant de décider.",
          es: "Después del verbo."
        },
        seg: [
          {
            es: "Primera trampa: el adverbio antes del verbo.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Elle réfléchit toujours beaucoup avant de décider.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Elle n'avait encore pas parlé à son patron.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Elle n'avait pas encore parlé à son patron.",
          es: "Orden fijo: pas encore."
        },
        seg: [
          {
            es: "Segunda trampa: encore pas.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Elle n'avait pas encore parlé à son patron.",
            p: 2
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/pensativo",
        q: "Di «Ya terminé».",
        o: [
          "J'ai déjà terminé.",
          "J'ai terminé déjà."
        ],
        a: 0,
        bien: "¡Eso es! J'ai déjà terminé.",
        mal: "Corto: entre auxiliar y participio.",
        seg: [
          {
            es: "Te toca. ¿Cómo dices ya terminé?"
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/confundido",
        q: "Di «Les habló amablemente».",
        o: [
          "Il vous a parlé gentiment.",
          "Il vous gentiment a parlé."
        ],
        a: 0,
        bien: "¡Muy bien! Parlé gentiment.",
        mal: "En -ment: después del participio.",
        seg: [
          {
            es: "Una más. ¿Cómo dices les habló amablemente?"
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
            fr: "Elle réfléchit toujours avant de décider.",
            es: "Di «Ella siempre reflexiona antes de decidir»."
          },
          {
            p: 2,
            fr: "J'ai déjà terminé.",
            es: "Di «Ya terminé»."
          },
          {
            p: 3,
            fr: "Il vous a parlé gentiment.",
            es: "Di «Les habló amablemente»."
          }
        ],
        seg: [
          {
            es: "Ahora tú. Escucha cada frase y repítela en voz alta."
          },
          {
            fr: "Elle réfléchit toujours avant de décider.",
            p: 1
          },
          {
            es: "Otra vez.",
            p: 1
          },
          {
            fr: "Elle réfléchit toujours avant de décider.",
            p: 1
          },
          {
            fr: "J'ai déjà terminé.",
            p: 2
          },
          {
            es: "Otra vez.",
            p: 2
          },
          {
            fr: "J'ai déjà terminé.",
            p: 2
          },
          {
            fr: "Il vous a parlé gentiment.",
            p: 3
          },
          {
            es: "Otra vez.",
            p: 3
          },
          {
            fr: "Il vous a parlé gentiment.",
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
                "Lugar del adverbio"
              ],
              [
                "tiempo simple",
                "il arrive toujours"
              ],
              [
                "compuesto, corto",
                "j'ai déjà terminé"
              ],
              [
                "compuesto, en -ment",
                "il a parlé gentiment"
              ],
              [
                "tiempo y lugar",
                "il a plu hier"
              ],
              [
                "negación · infinitivo",
                "pas encore · bien réfléchir"
              ]
            ]
          },
          {
            p: 2,
            regla: "Nunca entre el sujeto y el verbo"
          }
        ],
        seg: [
          {
            es: "Repasemos.",
            p: 1
          },
          {
            es: "Después del verbo, o en medio si es corto.",
            p: 1
          },
          {
            es: "Y nunca entre el sujeto y el verbo. ¡Ahora, a practicar!",
            p: 2
          }
        ]
      }
    ]
  },
  contexto: {
    titulo: "El orden del español", img: "bg-biblioteca", yo: "laura",
    escena: "Laura ha calcado el orden del español en dos frases.",
    pj: { tutrice: { n: "Madame Roche", voz: "fr-FR-DeniseNeural", rol: "la tutora" }, laura: { n: "Laura", voz: "fr-FR-VivienneMultilingualNeural", rol: "estudiante" } },
    lineas: [
      ["tutrice", "Vous avez écrit : « L'auteur toujours défend cette idée. »", "Escribió: «El autor siempre defiende esta idea»."],
      ["laura", "Il faut dire : « L'auteur défend toujours cette idée » ?", "¿Hay que decir: «El autor defiende siempre esta idea»?"],
      ["tutrice", "Oui. Et ici : « Il a compris bien la consigne. »", "Sí. Y aquí: «Ha entendido bien la consigna»."],
      ["laura", "Il a bien compris la consigne.", "Ha entendido bien la consigna."],
      ["tutrice", "Parfait. L'adverbe court se glisse entre l'auxiliaire et le participe.", "Perfecto. El adverbio corto se mete entre el auxiliar y el participio."]
    ],
    fijate: "Fíjate: el español pone el adverbio donde quiere; el francés tiene lugares fijos."
  },
  ensena: [
    { id: "simple", tipo: "gram", titulo: "Tiempo simple: después del verbo",
      idea: "El adverbio nunca va entre el sujeto y el verbo: va justo después del verbo.",
      intro: "Vale para el presente, el imperfecto, el futuro…",
      analiza: { frases: [
        { partes: [["Il", "suj"], ["arrive", "verbe"], ["toujours", "adv"], ["en retard", "-"]], fr: "Il arrive toujours en retard.", es: "Siempre llega tarde" },
        { partes: [["Elle", "suj"], ["réfléchit", "verbe"], ["beaucoup", "adv"]], fr: "Elle réfléchit beaucoup.", es: "Reflexiona mucho" },
        { partes: [["Nous", "suj"], ["nous retrouvons", "verbe"], ["souvent", "adv"], ["ici", "-"]], fr: "Nous nous retrouvons souvent ici.", es: "A menudo nos encontramos aquí" }
      ]},
      regla: ["Sujeto + verbo + adverbio: Il arrive toujours…", "Nunca «Il toujours arrive», aunque en español digamos «él siempre llega»."] },
    { id: "comp", tipo: "gram", titulo: "Passé composé: corto en medio, largo al final",
      idea: "Adverbio corto entre auxiliar y participio; adverbio en -ment después del participio.",
      intro: "Y los de tiempo o lugar (hier, demain, ici) van al principio o al final de la frase.",
      analiza: { frases: [
        { partes: [["J'", "suj"], ["ai", "aux"], ["déjà", "adv"], ["lu", "part"]], fr: "J'ai déjà lu.", es: "Ya leí" },
        { partes: [["Il", "suj"], ["a", "aux"], ["bien", "adv"], ["compris", "part"]], fr: "Il a bien compris.", es: "Entendió bien" },
        { partes: [["Il", "suj"], ["vous", "-"], ["a", "aux"], ["parlé", "part"], ["gentiment", "adv"]], fr: "Il vous a parlé gentiment.", es: "Les habló amablemente" },
        { partes: [["Il", "suj"], ["a", "aux"], ["plu", "part"], ["hier", "adv"]], fr: "Il a plu hier.", es: "Llovió ayer" }
      ]},
      regla: ["Cortos y frecuentes (déjà, bien, mal, toujours, souvent, beaucoup) → en medio: j'ai déjà lu.", "Largos en -ment → al final: elle a agi généreusement.", "Tiempo y lugar (hier, demain, aujourd'hui, ici) → nunca en medio: il a plu hier."] },
    { id: "autres", tipo: "gram", titulo: "Negación, infinitivo y pasiva",
      idea: "Con negación, el adverbio va después de pas; con infinitivo, el corto va delante.",
      intro: "Tres casos que salen mucho en los textos.",
      analiza: { frases: [
        { partes: [["Elle", "suj"], ["n'avait", "neg"], ["pas", "neg"], ["encore", "adv"], ["parlé", "part"]], fr: "Elle n'avait pas encore parlé.", es: "Todavía no había hablado" },
        { partes: [["Il", "suj"], ["faut", "verbe"], ["bien", "adv"], ["réfléchir", "inf"]], fr: "Il faut bien réfléchir.", es: "Hay que pensarlo bien" },
        { partes: [["La fenêtre", "suj"], ["a été", "aux"], ["rapidement", "adv"], ["réparée", "part"]], fr: "La fenêtre a été rapidement réparée.", es: "La ventana fue reparada rápido" }
      ]},
      regla: ["Negación: pas encore, pas toujours (nunca «encore pas»).", "Infinitivo: el adverbio corto va delante: bien réfléchir.", "Pasiva: después de été: a été rapidement réparée."] },
    {
      id: "ojo",
      tipo: "ojo",
      titulo: "Errores frecuentes",
      intro: "Tres errores que cometemos casi todos los hispanohablantes. Cázalos uno por uno.",
      errores: [
        {
          sit: "Laura describe:",
          frase: "Elle toujours réfléchit beaucoup avant de décider.",
          mal: "toujours réfléchit",
          bien: "réfléchit toujours",
          porque: "Copiamos el orden de «ella siempre reflexiona».",
          truco: "Después del verbo: elle réfléchit toujours."
        },
        {
          sit: "Laura escribe:",
          frase: "Il a compris bien la consigne.",
          mal: "compris bien",
          bien: "bien compris",
          porque: "En español «entendió bien», al final.",
          truco: "Corto: entre auxiliar y participio, il a bien compris."
        },
        {
          sit: "Laura resume:",
          frase: "Elle n'avait encore pas parlé à son patron.",
          mal: "encore pas",
          bien: "pas encore",
          porque: "Invertimos el orden de «todavía no».",
          truco: "Orden fijo: pas encore."
        }
      ]
    }
  ],
  ejemplos: [
    {
      sit: "Di «Ella siempre reflexiona antes de decidir».",
      resp: "Elle réfléchit toujours avant de décider.",
      porque: "tiempo simple: después del verbo.",
      pasos: [
        {
          q: "¿Tiempo simple o compuesto?",
          ops: [
            "simple",
            "compuesto"
          ],
          ok: 0
        },
        {
          q: "¿Dónde va toujours?",
          ops: [
            "después del verbo",
            "antes del verbo"
          ],
          ok: 0
        },
        {
          q: "¿Cómo queda?",
          ops: [
            "elle réfléchit toujours",
            "elle toujours réfléchit"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "Di «Ya terminé».",
      resp: "J'ai déjà terminé.",
      porque: "corto: en medio.",
      pasos: [
        {
          q: "¿Tiempo simple o compuesto?",
          ops: [
            "compuesto",
            "simple"
          ],
          ok: 0
        },
        {
          q: "¿Déjà es corto o en -ment?",
          ops: [
            "corto",
            "en -ment"
          ],
          ok: 0
        },
        {
          q: "¿Dónde va?",
          ops: [
            "entre ai y terminé",
            "al final"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "Di «Les habló amablemente».",
      resp: "Il vous a parlé gentiment.",
      porque: "en -ment: después del participio.",
      pasos: [
        {
          q: "¿Gentiment es corto o en -ment?",
          ops: [
            "en -ment",
            "corto"
          ],
          ok: 0
        },
        {
          q: "¿Dónde va?",
          ops: [
            "después del participio",
            "en medio"
          ],
          ok: 0
        },
        {
          q: "¿Cómo queda?",
          ops: [
            "il vous a parlé gentiment",
            "il vous gentiment a parlé"
          ],
          ok: 0
        }
      ]
    }
  ],
  comprueba: [
    { q: "En tiempo simple, el adverbio va…", o: ["después del verbo", "entre el sujeto y el verbo"], a: 0, b: "simple", porque: "Il arrive toujours…" },
    { q: "«J'ai ___ lu.» (déjà)", o: ["J'ai déjà lu.", "J'ai lu déjà."], a: 0, b: "comp", porque: "Corto: en medio." },
    { q: "«Todavía no» se dice…", o: ["pas encore", "encore pas"], a: 0, b: "autres", porque: "Orden fijo." },
    { q: "«hier» en passé composé va…", o: ["al principio o al final", "entre auxiliar y participio"], a: 0, b: "comp", porque: "Tiempo y lugar: nunca en medio." }
  ],
  practica: [
    { fase: "guiada", c: ["advp-simple"], k: "spot", ask: "Toca el grupo mal ordenado y corrígelo.", s: "Elle [toujours réfléchit] beaucoup avant de décider .", fix: "réfléchit toujours", pista: "El adverbio va después del verbo.", why: "<b>Elle réfléchit toujours…</b>" },
    { fase: "guiada", c: ["advp-comp"], k: "choice", ask: "Elige la frase correcta.", q: "Passé composé + adverbio corto", o: ["Il a toujours aimé la musique.", "Il a aimé toujours la musique."], a: 0, pista: "Corto: entre auxiliar y participio.", why: "<b>a toujours aimé</b>." },
    { fase: "guiada", c: ["advp-comp"], k: "choice", ask: "Elige la frase correcta.", q: "Passé composé + adverbio en -ment", o: ["Il vous a parlé gentiment.", "Il vous gentiment a parlé."], a: 0, pista: "Largo: al final.", why: "<b>a parlé gentiment</b>." },
    { fase: "guiada", c: ["advp-autres"], k: "spot", ask: "Toca las dos palabras en mal orden y corrígelas.", s: "Elle n'avait [encore pas] parlé à son patron .", fix: "pas encore", pista: "Primero la negación.", why: "<b>pas encore</b>." },
    { fase: "indep", c: ["advp-simple"], k: "spot", ask: "Corrige el orden.", s: "Nous [souvent nous retrouvons] ici .", fix: "nous retrouvons souvent", why: "<b>Nous nous retrouvons souvent ici.</b>" },
    { fase: "indep", c: ["advp-comp"], k: "choice", ask: "Elige la frase correcta.", q: "Passé composé + hier", o: ["Il a plu hier.", "Il a hier plu."], a: 0, why: "Tiempo: al final o al principio." },
    { fase: "indep", c: ["advp-autres"], k: "choice", ask: "Elige la frase correcta.", q: "Infinitivo + bien", o: ["Il faut bien réfléchir.", "Il faut réfléchir bien."], a: 0, why: "Corto delante del infinitivo." },
    { fase: "indep", c: ["advp-autres"], k: "choice", ask: "Elige la frase correcta.", q: "Negación + adverbio", o: ["Il ne parle pas franchement.", "Il ne franchement parle pas."], a: 0, why: "Después de la negación completa." },
    { fase: "indep", c: ["advp-comp"], k: "sort", ask: "Clasifica: ¿dónde va cada adverbio en passé composé?", q: "Lugar del adverbio", cats: ["en medio", "después del participio", "principio o final"],
      items: [["déjà", 0], ["bien", 0], ["toujours", 0], ["généreusement", 1], ["gentiment", 1], ["hier", 2], ["demain", 2]], why: "Cortos en medio, -ment al final, tiempo fuera." },
    { fase: "indep", c: ["advp-simple"], k: "listen", say: "Il arrive toujours en retard.", acc: ["Il arrive toujours en retard."], num: false, dict: true, ask: "Escucha y escribe la frase.", why: "<b>Il arrive toujours en retard.</b>" },
    { fase: "aplica", c: ["advp-simple"], k: "choice", ask: "Corrige tu ensayo.", ctx: "«L'auteur toujours défend cette idée.»", q: "Versión correcta:", o: ["L'auteur défend toujours cette idée.", "Toujours l'auteur défend cette idée."], a: 0, why: "Después del verbo." },
    { fase: "aplica", c: ["advp-autres"], k: "order", ask: "Ordena la frase pasiva.", ctx: "Describes un proyecto terminado.", tokens: ["La fenêtre", "a été", "rapidement", "réparée."], why: "Pasiva: después de <i>été</i>." },
    { fase: "aplica", c: ["advp-comp"], k: "choice", ask: "Elige la versión correcta.", ctx: "Resumes un debate.", q: "«Esta hipótesis ha sido ampliamente discutida.»", o: ["Cette hypothèse a été largement discutée.", "Cette hypothèse largement a été discutée."], a: 0, why: "Nunca entre sujeto y verbo." },
    { fase: "dominio", c: ["advp-simple"], k: "choice", ask: "Elige la frase correcta.", q: "«Él a menudo trabaja de noche.»", o: ["Il travaille souvent la nuit.", "Il souvent travaille la nuit."], a: 0, why: "Después del verbo." },
    { fase: "dominio", c: ["advp-comp"], k: "choice", ask: "Elige la frase correcta.", q: "«Ya terminé.»", o: ["J'ai déjà terminé.", "J'ai terminé déjà."], a: 0, why: "Corto en medio." },
    { fase: "dominio", c: ["advp-autres"], k: "choice", ask: "Elige la frase correcta.", q: "«Todavía no he leído el informe.»", o: ["Je n'ai pas encore lu le rapport.", "Je n'ai encore pas lu le rapport."], a: 0, why: "<b>pas encore</b>." },
    { fase: "dominio", c: ["advp-comp", "advp-autres"], k: "choice", ask: "Elige la frase correcta.", q: "Pasiva + adverbio en -ment", o: ["Le projet a été soigneusement préparé.", "Le projet a soigneusement été préparé."], a: 0, why: "Después de <i>été</i>." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche"] }
};

/* Lección 7 · Frase simple y frase compleja (retoma las relativas qui, que, où y los verbos con de) */
window.__ENSENA["phrase"] = {
  v: 1, arts: false, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Phrase simple, phrase complexe",
  roles: { prin: "principal", sub: "subordinada", conn: "conector", rel: "relativa" },
  objetivo: {
    que: "Vas a distinguir una frase simple de una compleja y a unir ideas con los relativos dont y lequel, y con el conector car.",
    corto: "Una idea por frase… o varias bien unidas.",
    podras: ["Saber si una frase es simple o compleja.", "Usar dont y préposition + lequel.", "Usar car sin errores."],
    iconos: ["ic2/libros", "m2d/senalar", "m2d/escribiendo"],
    previos: ["Las relativas con qui, que, où (lección 1) y los verbos con de (lección 2)."],
    capacidad: "Ahora construyes frases complejas correctas, como en un resumen o un ensayo."
  },
  requiere: ["gn-rel", "v-coi"],
  recupera: ["gn-rel"],
  conceptos: {
    "ph-type": { n: "Frase simple y frase compleja", b: "tipos" },
    "ph-dont": { n: "dont = de + algo", b: "dont" },
    "ph-lequel": { n: "Preposición + lequel", b: "lequel" },
    "ph-car": { n: "car: la causa", b: "tipos" }
  },
  video: {
    titulo: "Frase simple, frase compleja",
    voz: "es-CO-SalomeNeural",
    escenas: [
      {
        v: "persona",
        cap: "Para qué sirve",
        fondo: "esc/sala-examen-oral",
        img: "pj/roche-explicando",
        fr: "C'est un problème dont on parle beaucoup.",
        es: "Es un problema del que se habla mucho.",
        nota: "Una frase con «que» por todas partes",
        seg: [
          {
            es: "Laura escribió: c'est un problème que on parle beaucoup. En español diríamos del que se habla, y el francés tiene una palabra para eso."
          },
          {
            fr: "C'est un problème dont on parle beaucoup.",
            p: 1
          },
          {
            es: "Para escribir frases complejas sin calcar el español necesitas dont, lequel y saber dónde va car. Hoy lo aprendes.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Simple o compleja",
        titulo: "Cuenta los verbos conjugados",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "La mairie maintient ce projet coûteux.",
            es: "La alcaldía mantiene este costoso proyecto. (un verbo: simple)"
          },
          {
            p: 2,
            fr: "La mairie maintient ce projet que les habitants critiquent.",
            es: "La alcaldía mantiene este proyecto que los habitantes critican. (dos: compleja)"
          },
          {
            p: 3,
            regla: "un verbo conjugado: frase simple · dos o más: compleja · más de 30 palabras: córtala"
          }
        ],
        seg: [
          {
            es: "Cuenta los verbos conjugados. Uno: frase simple.",
            p: 1
          },
          {
            fr: "La mairie maintient ce projet coûteux.",
            p: 1
          },
          {
            es: "Dos o más: frase compleja.",
            p: 2
          },
          {
            fr: "La mairie maintient ce projet que les habitants critiquent.",
            p: 2
          },
          {
            es: "Y si pasa de treinta palabras, córtala en dos.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Dont",
        titulo: "Verbo con de → dont",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "C'est un problème dont on parle.",
            es: "Es un problema del que se habla. (on parle de ce problème)"
          },
          {
            p: 2,
            fr: "le livre dont j'ai besoin",
            es: "el libro que necesito (j'ai besoin de ce livre)"
          },
          {
            p: 3,
            fr: "l'étude dont parle l'article",
            es: "el estudio del que habla el artículo"
          },
          {
            p: 4,
            regla: "reconstruye la frase: si el verbo lleva de, el relativo es dont"
          }
        ],
        seg: [
          {
            es: "Si el verbo se construye con de, el relativo es dont. Reconstruye: on parle de ce problème.",
            p: 1
          },
          {
            fr: "C'est un problème dont on parle.",
            p: 1
          },
          {
            es: "Avoir besoin de: dont.",
            p: 2
          },
          {
            fr: "le livre dont j'ai besoin",
            p: 2
          },
          {
            fr: "l'étude dont parle l'article",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Lequel",
        titulo: "Otra preposición + lequel",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "la raison pour laquelle je m'oppose",
            es: "la razón por la que me opongo"
          },
          {
            p: 2,
            fr: "l'entreprise dans laquelle je travaille",
            es: "la empresa en la que trabajo"
          },
          {
            p: 3,
            fr: "le projet auquel je participe · les projets auxquels je participe",
            es: "el proyecto en el que participo"
          },
          {
            p: 4,
            regla: "lequel, laquelle, lesquels, lesquelles · à + lequel = auquel, auxquels"
          }
        ],
        seg: [
          {
            es: "Con otra preposición, pour, dans, à, usas lequel, que concuerda con el nombre.",
            p: 1
          },
          {
            fr: "la raison pour laquelle je m'oppose",
            p: 1
          },
          {
            fr: "l'entreprise dans laquelle je travaille",
            p: 2
          },
          {
            es: "Con à se contrae: auquel, auxquels.",
            p: 3
          },
          {
            fr: "le projet auquel je participe",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Car",
        titulo: "Car nunca va al principio",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Les étudiants partent, car les loyers augmentent.",
            es: "Los estudiantes se van, pues los arriendos suben."
          },
          {
            p: 2,
            fr: "Comme les loyers augmentent, les étudiants partent.",
            es: "Como los arriendos suben, los estudiantes se van."
          },
          {
            p: 3,
            regla: "car: siempre en medio · para empezar con la causa: comme, parce que o en effet"
          }
        ],
        seg: [
          {
            es: "Car introduce una causa, pero nunca va al principio.",
            p: 1
          },
          {
            fr: "Les étudiants partent, car les loyers augmentent.",
            p: 1
          },
          {
            es: "Para empezar con la causa, comme:",
            p: 2
          },
          {
            fr: "Comme les loyers augmentent, les étudiants partent.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En la vida real",
        titulo: "Una frase con «que» por todas partes",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Vous avez écrit : « C'est un problème que on parle beaucoup. »",
            es: "Escribió: «Es un problema que se habla mucho»."
          },
          {
            p: 2,
            fr: "On parle de ce problème… alors c'est dont ?",
            es: "Se habla de este problema… ¿entonces es dont?"
          },
          {
            p: 3,
            fr: "Exactement : C'est un problème dont on parle beaucoup.",
            es: "Exacto: Es un problema del que se habla mucho."
          },
          {
            p: 4,
            fr: "Et « la raison pour la que » ?",
            es: "¿Y «la razón por la que»?"
          }
        ],
        seg: [
          {
            es: "Escucha cómo suena en una conversación de verdad."
          },
          {
            fr: "Vous avez écrit : « C'est un problème que on parle beaucoup. »",
            p: 1
          },
          {
            fr: "On parle de ce problème… alors c'est dont ?",
            p: 2
          },
          {
            fr: "Exactement : C'est un problème dont on parle beaucoup.",
            p: 3
          },
          {
            fr: "Et « la raison pour la que » ?",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Contraste con el español",
        titulo: "Del que se habla… dont on parle",
        mz: "m2d/alerta",
        items: [
          {
            p: 1,
            regla: "Español: del que se habla · francés: dont on parle (no que on parle)"
          },
          {
            p: 2,
            regla: "Español: la razón por la que · francés: la raison pour laquelle (no pour la que)"
          },
          {
            p: 3,
            regla: "Español: el año en que · francés: l'année où (no que)"
          }
        ],
        seg: [
          {
            es: "El español dice del que, de la que. El francés lo resume en dont.",
            p: 1
          },
          {
            es: "Por la que no existe en francés: pour laquelle.",
            p: 2
          },
          {
            es: "Y para el tiempo, où: l'année où j'ai commencé.",
            p: 3
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "C'est un problème que on parle beaucoup.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "C'est un problème dont on parle beaucoup.",
          es: "parler de → dont."
        },
        seg: [
          {
            es: "Primera trampa: que con un verbo que lleva de.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "C'est un problème dont on parle beaucoup.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Car les loyers augmentent, les étudiants partent.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Comme les loyers augmentent, les étudiants partent.",
          es: "car no va al principio."
        },
        seg: [
          {
            es: "Segunda trampa: empezar con car.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Comme les loyers augmentent, les étudiants partent.",
            p: 2
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/pensativo",
        q: "Di «la razón por la que me opongo».",
        o: [
          "la raison pour laquelle je m'oppose",
          "la raison pour la que je m'oppose"
        ],
        a: 0,
        bien: "¡Eso es! Pour laquelle.",
        mal: "Preposición + laquelle.",
        seg: [
          {
            es: "Te toca. ¿Cómo dices la razón por la que me opongo?"
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/confundido",
        q: "Di «el proyecto en el que participo».",
        o: [
          "le projet auquel je participe",
          "le projet dont je participe"
        ],
        a: 0,
        bien: "¡Muy bien! Auquel.",
        mal: "Participer à: à + lequel = auquel.",
        seg: [
          {
            es: "Una más. ¿Cómo dices el proyecto en el que participo?"
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
            fr: "C'est une crise grave dont on parle beaucoup.",
            es: "Une: «On parle beaucoup de cette crise. C'est une crise grave."
          },
          {
            p: 2,
            fr: "le projet auquel je participe",
            es: "Di «el proyecto en el que participo»."
          },
          {
            p: 3,
            fr: "la raison pour laquelle je m'oppose",
            es: "Di «la razón por la que me opongo»."
          }
        ],
        seg: [
          {
            es: "Ahora tú. Escucha cada frase y repítela en voz alta."
          },
          {
            fr: "C'est une crise grave dont on parle beaucoup.",
            p: 1
          },
          {
            es: "Otra vez.",
            p: 1
          },
          {
            fr: "C'est une crise grave dont on parle beaucoup.",
            p: 1
          },
          {
            fr: "le projet auquel je participe",
            p: 2
          },
          {
            es: "Otra vez.",
            p: 2
          },
          {
            fr: "le projet auquel je participe",
            p: 2
          },
          {
            fr: "la raison pour laquelle je m'oppose",
            p: 3
          },
          {
            es: "Otra vez.",
            p: 3
          },
          {
            fr: "la raison pour laquelle je m'oppose",
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
                "El verbo lleva…",
                "Relativo"
              ],
              [
                "nada (COD)",
                "que: le livre que je lis"
              ],
              [
                "de",
                "dont: le problème dont on parle"
              ],
              [
                "à",
                "auquel, à laquelle, auxquels"
              ],
              [
                "otra preposición",
                "pour laquelle, dans lequel…"
              ],
              [
                "lugar o tiempo",
                "où: l'année où…"
              ]
            ]
          },
          {
            p: 2,
            regla: "Reconstruye la frase para elegir el relativo"
          }
        ],
        seg: [
          {
            es: "Repasemos.",
            p: 1
          },
          {
            es: "Dont si el verbo lleva de.",
            p: 1
          },
          {
            es: "Lequel con las demás preposiciones. ¡Ahora, a practicar!",
            p: 2
          }
        ]
      }
    ]
  },
  contexto: {
    titulo: "Una frase con «que» por todas partes", img: "bg-biblioteca", yo: "laura",
    escena: "Laura usa que en todas sus relativas, como el «que» del español hablado.",
    pj: { tutrice: { n: "Madame Roche", voz: "fr-FR-DeniseNeural", rol: "la tutora" }, laura: { n: "Laura", voz: "fr-FR-VivienneMultilingualNeural", rol: "estudiante" } },
    lineas: [
      ["tutrice", "Vous avez écrit : « C'est un problème que on parle beaucoup. »", "Escribió: «Es un problema que se habla mucho»."],
      ["laura", "On parle de ce problème… alors c'est dont ?", "Se habla de este problema… ¿entonces es dont?"],
      ["tutrice", "Exactement : C'est un problème dont on parle beaucoup.", "Exacto: Es un problema del que se habla mucho."],
      ["laura", "Et « la raison pour la que » ?", "¿Y «la razón por la que»?"],
      ["tutrice", "En français : la raison pour laquelle.", "En francés: la raison pour laquelle."]
    ],
    fijate: "Fíjate: el relativo depende de cómo se construye el verbo, igual que los pronombres de la lección 3."
  },
  ensena: [
    { id: "tipos", tipo: "gram", titulo: "Simple o compleja",
      idea: "Cuenta los verbos conjugados: uno es frase simple; dos o más, frase compleja.",
      intro: "Las ideas se unen con una coma, con un conector (mais, car) o con una palabra que subordina (bien que, qui, dont).",
      analiza: { frases: [
        { partes: [["La mairie maintient ce projet coûteux.", "prin"]], es: "Simple: un verbo" },
        { partes: [["Le projet est coûteux,", "prin"], ["mais", "conn"], ["la mairie le maintient.", "prin"]], es: "Compleja con conector" },
        { partes: [["Bien que le projet soit coûteux,", "sub"], ["la mairie le maintient.", "prin"]], es: "Compleja con subordinada" }
      ]},
      regla: ["car = «porque» (parce que): introduce una causa (une cause), pero nunca va al principio de la frase.", "Para empezar una frase con la causa: Parce que… o En effet…", "Más de 30 palabras en una frase: córtala en dos."] },
    { id: "dont", tipo: "gram", titulo: "dont = de + algo",
      idea: "Si el verbo se construye con de, el relativo es dont.",
      intro: "Es el «del que», «de la que», «cuyo» del español.",
      tabla: [["Francés", "Viene de · español", "Verbo"], [
        ["C'est un problème dont on parle.", "on parle de ce problème · del que se habla", "parler de"],
        ["l'étude dont parle l'article", "l'article parle de cette étude · el estudio del que habla el artículo", "parler de"],
        ["le livre dont j'ai besoin", "j'ai besoin de ce livre · el libro que necesito", "avoir besoin de"]
      ]],
      regla: ["Reconstruye la frase: on parle de ce problème → dont.", "No uses que con verbos que llevan de: «un problème que on parle» es un error."] },
    { id: "lequel", tipo: "gram", titulo: "Preposición + lequel",
      idea: "Con otra preposición (à, pour, dans…), usas lequel, que concuerda con el nombre.",
      intro: "Es el «el que», «la que» del español después de una preposición.",
      tabla: [["Francés", "Español", "Forma"], [
        ["le projet auquel je participe", "el proyecto en el que participo", "à + lequel = auquel"],
        ["la raison pour laquelle", "la razón por la que", "pour + laquelle"],
        ["l'entreprise dans laquelle je travaille", "la empresa en la que trabajo", "dans + laquelle"],
        ["les projets auxquels je participe", "los proyectos en los que participo", "à + lesquels = auxquels"]
      ]],
      regla: ["lequel, laquelle, lesquels, lesquelles: según el nombre.", "Con à se contrae: auquel, auxquels.", "Para un lugar o un momento también sirve où: la ville où je vis."] },
    {
      id: "ojo",
      tipo: "ojo",
      titulo: "Errores frecuentes",
      intro: "Tres errores que cometemos casi todos los hispanohablantes. Cázalos uno por uno.",
      errores: [
        {
          sit: "Laura escribe:",
          frase: "C'est un problème que on parle beaucoup.",
          mal: "que on",
          bien: "dont on",
          porque: "En español «del que se habla» y nos quedamos con que.",
          truco: "Parler de → dont: un problème dont on parle."
        },
        {
          sit: "Laura empieza su párrafo:",
          frase: "Car les loyers augmentent, les étudiants partent.",
          mal: "Car les",
          bien: "Comme les",
          porque: "Usamos car como el «porque» del principio.",
          truco: "Car nunca abre la frase: comme les loyers augmentent."
        },
        {
          sit: "Laura busca su libro:",
          frase: "Le livre que j'ai besoin est à la bibliothèque.",
          mal: "que j'ai",
          bien: "dont j'ai",
          porque: "En español «el libro que necesito», sin preposición.",
          truco: "Avoir besoin de → dont j'ai besoin."
        }
      ]
    }
  ],
  ejemplos: [
    {
      sit: "Une: «On parle beaucoup de cette crise. C'est une crise grave.»",
      resp: "C'est une crise grave dont on parle beaucoup.",
      porque: "parler de → dont.",
      pasos: [
        {
          q: "¿Cómo se construye parler?",
          ops: [
            "parler de",
            "parler sin preposición"
          ],
          ok: 0
        },
        {
          q: "¿Qué relativo?",
          ops: [
            "dont",
            "que"
          ],
          ok: 0
        },
        {
          q: "¿Cómo queda?",
          ops: [
            "une crise grave dont on parle",
            "une crise grave que on parle"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "Di «el proyecto en el que participo».",
      resp: "le projet auquel je participe",
      porque: "participer à → auquel.",
      pasos: [
        {
          q: "¿Qué preposición pide participer?",
          ops: [
            "à",
            "de"
          ],
          ok: 0
        },
        {
          q: "¿Projet es…?",
          ops: [
            "masculino singular: lequel",
            "femenino"
          ],
          ok: 0
        },
        {
          q: "¿À + lequel?",
          ops: [
            "auquel",
            "à lequel"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "Di «la razón por la que me opongo».",
      resp: "la raison pour laquelle je m'oppose",
      porque: "pour + laquelle.",
      pasos: [
        {
          q: "¿Qué preposición?",
          ops: [
            "pour",
            "de"
          ],
          ok: 0
        },
        {
          q: "¿Raison es…?",
          ops: [
            "femenino: laquelle",
            "masculino"
          ],
          ok: 0
        },
        {
          q: "¿Cómo queda?",
          ops: [
            "pour laquelle",
            "pour la que"
          ],
          ok: 0
        }
      ]
    }
  ],
  comprueba: [
    { q: "Una frase con dos verbos conjugados es…", o: ["compleja", "simple"], a: 0, b: "tipos", porque: "Más de un verbo = compleja." },
    { q: "parler de quelque chose → el relativo es…", o: ["dont", "que"], a: 0, b: "dont", porque: "de → dont." },
    { q: "participer à → «le projet ___ je participe»", o: ["auquel", "dont"], a: 0, b: "lequel", porque: "à + lequel = auquel." },
    { q: "car puede ir al principio de la frase…", o: ["No, nunca", "Sí"], a: 0, b: "tipos", porque: "Al principio: Parce que…" }
  ],
  practica: [
    { fase: "guiada", c: ["ph-type"], k: "choice", ask: "¿Cuál es una frase compleja?", q: "Cuenta los verbos conjugados.", o: ["Bien que le projet soit coûteux, la mairie le maintient.", "La mairie maintient ce projet coûteux."], a: 0, pista: "¿Cuántos verbos conjugados hay?", why: "Dos verbos (<i>soit, maintient</i>): <b>compleja</b>." },
    { fase: "guiada", c: ["ph-dont"], k: "choice", ask: "Elige el relativo.", q: "L'étude ___ parle l'article date de l'an dernier.", o: ["dont", "que"], a: 0, pista: "parler de…", why: "<i>parler de</i> → <b>dont</b>." },
    { fase: "guiada", c: ["ph-lequel"], k: "choice", ask: "Elige el relativo.", q: "Le projet ___ je participe est ambitieux.", o: ["auquel", "dont", "que"], a: 0, pista: "participer à…", why: "à + lequel = <b>auquel</b>." },
    { fase: "guiada", c: ["ph-car"], k: "choice", ask: "¿Qué introduce car?", q: "« La mairie maintient le projet, car il est utile. »", o: ["une cause", "une conséquence", "une opposition"], a: 0, pista: "car = parce que.", why: "<b>car</b> = causa." },
    { fase: "indep", c: ["ph-lequel"], k: "choice", ask: "Elige el relativo.", q: "C'est la raison ___ je m'oppose à ce projet.", o: ["pour laquelle", "pour quoi", "que"], a: 0, why: "<b>pour laquelle</b>." },
    { fase: "indep", c: ["ph-lequel"], k: "choice", ask: "Elige el relativo.", q: "L'entreprise ___ je travaille favorise le télétravail.", o: ["dans laquelle", "que", "dont"], a: 0, why: "<b>dans laquelle</b> (o <i>où</i>)." },
    { fase: "indep", c: ["ph-dont"], k: "spot", ask: "Encuentra el relativo incorrecto y corrígelo.", s: "C'est un problème [que] on parle beaucoup .", fix: "dont", why: "<i>parler de</i> → <b>dont</b>." },
    { fase: "indep", c: ["ph-type"], k: "choice", ask: "¿Simple o compleja?", q: "« Un projet coûteux, maintenu par la mairie. »", o: ["simple (sin verbo conjugado)", "compleja"], a: 0, es: true, why: "No hay verbo conjugado: no es compleja." },
    { fase: "indep", c: ["ph-car"], k: "spot", ask: "Corrige el inicio de la frase.", s: "[Car] les loyers augmentent , les étudiants partent .", fix: "Parce que", why: "<i>car</i> nunca al principio: <b>Parce que</b>." },
    { fase: "indep", c: ["ph-dont", "ph-lequel"], k: "match", ask: "Une cada relativo con su uso.", q: "Relativo → uso", pairs: [["dont", "de + algo"], ["auquel", "à + lequel"], ["où", "lugar o tiempo"], ["pour laquelle", "pour + femenino"]], why: "El relativo depende de la construcción del verbo." },
    { fase: "aplica", c: ["ph-lequel"], k: "fill", ask: "Escribe el relativo de lugar.", ctx: "Analizas el teletrabajo y la vivienda.", q: "Les villes ___ le télétravail s'est développé ont vu les loyers baisser.", acc: ["où", "dans lesquelles"], why: "Lugar: <b>où</b> (o <i>dans lesquelles</i>)." },
    { fase: "aplica", c: ["ph-dont"], k: "choice", ask: "Une las dos frases.", ctx: "«J'ai besoin de ce livre. Ce livre est à la bibliothèque.»", q: "Versión con relativo:", o: ["Le livre dont j'ai besoin est à la bibliothèque.", "Le livre que j'ai besoin est à la bibliothèque."], a: 0, why: "<i>avoir besoin de</i> → <b>dont</b>." },
    { fase: "aplica", c: ["ph-car", "ph-type"], k: "choice", ask: "Elige la frase correcta para tu ensayo.", q: "Causa + consecuencia", o: ["Les étudiants partent, car les loyers augmentent.", "Car les loyers augmentent, les étudiants partent."], a: 0, why: "<i>car</i> en medio, nunca al principio." },
    { fase: "dominio", c: ["ph-dont"], k: "choice", ask: "Elige el relativo.", q: "C'est une auteure ___ on connaît bien l'œuvre.", o: ["dont", "que", "laquelle"], a: 0, why: "<i>l'œuvre de cette auteure</i> → <b>dont</b>." },
    { fase: "dominio", c: ["ph-lequel"], k: "choice", ask: "Elige el relativo.", q: "Les projets ___ je participe sont financés par l'université.", o: ["auxquels", "auquel", "dont"], a: 0, why: "Plural: à + lesquels = <b>auxquels</b>." },
    { fase: "dominio", c: ["ph-type"], k: "choice", ask: "¿Cuántos verbos conjugados hay?", q: "« Le projet est coûteux, mais la mairie le maintient. »", o: ["deux", "un"], a: 0, why: "<i>est</i> y <i>maintient</i>: frase compleja." },
    { fase: "dominio", c: ["ph-car"], k: "choice", ask: "Elige el conector.", q: "« ___ le budget est limité, il faut choisir. »", o: ["Parce que", "Car"], a: 0, why: "Al principio: <b>Parce que</b>." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche"], previo: ["deux"] }
};

/* Lección 8 · La inversión del sujeto (registro formal) */
window.__ENSENA["inv"] = {
  v: 1, arts: false, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "L'inversion du sujet",
  roles: { suj: "sujeto", verbe: "verbo", pron: "pronombre", adv: "adverbio" },
  objetivo: {
    que: "Vas a poner el verbo antes del sujeto para hacer preguntas formales, citar a alguien y escribir en registro académico.",
    corto: "Le maire a-t-il répondu ? Así pregunta el francés formal.",
    podras: ["Hacer preguntas formales con sujeto pronombre o nombre.", "Añadir el -t- cuando hace falta.", "Citar a alguien: affirme la sociologue.", "Usar peut-être faut-il…"],
    iconos: ["ic2/pregunta", "m2d/senalar", "ic2/microfono", "m2d/escribiendo"],
    previos: ["Los pronombres sujeto y el passé composé."],
    capacidad: "Ahora usas la inversión del sujeto como en un texto académico o un examen C1."
  },
  requiere: [],
  recupera: [],
  conceptos: {
    "inv-pron": { n: "Sujeto pronombre: verbo-pronombre (y el -t-)", b: "pron" },
    "inv-nom": { n: "Sujeto nombre: nombre + verbo-pronombre", b: "nom" },
    "inv-incise": { n: "El inciso: affirme la sociologue", b: "incise" },
    "inv-adv": { n: "Después de peut-être, sans doute, aussi", b: "adv" }
  },
  video: {
    titulo: "La inversión del sujeto",
    voz: "es-CO-SalomeNeural",
    escenas: [
      {
        v: "persona",
        cap: "Para qué sirve",
        fondo: "esc/sala-examen-oral",
        img: "pj/laura-neutra",
        fr: "Le maire a-t-il répondu à la lettre ?",
        es: "¿Respondió el alcalde a la carta?",
        nota: "Una pregunta formal",
        seg: [
          {
            es: "Laura escribió: a le maire répondu à la lettre? La tutora le explica que el nombre no puede ir detrás del verbo."
          },
          {
            fr: "Le maire a-t-il répondu à la lettre ?",
            p: 1
          },
          {
            es: "La inversión es la marca del registro formal: en preguntas escritas, al citar a alguien y después de peut-être. Hoy aprendes sus tres reglas.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Con un pronombre",
        titulo: "Verbo + guion + pronombre",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Pouvez-vous reformuler la question ?",
            es: "¿Puede reformular la pregunta?"
          },
          {
            p: 2,
            fr: "Va-t-elle accepter ?",
            es: "¿Va a aceptar ella?"
          },
          {
            p: 3,
            fr: "A-t-il compris la consigne ?",
            es: "¿Entendió la consigna?"
          },
          {
            p: 4,
            regla: "vocal + vocal (a il, va elle, parle on): -t- en medio · tiempo compuesto: se invierte el auxiliar"
          }
        ],
        seg: [
          {
            es: "Si el sujeto es un pronombre, va detrás del verbo con guion.",
            p: 1
          },
          {
            fr: "Pouvez-vous reformuler la question ?",
            p: 1
          },
          {
            es: "Si el verbo termina en vocal y el pronombre empieza por vocal, se mete una t.",
            p: 2
          },
          {
            fr: "Va-t-elle accepter ?",
            p: 2
          },
          {
            es: "En tiempo compuesto, se invierte el auxiliar:",
            p: 3
          },
          {
            fr: "A-t-il compris la consigne ?",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Con un nombre",
        titulo: "El nombre delante + pronombre",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Le maire a-t-il répondu à la lettre ?",
            es: "¿Respondió el alcalde a la carta?"
          },
          {
            p: 2,
            fr: "Les chercheurs ont-ils pris en compte ce biais ?",
            es: "¿Tuvieron en cuenta este sesgo los investigadores?"
          },
          {
            p: 3,
            regla: "nombre + verbo + guion + pronombre que lo repite (nunca A le maire répondu ?)"
          }
        ],
        seg: [
          {
            es: "Si el sujeto es un nombre, el nombre se queda delante, y se repite con un pronombre detrás del verbo.",
            p: 1
          },
          {
            fr: "Le maire a-t-il répondu à la lettre ?",
            p: 1
          },
          {
            fr: "Les chercheurs ont-ils pris en compte ce biais ?",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Al citar",
        titulo: "Affirme la sociologue",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "« Le télétravail isole », affirme la sociologue.",
            es: "«El teletrabajo aísla», afirma la socióloga."
          },
          {
            p: 2,
            fr: "Le télétravail, affirme-t-elle, est un progrès.",
            es: "El teletrabajo, afirma ella, es un avance."
          },
          {
            p: 3,
            regla: "verbos de cita (affirme, estime, souligne, explique) antes del sujeto"
          }
        ],
        seg: [
          {
            es: "Al citar, el verbo de decir va antes de su sujeto.",
            p: 1
          },
          {
            fr: "« Le télétravail isole », affirme la sociologue.",
            p: 1
          },
          {
            es: "Con pronombre, guion y t si hace falta:",
            p: 2
          },
          {
            fr: "Le télétravail, affirme-t-elle, est un progrès.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Peut-être, sans doute",
        titulo: "Al principio: inversión",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Peut-être faut-il revoir le projet.",
            es: "Quizás haya que revisar el proyecto."
          },
          {
            p: 2,
            fr: "Peut-être la solution réside-t-elle ailleurs.",
            es: "Quizás la solución esté en otra parte."
          },
          {
            p: 3,
            regla: "peut-être, sans doute, aussi (= por eso) al principio → inversión · más corriente: peut-être qu'il faut…"
          }
        ],
        seg: [
          {
            es: "Si la frase empieza por peut-être o sans doute, el registro formal invierte el sujeto.",
            p: 1
          },
          {
            fr: "Peut-être faut-il revoir le projet.",
            p: 1
          },
          {
            fr: "Peut-être la solution réside-t-elle ailleurs.",
            p: 2
          },
          {
            es: "Ojo: aussi al principio significa por eso, no también.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En la vida real",
        titulo: "Una pregunta formal",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "J'ai écrit : « A le maire répondu à la lettre ? »",
            es: "Escribí: «¿Ha respondido el alcalde a la carta?»"
          },
          {
            p: 2,
            fr: "En français, le nom ne passe pas derrière le verbe. On dit : Le maire a-t-il répondu à la lettre ?",
            es: "En francés el nombre no pasa detrás del verbo. Se dice: Le maire a-t-il répondu à la lettre ?"
          },
          {
            p: 3,
            fr: "Donc le nom reste devant, et on ajoute « il ».",
            es: "Entonces el nombre se queda delante y se añade «il»."
          },
          {
            p: 4,
            fr: "Exactement. Et pour conclure, écrivez : Peut-être faut-il revoir le projet.",
            es: "Exacto. Y para concluir, escriba: Quizás haya que revisar el proyecto."
          }
        ],
        seg: [
          {
            es: "Escucha cómo suena en una conversación de verdad."
          },
          {
            fr: "J'ai écrit : « A le maire répondu à la lettre ? »",
            p: 1
          },
          {
            fr: "En français, le nom ne passe pas derrière le verbe. On dit : Le maire a-t-il répondu à la lettre ?",
            p: 2
          },
          {
            fr: "Donc le nom reste devant, et on ajoute « il ».",
            p: 3
          },
          {
            fr: "Exactement. Et pour conclure, écrivez : Peut-être faut-il revoir le projet.",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Contraste con el español",
        titulo: "¿Respondió el alcalde?… le maire a-t-il répondu ?",
        mz: "m2d/alerta",
        items: [
          {
            p: 1,
            regla: "Español: ¿respondió el alcalde? (nombre detrás) · francés: le maire a-t-il répondu ? (nombre delante)"
          },
          {
            p: 2,
            regla: "Español: ¿entendió? · francés formal: a-t-il compris ? (con -t-)"
          },
          {
            p: 3,
            regla: "Español: quizás hay que · francés formal: peut-être faut-il"
          }
        ],
        seg: [
          {
            es: "En español el nombre puede ir detrás del verbo. En francés, nunca: se queda delante y se repite con un pronombre.",
            p: 1
          },
          {
            es: "La t entre vocales no significa nada: solo suena mejor.",
            p: 2
          },
          {
            es: "Y después de peut-être, en registro formal, se invierte.",
            p: 3
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "A-il compris la consigne ?",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "A-t-il compris la consigne ?",
          es: "Entre dos vocales: -t-."
        },
        seg: [
          {
            es: "Primera trampa: olvidar la t.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "A-t-il compris la consigne ?",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "A le maire répondu à votre lettre ?",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Le maire a-t-il répondu à votre lettre ?",
          es: "El nombre se queda delante."
        },
        seg: [
          {
            es: "Segunda trampa: el nombre detrás del verbo.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Le maire a-t-il répondu à votre lettre ?",
            p: 2
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/pensativo",
        q: "Pregunta formal: «¿Va a aceptar ella?»",
        o: [
          "Va-t-elle accepter ?",
          "Va-elle accepter ?"
        ],
        a: 0,
        bien: "¡Eso es! Va-t-elle.",
        mal: "Entre dos vocales: -t-.",
        seg: [
          {
            es: "Te toca. Pregunta formal: ¿va a aceptar ella?"
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/confundido",
        q: "Concluye con prudencia: «Quizás haya que revisar el proyecto».",
        o: [
          "Peut-être faut-il revoir le projet.",
          "Peut-être il faut revoir le projet."
        ],
        a: 0,
        bien: "¡Muy bien! Peut-être faut-il.",
        mal: "Registro formal: inversión tras peut-être.",
        seg: [
          {
            es: "Una más. Concluye con prudencia: quizás haya que revisar el proyecto."
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
            fr: "Les chercheurs ont-ils pris en compte ce biais ?",
            es: "Pregunta formal: «¿Han tenido en cuenta este sesgo los investigadores?"
          },
          {
            p: 2,
            fr: "Va-t-elle accepter ?",
            es: "Pregunta formal: «¿Va a aceptar ella?"
          },
          {
            p: 3,
            fr: "Peut-être la solution réside-t-elle ailleurs.",
            es: "Concluye con prudencia: «Quizás la solución esté en otra parte»."
          }
        ],
        seg: [
          {
            es: "Ahora tú. Escucha cada frase y repítela en voz alta."
          },
          {
            fr: "Les chercheurs ont-ils pris en compte ce biais ?",
            p: 1
          },
          {
            es: "Otra vez.",
            p: 1
          },
          {
            fr: "Les chercheurs ont-ils pris en compte ce biais ?",
            p: 1
          },
          {
            fr: "Va-t-elle accepter ?",
            p: 2
          },
          {
            es: "Otra vez.",
            p: 2
          },
          {
            fr: "Va-t-elle accepter ?",
            p: 2
          },
          {
            fr: "Peut-être la solution réside-t-elle ailleurs.",
            p: 3
          },
          {
            es: "Otra vez.",
            p: 3
          },
          {
            fr: "Peut-être la solution réside-t-elle ailleurs.",
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
                "Inversión"
              ],
              [
                "sujeto pronombre",
                "pouvez-vous ? · a-t-il compris ?"
              ],
              [
                "sujeto nombre",
                "le maire a-t-il répondu ?"
              ],
              [
                "al citar",
                "affirme la sociologue · affirme-t-elle"
              ],
              [
                "peut-être, sans doute",
                "peut-être faut-il…"
              ]
            ]
          },
          {
            p: 2,
            regla: "Vocal + vocal: -t- · el nombre nunca detrás"
          }
        ],
        seg: [
          {
            es: "Repasemos.",
            p: 1
          },
          {
            es: "Pronombre detrás con guion.",
            p: 1
          },
          {
            es: "Y el nombre delante, repetido con un pronombre. ¡Ahora, a practicar!",
            p: 2
          }
        ]
      }
    ]
  },
  contexto: {
    titulo: "Una pregunta formal", img: "bg-biblioteca", yo: "laura",
    escena: "Laura prepara preguntas formales para una entrevista con el alcalde.",
    pj: { tutrice: { n: "Madame Roche", voz: "fr-FR-DeniseNeural", rol: "la tutora" }, laura: { n: "Laura", voz: "fr-FR-VivienneMultilingualNeural", rol: "estudiante" } },
    lineas: [
      ["laura", "J'ai écrit : « A le maire répondu à la lettre ? »", "Escribí: «¿Ha respondido el alcalde a la carta?»"],
      ["tutrice", "En français, le nom ne passe pas derrière le verbe. On dit : Le maire a-t-il répondu à la lettre ?", "En francés el nombre no pasa detrás del verbo. Se dice: Le maire a-t-il répondu à la lettre ?"],
      ["laura", "Donc le nom reste devant, et on ajoute « il ».", "Entonces el nombre se queda delante y se añade «il»."],
      ["tutrice", "Exactement. Et pour conclure, écrivez : Peut-être faut-il revoir le projet.", "Exacto. Y para concluir, escriba: Quizás haya que revisar el proyecto."]
    ],
    fijate: "Fíjate: en español «¿Ha respondido el alcalde?» pone el nombre detrás; el francés no puede: lo repite con un pronombre."
  },
  ensena: [
    { id: "pron", tipo: "gram", titulo: "Sujeto pronombre",
      idea: "Si el sujeto es un pronombre, va detrás del verbo con un guion: Pouvez-vous… ?",
      intro: "Es la pregunta formal, más elegante que est-ce que.",
      analiza: { frases: [
        { partes: [["Pouvez", "verbe"], ["-vous", "pron"], ["préciser ?", "-"]], fr: "Pouvez-vous préciser ?", es: "¿Puede precisar?" },
        { partes: [["A", "verbe"], ["-t-il", "pron"], ["compris ?", "-"]], fr: "A-t-il compris ?", es: "¿Ha entendido?" },
        { partes: [["Va", "verbe"], ["-t-elle", "pron"], ["accepter ?", "-"]], fr: "Va-t-elle accepter ?", es: "¿Va a aceptar?" }
      ]},
      regla: ["Verbo + guion + pronombre: Pouvez-vous ?", "Si el verbo termina en vocal y el pronombre empieza por vocal (il, elle, on), añade -t-: a-t-il, va-t-elle, parle-t-on.", "Con un tiempo compuesto se invierte el auxiliar: a-t-elle dû…"] },
    { id: "nom", tipo: "gram", titulo: "Sujeto nombre",
      idea: "Si el sujeto es un nombre, el nombre se queda delante y se repite con un pronombre: Le maire a-t-il répondu ?",
      intro: "El español pone el nombre detrás; el francés no puede hacerlo.",
      analiza: { frases: [
        { partes: [["Le maire", "suj"], ["a", "verbe"], ["-t-il", "pron"], ["répondu ?", "-"]], fr: "Le maire a-t-il répondu ?", es: "¿Ha respondido el alcalde?" },
        { partes: [["Les chercheurs", "suj"], ["ont", "verbe"], ["-ils", "pron"], ["pris en compte ce biais ?", "-"]], fr: "Les chercheurs ont-ils pris en compte ce biais ?", es: "¿Han tenido en cuenta este sesgo los investigadores?" }
      ]},
      regla: ["Nombre + verbo + guion + pronombre que lo repite: Le maire a-t-il…", "Nunca «A le maire répondu ?»."] },
    { id: "incise", tipo: "uso", titulo: "El inciso: citar a alguien",
      idea: "Cuando citas a alguien, el verbo de decir va antes de su sujeto: affirme la sociologue.",
      intro: "Como en español: «—Es preocupante —afirma la socióloga».",
      pares: [
        ["« Le télétravail, affirme la sociologue, est une révolution inachevée. »", "«El teletrabajo —afirma la socióloga— es una revolución inacabada»"],
        ["« Rien n'est joué », estime le ministre.", "«Nada está decidido», estima el ministro"],
        ["« C'est inacceptable », affirme-t-elle.", "«Es inaceptable», afirma ella"]
      ],
      regla: ["Verbos para citar: affirme, estime, souligne, explique.", "Con un nombre: verbo + nombre (affirme la sociologue), sin pronombre extra.", "Con pronombre: verbo-pronombre, con -t- si hace falta: affirme-t-elle."] },
    { id: "adv", tipo: "uso", titulo: "Después de peut-être, sans doute, aussi",
      idea: "Si la frase empieza por peut-être, sans doute o aussi (= por eso), el registro formal invierte el sujeto.",
      intro: "Es muy útil para concluir un ensayo con prudencia.",
      pares: [
        ["Peut-être faut-il revoir le projet.", "Quizás haya que revisar el proyecto"],
        ["Sans doute cette mesure est-elle insuffisante.", "Sin duda esta medida es insuficiente"],
        ["Les coûts augmentent ; aussi la ville a-t-elle renoncé au projet.", "Los costos suben; por eso la ciudad renunció al proyecto"]
      ],
      regla: ["Ojo: aussi al principio significa «por eso», no «también».", "Sin inversión, más corriente: Peut-être qu'il faut…"] },
    {
      id: "ojo",
      tipo: "ojo",
      titulo: "Errores frecuentes",
      intro: "Tres errores que cometemos casi todos los hispanohablantes. Cázalos uno por uno.",
      errores: [
        {
          sit: "La tutora pregunta:",
          frase: "A-il compris la consigne ?",
          mal: "A-il",
          bien: "A-t-il",
          porque: "No pronunciamos la t que une las vocales.",
          truco: "Vocal + vocal: a-t-il."
        },
        {
          sit: "Laura escribe:",
          frase: "A le maire répondu à votre lettre ?",
          mal: "A le maire répondu",
          bien: "Le maire a-t-il répondu",
          porque: "En español el nombre puede ir detrás: ¿respondió el alcalde?",
          truco: "El nombre delante y un pronombre detrás del verbo."
        },
        {
          sit: "Laura concluye:",
          frase: "Peut-être il faut revoir le projet.",
          mal: "Peut-être il faut",
          bien: "Peut-être faut-il",
          porque: "Dejamos el orden normal después de peut-être.",
          truco: "Registro formal: peut-être faut-il."
        }
      ]
    }
  ],
  ejemplos: [
    {
      sit: "Pregunta formal: «¿Han tenido en cuenta este sesgo los investigadores?»",
      resp: "Les chercheurs ont-ils pris en compte ce biais ?",
      porque: "nombre + verbo-pronombre.",
      pasos: [
        {
          q: "¿El sujeto es un nombre o un pronombre?",
          ops: [
            "un nombre: les chercheurs",
            "un pronombre"
          ],
          ok: 0
        },
        {
          q: "¿Dónde queda el nombre?",
          ops: [
            "delante",
            "detrás del verbo"
          ],
          ok: 0
        },
        {
          q: "¿Qué se añade?",
          ops: [
            "ont-ils",
            "ont les"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "Pregunta formal: «¿Va a aceptar ella?»",
      resp: "Va-t-elle accepter ?",
      porque: "vocal + vocal → -t-.",
      pasos: [
        {
          q: "¿Qué se invierte?",
          ops: [
            "va + elle",
            "accepter + elle"
          ],
          ok: 0
        },
        {
          q: "¿Hace falta la t?",
          ops: [
            "sí: va-t-elle",
            "no"
          ],
          ok: 0
        },
        {
          q: "¿Y accepter?",
          ops: [
            "queda en infinitivo",
            "se conjuga"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "Concluye con prudencia: «Quizás la solución esté en otra parte».",
      resp: "Peut-être la solution réside-t-elle ailleurs.",
      porque: "peut-être + inversión.",
      pasos: [
        {
          q: "¿Cómo empiezas?",
          ops: [
            "peut-être",
            "sans doute que"
          ],
          ok: 0
        },
        {
          q: "¿El sujeto es un nombre?",
          ops: [
            "sí: la solution",
            "no"
          ],
          ok: 0
        },
        {
          q: "¿Cómo se invierte?",
          ops: [
            "réside-t-elle",
            "réside la solution"
          ],
          ok: 0
        }
      ]
    }
  ],
  comprueba: [
    { q: "Pregunta formal con sujeto pronombre:", o: ["Pouvez-vous préciser ?", "Vous pouvez préciser ?"], a: 0, b: "pron", porque: "Verbo-pronombre." },
    { q: "«¿Ha respondido el alcalde?»", o: ["Le maire a-t-il répondu ?", "A le maire répondu ?"], a: 0, b: "nom", porque: "Nombre delante + pronombre." },
    { q: "En el inciso «… ___ la sociologue»:", o: ["affirme", "elle affirme"], a: 0, b: "incise", porque: "Verbo antes del sujeto." },
    { q: "aussi al principio de la frase significa…", o: ["por eso", "también"], a: 0, b: "adv", porque: "aussi = c'est pourquoi." }
  ],
  practica: [
    { fase: "guiada", c: ["inv-nom"], k: "choice", ask: "Elige la pregunta formal correcta.", ctx: "Escribes a una asociación que envió una carta al alcalde.", q: "¿Cuál es correcta?", o: ["Le maire a-t-il répondu à votre lettre ?", "Le maire a-il répondu à votre lettre ?", "A le maire répondu à votre lettre ?"], a: 0, pista: "Nombre delante + verbo + -t- + pronombre.", why: "<b>Le maire a-t-il répondu…</b>" },
    { fase: "guiada", c: ["inv-pron"], k: "fill", ask: "Escribe aller en presente (3.ª persona), sin guion.", q: "___ -t-elle accepter cette proposition ?", acc: ["va", "Va"], pista: "elle va…", why: "<b>Va-t-elle</b>." },
    { fase: "guiada", c: ["inv-incise"], k: "choice", ask: "Elige el verbo del inciso.", ctx: "Citas a una socióloga.", q: "« Le télétravail, ___ la sociologue, est une révolution inachevée. »", o: ["affirme", "elle affirme", "a affirmé elle"], a: 0, pista: "Verbo antes del sujeto.", why: "<b>affirme la sociologue</b>." },
    { fase: "guiada", c: ["inv-adv"], k: "choice", ask: "Elige la expresión.", q: "« ___ faut-il repenser l'organisation du travail. »", o: ["Peut-être", "Parce que", "Bien que"], a: 0, pista: "¿Qué palabra provoca la inversión?", why: "<b>Peut-être</b> + inversión." },
    { fase: "indep", c: ["inv-adv", "inv-nom"], k: "choice", ask: "Elige la forma del verbo.", ctx: "Explicas por qué una ciudad abandonó un proyecto.", q: "« Les coûts augmentent ; aussi la ville ___ renoncer au projet. »", o: ["a-t-elle dû", "a dû elle", "elle a dû"], a: 0, why: "aussi = por eso → <b>la ville a-t-elle dû</b>." },
    { fase: "indep", c: ["inv-adv"], k: "choice", ask: "Elige la frase correcta.", q: "Después de «sans doute»", o: ["Sans doute cette mesure est-elle insuffisante.", "Sans doute cette mesure elle est insuffisante.", "Sans doute est cette mesure insuffisante."], a: 0, why: "<b>cette mesure est-elle</b>." },
    { fase: "indep", c: ["inv-pron"], k: "spot", ask: "Corrige la pregunta.", s: "[A-il] compris la consigne ?", fix: "A-t-il", why: "Entre dos vocales: <b>A-t-il</b>." },
    { fase: "indep", c: ["inv-nom"], k: "choice", ask: "Elige la pregunta formal.", q: "«¿Han tenido en cuenta este sesgo los investigadores?»", o: ["Les chercheurs ont-ils pris en compte ce biais ?", "Ont les chercheurs pris en compte ce biais ?"], a: 0, why: "Nombre delante + <b>ont-ils</b>." },
    { fase: "indep", c: ["inv-incise"], k: "choice", ask: "Elige el inciso.", q: "« C'est inacceptable », ___", o: ["affirme-t-elle.", "elle affirme.", "affirme-elle."], a: 0, why: "<b>affirme-t-elle</b>: verbo primero y -t-." },
    { fase: "indep", c: ["inv-pron"], k: "listen", say: "Pouvez-vous préciser ?", acc: ["Pouvez-vous préciser ?"], num: false, dict: true, ask: "Escucha y escribe la pregunta.", why: "<b>Pouvez-vous préciser ?</b>" },
    { fase: "aplica", c: ["inv-pron"], k: "choice", ask: "Elige la pregunta para el jurado.", ctx: "En el oral del DALF, pides una aclaración.", q: "Registro formal:", o: ["Pourriez-vous reformuler la question ?", "Vous pourriez reformuler la question ?"], a: 0, why: "Formal: <b>Pourriez-vous</b>." },
    { fase: "aplica", c: ["inv-incise"], k: "order", ask: "Ordena la cita.", ctx: "Citas a un ministro en tu resumen.", tokens: ["« Rien n'est joué »,", "estime", "le ministre."], why: "Inciso: <b>estime le ministre</b>." },
    { fase: "aplica", c: ["inv-adv"], k: "choice", ask: "Elige la conclusión formal.", ctx: "Terminas tu ensayo.", q: "«Quizás haya que revisar el proyecto.»", o: ["Peut-être faut-il revoir le projet.", "Peut-être il faut revoir le projet."], a: 0, why: "<b>Peut-être faut-il</b>." },
    { fase: "dominio", c: ["inv-nom"], k: "choice", ask: "Elige la pregunta correcta.", q: "«¿Ha aceptado la directora?»", o: ["La directrice a-t-elle accepté ?", "A la directrice accepté ?"], a: 0, why: "Nombre + <b>a-t-elle</b>." },
    { fase: "dominio", c: ["inv-pron"], k: "choice", ask: "Elige la forma.", q: "«¿Se habla bastante de este tema?»", o: ["Parle-t-on assez de ce sujet ?", "Parle-on assez de ce sujet ?"], a: 0, why: "<b>Parle-t-on</b>." },
    { fase: "dominio", c: ["inv-incise"], k: "choice", ask: "Elige el inciso.", q: "« L'avenir, ___ l'économiste, reste incertain. »", o: ["souligne", "il souligne"], a: 0, why: "<b>souligne l'économiste</b>." },
    { fase: "dominio", c: ["inv-adv"], k: "choice", ask: "¿Qué significa aussi aquí?", es: true, q: "« Le budget est limité ; aussi faut-il choisir. »", o: ["por eso", "también"], a: 0, why: "<i>aussi</i> al principio = <b>por eso</b>." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche"] }
};

/* Lección 9 · La entonación (retoma la frase compleja: los grupos de sentido) */
window.__ENSENA["into"] = {
  v: 1, arts: false, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "L'intonation",
  roles: {},
  objetivo: {
    que: "Vas a reconocer y usar la melodía del francés: cuándo sube y cuándo baja la voz, y dónde va el acento.",
    corto: "La voz sube, la voz baja: eso también comunica.",
    podras: ["Distinguir una pregunta de una afirmación solo por la melodía.", "Leer una enumeración con buena entonación.", "Poner el acento al final del grupo de palabras."],
    iconos: ["ic2/audifonos", "ic2/microfono", "m2d/senalar"],
    previos: ["La frase compleja y sus partes (lección anterior)."],
    capacidad: "Ahora entonas como en una exposición oral C1: claro y con ritmo francés."
  },
  requiere: ["ph-type"],
  recupera: [],
  conceptos: {
    "into-q": { n: "Pregunta ↗ y afirmación ↘", b: "melodia" },
    "into-enum": { n: "La enumeración", b: "melodia" },
    "into-acc": { n: "El acento al final del grupo", b: "acento" }
  },
  video: {
    titulo: "La entonación",
    voz: "es-CO-SalomeNeural",
    escenas: [
      {
        v: "persona",
        cap: "Para qué sirve",
        fondo: "esc/auditorio",
        img: "pj/laura-agobiada",
        fr: "En définitive, le bonheur au travail reste fragile.",
        es: "En definitiva, la felicidad en el trabajo sigue siendo frágil.",
        nota: "Ensayar la exposición",
        seg: [
          {
            es: "Laura ensaya la conclusión de su exposición oral del DALF. La tutora le dice: tu voz sube al final, parece que dudas."
          },
          {
            fr: "En définitive, le bonheur au travail reste fragile.",
            p: 1
          },
          {
            es: "En un examen oral, la entonación dice tanto como las palabras. Hoy aprendes cuándo sube y cuándo baja la voz, y dónde va el acento en francés.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Sube o baja",
        titulo: "Pregunta ↗ · afirmación ↘",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Vous êtes d'accord ?",
            es: "¿Está de acuerdo? (la voz sube ↗)"
          },
          {
            p: 2,
            fr: "Vous êtes d'accord.",
            es: "Está de acuerdo. (la voz baja ↘)"
          },
          {
            p: 3,
            regla: "sin palabra interrogativa, solo la melodía marca la pregunta"
          }
        ],
        seg: [
          {
            es: "La voz sube para preguntar.",
            p: 1
          },
          {
            fr: "Vous êtes d'accord ?",
            p: 1
          },
          {
            es: "Y baja para afirmar.",
            p: 2
          },
          {
            fr: "Vous êtes d'accord.",
            p: 2
          },
          {
            es: "Si no hay palabra interrogativa, la melodía es lo único que marca la pregunta.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Enumerar",
        titulo: "↗ ↗ ↘",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Le télétravail réduit le stress, la fatigue et les dépenses.",
            es: "El teletrabajo reduce el estrés, el cansancio y los gastos."
          },
          {
            p: 2,
            regla: "sube en cada elemento (digo «sigo») y baja en el último (digo «terminé»)"
          }
        ],
        seg: [
          {
            es: "En una enumeración, la voz sube en cada elemento, como diciendo sigo, y baja en el último.",
            p: 1
          },
          {
            fr: "Le télétravail réduit le stress, la fatigue et les dépenses.",
            p: 1
          }
        ]
      },
      {
        v: "pizarra",
        cap: "El acento",
        titulo: "Al final del grupo",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "le bonheur au travail",
            es: "la felicidad en el trabajo (acento en -vail)"
          },
          {
            p: 2,
            fr: "En définitive, le bonheur au travail reste fragile.",
            es: "Tres grupos, tres acentos: -tive, -vail, -gile."
          },
          {
            p: 3,
            regla: "divide en grupos de sentido · alarga la última sílaba de cada grupo · no acentúes cada palabra"
          }
        ],
        seg: [
          {
            es: "En español cada palabra tiene su acento. En francés, el acento cae al final del grupo de palabras.",
            p: 1
          },
          {
            fr: "le bonheur au travail",
            p: 1
          },
          {
            es: "Divide la frase en grupos y alarga la última sílaba de cada uno.",
            p: 2
          },
          {
            fr: "En définitive, le bonheur au travail reste fragile.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "La conclusión",
        titulo: "Baja la voz para terminar",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "En définitive, le bonheur au travail reste fragile.",
            es: "La voz baja al final: la idea está cerrada."
          },
          {
            p: 2,
            regla: "una conclusión que sube suena a duda; una que baja suena segura"
          }
        ],
        seg: [
          {
            es: "Al terminar una idea, y sobre todo una conclusión, la voz baja. Así suenas segura.",
            p: 1
          },
          {
            fr: "En définitive, le bonheur au travail reste fragile.",
            p: 1
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En la vida real",
        titulo: "Ensayar la exposición",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "En définitive, le bonheur au travail reste fragile.",
            es: "En definitiva, la felicidad en el trabajo sigue siendo frágil."
          },
          {
            p: 2,
            fr: "Votre voix monte à la fin : on dirait que vous hésitez.",
            es: "Su voz sube al final: parece que duda."
          },
          {
            p: 3,
            fr: "Il faut qu'elle descende ?",
            es: "¿Tiene que bajar?"
          },
          {
            p: 4,
            fr: "Oui : une voix qui descend dit que l'idée est terminée.",
            es: "Sí: una voz que baja dice que la idea terminó."
          }
        ],
        seg: [
          {
            es: "Escucha cómo suena en una conversación de verdad."
          },
          {
            fr: "En définitive, le bonheur au travail reste fragile.",
            p: 1
          },
          {
            fr: "Votre voix monte à la fin : on dirait que vous hésitez.",
            p: 2
          },
          {
            fr: "Il faut qu'elle descende ?",
            p: 3
          },
          {
            fr: "Oui : une voix qui descend dit que l'idée est terminée.",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Contraste con el español",
        titulo: "Un acento por grupo",
        mz: "m2d/alerta",
        items: [
          {
            p: 1,
            regla: "Español: un acento en cada palabra · francés: un acento al final del grupo"
          },
          {
            p: 2,
            regla: "Español y francés: la pregunta sube, la afirmación baja"
          },
          {
            p: 3,
            regla: "Por escrito: una pregunta sin palabra interrogativa necesita su signo ?"
          }
        ],
        seg: [
          {
            es: "La gran diferencia: el francés no acentúa cada palabra, sino cada grupo.",
            p: 1
          },
          {
            es: "La melodía de pregunta y afirmación se parece mucho a la del español.",
            p: 2
          },
          {
            es: "Y al escribir, la pregunta sin palabra interrogativa necesita su signo.",
            p: 3
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "le BONheur au TRAvail",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "le bonheur au traVAIL",
          es: "Un solo acento, al final del grupo."
        },
        seg: [
          {
            es: "Primera trampa: acentuar cada palabra.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "le bonheur au travail",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Vous êtes d'accord. (para preguntar)",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Vous êtes d'accord ?",
          es: "Sin palabra interrogativa: la melodía y el signo."
        },
        seg: [
          {
            es: "Segunda trampa: preguntar sin subir la voz, o sin signo.",
            p: 1
          },
          {
            es: "Se dice, subiendo:",
            p: 2
          },
          {
            fr: "Vous êtes d'accord ?",
            p: 2
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/pensativo",
        q: "Al final de tu conclusión, la voz…",
        o: [
          "baja",
          "sube"
        ],
        a: 0,
        bien: "¡Eso es! Baja.",
        mal: "Si sube, parece que dudas.",
        seg: [
          {
            es: "Te toca. Al final de una conclusión, ¿la voz sube o baja?"
          }
        ],
        es: true
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/confundido",
        q: "¿Dónde cae el acento en «le bonheur au travail»?",
        o: [
          "en -vail, al final del grupo",
          "en cada palabra"
        ],
        a: 0,
        bien: "¡Muy bien! Al final del grupo.",
        mal: "Un solo acento por grupo de sentido.",
        seg: [
          {
            es: "Una más. ¿Dónde cae el acento en le bonheur au travail?"
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
            fr: "Vous êtes d'accord ?",
            es: "Haz una pregunta sin palabra interrogativa."
          },
          {
            p: 2,
            fr: "Le télétravail réduit le stress, la fatigue et les dépenses.",
            es: "Lee una enumeración de tres ventajas."
          },
          {
            p: 3,
            fr: "En définitive, le bonheur au travail reste fragile.",
            es: "Divide en grupos: «En définitive, le bonheur au travail reste fragile»."
          }
        ],
        seg: [
          {
            es: "Ahora tú. Escucha cada frase y repítela en voz alta."
          },
          {
            fr: "Vous êtes d'accord ?",
            p: 1
          },
          {
            es: "Otra vez.",
            p: 1
          },
          {
            fr: "Vous êtes d'accord ?",
            p: 1
          },
          {
            fr: "Le télétravail réduit le stress, la fatigue et les dépenses.",
            p: 2
          },
          {
            es: "Otra vez.",
            p: 2
          },
          {
            fr: "Le télétravail réduit le stress, la fatigue et les dépenses.",
            p: 2
          },
          {
            fr: "En définitive, le bonheur au travail reste fragile.",
            p: 3
          },
          {
            es: "Otra vez.",
            p: 3
          },
          {
            fr: "En définitive, le bonheur au travail reste fragile.",
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
                "Situación",
                "La voz"
              ],
              [
                "pregunta",
                "sube ↗"
              ],
              [
                "afirmación, conclusión",
                "baja ↘"
              ],
              [
                "enumeración",
                "↗ ↗ ↘"
              ],
              [
                "acento",
                "al final de cada grupo"
              ]
            ]
          },
          {
            p: 2,
            regla: "Sube para seguir, baja para terminar"
          }
        ],
        seg: [
          {
            es: "Repasemos.",
            p: 1
          },
          {
            es: "Sube para preguntar o seguir.",
            p: 1
          },
          {
            es: "Y baja para concluir con seguridad. ¡Ahora, a practicar!",
            p: 2
          }
        ]
      }
    ]
  },
  contexto: {
    titulo: "Ensayar la exposición", img: "bg-biblioteca", yo: "laura",
    escena: "Laura ensaya la conclusión de su exposición oral con la tutora.",
    pj: { tutrice: { n: "Madame Roche", voz: "fr-FR-DeniseNeural", rol: "la tutora" }, laura: { n: "Laura", voz: "fr-FR-VivienneMultilingualNeural", rol: "estudiante" } },
    lineas: [
      ["laura", "En définitive, le bonheur au travail reste fragile.", "En definitiva, la felicidad en el trabajo sigue siendo frágil."],
      ["tutrice", "Votre voix monte à la fin : on dirait que vous hésitez.", "Su voz sube al final: parece que duda."],
      ["laura", "Il faut qu'elle descende ?", "¿Tiene que bajar?"],
      ["tutrice", "Oui : une voix qui descend dit que l'idée est terminée.", "Sí: una voz que baja dice que la idea terminó."]
    ],
    fijate: "Fíjate: en el oral del DALF la melodía también se evalúa."
  },
  ensena: [
    { id: "melodia", tipo: "uso", titulo: "Cuándo sube y cuándo baja",
      idea: "La voz sube para preguntar o para decir «sigo»; baja para afirmar o terminar.",
      intro: "Toca cada frase y escucha la melodía.",
      pares: [
        ["Vous avez lu le document ?", "↗ pregunta: la voz sube"],
        ["Vous avez lu le document.", "↘ afirmación: la voz baja"],
        ["Où allez-vous ?", "↘ con où, quand, comment: la voz suele bajar"],
        ["Le télétravail réduit le stress, la fatigue et les dépenses.", "↗ ↗ ↘ enumeración: sube en cada elemento, baja en el último"]
      ],
      regla: ["En francés: question ↗, affirmation ↘, énumération ↗ ↗ ↘.", "Sin palabra interrogativa, solo la melodía marca la pregunta.", "Al terminar una idea o una conclusión, la voz baja."] },
    { id: "acento", tipo: "uso", titulo: "El acento, al final del grupo",
      idea: "En francés el acento cae en la última sílaba del grupo de palabras, no en cada palabra.",
      intro: "En español cada palabra tiene su acento; en francés, solo el final de cada grupo.",
      pares: [
        ["le bonheur au travail", "un grupo: el acento cae en -vail"],
        ["En définitive, le bonheur au travail reste fragile.", "tres grupos: En définitive | le bonheur au travail | reste fragile"]
      ],
      regla: ["Divide la frase en grupos de sentido.", "Alarga un poco la última sílaba de cada grupo.", "No acentúes cada palabra: suena entrecortado."] },
    {
      id: "ojo",
      tipo: "ojo",
      titulo: "Errores frecuentes",
      intro: "Tres errores que cometemos casi todos los hispanohablantes. Cázalos uno por uno.",
      errores: [
        {
          sit: "Laura lee en voz alta:",
          frase: "le BONheur au TRAvail reste fragile",
          mal: "BONheur au TRAvail",
          bien: "bonheur au traVAIL",
          porque: "En español cada palabra lleva su acento.",
          truco: "Un solo acento, al final del grupo: au traVAIL."
        },
        {
          sit: "Laura pregunta al jurado:",
          frase: "Vous êtes d'accord. (para preguntar)",
          mal: "d'accord.",
          bien: "d'accord ?",
          porque: "Esperamos que se entienda por el contexto.",
          truco: "Sin palabra interrogativa, la voz sube y se escribe ?."
        },
        {
          sit: "Laura empieza su conclusión:",
          frase: "En DÉfinitive, le bonheur reste fragile.",
          mal: "DÉfinitive",
          bien: "définiTIVE",
          porque: "Acentuamos como en «definitiva».",
          truco: "El acento va al final: en définiTIVE."
        }
      ]
    }
  ],
  ejemplos: [
    {
      sit: "Haz una pregunta sin palabra interrogativa.",
      resp: "Vous êtes d'accord ?",
      porque: "La melodía marca la pregunta.",
      pasos: [
        {
          q: "¿Hay palabra interrogativa?",
          ops: [
            "no",
            "sí"
          ],
          ok: 0
        },
        {
          q: "¿Qué hace la voz al final?",
          ops: [
            "sube",
            "baja"
          ],
          ok: 0
        },
        {
          q: "¿Y por escrito?",
          ops: [
            "con ?",
            "con punto"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "Lee una enumeración de tres ventajas.",
      resp: "Le télétravail réduit le stress, la fatigue et les dépenses.",
      porque: "↗ ↗ ↘",
      pasos: [
        {
          q: "¿En stress y fatigue?",
          ops: [
            "sube: sigo",
            "baja"
          ],
          ok: 0
        },
        {
          q: "¿En dépenses?",
          ops: [
            "baja: terminé",
            "sube"
          ],
          ok: 0
        },
        {
          q: "¿Por qué?",
          ops: [
            "la última cierra la lista",
            "por la coma"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "Divide en grupos: «En définitive, le bonheur au travail reste fragile».",
      resp: "En définitive, le bonheur au travail reste fragile.",
      porque: "Tres grupos, tres acentos.",
      pasos: [
        {
          q: "¿Primer grupo?",
          ops: [
            "en définitive",
            "en définitive le bonheur"
          ],
          ok: 0
        },
        {
          q: "¿Dónde va el acento del segundo?",
          ops: [
            "en -vail",
            "en bon-"
          ],
          ok: 0
        },
        {
          q: "¿Y al final?",
          ops: [
            "la voz baja",
            "la voz sube"
          ],
          ok: 0
        }
      ]
    }
  ],
  comprueba: [
    { q: "Si la voz sube al final, es…", o: ["una pregunta", "una afirmación"], a: 0, b: "melodia", porque: "↗ = pregunta." },
    { q: "En una enumeración, la voz…", o: ["sube en cada elemento y baja en el último", "baja en cada elemento"], a: 0, b: "melodia", porque: "↗ ↗ ↘." },
    { q: "El acento francés cae…", o: ["al final del grupo de palabras", "en cada palabra"], a: 0, b: "acento", porque: "Un acento por grupo." }
  ],
  practica: [
    { fase: "guiada", c: ["into-q"], k: "choice", es: true, ask: "Escucha la melodía.", say: "Vous avez lu le document ?", q: "¿Pregunta o afirmación?", o: ["Pregunta", "Afirmación"], a: 0, fixed: true, pista: "¿La voz sube o baja al final?", why: "Sube: <b>pregunta</b>." },
    { fase: "guiada", c: ["into-q"], k: "choice", es: true, ask: "Escucha la melodía.", say: "Vous avez lu le document.", q: "¿Pregunta o afirmación?", o: ["Pregunta", "Afirmación"], a: 1, fixed: true, pista: "¿La voz sube o baja al final?", why: "Baja: <b>afirmación</b>." },
    { fase: "guiada", c: ["into-enum"], k: "choice", es: true, ask: "Escucha la enumeración.", say: "Le télétravail réduit le stress, la fatigue et les dépenses.", q: "¿Qué hace la voz?", o: ["sube en cada elemento y baja en el último", "baja en cada elemento", "se queda plana"], a: 0, pista: "La lista sigue… y termina.", why: "↗ ↗ ↘." },
    { fase: "indep", c: ["into-q"], k: "choice", es: true, ask: "Escucha.", say: "Où allez-vous ?", q: "Con «où», la voz…", o: ["suele bajar", "siempre sube"], a: 0, why: "Con palabra interrogativa, la voz suele <b>bajar</b>." },
    { fase: "indep", c: ["into-acc"], k: "choice", es: true, ask: "Escucha el grupo.", say: "Le bonheur au travail", q: "¿Dónde cae el acento?", o: ["en la última sílaba del grupo", "en cada palabra", "en la primera sílaba"], a: 0, why: "Al final del grupo: tra<b>vail</b>." },
    { fase: "indep", c: ["into-acc"], k: "choice", es: true, ask: "Escucha la frase.", say: "En définitive, le bonheur au travail reste fragile.", q: "¿Cuántos grupos rítmicos hay?", o: ["tres", "uno", "seis"], a: 0, why: "En définitive | le bonheur au travail | reste fragile." },
    { fase: "indep", c: ["into-q"], k: "choice", es: true, ask: "Escucha.", say: "Vous êtes d'accord ?", q: "¿Pregunta o afirmación?", o: ["Pregunta", "Afirmación"], a: 0, fixed: true, why: "La voz sube: <b>pregunta</b>." },
    { fase: "indep", c: ["into-enum"], k: "choice", es: true, ask: "Elige.", q: "En «la fatigue, le stress et les dépenses», la voz baja en…", o: ["les dépenses", "la fatigue"], a: 0, why: "Baja en el último elemento." },
    { fase: "aplica", c: ["into-q"], k: "choice", es: true, ask: "Elige la melodía.", ctx: "Terminas tu exposición oral con la conclusión.", q: "En la última frase, la voz debe…", o: ["bajar", "subir"], a: 0, why: "Bajar = idea terminada." },
    { fase: "aplica", c: ["into-enum"], k: "choice", es: true, ask: "Elige la melodía.", ctx: "Presentas tres argumentos seguidos.", q: "Al decir el primero y el segundo, la voz…", o: ["sube", "baja"], a: 0, why: "Sube: anuncia que sigues." },
    { fase: "aplica", c: ["into-acc"], k: "choice", es: true, ask: "Elige.", ctx: "Ensayas tu introducción.", q: "Para sonar natural, alargas…", o: ["la última sílaba de cada grupo", "la primera sílaba de cada palabra"], a: 0, why: "Acento al final del grupo." },
    { fase: "dominio", c: ["into-q"], k: "choice", es: true, ask: "Escucha.", say: "Le projet est terminé ?", q: "¿Pregunta o afirmación?", o: ["Pregunta", "Afirmación"], a: 0, fixed: true, why: "Sube: <b>pregunta</b>." },
    { fase: "dominio", c: ["into-q"], k: "choice", es: true, ask: "Escucha.", say: "Le projet est terminé.", q: "¿Pregunta o afirmación?", o: ["Pregunta", "Afirmación"], a: 1, fixed: true, why: "Baja: <b>afirmación</b>." },
    { fase: "dominio", c: ["into-enum"], k: "choice", es: true, ask: "Escucha.", say: "Il faut du temps, de l'argent et de la patience.", q: "¿Dónde baja la voz?", o: ["en de la patience", "en du temps"], a: 0, why: "En el último elemento." },
    { fase: "dominio", c: ["into-acc"], k: "choice", es: true, ask: "Elige.", q: "En francés hay…", o: ["un acento por grupo de palabras", "un acento por palabra"], a: 0, why: "Un acento por grupo." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche"] }
};

/* Lección 10 · La puesta de relieve (retoma qui / que / dont) */
window.__ENSENA["relief"] = {
  v: 1, arts: false, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "La mise en relief",
  roles: { rel: "marco", nucleo: "lo destacado", sub: "el resto" },
  objetivo: {
    que: "Vas a destacar la idea importante de una frase con c'est… qui, c'est… que y ce qui…, c'est…",
    corto: "Ce qui compte, c'est l'idée clave.",
    podras: ["Destacar el sujeto con c'est… qui.", "Destacar otro elemento con c'est… que.", "Anunciar y revelar: ce qui / ce que / ce dont…, c'est…"],
    iconos: ["ic2/estrella", "m2d/senalar", "ic2/bombilla"],
    previos: ["Los relativos qui, que y dont (lecciones 1 y 7)."],
    capacidad: "Ahora destacas tus ideas clave como en un buen ensayo."
  },
  requiere: ["gn-rel", "ph-dont"],
  recupera: ["ph-dont"],
  conceptos: {
    "rel-qui": { n: "C'est… qui (el sujeto)", b: "cest" },
    "rel-que": { n: "C'est… que (todo lo demás)", b: "cest" },
    "rel-ce": { n: "Ce qui / ce que / ce dont…, c'est…", b: "ce" }
  },
  video: {
    titulo: "La puesta en relieve",
    voz: "es-CO-SalomeNeural",
    escenas: [
      {
        v: "persona",
        cap: "Para qué sirve",
        fondo: "esc/auditorio",
        img: "pj/roche-explicando",
        fr: "Ce qui m'inquiète, c'est l'isolement.",
        es: "Lo que me preocupa es el aislamiento.",
        nota: "La idea clave",
        seg: [
          {
            es: "Laura quiere insistir en el aislamiento de los empleados. La tutora le enseña a destacar la idea."
          },
          {
            fr: "Ce qui m'inquiète, c'est l'isolement.",
            p: 1
          },
          {
            es: "Para destacar una idea, el francés la encierra entre c'est y qui o que, o la anuncia con ce qui, ce que, ce dont. Hoy aprendes las dos estructuras.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "C'est… qui",
        titulo: "Para destacar el sujeto",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "C'est la qualité des relations qui détermine le bien-être.",
            es: "Es la calidad de las relaciones la que determina el bienestar."
          },
          {
            p: 2,
            fr: "C'est nous qui avons raison.",
            es: "Somos nosotros los que tenemos razón."
          },
          {
            p: 3,
            fr: "Ce sont les étudiants qui ont proposé cette solution.",
            es: "Fueron los estudiantes los que propusieron esta solución."
          },
          {
            p: 4,
            regla: "si lo destacado es el sujeto: qui · el verbo concuerda con lo destacado"
          }
        ],
        seg: [
          {
            es: "Si destacas el sujeto, c'est y qui.",
            p: 1
          },
          {
            fr: "C'est la qualité des relations qui détermine le bien-être.",
            p: 1
          },
          {
            es: "El verbo concuerda con lo destacado: nous, avons.",
            p: 2
          },
          {
            fr: "C'est nous qui avons raison.",
            p: 2
          },
          {
            es: "Y con un plural, en registro formal, ce sont:",
            p: 3
          },
          {
            fr: "Ce sont les étudiants qui ont proposé cette solution.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "C'est… que",
        titulo: "Para todo lo demás",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "C'est en 2020 que tout a changé.",
            es: "Fue en 2020 cuando todo cambió."
          },
          {
            p: 2,
            fr: "C'est à Bogotá que le projet est né.",
            es: "Fue en Bogotá donde nació el proyecto."
          },
          {
            p: 3,
            regla: "tiempo, lugar, complemento: siempre que (nunca quand ni où)"
          }
        ],
        seg: [
          {
            es: "Para todo lo demás, tiempo, lugar, complemento: c'est y que. Siempre que.",
            p: 1
          },
          {
            fr: "C'est en 2020 que tout a changé.",
            p: 1
          },
          {
            es: "Aunque en español digamos cuando o donde:",
            p: 2
          },
          {
            fr: "C'est à Bogotá que le projet est né.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Anunciar",
        titulo: "Ce qui, ce que, ce dont…, c'est",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Ce qui m'inquiète, c'est l'isolement.",
            es: "Lo que me preocupa es el aislamiento. (sujeto)"
          },
          {
            p: 2,
            fr: "Ce que je retiens, c'est la méthode.",
            es: "Lo que retengo es el método. (COD)"
          },
          {
            p: 3,
            fr: "Ce dont nous avons besoin, c'est de temps.",
            es: "Lo que necesitamos es tiempo. (avoir besoin de)"
          },
          {
            p: 4,
            regla: "sujeto → ce qui · COD → ce que · verbo con de → ce dont (y se repite de: c'est de temps)"
          }
        ],
        seg: [
          {
            es: "La otra estructura: primero anuncias, luego revelas con c'est. Si es el sujeto, ce qui.",
            p: 1
          },
          {
            fr: "Ce qui m'inquiète, c'est l'isolement.",
            p: 1
          },
          {
            es: "Si es complemento directo, ce que.",
            p: 2
          },
          {
            fr: "Ce que je retiens, c'est la méthode.",
            p: 2
          },
          {
            es: "Si el verbo lleva de, ce dont, y se repite de.",
            p: 3
          },
          {
            fr: "Ce dont nous avons besoin, c'est de temps.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Para qué sirve",
        titulo: "La idea clave, al frente",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            mal: "L'isolement m'inquiète.",
            bien: "Ce qui m'inquiète, c'est l'isolement.",
            es: "Más fuerza: la idea llega al final, después del suspenso."
          },
          {
            p: 2,
            regla: "en un ensayo o una exposición, usa la puesta en relieve para la tesis"
          }
        ],
        seg: [
          {
            es: "La frase normal informa. La puesta en relieve crea suspenso y hace brillar la idea clave.",
            p: 1
          },
          {
            fr: "Ce qui m'inquiète, c'est l'isolement.",
            p: 1
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En la vida real",
        titulo: "La idea clave",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Je veux insister sur l'isolement des salariés.",
            es: "Quiero insistir en el aislamiento de los empleados."
          },
          {
            p: 2,
            fr: "Alors annoncez-le : « Ce qui m'inquiète, c'est l'isolement. »",
            es: "Entonces anúncielo: «Lo que me preocupa es el aislamiento»."
          },
          {
            p: 3,
            fr: "Et pour la date : « C'est en 2020 où tout a changé » ?",
            es: "¿Y para la fecha: «Fue en 2020 cuando todo cambió»?"
          },
          {
            p: 4,
            fr: "Non : C'est en 2020 que tout a changé. Toujours que.",
            es: "No: C'est en 2020 que tout a changé. Siempre que."
          }
        ],
        seg: [
          {
            es: "Escucha cómo suena en una conversación de verdad."
          },
          {
            fr: "Je veux insister sur l'isolement des salariés.",
            p: 1
          },
          {
            fr: "Alors annoncez-le : « Ce qui m'inquiète, c'est l'isolement. »",
            p: 2
          },
          {
            fr: "Et pour la date : « C'est en 2020 où tout a changé » ?",
            p: 3
          },
          {
            fr: "Non : C'est en 2020 que tout a changé. Toujours que.",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Contraste con el español",
        titulo: "Fue en 2020 cuando… c'est en 2020 que",
        mz: "m2d/alerta",
        items: [
          {
            p: 1,
            regla: "Español: fue en 2020 cuando · francés: c'est en 2020 que (no quand)"
          },
          {
            p: 2,
            regla: "Español: es en Bogotá donde · francés: c'est à Bogotá que (no où)"
          },
          {
            p: 3,
            regla: "Español: somos nosotros los que tenemos · francés: c'est nous qui avons"
          }
        ],
        seg: [
          {
            es: "El español cambia cuando, donde. El francés usa siempre que.",
            p: 1
          },
          {
            es: "Por eso c'est à Bogotá où es un calco.",
            p: 2
          },
          {
            es: "Y el verbo concuerda con lo destacado: nous avons.",
            p: 3
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "C'est à Bogotá où je vis depuis dix ans.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "C'est à Bogotá que je vis depuis dix ans.",
          es: "Siempre que."
        },
        seg: [
          {
            es: "Primera trampa: où.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "C'est à Bogotá que je vis depuis dix ans.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "C'est les étudiants qui a proposé cette solution.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Ce sont les étudiants qui ont proposé cette solution.",
          es: "Concuerda con los estudiantes."
        },
        seg: [
          {
            es: "Segunda trampa: el verbo en singular.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Ce sont les étudiants qui ont proposé cette solution.",
            p: 2
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/pensativo",
        q: "Destaca el lugar: «El proyecto nació en Bogotá».",
        o: [
          "C'est à Bogotá que le projet est né.",
          "C'est à Bogotá où le projet est né."
        ],
        a: 0,
        bien: "¡Eso es! Que.",
        mal: "Lugar destacado: siempre que.",
        seg: [
          {
            es: "Te toca. Destaca el lugar: el proyecto nació en Bogotá."
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/confundido",
        q: "Anuncia: «Lo que necesitamos es tiempo».",
        o: [
          "Ce dont nous avons besoin, c'est de temps.",
          "Ce que nous avons besoin, c'est de temps."
        ],
        a: 0,
        bien: "¡Muy bien! Ce dont.",
        mal: "Avoir besoin de → ce dont.",
        seg: [
          {
            es: "Una más. Anuncia: lo que necesitamos es tiempo."
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
            fr: "C'est la qualité des relations qui détermine le bien-être.",
            es: "Destaca el sujeto: «La calidad de las relaciones determina el bienestar»."
          },
          {
            p: 2,
            fr: "C'est à Bogotá que le projet est né.",
            es: "Destaca el lugar: «El proyecto nació en Bogotá»."
          },
          {
            p: 3,
            fr: "Ce dont nous avons besoin, c'est de temps.",
            es: "Anuncia: «Lo que necesitamos es tiempo»."
          }
        ],
        seg: [
          {
            es: "Ahora tú. Escucha cada frase y repítela en voz alta."
          },
          {
            fr: "C'est la qualité des relations qui détermine le bien-être.",
            p: 1
          },
          {
            es: "Otra vez.",
            p: 1
          },
          {
            fr: "C'est la qualité des relations qui détermine le bien-être.",
            p: 1
          },
          {
            fr: "C'est à Bogotá que le projet est né.",
            p: 2
          },
          {
            es: "Otra vez.",
            p: 2
          },
          {
            fr: "C'est à Bogotá que le projet est né.",
            p: 2
          },
          {
            fr: "Ce dont nous avons besoin, c'est de temps.",
            p: 3
          },
          {
            es: "Otra vez.",
            p: 3
          },
          {
            fr: "Ce dont nous avons besoin, c'est de temps.",
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
                "Destacas…",
                "Estructura"
              ],
              [
                "el sujeto",
                "c'est… qui (verbo concuerda)"
              ],
              [
                "tiempo, lugar, complemento",
                "c'est… que"
              ],
              [
                "anunciar el sujeto",
                "ce qui…, c'est"
              ],
              [
                "anunciar un COD",
                "ce que…, c'est"
              ],
              [
                "verbo con de",
                "ce dont…, c'est de"
              ]
            ]
          },
          {
            p: 2,
            regla: "Sujeto: qui · todo lo demás: que"
          }
        ],
        seg: [
          {
            es: "Repasemos.",
            p: 1
          },
          {
            es: "C'est… qui para el sujeto, que para lo demás.",
            p: 1
          },
          {
            es: "Y ce qui, ce que, ce dont para anunciar. ¡Ahora, a practicar!",
            p: 2
          }
        ]
      }
    ]
  },
  contexto: {
    titulo: "La idea clave", img: "bg-biblioteca", yo: "laura",
    escena: "Laura quiere que su conclusión destaque una sola idea.",
    pj: { tutrice: { n: "Madame Roche", voz: "fr-FR-DeniseNeural", rol: "la tutora" }, laura: { n: "Laura", voz: "fr-FR-VivienneMultilingualNeural", rol: "estudiante" } },
    lineas: [
      ["laura", "Je veux insister sur l'isolement des salariés.", "Quiero insistir en el aislamiento de los empleados."],
      ["tutrice", "Alors annoncez-le : « Ce qui m'inquiète, c'est l'isolement. »", "Entonces anúncielo: «Lo que me preocupa es el aislamiento»."],
      ["laura", "Et pour la date : « C'est en 2020 où tout a changé » ?", "¿Y para la fecha: «Fue en 2020 cuando todo cambió»?"],
      ["tutrice", "Non : C'est en 2020 que tout a changé. Toujours que.", "No: C'est en 2020 que tout a changé. Siempre que."]
    ],
    fijate: "Fíjate: en español decimos «fue en 2020 cuando», «es aquí donde»; en francés siempre es que."
  },
  ensena: [
    { id: "cest", tipo: "gram", titulo: "C'est… qui y c'est… que",
      idea: "Encierra lo importante entre c'est y qui (si es el sujeto) o que (si es cualquier otra cosa).",
      intro: "Es como «es… quien», «es… donde», «fue… cuando» del español, pero más simple: solo qui o que.",
      analiza: { frases: [
        { partes: [["C'est", "rel"], ["la ponctuation", "nucleo"], ["qui pose problème.", "sub"]], es: "Es la puntuación lo que causa problema · sujeto: qui" },
        { partes: [["C'est", "rel"], ["en 2022", "nucleo"], ["que j'ai commencé le français.", "sub"]], es: "Fue en 2022 cuando empecé · tiempo: que" },
        { partes: [["C'est", "rel"], ["à Bogotá", "nucleo"], ["que le projet a vu le jour.", "sub"]], es: "Fue en Bogotá donde nació el proyecto · lugar: que" },
        { partes: [["C'est", "rel"], ["de ce problème", "nucleo"], ["que je parle.", "sub"]], es: "Es de este problema del que hablo · la preposición se queda dentro" }
      ]},
      regla: ["Sujeto → qui: C'est la ponctuation qui…", "Todo lo demás (tiempo, lugar, complemento) → que: C'est en 2022 que…", "El verbo después de qui concuerda con lo destacado: C'est nous qui avons raison.", "Con un plural, en registro formal: Ce sont les étudiants qui…"] },
    { id: "ce", tipo: "gram", titulo: "Anunciar y revelar: ce qui…, c'est…",
      idea: "Primero anuncias (ce qui, ce que, ce dont…) y después de la coma revelas con c'est.",
      intro: "Es el «lo que… es…» del español, pero el francés distingue tres formas.",
      tabla: [["Francés", "Español", "Cuándo"], [
        ["Ce qui m'inquiète, c'est l'isolement.", "Lo que me preocupa es el aislamiento.", "ce qui: es el sujeto (algo me preocupa)"],
        ["Ce que je retiens, c'est la méthode.", "Lo que retengo es el método.", "ce que: es el COD (retengo algo)"],
        ["Ce dont nous avons besoin, c'est de temps.", "Lo que necesitamos es tiempo.", "ce dont: verbo con de (avoir besoin de)"]
      ]],
      regla: ["Pregúntate cómo se construye el verbo: sujeto → ce qui; COD → ce que; con de → ce dont.", "Con ce dont, repite de después de c'est: c'est de temps."] },
    {
      id: "ojo",
      tipo: "ojo",
      titulo: "Errores frecuentes",
      intro: "Tres errores que cometemos casi todos los hispanohablantes. Cázalos uno por uno.",
      errores: [
        {
          sit: "Laura se presenta:",
          frase: "C'est à Bogotá où je vis depuis dix ans.",
          mal: "où",
          bien: "que",
          porque: "En español «es en Bogotá donde».",
          truco: "Puesta en relieve: siempre que."
        },
        {
          sit: "Laura explica:",
          frase: "C'est les étudiants qui a proposé cette solution.",
          mal: "qui a proposé",
          bien: "qui ont proposé",
          porque: "Concordamos con c'est, singular.",
          truco: "El verbo concuerda con les étudiants: qui ont proposé."
        },
        {
          sit: "Laura cuenta:",
          frase: "C'est en 2022 quand j'ai commencé le master.",
          mal: "quand",
          bien: "que",
          porque: "En español «fue en 2022 cuando».",
          truco: "También para el tiempo: c'est en 2022 que."
        }
      ]
    }
  ],
  ejemplos: [
    {
      sit: "Destaca el sujeto: «La calidad de las relaciones determina el bienestar».",
      resp: "C'est la qualité des relations qui détermine le bien-être.",
      porque: "sujeto → c'est… qui.",
      pasos: [
        {
          q: "¿Qué destacas?",
          ops: [
            "el sujeto",
            "el lugar"
          ],
          ok: 0
        },
        {
          q: "¿Qui o que?",
          ops: [
            "qui",
            "que"
          ],
          ok: 0
        },
        {
          q: "¿El verbo concuerda con…?",
          ops: [
            "la qualité",
            "les relations"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "Destaca el lugar: «El proyecto nació en Bogotá».",
      resp: "C'est à Bogotá que le projet est né.",
      porque: "lugar → c'est… que.",
      pasos: [
        {
          q: "¿Qué destacas?",
          ops: [
            "el lugar",
            "el sujeto"
          ],
          ok: 0
        },
        {
          q: "¿Qué relativo?",
          ops: [
            "que",
            "où"
          ],
          ok: 0
        },
        {
          q: "¿Cómo queda?",
          ops: [
            "c'est à Bogotá que",
            "c'est à Bogotá où"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "Anuncia: «Lo que necesitamos es tiempo».",
      resp: "Ce dont nous avons besoin, c'est de temps.",
      porque: "avoir besoin de → ce dont.",
      pasos: [
        {
          q: "¿Cómo se construye avoir besoin?",
          ops: [
            "con de",
            "sin preposición"
          ],
          ok: 0
        },
        {
          q: "¿Qué anuncio?",
          ops: [
            "ce dont",
            "ce que"
          ],
          ok: 0
        },
        {
          q: "¿Se repite de?",
          ops: [
            "sí: c'est de temps",
            "no"
          ],
          ok: 0
        }
      ]
    }
  ],
  comprueba: [
    { q: "Para destacar el sujeto usas…", o: ["c'est… qui", "c'est… que"], a: 0, b: "cest", porque: "Sujeto → qui." },
    { q: "«C'est en 2022 ___ j'ai commencé.»", o: ["que", "quand"], a: 0, b: "cest", porque: "Siempre que." },
    { q: "«___ je retiens, c'est la méthode.» (retenir quelque chose)", o: ["Ce que", "Ce qui"], a: 0, b: "ce", porque: "COD → ce que." },
    { q: "avoir besoin de → «___ nous avons besoin, c'est de temps.»", o: ["Ce dont", "Ce que"], a: 0, b: "ce", porque: "Con de → ce dont." }
  ],
  practica: [
    { fase: "guiada", c: ["rel-qui"], k: "choice", ask: "Elige el inicio.", q: "« ___ la ponctuation qui pose le plus de problèmes. »", o: ["C'est", "Ce qui est", "Il est"], a: 0, pista: "Destacas el sujeto.", why: "<b>C'est</b> … qui." },
    { fase: "guiada", c: ["rel-que"], k: "choice", ask: "Completa.", q: "« C'est en 2022 ___ j'ai commencé le français. »", o: ["que", "où", "quand"], a: 0, pista: "Todo lo que no es sujeto…", why: "Siempre <b>que</b>." },
    { fase: "guiada", c: ["rel-ce"], k: "choice", ask: "Elige el anuncio.", q: "« ___ m'inquiète, c'est l'isolement des salariés. »", o: ["Ce qui", "Ce que"], a: 0, pista: "Algo me preocupa: ¿sujeto o COD?", why: "Sujeto → <b>Ce qui</b>." },
    { fase: "indep", c: ["rel-que"], k: "choice", ask: "Completa.", q: "« C'est de ce problème ___ je voulais vous parler. »", o: ["que", "dont", "duquel"], a: 0, why: "La preposición ya está dentro: <b>que</b>." },
    { fase: "indep", c: ["rel-ce"], k: "choice", ask: "Elige el anuncio.", q: "« ___ nous avons besoin, c'est de temps. »", o: ["Ce dont", "Ce que", "Ce qui"], a: 0, why: "<i>avoir besoin de</i> → <b>Ce dont</b>." },
    { fase: "indep", c: ["rel-qui"], k: "choice", ask: "Elige el verbo.", q: "« C'est nous qui ___ raison. »", o: ["avons", "ont", "a"], a: 0, why: "Concuerda con <i>nous</i>: <b>avons</b>." },
    { fase: "indep", c: ["rel-que"], k: "spot", ask: "Corrige.", s: "C'est à Bogotá [où] je vis depuis dix ans .", fix: "que", why: "Siempre <b>que</b>." },
    { fase: "indep", c: ["rel-ce"], k: "sort", ask: "Clasifica: ¿ce qui o ce que?", q: "¿Qué falta?", cats: ["ce qui", "ce que"], items: [["___ m'inquiète, c'est…", 0], ["___ me frappe, c'est…", 0], ["___ je retiens, c'est…", 1], ["___ nous proposons, c'est…", 1]], why: "Sin otro sujeto → ce qui; con sujeto (je, nous) → ce que." },
    { fase: "aplica", c: ["rel-ce"], k: "order", ask: "Ordena tu frase.", ctx: "Escribes la reseña de una conferencia.", tokens: ["Ce que", "je retiens", "de cette conférence,", "c'est", "la méthode."], why: "<b>Ce que je retiens…, c'est la méthode.</b>" },
    { fase: "aplica", c: ["rel-qui"], k: "choice", ask: "Elige la frase formal.", ctx: "Haces el balance de un proyecto estudiantil.", q: "Registro escrito formal:", o: ["Ce sont les étudiants qui ont proposé cette solution.", "C'est les étudiants qui a proposé cette solution."], a: 0, why: "<b>Ce sont</b> + plural, y el verbo concuerda." },
    { fase: "aplica", c: ["rel-que"], k: "fill", ask: "Completa.", ctx: "Presentas tu trayectoria en el oral.", q: "C'est à l'université ___ j'ai découvert la linguistique.", acc: ["que"], why: "Lugar destacado → <b>que</b>." },
    { fase: "dominio", c: ["rel-qui"], k: "choice", ask: "Elige.", q: "« C'est moi ___ suis responsable. »", o: ["qui", "que"], a: 0, why: "Sujeto destacado → <b>qui</b>." },
    { fase: "dominio", c: ["rel-que"], k: "choice", ask: "Elige.", q: "« C'est pour cette raison ___ je m'oppose au projet. »", o: ["que", "pour laquelle"], a: 0, why: "En la puesta de relieve, <b>que</b>." },
    { fase: "dominio", c: ["rel-ce"], k: "choice", ask: "Elige.", q: "« ___ me frappe, c'est la rapidité du changement. »", o: ["Ce qui", "Ce que", "Ce dont"], a: 0, why: "Sujeto → <b>Ce qui</b>." },
    { fase: "dominio", c: ["rel-ce"], k: "choice", ask: "Elige.", q: "« ___ je reproche à cette étude, c'est son manque de nuance. »", o: ["Ce que", "Ce qui"], a: 0, why: "<i>reprocher quelque chose</i>: COD → <b>Ce que</b>." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche", "Bogotá"] }
};

/* Lección 11 · Impersonales y pasiva: el texto objetivo */
window.__ENSENA["passif"] = {
  v: 1, arts: false, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Tournures impersonnelles et passives",
  roles: { suj: "sujeto", aux: "être", part: "participio", verbe: "verbo" },
  objetivo: {
    que: "Vas a escribir de forma objetiva, sin je ni on, con construcciones impersonales (il est nécessaire de…) y con la voz pasiva.",
    corto: "Menos «yo», más hechos: así escribe la universidad.",
    podras: ["Usar il est + adjetivo + de.", "Usar il convient de y il s'agit de.", "Pasar una frase a la voz pasiva."],
    iconos: ["m2d/escribiendo", "ic2/libros", "m2d/senalar"],
    previos: ["El COD (lección 2) y el subjuntivo presente (B2)."],
    capacidad: "Ahora escribes con el tono objetivo que pide un texto académico."
  },
  requiere: ["v-cod"],
  recupera: ["v-cod"],
  conceptos: {
    "pa-il": { n: "Il est + adjetivo + de / que", b: "imper" },
    "pa-conv": { n: "Il convient de, il s'agit de, il apparaît que", b: "imper" },
    "pa-passif": { n: "La voz pasiva", b: "passif" }
  },
  video: {
    titulo: "Giros impersonales y pasivos",
    voz: "es-CO-SalomeNeural",
    escenas: [
      {
        v: "persona",
        cap: "Para qué sirve",
        fondo: "esc/escritorio-noche",
        img: "pj/roche-escribiendo",
        fr: "Il convient de souligner que…",
        es: "Conviene subrayar que…",
        nota: "Demasiados «on»",
        seg: [
          {
            es: "Laura empieza su informe con on doit dire que. La tutora le dice que es demasiado oral."
          },
          {
            fr: "Il convient de souligner que…",
            p: 1
          },
          {
            es: "El texto académico es objetivo: pone el resultado antes que la persona. Para eso usa giros con il impersonal y la voz pasiva. Hoy los aprendes.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Il impersonal",
        titulo: "Il est nécessaire de…",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Il est nécessaire de repenser l'évaluation.",
            es: "Es necesario repensar la evaluación."
          },
          {
            p: 2,
            fr: "Il convient de souligner que…",
            es: "Conviene subrayar que…"
          },
          {
            p: 3,
            fr: "Il s'agit de rappeler que…",
            es: "Se trata de recordar que…"
          },
          {
            p: 4,
            regla: "escrito formal: il est nécessaire de (no c'est nécessaire de) · il s'agit de (no il se agit)"
          }
        ],
        seg: [
          {
            es: "Il, sin persona real, permite opinar de forma objetiva.",
            p: 1
          },
          {
            fr: "Il est nécessaire de repenser l'évaluation.",
            p: 1
          },
          {
            es: "Dos fórmulas muy académicas:",
            p: 2
          },
          {
            fr: "Il convient de souligner que…",
            p: 2
          },
          {
            fr: "Il s'agit de rappeler que…",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Subjuntivo o indicativo",
        titulo: "Necesidad: subjuntivo · constatación: indicativo",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Il est essentiel que chacun ait accès aux ressources.",
            es: "Es esencial que cada uno tenga acceso a los recursos."
          },
          {
            p: 2,
            fr: "Il apparaît que les résultats sont meilleurs.",
            es: "Resulta que los resultados son mejores."
          },
          {
            p: 3,
            regla: "necesidad u opinión + que → subjuntivo · constatación (il apparaît, il est évident) → indicativo"
          }
        ],
        seg: [
          {
            es: "Si expresas necesidad u opinión, que va con subjuntivo:",
            p: 1
          },
          {
            fr: "Il est essentiel que chacun ait accès aux ressources.",
            p: 1
          },
          {
            es: "Si constatas un hecho, indicativo:",
            p: 2
          },
          {
            fr: "Il apparaît que les résultats sont meilleurs.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "La pasiva",
        titulo: "Être + participio que concuerda",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            mal: "Les chercheurs ont publié les résultats.",
            bien: "Les résultats ont été publiés.",
            es: "El resultado pasa delante."
          },
          {
            p: 2,
            fr: "500 étudiants ont été interrogés.",
            es: "Se entrevistó a 500 estudiantes."
          },
          {
            p: 3,
            fr: "Une enquête a été menée.",
            es: "Se llevó a cabo una encuesta."
          },
          {
            p: 4,
            regla: "el COD pasa a sujeto · être en el mismo tiempo · el participio concuerda"
          }
        ],
        seg: [
          {
            es: "En la pasiva, el complemento directo pasa a ser sujeto, y usas être en el mismo tiempo.",
            p: 1
          },
          {
            fr: "Les résultats ont été publiés.",
            p: 1
          },
          {
            fr: "500 étudiants ont été interrogés.",
            p: 2
          },
          {
            es: "El participio concuerda con el nuevo sujeto: menée, con e.",
            p: 3
          },
          {
            fr: "Une enquête a été menée.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Se + verbo",
        titulo: "Con cosas: ce phénomène s'observe",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Ce phénomène s'observe dans toutes les villes.",
            es: "Este fenómeno se observa en todas las ciudades."
          },
          {
            p: 2,
            fr: "Les copies ont été évaluées par le jury.",
            es: "Las copias fueron evaluadas por el jurado."
          },
          {
            p: 3,
            regla: "con cosas, también se + verbo · el agente, con par"
          }
        ],
        seg: [
          {
            es: "Con cosas, también sirve se más el verbo, como en español.",
            p: 1
          },
          {
            fr: "Ce phénomène s'observe dans toutes les villes.",
            p: 1
          },
          {
            es: "Y si dices quién lo hizo, con par:",
            p: 2
          },
          {
            fr: "Les copies ont été évaluées par le jury.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En la vida real",
        titulo: "Demasiados «on»",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Votre rapport commence par « On doit dire que… ». C'est trop oral.",
            es: "Su informe empieza con «Hay que decir que…». Es demasiado oral."
          },
          {
            p: 2,
            fr: "Je peux écrire : « Il convient de souligner que… » ?",
            es: "¿Puedo escribir: «Conviene subrayar que…»?"
          },
          {
            p: 3,
            fr: "Parfait. Et « Nous avons interrogé 500 étudiants » ?",
            es: "Perfecto. ¿Y «Interrogamos a 500 estudiantes»?"
          },
          {
            p: 4,
            fr: "500 étudiants ont été interrogés.",
            es: "Se interrogó a 500 estudiantes."
          }
        ],
        seg: [
          {
            es: "Escucha cómo suena en una conversación de verdad."
          },
          {
            fr: "Votre rapport commence par « On doit dire que… ». C'est trop oral.",
            p: 1
          },
          {
            fr: "Je peux écrire : « Il convient de souligner que… » ?",
            p: 2
          },
          {
            fr: "Parfait. Et « Nous avons interrogé 500 étudiants » ?",
            p: 3
          },
          {
            fr: "500 étudiants ont été interrogés.",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Contraste con el español",
        titulo: "Se entrevistó… ont été interrogés",
        mz: "m2d/alerta",
        items: [
          {
            p: 1,
            regla: "Español: se entrevistó a 500 estudiantes · francés: 500 étudiants ont été interrogés"
          },
          {
            p: 2,
            regla: "Español: hay que subrayar · francés formal: il convient de souligner (no il faut que souligner)"
          },
          {
            p: 3,
            regla: "Español: se trata de · francés: il s'agit de (s' ante vocal)"
          }
        ],
        seg: [
          {
            es: "El español usa mucho se. El francés académico prefiere la pasiva con être.",
            p: 1
          },
          {
            es: "Il faut va con infinitivo directo, o con que más una frase, nunca que más infinitivo.",
            p: 2
          },
          {
            es: "Y se trata de: il s'agit, con apóstrofo.",
            p: 3
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "500 étudiants ont interrogé.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "500 étudiants ont été interrogés.",
          es: "Pasiva: être + participio."
        },
        seg: [
          {
            es: "Primera trampa: la pasiva sin été.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "500 étudiants ont été interrogés.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Il se agit de rappeler que…",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Il s'agit de rappeler que…",
          es: "s' ante vocal."
        },
        seg: [
          {
            es: "Segunda trampa: se agit.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Il s'agit de rappeler que…",
            p: 2
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/pensativo",
        q: "Más formal: «On doit agir vite».",
        o: [
          "Il convient d'agir vite.",
          "C'est que agir vite."
        ],
        a: 0,
        bien: "¡Eso es! Il convient d'agir.",
        mal: "Il convient de + infinitivo.",
        seg: [
          {
            es: "Te toca. Más formal: on doit agir vite."
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/confundido",
        q: "Completa: «Il est essentiel que chaque étudiant ___ accès…» (avoir)",
        o: [
          "ait",
          "a"
        ],
        a: 0,
        bien: "¡Muy bien! Ait.",
        mal: "Necesidad + que: subjuntivo.",
        seg: [
          {
            es: "Una más. Il est essentiel que chaque étudiant… ¿ait o a?"
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
            fr: "Il convient d'agir vite.",
            es: "Más formal: «On doit agir vite»."
          },
          {
            p: 2,
            fr: "Les copies ont été évaluées par le jury.",
            es: "A pasiva: «Le jury a évalué les copies»."
          },
          {
            p: 3,
            fr: "Il est essentiel que chaque étudiant ait accès aux ressources.",
            es: "Completa: «Il est essentiel que chaque étudiant ___ accès…» (avoir)"
          }
        ],
        seg: [
          {
            es: "Ahora tú. Escucha cada frase y repítela en voz alta."
          },
          {
            fr: "Il convient d'agir vite.",
            p: 1
          },
          {
            es: "Otra vez.",
            p: 1
          },
          {
            fr: "Il convient d'agir vite.",
            p: 1
          },
          {
            fr: "Les copies ont été évaluées par le jury.",
            p: 2
          },
          {
            es: "Otra vez.",
            p: 2
          },
          {
            fr: "Les copies ont été évaluées par le jury.",
            p: 2
          },
          {
            fr: "Il est essentiel que chaque étudiant ait accès aux ressources.",
            p: 3
          },
          {
            es: "Otra vez.",
            p: 3
          },
          {
            fr: "Il est essentiel que chaque étudiant ait accès aux ressources.",
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
                "Francés"
              ],
              [
                "opinar objetivamente",
                "il est nécessaire de · il convient de"
              ],
              [
                "necesidad + que",
                "subjuntivo: il est essentiel que chacun ait"
              ],
              [
                "constatar + que",
                "indicativo: il apparaît que… sont"
              ],
              [
                "poner el resultado delante",
                "pasiva: ont été publiés"
              ],
              [
                "con cosas",
                "se + verbo: s'observe"
              ]
            ]
          },
          {
            p: 2,
            regla: "Pasiva: être + participio que concuerda"
          }
        ],
        seg: [
          {
            es: "Repasemos.",
            p: 1
          },
          {
            es: "Il impersonal para opinar sin persona.",
            p: 1
          },
          {
            es: "Y la pasiva para poner el resultado delante. ¡Ahora, a practicar!",
            p: 2
          }
        ]
      }
    ]
  },
  contexto: {
    titulo: "Demasiados «on»", img: "bg-biblioteca", yo: "laura",
    escena: "La tutora señala que el informe de Laura habla demasiado de «nosotros».",
    pj: { tutrice: { n: "Madame Roche", voz: "fr-FR-DeniseNeural", rol: "la tutora" }, laura: { n: "Laura", voz: "fr-FR-VivienneMultilingualNeural", rol: "estudiante" } },
    lineas: [
      ["tutrice", "Votre rapport commence par « On doit dire que… ». C'est trop oral.", "Su informe empieza con «Hay que decir que…». Es demasiado oral."],
      ["laura", "Je peux écrire : « Il convient de souligner que… » ?", "¿Puedo escribir: «Conviene subrayar que…»?"],
      ["tutrice", "Parfait. Et « Nous avons interrogé 500 étudiants » ?", "Perfecto. ¿Y «Interrogamos a 500 estudiantes»?"],
      ["laura", "500 étudiants ont été interrogés.", "Se interrogó a 500 estudiantes."],
      ["tutrice", "Voilà : le résultat passe avant la personne.", "Eso es: el resultado va antes que la persona."]
    ],
    fijate: "Fíjate: el español usa mucho «se» (se interrogó); el francés académico usa la pasiva o il est…"
  },
  ensena: [
    { id: "imper", tipo: "gram", titulo: "Las construcciones impersonales",
      idea: "Empieza con il (sin persona real) para opinar de forma objetiva: Il est nécessaire de…",
      intro: "Son el «es necesario», «conviene», «se trata de» del español.",
      tabla: [["Francés", "Español", "Uso"], [
        ["Il est nécessaire de repenser l'évaluation.", "Es necesario repensar la evaluación.", "il est + adjetivo + de + infinitivo"],
        ["Il est essentiel que chacun ait accès aux ressources.", "Es esencial que cada uno tenga acceso.", "il est + adjetivo + que + subjuntivo"],
        ["Il convient de souligner que…", "Conviene subrayar que…", "= il faut, formal"],
        ["Il s'agit de rappeler que…", "Se trata de recordar que…", "il s'agit de"],
        ["Il apparaît que les résultats sont meilleurs.", "Resulta que los resultados son mejores.", "constatación: indicativo"]
      ]],
      regla: ["Escrito formal: il est nécessaire de (no «c'est nécessaire de»).", "Necesidad u opinión + que → subjuntivo: il est essentiel que chacun ait…", "Constatación (il apparaît que, il est évident que) → indicativo: …que les résultats sont…"] },
    { id: "passif", tipo: "gram", titulo: "La voz pasiva",
      idea: "El COD pasa a ser sujeto, usas être en el mismo tiempo, y el participio concuerda.",
      intro: "Sirve para poner el resultado primero. El autor de la acción, con par, es opcional.",
      analiza: { frases: [
        { partes: [["Les résultats", "suj"], ["ont été", "aux"], ["publiés", "part"], ["par les chercheurs.", "-"]], fr: "Les résultats ont été publiés par les chercheurs.", es: "Los resultados fueron publicados por los investigadores" },
        { partes: [["Une enquête", "suj"], ["a été", "aux"], ["menée.", "part"]], fr: "Une enquête a été menée.", es: "Se realizó una encuesta" },
        { partes: [["Ce phénomène", "suj"], ["s'observe", "verbe"], ["partout.", "-"]], fr: "Ce phénomène s'observe partout.", es: "Este fenómeno se observa en todas partes" }
      ]},
      regla: ["Activa: Les chercheurs ont publié les résultats → Pasiva: Les résultats ont été publiés.", "El participio concuerda con el nuevo sujeto: une enquête a été menée.", "Con cosas, también se + verbo: ce phénomène s'observe."] },
    {
      id: "ojo",
      tipo: "ojo",
      titulo: "Errores frecuentes",
      intro: "Tres errores que cometemos casi todos los hispanohablantes. Cázalos uno por uno.",
      errores: [
        {
          sit: "Laura escribe su método:",
          frase: "500 étudiants ont interrogé.",
          mal: "ont interrogé",
          bien: "ont été interrogés",
          porque: "Olvidamos été y la concordancia.",
          truco: "Pasiva: ont été interrogés."
        },
        {
          sit: "Laura escribe:",
          frase: "Il se agit de rappeler que la réforme est récente.",
          mal: "se agit",
          bien: "s'agit",
          porque: "Copiamos «se trata» sin apostrofar.",
          truco: "Ante vocal: il s'agit."
        },
        {
          sit: "Laura concluye:",
          frase: "Il faut que souligner les limites de l'étude.",
          mal: "faut que souligner",
          bien: "faut souligner",
          porque: "Mezclamos il faut que con un infinitivo.",
          truco: "Il faut + infinitivo: il faut souligner."
        }
      ]
    }
  ],
  ejemplos: [
    {
      sit: "Más formal: «On doit agir vite».",
      resp: "Il convient d'agir vite.",
      porque: "il convient de + infinitivo.",
      pasos: [
        {
          q: "¿Qué fórmula?",
          ops: [
            "il convient de",
            "on doit"
          ],
          ok: 0
        },
        {
          q: "¿De o d'?",
          ops: [
            "d': agir empieza por vocal",
            "de"
          ],
          ok: 0
        },
        {
          q: "¿Cómo queda?",
          ops: [
            "il convient d'agir vite",
            "il convient agir vite"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "A pasiva: «Le jury a évalué les copies».",
      resp: "Les copies ont été évaluées par le jury.",
      porque: "COD → sujeto.",
      pasos: [
        {
          q: "¿Qué pasa a sujeto?",
          ops: [
            "les copies",
            "le jury"
          ],
          ok: 0
        },
        {
          q: "¿Qué tiempo de être?",
          ops: [
            "ont été (passé composé)",
            "sont"
          ],
          ok: 0
        },
        {
          q: "¿Concuerda?",
          ops: [
            "sí: évaluées",
            "no: évalué"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "Completa: «Il est essentiel que chaque étudiant ___ accès…» (avoir)",
      resp: "Il est essentiel que chaque étudiant ait accès aux ressources.",
      porque: "necesidad → subjuntivo.",
      pasos: [
        {
          q: "¿Necesidad o constatación?",
          ops: [
            "necesidad",
            "constatación"
          ],
          ok: 0
        },
        {
          q: "¿Qué modo?",
          ops: [
            "subjuntivo",
            "indicativo"
          ],
          ok: 0
        },
        {
          q: "¿Qué forma de avoir?",
          ops: [
            "ait",
            "a"
          ],
          ok: 0
        }
      ]
    }
  ],
  comprueba: [
    { q: "En un texto formal, mejor…", o: ["Il est nécessaire de…", "C'est nécessaire de…"], a: 0, b: "imper", porque: "Escrito formal: il est." },
    { q: "«Il apparaît que les résultats ___ meilleurs.»", o: ["sont", "soient"], a: 0, b: "imper", porque: "Constatación → indicativo." },
    { q: "En la pasiva, el participio concuerda con…", o: ["el sujeto", "nada"], a: 0, b: "passif", porque: "une enquête a été menée." }
  ],
  practica: [
    { fase: "guiada", c: ["pa-il"], k: "choice", ask: "Elige el inicio.", q: "« ___ nécessaire de repenser l'évaluation. »", o: ["Il est", "C'est que", "Il y a"], a: 0, pista: "il est + adjetivo + de.", why: "<b>Il est nécessaire de</b>." },
    { fase: "guiada", c: ["pa-passif"], k: "fill", ask: "Escribe el participio de «mener».", q: "Une enquête a été ___ auprès de 500 étudiants.", acc: ["menée"], pista: "Concuerda con enquête (femenino).", why: "<b>menée</b>." },
    { fase: "guiada", c: ["pa-conv"], k: "choice", ask: "Elige la versión formal.", q: "« On doit souligner que… »", o: ["Il convient de souligner que…", "Il faut que souligner…", "On convient souligner…"], a: 0, pista: "= il faut, formal.", why: "<b>Il convient de</b>." },
    { fase: "indep", c: ["pa-il"], k: "choice", ask: "Elige el verbo.", q: "« Il est essentiel que chaque étudiant ___ accès aux ressources. »", o: ["ait", "a", "aura"], a: 0, why: "Necesidad → subjuntivo: <b>ait</b>." },
    { fase: "indep", c: ["pa-conv"], k: "choice", ask: "Elige el verbo.", q: "« Il apparaît que les résultats ___ meilleurs. »", o: ["sont", "soient"], a: 0, why: "Constatación → <b>sont</b>." },
    { fase: "indep", c: ["pa-passif"], k: "choice", ask: "Elige la pasiva.", q: "« Les chercheurs ont publié les résultats. »", o: ["Les résultats ont été publiés par les chercheurs.", "Les résultats ont publié les chercheurs.", "Les résultats sont publiés des chercheurs."], a: 0, why: "<b>ont été publiés par…</b>" },
    { fase: "indep", c: ["pa-passif"], k: "choice", ask: "¿Cuál usa se + verbo con valor pasivo?", q: "Elige:", o: ["Ce phénomène s'observe dans toutes les grandes villes.", "Ce phénomène, on l'observe."], a: 0, why: "<b>s'observe</b> = es observado." },
    { fase: "indep", c: ["pa-conv"], k: "choice", ask: "Elige la forma.", q: "« ___ de rappeler que la mesure reste expérimentale. »", o: ["Il s'agit", "Il se agit", "C'est agit"], a: 0, why: "<b>Il s'agit</b>." },
    { fase: "aplica", c: ["pa-passif"], k: "choice", ask: "Reescribe para tu metodología.", ctx: "«Nous avons interrogé 500 étudiants.»", q: "Versión objetiva:", o: ["500 étudiants ont été interrogés.", "500 étudiants ont interrogé.", "On a été interrogé 500 étudiants."], a: 0, why: "Pasiva: <b>ont été interrogés</b>." },
    { fase: "aplica", c: ["pa-il"], k: "fill", ask: "Completa tu conclusión.", ctx: "Propones una medida.", q: "Il est ___ de repenser l'organisation du travail. (necesario)", acc: ["nécessaire"], why: "<b>Il est nécessaire de</b>." },
    { fase: "aplica", c: ["pa-conv"], k: "choice", ask: "Elige el inicio formal.", ctx: "Abres un párrafo de tu síntesis.", q: "«Se trata de entender…»", o: ["Il s'agit de comprendre…", "C'est de comprendre…"], a: 0, why: "<b>Il s'agit de</b>." },
    { fase: "dominio", c: ["pa-il"], k: "choice", ask: "Elige.", q: "« Il est difficile ___ conclure. »", o: ["de", "à", "que"], a: 0, why: "il est + adjetivo + <b>de</b> + infinitivo." },
    { fase: "dominio", c: ["pa-passif"], k: "fill", ask: "Escribe el participio de «évaluer».", q: "Les copies ont été ___ par le jury.", acc: ["évaluées"], why: "Femenino plural: <b>évaluées</b>." },
    { fase: "dominio", c: ["pa-conv"], k: "choice", ask: "Elige.", q: "« Il ___ de souligner l'importance du contexte. »", o: ["convient", "faut que"], a: 0, why: "<b>Il convient de</b>." },
    { fase: "dominio", c: ["pa-passif", "pa-il"], k: "choice", ask: "¿Qué frase es más objetiva?", q: "Para un informe:", o: ["Une solution a été proposée.", "On a proposé une solution, je crois."], a: 0, why: "Pasiva sin persona." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche"] }
};

/* Lección 12 · La puntuación avanzada (retoma las relativas) */
window.__ENSENA["ponct2"] = {
  v: 1, arts: false, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Ponctuation avancée",
  roles: { suj: "sujeto", rel: "relativa", verbe: "verbo" },
  objetivo: {
    que: "Vas a usar la coma, los dos puntos y el punto y coma para que tus frases sean claras, y a saber cuándo una coma cambia el sentido.",
    corto: "Una coma puede cambiar el sentido de una frase.",
    podras: ["Distinguir la relativa con comas (todos) y sin comas (solo algunos).", "Usar dos puntos y punto y coma.", "Evitar comas que el francés no admite."],
    iconos: ["ic2/lapiz", "m2d/senalar", "m2d/pensativo"],
    previos: ["Las relativas (lecciones 1 y 7)."],
    capacidad: "Ahora puntúas un texto académico sin ambigüedades."
  },
  requiere: ["gn-rel"],
  recupera: ["gn-rel"],
  conceptos: {
    "po-rel": { n: "Relativa con o sin comas", b: "relativas" },
    "po-signes": { n: "Dos puntos y punto y coma", b: "signos" },
    "po-virgule": { n: "Dónde no va la coma", b: "coma" }
  },
  video: {
    titulo: "Puntuación avanzada",
    voz: "es-CO-SalomeNeural",
    escenas: [
      {
        v: "persona",
        cap: "Para qué sirve",
        fondo: "esc/escritorio-noche",
        img: "pj/laura-laptop",
        fr: "Les étudiants qui travaillent réussissent.",
        es: "Los estudiantes que trabajan aprueban.",
        nota: "Una coma que cambia todo",
        seg: [
          {
            es: "Laura escribió: les étudiants, qui travaillent, réussissent. La tutora pregunta: ¿todos los estudiantes trabajan?"
          },
          {
            fr: "Les étudiants qui travaillent réussissent.",
            p: 1
          },
          {
            es: "No, solo algunos. Entonces van sin comas. En francés una coma puede cambiar el sentido. Hoy aprendes las cuatro reglas de puntuación del texto académico.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Regla 1",
        titulo: "¿Todos o algunos?",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Les étudiants qui travaillent réussissent.",
            es: "Solo los que trabajan aprueban. (sin comas)"
          },
          {
            p: 2,
            fr: "Les étudiants, qui travaillent, réussissent.",
            es: "Todos trabajan, y todos aprueban. (con comas)"
          },
          {
            p: 3,
            regla: "relativa con comas: habla de todos · sin comas: solo de una parte"
          }
        ],
        seg: [
          {
            es: "Con comas, la relativa habla de todos. Sin comas, solo de una parte.",
            p: 1
          },
          {
            fr: "Les étudiants qui travaillent réussissent.",
            p: 1
          },
          {
            fr: "Les étudiants, qui travaillent, réussissent.",
            p: 2
          },
          {
            es: "Pregúntate siempre: ¿todos o solo algunos?",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Regla 2",
        titulo: "Dos puntos y punto y coma",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Le constat est clair : les étudiants lisent moins.",
            es: "El balance es claro: los estudiantes leen menos."
          },
          {
            p: 2,
            fr: "Les uns lisent sur papier ; les autres, sur écran.",
            es: "Unos leen en papel; otros, en pantalla."
          },
          {
            p: 3,
            regla: "dos puntos: anuncian una explicación o una lista · punto y coma: une dos ideas paralelas"
          }
        ],
        seg: [
          {
            es: "Los dos puntos anuncian una explicación o una lista.",
            p: 1
          },
          {
            fr: "Le constat est clair : les étudiants lisent moins.",
            p: 1
          },
          {
            es: "El punto y coma une dos ideas paralelas.",
            p: 2
          },
          {
            fr: "Les uns lisent sur papier ; les autres, sur écran.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Regla 3",
        titulo: "El espacio y etc.",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            regla: "en francés va un espacio antes de : ; ? ! (en español no)"
          },
          {
            p: 2,
            fr: "des livres, des revues, des journaux, etc.",
            es: "libros, revistas, periódicos, etc."
          },
          {
            p: 3,
            regla: "etc. lleva coma antes y un solo punto (nunca etc… ni etc...)"
          }
        ],
        seg: [
          {
            es: "Una diferencia con el español: antes de dos puntos, punto y coma, interrogación y exclamación va un espacio.",
            p: 1
          },
          {
            es: "Y etc. lleva coma antes, y un solo punto.",
            p: 2
          },
          {
            fr: "des livres, des revues, des journaux, etc.",
            p: 2
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Regla 4",
        titulo: "Nunca coma entre sujeto y verbo, ni antes de que",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Les effectifs de l'université ont doublé.",
            es: "Los inscritos de la universidad se duplicaron."
          },
          {
            p: 2,
            fr: "Les chercheurs affirment que la situation s'aggrave.",
            es: "Los investigadores afirman que la situación empeora."
          },
          {
            p: 3,
            fr: "Les chercheurs, qui ont analysé 200 cas, restent prudents.",
            es: "Los investigadores, que analizaron 200 casos, siguen prudentes."
          },
          {
            p: 4,
            regla: "sujeto + verbo: nunca separados · verbo + que: sin coma · un inciso se abre y se cierra"
          }
        ],
        seg: [
          {
            es: "Nunca va coma entre el sujeto y el verbo, aunque el sujeto sea largo.",
            p: 1
          },
          {
            fr: "Les effectifs de l'université ont doublé.",
            p: 1
          },
          {
            es: "Ni antes de que.",
            p: 2
          },
          {
            fr: "Les chercheurs affirment que la situation s'aggrave.",
            p: 2
          },
          {
            es: "Y un inciso entre comas se abre y se cierra:",
            p: 3
          },
          {
            fr: "Les chercheurs, qui ont analysé 200 cas, restent prudents.",
            p: 3
          }
        ]
      },
      {
        v: "pizarra",
        cap: "En la vida real",
        titulo: "Una coma que cambia todo",
        mz: "m2d/puntero",
        items: [
          {
            p: 1,
            fr: "Vous avez écrit : « Les étudiants, qui travaillent, réussissent. » Tous les étudiants travaillent ?",
            es: "Escribió: «Los estudiantes, que trabajan, aprueban». ¿Todos trabajan?"
          },
          {
            p: 2,
            fr: "Non, seulement certains.",
            es: "No, solo algunos."
          },
          {
            p: 3,
            fr: "Alors enlevez les virgules : Les étudiants qui travaillent réussissent.",
            es: "Entonces quite las comas: Les étudiants qui travaillent réussissent."
          },
          {
            p: 4,
            fr: "La virgule change vraiment le sens !",
            es: "¡La coma cambia de verdad el sentido!"
          }
        ],
        seg: [
          {
            es: "Escucha cómo suena en una conversación de verdad."
          },
          {
            fr: "Vous avez écrit : « Les étudiants, qui travaillent, réussissent. » Tous les étudiants travaillent ?",
            p: 1
          },
          {
            fr: "Non, seulement certains.",
            p: 2
          },
          {
            fr: "Alors enlevez les virgules : Les étudiants qui travaillent réussissent.",
            p: 3
          },
          {
            fr: "La virgule change vraiment le sens !",
            p: 4
          }
        ]
      },
      {
        v: "pizarra",
        cap: "Contraste con el español",
        titulo: "Las reglas casi iguales… con un espacio",
        mz: "m2d/alerta",
        items: [
          {
            p: 1,
            regla: "Español: Le dijo: «ven» · francés: Il a dit : « viens » (espacio antes de : y dentro de « »)"
          },
          {
            p: 2,
            regla: "Español y francés: nunca coma entre sujeto y verbo"
          },
          {
            p: 3,
            regla: "Español: afirman que (sin coma) · francés: affirment que (igual)"
          }
        ],
        seg: [
          {
            es: "La mayoría de las reglas son iguales que en español. Lo nuevo es el espacio antes de los signos dobles.",
            p: 1
          },
          {
            es: "La coma entre sujeto y verbo es un error en las dos lenguas.",
            p: 2
          },
          {
            es: "Y antes de que, tampoco.",
            p: 3
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Les auteurs affirment, que la réforme est urgente.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Les auteurs affirment que la réforme est urgente.",
          es: "Sin coma antes de que."
        },
        seg: [
          {
            es: "Primera trampa: coma antes de que.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Les auteurs affirment que la réforme est urgente.",
            p: 2
          }
        ]
      },
      {
        v: "dos",
        cap: "Trampa",
        a: {
          tag: "así no",
          fr: "Les effectifs de l'université, ont doublé.",
          es: ""
        },
        b: {
          tag: "así sí",
          fr: "Les effectifs de l'université ont doublé.",
          es: "Nunca coma entre sujeto y verbo."
        },
        seg: [
          {
            es: "Segunda trampa: coma después de un sujeto largo.",
            p: 1
          },
          {
            es: "Se dice:",
            p: 2
          },
          {
            fr: "Les effectifs de l'université ont doublé.",
            p: 2
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/pensativo",
        q: "Solo los cansados se fueron.",
        o: [
          "Les étudiants qui étaient fatigués sont partis.",
          "Les étudiants, qui étaient fatigués, sont partis."
        ],
        a: 0,
        bien: "¡Eso es! Sin comas.",
        mal: "Solo algunos: sin comas.",
        seg: [
          {
            es: "Te toca. Solo los estudiantes cansados se fueron. ¿Con o sin comas?"
          }
        ]
      },
      {
        v: "pregunta",
        cap: "Te toca",
        img: "m2d/confundido",
        q: "¿Cómo termina bien una lista?",
        o: [
          "des livres, des revues, des journaux, etc.",
          "des livres, des revues, des journaux, etc…"
        ],
        a: 0,
        bien: "¡Muy bien! Etc. con un punto.",
        mal: "Etc. lleva un solo punto.",
        seg: [
          {
            es: "Una más. ¿Cómo termina bien una lista con etcétera?"
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
            fr: "Les étudiants qui étaient fatigués sont partis.",
            es: "Solo los cansados se fueron."
          },
          {
            p: 2,
            fr: "Le constat est clair : les étudiants lisent moins.",
            es: "Explica: «El balance es claro: los estudiantes leen menos»."
          },
          {
            p: 3,
            fr: "Les uns lisent sur papier ; les autres, sur écran.",
            es: "Compara: «Unos leen en papel; otros, en pantalla»."
          }
        ],
        seg: [
          {
            es: "Ahora tú. Escucha cada frase y repítela en voz alta."
          },
          {
            fr: "Les étudiants qui étaient fatigués sont partis.",
            p: 1
          },
          {
            es: "Otra vez.",
            p: 1
          },
          {
            fr: "Les étudiants qui étaient fatigués sont partis.",
            p: 1
          },
          {
            fr: "Le constat est clair : les étudiants lisent moins.",
            p: 2
          },
          {
            es: "Otra vez.",
            p: 2
          },
          {
            fr: "Le constat est clair : les étudiants lisent moins.",
            p: 2
          },
          {
            fr: "Les uns lisent sur papier ; les autres, sur écran.",
            p: 3
          },
          {
            es: "Otra vez.",
            p: 3
          },
          {
            fr: "Les uns lisent sur papier ; les autres, sur écran.",
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
                "Regla",
                "Ejemplo"
              ],
              [
                "relativa: todos o algunos",
                "les étudiants, qui… / les étudiants qui…"
              ],
              [
                "dos puntos · punto y coma",
                "explicación o lista · ideas paralelas"
              ],
              [
                "espacio antes de : ; ? !",
                "le constat est clair : …"
              ],
              [
                "sin coma",
                "sujeto + verbo · verbo + que"
              ]
            ]
          },
          {
            p: 2,
            regla: "Nunca coma entre sujeto y verbo, ni antes de que"
          }
        ],
        seg: [
          {
            es: "Repasemos.",
            p: 1
          },
          {
            es: "Comas en la relativa si hablas de todos.",
            p: 1
          },
          {
            es: "Y nunca entre sujeto y verbo. ¡Ahora, a practicar!",
            p: 2
          }
        ]
      }
    ]
  },
  contexto: {
    titulo: "Una coma que cambia todo", img: "bg-biblioteca", yo: "laura",
    escena: "Laura escribe sobre los resultados de una encuesta.",
    pj: { tutrice: { n: "Madame Roche", voz: "fr-FR-DeniseNeural", rol: "la tutora" }, laura: { n: "Laura", voz: "fr-FR-VivienneMultilingualNeural", rol: "estudiante" } },
    lineas: [
      ["tutrice", "Vous avez écrit : « Les étudiants, qui travaillent, réussissent. » Tous les étudiants travaillent ?", "Escribió: «Los estudiantes, que trabajan, aprueban». ¿Todos trabajan?"],
      ["laura", "Non, seulement certains.", "No, solo algunos."],
      ["tutrice", "Alors enlevez les virgules : Les étudiants qui travaillent réussissent.", "Entonces quite las comas: Les étudiants qui travaillent réussissent."],
      ["laura", "La virgule change vraiment le sens !", "¡La coma cambia de verdad el sentido!"]
    ],
    fijate: "Fíjate: es la misma diferencia que en español entre relativa explicativa y especificativa."
  },
  ensena: [
    { id: "relativas", tipo: "uso", titulo: "Relativa con comas o sin comas",
      idea: "Con comas, la relativa habla de todos; sin comas, solo de una parte.",
      intro: "Es lo mismo que en español: explicativa (con comas) y especificativa (sin comas).",
      pares: [
        ["Les étudiants, qui travaillent, réussissent.", "Todos los estudiantes trabajan, y todos aprueban"],
        ["Les étudiants qui travaillent réussissent.", "Solo los que trabajan aprueban"]
      ],
      regla: ["Pregúntate: ¿todos o solo algunos?", "Todos → comas. Algunos → sin comas."] },
    { id: "signos", tipo: "uso", titulo: "Dos puntos y punto y coma",
      idea: "Los dos puntos anuncian una explicación o una lista; el punto y coma une dos ideas paralelas.",
      intro: "Se usan casi igual que en español.",
      pares: [
        ["Le constat est clair : les étudiants lisent moins.", "Dos puntos: explicación"],
        ["Trois facteurs comptent : le coût, le temps et la motivation.", "Dos puntos: lista"],
        ["Les uns lisent sur papier ; les autres, sur écran.", "Punto y coma: ideas paralelas"]
      ],
      regla: ["En francés va un espacio antes de : ; ? !", "etc. lleva una coma antes y un solo punto: des livres, des revues, etc."] },
    { id: "coma", tipo: "uso", titulo: "Dónde no va la coma",
      idea: "Nunca va coma entre el sujeto y el verbo, ni antes de que.",
      intro: "Y sí va después de un complemento largo al principio de la frase.",
      pares: [
        ["Les chercheurs affirment que la situation s'aggrave.", "Sin coma antes de que"],
        ["Depuis la réforme de l'université, les effectifs ont doublé.", "Coma después del complemento largo inicial"]
      ],
      regla: ["Sujeto + verbo: nunca separados por coma, aunque el sujeto sea largo.", "Verbo + que: sin coma (affirmer que, penser que)."] },
    {
      id: "ojo",
      tipo: "ojo",
      titulo: "Errores frecuentes",
      intro: "Tres errores que cometemos casi todos los hispanohablantes. Cázalos uno por uno.",
      errores: [
        {
          sit: "Laura cita:",
          frase: "Les auteurs affirment, que la réforme est urgente.",
          mal: "affirment, que",
          bien: "affirment que",
          porque: "Hacemos una pausa al hablar y la escribimos.",
          truco: "Verbo + que: sin coma."
        },
        {
          sit: "Laura escribe:",
          frase: "Les effectifs de l'université, ont doublé.",
          mal: "l'université, ont",
          bien: "l'université ont",
          porque: "El sujeto largo nos pide una pausa.",
          truco: "Nunca coma entre sujeto y verbo."
        },
        {
          sit: "Laura resume:",
          frase: "Les chercheurs, qui ont analysé 200 cas restent prudents.",
          mal: "cas restent",
          bien: "cas, restent",
          porque: "Abrimos el inciso y olvidamos cerrarlo.",
          truco: "Un inciso entre comas se abre y se cierra."
        }
      ]
    }
  ],
  ejemplos: [
    {
      sit: "Solo los cansados se fueron.",
      resp: "Les étudiants qui étaient fatigués sont partis.",
      porque: "algunos → sin comas.",
      pasos: [
        {
          q: "¿Todos o algunos?",
          ops: [
            "algunos",
            "todos"
          ],
          ok: 0
        },
        {
          q: "¿Con comas?",
          ops: [
            "no",
            "sí"
          ],
          ok: 0
        },
        {
          q: "¿Por qué?",
          ops: [
            "la relativa elige una parte",
            "por la pausa"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "Explica: «El balance es claro: los estudiantes leen menos».",
      resp: "Le constat est clair : les étudiants lisent moins.",
      porque: "dos puntos = explicación.",
      pasos: [
        {
          q: "¿Qué anuncian los dos puntos?",
          ops: [
            "una explicación",
            "una cita"
          ],
          ok: 0
        },
        {
          q: "¿Espacio antes de los dos puntos?",
          ops: [
            "sí, en francés",
            "no"
          ],
          ok: 0
        },
        {
          q: "¿Mayúscula después?",
          ops: [
            "no: les",
            "sí"
          ],
          ok: 0
        }
      ]
    },
    {
      sit: "Compara: «Unos leen en papel; otros, en pantalla».",
      resp: "Les uns lisent sur papier ; les autres, sur écran.",
      porque: "punto y coma = ideas paralelas.",
      pasos: [
        {
          q: "¿Qué signo une dos ideas paralelas?",
          ops: [
            "punto y coma",
            "dos puntos"
          ],
          ok: 0
        },
        {
          q: "¿Espacio antes?",
          ops: [
            "sí",
            "no"
          ],
          ok: 0
        },
        {
          q: "¿Y la coma en les autres, sur écran?",
          ops: [
            "reemplaza el verbo lisent",
            "es un error"
          ],
          ok: 0
        }
      ]
    }
  ],
  comprueba: [
    { q: "Relativa entre comas significa…", o: ["todos", "solo algunos"], a: 0, b: "relativas", porque: "Explicativa: todos." },
    { q: "Para anunciar una explicación usas…", o: ["dos puntos", "punto y coma"], a: 0, b: "signos", porque: "Dos puntos." },
    { q: "Antes de que (affirmer que)…", o: ["no va coma", "va coma"], a: 0, b: "coma", porque: "Nunca coma antes de que." }
  ],
  practica: [
    { fase: "guiada", c: ["po-rel"], k: "choice", es: false, ask: "¿Cuál dice que TODOS trabajan?", ctx: "Describes a toda una promoción.", q: "Mira las comas.", o: ["Les étudiants, qui travaillent, réussissent.", "Les étudiants qui travaillent réussissent."], a: 0, pista: "Con comas: todos.", why: "Con comas: <b>todos</b>." },
    { fase: "guiada", c: ["po-signes"], k: "choice", es: true, ask: "¿Qué signo anuncia una explicación?", q: "Elige:", o: ["los dos puntos", "el punto y coma", "los puntos suspensivos"], a: 0, pista: "Anuncia lo que sigue.", why: "<b>Dos puntos</b>." },
    { fase: "guiada", c: ["po-virgule"], k: "choice", ask: "Elige la frase correcta.", q: "Citas un estudio.", o: ["Les chercheurs affirment que la situation s'aggrave.", "Les chercheurs affirment, que la situation s'aggrave."], a: 0, pista: "¿Coma antes de que?", why: "Sin coma antes de <i>que</i>." },
    { fase: "indep", c: ["po-rel"], k: "choice", ask: "¿Cuál habla solo de algunos?", q: "Resultado de una encuesta:", o: ["Les étudiants qui travaillent réussissent.", "Les étudiants, qui travaillent, réussissent."], a: 0, why: "Sin comas: <b>solo algunos</b>." },
    { fase: "indep", c: ["po-virgule"], k: "choice", ask: "Elige la frase correcta.", q: "Complemento largo al principio:", o: ["Depuis la réforme de l'université, les effectifs ont doublé.", "Depuis la réforme de l'université les effectifs, ont doublé."], a: 0, why: "Coma después del complemento, no entre sujeto y verbo." },
    { fase: "indep", c: ["po-signes"], k: "choice", ask: "Elige la puntuación.", q: "Dos ideas paralelas sin conector:", o: ["Les uns lisent sur papier ; les autres, sur écran.", "Les uns lisent sur papier : les autres, sur écran.", "Les uns lisent sur papier… les autres, sur écran."], a: 0, why: "<b>Punto y coma</b>." },
    { fase: "indep", c: ["po-signes"], k: "choice", ask: "Elige la enumeración correcta.", q: "Fin de una lista:", o: ["des livres, des revues, des journaux, etc.", "des livres, des revues, des journaux, etc…", "des livres, des revues, des journaux etc..."], a: 0, why: "Coma antes y un solo punto." },
    { fase: "aplica", c: ["po-rel"], k: "choice", ask: "Elige la versión fiel a tus datos.", ctx: "Solo los estudiantes que leían en papel obtuvieron mejores notas.", q: "Tu frase:", o: ["Les étudiants qui lisaient sur papier ont obtenu de meilleures notes.", "Les étudiants, qui lisaient sur papier, ont obtenu de meilleures notes."], a: 0, why: "Solo algunos: <b>sin comas</b>." },
    { fase: "aplica", c: ["po-signes"], k: "choice", ask: "Elige la puntuación.", ctx: "Introduces tres factores en tu síntesis.", q: "«Tres factores cuentan: el costo, el tiempo y la motivación.»", o: ["Trois facteurs comptent : le coût, le temps et la motivation.", "Trois facteurs comptent ; le coût, le temps et la motivation."], a: 0, why: "Lista → <b>dos puntos</b>." },
    { fase: "aplica", c: ["po-virgule"], k: "spot", ask: "Quita la coma incorrecta: toca el grupo y corrígelo.", ctx: "Revisas tu síntesis.", s: "Les auteurs [affirment, que] la réforme est urgente .", fix: "affirment que", why: "Sin coma antes de <i>que</i>." },
    { fase: "dominio", c: ["po-rel"], k: "choice", ask: "¿Qué significa?", es: true, q: "« Les candidats, qui étaient prêts, ont réussi. »", o: ["Todos estaban listos y todos aprobaron.", "Solo aprobaron los que estaban listos."], a: 0, why: "Con comas: todos." },
    { fase: "dominio", c: ["po-virgule"], k: "choice", ask: "Elige la correcta.", q: "Sujeto largo:", o: ["Les effectifs de l'université ont doublé.", "Les effectifs de l'université, ont doublé."], a: 0, why: "Nunca coma entre sujeto y verbo." },
    { fase: "dominio", c: ["po-signes"], k: "choice", ask: "Elige la puntuación.", q: "Explicación:", o: ["Le constat est clair : les étudiants lisent moins.", "Le constat est clair ; les étudiants lisent moins."], a: 0, why: "Explicación → <b>dos puntos</b>." },
    { fase: "dominio", c: ["po-rel", "po-virgule"], k: "choice", ask: "Elige la frase bien puntuada.", q: "Solo algunos:", o: ["Les chercheurs qui ont analysé 200 cas restent prudents.", "Les chercheurs, qui ont analysé 200 cas restent prudents."], a: 0, why: "Sin comas: solo algunos (y nunca una sola coma suelta)." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche"] }
};

/* Lección 13 · Proyecto: describir con grupos nominales (integra toda la sección) */
window.__ENSENA["p-gn"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Projet : écrire une description",
  roles: { det: "determinante", nucleo: "núcleo", adj: "adjetivo", cn: "compl. del nombre", rel: "relativa" },
  objetivo: {
    que: "Vas a preparar una descripción de 150 a 200 palabras usando todo lo de la sección: grupos nominales ricos, adjetivos bien colocados, relativas y buena puntuación.",
    corto: "Proyecto: junta todo lo aprendido en una descripción.",
    podras: ["Enriquecer cada nombre con 2 o 3 expansiones.", "Colocar bien los adjetivos.", "Aligerar el texto quitando «qui est»."],
    iconos: ["m2d/escribiendo", "ic2/libros", "ic2/trofeo"],
    previos: ["Las lecciones 1 a 12 de esta sección."],
    capacidad: "Ahora puedes escribir una descripción densa y elegante, de nivel C1."
  },
  requiere: ["gn-adj", "gn-rel", "adj-avant", "po-rel"],
  recupera: ["adj-avant", "gn-rel"],
  conceptos: {
    "pg-enrichir": { n: "Enriquecer el nombre", b: "metodo" },
    "pg-ordre": { n: "Colocar los adjetivos", b: "metodo" },
    "pg-alleger": { n: "Aligerar: quitar «qui est»", b: "alleger" }
  },
  video: {
    titulo: "Proyecto: la descripción",
    voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/escribiendo", grande: "Projet", seg: [
        { es: "Hola. En este proyecto juntas todo lo de la sección en una descripción corta." } ] },
      { v: "frase", filas: [
          { partes: [["une", "det", 1], ["grande", "adj", 1], ["cape", "nucleo", 1], ["de pourpre", "cn", 2], ["brodée d'hermine", "adj", 2]] } ], seg: [
        { es: "Observa cómo describe El Principito al rey: un nombre con varias expansiones.", p: 1 },
        { fr: "une grande cape de pourpre brodée d'hermine", p: 2 } ] },
      { v: "dos",
        a: { tag: "pesado", fr: "une maison qui est entourée d'arbres", es: "una casa que está rodeada de árboles" },
        b: { tag: "ligero", fr: "une maison entourée d'arbres", es: "una casa rodeada de árboles" },
        seg: [
          { es: "Y aligera: si una relativa solo tiene el verbo ser, quítalo.", p: 1 },
          { fr: "une maison entourée d'arbres", p: 2 } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["une vieille maison", "une maison entourée d'arbres", "la mer grise que le vent soulève"], seg: [
        { es: "Dos o tres expansiones por nombre, adjetivos en su lugar y sin repeticiones. ¡A escribir!", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Preparar la descripción", img: "bg-biblioteca", yo: "laura",
    escena: "Laura prepara su descripción para el taller de escritura.",
    pj: { tutrice: { n: "Madame Roche", voz: "fr-FR-DeniseNeural", rol: "la tutora" }, laura: { n: "Laura", voz: "fr-FR-VivienneMultilingualNeural", rol: "estudiante" } },
    lineas: [
      ["laura", "J'ai écrit : « Il y a une maison. Elle est vieille. Elle est entourée d'arbres. »", "Escribí: «Hay una casa. Es vieja. Está rodeada de árboles»."],
      ["tutrice", "Mettez tout dans un seul groupe nominal.", "Póngalo todo en un solo grupo nominal."],
      ["laura", "Une vieille maison entourée d'arbres.", "Una casa vieja rodeada de árboles."],
      ["tutrice", "Voilà : trois phrases sont devenues un groupe nominal.", "Eso es: tres frases se volvieron un grupo nominal."]
    ],
    fijate: "Fíjate: Laura usó el adjetivo antes (vieille) y un participio después (entourée)."
  },
  ensena: [
    { id: "metodo", tipo: "gram", titulo: "El método",
      idea: "Elige qué describir, escribe 6 a 8 nombres clave y enriquece cada uno con 2 o 3 expansiones distintas.",
      intro: "Así lo hace El Principito al describir al rey.",
      analiza: { frases: [
        { partes: [["une", "det"], ["grande", "adj"], ["cape", "nucleo"], ["de pourpre", "cn"], ["brodée d'hermine", "adj"]], es: "una gran capa púrpura bordada de armiño" },
        { partes: [["une", "det"], ["vieille", "adj"], ["maison", "nucleo"], ["coloniale", "adj"], ["abandonnée", "adj"]], es: "una vieja casa colonial abandonada" },
        { partes: [["la", "det"], ["mer", "nucleo"], ["grise", "adj"], ["que le vent soulève", "rel"]], es: "el mar gris que el viento levanta" }
      ]},
      regla: ["Antes del nombre: edad, belleza, tamaño (vieille, belle, grande).", "Después: color, tipo y participios (grise, coloniale, abandonnée).", "Máximo tres expansiones por nombre: si no, se vuelve pesado.", "Organiza el espacio: de lo general al detalle (au fond de, à gauche, au premier plan)."] },
    { id: "alleger", tipo: "ojo", titulo: "Aligerar el texto",
      idea: "Si una relativa solo tiene «qui est», quítalo y deja el adjetivo o el participio.",
      intro: "Es más ligero y más académico.",
      etq: ["Antes", "Después"],
      toca: "Toca cada tarjeta para ver la versión ligera.",
      errores: [
        ["une maison qui est entourée d'arbres", "une maison entourée d'arbres", "Fuera qui est."],
        ["Il y a une maison. Elle est vieille.", "une vieille maison", "Dos frases → un grupo nominal."],
        ["la mer qui est grise", "la mer grise", "Fuera qui est."]
      ] }
  ],
  ejemplos: [
    { sit: "Enriquece: «Le chien dort dans le jardin».", resp: "Le vieux chien de la voisine dort dans le jardin que mon père a planté.", pasos: ["chien: adjetivo (vieux) + complemento (de la voisine).", "jardin: relativa (que mon père a planté)."], porque: "Enriqueces los nombres, no el verbo." },
    { sit: "Ordena: maison, vieille, coloniale, abandonnée.", resp: "une vieille maison coloniale abandonnée", pasos: ["Edad antes: vieille.", "Tipo y participio después: coloniale abandonnée."], porque: "Antes lo corto, después tipo y participio." },
    { sit: "Aligera: «une maison qui est entourée d'arbres».", resp: "une maison entourée d'arbres", pasos: ["La relativa solo tiene qui est.", "Quítalo: queda el participio."], porque: "Más ligero." }
  ],
  comprueba: [
    { q: "¿Cuántas expansiones por nombre, como máximo?", o: ["tres", "seis"], a: 0, b: "metodo", porque: "Más de tres pesa." },
    { q: "«vieille» va…", o: ["antes del nombre", "después del nombre"], a: 0, b: "metodo", porque: "Edad → antes." },
    { q: "«une maison qui est entourée» se aligera así:", o: ["une maison entourée", "une maison qui entourée"], a: 0, b: "alleger", porque: "Fuera qui est." }
  ],
  practica: [
    { fase: "guiada", c: ["pg-enrichir"], k: "choice", es: true, ask: "Cuenta las expansiones.", ctx: "La descripción del rey en El Principito.", q: "« une grande cape de pourpre brodée d'hermine » : ¿cuántas expansiones tiene cape?", o: ["tres: grande, de pourpre, brodée d'hermine", "una: grande", "dos: de pourpre, d'hermine"], a: 0, pista: "Adjetivo, complemento y participio.", why: "Tres expansiones." },
    { fase: "guiada", c: ["pg-ordre"], k: "choice", ask: "Elige el orden.", q: "Describes una casa.", o: ["une vieille maison coloniale abandonnée", "une maison vieille coloniale abandonnée", "une abandonnée vieille maison coloniale"], a: 0, pista: "Edad antes; tipo y participio después.", why: "<b>une vieille maison coloniale abandonnée</b>." },
    { fase: "guiada", c: ["pg-alleger"], k: "spot", ask: "Toca las palabras que sobran y corrígelas.", s: "Une maison [qui est entourée] d'arbres fruitiers me paraissait immense .", fix: "entourée", pista: "¿Qué palabras se pueden quitar?", why: "<b>une maison entourée d'arbres</b>." },
    { fase: "indep", c: ["pg-enrichir"], k: "choice", ask: "Elige la versión enriquecida.", q: "« Le chien dort dans le jardin. »", o: ["Le vieux chien de la voisine dort dans le jardin que mon père a planté.", "Le chien dort beaucoup dans le jardin.", "Le chien, il dort dans le jardin."], a: 0, why: "Enriquece los nombres, no el verbo." },
    { fase: "indep", c: ["pg-enrichir"], k: "choice", ask: "Elige la versión enriquecida.", q: "« Elle regarde la mer depuis la falaise. »", o: ["Elle regarde la mer grise que le vent soulève depuis la falaise de son enfance.", "Elle regarde beaucoup la mer depuis la falaise.", "Elle regarde la mer, la mer est grise, depuis la falaise."], a: 0, why: "Adjetivo + relativa + complemento." },
    { fase: "indep", c: ["pg-ordre"], k: "order", ask: "Ordena el grupo nominal del rey.", q: "Núcleo, complemento y participio.", tokens: ["l'immense traîne", "de sa cape", "brodée", "d'hermine"], why: "<b>l'immense traîne de sa cape brodée d'hermine</b>." },
    { fase: "indep", c: ["pg-alleger"], k: "choice", ask: "Elige la versión más ligera.", q: "«la ciudad que está llena de cafés»", o: ["la ville pleine de cafés", "la ville qui est pleine de cafés"], a: 0, why: "Fuera <i>qui est</i>." },
    { fase: "aplica", c: ["pg-enrichir"], k: "choice", ask: "Elige el inicio de tu descripción.", ctx: "Abres tu texto para el taller.", q: "El más rico:", o: ["Au fond de la cour dormait une bâtisse de brique rouge dont les volets, fermés depuis des années, laissaient filtrer une odeur de poussière.", "Il y a une maison dans la cour. Elle est vieille. Elle sent la poussière."], a: 0, why: "Un solo grupo nominal muy rico." },
    { fase: "aplica", c: ["pg-ordre"], k: "choice", ask: "Elige el orden.", ctx: "Describes a un profesor.", q: "«un joven profesor colombiano»", o: ["un jeune professeur colombien", "un professeur jeune colombien"], a: 0, why: "Edad antes, nacionalidad después." },
    { fase: "aplica", c: ["pg-alleger", "pg-enrichir"], k: "choice", es: true, ask: "Antes de entregar, ¿qué revisas primero?", q: "Lo más importante:", o: ["la concordancia de adjetivos y participios en cada grupo nominal", "el número de párrafos", "que haya una conclusión"], a: 0, why: "Un grupo nominal rico tiene muchas concordancias." },
    { fase: "dominio", c: ["pg-ordre"], k: "choice", ask: "Elige el orden.", q: "«una gran ciudad industrial»", o: ["une grande ville industrielle", "une ville grande industrielle"], a: 0, why: "Tamaño antes, tipo después." },
    { fase: "dominio", c: ["pg-alleger"], k: "choice", ask: "Aligera.", q: "« un livre qui est écrit en 1943 »", o: ["un livre écrit en 1943", "un livre qui écrit en 1943"], a: 0, why: "Fuera <i>qui est</i>." },
    { fase: "dominio", c: ["pg-enrichir"], k: "choice", ask: "¿Qué versión condensa mejor?", q: "Tu descripción:", o: ["une vieille maison blanche aux volets bleus", "une maison qui est vieille et qui est blanche et qui a des volets bleus"], a: 0, why: "Adjetivos + complemento del nombre." },
    { fase: "dominio", c: ["pg-enrichir", "pg-ordre"], k: "choice", ask: "Elige el grupo nominal correcto.", q: "Describes el mar.", o: ["la mer grise que le vent soulève", "la grise mer que le vent soulève"], a: 0, why: "Color después." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche"], previo: ["vieille", "maison", "coloniale", "abandonnée", "jeune", "professeur", "colombien", "grande", "ville", "industrielle", "mer", "grise", "vieux", "chien", "voisine", "dort", "jardin", "père", "planté"] }
};

/* ===================== Sección V · Cohésion et cohérence ===================== */
var __PJ = { tutrice: { n: "Madame Roche", voz: "fr-FR-DeniseNeural", rol: "la tutora" }, laura: { n: "Laura", voz: "fr-FR-VivienneMultilingualNeural", rol: "estudiante" } };

/* Lección 14 · La reformulación (retoma la pasiva y el grupo nominal) */
window.__ENSENA["reform"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "La reformulation",
  roles: { suj: "sujeto", verbe: "verbo", nucleo: "nombre", cn: "complemento" },
  objetivo: {
    que: "Vas a decir la misma idea con otras palabras, sin copiar el texto: es lo que exige el résumé y la synthèse del DALF.",
    corto: "Misma idea, otras palabras: nunca copies el texto.",
    podras: ["Nominalizar: les prix augmentent → la hausse des prix.", "Usar sinónimos, palabras generales y antónimos.", "Usar c'est-à-dire, autrement dit."],
    iconos: ["m2d/escribiendo", "ic2/libros", "m2d/senalar"],
    previos: ["La voz pasiva (lección 11) y el grupo nominal (lección 1)."],
    capacidad: "Ahora reformulas un texto sin copiarlo, como pide el DALF."
  },
  requiere: ["pa-passif", "gn-cn"],
  recupera: ["pa-passif"],
  conceptos: {
    "rf-nom": { n: "Nominalizar: verbo → nombre", b: "nominal" },
    "rf-lex": { n: "Sinónimo, palabra general, antónimo", b: "lexico" },
    "rf-marq": { n: "c'est-à-dire, autrement dit, soit", b: "lexico" }
  },
  video: {
    titulo: "La reformulación", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/escribiendo", grande: "autrement dit", seg: [
        { es: "Hola. En el resumen y la síntesis del DALF está prohibido copiar. Hoy aprendes a reformular." } ] },
      { v: "frase", filas: [
          { partes: [["Les prix", "suj", 1], ["augmentent.", "verbe", 1]] },
          { nota: "↓", p: 2, partes: [["l'augmentation", "nucleo", 2], ["des prix", "cn", 2]] } ], seg: [
        { es: "El truco más útil: convertir el verbo en nombre. El sujeto pasa a ser complemento.", p: 1 },
        { fr: "Les prix augmentent.", p: 1 },
        { fr: "l'augmentation des prix", p: 2 } ] },
      { v: "dos",
        a: { tag: "antónimo", fr: "C'est insuffisant.", es: "en vez de: ce n'est pas suffisant" },
        b: { tag: "palabra general", fr: "les transports", es: "en vez de: les voitures, les bus et les trains" },
        seg: [
          { es: "También puedes cambiar las palabras: un antónimo en lugar de una negación,", p: 1 },
          { fr: "C'est insuffisant.", p: 1 },
          { es: "o una palabra general en lugar de una lista.", p: 2 },
          { fr: "les transports", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "« Les loyers baissent. » →", o: ["la baisse des loyers", "les loyers qui baissent"], a: 0,
        bien: "¡Sí! El verbo se volvió nombre.", mal: "Eso sigue siendo una frase con verbo. Nominaliza: la baisse.",
        seg: [ { es: "Pausa. ¿Cuál es la nominalización?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["l'augmentation des prix", "C'est insuffisant.", "les transports", "autrement dit"], seg: [
        { es: "Nominaliza, cambia las palabras y nunca copies el texto.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "No copiar el texto", img: "bg-biblioteca", yo: "laura",
    escena: "Laura entrega un resumen con frases copiadas del artículo.",
    pj: __PJ,
    lineas: [
      ["tutrice", "Cette phrase est copiée du texte : « Les loyers ont fortement augmenté. »", "Esta frase está copiada del texto."],
      ["laura", "Je peux écrire : « la forte hausse des loyers » ?", "¿Puedo escribir «la fuerte subida de los arriendos»?"],
      ["tutrice", "Oui : vous avez nominalisé, et fortement est devenu forte.", "Sí: nominalizó, y fortement se volvió forte."],
      ["laura", "Donc l'adverbe devient adjectif.", "Entonces el adverbio se vuelve adjetivo."]
    ],
    fijate: "Fíjate: al volver nombre el verbo, el adverbio se vuelve adjetivo (fortement → forte)."
  },
  ensena: [
    { id: "nominal", tipo: "gram", titulo: "Nominalizar",
      idea: "Convierte el verbo en nombre: el sujeto pasa a ser complemento y el adverbio, adjetivo.",
      intro: "Es la herramienta número uno del resumen.",
      tabla: [["Nombre", "Viene de · español", "Terminación"], [
        ["l'augmentation", "augmenter · el aumento", "-ation (femenino)"],
        ["la réduction", "réduire · la reducción", "-tion (femenino)"],
        ["le développement", "développer · el desarrollo", "-ment (masculino)"],
        ["l'isolement", "s'isoler · el aislamiento", "-ment (masculino)"],
        ["la croissance", "croître · el crecimiento", "-ance (femenino)"],
        ["la baisse", "baisser · la baja", "sin terminación"],
        ["la réforme", "réformer · la reforma", "sin terminación"],
        ["la décision", "décider · la decisión", "irregular"]
      ]],
      regla: ["Les prix augmentent → l'augmentation des prix.", "Le chômage a fortement augmenté → la forte hausse du chômage (fortement → forte).", "-ment y -age son masculinos; -tion, -ance, -ure, femeninos."] },
    { id: "lexico", tipo: "gram", titulo: "Cambiar las palabras",
      idea: "Usa sinónimos, una palabra general para una lista, o un antónimo en vez de una negación.",
      intro: "Y anuncia que reformulas con c'est-à-dire o autrement dit.",
      tabla: [["Francés", "Español", "Procedimiento"], [
        ["C'est insuffisant.", "Ce n'est pas suffisant. · Es insuficiente.", "antónimo"],
        ["les transports", "les voitures, les bus et les trains · el transporte", "palabra general"],
        ["croître, progresser", "augmenter · crecer, progresar", "sinónimos"],
        ["autrement dit", "es decir, dicho de otro modo", "reformular"],
        ["c'est-à-dire", "es decir", "reformular"],
        ["300 étudiants, soit un tiers", "300 estudiantes, o sea un tercio", "soit: equivalencia"]
      ]],
      regla: ["Conserva solo los términos técnicos (télétravail, inflation).", "No añadas ni quites ideas, ni tu opinión."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Errores típicos al reformular.",
      errores: [
        ["Copiar la frase del texto", "Decir la idea con otras palabras", "En el resumen está prohibido copiar."],
        ["la décidation", "la décision", "No inventes: comprueba el nombre."],
        ["Ce n'est pas assez suffisant.", "C'est insuffisant.", "Sin redundancia."],
        ["le augmentation", "l'augmentation", "Los nombres en -tion son femeninos."]
      ] }
  ],
  ejemplos: [
    { sit: "Nominaliza «Les loyers baissent».", resp: "la baisse des loyers", pasos: ["baisser → la baisse.", "El sujeto les loyers → des loyers."], porque: "El verbo se vuelve nombre." },
    { sit: "Nominaliza «Le chômage a fortement augmenté».", resp: "la forte hausse du chômage", pasos: ["augmenter → la hausse (sinónimo).", "fortement → forte."], porque: "El adverbio se vuelve adjetivo." },
    { sit: "Reformula «Ce n'est pas suffisant».", resp: "C'est insuffisant.", pasos: ["Quita la negación.", "Usa el antónimo: insuffisant."], porque: "Más breve y escrito." }
  ],
  comprueba: [
    { q: "Nominalizar es…", o: ["convertir el verbo en nombre", "copiar la frase"], a: 0, b: "nominal", porque: "les prix augmentent → l'augmentation des prix." },
    { q: "«les voitures, les bus et les trains» →", o: ["les transports", "les choses"], a: 0, b: "lexico", porque: "Palabra general." },
    { q: "«autrement dit» sirve para…", o: ["reformular", "oponer"], a: 0, b: "lexico", porque: "= c'est-à-dire." }
  ],
  practica: [
    { fase: "guiada", c: ["rf-nom"], k: "choice", ask: "Elige la nominalización.", q: "« Les loyers baissent. »", o: ["la baisse des loyers", "les loyers qui baissent", "baisser les loyers"], a: 0, pista: "El verbo se vuelve nombre.", why: "<b>la baisse des loyers</b>." },
    { fase: "guiada", c: ["rf-lex"], k: "choice", ask: "Elige la reformulación escrita.", q: "« Ce n'est pas suffisant. »", o: ["C'est insuffisant.", "C'est pas assez.", "Ce n'est pas assez suffisant."], a: 0, pista: "Antónimo en vez de negación.", why: "<b>C'est insuffisant.</b>" },
    { fase: "guiada", c: ["rf-marq"], k: "choice", ask: "¿Qué marcador anuncia una reformulación?", q: "Elige:", o: ["autrement dit", "pourtant", "en outre"], a: 0, pista: "= es decir.", why: "<b>autrement dit</b>." },
    { fase: "indep", c: ["rf-nom"], k: "fill", ask: "Escribe el nombre de «réformer».", q: "« Le gouvernement a réformé l'université. » → la ___ de l'université", acc: ["réforme"], why: "<b>la réforme</b>." },
    { fase: "indep", c: ["rf-nom"], k: "fill", ask: "Escribe el nombre de «s'isoler».", q: "« Les salariés s'isolent. » → l'___ croissant des salariés", acc: ["isolement"], why: "<b>l'isolement</b> (masculino)." },
    { fase: "indep", c: ["rf-lex"], k: "choice", ask: "Elige la palabra general.", q: "« les voitures, les bus et les trains »", o: ["les transports", "les véhicules rouges", "les choses qui roulent"], a: 0, why: "<b>les transports</b>." },
    { fase: "indep", c: ["rf-nom"], k: "choice", ask: "Elige la nominalización.", q: "« Le chômage a fortement augmenté. »", o: ["la forte hausse du chômage", "le chômage fort augmenté", "augmentation forte chômage"], a: 0, why: "Adverbio → adjetivo: <b>forte</b>." },
    { fase: "indep", c: ["rf-nom"], k: "match", ask: "Une cada verbo con su nombre.", q: "Verbo → nombre", pairs: [["augmenter", "l'augmentation"], ["baisser", "la baisse"], ["décider", "la décision"], ["réformer", "la réforme"]], why: "-ation, sin terminación, irregular." },
    { fase: "aplica", c: ["rf-lex", "rf-nom"], k: "choice", ask: "Elige la frase para tu resumen.", ctx: "El texto dice: «Les prix des logements ont beaucoup augmenté.»", q: "Reformulación:", o: ["La forte hausse des prix du logement…", "Les prix des logements ont beaucoup augmenté…"], a: 0, why: "No copies: nominaliza." },
    { fase: "aplica", c: ["rf-marq"], k: "choice", ask: "Elige el marcador.", ctx: "Das una equivalencia con cifras.", q: "« 300 étudiants, ___ un tiers des inscrits. »", o: ["soit", "pourtant"], a: 0, why: "<b>soit</b> = o sea (equivalencia)." },
    { fase: "aplica", c: ["rf-nom"], k: "fill", ask: "Nominaliza «développer».", ctx: "Título de una parte de tu síntesis.", q: "Le ___ du télétravail", acc: ["développement"], why: "<b>le développement</b>." },
    { fase: "dominio", c: ["rf-nom"], k: "choice", ask: "Elige la nominalización.", q: "« Le gouvernement a décidé de… »", o: ["la décision du gouvernement", "la décidation du gouvernement"], a: 0, why: "<b>la décision</b>." },
    { fase: "dominio", c: ["rf-lex"], k: "choice", ask: "Elige el antónimo.", q: "« Ce n'est pas possible. »", o: ["C'est impossible.", "C'est pas possible."], a: 0, why: "<b>impossible</b>." },
    { fase: "dominio", c: ["rf-marq"], k: "choice", ask: "Elige el marcador.", q: "« Il faut agir vite, ___ avant la fin de l'année. »", o: ["c'est-à-dire", "pourtant"], a: 0, why: "<b>c'est-à-dire</b>." },
    { fase: "dominio", c: ["rf-nom", "rf-lex"], k: "choice", ask: "¿Qué debes hacer en el résumé?", es: true, q: "Elige:", o: ["Reformular la idea sin copiar frases", "Copiar las frases clave"], a: 0, why: "Nunca copiar." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche"], previo: ["impossible"] }
};

/* Lección 15 · Las retomas anafóricas (retoma los pronombres y la reformulación) */
window.__ENSENA["reprise"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Les reprises anaphoriques",
  roles: {},
  objetivo: {
    que: "Vas a retomar lo que ya dijiste sin repetirlo: con pronombres, con un sinónimo o con un nombre que resume toda una idea.",
    corto: "Retomar sin repetir: así se enlaza un texto.",
    podras: ["Usar en, y, celui-ci y ce dernier.", "Retomar con un sinónimo o una palabra general.", "Resumir una frase con cette hausse, ce phénomène."],
    iconos: ["ic2/libros", "m2d/senalar", "m2d/escribiendo"],
    previos: ["Los pronombres complemento (lección 3) y la reformulación (lección 14)."],
    capacidad: "Ahora escribes párrafos bien enlazados, sin repeticiones."
  },
  requiere: ["p-cod", "rf-lex"],
  recupera: ["rf-nom"],
  conceptos: {
    "re-pron": { n: "Pronombres: en, y, celui-ci, ce dernier", b: "pronoms" },
    "re-nom": { n: "Retomar con otro nombre", b: "noms" },
    "re-resum": { n: "Un nombre que resume: cette hausse", b: "noms" }
  },
  video: {
    titulo: "Las retomas", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/libros", grande: "Cette hausse…", seg: [
        { es: "Hola. Un buen texto retoma lo que dijo sin repetirlo. Mira tres maneras." } ] },
      { v: "dos",
        a: { tag: "frase", fr: "Les loyers ont doublé en dix ans.", es: "Los arriendos se duplicaron en diez años." },
        b: { tag: "un nombre que resume", fr: "Cette hausse inquiète les familles.", es: "Esta subida preocupa a las familias." },
        seg: [
          { es: "La más elegante: un nombre que resume toda la frase anterior.", p: 1 },
          { fr: "Les loyers ont doublé en dix ans.", p: 1 },
          { fr: "Cette hausse inquiète les familles.", p: 2 } ] },
      { v: "dos",
        a: { tag: "sinónimo general", fr: "Le télétravail… ce mode d'organisation…", es: "El teletrabajo… esta forma de organización…" },
        b: { tag: "el último nombrado", fr: "Le ministre a rencontré le recteur ; ce dernier…", es: "…; este último…" },
        seg: [
          { es: "Otra manera: una palabra más general.", p: 1 },
          { fr: "Le télétravail se développe. Ce mode d'organisation séduit les cadres.", p: 1 },
          { es: "Y para no confundir, ce dernier: el último que nombraste.", p: 2 },
          { fr: "Le ministre a rencontré le recteur ; ce dernier a promis des moyens.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "« Des solutions ? Les experts ___ proposent plusieurs. »", o: ["en", "les"], a: 0,
        bien: "¡Sí! en retoma algo con de o una cantidad.", mal: "Es una cantidad (plusieurs): se usa en.",
        seg: [ { es: "Pausa. ¿Qué pronombre retoma una cantidad?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Cette hausse…", "ce mode d'organisation", "ce dernier", "en · y"], seg: [
        { es: "Un nombre que resume, una palabra general, ce dernier y los pronombres en e y.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Tres veces la misma palabra", img: "bg-biblioteca", yo: "laura",
    escena: "Laura repite «télétravail» en cada frase de su párrafo.",
    pj: __PJ,
    lineas: [
      ["tutrice", "Vous écrivez « télétravail » trois fois de suite.", "Escribe «teletrabajo» tres veces seguidas."],
      ["laura", "Je peux dire « cette pratique » la deuxième fois ?", "¿Puedo decir «esta práctica» la segunda vez?"],
      ["tutrice", "Oui. Et la troisième, « celle-ci ».", "Sí. Y la tercera, «esta»."],
      ["laura", "Et pour résumer la hausse des loyers : « ce phénomène ».", "Y para resumir la subida de los arriendos: «este fenómeno»."]
    ],
    fijate: "Fíjate: la evaluación del DALF puntúa la cohesión y la variedad del léxico."
  },
  ensena: [
    { id: "pronoms", tipo: "gram", titulo: "Los pronombres para retomar",
      idea: "en retoma algo con de o una cantidad; y, algo con à o un lugar; ce dernier, el último nombrado.",
      intro: "Además de le, la, les (lección 3).",
      tabla: [["Francés", "Español", "Uso"], [
        ["Les experts en proposent plusieurs.", "Los expertos proponen varias.", "en: de + algo, cantidad"],
        ["Les syndicats s'y opposent.", "Los sindicatos se oponen a ella.", "y: à + cosa, lugar"],
        ["celui-ci, celle-ci", "este, esta", "demostrativo: concuerda"],
        ["ce dernier, cette dernière", "este último, esta última", "el último nombrado"]
      ]],
      regla: ["Si il puede referirse a dos personas, usa ce dernier.", "celui-ci = el más cercano (el último nombrado); celui-là = el primero."] },
    { id: "noms", tipo: "gram", titulo: "Retomar con otro nombre",
      idea: "Retoma con un sinónimo, una palabra general o un nombre que resume toda la frase.",
      intro: "El nombre que resume (cette hausse, ce phénomène) es el más valorado en el escrito académico.",
      tabla: [["Francés", "Español", "Tipo"], [
        ["une réforme… cette réforme", "una reforma… esta reforma", "mismo nombre + ce/cette"],
        ["le télétravail… ce mode d'organisation", "el teletrabajo… esta forma de organización", "palabra general"],
        ["Les loyers ont doublé. Cette hausse…", "Los arriendos se duplicaron. Esta subida…", "resume la frase"],
        ["ce phénomène, cette évolution, une telle situation", "este fenómeno, esta evolución, tal situación", "resumen"]
      ]],
      regla: ["Concuerda el demostrativo: cette hausse, ce phénomène.", "Varía: no uses siempre la misma forma."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Errores típicos.",
      errores: [
        ["le télétravail… le télétravail… le télétravail", "le télétravail… cette pratique… celle-ci", "Varía la forma de retomar."],
        ["Ce hausse inquiète.", "Cette hausse inquiète.", "hausse es femenino."],
        ["Les experts les proposent plusieurs.", "Les experts en proposent plusieurs.", "Cantidad → en."],
        ["Le ministre a vu le recteur ; il a promis… (¿quién?)", "…; ce dernier a promis…", "ce dernier evita la ambigüedad."]
      ] }
  ],
  ejemplos: [
    { sit: "Retoma toda la frase: «Les loyers ont doublé en dix ans.»", resp: "Cette hausse inquiète les familles.", pasos: ["La frase habla de una subida.", "Un nombre que la resume: cette hausse."], porque: "Resumir es más elegante que repetir." },
    { sit: "Evita la ambigüedad: «Le ministre a rencontré le recteur ; il a promis des moyens» (el rector).", resp: "Le ministre a rencontré le recteur ; ce dernier a promis des moyens.", pasos: ["il podría ser el ministro o el rector.", "ce dernier = el último nombrado: el rector."], porque: "Sin ambigüedad." },
    { sit: "Retoma «des solutions»: «Les experts proposent plusieurs solutions.»", resp: "Les experts en proposent plusieurs.", pasos: ["Es una cantidad (plusieurs).", "→ en, antes del verbo."], porque: "en retoma una cantidad." }
  ],
  comprueba: [
    { q: "ce dernier se refiere a…", o: ["el último nombrado", "el primero nombrado"], a: 0, b: "pronoms", porque: "= este último." },
    { q: "Para resumir toda una frase usas…", o: ["un nombre como cette hausse", "repetir la frase"], a: 0, b: "noms", porque: "Nombre que resume." },
    { q: "Para una cantidad («plusieurs») usas…", o: ["en", "y"], a: 0, b: "pronoms", porque: "en." }
  ],
  practica: [
    { fase: "guiada", c: ["re-resum"], k: "choice", ask: "Retoma toda la frase.", q: "« Les loyers ont doublé en dix ans. ___ inquiète les familles. »", o: ["Cette hausse", "Ce hausse", "Cela hausse"], a: 0, pista: "Un nombre femenino que resume.", why: "<b>Cette hausse</b>." },
    { fase: "guiada", c: ["re-pron"], k: "choice", ask: "Elige.", q: "« Le ministre a rencontré le recteur ; ___ a promis de nouveaux moyens. » (= el rector)", o: ["ce dernier", "celui-là", "lui-même"], a: 0, pista: "El último nombrado.", why: "<b>ce dernier</b>." },
    { fase: "guiada", c: ["re-nom"], k: "choice", ask: "Retoma con una palabra general.", q: "« Le télétravail se développe. ___ séduit surtout les cadres. »", o: ["Ce mode d'organisation", "Cette télétravail", "Ce télétravaille"], a: 0, pista: "Una forma más general de decirlo.", why: "<b>Ce mode d'organisation</b>." },
    { fase: "indep", c: ["re-pron"], k: "choice", ask: "Elige el pronombre.", q: "« Des solutions ? Les experts ___ proposent plusieurs. »", o: ["en", "les", "y"], a: 0, why: "Cantidad → <b>en</b>." },
    { fase: "indep", c: ["re-nom"], k: "choice", ask: "Elige.", q: "« Une réforme a été annoncée. ___ réforme divise l'université. »", o: ["Cette", "Une", "La même une"], a: 0, why: "<b>Cette</b> réforme." },
    { fase: "indep", c: ["re-pron"], k: "choice", ask: "Evita la repetición.", q: "«projet» dos veces:", o: ["La mairie a présenté un projet ; celui-ci a été mal accueilli.", "La mairie a présenté un projet ; le projet a été mal accueilli."], a: 0, why: "<b>celui-ci</b>." },
    { fase: "indep", c: ["re-pron"], k: "choice", ask: "Elige.", q: "« Cette réforme ? Les syndicats s'___ opposent. »", o: ["y", "en"], a: 0, why: "<i>s'opposer à</i> → <b>y</b>." },
    { fase: "indep", c: ["re-resum"], k: "choice", ask: "Elige el nombre que resume.", q: "« Les étudiants lisent de moins en moins. ___ inquiète les enseignants. »", o: ["Ce phénomène", "Ce lire"], a: 0, why: "<b>Ce phénomène</b>." },
    { fase: "aplica", c: ["re-nom"], k: "choice", ask: "Mejora tu párrafo.", ctx: "Repites «le vélo» tres veces.", q: "Segunda mención:", o: ["ce moyen de transport", "le vélo encore"], a: 0, why: "Palabra general: <b>ce moyen de transport</b>." },
    { fase: "aplica", c: ["re-resum"], k: "fill", ask: "Completa (femenino: «esta evolución»).", ctx: "Retomas una frase sobre el cambio climático.", q: "___ évolution préoccupe les scientifiques.", acc: ["Cette", "cette"], why: "<b>Cette</b> évolution." },
    { fase: "aplica", c: ["re-pron"], k: "choice", ask: "Elige.", ctx: "Hablas de Paul y de Marc; quieres decir que Marc estaba cansado.", q: "« Paul et Marc sont venus ; ___ était fatigué. »", o: ["ce dernier", "il"], a: 0, why: "<b>ce dernier</b> = Marc, sin ambigüedad." },
    { fase: "dominio", c: ["re-resum"], k: "choice", ask: "Elige.", q: "« Le chômage a baissé de 2 %. ___ est une bonne nouvelle. »", o: ["Cette baisse", "Ce baisse"], a: 0, why: "<b>Cette baisse</b>." },
    { fase: "dominio", c: ["re-pron"], k: "choice", ask: "Elige.", q: "« Des données ? Nous ___ avons recueilli beaucoup. »", o: ["en", "les"], a: 0, why: "Cantidad → <b>en</b>." },
    { fase: "dominio", c: ["re-nom"], k: "choice", ask: "Elige la retoma.", q: "« L'université a créé un master. ___ formation attire beaucoup d'étudiants. »", o: ["Cette", "Ce"], a: 0, why: "<b>Cette</b> formation." },
    { fase: "dominio", c: ["re-nom", "re-pron"], k: "choice", ask: "¿Qué texto es más cohesionado?", q: "Elige:", o: ["Le télétravail se développe. Cette pratique séduit, mais celle-ci isole.", "Le télétravail se développe. Le télétravail séduit, mais le télétravail isole."], a: 0, why: "Retomas variadas." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche", "Paul", "Marc"], previo: ["baisse", "formation"] }
};

/* Lección 16 · El discurso referido (retoma la inversión del inciso y los verbos para citar) */
window.__ENSENA["rapport"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Le discours rapporté",
  roles: { suj: "sujeto", verbe: "verbo", sub: "lo dicho" },
  objetivo: {
    que: "Vas a contar lo que dijo otra persona: con la concordancia de tiempos, las preguntas indirectas y verbos para citar variados.",
    corto: "«Vendré» → Dijo que vendría.",
    podras: ["Cambiar los tiempos cuando el verbo está en pasado.", "Pasar preguntas a estilo indirecto: si, ce que.", "Variar los verbos: affirmer, souligner, rappeler."],
    iconos: ["ic2/microfono", "m2d/senalar", "ic2/libros"],
    previos: ["El inciso de la lección 8 (affirme la sociologue) y los tiempos del pasado."],
    capacidad: "Ahora refieres las ideas de un autor como en un compte rendu."
  },
  requiere: ["inv-incise"],
  recupera: ["inv-incise"],
  conceptos: {
    "dr-temps": { n: "La concordancia de tiempos", b: "temps" },
    "dr-q": { n: "Preguntas indirectas: si, ce que", b: "questions" },
    "dr-indic": { n: "Indicadores: le lendemain, la veille", b: "temps" }
  },
  video: {
    titulo: "El discurso referido", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/microfono", grande: "Il a dit que…", seg: [
        { es: "Hola. Hoy cuentas lo que dijo otra persona." } ] },
      { v: "dos",
        a: { tag: "estilo directo", fr: "« Je viendrai. »", es: "«Vendré.»" },
        b: { tag: "estilo indirecto", fr: "Il a dit qu'il viendrait.", es: "Dijo que vendría." },
        seg: [
          { es: "Si el verbo para citar está en pasado, los tiempos cambian, como en español. El futuro:", p: 1 },
          { fr: "Je viendrai.", p: 1 },
          { es: "se vuelve condicional:", p: 2 },
          { fr: "Il a dit qu'il viendrait.", p: 2 } ] },
      { v: "dos",
        a: { tag: "pregunta directa", fr: "« Est-ce que tu viens ? »", es: "«¿Vienes?»" },
        b: { tag: "pregunta indirecta", fr: "Il m'a demandé si je venais.", es: "Me preguntó si venía." },
        seg: [
          { es: "Las preguntas pierden el signo y la inversión:", p: 1 },
          { fr: "Il m'a demandé si je venais.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "« Je suis fatigué. » → Il a dit qu'il ___ fatigué.", o: ["était", "est"], a: 0,
        bien: "¡Sí! Presente → imperfecto.", mal: "Con el verbo en pasado, el presente pasa a imperfecto: était.",
        seg: [ { es: "Pausa. ¿Qué tiempo va?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["présent → imparfait", "futur → conditionnel", "si · ce que", "demain → le lendemain"], seg: [
        { es: "Retrocede los tiempos, usa si y ce que, y cambia mañana por el día siguiente.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Contar lo que dijo el ministro", img: "bg-biblioteca", yo: "laura",
    escena: "Laura resume una entrevista con un ministro.",
    pj: __PJ,
    lineas: [
      ["laura", "J'ai écrit : « Le ministre a dit qu'il viendra demain. »", "Escribí: «El ministro dijo que vendrá mañana»."],
      ["tutrice", "Le verbe introducteur est au passé : il faut « qu'il viendrait ».", "El verbo que cita está en pasado: hace falta «qu'il viendrait»."],
      ["laura", "Et « demain » ?", "¿Y «mañana»?"],
      ["tutrice", "Le lendemain. Et variez : le ministre a affirmé, a souligné…", "Le lendemain. Y varíe: el ministro afirmó, subrayó…"]
    ],
    fijate: "Fíjate: el español hace lo mismo («dijo que vendría»), pero en francés hay que cuidar también mañana → le lendemain."
  },
  ensena: [
    { id: "temps", tipo: "gram", titulo: "La concordancia de tiempos",
      idea: "Si el verbo que cita está en pasado, el tiempo retrocede: presente → imperfecto, futuro → condicional.",
      intro: "Si el verbo que cita está en presente (l'auteur affirme), no cambia nada.",
      tabla: [["Indirecto", "Directo · español", "Cambio"], [
        ["Il a dit qu'il était prêt.", "« Je suis prêt. » · Dijo que estaba listo.", "présent → imparfait"],
        ["Elle a dit qu'elle avait fini.", "« J'ai fini. » · Dijo que había terminado.", "passé composé → plus-que-parfait"],
        ["Il a dit qu'il viendrait.", "« Je viendrai. » · Dijo que vendría.", "futur → conditionnel"],
        ["Il nous a demandé de venir.", "« Venez ! » · Nos pidió que viniéramos.", "imperativo → de + infinitivo"],
        ["le lendemain", "demain · al día siguiente", "indicador"],
        ["la veille", "hier · la víspera", "indicador"]
      ]],
      regla: ["Verbos para citar, variados: affirmer, souligner, rappeler, reconnaître.", "imparfait, plus-que-parfait y conditionnel no cambian."] },
    { id: "questions", tipo: "gram", titulo: "Las preguntas indirectas",
      idea: "En la pregunta indirecta no hay inversión ni signo de pregunta: Il m'a demandé si je venais.",
      intro: "Cambia la palabra que introduce la pregunta.",
      tabla: [["Indirecto", "Directo · español", "Palabra"], [
        ["Il m'a demandé si je venais.", "« Est-ce que tu viens ? » · Me preguntó si venía.", "si (sí o no)"],
        ["Elle m'a demandé ce que je pensais.", "« Qu'est-ce que tu penses ? » · Me preguntó qué pensaba.", "ce que"],
        ["Il a demandé ce qui se passait.", "« Qu'est-ce qui se passe ? » · Preguntó qué pasaba.", "ce qui"],
        ["Il m'a demandé où je partais.", "« Où pars-tu ? » · Me preguntó adónde iba.", "où, quand, pourquoi"]
      ]],
      regla: ["Nunca «qu'est-ce que» en la pregunta indirecta: ce que.", "Sin inversión: …où je partais (no «où partais-je»)."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Errores típicos.",
      errores: [
        ["Il a dit qu'il viendra demain.", "Il a dit qu'il viendrait le lendemain.", "Futuro → condicional; demain → le lendemain."],
        ["Elle m'a demandé qu'est-ce que je pensais.", "Elle m'a demandé ce que je pensais.", "ce que."],
        ["Il m'a demandé est-ce que je venais.", "Il m'a demandé si je venais.", "si."],
        ["Le professeur nous a demandé que nous rendons nos copies.", "Le professeur nous a demandé de rendre nos copies.", "Imperativo → de + infinitivo."]
      ] }
  ],
  ejemplos: [
    { sit: "«J'ai terminé le rapport.» → Elle a affirmé…", resp: "Elle a affirmé qu'elle avait terminé le rapport.", pasos: ["affirmer en pasado.", "passé composé → plus-que-parfait."], porque: "Concordancia de tiempos." },
    { sit: "«Qu'est-ce que tu penses ?» → Elle m'a demandé…", resp: "Elle m'a demandé ce que je pensais.", pasos: ["qu'est-ce que → ce que.", "presente → imparfait."], porque: "Pregunta indirecta." },
    { sit: "«Rendez vos copies !» → Le professeur nous a demandé…", resp: "Le professeur nous a demandé de rendre nos copies.", pasos: ["Imperativo → de + infinitivo."], porque: "Orden indirecta." }
  ],
  comprueba: [
    { q: "Con el verbo en pasado, el futuro pasa a…", o: ["condicional", "presente"], a: 0, b: "temps", porque: "viendrai → viendrait." },
    { q: "«Est-ce que tu viens ?» → Il m'a demandé…", o: ["si je venais", "est-ce que je venais"], a: 0, b: "questions", porque: "si." },
    { q: "demain en indirecto pasado es…", o: ["le lendemain", "la veille"], a: 0, b: "temps", porque: "al día siguiente." }
  ],
  practica: [
    { fase: "guiada", c: ["dr-temps"], k: "choice", ask: "Elige el tiempo.", q: "« Je suis fatigué. » → Il a dit qu'il ___ fatigué.", o: ["était", "est", "sera"], a: 0, pista: "Presente → imperfecto.", why: "<b>était</b>." },
    { fase: "guiada", c: ["dr-q"], k: "choice", ask: "Elige.", q: "« Est-ce que tu viens ? » → Il m'a demandé ___ je venais.", o: ["si", "que", "ce que"], a: 0, pista: "Pregunta de sí o no.", why: "<b>si</b>." },
    { fase: "guiada", c: ["dr-indic"], k: "choice", ask: "Elige.", q: "« Je partirai demain. » → Il a dit qu'il partirait ___.", o: ["le lendemain", "demain", "hier"], a: 0, pista: "Al día siguiente.", why: "<b>le lendemain</b>." },
    { fase: "indep", c: ["dr-temps"], k: "choice", ask: "Elige el tiempo.", q: "« J'ai terminé le rapport. » → Elle a affirmé qu'elle ___ le rapport.", o: ["avait terminé", "a terminé", "terminerait"], a: 0, why: "<b>avait terminé</b>." },
    { fase: "indep", c: ["dr-temps"], k: "choice", ask: "Elige el tiempo.", q: "« Nous publierons les résultats. » → Ils ont annoncé qu'ils ___ les résultats.", o: ["publieraient", "publieront", "publiaient"], a: 0, why: "Futuro → <b>condicional</b>." },
    { fase: "indep", c: ["dr-q"], k: "choice", ask: "Elige.", q: "« Qu'est-ce que tu penses ? » → Elle m'a demandé ___ je pensais.", o: ["ce que", "qu'est-ce que", "que"], a: 0, why: "<b>ce que</b>." },
    { fase: "indep", c: ["dr-temps"], k: "choice", ask: "Elige.", q: "« Rendez vos copies ! » → Le professeur nous a demandé ___ nos copies.", o: ["de rendre", "que nous rendons", "rendre"], a: 0, why: "<b>de rendre</b>." },
    { fase: "indep", c: ["dr-temps"], k: "fill", ask: "Escribe comprendre en imperfecto.", q: "« Je comprends le problème. » → Elle a reconnu qu'elle ___ le problème.", acc: ["comprenait"], why: "<b>comprenait</b>." },
    { fase: "indep", c: ["dr-indic"], k: "choice", ask: "Elige.", q: "« Je suis arrivé hier. » → Il a dit qu'il était arrivé ___.", o: ["la veille", "le lendemain"], a: 0, why: "hier → <b>la veille</b>." },
    { fase: "aplica", c: ["dr-temps"], k: "choice", ask: "Corrige tu resumen.", ctx: "«Le ministre a dit qu'il viendra demain.»", q: "Versión correcta:", o: ["Le ministre a dit qu'il viendrait le lendemain.", "Le ministre a dit qu'il viendra le lendemain."], a: 0, why: "Condicional + le lendemain." },
    { fase: "aplica", c: ["dr-q"], k: "choice", ask: "Refiere la pregunta del jurado.", ctx: "El jurado te preguntó: «Pourquoi avez-vous choisi ce sujet ?»", q: "Il m'a demandé…", o: ["pourquoi j'avais choisi ce sujet.", "pourquoi avais-je choisi ce sujet ?"], a: 0, why: "Sin inversión ni signo." },
    { fase: "aplica", c: ["dr-temps"], k: "choice", ask: "Elige el verbo para citar.", ctx: "La autora insiste en una idea importante.", q: "« L'auteure ___ que la réforme est urgente. »", o: ["souligne", "dit dit"], a: 0, why: "<b>souligne</b>: verbo variado (y en presente no cambia el tiempo)." },
    { fase: "dominio", c: ["dr-temps"], k: "choice", ask: "Elige.", q: "« Je viendrai. » → Elle a promis qu'elle ___.", o: ["viendrait", "viendra"], a: 0, why: "<b>viendrait</b>." },
    { fase: "dominio", c: ["dr-q"], k: "choice", ask: "Elige.", q: "« Qu'est-ce qui se passe ? » → Il a demandé ___ se passait.", o: ["ce qui", "ce que", "qu'est-ce qui"], a: 0, why: "<b>ce qui</b>." },
    { fase: "dominio", c: ["dr-indic"], k: "choice", ask: "Elige.", q: "« Je pars demain. » → Il a dit qu'il partait ___.", o: ["le lendemain", "demain"], a: 0, why: "<b>le lendemain</b>." },
    { fase: "dominio", c: ["dr-q", "dr-temps"], k: "choice", ask: "Elige.", q: "« Où vas-tu ? » → Elle m'a demandé…", o: ["où j'allais.", "où allais-je."], a: 0, why: "Sin inversión." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche"], previo: ["viendrait", "comprenait", "publieraient", "allais"] }
};

/* Lección 17 · Causa y consecuencia (retoma car y la frase compleja) */
window.__ENSENA["cause"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Cause et conséquence",
  roles: { conn: "conector", prin: "hecho", sub: "causa / consecuencia" },
  objetivo: {
    que: "Vas a explicar por qué pasa algo y qué efecto tiene, con conectores variados y precisos.",
    corto: "¿Por qué? ¿Y entonces? Conectores con matiz.",
    podras: ["Elegir grâce à, à cause de, en raison de, faute de.", "Usar puisque y sous prétexte que.", "Expresar la consecuencia: si bien que, d'où, tant… que."],
    iconos: ["ic2/bombilla", "m2d/senalar", "ic2/libros"],
    previos: ["car y la frase compleja (lección 7)."],
    capacidad: "Ahora explicas causas y consecuencias con precisión de C1."
  },
  requiere: ["ph-car"],
  recupera: ["ph-car"],
  conceptos: {
    "ca-nom": { n: "Causa + nombre: grâce à, à cause de, en raison de, faute de", b: "cause" },
    "ca-verbe": { n: "Causa + verbo: puisque, sous prétexte que", b: "cause" },
    "ca-csq": { n: "Consecuencia: si bien que, d'où, tant… que", b: "consequence" }
  },
  video: {
    titulo: "Causa y consecuencia", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/bombilla", grande: "grâce à · à cause de", seg: [
        { es: "Hola. Hoy explicamos causas y consecuencias con matices." } ] },
      { v: "dos",
        a: { tag: "causa positiva", fr: "Il a réussi grâce à son travail.", es: "Aprobó gracias a su trabajo." },
        b: { tag: "causa negativa", fr: "Le vol a été annulé à cause de la tempête.", es: "Se canceló por la tormenta." },
        seg: [
          { es: "Si el resultado es bueno, la causa va con grâce à:", p: 1 },
          { fr: "Il a réussi grâce à son travail.", p: 1 },
          { es: "si es malo, con à cause de:", p: 2 },
          { fr: "Le vol a été annulé à cause de la tempête.", p: 2 } ] },
      { v: "dos",
        a: { tag: "neutra y formal", fr: "en raison de la grève", es: "debido a la huelga" },
        b: { tag: "por falta de", fr: "faute de moyens", es: "por falta de medios" },
        seg: [
          { es: "En un texto formal, la causa neutra:", p: 1 },
          { fr: "en raison de la grève", p: 1 },
          { es: "y para una falta:", p: 2 },
          { fr: "faute de moyens", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "« Les loyers ont augmenté, ___ le départ des familles. »", o: ["d'où", "si bien que"], a: 0,
        bien: "¡Sí! d'où va seguido de un nombre.", mal: "Detrás viene un nombre (le départ): d'où.",
        seg: [ { es: "Pausa. Después viene un nombre. ¿Qué conector va?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["grâce à (+)", "à cause de (−)", "en raison de", "faute de", "d'où le départ", "si bien que"], seg: [
        { es: "Elige la causa según el matiz, y la consecuencia según lo que venga detrás.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Una causa mal elegida", img: "bg-biblioteca", yo: "laura",
    escena: "Laura escribe sobre una huelga que canceló las clases.",
    pj: __PJ,
    lineas: [
      ["laura", "J'ai écrit : « Les cours sont annulés grâce à la grève. »", "Escribí: «Las clases se cancelan gracias a la huelga»."],
      ["tutrice", "Grâce à, c'est pour un résultat positif. Ici, écrivez « en raison de la grève ».", "Grâce à es para un resultado positivo. Aquí, escriba «en raison de la grève»."],
      ["laura", "Et pour la conséquence : « si bien que les examens sont reportés » ?", "¿Y para la consecuencia: «de modo que los exámenes se aplazan»?"],
      ["tutrice", "Parfait.", "Perfecto."]
    ],
    fijate: "Fíjate: el conector no solo une; también dice si la causa es buena, mala o neutra."
  },
  ensena: [
    { id: "cause", tipo: "gram", titulo: "Expresar la causa",
      idea: "Mira si sigue un nombre o un verbo, y qué matiz quieres: positivo, negativo, neutro o dudoso.",
      intro: "Todas van con indicativo.",
      tabla: [["Francés", "Español", "Matiz"], [
        ["grâce à son travail", "gracias a su trabajo", "+ nombre, positivo"],
        ["à cause de la tempête", "por culpa de la tormenta", "+ nombre, negativo"],
        ["en raison de la grève", "debido a la huelga", "+ nombre, neutro y formal"],
        ["faute de moyens", "por falta de medios", "+ nombre sin artículo: falta"],
        ["puisque vous connaissez le sujet", "ya que conoce el tema", "+ verbo: causa conocida"],
        ["sous prétexte qu'il était malade", "con el pretexto de que estaba enfermo", "+ verbo: causa dudosa"]
      ]],
      regla: ["grâce à solo para lo positivo.", "comme + causa va al principio; car, nunca al principio."] },
    { id: "consequence", tipo: "gram", titulo: "Expresar la consecuencia",
      idea: "donc, par conséquent, c'est pourquoi y si bien que van con una frase; d'où va con un nombre.",
      intro: "Y tant… que expresa una consecuencia por intensidad.",
      tabla: [["Francés", "Español", "Uso"], [
        ["si bien que de nombreux étudiants se sont sentis isolés", "de modo que muchos estudiantes se sintieron aislados", "+ frase"],
        ["d'où le départ des familles", "de ahí la partida de las familias", "+ nombre"],
        ["Il a tant travaillé qu'il est tombé malade.", "Trabajó tanto que se enfermó.", "intensidad: tant… que"],
        ["par conséquent, c'est pourquoi", "por consiguiente, por eso", "+ frase"]
      ]],
      regla: ["No repitas donc tres veces: varía.", "de sorte que + subjuntivo es finalidad, no consecuencia."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Errores típicos.",
      errores: [
        ["grâce à la grève (resultado negativo)", "en raison de la grève", "grâce à solo para lo positivo."],
        ["faute des moyens", "faute de moyens", "faute de + nombre sin artículo."],
        ["d'où les familles partent", "d'où le départ des familles", "d'où + nombre."],
        ["Il a travaillé tant qu'il… (sin intensidad)", "Il a tant travaillé qu'il est tombé malade.", "tant va antes del participio."]
      ] }
  ],
  ejemplos: [
    { sit: "«El vuelo se canceló debido a la tormenta» (formal).", resp: "Le vol a été annulé en raison de la tempête.", pasos: ["Sigue un nombre.", "Matiz neutro y formal: en raison de."], porque: "grâce à sería absurdo aquí." },
    { sit: "«Por falta de medios, se abandonó el proyecto».", resp: "Faute de moyens, le projet a été abandonné.", pasos: ["Es una falta.", "faute de + nombre sin artículo."], porque: "faute de = por falta de." },
    { sit: "«Los arriendos subieron; de ahí la partida de las familias».", resp: "Les loyers ont augmenté, d'où le départ des familles.", pasos: ["Consecuencia.", "Sigue un nombre: d'où."], porque: "d'où + nombre." }
  ],
  comprueba: [
    { q: "Resultado positivo:", o: ["grâce à", "à cause de"], a: 0, b: "cause", porque: "grâce à = positivo." },
    { q: "«Por falta de tiempo» →", o: ["faute de temps", "faute du temps"], a: 0, b: "cause", porque: "Sin artículo." },
    { q: "d'où va seguido de…", o: ["un nombre", "una frase"], a: 0, b: "consequence", porque: "d'où + nombre." }
  ],
  practica: [
    { fase: "guiada", c: ["ca-nom"], k: "choice", ask: "Elige la causa.", q: "« Il a réussi ___ son travail régulier. »", o: ["grâce à", "à cause de", "faute de"], a: 0, pista: "¿Resultado bueno o malo?", why: "Positivo: <b>grâce à</b>." },
    { fase: "guiada", c: ["ca-verbe"], k: "choice", ask: "Elige la causa.", q: "« ___ vous connaissez le sujet, je serai bref. »", o: ["Puisque", "Sous prétexte que", "Faute de"], a: 0, pista: "Causa ya conocida.", why: "<b>Puisque</b>." },
    { fase: "guiada", c: ["ca-csq"], k: "choice", ask: "Elige la consecuencia.", q: "« Les loyers ont augmenté, ___ le départ des familles. »", o: ["d'où", "si bien que", "parce que"], a: 0, pista: "Sigue un nombre.", why: "<b>d'où</b> + nombre." },
    { fase: "indep", c: ["ca-nom"], k: "choice", ask: "Elige.", q: "« Le vol a été annulé ___ la tempête. »", o: ["en raison de", "grâce à", "faute de"], a: 0, why: "Neutro: <b>en raison de</b>." },
    { fase: "indep", c: ["ca-nom"], k: "choice", ask: "Elige.", q: "« ___ moyens, le projet a été abandonné. »", o: ["Faute de", "Grâce à", "Parce que"], a: 0, why: "Falta: <b>Faute de</b>." },
    { fase: "indep", c: ["ca-verbe"], k: "choice", ask: "Elige.", q: "« Il n'est pas venu ___ il était malade, mais personne ne l'a cru. »", o: ["sous prétexte qu'", "grâce à ce qu'", "d'où"], a: 0, why: "Causa dudosa: <b>sous prétexte que</b>." },
    { fase: "indep", c: ["ca-csq"], k: "choice", ask: "Elige.", q: "« Il a tant travaillé ___ il est tombé malade. »", o: ["qu'", "donc", "si bien"], a: 0, why: "<b>tant… que</b>." },
    { fase: "indep", c: ["ca-nom", "ca-csq"], k: "sort", ask: "¿Causa o consecuencia?", q: "Clasifica:", cats: ["causa", "consecuencia"], items: [["grâce à", 0], ["puisque", 0], ["en raison de", 0], ["faute de", 0], ["par conséquent", 1], ["si bien que", 1], ["d'où", 1], ["c'est pourquoi", 1]], why: "Causa: por qué. Consecuencia: el resultado." },
    { fase: "aplica", c: ["ca-csq"], k: "order", ask: "Ordena la consecuencia.", ctx: "Explicas los efectos de las clases en línea.", tokens: ["Les cours étaient en ligne,", "si bien que", "de nombreux étudiants", "se sont sentis", "isolés."], why: "<b>si bien que</b> + frase." },
    { fase: "aplica", c: ["ca-nom"], k: "choice", ask: "Corrige tu texto.", ctx: "«Les cours sont annulés grâce à la grève.»", q: "Versión correcta:", o: ["Les cours sont annulés en raison de la grève.", "Les cours sont annulés grâce à la grève."], a: 0, why: "Negativo o neutro, nunca <i>grâce à</i>." },
    { fase: "aplica", c: ["ca-verbe"], k: "choice", ask: "Elige el conector para empezar.", ctx: "La causa va al principio.", q: "« ___ les cours étaient en ligne, les étudiants se sont isolés. »", o: ["Comme", "Car"], a: 0, why: "Al principio: <b>Comme</b>." },
    { fase: "dominio", c: ["ca-nom"], k: "choice", ask: "Elige.", q: "« Le match a été reporté ___ la pluie. »", o: ["à cause de", "grâce à"], a: 0, why: "Negativo: <b>à cause de</b>." },
    { fase: "dominio", c: ["ca-verbe"], k: "choice", ask: "Elige.", q: "« ___ tu es là, aide-moi. » (ya que)", o: ["Puisque", "Faute de"], a: 0, why: "<b>Puisque</b>." },
    { fase: "dominio", c: ["ca-csq"], k: "choice", ask: "Elige.", q: "« La demande a baissé, ___ la fermeture de l'usine. »", o: ["d'où", "si bien que"], a: 0, why: "Nombre → <b>d'où</b>." },
    { fase: "dominio", c: ["ca-csq", "ca-nom"], k: "choice", ask: "Elige.", q: "« Il pleuvait, ___ le match a été reporté. »", o: ["si bien que", "d'où"], a: 0, why: "Frase → <b>si bien que</b>." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche"] }
};

/* Lección 18 · Oposición y concesión (retoma causa/consecuencia: otra relación lógica) */
window.__ENSENA["conces"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Opposition et concession",
  roles: { conn: "conector", sub: "lo que no impide", prin: "el hecho" },
  objetivo: {
    que: "Vas a contrastar dos hechos y a reconocer una idea que no impide otra, eligiendo bien el conector y el modo del verbo.",
    corto: "«Aunque…»: cada conector pide su construcción.",
    podras: ["Usar bien que (+ subjuntivo) y même si (+ indicativo).", "Usar malgré + nombre y avoir beau + infinitivo.", "Contrastar con alors que, tandis que, en revanche."],
    iconos: ["m2d/pensativo", "ic2/libros", "m2d/senalar"],
    previos: ["Causa y consecuencia (lección anterior) y el subjuntivo presente (B2)."],
    capacidad: "Ahora matizas tus argumentos con concesiones correctas."
  },
  requiere: ["ca-nom"],
  recupera: ["ca-nom"],
  conceptos: {
    "co-mode": { n: "bien que + subjuntivo / même si + indicativo", b: "concession" },
    "co-nom": { n: "malgré + nombre, avoir beau + infinitivo", b: "concession" },
    "co-opp": { n: "Oposición: alors que, tandis que, en revanche", b: "opposition" }
  },
  video: {
    titulo: "Oposición y concesión", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/pensativo", grande: "bien que…", seg: [
        { es: "Hola. Hoy decimos «aunque» en francés, que tiene varias formas." } ] },
      { v: "dos",
        a: { tag: "+ subjuntivo", fr: "Bien qu'il pleuve, le match aura lieu.", es: "Aunque llueva, habrá partido." },
        b: { tag: "+ indicativo", fr: "Même s'il pleut, le match aura lieu.", es: "Aunque llueve, habrá partido." },
        seg: [
          { es: "Con bien que, el verbo va en subjuntivo:", p: 1 },
          { fr: "Bien qu'il pleuve, le match aura lieu.", p: 1 },
          { es: "con même si, en indicativo:", p: 2 },
          { fr: "Même s'il pleut, le match aura lieu.", p: 2 } ] },
      { v: "dos",
        a: { tag: "+ nombre", fr: "Malgré la pluie, le match a eu lieu.", es: "A pesar de la lluvia, hubo partido." },
        b: { tag: "+ infinitivo", fr: "Il a beau étudier, il oublie les accords.", es: "Por más que estudia, olvida las concordancias." },
        seg: [
          { es: "Con un nombre, malgré:", p: 1 },
          { fr: "Malgré la pluie, le match a eu lieu.", p: 1 },
          { es: "y una forma muy francesa, con un infinitivo:", p: 2 },
          { fr: "Il a beau étudier, il oublie les accords.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "« ___ la pluie, le match a eu lieu. »", o: ["Malgré", "Bien que"], a: 0,
        bien: "¡Sí! Detrás viene un nombre: malgré.", mal: "bien que va con un verbo. Con un nombre: malgré.",
        seg: [ { es: "Pausa. Detrás viene un nombre." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["bien que + subjonctif", "même si + indicatif", "malgré + nom", "avoir beau", "tandis que"], seg: [
        { es: "Mira lo que viene detrás: subjuntivo, indicativo, nombre o infinitivo.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "«Malgré que» no existe", img: "bg-biblioteca", yo: "laura",
    escena: "Laura matiza un argumento en su ensayo.",
    pj: __PJ,
    lineas: [
      ["laura", "J'ai écrit : « Malgré qu'il soit coûteux, le projet est utile. »", "Escribí: «A pesar de que es costoso, el proyecto es útil»."],
      ["tutrice", "À l'écrit soutenu, on évite « malgré que ». Écrivez « Bien qu'il soit coûteux ».", "En el escrito formal se evita «malgré que». Escriba «Bien qu'il soit coûteux»."],
      ["laura", "Et « malgré » seulement avec un nom : malgré son coût.", "Y «malgré» solo con un nombre: malgré son coût."],
      ["tutrice", "Exactement.", "Exacto."]
    ],
    fijate: "Fíjate: malgré va con un nombre; con un verbo, bien que."
  },
  ensena: [
    { id: "concession", tipo: "gram", titulo: "La concesión: «aunque»",
      idea: "Mira lo que viene detrás: bien que + subjuntivo, même si + indicativo, malgré + nombre, avoir beau + infinitivo.",
      intro: "La concesión reconoce un hecho que no impide el otro.",
      tabla: [["Francés", "Español", "Construcción"], [
        ["Bien qu'il pleuve, le match aura lieu.", "Aunque llueva, habrá partido.", "bien que, quoique + subjonctif"],
        ["Même s'il pleut, le match aura lieu.", "Aunque llueve, habrá partido.", "même si + indicatif"],
        ["Malgré la pluie, le match a eu lieu.", "A pesar de la lluvia, hubo partido.", "malgré, en dépit de + nom"],
        ["Il a beau étudier, il oublie les accords.", "Por más que estudia, olvida las concordancias.", "avoir beau + infinitif"],
        ["Quand bien même vous me le demanderiez, je ne changerais pas d'avis.", "Aunque me lo pidiera, no cambiaría de opinión.", "quand bien même + conditionnel"]
      ]],
      regla: ["même si nunca va con futuro ni condicional.", "Nunca «malgré que» en el escrito formal: bien que.", "pourtant, cependant, toutefois, néanmoins unen dos frases: Le projet est coûteux ; il reste néanmoins nécessaire."] },
    { id: "opposition", tipo: "gram", titulo: "La oposición: contrastar",
      idea: "Para comparar dos hechos distintos: alors que o tandis que + indicativo, o en revanche.",
      intro: "Aquí ningún hecho impide el otro: solo se contrastan.",
      tabla: [["Francés", "Español", "Construcción"], [
        ["Les uns lisent sur écran, tandis que les autres préfèrent le papier.", "Unos leen en pantalla, mientras que otros prefieren el papel.", "tandis que + indicatif"],
        ["Paris investit dans le vélo, alors que Bogotá mise sur le bus.", "París invierte en la bici, mientras que Bogotá apuesta por el bus.", "alors que + indicatif"],
        ["En revanche, les loyers baissent.", "En cambio, los arriendos bajan.", "en revanche: une dos frases"]
      ]],
      regla: ["Oposición: dos hechos que se comparan.", "Concesión: un hecho que no impide el otro."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Errores típicos.",
      errores: [
        ["Malgré qu'il soit tard, nous continuons.", "Bien qu'il soit tard, nous continuons.", "bien que en el escrito formal."],
        ["Bien qu'il pleut…", "Bien qu'il pleuve…", "bien que + subjuntivo."],
        ["Même s'il pleuvra…", "Même s'il pleut…", "même si nunca con futuro."],
        ["Il est beau étudier…", "Il a beau étudier…", "avoir beau, con avoir."]
      ] }
  ],
  ejemplos: [
    { sit: "«Aunque esté cansado, sigue» (formal).", resp: "Bien qu'il soit fatigué, il continue.", pasos: ["bien que lleva subjuntivo.", "être → soit."], porque: "Concesión + subjuntivo." },
    { sit: "«A pesar de la crisis, la empresa crece».", resp: "Malgré la crise, l'entreprise grandit.", pasos: ["Detrás viene un nombre: la crise.", "→ malgré."], porque: "malgré + nombre." },
    { sit: "«Por más que trabaje, no termina».", resp: "Il a beau travailler, il ne finit pas.", pasos: ["avoir beau + infinitivo.", "Luego la frase principal, sin conector."], porque: "avoir beau = por más que." }
  ],
  comprueba: [
    { q: "bien que va con…", o: ["subjuntivo", "indicativo"], a: 0, b: "concession", porque: "bien qu'il pleuve." },
    { q: "Con un nombre («la pluie») usas…", o: ["malgré", "bien que"], a: 0, b: "concession", porque: "malgré + nombre." },
    { q: "Para comparar dos hechos distintos:", o: ["tandis que", "bien que"], a: 0, b: "opposition", porque: "Oposición." }
  ],
  practica: [
    { fase: "guiada", c: ["co-mode"], k: "choice", ask: "Elige el conector.", q: "« ___ il pleuve, le match aura lieu. »", o: ["Bien qu'", "Même s'", "Malgré qu'"], a: 0, pista: "pleuve es subjuntivo.", why: "<b>Bien qu'</b> + subjuntivo." },
    { fase: "guiada", c: ["co-nom"], k: "choice", ask: "Elige.", q: "« ___ la pluie, le match a eu lieu. »", o: ["Malgré", "Bien que", "Même si"], a: 0, pista: "Detrás viene un nombre.", why: "<b>Malgré</b> + nombre." },
    { fase: "guiada", c: ["co-opp"], k: "choice", ask: "Elige.", q: "« Les uns lisent sur écran, ___ les autres préfèrent le papier. »", o: ["tandis que", "bien que", "malgré"], a: 0, pista: "Comparas dos hechos.", why: "<b>tandis que</b>." },
    { fase: "indep", c: ["co-mode"], k: "choice", ask: "Elige.", q: "« ___ il pleut, le match aura lieu. »", o: ["Même s'", "Bien qu'", "Quoiqu'"], a: 0, why: "<i>pleut</i> es indicativo: <b>Même s'</b>." },
    { fase: "indep", c: ["co-nom"], k: "choice", ask: "Elige.", q: "« Il ___ beau étudier, il oublie les accords. »", o: ["a", "est", "fait"], a: 0, why: "<b>avoir beau</b>." },
    { fase: "indep", c: ["co-mode"], k: "choice", ask: "¿Cuál es formal?", q: "Escrito formal:", o: ["Bien qu'il soit tard, nous continuons.", "Malgré qu'il soit tard, nous continuons."], a: 0, why: "<b>Bien que</b>." },
    { fase: "indep", c: ["co-mode"], k: "choice", ask: "Elige.", q: "« ___ vous me le demanderiez, je ne changerais pas d'avis. »", o: ["Quand bien même", "Bien que", "Malgré"], a: 0, why: "Con condicional: <b>Quand bien même</b>." },
    { fase: "indep", c: ["co-mode", "co-nom", "co-opp"], k: "sort", ask: "¿Qué va detrás?", q: "Clasifica:", cats: ["+ subjonctif", "+ indicatif", "+ nom"], items: [["bien que", 0], ["quoique", 0], ["même si", 1], ["alors que", 1], ["malgré", 2], ["en dépit de", 2]], why: "bien que/quoique: subjuntivo; même si/alors que: indicativo; malgré/en dépit de: nombre." },
    { fase: "aplica", c: ["co-nom"], k: "choice", ask: "Corrige tu ensayo.", ctx: "«Malgré qu'il soit coûteux, le projet est utile.»", q: "Versión con nombre:", o: ["Malgré son coût, le projet est utile.", "Malgré qu'il coûte, le projet est utile."], a: 0, why: "<b>malgré + nombre</b>." },
    { fase: "aplica", c: ["co-opp"], k: "choice", ask: "Compara dos ciudades.", ctx: "Párrafo comparativo.", q: "« Paris investit dans le vélo, ___ Bogotá mise sur le bus. »", o: ["alors que", "bien que"], a: 0, why: "Oposición: <b>alors que</b>." },
    { fase: "aplica", c: ["co-mode"], k: "fill", ask: "Escribe être en subjuntivo.", ctx: "Matizas un argumento.", q: "Bien que cette mesure ___ coûteuse, elle reste nécessaire.", acc: ["soit"], why: "<b>soit</b>." },
    { fase: "dominio", c: ["co-mode"], k: "choice", ask: "Elige.", q: "« Bien qu'il ___ malade, il est venu. »", o: ["soit", "est"], a: 0, why: "Subjuntivo: <b>soit</b>." },
    { fase: "dominio", c: ["co-nom"], k: "choice", ask: "Elige.", q: "« ___ les difficultés, ils ont terminé le projet. »", o: ["Malgré", "Même si"], a: 0, why: "Nombre: <b>Malgré</b>." },
    { fase: "dominio", c: ["co-opp"], k: "choice", ask: "Elige.", q: "« Les loyers augmentent en ville ; ___, ils baissent à la campagne. »", o: ["en revanche", "bien que"], a: 0, why: "<b>en revanche</b>." },
    { fase: "dominio", c: ["co-nom", "co-mode"], k: "choice", ask: "Elige.", q: "« J'ai beau ___, je ne comprends pas. »", o: ["relire", "relis"], a: 0, why: "avoir beau + <b>infinitivo</b>." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche", "Paris", "Bogotá"], previo: ["relire"] }
};

/* Lección 19 · Finalidad, condición e hipótesis */
window.__ENSENA["but"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "But, condition, hypothèse",
  roles: { conn: "conector", prin: "acción", sub: "finalidad / condición" },
  objetivo: {
    que: "Vas a expresar para qué se hace algo y en qué condiciones, para proponer soluciones e imaginar escenarios en un ensayo.",
    corto: "Para que… a condición de que… si…",
    podras: ["Usar pour que (+ subjuntivo) y pour (+ infinitivo).", "Usar à condition que, à moins que, au cas où.", "Construir la hipótesis con si."],
    iconos: ["ic2/bombilla", "m2d/senalar", "ic2/libros"],
    previos: ["Oposición y concesión (lección anterior) y el subjuntivo (B2)."],
    capacidad: "Ahora propones soluciones y escenarios con los modos correctos."
  },
  requiere: ["co-mode"],
  recupera: ["co-mode"],
  conceptos: {
    "bu-but": { n: "Finalidad: pour que / pour", b: "but" },
    "bu-cond": { n: "Condición: à condition que, à moins que, au cas où", b: "cond" },
    "bu-si": { n: "Hipótesis con si", b: "cond" }
  },
  video: {
    titulo: "Finalidad y condición", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/bombilla", grande: "pour que…", seg: [
        { es: "Hola. Hoy decimos para qué y con qué condición." } ] },
      { v: "dos",
        a: { tag: "dos sujetos: subjuntivo", fr: "Le professeur répète pour que tout le monde comprenne.", es: "El profesor repite para que todos entiendan." },
        b: { tag: "mismo sujeto: infinitivo", fr: "Je relis mon texte pour corriger mes accords.", es: "Releo mi texto para corregir las concordancias." },
        seg: [
          { es: "Si hay dos personas distintas, pour que y subjuntivo:", p: 1 },
          { fr: "Le professeur répète pour que tout le monde comprenne.", p: 1 },
          { es: "si es la misma persona, pour y el infinitivo:", p: 2 },
          { fr: "Je relis mon texte pour corriger mes accords.", p: 2 } ] },
      { v: "dos",
        a: { tag: "condición", fr: "Tu peux sortir, à condition que tu reviennes avant minuit.", es: "a condición de que vuelvas antes de medianoche" },
        b: { tag: "hipótesis", fr: "Si l'on supprimait les voitures, la ville respirerait.", es: "Si se suprimieran los carros, la ciudad respiraría." },
        seg: [
          { es: "La condición también pide subjuntivo:", p: 1 },
          { fr: "à condition que tu reviennes", p: 1 },
          { es: "y la hipótesis con si va con imperfecto y condicional, como en español:", p: 2 },
          { fr: "Si l'on supprimait les voitures, la ville respirerait.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "« Je relis mon texte ___ corriger mes accords. »", o: ["pour", "pour que"], a: 0,
        bien: "¡Sí! Mismo sujeto: pour + infinitivo.", mal: "Es la misma persona: pour + infinitivo.",
        seg: [ { es: "Pausa. ¿Es la misma persona?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["pour que + subjonctif", "pour + infinitif", "à condition que", "au cas où + conditionnel", "si + imparfait"], seg: [
        { es: "Subjuntivo para la finalidad y la condición; si con imperfecto para imaginar.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Proponer una solución", img: "bg-biblioteca", yo: "laura",
    escena: "Laura escribe la parte de soluciones de su ensayo.",
    pj: __PJ,
    lineas: [
      ["laura", "J'ai écrit : « Il faut agir pour que chacun est protégé. »", "Escribí: «Hay que actuar para que cada uno está protegido»."],
      ["tutrice", "Après pour que, le subjonctif : pour que chacun soit protégé.", "Después de pour que, subjuntivo: pour que chacun soit protégé."],
      ["laura", "Et « au cas où il pleuvrait » ?", "¿Y «en caso de que lloviera»?"],
      ["tutrice", "Parfait : au cas où va avec le conditionnel.", "Perfecto: au cas où va con condicional."]
    ],
    fijate: "Fíjate: el español también usa subjuntivo con «para que»; el francés igual."
  },
  ensena: [
    { id: "but", tipo: "gram", titulo: "La finalidad: ¿para qué?",
      idea: "Dos personas distintas → pour que + subjuntivo. La misma persona → pour + infinitivo.",
      intro: "Igual que en español: «para que entiendan» / «para corregir».",
      tabla: [["Francés", "Español", "Construcción"], [
        ["pour que tout le monde la comprenne", "para que todos la entiendan", "pour que, afin que + subjonctif"],
        ["pour corriger mes accords", "para corregir mis concordancias", "pour, afin de + infinitif"],
        ["de peur que la route ne soit bloquée", "por miedo a que la carretera esté bloqueada", "de peur que + subjonctif (ne sin valor negativo)"]
      ]],
      regla: ["Nunca «pour que je réussisse» con el mismo sujeto: je travaille pour réussir.", "Il faut agir afin que les générations futures ne soient pas pénalisées."] },
    { id: "cond", tipo: "gram", titulo: "Condición e hipótesis",
      idea: "à condition que y à moins que van con subjuntivo; au cas où con condicional; si con indicativo.",
      intro: "Para imaginar: si + imperfecto → condicional.",
      tabla: [["Francés", "Español", "Construcción"], [
        ["à condition que tu reviennes", "a condición de que vuelvas", "+ subjonctif"],
        ["à moins qu'il ne pleuve", "a menos que llueva", "+ subjonctif (= sauf si)"],
        ["Au cas où tu serais en retard, préviens-moi.", "En caso de que llegues tarde, avísame.", "au cas où + conditionnel"],
        ["en cas de panne", "en caso de avería", "en cas de + nom"],
        ["Si l'on supprimait les voitures, la ville respirerait.", "Si se suprimieran los carros, la ciudad respiraría.", "si + imparfait → conditionnel"]
      ]],
      regla: ["Con si, nunca condicional: si j'avais (no «si j'aurais»).", "en cas de + nombre sin artículo."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Errores típicos.",
      errores: [
        ["pour que chacun est protégé", "pour que chacun soit protégé", "pour que + subjuntivo."],
        ["Je travaille pour que je réussisse.", "Je travaille pour réussir.", "Mismo sujeto: infinitivo."],
        ["Si j'aurais le temps…", "Si j'avais le temps…", "Con si, imperfecto."],
        ["Au cas où tu sois en retard…", "Au cas où tu serais en retard…", "au cas où + condicional."]
      ] }
  ],
  ejemplos: [
    { sit: "«El profesor repite la consigna para que todos la entiendan».", resp: "Le professeur répète la consigne pour que tout le monde la comprenne.", pasos: ["Dos sujetos distintos.", "pour que + subjuntivo: comprenne."], porque: "Finalidad con otro sujeto." },
    { sit: "«Saldré, a menos que llueva».", resp: "Je sortirai, à moins qu'il ne pleuve.", pasos: ["à moins que = sauf si.", "+ subjuntivo: pleuve (ne sin valor negativo)."], porque: "Condición negativa." },
    { sit: "«Si tuviera tiempo, viajaría».", resp: "Si j'avais le temps, je voyagerais.", pasos: ["si + imperfecto: j'avais.", "Principal en condicional: voyagerais."], porque: "Hipótesis." }
  ],
  comprueba: [
    { q: "Dos sujetos distintos: «para que» →", o: ["pour que + subjuntivo", "pour + infinitivo"], a: 0, b: "but", porque: "pour que + subjuntivo." },
    { q: "au cas où va con…", o: ["condicional", "subjuntivo"], a: 0, b: "cond", porque: "au cas où tu serais." },
    { q: "«Si tuviera…» →", o: ["Si j'avais", "Si j'aurais"], a: 0, b: "cond", porque: "si + imperfecto." }
  ],
  practica: [
    { fase: "guiada", c: ["bu-but"], k: "choice", ask: "Elige.", q: "« Le professeur répète la consigne ___ tout le monde la comprenne. »", o: ["pour que", "pour", "parce que"], a: 0, pista: "Dos sujetos distintos.", why: "<b>pour que</b>." },
    { fase: "guiada", c: ["bu-cond"], k: "choice", ask: "Elige.", q: "« Au cas où tu ___ en retard, préviens-moi. »", o: ["serais", "sois", "es"], a: 0, pista: "au cas où + condicional.", why: "<b>serais</b>." },
    { fase: "guiada", c: ["bu-si"], k: "choice", ask: "Elige.", q: "« Si j'___ le temps, je voyagerais. »", o: ["avais", "aurais"], a: 0, pista: "Con si, nunca condicional.", why: "<b>avais</b>." },
    { fase: "indep", c: ["bu-but"], k: "choice", ask: "Elige.", q: "« Je relis mon texte ___ corriger mes accords. »", o: ["pour", "pour que", "afin que"], a: 0, why: "Mismo sujeto: <b>pour</b>." },
    { fase: "indep", c: ["bu-but"], k: "choice", ask: "Elige.", q: "« Nous partirons tôt, de peur que la route ne ___ bloquée. »", o: ["soit", "est", "sera"], a: 0, why: "Subjuntivo: <b>soit</b>." },
    { fase: "indep", c: ["bu-cond"], k: "choice", ask: "Elige.", q: "« Je viendrai, ___ il ne pleuve. »", o: ["à moins qu'", "au cas où", "si"], a: 0, why: "<b>à moins que</b> = sauf si." },
    { fase: "indep", c: ["bu-cond"], k: "choice", ask: "Elige.", q: "« Tu peux sortir, à condition que tu ___ avant minuit. »", o: ["reviennes", "reviendras", "reviens"], a: 0, why: "Subjuntivo: <b>reviennes</b>." },
    { fase: "indep", c: ["bu-cond"], k: "choice", ask: "Elige.", q: "« ___ panne, appelez ce numéro. »", o: ["En cas de", "Au cas où", "À condition de"], a: 0, why: "Nombre: <b>En cas de</b>." },
    { fase: "indep", c: ["bu-but", "bu-cond"], k: "sort", ask: "¿Qué modo va detrás?", q: "Clasifica:", cats: ["subjonctif", "indicatif", "conditionnel"], items: [["pour que", 0], ["à moins que", 0], ["afin que", 0], ["si", 1], ["au cas où", 2]], why: "Finalidad y condición: subjuntivo; si: indicativo; au cas où: condicional." },
    { fase: "aplica", c: ["bu-but"], k: "order", ask: "Ordena tu propuesta.", ctx: "Parte de soluciones de tu ensayo.", tokens: ["Il faut agir", "dès maintenant", "afin que", "les générations futures", "ne soient pas pénalisées."], why: "<b>afin que</b> + subjuntivo." },
    { fase: "aplica", c: ["bu-si"], k: "choice", ask: "Imagina un escenario.", ctx: "Propones suprimir los carros del centro.", q: "Tu hipótesis:", o: ["Si l'on supprimait les voitures, la ville respirerait.", "Si l'on supprimerait les voitures, la ville respire."], a: 0, why: "si + imperfecto → condicional." },
    { fase: "aplica", c: ["bu-but"], k: "fill", ask: "Escribe être en subjuntivo.", ctx: "«Hay que actuar para que cada uno esté protegido.»", q: "Il faut agir pour que chacun ___ protégé.", acc: ["soit"], why: "<b>soit</b>." },
    { fase: "dominio", c: ["bu-but"], k: "choice", ask: "Elige.", q: "« Je travaille ___ réussir. »", o: ["pour", "pour que"], a: 0, why: "Mismo sujeto: <b>pour</b>." },
    { fase: "dominio", c: ["bu-cond"], k: "choice", ask: "Elige.", q: "« Nous signerons, à condition que vous ___ d'accord. »", o: ["soyez", "êtes"], a: 0, why: "Subjuntivo: <b>soyez</b>." },
    { fase: "dominio", c: ["bu-si"], k: "choice", ask: "Elige.", q: "« Si les loyers baissaient, les familles ___. »", o: ["resteraient", "restaient"], a: 0, why: "Principal: condicional." },
    { fase: "dominio", c: ["bu-cond", "bu-si"], k: "choice", ask: "Elige.", q: "« ___ urgence, appelez le 112. »", o: ["En cas d'", "Au cas où"], a: 0, why: "Nombre: <b>En cas d'</b>." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche"], previo: ["soyez", "resteraient", "réussir"] }
};

/* Lección 20 · La argumentación (retoma concesión, causa y finalidad) */
window.__ENSENA["argu"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "L'argumentation",
  roles: { conn: "conector", prin: "concesión", sub: "refutación" },
  objetivo: {
    que: "Vas a construir párrafos argumentativos: una tesis, argumentos variados, ejemplos y matices con certes…, mais…",
    corto: "Un argumento por párrafo, bien explicado.",
    podras: ["Construir un párrafo: idea, explicación, ejemplo, mini conclusión.", "Reconocer los tipos de argumento.", "Matizar: certes…, mais… / il semble que…"],
    iconos: ["ic2/trofeo", "m2d/senalar", "ic2/libros"],
    previos: ["Causa, concesión y finalidad (lecciones 17 a 19)."],
    capacidad: "Ahora argumentas con método, como pide el ensayo del DALF."
  },
  requiere: ["co-mode", "ca-nom"],
  recupera: ["co-nom"],
  conceptos: {
    "ar-par": { n: "El párrafo argumentativo", b: "paragraphe" },
    "ar-types": { n: "Tipos de argumento", b: "types" },
    "ar-nuance": { n: "Matizar: certes…, mais…; il semble que", b: "nuance" }
  },
  video: {
    titulo: "La argumentación", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/trofeo", grande: "Certes…, mais…", seg: [
        { es: "Hola. En el ensayo del DALF no se evalúa tu opinión, sino tu razonamiento." } ] },
      { v: "frase", filas: [
          { partes: [["idée", "conn", 1], ["explication", "prin", 2], ["exemple", "sub", 3], ["mini-conclusion", "conn", 4]] } ], seg: [
        { es: "Un párrafo desarrolla un solo argumento: primero la idea,", p: 1 },
        { es: "luego la explicación,", p: 2 },
        { es: "un ejemplo concreto,", p: 3 },
        { es: "y una mini conclusión.", p: 4 } ] },
      { v: "frase", filas: [
          { partes: [["Certes,", "conn", 1], ["le télétravail réduit les trajets,", "prin", 1], ["mais", "conn", 2], ["il isole certains salariés.", "sub", 2]] } ], seg: [
        { es: "Y para matizar, reconoces primero el argumento contrario:", p: 1 },
        { es: "y después muestras su límite.", p: 2 },
        { fr: "Certes, le télétravail réduit les trajets, mais il isole certains salariés.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", es: true, q: "«Selon l'OMS…» es un argumento…", o: ["de autoridad", "por analogía"], a: 0,
        bien: "¡Sí! Se apoya en una institución.", mal: "Se apoya en una institución experta: es de autoridad.",
        seg: [ { es: "Pausa. ¿Qué tipo de argumento es?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Certes…, mais…", "Il semble que…", "Force est de constater que…", "Selon l'OMS…"], seg: [
        { es: "Un argumento por párrafo, variado, con ejemplo y con matices.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Tres argumentos en un párrafo", img: "bg-biblioteca", yo: "laura",
    escena: "Laura mete tres argumentos en un solo párrafo.",
    pj: __PJ,
    lineas: [
      ["tutrice", "Ce paragraphe contient trois arguments sans exemple.", "Este párrafo tiene tres argumentos sin ejemplo."],
      ["laura", "Il faut un argument par paragraphe ?", "¿Hay que poner un argumento por párrafo?"],
      ["tutrice", "Oui : l'idée, l'explication, un exemple, puis une mini-conclusion.", "Sí: la idea, la explicación, un ejemplo y una mini conclusión."],
      ["laura", "Et pour nuancer : « Certes…, mais… »", "Y para matizar: «Es cierto que…, pero…»"]
    ],
    fijate: "Fíjate: argumentar bien es desarrollar, no acumular."
  },
  ensena: [
    { id: "paragraphe", tipo: "gram", titulo: "El párrafo argumentativo",
      idea: "Un párrafo = un argumento: idea, explicación, ejemplo y mini conclusión.",
      intro: "Así lo construyes paso a paso.",
      tabla: [["Francés", "Español", "Paso"], [
        ["Le télétravail améliore d'abord la qualité de vie.", "El teletrabajo mejora ante todo la calidad de vida.", "1. idée directrice"],
        ["En supprimant les trajets, il libère du temps.", "Al suprimir los trayectos, libera tiempo.", "2. explication"],
        ["Selon une enquête, les salariés gagnent une heure par jour.", "Según una encuesta, los empleados ganan una hora al día.", "3. exemple"],
        ["Ainsi, il favorise l'équilibre personnel.", "Así, favorece el equilibrio personal.", "4. mini-conclusion"]
      ]],
      regla: ["La tesis es tu posición; el argumento, la razón; el ejemplo, un hecho concreto.", "Un ejemplo solo no basta: explícalo."] },
    { id: "types", tipo: "gram", titulo: "Los tipos de argumento",
      idea: "Varía tus argumentos: de autoridad, por el ejemplo, lógico, por analogía, pragmático.",
      intro: "Un buen ensayo no usa siempre el mismo tipo.",
      tabla: [["Francés", "Español", "Tipo"], [
        ["Selon l'OMS, la sédentarité est un facteur de risque.", "Según la OMS…", "d'autorité"],
        ["À Bogotá, la ciclovía attire des milliers de personnes.", "En Bogotá, la ciclovía…", "par l'exemple"],
        ["Moins de trajets entraînent moins d'émissions.", "Menos trayectos causan menos emisiones.", "logique"],
        ["Apprendre une langue, c'est comme apprendre un instrument.", "Aprender un idioma es como aprender un instrumento.", "par analogie"],
        ["Cette mesure réduirait les coûts de 20 %.", "Esta medida reduciría los costos un 20 %.", "pragmatique"]
      ]],
      regla: ["Autoridad: un experto o una institución.", "Analogía: comparar con otro campo (comme)."] },
    { id: "nuance", tipo: "gram", titulo: "Matizar",
      idea: "Reconoce el argumento contrario y muestra su límite: Certes…, mais…",
      intro: "Y expresa tu grado de certeza.",
      tabla: [["Francés", "Español", "Uso"], [
        ["Certes…, mais…", "Es cierto que…, pero…", "concesión + refutación"],
        ["Il est vrai que…, il n'en reste pas moins que…", "Es verdad que…, no deja de ser cierto que…", "concesión formal"],
        ["Il semble que le télétravail soit durable.", "Parece que el teletrabajo es duradero.", "prudencia: + subjonctif"],
        ["Force est de constater que…", "Hay que reconocer que…", "constatación"]
      ]],
      regla: ["il semble que + subjuntivo (pero il me semble que + indicativo).", "Force est de constater: sin artículo."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Errores típicos.",
      errores: [
        ["Tres argumentos en un párrafo", "Un argumento por párrafo", "Desarrolla, no acumules."],
        ["Il semble que le projet est utile.", "Il semble que le projet soit utile.", "il semble que + subjuntivo."],
        ["La force est de constater…", "Force est de constater…", "Sin artículo."]
      ] }
  ],
  ejemplos: [
    { sit: "Matiza: el teletrabajo reduce los trayectos, pero aísla.", resp: "Certes, le télétravail réduit les trajets, mais il isole certains salariés.", pasos: ["Certes: reconoces la ventaja.", "mais: muestras el límite."], porque: "Concesión + refutación." },
    { sit: "Expresa prudencia: «Parece que es una solución duradera».", resp: "Il semble que ce soit une solution durable.", pasos: ["il semble que = prudencia.", "+ subjuntivo: soit."], porque: "Modalizar." },
    { sit: "¿Qué tipo de argumento es «Selon l'OMS…»?", resp: "Selon l'OMS, la sédentarité est un facteur de risque.", pasos: ["Se apoya en una institución experta.", "→ argumento de autoridad."], porque: "Autoridad." }
  ],
  comprueba: [
    { q: "Un párrafo desarrolla…", o: ["un argumento", "todos los argumentos"], a: 0, b: "paragraphe", porque: "Uno por párrafo." },
    { q: "«C'est comme…» introduce un argumento…", o: ["por analogía", "de autoridad"], a: 0, b: "types", porque: "Analogía." },
    { q: "il semble que va con…", o: ["subjuntivo", "indicativo"], a: 0, b: "nuance", porque: "il semble que ce soit." }
  ],
  practica: [
    { fase: "guiada", c: ["ar-types"], k: "choice", ask: "¿Qué tipo de argumento es?", ctx: "«Selon l'OMS, la sédentarité est un facteur de risque majeur.»", q: "Este argumento es…", o: ["d'autorité", "par analogie", "pragmatique"], a: 0, pista: "Se apoya en una institución.", why: "<b>d'autorité</b>." },
    { fase: "guiada", c: ["ar-nuance"], k: "order", ask: "Ordena: concesión y luego refutación.", tokens: ["Certes,", "le télétravail réduit les trajets,", "mais", "il isole", "certains salariés."], pista: "Primero lo que reconoces.", why: "<b>Certes…, mais…</b>" },
    { fase: "guiada", c: ["ar-par"], k: "choice", es: true, ask: "¿Cuál es la estructura del párrafo?", q: "Elige:", o: ["idea → explicación → ejemplo → mini conclusión", "ejemplo → ejemplo → ejemplo", "conclusión → introducción → argumento"], a: 0, pista: "Empieza por la idea.", why: "Idea, explicación, ejemplo, conclusión." },
    { fase: "indep", c: ["ar-types"], k: "choice", ask: "¿Qué tipo es?", q: "« L'université est comme une salle de sport : on n'y progresse qu'en s'entraînant. »", o: ["par analogie", "d'autorité", "statistique"], a: 0, why: "<b>par analogie</b> (comme)." },
    { fase: "indep", c: ["ar-nuance"], k: "choice", ask: "Elige el verbo.", q: "« Il semble que le télétravail ___ une solution durable. »", o: ["soit", "est"], a: 0, why: "Subjuntivo: <b>soit</b>." },
    { fase: "indep", c: ["ar-nuance"], k: "fill", ask: "Completa la fórmula (sin artículo).", q: "___ est de constater que les salariés sont plus stressés.", acc: ["Force", "force"], why: "<b>Force est de constater</b>." },
    { fase: "indep", c: ["ar-nuance"], k: "choice", ask: "Elige la refutación.", q: "« Il est vrai que la course attire des touristes ; ___ elle met en danger les habitants. »", o: ["il n'en reste pas moins qu'", "par conséquent,", "de plus,"], a: 0, why: "<b>il n'en reste pas moins que</b>." },
    { fase: "indep", c: ["ar-par"], k: "choice", es: true, ask: "¿Qué falta en este párrafo?", q: "«Le télétravail améliore la qualité de vie. Ainsi, il favorise l'équilibre.»", o: ["la explicación y un ejemplo", "nada"], a: 0, why: "Faltan explicación y ejemplo." },
    { fase: "aplica", c: ["ar-types"], k: "choice", ask: "Elige un argumento pragmático.", ctx: "Defiendes una medida en tu ensayo.", q: "Argumento pragmático:", o: ["Cette mesure réduirait les coûts de 20 %.", "Selon un expert, c'est bien."], a: 0, why: "Efectos concretos: <b>pragmatique</b>." },
    { fase: "aplica", c: ["ar-nuance"], k: "choice", ask: "Matiza tu conclusión.", ctx: "No quieres sonar categórico.", q: "Elige:", o: ["Il semble que cette solution soit la plus réaliste.", "Cette solution est la meilleure, point."], a: 0, why: "Modalizas con <b>il semble que</b>." },
    { fase: "aplica", c: ["ar-par"], k: "choice", ask: "Elige la mini conclusión.", ctx: "Cierras un párrafo sobre el teletrabajo.", q: "Mini conclusión:", o: ["Ainsi, le télétravail favorise l'équilibre personnel.", "Prenons un autre exemple."], a: 0, why: "Une el argumento a la tesis." },
    { fase: "dominio", c: ["ar-types"], k: "choice", ask: "¿Qué tipo es?", q: "« Moins de trajets entraînent moins d'émissions. »", o: ["logique", "par analogie"], a: 0, why: "Causa-efecto: <b>logique</b>." },
    { fase: "dominio", c: ["ar-nuance"], k: "choice", ask: "Elige.", q: "« ___, le projet est coûteux, mais il est nécessaire. »", o: ["Certes", "Car"], a: 0, why: "<b>Certes</b>." },
    { fase: "dominio", c: ["ar-par"], k: "choice", es: true, ask: "¿Cuántos argumentos por párrafo?", q: "Elige:", o: ["uno", "tres"], a: 0, why: "Uno." },
    { fase: "dominio", c: ["ar-nuance", "ar-types"], k: "choice", ask: "Elige.", q: "« Il me semble que la réforme ___ nécessaire. »", o: ["est", "soit"], a: 0, why: "<i>il me semble que</i> + indicativo." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche", "OMS", "Bogotá"], previo: ["statistique"] }
};

/* Lección 21 · Los planes del texto académico (retoma la argumentación) */
window.__ENSENA["plans"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Les plans du texte académique",
  roles: {},
  objetivo: {
    que: "Vas a elegir el plan adecuado según la pregunta, y a construir una introducción y una conclusión completas.",
    corto: "El plan depende de la pregunta.",
    podras: ["Elegir entre plan dialéctico, analítico, temático y comparativo.", "Ordenar las partes de una introducción.", "Anunciar el plan."],
    iconos: ["ic2/libros", "m2d/senalar", "ic2/lapiz"],
    previos: ["La argumentación (lección anterior)."],
    capacidad: "Ahora organizas un ensayo o una síntesis con el plan correcto."
  },
  requiere: ["ar-par"],
  recupera: ["ar-par"],
  conceptos: {
    "pl-choix": { n: "Elegir el plan", b: "plans" },
    "pl-intro": { n: "Introducción y conclusión", b: "intro" }
  },
  video: {
    titulo: "Los planes", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/libros", grande: "le plan", seg: [
        { es: "Hola. En el DALF, la estructura cuenta tanto como la lengua." } ] },
      { v: "dos",
        a: { tag: "pregunta cerrada", fr: "Faut-il interdire les voitures en ville ?", es: "→ plan dialéctico: a favor, en contra, superación" },
        b: { tag: "un problema", fr: "La hausse du stress au travail", es: "→ plan analítico: hechos, causas, consecuencias, soluciones" },
        seg: [
          { es: "Si la pregunta se responde con sí o no, plan dialéctico:", p: 1 },
          { fr: "Faut-il interdire les voitures en ville ?", p: 1 },
          { es: "si es un problema que explicar, plan analítico:", p: 2 },
          { fr: "La hausse du stress au travail", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", es: true, q: "Para una síntesis de documentos, el mejor plan es…", o: ["temático", "documento por documento"], a: 0,
        bien: "¡Sí! Cada parte cruza los documentos.", mal: "Nunca documento por documento: temático.",
        seg: [ { es: "Pausa. ¿Y para una síntesis?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["dialectique", "analytique", "thématique", "comparatif"], seg: [
        { es: "Dialéctico, analítico, temático o comparativo: según la pregunta.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Elegir el plan", img: "bg-biblioteca", yo: "laura",
    escena: "Laura no sabe qué plan usar para su ensayo.",
    pj: __PJ,
    lineas: [
      ["laura", "Le sujet est : « Faut-il interdire les voitures en centre-ville ? »", "El tema es: «¿Hay que prohibir los carros en el centro?»"],
      ["tutrice", "C'est une question fermée : plan dialectique.", "Es una pregunta cerrada: plan dialéctico."],
      ["laura", "Pour, contre, et un dépassement.", "A favor, en contra y una superación."],
      ["tutrice", "Exactement. Et dans l'introduction, annoncez ce plan.", "Exacto. Y en la introducción, anuncie ese plan."]
    ],
    fijate: "Fíjate: elegir el plan es responder de verdad a la pregunta."
  },
  ensena: [
    { id: "plans", tipo: "gram", titulo: "Los cuatro planes",
      idea: "Pregunta de sí o no → dialéctico; un problema → analítico; síntesis → temático; dos objetos → comparativo.",
      intro: "En francés: plan dialectique, analytique, thématique, comparatif.",
      tabla: [["Plan", "Partes", "Para"], [
        ["dialectique", "pour · contre · dépassement", "Faut-il… ? Peut-on… ?"],
        ["analytique", "constat · causes · conséquences · solutions", "un problème"],
        ["thématique", "aspects : économique, social…", "la synthèse, une question ouverte"],
        ["comparatif", "points communs · différences", "deux objets"]
      ]],
      regla: ["Dialéctico: la tercera parte supera la oposición con una posición matizada, no repite la tesis.", "Síntesis: nunca documento por documento; cada parte cruza varios documentos."] },
    { id: "intro", tipo: "gram", titulo: "Introducción y conclusión",
      idea: "Introducción: gancho, tema, problemática y anuncio del plan. Conclusión: balance, respuesta y apertura.",
      intro: "Siempre en este orden.",
      tabla: [["Paso", "Ejemplo", "Rol"], [
        ["Amorce", "Depuis la pandémie, le télétravail s'est imposé.", "captar la atención"],
        ["Présentation du sujet", "Travailler à distance concerne un salarié sur quatre.", "presentar el tema"],
        ["Problématique", "Le télétravail améliore-t-il vraiment la qualité de vie ?", "la pregunta"],
        ["Annonce du plan", "Nous verrons d'abord ses avantages, puis ses limites.", "anunciar el plan"]
      ]],
      regla: ["La conclusión responde a la problemática y abre una nueva pista."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Errores típicos.",
      errores: [
        ["Resumir el documento 1 y luego el 2", "Un plan temático que cruza los documentos", "En la síntesis, idea por idea."],
        ["Je vais parler de l'IA.", "En quelques années, l'IA s'est invitée dans les salles de cours.", "Un gancho, no un anuncio plano."],
        ["La tercera parte repite la tesis", "La tercera parte supera la oposición", "Dépassement = posición matizada."]
      ] }
  ],
  ejemplos: [
    { sit: "Tema: «¿Hay que prohibir los carros en el centro?»", resp: "plan dialectique", pasos: ["Se responde con sí o no.", "→ pour, contre, dépassement."], porque: "Pregunta cerrada." },
    { sit: "Tema: «París y Bogotá frente al tráfico»", resp: "plan comparatif", pasos: ["Dos objetos.", "→ points communs, différences."], porque: "Comparar." },
    { sit: "Anuncia tu plan.", resp: "Nous verrons d'abord les avantages du télétravail, puis nous en examinerons les limites.", pasos: ["d'abord…, puis…", "Último paso de la introducción."], porque: "El lector sabe adónde vas." }
  ],
  comprueba: [
    { q: "«Faut-il… ?» →", o: ["plan dialectique", "plan comparatif"], a: 0, b: "plans", porque: "Pregunta cerrada." },
    { q: "Último paso de la introducción:", o: ["l'annonce du plan", "l'amorce"], a: 0, b: "intro", porque: "Se anuncia el plan al final." },
    { q: "La síntesis se organiza…", o: ["por temas", "documento por documento"], a: 0, b: "plans", porque: "Plan temático." }
  ],
  practica: [
    { fase: "guiada", c: ["pl-choix"], k: "choice", ask: "Elige el plan.", q: "« Faut-il interdire les voitures en centre-ville ? »", o: ["dialectique : pour / contre / dépassement", "analytique : constat / causes / solutions", "chronologique"], a: 0, pista: "¿Se responde con sí o no?", why: "<b>dialectique</b>." },
    { fase: "guiada", c: ["pl-intro"], k: "order", ask: "Ordena las partes de la introducción.", tokens: ["Amorce", "Présentation du sujet", "Problématique", "Annonce du plan"], pista: "Del gancho al anuncio.", why: "Gancho, tema, problemática, plan." },
    { fase: "indep", c: ["pl-choix"], k: "choice", ask: "Elige el plan.", q: "« La hausse du stress au travail »", o: ["analytique : constat / causes / conséquences / solutions", "dialectique : pour / contre", "comparatif"], a: 0, why: "Un problema: <b>analytique</b>." },
    { fase: "indep", c: ["pl-intro"], k: "choice", ask: "¿Qué frase anuncia el plan?", q: "Elige:", o: ["Nous verrons d'abord les avantages du télétravail, puis nous en examinerons les limites.", "Le télétravail est un sujet intéressant.", "Pour conclure, le télétravail est utile."], a: 0, why: "<b>d'abord…, puis…</b>" },
    { fase: "indep", c: ["pl-intro"], k: "choice", ask: "Elige el gancho.", q: "Ensayo sobre la IA en la universidad:", o: ["En quelques années, les outils d'intelligence artificielle se sont invités dans les salles de cours.", "Je vais parler de l'IA.", "L'IA, c'est quoi ?"], a: 0, why: "Un gancho que sitúa el tema." },
    { fase: "indep", c: ["pl-choix"], k: "choice", ask: "En la síntesis, se prefiere…", q: "Elige:", o: ["un plan thématique qui croise les documents", "un plan document par document", "un plan chronologique"], a: 0, why: "<b>thématique</b>." },
    { fase: "indep", c: ["pl-choix"], k: "match", ask: "Une cada tema con su plan.", q: "Tema → plan", pairs: [["Faut-il interdire les voitures en ville ?", "dialectique"], ["La hausse du stress au travail", "analytique"], ["Paris et Bogotá face au trafic", "comparatif"], ["Les enjeux de l'IA à l'université", "thématique"]], why: "Según el tipo de pregunta." },
    { fase: "aplica", c: ["pl-choix"], k: "choice", ask: "Elige el plan para tu ensayo.", ctx: "Tema: «Peut-on encore se passer des réseaux sociaux ?»", q: "Plan:", o: ["dialectique", "comparatif"], a: 0, why: "Pregunta cerrada (Peut-on…?)." },
    { fase: "aplica", c: ["pl-choix"], k: "choice", ask: "¿Qué hace la tercera parte del plan dialéctico?", es: true, q: "Elige:", o: ["Supera la oposición con una posición matizada", "Repite la tesis", "Añade ejemplos sin relación"], a: 0, why: "<b>dépassement</b>." },
    { fase: "dominio", c: ["pl-choix"], k: "choice", ask: "Elige el plan.", q: "« Deux politiques du logement : France et Colombie »", o: ["comparatif", "dialectique"], a: 0, why: "Dos objetos." },
    { fase: "dominio", c: ["pl-intro"], k: "choice", ask: "¿Qué parte es?", q: "« Le télétravail améliore-t-il vraiment la qualité de vie ? »", o: ["Problématique", "Amorce"], a: 0, why: "La pregunta: <b>problématique</b>." },
    { fase: "dominio", c: ["pl-intro", "pl-choix"], k: "choice", ask: "¿Qué parte es?", q: "« Depuis la pandémie, le télétravail s'est imposé. »", o: ["Amorce", "Annonce du plan"], a: 0, why: "Gancho: <b>amorce</b>." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche", "France", "Colombie", "Paris", "Bogotá"] }
};

/* Lección 22 · La toma de apuntes (retoma la reformulación: abreviar sin perder la idea) */
window.__ENSENA["notes"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "La prise de notes",
  roles: {},
  objetivo: {
    que: "Vas a tomar apuntes rápidos y útiles: seleccionar lo esencial, abreviarlo y anotar las relaciones lógicas.",
    corto: "Se habla tres veces más rápido de lo que se escribe.",
    podras: ["Saber qué anotar.", "Usar símbolos: → ↑ ↓ ≠.", "Usar abreviaturas: gvt, pb, bcp."],
    iconos: ["ic2/lapiz", "ic2/audifonos", "m2d/escribiendo"],
    previos: ["La reformulación (lección 14)."],
    capacidad: "Ahora tomas apuntes eficaces en una clase o en la comprensión oral del DALF."
  },
  requiere: ["rf-nom"],
  recupera: [],
  conceptos: {
    "no-quoi": { n: "Qué anotar", b: "quoi" },
    "no-sig": { n: "Símbolos y abreviaturas", b: "signes" }
  },
  video: {
    titulo: "Tomar apuntes", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "→ ↑ ↓ ≠", seg: [
        { es: "Hola. Nadie puede escribir todo lo que oye. Tomar apuntes es elegir y abreviar." } ] },
      { v: "dos",
        a: { tag: "lo que se oye", fr: "Les trajets ont diminué, mais l'isolement a augmenté.", es: "Los trayectos disminuyeron, pero el aislamiento aumentó." },
        b: { tag: "la nota", fr: "↓ trajets, mais ↑ isolement", es: "flechas y palabras clave" },
        seg: [
          { es: "Escuchas esto:", p: 1 },
          { fr: "Les trajets ont diminué, mais l'isolement a augmenté.", p: 1 },
          { es: "y anotas solo las palabras clave, con flechas.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", es: true, q: "« ↑ chômage » significa…", o: ["aumento del desempleo", "baja del desempleo"], a: 0,
        bien: "¡Sí! La flecha hacia arriba es aumento.", mal: "↑ = aumento, ↓ = baja.",
        seg: [ { es: "Pausa. ¿Qué significa la flecha hacia arriba?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["→ entraîne", "↑ hausse", "↓ baisse", "≠ différent", "gvt · pb · bcp"], seg: [
        { es: "Palabras clave, cifras, relaciones lógicas y siempre los mismos símbolos.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Una clase magistral", img: "bg-biblioteca", yo: "laura",
    escena: "Laura intenta escribir todo lo que dice el profesor.",
    pj: __PJ,
    lineas: [
      ["laura", "Je n'arrive pas à tout écrire pendant le cours.", "No logro escribir todo durante la clase."],
      ["tutrice", "C'est normal : notez les idées, pas les phrases.", "Es normal: anote las ideas, no las frases."],
      ["laura", "Avec des symboles ?", "¿Con símbolos?"],
      ["tutrice", "Oui, une flèche pour la conséquence, et toujours les mêmes abréviations.", "Sí, una flecha para la consecuencia, y siempre las mismas abreviaturas."]
    ],
    fijate: "Fíjate: una cifra sin lo que mide no sirve; anota también las relaciones."
  },
  ensena: [
    { id: "quoi", tipo: "uso", titulo: "Qué anotar",
      idea: "Anota ideas, no frases: palabras clave, cifras, fechas, nombres y relaciones lógicas.",
      intro: "Deja un margen para completar después.",
      pares: [
        ["télétravail : 1/4 salariés → ↓ trajets, mais ↑ isolement", "Nota fiel: cifra + relación + contraste"],
        ["14 h 15 · durée 90 min", "Horas y duraciones en cifras"]
      ],
      regla: ["Una idea por línea; los detalles, más a la derecha.", "Una cifra siempre con lo que mide."] },
    { id: "signes", tipo: "gram", titulo: "Símbolos y abreviaturas",
      idea: "Usa siempre los mismos símbolos y abreviaturas, para poder releerte.",
      intro: "Los más útiles:",
      tabla: [["Signo", "Significado", "Tipo"], [
        ["→", "entraîne, cause (causa)", "relación"],
        ["↑ / ↓", "hausse / baisse (subida / bajada)", "evolución"],
        ["≠", "différent, opposé (diferente)", "oposición"],
        ["∅", "absence (ausencia)", "falta"],
        ["gvt · pb · bcp", "gouvernement · problème · beaucoup", "abreviatura"],
        ["popula°", "population (° = -tion)", "terminación"]
      ]],
      regla: ["Para abreviar, guarda las consonantes clave: gouvernement → gvt.", "° reemplaza -tion: popula° = population."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Errores típicos.",
      errores: [
        ["Escribir todo lo que se dice", "Palabras clave + símbolos", "Selecciona y abrevia."],
        ["Anotar «38 %» solo", "38 % étudiants → notes sur ordi", "Una cifra con lo que mide."],
        ["Cambiar de abreviatura cada vez", "Siempre las mismas", "Para poder releerte."]
      ] }
  ],
  ejemplos: [
    { sit: "Oyes: «La hausse des loyers entraîne le départ des familles».", resp: "↑ loyers → départ familles", pasos: ["hausse → ↑.", "entraîne → →."], porque: "Relación lógica con símbolo." },
    { sit: "Oyes: «Le cours commence à quatorze heures quinze et dure quatre-vingt-dix minutes».", resp: "14 h 15 · durée 90 min", pasos: ["Horas en cifras.", "Duración en cifras."], porque: "Cifras exactas." },
    { sit: "Abrevia «gouvernement».", resp: "gvt", pasos: ["Guarda las consonantes clave."], porque: "Abreviatura estable." }
  ],
  comprueba: [
    { q: "Hay que anotar sobre todo…", o: ["palabras clave, cifras y relaciones", "todas las frases"], a: 0, b: "quoi", porque: "Ideas, no frases." },
    { q: "«→» significa…", o: ["entraîne, causa", "diferente"], a: 0, b: "signes", porque: "Consecuencia." },
    { q: "«gvt» =", o: ["gouvernement", "gravement"], a: 0, b: "signes", porque: "Consonantes clave." }
  ],
  practica: [
    { fase: "guiada", c: ["no-sig"], k: "choice", ask: "Elige el símbolo.", q: "« entraîne, a pour conséquence » :", o: ["→", "≠", "∅"], a: 0, pista: "Una flecha.", why: "<b>→</b>." },
    { fase: "guiada", c: ["no-quoi"], k: "choice", es: true, ask: "¿Qué se anota primero?", q: "Elige:", o: ["palabras clave, cifras, fechas, nombres y relaciones lógicas", "todas las frases palabra por palabra", "solo los ejemplos"], a: 0, pista: "Ideas, no frases.", why: "Lo esencial." },
    { fase: "indep", c: ["no-sig"], k: "choice", ask: "¿Qué significa?", q: "« ↑ chômage »", o: ["hausse du chômage", "baisse du chômage", "absence de chômage"], a: 0, why: "↑ = <b>hausse</b>." },
    { fase: "indep", c: ["no-sig"], k: "choice", ask: "¿Qué significa?", q: "« gvt »", o: ["gouvernement", "gouvernant", "gravement"], a: 0, why: "<b>gouvernement</b>." },
    { fase: "indep", c: ["no-quoi"], k: "choice", ask: "Escucha. ¿Qué nota es más fiel?", say: "Dans l'entreprise étudiée, un quart des salariés travaillent à distance. Les trajets ont diminué, mais l'isolement a nettement augmenté.", q: "Elige la nota:", o: ["télétravail : 1/4 salariés → ↓ trajets, mais ↑ isolement", "télétravail = bien", "4 salariés en télétravail"], a: 0, why: "Cifra, relación y contraste." },
    { fase: "indep", c: ["no-quoi"], k: "choice", ask: "Escucha el anuncio.", say: "Le cours commence à quatorze heures quinze et dure quatre-vingt-dix minutes.", q: "¿Qué nota es exacta?", o: ["14 h 15 · durée 90 min", "4 h 15 · durée 19 min", "14 h 50 · durée 70 min"], a: 0, why: "<b>14 h 15 · 90 min</b>." },
    { fase: "indep", c: ["no-sig"], k: "match", ask: "Une cada signo con su sentido.", q: "Signo → sentido", pairs: [["→", "entraîne"], ["≠", "différent"], ["↑", "hausse"], ["∅", "absence"]], why: "Símbolos estables." },
    { fase: "aplica", c: ["no-quoi"], k: "listen", say: "Dans ce groupe, trente-huit pour cent des étudiants prennent leurs notes sur ordinateur.", acc: ["38"], num: true, ask: "Escucha y escribe la cifra.", ctx: "Comprensión oral del DALF.", why: "<b>38</b> %." },
    { fase: "aplica", c: ["no-sig"], k: "choice", ask: "¿Cómo se lee?", q: "« popula° »", o: ["population", "populaire", "populiste"], a: 0, why: "° = -tion." },
    { fase: "aplica", c: ["no-quoi", "no-sig"], k: "choice", ask: "Elige tu nota.", ctx: "Oyes: «La hausse des loyers entraîne le départ des familles.»", q: "Nota:", o: ["↑ loyers → départ familles", "les loyers augmentent et les familles partent"], a: 0, why: "Símbolos y palabras clave." },
    { fase: "dominio", c: ["no-sig"], k: "choice", ask: "¿Qué significa?", q: "« ≠ »", o: ["différent, opposé", "égal"], a: 0, why: "<b>≠</b> = diferente." },
    { fase: "dominio", c: ["no-sig"], k: "choice", ask: "¿Qué significa?", q: "« ↓ natalité »", o: ["baisse de la natalité", "hausse de la natalité"], a: 0, why: "↓ = <b>baisse</b>." },
    { fase: "dominio", c: ["no-quoi"], k: "choice", es: true, ask: "Una cifra sola, ¿sirve?", q: "Elige:", o: ["No: hay que anotar lo que mide", "Sí, siempre"], a: 0, why: "Cifra + lo que mide." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche"], previo: ["38", "natalité"] }
};

/* ===================== Sección VI · Le texte académique ===================== */

/* Lección 23 · El resumen (retoma la reformulación) */
window.__ENSENA["resume"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Le résumé",
  roles: {},
  objetivo: {
    que: "Vas a reducir un texto a un cuarto o un tercio, en el mismo orden y sin opinar, reformulando lo esencial.",
    corto: "Menos palabras, las mismas ideas, sin tu opinión.",
    podras: ["Calcular el número de palabras y la tolerancia.", "Saber qué conservar y qué suprimir.", "Escribir desde el punto de vista del autor, sin nombrarlo."],
    iconos: ["m2d/escribiendo", "ic2/libros", "ic2/lapiz"],
    previos: ["La reformulación (lección 14) y los conectores (lecciones 17-19)."],
    capacidad: "Ahora haces un résumé correcto, base de la síntesis del DALF."
  },
  requiere: ["rf-nom", "ca-nom"],
  recupera: ["rf-nom"],
  conceptos: {
    "rs-regles": { n: "Las reglas: longitud, orden, sin opinión", b: "regles" },
    "rs-tri": { n: "Qué conservar y qué suprimir", b: "tri" }
  },
  video: {
    titulo: "El résumé", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/escribiendo", grande: "÷ 4", seg: [
        { es: "Hola. El résumé reduce un texto a un cuarto o un tercio de su longitud." } ] },
      { v: "dos",
        a: { tag: "se conserva", fr: "la thèse, les idées principales, les liens logiques", es: "la tesis, las ideas y los conectores" },
        b: { tag: "se suprime", fr: "les exemples, les répétitions, les citations", es: "ejemplos, repeticiones y citas" },
        seg: [
          { es: "Conservas la tesis, las ideas principales y los conectores lógicos.", p: 1 },
          { es: "Suprimes los ejemplos, las repeticiones y las citas.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", es: true, q: "¿Puedes escribir «L'auteur affirme que…» en un résumé?", o: ["No", "Sí"], a: 0,
        bien: "¡Exacto! Escribes en su lugar, sin nombrarlo.", mal: "En el résumé no se nombra al autor: escribes en su lugar.",
        seg: [ { es: "Pausa. ¿Se nombra al autor?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["÷ 4", "÷ 3", "± 10 %", "thèse", "liens logiques"], seg: [
        { es: "Un cuarto o un tercio, el mismo orden, sin opinión y sin copiar.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Un résumé con opinión", img: "bg-biblioteca", yo: "laura",
    escena: "Laura entrega un résumé que termina con su opinión.",
    pj: __PJ,
    lineas: [
      ["tutrice", "Votre dernière phrase dit : « Je pense que l'auteur a raison. »", "Su última frase dice: «Creo que el autor tiene razón»."],
      ["laura", "On ne peut pas donner son avis ?", "¿No se puede dar la opinión?"],
      ["tutrice", "Jamais dans un résumé. Et pas de « l'auteur dit » non plus.", "Nunca en un résumé. Y tampoco «el autor dice»."],
      ["laura", "J'écris à sa place, en reformulant.", "Escribo en su lugar, reformulando."]
    ],
    fijate: "Fíjate: el résumé es la base de la síntesis del DALF."
  },
  ensena: [
    { id: "regles", tipo: "gram", titulo: "Las reglas del résumé",
      idea: "Reduce a un cuarto o un tercio, en el mismo orden, en lugar del autor y sin tu opinión.",
      intro: "Y cuenta bien las palabras.",
      tabla: [["Regla", "Ejemplo", "Detalle"], [
        ["600 ÷ 4 = 150 mots", "de 135 à 165 mots", "± 10 %"],
        ["400 ÷ 4 = 100 mots", "de 90 à 110 mots", "± 10 %"],
        ["« C'est l'université qui décide » = 6 mots", "C' | est | l' | université | qui | décide", "apóstrofo = otra palabra"]
      ]],
      regla: ["Sin «je» y sin «l'auteur dit»: escribes en lugar del autor.", "Mismo orden que el texto.", "Ninguna opinión ni información externa."] },
    { id: "tri", tipo: "uso", titulo: "Qué conservar y qué suprimir",
      idea: "Conserva la tesis, las ideas y los conectores; suprime ejemplos, repeticiones y citas.",
      intro: "Y reformula todo con tus palabras.",
      pares: [
        ["Le recours croissant des étudiants à l'IA fait craindre aux enseignants un affaiblissement de leur autonomie intellectuelle.", "Buen résumé: nominaliza y conserva la relación"],
        ["Les étudiants utilisent de plus en plus l'IA pour rédiger leurs devoirs.", "Mal: copia el texto"]
      ],
      regla: ["Se conserva: thèse, idées principales, liens logiques, ordre.", "Se suprime: exemples, anecdotes, répétitions, citations."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Errores típicos.",
      errores: [
        ["L'auteur affirme que…", "(la idea directamente)", "No se nombra al autor."],
        ["Je pense que l'auteur a raison.", "(ninguna opinión)", "Nunca opinión."],
        ["Copiar frases del texto", "Reformular", "Nunca copiar."]
      ] }
  ],
  ejemplos: [
    { sit: "Texto de 450 palabras, résumé al tercio.", resp: "150 mots, de 135 à 165", pasos: ["450 ÷ 3 = 150.", "± 10 %: de 135 a 165."], porque: "La tolerancia es del 10 %." },
    { sit: "Resume: «Les étudiants utilisent de plus en plus l'IA pour rédiger leurs devoirs, ce qui inquiète les enseignants.»", resp: "Le recours croissant des étudiants à l'IA inquiète les enseignants.", pasos: ["Nominaliza: le recours croissant.", "Conserva la relación (inquiète)."], porque: "Más corto, sin copiar." },
    { sit: "¿Qué se suprime primero?", resp: "les exemples et les répétitions", pasos: ["La tesis y los conectores se conservan."], porque: "Son lo secundario." }
  ],
  comprueba: [
    { q: "En el résumé, la opinión del estudiante…", o: ["nunca aparece", "va al final"], a: 0, b: "regles", porque: "Nunca." },
    { q: "Texto de 400 palabras al cuarto →", o: ["100 palabras (90 a 110)", "40 palabras"], a: 0, b: "regles", porque: "400 ÷ 4." },
    { q: "Se suprime primero…", o: ["los ejemplos", "la tesis"], a: 0, b: "tri", porque: "Lo secundario." }
  ],
  practica: [
    { fase: "guiada", c: ["rs-regles"], k: "choice", es: true, ask: "¿Puedes escribir «L'auteur affirme que…»?", q: "En un résumé:", o: ["No: escribes en su lugar, sin nombrarlo", "Sí, es obligatorio", "Solo en la conclusión"], a: 0, pista: "Escribes en lugar del autor.", why: "No se nombra al autor." },
    { fase: "guiada", c: ["rs-regles"], k: "choice", es: true, ask: "Calcula.", q: "Texto de 400 palabras, résumé al cuarto:", o: ["100 palabras (entre 90 y 110)", "40 palabras", "200 palabras"], a: 0, pista: "400 ÷ 4, ± 10 %.", why: "100 ± 10." },
    { fase: "indep", c: ["rs-regles"], k: "choice", ask: "¿Cuántas palabras tiene?", q: "« C'est l'université qui décide »", o: ["6", "4", "5"], a: 0, why: "C' | est | l' | université | qui | décide." },
    { fase: "indep", c: ["rs-tri"], k: "choice", es: true, ask: "¿Qué se suprime primero?", q: "Elige:", o: ["los ejemplos y las repeticiones", "la tesis", "los conectores lógicos"], a: 0, why: "Lo secundario." },
    { fase: "indep", c: ["rs-regles"], k: "choice", es: true, ask: "¿Puede tener tu opinión?", q: "Elige:", o: ["No, nunca", "Sí, al final", "Sí, si es matizada"], a: 0, why: "Nunca." },
    { fase: "indep", c: ["rs-tri"], k: "choice", ask: "Elige el mejor résumé.", q: "« Les étudiants utilisent de plus en plus l'intelligence artificielle pour rédiger leurs devoirs, ce qui inquiète les enseignants, lesquels craignent une perte d'autonomie intellectuelle. »", o: ["Le recours croissant des étudiants à l'IA fait craindre aux enseignants un affaiblissement de leur autonomie intellectuelle.", "Les étudiants utilisent de plus en plus l'IA pour rédiger leurs devoirs.", "Je pense que l'IA est dangereuse pour les étudiants."], a: 0, why: "Reformula y conserva la relación." },
    { fase: "aplica", c: ["rs-regles"], k: "choice", es: true, ask: "¿En qué orden van las ideas?", ctx: "Preparas el résumé de un artículo.", q: "Elige:", o: ["el orden del texto", "el orden de mis preferencias", "orden alfabético"], a: 0, why: "Mismo orden." },
    { fase: "aplica", c: ["rs-tri"], k: "choice", es: true, ask: "¿Qué haces con esta frase?", ctx: "«Par exemple, à Lyon, un étudiant sur trois…»", q: "En el résumé:", o: ["La suprimo: es un ejemplo", "La copio entera"], a: 0, why: "Los ejemplos se suprimen." },
    { fase: "dominio", c: ["rs-regles"], k: "choice", es: true, ask: "Calcula.", q: "Texto de 600 palabras al cuarto:", o: ["de 135 a 165 palabras", "de 50 a 70 palabras"], a: 0, why: "150 ± 15." },
    { fase: "dominio", c: ["rs-tri"], k: "choice", es: true, ask: "¿Qué se conserva?", q: "Elige:", o: ["la tesis y los conectores lógicos", "las citas"], a: 0, why: "Lo esencial." },
    { fase: "dominio", c: ["rs-regles", "rs-tri"], k: "choice", es: true, ask: "¿Se puede copiar una frase del texto?", q: "Elige:", o: ["No: hay que reformular", "Sí, si es importante"], a: 0, why: "Nunca copiar." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche", "IA"], previo: ["6"] }
};

/* Lección 24 · El compte rendu (retoma el résumé y los verbos para citar) */
window.__ENSENA["cr"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Le compte rendu",
  roles: { conn: "documento", suj: "autor", verbe: "verbo introductor", sub: "tema" },
  objetivo: {
    que: "Vas a presentar un documento y exponer el pensamiento de su autor con verbos introductores precisos.",
    corto: "Presentar un texto y lo que piensa su autor.",
    podras: ["Diferenciar el compte rendu del résumé.", "Escribir la frase de presentación.", "Elegir el verbo introductor exacto."],
    iconos: ["ic2/libros", "m2d/senalar", "ic2/microfono"],
    previos: ["El résumé (lección anterior) y el discurso referido (lección 16)."],
    capacidad: "Ahora presentas un documento como en la universidad o en el oral del DALF."
  },
  requiere: ["rs-regles", "dr-temps"],
  recupera: ["rs-regles"],
  conceptos: {
    "cr-diff": { n: "Compte rendu y résumé", b: "diff" },
    "cr-verbes": { n: "Los verbos introductores", b: "verbes" }
  },
  video: {
    titulo: "El compte rendu", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/libros", grande: "compte rendu", seg: [
        { es: "Hola. El compte rendu presenta un documento y cuenta lo que piensa su autor." } ] },
      { v: "frase", filas: [
          { partes: [["Dans cet article paru dans Le Monde,", "conn", 1], ["la sociologue", "suj", 1], ["s'interroge sur", "verbe", 2], ["l'avenir du télétravail.", "sub", 2]] } ], seg: [
        { es: "La primera frase presenta el documento, la fuente y el autor,", p: 1 },
        { es: "con un verbo introductor y el tema:", p: 2 },
        { fr: "Dans cet article paru dans Le Monde, la sociologue s'interroge sur l'avenir du télétravail.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "El autor lamenta algo. Verbo:", o: ["déplore", "préconise"], a: 0,
        bien: "¡Sí! déplorer = lamentar.", mal: "préconiser es recomendar. Lamentar: déplorer.",
        seg: [ { es: "Pausa. El autor lamenta algo: ¿qué verbo usas?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["affirme", "souligne", "déplore", "dénonce", "préconise", "reconnaît"], seg: [
        { es: "Un verbo preciso para cada intención del autor, en presente y en tercera persona.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Siempre «dice»", img: "bg-biblioteca", yo: "laura",
    escena: "Laura usa «dit» en todas las frases de su compte rendu.",
    pj: __PJ,
    lineas: [
      ["tutrice", "Vous écrivez « l'auteur dit » six fois.", "Escribe «el autor dice» seis veces."],
      ["laura", "Quand il regrette, je peux écrire « il déplore » ?", "Cuando lamenta, ¿puedo escribir «déplore»?"],
      ["tutrice", "Oui, et quand il propose une solution, « il préconise ».", "Sí, y cuando propone una solución, «préconise»."],
      ["laura", "Le verbe dit ce que fait l'auteur.", "El verbo dice lo que hace el autor."]
    ],
    fijate: "Fíjate: estos verbos te sirven también en la síntesis y en el oral."
  },
  ensena: [
    { id: "diff", tipo: "gram", titulo: "Compte rendu o résumé",
      idea: "En el compte rendu presentas el documento y hablas del autor en tercera persona, en presente.",
      intro: "En el résumé escribías en su lugar; aquí hablas de él.",
      tabla: [["", "Résumé", "Compte rendu"], [
        ["Présentation du document", "no", "oui : auteur, titre, source, date"],
        ["Point de vue", "à la place de l'auteur", "on parle de l'auteur"],
        ["Ordre des idées", "celui du texte", "peut être réorganisé"],
        ["Temps", "celui du texte", "présent"]
      ]],
      regla: ["Opinión del estudiante: tampoco en el compte rendu.", "Primera frase: tipo de documento, fuente, autor, verbo y tema."] },
    { id: "verbes", tipo: "gram", titulo: "Los verbos introductores",
      idea: "Elige el verbo que dice lo que hace el autor: afirmar, lamentar, criticar, recomendar, admitir.",
      intro: "Nunca repitas «dit».",
      tabla: [["Verbo", "Español", "Intención"], [
        ["affirme, soutient, souligne", "afirma, sostiene, subraya", "presentar con fuerza"],
        ["rappelle, constate", "recuerda, constata", "un hecho conocido"],
        ["déplore", "lamenta", "regretter"],
        ["dénonce", "denuncia", "critiquer"],
        ["préconise", "recomienda", "recommander"],
        ["reconnaît", "reconoce", "concéder"],
        ["s'interroge sur", "se pregunta sobre", "questionner"]
      ]],
      regla: ["L'auteure souligne que… (en presente)."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Errores típicos.",
      errores: [
        ["Il dit que… il dit que…", "Il affirme… il souligne… il rappelle…", "Un verbo para cada intención."],
        ["El compte rendu en pasado", "Au présent", "Se escribe en presente."],
        ["Dar tu opinión", "Tono objetivo", "Tampoco aquí se opina."]
      ] }
  ],
  ejemplos: [
    { sit: "Presenta: artículo de Le Monde, una socióloga, se pregunta por el futuro del teletrabajo.", resp: "Dans cet article paru dans Le Monde, la sociologue s'interroge sur l'avenir du télétravail.", pasos: ["Documento y fuente.", "Autor + verbo + tema."], porque: "Frase de presentación completa." },
    { sit: "El autor propone una solución concreta.", resp: "L'auteur préconise une solution concrète.", pasos: ["Recomendar → préconiser."], porque: "Verbo preciso." },
    { sit: "La autora subraya que el cambio de carrera es a menudo forzado.", resp: "L'auteure souligne que la reconversion est souvent un choix contraint.", pasos: ["Subrayar → souligner.", "En presente."], porque: "Importancia." }
  ],
  comprueba: [
    { q: "En el compte rendu…", o: ["se nombra al autor", "no se nombra al autor"], a: 0, b: "diff", porque: "Se presenta el documento." },
    { q: "El compte rendu se escribe en…", o: ["presente", "pasado"], a: 0, b: "diff", porque: "Presente." },
    { q: "«lamentar» →", o: ["déplorer", "préconiser"], a: 0, b: "verbes", porque: "déplorer." }
  ],
  practica: [
    { fase: "guiada", c: ["cr-verbes"], k: "choice", ask: "Elige el verbo.", q: "El autor lamenta la desaparición de las clases presenciales.", o: ["déplore", "préconise", "rappelle"], a: 0, pista: "lamentar = …", why: "<b>déplore</b>." },
    { fase: "guiada", c: ["cr-diff"], k: "order", ask: "Ordena la frase de presentación.", tokens: ["Dans cet article", "paru dans Le Monde,", "la sociologue", "s'interroge sur", "l'avenir du télétravail."], pista: "Documento, autor, verbo, tema.", why: "Frase de presentación." },
    { fase: "indep", c: ["cr-verbes"], k: "choice", ask: "Elige el verbo.", q: "El autor propone una solución concreta.", o: ["préconise", "dénonce", "constate"], a: 0, why: "<b>préconise</b>." },
    { fase: "indep", c: ["cr-verbes"], k: "choice", ask: "Elige el verbo.", q: "El autor critica con fuerza una injusticia.", o: ["dénonce", "nuance", "reconnaît"], a: 0, why: "<b>dénonce</b>." },
    { fase: "indep", c: ["cr-verbes"], k: "choice", ask: "Elige el verbo.", q: "El autor admite el valor de un argumento contrario.", o: ["reconnaît", "réfute", "déplore"], a: 0, why: "<b>reconnaît</b>." },
    { fase: "indep", c: ["cr-diff"], k: "choice", es: true, ask: "¿Cuál es la diferencia principal?", q: "Compte rendu y résumé:", o: ["El compte rendu nombra al autor y puede reorganizar las ideas", "El résumé da la opinión del estudiante", "Ninguna"], a: 0, why: "Presenta el documento." },
    { fase: "indep", c: ["cr-diff"], k: "choice", ask: "¿En qué tiempo se escribe?", q: "Un compte rendu se escribe…", o: ["au présent", "au passé simple", "au futur"], a: 0, why: "<b>présent</b>." },
    { fase: "aplica", c: ["cr-verbes"], k: "fill", ask: "Escribe souligner en presente.", ctx: "Tu compte rendu de un artículo sobre la reconversión profesional.", q: "L'auteure ___ que la reconversion est souvent un choix contraint.", acc: ["souligne"], why: "<b>souligne</b>." },
    { fase: "aplica", c: ["cr-verbes"], k: "match", ask: "Une la intención y el verbo.", q: "Intención → verbo", pairs: [["regretter", "déplorer"], ["recommander", "préconiser"], ["critiquer", "dénoncer"], ["concéder", "reconnaître"]], why: "Un verbo preciso." },
    { fase: "dominio", c: ["cr-verbes"], k: "choice", ask: "Elige el verbo.", q: "El autor recuerda un hecho conocido.", o: ["rappelle", "dénonce"], a: 0, why: "<b>rappelle</b>." },
    { fase: "dominio", c: ["cr-diff"], k: "choice", es: true, ask: "¿Puedes dar tu opinión?", q: "En el compte rendu:", o: ["No: tono objetivo", "Sí, en cada párrafo"], a: 0, why: "Tono objetivo." },
    { fase: "dominio", c: ["cr-verbes", "cr-diff"], k: "choice", ask: "Elige el verbo.", q: "El autor se pregunta sobre el futuro de la universidad.", o: ["s'interroge sur", "affirme"], a: 0, why: "<b>s'interroge sur</b>." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche", "Monde"] }
};

/* Lección 25 · El registro académico (retoma impersonales y pasiva) */
window.__ENSENA["acad"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Le registre académique",
  roles: {},
  objetivo: {
    que: "Vas a escribir en un registro académico: objetivo, preciso y matizado, sin palabras familiares ni anglicismos.",
    corto: "Ni «truc» ni «super»: así escribe la universidad.",
    podras: ["Cambiar verbos banales por académicos.", "Evitar palabras vagas y generalizaciones.", "Reemplazar anglicismos."],
    iconos: ["ic2/birrete", "m2d/escribiendo", "ic2/libros"],
    previos: ["Impersonales y pasiva (lección 11)."],
    capacidad: "Ahora escribes con el registro que exige un texto universitario."
  },
  requiere: ["pa-il"],
  recupera: ["pa-conv"],
  conceptos: {
    "ac-verbes": { n: "Verbos y nombres precisos", b: "verbes" },
    "ac-eviter": { n: "Lo que hay que evitar", b: "eviter" }
  },
  video: {
    titulo: "El registro académico", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/birrete", grande: "met en évidence", seg: [
        { es: "Hola. Un texto universitario es objetivo y preciso. Mira la diferencia." } ] },
      { v: "dos",
        a: { tag: "familiar", fr: "Cette étude montre des trucs intéressants.", es: "Este estudio muestra cosas interesantes." },
        b: { tag: "académico", fr: "Cette étude met en évidence plusieurs résultats significatifs.", es: "Este estudio pone de relieve varios resultados significativos." },
        seg: [
          { es: "Así no:", p: 1 },
          { fr: "Cette étude montre des trucs intéressants.", p: 1 },
          { es: "Así sí:", p: 2 },
          { fr: "Cette étude met en évidence plusieurs résultats significatifs.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "« feedback » en francés académico:", o: ["retour", "défi"], a: 0,
        bien: "¡Sí! Se evita el anglicismo.", mal: "En registro académico se dice retour.",
        seg: [ { es: "Pausa. ¿Cómo se dice sin anglicismo?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["mettre en évidence", "constituer", "s'avérer", "retour", "échéance"], seg: [
        { es: "Verbos precisos, sin palabras vagas y sin anglicismos.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Demasiado oral", img: "bg-biblioteca", yo: "laura",
    escena: "El borrador de Laura suena a conversación.",
    pj: __PJ,
    lineas: [
      ["tutrice", "Vous écrivez : « C'est super important, tout le monde le sait. »", "Escribe: «Es súper importante, todo el mundo lo sabe»."],
      ["laura", "C'est trop familier ?", "¿Es demasiado familiar?"],
      ["tutrice", "Oui. Écrivez : « Il s'agit d'un enjeu majeur. »", "Sí. Escriba: «Se trata de un desafío mayor»."],
      ["laura", "Et sans « tout le monde ».", "Y sin «todo el mundo»."]
    ],
    fijate: "Fíjate: las ideas pueden ser buenas, pero el registro también se evalúa."
  },
  ensena: [
    { id: "verbes", tipo: "gram", titulo: "Verbos y nombres precisos",
      idea: "Cambia los verbos y nombres comodín por otros precisos.",
      intro: "En lugar de montrer, dire, faire, être, il y a:",
      tabla: [["Académico", "En vez de · español", "Uso"], [
        ["mettre en évidence", "montrer · poner de relieve", "mostrar"],
        ["affirmer, souligner", "dire · afirmar, subrayar", "decir"],
        ["mener, réaliser", "faire · llevar a cabo", "hacer"],
        ["On a mené une enquête.", "On a fait une enquête · se llevó a cabo una encuesta", "hacer (en pasado)"],
        ["constituer, s'avérer", "être · constituir, resultar", "ser"],
        ["on observe, il existe", "il y a · se observa, existe", "haber"],
        ["un élément, un facteur", "une chose, un truc · un elemento, un factor", "nombre preciso"]
      ]],
      regla: ["Cette hypothèse s'avère fausse. (resulta falsa)", "«nous» de autor o impersonal en lugar de «je»: Nous examinerons d'abord…", "Matiza: dans une certaine mesure, semble-t-il."] },
    { id: "eviter", tipo: "gram", titulo: "Lo que hay que evitar",
      idea: "Evita generalizaciones, palabras familiares y anglicismos.",
      intro: "Bajan la nota aunque las ideas sean buenas.",
      tabla: [["Mejor", "En vez de", "Por qué"], [
        ["Une partie des chercheurs estime que…", "Tout le monde sait que…", "generalización"],
        ["un retour, un avis", "un feedback", "anglicismo"],
        ["une échéance", "une deadline", "anglicismo"],
        ["un défi", "un challenge", "anglicismo"],
        ["une réunion", "un meeting", "anglicismo"],
        ["un courriel", "un email", "anglicismo"]
      ]],
      regla: ["Nada de ça, super, trop, plein de, hein.", "Nada de «Cette étude, elle…»: sin repetir el sujeto."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Errores típicos.",
      errores: [
        ["C'est super important.", "Il s'agit d'un enjeu majeur.", "Sin palabras familiares."],
        ["Cette étude montre des trucs.", "Cette étude met en évidence plusieurs résultats.", "Precisión."],
        ["Les gens pensent que…", "Une partie de la population estime que…", "Sin generalizar."]
      ] }
  ],
  ejemplos: [
    { sit: "Hazlo académico: «Cette étude montre des choses intéressantes.»", resp: "Cette étude met en évidence plusieurs résultats significatifs.", pasos: ["montrer → mettre en évidence.", "choses → résultats significatifs."], porque: "Verbo y nombre precisos." },
    { sit: "«Le chômage est la principale préoccupation des jeunes.» (más preciso que est)", resp: "Le chômage constitue la principale préoccupation des jeunes.", pasos: ["être → constituer."], porque: "Verbo académico." },
    { sit: "Reemplaza «deadline».", resp: "échéance", pasos: ["Anglicismo → palabra francesa."], porque: "Registro académico." }
  ],
  comprueba: [
    { q: "«montrer» más académico:", o: ["mettre en évidence", "faire voir"], a: 0, b: "verbes", porque: "Verbo preciso." },
    { q: "«feedback» →", o: ["retour", "feed-back"], a: 0, b: "eviter", porque: "Sin anglicismo." },
    { q: "«Tout le monde sait que…» es…", o: ["una generalización a evitar", "académico"], a: 0, b: "eviter", porque: "Generaliza." }
  ],
  practica: [
    { fase: "guiada", c: ["ac-verbes"], k: "choice", ask: "Elige la versión académica.", q: "« Cette étude montre des choses intéressantes. »", o: ["Cette étude met en évidence plusieurs résultats significatifs.", "Cette étude montre des trucs intéressants.", "Cette étude, elle montre plein de choses !"], a: 0, pista: "Verbo y nombre precisos.", why: "<b>met en évidence</b>." },
    { fase: "guiada", c: ["ac-eviter"], k: "choice", ask: "Reemplaza el anglicismo.", q: "« Nous attendons votre feedback. »", o: ["votre retour", "votre feed-back", "votre réponse feedback"], a: 0, pista: "Palabra francesa.", why: "<b>retour</b>." },
    { fase: "indep", c: ["ac-eviter"], k: "choice", ask: "Reemplaza «deadline».", q: "Elige:", o: ["échéance", "dead-ligne", "délai final line"], a: 0, why: "<b>échéance</b>." },
    { fase: "indep", c: ["ac-eviter"], k: "choice", ask: "¿Cuál evita la generalización?", q: "Elige:", o: ["Une partie des chercheurs estime que…", "Tout le monde sait que…", "Les gens pensent que…"], a: 0, why: "Matiza." },
    { fase: "indep", c: ["ac-verbes"], k: "choice", ask: "Elige el verbo.", q: "« Cette hypothèse ___ fausse. » (resultar)", o: ["s'avère", "se révèle être que", "est révélée"], a: 0, why: "<b>s'avère</b>." },
    { fase: "indep", c: ["ac-verbes"], k: "choice", ask: "¿Cuál es académica?", q: "Elige:", o: ["Nous examinerons d'abord les causes de ce phénomène.", "Je vais d'abord regarder les causes du truc.", "On va voir les causes, hein."], a: 0, why: "«nous» de autor y léxico preciso." },
    { fase: "indep", c: ["ac-eviter"], k: "match", ask: "Une el anglicismo y la palabra francesa.", q: "Anglicismo → francés", pairs: [["feedback", "retour"], ["deadline", "échéance"], ["challenge", "défi"], ["meeting", "réunion"]], why: "Registro académico." },
    { fase: "aplica", c: ["ac-verbes"], k: "choice", ask: "Elige el verbo.", ctx: "Corriges tu ensayo.", q: "« Le chômage ___ la principale préoccupation des jeunes. »", o: ["constitue", "fait", "a"], a: 0, why: "<b>constitue</b>." },
    { fase: "aplica", c: ["ac-eviter"], k: "choice", ask: "Matiza.", ctx: "No quieres sonar categórico.", q: "Elige:", o: ["Cette réforme semble, dans une certaine mesure, efficace.", "Cette réforme est super efficace !"], a: 0, why: "Matiza y evita lo familiar." },
    { fase: "dominio", c: ["ac-verbes"], k: "choice", ask: "Elige.", q: "« On ___ une enquête auprès de 300 étudiants. » (llevar a cabo)", o: ["a mené", "a fait un truc"], a: 0, why: "<b>mener</b> une enquête." },
    { fase: "dominio", c: ["ac-eviter"], k: "choice", ask: "Reemplaza «email».", q: "Elige:", o: ["courriel", "mél-email"], a: 0, why: "<b>courriel</b>." },
    { fase: "dominio", c: ["ac-eviter", "ac-verbes"], k: "choice", ask: "¿Cuál es académica?", q: "Elige:", o: ["Il s'agit d'un enjeu majeur.", "C'est super important."], a: 0, why: "Registro académico." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche"], previo: ["courriel"] }
};

/* Lección 26 · Citar las fuentes (retoma el compte rendu) */
window.__ENSENA["citer"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Citer ses sources",
  roles: {},
  objetivo: {
    que: "Vas a citar y parafrasear con su fuente, con la tipografía francesa, y a distinguirlo del plagio.",
    corto: "Toda idea ajena lleva su fuente.",
    podras: ["Integrar una cita con comillas francesas.", "Parafrasear indicando la fuente.", "Escribir una referencia autor-fecha."],
    iconos: ["ic2/libros", "ic2/lapiz", "m2d/senalar"],
    previos: ["El compte rendu y sus verbos introductores (lección anterior)."],
    capacidad: "Ahora citas como en un trabajo universitario y evitas el plagio."
  },
  requiere: ["cr-verbes"],
  recupera: ["cr-verbes", "rs-regles"],
  conceptos: {
    "ci-trois": { n: "Cita, paráfrasis y plagio", b: "trois" },
    "ci-typo": { n: "Comillas, cortes y referencias", b: "typo" }
  },
  video: {
    titulo: "Citar las fuentes", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/libros", grande: "« … »", seg: [
        { es: "Hola. En la universidad, toda idea ajena lleva su fuente. Hay dos maneras de hacerlo." } ] },
      { v: "dos",
        a: { tag: "citation", fr: "Selon l'auteure, « la lecture reste un acte de liberté ».", es: "las mismas palabras, entre comillas, con la fuente" },
        b: { tag: "paraphrase", fr: "D'après l'auteure, lire permet de penser librement.", es: "tus palabras, sin comillas, con la fuente" },
        seg: [
          { es: "La cita copia las palabras exactas, entre comillas francesas:", p: 1 },
          { fr: "Selon l'auteure, « la lecture reste un acte de liberté ».", p: 1 },
          { es: "La paráfrasis reformula, sin comillas, pero también con la fuente.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", es: true, q: "Copiar sin comillas ni fuente es…", o: ["plagio", "paráfrasis"], a: 0,
        bien: "¡Exacto! Y se sanciona aunque sea sin querer.", mal: "Sin comillas ni fuente es plagio.",
        seg: [ { es: "Pausa. ¿Qué es copiar sin comillas ni fuente?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["« … »", "[…]", "(Garnier et Savage, 2018, p. 45)"], seg: [
        { es: "Comillas francesas, corchetes para cortar y la referencia autor, año y página.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Una frase copiada", img: "bg-biblioteca", yo: "laura",
    escena: "Madame Roche encuentra en el trabajo de Laura una frase idéntica a la de un artículo.",
    pj: __PJ,
    lineas: [
      ["tutrice", "Cette phrase vient d'un article, mais il n'y a ni guillemets ni source.", "Esta frase viene de un artículo, pero no hay comillas ni fuente."],
      ["laura", "Je ne voulais pas copier…", "No quería copiar…"],
      ["tutrice", "C'est quand même du plagiat. Citez ou reformulez, avec la source.", "Igual es plagio. Cite o reformule, con la fuente."],
      ["laura", "Des guillemets et l'auteur, ou mes mots et l'auteur.", "Comillas y el autor, o mis palabras y el autor."]
    ],
    fijate: "Fíjate: en la síntesis del DALF no se cita; se reformula."
  },
  ensena: [
    { id: "trois", tipo: "gram", titulo: "Cita, paráfrasis y plagio",
      idea: "Cita = palabras exactas entre comillas + fuente. Paráfrasis = tus palabras + fuente. Sin fuente = plagio.",
      intro: "Lo que cambia son las comillas; la fuente va siempre.",
      tabla: [["Procédé", "¿Comillas? ¿Fuente?", "Exemple"], [
        ["une citation", "sí · sí", "Selon l'auteure, « la lecture reste un acte de liberté »."],
        ["une paraphrase", "no · sí", "D'après l'auteure, lire permet de penser librement."],
        ["du plagiat", "no · no", "La lecture reste un acte de liberté. (copiada)"]
      ]],
      regla: ["En la síntesis del DALF C1 no se cita: se reformula.", "El plagio se sanciona aunque sea involuntario."] },
    { id: "typo", tipo: "uso", titulo: "Comillas, cortes y referencias",
      idea: "Comillas francesas « » con espacio, […] para cortar, [palabra] para añadir y (Autor, año, p.) como referencia.",
      intro: "Así se ve una cita bien escrita.",
      pares: [
        ["« Le travail […] reste central. »", "Corte: […]"],
        ["« Les étudiants [de licence] lisent moins. »", "Añadido de quien cita: [ ]"],
        ["(Garnier et Savage, 2018, p. 45)", "Referencia autor-fecha"]
      ],
      regla: ["Las comillas francesas « » llevan un espacio dentro.", "Nada de comillas inglesas \" \" en un texto francés."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Errores típicos.",
      errores: [
        ["Copier sans guillemets ni source", "Guillemets + source, ou paraphrase + source", "Eso es plagio."],
        ["\"la lecture\"", "« la lecture »", "Comillas francesas."],
        ["(...)", "[…]", "El corte va entre corchetes."]
      ] }
  ],
  ejemplos: [
    { sit: "Integra la cita «la lecture reste un acte de liberté» de la autora.", resp: "Selon l'auteure, « la lecture reste un acte de liberté ».", pasos: ["Selon + autora.", "Comillas francesas con espacio."], porque: "Cita correcta." },
    { sit: "Parafrasea la misma idea.", resp: "D'après l'auteure, lire permet de penser librement.", pasos: ["Reformula.", "Sin comillas, con la fuente."], porque: "Paráfrasis." },
    { sit: "Escribe la referencia: Garnier y Savage, 2018, página 45.", resp: "(Garnier et Savage, 2018, p. 45)", pasos: ["Autor, año, página."], porque: "Formato autor-fecha." }
  ],
  comprueba: [
    { q: "Paráfrasis →", o: ["tus palabras + fuente, sin comillas", "copia sin comillas"], a: 0, b: "trois", porque: "Siempre con fuente." },
    { q: "Para cortar una cita:", o: ["[…]", "(...)"], a: 0, b: "typo", porque: "Corchetes." },
    { q: "Comillas en francés:", o: ["« »", "\" \""], a: 0, b: "typo", porque: "Comillas francesas." }
  ],
  practica: [
    { fase: "guiada", c: ["ci-typo"], k: "choice", ask: "¿Cuál está bien integrada?", q: "Elige:", o: ["Selon l'auteure, « la lecture reste un acte de liberté ».", "Selon l'auteure, \"la lecture reste un acte de liberté\".", "Selon l'auteure la lecture reste un acte de liberté."], a: 0, pista: "Comillas francesas.", why: "« » con espacio." },
    { fase: "guiada", c: ["ci-trois"], k: "choice", es: true, ask: "¿Qué es copiar sin comillas ni fuente?", q: "Elige:", o: ["plagio", "una paráfrasis", "una síntesis"], a: 0, pista: "Sin fuente…", why: "Plagio." },
    { fase: "indep", c: ["ci-typo"], k: "choice", ask: "Para señalar un pasaje suprimido:", q: "Elige:", o: ["[…]", "(...)", "etc."], a: 0, why: "<b>[…]</b>." },
    { fase: "indep", c: ["ci-trois"], k: "choice", es: true, ask: "Una paráfrasis…", q: "Elige:", o: ["reformula e indica la fuente, sin comillas", "copia el texto sin comillas", "no necesita fuente"], a: 0, why: "Siempre con fuente." },
    { fase: "indep", c: ["ci-typo"], k: "choice", ask: "Referencia autor-fecha:", q: "Elige:", o: ["(Garnier et Savage, 2018, p. 45)", "(p. 45 Garnier 2018 et Savage)", "[Garnier-Savage-2018]"], a: 0, why: "Autor, año, página." },
    { fase: "indep", c: ["ci-typo"], k: "choice", es: true, ask: "« Les étudiants [de licence] lisent moins. » Los corchetes indican…", q: "Elige:", o: ["un añadido de quien cita", "la cita de otro autor", "un error del autor"], a: 0, why: "Añadido." },
    { fase: "indep", c: ["ci-trois"], k: "choice", es: true, ask: "En la síntesis del DALF C1…", q: "Elige:", o: ["se reformula, no se cita palabra por palabra", "se copian las frases clave", "se cita cada documento entre comillas"], a: 0, why: "Se reformula." },
    { fase: "aplica", c: ["ci-trois"], k: "choice", ask: "Parafrasea con la fuente.", ctx: "Quieres usar la idea de la autora sin comillas.", q: "Elige:", o: ["D'après l'auteure, lire permet de penser librement.", "La lecture reste un acte de liberté.", "« lire permet de penser librement »"], a: 0, why: "Reformula y nombra la fuente." },
    { fase: "aplica", c: ["ci-typo"], k: "sort", ask: "¿Cita, paráfrasis o plagio?", q: "Clasifica.", cats: ["citation", "paraphrase", "plagiat"], items: [["Selon l'auteure, « la lecture reste un acte de liberté ».", 0], ["D'après l'auteure, lire permet de penser librement.", 1], ["La lecture reste un acte de liberté. (copiada, sin fuente)", 2]], why: "Comillas y fuente deciden." },
    { fase: "dominio", c: ["ci-typo"], k: "choice", ask: "Comillas correctas:", q: "Elige:", o: ["« texte »", "\"texte\""], a: 0, why: "Comillas francesas." },
    { fase: "dominio", c: ["ci-trois"], k: "choice", es: true, ask: "Un plagio involuntario…", q: "Elige:", o: ["también se sanciona", "está permitido"], a: 0, why: "Se sanciona." },
    { fase: "dominio", c: ["ci-trois", "ci-typo"], k: "choice", es: true, ask: "La paráfrasis lleva…", q: "Elige:", o: ["la fuente, sin comillas", "comillas, sin fuente"], a: 0, why: "Fuente siempre." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche", "Garnier", "Savage"], previo: ["2018", "45", "p", "texte"] }
};

/* Lección 27 · La síntesis (retoma résumé y conectores de confrontación) */
window.__ENSENA["synth"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "La synthèse",
  roles: {},
  objetivo: {
    que: "Vas a cruzar varios documentos en unas 220 palabras, comparando lo que dicen, sin opinar ni copiar.",
    corto: "Cruzar documentos, no resumirlos uno por uno.",
    podras: ["Conocer el formato del DALF C1.", "Organizar un plan temático: convergencias y divergencias.", "Usar las fórmulas de confrontación."],
    iconos: ["ic2/libros", "m2d/escribiendo", "ic2/birrete"],
    previos: ["El résumé (lección 23) y citar las fuentes (lección 26)."],
    capacidad: "Ahora puedes escribir la síntesis, primera parte del escrito del DALF C1."
  },
  requiere: ["rs-regles", "ci-trois"],
  recupera: ["rs-tri", "co-opp"],
  conceptos: {
    "sy-format": { n: "El formato de la síntesis", b: "format" },
    "sy-confr": { n: "Confrontar los documentos", b: "confr" }
  },
  video: {
    titulo: "La síntesis", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/libros", grande: "≈ 220 mots", seg: [
        { es: "Hola. En el DALF C1 lees varios documentos, unas mil palabras, y escribes una síntesis de unas doscientas veinte." } ] },
      { v: "dos",
        a: { tag: "así no", fr: "Le document 1 dit… Le document 2 dit…", es: "un résumé por documento" },
        b: { tag: "así sí", fr: "Les deux auteurs s'accordent à dire que…", es: "idea por idea, cruzando los documentos" },
        seg: [
          { es: "No resumas un documento tras otro.", p: 1 },
          { es: "Organiza por ideas: en qué coinciden y en qué se oponen.", p: 2 },
          { fr: "Les deux auteurs s'accordent à dire que…", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", es: true, q: "¿Puedes dar tu opinión en la síntesis?", o: ["No", "Sí, al final"], a: 0,
        bien: "¡Exacto! La opinión va en el ensayo.", mal: "En la síntesis no: tu opinión va en el ensayo.",
        seg: [ { es: "Pausa. ¿Va tu opinión en la síntesis?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["titre", "convergences", "divergences", "≈ 220 mots"], seg: [
        { es: "Título, introducción, convergencias, divergencias y una conclusión breve. Sin opinión.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Dos résumés seguidos", img: "bg-biblioteca", yo: "laura",
    escena: "Laura entrega una síntesis que resume el primer documento y luego el segundo.",
    pj: __PJ,
    lineas: [
      ["tutrice", "Vous résumez le document 1, puis le document 2.", "Resume el documento 1 y luego el documento 2."],
      ["laura", "Ce n'est pas une synthèse ?", "¿No es una síntesis?"],
      ["tutrice", "Non. Il faut les confronter : où ils s'accordent, où ils s'opposent.", "No. Hay que confrontarlos: dónde coinciden, dónde se oponen."],
      ["laura", "Donc un plan par idées, pas par documents.", "Entonces un plan por ideas, no por documentos."]
    ],
    fijate: "Fíjate: es el error más frecuente en el DALF C1."
  },
  ensena: [
    { id: "format", tipo: "gram", titulo: "El formato",
      idea: "Unas 220 palabras con título, introducción, desarrollo por ideas y conclusión breve, sin opinión.",
      intro: "Comparada con el ensayo, que viene justo después:",
      tabla: [["", "Synthèse", "Essai"], [
        ["Longueur", "environ 220 mots", "250 mots minimum"],
        ["Contenu", "les idées des documents", "vos arguments et vos exemples"],
        ["Opinion", "interdite", "attendue"],
        ["Plan", "thématique", "argumentatif"]
      ]],
      regla: ["Plan: un titre, une introduction, des convergences, des divergences, une conclusion brève.", "Al final indicas el número de palabras.", "Nada de información externa ni citas copiadas."] },
    { id: "confr", tipo: "uso", titulo: "Confrontar los documentos",
      idea: "Cada párrafo trata una idea y dice qué documentos coinciden o se oponen.",
      intro: "Fórmulas para cruzar:",
      pares: [
        ["Les deux auteurs s'accordent à dire que…", "Ambos autores coinciden en que…"],
        ["Contrairement au premier document, le second…", "A diferencia del primer documento, el segundo…"],
        ["alors que, tandis que, en revanche", "mientras que, en cambio"]
      ],
      regla: ["Convergencia: s'accordent, de même, également.", "Divergencia: contrairement à, alors que, en revanche."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Errores típicos.",
      errores: [
        ["Le document 1 dit… le document 2 dit…", "Les deux auteurs s'accordent… mais divergent sur…", "Confronta, no resumas por separado."],
        ["Moi aussi, je pense que…", "(ninguna opinión)", "La opinión va en el ensayo."],
        ["Un exemple personnel", "Seulement les documents", "Nada externo."]
      ] }
  ],
  ejemplos: [
    { sit: "Los dos autores piensan lo mismo.", resp: "Les deux auteurs s'accordent à dire que…", pasos: ["Convergencia."], porque: "Fórmula de acuerdo." },
    { sit: "La socióloga piensa lo contrario que el economista.", resp: "Contrairement à l'économiste, la sociologue estime que…", pasos: ["Divergencia: contrairement à."], porque: "Fórmula de oposición." },
    { sit: "Ordena el plan.", resp: "titre, introduction, convergences, divergences, conclusion", pasos: ["Primero lo común, luego lo opuesto."], porque: "Plan temático." }
  ],
  comprueba: [
    { q: "Longitud de la síntesis:", o: ["unas 220 palabras", "unas 80 palabras"], a: 0, b: "format", porque: "≈ 220." },
    { q: "Se organiza…", o: ["idea por idea", "documento por documento"], a: 0, b: "confr", porque: "Plan temático." },
    { q: "La opinión…", o: ["está prohibida", "va en la conclusión"], a: 0, b: "format", porque: "Va en el ensayo." }
  ],
  practica: [
    { fase: "guiada", c: ["sy-format"], k: "choice", es: true, ask: "Longitud de la síntesis en el DALF C1:", q: "Elige:", o: ["unas 220 palabras", "unas 80 palabras", "500 palabras mínimo"], a: 0, pista: "Algo menos que el ensayo.", why: "≈ 220." },
    { fase: "guiada", c: ["sy-confr"], k: "choice", ask: "Los dos autores opinan lo mismo.", q: "Elige:", o: ["Les deux auteurs s'accordent à dire que…", "Le document 1 dit ça et le 2 aussi.", "Moi aussi, je pense que…"], a: 0, pista: "Fórmula de acuerdo.", why: "Convergencia." },
    { fase: "indep", c: ["sy-confr"], k: "choice", es: true, ask: "En una síntesis…", q: "Elige:", o: ["se confrontan los documentos idea por idea", "se resume cada documento uno tras otro", "se da la opinión en la conclusión"], a: 0, why: "Plan temático." },
    { fase: "indep", c: ["sy-confr"], k: "choice", ask: "Para oponer dos puntos de vista:", q: "Elige:", o: ["Contrairement à l'économiste, la sociologue estime que…", "Comme l'économiste, la sociologue estime que…", "L'économiste et la sociologue, c'est pareil."], a: 0, why: "Divergencia." },
    { fase: "indep", c: ["sy-format"], k: "choice", es: true, ask: "¿Puedes añadir un ejemplo personal?", q: "Elige:", o: ["No: solo el contenido de los documentos", "Sí, para enriquecer", "Sí, en la introducción"], a: 0, why: "Nada externo." },
    { fase: "indep", c: ["sy-format"], k: "choice", ask: "La síntesis debe tener…", q: "Elige:", o: ["un titre", "une signature", "une formule de politesse"], a: 0, why: "<b>un titre</b>." },
    { fase: "aplica", c: ["sy-format"], k: "order", ask: "Ordena el plan de la síntesis.", ctx: "Preparas la síntesis del DALF blanco.", tokens: ["Titre", "Introduction : thème et problématique", "Convergences", "Divergences", "Conclusion brève"], why: "Plan temático." },
    { fase: "aplica", c: ["sy-format", "sy-confr"], k: "sort", ask: "¿Síntesis o ensayo?", q: "Clasifica.", cats: ["synthèse", "essai"], items: [["confronter les documents", 0], ["donner votre avis", 1], ["environ 220 mots", 0], ["250 mots minimum", 1], ["aucune information extérieure", 0], ["vos propres exemples", 1]], why: "Opinión solo en el ensayo." },
    { fase: "aplica", c: ["sy-confr"], k: "choice", ask: "Elige el conector de oposición.", ctx: "El primer documento celebra el teletrabajo; el segundo lo critica.", q: "Le premier document le célèbre, ___ le second le critique.", o: ["alors que", "de même", "également"], a: 0, why: "<b>alors que</b>." },
    { fase: "dominio", c: ["sy-confr"], k: "choice", ask: "Conector de oposición:", q: "Elige:", o: ["en revanche", "de même"], a: 0, why: "<b>en revanche</b>." },
    { fase: "dominio", c: ["sy-format"], k: "choice", es: true, ask: "Al final de la síntesis indicas…", q: "Elige:", o: ["el número de palabras", "tu opinión"], a: 0, why: "Número de palabras." },
    { fase: "dominio", c: ["sy-format", "sy-confr"], k: "choice", es: true, ask: "El error más frecuente es…", q: "Elige:", o: ["resumir documento por documento", "poner título"], a: 0, why: "Hay que confrontar." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche", "DALF"], previo: ["220", "250"] }
};

/* Lección 28 · El ensayo argumentativo (retoma argumentar y los planes) */
window.__ENSENA["essai"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "L'essai argumentatif",
  roles: {},
  objetivo: {
    que: "Vas a escribir el ensayo del DALF C1: tu posición clara y matizada, con argumentos, ejemplos y la forma que pide la consigna.",
    corto: "Ahora sí: tu opinión, bien defendida.",
    podras: ["Respetar la forma pedida: artículo, carta, contribución.", "Escribir una tesis clara y matizada.", "Construir párrafos con su idea directriz."],
    iconos: ["m2d/escribiendo", "ic2/birrete", "ic2/lapiz"],
    previos: ["Argumentar (lección 20), los planes (lección 21) y la síntesis (lección 27)."],
    capacidad: "Ahora puedes escribir la segunda parte del escrito del DALF C1."
  },
  requiere: ["ar-par", "pl-choix", "sy-format"],
  recupera: ["ar-nuance", "pl-intro"],
  conceptos: {
    "es-forme": { n: "La forma y la tesis", b: "forme" },
    "es-par": { n: "Párrafos y conclusión", b: "par" }
  },
  video: {
    titulo: "El ensayo", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/escribiendo", grande: "250 mots", seg: [
        { es: "Hola. Después de la síntesis viene el ensayo: mínimo doscientas cincuenta palabras, y ahora tu opinión sí cuenta." } ] },
      { v: "frase", filas: [
          { nota: "título y párrafos", p: 1, partes: [["un article", "-", 1]] },
          { nota: "saludo, despedida y firma", p: 1, partes: [["une lettre", "-", 1]] },
          { nota: "te diriges a los participantes", p: 1, partes: [["une contribution", "-", 1]] } ], seg: [
        { es: "Primero mira la forma que pide la consigna: artículo, carta o contribución a un debate. La forma también se evalúa.", p: 1 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "Un párrafo empieza por…", o: ["l'idée directrice", "un exemple"], a: 0,
        bien: "¡Sí! Primero la idea, luego el ejemplo.", mal: "Primero la idea directriz; el ejemplo la apoya.",
        seg: [ { es: "Pausa. ¿Por dónde empieza un buen párrafo?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Je suis convaincu que", "Tout d'abord", "En définitive"], seg: [
        { es: "Una tesis clara y matizada, párrafos con su idea, y una conclusión que abre.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Un artículo sin título", img: "bg-biblioteca", yo: "laura",
    escena: "La consigna pedía un artículo para un periódico; Laura escribió un texto sin título.",
    pj: __PJ,
    lineas: [
      ["tutrice", "La consigne demande un article. Où est le titre ?", "La consigna pide un artículo. ¿Dónde está el título?"],
      ["laura", "Je pensais que seules les idées comptaient.", "Pensaba que solo contaban las ideas."],
      ["tutrice", "La forme fait partie de la note. Et votre thèse doit être claire.", "La forma forma parte de la nota. Y su tesis debe ser clara."],
      ["laura", "Un titre, une thèse nuancée et des paragraphes.", "Un título, una tesis matizada y párrafos."]
    ],
    fijate: "Fíjate: en la síntesis no opinabas; aquí es lo que se espera."
  },
  ensena: [
    { id: "forme", tipo: "gram", titulo: "La forma y la tesis",
      idea: "Respeta la forma pedida y defiende una posición clara pero matizada.",
      intro: "Cada forma tiene sus marcas:",
      tabla: [["Forma", "Qué exige", "Ejemplo"], [
        ["un article", "título, párrafos", "« L'IA, alliée ou menace ? »"],
        ["une lettre", "saludo, despedida, firma", "Madame, Monsieur, …"],
        ["une contribution", "dirigirse a los participantes", "Chers participants, …"]
      ]],
      regla: ["Tesis: Je suis convaincu que… / Il serait réducteur de… (matiza).", "Introducción, 2 o 3 partes, conclusión."] },
    { id: "par", tipo: "uso", titulo: "Párrafos y conclusión",
      idea: "Cada párrafo: idea directriz, explicación, ejemplo. La conclusión hace balance y abre.",
      intro: "Para ordenar y cerrar:",
      pares: [
        ["Tout d'abord… Ensuite… Enfin…", "En primer lugar… Luego… Por último…"],
        ["En définitive, l'IA peut devenir une alliée de l'université.", "Balance"],
        ["Reste à savoir si les enseignants y seront formés à temps.", "Apertura"]
      ],
      regla: ["El párrafo empieza por l'idée directrice, no por un ejemplo."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Errores típicos.",
      errores: [
        ["Un article sans titre", "Un article avec un titre", "La forma se evalúa."],
        ["Moi je dis que…", "Je suis convaincu que…", "Registro soutenu."],
        ["Voilà mon essai.", "En définitive, … Reste à savoir si…", "Conclusión real."]
      ] }
  ],
  ejemplos: [
    { sit: "Matiza: «la IA es una amenaza para la universidad».", resp: "Il serait réducteur de voir dans l'IA une simple menace pour l'université.", pasos: ["Il serait réducteur de…"], porque: "Tesis matizada." },
    { sit: "La consigna pide una carta.", resp: "Madame, Monsieur, … (formule de politesse, signature)", pasos: ["Saludo, despedida, firma."], porque: "Forma de carta." },
    { sit: "Cierra el ensayo.", resp: "En définitive, … Reste à savoir si…", pasos: ["Balance.", "Apertura."], porque: "Conclusión completa." }
  ],
  comprueba: [
    { q: "Longitud mínima del ensayo:", o: ["250 palabras", "150 palabras"], a: 0, b: "forme", porque: "250." },
    { q: "En el ensayo, tu opinión…", o: ["se espera, clara y matizada", "está prohibida"], a: 0, b: "forme", porque: "Se espera." },
    { q: "Un párrafo empieza por…", o: ["la idea directriz", "un ejemplo"], a: 0, b: "par", porque: "Idea primero." }
  ],
  practica: [
    { fase: "guiada", c: ["es-forme"], k: "choice", es: true, ask: "Longitud mínima del ensayo en el DALF C1:", q: "Elige:", o: ["250 palabras", "150 palabras", "400 palabras"], a: 0, pista: "Un poco más que la síntesis.", why: "250." },
    { fase: "guiada", c: ["es-par"], k: "choice", ask: "Un buen párrafo empieza por…", q: "Elige:", o: ["l'idée directrice", "un exemple isolé", "la conclusion"], a: 0, pista: "Primero la idea.", why: "<b>l'idée directrice</b>." },
    { fase: "indep", c: ["es-forme"], k: "choice", ask: "Fórmula de compromiso, registro sostenido:", q: "Elige:", o: ["Je suis convaincu que", "Moi je dis que", "C'est trop vrai que"], a: 0, why: "Registro académico." },
    { fase: "indep", c: ["es-forme"], k: "choice", es: true, ask: "La consigna pide un artículo para un periódico:", q: "Necesitas…", o: ["un título y forma de artículo", "una fórmula de cortesía final", "escribir sin párrafos"], a: 0, why: "Título." },
    { fase: "indep", c: ["es-forme"], k: "order", ask: "Ordena la frase que matiza.", tokens: ["Il serait réducteur", "de voir dans l'IA", "une simple menace", "pour l'université."], why: "Tesis matizada." },
    { fase: "indep", c: ["es-par"], k: "choice", ask: "¿Qué conclusión conviene?", q: "Elige:", o: ["En définitive, l'IA peut devenir une alliée de l'université. Reste à savoir si les enseignants y seront formés à temps.", "Voilà mon essai.", "Et puis l'IA existe aussi dans les jeux vidéo."], a: 0, why: "Balance y apertura." },
    { fase: "aplica", c: ["es-forme"], k: "match", ask: "Une la forma y lo que exige.", ctx: "Lees tres consignas distintas.", q: "Forma → exige", pairs: [["article", "titre"], ["lettre", "signature"], ["contribution", "participants"]], why: "Cada forma, sus marcas." },
    { fase: "aplica", c: ["es-par"], k: "choice", ask: "Para enumerar tus partes:", ctx: "Escribes el desarrollo.", q: "Elige:", o: ["Tout d'abord… Ensuite… Enfin…", "Et… et… et…"], a: 0, why: "Conectores de orden." },
    { fase: "dominio", c: ["es-forme"], k: "choice", es: true, ask: "En el ensayo, tu opinión…", q: "Elige:", o: ["se espera, clara y matizada", "está prohibida"], a: 0, why: "Se espera." },
    { fase: "dominio", c: ["es-par"], k: "choice", ask: "Para abrir al final:", q: "Elige:", o: ["Reste à savoir si", "Voilà"], a: 0, why: "<b>Reste à savoir si</b>." },
    { fase: "dominio", c: ["es-forme", "es-par"], k: "choice", es: true, ask: "Carta: ¿qué no puede faltar?", q: "Elige:", o: ["saludo, despedida y firma", "un título en mayúsculas"], a: 0, why: "Marcas de la carta." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche", "IA", "DALF"], previo: ["250"] }
};

/* Lección 29 · El oral del DALF C1 (retoma notas, planes y discurso referido) */
window.__ENSENA["oralc1"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "L'oral du DALF C1",
  roles: {},
  objetivo: {
    que: "Vas a preparar el oral del DALF C1: una hora con documentos, un exposé de 8 a 10 minutos y un debate con el jurado.",
    corto: "Exponer con un plan y defender tu punto de vista.",
    podras: ["Conocer las etapas y sus tiempos.", "Anunciar el plan y hacer transiciones.", "Reformular, conceder y defender en el debate."],
    iconos: ["ic2/microfono", "m2d/senalar", "m2d/reloj"],
    previos: ["Tomar notas (lección 22) y los planes (lección 21)."],
    capacidad: "Ahora sabes cómo se organiza y se habla en el oral del DALF C1."
  },
  requiere: ["no-quoi", "pl-intro"],
  recupera: ["no-sig", "ar-nuance"],
  conceptos: {
    "or-epreuve": { n: "La prueba y el exposé", b: "epreuve" },
    "or-debat": { n: "El debate con el jurado", b: "debat" }
  },
  video: {
    titulo: "El oral del DALF C1", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/microfono", grande: "1 h + 30 min", seg: [
        { es: "Hola. El oral del DALF C1: una hora de preparación y unos treinta minutos frente al jurado." } ] },
      { v: "frase", filas: [
          { nota: "1 hora: leer, plan, notas", p: 1, partes: [["la préparation", "-", 1]] },
          { nota: "8 a 10 minutos", p: 1, partes: [["l'exposé", "-", 1]] },
          { nota: "preguntas del jurado", p: 1, partes: [["le débat", "-", 1]] } ], seg: [
        { es: "Preparas con los documentos, presentas un exposé de ocho a diez minutos y luego debates con el jurado.", p: 1 } ] },
      { v: "pregunta", img: "m2d/pensativo", es: true, q: "Tus notas para el exposé son…", o: ["palabras clave y un plan", "un texto para leer"], a: 0,
        bien: "¡Eso! Nunca leas un texto.", mal: "Solo palabras clave y un plan: leer baja la nota.",
        seg: [ { es: "Pausa. ¿Qué llevas escrito para hablar?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Je voudrais d'abord", "J'en viens maintenant à", "Pour conclure"], seg: [
        { es: "Anuncia el plan, marca cada transición y concluye. En el debate, reformula, concede y defiende.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Un exposé leído", img: "bg-biblioteca", yo: "laura",
    escena: "En el simulacro, Laura lee su exposé palabra por palabra.",
    pj: __PJ,
    lineas: [
      ["tutrice", "Vous avez lu un texte entier. Le jury veut vous entendre parler.", "Leyó un texto entero. El jurado quiere oírla hablar."],
      ["laura", "J'ai peur d'oublier mes idées.", "Me da miedo olvidar mis ideas."],
      ["tutrice", "Notez des mots-clés et votre plan. Et annoncez chaque partie.", "Anote palabras clave y su plan. Y anuncie cada parte."],
      ["laura", "Je voudrais d'abord… J'en viens maintenant à… Pour conclure…", "Quisiera primero… Paso ahora a… Para concluir…"]
    ],
    fijate: "Fíjate: el oral pesa tanto como el escrito en el DALF C1."
  },
  ensena: [
    { id: "epreuve", tipo: "gram", titulo: "La prueba y el exposé",
      idea: "Una hora para preparar, un exposé de 8 a 10 minutos con plan anunciado y después el debate.",
      intro: "Las tres etapas:",
      tabla: [["Étape", "Durée", "Qué se espera"], [
        ["la préparation", "1 heure", "leer, plan, palabras clave"],
        ["l'exposé", "8 à 10 minutes", "plan claro y tu punto de vista apoyado en los documentos"],
        ["le débat", "el resto", "responder, matizar, defender"]
      ]],
      regla: ["Notas: des mots-clés et un plan, nunca un texto para leer.", "Transiciones: Je voudrais d'abord… · J'en viens maintenant à… · Pour conclure…"] },
    { id: "debat", tipo: "uso", titulo: "El debate con el jurado",
      idea: "Reformula la pregunta, concede una parte y defiende tu posición, siempre de «vous».",
      intro: "Fórmulas que salvan el debate:",
      pares: [
        ["Si je comprends bien, vous me demandez si…", "Si entiendo bien, me pregunta si…"],
        ["Je vous l'accorde en partie ; cependant, …", "Se lo concedo en parte; sin embargo…"],
        ["Permettez-moi de nuancer.", "Permítame matizar."]
      ],
      regla: ["Nada de «Quoi ?» ni «Tu peux répéter ?»."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Errores típicos.",
      errores: [
        ["Lire un texte rédigé", "Parler à partir de mots-clés", "El jurado evalúa cómo hablas."],
        ["Euh, et après…", "J'en viens maintenant à…", "Transición explícita."],
        ["Non, vous avez tort.", "Je vous l'accorde en partie ; cependant, …", "Concede antes de defender."]
      ] }
  ],
  ejemplos: [
    { sit: "Anuncia el plan.", resp: "Je voudrais d'abord présenter les documents, puis analyser leurs points de vue, avant de donner ma position.", pasos: ["d'abord, puis, avant de."], porque: "Plan anunciado." },
    { sit: "No entendiste bien la pregunta.", resp: "Si je comprends bien, vous me demandez si…", pasos: ["Reformula."], porque: "Ganas tiempo y precisión." },
    { sit: "El jurado te contradice.", resp: "Je vous l'accorde en partie ; cependant, …", pasos: ["Concede.", "Defiende."], porque: "Interacción madura." }
  ],
  comprueba: [
    { q: "Preparación:", o: ["1 hora", "10 minutos"], a: 0, b: "epreuve", porque: "1 hora." },
    { q: "El exposé dura…", o: ["8 a 10 minutos", "2 minutos"], a: 0, b: "epreuve", porque: "8 a 10." },
    { q: "El jurado te contradice:", o: ["concedes y defiendes", "dices que se equivoca"], a: 0, b: "debat", porque: "Concede y defiende." }
  ],
  practica: [
    { fase: "guiada", c: ["or-epreuve"], k: "choice", es: true, ask: "Duración de la preparación:", q: "Elige:", o: ["1 hora", "10 minutos", "3 horas"], a: 0, pista: "Una hora.", why: "1 hora." },
    { fase: "guiada", c: ["or-epreuve"], k: "choice", ask: "Para pasar a la segunda parte:", q: "Elige:", o: ["J'en viens maintenant à…", "Euh, et après…", "Deuxième chose, bon…"], a: 0, pista: "Transición explícita.", why: "<b>J'en viens maintenant à</b>." },
    { fase: "indep", c: ["or-epreuve"], k: "choice", es: true, ask: "El exposé dura…", q: "Elige:", o: ["8 a 10 minutos", "2 minutos", "30 minutos"], a: 0, why: "8 a 10." },
    { fase: "indep", c: ["or-epreuve"], k: "choice", ask: "Tus notas son…", q: "Elige:", o: ["des mots-clés et un plan", "un texte complet à lire", "inexistantes"], a: 0, why: "<b>des mots-clés</b>." },
    { fase: "indep", c: ["or-debat"], k: "choice", ask: "El jurado contesta tu idea:", q: "Elige:", o: ["Je vous l'accorde en partie ; cependant, …", "Non, vous avez tort.", "Je ne sais pas."], a: 0, why: "Concede y defiende." },
    { fase: "indep", c: ["or-debat"], k: "choice", ask: "No entendiste bien la pregunta:", q: "Elige:", o: ["Si je comprends bien, vous me demandez si…", "Quoi ?", "Tu peux répéter ?"], a: 0, why: "Reformula, de «vous»." },
    { fase: "aplica", c: ["or-epreuve"], k: "order", ask: "Ordena el anuncio del plan.", ctx: "Empiezas tu exposé.", tokens: ["Je voudrais d'abord", "présenter les documents,", "puis", "analyser leurs points de vue,", "avant de", "donner ma position."], why: "Plan anunciado." },
    { fase: "aplica", c: ["or-debat"], k: "choice", ask: "Quieres matizar lo que dice el jurado.", ctx: "Debate final.", q: "Elige:", o: ["Permettez-moi de nuancer.", "C'est faux, voilà."], a: 0, why: "Registro y matiz." },
    { fase: "dominio", c: ["or-epreuve"], k: "choice", es: true, ask: "En el exposé, tu punto de vista…", q: "Elige:", o: ["se espera, apoyado en los documentos", "está prohibido"], a: 0, why: "Se espera." },
    { fase: "dominio", c: ["or-epreuve"], k: "choice", ask: "Para cerrar el exposé:", q: "Elige:", o: ["Pour conclure", "Bon, voilà"], a: 0, why: "<b>Pour conclure</b>." },
    { fase: "dominio", c: ["or-debat"], k: "choice", ask: "Fórmula para conceder:", q: "Elige:", o: ["Je vous l'accorde en partie", "Vous avez tort"], a: 0, why: "Concede." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche", "DALF"] }
};

/* Lección 30 · Proyecto: síntesis del teletrabajo (aplica synth) */
window.__ENSENA["p-synth"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Projet : synthèse sur le télétravail",
  roles: { conn: "conector", suj: "sujeto", verbe: "verbo", sub: "idea" },
  objetivo: {
    que: "Vas a preparar, paso a paso, la síntesis de dos documentos opuestos sobre el teletrabajo.",
    corto: "Proyecto: tu primera síntesis, guiada.",
    podras: ["Encontrar el tema común y la divergencia.", "Proponer un título y una problemática.", "Confrontar sin dar tu opinión."],
    iconos: ["m2d/escribiendo", "ic2/libros", "ic2/trofeo"],
    previos: ["La síntesis (lección 27) y la reformulación (lección 14)."],
    capacidad: "Ahora sabes preparar una síntesis completa a partir de dos documentos."
  },
  requiere: ["sy-format", "sy-confr", "rf-lex"],
  recupera: ["sy-confr", "rf-lex"],
  conceptos: {
    "ps-reperer": { n: "Tema, convergencia y divergencia", b: "metodo" },
    "ps-rediger": { n: "Título, problemática y confrontación", b: "rediger" }
  },
  video: {
    titulo: "Proyecto: la síntesis", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/escribiendo", grande: "Projet", seg: [
        { es: "Hola. Dos documentos sobre el teletrabajo: uno lo defiende, el otro advierte de sus riesgos. Los vas a cruzar." } ] },
      { v: "dos",
        a: { tag: "document 1", fr: "une conquête sociale", es: "hay que generalizarlo" },
        b: { tag: "document 2", fr: "seuls devant l'écran", es: "aísla: debe ser parcial y encuadrado" },
        seg: [
          { es: "Los dos reconocen ventajas, como ganar tiempo.", p: 1 },
          { es: "Pero el primero quiere generalizarlo y el segundo, limitarlo.", p: 2 } ] },
      { v: "frase", filas: [
          { partes: [["Si le premier", "conn", 1], ["le juge bénéfique,", "sub", 1], ["le second", "suj", 2], ["en souligne les risques.", "verbe", 2]] } ], seg: [
        { es: "Una frase confronta los dos puntos de vista:", p: 1 },
        { fr: "Si le premier le juge bénéfique, le second en souligne les risques.", p: 2 } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Les deux auteurs reconnaissent", "Contrairement à", "en revanche"], seg: [
        { es: "Tema común, convergencias, divergencias y nada de tu opinión. ¡A escribir en el Atelier!", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Preparar la síntesis", img: "bg-biblioteca", yo: "laura",
    escena: "Laura lee los dos documentos con Madame Roche.",
    pj: __PJ,
    lineas: [
      ["tutrice", "Quel est le thème commun ?", "¿Cuál es el tema común?"],
      ["laura", "Les effets du télétravail.", "Los efectos del teletrabajo."],
      ["tutrice", "Et où les deux documents s'opposent-ils ?", "¿Y dónde se oponen los dos documentos?"],
      ["laura", "Le premier veut le généraliser, le second le limiter.", "El primero quiere generalizarlo, el segundo limitarlo."]
    ],
    fijate: "Fíjate: los documentos están en el botón «Texte de la leçon» de cada ejercicio."
  },
  ensena: [
    { id: "metodo", tipo: "uso", titulo: "Paso 1: leer y comparar",
      idea: "Antes de escribir, encuentra el tema común, lo que comparten y lo que los separa.",
      intro: "Lo que sacas de los dos documentos:",
      pares: [
        ["les effets du télétravail", "Tema común"],
        ["Les deux auteurs reconnaissent que le télétravail fait gagner du temps.", "Convergencia: ganar tiempo"],
        ["généraliser (document 1) / partiel et encadré (document 2)", "Divergencia principal"]
      ],
      regla: ["Lee cada documento dos veces.", "Subraya los conectores: pourtant, si…, mais."] },
    { id: "rediger", tipo: "uso", titulo: "Paso 2: título, problemática, confrontación",
      idea: "El título y la problemática muestran la tensión entre los documentos; luego confrontas y reformulas.",
      intro: "Piezas de la síntesis:",
      pares: [
        ["Le télétravail : conquête sociale ou source d'isolement ?", "Título con tensión"],
        ["Dans quelle mesure le télétravail améliore-t-il réellement les conditions de travail ?", "Problemática"],
        ["un meilleur équilibre entre travail et vie privée", "Reformula «conciliation entre vie professionnelle et vie familiale»"]
      ],
      regla: ["Sin «je pense», «à mon avis»: aquí no se opina."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Errores típicos.",
      errores: [
        ["À mon avis, le télétravail…", "L'auteur du premier document estime que…", "En la síntesis no se opina."],
        ["Document 1 et document 2", "Le télétravail : conquête sociale ou source d'isolement ?", "Un título de verdad."],
        ["Copier la phrase du document", "Reformuler", "Nunca copiar."]
      ] }
  ],
  ejemplos: [
    { sit: "¿En qué coinciden?", resp: "Les deux auteurs reconnaissent que le télétravail fait gagner du temps.", pasos: ["Convergencia."], porque: "Ambos lo dicen." },
    { sit: "Confronta en una frase.", resp: "Si le premier le juge bénéfique, le second en souligne les risques.", pasos: ["Si…, …"], porque: "Divergencia." },
    { sit: "Propón un título.", resp: "Le télétravail : conquête sociale ou source d'isolement ?", pasos: ["Muestra la tensión."], porque: "Título con tensión." }
  ],
  comprueba: [
    { q: "Primero buscas…", o: ["el tema común", "tu opinión"], a: 0, b: "metodo", porque: "Tema común." },
    { q: "El título debe…", o: ["mostrar la tensión", "decir «documento 1 y 2»"], a: 0, b: "rediger", porque: "Tensión." },
    { q: "¿Puedes escribir «je pense»?", o: ["No", "Sí"], a: 0, b: "rediger", porque: "Sin opinión." }
  ],
  practica: [
    { fase: "guiada", c: ["ps-reperer"], k: "choice", ask: "¿Cuál es el tema común?", q: "Elige (los textos están en «Texte de la leçon»):", o: ["Les effets du télétravail sur les salariés et les entreprises", "La crise sanitaire", "Les dépenses de bureaux"], a: 0, pista: "Lo que tratan los dos.", why: "Tema común." },
    { fase: "guiada", c: ["ps-rediger"], k: "choice", ask: "Mejor título:", q: "Elige:", o: ["Le télétravail : conquête sociale ou source d'isolement ?", "Mon avis sur le télétravail", "Document 1 et document 2"], a: 0, pista: "Muestra la tensión.", why: "Título con tensión." },
    { fase: "indep", c: ["ps-reperer"], k: "choice", ask: "¿En qué convergen?", q: "Elige:", o: ["Le télétravail présente de réels avantages", "Il faut le généraliser à tous les métiers", "Il isole les salariés"], a: 0, why: "Ambos reconocen ventajas." },
    { fase: "indep", c: ["ps-reperer"], k: "choice", ask: "¿Divergencia principal?", q: "Elige:", o: ["Généralisation (document 1) contre usage partiel et encadré (document 2)", "Le coût des bureaux", "La date de la crise sanitaire"], a: 0, why: "Generalizar o limitar." },
    { fase: "indep", c: ["ps-rediger"], k: "choice", ask: "Mejor problemática:", q: "Elige:", o: ["Dans quelle mesure le télétravail améliore-t-il réellement les conditions de travail ?", "Le télétravail est-il bien ?", "Qui a écrit ces documents ?"], a: 0, why: "Precisa y abierta." },
    { fase: "indep", c: ["ps-rediger"], k: "choice", ask: "Reformula «une meilleure conciliation entre vie professionnelle et vie familiale».", q: "Elige:", o: ["un meilleur équilibre entre travail et vie privée", "une vie familiale professionnelle", "une conciliation meilleure"], a: 0, why: "Reformula sin copiar." },
    { fase: "aplica", c: ["ps-rediger"], k: "spot", ask: "Toca lo que sobra en la síntesis.", ctx: "Relees tu borrador.", s: "Les deux auteurs reconnaissent les avantages du télétravail , et [je] [pense] qu'il faut le généraliser .", fix: "(supprimer l'opinion personnelle)", why: "Sin opinión." },
    { fase: "aplica", c: ["ps-reperer", "ps-rediger"], k: "order", ask: "Ordena la frase que confronta.", ctx: "Párrafo de divergencias.", tokens: ["Contrairement à l'économiste,", "la psychologue", "estime que le télétravail", "doit rester", "partiel et encadré."], why: "Confrontación." },
    { fase: "dominio", c: ["ps-reperer"], k: "choice", es: true, ask: "El documento 2 sostiene que el teletrabajo…", q: "Elige:", o: ["debe ser parcial y encuadrado", "debe generalizarse"], a: 0, why: "Limitarlo." },
    { fase: "dominio", c: ["ps-rediger"], k: "choice", ask: "Frase de convergencia:", q: "Elige:", o: ["Les deux auteurs reconnaissent que le télétravail fait gagner du temps.", "À mon avis, le télétravail fait gagner du temps."], a: 0, why: "Sin opinión." },
    { fase: "dominio", c: ["ps-reperer", "ps-rediger"], k: "choice", ask: "Conector de oposición:", q: "Elige:", o: ["en revanche", "de même"], a: 0, why: "<b>en revanche</b>." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche", "Atelier"] }
};

/* Lección 31 · Proyecto: résumé de un texto sobre la IA (aplica resume) */
window.__ENSENA["p-resume"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Projet : résumé sur l'IA à l'université",
  roles: {},
  objetivo: {
    que: "Vas a resumir en 70 palabras un texto sobre la IA en la universidad, paso a paso.",
    corto: "Proyecto: un résumé real, guiado.",
    podras: ["Encontrar la tesis y la idea de cada párrafo.", "Reformular sin copiar.", "Respetar la longitud: 70 ± 10 %."],
    iconos: ["m2d/escribiendo", "ic2/libros", "ic2/trofeo"],
    previos: ["El résumé (lección 23)."],
    capacidad: "Ahora haces un résumé completo y lo redactas en el Atelier."
  },
  requiere: ["rs-regles", "rs-tri"],
  recupera: ["rs-regles", "rf-lex"],
  conceptos: {
    "pr-idees": { n: "Tesis e ideas por párrafo", b: "metodo" },
    "pr-forme": { n: "Reformular y contar", b: "forme" }
  },
  video: {
    titulo: "Proyecto: el résumé", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/escribiendo", grande: "70 mots", seg: [
        { es: "Hola. Vas a resumir en setenta palabras un texto sobre la inteligencia artificial en la universidad." } ] },
      { v: "frase", filas: [
          { nota: "párrafo 1", p: 1, partes: [["l'inquiétude des enseignants", "-", 1]] },
          { nota: "párrafo 2 · pourtant", p: 2, partes: [["interdire l'IA serait vain", "-", 2]] },
          { nota: "párrafo 3", p: 3, partes: [["repenser l'évaluation", "-", 3]] } ], seg: [
        { es: "Una idea por párrafo: la inquietud de los profesores,", p: 1 },
        { es: "luego, con pourtant, prohibir la IA sería inútil,", p: 2 },
        { es: "y por último, hay que repensar la evaluación.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", es: true, q: "70 palabras ± 10 % significa…", o: ["de 63 a 77", "de 50 a 90"], a: 0,
        bien: "¡Exacto! 70 menos 7 y 70 más 7.", mal: "El 10 % de 70 es 7: de 63 a 77.",
        seg: [ { es: "Pausa. ¿Cuántas palabras se aceptan?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["70 mots", "pourtant", "l'IA", "l'évaluation"], seg: [
        { es: "Tres ideas, en orden, con tus palabras y sin nombrar al autor. ¡Al Atelier!", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Encontrar la tesis", img: "bg-biblioteca", yo: "laura",
    escena: "Laura busca la tesis del texto con Madame Roche.",
    pj: __PJ,
    lineas: [
      ["tutrice", "Quelle est la thèse du texte ?", "¿Cuál es la tesis del texto?"],
      ["laura", "Qu'il ne faut pas interdire l'IA, mais apprendre à s'en servir.", "Que no hay que prohibir la IA, sino aprender a usarla."],
      ["tutrice", "Exact. Et le mot « pourtant » annonce ce changement.", "Exacto. Y la palabra «pourtant» anuncia ese giro."],
      ["laura", "Je garde l'opposition dans mon résumé.", "Conservo la oposición en mi résumé."]
    ],
    fijate: "Fíjate: el texto completo está en el botón «Texte de la leçon» de cada ejercicio."
  },
  ensena: [
    { id: "metodo", tipo: "uso", titulo: "Paso 1: tesis e ideas",
      idea: "Encuentra la tesis y escribe una sola idea por párrafo, en el orden del texto.",
      intro: "Lo esencial del texto:",
      pares: [
        ["Plutôt que d'interdire l'IA, l'université doit apprendre à s'en servir.", "Tesis"],
        ["la facilité de l'IA inquiète les enseignants", "Párrafo 1"],
        ["pourtant, interdire l'IA serait vain", "Párrafo 2: oposición"],
        ["il faut repenser l'évaluation", "Párrafo 3"]
      ],
      regla: ["Pourtant marca una oposición: consérvala."] },
    { id: "forme", tipo: "uso", titulo: "Paso 2: reformular y contar",
      idea: "Di lo mismo con otras palabras y cuenta: 70 palabras ± 10 %, es decir, de 63 a 77.",
      intro: "Reformular es cambiar las palabras, no la idea:",
      pares: [
        ["délèguent à la machine l'effort de penser → confient leur réflexion à l'outil", "Reformulación"],
        ["entre 63 et 77 mots", "70 ± 10 %"]
      ],
      regla: ["Sin «l'auteur pense que»: escribe la idea directamente."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Errores típicos.",
      errores: [
        ["L'auteur pense que…", "(la idea directamente)", "Sin nombrar al autor."],
        ["Copiar «délèguent à la machine»", "confient leur réflexion à l'outil", "Reformular."],
        ["Olvidar pourtant", "Garder l'opposition", "Los conectores se conservan."]
      ] }
  ],
  ejemplos: [
    { sit: "Tesis del texto.", resp: "Plutôt que d'interdire l'IA, l'université doit apprendre à s'en servir.", pasos: ["Busca el giro con pourtant."], porque: "Es lo que defiende." },
    { sit: "Reformula «délèguent à la machine l'effort même de penser».", resp: "confient leur réflexion à l'outil", pasos: ["Otras palabras, misma idea."], porque: "Sin copiar." },
    { sit: "70 palabras ± 10 %.", resp: "entre 63 et 77 mots", pasos: ["10 % de 70 = 7."], porque: "Tolerancia." }
  ],
  comprueba: [
    { q: "«Pourtant» indica…", o: ["una oposición", "una consecuencia"], a: 0, b: "metodo", porque: "Oposición." },
    { q: "70 ± 10 % →", o: ["de 63 a 77", "exactamente 70"], a: 0, b: "forme", porque: "± 7." },
    { q: "Una idea por…", o: ["párrafo", "frase del texto"], a: 0, b: "metodo", porque: "Por párrafo." }
  ],
  practica: [
    { fase: "guiada", c: ["pr-idees"], k: "choice", ask: "¿Cuál es la tesis?", q: "Elige (el texto está en «Texte de la leçon»):", o: ["Plutôt que d'interdire l'IA, l'université doit apprendre à s'en servir et repenser l'évaluation.", "L'IA va remplacer les enseignants.", "Les étudiants trichent tous avec l'IA."], a: 0, pista: "Lo que defiende el texto.", why: "La tesis." },
    { fase: "guiada", c: ["pr-forme"], k: "choice", ask: "70 palabras ± 10 %:", q: "Elige:", o: ["entre 63 et 77 mots", "entre 50 et 90 mots", "exactement 70 mots"], a: 0, pista: "10 % de 70 = 7.", why: "63 a 77." },
    { fase: "indep", c: ["pr-idees"], k: "choice", ask: "Idea esencial del primer párrafo:", q: "Elige:", o: ["La facilité offerte par l'IA inquiète les enseignants, qui craignent que les étudiants cessent de penser par eux-mêmes.", "Il suffit de quelques secondes pour traduire un article.", "Les enseignants posent deux questions."], a: 0, why: "Lo esencial, no el detalle." },
    { fase: "indep", c: ["pr-idees"], k: "choice", ask: "Idea esencial del segundo párrafo:", q: "Elige:", o: ["Interdire l'IA serait vain : il faut former les étudiants à l'utiliser avec discernement.", "Le monde professionnel utilise l'IA.", "Il faut vérifier les sources."], a: 0, why: "La idea del párrafo." },
    { fase: "indep", c: ["pr-idees"], k: "choice", ask: "Idea esencial del tercer párrafo:", q: "Elige:", o: ["Il faut aussi repenser l'évaluation, ce qui pourrait recentrer l'enseignement sur la pensée autonome.", "Les examens oraux existent déjà.", "L'IA signe la fin de l'enseignement."], a: 0, why: "La idea del párrafo." },
    { fase: "indep", c: ["pr-forme"], k: "choice", ask: "Mejor reformulación de «délèguent à la machine l'effort même de penser»:", q: "Elige:", o: ["confient leur réflexion à l'outil", "délèguent à la machine l'effort de penser", "pensent avec une machine"], a: 0, why: "Reformula sin copiar." },
    { fase: "aplica", c: ["pr-idees"], k: "choice", es: true, ask: "¿Qué conector abre el segundo párrafo?", ctx: "Relees el texto.", q: "Elige:", o: ["Pourtant: una oposición que hay que conservar", "Donc: una consecuencia", "De plus: una adición"], a: 0, why: "<b>Pourtant</b>." },
    { fase: "aplica", c: ["pr-forme"], k: "spot", ask: "Toca lo que sobra en el résumé.", ctx: "Relees tu borrador.", s: "[L'auteur] [pense] que l'université doit former les étudiants à l'IA .", fix: "(supprimer : dans un résumé, on ne nomme pas l'auteur)", why: "Sin nombrar al autor." },
    { fase: "dominio", c: ["pr-idees"], k: "choice", es: true, ask: "Tu résumé sigue…", q: "Elige:", o: ["el orden del texto", "el orden que prefieras"], a: 0, why: "Mismo orden." },
    { fase: "dominio", c: ["pr-forme"], k: "choice", es: true, ask: "Tu résumé tiene 80 palabras.", q: "Elige:", o: ["Es demasiado largo: máximo 77", "Está bien"], a: 0, why: "70 ± 7." },
    { fase: "dominio", c: ["pr-idees", "pr-forme"], k: "choice", ask: "Conector que conservas:", q: "Elige:", o: ["pourtant", "de plus"], a: 0, why: "La oposición del texto." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche", "IA", "Atelier"], previo: ["70", "63", "77"] }
};

/* Lección 32 · Proyecto: ensayo sobre la IA (aplica essai y plans) */
window.__ENSENA["p-essai"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Projet : essai sur l'IA à l'université",
  roles: {},
  objetivo: {
    que: "Vas a construir, pieza por pieza, un artículo argumentativo: «¿Es la IA una amenaza para la universidad?».",
    corto: "Proyecto: tu ensayo del DALF, pieza por pieza.",
    podras: ["Elegir el plan según la pregunta.", "Escribir problemática, gancho y concesión.", "Cerrar con balance y apertura, con título."],
    iconos: ["m2d/escribiendo", "ic2/birrete", "ic2/trofeo"],
    previos: ["El ensayo (lección 28) y los planes (lección 21)."],
    capacidad: "Ahora puedes escribir un ensayo completo del DALF C1 en el Atelier."
  },
  requiere: ["es-forme", "es-par", "pl-choix"],
  recupera: ["pl-choix", "co-opp"],
  conceptos: {
    "pe-plan": { n: "Plan, problemática y gancho", b: "plan" },
    "pe-pieces": { n: "Concesión, ejemplo y conclusión", b: "pieces" }
  },
  video: {
    titulo: "Proyecto: el ensayo", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/escribiendo", grande: "L'IA menace-t-elle l'université ?", seg: [
        { es: "Hola. La consigna: un artículo para el periódico de tu universidad. ¿Es la IA una amenaza?" } ] },
      { v: "dos",
        a: { tag: "question fermée", fr: "L'IA menace-t-elle l'université ?", es: "se responde sí o no" },
        b: { tag: "plan dialectique", fr: "oui en partie / mais / réponse nuancée", es: "sí en parte, pero, respuesta matizada" },
        seg: [
          { es: "Es una pregunta cerrada,", p: 1 },
          { es: "así que eliges el plan dialéctico.", p: 2 } ] },
      { v: "frase", filas: [
          { partes: [["Certes,", "-", 1], ["l'IA facilite la triche,", "-", 1], ["mais", "-", 2], ["elle peut aussi enrichir l'apprentissage.", "-", 2]] } ], seg: [
        { es: "Concedes y luego defiendes:", p: 1 },
        { fr: "Certes, l'IA facilite la triche, mais elle peut aussi enrichir l'apprentissage.", p: 2 } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Dans quelle mesure", "Certes… mais", "En définitive", "un titre"], seg: [
        { es: "Problemática, gancho, concesión, ejemplos y una conclusión que abre. Y no olvides el título.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Empezar el artículo", img: "bg-biblioteca", yo: "laura",
    escena: "Laura no sabe cómo empezar su artículo.",
    pj: __PJ,
    lineas: [
      ["laura", "Je commence par « Aujourd'hui, je vais parler de l'IA » ?", "¿Empiezo con «Hoy voy a hablar de la IA»?"],
      ["tutrice", "Non. Commencez par un fait concret qui accroche le lecteur.", "No. Empiece con un hecho concreto que enganche al lector."],
      ["laura", "« En quelques années, l'IA s'est invitée dans toutes les salles de cours. »", "«En pocos años, la IA se ha colado en todas las aulas»."],
      ["tutrice", "Parfait. Ensuite, la problématique et le plan.", "Perfecto. Luego, la problemática y el plan."]
    ],
    fijate: "Fíjate: la consigna completa está en el botón «Texte de la leçon» de cada ejercicio."
  },
  ensena: [
    { id: "plan", tipo: "uso", titulo: "Paso 1: plan, problemática y gancho",
      idea: "Pregunta cerrada → plan dialéctico. Luego una problemática precisa y un gancho concreto.",
      intro: "El comienzo del artículo:",
      pares: [
        ["une question fermée → plan dialectique", "Tipo de pregunta y plan"],
        ["Dans quelle mesure l'IA menace-t-elle, ou au contraire renouvelle-t-elle, la mission de l'université ?", "Problemática"],
        ["En quelques années, les outils d'intelligence artificielle se sont invités dans toutes les salles de cours.", "Gancho (amorce)"]
      ],
      regla: ["Nada de «Aujourd'hui, je vais parler de…»."] },
    { id: "pieces", tipo: "uso", titulo: "Paso 2: concesión, ejemplo, conclusión",
      idea: "Concede con «certes… mais», apoya con un ejemplo concreto y cierra con balance y apertura.",
      intro: "Las piezas del desarrollo y del final:",
      pares: [
        ["Certes, l'IA facilite la triche, mais elle peut aussi enrichir l'apprentissage.", "Concesión"],
        ["Un étudiant peut demander à l'outil d'expliquer une règle, puis vérifier cette explication dans une grammaire.", "Ejemplo concreto"],
        ["En définitive, … Reste à savoir si les enseignants en auront les moyens.", "Balance y apertura"]
      ],
      regla: ["Un artículo lleva un titre; no lleva formule de politesse."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Errores típicos.",
      errores: [
        ["L'IA est-elle bien ou pas ?", "Dans quelle mesure l'IA menace-t-elle… ?", "Una problemática precisa."],
        ["L'IA est partout.", "Un exemple concret", "El ejemplo debe ser preciso."],
        ["Voilà, c'est la fin.", "En définitive, … Reste à savoir si…", "Conclusión real."]
      ] }
  ],
  ejemplos: [
    { sit: "¿Qué plan para «L'IA menace-t-elle l'université ?»?", resp: "une question fermée → plan dialectique", pasos: ["Se responde sí o no.", "Plan dialéctico."], porque: "Tipo de pregunta." },
    { sit: "Concede y defiende.", resp: "Certes, l'IA facilite la triche, mais elle peut aussi enrichir l'apprentissage.", pasos: ["Certes…", "mais…"], porque: "Concesión." },
    { sit: "Cierra el artículo.", resp: "En définitive, l'IA ne menace l'université que si celle-ci renonce à former l'esprit critique.", pasos: ["Balance.", "Luego: Reste à savoir si…"], porque: "Conclusión." }
  ],
  comprueba: [
    { q: "Pregunta cerrada →", o: ["plan dialéctico", "plan analítico"], a: 0, b: "plan", porque: "Sí / pero / matiz." },
    { q: "Un buen gancho es…", o: ["un hecho concreto", "«hoy voy a hablar de…»"], a: 0, b: "plan", porque: "Engancha." },
    { q: "El artículo lleva…", o: ["un título", "una firma con dirección"], a: 0, b: "pieces", porque: "Título." }
  ],
  practica: [
    { fase: "guiada", c: ["pe-plan"], k: "choice", ask: "Tipo de pregunta y plan:", q: "« L'IA est-elle une menace pour l'université ? »", o: ["une question fermée → plan dialectique", "un phénomène à expliquer → plan analytique", "une comparaison → plan comparatif"], a: 0, pista: "Se responde sí o no.", why: "Plan dialéctico." },
    { fase: "guiada", c: ["pe-pieces"], k: "choice", ask: "El artículo debe tener…", q: "Elige:", o: ["un titre", "une formule de politesse", "une signature avec votre adresse"], a: 0, pista: "Es un artículo.", why: "<b>un titre</b>." },
    { fase: "indep", c: ["pe-plan"], k: "choice", ask: "Mejor problemática:", q: "Elige:", o: ["Dans quelle mesure l'IA menace-t-elle, ou au contraire renouvelle-t-elle, la mission de l'université ?", "L'IA est-elle bien ou pas ?", "Qu'est-ce que l'IA ?"], a: 0, why: "Precisa y abierta." },
    { fase: "indep", c: ["pe-plan"], k: "choice", ask: "Mejor gancho:", q: "Elige:", o: ["En quelques années, les outils d'intelligence artificielle se sont invités dans toutes les salles de cours.", "Aujourd'hui, je vais parler de l'IA.", "L'IA, tout le monde connaît."], a: 0, why: "Hecho concreto." },
    { fase: "indep", c: ["pe-pieces"], k: "order", ask: "Ordena la concesión.", tokens: ["Certes,", "l'IA facilite la triche,", "mais", "elle peut aussi", "enrichir l'apprentissage."], why: "Certes… mais." },
    { fase: "indep", c: ["pe-pieces"], k: "choice", ask: "Mejor ejemplo para «l'IA peut enrichir l'apprentissage»:", q: "Elige:", o: ["Un étudiant peut demander à l'outil d'expliquer une règle, puis vérifier cette explication dans une grammaire.", "L'IA est partout.", "Beaucoup de gens utilisent l'IA."], a: 0, why: "Concreto." },
    { fase: "aplica", c: ["pe-plan"], k: "choice", ask: "¿Qué frase anuncia el plan?", ctx: "Final de tu introducción.", q: "Elige:", o: ["Nous verrons d'abord les risques que l'IA fait peser sur l'apprentissage, puis les usages qui pourraient le renouveler.", "Il y a des avantages et des inconvénients.", "Voici mon plan : un, deux, trois."], a: 0, why: "Anuncio claro." },
    { fase: "aplica", c: ["pe-pieces"], k: "choice", ask: "¿Qué conclusión conviene?", ctx: "Cierras el artículo.", q: "Elige:", o: ["En définitive, l'IA ne menace l'université que si celle-ci renonce à former l'esprit critique. Reste à savoir si les enseignants en auront les moyens.", "Voilà, c'est la fin.", "En conclusion, l'IA est dangereuse, un point c'est tout."], a: 0, why: "Balance y apertura." },
    { fase: "dominio", c: ["pe-plan"], k: "choice", es: true, ask: "¿Cómo empiezas el artículo?", q: "Elige:", o: ["Con un hecho concreto", "Con «hoy voy a hablar de…»"], a: 0, why: "Gancho." },
    { fase: "dominio", c: ["pe-pieces"], k: "choice", ask: "Para conceder:", q: "Elige:", o: ["Certes", "Voilà"], a: 0, why: "<b>Certes</b>." },
    { fase: "dominio", c: ["pe-plan", "pe-pieces"], k: "choice", ask: "Para abrir al final:", q: "Elige:", o: ["Reste à savoir si", "Un point c'est tout"], a: 0, why: "Apertura." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche", "IA", "Atelier"] }
};

/* ===================== Sección C1.1·7 · Gramática del texto culto ===================== */

/* Lección 34 · La aposición (retoma las relativas y aligerar «qui est») */
window.__ENSENA["prog-apposition"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "L'apposition et le détachement",
  roles: { suj: "sujeto", adj: "aposición", verbe: "verbo" },
  objetivo: {
    que: "Vas a añadir información a un nombre entre comas, sin verbo: Marie Curie, physicienne polonaise, …",
    corto: "Información extra entre comas, sin «qui est».",
    podras: ["Poner un nombre en aposición.", "Anteponer un adjetivo o participio.", "Evitar el error del sujeto distinto."],
    iconos: ["ic2/lapiz", "m2d/escribiendo", "ic2/libros"],
    previos: ["Aligerar quitando «qui est» (proyecto de la sección IV)."],
    capacidad: "Ahora escribes frases densas y elegantes sin acumular relativas."
  },
  requiere: ["pg-alleger"],
  recupera: ["pg-alleger", "gn-rel"],
  conceptos: {
    "ap-nom": { n: "El nombre en aposición", b: "nom" },
    "ap-tete": { n: "El adjetivo o participio al inicio", b: "tete" }
  },
  video: {
    titulo: "La aposición", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: ", … ,", seg: [
        { es: "Hola. La aposición añade información a un nombre, entre comas y sin verbo." } ] },
      { v: "dos",
        a: { tag: "pesado", fr: "Paris, qui est la capitale de la France, attire…", es: "con «qui est»" },
        b: { tag: "aposición", fr: "Paris, capitale de la France, attire…", es: "sin «qui est»" },
        seg: [
          { es: "Quitas «qui est»", p: 1 },
          { es: "y queda la aposición:", p: 2 },
          { fr: "Paris, capitale de la France, attire…", p: 2 } ] },
      { v: "frase", filas: [
          { partes: [["Épuisée,", "adj", 1], ["elle", "suj", 2], ["s'est endormie.", "verbe", 2]] } ], seg: [
        { es: "También puedes poner un adjetivo al inicio. Atención: se refiere al sujeto.", p: 1 },
        { fr: "Épuisée, elle s'est endormie.", p: 2 } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Paris, capitale de la France,", "Épuisée, elle…", "Surpris, le ministre…"], seg: [
        { es: "Entre comas, sin verbo, y siempre referido al sujeto de la frase.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El tren que llegó", img: "bg-biblioteca", yo: "laura",
    escena: "Laura escribe: «Arrivé à la gare, le train était parti».",
    pj: __PJ,
    lineas: [
      ["tutrice", "« Arrivé à la gare, le train était parti. » Qui est arrivé ?", "«Llegado a la estación, el tren se había ido». ¿Quién llegó?"],
      ["laura", "Moi, pas le train !", "¡Yo, no el tren!"],
      ["tutrice", "Alors le sujet doit être « je ».", "Entonces el sujeto debe ser «je»."],
      ["laura", "Arrivée à la gare, j'ai constaté que le train était parti.", "Llegada a la estación, constaté que el tren se había ido."]
    ],
    fijate: "Fíjate: lo que va al inicio se refiere siempre al sujeto."
  },
  ensena: [
    { id: "nom", tipo: "gram", titulo: "El nombre en aposición",
      idea: "Quita «qui est» y deja el nombre entre comas: Paris, capitale de la France, …",
      intro: "Como en español: «Descartes, filósofo del siglo XVII, …».",
      tabla: [["Con relativa", "Aposición", "Español"], [
        ["Paris, qui est la capitale…", "Paris, capitale de la France,", "París, capital de Francia,"],
        ["Einstein, qui était physicien…", "Einstein, physicien de génie,", "Einstein, físico genial,"],
        ["Molière, qui était dramaturge…", "Molière, dramaturge du XVIIe siècle,", "Molière, dramaturgo del siglo XVII,"]
      ]],
      regla: ["Siempre entre comas.", "Sin artículo, normalmente."] },
    { id: "tete", tipo: "gram", titulo: "El adjetivo o participio al inicio",
      idea: "Un adjetivo o participio al inicio se refiere al sujeto y concuerda con él.",
      intro: "Épuisée, elle… (femenino, porque el sujeto es elle).",
      tabla: [["Correcto", "Incorrecto", "Por qué"], [
        ["Surpris, le ministre n'a rien dit.", "Surprise, le ministre…", "concuerda con le ministre"],
        ["Inquiètes, les chercheuses ont interrompu l'expérience.", "Inquiet, les chercheuses…", "femenino plural"],
        ["Critiqué par la presse, le film a eu du succès.", "Critiqué, la presse…", "es el film el criticado"]
      ]],
      regla: ["Si el sujeto es otro, la frase es falsa: Arrivé à la gare, le train… ✗."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Errores típicos.",
      errores: [
        ["Arrivé à la gare, le train était parti.", "Arrivé à la gare, j'ai constaté que le train était parti.", "Mismo sujeto."],
        ["Inquiet, les chercheuses…", "Inquiètes, les chercheuses…", "Concordancia."],
        ["Paris capitale de la France attire…", "Paris, capitale de la France, attire…", "Las comas."]
      ] }
  ],
  ejemplos: [
    { sit: "Aligera: «Paris, qui est la capitale de la France, attire…»", resp: "Paris, capitale de la France, attire…", pasos: ["Quita qui est.", "Entre comas."], porque: "Aposición." },
    { sit: "«Le ministre, qui était surpris, n'a rien dit.»", resp: "Surpris, le ministre n'a rien dit.", pasos: ["Adjetivo al inicio.", "Concuerda con le ministre."], porque: "Detachement." },
    { sit: "Corrige: «Inquiet, les chercheuses ont interrompu l'expérience.»", resp: "Inquiètes", pasos: ["Sujeto femenino plural."], porque: "Concordancia." }
  ],
  comprueba: [
    { q: "La aposición va…", o: ["entre comas", "entre comillas"], a: 0, b: "nom", porque: "Comas." },
    { q: "«Surprise, le ministre…» es…", o: ["incorrecta", "correcta"], a: 0, b: "tete", porque: "Le ministre: Surpris." },
    { q: "El adjetivo al inicio se refiere…", o: ["al sujeto", "a cualquier nombre"], a: 0, b: "tete", porque: "Al sujeto." }
  ],
  practica: [
    { fase: "guiada", c: ["ap-nom"], k: "choice", ask: "Aligera la frase.", q: "Paris, qui est la capitale de la France, attire…", o: ["Paris, capitale de la France, attire…", "Paris, la qui capitale, attire…", "Paris capitale est de la France, attire…"], a: 0, pista: "Quita «qui est».", why: "Aposición." },
    { fase: "guiada", c: ["ap-tete"], k: "choice", ask: "¿Cuál es correcta?", q: "Elige:", o: ["Épuisée, elle s'est endormie.", "Épuisée, le sommeil l'a prise.", "Épuisé, elle s'est endormie."], a: 0, pista: "Mismo sujeto y concordancia.", why: "Elle, femenino." },
    { fase: "indep", c: ["ap-nom"], k: "fill", ask: "Escribe la aposición (físico).", q: "Einstein, ___ de génie, a révolutionné la physique.", acc: ["physicien"], why: "<b>physicien</b>." },
    { fase: "indep", c: ["ap-nom"], k: "fill", ask: "Escribe la aposición (dramaturgo).", q: "Molière, ___ du XVIIe siècle, a créé Tartuffe.", acc: ["dramaturge"], why: "<b>dramaturge</b>." },
    { fase: "indep", c: ["ap-tete"], k: "choice", ask: "Transforma.", q: "Le ministre, qui était surpris, n'a rien dit.", o: ["Surpris, le ministre n'a rien dit.", "Surprise, le ministre n'a rien dit.", "Le ministre surprenant n'a rien dit."], a: 0, why: "Concuerda con le ministre." },
    { fase: "indep", c: ["ap-tete"], k: "spot", ask: "Toca el error.", s: "[Inquiet] , les chercheuses ont interrompu l'expérience .", fix: "Inquiètes", why: "Femenino plural." },
    { fase: "aplica", c: ["ap-tete"], k: "sort", ask: "¿Correcta o sujeto distinto?", ctx: "Revisas tu ensayo.", q: "Clasifica.", cats: ["Correcta", "Sujeto distinto"], items: [["Arrivé tôt, il a attendu.", 0], ["Surprise, elle n'a rien dit.", 0], ["Arrivé tôt, la porte était fermée.", 1], ["Surprise, le silence s'installa.", 1]], why: "Se refiere al sujeto." },
    { fase: "aplica", c: ["ap-nom"], k: "match", ask: "Une la relativa y la aposición.", ctx: "Aligeras un párrafo.", q: "Relativa → aposición", pairs: [["Lyon, qui est une ville gastronomique,", "Lyon, ville gastronomique,"], ["Le rapport, qui a été publié hier,", "Le rapport, publié hier,"], ["Anne, qui était inquiète,", "Inquiète, Anne"]], why: "Sin qui est." },
    { fase: "aplica", c: ["ap-tete"], k: "fill", ask: "Escribe «criticado».", ctx: "Hablas de una película.", q: "___ par la presse, le film a pourtant eu du succès.", acc: ["Critiqué"], why: "<b>Critiqué</b>, masculino: le film." },
    { fase: "dominio", c: ["ap-nom"], k: "order", ask: "Ordena la frase.", tokens: ["Marie Curie,", "physicienne polonaise,", "a obtenu", "deux prix Nobel."], why: "Aposición entre comas." },
    { fase: "dominio", c: ["ap-tete"], k: "choice", ask: "Corrige: «Arrivé à la gare, le train était parti.»", q: "Elige:", o: ["Arrivé à la gare, j'ai constaté que le train était parti.", "Arrivé à la gare, le train est parti."], a: 0, why: "Mismo sujeto." },
    { fase: "dominio", c: ["ap-nom", "ap-tete"], k: "listen", ask: "Escucha y escribe.", say: "Longtemps ignoré, ce phénomène suscite aujourd'hui l'intérêt des chercheurs.", acc: ["Longtemps ignoré, ce phénomène suscite aujourd'hui l'intérêt des chercheurs."], num: false, dict: true, why: "Participio al inicio." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche", "Paris", "Einstein", "Molière", "Tartuffe", "Marie", "Curie", "Nobel", "Lyon", "Anne", "Descartes"] }
};

/* Lección 35 · La participial (retoma la aposición) */
window.__ENSENA["prog-participiale"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "La proposition participiale",
  roles: { suj: "sujeto propio", verbe: "participio", prin: "principal" },
  objetivo: {
    que: "Vas a escribir frases como «Le travail terminé, il partit»: un participio con su propio sujeto.",
    corto: "«Terminado el trabajo…», a la francesa.",
    podras: ["Poner el sujeto antes del participio.", "Expresar anterioridad o causa.", "Distinguirla del gerundio."],
    iconos: ["ic2/lapiz", "m2d/reloj", "m2d/escribiendo"],
    previos: ["La aposición (lección anterior)."],
    capacidad: "Ahora varías la sintaxis con la concisión del registro escrito."
  },
  requiere: ["ap-tete"],
  recupera: ["ap-tete"],
  conceptos: {
    "pp-forme": { n: "Sujeto + participio", b: "forme" },
    "pp-sens": { n: "Anterioridad o causa", b: "sens" }
  },
  video: {
    titulo: "La participial", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/reloj", grande: "la réunion terminée", seg: [
        { es: "Hola. En español decimos «terminada la reunión». En francés el sujeto va primero." } ] },
      { v: "dos",
        a: { tag: "español", fr: "Terminée la réunion, …", es: "terminada la reunión" },
        b: { tag: "francés", fr: "La réunion terminée, …", es: "sujeto + participio" },
        seg: [
          { es: "Así no.", p: 1 },
          { es: "Así sí: primero el sujeto, luego el participio.", p: 2 },
          { fr: "La réunion terminée, chacun est rentré chez soi.", p: 2 } ] },
      { v: "frase", filas: [
          { partes: [["Le budget", "suj", 1], ["étant limité,", "verbe", 1], ["le projet a été réduit.", "prin", 2]] } ], seg: [
        { es: "Con participio presente expresa causa:", p: 1 },
        { fr: "Le budget étant limité, le projet a été réduit.", p: 2 } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["La réunion terminée,", "Le temps pressant,", "Les invités partis,"], seg: [
        { es: "Sujeto propio, delante del participio. Pasado para antes; presente para causa o simultaneidad.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Calco del español", img: "bg-biblioteca", yo: "laura",
    escena: "Laura escribe «Terminée la réunion, nous sommes partis».",
    pj: __PJ,
    lineas: [
      ["tutrice", "En français, le sujet vient d'abord : « La réunion terminée ».", "En francés el sujeto va primero: «La réunion terminée»."],
      ["laura", "Et le participe s'accorde avec « réunion » ?", "¿Y el participio concuerda con «réunion»?"],
      ["tutrice", "Oui : terminée, au féminin.", "Sí: terminée, en femenino."],
      ["laura", "La réunion terminée, nous sommes partis.", "Terminada la reunión, nos fuimos."]
    ],
    fijate: "Fíjate: el participio concuerda con su propio sujeto."
  },
  ensena: [
    { id: "forme", tipo: "gram", titulo: "Sujeto + participio",
      idea: "Primero el sujeto, luego el participio, y el participio concuerda con ese sujeto.",
      intro: "Al revés que en español.",
      tabla: [["Francés", "Español", "Detalle"], [
        ["Les examens terminés,", "Terminados los exámenes,", "terminés: masculino plural"],
        ["Le contrat signé,", "Firmado el contrato,", "signé"],
        ["Les invités partis,", "Idos los invitados,", "partis"]
      ]],
      regla: ["El sujeto de la participial es distinto del de la principal.", "Mismo sujeto → gerundio: En partant, il a salué."] },
    { id: "sens", tipo: "gram", titulo: "Anterioridad o causa",
      idea: "Participio pasado = algo terminado antes; participio presente = causa o al mismo tiempo.",
      intro: "Equivale a una subordinada:",
      tabla: [["Participial", "Equivale a", "Sentido"], [
        ["Le repas fini,", "Quand le repas fut fini,", "antes"],
        ["Le temps pressant,", "Comme le temps pressait,", "causa"],
        ["La nuit tombant,", "Comme la nuit tombait,", "al mismo tiempo"]
      ]],
      regla: ["Une fois les examens terminés… también vale."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Errores típicos.",
      errores: [
        ["Terminée la réunion, …", "La réunion terminée, …", "Sujeto primero."],
        ["Les résultats publié, …", "Les résultats publiés, …", "Concordancia."],
        ["La décision prise, je l'ai prise.", "Gerundio si es el mismo sujeto", "Sujeto propio."]
      ] }
  ],
  ejemplos: [
    { sit: "Terminada la clase, …", resp: "Le cours terminé, …", pasos: ["Sujeto primero."], porque: "Orden francés." },
    { sit: "«La pluie tombant, le match fut annulé.» ¿Qué expresa?", resp: "la causa", pasos: ["Participio presente.", "Comme la pluie tombait."], porque: "Causa." },
    { sit: "Firmado el contrato, empezaron las obras.", resp: "Le contrat signé, les travaux ont commencé.", pasos: ["Sujeto + participio pasado."], porque: "Anterioridad." }
  ],
  comprueba: [
    { q: "Terminada la reunión →", o: ["La réunion terminée", "Terminée la réunion"], a: 0, b: "forme", porque: "Sujeto primero." },
    { q: "Participio presente expresa…", o: ["causa o simultaneidad", "finalidad"], a: 0, b: "sens", porque: "Causa." },
    { q: "Mismo sujeto que la principal →", o: ["gerundio", "participial"], a: 0, b: "forme", porque: "En + -ant." }
  ],
  practica: [
    { fase: "guiada", c: ["pp-forme"], k: "choice", ask: "Terminada la clase…", q: "Elige:", o: ["Le cours terminé, …", "Terminé le cours, …", "Le cours terminant, …"], a: 0, pista: "Sujeto primero.", why: "Orden francés." },
    { fase: "guiada", c: ["pp-sens"], k: "choice", es: true, ask: "«La pluie tombant, le match fut annulé.» Expresa…", q: "Elige:", o: ["causa", "finalidad", "concesión"], a: 0, pista: "Participio presente.", why: "Causa." },
    { fase: "indep", c: ["pp-forme"], k: "fill", ask: "Escribe «firmado».", q: "Le contrat ___ , les travaux ont commencé.", acc: ["signé"], why: "<b>signé</b>." },
    { fase: "indep", c: ["pp-sens"], k: "fill", ask: "Escribe el participio presente de presser.", q: "Le temps ___ , nous avons dû abréger.", acc: ["pressant"], why: "<b>pressant</b>: causa." },
    { fase: "indep", c: ["pp-sens"], k: "choice", ask: "Equivale a…", q: "Les invités partis, nous avons rangé.", o: ["Une fois que les invités sont partis, nous avons rangé.", "Pour que les invités partent, nous avons rangé.", "Bien que les invités soient partis, nous avons rangé."], a: 0, why: "Anterioridad." },
    { fase: "indep", c: ["pp-forme"], k: "spot", ask: "Toca el error.", s: "Les résultats [publié] , le ministre a réagi immédiatement .", fix: "publiés", why: "Concuerda con les résultats." },
    { fase: "aplica", c: ["pp-sens"], k: "match", ask: "Une la participial y su equivalente.", ctx: "Reescribes un texto.", q: "Participial → subordinada", pairs: [["Le repas fini,", "Quand le repas fut fini,"], ["La nuit tombant,", "Comme la nuit tombait,"], ["Le temps pressant,", "Comme le temps pressait,"]], why: "Tiempo o causa." },
    { fase: "aplica", c: ["pp-forme"], k: "sort", ask: "¿Participial o gerundio?", ctx: "Sujeto propio o el mismo.", q: "Clasifica.", cats: ["Participial", "Gerundio"], items: [["Le soleil se levant, …", 0], ["La décision prise, …", 0], ["En partant, il a salué.", 1], ["En lisant, j'ai compris.", 1]], why: "Sujeto propio = participial." },
    { fase: "dominio", c: ["pp-forme"], k: "order", ask: "Ordena la frase.", tokens: ["Le travail", "terminé,", "ils", "sont partis."], why: "Sujeto + participio." },
    { fase: "dominio", c: ["pp-sens"], k: "choice", es: true, ask: "«Le calme revenu, la séance reprit.» Expresa…", q: "Elige:", o: ["anterioridad", "finalidad"], a: 0, why: "Participio pasado." },
    { fase: "dominio", c: ["pp-forme", "pp-sens"], k: "listen", ask: "Escucha y escribe.", say: "Les examens terminés, les étudiants sont partis en vacances.", acc: ["Les examens terminés, les étudiants sont partis en vacances."], num: false, dict: true, why: "Participial." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche"] }
};

/* Lección 36 · El infinitivo como nombre (retoma la puesta en relieve) */
window.__ENSENA["prog-infinitif-nom"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "L'infinitif sujet : comprendre, c'est pardonner",
  roles: { suj: "infinitivo sujeto", verbe: "verbo", attr: "atributo" },
  objetivo: {
    que: "Vas a usar el infinitivo como sujeto, sin artículo: Lire développe l'imagination.",
    corto: "«Leer es…» sin «el».",
    podras: ["Usar el infinitivo sujeto sin artículo.", "Escribir «…, c'est…» con dos infinitivos.", "Negar un infinitivo: ne pas agir."],
    iconos: ["ic2/lapiz", "ic2/libros", "m2d/pensativo"],
    previos: ["La puesta en relieve con c'est (lección 9)."],
    capacidad: "Ahora formulas ideas generales con elegancia, ideales para conclusiones."
  },
  requiere: ["rel-ce"],
  recupera: ["rel-ce"],
  conceptos: {
    "in-sujet": { n: "Infinitivo sujeto, sin artículo", b: "sujet" },
    "in-cest": { n: "«…, c'est…» y la negación", b: "cest" }
  },
  video: {
    titulo: "El infinitivo sujeto", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/libros", grande: "Lire", seg: [
        { es: "Hola. En español a veces decimos «el leer». En francés, el infinitivo sujeto va sin artículo." } ] },
      { v: "dos",
        a: { tag: "así no", fr: "Le lire est un plaisir.", es: "con artículo" },
        b: { tag: "así sí", fr: "Lire est un plaisir.", es: "sin artículo" },
        seg: [
          { es: "Así no.", p: 1 },
          { es: "Así sí:", p: 2 },
          { fr: "Lire est un plaisir.", p: 2 } ] },
      { v: "frase", filas: [
          { partes: [["Comprendre,", "suj", 1], ["c'est", "verbe", 2], ["pardonner.", "attr", 2]] } ], seg: [
        { es: "Y para una idea general, dos infinitivos con c'est:", p: 1 },
        { fr: "Comprendre, c'est pardonner.", p: 2 } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Lire est un plaisir.", "Ne pas agir serait une erreur.", "c'est de commencer"], seg: [
        { es: "Sin artículo, ne pas delante del infinitivo y de después de «le plus difficile, c'est».", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Una conclusión con estilo", img: "bg-biblioteca", yo: "laura",
    escena: "Laura busca una última frase para su ensayo.",
    pj: __PJ,
    lineas: [
      ["laura", "J'ai écrit : « Le lire est important. »", "Escribí: «El leer es importante»."],
      ["tutrice", "Sans article : « Lire est important. »", "Sin artículo: «Lire est important»."],
      ["laura", "Et pour finir : « Lire, c'est voyager sans quitter sa chambre » ?", "¿Y para terminar: «Leer es viajar sin salir de la habitación»?"],
      ["tutrice", "Excellent. Une phrase générale, parfaite pour conclure.", "Excelente. Una frase general, perfecta para concluir."]
    ],
    fijate: "Fíjate: estas frases sirven para cerrar ensayos."
  },
  ensena: [
    { id: "sujet", tipo: "gram", titulo: "Infinitivo sujeto, sin artículo",
      idea: "El infinitivo puede ser sujeto, pero nunca lleva artículo.",
      intro: "Español: «(El) leer desarrolla…». Francés: siempre sin artículo.",
      tabla: [["Francés", "Español", "Detalle"], [
        ["Lire est un plaisir.", "Leer es un placer.", "sin le"],
        ["Voyager permet de mieux se connaître.", "Viajar permite conocerse mejor.", "sin le"],
        ["Ne pas agir serait une erreur.", "No actuar sería un error.", "ne pas + infinitivo"]
      ]],
      regla: ["Negación: ne pas va junto, delante del infinitivo: Ne pas répondre, Ne rien faire."] },
    { id: "cest", tipo: "gram", titulo: "«…, c'est…»",
      idea: "Infinitivo, coma, c'est e infinitivo: una idea general. Tras «le plus difficile, c'est» va de.",
      intro: "Tono de sentencia, ideal para conclusiones.",
      tabla: [["Frase", "Español", "Detalle"], [
        ["Comprendre, c'est pardonner.", "Comprender es perdonar.", "c'est + infinitivo"],
        ["Enseigner, c'est apprendre deux fois.", "Enseñar es aprender dos veces.", "c'est + infinitivo"],
        ["Le plus difficile, c'est de commencer.", "Lo más difícil es empezar.", "c'est de + infinitivo"]
      ]],
      regla: ["Apprendre une langue, c'est s'ouvrir au monde."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Errores típicos.",
      errores: [
        ["Le lire est important.", "Lire est important.", "Sin artículo."],
        ["Ne agir pas…", "Ne pas agir…", "ne pas junto."],
        ["Le plus difficile, c'est commencer.", "Le plus difficile, c'est de commencer.", "Falta de."]
      ] }
  ],
  ejemplos: [
    { sit: "Leer es un placer.", resp: "Lire est un plaisir.", pasos: ["Sin artículo."], porque: "Infinitivo sujeto." },
    { sit: "No actuar sería un error.", resp: "Ne pas agir serait une erreur.", pasos: ["ne pas + infinitivo."], porque: "Negación." },
    { sit: "Lo más difícil es empezar.", resp: "Le plus difficile, c'est de commencer.", pasos: ["c'est de."], porque: "Con de." }
  ],
  comprueba: [
    { q: "Leer es un placer →", o: ["Lire est un plaisir.", "Le lire est un plaisir."], a: 0, b: "sujet", porque: "Sin artículo." },
    { q: "No actuar →", o: ["Ne pas agir", "Ne agir pas"], a: 0, b: "sujet", porque: "ne pas junto." },
    { q: "Le plus difficile, c'est ___ commencer.", o: ["de", "—"], a: 0, b: "cest", porque: "de." }
  ],
  practica: [
    { fase: "guiada", c: ["in-sujet"], k: "choice", ask: "Leer es un placer.", q: "Elige:", o: ["Lire est un plaisir.", "Le lire est un plaisir.", "De lire est un plaisir."], a: 0, pista: "Sin artículo.", why: "<b>Lire</b>." },
    { fase: "guiada", c: ["in-cest"], k: "choice", ask: "Lo más difícil es empezar.", q: "Elige:", o: ["Le plus difficile, c'est de commencer.", "Le plus difficile, c'est commencer de.", "Le plus difficile est que commencer."], a: 0, pista: "c'est de…", why: "<b>c'est de</b>." },
    { fase: "indep", c: ["in-sujet"], k: "choice", ask: "No actuar sería un error.", q: "Elige:", o: ["Ne pas agir serait une erreur.", "Ne agir pas serait une erreur.", "Pas agir ne serait une erreur."], a: 0, why: "<b>Ne pas agir</b>." },
    { fase: "indep", c: ["in-cest"], k: "fill", ask: "Escribe «comprender».", q: "___ , c'est pardonner.", acc: ["Comprendre"], why: "<b>Comprendre</b>." },
    { fase: "indep", c: ["in-cest"], k: "fill", ask: "Completa.", q: "Le plus dur, c'est ___ commencer.", acc: ["de"], why: "<b>de</b>." },
    { fase: "indep", c: ["in-sujet"], k: "spot", ask: "Toca el error.", s: "[Le] voyager forme la jeunesse , dit le proverbe .", fix: "Voyager", why: "Sin artículo." },
    { fase: "aplica", c: ["in-cest"], k: "match", ask: "Une cada infinitivo con su idea.", ctx: "Buscas una frase para concluir.", q: "Infinitivo → idea", pairs: [["Enseigner,", "c'est apprendre deux fois."], ["Comprendre,", "c'est pardonner."], ["Apprendre une langue,", "c'est s'ouvrir au monde."]], why: "Ideas generales." },
    { fase: "aplica", c: ["in-sujet"], k: "sort", ask: "¿Correcta?", ctx: "Revisas tu ensayo.", q: "Clasifica.", cats: ["Correcta", "Incorrecta"], items: [["Lire est un plaisir.", 0], ["Ne pas agir serait une erreur.", 0], ["Le lire est un plaisir.", 1], ["Ne agir pas serait une erreur.", 1]], why: "Sin artículo; ne pas junto." },
    { fase: "dominio", c: ["in-cest"], k: "order", ask: "Ordena la frase.", tokens: ["Apprendre une langue,", "c'est", "s'ouvrir", "au monde."], why: "Infinitivo, c'est, infinitivo." },
    { fase: "dominio", c: ["in-sujet"], k: "choice", ask: "Enseñar es aprender dos veces.", q: "Elige:", o: ["Enseigner, c'est apprendre deux fois.", "L'enseigner, c'est apprendre deux fois."], a: 0, why: "Sin artículo." },
    { fase: "dominio", c: ["in-sujet", "in-cest"], k: "listen", ask: "Escucha y escribe.", say: "Apprendre une langue, c'est s'ouvrir au monde.", acc: ["Apprendre une langue, c'est s'ouvrir au monde."], num: false, dict: true, why: "Idea general." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche"] }
};

/* Lección 37 · Concesión culta (retoma la concesión de la sección V) */
window.__ENSENA["prog-concession-rare"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Concession soutenue : si… que, quel que soit",
  roles: {},
  objetivo: {
    que: "Vas a usar la concesión culta: «Si difficile que soit la tâche…», «Quelle que soit la raison…».",
    corto: "«Por muy… que» y «sea cual sea» en francés.",
    podras: ["Usar si + adjetivo + que + subjuntivo.", "Concordar quel que soit.", "Usar où que, quoi que."],
    iconos: ["ic2/lapiz", "m2d/pensativo", "ic2/libros"],
    previos: ["La concesión: bien que, malgré (lección 18)."],
    capacidad: "Ahora matizas concesiones con el registro de los textos académicos."
  },
  requiere: ["co-mode"],
  recupera: ["co-mode"],
  conceptos: {
    "cs-si": { n: "si… que + subjuntivo", b: "si" },
    "cs-quel": { n: "quel que soit, où que, quoi que", b: "quel" }
  },
  video: {
    titulo: "La concesión culta", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/pensativo", grande: "quelle que soit", seg: [
        { es: "Hola. En español decimos «por muy difícil que sea» y «sea cual sea». En francés hay fórmulas fijas." } ] },
      { v: "dos",
        a: { tag: "por muy… que", fr: "Si difficile que soit la tâche, …", es: "si + adjetivo + que + subjuntivo" },
        b: { tag: "sea cual sea", fr: "Quelle que soit la raison, …", es: "quel concuerda con el nombre" },
        seg: [
          { es: "Por muy difícil que sea: si, adjetivo, que y subjuntivo.", p: 1 },
          { es: "Sea cual sea: quel que soit, y quel concuerda.", p: 2 },
          { fr: "Quelle que soit la raison", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "Sea cual sea el precio:", o: ["Quel que soit le prix", "Quelque soit le prix"], a: 0,
        bien: "¡Sí! Quel, en dos palabras, concuerda con prix.", mal: "Es quel que, en dos palabras: concuerda con prix.",
        seg: [ { es: "Pausa. ¿Cuál es la correcta?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Si difficile que soit…", "Quelle que soit…", "Où que tu ailles…"], seg: [
        { es: "Todas con subjuntivo; y quel que soit concuerda con el nombre.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Quelque o quelle que", img: "bg-biblioteca", yo: "laura",
    escena: "Laura escribe «Quelque soit la raison».",
    pj: __PJ,
    lineas: [
      ["tutrice", "« Quelque soit la raison » : c'est l'erreur la plus fréquente.", "«Quelque soit la raison»: es el error más frecuente."],
      ["laura", "Il faut deux mots ?", "¿Van dos palabras?"],
      ["tutrice", "Oui, et « quel » s'accorde avec « raison » : quelle que soit.", "Sí, y «quel» concuerda con «raison»: quelle que soit."],
      ["laura", "Quelle que soit la raison, je vérifie l'accord.", "Sea cual sea la razón, compruebo la concordancia."]
    ],
    fijate: "Fíjate: los correctores automáticos no siempre ven este error."
  },
  ensena: [
    { id: "si", tipo: "gram", titulo: "Por muy… que",
      idea: "si + adjetivo + que + subjuntivo = «por muy… que sea».",
      intro: "Con tout… que va indicativo (es un hecho).",
      tabla: [["Francés", "Español", "Modo"], [
        ["Si difficile que soit la tâche, …", "Por muy difícil que sea la tarea, …", "subjuntivo"],
        ["Si compétent qu'il soit, …", "Por muy competente que sea, …", "subjuntivo"],
        ["Tout fatigué qu'il est, …", "Aunque está cansado, …", "indicativo"]
      ]],
      regla: ["También aussi… que, pour… que, quelque… que: igual de cultos."] },
    { id: "quel", tipo: "gram", titulo: "Sea cual sea, donde sea, lo que sea",
      idea: "quel que soit concuerda con el nombre: quel, quelle, quels, quelles; luego subjuntivo.",
      intro: "Y para lugar o cosa: où que, quoi que.",
      tabla: [["Francés", "Español", "Detalle"], [
        ["Quel que soit le prix", "Sea cual sea el precio", "masculino"],
        ["Quelle que soit la raison", "Sea cual sea la razón", "femenino"],
        ["Quelles que soient les difficultés", "Sean cuales sean las dificultades", "femenino plural"],
        ["Où que tu ailles", "Vayas donde vayas", "subjuntivo"],
        ["Quoi que tu dises", "Digas lo que digas", "en dos palabras"]
      ]],
      regla: ["Nunca «quelque soit»: son dos palabras."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Errores típicos.",
      errores: [
        ["Quelque soit la raison", "Quelle que soit la raison", "Dos palabras y concordancia."],
        ["Si intelligent qu'il est", "Si intelligent qu'il soit", "Subjuntivo."],
        ["Où que tu vas", "Où que tu ailles", "Subjuntivo."]
      ] }
  ],
  ejemplos: [
    { sit: "Sea cual sea la solución, tendrá un coste.", resp: "Quelle que soit la solution, elle aura un coût.", pasos: ["solution: femenino.", "Quelle que soit."], porque: "Concordancia." },
    { sit: "Por muy competente que sea, no puede hacerlo todo.", resp: "Si compétent qu'il soit, il ne peut pas tout faire.", pasos: ["si + adj + que + subj."], porque: "Concesión culta." },
    { sit: "Vayas donde vayas, te seguiré.", resp: "Où que tu ailles, je te suivrai.", pasos: ["où que + subjuntivo."], porque: "Lugar." }
  ],
  comprueba: [
    { q: "Sea cual sea la razón →", o: ["Quelle que soit la raison", "Quelque soit la raison"], a: 0, b: "quel", porque: "Dos palabras." },
    { q: "si… que va con…", o: ["subjuntivo", "indicativo"], a: 0, b: "si", porque: "Subjuntivo." },
    { q: "tout… que va con…", o: ["indicativo", "subjuntivo"], a: 0, b: "si", porque: "Indicativo." }
  ],
  practica: [
    { fase: "guiada", c: ["cs-quel"], k: "choice", ask: "Sea cual sea el precio…", q: "Elige:", o: ["Quel que soit le prix…", "Quelque soit le prix…", "Quelle que soit le prix…"], a: 0, pista: "prix es masculino.", why: "<b>Quel que</b>." },
    { fase: "guiada", c: ["cs-si"], k: "choice", ask: "Por muy inteligente que sea…", q: "Elige:", o: ["Si intelligent qu'il soit…", "Si intelligent qu'il est…", "Si intelligent que il sera…"], a: 0, pista: "Subjuntivo.", why: "<b>soit</b>." },
    { fase: "indep", c: ["cs-quel"], k: "choice", ask: "Vayas donde vayas…", q: "Elige:", o: ["Où que tu ailles…", "Où que tu vas…", "Partout que tu ailles…"], a: 0, why: "<b>ailles</b>." },
    { fase: "indep", c: ["cs-quel"], k: "fill", ask: "Escribe quel en femenino plural.", q: "___ que soient les difficultés, nous continuerons.", acc: ["Quelles"], why: "<b>Quelles</b>: les difficultés." },
    { fase: "indep", c: ["cs-si"], k: "fill", ask: "Escribe être en indicativo presente.", q: "Tout fatigué qu'il ___ , il a terminé le travail.", acc: ["est", "était"], why: "tout… que + indicativo." },
    { fase: "indep", c: ["cs-quel"], k: "spot", ask: "Toca el error.", s: "[Quelque] soit votre décision , nous la respecterons .", fix: "Quelle", why: "décision: Quelle que." },
    { fase: "aplica", c: ["cs-si"], k: "match", ask: "Une la estructura y el modo.", ctx: "Repasas antes del examen.", q: "Estructura → modo", pairs: [["si… que", "subjuntivo"], ["tout… que", "indicativo"], ["où que", "subjuntivo"]], why: "Solo tout… que va en indicativo." },
    { fase: "aplica", c: ["cs-quel"], k: "fill", ask: "Escribe aller en subjuntivo.", ctx: "Una promesa.", q: "Où que tu ___ , je te suivrai.", acc: ["ailles"], why: "<b>ailles</b>." },
    { fase: "dominio", c: ["cs-si"], k: "order", ask: "Ordena la frase.", tokens: ["Si difficile", "que soit la tâche,", "nous", "y arriverons."], why: "si… que + subjuntivo." },
    { fase: "dominio", c: ["cs-quel"], k: "choice", ask: "Sea cual sea la hora…", q: "Elige:", o: ["Quelle que soit l'heure…", "Quelque soit l'heure…"], a: 0, why: "heure es femenino." },
    { fase: "dominio", c: ["cs-si", "cs-quel"], k: "listen", ask: "Escucha y escribe.", say: "Quelles que soient les critiques, les chercheurs poursuivront leurs travaux.", acc: ["Quelles que soient les critiques, les chercheurs poursuivront leurs travaux."], num: false, dict: true, why: "Concordancia." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche"] }
};

/* Lección 38 · La hipótesis sin «si» (retoma condición e hipótesis de la sección V) */
window.__ENSENA["prog-hypothese-sans-si"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "L'hypothèse sans si",
  roles: {},
  objetivo: {
    que: "Vas a expresar una hipótesis sin «si»: à supposer que, pour peu que, en admettant que + subjuntivo.",
    corto: "Hipótesis cultas, sin «si».",
    podras: ["Usar à supposer que, pour peu que, en admettant que.", "Poner el subjuntivo después.", "Reconocer la inversión: Viendrait-il à échouer…"],
    iconos: ["m2d/pensativo", "ic2/lapiz", "ic2/libros"],
    previos: ["Condición e hipótesis con si (lección 19)."],
    capacidad: "Ahora varías la hipótesis como en un texto avanzado."
  },
  requiere: ["bu-cond", "bu-si"],
  recupera: ["bu-si"],
  conceptos: {
    "hy-subj": { n: "Fórmulas + subjuntivo", b: "subj" },
    "hy-autres": { n: "Inversión y yuxtaposición", b: "autres" }
  },
  video: {
    titulo: "La hipótesis sin si", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/pensativo", grande: "à supposer que", seg: [
        { es: "Hola. Ya sabes usar si. En un texto culto hay otras formas de plantear una hipótesis." } ] },
      { v: "dos",
        a: { tag: "suponiendo que", fr: "À supposer que l'hypothèse soit vraie, …", es: "+ subjuntivo" },
        b: { tag: "por poco que", fr: "Pour peu qu'il fasse beau, nous sortirons.", es: "basta un poco" },
        seg: [
          { es: "À supposer que, suponiendo que, con subjuntivo:", p: 1 },
          { fr: "À supposer que l'hypothèse soit vraie", p: 1 },
          { es: "Pour peu que: basta un poco para que ocurra.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "À supposer que ce ___ vrai", o: ["soit", "est"], a: 0,
        bien: "¡Sí! Siempre subjuntivo.", mal: "Después de à supposer que va subjuntivo: soit.",
        seg: [ { es: "Pausa. ¿Qué modo va después?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["à supposer que", "pour peu que", "en admettant que", "soit"], seg: [
        { es: "Las tres con subjuntivo. Y en un registro muy culto, se invierte el verbo en condicional.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Demasiados «si»", img: "bg-biblioteca", yo: "laura",
    escena: "El ensayo de Laura repite «si» en cada párrafo.",
    pj: __PJ,
    lineas: [
      ["tutrice", "Cinq « si » dans un paragraphe. Variez.", "Cinco «si» en un párrafo. Varíe."],
      ["laura", "« À supposer que l'hypothèse est vraie » ?", "¿«Suponiendo que la hipótesis es cierta»?"],
      ["tutrice", "Presque : après « à supposer que », le subjonctif. « Soit vraie ».", "Casi: después de «à supposer que», subjuntivo. «Soit vraie»."],
      ["laura", "À supposer que l'hypothèse soit vraie, que se passerait-il ?", "Suponiendo que la hipótesis sea cierta, ¿qué pasaría?"]
    ],
    fijate: "Fíjate: es igual que en español: «suponiendo que sea»."
  },
  ensena: [
    { id: "subj", tipo: "gram", titulo: "Fórmulas + subjuntivo",
      idea: "à supposer que, en admettant que, pour peu que: siempre con subjuntivo, como «suponiendo que sea».",
      intro: "Tres fórmulas, un solo modo.",
      tabla: [["Francés", "Español", "Ejemplo"], [
        ["à supposer que", "suponiendo que", "À supposer que ce soit vrai, …"],
        ["en admettant que", "admitiendo que", "En admettant que tu aies raison, …"],
        ["pour peu que", "por poco que", "Pour peu qu'il fasse un effort, il réussira."]
      ]],
      regla: ["Pour peu que = basta una condición mínima."] },
    { id: "autres", tipo: "gram", titulo: "Inversión y yuxtaposición",
      idea: "Sin conjunción: invierte el verbo en condicional o pon dos condicionales seguidos.",
      intro: "Registro muy culto, sobre todo escrito.",
      tabla: [["Francés", "Español", "Forma"], [
        ["Viendrait-il à échouer, nous l'aiderions.", "Si llegara a fracasar, lo ayudaríamos.", "inversión + condicional"],
        ["Il viendrait, je serais ravi.", "Si viniera, estaría encantada.", "dos condicionales"],
        ["En travaillant, tu réussiras.", "Si trabajas, tendrás éxito.", "gerundio"]
      ]],
      regla: ["au cas où + condicional: Au cas où il pleuvrait, …"] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Errores típicos.",
      errores: [
        ["À supposer que l'hypothèse est vraie", "À supposer que l'hypothèse soit vraie", "Subjuntivo."],
        ["Pour peu qu'il fait un effort", "Pour peu qu'il fasse un effort", "Subjuntivo."],
        ["Au cas où il pleuve", "Au cas où il pleuvrait", "au cas où + condicional."]
      ] }
  ],
  ejemplos: [
    { sit: "Suponiendo que sea verdad…", resp: "À supposer que ce soit vrai…", pasos: ["à supposer que + subjuntivo."], porque: "soit." },
    { sit: "Por poco que haga un esfuerzo, lo logrará.", resp: "Pour peu qu'il fasse un effort, il réussira.", pasos: ["fasse: subjuntivo de faire."], porque: "Condición mínima." },
    { sit: "Si llegara a fracasar… (muy culto)", resp: "Viendrait-il à échouer, …", pasos: ["Inversión + condicional."], porque: "Sin si." }
  ],
  comprueba: [
    { q: "à supposer que + …", o: ["subjuntivo", "indicativo"], a: 0, b: "subj", porque: "Subjuntivo." },
    { q: "«pour peu que» significa…", o: ["por poco que", "para que"], a: 0, b: "subj", porque: "Condición mínima." },
    { q: "«Viendrait-il à échouer» es…", o: ["una hipótesis", "una pregunta"], a: 0, b: "autres", porque: "Inversión hipotética." }
  ],
  practica: [
    { fase: "guiada", c: ["hy-subj"], k: "choice", ask: "Suponiendo que sea verdad…", q: "Elige:", o: ["À supposer que ce soit vrai…", "À supposer que c'est vrai…", "À supposer que ce serait vrai…"], a: 0, pista: "Subjuntivo.", why: "<b>soit</b>." },
    { fase: "guiada", c: ["hy-autres"], k: "choice", ask: "Si llegara a fracasar…", q: "Elige:", o: ["Viendrait-il à échouer, …", "Vient-il à échouer si, …", "Il viendrait-il échouer, …"], a: 0, pista: "Inversión + condicional.", why: "Inversión." },
    { fase: "indep", c: ["hy-subj"], k: "fill", ask: "Escribe «admitiendo».", q: "En ___ que tu aies raison, que proposes-tu ?", acc: ["admettant"], why: "<b>admettant</b>." },
    { fase: "indep", c: ["hy-subj"], k: "fill", ask: "Escribe faire en subjuntivo.", q: "Pour peu qu'il ___ un effort, il réussira.", acc: ["fasse"], why: "<b>fasse</b>." },
    { fase: "indep", c: ["hy-subj"], k: "choice", es: true, ask: "«Pour peu qu'on l'encourage, il progresse.» Expresa…", q: "Elige:", o: ["una condición mínima suficiente", "una finalidad", "una oposición"], a: 0, why: "Basta un poco." },
    { fase: "indep", c: ["hy-subj"], k: "spot", ask: "Toca el error.", s: "À supposer que cette théorie [est] exacte , il faudrait revoir le modèle .", fix: "soit", why: "Subjuntivo." },
    { fase: "aplica", c: ["hy-autres", "hy-subj"], k: "sort", ask: "¿Subjuntivo o condicional?", ctx: "Repasas las fórmulas.", q: "Clasifica.", cats: ["Subjuntivo", "Condicional"], items: [["pour peu que", 0], ["à supposer que", 0], ["en admettant que", 0], ["au cas où", 1], ["Viendrait-il à échouer", 1]], why: "au cas où e inversión: condicional." },
    { fase: "aplica", c: ["hy-autres"], k: "choice", ask: "Dos condicionales seguidos:", ctx: "Escribes una carta formal.", q: "Elige:", o: ["Il viendrait, je serais ravi.", "Il vient, je serais ravi."], a: 0, why: "Yuxtaposición." },
    { fase: "dominio", c: ["hy-subj"], k: "order", ask: "Ordena.", tokens: ["À supposer", "qu'il", "ait", "raison"], why: "à supposer que + subjuntivo." },
    { fase: "dominio", c: ["hy-autres"], k: "choice", ask: "Au cas où il ___", q: "Elige:", o: ["pleuvrait", "pleuve"], a: 0, why: "Condicional." },
    { fase: "dominio", c: ["hy-subj", "hy-autres"], k: "listen", ask: "Escucha y escribe.", say: "Pour peu que les conditions soient réunies, l'expérience pourra être reproduite.", acc: ["Pour peu que les conditions soient réunies, l'expérience pourra être reproduite."], num: false, dict: true, why: "Pour peu que + subjuntivo." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche"] }
};

/* Lección 39 · Elipsis y paralelismo (retoma la puntuación) */
window.__ENSENA["prog-ellipse"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Ellipse et parallélisme",
  roles: {},
  objetivo: {
    que: "Vas a dar ritmo a tus frases: quitar lo repetido, enumerar elementos del mismo tipo y usar «plus… plus».",
    corto: "Frases con ritmo, sin repetir.",
    podras: ["Suprimir el verbo repetido con una coma.", "Enumerar con paralelismo.", "Usar plus… plus, ni… ni, soit… soit."],
    iconos: ["ic2/lapiz", "m2d/escribiendo", "ic2/nota"],
    previos: ["La puntuación (lección 12)."],
    capacidad: "Ahora escribes con la concisión y el ritmo del texto académico."
  },
  requiere: ["po-virgule"],
  recupera: ["po-virgule"],
  conceptos: {
    "el-ellipse": { n: "La elipsis del verbo", b: "ellipse" },
    "el-parall": { n: "Paralelismo y correlación", b: "parall" }
  },
  video: {
    titulo: "Elipsis y paralelismo", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "Plus on lit, plus on apprend.", seg: [
        { es: "Hola. Hoy, ritmo: quitar lo repetido y repetir solo la estructura." } ] },
      { v: "dos",
        a: { tag: "elipsis", fr: "Paul aime le thé ; Anne, le café.", es: "la coma reemplaza «aime»" },
        b: { tag: "paralelismo", fr: "Il faut informer, former et accompagner.", es: "tres infinitivos" },
        seg: [
          { es: "La coma reemplaza el verbo repetido.", p: 1 },
          { es: "Y en una enumeración, todos los elementos del mismo tipo.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "___ on lit, plus on apprend.", o: ["Plus", "Le plus"], a: 0,
        bien: "¡Sí! Plus… plus, sin artículo.", mal: "Es plus… plus, sin artículo.",
        seg: [ { es: "Pausa. Cuanto más se lee, más se aprende." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["les uns ; les autres,", "plus… plus", "ni… ni", "soit… soit"], seg: [
        { es: "Coma en lugar del verbo, enumeraciones parejas y correlaciones.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Una enumeración coja", img: "bg-biblioteca", yo: "laura",
    escena: "Laura escribe «Il faut l'information, former et accompagner».",
    pj: __PJ,
    lineas: [
      ["tutrice", "« L'information », puis « former » : un nom et un verbe.", "«L'information», luego «former»: un nombre y un verbo."],
      ["laura", "Il faut trois verbes ?", "¿Hacen falta tres verbos?"],
      ["tutrice", "Oui, ou trois noms. Mais pas un mélange.", "Sí, o tres nombres. Pero no una mezcla."],
      ["laura", "Il faut informer, former et accompagner.", "Hay que informar, formar y acompañar."]
    ],
    fijate: "Fíjate: el paralelismo da ritmo y claridad."
  },
  ensena: [
    { id: "ellipse", tipo: "gram", titulo: "La elipsis del verbo",
      idea: "Si el verbo se repite, quítalo y pon una coma en su lugar.",
      intro: "Como en español: «Unos trabajan; otros, no».",
      tabla: [["Francés", "Español", "Se omite"], [
        ["Paul aime le thé ; Anne, le café.", "Paul ama el té; Anne, el café.", "aime"],
        ["Les uns applaudissent ; les autres, sifflent.", "Unos aplauden; otros, silban.", "—"],
        ["Les uns réclament plus de liberté ; les autres, plus de sécurité.", "Unos reclaman más libertad; otros, más seguridad.", "réclament"]
      ]],
      regla: ["Punto y coma entre las dos partes, coma en el lugar del verbo."] },
    { id: "parall", tipo: "gram", titulo: "Paralelismo y correlación",
      idea: "Enumera elementos del mismo tipo y usa parejas fijas: plus… plus, ni… ni, soit… soit.",
      intro: "Nada de mezclar nombre y verbo.",
      tabla: [["Francés", "Español", "Detalle"], [
        ["informer, former et accompagner", "informar, formar y acompañar", "tres verbos"],
        ["Plus on lit, plus on apprend.", "Cuanto más se lee, más se aprende.", "plus… plus"],
        ["Moins on dort, moins on se concentre.", "Cuanto menos se duerme, menos…", "moins… moins"],
        ["soit… soit / ni… ni", "o… o / ni… ni", "correlación"]
      ]],
      regla: ["Tres elementos (ternario) cierran una frase con fuerza."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Errores típicos.",
      errores: [
        ["Il faut l'information, former et accompagner.", "Il faut informer, former et accompagner.", "Misma categoría."],
        ["Le plus je travaille, plus j'apprends.", "Plus je travaille, plus j'apprends.", "Sin artículo."],
        ["former, d'informer et l'accompagnement", "former, informer et accompagner", "Paralelismo."]
      ] }
  ],
  ejemplos: [
    { sit: "Cuanto más trabajo, más aprendo.", resp: "Plus je travaille, plus j'apprends.", pasos: ["plus… plus, sin artículo."], porque: "Correlación." },
    { sit: "Quita el verbo repetido: «Paul aime le thé ; Anne aime le café.»", resp: "Paul aime le thé ; Anne, le café.", pasos: ["Coma en lugar de aime."], porque: "Elipsis." },
    { sit: "Corrige: «lire, l'écriture et compter».", resp: "lire, écrire et compter", pasos: ["Tres verbos."], porque: "Paralelismo." }
  ],
  comprueba: [
    { q: "«Anne, le café»: la coma reemplaza…", o: ["el verbo", "el sujeto"], a: 0, b: "ellipse", porque: "El verbo." },
    { q: "Cuanto más… más →", o: ["plus… plus", "le plus… le plus"], a: 0, b: "parall", porque: "Sin artículo." },
    { q: "Una enumeración mezcla…", o: ["nunca nombres y verbos", "nombres y verbos"], a: 0, b: "parall", porque: "Paralelismo." }
  ],
  practica: [
    { fase: "guiada", c: ["el-parall"], k: "choice", ask: "Elige la enumeración correcta.", q: "Ce projet vise à…", o: ["informer, sensibiliser et agir.", "l'information, sensibiliser et l'action.", "informer, la sensibilisation et agir."], a: 0, pista: "Tres verbos.", why: "Paralelismo." },
    { fase: "guiada", c: ["el-ellipse"], k: "choice", es: true, ask: "«Paul aime le thé ; Anne, le café.» ¿Qué se omite?", q: "Elige:", o: ["el verbo «aime»", "el sujeto", "el artículo"], a: 0, pista: "Lo que reemplaza la coma.", why: "aime." },
    { fase: "indep", c: ["el-parall"], k: "choice", ask: "Cuanto más trabajo, más aprendo.", q: "Elige:", o: ["Plus je travaille, plus j'apprends.", "Plus je travaille, le plus j'apprends.", "Le plus je travaille, plus j'apprends."], a: 0, why: "plus… plus." },
    { fase: "indep", c: ["el-parall"], k: "fill", ask: "Completa.", q: "___ on attend, moins on a de choix.", acc: ["Plus"], why: "<b>Plus</b>… moins." },
    { fase: "indep", c: ["el-ellipse"], k: "fill", ask: "Completa.", q: "Les uns applaudissent ; les ___ , sifflent.", acc: ["autres"], why: "<b>les autres</b>." },
    { fase: "indep", c: ["el-parall"], k: "spot", ask: "Toca la palabra que rompe el paralelismo.", s: "Ce programme permet de former , d'informer et l'[accompagnement] des jeunes .", fix: "accompagner", why: "Tres verbos." },
    { fase: "aplica", c: ["el-parall"], k: "match", ask: "Une el francés y el español.", ctx: "Correlaciones útiles.", q: "Francés → español", pairs: [["plus… plus", "cuanto más… más"], ["soit… soit", "o… o"], ["ni… ni", "ni… ni"]], why: "Correlaciones." },
    { fase: "aplica", c: ["el-parall"], k: "sort", ask: "¿Paralelismo correcto?", ctx: "Revisas tu ensayo.", q: "Clasifica.", cats: ["Correcto", "Incorrecto"], items: [["lire, écrire et compter", 0], ["informer, former et accompagner", 0], ["lire, l'écriture et compter", 1], ["comprendre et l'action", 1]], why: "Misma categoría." },
    { fase: "dominio", c: ["el-parall"], k: "order", ask: "Ordena.", tokens: ["Plus", "on lit,", "plus", "on apprend."], why: "plus… plus." },
    { fase: "dominio", c: ["el-ellipse"], k: "choice", ask: "Elige la elipsis correcta.", q: "Elige:", o: ["Les uns partent à la mer ; les autres, à la montagne.", "Les uns partent à la mer ; les autres partent, à la montagne."], a: 0, why: "Coma en lugar del verbo." },
    { fase: "dominio", c: ["el-ellipse", "el-parall"], k: "listen", ask: "Escucha y escribe.", say: "Les uns réclament plus de liberté ; les autres, plus de sécurité.", acc: ["Les uns réclament plus de liberté ; les autres, plus de sécurité."], num: false, dict: true, why: "Elipsis." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche", "Paul", "Anne"] }
};

/* Lección 40 · Modalizar (retoma la nuance de argumentar) */
window.__ENSENA["prog-modalisation-c1"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Modaliser son discours",
  roles: {},
  objetivo: {
    que: "Vas a indicar cuán seguro estás: certeza, probabilidad, posibilidad o límite, con el modo correcto.",
    corto: "Decir cuán seguro estás, con prudencia científica.",
    podras: ["Elegir la fórmula según el grado de certeza.", "Poner indicativo tras la certeza.", "Poner subjuntivo tras la posibilidad."],
    iconos: ["m2d/pensativo", "ic2/birrete", "ic2/lapiz"],
    previos: ["Matizar al argumentar (lección 20)."],
    capacidad: "Ahora escribes con la prudencia que exige una síntesis o un ensayo."
  },
  requiere: ["ar-nuance", "ac-verbes"],
  recupera: ["ar-nuance", "ac-verbes"],
  conceptos: {
    "mo-degres": { n: "Grados de certeza", b: "degres" },
    "mo-mode": { n: "Indicativo o subjuntivo", b: "mode" }
  },
  video: {
    titulo: "Modalizar", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/pensativo", grande: "certain · probable · possible", seg: [
        { es: "Hola. Un texto científico dice cuán seguro está de lo que afirma." } ] },
      { v: "frase", filas: [
          { nota: "certeza · indicativo", p: 1, partes: [["Force est de constater que", "-", 1]] },
          { nota: "probabilidad · indicativo", p: 2, partes: [["Selon toute vraisemblance,", "-", 2]] },
          { nota: "posibilidad · subjuntivo", p: 3, partes: [["Il n'est pas exclu que", "-", 3]] } ], seg: [
        { es: "Certeza: hay que reconocer que.", p: 1 },
        { es: "Probabilidad: con toda probabilidad.", p: 2 },
        { es: "Posibilidad: no se excluye que, con subjuntivo.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "Force est de constater que la situation ___ grave.", o: ["est", "soit"], a: 0,
        bien: "¡Sí! Certeza → indicativo.", mal: "Es certeza: indicativo, est.",
        seg: [ { es: "Pausa. ¿Indicativo o subjuntivo?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["il est indéniable que", "il apparaît que", "il se pourrait que", "dans une certaine mesure"], seg: [
        { es: "Certeza y probabilidad con indicativo; posibilidad con subjuntivo; y limita con «en cierta medida».", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Demasiado seguro", img: "bg-biblioteca", yo: "laura",
    escena: "Laura afirma algo que el estudio solo sugiere.",
    pj: __PJ,
    lineas: [
      ["tutrice", "L'étude ne prouve pas cela. Elle le suggère.", "El estudio no prueba eso. Lo sugiere."],
      ["laura", "Alors j'écris « il apparaît que » ?", "¿Entonces escribo «il apparaît que»?"],
      ["tutrice", "Oui, ou « il n'est pas exclu que », avec le subjonctif.", "Sí, o «il n'est pas exclu que», con subjuntivo."],
      ["laura", "Il n'est pas exclu que les résultats soient faussés.", "No se excluye que los resultados estén falseados."]
    ],
    fijate: "Fíjate: el modo cambia según la certeza."
  },
  ensena: [
    { id: "degres", tipo: "gram", titulo: "Grados de certeza",
      idea: "Elige la fórmula según lo seguro que estés: certeza, probabilidad, posibilidad o límite.",
      intro: "De más seguro a menos:",
      tabla: [["Fórmula", "Español", "Grado"], [
        ["force est de constater que, il est indéniable que", "hay que reconocer, es innegable", "certeza"],
        ["il ressort de cette étude que", "se desprende de este estudio que", "certeza"],
        ["selon toute vraisemblance, il apparaît que", "con toda probabilidad, parece que", "probabilidad"],
        ["il se pourrait que, il n'est pas exclu que", "podría ser que, no se excluye que", "posibilidad"],
        ["dans une large mesure, dans une certaine mesure", "en gran medida, en cierta medida", "límite"]
      ]],
      regla: ["vraisemblance = probabilidad."] },
    { id: "mode", tipo: "gram", titulo: "Indicativo o subjuntivo",
      idea: "Certeza y probabilidad → indicativo. Posibilidad → subjuntivo.",
      intro: "Igual que en español: «es seguro que es» / «es posible que sea».",
      tabla: [["Fórmula", "Modo", "Ejemplo"], [
        ["force est de constater que", "indicativo", "… que la situation est grave."],
        ["il apparaît que", "indicativo", "… que les jeunes lisent davantage."],
        ["il se pourrait que", "subjuntivo", "… que les chiffres soient sous-estimés."],
        ["il n'est pas exclu que", "subjuntivo", "… que la loi soit modifiée."]
      ]],
      regla: ["il semble que suele ir con subjuntivo."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Errores típicos.",
      errores: [
        ["Force est de constater qu'il soit…", "Force est de constater qu'il est…", "Certeza → indicativo."],
        ["Il n'est pas exclu que la loi est modifiée.", "… que la loi soit modifiée.", "Posibilidad → subjuntivo."],
        ["Il sort de cette étude que…", "Il ressort de cette étude que…", "ressortir."]
      ] }
  ],
  ejemplos: [
    { sit: "Hay que reconocer que las desigualdades aumentan.", resp: "Force est de constater que les inégalités se creusent.", pasos: ["Certeza.", "Indicativo."], porque: "Certeza." },
    { sit: "No se excluye que la tendencia se invierta.", resp: "Il n'est pas exclu que la tendance s'inverse.", pasos: ["Posibilidad.", "Subjuntivo."], porque: "Posibilidad." },
    { sit: "Con toda probabilidad, la tendencia seguirá.", resp: "Selon toute vraisemblance, la tendance se poursuivra.", pasos: ["Probabilidad."], porque: "vraisemblance." }
  ],
  comprueba: [
    { q: "Certeza →", o: ["indicativo", "subjuntivo"], a: 0, b: "mode", porque: "Indicativo." },
    { q: "«il se pourrait que» expresa…", o: ["posibilidad", "certeza"], a: 0, b: "degres", porque: "Posibilidad." },
    { q: "Se desprende de este estudio →", o: ["Il ressort de cette étude", "Il sort de cette étude"], a: 0, b: "degres", porque: "ressortir." }
  ],
  practica: [
    { fase: "guiada", c: ["mo-degres"], k: "choice", es: true, ask: "«Force est de constater que…» expresa…", q: "Elige:", o: ["certeza", "duda", "deseo"], a: 0, pista: "Hay que reconocer…", why: "Certeza." },
    { fase: "guiada", c: ["mo-mode"], k: "choice", ask: "No se excluye que…", q: "Elige:", o: ["Il n'est pas exclu que + subj.", "Il n'est pas exclu que + ind.", "Il est pas exclu de que"], a: 0, pista: "Posibilidad.", why: "Subjuntivo." },
    { fase: "indep", c: ["mo-degres"], k: "choice", ask: "Se desprende de este estudio que…", q: "Elige:", o: ["Il ressort de cette étude que…", "Il sort de cette étude que…", "Il ressorte cette étude de que…"], a: 0, why: "<b>ressort</b>." },
    { fase: "indep", c: ["mo-degres"], k: "fill", ask: "Escribe «probabilidad».", q: "Selon toute ___ , la tendance se poursuivra.", acc: ["vraisemblance"], why: "<b>vraisemblance</b>." },
    { fase: "indep", c: ["mo-mode"], k: "fill", ask: "Escribe être en subjuntivo (ellos).", q: "Il se pourrait que les chiffres ___ sous-estimés.", acc: ["soient"], why: "<b>soient</b>." },
    { fase: "indep", c: ["mo-mode"], k: "spot", ask: "Toca el error.", s: "Force est de constater que la situation [soit] préoccupante .", fix: "est", why: "Certeza → indicativo." },
    { fase: "aplica", c: ["mo-degres"], k: "match", ask: "Une la fórmula y el grado.", ctx: "Redactas tu síntesis.", q: "Fórmula → grado", pairs: [["il est indéniable que", "certeza"], ["selon toute vraisemblance", "probabilidad"], ["il se pourrait que", "posibilidad"], ["dans une certaine mesure", "límite"]], why: "Grados." },
    { fase: "aplica", c: ["mo-mode"], k: "sort", ask: "¿Indicativo o subjuntivo?", ctx: "Después de la fórmula.", q: "Clasifica.", cats: ["Indicativo", "Subjuntivo"], items: [["force est de constater que", 0], ["il apparaît que", 0], ["il est indéniable que", 0], ["il se pourrait que", 1], ["il n'est pas exclu que", 1]], why: "Certeza y probabilidad → indicativo." },
    { fase: "dominio", c: ["mo-degres"], k: "choice", ask: "Es innegable que…", q: "Elige:", o: ["Il est indéniable que…", "Il est niable que…"], a: 0, why: "<b>indéniable</b>." },
    { fase: "dominio", c: ["mo-mode"], k: "fill", ask: "Escribe être en subjuntivo.", q: "Il n'est pas exclu que la loi ___ modifiée.", acc: ["soit"], why: "<b>soit</b>." },
    { fase: "dominio", c: ["mo-degres", "mo-mode"], k: "listen", ask: "Escucha y escribe.", say: "Il ressort de cette enquête que les jeunes s'informent surtout en ligne.", acc: ["Il ressort de cette enquête que les jeunes s'informent surtout en ligne."], num: false, dict: true, why: "Certeza + indicativo." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche"] }
};

/* Lección 41 · Los tiempos del texto académico (retoma el compte rendu) */
window.__ENSENA["prog-temps-academique"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Les temps du texte académique",
  roles: {},
  objetivo: {
    que: "Vas a elegir el tiempo correcto: presente para comentar, passé composé para resultados, futuro para el plan.",
    corto: "Cada tiempo tiene su función en el texto académico.",
    podras: ["Comentar un texto en presente.", "Contar resultados en passé composé.", "Anunciar el plan en futuro."],
    iconos: ["m2d/reloj", "ic2/lapiz", "ic2/birrete"],
    previos: ["El compte rendu (lección 24) y el discurso referido (lección 16)."],
    capacidad: "Ahora usas tiempos coherentes en resúmenes, síntesis y ensayos."
  },
  requiere: ["cr-diff", "cr-verbes", "dr-temps"],
  recupera: ["cr-verbes", "dr-temps"],
  conceptos: {
    "ta-present": { n: "Presente de comentario", b: "present" },
    "ta-autres": { n: "Passé composé, futuro y condicional", b: "autres" }
  },
  video: {
    titulo: "Los tiempos académicos", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/reloj", grande: "L'auteur montre…", seg: [
        { es: "Hola. Aunque el texto sea antiguo, lo comentas en presente." } ] },
      { v: "dos",
        a: { tag: "así no", fr: "L'auteur montra que…", es: "pasado simple" },
        b: { tag: "así sí", fr: "L'auteur montre que…", es: "presente de comentario" },
        seg: [
          { es: "Así no.", p: 1 },
          { es: "Así sí:", p: 2 },
          { fr: "L'auteur montre que…", p: 2 } ] },
      { v: "frase", filas: [
          { nota: "comentar · presente", p: 1, partes: [["L'auteur souligne…", "-", 1]] },
          { nota: "resultado · passé composé", p: 2, partes: [["Une étude a montré…", "-", 2]] },
          { nota: "plan · futuro", p: 3, partes: [["Nous examinerons…", "-", 3]] } ], seg: [
        { es: "Presente para comentar,", p: 1 },
        { es: "passé composé para un resultado,", p: 2 },
        { es: "y futuro para anunciar el plan.", p: 3 } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["L'auteur souligne", "a montré", "Nous verrons", "serait"], seg: [
        { es: "Y el condicional para un dato no confirmado. No cambies de tiempo sin razón.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Un compte rendu en pasado", img: "bg-biblioteca", yo: "laura",
    escena: "Laura escribe «l'auteur défendit» en su compte rendu.",
    pj: __PJ,
    lineas: [
      ["tutrice", "« L'auteur défendit » : pourquoi le passé simple ?", "«L'auteur défendit»: ¿por qué el pasado simple?"],
      ["laura", "L'article date de 1990.", "El artículo es de 1990."],
      ["tutrice", "On commente toujours au présent : « l'auteur défend ».", "Siempre se comenta en presente: «l'auteur défend»."],
      ["laura", "Et pour le plan, le futur : « nous verrons ».", "Y para el plan, el futuro: «nous verrons»."]
    ],
    fijate: "Fíjate: el passé simple queda para la narración histórica."
  },
  ensena: [
    { id: "present", tipo: "gram", titulo: "Presente de comentario",
      idea: "Para comentar un texto o decir una verdad general, usa el presente, aunque el texto sea antiguo.",
      intro: "Igual que en español: «El autor sostiene que…».",
      tabla: [["Francés", "Español", "Uso"], [
        ["L'auteur montre que…", "El autor muestra que…", "comentar"],
        ["Dans ce texte, la journaliste analyse…", "En este texto, la periodista analiza…", "comentar"],
        ["L'auteur défend une thèse originale.", "El autor defiende una tesis original.", "no défendit"]
      ]],
      regla: ["Nada de passé simple ni imperfecto para comentar."] },
    { id: "autres", tipo: "gram", titulo: "Passé composé, futuro, condicional",
      idea: "Passé composé = resultado; futuro = plan; condicional = dato no confirmado.",
      intro: "Cada tiempo, una función:",
      tabla: [["Francés", "Español", "Uso"], [
        ["Une étude récente a montré que…", "Un estudio reciente ha mostrado que…", "resultado"],
        ["Nous verrons d'abord…, puis nous analyserons…", "Veremos primero…, luego analizaremos…", "plan"],
        ["Nous présenterons d'abord le contexte.", "Presentaremos primero el contexto.", "plan"],
        ["Le nombre de victimes serait de 30.", "Habría 30 víctimas.", "no confirmado"]
      ]],
      regla: ["Coherencia: no cambies de tiempo sin razón."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Errores típicos.",
      errores: [
        ["L'auteur montra que…", "L'auteur montre que…", "Comentario: presente."],
        ["Nous examinâmes d'abord…", "Nous examinerons d'abord…", "Plan: futuro."],
        ["Les chercheurs observèrent…", "Les chercheurs ont observé…", "Resultado: passé composé."]
      ] }
  ],
  ejemplos: [
    { sit: "El autor afirma que…", resp: "L'auteur affirme que…", pasos: ["Presente."], porque: "Comentario." },
    { sit: "Un estudio ha mostrado que…", resp: "Une étude récente a montré que…", pasos: ["Passé composé."], porque: "Resultado." },
    { sit: "Veremos los límites.", resp: "Nous verrons les limites.", pasos: ["Futuro."], porque: "Plan." }
  ],
  comprueba: [
    { q: "Para comentar un texto:", o: ["presente", "pasado simple"], a: 0, b: "present", porque: "Presente." },
    { q: "Para anunciar el plan:", o: ["futuro", "imperfecto"], a: 0, b: "autres", porque: "Futuro." },
    { q: "Dato no confirmado:", o: ["condicional", "presente"], a: 0, b: "autres", porque: "Condicional." }
  ],
  practica: [
    { fase: "guiada", c: ["ta-present"], k: "choice", ask: "El autor afirma que…", q: "Elige:", o: ["L'auteur affirme que…", "L'auteur affirma que…", "L'auteur affirmerait que…"], a: 0, pista: "Presente.", why: "<b>affirme</b>." },
    { fase: "guiada", c: ["ta-autres"], k: "choice", ask: "Anuncia el plan.", q: "Elige:", o: ["Nous examinerons d'abord…", "Nous examinâmes d'abord…", "Nous examinions d'abord…"], a: 0, pista: "Futuro.", why: "<b>examinerons</b>." },
    { fase: "indep", c: ["ta-autres"], k: "choice", ask: "Resultado de un estudio:", q: "Elige:", o: ["Les chercheurs ont observé…", "Les chercheurs observeraient hier…", "Les chercheurs observèrent demain…"], a: 0, why: "Passé composé." },
    { fase: "indep", c: ["ta-present"], k: "fill", ask: "Escribe analyser en presente.", q: "Dans ce texte, la journaliste ___ les effets du télétravail.", acc: ["analyse"], why: "<b>analyse</b>." },
    { fase: "indep", c: ["ta-autres"], k: "fill", ask: "Escribe voir en futuro (nous).", q: "Dans une seconde partie, nous ___ les limites.", acc: ["verrons"], why: "<b>verrons</b>." },
    { fase: "indep", c: ["ta-present"], k: "spot", ask: "Toca el error.", s: "Dans son article , l'auteur [défendit] une thèse originale .", fix: "défend", why: "Presente." },
    { fase: "aplica", c: ["ta-autres", "ta-present"], k: "match", ask: "Une el uso y el tiempo.", ctx: "Planificas tu síntesis.", q: "Uso → tiempo", pairs: [["comentar el texto", "presente"], ["resultado de estudio", "passé composé"], ["anunciar el plan", "futuro"], ["dato no confirmado", "condicional"]], why: "Una función por tiempo." },
    { fase: "aplica", c: ["ta-autres"], k: "fill", ask: "Escribe présenter en futuro (nous).", ctx: "Tu introducción.", q: "Nous ___ d'abord le contexte.", acc: ["présenterons"], why: "<b>présenterons</b>." },
    { fase: "dominio", c: ["ta-present"], k: "choice", ask: "El autor muestra que…", q: "Elige:", o: ["L'auteur montre que…", "L'auteur montra que…"], a: 0, why: "Presente." },
    { fase: "dominio", c: ["ta-autres"], k: "choice", ask: "Un estudio ha revelado…", q: "Elige:", o: ["Une étude a révélé…", "Une étude révélait-elle…"], a: 0, why: "Passé composé." },
    { fase: "dominio", c: ["ta-present", "ta-autres"], k: "listen", ask: "Escucha y escribe.", say: "Dans cet article, l'auteure montre que les réseaux sociaux transforment l'information.", acc: ["Dans cet article, l'auteure montre que les réseaux sociaux transforment l'information."], num: false, dict: true, why: "Presente de comentario." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche"], previo: ["1990", "30"] }
};

/* Lección 42 · Las negaciones cultas */
window.__ENSENA["prog-negations-litteraires"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Négations soutenues",
  roles: {},
  objetivo: {
    que: "Vas a entender y usar las negaciones del registro culto: ne… guère, ne… point, nul, nullement y el «ne» solo.",
    corto: "Negar con elegancia: más allá de ne… pas.",
    podras: ["Entender ne… guère y ne… point.", "Usar nul y nullement.", "Escribir «Je ne saurais dire» sin pas."],
    iconos: ["m2d/pensativo", "ic2/libro", "ic2/pergamino"],
    previos: ["La negación con ne… pas, ne… jamais, ne… plus (A2 y B1)."],
    capacidad: "Ahora entiendes las negaciones de los textos cultos y las usas para variar tu escritura."
  },
  requiere: [],
  recupera: [],
  conceptos: {
    "ng-sens": { n: "guère, point, nul, nullement", b: "sens" },
    "ng-ne": { n: "El «ne» solo", b: "ne" }
  },
  video: {
    titulo: "Negaciones cultas", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/pensativo", grande: "ne… guère", seg: [
        { es: "Hola. En los textos cultos la negación no siempre es la de siempre. Hoy aprendes cinco formas." } ] },
      { v: "dos",
        a: { tag: "corriente", fr: "Il ne sort presque pas.", es: "casi no sale" },
        b: { tag: "culto", fr: "Il ne sort guère.", es: "apenas sale" },
        seg: [
          { es: "En la lengua corriente:", p: 1 },
          { fr: "Il ne sort presque pas.", p: 1 },
          { es: "En un texto culto:", p: 2 },
          { fr: "Il ne sort guère.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "___ n'est censé ignorer la loi.", o: ["Nul", "Nulle"], a: 0,
        bien: "¡Sí! Nadie, en general: masculino.", mal: "Para decir «nadie» en general se usa el masculino: Nul.",
        seg: [ { es: "Pausa. ¿Cómo se dice «nadie» en este refrán jurídico?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["ne… guère", "ne… point", "nul", "nullement", "je ne saurais"], seg: [
        { es: "Apenas, no, nadie, en absoluto. Y con cuatro verbos, basta con la primera partícula.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Un texto del siglo XIX", img: "bg-biblioteca", yo: "laura",
    escena: "Laura lee un ensayo antiguo para su síntesis y no entiende las negaciones.",
    pj: __PJ,
    lineas: [
      ["laura", "« Il ne sort guère. » Il ne sort jamais ?", "«Il ne sort guère.» ¿No sale nunca?"],
      ["tutrice", "Non : « ne… guère », c'est « presque pas ».", "No: «ne… guère» es «casi no»."],
      ["laura", "Et « je ne saurais dire » ? Il manque « pas ».", "¿Y «je ne saurais dire»? Falta «pas»."],
      ["tutrice", "Non, avec savoir, le « ne » seul suffit. C'est soutenu.", "No, con savoir basta el «ne» solo. Es culto."]
    ],
    fijate: "Fíjate: «guère» no es «nunca», sino «casi no»."
  },
  ensena: [
    { id: "sens", tipo: "gram", titulo: "Cuatro negaciones cultas",
      idea: "guère = casi no; point = no (literario); nul = ninguno o nadie; nullement = en absoluto.",
      intro: "Se forman igual que ne… pas: el ne va antes del verbo.",
      tabla: [["Francés", "Español", "Equivale a"], [
        ["Il ne sort guère.", "Apenas sale.", "ne… presque pas"],
        ["Il ne reste guère de temps.", "Apenas queda tiempo.", "ne… presque pas"],
        ["Je ne le crois point.", "No lo creo.", "ne… pas (literario)"],
        ["Nul n'est parfait.", "Nadie es perfecto.", "personne"],
        ["Nul n'est censé ignorer la loi.", "Nadie puede alegar ignorancia de la ley.", "personne"],
        ["Sans nul doute, c'est le meilleur roman.", "Sin ninguna duda, es la mejor novela.", "aucun"],
        ["Je ne suis nullement convaincu.", "No estoy en absoluto convencido.", "pas du tout"],
        ["Je ne suis aucunement d'accord.", "No estoy de ningún modo de acuerdo.", "pas du tout"]
      ]],
      regla: ["Nul en sentido general («nadie») va en masculino: Nul ne peut…", "Como determinante concuerda: nulle part, sans nulle hésitation."] },
    { id: "ne", tipo: "gram", titulo: "El «ne» solo",
      idea: "Con cesser, oser, pouvoir y savoir, el registro culto quita el pas.",
      intro: "Se entiende igual; solo cambia el registro.",
      tabla: [["Culto", "Corriente", "Español"], [
        ["Il ne cesse de pleuvoir.", "Il ne cesse pas de pleuvoir.", "No para de llover."],
        ["Elle n'ose avouer son erreur.", "Elle n'ose pas avouer son erreur.", "No se atreve a confesar su error."],
        ["Je ne saurais vous dire.", "Je ne peux pas vous dire.", "No sabría decirle."],
        ["Nul ne peut prévoir l'avenir.", "Personne ne peut prévoir l'avenir.", "Nadie puede prever el futuro."]
      ]],
      regla: ["Solo con estos cuatro verbos; con los demás, ne… pas."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Errores típicos.",
      errores: [
        ["Il ne sort guère = no sale nunca", "Il ne sort guère = casi no sale", "guère = casi no."],
        ["Nulle n'est censé ignorer la loi.", "Nul n'est censé ignorer la loi.", "Sentido general: masculino."],
        ["Je ne saurais pas vous dire pas.", "Je ne saurais vous dire.", "Un solo ne, sin pas."]
      ] }
  ],
  ejemplos: [
    { sit: "Apenas queda tiempo.", resp: "Il ne reste guère de temps.", pasos: ["ne antes del verbo.", "guère en lugar de pas."], porque: "guère = casi no." },
    { sit: "No sabría decirle (culto).", resp: "Je ne saurais vous dire.", pasos: ["savoir: basta el ne."], porque: "ne solo." },
    { sit: "No estoy en absoluto convencido.", resp: "Je ne suis nullement convaincu.", pasos: ["nullement en lugar de pas du tout."], porque: "Negación fuerte." }
  ],
  comprueba: [
    { q: "«Il ne mange guère» significa…", o: ["apenas come", "no come nunca"], a: 0, b: "sens", porque: "guère = casi no." },
    { q: "«Nul n'est parfait» significa…", o: ["Nadie es perfecto.", "Nada es perfecto."], a: 0, b: "sens", porque: "Nul = nadie." },
    { q: "¿Con qué verbo basta el «ne» solo?", o: ["savoir", "manger"], a: 0, b: "ne", porque: "cesser, oser, pouvoir, savoir." }
  ],
  practica: [
    { fase: "guiada", c: ["ng-sens"], k: "choice", es: true, ask: "«Il ne sort guère.» Significa…", q: "Elige:", o: ["Casi no sale.", "No sale nunca.", "Sale mucho."], a: 0, pista: "No es «nunca».", why: "<b>guère</b> = casi no." },
    { fase: "guiada", c: ["ng-ne"], k: "choice", ask: "No sabría decirle (culto).", q: "Elige:", o: ["Je ne saurais vous dire.", "Je ne saurais pas vous dire pas.", "Je sais pas vous dire."], a: 0, pista: "Con savoir basta el ne.", why: "<b>ne</b> solo." },
    { fase: "indep", c: ["ng-sens"], k: "fill", ask: "Escribe «en absoluto».", q: "Je ne suis ___ convaincu.", acc: ["nullement", "aucunement"], why: "<b>nullement</b>." },
    { fase: "indep", c: ["ng-sens"], k: "fill", ask: "Escribe «ninguna».", q: "Sans ___ doute, c'est le meilleur roman.", acc: ["nul"], why: "<b>sans nul doute</b>." },
    { fase: "indep", c: ["ng-sens"], k: "spot", ask: "Toca el error.", s: "[Nulle] n'est censé ignorer la loi .", fix: "Nul", why: "Sentido general: <b>Nul</b>." },
    { fase: "indep", c: ["ng-ne"], k: "choice", ask: "No para de llover (culto).", q: "Elige:", o: ["Il ne cesse de pleuvoir.", "Il cesse ne pleuvoir.", "Il ne cesse guère pleuvoir."], a: 0, why: "cesser + ne solo." },
    { fase: "aplica", c: ["ng-sens"], k: "match", ask: "Une cada negación con su sentido.", ctx: "Lees un ensayo antiguo.", q: "Francés → español", pairs: [["ne… guère", "casi no"], ["ne… point", "no (literario)"], ["nullement", "en absoluto"], ["nul", "nadie"]], why: "Negaciones cultas." },
    { fase: "aplica", c: ["ng-ne", "ng-sens"], k: "sort", ask: "¿Culto o corriente?", ctx: "Revisas el registro.", q: "Clasifica.", cats: ["Culto", "Corriente"], items: [["Il ne sort guère.", 0], ["Elle n'ose avouer son erreur.", 0], ["Nul n'est parfait.", 0], ["Il ne sort presque pas.", 1], ["Elle n'ose pas avouer son erreur.", 1], ["Personne ne peut prévoir l'avenir.", 1]], why: "Mismo sentido, otro registro." },
    { fase: "dominio", c: ["ng-sens"], k: "order", ask: "Ordena: «Apenas queda tiempo».", tokens: ["Il", "ne reste", "guère", "de temps."], why: "ne… guère." },
    { fase: "dominio", c: ["ng-ne"], k: "fill", ask: "Escribe la palabra que falta.", q: "___ ne peut prévoir l'avenir.", acc: ["Nul"], why: "<b>Nul</b> = nadie." },
    { fase: "dominio", c: ["ng-sens", "ng-ne"], k: "listen", ask: "Escucha y escribe.", say: "Nul ne saurait nier l'importance de cette découverte.", acc: ["Nul ne saurait nier l'importance de cette découverte."], num: false, dict: true, why: "Nul + ne solo con savoir." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche"] }
};

/* Lección 43 · Los verbos del análisis (retoma el compte rendu y el registro académico) */
window.__ENSENA["prog-verbes-academiques"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Les verbes de l'analyse",
  roles: {},
  objetivo: {
    que: "Vas a describir con precisión lo que hace un autor: presenta, muestra, destaca, discute o apoya una idea.",
    corto: "Un verbo preciso en lugar de «dit».",
    podras: ["Elegir el verbo según lo que hace el autor.", "Usar mettre en évidence, souligner, nuancer, étayer.", "Construir porter sur y remettre en question."],
    iconos: ["m2d/escribiendo", "ic2/libros", "ic2/lapiz"],
    previos: ["Los verbos introductores del compte rendu (lección 24)."],
    capacidad: "Ahora resumes y comentas documentos sin repetir «l'auteur dit»."
  },
  requiere: ["cr-verbes", "ac-verbes"],
  recupera: ["cr-verbes"],
  conceptos: {
    "va-fonction": { n: "Un verbo para cada función", b: "fonction" },
    "va-constr": { n: "La construcción del verbo", b: "constr" }
  },
  video: {
    titulo: "Los verbos del análisis", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/escribiendo", grande: "L'auteur souligne…", seg: [
        { es: "Hola. Un buen resumen no repite «el autor dice». Elige el verbo según lo que hace el autor." } ] },
      { v: "frase", filas: [
          { nota: "presentar", p: 1, partes: [["Cet article porte sur…", "-", 1]] },
          { nota: "mostrar", p: 2, partes: [["Cette étude met en évidence…", "-", 2]] },
          { nota: "discutir", p: 3, partes: [["Le second texte nuance…", "-", 3]] } ], seg: [
        { es: "Para presentar el tema:", p: 1 },
        { es: "para mostrar un resultado:", p: 2 },
        { es: "y para discutir una idea.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "L'auteur ___ sa thèse par des exemples.", o: ["étaye", "réfute"], a: 0,
        bien: "¡Sí! Apoyar con pruebas.", mal: "Rechazar no encaja: el autor apoya su tesis.",
        seg: [ { es: "Pausa. El autor apoya su tesis con ejemplos. ¿Qué verbo?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["porter sur", "mettre en évidence", "souligner", "nuancer", "étayer"], seg: [
        { es: "Presentar, mostrar, destacar, discutir y apoyar: un verbo para cada cosa.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Cinco veces «dit»", img: "bg-biblioteca", yo: "laura",
    escena: "El compte rendu de Laura repite «l'auteur dit» en cada frase.",
    pj: __PJ,
    lineas: [
      ["tutrice", "« L'auteur dit », cinq fois. Que fait-il vraiment ?", "«El autor dice», cinco veces. ¿Qué hace realmente?"],
      ["laura", "Il montre un lien entre sommeil et réussite.", "Muestra un vínculo entre sueño y éxito."],
      ["tutrice", "Alors : « il met en évidence un lien ».", "Entonces: «pone de relieve un vínculo»."],
      ["laura", "Et le second texte nuance ce constat.", "Y el segundo texto matiza esta constatación."]
    ],
    fijate: "Fíjate: el verbo ya dice qué hace el autor."
  },
  ensena: [
    { id: "fonction", tipo: "gram", titulo: "Un verbo para cada función",
      idea: "Pregúntate qué hace el autor: presentar, mostrar, destacar, discutir o apoyar.",
      intro: "Cinco familias de verbos:",
      tabla: [["Función", "Verbos", "Español"], [
        ["presentar", "aborder, porter sur, traiter de", "abordar, tratar de"],
        ["mostrar", "mettre en évidence, mettre en lumière, révéler", "poner de relieve, revelar"],
        ["destacar", "souligner, insister sur", "subrayar, insistir en"],
        ["discutir", "nuancer, remettre en question, réfuter", "matizar, cuestionar, refutar"],
        ["rechazar", "L'auteur réfute cette thèse.", "El autor refuta esta tesis."],
        ["apoyar", "étayer, illustrer, appuyer", "fundamentar, ilustrar, apoyar"]
      ]],
      regla: ["étayer = apoyar con pruebas.", "réfuter = demostrar que una idea es falsa."] },
    { id: "constr", tipo: "gram", titulo: "La construcción del verbo",
      idea: "Algunos verbos llevan preposición fija: porter sur, insister sur, s'interroger sur.",
      intro: "Apréndelos con su preposición:",
      tabla: [["Francés", "Español", "Construcción"], [
        ["Cet article porte sur la mobilité étudiante.", "Este artículo trata de la movilidad estudiantil.", "porter sur + nombre"],
        ["Cette étude met en évidence un lien.", "Este estudio pone de relieve un vínculo.", "mettre en évidence + nombre"],
        ["L'auteur étaye sa thèse par des exemples.", "El autor apoya su tesis con ejemplos.", "étayer… par"],
        ["Le second texte remet en question cette analyse.", "El segundo texto cuestiona este análisis.", "remettre en question"],
        ["Le second texte remet en cause cette analyse.", "El segundo texto pone en duda este análisis.", "remettre en cause"],
        ["L'auteure s'interroge sur l'avenir du travail.", "La autora se pregunta por el futuro del trabajo.", "s'interroger sur"]
      ]],
      regla: ["Ojo: mettre en évidence, no «mettre en évident»."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Errores típicos.",
      errores: [
        ["L'auteur dit que… (cinco veces)", "L'auteur souligne / affirme / rappelle que…", "Varía el verbo."],
        ["Cette enquête met en évidente…", "Cette enquête met en évidence…", "évidence, nombre."],
        ["L'article porte de la mobilité", "L'article porte sur la mobilité", "porter sur."]
      ] }
  ],
  ejemplos: [
    { sit: "Este estudio pone de relieve un vínculo.", resp: "Cette étude met en évidence un lien.", pasos: ["Función: mostrar.", "mettre en évidence."], porque: "Mostrar un resultado." },
    { sit: "El autor matiza esta idea.", resp: "L'auteur nuance cette idée.", pasos: ["Función: discutir."], porque: "nuancer = matizar." },
    { sit: "El artículo trata del teletrabajo.", resp: "L'article porte sur le télétravail.", pasos: ["Función: presentar.", "porter sur."], porque: "Preposición fija." }
  ],
  comprueba: [
    { q: "«étayer» significa…", o: ["apoyar con pruebas", "debilitar"], a: 0, b: "fonction", porque: "Fundamentar." },
    { q: "Un texto que «nuance» otro…", o: ["lo matiza", "lo copia"], a: 0, b: "fonction", porque: "Matizar." },
    { q: "Trata de → porter…", o: ["sur", "de"], a: 0, b: "constr", porque: "porter sur." }
  ],
  practica: [
    { fase: "guiada", c: ["va-fonction"], k: "choice", es: true, ask: "«Il étaye son argument.» Significa…", q: "Elige:", o: ["Lo apoya con pruebas.", "Lo debilita.", "Lo oculta."], a: 0, pista: "Apoyar.", why: "<b>étayer</b>." },
    { fase: "guiada", c: ["va-constr"], k: "choice", ask: "Pone de relieve un problema.", q: "Elige:", o: ["Il met en évidence un problème.", "Il met en évidente un problème.", "Il met évident un problème."], a: 0, pista: "évidence.", why: "<b>mettre en évidence</b>." },
    { fase: "indep", c: ["va-constr"], k: "fill", ask: "Escribe el verbo «trata» (porter).", q: "L'article ___ sur les effets du télétravail.", acc: ["porte"], why: "<b>porte sur</b>." },
    { fase: "indep", c: ["va-constr"], k: "fill", ask: "Completa.", q: "Ce texte remet en ___ les idées reçues.", acc: ["question", "cause"], why: "<b>remettre en question</b>." },
    { fase: "indep", c: ["va-constr"], k: "spot", ask: "Toca el error.", s: "Cette enquête met en [évidente] les inégalités d'accès aux soins .", fix: "évidence", why: "<b>mettre en évidence</b>." },
    { fase: "indep", c: ["va-fonction"], k: "choice", ask: "El autor subraya un punto.", q: "Elige:", o: ["L'auteur souligne un point.", "L'auteur réfute un point.", "L'auteur porte un point."], a: 0, why: "Destacar: <b>souligner</b>." },
    { fase: "aplica", c: ["va-fonction"], k: "match", ask: "Une el verbo y su función.", ctx: "Preparas tu compte rendu.", q: "Verbo → función", pairs: [["aborder", "presentar"], ["mettre en lumière", "mostrar"], ["souligner", "destacar"], ["réfuter", "rechazar"]], why: "Verbos de análisis." },
    { fase: "aplica", c: ["va-fonction"], k: "sort", ask: "¿El autor apoya o discute la idea?", ctx: "Comparas dos documentos.", q: "Clasifica.", cats: ["Apoya", "Discute"], items: [["étayer", 0], ["illustrer", 0], ["appuyer", 0], ["réfuter", 1], ["remettre en cause", 1], ["nuancer", 1]], why: "Posición frente a una idea." },
    { fase: "dominio", c: ["va-fonction"], k: "order", ask: "Ordena: «El autor matiza esta idea».", tokens: ["L'auteur", "nuance", "cette", "idée."], why: "nuancer." },
    { fase: "dominio", c: ["va-constr"], k: "choice", ask: "La autora se pregunta por el futuro.", q: "Elige:", o: ["L'auteure s'interroge sur l'avenir.", "L'auteure s'interroge de l'avenir."], a: 0, why: "<b>s'interroger sur</b>." },
    { fase: "dominio", c: ["va-fonction", "va-constr"], k: "listen", ask: "Escucha y escribe.", say: "Cette étude met en évidence un lien entre le sommeil et la réussite.", acc: ["Cette étude met en évidence un lien entre le sommeil et la réussite."], num: false, dict: true, why: "mettre en évidence." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche"] }
};

/* Lección 44 · Conectores cultos (retoma causa, consecuencia y concesión) */
window.__ENSENA["prog-connecteurs-soutenus"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Connecteurs soutenus",
  roles: {},
  objetivo: {
    que: "Vas a variar tus conectores con los del registro culto: dès lors, de surcroît, a fortiori, à cet égard, il n'en demeure pas moins que.",
    corto: "Conectores de nivel C1, sin repetir «donc» ni «mais».",
    podras: ["Expresar la consecuencia con dès lors.", "Reforzar con de surcroît, qui plus est, a fortiori.", "Conceder con il n'en demeure pas moins que."],
    iconos: ["ic2/engranaje", "m2d/escribiendo", "ic2/libros"],
    previos: ["Causa y consecuencia (lección 17) y la concesión (lección 18)."],
    capacidad: "Ahora enlazas tus ideas con la precisión y el registro de un texto C1."
  },
  requiere: ["ca-csq", "co-opp"],
  recupera: ["ca-csq", "co-opp"],
  conceptos: {
    "cs-fonction": { n: "Consecuencia, refuerzo y precisión", b: "fonction" },
    "cs-concess": { n: "La concesión fuerte", b: "concess" }
  },
  video: {
    titulo: "Conectores cultos", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/engranaje", grande: "dès lors", seg: [
        { es: "Hola. Ya conoces los conectores básicos. Hoy, los del registro culto." } ] },
      { v: "frase", filas: [
          { nota: "consecuencia", p: 1, partes: [["dès lors", "-", 1]] },
          { nota: "refuerzo", p: 2, partes: [["de surcroît · a fortiori", "-", 2]] },
          { nota: "precisión", p: 3, partes: [["à cet égard", "-", 3]] } ], seg: [
        { es: "Uno para la consecuencia,", p: 1 },
        { es: "dos para reforzar,", p: 2 },
        { es: "y uno para precisar.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "Les adultes peinent ; ___ les enfants.", o: ["a fortiori", "à cet égard"], a: 0,
        bien: "¡Sí! Con mayor razón.", mal: "Aquí hace falta «con mayor razón»: a fortiori.",
        seg: [ { es: "Pausa. Si los adultos tienen dificultades, con mayor razón los niños." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["dès lors", "de surcroît", "a fortiori", "à cet égard", "il n'en demeure pas moins que"], seg: [
        { es: "Y para conceder con fuerza: es cierto, pero no es menos cierto que…", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Demasiados «donc»", img: "bg-biblioteca", yo: "laura",
    escena: "Laura escribe «donc» en cada párrafo de su ensayo.",
    pj: __PJ,
    lineas: [
      ["tutrice", "« Donc », « donc », « donc »… Variez.", "«Donc», «donc», «donc»… Varíe."],
      ["laura", "Les ressources sont limitées ; dès lors, il faut établir des priorités.", "Los recursos son limitados; por consiguiente, hay que fijar prioridades."],
      ["tutrice", "Très bien. Et pour concéder ?", "Muy bien. ¿Y para conceder?"],
      ["laura", "Certes, le coût est élevé ; il n'en demeure pas moins que le projet est utile.", "Es cierto que el coste es alto; no es menos cierto que el proyecto es útil."]
    ],
    fijate: "Fíjate: «dès lors» reemplaza a «donc» con más registro."
  },
  ensena: [
    { id: "fonction", tipo: "gram", titulo: "Consecuencia, refuerzo y precisión",
      idea: "dès lors = por consiguiente; de surcroît y qui plus est = además; a fortiori = con mayor razón; à cet égard = a este respecto.",
      intro: "Cada conector tiene una función precisa:",
      tabla: [["Francés", "Español", "Función"], [
        ["Les ressources sont limitées ; dès lors, il faut établir des priorités.", "por consiguiente", "consecuencia"],
        ["Le budget est réduit ; de ce fait, certains projets seront abandonnés.", "por ello", "consecuencia"],
        ["Le projet est coûteux ; de surcroît, il est risqué.", "además", "refuerzo"],
        ["C'est cher et, qui plus est, inefficace.", "y lo que es más", "refuerzo"],
        ["Si les adultes peinent, a fortiori les enfants.", "con mayor razón", "refuerzo"],
        ["À cet égard, les chiffres sont éloquents.", "a este respecto", "precisión"],
        ["en l'occurrence", "en este caso concreto", "precisión"]
      ]],
      regla: ["a fortiori es latín: sin acento en la a."] },
    { id: "concess", tipo: "gram", titulo: "La concesión fuerte",
      idea: "Certes…, il n'en demeure pas moins que… = es cierto que…, no es menos cierto que… (+ indicativo).",
      intro: "Admites un punto y lo superas:",
      tabla: [["Francés", "Español", "Modo"], [
        ["Certes, le coût est élevé ; il n'en demeure pas moins que le projet est utile.", "Es cierto…; no es menos cierto que…", "indicativo"],
        ["Toujours est-il que le problème demeure.", "Lo cierto es que el problema persiste.", "indicativo"]
      ]],
      regla: ["Después de estas fórmulas va indicativo, no subjuntivo."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Errores típicos.",
      errores: [
        ["à fortiori", "a fortiori", "Latín, sin acento."],
        ["Il ne demeure pas moins de que…", "Il n'en demeure pas moins que…", "Fórmula fija."],
        ["Dès lors que + coma al final", "Dès lors, …", "Al inicio de frase, seguido de coma."]
      ] }
  ],
  ejemplos: [
    { sit: "Los recursos son limitados; por consiguiente, hay que elegir.", resp: "Les ressources sont limitées ; dès lors, il faut choisir.", pasos: ["Consecuencia.", "dès lors + coma."], porque: "Consecuencia culta." },
    { sit: "Es caro y, lo que es más, ineficaz.", resp: "C'est cher et, qui plus est, inefficace.", pasos: ["Refuerzo."], porque: "qui plus est." },
    { sit: "Si los adultos tienen dificultades, con mayor razón los niños.", resp: "Si les adultes peinent, a fortiori les enfants.", pasos: ["Refuerzo lógico."], porque: "a fortiori." }
  ],
  comprueba: [
    { q: "«a fortiori» significa…", o: ["con mayor razón", "por la fuerza"], a: 0, b: "fonction", porque: "Con mayor razón." },
    { q: "«à cet égard» significa…", o: ["a este respecto", "por casualidad"], a: 0, b: "fonction", porque: "Precisión." },
    { q: "Después de «il n'en demeure pas moins que»…", o: ["indicativo", "subjuntivo"], a: 0, b: "concess", porque: "Indicativo." }
  ],
  practica: [
    { fase: "guiada", c: ["cs-fonction"], k: "choice", es: true, ask: "«en l'occurrence» significa…", q: "Elige:", o: ["en este caso concreto", "por casualidad", "en cambio"], a: 0, pista: "Precisión.", why: "<b>en este caso</b>." },
    { fase: "guiada", c: ["cs-concess"], k: "choice", ask: "No es menos cierto que…", q: "Elige:", o: ["Il n'en demeure pas moins que…", "Il ne demeure pas moins de que…", "Il en demeure moins que…"], a: 0, pista: "Fórmula fija.", why: "Fórmula fija." },
    { fase: "indep", c: ["cs-fonction"], k: "fill", ask: "Completa «por consiguiente».", q: "Le budget est réduit ; dès ___ , certains projets seront abandonnés.", acc: ["lors"], why: "<b>dès lors</b>." },
    { fase: "indep", c: ["cs-fonction"], k: "fill", ask: "Completa «lo que es más».", q: "C'est cher et, qui plus ___ , inefficace.", acc: ["est"], why: "<b>qui plus est</b>." },
    { fase: "indep", c: ["cs-fonction"], k: "spot", ask: "Toca el error.", s: "Les adultes ont du mal ; [à] fortiori les enfants .", fix: "a", why: "Latín: <b>a fortiori</b>." },
    { fase: "indep", c: ["cs-concess"], k: "choice", ask: "Lo cierto es que el problema persiste.", q: "Elige:", o: ["Toujours est-il que le problème demeure.", "Toujours est-il que le problème demeure-t-il.", "Il est toujours que le problème demeure."], a: 0, why: "<b>Toujours est-il que</b>." },
    { fase: "aplica", c: ["cs-fonction", "cs-concess"], k: "match", ask: "Une el conector y su función.", ctx: "Revisas tu ensayo.", q: "Conector → función", pairs: [["dès lors", "consecuencia"], ["de surcroît", "refuerzo"], ["à cet égard", "precisión"], ["toujours est-il que", "concesión"]], why: "Conectores cultos." },
    { fase: "aplica", c: ["cs-fonction"], k: "sort", ask: "¿Consecuencia o refuerzo?", ctx: "Clasificas tus conectores.", q: "Clasifica.", cats: ["Consecuencia", "Refuerzo"], items: [["dès lors", 0], ["de ce fait", 0], ["de surcroît", 1], ["qui plus est", 1], ["a fortiori", 1]], why: "Dos familias." },
    { fase: "dominio", c: ["cs-fonction"], k: "order", ask: "Ordena: «A este respecto, las cifras son elocuentes».", tokens: ["À cet égard,", "les chiffres", "sont", "éloquents."], why: "à cet égard." },
    { fase: "dominio", c: ["cs-concess"], k: "choice", ask: "Elige la concesión correcta.", q: "Elige:", o: ["Certes, c'est coûteux ; il n'en demeure pas moins que c'est utile.", "Certes, c'est coûteux ; il n'en demeure pas moins que ce soit utile."], a: 0, why: "Indicativo." },
    { fase: "dominio", c: ["cs-fonction", "cs-concess"], k: "listen", ask: "Escucha y escribe.", say: "Le projet est coûteux ; de surcroît, il est risqué.", acc: ["Le projet est coûteux ; de surcroît, il est risqué.", "Le projet est coûteux; de surcroît, il est risqué."], num: false, dict: true, why: "de surcroît." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche"] }
};

/* ======================================================================================================
   Sección C1.1·8 · Méthodes universitaires
   ====================================================================================================== */

/* ======================================================================================================
   Sección C1.1·8 · Méthodes universitaires
   ====================================================================================================== */

/* Lección 45 · Leer un artículo científico (retoma la toma de notas y la modalización) */
window.__ENSENA["prog-article-scientifique"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Lire un article scientifique",
  roles: {},
  objetivo: {
    que: "Vas a orientarte en un artículo científico en francés: sus partes, el orden en que conviene leerlo y las fórmulas que anuncian el objetivo, los resultados y los límites.",
    corto: "Leer un artículo científico sin leerlo todo.",
    podras: ["Reconocer las partes de un artículo.", "Leer en orden estratégico.", "Entender échantillon, hypothèse, limite."],
    iconos: ["ic2/libros", "m2d/estudiar", "ic2/bombilla"],
    previos: ["La toma de notas (lección 22) y la modalización (lección 40)."],
    capacidad: "Ahora aprovechas la bibliografía universitaria en francés y encuentras rápido lo que necesitas."
  },
  requiere: ["no-quoi", "mo-degres"],
  recupera: ["no-quoi"],
  conceptos: {
    "sc-parties": { n: "Las partes del artículo", b: "parties" },
    "sc-formules": { n: "Fórmulas y vocabulario", b: "formules" }
  },
  video: {
    titulo: "Leer un artículo científico", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/estudiar", grande: "résumé → conclusion", seg: [
        { es: "Hola. Un artículo científico no se lee de la primera a la última línea. Hay un orden más inteligente." } ] },
      { v: "frase", filas: [
          { nota: "1 · de qué trata", p: 1, partes: [["Résumé", "-", 1]] },
          { nota: "2 · el problema", p: 2, partes: [["Introduction", "-", 2]] },
          { nota: "3 · la respuesta", p: 3, partes: [["Conclusion", "-", 3]] } ], seg: [
        { es: "Primero el resumen,", p: 1 },
        { es: "luego la introducción,", p: 2 },
        { es: "y después la conclusión. Los resultados, al final, si te sirven.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "L'échantillon comprend 500 étudiants. « Échantillon » =", o: ["la muestra", "el escaparate"], a: 0,
        bien: "¡Sí! Es un término de método.", mal: "Aquí es un término de método: la muestra.",
        seg: [ { es: "Pausa. ¿Qué es la palabra de la pregunta en un artículo?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Cette étude vise à…", "Nos résultats montrent que…", "Une limite de cette étude…"], seg: [
        { es: "Objetivo, resultados y límites: tres fórmulas que te guían.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Treinta páginas", img: "bg-biblioteca", yo: "laura",
    escena: "Laura tiene que leer un artículo de 30 páginas para mañana.",
    pj: __PJ,
    lineas: [
      ["laura", "Trente pages pour demain ! Je commence par la première ?", "¡Treinta páginas para mañana! ¿Empiezo por la primera?"],
      ["tutrice", "Non. Lisez d'abord le résumé, puis l'introduction et la conclusion.", "No. Lea primero el resumen, luego la introducción y la conclusión."],
      ["laura", "« Cette étude vise à évaluer l'effet du sommeil sur la mémoire. »", "«Este estudio pretende evaluar el efecto del sueño en la memoria.»"],
      ["tutrice", "Voilà l'objectif. Les résultats, ensuite.", "Ese es el objetivo. Los resultados, después."]
    ],
    fijate: "Fíjate: el resumen, la introducción y la conclusión dan casi todo el artículo."
  },
  ensena: [
    { id: "parties", tipo: "gram", titulo: "Las partes y el orden de lectura",
      idea: "Lee primero el résumé, después la introduction y la conclusion; los résultats solo si los necesitas.",
      intro: "Casi todos los artículos siguen el mismo esquema:",
      tabla: [["Parte", "Español", "Qué encuentras"], [
        ["résumé, mots-clés", "resumen, palabras clave", "todo el artículo en 10 líneas"],
        ["introduction", "introducción", "el problema y la hipótesis"],
        ["méthodologie", "metodología", "cómo se investigó"],
        ["résultats", "resultados", "lo que se encontró"],
        ["discussion", "discusión", "la interpretación y los límites"],
        ["conclusion, bibliographie", "conclusión, bibliografía", "la respuesta y las fuentes"]
      ]],
      regla: ["Toma notas solo de lo que sirve a tu pregunta."] },
    { id: "formules", tipo: "gram", titulo: "Fórmulas y vocabulario",
      idea: "Cuatro fórmulas señalan lo importante: el objetivo, la muestra, los resultados y los límites.",
      intro: "Búscalas cuando leas en diagonal:",
      tabla: [["Francés", "Español", "Señala"], [
        ["Cette étude vise à évaluer l'effet du sommeil sur la mémoire.", "Este estudio pretende evaluar…", "objetivo"],
        ["L'échantillon comprend 500 étudiants.", "La muestra comprende 500 estudiantes.", "muestra"],
        ["Les participants ont été répartis en deux groupes.", "Los participantes fueron repartidos en dos grupos.", "método"],
        ["Nos résultats montrent une nette amélioration.", "Nuestros resultados muestran una clara mejora.", "resultados"],
        ["Ces données confirment notre hypothèse de départ.", "Estos datos confirman nuestra hipótesis de partida.", "resultados"],
        ["Une limite de cette étude tient à la taille du corpus.", "Una limitación de este estudio…", "límites"]
      ]],
      regla: ["un échantillon = una muestra; un corpus = el conjunto de textos o datos estudiados."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Errores típicos.",
      errores: [
        ["Leer de la página 1 a la 30", "résumé → introduction → conclusion", "Lectura estratégica."],
        ["un échantillon = un escaparate", "un échantillon = una muestra", "Término de método."],
        ["L'échantillion", "L'échantillon", "Ortografía."]
      ] }
  ],
  ejemplos: [
    { sit: "¿Dónde está el objetivo del estudio?", resp: "Cette étude vise à…", pasos: ["Busca «vise à» en el résumé o la introduction."], porque: "Fórmula de objetivo." },
    { sit: "La muestra comprende 500 estudiantes.", resp: "L'échantillon comprend 500 étudiants.", pasos: ["échantillon = muestra."], porque: "Vocabulario de método." },
    { sit: "¿Dónde están los límites?", resp: "Une limite de cette étude…", pasos: ["Suelen estar en la discussion."], porque: "Fórmula de límite." }
  ],
  comprueba: [
    { q: "¿Qué lees primero?", o: ["el résumé", "la bibliographie"], a: 0, b: "parties", porque: "Resumen." },
    { q: "«Cette étude vise à…» introduce…", o: ["el objetivo", "los límites"], a: 0, b: "formules", porque: "Objetivo." },
    { q: "Los límites suelen estar en…", o: ["la discussion", "los mots-clés"], a: 0, b: "parties", porque: "Discusión." }
  ],
  practica: [
    { fase: "guiada", c: ["sc-formules"], k: "choice", es: true, ask: "«l'échantillon de l'enquête» es…", q: "Elige:", o: ["la muestra", "el escalón", "el resultado"], a: 0, pista: "Término de método.", why: "<b>muestra</b>." },
    { fase: "guiada", c: ["sc-parties"], k: "choice", es: true, ask: "Tienes poco tiempo. ¿Qué lees primero?", q: "Elige:", o: ["el résumé", "la bibliographie", "los anexos"], a: 0, pista: "Diez líneas con todo.", why: "<b>Résumé</b>." },
    { fase: "indep", c: ["sc-formules"], k: "fill", ask: "Escribe «resultados».", q: "Nos ___ montrent une nette amélioration.", acc: ["résultats"], why: "<b>résultats</b>." },
    { fase: "indep", c: ["sc-formules"], k: "fill", ask: "Escribe «limitación».", q: "Une ___ de cette étude tient à la taille du corpus.", acc: ["limite"], why: "<b>limite</b>." },
    { fase: "indep", c: ["sc-formules"], k: "spot", ask: "Toca el error.", s: "L' [échantillion] comprend deux cents participants .", fix: "échantillon", why: "<b>échantillon</b>." },
    { fase: "indep", c: ["sc-formules"], k: "choice", ask: "Este estudio pretende evaluar…", q: "Elige:", o: ["Cette étude vise à évaluer…", "Cette étude vise d'évaluer…", "Cette étude vise évaluer…"], a: 0, why: "<b>viser à</b>." },
    { fase: "aplica", c: ["sc-parties"], k: "match", ask: "Une la parte y su contenido.", ctx: "Lees un artículo para tu síntesis.", q: "Parte → contenido", pairs: [["résumé", "todo en diez líneas"], ["méthodologie", "cómo se investigó"], ["résultats", "lo que se encontró"], ["discussion", "interpretación y límites"]], why: "Partes del artículo." },
    { fase: "aplica", c: ["sc-parties", "sc-formules"], k: "sort", ask: "¿Dónde aparece la frase?", ctx: "Ubicas fórmulas.", q: "Clasifica.", cats: ["Introducción", "Discusión"], items: [["Cette étude vise à…", 0], ["Nous faisons l'hypothèse que…", 0], ["Une limite de cette étude…", 1], ["D'autres recherches seront nécessaires.", 1]], why: "Objetivo al principio; límites al final." },
    { fase: "dominio", c: ["sc-formules"], k: "order", ask: "Ordena: «Nuestros resultados muestran una clara mejora».", tokens: ["Nos résultats", "montrent", "une nette", "amélioration."], why: "Fórmula de resultados." },
    { fase: "dominio", c: ["sc-parties"], k: "choice", ask: "Orden de lectura estratégica:", q: "Elige:", o: ["résumé, introduction, conclusion", "bibliographie, résultats, résumé"], a: 0, why: "Del todo a lo concreto." },
    { fase: "dominio", c: ["sc-formules", "sc-parties"], k: "listen", ask: "Escucha y escribe.", say: "Ces données confirment notre hypothèse de départ.", acc: ["Ces données confirment notre hypothèse de départ."], num: false, dict: true, why: "Resultados." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche"], previo: ["500", "30"] }
};

/* Lección 46 · Problematizar (retoma los planes) */
window.__ENSENA["prog-problematiser"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Problématiser un sujet",
  roles: {},
  objetivo: {
    que: "Vas a convertir un tema en una pregunta con tensión: constatación, contradicción y pregunta abierta.",
    corto: "Del tema a la buena pregunta.",
    podras: ["Encontrar la tensión de un tema.", "Introducirla con or o pourtant.", "Formular la pregunta con dans quelle mesure o en quoi."],
    iconos: ["ic2/pregunta", "m2d/pensativo", "ic2/bombilla"],
    previos: ["Los planes del texto académico (lección 21)."],
    capacidad: "Ahora das a tu síntesis y a tu ensayo una pregunta que los guía de principio a fin."
  },
  requiere: ["pl-choix", "pl-intro"],
  recupera: ["pl-choix"],
  conceptos: {
    "pb-etapes": { n: "Constatación, tensión y pregunta", b: "etapes" },
    "pb-forme": { n: "La forma de la pregunta", b: "forme" }
  },
  video: {
    titulo: "Problematizar", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/pregunta", grande: "Dans quelle mesure… ?", seg: [
        { es: "Hola. Un tema no es una pregunta. Problematizar es encontrar la tensión que esconde." } ] },
      { v: "frase", filas: [
          { nota: "constatación", p: 1, partes: [["Le numérique facilite l'accès au savoir ;", "-", 1]] },
          { nota: "tensión", p: 2, partes: [["pourtant, il fragilise l'attention.", "-", 2]] },
          { nota: "pregunta", p: 3, partes: [["En quoi l'école doit-elle s'adapter ?", "-", 3]] } ], seg: [
        { es: "Primero, lo que se observa.", p: 1 },
        { es: "Luego, la contradicción.", p: 2 },
        { es: "Y al final, la pregunta abierta.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "¿Cuál es una problemática?", o: ["Peut-on protéger l'environnement sans freiner l'économie ?", "Qu'est-ce que l'environnement ?"], a: 0,
        bien: "¡Sí! Hay tensión entre dos objetivos.", mal: "Una definición no es una problemática: falta la tensión.",
        seg: [ { es: "Pausa. ¿Cuál de las dos plantea una tensión?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Or,", "Pourtant,", "Dans quelle mesure… ?", "En quoi… ?", "Peut-on… sans… ?"], seg: [
        { es: "Constatación, tensión, pregunta. Nunca una pregunta de sí o no sin matices.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Una pregunta plana", img: "bg-biblioteca", yo: "laura",
    escena: "Laura propone como problemática «Qu'est-ce que le télétravail ?».",
    pj: __PJ,
    lineas: [
      ["tutrice", "« Qu'est-ce que le télétravail ? » C'est une définition.", "«¿Qué es el teletrabajo?» Es una definición."],
      ["laura", "Il faut une tension ?", "¿Hace falta una tensión?"],
      ["tutrice", "Oui. Le télétravail libère… or, il isole aussi.", "Sí. El teletrabajo libera… pero también aísla."],
      ["laura", "Dans quelle mesure le télétravail libère-t-il vraiment les salariés ?", "¿En qué medida el teletrabajo libera realmente a los asalariados?"]
    ],
    fijate: "Fíjate: «or» marca la contradicción que da sentido a la pregunta."
  },
  ensena: [
    { id: "etapes", tipo: "gram", titulo: "Tres pasos",
      idea: "Lo que se observa, la contradicción y la pregunta: así nace una problemática.",
      intro: "Cada paso tiene sus fórmulas:",
      tabla: [["Paso", "Francés", "Español"], [
        ["constatación", "On observe depuis dix ans…", "Se observa desde hace diez años…"],
        ["tensión", "Or, / Pourtant, / Mais cette évolution soulève…", "Ahora bien, / Sin embargo,"],
        ["pregunta", "Dès lors, on peut se demander dans quelle mesure…", "Por tanto, cabe preguntarse en qué medida…"],
        ["ejemplo", "Le numérique facilite l'accès au savoir ; pourtant, il fragilise l'attention.", "Lo digital facilita…; sin embargo, debilita la atención."]
      ]],
      regla: ["Or = ahora bien: introduce el dato que complica."] },
    { id: "forme", tipo: "gram", titulo: "La forma de la pregunta",
      idea: "Pregunta abierta y única: dans quelle mesure, en quoi, faut-il, peut-on… sans…",
      intro: "Cuatro moldes seguros:",
      tabla: [["Molde", "Ejemplo", "Español"], [
        ["Dans quelle mesure… ?", "Dans quelle mesure l'école réduit-elle les inégalités ?", "¿En qué medida…?"],
        ["En quoi… ?", "En quoi la ville moderne isole-t-elle ses habitants ?", "¿En qué…?"],
        ["Faut-il… ?", "Faut-il interdire la publicité destinée aux enfants ?", "¿Hay que…?"],
        ["Peut-on… sans… ?", "Peut-on protéger l'environnement sans freiner l'économie ?", "¿Se puede… sin…?"]
      ]],
      regla: ["Una sola pregunta, nunca una lista.", "Inversión del sujeto: l'école réduit-elle."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Errores típicos.",
      errores: [
        ["Qu'est-ce que le télétravail ?", "Le télétravail libère-t-il vraiment les salariés ?", "Hace falta tensión."],
        ["On peut se demander dans quoi…", "On peut se demander en quoi…", "en quoi."],
        ["Tres preguntas seguidas", "Una sola pregunta", "Problemática única."]
      ] }
  ],
  ejemplos: [
    { sit: "Tema: la IA en la universidad.", resp: "L'IA menace-t-elle l'apprentissage ou le transforme-t-elle ?", pasos: ["Tensión: amenaza / transformación."], porque: "Dos lecturas posibles." },
    { sit: "Cabe preguntarse en qué debe adaptarse la escuela.", resp: "Dès lors, on peut se demander en quoi l'école doit s'adapter.", pasos: ["Dès lors + on peut se demander."], porque: "Fórmula de pregunta." },
    { sit: "¿Se pueden conciliar crecimiento y sobriedad?", resp: "Peut-on concilier croissance économique et sobriété ?", pasos: ["Peut-on…?", "Dos objetivos en tensión."], porque: "Tensión." }
  ],
  comprueba: [
    { q: "Una problemática plantea…", o: ["una tensión", "una definición"], a: 0, b: "etapes", porque: "Tensión." },
    { q: "¿Qué conector introduce la tensión?", o: ["Or,", "Par exemple,"], a: 0, b: "etapes", porque: "Or." },
    { q: "¿En qué…? →", o: ["En quoi… ?", "Dans quoi… ?"], a: 0, b: "forme", porque: "En quoi." }
  ],
  practica: [
    { fase: "guiada", c: ["pb-forme"], k: "choice", ask: "Tema: la IA en la universidad.", q: "Elige la mejor problemática:", o: ["L'IA menace-t-elle l'apprentissage ou le transforme-t-elle ?", "Qu'est-ce que l'IA ?", "L'IA existe-t-elle ?"], a: 0, pista: "Busca la tensión.", why: "<b>Tensión</b>." },
    { fase: "guiada", c: ["pb-etapes"], k: "choice", ask: "Constatación → tensión:", q: "Elige el conector:", o: ["Or,", "Ainsi,", "Par exemple,"], a: 0, pista: "Ahora bien.", why: "<b>Or</b>." },
    { fase: "indep", c: ["pb-etapes"], k: "fill", ask: "Completa «preguntarse».", q: "Dès lors, on peut se ___ dans quelle mesure…", acc: ["demander"], why: "<b>se demander</b>." },
    { fase: "indep", c: ["pb-forme"], k: "fill", ask: "Completa «sin».", q: "Peut-on développer le tourisme ___ détruire les sites ?", acc: ["sans"], why: "<b>sans</b>." },
    { fase: "indep", c: ["pb-forme"], k: "spot", ask: "Toca el error.", s: "On peut se demander [dans] quoi cette réforme est nécessaire .", fix: "en", why: "<b>en quoi</b>." },
    { fase: "indep", c: ["pb-forme"], k: "choice", ask: "¿En qué medida reduce la escuela las desigualdades?", q: "Elige:", o: ["Dans quelle mesure l'école réduit-elle les inégalités ?", "Dans quelle mesure l'école elle réduit les inégalités ?", "En quelle mesure que l'école réduit les inégalités ?"], a: 0, why: "Inversión." },
    { fase: "aplica", c: ["pb-etapes"], k: "match", ask: "Une el paso y la fórmula.", ctx: "Escribes tu introducción.", q: "Paso → fórmula", pairs: [["constatación", "On observe que…"], ["tensión", "Pourtant, …"], ["pregunta", "Dans quelle mesure… ?"]], why: "Tres pasos." },
    { fase: "aplica", c: ["pb-forme"], k: "sort", ask: "¿Es una problemática C1?", ctx: "Eliges tu pregunta.", q: "Clasifica.", cats: ["Sí", "No"], items: [["Dans quelle mesure l'école réduit-elle les inégalités ?", 0], ["Faut-il interdire la publicité destinée aux enfants ?", 0], ["Qu'est-ce que le télétravail ?", 1], ["L'IA existe-t-elle ?", 1]], why: "Abierta y con tensión." },
    { fase: "dominio", c: ["pb-etapes"], k: "order", ask: "Ordena la pregunta.", tokens: ["Dès lors,", "on peut se demander", "en quoi", "l'école doit s'adapter."], why: "Fórmula de pregunta." },
    { fase: "dominio", c: ["pb-forme"], k: "choice", ask: "¿Se puede proteger el medio ambiente sin frenar la economía?", q: "Elige:", o: ["Peut-on protéger l'environnement sans freiner l'économie ?", "On peut protéger l'environnement sans freiner l'économie."], a: 0, why: "Pregunta con inversión." },
    { fase: "dominio", c: ["pb-etapes", "pb-forme"], k: "listen", ask: "Escucha y escribe.", say: "Le numérique facilite l'accès au savoir ; pourtant, il fragilise l'attention.", acc: ["Le numérique facilite l'accès au savoir ; pourtant, il fragilise l'attention.", "Le numérique facilite l'accès au savoir; pourtant, il fragilise l'attention."], num: false, dict: true, why: "Constatación y tensión." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche"] }
};

/* Lección 47 · La introducción académica (retoma la problematización) */
window.__ENSENA["prog-introduction"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Rédiger une introduction",
  roles: {},
  objetivo: {
    que: "Vas a escribir una introducción en embudo: entrada, presentación del tema, problemática y anuncio del plan.",
    corto: "Cuatro piezas, de lo general a lo concreto.",
    podras: ["Elegir una buena entrada (accroche).", "Definir los términos con «on entend».", "Anunciar el plan sin dar los argumentos."],
    iconos: ["m2d/escribiendo", "ic2/lapiz", "ic2/pergamino"],
    previos: ["Problematizar (lección 46)."],
    capacidad: "Ahora empiezas tus síntesis y ensayos con método y sin rodeos."
  },
  requiere: ["pb-etapes", "pb-forme"],
  recupera: ["pb-etapes"],
  conceptos: {
    "it-pieces": { n: "Las cuatro piezas", b: "pieces" },
    "it-formules": { n: "Definir y anunciar", b: "formules" }
  },
  video: {
    titulo: "La introducción", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/escribiendo", grande: "accroche → plan", seg: [
        { es: "Hola. La introducción es un embudo: empieza amplia y termina en tu plan." } ] },
      { v: "frase", filas: [
          { nota: "1 · entrada", p: 1, partes: [["Selon une enquête récente, …", "-", 1]] },
          { nota: "2 · tema", p: 2, partes: [["Par « solitude », on entend…", "-", 2]] },
          { nota: "3 · problemática", p: 3, partes: [["Dès lors, on peut se demander…", "-", 3]] },
          { nota: "4 · plan", p: 4, partes: [["Nous verrons d'abord…, puis…", "-", 4]] } ], seg: [
        { es: "Una entrada con un dato o una cita.", p: 1 },
        { es: "El tema, con los términos definidos.", p: 2 },
        { es: "La problemática.", p: 3 },
        { es: "Y el anuncio del plan.", p: 4 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "Par « précarité », on ___ une situation instable.", o: ["entend", "comprendre"], a: 0,
        bien: "¡Sí! Por… se entiende.", mal: "La fórmula fija es «on entend».",
        seg: [ { es: "Pausa. ¿Cómo se dice «se entiende»?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["accroche", "on entend", "on peut se demander", "Nous verrons d'abord"], seg: [
        { es: "Y nada de opinión ni de argumentos todavía: eso va en el desarrollo.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Empezar con «Depuis toujours»", img: "bg-biblioteca", yo: "laura",
    escena: "Laura empieza su ensayo con «Depuis toujours, l'homme…».",
    pj: __PJ,
    lineas: [
      ["tutrice", "« Depuis toujours, l'homme… » : trop vague.", "«Desde siempre, el hombre…»: demasiado vago."],
      ["laura", "Selon une enquête récente, un jeune sur trois se sent seul.", "Según una encuesta reciente, uno de cada tres jóvenes se siente solo."],
      ["tutrice", "Mieux. Puis définissez « solitude ».", "Mejor. Luego defina «soledad»."],
      ["laura", "Par « solitude », on entend l'absence de liens choisis.", "Por «soledad» se entiende la ausencia de vínculos elegidos."]
    ],
    fijate: "Fíjate: un dato concreto engancha más que un tópico."
  },
  ensena: [
    { id: "pieces", tipo: "gram", titulo: "Las cuatro piezas",
      idea: "Entrada, tema, problemática y plan: en ese orden, en un 10 % del texto.",
      intro: "El embudo:",
      tabla: [["Pieza", "Ejemplo", "Español"], [
        ["accroche (entrada)", "Selon une enquête récente, un jeune sur trois se sent seul.", "un dato, una cita o un hecho"],
        ["sujet (tema)", "Par « solitude », on entend l'absence de liens choisis.", "contexto y definición"],
        ["problématique", "Dès lors, on peut se demander…", "la pregunta"],
        ["annonce du plan", "Nous étudierons d'abord les causes de ce phénomène.", "las partes"]
      ]],
      regla: ["Sin opinión personal ni ejemplos desarrollados."] },
    { id: "formules", tipo: "gram", titulo: "Definir y anunciar",
      idea: "Para definir: Par « X », on entend… Para anunciar: Nous verrons dans un premier temps…, puis…",
      intro: "Fórmulas fijas:",
      tabla: [["Francés", "Español", "Uso"], [
        ["Par « mobilité douce », on entend les déplacements non motorisés.", "Por «movilidad suave» se entiende…", "definir"],
        ["Nous verrons dans un premier temps les causes, puis les effets.", "Veremos en primer lugar…, luego…", "anunciar"],
        ["Nous verrons d'abord…, avant d'examiner…", "Veremos primero…, antes de examinar…", "anunciar"]
      ]],
      regla: ["on entend (entendre), no «on comprend»."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Errores típicos.",
      errores: [
        ["Depuis toujours, l'homme…", "Selon une enquête récente, …", "Evita el tópico."],
        ["Je vais parler de…", "Nous verrons d'abord…", "Registro académico."],
        ["Par « inclusion », on comprendre…", "Par « inclusion », on entend…", "on entend."]
      ] }
  ],
  ejemplos: [
    { sit: "Define «precariedad».", resp: "Par « précarité », on entend une situation instable.", pasos: ["Par « X », on entend…"], porque: "Definir." },
    { sit: "Anuncia: primero las causas, luego los efectos.", resp: "Nous verrons dans un premier temps les causes, puis les effets.", pasos: ["dans un premier temps…, puis…"], porque: "Plan." },
    { sit: "Una entrada con un dato.", resp: "Selon une enquête récente, un jeune sur trois se sent seul.", pasos: ["Dato concreto y fuente."], porque: "Accroche." }
  ],
  comprueba: [
    { q: "¿Qué va primero?", o: ["la accroche", "el plan"], a: 0, b: "pieces", porque: "Entrada." },
    { q: "¿Qué NO va en la introducción?", o: ["los argumentos desarrollados", "la problemática"], a: 0, b: "pieces", porque: "Argumentos: en el desarrollo." },
    { q: "Se entiende →", o: ["on entend", "on comprendre"], a: 0, b: "formules", porque: "entendre." }
  ],
  practica: [
    { fase: "guiada", c: ["it-formules"], k: "choice", ask: "Define un término.", q: "Elige:", o: ["Par « mobilité », on entend…", "Mobilité, c'est quoi ?", "La mobilité, bon…"], a: 0, pista: "Fórmula fija.", why: "<b>on entend</b>." },
    { fase: "guiada", c: ["it-pieces"], k: "choice", es: true, ask: "¿Qué NO va en la introducción?", q: "Elige:", o: ["los argumentos desarrollados", "la problemática", "el anuncio del plan"], a: 0, pista: "Van después.", why: "<b>Argumentos</b>." },
    { fase: "indep", c: ["it-formules"], k: "fill", ask: "Escribe «se entiende».", q: "Par « précarité », on ___ une situation instable.", acc: ["entend"], why: "<b>on entend</b>." },
    { fase: "indep", c: ["it-formules"], k: "fill", ask: "Completa «en primer lugar».", q: "Nous verrons dans un premier ___ les causes.", acc: ["temps"], why: "<b>dans un premier temps</b>." },
    { fase: "indep", c: ["it-formules"], k: "spot", ask: "Toca el error.", s: "Par « inclusion » , on [comprendre] l'accueil de tous les élèves .", fix: "entend", why: "<b>on entend</b>." },
    { fase: "indep", c: ["it-pieces"], k: "choice", ask: "Elige la mejor entrada.", q: "Elige:", o: ["Selon une enquête récente, un jeune sur trois se sent seul.", "Depuis toujours, l'homme se sent seul.", "Je vais parler de la solitude."], a: 0, why: "Dato concreto." },
    { fase: "aplica", c: ["it-pieces"], k: "match", ask: "Une la pieza y el ejemplo.", ctx: "Montas tu introducción.", q: "Pieza → ejemplo", pairs: [["accroche", "Selon une enquête récente, …"], ["définition", "Par « solitude », on entend…"], ["problématique", "Dès lors, on peut se demander…"], ["annonce du plan", "Nous verrons d'abord…"]], why: "Embudo." },
    { fase: "aplica", c: ["it-pieces"], k: "sort", ask: "¿Entrada adecuada?", ctx: "Revisas tu primera frase.", q: "Clasifica.", cats: ["Adecuada", "Inadecuada"], items: [["une statistique récente", 0], ["une citation pertinente", 0], ["Depuis toujours, l'homme…", 1], ["Je vais parler de…", 1]], why: "Evita los tópicos." },
    { fase: "dominio", c: ["it-formules"], k: "order", ask: "Ordena el anuncio del plan.", tokens: ["Nous verrons", "d'abord", "les causes,", "puis les effets."], why: "Plan." },
    { fase: "dominio", c: ["it-pieces"], k: "choice", ask: "Orden correcto:", q: "Elige:", o: ["accroche, sujet, problématique, plan", "plan, accroche, problématique, sujet"], a: 0, why: "Embudo." },
    { fase: "dominio", c: ["it-pieces", "it-formules"], k: "listen", ask: "Escucha y escribe.", say: "Par « mobilité douce », on entend les déplacements non motorisés.", acc: ["Par « mobilité douce », on entend les déplacements non motorisés.", "Par mobilité douce, on entend les déplacements non motorisés.", "Par « mobilité douce » on entend les déplacements non motorisés."], num: false, dict: true, why: "Definir." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche"] }
};

/* Lección 48 · La conclusión académica (retoma la introducción) */
window.__ENSENA["prog-conclusion"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Rédiger une conclusion",
  roles: {},
  objetivo: {
    que: "Vas a cerrar un texto académico en tres tiempos: balance, respuesta a la problemática y apertura.",
    corto: "Cerrar sin repetir y sin ideas nuevas.",
    podras: ["Hacer el balance con «Au terme de…».", "Responder la problemática.", "Abrir con «Reste à savoir si…»."],
    iconos: ["m2d/escribiendo", "ic2/trofeo", "ic2/lapiz"],
    previos: ["La introducción académica (lección 47)."],
    capacidad: "Ahora cierras tus síntesis y ensayos con fuerza y método."
  },
  requiere: ["it-pieces"],
  recupera: ["it-pieces"],
  conceptos: {
    "cl-pieces": { n: "Balance, respuesta y apertura", b: "pieces" },
    "cl-formules": { n: "Fórmulas de cierre", b: "formules" }
  },
  video: {
    titulo: "La conclusión", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/escribiendo", grande: "Reste à savoir si…", seg: [
        { es: "Hola. La conclusión es la introducción al revés: empieza concreta y termina abierta." } ] },
      { v: "frase", filas: [
          { nota: "1 · balance", p: 1, partes: [["Au terme de cette analyse, il apparaît que…", "-", 1]] },
          { nota: "2 · respuesta", p: 2, partes: [["Ainsi, le numérique n'est ni un remède ni un poison.", "-", 2]] },
          { nota: "3 · apertura", p: 3, partes: [["Reste à savoir si…", "-", 3]] } ], seg: [
        { es: "El balance del recorrido,", p: 1 },
        { es: "la respuesta a tu pregunta,", p: 2 },
        { es: "y una nueva pregunta vecina.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "Reste ___ savoir si cette solution sera durable.", o: ["à", "de"], a: 0,
        bien: "¡Sí! Queda por saber.", mal: "La fórmula es «reste à savoir».",
        seg: [ { es: "Pausa. ¿Qué preposición lleva la fórmula de apertura?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Au terme de", "Ainsi,", "En définitive,", "Reste à savoir si"], seg: [
        { es: "Y nunca un argumento nuevo en la conclusión.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Una idea de última hora", img: "bg-biblioteca", yo: "laura",
    escena: "Laura añade un argumento nuevo en la conclusión.",
    pj: __PJ,
    lineas: [
      ["tutrice", "Ce nouvel argument n'a pas sa place ici.", "Este argumento nuevo no tiene lugar aquí."],
      ["laura", "Alors je fais seulement le bilan ?", "¿Entonces solo hago el balance?"],
      ["tutrice", "Le bilan, la réponse, puis une ouverture.", "El balance, la respuesta y luego una apertura."],
      ["laura", "Reste à savoir si les entreprises sauront s'adapter.", "Queda por saber si las empresas sabrán adaptarse."]
    ],
    fijate: "Fíjate: la apertura es una pregunta, no un argumento."
  },
  ensena: [
    { id: "pieces", tipo: "gram", titulo: "Tres tiempos",
      idea: "Balance, respuesta y apertura; nada nuevo, nada repetido palabra por palabra.",
      intro: "Un 10 % del texto:",
      tabla: [["Tiempo", "Ejemplo", "Función"], [
        ["bilan", "Au terme de cette réflexion, il apparaît que le télétravail est une chance sous conditions.", "resumir el recorrido"],
        ["réponse", "Ainsi, le numérique n'est ni un remède ni un poison.", "responder la problemática"],
        ["ouverture", "Reste à savoir si les pouvoirs publics s'en saisiront.", "abrir una cuestión vecina"]
      ]],
      regla: ["Sin argumentos nuevos.", "Sin «como he dicho»."] },
    { id: "formules", tipo: "gram", titulo: "Fórmulas de cierre",
      idea: "Au terme de… para el balance; En définitive para responder; Reste à savoir si… para abrir.",
      intro: "Las más útiles:",
      tabla: [["Francés", "Español", "Uso"], [
        ["Au terme de cette analyse, il apparaît que…", "Al término de este análisis, parece que…", "balance"],
        ["Au terme de cette étude, une conclusion s'impose.", "Al término de este estudio, se impone una conclusión.", "balance"],
        ["En définitive, la question n'est pas tant technique que politique.", "En definitiva, la cuestión no es tanto técnica como política.", "respuesta"],
        ["Reste à savoir si cette solution sera durable.", "Queda por saber si…", "apertura"]
      ]],
      regla: ["Reste à savoir: sin il, con à."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Errores típicos.",
      errores: [
        ["Un argumento nuevo en la conclusión", "Solo balance, respuesta y apertura", "Nada nuevo."],
        ["Reste de savoir si…", "Reste à savoir si…", "à."],
        ["En conclusion, comme je l'ai dit…", "Au terme de cette analyse, …", "Registro."]
      ] }
  ],
  ejemplos: [
    { sit: "Al término de este análisis, parece que…", resp: "Au terme de cette analyse, il apparaît que…", pasos: ["Balance."], porque: "Fórmula de cierre." },
    { sit: "Queda por saber si las empresas sabrán adaptarse.", resp: "Reste à savoir si les entreprises sauront s'adapter.", pasos: ["Apertura.", "Reste à + savoir."], porque: "Nueva pregunta." },
    { sit: "En definitiva, la cuestión es política.", resp: "En définitive, la question n'est pas tant technique que politique.", pasos: ["Respuesta."], porque: "Matiz final." }
  ],
  comprueba: [
    { q: "¿Qué NO va en la conclusión?", o: ["un argumento nuevo", "la apertura"], a: 0, b: "pieces", porque: "Nada nuevo." },
    { q: "La apertura empieza con…", o: ["Reste à savoir si…", "Tout d'abord,"], a: 0, b: "formules", porque: "Apertura." },
    { q: "Al término de →", o: ["Au terme de", "À la terme de"], a: 0, b: "formules", porque: "Au terme de." }
  ],
  practica: [
    { fase: "guiada", c: ["cl-pieces"], k: "choice", es: true, ask: "¿Qué NO va en la conclusión?", q: "Elige:", o: ["un argumento nuevo", "la respuesta", "la apertura"], a: 0, pista: "Nada nuevo.", why: "<b>Nada nuevo</b>." },
    { fase: "guiada", c: ["cl-formules"], k: "choice", ask: "Haz el balance.", q: "Elige:", o: ["Au terme de cette analyse, il apparaît que…", "Pour commencer…", "Premièrement…"], a: 0, pista: "Al término de…", why: "Fórmula de cierre." },
    { fase: "indep", c: ["cl-formules"], k: "fill", ask: "Escribe «término».", q: "Au ___ de cette réflexion, il apparaît que…", acc: ["terme"], why: "<b>Au terme de</b>." },
    { fase: "indep", c: ["cl-formules"], k: "fill", ask: "Escribe «definitiva».", q: "En ___ , la question n'est pas tant technique que politique.", acc: ["définitive"], why: "<b>En définitive</b>." },
    { fase: "indep", c: ["cl-formules"], k: "spot", ask: "Toca el error.", s: "Reste [de] savoir si cette solution sera durable .", fix: "à", why: "<b>Reste à savoir</b>." },
    { fase: "indep", c: ["cl-pieces"], k: "choice", ask: "Elige la apertura.", q: "Elige:", o: ["Reste à savoir si les pouvoirs publics s'en saisiront.", "Tout d'abord, les pouvoirs publics…", "Par exemple, les pouvoirs publics…"], a: 0, why: "<b>Ouverture</b>." },
    { fase: "aplica", c: ["cl-pieces"], k: "match", ask: "Une el tiempo y su función.", ctx: "Cierras tu ensayo.", q: "Tiempo → función", pairs: [["bilan", "resumir el recorrido"], ["réponse", "responder la problemática"], ["ouverture", "abrir una cuestión vecina"]], why: "Conclusión." },
    { fase: "aplica", c: ["cl-pieces"], k: "sort", ask: "¿Introducción o conclusión?", ctx: "Ordenas las piezas.", q: "Clasifica.", cats: ["Introducción", "Conclusión"], items: [["accroche", 0], ["annonce du plan", 0], ["problématique", 0], ["bilan", 1], ["ouverture", 1], ["Reste à savoir si…", 1]], why: "Principio y final." },
    { fase: "dominio", c: ["cl-formules"], k: "order", ask: "Ordena: «Queda por saber si…».", tokens: ["Reste", "à", "savoir", "si…"], why: "Apertura." },
    { fase: "dominio", c: ["cl-pieces"], k: "choice", ask: "Orden de la conclusión:", q: "Elige:", o: ["bilan, réponse, ouverture", "ouverture, accroche, bilan"], a: 0, why: "Tres tiempos." },
    { fase: "dominio", c: ["cl-pieces", "cl-formules"], k: "listen", ask: "Escucha y escribe.", say: "Au terme de cette analyse, il apparaît que le télétravail est une chance sous conditions.", acc: ["Au terme de cette analyse, il apparaît que le télétravail est une chance sous conditions."], num: false, dict: true, why: "Balance." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche"] }
};

/* Lección 49 · Las transiciones entre partes (retoma la introducción y la conclusión) */
window.__ENSENA["prog-transitions"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Les transitions entre les parties",
  roles: {},
  objetivo: {
    que: "Vas a enlazar las partes de tu texto con una transición: un balance corto de lo anterior y el anuncio de lo que sigue.",
    corto: "Pasar de una parte a otra sin saltos.",
    podras: ["Escribir una transición en dos tiempos.", "Usar après avoir + participio.", "Usar si…, il… aussi y au-delà de."],
    iconos: ["ic2/engranaje", "m2d/escribiendo", "ic2/lapiz"],
    previos: ["La introducción y la conclusión (lecciones 47 y 48)."],
    capacidad: "Ahora tu desarrollo avanza con fluidez y el corrector ve tu plan."
  },
  requiere: ["it-pieces", "cl-pieces", "it-formules"],
  recupera: ["it-formules"],
  conceptos: {
    "tr-deux": { n: "Balance + anuncio", b: "deux" },
    "tr-formules": { n: "Fórmulas de transición", b: "formules" }
  },
  video: {
    titulo: "Las transiciones", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/engranaje", grande: "Après avoir…", seg: [
        { es: "Hola. En un ensayo francés las partes no llevan título: se enlazan con una transición." } ] },
      { v: "dos",
        a: { tag: "balance", fr: "Après avoir analysé les causes,", es: "lo que ya viste" },
        b: { tag: "anuncio", fr: "il convient à présent d'envisager les solutions.", es: "lo que viene" },
        seg: [
          { es: "Primero, en pocas palabras, lo que ya viste.", p: 1 },
          { es: "Después, lo que vas a examinar.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "Après avoir ___ les causes, examinons les effets.", o: ["analysé", "analyser"], a: 0,
        bien: "¡Sí! Después de avoir, el participio.", mal: "Después de «après avoir» va el participio: analysé.",
        seg: [ { es: "Pausa. ¿Infinitivo o participio?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Après avoir…", "il convient à présent de…", "Si…, il… aussi", "Au-delà de…"], seg: [
        { es: "Balance más anuncio, al final de una parte o al principio de la siguiente.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Títulos en el ensayo", img: "bg-biblioteca", yo: "laura",
    escena: "Laura escribe «Deuxième partie : les solutions» en medio del ensayo.",
    pj: __PJ,
    lineas: [
      ["tutrice", "Pas de titres dans un essai. Il faut une transition.", "Nada de títulos en un ensayo. Hace falta una transición."],
      ["laura", "Après avoir analysé les causes, il convient à présent d'envisager les solutions.", "Tras analizar las causas, conviene ahora considerar las soluciones."],
      ["tutrice", "Parfait : un bilan et une annonce.", "Perfecto: un balance y un anuncio."],
      ["laura", "Au-delà du coût, se pose la question de l'équité.", "Más allá del coste, se plantea la cuestión de la equidad."]
    ],
    fijate: "Fíjate: la transición resume y anuncia en una sola frase."
  },
  ensena: [
    { id: "deux", tipo: "gram", titulo: "Dos tiempos",
      idea: "Una transición = balance de la parte anterior + anuncio de la siguiente.",
      intro: "En una o dos frases:",
      tabla: [["Balance", "Anuncio", "Español"], [
        ["Après avoir analysé les causes,", "il convient à présent d'envisager les solutions.", "Tras analizar…, conviene ahora…"],
        ["Si le numérique facilite l'accès au savoir,", "il soulève aussi des inquiétudes.", "Si…, también…"],
        ["Ce constat établi,", "il reste à proposer des solutions.", "Establecida esta constatación, queda…"]
      ]],
      regla: ["Va al final de una parte o al comienzo de la siguiente."] },
    { id: "formules", tipo: "gram", titulo: "Fórmulas de transición",
      idea: "Après avoir + participio; il convient à présent de + infinitivo; au-delà de + nombre.",
      intro: "Las cuatro más útiles:",
      tabla: [["Francés", "Español", "Construcción"], [
        ["Après avoir étudié les causes, voyons les conséquences.", "Tras estudiar las causas, veamos…", "après avoir + participio"],
        ["Il convient à présent d'étudier les conséquences.", "Conviene ahora estudiar…", "à présent = ahora"],
        ["Au-delà de l'aspect économique, se pose la question éthique.", "Más allá del aspecto económico, se plantea…", "au-delà de + nombre"],
        ["Si ce modèle a des atouts, il présente aussi des limites.", "Si este modelo tiene ventajas, también…", "si = aunque"]
      ]],
      regla: ["Este si no es condición: concede (= aunque)."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Errores típicos.",
      errores: [
        ["Deuxième partie : les solutions.", "Après avoir analysé les causes, il convient…", "Sin títulos: transición."],
        ["Après avoir analyser…", "Après avoir analysé…", "Participio."],
        ["Au-dessus de l'aspect économique", "Au-delà de l'aspect économique", "au-delà = más allá."]
      ] }
  ],
  ejemplos: [
    { sit: "Pasa de las causas a las soluciones.", resp: "Après avoir analysé les causes, il convient à présent d'envisager les solutions.", pasos: ["Balance: après avoir + participio.", "Anuncio: il convient de."], porque: "Dos tiempos." },
    { sit: "Más allá del coste, la equidad.", resp: "Au-delà du coût, se pose la question de l'équité.", pasos: ["au-delà de + le = au-delà du."], porque: "Abrir un nuevo aspecto." },
    { sit: "Este modelo tiene ventajas, pero también límites.", resp: "Si ce modèle a des atouts, il présente aussi des limites.", pasos: ["si de concesión.", "aussi."], porque: "Pasar a las limitaciones." }
  ],
  comprueba: [
    { q: "Una transición tiene…", o: ["balance y anuncio", "título y subtítulo"], a: 0, b: "deux", porque: "Dos tiempos." },
    { q: "Après avoir + …", o: ["participio", "infinitivo"], a: 0, b: "formules", porque: "Participio." },
    { q: "Más allá de →", o: ["Au-delà de", "Au-dessus de"], a: 0, b: "formules", porque: "Au-delà." }
  ],
  practica: [
    { fase: "guiada", c: ["tr-deux"], k: "choice", ask: "Pasar de causas a soluciones:", q: "Elige:", o: ["Après avoir analysé les causes, il convient d'envisager les solutions.", "Deuxième partie : les solutions.", "Bon, maintenant les solutions."], a: 0, pista: "Balance + anuncio.", why: "Transición." },
    { fase: "guiada", c: ["tr-formules"], k: "choice", ask: "Más allá de…", q: "Elige:", o: ["Au-delà de…", "Au-dessus de…", "En delà de…"], a: 0, pista: "Más allá.", why: "<b>Au-delà de</b>." },
    { fase: "indep", c: ["tr-formules"], k: "fill", ask: "Completa «tras haber».", q: "Après ___ examiné les avantages, voyons les limites.", acc: ["avoir"], why: "<b>Après avoir</b>." },
    { fase: "indep", c: ["tr-formules"], k: "fill", ask: "Escribe «ahora».", q: "Il convient à ___ d'étudier les conséquences.", acc: ["présent"], why: "<b>à présent</b>." },
    { fase: "indep", c: ["tr-formules"], k: "spot", ask: "Toca el error.", s: "Après avoir [analyser] les causes , examinons les conséquences .", fix: "analysé", why: "Participio." },
    { fase: "indep", c: ["tr-deux"], k: "choice", es: true, ask: "«Si ce modèle a des atouts, il présente aussi des limites.» El si expresa…", q: "Elige:", o: ["una concesión (aunque)", "una condición", "una pregunta"], a: 0, why: "si = aunque." },
    { fase: "aplica", c: ["tr-deux"], k: "match", ask: "Une cada balance con su anuncio.", ctx: "Enlazas tus partes.", q: "Balance → anuncio", pairs: [["Si ce modèle a des atouts,", "il présente aussi des limites."], ["Après avoir étudié les causes,", "voyons les conséquences."], ["Ce constat établi,", "il reste à proposer des solutions."]], why: "Transiciones." },
    { fase: "aplica", c: ["tr-formules"], k: "sort", ask: "¿Transición o conclusión final?", ctx: "Ordenas tus fórmulas.", q: "Clasifica.", cats: ["Transición", "Conclusión"], items: [["Il convient à présent de…", 0], ["Après avoir examiné…", 0], ["Au-delà de cet aspect…", 0], ["Au terme de cette analyse…", 1], ["Reste à savoir si…", 1]], why: "Entre partes o al final." },
    { fase: "dominio", c: ["tr-formules"], k: "order", ask: "Ordena la transición.", tokens: ["Après avoir", "étudié les causes,", "voyons", "les conséquences."], why: "Balance + anuncio." },
    { fase: "dominio", c: ["tr-deux"], k: "choice", ask: "Elige la mejor transición.", q: "Elige:", o: ["Ce constat établi, il reste à proposer des solutions.", "Troisième partie : solutions."], a: 0, why: "Sin títulos." },
    { fase: "dominio", c: ["tr-deux", "tr-formules"], k: "listen", ask: "Escucha y escribe.", say: "Au-delà de l'aspect économique, se pose la question éthique.", acc: ["Au-delà de l'aspect économique, se pose la question éthique."], num: false, dict: true, why: "au-delà de." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche"] }
};

/* Lección 50 · Los tipos de argumentos (retoma la argumentación) */
window.__ENSENA["prog-types-arguments"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Les types d'arguments",
  roles: {},
  objetivo: {
    que: "Vas a apoyar tus argumentos en pruebas variadas: autoridad, datos, ejemplo, analogía y valores.",
    corto: "Variar las pruebas convence más.",
    podras: ["Reconocer cinco tipos de argumentos.", "Introducir una autoridad con «Comme le souligne…».", "Construir una analogía con «De même que…»."],
    iconos: ["ic2/libros", "m2d/senalar", "ic2/bombilla"],
    previos: ["La argumentación (lección 20)."],
    capacidad: "Ahora tu ensayo apoya cada idea con la prueba adecuada."
  },
  requiere: ["ar-types", "ar-par"],
  recupera: ["ar-types"],
  conceptos: {
    "ty-types": { n: "Cinco tipos de pruebas", b: "types" },
    "ty-formules": { n: "Cómo introducirlas", b: "formules" }
  },
  video: {
    titulo: "Los tipos de argumentos", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/senalar", grande: "Comme le souligne l'OMS…", seg: [
        { es: "Hola. Un argumento convence por sus pruebas. Hoy, cinco tipos." } ] },
      { v: "frase", filas: [
          { nota: "autoridad", p: 1, partes: [["Comme le rappelle l'UNESCO, …", "-", 1]] },
          { nota: "datos", p: 2, partes: [["Selon une étude de 2023, 60 % des…", "-", 2]] },
          { nota: "ejemplo", p: 3, partes: [["Ainsi, en Finlande, …", "-", 3]] },
          { nota: "analogía", p: 4, partes: [["De même qu'un muscle, la mémoire s'entraîne.", "-", 4]] } ], seg: [
        { es: "Un experto o una institución,", p: 1 },
        { es: "cifras,", p: 2 },
        { es: "un caso concreto,", p: 3 },
        { es: "o una comparación.", p: 4 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "« Au nom de l'égalité, … » es un argumento…", o: ["ético", "de datos"], a: 0,
        bien: "¡Sí! Se apoya en un valor.", mal: "No hay cifras: se apoya en un valor. Es ético.",
        seg: [ { es: "Pausa. ¿En qué se apoya este argumento?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Comme le souligne…", "Selon une étude…", "Ainsi, en…", "De même que…", "Au nom de…"], seg: [
        { es: "Cinco tipos. Combínalos en tu ensayo.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Siempre ejemplos", img: "bg-biblioteca", yo: "laura",
    escena: "Laura apoya todos sus argumentos con ejemplos personales.",
    pj: __PJ,
    lineas: [
      ["tutrice", "Trois exemples personnels. Et des données ?", "Tres ejemplos personales. ¿Y datos?"],
      ["laura", "Comme le montre l'INSEE, le chômage des jeunes baisse.", "Como muestra el INSEE, el paro juvenil baja."],
      ["tutrice", "Bien, une autorité. Et une comparaison ?", "Bien, una autoridad. ¿Y una comparación?"],
      ["laura", "De même qu'un muscle, la mémoire s'entraîne.", "Al igual que un músculo, la memoria se entrena."]
    ],
    fijate: "Fíjate: cambiar de tipo de prueba hace el texto más sólido."
  },
  ensena: [
    { id: "types", tipo: "gram", titulo: "Cinco tipos de pruebas",
      idea: "Autoridad, datos, ejemplo, analogía y valores: cada uno convence de una manera.",
      intro: "Los más usados en un ensayo:",
      tabla: [["Tipo", "Ejemplo", "Se apoya en"], [
        ["autoridad", "Comme le rappelle l'UNESCO, l'éducation est un droit.", "un experto o una institución"],
        ["datos", "Selon une étude de 2023, 60 % des jeunes lisent en ligne.", "cifras y estudios"],
        ["ejemplo", "Ainsi, en Finlande, les élèves ont peu de devoirs.", "un caso concreto"],
        ["analogía", "De même qu'on apprend à lire, on doit apprendre à s'informer.", "una comparación"],
        ["ético", "Au nom de l'égalité, certains refusent cette loi.", "un valor"]
      ]],
      regla: ["Datos, autoridad y ejemplo son hechos; el argumento ético es un valor."] },
    { id: "formules", tipo: "gram", titulo: "Cómo introducirlas",
      idea: "Comme le souligne X (presente), Selon X, Ainsi, De même que…, Au nom de…",
      intro: "Fórmulas fijas:",
      tabla: [["Francés", "Español", "Tipo"], [
        ["Comme le montre l'INSEE, le chômage des jeunes baisse.", "Como muestra el INSEE…", "autoridad"],
        ["Comme le souligne l'OMS, le sucre est dangereux.", "Como subraya la OMS…", "autoridad"],
        ["Ainsi, au Danemark, le vélo est roi.", "Así, en Dinamarca…", "ejemplo"],
        ["De même qu'on apprend à nager, de même on apprend à débattre.", "Así como…, también…", "analogía"],
        ["Au nom de la liberté, certains refusent cette loi.", "En nombre de la libertad…", "ético"]
      ]],
      regla: ["Comme le souligne: el verbo en presente, como en el compte rendu."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Errores típicos.",
      errores: [
        ["Solo ejemplos personales", "Autoridad, datos, ejemplo, analogía…", "Varía."],
        ["Comme le souligna l'OMS", "Comme le souligne l'OMS", "Presente."],
        ["Au nom du liberté", "Au nom de la liberté", "Concordancia."]
      ] }
  ],
  ejemplos: [
    { sit: "Como recuerda la UNESCO, la educación es un derecho.", resp: "Comme le rappelle l'UNESCO, l'éducation est un droit.", pasos: ["Autoridad.", "Verbo en presente."], porque: "Institución reconocida." },
    { sit: "Al igual que un músculo, la memoria se entrena.", resp: "De même qu'un muscle, la mémoire s'entraîne.", pasos: ["Analogía: de même que."], porque: "Comparación." },
    { sit: "Así, en Dinamarca, la bicicleta es reina.", resp: "Ainsi, au Danemark, le vélo est roi.", pasos: ["Ejemplo: Ainsi, + caso."], porque: "Caso concreto." }
  ],
  comprueba: [
    { q: "«Selon l'OMS, …» es un argumento de…", o: ["autoridad", "analogía"], a: 0, b: "types", porque: "Autoridad." },
    { q: "«60 % des jeunes…» es…", o: ["datos", "ético"], a: 0, b: "types", porque: "Cifras." },
    { q: "Comme le … l'OMS", o: ["souligne", "souligna"], a: 0, b: "formules", porque: "Presente." }
  ],
  practica: [
    { fase: "guiada", c: ["ty-types"], k: "choice", es: true, ask: "«De même qu'un jardin s'entretient, une langue se pratique.» Es…", q: "Elige:", o: ["una analogía", "un dato", "una autoridad"], a: 0, pista: "Compara.", why: "<b>Analogía</b>." },
    { fase: "guiada", c: ["ty-types"], k: "choice", es: true, ask: "«60 % des jeunes lisent en ligne.» Es…", q: "Elige:", o: ["un dato", "un argumento ético", "un ejemplo personal"], a: 0, pista: "Cifras.", why: "<b>Datos</b>." },
    { fase: "indep", c: ["ty-formules"], k: "fill", ask: "Completa la analogía.", q: "De même qu'on apprend à nager, de ___ on apprend à débattre.", acc: ["même"], why: "<b>de même que… de même</b>." },
    { fase: "indep", c: ["ty-formules"], k: "fill", ask: "Escribe «en nombre».", q: "Au ___ de la liberté, certains refusent cette loi.", acc: ["nom"], why: "<b>au nom de</b>." },
    { fase: "indep", c: ["ty-formules"], k: "spot", ask: "Toca el error.", s: "Comme le [souligna] l'OMS , le sucre est dangereux .", fix: "souligne", why: "Presente: <b>souligne</b>." },
    { fase: "indep", c: ["ty-types"], k: "choice", ask: "Introduce un ejemplo.", q: "Elige:", o: ["Ainsi, en Finlande, les élèves ont peu de devoirs.", "Au nom de la Finlande, …", "De même que la Finlande, …"], a: 0, why: "<b>Ainsi,</b> + caso." },
    { fase: "aplica", c: ["ty-types"], k: "match", ask: "Une el argumento y su tipo.", ctx: "Revisas tu ensayo.", q: "Argumento → tipo", pairs: [["Comme le montre l'INSEE…", "autoridad"], ["Ainsi, au Danemark…", "ejemplo"], ["Selon une étude de 2023, 60 %…", "datos"], ["Au nom de l'égalité…", "ético"]], why: "Tipología." },
    { fase: "aplica", c: ["ty-types"], k: "sort", ask: "¿Hecho o valor?", ctx: "Equilibras tus pruebas.", q: "Clasifica.", cats: ["Hecho", "Valor"], items: [["une statistique", 0], ["une étude", 0], ["un exemple", 0], ["au nom de la justice", 1], ["au nom de la liberté", 1]], why: "Hechos y valores." },
    { fase: "dominio", c: ["ty-formules"], k: "order", ask: "Ordena: «Como recuerda la UNESCO…».", tokens: ["Comme", "le rappelle", "l'UNESCO,", "l'éducation est un droit."], why: "Autoridad." },
    { fase: "dominio", c: ["ty-types"], k: "choice", ask: "«Au nom de l'égalité» es un argumento…", q: "Elige:", o: ["ético", "de datos"], a: 0, why: "Valor." },
    { fase: "dominio", c: ["ty-types", "ty-formules"], k: "listen", ask: "Escucha y escribe.", say: "De même qu'un muscle, la mémoire s'entraîne.", acc: ["De même qu'un muscle, la mémoire s'entraîne."], num: false, dict: true, why: "Analogía." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche"], previo: ["2023", "60", "UNESCO", "INSEE", "OMS"] }
};

/* Lección 51 · La bibliografía (retoma citar las fuentes) */
window.__ENSENA["prog-bibliographie"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Citer une bibliographie",
  roles: {},
  objetivo: {
    que: "Vas a presentar las referencias al estilo francés: libro, artículo, página web y cita dentro del texto.",
    corto: "Las fuentes, en el orden y con la tipografía correctos.",
    podras: ["Escribir la referencia de un libro y de un artículo.", "Citar en el texto (Autor, año, p.).", "Usar ibid., op. cit. y et al."],
    iconos: ["ic2/libros", "ic2/pergamino", "ic2/lapiz"],
    previos: ["Citar las fuentes (lección 26)."],
    capacidad: "Ahora presentas tus trabajos con una bibliografía como la de la universidad francesa."
  },
  requiere: ["ci-trois", "ci-typo"],
  recupera: ["ci-typo"],
  conceptos: {
    "bi-ordre": { n: "El orden de la referencia", b: "ordre" },
    "bi-abrev": { n: "Cita en el texto y abreviaturas", b: "abrev" }
  },
  video: {
    titulo: "La bibliografía", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/libros", grande: "(Bourdieu, 1979, p. 45)", seg: [
        { es: "Hola. Cada fuente que usas va en la bibliografía, siempre con el mismo orden." } ] },
      { v: "frase", filas: [
          { nota: "autor", p: 1, partes: [["BOURDIEU, Pierre,", "-", 1]] },
          { nota: "título en cursiva", p: 2, partes: [["La Distinction,", "-", 2]] },
          { nota: "lugar, editorial, año", p: 3, partes: [["Paris, Minuit, 1979.", "-", 3]] } ], seg: [
        { es: "El apellido en mayúsculas y el nombre,", p: 1 },
        { es: "el título del libro en cursiva,", p: 2 },
        { es: "y el lugar, la editorial y el año.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "El título de un artículo va…", o: ["entre comillas", "en cursiva"], a: 0,
        bien: "¡Sí! La revista, en cursiva; el artículo, entre comillas.", mal: "La cursiva es para el libro o la revista; el artículo, entre comillas.",
        seg: [ { es: "Pausa. ¿Cursiva o comillas para un artículo?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["(Autor, año, p.)", "ibid.", "op. cit.", "et al."], seg: [
        { es: "Misma obra, obra ya citada, y otros autores. Tres abreviaturas para no repetir.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Una bibliografía desordenada", img: "bg-biblioteca", yo: "laura",
    escena: "Laura entrega su bibliografía con los títulos entre comillas y sin fechas.",
    pj: __PJ,
    lineas: [
      ["tutrice", "Le titre d'un livre s'écrit en italique.", "El título de un libro se escribe en cursiva."],
      ["laura", "Et le titre d'un article ?", "¿Y el título de un artículo?"],
      ["tutrice", "Entre guillemets. Et indiquez la date de consultation des sites web.", "Entre comillas. E indique la fecha de consulta de los sitios web."],
      ["laura", "Toutes les sources doivent figurer dans la bibliographie.", "Todas las fuentes deben figurar en la bibliografía."]
    ],
    fijate: "Fíjate: libro en cursiva, artículo entre comillas."
  },
  ensena: [
    { id: "ordre", tipo: "gram", titulo: "El orden de la referencia",
      idea: "NOM, Prénom, Título, Lugar, Editorial, año. El libro va en cursiva; el artículo, entre comillas.",
      intro: "Tres modelos:",
      tabla: [["Tipo", "Modelo", "Detalle"], [
        ["libro", "BOURDIEU, Pierre, La Distinction, Paris, Minuit, 1979.", "título en cursiva"],
        ["artículo", "DUPONT, Marie, « Titre », Revue, n° 12, 2020, p. 45-60.", "artículo entre « »"],
        ["web", "… [en ligne], URL, consulté le 3 mai 2024.", "fecha de consulta"]
      ]],
      regla: ["Apellido en mayúsculas.", "Los títulos de obras se escriben en cursiva."] },
    { id: "abrev", tipo: "gram", titulo: "Cita en el texto y abreviaturas",
      idea: "En el texto: (Autor, año, p.). Para no repetir: ibid., op. cit., et al.",
      intro: "Abreviaturas latinas:",
      tabla: [["Abreviatura", "Español", "Ejemplo"], [
        ["(Bourdieu, 1979, p. 45)", "cita en el texto", "autor, año, página"],
        ["ibid.", "la misma obra que la cita anterior", "Ibid., p. 50."],
        ["op. cit.", "obra ya citada", "DUPONT, op. cit., p. 45."],
        ["et al.", "y otros", "MARTIN, Luc et al., Sociologie de l'école, Paris, PUF, 2018."],
        ["p.", "página", "p. 45-60"]
      ]],
      regla: ["p. es la abreviatura francesa de página."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Errores típicos.",
      errores: [
        ["« La Distinction » (libro entre comillas)", "La Distinction en cursiva", "Libro: cursiva."],
        ["pagina 45", "p. 45", "Abreviatura francesa."],
        ["Sitio web sin fecha", "consulté le 3 mai 2024", "Fecha de consulta."]
      ] }
  ],
  ejemplos: [
    { sit: "Cita a Bourdieu, 1979, página 45, en el texto.", resp: "(Bourdieu, 1979, p. 45)", pasos: ["Autor, año, p."], porque: "Cita en el texto." },
    { sit: "Misma obra, página 50.", resp: "Ibid., p. 50.", pasos: ["ibid. = la misma obra."], porque: "No repetir." },
    { sit: "Martin y otros autores.", resp: "MARTIN, Luc et al.", pasos: ["et al. = y otros."], porque: "Varios autores." }
  ],
  comprueba: [
    { q: "«ibid.» significa…", o: ["la misma obra que la cita anterior", "otra obra"], a: 0, b: "abrev", porque: "ibidem." },
    { q: "El título de un libro va…", o: ["en cursiva", "entre comillas"], a: 0, b: "ordre", porque: "Cursiva." },
    { q: "Y otros →", o: ["et al.", "op. cit."], a: 0, b: "abrev", porque: "et al." }
  ],
  practica: [
    { fase: "guiada", c: ["bi-abrev"], k: "choice", es: true, ask: "«Ibid., p. 12.» Significa…", q: "Elige:", o: ["la misma obra que la cita anterior", "una obra diferente", "la bibliografía completa"], a: 0, pista: "ibidem.", why: "<b>ibid.</b>" },
    { fase: "guiada", c: ["bi-ordre"], k: "choice", es: true, ask: "¿Cómo se escribe el título de un artículo?", q: "Elige:", o: ["entre comillas « »", "en cursiva", "subrayado"], a: 0, pista: "La revista va en cursiva.", why: "<b>« »</b>." },
    { fase: "indep", c: ["bi-abrev"], k: "fill", ask: "Escribe «y otros».", q: "MARTIN, Luc et ___ , Sociologie de l'école, Paris, PUF, 2018.", acc: ["al.", "al"], why: "<b>et al.</b>" },
    { fase: "indep", c: ["bi-ordre"], k: "fill", ask: "Escribe «consulta».", q: "Indiquez la date de ___ des sites web.", acc: ["consultation"], why: "<b>consultation</b>." },
    { fase: "indep", c: ["bi-abrev"], k: "spot", ask: "Toca el error.", s: "Voir DUPONT , op. cit. , [pagina] 45 .", fix: "p.", why: "<b>p.</b>" },
    { fase: "indep", c: ["bi-abrev"], k: "choice", ask: "Cita a Bourdieu en el texto.", q: "Elige:", o: ["(Bourdieu, 1979, p. 45)", "(1979, page Bourdieu)", "(p. 45, Bourdieu 1979, Minuit)"], a: 0, why: "Autor, año, página." },
    { fase: "aplica", c: ["bi-abrev"], k: "match", ask: "Une la abreviatura y su sentido.", ctx: "Revisas tus notas.", q: "Abreviatura → sentido", pairs: [["op. cit.", "obra ya citada"], ["ibid.", "la misma obra"], ["et al.", "y otros"], ["p.", "página"]], why: "Abreviaturas." },
    { fase: "aplica", c: ["bi-ordre"], k: "sort", ask: "¿Cursiva o comillas?", ctx: "Pones la tipografía.", q: "Clasifica.", cats: ["Cursiva", "Comillas « »"], items: [["un livre", 0], ["une revue", 0], ["un article", 1], ["un chapitre", 1]], why: "La obra en cursiva; la parte, entre comillas." },
    { fase: "dominio", c: ["bi-ordre"], k: "order", ask: "Ordena la referencia.", tokens: ["BOURDIEU, Pierre,", "La Distinction,", "Paris, Minuit,", "1979."], why: "Autor, título, lugar y editorial, año." },
    { fase: "dominio", c: ["bi-abrev"], k: "fill", ask: "Escribe la abreviatura de «la misma obra».", q: "___ , p. 42.", acc: ["Ibid.", "ibid.", "Ibid"], why: "<b>Ibid.</b>" },
    { fase: "dominio", c: ["bi-ordre", "bi-abrev"], k: "listen", ask: "Escucha y escribe.", say: "Toutes les sources doivent figurer dans la bibliographie.", acc: ["Toutes les sources doivent figurer dans la bibliographie."], num: false, dict: true, why: "Regla de oro." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche", "Bourdieu", "Pierre", "Dupont", "Marie", "Martin", "Luc", "Minuit", "PUF"], previo: ["1979", "2018", "2020", "2024", "45", "50", "12", "42", "60", "URL"] }
};

/* Lección 52 · Paráfrasis, cita y plagio (retoma la reformulación y la bibliografía) */
window.__ENSENA["prog-plagiat"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Paraphrase, citation et plagiat",
  roles: {},
  objetivo: {
    que: "Vas a usar una fuente de forma honesta: citarla entre comillas, parafrasearla de verdad o resumirla, siempre con referencia.",
    corto: "Usar fuentes sin plagiar.",
    podras: ["Distinguir cita, paráfrasis y plagio.", "Integrar una cita con «Comme l'écrit…».", "Parafrasear cambiando estructura y vocabulario."],
    iconos: ["ic2/candado", "ic2/libros", "m2d/escribiendo"],
    previos: ["La reformulación (lección 14) y la bibliografía (lección 51)."],
    capacidad: "Ahora usas las fuentes con la honestidad que exige la universidad francesa."
  },
  requiere: ["rf-lex", "bi-abrev"],
  recupera: ["rf-lex"],
  conceptos: {
    "pg-trois": { n: "Cita, paráfrasis y plagio", b: "trois" },
    "pg-integrer": { n: "Integrar la fuente", b: "integrer" }
  },
  video: {
    titulo: "Paráfrasis, cita y plagio", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/candado", grande: "le plagiat", seg: [
        { es: "Hola. En Francia, el plagio puede costar la expulsión. Hay tres maneras honestas de usar una fuente." } ] },
      { v: "frase", filas: [
          { nota: "cita · texto exacto", p: 1, partes: [["Comme l'écrit Camus, « … »", "-", 1]] },
          { nota: "paráfrasis · tus palabras", p: 2, partes: [["Selon Camus, l'homme peut…", "-", 2]] },
          { nota: "plagio · sin fuente", p: 3, partes: [["copier-coller sans source", "-", 3]] } ], seg: [
        { es: "La cita: el texto exacto, entre comillas y con referencia.", p: 1 },
        { es: "La paráfrasis: otras palabras, otra estructura, y también la referencia.", p: 2 },
        { es: "Sin fuente, es plagio.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "Cambias dos palabras y no citas al autor.", o: ["plagio", "paráfrasis"], a: 0,
        bien: "¡Exacto! Sin fuente, es plagio.", mal: "Sin fuente no es paráfrasis: es plagio.",
        seg: [ { es: "Pausa. ¿Paráfrasis o plagio?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["« … »", "Selon l'auteur,", "Comme l'écrit Camus,", "(Autor, año)"], seg: [
        { es: "Reformular no exime de citar al autor.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Dos palabras cambiadas", img: "bg-biblioteca", yo: "laura",
    escena: "El programa antiplagio marca un párrafo de Laura.",
    pj: __PJ,
    lineas: [
      ["tutrice", "L'université utilise un logiciel anti-plagiat. Ce paragraphe vient d'un article.", "La universidad usa un programa antiplagio. Este párrafo viene de un artículo."],
      ["laura", "Mais j'ai changé deux mots !", "¡Pero cambié dos palabras!"],
      ["tutrice", "Reformuler ne dispense pas de citer l'auteur.", "Reformular no exime de citar al autor."],
      ["laura", "Chaque emprunt doit être signalé par une référence.", "Cada préstamo debe señalarse con una referencia."]
    ],
    fijate: "Fíjate: el problema no es reformular, sino no citar."
  },
  ensena: [
    { id: "trois", tipo: "gram", titulo: "Tres usos legítimos y uno prohibido",
      idea: "Cita y paráfrasis llevan siempre referencia; copiar sin fuente, aunque cambies palabras, es plagio.",
      intro: "Compara:",
      tabla: [["Práctica", "Qué haces", "¿Legítimo?"], [
        ["la citation", "texto exacto entre « » + referencia", "sí"],
        ["la paraphrase", "otra estructura y otro vocabulario + referencia", "sí"],
        ["le résumé", "las ideas principales condensadas + referencia", "sí"],
        ["le plagiat", "copiar o casi copiar sin fuente", "no"]
      ]],
      regla: ["Le plagiat peut entraîner l'exclusion de l'université."] },
    { id: "integrer", tipo: "gram", titulo: "Integrar la fuente",
      idea: "Comme l'écrit X, « … » para citar; Selon X, … para parafrasear.",
      intro: "Dos moldes:",
      tabla: [["Francés", "Español", "Uso"], [
        ["Comme l'écrit Camus, « il faut imaginer Sisyphe heureux ».", "Como escribe Camus, «…».", "cita"],
        ["Selon Camus, l'homme peut trouver le bonheur dans l'effort même.", "Según Camus, el hombre puede…", "paráfrasis"],
        ["Selon l'auteur, la liberté est un choix.", "Según el autor, la libertad es una elección.", "paráfrasis"]
      ]],
      regla: ["Cita larga (más de tres líneas): en bloque, con sangría."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Errores típicos.",
      errores: [
        ["Cambiar dos palabras sin citar", "Reformular de verdad + citar la fuente", "Si no hay fuente, es plagio."],
        ["c'est du plagio", "c'est du plagiat", "plagiat."],
        ["Comme l'écrit Camus, il faut imaginer… (sin comillas)", "Comme l'écrit Camus, « il faut imaginer… »", "Texto exacto: comillas."]
      ] }
  ],
  ejemplos: [
    { sit: "Cita textual de Camus.", resp: "Comme l'écrit Camus, « il faut imaginer Sisyphe heureux ».", pasos: ["Comme l'écrit + autor.", "Texto exacto entre « »."], porque: "Cita." },
    { sit: "Parafrasea la misma idea.", resp: "Selon Camus, l'homme peut trouver le bonheur dans l'effort même.", pasos: ["Selon + autor.", "Otras palabras."], porque: "Paráfrasis." },
    { sit: "Copiar sin fuente es…", resp: "le plagiat", pasos: ["Sin referencia."], porque: "Plagio." }
  ],
  comprueba: [
    { q: "¿Qué es plagio?", o: ["copiar sin comillas ni referencia", "citar con fuente"], a: 0, b: "trois", porque: "Sin fuente." },
    { q: "Una paráfrasis necesita…", o: ["otras palabras + referencia", "las mismas palabras sin comillas"], a: 0, b: "trois", porque: "Reformular + citar." },
    { q: "Para citar: Comme l'… Camus", o: ["écrit", "écrivit"], a: 0, b: "integrer", porque: "Presente." }
  ],
  practica: [
    { fase: "guiada", c: ["pg-trois"], k: "choice", es: true, ask: "¿Qué es plagio?", q: "Elige:", o: ["copiar sin comillas ni referencia", "citar con comillas y fuente", "parafrasear citando"], a: 0, pista: "Falta algo.", why: "<b>Sin fuente</b>." },
    { fase: "guiada", c: ["pg-integrer"], k: "choice", ask: "Integra una cita.", q: "Elige:", o: ["Comme l'écrit Camus, « il faut imaginer Sisyphe heureux ».", "Camus il écrit il faut imaginer Sisyphe heureux.", "Comme Camus « écrit » il faut…"], a: 0, pista: "Comillas.", why: "Cita bien integrada." },
    { fase: "indep", c: ["pg-trois"], k: "fill", ask: "Escribe «plagio».", q: "Le ___ peut entraîner l'exclusion de l'université.", acc: ["plagiat"], why: "<b>plagiat</b>." },
    { fase: "indep", c: ["pg-integrer"], k: "fill", ask: "Escribe «escribe».", q: "Comme l'___ Camus, « il faut imaginer Sisyphe heureux ».", acc: ["écrit"], why: "<b>écrit</b>." },
    { fase: "indep", c: ["pg-trois"], k: "spot", ask: "Toca el error.", s: "Copier un texte sans citer sa source , c'est du [plagio] .", fix: "plagiat", why: "<b>plagiat</b>." },
    { fase: "indep", c: ["pg-integrer"], k: "choice", ask: "Parafrasea con fuente.", q: "Elige:", o: ["Selon l'auteur, la liberté est un choix.", "La liberté est un choix.", "« La liberté est un choix » sans auteur."], a: 0, why: "<b>Selon</b> + autor." },
    { fase: "aplica", c: ["pg-trois"], k: "match", ask: "Une la práctica y su nombre.", ctx: "Usas varias fuentes.", q: "Práctica → nombre", pairs: [["texto exacto entre « »", "citation"], ["ideas con tus palabras + fuente", "paraphrase"], ["texto ajeno sin fuente", "plagiat"], ["ideas principales condensadas", "résumé"]], why: "Uso de fuentes." },
    { fase: "aplica", c: ["pg-trois"], k: "sort", ask: "¿Legítimo o plagio?", ctx: "Revisas tu trabajo.", q: "Clasifica.", cats: ["Legítimo", "Plagio"], items: [["citer entre guillemets", 0], ["reformuler et citer la source", 0], ["copier-coller sans source", 1], ["changer deux mots sans citer", 1]], why: "Honestidad académica." },
    { fase: "dominio", c: ["pg-integrer"], k: "order", ask: "Ordena: «Según el autor, la libertad es una elección».", tokens: ["Selon", "l'auteur,", "la liberté", "est un choix."], why: "Paráfrasis." },
    { fase: "dominio", c: ["pg-trois"], k: "choice", ask: "Reformular sin citar es…", q: "Elige:", o: ["du plagiat", "une paraphrase"], a: 0, why: "Sin fuente." },
    { fase: "dominio", c: ["pg-trois", "pg-integrer"], k: "listen", ask: "Escucha y escribe.", say: "Reformuler ne dispense pas de citer l'auteur.", acc: ["Reformuler ne dispense pas de citer l'auteur."], num: false, dict: true, why: "Regla de oro." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche", "Camus", "Sisyphe"] }
};

/* Lección 53 · Definir un concepto (retoma la introducción y las relativas con lequel) */
window.__ENSENA["prog-definir"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Définir un concept",
  roles: { term: "término", cat: "categoría", trait: "rasgo específico" },
  objetivo: {
    que: "Vas a definir un concepto con rigor: categoría general, rasgo específico y, si hace falta, la diferencia con un concepto vecino.",
    corto: "Una buena definición evita malentendidos.",
    podras: ["Definir con «X est un… qui / dans lequel…».", "Usar désigner, renvoyer à, consister à.", "Distinguir dos conceptos con «à la différence de»."],
    iconos: ["ic2/libro", "m2d/senalar", "ic2/bombilla"],
    previos: ["La introducción (lección 47) y los relativos lequel, dont (lección 7)."],
    capacidad: "Ahora defines los términos clave de tu tema con precisión académica."
  },
  requiere: ["it-formules", "ph-lequel"],
  recupera: ["it-formules", "ph-lequel"],
  conceptos: {
    "df-structure": { n: "Categoría + rasgo", b: "structure" },
    "df-verbes": { n: "Verbos para definir y distinguir", b: "verbes" }
  },
  video: {
    titulo: "Definir un concepto", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/libro", grande: "X désigne…", seg: [
        { es: "Hola. «Es cuando…» no es una definición. Hace falta una categoría y un rasgo." } ] },
      { v: "dos",
        a: { tag: "vago", fr: "La démocratie, c'est quand les gens votent.", es: "c'est quand…" },
        b: { tag: "preciso", fr: "La démocratie est un régime politique dans lequel le peuple exerce le pouvoir.", es: "categoría + rasgo" },
        seg: [
          { es: "Así no.", p: 1 },
          { es: "Así sí: primero la categoría, régimen político; después lo que lo distingue.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "Un régime politique ___ lequel le peuple exerce le pouvoir.", o: ["dans", "dont"], a: 0,
        bien: "¡Sí! En el cual: dans lequel.", mal: "Es «en el cual»: dans lequel.",
        seg: [ { es: "Pausa. ¿Qué preposición va con el relativo?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["désigne", "renvoie à", "consiste à", "à la différence de"], seg: [
        { es: "Designar, remitir, consistir en y distinguir: cuatro herramientas para definir.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Igualdad o equidad", img: "bg-biblioteca", yo: "laura",
    escena: "Laura usa «égalité» y «équité» como si fueran lo mismo.",
    pj: __PJ,
    lineas: [
      ["tutrice", "Il ne faut pas confondre égalité et équité.", "No hay que confundir igualdad y equidad."],
      ["laura", "L'équité consiste à donner à chacun selon ses besoins ?", "¿La equidad consiste en dar a cada uno según sus necesidades?"],
      ["tutrice", "Oui. Et l'égalité ?", "Sí. ¿Y la igualdad?"],
      ["laura", "À la différence de l'égalité, l'équité tient compte des besoins de chacun.", "A diferencia de la igualdad, la equidad tiene en cuenta las necesidades de cada uno."]
    ],
    fijate: "Fíjate: definir es también distinguir de lo parecido."
  },
  ensena: [
    { id: "structure", tipo: "gram", titulo: "Categoría + rasgo",
      idea: "X est un / une + categoría + qui / dans lequel + lo que lo distingue.",
      intro: "Toca cada parte:",
      analiza: { titulo: "Toca cada parte de la definición", frases: [
        { partes: [["La démocratie est", "term"], ["un régime politique", "cat"], ["dans lequel le peuple exerce le pouvoir.", "trait"]], es: "La democracia es un régimen político en el cual el pueblo ejerce el poder." },
        { partes: [["La laïcité est", "term"], ["un principe juridique", "cat"], ["qui sépare l'État et les religions.", "trait"]], es: "La laicidad es un principio jurídico que separa el Estado y las religiones." }
      ] },
      tabla: [["Categoría", "Ejemplo", "Español"], [
        ["un régime politique", "dans lequel le peuple exerce le pouvoir", "un régimen político en el cual…"],
        ["un principe juridique", "qui sépare l'État et les religions", "un principio jurídico que…"],
        ["un processus", "par lequel…", "un proceso por el cual…"]
      ]],
      regla: ["Nunca «c'est quand…» en un texto académico."] },
    { id: "verbes", tipo: "gram", titulo: "Verbos para definir y distinguir",
      idea: "désigner, renvoyer à y consister à definen; à la différence de y ne pas confondre distinguen.",
      intro: "Cinco fórmulas:",
      tabla: [["Francés", "Español", "Uso"], [
        ["La laïcité désigne la séparation de l'État et des religions.", "La laicidad designa…", "definir"],
        ["Ce concept renvoie à l'idée de responsabilité collective.", "Este concepto remite a…", "definir"],
        ["L'équité consiste à donner à chacun selon ses besoins.", "La equidad consiste en…", "definir"],
        ["À la différence du climat, la météo varie chaque jour.", "A diferencia del clima…", "distinguir"],
        ["Il ne faut pas confondre égalité et équité.", "No hay que confundir…", "distinguir"]
      ]],
      regla: ["consister à (no «consister en» + infinitivo).", "Du latin « educere », éduquer signifie « conduire hors de »: la etimología, solo si aclara."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Errores típicos.",
      errores: [
        ["La démocratie, c'est quand…", "La démocratie est un régime politique dans lequel…", "Categoría + rasgo."],
        ["un régime politique dont lequel", "un régime politique dans lequel", "dans lequel."],
        ["X dessine…", "X désigne…", "désigner."]
      ] }
  ],
  ejemplos: [
    { sit: "Define la laicidad.", resp: "La laïcité désigne la séparation de l'État et des religions.", pasos: ["désigner + definición."], porque: "Definir." },
    { sit: "Distingue clima y tiempo.", resp: "À la différence du climat, la météo varie chaque jour.", pasos: ["à la différence de + le = du."], porque: "Distinguir." },
    { sit: "Define la democracia con categoría y rasgo.", resp: "La démocratie est un régime politique dans lequel le peuple exerce le pouvoir.", pasos: ["Categoría: un régime politique.", "Rasgo: dans lequel…"], porque: "Definición precisa." }
  ],
  comprueba: [
    { q: "Una definición académica tiene…", o: ["categoría + rasgo", "solo un ejemplo"], a: 0, b: "structure", porque: "Categoría + rasgo." },
    { q: "X designa →", o: ["X désigne", "X dessine"], a: 0, b: "verbes", porque: "désigner." },
    { q: "A diferencia de →", o: ["À la différence de", "En différence de"], a: 0, b: "verbes", porque: "Fórmula fija." }
  ],
  practica: [
    { fase: "guiada", c: ["df-structure"], k: "choice", ask: "Define «démocratie».", q: "Elige:", o: ["La démocratie est un régime politique dans lequel le peuple exerce le pouvoir.", "La démocratie, c'est quand les gens votent.", "La démocratie, c'est bien."], a: 0, pista: "Categoría + rasgo.", why: "Definición precisa." },
    { fase: "guiada", c: ["df-verbes"], k: "choice", ask: "A diferencia de…", q: "Elige:", o: ["À la différence de…", "En différence de…", "Au différent de…"], a: 0, pista: "Fórmula fija.", why: "<b>À la différence de</b>." },
    { fase: "indep", c: ["df-verbes"], k: "fill", ask: "Escribe «remite».", q: "Ce concept ___ à l'idée de responsabilité collective.", acc: ["renvoie"], why: "<b>renvoyer à</b>." },
    { fase: "indep", c: ["df-verbes"], k: "fill", ask: "Escribe «confundir».", q: "Il ne faut pas ___ égalité et équité.", acc: ["confondre"], why: "<b>confondre</b>." },
    { fase: "indep", c: ["df-structure"], k: "spot", ask: "Toca el error.", s: "La démocratie est un régime politique [dont] lequel le peuple exerce le pouvoir .", fix: "dans", why: "<b>dans lequel</b>." },
    { fase: "indep", c: ["df-verbes"], k: "choice", ask: "La equidad consiste en dar a cada uno…", q: "Elige:", o: ["L'équité consiste à donner à chacun selon ses besoins.", "L'équité consiste de donner à chacun…", "L'équité consiste en donner à chacun…"], a: 0, why: "<b>consister à</b>." },
    { fase: "aplica", c: ["df-verbes"], k: "match", ask: "Une la fórmula y su función.", ctx: "Defines los términos de tu tema.", q: "Fórmula → función", pairs: [["X désigne…", "definir"], ["À la différence de Y,", "distinguir"], ["Il ne faut pas confondre…", "distinguir"], ["X renvoie à…", "definir"]], why: "Definir y distinguir." },
    { fase: "aplica", c: ["df-structure"], k: "sort", ask: "¿Definición precisa o vaga?", ctx: "Revisas tu introducción.", q: "Clasifica.", cats: ["Precisa", "Vaga"], items: [["un régime politique dans lequel…", 0], ["un principe juridique qui…", 0], ["c'est quand…", 1], ["un truc qui…", 1]], why: "Rigor." },
    { fase: "dominio", c: ["df-verbes"], k: "order", ask: "Ordena la definición.", tokens: ["La laïcité", "désigne", "la séparation", "de l'État et des religions."], why: "désigner." },
    { fase: "dominio", c: ["df-structure"], k: "choice", ask: "Elige la definición académica.", q: "Elige:", o: ["L'équité est un principe qui tient compte des besoins de chacun.", "L'équité, c'est quand on est juste."], a: 0, why: "Categoría + rasgo." },
    { fase: "dominio", c: ["df-structure", "df-verbes"], k: "listen", ask: "Escucha y escribe.", say: "À la différence de l'égalité, l'équité tient compte des besoins de chacun.", acc: ["À la différence de l'égalité, l'équité tient compte des besoins de chacun."], num: false, dict: true, why: "Distinguir." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche"] }
};

/* Lección 54 · Confrontar documentos (retoma la síntesis) */
window.__ENSENA["prog-confronter"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Confronter des documents",
  roles: {},
  objetivo: {
    que: "Vas a cruzar varios documentos para la síntesis: ver en qué coinciden, en qué se oponen y organizarlo por ideas.",
    corto: "Por ideas, nunca documento por documento.",
    podras: ["Hacer un cuadro de confrontación.", "Señalar acuerdo con à l'instar de.", "Señalar diferencia con contrairement à y quant à."],
    iconos: ["ic2/libros", "m2d/lista", "ic2/engranaje"],
    previos: ["La síntesis (lección 27)."],
    capacidad: "Ahora organizas una síntesis por ideas y relacionas los documentos entre sí."
  },
  requiere: ["sy-confr", "sy-format"],
  recupera: ["sy-confr"],
  conceptos: {
    "cf-tableau": { n: "El cuadro de confrontación", b: "tableau" },
    "cf-conn": { n: "Conectores entre documentos", b: "conn" }
  },
  video: {
    titulo: "Confrontar documentos", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/lista", grande: "idées × documents", seg: [
        { es: "Hola. En la síntesis, el error más común es resumir un documento tras otro." } ] },
      { v: "dos",
        a: { tag: "así no", fr: "Le document 1 dit… Le document 2 dit…", es: "documento por documento" },
        b: { tag: "así sí", fr: "À l'instar du document 1, le document 3 souligne…", es: "idea por idea" },
        seg: [
          { es: "Así no.", p: 1 },
          { es: "Así sí: cada idea, con los documentos que hablan de ella.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "___ au document 2, il nuance ce constat.", o: ["Quant", "Quand"], a: 0,
        bien: "¡Sí! En cuanto a: quant à.", mal: "Es «en cuanto a»: quant à, con t.",
        seg: [ { es: "Pausa. ¿Cómo se escribe «en cuanto a»?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["à l'instar de", "contrairement à", "quant à", "en revanche"], seg: [
        { es: "Ideas en filas, documentos en columnas, y conectores para relacionarlos.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Tres resúmenes seguidos", img: "bg-biblioteca", yo: "laura",
    escena: "La síntesis de Laura resume los tres documentos uno tras otro.",
    pj: __PJ,
    lineas: [
      ["tutrice", "Vous résumez trois fois. Où est la confrontation ?", "Resume tres veces. ¿Dónde está la confrontación?"],
      ["laura", "Les trois documents s'accordent sur un point essentiel.", "Los tres documentos coinciden en un punto esencial."],
      ["tutrice", "Bien. Et les différences ?", "Bien. ¿Y las diferencias?"],
      ["laura", "Le document 2, en revanche, adopte un ton plus critique.", "El documento 2, en cambio, adopta un tono más crítico."]
    ],
    fijate: "Fíjate: cada frase relaciona documentos entre sí."
  },
  ensena: [
    { id: "tableau", tipo: "gram", titulo: "El cuadro de confrontación",
      idea: "Ideas en filas, documentos en columnas: así ves en qué coinciden, se oponen o se completan.",
      intro: "Cuatro pasos:",
      tabla: [["Paso", "Qué haces", "Resultado"], [
        ["1", "anota la idea principal de cada documento", "las tesis"],
        ["2", "haz el cuadro: ideas × documentos", "una vista de conjunto"],
        ["3", "agrupa: convergencias, divergencias, complementos", "las relaciones"],
        ["4", "plan temático: una idea por parte", "el plan de la síntesis"]
      ]],
      regla: ["Ces deux textes se complètent plus qu'ils ne s'opposent: también es una relación."] },
    { id: "conn", tipo: "gram", titulo: "Conectores entre documentos",
      idea: "Acuerdo: à l'instar de, de même. Diferencia: contrairement à, en revanche. Otro documento: quant à.",
      intro: "Los más útiles:",
      tabla: [["Francés", "Español", "Relación"], [
        ["À l'instar du document 1, le document 3 souligne…", "Al igual que el documento 1…", "convergencia"],
        ["Les trois documents s'accordent sur un point essentiel.", "Los tres documentos coinciden…", "convergencia"],
        ["Contrairement à l'auteur du premier texte, la journaliste estime que…", "A diferencia del autor…", "divergencia"],
        ["Le document 2, en revanche, adopte un ton plus critique.", "El documento 2, en cambio…", "divergencia"],
        ["Quant au document 2, il nuance ce constat.", "En cuanto al documento 2…", "otro documento"],
        ["Les documents 1 et 3 convergent sur ce point.", "Los documentos 1 y 3 convergen…", "convergencia"]
      ]],
      regla: ["quant à (con t) = en cuanto a; quand = cuando."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Errores típicos.",
      errores: [
        ["Le document 1 dit… Le document 2 dit…", "Idea A: documentos 1 y 3; idea B: 2 frente a 3", "Plan por ideas."],
        ["Quand au troisième document", "Quant au troisième document", "quant à."],
        ["À l'instant du document 1", "À l'instar du document 1", "instar."]
      ] }
  ],
  ejemplos: [
    { sit: "Al igual que el documento 1, el 3 subraya…", resp: "À l'instar du document 1, le document 3 souligne…", pasos: ["à l'instar de + le = du."], porque: "Convergencia." },
    { sit: "En cuanto al documento 2, matiza.", resp: "Quant au document 2, il nuance ce constat.", pasos: ["quant à + le = quant au."], porque: "Otro documento." },
    { sit: "A diferencia del primer texto…", resp: "Contrairement au premier texte, …", pasos: ["contrairement à + le = au."], porque: "Divergencia." }
  ],
  comprueba: [
    { q: "La síntesis se organiza…", o: ["por ideas", "documento por documento"], a: 0, b: "tableau", porque: "Por ideas." },
    { q: "Al igual que →", o: ["À l'instar de", "À l'instant de"], a: 0, b: "conn", porque: "instar." },
    { q: "En cuanto a →", o: ["Quant à", "Quand à"], a: 0, b: "conn", porque: "quant." }
  ],
  practica: [
    { fase: "guiada", c: ["cf-tableau"], k: "choice", es: true, ask: "¿Cómo se organiza la síntesis?", q: "Elige:", o: ["por ideas", "documento por documento", "al azar"], a: 0, pista: "Cuadro ideas × documentos.", why: "<b>Por ideas</b>." },
    { fase: "guiada", c: ["cf-conn"], k: "choice", ask: "Al igual que…", q: "Elige:", o: ["À l'instar de…", "À l'instant de…", "En instar de…"], a: 0, pista: "instar.", why: "<b>À l'instar de</b>." },
    { fase: "indep", c: ["cf-conn"], k: "fill", ask: "Escribe «a diferencia».", q: "___ au premier texte, le second défend l'idée inverse.", acc: ["Contrairement"], why: "<b>Contrairement</b>." },
    { fase: "indep", c: ["cf-conn"], k: "fill", ask: "Escribe «convergen».", q: "Les documents 1 et 3 ___ sur ce point.", acc: ["convergent"], why: "<b>convergent</b>." },
    { fase: "indep", c: ["cf-conn"], k: "spot", ask: "Toca el error.", s: "[Quand] au troisième document , il apporte des chiffres récents .", fix: "Quant", why: "<b>Quant à</b>." },
    { fase: "indep", c: ["cf-conn"], k: "choice", ask: "El documento 2, en cambio, es más crítico.", q: "Elige:", o: ["Le document 2, en revanche, adopte un ton plus critique.", "Le document 2, en revanche de, adopte un ton plus critique.", "Le document 2, au revanche, adopte un ton plus critique."], a: 0, why: "<b>en revanche</b>." },
    { fase: "aplica", c: ["cf-conn"], k: "match", ask: "Une la relación y el conector.", ctx: "Redactas tu síntesis.", q: "Relación → conector", pairs: [["convergencia", "à l'instar de"], ["divergencia", "contrairement à"], ["otro documento", "quant à"]], why: "Confrontar." },
    { fase: "aplica", c: ["cf-conn"], k: "sort", ask: "¿Acuerdo o desacuerdo?", ctx: "Relacionas las fuentes.", q: "Clasifica.", cats: ["Convergencia", "Divergencia"], items: [["à l'instar de", 0], ["s'accordent sur", 0], ["convergent", 0], ["contrairement à", 1], ["en revanche", 1]], why: "Acuerdo o desacuerdo." },
    { fase: "dominio", c: ["cf-conn"], k: "order", ask: "Ordena: «Al igual que el documento 1…».", tokens: ["À l'instar", "du", "document 1,", "le document 3 souligne…"], why: "Convergencia." },
    { fase: "dominio", c: ["cf-tableau"], k: "choice", ask: "Elige la frase de síntesis.", q: "Elige:", o: ["Les trois documents s'accordent sur un point essentiel.", "Le document 1 dit que c'est bien."], a: 0, why: "Relaciona documentos." },
    { fase: "dominio", c: ["cf-tableau", "cf-conn"], k: "listen", ask: "Escucha y escribe.", say: "Ces deux textes se complètent plus qu'ils ne s'opposent.", acc: ["Ces deux textes se complètent plus qu'ils ne s'opposent."], num: false, dict: true, why: "Complemento." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche"] }
};

/* Lección 55 · Titular (retoma la síntesis y la puntuación) */
window.__ENSENA["prog-titrer"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Titrer et intituler",
  roles: {},
  objetivo: {
    que: "Vas a dar a tu síntesis o informe un título breve e informativo, con la tipografía francesa.",
    corto: "Un buen título anuncia el tema en pocas palabras.",
    podras: ["Escribir un título nominal, con dos puntos o con pregunta.", "Usar «Vers…» y «entre… et…».", "Poner las mayúsculas a la francesa."],
    iconos: ["ic2/pergamino", "m2d/cartel", "ic2/lapiz"],
    previos: ["La síntesis (lección 27) y la puntuación (lección 12)."],
    capacidad: "Ahora titulas tus síntesis, informes y artículos como un redactor francés."
  },
  requiere: ["sy-format", "po-signes"],
  recupera: ["po-signes"],
  conceptos: {
    "ti-types": { n: "Tipos de título", b: "types" },
    "ti-typo": { n: "Mayúsculas y signos", b: "typo" }
  },
  video: {
    titulo: "Titular", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/cartel", grande: "Le télétravail : entre liberté et isolement", seg: [
        { es: "Hola. La síntesis del examen pide un título. Corto, informativo y bien escrito." } ] },
      { v: "frase", filas: [
          { nota: "nominal", p: 1, partes: [["La crise du logement", "-", 1]] },
          { nota: "dos puntos", p: 2, partes: [["Le sport : un enjeu politique", "-", 2]] },
          { nota: "pregunta", p: 3, partes: [["Vers une école sans notes ?", "-", 3]] } ], seg: [
        { es: "Un grupo nominal,", p: 1 },
        { es: "dos partes separadas por dos puntos,", p: 2 },
        { es: "o una pregunta.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "¿Cuál está bien escrito?", o: ["Le télétravail : entre liberté et isolement", "Le Télétravail : Entre Liberté Et Isolement"], a: 0,
        bien: "¡Sí! En francés, mayúscula solo al principio.", mal: "Eso es inglés. En francés, mayúscula solo en la primera palabra.",
        seg: [ { es: "Pausa. ¿Dónde van las mayúsculas?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["La crise du logement", "Le sport : un enjeu politique", "Vers… ?", "entre… et…"], seg: [
        { es: "Entre cuatro y diez palabras, y espacio antes de los dos puntos.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "«Synthèse» como título", img: "bg-biblioteca", yo: "laura",
    escena: "Laura titula su síntesis simplemente «Synthèse».",
    pj: __PJ,
    lineas: [
      ["tutrice", "« Synthèse » n'est pas un titre. Le titre doit annoncer clairement le sujet.", "«Síntesis» no es un título. El título debe anunciar claramente el tema."],
      ["laura", "Le télétravail : entre liberté et isolement ?", "¿El teletrabajo: entre libertad y aislamiento?"],
      ["tutrice", "Très bien. Évitez les titres trop longs.", "Muy bien. Evite los títulos demasiado largos."],
      ["laura", "Et pour les parties du rapport, un intertitre ?", "¿Y para las partes del informe, un subtítulo?"]
    ],
    fijate: "Fíjate: el título dice el tema y la tensión en pocas palabras."
  },
  ensena: [
    { id: "types", tipo: "gram", titulo: "Tipos de título",
      idea: "Nominal, con dos puntos, con pregunta o con «entre… et…»: siempre breve e informativo.",
      intro: "Cuatro moldes:",
      tabla: [["Tipo", "Ejemplo", "Español"], [
        ["nominal", "La crise du logement", "La crisis de la vivienda"],
        ["dos puntos", "L'IA à l'université : menace ou outil ?", "La IA en la universidad: ¿amenaza o herramienta?"],
        ["pregunta", "Vers une école sans notes ?", "¿Hacia una escuela sin notas?"],
        ["entre… et…", "Le numérique, entre promesses et risques", "Lo digital, entre promesas y riesgos"]
      ]],
      regla: ["Un bon intertitre facilite la lecture: los informes llevan subtítulos; el ensayo, no."] },
    { id: "typo", tipo: "gram", titulo: "Mayúsculas y signos",
      idea: "Mayúscula solo en la primera palabra y en los nombres propios; espacio antes de los dos puntos y de la interrogación.",
      intro: "No copies el inglés:",
      tabla: [["Así no", "Así sí", "Regla"], [
        ["Le Télétravail : Entre Liberté Et Isolement", "Le télétravail : entre liberté et isolement", "mayúscula inicial"],
        ["L'IA à l'université: menace ou outil?", "L'IA à l'université : menace ou outil ?", "espacio antes de : y ?"],
        ["Synthèse", "La ville de demain : verte et solidaire ?", "informativo"]
      ]],
      regla: ["Sin punto final en un título."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Errores típicos.",
      errores: [
        ["Le Télétravail : Entre Liberté…", "Le télétravail : entre liberté…", "Mayúscula solo al inicio."],
        ["Mon devoir", "La ville face au climat", "Informativo."],
        ["Un título de veinte palabras", "De cuatro a diez palabras", "Évitez les titres trop longs."]
      ] }
  ],
  ejemplos: [
    { sit: "Título para una síntesis sobre el teletrabajo.", resp: "Le télétravail : entre liberté et isolement", pasos: ["Tema + dos puntos + tensión."], porque: "Breve e informativo." },
    { sit: "¿Hacia una escuela sin notas?", resp: "Vers une école sans notes ?", pasos: ["Vers + nombre.", "Espacio antes de ?"], porque: "Pregunta." },
    { sit: "Corrige: «La Ville De Demain».", resp: "La ville de demain", pasos: ["Solo la primera mayúscula."], porque: "Tipografía francesa." }
  ],
  comprueba: [
    { q: "Mayúsculas en un título francés:", o: ["solo la primera palabra y nombres propios", "todas las palabras"], a: 0, b: "typo", porque: "Inicial." },
    { q: "«Vers une école sans notes ?» es…", o: ["una pregunta", "un título nominal"], a: 0, b: "types", porque: "Pregunta." },
    { q: "Antes de los dos puntos…", o: ["espacio", "nada"], a: 0, b: "typo", porque: "Signo doble." }
  ],
  practica: [
    { fase: "guiada", c: ["ti-types"], k: "choice", ask: "Síntesis sobre el teletrabajo.", q: "Elige el mejor título:", o: ["Le télétravail : liberté ou contrainte ?", "Mon texte sur le travail à la maison que j'ai écrit", "TÉLÉTRAVAIL"], a: 0, pista: "Breve e informativo.", why: "Tema + tensión." },
    { fase: "guiada", c: ["ti-typo"], k: "choice", es: true, ask: "¿Cómo van las mayúsculas?", q: "Elige:", o: ["solo la primera palabra y los nombres propios", "todas las palabras", "ninguna"], a: 0, pista: "No es inglés.", why: "<b>Inicial</b>." },
    { fase: "indep", c: ["ti-types"], k: "fill", ask: "Escribe «hacia».", q: "___ une école sans notes ?", acc: ["Vers"], why: "<b>Vers</b>." },
    { fase: "indep", c: ["ti-types"], k: "fill", ask: "Completa la estructura.", q: "Le numérique, ___ promesses et risques", acc: ["entre"], why: "<b>entre… et…</b>." },
    { fase: "indep", c: ["ti-typo"], k: "spot", ask: "Toca el error.", s: "Le télétravail : entre [Liberté] et isolement", fix: "liberté", why: "Minúscula." },
    { fase: "indep", c: ["ti-typo"], k: "choice", ask: "Elige el título bien escrito.", q: "Elige:", o: ["L'IA à l'université : menace ou outil ?", "L'IA à l'université: menace ou outil?", "L'IA À L'Université : Menace Ou Outil ?"], a: 0, why: "Espacios y minúsculas." },
    { fase: "aplica", c: ["ti-types"], k: "match", ask: "Une el tipo y el ejemplo.", ctx: "Pruebas títulos.", q: "Tipo → ejemplo", pairs: [["nominal", "La crise du logement"], ["dos puntos", "Le sport : un enjeu politique"], ["pregunta", "Vers une école sans notes ?"], ["entre… et…", "Le numérique, entre promesses et risques"]], why: "Tipos de título." },
    { fase: "aplica", c: ["ti-types"], k: "sort", ask: "¿Buen título?", ctx: "Eliges el de tu síntesis.", q: "Clasifica.", cats: ["Sí", "No"], items: [["La ville face au climat", 0], ["Vers la fin du papier ?", 0], ["Synthèse", 1], ["Mon devoir", 1]], why: "Informativo." },
    { fase: "dominio", c: ["ti-types"], k: "order", ask: "Ordena el título.", tokens: ["Le télétravail :", "entre liberté", "et", "isolement"], why: "Tema + tensión." },
    { fase: "dominio", c: ["ti-typo"], k: "choice", ask: "Elige el título correcto.", q: "Elige:", o: ["La ville de demain : verte et solidaire ?", "La Ville De Demain : Verte Et Solidaire ?"], a: 0, why: "Mayúscula inicial." },
    { fase: "dominio", c: ["ti-types", "ti-typo"], k: "listen", ask: "Escucha y escribe.", say: "Le titre doit annoncer clairement le sujet.", acc: ["Le titre doit annoncer clairement le sujet."], num: false, dict: true, why: "Regla del título." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche"] }
};

/* ======================================================================================================
   Sección C1.1·9 · Le DALF C1 en pratique
   ====================================================================================================== */

/* ======================================================================================================
   Sección C1.1·9 · Le DALF C1 en pratique
   ====================================================================================================== */

/* Lección 56 · Comprender un documento oral largo (retoma la toma de notas) */
window.__ENSENA["prog-co-longue"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Comprendre un document oral long",
  roles: {},
  objetivo: {
    que: "Vas a preparar la comprensión oral del DALF C1: anticipar con las preguntas, usar bien las dos escuchas y reconocer los marcadores del orador.",
    corto: "Dos escuchas, cada una con su tarea.",
    podras: ["Preparar la escucha con las preguntas.", "Saber qué buscar en cada escucha.", "Reconocer premièrement, j'insiste sur, pour résumer."],
    iconos: ["ic2/audifonos", "m2d/audifonos", "ic2/lapiz"],
    previos: ["La toma de notas (lección 22)."],
    capacidad: "Ahora afrontas una conferencia o un debate largo con método."
  },
  requiere: ["no-quoi", "no-sig"],
  recupera: ["no-sig"],
  conceptos: {
    "co-etapes": { n: "Antes y durante las dos escuchas", b: "etapes" },
    "co-marq": { n: "Los marcadores del orador", b: "marq" }
  },
  video: {
    titulo: "El oral largo", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/audifonos", grande: "2 écoutes", seg: [
        { es: "Hola. En el examen escuchas una conferencia o un debate dos veces. Cada escucha tiene su tarea." } ] },
      { v: "frase", filas: [
          { nota: "antes", p: 1, partes: [["lire toutes les questions", "-", 1]] },
          { nota: "1.ª escucha", p: 2, partes: [["la structure générale", "-", 2]] },
          { nota: "2.ª escucha", p: 3, partes: [["les détails et les chiffres", "-", 3]] } ], seg: [
        { es: "Antes, lee todas las preguntas.", p: 1 },
        { es: "En la primera escucha, la estructura y quién habla.", p: 2 },
        { es: "En la segunda, los detalles y las cifras.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", es: true, q: "« Pour résumer, trois idées se dégagent. » anuncia…", o: ["una recapitulación", "un ejemplo"], a: 0,
        bien: "¡Sí! El orador resume.", mal: "Es una recapitulación: el orador resume.",
        seg: [ { es: "Pausa. ¿Qué anuncia el orador?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["premièrement", "en revanche", "j'insiste sur", "pour résumer"], seg: [
        { es: "Los marcadores te dicen dónde está lo importante.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Escribirlo todo", img: "bg-biblioteca", yo: "laura",
    escena: "En el simulacro, Laura intenta escribir cada palabra de la conferencia.",
    pj: __PJ,
    lineas: [
      ["laura", "Je n'arrive pas à tout écrire !", "¡No logro escribirlo todo!"],
      ["tutrice", "Ne notez que la structure. J'ai noté les idées principales de chaque intervenant.", "Anote solo la estructura. Yo anoté las ideas principales de cada participante."],
      ["laura", "Et les chiffres ?", "¿Y las cifras?"],
      ["tutrice", "Lors de la seconde écoute, je vérifie les chiffres.", "Durante la segunda escucha, compruebo las cifras."]
    ],
    fijate: "Fíjate: primero la estructura, después los detalles."
  },
  ensena: [
    { id: "etapes", tipo: "gram", titulo: "Antes y durante las dos escuchas",
      idea: "Lee las preguntas antes; en la 1.ª escucha, la estructura; en la 2.ª, los detalles.",
      intro: "Cada momento tiene su tarea:",
      tabla: [["Momento", "Tarea", "Notas"], [
        ["antes", "leer todas las preguntas y subrayar las palabras clave", "anticipar el tema"],
        ["1.ª escucha", "estructura general, número de participantes, tesis", "columnas por participante"],
        ["2.ª escucha", "detalles, cifras, matices, ejemplos", "completar y verificar"]
      ]],
      regla: ["Usa los símbolos de la toma de notas: →, ≠, ↑."] },
    { id: "marq", tipo: "gram", titulo: "Los marcadores del orador",
      idea: "Premièrement enumera, en revanche opone, j'insiste sur destaca y pour résumer recapitula.",
      intro: "Escúchalos con atención:",
      tabla: [["Francés", "Español", "Función"], [
        ["Premièrement, je voudrais rappeler le contexte.", "En primer lugar, quisiera recordar el contexto.", "enumerar"],
        ["En revanche, …", "En cambio, …", "oponer"],
        ["J'insiste sur ce point, car il est souvent négligé.", "Insisto en este punto…", "destacar"],
        ["Pour résumer, trois idées se dégagent.", "Para resumir, se desprenden tres ideas.", "recapitular"],
        ["L'orateur a conclu en rappelant trois propositions.", "El orador concluyó recordando tres propuestas.", "concluir"]
      ]],
      regla: ["Hecho (Le taux a doublé en dix ans.) ≠ opinión (À mon sens, c'est une erreur.)."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Errores típicos.",
      errores: [
        ["Escribirlo todo", "Notas por ideas y participantes", "Estructura antes que detalle."],
        ["Pour résumé, …", "Pour résumer, …", "Infinitivo."],
        ["J'insiste à ce point", "J'insiste sur ce point", "insister sur."]
      ] }
  ],
  ejemplos: [
    { sit: "¿Qué haces antes de escuchar?", resp: "lire toutes les questions", pasos: ["Subraya las palabras clave."], porque: "Anticipar." },
    { sit: "El orador dice «J'insiste sur ce point».", resp: "J'insiste sur ce point.", pasos: ["Destaca: anótalo."], porque: "Marcador de importancia." },
    { sit: "¿Hecho u opinión? «À mon sens, c'est une erreur.»", resp: "À mon sens, c'est une erreur.", pasos: ["À mon sens = en mi opinión."], porque: "Opinión." }
  ],
  comprueba: [
    { q: "Antes de escuchar…", o: ["leo todas las preguntas", "cierro los ojos"], a: 0, b: "etapes", porque: "Anticipar." },
    { q: "La 1.ª escucha sirve para…", o: ["la estructura general", "todas las cifras"], a: 0, b: "etapes", porque: "Visión global." },
    { q: "«pour résumer» anuncia…", o: ["una recapitulación", "una objeción"], a: 0, b: "marq", porque: "Resumen." }
  ],
  practica: [
    { fase: "guiada", c: ["co-etapes"], k: "choice", es: true, ask: "¿Qué haces antes de escuchar?", q: "Elige:", o: ["leer todas las preguntas", "escribir la respuesta", "cerrar los ojos"], a: 0, pista: "Anticipa.", why: "<b>Anticipar</b>." },
    { fase: "guiada", c: ["co-etapes"], k: "choice", es: true, ask: "¿Qué buscas en la segunda escucha?", q: "Elige:", o: ["detalles y cifras", "solo el tema", "la ortografía"], a: 0, pista: "La estructura ya la tienes.", why: "Detalles." },
    { fase: "indep", c: ["co-marq"], k: "fill", ask: "Escribe «en».", q: "J'insiste ___ ce point essentiel.", acc: ["sur"], why: "<b>insister sur</b>." },
    { fase: "indep", c: ["co-marq"], k: "fill", ask: "Escribe «se desprenden».", q: "Pour résumer, trois idées se ___ .", acc: ["dégagent"], why: "<b>se dégager</b>." },
    { fase: "indep", c: ["co-marq"], k: "spot", ask: "Toca el error.", s: "Pour [résumé] , cette conférence défend trois idées .", fix: "résumer", why: "Infinitivo: <b>résumer</b>." },
    { fase: "indep", c: ["co-marq"], k: "choice", es: true, ask: "«En revanche, …» sirve para…", q: "Elige:", o: ["oponer", "enumerar", "concluir"], a: 0, why: "Oposición." },
    { fase: "aplica", c: ["co-marq"], k: "match", ask: "Une el marcador y su función.", ctx: "Escuchas una conferencia.", q: "Marcador → función", pairs: [["premièrement", "enumerar"], ["en revanche", "oponer"], ["j'insiste sur", "destacar"], ["pour résumer", "recapitular"]], why: "Marcadores del oral." },
    { fase: "aplica", c: ["co-marq"], k: "sort", ask: "¿Hecho u opinión?", ctx: "Ordenas tus notas.", q: "Clasifica.", cats: ["Hecho", "Opinión"], items: [["Le taux a doublé en dix ans.", 0], ["La loi date de 2019.", 0], ["À mon sens, c'est une erreur.", 1], ["Je reste sceptique.", 1]], why: "Distinguir." },
    { fase: "dominio", c: ["co-marq"], k: "order", ask: "Ordena: «Insisto en este punto».", tokens: ["J'insiste", "sur", "ce", "point."], why: "insister sur." },
    { fase: "dominio", c: ["co-etapes"], k: "choice", es: true, ask: "Orden correcto:", q: "Elige:", o: ["preguntas → estructura → detalles", "detalles → preguntas → estructura"], a: 0, why: "De lo global a lo concreto." },
    { fase: "dominio", c: ["co-etapes", "co-marq"], k: "listen", ask: "Escucha y escribe.", say: "L'orateur a conclu en rappelant trois propositions.", acc: ["L'orateur a conclu en rappelant trois propositions."], num: false, dict: true, why: "Conclusión del orador." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche"], previo: ["2019"] }
};

/* Lección 57 · La comprensión escrita del DALF C1 (retoma el résumé y los verbos del análisis) */
window.__ENSENA["prog-ce-c1"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "La compréhension écrite du DALF C1",
  roles: {},
  objetivo: {
    que: "Vas a responder cada tipo de pregunta de la comprensión escrita: verdadero o falso con cita, opción múltiple y pregunta abierta reformulada.",
    corto: "Citar o reformular: depende de la pregunta.",
    podras: ["Justificar un verdadero o falso con la cita exacta.", "Responder una pregunta abierta con tus palabras.", "Reconocer el tono del autor por sus verbos."],
    iconos: ["ic2/libro", "m2d/estudiar", "ic2/pregunta"],
    previos: ["El résumé (lección 23) y los verbos del análisis (lección 43)."],
    capacidad: "Ahora sabes qué espera el corrector en cada pregunta de la comprensión escrita."
  },
  requiere: ["rs-regles", "va-fonction"],
  recupera: ["va-fonction"],
  conceptos: {
    "ce-questions": { n: "Cada pregunta, su estrategia", b: "questions" },
    "ce-ton": { n: "El tono del autor", b: "ton" }
  },
  video: {
    titulo: "La comprensión escrita", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/estudiar", grande: "Vrai / Faux", seg: [
        { es: "Hola. En la comprensión escrita, la regla de oro: a veces se copia y a veces no." } ] },
      { v: "dos",
        a: { tag: "verdadero o falso", fr: "Vrai : « Le télétravail a progressé de 30 % » (l. 12).", es: "la cita exacta" },
        b: { tag: "pregunta abierta", fr: "Reformulez l'idée principale avec vos propres mots.", es: "con tus palabras" },
        seg: [
          { es: "Para justificar un verdadero o falso, copias la frase exacta.", p: 1 },
          { es: "En una pregunta abierta, al contrario, reformulas.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", es: true, q: "« Encore une réforme miracle… » El tono es…", o: ["irónico", "neutro"], a: 0,
        bien: "¡Sí! «Milagro» dicho con ironía.", mal: "«Otra reforma milagro»: el tono es irónico.",
        seg: [ { es: "Pausa. ¿Qué tono tiene esta frase?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["« … » (l. 12)", "Selon le texte, …", "à l'égard de", "dénoncer · saluer"], seg: [
        { es: "Cita en el verdadero o falso, reformula en la pregunta abierta, y mira los verbos para el tono.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Una justificación inventada", img: "bg-biblioteca", yo: "laura",
    escena: "Laura justifica un «Vrai» con sus propias palabras.",
    pj: __PJ,
    lineas: [
      ["tutrice", "Relevez la phrase qui justifie votre réponse.", "Localice la frase que justifica su respuesta."],
      ["laura", "Il faut copier la phrase du texte ?", "¿Hay que copiar la frase del texto?"],
      ["tutrice", "Oui, entre guillemets. Mais pour la question ouverte, non.", "Sí, entre comillas. Pero para la pregunta abierta, no."],
      ["laura", "Alors je reformule l'idée principale avec mes propres mots.", "Entonces reformulo la idea principal con mis propias palabras."]
    ],
    fijate: "Fíjate: el mismo examen pide copiar y no copiar."
  },
  ensena: [
    { id: "questions", tipo: "gram", titulo: "Cada pregunta, su estrategia",
      idea: "Vrai / Faux: copia la frase exacta. QCM: elimina lo que deforma el texto. Pregunta abierta: reformula.",
      intro: "Cuatro tipos de pregunta:",
      tabla: [["Pregunta", "Estrategia", "Ejemplo"], [
        ["Vrai / Faux", "citar la frase exacta, entre « »", "Vrai : « Le télétravail a progressé de 30 % » (l. 12)."],
        ["QCM", "eliminar las opciones que deforman el texto", "—"],
        ["question ouverte", "reformular con tus palabras, frase completa", "Selon le texte, la mesure est jugée insuffisante."],
        ["sens d'un mot", "usar el contexto", "—"]
      ]],
      regla: ["l. 12 = línea 12."] },
    { id: "ton", tipo: "gram", titulo: "El tono del autor",
      idea: "Los verbos revelan el tono: dénoncer y déplorer son críticos; saluer y se réjouir de, favorables.",
      intro: "Fíjate en los verbos:",
      tabla: [["Francés", "Español", "Tono"], [
        ["L'auteur adopte un ton critique à l'égard des réseaux.", "El autor adopta un tono crítico respecto a las redes.", "crítico"],
        ["dénoncer, déplorer, s'inquiéter de", "denunciar, lamentar, preocuparse por", "crítico"],
        ["saluer, se réjouir de, défendre", "celebrar, alegrarse de, defender", "favorable"],
        ["Le ton de l'article est volontairement polémique.", "El tono del artículo es deliberadamente polémico.", "polémico"],
        ["« Encore une réforme miracle… »", "«Otra reforma milagro…»", "irónico"]
      ]],
      regla: ["à l'égard de = respecto a."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Errores típicos.",
      errores: [
        ["Justificar un Vrai con tus palabras", "Justificar con la cita exacta", "En V/F se cita."],
        ["Copiar un párrafo en la pregunta abierta", "Reformular con tus palabras", "En la abierta se reformula."],
        ["L'auteur salue les dérives… et les condamne.", "L'auteur dénonce les dérives… et les condamne.", "Coherencia del tono."]
      ] }
  ],
  ejemplos: [
    { sit: "Justifica un «Vrai».", resp: "Vrai : « Le télétravail a progressé de 30 % » (l. 12).", pasos: ["Cita exacta entre « ».", "Número de línea."], porque: "Justificar." },
    { sit: "Reformula: la medida es insuficiente.", resp: "Selon le texte, la mesure est jugée insuffisante.", pasos: ["Selon le texte, …", "Tus palabras."], porque: "Pregunta abierta." },
    { sit: "Describe el tono crítico.", resp: "L'auteur adopte un ton critique à l'égard des réseaux.", pasos: ["adopter un ton + adjetivo."], porque: "Tono." }
  ],
  comprueba: [
    { q: "Un Vrai / Faux se justifica…", o: ["con la cita exacta", "con tus palabras"], a: 0, b: "questions", porque: "Cita." },
    { q: "Una pregunta abierta se responde…", o: ["reformulando", "copiando un párrafo"], a: 0, b: "questions", porque: "Reformular." },
    { q: "«déplorer» revela un tono…", o: ["crítico", "favorable"], a: 0, b: "ton", porque: "Crítico." }
  ],
  practica: [
    { fase: "guiada", c: ["ce-questions"], k: "choice", es: true, ask: "¿Cómo justificas un Vrai / Faux?", q: "Elige:", o: ["con la cita exacta", "con tus palabras", "sin justificar"], a: 0, pista: "Entre comillas.", why: "<b>Cita</b>." },
    { fase: "guiada", c: ["ce-ton"], k: "choice", es: true, ask: "«Encore une réforme miracle…» El tono es…", q: "Elige:", o: ["irónico", "neutro", "entusiasta"], a: 0, pista: "¿De verdad es un milagro?", why: "<b>Ironía</b>." },
    { fase: "indep", c: ["ce-ton"], k: "fill", ask: "Escribe «respecto» (à l'… de).", q: "L'auteur adopte un ton critique à l'___ des réseaux.", acc: ["égard"], why: "<b>à l'égard de</b>." },
    { fase: "indep", c: ["ce-questions"], k: "fill", ask: "Escribe «considerada».", q: "Selon le texte, la mesure est ___ insuffisante.", acc: ["jugée"], why: "<b>jugée</b>." },
    { fase: "indep", c: ["ce-ton"], k: "spot", ask: "Toca la palabra incoherente.", s: "L'auteur [salue] les dérives des réseaux sociaux et les condamne .", fix: "dénonce", why: "Coherencia: <b>dénonce</b>." },
    { fase: "indep", c: ["ce-questions"], k: "choice", es: true, ask: "¿Cómo respondes una pregunta abierta?", q: "Elige:", o: ["reformulando con tus palabras", "copiando un párrafo", "con una palabra"], a: 0, why: "<b>Reformular</b>." },
    { fase: "aplica", c: ["ce-questions"], k: "match", ask: "Une la pregunta y su estrategia.", ctx: "Simulacro del DALF.", q: "Pregunta → estrategia", pairs: [["Vrai / Faux", "citar la frase"], ["QCM", "eliminar distractores"], ["question ouverte", "reformular"], ["sens d'un mot", "usar el contexto"]], why: "Estrategias." },
    { fase: "aplica", c: ["ce-ton"], k: "sort", ask: "¿Tono crítico o favorable?", ctx: "Analizas los verbos del autor.", q: "Clasifica.", cats: ["Crítico", "Favorable"], items: [["dénoncer", 0], ["déplorer", 0], ["s'inquiéter de", 0], ["saluer", 1], ["se réjouir de", 1], ["défendre", 1]], why: "Verbos que revelan el tono." },
    { fase: "dominio", c: ["ce-ton"], k: "order", ask: "Ordena: «El autor adopta un tono crítico».", tokens: ["L'auteur", "adopte", "un ton", "critique."], why: "adopter un ton." },
    { fase: "dominio", c: ["ce-questions"], k: "choice", ask: "Justificación correcta:", q: "Elige:", o: ["Vrai : « Le télétravail a progressé de 30 % » (l. 12).", "Vrai : je pense que le télétravail progresse."], a: 0, why: "Cita exacta." },
    { fase: "dominio", c: ["ce-questions", "ce-ton"], k: "listen", ask: "Escucha y escribe.", say: "Reformulez l'idée principale avec vos propres mots.", acc: ["Reformulez l'idée principale avec vos propres mots."], num: false, dict: true, why: "Consigna de la pregunta abierta." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche"], previo: ["30", "12"] }
};

/* Lección 58 · La síntesis paso a paso (retoma la confrontación y la síntesis) */
window.__ENSENA["prog-synthese-etapes"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "La synthèse pas à pas",
  roles: {},
  objetivo: {
    que: "Vas a organizar tu tiempo en la síntesis del DALF: leer, confrontar, planificar, redactar y releer, sin opinión personal.",
    corto: "Cinco pasos y unos 220 palabras.",
    podras: ["Repartir el tiempo en cinco pasos.", "Saber qué está permitido y qué no.", "Presentar los documentos con «Les documents proposés abordent…»."],
    iconos: ["m2d/lista", "m2d/reloj", "m2d/escribiendo"],
    previos: ["La síntesis (lección 27) y confrontar documentos (lección 54)."],
    capacidad: "Ahora haces la síntesis del DALF con un método que cabe en el tiempo del examen."
  },
  requiere: ["sy-format", "cf-tableau", "cf-conn"],
  recupera: ["cf-tableau"],
  conceptos: {
    "se-etapes": { n: "Los cinco pasos", b: "etapes" },
    "se-regles": { n: "Lo permitido y lo prohibido", b: "regles" }
  },
  video: {
    titulo: "La síntesis paso a paso", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/lista", grande: "≈ 220 mots", seg: [
        { es: "Hola. La síntesis es la prueba más técnica del examen. Con método, cabe en el tiempo." } ] },
      { v: "frase", filas: [
          { nota: "15 min", p: 1, partes: [["lecture active", "-", 1]] },
          { nota: "15 min", p: 2, partes: [["tableau de confrontation", "-", 2]] },
          { nota: "10 min", p: 3, partes: [["problématique + plan", "-", 3]] },
          { nota: "30 + 10 min", p: 4, partes: [["rédaction + relecture", "-", 4]] } ], seg: [
        { es: "Lectura activa,", p: 1 },
        { es: "el cuadro,", p: 2 },
        { es: "la problemática y el plan,", p: 3 },
        { es: "la redacción y la relectura con el conteo de palabras.", p: 4 } ] },
      { v: "pregunta", img: "m2d/pensativo", es: true, q: "«Je pense que…» en la síntesis:", o: ["prohibido", "permitido"], a: 0,
        bien: "¡Sí! La síntesis no lleva opinión.", mal: "La síntesis no lleva opinión personal: prohibido.",
        seg: [ { es: "Pausa. ¿Puedes dar tu opinión?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["titre", "plan thématique", "aucune opinion", "≈ 220 mots"], seg: [
        { es: "Título, plan por temas, nada de opinión y el número de palabras.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Se acaba el tiempo", img: "bg-biblioteca", yo: "laura",
    escena: "En el simulacro, a Laura le faltan diez minutos para terminar la síntesis.",
    pj: __PJ,
    lineas: [
      ["laura", "Je n'ai pas fini ! J'ai lu les documents trois fois.", "¡No terminé! Leí los documentos tres veces."],
      ["tutrice", "Je commence par lire attentivement chaque document, une fois.", "Empiezo leyendo atentamente cada documento, una vez."],
      ["laura", "Et ensuite, le tableau ?", "¿Y después, el cuadro?"],
      ["tutrice", "Oui : le tableau de confrontation m'aide à construire le plan.", "Sí: el cuadro de confrontación me ayuda a construir el plan."]
    ],
    fijate: "Fíjate: cada paso tiene un tiempo fijo."
  },
  ensena: [
    { id: "etapes", tipo: "gram", titulo: "Los cinco pasos",
      idea: "Leer (15), cuadro (15), problemática y plan (10), redactar (30), releer y contar (10).",
      intro: "Unos 80 minutos en total:",
      tabla: [["Paso", "Tiempo", "Qué haces"], [
        ["lecture active", "15 min", "la idea principal de cada documento"],
        ["tableau de confrontation", "15 min", "ideas × documentos"],
        ["problématique + plan", "10 min", "una pregunta común, 2 o 3 partes temáticas"],
        ["rédaction", "30 min", "introducción breve, partes, conclusión corta"],
        ["relecture", "10 min", "ortografía y conteo de palabras"]
      ]],
      regla: ["Les documents proposés abordent la question du télétravail: así empieza la introducción."] },
    { id: "regles", tipo: "gram", titulo: "Lo permitido y lo prohibido",
      idea: "Sí: título, conectores, mención de los documentos. No: opinión, ejemplos propios, ideas que no están en los documentos.",
      intro: "Las reglas del examen:",
      tabla: [["Permitido", "Prohibido", "Por qué"], [
        ["un titre", "« Je pense que »", "la síntesis es objetiva"],
        ["des connecteurs", "un exemple personnel", "solo los documentos"],
        ["mentionner les documents", "une idée absente des documents", "fidelidad"],
        ["une problématique", "une longue citation", "con tus palabras"]
      ]],
      regla: ["Les documents s'accordent à reconnaître que…: forma neutra de presentar un acuerdo.", "La synthèse ne contient aucune opinion personnelle."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Errores típicos.",
      errores: [
        ["Je pense que le télétravail est génial.", "Les documents s'accordent à reconnaître que…", "Sin opinión."],
        ["Leer tres veces cada documento", "Una lectura activa, con notas", "Gestión del tiempo."],
        ["Les trois documents s'accorde…", "Les trois documents s'accordent…", "Plural."]
      ] }
  ],
  ejemplos: [
    { sit: "Empieza la introducción.", resp: "Les documents proposés abordent la question du télétravail.", pasos: ["Presenta el tema común."], porque: "Fórmula neutra." },
    { sit: "Los documentos coinciden en reconocer…", resp: "Les documents s'accordent à reconnaître l'importance du sommeil.", pasos: ["s'accorder à + infinitivo."], porque: "Acuerdo neutro." },
    { sit: "¿Cuánto tiempo para redactar?", resp: "30 min", pasos: ["Después del plan."], porque: "El paso más largo." }
  ],
  comprueba: [
    { q: "En la síntesis está prohibido…", o: ["dar tu opinión", "poner título"], a: 0, b: "regles", porque: "Opinión." },
    { q: "Extensión aproximada:", o: ["unas 220 palabras", "unas 60 palabras"], a: 0, b: "etapes", porque: "~220." },
    { q: "El plan es…", o: ["temático", "documento por documento"], a: 0, b: "etapes", porque: "Temático." }
  ],
  practica: [
    { fase: "guiada", c: ["se-regles"], k: "choice", es: true, ask: "¿Qué está prohibido en la síntesis?", q: "Elige:", o: ["dar tu opinión", "usar conectores", "poner título"], a: 0, pista: "Es objetiva.", why: "<b>Opinión</b>." },
    { fase: "guiada", c: ["se-etapes"], k: "choice", es: true, ask: "¿Cuántas palabras, más o menos?", q: "Elige:", o: ["unas 220", "unas 60", "unas 1 000"], a: 0, pista: "Ni muy corta ni muy larga.", why: "<b>~220</b>." },
    { fase: "indep", c: ["se-regles"], k: "fill", ask: "Escribe «coinciden».", q: "Les documents s'___ à reconnaître l'importance du sommeil.", acc: ["accordent"], why: "<b>s'accorder à</b>." },
    { fase: "indep", c: ["se-etapes"], k: "fill", ask: "Escribe «abordan».", q: "Les documents proposés ___ la question du télétravail.", acc: ["abordent"], why: "<b>aborder</b>." },
    { fase: "indep", c: ["se-regles"], k: "spot", ask: "Toca el error.", s: "Les trois documents s' [accorde] à reconnaître l'importance du sommeil .", fix: "accordent", why: "Plural: <b>s'accordent</b>." },
    { fase: "indep", c: ["se-etapes"], k: "choice", es: true, ask: "¿Cómo se organiza el plan?", q: "Elige:", o: ["por temas", "documento por documento", "por autor"], a: 0, why: "<b>Temático</b>." },
    { fase: "aplica", c: ["se-etapes"], k: "match", ask: "Une el paso y su tiempo.", ctx: "Planificas el examen.", q: "Paso → tiempo", pairs: [["lecture active", "15 min"], ["problématique + plan", "10 min"], ["rédaction", "30 min"]], why: "Gestión de la prueba." },
    { fase: "aplica", c: ["se-regles"], k: "sort", ask: "¿Permitido en la síntesis?", ctx: "Revisas tu borrador.", q: "Clasifica.", cats: ["Permitido", "Prohibido"], items: [["un titre", 0], ["des connecteurs", 0], ["mentionner les documents", 0], ["« Je pense que »", 1], ["un exemple personnel", 1], ["une idée absente des documents", 1]], why: "Reglas de la síntesis." },
    { fase: "dominio", c: ["se-etapes"], k: "order", ask: "Ordena la primera frase.", tokens: ["Les documents", "proposés", "abordent", "la question du télétravail."], why: "Introducción." },
    { fase: "dominio", c: ["se-regles"], k: "choice", ask: "Elige la frase de síntesis.", q: "Elige:", o: ["Les documents s'accordent à reconnaître l'importance du sommeil.", "Je pense que le sommeil est très important."], a: 0, why: "Sin opinión." },
    { fase: "dominio", c: ["se-etapes", "se-regles"], k: "listen", ask: "Escucha y escribe.", say: "La synthèse ne contient aucune opinion personnelle.", acc: ["La synthèse ne contient aucune opinion personnelle."], num: false, dict: true, why: "Regla de oro." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche"], previo: ["220", "15", "10", "30", "80", "60", "1 000"] }
};

/* Lección 59 · El ensayo argumentado del DALF C1 (retoma el ensayo y la concesión fuerte) */
window.__ENSENA["prog-essai-dalf"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "L'essai argumenté du DALF C1",
  roles: {},
  objetivo: {
    que: "Vas a escribir el texto argumentado del DALF: leer bien la consigna, defender tu posición con ejemplos y refutar una objeción.",
    corto: "Ahora sí: tu opinión, bien argumentada.",
    podras: ["Leer en la consigna el género, el destinatario y la posición.", "Rebatir un tópico con «Contrairement à une idée répandue».", "Refutar con «Certes…, il n'en demeure pas moins que…»."],
    iconos: ["m2d/escribiendo", "ic2/espadas", "ic2/lapiz"],
    previos: ["El ensayo argumentativo (lección 28) y los conectores cultos (lección 44)."],
    capacidad: "Ahora escribes la segunda parte de la producción escrita del DALF con opinión, ejemplos y refutación."
  },
  requiere: ["es-forme", "es-par", "cs-concess"],
  recupera: ["cs-concess"],
  conceptos: {
    "ed-consigne": { n: "La consigna y la diferencia con la síntesis", b: "consigne" },
    "ed-formules": { n: "Posición, ejemplo y refutación", b: "formules" }
  },
  video: {
    titulo: "El ensayo del DALF", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/escribiendo", grande: "≈ 250 mots", seg: [
        { es: "Hola. Después de la síntesis, el examen te pide tu opinión sobre el mismo tema." } ] },
      { v: "dos",
        a: { tag: "síntesis", fr: "Les documents s'accordent à reconnaître que…", es: "sin opinión" },
        b: { tag: "ensayo", fr: "Je défendrai l'idée que l'école doit s'adapter.", es: "con tu opinión" },
        seg: [
          { es: "La síntesis es objetiva.", p: 1 },
          { es: "El ensayo defiende una posición, con tus propios ejemplos.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "Contrairement ___ une idée répandue, les jeunes lisent beaucoup.", o: ["à", "de"], a: 0,
        bien: "¡Sí! Contrairement à.", mal: "Es «contrairement à».",
        seg: [ { es: "Pausa. ¿Qué preposición va?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Je défendrai l'idée que", "Prenons l'exemple de", "Certes…", "il n'en demeure pas moins que"], seg: [
        { es: "Posición, ejemplo, refutación y una llamada a actuar al final.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Repetir la síntesis", img: "bg-biblioteca", yo: "laura",
    escena: "El ensayo de Laura repite casi palabra por palabra su síntesis.",
    pj: __PJ,
    lineas: [
      ["tutrice", "Votre essai répète la synthèse. Où est votre position ?", "Su ensayo repite la síntesis. ¿Dónde está su posición?"],
      ["laura", "Je défendrai l'idée que l'école doit s'adapter.", "Defenderé la idea de que la escuela debe adaptarse."],
      ["tutrice", "Bien. Avec vos propres exemples.", "Bien. Con sus propios ejemplos."],
      ["laura", "Prenons l'exemple des pays scandinaves.", "Tomemos el ejemplo de los países escandinavos."]
    ],
    fijate: "Fíjate: el ensayo aporta lo que la síntesis no puede: tu voz."
  },
  ensena: [
    { id: "consigne", tipo: "gram", titulo: "Leer la consigna",
      idea: "Busca tres cosas: el género (carta, artículo, ensayo), el destinatario y la posición que te piden.",
      intro: "Síntesis y ensayo, frente a frente:",
      tabla: [["Síntesis", "Ensayo", "Diferencia"], [
        ["sans opinion", "opinion personnelle", "objetivo / personal"],
        ["plan à partir des documents", "exemples personnels", "fuentes / tus ejemplos"],
        ["≈ 220 mots", "≈ 250 mots", "extensión"],
        ["titre obligatoire", "réfutation", "rasgos propios"]
      ]],
      regla: ["Adapta el registro al destinatario: carta al director, artículo para una revista…"] },
    { id: "formules", tipo: "gram", titulo: "Posición, ejemplo y refutación",
      idea: "Anuncia tu tesis, apóyala con un ejemplo y refuta la objeción con Certes…, il n'en demeure pas moins que…",
      intro: "Fórmulas del ensayo:",
      tabla: [["Francés", "Español", "Función"], [
        ["Je défendrai l'idée que l'école doit s'adapter.", "Defenderé la idea de que…", "tesis"],
        ["Contrairement à une idée répandue, le télétravail n'isole pas nécessairement.", "Contrariamente a una idea extendida…", "rebatir un tópico"],
        ["Prenons l'exemple des pays scandinaves.", "Tomemos el ejemplo de…", "ejemplo"],
        ["Certes, le coût est élevé ; il n'en demeure pas moins que l'investissement est rentable.", "Es cierto…; no es menos cierto que…", "refutación"],
        ["C'est pourquoi j'appelle les décideurs à agir.", "Por eso llamo a los responsables a actuar.", "llamada a la acción"],
        ["Il est donc urgent de repenser notre modèle.", "Es, por tanto, urgente repensar…", "conclusión"]
      ]],
      regla: ["appeler quelqu'un à + infinitivo."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Errores típicos.",
      errores: [
        ["Repetir la síntesis", "Aportar tus propios argumentos y ejemplos", "El ensayo es personal."],
        ["Contrairement de une idée répandue", "Contrairement à une idée répandue", "à."],
        ["Mais non, c'est faux.", "Certes…, il n'en demeure pas moins que…", "Refutación culta."]
      ] }
  ],
  ejemplos: [
    { sit: "Anuncia tu tesis.", resp: "Je défendrai l'idée que l'école doit s'adapter.", pasos: ["Futuro: je défendrai.", "l'idée que + indicativo."], porque: "Posición clara." },
    { sit: "Rebate un tópico.", resp: "Contrairement à une idée répandue, le télétravail n'isole pas nécessairement.", pasos: ["Contrairement à…"], porque: "Romper el tópico." },
    { sit: "Refuta la objeción del coste.", resp: "Certes, le coût est élevé ; il n'en demeure pas moins que l'investissement est rentable.", pasos: ["Concedes.", "Superas."], porque: "Refutación." }
  ],
  comprueba: [
    { q: "El ensayo, a diferencia de la síntesis…", o: ["incluye tu opinión", "no tiene plan"], a: 0, b: "consigne", porque: "Opinión." },
    { q: "Refutación culta:", o: ["Certes…, il n'en demeure pas moins que…", "Mais non, c'est faux."], a: 0, b: "formules", porque: "Concesión + refutación." },
    { q: "Contrairement … une idée répandue", o: ["à", "de"], a: 0, b: "formules", porque: "à." }
  ],
  practica: [
    { fase: "guiada", c: ["ed-consigne"], k: "choice", es: true, ask: "¿Qué diferencia el ensayo de la síntesis?", q: "Elige:", o: ["el ensayo incluye tu opinión", "el ensayo no tiene plan", "la síntesis tiene opinión"], a: 0, pista: "Tu voz.", why: "<b>Opinión</b>." },
    { fase: "guiada", c: ["ed-formules"], k: "choice", ask: "Rebate un tópico.", q: "Elige:", o: ["Contrairement à une idée répandue, …", "Comme tout le monde le sait, …", "Évidemment, …"], a: 0, pista: "Contrariamente a…", why: "<b>Contrairement à une idée répandue</b>." },
    { fase: "indep", c: ["ed-formules"], k: "fill", ask: "Completa la refutación.", q: "Il n'en ___ pas moins que ce projet est nécessaire.", acc: ["demeure", "reste"], why: "<b>il n'en demeure pas moins que</b>." },
    { fase: "indep", c: ["ed-formules"], k: "fill", ask: "Escribe la preposición.", q: "J'appelle les décideurs ___ agir.", acc: ["à"], why: "<b>appeler à</b>." },
    { fase: "indep", c: ["ed-formules"], k: "spot", ask: "Toca el error.", s: "Contrairement [de] une idée répandue , les jeunes lisent beaucoup .", fix: "à", why: "<b>Contrairement à</b>." },
    { fase: "indep", c: ["ed-formules"], k: "choice", ask: "Introduce un ejemplo.", q: "Elige:", o: ["Prenons l'exemple des pays scandinaves.", "Prenons exemple les pays scandinaves.", "Prenez l'exemple de les pays scandinaves."], a: 0, why: "<b>Prenons l'exemple de</b>." },
    { fase: "aplica", c: ["ed-formules"], k: "match", ask: "Une la fórmula y su función.", ctx: "Escribes tu ensayo.", q: "Fórmula → función", pairs: [["Je défendrai l'idée que…", "tesis"], ["Prenons l'exemple de…", "ejemplo"], ["Certes…, il n'en demeure pas moins que…", "refutación"], ["J'appelle les décideurs à agir.", "llamada a la acción"]], why: "Piezas del ensayo." },
    { fase: "aplica", c: ["ed-consigne"], k: "sort", ask: "¿Síntesis o ensayo?", ctx: "Distingues las dos pruebas.", q: "Clasifica.", cats: ["Síntesis", "Ensayo"], items: [["sans opinion", 0], ["titre obligatoire", 0], ["plan à partir des documents", 0], ["opinion personnelle", 1], ["exemples personnels", 1], ["réfutation", 1]], why: "Dos pruebas distintas." },
    { fase: "dominio", c: ["ed-formules"], k: "order", ask: "Ordena la tesis.", tokens: ["Je défendrai", "l'idée que", "l'école", "doit s'adapter."], why: "Tesis." },
    { fase: "dominio", c: ["ed-consigne"], k: "choice", ask: "Elige la frase propia de un ensayo.", q: "Elige:", o: ["Il est donc urgent de repenser notre modèle.", "Les documents proposés abordent la question."], a: 0, why: "Posición personal." },
    { fase: "dominio", c: ["ed-formules", "ed-consigne"], k: "listen", ask: "Escucha y escribe.", say: "Contrairement à une idée répandue, le télétravail n'isole pas nécessairement.", acc: ["Contrairement à une idée répandue, le télétravail n'isole pas nécessairement."], num: false, dict: true, why: "Rebatir un tópico." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche"], previo: ["220", "250"] }
};

/* Lección 60 · Preparar la exposición oral (retoma el oral del DALF y las transiciones) */
window.__ENSENA["prog-oral-preparation"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Préparer l'exposé oral",
  roles: {},
  objetivo: {
    que: "Vas a aprovechar la hora de preparación del oral: problemática, plan, notas en palabras clave y fórmulas para guiar al jurado.",
    corto: "Una hora para preparar diez minutos.",
    podras: ["Repartir la hora de preparación.", "Anunciar el plan con «Je m'attacherai d'abord à…».", "Pasar de parte con «J'en viens à présent à…»."],
    iconos: ["ic2/microfono", "m2d/reloj", "m2d/lista"],
    previos: ["El oral del DALF C1 (lección 29) y las transiciones (lección 49)."],
    capacidad: "Ahora preparas y presentas una exposición estructurada sin leer."
  },
  requiere: ["or-epreuve", "tr-formules"],
  recupera: ["tr-formules"],
  conceptos: {
    "op-temps": { n: "La preparación y los tiempos", b: "temps" },
    "op-formules": { n: "Fórmulas para guiar al jurado", b: "formules" }
  },
  video: {
    titulo: "Preparar el oral", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/microfono", grande: "60 min → 10 min", seg: [
        { es: "Hola. En el oral tienes una hora para preparar una exposición de diez minutos y luego un debate." } ] },
      { v: "dos",
        a: { tag: "así no", fr: "Voilà mon texte.", es: "leer un texto redactado" },
        b: { tag: "así sí", fr: "Je note seulement des mots-clés sur ma feuille.", es: "hablar desde notas" },
        seg: [
          { es: "No escribas todo para leerlo.", p: 1 },
          { es: "Anota solo palabras clave y conectores, y habla mirando al jurado.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "J'en viens à ___ à ma deuxième partie.", o: ["présent", "présenter"], a: 0,
        bien: "¡Sí! Paso ahora a…", mal: "Es «à présent»: ahora.",
        seg: [ { es: "Pausa. ¿Cómo se dice «ahora»?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Le dossier porte sur…", "Je m'attacherai d'abord à…", "J'en viens à présent à…", "Je termine par…"], seg: [
        { es: "Presentar el tema, anunciar, pasar de parte y terminar.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Un texto para leer", img: "bg-universidad", yo: "laura",
    escena: "En el simulacro del oral, Laura ha redactado su exposición completa.",
    pj: __PJ,
    lineas: [
      ["tutrice", "Vous avez tout rédigé ? Le jury veut un échange, pas une lecture.", "¿Lo redactó todo? El jurado quiere un intercambio, no una lectura."],
      ["laura", "Alors je note seulement des mots-clés sur ma feuille.", "Entonces anoto solo palabras clave en mi hoja."],
      ["tutrice", "Et annoncez votre plan.", "Y anuncie su plan."],
      ["laura", "Mon exposé comportera deux parties.", "Mi exposición tendrá dos partes."]
    ],
    fijate: "Fíjate: el jurado evalúa cómo hablas, no cómo lees."
  },
  ensena: [
    { id: "temps", tipo: "gram", titulo: "La preparación y los tiempos",
      idea: "60 minutos de preparación, unos 10 de exposición y unos 20 de debate.",
      intro: "Cómo repartirlo:",
      tabla: [["Momento", "Duración", "Qué haces"], [
        ["préparation", "60 min", "leer el dossier, problemática, plan, ejemplos, notas"],
        ["introduction", "1-2 min", "tema, problemática, plan"],
        ["chaque partie", "≈ 3 min", "idea, documentos, ejemplo propio"],
        ["conclusion", "≈ 1 min", "balance y apertura"],
        ["débat", "≈ 20 min", "responder al jurado"]
      ]],
      regla: ["Escribe la introducción y la conclusión en palabras clave: son lo que más se recuerda."] },
    { id: "formules", tipo: "gram", titulo: "Fórmulas para guiar al jurado",
      idea: "Presenta el dossier, anuncia el plan en futuro, pasa de parte y termina con una apertura.",
      intro: "Las del oral:",
      tabla: [["Francés", "Español", "Momento"], [
        ["Le dossier que j'ai eu à étudier porte sur l'éducation numérique.", "El dossier que tuve que estudiar trata de…", "presentar"],
        ["Mon exposé comportera deux parties.", "Mi exposición tendrá dos partes.", "anunciar"],
        ["Je m'attacherai d'abord à montrer que…", "Me dedicaré primero a mostrar que…", "anunciar"],
        ["J'en viens à présent à ma deuxième partie.", "Paso ahora a mi segunda parte.", "transición"],
        ["Je termine par une ouverture sur l'avenir.", "Termino con una apertura hacia el futuro.", "concluir"]
      ]],
      regla: ["Anuncio en futuro: je m'attacherai (no el condicional attacherais)."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Errores típicos.",
      errores: [
        ["Leer un texto redactado", "Hablar desde notas esquemáticas", "El jurado evalúa la interacción."],
        ["Je m'attacherais d'abord…", "Je m'attacherai d'abord…", "Futuro."],
        ["Pasar veinte minutos exponiendo", "Unos diez minutos", "Respeta el tiempo."]
      ] }
  ],
  ejemplos: [
    { sit: "Presenta el dossier.", resp: "Le dossier que j'ai eu à étudier porte sur l'éducation numérique.", pasos: ["porter sur + tema."], porque: "Presentar." },
    { sit: "Anuncia la primera parte.", resp: "Je m'attacherai d'abord à montrer que…", pasos: ["Futuro.", "s'attacher à + infinitivo."], porque: "Anunciar." },
    { sit: "Pasa a la segunda parte.", resp: "J'en viens à présent à ma deuxième partie.", pasos: ["en venir à.", "à présent."], porque: "Transición oral." }
  ],
  comprueba: [
    { q: "La preparación dura…", o: ["1 hora", "10 minutos"], a: 0, b: "temps", porque: "60 min." },
    { q: "En la exposición, evita…", o: ["leer un texto redactado", "mirar al jurado"], a: 0, b: "temps", porque: "No leer." },
    { q: "Anuncio: Je m'… d'abord à…", o: ["attacherai", "attacherais"], a: 0, b: "formules", porque: "Futuro." }
  ],
  practica: [
    { fase: "guiada", c: ["op-temps"], k: "choice", es: true, ask: "¿Cuánto dura la preparación?", q: "Elige:", o: ["1 hora", "10 minutos", "2 horas"], a: 0, pista: "Luego hablas diez minutos.", why: "<b>60 min</b>." },
    { fase: "guiada", c: ["op-formules"], k: "choice", ask: "Anuncia tu plan.", q: "Elige:", o: ["Je m'attacherai d'abord à montrer que…", "D'abord je lis mon texte.", "Voilà mon texte."], a: 0, pista: "s'attacher à.", why: "<b>s'attacher à</b>." },
    { fase: "indep", c: ["op-formules"], k: "fill", ask: "Escribe «ahora».", q: "J'en viens à ___ à ma deuxième partie.", acc: ["présent"], why: "<b>à présent</b>." },
    { fase: "indep", c: ["op-formules"], k: "fill", ask: "Escribe «trata».", q: "Le dossier ___ sur l'éducation numérique.", acc: ["porte"], why: "<b>porter sur</b>." },
    { fase: "indep", c: ["op-formules"], k: "spot", ask: "Toca el error.", s: "Je m' [attacherais] d'abord à définir les termes du sujet .", fix: "attacherai", why: "Futuro: <b>attacherai</b>." },
    { fase: "indep", c: ["op-temps"], k: "choice", es: true, ask: "¿Qué anotas en tu hoja?", q: "Elige:", o: ["palabras clave y conectores", "el texto completo", "nada"], a: 0, why: "Notas esquemáticas." },
    { fase: "aplica", c: ["op-temps"], k: "match", ask: "Une el momento y su duración.", ctx: "Planificas tu oral.", q: "Momento → duración", pairs: [["introducción", "1-2 min"], ["cada parte", "≈ 3 min"], ["conclusión", "≈ 1 min"], ["debate", "≈ 20 min"]], why: "Tiempos." },
    { fase: "aplica", c: ["op-temps"], k: "sort", ask: "¿Buena práctica?", ctx: "Te preparas para el oral.", q: "Clasifica.", cats: ["Sí", "No"], items: [["noter des mots-clés", 0], ["annoncer le plan", 0], ["regarder le jury", 0], ["tout rédiger et lire", 1], ["ignorer les documents", 1]], why: "Exposición eficaz." },
    { fase: "dominio", c: ["op-formules"], k: "order", ask: "Ordena: «Paso ahora a mi segunda parte».", tokens: ["J'en viens", "à présent", "à ma", "deuxième partie."], why: "Transición oral." },
    { fase: "dominio", c: ["op-formules"], k: "choice", ask: "Termina tu exposición.", q: "Elige:", o: ["Je termine par une ouverture sur l'avenir.", "Voilà, c'est tout, merci."], a: 0, why: "Apertura." },
    { fase: "dominio", c: ["op-temps", "op-formules"], k: "listen", ask: "Escucha y escribe.", say: "Mon exposé comportera deux parties.", acc: ["Mon exposé comportera deux parties."], num: false, dict: true, why: "Anunciar el plan." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche"], previo: ["60", "10", "20"] }
};

/* Lección 61 · Debatir con el jurado (retoma el oral y la modalización) */
window.__ENSENA["prog-oral-debat"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Débattre avec le jury",
  roles: {},
  objetivo: {
    que: "Vas a responder al jurado con cortesía y firmeza: reformular la pregunta, conceder, matizar y defender tu posición.",
    corto: "Firmeza cortés frente al jurado.",
    podras: ["Reformular: «Si je vous comprends bien…».", "Conceder: «Vous soulevez là un point essentiel».", "Matizar y defender: «Je nuancerais…», «Il me semble néanmoins…»."],
    iconos: ["m2d/duelo", "ic2/microfono", "ic2/amigos"],
    previos: ["El oral del DALF C1 (lección 29) y la modalización (lección 40)."],
    capacidad: "Ahora sostienes un debate de veinte minutos con el jurado sin perder el registro."
  },
  requiere: ["or-debat", "mo-degres"],
  recupera: ["or-debat"],
  conceptos: {
    "od-fonctions": { n: "Reformular, conceder, matizar, defender", b: "fonctions" },
    "od-registre": { n: "El registro con el jurado", b: "registre" }
  },
  video: {
    titulo: "Debatir con el jurado", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/duelo", grande: "Vous soulevez là un point essentiel.", seg: [
        { es: "Hola. En el debate el jurado te lleva la contraria a propósito. Lo que evalúa es cómo respondes." } ] },
      { v: "frase", filas: [
          { nota: "reformular", p: 1, partes: [["Si je vous comprends bien, …", "-", 1]] },
          { nota: "conceder", p: 2, partes: [["Vous soulevez là un point essentiel.", "-", 2]] },
          { nota: "matizar", p: 3, partes: [["Je nuancerais toutefois ce propos.", "-", 3]] },
          { nota: "defender", p: 4, partes: [["Il me semble néanmoins que…", "-", 4]] } ], seg: [
        { es: "Primero, asegúrate de entender la pregunta.", p: 1 },
        { es: "Reconoce lo que tiene de cierto,", p: 2 },
        { es: "matiza,", p: 3 },
        { es: "y defiende tu posición.", p: 4 } ] },
      { v: "pregunta", img: "m2d/pensativo", es: true, q: "¿Qué dices al jurado?", o: ["Je vois les choses un peu différemment.", "Vous avez tort."], a: 0,
        bien: "¡Sí! Firme y cortés.", mal: "Es demasiado brusco. Mejor: Je vois les choses un peu différemment.",
        seg: [ { es: "Pausa. El jurado no está de acuerdo contigo. ¿Qué le dices?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Si je vous comprends bien", "Vous soulevez là", "Je nuancerais", "Il me semble néanmoins"], seg: [
        { es: "Reformular, conceder, matizar y defender, siempre de usted.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Un jurado que contradice", img: "bg-universidad", yo: "laura",
    escena: "El jurado defiende lo contrario de lo que Laura acaba de exponer.",
    pj: __PJ,
    lineas: [
      ["tutrice", "Le télétravail isole, non ? Votre thèse me semble fragile.", "El teletrabajo aísla, ¿no? Su tesis me parece frágil."],
      ["laura", "Vous soulevez là un point essentiel.", "Plantea usted un punto esencial."],
      ["tutrice", "Alors, vous changez d'avis ?", "Entonces, ¿cambia de opinión?"],
      ["laura", "Je comprends votre objection, mais je la nuancerais.", "Entiendo su objeción, pero la matizaría."]
    ],
    fijate: "Fíjate: Laura concede sin abandonar su posición."
  },
  ensena: [
    { id: "fonctions", tipo: "gram", titulo: "Cuatro movimientos",
      idea: "Reformula la pregunta, concede lo justo, matiza y defiende tu posición.",
      intro: "Una fórmula para cada movimiento:",
      tabla: [["Movimiento", "Francés", "Español"], [
        ["reformular", "Si je vous comprends bien, vous me demandez si…", "Si le entiendo bien, me pregunta si…"],
        ["precisar", "Pourriez-vous préciser votre question ?", "¿Podría precisar su pregunta?"],
        ["conceder", "Vous soulevez là un point essentiel.", "Plantea usted un punto esencial."],
        ["coincidir", "Sur ce point, je vous rejoins entièrement.", "En este punto, coincido totalmente con usted."],
        ["matizar", "Je nuancerais toutefois ce propos.", "Matizaría sin embargo esta afirmación."],
        ["defender", "Il me semble néanmoins que…", "Me parece no obstante que…"]
      ]],
      regla: ["Pedir tiempo está permitido: C'est une question complexe ; permettez-moi d'y réfléchir."] },
    { id: "registre", tipo: "gram", titulo: "El registro con el jurado",
      idea: "Siempre de usted y con firmeza cortés: nunca «Vous avez tort» ni «Tu te trompes».",
      intro: "Compara:",
      tabla: [["Inadecuado", "Adecuado", "Por qué"], [
        ["Vous avez tort.", "Je vois les choses un peu différemment.", "cortesía"],
        ["Je ne veux pas répondre.", "Permettez-moi de préciser ma pensée.", "colaborar"],
        ["N'importe quoi.", "Je comprends votre objection, mais je la nuancerais.", "argumentar"]
      ]],
      regla: ["soulever un point = plantear un punto (no «lever»)."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Errores típicos.",
      errores: [
        ["Vous avez tort.", "Je vois les choses un peu différemment.", "Firmeza cortés."],
        ["Vous levez là un point essentiel.", "Vous soulevez là un point essentiel.", "soulever."],
        ["Tu te trompes.", "Je comprends votre objection, mais…", "De usted."]
      ] }
  ],
  ejemplos: [
    { sit: "Reformula la pregunta del jurado.", resp: "Si je vous comprends bien, vous me demandez si…", pasos: ["Si je vous comprends bien."], porque: "Ganar claridad." },
    { sit: "Concede un punto.", resp: "Vous soulevez là un point essentiel.", pasos: ["soulever un point."], porque: "Conceder." },
    { sit: "Matiza su objeción.", resp: "Je comprends votre objection, mais je la nuancerais.", pasos: ["Condicional de cortesía."], porque: "Matizar." }
  ],
  comprueba: [
    { q: "Para conceder:", o: ["Vous soulevez là un point important.", "Vous avez tort."], a: 0, b: "fonctions", porque: "Reconocer el punto." },
    { q: "Para matizar:", o: ["Je nuancerais toutefois…", "Je refuse de répondre."], a: 0, b: "fonctions", porque: "nuancer." },
    { q: "Con el jurado se habla…", o: ["de usted, con firmeza cortés", "de tú"], a: 0, b: "registre", porque: "Registro." }
  ],
  practica: [
    { fase: "guiada", c: ["od-fonctions"], k: "choice", ask: "Concede un punto.", q: "Elige:", o: ["Vous soulevez là un point important.", "Vous avez tort.", "Je ne sais pas."], a: 0, pista: "Reconoce.", why: "Conceder." },
    { fase: "guiada", c: ["od-fonctions"], k: "choice", ask: "Matiza.", q: "Elige:", o: ["Je nuancerais toutefois ce propos.", "Je refuse de répondre.", "C'est faux, point."], a: 0, pista: "Condicional.", why: "<b>nuancer</b>." },
    { fase: "indep", c: ["od-fonctions"], k: "fill", ask: "Escribe «entiendo».", q: "Si je vous ___ bien, vous me demandez si…", acc: ["comprends"], why: "<b>comprends</b>." },
    { fase: "indep", c: ["od-registre"], k: "fill", ask: "Escribe «plantea».", q: "Vous ___ là une question délicate.", acc: ["soulevez"], why: "<b>soulever</b>." },
    { fase: "indep", c: ["od-registre"], k: "spot", ask: "Toca el error.", s: "Vous [levez] là un point essentiel , je vous remercie .", fix: "soulevez", why: "<b>soulever un point</b>." },
    { fase: "indep", c: ["od-fonctions"], k: "choice", ask: "Pide una precisión.", q: "Elige:", o: ["Pourriez-vous préciser votre question ?", "Quoi ?", "Répète."], a: 0, why: "Condicional de cortesía." },
    { fase: "aplica", c: ["od-fonctions"], k: "match", ask: "Une la fórmula y su función.", ctx: "Debate con el jurado.", q: "Fórmula → función", pairs: [["Si je vous comprends bien…", "reformular"], ["Vous soulevez un point essentiel.", "conceder"], ["Je nuancerais…", "matizar"], ["Il me semble néanmoins…", "defender"]], why: "Debate." },
    { fase: "aplica", c: ["od-registre"], k: "sort", ask: "¿Adecuado con el jurado?", ctx: "Cuidas el registro.", q: "Clasifica.", cats: ["Adecuado", "Inadecuado"], items: [["Je comprends votre objection.", 0], ["Permettez-moi de préciser ma pensée.", 0], ["Sur ce point, je vous rejoins entièrement.", 0], ["Vous avez tort.", 1], ["Tu te trompes.", 1], ["N'importe quoi.", 1]], why: "Registro." },
    { fase: "dominio", c: ["od-fonctions"], k: "order", ask: "Ordena: «Matizaría esta afirmación».", tokens: ["Je", "nuancerais", "toutefois", "ce propos."], why: "Matizar." },
    { fase: "dominio", c: ["od-registre"], k: "choice", ask: "No estás de acuerdo.", q: "Elige:", o: ["Je vois les choses un peu différemment.", "Vous avez tort."], a: 0, why: "Firmeza cortés." },
    { fase: "dominio", c: ["od-fonctions", "od-registre"], k: "listen", ask: "Escucha y escribe.", say: "Vous soulevez là un point essentiel ; permettez-moi toutefois de nuancer.", acc: ["Vous soulevez là un point essentiel ; permettez-moi toutefois de nuancer.", "Vous soulevez là un point essentiel; permettez-moi toutefois de nuancer."], num: false, dict: true, why: "Conceder y matizar." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche"] }
};

/* Lección 62 · Gestionar el tiempo del examen (retoma la síntesis paso a paso) */
window.__ENSENA["prog-gestion-temps"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Gérer son temps le jour de l'examen",
  roles: {},
  objetivo: {
    que: "Vas a conocer la duración de cada prueba del DALF C1 y repartir tu tiempo para llegar a la relectura.",
    corto: "Casi cinco horas: repártelas bien.",
    podras: ["Saber cuánto dura cada prueba.", "Repartir la producción escrita entre síntesis y ensayo.", "Decir «Il me reste dix minutes» y «Je consacre une heure à…»."],
    iconos: ["m2d/reloj", "ic2/reloj-arena", "m2d/lista"],
    previos: ["La síntesis paso a paso (lección 58)."],
    capacidad: "Ahora llegas al final de cada prueba con tiempo para releer."
  },
  requiere: ["se-etapes"],
  recupera: ["se-etapes"],
  conceptos: {
    "gt-format": { n: "Las pruebas y su duración", b: "format" },
    "gt-strat": { n: "Estrategias y expresiones de tiempo", b: "strat" }
  },
  video: {
    titulo: "Gestionar el tiempo", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/reloj", grande: "≈ 5 h", seg: [
        { es: "Hola. El examen dura casi cinco horas. Gestionar el tiempo también se evalúa, aunque nadie te lo diga." } ] },
      { v: "frase", filas: [
          { nota: "≈ 40 min", p: 1, partes: [["compréhension orale", "-", 1]] },
          { nota: "≈ 50 min", p: 2, partes: [["compréhension écrite", "-", 2]] },
          { nota: "2 h 30", p: 3, partes: [["production écrite", "-", 3]] },
          { nota: "1 h + 30 min", p: 4, partes: [["production orale", "-", 4]] } ], seg: [
        { es: "Comprensión oral,", p: 1 },
        { es: "comprensión escrita,", p: 2 },
        { es: "producción escrita: dos horas y media,", p: 3 },
        { es: "y el oral: una hora de preparación y media hora frente al jurado.", p: 4 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "Il me ___ dix minutes pour relire.", o: ["reste", "restent"], a: 0,
        bien: "¡Sí! Impersonal: il me reste.", mal: "Es impersonal: il me reste, en singular.",
        seg: [ { es: "Pausa. ¿Singular o plural?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Je consacre une heure à…", "Il me reste…", "± 10 %", "relire"], seg: [
        { es: "Reparte, cuenta las palabras y guarda siempre tiempo para releer.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Dos horas en la síntesis", img: "bg-biblioteca", yo: "laura",
    escena: "En el simulacro, Laura pasa dos horas en la síntesis y no termina el ensayo.",
    pj: __PJ,
    lineas: [
      ["tutrice", "Deux heures sur la synthèse ? Il ne reste rien pour l'essai.", "¿Dos horas en la síntesis? No queda nada para el ensayo."],
      ["laura", "Je consacre une heure et quart à la synthèse, alors ?", "¿Entonces dedico una hora y cuarto a la síntesis?"],
      ["tutrice", "Oui, et je vérifie l'heure toutes les trente minutes.", "Sí, y compruebo la hora cada treinta minutos."],
      ["laura", "Il me faut dix minutes pour relire ma copie.", "Necesito diez minutos para releer mi examen."]
    ],
    fijate: "Fíjate: sin relectura se pierden puntos fáciles."
  },
  ensena: [
    { id: "format", tipo: "gram", titulo: "Las pruebas y su duración",
      idea: "Oral 40 min, escrita 50 min, producción escrita 2 h 30 y oral 1 h de preparación + 30 min.",
      intro: "El formato del examen:",
      tabla: [["Prueba", "Duración", "Reparto"], [
        ["compréhension orale", "≈ 40 min", "dos escuchas"],
        ["compréhension écrite", "≈ 50 min", "un texto largo"],
        ["production écrite", "2 h 30", "1 h 15 síntesis + 1 h ensayo + 15 min relectura"],
        ["production orale", "1 h + 30 min", "preparación + exposición y debate"]
      ]],
      regla: ["Cuenta las palabras al final: se tolera ± 10 %."] },
    { id: "strat", tipo: "gram", titulo: "Estrategias y expresiones de tiempo",
      idea: "No te bloquees: pasa y vuelve. Y di el tiempo con consacrer, il me reste, il me faut.",
      intro: "Expresiones útiles:",
      tabla: [["Francés", "Español", "Uso"], [
        ["Je consacre une heure et quart à la synthèse.", "Dedico una hora y cuarto a la síntesis.", "repartir"],
        ["Il me reste dix minutes pour me relire.", "Me quedan diez minutos para releerme.", "lo que queda"],
        ["Il me faut dix minutes pour relire ma copie.", "Necesito diez minutos para…", "lo que necesito"],
        ["Je ne perds pas de temps sur une question difficile.", "No pierdo tiempo en una pregunta difícil.", "no bloquearse"],
        ["Je vérifie l'heure toutes les trente minutes.", "Compruebo la hora cada treinta minutos.", "controlar"],
        ["J'ai compté 230 mots.", "He contado 230 palabras.", "contar"]
      ]],
      regla: ["il me reste es impersonal: siempre en singular."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Errores típicos.",
      errores: [
        ["Dedicar 2 h a la síntesis", "1 h 15 síntesis + 1 h ensayo", "Repartir."],
        ["Il me restent cinq minutes.", "Il me reste cinq minutes.", "Impersonal."],
        ["No releer", "15 min de relectura", "Puntos fáciles."]
      ] }
  ],
  ejemplos: [
    { sit: "Dedico una hora y cuarto a la síntesis.", resp: "Je consacre une heure et quart à la synthèse.", pasos: ["consacrer… à."], porque: "Repartir." },
    { sit: "Me quedan diez minutos.", resp: "Il me reste dix minutes.", pasos: ["Impersonal, singular."], porque: "Lo que queda." },
    { sit: "¿Cuánto dura la producción escrita?", resp: "2 h 30", pasos: ["Síntesis + ensayo."], porque: "Formato." }
  ],
  comprueba: [
    { q: "La producción escrita dura…", o: ["2 h 30", "1 h"], a: 0, b: "format", porque: "2 h 30." },
    { q: "Tolerancia en el número de palabras:", o: ["± 10 %", "± 50 %"], a: 0, b: "format", porque: "± 10 %." },
    { q: "Si una pregunta te bloquea…", o: ["pasas y vuelves después", "abandonas"], a: 0, b: "strat", porque: "Volver después." }
  ],
  practica: [
    { fase: "guiada", c: ["gt-format"], k: "choice", es: true, ask: "¿Cuánto dura la producción escrita?", q: "Elige:", o: ["2 h 30", "1 h", "4 h"], a: 0, pista: "Síntesis + ensayo.", why: "<b>2 h 30</b>." },
    { fase: "guiada", c: ["gt-strat"], k: "choice", es: true, ask: "Una pregunta te bloquea. ¿Qué haces?", q: "Elige:", o: ["pasar y volver después", "abandonar el examen", "inventar sin leer"], a: 0, pista: "No pierdas tiempo.", why: "<b>Volver después</b>." },
    { fase: "indep", c: ["gt-strat"], k: "fill", ask: "Escribe «dedico».", q: "Je ___ une heure et quart à la synthèse.", acc: ["consacre"], why: "<b>consacrer</b>." },
    { fase: "indep", c: ["gt-strat"], k: "fill", ask: "Escribe «quedan».", q: "Il me ___ dix minutes pour me relire.", acc: ["reste"], why: "<b>il me reste</b>." },
    { fase: "indep", c: ["gt-strat"], k: "spot", ask: "Toca el error.", s: "Il me [restent] cinq minutes pour relire ma copie .", fix: "reste", why: "Impersonal: <b>reste</b>." },
    { fase: "indep", c: ["gt-format"], k: "choice", es: true, ask: "¿Qué tolerancia hay en el número de palabras?", q: "Elige:", o: ["± 10 %", "± 50 %", "ninguna"], a: 0, why: "<b>± 10 %</b>." },
    { fase: "aplica", c: ["gt-format"], k: "match", ask: "Une la prueba y su duración.", ctx: "Preparas el día del examen.", q: "Prueba → duración", pairs: [["compréhension orale", "≈ 40 min"], ["compréhension écrite", "≈ 50 min"], ["production écrite", "2 h 30"], ["préparation orale", "1 h"]], why: "Formato." },
    { fase: "aplica", c: ["gt-strat"], k: "sort", ask: "¿Buena gestión?", ctx: "Revisas tu estrategia.", q: "Clasifica.", cats: ["Buena", "Mala"], items: [["vérifier l'heure", 0], ["compter les mots", 0], ["garder du temps pour relire", 0], ["passer deux heures sur la synthèse", 1], ["ne pas relire", 1]], why: "Estrategia." },
    { fase: "dominio", c: ["gt-strat"], k: "order", ask: "Ordena: «Me quedan diez minutos».", tokens: ["Il", "me reste", "dix", "minutes."], why: "il me reste." },
    { fase: "dominio", c: ["gt-strat"], k: "choice", ask: "Necesito diez minutos para releer.", q: "Elige:", o: ["Il me faut dix minutes pour relire ma copie.", "Il me faux dix minutes pour relire ma copie."], a: 0, why: "<b>il me faut</b>." },
    { fase: "dominio", c: ["gt-format", "gt-strat"], k: "listen", ask: "Escucha y escribe.", say: "Je ne perds pas de temps sur une question difficile.", acc: ["Je ne perds pas de temps sur une question difficile."], num: false, dict: true, why: "No bloquearse." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche"], previo: ["40", "50", "30", "230", "10", "15", "2", "1", "h", "min"] }
};

/* Lección 63 · Los errores que cuestan el C1 (retoma la concesión, los conectores y el registro) */
window.__ENSENA["prog-erreurs-c1"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Les erreurs qui coûtent le C1",
  roles: {},
  objetivo: {
    que: "Vas a revisar los errores que el corrector ya no perdona en un C1: conectores mal usados, subjuntivo olvidado, participio sin concordar y registro mezclado.",
    corto: "Los errores evitables que cuestan puntos.",
    podras: ["Usar cependant y en revanche en lugar de par contre.", "Poner subjuntivo después de bien que e il faut que.", "Concordar el participio con el COD antepuesto."],
    iconos: ["m2d/facepalm", "ic2/lapiz", "ic2/candado"],
    previos: ["La concesión (lección 18), los conectores cultos (lección 44) y el registro académico (lección 25)."],
    capacidad: "Ahora relees tus textos buscando los errores que más puntos cuestan."
  },
  requiere: ["co-mode", "cs-fonction", "ac-eviter"],
  recupera: ["co-mode", "ac-eviter"],
  conceptos: {
    "er-gram": { n: "Subjuntivo y participio", b: "gram" },
    "er-conn": { n: "Conectores y registro", b: "conn" }
  },
  video: {
    titulo: "Errores que cuestan el C1", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/facepalm", grande: "bien que + subj.", seg: [
        { es: "Hola. En un C1 el corrector ya no perdona ciertos errores. Hoy, los cuatro más caros." } ] },
      { v: "dos",
        a: { tag: "así no", fr: "Bien que la mesure est coûteuse…", es: "indicativo" },
        b: { tag: "así sí", fr: "Bien que la mesure soit coûteuse, elle est nécessaire.", es: "subjuntivo" },
        seg: [
          { es: "Así no.", p: 1 },
          { es: "Así sí: después de esta conjunción, siempre subjuntivo.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "Les solutions que nous avons ___ sont réalistes.", o: ["proposées", "proposé"], a: 0,
        bien: "¡Sí! El COD va antes: concuerda.", mal: "El complemento va antes del verbo: proposées.",
        seg: [ { es: "Pausa. ¿Concuerda el participio?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["bien que + soit", "les décisions qu'il a prises", "cependant", "en revanche"], seg: [
        { es: "Subjuntivo, concordancia, conectores formales y un solo registro.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La última relectura", img: "bg-biblioteca", yo: "laura",
    escena: "La tutora marca en rojo cuatro errores en el ensayo de Laura.",
    pj: __PJ,
    lineas: [
      ["tutrice", "« Bien qu'il a raison » : quel mode après « bien que » ?", "«Bien qu'il a raison»: ¿qué modo va después de «bien que»?"],
      ["laura", "Le subjonctif : bien qu'il ait raison, il manque de nuance.", "El subjuntivo: aunque tiene razón, le falta matiz."],
      ["tutrice", "Et « par contre » ?", "¿Y «par contre»?"],
      ["laura", "En revanche, la conclusion est trop courte.", "En cambio, la conclusión es demasiado corta."]
    ],
    fijate: "Fíjate: son errores de B1 que en un C1 pesan mucho."
  },
  ensena: [
    { id: "gram", tipo: "gram", titulo: "Subjuntivo y participio",
      idea: "bien que, il faut que y avant que llevan subjuntivo; con avoir, el participio concuerda con el COD que va antes.",
      intro: "Los dos errores gramaticales más caros:",
      tabla: [["Francés", "Español", "Regla"], [
        ["Bien que la mesure soit coûteuse, elle est nécessaire.", "Aunque la medida es costosa…", "bien que + subjuntivo"],
        ["Il faut que nous trouvions une solution.", "Hace falta que encontremos…", "il faut que + subjuntivo"],
        ["Les décisions qu'il a prises ont surpris.", "Las decisiones que tomó sorprendieron.", "COD antes: concordancia"],
        ["Les erreurs que j'ai commises sont corrigées.", "Los errores que cometí…", "COD antes: concordancia"],
        ["les lettres qu'il a écrites", "las cartas que escribió", "femenino plural"]
      ]],
      regla: ["Si el COD va después (il a pris des décisions), no hay concordancia."] },
    { id: "conn", tipo: "gram", titulo: "Conectores y registro",
      idea: "cependant y en revanche en lugar de par contre; en effet justifica, no opone; nada de du coup ni ça.",
      intro: "Corrige el registro:",
      tabla: [["Evitar", "Usar", "Por qué"], [
        ["par contre (escrito)", "en revanche", "par contre es oral"],
        ["du coup (escrito)", "par conséquent", "registro"],
        ["en effet para oponer", "cependant", "en effet justifica"],
        ["ça, c'est super important", "il convient de souligner", "registro"],
        ["assister (= ayudar)", "aider", "falso amigo"]
      ]],
      regla: ["Cependant, cette solution présente des limites.", "Una idea por frase, como mucho tres líneas."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Errores típicos.",
      errores: [
        ["Bien que la mesure est coûteuse…", "Bien que la mesure soit coûteuse…", "Subjuntivo."],
        ["Les solutions que nous avons proposé", "Les solutions que nous avons proposées", "Concordancia."],
        ["Par contre, du coup, …", "En revanche, par conséquent, …", "Registro escrito."]
      ] }
  ],
  ejemplos: [
    { sit: "Aunque tiene razón, le falta matiz.", resp: "Bien qu'il ait raison, il manque de nuance.", pasos: ["bien que + subjuntivo: ait."], porque: "Concesión." },
    { sit: "Las decisiones que tomó…", resp: "Les décisions qu'il a prises", pasos: ["COD (que = les décisions) antes.", "Femenino plural: prises."], porque: "Concordancia." },
    { sit: "En cambio, la conclusión es corta (escrito).", resp: "En revanche, la conclusion est trop courte.", pasos: ["en revanche, no par contre."], porque: "Registro." }
  ],
  comprueba: [
    { q: "bien que + …", o: ["subjuntivo", "indicativo"], a: 0, b: "gram", porque: "Subjuntivo." },
    { q: "Oposición formal:", o: ["cependant", "du coup"], a: 0, b: "conn", porque: "cependant." },
    { q: "Las cartas que escribió →", o: ["les lettres qu'il a écrites", "les lettres qu'il a écrit"], a: 0, b: "gram", porque: "Concordancia." }
  ],
  practica: [
    { fase: "guiada", c: ["er-conn"], k: "choice", es: true, ask: "¿Qué conector opone en registro escrito?", q: "Elige:", o: ["cependant", "en effet", "du coup"], a: 0, pista: "en effet justifica.", why: "<b>cependant</b>." },
    { fase: "guiada", c: ["er-gram"], k: "choice", ask: "Las cartas que escribió…", q: "Elige:", o: ["les lettres qu'il a écrites", "les lettres qu'il a écrit", "les lettres qu'il a écrits"], a: 0, pista: "Femenino plural antes.", why: "<b>écrites</b>." },
    { fase: "indep", c: ["er-gram"], k: "fill", ask: "Escribe trouver en subjuntivo (nous).", q: "Il faut que nous ___ une solution.", acc: ["trouvions"], why: "<b>trouvions</b>." },
    { fase: "indep", c: ["er-conn"], k: "fill", ask: "Escribe un conector de oposición formal.", q: "Le projet est ambitieux ; ___ , il manque de moyens.", acc: ["cependant", "toutefois", "néanmoins"], why: "<b>cependant</b>." },
    { fase: "indep", c: ["er-gram"], k: "spot", ask: "Toca el error.", s: "Les solutions que nous avons [proposé] sont réalistes .", fix: "proposées", why: "<b>proposées</b>." },
    { fase: "indep", c: ["er-gram"], k: "choice", ask: "Aunque sea difícil…", q: "Elige:", o: ["Bien que ce soit difficile…", "Bien que c'est difficile…", "Bien que ce sera difficile…"], a: 0, why: "<b>+ subjuntivo</b>." },
    { fase: "aplica", c: ["er-conn"], k: "match", ask: "Une el error y su corrección.", ctx: "Relees tu ensayo.", q: "Error → corrección", pairs: [["du coup (escrito)", "par conséquent"], ["par contre (escrito)", "en revanche"], ["assister (= ayudar)", "aider"]], why: "Errores C1." },
    { fase: "aplica", c: ["er-gram", "er-conn"], k: "sort", ask: "¿Correcto en un texto C1?", ctx: "Última relectura.", q: "Clasifica.", cats: ["Correcto", "Error"], items: [["Bien qu'il ait raison,", 0], ["En revanche,", 0], ["Les erreurs que j'ai commises", 0], ["Bien qu'il a raison,", 1], ["Par contre, du coup,", 1], ["Les erreurs que j'ai commis", 1]], why: "Detectar." },
    { fase: "dominio", c: ["er-gram"], k: "order", ask: "Ordena: «Aunque la medida sea costosa…».", tokens: ["Bien que", "la mesure", "soit", "coûteuse,"], why: "bien que + subjuntivo." },
    { fase: "dominio", c: ["er-conn"], k: "choice", ask: "Elige la frase correcta (escrito).", q: "Elige:", o: ["Cependant, cette solution présente des limites.", "Du coup, cette solution, ça a des limites."], a: 0, why: "Registro." },
    { fase: "dominio", c: ["er-gram", "er-conn"], k: "listen", ask: "Escucha y escribe.", say: "Bien que la mesure soit coûteuse, elle est nécessaire.", acc: ["Bien que la mesure soit coûteuse, elle est nécessaire."], num: false, dict: true, why: "Subjuntivo." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche"] }
};

/* Lección 64 · El léxico abstracto (retoma la reformulación léxica) */
window.__ENSENA["prog-lexique-abstrait"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Le lexique abstrait",
  roles: {},
  objetivo: {
    que: "Vas a usar los sustantivos abstractos del discurso C1: enjeu, défi, levier, frein, atout, dérive, piste y constat.",
    corto: "Ocho palabras que elevan tu síntesis.",
    podras: ["Entender enjeu, atout, dérive.", "Distinguir lo positivo (levier, atout) de lo negativo (frein, dérive).", "Usar relever un défi y explorer une piste."],
    iconos: ["ic2/libros", "ic2/bombilla", "m2d/escribiendo"],
    previos: ["La reformulación léxica (lección 14)."],
    capacidad: "Ahora nombras con precisión los problemas, las ventajas y las soluciones de un tema."
  },
  requiere: ["rf-lex"],
  recupera: ["rf-lex"],
  conceptos: {
    "la-mots": { n: "Ocho sustantivos abstractos", b: "mots" },
    "la-colloc": { n: "Con qué verbo van", b: "colloc" }
  },
  video: {
    titulo: "El léxico abstracto", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/bombilla", grande: "L'enjeu est de taille.", seg: [
        { es: "Hola. En un texto C1 no se habla de «cosas buenas» y «cosas malas». Se usan palabras precisas." } ] },
      { v: "dos",
        a: { tag: "a favor", fr: "un levier · un atout", es: "palanca · baza" },
        b: { tag: "en contra", fr: "un frein · une dérive", es: "freno · desviación" },
        seg: [
          { es: "Lo que ayuda: una palanca, una baza.", p: 1 },
          { es: "Lo que estorba: un freno, una desviación.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "Maîtriser plusieurs langues est un ___ sur le marché du travail.", o: ["atout", "frein"], a: 0,
        bien: "¡Sí! Es una ventaja.", mal: "Hablar idiomas no estorba: es una ventaja, un atout.",
        seg: [ { es: "Pausa. ¿Ventaja u obstáculo?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["un enjeu", "relever un défi", "un levier", "un frein", "une dérive", "une piste"], seg: [
        { es: "Lo que está en juego, el reto, la palanca, el freno, la desviación y la vía.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "«Un problème», cinco veces", img: "bg-biblioteca", yo: "laura",
    escena: "La síntesis de Laura repite «un problème» y «une bonne chose».",
    pj: __PJ,
    lineas: [
      ["tutrice", "« Une bonne chose », « un problème »… Soyez plus précise.", "«Una cosa buena», «un problema»… Sea más precisa."],
      ["laura", "La formation constitue un atout majeur.", "La formación constituye una baza importante."],
      ["tutrice", "Et le manque de formation ?", "¿Y la falta de formación?"],
      ["laura", "Le manque de formation est un frein à l'emploi.", "La falta de formación es un freno para el empleo."]
    ],
    fijate: "Fíjate: atout y frein dicen a la vez qué es y si ayuda o estorba."
  },
  ensena: [
    { id: "mots", tipo: "gram", titulo: "Ocho sustantivos abstractos",
      idea: "enjeu = lo que está en juego; atout = ventaja; frein = obstáculo; dérive = desviación negativa.",
      intro: "Toca y memoriza:",
      tabla: [["Francés", "Español", "Ejemplo"], [
        ["un enjeu", "lo que está en juego", "L'enjeu est de taille."],
        ["un défi", "un reto", "Il faut relever ce défi collectif."],
        ["un levier", "una palanca", "L'éducation constitue un levier essentiel contre les inégalités."],
        ["un frein", "un freno, un obstáculo", "La bureaucratie est un frein à l'innovation."],
        ["un atout", "una baza, una ventaja", "Le bilinguisme est un atout."],
        ["une dérive", "una desviación negativa", "Il faut éviter les dérives de ce système."],
        ["une piste", "una vía, una idea", "Plusieurs pistes de réflexion se dessinent."],
        ["un constat", "una constatación", "dresser un constat"]
      ]],
      regla: ["Positivos: levier, atout. Negativos: frein, dérive."] },
    { id: "colloc", tipo: "gram", titulo: "Con qué verbo van",
      idea: "Se relève un défi, se explore une piste, se dresse un constat; un frein es un frein à…",
      intro: "Combinaciones fijas:",
      tabla: [["Francés", "Español", "Combinación"], [
        ["relever un défi", "afrontar un reto", "relever + défi"],
        ["Plusieurs pistes sont à explorer.", "Hay varias vías que explorar.", "explorer + piste"],
        ["dresser un constat", "hacer una constatación", "dresser + constat"],
        ["Le manque de formation est un frein à l'emploi.", "La falta de formación es un freno para el empleo.", "frein à"],
        ["un levier de croissance", "una palanca de crecimiento", "levier de"]
      ]],
      regla: ["un enjeu no es un juego: es lo que está en juego."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Errores típicos.",
      errores: [
        ["un enjeu = un juego", "un enjeu = lo que está en juego", "Término clave."],
        ["Parler plusieurs langues est un frein.", "… est un atout.", "Connotación."],
        ["faire un défi", "relever un défi", "Combinación fija."]
      ] }
  ],
  ejemplos: [
    { sit: "Lo que está en juego es enorme.", resp: "L'enjeu est de taille.", pasos: ["enjeu.", "être de taille = ser enorme."], porque: "Expresión fija." },
    { sit: "La educación es una palanca contra las desigualdades.", resp: "L'éducation constitue un levier essentiel contre les inégalités.", pasos: ["levier = positivo."], porque: "Lo que ayuda." },
    { sit: "Hay que afrontar este reto.", resp: "Il faut relever ce défi collectif.", pasos: ["relever un défi."], porque: "Combinación fija." }
  ],
  comprueba: [
    { q: "«un enjeu» es…", o: ["lo que está en juego", "un juego"], a: 0, b: "mots", porque: "enjeu." },
    { q: "«un atout» es…", o: ["una ventaja", "un obstáculo"], a: 0, b: "mots", porque: "atout." },
    { q: "Afrontar un reto →", o: ["relever un défi", "faire un défi"], a: 0, b: "colloc", porque: "relever." }
  ],
  practica: [
    { fase: "guiada", c: ["la-mots"], k: "choice", es: true, ask: "«L'enjeu est considérable.» Un enjeu es…", q: "Elige:", o: ["lo que está en juego", "un juego", "un premio"], a: 0, pista: "No es un juego.", why: "<b>enjeu</b>." },
    { fase: "guiada", c: ["la-mots"], k: "choice", es: true, ask: "«les dérives de la télé-réalité»: dérives son…", q: "Elige:", o: ["desviaciones negativas", "ventajas", "derivadas"], a: 0, pista: "Algo que se tuerce.", why: "<b>dérive</b>." },
    { fase: "indep", c: ["la-colloc"], k: "fill", ask: "Escribe «reto».", q: "Il faut relever ce ___ collectif.", acc: ["défi"], why: "<b>défi</b>." },
    { fase: "indep", c: ["la-mots"], k: "fill", ask: "Escribe «freno».", q: "La bureaucratie est un ___ à l'innovation.", acc: ["frein"], why: "<b>frein</b>." },
    { fase: "indep", c: ["la-mots"], k: "spot", ask: "Toca la palabra incoherente.", s: "Maîtriser plusieurs langues est un véritable [frein] sur le marché du travail .", fix: "atout", why: "Ventaja: <b>atout</b>." },
    { fase: "indep", c: ["la-colloc"], k: "choice", ask: "Hay varias vías que explorar.", q: "Elige:", o: ["Plusieurs pistes sont à explorer.", "Plusieurs pistes sont à relever.", "Plusieurs défis sont à explorer de."], a: 0, why: "<b>explorer une piste</b>." },
    { fase: "aplica", c: ["la-mots"], k: "match", ask: "Une la palabra y su sentido.", ctx: "Enriqueces tu síntesis.", q: "Francés → español", pairs: [["un levier", "una palanca"], ["une piste", "una vía"], ["un constat", "una constatación"], ["un atout", "una ventaja"]], why: "Léxico abstracto." },
    { fase: "aplica", c: ["la-mots"], k: "sort", ask: "¿Positivo o negativo?", ctx: "Ordenas tus argumentos.", q: "Clasifica.", cats: ["Positivo", "Negativo"], items: [["un atout", 0], ["un levier", 0], ["un frein", 1], ["une dérive", 1]], why: "Connotación." },
    { fase: "dominio", c: ["la-colloc"], k: "order", ask: "Ordena: «Lo que está en juego es enorme».", tokens: ["L'enjeu", "est", "de", "taille."], why: "Expresión fija." },
    { fase: "dominio", c: ["la-mots"], k: "fill", ask: "Escribe «baza».", q: "Le bilinguisme est un ___ professionnel.", acc: ["atout"], why: "<b>atout</b>." },
    { fase: "dominio", c: ["la-mots", "la-colloc"], k: "listen", ask: "Escucha y escribe.", say: "L'éducation constitue un levier essentiel contre les inégalités.", acc: ["L'éducation constitue un levier essentiel contre les inégalités."], num: false, dict: true, why: "levier." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche"] }
};

/* Lección 65 · Verbos de relación lógica (retoma causa y consecuencia) */
window.__ENSENA["prog-verbes-logiques"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Verbes de relation logique",
  roles: {},
  objetivo: {
    que: "Vas a expresar la causa, la base y la relación entre ideas con verbos: entraîner, découler de, reposer sur, relever de, tenir à.",
    corto: "Un verbo en lugar de un conector.",
    podras: ["Ir de la causa al efecto con entraîner.", "Ir del efecto a la causa con découler de y tenir à.", "Usar reposer sur, relever de y aller de pair avec."],
    iconos: ["ic2/engranaje", "m2d/escribiendo", "ic2/libros"],
    previos: ["Causa y consecuencia (lección 17)."],
    capacidad: "Ahora relacionas tus ideas con verbos precisos y variados."
  },
  requiere: ["ca-verbe", "ca-csq"],
  recupera: ["ca-verbe"],
  conceptos: {
    "vl-sens": { n: "La dirección de la relación", b: "sens" },
    "vl-prep": { n: "La preposición de cada verbo", b: "prep" }
  },
  video: {
    titulo: "Verbos lógicos", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/engranaje", grande: "découler de", seg: [
        { es: "Hola. Hoy, verbos que unen ideas: cuál produce cuál y en qué se basa." } ] },
      { v: "dos",
        a: { tag: "causa → efecto", fr: "La pollution entraîne de graves maladies.", es: "provoca" },
        b: { tag: "efecto ← causa", fr: "Cette crise découle de choix politiques anciens.", es: "se deriva de" },
        seg: [
          { es: "Desde la causa: provoca.", p: 1 },
          { es: "Desde el efecto: se deriva de.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "Le succès du projet repose ___ la confiance.", o: ["sur", "de"], a: 0,
        bien: "¡Sí! Se basa en: reposer sur.", mal: "Es «reposer sur».",
        seg: [ { es: "Pausa. ¿Qué preposición va?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["entraîner", "découler de", "reposer sur", "relever de", "tenir à", "aller de pair avec"], seg: [
        { es: "Cada verbo con su preposición: apréndelos juntos.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Siempre «à cause de»", img: "bg-biblioteca", yo: "laura",
    escena: "Laura escribe «à cause de» en cada frase de su análisis.",
    pj: __PJ,
    lineas: [
      ["tutrice", "« À cause de », encore. Utilisez un verbe.", "«À cause de», otra vez. Use un verbo."],
      ["laura", "Cette inégalité tient à des causes historiques.", "Esta desigualdad se debe a causas históricas."],
      ["tutrice", "Très bien. Et la conséquence ?", "Muy bien. ¿Y la consecuencia?"],
      ["laura", "Elle entraîne un retard scolaire.", "Provoca un retraso escolar."]
    ],
    fijate: "Fíjate: el verbo une las ideas sin conector."
  },
  ensena: [
    { id: "sens", tipo: "gram", titulo: "La dirección de la relación",
      idea: "entraîner va de la causa al efecto; découler de y tenir à van del efecto a la causa.",
      intro: "Mira hacia dónde apunta el verbo:",
      tabla: [["Francés", "Español", "Dirección"], [
        ["La pollution entraîne de graves maladies.", "La contaminación provoca…", "causa → efecto"],
        ["engendrer, susciter, favoriser", "generar, suscitar, favorecer", "causa → efecto"],
        ["Cette crise découle de choix politiques anciens.", "Esta crisis se deriva de…", "efecto ← causa"],
        ["Cette inégalité tient à des causes historiques.", "Esta desigualdad se debe a…", "efecto ← causa"],
        ["résulter de, provenir de", "resultar de, provenir de", "efecto ← causa"]
      ]],
      regla: ["Sujeto de entraîner: la causa. Sujeto de découler de: el efecto."] },
    { id: "prep", tipo: "gram", titulo: "La preposición de cada verbo",
      idea: "reposer sur, relever de, s'inscrire dans, tenir à, aller de pair avec: el verbo y su preposición van juntos.",
      intro: "Base, pertenencia y correlación:",
      tabla: [["Francés", "Español", "Relación"], [
        ["Le succès du projet repose sur la confiance.", "El éxito se basa en la confianza.", "base"],
        ["Cette question relève de la compétence de l'État.", "Esta cuestión es competencia del Estado.", "pertenencia"],
        ["Cette mesure s'inscrit dans une politique globale.", "Esta medida se inscribe en…", "pertenencia"],
        ["Le progrès social va de pair avec l'éducation.", "El progreso social va de la mano de la educación.", "correlación"],
        ["reposer sur · relever de · tenir à", "basarse en · ser competencia de · deberse a", "infinitivos"],
        ["entraîner · découler de · s'inscrire dans · aller de pair avec", "provocar · derivarse de · inscribirse en · ir de la mano", "infinitivos"]
      ]],
      regla: ["découler de (nunca «découler à»)."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Errores típicos.",
      errores: [
        ["Ce problème découle à…", "Ce problème découle de…", "découler de."],
        ["Le succès repose de la qualité", "Le succès repose sur la qualité", "reposer sur."],
        ["La maladie entraîne la pollution.", "La pollution entraîne la maladie.", "Dirección."]
      ] }
  ],
  ejemplos: [
    { sit: "Esta crisis se deriva de malas decisiones.", resp: "Cette crise découle de mauvais choix.", pasos: ["Sujeto: el efecto.", "découler de."], porque: "Efecto ← causa." },
    { sit: "La contaminación provoca enfermedades.", resp: "La pollution entraîne de graves maladies.", pasos: ["Sujeto: la causa."], porque: "Causa → efecto." },
    { sit: "Va de la mano de la educación.", resp: "Le progrès social va de pair avec l'éducation.", pasos: ["aller de pair avec."], porque: "Correlación." }
  ],
  comprueba: [
    { q: "Se deriva de →", o: ["découler de", "découler à"], a: 0, b: "prep", porque: "de." },
    { q: "«entraîner» va…", o: ["de la causa al efecto", "del efecto a la causa"], a: 0, b: "sens", porque: "Causa → efecto." },
    { q: "«aller de pair avec» significa…", o: ["ir de la mano con", "oponerse a"], a: 0, b: "prep", porque: "Correlación." }
  ],
  practica: [
    { fase: "guiada", c: ["vl-prep"], k: "choice", ask: "Se deriva de…", q: "Elige:", o: ["découler de", "découler à", "découler sur"], a: 0, pista: "Preposición de origen.", why: "<b>découler de</b>." },
    { fase: "guiada", c: ["vl-prep"], k: "choice", ask: "Se basa en…", q: "Elige:", o: ["reposer sur", "reposer de", "reposer à"], a: 0, pista: "Sobre una base.", why: "<b>reposer sur</b>." },
    { fase: "indep", c: ["vl-prep"], k: "fill", ask: "Escribe la preposición.", q: "Cette mesure s'inscrit ___ une politique globale.", acc: ["dans"], why: "<b>s'inscrire dans</b>." },
    { fase: "indep", c: ["vl-sens"], k: "fill", ask: "Escribe «se debe» (tenir).", q: "Cette inégalité ___ à des causes historiques.", acc: ["tient"], why: "<b>tenir à</b>." },
    { fase: "indep", c: ["vl-prep"], k: "spot", ask: "Toca el error.", s: "Le succès de l'entreprise repose [de] la qualité de ses produits .", fix: "sur", why: "<b>reposer sur</b>." },
    { fase: "indep", c: ["vl-sens"], k: "choice", ask: "La contaminación provoca enfermedades.", q: "Elige:", o: ["La pollution entraîne de graves maladies.", "Les maladies entraînent la pollution.", "La pollution découle de graves maladies."], a: 0, why: "Causa → efecto." },
    { fase: "aplica", c: ["vl-prep"], k: "match", ask: "Une el verbo y su sentido.", ctx: "Varías tu análisis.", q: "Francés → español", pairs: [["engendrer", "generar"], ["relever de", "ser competencia de"], ["résulter de", "resultar de"], ["aller de pair avec", "ir de la mano con"]], why: "Verbos lógicos." },
    { fase: "aplica", c: ["vl-sens"], k: "sort", ask: "¿Hacia dónde va la relación?", ctx: "Clasificas tus verbos.", q: "Clasifica.", cats: ["Causa → efecto", "Efecto ← causa"], items: [["entraîner", 0], ["engendrer", 0], ["favoriser", 0], ["découler de", 1], ["résulter de", 1], ["tenir à", 1]], why: "Orientación del verbo." },
    { fase: "dominio", c: ["vl-sens"], k: "order", ask: "Ordena: «Esta crisis se deriva de malas decisiones».", tokens: ["Cette crise", "découle", "de", "mauvais choix."], why: "découler de." },
    { fase: "dominio", c: ["vl-prep"], k: "fill", ask: "Escribe la preposición.", q: "Le projet repose ___ la confiance.", acc: ["sur"], why: "<b>reposer sur</b>." },
    { fase: "dominio", c: ["vl-sens", "vl-prep"], k: "listen", ask: "Escucha y escribe.", say: "Cette question relève de la compétence de l'État.", acc: ["Cette question relève de la compétence de l'État."], num: false, dict: true, why: "relever de." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche"] }
};

/* Lección 66 · Las referencias culturales en el ensayo (retoma los tipos de argumentos) */
window.__ENSENA["prog-references-culturelles"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Mobiliser des références culturelles",
  roles: {},
  objetivo: {
    que: "Vas a apoyar tu ensayo con una referencia cultural bien elegida: un autor, una ley, una obra o un hecho, presentada en una frase y relacionada con tu argumento.",
    corto: "Una referencia bien usada vale más que diez nombres.",
    podras: ["Integrar una cita con «Comme l'écrivait…».", "Situar un hecho: la loi de 1905, la loi Veil.", "Relacionarlo con «Cet exemple illustre bien…»."],
    iconos: ["ic2/torre-eiffel", "ic2/libro", "m2d/senalar"],
    previos: ["Los tipos de argumentos (lección 50)."],
    capacidad: "Ahora das peso cultural a tus argumentos sin convertirlos en una lista de nombres."
  },
  requiere: ["ty-types", "ty-formules"],
  recupera: ["ty-formules"],
  conceptos: {
    "rc-integrer": { n: "Integrar la referencia", b: "integrer" },
    "rc-choisir": { n: "Elegir bien la referencia", b: "choisir" }
  },
  video: {
    titulo: "Referencias culturales", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/torre-eiffel", grande: "Cet exemple illustre bien…", seg: [
        { es: "Hola. Un ejemplo cultural da peso a tu ensayo, si lo presentas y lo explicas." } ] },
      { v: "frase", filas: [
          { nota: "1 · presentar", p: 1, partes: [["La loi de 1905", "-", 1]] },
          { nota: "2 · relacionar", p: 2, partes: [["illustre bien l'attachement français à la laïcité.", "-", 2]] } ], seg: [
        { es: "Primero, qué es y de cuándo.", p: 1 },
        { es: "Después, qué demuestra en tu argumento.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", es: true, q: "¿Cuál es un buen uso?", o: ["Un ejemplo preciso y explicado", "Una lista de diez nombres"], a: 0,
        bien: "¡Sí! Calidad antes que cantidad.", mal: "Una lista no demuestra nada: elige un ejemplo y explícalo.",
        seg: [ { es: "Pausa. ¿Cuál convence más al corrector?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Comme l'écrivait…", "À l'image de…", "Cet exemple illustre bien…", "Cet exemple montre que…"], seg: [
        { es: "Presenta, relaciona y nunca inventes una cita.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Diez nombres", img: "bg-biblioteca", yo: "laura",
    escena: "Laura cita a Hugo, Zola, Camus y Beauvoir en un solo párrafo, sin explicar.",
    pj: __PJ,
    lineas: [
      ["tutrice", "Quatre auteurs en trois lignes. Que démontrent-ils ?", "Cuatro autores en tres líneas. ¿Qué demuestran?"],
      ["laura", "Je garde Hugo : ouvrir une école, c'est fermer une prison.", "Me quedo con Hugo: abrir una escuela es cerrar una cárcel."],
      ["tutrice", "Et le lien avec votre argument ?", "¿Y la relación con su argumento?"],
      ["laura", "Cet exemple montre que le débat n'est pas nouveau.", "Este ejemplo muestra que el debate no es nuevo."]
    ],
    fijate: "Fíjate: una referencia, presentada y explicada."
  },
  ensena: [
    { id: "integrer", tipo: "gram", titulo: "Integrar la referencia",
      idea: "Preséntala en una frase (quién, cuándo, qué) y relaciónala con tu argumento.",
      intro: "Fórmulas para integrar:",
      tabla: [["Francés", "Español", "Uso"], [
        ["Comme l'écrivait Simone de Beauvoir, « on ne naît pas femme, on le devient ».", "Como escribía Simone de Beauvoir…", "cita"],
        ["Comme l'écrivait Victor Hugo, ouvrir une école, c'est fermer une prison.", "Como escribía Victor Hugo…", "idea de un autor"],
        ["À l'image de la Finlande, plusieurs pays ont réformé leur école.", "A imagen de Finlandia…", "ejemplo de país"],
        ["La loi de 1905 illustre bien l'attachement français à la laïcité.", "La ley de 1905 ilustra bien…", "hecho histórico"],
        ["La loi Veil de 1975 illustre ce combat.", "La ley Veil de 1975 ilustra esta lucha.", "hecho histórico"],
        ["Cet exemple montre que le débat n'est pas nouveau.", "Este ejemplo muestra que…", "relacionar"]
      ]],
      regla: ["Comme l'écrivait (imperfecto) para un autor del pasado."] },
    { id: "choisir", tipo: "gram", titulo: "Elegir bien la referencia",
      idea: "Precisa, fechada y pertinente; nunca inventada ni en lista.",
      intro: "Buen y mal uso:",
      tabla: [["Bueno", "Malo", "Por qué"], [
        ["un exemple précis et daté", "une date approximative", "rigor"],
        ["une citation exacte", "une citation inventée", "honestidad"],
        ["un lien clair avec l'argument", "une liste de noms", "pertinencia"],
        ["une référence de ton pays expliquée", "un exemple hors sujet", "pertinencia"]
      ]],
      regla: ["También valen las referencias de tu país, si las explicas."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Errores típicos.",
      errores: [
        ["Tocqueville. Hugo. Zola. Voilà.", "Un ejemplo bien elegido y analizado", "Calidad antes que cantidad."],
        ["À l'imagen de la Finlande", "À l'image de la Finlande", "image."],
        ["Inventar una cita", "Citar solo lo que conoces con exactitud", "Honestidad."]
      ] }
  ],
  ejemplos: [
    { sit: "Cita a Beauvoir.", resp: "Comme l'écrivait Simone de Beauvoir, « on ne naît pas femme, on le devient ».", pasos: ["Comme l'écrivait + autor.", "Cita exacta."], porque: "Integrar." },
    { sit: "Usa la ley de 1905 como ejemplo.", resp: "La loi de 1905 illustre bien l'attachement français à la laïcité.", pasos: ["Hecho fechado.", "illustrer + idea."], porque: "Relacionar." },
    { sit: "A imagen de Finlandia…", resp: "À l'image de la Finlande, plusieurs pays ont réformé leur école.", pasos: ["À l'image de + país."], porque: "Ejemplo comparado." }
  ],
  comprueba: [
    { q: "Después de la referencia…", o: ["la relaciono con mi argumento", "paso a otra sin comentar"], a: 0, b: "integrer", porque: "Analizarla." },
    { q: "A imagen de →", o: ["À l'image de", "À l'imagen de"], a: 0, b: "integrer", porque: "image." },
    { q: "Un buen uso es…", o: ["un ejemplo preciso y fechado", "una lista de nombres"], a: 0, b: "choisir", porque: "Pertinencia." }
  ],
  practica: [
    { fase: "guiada", c: ["rc-integrer"], k: "choice", ask: "Integra la referencia.", q: "Elige:", o: ["Comme l'écrivait Victor Hugo, ouvrir une école, c'est fermer une prison.", "Hugo. Zola. Camus. Voilà.", "Un auteur a dit un truc là-dessus."], a: 0, pista: "Presentada y completa.", why: "Integrada." },
    { fase: "guiada", c: ["rc-integrer"], k: "choice", es: true, ask: "¿Qué haces después del ejemplo?", q: "Elige:", o: ["relacionarlo con el argumento", "pasar a otro sin comentar", "repetirlo"], a: 0, pista: "¿Qué demuestra?", why: "<b>Analizarlo</b>." },
    { fase: "indep", c: ["rc-integrer"], k: "fill", ask: "Escribe «ilustra».", q: "La loi Veil de 1975 ___ ce combat.", acc: ["illustre"], why: "<b>illustrer</b>." },
    { fase: "indep", c: ["rc-integrer"], k: "fill", ask: "Escribe «escribía».", q: "Comme l'___ Simone de Beauvoir, « on ne naît pas femme, on le devient ».", acc: ["écrivait"], why: "<b>écrivait</b>." },
    { fase: "indep", c: ["rc-integrer"], k: "spot", ask: "Toca el error.", s: "À l' [imagen] de la Finlande , plusieurs pays ont réformé leur école .", fix: "image", why: "<b>À l'image de</b>." },
    { fase: "indep", c: ["rc-choisir"], k: "choice", es: true, ask: "¿Qué referencia conviene?", q: "Elige:", o: ["una cita exacta que conoces", "una cita inventada que suena bien", "una fecha aproximada"], a: 0, why: "Honestidad y rigor." },
    { fase: "aplica", c: ["rc-integrer"], k: "match", ask: "Une la fórmula y su uso.", ctx: "Enriqueces tu ensayo.", q: "Fórmula → uso", pairs: [["Comme l'écrivait…", "cita"], ["À l'image de…", "ejemplo de país"], ["Cet exemple montre que…", "relacionar"]], why: "Integrar." },
    { fase: "aplica", c: ["rc-choisir"], k: "sort", ask: "¿Buen uso de la referencia?", ctx: "Revisas tus ejemplos.", q: "Clasifica.", cats: ["Bueno", "Malo"], items: [["un exemple précis et daté", 0], ["une citation exacte", 0], ["un lien clair avec l'argument", 0], ["une liste de noms", 1], ["une citation inventée", 1], ["un exemple hors sujet", 1]], why: "Pertinencia." },
    { fase: "dominio", c: ["rc-integrer"], k: "order", ask: "Ordena la frase.", tokens: ["Cet exemple", "montre que", "le débat", "n'est pas nouveau."], why: "Relacionar." },
    { fase: "dominio", c: ["rc-choisir"], k: "choice", ask: "Elige el mejor uso.", q: "Elige:", o: ["La loi de 1905 illustre bien l'attachement français à la laïcité.", "Il y a une loi, je crois, vers 1900."], a: 0, why: "Preciso y relacionado." },
    { fase: "dominio", c: ["rc-integrer", "rc-choisir"], k: "listen", ask: "Escucha y escribe.", say: "À l'image de la Finlande, plusieurs pays ont réformé leur école.", acc: ["À l'image de la Finlande, plusieurs pays ont réformé leur école."], num: false, dict: true, why: "À l'image de." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche", "Hugo", "Victor", "Zola", "Camus", "Beauvoir", "Simone", "Veil", "Finlande", "Tocqueville"], previo: ["1905", "1975", "1900"] }
};

/* Lección 67 · Autoevaluarse con las rejillas del DALF (cierra el curso: retoma todo lo anterior) */
window.__ENSENA["prog-autoevaluation"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "S'autoévaluer avec les grilles du DALF",
  roles: {},
  objetivo: {
    que: "Vas a revisar tus textos con los cinco criterios con que corrige el DALF: consigna, coherencia, argumentación, léxico y gramática.",
    corto: "Corregirte como te corrige el jurado.",
    podras: ["Nombrar los cinco criterios de la rejilla.", "Hacerte una pregunta de control para cada uno.", "Decir qué debes mejorar: «Je dois enrichir mon lexique»."],
    iconos: ["m2d/lista", "ic2/medalla", "ic2/lapiz"],
    previos: ["Todo el curso, en especial el ensayo del DALF (lección 59) y los errores que cuestan el C1 (lección 63)."],
    capacidad: "Ahora sabes leer tus propios textos con los ojos del corrector y entrenar con criterio."
  },
  requiere: ["ed-consigne", "er-gram", "er-conn"],
  recupera: ["ed-consigne", "er-gram"],
  conceptos: {
    "au-criteres": { n: "Los cinco criterios", b: "criteres" },
    "au-bilan": { n: "Hacer tu balance", b: "bilan" }
  },
  video: {
    titulo: "Autoevaluarte", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/lista", grande: "la grille du DALF", seg: [
        { es: "Hola. Última lección. El jurado no cuenta solo errores: usa una rejilla con cinco criterios." } ] },
      { v: "frase", filas: [
          { nota: "¿lo pedido?", p: 1, partes: [["consigne", "-", 1]] },
          { nota: "¿plan y conectores?", p: 2, partes: [["cohérence", "-", 2]] },
          { nota: "¿tesis y ejemplos?", p: 3, partes: [["argumentation", "-", 3]] },
          { nota: "¿precisión y gramática?", p: 4, partes: [["lexique · morphosyntaxe", "-", 4]] } ], seg: [
        { es: "¿Respetas el género, el destinatario y la extensión?", p: 1 },
        { es: "¿Hay plan, conectores variados y transiciones?", p: 2 },
        { es: "¿Una tesis clara, con ejemplos y refutación?", p: 3 },
        { es: "¿Vocabulario preciso y gramática correcta?", p: 4 } ] },
      { v: "pregunta", img: "m2d/pensativo", es: true, q: "Los conectores se evalúan en…", o: ["cohérence", "lexique"], a: 0,
        bien: "¡Sí! Coherencia y cohesión.", mal: "Los conectores unen el texto: es coherencia.",
        seg: [ { es: "Pausa. ¿En qué criterio cuentan los conectores?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["J'ai respecté le nombre de mots.", "Mes connecteurs sont variés.", "Je dois enrichir mon lexique."], seg: [
        { es: "Después de cada texto, la rejilla. Así sabes qué entrenar. ¡Felicidades, terminaste el curso!", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El último simulacro", img: "bg-universidad", yo: "laura",
    escena: "Laura recibe su último simulacro corregido y lo revisa con la rejilla.",
    pj: __PJ,
    lineas: [
      ["tutrice", "Relisez votre copie avec la grille. Qu'en pensez-vous ?", "Relea su examen con la rejilla. ¿Qué opina?"],
      ["laura", "J'ai varié mes connecteurs logiques. Mon plan répond bien à la problématique.", "He variado mis conectores lógicos. Mi plan responde bien a la problemática."],
      ["tutrice", "Et la langue ?", "¿Y la lengua?"],
      ["laura", "Je dois vérifier l'accord des participes.", "Debo comprobar la concordancia de los participios."]
    ],
    fijate: "Fíjate: Laura sabe qué hizo bien y qué le falta."
  },
  ensena: [
    { id: "criteres", tipo: "gram", titulo: "Los cinco criterios",
      idea: "Consigna, coherencia, argumentación, léxico y morfosintaxis: cada uno con su pregunta de control.",
      intro: "La rejilla del jurado:",
      tabla: [["Criterio", "Qué mira", "Pregunta de control"], [
        ["consigne", "género, destinatario, extensión", "¿He escrito el género pedido?"],
        ["cohérence et cohésion", "plan, conectores, transiciones", "¿Hay plan y transiciones?"],
        ["argumentation", "tesis, argumentos, ejemplos, refutación", "¿Está clara mi tesis?"],
        ["lexique", "precisión, variedad, registro", "¿Evito repeticiones?"],
        ["morphosyntaxe", "concordancias, tiempos, subjuntivo", "¿Están bien las concordancias?"]
      ]],
      regla: ["La nota tiene varios criterios: no basta con no tener faltas."] },
    { id: "bilan", tipo: "gram", titulo: "Hacer tu balance",
      idea: "Di lo que lograste en passé composé y lo que te falta con «Je dois…».",
      intro: "Frases de balance:",
      tabla: [["Francés", "Español", "Criterio"], [
        ["J'ai respecté le nombre de mots.", "He respetado el número de palabras.", "consigne"],
        ["Mes connecteurs sont variés.", "Mis conectores son variados.", "cohérence"],
        ["Mon plan répond bien à la problématique.", "Mi plan responde bien a la problemática.", "argumentation"],
        ["Je dois enrichir mon lexique.", "Debo enriquecer mi léxico.", "lexique"],
        ["Je dois vérifier l'accord des participes.", "Debo comprobar la concordancia de los participios.", "morphosyntaxe"]
      ]],
      regla: ["Après chaque essai, je relis ma copie avec la grille d'évaluation du DALF."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Errores típicos.",
      errores: [
        ["Solo contar faltas", "Evaluar los cinco criterios", "La nota tiene varios criterios."],
        ["Mes connecteurs sont variées.", "Mes connecteurs sont variés.", "connecteur es masculino."],
        ["Je dois enrichir mon lexique (y no hacerlo)", "Elegir un criterio por semana", "Entrenar con criterio."]
      ] }
  ],
  ejemplos: [
    { sit: "Respetaste la extensión.", resp: "J'ai respecté le nombre de mots.", pasos: ["Passé composé: lo logrado."], porque: "consigne." },
    { sit: "Debes enriquecer tu léxico.", resp: "Je dois enrichir mon lexique.", pasos: ["Je dois + infinitivo."], porque: "lexique." },
    { sit: "¿En qué criterio cuenta el subjuntivo?", resp: "morphosyntaxe", pasos: ["Gramática."], porque: "Morfosintaxis." }
  ],
  comprueba: [
    { q: "Los conectores se evalúan en…", o: ["cohérence et cohésion", "lexique"], a: 0, b: "criteres", porque: "Coherencia." },
    { q: "«consigne» mira…", o: ["género, destinatario, extensión", "la ortografía"], a: 0, b: "criteres", porque: "Lo pedido." },
    { q: "Lo que te falta →", o: ["Je dois enrichir mon lexique.", "J'ai enrichi mon lexique."], a: 0, b: "bilan", porque: "Je dois." }
  ],
  practica: [
    { fase: "guiada", c: ["au-criteres"], k: "choice", es: true, ask: "¿Qué criterio evalúa los conectores?", q: "Elige:", o: ["cohérence et cohésion", "respect de la consigne", "phonétique"], a: 0, pista: "Unen el texto.", why: "<b>Cohérence</b>." },
    { fase: "guiada", c: ["au-criteres"], k: "choice", es: true, ask: "¿Qué incluye «respect de la consigne»?", q: "Elige:", o: ["género, destinatario, extensión", "ortografía", "acento"], a: 0, pista: "Lo que te piden.", why: "Lo pedido." },
    { fase: "indep", c: ["au-bilan"], k: "fill", ask: "Escribe «enriquecer».", q: "Je dois ___ mon lexique.", acc: ["enrichir"], why: "<b>enrichir</b>." },
    { fase: "indep", c: ["au-bilan"], k: "fill", ask: "Escribe «palabras».", q: "J'ai respecté le nombre de ___ .", acc: ["mots"], why: "<b>mots</b>." },
    { fase: "indep", c: ["au-bilan"], k: "spot", ask: "Toca el error.", s: "Mes connecteurs sont [variées] et mes transitions sont claires .", fix: "variés", why: "Masculino: <b>variés</b>." },
    { fase: "indep", c: ["au-criteres"], k: "choice", es: true, ask: "¿Qué evalúa «lexique»?", q: "Elige:", o: ["la precisión y variedad del vocabulario", "la letra", "la puntuación"], a: 0, why: "<b>Vocabulario</b>." },
    { fase: "aplica", c: ["au-criteres"], k: "match", ask: "Une el criterio y su pregunta.", ctx: "Revisas tu simulacro.", q: "Criterio → pregunta", pairs: [["consigne", "¿He escrito el género pedido?"], ["cohérence", "¿Hay plan y transiciones?"], ["lexique", "¿Evito repeticiones?"], ["morphosyntaxe", "¿Están bien las concordancias?"]], why: "Autoevaluación." },
    { fase: "aplica", c: ["au-criteres"], k: "sort", ask: "¿Qué criterio?", ctx: "Clasificas tus correcciones.", q: "Clasifica.", cats: ["Cohérence", "Morphosyntaxe"], items: [["connecteurs variés", 0], ["plan annoncé", 0], ["transitions", 0], ["accord du participe", 1], ["subjonctif", 1], ["concordance des temps", 1]], why: "Criterios." },
    { fase: "dominio", c: ["au-bilan"], k: "order", ask: "Ordena: «Debo enriquecer mi léxico».", tokens: ["Je dois", "enrichir", "mon", "lexique."], why: "Je dois + infinitivo." },
    { fase: "dominio", c: ["au-bilan"], k: "choice", ask: "Di lo que lograste.", q: "Elige:", o: ["J'ai varié mes connecteurs logiques.", "Je dois varié mes connecteurs logiques."], a: 0, why: "Passé composé." },
    { fase: "dominio", c: ["au-criteres", "au-bilan"], k: "listen", ask: "Escucha y escribe.", say: "Après chaque essai, je relis ma copie avec la grille d'évaluation du DALF.", acc: ["Après chaque essai, je relis ma copie avec la grille d'évaluation du DALF."], num: false, dict: true, why: "El hábito final." }
  ],
  dominio: { criterio: 0.75, min: 2 },
  repaso: { dias: [1, 3, 7, 16, 35] },
  lexico: { nombres: ["Laura", "Roche", "DALF"] }
};
