// Spanish A2 for study and exams, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Learning well',
  goal: 'Talk about how you learn and plan your study time: how often you do things, what you want to do and what you have to do.',
  art: 'snail',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['frequency-words', 'study-habits', 'tener-que-hay-que', 'ir-a-infinitive', 'study-plan'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'How often do you study?',
      about: 'Say how often you do things and talk about your study habits.',
      art: 'churro',
      spreads: [
        [
          { t: 'text', md: 'To say how often you do something, use a **frequency word**. Most of them go before the verb or at the end of the sentence: *A veces estudio en la biblioteca. Estudio en la biblioteca a veces.* To ask, say: *¿Con qué frecuencia…?* or *¿Cuántas veces a la semana…?*' },
          { t: 'table', caption: 'How often?', explain: ['head', 'col1'], quiz: true, head: ['Spanish', 'English'], rows: [
            ['siempre', 'always'],
            ['casi siempre', 'almost always'],
            ['a menudo', 'often'],
            ['a veces', 'sometimes'],
            ['casi nunca', 'hardly ever'],
            ['nunca', 'never'],
            ['todos los días', 'every day'],
            ['dos veces a la semana', 'twice a week'],
          ] },
          { t: 'tip', art: 'owl', md: '*Nunca* can go before the verb: *Nunca estudio por la noche.* If it comes after the verb, put *no* before the verb: *No estudio **nunca** por la noche.* In some Latin American countries people also say *seguido* for *a menudo*.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Repaso** las palabras todos los días.', n: '*repasar*: to go over something again, to review.' },
            { s: 'En clase **tomo apuntes** en un cuaderno.', n: '*tomar apuntes*: to take notes. In Latin America people often say *tomar notas*.' },
            { s: '**Hago los deberes** por la tarde.', n: '*los deberes*: homework. In Latin America: *la tarea*.' },
            { s: '**Busco** las palabras nuevas **en el diccionario**.', n: '*buscar*: to look for, to look up.' },
          ] },
          { t: 'dialogue', title: '¿Cómo estudias?', lines: [
            { who: 'Lucía', s: 'Kenji, ¿cómo estudias el vocabulario?' },
            { who: 'Kenji', s: 'Escribo las palabras nuevas en tarjetas y las repaso todos los días en el metro.' },
            { who: 'Lucía', s: '¿Todos los días? ¡Qué disciplina! Yo casi nunca repaso las palabras.' },
            { who: 'Kenji', s: '¿Y cuándo haces los deberes?' },
            { who: 'Lucía', s: 'Normalmente los hago el domingo por la tarde. A veces escucho pódcasts en español mientras cocino.' },
            { who: 'Kenji', s: 'Buena idea. Yo nunca escucho pódcasts, pero a menudo veo series con subtítulos.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'Kenji repasa el vocabulario todos los días.', a: 't', why: '*las repaso todos los días en el metro*.' },
            { q: 'Lucía repasa las palabras a menudo.', a: 'f', why: 'She says *casi nunca*: hardly ever.' },
            { q: 'Lucía hace los deberes el domingo.', a: 't', why: '*Normalmente los hago el domingo por la tarde.*' },
            { q: 'Kenji escucha pódcasts a menudo.', a: 'f', why: 'He *nunca* listens to podcasts, but he often watches series.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Nunca estudio por la noche.', why: '*Nunca* before the verb: no *no* is needed.' },
            { a: 'Siempre hago los deberes después de clase.', why: 'The frequency word first, then the verb and the object.' },
            { a: 'No escucho nunca la radio.', why: '*Nunca* after the verb needs *no* before the verb.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Often or not often? Sort the words.', groups: ['Often', 'Not often'], explain: ['groups'], items: [
            { s: 'siempre', g: 0, why: '*siempre*: always.' },
            { s: 'a menudo', g: 0, why: '*a menudo*: often.' },
            { s: 'casi siempre', g: 0, why: '*casi siempre*: almost always.' },
            { s: 'todos los días', g: 0, why: '*todos los días*: every day.' },
            { s: 'casi nunca', g: 1, why: '*casi nunca*: hardly ever.' },
            { s: 'nunca', g: 1, why: '*nunca*: never.' },
            { s: 'una vez al año', g: 1, why: '*una vez al año*: once a year, not often.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and correct it.', items: [
            { s: 'Estudio dos [vez] a la semana.', a: ['veces'], why: 'After *dos*, the plural: *dos veces*.' },
            { s: 'Hago los deberes [cada] los días.', a: ['todos'], why: '*todos los días* (every day). *Cada* has no article: *cada día*.' },
            { s: 'Kenji [repasa nunca] las palabras.', a: ['nunca repasa', 'no repasa nunca'], why: '*Nunca* goes before the verb, or after it with *no* before the verb.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Planning your week',
      about: 'Say what you want to do, what you have to do and what you are going to do.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Three verbs help you make a study plan. All of them go with an **infinitive**. *Querer* says what you want, *tener que* says what you must do, and *ir a* says what you plan to do. *Hay que* is for what everybody must do: it has no person.' },
          { t: 'table', caption: 'Plans and duties', explain: ['head', 'col2'], head: ['Structure', 'Example', 'Meaning'], rows: [
            ['querer + infinitivo', 'Quiero aprobar el examen.', 'what you want'],
            ['tener que + infinitivo', 'Tengo que estudiar más.', 'what you must do'],
            ['ir a + infinitivo', 'Voy a repasar el lunes.', 'what you plan to do'],
            ['hay que + infinitivo', 'Hay que llegar a las nueve.', 'what everybody must do'],
          ] },
          { t: 'tip', art: 'owl', md: '*Aprobar* means to pass an exam. In Spain, *suspender* means to fail it. In much of Latin America people say *reprobar* or *desaprobar*. A goal is *un objetivo* or *una meta*.' },
        ],
        [
          { t: 'reading', title: 'El plan de estudio de Joanna para esta semana', md: 'Mi objetivo: en junio quiero hacer el examen A2.\n\nLunes: 30 minutos de vocabulario sobre el trabajo\nMartes: clase y después deberes\nMiércoles: grupo de estudio, ¡solo en español!\nJueves: leer un texto de un examen de prueba\nViernes: escribir un correo corto y mandarlo a la profesora\nSábado: ¡libre!\nDomingo: primero repasar todas las palabras, después ver una película en español' },
          { t: 'ex', kind: 'conjugate', h: 'Complete the present of ir.', verb: 'ir', tense: 'Present (for ir a + infinitive)', rows: [
            ['yo', 'voy'],
            ['tú', 'vas'],
            ['él, ella, usted', 'va'],
            ['nosotros, nosotras', 'vamos'],
            ['vosotros, vosotras', 'vais'],
            ['ellos, ellas, ustedes', 'van'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read Joanna’s plan. Choose the right answer.', items: [
            { q: '¿Qué va a hacer Joanna el miércoles?', o: ['Va a estudiar con un grupo.', 'Va a ver una película.', 'Va a ir a clase.'], why: '*Miércoles: grupo de estudio*.' },
            { q: '¿Cuándo va a escribir un correo?', o: ['el viernes', 'el jueves', 'el domingo'], why: '*Viernes: escribir un correo corto*.' },
            { q: '¿Qué día no va a estudiar?', o: ['el sábado', 'el domingo', 'el lunes'], why: '*Sábado: ¡libre!* means a free day.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
            { q: 'Joanna ___ a repasar las palabras el domingo. (ir)', a: ['va'], why: '*ir a* + infinitive: *ella va a repasar*.' },
            { q: 'En junio ___ hacer el examen. (querer, yo)', a: ['quiero'], why: '*querer* changes *e* to *ie*: *yo quiero*.' },
            { q: 'Para aprobar, ___ que estudiar todos los días. (tener, yo)', a: ['tengo'], why: '*tener que*: *yo tengo que*.' },
            { q: 'En el examen ___ que llevar un documento de identidad.', a: ['hay'], why: '*hay que*: everybody must do it, no person.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'build', h: 'Build the sentence. Two words do not belong.', items: [
            { a: 'Voy a estudiar el lunes por la tarde.', extra: ['estudio', 'que'], why: '*ir a* + infinitive: *voy a estudiar*. No *que* after *ir*.' },
            { a: 'Tengo que hacer los deberes hoy.', extra: ['a', 'hago'], why: '*tener que* + infinitive: *tengo que hacer*.' },
            { a: 'Quiero aprobar el examen en junio.', extra: ['voy', 'que'], why: '*querer* + infinitive, with nothing in between.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'Mañana ___ a repasar la gramática.', o: ['voy', 'tengo', 'quiero'], why: '*ir a* + infinitive. *Tengo* needs *que*, and *quiero* has no *a*.' },
            { q: 'Tengo ___ estudiar más.', o: ['que', 'a', 'de'], why: '*tener que* + infinitive.' },
            { q: 'Nosotros ___ a hacer el examen en junio.', o: ['vamos', 'van', 'vais'], why: '*nosotros vamos*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: study tips from other learners',
      about: 'Read three learners’ tips and find who does what.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Three learners write in a forum about how they learn Spanish. Read the posts and think: which tip is good for you?' },
          { t: 'reading', title: 'Foro: ¿Cómo aprendéis español?', md: '**Kwame, 31 años:** Trabajo mucho y tengo poco tiempo. Por eso estudio en ratos cortos: diez minutos en el autobús y diez minutos en la pausa de la comida. Uso una aplicación de vocabulario y repaso las palabras todos los días.\n\n**Sofia, 24 años:** Aprendo mejor con otras personas. Una vez a la semana quedo con una compañera de intercambio. Ella aprende alemán y yo aprendo español. Hablamos una hora en español y una hora en alemán. ¡Los errores no son un problema!\n\n**Daniel, 45 años:** Para mí, el orden es muy importante. Tengo un cuaderno solo para el vocabulario y siempre escribo los sustantivos con el artículo: el lápiz, la mesa, el problema. Los domingos leo otra vez todas las palabras de la semana. ¡Y antes de un examen duermo bien!' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Who is it? Choose the name.', items: [
            { q: '¿Quién aprende con otra persona?', o: ['Sofia', 'Kwame', 'Daniel'], why: 'Sofia meets *una compañera de intercambio* once a week.' },
            { q: '¿Quién estudia en el autobús?', o: ['Kwame', 'Sofia', 'Daniel'], why: 'Kwame: *diez minutos en el autobús*.' },
            { q: '¿Quién tiene un cuaderno para las palabras?', o: ['Daniel', 'Kwame', 'Sofia'], why: 'Daniel: *un cuaderno solo para el vocabulario*.' },
            { q: '¿Quién usa una aplicación?', o: ['Kwame', 'Daniel', 'Sofia'], why: 'Kwame: *Uso una aplicación de vocabulario*.' },
          ] },
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Kwame tiene mucho tiempo libre.', a: 'f', why: 'He says *tengo poco tiempo*.' },
            { q: 'Sofia y su compañera hablan dos idiomas.', a: 't', why: 'One hour in Spanish and one hour in German.' },
            { q: 'Daniel estudia en una biblioteca.', a: 'ng', why: 'The text does not say where Daniel studies.' },
            { q: 'Daniel repasa las palabras los domingos.', a: 't', why: '*Los domingos leo otra vez todas las palabras de la semana.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'wordform', h: 'Write the right form of the word in capitals.', items: [
            { q: 'Daniel es una persona muy ___.', base: 'orden', a: ['ordenada'], why: '*orden* (order) → *ordenado, ordenada* (tidy). *Persona* is feminine, so *ordenada*.' },
            { q: 'Kwame usa una ___ de vocabulario.', base: 'aplicar', a: ['aplicación', 'aplicacion'], why: 'Many nouns end in *-ción*: *aplicar → aplicación*.' },
            { q: 'Sofia es ___ de español.', base: 'estudiar', a: ['estudiante'], why: '*estudiar → estudiante*, the same form for a man and a woman.' },
          ] },
          { t: 'ex', kind: 'memory', h: 'Find the pairs: words with the opposite meaning.', pairs: [
            ['aprobar', 'suspender'],
            ['siempre', 'nunca'],
            ['empezar', 'terminar'],
            ['abierto', 'cerrado'],
            ['mucho', 'poco'],
            ['antes', 'después'],
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: '¿Con qué frecuencia estudias? —___, todos los días.', o: ['Siempre', 'Nunca', 'Casi nunca'], why: '*todos los días* means always, *siempre*.' },
      { q: 'Mañana voy ___ estudiar.', o: ['a', 'que', 'de'], why: '*ir a* + infinitive.' },
      { q: 'En el examen ___ que escribir un correo.', o: ['hay', 'es', 'va'], why: '*hay que* + infinitive: everybody must do it.' },
      { q: '«Casi nunca» significa ___.', o: ['muy pocas veces', 'muchas veces', 'todos los días'], why: '*casi nunca*: hardly ever.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Este año ___ aprobar el examen A2. (querer, yo)', a: ['quiero'], why: '*querer*: *yo quiero*, with *ie*.' },
      { q: 'Hoy ___ que hacer los deberes. (tener, yo)', a: ['tengo'], why: '*tener que*: *yo tengo que*.' },
      { q: 'Nosotros ___ a estudiar juntos el sábado. (ir)', a: ['vamos'], why: '*ir a* + infinitive: *nosotros vamos*.' },
      { q: 'Repaso el vocabulario dos ___ a la semana.', a: ['veces'], why: '*una vez*, *dos veces*: the plural of *vez* is *veces*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and correct it.', items: [
      { s: 'Ellos [va] a hacer el examen en mayo.', a: ['van'], why: '*ellos van*.' },
      { s: 'Tengo [de] estudiar más.', a: ['que'], why: '*tener que* + infinitive.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Siempre hago los deberes por la tarde.', why: 'The frequency word first, then the verb and the object.' },
      { a: 'Voy a repasar las palabras mañana.', why: '*Voy a* + infinitive, then the object and the time.' },
    ] },
  ],
};
