// Italian A1, unit 7 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u7',
  title: 'In town',
  goal: 'Find places in town, ask the way and use public transport.',
  art: 'suitcase',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['town', 'places', 'andare', 'directions', 'imperative', 'transport', 'tickets'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Dov’è la stazione?',
      about: 'Places in town, the verb andare and a + the article.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'To find a place, ask **Dov’è …?** (for one place) or **Dove sono …?** (for several): *Dov’è la stazione? Dove sono i bagni?* A polite way to start is **Scusi** (excuse me). The answer is usually **È** + where: *È accanto alla posta.*' },
          { t: 'table', caption: 'Places in town', explain: ['head', 'col1'], head: ['Italian', 'English'], rows: [
            ['la stazione', 'railway station'],
            ['la posta', 'post office'],
            ['la banca', 'bank'],
            ['la farmacia', 'chemist’s'],
            ['il supermercato', 'supermarket'],
            ['il museo', 'museum'],
            ['il parco', 'park'],
            ['l’ospedale (m.)', 'hospital'],
            ['la scuola', 'school'],
            ['il centro', 'town centre'],
            ['la strada, la via', 'street'],
            ['la piazza', 'square'],
          ] },
          { t: 'tip', art: 'owl', md: 'In most Italian towns the main **piazza** has the town hall (**il comune**) and a church (**la chiesa**). Many streets are called **via**: *via Roma*. In an address, the street comes first and then the number: *via Roma 12.*' },
        ],
        [
          { t: 'text', md: '**andare** means *to go*. It is irregular. After **andare**, use **a** to say where: *Vado a Roma.* With a place that has an article, the small word **a** joins with it: **al** (a + il), **allo**, **all’**, **alla**, **ai**, **agli**, **alle**. *Vado al museo, alla posta, all’ospedale, ai giardini.* With some words, use **in**: *in centro, in banca, in farmacia, in piazza.*' },
          { t: 'table', caption: 'andare (to go)', quiz: true, head: ['', 'andare'], rows: [
            ['io', 'vado'],
            ['tu', 'vai'],
            ['lui / lei / Lei', 'va'],
            ['noi', 'andiamo'],
            ['voi', 'andate'],
            ['loro', 'vanno'],
          ] },
          { t: 'examples', items: [
            { s: '**Vado alla** banca.', n: '*banca* is feminine: *alla*.' },
            { s: 'Lei **va al** museo.', n: '*a* + *il* = *al*.' },
            { s: 'Andiamo **all’**ospedale.', n: 'Before a vowel: *all’*.' },
            { s: 'Vanno **ai** giardini pubblici.', n: '*a* + *i* = *ai*.' },
            { s: 'Voi **andate** dove? – **Andiamo** in centro.', n: '*in centro*, without the article.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the forms of andare.', verb: 'andare', tense: 'present', rows: [
            ['io', 'vado'],
            ['tu', 'vai'],
            ['lui / lei', 'va'],
            ['noi', 'andiamo'],
            ['voi', 'andate'],
            ['loro', 'vanno'],
          ] },
          { t: 'ex', kind: 'select', h: 'Choose al, alla, allo, all’ or ai.', items: [
            { q: 'Vado ___ stazione.', o: ['alla', 'al', 'ai'], why: '*stazione* is feminine: *alla*.' },
            { q: 'Lei va ___ supermercato.', o: ['al', 'alla', 'ai'], why: '*supermercato* is masculine: *al*.' },
            { q: 'Andiamo ___ ospedale.', o: ['all’', 'alla', 'al'], why: 'Before a vowel: *all’ospedale*.' },
            { q: 'Vanno ___ giardini.', o: ['ai', 'al', 'alla'], why: 'Plural: *ai giardini*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'picture', h: 'What is it?', items: [
            { pic: 'train', o: ['il treno', 'l’autobus', 'la bicicletta'], why: 'A train: *il treno*.' },
            { pic: 'bus', o: ['l’autobus', 'il treno', 'il biglietto'], why: 'A bus: *l’autobus*.' },
            { pic: 'bicycle', o: ['la bicicletta', 'l’autobus', 'la chiave'], why: 'A bicycle: *la bicicletta*.' },
            { pic: 'ticket', o: ['il biglietto', 'il treno', 'l’ombrello'], why: 'A ticket: *il biglietto*.' },
          ] },
          { t: 'ex', kind: 'label', h: 'Label the station.', scene: 'station', extra: ['la metropolitana', 'la stazione'], items: [
            { x: 110, y: 90, a: 'il treno', why: 'The train.' },
            { x: 260, y: 52, a: 'l’orologio', why: 'The clock on the wall.' },
            { x: 262, y: 116, a: 'la panchina', why: 'The bench.' },
            { x: 290, y: 140, a: 'la valigia', why: 'The suitcase.' },
            { x: 150, y: 160, a: 'il binario', why: 'The platform.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Giri a destra',
      about: 'Ask the way and give directions with the imperative.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'To ask the way, say **Scusi, come arrivo alla stazione?** or **Scusi, dov’è la stazione?** The answer uses the **imperative** with **Lei**. For verbs in **-are**, the Lei imperative ends in **-i**; for verbs in **-ere** and **-ire** it ends in **-a**. *Giri a destra. Attraversi la piazza. Continui dritto. Prenda la seconda strada. Vada dritto.* **andare** and **prendere** are irregular in this form: *vada, prenda.*' },
          { t: 'table', caption: 'Directions', explain: ['head', 'col1'], head: ['Italian', 'English'], rows: [
            ['Vada dritto.', 'Go straight on.'],
            ['Giri a sinistra.', 'Turn left.'],
            ['Giri a destra.', 'Turn right.'],
            ['Prenda la prima strada a sinistra.', 'Take the first street on the left.'],
            ['Attraversi la piazza.', 'Cross the square.'],
            ['Continui fino al semaforo.', 'Keep going to the traffic lights.'],
            ['È di fronte alla banca.', 'It is opposite the bank.'],
            ['È all’angolo.', 'It is on the corner.'],
          ] },
          { t: 'tip', art: 'owl', md: 'With a friend, use the **tu** form: *Vai dritto, gira a sinistra, prendi la seconda strada.* For **-are** verbs, the **tu** command is the same as the **lui / lei** form: *gira*. In a negative command with **tu**, use **non** + the infinitive: **Non girare a destra.** With **Lei**, use **non** + the Lei form: **Non giri a destra.**' },
        ],
        [
          { t: 'dialogue', title: 'Scusi', lines: [
            { who: 'Paolo', s: 'Scusi, signora. Come arrivo alla stazione, per favore?' },
            { who: 'Giulia', s: 'Vada dritto, poi giri a sinistra al semaforo.' },
            { who: 'Paolo', s: 'È lontano?' },
            { who: 'Giulia', s: 'No, è a cinque minuti a piedi. La stazione è di fronte alla posta.' },
            { who: 'Paolo', s: 'Grazie mille, signora!' },
            { who: 'Giulia', s: 'Prego.' },
          ] },
          { t: 'text', md: 'To say *near* and *far*, use **vicino** and **lontano**: *È vicino alla stazione* and *È lontano dalla posta*. The distance in time is **a cinque minuti a piedi** (five minutes on foot). The ordinal numbers are **primo** (first), **secondo** (second), **terzo** (third). **Prego** is the answer to *grazie*.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Find the English.', pairs: [
            ['Vada dritto.', 'Go straight on.'],
            ['Giri a destra.', 'Turn right.'],
            ['È di fronte alla banca.', 'It is opposite the bank.'],
            ['È lontano.', 'It is far.'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the imperative with Lei.', items: [
            { q: '___ a sinistra. (girare)', a: ['Giri'], why: 'Verbs in *-are*: *Giri!*' },
            { q: '___ la piazza. (attraversare)', a: ['Attraversi'], why: '*Attraversi la piazza.*' },
            { q: '___ la seconda strada a destra. (prendere)', a: ['Prenda'], why: '*Prenda la seconda strada.*' },
            { q: '___ dritto. (andare)', a: ['Vada'], why: '*Vada dritto.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Giri a sinistra al semaforo.', why: 'Verb first, then direction, then the place.' },
            { a: 'La posta è di fronte alla banca.', why: '*di fronte a* = opposite.' },
            { a: 'Prenda la prima strada a destra.', why: '*Prenda* + street + direction.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'You are at the station. Choose the best answer.', items: [
            { q: 'Qualcuno chiede: «Dov’è la banca?» Lei dice: «___»', o: ['Vada dritto.', 'Vado alla banca.', 'Ha un biglietto.'], why: 'You give directions.' },
            { q: 'La stazione è accanto alla posta. Lei dice: «È ___ alla posta.»', o: ['accanto', 'sotto', 'dietro il'], why: '*accanto alla posta*' },
            { q: 'È a due minuti. Lei dice: «È ___.»', o: ['vicino', 'lontano', 'davanti'], why: 'Two minutes is close: *vicino*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Un biglietto per Firenze',
      about: 'Travel by bus, metro and train, and buy a ticket.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'To say how you travel, use **in** + a vehicle (*in autobus, in metropolitana, in treno, in macchina, in bicicletta*) and **a piedi** for walking. To say where you come from, use **venire da**: *Vengo da Firenze.* **venire** is irregular: *vengo, vieni, viene, veniamo, venite, vengono.* With a person or a place with an article, **da** joins with it: *Vengo dalla stazione, dal lavoro.*' },
          { t: 'table', caption: 'Transport', explain: ['head', 'col1'], head: ['Italian', 'English'], rows: [
            ['in autobus', 'by bus'],
            ['in metropolitana', 'by metro'],
            ['in treno', 'by train'],
            ['in macchina', 'by car'],
            ['a piedi', 'on foot'],
            ['in bicicletta', 'by bicycle'],
            ['un biglietto', 'a ticket'],
            ['solo andata', 'single'],
            ['andata e ritorno', 'return'],
          ] },
          { t: 'examples', items: [
            { s: 'Vado al lavoro **in autobus**.', n: '*in autobus*' },
            { s: 'Andiamo a scuola **a piedi**.', n: '*a piedi*' },
            { s: 'Lei **viene da** Firenze.', n: '*venire da* + a place.' },
            { s: '**Un biglietto di sola andata** per Firenze, per favore.', n: 'One way.' },
            { s: 'Il treno **parte alle** otto.', n: '*partire alle* + time.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'Alla biglietteria', lines: [
            { who: 'Paolo', s: 'Buongiorno, un biglietto di andata e ritorno per Firenze, per favore.' },
            { who: 'Bigliettaio', s: 'Per quando?' },
            { who: 'Paolo', s: 'Per domani mattina. A che ora parte il treno?' },
            { who: 'Bigliettaio', s: 'Alle otto e dieci, dal binario tre.' },
            { who: 'Paolo', s: 'Perfetto. Quanto costa?' },
            { who: 'Bigliettaio', s: 'Trentadue euro. Paga con la carta?' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Italy, you must **convalidare** (stamp) some tickets in a small machine before you get on the train or the bus. Look for the small machines near the platform. Ask **Da quale binario parte?** (From which platform?). **Il binario** is the platform.' },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose in or a.', items: [
            { q: 'Vado al lavoro ___ bicicletta.', o: ['in', 'a', 'con'], why: '*in bicicletta*' },
            { q: 'Andiamo al centro ___ treno.', o: ['in', 'a', 'su'], why: '*in treno*' },
            { q: 'Torna a casa ___ piedi.', o: ['a', 'in', 'con'], why: '*a piedi*' },
            { q: 'Venite ___ macchina?', o: ['in', 'a', 'da'], why: '*in macchina*' },
          ] },
          { t: 'ex', kind: 'conjugate', h: 'Write the forms of venire.', verb: 'venire', tense: 'present', rows: [
            ['io', 'vengo'],
            ['tu', 'vieni'],
            ['lui / lei', 'viene'],
            ['noi', 'veniamo'],
            ['voi', 'venite'],
            ['loro', 'vengono'],
          ] },
        ],
        [
          { t: 'ex', kind: 'bank', h: 'Fill the gaps with the words in the bank.', extra: ['partenza', 'ritorno'], items: [
            { q: 'Vorrei un biglietto di sola ___ per Firenze.', a: 'andata', why: '*sola andata* is a single ticket.' },
            { q: 'Il treno parte dal ___ tre.', a: 'binario', why: '*il binario* is the platform.' },
            { q: 'Per andare al centro, prendo l’___.', a: 'autobus', why: '*l’autobus*' },
            { q: 'Paga con la ___?', a: 'carta', why: '*con la carta* means by card.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
            { q: 'You want to buy a ticket:', o: ['Un biglietto per Firenze, per favore.', 'Il treno è grande.', 'Piove.'], why: 'You ask for a ticket with *per* + the place.' },
            { q: 'You ask the time of the train:', o: ['A che ora parte il treno?', 'Da dove viene?', 'Dov’è la banca?'], why: '*partire a che ora?*' },
            { q: 'You go to work by bus. You say:', o: ['Vado al lavoro in autobus.', 'Vado al lavoro a autobus.', 'Vengo al lavoro in autobus.'], why: '*in autobus*' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Una mappa della città',
      about: 'Read a city map text and a ticket machine screen.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'reading', title: 'Il centro', md: '**Benvenuti in centro!**\nLa stazione è a nord, accanto alla piazza. Di fronte alla stazione ci sono la posta e la banca. Per andare al museo, prenda via della Pace e giri a destra: il museo è all’angolo, di fronte al parco. Il supermercato è a cinque minuti a piedi, dietro la chiesa. In piazza c’è un ufficio turistico, accanto al comune.' },
          { t: 'reading', title: 'La biglietteria automatica', md: '**Scelga il suo viaggio**\nBiglietto singolo: 2 €\nCarnet da dieci biglietti: 16 €\nAbbonamento giornaliero: 6 €\n\nPaghi con carta o in contanti.\nNon dimentichi di convalidare il biglietto.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'La stazione è accanto alla piazza.', a: 't', why: '*La stazione è a nord, accanto alla piazza.*' },
            { q: 'La posta è dietro la stazione.', a: 'f', why: 'The post office is *di fronte alla stazione* (opposite the station).' },
            { q: 'Il museo è di fronte al parco.', a: 't', why: '*il museo è all’angolo, di fronte al parco*' },
            { q: 'Il supermercato è vicino al museo.', a: 'ng', why: 'The text says where the supermarket is, but not how far it is from the museum.' },
            { q: 'Un biglietto singolo costa due euro.', a: 't', why: '*Biglietto singolo: 2 €*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Per andare al museo, si gira…', o: ['a destra', 'a sinistra', 'dritto'], why: '*prenda via della Pace e giri a destra*' },
            { q: 'Che cosa c’è accanto al comune?', o: ['un ufficio turistico', 'un parco', 'una banca'], why: '*un ufficio turistico, accanto al comune*' },
            { q: 'L’abbonamento giornaliero costa…', o: ['sei euro', 'sedici euro', 'due euro'], why: '*Abbonamento giornaliero: 6 €*' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the texts.', items: [
            { q: 'Si può pagare con carta o in ___.', a: ['contanti'], why: '*Paghi con carta o in contanti.*' },
            { q: 'Non bisogna dimenticare di ___ il biglietto.', a: ['convalidare'], why: '*convalidare il biglietto*' },
            { q: 'Il supermercato è dietro la ___.', a: ['chiesa'], why: '*dietro la chiesa*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Vado ___ stazione.', o: ['alla', 'al', 'ai'], why: '*stazione* is feminine: *alla*.' },
      { q: 'Lei va ___ museo.', o: ['al', 'alla', 'ai'], why: '*museo* is masculine: *al*.' },
      { q: 'Andiamo al lavoro ___ autobus.', o: ['in', 'a', 'al'], why: '*in autobus*' },
      { q: 'La posta è ___ alla banca. (opposite)', o: ['di fronte', 'dietro', 'su'], why: '*di fronte a* means opposite.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Voi ___ dove? (andare)', a: ['andate'], why: '*voi andate*' },
      { q: '___ a destra. (girare, Lei)', a: ['Giri'], why: 'The imperative: *Giri!*' },
      { q: 'Lei ___ da Firenze. (venire)', a: ['viene'], why: '*lei viene*' },
    ] },
    { t: 'ex', kind: 'match', h: 'Find the English.', pairs: [
      ['a piedi', 'on foot'],
      ['solo andata', 'single'],
      ['dritto', 'straight on'],
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Vada dritto, poi giri a sinistra.', why: 'Two imperatives joined by *poi*.' },
      { a: 'Il treno parte alle otto e dieci.', why: 'Subject, *parte*, time.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Vado [a il] museo.', a: ['al'], why: '*a* + *il* = *al*.' },
      { s: 'Loro [andono] alla stazione.', a: ['vanno'], why: '*loro vanno*' },
    ] },
    { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
      { q: 'Per andare alla stazione, ___ dritto.', o: ['vada', 'vado', 'vanno'], why: 'The imperative with *Lei*: *vada*.' },
    ] },
  ],
};
