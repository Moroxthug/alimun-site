// Spanish B1, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Imagine',
  goal: 'Make polite requests, give advice and talk about what you would do. Use the condicional and its irregular forms, deberías, yo que tú and ¿te importaría…?',
  art: 'sun',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['condicional', 'advice', 'polite-requests', 'hypothesis', 'free-time-plans'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Me gustaría…: the condicional',
      about: 'Form the condicional, regular and irregular, and use it for wishes and polite questions.',
      art: 'churro',
      spreads: [
        [
          { t: 'text', md: 'The **condicional** says what you *would* do. You use it for wishes (*me gustaría*), polite questions (*¿podrías…?*), advice (*deberías*) and to imagine things that are not real (*viviría en la playa*).' },
          { t: 'text', md: 'It is easy to form: take the **whole infinitive** and add the endings *-ía, -ías, -ía, -íamos, -íais, -ían*. The endings are the same for *-ar*, *-er* and *-ir* verbs.' },
          { t: 'examples', items: [
            { s: '**Me gustaría** vivir cerca del mar.', n: '*gustar* → *gustaría*: a wish.' },
            { s: '¿**Podrías** ayudarme con la maleta?', n: '*poder* → *podrías*: a polite request.' },
            { s: 'Con más dinero, **viajaríamos** por toda Sudamérica.', n: '*viajar* → *viajaríamos*: imagining.' },
            { s: 'Yo no **diría** eso delante de tu jefe.', n: '*decir* → *diría*, an irregular form.' },
          ] },
        ],
        [
          { t: 'table', caption: 'The condicional: regular verbs', quiz: true, head: ['', 'hablar', 'comer', 'vivir'], rows: [
            ['yo', 'hablaría', 'comería', 'viviría'],
            ['tú', 'hablarías', 'comerías', 'vivirías'],
            ['él / ella / usted', 'hablaría', 'comería', 'viviría'],
            ['nosotros / nosotras', 'hablaríamos', 'comeríamos', 'viviríamos'],
            ['vosotros / vosotras', 'hablaríais', 'comeríais', 'viviríais'],
            ['ellos / ellas / ustedes', 'hablarían', 'comerían', 'vivirían'],
          ] },
          { t: 'tip', art: 'churro', md: 'Do not mix up the condicional and the imperfecto: *comía* (I used to eat) and *comería* (I would eat). The condicional keeps the whole infinitive: *com**er**ía*. Every form has a written accent on the *í*.' },
        ],
        [
          { t: 'text', md: 'A few common verbs have an **irregular stem**. They are the same stems as in the future tense, and the endings do not change.' },
          { t: 'table', caption: 'Irregular stems', explain: ['head'], quiz: true, head: ['Infinitive', 'Stem', 'yo'], rows: [
            ['tener', 'tendr-', 'tendría'],
            ['poner', 'pondr-', 'pondría'],
            ['salir', 'saldr-', 'saldría'],
            ['venir', 'vendr-', 'vendría'],
            ['poder', 'podr-', 'podría'],
            ['saber', 'sabr-', 'sabría'],
            ['querer', 'querr-', 'querría'],
            ['haber', 'habr-', 'habría'],
            ['hacer', 'har-', 'haría'],
            ['decir', 'dir-', 'diría'],
          ] },
          { t: 'tip', art: 'churro', md: '*Hay* becomes *habría*: *Con un parque, habría menos ruido*. Verbs made from these verbs change in the same way: *mantener* → *mantendría*, *proponer* → *propondría*.' },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the condicional of hacer.', verb: 'hacer', tense: 'Condicional', rows: [
            ['yo', 'haría'],
            ['tú', 'harías'],
            ['él / ella / usted', 'haría'],
            ['nosotros', 'haríamos'],
            ['vosotros', 'haríais'],
            ['ellos / ustedes', 'harían', 'The stem *har-* is irregular. The endings are regular.'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: '¿___ abrir la ventana, por favor? Hace mucho calor.', o: ['Podrías', 'Poderías', 'Podías'], why: '*poder* has the irregular stem *podr-*: *podrías*.' },
            { q: 'A mis padres les ___ vivir en un pueblo.', o: ['gustaría', 'gustarían', 'gustarías'], why: 'The thing they would like is *vivir*, so *gustaría* is singular.' },
            { q: 'Yo en tu lugar no ___ nada a nadie.', o: ['diría', 'deciría', 'dijera'], why: '*decir* has the stem *dir-*: *diría*.' },
            { q: 'Con un coche más grande, ___ ir todos juntos.', o: ['podríamos', 'podemos', 'pudimos'], why: 'Imagining a situation that is not real: condicional, *podríamos*.' },
            { q: 'Sin la ayuda de Rosa, nosotros no ___ tiempo para terminar.', o: ['tendríamos', 'teneríamos', 'teníamos'], why: '*tener* has the stem *tendr-*: *tendríamos*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'wordform', h: 'Write the verb in the condicional.', items: [
            { q: 'Con más tiempo, yo ___ a tocar la guitarra.', base: 'aprender', a: ['aprendería'], why: 'Regular: *aprender* + *-ía*.' },
            { q: '¿A qué hora ___ tú de casa para llegar a las nueve?', base: 'salir', a: ['saldrías'], why: 'Irregular stem *saldr-*: *saldrías*.' },
            { q: 'Mis amigos ___ encantados a tu fiesta.', base: 'venir', a: ['vendrían'], why: 'Irregular stem *vendr-*: *vendrían*.' },
            { q: 'En vuestro lugar, ¿qué ___ vosotros?', base: 'hacer', a: ['haríais'], why: 'Irregular stem *har-*, ending *-íais*.' },
            { q: 'Yo no ___ qué decirle.', base: 'saber', a: ['sabría'], why: 'Irregular stem *sabr-*: *sabría*.' },
            { q: '¿Dónde ___ usted la mesa?', base: 'poner', a: ['pondría'], why: 'Irregular stem *pondr-*: *pondría*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Yo que tú…: advice and polite requests',
      about: 'Give friendly advice and ask for things politely.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'The condicional makes advice and requests **softer and more polite**. Compare *Tienes que descansar* (strong) and *Deberías descansar* (friendly advice), *¿Puedes…?* and *¿Podrías…?*' },
          { t: 'table', caption: 'Advice and requests', explain: ['head', 'col1'], head: ['Spanish', 'Use'], rows: [
            ['Deberías + infinitive', 'friendly advice: you should'],
            ['Yo que tú / Yo en tu lugar + condicional', 'advice: if I were you'],
            ['Podrías + infinitive', 'a suggestion or a polite request'],
            ['¿Te importaría + infinitive?', 'a very polite request: would you mind…?'],
            ['¿Le importaría + infinitive?', 'the same, with usted'],
            ['Me gustaría / Querría + infinitive', 'a polite wish or order, for example in a shop'],
          ] },
          { t: 'tip', art: 'churro', md: 'In many Latin American countries, people use *usted* more often than in Spain, so you hear *¿Le importaría…?* and *¿Podría…?* very often, even in quite relaxed situations.' },
        ],
        [
          { t: 'dialogue', title: 'Un consejo', lines: [
            { who: 'Elena', s: 'Estoy agotada. Trabajo diez horas al día y no duermo bien.' },
            { who: 'David', s: 'Pues deberías hablar con tu jefa. Yo que tú le pediría unos días libres.' },
            { who: 'Elena', s: 'Ya, pero ahora hay mucho trabajo. No sé si es buen momento.' },
            { who: 'David', s: 'Yo en tu lugar no esperaría más. Podrías empezar por salir a tu hora, por lo menos.' },
            { who: 'Elena', s: 'Tienes razón. Oye, ¿te importaría venir conmigo a correr el sábado? Sola me da pereza.' },
            { who: 'David', s: '¡Claro! Me encantaría.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'True or false?', items: [
            { q: 'Elena duerme muy bien.', a: 'f', why: '*No duermo bien.*' },
            { q: 'David le aconseja pedir unos días libres.', a: 't', why: '*Yo que tú le pediría unos días libres.*' },
            { q: 'Elena le pide a David que corra con ella.', a: 't', why: '*¿Te importaría venir conmigo a correr el sábado?*' },
            { q: 'David no quiere ir a correr.', a: 'f', why: '*¡Claro! Me encantaría.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the problem and the advice.', pairs: [
            ['Siempre llego tarde al trabajo.', 'Deberías poner dos despertadores.'],
            ['No entiendo nada en clase de alemán.', 'Yo que tú buscaría un profesor particular.'],
            ['Mi piso es muy caro.', 'Podrías buscar a alguien para compartirlo.'],
            ['Me duele la espalda.', 'Yo en tu lugar iría al médico.'],
            ['Me aburro los fines de semana.', 'Deberías apuntarte a un club de senderismo.'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the most polite and natural option.', items: [
            { q: 'In a café: “___ un café con leche, por favor.”', o: ['Me gustaría tomar', 'Dame ya', 'Tengo que tomar'], why: '*Me gustaría* is a polite way to order.' },
            { q: 'To an older stranger on the train: “___ bajar un poco la música?”', o: ['¿Le importaría', '¿Te importaría', '¿Importa'], why: 'A stranger: *usted*, so *¿Le importaría…?*' },
            { q: 'Your friend is always tired: “___ acostarte más temprano.”', o: ['Deberías', 'Debías', 'Deber'], why: 'Friendly advice: *deberías* + infinitive.' },
            { q: '“Yo que tú ___ el abrigo. Va a hacer frío.”', o: ['me llevaría', 'me llevo', 'llévate'], why: 'After *yo que tú*: the condicional, *me llevaría*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Make the sentences softer and more polite. Start with the words given.', items: [
            { q: '¿Puedes cerrar la puerta?', cue: '¿Podrías', a: ['¿Podrías cerrar la puerta?'], why: '*¿Puedes…?* → *¿Podrías…?*: the condicional is more polite.' },
            { q: 'Ayúdame con estas cajas.', cue: '¿Te importaría', a: ['¿Te importaría ayudarme con estas cajas?'], why: '*¿Te importaría* + infinitive. The pronoun *me* goes at the end of the infinitive.' },
            { q: 'Quiero hablar con la directora.', cue: 'Me gustaría', a: ['Me gustaría hablar con la directora.'], why: '*Me gustaría* sounds softer than *quiero*.' },
            { q: 'Tienes que descansar más.', cue: 'Deberías', a: ['Deberías descansar más.'], why: '*Deberías* + infinitive is friendly advice.' },
          ] },
          { t: 'ex', kind: 'build', h: 'Build the sentences. Some words do not belong.', items: [
            { a: 'Yo que tú hablaría con ella.', extra: ['hablo', 'hablaba'], why: 'After *yo que tú*: the condicional *hablaría*.' },
            { a: '¿Le importaría esperar un momento?', extra: ['espere', 'te'], why: '*¿Le importaría* + infinitive *esperar*.' },
            { a: 'Deberías comer más fruta.', extra: ['comerías', 'que'], why: '*Deberías* + infinitive, without *que*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: '¿Qué harías con un año libre?',
      about: 'Imagine a different life and talk about your dreams.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'text', md: 'Use the condicional to **imagine** something that is not real now. Phrases like *con un año libre*, *con más dinero*, *en tu lugar* or *sin trabajo* set the scene.' },
          { t: 'examples', items: [
            { s: 'Con un año libre, **daría** la vuelta al mundo.', n: '*dar la vuelta al mundo*: travel around the world.' },
            { s: 'Yo **haría** un voluntariado en un parque natural.', n: '*hacer un voluntariado*: do volunteer work.' },
            { s: 'Mi hermana **montaría** un pequeño negocio de comida.', n: '*montar un negocio*: start a business.' },
            { s: 'Nosotros **nos mudaríamos** al campo.', n: '*mudarse*: move house. The pronoun stays before the verb.' },
            { s: 'Yo nunca **dejaría** mi trabajo, me encanta.', n: '*nunca* + condicional: what you would never do.' },
          ] },
          { t: 'tip', art: 'churro', md: 'Sentences with *si* (*if*) for things that are not real use another form after *si*: *Si tuviera tiempo, viajaría.* You will learn it later. For now, use *con*, *sin* or *en tu lugar* to imagine.' },
        ],
        [
          { t: 'ex', kind: 'colloc', h: 'Which words go with the verb?', items: [
            { key: 'hacer', o: ['un voluntariado', 'un curso', 'deporte', 'la vuelta al mundo', 'un negocio'], a: [0, 1, 2], why: '*hacer un voluntariado, un curso, deporte*. We say *dar la vuelta al mundo* and *montar un negocio*.' },
            { key: 'cumplir', o: ['un sueño', 'treinta años', 'una promesa', 'una casa', 'la guitarra'], a: [0, 1, 2], why: '*cumplir un sueño, años, una promesa*: make a dream come true, turn an age, keep a promise.' },
            { key: 'tomarse', o: ['un año sabático', 'unos días libres', 'un descanso', 'un idioma', 'un piso'], a: [0, 1, 2], why: '*tomarse* time off: *un año sabático, unos días libres, un descanso*.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Regular or irregular condicional?', groups: ['regular', 'irregular'], explain: ['groups'], items: [
            { s: 'viajaría', g: 0, why: '*viajar* + *-ía*.' },
            { s: 'tendría', g: 1, why: '*tener* → *tendr-*.' },
            { s: 'viviría', g: 0, why: '*vivir* + *-ía*.' },
            { s: 'saldría', g: 1, why: '*salir* → *saldr-*.' },
            { s: 'estudiaría', g: 0, why: '*estudiar* + *-ía*.' },
            { s: 'haría', g: 1, why: '*hacer* → *har-*.' },
            { s: 'sería', g: 0, why: '*ser* is regular in the condicional: *ser* + *-ía*.' },
            { s: 'querría', g: 1, why: '*querer* → *querr-*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'memory', h: 'Find the pairs: infinitive and condicional (yo).', pairs: [
            ['tener', 'tendría'],
            ['decir', 'diría'],
            ['poder', 'podría'],
            ['venir', 'vendría'],
            ['hacer', 'haría'],
            ['saber', 'sabría'],
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Con más dinero, compraría una casa en el campo.', why: 'The phrase *con más dinero* sets the scene, then the condicional.' },
            { a: '¿Qué harías con un año libre?', why: 'Question word, then the condicional *harías*.' },
            { a: 'Yo nunca dejaría mi ciudad.', why: '*nunca* before the verb in the condicional.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'A magazine survey',
      about: 'Read four answers to the question “What would you do with a free year?”.',
      art: 'parrot',
      spreads: [
        [
          { t: 'reading', title: 'Encuesta: ¿Qué harías con un año libre?', md: 'Esta semana hemos preguntado a nuestros lectores qué harían con doce meses sin trabajo y sin estudios, con el dinero necesario para vivir.\n\n**Rosa, 29, enfermera:** “Lo tengo clarísimo: me iría a un pueblo de montaña y aprendería a hacer queso. Me encantaría trabajar con las manos y estar lejos de la ciudad. Eso sí, no sé si aguantaría el invierno.”\n\n**Andrés, 41, taxista:** “Yo pasaría más tiempo con mis hijos. Les enseñaría a nadar y a montar en bici, y haríamos un viaje en furgoneta por la costa. También me gustaría terminar los estudios que dejé a los veinte años.”\n\n**Inés, 19, estudiante:** “Daría la vuelta al mundo, sin duda. Empezaría por Asia y después iría a Sudamérica. Viajaría sola y escribiría un blog. Mis padres dirían que estoy loca, pero al final me apoyarían.”\n\n**Tomás, 63, profesor:** “Sinceramente, no cambiaría mucho. Leería todos los libros que tengo en casa sin leer, y por las tardes haría un voluntariado en la biblioteca del barrio. A mi edad, lo más importante es la tranquilidad.”' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Rosa quiere vivir en el campo.', a: 't', why: '*Me iría a un pueblo de montaña.*' },
            { q: 'Rosa está segura de que le gustaría el invierno en la montaña.', a: 'f', why: '*No sé si aguantaría el invierno.*' },
            { q: 'Andrés tiene tres hijos.', a: 'ng', why: 'He talks about his children, but not how many he has.' },
            { q: 'Andrés terminó sus estudios a los veinte años.', a: 'f', why: 'He left his studies at twenty: *los estudios que dejé a los veinte años*.' },
            { q: 'Inés viajaría con una amiga.', a: 'f', why: '*Viajaría sola.*' },
            { q: 'Tomás no haría grandes cambios en su vida.', a: 't', why: '*No cambiaría mucho.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the verbs in the condicional.', items: [
            { s: 'Me [iría] a un pueblo de montaña y [aprendería] a hacer queso.', why: '*iría* (ir) and *aprendería* (aprender) say what Rosa would do.' },
            { s: 'Mis padres [dirían] que estoy loca, pero al final me [apoyarían].', why: '*dirían* has the irregular stem *dir-*. *Estoy* is in the present: it is not the condicional.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Answer the questions about the texts.', items: [
            { q: 'Who would like to study again?', o: ['Andrés', 'Inés', 'Tomás'], why: '*Me gustaría terminar los estudios que dejé.*' },
            { q: 'Who would help in the neighbourhood?', o: ['Tomás', 'Rosa', 'Andrés'], why: 'He would volunteer *en la biblioteca del barrio*.' },
            { q: '“Haríamos un viaje en furgoneta”: who is “nosotros”?', o: ['Andrés and his children', 'Andrés and his friends', 'The readers of the magazine'], why: 'He talks about his children in the sentence before.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: '¿___ ayudarme a mover el sofá?', o: ['Podrías', 'Poderías', 'Podías'], why: '*poder* → *podr-*: *podrías*.' },
      { q: 'Yo que tú ___ con el profesor.', o: ['hablaría', 'hablaba', 'hablo'], why: 'After *yo que tú*: the condicional.' },
      { q: 'Con un año libre, nosotros ___ un voluntariado.', o: ['haríamos', 'hacemos', 'haceríamos'], why: '*hacer* → *har-*: *haríamos*.' },
      { q: '¿Le ___ cerrar la ventana, señora?', o: ['importaría', 'importarías', 'importa a usted'], why: '*¿Le importaría* + infinitive, with usted.' },
      { q: 'Estás muy cansado. ___ dormir más.', o: ['Deberías', 'Deber', 'Deberíais'], why: 'Advice to one friend: *deberías* + infinitive.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the verb in the condicional.', items: [
      { q: 'Me ___ (gustar) vivir en Barcelona.', a: ['gustaría'], why: '*gustar* → *gustaría*.' },
      { q: 'Con más tiempo, ellos ___ (venir) a vernos.', a: ['vendrían'], why: 'Irregular stem *vendr-*.' },
      { q: 'Yo no ___ (decir) nada.', a: ['diría'], why: 'Irregular stem *dir-*.' },
      { q: '¿Vosotros ___ (salir) a cenar con nosotros?', a: ['saldríais'], why: 'Irregular stem *saldr-*, ending *-íais*.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Make the sentences more polite. Start with the words given.', items: [
      { q: '¿Puedes repetir la pregunta?', cue: '¿Podrías', a: ['¿Podrías repetir la pregunta?'], why: '*¿Podrías…?* is more polite than *¿Puedes…?*' },
      { q: 'Quiero una mesa para dos.', cue: 'Me gustaría', a: ['Me gustaría una mesa para dos.', 'Me gustaría reservar una mesa para dos.'], why: '*Me gustaría* is a polite way to ask.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Yo en tu lugar no diría nada.', why: '*Yo en tu lugar* + condicional.' },
      { a: '¿Te importaría abrir la puerta?', why: '*¿Te importaría* + infinitive.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
      { q: '', o: ['Con más dinero, tendría un coche nuevo.', 'Con más dinero, tenería un coche nuevo.', 'Con más dinero, tendríe un coche nuevo.'], why: '*tener* → *tendr-* + *-ía*.' },
      { q: '', o: ['Deberías ir al médico.', 'Deberías que ir al médico.', 'Deberías a ir al médico.'], why: '*Deberías* + infinitive, with nothing between.' },
    ] },
  ],
};
