// Spanish A2 for study and exams, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Short texts',
  goal: 'Write short emails and messages to a teacher or a school: greet, give a reason, ask for information and reply.',
  art: 'cat',
  tags: { skills: ['writing', 'reading', 'grammar'], topics: ['email', 'greetings-endings', 'porque-por-eso', 'polite-requests', 'indirect-questions'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'An email to your teacher',
      about: 'Write a short email to a teacher: greeting, reason and ending.',
      art: 'churro',
      spreads: [
        [
          { t: 'text', md: 'A short email has three parts. First the **greeting** (*Hola, Marta:*), then the **reason** you write and what you need, and at the end a **closing** and your name (*Un saludo, Omar*). To give a reason, use **porque**.' },
          { t: 'reading', title: 'Asunto: Clase del jueves', md: 'Hola, Marta:\n\nEl jueves no puedo ir a clase porque tengo una cita con el médico. ¿Me puedes mandar los deberes, por favor? Así los hago en casa.\n\nMuchas gracias y un saludo,\nOmar Karimi' },
          { t: 'tip', art: 'owl', md: 'In Spanish, the greeting of a letter or email ends with a **colon**: *Hola, Marta:* The next line starts with a capital letter. In Spain many learners say *tú* to their teacher in a language school. At university and to an office, use *usted*. In Latin America, *usted* is more common with teachers.' },
        ],
        [
          { t: 'table', caption: 'Greetings and endings', explain: ['head', 'col0'], quiz: true, head: ['Part', 'Formal (usted)', 'Friendly (tú)'], rows: [
            ['Greeting to a person', 'Estimada señora López:', 'Hola, Marta:'],
            ['Greeting to an office', 'Estimados señores:', 'Hola:'],
            ['Thanks', 'Le agradezco su ayuda.', 'Gracias por tu ayuda.'],
            ['Ending', 'Atentamente', 'Un saludo'],
          ] },
          { t: 'examples', items: [
            { s: 'No puedo ir a clase **porque** estoy enfermo.', n: '*porque* + the reason. The word order after *porque* does not change.' },
            { s: 'Llego tarde **porque** el autobús no ha venido.', n: 'The reason can be in any tense.' },
            { s: 'Te escribo **porque** tengo una pregunta.', n: 'A very common first sentence in an email.' },
            { s: 'Estoy enfermo. **Por eso** no puedo ir el lunes.', n: '*por eso*: for this reason. It comes before the result.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'How do you start or end the email?', items: [
            { q: 'Escribes a tu profesora Marta. Le dices «tú». Empiezas: ___', o: ['Hola, Marta:', 'Estimados señores:', 'Atentamente:'], why: 'A friendly greeting with the first name: *Hola, Marta:*' },
            { q: 'Escribes a la secretaría de una universidad. Empiezas: ___', o: ['Estimados señores:', 'Hola, guapa:', '¡Hola a todos!'], why: 'To an office you do not know: *Estimados señores:*' },
            { q: 'Terminas un correo formal: ___', o: ['Atentamente', 'Un abrazo', 'Besos'], why: '*Atentamente* is formal. *Un abrazo* and *besos* are for friends and family.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write porque or por eso.', items: [
            { q: 'No voy a clase ___ tengo fiebre.', a: ['porque'], why: 'The reason comes after: *porque tengo fiebre*.' },
            { q: 'Tengo fiebre. ___ no voy a clase.', a: ['Por eso'], why: 'The reason comes first, then *por eso* + the result.' },
            { q: 'Te escribo ___ tengo una pregunta sobre los deberes.', a: ['porque'], why: '*Te escribo porque…* gives the reason for the email.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order to make sentences for the email.', items: [
            { a: 'El jueves no puedo ir a clase.', why: 'The day first, then *no* before the verb *puedo*.' },
            { a: '¿Me puedes mandar los deberes?', why: '*me* goes before *puedes*. It can also go on the end of the infinitive: *¿Puedes mandarme…?*' },
            { a: 'Muchas gracias por tu ayuda.', why: '*gracias por* + the thing you thank someone for.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Make one sentence with porque.', items: [
            { q: 'Estoy enfermo. No puedo ir a clase.', cue: 'No puedo ir a clase', a: ['No puedo ir a clase porque estoy enfermo.'], why: 'First the result, then *porque* + the reason.' },
            { q: 'Tengo un examen. Por eso no voy a la fiesta.', cue: 'No voy a la fiesta', a: ['No voy a la fiesta porque tengo un examen.'], why: '*por eso* comes before the result, *porque* before the reason.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Asking for information and replying',
      about: 'Ask a school politely for information, and answer a question in a message.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'When you ask a school or an office for information, a direct question can sound too short. These fixed phrases are more polite: **quería** (I would like), **me gustaría saber** (I would like to know) and **¿podría…?** (could you…?, with *usted*).' },
          { t: 'examples', items: [
            { s: '**Quería** información sobre el curso de verano.', n: '*quería* sounds more polite than *quiero*.' },
            { s: '**Me gustaría saber** cuándo empieza el curso.', n: 'A polite way to ask a question.' },
            { s: '¿**Podría** mandarme el horario, por favor?', n: '*podría* = could you, with *usted*. With *tú*: *¿podrías…?*' },
            { s: '¿**Hay** clases por la tarde?', n: '*hay*: are there…?' },
            { s: '¿**Cuánto cuesta** el curso?', n: 'To ask the price.' },
          ] },
        ],
        [
          { t: 'text', md: 'You can put a question inside a polite sentence. A question word keeps its accent: *cuándo, dónde, cuánto*. For a yes/no question, use **si** (if), with no accent.' },
          { t: 'table', caption: 'Questions inside a sentence', explain: ['head'], head: ['Direct question', 'In a polite sentence'], rows: [
            ['¿Cuándo empieza el curso?', 'Quería saber cuándo empieza el curso.'],
            ['¿Cuánto cuesta?', 'Me gustaría saber cuánto cuesta.'],
            ['¿Hay plazas libres?', 'Quería saber si hay plazas libres.'],
            ['¿Dónde es el examen?', 'Me gustaría saber dónde es el examen.'],
          ] },
          { t: 'tip', art: 'owl', md: '*si* without an accent means if. *sí* with an accent means yes. *¿Sabe si hay clase? Sí, hay clase.*' },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Ask the question politely. Start with the words given.', items: [
            { q: '¿Cuándo es el examen?', cue: 'Quería saber', a: ['Quería saber cuándo es el examen.'], why: 'The question word *cuándo* keeps its accent inside the sentence.' },
            { q: '¿Hay clases los sábados?', cue: 'Me gustaría saber', a: ['Me gustaría saber si hay clases los sábados.'], why: 'A yes/no question: add *si*.' },
            { q: '¿Cuánto cuesta la matrícula?', cue: 'Quería saber', a: ['Quería saber cuánto cuesta la matrícula.'], why: '*cuánto* keeps its accent. *La matrícula* is the fee to enrol.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'Me gustaría saber ___ hay plazas libres.', o: ['si', 'sí', 'qué'], why: 'A yes/no question inside a sentence: *si*, with no accent.' },
            { q: 'Quería saber ___ cuesta el curso.', o: ['cuánto', 'cuanto', 'dónde'], why: 'You ask the price, and the question word keeps its accent: *cuánto*.' },
            { q: '¿___ mandarme el horario, por favor? (usted)', o: ['Podría', 'Podrías', 'Puedo'], why: 'With *usted*: *podría*. *Podrías* is for *tú*.' },
          ] },
        ],
        [
          { t: 'text', md: 'When you reply, thank the person, answer every question and, if you can, offer more help.' },
          { t: 'ex', kind: 'bank', h: 'Complete the reply with the words.', extra: ['aunque', 'cuándo'], items: [
            { q: 'Muchas ___ por tu correo.', a: 'gracias', why: '*Muchas gracias por…* is a good first sentence in a reply.' },
            { q: 'Te mando el horario en un archivo ___.', a: 'adjunto', why: '*un archivo adjunto*: an attachment.' },
            { q: '___ siento, pero no hay clases los sábados.', a: 'Lo', why: '*Lo siento*: I am sorry.' },
            { q: 'Para más información, puedes ___ a la secretaría.', a: 'llamar', why: '*llamar a*: to phone someone.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the question and the answer.', pairs: [
            ['¿Hay clases por la tarde?', 'Sí, de seis a ocho.'],
            ['¿Cuánto cuesta el curso?', 'Doscientos euros al mes.'],
            ['¿Dónde es el examen?', 'En el aula 5.'],
            ['¿Cuándo empieza el curso?', 'El 6 de mayo.'],
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: a learner writes to a school',
      about: 'Read an email to a language school and its reply, and find the information.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Yuki wants to do an exam course. She writes to a language school, and the school replies. Both emails are formal: they use *usted*.' },
          { t: 'reading', title: 'Asunto: Pregunta sobre el curso de preparación A2', md: 'Estimados señores:\n\nEstudio español desde hace un año y quiero hacer el examen A2 en verano. Tengo algunas preguntas sobre su curso de preparación. ¿Cuándo empieza el próximo curso? ¿Hay también clases por la tarde? Es que trabajo hasta las cinco.\n\nUn cordial saludo,\nYuki Tanaka' },
          { t: 'reading', title: 'Asunto: RE: Pregunta sobre el curso de preparación A2', md: 'Estimada señora Tanaka:\n\nMuchas gracias por su correo. El próximo curso de preparación empieza el 6 de mayo. Hay un grupo por la mañana y otro por la tarde. El grupo de tarde tiene clase los lunes y los miércoles, de 18:00 a 20:30, y todavía tiene cuatro plazas libres.\n\nAntes del curso, todos los estudiantes hacen una prueba de nivel corta. Puede hacerla por internet. En el archivo adjunto tiene el enlace.\n\nSi tiene más preguntas, puede escribirnos.\n\nAtentamente,\nRafael Gómez\nEscuela de Idiomas del Río' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the emails. True, false or not given?', items: [
            { q: 'Yuki estudia español desde hace un año.', a: 't', why: '*Estudio español desde hace un año.*' },
            { q: 'Yuki no puede ir a clase antes de las cinco.', a: 't', why: '*Es que trabajo hasta las cinco.*' },
            { q: 'El grupo de tarde tiene clase tres días a la semana.', a: 'f', why: 'Only on Monday and Wednesday: two days.' },
            { q: 'El grupo de tarde está completo.', a: 'f', why: 'There are still *cuatro plazas libres*.' },
            { q: 'La prueba de nivel es gratis.', a: 'ng', why: 'The email does not say if the test costs money.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: '¿Qué hay en el archivo adjunto?', o: ['el enlace a la prueba de nivel', 'el horario de la mañana', 'el libro del curso'], why: '*En el archivo adjunto tiene el enlace.*' },
            { q: 'Rafael usa «usted» porque ___.', o: ['es un correo formal', 'es amigo de Yuki', 'Yuki es su profesora'], why: 'A school writing to a new student uses *usted*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the usted forms in the school’s email.', items: [
            { s: 'Muchas gracias por [su] correo. [Puede] hacerla por internet. Si [tiene] más preguntas, [puede] escribirnos.', why: '*su* (your), *puede* and *tiene*: the *usted* forms, the same as *él* and *ella*.' },
          ] },
          { t: 'ex', kind: 'odd', h: 'Which one is different?', items: [
            { o: ['Un abrazo', 'Atentamente', 'Un cordial saludo', 'Estimados señores:'], why: '*Un abrazo* is friendly. The others are formal.' },
            { o: ['la cocina', 'la matrícula', 'la prueba de nivel', 'la plaza libre'], why: '*la cocina* (the kitchen) has nothing to do with enrolling in a course.' },
          ] },
          { t: 'tip', art: 'owl', md: '*Es que…* is a friendly way to start an explanation: *Es que trabajo hasta las cinco.* It is very common in speaking and in short emails.' },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Escribes a la secretaría de la universidad: ___', o: ['Estimados señores:', 'Hola, chicos:', 'Un abrazo:'], why: 'To an office: *Estimados señores:*' },
      { q: 'Al final de un correo formal escribes: ___', o: ['Atentamente', 'Besos', '¡Hasta luego, chicos!'], why: '*Atentamente* is the formal ending.' },
      { q: '¿Me ___ mandar el horario? (tú)', o: ['puedes', 'puede', 'pueden'], why: '*tú puedes*.' },
      { q: 'Quería saber ___ es el examen.', o: ['dónde', 'donde', 'si'], why: 'A question word inside a sentence keeps its accent: *dónde*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'No puedo ir ___ tengo un examen.', a: ['porque'], why: '*porque* + the reason.' },
      { q: 'Estoy enfermo. ___ no voy a clase.', a: ['Por eso'], why: '*por eso* + the result.' },
      { q: 'Me gustaría saber ___ hay clases en agosto.', a: ['si'], why: 'A yes/no question inside a sentence: *si*.' },
      { q: '___ información sobre el curso de verano. (querer, polite)', a: ['Quería', 'Queria'], why: '*Quería* is more polite than *quiero*.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentences.', items: [
      { q: '¿Dónde es el examen?', cue: 'Me gustaría saber', a: ['Me gustaría saber dónde es el examen.'], why: 'The question word keeps its accent: *dónde*.' },
      { q: 'Tengo una cita. No voy a clase.', cue: 'No voy a clase', a: ['No voy a clase porque tengo una cita.'], why: 'The result, then *porque* + the reason.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Muchas gracias por su correo.', why: '*gracias por* + what you thank for. *su*: the formal *your*.' },
      { a: 'Quería saber cuándo empieza el curso.', why: '*Quería saber* + question word + verb + subject.' },
    ] },
  ],
};
