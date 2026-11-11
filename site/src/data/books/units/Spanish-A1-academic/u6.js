// Spanish A1 for study and exams, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
// Practice in the format of A1 exams such as DELE A1. All tasks and texts are original, not official material.
export const UNIT = {
  id: 'u6',
  title: 'Exam skills',
  goal: 'Get ready for an A1 exam: understand the instructions, read the questions first, fill in a form, write a short message to a word limit and practise with an exam-style text. Practice in the format of exams like DELE A1, never official material.',
  art: 'owl',
  tags: { skills: ['reading', 'writing', 'exam-skills'], topics: ['exam-instructions', 'multiple-choice', 'matching', 'synonyms', 'forms', 'short-message', 'word-limit'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Lea y marque',
      about: 'Understand exam instructions, read the question first and look for words with the same meaning.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Many A1 exams, like DELE A1, have four parts: reading (*comprensión de lectura*), listening (*comprensión auditiva*), writing (*expresión e interacción escritas*) and speaking (*expresión e interacción orales*). In reading tasks you often choose a, b or c, match texts and people, or decide if a sentence is true or false. Always read the **task and the questions first**. Then you know what to look for in the text.' },
          { t: 'table', caption: 'Instructions in exams', explain: ['head', 'col1'], quiz: true, head: ['Spanish', 'English'], rows: [
            ['Lea el texto.', 'Read the text.'],
            ['Escuche el audio dos veces.', 'Listen to the audio twice.'],
            ['Marque la opción correcta: a, b o c.', 'Mark the right option: a, b or c.'],
            ['Relacione los textos con las personas.', 'Match the texts and the people.'],
            ['Hay tres textos que no necesita.', 'There are three texts you do not need.'],
            ['Complete el formulario.', 'Fill in the form.'],
            ['Escriba un mensaje.', 'Write a message.'],
          ] },
          { t: 'tip', art: 'churro', md: 'Exam instructions use **usted**: *Lea, Escuche, Marque, Escriba.* The teacher in class may say the same with *tú*: *Lee, Escucha, Marca, Escribe.*' },
        ],
        [
          { t: 'text', md: 'The text often uses **other words** than the question. The question says *gratis*, the text says *no cuesta nada*. Learn words with the same or a similar meaning in pairs.' },
          { t: 'table', caption: 'Same meaning, other words', explain: ['head'], quiz: true, head: ['In the question', 'In the text'], rows: [
            ['gratis', 'no cuesta nada'],
            ['el fin de semana', 'el sábado y el domingo'],
            ['cerrado', 'no está abierto'],
            ['empezar', 'comenzar'],
            ['barato', 'no es caro'],
            ['por la mañana', 'de nueve a doce'],
          ] },
          { t: 'tip', art: 'owl', md: 'Wrong answers often use a number or a word from the text, but in the wrong place. Look at the small words too: *no*, *nunca*, *solo*, *todavía no*. They can change the whole meaning.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the words with the same meaning.', pairs: [
            ['no cuesta nada', 'gratis'],
            ['comenzar', 'empezar'],
            ['el sábado y el domingo', 'el fin de semana'],
            ['no es caro', 'barato'],
            ['no está abierto', 'cerrado'],
          ] },
          { t: 'ex', kind: 'tf', h: 'Good exam habits. True or false?', items: [
            { q: 'Primero leo todo el texto muy despacio.', a: 'f', why: 'Read the questions first. Then look in the text for what you need.' },
            { q: 'En «Marque la opción correcta: a, b o c» solo una opción es correcta.', a: 't', why: 'One answer per question.' },
            { q: 'El texto usa a menudo otras palabras que la pregunta.', a: 't', why: 'The question says *gratis*, the text may say *no cuesta nada*.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Club de conversación', md: 'El club de conversación de la escuela comienza el sábado ocho de octubre. Las reuniones son todos los sábados de diez a doce, en la cafetería. El club no cuesta nada, pero necesitas escribir tu nombre en la lista de la secretaría antes del jueves seis. No necesitas libros ni cuadernos.' },
          { t: 'ex', kind: 'choice', h: 'Read the questions first. Then read the text and choose a, b or c.', items: [
            { q: 'El club empieza ___.', o: ['el sábado ocho de octubre', 'el jueves seis de octubre', 'el lunes diez de octubre'], why: '*comienza el sábado ocho de octubre*. *comenzar* = *empezar*. Thursday the sixth is the last day for the list.' },
            { q: 'Las reuniones son ___.', o: ['el fin de semana', 'por la tarde', 'todos los días'], why: '*todos los sábados*: Saturday is the weekend.' },
            { q: 'El club cuesta ___.', o: ['nada', 'diez euros', 'doce euros'], why: '*no cuesta nada*: it is free. Ten and twelve are times in the text.' },
            { q: '¿Qué necesitas para el club?', o: ['escribir tu nombre en una lista', 'un libro y un cuaderno', 'un diccionario'], why: '*necesitas escribir tu nombre en la lista*. *No necesitas libros ni cuadernos.*' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'A form and a short message',
      about: 'Fill in a form with your details, and write a short message about every point in the task.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'In the writing part of an A1 exam, you often fill in a **form** with your personal details and then write a **short message**. Read every line of the form. Write your surnames under *apellidos* and your first name under *nombre*, and write numbers clearly.' },
          { t: 'ex', kind: 'choice', h: 'Where do you write it on the form?', items: [
            { q: '«28»', o: ['Edad', 'Nombre', 'Correo electrónico'], why: 'A number of years: your age, *la edad*.' },
            { q: '«brasileña»', o: ['Nacionalidad', 'Apellidos', 'Dirección'], why: '*brasileña* is a nationality.' },
            { q: '«ana.silva@example.com»', o: ['Correo electrónico', 'Teléfono', 'Firma'], why: 'The *@* shows an email address.' },
            { q: '«Silva Costa»', o: ['Apellidos', 'Nombre', 'Profesión'], why: 'Two surnames: *apellidos*.' },
          ] },
        ],
        [
          { t: 'text', md: 'For the message, the task tells you the situation, **three points** to write about and about how many words to write. Write about **every** point. A missing point usually costs marks. Do not write much more or much less than the task says.' },
          { t: 'reading', title: 'Tarea', md: 'Usted no puede ir mañana a clase de español. Escriba un mensaje a su compañero Javier. En el mensaje: salude, explique por qué no va a clase y pregunte por los deberes. Escriba entre 20 y 30 palabras.' },
          { t: 'reading', title: 'El mensaje de Tomás', md: 'Hola, Javier:\n\nMañana no voy a clase porque estoy enfermo. ¿Qué deberes hay para el jueves? ¿Me escribes la página, por favor? Muchas gracias.\n\nUn abrazo,\nTomás' },
        ],
        [
          { t: 'text', md: 'Tomás writes about 25 words. He uses one sentence for each point: *Hola, Javier* to say hello, *no voy a clase porque…* for the reason, and *¿Qué deberes hay…?* for the question. To a classmate he writes *tú* and ends with *Un abrazo*.' },
          { t: 'ex', kind: 'tf', h: 'Look at Tomás’s message. True or false?', items: [
            { q: 'Tomás explica por qué no va a clase.', a: 't', why: '*porque estoy enfermo*: that is the reason.' },
            { q: 'Tomás no pregunta por los deberes.', a: 'f', why: 'He asks: *¿Qué deberes hay para el jueves?*' },
            { q: 'El mensaje tiene más de cincuenta palabras.', a: 'f', why: 'It has about 25 words, as the task asks.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Which sentence is it?', items: [
            { q: '¿Qué frase explica por qué no vas a clase?', o: ['Mañana no voy porque trabajo.', 'Hola, Javier.', '¿Qué deberes hay?'], why: '*porque trabajo* gives the reason.' },
            { q: '¿Qué frase es una pregunta por los deberes?', o: ['¿Qué ejercicios tenemos para el lunes?', 'Estoy enfermo.', 'Un abrazo, Tomás.'], why: 'The exercises for Monday are the homework.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the message.', items: [
            { q: 'Mañana no ___ a clase. (ir, yo)', a: ['voy'], why: '*ir* with *yo*: *voy*.' },
            { q: 'No voy ___ estoy enferma.', a: ['porque'], why: '*porque* gives the reason.' },
            { q: '¿Qué deberes ___ para el jueves?', a: ['hay'], why: '*¿Qué deberes hay…?* asks about the homework.' },
            { q: 'Un ___, Tomás', a: ['abrazo', 'saludo'], why: 'A friendly ending: *Un abrazo* or *Un saludo*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order to make sentences for the message.', items: [
            { a: 'Mañana no voy a clase.', why: 'The time *Mañana*, then *no* before the verb *voy*.' },
            { a: '¿Me escribes los deberes, por favor?', why: '*Me* comes before the verb *escribes*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Before you finish, check three things. Did you write about every point? Is the greeting right, *tú* or *usted*? Is the number of words about right?' },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: an exam-style text',
      about: 'Practise with a short text and questions in the style of an A1 reading task.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Read the questions on the next page first. Then read the text and look for the answers. Remember: the text may use other words than the questions.' },
          { t: 'reading', title: 'Una sala de estudio nueva', md: 'La biblioteca de la universidad tiene una sala de estudio nueva. Está en el tercer piso y tiene cuarenta mesas, ordenadores y una pequeña cocina.\n\nLa sala está abierta de lunes a sábado, de nueve de la mañana a nueve de la noche. El domingo no está abierta.\n\nPara usar la sala, necesitas el carné de la biblioteca. Para los estudiantes, el carné no cuesta nada. Para las otras personas, cuesta quince euros al año.\n\nEn la sala todos estudian en silencio. Para estudiar en grupo, hay cuatro salas pequeñas en el primer piso.\n\nLucía, una estudiante de biología, dice: «En mi casa hay mucho ruido, porque tengo tres hermanos. Aquí estudio muy bien.»' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose a, b or c.', items: [
            { q: 'La sala de estudio está ___.', o: ['en el tercer piso', 'en el primer piso', 'en la cocina'], why: '*Está en el tercer piso.* The small group rooms are on the first floor.' },
            { q: '¿Quién paga por el carné?', o: ['las personas que no son estudiantes', 'todos los estudiantes', 'los estudiantes de biología'], why: 'Free for students, fifteen euros for *las otras personas*.' },
            { q: 'Para estudiar con compañeros, vas ___.', o: ['al primer piso', 'al tercer piso', 'a la cocina'], why: '*Para estudiar en grupo, hay cuatro salas pequeñas en el primer piso.*' },
            { q: '¿Por qué estudia Lucía en la biblioteca?', o: ['Porque en casa no hay silencio.', 'Porque no tiene ordenador.', 'Porque trabaja en la cocina.'], why: '*mucho ruido* means there is a lot of noise: no silence at home.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the text again. True, false or not given?', items: [
            { q: 'El domingo la sala está cerrada.', a: 't', why: '*El domingo no está abierta*: it is closed.' },
            { q: 'En la sala puedes hablar con tus compañeros.', a: 'f', why: '*En la sala todos estudian en silencio.*' },
            { q: 'En la sala hay una cocina.', a: 't', why: '*una pequeña cocina*.' },
            { q: 'Lucía tiene un examen el lunes.', a: 'ng', why: 'The text does not say when Lucía has an exam.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In the question about Lucía, *silencio* is not in the text, but *mucho ruido* says the same thing the other way. Many exam questions work like this.' },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'En el texto dice «no cuesta nada». Significa ___.', o: ['gratis', 'caro', 'cerrado'], why: '*no cuesta nada* = *gratis*.' },
      { q: '«El curso comienza a las nueve.» ¿Cuándo empieza el curso?', o: ['a las nueve', 'a las diez', 'a las doce'], why: '*comenzar* = *empezar*.' },
      { q: '¿Qué haces primero en una tarea de lectura?', o: ['Leo las preguntas.', 'Leo cada palabra del texto.', 'Marco la a.'], why: 'Read the questions first, then the text.' },
      { q: 'La tarea tiene tres puntos. ¿De qué escribes?', o: ['de los tres puntos', 'de un punto', 'de dos puntos'], why: 'Write about every point in the task.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Marque la opción ___: a, b o c.', a: ['correcta'], why: '*la opción correcta*: the right option.' },
      { q: 'Mañana no voy a clase ___ estoy enfermo.', a: ['porque'], why: '*porque* gives the reason.' },
      { q: 'La biblioteca no está abierta el domingo. Está ___.', a: ['cerrada'], why: '*no está abierta* = *cerrada*. *la biblioteca* is feminine.' },
      { q: 'En el formulario, la ___ es el número de años.', a: ['edad'], why: '*la edad*: how old you are.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'En «Marque la opción correcta: a, b o c» marcas una sola opción.', a: 't', why: 'Only one option is right.' },
      { q: 'Para «entre 20 y 30 palabras», un mensaje de 80 palabras está bien.', a: 'f', why: '80 words is much too long.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the words with the same meaning.', pairs: [
      ['barato', 'no es caro'],
      ['el fin de semana', 'el sábado y el domingo'],
      ['mucho ruido', 'no hay silencio'],
      ['comenzar', 'empezar'],
    ] },
  ],
};
