// Italian C1, unit 8 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u8',
  title: 'Reporting, quoting and summarising',
  goal: 'Report what others say with precision. Learn reporting verbs with nuance, the tenses of indirect speech, the condizionale of reported doubt, ways to name a source, and how to summarise a text.',
  art: 'owl',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['reported speech', 'sources', 'summary', 'press', 'hedging'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Affermare, sostenere, ammettere',
      about: 'Choose reporting verbs that show attitude.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'A press article rarely says only **dire**. The verb shows the **attitude** of the speaker. **Affermare** and **dichiarare** are neutral and formal: *Il ministro ha dichiarato che …* **Sostenere** means *to maintain* and suggests an opinion that may be disputed: *Sostiene di non saperne nulla.* **Ammettere** means *to admit*: *Ha ammesso di aver sbagliato.* **Sottolineare** means *to stress*: *Ha sottolineato la gravità del problema.* **Negare** means *to deny*: *Nega di aver partecipato.* **Deplorare** means *to condemn*: *Ha deplorato la decisione.* **Pretendere** means *to demand*, not *to pretend*: *Pretende di avere ragione.*' },
          { t: 'table', caption: 'Reporting verbs', explain: ['head', 'col1'], head: ['Verb', 'Meaning', 'Example'], rows: [
            ['affermare / dichiarare', 'to state (neutral)', 'Il ministro ha dichiarato che il piano è pronto.'],
            ['sostenere', 'to maintain', 'Sostiene di non saperne nulla.'],
            ['ammettere', 'to admit', 'Ha ammesso di aver sbagliato.'],
            ['sottolineare', 'to stress', 'Ha sottolineato la gravità del problema.'],
            ['negare', 'to deny', 'Nega di aver partecipato.'],
            ['deplorare', 'to condemn', 'Ha deplorato la decisione.'],
            ['pretendere', 'to demand', 'Pretende di avere ragione.'],
          ] },
          { t: 'tip', art: 'owl', md: 'When the subject of the two verbs is the **same person**, use **di + infinitive**: *Sostiene di non saperne nulla*, *Ha ammesso di aver sbagliato*. When the subjects differ, use **che + clause**: *Ha ammesso che il piano era sbagliato*. **Pretendere** is a **false friend** of *to pretend*: Italian says **fingere** for that. After **negare**, both **di + infinitive** and **che + subjunctive** are possible.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Il ministro **ha dichiarato** che il piano è pronto.', n: 'Neutral.' },
            { s: '**Sostiene di** non saperne nulla.', n: 'The same subject.' },
            { s: '**Ha ammesso di** aver sbagliato.', n: 'The same subject.' },
            { s: '**Ha sottolineato** la gravità del problema.', n: 'To stress.' },
            { s: '**Pretende di** avere ragione.', n: 'To demand.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the verb with its meaning.', pairs: [
            ['sostenere', 'to maintain'],
            ['ammettere', 'to admit'],
            ['negare', 'to deny'],
            ['pretendere', 'to demand'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Sostiene ___ non saperne nulla.', a: ['di'], why: 'The same subject: *di* + infinitive.' },
            { q: 'Ha ___ di aver sbagliato. (to admit)', a: ['ammesso'], why: '*Ammettere*.' },
            { q: 'Nega ___ aver partecipato.', a: ['di'], why: '*Negare di* + infinitive.' },
            { q: 'Ha ___ la gravità del problema. (to stress)', a: ['sottolineato'], why: '*Sottolineare*.' },
            { q: 'Il ministro ha ___ che il piano è pronto. (to state)', a: ['dichiarato', 'affermato'], why: 'A neutral verb.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best verb.', items: [
            { q: 'Ha ___ la decisione: la trova ingiusta.', o: ['deplorato', 'ammesso', 'negato'], why: '*Deplorare* = to condemn.' },
            { q: '___ di avere ragione, ma non ha prove.', o: ['Pretende', 'Finge', 'Nega'], why: '*Pretendere* = to demand, to claim.' },
            { q: 'Ha ___ di aver sbagliato: si scusa.', o: ['ammesso', 'negato', 'deplorato'], why: '*Ammettere* = to admit.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Report the sentence with the verb in brackets.', items: [
            { q: 'Ho sbagliato, dice Luca.', cue: 'Luca ammette', a: ['Luca ammette di aver sbagliato.'], why: 'The same subject: *di* + infinitive.' },
            { q: 'Non so nulla, dice Anna.', cue: 'Anna sostiene', a: ['Anna sostiene di non saperne nulla.', 'Anna sostiene di non sapere nulla.'], why: 'The same subject: *di* + infinitive.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Sostiene [che] non saperne nulla.', a: ['di'], why: 'The same subject: *di* + infinitive.' },
            { s: 'Ha [ammettere] di aver sbagliato.', a: ['ammesso'], why: 'The participle of *ammettere*.' },
            { s: 'Ha [sottolineare] la gravità del problema.', a: ['sottolineato'], why: 'The participle of *sottolineare*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Il ministro ha dichiarato che il piano è pronto.', why: 'A neutral verb.' },
            { a: 'Luca ammette di aver sbagliato.', why: '*Ammettere di* + infinitive.' },
            { a: 'Ha sottolineato la gravità del problema.', why: '*Sottolineare*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Il discorso indiretto e il condizionale composto',
      about: 'Move the tenses correctly in indirect speech.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'In **indirect speech**, if the reporting verb is in the **past**, the tenses move back. The **present** becomes the **imperfetto**: *“Sono stanco”* → *Ha detto che era stanco.* The **passato prossimo** becomes the **trapassato**: *“Ho finito”* → *Ha detto che aveva finito.* The **future** becomes the **condizionale composto**: *“Verrò domani”* → *Ha detto che sarebbe venuto il giorno dopo.* Time words change too: **oggi** becomes **quel giorno**, **domani** becomes **il giorno dopo**, **ieri** becomes **il giorno prima**, **qui** becomes **lì**. The **imperative** becomes **di + infinitive**: *“Vieni!”* → *Mi ha detto di venire.*' },
          { t: 'table', caption: 'Indirect speech', explain: ['head', 'col1'], head: ['Direct', 'Indirect'], rows: [
            ['“Sono stanco.”', 'Ha detto che era stanco.'],
            ['“Ho finito.”', 'Ha detto che aveva finito.'],
            ['“Verrò domani.”', 'Ha detto che sarebbe venuto il giorno dopo.'],
            ['“Vieni qui!”', 'Mi ha detto di andare lì.'],
            ['oggi / ieri / domani', 'quel giorno / il giorno prima / il giorno dopo'],
          ] },
          { t: 'tip', art: 'owl', md: 'If the reporting verb is in the **present** (*Dice che è stanco*), the tenses do **not** move. The **condizionale composto** is the Italian *future in the past*: *aveva promesso che sarebbe venuto*. The **passato remoto** and the **imperfetto** stay the same in indirect speech: *“Quando ero giovane, vivevo a Roma”* → *Ha detto che quando era giovane viveva a Roma.* A reported **question** uses **se**: *Mi ha chiesto se venivo.*' },
        ],
        [
          { t: 'examples', items: [
            { s: '“Sono stanco.” → Ha detto che **era** stanco.', n: 'Present to imperfetto.' },
            { s: '“Ho finito.” → Ha detto che **aveva finito**.', n: 'Passato prossimo to trapassato.' },
            { s: '“Verrò domani.” → Ha detto che **sarebbe venuto** il giorno dopo.', n: 'Future to condizionale composto.' },
            { s: '“Vieni qui!” → Mi ha detto **di andare lì**.', n: 'Imperative and place word.' },
            { s: '“Vieni?” → Mi ha chiesto **se** venivo.', n: 'A reported question.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the direct tense with the indirect one.', pairs: [
            ['sono', 'ero'],
            ['ho finito', 'avevo finito'],
            ['verrò', 'sarei venuto'],
            ['domani', 'il giorno dopo'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: '“Sono stanco.” → Ha detto che ___ stanco. (essere)', a: ['era'], why: 'Present to imperfetto.' },
            { q: '“Ho finito.” → Ha detto che ___ finito. (avere)', a: ['aveva'], why: 'Passato prossimo to trapassato.' },
            { q: '“Verrò domani.” → Ha detto che ___ venuto il giorno dopo. (essere, condizionale)', a: ['sarebbe'], why: 'Future to condizionale composto.' },
            { q: '“Vieni qui!” → Mi ha detto ___ andare lì.', a: ['di'], why: 'The imperative becomes *di* + infinitive.' },
            { q: '“Vieni?” → Mi ha chiesto ___ venivo.', a: ['se'], why: 'A reported question.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: '“Vado a Roma.” → Ha detto che ___ a Roma.', o: ['andava', 'va', 'andrà'], why: 'Present to imperfetto.' },
            { q: '“Telefonerò domani.” → Ha detto che ___ il giorno dopo.', o: ['avrebbe telefonato', 'telefonava', 'telefonerà'], why: 'Future to condizionale composto.' },
            { q: '“Ieri ero a casa.” → Ha detto che il giorno prima ___ a casa.', o: ['era stato', 'è stato', 'sarebbe stato'], why: 'Imperfetto to trapassato.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Report the sentence.', items: [
            { q: '“Verrò domani.” Ha detto che', cue: 'Ha detto che', a: ['Ha detto che sarebbe venuto il giorno dopo.', 'Ha detto che sarebbe venuta il giorno dopo.'], why: 'Future to condizionale composto.' },
            { q: '“Ho perso le chiavi.” Ha detto che', cue: 'Ha detto che', a: ['Ha detto che aveva perso le chiavi.'], why: 'Passato prossimo to trapassato.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Ieri ha detto che [è] stanco.', a: ['era'], why: 'The reporting verb is in the past.' },
            { s: 'Ha detto che [verrà] il giorno dopo.', a: ['sarebbe venuto'], why: 'Future to condizionale composto.' },
            { s: 'Mi ha chiesto [che] venivo.', a: ['se'], why: 'A reported question uses *se*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Ha detto che sarebbe venuto il giorno dopo.', why: 'Future to condizionale composto.' },
            { a: 'Mi ha chiesto se venivo.', why: 'A reported question.' },
            { a: 'Ha detto che aveva finito.', why: 'Passato prossimo to trapassato.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Le fonti e la cautela',
      about: 'Name a source and show doubt with the condizionale.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'A journalist names the **source** and shows how sure the news is. To name a source: **secondo**, **stando a**, **a detta di** and **come riferisce**: *Secondo il comune, i lavori finiranno a maggio.* *Stando alle prime notizie, non ci sono feriti.* To show caution: **sembra che**, **pare che**, **a quanto pare**, **risulta che**: *A quanto pare, il sindaco si dimetterà.* The **condizionale of reported doubt** is typical of the press: **Il sindaco si sarebbe dimesso** means *the mayor has reportedly resigned* and the journalist does not guarantee the news. The same form can be present: **L’incendio sarebbe doloso.**' },
          { t: 'table', caption: 'Sources and caution', explain: ['head', 'col1'], head: ['Expression', 'Use', 'Example'], rows: [
            ['secondo / stando a', 'naming a source', 'Secondo il comune, i lavori finiranno a maggio.'],
            ['a detta di', 'according to what someone says', 'A detta del sindaco, il piano è pronto.'],
            ['a quanto pare / pare che', 'caution', 'A quanto pare, il sindaco si dimetterà.'],
            ['risulta che', 'official finding', 'Risulta che nessuno sia rimasto ferito.'],
            ['condizionale', 'reported doubt', 'Il sindaco si sarebbe dimesso.'],
          ] },
          { t: 'tip', art: 'owl', md: 'The **condizionale of reported doubt** appears in headlines and news: *Il ministro avrebbe lasciato l’incarico.* Do not use it in your own opinion or in a plain fact. **Secondo me** is an opinion; **secondo il comune** is a source. **Sembra che** and **pare che** take the **subjunctive** in careful writing: *Sembra che il sindaco si sia dimesso.* **A quanto pare** is followed by the indicative.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Secondo** il comune, i lavori finiranno a maggio.', n: 'Naming a source.' },
            { s: '**Stando alle** prime notizie, non ci sono feriti.', n: 'Naming a source.' },
            { s: '**A quanto pare**, il sindaco si dimetterà.', n: 'Caution.' },
            { s: 'Il sindaco **si sarebbe dimesso**.', n: 'Reported doubt.' },
            { s: 'L’incendio **sarebbe** doloso.', n: 'Reported doubt in the present.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Source or caution? Sort the expressions.', groups: ['source', 'caution'], explain: ['groups'], items: [
            { s: 'Secondo il comune', g: 0, why: 'A source.' },
            { s: 'Stando alle prime notizie', g: 0, why: 'A source.' },
            { s: 'A detta del sindaco', g: 0, why: 'A source.' },
            { s: 'A quanto pare', g: 1, why: 'Caution.' },
            { s: 'Sembra che', g: 1, why: 'Caution.' },
            { s: 'Pare che', g: 1, why: 'Caution.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: '___ il comune, i lavori finiranno a maggio.', a: ['Secondo'], why: 'Naming a source.' },
            { q: 'Stando ___ prime notizie, non ci sono feriti.', a: ['alle'], why: '*Stando a* + article.' },
            { q: 'A quanto ___, il sindaco si dimetterà.', a: ['pare'], why: '*A quanto pare*.' },
            { q: 'Il sindaco si ___ dimesso. (condizionale composto, reported doubt)', a: ['sarebbe'], why: 'Reported doubt.' },
            { q: 'Sembra che il sindaco si ___ dimesso. (essere, congiuntivo)', a: ['sia'], why: '*Sembra che* + subjunctive.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best form.', items: [
            { q: 'Il ministro ___ lasciato l’incarico, ma non è confermato.', o: ['avrebbe', 'ha', 'aveva'], why: 'Reported doubt.' },
            { q: 'Sembra che il piano ___ pronto.', o: ['sia', 'è', 'sarà'], why: '*Sembra che* + subjunctive.' },
            { q: '___ alle prime notizie, non ci sono feriti.', o: ['Stando', 'Standoci', 'Stare'], why: '*Stando a*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Report the news with caution.', items: [
            { q: 'Il sindaco si è dimesso. (reported doubt)', cue: 'Il sindaco', a: ['Il sindaco si sarebbe dimesso.'], why: 'Condizionale composto.' },
            { q: 'L’incendio è doloso. (reported doubt)', cue: 'L’incendio', a: ['L’incendio sarebbe doloso.', 'L\'incendio sarebbe doloso.'], why: 'Condizionale of reported doubt.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Sembra che il sindaco [si è] dimesso.', a: ['si sia'], why: '*Sembra che* + subjunctive.' },
            { s: '[Stando] il comune, i lavori finiranno a maggio.', a: ['Secondo'], why: '*Stando a* needs a preposition; *secondo* does not.' },
            { s: 'Il ministro [ha] lasciato l’incarico, ma non è confermato.', a: ['avrebbe'], why: 'The news is not confirmed.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Secondo il comune, i lavori finiranno a maggio.', why: 'Naming a source.' },
            { a: 'Il sindaco si sarebbe dimesso.', why: 'Reported doubt.' },
            { a: 'A quanto pare, il sindaco si dimetterà.', why: 'Caution.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Un articolo e il suo riassunto',
      about: 'Read a press article and its summary.',
      art: 'owl',
      spreads: [
        [
          { t: 'reading', title: 'Il ponte chiuso', md: 'ARTICOLO\n\nIl ponte sul fiume resterà chiuso fino a settembre. Lo ha annunciato ieri il sindaco, che ha dichiarato di aver ricevuto una relazione dei tecnici. Secondo il documento, alcune travi presentano segni di cedimento. Il sindaco ha sottolineato che non c’è alcun pericolo immediato, ma ha ammesso che i lavori saranno lunghi.\n\nIl comitato dei residenti nega che i lavori fossero necessari e sostiene che la chiusura danneggerà i negozi. Stando alle prime stime, il traffico sarebbe già aumentato del 30 per cento sulle strade vicine. A quanto pare, l’assessore ai lavori pubblici si sarebbe dimesso, ma la notizia non è stata confermata.\n\nRIASSUNTO\n\nIl sindaco ha annunciato la chiusura del ponte fino a settembre per il cedimento di alcune travi. I residenti contestano la necessità dei lavori e temono per i negozi. Resta incerta la notizia di una dimissione in giunta.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Il ponte resterà chiuso fino a settembre.', a: 't', why: '*Resterà chiuso fino a settembre.*' },
            { q: 'Il sindaco dice che c’è un pericolo immediato.', a: 'f', why: '*Non c’è alcun pericolo immediato.*' },
            { q: 'Il comitato dei residenti pensa che i lavori fossero necessari.', a: 'f', why: '*Nega che i lavori fossero necessari.*' },
            { q: 'La dimissione dell’assessore è confermata.', a: 'f', why: '*La notizia non è stata confermata.*' },
            { q: 'Il traffico sulle strade vicine sarebbe aumentato del 30 per cento.', a: 't', why: '*Stando alle prime stime.*' },
            { q: 'Il ponte è stato costruito nel 1950.', a: 'ng', why: 'The text does not say.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Perché il ponte è chiuso?', o: ['Alcune travi presentano segni di cedimento.', 'C’è una gara.', 'Cade la neve.'], why: '*Alcune travi presentano segni di cedimento.*' },
            { q: 'Che cosa ammette il sindaco?', o: ['I lavori saranno lunghi.', 'Ha sbagliato.', 'Si dimette.'], why: '*Ha ammesso che i lavori saranno lunghi.*' },
            { q: 'Come fa il riassunto a presentare la dimissione?', o: ['Come una notizia incerta.', 'Come un fatto.', 'Non la cita.'], why: '*Resta incerta la notizia di una dimissione.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the reporting verbs and the sources.', items: [
            { s: 'Il sindaco [ha dichiarato] di aver ricevuto una relazione. [Secondo] il documento, alcune travi presentano segni di cedimento.', why: 'A reporting verb and a source.' },
            { s: 'Il sindaco [ha sottolineato] che non c’è pericolo, ma [ha ammesso] che i lavori saranno lunghi.', why: 'Two reporting verbs.' },
            { s: 'Il comitato [nega] che i lavori fossero necessari e [sostiene] che la chiusura danneggerà i negozi.', why: 'Two reporting verbs.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Il sindaco ha ___ di aver ricevuto una relazione. (dichiarare)', a: ['dichiarato'], why: '*Dichiarare di* + infinitive.' },
            { q: '___ alle prime stime, il traffico sarebbe aumentato.', a: ['Stando'], why: '*Stando a*.' },
            { q: 'L’assessore si ___ dimesso, ma non è confermato. (condizionale composto)', a: ['sarebbe'], why: 'Reported doubt.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Il sindaco ha annunciato la chiusura del ponte fino a settembre.', why: 'The summary opens with the main fact.' },
            { a: 'I residenti contestano la necessità dei lavori.', why: 'The summary uses a nominal style.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Sostiene ___ non saperne nulla.', o: ['di', 'che', 'a'], why: 'The same subject: *di* + infinitive.' },
      { q: '“Sono stanco.” → Ha detto che ___ stanco.', o: ['era', 'è', 'sarà'], why: 'Present to imperfetto.' },
      { q: '“Verrò domani.” → Ha detto che ___ venuto il giorno dopo.', o: ['sarebbe', 'sarà', 'era'], why: 'Future to condizionale composto.' },
      { q: 'Il ministro ___ lasciato l’incarico, ma non è confermato.', o: ['avrebbe', 'ha', 'aveva'], why: 'Reported doubt.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Ha ___ di aver sbagliato. (to admit)', a: ['ammesso'], why: '*Ammettere*.' },
      { q: 'Mi ha chiesto ___ venivo.', a: ['se'], why: 'A reported question.' },
      { q: 'A quanto ___, il sindaco si dimetterà.', a: ['pare'], why: '*A quanto pare*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the verb with its meaning.', pairs: [
      ['sostenere', 'to maintain'],
      ['negare', 'to deny'],
      ['pretendere', 'to demand'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Report the sentence.', items: [
      { q: '“Ho perso le chiavi.” Ha detto che', cue: 'Ha detto che', a: ['Ha detto che aveva perso le chiavi.'], why: 'Passato prossimo to trapassato.' },
      { q: 'Il sindaco si è dimesso. (reported doubt)', cue: 'Il sindaco', a: ['Il sindaco si sarebbe dimesso.'], why: 'Condizionale composto.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Ha detto che [verrà] il giorno dopo.', a: ['sarebbe venuto'], why: 'Future to condizionale composto.' },
      { s: 'Sembra che il sindaco [si è] dimesso.', a: ['si sia'], why: '*Sembra che* + subjunctive.' },
    ] },
  ],
};
