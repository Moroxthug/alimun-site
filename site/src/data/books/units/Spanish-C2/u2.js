// Spanish C2, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Style and rhythm',
  goal: 'Write sentences that are varied, cohesive and well paced. Learn sentence variety and parallel structure, cohesion without repetition, and punctuation for effect with the Spanish rules for colons, commas and inverted marks.',
  art: 'parrot',
  tags: { skills: ['grammar', 'writing', 'reading'], topics: ['sentence variety', 'parallelism', 'cohesion', 'punctuation'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Corto, largo, equilibrado',
      about: 'Vary the length of sentences and keep parallel ideas in parallel form.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Good writers control **rhythm**. A run of long sentences tires the reader; a run of short ones sounds like a list. The skill is to mix them. A **short sentence** gives impact: *Esperó. No pasó nada.* A **long sentence** builds an idea step by step. A **periodic sentence** keeps the main point until the end, to create suspense: *A pesar de la lluvia, de los retrasos y de las objeciones de sus propios asesores, el ministro firmó.*' },
          { t: 'examples', items: [
            { s: 'La puerta se abrió. **No entró nadie.**', n: 'A short sentence after a longer one creates a pause and tension.' },
            { s: 'Después de meses en los archivos, entrevistando a supervivientes y comprobando cada fecha, **por fin publicó el libro**.', n: 'A periodic sentence: the main clause comes last.' },
            { s: '**Vino, vio y venció**.', n: 'Three short verbs in a row: a quick, confident rhythm.' },
          ] },
        ],
        [
          { t: 'text', md: '**Parallelism** means using the same grammatical form for ideas of equal importance. It makes a sentence balanced and easy to follow. Faulty parallelism sounds clumsy: *Le gusta leer, la escritura y pintar.* Use the same form for all three: *leer, escribir y pintar.* Balance can also be used for effect: *Unos hablan; otros actúan.*' },
          { t: 'tip', art: 'owl', md: 'To check parallelism, underline the items in a list or after *tanto… como*, *o… o*, *no solo… sino también*. Do they all have the same form (all infinitives, all nouns)? If not, rewrite. A common fault: *El puesto exige trabajar hasta tarde y la puntualidad.*' },
          { t: 'ex', kind: 'choice', h: 'Which sentence is correctly parallel?', items: [
            { q: '', o: ['Le gusta nadar, correr y bailar.', 'Le gusta nadar, la carrera y bailar.', 'Le gusta nadar, correr y el baile.'], why: 'All three items are infinitives.' },
            { q: '', o: ['El director es tan justo como honesto.', 'El director es tan justo como que es honesto.', 'El director es tan justicia como honesto.'], why: 'Both items in *tan… como* are adjectives.' },
            { q: '', o: ['No solo redactó el informe, sino que también presentó los resultados.', 'No solo redactó el informe, sino también presentar los resultados.', 'No solo redactó el informe, sino la presentación de resultados.'], why: 'Both parts are verb phrases with the same tense.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite to make the structure parallel.', items: [
            { q: 'El puesto exige trabajar hasta tarde y la puntualidad.', cue: 'El puesto exige trabajar hasta tarde y', a: ['El puesto exige trabajar hasta tarde y ser puntual.'], why: 'Both items become infinitives.' },
            { q: 'Es inteligente, trabajadora y tiene un gran sentido del humor.', cue: 'Es inteligente, trabajadora y', a: ['Es inteligente, trabajadora y divertida.', 'Es inteligente, trabajadora e ingeniosa.'], why: 'Three adjectives, not two adjectives and a clause.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Is the sentence short for impact, or periodic?', groups: ['short for impact', 'periodic'], explain: ['groups'], items: [
            { s: 'Cayó el silencio.', g: 0, why: 'Very short: creates a pause.' },
            { s: 'Tras semanas de disputas, reuniones interminables y una última y amarga votación, el consejo dio su consentimiento.', g: 1, why: 'The main clause comes last.' },
            { s: 'Nadie se movió.', g: 0, why: 'Very short: impact.' },
            { s: 'A pesar de su miedo a las alturas, de su falta de equipo y de las advertencias del guía, escaló.', g: 1, why: 'The main point is delayed until the end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Este último, esta decisión',
      about: 'Avoid repetition with pronouns, nominal resumption and ellipsis, and keep the reference clear.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'Cohesion means that sentences link smoothly. Repeating the same noun again and again sounds heavy; replacing it badly makes the meaning unclear. Spanish uses **pronouns** (*lo, la, los, las*), **demonstratives** (*este, aquel, este último*), the neuter **lo** and **ello**, and **nominal resumption**, where a noun names what has just been said: *El ayuntamiento subió las tarifas. Esta subida irritó a los vecinos.* **Ellipsis** leaves out words that are easy to supply: *Unos votaron a favor; otros, en contra.*' },
          { t: 'table', caption: 'Ways to avoid repetition', explain: ['head', 'col0'], head: ['Device', 'Example', 'What it replaces'], rows: [
            ['pronoun lo / la', 'Necesito el libro; lo necesito para mañana.', 'el libro'],
            ['este último / aquel', 'El ministro se reunió con el alcalde; este último se negó.', 'el alcalde (the last mentioned)'],
            ['ello / lo cual', 'Subieron las tarifas, lo cual irritó a todos.', 'the whole fact'],
            ['nominal resumption', 'El ayuntamiento subió las tarifas. Esta subida irritó a todos.', 'the increase'],
            ['ellipsis', 'Unos votaron a favor; otros, en contra.', 'votaron'],
          ] },
        ],
        [
          { t: 'text', md: 'The neuter **eso** or **esto** is a common source of vagueness. *El ayuntamiento subió las tarifas. Eso irritó a los vecinos.* What irritated them: the council, the tariffs, or the rise? Where there is doubt, name it: *Esta subida irritó a los vecinos.* **Este último** refers to the **last-mentioned** person or thing, **aquel** to the first. If the reader must look back to find who is who, repeat the name.' },
          { t: 'tip', art: 'owl', md: '*Aquel… este último* works for **two** items; with three or more, use *el primero, el segundo, el último*. *Este último* is formal and a bit heavy: do not use it more than once in a paragraph. Since the 2010 spelling reform, the demonstratives are normally written **without an accent** (*este*, *ese*, *aquel*), even when they are pronouns.' },
          { t: 'ex', kind: 'choice', h: 'Choose the best word to avoid repetition.', items: [
            { q: 'El ayuntamiento subió las tarifas. ___ subida irritó a los vecinos.', o: ['Esta', 'Ella', 'Aquello'], why: 'A noun phrase names exactly what irritated them.' },
            { q: 'El ministro se reunió con el alcalde; ___ se negó a responder.', o: ['este último', 'aquel', 'el primero'], why: '*Este último* = the last-mentioned: the mayor.' },
            { q: 'Subieron las tarifas, ___ irritó a todos.', o: ['lo cual', 'el cual', 'lo que ello'], why: '*Lo cual* refers to the whole fact.' },
            { q: 'Unos votaron a favor; otros, ___.', o: ['en contra', 'votaron en contra de ellos', 'contra ello'], why: 'Ellipsis: the verb is understood.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite to avoid repetition, using the word given.', items: [
            { q: 'El ayuntamiento subió las tarifas, y eso irritó a los vecinos.', cue: 'Esta', a: ['El ayuntamiento subió las tarifas, y esta subida irritó a los vecinos.', 'El ayuntamiento subió las tarifas; esta subida irritó a los vecinos.'], why: 'Nominal resumption names the increase.' },
            { q: 'Necesito el libro. Necesito el libro para mañana.', cue: 'Lo', a: ['Necesito el libro. Lo necesito para mañana.'], why: 'The pronoun *lo* replaces *el libro*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Make the reference clear.', items: [
            { s: 'El ayuntamiento recortó las subvenciones. [Eso] preocupó a las asociaciones.', a: ['Este recorte', 'Esta decisión', 'Esta medida'], why: 'Name what *eso* refers to.' },
            { s: 'De los tres candidatos, [este último] tenía más experiencia.', a: ['el tercero', 'el último'], why: '*Este último* is clearer with two items.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a pronoun.', items: [
            { q: '¿Quieres café? Sí, ___ quiero.', a: ['lo'], why: 'The pronoun *lo* replaces *café*.' },
            { q: 'Subieron las tarifas, ___ cual irritó a todos.', a: ['lo'], why: '*Lo cual* refers to the whole fact.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Punto y coma, dos puntos, raya',
      about: 'Use punctuation to control meaning and rhythm, with the Spanish rules.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Punctuation controls how a sentence is read. The **punto y coma** (;) joins two closely related clauses: *El plan era sencillo; su ejecución, no.* The **dos puntos** (:) introduces an explanation, a list or a conclusion: *Solo había una explicación: había mentido.* After a colon, Spanish normally uses a **lowercase** letter, except after a salutation or before a quotation. The **raya** (—) adds emphasis or an interruption: *El resultado —para sorpresa de todos— fue un empate.* **Paréntesis** add information that could be removed. Spanish uses **opening marks** for questions and exclamations: **¿Qué pasó?** **¡Qué sorpresa!**' },
          { t: 'table', caption: 'Punctuation for effect', explain: ['head', 'col0'], head: ['Mark', 'Use', 'Example'], rows: [
            ['punto y coma ;', 'two related clauses', 'El plan era sencillo; su ejecución, no.'],
            ['dos puntos :', 'explanation or list', 'Solo tenía un miedo: el fracaso.'],
            ['raya —', 'emphasis or interruption', 'El resultado —para sorpresa de todos— fue un empate.'],
            ['paréntesis ( )', 'extra, removable information', 'El festival (ya en su décima edición) abre el viernes.'],
            ['¿? ¡!', 'opening and closing marks', '¿Qué pasó? ¡Qué sorpresa!'],
          ] },
        ],
        [
          { t: 'text', md: 'A single comma can change the meaning: *Vamos a comer, abuela* and *Vamos a comer abuela*. In relative clauses, commas separate **explicative** information (extra) from **restrictive** information (needed to identify): *Mi hermano, que vive en París, es cocinero* means I have one brother. *Mi hermano que vive en París es cocinero* suggests I have more than one. Do not join two independent clauses with a comma alone (a **comma splice**): *El plan era sencillo, su ejecución no lo era.*' },
          { t: 'tip', art: 'owl', md: 'Do not put a comma between the **subject** and the **verb**: *Mi hermano, vive en París* is wrong (unless an aside intervenes). Also do not forget the **opening** marks: *Qué pasó?* is a mistake in Spanish. In **Latin America** and in Spain, the rules are the same, though the **raya** is often replaced by a plain dash in informal writing. A comma before **y** is not used to join two simple items: *pan y vino*.' },
          { t: 'ex', kind: 'choice', h: 'Which punctuation is correct?', items: [
            { q: '', o: ['El plan era sencillo; su ejecución, no.', 'El plan era sencillo, su ejecución no.', 'El plan era sencillo: su ejecución no.'], why: 'A semicolon joins two related clauses; a comma alone is a splice.' },
            { q: '', o: ['Solo tenía un miedo: el fracaso.', 'Solo tenía un miedo; el fracaso.', 'Solo tenía un miedo, el fracaso.'], why: 'A colon introduces the explanation.' },
            { q: '', o: ['Mi hermana, que vive en Roma, es médica.', 'Mi hermana que vive en Roma, es médica.', 'Mi hermana, que vive en Roma es médica.'], why: 'Explicative information needs a comma on both sides.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite with a semicolon, colon or raya.', items: [
            { q: 'El plan era sencillo, pero su ejecución no lo era.', cue: 'El plan era sencillo;', a: ['El plan era sencillo; su ejecución, no.', 'El plan era sencillo; su ejecución no lo era.'], why: 'A semicolon joins the clauses.' },
            { q: 'Solo había una explicación, y era que había mentido.', cue: 'Solo había una explicación:', a: ['Solo había una explicación: había mentido.'], why: 'A colon introduces the explanation, in lowercase.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'What does the sentence tell you?', groups: ['only one such person', 'more than one possible'], explain: ['groups'], items: [
            { s: 'Mi hermano, que vive en París, es cocinero.', g: 0, why: 'Commas: extra information, so there is one brother.' },
            { s: 'Mi hermano que vive en París es cocinero.', g: 1, why: 'No commas: identifies which brother, so there are several.' },
            { s: 'Los alumnos, que estaban cansados, se fueron pronto.', g: 0, why: 'All the pupils were tired and left.' },
            { s: 'Los alumnos que estaban cansados se fueron pronto.', g: 1, why: 'Only the tired pupils left.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Fix the punctuation error.', items: [
            { s: 'La película era larga[,] también era magnífica.', a: [';', ' —', ':'], why: 'A comma splice: use a semicolon or a dash.' },
            { s: 'Necesitamos tres cosas[;] pan, queso y vino.', a: [':'], why: 'A colon, not a semicolon, introduces a list.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'La vía lenta',
      about: 'Read a magazine essay and notice rhythm, cohesion and punctuation.',
      art: 'churro',
      spreads: [
        [
          { t: 'reading', title: 'La vía lenta', md: 'Antes medía mis días en tareas cumplidas. Correos contestados, reuniones atendidas, listas tachadas; al anochecer estaba agotada y no más sabia. Luego, una primavera, probé algo sencillo: paré.\n\nAl principio no salió bien. La ociosidad, descubrí, es un arte, y difícil. Cogía el móvil para ver el tiempo y cuarenta minutos después seguía deslizando la pantalla. Una vecina, que había vivido toda su vida en el pueblo, se rio cuando se lo conté. «Usted no es lenta —me dijo—. Solo llega tarde.»\n\nVivir despacio no significa no hacer nada; significa hacer una sola cosa a la vez y hacerla con atención. Cocino sin pódcast. Paseo sin auriculares. Leo un capítulo y luego, sobre todo, pienso en él. El primero de esos hábitos fue el más difícil; el último, el más gratificante.\n\nPuede objetarse que todo esto es un lujo, dicen los críticos, reservado a quienes pueden reducir su jornada. No les falta razón, y no la rechazo. Pero la calma de una tarde lenta no es un producto; es una elección, y una elección que cuesta muy poco.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'La autora juzgaba antes sus días por el número de tareas cumplidas.', a: 't', why: '«Antes medía mis días en tareas cumplidas.»' },
            { q: 'Le resultó fácil estar ociosa al principio.', a: 'f', why: '«Al principio no salió bien.»' },
            { q: 'La vecina le dijo que era demasiado lenta.', a: 'f', why: '«Usted no es lenta. Solo llega tarde.»' },
            { q: 'La autora cree que los críticos no tienen ninguna razón.', a: 'f', why: '«No les falta razón.»' },
            { q: 'Ahora cocina sin pódcast.', a: 't', why: '«Cocino sin pódcast.»' },
            { q: 'La autora vive en un pueblo junto al mar.', a: 'ng', why: 'The text mentions a village but not the sea.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at how the essay is written.', items: [
            { q: '«Luego, una primavera, probé algo sencillo: paré.» Why is the last word so short?', o: ['To give impact after a long build-up.', 'Because the writer was in a hurry.', 'Because it is a question.'], why: 'A short clause after a long one creates impact.' },
            { q: '«El primero de esos hábitos fue el más difícil; el último, el más gratificante.» Why the semicolon?', o: ['It balances two closely related ideas.', 'It introduces a list.', 'It shows a quotation.'], why: 'A semicolon joins related clauses and creates balance.' },
            { q: '«hacerla con atención» – what does *la* refer to?', o: ['una sola cosa', 'la tarde', 'la vecina'], why: '*La* replaces *una sola cosa*.' },
            { q: 'Which opening is a periodic sentence?', o: ['«Correos contestados, reuniones atendidas, listas tachadas; al anochecer estaba agotada y no más sabia.»', '«Al principio no salió bien.»', '«Paseo sin auriculares.»'], why: 'The list of details comes first and the point last.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the examples of parallel structure.', items: [
            { s: '[Cocino sin pódcast. Paseo sin auriculares.] Leo un capítulo y luego pienso en él.', why: 'The first two sentences repeat one structure.' },
            { s: '[Correos contestados, reuniones atendidas, listas tachadas]; al anochecer estaba agotada.', why: 'Three parallel participle phrases.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the text.', items: [
            { q: 'La ociosidad, descubrí, es un ___, y difícil.', a: ['arte'], why: 'The writer’s discovery.' },
            { q: 'La calma de una tarde lenta no es un producto; es una ___.', a: ['elección'], why: 'The writer’s final point.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'Le gusta ___.', o: ['nadar, correr y bailar', 'nadar, la carrera y bailar', 'nadar, correr y el baile'], why: 'All items must have the same form.' },
      { q: 'El ayuntamiento subió las tarifas. ___ subida irritó a los vecinos.', o: ['Esta', 'Ella', 'Aquello'], why: 'A noun phrase names exactly what irritated them.' },
      { q: 'Which sentence is correct?', o: ['El plan era sencillo; su ejecución, no.', 'El plan era sencillo, su ejecución no.', 'El plan era sencillo; y su ejecución no.'], why: 'A semicolon joins two clauses without a conjunction.' },
      { q: 'Which question is written correctly?', o: ['¿Qué pasó?', 'Qué pasó?', '¿Qué pasó'], why: 'Spanish needs the opening and closing marks.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentence.', items: [
      { q: 'El ministro se reunió con el alcalde; este ___ se negó a responder.', a: ['último'], why: '*Este último* = the last-mentioned.' },
      { q: 'Solo había una explicación: había ___.', a: ['mentido'], why: 'A colon introduces the explanation.' },
      { q: 'Unos votaron a favor; otros, en ___.', a: ['contra'], why: 'Ellipsis.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite, starting with the words given.', items: [
      { q: 'El puesto exige trabajar hasta tarde y la puntualidad.', cue: 'El puesto exige trabajar hasta tarde y', a: ['El puesto exige trabajar hasta tarde y ser puntual.'], why: 'Parallel infinitives.' },
      { q: 'El plan era sencillo, pero su ejecución no lo era.', cue: 'El plan era sencillo;', a: ['El plan era sencillo; su ejecución, no.', 'El plan era sencillo; su ejecución no lo era.'], why: 'A semicolon joins the clauses.' },
    ] },
    { t: 'ex', kind: 'sort', h: 'What does the sentence tell you?', groups: ['one only', 'more than one'], explain: ['groups'], items: [
      { s: 'Mi hermana, que vive en Roma, es médica.', g: 0, why: 'Commas: extra information, so one sister.' },
      { s: 'Mi hermana que vive en Roma es médica.', g: 1, why: 'No commas: identifies a sister, so there are several.' },
      { s: 'Su hijo, que es piloto, llamó.', g: 0, why: 'One son.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'La película era larga[,] también era magnífica.', a: [';', ' —', ':'], why: 'A comma splice.' },
      { s: 'El ayuntamiento recortó las subvenciones. [Eso] preocupó a las asociaciones.', a: ['Este recorte', 'Esta decisión', 'Esta medida'], why: 'Name what *eso* refers to.' },
    ] },
  ],
};
