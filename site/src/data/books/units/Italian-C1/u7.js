// Italian C1, unit 7 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u7',
  title: 'The art of argument',
  goal: 'Build and follow an argument in writing. Learn connectors such as tuttavia, peraltro and d’altronde, ways to concede and refute, and the structure of a newspaper commentary.',
  art: 'cactus',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['argument', 'connectors', 'concession', 'commentary', 'rhetoric'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Tuttavia, peraltro, d’altronde',
      about: 'Link ideas with the connectors of written argument.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'A good argument moves from point to point with **connectors**. To contrast: **tuttavia**, **ciononostante** and **eppure** (*however, nevertheless, and yet*). To add a point: **peraltro** and **d’altronde** (*moreover, besides*). To correct: **anzi** (*on the contrary, indeed*). To prove: **infatti** (*in fact*). To balance two sides: **da un lato … dall’altro** (*on the one hand … on the other*). To conclude: **dunque**, **pertanto** and **in definitiva** (*therefore, in the end*). *Il progetto è ambizioso; tuttavia, costa troppo.* *La città è bella; peraltro, è tranquilla.*' },
          { t: 'table', caption: 'Connectors of argument', explain: ['head', 'col1'], head: ['Connector', 'Function', 'Example'], rows: [
            ['tuttavia / ciononostante', 'contrast', 'Il progetto è ambizioso; tuttavia, costa troppo.'],
            ['peraltro / d’altronde', 'adding a point', 'La città è bella; peraltro, è tranquilla.'],
            ['anzi', 'correcting or reinforcing', 'Non è difficile, anzi, è facilissimo.'],
            ['infatti', 'confirming', 'Era stanco; infatti, è andato a dormire.'],
            ['da un lato … dall’altro', 'balancing', 'Da un lato è comodo, dall’altro è caro.'],
            ['pertanto / in definitiva', 'concluding', 'Pertanto, la proposta è respinta.'],
          ] },
          { t: 'tip', art: 'owl', md: '**Anzi** has two uses: it corrects (*Non è difficile, anzi, è facilissimo*) and it reinforces. It never means *instead* in the sense of *invece*. **Tuttavia** and **ciononostante** are written; in speech use **però**. Put a **semicolon** or a **full stop** before **tuttavia**: *Il progetto è ambizioso; tuttavia, costa troppo.* **Infatti** confirms what was just said, it does not contrast.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Il progetto è ambizioso; **tuttavia**, costa troppo.', n: 'Contrast.' },
            { s: 'La città è bella; **peraltro**, è tranquilla.', n: 'Adding a point.' },
            { s: 'Non è difficile, **anzi**, è facilissimo.', n: 'Reinforcing.' },
            { s: 'Era stanco; **infatti**, è andato a dormire.', n: 'Confirming.' },
            { s: '**Da un lato** è comodo, **dall’altro** è caro.', n: 'Balancing.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Contrast or addition? Sort the connectors.', groups: ['contrast', 'addition'], explain: ['groups'], items: [
            { s: 'tuttavia', g: 0, why: 'Contrast.' },
            { s: 'ciononostante', g: 0, why: 'Contrast.' },
            { s: 'eppure', g: 0, why: 'Contrast.' },
            { s: 'peraltro', g: 1, why: 'Addition.' },
            { s: 'd’altronde', g: 1, why: 'Addition.' },
            { s: 'inoltre', g: 1, why: 'Addition.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Il progetto è ambizioso; ___, costa troppo.', a: ['tuttavia', 'ciononostante'], why: 'A connector of contrast.' },
            { q: 'La città è bella; ___, è tranquilla.', a: ['peraltro', 'd’altronde', 'd\'altronde'], why: 'A connector that adds a point.' },
            { q: 'Non è difficile, ___, è facilissimo.', a: ['anzi'], why: '*Anzi* reinforces.' },
            { q: 'Era stanco; ___, è andato a dormire.', a: ['infatti'], why: '*Infatti* confirms.' },
            { q: 'Da un ___ è comodo, dall’altro è caro.', a: ['lato'], why: '*Da un lato … dall’altro*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the connector with its function.', pairs: [
            ['tuttavia', 'contrast'],
            ['peraltro', 'adding a point'],
            ['infatti', 'confirming'],
            ['pertanto', 'concluding'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best connector.', items: [
            { q: 'Il piano è semplice; ___, nessuno lo capisce.', o: ['eppure', 'infatti', 'pertanto'], why: 'Contrast.' },
            { q: 'Era molto stanco; ___, è andato a dormire.', o: ['infatti', 'tuttavia', 'eppure'], why: 'Confirmation.' },
            { q: 'Il piano è fallito; ___, va cambiato.', o: ['pertanto', 'tuttavia', 'anzi'], why: 'Conclusion.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Say it with the word in brackets.', items: [
            { q: 'Il progetto è ambizioso, ma costa troppo.', cue: 'Il progetto è ambizioso; tuttavia', a: ['Il progetto è ambizioso; tuttavia, costa troppo.'], why: '*Tuttavia* replaces *ma*.' },
            { q: 'Non è difficile: è facilissimo.', cue: 'Non è difficile, anzi', a: ['Non è difficile, anzi, è facilissimo.'], why: '*Anzi* reinforces.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Era stanco; [tuttavia], è andato a dormire.', a: ['infatti'], why: 'The second clause confirms the first.' },
            { s: 'Il progetto è ambizioso; [infatti], costa troppo.', a: ['tuttavia'], why: 'The second clause contrasts.' },
            { s: 'Da un lato è comodo, [dal lato] è caro.', a: ['dall’altro', 'dall\'altro'], why: '*Da un lato … dall’altro*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'È pur vero che, resta il fatto che',
      about: 'Concede a point and then refute it.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'A strong argument **concedes** the other side before it **refutes** it. To concede: **è pur vero che** (*it is true that*), **certo** (*of course*), **non si può negare che** (*it cannot be denied that*). To refute: **ma resta il fatto che** (*but the fact remains that*), **sta di fatto che** (*the fact is that*), **non per questo** (*not for that reason*). *È pur vero che la città è cara; ma resta il fatto che offre molte opportunità.* *Non per questo bisogna rinunciare.* **Per quanto** + subjunctive means *however much*: *Per quanto si dica il contrario, la città è sicura.*' },
          { t: 'table', caption: 'Concession and refutation', explain: ['head', 'col1'], head: ['Expression', 'Function', 'Example'], rows: [
            ['è pur vero che', 'concession', 'È pur vero che la città è cara.'],
            ['non si può negare che', 'concession', 'Non si può negare che il problema esista.'],
            ['resta il fatto che', 'refutation', 'Resta il fatto che offre molte opportunità.'],
            ['sta di fatto che', 'refutation', 'Sta di fatto che i dati sono chiari.'],
            ['non per questo', 'refutation', 'Non per questo bisogna rinunciare.'],
            ['per quanto + congiuntivo', 'concession', 'Per quanto si dica il contrario, è sicura.'],
          ] },
          { t: 'tip', art: 'owl', md: 'After **è pur vero che** and **non si può negare che**, use the **indicative** for something true (*è pur vero che la città è cara*) or the **subjunctive** if the writer is distancing (*non si può negare che il problema esista*). **Per quanto** always takes the **subjunctive**. **Sta di fatto che** introduces a fact and takes the **indicative**: *Sta di fatto che i dati sono chiari.*' },
        ],
        [
          { t: 'examples', items: [
            { s: '**È pur vero che** la città è cara.', n: 'Concession.' },
            { s: '**Resta il fatto che** offre molte opportunità.', n: 'Refutation.' },
            { s: '**Non per questo** bisogna rinunciare.', n: 'Refutation.' },
            { s: '**Per quanto** si dica il contrario, la città è sicura.', n: 'However much is said.' },
            { s: '**Sta di fatto che** i dati sono chiari.', n: 'The fact is.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Concession or refutation? Sort the expressions.', groups: ['concession', 'refutation'], explain: ['groups'], items: [
            { s: 'È pur vero che la città è cara.', g: 0, why: 'Concession.' },
            { s: 'Non si può negare che il problema esista.', g: 0, why: 'Concession.' },
            { s: 'Certo, ci sono dei costi.', g: 0, why: 'Concession.' },
            { s: 'Resta il fatto che offre molte opportunità.', g: 1, why: 'Refutation.' },
            { s: 'Sta di fatto che i dati sono chiari.', g: 1, why: 'Refutation.' },
            { s: 'Non per questo bisogna rinunciare.', g: 1, why: 'Refutation.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'È pur ___ che la città è cara.', a: ['vero'], why: '*È pur vero che*.' },
            { q: 'Resta il ___ che offre molte opportunità.', a: ['fatto'], why: '*Resta il fatto che*.' },
            { q: 'Non per ___ bisogna rinunciare.', a: ['questo'], why: '*Non per questo*.' },
            { q: 'Per ___ si dica il contrario, la città è sicura.', a: ['quanto'], why: '*Per quanto* + subjunctive.' },
            { q: 'Per quanto si ___ il contrario, la città è sicura. (dire)', a: ['dica'], why: '*Per quanto* + subjunctive.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the expression with its meaning.', pairs: [
            ['è pur vero che', 'it is true that'],
            ['resta il fatto che', 'the fact remains that'],
            ['non per questo', 'not for that reason'],
            ['per quanto', 'however much'],
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it with the expression in brackets.', items: [
            { q: 'La città è cara. Offre molte opportunità.', cue: 'È pur vero che', a: ['È pur vero che la città è cara, ma offre molte opportunità.', 'È pur vero che la città è cara; ma offre molte opportunità.'], why: 'Concession, then refutation.' },
            { q: 'Si dice il contrario, ma la città è sicura.', cue: 'Per quanto', a: ['Per quanto si dica il contrario, la città è sicura.'], why: '*Per quanto* + subjunctive.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Per quanto si [dice] il contrario, la città è sicura.', a: ['dica'], why: '*Per quanto* + subjunctive.' },
            { s: 'Resta [fatto] che offre molte opportunità.', a: ['il fatto'], why: '*Resta il fatto che*.' },
            { s: 'Non per [quello] bisogna rinunciare.', a: ['questo'], why: 'The fixed phrase is *non per questo*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'È pur vero che la città è cara, ma offre molte opportunità.', why: 'Concession, then refutation.' },
            { a: 'Per quanto si dica il contrario, la città è sicura.', why: '*Per quanto* + subjunctive.' },
            { a: 'Non per questo bisogna rinunciare.', why: 'A refutation.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Domande retoriche, litote, antitesi',
      about: 'Learn the figures of a commentary.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'A newspaper **commentary** (editoriale) persuades with figures of speech. The **rhetorical question** asks without expecting an answer: *Chi può dirsi davvero sorpreso?* The **litote** says less to mean more by negating the opposite: *Non è un buon risultato* (it is a bad result), *Non è poco* (it is a lot). The **antithesis** sets two opposite ideas side by side: *Meno parole, più fatti.* The **triad** lists three items: *una città viva, aperta, giusta.* A commentary has a clear structure: an **opening** (the fact), a **thesis**, **arguments** with examples, and a **conclusion** that repeats the idea in a new way.' },
          { t: 'table', caption: 'Figures of a commentary', explain: ['head', 'col1'], head: ['Figure', 'Meaning', 'Example'], rows: [
            ['domanda retorica', 'a question with no expected answer', 'Chi può dirsi davvero sorpreso?'],
            ['litote', 'negating the opposite', 'Non è un buon risultato.'],
            ['antitesi', 'two opposite ideas', 'Meno parole, più fatti.'],
            ['tricolon', 'a list of three', 'Una città viva, aperta, giusta.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Use **one figure per paragraph**, not five: a commentary that is full of figures becomes tiring. The **litote** is typical of Italian: *non è male* means *it is good*, *non è poco* means *it is a lot*. The **rhetorical question** is more effective at the **end** of a paragraph. In a formal essay, avoid exclamation marks.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Chi può dirsi davvero sorpreso?**', n: 'A rhetorical question.' },
            { s: 'Non è **un buon risultato**.', n: 'A litote: it is a bad result.' },
            { s: '**Meno parole, più fatti.**', n: 'An antithesis.' },
            { s: 'Una città **viva, aperta, giusta**.', n: 'A list of three.' },
            { s: 'Non è **poco**.', n: 'A litote: it is a lot.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the figure with its example.', pairs: [
            ['domanda retorica', 'Chi può dirsi davvero sorpreso?'],
            ['litote', 'Non è un buon risultato.'],
            ['antitesi', 'Meno parole, più fatti.'],
            ['tricolon', 'Una città viva, aperta, giusta.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Che cosa significa *Non è un buon risultato*?', o: ['È un cattivo risultato.', 'È un ottimo risultato.', 'Non c’è risultato.'], why: 'A litote says less to mean more.' },
            { q: 'Che cosa significa *Non è poco*?', o: ['È molto.', 'È pochissimo.', 'È normale.'], why: 'A litote negates the opposite.' },
            { q: 'Quale frase è un’antitesi?', o: ['Meno parole, più fatti.', 'Una città viva, aperta, giusta.', 'Chi può dirsi sorpreso?'], why: 'Two opposite ideas.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Which figure? Sort the sentences.', groups: ['litote', 'antithesis'], explain: ['groups'], items: [
            { s: 'Non è un buon risultato.', g: 0, why: 'A litote.' },
            { s: 'Non è male.', g: 0, why: 'A litote.' },
            { s: 'Non è poco.', g: 0, why: 'A litote.' },
            { s: 'Meno parole, più fatti.', g: 1, why: 'An antithesis.' },
            { s: 'Non il tempo, ma la volontà.', g: 1, why: 'An antithesis.' },
            { s: 'Pochi in piazza, molti a casa.', g: 1, why: 'An antithesis.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Meno parole, ___ fatti.', a: ['più'], why: 'An antithesis.' },
            { q: 'Non è un ___ risultato. (the opposite of cattivo)', a: ['buon'], why: 'A litote.' },
            { q: 'Chi può dirsi davvero ___? (surprised)', a: ['sorpreso'], why: 'A rhetorical question.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Say it as a litote.', items: [
            { q: 'È un cattivo risultato.', cue: 'Non è', a: ['Non è un buon risultato.'], why: 'The litote negates the opposite.' },
            { q: 'È molto.', cue: 'Non è', a: ['Non è poco.'], why: 'The litote negates the opposite.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Chi può dirsi davvero sorpreso?', why: 'A rhetorical question.' },
            { a: 'Meno parole, più fatti.', why: 'An antithesis.' },
            { a: 'Non è un buon risultato.', why: 'A litote.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Un commento di giornale',
      about: 'Read a commentary and see how the argument is built.',
      art: 'cactus',
      spreads: [
        [
          { t: 'reading', title: 'La biblioteca di quartiere', md: 'Il comune ha deciso di chiudere la biblioteca di quartiere. Da un lato, i conti sono in ordine; dall’altro, il quartiere perde un luogo vivo.\n\nÈ pur vero che i prestiti calano da anni. Non si può negare che le risorse siano limitate. Ma resta il fatto che una biblioteca non è un negozio: non si misura con gli incassi. Chi può dirsi davvero sorpreso se, chiusa la biblioteca, i ragazzi non hanno più dove studiare?\n\nPer quanto si dica il contrario, il risparmio è modesto: poche migliaia di euro l’anno. Non è poco per un bilancio piccolo, ma non è nulla di fronte a ciò che si perde. Meno prestiti, certo; tuttavia più isolamento, più solitudine, meno occasioni.\n\nPertanto, la domanda non è se il comune possa permettersela, ma se possa permettersi di farne a meno. Una città viva, aperta, giusta non chiude i suoi luoghi di incontro.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Il comune ha deciso di chiudere la biblioteca.', a: 't', why: '*Il comune ha deciso di chiudere la biblioteca di quartiere.*' },
            { q: 'L’autore pensa che il risparmio sia grande.', a: 'f', why: '*Il risparmio è modesto.*' },
            { q: 'I prestiti calano da anni.', a: 't', why: '*I prestiti calano da anni.*' },
            { q: 'Secondo l’autore, una biblioteca non si misura con gli incassi.', a: 't', why: '*Non è un negozio: non si misura con gli incassi.*' },
            { q: 'L’autore propone una biblioteca digitale.', a: 'ng', why: 'The text does not say.' },
            { q: 'I ragazzi non avrebbero più dove studiare.', a: 't', why: '*I ragazzi non hanno più dove studiare.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Come si apre il commento?', o: ['Con il fatto e due lati.', 'Con una citazione.', 'Con una storia.'], why: '*Da un lato … dall’altro.*' },
            { q: 'Che cosa concede l’autore?', o: ['I prestiti calano e le risorse sono limitate.', 'La biblioteca è inutile.', 'Il comune ha ragione.'], why: '*È pur vero … non si può negare.*' },
            { q: 'Che cosa dice la conclusione?', o: ['Una città viva non chiude i luoghi di incontro.', 'Il comune deve risparmiare.', 'La biblioteca deve costare meno.'], why: 'The last sentence.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the connectors of argument.', items: [
            { s: '[Da un lato], i conti sono in ordine; [dall’altro], il quartiere perde un luogo vivo.', why: '*Da un lato … dall’altro*.' },
            { s: '[È pur vero che] i prestiti calano. Ma [resta il fatto che] una biblioteca non è un negozio.', why: 'Concession and refutation.' },
            { s: 'Meno prestiti, certo; [tuttavia] più isolamento. [Pertanto], la domanda non è se il comune possa permettersela.', why: '*Tuttavia* and *pertanto*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Da un lato i conti sono in ordine; ___, il quartiere perde un luogo vivo.', a: ['dall’altro', 'dall\'altro'], why: '*Da un lato … dall’altro*.' },
            { q: 'Per quanto si ___ il contrario, il risparmio è modesto. (dire)', a: ['dica'], why: '*Per quanto* + subjunctive.' },
            { q: 'Chi può dirsi davvero ___? (surprised)', a: ['sorpreso'], why: 'The rhetorical question.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Resta il fatto che una biblioteca non è un negozio.', why: 'A refutation.' },
            { a: 'Una città viva, aperta, giusta non chiude i suoi luoghi di incontro.', why: 'The closing sentence.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Il progetto è ambizioso; ___, costa troppo.', o: ['tuttavia', 'infatti', 'pertanto'], why: 'Contrast.' },
      { q: 'Era stanco; ___, è andato a dormire.', o: ['infatti', 'tuttavia', 'eppure'], why: 'Confirmation.' },
      { q: 'Per quanto si ___ il contrario, la città è sicura.', o: ['dica', 'dice', 'dirà'], why: '*Per quanto* + subjunctive.' },
      { q: 'Che cosa significa *Non è poco*?', o: ['È molto.', 'È pochissimo.', 'È normale.'], why: 'A litote.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'È pur ___ che la città è cara.', a: ['vero'], why: '*È pur vero che*.' },
      { q: 'Resta il ___ che offre molte opportunità.', a: ['fatto'], why: '*Resta il fatto che*.' },
      { q: 'Meno parole, ___ fatti.', a: ['più'], why: 'An antithesis.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the connector with its function.', pairs: [
      ['tuttavia', 'contrast'],
      ['peraltro', 'adding a point'],
      ['infatti', 'confirming'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Say it with the expression in brackets.', items: [
      { q: 'Il progetto è ambizioso, ma costa troppo.', cue: 'Il progetto è ambizioso; tuttavia', a: ['Il progetto è ambizioso; tuttavia, costa troppo.'], why: '*Tuttavia* replaces *ma*.' },
      { q: 'È un cattivo risultato.', cue: 'Non è', a: ['Non è un buon risultato.'], why: 'The litote negates the opposite.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Per quanto si [dice] il contrario, la città è sicura.', a: ['dica'], why: '*Per quanto* + subjunctive.' },
      { s: 'Era stanco; [tuttavia], è andato a dormire.', a: ['infatti'], why: 'The second clause confirms the first.' },
    ] },
  ],
};
