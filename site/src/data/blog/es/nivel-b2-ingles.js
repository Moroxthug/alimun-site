// Artículo (tercer diseño, docs/BLOG_PLAN.md). Datos comprobados el 11 nov 2026:
// Consejo de Europa, MCER, escala global (coe.int bloquea la lectura automática: descriptores B1/B2/C1 reformulados
// y cotejados con los artículos cefr-english (es) y english-b2-level (it), ya verificados; nombres Umbral/Avanzado/
// Dominio operativo eficaz como en la versión del Instituto Cervantes).
// cambridgeenglish.org: resultados del B2 First (180-190 grado A = C1, 173-179 grado B, 160-172 grado C = B2,
// 140-159 = B1, 122-139 sin certificado), formato (Reading and Use of English 1 h 15, Writing 1 h 20, Listening unos
// 40 min, Speaking 14 min por pareja), sample tests gratuitos (digitales por prueba y dos completos en papel),
// test de nivel gratuito "not an official exam". ielts.org: 5,5-6,5 = B2, 7-8 = C1.
// Horas de aprendizaje guiado de Cambridge (support.cambridgeenglish.org bloquea la lectura automática; cifras
// B1 350-400, B2 500-600, C1 700-800 confirmadas en el extracto del buscador y en los artículos ya verificados).
// BOE: Real Decreto 1041/2017 (Intermedio B1 y B2 = nivel B del MCER; descripción del B2 con mediación; anexo II:
// el antiguo Certificado de Nivel Avanzado del RD 1629/2006 equivale al Intermedio B2). Real Decreto 1/2019
// (pruebas de certificación de las EOI: cinco partes con mediación, 65 % del total y 50 % en cada parte,
// candidatos libres sin certificados previos, validez en todo el territorio nacional).
// ACLES, folleto del modelo CertAcles (reconocido por la CRUE y CercleS, niveles A1-C2, cuatro destrezas,
// 60 % recomendado con mínimo del 50 % y 50 % por destreza).
// BOJA núm. 56, 20 mar 2024, Resolución de 14 mar 2024 (bolsas con perfil bilingüe de inglés en Andalucía):
// requisito EOI Intermedio B2 / Avanzado B2 o superior, o certificados del anexo IV (B2: FCE, ISE II, Aptis,
// IELTS 5,5-6,5, Linguaskill 160-179, Oxford Test of English 111-140, entre otros).
// No verificado y por tanto omitido: requisitos B1/B2 generales para obtener títulos de grado (dependen de cada
// universidad), requisitos actuales de C1 para docentes bilingües en otras comunidades, precios de los exámenes.
export default {
  key: 'english-b2-level',
  site: 'es',
  slug: 'nivel-b2-ingles',
  section: 'levels',
  course: 'English',
  published: '2026-11-11',
  updated: '2026-11-11',
  title: 'Nivel B2 de inglés: qué significa, cómo se acredita y cómo saber si lo tienes',
  metaTitle: 'Nivel B2 de inglés: qué es, certificados y test gratis – Alimun',
  desc: 'Qué significa tener un B2 de inglés según el MCER, qué exámenes lo acreditan en España (Cambridge, IELTS, EOI, CertAcles) y cómo hacerte un test B2 gratis.',
  lead: 'El B2 es el nivel de inglés que más se pide en España: en la universidad, en las bolsas de profesorado bilingüe y en muchas ofertas de empleo. Aquí ves qué significa según el Consejo de Europa, **qué certificados lo acreditan** y cómo comprobar si ya lo tienes con un test gratuito y un simulacro oficial.',
  photo: 'english-b2-level-es-reading',
  sticker: { draw: 'parrot', say: 'En el B2 ya no sobrevives en inglés: discutes.' },
  facts: [
    { label: '160-179', text: 'la puntuación del B2 First que da un certificado de nivel B2 en la Cambridge English Scale' },
    { label: 'IELTS 5,5-6,5', text: 'las bandas que el propio IELTS hace corresponder al B2' },
    { n: 65, unit: '%', text: 'de la nota total que necesitas para aprobar la prueba de certificación de una Escuela Oficial de Idiomas' },
    { label: '500-600 horas', text: 'de aprendizaje guiado que indica Cambridge, de forma orientativa, para llegar al B2 desde cero' },
  ],
  blocks: [
    { take: {
      title: 'La respuesta corta',
      text: 'Tener un **B2 de inglés** significa entender las ideas principales de textos complejos, también técnicos de tu campo, y hablar con un nativo con una soltura que hace la conversación fácil para los dos. En España lo acreditas con exámenes como el B2 First, el IELTS, el certificado de Intermedio B2 de una Escuela Oficial de Idiomas o un examen CertAcles de tu universidad. Para saber si estás ahí, empieza con un test B2 gratuito y termina con **un simulacro oficial cronometrado**.',
      draw: 'owl',
    } },

    { h: 'Qué es el B2 según el MCER' },
    { p: 'El B2 es el cuarto de los seis niveles del **Marco Común Europeo de Referencia para las Lenguas** (MCER), que el Consejo de Europa publicó en 2001. Junto con el B1 forma la etapa del usuario independiente, y en la versión española del Marco recibe el nombre de nivel Avanzado. El MCER no cuenta cuántas palabras sabes ni cuántas reglas recitas de memoria: describe lo que **eres capaz de hacer** con la lengua, con frases del tipo «es capaz de».' },
    { p: 'Según la escala global del Consejo de Europa, quien tiene un B2 entiende las ideas principales de textos complejos sobre temas concretos y abstractos, incluidos los debates técnicos de su especialidad. Se relaciona con hablantes nativos con un grado de fluidez y naturalidad que permite que la conversación se desarrolle **sin esfuerzo por ninguna de las dos partes**. Produce textos claros y detallados sobre temas diversos y sabe defender un punto de vista sobre un tema de actualidad, explicando las ventajas y los inconvenientes de cada opción.' },
    { p: 'Llevado al día a día: en el B2 ya no te limitas a apañarte en inglés, **razonas** en inglés. Sigues una reunión y dices que no estás de acuerdo sin quedarte en blanco, ves una serie sin pararla cada dos minutos, lees un artículo de prensa y captas adónde quiere llegar el autor. Sigues cometiendo errores y a veces das un rodeo porque no te sale una palabra, pero casi nunca esos errores impiden que te entiendan.' },
    { p: 'En 2020 el Consejo de Europa publicó el Volumen complementario del MCER, que describe también un nivel intermedio **B2+**. Si un profesor te dice que eres B2+, significa que has consolidado el B2 y ya haces cosas propias del C1, pero todavía no de forma estable en todas las destrezas.' },

    { h3: '¿Intermedio o Avanzado? El lío de los nombres en España' },
    { p: 'Si has estudiado en una Escuela Oficial de Idiomas, es posible que el nombre te despiste. Desde el **Real Decreto 1041/2017**, las EOI llaman a este nivel Intermedio B2, porque el decreto agrupa el B1 y el B2 en el nivel Intermedio, que corresponde al nivel B del MCER. Antes, con el Real Decreto 1629/2006, ese mismo nivel se llamaba Nivel Avanzado. El cuadro de equivalencias del propio decreto lo deja claro: **el antiguo Certificado de Nivel Avanzado equivale al actual Intermedio B2**. Así que, si tienes un certificado de Avanzado de hace años, tienes un B2, no un C1.' },

    { h: 'B1, B2 y C1 comparados' },
    { p: 'La forma más sencilla de entender el B2 es mirar lo que tiene justo debajo y justo encima. El salto de B1 a B2 es el momento en que dejas de **contar** y empiezas a **argumentar**; el de B2 a C1 es cuando el inglés se vuelve flexible, preciso y casi sin esfuerzo. La tabla resume las diferencias más visibles a partir de los descriptores del MCER.' },
    { table: {
      head: ['Destreza', 'B1 (Umbral)', 'B2 (Avanzado)', 'C1 (Dominio operativo eficaz)'],
      rows: [
        ['Comprensión oral', 'Entiendes las ideas principales de un discurso claro sobre temas conocidos.', 'Sigues discursos largos, noticias y películas en lengua estándar, también sobre temas menos familiares.', 'Entiendes discursos largos aunque no estén bien estructurados y captas lo que se dice entre líneas.'],
        ['Comprensión lectora', 'Entiendes textos sencillos sobre temas cotidianos o de trabajo.', 'Entiendes las ideas principales de textos complejos, incluso técnicos de tu campo, y la postura del autor.', 'Entiendes textos largos y exigentes y aprecias el estilo y los matices.'],
        ['Expresión e interacción oral', 'Cuentas experiencias, planes y opiniones con frases sencillas enlazadas.', 'Conversas con soltura con un nativo y defiendes una postura.', 'Te expresas con fluidez y espontaneidad sin tener que buscar las palabras de forma evidente.'],
        ['Expresión escrita', 'Escribes textos sencillos y coherentes sobre temas conocidos.', 'Escribes textos claros y detallados, ensayos e informes que desarrollan un argumento.', 'Escribes textos bien estructurados sobre temas complejos y eliges el registro adecuado.'],
      ],
      note: 'Resumen basado en los descriptores del Consejo de Europa (MCER, escala global y escalas por destreza). Nombres de los niveles según la versión española del Marco.',
    } },
    { p: 'Un detalle importante: casi nadie tiene el mismo nivel en las cuatro destrezas. Es muy típico leer en B2 porque en el trabajo lees correos y documentos en inglés, y hablar en B1 porque tienes pocas ocasiones de conversar. El MCER permite describir cada destreza por separado, y muchos exámenes, como verás, te dan **una nota por destreza**.' },

    { h: 'Cómo suena un inglés de nivel B2' },
    { p: 'En el B2 la diferencia no está tanto en las palabras difíciles como en la forma de enlazar las ideas. Usas conectores para contraponer y conceder, suavizas tus opiniones, hablas de hipótesis y de cosas que podrían haber salido de otra manera. Estas son algunas frases típicas de este nivel, con el motivo por el que las consideramos B2.' },
    { examples: [
      ['**Although** the plan looks good on paper, I\'m not sure it will work in practice.', 'Aunque el plan queda bien sobre el papel, no tengo claro que funcione en la práctica. Una concesión con although: típica de quien argumenta.'],
      ['If we **had booked** earlier, we **would have paid** much less.', 'Si hubiéramos reservado antes, habríamos pagado mucho menos. El tercer condicional, para hablar de lo que pudo haber sido distinto.'],
      ['The report **is being reviewed** by the legal team at the moment.', 'El departamento jurídico está revisando el informe en este momento. Una pasiva en progresivo, muy frecuente en el inglés de trabajo.'],
      ['**It seems to me that** we\'re focusing on the wrong problem.', 'Me da la impresión de que nos estamos centrando en el problema equivocado. Una forma de opinar sin sonar brusco.'],
      ['**On the one hand** remote work saves time; **on the other**, it can feel isolating.', 'Por un lado, teletrabajar ahorra tiempo; por otro, puede aislarte. Sopesar pros y contras es justo uno de los descriptores del B2.'],
      ['I\'d rather you **didn\'t mention** it to the client yet.', 'Preferiría que no se lo comentaras todavía al cliente. Would rather con past simple: una estructura que en el B1 aún no se suele usar.'],
    ] },
    { p: 'Si estas frases te resultan fáciles de entender pero no te saldrían solas al hablar, probablemente estás en esa frontera entre B1 y B2 en la que **entiendes más de lo que produces**. Es lo más normal del mundo: la expresión oral se desbloquea practicando con regularidad, no leyendo más.' },
    { figure: { photo: 'english-b2-level-es-homework-tiles', alt: 'Fichas de madera de un juego de letras que forman la palabra homework sobre un atril, encima de una mesa', caption: 'En el B2 los deberes cambian: menos ejercicios de rellenar huecos y más textos que defienden una idea de principio a fin.' } },

    { h: 'Qué certificados acreditan el B2' },
    { p: 'Un nivel solo cuenta para una universidad, una empresa o una bolsa de trabajo cuando está acreditado. Los certificados de inglés más habituales en España funcionan de formas distintas: unos están pensados para **un nivel concreto** y otros dan una puntuación en una escala única que la propia entidad relaciona con el MCER. Cada organismo hace su propia investigación para alinear sus notas con los niveles, así que las equivalencias que siguen son las que publican ellos mismos.' },
    { h3: 'Cambridge B2 First' },
    { p: 'El **B2 First** es el examen de Cambridge English diseñado para el B2. Tiene cuatro pruebas: Reading and Use of English (1 hora y 15 minutos), Writing (1 hora y 20 minutos), Listening (unos 40 minutos) y Speaking, que se hace en pareja y dura 14 minutos. El resultado se da en la Cambridge English Scale: de 160 a 179 obtienes el certificado de nivel B2, con grado C hasta 172 y grado B desde 173. De 180 a 190 consigues el grado A y un certificado de nivel C1, y de 140 a 159 un certificado de nivel B1. Por debajo de 140 no hay certificado, aunque recibes tu puntuación.' },
    { h3: 'IELTS' },
    { p: 'El IELTS no tiene un examen por nivel: todo el mundo hace la misma prueba y recibe una banda de 0 a 9 en comprensión oral, comprensión lectora, expresión escrita y expresión oral, además de una banda global. Según la explicación que publica el IELTS, una puntuación de **5,5 a 6,5** equivale al B2, y de 7 a 8 al C1. Si te piden un B2 y aceptan el IELTS, comprueba siempre si exigen también un mínimo en cada destreza.' },
    { h3: 'Escuela Oficial de Idiomas' },
    { p: 'El certificado de **Intermedio B2 de una EOI** es un título oficial con validez en todo el territorio nacional. Según el Real Decreto 1/2019, la prueba de certificación tiene cinco partes: comprensión de textos orales, comprensión de textos escritos, producción y coproducción de textos orales, producción y coproducción de textos escritos y mediación. Para aprobar necesitas al menos el **65 % de la nota total** y un mínimo del 50 % en cada una de las cinco partes. Puedes presentarte por libre a cualquier nivel sin tener los certificados de los niveles anteriores; las fechas y la matrícula las fija cada comunidad autónoma.' },
    { h3: 'CertAcles en tu universidad' },
    { p: 'Muchos centros de lenguas universitarios examinan con el modelo **CertAcles**, de la Asociación de Centros de Lenguas en la Enseñanza Superior (ACLES). Este modelo está reconocido por la Conferencia de Rectores de las Universidades Españolas (CRUE) y por la confederación europea CercleS. Evalúa las cuatro destrezas y, para dar por alcanzado el nivel, ACLES recomienda una nota final del 60 % (con un mínimo del 50 %) y al menos el 50 % en cada destreza. Cada centro decide qué idiomas y niveles certifica, así que consulta el centro de lenguas de tu universidad.' },
    { h3: 'Otros exámenes: Linguaskill, Aptis y más' },
    { p: 'También verás en las convocatorias pruebas como Linguaskill, de Cambridge, o Aptis, del British Council, junto con Trinity ISE II, TOEFL iBT, LanguageCert u Oxford Test of English. En la lista de la Junta de Andalucía que verás más abajo, por ejemplo, **Linguaskill de 160 a 179** cuenta como B2. Antes de elegir uno de estos, confirma que la entidad que te lo pide lo tiene en su lista.' },
    { table: {
      head: ['Certificado', 'Cómo acredita el B2', 'En breve'],
      rows: [
        ['Cambridge B2 First', 'De 160 a 179 en la Cambridge English Scale', 'Cuatro pruebas, Speaking en pareja; el certificado no caduca'],
        ['IELTS', 'Bandas de 5,5 a 6,5', 'Una prueba para todos los niveles, banda de 0 a 9 por destreza'],
        ['EOI, Intermedio B2', 'Aprobar la prueba de certificación oficial', 'Cinco partes con mediación; 65 % del total y 50 % en cada parte'],
        ['CertAcles B2', 'Superar el examen de un centro acreditado por ACLES', 'Cuatro destrezas; modelo reconocido por la CRUE'],
        ['Linguaskill', 'De 160 a 179', 'Examen de Cambridge que aparece en listas oficiales como la andaluza'],
      ],
      note: 'Fuentes: cambridgeenglish.org, ielts.org, BOE (Real Decreto 1/2019), acles.es y BOJA. Precios y fechas cambian: consulta la página oficial o tu centro examinador.',
    } },

    { h: 'Dónde se pide el B2 en España' },
    { p: 'El B2 aparece en requisitos de universidades, programas de movilidad, procesos de selección y ofertas de empleo. No hay una regla única para todo el país: cada universidad fija sus requisitos de idiomas y cada administración los suyos en cada convocatoria. Por eso el consejo es siempre el mismo: lee **la normativa o la convocatoria** que te afecta y mira qué nivel y qué certificados aceptan antes de pagar un examen.' },
    { p: 'Un buen ejemplo de cómo se concreta esto es el profesorado bilingüe en Andalucía. En la convocatoria extraordinaria de bolsas de trabajo publicada en el BOJA el 20 de marzo de 2024, para los puestos bilingües de inglés se pedía, entre otras opciones, el **certificado de Intermedio B2 o de Avanzado B2** de una EOI, un nivel superior, o uno de los certificados del anexo de la convocatoria. Para el B2 de inglés, ese anexo incluía el First Certificate de Cambridge, el ISE II de Trinity, Aptis, el IELTS de 5,5 a 6,5, Linguaskill de 160 a 179 y el Oxford Test of English, entre otros.' },
    { p: 'Fíjate en que la misma lista distingue el B2 del C1 con puntuaciones distintas: el IELTS de 7 a 8 o Linguaskill desde 180 cuentan ya como C1. Y en que se trata de **una convocatoria concreta**: otras comunidades y otros años pueden pedir otro nivel o aceptar otros títulos. Si te presentas a una bolsa o a unas oposiciones, la única lista que vale es la de tu convocatoria.' },
    { note: { title: 'Primero el requisito, luego el examen', text: 'Sea una universidad, una bolsa de interinos o una empresa, pregunta siempre **qué certificados aceptan** y qué puntuación piden. Así no pagas un examen que luego no te reconocen.', draw: 'suitcase' } },
    { cta: true },

    { h: 'Cómo saber si tienes un B2: test y simulacros' },
    { p: 'Mucha gente busca «test B2 inglés» o «test inglés B1» esperando una respuesta en cinco minutos. Un test corto es un buen punto de partida, pero mide sobre todo gramática y vocabulario. Para saber si de verdad estás en B2 tienes que poner a prueba también **la comprensión oral, la escritura y la expresión oral**, que son justo lo que un test rápido no ve.' },
    { h3: 'Un test B2 gratuito para empezar' },
    { p: 'En Alimun tienes un **Quiz de inglés B2 gratis**, el «Quiz rápido de inglés: diez preguntas de nivel B2», con la pasiva, el estilo indirecto, wish, used to, phrasal verbs y collocations, y cada respuesta explicada en español. Si te sale flojo, prueba el quiz de nivel B1, que tiene el mismo formato, para ver si te conviene afianzar antes la base. Cambridge English ofrece además un test de nivel gratuito en su web, y la propia Cambridge advierte que **no es un examen oficial** y que el resultado es solo orientativo.' },
    { p: 'La prueba de nivel de Alimun, por su parte, te sitúa entre A1 y C1 en pocos minutos para saber en qué clase empezar. Todos estos tests sirven para orientarte, no para certificar nada.' },
    { h3: 'Un simulacro con materiales oficiales' },
    { p: 'El paso siguiente, y el más fiable antes de un examen de verdad, es un **simulacro con materiales oficiales**. Cambridge publica gratis los sample tests del B2 First: versiones digitales de Listening, Reading and Use of English y Writing, y dos exámenes completos en papel para descargar, con soluciones para algunas partes y la transcripción de un Listening. Si vas a la EOI, tu comunidad autónoma suele publicar modelos de pruebas de certificación de convocatorias anteriores.' },
    { p: 'Para que el simulacro sirva, respeta los tiempos reales: 1 hora y 15 minutos de Reading and Use of English, 1 hora y 20 de Writing y unos 40 minutos de Listening. Hazlo de una sentada, sin diccionario y sin parar el audio. Después corrige con las soluciones y mira **dónde pierdes puntos**, no solo el total. El Writing y el Speaking no se corrigen solos: necesitas a alguien que conozca los criterios del examen.' },
    { figure: { photo: 'english-b2-level-es-stacked-books', alt: 'Libros apilados en distintas direcciones, vistos desde arriba, formando un mosaico de lomos', caption: 'Leer mucho amplía el vocabulario del B2, pero la soltura al hablar solo llega conversando a menudo.' } },
    { h3: 'Un repaso honesto con los descriptores' },
    { p: 'Por último, usa los descriptores del MCER como preguntas sinceras. ¿Puedes seguir una reunión o una clase sobre un tema de tu sector? ¿Escribir un correo de trabajo que explique un problema y proponga una solución sin consultar cada palabra? ¿Mantener diez minutos de discusión sobre un tema de actualidad defendiendo tu postura? Si la respuesta es sí casi siempre, **estás cerca del B2** o ya lo tienes.' },

    { h: 'Cuánto se tarda en llegar al B2' },
    { p: 'Cambridge English da unas horas aproximadas de aprendizaje guiado, es decir, horas de estudio con profesor, contando desde cero. Para el B2 la referencia es de **unas 500 a 600 horas**, frente a las 350 a 400 del B1 y las 700 a 800 del C1. Las cifras son acumuladas y Cambridge las presenta solo como orientación: el tiempo real depende de cuánto estudies fuera de clase, de cuánto uses el idioma y de tu punto de partida.' },
    { table: {
      head: ['Nivel', 'Horas de aprendizaje guiado desde cero (aprox.)'],
      rows: [
        ['B1', 'De 350 a 400'],
        ['B2', 'De 500 a 600'],
        ['C1', 'De 700 a 800'],
      ],
      note: 'Referencia de Cambridge English. Horas acumuladas con profesor; tú puedes necesitar más o menos.',
    } },
    { p: 'Si hoy estás en B1, la diferencia entre las dos franjas te da una idea del trabajo que queda: unos cientos de horas guiadas, más todo lo que hagas por tu cuenta entre clase y clase. Por eso la **constancia** pesa más que la intensidad: pocas horas a la semana durante muchos meses funcionan mejor que un mes de atracón seguido de nada.' },
    { h3: 'Dónde poner el esfuerzo' },
    { p: 'Para pasar de B1 a B2 suelen hacer falta tres cosas. La primera es **hablar más y durante más tiempo**: no respuestas de una frase, sino minutos enteros explicando, comparando y defendiendo una idea. La segunda es escribir textos con estructura, como correos formales, reseñas y ensayos breves, y que alguien te los corrija y te enseñe qué cambiar. La tercera es escuchar inglés real a velocidad normal sobre temas que no conoces: noticias, pódcasts, conferencias.' },
    { p: 'En gramática, el B2 no trae tantas reglas nuevas como un uso más seguro y variado de las que ya conoces: los condicionales, la pasiva, los modales para expresar probabilidad, el estilo indirecto y los conectores para contraponer ideas. El vocabulario, en cambio, crece mucho, sobre todo con **collocations y phrasal verbs**, que son los que hacen que tu inglés suene natural.' },
    { p: 'En las clases en directo de Alimun estudias con un profesor en un grupo reducido, con ejercicios de corrección inmediata y deberes que corrige tu profesor, un formato pensado para que avancen la expresión oral y la escrita, que suelen ser las que se quedan atrás. Cuando tus simulacros oficiales den **resultados estables** en la franja del B2, y no una sola vez por suerte, será el momento de reservar el examen.' },
    { quote: 'El B2 no es hablar sin errores: es **hacerse entender sin esfuerzo**, por las dos partes.' },
  ],
  quiz: [
    { q: '¿En qué etapa del MCER está el nivel B2?', options: ['Usuario básico', 'Usuario independiente', 'Usuario competente', 'Usuario nativo'], a: 1, why: 'B1 y B2 forman la etapa del usuario independiente; A1 y A2 son el usuario básico y C1 y C2 el usuario competente.' },
    { q: '¿Cuál de estas acciones es típica del B2 según el MCER?', options: ['Presentarte con frases sencillas', 'Defender un punto de vista explicando ventajas e inconvenientes', 'Entender sin esfuerzo prácticamente todo', 'Rellenar un formulario con tu nombre y dirección'], a: 1, why: 'Explicar un punto de vista sobre un tema de actualidad con los pros y los contras de cada opción es uno de los descriptores del B2.' },
    { q: 'El antiguo Certificado de Nivel Avanzado de una EOI (Real Decreto 1629/2006), ¿a qué equivale hoy?', options: ['Al Intermedio B1', 'Al Intermedio B2', 'Al Avanzado C1', 'Al Avanzado C2'], a: 1, why: 'El cuadro de equivalencias del Real Decreto 1041/2017 hace corresponder el antiguo Nivel Avanzado con el actual Intermedio B2.' },
    { q: '¿Con qué puntuación en la Cambridge English Scale da el B2 First un certificado de nivel B2?', options: ['De 122 a 139', 'De 140 a 159', 'De 160 a 179', 'De 180 a 190'], a: 2, why: 'De 160 a 179 obtienes el B2 (grado C hasta 172, grado B desde 173); de 180 a 190 el certificado es de nivel C1.' },
    { q: 'Según el IELTS, ¿qué bandas corresponden al B2?', options: ['De 4 a 5', 'De 5,5 a 6,5', 'De 7 a 8', 'Solo la 9'], a: 1, why: 'El IELTS hace corresponder las bandas de 5,5 a 6,5 con el B2 y las de 7 a 8 con el C1.' },
    { q: '¿Qué necesitas para aprobar la prueba de certificación de Intermedio B2 de una EOI?', options: ['El 50 % del total, sin mínimos por parte', 'El 65 % del total y al menos el 50 % en cada parte', 'El 60 % en cada destreza', 'Aprobar solo la parte escrita'], a: 1, why: 'El Real Decreto 1/2019 exige el 65 % de la puntuación total y un mínimo del 50 % en cada una de las cinco partes.' },
    { q: '¿Quién ha reconocido el modelo de exámenes CertAcles?', options: ['El British Council', 'La CRUE y CercleS', 'El Instituto Cervantes', 'Cambridge English'], a: 1, why: 'Según ACLES, su modelo de exámenes está reconocido por la CRUE y por la confederación europea CercleS.' },
    { q: '¿Cuántas horas de aprendizaje guiado indica Cambridge, aproximadamente, para llegar al B2 desde cero?', options: ['De 180 a 200', 'De 350 a 400', 'De 500 a 600', 'De 1.000 a 1.200'], a: 2, why: 'Cambridge indica unas 500 a 600 horas guiadas acumuladas para el B2, solo como orientación.' },
  ],
  faq: [
    ['¿Un test de inglés B2 online gratis sirve como certificado?', 'No. Los tests gratuitos, incluido el de Cambridge y nuestro quiz B2, sirven para orientarte, pero no son exámenes oficiales. Para demostrar el B2 ante una universidad, una empresa o una administración necesitas un certificado de una entidad que ellas acepten, como el B2 First, el IELTS, la EOI o un examen CertAcles.'],
    ['¿Qué vale más, el B2 de la EOI o el B2 First?', 'Los dos acreditan un B2. El de la EOI es un título oficial con validez en todo el territorio nacional y el B2 First es un certificado internacional que no caduca. Lo importante es cuál acepta quien te lo pide: mira la lista de su convocatoria o normativa.'],
    ['Si saco 180 en el B2 First, ¿tengo un C1?', 'Con una puntuación de 180 a 190 el B2 First te da el grado A y un certificado de nivel C1. Aun así, si necesitas demostrar plenamente un C1, el examen pensado para ese nivel es el C1 Advanced.'],
    ['¿Puedo presentarme al B2 de la EOI sin haber estudiado allí?', 'Sí. Según el Real Decreto 1/2019, puedes matricularte por libre en las pruebas de cualquier nivel sin tener los certificados de los niveles anteriores. Las fechas, la matrícula y las tasas las fija cada comunidad autónoma.'],
    ['¿Cuánto se tarda en pasar de B1 a B2?', 'Depende de cuánto estudies y de cuánto uses el inglés. Como referencia, Cambridge indica unas 350 a 400 horas guiadas acumuladas para el B1 y unas 500 a 600 para el B2, empezando desde cero.'],
  ],
  related: ['cefr-english', 'b2-first', 'ielts-or-cambridge', 'ielts-band-scores', 'how-long-english'],
  sources: [
    ['Consejo de Europa, MCER: niveles comunes de referencia, escala global', 'https://www.coe.int/en/web/common-european-framework-reference-languages/table-1-cefr-3.3-common-reference-levels-global-scale'],
    ['Consejo de Europa, Volumen complementario del MCER (2020)', 'https://www.coe.int/en/web/common-european-framework-reference-languages/cefr-companion-volume'],
    ['Cambridge English, resultados del B2 First', 'https://www.cambridgeenglish.org/exams-and-tests/first/results/'],
    ['Cambridge English, formato del B2 First', 'https://www.cambridgeenglish.org/exams-and-tests/qualifications/first/format/'],
    ['Cambridge English, preparación y sample tests gratuitos del B2 First', 'https://www.cambridgeenglish.org/exams-and-tests/first/preparation/'],
    ['Cambridge English, test de nivel gratuito', 'https://www.cambridgeenglish.org/test-your-english/'],
    ['Cambridge English, horas de aprendizaje guiado', 'https://support.cambridgeenglish.org/hc/en-gb/articles/202838506-Guided-learning-hours'],
    ['IELTS y el MCER', 'https://ielts.org/news-and-insights/everything-you-need-to-know-about-ielts-and-the-cefr'],
    ['BOE, Real Decreto 1041/2017 (niveles de las Escuelas Oficiales de Idiomas)', 'https://www.boe.es/eli/es/rd/2017/12/22/1041/con'],
    ['BOE, Real Decreto 1/2019 (pruebas de certificación de las EOI)', 'https://www.boe.es/boe/dias/2019/01/12/pdfs/BOE-A-2019-317.pdf'],
    ['ACLES, modelo de acreditación de exámenes CertAcles', 'https://www.acles.es/uploads/archivos/examenes/certacles-modelo-acreditacion-examenes-acles.pdf'],
    ['BOJA núm. 56, 20 de marzo de 2024: bolsas de trabajo con perfil bilingüe (Junta de Andalucía)', 'https://cdn.juntadeandalucia.es/boja/2024/56/BOJA24-056-00023-42020-01_00298815.pdf'],
    ['Alimun: Quiz de inglés B2 gratis', 'https://alimun.com/es/recursos/quiz-ingles-b2'],
    ['Alimun: Quiz de inglés B1 gratis', 'https://alimun.com/es/recursos/quiz-ingles-b1'],
  ],
};
