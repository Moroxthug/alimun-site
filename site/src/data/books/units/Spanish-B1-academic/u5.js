// Spanish B1 for study and exams, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Reading longer texts',
  goal: 'Understand longer factual texts and find the main points.',
  art: 'teacup',
  tags: { skills: ['reading', 'vocabulary', 'study-skills'], topics: ['skimming', 'scanning', 'word-formation', 'facts-and-opinions'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Skimming, scanning and guessing words',
      about: 'Read fast for the general idea or for one fact, and guess new words from the context.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'You do not always need to read every word. **Skimming** means reading quickly for the general idea: look at the title, the first sentence of each paragraph and words in bold. **Scanning** means looking for one fact, for example a time, a price or a place, and ignoring the rest.' },
          { t: 'tip', art: 'churro', md: 'Before you read, ask yourself: what do I need from this text? The general idea? Then skim. One fact? Then scan.' },
          { t: 'reading', title: 'Intercambio de idiomas en el centro cultural', md: '**Habla español en un ambiente relajado**\n\n¿Estás aprendiendo español y quieres hablar más? ¡Ven a nuestro intercambio de idiomas! Todos los miércoles, de seis a ocho de la tarde, personas de muchos países se reúnen en la sala 104 del centro cultural del barrio. Voluntarios hablan contigo sobre temas de la vida diaria. No hace falta inscribirse y la participación es gratuita. Las bebidas cuestan un euro. En agosto el intercambio no se celebra porque el centro está cerrado.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Scan the notice and answer quickly.', items: [
            { q: '¿Qué día es el intercambio?', o: ['los miércoles', 'los lunes', 'los sábados'], why: '*Todos los miércoles*: scan for a day of the week.' },
            { q: '¿Cuánto cuesta participar?', o: ['nada', 'un euro', 'seis euros'], why: '*la participación es gratuita*. One euro is the price of a drink.' },
            { q: '¿Hay que inscribirse antes?', o: ['No, no hace falta.', 'Sí, por internet.', 'Sí, en la sala 104.'], why: '*No hace falta inscribirse*: you do not need to register.' },
            { q: '¿Cuándo no hay intercambio?', o: ['en agosto', 'los miércoles', 'por la tarde'], why: '*En agosto el intercambio no se celebra.*' },
          ] },
        ],
        [
          { t: 'text', md: 'When you meet a new word, do not stop at once. Look at the **context**: the words around it, the sentence before and the sentence after. Often they explain it. Also look at the **parts of the word**: a word you know may be inside it.' },
          { t: 'examples', items: [
            { s: 'El curso es **gratuito**: no tienes que pagar nada.', n: 'The second part of the sentence explains the word: *gratuito* = free.' },
            { s: 'Después de la charla hay un **debate**: todos dan su opinión.', n: '*debate*: a discussion where people give their opinions.' },
            { s: 'La biblioteca **amplía** su horario en época de exámenes y abre hasta medianoche.', n: 'It opens until midnight, so *ampliar* must mean to make longer.' },
            { s: 'El **aprendizaje** de un idioma necesita tiempo.', n: 'Inside it is *aprender*: *el aprendizaje* = the learning.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Guess the word in bold from the context.', items: [
            { q: 'La reunión se **aplazó** porque el profesor estaba enfermo. Ahora es la semana que viene.', o: ['se cambió a una fecha más tarde', 'empezó antes', 'fue muy larga'], why: 'It is now next week, so it was moved to a later date.' },
            { q: 'Hay muchos **voluntarios**: ayudan sin cobrar.', o: ['personas que trabajan gratis', 'profesores con un buen sueldo', 'estudiantes nuevos'], why: '*sin cobrar*: without being paid.' },
            { q: 'La sala está **abarrotada**: no hay ni un sitio libre.', o: ['muy llena', 'cerrada', 'muy fría'], why: 'There is not one free seat, so the room is very full.' },
          ] },
          { t: 'ex', kind: 'wordform', h: 'Build a word from the word in capitals.', items: [
            { q: 'El ___ de un idioma necesita paciencia.', base: 'aprender', a: ['aprendizaje'], why: '*aprender* + *-aje* makes a noun: *el aprendizaje*.' },
            { q: 'La ___ de textos en español mejora tu vocabulario.', base: 'leer', a: ['lectura'], why: 'The noun of *leer* is *la lectura*: reading.' },
            { q: 'Este curso tiene una gran ___: lo usas en tu trabajo.', base: 'útil', a: ['utilidad'], why: 'Many adjectives make a noun with *-idad*: *útil* → *utilidad*.' },
            { q: 'La ___ en el intercambio es gratuita.', base: 'participar', a: ['participación', 'participacion'], why: 'Verbs in *-ar* often make nouns in *-ación*: *participación*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Main ideas, details, facts and opinions',
      about: 'Find the main idea of a paragraph and tell facts from opinions.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Each paragraph has a **main idea**, often in the first sentence. The other sentences give **details**: examples, numbers, names. In an exam, a question about the main idea asks what the whole paragraph says, not one detail.' },
          { t: 'reading', title: 'Las bibliotecas cambian', md: 'Las bibliotecas universitarias ya no son solo lugares para buscar libros. Hoy muchas tienen salas para trabajar en grupo, ordenadores y espacios para descansar. Algunas ofrecen cursos sobre cómo buscar información en internet. En época de exámenes, muchas abren hasta tarde, a veces toda la noche.' },
        ],
        [
          { t: 'text', md: 'A **fact** can be checked: *La biblioteca abre a las ocho.* An **opinion** says what someone thinks: *La biblioteca es el mejor sitio para estudiar.* Texts often mix them, so look for the words that show an opinion.' },
          { t: 'examples', items: [
            { s: 'El curso dura diez semanas.', n: 'A fact: you can check it.' },
            { s: '**Creo que** el curso es demasiado corto.', n: 'An opinion: *creo que* shows it.' },
            { s: '**Me parece que** la residencia es muy cara.', n: '*me parece que*: another way to give an opinion.' },
            { s: '**Por desgracia**, la cafetería cierra pronto.', n: '*por desgracia* (unfortunately) shows the writer’s feeling about a fact.' },
          ] },
          { t: 'tip', art: 'churro', md: 'Words that show an opinion: *creo que, pienso que, me parece que, en mi opinión*, *por suerte, por desgracia*, and adjectives like *bueno, malo, aburrido, fantástico*. Remember: *no creo que* is followed by the subjunctive.' },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Is it a fact or an opinion?', groups: ['fact', 'opinion'], explain: ['groups'], items: [
            { s: 'La biblioteca tiene tres plantas.', g: 0, why: 'You can check it: a fact.' },
            { s: 'El examen es el 14 de junio.', g: 0, why: 'A date you can check: a fact.' },
            { s: 'La matrícula se paga en dos partes.', g: 0, why: 'A rule you can check: a fact.' },
            { s: 'Creo que las clases empiezan demasiado pronto.', g: 1, why: '*Creo que* shows an opinion.' },
            { s: 'El comedor tiene la mejor comida de la ciudad.', g: 1, why: '*la mejor* is someone’s judgement: an opinion.' },
            { s: 'Me parece que el profesor explica muy bien.', g: 1, why: '*Me parece que* shows an opinion.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'What is the main idea of the paragraph «Las bibliotecas cambian»?', items: [
            { q: '', o: ['Las bibliotecas universitarias ofrecen hoy mucho más que libros.', 'Las bibliotecas abren toda la noche.', 'En las bibliotecas hay ordenadores.'], why: 'The first sentence gives the main idea. The night opening and the computers are details.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Give the opposite opinion. Start with the words given.', items: [
            { q: 'Creo que el examen es fácil.', cue: 'No creo que', a: ['No creo que el examen sea fácil.'], why: '*No creo que* + subjunctive: *sea*.' },
            { q: 'Pienso que la biblioteca tiene buenos libros.', cue: 'No pienso que', a: ['No pienso que la biblioteca tenga buenos libros.'], why: '*No pienso que* + subjunctive: *tenga*.' },
            { q: 'Me parece que hay demasiados exámenes.', cue: 'No me parece que', a: ['No me parece que haya demasiados exámenes.'], why: 'The subjunctive of *hay* is *haya*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build sentences that give an opinion.', items: [
            { a: 'En mi opinión, el curso es demasiado caro.', why: '*En mi opinión* + comma + the opinion.' },
            { a: 'Creo que la biblioteca abre muy tarde.', why: '*Creo que* + indicative: *abre*.' },
            { a: 'Por suerte, el examen fue bastante fácil.', why: '*Por suerte* shows a good feeling about a fact.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A magazine article',
      about: 'Read a longer article about learning languages as an adult.',
      art: 'croissant',
      spreads: [
        [
          { t: 'text', md: 'Read the article first quickly for the general idea: look at the title and the first sentence of each paragraph. Then read it again carefully and answer the questions.' },
          { t: 'tip', art: 'churro', md: 'Mark the words you do not know, but do not stop. Often the next sentence explains them.' },
          { t: 'ex', kind: 'memory', h: 'Words from the article: find the pairs.', pairs: [
            ['la pronunciación', 'cómo suenan las palabras'],
            ['la paciencia', 'saber esperar con calma'],
            ['la constancia', 'hacer algo con regularidad'],
            ['el valor', 'no tener miedo'],
            ['la meta', 'lo que quieres conseguir'],
          ] },
        ],
        [
          { t: 'reading', title: 'Nunca es tarde para un nuevo idioma', md: 'Muchos adultos piensan que solo los niños pueden aprender bien un idioma. ¿Es verdad? Muchos expertos creen que los niños tienen ventaja con la pronunciación. Sin embargo, los adultos tienen otros puntos fuertes: suelen entender mejor las reglas, saben cómo aprenden mejor y casi siempre tienen una meta clara.\n\nUn ejemplo es Kwame, de 52 años. Llegó a Valencia hace tres años sin hablar ni una palabra de español. «Al principio fue difícil», cuenta. «Estudiaba una hora cada noche y los fines de semana hablaba con mis vecinos». Hoy trabaja como enfermero en un hospital y pronto va a hacer un examen de nivel B2.\n\n¿Qué ayuda a aprender? La constancia es más importante que estudiar muchas horas seguidas: veinte minutos al día suelen ser más útiles que tres horas el domingo. Además, conviene usar el idioma siempre que se pueda, por ejemplo, en las tiendas o en una asociación del barrio.\n\nEn mi opinión, la edad no es lo más importante. Son más importantes la motivación, la paciencia y el valor para cometer errores.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the article. True, false or not given?', items: [
            { q: 'Según muchos expertos, los niños pronuncian mejor.', a: 't', why: '*los niños tienen ventaja con la pronunciación*.' },
            { q: 'Los adultos no pueden aprender bien un idioma.', a: 'f', why: 'The article says adults have other strengths.' },
            { q: 'Kwame ya hablaba un poco de español cuando llegó.', a: 'f', why: '*sin hablar ni una palabra de español*: not one word.' },
            { q: 'Kwame trabaja en un hospital.', a: 't', why: '*trabaja como enfermero en un hospital*.' },
            { q: 'Kwame aprendió español en una academia.', a: 'ng', why: 'The article says he studied every evening and spoke with neighbours, but not where he took classes.' },
            { q: 'Es mejor estudiar tres horas el domingo que un poco cada día.', a: 'f', why: '*veinte minutos al día suelen ser más útiles que tres horas el domingo*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Main points and opinions in the article.', items: [
            { q: '¿Cuál es la idea principal del primer párrafo?', o: ['Los adultos también tienen ventajas cuando aprenden idiomas.', 'Los niños pronuncian mejor.', 'Los adultos tienen metas.'], why: 'The paragraph compares children and adults and says adults have strengths too. The others are details.' },
            { q: '¿Para qué sirve el ejemplo de Kwame?', o: ['para mostrar que un adulto puede aprender un idioma', 'para explicar el trabajo de un enfermero', 'para hablar de la ciudad de Valencia'], why: 'Kwame started at 49 and now works in Spanish: an example for the main idea.' },
            { q: '¿Qué frase es una opinión?', o: ['La edad no es lo más importante.', 'Llegó a Valencia hace tres años.', 'Trabaja como enfermero.'], why: 'It comes after *En mi opinión*. The others are facts about Kwame.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the words from the article with their meaning.', pairs: [
            ['los puntos fuertes', 'las cosas que alguien hace bien'],
            ['seguidas', 'una después de otra, sin pausa'],
            ['conviene', 'es una buena idea'],
            ['cometer errores', 'equivocarse'],
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Necesitas un dato de un texto largo, por ejemplo una hora. ¿Qué haces?', o: ['Busco rápidamente solo ese dato.', 'Leo cada palabra despacio.', 'Leo solo el título.'], why: 'Looking quickly for one fact is scanning.' },
      { q: '¿Qué frase es un hecho?', o: ['El curso empieza el 3 de octubre.', 'El curso es muy aburrido.', 'Creo que el curso es caro.'], why: 'A date can be checked: a fact.' },
      { q: 'El taller es **gratuito**: no tienes que pagar. «Gratuito» significa:', o: ['que no cuesta dinero', 'que es muy largo', 'que es obligatorio'], why: 'The context explains it: *no tienes que pagar*.' },
      { q: 'No creo que el examen ___ difícil.', o: ['sea', 'es', 'será'], why: '*No creo que* + subjunctive: *sea*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'En mi ___, la edad no es lo más importante. (opinion)', a: ['opinión', 'opinion'], why: '*En mi opinión*: a common way to give your opinion.' },
      { q: 'Por ___, la cafetería cierra pronto. (unfortunately)', a: ['desgracia'], why: '*por desgracia*: unfortunately.' },
      { q: 'No hace ___ inscribirse. (it is not necessary)', a: ['falta'], why: '*No hace falta* + infinitive: you do not need to.' },
    ] },
    { t: 'ex', kind: 'wordform', h: 'Build a word from the word in capitals.', items: [
      { q: 'La ___ en clase es muy importante.', base: 'participar', a: ['participación', 'participacion'], why: '*participar* → *la participación*.' },
      { q: 'El ___ de un idioma necesita tiempo.', base: 'aprender', a: ['aprendizaje'], why: '*aprender* → *el aprendizaje*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Me parece que el curso es muy útil.', why: '*Me parece que* + indicative gives an opinion.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the word and its meaning.', pairs: [
      ['la meta', 'lo que quieres conseguir'],
      ['la paciencia', 'saber esperar con calma'],
      ['los voluntarios', 'personas que ayudan sin cobrar'],
    ] },
  ],
};
