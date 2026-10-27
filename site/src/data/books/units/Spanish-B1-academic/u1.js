// Spanish B1 for study and exams, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'Starting a course or university',
  goal: 'Enrol, choose courses and find your way around.',
  art: 'suitcase',
  tags: { skills: ['vocabulary', 'reading', 'writing', 'speaking'], topics: ['university', 'enrolment', 'indirect-questions', 'formal-email'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Words for your first term',
      about: 'The words for enrolment, classes and exams that you hear in your first weeks.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'At a Spanish university you meet many new words in your first weeks. Before you start, you enrol: this is the **matrícula**, and the verb is *matricularse*. You enrol in **asignaturas** (subjects), and each one has a number of **créditos**.' },
          { t: 'table', caption: 'Words for your first term', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['la matrícula', 'enrolment at a university or school'],
            ['la asignatura', 'one subject that you study, often with its own exam'],
            ['el crédito', 'a unit that shows how much work a subject is'],
            ['el cuatrimestre', 'one of the two halves of the academic year'],
            ['la clase teórica', 'a lecture: one teacher talks, many students listen'],
            ['las prácticas', 'a practical class in a smaller group, or work experience'],
            ['la tutoría', 'the time when a teacher meets students in the office'],
          ] },
          { t: 'tip', art: 'churro', md: 'In Spain the academic year usually starts in September and has two *cuatrimestres*. In many Latin American countries people say *el semestre*, *la materia* or *el curso* for a subject, and *inscribirse* for enrolling.' },
        ],
        [
          { t: 'text', md: 'A degree is a **grado**, and the list of all its subjects is the **plan de estudios**. Questions about enrolment go to the **secretaría** of your **facultad**. At the end of the term there is an exam period, the **convocatoria**. If you fail, there is often a second chance, the *convocatoria extraordinaria*.' },
          { t: 'examples', items: [
            { s: '**Me matriculé** en septiembre en cinco asignaturas.', n: '*matricularse*: a reflexive verb. *Me matriculé* is the indefinido.' },
            { s: 'Esta asignatura tiene **seis créditos**.', n: 'More credits mean more hours of work.' },
            { s: 'Las clases teóricas **son** los lunes en el aula 12.', n: 'An *aula* is a classroom. It is feminine but takes *el* in the singular: *el aula*, *las aulas*.' },
            { s: 'La profesora Ruiz tiene **tutorías** los martes de diez a doce.', n: 'At this time you can visit her in her office with your questions.' },
            { s: 'El **plazo de matrícula** termina el 30 de julio.', n: '*el plazo*: the time you have to do something; the last day is the deadline.' },
          ] },
        ],
        [
          { t: 'text', md: 'Students often say *la uni* for *la universidad*, and *la carrera* for their degree: *Estudio la carrera de Derecho.* At the end of a subject there can be a written exam (*un examen*), a long piece of written work (*un trabajo*) or a talk in class (*una exposición*).' },
          { t: 'ex', kind: 'match', h: 'Match each word with its description.', pairs: [
            ['la clase teórica', 'Un profesor habla y muchos estudiantes escuchan y toman apuntes.'],
            ['las prácticas', 'Un grupo pequeño hace ejercicios o trabaja en el laboratorio.'],
            ['la tutoría', 'Puedes hablar con la profesora en su despacho.'],
            ['el examen final', 'Una prueba escrita al final del cuatrimestre.'],
            ['la exposición', 'Un estudiante presenta un tema delante de la clase.'],
            ['el trabajo', 'Un texto largo que escribes en casa y entregas.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Antes de empezar las clases, tienes que ___ en la universidad.', o: ['matricularte', 'aprobarte', 'entregarte'], why: '*matricularse*: to enrol. The other verbs are not used with *te* in this way.' },
            { q: 'Esta ___ tiene seis créditos y un examen en enero.', o: ['asignatura', 'tutoría', 'secretaría'], why: 'A subject with credits and an exam: *la asignatura*.' },
            { q: 'Si tienes una duda sobre el examen, ve a la ___ del profesor.', o: ['tutoría', 'matrícula', 'convocatoria'], why: 'The time when a teacher meets students: *la tutoría*.' },
            { q: 'Para cambiar de grupo, tienes que ir a la ___ de la facultad.', o: ['secretaría', 'asignatura', 'carrera'], why: 'The office that deals with enrolment and forms: *la secretaría*.' },
            { q: 'El curso tiene dos ___: el primero termina en enero.', o: ['cuatrimestres', 'créditos', 'aulas'], why: 'The two halves of the academic year: *cuatrimestres*.' },
          ] },
          { t: 'ex', kind: 'odd', h: 'Which word is not a kind of class or exam?', items: [
            { o: ['la secretaría', 'la clase teórica', 'las prácticas', 'el examen final'], why: '*La secretaría* is an office. The others are classes or exams.' },
            { o: ['el carné', 'la exposición', 'el trabajo', 'el examen'], why: '*El carné de estudiante* is a card. The others are ways to be assessed.' },
            { o: ['el despacho', 'el grado', 'el máster', 'el doctorado'], why: '*El despacho* is an office. The others are degrees.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Asking for information',
      about: 'Ask polite questions at a university office and in an email.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'At an office you speak to staff with **usted**. Polite questions are often **indirect**: *¿Podría decirme…?*, *¿Sabe usted…?*, *Me gustaría saber…*. The question word keeps its accent (*dónde, cuándo, qué*), and the word order of the question usually stays the same.' },
          { t: 'dialogue', title: 'At the faculty office', lines: [
            { who: 'Funcionaria', s: 'Buenos días. ¿En qué puedo ayudarle?' },
            { who: 'Karim', s: 'Buenos días. Soy estudiante de intercambio y quiero matricularme en dos asignaturas. ¿Podría decirme qué documentos necesito?' },
            { who: 'Funcionaria', s: 'Necesita el pasaporte, una foto y la carta de su universidad.' },
            { who: 'Karim', s: 'Muy bien. ¿Y sabe si puedo hacer la matrícula por internet?' },
            { who: 'Funcionaria', s: 'Sí, pero primero tiene que pedir una clave en esta oficina.' },
            { who: 'Karim', s: 'Perfecto. Una pregunta más: ¿me podría decir hasta cuándo está abierta la secretaría?' },
            { who: 'Funcionaria', s: 'Por las mañanas, de nueve a dos. Por la tarde está cerrada.' },
            { who: 'Karim', s: 'Muchas gracias. Muy amable.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Direct and indirect questions', explain: ['head'], head: ['Direct', 'Indirect'], rows: [
            ['¿Dónde está la biblioteca?', '¿Podría decirme dónde está la biblioteca?'],
            ['¿Cuándo empiezan las clases?', 'Me gustaría saber cuándo empiezan las clases.'],
            ['¿Qué documentos necesito?', '¿Sabe usted qué documentos necesito?'],
            ['¿Está abierta la secretaría el viernes?', '¿Sabe si la secretaría está abierta el viernes?'],
          ] },
          { t: 'tip', art: 'churro', md: 'A yes/no question becomes indirect with **si** (no accent): *¿Sabe si hay clase mañana?* Do not confuse it with **sí** (yes). These polite questions are the same in Latin America, where *usted* is used even more often.' },
          { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
            { q: '', o: ['¿Podría decirme dónde está el aula 5?', '¿Podría decirme donde está el aula 5?', '¿Podría decirme si dónde está el aula 5?'], why: 'The question word keeps its accent in an indirect question: *dónde*.' },
            { q: '', o: ['¿Sabe si la biblioteca abre los sábados?', '¿Sabe sí la biblioteca abre los sábados?', '¿Sabe qué si la biblioteca abre los sábados?'], why: 'A yes/no question becomes *si* + the question, without an accent.' },
            { q: '', o: ['Me gustaría saber cuándo es el examen.', 'Me gustaría saber cuando es el examen?', 'Me gustaría saber si cuándo es el examen.'], why: '*Me gustaría saber* is a statement, so there is no question mark, and *cuándo* keeps its accent.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Make the question polite. Start with the words given.', items: [
            { q: '¿Dónde está la secretaría?', cue: '¿Podría decirme', a: ['¿Podría decirme dónde está la secretaría?', '¿Podría decirme dónde está la secretaría'], why: 'Keep the question word with its accent: *dónde está*.' },
            { q: '¿Hay clase el lunes?', cue: '¿Sabe si', a: ['¿Sabe si hay clase el lunes?', '¿Sabe si hay clase el lunes'], why: 'A yes/no question: add *si* and keep the rest.' },
            { q: '¿Cuándo termina el plazo de matrícula?', cue: 'Me gustaría saber', a: ['Me gustaría saber cuándo termina el plazo de matrícula.', 'Me gustaría saber cuándo termina el plazo de matrícula'], why: 'A statement with *cuándo*: no question marks.' },
            { q: '¿Qué libros necesito para esta asignatura?', cue: '¿Sabe usted', a: ['¿Sabe usted qué libros necesito para esta asignatura?', '¿Sabe usted qué libros necesito para esta asignatura'], why: '*qué* keeps its accent in the indirect question.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and correct it.', items: [
            { s: '¿Sabe [sí] el examen es en el aula 3?', a: ['si'], why: 'In an indirect yes/no question *si* has no accent. *Sí* means yes.' },
            { s: '¿Podría decirme [cuando] empiezan las clases?', a: ['cuándo'], why: 'The question word keeps its accent: *cuándo*.' },
            { s: '¿[Podrías] decirme dónde está la secretaría, señora?', a: ['Podría'], why: 'You speak to office staff with *usted*: *podría*, not *podrías*.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Consulta sobre los cursos de idiomas', md: 'Estimados señores:\n\nMe llamo Mei Lin Zhou y estudio primero de Biología en esta universidad desde septiembre. El próximo cuatrimestre me gustaría hacer un curso de español de nivel B2.\n\n¿Podrían decirme cuándo empieza la inscripción para los cursos? También me gustaría saber si tengo que hacer una prueba de nivel antes.\n\nMuchas gracias de antemano.\n\nUn saludo cordial,\nMei Lin Zhou\nmeilin.zhou@example.com' },
          { t: 'ex', kind: 'tf', h: 'Read the email. True or false?', items: [
            { q: 'Mei Lin estudia en la universidad desde hace dos años.', a: 'f', why: 'She has studied there since September, in her first year: *estudio primero … desde septiembre*.' },
            { q: 'Quiere hacer un curso de español.', a: 't', why: '*me gustaría hacer un curso de español de nivel B2*.' },
            { q: 'Pregunta si tiene que hacer una prueba de nivel.', a: 't', why: '*me gustaría saber si tengo que hacer una prueba de nivel*: an indirect yes/no question.' },
          ] },
          { t: 'tip', art: 'churro', md: 'To an office you do not know, start with *Estimados señores:* or *Estimado/a señor/a:*. In Spain a colon follows the greeting, not a comma. *Muchas gracias de antemano* means thank you in advance.' },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A welcome guide',
      about: 'Read a guide for new students and find the information you need.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'Many universities give new students a welcome guide. Before you read it, learn these words. Then read the guide and look for the answers to your own questions: where to go, what to do and who can help.' },
          { t: 'table', caption: 'Words in the welcome guide', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['las jornadas de acogida', 'days of events for new students before classes start'],
            ['la guía docente', 'the document that explains one subject: content, exams and books'],
            ['el horario', 'your plan of classes for the week'],
            ['el campus virtual', 'the website where teachers put materials and news'],
            ['la delegación de estudiantes', 'a group of students who represent and help other students'],
          ] },
        ],
        [
          { t: 'reading', title: '¡Bienvenidos a la facultad!', md: 'Querido estudiante de primer curso:\n\n¡Bienvenido a nuestra facultad! Las primeras semanas todo es nuevo. Aquí tienes la información más importante.\n\n**Antes de las clases:** Durante las jornadas de acogida, la semana antes del comienzo de las clases, los profesores presentan los grados y los estudiantes de cursos superiores enseñan el campus, la biblioteca y la cafetería. No es obligatorio ir, pero lo recomendamos mucho.\n\n**Tu horario:** El horario de cada grado está en la página web de la facultad. Para cada asignatura hay una guía docente, donde puedes ver los contenidos, los libros y cómo es el examen. Los materiales de clase están en el campus virtual: entra con tu número de estudiante y tu clave.\n\n**La biblioteca:** Con el carné de estudiante puedes sacar libros. En época de exámenes la biblioteca abre también los fines de semana.\n\n**Ayuda:** Si tienes dudas sobre la matrícula, la secretaría te atiende por las mañanas. La delegación de estudiantes, formada por alumnos de la facultad, responde a preguntas sobre la vida diaria en la universidad. Los estudiantes internacionales pueden escribir también a la Oficina de Relaciones Internacionales.\n\n¡Te deseamos mucha suerte en este nuevo curso!' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the guide. True, false or not given?', items: [
            { q: 'Las jornadas de acogida son después del comienzo de las clases.', a: 'f', why: 'They are *la semana antes del comienzo de las clases*: the week before.' },
            { q: 'Todos los estudiantes nuevos tienen que ir a las jornadas de acogida.', a: 'f', why: '*No es obligatorio ir*: you do not have to go.' },
            { q: 'En la guía docente se explica cómo es el examen de una asignatura.', a: 't', why: 'The guide says you can see the content, the books and *cómo es el examen*.' },
            { q: 'La biblioteca abre todos los fines de semana del año.', a: 'f', why: 'Only *en época de exámenes*: in the exam period.' },
            { q: 'La cafetería cierra a las ocho de la tarde.', a: 'ng', why: 'The guide does not give the opening times of the cafeteria.' },
            { q: 'La delegación de estudiantes está formada por profesores.', a: 'f', why: 'It is *formada por alumnos de la facultad*: made up of students.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Answer the questions about the guide.', items: [
            { q: '¿Dónde están los materiales de clase?', o: ['en el campus virtual', 'en la guía docente', 'en la secretaría'], why: '*Los materiales de clase están en el campus virtual.*' },
            { q: '¿Qué necesitas para sacar libros de la biblioteca?', o: ['el carné de estudiante', 'el horario', 'la guía docente'], why: '*Con el carné de estudiante puedes sacar libros.*' },
            { q: '¿Quién responde a preguntas sobre la matrícula?', o: ['la secretaría', 'la delegación de estudiantes', 'la biblioteca'], why: '*Si tienes dudas sobre la matrícula, la secretaría te atiende.*' },
          ] },
          { t: 'ex', kind: 'bank', h: 'Complete the sentences with words from the guide.', extra: ['obligatoria', 'teórica'], items: [
            { q: 'El ___ de cada grado está en la página web.', a: 'horario', why: '*el horario*: your plan of classes for the week.' },
            { q: 'Para entrar en el campus virtual necesitas tu número de estudiante y tu ___.', a: 'clave', why: '*la clave*: the password.' },
            { q: 'Con el carné puedes ___ libros de la biblioteca.', a: 'sacar', why: '*sacar libros*: to borrow books from a library.' },
            { q: 'Los estudiantes de cursos ___ enseñan el campus.', a: 'superiores', why: '*cursos superiores*: higher years, older students.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Un profesor habla y doscientos estudiantes toman apuntes. Es una ___.', o: ['clase teórica', 'tutoría', 'exposición'], why: 'One teacher talks, many students listen: a lecture, *clase teórica*.' },
      { q: 'Antes de empezar, tienes que ___ en la universidad.', o: ['matricularte', 'sacarte', 'entregarte'], why: '*matricularse*: to enrol.' },
      { q: '¿Podría decirme ___ está la secretaría?', o: ['dónde', 'donde', 'si dónde'], why: 'The question word keeps its accent in an indirect question.' },
      { q: 'El documento con los contenidos y el examen de una asignatura es la ___.', o: ['guía docente', 'matrícula', 'delegación'], why: '*La guía docente* explains one subject.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: '¿Sabe ___ la biblioteca abre el domingo? (yes/no question)', a: ['si'], why: 'An indirect yes/no question starts with *si*, without an accent.' },
      { q: 'Me gustaría ___ cuándo empiezan las clases. (to know)', a: ['saber'], why: '*Me gustaría saber…*: a polite way to ask.' },
      { q: 'Esta asignatura tiene seis ___. (units of work)', a: ['créditos', 'creditos'], why: '*el crédito* shows how much work a subject is.' },
      { q: 'El ___ de matrícula termina el viernes. (the time you have)', a: ['plazo'], why: '*el plazo*: the time you have to do something.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: '¿Podría decirme qué documentos necesito?', why: '*¿Podría decirme…?* + the question word *qué* + the rest of the question.' },
      { a: 'Me matriculé en cinco asignaturas.', why: '*matricularse en*: the pronoun *me* comes before the verb.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and correct it.', items: [
      { s: '¿Sabe [sí] hay clase mañana?', a: ['si'], why: 'In an indirect question *si* has no accent.' },
      { s: '¿[Puedes] decirme dónde está el aula 4, señor?', a: ['Podría', 'Puede'], why: 'You speak to a stranger at an office with *usted*: *podría* or *puede*.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'Un trabajo es un examen que haces en clase.', a: 'f', why: 'A *trabajo* is a long text that you write at home and hand in.' },
      { q: 'En una tutoría puedes hablar con el profesor en su despacho.', a: 't', why: '*La tutoría* is the time when a teacher meets students.' },
    ] },
  ],
};
