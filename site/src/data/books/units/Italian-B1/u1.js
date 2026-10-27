// Italian B1, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'Telling stories',
  goal: 'Tell a story about the past and link the events clearly. Use the passato prossimo and the imperfetto together, the trapassato prossimo for what happened before, and words like mentre, appena and finché non.',
  art: 'owl',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['passato prossimo', 'imperfetto', 'trapassato prossimo', 'narration', 'connectors'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'The event and its background',
      about: 'Use the passato prossimo for events and the imperfetto for the scene around them.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'In a story, two past tenses work together. The **passato prossimo** gives the events, the things that happened one after the other: *Ho aperto la porta. Ho visto un gatto.* The **imperfetto** gives the background: the weather, the time, how people felt, what was going on, and what used to happen again and again: *Pioveva. Ero stanco. Il gatto dormiva.*' },
          { t: 'table', caption: 'Which tense?', explain: ['head', 'col1'], head: ['Tense', 'What it tells you', 'Example'], rows: [
            ['passato prossimo', 'a finished event, one step of the story', 'Sono uscito alle otto.'],
            ['imperfetto', 'the scene: weather, time, feelings, descriptions', 'Faceva freddo ed ero stanco.'],
            ['imperfetto', 'a habit in the past', 'Ogni domenica andavamo dai nonni.'],
            ['imperfetto', 'an action in progress when something else happened', 'Camminavo quando ho visto Paolo.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Time words help. *Ieri, una volta, all’improvviso, alle otto* often go with the passato prossimo. *Sempre, ogni giorno, di solito, spesso, da piccolo* often go with the imperfetto. But it is the idea that decides: an event moves the story forward, the background does not.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Ieri sera **sono tornato** tardi perché **pioveva** molto.', n: 'The event is *sono tornato*; the weather is the background.' },
            { s: 'Quando **ero** piccola, **abitavo** a Torino.', n: 'Two imperfetti: a description of a period of life.' },
            { s: '**Ho aperto** la porta e **ho visto** un gatto. Il gatto **dormiva** sul divano.', n: 'Two events in a row, then the scene.' },
            { s: 'Mentre **camminavo**, **ho incontrato** Paolo.', n: 'The long action is in the imperfetto; the short one interrupts it.' },
            { s: '**Era** una bella giornata e **c’era** il sole, così **siamo usciti**.', n: 'The background first, then the event.' },
          ] },
          { t: 'dialogue', title: 'Che cosa hai fatto ieri sera?', lines: [
            { who: 'Giulia', s: 'Che cosa hai fatto ieri sera?' },
            { who: 'Marco', s: 'Sono rimasto a casa. Faceva freddo e pioveva, così ho guardato un film.' },
            { who: 'Giulia', s: 'Che film?' },
            { who: 'Marco', s: 'Non ricordo il titolo. Ero stanco e a metà film mi sono addormentato.' },
            { who: 'Giulia', s: 'Allora non hai visto la fine!' },
            { who: 'Marco', s: 'No, e quando mi sono svegliato, erano già le due.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right tense.', items: [
            { q: 'Ieri sera ___ un bel film.', o: ['ho visto', 'vedevo', 'vedo'], why: 'One finished event yesterday: the passato prossimo.' },
            { q: 'Quando ero piccolo, ogni domenica ___ dai nonni.', o: ['andavo', 'sono andato', 'andrò'], why: 'A habit in the past: the imperfetto.' },
            { q: 'Mentre ___ la cena, è suonato il telefono.', o: ['preparavo', 'ho preparato', 'preparerò'], why: 'The action in progress: the imperfetto. *È suonato* is the event that interrupts it.' },
            { q: 'All’improvviso la luce ___.', o: ['è andata via', 'andava via', 'andrà via'], why: '*All’improvviso* brings an event: the passato prossimo.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right tense.', items: [
            { q: 'Ieri sera ___ molto freddo, così siamo rimasti a casa. (fare)', a: ['faceva'], why: 'The weather is the background: *faceva*.' },
            { q: 'Il gatto ___ sul divano quando sono entrato. (dormire)', a: ['dormiva'], why: 'An action in progress: *dormiva*.' },
            { q: 'Che cosa ___ ieri sera? (tu, fare)', a: ['hai fatto'], why: 'A finished event: *hai fatto*.' },
            { q: 'Mentre ___ la doccia, ho sentito il telefono. (io, fare)', a: ['facevo'], why: '*Mentre* + a long action: *facevo*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Event or background? Sort the verbs.', explain: ['groups'], groups: ['Event (passato prossimo)', 'Background (imperfetto)'], items: [
            { s: 'sono arrivato', g: 0, why: 'One step of the story.' },
            { s: 'ho aperto', g: 0, why: 'One step of the story.' },
            { s: 'ho chiamato', g: 0, why: 'One step of the story.' },
            { s: 'faceva freddo', g: 1, why: 'The weather: the scene.' },
            { s: 'pioveva', g: 1, why: 'The weather: the scene.' },
            { s: 'ero stanco', g: 1, why: 'A feeling: the scene.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
            { q: 'Ieri pioveva, così noi ___ a casa.', o: ['siamo rimasti', 'rimanevamo', 'rimarremo'], why: 'The decision is an event: *siamo rimasti*.' },
            { q: 'Da bambina ___ i capelli lunghi.', o: ['avevo', 'ho avuto', 'avrò'], why: 'A description: the imperfetto.' },
            { q: 'Quando ho aperto la porta, ___ un forte odore di fumo.', o: ['c’era', 'c’è stato', 'ci sarà'], why: 'The scene around the event: *c’era*.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs that give the background.', items: [
            { s: 'Ieri sono uscito alle otto. [Era] presto e [faceva] freddo.', why: '*Era* and *faceva* describe the scene; *sono uscito* is the event.' },
            { s: 'Ho aperto la finestra perché [c’era] troppo caldo.', why: '*C’era* is the reason in the background.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'What had already happened',
      about: 'Use the trapassato prossimo for an action before another past action.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'The **trapassato prossimo** is the past of the past. It says that something had already happened before another moment in the story. It is made with the **imperfetto** of *avere* or *essere* and the **past participle**: *avevo mangiato, ero partito*. The choice of *avere* or *essere* is the same as in the passato prossimo, and with *essere* the participle agrees: *ero partita, eravamo partiti*.' },
          { t: 'table', caption: 'mangiare and partire in the trapassato prossimo', quiz: true, head: ['', 'mangiare', 'partire'], rows: [
            ['io', 'avevo mangiato', 'ero partito / partita'],
            ['tu', 'avevi mangiato', 'eri partito / partita'],
            ['lui / lei / Lei', 'aveva mangiato', 'era partito / partita'],
            ['noi', 'avevamo mangiato', 'eravamo partiti / partite'],
            ['voi', 'avevate mangiato', 'eravate partiti / partite'],
            ['loro', 'avevano mangiato', 'erano partiti / partite'],
          ] },
          { t: 'tip', art: 'owl', md: 'Reflexive verbs use *essere*: *mi ero svegliata, si erano incontrati*. The words **già** (already), **mai** (never) and **non … ancora** (not yet) often go with this tense: *Non avevo ancora mangiato. Non ero mai stato a Roma.*' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Quando sono arrivata alla stazione, il treno **era** già **partito**.', n: 'The train left first, then I arrived.' },
            { s: 'Prima di quel viaggio non **avevo** mai **preso** l’aereo.', n: '*Mai* with the trapassato: the first time.' },
            { s: 'Marco era stanco perché **aveva lavorato** tutto il giorno.', n: 'The reason came before the tiredness.' },
            { s: 'Mi **ero** appena **svegliata** quando ha suonato il telefono.', n: 'A reflexive verb with *essere*.' },
            { s: 'Siamo andati da Paolo, ma lui **era** già **uscito**.', n: 'He left before we arrived.' },
          ] },
          { t: 'dialogue', title: 'Un ritardo', lines: [
            { who: 'Sara', s: 'Perché sei arrivato così tardi ieri sera?' },
            { who: 'Paolo', s: 'Avevo perso l’autobus, così ho aspettato il successivo.' },
            { who: 'Sara', s: 'Non avevi il motorino?' },
            { who: 'Paolo', s: 'Sì, ma l’avevo prestato a mio fratello.' },
            { who: 'Sara', s: 'Ti avevo scritto un messaggio.' },
            { who: 'Paolo', s: 'Lo so, ma avevo lasciato il telefono a casa e l’ho letto solo dopo.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the trapassato prossimo of finire.', verb: 'finire', tense: 'trapassato prossimo', rows: [
            ['io', 'avevo finito'],
            ['tu', 'avevi finito'],
            ['lui / lei', 'aveva finito'],
            ['noi', 'avevamo finito'],
            ['voi', 'avevate finito'],
            ['loro', 'avevano finito'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the right form of avere or essere.', items: [
            { q: 'Quando sono arrivato, il film ___ già cominciato. (essere)', a: ['era'], why: '*Cominciare* here is intransitive: *era già cominciato*. The film started first.' },
            { q: 'Non ___ mai visto il mare prima di quel viaggio. (io, avere)', a: ['avevo'], why: '*Vedere* uses *avere*: *non avevo mai visto*.' },
            { q: 'Mi ___ appena svegliata quando ha suonato il telefono. (essere)', a: ['ero'], why: 'Reflexive verbs use *essere*: *mi ero svegliata*.' },
            { q: 'Quando siamo usciti, ___ già smesso di piovere. (avere)', a: ['aveva'], why: '*Smettere* uses *avere*: *aveva smesso*.' },
            { q: 'Le ragazze ___ già partite quando siamo arrivati. (essere)', a: ['erano'], why: '*Partire* uses *essere*: *erano partite*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the trapassato prossimo of arrivare.', verb: 'arrivare', tense: 'trapassato prossimo', rows: [
            ['io (m)', 'ero arrivato'],
            ['tu (f)', 'eri arrivata'],
            ['lui', 'era arrivato'],
            ['lei', 'era arrivata'],
            ['noi (m)', 'eravamo arrivati'],
            ['loro (f)', 'erano arrivate'],
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Quando sono arrivato, il treno [aveva] già partito.', a: ['era'], why: '*Partire* uses *essere*: *era già partito*.' },
            { s: 'Prima di quel viaggio non [avevo] mai stato a Roma.', a: ['ero'], why: '*Essere* uses *essere*: *non ero mai stato*.' },
            { s: 'Maria si [aveva] già vestita quando sono arrivato.', a: ['era'], why: 'Reflexive verbs use *essere*: *si era vestita*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right tense.', items: [
            { q: 'Prima di quel viaggio non ___ mai preso l’aereo.', o: ['avevo', 'ho', 'avrei'], why: '*Prima di quel viaggio* looks back from the story: *avevo preso*.' },
            { q: 'Quando siamo arrivati, la mostra ___ già chiusa.', o: ['era', 'è', 'sarà'], why: 'It closed before we arrived: *era già chiusa*.' },
            { q: 'Non sono andato al cinema perché avevo già ___ il film.', o: ['visto', 'vedo', 'vedevo'], why: 'After *avevo*, the past participle: *avevo già visto*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Join the two events with quando. Say which one happened first.', items: [
            { q: 'Sono arrivato alla stazione. Il treno è partito prima.', cue: 'Quando', a: ['Quando sono arrivato alla stazione, il treno era già partito.', 'Quando sono arrivato alla stazione, il treno era partito.', 'Quando sono arrivata alla stazione, il treno era già partito.', 'Quando sono arrivata alla stazione, il treno era partito.'], why: 'The first event goes in the trapassato: *il treno era già partito*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Non avevo mai visto il mare prima di quel viaggio.', why: '*Non avevo mai visto*: the trapassato with *mai*.' },
            { a: 'Mi ero appena svegliata quando ha suonato il telefono.', why: '*Mi ero svegliata* came before the phone call.' },
            { a: 'Marco era stanco perché aveva lavorato tutto il giorno.', why: 'The reason comes first in time: *aveva lavorato*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Linking the events',
      about: 'Use mentre, appena, all’improvviso, prima di, dopo che, da quando and finché non.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'A good story has links between its events. **Mentre** (while) goes with the imperfetto for the long action. **All’improvviso** (suddenly) brings a sudden event. **Appena** (as soon as) and **dopo che** (after) go with the passato prossimo. **Prima di** (before) is followed by the infinitive. **Da quando** (since) goes with the present when the situation continues. **Finché non** (until) says how long something lasted.' },
          { t: 'table', caption: 'Words that link a story', explain: ['head', 'col1'], head: ['Word', 'Meaning', 'Example'], rows: [
            ['mentre', 'while, at the same time', 'Mentre cenavamo, è saltata la luce.'],
            ['all’improvviso', 'suddenly', 'All’improvviso il cane ha abbaiato.'],
            ['appena', 'as soon as', 'Appena sono arrivata, ho chiamato Paolo.'],
            ['prima di + infinitive', 'before', 'Prima di uscire, ho chiuso le finestre.'],
            ['dopo che', 'after', 'Dopo che abbiamo mangiato, siamo usciti.'],
            ['da quando', 'since', 'Da quando vivo a Bologna, ho molti amici.'],
            ['finché non', 'until', 'Ho aspettato finché non è arrivato l’autobus.'],
          ] },
          { t: 'tip', art: 'owl', md: 'After **prima di**, use the infinitive, never a conjugated verb: *prima di partire*, not *prima di sono partito*. After **finché non**, the verb is conjugated: *finché non è arrivato*. The *non* here does not make the sentence negative.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Mentre** cenavamo, **è saltata** la luce.', n: 'A long action interrupted.' },
            { s: '**All’improvviso** il cane **ha cominciato** ad abbaiare.', n: 'A sudden event.' },
            { s: '**Appena** sono arrivata a casa, **ho acceso** la luce.', n: 'One event right after another.' },
            { s: '**Dopo che** abbiamo mangiato, siamo andati a passeggio.', n: '*Dopo che* + passato prossimo.' },
            { s: 'Ho aspettato **finché non** è arrivato l’autobus.', n: 'The waiting lasted until the bus came.' },
          ] },
          { t: 'dialogue', title: 'Le chiavi', lines: [
            { who: 'Giulia', s: 'Che cosa è successo ieri?' },
            { who: 'Paolo', s: 'Mentre tornavo a casa, ho notato che non avevo le chiavi.' },
            { who: 'Giulia', s: 'E allora?' },
            { who: 'Paolo', s: 'Sono tornato in ufficio, ma era già chiuso. Ho aspettato finché non è arrivato il custode.' },
            { who: 'Giulia', s: 'E le chiavi?' },
            { who: 'Paolo', s: 'Erano sulla mia scrivania!' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
            ['mentre', 'at the same time as'],
            ['all’improvviso', 'suddenly'],
            ['appena', 'as soon as'],
            ['finché non', 'until'],
            ['da quando', 'since'],
            ['prima di', 'before'],
          ] },
          { t: 'ex', kind: 'bank', h: 'Choose the word for each gap.', extra: ['dopo', 'prima'], items: [
            { q: '___ cenavamo, è saltata la luce.', a: 'mentre', why: 'A long action interrupted: *mentre* + imperfetto.' },
            { q: '___ il cane ha cominciato ad abbaiare.', a: 'all’improvviso', why: 'A sudden event.' },
            { q: '___ sono arrivata a casa, ho acceso la luce.', a: 'appena', why: 'One event right after another.' },
            { q: 'Ho aspettato ___ non è arrivato l’autobus.', a: 'finché', why: '*Finché non* = until.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: '___ studiavo, mio fratello guardava la televisione.', o: ['Mentre', 'Appena', 'Finché non'], why: 'Two actions at the same time: *mentre*.' },
            { q: '___ sono arrivato, ho chiamato mia madre.', o: ['Appena', 'Mentre', 'Da quando'], why: 'One event right after another: *appena*.' },
            { q: '___ vivo a Torino, ho molti amici.', o: ['Da quando', 'Finché non', 'All’improvviso'], why: 'The situation continues: *da quando* + present.' },
            { q: '___ uscire, ho chiuso le finestre.', o: ['Prima di', 'Dopo', 'Mentre'], why: '*Prima di* + infinitive.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Dopo ___ abbiamo mangiato, siamo usciti.', a: ['che'], why: '*Dopo che* + passato prossimo.' },
            { q: 'Prima ___ partire, ho controllato i documenti.', a: ['di'], why: '*Prima di* + infinitive.' },
            { q: 'Ho studiato finché ___ ho capito tutto.', a: ['non'], why: '*Finché non* = until.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Mentre cenavamo, è saltata la luce.', why: '*Mentre* + imperfetto, then the event.' },
            { a: 'Appena sono arrivata, ho chiamato Paolo.', why: '*Appena* + passato prossimo.' },
            { a: 'Prima di uscire, ho chiuso le finestre.', why: '*Prima di* + infinitive.' },
          ] },
          { t: 'ex', kind: 'build', h: 'Build the sentence. Some words do not belong.', items: [
            { a: 'Dopo che abbiamo mangiato, siamo usciti.', extra: ['prima', 'avevamo'], why: '*Dopo che* + passato prossimo.' },
            { a: 'Mentre camminavo, ho incontrato Marco.', extra: ['camminato', 'all’improvviso'], why: 'The long action in the imperfetto, the short one in the passato prossimo.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Is the sentence correct?', items: [
            { q: 'Si dice «Mentre cenavamo, è saltata la luce».', a: 't', why: 'The long action in the imperfetto, the event in the passato prossimo.' },
            { q: 'Si dice «Prima di sono uscito, ho chiuso le finestre».', a: 'f', why: '*Prima di* needs the infinitive: *prima di uscire*.' },
            { q: 'Si dice «Da quando vivo a Torino, ho molti amici».', a: 't', why: '*Da quando* + present for a situation that continues.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'La storia di nonna Rosa',
      about: 'Read a short life story and notice how the tenses work together.',
      art: 'owl',
      spreads: [
        [
          { t: 'reading', title: 'La storia di nonna Rosa', md: 'Mi chiamo Rosa e ho settantadue anni. Sono nata in un piccolo paese di montagna. Da bambina vivevo con i miei genitori e i miei tre fratelli in una casa di pietra. Non avevamo la televisione e giocavamo sempre all’aperto. D’inverno nevicava molto e la scuola era lontana: camminavo per un’ora ogni mattina.\n\nQuando avevo diciotto anni, ho deciso di partire. Mio zio viveva a Milano e mi aveva trovato un lavoro in una fabbrica di abiti. Ho preso il treno una mattina di settembre. Non avevo mai visto una città così grande e all’inizio avevo paura. Mentre cercavo la via di mio zio, mi sono persa. Per fortuna un signore gentile mi ha accompagnata fino alla porta.\n\nA Milano ho conosciuto Carlo, mio marito. Lavorava nella stessa fabbrica. Ci siamo sposati due anni dopo e abbiamo avuto due figli. Quando sono tornata nel mio paese per la prima volta, la casa di pietra era chiusa da molti anni, ma il giardino era ancora bello. Da quando ho smesso di lavorare, torno lì ogni estate.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Rosa è nata in una grande città.', a: 'f', why: 'She was born in a small mountain village: *un piccolo paese di montagna*.' },
            { q: 'Da bambina camminava un’ora per andare a scuola.', a: 't', why: '*Camminavo per un’ora ogni mattina.*' },
            { q: 'Suo zio le aveva trovato un lavoro.', a: 't', why: '*Mi aveva trovato un lavoro in una fabbrica di abiti.*' },
            { q: 'Rosa si è sposata a Milano.', a: 'ng', why: 'The text says they married two years later, but not where.' },
            { q: 'La casa di pietra era chiusa da molti anni.', a: 't', why: '*Era chiusa da molti anni.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Come andava a scuola Rosa da bambina?', o: ['A piedi.', 'In treno.', 'In autobus.'], why: '*Camminavo per un’ora ogni mattina.*' },
            { q: 'Perché è partita a diciotto anni?', o: ['Per un lavoro a Milano.', 'Per studiare.', 'Per sposarsi.'], why: 'Her uncle had found her a job in Milan.' },
            { q: 'Che cosa è successo mentre cercava la via di suo zio?', o: ['Si è persa.', 'Ha perso il treno.', 'Ha incontrato Carlo.'], why: '*Mentre cercavo la via di mio zio, mi sono persa.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs in the trapassato prossimo.', items: [
            { s: 'Mio zio mi [aveva] [trovato] un lavoro.', why: '*Aveva trovato* happened before she took the train.' },
            { s: 'Non [avevo] mai [visto] una città così grande.', why: '*Avevo visto*: she had never seen one before.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right tense.', items: [
            { q: 'Da bambina Rosa ___ in una casa di pietra. (vivere)', a: ['viveva'], why: 'A description of her childhood: the imperfetto.' },
            { q: 'A diciotto anni Rosa ___ di partire. (decidere)', a: ['ha deciso'], why: 'One event: the passato prossimo.' },
            { q: 'Quando è arrivata a Milano, ___ paura. (lei, avere)', a: ['aveva'], why: 'A feeling in the background: the imperfetto.' },
            { q: 'Carlo ___ nella stessa fabbrica. (lavorare)', a: ['lavorava'], why: 'A description: the imperfetto.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Mio zio mi aveva trovato un lavoro a Milano.', why: 'The trapassato *aveva trovato* goes before the participle.' },
            { a: 'Da quando ho smesso di lavorare, torno lì ogni estate.', why: '*Da quando* + present for a situation that continues.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Ieri sera ___ un bel film.', o: ['ho visto', 'vedevo', 'vedo'], why: 'A finished event: the passato prossimo.' },
      { q: 'Quando ero piccola, ogni estate ___ al mare.', o: ['andavo', 'sono andata', 'andrò'], why: 'A habit in the past: the imperfetto.' },
      { q: 'Quando sono arrivato, il treno ___ già partito.', o: ['era', 'aveva', 'è'], why: '*Partire* uses *essere*: *era già partito*.' },
      { q: '___ studiavo, mio fratello guardava la televisione.', o: ['Mentre', 'Appena', 'Finché non'], why: 'Two actions at the same time: *mentre*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Faceva freddo, così noi ___ a casa. (rimanere)', a: ['siamo rimasti', 'siamo rimaste'], why: 'The decision is an event: *siamo rimasti*.' },
      { q: 'Non ___ mai visto il mare prima di quel viaggio. (io, avere)', a: ['avevo'], why: '*Non avevo mai visto*: the trapassato.' },
      { q: 'Prima ___ uscire, ho chiuso le finestre.', a: ['di'], why: '*Prima di* + infinitive.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
      ['all’improvviso', 'suddenly'],
      ['appena', 'as soon as'],
      ['finché non', 'until'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Join the two events with quando. Say which one happened first.', items: [
      { q: 'Siamo arrivati al cinema. Il film è cominciato prima.', cue: 'Quando', a: ['Quando siamo arrivati al cinema, il film era già cominciato.', 'Quando siamo arrivati al cinema, il film era cominciato.', 'Quando siamo arrivate al cinema, il film era già cominciato.', 'Quando siamo arrivate al cinema, il film era cominciato.'], why: 'The first event goes in the trapassato: *il film era già cominciato*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Mentre cenavamo, è saltata la luce.', why: '*Mentre* + imperfetto, then the event.' },
      { a: 'Mi ero appena svegliata quando ha suonato il telefono.', why: '*Mi ero svegliata* came before the phone call.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Prima di quel viaggio non [avevo] mai stato a Roma.', a: ['ero'], why: '*Essere* uses *essere*: *non ero mai stato*.' },
      { s: 'Prima di [sono uscito], ho chiuso le finestre.', a: ['uscire'], why: '*Prima di* needs the infinitive: *prima di uscire*.' },
    ] },
  ],
};
