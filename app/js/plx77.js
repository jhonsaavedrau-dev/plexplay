/* PLEX PLAY 3.4.0 — Diagnóstico completo siguiendo el MCER y los exámenes reales
   Modelo
   - DIALANG (Consejo de Europa / U. de Lancaster): autoevaluación con descriptores «Puedo…» de la tabla de
     autoevaluación del MCER antes de las pruebas; fija el punto de partida de cada habilidad y al final se compara
     lo que uno cree con lo que demuestra.
   - TCF (France Éducation international): «maîtrise des structures de la langue», preguntas de gramática y léxico
     de dificultad progresiva.
   - DELF/DALF: comprensión escrita y oral con DOCUMENTOS completos y preguntas (se leen las preguntas antes; el
     audio se escucha dos veces); producción escrita y oral con tareas del tipo del examen (carta postal, mensaje,
     foro, carta formal, ensayo; entretien dirigé + monologue / point de vue / exposé), evaluadas con los criterios
     de las rejillas oficiales (realización de la tarea, coherencia y cohesión, adecuación sociolingüística, léxico,
     morfosintaxis; en oral también fluidez).
   Cómo se adapta
   - Lectura y escucha: un documento en el nivel de partida con 3 preguntas. 2 de 3 = nivel superado y se sube; si
     no, se baja hasta encontrar el piso. Los documentos son las lecturas graduadas (A1–C1) y los documentos orales de
     los simulacros DELF B1/B2 y DALF C1, con su audio grabado.
   - Escritura y habla: la tarea sale en el nivel estimado por gramática + comprensión. La corrige la IA del taller
     con la rejilla DELF; sin sesión, sin conexión o sin cupo, una estimación automática (extensión, variedad léxica,
     conectores y estructuras por nivel; en oral, además palabras por minuto) que se marca como estimación.
   - Se puede salir y seguir después: el avance se guarda en el dispositivo.
   Resultado: nivel por habilidad con su descriptor «Ya puedes…» y «Para llegar a…», estructuras de la lengua,
   autoevaluación frente a resultado, correcciones de la escritura y del habla, nivel global y la ruta (plx75). */
