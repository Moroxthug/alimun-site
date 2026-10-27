// Spanish C2, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Academic and critical writing',
  goal: 'Take a measured, evidence-based stance in academic writing. Learn hedging and boosting, nominal style and reporting verbs, and critical evaluation with signposting.',
  art: 'owl',
  tags: { skills: ['writing', 'reading', 'vocabulary'], topics: ['hedging', 'boosting', 'reporting verbs', 'nominal style', 'critical evaluation', 'signposting'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Al parecer, cabe suponer, indudablemente',
      about: 'Hedge and boost claims to show exactly how sure you are.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Academic writers rarely say that something is simply true. They show **how sure** they are. **Hedges** make a claim less certain: *al parecer, cabe suponer, tiende a, en cierta medida, presuntamente, podría, parece sugerir*. **Boosters** make it stronger: *sin duda, indudablemente, a todas luces, es evidente que*. The **conditional** is a classic hedge in Spanish: *Los datos podrían confirmar esta hipótesis.* **Presuntamente** and **supuestamente** mean *allegedly* and show doubt: *La reunión era supuestamente privada.*' },
          { t: 'table', caption: 'Hedges and boosters', explain: ['head', 'col0'], head: ['Function', 'Examples', 'Sample sentence'], rows: [
            ['hedge: possibility', 'podría, parece sugerir, cabe suponer', 'Los datos podrían confirmar esta tesis.'],
            ['hedge: frequency or degree', 'tiende a, en cierta medida', 'Los precios tienden a subir en verano.'],
            ['hedge: probability', 'al parecer, probablemente', 'Al parecer, se ha marchado.'],
            ['hedge: doubt about truth', 'presuntamente, supuestamente', 'La visita era supuestamente privada.'],
            ['booster', 'sin duda, indudablemente, a todas luces', 'Los resultados son indudablemente significativos.'],
          ] },
        ],
        [
          { t: 'text', md: 'Too many hedges make you sound unsure; too many boosters make you sound arrogant. A strong paragraph balances them. Weak: *Es indudable que todos los estudiantes prefieren las clases en línea.* Measured: *La encuesta sugiere que muchos estudiantes prefieren las clases en línea, aunque esto podría variar según la disciplina.* Notice **sugiere**, **muchos** and **podría**: three small hedges that make the claim defensible.' },
          { t: 'tip', art: 'owl', md: 'Be careful with absolute words: *todos, siempre, nunca, demuestra, imposible*. They are almost always too strong in academic writing. Replace them: *todos → la mayoría / muchos*; *siempre → a menudo / tiende a*; *demuestra → sugiere / indica*.' },
          { t: 'ex', kind: 'transform', h: 'Make the claim more cautious, using the word given.', items: [
            { q: 'Las redes sociales causan ansiedad en los adolescentes.', cue: 'pueden', a: ['Las redes sociales pueden causar ansiedad en los adolescentes.'], why: 'The hedge *pueden* reduces certainty.' },
            { q: 'El estudio demuestra que el deporte mejora la memoria.', cue: 'sugiere', a: ['El estudio sugiere que el deporte mejora la memoria.'], why: '*Sugiere* is weaker than *demuestra*.' },
            { q: 'Todos los jóvenes prefieren los mensajes de texto.', cue: 'tienden', a: ['Los jóvenes tienden a preferir los mensajes de texto.'], why: '*Tender a* hedges frequency.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best word.', items: [
            { q: 'La ley se aprobó ___ para proteger a los trabajadores, pero sus críticos ven un beneficio para los empresarios.', o: ['supuestamente', 'indudablemente', 'a todas luces'], why: '*Supuestamente*: as claimed, but perhaps not true.' },
            { q: 'Las pruebas apuntan ___ a favor del nuevo tratamiento: los cuatro ensayos coinciden.', o: ['claramente', 'presuntamente', 'supuestamente'], why: 'A strong booster fits strong evidence.' },
            { q: 'Esta es ___ la novela más influyente de la década, aunque algunos discreparían.', o: ['posiblemente', 'indudablemente', 'a todas luces'], why: '*Posiblemente* hedges an opinion.' },
            { q: '___ que las cifras confirmen esta hipótesis.', o: ['Cabe suponer', 'Es indudable', 'Está demostrado'], why: '*Cabe suponer* is a hedge.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Hedge or booster?', groups: ['hedge', 'booster'], explain: ['groups'], items: [
            { s: 'tiende a', g: 0, why: 'A hedge for frequency.' },
            { s: 'indudablemente', g: 1, why: 'A booster.' },
            { s: 'cabe suponer', g: 0, why: 'A hedge.' },
            { s: 'a todas luces', g: 1, why: 'A booster.' },
            { s: 'en cierta medida', g: 0, why: 'A hedge for degree.' },
            { s: 'sin duda', g: 1, why: 'A booster.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Sostener, plantear, objetar',
      about: 'Use nominal style and precise reporting verbs.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Academic Spanish packs information into **noun phrases**. Instead of *Cada vez más gente trabaja desde casa, y eso es importante*, a writer might say *el número creciente de personas que trabajan desde casa* or *el auge del teletrabajo*. Useful frames: *la magnitud de…*, *un número creciente de…*, *la ausencia de…*, *las implicaciones de…*, *un cúmulo de indicios*. The noun phrase can be the subject: *Un cúmulo de indicios sugiere que…*' },
          { t: 'examples', items: [
            { s: '**La magnitud** del efecto de las pantallas en el sueño sigue sin estar clara.', n: 'A noun phrase as subject, then *sigue sin estar clara*.' },
            { s: '**Un número creciente** de estudios sugiere que el bilingüismo favorece la concentración.', n: 'Impersonal and academic.' },
            { s: '**La ausencia** de financiación ha frenado el proyecto.', n: 'A noun phrase replacing *no hay financiación*.' },
          ] },
        ],
        [
          { t: 'text', md: 'To refer to other writers, choose a **reporting verb** that shows their stance. **Afirmar**, **señalar** and **indicar** are neutral. **Sostener** and **mantener** show a firm position. **Plantear** means *put forward* an idea. **Conceder** means *admit reluctantly*. **Objetar**, **cuestionar** and **refutar** show disagreement. **Alegar** shows doubt: the claim is not accepted. Use the **present** for what an author says and the **pretérito perfecto or indefinido** for what a study did.' },
          { t: 'table', caption: 'Reporting verbs', explain: ['head', 'col0'], head: ['Verb', 'What it shows', 'Example'], rows: [
            ['afirmar / señalar', 'neutral', 'El autor señala que las ciudades deben reducir el tráfico.'],
            ['sostener / mantener', 'firm position', 'Ella sostiene que esta política ha fracasado.'],
            ['plantear', 'puts forward an idea', 'Esta teoría plantea que la memoria se reconstruye.'],
            ['conceder', 'admits reluctantly', 'La autora concede que la muestra era pequeña.'],
            ['objetar / cuestionar', 'disagrees', 'Varios especialistas cuestionan estas cifras.'],
            ['alegar', 'doubt about the truth', 'El informe alega que se desviaron fondos.'],
          ] },
        ],
        [
          { t: 'tip', art: 'owl', md: 'Use **alegar** only to signal doubt: in law it means *to plead*, and in everyday academic writing it often suggests a claim that is not proved. **Pretender** is a **false friend**: in Spanish it means *to intend* (*Pretende viajar en mayo*), not *to pretend*. In academic writing, **afirmar** and **señalar** are the safest choices when you are not sure of an author’s strength of feeling.' },
          { t: 'ex', kind: 'choice', h: 'Choose the best reporting verb.', items: [
            { q: 'La autora ___ que la muestra era demasiado pequeña para sacar conclusiones firmes.', o: ['concede', 'alega', 'cuestiona'], why: '*Conceder*: admit reluctantly, against the writer’s own case.' },
            { q: 'Esta teoría ___ que el lenguaje se aprende por imitación.', o: ['plantea', 'concede', 'cuestiona'], why: '*Plantear*: put forward.' },
            { q: 'Varios especialistas ___ la exactitud de las cifras.', o: ['cuestionan', 'plantean', 'mantienen'], why: '*Cuestionar*: challenge.' },
            { q: 'El periódico ___ que el ministro aceptó sobornos, pero no se ha presentado ninguna prueba.', o: ['alega', 'sostiene', 'concede'], why: '*Alegar*: claim without proof.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite with a noun phrase, starting with the words given.', items: [
            { q: 'Cada vez más personas van al trabajo en bicicleta, y eso es importante.', cue: 'El número creciente', a: ['El número creciente de personas que van al trabajo en bicicleta es importante.'], why: 'A noun phrase as subject.' },
            { q: 'No hay suficiente financiación, así que el proyecto se ha frenado.', cue: 'La falta', a: ['La falta de financiación ha frenado el proyecto.'], why: '*La falta de* + noun.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the lesson.', items: [
            { q: 'Un ___ de indicios sugiere que el sueño influye en la memoria.', a: ['cúmulo'], why: '*Un cúmulo de indicios*.' },
            { q: 'La ___ del efecto de las pantallas sigue sin estar clara.', a: ['magnitud'], why: '*La magnitud de*.' },
            { q: 'El periódico ___ que el ministro mintió, sin pruebas.', a: ['alega'], why: '*Alegar* signals doubt.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Puntos fuertes y limitaciones',
      about: 'Evaluate a piece of research and signpost your argument.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'A critical writer does not only describe; they **evaluate**. For any study, ask: what is its **punto fuerte** (strength), and what are its **limitaciones**? Typical strengths: *una muestra amplia y variada, un método claro, resultados que coinciden con otros estudios*. Typical limitations: *una muestra reducida o homogénea, un periodo corto, datos autodeclarados, una conclusión que va más allá de los datos*. Useful phrases: *Uno de los puntos fuertes del estudio es…*, *Una limitación notable es que…*, *Estos resultados no pueden generalizarse a…*.' },
          { t: 'examples', items: [
            { s: '**Uno de los puntos fuertes** del estudio es su muestra amplia y variada.', n: 'A positive evaluation.' },
            { s: '**Una limitación notable** es que los datos son autodeclarados.', n: 'A negative evaluation.' },
            { s: 'Estos resultados **no pueden generalizarse** a las personas mayores.', n: 'The sample did not include them.' },
          ] },
        ],
        [
          { t: 'text', md: '**Signposting** tells the reader where the argument is going. To contrast: *mientras que*, *en cambio*, *por el contrario*. To draw a conclusion: *de ello se deduce que*, *por consiguiente*, *cabe señalar*. To add: *asimismo*, *además*. To concede and then argue: *si bien… no obstante…*. **Si bien** means *although* and takes the indicative: *Si bien la muestra era pequeña, la tendencia es clara.* These words are the grammar of an argument; without them, a paragraph is a list of facts.' },
          { t: 'table', caption: 'Signposting', explain: ['head', 'col0'], head: ['Function', 'Phrases', 'Example'], rows: [
            ['contrast', 'mientras que, en cambio, por el contrario', 'El primer estudio halló un vínculo, mientras que el segundo no halló ninguno.'],
            ['conclusion', 'de ello se deduce que, por consiguiente', 'Por consiguiente, la política debe revisarse.'],
            ['addition', 'asimismo, además', 'Asimismo, la muestra era reducida.'],
            ['concession', 'si bien… no obstante…', 'Si bien la muestra era pequeña, la tendencia es clara.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Strength or limitation?', groups: ['strength', 'limitation'], explain: ['groups'], items: [
            { s: 'La muestra incluyó a 5 000 participantes de doce países.', g: 0, why: 'A large and varied sample.' },
            { s: 'Todos los participantes eran estudiantes.', g: 1, why: 'A narrow sample.' },
            { s: 'Los resultados coinciden con los de tres estudios anteriores.', g: 0, why: 'Consistency with earlier research.' },
            { s: 'El estudio duró solo dos semanas.', g: 1, why: 'A short time period.' },
            { s: 'Los datos proceden de cuestionarios que rellenaron los propios participantes.', g: 1, why: 'Self-reporting can be unreliable.' },
            { s: 'Los investigadores describieron su método con detalle.', g: 0, why: 'A clear method.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best signpost.', items: [
            { q: 'El primer estudio halló un vínculo claro; ___, el segundo no halló ninguno.', o: ['en cambio', 'asimismo', 'por consiguiente'], why: 'Contrast between the studies.' },
            { q: '___ la muestra era pequeña, la tendencia es clara.', o: ['Si bien', 'Asimismo', 'Por consiguiente'], why: '*Si bien* concedes a point.' },
            { q: 'Los datos proceden de dos países; ___, los resultados quizá no se apliquen en otros.', o: ['por consiguiente', 'en cambio', 'mientras que'], why: 'A logical conclusion.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Join the sentences with the signpost given.', items: [
            { q: 'El primer estudio halló un vínculo. El segundo no halló ninguno.', cue: 'mientras que', a: ['El primer estudio halló un vínculo, mientras que el segundo no halló ninguno.', 'El primer estudio halló un vínculo mientras que el segundo no halló ninguno.'], why: '*Mientras que* links two contrasting clauses.' },
            { q: 'La muestra era pequeña. La tendencia era clara.', cue: 'Si bien', a: ['Si bien la muestra era pequeña, la tendencia era clara.'], why: '*Si bien* + indicative.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Teletrabajo: ¿qué sabemos?',
      about: 'Read an extract from a literature review and identify stance, hedging and evaluation.',
      art: 'mug',
      spreads: [
        [
          { t: 'reading', title: 'Teletrabajo: ¿qué sabemos?', md: 'Un cúmulo de indicios sugiere que el teletrabajo ha transformado la organización de la jornada de muchos empleados. La magnitud de sus efectos sobre la productividad sigue, no obstante, sometida a debate.\n\nUn primer estudio sostenía que los empleados que trabajaban desde casa eran más productivos, supuestamente porque se les interrumpía menos. Un estudio posterior, en cambio, observó un descenso de la productividad en las tareas que exigían un trabajo de equipo estrecho. Ambos estudios tienen limitaciones: la primera muestra procedía de una sola empresa, mientras que la segunda se basaba en las estimaciones de los propios empleados.\n\nVarios investigadores conceden que los datos son incompletos. Uno plantea que la variable decisiva no es el lugar, sino la calidad de la dirección, una lectura que podría ajustarse a las pruebas disponibles, aunque no se ha contrastado directamente. Otros la cuestionan y objetan que el tipo de trabajo importa más que la forma de gestionarlo.\n\nEn conjunto, los estudios sugieren que el teletrabajo tiende a convenir a las tareas individuales, pero que sus efectos sobre la creatividad y la colaboración son menos claros. Por consiguiente, las organizaciones deberían evitar las generalizaciones precipitadas. Una limitación notable de la bibliografía es lo breve del periodo observado; futuras investigaciones podrían, por tanto, seguir a los mismos empleados durante varios años.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'El autor afirma que es seguro que el teletrabajo aumenta la productividad.', a: 'f', why: 'The magnitude of the effects “sigue sometida a debate”.' },
            { q: 'Un primer estudio sostenía que los empleados eran más productivos en casa.', a: 't', why: '«Eran más productivos.»' },
            { q: 'El estudio posterior observó que todas las tareas se hacían peor en casa.', a: 'f', why: 'Only «las tareas que exigían un trabajo de equipo estrecho».' },
            { q: 'Un investigador plantea que la calidad de la dirección es la variable decisiva.', a: 't', why: '«Uno plantea que la variable decisiva… es la calidad de la dirección.»' },
            { q: 'El autor recomienda las generalizaciones precipitadas.', a: 'f', why: '«Las organizaciones deberían evitar las generalizaciones precipitadas.»' },
            { q: 'El primer estudio se realizó en un hospital.', a: 'ng', why: 'The text says only «una sola empresa».' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'What does «supuestamente porque se les interrumpía menos» suggest?', o: ['The reason is claimed, but may not be true.', 'The reason is certainly true.', 'The reason is unimportant.'], why: '*Supuestamente*: allegedly.' },
            { q: 'What does «conceden» show about the researchers?', o: ['They admit the data are incomplete.', 'They reject the data.', 'They collected the data.'], why: '*Conceder*: admit reluctantly.' },
            { q: 'What is the function of «en cambio» in the second paragraph?', o: ['It introduces a different finding.', 'It adds a similar finding.', 'It concludes the argument.'], why: 'Signposting a contrast between studies.' },
            { q: 'What limitation of the literature is named in the last paragraph?', o: ['A short observation period.', 'A small number of countries.', 'A lack of interest.'], why: '«Lo breve del periodo observado.»' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the hedges.', items: [
            { s: 'Una lectura que [podría] ajustarse a las pruebas disponibles, aunque no se ha contrastado directamente.', why: 'A hedge: the conditional *podría*.' },
            { s: 'El teletrabajo [tiende a] convenir a las tareas individuales.', why: 'A hedge for frequency.' },
            { s: 'Los estudios [sugieren] que sus efectos son [menos claros].', why: 'Hedged claims.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the text.', items: [
            { q: 'Un ___ de indicios sugiere que el teletrabajo ha transformado la jornada.', a: ['cúmulo'], why: '*Un cúmulo de indicios*.' },
            { q: '___ consiguiente, las organizaciones deberían evitar las generalizaciones precipitadas.', a: ['Por'], why: '*Por consiguiente* = therefore.' },
            { q: 'La primera muestra procedía de una sola empresa, ___ que la segunda se basaba en estimaciones de los empleados.', a: ['mientras'], why: '*Mientras que* contrasts two things.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'La magnitud de sus efectos sobre la productividad sigue sometida a debate.', why: 'A noun phrase as subject.' },
            { a: 'Ambos estudios tienen limitaciones que no se pueden ignorar.', why: 'Evaluation of research.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
      { q: 'La visita era ___ privada, pero fue sobre todo una reunión de negocios.', o: ['supuestamente', 'indudablemente', 'a todas luces'], why: '*Supuestamente*: allegedly.' },
      { q: 'La autora ___ que la muestra era demasiado pequeña.', o: ['concede', 'alega', 'cuestiona'], why: 'Admits reluctantly.' },
      { q: 'El primer estudio halló un vínculo; ___, el segundo no halló ninguno.', o: ['en cambio', 'asimismo', 'por consiguiente'], why: 'Contrast.' },
      { q: 'Un ___ de indicios sugiere esta tesis.', o: ['cúmulo', 'grupo', 'sitio'], why: '*Un cúmulo de indicios*.' },
    ] },
    { t: 'ex', kind: 'sort', h: 'Hedge or booster?', groups: ['hedge', 'booster'], explain: ['groups'], items: [
      { s: 'tiende a', g: 0, why: 'Hedge.' },
      { s: 'indudablemente', g: 1, why: 'Booster.' },
      { s: 'cabe suponer', g: 0, why: 'Hedge.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentence.', items: [
      { q: 'La ___ del efecto de las pantallas sigue sin estar clara.', a: ['magnitud'], why: '*La magnitud de*.' },
      { q: 'Estos resultados no pueden ___ a las personas mayores.', a: ['generalizarse'], why: '*Generalizarse a*.' },
      { q: '___ bien la muestra era pequeña, la tendencia es clara.', a: ['Si'], why: '*Si bien* concedes a point.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite, using the word given.', items: [
      { q: 'El estudio demuestra que el deporte mejora la memoria.', cue: 'sugiere', a: ['El estudio sugiere que el deporte mejora la memoria.'], why: '*Sugiere* is weaker than *demuestra*.' },
      { q: 'No hay suficiente financiación, así que el proyecto se ha frenado.', cue: 'La falta', a: ['La falta de financiación ha frenado el proyecto.'], why: '*La falta de* + noun.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the problem.', items: [
      { s: 'El estudio [demuestra] que el deporte mejora la memoria, en todos los casos.', a: ['sugiere', 'indica'], why: 'Too strong for academic writing.' },
      { s: 'El periódico [concede] que el ministro aceptó sobornos, pero no hay pruebas.', a: ['alega', 'afirma'], why: '*Alegar* signals doubt.' },
    ] },
  ],
};
