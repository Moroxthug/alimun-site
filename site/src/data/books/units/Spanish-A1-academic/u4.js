// Spanish A1 for study and exams, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Asking teachers and classmates',
  goal: 'Ask your classmates and your teacher for things, help and information: question words, tú or usted, homework and exam dates.',
  art: 'cactus',
  tags: { skills: ['speaking', 'grammar', 'reading', 'writing'], topics: ['question-words', 'asking-for-things', 'tu-usted', 'poder', 'homework', 'email-to-a-teacher'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: '¿Me dejas un boli?',
      about: 'Ask a classmate for a thing or for information, with the right question word.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Question words in Spanish always have an **accent**: *qué, quién, dónde, cuándo, cómo, cuánto*. A question has **¿** at the start and **?** at the end. **¿Cuánto?** changes with the noun: *cuánto tiempo, cuánta agua, cuántos libros, cuántas páginas*.' },
          { t: 'table', caption: 'Question words', explain: ['head', 'col1'], quiz: true, head: ['Spanish', 'English'], rows: [
            ['¿Qué?', 'What? Which?'],
            ['¿Quién?', 'Who?'],
            ['¿Dónde?', 'Where?'],
            ['¿Cuándo?', 'When?'],
            ['¿Cómo?', 'How?'],
            ['¿Cuánto? ¿Cuántos? ¿Cuántas?', 'How much? How many?'],
            ['¿Por qué?', 'Why?'],
          ] },
          { t: 'tip', art: 'churro', md: '**¿Por qué?** (two words, with an accent) asks why. **porque** (one word, no accent) gives the reason: *¿Por qué no vienes? Porque estoy enfermo.*' },
        ],
        [
          { t: 'examples', items: [
            { s: '¿**Me dejas** tu goma, por favor?', n: '*dejar* here means to lend. *¿Me dejas…?*: can I borrow…?' },
            { s: '¿**Tienes** un boli?', n: 'A simple way to ask for a thing.' },
            { s: '¿**Qué** página es?', n: 'You ask for the page number.' },
            { s: '¿**Qué** deberes hay para mañana?', n: 'You ask about the homework.' },
            { s: '¿**Quién** es el profesor de economía?', n: 'You ask about a person.' },
            { s: '¿**Dónde** está el aula 7?', n: 'You ask about a place.' },
          ] },
          { t: 'dialogue', title: 'Before the class', lines: [
            { who: 'Javier', s: 'Hola, Yuki. ¿Me dejas un boli, por favor?' },
            { who: 'Yuki', s: 'Sí, claro. Toma.' },
            { who: 'Javier', s: 'Gracias. Oye, ¿qué deberes hay para hoy?' },
            { who: 'Yuki', s: 'Los ejercicios de la página treinta.' },
            { who: 'Javier', s: '¿Cuántos ejercicios son?' },
            { who: 'Yuki', s: 'Cuatro. ¿No tienes el libro?' },
            { who: 'Javier', s: 'No, está en casa. ¿Miramos tu libro juntos?' },
            { who: 'Yuki', s: 'Vale, no hay problema.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the question and the answer.', pairs: [
            ['¿Quién es tu profesora?', 'Elena.'],
            ['¿Dónde está la biblioteca?', 'En el segundo piso.'],
            ['¿Cuándo es el examen?', 'El viernes.'],
            ['¿Cuántos ejercicios son?', 'Cuatro.'],
            ['¿Por qué no tienes el libro?', 'Porque está en casa.'],
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the question word.', items: [
            { q: '¿___ está mi mochila? Está debajo de la mesa.', o: ['Dónde', 'Cuándo', 'Quién'], why: 'The answer is a place, so *dónde*.' },
            { q: '¿___ es la clase de inglés? Es el jueves.', o: ['Cuándo', 'Dónde', 'Cómo'], why: 'The answer is a day, so *cuándo*.' },
            { q: '¿___ páginas tiene el texto? Diez.', o: ['Cuántas', 'Cuántos', 'Qué'], why: 'A number of *páginas*, a feminine plural noun: *cuántas*.' },
            { q: '¿___ es esa chica? Es Mei, mi compañera.', o: ['Quién', 'Qué', 'Cómo'], why: 'The answer is a person, so *quién*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the questions to a classmate.', items: [
            { q: '¿Me ___ tu diccionario, por favor? (dejar)', a: ['dejas'], why: 'To a classmate you use *tú*: *¿me dejas…?*' },
            { q: '¿___ un lápiz? (tener)', a: ['Tienes'], why: '*tener* with *tú*: *tienes*.' },
            { q: '¿___ página es? Es la página doce.', a: ['Qué'], why: '*¿Qué página…?* asks which page.' },
          ] },
          { t: 'ex', kind: 'build', h: 'Build the question. Two words do not belong.', items: [
            { a: '¿Qué deberes hay para mañana?', extra: ['está', 'quién'], why: '*¿Qué deberes hay…?* *hay* with the homework, not *está*.' },
            { a: '¿Me dejas tu goma, por favor?', extra: ['dejo', 'su'], why: 'To a classmate: *tú* forms, *dejas* and *tu*.' },
          ] },
          { t: 'ex', kind: 'odd', h: 'Which one is not a question word?', items: [
            { o: ['porque', 'dónde', 'cuándo', 'quién'], why: '*porque* gives a reason. It is not a question word.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Perdone, ¿puede…?',
      about: 'Speak to a teacher with usted or tú, ask for help and ask about homework and exams.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'At many universities and schools in Spain, learners say **usted** to a teacher at first. In language schools, **tú** is more common. If you are not sure, start with *usted*. The teacher may say: *Puedes llamarme de tú.* With *usted*, the verb has the same form as with *él* and *ella*.' },
          { t: 'table', caption: 'tú or usted', explain: ['head'], quiz: true, head: ['With tú', 'With usted'], rows: [
            ['Perdona.', 'Perdone.'],
            ['¿Puedes repetir?', '¿Puede repetir?'],
            ['¿Tienes un momento?', '¿Tiene un momento?'],
            ['¿Es tu libro?', '¿Es su libro?'],
          ] },
          { t: 'tip', art: 'churro', md: 'In Latin America, *usted* is more common with teachers. For a group, Latin America always uses *ustedes*, never *vosotros*: *¿Ustedes tienen el libro?*' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Perdone, ¿**puede** explicar el ejercicio otra vez?', n: '*poder* (o > ue) + infinitive: *puede explicar*.' },
            { s: '¿**Puedo** usar el diccionario?', n: '*¿Puedo…?* asks for permission.' },
            { s: '¿**Puedo** salir un momento?', n: 'You want to leave the room for a short time.' },
            { s: '¿**Para cuándo** son los deberes?', n: '*¿Para cuándo…?* asks for the day you give the homework.' },
            { s: '¿**Cuándo es** el examen?', n: 'You ask for the date of the exam.' },
            { s: '¿**Qué entra** en el examen?', n: '*entrar en el examen*: to be in the exam. You ask what to study.' },
          ] },
          { t: 'ex', kind: 'conjugate', h: 'Write the forms of poder. It changes o > ue.', verb: 'poder', tense: 'present', rows: [
            ['yo', 'puedo', 'o > ue: *puedo*.'],
            ['tú', 'puedes', 'o > ue: *puedes*.'],
            ['él, ella, usted', 'puede', 'o > ue: *puede*.'],
            ['nosotros', 'podemos', 'No change with *nosotros*.'],
            ['vosotros', 'podéis', 'No change with *vosotros*. Note the accent.'],
            ['ellos, ellas, ustedes', 'pueden', 'o > ue: *pueden*.'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'After the class', lines: [
            { who: 'Ana', s: 'Perdone, profesor. ¿Tiene un momento?' },
            { who: 'Rafael', s: 'Sí, claro. Dime.' },
            { who: 'Ana', s: 'No entiendo el ejercicio cinco. ¿Puede explicarlo otra vez?' },
            { who: 'Rafael', s: 'Claro. Completas las frases con el verbo ser o con estar.' },
            { who: 'Ana', s: 'Ah, vale. ¿Y para cuándo son los deberes?' },
            { who: 'Rafael', s: 'Para el jueves.' },
            { who: 'Ana', s: 'Una pregunta más. ¿Cuándo es el examen?' },
            { who: 'Rafael', s: 'El martes diecinueve, a las diez, en el aula cinco.' },
            { who: 'Ana', s: '¿Puedo usar el diccionario en el examen?' },
            { who: 'Rafael', s: 'No, en el examen no.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'Ana habla de usted con el profesor.', a: 't', why: 'She says *Perdone* and *¿Tiene…?*: *usted* forms.' },
            { q: 'Ana no entiende el ejercicio cuatro.', a: 'f', why: 'She does not understand *el ejercicio cinco*.' },
            { q: 'Los deberes son para el jueves.', a: 't', why: '*Para el jueves.*' },
            { q: 'En el examen pueden usar el diccionario.', a: 'f', why: '*No, en el examen no.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Ask your teacher with usted.', items: [
            { q: 'Perdona, ¿puedes repetir?', a: ['Perdone, ¿puede repetir?', 'Perdone, puede repetir'], why: 'With *usted*: *perdone* and *puede*.' },
            { q: '¿Tienes un momento?', a: ['¿Tiene un momento?', 'Tiene un momento'], why: 'With *usted*, *tienes* becomes *tiene*.' },
            { q: '¿Puedes explicar el ejercicio?', a: ['¿Puede explicar el ejercicio?', 'Puede explicar el ejercicio'], why: 'With *usted*, *puedes* becomes *puede*.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Is the learner speaking with tú or with usted?', groups: ['tú', 'usted'], items: [
            { s: 'Perdona, Elena.', g: 0, why: '*Perdona* is the *tú* form.' },
            { s: 'Perdone, profesor.', g: 1, why: '*Perdone* is the *usted* form.' },
            { s: '¿Puede hablar más despacio?', g: 1, why: '*puede*: the form of *usted*.' },
            { s: '¿Tienes un momento?', g: 0, why: '*tienes*: the form of *tú*.' },
            { s: '¿Es su cuaderno?', g: 1, why: '*su* goes with *usted*.' },
            { s: '¿Es tu cuaderno?', g: 0, why: '*tu* goes with *tú*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: a group chat and an email',
      about: 'Read messages between classmates and a short email to a teacher, and find the information.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Many classes have a group chat. Classmates ask about homework, rooms and times. The messages are short and use **tú** and **vosotros**.' },
          { t: 'reading', title: 'Chat: Español A1, grupo de tarde', md: '**Javier:** Hola, chicos. ¿Qué deberes hay para el jueves?\n\n**Yuki:** Los ejercicios tres y cuatro de la página treinta y dos.\n\n**Javier:** ¡Gracias! ¿Y la clase del jueves es en el aula 5?\n\n**Mei:** No, el jueves es en el aula 8, en el primer piso.\n\n**Omar:** Una pregunta: ¿tenéis el correo electrónico del profesor?\n\n**Yuki:** Sí, es profesor.gomez@example.com.\n\n**Omar:** ¡Genial! Gracias, Yuki.' },
          { t: 'ex', kind: 'choice', h: 'Read the chat. Choose the right answer.', items: [
            { q: '¿Qué deberes hay para el jueves?', o: ['dos ejercicios de la página treinta y dos', 'cuatro ejercicios de la página tres', 'un texto de la página treinta'], why: '*Los ejercicios tres y cuatro de la página treinta y dos*: two exercises.' },
            { q: '¿Dónde es la clase del jueves?', o: ['en el aula 8', 'en el aula 5', 'en el aula 32'], why: 'Mei says: *el jueves es en el aula 8*.' },
            { q: '¿Qué necesita Omar?', o: ['el correo electrónico del profesor', 'un boli', 'el horario'], why: '*¿tenéis el correo electrónico del profesor?*' },
          ] },
        ],
        [
          { t: 'text', md: 'An email to a teacher is more formal. It starts with **Estimado** (to a man) or **Estimada** (to a woman) and the name, and a colon. Say who you are, ask your question and end with **Un saludo** and your name.' },
          { t: 'reading', title: 'Correo electrónico de Ana', md: 'Asunto: Pregunta sobre el examen\n\nEstimada profesora Ruiz:\n\nMe llamo Ana Torres y soy estudiante de su clase de historia, el grupo de los martes y jueves. Tengo dos preguntas. ¿El examen es el jueves catorce o el martes diecinueve? ¿Y podemos usar el diccionario en el examen?\n\nMuchas gracias.\n\nUn saludo,\nAna Torres' },
          { t: 'reading', title: 'Respuesta de la profesora', md: 'Hola, Ana:\n\nEl examen es el martes diecinueve, a las diez, en el aula 12. No podéis usar el diccionario. El examen es de los temas uno, dos y tres.\n\nUn saludo,\nCarmen Ruiz' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the two emails. True, false or not given?', items: [
            { q: 'Ana habla de usted con la profesora.', a: 't', why: 'She writes *su clase*: *su* is for *usted*.' },
            { q: 'El examen es el jueves catorce.', a: 'f', why: '*El examen es el martes diecinueve.*' },
            { q: 'Los estudiantes pueden usar el diccionario.', a: 'f', why: '*No podéis usar el diccionario.*' },
            { q: 'El examen dura dos horas.', a: 'ng', why: 'The email gives the start time, not how long the exam is.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order to make sentences for an email to a teacher.', items: [
            { a: 'Soy estudiante de su clase de español.', why: '*Soy estudiante de…*: you say who you are. *su* is for *usted*.' },
            { a: 'Tengo una pregunta sobre el examen.', why: '*Tengo una pregunta sobre…*: then the topic.' },
            { a: '¿Cuándo es el examen?', why: 'The question word *Cuándo*, then *es*, then *el examen*.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the words that show Ana writes with usted.', items: [
            { s: 'Estimada profesora Ruiz: soy estudiante de [su] clase de historia.', why: '*su clase*: the possessive for *usted*. With *tú* it is *tu clase*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: '¿___ está el aula 7? En el primer piso.', o: ['Dónde', 'Cuándo', 'Quién'], why: 'The answer is a place, so *dónde*.' },
      { q: 'Hablas con un profesor de usted: «___, ¿tiene un momento?»', o: ['Perdone', 'Perdona', 'Oye'], why: '*Perdone* is the *usted* form.' },
      { q: '¿___ páginas son? Doce.', o: ['Cuántas', 'Cuántos', 'Cuánto'], why: '*páginas* is feminine plural: *cuántas*.' },
      { q: 'Un correo a una profesora empieza con: «___ profesora Ruiz:»', o: ['Estimada', 'Estimado', 'Oye'], why: 'To a woman: *Estimada*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: '¿Me ___ tu goma, por favor? (dejar)', a: ['dejas'], why: 'To a classmate: *¿me dejas…?*' },
      { q: '¿___ usar el diccionario? (poder, yo)', a: ['Puedo'], why: '*poder* with *yo*: *puedo* (o > ue).' },
      { q: '¿Para ___ son los deberes? Para el jueves.', a: ['cuándo'], why: '*¿Para cuándo…?* asks for the day.' },
      { q: '¿Por qué no vienes? ___ estoy enfermo.', a: ['Porque'], why: '*porque* (one word, no accent) gives the reason.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Ask with usted.', items: [
      { q: '¿Puedes repetir, por favor?', a: ['¿Puede repetir, por favor?', 'Puede repetir, por favor'], why: 'With *usted*, *puedes* becomes *puede*.' },
      { q: '¿Tienes un momento?', a: ['¿Tiene un momento?', 'Tiene un momento'], why: 'With *usted*, *tienes* becomes *tiene*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the question and the answer.', pairs: [
      ['¿Qué deberes hay?', 'Los ejercicios de la página treinta.'],
      ['¿Quién es tu profesor?', 'Rafael.'],
      ['¿Cuándo es el examen?', 'El martes diecinueve.'],
      ['¿Cuántos ejercicios son?', 'Cuatro.'],
    ] },
  ],
};
