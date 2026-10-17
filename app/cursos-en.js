/* PLEX PLAY English · curso English A1 (MCER A1), escrito para hispanohablantes.
   Solo se descarga cuando el idioma activo es el inglés (lo pide js/idioma.js). Lo arma js/plx121.js con las
   funciones de PLXM (plx66): C elegir, A escuchar y elegir, F completar, M unir, S clasificar, P encontrar el
   error, O ordenar, D dictado. Cada lección trae su explicación: idea, para qué sirve, regla, tabla, ejemplos
   y el error típico del hispanohablante. */
window.__EN_CURSOS = window.__EN_CURSOS || {};
window.__EN_CURSOS["en-a1"] = function(M){
var C=M.C,A=M.A,F=M.F,Mt=M.M,S=M.S,P=M.P,O=M.O,L=M.L,U=M.U,Sec=M.Sec;
var D=function(say,why){ var x=M.D(say,why); x.ask="Escucha la frase y escríbela completa. Puedes oírla despacio."; return x; };
var DW=function(say,nota){ return D(say,"Dictado: la frase era <b>"+say+"</b>. "+(nota||"Revisa las mayúsculas de <i>I</i>, las contracciones y la <i>-s</i> final.")); };

return [

/* ============================================================ 1 */
Sec("EN·A1·1","First steps","Saluda, preséntate, di tu edad y deletrea tu nombre: lo esencial para tu primer contacto en inglés.",[
U("Meeting people",[

L("en-a1-hello","Hello! Nice to meet you","registre",{
 idea:"Para saludar en inglés eliges según la hora y la persona: Hi o Hello sirven casi siempre; Good morning suena más formal.",
 para:"Saludar bien es lo primero que oyen de ti. El inglés no tiene tú y usted: la cortesía se marca con el saludo, con please y thank you, y con el tono.",
 regla:["<b>Hi / Hello</b>: saludo neutro para casi todo. <b>Hey</b> solo con amigos.","<b>Good morning</b> (hasta el mediodía), <b>Good afternoon</b> (hasta las 6 p. m. aprox.), <b>Good evening</b> (al llegar por la noche).","<b>Good night</b> es solo para despedirse o antes de dormir, nunca para saludar.","Al conocer a alguien: <b>Nice to meet you.</b> — <b>Nice to meet you, too.</b>"],
 tabla:[["Situación","Saludo","Despedida"],[["Amigo","Hi! / Hey!","Bye! / See you!"],["Profesor, jefe","Good morning / Hello","Goodbye / Have a nice day"],["De noche","Good evening","Good night"]]],
 ej:[["Hi, I'm Laura. Nice to meet you.","Hola, soy Laura. Encantada."],["Good morning, Mr. Smith.","Buenos días, señor Smith."],["How are you? — I'm fine, thanks.","¿Cómo estás? — Bien, gracias."],["See you tomorrow!","¡Hasta mañana!"]],
 ojo:["Good night! (al llegar a una cena)","Good evening!","«Good night» solo se usa para irse o para ir a dormir."]
},[
 C("Elige el saludo adecuado.","___, Mrs. Brown. How are you?",["Good morning","Good night","Hey"],0,"Son las 9 a. m. y hablas con una profesora: <b>Good morning</b>. <i>Good night</i> es para despedirse por la noche y <i>Hey</i> es demasiado informal.","Son las nueve de la mañana y entras al salón de tu profesora."),
 C("Responde con naturalidad.","— Nice to meet you. — ___",["Nice to meet you, too.","Me too meet you.","Yes, nice."],0,"La respuesta fija es <b>Nice to meet you, too.</b> (encantado también). <i>Too</i> va al final y significa «también»."),
 C("Elige la despedida adecuada.","It's 11 p.m. and you are going to bed. You say: ___",["Good evening","Good night","Good afternoon"],1,"Antes de dormir o al irte por la noche se dice <b>Good night</b>. <i>Good evening</i> se usa al <i>llegar</i>."),
 Mt("Une cada saludo con su momento del día.","Saludo → momento",[["Good morning","antes del mediodía"],["Good afternoon","después del mediodía"],["Good evening","al llegar por la noche"],["Good night","al irte a dormir"]],"<i>Morning</i> = mañana, <i>afternoon</i> = tarde, <i>evening</i> = noche (al llegar) y <i>night</i> = noche (al irse o dormir)."),
 S("Clasifica las expresiones.","¿Saludo o despedida?",["Saludo","Despedida"],[["Hi!",0],["Hello!",0],["Good morning!",0],["How are you?",0],["Bye!",1],["See you later!",1],["Goodbye!",1],["Have a nice day!",1]],"<i>See you later</i> y <i>Have a nice day</i> se dicen al irte; <i>How are you?</i> acompaña al saludo."),
 C("Elige la respuesta correcta.","— How are you? — ___",["I'm fine, thanks. And you?","I have fine.","I'm 20."],0,"A <i>How are you?</i> se responde con el verbo <i>to be</i>: <b>I'm fine, thanks.</b> Nunca «I have fine». <i>I'm 20</i> responde a la edad."),
 F("Escribe la palabra que falta.","Hi, ___ name is Daniel. (mi)",["my"],"«Mi nombre» = <b>my name</b>. En inglés el posesivo va siempre delante del nombre: <i>My name is Daniel.</i>","Te presentas en una videollamada."),
 F("Completa la presentación.","Hello, I ___ Sofía. I'm from Colombia. (soy)",["am","'m"],"«Yo soy» = <b>I am</b> (o <b>I'm</b>). <i>I</i> siempre va en mayúscula.","Es tu primer día en un curso online."),
 P("Encuentra el error y corrígelo.","Good [night] , everybody ! Welcome to the party .","evening","Al <b>llegar</b> a una fiesta por la noche se saluda con <b>Good evening</b>. <i>Good night</i> es para irse.","Llegas a una fiesta a las 8 p. m."),
 O("Ordena la frase: «Encantado de conocerte».",["Nice","to","meet","you"],"La fórmula es fija: <b>Nice to meet you</b>. Literalmente: «agradable conocerte»."),
 A("Escucha y elige lo que oyes.","Good afternoon, Mr. Lee.","¿Qué saludo escuchaste?",["Good afternoon","Good evening","Good morning"],0,"Escuchaste <b>Good afternoon</b>: se usa de mediodía hasta el final de la tarde."),
 DW("Nice to meet you, too.","Fíjate en <i>too</i> (también), con dos <i>o</i>; <i>to</i> con una sola es otra palabra.")
]),

L("en-a1-to-be","I am, you are: the verb to be","conj",{
 idea:"To be es ser y estar a la vez: I am (soy / estoy), you are, he is, she is, it is, we are, they are.",
 para:"Es el verbo más usado del inglés. Lo necesitas para decir quién eres, de dónde eres, cómo estás, tu edad y tu trabajo. En inglés el sujeto nunca se omite: no se dice «Is tired», sino «He is tired».",
 regla:["Formas: <b>I am</b> · <b>you are</b> · <b>he / she / it is</b> · <b>we / they are</b>.","Contracciones (lo normal al hablar): <b>I'm, you're, he's, she's, it's, we're, they're</b>.","Negativo: añade <b>not</b>: <i>I'm not</i>, <i>she isn't</i>, <i>they aren't</i>.","Pregunta: invierte verbo y sujeto: <b>Are you</b> a student? — Yes, I am. / No, I'm not."],
 tabla:[["Sujeto","Afirmativo","Negativo","Pregunta"],[["I","I'm","I'm not","Am I…?"],["you / we / they","you're","you aren't","Are you…?"],["he / she / it","she's","she isn't","Is she…?"]]],
 ej:[["I'm a student.","Soy estudiante."],["She's tired today.","Ella está cansada hoy."],["We aren't from Spain.","No somos de España."],["Are you Colombian? — Yes, I am.","¿Eres colombiano? — Sí."],["It's cold.","Hace frío."]],
 ojo:["Is very cold today.","It's very cold today.","El inglés necesita sujeto siempre: con el clima y la hora se usa «it»."]
},[
 C("Elige la forma correcta de to be.","My brother ___ a doctor.",["is","are","am"],0,"<i>My brother</i> = <i>he</i>, así que va <b>is</b>: <i>My brother is a doctor.</i> Fíjate también en el artículo <i>a</i> delante de la profesión."),
 C("Elige la forma correcta.","My parents ___ at home.",["is","are","am"],1,"<i>My parents</i> = <i>they</i>: <b>are</b>. En español «están» y en inglés <i>are</i> sirve para ser y estar."),
 F("Escribe la contracción de «I am».","___ from Pamplona.",["I'm","I am"],"<b>I'm</b> = <i>I am</i>. Al hablar casi siempre se contrae.","Te presentas en un intercambio."),
 F("Escribe el negativo con contracción.","She ___ my sister, she's my cousin. (no es)",["isn't","is not","'s not"],"Negativo de <i>she is</i>: <b>she isn't</b> (o <i>she's not</i>).","Aclaras quién es una chica en una foto."),
 Mt("Une cada sujeto con su forma de to be.","Sujeto → to be",[["I","am"],["you","are"],["she","is"],["it","is"],["we","are"],["they","are"]],"Solo hay tres formas: <i>am</i> (solo con I), <i>is</i> (he, she, it) y <i>are</i> (you, we, they)."),
 C("Elige la pregunta correcta.","«¿Estás cansado?»",["Are you tired?","You are tired?","Do you tired?"],0,"Con <i>to be</i> la pregunta se hace invirtiendo: <b>Are you tired?</b> No se usa <i>do</i> con <i>to be</i>."),
 C("Elige la respuesta corta.","— Is she a teacher? — Yes, ___",["she is.","she's.","is."],0,"La respuesta corta afirmativa no se contrae: <b>Yes, she is.</b> Decir «Yes, she's» es incorrecto."),
 P("Encuentra el error y corrígelo.","[Is] very hot in Cartagena .","It's","En inglés no se omite el sujeto: <b>It's very hot</b>. Con el clima, la hora y las distancias se usa <i>it</i>.","Describes el clima de la costa."),
 S("Clasifica según la forma de to be.","¿Is o are?",["is","are"],[["my mother",0],["the city",0],["Carlos",0],["it",0],["my friends",1],["we",1],["you",1],["the books",1]],"Singular (he, she, it) → <i>is</i>. Plural y <i>you</i> → <i>are</i>."),
 O("Ordena la pregunta: «¿De dónde eres?».",["Where","are","you","from","?"],"La palabra de pregunta va primero, luego el verbo y el sujeto: <b>Where are you from?</b> La preposición <i>from</i> queda al final."),
 A("Escucha y elige lo que oyes.","They aren't at school today.","¿Qué escuchaste?",["They aren't at school today.","They are at school today.","There aren't schools today."],0,"Escuchaste el negativo <b>aren't</b>: la <i>t</i> final suena suave pero cambia todo el sentido."),
 DW("We're students at the university.","<i>We're</i> lleva apóstrofo: es la contracción de <i>we are</i>.")
]),

L("en-a1-numbers","Numbers, age and the alphabet","voc",{
 idea:"Para decir tu edad en inglés usas to be, no to have: I'm 20 (years old).",
 para:"Números, edad y deletrear tu nombre aparecen en cualquier formulario, llamada o examen oral. El error más famoso del hispanohablante es «I have 20 years».",
 regla:["Edad: <b>I'm 20</b> o <b>I'm 20 years old</b>. Pregunta: <b>How old are you?</b>","13–19 terminan en <b>-teen</b> (fourteen) y suenan fuerte al final: four<b>TEEN</b>. Las decenas terminan en <b>-ty</b> (forty) y suenan fuerte al principio: <b>FOR</b>ty.","Deletrear: <b>How do you spell it?</b> Ojo con las letras que confundimos: <b>e</b> (i:), <b>i</b> (ai), <b>a</b> (ei), <b>g</b> (yi:), <b>j</b> (yei).","Teléfono: los números se dicen uno a uno; el 0 se dice <b>oh</b> o <b>zero</b>."],
 tabla:[["Número","Inglés","Ojo"],[["13","thirteen","-TEEN fuerte"],["30","thirty","THIR- fuerte"],["15","fifteen","no «fiveteen»"],["50","fifty","no «fivety»"],["100","one hundred","sin -s"]]],
 ej:[["How old are you? — I'm nineteen.","¿Cuántos años tienes? — Tengo diecinueve."],["My phone number is three one oh, five…","Mi número es 3-1-0, 5…"],["How do you spell your name? — S-O-F-I-A.","¿Cómo se escribe tu nombre?"],["She's forty years old.","Ella tiene cuarenta años."]],
 ojo:["I have 20 years.","I'm 20 years old.","La edad se dice con «to be»: «soy 20 años», aunque en español usemos tener."]
},[
 C("Elige la forma correcta.","«Tengo 18 años.»",["I'm 18 years old.","I have 18 years.","I have 18 years old."],0,"La edad va con <i>to be</i>: <b>I'm 18 (years old)</b>. Con <i>have</i> es el error más típico del hispanohablante."),
 C("Elige la pregunta correcta.","«¿Cuántos años tiene tu hermano?»",["How old is your brother?","How many years has your brother?","How old has your brother?"],0,"Para la edad: <b>How old</b> + <i>to be</i>: <b>How old is your brother?</b>"),
 Mt("Une cada número con su forma escrita.","Número → palabra",[["15","fifteen"],["50","fifty"],["12","twelve"],["20","twenty"],["13","thirteen"],["30","thirty"]],"<i>Fifteen</i> y <i>fifty</i> cambian <i>five</i> por <b>fif-</b>; <i>twelve</i> y <i>twenty</i> no siguen la regla y se memorizan."),
 A("Escucha y elige el número.","She's fourteen.","¿Qué edad dijo?",["14","40","4"],0,"Escuchaste <b>fourteen</b> (14): el acento cae al final, four<b>TEEN</b>. En <i>forty</i> (40) cae al principio."),
 A("Escucha y elige el número.","My bus is number forty.","¿Qué número de bus dijo?",["40","14","44"],0,"Escuchaste <b>forty</b> (40): <b>FOR</b>-ty, acento al principio y sin <i>u</i> (no «fourty»)."),
 F("Escribe el número en letras.","There are ___ days in a week. (7)",["seven"],"7 = <b>seven</b>. Una semana tiene <i>seven days</i>."),
 F("Completa la pregunta.","How do you ___ your last name? (deletrear)",["spell"],"«Deletrear» = <b>to spell</b>: <i>How do you spell it?</i>","Llamas a una oficina y te piden tus datos."),
 S("Clasifica los números.","¿Termina en -teen o en -ty?",["-teen (13–19)","-ty (decenas)"],[["sixteen",0],["eighteen",0],["nineteen",0],["thirteen",0],["sixty",1],["eighty",1],["ninety",1],["thirty",1]],"<i>-teen</i> = del 13 al 19; <i>-ty</i> = 20, 30, 40… Al hablar, el acento te dice cuál es."),
 P("Encuentra el error y corrígelo.","My grandmother [has] 80 years old .","is","La edad se dice con <i>to be</i>: <b>My grandmother is 80 years old.</b>","Hablas de tu familia."),
 C("Elige cómo suena la letra.","¿Cómo se dice la letra <b>E</b> en inglés?",["/i:/, como en «see»","/e/, como en «mesa»","/ai/, como en «my»"],0,"La <b>E</b> se dice <b>/i:/</b> (como <i>see</i>), la <i>I</i> se dice /ai/ y la <i>A</i> se dice /ei/. Al deletrear es donde más se confunden."),
 O("Ordena la frase: «Mi número de teléfono es…».",["My","phone","number","is","…"],"<b>My phone number is…</b> En inglés el adjetivo va delante: <i>phone number</i> (número de teléfono)."),
 DW("He's twenty-one years old.","Las decenas con unidades se escriben con guion: <i>twenty-one</i>.")
])
])
]),

/* ============================================================ 2 */
Sec("EN·A1·2","People and things","Presenta a tu familia, nombra cosas con su artículo y describe a las personas.",[
U("My family and my things",[

L("en-a1-family","My family: my, your, his, her","gram",{
 idea:"El posesivo en inglés depende de quién tiene la cosa: his si es de él, her si es de ella. No cambia con el objeto.",
 para:"Para presentar a tu familia y hablar de tus cosas. En español «su» sirve para todo; en inglés tienes que elegir entre his, her, its, their y your.",
 regla:["<b>my</b> (mi) · <b>your</b> (tu / su de usted) · <b>his</b> (su, de él) · <b>her</b> (su, de ella) · <b>its</b> (de una cosa o animal) · <b>our</b> (nuestro) · <b>their</b> (su, de ellos).","Nunca tienen plural: <i>my books</i>, no «mys books».","Para decir de quién es algo: nombre + <b>'s</b>: <i>Ana's car</i> (el carro de Ana). No se dice «the car of Ana».","La familia: <i>mother, father, parents, sister, brother, grandmother, aunt, uncle, cousin, son, daughter, wife, husband</i>."],
 tabla:[["Persona","Posesivo","Ejemplo"],[["I","my","my mother"],["he","his","his sister"],["she","her","her brother"],["they","their","their house"]]],
 ej:[["This is my sister. Her name is Valeria.","Ella es mi hermana. Se llama Valeria."],["My father's name is Jorge.","Mi papá se llama Jorge."],["Juan and his wife live in Cúcuta.","Juan y su esposa viven en Cúcuta."],["Our parents are teachers.","Nuestros papás son profesores."]],
 ojo:["Laura and his brother.","Laura and her brother.","El posesivo concuerda con Laura (ella), no con brother."]
},[
 C("Elige el posesivo correcto.","Laura lives with ___ grandmother.",["her","his","their"],0,"La abuela es <i>de Laura</i> (ella): <b>her</b>. En inglés el posesivo depende del dueño, no de la cosa."),
 C("Elige el posesivo correcto.","Carlos loves ___ cat.",["his","her","its"],0,"El gato es de Carlos (él): <b>his cat</b>."),
 C("Elige la forma correcta.","«El carro de mi papá»",["my father's car","the car of my father","my father car"],0,"Para la posesión con personas se usa <b>'s</b>: <b>my father's car</b>."),
 F("Escribe el posesivo.","Mr. and Mrs. Gómez are here with ___ children. (sus, de ellos)",["their"],"De ellos = <b>their</b>. Ojo: suena igual que <i>there</i> (allí) y <i>they're</i> (ellos son)."),
 F("Escribe la palabra de la familia.","My mother's sister is my ___ . (tía)",["aunt"],"La hermana de tu mamá es tu <b>aunt</b> (tía). El tío es <i>uncle</i>."),
 Mt("Une cada palabra con su pareja.","Masculino → femenino",[["father","mother"],["brother","sister"],["son","daughter"],["husband","wife"],["uncle","aunt"],["grandfather","grandmother"]],"<i>Cousin</i> (primo o prima) es igual para los dos. <i>Parents</i> son los papás, no los parientes (<i>relatives</i>)."),
 P("Encuentra el error y corrígelo.","Sofía and [his] husband live in Bogotá .","her","El esposo es de Sofía (ella): <b>her husband</b>.","Hablas de una amiga casada."),
 P("Encuentra el error y corrígelo.","This is [the house of my uncle] .","my uncle's house","Con personas, la posesión se dice con <b>'s</b>: <b>my uncle's house</b>. «The house of my uncle» es una traducción palabra por palabra.","Enseñas una foto de tu familia."),
 C("Elige la palabra correcta.","«Mis papás son de Cúcuta.»",["My parents are from Cúcuta.","My relatives are from Cúcuta.","My fathers are from Cúcuta."],0,"<b>Parents</b> = papá y mamá. <i>Relatives</i> son los parientes en general y <i>fathers</i> sería «varios papás»."),
 S("Clasifica las palabras.","¿Hombre o mujer?",["Hombre","Mujer"],[["nephew",0],["uncle",0],["son",0],["husband",0],["niece",1],["aunt",1],["daughter",1],["wife",1]],"<i>Nephew</i> = sobrino, <i>niece</i> = sobrina. Se aprenden en parejas."),
 O("Ordena la frase: «Su nombre (de ella) es Ana».",["Her","name","is","Ana"],"<b>Her name is Ana.</b> El posesivo va delante del nombre."),
 A("Escucha y elige lo que oyes.","This is my brother and his wife.","¿De quién es la esposa?",["Del hermano","De quien habla","De una amiga"],0,"Escuchaste <b>his wife</b>: la esposa es del hermano (él)."),
 DW("Our grandparents live in the country.","<i>Grandparents</i> = abuelos; <i>the country</i> aquí es «el campo».")
]),

L("en-a1-articles","A, an, the and plurals","gram",{
 idea:"A y an significan un o una; se elige por el sonido de la palabra siguiente: a book, an apple, an hour.",
 para:"Los artículos aparecen en casi todas las frases. El inglés usa a / an con las profesiones (I'm a nurse) y no usa the para hablar en general (Dogs are friendly).",
 regla:["<b>a</b> delante de sonido de consonante: <i>a car, a university</i> (suena «yu»).","<b>an</b> delante de sonido de vocal: <i>an egg, an hour</i> (la h no suena).","<b>the</b> = el, la, los, las cuando ya sabemos de qué cosa hablamos. Para generalizar no se usa: <i>Coffee is expensive.</i>","Plural: casi siempre <b>-s</b> (cars). Tras s, sh, ch, x: <b>-es</b> (buses, watches). Irregulares: <i>man → men, woman → women, child → children, person → people</i>."],
 tabla:[["Singular","Plural","Regla"],[["a book","books","+ s"],["a bus","buses","+ es"],["a city","cities","y → ies"],["a child","children","irregular"],["a person","people","irregular"]]],
 ej:[["I'm an engineer.","Soy ingeniero."],["She has a dog and two cats.","Ella tiene un perro y dos gatos."],["The coffee here is very good.","El café de aquí es muy bueno."],["Children love games.","A los niños les encantan los juegos."]],
 ojo:["I'm engineer.","I'm an engineer.","Con las profesiones el inglés pone siempre a / an."]
},[
 C("Elige el artículo.","She's ___ architect.",["an","a","the"],0,"<i>Architect</i> empieza con sonido de vocal: <b>an architect</b>. Y con profesiones el artículo es obligatorio."),
 C("Elige el artículo.","It's ___ university in Pamplona.",["a","an","the"],0,"<i>University</i> empieza con sonido «yu» (consonante): <b>a university</b>. Lo que manda es el sonido, no la letra."),
 C("Elige el artículo.","I'll be there in ___ hour.",["an","a","the"],0,"En <i>hour</i> la h no suena: empieza con sonido de vocal, así que <b>an hour</b>."),
 C("Elige la frase que habla en general.","«Me gusta el chocolate.»",["I like chocolate.","I like the chocolate.","I like a chocolate."],0,"Para gustos y generalidades el inglés no usa artículo: <b>I like chocolate.</b> <i>The chocolate</i> sería un chocolate concreto."),
 F("Escribe el plural.","One child, two ___ .",["children"],"<i>Child</i> es irregular: el plural es <b>children</b>."),
 F("Escribe el plural.","There are many ___ in the street. (person)",["people"],"El plural de <i>person</i> es <b>people</b>, y va con verbo en plural: <i>people are</i>."),
 S("Clasifica las palabras.","¿Llevan a o an?",["a","an"],[["dog",0],["university",0],["house",0],["European city",0],["apple",1],["hour",1],["egg",1],["umbrella",1]],"Se elige por el <b>sonido</b>: <i>a university</i> («yu»), <i>a European</i> («yu»), pero <i>an hour</i> (h muda)."),
 Mt("Une cada singular con su plural.","Singular → plural",[["bus","buses"],["city","cities"],["man","men"],["woman","women"],["watch","watches"],["foot","feet"]],"Tras <i>s, ch</i> se añade <i>-es</i>; consonante + <i>y</i> pasa a <i>-ies</i>; <i>man, woman, foot</i> cambian la vocal."),
 P("Encuentra el error y corrígelo.","My mother is [nurse] in a hospital .","a nurse","Con profesiones va el artículo: <b>a nurse</b>. En español decimos «es enfermera», sin artículo.","Hablas del trabajo de tu mamá."),
 P("Encuentra el error y corrígelo.","The [people is] very friendly here .","people are","<i>People</i> es plural: <b>people are</b>. En español «la gente es», en singular, pero en inglés va en plural."),
 O("Ordena la frase: «Ella es una profesora excelente».",["She","is","an","excellent","teacher"],"<i>Excellent</i> empieza por vocal: <b>an excellent teacher</b>. El adjetivo va antes del nombre."),
 DW("There are two buses and three cars.","<i>Buses</i> lleva <i>-es</i> porque termina en <i>s</i>.")
]),

L("en-a1-this-that","This, that, these, those","gram",{
 idea:"This y these son para lo que está cerca; that y those, para lo que está lejos. These y those son plurales.",
 para:"Para señalar cosas al comprar, presentar a alguien (This is my friend) o preguntar ¿qué es eso? (What's that?).",
 regla:["Cerca: <b>this</b> (singular) · <b>these</b> (plural).","Lejos: <b>that</b> (singular) · <b>those</b> (plural).","Para presentar a alguien se usa <b>This is…</b>: <i>This is my friend Pablo.</i>","Al teléfono: <i>Hi, this is Ana.</i> (Hola, habla Ana)."],
 tabla:[["","Singular","Plural"],[["Cerca","this shirt","these shoes"],["Lejos","that car","those houses"]]],
 ej:[["This is my friend, Julián.","Te presento a mi amigo Julián."],["How much are these shoes?","¿Cuánto cuestan estos zapatos?"],["What's that? — It's a bird.","¿Qué es eso? — Es un pájaro."],["Those boys are my cousins.","Esos chicos son mis primos."]],
 ojo:["This shoes are cheap.","These shoes are cheap.","Con un plural va these o those, nunca this o that."]
},[
 C("Elige la palabra correcta.","___ jeans are very nice. (los tienes en la mano)",["These","This","Those"],0,"Están cerca y <i>jeans</i> es plural: <b>these</b>."),
 C("Elige la palabra correcta.","Look at ___ mountain over there!",["that","this","these"],0,"La montaña está lejos (<i>over there</i>) y es singular: <b>that mountain</b>."),
 C("Elige cómo presentas a tu amiga.","«Te presento a Camila.»",["This is Camila.","She is Camila.","Here Camila."],0,"Para presentar se dice <b>This is…</b>: <i>This is Camila.</i>"),
 F("Completa la pregunta.","How much is ___ T-shirt? (esta, la tienes en la mano)",["this"],"Singular y cerca: <b>this</b>. <i>How much is this T-shirt?</i>","Estás en una tienda de ropa."),
 F("Completa la frase.","___ are my parents in the photo over there. (esos)",["Those"],"Plural y lejos: <b>those</b>."),
 S("Clasifica.","¿Singular o plural?",["Singular","Plural"],[["this",0],["that",0],["this book",0],["that girl",0],["these",1],["those",1],["these keys",1],["those students",1]],"<i>This / that</i> van con singular; <i>these / those</i>, con plural."),
 Mt("Une cada palabra con su traducción.","Inglés → español",[["this","este / esta"],["these","estos / estas"],["that","ese / aquel"],["those","esos / aquellos"]],"El inglés solo tiene dos distancias: cerca (<i>this</i>) y lejos (<i>that</i>)."),
 P("Encuentra el error y corrígelo.","Are [this] your keys ?","these","<i>Keys</i> es plural: <b>Are these your keys?</b>","Encuentras unas llaves en la mesa."),
 O("Ordena la pregunta: «¿Qué es eso?».",["What","is","that","?"],"<b>What is that?</b> (o <i>What's that?</i>)."),
 A("Escucha y elige lo que oyes.","These apples are delicious.","¿Qué escuchaste?",["These apples","This apple","Those apples"],0,"<b>These</b> tiene una <i>i</i> larga (/ði:z/) y termina en sonido <i>z</i>; <i>this</i> es corta."),
 C("Elige al teléfono.","Contestas una llamada: «Hola, habla Sara».",["Hi, this is Sara.","Hi, I am talking Sara.","Hi, here speaks Sara."],0,"Al teléfono se dice <b>This is…</b>: <i>Hi, this is Sara.</i>"),
 DW("Those houses are very old.","<i>Those</i> va con plural: <i>houses are</i>.")
]),

L("en-a1-describe","Describing people: adjectives","accord",{
 idea:"En inglés el adjetivo va antes del nombre y nunca cambia: a tall man, two tall women.",
 para:"Para describir a tu familia, a tus amigos o a ti mismo. Es más fácil que en español: el adjetivo no tiene género ni plural.",
 regla:["Orden: <b>adjetivo + nombre</b>: <i>a big house</i>, no «a house big».","El adjetivo <b>no tiene plural</b>: <i>red cars</i>, nunca «reds cars».","Con <i>to be</i> va solo: <i>She is tall.</i>","Para intensificar: <b>very</b> (muy), <b>quite</b> (bastante), <b>a bit</b> (un poco): <i>He's a bit shy.</i>"],
 tabla:[["Español","Inglés","Ojo"],[["una casa grande","a big house","adjetivo antes"],["dos casas grandes","two big houses","sin -s en el adjetivo"],["ella es alta","she is tall","con to be"]]],
 ej:[["My sister is tall and funny.","Mi hermana es alta y divertida."],["He has short black hair.","Él tiene el pelo corto y negro."],["They are very friendly people.","Son personas muy amables."],["I'm a bit shy.","Soy un poco tímido."]],
 ojo:["She has the eyes blue.","She has blue eyes.","El adjetivo va antes y no se pone «the»."]
},[
 C("Elige la frase correcta.","«Una mujer inteligente»",["an intelligent woman","a woman intelligent","an intelligents woman"],0,"Adjetivo antes del nombre: <b>an intelligent woman</b>."),
 C("Elige la frase correcta.","«Tengo dos gatos negros.»",["I have two black cats.","I have two blacks cats.","I have two cats blacks."],0,"El adjetivo no lleva plural: <b>two black cats</b>."),
 C("Elige la frase correcta.","«Ella tiene el pelo largo.»",["She has long hair.","She has the hair long.","She has long hairs."],0,"<b>She has long hair.</b> Sin <i>the</i> y <i>hair</i> (el pelo de la cabeza) no lleva plural."),
 Mt("Une cada adjetivo con su contrario.","Adjetivo → contrario",[["tall","short"],["young","old"],["fat","thin"],["happy","sad"],["friendly","unfriendly"],["quiet","noisy"]],"<i>Short</i> sirve para «bajo» (personas) y para «corto» (cosas)."),
 F("Escribe el adjetivo.","My grandfather is 90. He's very ___ . (viejo)",["old"],"Viejo = <b>old</b>. Para personas mayores también se dice <i>elderly</i>, más amable."),
 S("Clasifica los adjetivos.","¿Aspecto físico o personalidad?",["Aspecto físico","Personalidad"],[["tall",0],["blond",0],["thin",0],["short",0],["shy",1],["funny",1],["friendly",1],["lazy",1]],"Para el aspecto se pregunta <i>What does he look like?</i>; para la personalidad, <i>What is he like?</i>"),
 P("Encuentra el error y corrígelo.","I have two [news] friends from Canada .","new","El adjetivo <i>new</i> no lleva plural: <b>two new friends</b>.","Le cuentas a tu familia sobre tu curso."),
 P("Encuentra el error y corrígelo.","She is [a girl very beautiful] .","a very beautiful girl","El adjetivo (y su <i>very</i>) van antes del nombre: <b>a very beautiful girl</b>."),
 O("Ordena la frase: «Él es un chico muy simpático».",["He","is","a","very","nice","boy"],"<b>He is a very nice boy.</b> <i>Very</i> + adjetivo + nombre."),
 C("Elige el falso amigo correcto.","«Mi hermano es muy sensible: llora con las películas.»",["My brother is very sensitive.","My brother is very sensible.","My brother is very sensibly."],0,"«Sensible» en español = <b>sensitive</b>. <i>Sensible</i> en inglés significa «sensato»."),
 A("Escucha y elige la descripción.","He's short and he has curly hair.","¿Cómo es él?",["Bajo, de pelo rizado","Alto, de pelo liso","Bajo, de pelo corto"],0,"<b>Short</b> = bajo; <b>curly hair</b> = pelo rizado."),
 DW("My best friend is tall and very funny.","Recuerda: <i>very</i> con una sola <i>r</i>; <i>funny</i> con doble <i>n</i>.")
])
])
]),

/* ============================================================ 3 */
Sec("EN·A1·3","My day","Cuenta tu rutina con el presente simple, pregunta con do y does, y di la hora.",[
U("Routines",[

L("en-a1-present-simple","Present simple: I work, she works","conj",{
 idea:"En el presente simple el verbo solo cambia con he, she e it: le añades -s. I work, she works.",
 para:"Para hablar de rutinas, hábitos y cosas que son verdad siempre: dónde vives, qué estudias, a qué hora te levantas. Olvidar la -s de la tercera persona es el error número uno.",
 regla:["I / you / we / they + verbo: <i>I live, they study</i>.","He / she / it + verbo + <b>-s</b>: <i>she lives, he plays</i>.","Tras s, sh, ch, x, o: <b>-es</b> (<i>watches, goes, does</i>). Consonante + y: <b>-ies</b> (<i>studies</i>).","<b>have</b> es irregular: <i>he has</i>."],
 tabla:[["Sujeto","work","study","go","have"],[["I / you / we / they","work","study","go","have"],["he / she / it","works","studies","goes","has"]]],
 ej:[["I live in Pamplona.","Vivo en Pamplona."],["My sister studies medicine.","Mi hermana estudia medicina."],["He goes to the gym every day.","Él va al gimnasio todos los días."],["The class starts at eight.","La clase empieza a las ocho."]],
 ojo:["She work in a bank.","She works in a bank.","Con he, she, it el verbo lleva siempre -s."]
},[
 C("Elige la forma correcta.","My father ___ in a hospital.",["works","work","working"],0,"<i>My father</i> = <i>he</i>: el verbo lleva <b>-s</b>: <b>works</b>."),
 C("Elige la forma correcta.","We ___ English on Mondays.",["study","studies","studys"],0,"Con <i>we</i> el verbo no cambia: <b>study</b>."),
 C("Elige la forma correcta.","Ana ___ two brothers.",["has","have","haves"],0,"<i>Have</i> es irregular: con he/she/it es <b>has</b>."),
 F("Escribe el verbo en presente simple.","She ___ English at the university. (study)",["studies"],"Consonante + y → <b>-ies</b>: <i>study → studies</i>."),
 F("Escribe el verbo en presente simple.","The bus ___ at 7:30. (leave)",["leaves"],"<i>The bus</i> = <i>it</i>: <b>leaves</b>."),
 F("Escribe el verbo en presente simple.","My brother ___ to school by bike. (go)",["goes"],"<i>Go</i> termina en <i>o</i>: añade <b>-es</b> → <b>goes</b>."),
 Mt("Une cada verbo con su forma de tercera persona.","Verbo → he / she / it",[["watch","watches"],["play","plays"],["fly","flies"],["do","does"],["have","has"],["read","reads"]],"<i>Play</i> lleva solo <i>-s</i> porque antes de la <i>y</i> hay una vocal; <i>fly</i> pasa a <i>flies</i>."),
 S("Clasifica las frases.","¿Correcta o incorrecta?",["Correcta","Incorrecta"],[["She speaks French.",0],["They live here.",0],["It rains a lot.",0],["He watches TV.",0],["She speak French.",1],["They lives here.",1],["He watchs TV.",1],["It rain a lot.",1]],"La <i>-s</i> va solo con he/she/it; <i>watch</i> lleva <i>-es</i>."),
 P("Encuentra el error y corrígelo.","My mom [cook] very well .","cooks","<i>My mom</i> = <i>she</i>: <b>cooks</b>.","Hablas de la comida de tu casa."),
 O("Ordena la frase: «Él trabaja en un banco».",["He","works","in","a","bank"],"<b>He works in a bank.</b> Sujeto + verbo con <i>-s</i> + lugar."),
 A("Escucha y elige lo que oyes.","She teaches math at a school.","¿Qué escuchaste?",["She teaches","She teach","She's teaching"],0,"Escuchaste <b>teaches</b>: con <i>-es</i> suena una sílaba más (/'ti:tʃɪz/)."),
 DW("My sister lives in Bogotá and works in a bank.","Las dos formas llevan <i>-s</i>: <i>lives</i> y <i>works</i>.")
]),

L("en-a1-do-does","Questions and negatives with do and does","conj",{
 idea:"Para preguntar y negar en presente simple se usa do o does; con does, el verbo pierde la -s: Does she work?",
 para:"Para hacer preguntas sobre la vida de otros (Do you like…? Where does he live?) y para negar (I don't eat meat). En español basta con la entonación; en inglés hace falta el auxiliar.",
 regla:["Pregunta: <b>Do</b> + I/you/we/they + verbo: <i>Do you speak English?</i>","Con he/she/it: <b>Does</b> + sujeto + verbo <b>sin -s</b>: <i>Does she speak English?</i>","Negativo: <b>don't</b> / <b>doesn't</b> + verbo sin -s: <i>He doesn't eat meat.</i>","Respuestas cortas: <i>Yes, I do. / No, she doesn't.</i>"],
 tabla:[["","I / you / we / they","he / she / it"],[["Pregunta","Do you work?","Does she work?"],["Negativo","I don't work.","She doesn't work."],["Respuesta","Yes, I do.","No, she doesn't."]]],
 ej:[["Do you have a pet? — Yes, I do.","¿Tienes mascota? — Sí."],["Where does your father work?","¿Dónde trabaja tu papá?"],["I don't like coffee.","No me gusta el café."],["She doesn't live here.","Ella no vive aquí."]],
 ojo:["Does she works here?","Does she work here?","La -s ya está en «does»: el verbo va sin -s."]
},[
 C("Elige el auxiliar.","___ your brother play football?",["Does","Do","Is"],0,"<i>Your brother</i> = <i>he</i>: <b>Does</b>. Y el verbo va sin -s: <i>play</i>."),
 C("Elige la pregunta correcta.","«¿Hablas inglés?»",["Do you speak English?","You speak English?","Speak you English?"],0,"En inglés la pregunta necesita <b>do</b>: <b>Do you speak English?</b>"),
 C("Elige el negativo correcto.","«Ella no come carne.»",["She doesn't eat meat.","She don't eat meat.","She doesn't eats meat."],0,"Con <i>she</i>: <b>doesn't</b> + verbo sin -s."),
 C("Elige la respuesta corta.","— Do they live in Cúcuta? — No, ___",["they don't.","they doesn't.","they not."],0,"<i>They</i> → <b>don't</b>: <i>No, they don't.</i>"),
 F("Escribe el auxiliar en negativo.","I ___ watch TV in the morning. (no)",["don't","do not"],"Con <i>I</i>: <b>don't</b> (do not)."),
 F("Completa la pregunta.","Where ___ your mother work? (auxiliar)",["does"],"<i>Your mother</i> = <i>she</i>: <b>Where does your mother work?</b>"),
 S("Clasifica.","¿Do o does?",["do","does"],[["you",0],["they",0],["we",0],["your parents",0],["he",1],["it",1],["Maria",1],["the teacher",1]],"<i>Does</i> solo va con he, she, it (o un nombre en singular)."),
 Mt("Une cada pregunta con su respuesta.","Pregunta → respuesta",[["Do you like pizza?","Yes, I do."],["Does he have a car?","No, he doesn't."],["Do they study here?","Yes, they do."],["Does it rain a lot?","Yes, it does."]],"La respuesta corta repite el auxiliar: <i>do / does / don't / doesn't</i>."),
 P("Encuentra el error y corrígelo.","Does your sister [likes] music ?","like","Con <i>does</i> el verbo va sin -s: <b>Does your sister like music?</b>"),
 P("Encuentra el error y corrígelo.","My father [don't] drink coffee .","doesn't","<i>My father</i> = <i>he</i>: <b>doesn't</b>."),
 O("Ordena la pregunta: «¿Dónde vives?».",["Where","do","you","live","?"],"Palabra de pregunta + <b>do</b> + sujeto + verbo: <b>Where do you live?</b>"),
 DW("Does your brother speak English?","Con <i>does</i>, <i>speak</i> va sin -s.")
]),

L("en-a1-time-routine","What time is it? Daily routine","voc",{
 idea:"La hora se dice con it's: It's seven o'clock, it's half past seven. Y la frecuencia va antes del verbo: I always get up at six.",
 para:"Para contar tu día, quedar con alguien y entender horarios. Los adverbios de frecuencia (always, usually, sometimes, never) hacen que tu rutina suene natural.",
 regla:["Hora en punto: <b>It's eight o'clock.</b> · y media: <b>half past eight</b> · y cuarto: <b>quarter past</b> · menos cuarto: <b>quarter to</b>. También vale <i>eight thirty</i>.","«A las…» = <b>at</b>: <i>at seven</i>.","Frecuencia: <b>always, usually, often, sometimes, never</b>, antes del verbo: <i>I usually have breakfast at seven.</i>","Pero después de <i>to be</i>: <i>I'm always late.</i>"],
 tabla:[["Hora","Se dice"],[["7:00","seven o'clock"],["7:15","quarter past seven / seven fifteen"],["7:30","half past seven / seven thirty"],["7:45","quarter to eight / seven forty-five"]]],
 ej:[["What time is it? — It's half past six.","¿Qué hora es? — Son las seis y media."],["I get up at six o'clock.","Me levanto a las seis."],["She never drinks coffee at night.","Ella nunca toma café por la noche."],["We usually have lunch at one.","Normalmente almorzamos a la una."]],
 ojo:["I get up always at six.","I always get up at six.","El adverbio de frecuencia va antes del verbo principal."]
},[
 C("Elige la hora.","7:30 →",["It's half past seven.","It's half past eight.","It's seven and half."],0,"7:30 = <b>half past seven</b> (media hora pasada de las siete) o <i>seven thirty</i>."),
 C("Elige la hora.","8:45 →",["It's quarter to nine.","It's quarter past eight.","It's quarter to eight."],0,"8:45 = faltan quince para las nueve: <b>quarter to nine</b>."),
 C("Elige la frase correcta.","«Siempre llego tarde.»",["I'm always late.","I always am late.","Always I'm late."],0,"Con <i>to be</i>, el adverbio va después: <b>I'm always late.</b>"),
 C("Elige la frase correcta.","«Nunca desayuno.»",["I never have breakfast.","I don't never have breakfast.","I have never breakfast."],0,"<i>Never</i> ya es negativo: no se usa con <i>don't</i>. Va antes del verbo: <b>I never have breakfast.</b>"),
 F("Escribe la preposición.","The class starts ___ nine o'clock.",["at"],"Con la hora se usa <b>at</b>: <i>at nine o'clock</i>."),
 F("Completa la pregunta.","What ___ is it? — It's five o'clock.",["time"],"«¿Qué hora es?» = <b>What time is it?</b>"),
 Mt("Une cada acción con su traducción.","Rutina → español",[["get up","levantarse"],["have breakfast","desayunar"],["take a shower","ducharse"],["go to bed","acostarse"],["have dinner","cenar"],["get dressed","vestirse"]],"Con las comidas se usa <i>have</i>: <i>have breakfast, have lunch, have dinner</i>."),
 S("Ordena por frecuencia.","¿Mucho o poco?",["Mucho (≥ 70 %)","Poco (≤ 30 %)"],[["always",0],["usually",0],["often",0],["every day",0],["never",1],["rarely",1],["hardly ever",1],["once a year",1]],"De más a menos: <i>always → usually → often → sometimes → rarely → never</i>."),
 P("Encuentra el error y corrígelo.","She [go always] to bed at ten .","always goes","El adverbio va antes del verbo, y con <i>she</i> el verbo lleva -es: <b>She always goes to bed at ten.</b>"),
 O("Ordena la frase: «Normalmente me levanto a las seis».",["I","usually","get","up","at","six"],"<b>I usually get up at six.</b> Adverbio antes del verbo y <i>at</i> con la hora."),
 A("Escucha y elige la hora.","The train leaves at quarter past ten.","¿A qué hora sale el tren?",["10:15","9:45","10:45"],0,"<b>Quarter past ten</b> = 10:15. <i>Past</i> suma; <i>to</i> resta."),
 DW("I usually have lunch at half past twelve.","<i>Half past twelve</i> = 12:30.")
])
])
]),

/* ============================================================ 4 */
Sec("EN·A1·4","Food and the city","Pide en un café, di qué hay en tu ciudad y explica dónde están las cosas.",[
U("Out and about",[

L("en-a1-food","Food and drinks: some and any","voc",{
 idea:"Some se usa en frases afirmativas y en ofrecimientos; any, en preguntas y negativas: I have some milk. Do you have any milk?",
 para:"Para pedir comida, hacer la lista del mercado y ofrecer algo. También aprendes a pedir con educación: I'd like…, Can I have…, please?",
 regla:["Afirmativo: <b>some</b>: <i>There's some bread.</i>","Negativo y pregunta: <b>any</b>: <i>We don't have any eggs. Do you have any water?</i>","Para ofrecer o pedir: <b>some</b>: <i>Would you like some coffee?</i>","Pedir con cortesía: <b>I'd like</b> a coffee, please. · <b>Can I have</b> the bill, please?"],
 tabla:[["","Contables (eggs)","Incontables (milk)"],[["Afirmativo","some eggs","some milk"],["Negativo","not any eggs","not any milk"],["Pregunta","any eggs?","any milk?"]]],
 ej:[["I'd like a coffee, please.","Quisiera un café, por favor."],["Do we have any rice?","¿Tenemos arroz?"],["There's some cheese in the fridge.","Hay queso en la nevera."],["Can I have the bill, please?","¿Me trae la cuenta, por favor?"]],
 ojo:["I want a coffee. (a un mesero)","I'd like a coffee, please.","«I want» suena brusco; «I'd like» es lo cortés."]
},[
 C("Elige la palabra.","We don't have ___ bread.",["any","some","a"],0,"En negativo se usa <b>any</b>: <i>We don't have any bread.</i>"),
 C("Elige la palabra.","Would you like ___ tea?",["some","any","a"],0,"Al ofrecer se usa <b>some</b>, aunque sea pregunta: <i>Would you like some tea?</i>"),
 C("Elige la forma más cortés.","Pides en un restaurante.",["I'd like the chicken, please.","Give me the chicken.","I want chicken."],0,"<b>I'd like…, please</b> es la forma educada de pedir."),
 F("Completa la pregunta.","Are there ___ apples in the kitchen?",["any"],"Pregunta normal (no ofrecimiento): <b>any</b>."),
 F("Completa la frase.","There's ___ milk in the fridge. (algo de)",["some"],"Afirmativo: <b>some</b>."),
 Mt("Une cada alimento con su traducción.","Inglés → español",[["chicken","pollo"],["beef","carne de res"],["rice","arroz"],["beans","fríjoles"],["cheese","queso"],["juice","jugo"]],"<i>Meat</i> es carne en general; <i>beef</i> es la de res."),
 S("Clasifica.","¿Contable o incontable?",["Contable (a / an)","Incontable"],[["an apple",0],["an egg",0],["a banana",0],["a sandwich",0],["water",1],["rice",1],["bread",1],["milk",1]],"Las incontables no llevan <i>a</i> ni plural: <i>some bread</i>, no «a bread» ni «breads»."),
 P("Encuentra el error y corrígelo.","Can I have [a] water , please ?","some","<i>Water</i> es incontable: <b>some water</b> o <i>a glass of water</i>.","Pides en un café."),
 P("Encuentra el error y corrígelo.","There aren't [some] tomatoes .","any","En negativo: <b>any</b>."),
 O("Ordena la frase: «¿Me trae la cuenta, por favor?».",["Can","I","have","the","bill","please","?"],"<b>Can I have the bill, please?</b> En EE. UU. también se dice <i>the check</i>."),
 A("Escucha y elige lo que pide.","I'd like a cheese sandwich and an orange juice, please.","¿Qué pidió?",["Sándwich de queso y jugo de naranja","Sándwich de pollo y café","Ensalada de queso y agua"],0,"Escuchaste <b>a cheese sandwich and an orange juice</b>. <i>An orange</i> lleva <i>an</i> por la vocal."),
 DW("Would you like some coffee?","Al ofrecer se usa <i>some</i>.")
]),

L("en-a1-there-is","There is, there are","gram",{
 idea:"There is significa hay con singular y there are, hay con plural. Hay en español no cambia; en inglés sí.",
 para:"Para describir tu ciudad, tu casa o tu salón: qué hay y qué no hay. En español «hay» sirve para todo; en inglés cambia con el número.",
 regla:["Singular o incontable: <b>There is</b> (There's) a park.","Plural: <b>There are</b> two parks.","Negativo: <i>There isn't a cinema. There aren't any hotels.</i>","Pregunta: <b>Is there</b> a bank near here? <b>Are there</b> any restaurants?"],
 tabla:[["","Singular","Plural"],[["Afirmativo","There's a bank.","There are two banks."],["Negativo","There isn't a bank.","There aren't any banks."],["Pregunta","Is there a bank?","Are there any banks?"]]],
 ej:[["There's a big park in my city.","Hay un parque grande en mi ciudad."],["There are thirty students in my class.","Hay treinta estudiantes en mi clase."],["Is there a pharmacy near here?","¿Hay una farmacia cerca?"],["There aren't any museums in my town.","No hay museos en mi pueblo."]],
 ojo:["There is three supermarkets.","There are three supermarkets.","Con plural se usa «there are»."]
},[
 C("Elige la forma correcta.","___ two cafés on my street.",["There are","There is","It has"],0,"Plural (<i>two cafés</i>): <b>There are</b>. «Tiene» (<i>it has</i>) no se usa para «hay»."),
 C("Elige la forma correcta.","___ a supermarket near my house.",["There's","There are","Is"],0,"Singular: <b>There's</b> (there is)."),
 C("Elige la pregunta correcta.","«¿Hay un cajero por aquí?»",["Is there an ATM near here?","There is an ATM near here?","Are there an ATM near here?"],0,"Pregunta en singular: <b>Is there…?</b>"),
 F("Completa con is o are.","There ___ a lot of people at the concert.",["are"],"<i>People</i> es plural: <b>there are</b>."),
 F("Completa el negativo.","There ___ any milk in the fridge. (no hay)",["isn't","is not"],"<i>Milk</i> es incontable (singular): <b>there isn't any milk</b>."),
 S("Clasifica.","¿There is o there are?",["There is","There are"],[["a bank",0],["some water",0],["a big park",0],["an old church",0],["two hotels",1],["many people",1],["some shops",1],["three museums",1]],"Incontables (<i>water</i>) van con <i>there is</i>; <i>people</i> va con <i>there are</i>."),
 Mt("Une cada lugar con su traducción.","Inglés → español",[["bakery","panadería"],["drugstore","farmacia"],["bookstore","librería"],["library","biblioteca"],["square","plaza"],["church","iglesia"]],"<i>Library</i> es biblioteca (no librería): falso amigo. En EE. UU. la farmacia es <i>drugstore</i> o <i>pharmacy</i>."),
 P("Encuentra el error y corrígelo.","In my city [there is] many restaurants .","there are","<i>Many restaurants</i> es plural: <b>there are</b>."),
 P("Encuentra el error y corrígelo.","[Have] a bank on this street ?","Is there","«¿Hay…?» = <b>Is there…?</b>, no <i>have</i>."),
 O("Ordena la frase: «No hay hoteles en mi pueblo».",["There","aren't","any","hotels","in","my","town"],"<b>There aren't any hotels in my town.</b>"),
 A("Escucha y elige lo que oyes.","There are two libraries in the city center.","¿Qué hay en el centro?",["Dos bibliotecas","Dos librerías","Una biblioteca"],0,"<b>Libraries</b> = bibliotecas (plural de <i>library</i>). Por eso dijo <i>there are</i>."),
 DW("Is there a pharmacy near here?","Pregunta en singular: <i>Is there…?</i>")
]),

L("en-a1-places","In, on, at: places in the city","prep",{
 idea:"Para decir dónde está algo: in (dentro), on (sobre una superficie o en una calle), at (en un punto o lugar concreto), next to, between, opposite.",
 para:"Para explicar dónde vives, dónde quedas con alguien y dónde están las cosas. El español usa «en» para casi todo; el inglés distingue.",
 regla:["<b>in</b>: dentro de un espacio o ciudad: <i>in the kitchen, in Bogotá</i>.","<b>on</b>: sobre una superficie o en una calle: <i>on the table, on Main Street</i>.","<b>at</b>: en un punto concreto o con dirección exacta: <i>at the bus stop, at home, at 25 Park Street</i>.","Posición: <b>next to</b> (al lado de), <b>between</b> (entre), <b>opposite</b> (enfrente de), <b>behind</b> (detrás de), <b>under</b> (debajo de)."],
 tabla:[["Preposición","Uso","Ejemplo"],[["in","dentro, ciudades, países","in my bag, in Colombia"],["on","superficie, calle","on the wall, on 5th Avenue"],["at","punto, casa, trabajo","at home, at work, at the door"]]],
 ej:[["The bank is next to the church.","El banco está al lado de la iglesia."],["I live on Bolívar Street.","Vivo en la calle Bolívar."],["She's at home now.","Ella está en casa ahora."],["The keys are in my bag.","Las llaves están en mi bolso."]],
 ojo:["I'm in home.","I'm at home.","«En casa» es «at home», sin «the»."]
},[
 C("Elige la preposición.","My phone is ___ the table.",["on","in","at"],0,"Sobre una superficie: <b>on the table</b>."),
 C("Elige la preposición.","I live ___ Pamplona.",["in","on","at"],0,"Con ciudades y países: <b>in</b>."),
 C("Elige la preposición.","Meet me ___ the bus stop.",["at","in","on"],0,"Un punto concreto: <b>at the bus stop</b>."),
 C("Elige la frase correcta.","«Estoy en casa.»",["I'm at home.","I'm in home.","I'm in the home."],0,"Expresión fija: <b>at home</b>. También <i>at work</i>, <i>at school</i>."),
 F("Escribe la preposición.","The supermarket is ___ the bank and the cinema. (entre)",["between"],"Entre dos cosas: <b>between</b>."),
 F("Escribe la preposición.","Our hotel is ___ Seventh Avenue. (en, calle)",["on"],"Con nombres de calles en EE. UU.: <b>on</b>: <i>on Seventh Avenue</i>."),
 Mt("Une cada preposición con su significado.","Inglés → español",[["next to","al lado de"],["opposite","enfrente de"],["behind","detrás de"],["under","debajo de"],["between","entre"],["near","cerca de"]],"<i>Opposite</i> es enfrente (cruzando la calle); <i>in front of</i> es delante."),
 S("Clasifica.","¿In, on o at?",["in","on","at"],[["the kitchen",0],["Colombia",0],["the wall",1],["Main Street",1],["home",2],["the door",2],["work",2],["my pocket",0]],"<i>In</i> = dentro; <i>on</i> = superficie o calle; <i>at</i> = punto o lugar de actividad."),
 P("Encuentra el error y corrígelo.","The pictures are [in] the wall .","on","Los cuadros cuelgan <b>on the wall</b> (sobre la superficie)."),
 O("Ordena la frase: «La farmacia está enfrente del parque».",["The","pharmacy","is","opposite","the","park"],"<b>The pharmacy is opposite the park.</b> <i>Opposite</i> no lleva <i>of</i>."),
 A("Escucha y elige dónde está.","The café is behind the museum.","¿Dónde está el café?",["Detrás del museo","Delante del museo","Al lado del museo"],0,"<b>Behind</b> = detrás de."),
 DW("The bank is next to the supermarket.","<i>Next to</i> = al lado de.")
])
])
]),

/* ============================================================ 5 */
Sec("EN·A1·5","Free time","Di lo que sabes hacer, lo que te gusta y organiza tu semana.",[
U("Likes, abilities and plans",[

L("en-a1-can","Can and can't","conj",{
 idea:"Can sirve para decir lo que sabes o puedes hacer y para pedir permiso. Nunca cambia y el verbo que sigue va sin to: She can swim.",
 para:"Para hablar de tus habilidades (I can play the guitar), pedir favores (Can you help me?) y pedir permiso (Can I open the window?).",
 regla:["Forma única: <b>I / you / he / she… can</b> + verbo: <i>He can drive.</i> Sin -s y sin <i>to</i>.","Negativo: <b>can't</b> (cannot): <i>I can't swim.</i>","Pregunta: <b>Can</b> + sujeto + verbo: <i>Can you cook?</i> — <i>Yes, I can. / No, I can't.</i>","Pronunciación: <i>can</i> suena débil (/kən/) en la frase; <i>can't</i> suena fuerte y larga (/kænt/)."],
 tabla:[["Uso","Ejemplo"],[["Habilidad","I can speak two languages."],["Pedir un favor","Can you help me, please?"],["Pedir permiso","Can I sit here?"]]],
 ej:[["I can play the guitar.","Sé tocar la guitarra."],["She can't come today.","Ella no puede venir hoy."],["Can you speak more slowly, please?","¿Puede hablar más despacio, por favor?"],["Can I use your phone?","¿Puedo usar tu teléfono?"]],
 ojo:["She cans swim. / Do you can swim?","She can swim. / Can you swim?","«Can» no lleva -s ni usa «do»."]
},[
 C("Elige la frase correcta.","«Mi hermano sabe nadar.»",["My brother can swim.","My brother cans swim.","My brother can to swim."],0,"<b>Can</b> + verbo sin <i>to</i> y sin <i>-s</i>."),
 C("Elige la pregunta correcta.","«¿Sabes cocinar?»",["Can you cook?","Do you can cook?","You can cook?"],0,"La pregunta se hace invirtiendo: <b>Can you cook?</b> Nunca con <i>do</i>."),
 C("Elige la respuesta corta.","— Can she drive? — No, ___",["she can't.","she doesn't.","she can."],0,"Se repite el modal: <b>No, she can't.</b>"),
 F("Escribe el negativo.","I ___ speak Chinese. (no puedo)",["can't","cannot","can not"],"Negativo: <b>can't</b> (cannot)."),
 F("Completa el pedido.","___ you help me with my homework, please?",["Can","Could"],"Para pedir un favor: <b>Can you…?</b> (<i>Could you…?</i> es aún más cortés)."),
 Mt("Une cada actividad con su traducción.","Inglés → español",[["play the guitar","tocar la guitarra"],["ride a bike","montar en bici"],["swim","nadar"],["draw","dibujar"],["dance","bailar"],["cook","cocinar"]],"Con instrumentos se usa <i>play the</i>: <i>play the piano</i>. Con deportes, sin <i>the</i>: <i>play football</i>."),
 S("Clasifica.","¿Qué expresa can?",["Habilidad","Permiso o favor"],[["I can swim.",0],["She can speak French.",0],["He can't drive.",0],["They can dance.",0],["Can I go out?",1],["Can you open the door?",1],["Can I sit here?",1],["Can you help me?",1]],"Con <i>Can I…?</i> pides permiso; con <i>Can you…?</i> pides un favor."),
 P("Encuentra el error y corrígelo.","He can [plays] the piano very well .","play","Después de <i>can</i>, el verbo va sin -s: <b>He can play the piano.</b>"),
 P("Encuentra el error y corrígelo.","I can [to] speak three languages .","speak","Después de <i>can</i> no va <i>to</i>: <b>I can speak three languages.</b>"),
 O("Ordena la pregunta: «¿Puedo abrir la ventana?».",["Can","I","open","the","window","?"],"<b>Can I open the window?</b> Pedir permiso."),
 A("Escucha: ¿puede o no puede?","I can't come to the party.","¿Puede ir a la fiesta?",["No","Sí","No se sabe"],0,"Escuchaste <b>can't</b>: suena fuerte y larga. <i>Can</i> afirmativo suena corto y débil."),
 DW("Can you speak more slowly, please?","<i>Slowly</i> es el adverbio de <i>slow</i>.")
]),

L("en-a1-likes","I like, I love, I hate + -ing","gram",{
 idea:"Para los gustos se usa like, love o hate seguidos de un nombre o de un verbo con -ing: I love dancing.",
 para:"Para hablar de lo que te gusta y lo que no. En español «me gusta» tiene otra estructura; en inglés el que gusta eres tú: I like music.",
 regla:["<b>I like</b> music (me gusta la música) · <b>I don't like</b> cats (no me gustan los gatos).","Con verbos: <b>like / love / hate + -ing</b>: <i>I like reading.</i>","Escala: <b>love</b> (encantar) → <b>like</b> → <b>don't mind</b> (no me importa) → <b>don't like</b> → <b>hate</b> (odiar).","<i>She likes</i> lleva -s; pregunta: <b>Do you like…?</b> / <b>Does he like…?</b>"],
 tabla:[["Español","Inglés"],[["Me gusta el fútbol","I like football."],["Me encanta bailar","I love dancing."],["No me gusta madrugar","I don't like getting up early."],["¿Te gusta el café?","Do you like coffee?"]]],
 ej:[["I love listening to music.","Me encanta escuchar música."],["My dad hates shopping.","Mi papá odia ir de compras."],["Do you like dogs? — Yes, I do.","¿Te gustan los perros? — Sí."],["She doesn't like swimming.","A ella no le gusta nadar."]],
 ojo:["Me like the music. / I like play football.","I like music. / I like playing football.","El sujeto es «I» y el verbo que sigue va con -ing."]
},[
 C("Elige la frase correcta.","«Me gusta leer.»",["I like reading.","I like read.","Me like reading."],0,"<b>I like</b> + verbo con <b>-ing</b>: <i>I like reading.</i>"),
 C("Elige la frase correcta.","«A mi hermana le encantan los gatos.»",["My sister loves cats.","My sister love cats.","To my sister love the cats."],0,"<i>My sister</i> = <i>she</i>: <b>loves</b>. Y sin <i>the</i> para gustos generales."),
 C("Elige la pregunta correcta.","«¿A él le gusta el fútbol?»",["Does he like football?","Do he like football?","Does he likes football?"],0,"<b>Does</b> + he + <i>like</i> (sin -s)."),
 F("Escribe el verbo en -ing.","I hate ___ the dishes. (wash)",["washing"],"<i>Hate</i> + <b>-ing</b>: <i>washing</i>."),
 F("Escribe el verbo en -ing.","She loves ___ in the sea. (swim)",["swimming"],"<i>Swim</i> dobla la <i>m</i>: <b>swimming</b> (consonante-vocal-consonante corta)."),
 F("Escribe el verbo en -ing.","Do you like ___ ? (dance)",["dancing"],"<i>Dance</i> pierde la <i>e</i>: <b>dancing</b>."),
 Mt("Une cada verbo con su forma en -ing.","Verbo → -ing",[["run","running"],["write","writing"],["play","playing"],["get","getting"],["make","making"],["read","reading"]],"Si termina en <i>e</i>, se quita; si es corto y termina en vocal + consonante, la consonante se dobla."),
 S("Ordena tus gustos.","¿Positivo o negativo?",["Me gusta","No me gusta"],[["I love it.",0],["I like it a lot.",0],["I really enjoy it.",0],["It's great!",0],["I hate it.",1],["I don't like it.",1],["I can't stand it.",1],["It's boring.",1]],"<i>I can't stand it</i> = no lo soporto."),
 P("Encuentra el error y corrígelo.","I like [play] video games .","playing","Después de <i>like</i> el verbo va con -ing: <b>I like playing video games.</b>"),
 O("Ordena la frase: «No me gusta madrugar».",["I","don't","like","getting","up","early"],"<b>I don't like getting up early.</b>"),
 A("Escucha y elige qué le gusta.","My brother loves cooking, but he hates cleaning.","¿Qué odia el hermano?",["Limpiar","Cocinar","Comprar"],0,"<b>Hates cleaning</b> = odia limpiar. Le encanta <i>cooking</i> (cocinar)."),
 DW("I love listening to music.","<i>Listen</i> va con <i>to</i>: <i>listening to music</i>.")
]),

L("en-a1-days-dates","On Monday, in May, at six","prep",{
 idea:"Con el tiempo: on para días y fechas, in para meses, años y partes del día, at para las horas.",
 para:"Para organizar tu semana, dar tu fecha de cumpleaños y quedar con amigos. Los días y los meses en inglés se escriben siempre con mayúscula.",
 regla:["<b>on</b> + día o fecha: <i>on Monday, on May 5th, on my birthday</i>.","<b>in</b> + mes, año, estación o parte del día: <i>in May, in 2026, in the morning</i>. (Excepción: <b>at night</b>.)","<b>at</b> + hora: <i>at six, at noon</i>.","Días y meses con <b>mayúscula</b>: <i>Monday, January</i>."],
 tabla:[["Preposición","Con…","Ejemplo"],[["on","días, fechas","on Friday, on July 20th"],["in","meses, años, estaciones","in December, in summer"],["at","horas, at night","at 8 o'clock, at night"]]],
 ej:[["My birthday is on March 14th.","Mi cumpleaños es el 14 de marzo."],["I have English class on Tuesdays.","Tengo clase de inglés los martes."],["We go to the beach in December.","Vamos a la playa en diciembre."],["The movie starts at nine.","La película empieza a las nueve."]],
 ojo:["In Monday I play football.","On Monday I play football.","Con los días de la semana se usa «on»."]
},[
 C("Elige la preposición.","I have a test ___ Friday.",["on","in","at"],0,"Días de la semana: <b>on Friday</b>."),
 C("Elige la preposición.","My birthday is ___ October.",["in","on","at"],0,"Meses: <b>in October</b>."),
 C("Elige la preposición.","I usually study ___ night.",["at","in","on"],0,"Excepción fija: <b>at night</b>. Pero <i>in the morning, in the afternoon, in the evening</i>."),
 F("Escribe la preposición.","The meeting is ___ 3 p.m.",["at"],"Con la hora: <b>at</b>."),
 F("Escribe la preposición.","She was born ___ 2005.",["in"],"Con años: <b>in</b>."),
 Mt("Une cada día con su traducción.","Inglés → español",[["Monday","lunes"],["Tuesday","martes"],["Wednesday","miércoles"],["Thursday","jueves"],["Friday","viernes"],["Saturday","sábado"]],"<i>Wednesday</i> se pronuncia /'wenzdeɪ/: la primera <i>d</i> no suena. Domingo es <i>Sunday</i>."),
 S("Clasifica.","¿On o in?",["on","in"],[["Sunday",0],["July 4th",0],["my birthday",0],["the weekend (EE. UU.)",0],["August",1],["the summer",1],["2030",1],["the morning",1]],"<i>On</i> para días concretos; <i>in</i> para periodos más largos. En EE. UU. se dice <i>on the weekend</i>."),
 P("Encuentra el error y corrígelo.","We have a party [in] Saturday night .","on","Con días (aunque añadas <i>night</i>): <b>on Saturday night</b>."),
 P("Encuentra el error y corrígelo.","My exam is on [june] 10th .","June","Los meses van con mayúscula: <b>June</b>."),
 O("Ordena la frase: «Juego fútbol los domingos por la mañana».",["I","play","football","on","Sunday","mornings"],"<b>I play football on Sunday mornings.</b> <i>On</i> + día + parte del día."),
 A("Escucha y elige la fecha.","The concert is on Thursday, April 3rd.","¿Cuándo es el concierto?",["Jueves 3 de abril","Martes 3 de agosto","Jueves 13 de abril"],0,"<b>Thursday</b> = jueves; <b>April 3rd</b> (third) = 3 de abril."),
 DW("My birthday is on the twelfth of May.","Las fechas usan ordinales: <i>twelfth</i> = duodécimo.")
])
])
])

];
};

