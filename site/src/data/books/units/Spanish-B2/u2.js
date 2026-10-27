// Spanish B2, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Imagining',
  goal: 'Talk about unreal and unlikely situations and make polite requests with the imperfect subjunctive. Learn its forms, si + imperfecto de subjuntivo + condicional, como si, ojalá and quisiera, and the past with wishes and doubts.',
  art: 'pizza',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['imperfecto de subjuntivo', 'si clauses', 'condicional', 'ojalá', 'polite requests'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Tuviera, fuera, hiciera',
      about: 'Learn the forms of the imperfecto de subjuntivo.',
      art: 'pizza',
      spreads: [
        [
          { t: 'text', md: 'The **imperfecto de subjuntivo** is built from the **indefinido**. Take **ellos** in the indefinido, drop **-ron** and add the endings **-ra, -ras, -ra, -ramos, -rais, -ran**: *hablaron → hablara*, *comieron → comiera*, *vivieron → viviera*. The **nosotros** form takes an accent on the vowel before **-ramos**: *habláramos, comiéramos, viviéramos*. A second set of endings, **-se**, means the same: *hablase, comiese*.' },
          { t: 'table', caption: 'hablar, comer, vivir', explain: ['head'], quiz: true, head: ['', 'hablar', 'comer', 'vivir'], rows: [
            ['yo', 'hablara', 'comiera', 'viviera'],
            ['tú', 'hablaras', 'comieras', 'vivieras'],
            ['él / ella / usted', 'hablara', 'comiera', 'viviera'],
            ['nosotros / nosotras', 'habláramos', 'comiéramos', 'viviéramos'],
            ['vosotros / vosotras', 'hablarais', 'comierais', 'vivierais'],
            ['ellos / ellas / ustedes', 'hablaran', 'comieran', 'vivieran'],
          ] },
          { t: 'tip', art: 'owl', md: 'The **-ra** forms are the usual ones in speech and in writing, in Spain and in Latin America. The **-se** forms are found mostly in writing and in Spain. Choose one and use it every time.' },
        ],
        [
          { t: 'text', md: 'Irregular verbs follow the **indefinido**: if **ellos** has an irregular stem in the indefinido, the same stem is used in the imperfecto de subjuntivo. **Ser** and **ir** both give **fuera**.' },
          { t: 'table', caption: 'Irregular verbs', explain: ['head'], quiz: true, head: ['Infinitive', 'ellos (indefinido)', 'yo (imperfecto de subjuntivo)'], rows: [
            ['ser / ir', 'fueron', 'fuera'],
            ['tener', 'tuvieron', 'tuviera'],
            ['hacer', 'hicieron', 'hiciera'],
            ['poder', 'pudieron', 'pudiera'],
            ['decir', 'dijeron', 'dijera'],
            ['venir', 'vinieron', 'viniera'],
            ['querer', 'quisieron', 'quisiera'],
            ['dar', 'dieron', 'diera'],
          ] },
          { t: 'examples', items: [
            { s: 'Quería que **vinieras** conmigo.', n: '*venir*: *viniera*.' },
            { s: 'Me pidió que le **dijera** la verdad.', n: '*decir*: *dijera*.' },
            { s: 'No creía que **fuera** posible.', n: '*ser*: *fuera*.' },
            { s: 'Esperábamos que **llegaran** a tiempo.', n: 'Regular: *llegaran*.' },
            { s: 'Si **tuviéramos** más tiempo, iríamos.', n: '*nosotros* takes an accent: *tuviéramos*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the forms of tener.', verb: 'tener', tense: 'imperfecto de subjuntivo', rows: [
            ['yo', 'tuviera'],
            ['tú', 'tuvieras'],
            ['él / ella / usted', 'tuviera'],
            ['nosotros', 'tuviéramos'],
            ['vosotros', 'tuvierais'],
            ['ellos / ellas / ustedes', 'tuvieran'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the verb in the imperfecto de subjuntivo.', items: [
            { q: 'Quería que tú ___ conmigo. (venir)', a: ['vinieras', 'vinieses'], why: '*Venir*: *vinieras*.' },
            { q: 'No creía que ___ posible. (ser)', a: ['fuera', 'fuese'], why: '*Ser*: *fuera*.' },
            { q: 'Me pidió que le ___ la verdad. (yo, decir)', a: ['dijera', 'dijese'], why: '*Decir*: *dijera*.' },
            { q: 'Esperábamos que ellos ___ a tiempo. (llegar)', a: ['llegaran', 'llegasen'], why: 'Regular: *llegaran*.' },
            { q: 'Me alegraba de que nosotros ___ tiempo. (tener)', a: ['tuviéramos', 'tuviésemos'], why: '*Tener*: *tuviéramos*, with an accent.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the infinitive with the form for yo.', pairs: [
            ['tener', 'tuviera'],
            ['ser / ir', 'fuera'],
            ['hacer', 'hiciera'],
            ['poder', 'pudiera'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Quería que tú ___ conmigo.', o: ['vinieras', 'vengas', 'vienes'], why: 'After a past verb: *vinieras*.' },
            { q: 'Me pidió que ___ la verdad.', o: ['dijera', 'dije', 'diga'], why: 'After a past verb: *dijera*.' },
            { q: 'No creía que ___ posible.', o: ['fuera', 'sea', 'es'], why: 'After a past verb: *fuera*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Put the sentence in the past.', items: [
            { q: 'Quiero que vengas.', cue: 'Quería', a: ['Quería que vinieras.'], why: 'After a past verb: *vinieras*.' },
            { q: 'Espero que llegue pronto.', cue: 'Esperaba', a: ['Esperaba que llegara pronto.'], why: 'After a past verb: *llegara*.' },
            { q: 'Me piden que haga el trabajo.', cue: 'Me pidieron', a: ['Me pidieron que hiciera el trabajo.'], why: '*Hacer*: *hiciera*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Quería que [vengas] conmigo.', a: ['vinieras', 'vinieses'], why: 'After a past verb: *vinieras*.' },
            { s: 'No creía que [era] posible.', a: ['fuera', 'fuese'], why: '*No creer que* takes the subjunctive: *fuera*.' },
            { s: 'Me pidió que [hacía] el trabajo.', a: ['hiciera', 'hiciese'], why: 'After *pedir que*: *hiciera*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Quería que vinieras conmigo a la fiesta.', why: '*Quería que* + imperfecto de subjuntivo.' },
            { a: 'Me pidió que le dijera la verdad.', why: '*Me pidió que* + imperfecto de subjuntivo.' },
            { a: 'No creía que fuera posible.', why: '*No creía que* + imperfecto de subjuntivo.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Si tuviera tiempo, viajaría',
      about: 'Use si + imperfecto de subjuntivo + condicional for unreal and unlikely situations.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Use **si + imperfecto de subjuntivo + condicional** for something **unreal now** or **unlikely in the future**: *Si tuviera tiempo, viajaría* (I do not have time, so I do not travel). *Si me tocara la lotería, dejaría de trabajar.* This is also the way to give advice: *Si yo fuera tú, aceptaría el trabajo.* Never use the **condicional** or the **present subjunctive** after **si**.' },
          { t: 'table', caption: 'Kinds of si', explain: ['head', 'col1'], head: ['Kind', 'Structure', 'Example'], rows: [
            ['real, now or future', 'si + presente → presente, futuro or imperativo', 'Si llueve, me quedo en casa.'],
            ['unreal or unlikely', 'si + imperfecto de subjuntivo → condicional', 'Si tuviera tiempo, viajaría.'],
            ['habit in the past', 'si + imperfecto → imperfecto', 'Si llovía, me quedaba en casa.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Say **Si tuviera**, not *Si tendría*, and **Si fuera**, not *Si sería*. The other half of the sentence takes the **condicional**: *Si pudiera, lo haría.*' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Si **tuviera** tiempo, **viajaría** más.', n: 'I do not have time.' },
            { s: 'Si me **tocara** la lotería, **dejaría** de trabajar.', n: 'Unlikely, but possible.' },
            { s: 'Si **fuera** rico, **compraría** un barco.', n: 'I am not rich.' },
            { s: 'Si yo **fuera** tú, **aceptaría** el trabajo.', n: 'Advice.' },
            { s: 'Si **llueve**, me quedo en casa.', n: 'A real situation: *si + presente*.' },
          ] },
          { t: 'dialogue', title: 'Soñar es gratis', lines: [
            { who: 'Ana', s: '¿Qué harías si te tocara la lotería?' },
            { who: 'Pedro', s: 'Dejaría de trabajar y viajaría por todo el mundo. ¿Y tú?' },
            { who: 'Ana', s: 'Si tuviera tanto dinero, compraría una casa junto al mar.' },
            { who: 'Pedro', s: 'Si yo fuera tú, también la compraría. Pero, ¿has jugado alguna vez?' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'Si ___ tiempo, viajaría. (yo, tener)', a: ['tuviera', 'tuviese'], why: '*Si* + imperfecto de subjuntivo.' },
            { q: 'Si ___ rico, compraría un barco. (yo, ser)', a: ['fuera', 'fuese'], why: '*Ser*: *fuera*.' },
            { q: 'Si ganáramos más, ___ más. (nosotros, ahorrar)', a: ['ahorraríamos'], why: 'The condicional: *ahorraríamos*.' },
            { q: 'Si me ___ la lotería, dejaría de trabajar. (tocar)', a: ['tocara', 'tocase'], why: '*Si* + imperfecto de subjuntivo.' },
            { q: 'Yo ___ más si tuviera tiempo. (viajar)', a: ['viajaría'], why: 'The condicional: *viajaría*.' },
            { q: 'Si yo fuera tú, ___ el trabajo. (aceptar)', a: ['aceptaría'], why: 'The condicional: *aceptaría*.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Real or unreal? Sort the sentences.', groups: ['real (si + presente)', 'unreal (si + imperfecto de subjuntivo)'], explain: ['groups'], items: [
            { s: 'Si llueve, me quedo en casa.', g: 0, why: 'A real situation.' },
            { s: 'Si tuviera tiempo, viajaría.', g: 1, why: 'I do not have time.' },
            { s: 'Si estudias, aprobarás.', g: 0, why: 'A real possibility.' },
            { s: 'Si fuera rico, compraría un barco.', g: 1, why: 'I am not rich.' },
            { s: 'Si puedo, voy.', g: 0, why: 'A real situation.' },
            { s: 'Si pudiera, iría.', g: 1, why: 'I cannot.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Si ___ tiempo, viajaría.', o: ['tuviera', 'tengo', 'tendría'], why: 'Unreal: *si* + imperfecto de subjuntivo.' },
            { q: 'Si estudias, ___.', o: ['aprobarás', 'aprobarías', 'aprobaras'], why: 'Real: *si* + presente → futuro.' },
            { q: 'Si yo ___ tú, aceptaría el trabajo.', o: ['fuera', 'era', 'sea'], why: 'Advice: *si yo fuera tú*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Join the two sentences with si.', items: [
            { q: 'No tengo tiempo, por eso no viajo.', cue: 'Si', a: ['Si tuviera tiempo, viajaría.'], why: 'Unreal: *si* + imperfecto de subjuntivo + condicional.' },
            { q: 'No soy rico, por eso no compro una casa.', cue: 'Si', a: ['Si fuera rico, compraría una casa.'], why: 'Unreal: *si fuera* + condicional.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Si yo [tenía] tiempo, viajaría.', a: ['tuviera', 'tuviese'], why: 'Unreal: *si* + imperfecto de subjuntivo.' },
            { s: 'Si tú [pudiste], me ayudarías.', a: ['pudieras', 'pudieses'], why: 'Unreal: *si* + imperfecto de subjuntivo.' },
            { s: 'Si [tendría] tiempo, viajaría.', a: ['tuviera', 'tuviese'], why: 'Never use the condicional after *si*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Si tuviera tiempo, viajaría más.', why: '*Si* + imperfecto de subjuntivo, condicional.' },
            { a: 'Si yo fuera tú, aceptaría el trabajo.', why: 'Advice: *si yo fuera tú*.' },
            { a: 'Si me tocara la lotería, dejaría de trabajar.', why: '*Si* + imperfecto de subjuntivo, condicional.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Ojalá, como si, quisiera',
      about: 'Use the imperfecto de subjuntivo with ojalá, como si and polite requests, and after past verbs of wish and doubt.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: '**Ojalá** always takes the **subjunctive**. **Ojalá + presente de subjuntivo** is a wish that is possible: *Ojalá llueva.* **Ojalá + imperfecto de subjuntivo** is a wish that is unlikely or impossible now: *Ojalá tuviera más tiempo.* **Como si** also takes the imperfecto de subjuntivo: *Habla como si fuera el jefe.* For a **polite request**, use **quisiera** (from querer): *Quisiera una mesa para dos.*' },
          { t: 'table', caption: 'Wishes and politeness', explain: ['head', 'col1'], head: ['Structure', 'Meaning', 'Example'], rows: [
            ['ojalá + presente de subjuntivo', 'a possible wish', 'Ojalá llueva.'],
            ['ojalá + imperfecto de subjuntivo', 'an unlikely or impossible wish', 'Ojalá tuviera más tiempo.'],
            ['como si + imperfecto de subjuntivo', 'as if', 'Habla como si fuera el jefe.'],
            ['quisiera + infinitivo', 'a polite request', 'Quisiera una mesa para dos.'],
          ] },
          { t: 'tip', art: 'owl', md: '**Ojalá** came from Arabic and means *may God wish it*. It never takes the indicative. After a **past verb** (quería, esperaba, pedí, no creía), use the **imperfecto de subjuntivo**: *Quería que vinieras. No creía que fuera verdad.* **Quisiera** is polite and is used everywhere. **Quería** is also a polite way to ask: *Quería pedir una mesa.*' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Ojalá llueva** mañana.', n: 'A possible wish.' },
            { s: '**Ojalá tuviera** más tiempo.', n: 'I do not have it.' },
            { s: 'Habla **como si fuera** el jefe.', n: 'He is not the boss.' },
            { s: '**Quisiera** una mesa para dos.', n: 'A polite request.' },
            { s: 'No **creía** que **fuera** verdad.', n: 'A past doubt.' },
          ] },
          { t: 'dialogue', title: 'En el restaurante', lines: [
            { who: 'Camarera', s: 'Buenas noches. ¿En qué puedo ayudarles?' },
            { who: 'Diego', s: 'Quisiera una mesa para dos, por favor.' },
            { who: 'Camarera', s: 'Lo siento, ahora no hay ninguna. Me gustaría que esperaran diez minutos.' },
            { who: 'Diego', s: 'Ojalá no tardaran mucho. Tenemos hambre.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'Habla como si ___ el jefe. (ser)', a: ['fuera', 'fuese'], why: '*Como si* + imperfecto de subjuntivo.' },
            { q: 'Ojalá ___ más tiempo. (yo, tener)', a: ['tuviera', 'tuviese'], why: 'An unlikely wish: *ojalá* + imperfecto de subjuntivo.' },
            { q: 'Quisiera ___ una mesa para dos. (reservar)', a: ['reservar'], why: '*Quisiera* + infinitivo.' },
            { q: 'Quería que ___ a la fiesta. (tú, venir)', a: ['vinieras', 'vinieses'], why: 'After a past verb: *vinieras*.' },
            { q: 'No creía que ___ verdad. (ser)', a: ['fuera', 'fuese'], why: 'After *no creía que*: *fuera*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the sentence with its meaning.', pairs: [
            ['Ojalá llueva.', 'a possible wish'],
            ['Ojalá tuviera más tiempo.', 'an unlikely wish'],
            ['Habla como si fuera el jefe.', 'he is not the boss'],
            ['Quisiera una mesa.', 'a polite request'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Ojalá ___ mañana. Necesitamos agua.', o: ['llueva', 'llueve', 'lloviera'], why: 'A possible wish: *ojalá* + presente de subjuntivo.' },
            { q: 'Ojalá ___ más dinero.', o: ['tuviera', 'tengo', 'tendré'], why: 'An unlikely wish: *ojalá* + imperfecto de subjuntivo.' },
            { q: 'Se comporta como si ___ el dueño.', o: ['fuera', 'es', 'sea'], why: '*Como si* + imperfecto de subjuntivo.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Make it a wish with ojalá.', items: [
            { q: 'No tengo más tiempo.', cue: 'Ojalá', a: ['Ojalá tuviera más tiempo.', 'Ojalá tuviese más tiempo.'], why: 'An unlikely wish: *ojalá* + imperfecto de subjuntivo.' },
            { q: 'No vive cerca de aquí.', cue: 'Ojalá', a: ['Ojalá viviera cerca de aquí.', 'Ojalá viviese cerca de aquí.'], why: 'An unlikely wish: *ojalá* + imperfecto de subjuntivo.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Habla como si [es] el jefe.', a: ['fuera', 'fuese'], why: '*Como si* + imperfecto de subjuntivo.' },
            { s: 'Ojalá [tengo] más tiempo.', a: ['tuviera', 'tuviese'], why: '*Ojalá* takes the subjunctive.' },
            { s: 'Quería que [vengas] a la fiesta.', a: ['vinieras', 'vinieses'], why: 'After a past verb: *vinieras*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Ojalá tuviera más tiempo libre.', why: '*Ojalá* + imperfecto de subjuntivo.' },
            { a: 'Habla como si fuera el jefe.', why: '*Como si* + imperfecto de subjuntivo.' },
            { a: 'Quisiera una mesa para dos.', why: '*Quisiera* + noun.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Si pudiera elegir',
      about: 'Read an interview about a dream job.',
      art: 'pizza',
      spreads: [
        [
          { t: 'reading', title: 'Entrevista: si pudiera elegir', md: 'Preguntamos a Elena, de 34 años, qué haría si pudiera cambiar de trabajo.\n\n«Si pudiera elegir, sería pastelera. Siempre soñé con tener una pequeña tienda en mi barrio. Si tuviera el dinero, la abriría mañana mismo.»\n\n—¿Y qué le impide hacerlo?\n\n«Mi jefe me pidió que me quedara un año más, y yo le prometí que lo haría. Además, ojalá tuviera más tiempo para practicar, pero trabajo hasta las siete. A veces hablo de la tienda como si ya existiera. Mi marido quisiera que dejara el trabajo ya, pero prefiero esperar.»\n\n—Si usted fuera nuestra clienta, ¿qué nos pediría?\n\n«Que hiciéramos las cosas con cariño. Eso lo cambia todo.»' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Elena tiene 34 años.', a: 't', why: '*Elena, de 34 años.*' },
            { q: 'Elena es ahora pastelera.', a: 'f', why: 'She would like to be a pastry chef: *si pudiera elegir, sería pastelera*.' },
            { q: 'Elena abriría la tienda si tuviera el dinero.', a: 't', why: '*Si tuviera el dinero, la abriría.*' },
            { q: 'Su jefe le pidió que se quedara un año más.', a: 't', why: '*Mi jefe me pidió que me quedara un año más.*' },
            { q: 'Su marido quiere que espere.', a: 'f', why: '*Quisiera que dejara el trabajo ya.*' },
            { q: 'La tienda estaría en el centro.', a: 'ng', why: 'She says *en mi barrio*, not *en el centro*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: '¿Qué sería Elena si pudiera elegir?', o: ['Pastelera.', 'Guía.', 'Profesora.'], why: '*Sería pastelera.*' },
            { q: '¿Hasta qué hora trabaja?', o: ['Hasta las siete.', 'Hasta las cinco.', 'Hasta las nueve.'], why: '*Trabajo hasta las siete.*' },
            { q: '¿Qué quisiera su marido?', o: ['Que dejara el trabajo ya.', 'Que abriera la tienda mañana.', 'Que esperara un año.'], why: '*Quisiera que dejara el trabajo ya.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs in the imperfecto de subjuntivo.', items: [
            { s: 'Si [pudiera] elegir, sería pastelera. Si [tuviera] el dinero, la abriría.', why: '*Pudiera* and *tuviera* follow *si*.' },
            { s: 'Mi jefe me pidió que me [quedara] un año más, y hablo de la tienda como si ya [existiera].', why: '*Quedara* follows *pedir que* in the past; *existiera* follows *como si*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'Si ___ el dinero, abriría la tienda mañana. (ella, tener)', a: ['tuviera', 'tuviese'], why: '*Si* + imperfecto de subjuntivo.' },
            { q: 'Mi jefe me pidió que me ___ un año más. (quedar)', a: ['quedara', 'quedase'], why: 'After *pedir que* in the past: *quedara*.' },
            { q: 'Hablo de la tienda como si ya ___. (existir)', a: ['existiera', 'existiese'], why: '*Como si* + imperfecto de subjuntivo.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Si pudiera elegir, sería pastelera.', why: '*Si* + imperfecto de subjuntivo, condicional.' },
            { a: 'Mi marido quisiera que dejara el trabajo.', why: '*Quisiera que* + imperfecto de subjuntivo.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Si ___ tiempo, viajaría.', o: ['tuviera', 'tengo', 'tendría'], why: 'Unreal: *si* + imperfecto de subjuntivo.' },
      { q: 'Quería que tú ___.', o: ['vinieras', 'vengas', 'vienes'], why: 'After a past verb: *vinieras*.' },
      { q: 'Habla como si ___ el jefe.', o: ['fuera', 'es', 'será'], why: '*Como si* + imperfecto de subjuntivo.' },
      { q: 'Ojalá ___ más tiempo.', o: ['tuviera', 'tengo', 'tendré'], why: 'An unlikely wish: *ojalá* + imperfecto de subjuntivo.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
      { q: 'Si yo ___ rico, compraría una casa. (ser)', a: ['fuera', 'fuese'], why: '*Ser*: *fuera*.' },
      { q: 'Me pidió que le ___ la verdad. (yo, decir)', a: ['dijera', 'dijese'], why: '*Decir*: *dijera*.' },
      { q: 'Si me ___ la lotería, dejaría de trabajar. (tocar)', a: ['tocara', 'tocase'], why: '*Si* + imperfecto de subjuntivo.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the infinitive with the form for yo.', pairs: [
      ['tener', 'tuviera'],
      ['hacer', 'hiciera'],
      ['poder', 'pudiera'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Say it with the word in brackets.', items: [
      { q: 'No tengo tiempo, por eso no viajo.', cue: 'Si', a: ['Si tuviera tiempo, viajaría.'], why: 'Unreal: *si* + imperfecto de subjuntivo + condicional.' },
      { q: 'Quiero que vengas.', cue: 'Quería', a: ['Quería que vinieras.'], why: 'After a past verb: *vinieras*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Si yo [tenía] tiempo, viajaría.', a: ['tuviera', 'tuviese'], why: 'Unreal: *si* + imperfecto de subjuntivo.' },
      { s: 'Si tú [pudiste], me ayudarías.', a: ['pudieras', 'pudieses'], why: 'Unreal: *si* + imperfecto de subjuntivo.' },
    ] },
  ],
};