(function(){
  "use strict";
  if (typeof gEnsure !== "function" || !window.PLX_DIAG) return;
  var esc = function(x){ return String(x == null ? "" : x).replace(/[&<>"']/g, function(c){ return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  var mezcla = function(a){ a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; };
  var plano = function(h){ var d = document.createElement("div"); d.innerHTML = String(h || ""); return (d.textContent || "").replace(/\s+/g, " ").trim(); };
  var clamp = function(n, a, b){ return Math.max(a, Math.min(b, n)); };
  var hoy = function(){ return typeof dkey === "function" ? dkey() : new Date().toISOString().slice(0, 10); };

  var NIV = ["Pre-A1", "A1", "A2", "B1", "B2", "C1"];
  var NUM = { "pre-a1": 0, "a1": 1, "a2": 2, "b1": 3, "b2": 4, "c1": 5, "c2": 5 };
  var DESC = ["Estás empezando", "Usuario básico", "Usuario básico", "Usuario independiente", "Usuario independiente", "Usuario competente"];
  var SK = [
    { k: "R", n: "Comprensión de lectura", fr: "Compréhension écrite", ic: "📖" },
    { k: "L", n: "Comprensión auditiva", fr: "Compréhension orale", ic: "🎧" },
    { k: "W", n: "Expresión escrita", fr: "Production écrite", ic: "✍️" },
    { k: "S", n: "Expresión oral", fr: "Production orale", ic: "🎙️" }
  ];
  var SN = {}; SK.forEach(function(s){ SN[s.k] = s; });
  /* tabla de autoevaluación del MCER (Consejo de Europa), en español y abreviada; índice = nivel */
  var CAN = {
    R: ["", "Comprendo palabras y nombres conocidos y frases muy sencillas, por ejemplo en carteles o catálogos.",
      "Leo textos muy breves y sencillos: encuentro información concreta en anuncios, menús u horarios y comprendo cartas personales cortas.",
      "Comprendo textos de lengua cotidiana y la descripción de acontecimientos, sentimientos y deseos en cartas personales.",
      "Leo artículos e informes sobre temas actuales en los que el autor toma postura, y comprendo prosa literaria contemporánea.",
      "Comprendo textos largos y complejos, literarios o técnicos, y aprecio las diferencias de estilo."],
    L: ["", "Reconozco palabras y expresiones muy básicas sobre mí, mi familia y mi entorno, si se habla despacio y claro.",
      "Comprendo frases y vocabulario de temas que me tocan (compras, dónde vivo, estudios) y capto lo esencial de mensajes breves y claros.",
      "Comprendo las ideas principales cuando se habla claro de temas conocidos (estudios, ocio, trabajo) y de muchos programas de radio o televisión.",
      "Sigo conferencias y discursos largos, incluso argumentos complejos si el tema me es conocido; comprendo casi todas las noticias y películas.",
      "Comprendo discursos largos aunque no estén bien estructurados, y la televisión y el cine sin mucho esfuerzo."],
    W: ["", "Escribo postales cortas y sencillas y relleno formularios con mis datos.",
      "Escribo notas y mensajes breves y cartas personales muy sencillas, por ejemplo para agradecer algo.",
      "Escribo textos sencillos y bien enlazados sobre temas conocidos, y cartas que cuentan experiencias e impresiones.",
      "Escribo textos claros y detallados sobre muchos temas; argumento a favor o en contra de un punto de vista.",
      "Me expreso en textos claros y bien estructurados sobre temas complejos, defendiendo puntos de vista con cierta extensión."],
    S: ["", "Uso frases sencillas para describir dónde vivo y a la gente que conozco, y converso si el otro habla despacio y me ayuda.",
      "Describo con frases sencillas mi familia, mis estudios o mi trabajo, y hago intercambios breves sobre temas cotidianos.",
      "Enlazo frases para contar experiencias, sueños y metas, explico brevemente mis opiniones y converso sin preparación sobre temas cotidianos.",
      "Presento descripciones claras y detalladas, explico un punto de vista con ventajas e inconvenientes y converso con fluidez con hablantes nativos.",
      "Me expreso con fluidez y espontaneidad sobre temas complejos, sin buscar las palabras de forma evidente."]
  };
  /* tareas de producción escrita (formato DELF; extensión reducida para el diagnóstico) */
  var WT = {
    1: { t: "Une carte postale", fmt: "DELF A1 · production écrite", min: 40,
      c: "Vous passez un week-end à Cartagena avec des amis. Vous écrivez une carte postale à votre ami français Lucas : vous dites où vous êtes, avec qui, le temps qu'il fait et ce que vous faites.",
      es: "Escribe una postal a un amigo francés: dónde estás, con quién, qué tiempo hace y qué haces." },
    2: { t: "Un message", fmt: "DELF A2 · production écrite", min: 60,
      c: "Votre amie française Julie vous invite à son anniversaire samedi soir, mais vous ne pouvez pas venir. Vous lui écrivez un message : vous la remerciez, vous expliquez pourquoi vous ne pouvez pas venir et vous lui proposez un autre moment pour vous voir.",
      es: "Responde a una invitación: agradece, explica por qué no puedes ir y propone otro momento." },
    3: { t: "Contribution à un forum", fmt: "DELF B1 · production écrite", min: 120,
      c: "Sur un forum d'étudiants francophones, on pose la question suivante : « Pendant les études, vaut-il mieux habiter chez ses parents ou vivre de façon indépendante ? » Vous répondez en racontant votre expérience et en donnant votre opinion, avec des exemples.",
      es: "Participa en un foro: cuenta tu experiencia y da tu opinión argumentada, con ejemplos." },
    4: { t: "Lettre formelle", fmt: "DELF B2 · production écrite", min: 180,
      c: "Votre université veut supprimer la moitié des cours de langues étrangères pour faire des économies. Vous écrivez une lettre formelle au recteur pour exprimer votre désaccord : vous présentez des arguments précis et vous proposez des solutions.",
      es: "Carta formal al rector contra un recorte: argumentos precisos y propuestas." },
    5: { t: "Essai argumenté", fmt: "DALF C1 · production écrite", min: 220,
      c: "La revue de votre université prépare un dossier : « Les réseaux sociaux ont-ils enrichi ou appauvri le débat public ? » Vous rédigez un essai argumenté et nuancé, avec une introduction qui pose la problématique, un développement organisé et une conclusion.",
      es: "Ensayo argumentado y matizado: problemática, desarrollo organizado y conclusión." }
  };
  var ENTRETIEN = ["Présentez-vous : qui êtes-vous, où habitez-vous ?", "Parlez de vos études ou de votre travail.", "Qu'est-ce que vous aimez faire pendant votre temps libre ?"];

  /* ---------------- material: lecturas, simulacros y tareas orales (extra.js) ---------------- */
  var XL = null;
  var material = function(){
    if (window.__LEC && window.__SIM && window.__ORAL) return Promise.resolve();
    return XL || (XL = new Promise(function(res, rej){
      var sc = document.createElement("script"); sc.src = "extra.js?v=114c"; sc.onload = function(){ res(); }; sc.onerror = function(){ XL = null; rej(new Error("extra")); };
      document.head.appendChild(sc);
    }));
  };
  var LVL = { A1: 1, A2: 2, B1: 3, B2: 4, C1: 5 };
  /* documentos por nivel y habilidad: { id, lvl, t, intro, text?, audio?, qs } */
  var docs = function(){
    var R = { 1: [], 2: [], 3: [], 4: [], 5: [] }, L = { 1: [], 2: [], 3: [], 4: [], 5: [] };
    (window.__LEC || []).forEach(function(x, i){
      var n = LVL[x.level]; if (!n || !x.questions || x.questions.length < 3) return;
      var d = { id: x.id, lvl: n, t: x.title, intro: x.intro, text: x.text, audio: "lec:" + x.id, qs: x.questions };
      /* A1–A2: unas lecturas para leer y otras para escuchar (sin verlas); B1–C1: escuchar con los simulacros */
      if (n <= 2 && i % 3 === 1) L[n].push(d); else R[n].push(d);
    });
    (window.__SIM || []).forEach(function(s){
      var n = LVL[s.level]; if (!n) return;
      (s.co || []).forEach(function(c, i){ if (c.questions && c.questions.length >= 3) L[n].push({ id: s.id + ":co" + i, lvl: n, t: c.title, intro: c.intro, audio: "sim:" + s.id + ":co" + i, qs: c.questions, script: c.script }); });
    });
    return { R: R, L: L };
  };

  /* ---------------- estado (se guarda para poder seguir después) ---------------- */
  var KEY = "pc-diag2-" + (typeof PROFILE_ID !== "undefined" ? PROFILE_ID : "me");
  var SECS = ["auto", "gram", "R", "L", "W", "S"];
  var SECN = { auto: "Autoevaluación", gram: "Gramática y léxico", R: "Lectura", L: "Escucha", W: "Escritura", S: "Habla" };
  var SECI = { auto: "🪞", gram: "🧩", R: "📖", L: "🎧", W: "✍️", S: "🎙️" };
  var D = null, capa = null, rec = null;
  var guarda = function(){ try { if (D) localStorage.setItem(KEY, JSON.stringify(D)); } catch (e) {} };
  var leeGuardado = function(){ try { var d = JSON.parse(localStorage.getItem(KEY) || "null"); return d && d.v === 2 && d.fase !== "fin" && Date.now() - d.t0 < 7 * 864e5 ? d : null; } catch (e) { return null; } };
  var borraGuardado = function(){ try { localStorage.removeItem(KEY); } catch (e) {} };
  var nuevo = function(){ return { v: 2, t0: Date.now(), si: 0, fase: "intro", self: {}, gram: { tried: {}, cur: null, items: [], i: 0 }, R: { tried: {}, used: [] }, L: { tried: {}, used: [] }, W: {}, S: {}, q: null }; };

  /* ---------------- gramática y léxico (estructuras de la lengua) ---------------- */
  var LV = { a1: 1, a2: 2, fon: 2, b11: 3, b12: 3, b21: 4, rem: 4, prog: 5, c12: 5, lit: 5 };
  var gramBanco = null;
  var gramDe = function(n){
    if (!gramBanco) {
      gramBanco = { 1: [], 2: [], 3: [], 4: [], 5: [] };
      Object.keys(ITEMS).forEach(function(k){
        var x = ITEMS[k], it = x.it, l = x.l, m = LV[l.track]; if (!m || l.special || l.project) return;
        /* frases con hueco y varias opciones: lo que mide el TCF en «structures de la langue» */
        if (it.k === "choice" && it.o && it.o.length >= 3 && /_{2,}/.test(it.q || "") && !it.say && plano(it.q).length <= 140) gramBanco[m].push(k);
      });
    }
    return gramBanco[n] || [];
  };
  var POR_GRAM = 3;

  /* ---------------- adaptación por documentos ---------------- */
  var siguienteNivel = function(st, lvl, ok){
    st.tried[lvl] = ok;
    var pasa = ok >= 2;
    if (pasa) { if (lvl >= 5 || st.tried[lvl + 1] != null) return null; return lvl + 1; }
    if (lvl <= 1 || st.tried[lvl - 1] != null) return null;
    return lvl - 1;
  };
  var nivelDe = function(st){
    var best = 0, camino = 0;
    Object.keys(st.tried).forEach(function(l){ l = +l; if (st.tried[l] >= 2 && l > best) best = l; });
    if (st.tried[best + 1] != null && st.tried[best + 1] >= 1) camino = best + 1;
    return { lvl: best, camino: camino };
  };
  var arranque = function(k){ var s = D.self[k]; return clamp(s == null ? 2 : s || 1, 1, 5); };

  /* ---------------- evaluación de producciones ---------------- */
  var CONN = [
    [],
    ["et", "mais", "avec", "très", "aussi"],
    ["parce que", "alors", "après", "quand", "puis", "d'abord", "ensuite"],
    ["cependant", "donc", "par exemple", "pourtant", "même si", "enfin", "d'un côté", "à mon avis", "je pense que", "selon moi"],
    ["néanmoins", "en revanche", "d'une part", "d'autre part", "bien que", "afin que", "en effet", "par conséquent", "or", "alors que", "tandis que"],
    ["certes", "toutefois", "dès lors", "en définitive", "quoique", "force est de constater", "il n'en demeure pas moins", "en somme", "à cet égard", "nonobstant"]
  ];
  var ESTR = [
    [], [/\b(je|tu|il|elle|nous|vous)\b/i],
    [/\b(ai|as|a|avons|avez|ont|suis|es|est|sommes|êtes|sont)\s+\w+(é|i|u|is|it)e?s?\b/i, /\bje vais\s+\w+er\b/i],
    [/\w+(ais|ait|aient)\b/i, /\b(qui|que|où)\b/i, /\bsi\s+(je|tu|on|nous|vous|il|elle)\b/i],
    [/\w+(rais|rait|rions|riez|raient)\b/i, /\b(qu'(il|elle|on)|que (je|tu|nous|vous))\s+\w+(e|es|ions|iez|ent)\b/i, /\b(dont|lequel|laquelle|lesquels)\b/i],
    [/\b(eût|fût|soit|aient|puisse|fasse)\b/i, /\b(néanmoins|toutefois|nonobstant)\b/i, /\bayant\s+\w+/i]
  ];
  var mide = function(txt, secs){
    var t = String(txt || "").toLowerCase(), pal = t.match(/[a-zàâäéèêëîïôöûùüçœ'-]+/gi) || [], n = pal.length;
    var uni = {}; pal.forEach(function(w){ uni[w] = 1; });
    var ttr = n ? Object.keys(uni).length / Math.sqrt(n * 2) : 0;   /* índice de Guiraud corregido */
    /* palabra completa: «or» no debe contar dentro de «alors» ni de «d'abord» */
    var hay = function(c){ return new RegExp("(^|[^a-zàâäéèêëîïôöûùüçœ])" + c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "(?![a-zàâäéèêëîïôöûùüçœ])", "i").test(t); };
    var con = CONN.map(function(lst){ return lst.filter(hay).length; });
    var est = ESTR.map(function(lst){ return lst.filter(function(r){ return r.test(t); }).length; });
    var frases = (String(txt || "").match(/[.!?…]+/g) || []).length || 1;
    var esp = (t.match(/\b(el|los|las|pero|porque|también|tengo|quiero|estoy|muy)\b/g) || []).length;
    return { n: n, ttr: ttr, con: con, est: est, mlf: n / frases, wpm: secs ? Math.round(n / secs * 60) : 0, esp: esp };
  };
  /* estimación sin IA: el nivel más alto cuyas marcas aparecen, con extensión suficiente; nunca más de un nivel
     sobre la tarea; texto en español o casi vacío = Pre-A1/A1 */
  var estima = function(m, tarea, oral){
    if (m.n < 8 || m.esp > m.n * .15) return 0;
    var lvl = 1;
    for (var L = 2; L <= 5; L++) {
      var marcas = m.con[L] + m.est[L] + (L > 2 ? 0 : m.con[L - 1] > 1 ? 1 : 0);
      var largo = oral ? m.n >= [0, 15, 35, 70, 110, 150][L] : m.n >= (WT[Math.min(L, 5)].min * .6);
      var rico = m.ttr >= [0, 0, 3.2, 4, 4.8, 5.6][L];
      var flu = !oral || m.wpm >= [0, 0, 45, 70, 95, 115][L];
      if (marcas >= (L >= 4 ? 2 : 1) && largo && rico && flu) lvl = L; else break;
    }
    return Math.min(lvl, tarea || 1);   /* sin IA no se concede más que el nivel de la tarea */
  };
  var ia = async function(prompt, text){
    try {
      if (!window.claude || !claude.use) return null;
      var s = await claude.use("sample"); if (!s || !s.json) return null;
      var r = await s.json(prompt, { kind: "atelier", modelTier: "default", text: String(text || "").slice(0, 6000) });
      return r && typeof r === "object" ? r : null;
    } catch (e) { return null; }
  };
  var promptEscrito = function(tarea, lvl, txt){
    return "Tu es examinateur-correcteur habilité DELF-DALF. Évalue la production écrite d'un apprenant hispanophone (Colombie) avec les critères des grilles officielles du DELF : réalisation de la tâche (respect de la consigne, du type de texte et de la longueur), cohérence et cohésion, adéquation sociolinguistique (registre, formules), lexique (étendue et maîtrise), morphosyntaxe (degré d'élaboration et correction).\n" +
      "Tâche (niveau visé " + NIV[lvl] + ", " + tarea.fmt + ") : " + tarea.c + " Longueur demandée : " + tarea.min + " mots minimum.\n" +
      "Texte de l'apprenant :\n\"\"\"\n" + String(txt).slice(0, 5000) + "\n\"\"\"\n" +
      "Réponds uniquement avec un objet JSON : {\"niveau\":\"A1\",\"criteres\":[{\"critere\":\"Réalisation de la tâche\",\"note\":3}],\"points_forts\":\"une phrase en espagnol\",\"a_travailler\":\"une phrase en espagnol\",\"erreurs\":[{\"extrait\":\"segment exact du texte\",\"correction\":\"segment corrigé\"}]}\n" +
      "Règles : \"niveau\" vaut Pre-A1, A1, A2, B1, B2 ou C1 et indique le niveau que le texte DÉMONTRE réellement (il peut être inférieur au niveau visé, ou supérieur d'un niveau au maximum). Un texte hors sujet, rédigé en espagnol ou de moins de la moitié de la longueur demandée ne dépasse pas A1. \"criteres\" contient exactement les 5 critères dans l'ordre (Réalisation de la tâche, Cohérence et cohésion, Adéquation sociolinguistique, Lexique, Morphosyntaxe), notés de 0 à 5. Au maximum 5 erreurs, les plus importantes, copiées mot pour mot.";
  };
  var promptOral = function(t1, t2, tarea, lvl){
    return "Tu es examinateur habilité DELF-DALF. Évalue la production orale d'un apprenant hispanophone à partir de la TRANSCRIPTION AUTOMATIQUE de sa voix (pas de ponctuation fiable, des mots mal reconnus sont possibles : ne pénalise pas l'orthographe, juge le lexique, la construction des phrases, l'organisation du discours et la quantité de parole).\n" +
      "Partie 1 — Entretien dirigé (questions : " + ENTRETIEN.join(" / ") + "), durée " + t1.secs + " s, " + t1.mots + " mots :\n\"\"\"" + String(t1.txt || "(rien)").slice(0, 2500) + "\"\"\"\n" +
      "Partie 2 — " + tarea.type + " « " + tarea.title + " » (niveau visé " + NIV[lvl] + ") : " + tarea.prompt + " Durée " + t2.secs + " s, " + t2.mots + " mots :\n\"\"\"" + String(t2.txt || "(rien)").slice(0, 3500) + "\"\"\"\n" +
      "Réponds uniquement avec un objet JSON : {\"niveau\":\"A2\",\"criteres\":[{\"critere\":\"Réalisation de la tâche\",\"note\":3}],\"points_forts\":\"une phrase en espagnol\",\"a_travailler\":\"une phrase en espagnol\"}\n" +
      "Règles : \"niveau\" vaut Pre-A1, A1, A2, B1, B2 ou C1 (niveau réellement démontré ; au maximum un niveau au-dessus du niveau visé). Si l'apprenant parle très peu (moins de 20 mots au total) ou en espagnol, pas plus de A1. \"criteres\" contient exactement, dans l'ordre et notés de 0 à 5 : Réalisation de la tâche, Lexique, Morphosyntaxe, Cohérence du discours, Aisance.";
  };
  var nivelIA = function(r){ var k = String((r && r.niveau) || "").toLowerCase().replace(/\s/g, ""); return NUM[k] != null ? NUM[k] : null; };

  /* ---------------- escuchar un monólogo largo ---------------- */
  var puedeHablar = function(){ try { return typeof speechSupport === "function" && speechSupport(); } catch (e) { return false; } };
  var escuchaLarga = function(maxS, alParcial){
    var stop = false, finales = [], interim = "", t0 = Date.now(), r = null, fin;
    var p = new Promise(async function(res, rej){
      fin = function(){ if (stop === "hecho") return; stop = "hecho"; try { r && r.stop(); } catch (e) {} try { spStopRec && spStopRec(); } catch (e) {} res({ txt: (finales.join(" ") + " " + interim).replace(/\s+/g, " ").trim(), secs: Math.max(1, Math.round((Date.now() - t0) / 1000)) }); };
      var queda = function(){ return maxS * 1000 - (Date.now() - t0); };
      var tope = setTimeout(function(){ fin(); }, maxS * 1000);
      try {
        var bridge = typeof HAS_BRIDGE === "function" && HAS_BRIDGE() && (function(){ try { return PlexAndroid.speechAvailable(); } catch (e) { return false; } })();
        var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (bridge) {
          /* Android: el reconocedor del sistema escucha por tramos; se encadenan hasta el tiempo */
          while (stop !== "hecho" && queda() > 1500) {
            try { var alts = await speechListen(""); if (alts && alts[0]) { finales.push(alts[0]); alParcial && alParcial(finales.join(" ")); } }
            catch (e) { if (!/no-speech|timeout/i.test(String(e && e.message))) break; }
          }
          clearTimeout(tope); return fin();
        }
        if (SR && typeof IS_CHROME_SPEECH !== "undefined" && IS_CHROME_SPEECH) {
          if (typeof webMicPermission === "function") { var w = await webMicPermission(); if (w !== "ok") { clearTimeout(tope); return rej(new Error(w)); } }
          var arranca = function(){
            if (stop === "hecho" || queda() < 800) return fin();
            r = new SR(); r.lang = "fr-FR"; r.interimResults = true; r.continuous = true; r.maxAlternatives = 1;
            r.onresult = function(e){ interim = ""; for (var i = e.resultIndex; i < e.results.length; i++) { var x = e.results[i]; if (x.isFinal) finales.push(x[0].transcript.trim()); else interim += x[0].transcript; } alParcial && alParcial((finales.join(" ") + " " + interim).trim()); };
            r.onerror = function(e){ if (/not-allowed|service-not-allowed/.test(e.error || "")) { clearTimeout(tope); stop = "hecho"; rej(new Error("not-allowed")); } };
            r.onend = function(){ if (interim) { finales.push(interim.trim()); interim = ""; } if (stop !== "hecho") setTimeout(arranca, 120); };   /* el móvil corta en cada pausa: se reanuda */
            try { r.start(); } catch (e) { setTimeout(arranca, 300); }
          };
          return arranca();
        }
        if (typeof CLOUD_SPEECH === "function" && CLOUD_SPEECH()) {
          var b64 = await recordWav(Math.min(maxS, 60) * 1000);
          var txt = await PCB.transcribe(b64, "audio/wav", "");
          finales.push(String(txt || "").replace(/^\[?silence\]?$/i, "")); clearTimeout(tope); return fin();
        }
        clearTimeout(tope); rej(new Error("unsupported"));
      } catch (e) { clearTimeout(tope); if (finales.length) fin(); else rej(e); }
    });
    return { promesa: p, para: function(){ fin && fin(); } };
  };

  /* ---------------- pantalla ---------------- */
  var abre = function(){
    if (!capa) {
      capa = document.createElement("div"); capa.className = "dgx dg2"; capa.setAttribute("role", "dialog"); capa.setAttribute("aria-modal", "true"); capa.setAttribute("aria-label", "Diagnóstico");
      document.body.appendChild(capa);
      new MutationObserver(function(){ if (capa.hasAttribute("inert")) capa.removeAttribute("inert"); }).observe(capa, { attributes: true, attributeFilter: ["inert"] });
      capa.addEventListener("click", alClic); capa.addEventListener("input", alInput); capa.addEventListener("keydown", function(e){ e.stopPropagation(); if (e.key === "Escape") salir(); });
    }
    capa.hidden = false; document.body.style.overflow = "hidden";
  };
  var cierra = function(){ try { stopAudio(); } catch (e) {} if (rec) { try { rec.para(); } catch (e) {} rec = null; } paraReloj(); if (capa) { capa.hidden = true; capa.innerHTML = ""; } document.body.style.overflow = ""; D = null; try { render(); } catch (e) {} };
  var salir = function(){ if (D && D.fase !== "fin" && D.fase !== "intro" && D.fase !== "reanudar") { guarda(); try { toast("Guardé tu avance: podrás seguir donde ibas."); } catch (e) {} } cierra(); };
  var gato = function(m){ try { return catSVG(gEnsure().cat, { mood: m || "happy" }); } catch (e) { return ""; } };
  var reloj = null; var paraReloj = function(){ if (reloj) { clearInterval(reloj); reloj = null; } };
  var chips = function(){
    var actual = SECS[D.si];
    return '<div class="dg2-prog">' + SECS.map(function(s, i){ return '<span data-s="' + s + '" class="' + (i < D.si ? "ok" : s === actual && D.fase !== "intro" ? "on" : "") + '" title="' + SECN[s] + '"><i>' + SECI[s] + "</i><b>" + SECN[s] + "</b></span>"; }).join("") + "</div>";
  };
  var marco = function(cuerpo, pie, sub){
    return '<div class="dgx-top"><button class="dgx-x" data-d2="salir" aria-label="Salir y guardar">✕</button><b>Diagnóstico MCER</b><span>' + esc(sub || "") + "</span></div>" + chips() +
      '<div class="dgx-body"><div class="dgx-wrap dg2-wrap">' + cuerpo + "</div></div>" + (pie ? '<div class="dgx-pie"><div class="dgx-wrap">' + pie + "</div></div>" : "");
  };
  var pinta = function(){
    if (!D || !capa) return;
    paraReloj();
    capa.dataset.sec = D.fase === "intro" || D.fase === "reanudar" ? "intro" : D.fase === "fin" ? "fin" : SECS[D.si] || "intro";   /* color de la sección (plx81) */
    var f = D.fase, h = "";
    if (f === "reanudar") h = marco('<div class="dgx-hero">' + gato("curious") + '<div><small>Tienes un diagnóstico a medias</small><h1>¿Seguimos donde ibas?</h1><p>Ibas en <b>' + SECN[SECS[D.si]] + "</b>. Lo que ya respondiste está guardado.</p></div></div>",
      '<button class="gbtn wide" data-d2="seguirGuardado" data-autofocus>Seguir donde iba</button><button class="gbtn ghost wide" data-d2="deNuevo">Empezar de nuevo</button>');
    else if (f === "intro") h = introHTML();
    else if (f === "sec") h = secHTML();
    else if (f === "auto") h = autoHTML();
    else if (f === "gram" || f === "gramfb") h = gramHTML();
    else if (f === "doc" || f === "docfb") h = docHTML();
    else if (f === "w") h = escrHTML();
    else if (f === "s1" || f === "s2" || f === "sprep") h = hablaHTML();
    else if (f === "evaluando") h = marco('<div class="dg2-eval">' + gato("curious") + "<h2>" + esc(D.evalMsg || "Evaluando…") + '</h2><p>Aplico la rejilla del DELF: realización de la tarea, coherencia, léxico y gramática.</p><div class="dg2-dots"><i></i><i></i><i></i></div></div>', "", "");
    else if (f === "fin") h = finHTML();
    capa.innerHTML = h;
    var foco = capa.querySelector("textarea:not([disabled]),[data-autofocus]"); if (foco) setTimeout(function(){ try { foco.focus({ preventScroll: true }); } catch (e) {} }, 60);
    if (f === "sprep" || f === "s1" || f === "s2") arrancaReloj();
  };

  var introHTML = function(){
    return marco('<div class="dg2-portada"><div class="dg2-p-arte">' + gato("excited") + '</div><div class="dg2-p-tx"><small>Como en los exámenes oficiales</small><h1>Descubre tu nivel de francés</h1><div class="dg2-p-chips"><span>6 partes</span><span>25–40 min</span><span>A1 → C1</span></div></div></div>' +
      '<p class="dg2-lead">Sigue el Marco Común Europeo (MCER) y el formato de los exámenes reales: autoevaluación como DIALANG, gramática como el TCF y documentos y tareas como el DELF y el DALF.</p>' +
      '<ol class="dg2-plan">' +
      '<li data-s="auto"><i>🪞</i><div><b>Autoevaluación <small>1 min</small></b><span>Eliges qué puedes hacer en cada habilidad. Así empiezo en tu nivel.</span></div></li>' +
      '<li data-s="gram"><i>🧩</i><div><b>Gramática y léxico <small>3–4 min</small></b><span>Frases con un hueco, de dificultad creciente.</span></div></li>' +
      '<li data-s="R"><i>📖</i><div><b>Comprensión escrita <small>5–8 min</small></b><span>Documentos completos con 3 preguntas cada uno.</span></div></li>' +
      '<li data-s="L"><i>🎧</i><div><b>Comprensión oral <small>5–8 min</small></b><span>Grabaciones que escuchas dos veces, como en el DELF.</span></div></li>' +
      '<li data-s="W"><i>✍️</i><div><b>Producción escrita <small>8–12 min</small></b><span>Una tarea del examen en tu nivel: postal, mensaje, foro, carta o ensayo.</span></div></li>' +
      '<li data-s="S"><i>🎙️</i><div><b>Producción oral <small>4–6 min</small></b><span>Una entrevista corta y un monólogo, punto de vista o exposé.</span></div></li></ol>' +
      '<p class="dgx-nota">Total: 25 a 40 minutos. Puedes salir cuando quieras: guardo tu avance y sigues después. No hay vidas ni se pierde XP.</p>' +
      '<p class="dgx-nota">La escritura y el habla las corrige la IA con la rejilla oficial del DELF cuando entras con tu cuenta. Es una estimación de tu nivel, no un certificado oficial.</p>',
      '<button class="gbtn wide" data-d2="empezar" data-autofocus>Empezar</button><button class="gbtn ghost wide" data-d2="cero">Nunca he estudiado francés: empezar desde cero</button>', "25–40 min");
  };
  var SECTXT = {
    gram: ["Gramática y léxico", "Como en el TCF («structures de la langue»): completa cada frase con la opción correcta. Las preguntas suben de nivel mientras aciertes."],
    R: ["Comprensión escrita", "Como en el DELF: lees un documento y respondes 3 preguntas. Si aciertas 2, pasas a un documento más difícil; si no, a uno más fácil."],
    L: ["Comprensión oral", "Como en el DELF: lee primero las preguntas, luego escucha. Puedes oír cada grabación dos veces. Usa audífonos si puedes."],
    W: ["Producción escrita", "Una tarea del examen en tu nivel. Escribe directamente, sin traductor: lo que cuenta es lo que puedes hacer tú."],
    S: ["Producción oral", "Dos partes, como en el TCF y el DELF: una entrevista corta sobre ti y una tarea oral. Habla en voz alta: Manzana te escucha."]
  };
  var secHTML = function(){
    var s = SECS[D.si], t = SECTXT[s];
    var extra = s === "S" && !puedeHablar() ? '<p class="dgx-nota">Este dispositivo no puede escucharte. Podrás describir cómo hablas con los descriptores del MCER (quedará como autoevaluación).</p>' : s === "W" && !(window.PCB && PCB.uid) ? '<p class="dgx-nota">Sin sesión iniciada la corrección será automática (una estimación más gruesa). Entra con tu cuenta para que la corrija la IA.</p>' : "";
    return marco('<div class="dgx-bloque"><span class="dgx-num">' + D.si + " de 5</span><i>" + SECI[s] + "</i><h2>" + t[0] + '</h2><p>' + t[1] + "</p>" + extra + "</div>",
      '<button class="gbtn wide" data-d2="secGo" data-autofocus>Comenzar</button>' + (s === "W" || s === "S" ? '<button class="gbtn ghost wide" data-d2="secSkip">Ahora no puedo: saltar esta parte</button>' : ""), SECN[s]);
  };
  var autoHTML = function(){
    var k = SK[D.ai].k;
    return marco('<p class="dgx-ask">' + (D.ai + 1) + " de 4 · " + SN[k].ic + " " + SN[k].n + '</p><h2 class="dg2-h">¿Qué frase te describe mejor?</h2>' +
      '<div class="dg2-can">' + [1, 2, 3, 4, 5].map(function(n){ return '<button class="dg2-c" data-d2="auto" data-n="' + n + '"><em>' + NIV[n] + "</em><span>" + CAN[k][n] + "</span></button>"; }).join("") +
      '<button class="dg2-c cero" data-d2="auto" data-n="0"><em>—</em><span>Todavía no puedo hacer nada de esto en francés.</span></button></div>' +
      '<p class="dgx-nota">Descriptores de la tabla de autoevaluación del MCER (Consejo de Europa).</p>', "", "Autoevaluación");
  };
  var gramHTML = function(){
    var g = D.gram, k = g.items[g.i], it = ITEMS[k] && ITEMS[k].it, fb = D.fase === "gramfb";
    if (!it) return marco("<p>…</p>", "", "");
    var ord = g.ord || (g.ord = mezcla(it.o.map(function(_, i){ return i; })));
    return marco((it.ctx ? '<div class="dgx-ctx">' + it.ctx + "</div>" : "") + '<p class="dgx-q" lang="fr">' + String(it.q).replace(/_{2,}/g, '<span class="dgx-hueco">___</span>') + "</p>" +
      '<div class="dgx-ops">' + ord.map(function(oi, j){ var cl = fb ? (oi === it.a ? " ok" : g.resp === oi ? " ko" : "") : g.resp === oi ? " sel" : ""; return '<button class="dgx-op' + cl + '" data-d2="gop" data-i="' + oi + '"' + (fb ? " disabled" : "") + ' lang="fr"><small>' + (j + 1) + "</small>" + it.o[oi] + "</button>"; }).join("") + "</div>" +
      (fb ? '<div class="dgx-fb ' + (g.resp === it.a ? "ok" : "ko") + '"><b>' + (g.resp === it.a ? "¡Bien!" : "Era «" + plano(it.o[it.a]) + "»") + "</b></div>" : ""),
      fb ? '<button class="gbtn wide" data-d2="gsig" data-autofocus>Continuar</button>' : '<button class="gbtn wide" data-d2="gcomp"' + (g.resp == null ? " disabled" : "") + '>Comprobar</button><button class="gbtn ghost wide" data-d2="gnose">No lo sé</button>',
      "Nivel " + NIV[g.cur] + " · pregunta " + (g.i % POR_GRAM + 1) + " de " + POR_GRAM);
  };
  var docHTML = function(){
    var q = D.q, d = q.doc, fb = D.fase === "docfb", oral = q.sk === "L";
    var preg = q.idx.map(function(qi, j){
      var x = d.qs[qi], r = q.resp[j];
      return '<div class="dg2-pq"><p><b>' + (j + 1) + ".</b> " + esc(x.q) + '</p><div class="dgx-ops">' + x.o.map(function(o, oi){
        var cl = fb ? (oi === x.a ? " ok" : r === oi ? " ko" : "") : r === oi ? " sel" : "";
        return '<button class="dgx-op' + cl + '" data-d2="dop" data-q="' + j + '" data-i="' + oi + '"' + (fb ? " disabled" : "") + "><small>" + "ABC".charAt(oi) + "</small>" + esc(o) + "</button>"; }).join("") + "</div>" +
        (fb && r !== x.a && x.why ? '<p class="dg2-why">' + x.why + "</p>" : "") + "</div>";
    }).join("");
    var doc = oral
      ? '<div class="dg2-audio"><button class="dgx-play" data-d2="play"' + (q.plays >= 2 || q.sonando || fb ? " disabled" : "") + ' aria-label="Escuchar"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></button><div><b>' + esc(d.t) + "</b><small>" + (q.sonando ? "Sonando… escucha con atención" : q.plays >= 2 ? "Ya la escuchaste dos veces" : q.plays === 1 ? "Puedes escucharla una vez más" : "Lee las preguntas y luego toca para escuchar (2 veces)") + "</small></div></div>" +
        (fb && d.script ? '<details class="dg2-script"><summary>Ver la transcripción</summary>' + d.script.map(function(l){ return "<p><b>" + esc(l[0]) + ":</b> " + esc(l[1]) + "</p>"; }).join("") + "</details>" : fb && d.text ? '<details class="dg2-script"><summary>Ver el texto</summary><p lang="fr">' + esc(d.text).replace(/\n+/g, "</p><p lang=\"fr\">") + "</p></details>" : "")
      : '<article class="dg2-doc" lang="fr"><h3>' + esc(d.t) + "</h3>" + (d.intro ? '<p class="dg2-intro" lang="es">' + esc(d.intro) + "</p>" : "") + "<p>" + esc(d.text).replace(/\n+/g, "</p><p>") + "</p></article>";
    var ok = fb ? q.idx.filter(function(qi, j){ return q.resp[j] === d.qs[qi].a; }).length : 0;
    return marco('<div class="dg2-dq' + (oral ? " oral" : "") + '">' + doc + '<div class="dg2-preg">' + preg +
      (fb ? '<div class="dgx-fb ' + (ok >= 2 ? "ok" : "ko") + '"><b>' + ok + " de 3 · " + (ok >= 2 ? "nivel " + NIV[d.lvl] + " superado" : "este nivel todavía cuesta") + "</b></div>" : "") + "</div></div>",
      fb ? '<button class="gbtn wide" data-d2="dsig" data-autofocus>Continuar</button>' : '<button class="gbtn wide" data-d2="dcomp"' + (q.resp.filter(function(x){ return x != null; }).length < 3 ? " disabled" : "") + ">Comprobar</button>",
      SN[q.sk].n + " · documento nivel " + NIV[d.lvl]);
  };
  var escrHTML = function(){
    var W = D.W, t = WT[W.lvl], n = (String(W.txt || "").match(/[A-Za-zÀ-ÿœ'’-]+/g) || []).length;
    return marco('<div class="dg2-tarea"><small>' + esc(t.fmt) + "</small><h2>" + esc(t.t) + '</h2><p lang="fr">' + esc(t.c) + '</p><p class="dg2-es">' + esc(t.es) + " · <b>" + t.min + " palabras mínimo</b></p></div>" +
      '<textarea id="dg2Txt" class="dg2-ta" lang="fr" spellcheck="false" autocapitalize="sentences" placeholder="Écrivez votre texte ici…">' + esc(W.txt || "") + "</textarea>" +
      '<div class="dg2-cont"><span id="dg2N" class="' + (n >= t.min ? "ok" : "") + '">' + n + " / " + t.min + " palabras</span><span>Sin traductor ni corrector: así se evalúa de verdad.</span></div>" +
      '<div class="dgx-tildes">' + "é è ê à â ç ù û ô î ï ë œ « »".split(" ").map(function(c){ return '<button data-d2="tilde" data-t="' + c + '">' + c + "</button>"; }).join("") + "</div>",
      '<button class="gbtn wide" data-d2="wenv" id="dg2Env"' + (n < Math.ceil(t.min / 2) ? " disabled" : "") + ">Entregar mi texto</button>", "Producción escrita · tarea " + NIV[W.lvl]);
  };
  var hablaHTML = function(){
    var S = D.S, f = D.fase;
    if (S.sinMic) {
      return marco('<h2 class="dg2-h">¿Cómo hablas en francés?</h2><p class="dgx-ask">Este dispositivo no puede escucharte. Elige con sinceridad la frase que te describe.</p><div class="dg2-can">' +
        [1, 2, 3, 4, 5].map(function(n){ return '<button class="dg2-c" data-d2="sself" data-n="' + n + '"><em>' + NIV[n] + "</em><span>" + CAN.S[n] + "</span></button>"; }).join("") + '<button class="dg2-c cero" data-d2="sself" data-n="0"><em>—</em><span>Todavía no puedo hablar en francés.</span></button></div>', "", "Producción oral");
    }
    if (f === "s1") {
      return marco('<div class="dg2-tarea"><small>Partie 1 · Entretien dirigé (TCF / DELF)</small><h2>Háblame de ti</h2><p lang="fr">Répondez aux questions, en parlant le plus possible :</p><ol lang="fr">' + ENTRETIEN.map(function(x){ return "<li>" + esc(x) + "</li>"; }).join("") + "</ol></div>" + micHTML(60), micPie(), "Producción oral · parte 1 de 2");
    }
    var T = S.tarea;
    if (f === "sprep") {
      return marco('<div class="dg2-tarea"><small>Partie 2 · ' + esc(T.type) + " · nivel " + T.level + "</small><h2>" + esc(T.title) + '</h2><p lang="fr">' + esc(T.prompt) + '</p><p class="dg2-es">' + esc(T.prompt_es || "") + "</p>" +
        (T.doc ? '<article class="dg2-doc" lang="fr"><p>' + esc(T.doc).replace(/\n+/g, "</p><p>") + "</p></article>" : "") +
        (T.useful && T.useful.length ? '<div class="dg2-util"><b>Te puede servir</b>' + T.useful.slice(0, 6).map(function(u){ return '<span lang="fr">' + esc(u) + "</span>"; }).join("") + "</div>" : "") + "</div>" +
        '<div class="dg2-prep"><span id="dg2Rel">' + S.prepQ + " s</span><small>para preparar (como en el examen)</small></div>",
        '<button class="gbtn wide" data-d2="slisto" data-autofocus>Estoy listo: hablar</button>', "Producción oral · parte 2 de 2");
    }
    return marco('<div class="dg2-tarea"><small>Partie 2 · ' + esc(T.type) + "</small><h2>" + esc(T.title) + '</h2><p lang="fr">' + esc(T.prompt) + "</p></div>" + micHTML(S.talkMax), micPie(), "Producción oral · parte 2 de 2");
  };
  var micHTML = function(max){
    var S = D.S;
    return '<div class="dg2-mic"><button class="dgx-micb' + (S.grabando ? " rec" : "") + '" data-d2="mic" aria-label="' + (S.grabando ? "Terminar" : "Hablar") + '"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">' + (S.grabando ? '<rect x="7" y="7" width="10" height="10" rx="2" fill="currentColor"/>' : '<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0 0 14 0M12 17v4M8 21h8"/>') + "</svg></button>" +
      '<div class="dg2-t"><span id="dg2Rel">' + (S.grabando ? fmt(S.queda) : fmt(max)) + "</span><small>" + (S.grabando ? "Te escucho… toca el cuadrado para terminar" : S.err ? esc(S.err) : "Toca el micrófono y habla hasta " + Math.round(max / 60 * 10) / 10 + " min") + "</small></div></div>" +
      '<p class="dg2-oigo" id="dg2Oigo" lang="fr">' + esc(S.parcial || "") + "</p>";
  };
  var micPie = function(){ var S = D.S; return S.grabando ? "" : '<button class="gbtn ghost wide" data-d2="snomic">No puedo hablar ahora</button>'; };
  var fmt = function(s){ s = Math.max(0, Math.round(s)); return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0"); };
  var arrancaReloj = function(){
    paraReloj();
    reloj = setInterval(function(){
      if (!D) return paraReloj();
      var el = capa.querySelector("#dg2Rel");
      if (D.fase === "sprep") { D.S.prepQ--; if (el) el.textContent = Math.max(0, D.S.prepQ) + " s"; if (D.S.prepQ <= 0) { paraReloj(); D.fase = "s2"; pinta(); } return; }
      if (D.S.grabando) { D.S.queda--; if (el) el.textContent = fmt(D.S.queda); }
    }, 1000);
  };

  /* ---------------- flujo ---------------- */
  var irSec = function(i){
    D.si = i; guarda();
    var s = SECS[i];
    if (!s) return termina();
    if (s === "auto") { D.fase = "auto"; D.ai = D.ai || 0; return pinta(); }
    D.fase = "sec"; pinta();
  };
  var arrancaSec = function(){
    var s = SECS[D.si];
    if (s === "gram") { var m = 0, c = 0; SK.forEach(function(x){ if (D.self[x.k] != null) { m += D.self[x.k]; c++; } }); D.gram.cur = clamp(Math.round(c ? m / c : 2) || 1, 1, 5); return gramNivel(); }
    if (s === "R" || s === "L") return docSiguiente(s, arranque(s));
    if (s === "W") { var g = nivelDe(D.gram).lvl, r = nivelDe(D.R).lvl; D.W = { lvl: clamp(Math.round((g + r) / 2) || 1, 1, 5), txt: "" }; D.fase = "w"; guarda(); return pinta(); }
    if (s === "S") {
      var l = nivelDe(D.L).lvl, g2 = nivelDe(D.gram).lvl, nv = clamp(Math.round((l + g2) / 2) || 1, 1, 5);
      /* sin examinador que conteste: se eligen tareas que se hacen a solas (monólogo, punto de vista, exposé) */
      var sola = function(o){ return !/interaction/i.test(o.type || ""); };
      var pool = (window.__ORAL || []).filter(function(o){ return LVL[o.level] === nv && sola(o); });
      if (!pool.length) pool = (window.__ORAL || []).filter(function(o){ return LVL[o.level] === nv; });
      if (!pool.length) pool = (window.__ORAL || []).filter(function(o){ return Math.abs(LVL[o.level] - nv) <= 1; });
      var t = mezcla(pool)[0];
      D.S = { lvl: nv, tarea: t, prepQ: Math.min(t.prep_s || 60, t.doc ? 120 : 60), talkMax: Math.min(t.talk_s || 90, 120), sinMic: !puedeHablar() };
      D.fase = "s1"; guarda(); return pinta();
    }
  };
  var gramNivel = function(){
    var g = D.gram, pool = mezcla(gramDe(g.cur).filter(function(k){ return g.items.indexOf(k) < 0; })).slice(0, POR_GRAM);
    if (pool.length < POR_GRAM) { g.tried[g.cur] = 0; return irSec(D.si + 1); }
    g.items = g.items.concat(pool); g.okLvl = 0; g.ord = null; g.resp = null; D.fase = "gram"; guarda(); pinta();
  };
  var gramSig = function(){
    var g = D.gram; g.i++; g.ord = null; g.resp = null;
    if (g.i % POR_GRAM !== 0) { D.fase = "gram"; guarda(); return pinta(); }
    var nx = siguienteNivel(g, g.cur, g.okLvl);
    if (nx == null) return irSec(D.si + 1);
    g.cur = nx; gramNivel();
  };
  var docSiguiente = function(sk, lvl){
    var st = D[sk], pool = docs()[sk][lvl] || [], libres = pool.filter(function(d){ return st.used.indexOf(d.id) < 0 && D.R.used.concat(D.L.used).indexOf(d.id) < 0; });
    var d = mezcla(libres.length ? libres : pool)[0];
    if (!d) { st.tried[lvl] = 0; return irSec(D.si + 1); }
    st.used.push(d.id);
    var idx = d.qs.map(function(_, i){ return i; }); idx = d.qs.length > 3 ? mezcla(idx).slice(0, 3).sort(function(a, b){ return a - b; }) : idx;
    D.q = { sk: sk, doc: d, idx: idx, resp: [null, null, null], plays: 0 };
    D.fase = "doc"; guarda(); pinta();
  };
  var docEvalua = function(){
    var q = D.q, ok = q.idx.filter(function(qi, j){ return q.resp[j] === q.doc.qs[qi].a; }).length;
    q.ok = ok; D.fase = "docfb"; try { stopAudio(); } catch (e) {} pinta();
  };
  var docSig = function(){
    var q = D.q, nx = siguienteNivel(D[q.sk], q.doc.lvl, q.ok);
    if (nx == null) return irSec(D.si + 1);
    docSiguiente(q.sk, nx);
  };
  var suena = function(){
    var q = D.q; if (!q || q.plays >= 2 || q.sonando) return;
    q.plays++; q.sonando = true; pinta();
    var listo = function(){ if (D && D.q === q) { q.sonando = false; pinta(); } };
    try {
      var ok = typeof playKey === "function" && playKey(q.doc.audio, q.doc.text || (q.doc.script || []).map(function(l){ return l[1]; }).join(" "), false, listo);
      if (!ok) setTimeout(listo, 1500);
    } catch (e) { listo(); }
  };

  var evalEscrito = async function(){
    var W = D.W, t = WT[W.lvl], m = mide(W.txt);
    D.fase = "evaluando"; D.evalMsg = "Corrigiendo tu texto…"; pinta();
    var r = await ia(promptEscrito(t, W.lvl, W.txt), W.txt), n = nivelIA(r);
    if (n != null) W.res = { lvl: Math.min(n, W.lvl + 1), ia: true, criterios: (r.criteres || []).slice(0, 5).map(function(c){ return { c: String(c.critere || ""), n: clamp(+c.note || 0, 0, 5) }; }), fuertes: String(r.points_forts || ""), trabajar: String(r.a_travailler || ""), errores: (r.erreurs || []).slice(0, 5).map(function(e){ return { e: String(e.extrait || ""), c: String(e.correction || "") }; }) };
    else W.res = { lvl: estima(m, W.lvl, false), ia: false, m: { n: m.n, ttr: Math.round(m.ttr * 10) / 10, con: m.con.slice(2).reduce(function(a, b){ return a + b; }, 0) } };
    irSec(D.si + 1);
  };
  var evalOral = async function(){
    var S = D.S, t1 = S.t1 || { txt: "", secs: 0 }, t2 = S.t2 || { txt: "", secs: 0 };
    t1.mots = mide(t1.txt).n; t2.mots = mide(t2.txt).n;
    D.fase = "evaluando"; D.evalMsg = "Escuchando de nuevo lo que dijiste…"; pinta();
    var r = await ia(promptOral(t1, t2, S.tarea, S.lvl), t1.txt + "\n" + t2.txt), n = nivelIA(r);
    var m = mide(t1.txt + " " + t2.txt, (t1.secs || 0) + (t2.secs || 0));
    if (n != null) S.res = { lvl: Math.min(n, S.lvl + 1), ia: true, criterios: (r.criteres || []).slice(0, 5).map(function(c){ return { c: String(c.critere || ""), n: clamp(+c.note || 0, 0, 5) }; }), fuertes: String(r.points_forts || ""), trabajar: String(r.a_travailler || ""), wpm: m.wpm, mots: m.n };
    else S.res = { lvl: estima(m, S.lvl, true), ia: false, wpm: m.wpm, mots: m.n };
    irSec(D.si + 1);
  };
  var grabar = function(parte){
    var S = D.S, max = parte === 1 ? 60 : S.talkMax;
    if (S.grabando) { if (rec) rec.para(); return; }
    try { stopAudio(); } catch (e) {}
    S.grabando = true; S.queda = max; S.err = ""; S.parcial = ""; pinta();
    rec = escuchaLarga(max, function(t){ S.parcial = t; var o = capa && capa.querySelector("#dg2Oigo"); if (o) o.textContent = t; });
    rec.promesa.then(function(res){
      rec = null; S.grabando = false;
      if (parte === 1) { S.t1 = res; var nt = S.tarea; D.fase = "sprep"; guarda(); return pinta(); }
      S.t2 = res; guarda(); evalOral();
    }).catch(function(e){
      rec = null; S.grabando = false;
      var m = String(e && e.message || "");
      if (/unsupported/.test(m)) { S.sinMic = true; return pinta(); }
      S.err = (typeof spErrText === "function" ? spErrText(m).t : "") || "No pude usar el micrófono."; pinta();
    });
  };

  var termina = function(){
    var G = gEnsure();
    var comp = {
      R: nivelDe(D.R), L: nivelDe(D.L),
      W: D.W.saltada ? { lvl: 0, camino: 0, saltada: true } : { lvl: (D.W.res || {}).lvl || 0, camino: 0 },
      S: D.S.saltada ? { lvl: 0, camino: 0, saltada: true } : { lvl: D.S.selfLvl != null ? D.S.selfLvl : (D.S.res || {}).lvl || 0, camino: 0 }
    };
    var med = SK.filter(function(s){ return !comp[s.k].saltada; }), vals = (med.length ? med : SK).map(function(s){ return comp[s.k].lvl; });
    var glob = Math.floor(vals.reduce(function(a, b){ return a + b; }, 0) / vals.length + .25);   /* media, redondeando hacia abajo salvo que esté a un cuarto del siguiente */
    glob = Math.min(glob, Math.max.apply(null, vals));
    var orden = (med.length ? med : SK).map(function(s){ return s.k; }).sort(function(a, b){ return comp[b].lvl - comp[a].lvl || comp[b].camino - comp[a].camino; });
    var fuerte = orden[0], debil = orden[orden.length - 1];
    if (comp[fuerte].lvl === comp[debil].lvl && comp[fuerte].camino === comp[debil].camino) fuerte = null;
    G.diag = { v: 2, at: hoy(), comp: comp, global: glob, fuerte: fuerte, debil: debil, self: D.self, gram: nivelDe(D.gram),
      w: D.W.res ? Object.assign({ tarea: D.W.lvl }, D.W.res) : null, s: D.S.res ? Object.assign({ tarea: (D.S.tarea || {}).id }, D.S.res) : null, sSelf: D.S.selfLvl != null, min: Math.max(1, Math.round((Date.now() - D.t0) / 60000)) };
    G.ruta = PLX_DIAG.rutaDe(G.diag);
    G.placement = { at: G.diag.at, pct: Math.round(glob / 5 * 100), course: G.ruta.curso, weak: [], byU: {}, rec: G.ruta.leccion ? [G.ruta.leccion] : [], units: 0 };
    try { track = G.ruta.curso; lsSet("cr-track", track); } catch (e) {}
    try { if (typeof addXP === "function") addXP(50); } catch (e) {}
    save(true); borraGuardado();
    D.fase = "fin"; pinta();
  };

  /* medidor A1·A2·B1·B2·C1: segmentos llenos hasta el nivel, el siguiente a medias si va «en camino» */
  var medidor = function(r){
    if (r.saltada) return '<div class="dg2-med vacio"></div>';
    var h = ""; for (var n = 1; n <= 5; n++) h += '<i class="' + (n <= r.lvl ? "on" : n === r.camino ? "medio" : "") + '"><em>' + NIV[n] + "</em></i>";
    return '<div class="dg2-med">' + h + "</div>";
  };
  var finHTML = function(){
    var G = gEnsure(), d = G.diag, R = G.ruta;
    var filas = SK.map(function(s){
      var r = d.comp[s.k], yo = d.self[s.k], pct = Math.max(5, (r.lvl + (r.camino > r.lvl ? .5 : 0)) / 5 * 100);
      var comp = r.saltada || yo == null ? "" : yo > r.lvl ? '<span class="dg2-yo mas">Te pusiste ' + NIV[yo] + ": aquí demostraste " + NIV[r.lvl] + "</span>" : yo < r.lvl ? '<span class="dg2-yo menos">Te pusiste ' + NIV[yo] + ": ¡te subestimas!</span>" : '<span class="dg2-yo igual">Coincide con lo que dijiste</span>';
      var fuente = s.k === "W" && d.w ? (d.w.ia ? "corregido con la rejilla DELF" : "estimación automática") : s.k === "S" && d.s ? (d.s.ia ? "corregido con la rejilla DELF" : "estimación automática") : s.k === "S" && d.sSelf ? "autoevaluación" : s.k === "R" || s.k === "L" ? "documentos superados" : "";
      return '<div data-s="' + s.k + '" class="dgx-bar' + (s.k === d.fuerte ? " fuerte" : "") + (s.k === d.debil ? " debil" : "") + '"><div class="dgx-bt"><i>' + s.ic + "</i><b>" + s.n + " <small>" + s.fr + "</small></b><em>" + (r.saltada ? "sin medir" : NIV[r.lvl] + (r.camino > r.lvl ? " <small>en camino a " + NIV[r.camino] + "</small>" : "")) + '</em></div>' + medidor(r) +
        (r.saltada ? "" : '<p class="dg2-ya"><b>Ya puedes:</b> ' + (CAN[s.k][Math.max(1, r.lvl)] || "") + (r.lvl === 0 ? " (todavía en camino)" : "") + "</p>" + (r.lvl < 5 ? '<p class="dg2-sig"><b>Para llegar a ' + NIV[r.lvl + 1] + ":</b> " + CAN[s.k][r.lvl + 1] + "</p>" : "")) +
        '<div class="dg2-meta">' + comp + (fuente ? "<small>" + fuente + "</small>" : "") + "</div></div>";
    }).join("");
    var corr = function(x, titulo){
      if (!x) return "";
      return '<details class="dg2-corr"><summary>' + titulo + " · " + NIV[x.lvl] + (x.ia ? "" : " (estimación)") + "</summary>" +
        (x.criterios && x.criterios.length ? '<div class="dg2-crit">' + x.criterios.map(function(c){ return "<div><span>" + esc(c.c) + '</span><i><u style="width:' + c.n * 20 + '%"></u></i><b>' + c.n + "/5</b></div>"; }).join("") + "</div>" : "") +
        (x.fuertes ? '<p><b>Lo mejor:</b> ' + esc(x.fuertes) + "</p>" : "") + (x.trabajar ? '<p><b>Para trabajar:</b> ' + esc(x.trabajar) + "</p>" : "") +
        (x.errores && x.errores.length ? '<ul class="dg2-err">' + x.errores.map(function(e){ return '<li lang="fr"><s>' + esc(e.e) + "</s> → <b>" + esc(e.c) + "</b></li>"; }).join("") + "</ul>" : "") +
        (x.wpm ? "<p><small>" + x.mots + " palabras · " + x.wpm + " palabras por minuto</small></p>" : "") +
        (!x.ia ? '<p class="dgx-nota">Sin la IA, calculé el nivel con la extensión, la variedad de vocabulario, los conectores y las estructuras de cada nivel. Entra con tu cuenta y repítelo para una corrección completa.</p>' : "") + "</details>";
    };
    var l = R.leccion && LESSONS.find(function(x){ return x.id === R.leccion; });
    return marco('<div class="dgx-res"><div class="dgx-glob">' + gato("excited") + "<div><small>Tu nivel global (MCER)</small><b>" + NIV[d.global] + "</b><span>" + DESC[d.global] + " · gramática y léxico: " + NIV[d.gram.lvl] + "</span></div></div>" +
      '<div class="dgx-bars">' + filas + "</div>" + corr(d.w, "Tu texto") + corr(d.s, "Tu expresión oral") +
      '<div class="dgx-ruta"><h3>Tu ruta</h3><ol><li><b>Curso: ' + esc((TRACKS.find(function(t){ return t.id === R.curso; }) || {}).label || R.curso) + "</b><span>" + (l ? "Empieza por «" + esc(plano(l.title)) + "»" : "Sigue donde vas") + "</span></li>" +
      "<li><b>Cada día, un refuerzo de " + SN[R.debil].n.toLowerCase() + "</b><span>" + PLX_DIAG.ACT[R.debil].map(function(a){ return a[1]; }).join(" o ") + "</span></li>" +
      (R.fuerte ? "<li><b>Mantén tu fuerte</b><span>" + SN[R.fuerte].n + "</span></li>" : "") +
      "<li><b>Repite el diagnóstico el " + R.repetir.split("-").reverse().join("/") + "</b><span>Así ves cuánto subiste</span></li></ol></div>" +
      '<p class="dgx-nota">Cómo se calculó: autoevaluación con la tabla del MCER (como DIALANG), gramática progresiva (como el TCF), documentos y tareas del formato DELF/DALF. El nivel global es la media de las cuatro habilidades. Es una estimación para orientar tu estudio, no un certificado oficial.</p></div>',
      (l ? '<button class="gbtn wide" data-d2="hacer" data-a="lec:' + l.id + '" data-autofocus>Empezar mi ruta</button>' : '<button class="gbtn wide" data-d2="hacer" data-a="curso" data-autofocus>Empezar mi ruta</button>') + '<button class="gbtn ghost wide" data-d2="ruta">Ver mi ruta en Inicio</button>', "Resultado");
  };

  /* ---------------- eventos ---------------- */
  var alInput = function(e){
    if (e.target.id !== "dg2Txt" || !D) return;
    D.W.txt = e.target.value;
    var n = (D.W.txt.match(/[A-Za-zÀ-ÿœ'’-]+/g) || []).length, t = WT[D.W.lvl], el = capa.querySelector("#dg2N"), b = capa.querySelector("#dg2Env");
    if (el) { el.textContent = n + " / " + t.min + " palabras"; el.className = n >= t.min ? "ok" : ""; }
    if (b) b.disabled = n < Math.ceil(t.min / 2);
    clearTimeout(alInput.t); alInput.t = setTimeout(guarda, 800);
  };
  var alClic = function(e){
    var b = e.target.closest("[data-d2]"); if (!b || b.disabled) return;
    e.preventDefault(); e.stopPropagation();
    var a = b.dataset.d2;
    if (a === "salir") return salir();
    if (a === "seguirGuardado") { var s = SECS[D.si]; if (D.fase === "reanudar") { D.fase = D.prev || "sec"; delete D.prev; if (D.fase === "evaluando") D.fase = s === "W" ? "w" : "s1"; if (s === "S" && (D.fase === "s1" || D.fase === "s2")) { D.S.grabando = false; } } return pinta(); }
    if (a === "deNuevo") { borraGuardado(); D = nuevo(); return pinta(); }
    if (a === "empezar") return irSec(0);
    if (a === "cero") { borraGuardado(); cierra(); return PLX_DIAG.desdeCero(); }
    if (a === "auto") { D.self[SK[D.ai].k] = +b.dataset.n; D.ai++; guarda(); if (D.ai >= 4) return irSec(1); return pinta(); }
    if (a === "secGo") return arrancaSec();
    if (a === "secSkip") { var k = SECS[D.si]; D[k] = Object.assign(D[k] || {}, { saltada: true }); return irSec(D.si + 1); }
    if (a === "gop") { D.gram.resp = +b.dataset.i; return pinta(); }
    if (a === "gcomp" || a === "gnose") { var g = D.gram, it = ITEMS[g.items[g.i]].it; if (a === "gnose") g.resp = -1; if (g.resp === it.a) g.okLvl++; D.fase = "gramfb"; return pinta(); }
    if (a === "gsig") return gramSig();
    if (a === "dop") { D.q.resp[+b.dataset.q] = +b.dataset.i; return pinta(); }
    if (a === "play") return suena();
    if (a === "dcomp") return docEvalua();
    if (a === "dsig") return docSig();
    if (a === "tilde") { var ta = capa.querySelector("#dg2Txt"); if (ta) { var p = ta.selectionStart || ta.value.length; ta.value = ta.value.slice(0, p) + b.dataset.t + ta.value.slice(ta.selectionEnd || p); ta.focus(); try { ta.setSelectionRange(p + b.dataset.t.length, p + b.dataset.t.length); } catch (x) {} alInput({ target: ta }); } return; }
    if (a === "wenv") { D.W.txt = (capa.querySelector("#dg2Txt") || {}).value || D.W.txt; guarda(); return evalEscrito(); }
    if (a === "mic") return grabar(D.fase === "s1" ? 1 : 2);
    if (a === "slisto") { paraReloj(); D.fase = "s2"; return pinta(); }
    if (a === "snomic") { D.S.saltada = true; return irSec(D.si + 1); }
    if (a === "sself") { D.S.selfLvl = +b.dataset.n; return irSec(D.si + 1); }
    if (a === "ruta") { cierra(); go("parcours"); setTimeout(function(){ var c = document.querySelector(".rtx"); if (c) c.scrollIntoView({ behavior: "smooth", block: "center" }); }, 400); return; }
    if (a === "hacer") { var x = b.dataset.a; PLX_DIAG.marca("lec"); cierra(); return PLX_DIAG.hace(x); }
  };

  var abrir = function(){
    if (typeof P !== "undefined" && P) return;
    abre(); capa.innerHTML = '<div class="dgx-top"><button class="dgx-x" data-d2="salir" aria-label="Cerrar">✕</button><b>Diagnóstico MCER</b><span></span></div><div class="dg2-eval">' + gato("curious") + '<h2>Preparando los documentos…</h2><div class="dg2-dots"><i></i><i></i><i></i></div></div>';
    material().then(function(){
      if (!capa || capa.hidden) return;   /* lo cerraron mientras cargaba */
      var g = leeGuardado();
      if (g) { D = g; D.prev = D.fase; D.fase = "reanudar"; } else { D = nuevo(); }
      pinta();
    }).catch(function(){ if (!capa || capa.hidden) return; capa.innerHTML = '<div class="dg2-eval"><h2>No pude cargar los documentos</h2><p>Revisa tu conexión e inténtalo de nuevo.</p><button class="gbtn" data-d2="salir">Cerrar</button></div>'; });
  };
  window.PLX_DIAG2 = { abrir: abrir, estado: function(){ return D; }, pinta: function(){ pinta(); }, mide: mide, estima: estima, docs: docs, material: material, gramDe: gramDe, WT: WT, CAN: CAN };

  /* ---------------- estilos (se suman a los de plx75) ---------------- */
  var st = document.createElement("style"); st.id = "plx77";
  st.textContent = [
    ".dg2-prog{display:grid;grid-template-columns:repeat(6,1fr);gap:5px;max-width:900px;width:100%;margin:0 auto 6px;padding:0 18px;box-sizing:border-box}",
    ".dg2-prog span{display:flex;align-items:center;justify-content:center;gap:5px;padding:6px 4px;border-radius:10px;background:var(--surf3);font-size:.74rem;color:var(--faint);min-width:0}",
    ".dg2-prog b{font-weight:800;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dg2-prog i{font-style:normal}",
    ".dg2-prog span.on{background:var(--wash);color:var(--brand-ink);box-shadow:inset 0 0 0 2px var(--accent)}.dg2-prog span.ok{background:var(--good-bg);color:var(--good-ink)}",
    "@media (max-width:640px){.dg2-prog b{display:none}}",
    ".dg2 .dg2-wrap{width:min(900px,100%)}",
    ".dg2 .dgx-top b{white-space:nowrap}.dg2 .dgx-top span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;text-align:right}",
    ".dg2-plan{list-style:none;margin:0 0 12px;padding:0;display:grid;gap:8px}.dg2-plan li{display:flex;gap:12px;align-items:flex-start;background:var(--raise);border-radius:14px;padding:12px 14px;box-shadow:0 0 0 1.5px var(--line)}",
    ".dg2-plan i{font-style:normal;font-size:1.4rem}.dg2-plan b{display:block;font-weight:800}.dg2-plan b small{color:var(--faint);font-weight:700;margin-left:6px}.dg2-plan span{color:var(--stone);font-size:.92rem}",
    ".dg2-h{font-family:var(--serif);font-weight:900;font-size:1.4rem;margin:2px 0 12px}",
    ".dg2-can{display:grid;gap:8px}.dg2-c{all:unset;box-sizing:border-box;cursor:pointer;display:flex;gap:12px;align-items:flex-start;background:var(--raise);border-radius:14px;padding:12px 14px;box-shadow:0 0 0 1.5px var(--line),0 3px 0 var(--line);line-height:1.4}",
    ".dg2-c:hover{box-shadow:0 0 0 2px var(--accent),0 3px 0 var(--accent)}.dg2-c em{flex:none;font-style:normal;font-weight:900;color:var(--accent);min-width:34px}.dg2-c.cero{opacity:.85}",
    ".dg2-dq{display:grid;gap:18px}@media (min-width:860px){.dg2-dq:not(.oral){grid-template-columns:1.1fr 1fr;align-items:start}.dg2-dq:not(.oral) .dg2-doc{position:sticky;top:0}}",
    ".dg2-doc{background:var(--raise);border-radius:16px;padding:16px 18px;box-shadow:0 0 0 1.5px var(--line);line-height:1.65;font-size:1.02rem}.dg2-doc h3{margin:0 0 6px;font-family:var(--serif);font-weight:900}",
    ".dg2-intro{color:var(--stone);font-size:.9rem;margin-top:0}.dg2-preg{display:grid;gap:14px}.dg2-pq>p{margin:0 0 8px;font-weight:700;line-height:1.4}",
    ".dg2-why{margin:6px 0 0;color:var(--stone);font-size:.88rem}",
    ".dg2-audio{display:flex;align-items:center;gap:16px;background:var(--raise);border-radius:18px;padding:16px;box-shadow:0 0 0 1.5px var(--line)}.dg2-audio b{display:block;font-weight:800}.dg2-audio small{color:var(--stone)}",
    ".dg2-script{background:var(--surf2);border-radius:12px;padding:10px 14px}.dg2-script summary{cursor:pointer;font-weight:800;color:var(--accent)}.dg2-script p{margin:6px 0;line-height:1.5}",
    ".dg2-tarea{background:var(--raise);border-radius:16px;padding:14px 16px;box-shadow:0 0 0 1.5px var(--line);margin-bottom:12px}.dg2-tarea small{color:var(--accent);font-weight:800;text-transform:uppercase;letter-spacing:.05em;font-size:.72rem}",
    ".dg2-tarea h2{font-family:var(--serif);font-weight:900;margin:4px 0 8px;font-size:1.3rem}.dg2-tarea p{line-height:1.55;margin:6px 0}.dg2-tarea ol{margin:6px 0;padding-left:20px;line-height:1.6}.dg2-es{color:var(--stone);font-size:.92rem}",
    ".dg2-ta{width:100%;min-height:220px;box-sizing:border-box;border-radius:14px;border:2px solid var(--line);background:var(--raise);color:var(--ink);padding:14px;font:inherit;line-height:1.6;resize:vertical}.dg2-ta:focus{outline:none;border-color:var(--accent)}",
    ".dg2-cont{display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;margin:8px 0;color:var(--stone);font-size:.85rem}.dg2-cont span:first-child{font-weight:800}.dg2-cont .ok{color:var(--good-ink)}",
    ".dg2-mic{display:flex;align-items:center;gap:18px;justify-content:center;margin:18px 0}.dg2-t span{display:block;font-family:var(--serif);font-weight:900;font-size:2rem}.dg2-t small{color:var(--stone)}",
    ".dg2-oigo{min-height:3em;background:var(--surf2);border-radius:12px;padding:10px 12px;color:var(--ink-2);font-style:italic;line-height:1.5}.dg2-oigo:empty{display:none}",
    ".dg2-prep{text-align:center;margin:12px 0}.dg2-prep span{display:block;font-family:var(--serif);font-weight:900;font-size:2.4rem;color:var(--accent)}.dg2-prep small{color:var(--stone)}",
    ".dg2-util{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px}.dg2-util b{width:100%;font-size:.8rem;color:var(--stone)}.dg2-util span{background:var(--surf3);border-radius:99px;padding:4px 10px;font-size:.88rem}",
    ".dg2-eval{min-height:60vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:8px;padding:20px}.dg2-eval svg{width:120px;height:120px}.dg2-eval h2{font-family:var(--serif);font-weight:900;margin:0}.dg2-eval p{color:var(--stone);max-width:420px}",
    ".dg2-dots{display:flex;gap:8px}.dg2-dots i{width:10px;height:10px;border-radius:50%;background:var(--accent);animation:dg2b 1s infinite ease-in-out}.dg2-dots i:nth-child(2){animation-delay:.15s}.dg2-dots i:nth-child(3){animation-delay:.3s}@keyframes dg2b{50%{transform:translateY(-8px);opacity:.5}}",
    ".dg2-ya,.dg2-sig{margin:8px 0 0;font-size:.88rem;line-height:1.45;color:var(--ink-2)}.dg2-sig{color:var(--stone)}",
    ".dg2-meta{display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap;margin-top:8px}.dg2-meta small{color:var(--faint);font-size:.75rem}",
    ".dg2-yo{font-size:.78rem;font-weight:800;border-radius:99px;padding:3px 9px}.dg2-yo.mas{background:var(--warn-bg);color:var(--warn-ink)}.dg2-yo.menos{background:var(--wash);color:var(--brand-ink)}.dg2-yo.igual{background:var(--good-bg);color:var(--good-ink)}",
    ".dg2-corr{background:var(--raise);border-radius:16px;padding:12px 14px;box-shadow:0 0 0 1.5px var(--line);margin-bottom:12px}.dg2-corr summary{cursor:pointer;font-weight:800}.dg2-corr p{line-height:1.5}",
    ".dg2-crit{display:grid;gap:6px;margin:10px 0}.dg2-crit div{display:grid;grid-template-columns:minmax(0,1fr) 90px 34px;gap:8px;align-items:center;font-size:.86rem}.dg2-crit i{height:8px;border-radius:99px;background:var(--surf3);overflow:hidden}.dg2-crit u{display:block;height:100%;background:var(--accent)}",
    ".dg2-err{margin:6px 0;padding-left:18px;line-height:1.6}.dg2-err s{color:var(--bad-ink)}"
  ].join("\n");
  document.head.appendChild(st);
})();
