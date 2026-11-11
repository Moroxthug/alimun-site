// Italian B2, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'Looking back and ahead',
  goal: 'Place events in time and read a narrative. Learn the futuro anteriore, the futuro for guesses, and the passato remoto of regular and common irregular verbs.',
  art: 'snail',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['futuro anteriore', 'futuro epistemico', 'passato remoto', 'narrative', 'time sequence'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Appena avrò finito',
      about: 'Use the futuro anteriore for something that will be finished before another future event.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'The **futuro anteriore** is made with the **future** of *avere* or *essere* and the **past participle**: *avrò finito, sarò partito*. It says that one future event will be **completed before** another one. It follows **appena, quando, dopo che, una volta che**, and the main clause is in the simple future (or the imperative): *Appena avrò finito, ti chiamerò.* Italian uses a future after *quando* and *appena* where English uses the present.' },
          { t: 'table', caption: 'The futuro anteriore', quiz: true, head: ['', 'finire', 'partire'], rows: [
            ['io', 'avrò finito', 'sarò partito / partita'],
            ['tu', 'avrai finito', 'sarai partito / partita'],
            ['lui / lei / Lei', 'avrà finito', 'sarà partito / partita'],
            ['noi', 'avremo finito', 'saremo partiti / partite'],
            ['voi', 'avrete finito', 'sarete partiti / partite'],
            ['loro', 'avranno finito', 'saranno partiti / partite'],
          ] },
          { t: 'tip', art: 'owl', md: 'The choice of *avere* or *essere* is the same as in the passato prossimo, and the participle agrees with *essere*: *Quando saremo arrivate, ti scriveremo.* In everyday speech, the simple future is often enough: *Quando arrivo, ti scrivo.* The futuro anteriore is the precise, written form.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Appena avrò finito** il lavoro, ti chiamerò.', n: 'First I finish, then I call.' },
            { s: '**Quando sarà arrivato**, mangeremo.', n: 'He arrives first, then we eat.' },
            { s: '**Dopo che avrai letto** il libro, ne parleremo.', n: 'You read it first.' },
            { s: '**Una volta che avremo deciso**, vi avviseremo.', n: '*Una volta che* = once.' },
            { s: 'Tra un anno **avrò finito** gli studi.', n: 'By a future moment.' },
          ] },
          { t: 'dialogue', title: 'I progetti', lines: [
            { who: 'Giulia', s: 'Quando partirete per le vacanze?' },
            { who: 'Marco', s: 'Appena avrò finito il lavoro, partiremo. Forse tra due settimane.' },
            { who: 'Giulia', s: 'E dove andrete?' },
            { who: 'Marco', s: 'Quando avremo scelto il posto, te lo dirò.' },
            { who: 'Giulia', s: 'Mi raccomando, scrivimi dopo che sarete arrivati!' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the futuro anteriore of finire.', verb: 'finire', tense: 'futuro anteriore', rows: [
            ['io', 'avrò finito'],
            ['tu', 'avrai finito'],
            ['lui / lei', 'avrà finito'],
            ['noi', 'avremo finito'],
            ['voi', 'avrete finito'],
            ['loro', 'avranno finito'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the verb in the futuro anteriore.', items: [
            { q: 'Appena ___ il lavoro, ti chiamerò. (io, finire)', a: ['avrò finito'], why: '*Avrò finito*: finished before the call.' },
            { q: 'Quando ___ a casa, mangeremo. (lui, arrivare)', a: ['sarà arrivato'], why: '*Arrivare* uses *essere*: *sarà arrivato*.' },
            { q: 'Dopo che ___ il libro, ne parleremo. (tu, leggere)', a: ['avrai letto'], why: '*Avrai letto*.' },
            { q: 'Quando ___ , vi avviseremo. (noi, decidere)', a: ['avremo deciso'], why: '*Avremo deciso*.' },
            { q: 'Appena ___ a Roma, ti scriveremo. (noi, arrivare)', a: ['saremo arrivati', 'saremo arrivate'], why: '*Saremo arrivati*, with agreement.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Dopo che ___ la tesi, comincerò a lavorare.', o: ['avrò finito', 'finivo', 'avessi finito'], why: 'Completed before a future event: *avrò finito*.' },
            { q: 'Quando ___ i risultati, vi avviserò.', o: ['avrò ricevuto', 'ricevevo', 'avessi ricevuto'], why: 'The futuro anteriore after *quando*.' },
            { q: 'Appena ___ , partiremo.', o: ['avremo mangiato', 'mangiavamo', 'avessimo mangiato'], why: '*Avremo mangiato* before the departure.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Join the two events with the word in brackets.', items: [
            { q: 'Finirò il lavoro. Poi ti chiamerò.', cue: 'Appena', a: ['Appena avrò finito il lavoro, ti chiamerò.'], why: '*Appena* + futuro anteriore.' },
            { q: 'Marco arriverà. Poi mangeremo.', cue: 'Quando', a: ['Quando Marco sarà arrivato, mangeremo.'], why: '*Quando* + futuro anteriore.' },
            { q: 'Leggerai il libro. Poi ne parleremo.', cue: 'Dopo che', a: ['Dopo che avrai letto il libro, ne parleremo.'], why: '*Dopo che* + futuro anteriore.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Appena [ho] finito, ti chiamerò.', a: ['avrò'], why: 'A completed future action: *avrò finito*.' },
            { s: 'Quando [avrà] arrivato, mangeremo.', a: ['sarà'], why: '*Arrivare* uses *essere*: *sarà arrivato*.' },
            { s: 'Dopo che [leggerai] il libro, ne parleremo.', a: ['avrai letto'], why: 'Completed before the talk: *avrai letto*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Appena avrò finito, ti chiamerò.', why: '*Appena* + futuro anteriore, then the future.' },
            { a: 'Quando saremo arrivati, mangeremo.', why: '*Saremo arrivati* first.' },
            { a: 'Dopo che avrai letto il libro, ne parleremo.', why: '*Dopo che* + futuro anteriore.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Sarà, avrà perso',
      about: 'Use the future to make a guess about the present, and the futuro anteriore to guess about the past.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Italian often uses the future for a **guess**, not for something that will happen. The **simple future** guesses about the **present**: *Che ore sono? – Saranno le tre. Dov’è Marco? – Sarà in ufficio.* The **futuro anteriore** guesses about the **past**: *Marco non risponde: avrà lasciato il telefono a casa.* The meaning is “probably”, the same as *forse* or *deve essere*.' },
          { t: 'table', caption: 'Fact and guess', explain: ['head'], head: ['Fact', 'Guess'], rows: [
            ['È stanco.', 'Sarà stanco.'],
            ['Sono le tre.', 'Saranno le tre.'],
            ['Costa molto.', 'Costerà molto.'],
            ['Ha perso il treno.', 'Avrà perso il treno.'],
            ['È arrivato tardi.', 'Sarà arrivato tardi.'],
          ] },
          { t: 'tip', art: 'owl', md: 'The context shows whether the future is a **plan** or a **guess**. *Domani sarà a Roma* is about the future. *Adesso sarà a Roma* is a guess about now. A guess about the past needs the futuro anteriore: *Ieri sarà stato a Roma* (probably he was in Rome yesterday).' },
        ],
        [
          { t: 'dialogue', title: 'Dov’è Marco?', lines: [
            { who: 'Sara', s: 'Marco non risponde al telefono.' },
            { who: 'Paolo', s: 'Avrà perso il treno.' },
            { who: 'Sara', s: 'Oppure sarà ancora in ufficio.' },
            { who: 'Paolo', s: 'Saranno le sei: di solito esce alle cinque.' },
            { who: 'Sara', s: 'Allora avrà trovato traffico.' },
            { who: 'Paolo', s: 'Proviamo a chiamarlo di nuovo.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Fact or guess? Sort the sentences.', explain: ['groups'], groups: ['Fact', 'Guess'], items: [
            { s: 'Marco è in ufficio.', g: 0, why: 'A statement of fact.' },
            { s: 'Marco sarà in ufficio.', g: 1, why: 'The future as a guess.' },
            { s: 'Ha perso il treno.', g: 0, why: 'A statement of fact.' },
            { s: 'Avrà perso il treno.', g: 1, why: 'The futuro anteriore as a guess.' },
            { s: 'Saranno le sei.', g: 1, why: 'A guess about the time.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the future or the futuro anteriore.', items: [
            { q: 'Marco non risponde: ___ il telefono a casa. (lasciare)', a: ['avrà lasciato'], why: 'A guess about the past: *avrà lasciato*.' },
            { q: 'Dov’è Anna? – ___ in biblioteca. (essere)', a: ['Sarà'], why: 'A guess about the present: *sarà*.' },
            { q: 'Quanto costa? – ___ un po’ di più. (costare)', a: ['Costerà'], why: 'A guess: *costerà*.' },
            { q: 'Non c’è nessuno: ___ già tutti andati via. (essere)', a: ['saranno'], why: 'A guess about the past: *saranno andati*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Marco non è ancora arrivato: ___ traffico.', o: ['avrà trovato', 'troverà', 'trovasse'], why: 'A guess about the past: *avrà trovato*.' },
            { q: 'Che ore sono? – ___ le tre.', o: ['Saranno', 'Sarebbero', 'Furono'], why: 'A guess about the present: *saranno*.' },
            { q: 'Non risponde: ___ in riunione.', o: ['sarà', 'fosse', 'sia stato'], why: 'A guess about now: *sarà*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Turn the possibility into a guess with the future.', items: [
            { q: 'Forse è stanco.', a: ['Sarà stanco.'], why: '*Forse è* → *sarà*.' },
            { q: 'Probabilmente ha perso il treno.', a: ['Avrà perso il treno.'], why: '*Probabilmente ha perso* → *avrà perso*.' },
            { q: 'Forse sono le tre.', a: ['Saranno le tre.'], why: '*Forse sono* → *saranno*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Non è ancora arrivato: [sarà] perso il treno.', a: ['avrà'], why: '*Perdere* uses *avere*: *avrà perso*.' },
            { s: 'Dov’è Anna? – [Avrà] in biblioteca.', a: ['Sarà'], why: 'A guess about the present with *essere*: *sarà*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Avrà perso il treno.', why: 'A guess about the past.' },
            { a: 'Saranno le sei di sera.', why: 'A guess about the time.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Il passato remoto',
      about: 'Recognise and form the passato remoto, the past tense of written narrative.',
      art: 'dragon',
      spreads: [
        [
          { t: 'text', md: 'The **passato remoto** tells of events that are **finished and far away** from now. It is the usual tense of stories, history and novels: *Il fiume portò via il ponte.* In the spoken Italian of the north, the passato prossimo is used instead, but in the centre and the south the passato remoto is also spoken. At B2, you must **recognise** it quickly and **use** it in written narrative.' },
          { t: 'table', caption: 'The passato remoto: regular verbs', quiz: true, head: ['', 'parlare', 'credere', 'partire'], rows: [
            ['io', 'parlai', 'credei', 'partii'],
            ['tu', 'parlasti', 'credesti', 'partisti'],
            ['lui / lei / Lei', 'parlò', 'credé', 'partì'],
            ['noi', 'parlammo', 'credemmo', 'partimmo'],
            ['voi', 'parlaste', 'credeste', 'partiste'],
            ['loro', 'parlarono', 'crederono', 'partirono'],
          ] },
          { t: 'tip', art: 'owl', md: 'Many verbs in **-ere** have a second set of forms: *credetti, credette, credettero*. The **lui / lei** and **loro** forms are the most common in stories, and they are the ones with irregular verbs. Do not use the passato remoto for **today**: *Stamattina ho letto il giornale*, not *lessi*.' },
        ],
        [
          { t: 'table', caption: 'Common irregular verbs: lui / lei and loro', explain: ['head'], head: ['Infinitive', 'lui / lei', 'loro'], rows: [
            ['essere', 'fu', 'furono'],
            ['avere', 'ebbe', 'ebbero'],
            ['fare', 'fece', 'fecero'],
            ['dire', 'disse', 'dissero'],
            ['vedere', 'vide', 'videro'],
            ['venire', 'venne', 'vennero'],
            ['volere', 'volle', 'vollero'],
            ['prendere', 'prese', 'presero'],
            ['scrivere', 'scrisse', 'scrissero'],
            ['nascere', 'nacque', 'nacquero'],
          ] },
          { t: 'examples', items: [
            { s: 'Mio nonno **nacque** in un piccolo paese di montagna.', n: '*Nascere* → *nacque*.' },
            { s: 'Il re **ebbe** tre figli e **visse** a lungo.', n: '*Avere* → *ebbe*; *vivere* → *visse*.' },
            { s: 'Una notte il fiume **portò** via il ponte.', n: 'A regular verb: *portò*.' },
            { s: 'I cittadini **decisero** di costruirne un altro.', n: '*Decidere* → *decisero*.' },
            { s: 'Quando **vide** il mare, non **disse** nulla.', n: '*Vedere* → *vide*; *dire* → *disse*.' },
          ] },
          { t: 'dialogue', title: 'Una favola', lines: [
            { who: 'Marta', s: 'C’era una volta un pescatore che viveva vicino al mare. Un giorno prese nella rete un pesce d’oro.' },
            { who: 'Leo', s: 'E poi?' },
            { who: 'Marta', s: 'Il pesce parlò e disse: «Lasciami andare e ti darò tre desideri».' },
            { who: 'Leo', s: 'E il pescatore lo lasciò andare?' },
            { who: 'Marta', s: 'Sì, lo liberò e tornò a casa.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the passato remoto of parlare.', verb: 'parlare', tense: 'passato remoto', rows: [
            ['io', 'parlai'],
            ['tu', 'parlasti'],
            ['lui / lei', 'parlò'],
            ['noi', 'parlammo'],
            ['voi', 'parlaste'],
            ['loro', 'parlarono'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the verb in the passato remoto.', items: [
            { q: 'Una notte il fiume ___ via il ponte. (portare)', a: ['portò'], why: '*Portare* → *portò*.' },
            { q: 'I cittadini ___ di costruire un nuovo ponte. (decidere)', a: ['decisero'], why: '*Decidere* → *decisero*.' },
            { q: 'Il pescatore ___ un pesce d’oro. (prendere)', a: ['prese'], why: '*Prendere* → *prese*.' },
            { q: 'Il re ___ tre figli. (avere)', a: ['ebbe'], why: '*Avere* → *ebbe*.' },
            { q: 'Il pesce ___ : «Lasciami andare». (dire)', a: ['disse'], why: '*Dire* → *disse*.' },
            { q: 'Mio nonno ___ in un piccolo paese. (nascere)', a: ['nacque'], why: '*Nascere* → *nacque*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the infinitive with the form for lui / lei.', pairs: [
            ['essere', 'fu'],
            ['avere', 'ebbe'],
            ['fare', 'fece'],
            ['venire', 'venne'],
            ['volere', 'volle'],
          ] },
          { t: 'ex', kind: 'transform', h: 'Tell it in the passato remoto.', items: [
            { q: 'Ha preso un pesce.', a: ['Prese un pesce.'], why: '*Ha preso* → *prese*.' },
            { q: 'Sono arrivati a mezzanotte.', a: ['Arrivarono a mezzanotte.'], why: '*Sono arrivati* → *arrivarono*.' },
            { q: 'Ha scritto una lettera.', a: ['Scrisse una lettera.'], why: '*Ha scritto* → *scrisse*.' },
            { q: 'Hanno deciso di partire.', a: ['Decisero di partire.'], why: '*Hanno deciso* → *decisero*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Una notte il fiume ___ via il ponte.', o: ['portò', 'porta', 'portasse'], why: 'A single finished event in a story: *portò*.' },
            { q: 'Mio nonno ___ in un piccolo paese.', o: ['nacque', 'nasceva', 'è nasciuto'], why: 'The passato remoto of *nascere*: *nacque*.' },
            { q: 'Stamattina io ___ il giornale. (spoken Italian)', o: ['ho letto', 'lessi', 'leggevo'], why: 'For today, use the passato prossimo.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Il fiume [portai] via il ponte.', a: ['portò'], why: 'The *lui / lei* form: *portò*.' },
            { s: 'Il re [dicè] la verità.', a: ['disse'], why: '*Dire* → *disse*.' },
            { s: 'I cittadini [decidettero] di partire.', a: ['decisero'], why: '*Decidere* → *decisero*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Il fiume portò via il vecchio ponte.', why: 'A narrative past.' },
            { a: 'I cittadini decisero di costruirne uno nuovo.', why: '*Decisero* + infinitive.' },
            { a: 'Il pescatore liberò il pesce e tornò a casa.', why: 'Two events in a row.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Il ponte di pietra',
      about: 'Read a short tale that mixes the passato remoto, the imperfetto and the future.',
      art: 'dragon',
      spreads: [
        [
          { t: 'reading', title: 'Il ponte di pietra', md: 'Molti anni fa, in un piccolo paese tra le colline, viveva un vecchio costruttore di nome Gino. Un giorno il fiume, ingrossato dalle piogge, portò via il ponte di legno. Gli abitanti si riunirono in piazza e discussero a lungo. Alla fine decisero di costruirne uno nuovo, ma nessuno sapeva come fare.\n\nGino disse: «Lo costruirò io. Quando avrò finito, nessun fiume potrà portarlo via». Lavorò per tre estati, da solo, e ogni sera qualcuno gli portava del pane. Il ponte fu terminato il giorno della festa del paese. Gino lo attraversò per primo, senza dire una parola.\n\nOggi, dicono, il ponte è ancora lì. Sarà vero? Chi lo attraversa, pensa a Gino.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Gino era un vecchio costruttore.', a: 't', why: '*Viveva un vecchio costruttore di nome Gino.*' },
            { q: 'Il vecchio ponte era di pietra.', a: 'f', why: 'It was a wooden bridge: *il ponte di legno*.' },
            { q: 'Gino lavorò per tre estati.', a: 't', why: '*Lavorò per tre estati.*' },
            { q: 'Gino costruì il ponte con l’aiuto di suo figlio.', a: 'ng', why: 'The text says he worked alone but mentions no son.' },
            { q: 'Gino attraversò il ponte per primo.', a: 't', why: '*Gino lo attraversò per primo.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Perché il fiume portò via il ponte?', o: ['Era ingrossato dalle piogge.', 'Il ponte era vecchio.', 'Ci fu un terremoto.'], why: '*Il fiume, ingrossato dalle piogge, portò via il ponte.*' },
            { q: 'Che cosa promise Gino?', o: ['Che nessun fiume avrebbe potuto portare via il nuovo ponte.', 'Che avrebbe costruito il ponte in un mese.', 'Che avrebbe chiesto aiuto.'], why: '*Quando avrò finito, nessun fiume potrà portarlo via.*' },
            { q: 'Quando fu terminato il ponte?', o: ['Il giorno della festa del paese.', 'In inverno.', 'Dopo un anno.'], why: '*Il ponte fu terminato il giorno della festa del paese.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs in the passato remoto.', items: [
            { s: 'Il fiume [portò] via il ponte e gli abitanti si [riunirono] in piazza.', why: '*Portò* and *riunirono* are in the passato remoto.' },
            { s: 'Gino [disse]: «Lo costruirò io» e [lavorò] per tre estati.', why: '*Disse* and *lavorò* are in the passato remoto.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right tense.', items: [
            { q: 'Gli abitanti ___ a lungo in piazza. (discutere, passato remoto)', a: ['discussero'], why: '*Discutere* → *discussero*.' },
            { q: 'Il ponte ___ terminato il giorno della festa. (essere, passato remoto)', a: ['fu'], why: '*Essere* → *fu*.' },
            { q: 'Quando ___ , nessun fiume potrà portarlo via. (io, finire)', a: ['avrò finito'], why: 'The futuro anteriore in Gino’s promise.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Gino lavorò per tre estati da solo.', why: 'A finished period: the passato remoto.' },
            { a: 'Chi attraversa il ponte pensa a Gino.', why: 'A present-tense ending to the tale.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Dopo che ___ la tesi, comincerò a lavorare.', o: ['avrò finito', 'finivo', 'avessi finito'], why: 'Completed before a future event.' },
      { q: 'Marco non risponde: ___ il telefono a casa.', o: ['avrà lasciato', 'lascerà', 'lasciasse'], why: 'A guess about the past.' },
      { q: 'Una notte il fiume ___ via il ponte.', o: ['portò', 'porta', 'portasse'], why: 'A single finished event in a story.' },
      { q: 'Mio nonno ___ in un piccolo paese.', o: ['nacque', 'nasceva', 'è nasciuto'], why: '*Nascere* → *nacque*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
      { q: 'Quando ___ a casa, mangeremo. (lui, arrivare)', a: ['sarà arrivato'], why: '*Sarà arrivato*.' },
      { q: 'Il re ___ tre figli. (avere, passato remoto)', a: ['ebbe'], why: '*Avere* → *ebbe*.' },
      { q: 'Dov’è Anna? – ___ in biblioteca. (essere)', a: ['Sarà'], why: 'A guess about the present.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the infinitive with the form for lui / lei.', pairs: [
      ['essere', 'fu'],
      ['fare', 'fece'],
      ['dire', 'disse'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence.', items: [
      { q: 'Finirò il lavoro. Poi ti chiamerò.', cue: 'Appena', a: ['Appena avrò finito il lavoro, ti chiamerò.'], why: '*Appena* + futuro anteriore.' },
      { q: 'Ha preso un pesce.', a: ['Prese un pesce.'], why: '*Ha preso* → *prese*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Quando [avrà] arrivato, mangeremo.', a: ['sarà'], why: '*Arrivare* uses *essere*.' },
      { s: 'Il fiume [portai] via il ponte.', a: ['portò'], why: 'The *lui / lei* form: *portò*.' },
    ] },
  ],
};
