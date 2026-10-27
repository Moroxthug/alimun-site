// Spanish C2, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'Precision and nuance',
  goal: 'Choose the exact word for the exact shade of meaning. Learn near-synonyms and their connotations, natural collocations and fixed pairs, euphemism and litotes.',
  art: 'churro',
  tags: { skills: ['vocabulary', 'reading', 'writing'], topics: ['near-synonyms', 'connotation', 'collocation', 'euphemism', 'litotes'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Mirar, contemplar, clavar la vista',
      about: 'Tell near-synonyms apart by what they suggest as well as what they mean.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'At C2, knowing that two words are close is not enough. Near-synonyms differ in **denotation** (what they describe) and in **connotation** (what they suggest: approval, disapproval, formality). Take the verbs of looking. **Mirar** is neutral. **Echar un vistazo** is a quick look. **Divisar** is to make out something in the distance. **Contemplar** is to look for a long time, often with admiration. **Clavar la vista** or **mirar fijamente** is to stare. **Observar** is to look attentively. **Espiar** is to watch in secret.' },
          { t: 'table', caption: 'Verbs of looking', explain: ['head', 'col0'], head: ['Verb', 'What it suggests', 'Example'], rows: [
            ['mirar', 'neutral', 'Ella mira por la ventana.'],
            ['echar un vistazo', 'quick, casual', 'Echó un vistazo al reloj.'],
            ['divisar', 'make out in the distance', 'Divisamos un barco en el horizonte.'],
            ['contemplar', 'long, admiring or dreamy', 'Contemplaban las estrellas.'],
            ['clavar la vista', 'fixed, often rude', 'Clavó la vista en mí sin decir nada.'],
            ['espiar', 'secret, from hiding', 'Espiaba a sus vecinos.'],
          ] },
        ],
        [
          { t: 'text', md: 'Connotation matters even more with adjectives for people. A thin person may be **delgado** (neutral), **esbelto** (elegant), **flaco** (informal, often negative) or **escuálido** (very thin, negative). Someone who spends little is **ahorrador** (positive), **tacaño** (negative) or **rácano** (informal, Spain, negative). Someone who keeps going is **tenaz** or **decidido** (positive), but **terco** or **cabezota** (negative).' },
          { t: 'tip', art: 'owl', md: 'A good dictionary marks connotation with labels such as *despectivo*, *coloquial*, *formal*. Use them. In an exam, one wrong connotation (*Es muy tacaña con su tiempo* said as praise) can change the whole message. Some words also change in **Latin America**: *rácano* is unknown in many countries, where people say *codo* (Mexico) or *amarrete* (Argentina).' },
          { t: 'ex', kind: 'sort', h: 'Does the word praise, or criticise?', groups: ['praise', 'criticise'], explain: ['groups'], items: [
            { s: 'ahorrador', g: 0, why: 'Approving: careful with money.' },
            { s: 'tacaño', g: 1, why: 'Disapproving: unwilling to spend.' },
            { s: 'tenaz', g: 0, why: 'Approving: firm and persistent.' },
            { s: 'terco', g: 1, why: 'Disapproving: refusing to change.' },
            { s: 'esbelto', g: 0, why: 'Approving: thin in an elegant way.' },
            { s: 'escuálido', g: 1, why: 'Disapproving: unhealthily thin.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the most precise word.', items: [
            { q: 'Se quedó delante del cuadro y lo ___ durante una hora, maravillado.', o: ['contempló', 'divisó', 'espió'], why: '*Contemplar*: to look for a long time with admiration.' },
            { q: 'Solo pude ___ al presidente, porque su coche pasó muy deprisa.', o: ['divisar', 'contemplar', 'clavar la vista en'], why: '*Divisar*: to make out briefly, from a distance.' },
            { q: 'Ella ___ detrás de la cortina para ver quién llamaba.', o: ['espiaba', 'contemplaba', 'observaba'], why: '*Espiar*: to watch in secret.' },
            { q: 'Mi tío es muy ___: no malgasta nada, y se lo admiro.', o: ['ahorrador', 'tacaño', 'rácano'], why: '*Ahorrador* is positive; *tacaño* and *rácano* are negative.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a verb from the lesson (echar un vistazo, divisar, contemplar, clavar la vista, espiar).', items: [
            { q: 'Es de mala educación ___ la vista en los desconocidos en el metro.', a: ['clavar'], why: '*Clavar la vista*: to stare.' },
            { q: 'Ella ___ un vistazo al móvil durante la reunión.', a: ['echó'], why: '*Echar un vistazo*: a quick look.' },
            { q: 'Los enamorados ___ la puesta de sol.', a: ['contemplan'], why: '*Contemplar*: to look for a long time with admiration.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match each word with its meaning.', pairs: [
            ['escuálido', 'tan delgado que parece enfermo'],
            ['esbelto', 'delgado y elegante'],
            ['terco', 'que no cambia de opinión, en mal sentido'],
            ['tenaz', 'que persiste a pesar de las dificultades'],
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the word that gives the wrong impression.', items: [
            { s: 'Admiro a mi abuela: es tan [tacaña] y nunca tira nada.', a: ['ahorradora'], why: 'Praise needs a positive word: *ahorradora*.' },
            { s: 'Nuestra directora es maravillosamente [terca]: nunca renuncia a una buena idea.', a: ['tenaz', 'decidida'], why: 'The speaker approves: *tenaz* or *decidida*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Profundamente conmovido, tarde o temprano',
      about: 'Use natural collocations and fixed pairs of words.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Collocations are words that naturally go together. At C2, the test is not whether your sentence is correct, but whether it sounds as a Spanish speaker would say it. Adverbs are selective: we say **profundamente conmovido**, **gravemente herido**, **encarecidamente recomendado**, **ardientemente deseado**. Nouns also pick their partners: **una generalización precipitada**, **un error garrafal**, **un prejuicio arraigado**, **un silencio incómodo**. Verbs too: you **tomar** a decision, **llegar** to a compromise, **sacar** conclusions, **tener en cuenta** something.' },
          { t: 'table', caption: 'Collocations that sound natural', explain: ['head', 'col0'], head: ['Word', 'Natural partners', 'Not natural'], rows: [
            ['adverb + adjective', 'profundamente conmovido, gravemente herido, encarecidamente recomendado', 'gravemente conmovido, profundamente recomendado'],
            ['adjective + noun', 'una generalización precipitada, un error garrafal', 'una generalización garrafal, un error precipitado'],
            ['verb + noun', 'tomar una decisión, llegar a un compromiso, sacar conclusiones', 'hacer una decisión, alcanzar un compromiso'],
          ] },
        ],
        [
          { t: 'text', md: 'Fixed **pairs** are two words joined by *o*, *y* or *ni*, always in the same order. **Tarde o temprano** (sooner or later), **sano y salvo** (safe and sound), **ni más ni menos** (no more, no less), **de arriba abajo** (from top to bottom), **poco a poco** (little by little), **tira y afloja** (a push and pull). You cannot reverse them: *temprano o tarde* is wrong in the fixed phrase.' },
          { t: 'tip', art: 'owl', md: 'Learn a pair as one block, never reversed. When you meet a new collocation, write it in a full sentence in a notebook, with its register. A Spanish speaker will not correct *hacer una decisión*, but will notice it; the natural verb is *tomar*. In some **Latin American** countries, *hacer una decisión* is heard under English influence, but it remains non-standard.' },
          { t: 'ex', kind: 'match', h: 'Match the fixed pair with its meaning.', pairs: [
            ['tarde o temprano', 'at some point in the future'],
            ['sano y salvo', 'unharmed'],
            ['de arriba abajo', 'completely, from top to bottom'],
            ['poco a poco', 'little by little'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the natural collocation.', items: [
            { q: 'El equipo quedó ___ decepcionado por el resultado.', o: ['profundamente', 'gravemente', 'encarecidamente'], why: '*Profundamente decepcionado* is natural.' },
            { q: 'Se ___ recomienda reservar con antelación.', o: ['encarecidamente', 'gravemente', 'profundamente'], why: '*Encarecidamente recomendado*.' },
            { q: 'En su informe hay un error ___: falta el presupuesto.', o: ['garrafal', 'precipitado', 'incómodo'], why: '*Un error garrafal*: a blatant mistake.' },
            { q: 'Decir que todos los adolescentes son vagos es una generalización ___.', o: ['precipitada', 'garrafal', 'incómoda'], why: '*Una generalización precipitada*.' },
            { q: 'Tras un largo debate, lograron ___ a un compromiso.', o: ['llegar', 'hacer', 'alcanzar'], why: '*Llegar a un compromiso*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the fixed pair.', items: [
            { q: 'Tarde o ___, habrá que decidir.', a: ['temprano'], why: '*Tarde o temprano*.' },
            { q: 'Limpiaron la casa de arriba ___.', a: ['abajo'], why: '*De arriba abajo*.' },
            { q: 'Volvieron sanos y ___ después de la tormenta.', a: ['salvos'], why: '*Sanos y salvos*: the adjectives agree in the plural.' },
            { q: 'Poco a ___ me fui acostumbrando a la ciudad.', a: ['poco'], why: '*Poco a poco*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite, using the words given.', items: [
            { q: 'Los viajeros llegaron indemnes después de la tormenta.', cue: 'sanos', a: ['Los viajeros llegaron sanos y salvos después de la tormenta.'], why: '*Sanos y salvos*.' },
            { q: 'Se recomienda mucho reservar con antelación.', cue: 'Se recomienda', a: ['Se recomienda encarecidamente reservar con antelación.'], why: '*Encarecidamente recomendado*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the unnatural collocation.', items: [
            { s: 'Cometió un [error precipitado] al olvidar el presupuesto. (a blatant mistake)', a: ['error garrafal'], why: '*Un error garrafal*.' },
            { s: 'Lograron [alcanzar] un compromiso tras mucho debate.', a: ['llegar a'], why: '*Llegar a un compromiso*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Ha fallecido, no está mal',
      about: 'Recognise euphemism and litotes, and decide when softening helps.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'A **euphemism** replaces a direct word with a gentler one: **ha fallecido** or **nos dejó** for *murió*, **quedarse sin trabajo** or **estar en situación de desempleo** for *estar parado*, **un reajuste de plantilla** for *despidos*, **los daños colaterales** for *las víctimas civiles*. **Litotes** (understatement) says less to mean more by negating the opposite: **no está mal** means *está bien*, **no es poco** means *es mucho*, **no es moco de pavo** means *it is not a trivial matter*. Litotes is common in Spanish and often polite or ironic.' },
          { t: 'table', caption: 'Euphemism and litotes', explain: ['head', 'col0'], head: ['Gentle phrase', 'Direct meaning', 'Effect'], rows: [
            ['nos dejó', 'murió', 'respect, comfort'],
            ['en situación de desempleo', 'parado', 'avoids embarrassment'],
            ['un reajuste de plantilla', 'despidos', 'hides the employer’s action'],
            ['no está mal', 'está bien', 'litotes: understatement'],
            ['no es moco de pavo', 'es importante', 'litotes: informal'],
          ] },
        ],
        [
          { t: 'text', md: 'Softening helps when it shows kindness: *Le acompaño en el sentimiento* is better than *Siento que haya muerto* at a funeral. It hides the truth when it protects the powerful: *un expediente de regulación de empleo* for *cientos de despidos*, *daños colaterales* for *civiles muertos*. A careful reader asks: who benefits from the softer word?' },
          { t: 'tip', art: 'owl', md: 'In your own writing, use a euphemism only when the plain word would hurt your reader. In reports and essays, plain words show confidence: write *La empresa despidió a cuarenta empleados*, not *La empresa se desvinculó de cuarenta colaboradores*.' },
          { t: 'ex', kind: 'sort', h: 'Kind softening, or hiding the truth?', groups: ['kind softening', 'hiding the truth'], explain: ['groups'], items: [
            { s: 'Le acompaño en el sentimiento.', g: 0, why: 'Gentle, at a moment of grief.' },
            { s: 'La fábrica va a pasar por un reajuste de plantilla.', g: 1, why: 'A vague phrase that can hide job losses.' },
            { s: 'Nuestra abuela nos dejó en paz.', g: 0, why: 'A gentle way to say it to the family.' },
            { s: 'Hubo daños colaterales.', g: 1, why: 'Hides the fact that people were killed.' },
            { s: 'Ahora mismo está en situación de desempleo.', g: 0, why: 'Avoids embarrassment, harms nobody.' },
            { s: 'El ministro fue poco claro con la verdad.', g: 1, why: 'A polite way to say he lied.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What does the speaker really mean?', items: [
            { q: '«No está mal», dice el crítico de la película.', o: ['Es bastante buena.', 'Es muy mala.', 'Es aburrida.'], why: 'Litotes: negating the opposite means praise.' },
            { q: '«Esto no es moco de pavo», dice el médico de la herida.', o: ['Es bastante grave.', 'Es insignificante.', 'Está curada.'], why: 'Litotes: it is serious.' },
            { q: '«Nos hemos visto obligados a prescindir de sus servicios.»', o: ['Está despedido.', 'Ha sido ascendido.', 'Está de vacaciones.'], why: 'A euphemism for *despedir*.' },
            { q: '«No es poco», dice el profesor del esfuerzo del alumno.', o: ['Es mucho.', 'Es muy poco.', 'Es normal.'], why: 'Litotes.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it plainly.', items: [
            { q: 'La empresa se desvinculó de cuarenta colaboradores.', cue: 'La empresa despidió a', a: ['La empresa despidió a cuarenta empleados.', 'La empresa despidió a cuarenta colaboradores.', 'La empresa despidió a cuarenta trabajadores.'], why: 'Replace the euphemism with *despedir*.' },
            { q: 'Su abuelo nos dejó en marzo.', cue: 'Su abuelo murió', a: ['Su abuelo murió en marzo.'], why: '*Nos dejó* = murió.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the euphemism with its plain meaning.', pairs: [
            ['nos dejó', 'murió'],
            ['en situación de desempleo', 'parado'],
            ['reajuste de plantilla', 'despidos'],
            ['daños colaterales', 'víctimas civiles de un ataque'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the lesson.', items: [
            { q: 'Esta película no está ___. (litotes: está bien)', a: ['mal'], why: '*No está mal* = está bien.' },
            { q: 'Ahora está en situación de ___, pero tiene una entrevista mañana.', a: ['desempleo'], why: '*En situación de desempleo*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Las palabras que elegimos',
      about: 'Read an essay and notice how word choice shapes the reader’s view.',
      art: 'churro',
      spreads: [
        [
          { t: 'reading', title: 'Las palabras que elegimos', md: 'Dos periódicos informaron de la misma manifestación. Uno escribía que «unos manifestantes furiosos clavaban la vista en los policías»; el otro, que «unos ciudadanos decididos contemplaban con calma a los agentes». Los hechos eran idénticos. Las palabras, no.\n\nEse es el discreto poder de los casi sinónimos. Delgado es un cumplido, escuálido no lo es; un tío ahorrador es admirado, uno tacaño se evita. Todo escritor elige, y cada elección lleva un pequeño juicio.\n\nLa colocación es la segunda prueba del escritor. Un hablante nativo dirá que una medida es encarecidamente recomendada, nunca profundamente recomendada, y que una generalización es precipitada, nunca garrafal. Esas asociaciones no son reglas; son hábitos, que se adquieren leyendo mucho y notando, poco a poco, lo que suena bien.\n\nQueda la cuestión del suavizado. Tras un fallecimiento, «nos dejó» es una delicadeza. Pero cuando una empresa anuncia un «reajuste de plantilla», cabe preguntarse a quién protege la palabra más suave. Las palabras simples pueden ser duras; también pueden ser honestas.\n\nLa lección no es evitar el matiz, sino dominarlo. Antes de elegir una palabra, hágase tres preguntas: qué significa, qué sugiere y a quién puede halagar o herir.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Los dos periódicos informaron de hechos distintos.', a: 'f', why: '«Los hechos eran idénticos. Las palabras, no.»' },
            { q: 'Según el autor, escuálido es un cumplido.', a: 'f', why: '«Delgado es un cumplido, escuálido no lo es.»' },
            { q: 'El autor dice que las colocaciones son reglas estrictas.', a: 'f', why: '«No son reglas; son hábitos.»' },
            { q: 'El autor piensa que «nos dejó» es siempre un error.', a: 'f', why: 'Tras un fallecimiento es «una delicadeza».' },
            { q: 'El autor aconseja preguntarse a quién protege una palabra suave.', a: 't', why: '«Cabe preguntarse a quién protege la palabra más suave.»' },
            { q: 'La manifestación tuvo lugar en Madrid.', a: 'ng', why: 'The text does not say where.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'What does the opening example show?', o: ['Word choice can change how the same facts feel.', 'Newspapers always lie.', 'Demonstrations are hard to describe.'], why: 'The facts were identical, but the words gave two pictures.' },
            { q: 'Why does the writer mention “reajuste de plantilla”?', o: ['As a euphemism that may protect a company.', 'As an example of plain language.', 'As a word from a legal dictionary.'], why: 'A soft word can hide a hard reality.' },
            { q: 'What are the three questions at the end about?', o: ['Meaning, suggestion and effect on people.', 'Grammar, spelling and pronunciation.', 'Length, rhythm and tone.'], why: 'What it means, what it suggests, whom it can flatter or hurt.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the near-synonyms the writer uses to praise or criticise.', items: [
            { s: '[Delgado] es un cumplido, [escuálido] no lo es; un tío [ahorrador] es admirado, uno [tacaño] se evita.', why: 'Two pairs of near-synonyms with opposite connotations.' },
            { s: 'Unos [manifestantes furiosos] clavaban la vista en los policías.', why: 'These words give a negative picture.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the text.', items: [
            { q: 'Una medida es encarecidamente recomendada, nunca ___ recomendada.', a: ['profundamente'], why: 'Collocations are habits.' },
            { q: 'Una generalización es ___, nunca garrafal.', a: ['precipitada'], why: '*Una generalización precipitada*.' },
            { q: 'Tras un fallecimiento, «nos dejó» es una ___.', a: ['delicadeza'], why: 'The author’s view.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Todo escritor elige, y cada elección lleva un pequeño juicio.', why: 'A sentence from the text.' },
            { a: 'Antes de elegir una palabra, pregúntese a quién puede herir.', why: 'The idea of the last paragraph.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'Se quedó delante del cuadro y lo ___ durante una hora, maravillado.', o: ['contempló', 'divisó', 'espió'], why: '*Contemplar*: to look for a long time with admiration.' },
      { q: 'Mi tío es muy ___ y está orgulloso de serlo.', o: ['ahorrador', 'tacaño', 'terco'], why: 'He is proud: a positive word.' },
      { q: 'Se ___ recomienda reservar con antelación.', o: ['encarecidamente', 'gravemente', 'profundamente'], why: '*Encarecidamente recomendado*.' },
      { q: 'Decir que todos los políticos mienten es una generalización ___.', o: ['precipitada', 'garrafal', 'incómoda'], why: '*Una generalización precipitada*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentence.', items: [
      { q: 'Tarde o ___, habrá que decidir.', a: ['temprano'], why: '*Tarde o temprano*.' },
      { q: 'Limpiaron la casa de arriba ___.', a: ['abajo'], why: '*De arriba abajo*.' },
      { q: 'Es de mala educación ___ la vista en los desconocidos.', a: ['clavar'], why: '*Clavar la vista*: to stare.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
      ['esbelto', 'delgado y elegante'],
      ['nos dejó', 'murió'],
      ['reajuste de plantilla', 'despidos'],
    ] },
    { t: 'ex', kind: 'choice', h: 'What does the speaker really mean?', items: [
      { q: '«No está mal», dice el crítico de la película.', o: ['Es bastante buena.', 'Es muy mala.', 'Es aburrida.'], why: 'Litotes.' },
      { q: '«Nos hemos visto obligados a prescindir de sus servicios.»', o: ['Está despedido.', 'Ha sido ascendido.', 'Está de vacaciones.'], why: 'A euphemism for *despedir*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'Admiro a mi abuela: es tan [tacaña].', a: ['ahorradora'], why: 'Praise needs a positive word.' },
      { s: 'Cometió un [error precipitado] al olvidar el presupuesto. (a blatant mistake)', a: ['error garrafal'], why: '*Un error garrafal*.' },
    ] },
  ],
};
