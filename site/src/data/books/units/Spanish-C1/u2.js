// Spanish C1, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Pronouns and the subjunctive in depth',
  goal: 'Control the pronouns that cause most errors and the finer choices of mood. Learn double pronouns and their position, what the RAE accepts as leísmo, the subjunctive after no es que and el hecho de que, and the future subjunctive in fixed phrases.',
  art: 'owl',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['pronouns', 'subjunctive', 'leísmo', 'future subjunctive'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Se lo, te lo, dándoselo',
      about: 'Place double pronouns correctly and avoid leísmo, laísmo and loísmo.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'When two object pronouns appear together, the **indirect** one comes first and the **direct** one second: **me lo, te la, nos los, os las**. **Le** and **les** become **se** before **lo, la, los, las**: **Se lo di** (*I gave it to him*), never *le lo di*. Pronouns go **before** a conjugated verb: **Te lo doy.** They are **attached** to the affirmative **imperative**, the **infinitive** and the **gerund**, and an accent is added to keep the stress: **Dáselo.** **Quiero dártelo.** **Dándoselo, …** With a negative imperative they go before: **No se lo des.** About **leísmo**: **le** for a **man** as direct object is accepted (**Le vi ayer**); **la** and **lo** for **indirect** objects are **not** (**laísmo**, **loísmo**): say **Le dije la verdad**, not *La dije la verdad*.' },
          { t: 'table', caption: 'Double pronouns', explain: ['head', 'col1'], head: ['Situation', 'Example'], rows: [
            ['indirect + direct', 'Te lo doy. / Nos la envían.'],
            ['le / les + lo → se lo', 'Se lo di ayer.'],
            ['affirmative imperative', 'Dáselo. / Cuéntamelo.'],
            ['infinitive', 'Quiero dártelo. / Voy a dárselo.'],
            ['gerund', 'Dándoselo, se marchó.'],
            ['negative imperative', 'No se lo des. / No me lo cuentes.'],
            ['leísmo accepted', 'Le vi ayer. (a man)'],
          ] },
          { t: 'tip', art: 'owl', md: 'With a conjugated verb and an infinitive, the pronouns can go **before the first verb or after the infinitive**: **Te lo voy a dar** or **Voy a dártelo**. With **se**, the accent shows up again: **Voy a dárselo**. **Leísmo** is common in central and northern **Spain**; in **Latin America** people say **Lo vi ayer** for a man too. **Laísmo** (*La dije que sí*) and **loísmo** (*Lo dije la verdad*) are considered **errors** by the RAE.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Se lo** di ayer.', n: '*Le* + *lo* becomes *se lo*.' },
            { s: '**Dáselo** ahora mismo.', n: 'The imperative: attached, with an accent.' },
            { s: 'Quiero **dártelo** hoy.', n: 'The infinitive: attached.' },
            { s: '**No se lo des.**', n: 'The negative imperative: before the verb.' },
            { s: '**Le vi** ayer en la calle.', n: 'Leísmo accepted: a man.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Before or after the verb? Sort the sentences.', groups: ['before the verb', 'after the verb'], explain: ['groups'], items: [
            { s: 'Te lo doy mañana.', g: 0, why: 'A conjugated verb.' },
            { s: 'No se lo des.', g: 0, why: 'The negative imperative.' },
            { s: 'Nos la envían hoy.', g: 0, why: 'A conjugated verb.' },
            { s: 'Dáselo ahora.', g: 1, why: 'The affirmative imperative.' },
            { s: 'Quiero dártelo.', g: 1, why: 'The infinitive.' },
            { s: 'Dándoselo, se marchó.', g: 1, why: 'The gerund.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the pronouns.', items: [
            { q: 'Le di el libro. → ___ di ayer. (it to him)', a: ['Se lo'], why: '*Le* + *lo* = *se lo*.' },
            { q: 'Te doy la llave. → ___ doy. (it to you)', a: ['Te la'], why: 'Indirect first, then direct.' },
            { q: 'Dame el libro. → Dá___. (it to me)', a: ['melo'], why: 'Attached to the imperative.' },
            { q: 'No se lo ___. (dar, imperativo negativo, tú)', a: ['des'], why: 'The negative imperative uses the subjunctive.' },
            { q: 'Quiero dár___. (it to you)', a: ['telo'], why: 'Attached to the infinitive, with an accent.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Le di el libro. → ___ di ayer.', o: ['Se lo', 'Le lo', 'Lo le'], why: '*Le* + *lo* = *se lo*.' },
            { q: 'Cuéntame la historia. → ___.', o: ['Cuéntamela', 'Cuéntalame', 'Me la cuenta'], why: 'Attached to the imperative.' },
            { q: 'A María ___ dije la verdad.', o: ['le', 'la', 'lo'], why: 'An indirect object: *le*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Replace the nouns with pronouns.', items: [
            { q: 'Doy el libro a Ana.', cue: 'Se', a: ['Se lo doy.'], why: '*Le* + *lo* = *se lo*.' },
            { q: 'Da el libro a tu hermano.', cue: 'Dá', a: ['Dáselo.'], why: 'Attached to the imperative.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right form.', items: [
            { s: '[Le lo] di ayer.', a: ['Se lo'], why: '*Le* becomes *se* before *lo*.' },
            { s: '[La] dije la verdad a María.', a: ['Le'], why: 'An indirect object: *le*. *La* is laísmo.' },
            { s: '[Damelo], por favor.', a: ['Dámelo'], why: 'The accent keeps the stress.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Se lo di ayer.', why: '*Se lo*.' },
            { a: 'No se lo des.', why: 'The negative imperative.' },
            { a: 'Quiero dártelo hoy.', why: 'Attached to the infinitive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'No es que, el hecho de que',
      about: 'Choose the mood after fixed expressions of fact and opinion.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'Some expressions look alike but take **different moods**. **No es que** + **subjunctive** denies an explanation: **No es que no quiera ir; es que no puedo.** **El hecho de que** + **subjunctive** treats a fact as a topic: **El hecho de que llegue tarde no es excusa.** **Lo que pasa es que** + **indicative** gives a real explanation: **Lo que pasa es que no tengo tiempo.** **Es una pena que** + **subjunctive** shows feeling: **Es una pena que no vengas.** **No porque** + **subjunctive** denies a cause: **No lo hago porque me lo pidan.** **Es verdad que** and **está claro que** + **indicative**: **Está claro que tiene razón.** But **no es verdad que** + **subjunctive**: **No es verdad que lo sepa.**' },
          { t: 'table', caption: 'Mood in fixed expressions', explain: ['head', 'col1'], head: ['Expression', 'Mood', 'Example'], rows: [
            ['no es que', 'subjunctive', 'No es que no quiera ir; es que no puedo.'],
            ['el hecho de que', 'subjunctive', 'El hecho de que llegue tarde no es excusa.'],
            ['lo que pasa es que', 'indicative', 'Lo que pasa es que no tengo tiempo.'],
            ['es una pena que', 'subjunctive', 'Es una pena que no vengas.'],
            ['no porque', 'subjunctive', 'No lo hago porque me lo pidan.'],
            ['es verdad que / está claro que', 'indicative', 'Está claro que tiene razón.'],
            ['no es verdad que', 'subjunctive', 'No es verdad que lo sepa.'],
          ] },
          { t: 'tip', art: 'owl', md: 'The choice follows a simple idea: **the indicative** asserts, **the subjunctive** presents something as a **topic, a feeling or a denial**. **No es que** is typically followed by **es que** with the real reason: **No es que me guste, es que lo necesito.** After **el hecho de que**, the **indicative** also exists when the fact is new information, but the **subjunctive** is the safe choice at C1. The same rules apply in **Latin America**.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**No es que** no **quiera** ir; es que no puedo.', n: 'Denying an explanation.' },
            { s: '**El hecho de que** llegue tarde no es una excusa.', n: 'A fact as a topic.' },
            { s: '**Lo que pasa es que** no **tengo** tiempo.', n: 'A real explanation: indicative.' },
            { s: '**Es una pena que** no **vengas**.', n: 'A feeling.' },
            { s: '**Está claro que** **tiene** razón.', n: 'Certainty: indicative.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Subjunctive or indicative? Sort the expressions.', groups: ['subjunctive', 'indicative'], explain: ['groups'], items: [
            { s: 'No es que…', g: 0, why: 'Denying an explanation.' },
            { s: 'El hecho de que…', g: 0, why: 'A fact as a topic.' },
            { s: 'Es una pena que…', g: 0, why: 'A feeling.' },
            { s: 'Lo que pasa es que…', g: 1, why: 'A real explanation.' },
            { s: 'Está claro que…', g: 1, why: 'Certainty.' },
            { s: 'Es verdad que…', g: 1, why: 'Certainty.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'No es que no ___ ir; es que no puedo. (querer, yo)', a: ['quiera'], why: '*No es que* + subjunctive.' },
            { q: 'El hecho de que ___ tarde no es una excusa. (llegar, él)', a: ['llegue'], why: '*El hecho de que* + subjunctive.' },
            { q: 'Lo que pasa es que no ___ tiempo. (tener, yo)', a: ['tengo'], why: '*Lo que pasa es que* + indicative.' },
            { q: 'Es una pena que no ___. (venir, tú)', a: ['vengas'], why: '*Es una pena que* + subjunctive.' },
            { q: 'No es verdad que lo ___. (saber, él)', a: ['sepa'], why: '*No es verdad que* + subjunctive.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Está claro que ___ razón.', o: ['tiene', 'tenga', 'tuviera'], why: '*Está claro que* + indicative.' },
            { q: 'No lo hago porque me lo ___; lo hago porque quiero.', o: ['pidan', 'piden', 'pedirán'], why: '*No porque* + subjunctive.' },
            { q: 'Lo que pasa es que ___ cansado.', o: ['estoy', 'esté', 'estuviera'], why: '*Lo que pasa es que* + indicative.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it with the expression in brackets.', items: [
            { q: 'Llega tarde, pero eso no es una excusa.', cue: 'El hecho de que', a: ['El hecho de que llegue tarde no es una excusa.'], why: '*El hecho de que* + subjunctive.' },
            { q: 'No quiero ir. La razón es que no puedo.', cue: 'No es que', a: ['No es que no quiera ir; es que no puedo.', 'No es que no quiera ir, es que no puedo.'], why: '*No es que* + subjunctive.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right form.', items: [
            { s: 'No es que no [quiero] ir; es que no puedo.', a: ['quiera'], why: '*No es que* + subjunctive.' },
            { s: 'Lo que pasa es que no [tenga] tiempo.', a: ['tengo'], why: '*Lo que pasa es que* + indicative.' },
            { s: 'Está claro que [tenga] razón.', a: ['tiene'], why: '*Está claro que* + indicative.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'No es que no quiera ir, es que no puedo.', why: '*No es que* + subjunctive.' },
            { a: 'El hecho de que llegue tarde no es una excusa.', why: '*El hecho de que* + subjunctive.' },
            { a: 'Lo que pasa es que no tengo tiempo.', why: '*Lo que pasa es que* + indicative.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Sea lo que fuere',
      about: 'Recognise the future subjunctive in fixed phrases and legal texts.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'The **futuro de subjuntivo** (**hablare, hablares, hablare, habláremos, hablareis, hablaren**) has almost disappeared from everyday Spanish, but it survives in **fixed phrases**, **proverbs** and **legal texts**: **sea lo que fuere** (*whatever it may be*), **quien quiera que fuere** (*whoever it may be*), **venga lo que viniere** (*come what may*), **si alguien lo hiciere** (*if anyone should do it*). The proverb **Adonde fueres, haz lo que vieres** means *when in Rome, do as the Romans do*. You will find it in the **Constitution**, in **contracts** and in **old literature**. In ordinary Spanish it is replaced by the **present subjunctive** or the **present indicative**: **si alguien lo hace**, **sea lo que sea**.' },
          { t: 'table', caption: 'The future subjunctive', explain: ['head', 'col1'], head: ['Legal or literary', 'Everyday way', 'Meaning'], rows: [
            ['sea lo que fuere', 'sea lo que sea', 'whatever it may be'],
            ['quien quiera que fuere', 'quienquiera que sea', 'whoever it may be'],
            ['si alguien lo hiciere', 'si alguien lo hace', 'if anyone should do it'],
            ['venga lo que viniere', 'pase lo que pase', 'come what may'],
            ['Adonde fueres, haz lo que vieres.', 'A donde vayas, haz lo que veas.', 'when in Rome, do as the Romans do'],
          ] },
          { t: 'tip', art: 'owl', md: 'The **forms** are those of the **imperfect subjunctive in -re**: **fuere, hiciere, viniere, quisiere, tuviere**. You only need to **recognise** them. **Do not produce** them in your own writing: use **sea lo que sea**, **si alguien lo hace**. The future subjunctive is the same in **Spain** and **Latin America**; in both it is now **archaic** and found mostly in **legal language**, **proverbs** and **literature**.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Sea lo que fuere**, no me importa.', n: 'Whatever it may be.' },
            { s: '**Venga lo que viniere**, no cambiaré de opinión.', n: 'Come what may.' },
            { s: '**Si alguien lo hiciere**, será sancionado.', n: 'Legal: if anyone should do it.' },
            { s: '**Adonde fueres**, haz lo que vieres.', n: 'A proverb.' },
            { s: '**Sea lo que sea**, no me importa.', n: 'The everyday way.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the phrase with its everyday way.', pairs: [
            ['sea lo que fuere', 'sea lo que sea'],
            ['si alguien lo hiciere', 'si alguien lo hace'],
            ['venga lo que viniere', 'pase lo que pase'],
            ['quien quiera que fuere', 'quienquiera que sea'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Sea lo que ___, no me importa. (ser, futuro de subjuntivo)', a: ['fuere'], why: 'The future subjunctive of *ser*.' },
            { q: 'Si alguien lo ___, será sancionado. (hacer, futuro de subjuntivo)', a: ['hiciere'], why: 'The future subjunctive of *hacer*.' },
            { q: 'Venga lo que ___, no cambiaré de opinión. (venir, futuro de subjuntivo)', a: ['viniere'], why: 'The future subjunctive of *venir*.' },
            { q: 'Adonde ___, haz lo que vieres. (ir, futuro de subjuntivo)', a: ['fueres'], why: 'The future subjunctive of *ir*, *tú*.' },
            { q: 'Sea lo que ___, no me importa. (ser, everyday)', a: ['sea'], why: 'The present subjunctive.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right everyday form.', items: [
            { q: 'Si alguien lo hiciere, ___ sancionado.', o: ['será', 'sería', 'fue'], why: 'A legal condition: future.' },
            { q: 'Sea lo que fuere = sea lo que ___.', o: ['sea', 'es', 'fuera'], why: 'The present subjunctive.' },
            { q: 'Venga lo que viniere = pase lo que ___.', o: ['pase', 'pasa', 'pasará'], why: 'The present subjunctive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it the everyday way.', items: [
            { q: 'Si alguien lo hiciere, será sancionado.', cue: 'Si alguien', a: ['Si alguien lo hace, será sancionado.'], why: 'The present indicative replaces the future subjunctive.' },
            { q: 'Sea lo que fuere, no me importa.', cue: 'Sea lo que', a: ['Sea lo que sea, no me importa.'], why: 'The present subjunctive.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right form.', items: [
            { s: 'Sea lo que [fuera], no me importa. (the legal form)', a: ['fuere'], why: 'The legal phrase uses the future subjunctive.' },
            { s: 'Si alguien lo [hiciera], será sancionado. (the legal form)', a: ['hiciere'], why: 'The legal phrase uses the future subjunctive.' },
            { s: 'Adonde [fueras], haz lo que vieres.', a: ['fueres'], why: 'The proverb uses the future subjunctive.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Sea lo que sea, no me importa.', why: 'The everyday way.' },
            { a: 'Si alguien lo hace, será sancionado.', why: 'The everyday way.' },
            { a: 'Pase lo que pase, no cambiaré de opinión.', why: 'The everyday way.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Una traductora y un editor',
      about: 'Read a conversation full of pronouns and subjunctives.',
      art: 'owl',
      spreads: [
        [
          { t: 'reading', title: 'La traducción de la novela', md: 'Una traductora y un editor hablan de la revisión de una novela.\n\nEDITOR: Ya le envié las pruebas, pero no sé si las recibió.\n\nTRADUCTORA: Las recibí ayer. Cuando las termine, se las devuelvo.\n\nEDITOR: Convendría fijar ya una fecha. Para que el libro salga en marzo, es necesario que las pruebas estén listas en enero.\n\nTRADUCTORA: No es que no quiera ayudarle; lo que pasa es que el texto es difícil. El hecho de que haya tantos juegos de palabras complica la revisión.\n\nEDITOR: Lo entiendo. Si tiene dudas, cuéntemelas. Sea lo que fuere, el plazo se mantiene.\n\nTRADUCTORA: No se lo prometo a la ligera. Antes de firmar el contrato, quiero hablar con el autor.\n\nEDITOR: Yo se lo diré. Déjeme encargarme de eso.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'El editor envió las pruebas a la traductora.', a: 't', why: '*Ya le envié las pruebas.*' },
            { q: 'La traductora recibió las pruebas ayer.', a: 't', why: '*Las recibí ayer.*' },
            { q: 'El libro tiene que salir en marzo.', a: 't', why: '*Para que el libro salga en marzo.*' },
            { q: 'La traductora se niega a ayudar.', a: 'f', why: '*No es que no quiera ayudarle.*' },
            { q: 'La traductora quiere hablar con el autor antes de firmar.', a: 't', why: '*Antes de firmar el contrato, quiero hablar con el autor.*' },
            { q: 'La novela tiene quinientas páginas.', a: 'ng', why: 'The text does not say.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: '¿Cuándo tienen que estar listas las pruebas?', o: ['En enero.', 'En marzo.', 'En diciembre.'], why: '*Las pruebas estén listas en enero.*' },
            { q: '¿Por qué es difícil la revisión?', o: ['Hay muchos juegos de palabras.', 'El texto es corto.', 'Faltan páginas.'], why: '*Haya tantos juegos de palabras.*' },
            { q: '¿Qué expresión introduce una explicación real?', o: ['Lo que pasa es que', 'No es que', 'El hecho de que'], why: '*Lo que pasa es que* + indicative.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the double pronouns and the fixed expressions.', items: [
            { s: 'Cuando las termine, [se las] devuelvo. No [se lo] prometo a la ligera.', why: 'Double pronouns.' },
            { s: '[No es que] no quiera ayudarle; [lo que pasa es que] el texto es difícil.', why: 'Mood after fixed expressions.' },
            { s: '[El hecho de que] haya tantos juegos de palabras complica la revisión. [Sea lo que fuere], el plazo se mantiene.', why: 'A fact as a topic and the future subjunctive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Cuando las termine, ___ las devuelvo. (to you, formal)', a: ['se'], why: '*Le* becomes *se* before *las*.' },
            { q: 'No es que no ___ ayudarle. (querer, yo)', a: ['quiera'], why: '*No es que* + subjunctive.' },
            { q: 'Déje___ encargarme de eso. (to me)', a: ['me'], why: 'Attached to the imperative.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'No se lo prometo a la ligera.', why: 'Negative and a double pronoun.' },
            { a: 'Lo que pasa es que el texto es difícil.', why: '*Lo que pasa es que* + indicative.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Le di el libro. → ___ di ayer.', o: ['Se lo', 'Le lo', 'Lo le'], why: '*Le* + *lo* = *se lo*.' },
      { q: 'No es que no ___ ir; es que no puedo.', o: ['quiera', 'quiero', 'querré'], why: '*No es que* + subjunctive.' },
      { q: 'Está claro que ___ razón.', o: ['tiene', 'tenga', 'tuviera'], why: '*Está claro que* + indicative.' },
      { q: 'A María ___ dije la verdad.', o: ['le', 'la', 'lo'], why: 'An indirect object: *le*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Sea lo que ___, no me importa. (ser, futuro de subjuntivo)', a: ['fuere'], why: 'The future subjunctive of *ser*.' },
      { q: 'Quiero dár___. (it to you)', a: ['telo'], why: 'Attached to the infinitive.' },
      { q: 'El hecho de que ___ tarde no es excusa. (llegar, él)', a: ['llegue'], why: '*El hecho de que* + subjunctive.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the phrase with its everyday way.', pairs: [
      ['sea lo que fuere', 'sea lo que sea'],
      ['si alguien lo hiciere', 'si alguien lo hace'],
      ['venga lo que viniere', 'pase lo que pase'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Replace the nouns with pronouns.', items: [
      { q: 'Doy el libro a Ana.', cue: 'Se', a: ['Se lo doy.'], why: '*Le* + *lo* = *se lo*.' },
      { q: 'Llega tarde, pero eso no es una excusa.', cue: 'El hecho de que', a: ['El hecho de que llegue tarde no es una excusa.'], why: '*El hecho de que* + subjunctive.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right form.', items: [
      { s: '[Le lo] di ayer.', a: ['Se lo'], why: '*Le* becomes *se* before *lo*.' },
      { s: 'Lo que pasa es que no [tenga] tiempo.', a: ['tengo'], why: '*Lo que pasa es que* + indicative.' },
    ] },
  ],
};
