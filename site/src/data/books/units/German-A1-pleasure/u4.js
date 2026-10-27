// German A1 for travel, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Getting around',
  goal: 'Ask the way, understand directions and buy a ticket.',
  art: 'dog',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['directions', 'places-in-town', 'imperative', 'zum-zur', 'transport', 'tickets'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Asking the way',
      about: 'Ask how to get to a place and understand simple directions.',
      art: 'parrot',
      spreads: [
        [
          { t: 'dialogue', title: 'Auf der Straße', lines: [
            { who: 'Priya', s: 'Entschuldigung, wie komme ich zum Bahnhof?' },
            { who: 'Mann', s: 'Zum Bahnhof? Gehen Sie hier geradeaus bis zur Ampel.' },
            { who: 'Priya', s: 'Bis zur Ampel, und dann?' },
            { who: 'Mann', s: 'Dann gehen Sie links. Der Bahnhof ist dann rechts.' },
            { who: 'Priya', s: 'Ist das weit?' },
            { who: 'Mann', s: 'Nein, nur fünf Minuten zu Fuß.' },
            { who: 'Priya', s: 'Vielen Dank!' },
            { who: 'Mann', s: 'Bitte schön!' },
          ] },
          { t: 'text', md: 'To ask the way, say *Wie komme ich zum …?* or *Wie komme ich zur …?* and then the place. You can also ask *Wo ist …?*' },
        ],
        [
          { t: 'text', md: 'After *zu*, the article changes. *zu* + *dem* becomes **zum**: use it with *der* and *das* words. *zu* + *der* becomes **zur**: use it with *die* words.' },
          { t: 'table', caption: 'Places in town', quiz: true, head: ['', 'Wie komme ich …?'], rows: [
            ['der Bahnhof', 'zum Bahnhof'],
            ['der Flughafen', 'zum Flughafen'],
            ['das Hotel', 'zum Hotel'],
            ['das Museum', 'zum Museum'],
            ['die Haltestelle', 'zur Haltestelle'],
            ['die Kirche', 'zur Kirche'],
            ['die Touristeninformation', 'zur Touristeninformation'],
          ] },
          { t: 'tip', art: 'owl', md: '*die Haltestelle* is the stop for a bus or a tram. *der Bahnhof* is the station for trains.' },
        ],
        [
          { t: 'text', md: 'Directions are often instructions with *Sie*. The verb comes **first**, then *Sie*: *Gehen Sie links.* *Nehmen Sie den Bus.* It is the same form as a question, but with a full stop.' },
          { t: 'examples', items: [
            { s: '**Gehen Sie** geradeaus.', n: 'Go straight on.' },
            { s: '**Gehen Sie** links. / **Gehen Sie** rechts.', n: 'Turn left. / Turn right.' },
            { s: '**Nehmen Sie** die U-Bahn.', n: 'Take the underground.' },
            { s: 'Das Museum ist **hier**. Die Kirche ist **dort**.', n: '*hier*: here. *dort*: there.' },
            { s: 'Das ist **weit**. / Das ist **nicht weit**.', n: 'That is far. / That is not far.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'zum or zur?', items: [
            { q: 'Wie komme ich ___ Bahnhof?', o: ['zum', 'zur', 'zu'], why: '*der Bahnhof*: *zum*.' },
            { q: 'Wie komme ich ___ Haltestelle?', o: ['zur', 'zum', 'zu'], why: '*die Haltestelle*: *zur*.' },
            { q: 'Wie komme ich ___ Museum?', o: ['zum', 'zur', 'zu'], why: '*das Museum*: *zum*.' },
            { q: 'Wie komme ich ___ Touristeninformation?', o: ['zur', 'zum', 'zu'], why: '*die Touristeninformation*: *zur*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the instruction with Sie.', items: [
            { q: '___ Sie geradeaus. (gehen)', a: ['Gehen'], why: 'The verb comes first: *Gehen Sie …*' },
            { q: '___ Sie den Bus Nummer 5. (nehmen)', a: ['Nehmen'], why: 'The verb comes first: *Nehmen Sie …*' },
            { q: 'Gehen Sie ___. Dann ist der Bahnhof links. (straight on)', a: ['geradeaus'], why: '*geradeaus*: straight on.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Wie komme ich zur Kirche?', why: 'The question word *wie*, then *komme ich*, then *zur* and the place.' },
            { a: 'Gehen Sie hier rechts.', why: 'An instruction: the verb first, then *Sie*.' },
            { a: 'Ist das weit?', why: 'A yes/no question starts with the verb.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and correct it.', items: [
            { s: 'Wie komme ich [zur] Flughafen?', a: ['zum'], why: '*der Flughafen*: *zum*.' },
            { s: 'Bitte [geht] Sie geradeaus.', a: ['gehen'], why: 'With *Sie*, the verb ends in *-en*: *gehen Sie*.' },
            { s: 'Wie komme ich [zum] Haltestelle?', a: ['zur'], why: '*die Haltestelle*: *zur*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'By bus and by train',
      about: 'Say how you travel and buy a ticket for the bus or the train.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'text', md: 'To say how you travel, use *mit*. After *mit*, *der* and *das* become **dem**, and *die* becomes **der**. On foot is *zu Fuß*.' },
          { t: 'table', caption: 'How do you travel?', quiz: true, head: ['', 'Ich fahre …'], rows: [
            ['der Bus', 'mit dem Bus'],
            ['der Zug', 'mit dem Zug'],
            ['das Taxi', 'mit dem Taxi'],
            ['das Fahrrad', 'mit dem Fahrrad'],
            ['die U-Bahn', 'mit der U-Bahn'],
            ['die Straßenbahn', 'mit der Straßenbahn'],
          ] },
          { t: 'examples', items: [
            { s: 'Ich fahre **mit dem Bus** zum Hotel.', n: '*fahren* is for a bus, a train, a car or a bike.' },
            { s: 'Wir gehen **zu Fuß**.', n: 'On foot: use *gehen*, not *fahren*.' },
            { s: 'Er **fährt** mit der U-Bahn.', n: '*fahren* changes *a* to *ä* with *du* and *er / sie / es*: *du fährst*, *er fährt*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'picture', h: 'What is it?', items: [
            { pic: 'bus', o: ['der Bus', 'der Zug', 'das Taxi'], why: 'This is *der Bus*. It stops at the *Haltestelle*.' },
            { pic: 'train', o: ['der Zug', 'der Bus', 'das Fahrrad'], why: 'This is *der Zug*. It leaves from the *Bahnhof*.' },
            { pic: 'bicycle', o: ['das Fahrrad', 'die U-Bahn', 'das Auto'], why: 'This is *das Fahrrad*.' },
            { pic: 'ticket', o: ['die Fahrkarte', 'der Schlüssel', 'die Speisekarte'], why: 'This is *die Fahrkarte*, your ticket.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write dem or der.', items: [
            { q: 'Ich fahre mit ___ Zug nach Wien.', a: ['dem'], why: '*der Zug*: *mit dem Zug*.' },
            { q: 'Wir fahren mit ___ U-Bahn.', a: ['der'], why: '*die U-Bahn*: *mit der U-Bahn*.' },
            { q: 'Sie fährt mit ___ Taxi zum Flughafen.', a: ['dem'], why: '*das Taxi*: *mit dem Taxi*.' },
            { q: 'Fahrt ihr mit ___ Straßenbahn?', a: ['der'], why: '*die Straßenbahn*: *mit der Straßenbahn*.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'Am Schalter', lines: [
            { who: 'Jonas', s: 'Guten Tag. Ich möchte eine Fahrkarte zum Flughafen, bitte.' },
            { who: 'Mitarbeiterin', s: 'Eine Einzelfahrkarte?' },
            { who: 'Jonas', s: 'Ja. Und was kostet eine Tageskarte?' },
            { who: 'Mitarbeiterin', s: 'Die Tageskarte kostet 8,80 Euro. Die Einzelfahrkarte kostet 3,40 Euro.' },
            { who: 'Jonas', s: 'Dann nehme ich die Tageskarte. Fährt die S-Bahn zum Flughafen?' },
            { who: 'Mitarbeiterin', s: 'Ja, die S1. Sie fährt von Gleis 2, alle zehn Minuten.' },
            { who: 'Jonas', s: 'Super, danke!' },
          ] },
          { t: 'table', caption: 'Tickets', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['die Fahrkarte', 'ticket'],
            ['die Einzelfahrkarte', 'ticket for one trip'],
            ['die Tageskarte', 'ticket for the whole day'],
            ['das Gleis', 'platform'],
            ['der Erwachsene', 'adult'],
            ['das Kind', 'child'],
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the question and the answer.', pairs: [
            ['Was kostet eine Tageskarte?', '8,80 Euro.'],
            ['Fährt der Bus zum Bahnhof?', 'Ja, die Linie 3.'],
            ['Von welchem Gleis fährt der Zug?', 'Von Gleis 4.'],
            ['Wie fahren Sie zum Hotel?', 'Mit dem Taxi.'],
            ['Ist das weit?', 'Nein, nur fünf Minuten zu Fuß.'],
          ] },
          { t: 'ex', kind: 'crossword', h: 'Write the travel words.', words: [
            { a: 'Bus', clue: 'Er hält an der Haltestelle.' },
            { a: 'Zug', clue: 'Er fährt vom Bahnhof ab.' },
            { a: 'Taxi', clue: 'Ein Auto mit Fahrer. Sie zahlen für die Fahrt.' },
            { a: 'Gleis', clue: 'Hier halten die Züge am Bahnhof.' },
            { a: 'Fahrkarte', clue: 'Sie brauchen sie im Bus und im Zug.' },
            { a: 'Fahrrad', clue: 'Es hat zwei Räder und keinen Motor.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: a ticket machine screen',
      about: 'Read the screen of a ticket machine and choose the right ticket.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'At many stations and stops you buy your ticket at a machine: *der Fahrkartenautomat*. You can often change the language, but the German words are useful to know.' },
          { t: 'reading', title: 'Fahrkartenautomat', md: '**Willkommen! Bitte wählen Sie Ihre Fahrkarte.**\n\nKurzstrecke: 2,10 € (bis 3 Haltestellen)\nEinzelfahrkarte Erwachsene: 3,40 €\nEinzelfahrkarte Kinder (6 bis 14 Jahre): 1,70 €\nTageskarte: 8,80 € (fahren Sie den ganzen Tag, bis 3 Uhr nachts)\nGruppen-Tageskarte (bis 5 Personen): 16,50 €\n\nKinder unter 6 Jahren fahren kostenlos.\n\nSie können bar oder mit Karte zahlen. Der Automat gibt kein Wechselgeld für Scheine über 20 €.\n\nBitte stempeln Sie Ihre Fahrkarte vor der Fahrt.' },
          { t: 'tip', art: 'owl', md: 'In some cities you must stamp your ticket in a small machine before the trip: *die Fahrkarte stempeln* or *entwerten*. Then the ticket shows the date and the time.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the screen. True, false or not given?', items: [
            { q: 'Ein Kind mit vier Jahren braucht keine Fahrkarte.', a: 't', why: '*Kinder unter 6 Jahren fahren kostenlos.*' },
            { q: 'Mit der Kurzstrecke fahren Sie zehn Haltestellen.', a: 'f', why: 'The *Kurzstrecke* is only *bis 3 Haltestellen*.' },
            { q: 'Man kann nur bar zahlen.', a: 'f', why: '*Sie können bar oder mit Karte zahlen.*' },
            { q: 'Die Tageskarte gilt auch für den Zug zum Flughafen.', a: 'ng', why: 'The screen does not say if the day ticket is valid to the airport.' },
            { q: 'Vor der Fahrt muss man die Fahrkarte stempeln.', a: 't', why: '*Bitte stempeln Sie Ihre Fahrkarte vor der Fahrt.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which ticket is best?', items: [
            { q: 'Sie fahren nur zwei Haltestellen.', o: ['die Kurzstrecke', 'die Tageskarte', 'die Gruppen-Tageskarte'], why: 'Two stops: the *Kurzstrecke* is up to 3 stops and is cheapest.' },
            { q: 'Sie fahren heute fünfmal mit dem Bus.', o: ['die Tageskarte', 'die Kurzstrecke', 'die Einzelfahrkarte'], why: 'Five trips cost more than 8,80 € with single tickets. With a day ticket you travel all day.' },
            { q: 'Vier Freunde möchten den ganzen Tag fahren.', o: ['die Gruppen-Tageskarte', 'vier Kurzstrecken', 'eine Einzelfahrkarte'], why: 'The group day ticket is for up to five people.' },
            { q: 'Ein Kind mit zehn Jahren fährt einmal mit. Seine Fahrkarte kostet ___.', o: ['1,70 €', '3,40 €', 'nichts'], why: 'Children from 6 to 14 pay *1,70 €*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Wie komme ich ___ Bahnhof?', o: ['zum', 'zur', 'mit'], why: '*der Bahnhof*: *zum*.' },
      { q: 'Wie komme ich ___ Kirche?', o: ['zur', 'zum', 'dem'], why: '*die Kirche*: *zur*.' },
      { q: 'Wir fahren mit ___ Bus.', o: ['dem', 'der', 'den'], why: '*der Bus*: *mit dem Bus*.' },
      { q: 'Sie möchten den ganzen Tag fahren. Sie kaufen eine ___.', o: ['Tageskarte', 'Kurzstrecke', 'Haltestelle'], why: 'A ticket for the whole day: *die Tageskarte*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: '___ Sie hier links. (gehen)', a: ['Gehen'], why: 'An instruction with *Sie*: the verb first.' },
      { q: 'Ich fahre mit ___ U-Bahn.', a: ['der'], why: '*die U-Bahn*: *mit der*.' },
      { q: 'Das ist nicht weit. Wir gehen zu ___.', a: ['Fuß', 'Fuss'], why: 'On foot: *zu Fuß*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Wie komme ich zum Flughafen?', why: '*Wie komme ich*, then *zum* with a *der* word.' },
      { a: 'Nehmen Sie die U-Bahn.', why: 'An instruction: the verb first, then *Sie*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the word and the meaning.', pairs: [
      ['geradeaus', 'nicht links und nicht rechts'],
      ['die Haltestelle', 'Hier hält der Bus.'],
      ['die Einzelfahrkarte', 'eine Fahrkarte für eine Fahrt'],
    ] },
  ],
};
