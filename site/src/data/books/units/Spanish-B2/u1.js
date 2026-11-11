// Spanish B2, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'Looking back and ahead',
  goal: 'Place events in time, guess about the present and the past, and tell a story in written Spanish. Learn the futuro perfecto and the future of guesses, time periphrases such as llevar + gerundio and acabar de, and time clauses with en cuanto, apenas and hasta que.',
  art: 'churro',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['futuro perfecto', 'conjecture', 'periphrases', 'time clauses', 'narrative'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Serán las tres, habrá perdido el tren',
      about: 'Use the future and the condicional to guess, and the futuro perfecto for what will be finished.',
      art: 'churro',
      spreads: [
        [
          { t: 'text', md: 'Spanish often uses the **futuro simple** to **guess about the present**: *Serán las tres* (It is probably three o’clock). *Estará cansado* (He is probably tired). To **guess about the past**, use the **futuro perfecto**, which is **haber** in the future + the **participio**: *Habrá perdido el tren* (He has probably missed the train). The same form says what **will be finished** by a future time: *Para el lunes habré terminado.*' },
          { t: 'table', caption: 'haber in the future', quiz: true, head: ['', 'haber'], rows: [
            ['yo', 'habré'],
            ['tú', 'habrás'],
            ['él / ella / usted', 'habrá'],
            ['nosotros / nosotras', 'habremos'],
            ['vosotros / vosotras', 'habréis'],
            ['ellos / ellas / ustedes', 'habrán'],
          ] },
          { t: 'tip', art: 'owl', md: 'The irregular participles stay the same: *hecho, dicho, visto, escrito, vuelto, puesto, abierto, roto*. Say *Habrá hecho mal* and *Habrán vuelto*. In speech, many people also guess with **seguramente**, **probablemente** or **debe de**: *Seguramente está cansado.* The future of guesses is common in Spain and is also used in Latin America.' },
        ],
        [
          { t: 'text', md: 'To guess about a **moment in the past**, use the **condicional**: *Serían las diez cuando llegó. Tendría unos veinte años.* Compare the four uses in the table.' },
          { t: 'table', caption: 'Four uses', explain: ['head', 'col1'], head: ['Example', 'Meaning'], rows: [
            ['Serán las tres.', 'a guess about now'],
            ['Habrá perdido el tren.', 'a guess about something that has happened'],
            ['Para el lunes habré terminado.', 'finished before a future time'],
            ['Serían las diez cuando llegó.', 'a guess about a moment in the past'],
          ] },
          { t: 'examples', items: [
            { s: 'Ana no contesta; **estará** dormida.', n: 'A guess about now.' },
            { s: 'Pedro no ha llegado; **habrá perdido** el tren.', n: 'A guess about something that has happened.' },
            { s: 'Para el lunes ya **habremos terminado** el informe.', n: 'Finished before a future time.' },
            { s: '**Serían** las diez cuando llegó.', n: 'A guess about a moment in the past.' },
            { s: 'Cuando llegues, yo ya **habré salido**.', n: 'Before another future event.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'Ya ___ las tres. (ser)', a: ['serán'], why: 'A guess about now: *serán las tres*.' },
            { q: 'Ana no contesta; ___ dormida. (estar)', a: ['estará'], why: 'A guess about now: *estará*.' },
            { q: 'Pedro no está: ___ perdido el tren. (haber)', a: ['habrá'], why: 'A guess about the past: *habrá perdido*.' },
            { q: 'Para el lunes ya ___ terminado el informe. (nosotros, haber)', a: ['habremos'], why: 'Finished before a future time: *habremos terminado*.' },
            { q: 'Cuando llegues, yo ya ___ salido. (yo, haber)', a: ['habré'], why: 'Before another future event: *habré salido*.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'What does the sentence say? Sort them.', groups: ['guess about now', 'guess about the past', 'finished by a future time'], explain: ['groups'], items: [
            { s: 'Serán las tres.', g: 0, why: 'A guess about now.' },
            { s: 'Estará en casa.', g: 0, why: 'A guess about now.' },
            { s: 'Habrá perdido el tren.', g: 1, why: 'A guess about something that has happened.' },
            { s: 'Se habrá dormido.', g: 1, why: 'A guess about something that has happened.' },
            { s: 'Para el lunes habré terminado.', g: 2, why: 'Finished before a future time.' },
            { s: 'Antes de las ocho habremos llegado.', g: 2, why: 'Finished before a future time.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'No ha llegado todavía; ___ perdido el vuelo.', o: ['habrá', 'ha', 'había'], why: 'A guess about the past: *habrá perdido*.' },
            { q: 'Cuando llegó, ___ las diez.', o: ['serían', 'serán', 'habrán sido'], why: 'A guess about a moment in the past: *serían*.' },
            { q: 'Para mañana ya ___ el trabajo.', o: ['habremos acabado', 'hemos acabado', 'acabamos'], why: 'Finished before a future time: *habremos acabado*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Say it as a guess.', items: [
            { q: 'Seguramente está cansado.', cue: 'Estará', a: ['Estará cansado.'], why: 'The futuro simple guesses about now.' },
            { q: 'Probablemente ha perdido el tren.', cue: 'Habrá', a: ['Habrá perdido el tren.'], why: 'The futuro perfecto guesses about the past.' },
            { q: 'Probablemente eran las diez.', cue: 'Serían', a: ['Serían las diez.'], why: 'The condicional guesses about a moment in the past.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Para el lunes [he] terminado el informe.', a: ['habré'], why: 'Finished before a future time: *habré terminado*.' },
            { s: 'Ana no contesta; [estaría] dormida ahora.', a: ['estará'], why: 'A guess about now: *estará*.' },
            { s: 'No sé dónde está; [habrá] en casa.', a: ['estará'], why: 'A guess about now needs *estará*, not *habrá*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Habrá perdido el tren de las ocho.', why: '*Habrá* + participio.' },
            { a: 'Para el lunes habremos terminado el informe.', why: 'Time first, then *habremos* + participio.' },
            { a: 'Serán las tres de la tarde.', why: '*Serán* + the time.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Llevo tres años estudiando',
      about: 'Use periphrases to say how long, just now, still, stop and again.',
      art: 'pizza',
      spreads: [
        [
          { t: 'text', md: 'Some **periphrases** (a verb + an infinitive, a gerundio or a participio) show how an action goes on in time. **Llevar + gerundio** says how long up to now: *Llevo tres años estudiando español.* **Llevar sin + infinitivo** says how long without: *Llevo dos días sin dormir.* **Acabar de + infinitivo** says *just*: *Acabo de llegar.* **Seguir + gerundio** says *still*: *Sigue lloviendo.* **Dejar de + infinitivo** says *stop*: *Dejó de fumar.* **Volver a + infinitivo** says *again*: *Ha vuelto a llamar.*' },
          { t: 'table', caption: 'Time periphrases', explain: ['head', 'col1'], head: ['Structure', 'Meaning', 'Example'], rows: [
            ['llevar + gerundio', 'for how long up to now', 'Llevo tres años estudiando español.'],
            ['llevar sin + infinitivo', 'for how long without', 'Llevo dos días sin dormir.'],
            ['acabar de + infinitivo', 'just now', 'Acabo de llegar.'],
            ['seguir + gerundio', 'still', 'Sigue lloviendo.'],
            ['dejar de + infinitivo', 'to stop', 'Dejó de fumar hace un año.'],
            ['volver a + infinitivo', 'again', 'Ha vuelto a llamar.'],
          ] },
          { t: 'tip', art: 'owl', md: 'After **dejar de**, **acabar de** and **volver a** the verb is an **infinitivo**, never a gerundio. **Llevar + participio** counts what is done: *Llevo leídas cien páginas.* In Argentina and some other countries, people use **recién** with the indefinido instead of *acabar de*: *Recién llegué.*' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Llevo** tres años **estudiando** español.', n: 'For how long up to now.' },
            { s: '**Llevamos** dos días **sin** dormir.', n: 'For how long without.' },
            { s: '**Acabo de** llegar a casa.', n: 'Just now.' },
            { s: '**Sigue** lloviendo.', n: 'Still.' },
            { s: 'Mi hermano **dejó de** fumar.', n: 'To stop.' },
            { s: 'Han **vuelto a** llamar esta mañana.', n: 'Again.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'What does it mean?', items: [
            { q: 'Acabo de comer.', o: ['I ate a moment ago.', 'I am going to eat.', 'I always eat.'], why: '*Acabar de* = just.' },
            { q: 'Sigue lloviendo.', o: ['It is still raining.', 'It stopped raining.', 'It will rain.'], why: '*Seguir* + gerundio = still.' },
            { q: 'Dejó de fumar.', o: ['He stopped smoking.', 'He started smoking.', 'He smokes.'], why: '*Dejar de* = to stop.' },
            { q: 'Ha vuelto a llamar.', o: ['He called again.', 'He did not call.', 'He called for the first time.'], why: '*Volver a* = again.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'Llevo tres años ___ español. (estudiar)', a: ['estudiando'], why: '*Llevar* + gerundio.' },
            { q: 'Acabo de ___ a casa. (llegar)', a: ['llegar'], why: '*Acabar de* + infinitivo.' },
            { q: 'Sigue ___ en Madrid. (llover)', a: ['lloviendo'], why: '*Seguir* + gerundio.' },
            { q: 'Dejó de ___ hace un año. (fumar)', a: ['fumar'], why: '*Dejar de* + infinitivo.' },
            { q: 'Ha ___ a llamar. (volver)', a: ['vuelto'], why: 'The participio of *volver* is *vuelto*.' },
            { q: 'Llevo dos días sin ___. (dormir)', a: ['dormir'], why: '*Llevar sin* + infinitivo.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the structure with its meaning.', pairs: [
            ['llevar + gerundio', 'for how long up to now'],
            ['acabar de + infinitivo', 'just now'],
            ['seguir + gerundio', 'still'],
            ['volver a + infinitivo', 'again'],
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it with the structure in brackets.', items: [
            { q: 'Empecé a estudiar español hace tres años y todavía estudio.', cue: 'Llevo', a: ['Llevo tres años estudiando español.'], why: '*Llevar* + gerundio says how long up to now.' },
            { q: 'Llegué hace un momento.', cue: 'Acabo', a: ['Acabo de llegar.'], why: '*Acabar de* + infinitivo says just now.' },
            { q: 'No he dormido en dos días.', cue: 'Llevo', a: ['Llevo dos días sin dormir.'], why: '*Llevar sin* + infinitivo.' },
            { q: 'Todavía llueve.', cue: 'Sigue', a: ['Sigue lloviendo.'], why: '*Seguir* + gerundio.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Llevo tres años [estudiar] español.', a: ['estudiando'], why: '*Llevar* + gerundio.' },
            { s: 'Acabo de [llegué].', a: ['llegar'], why: '*Acabar de* + infinitivo.' },
            { s: 'Dejó de [fumando].', a: ['fumar'], why: '*Dejar de* + infinitivo.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Llevo tres años estudiando español.', why: '*Llevo* + time + gerundio.' },
            { a: 'Acabo de llegar a casa.', why: '*Acabo de* + infinitivo.' },
            { a: 'Ha vuelto a llamar esta mañana.', why: '*Ha vuelto a* + infinitivo.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'En cuanto, apenas, hasta que',
      about: 'Choose the indicative or the subjunctive in time clauses, and tell a story in written Spanish.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'After **en cuanto, apenas, tan pronto como, hasta que** and **después de que**, use the **indicative** when you talk about the **past** or a **habit**, and the **present subjunctive** when you talk about the **future**: *En cuanto llegó, llamó* but *En cuanto llegue, llamará.* The same rule works for **cuando**: *Cuando llego, llamo. Cuando llegué, llamé. Cuando llegue, llamaré.*' },
          { t: 'table', caption: 'Past or future', explain: ['head'], head: ['Past (indicative)', 'Future (subjunctive)'], rows: [
            ['En cuanto llegó, llamó.', 'En cuanto llegue, llamará.'],
            ['Esperé hasta que vino el médico.', 'Esperaré hasta que venga el médico.'],
            ['Tan pronto como terminé, salí.', 'Tan pronto como termine, saldré.'],
            ['Después de que comimos, descansamos.', 'Después de que comamos, descansaremos.'],
          ] },
          { t: 'tip', art: 'owl', md: '**Apenas** has a special use in stories: **apenas + pluscuamperfecto + cuando + indefinido**: *Apenas había salido cuando sonó el teléfono* (He had hardly left when the phone rang). In speech, many people say **nada más** + infinitivo instead: *Nada más salir, sonó el teléfono.*' },
        ],
        [
          { t: 'text', md: 'A **written narrative** often uses the **indefinido** for the events and the **pluscuamperfecto** for what happened before: *Cuando llegó a la estación, el tren ya había salido.* The **imperfecto** gives the background: *Llovía y hacía frío.*' },
          { t: 'examples', items: [
            { s: '**En cuanto llegó**, llamó a su madre.', n: 'Past: indicative.' },
            { s: '**En cuanto llegue**, te llamaré.', n: 'Future: subjunctive.' },
            { s: 'Esperaré **hasta que venga** el médico.', n: 'Future: subjunctive.' },
            { s: '**Apenas** se **había sentado cuando** sonó el teléfono.', n: '*Apenas* + pluscuamperfecto + *cuando*.' },
            { s: 'Cuando **llegó** a la estación, el tren ya **había salido**.', n: 'Indefinido and pluscuamperfecto.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'En cuanto ___ a casa, te llamaré. (yo, llegar)', a: ['llegue'], why: 'Future: subjunctive.' },
            { q: 'En cuanto llegó, ___ a su madre. (llamar)', a: ['llamó'], why: 'Past: indicative.' },
            { q: 'Esperaré hasta que ___ el médico. (venir)', a: ['venga'], why: 'Future: subjunctive.' },
            { q: 'Esperé hasta que ___ el médico. (venir)', a: ['vino'], why: 'Past: indicative.' },
            { q: 'Apenas había salido cuando ___ el teléfono. (sonar)', a: ['sonó'], why: '*Apenas había salido cuando* + indefinido.' },
            { q: 'Cuando ___ a la estación, el tren ya había salido. (ella, llegar)', a: ['llegó'], why: 'Past: indicative.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Past or future? Sort the sentences.', groups: ['past (indicative)', 'future (subjunctive)'], explain: ['groups'], items: [
            { s: 'En cuanto llegó, llamó.', g: 0, why: 'It already happened.' },
            { s: 'En cuanto llegue, llamará.', g: 1, why: 'It has not happened yet.' },
            { s: 'Esperé hasta que vino.', g: 0, why: 'It already happened.' },
            { s: 'Esperaré hasta que venga.', g: 1, why: 'It has not happened yet.' },
            { s: 'Tan pronto como terminé, salí.', g: 0, why: 'It already happened.' },
            { s: 'Tan pronto como termine, saldré.', g: 1, why: 'It has not happened yet.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Cuando ___ a casa, siempre cocino.', o: ['llego', 'llegue', 'llegaré'], why: 'A habit: indicative.' },
            { q: 'Cuando ___ a casa mañana, cocinaré.', o: ['llegue', 'llego', 'llegué'], why: 'Future: subjunctive.' },
            { q: 'Tan pronto como ___ el trabajo, salimos.', o: ['terminemos', 'terminamos', 'terminábamos'], why: 'A future plan: subjunctive.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Join the two sentences with the word in brackets.', items: [
            { q: 'Llegaré a casa. Después te llamaré.', cue: 'En cuanto', a: ['En cuanto llegue a casa, te llamaré.'], why: 'Future: subjunctive after *en cuanto*.' },
            { q: 'Salió de casa. Inmediatamente empezó a llover.', cue: 'Apenas', a: ['Apenas había salido de casa cuando empezó a llover.'], why: '*Apenas* + pluscuamperfecto + *cuando* + indefinido.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'En cuanto [llega] a casa, te llamaré.', a: ['llegue'], why: 'Future: subjunctive.' },
            { s: 'Esperé hasta que [venga] el médico.', a: ['vino'], why: 'Past: indicative.' },
            { s: 'Apenas [salió] cuando sonó el teléfono.', a: ['había salido'], why: '*Apenas* + pluscuamperfecto.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'En cuanto llegue a casa, te llamaré.', why: '*En cuanto* + subjuntivo.' },
            { a: 'Esperaré hasta que venga el médico.', why: '*Hasta que* + subjuntivo.' },
            { a: 'Cuando llegó, el tren ya había salido.', why: 'Indefinido and pluscuamperfecto.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'El tren de las seis',
      about: 'Read a short narrative about a journey.',
      art: 'churro',
      spreads: [
        [
          { t: 'reading', title: 'El tren de las seis', md: 'Cuando Marta llegó a la estación, el tren ya había salido. Serían las seis y diez, y el siguiente no pasaba hasta la mañana. Llevaba tres horas viajando y acababa de recordar que había dejado el billete en el taxi. Seguía lloviendo.\n\nApenas se había sentado en un banco cuando un hombre se le acercó.\n\n«¿Ha perdido el tren? Habrá sido un día largo», le dijo.\n\nMarta le contó su historia. En cuanto terminó, el hombre sonrió: «No se preocupe. En cuanto abra la oficina, le darán otro billete. Hasta que llegue la mañana, tiene un sitio caliente en mi café.»\n\nMarta aceptó. Esa noche, mientras la lluvia seguía cayendo, dejó de preocuparse.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Marta llegó antes de que saliera el tren.', a: 'f', why: '*El tren ya había salido.*' },
            { q: 'Marta había dejado el billete en el taxi.', a: 't', why: '*Había dejado el billete en el taxi.*' },
            { q: 'Seguía lloviendo.', a: 't', why: '*Seguía lloviendo.*' },
            { q: 'El hombre tiene un café.', a: 't', why: '*Tiene un sitio caliente en mi café.*' },
            { q: 'La oficina abre por la tarde.', a: 'ng', why: 'The text does not say when it opens.' },
            { q: 'Marta rechazó la oferta.', a: 'f', why: '*Marta aceptó.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: '¿Qué hora era, más o menos?', o: ['Las seis y diez.', 'Las ocho.', 'Medianoche.'], why: '*Serían las seis y diez.*' },
            { q: '¿Cuándo le darán otro billete?', o: ['En cuanto abra la oficina.', 'Esta noche.', 'Mañana por la tarde.'], why: '*En cuanto abra la oficina, le darán otro billete.*' },
            { q: '¿Qué hizo Marta?', o: ['Aceptó un sitio en el café.', 'Volvió a casa.', 'Tomó otro tren.'], why: '*Marta aceptó.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs that guess about the past.', items: [
            { s: '[Serían] las seis y diez cuando llegó.', why: '*Serían*: a guess about a moment in the past.' },
            { s: '«¿Ha perdido el tren? [Habrá sido] un día largo.»', why: '*Habrá sido*: a guess about something that has happened.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'Apenas se había sentado cuando un hombre se ___. (acercar)', a: ['acercó'], why: '*Apenas había … cuando* + indefinido.' },
            { q: 'En cuanto ___ la oficina, le darán otro billete. (abrir)', a: ['abra'], why: 'Future: subjunctive.' },
            { q: 'Llevaba tres horas ___. (viajar)', a: ['viajando'], why: '*Llevar* + gerundio.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'En cuanto abra la oficina, le darán otro billete.', why: '*En cuanto* + subjuntivo.' },
            { a: 'El tren ya había salido cuando llegó.', why: 'Pluscuamperfecto, then *cuando* + indefinido.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Ana no contesta; ___ dormida.', o: ['estará', 'está', 'estaría'], why: 'A guess about now: *estará*.' },
      { q: 'Para el lunes ___ el informe.', o: ['habré terminado', 'he terminado', 'terminaba'], why: 'Finished before a future time: *habré terminado*.' },
      { q: 'Acabo de ___.', o: ['llegar', 'llegado', 'llegando'], why: '*Acabar de* + infinitivo.' },
      { q: 'En cuanto ___ a casa, te llamaré.', o: ['llegue', 'llego', 'llegué'], why: 'Future: subjunctive.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
      { q: 'Llevo tres años ___ español. (estudiar)', a: ['estudiando'], why: '*Llevar* + gerundio.' },
      { q: 'Pedro no está: ___ perdido el tren. (haber)', a: ['habrá'], why: 'A guess about the past: *habrá perdido*.' },
      { q: 'Dejó de ___ hace un año. (fumar)', a: ['fumar'], why: '*Dejar de* + infinitivo.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the sentence with its meaning.', pairs: [
      ['Acabo de comer.', 'I ate a moment ago.'],
      ['Sigue lloviendo.', 'It is still raining.'],
      ['Ha vuelto a llamar.', 'He called again.'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Say it with the word in brackets.', items: [
      { q: 'Probablemente ha perdido el tren.', cue: 'Habrá', a: ['Habrá perdido el tren.'], why: 'The futuro perfecto guesses about the past.' },
      { q: 'Llegué hace un momento.', cue: 'Acabo', a: ['Acabo de llegar.'], why: '*Acabar de* + infinitivo.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Para el lunes [he] terminado el informe.', a: ['habré'], why: 'Finished before a future time: *habré terminado*.' },
      { s: 'Llevo dos días [no] dormir.', a: ['sin'], why: '*Llevar sin* + infinitivo.' },
    ] },
  ],
};
