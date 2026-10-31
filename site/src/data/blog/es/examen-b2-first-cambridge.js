// Third design (docs/BLOG_PLAN.md). Verificado el 31 oct 2026 en cambridgeenglish.org: página del examen B2 First,
// formato, resultados (franjas de puntuación, notas, plazos de resultados, sin caducidad), handbook oficial del B2 First
// (partes, puntos, mismo peso, criterios de evaluación, reglas de las key word transformations, 1939) y guía del
// Statement of Results; horas de aprendizaje guiado del sitio de soporte de Cambridge English. Alimun no está afiliada a Cambridge.
export default {
  key: 'b2-first',
  site: 'es',
  slug: 'examen-b2-first-cambridge',
  section: 'exams',
  course: 'English',
  published: '2026-10-31',
  updated: '2026-10-31',
  title: 'Examen B2 First de Cambridge (FCE): la guía completa',
  metaTitle: 'B2 First de Cambridge (FCE): partes, notas y preparación – Alimun',
  desc: 'Todas las pruebas y partes del B2 First, el antiguo FCE, con sus tiempos, cómo funcionan la Cambridge English Scale y las notas, y un plan de preparación.',
  lead: "El B2 First, durante décadas llamado First Certificate in English o FCE, es uno de los certificados de inglés más conocidos en España y en toda Europa. Evalúa las cuatro destrezas más gramática y vocabulario, y **demuestra que has alcanzado el nivel intermedio alto**. Aquí tienes cómo funciona, parte por parte, y cómo prepararlo.",
  photo: 'b2-first-desk-notebook',
  sticker: { draw: 'owl', say: 'Cinco notas, una media, un certificado.' },
  facts: [
    { n: 4, unit: 'pruebas', text: 'Reading and Use of English, Writing, Listening y Speaking' },
    { n: 52, unit: 'preguntas', text: 'en Reading and Use of English, en siete partes y 1 hora y 15 minutos' },
    { n: 180, text: 'la puntuación de la Cambridge English Scale que da la nota A y un certificado de nivel C1' },
    { label: 'Sin caducidad', text: 'para el certificado, aunque algunas entidades piden un resultado reciente' },
  ],
  blocks: [
    { take: { title: 'La respuesta corta', text: "El B2 First es el examen de Cambridge English del nivel B2 del MCER. Tiene cuatro pruebas y dura **unas tres horas y media**. Recibes una puntuación de 122 a 190 en la Cambridge English Scale: de 160 a 179 obtienes el certificado B2, desde 180 la nota A y un certificado de nivel C1, y de 140 a 159 un certificado de nivel B1. El certificado no caduca.", draw: 'owl' } },

    { h: 'Qué es el B2 First y para quién es' },
    { p: "El B2 First forma parte de las Cambridge English Qualifications, una serie de exámenes que va del A2 Key al C2 Proficiency, cada uno pensado para un solo nivel. Se ofreció por primera vez en 1939 y durante décadas se llamó **First Certificate in English**, o FCE. Muchos profesores y empresas siguen usando el nombre antiguo, y el propio certificado todavía dice “B2 First Certificate in English”." },
    { p: "El examen apunta al **nivel B2**, intermedio alto, del Marco Común Europeo de Referencia para las Lenguas (MCER), la escala de seis niveles de A1 a C2. Cambridge lo describe como la prueba de que puedes trabajar en un entorno de habla inglesa, vivir de forma independiente en un país anglófono o estudiar a nivel intermedio alto, por ejemplo en un curso preparatorio para la universidad. En la práctica, con un B2 sigues una charla sobre un tema conocido, mantienes una conversación sobre temas bastante variados y das tu opinión con argumentos." },
    { p: "Por eso es el paso natural después del B1 Preliminary, y Cambridge recuerda que lo aceptan muchos centros educativos y universidades para estudiar, además de las empresas. Si no tienes claro tu nivel, compruébalo antes: el B2 First mide un solo nivel, y **presentarte demasiado pronto es una forma fácil de perder tiempo y dinero**." },

    { h: 'Las cuatro pruebas de un vistazo' },
    { p: "El examen tiene cuatro pruebas. Reading and Use of English, Writing y Listening son pruebas escritas, mientras que el Speaking se hace en persona con dos examinadores; tu centro examinador te indica la fecha y la hora de cada una. Cambridge da una duración total de **unas 3 horas y media**." },
    { table: {
      head: ['Prueba', 'Duración', 'Partes', 'Preguntas', 'Qué evalúa'],
      rows: [
        ['Reading and Use of English', '1 hora y 15 minutos', '7', '52', 'Gramática, vocabulario y comprensión lectora'],
        ['Writing', '1 hora y 20 minutos', '2', '2 textos', 'Un ensayo y un texto a elegir, de 140 a 190 palabras cada uno'],
        ['Listening', 'Unos 40 minutos', '4', '30', 'Comprensión auditiva; cada grabación se oye dos veces'],
        ['Speaking', '14 minutos por pareja', '4', '–', 'Hablar solo, con el examinador y con otro candidato'],
      ],
      note: 'El Speaking dura 20 minutos cuando hay tres candidatos. El formato es el mismo en papel y en ordenador.',
    } },
    { p: "Las cinco puntuaciones que recibes, de Reading, Use of English, Writing, Listening y Speaking, **pesan lo mismo**. Así que, aunque Reading and Use of English es una sola prueba, cuenta para dos de tus cinco puntuaciones: una buena razón para tomártela en serio." },

    { figure: { photo: 'b2-first-reading-book', alt: 'Una persona leyendo un libro de bolsillo, vista por encima del hombro', caption: 'Los textos de Reading and Use of English suman entre 2.200 y 2.500 palabras: la velocidad de lectura cuenta tanto como la gramática.' } },

    { h: 'Reading and Use of English' },
    { p: "Esta prueba dura 1 hora y 15 minutos y tiene siete partes con 52 preguntas. Las cuatro primeras son el **Use of English**: ejercicios cortos que evalúan directamente gramática y vocabulario. Las tres últimas son de lectura: textos más largos sacados de artículos, informes, ficción, anuncios, cartas y otras fuentes, unas 2.200 a 2.500 palabras en total." },
    { h3: 'Partes 1 a 4: Use of English' },
    { p: "En la Part 1, un cloze de opción múltiple, lees un texto corto con ocho huecos y eliges la palabra correcta entre cuatro opciones. Evalúa vocabulario: colocaciones, expresiones fijas, phrasal verbs y palabras de significado parecido. En la Part 2, un cloze abierto, hay otros ocho huecos pero **ninguna opción**: escribes tú una palabra, casi siempre gramatical, como una preposición, un artículo, un auxiliar o un pronombre. En la Part 3, formación de palabras, transformas una palabra dada para completar ocho huecos, por ejemplo “decide” en “decision” o “able” en “unable”." },
    { p: "La Part 4, las key word transformations, es la más comentada. Recibes una frase y una palabra clave, y completas una segunda frase con el mismo significado usando **entre dos y cinco palabras**, incluida la palabra clave, que no puedes cambiar. Las contracciones como didn’t cuentan como dos palabras. Son seis preguntas y cada una vale hasta dos puntos, porque la respuesta se corrige en dos mitades. En las partes 2, 3 y 4 la ortografía tiene que ser correcta." },
    { examples: [
      ['I haven’t seen Maria for three years. (SINCE) It ___ I saw Maria.', 'Respuesta: **has been three years since** (cinco palabras, el máximo).'],
      ['It wasn’t necessary for us to book a table. (NEED) We ___ a table.', 'Respuesta: **didn’t need to book**. Son cinco palabras, porque didn’t cuenta como dos.'],
      ['“Can you help me?” Anna asked Ben. (WHETHER) Anna asked Ben ___ help her.', 'Respuesta: **whether he could** (tres palabras). Es estilo indirecto: can pasa a could, igual que en español “puedes” pasa a “podía”.'],
    ] },
    { h3: 'Partes 5 a 7: Reading' },
    { p: "La Part 5 es un texto más largo con seis preguntas de opción múltiple sobre detalles, opiniones y actitudes, cada una de **dos puntos**. La Part 6 es un texto con huecos: se han quitado seis frases de un artículo y se han mezclado con una séptima que no encaja en ningún sitio, y tú vuelves a colocar cada una en su lugar siguiendo la lógica y las referencias de un párrafo a otro. La Part 7 es de emparejamiento múltiple: diez preguntas en las que buscas qué texto, o qué parte de un texto, menciona un dato. Premia la lectura rápida más que la minuciosa." },
    { note: { title: 'Dos puntos por pregunta en las partes 5 y 6', text: "Las partes 5 y 6 solo tienen seis preguntas cada una, pero cada pregunta vale dos puntos. Guárdate tiempo: **ir con prisas en los textos largos del final** cuesta más que un comienzo lento en la Part 1.", draw: 'snail' } },

    { h: 'Writing' },
    { p: "La prueba de Writing dura 1 hora y 20 minutos y escribes dos textos de **140 a 190 palabras** cada uno. La Part 1 es obligatoria: **un ensayo** (essay) en el que das tu opinión sobre un tema de interés general. Te dan dos ideas para desarrollar y tú añades una tercera propia. El ensayo va dirigido a tu profesor, así que encaja un registro neutro o bastante formal." },
    { p: "En la Part 2 eliges **una tarea de una lista corta**. En el B2 First los formatos son artículo, email o carta, reseña (review) e informe (report). Cada tarea indica un lector y un propósito, como recomendar un sitio a un amigo o informar sobre una actividad del centro al responsable de un grupo, y te evalúan según lo bien que tu texto funcione para ese lector." },
    { p: "Los examinadores puntúan cada texto en **cuatro escalas**: Content, si has hecho todo lo que pedía la tarea; Communicative Achievement, si el estilo y el formato se adaptan al lector; Organisation, lo bien que se sostiene el texto; y Language, la variedad y la corrección de tu gramática y tu vocabulario. Cambridge pide además coherencia con una variedad del inglés: la ortografía británica y la americana valen las dos, siempre que no las mezcles." },
    { figure: { photo: 'b2-first-writing-notes', alt: 'Personas en una mesa, una toma notas en un cuaderno de espiral junto a una taza de café', caption: 'Las dos tareas de Writing piden de 140 a 190 palabras: unos minutos de esquema te ayudan a cubrir todos los puntos.' } },
    { note: { title: 'El número de palabras es una guía', text: "Un texto demasiado corto puede no mostrar suficiente variedad o dejarse un punto; uno demasiado largo puede irse del tema. **Apunta al centro del rango** y usa las palabras en lo que necesita el lector.", draw: 'teacup' } },

    { h: 'Listening' },
    { p: "El Listening dura unos 40 minutos y tiene cuatro partes con 30 preguntas. En la Part 1 oyes ocho grabaciones cortas y sin relación entre sí, de unos 30 segundos, y respondes a una pregunta con tres opciones en cada una. En la Part 2 escuchas una intervención de tres o cuatro minutos y completas diez frases con palabras que oyes. En la Part 3 cinco personas hablan de un tema común durante unos 30 segundos cada una, y tienes que **emparejar a cada persona** con una de ocho afirmaciones. En la Part 4 respondes a siete preguntas con tres opciones sobre una entrevista o conversación de tres o cuatro minutos." },
    { p: "Cada grabación se oye **dos veces**. Usa la primera escucha para la idea general y una respuesta provisional, y la segunda para comprobarla. La Part 3 es la más traicionera: tres de las ocho afirmaciones sobran, y quien habla puede mencionar una idea de una opción equivocada antes de decir lo que piensa de verdad." },
    { figure: { photo: 'b2-first-headphones', alt: 'Un joven con auriculares mirando su teléfono', caption: 'Cada grabación del Listening se oye dos veces: la primera para la idea general, la segunda para comprobar la respuesta.' } },

    { h: 'Speaking' },
    { p: "Normalmente haces el Speaking **con otro candidato**, o en un grupo de tres, ante dos examinadores. Uno, el interlocutor, hace las preguntas y te da las tareas; el otro, el assessor, escucha y puntúa. La prueba dura 14 minutos por pareja y tiene cuatro partes. Te evalúan por tu propia actuación, no en comparación con tu compañero." },
    { p: "La Part 1 es una entrevista breve, de unos dos minutos, con preguntas sobre ti, tu trabajo o tus estudios, tu tiempo libre y tus planes. En la Part 2 cada candidato recibe dos fotografías y habla de ellas solo durante un minuto, comparándolas y respondiendo a la pregunta escrita encima; después comentas las fotos de tu compañero durante unos 30 segundos. En la Part 3 tú y tu compañero comentáis una pregunta con varias ideas escritas durante dos minutos, y luego tenéis **un minuto más para tomar una decisión** juntos. En la Part 4 el examinador hace más preguntas sobre el mismo tema, y la conversación dura unos cuatro minutos." },
    { p: "El assessor puntúa Grammar and Vocabulary, Discourse Management, Pronunciation e **Interactive Communication**, y el interlocutor da una nota global (global achievement). La interacción cuenta: en las partes 3 y 4, reaccionar a lo que dice tu compañero, preguntarle su opinión y construir sobre ella puntúa mejor que soltar un discurso preparado." },
    { figure: { photo: 'b2-first-street-chat', alt: 'Tres amigos conversando en una calle soleada de la ciudad', caption: 'En la Part 3 hablas con tu compañero durante dos minutos y luego tenéis un minuto para poneros de acuerdo.' } },

    { cta: true },

    { h: 'Cómo funciona la Cambridge English Scale' },
    { p: "Los resultados del B2 First se dan en la **Cambridge English Scale**, una escala de puntuaciones común a todas las Cambridge English Qualifications. Recibes una puntuación aparte de Reading, Use of English, Writing, Listening y Speaking, y la puntuación global es la media de las cinco. Tu nota y tu nivel del MCER dependen los dos de esa puntuación global." },
    { table: {
      head: ['Puntuación global', 'Resultado', 'Qué recibes'],
      rows: [
        ['De 180 a 190', 'Nota A', 'El certificado B2 First que acredita un nivel C1'],
        ['De 173 a 179', 'Nota B', 'El certificado B2 First de nivel B2'],
        ['De 160 a 172', 'Nota C', 'El certificado B2 First de nivel B2'],
        ['De 140 a 159', 'Nivel B1', 'Un certificado de Cambridge English de nivel B1'],
        ['De 122 a 139', 'Sin certificado', 'La puntuación aparece en el Statement of Results'],
      ],
      note: 'Todos los candidatos reciben un Statement of Results con las cinco puntuaciones y la global.',
    } },
    { p: "De aquí salen dos consecuencias. Primero, **una prueba floja no te hunde por sí sola**: un Writing más bajo se puede compensar con un buen Listening y un buen Reading. Segundo, la escala te da una red de seguridad. Si te quedas a las puertas del B2, con 140 a 159 consigues igualmente un certificado B1, y si te sale muy bien, con 180 o más obtienes la nota A y un certificado de nivel C1." },
    { p: "Un C1 en el certificado del B2 First es una ventaja real, pero no equivale a aprobar el C1 Advanced, que está pensado para evaluar todo el nivel C1. Si una universidad o una empresa pide expresamente el C1 Advanced, ese es el examen que tienes que hacer. Muchas entidades fijan el requisito como una puntuación global mínima en lugar de una nota, y la propia Cambridge llama a la puntuación global **el dato más importante** del resultado." },
    { quote: 'Cinco puntuaciones, una media: una prueba floja no decide tu resultado.' },
    { note: { title: 'Mira la puntuación, no solo la nota', text: "Si una entidad pide una puntuación mínima, mira tu puntuación global en el Statement of Results. Algunas fijan también un mínimo por destreza, así que **lee el requisito palabra por palabra**.", draw: 'parrot' } },

    { h: 'En papel o en ordenador' },
    { p: "Puedes hacer el B2 First en papel o en ordenador en un centro examinador autorizado. **El contenido, los tiempos y el formato son los mismos**, y también el certificado. En ordenador escribes las respuestas con el teclado y al final del Listening tienes dos minutos para revisarlas; en papel escribes en una hoja de respuestas y tienes cinco minutos para pasar las respuestas del Listening. El Speaking siempre es en persona." },
    { p: "La gran diferencia práctica es la rapidez. Los resultados del examen digital suelen estar disponibles **entre 5 y 10 días laborables** después del examen, y los de papel normalmente entre 4 y 6 semanas después. La Confirmation of Entry de tu centro indica la fecha límite de tus resultados. Si tienes un plazo para una matrícula o una candidatura, esa diferencia puede decidir el formato por ti." },

    { h: '¿B2 First o B2 First for Schools?' },
    { p: "Hay dos versiones del examen del mismo nivel. **B2 First for Schools** tiene las mismas pruebas, partes, tiempos y puntuaciones que el B2 First, y el mismo nivel del MCER. Solo hay una diferencia en la Part 2 del Writing: la versión for Schools puede incluir un relato (story), mientras que el informe (report) solo aparece en la versión estándar." },
    { p: "Cambridge diseña el B2 First para adultos y el B2 First for Schools para estudiantes en edad escolar. El nivel es el mismo; solo cambian **los temas y los textos**, elegidos según los intereses y la experiencia de los candidatos más jóvenes. Si estás en el instituto, pregunta en tu centro qué versión ofrece." },

    { h: 'Validez y quién lo reconoce' },
    { p: "Los certificados de Cambridge English **no caducan**. Un B2 First que apruebes este año sigue siendo un certificado válido dentro de veinte años. Pero cada entidad decide qué antigüedad acepta, y algunas universidades, empresas y administraciones piden un certificado reciente. Compruébalo antes de contar con uno antiguo." },
    { p: "Cambridge afirma que sus certificados los aceptan **miles de empresas e instituciones educativas** en todo el mundo. El B2 First está reconocido como prueba de inglés intermedio alto para trabajos en la industria, la administración y los servicios, y muchos centros y universidades lo aceptan para estudiar. Cambridge publica en su web las entidades que lo reconocen, pero la última palabra la tiene siempre la página de requisitos de la universidad o la empresa a la que te presentas." },

    { h: '¿B2 First o IELTS?' },
    { p: "Se comparan a menudo, y responden a preguntas distintas. IELTS es un único examen para todos los niveles y te da una banda de 0 a 9; la mayoría de las entidades aceptan un resultado de IELTS durante **dos años**. El B2 First certifica un nivel, con un certificado que no caduca. En el Listening de IELTS oyes cada grabación una vez y el Speaking es cara a cara con un examinador; en el B2 First lo oyes todo dos veces y normalmente hablas con un compañero." },
    { p: "Para emigrar y para muchas solicitudes de universidad en países anglófonos, a menudo es la propia entidad la que pide IELTS. Para **el currículum en Europa**, para objetivos académicos y para trabajos en los que tienes que acreditar un B2, el B2 First es muy conocido y no pierde valor. Nuestro artículo sobre IELTS o Cambridge compara los dos en detalle." },

    { h: 'Cuánto tiempo necesitas para prepararlo' },
    { p: "Cambridge English da unas **horas de aprendizaje guiado** aproximadas para cada nivel: unas 350 a 400 horas desde cero para el B1, y unas 500 a 600 para el B2. Son orientaciones, no normas, y cuentan horas con profesor, pero dan una idea: pasar de un B1 sólido al B2 suele suponer **unas 150 a 200 horas** de aprendizaje guiado, más tu práctica personal." },
    { p: "La respuesta sincera, por tanto, depende de dónde partas. Si ya tienes un B2 y solo necesitas conocer el formato, muchas veces bastan de unas semanas a dos o tres meses de práctica regular. Si estás en un B1, cuenta con meses de trabajo constante con el idioma y después el formato del examen. Con tres horas de clase a la semana, 150 a 200 horas guiadas son **más o menos un año o algo más** de curso." },

    { h: 'Un plan de preparación práctico' },
    { p: "Empieza con un **diagnóstico**: haz un examen de muestra oficial completo con los tiempos reales, o al menos una prueba de cada tipo. Corrígelo y anota tu puntuación en cada una de las cinco áreas. Así sabrás si te falta más idioma o más práctica de examen, y dónde poner tus horas." },
    { p: "Al principio, construye el idioma. Lee artículos y relatos cortos cada semana y lleva un cuaderno de colocaciones, phrasal verbs y familias de palabras, que alimentan directamente las partes 1, 2 y 3. Practica la **paráfrasis**: coge una frase y dila de otra manera. Es justo la habilidad que piden las key word transformations, y además ayuda en el Writing y el Speaking." },
    { p: "Cuando el idioma empiece a fluir, trabaja el examen parte por parte. Haz una o dos partes de Use of English varias veces por semana, revisa cada fallo y apunta por qué estaba mal. Escribe un texto por semana en un formato distinto de la Part 2 y haz que te lo corrijan: **la corrección de tus textos** vale más que escribir el doble sin ella. Escucha pódcast y entrevistas, y luego haz partes del Listening con cronómetro." },
    { p: "Practica el Speaking en voz alta **con otra persona**. Cronometra tu minuto de monólogo con el móvil, compara las fotos en lugar de describirlas una a una, y en la tarea colaborativa entrénate para invitar a tu compañero a participar y llegar a una decisión antes de que acabe el minuto." },
    { p: "En las últimas cuatro a seis semanas, haz **simulacros completos** en condiciones de examen, idealmente uno cada una o dos semanas, y revísalos con calma. Inscríbete en el examen cuando tus puntuaciones de práctica estén a la altura de tu objetivo, no antes." },
    { p: "En Alimun, las clases en directo con un profesor y el mismo grupo reducido te dan un compañero con quien hablar cada semana, y **tu profesor corrige tus deberes**, que es lo que más necesita la preparación del Writing. ¿No sabes en qué nivel estás? La prueba de nivel te sitúa de A1 a C1 en pocos minutos." },

    { h: 'Errores frecuentes el día del examen' },
    { mistakes: [
      ['Escribir seis palabras en una key word transformation', 'Usar **entre dos y cinco palabras**, incluida la palabra clave', 'Con más de cinco palabras la respuesta vale cero, aunque el significado sea correcto.'],
      ['Cambiar la palabra clave, por ejemplo need por needed', 'Dejar la palabra clave **exactamente como está**', 'Si la palabra clave se cambia o falta, la respuesta no puntúa.'],
      ['Describir las fotos una a una en la Part 2 del Speaking', '**Comparar** las dos fotos y responder a la pregunta escrita encima', 'La tarea pide comparar y responder, no describir.'],
      ['Hablar sin escuchar a tu compañero en la Part 3', 'Preguntarle su opinión y **construir sobre lo que dice**', 'La Interactive Communication es uno de los criterios de evaluación.'],
      ['Escribir 240 palabras en una review de la Part 2', 'Quedarte **entre 140 y 190 palabras**', 'Un texto demasiado largo puede incluir contenido irrelevante y perder puntos.'],
    ] },
  ],
  quiz: [
    { q: '¿Cómo se llamaba antes el B2 First?', options: ['First Certificate in English (FCE)', 'Certificate in Advanced English', 'Preliminary English Test', 'IELTS General Training'], a: 0, why: 'El B2 First se llamó durante décadas First Certificate in English, o FCE.' },
    { q: '¿Cuántas preguntas tiene Reading and Use of English?', options: ['30', '40', '52', '56'], a: 2, why: 'La prueba tiene 52 preguntas en siete partes y dura 1 hora y 15 minutos.' },
    { q: '¿Cuántas palabras puedes escribir en una key word transformation?', options: ['Solo una', 'De una a tres', 'De dos a cinco, incluida la palabra clave', 'Hasta ocho'], a: 2, why: 'La respuesta debe tener entre dos y cinco palabras, incluida la palabra clave, que no se puede cambiar.' },
    { q: '¿Qué extensión debe tener cada texto del Writing?', options: ['De 80 a 100 palabras', 'De 140 a 190 palabras', 'De 220 a 260 palabras', 'Al menos 250 palabras'], a: 1, why: 'Las dos tareas de Writing del B2 First piden de 140 a 190 palabras.' },
    { q: '¿Cuántas veces oyes cada grabación del Listening?', options: ['Una', 'Dos', 'Tres', 'Solo se repite la Part 1'], a: 1, why: 'En el Listening del B2 First cada grabación se oye dos veces.' },
    { q: '¿Cómo se calcula la puntuación global?', options: ['Solo cuentan Reading y Writing', 'El Speaking vale el doble', 'Es la media de cinco puntuaciones con el mismo peso', 'Es la más baja de tus puntuaciones'], a: 2, why: 'La puntuación global es la media de Reading, Use of English, Writing, Listening y Speaking.' },
    { q: 'Sacas 165 de puntuación global. ¿Qué recibes?', options: ['Ningún certificado', 'Un certificado B1', 'Nota C y un certificado B2', 'Nota A y un certificado C1'], a: 2, why: 'De 160 a 172 se obtiene la nota C y el certificado B2 First de nivel B2.' },
    { q: '¿Cuándo suelen estar los resultados del B2 First digital?', options: ['El mismo día', 'Entre 5 y 10 días laborables después', 'Entre 4 y 6 semanas después', 'Tres meses después'], a: 1, why: 'Los resultados digitales suelen llegar entre 5 y 10 días laborables después; los de papel, entre 4 y 6 semanas.' },
  ],
  faq: [
    ['¿El B2 First es lo mismo que el FCE?', 'Sí. B2 First es el nombre actual del examen conocido durante años como First Certificate in English, o FCE. El nivel, B2, ahora forma parte del nombre, y el certificado sigue diciendo “B2 First Certificate in English”.'],
    ['¿Se puede suspender el B2 First?', 'Si tu puntuación global queda por debajo de 160 no obtienes el certificado B2, pero con 140 a 159 recibes igualmente un certificado de nivel B1. Por debajo de 140 recibes el Statement of Results sin certificado.'],
    ['¿Caduca el certificado B2 First?', 'No. Los certificados de Cambridge English no caducan. Algunas universidades y empresas piden un resultado reciente, así que revisa sus requisitos antes de contar con un certificado antiguo.'],
    ['¿Es más fácil el examen en ordenador?', 'No. El contenido, los tiempos, el formato y el certificado son los mismos. Las diferencias principales son que escribes las respuestas con el teclado y que los resultados llegan antes, normalmente en 5 a 10 días laborables.'],
    ['¿Puedo conseguir un certificado C1 con el B2 First?', 'Sí. Con una puntuación global de 180 a 190 obtienes la nota A y un certificado que acredita un nivel C1. Pero si una entidad pide expresamente el C1 Advanced, tendrás que presentarte a ese examen.'],
  ],
  related: ['ielts-or-cambridge', 'cefr-english', 'how-long-english'],
  sources: [
    ['B2 First, Cambridge English', 'https://www.cambridgeenglish.org/exams-and-tests/qualifications/first/'],
    ['Formato del B2 First', 'https://www.cambridgeenglish.org/exams-and-tests/qualifications/first/format/'],
    ['Resultados del B2 First', 'https://www.cambridgeenglish.org/exams-and-tests/first/results/'],
    ['Handbook del B2 First para profesores', 'https://www.cambridgeenglish.org/images/167791-b2-first-handbook.pdf'],
    ['Cambridge English, horas de aprendizaje guiado', 'https://support.cambridgeenglish.org/hc/en-gb/articles/202838506-Guided-learning-hours'],
  ],
};
