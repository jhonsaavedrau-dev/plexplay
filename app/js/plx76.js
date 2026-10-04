/* PLEX PLAY 3.3.0 — Literatura francófona (C1) accesible sin perder rigor
   El curso de literatura se escribió para quien ya conoce el análisis literario: la teoría de LIT·1 a LIT·3 está
   entera en francés, las consignas también, y los términos técnicos (alexandrin, didascalie, focalisation…) no se
   explican la primera vez que aparecen. Un estudiante nuevo se perdía antes del primer ejercicio.
   Ahora, sin tocar el contenido académico:
   - «Antes de empezar»: al abrir cada lección, una introducción en español con el contexto (época, autores, por
     qué importa), lo que vas a aprender, 4–6 palabras clave con su traducción y una estrategia para leer el tema.
     La teoría original sigue debajo, completa y en francés.
   - Consignas: bajo cada consigna en francés aparece su traducción, pequeña y en gris.
   - Glosario: los términos técnicos que aparecen en la teoría y en los ejercicios quedan subrayados con puntos;
     al tocarlos se ve su definición en español (sin dar la respuesta: se definen conceptos, no se resuelven ítems).
   - Orden sugerido: en las lecciones que suponen otra anterior, una línea dice cuál conviene haber visto. */
(function(){
  "use strict";
  if (typeof renderStep !== "function" || typeof LESSONS === "undefined") return;
  var esc = function(x){ return String(x == null ? "" : x).replace(/[&<>"']/g, function(c){ return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };

  /* ---------------- introducciones ---------------- */
  var INTRO = {
    "lit-genres-registres": { ctx: "Antes de analizar cualquier texto literario hay dos preguntas de base: qué forma tiene (el género) y qué efecto busca en el lector (el registro). Es el punto de partida de todo comentario en Francia, en el DALF y en la universidad.",
      ap: ["Reconocer los cuatro grandes géneros: novela, poesía, teatro y ensayo.", "Distinguir los registros: lírico, épico, trágico, cómico, satírico, polémico…", "Usar las palabras justas: un roman no es una «romance»."],
      kw: ["genre", "registre", "réplique", "tirade", "didascalie", "lyrique"], tip: "Lee el fragmento una vez sin buscar nada. Luego pregúntate: ¿quién habla, a quién y para provocar qué emoción? La respuesta suele darte el registro." },
    "lit-figures-style": { ctx: "Las figuras de estilo son los recursos con los que un autor transforma el lenguaje corriente: compara, exagera, suaviza, repite. Nombrarlas con precisión es obligatorio en un comentario, pero lo que se valora es explicar qué efecto producen.",
      ap: ["Distinguir comparación y metáfora (con o sin herramienta de comparación).", "Reconocer el oxímoron, la lítote, la hipérbole, la anáfora y la personificación.", "Clasificar las figuras por familia: analogía, oposición, insistencia, atenuación."],
      kw: ["comparaison", "métaphore", "oxymore", "litote", "hyperbole", "anaphore"], tip: "Nunca te quedes en «hay una metáfora». Di qué compara con qué y qué idea refuerza: figura + ejemplo + efecto." },
    "lit-versification-commentaire": { ctx: "La poesía francesa clásica se mide por sílabas, no por acentos como la española. Contar bien un verso (la «e» muda, la diéresis) y reconocer las rimas permite analizar el ritmo de un poema y armar el comentario de texto, el ejercicio rey de la literatura en Francia.",
      ap: ["Contar sílabas y reconocer el alejandrino (12) con su cesura.", "Identificar rimas cruzadas, abrazadas y planas, y su riqueza.", "Seguir los pasos de la introducción de un comentario: presentación, problemática, plan."],
      kw: ["alexandrin", "hémistiche", "césure", "rime", "sonnet", "problématique"], tip: "La «e» final se cuenta si la sigue una consonante y se elide ante vocal o a final de verso. Cuenta con los dedos en voz alta: el oído ayuda." },
    "lit-classicisme-lumieres": { ctx: "El siglo XVII francés (Luis XIV) busca el orden y la razón: es el clasicismo de Corneille, Racine, Molière y La Fontaine. El XVIII, el de las Luces, pone esa razón al servicio de la crítica: Voltaire, Montesquieu, Diderot y Rousseau preparan las ideas de la Revolución.",
      ap: ["Las reglas del teatro clásico: tres unidades, verosimilitud y decoro.", "Los grandes autores y obras de los dos siglos.", "El combate de las Luces: tolerancia, crítica del poder, la Enciclopedia."],
      kw: ["classicisme", "bienséance", "vraisemblance", "Lumières", "conte philosophique"], tip: "Asocia cada autor a una idea fuerza: Racine, la pasión que destruye; Molière, la risa que corrige; Voltaire, la ironía contra el fanatismo." },
    "lit-romantisme-realisme": { ctx: "El siglo XIX es el gran siglo de la novela. El romanticismo (Hugo) exalta el yo y la emoción; el realismo (Balzac, Stendhal, Flaubert) quiere pintar la sociedad tal como es, y el naturalismo (Zola) la estudia casi como un científico.",
      ap: ["Las diferencias entre romanticismo, realismo y naturalismo.", "Las novelas clave y sus autores, en orden cronológico.", "Recursos del realismo: descripción, retorno de personajes, herencia y medio."],
      kw: ["romantisme", "réalisme", "naturalisme", "retour des personnages", "roman"], tip: "Piensa en la ambición de cada movimiento: el romántico quiere expresar, el realista mostrar, el naturalista demostrar." },
    "lit-poesie-xixe": { ctx: "La poesía del XIX va del romanticismo de Hugo y Lamartine a la modernidad de Baudelaire, que encuentra belleza en la ciudad y en el mal. Después, Verlaine y Rimbaud liberan el verso y los simbolistas buscan sugerir en lugar de nombrar.",
      ap: ["Baudelaire y las correspondencias entre los sentidos.", "Verlaine y la musicalidad; Rimbaud y el poeta vidente.", "El simbolismo y el paso hacia el verso libre."],
      kw: ["correspondances", "synesthésie", "spleen", "symbolisme", "vers libre"], tip: "Lee los versos en voz alta antes de analizarlos: en esta poesía, el sonido forma parte del sentido." },
    "lit-xxe-siecle": { ctx: "El siglo XX rompe con las formas heredadas. Proust renueva la novela con la memoria involuntaria, los surrealistas exploran el inconsciente, Sartre y Camus llevan la filosofía a la literatura (existencialismo, absurdo) y la escritura se interroga a sí misma.",
      ap: ["La memoria involuntaria de Proust.", "Existencialismo y absurdo: Sartre y Camus.", "Las grandes rupturas del siglo y sus obras emblemáticas."],
      kw: ["mémoire involontaire", "existentialisme", "absurde", "engagement"], tip: "Ubica cada obra en su contexto histórico: las dos guerras mundiales explican buena parte de estas rupturas." },
    "lit-francophonies": { ctx: "Se escribe literatura en francés mucho más allá de Francia: el Magreb, el África subsahariana, las Antillas, Haití, Quebec, Bélgica o Suiza. Estas literaturas cuentan la colonización, el exilio y la identidad, y renuevan la lengua.",
      ap: ["Situar a los grandes escritores francófonos en su país o territorio.", "Las ideas clave: negritud, antillanidad, creolidad, Tout-monde.", "Por qué hablar de literaturas «francófonas» y no de una sola."],
      kw: ["francophonie", "négritude", "créolité", "Tout-monde", "exil"], tip: "Haz un mapa mental: cada espacio (Antillas, Magreb, África, Quebec) con dos autores y una idea." },
    "lit-theatre": { ctx: "Un texto de teatro está escrito para ser representado: además de lo que dicen los personajes, el autor da indicaciones de escena, y todo lo que se dice va dirigido a la vez al otro personaje y al público.",
      ap: ["Distinguir réplica, tirada, monólogo y aparte.", "Leer las didascalias (acotaciones).", "Entender la doble enunciación."], kw: ["réplique", "tirade", "monologue", "aparté", "didascalie", "double énonciation"],
      tip: "Imagina la escena montada: dónde está cada personaje y qué sabe el público que ellos no saben." },
    "lit-recit": { ctx: "Para analizar una novela o un cuento hay que separar al autor (la persona real) del narrador (la voz que cuenta) y preguntarse desde dónde se mira la historia. Son las herramientas de la narratología.",
      ap: ["Narrador interno y externo; autor, narrador y personaje.", "Las tres focalizaciones: cero, interna y externa.", "Los tiempos del relato: passé simple e imparfait."], kw: ["narrateur", "focalisation", "passé simple", "imparfait", "discours indirect libre"],
      tip: "En cada fragmento hazte dos preguntas: ¿quién cuenta? y ¿quién ve? No siempre son el mismo." },
    "lit-dissertation": { ctx: "La disertación es el ensayo argumentado de la universidad francesa: a partir de una cita o una pregunta, se construye una reflexión con plan, argumentos y ejemplos de obras. Es muy distinta del comentario, que parte de un texto.",
      ap: ["Formular una problemática a partir de un tema.", "Elegir un plan: dialéctico, temático o analítico.", "Apoyar cada argumento con un ejemplo preciso de una obra."], kw: ["dissertation", "problématique", "plan dialectique", "argument", "exemple", "ouverture"],
      tip: "Una buena problemática no se responde con sí o no: pregunta «¿en qué medida…?»." },
    "lit-surrealisme": { ctx: "Tras la Primera Guerra Mundial, Dada se burla de todo y el surrealismo de André Breton (1924) busca liberar el pensamiento de la razón y la moral: sueño, azar, escritura automática e imágenes que unen realidades lejanas.",
      ap: ["De Dada al surrealismo: fechas, revistas y manifiestos.", "La escritura automática y la imagen surrealista.", "Los autores y obras de referencia."], kw: ["écriture automatique", "image surréaliste", "inconscient", "manifeste"],
      tip: "No busques la lógica de las imágenes: busca la sorpresa y qué une a los dos elementos que se juntan." },
    "lit-negritude": { ctx: "En los años 30, en París, estudiantes negros de las colonias (Césaire de Martinica, Senghor de Senegal, Damas de Guayana) crean la negritud: reivindican la cultura africana y denuncian el colonialismo, en un francés renovado.",
      ap: ["El nacimiento del movimiento y sus tres fundadores.", "Obras clave como el «Cahier d'un retour au pays natal».", "Las diferencias entre la visión de Césaire y la de Senghor."], kw: ["négritude", "colonialisme", "Cahier d'un retour au pays natal", "humanisme"],
      tip: "Relaciónalo con la lección de literaturas francófonas: la negritud abre el camino a la antillanidad y la creolidad." },
    "lit-absurde": { ctx: "Después de 1945, Ionesco y Beckett muestran en escena un mundo sin sentido: diálogos que no comunican, personajes que esperan sin saber qué. Es el teatro del absurdo, que rompe con las reglas del teatro clásico.",
      ap: ["Las obras clave: «La Cantatrice chauve», «En attendant Godot».", "Rasgos del absurdo: lenguaje vacío, tiempo circular, ausencia de acción.", "Comparar teatro clásico y teatro del absurdo."], kw: ["absurde", "anti-théâtre", "attente", "dialogue de sourds"],
      tip: "Fíjate en lo que no pasa: en el absurdo la falta de acción es el tema." },
    "lit-nouveau-roman": { ctx: "En los años 50, Robbe-Grillet, Sarraute, Butor y Simon desconfían de la novela tradicional: rechazan la trama lineal y el personaje con nombre e historia. Sarraute lo llamó «la era de la sospecha».",
      ap: ["Qué rechaza el Nouveau Roman y por qué.", "Los autores y obras del grupo.", "Técnicas: descripción minuciosa, tropismos, segunda persona."], kw: ["Nouveau Roman", "ère du soupçon", "tropismes", "personnage"],
      tip: "Compara siempre con Balzac: todo lo que la novela del XIX daba por seguro, el Nouveau Roman lo pone en duda." },
    "lit-autobiographie": { ctx: "Escribir la propia vida: de las «Confesiones» de Rousseau a Annie Ernaux. Philippe Lejeune definió el pacto autobiográfico, y en los años 70 surge la autoficción, que mezcla vida real y ficción.",
      ap: ["El pacto autobiográfico: autor = narrador = personaje.", "Diferencias entre autobiografía, memorias, diario y autoficción.", "El desdoblamiento entre el yo que escribe y el yo que vivió."], kw: ["pacte autobiographique", "autofiction", "mémoires", "journal intime"],
      tip: "Distingue siempre dos «yo»: el adulto que escribe hoy y el niño o joven del que habla." }
  };
  var ANTES = { "lit-figures-style": "lit-genres-registres", "lit-versification-commentaire": "lit-figures-style", "lit-theatre": "lit-genres-registres", "lit-recit": "lit-genres-registres", "lit-dissertation": "lit-versification-commentaire", "lit-negritude": "lit-francophonies", "lit-absurde": "lit-theatre", "lit-nouveau-roman": "lit-recit", "lit-autobiographie": "lit-recit" };

  /* ---------------- glosario (francés → español) ---------------- */
  var GLO = {
    "genre": "Género: la forma de un texto (novela, poesía, teatro, ensayo).", "registre": "Registro o tonalidad: el efecto que el texto busca en el lector (emocionar, hacer reír, indignar…).",
    "lyrique": "Lírico: expresa emociones íntimas, a menudo en primera persona.", "épique": "Épico: exalta hazañas heroicas, con exageración y grandeza.", "tragique": "Trágico: muestra a un personaje aplastado por un destino que no puede evitar.", "satirique": "Satírico: se burla de personas o costumbres para criticarlas.", "polémique": "Polémico: ataca una idea o a un adversario con vehemencia.", "pathétique": "Patético: busca provocar compasión y tristeza.",
    "réplique": "Réplica: lo que un personaje dice a otro en una obra de teatro.", "tirade": "Tirada: réplica larga dicha ante otros personajes.", "monologue": "Monólogo: un personaje habla solo en escena.", "aparté": "Aparte: frase que oye el público pero no los demás personajes.", "didascalie": "Didascalia o acotación: indicación del autor sobre gestos, tono o decorado.", "double énonciation": "Doble enunciación: en teatro, cada réplica se dirige a la vez al otro personaje y al público.",
    "comparaison": "Comparación: une dos elementos con una herramienta (comme, tel, semblable à).", "métaphore": "Metáfora: une dos elementos sin herramienta de comparación.", "oxymore": "Oxímoron: une dos palabras contradictorias («cette obscure clarté»).", "litote": "Lítote: dice menos para dar a entender más («Va, je ne te hais point»).", "hyperbole": "Hipérbole: exageración.", "anaphore": "Anáfora: repetición de una palabra al comienzo de varios versos o frases.", "personnification": "Personificación: da rasgos humanos a una cosa o idea.",
    "alexandrin": "Alejandrino: verso francés de 12 sílabas.", "hémistiche": "Hemistiquio: cada mitad de un verso dividido por la cesura (6 + 6 en el alejandrino).", "césure": "Cesura: pausa en medio del verso.", "rime": "Rima: repetición de sonidos al final de los versos.", "sonnet": "Soneto: poema de 14 versos (dos cuartetos y dos tercetos).", "problématique": "Problemática: la pregunta central que guía un comentario o una disertación.", "commentaire": "Comentario de texto: análisis organizado de un fragmento.",
    "classicisme": "Clasicismo: movimiento del siglo XVII que busca orden, razón y equilibrio.", "bienséance": "Decoro: regla clásica que prohíbe mostrar en escena lo que choca (violencia, muerte).", "vraisemblance": "Verosimilitud: lo que se cuenta debe parecer creíble.", "Lumières": "Las Luces (Ilustración): movimiento del siglo XVIII que defiende la razón y la crítica.", "conte philosophique": "Cuento filosófico: relato breve que transmite una crítica o una idea (Voltaire, «Candide»).",
    "romantisme": "Romanticismo: movimiento que exalta el yo, la emoción y la naturaleza.", "réalisme": "Realismo: quiere representar la sociedad tal como es.", "naturalisme": "Naturalismo: realismo que estudia el peso de la herencia y del medio (Zola).", "retour des personnages": "Retorno de personajes: los mismos personajes reaparecen de una novela a otra (Balzac).",
    "correspondances": "Correspondencias: relaciones secretas entre los sentidos y entre el mundo visible y el espiritual (Baudelaire).", "synesthésie": "Sinestesia: mezcla de sensaciones de sentidos distintos.", "spleen": "Spleen: tedio y angustia profunda, en Baudelaire.", "symbolisme": "Simbolismo: poesía que sugiere en vez de nombrar.", "vers libre": "Verso libre: verso sin medida ni rima fijas.",
    "mémoire involontaire": "Memoria involuntaria: un recuerdo que vuelve solo, despertado por una sensación (la magdalena de Proust).", "existentialisme": "Existencialismo: filosofía según la cual el ser humano se define por sus actos (Sartre).", "absurde": "Lo absurdo: la falta de sentido entre el ser humano y el mundo (Camus, Ionesco, Beckett).", "engagement": "Compromiso: el escritor toma partido en los debates de su tiempo.",
    "francophonie": "Francofonía: el conjunto de personas y países que usan el francés.", "négritude": "Negritud: movimiento de los años 30 que reivindica la identidad y la cultura negras.", "créolité": "Creolidad: reivindicación de la identidad criolla, mezcla de culturas (Antillas).", "Tout-monde": "Todo-mundo: idea de Glissant de un mundo hecho de relaciones entre culturas.",
    "narrateur": "Narrador: la voz que cuenta la historia (no es el autor).", "focalisation": "Focalización: desde dónde se mira la historia (cero, interna o externa).", "passé simple": "Passé simple: tiempo del relato escrito para las acciones principales.", "imparfait": "Imparfait: tiempo de las descripciones y del fondo en el relato.", "discours indirect libre": "Estilo indirecto libre: los pensamientos de un personaje mezclados con la voz del narrador, sin comillas.",
    "dissertation": "Disertación: ensayo argumentado a partir de una cita o pregunta, con plan y ejemplos.", "plan dialectique": "Plan dialéctico: tesis, antítesis y síntesis.", "ouverture": "Apertura: al final de la conclusión, una idea que amplía la reflexión.",
    "écriture automatique": "Escritura automática: escribir rápido, sin control de la razón, para liberar el inconsciente.", "image surréaliste": "Imagen surrealista: une dos realidades muy lejanas para sorprender.", "inconscient": "Inconsciente: la parte de la mente que no controlamos (Freud).", "manifeste": "Manifiesto: texto que presenta las ideas de un movimiento.",
    "anti-théâtre": "Antiteatro: teatro que rompe las reglas tradicionales (trama, diálogo, personajes).", "Nouveau Roman": "Nouveau Roman: grupo de novelistas de los años 50 que rechaza la novela tradicional.", "ère du soupçon": "La era de la sospecha: fórmula de Sarraute para la desconfianza hacia el personaje y la trama.", "tropismes": "Tropismos: movimientos interiores casi imperceptibles (Sarraute).",
    "pacte autobiographique": "Pacto autobiográfico: el autor promete contar su vida con verdad; autor = narrador = personaje (Lejeune).", "autofiction": "Autoficción: mezcla de autobiografía y ficción.", "mémoires": "Memorias: relato de una vida centrado en los hechos públicos y la historia.", "journal intime": "Diario íntimo: notas fechadas, escritas día a día."
  };
  /* definiciones que solo salen en «Palabras clave» (palabras demasiado comunes para subrayarlas en todo el texto) */
  var KWX = { "humanisme": "Humanismo: pone al ser humano y su dignidad en el centro.", "colonialisme": "Colonialismo: dominación de un territorio y su pueblo por otra potencia.",
    "Cahier d'un retour au pays natal": "«Cuaderno de un retorno al país natal» (Césaire, 1939): poema fundador de la negritud.", "attente": "La espera: tema central de «En attendant Godot».",
    "dialogue de sourds": "Diálogo de sordos: los personajes hablan sin escucharse ni entenderse.", "personnage": "Personaje: ser de ficción que actúa en la historia.",
    "argument": "Argumento: idea que apoya una tesis.", "exemple": "Ejemplo: obra o pasaje preciso que prueba un argumento.", "exil": "Exilio: vivir lejos de la tierra de origen, a menudo a la fuerza.",
    "roman": "Novela (no «romance»): relato largo en prosa." };
  var defKW = function(k){ var t = buscaTerm(k); return t ? GLO[t] : KWX[k] || ""; };
  var TERMS = Object.keys(GLO).sort(function(a, b){ return b.length - a.length; });
  var RE = new RegExp("(^|[^\\p{L}])(" + TERMS.map(function(t){ return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }).join("|") + ")(s|x)?(?![\\p{L}])", "iu");
  var buscaTerm = function(w){ var l = w.toLowerCase(); for (var i = 0; i < TERMS.length; i++) if (TERMS[i].toLowerCase() === l) return TERMS[i]; return null; };

  /* ---------------- consignas en francés ---------------- */
  var CONSIGNA = [
    [/^Trouvez le mot incorrect et corrigez-le/, "Encuentra la palabra incorrecta y corrígela."], [/^Choisissez la réponse correcte/, "Elige la respuesta correcta."],
    [/^Identifiez la figure de style/, "Identifica la figura de estilo."], [/^Identifiez le registre dominant/, "Identifica el registro dominante."], [/^Identifiez la disposition des rimes/, "Identifica cómo están dispuestas las rimas."],
    [/^Remettez (les éléments|les mots|les vers|dans l'ordre)/, "Ordena los elementos."], [/^Choisissez l'intrus/, "Elige el que no pertenece al grupo."], [/^Complétez/, "Completa (fíjate en la pista entre paréntesis)."],
    [/^Choisissez le genre/, "Elige el género al que pertenece este texto."], [/^Associez/, "Une cada elemento con su pareja."], [/^Classez/, "Clasifica cada elemento."], [/^Comptez les syllabes/, "Cuenta las sílabas."],
    [/^Choisissez la meilleure problématique/, "Elige la mejor problemática."], [/^Choisissez l'analyse correcte/, "Elige el análisis correcto."], [/^Choisissez la définition/, "Elige la definición que corresponde."],
    [/^Choisissez la notion/, "Elige la noción que corresponde."], [/^Choisissez le mouvement/, "Elige el movimiento que corresponde."], [/^Choisissez l'(écrivain|auteur)/, "Elige el autor."], [/^Choisissez l'œuvre/, "Elige la obra."],
    [/^Choisissez (le mot juste|l'expression)/, "Elige la palabra o expresión adecuada."]
  ];
  var traduce = function(t){ t = String(t).replace(/^d+[.)]s*/, ""); for (var i = 0; i < CONSIGNA.length; i++) if (CONSIGNA[i][0].test(t)) return CONSIGNA[i][1]; return null; };

  var esLit = function(){ return typeof P !== "undefined" && P && P.lesson && P.lesson.track === "lit"; };
  var introHTML = function(l){
    var I = INTRO[l.id]; if (!I) return "";
    var prev = ANTES[l.id] && LESSONS.find(function(x){ return x.id === ANTES[l.id]; }), hecha = prev && S.lessons[prev.id] && S.lessons[prev.id].done;
    return '<section class="lit-in" lang="es"><div class="lit-in-h"><small>Antes de empezar</small><b>En pocas palabras</b></div>' +
      "<p>" + esc(I.ctx) + "</p>" +
      '<div class="lit-in-g"><div><h4>Vas a aprender</h4><ul>' + I.ap.map(function(x){ return "<li>" + esc(x) + "</li>"; }).join("") + "</ul></div>" +
      '<div><h4>Palabras clave</h4><dl>' + I.kw.map(function(k){ var d = defKW(k); return '<div><dt lang="fr">' + esc(k) + "</dt><dd>" + esc(d.replace(/^[^:]+:\s*/, "")) + "</dd></div>"; }).join("") + "</dl></div></div>" +
      '<p class="lit-in-tip"><b>Cómo leer este tema:</b> ' + esc(I.tip) + "</p>" +
      (prev && !hecha ? '<p class="lit-in-prev">Te ayudará haber visto antes «' + esc(String(prev.title).replace(/<[^>]+>/g, "")) + '». <button class="lit-in-ir" data-open="' + prev.id + '">Ir a esa lección</button></p>' : "") +
      '<p class="lit-in-pie">Debajo está la teoría completa, en francés. Toca las palabras subrayadas para ver qué significan.</p></section>';
  };

  /* marca los términos del glosario dentro de un nodo (sin tocar botones de respuesta ni campos) */
  var marcaTerminos = function(raiz){
    var vistos = {}, w = document.createTreeWalker(raiz, NodeFilter.SHOW_TEXT, { acceptNode: function(n){
      var p = n.parentNode; if (!p || !n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      if (p.closest("button,input,textarea,.eyebrow,.lit-g,.lit-in,.opts,.opt,.bank,.tok,.sort,.match,.lk,script,style,.sp-box,.pf")) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT; } }), nodos = [];
    while (w.nextNode()) nodos.push(w.currentNode);
    nodos.forEach(function(n){
      var txt = n.nodeValue, m = txt.match(RE); if (!m) return;
      var t = buscaTerm(m[2]); if (!t || vistos[t]) return; vistos[t] = 1;
      var i = m.index + m[1].length, palabra = m[2] + (m[3] || "");
      var sp = document.createElement("span"); sp.className = "lit-g"; sp.tabIndex = 0; sp.setAttribute("role", "button"); sp.dataset.g2 = t; sp.textContent = txt.substr(i, palabra.length);
      var after = n.splitText(i); after.nodeValue = after.nodeValue.slice(palabra.length); n.parentNode.insertBefore(sp, after);
    });
  };

  var decora = function(){
    if (!esLit()) return;
    var box = document.getElementById("player"); if (!box) return;
    var st = P.steps[P.i]; if (!st) return;
    var th = box.querySelector("#theory");
    if (st.kind === "theory" && th && !box.querySelector(".lit-in")) th.insertAdjacentHTML("beforebegin", introHTML(P.lesson));
    if (st.kind === "item") {
      var ask = box.querySelector(".pbody p.ask");
      if (ask && !ask.nextElementSibling?.classList?.contains("lit-tr")) { var tr = traduce(ask.textContent.trim()); if (tr) ask.insertAdjacentHTML("afterend", '<p class="lit-tr" lang="es">' + esc(tr) + "</p>"); }
    }
    var cuerpo = box.querySelector(".pbody"); if (cuerpo && !cuerpo.dataset.litG) { cuerpo.dataset.litG = "1"; try { marcaTerminos(cuerpo); } catch (e) {} }
  };
  var rsO = renderStep;
  renderStep = function(){ var r = rsO.apply(this, arguments); try { decora(); } catch (e) {} return r; };

  /* globo con la definición */
  var globo = null;
  var muestra = function(el){
    cierraG();
    globo = document.createElement("div"); globo.className = "lit-pop"; globo.setAttribute("role", "tooltip");
    var t = el.dataset.g2; globo.innerHTML = '<b lang="fr">' + esc(t) + "</b><span>" + esc(GLO[t].replace(/^[^:]+:\s*/, "")) + "</span>";
    document.body.appendChild(globo);
    var r = el.getBoundingClientRect(), w = Math.min(300, innerWidth - 24);
    globo.style.width = w + "px";
    var x = Math.max(12, Math.min(innerWidth - w - 12, r.left + r.width / 2 - w / 2)), y = r.bottom + 8;
    if (y + globo.offsetHeight > innerHeight - 10) y = r.top - globo.offsetHeight - 8;
    globo.style.left = x + "px"; globo.style.top = y + "px";
  };
  var cierraG = function(){ if (globo) { globo.remove(); globo = null; } };
  document.addEventListener("click", function(e){
    var g = e.target.closest && e.target.closest(".lit-g");
    if (g) { e.preventDefault(); e.stopPropagation(); return muestra(g); }
    var ir = e.target.closest && e.target.closest(".lit-in-ir");
    if (ir) { e.preventDefault(); e.stopPropagation(); var id = ir.dataset.open; try { closePlayer(); } catch (x) {} setTimeout(function(){ openLesson(id); }, 50); return; }
    cierraG();
  }, true);
  document.addEventListener("keydown", function(e){ if (e.key === "Escape") cierraG(); var g = e.target.closest && e.target.closest(".lit-g"); if (g && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); muestra(g); } }, true);
  document.addEventListener("scroll", cierraG, true);

  window.PLX_LIT = { INTRO: INTRO, GLO: GLO, traduce: traduce };

  var css = document.createElement("style"); css.id = "plx76";
  css.textContent = [
    ".lit-in{background:linear-gradient(180deg,var(--wash),var(--raise));border-radius:20px;padding:16px 18px;margin:0 0 18px;box-shadow:0 0 0 1.5px var(--line);font-family:var(--sans)}",
    ".lit-in-h small{display:block;color:var(--accent);font-weight:800;text-transform:uppercase;letter-spacing:.06em;font-size:.72rem}.lit-in-h b{font-family:var(--serif);font-weight:900;font-size:1.25rem}",
    ".lit-in>p{line-height:1.55;color:var(--ink-2);margin:8px 0}",
    ".lit-in-g{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:10px 0}@media (max-width:640px){.lit-in-g{grid-template-columns:1fr}}",
    ".lit-in h4{margin:0 0 6px;font-size:.82rem;text-transform:uppercase;letter-spacing:.05em;color:var(--stone)}.lit-in ul{margin:0;padding-left:18px;display:grid;gap:4px;line-height:1.4}",
    ".lit-in dl{margin:0;display:grid;gap:6px}.lit-in dl div{background:var(--raise);border-radius:10px;padding:6px 10px;box-shadow:0 0 0 1px var(--line)}.lit-in dt{font-weight:800;color:var(--brand-ink)}.lit-in dd{margin:0;color:var(--stone);font-size:.88rem;line-height:1.35}",
    ".lit-in-tip{background:var(--warn-bg);color:var(--warn-ink)!important;border-radius:12px;padding:10px 12px}.lit-in-prev{font-size:.92rem}.lit-in-ir{all:unset;cursor:pointer;color:var(--accent);font-weight:800;text-decoration:underline}",
    ".lit-in-pie{font-size:.85rem;color:var(--faint)!important;margin-bottom:0!important}",
    ".lit-tr{margin:-6px 0 10px;color:var(--faint);font-size:.88rem;font-style:italic}",
    ".lit-g{text-decoration:underline dotted var(--accent);text-decoration-thickness:2px;text-underline-offset:3px;cursor:help;border-radius:4px}.lit-g:hover,.lit-g:focus{background:var(--wash);outline:none}",
    ".lit-pop{position:fixed;z-index:600;background:#0B2D74;color:#fff;border-radius:14px;padding:10px 12px;box-shadow:0 12px 30px rgba(0,0,0,.3);font-family:var(--sans);display:grid;gap:4px;line-height:1.4;font-size:.92rem}.lit-pop b{color:#FFD200}"
  ].join("\n");
  document.head.appendChild(css);
})();
