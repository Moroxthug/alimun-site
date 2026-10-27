// Spanish A2 for study and exams, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
// Practice in the format of A2 exams such as DELE A2. All tasks and texts are original, not official material.
export const UNIT = {
  id: 'u6',
  title: 'Exam skills',
  goal: 'Get ready for an A2 exam: understand the task types, read the questions first, write a short message to a word limit and practise with an exam-style text.',
  art: 'owl',
  tags: { skills: ['reading', 'writing', 'exam-skills'], topics: ['multiple-choice', 'matching', 'synonyms', 'short-message', 'word-limit', 'exam-instructions'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Multiple-choice and matching tasks',
      about: 'Read the question first, look for words with the same meaning and avoid the traps.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Many A2 exams, like DELE A2, have four parts: reading (*comprensión de lectura*), listening (*comprensión auditiva*), writing (*expresión e interacción escritas*) and speaking (*expresión e interacción orales*). In reading tasks you often choose a, b or c, or match texts and people. Always read the **task and the questions first**. Then you know what to look for in the text.' },
          { t: 'table', caption: 'Instructions in exams', explain: ['head', 'col1'], quiz: true, head: ['Spanish', 'English'], rows: [
            ['Lea primero las preguntas.', 'Read the questions first.'],
            ['Seleccione la opción correcta: a, b o c.', 'Choose the right option: a, b or c.'],
            ['Solo hay una respuesta correcta.', 'There is only one correct answer.'],
            ['Relacione los textos con las personas.', 'Match the texts and the people.'],
            ['¿Verdadero o falso?', 'True or false?'],
            ['Hay un anuncio que no debe seleccionar.', 'There is one advert you do not need.'],
          ] },
        ],
        [
          { t: 'text', md: 'The text often uses **other words** than the question. The question says *gratis*, the text says *gratuito*. Learn words with the same or a similar meaning in pairs.' },
          { t: 'table', caption: 'Same meaning, other words', explain: ['head'], quiz: true, head: ['In the question', 'In the text'], rows: [
            ['gratis', 'gratuito'],
            ['el fin de semana', 'el sábado y el domingo'],
            ['cerrado', 'no abre'],
            ['empezar', 'comenzar'],
            ['barato', 'no es caro'],
          ] },
          { t: 'tip', art: 'owl', md: 'Wrong answers often use a number or a word from the text, but in the wrong place. Watch the small words too: *no*, *nunca*, *solo*, *todavía no*. They can change the whole meaning.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the words with the same meaning.', pairs: [
            ['gratuito', 'gratis'],
            ['comenzar', 'empezar'],
            ['el sábado y el domingo', 'el fin de semana'],
            ['no es caro', 'barato'],
            ['no abre', 'cerrado'],
          ] },
          { t: 'ex', kind: 'tf', h: 'Good exam habits. True or false?', items: [
            { q: 'Primero lees todo el texto muy despacio, palabra por palabra.', a: 'f', why: 'Read the questions first. Then look in the text for what you need.' },
            { q: 'En «Seleccione la opción correcta: a, b o c» solo hay una respuesta correcta.', a: 't', why: '*Solo hay una respuesta correcta*: one answer per question.' },
            { q: 'El texto usa a menudo otras palabras que la pregunta.', a: 't', why: 'The question says *gratis*, the text may say *gratuito*.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Preparación para el examen A2', md: 'Nuestro curso «Preparación para el examen A2» comienza el 2 de mayo y es todos los sábados de 9:00 a 12:00. El curso es gratuito, pero tienes que apuntarte antes del 25 de abril. Por favor, no traigas libros: nosotros tenemos todos los materiales.' },
          { t: 'ex', kind: 'choice', h: 'Read the questions first. Then read the text and choose a, b or c.', items: [
            { q: 'El curso empieza ___.', o: ['el 2 de mayo', 'el 25 de abril', 'el 12 de mayo'], why: '*comienza el 2 de mayo*. *comenzar* = *empezar*. The 25 April is the last day to sign up.' },
            { q: 'El curso es ___.', o: ['el fin de semana', 'por la noche', 'todos los días'], why: '*todos los sábados*: Saturday is the weekend.' },
            { q: 'El curso cuesta ___.', o: ['nada', '25 euros', '12 euros'], why: '*gratuito* means free. 25 and 12 are a date and a time in the text.' },
            { q: '¿Qué dice el texto sobre los libros?', o: ['No hace falta llevar libros.', 'Hay que comprar un libro.', 'Te dan el libro el 2 de mayo.'], why: '*no traigas libros*: the school has all the materials.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Writing a short message to a word limit',
      about: 'Write about all the points in the task, in about the right number of words.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'In the writing part of an A2 exam, you often write a short message or email. The task tells you the situation, the **points** to write about and how many words to write. Write about **every** point. A missing point usually costs marks. Do not write much more or much less than the task says.' },
          { t: 'reading', title: 'Tarea', md: 'Mañana no puede ir a estudiar con su amiga Lena. Escriba un mensaje a Lena. En el mensaje tiene que pedir perdón y explicar por qué no puede ir, proponer otro día y hacer una pregunta sobre los deberes. Número de palabras: entre 30 y 40.' },
        ],
        [
          { t: 'reading', title: 'El mensaje de Omar', md: 'Hola, Lena:\n\nLo siento, pero mañana no puedo ir porque tengo que trabajar. ¿Tienes tiempo el sábado por la mañana? Podemos estudiar en mi casa. Por cierto, ¿qué deberes tenemos para el lunes?\n\nUn abrazo,\nOmar' },
          { t: 'text', md: 'Omar writes about 35 words. He uses one sentence for each point: *Lo siento, pero… porque…* for the apology and the reason, *¿Tienes tiempo el sábado…?* for another day, and *¿qué deberes tenemos…?* for the question. To a friend, he writes *tú*, *Hola, Lena:* and *Un abrazo*.' },
          { t: 'ex', kind: 'tf', h: 'Look at Omar’s message. True or false?', items: [
            { q: 'Omar explica por qué no puede ir.', a: 't', why: '*porque tengo que trabajar*: that is the reason.' },
            { q: 'Omar no propone otro día.', a: 'f', why: 'He suggests Saturday morning: *¿Tienes tiempo el sábado por la mañana?*' },
            { q: 'El mensaje tiene más de 60 palabras.', a: 'f', why: 'It has about 35 words, as the task asks.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which sentence is it?', items: [
            { q: '¿Qué frase propone otro día?', o: ['¿Podemos quedar el domingo?', 'Mañana no puedo ir.', '¿Qué deberes tenemos?'], why: 'You suggest another day: *el domingo*.' },
            { q: '¿Qué frase pide perdón?', o: ['Lo siento mucho.', '¡Hasta el sábado!', '¿Tienes tiempo el viernes?'], why: '*Lo siento* is how you say sorry.' },
            { q: '¿Qué frase es una pregunta sobre los deberes?', o: ['¿Qué ejercicios tenemos que hacer?', 'Mañana tengo que trabajar.', 'Un abrazo, Omar'], why: 'The exercises you have to do are the homework.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the message.', items: [
            { q: 'Lo ___, pero mañana no tengo tiempo.', a: ['siento'], why: '*Lo siento*: I am sorry.' },
            { q: '¿___ tiempo el viernes? (tener, tú)', a: ['Tienes'], why: '*tener* changes *e* to *ie*: *tú tienes*.' },
            { q: '¿___ estudiar juntos el sábado? (poder, nosotros)', a: ['Podemos'], why: '*¿Podemos…?* makes a suggestion. *poder* keeps *o* with *nosotros*.' },
            { q: 'Un ___, Omar', a: ['abrazo', 'saludo', 'beso'], why: 'A friendly ending: *Un abrazo* or *Un saludo*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order to make sentences for the message.', items: [
            { a: 'Lo siento mucho, pero no puedo ir.', why: 'The apology *Lo siento mucho*, then *pero* + the problem.' },
            { a: '¿Cuándo tienes tiempo?', why: 'Question word *Cuándo*, then the verb.' },
            { a: '¿Me puedes mandar los deberes?', why: '*me* goes before *puedes*, and the infinitive *mandar* after it.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Before you finish, check three things. Did you write about every point? Is the greeting right, *tú* or *usted*? Is the number of words about right?' },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: an exam-style text',
      about: 'Practise with a short text and questions in the style of an A2 reading task.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Read the questions on the next page first. Then read the text and look for the answers. Remember: the text may use other words than the questions.' },
          { t: 'reading', title: 'Estudiar en la biblioteca municipal', md: 'Desde enero, la biblioteca municipal tiene una nueva sala de estudio. Está en la tercera planta y tiene 40 puestos, una pequeña cocina e internet rápido. Muchos estudiantes de instituto y de universidad preparan aquí sus exámenes.\n\nLa sala de estudio abre de lunes a sábado, de 9:00 a 21:00. Para entrar, hace falta el carné de la biblioteca. El carné es gratuito para los estudiantes; las demás personas pagan 15 euros al año.\n\nEn la sala de estudio hay que estar en silencio. Si quieres estudiar en grupo, puedes reservar una de las cuatro salas de grupo. Se puede hacer por internet o en el mostrador de información, en la planta baja.\n\n«En casa no tengo tranquilidad, porque tengo tres hermanos pequeños», dice Lucía, una estudiante de 17 años. «Aquí me concentro muy bien. Y en el descanso tomo un té con mis amigos en la cocina.»' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose a, b or c.', items: [
            { q: 'La nueva sala de estudio está ___.', o: ['en la tercera planta', 'en la planta baja', 'en la primera planta'], why: '*Está en la tercera planta.* The information desk is on the ground floor.' },
            { q: '¿Quién tiene que pagar por el carné?', o: ['las personas que no estudian', 'todos los estudiantes de instituto', 'todos los estudiantes de universidad'], why: 'Free for students, 15 euros for *las demás personas*.' },
            { q: 'Una sala de grupo se puede reservar ___.', o: ['en internet o en el mostrador de información', 'solo por teléfono', 'solo en la tercera planta'], why: '*por internet o en el mostrador de información*.' },
            { q: '¿Por qué estudia Lucía en la biblioteca?', o: ['En casa hay mucho ruido.', 'En casa no tiene internet.', 'Trabaja en la cocina.'], why: '*no tengo tranquilidad*: it is not quiet at home, because she has three little brothers and sisters.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the text again. True, false or not given?', items: [
            { q: 'Los domingos la sala de estudio está cerrada.', a: 't', why: 'It is open *de lunes a sábado*, so not on Sunday.' },
            { q: 'En la sala de estudio se puede hablar en voz alta.', a: 'f', why: '*En la sala de estudio hay que estar en silencio.*' },
            { q: 'En la sala de estudio hay una cocina.', a: 't', why: '*una pequeña cocina*.' },
            { q: 'Lucía tiene un examen el mes que viene.', a: 'ng', why: 'The text does not say when Lucía has an exam.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In the question about Lucía, *ruido* (noise) is not in the text, but *no tengo tranquilidad* means the same. Many exam questions work like this.' },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'En el texto pone «gratuito». Significa ___.', o: ['gratis', 'caro', 'cerrado'], why: '*gratuito* = *gratis*.' },
      { q: '«El curso comienza a las 9:00.» ¿Cuándo empieza el curso?', o: ['a las nueve', 'a las diez', 'a las siete de la tarde'], why: '*comenzar* = *empezar*.' },
      { q: '¿Qué haces primero en una tarea de lectura?', o: ['Leo las preguntas.', 'Leo cada palabra del texto.', 'Marco rápido la opción a.'], why: 'Read the questions first, then the text.' },
      { q: 'La tarea tiene tres puntos. ¿Sobre qué escribes?', o: ['sobre los tres puntos', 'sobre un punto', 'sobre dos puntos'], why: 'Write about every point in the task.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Seleccione la opción ___: a, b o c.', a: ['correcta'], why: '*la opción correcta*: the right option. The adjective is feminine like *opción*.' },
      { q: 'Lo ___, pero no puedo ir.', a: ['siento'], why: '*Lo siento*: I am sorry.' },
      { q: '¿___ estudiar juntos el lunes? (poder, nosotros)', a: ['Podemos'], why: '*¿Podemos…?* makes a suggestion.' },
      { q: 'La biblioteca no abre el domingo. Está ___.', a: ['cerrada'], why: '*no abre* = *cerrada*, feminine like *la biblioteca*.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'En una tarea de opción múltiple, marcas solo una respuesta en cada pregunta.', a: 't', why: '*Solo hay una respuesta correcta.*' },
      { q: 'Si la tarea dice «entre 30 y 40 palabras», un mensaje de 80 palabras está bien.', a: 'f', why: '80 words is much too long. Write about the number of words the task asks.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the words with the same meaning.', pairs: [
      ['barato', 'no es caro'],
      ['por internet', 'en línea'],
      ['no tengo tranquilidad', 'hay mucho ruido'],
      ['comenzar', 'empezar'],
    ] },
  ],
};
