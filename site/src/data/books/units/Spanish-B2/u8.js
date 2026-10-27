// Spanish B2, unit 8 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u8',
  title: 'Culture, science and the future',
  goal: 'Describe a work of art, concede a point, and discuss cause, effect and progress. Learn the vocabulary of plot and criticism, expressions such as cualquiera que sea and pase lo que pase, the words of cause and effect, and the abstract vocabulary of an argument.',
  art: 'alien',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'speaking'], topics: ['arts', 'books', 'film', 'opinion', 'cause and effect', 'science', 'subjunctive'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Books, films and exhibitions',
      about: 'Learn the words used to describe a work of art and to judge it.',
      art: 'alien',
      spreads: [
        [
          { t: 'text', md: 'To talk about a book or a film, name its parts: **el argumento** (the plot), **el personaje** (the character), **el guion** (the script), **el director** (the film director), **el autor** (the author) and **el estilo** (the style). To judge it, use words that carry a view: *el argumento es previsible, el personaje es convincente, el estilo es original, el final es flojo, la historia atrapa.* For an exhibition, say **la exposición**, **el comisario** (the curator), **la obra** (the work) and **el visitante**. Use **retratar** (to portray), **explorar** (to explore) and **abordar** (to deal with) for the theme: *La película aborda la soledad.*' },
          { t: 'table', caption: 'Describing and judging', explain: ['head', 'col1'], head: ['Word', 'Meaning', 'Example'], rows: [
            ['el argumento', 'the plot', 'El argumento es previsible.'],
            ['el personaje', 'the character', 'El personaje principal es convincente.'],
            ['el director', 'the film director', 'El director aborda la soledad.'],
            ['retratar', 'to portray', 'El libro retrata la vida en un pueblo.'],
            ['atrapar', 'to grip', 'La historia atrapa al lector.'],
            ['la exposición', 'the exhibition', 'La exposición reúne cien obras.'],
          ] },
          { t: 'tip', art: 'owl', md: '**Personaje** is masculine even for a woman: *el personaje principal es una mujer.* Many people say **la trama** for the plot of a story and **el argumento** for a summary. In speech, **enganchar** is a common way to say *to grip*: *La historia engancha.* **El director** is used for men and **la directora** for women.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**El argumento** es previsible, pero **el estilo** es original.', n: 'The plot and the style.' },
            { s: '**El personaje principal** es muy convincente.', n: 'The main character.' },
            { s: 'El libro **retrata** la vida en un pueblo.', n: 'To portray.' },
            { s: 'La historia **atrapa** al lector hasta el final.', n: 'To grip.' },
            { s: 'La exposición **reúne** cien obras.', n: 'To bring together.' },
          ] },
          { t: 'dialogue', title: 'A la salida del cine', lines: [
            { who: 'Sara', s: '¿Te ha gustado la película?' },
            { who: 'Paulo', s: 'El argumento es previsible, pero el personaje principal es muy convincente.' },
            { who: 'Sara', s: 'La directora aborda la soledad con mucha delicadeza.' },
            { who: 'Paulo', s: 'Sí, y el final atrapa hasta el último minuto.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'El ___ es previsible, pero el estilo es original. (the plot)', a: ['argumento'], why: '*El argumento* = the plot.' },
            { q: 'El ___ principal es muy convincente. (the character)', a: ['personaje'], why: '*El personaje* = the character.' },
            { q: 'El libro ___ la vida en un pueblo. (retratar)', a: ['retrata'], why: '*Retratar* = to portray.' },
            { q: 'La historia ___ al lector hasta el final. (atrapar)', a: ['atrapa'], why: '*Atrapar* = to grip.' },
            { q: 'La ___ reúne cien obras. (the exhibition)', a: ['exposición'], why: '*La exposición* = the exhibition.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
            ['el argumento', 'the plot'],
            ['el personaje', 'the character'],
            ['el director', 'the film director'],
            ['la exposición', 'the exhibition'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'El ___ de la película es muy previsible.', o: ['argumento', 'visitante', 'comisario'], why: '*El argumento* is the plot.' },
            { q: 'La directora ___ la soledad con delicadeza.', o: ['aborda', 'atrapa', 'reúne'], why: '*Abordar* = to deal with a theme.' },
            { q: 'La ___ está abierta hasta el domingo.', o: ['exposición', 'personaje', 'guion'], why: '*La exposición* = the exhibition.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: '[La] personaje principal es muy convincente.', a: ['El'], why: '*Personaje* is masculine.' },
            { s: 'La historia [atrapan] al lector hasta el final.', a: ['atrapa'], why: 'The subject is singular.' },
            { s: 'El libro [retratar] la vida en un pueblo.', a: ['retrata'], why: 'Present tense: *retrata*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'El argumento es previsible, pero el estilo es original.', why: 'Plot, then style.' },
            { a: 'El personaje principal es muy convincente.', why: 'Noun, adjective, adverb.' },
            { a: 'La historia atrapa al lector hasta el final.', why: 'Subject, verb, object.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Cualquiera que sea, pase lo que pase',
      about: 'Make a concession with indefinite expressions and the subjunctive.',
      art: 'dragon',
      spreads: [
        [
          { t: 'text', md: 'To say that **it does not matter which**, **who** or **what**, Spanish uses indefinite expressions with the **subjunctive**. **Cualquiera que sea** means *whatever it may be*: *Cualquiera que sea tu opinión, la respeto.* **Quienquiera que** means *whoever*: *Quienquiera que llegue, deja pasar.* **Dondequiera que** means *wherever*: *Dondequiera que vayas, serás bien recibido.* **Sea como sea** means *however it may be*: *Sea como sea, la película merece la pena.* **Por mucho que** is followed by the subjunctive too: *Por mucho que insistas, no cambio de idea.* Spanish also repeats the verb: **pase lo que pase** (whatever happens), **venga quien venga** (whoever comes), **diga lo que diga** (whatever he says).' },
          { t: 'table', caption: 'Indefinite expressions', explain: ['head', 'col1'], head: ['Expression', 'Meaning', 'Example'], rows: [
            ['cualquiera que sea', 'whatever it may be', 'Cualquiera que sea tu opinión, la respeto.'],
            ['quienquiera que', 'whoever', 'Quienquiera que llegue, deja pasar.'],
            ['dondequiera que', 'wherever', 'Dondequiera que vayas, serás bien recibido.'],
            ['sea como sea', 'however it may be', 'Sea como sea, la película merece la pena.'],
            ['pase lo que pase', 'whatever happens', 'Pase lo que pase, te ayudaré.'],
            ['venga quien venga', 'whoever comes', 'Venga quien venga, no abras.'],
          ] },
          { t: 'tip', art: 'owl', md: '**Cualquiera que sea** agrees in number with the noun: *cualesquiera que sean las razones*. Before a noun, **cualquiera** becomes **cualquier**: *cualquier opinión*. The repeated verb is always in the **presente de subjuntivo**: *pase lo que pase, venga quien venga, vayas donde vayas*. In speech people often say **no importa quién** or **da igual dónde**.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Cualquiera que sea** tu opinión, la respeto.', n: 'Whatever it may be.' },
            { s: '**Quienquiera que llegue**, deja pasar.', n: 'Whoever arrives.' },
            { s: '**Dondequiera que vayas**, serás bien recibido.', n: 'Wherever you go.' },
            { s: '**Pase lo que pase**, te ayudaré.', n: 'Whatever happens.' },
            { s: '**Por mucho que insistas**, no cambio de idea.', n: 'However much you insist.' },
          ] },
          { t: 'dialogue', title: 'Una discusión amistosa', lines: [
            { who: 'Ana', s: 'Cualquiera que sea la crítica, a mí me gustó el libro.' },
            { who: 'Pedro', s: 'Por mucho que lo defiendas, el final es flojo.' },
            { who: 'Ana', s: 'Sea como sea, el autor escribe muy bien.' },
            { who: 'Pedro', s: 'En eso estoy de acuerdo contigo.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the subjunctive.', items: [
            { q: 'Cualquiera que ___ tu opinión, la respeto. (ser)', a: ['sea'], why: '*Cualquiera que* + *sea*.' },
            { q: 'Quienquiera que ___, deja pasar. (llegar)', a: ['llegue'], why: '*Quienquiera que* + subjunctive.' },
            { q: 'Dondequiera que tú ___, serás bien recibido. (ir)', a: ['vayas'], why: '*Dondequiera que* + *vayas*.' },
            { q: 'Por mucho que tú ___, no cambio de idea. (insistir)', a: ['insistas'], why: '*Por mucho que* + subjunctive.' },
            { q: 'Pase lo que ___, te ayudaré. (pasar)', a: ['pase'], why: 'The repeated verb: *pase lo que pase*.' },
            { q: 'Sea como ___, la película merece la pena. (ser)', a: ['sea'], why: 'Fixed expression: *sea como sea*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the expression with its meaning.', pairs: [
            ['cualquiera que sea', 'whatever it may be'],
            ['quienquiera que', 'whoever'],
            ['dondequiera que', 'wherever'],
            ['pase lo que pase', 'whatever happens'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Quienquiera que ___, deja pasar.', o: ['llegue', 'llega', 'llegó'], why: '*Quienquiera que* + subjunctive.' },
            { q: 'Dondequiera que ___, serás bien recibido.', o: ['vayas', 'vas', 'fuiste'], why: '*Dondequiera que* + subjunctive.' },
            { q: 'Venga ___ venga, no abras.', o: ['quien', 'que', 'cual'], why: 'The repeated verb: *venga quien venga*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with the expression in brackets.', items: [
            { q: 'No importa cuál sea tu opinión, la respeto.', cue: 'Cualquiera que', a: ['Cualquiera que sea tu opinión, la respeto.'], why: '*Cualquiera que sea*.' },
            { q: 'No importa quién llegue, deja pasar.', cue: 'Quienquiera que', a: ['Quienquiera que llegue, deja pasar.'], why: '*Quienquiera que* + subjunctive.' },
            { q: 'No importa lo que pase, te ayudaré.', cue: 'Pase', a: ['Pase lo que pase, te ayudaré.'], why: 'The repeated verb: *pase lo que pase*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Quienquiera que [llega], deja pasar.', a: ['llegue'], why: 'Subjunctive after *quienquiera que*.' },
            { s: 'Dondequiera que [vas], serás bien recibido.', a: ['vayas'], why: 'Subjunctive after *dondequiera que*.' },
            { s: 'Sea como [es], la película merece la pena.', a: ['sea'], why: 'Fixed expression: *sea como sea*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Cualquiera que sea tu opinión, la respeto.', why: '*Cualquiera que sea* + noun.' },
            { a: 'Dondequiera que vayas, serás bien recibido.', why: '*Dondequiera que* + subjunctive.' },
            { a: 'Pase lo que pase, te ayudaré.', why: 'The repeated verb first.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Cause, effect and progress',
      about: 'Say why something happened, what followed, and use the abstract words of an argument.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'To give a **cause**, use **puesto que** or **ya que** (since), **debido a** (because of, neutral and formal), **gracias a** (thanks to, for a good result) and **por culpa de** (because of, for blame). To give an **effect**, use **por eso** (so), **por lo tanto** and **por consiguiente** (as a result, formal), and **de ahí que + subjunctive** (hence): *Hay riesgos; de ahí que haya que regular.* *Puesto que llueve, nos quedamos en casa. El vuelo se canceló debido a la niebla. Gracias a tu ayuda, acabamos. Llegamos tarde por culpa del tráfico.*' },
          { t: 'table', caption: 'Cause and effect', explain: ['head', 'col1'], head: ['Expression', 'Use', 'Example'], rows: [
            ['puesto que / ya que', 'since (cause)', 'Puesto que llueve, nos quedamos en casa.'],
            ['debido a', 'because of (formal)', 'El vuelo se canceló debido a la niebla.'],
            ['gracias a', 'thanks to (good result)', 'Gracias a tu ayuda, acabamos.'],
            ['por culpa de', 'because of (blame)', 'Llegamos tarde por culpa del tráfico.'],
            ['por eso', 'so (effect)', 'Llovía; por eso, nos quedamos en casa.'],
            ['por lo tanto', 'as a result (formal)', 'El precio subió; por lo tanto, vendemos menos.'],
            ['de ahí que + subjunctive', 'hence', 'Hay riesgos; de ahí que haya que regular.'],
          ] },
          { t: 'tip', art: 'owl', md: '**A** and **de** join the article: *debido al frío, gracias a la ayuda, por culpa del tráfico.* Never use **gracias a** for something bad: *gracias al tráfico llegamos tarde* would be ironic. **Puesto que** and **ya que** take the **indicative**; **de ahí que** takes the **subjunctive**.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Puesto que** llueve, nos quedamos en casa.', n: 'Cause, with the indicative.' },
            { s: 'El vuelo se canceló **debido a la** niebla.', n: 'Neutral and formal.' },
            { s: '**Gracias a** tu ayuda, acabamos pronto.', n: 'A good result.' },
            { s: 'Llegamos tarde **por culpa del** tráfico.', n: 'Blame.' },
            { s: 'Hay riesgos; **de ahí que haya** que regular.', n: '*De ahí que* + subjunctive.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Cause or effect? Sort the expressions.', groups: ['cause', 'effect'], explain: ['groups'], items: [
            { s: 'puesto que', g: 0, why: 'It gives the cause.' },
            { s: 'debido a', g: 0, why: 'It gives the cause.' },
            { s: 'gracias a', g: 0, why: 'It gives the cause.' },
            { s: 'por eso', g: 1, why: 'It gives the effect.' },
            { s: 'por lo tanto', g: 1, why: 'It gives the effect.' },
            { s: 'de ahí que', g: 1, why: 'It gives the effect.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'El vuelo se canceló ___ a la niebla.', a: ['debido'], why: '*Debido a* + noun.' },
            { q: '___ a tu ayuda, acabamos.', a: ['Gracias'], why: '*Gracias a* for a good result.' },
            { q: 'Llegamos tarde por ___ del tráfico.', a: ['culpa'], why: '*Por culpa de* for blame.' },
            { q: 'Llovía; ___, nos quedamos en casa.', a: ['por eso'], why: '*Por eso* gives the effect.' },
            { q: '___ que llueve, nos quedamos en casa.', a: ['Puesto'], why: '*Puesto que* gives the cause.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the expression with its meaning.', pairs: [
            ['debido a', 'because of'],
            ['gracias a', 'thanks to'],
            ['por culpa de', 'because of (blame)'],
            ['por lo tanto', 'as a result'],
          ] },
        ],
        [
          { t: 'text', md: 'An essay on science and society uses abstract nouns: **el progreso** (progress), **el riesgo** (risk), **el beneficio** (benefit) and **la responsabilidad** (responsibility). To argue, introduce a view with **Hay quien defiende que …** (some people argue that), admit a point with **Es cierto que …**, and answer it with **sin embargo**. Say who decides with **Corresponde a … decidir** (it is up to … to decide).' },
          { t: 'table', caption: 'The words of an argument', explain: ['head', 'col1'], head: ['Word or phrase', 'Meaning', 'Example'], rows: [
            ['el progreso', 'progress', 'El progreso científico mejora la vida.'],
            ['el riesgo', 'risk', 'Toda innovación tiene riesgos.'],
            ['el beneficio', 'benefit', 'Los beneficios superan los riesgos.'],
            ['la responsabilidad', 'responsibility', 'La responsabilidad es de todos.'],
            ['Hay quien defiende que …', 'some people argue that', 'Hay quien defiende que la tecnología nos aísla.'],
            ['Corresponde a … decidir', 'it is up to … to decide', 'Corresponde a los gobiernos decidir.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'El ___ científico mejora la vida. (progress)', a: ['progreso'], why: '*El progreso*.' },
            { q: 'Toda innovación tiene ___. (risks)', a: ['riesgos'], why: '*Los riesgos*.' },
            { q: 'Los ___ superan los riesgos. (benefits)', a: ['beneficios'], why: '*Los beneficios*.' },
            { q: 'La ___ es de todos. (responsibility)', a: ['responsabilidad'], why: '*La responsabilidad*.' },
            { q: 'Hay quien ___ que la tecnología nos aísla. (defender)', a: ['defiende'], why: '*Hay quien* + indicative when the person exists.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with the words in brackets.', items: [
            { q: 'Llovía. Nos quedamos en casa.', cue: 'Puesto que', a: ['Puesto que llovía, nos quedamos en casa.'], why: '*Puesto que* + indicative.' },
            { q: 'La niebla canceló el vuelo.', cue: 'Debido a la niebla', a: ['Debido a la niebla, se canceló el vuelo.'], why: '*Debido a* + noun.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Gracias [de] tu ayuda, acabamos.', a: ['a'], why: '*Gracias a*.' },
            { s: 'El vuelo se canceló debido [de] la niebla.', a: ['a'], why: '*Debido a*.' },
            { s: 'Llegamos tarde [gracias al] tráfico.', a: ['por culpa del'], why: 'Blame: *por culpa de*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'El vuelo se canceló debido a la niebla.', why: '*Debido a* + noun.' },
            { a: 'Gracias a tu ayuda, acabamos pronto.', why: '*Gracias a* opens the sentence.' },
            { a: 'Llovía; por eso, nos quedamos en casa.', why: '*Por eso* gives the effect.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'La tecnología y la vida de todos los días',
      about: 'Read an essay on technology and everyday life.',
      art: 'alien',
      spreads: [
        [
          { t: 'reading', title: 'La tecnología y la vida de todos los días', md: 'Hay quien defiende que la tecnología nos aísla. Es cierto que el móvil puede distraernos en la mesa y que muchos jóvenes pasan horas ante la pantalla. Sin embargo, gracias a la tecnología, una abuela puede ver a sus nietos, que viven en otro país, y un enfermo puede hablar con el médico sin salir de casa.\n\nEl progreso trae beneficios, pero también riesgos. Puesto que los datos de cada persona se guardan en muchos sitios, hay que proteger la privacidad. Corresponde a los gobiernos crear normas y a las empresas cumplirlas; por eso, la responsabilidad es compartida.\n\nCuando pienso en mis abuelos, debió de ser difícil vivir sin teléfono. Una carta podía tardar semanas en llegar. Debemos tenerlo en cuenta: la tecnología no es buena ni mala, depende del uso que le demos.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Según el autor, la tecnología solo trae problemas.', a: 'f', why: '*El progreso trae beneficios, pero también riesgos.*' },
            { q: 'Gracias a la tecnología, una abuela puede ver a sus nietos que viven en otro país.', a: 't', why: '*Gracias a la tecnología, una abuela puede ver a sus nietos.*' },
            { q: 'El autor piensa que la responsabilidad es solo de las empresas.', a: 'f', why: '*La responsabilidad es compartida.*' },
            { q: 'El autor trabaja en una empresa de tecnología.', a: 'ng', why: 'The text does not say so.' },
            { q: 'El autor cree que vivir sin teléfono debió de ser difícil.', a: 't', why: '*Debió de ser difícil vivir sin teléfono.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: '¿Qué hay que proteger?', o: ['La privacidad.', 'La pantalla.', 'El móvil.'], why: '*Hay que proteger la privacidad.*' },
            { q: '¿A quién corresponde crear normas?', o: ['A los gobiernos.', 'A los jóvenes.', 'A los abuelos.'], why: '*Corresponde a los gobiernos crear normas.*' },
            { q: '¿De qué depende que la tecnología sea buena o mala?', o: ['Del uso que le demos.', 'Del precio.', 'De la edad.'], why: '*Depende del uso que le demos.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the expressions of cause and effect.', items: [
            { s: '[Puesto que] los datos de cada persona se guardan en muchos sitios, hay que proteger la privacidad.', why: '*Puesto que* gives the cause.' },
            { s: 'Corresponde a los gobiernos crear normas; [por eso], la responsabilidad es compartida.', why: '*Por eso* gives the effect.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: '___ a la tecnología, una abuela puede ver a sus nietos.', a: ['Gracias'], why: '*Gracias a* for a good result.' },
            { q: 'Debió ___ ser difícil vivir sin teléfono.', a: ['de'], why: '*Deber de* + infinitive: a guess.' },
            { q: 'Corresponde a los gobiernos crear normas; ___, la responsabilidad es compartida.', a: ['por eso'], why: '*Por eso* gives the effect.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Corresponde a los gobiernos crear normas y a las empresas cumplirlas.', why: '*Corresponde a* + infinitive.' },
            { a: 'La tecnología no es buena ni mala.', why: '*Ni … ni* pattern.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'El vuelo se canceló ___ a la niebla.', o: ['debido', 'gracias', 'culpa'], why: '*Debido a* + noun.' },
      { q: 'El precio subió; ___, vendemos menos.', o: ['por lo tanto', 'aunque', 'puesto que'], why: '*Por lo tanto* gives the effect.' },
      { q: 'Venga ___ venga, no abras.', o: ['quien', 'que', 'cual'], why: 'The repeated verb: *venga quien venga*.' },
      { q: 'Los ___ superan los riesgos.', o: ['beneficios', 'decisiones', 'corresponde'], why: '*Los beneficios*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'El ___ principal es muy convincente. (the character)', a: ['personaje'], why: '*El personaje*.' },
      { q: 'Cualquiera que ___ tu opinión, la respeto. (ser)', a: ['sea'], why: '*Cualquiera que* + *sea*.' },
      { q: '___ a tu ayuda, acabamos.', a: ['Gracias'], why: '*Gracias a* for a good result.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the expression with its meaning.', pairs: [
      ['cualquiera que sea', 'whatever it may be'],
      ['dondequiera que', 'wherever'],
      ['por mucho que', 'however much'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with the expression in brackets.', items: [
      { q: 'No importa quién llegue, deja pasar.', cue: 'Quienquiera que', a: ['Quienquiera que llegue, deja pasar.'], why: '*Quienquiera que* + subjunctive.' },
      { q: 'Llovía. Nos quedamos en casa.', cue: 'Puesto que', a: ['Puesto que llovía, nos quedamos en casa.'], why: '*Puesto que* + indicative.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Dondequiera que [vas], serás bien recibido.', a: ['vayas'], why: 'Subjunctive after *dondequiera que*.' },
      { s: '[La] personaje principal es muy convincente.', a: ['El'], why: '*Personaje* is masculine.' },
    ] },
  ],
};