/* vocabulario del curso (la misma forma que vocab.js: el campo «fr» guarda la palabra en inglés, para que los juegos
   y el 1V1 lo usen sin cambios) */
window.__VOCAB_EN = window.__VOCAB_EN || {};
window.__VOCAB_EN["en-a1"] = { themes: [
 { t: "Greetings and introductions", i: [
  ["hello","hola","Hello, my name is Laura.","Hola, me llamo Laura."],["goodbye","adiós","Goodbye, see you tomorrow!","¡Adiós, hasta mañana!"],["please","por favor","A coffee, please.","Un café, por favor."],["thank you","gracias","Thank you for the help.","Gracias por la ayuda."],["sorry","perdón, lo siento","Sorry, I'm late.","Perdón, llegué tarde."],["name","nombre","What's your name?","¿Cómo te llamas?"],["friend","amigo, amiga","This is my friend Carlos.","Él es mi amigo Carlos."],["welcome","bienvenido","Welcome to the class!","¡Bienvenidos a la clase!"],["morning","mañana (parte del día)","Good morning, everybody.","Buenos días a todos."],["night","noche","Good night, Mom.","Buenas noches, mamá."],["fine","bien","I'm fine, thanks.","Estoy bien, gracias."],["meet","conocer (a alguien)","Nice to meet you.","Encantado de conocerte."]] },
 { t: "Family", i: [
  ["mother","mamá, madre","My mother is a teacher.","Mi mamá es profesora."],["father","papá, padre","My father works in a bank.","Mi papá trabaja en un banco."],["parents","papás, padres","My parents live in Cúcuta.","Mis papás viven en Cúcuta."],["sister","hermana","My sister is nineteen.","Mi hermana tiene diecinueve años."],["brother","hermano","I have one brother.","Tengo un hermano."],["grandmother","abuela","My grandmother cooks very well.","Mi abuela cocina muy bien."],["aunt","tía","My aunt lives in Bogotá.","Mi tía vive en Bogotá."],["uncle","tío","My uncle has a farm.","Mi tío tiene una finca."],["cousin","primo, prima","My cousin is my best friend.","Mi primo es mi mejor amigo."],["son","hijo","Their son is five years old.","Su hijo tiene cinco años."],["daughter","hija","She has a daughter.","Ella tiene una hija."],["husband","esposo","Her husband is from Peru.","Su esposo es de Perú."]] },
 { t: "People and adjectives", i: [
  ["tall","alto","My brother is very tall.","Mi hermano es muy alto."],["short","bajo, corto","She has short hair.","Ella tiene el pelo corto."],["young","joven","Our teacher is young.","Nuestro profesor es joven."],["old","viejo","This house is very old.","Esta casa es muy vieja."],["funny","divertido","My dad is really funny.","Mi papá es muy divertido."],["shy","tímido","I'm a bit shy.","Soy un poco tímido."],["friendly","amable, simpático","People here are friendly.","La gente aquí es amable."],["happy","feliz","I'm happy today.","Hoy estoy feliz."],["tired","cansado","We're tired after class.","Estamos cansados después de clase."],["hungry","con hambre","I'm hungry. Let's eat!","Tengo hambre. ¡Comamos!"],["beautiful","hermoso","Pamplona is a beautiful city.","Pamplona es una ciudad hermosa."],["cheap","barato","These shoes are cheap.","Estos zapatos son baratos."]] },
 { t: "Daily routine", i: [
  ["get up","levantarse","I get up at six.","Me levanto a las seis."],["have breakfast","desayunar","We have breakfast at seven.","Desayunamos a las siete."],["work","trabajar","She works in a hospital.","Ella trabaja en un hospital."],["study","estudiar","I study English every day.","Estudio inglés todos los días."],["go to bed","acostarse","He goes to bed at eleven.","Él se acuesta a las once."],["take a shower","ducharse","I take a shower in the morning.","Me ducho por la mañana."],["always","siempre","I always drink coffee.","Siempre tomo café."],["never","nunca","She never eats meat.","Ella nunca come carne."],["usually","normalmente","We usually walk to school.","Normalmente caminamos al colegio."],["sometimes","a veces","Sometimes I cook dinner.","A veces cocino la cena."],["early","temprano","My class starts early.","Mi clase empieza temprano."],["late","tarde","Sorry, I'm late again.","Perdón, otra vez llego tarde."]] },
 { t: "Food and drinks", i: [
  ["water","agua","Can I have some water, please?","¿Me da agua, por favor?"],["coffee","café","I'd like a coffee.","Quisiera un café."],["bread","pan","There's some bread on the table.","Hay pan en la mesa."],["rice","arroz","We eat rice every day.","Comemos arroz todos los días."],["chicken","pollo","I'd like the chicken, please.","Quisiera el pollo, por favor."],["cheese","queso","Do you like cheese?","¿Te gusta el queso?"],["egg","huevo","I have two eggs for breakfast.","Desayuno dos huevos."],["juice","jugo","An orange juice, please.","Un jugo de naranja, por favor."],["milk","leche","There isn't any milk.","No hay leche."],["apple","manzana","An apple a day is good for you.","Una manzana al día es buena para ti."],["menu","carta, menú","Can I see the menu?","¿Puedo ver la carta?"],["bill","cuenta","Can I have the bill, please?","¿Me trae la cuenta, por favor?"]] },
 { t: "Places in the city", i: [
  ["bank","banco","The bank is next to the church.","El banco está al lado de la iglesia."],["park","parque","There's a big park near my house.","Hay un parque grande cerca de mi casa."],["library","biblioteca","I study in the library.","Estudio en la biblioteca."],["drugstore","farmacia","Is there a drugstore near here?","¿Hay una farmacia cerca?"],["supermarket","supermercado","The supermarket opens at eight.","El supermercado abre a las ocho."],["street","calle","I live on Bolívar Street.","Vivo en la calle Bolívar."],["bus stop","parada de bus","Meet me at the bus stop.","Nos vemos en la parada del bus."],["hospital","hospital","My mom works in a hospital.","Mi mamá trabaja en un hospital."],["church","iglesia","The church is very old.","La iglesia es muy antigua."],["square","plaza","There's a café in the square.","Hay un café en la plaza."],["near","cerca de","My house is near the school.","Mi casa está cerca del colegio."],["opposite","enfrente de","The bank is opposite the park.","El banco está enfrente del parque."]] },
 { t: "Free time", i: [
  ["swim","nadar","I can swim very well.","Sé nadar muy bien."],["dance","bailar","She loves dancing.","A ella le encanta bailar."],["cook","cocinar","My brother can't cook.","Mi hermano no sabe cocinar."],["read","leer","I like reading at night.","Me gusta leer por la noche."],["music","música","We listen to music in the car.","Escuchamos música en el carro."],["movie","película","Let's watch a movie.","Veamos una película."],["guitar","guitarra","He plays the guitar.","Él toca la guitarra."],["soccer","fútbol","We play soccer on Sundays.","Jugamos fútbol los domingos."],["weekend","fin de semana","What do you do on the weekend?","¿Qué haces el fin de semana?"],["love","encantar, amar","I love this song.","Me encanta esta canción."],["hate","odiar","I hate getting up early.","Odio madrugar."],["draw","dibujar","My sister can draw very well.","Mi hermana dibuja muy bien."]] },
 { t: "Days and time", i: [
  ["Monday","lunes","I have English on Monday.","Tengo inglés el lunes."],["Tuesday","martes","The test is on Tuesday.","El examen es el martes."],["Wednesday","miércoles","See you on Wednesday!","¡Nos vemos el miércoles!"],["Thursday","jueves","The concert is on Thursday.","El concierto es el jueves."],["Friday","viernes","We go out on Friday night.","Salimos el viernes por la noche."],["Saturday","sábado","I work on Saturday mornings.","Trabajo los sábados por la mañana."],["Sunday","domingo","Sunday is my favorite day.","El domingo es mi día favorito."],["month","mes","My birthday is next month.","Mi cumpleaños es el mes que viene."],["week","semana","I study five days a week.","Estudio cinco días a la semana."],["today","hoy","It's cold today.","Hoy hace frío."],["tomorrow","mañana","See you tomorrow.","Hasta mañana."],["birthday","cumpleaños","When is your birthday?","¿Cuándo es tu cumpleaños?"]] }
].map(function(t){ return { t: t.t, i: t.i.map(function(w){ return { fr: w[0], es: w[1], ex: w[2], exes: w[3], g: "" }; }) }; }) };
