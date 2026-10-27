// Italian B2, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'What might have been',
  goal: 'Talk about the unreal past, regrets and opinions about what happened. Learn the congiuntivo passato, the congiuntivo trapassato, the condizionale passato and se + congiuntivo trapassato + condizionale passato.',
  art: 'ghost',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['congiuntivo passato', 'congiuntivo trapassato', 'condizionale passato', 'hypotheses', 'regrets'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Penso che abbia sbagliato',
      about: 'Use the congiuntivo passato when the action came before the main verb.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'The **congiuntivo passato** is made with the **congiuntivo presente** of *avere* or *essere* and the **past participle**: *abbia mangiato, sia partito*. Use it where you would use the congiuntivo presente, when the action happened **before** the main verb: *Penso che Marco abbia sbagliato* (I think now; he made the mistake earlier). It follows opinion, feeling and possibility: *Mi dispiace che tu non sia venuto. È possibile che abbiano perso il treno. Sembra che sia già partito.*' },
          { t: 'table', caption: 'The congiuntivo passato', quiz: true, head: ['', 'mangiare', 'partire'], rows: [
            ['che io', 'abbia mangiato', 'sia partito / partita'],
            ['che tu', 'abbia mangiato', 'sia partito / partita'],
            ['che lui / lei / Lei', 'abbia mangiato', 'sia partito / partita'],
            ['che noi', 'abbiamo mangiato', 'siamo partiti / partite'],
            ['che voi', 'abbiate mangiato', 'siate partiti / partite'],
            ['che loro', 'abbiano mangiato', 'siano partiti / partite'],
          ] },
          { t: 'tip', art: 'owl', md: 'Compare **the same time** and **earlier**. *Penso che Marco sbagli* (he is making a mistake now). *Penso che Marco abbia sbagliato* (he made a mistake). After a **certainty**, the indicative stays: *So che ha sbagliato.* Choose *avere* or *essere* as in the passato prossimo, and agree the participle with *essere*.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Penso che Marco **abbia sbagliato**.', n: 'The mistake came before my thought.' },
            { s: 'Mi dispiace che tu non **sia venuto**.', n: '*Venire* uses *essere*.' },
            { s: 'È possibile che **abbiano perso** il treno.', n: 'A possibility about the past.' },
            { s: 'Sembra che lei **sia** già **partita**.', n: 'The participle agrees: *partita*.' },
            { s: 'Credo che noi **abbiamo dimenticato** le chiavi.', n: '*Credo che* + congiuntivo passato.' },
          ] },
          { t: 'dialogue', title: 'Alla festa', lines: [
            { who: 'Giulia', s: 'Perché Paolo non è venuto alla festa?' },
            { who: 'Marco', s: 'Credo che abbia dimenticato l’invito.' },
            { who: 'Giulia', s: 'Mi dispiace che non sia venuto.' },
            { who: 'Marco', s: 'Forse è successo qualcosa. Penso che abbia avuto un problema al lavoro.' },
            { who: 'Giulia', s: 'Può darsi che abbiano chiamato dall’ufficio.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the congiuntivo passato of partire.', verb: 'partire', tense: 'congiuntivo passato (che …)', rows: [
            ['che io (m)', 'sia partito'],
            ['che tu (f)', 'sia partita'],
            ['che lui', 'sia partito'],
            ['che noi (m)', 'siamo partiti'],
            ['che voi (f)', 'siate partite'],
            ['che loro (m)', 'siano partiti'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the congiuntivo passato.', items: [
            { q: 'Penso che Marco ___ sbagliato. (avere)', a: ['abbia'], why: '*Abbia sbagliato*.' },
            { q: 'Mi dispiace che tu non ___ venuto. (essere)', a: ['sia'], why: '*Venire* uses *essere*: *sia venuto*.' },
            { q: 'Credo che loro ___ perso il treno. (avere)', a: ['abbiano'], why: '*Abbiano perso*.' },
            { q: 'È possibile che lei ___ già partita. (essere)', a: ['sia'], why: '*Sia partita*.' },
            { q: 'Sembra che noi ___ dimenticato le chiavi. (avere)', a: ['abbiamo'], why: '*Abbiamo dimenticato*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Penso che ieri Marco ___ troppo.', o: ['abbia lavorato', 'lavori', 'lavorasse'], why: 'An action before my thought: the congiuntivo passato.' },
            { q: 'So che Marco ___ sbagliato.', o: ['ha', 'abbia', 'avesse'], why: 'A certainty: the indicative.' },
            { q: 'Mi dispiace che tu non ___ potuto venire.', o: ['abbia', 'hai', 'avessi'], why: '*Mi dispiace che* + *abbia potuto*.' },
            { q: 'Credo che Anna ___ già uscita.', o: ['sia', 'è', 'fosse'], why: '*Credo che* + *sia uscita*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Add the phrase and change the verb.', items: [
            { q: 'Marco ha sbagliato.', cue: 'Penso che', a: ['Penso che Marco abbia sbagliato.'], why: '*Ha sbagliato* → *abbia sbagliato*.' },
            { q: 'Anna è già partita.', cue: 'Credo che', a: ['Credo che Anna sia già partita.'], why: '*È partita* → *sia partita*.' },
            { q: 'Hanno perso il treno.', cue: 'È possibile che', a: ['È possibile che abbiano perso il treno.'], why: '*Hanno perso* → *abbiano perso*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Penso che Marco [ha] sbagliato.', a: ['abbia'], why: '*Penso che* + congiuntivo passato.' },
            { s: 'Credo che Anna [è] già partita.', a: ['sia'], why: '*Credo che* + *sia partita*.' },
            { s: 'Mi dispiace che tu non [sei] venuto.', a: ['sia'], why: '*Mi dispiace che* + *sia venuto*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Penso che Marco abbia sbagliato.', why: '*Penso che* + congiuntivo passato.' },
            { a: 'Mi dispiace che tu non sia venuto.', why: '*Non* before *sia*.' },
            { a: 'È possibile che abbiano perso il treno.', why: '*È possibile che* + congiuntivo passato.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Avessi saputo, avrei fatto',
      about: 'Form the congiuntivo trapassato and the condizionale passato.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'The **congiuntivo trapassato** is made with the **congiuntivo imperfetto** of *avere* or *essere* and the **past participle**: *avessi mangiato, fossi partito*. Use it after a **past** main verb when the action came **earlier**: *Pensavo che avesse già mangiato. Credevo che fossero partiti.* The **condizionale passato** is made with the **condizionale** of *avere* or *essere* and the participle: *avrei mangiato, sarei partito*. It says what you **would have done** (*Sarei venuto volentieri*), a polite regret (*Avrei dovuto avvisarti*), or a **future seen from the past** (*Ha detto che sarebbe venuto*).' },
          { t: 'table', caption: 'Congiuntivo trapassato and condizionale passato', quiz: true, head: ['', 'congiuntivo trapassato', 'condizionale passato'], rows: [
            ['io', 'avessi mangiato / fossi partito', 'avrei mangiato / sarei partito'],
            ['tu', 'avessi mangiato / fossi partito', 'avresti mangiato / saresti partito'],
            ['lui / lei', 'avesse mangiato / fosse partito', 'avrebbe mangiato / sarebbe partito'],
            ['noi', 'avessimo mangiato / fossimo partiti', 'avremmo mangiato / saremmo partiti'],
            ['voi', 'aveste mangiato / foste partiti', 'avreste mangiato / sareste partiti'],
            ['loro', 'avessero mangiato / fossero partiti', 'avrebbero mangiato / sarebbero partiti'],
          ] },
        ],
        [
          { t: 'examples', items: [
            { s: 'Pensavo che lei **avesse** già **mangiato**.', n: 'She had eaten before I thought it.' },
            { s: 'Credevo che loro **fossero** già **partiti**.', n: 'The participle agrees: *partiti*.' },
            { s: '**Sarei venuto** volentieri, ma avevo da fare.', n: 'What I would have done.' },
            { s: '**Avrei dovuto** avvisarti.', n: 'A polite regret.' },
            { s: 'Marco ha promesso che **sarebbe venuto**.', n: 'A future in the past.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Choose *avere* or *essere* as in the passato prossimo. After **pensavo che, credevo che, speravo che** (a past main verb), use the congiuntivo trapassato for an earlier action and the congiuntivo imperfetto for the same time: *Pensavo che dormisse* (he was sleeping) and *Pensavo che avesse dormito* (he had slept).' },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the condizionale passato of fare.', verb: 'fare', tense: 'condizionale passato', rows: [
            ['io', 'avrei fatto'],
            ['tu', 'avresti fatto'],
            ['lui / lei', 'avrebbe fatto'],
            ['noi', 'avremmo fatto'],
            ['voi', 'avreste fatto'],
            ['loro', 'avrebbero fatto'],
          ] },
          { t: 'ex', kind: 'conjugate', h: 'Write the congiuntivo trapassato of andare.', verb: 'andare', tense: 'congiuntivo trapassato (che …)', rows: [
            ['che io (m)', 'fossi andato'],
            ['che tu (f)', 'fossi andata'],
            ['che lui', 'fosse andato'],
            ['che noi (m)', 'fossimo andati'],
            ['che voi (f)', 'foste andate'],
            ['che loro (m)', 'fossero andati'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'Pensavo che lei ___ già mangiato. (avere)', a: ['avesse'], why: '*Avesse mangiato*.' },
            { q: 'Credevo che loro ___ partiti. (essere)', a: ['fossero'], why: '*Fossero partiti*.' },
            { q: 'Sono stanco: ___ dovuto dormire di più. (io, avere)', a: ['avrei'], why: '*Avrei dovuto*.' },
            { q: 'Marco ha promesso che ___ venuto, ma non c’è. (essere)', a: ['sarebbe'], why: 'A future in the past: *sarebbe venuto*.' },
            { q: 'Noi ___ volentieri, ma abbiamo lavorato. (venire)', a: ['saremmo venuti', 'saremmo venute'], why: '*Saremmo venuti*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Credevo che Anna ___ già uscita.', o: ['fosse', 'sia', 'sarebbe'], why: '*Credevo che* + *fosse uscita*.' },
            { q: 'Avrei voluto ___ con voi.', o: ['venire', 'venuto', 'vengo'], why: '*Avrei voluto* + infinitive.' },
            { q: 'Pensavo che Marco ___ già mangiato.', o: ['avesse', 'abbia', 'ha'], why: '*Pensavo che* + *avesse mangiato*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the infinitive with its condizionale passato (io).', pairs: [
            ['andare', 'sarei andato'],
            ['fare', 'avrei fatto'],
            ['venire', 'sarei venuto'],
            ['dire', 'avrei detto'],
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Credevo che loro [erano] già partiti.', a: ['fossero'], why: '*Credevo che* + congiuntivo trapassato.' },
            { s: 'Io [sarei] mangiato volentieri.', a: ['avrei'], why: '*Mangiare* uses *avere*: *avrei mangiato*.' },
            { s: 'Pensavo che lui [sia] già partito.', a: ['fosse'], why: 'A past main verb: *fosse partito*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Se l’avessi saputo',
      about: 'Talk about the unreal past with se + congiuntivo trapassato + condizionale passato.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'To talk about something that **did not happen** in the past, use **se** + **congiuntivo trapassato**, and the **condizionale passato** in the other part: *Se l’avessi saputo, sarei venuto.* *Se avessi studiato, avrei superato l’esame.* In a **mixed** sentence, the cause is in the past and the result is now: *Se avessi studiato, oggi avrei un lavoro migliore.* To express regret, use **peccato che** + congiuntivo or **magari** + congiuntivo trapassato: *Peccato che tu non sia venuto. Magari fossi venuto!*' },
          { t: 'table', caption: 'Four kinds of if', explain: ['head', 'col1'], head: ['Type', 'Pattern', 'Example'], rows: [
            ['possible', 'se + present, future', 'Se studi, supererai l’esame.'],
            ['unreal now', 'se + congiuntivo imperfetto, condizionale presente', 'Se studiassi di più, supereresti l’esame.'],
            ['unreal past', 'se + congiuntivo trapassato, condizionale passato', 'Se avessi studiato, avrei superato l’esame.'],
            ['mixed', 'se + congiuntivo trapassato, condizionale presente', 'Se avessi studiato, oggi avrei un lavoro migliore.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In everyday speech, many people use the **imperfetto** in both parts: *Se lo sapevo, venivo.* This is informal and not accepted in writing or exams. In a formal text, use the full forms: *Se l’avessi saputo, sarei venuto.*' },
        ],
        [
          { t: 'dialogue', title: 'Un’occasione persa', lines: [
            { who: 'Giulia', s: 'Peccato che tu non sia venuto a Napoli con noi!' },
            { who: 'Marco', s: 'Se l’avessi saputo prima, sarei venuto.' },
            { who: 'Giulia', s: 'Ti avevo scritto un messaggio.' },
            { who: 'Marco', s: 'Lo so, ma avevo il telefono scarico. Se avessi controllato la posta, avrei visto l’invito.' },
            { who: 'Giulia', s: 'Magari fossi venuto! Ci siamo divertiti molto.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Which kind of if? Sort the sentences.', explain: ['groups'], groups: ['Possible', 'Unreal now', 'Unreal past'], items: [
            { s: 'Se studi, supererai l’esame.', g: 0, why: 'Se + present: it can happen.' },
            { s: 'Se piove, resto a casa.', g: 0, why: 'Se + present: it can happen.' },
            { s: 'Se studiassi di più, supereresti l’esame.', g: 1, why: 'Se + congiuntivo imperfetto: imagined now.' },
            { s: 'Se fossi ricco, comprerei una casa.', g: 1, why: 'Se + congiuntivo imperfetto: imagined now.' },
            { s: 'Se avessi studiato, avrei superato l’esame.', g: 2, why: 'Se + congiuntivo trapassato: it did not happen.' },
            { s: 'Se fossi partito prima, saresti arrivato in tempo.', g: 2, why: 'Se + congiuntivo trapassato: it did not happen.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'Se l’___ saputo, sarei venuto. (io, avere)', a: ['avessi'], why: '*Se l’avessi saputo*.' },
            { q: 'Se avessi studiato, ___ superato l’esame. (io, avere)', a: ['avrei'], why: '*Avrei superato*.' },
            { q: 'Se tu fossi partito prima, ___ arrivato in tempo. (essere)', a: ['saresti'], why: '*Saresti arrivato*.' },
            { q: 'Se Marco ___ la posta, avrebbe visto l’invito. (controllare)', a: ['avesse controllato'], why: '*Avesse controllato*.' },
            { q: 'Peccato che tu non ___ venuto. (essere)', a: ['sia'], why: '*Peccato che* + congiuntivo passato.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Se avessi studiato, ___ l’esame.', o: ['avrei superato', 'superassi', 'avessi superato'], why: 'The result in the condizionale passato.' },
            { q: 'Se ___ prima, saremmo arrivati in tempo.', o: ['fossimo partiti', 'saremmo partiti', 'partiremmo'], why: 'After *se*: the congiuntivo trapassato.' },
            { q: 'Se avessi studiato, oggi ___ un lavoro migliore.', o: ['avrei', 'avessi', 'avrò'], why: 'A mixed sentence: the result now is in the condizionale presente.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Imagine the opposite in the past. Start with se.', items: [
            { q: 'Non ho studiato, quindi non ho superato l’esame.', cue: 'Se', a: ['Se avessi studiato, avrei superato l’esame.'], why: '*Se avessi studiato, avrei superato …*' },
            { q: 'Non sei partito presto, quindi sei arrivato tardi.', cue: 'Se', a: ['Se fossi partito presto, non saresti arrivato tardi.', 'Se fossi partito presto, saresti arrivato in tempo.'], why: '*Se fossi partito …, non saresti arrivato …*' },
            { q: 'Non l’ho saputo, quindi non sono venuto.', cue: 'Se', a: ['Se l’avessi saputo, sarei venuto.'], why: '*Se l’avessi saputo, sarei venuto.*' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Se l’[avrei] saputo, sarei venuto.', a: ['avessi'], why: 'After *se*, never the condizionale: *avessi*.' },
            { s: 'Se avessi studiato, [supererei] l’esame.', a: ['avrei superato'], why: 'The unreal past needs the condizionale passato.' },
            { s: 'Se [ero] partito prima, saresti arrivato.', a: ['fossi'], why: 'After *se*: *fossi partito*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Se l’avessi saputo, sarei venuto.', why: '*Se* + congiuntivo trapassato, condizionale passato.' },
            { a: 'Avrei superato l’esame se avessi studiato.', why: 'The *se* part can come second.' },
            { a: 'Peccato che tu non sia venuto.', why: '*Peccato che* + congiuntivo passato.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the beginning with the end.', pairs: [
            ['Se avessi studiato,', 'avrei superato l’esame.'],
            ['Se fossi partito prima,', 'saresti arrivato in tempo.'],
            ['Se l’avessi saputo,', 'sarei venuto.'],
            ['Se avessi controllato la posta,', 'avrei visto l’invito.'],
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Una lettera dal passato',
      about: 'Read a letter that looks back on a decision.',
      art: 'ghost',
      spreads: [
        [
          { t: 'reading', title: 'Una lettera', md: 'Cara Marta,\n\nieri ho ritrovato in un cassetto la lettera con l’offerta di lavoro a Lisbona. Dieci anni fa ho deciso di restare qui, e da allora mi chiedo spesso come sarebbe andata se avessi accettato. Forse avrei imparato bene il portoghese, avrei conosciuto persone nuove e oggi lavorerei in una grande azienda.\n\nMa se fossi partita, non avrei conosciuto Paolo e non avrei avuto i miei figli. Non so se sia stata la scelta migliore, ma penso che sia stata la scelta giusta per me. Peccato che tu non abbia potuto venire a trovarmi quest’estate: avrei voluto parlarne con te.\n\nUn abbraccio,\nElena' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Elena ha ritrovato una lettera con un’offerta di lavoro.', a: 't', why: '*Ho ritrovato … la lettera con l’offerta di lavoro a Lisbona.*' },
            { q: 'Elena ha accettato il lavoro a Lisbona.', a: 'f', why: 'She decided to stay: *ho deciso di restare qui*.' },
            { q: 'Elena ha due figli.', a: 'ng', why: 'She says *i miei figli* but not how many.' },
            { q: 'Elena pensa che restare sia stata la scelta giusta per lei.', a: 't', why: '*Penso che sia stata la scelta giusta per me.*' },
            { q: 'Marta ha potuto trovare Elena quest’estate.', a: 'f', why: '*Peccato che tu non abbia potuto venire a trovarmi.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Da quanto tempo Elena ha deciso di restare?', o: ['Da dieci anni.', 'Da un anno.', 'Da due mesi.'], why: '*Dieci anni fa ho deciso di restare qui.*' },
            { q: 'Che cosa avrebbe imparato a Lisbona?', o: ['Il portoghese.', 'Lo spagnolo.', 'Il francese.'], why: '*Avrei imparato bene il portoghese.*' },
            { q: 'Perché non rimpiange la scelta?', o: ['Non avrebbe conosciuto Paolo.', 'Il lavoro era mal pagato.', 'Lisbona è lontana.'], why: '*Se fossi partita, non avrei conosciuto Paolo.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs in the condizionale passato.', items: [
            { s: 'Forse [avrei imparato] il portoghese e [avrei conosciuto] persone nuove.', why: 'Both are in the condizionale passato.' },
            { s: 'Se fossi partita, non [avrei avuto] i miei figli.', why: '*Avrei avuto* is the result in the condizionale passato.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'Mi chiedo come ___ andata se avessi accettato. (essere, condizionale passato)', a: ['sarebbe'], why: '*Sarebbe andata*.' },
            { q: 'Se ___ partita, non avrei conosciuto Paolo. (io, essere)', a: ['fossi'], why: '*Se fossi partita*.' },
            { q: 'Peccato che tu non ___ potuto venire. (avere)', a: ['abbia'], why: '*Peccato che* + congiuntivo passato.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Avrei voluto parlarne con te.', why: '*Avrei voluto* + infinitive.' },
            { a: 'Se fossi partita, non avrei conosciuto Paolo.', why: '*Se* + congiuntivo trapassato, condizionale passato.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Penso che ieri Marco ___ troppo.', o: ['abbia lavorato', 'lavori', 'lavorasse'], why: 'An action before my thought: the congiuntivo passato.' },
      { q: 'Pensavo che lei ___ già partita.', o: ['fosse', 'sia', 'sarebbe'], why: 'A past main verb and an earlier action: *fosse partita*.' },
      { q: 'Se l’___ saputo, sarei venuto.', o: ['avessi', 'avrei', 'ho'], why: 'After *se*: the congiuntivo trapassato.' },
      { q: 'Se avessi studiato, ___ l’esame.', o: ['avrei superato', 'superassi', 'avessi superato'], why: 'The result in the condizionale passato.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
      { q: 'Mi dispiace che tu non ___ venuto. (essere)', a: ['sia'], why: '*Sia venuto*.' },
      { q: 'Credevo che loro ___ già mangiato. (avere)', a: ['avessero'], why: '*Avessero mangiato*.' },
      { q: 'Marco ha promesso che ___ venuto, ma non c’è. (essere)', a: ['sarebbe'], why: 'A future in the past.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the infinitive with its condizionale passato (io).', pairs: [
      ['andare', 'sarei andato'],
      ['fare', 'avrei fatto'],
      ['venire', 'sarei venuto'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence.', items: [
      { q: 'Non ho studiato, quindi non ho superato l’esame.', cue: 'Se', a: ['Se avessi studiato, avrei superato l’esame.'], why: '*Se avessi studiato, avrei superato …*' },
      { q: 'Marco ha sbagliato.', cue: 'Penso che', a: ['Penso che Marco abbia sbagliato.'], why: '*Ha sbagliato* → *abbia sbagliato*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Se l’[avrei] saputo, sarei venuto.', a: ['avessi'], why: 'After *se*, never the condizionale.' },
      { s: 'Penso che Marco [ha] sbagliato.', a: ['abbia'], why: '*Penso che* + congiuntivo passato.' },
    ] },
  ],
};
