// Italian A2, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Experiences and childhood',
  goal: 'Talk about what you used to do and what you have already done. Learn the imperfetto, and the difference between the imperfetto and the passato prossimo.',
  art: 'dragon',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['imperfetto', 'habits', 'description', 'passato prossimo', 'già', 'mai', 'childhood'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Abitavo, ero, facevo',
      about: 'Form the imperfetto.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'The **imperfetto** is the second past tense of Italian. You use it to say what you used to do, or what things were like. It is easy to form. Take the **infinitive**, remove **-re**, and add the endings: for **-are**, **-avo, -avi, -ava, -avamo, -avate, -avano**; for **-ere**, **-evo, -evi, -eva, -evamo, -evate, -evano**; for **-ire**, **-ivo, -ivi, -iva, -ivamo, -ivate, -ivano**.' },
          { t: 'table', caption: 'abitare, vedere, dormire in the imperfetto', quiz: true, head: ['', 'abitare', 'vedere', 'dormire'], rows: [
            ['io', 'abitavo', 'vedevo', 'dormivo'],
            ['tu', 'abitavi', 'vedevi', 'dormivi'],
            ['lui / lei / Lei', 'abitava', 'vedeva', 'dormiva'],
            ['noi', 'abitavamo', 'vedevamo', 'dormivamo'],
            ['voi', 'abitavate', 'vedevate', 'dormivate'],
            ['loro', 'abitavano', 'vedevano', 'dormivano'],
          ] },
          { t: 'tip', art: 'owl', md: 'The stress stays on the **-a-**, **-e-** or **-i-** before the ending, except for **loro**: *abitàvano*. Only **essere** is quite different: *ero, eri, era, eravamo, eravate, erano*. A few verbs use an older stem: **fare → facevo**, **dire → dicevo**, **bere → bevevo**, **produrre → producevo**.' },
        ],
        [
          { t: 'table', caption: 'Common verbs in the imperfetto', explain: ['head', 'col3'], head: ['Verb', 'io', 'noi', 'Meaning'], rows: [
            ['essere', 'ero', 'eravamo', 'to be'],
            ['avere', 'avevo', 'avevamo', 'to have'],
            ['andare', 'andavo', 'andavamo', 'to go'],
            ['fare', 'facevo', 'facevamo', 'to do'],
            ['giocare', 'giocavo', 'giocavamo', 'to play'],
            ['mangiare', 'mangiavo', 'mangiavamo', 'to eat'],
            ['vedere', 'vedevo', 'vedevamo', 'to see'],
            ['prendere', 'prendevo', 'prendevamo', 'to take'],
          ] },
          { t: 'examples', items: [
            { s: 'Quando **ero** piccolo, **abitavo** in campagna.', n: '*abitavo* and *ero*.' },
            { s: '**Giocavamo** in giardino tutti i giorni.', n: '*noi giocavamo*' },
            { s: 'Mio padre **lavorava** molto.', n: '*lui lavorava*' },
            { s: '**Aveva** un cane e due gatti.', n: '*lei aveva*' },
            { s: '**Andavano** a scuola a piedi.', n: '*loro andavano*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the imperfetto of essere.', verb: 'essere', tense: 'imperfetto', rows: [
            ['io', 'ero'],
            ['tu', 'eri'],
            ['lui / lei', 'era'],
            ['noi', 'eravamo'],
            ['voi', 'eravate'],
            ['loro', 'erano'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the imperfetto.', items: [
            { q: 'Quando ero piccolo, ___ in campagna. (abitare)', a: ['abitavo'], why: '*io abitavo*' },
            { q: 'Noi ___ in giardino tutti i giorni. (giocare)', a: ['giocavamo'], why: '*noi giocavamo*' },
            { q: 'Mio padre ___ in una banca. (lavorare)', a: ['lavorava'], why: '*lui lavorava*' },
            { q: 'Voi ___ spesso al cinema? (andare)', a: ['andavate'], why: '*voi andavate*' },
            { q: 'Loro ___ un grande giardino. (avere)', a: ['avevano'], why: '*loro avevano*' },
            { q: 'Tu ___ molto sport. (fare)', a: ['facevi'], why: '*tu facevi*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Quando ero piccolo, io [mangiavi] dolci.', a: ['mangiavo'], why: '*io mangiavo*' },
            { s: 'Noi [eramo] molto contenti.', a: ['eravamo'], why: 'The imperfetto of *essere*: *noi eravamo*.' },
            { s: 'Lui [abitavo] a Roma.', a: ['abitava'], why: '*lui abitava*' },
          ] },
          { t: 'ex', kind: 'match', h: 'Find the imperfetto.', pairs: [
            ['io parlo', 'io parlavo'],
            ['noi finiamo', 'noi finivamo'],
            ['lui fa', 'lui faceva'],
            ['loro hanno', 'loro avevano'],
            ['voi siete', 'voi eravate'],
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Da piccolo',
      about: 'Use the imperfetto for habits and descriptions.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'The imperfetto has two main uses. It says what you **used to do** (a habit), and it **describes** how things were: weather, age, feelings, places. Words that often go with it are **spesso** (often), **sempre** (always), **tutti i giorni** (every day), **la domenica** (on Sundays), **ogni estate** (each summer) and **da piccolo / da piccola** (when I was little).' },
          { t: 'examples', items: [
            { s: 'Da piccolo, **giocavo** per strada.', n: 'A habit in the past.' },
            { s: 'La domenica **andavamo** dalla nonna.', n: 'Every Sunday.' },
            { s: '**Faceva** bel tempo e **c’era** il sole.', n: 'A description of the weather.' },
            { s: '**Avevo** dieci anni e **ero** molto timido.', n: 'Age and feelings.' },
            { s: 'La casa **era** piccola, ma **aveva** un grande giardino.', n: 'A description of a place.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Compare with English: *I used to play*, *I played every day* and *I was playing* are all **giocavo** in Italian. The imperfetto does not say how long something lasted or when it ended; it says only that it was a habit or a situation.' },
        ],
        [
          { t: 'dialogue', title: 'Da piccola', lines: [
            { who: 'Giulia', s: 'Dove abitavi da piccola, Nadia?' },
            { who: 'Nadia', s: 'Abitavo in un piccolo paese. Avevamo una grande casa con un giardino.' },
            { who: 'Giulia', s: 'E con chi giocavi?' },
            { who: 'Nadia', s: 'Con mio fratello e i miei cugini. Giocavamo fuori tutti i giorni, anche quando pioveva.' },
          ] },
          { t: 'table', caption: 'Time words for habits', explain: ['head', 'col1'], head: ['Italian', 'English'], rows: [
            ['spesso', 'often'],
            ['sempre', 'always'],
            ['tutti i giorni', 'every day'],
            ['il fine settimana', 'at weekends'],
            ['ogni estate', 'every summer'],
            ['da piccolo / da piccola', 'when I was little'],
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'Da piccolo, ___ al parco tutti i giorni.', o: ['giocavo', 'ho giocato', 'giocherò'], why: 'A habit in the past: the imperfetto.' },
            { q: 'Ieri sera ___ molto freddo.', o: ['faceva', 'ha fatto', 'farà'], why: 'A description of the weather: the imperfetto.' },
            { q: 'La domenica ___ dalla nonna.', o: ['andavamo', 'siamo andati', 'andiamo'], why: 'A habit: the imperfetto.' },
            { q: 'Lei ___ dieci anni a quel tempo.', o: ['aveva', 'ha avuto', 'avrà'], why: 'Age in the past: the imperfetto.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Da piccolo giocavo fuori.', why: '*da piccolo* sets the scene.' },
            { a: 'Mangiavamo sempre dalla nonna.', why: '*sempre* after the verb.' },
            { a: 'Faceva bel tempo tutti i giorni.', why: 'A weather description.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Habit or one event?', groups: ['habit', 'one event'], explain: ['groups'], items: [
            { s: 'Ogni estate andavamo al mare.', g: 0, why: '*ogni estate* is a habit: imperfetto.' },
            { s: 'Ieri ho visto un film.', g: 1, why: '*ieri* is a single event: passato prossimo.' },
            { s: 'Tutti i giorni prendevo l’autobus.', g: 0, why: 'A habit.' },
            { s: 'Sabato abbiamo mangiato al ristorante.', g: 1, why: 'A single event on Saturday.' },
            { s: 'Spesso giocava per strada.', g: 0, why: '*spesso* is a habit.' },
            { s: 'Stamattina è partita alle otto.', g: 1, why: 'A single event this morning.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Pioveva quando sono uscito',
      about: 'Passato prossimo or imperfetto, and già, mai and non … ancora.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Use the **imperfetto** for the background (what was happening, what things were like) and the **passato prossimo** for the event that happened in that background: *Pioveva quando sono uscito.* (It was raining when I went out.) *Ero stanco, così sono tornato a casa.* (I was tired, so I went home.) The imperfetto is the stage, the passato prossimo is the action.' },
          { t: 'table', caption: 'Which tense?', explain: ['head'], head: ['Use', 'Tense', 'Example'], rows: [
            ['One finished event', 'passato prossimo', 'Ieri ho visto un film.'],
            ['A habit or repeated action', 'imperfetto', 'Guardavo un film ogni sera.'],
            ['A description in the past', 'imperfetto', 'Faceva freddo ed era tardi.'],
            ['An event in a background', 'both', 'Pioveva quando sono partito.'],
          ] },
          { t: 'tip', art: 'owl', md: 'The word **quando** often links the two: *Quando sono arrivato, dormiva.* (When I arrived, he was sleeping.) The word **mentre** (while) is followed by the imperfetto: *Mentre cucinavo, lui guardava la tv.*' },
        ],
        [
          { t: 'text', md: 'To say whether you have done something, use the passato prossimo with **già** (already, ever), **mai** (never) and **non … ancora** (not yet): *Sei già stato a Roma? – Sì, ci sono già stato. – No, non ci sono mai stato. – No, non ancora.* **non … mai** goes around the auxiliary: *Non ho mai mangiato sushi.*' },
          { t: 'examples', items: [
            { s: '**Hai già** mangiato le lumache?', n: '*già* between *hai* and the participle.' },
            { s: 'Sì, le **ho già** mangiate una volta.', n: 'Yes, once. The participle agrees with *le*.' },
            { s: 'No, **non ho mai** mangiato lumache.', n: 'Never.' },
            { s: 'Lei **non ha ancora** visitato il museo.', n: 'Not yet.' },
            { s: '**Siamo già** stati a Firenze.', n: 'With *essere*: *siamo già stati*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Passato prossimo or imperfetto?', items: [
            { q: 'Quando io ___, pioveva.', o: ['sono uscito', 'uscivo', 'esco'], why: 'The event: passato prossimo. The rain is the background.' },
            { q: '___ molto tardi quando siamo tornati.', o: ['Era', 'È stato', 'Sarà'], why: 'A description of the time: imperfetto.' },
            { q: 'Ieri ___ un bel film.', o: ['abbiamo visto', 'vedevamo', 'vediamo'], why: 'A single event yesterday: passato prossimo.' },
            { q: 'Da piccolo ___ sempre cioccolato.', o: ['mangiavo', 'ho mangiato', 'mangio'], why: 'A habit: imperfetto.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write già, mai or ancora.', items: [
            { q: 'Hai ___ visitato Roma?', a: ['già', 'gia'], why: '*già* in a question means ever.' },
            { q: 'Non ho ___ mangiato sushi.', a: ['mai'], why: '*non … mai* means never.' },
            { q: 'Non abbiamo ___ visto questo film. Lo vediamo domani.', a: ['ancora'], why: '*non … ancora* means not yet.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Put the sentence in the past. Use the imperfetto for the background.', items: [
            { q: 'Piove quando esco. (sono uscito)', cue: 'Pioveva', a: ['Pioveva quando sono uscito.', 'Pioveva quando sono uscita.'], why: 'Rain is the background (imperfetto); going out is the event (passato prossimo).' },
            { q: 'Sono stanco, quindi torno a casa. (sono tornato)', cue: 'Ero', a: ['Ero stanco, quindi sono tornato a casa.', 'Ero stanca, quindi sono tornata a casa.'], why: 'Tiredness is the background; going home is the event.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'True or false?', items: [
            { q: 'Si dice «Ho mangiavo».', a: 'f', why: 'Do not mix the two: *mangiavo* or *ho mangiato*.' },
            { q: 'Si dice «Pioveva» per descrivere il tempo.', a: 't', why: 'A description of the weather: imperfetto.' },
            { q: 'Si dice «Non ho mai mai mangiato».', a: 'f', why: 'Use *non … mai* once.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Ricordi di scuola',
      about: 'Read two people remembering their school days.',
      art: 'dragon',
      spreads: [
        [
          { t: 'reading', title: 'Quando ero scolaro', md: '**Karim**\nQuando ero piccolo, abitavo a Rabat. Andavo a scuola a piedi con mio fratello. Partivamo alle otto e tornavamo a mezzogiorno per mangiare. Il pomeriggio giocavamo a calcio per strada. Un giorno, un pallone è caduto nel giardino di un vicino. Lui ha aperto la porta e ci ha restituito il pallone con un grande sorriso!\n\n**Giulia**\nIo abitavo vicino a Bologna. Avevo una maestra molto gentile che si chiamava Rossi. Ogni giorno cantavamo una canzone prima di cominciare. Il mercoledì non avevamo scuola. La mattina facevo danza e il pomeriggio giocavo con le mie amiche. Non ho mai dimenticato quegli anni.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Karim andava a scuola a piedi.', a: 't', why: '*Andavo a scuola a piedi con mio fratello.*' },
            { q: 'Karim tornava a casa a mezzogiorno per mangiare.', a: 't', why: '*tornavamo a mezzogiorno per mangiare*' },
            { q: 'Giulia aveva scuola il mercoledì.', a: 'f', why: '*Il mercoledì non avevamo scuola.*' },
            { q: 'La maestra di Giulia era severa.', a: 'f', why: 'She was *molto gentile*.' },
            { q: 'Karim aveva un cane.', a: 'ng', why: 'The text does not mention a dog.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Che cosa faceva Giulia il mercoledì mattina?', o: ['Danza.', 'Calcio.', 'I compiti.'], why: '*La mattina facevo danza.*' },
            { q: 'Che cosa è successo un giorno a Karim?', o: ['Un pallone è caduto da un vicino.', 'Ha perso la scuola.', 'Ha incontrato un amico.'], why: '*Un giorno, un pallone è caduto nel giardino di un vicino.*' },
            { q: 'Perché il vicino sorrideva?', o: ['Ha restituito il pallone con un sorriso.', 'Non amava i bambini.', 'Giocava con loro.'], why: '*ci ha restituito il pallone con un grande sorriso*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs in the imperfetto.', items: [
            { s: '[Partivamo] alle otto e [tornavamo] a mezzogiorno.', why: '*partivamo* and *tornavamo* are imperfetto forms.' },
            { s: 'Ogni giorno [cantavamo] una canzone.', why: '*cantavamo* is the imperfetto of *cantare*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Da piccolo, noi ___ al mare ogni estate.', o: ['andavamo', 'siamo andati', 'andremo'], why: 'A habit: imperfetto.' },
      { q: 'Ieri ___ un bel film.', o: ['ho visto', 'vedevo', 'vedrò'], why: 'One event: passato prossimo.' },
      { q: '___ quando sono uscito.', o: ['Pioveva', 'Ha piovuto', 'Piove'], why: 'Background: imperfetto.' },
      { q: 'Noi ___ molto contenti.', o: ['eravamo', 'siamo', 'eramo'], why: 'The imperfetto of *essere*: *eravamo*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Da piccola, ___ in campagna. (abitare)', a: ['abitavo'], why: '*io abitavo*' },
      { q: 'Non ho ___ visitato Roma.', a: ['mai'], why: '*non … mai*' },
      { q: 'Noi ___ a calcio tutti i giorni. (giocare)', a: ['giocavamo'], why: '*noi giocavamo*' },
    ] },
    { t: 'ex', kind: 'match', h: 'Find the imperfetto.', pairs: [
      ['io mangio', 'io mangiavo'],
      ['noi abbiamo', 'noi avevamo'],
      ['lui fa', 'lui faceva'],
      ['loro vanno', 'loro andavano'],
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Da piccolo giocavo fuori.', why: '*da piccolo* + imperfetto.' },
      { a: 'Pioveva quando sono uscito.', why: 'Imperfetto for the background, passato prossimo for the event.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Da piccolo [ho giocato] per strada.', a: ['giocavo'], why: 'A habit: *giocavo*.' },
      { s: 'Noi [mangiamo] sempre dalla nonna.', a: ['mangiavamo'], why: 'The imperfetto: *mangiavamo*.' },
    ] },
  ],
};
