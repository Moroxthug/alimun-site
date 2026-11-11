// Spanish A1 for study and exams, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Learning strategies and notes',
  goal: 'Say how you learn and how often, make good notes and a vocabulary notebook, and plan your study with ir a + infinitive.',
  art: 'sun',
  tags: { skills: ['vocabulary', 'grammar', 'reading', 'speaking'], topics: ['learning-strategies', 'gustar', 'frequency', 'vocabulary-notebook', 'ir-a-infinitive', 'study-goals'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Me gusta leer',
      about: 'Say how you like to learn and how often you do things to learn Spanish.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'To say what you like, use **me gusta** with one thing or with an infinitive: *Me gusta la música. Me gusta leer.* Use **me gustan** with two or more things: *Me gustan las canciones.* For another person: *te gusta* (you), *le gusta* (he, she, you with *usted*).' },
          { t: 'examples', items: [
            { s: '**Me gusta** estudiar por la mañana.', n: '*me gusta* + infinitive.' },
            { s: '**Me gustan** las canciones en español.', n: '*las canciones*: plural, so *gustan*.' },
            { s: 'No **me gusta** la gramática.', n: '*No* goes before *me gusta*.' },
            { s: '¿**Te gusta** leer en español?', n: 'You ask a classmate.' },
            { s: 'A mi compañera **le gustan** los vídeos.', n: '*le gustan*: she likes, with a plural thing.' },
          ] },
          { t: 'tip', art: 'churro', md: 'To agree, say **A mí también** (me too) after a yes, and **A mí tampoco** (me neither) after a no: *Me gusta leer. A mí también. No me gusta la gramática. A mí tampoco.*' },
        ],
        [
          { t: 'text', md: 'To say how often, use **siempre** (always), **a menudo** (often), **a veces** (sometimes) and **nunca** (never). *Nunca* goes before the verb: *Nunca estudio por la noche.* You can also say *No estudio nunca por la noche.*' },
          { t: 'examples', items: [
            { s: '**Siempre** repito las palabras nuevas en voz alta.', n: '*repetir* changes e > i: *repito*. *en voz alta*: so others can hear.' },
            { s: '**A menudo** escucho canciones en español.', n: '*a menudo*: many times, but not always.' },
            { s: '**A veces** leo textos cortos en el móvil.', n: '*a veces*: some times.' },
            { s: '**Nunca** estudio después de las once.', n: '*nunca* before the verb, with no *no*.' },
            { s: 'Los domingos repaso el vocabulario.', n: '*repasar*: to look at again what you studied.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'How do you learn?', lines: [
            { who: 'Sara', s: 'Daniel, ¿cómo aprendes las palabras nuevas?' },
            { who: 'Daniel', s: 'Las escribo en un cuaderno y siempre las repito en voz alta.' },
            { who: 'Sara', s: '¿Y escuchas música en español?' },
            { who: 'Daniel', s: 'Sí, a menudo. Me gustan mucho las canciones en español.' },
            { who: 'Sara', s: 'A mí también. Y a veces miro vídeos cortos en español.' },
            { who: 'Daniel', s: '¿Estudias por la noche?' },
            { who: 'Sara', s: 'No, nunca. Por la noche estoy cansada. Me gusta estudiar por la mañana.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'Daniel escribe las palabras nuevas en un cuaderno.', a: 't', why: '*Las escribo en un cuaderno.*' },
            { q: 'Daniel nunca escucha música en español.', a: 'f', why: 'He says *a menudo*: often.' },
            { q: 'A Sara le gusta estudiar por la noche.', a: 'f', why: '*Por la noche estoy cansada. Me gusta estudiar por la mañana.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'gusta or gustan?', items: [
            { q: 'Me ___ escuchar la radio en español.', o: ['gusta', 'gustan'], why: 'An infinitive: *me gusta escuchar*.' },
            { q: 'No me ___ los ejercicios de gramática.', o: ['gustan', 'gusta'], why: '*los ejercicios*: plural, so *gustan*.' },
            { q: '¿Te ___ el libro de clase?', o: ['gusta', 'gustan'], why: '*el libro*: one thing, so *gusta*.' },
          ] },
          { t: 'ex', kind: 'colloc', h: 'Which words go with the verb?', items: [
            { key: 'escuchar', o: ['canciones', 'la radio', 'un cuaderno', 'un audio'], a: [0, 1, 3], why: 'You listen to songs, the radio and audio, not to a notebook.' },
            { key: 'escribir', o: ['un correo', 'frases', 'la música', 'notas'], a: [0, 1, 3], why: 'You write emails, sentences and notes. You listen to music.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Siempre repito las palabras nuevas.', why: '*Siempre* often comes first, then the verb.' },
            { a: 'Nunca estudio por la noche.', why: '*Nunca* goes before the verb.' },
            { a: 'Me gusta leer en español.', why: '*Me gusta* + infinitive.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with siempre, a menudo, a veces or nunca.', items: [
            { q: 'Estudio todos los días, ___. Me gusta mucho.', a: ['siempre'], why: '*todos los días*: every day, so *siempre*.' },
            { q: '___ estudio por la noche. Estoy muy cansado.', a: ['Nunca'], why: 'No *no* before the verb, so *nunca*.' },
            { q: 'Miro vídeos en español ___, uno o dos días al mes.', a: ['a veces'], why: 'One or two days a month: *a veces*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Mis apuntes',
      about: 'Make a good vocabulary notebook and set goals for your study with ir a + infinitive.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Your class notes are **los apuntes**. For new words, a vocabulary notebook helps. Write every noun **with its article** and its **plural**, and add a short **example**. Many dictionaries and teachers use short forms: **m.** (masculine), **f.** (feminine), **pl.** (plural), **v.** (verb), **adj.** (adjective).' },
          { t: 'table', caption: 'A page of a vocabulary notebook', explain: ['head'], head: ['Word', 'Gender', 'Plural', 'Example'], rows: [
            ['la mesa', 'f.', 'las mesas', 'La mesa es grande.'],
            ['el lápiz', 'm.', 'los lápices', 'Tengo un lápiz rojo.'],
            ['la clase', 'f.', 'las clases', 'La clase empieza a las nueve.'],
            ['el examen', 'm.', 'los exámenes', 'El examen es el viernes.'],
          ] },
          { t: 'tip', art: 'churro', md: 'Write the words in groups, for example *things in class* or *verbs for study*. Words in a group are easier to remember. *Los apuntes* is used in Spain and in many Latin American countries.' },
        ],
        [
          { t: 'text', md: 'To talk about plans and goals, use **ir a** + infinitive: *Voy a estudiar diez palabras cada día.* Only *ir* changes: *voy, vas, va, vamos, vais, van*.' },
          { t: 'examples', items: [
            { s: 'Este mes **voy a leer** un libro fácil en español.', n: '*voy a* + infinitive: a plan.' },
            { s: 'Mañana **vamos a repasar** el tema dos.', n: '*vamos a*: we are going to.' },
            { s: '¿**Vas a hacer** el examen en junio?', n: 'You ask a classmate about a plan.' },
            { s: 'Mi compañero **va a estudiar** con tarjetas.', n: '*tarjetas*: small cards with a word on each side.' },
          ] },
          { t: 'ex', kind: 'conjugate', h: 'Write the forms of ir.', verb: 'ir', tense: 'present', rows: [
            ['yo', 'voy', '*ir* is irregular: *voy*.'],
            ['tú', 'vas', '*vas*.'],
            ['él, ella, usted', 'va', '*va*.'],
            ['nosotros', 'vamos', '*vamos*.'],
            ['vosotros', 'vais', '*vais*.'],
            ['ellos, ellas, ustedes', 'van', '*van*.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the study goals with ir a.', items: [
            { q: 'Yo ___ estudiar diez palabras cada día.', a: ['voy a'], why: '*yo voy a* + infinitive.' },
            { q: 'Mañana nosotros ___ repasar los apuntes.', a: ['vamos a'], why: '*nosotros vamos a* + infinitive.' },
            { q: '¿Tú ___ hacer el examen en mayo?', a: ['vas a'], why: '*tú vas a* + infinitive.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Write the sentence as a plan with ir a.', items: [
            { q: 'Estudio el sábado.', cue: 'Voy a', a: ['Voy a estudiar el sábado.'], why: '*Voy a* + the infinitive *estudiar*.' },
            { q: 'Leemos el texto en casa.', cue: 'Vamos a', a: ['Vamos a leer el texto en casa.'], why: '*Vamos a* + the infinitive *leer*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake in the notebook.', items: [
            { s: '[el] mesa, las mesas', a: ['la'], why: '*mesa* is feminine: *la mesa*.' },
            { s: 'el examen, los [examens]', a: ['exámenes'], why: 'After a consonant, add *-es*, and write the accent: *exámenes*.' },
            { s: 'Voy a [estudio] diez palabras.', a: ['estudiar'], why: 'After *voy a*, use the infinitive: *estudiar*.' },
          ] },
          { t: 'ex', kind: 'crossword', h: 'Complete the crossword with words for learning.', words: [
            { a: 'apuntes', clue: 'Lo que escribes en clase.' },
            { a: 'ejemplo', clue: 'Una frase corta con la palabra nueva.' },
            { a: 'plural', clue: 'Libros es el… de libro.' },
            { a: 'repasar', clue: 'Estudiar otra vez.' },
            { a: 'tarjetas', clue: 'Papeles pequeños con una palabra.' },
            { a: 'cuaderno', clue: 'Escribes el vocabulario en él.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: study tips from other learners',
      about: 'Read three learners’ tips and find out who does what.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'On a forum for Spanish learners, three students write how they learn. Read the posts and look for **how often** they do things.' },
          { t: 'reading', title: 'Foro: ¿Cómo aprendéis español?', md: '**Kenji:** Tengo un cuaderno de vocabulario. Siempre escribo la palabra con el artículo: el libro, la mesa. También escribo un ejemplo. Los domingos repaso todas las palabras de la semana.\n\n**Carla:** Me gusta mucho la música. A menudo escucho canciones en español y busco las palabras nuevas en el diccionario. Nunca estudio más de una hora: después estoy cansada.\n\n**Omar:** Trabajo por la mañana y por la tarde. Por eso estudio en el autobús, con tarjetas en el móvil. Este mes voy a hablar con un compañero de intercambio dos veces a la semana.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Who does it? Match the person and the tip.', pairs: [
            ['Kenji', 'Escribe la palabra con el artículo.'],
            ['Carla', 'Aprende con canciones.'],
            ['Omar', 'Estudia en el autobús.'],
          ] },
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Kenji repasa el vocabulario los domingos.', a: 't', why: '*Los domingos repaso todas las palabras de la semana.*' },
            { q: 'Carla estudia tres horas al día.', a: 'f', why: '*Nunca estudio más de una hora.*' },
            { q: 'Omar tiene clase por la tarde.', a: 'f', why: 'He works in the morning and in the afternoon: *Trabajo por la mañana y por la tarde.*' },
            { q: 'El compañero de intercambio de Omar es de Madrid.', a: 'ng', why: 'The post does not say where his exchange partner is from.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: '¿Qué va a hacer Omar este mes?', o: ['hablar con un compañero de intercambio', 'escuchar canciones', 'comprar un diccionario'], why: '*Este mes voy a hablar con un compañero de intercambio.*' },
            { q: '¿Por qué estudia Carla solo una hora?', o: ['Porque después está cansada.', 'Porque no le gusta la música.', 'Porque trabaja por la tarde.'], why: '*después estoy cansada*.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the words that say how often.', items: [
            { s: '[Siempre] escribo la palabra con el artículo. [A menudo] escucho canciones. [Nunca] estudio más de una hora.', why: '*siempre, a menudo* and *nunca* say how often.' },
          ] },
          { t: 'tip', art: 'churro', md: 'Try one tip from the forum this week. Then write in your notebook how often you do it: *siempre, a menudo, a veces* or *nunca*.' },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Me ___ las canciones en español.', o: ['gustan', 'gusta', 'gusto'], why: '*las canciones*: plural, so *gustan*.' },
      { q: 'No me gusta la gramática. A mí ___.', o: ['tampoco', 'también', 'siempre'], why: 'After a no, agree with *a mí tampoco*.' },
      { q: '___ estudio por la noche. Estoy cansada.', o: ['Nunca', 'Siempre', 'A menudo'], why: 'She is tired at night, so she never studies then.' },
      { q: 'En el cuaderno de vocabulario, «f.» significa ___.', o: ['femenino', 'fácil', 'frase'], why: '*f.* is the short form of *femenino*: feminine.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Mañana ___ a estudiar el tema tres. (ir, yo)', a: ['voy'], why: '*ir* with *yo*: *voy a* + infinitive.' },
      { q: '¿Vas a ___ el examen en junio? (hacer)', a: ['hacer'], why: 'After *vas a*, use the infinitive.' },
      { q: 'el examen, los ___', a: ['exámenes'], why: 'Add *-es* and write the accent: *exámenes*.' },
      { q: 'Me ___ estudiar por la mañana. (gustar)', a: ['gusta'], why: '*me gusta* + infinitive.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'A menudo escucho canciones en español.', why: '*A menudo* first, then the verb *escucho*.' },
      { a: 'Este mes voy a leer un libro.', why: '*voy a* + the infinitive *leer*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the two parts.', pairs: [
      ['Siempre escribo', 'la palabra con el artículo.'],
      ['Los domingos repaso', 'el vocabulario de la semana.'],
      ['Voy a hablar', 'con un compañero de intercambio.'],
      ['Nunca estudio', 'más de una hora.'],
    ] },
  ],
};
