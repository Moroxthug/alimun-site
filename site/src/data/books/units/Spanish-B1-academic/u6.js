// Spanish B1 for study and exams, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
// Practice in the format of B1 exams such as DELE B1 and SIELE; no official material.
export const UNIT = {
  id: 'u6',
  title: 'Exam skills',
  goal: 'Get ready for a B1 exam: task types, timing and strategies. Practise in the format of exams like DELE B1 and SIELE.',
  art: 'dragon',
  tags: { skills: ['reading', 'listening', 'writing', 'speaking', 'exam'], topics: ['exam-strategies', 'b1-exam', 'formal-email', 'describing-a-photo', 'opinions'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Reading and listening tasks',
      about: 'Know the common task types and a strategy for each one.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'B1 exams usually test four skills: reading, listening, writing and speaking. Some exams are on paper, others on a computer. In reading and listening you often meet three kinds of task: true or false, multiple choice with three answers, and matching, for example short texts to people.' },
          { t: 'table', caption: 'Strategies for each kind of task', explain: ['head', 'col0', 'col1'], head: ['Task', 'Strategy'], rows: [
            ['true or false', 'Read the statements first. Find the place in the text, then compare every detail.'],
            ['multiple choice', 'Read the question and all three answers. A wrong answer often uses words from the text.'],
            ['matching', 'Note what each person needs. Some texts may match nobody.'],
            ['listening', 'Read the tasks before you listen. Most texts are played twice, but the task tells you.'],
          ] },
          { t: 'tip', art: 'churro', md: 'Timing is different in each exam. Do a practice test with a clock, so that you know how long each part takes you. The recordings in Spanish exams can have accents from Spain and from Latin America.' },
        ],
        [
          { t: 'reading', title: 'Aviso en la escuela de idiomas', md: '**Información importante para todos los alumnos**\n\nPor obras, la entrada principal de la calle Mayor estará cerrada del 4 al 15 de noviembre. Durante esos días, utilicen, por favor, la puerta de atrás, al lado del aparcamiento. Las clases se mantienen en su horario habitual, pero los grupos de la planta baja se trasladan a la segunda planta. Pueden consultar el aula nueva en el plano de la entrada. Lamentablemente, en ese tiempo el ascensor no funciona. Si necesitan ayuda, diríjanse a la secretaría.' },
          { t: 'ex', kind: 'tf', h: 'Exam practice: read the notice. True or false?', items: [
            { q: 'La entrada de la calle Mayor está cerrada unos días en noviembre.', a: 't', why: 'From 4 to 15 November.' },
            { q: 'Durante las obras no hay clases.', a: 'f', why: '*Las clases se mantienen en su horario habitual.* Exam tasks often say the opposite in other words.' },
            { q: 'Todos los grupos cambian a la segunda planta.', a: 'f', why: 'Only the groups from the ground floor move. Watch out for words like *todos*.' },
            { q: 'Durante esos días se puede usar el ascensor.', a: 'f', why: '*el ascensor no funciona*.' },
            { q: 'Si hay problemas, se puede ir a la secretaría.', a: 't', why: '*Si necesitan ayuda, diríjanse a la secretaría.*' },
          ] },
        ],
        [
          { t: 'text', md: 'Exam tasks rarely use the same words as the text. They say the same thing in other words. Learn words with the same meaning (synonyms) and opposites.' },
          { t: 'examples', items: [
            { s: 'Texto: Las clases se mantienen. / Tarea: Las clases no se cancelan.', n: '*mantenerse* and *no cancelarse* mean the same here.' },
            { s: 'Texto: El ascensor no funciona. / Tarea: El ascensor está estropeado.', n: '*no funciona* = *está estropeado*. In Latin America people often say *está descompuesto*.' },
            { s: 'Texto: La entrada es gratuita. / Tarea: No hay que pagar.', n: 'The same idea in other words.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the words with the same meaning.', pairs: [
            ['cancelar', 'suspender'],
            ['gratuito', 'gratis'],
            ['comenzar', 'empezar'],
            ['estropeado', 'no funciona'],
            ['trasladarse', 'cambiar de sitio'],
          ] },
        ],
        [
          { t: 'text', md: 'In a listening task you often hear announcements. Read this one as if you were listening. Listen for numbers, times and changes.' },
          { t: 'reading', title: 'Aviso en la estación', md: 'Atención, por favor. El tren regional con destino a Zaragoza, con salida prevista a las 14:20, circula hoy con un retraso aproximado de 15 minutos. Los viajeros con destino a Lleida pueden tomar también el tren de las 14:30, que sale de la vía 7. Disculpen las molestias.' },
          { t: 'ex', kind: 'choice', h: 'Exam practice: choose the right answer.', items: [
            { q: '¿A qué hora sale más o menos el tren a Zaragoza?', o: ['a las 14:35', 'a las 14:20', 'a las 14:30'], why: '14:20 plus about 15 minutes. 14:20 is the time in the timetable, and 14:30 is a different train.' },
            { q: '¿Quién puede ir a la vía 7?', o: ['los viajeros que van a Lleida', 'todos los viajeros que van a Zaragoza', 'los viajeros con bicicleta'], why: '*Los viajeros con destino a Lleida pueden tomar también el tren de las 14:30, que sale de la vía 7.*' },
            { q: '¿Cuál es el problema?', o: ['El tren llega tarde.', 'El tren no sale hoy.', 'El tren sale de otra vía.'], why: '*retraso*: the train is late, but it runs.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Writing to a task',
      about: 'Answer every point of a writing task and check your text.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'In a writing task you get a situation and several points. You must write about **every** point, and keep to the number of words. Plan first: one or two sentences for each point, plus a greeting, an introduction and an ending. Check who you write to: a friend (*tú*, *Querida…*, *Un abrazo*) or someone formal (*usted*, *Estimada…*, *Atentamente*).' },
          { t: 'reading', title: 'La tarea', md: 'Se ha inscrito en un curso de español en una escuela de idiomas, pero no puede ir el primer día de clase. Escriba un correo a la profesora del curso, la señora Molina.\n\nEn el correo debe disculparse y explicar el motivo, preguntar qué tiene que preparar para la próxima clase y proponer una forma de recibir los materiales.' },
        ],
        [
          { t: 'reading', title: 'Una respuesta a la tarea', md: 'Estimada señora Molina:\n\nMe he inscrito en su curso de español B1 de los lunes por la tarde. Lamentablemente, no podré asistir a la primera clase, el 7 de octubre, porque ese día tengo que trabajar. Lo siento mucho.\n\n¿Podría decirme qué tengo que preparar para la próxima clase? ¿Tengo que leer alguna unidad del libro?\n\nSi reparte fichas en clase, ¿sería posible enviármelas por correo electrónico? También podría recogerlas el miércoles en la secretaría.\n\nMuchas gracias de antemano.\n\nAtentamente,\nAmara Okoye' },
          { t: 'ex', kind: 'tf', h: 'Does the email answer every point? True or false?', items: [
            { q: 'Amara explica por qué no puede ir.', a: 't', why: '*porque ese día tengo que trabajar*.' },
            { q: 'Amara pregunta qué tiene que preparar.', a: 't', why: '*¿Podría decirme qué tengo que preparar para la próxima clase?*' },
            { q: 'Amara no dice cómo puede recibir los materiales.', a: 'f', why: 'She suggests two ways: by email or from the office on Wednesday.' },
          ] },
        ],
        [
          { t: 'text', md: 'Leave a few minutes to check your text. Check one thing at a time: **accents** (*está*, *también*, *podría*), **agreement** of nouns and adjectives (*las clases nuevas*), **ser** or **estar**, and the **usted** forms of verbs and pronouns (*su*, *le*).' },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and correct it.', items: [
            { s: 'No puedo ir porque [estoy] trabajar ese día.', a: ['tengo que'], why: 'Obligation: *tener que* + infinitive, *tengo que trabajar*.' },
            { s: '¿Podría enviarme [tus] materiales, señora Molina?', a: ['sus'], why: 'With *usted* the possessive is *su* / *sus*.' },
            { s: 'Las fichas [nuevos] están en la secretaría.', a: ['nuevas'], why: '*las fichas* is feminine plural, so the adjective is *nuevas*.' },
            { s: 'La clase [está] el lunes a las seis.', a: ['es'], why: 'For when or where an event takes place, use *ser*: *la clase es el lunes*.' },
            { s: 'Muchas gracias [en] antemano.', a: ['de'], why: 'The fixed phrase is *de antemano*: in advance.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the correct form.', items: [
            { q: 'Lamentablemente, no ___ asistir a la primera clase. (poder, futuro)', a: ['podré', 'podre'], why: 'The future of *poder* is irregular: *podré*.' },
            { q: 'Quedo a la espera de ___ respuesta. (your, usted)', a: ['su'], why: 'With *usted* the possessive is *su*.' },
            { q: 'Ayer ___ su correo. (recibir, yo, indefinido)', a: ['recibí', 'recibi'], why: '*Ayer* and a finished action: indefinido, *recibí*.' },
            { q: 'Si ___ fichas en clase, ¿sería posible enviármelas? (repartir, usted)', a: ['reparte'], why: 'With *usted*, the verb takes the *él / ella* form: *reparte*. After *si*, use the present.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build useful sentences for an email.', items: [
            { a: 'Quedo a la espera de su respuesta.', why: 'A common last sentence in a formal email.' },
            { a: 'Lo siento mucho.', why: 'A short, polite apology.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Talking about a photo and giving opinions',
      about: 'Describe a photo, give your opinion with a reason and react to the examiner.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'In many B1 speaking tests you describe a photo, give a short talk on a topic and talk with the examiner about it, sometimes in an everyday situation. Say what you see, imagine what is happening and give your opinion with a reason.' },
          { t: 'table', caption: 'Phrases for the speaking test', explain: ['head', 'col0'], quiz: true, head: ['Purpose', 'Spanish'], rows: [
            ['say what you see', 'En la foto se ve… / Hay… / A la derecha, a la izquierda, al fondo…'],
            ['imagine', 'Parece que… / Me imagino que… / Seguramente…'],
            ['give an opinion', 'Creo que… / En mi opinión… / Para mí…'],
            ['agree', 'Tiene razón. / Estoy de acuerdo.'],
            ['disagree politely', 'No estoy seguro. / No lo veo así, porque…'],
            ['ask for time or help', '¿Puede repetir, por favor? / Déjeme pensar un momento.'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'A practice speaking test', lines: [
            { who: 'Examinadora', s: 'Mire la foto, por favor. ¿Qué ve?' },
            { who: 'Omar', s: 'En la foto se ve una biblioteca. Hay cuatro estudiantes en una mesa grande. A la derecha, una chica escribe en un ordenador y, al fondo, hay muchas estanterías con libros.' },
            { who: 'Examinadora', s: '¿Qué cree que están haciendo?' },
            { who: 'Omar', s: 'Parece que preparan un trabajo en grupo. Me imagino que tienen un examen pronto, porque todos parecen un poco cansados.' },
            { who: 'Examinadora', s: '¿Y usted prefiere estudiar solo o en grupo?' },
            { who: 'Omar', s: 'Para mí depende. Creo que en grupo se aprende mucho, porque los compañeros te explican cosas. Sin embargo, antes de un examen prefiero estudiar solo, porque me concentro mejor.' },
            { who: 'Examinadora', s: 'Mucha gente dice que en la biblioteca no se estudia bien porque hay demasiada gente.' },
            { who: 'Omar', s: 'No lo veo así. En mi opinión, en la biblioteca hay más silencio que en casa y no tienes el móvil todo el tiempo en la mano.' },
          ] },
          { t: 'tip', art: 'churro', md: 'Do not only say *sí* or *no*: give a reason with *porque*. If you do not understand a question, ask: *¿Puede repetir, por favor?* That is normal in an exam. In Latin America you will often hear *celular* for *móvil* and *computadora* for *ordenador*.' },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Think about the conversation. True or false?', items: [
            { q: 'En la foto hay estudiantes en una biblioteca.', a: 't', why: '*En la foto se ve una biblioteca. Hay cuatro estudiantes…*' },
            { q: 'Omar siempre prefiere estudiar en grupo.', a: 'f', why: 'It depends: before an exam he prefers to study alone.' },
            { q: 'Omar está de acuerdo con la examinadora sobre la biblioteca.', a: 'f', why: '*No lo veo así*: he disagrees politely and gives a reason.' },
            { q: 'Omar da razones para sus opiniones.', a: 't', why: 'He uses *porque* several times.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right reaction.', items: [
            { q: 'Examinador: «Mucha gente cree que estudiar en línea es más fácil». Usted está de acuerdo:', o: ['Tiene razón, porque puedes estudiar cuando quieres.', 'No lo veo así.', '¿Puede repetir, por favor?'], why: 'You agree and give a reason: *Tiene razón, porque…*' },
            { q: 'Examinador: «¿Qué cree que hace la mujer de la foto?». Usted no está seguro:', o: ['Parece que espera a alguien.', 'En mi opinión, sí.', 'Estoy de acuerdo.'], why: '*Parece que…* is how you imagine what is happening in a photo.' },
            { q: 'Usted no ha entendido la pregunta:', o: ['¿Puede repetir, por favor?', 'Tiene razón.', 'En la foto se ve una mesa.'], why: 'Asking the examiner to repeat is normal and polite.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Complete the description of a photo.', items: [
            { q: 'En la foto ___ ve una clase con muchos estudiantes.', o: ['se', 'le', 'lo'], why: '*En la foto se ve…*: an impersonal *se*.' },
            { q: 'A la ___ hay una pizarra y, a la izquierda, una ventana.', o: ['derecha', 'fondo', 'centro'], why: '*a la derecha* and *a la izquierda* go together. *al fondo* and *en el centro* take a different form.' },
            { q: '___ que el profesor explica algo difícil.', o: ['Parece', 'Parecen', 'Pareces'], why: '*Parece que…*: always singular here, whatever comes after.' },
            { q: 'Me ___ que tienen un examen pronto.', o: ['imagino', 'imagina', 'imaginan'], why: '*Me imagino que…*: with *me*, the verb is in the *yo* form.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Do you agree or disagree?', groups: ['agree', 'disagree'], explain: ['groups'], items: [
            { s: 'Tiene razón.', g: 0, why: 'You agree with the other person.' },
            { s: 'Estoy de acuerdo.', g: 0, why: 'You agree.' },
            { s: 'Es verdad.', g: 0, why: 'You agree that it is true.' },
            { s: 'No lo veo así.', g: 1, why: 'A polite way to disagree.' },
            { s: 'No estoy de acuerdo.', g: 1, why: 'You disagree.' },
            { s: 'No creo que sea así.', g: 1, why: 'You disagree; *no creo que* + subjunctive.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Texto: «La clase de hoy se suspende». ¿Qué es correcto?', o: ['Hoy no hay clase.', 'La clase empieza más tarde.', 'La clase es en otra aula.'], why: '*suspender una clase*: it does not take place.' },
      { q: 'Al final de un correo a la profesora del curso escribe:', o: ['Atentamente,', 'Un besazo,', '¡Hasta ahora!'], why: 'The formal ending.' },
      { q: 'Examinadora: «¿Qué cree que hacen las personas de la foto?». Usted responde:', o: ['Parece que están en una fiesta.', 'Tiene razón.', 'No lo veo así.'], why: '*Parece que…*: you imagine what is happening.' },
      { q: 'Salida a las 10:40, retraso de 20 minutos. El tren sale a las ___.', o: ['11:00', '10:40', '10:20'], why: '10:40 plus 20 minutes.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'No puedo ir porque ___ que trabajar. (tener, yo)', a: ['tengo'], why: '*tener que* + infinitive: *tengo que trabajar*.' },
      { q: 'Quedo a la espera de ___ respuesta. (your, usted)', a: ['su'], why: 'With *usted*: *su*.' },
      { q: 'En la foto ___ ve una biblioteca.', a: ['se'], why: '*En la foto se ve…*' },
      { q: 'Lamentablemente, no ___ asistir el lunes. (poder, futuro)', a: ['podré', 'podre'], why: 'The future of *poder*: *podré*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and correct it.', items: [
      { s: '¿Podría enviarme [tu] respuesta, señor Ruiz?', a: ['su'], why: 'With *usted*: *su*.' },
      { s: 'Las aulas [nuevos] están en la segunda planta.', a: ['nuevas'], why: '*las aulas* is feminine plural: *nuevas*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the words with the same meaning.', pairs: [
      ['empezar', 'comenzar'],
      ['gratis', 'gratuito'],
      ['estropeado', 'no funciona'],
    ] },
  ],
};
