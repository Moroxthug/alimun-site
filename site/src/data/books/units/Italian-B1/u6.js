// Italian B1, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'News and daily life',
  goal: 'Understand the news and talk about what is done and what people say. Learn the si impersonale and the si passivo, the passive with essere and venire, and reported speech.',
  art: 'pretzel',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['si impersonale', 'si passivo', 'passive', 'reported speech', 'news'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Si dice che…',
      about: 'Say what people do in general with the si impersonale and the si passivo.',
      art: 'pretzel',
      spreads: [
        [
          { t: 'text', md: 'To say what people do in general, Italian uses **si** with the third person. With a verb that has no object, or with a singular object, the verb is **singular**: *In Italia si cena tardi. Qui si parla italiano.* With a **plural object**, the verb is **plural**, because the object is really the subject: *Si vendono biglietti. Si affittano camere.* This is the **si passivo**. In the passato prossimo, use **si è** and the participle: *Ieri si è lavorato molto.* With a plural object: *Si sono venduti molti biglietti.*' },
          { t: 'table', caption: 'Si impersonale and si passivo', explain: ['head', 'col1'], head: ['Type', 'Rule', 'Example'], rows: [
            ['si impersonale', 'si + 3rd person singular', 'In Italia si cena tardi.'],
            ['si passivo, singular', 'si + 3rd person singular', 'Qui si parla italiano.'],
            ['si passivo, plural', 'si + 3rd person plural', 'Si vendono biglietti.'],
            ['passato prossimo', 'si è / si sono + participle', 'Ieri si è lavorato molto.'],
            ['with a reflexive verb', 'ci si + 3rd person singular', 'Ci si alza presto.'],
          ] },
          { t: 'tip', art: 'owl', md: 'When the verb is already a form of *essere*, the adjective is **plural**: *Quando si è stanchi, si dorme male.* You see **si** on shop windows and notices: *Si affittano camere. Non si può fumare.*' },
        ],
        [
          { t: 'examples', items: [
            { s: 'In Italia **si cena** tardi.', n: 'People in general: *si cena*.' },
            { s: 'Qui **si parla** italiano.', n: 'A singular noun: a singular verb.' },
            { s: 'Qui **si parlano** due lingue.', n: 'A plural noun: a plural verb.' },
            { s: '**Si affittano** camere.', n: 'A notice: *camere* is plural.' },
            { s: 'Ieri **si è lavorato** molto.', n: 'The passato prossimo: *si è* + participle.' },
          ] },
          { t: 'dialogue', title: 'In Italia', lines: [
            { who: 'Paolo', s: 'In Italia a che ora si cena?' },
            { who: 'Sara', s: 'Di solito si cena verso le otto, ma in estate si cena anche più tardi.' },
            { who: 'Paolo', s: 'E si può pagare con la carta nei ristoranti?' },
            { who: 'Sara', s: 'Sì, quasi sempre, ma nei piccoli bar si preferiscono i contanti.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'In Italia ___ cena tardi.', a: ['si'], why: 'People in general: *si cena*.' },
            { q: 'Qui si ___ italiano. (parlare)', a: ['parla'], why: '*Italiano* is singular: *si parla*.' },
            { q: 'In questo negozio si ___ biglietti. (vendere)', a: ['vendono'], why: '*Biglietti* is plural: *si vendono*.' },
            { q: 'Si ___ camerieri. (cercare)', a: ['cercano'], why: '*Camerieri* is plural: *si cercano*.' },
            { q: 'Ieri si ___ molto. (lavorare)', a: ['è lavorato'], why: 'The passato prossimo: *si è lavorato*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Si ___ camere in affitto.', o: ['affittano', 'affitta', 'affittiamo'], why: '*Camere* is plural: *si affittano*.' },
            { q: 'Qui si ___ due lingue.', o: ['parlano', 'parla', 'parlate'], why: '*Due lingue* is plural: *si parlano*.' },
            { q: 'In estate si ___ al mare.', o: ['va', 'vanno', 'andiamo'], why: 'No object, so singular: *si va*.' },
            { q: 'Ieri si ___ venduti molti biglietti.', o: ['sono', 'è', 'hanno'], why: 'A plural object: *si sono venduti*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it with si.', items: [
            { q: 'La gente mangia tardi in Spagna.', a: ['In Spagna si mangia tardi.'], why: '*La gente mangia* → *si mangia*.' },
            { q: 'Vendono biglietti qui.', a: ['Qui si vendono biglietti.', 'Si vendono biglietti qui.'], why: 'A plural object: *si vendono*.' },
            { q: 'Cercano un cameriere.', a: ['Si cerca un cameriere.'], why: 'A singular object: *si cerca*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Si [vende] biglietti.', a: ['vendono'], why: '*Biglietti* is plural: *si vendono*.' },
            { s: 'Qui [ci] parla italiano.', a: ['si'], why: 'People in general: *si parla*.' },
            { s: 'Ieri si [ha] lavorato molto.', a: ['è'], why: 'With *si*, the auxiliary is *essere*: *si è lavorato*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'In Italia si cena tardi.', why: '*Si* + 3rd person singular.' },
            { a: 'Si affittano camere in centro.', why: '*Camere* is plural: *si affittano*.' },
            { a: 'Non si può fumare qui.', why: '*Non si può* + infinitive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'The passive',
      about: 'Use essere and venire with the participle, and say who does it with da.',
      art: 'dragon',
      spreads: [
        [
          { t: 'text', md: 'In the **passive**, the object of an active sentence becomes the subject. Active: *Il comune organizza la festa.* Passive: *La festa è organizzata dal comune.* The passive is made with **essere** (or **venire**) and the **past participle**, which agrees with the subject: *La lettera è stata scritta. I biglietti sono stati venduti.* The person who does the action is introduced by **da**: *scritta da un amico*. **Venire** replaces *essere* only in simple tenses: *La festa viene organizzata dal comune.*' },
          { t: 'table', caption: 'The passive in different tenses', explain: ['head'], head: ['Tense', 'with essere', 'with venire'], rows: [
            ['present', 'è letto', 'viene letto'],
            ['imperfetto', 'era letto', 'veniva letto'],
            ['passato prossimo', 'è stato letto', '(not used)'],
            ['future', 'sarà letto', 'verrà letto'],
          ] },
          { t: 'tip', art: 'owl', md: 'In the news, the passive is very common: *Il ponte sarà chiuso per due mesi. Due persone sono state portate in ospedale.* The agent is often left out. To say something **must** be done, you can use **andare**: *Il modulo va compilato* (the form must be filled in).' },
        ],
        [
          { t: 'examples', items: [
            { s: 'La festa **è organizzata** dal comune.', n: 'Present passive.' },
            { s: 'La lettera **è stata scritta** da un amico.', n: 'Passato prossimo: *è stata* agrees with *lettera*.' },
            { s: 'I biglietti **sono stati venduti** ieri.', n: 'Plural: *sono stati venduti*.' },
            { s: 'Il ponte **sarà riparato** domani.', n: 'Future passive.' },
            { s: 'La mostra **viene visitata** da molte persone.', n: '*Venire* replaces *essere*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the active sentence with the passive one.', pairs: [
            ['Il comune organizza la festa.', 'La festa è organizzata dal comune.'],
            ['Hanno chiuso la strada.', 'La strada è stata chiusa.'],
            ['Riparano il tetto.', 'Il tetto viene riparato.'],
            ['Venderanno i biglietti domani.', 'I biglietti saranno venduti domani.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'La festa è ___ dal comune. (organizzare)', a: ['organizzata'], why: 'It agrees with *la festa*: *organizzata*.' },
            { q: 'I biglietti sono stati ___ ieri. (vendere)', a: ['venduti'], why: 'It agrees with *i biglietti*: *venduti*.' },
            { q: 'La lettera è stata ___ da un amico. (scrivere)', a: ['scritta'], why: 'It agrees with *la lettera*: *scritta*.' },
            { q: 'Il ponte ___ riparato domani. (essere, future)', a: ['sarà'], why: 'Future passive: *sarà riparato*.' },
            { q: 'La mostra ___ visitata da molte persone. (venire)', a: ['viene'], why: '*Venire* + participle.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Le strade ___ chiuse per la neve.', o: ['sono state', 'hanno', 'sono stati'], why: '*Le strade* is feminine plural: *sono state chiuse*.' },
            { q: 'La casa ___ costruita nel 1950.', o: ['è stata', 'ha', 'è stato'], why: '*La casa* is feminine: *è stata costruita*.' },
            { q: 'Il libro è scritto ___ una giornalista.', o: ['da', 'di', 'per'], why: 'The agent: *da*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Turn the sentence into the passive.', items: [
            { q: 'Il comune organizza la festa.', a: ['La festa è organizzata dal comune.', 'La festa viene organizzata dal comune.'], why: 'The object becomes the subject; *da* introduces the agent.' },
            { q: 'Hanno chiuso la strada.', a: ['La strada è stata chiusa.'], why: 'Passato prossimo passive: *è stata chiusa*.' },
            { q: 'Un architetto ha costruito il ponte.', a: ['Il ponte è stato costruito da un architetto.'], why: '*Il ponte è stato costruito da …*' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'I biglietti sono stati [venduto].', a: ['venduti'], why: 'The participle agrees with *i biglietti*: *venduti*.' },
            { s: 'La lettera è stata [scritto].', a: ['scritta'], why: 'It agrees with *la lettera*: *scritta*.' },
            { s: 'Il libro è scritto [di] una giornalista.', a: ['da'], why: 'The agent is introduced by *da*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'La festa è organizzata dal comune.', why: 'The subject is *la festa*.' },
            { a: 'I biglietti sono stati venduti ieri.', why: 'Passato prossimo passive.' },
            { a: 'Il ponte sarà riparato domani.', why: 'Future passive.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the passive verbs.', items: [
            { s: 'Il ponte [sarà chiuso] per lavori e la strada [viene riparata] di notte.', why: '*Sarà chiuso* and *viene riparata* are passive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Ha detto che…',
      about: 'Report what someone said and asked, with the tense changes.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'To report what someone said, use **che** and change the person: *Marco dice: «Sono stanco»* becomes *Marco dice che è stanco.* When the reporting verb is in the **present** (*dice, spiega*), the tenses stay the same. When it is in the **past** (*ha detto, ha spiegato*), the verb usually moves one step back: the present becomes the **imperfetto**, the passato prossimo becomes the **trapassato**, and the future becomes the **condizionale passato**. A command becomes **di + infinitive**, and a yes/no question becomes **se**.' },
          { t: 'table', caption: 'Direct and reported speech', explain: ['head'], head: ['Direct speech', 'Reported speech'], rows: [
            ['«Sono stanco.»', 'Ha detto che era stanco.'],
            ['«Ho mangiato.»', 'Ha detto che aveva mangiato.'],
            ['«Verrò domani.»', 'Ha detto che sarebbe venuto il giorno dopo.'],
            ['«Aspetta qui!»', 'Mi ha detto di aspettare lì.'],
            ['«Hai fame?»', 'Mi ha chiesto se avevo fame.'],
          ] },
          { t: 'table', caption: 'Time and place words change too', explain: ['head'], head: ['Direct', 'Reported'], rows: [
            ['oggi', 'quel giorno'],
            ['ieri', 'il giorno prima'],
            ['domani', 'il giorno dopo'],
            ['adesso', 'allora'],
            ['qui', 'lì'],
          ] },
        ],
        [
          { t: 'examples', items: [
            { s: 'Marco ha detto che **era** stanco.', n: 'Present → imperfetto.' },
            { s: 'Anna ha detto che **aveva mangiato**.', n: 'Passato prossimo → trapassato.' },
            { s: 'Paolo ha detto che **sarebbe venuto** il giorno dopo.', n: 'Future → condizionale passato.' },
            { s: 'Il medico mi ha detto **di riposare**.', n: 'A command → *di* + infinitive.' },
            { s: 'Mi ha chiesto **se avevo** fame.', n: 'A question → *se*.' },
          ] },
          { t: 'dialogue', title: 'Dal medico', lines: [
            { who: 'Giulia', s: 'Che cosa ti ha detto il medico?' },
            { who: 'Marco', s: 'Mi ha detto che non avevo niente di grave.' },
            { who: 'Giulia', s: 'Ti ha fatto domande?' },
            { who: 'Marco', s: 'Mi ha chiesto se dormivo abbastanza e mi ha consigliato di riposare.' },
            { who: 'Giulia', s: 'E le medicine?' },
            { who: 'Marco', s: 'Ha detto che non erano necessarie.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Report what was said.', items: [
            { q: 'Marco ha detto: «Sono stanco».', cue: 'Marco ha detto che', a: ['Marco ha detto che era stanco.'], why: 'Present → imperfetto.' },
            { q: 'Anna ha detto: «Ho mangiato».', cue: 'Anna ha detto che', a: ['Anna ha detto che aveva mangiato.'], why: 'Passato prossimo → trapassato.' },
            { q: 'Paolo ha detto: «Verrò domani».', cue: 'Paolo ha detto che', a: ['Paolo ha detto che sarebbe venuto il giorno dopo.', 'Paolo ha detto che sarebbe venuto il giorno seguente.'], why: 'Future → condizionale passato; *domani* → *il giorno dopo*.' },
            { q: 'Il medico ha detto: «Riposi!»', cue: 'Il medico ha detto', a: ['Il medico ha detto di riposare.'], why: 'A command → *di* + infinitive.' },
            { q: 'Mi ha chiesto: «Hai fame?»', cue: 'Mi ha chiesto', a: ['Mi ha chiesto se avevo fame.'], why: 'A question → *se* + imperfetto.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Ieri Marco ha detto che ___ stanco, ma oggi sta bene.', o: ['era', 'è', 'sia'], why: 'After *ha detto*, the present moves to the imperfetto: *era*.' },
            { q: 'Anna ha detto che ___ già mangiato.', o: ['aveva', 'ha', 'abbia'], why: 'Passato prossimo → trapassato: *aveva mangiato*.' },
            { q: 'Il medico mi ha detto ___ riposare.', o: ['di', 'che', 'se'], why: 'A command → *di* + infinitive.' },
            { q: 'Mi ha chiesto ___ avevo fame.', o: ['se', 'che', 'di'], why: 'A yes/no question → *se*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Paolo ha detto che ___ venuto il giorno dopo. (essere, would)', a: ['sarebbe'], why: 'Future → condizionale passato: *sarebbe venuto*.' },
            { q: 'Sara ha detto che ___ in ritardo quel giorno. (essere, imperfetto)', a: ['era'], why: 'Present → imperfetto: *era*.' },
            { q: 'Il capo ha detto: «Finiamo domani». Ha detto che avrebbero finito il giorno ___.', a: ['dopo'], why: '*Domani* → *il giorno dopo*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Marco ha detto che era stanco.', why: 'Present → imperfetto.' },
            { a: 'Mi ha chiesto se avevo fame.', why: 'A question → *se*.' },
            { a: 'Il medico mi ha detto di riposare.', why: 'A command → *di* + infinitive.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Ieri Anna ha detto che [ha] mangiato presto, ma oggi no.', a: ['aveva'], why: 'Passato prossimo → trapassato: *aveva mangiato*.' },
            { s: 'Il medico mi ha detto [che] riposare.', a: ['di'], why: 'A command → *di* + infinitive.' },
            { s: 'Mi ha chiesto [che] avevo fame.', a: ['se'], why: 'A yes/no question → *se*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'La biblioteca chiude',
      about: 'Read a short news item and a reader’s comment.',
      art: 'pretzel',
      spreads: [
        [
          { t: 'reading', title: 'La biblioteca chiude per lavori', md: 'La biblioteca comunale di una piccola città sarà chiusa per due mesi. Il sindaco ha detto che i lavori sarebbero terminati a gennaio. Il tetto viene riparato e le sale vengono rinnovate. Secondo il comune, gli studenti potranno studiare nella sala del vecchio cinema, dove si trovano già molti posti. Si prevede che molte persone usino questo servizio.' },
          { t: 'reading', title: 'Un commento', md: 'Sono contento che si ripari la biblioteca, ma mi dispiace che gli studenti debbano cambiare sala. Un impiegato mi ha detto che il comune avrebbe cercato di finire prima. Spero che sia vero!\n\nLuca' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'La biblioteca sarà chiusa per due mesi.', a: 't', why: '*Sarà chiusa per due mesi.*' },
            { q: 'Secondo il sindaco, i lavori finiranno a gennaio.', a: 't', why: '*Il sindaco ha detto che i lavori sarebbero terminati a gennaio.*' },
            { q: 'Gli studenti non potranno studiare in nessun posto.', a: 'f', why: 'They can study in the old cinema.' },
            { q: 'La biblioteca ha un nuovo direttore.', a: 'ng', why: 'The text does not mention a director.' },
            { q: 'Il lettore spera che il comune finisca prima.', a: 't', why: '*Spero che sia vero!*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Che cosa viene riparato?', o: ['Il tetto.', 'Il pavimento.', 'La porta.'], why: '*Il tetto viene riparato.*' },
            { q: 'Dove potranno studiare gli studenti?', o: ['Nella sala del vecchio cinema.', 'In una scuola.', 'A casa.'], why: '*Nella sala del vecchio cinema.*' },
            { q: 'Che cosa gli ha detto un impiegato?', o: ['Che il comune avrebbe cercato di finire prima.', 'Che la biblioteca era già chiusa.', 'Che i lavori sarebbero stati lunghi.'], why: '*Un impiegato mi ha detto che il comune avrebbe cercato di finire prima.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the passive verbs.', items: [
            { s: 'La biblioteca [sarà chiusa] e il tetto [viene riparato].', why: '*Sarà chiusa* and *viene riparato* are passive.' },
            { s: 'Le sale [vengono rinnovate] e il tetto [sarà riparato] presto.', why: '*Vengono rinnovate* and *sarà riparato* are passive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Il tetto ___ riparato e le sale vengono rinnovate. (venire)', a: ['viene'], why: '*Il tetto viene riparato.*' },
            { q: 'Sono contento che si ___ la biblioteca. (riparare)', a: ['ripari'], why: '*Sono contento che* + congiuntivo.' },
            { q: 'Un impiegato mi ha ___ che il comune avrebbe cercato di finire prima. (dire)', a: ['detto'], why: '*Ha detto che* introduces the report.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'La biblioteca sarà chiusa per due mesi.', why: 'Future passive.' },
            { a: 'Mi ha detto che avrebbe cercato di finire prima.', why: 'Reported plan: condizionale passato.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Qui si ___ due lingue.', o: ['parlano', 'parla', 'parlate'], why: '*Due lingue* is plural: *si parlano*.' },
      { q: 'La festa ___ organizzata dal comune.', o: ['è', 'ha', 'hanno'], why: 'Passive: *è organizzata*.' },
      { q: 'Ieri Marco ha detto che ___ stanco, ma oggi sta bene.', o: ['era', 'è', 'sia'], why: 'After *ha detto*, the present moves to the imperfetto.' },
      { q: 'I biglietti sono stati ___ ieri.', o: ['venduti', 'venduto', 'vendute'], why: 'It agrees with *i biglietti*: *venduti*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'In Italia ___ cena tardi.', a: ['si'], why: 'People in general: *si cena*.' },
      { q: 'La lettera è stata ___ da un amico. (scrivere)', a: ['scritta'], why: 'It agrees with *la lettera*: *scritta*.' },
      { q: 'Paolo ha detto che ___ venuto il giorno dopo. (essere, would)', a: ['sarebbe'], why: 'Future → condizionale passato.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the active sentence with the passive one.', pairs: [
      ['Il comune organizza la festa.', 'La festa è organizzata dal comune.'],
      ['Hanno chiuso la strada.', 'La strada è stata chiusa.'],
      ['Riparano il tetto.', 'Il tetto viene riparato.'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence.', items: [
      { q: 'Vendono biglietti qui.', a: ['Qui si vendono biglietti.', 'Si vendono biglietti qui.'], why: 'A plural object: *si vendono*.' },
      { q: 'Il medico ha detto: «Riposi!»', cue: 'Il medico ha detto', a: ['Il medico ha detto di riposare.'], why: 'A command → *di* + infinitive.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Si [vende] biglietti.', a: ['vendono'], why: '*Biglietti* is plural: *si vendono*.' },
      { s: 'La strada è [chiuso] per lavori.', a: ['chiusa'], why: 'It agrees with *la strada*: *chiusa*.' },
    ] },
  ],
};
