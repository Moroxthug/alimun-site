// Italian C1, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'The language of narrative',
  goal: 'Read and write narrative Italian with the literary tenses and devices. Learn the passato remoto beyond the basics, the trapassato remoto, the imperfetto narrativo, the participio assoluto, free indirect speech and the order of dialogue tags.',
  art: 'pizza',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['passato remoto', 'trapassato remoto', 'narrative', 'literature', 'free indirect speech'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Il passato remoto',
      about: 'Learn the irregular forms of the passato remoto and when it is used.',
      art: 'pizza',
      spreads: [
        [
          { t: 'text', md: 'The **passato remoto** is the tense of **written narrative**: novels, tales and history books. It tells **finished events** in the past. You need mainly the **third person**. Regular forms: **-are** → **-ò, -arono**; **-ere** → **-ette (-é), -ettero**; **-ire** → **-ì, -irono**: *parlò, parlarono; credette, credettero; finì, finirono*. Many of the most useful verbs are **irregular**: *fu, ebbe, fece, disse, vide, venne, volle, seppe, prese, mise, scrisse, rispose, chiese, nacque, lesse, rimase, conobbe, tenne*. The plural usually ends in **-ero**.' },
          { t: 'table', caption: 'Passato remoto, third person', explain: ['head'], quiz: true, head: ['Infinitive', 'lui / lei', 'loro'], rows: [
            ['parlare', 'parlò', 'parlarono'],
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
          { t: 'tip', art: 'owl', md: 'In speech in the **north**, people use the **passato prossimo** for almost everything: *Ieri sono andato*. In the **south** and in **Tuscany**, the passato remoto is also heard in speech: *Ieri andai*. In **Swiss Italian**, the passato prossimo is the rule in speech. In writing, the passato remoto belongs to **literature and history**; a newspaper normally prefers the passato prossimo.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Aprì la porta e **uscì**.', n: 'Two events in a row.' },
            { s: 'Lui **fece** un gesto e tutti **tacquero**.', n: '*Fare*: *fece*; *tacere*: *tacquero*.' },
            { s: 'Lei **prese** la borsa e **rispose**.', n: '*Prendere*: *prese*; *rispondere*: *rispose*.' },
            { s: 'Essi **videro** arrivare il treno.', n: '*Vedere*: *videro*.' },
            { s: 'Il poeta **nacque** in un piccolo paese.', n: '*Nascere*: *nacque*.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Speech or writing? Sort the sentences.', groups: ['everyday speech (passato prossimo)', 'written narrative (passato remoto)'], explain: ['groups'], items: [
            { s: 'Ha aperto la porta.', g: 0, why: 'The tense of everyday speech.' },
            { s: 'Aprì la porta.', g: 1, why: 'The tense of narrative writing.' },
            { s: 'È partita ieri.', g: 0, why: 'The tense of everyday speech.' },
            { s: 'Partì il giorno dopo.', g: 1, why: 'The tense of narrative writing.' },
            { s: 'Hanno visto un gatto.', g: 0, why: 'The tense of everyday speech.' },
            { s: 'Videro un gatto.', g: 1, why: 'The tense of narrative writing.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the passato remoto.', items: [
            { q: 'Lui ___ la porta e uscì. (aprire)', a: ['aprì'], why: 'A regular *-ire* form: *aprì*.' },
            { q: 'Lei ___ la borsa. (prendere)', a: ['prese'], why: '*Prendere*: *prese*.' },
            { q: 'Loro ___ arrivare il treno. (vedere)', a: ['videro'], why: '*Vedere*: *videro*.' },
            { q: 'Lui ___ una lettera. (scrivere)', a: ['scrisse'], why: '*Scrivere*: *scrisse*.' },
            { q: 'Il poeta ___ in un piccolo paese. (nascere)', a: ['nacque'], why: '*Nascere*: *nacque*.' },
            { q: 'Loro ___ la verità. (dire)', a: ['dissero'], why: '*Dire*: *dissero*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the infinitive with the passato remoto.', pairs: [
            ['fare', 'fece'],
            ['vedere', 'vide'],
            ['venire', 'venne'],
            ['volere', 'volle'],
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Put the sentence in the passato remoto.', items: [
            { q: 'Anna ha aperto la porta.', cue: 'Anna', a: ['Anna aprì la porta.'], why: 'The passato remoto of *aprire*.' },
            { q: 'Lui ha fatto un gesto.', cue: 'Lui', a: ['Lui fece un gesto.'], why: 'The passato remoto of *fare*.' },
            { q: 'Loro hanno visto il treno.', cue: 'Loro', a: ['Loro videro il treno.'], why: 'The passato remoto of *vedere*.' },
            { q: 'Lui ha scritto una lettera.', cue: 'Lui', a: ['Lui scrisse una lettera.'], why: 'The passato remoto of *scrivere*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Which infinitive is it?', items: [
            { q: 'lui venne', o: ['venire', 'vendere', 'vincere'], why: '*Venne* comes from *venire*.' },
            { q: 'lei seppe', o: ['sapere', 'sedere', 'salire'], why: '*Seppe* comes from *sapere*.' },
            { q: 'loro presero', o: ['prendere', 'pregare', 'partire'], why: '*Presero* comes from *prendere*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Lui [facette] un gesto.', a: ['fece'], why: '*Fare*: *fece*.' },
            { s: 'Loro [venirono] ieri sera.', a: ['vennero'], why: '*Venire*: *vennero*.' },
            { s: 'Lei [parlette] a voce bassa.', a: ['parlò'], why: '*-are* verbs: *parlò*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Aprì la porta e uscì.', why: 'Two passato remoto verbs in a row.' },
            { a: 'Lui fece un gesto e tutti tacquero.', why: 'Two events in a row.' },
            { a: 'Lei prese la borsa e partì senza dire una parola.', why: 'Two events in a row.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Trapassato remoto e imperfetto narrativo',
      about: 'Show what happened just before another event, and use the imperfetto for background and for drama.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'The **trapassato remoto** shows an event **finished just before** another. It is made with the **passato remoto of avere or essere + the participio passato**: *Appena ebbe finito, uscì. Dopo che fu arrivata, telefonò. Quando ebbero mangiato, partirono.* It is used only after **appena, non appena, dopo che, quando** and **finché non**, and the main verb is in the **passato remoto**. The **imperfetto** gives the **background**: *Pioveva quando arrivò.* In narrative, the imperfetto can also tell an **event with drama**: *Un attimo dopo, il treno partiva.*' },
          { t: 'table', caption: 'Narrative tenses', explain: ['head', 'col1'], head: ['Tense', 'Job', 'Example'], rows: [
            ['imperfetto', 'the background', 'Pioveva. Le strade erano vuote.'],
            ['passato remoto', 'the events, one by one', 'Arrivò. Aprì la porta.'],
            ['trapassato remoto', 'an event just before another', 'Appena ebbe finito, uscì.'],
            ['trapassato remoto', 'an event just before another', 'Dopo che fu arrivata, telefonò.'],
            ['imperfetto narrativo', 'an event told with drama', 'Un attimo dopo, il treno partiva.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In speech and in everyday writing, you say **Appena ha finito, è uscito** (passato prossimo) or **Appena aveva finito, …** (trapassato prossimo). The trapassato remoto is only for a **literary style**. Remember the **agreement** with **essere**: *Dopo che fu arrivata*, with the feminine **-a**. With **dopo che**, some writers use the **indicative**, never the congiuntivo.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Pioveva** quando **arrivò**.', n: 'Background, then an event.' },
            { s: 'Appena **ebbe finito**, **uscì**.', n: 'Trapassato remoto, then passato remoto.' },
            { s: 'Dopo che **fu arrivata**, **telefonò**.', n: 'Trapassato remoto with *essere*.' },
            { s: 'Quando **ebbero mangiato**, **partirono**.', n: 'Third person plural.' },
            { s: 'Un attimo dopo, il treno **partiva**.', n: 'The imperfetto narrativo.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Background or event? Sort the sentences.', groups: ['background (imperfetto)', 'event (passato remoto)'], explain: ['groups'], items: [
            { s: 'Pioveva.', g: 0, why: 'The weather: imperfetto.' },
            { s: 'Arrivò.', g: 1, why: 'An event: passato remoto.' },
            { s: 'Le strade erano vuote.', g: 0, why: 'A description: imperfetto.' },
            { s: 'Aprì la porta.', g: 1, why: 'An event: passato remoto.' },
            { s: 'Il vento soffiava forte.', g: 0, why: 'What was going on: imperfetto.' },
            { s: 'Tacquero tutti.', g: 1, why: 'An event: passato remoto.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right tense.', items: [
            { q: '___ quando arrivò. (piovere, imperfetto)', a: ['Pioveva'], why: 'The background: imperfetto.' },
            { q: 'Il vento ___ forte. (soffiare, imperfetto)', a: ['soffiava'], why: 'The background: imperfetto.' },
            { q: 'Appena ___ finito, uscì. (avere, passato remoto)', a: ['ebbe'], why: 'Trapassato remoto: *ebbe finito*.' },
            { q: 'Dopo che ___ arrivata, telefonò. (essere, passato remoto)', a: ['fu'], why: 'Trapassato remoto: *fu arrivata*.' },
            { q: 'Quando ___ mangiato, partirono. (avere, passato remoto, loro)', a: ['ebbero'], why: 'Trapassato remoto: *ebbero mangiato*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Appena ___ finito, uscì.', o: ['ebbe', 'aveva', 'ha'], why: 'Trapassato remoto before a passato remoto.' },
            { q: '___ quando arrivò.', o: ['Pioveva', 'Piovve', 'Pioverà'], why: 'The background: imperfetto.' },
            { q: 'Dopo che ___ arrivata, telefonò.', o: ['fu', 'era', 'è'], why: 'Trapassato remoto with *essere*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Join the two sentences with the word in brackets.', items: [
            { q: 'Ha finito. Poi è uscito.', cue: 'Appena', a: ['Appena ebbe finito, uscì.'], why: 'Trapassato remoto, then passato remoto.' },
            { q: 'È arrivata. Ha telefonato subito.', cue: 'Dopo che', a: ['Dopo che fu arrivata, telefonò.'], why: 'Trapassato remoto with *essere*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Appena [fu] finito, uscì.', a: ['ebbe'], why: '*Finire* takes *avere*: *ebbe finito*.' },
            { s: 'Dopo che [ebbe] arrivata, telefonò.', a: ['fu'], why: '*Arrivare* takes *essere*: *fu arrivata*.' },
            { s: '[Piovve] quando arrivò.', a: ['Pioveva'], why: 'The background: imperfetto.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Appena ebbe finito, uscì senza far rumore.', why: 'Trapassato remoto, then passato remoto.' },
            { a: 'Dopo che fu arrivata, telefonò a sua madre.', why: 'Trapassato remoto with *essere*.' },
            { a: 'Pioveva quando arrivò alla stazione.', why: 'Imperfetto, then passato remoto.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Gli strumenti del narratore',
      about: 'Use the participio assoluto, free indirect speech and inverted dialogue tags.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Narrative Italian has its own tools. The **participio assoluto** opens a sentence with what happened **first**, and it agrees with the **subject**: *Giunta a casa, si sedette. Finita la cena, uscirono.* In **free indirect speech** (discorso indiretto libero), a character’s thoughts appear in the **tense of the narrative**, without *che* and without a reporting verb: *Esitò. Doveva dirglielo? No, era troppo presto.* In dialogue, the **tag follows** the words, and the subject often comes **after** the verb: *«Non lo so», rispose Marco. «Vieni», disse lei.*' },
          { t: 'table', caption: 'Narrative devices', explain: ['head', 'col1'], head: ['Device', 'What it does', 'Example'], rows: [
            ['participio assoluto', 'tells what happened first', 'Giunta a casa, si sedette.'],
            ['participio assoluto', 'tells what happened first', 'Finita la cena, uscirono.'],
            ['discorso indiretto libero', 'gives a thought with no *che*', 'Esitò. Doveva dirglielo? No, era troppo presto.'],
            ['inverted dialogue tag', 'verb before the subject', '«Non lo so», rispose Marco.'],
            ['inverted dialogue tag', 'verb before the subject', '«Vieni», disse lei.'],
          ] },
          { t: 'tip', art: 'owl', md: 'The **participio assoluto** needs a **subject of its own** or the same subject as the main clause, and the participle **agrees**: *giunta* (feminine) when the subject is *lei*, *giunto* (masculine) when it is *lui*. In **free indirect speech**, use questions and exclamations, and keep the **third person**. Do not use it in an everyday message: it belongs to **literature and journalism**.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Giunta** a casa, si sedette.', n: 'Participio assoluto, feminine.' },
            { s: '**Finita** la cena, uscirono.', n: 'Participio assoluto with its own subject.' },
            { s: 'Esitò. **Doveva dirglielo?** No, era troppo presto.', n: 'Free indirect speech.' },
            { s: '«Non lo so», **rispose Marco**.', n: 'The tag follows, with the verb first.' },
            { s: '«Vieni», **disse lei**.', n: 'The tag follows, with the verb first.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Which device is it? Sort the sentences.', groups: ['participio assoluto', 'inverted dialogue tag', 'free indirect speech'], explain: ['groups'], items: [
            { s: 'Giunta a casa, si sedette.', g: 0, why: 'It opens with a participle.' },
            { s: 'Finita la cena, uscirono.', g: 0, why: 'It opens with a participle.' },
            { s: '«Non lo so», rispose Marco.', g: 1, why: 'The verb comes before the subject.' },
            { s: '«Vieni», disse lei.', g: 1, why: 'The verb comes before the subject.' },
            { s: 'Esitò. Doveva dirglielo? No, era troppo presto.', g: 2, why: 'The thought, with no *che*.' },
            { s: 'Si fermò. Dove era finita?', g: 2, why: 'The thought, in a question.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Giunta a casa, si ___. (sedere, passato remoto)', a: ['sedette'], why: '*Sedersi*: *si sedette*.' },
            { q: '«Non lo so», ___ Marco. (rispondere, passato remoto)', a: ['rispose'], why: '*Rispondere*: *rispose*.' },
            { q: 'Finita la ___, uscirono. (the meal)', a: ['cena'], why: '*Finita la cena*.' },
            { q: '«Vieni», ___ lei. (dire, passato remoto)', a: ['disse'], why: '*Dire*: *disse*.' },
            { q: '___ a casa, lui si sedette. (giungere, participio, masculine)', a: ['Giunto'], why: 'The participle agrees with *lui*: *giunto*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: '___ a casa, lei si sedette.', o: ['Giunta', 'Giunto', 'Giunti'], why: 'It agrees with *lei*.' },
            { q: '«Vieni», ___ lei.', o: ['disse', 'dice', 'dirà'], why: 'The tag in the passato remoto.' },
            { q: 'Esitò. ___ dirglielo? No, era troppo presto.', o: ['Doveva', 'Deve', 'Dovrà'], why: 'Free indirect speech keeps the narrative tense.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it with the participio assoluto.', items: [
            { q: 'Dopo che fu giunta a casa, si sedette.', cue: 'Giunta', a: ['Giunta a casa, si sedette.'], why: 'The participio assoluto replaces the clause.' },
            { q: 'Dopo che fu finita la cena, uscirono.', cue: 'Finita', a: ['Finita la cena, uscirono.'], why: 'The participle agrees with *la cena*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: '[Giunto] a casa, lei si sedette.', a: ['Giunta'], why: 'It agrees with *lei*.' },
            { s: '«Non lo so», [risponde] Marco.', a: ['rispose'], why: 'The tag in the passato remoto.' },
            { s: '«Vieni», [lei disse].', a: ['disse lei'], why: 'The verb comes before the subject.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Giunta a casa, si sedette.', why: 'Participio assoluto first.' },
            { a: 'Finita la cena, uscirono.', why: 'Participio assoluto first.' },
            { a: 'Non lo so, rispose Marco.', why: 'The words, then the tag.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Il rifugio',
      about: 'Read a literary extract.',
      art: 'pizza',
      spreads: [
        [
          { t: 'reading', title: 'Il rifugio', md: 'Quando il sole ebbe superato la cresta, Luca era ancora lontano dal rifugio. Camminava da ore, e la neve cadeva fitta. Giunto a un bivio, si fermò. Dove era finito il sentiero? Non ricordava più.\n\nPoi vide una luce tra gli alberi e, senza esitare, si diresse verso di essa. Bussò. Una donna aprì la porta.\n\n— Entri, disse. Il fuoco è acceso.\n\n— Grazie, rispose lui, e posò lo zaino accanto al camino.\n\nFuori, la tormenta continuava, ma dentro faceva caldo.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Luca camminava da ore.', a: 't', why: '*Camminava da ore.*' },
            { q: 'Nevicava forte.', a: 't', why: '*La neve cadeva fitta.*' },
            { q: 'Luca si fermò a un bivio.', a: 't', why: '*Giunto a un bivio, si fermò.*' },
            { q: 'Una donna aprì la porta a Luca.', a: 't', why: '*Una donna aprì la porta.*' },
            { q: 'La donna rifiutò di farlo entrare.', a: 'f', why: '*Entri, disse.*' },
            { q: 'Luca conosceva la donna.', a: 'ng', why: 'The text does not say.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Dove si fermò Luca?', o: ['A un bivio.', 'Al rifugio.', 'Su un ponte.'], why: '*Giunto a un bivio, si fermò.*' },
            { q: 'Che cosa vide tra gli alberi?', o: ['Una luce.', 'Una casa vuota.', 'Un animale.'], why: '*Vide una luce tra gli alberi.*' },
            { q: 'Che cosa disse la donna?', o: ['Entri, il fuoco è acceso.', 'Non c’è posto.', 'Chi è lei?'], why: '*Entri, disse. Il fuoco è acceso.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs in the passato remoto.', items: [
            { s: 'Giunto a un bivio, [si fermò]. Poi [vide] una luce e [si diresse] verso di essa.', why: 'Three events in a row.' },
            { s: '[Bussò]. Una donna [aprì] la porta.', why: 'Two events in a row.' },
            { s: '— Entri, [disse]. — Grazie, [rispose] lui, e [posò] lo zaino accanto al camino.', why: 'The dialogue tags and an action.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right tense.', items: [
            { q: 'Poi ___ una luce tra gli alberi. (vedere, passato remoto)', a: ['vide'], why: '*Vedere*: *vide*.' },
            { q: 'Quando il sole ___ superato la cresta, Luca era lontano dal rifugio. (avere, passato remoto)', a: ['ebbe'], why: 'Trapassato remoto: *ebbe superato*.' },
            { q: 'Giunto a un bivio, si ___. (fermare, passato remoto)', a: ['fermò'], why: '*Fermarsi*: *si fermò*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Bussò, e una donna aprì la porta.', why: 'Two events in a row.' },
            { a: 'Fuori la tormenta continuava, ma dentro faceva caldo.', why: 'Two descriptions in the imperfetto.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Il poeta ___ in un piccolo paese. (literary)', o: ['nacque', 'nasceva', 'nasce'], why: '*Nascere*: *nacque*.' },
      { q: '___ quando arrivò.', o: ['Pioveva', 'Piovve', 'Pioverà'], why: 'The background: imperfetto.' },
      { q: 'Appena ___ finito, uscì.', o: ['ebbe', 'aveva', 'ha'], why: 'Trapassato remoto before a passato remoto.' },
      { q: '«Non lo so», ___ Marco.', o: ['rispose', 'risponde', 'risponderà'], why: 'The tag in the passato remoto.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the verb in the right tense.', items: [
      { q: 'Lui ___ una lettera. (scrivere, passato remoto)', a: ['scrisse'], why: '*Scrivere*: *scrisse*.' },
      { q: 'Loro ___ la verità. (dire, passato remoto)', a: ['dissero'], why: '*Dire*: *dissero*.' },
      { q: 'Dopo che ___ arrivata, telefonò. (essere, passato remoto)', a: ['fu'], why: 'Trapassato remoto: *fu arrivata*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the infinitive with the passato remoto.', pairs: [
      ['fare', 'fece'],
      ['vedere', 'vide'],
      ['venire', 'venne'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Say it with the word in brackets.', items: [
      { q: 'Anna ha aperto la porta.', cue: 'Anna', a: ['Anna aprì la porta.'], why: 'The passato remoto of *aprire*.' },
      { q: 'Ha finito. Poi è uscito.', cue: 'Appena', a: ['Appena ebbe finito, uscì.'], why: 'Trapassato remoto, then passato remoto.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Lui [facette] un gesto.', a: ['fece'], why: '*Fare*: *fece*.' },
      { s: 'Appena [fu] finito, uscì.', a: ['ebbe'], why: '*Finire* takes *avere*: *ebbe finito*.' },
    ] },
  ],
};
