// Spanish C1, unit 7 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u7',
  title: 'The art of argument',
  goal: 'Build and defend a nuanced argument in a written commentary. Learn connectors such as sin embargo, no obstante and de hecho, ways to concede and refute, and the structure of a newspaper commentary with its rhetorical figures.',
  art: 'cactus',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['argument', 'connectors', 'concession', 'commentary', 'rhetoric'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Sin embargo, no obstante, de hecho',
      about: 'Link ideas with the connectors of written argument.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'A good argument moves from point to point with **connectors**. To contrast: **sin embargo**, **no obstante** (*however*) and **aun así** (*even so*). To add a point: **además** and **por otra parte** (*moreover, besides*). To confirm: **de hecho** and **en efecto** (*in fact, indeed*). To balance two sides: **por un lado … por otro** (*on the one hand … on the other*). To conclude: **por tanto**, **por consiguiente** and **en definitiva** (*therefore, in the end*). **El proyecto es ambicioso; sin embargo, cuesta demasiado.** **La ciudad es bonita; además, es muy tranquila.** **De hecho, las cifras son claras.**' },
          { t: 'table', caption: 'Connectors of argument', explain: ['head', 'col1'], head: ['Connector', 'Function', 'Example'], rows: [
            ['sin embargo / no obstante', 'contrast', 'El proyecto es ambicioso; sin embargo, cuesta demasiado.'],
            ['aun así', 'contrast: even so', 'Estaba cansado; aun así, se quedó hasta el final.'],
            ['además / por otra parte', 'adding a point', 'La ciudad es bonita; además, es muy tranquila.'],
            ['de hecho / en efecto', 'confirming', 'De hecho, las cifras son claras.'],
            ['por un lado … por otro', 'balancing', 'Por un lado es cómodo, por otro es caro.'],
            ['por tanto / en definitiva', 'concluding', 'En definitiva, se rechaza la propuesta.'],
          ] },
          { t: 'tip', art: 'owl', md: '**De hecho** confirms and often **reinforces** what was just said: **No es difícil; de hecho, es facilísimo.** It does not mean *de facto* only. **Sin embargo** and **no obstante** are written; in speech use **pero**. Put a **semicolon** or a **full stop** before **sin embargo**: **El proyecto es ambicioso; sin embargo, cuesta demasiado.** **Aun así** needs the **comma** after it. In **Latin America**, **sin embargo** and **no obstante** are used in the same way.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'El proyecto es ambicioso; **sin embargo**, cuesta demasiado.', n: 'Contrast.' },
            { s: 'La ciudad es bonita; **además**, es muy tranquila.', n: 'Adding a point.' },
            { s: '**De hecho**, las cifras son claras.', n: 'Confirming.' },
            { s: '**Por un lado** es cómodo, **por otro** es caro.', n: 'Balancing.' },
            { s: '**En definitiva**, se rechaza la propuesta.', n: 'Concluding.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Contrast or addition? Sort the connectors.', groups: ['contrast', 'addition'], explain: ['groups'], items: [
            { s: 'sin embargo', g: 0, why: 'Contrast.' },
            { s: 'no obstante', g: 0, why: 'Contrast.' },
            { s: 'aun así', g: 0, why: 'Contrast.' },
            { s: 'además', g: 1, why: 'Addition.' },
            { s: 'por otra parte', g: 1, why: 'Addition.' },
            { s: 'asimismo', g: 1, why: 'Addition.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'El proyecto es ambicioso; ___, cuesta demasiado.', a: ['sin embargo', 'no obstante'], why: 'A connector of contrast.' },
            { q: 'La ciudad es bonita; ___, es muy tranquila.', a: ['además', 'por otra parte'], why: 'A connector that adds a point.' },
            { q: 'De ___, las cifras son claras.', a: ['hecho'], why: '*De hecho* = in fact.' },
            { q: 'Por un lado es cómodo, por ___ es caro.', a: ['otro'], why: '*Por un lado … por otro*.' },
            { q: 'En ___, se rechaza la propuesta.', a: ['definitiva'], why: '*En definitiva* = in the end.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the connector with its function.', pairs: [
            ['sin embargo', 'contrast'],
            ['además', 'adding a point'],
            ['de hecho', 'confirming'],
            ['en definitiva', 'concluding'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best connector.', items: [
            { q: 'El plan es sencillo; ___, nadie lo entiende.', o: ['sin embargo', 'de hecho', 'por tanto'], why: 'Contrast.' },
            { q: 'Estaba muy cansado; ___, se fue a dormir.', o: ['por eso', 'sin embargo', 'aun así'], why: 'A result.' },
            { q: 'El plan ha fallado; ___, hay que cambiarlo.', o: ['por tanto', 'no obstante', 'además'], why: 'Conclusion.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Say it with the word in brackets.', items: [
            { q: 'El proyecto es ambicioso, pero cuesta demasiado.', cue: 'El proyecto es ambicioso; sin embargo', a: ['El proyecto es ambicioso; sin embargo, cuesta demasiado.'], why: '*Sin embargo* replaces *pero*.' },
            { q: 'La ciudad es bonita y, además, es tranquila.', cue: 'La ciudad es bonita; además', a: ['La ciudad es bonita; además, es tranquila.', 'La ciudad es bonita; además, es muy tranquila.'], why: '*Además* adds a point.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'El proyecto es ambicioso; [por tanto], cuesta demasiado.', a: ['sin embargo', 'no obstante'], why: 'The second clause contrasts.' },
            { s: 'El plan ha fallado; [sin embargo], hay que cambiarlo.', a: ['por tanto', 'por consiguiente'], why: 'The second clause is a conclusion.' },
            { s: 'Por un lado es cómodo, [por un lado] es caro.', a: ['por otro'], why: '*Por un lado … por otro*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Es cierto que, ni mucho menos',
      about: 'Concede a point and then refute it.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'A strong argument **concedes** the other side before it **refutes** it. To concede: **es cierto que** (*it is true that*), **desde luego** (*of course*), **no se puede negar que** (*it cannot be denied that*). To refute: **lo cierto es que** (*the fact is that*), **ni mucho menos** (*far from it*), **aun así** (*even so*). **Es cierto que la ciudad es cara; lo cierto es que ofrece muchas oportunidades.** **No es difícil, ni mucho menos.** **Por más que se diga** + subjunctive means *however much*: **Por más que se diga lo contrario, la ciudad es segura.**' },
          { t: 'table', caption: 'Concession and refutation', explain: ['head', 'col1'], head: ['Expression', 'Function', 'Example'], rows: [
            ['es cierto que', 'concession', 'Es cierto que la ciudad es cara.'],
            ['no se puede negar que', 'concession', 'No se puede negar que el problema existe.'],
            ['lo cierto es que', 'refutation', 'Lo cierto es que ofrece muchas oportunidades.'],
            ['ni mucho menos', 'refutation', 'No es difícil, ni mucho menos.'],
            ['aun así', 'refutation', 'Aun así, no hay que rendirse.'],
            ['por más que + subjuntivo', 'concession', 'Por más que se diga lo contrario, es segura.'],
          ] },
          { t: 'tip', art: 'owl', md: 'After **es cierto que** and **no se puede negar que**, use the **indicative** for something true (**es cierto que la ciudad es cara**). **Por más que** always takes the **subjunctive** when it looks to the present or future: **por más que se diga**, **por más que insista**. **Lo cierto es que** introduces a fact and takes the **indicative**. **Ni mucho menos** follows a **negative** sentence and strengthens it: **No es caro, ni mucho menos.**' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Es cierto que** la ciudad es cara.', n: 'Concession.' },
            { s: '**Lo cierto es que** ofrece muchas oportunidades.', n: 'Refutation.' },
            { s: 'No es difícil, **ni mucho menos**.', n: 'Far from it.' },
            { s: '**Por más que se diga** lo contrario, la ciudad es segura.', n: 'However much is said.' },
            { s: '**No se puede negar que** el problema existe.', n: 'It cannot be denied.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Concession or refutation? Sort the expressions.', groups: ['concession', 'refutation'], explain: ['groups'], items: [
            { s: 'Es cierto que la ciudad es cara.', g: 0, why: 'Concession.' },
            { s: 'No se puede negar que el problema existe.', g: 0, why: 'Concession.' },
            { s: 'Desde luego, hay costes.', g: 0, why: 'Concession.' },
            { s: 'Lo cierto es que ofrece muchas oportunidades.', g: 1, why: 'Refutation.' },
            { s: 'No es difícil, ni mucho menos.', g: 1, why: 'Refutation.' },
            { s: 'Aun así, no hay que rendirse.', g: 1, why: 'Refutation.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Es ___ que la ciudad es cara.', a: ['cierto', 'verdad'], why: '*Es cierto que*.' },
            { q: 'Lo ___ es que ofrece muchas oportunidades.', a: ['cierto'], why: '*Lo cierto es que*.' },
            { q: 'No es difícil, ni mucho ___.', a: ['menos'], why: '*Ni mucho menos*.' },
            { q: 'Por más que se ___ lo contrario, la ciudad es segura. (decir)', a: ['diga'], why: '*Por más que* + subjunctive.' },
            { q: 'No se puede ___ que el problema existe.', a: ['negar'], why: '*No se puede negar que*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the expression with its meaning.', pairs: [
            ['es cierto que', 'it is true that'],
            ['lo cierto es que', 'the fact is that'],
            ['ni mucho menos', 'far from it'],
            ['por más que', 'however much'],
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it with the expression in brackets.', items: [
            { q: 'La ciudad es cara. Ofrece muchas oportunidades.', cue: 'Es cierto que', a: ['Es cierto que la ciudad es cara, pero ofrece muchas oportunidades.', 'Es cierto que la ciudad es cara; lo cierto es que ofrece muchas oportunidades.'], why: 'Concession, then refutation.' },
            { q: 'Se dice lo contrario, pero la ciudad es segura.', cue: 'Por más que', a: ['Por más que se diga lo contrario, la ciudad es segura.'], why: '*Por más que* + subjunctive.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Por más que se [dice] lo contrario, la ciudad es segura.', a: ['diga'], why: '*Por más que* + subjunctive.' },
            { s: 'No es difícil, ni mucho [más].', a: ['menos'], why: 'The fixed phrase is *ni mucho menos*.' },
            { s: '[Es verdadero] que la ciudad es cara.', a: ['Es cierto', 'Es verdad'], why: 'The phrase is *es cierto que*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Es cierto que la ciudad es cara, pero ofrece muchas oportunidades.', why: 'Concession, then refutation.' },
            { a: 'Por más que se diga lo contrario, la ciudad es segura.', why: '*Por más que* + subjunctive.' },
            { a: 'No es difícil, ni mucho menos.', why: 'A refutation.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Preguntas retóricas, litotes, antítesis',
      about: 'Learn the figures of a commentary.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'A newspaper **commentary** (artículo de opinión) persuades with figures of speech. The **rhetorical question** (pregunta retórica) asks without expecting an answer: **¿Quién puede decir que le sorprende?** The **litotes** (lítote) says less to mean more by negating the opposite: **No es un mal resultado** (it is a good result), **No es poco** (it is a lot). The **antithesis** (antítesis) sets two opposite ideas side by side: **Menos palabras, más hechos.** The **triad** (tríada) lists three items: **una ciudad viva, abierta, justa.** A commentary has a clear structure: an **opening** (the fact), a **thesis**, **arguments** with examples, and a **conclusion** that repeats the idea in a new way.' },
          { t: 'table', caption: 'Figures of a commentary', explain: ['head', 'col1'], head: ['Figure', 'Meaning', 'Example'], rows: [
            ['pregunta retórica', 'a question with no expected answer', '¿Quién puede decir que le sorprende?'],
            ['lítote', 'negating the opposite', 'No es un mal resultado.'],
            ['antítesis', 'two opposite ideas', 'Menos palabras, más hechos.'],
            ['tríada', 'a list of three', 'Una ciudad viva, abierta, justa.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Use **one figure per paragraph**, not five: a commentary full of figures becomes tiring. The **litotes** is typical of Spanish: **no está mal** means *it is good*, **no es poco** means *it is a lot*. The **rhetorical question** works best at the **end** of a paragraph. In a formal essay, avoid exclamation marks and use the **first person plural** for an inclusive tone: **No podemos ignorar …**' },
        ],
        [
          { t: 'examples', items: [
            { s: '**¿Quién puede decir que le sorprende?**', n: 'A rhetorical question.' },
            { s: 'No es **un mal resultado**.', n: 'A litotes: it is a good result.' },
            { s: '**Menos palabras, más hechos.**', n: 'An antithesis.' },
            { s: 'Una ciudad **viva, abierta, justa**.', n: 'A list of three.' },
            { s: 'No es **poco**.', n: 'A litotes: it is a lot.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the figure with its example.', pairs: [
            ['pregunta retórica', '¿Quién puede decir que le sorprende?'],
            ['lítote', 'No es un mal resultado.'],
            ['antítesis', 'Menos palabras, más hechos.'],
            ['tríada', 'Una ciudad viva, abierta, justa.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: '¿Qué significa *No es un mal resultado*?', o: ['Es un buen resultado.', 'Es un resultado pésimo.', 'No hay resultado.'], why: 'A litotes says less to mean more.' },
            { q: '¿Qué significa *No es poco*?', o: ['Es mucho.', 'Es poquísimo.', 'Es normal.'], why: 'A litotes negates the opposite.' },
            { q: '¿Qué frase es una antítesis?', o: ['Menos palabras, más hechos.', 'Una ciudad viva, abierta, justa.', '¿Quién puede decir que le sorprende?'], why: 'Two opposite ideas.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Which figure? Sort the sentences.', groups: ['litotes', 'antithesis'], explain: ['groups'], items: [
            { s: 'No es un mal resultado.', g: 0, why: 'A litotes.' },
            { s: 'No está mal.', g: 0, why: 'A litotes.' },
            { s: 'No es poco.', g: 0, why: 'A litotes.' },
            { s: 'Menos palabras, más hechos.', g: 1, why: 'An antithesis.' },
            { s: 'No el tiempo, sino la voluntad.', g: 1, why: 'An antithesis.' },
            { s: 'Pocos en la plaza, muchos en casa.', g: 1, why: 'An antithesis.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Menos palabras, ___ hechos.', a: ['más'], why: 'An antithesis.' },
            { q: 'No es un ___ resultado. (the opposite of bueno)', a: ['mal'], why: 'A litotes.' },
            { q: '¿Quién puede decir que le ___? (sorprender)', a: ['sorprende'], why: 'A rhetorical question.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Say it as a litotes.', items: [
            { q: 'Es un buen resultado.', cue: 'No es', a: ['No es un mal resultado.'], why: 'The litotes negates the opposite.' },
            { q: 'Es mucho.', cue: 'No es', a: ['No es poco.'], why: 'The litotes negates the opposite.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: '¿Quién puede decir que le sorprende?', why: 'A rhetorical question.' },
            { a: 'Menos palabras, más hechos.', why: 'An antithesis.' },
            { a: 'No es un mal resultado.', why: 'A litotes.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Un artículo de opinión',
      about: 'Read a commentary and see how the argument is built.',
      art: 'cactus',
      spreads: [
        [
          { t: 'reading', title: 'La biblioteca del barrio', md: 'El ayuntamiento ha decidido cerrar la biblioteca del barrio. Por un lado, las cuentas cuadran; por otro, el barrio pierde un lugar vivo.\n\nEs cierto que los préstamos bajan desde hace años. No se puede negar que los recursos son limitados. Pero lo cierto es que una biblioteca no es una tienda: no se mide por las ventas. ¿Quién puede decir que le sorprende si, cerrada la biblioteca, los jóvenes dejan de tener dónde estudiar?\n\nPor más que se diga lo contrario, el ahorro es modesto: unos pocos miles de euros al año. No es poco para un presupuesto pequeño, pero no es nada frente a lo que se pierde. Menos préstamos, desde luego; sin embargo, más aislamiento, más soledad, menos oportunidades.\n\nPor tanto, la pregunta no es si el ayuntamiento puede pagarla, sino si puede permitirse perderla. Una ciudad viva, abierta, justa no cierra sus lugares de encuentro.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'El ayuntamiento ha decidido cerrar la biblioteca.', a: 't', why: '*El ayuntamiento ha decidido cerrar la biblioteca del barrio.*' },
            { q: 'El autor piensa que el ahorro es grande.', a: 'f', why: '*El ahorro es modesto.*' },
            { q: 'Los préstamos bajan desde hace años.', a: 't', why: '*Los préstamos bajan desde hace años.*' },
            { q: 'Según el autor, una biblioteca no se mide por las ventas.', a: 't', why: '*No es una tienda: no se mide por las ventas.*' },
            { q: 'El autor propone una biblioteca digital.', a: 'ng', why: 'The text does not say.' },
            { q: 'Los jóvenes dejarían de tener dónde estudiar.', a: 't', why: '*Los jóvenes dejan de tener dónde estudiar.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: '¿Cómo empieza el artículo?', o: ['Con el hecho y dos lados.', 'Con una cita.', 'Con una historia.'], why: '*Por un lado … por otro.*' },
            { q: '¿Qué concede el autor?', o: ['Los préstamos bajan y los recursos son limitados.', 'La biblioteca es inútil.', 'El ayuntamiento tiene razón.'], why: '*Es cierto … no se puede negar.*' },
            { q: '¿Qué dice la conclusión?', o: ['Una ciudad viva no cierra los lugares de encuentro.', 'El ayuntamiento debe ahorrar.', 'La biblioteca debe costar menos.'], why: 'The last sentence.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the connectors of argument.', items: [
            { s: '[Por un lado], las cuentas cuadran; [por otro], el barrio pierde un lugar vivo.', why: '*Por un lado … por otro*.' },
            { s: '[Es cierto que] los préstamos bajan. Pero [lo cierto es que] una biblioteca no es una tienda.', why: 'Concession and refutation.' },
            { s: 'Menos préstamos, desde luego; [sin embargo], más aislamiento. [Por tanto], la pregunta no es si el ayuntamiento puede pagarla.', why: '*Sin embargo* and *por tanto*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Por un lado las cuentas cuadran; por ___, el barrio pierde un lugar vivo.', a: ['otro'], why: '*Por un lado … por otro*.' },
            { q: 'Por más que se ___ lo contrario, el ahorro es modesto. (decir)', a: ['diga'], why: '*Por más que* + subjunctive.' },
            { q: '¿Quién puede decir que le ___? (sorprender)', a: ['sorprende'], why: 'The rhetorical question.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Lo cierto es que una biblioteca no es una tienda.', why: 'A refutation.' },
            { a: 'Una ciudad viva, abierta, justa no cierra sus lugares de encuentro.', why: 'The closing sentence.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'El proyecto es ambicioso; ___, cuesta demasiado.', o: ['sin embargo', 'de hecho', 'por tanto'], why: 'Contrast.' },
      { q: 'Por más que se ___ lo contrario, la ciudad es segura.', o: ['diga', 'dice', 'dirá'], why: '*Por más que* + subjunctive.' },
      { q: '¿Qué significa *No es poco*?', o: ['Es mucho.', 'Es poquísimo.', 'Es normal.'], why: 'A litotes.' },
      { q: '¿Qué expresión introduce una concesión?', o: ['Es cierto que', 'Lo cierto es que', 'Ni mucho menos'], why: '*Es cierto que* concedes a point.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Lo ___ es que ofrece muchas oportunidades.', a: ['cierto'], why: '*Lo cierto es que*.' },
      { q: 'Menos palabras, ___ hechos.', a: ['más'], why: 'An antithesis.' },
      { q: 'En ___, se rechaza la propuesta.', a: ['definitiva'], why: '*En definitiva*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the connector with its function.', pairs: [
      ['sin embargo', 'contrast'],
      ['además', 'adding a point'],
      ['de hecho', 'confirming'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Say it with the expression in brackets.', items: [
      { q: 'El proyecto es ambicioso, pero cuesta demasiado.', cue: 'El proyecto es ambicioso; sin embargo', a: ['El proyecto es ambicioso; sin embargo, cuesta demasiado.'], why: '*Sin embargo* replaces *pero*.' },
      { q: 'Es un buen resultado.', cue: 'No es', a: ['No es un mal resultado.'], why: 'A litotes.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Por más que se [dice] lo contrario, la ciudad es segura.', a: ['diga'], why: '*Por más que* + subjunctive.' },
      { s: 'El plan ha fallado; [sin embargo], hay que cambiarlo.', a: ['por tanto', 'por consiguiente'], why: 'The second clause is a conclusion.' },
    ] },
  ],
};
