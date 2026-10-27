// German A1, unit 7 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u7',
  title: 'In town',
  goal: 'Find places in town, ask the way and use buses, trams and trains.',
  art: 'suitcase',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['places-in-town', 'directions', 'imperative', 'transport', 'dativ', 'tickets'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Places in town',
      about: 'Name places in town and ask where they are.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'These are important places in a town. Learn each word with its article.' },
          { t: 'table', caption: 'In der Stadt', explain: ['head', 'col1'], quiz: true, head: ['German', 'English'], rows: [
            ['der Bahnhof', 'the station'],
            ['der Supermarkt', 'the supermarket'],
            ['der Park', 'the park'],
            ['das Kino', 'the cinema'],
            ['das Museum', 'the museum'],
            ['das Krankenhaus', 'the hospital'],
            ['die Post', 'the post office'],
            ['die Bank', 'the bank'],
            ['die Apotheke', 'the chemist'],
            ['die Haltestelle', 'the bus or tram stop'],
          ] },
          { t: 'ex', kind: 'sort', h: 'der, das or die?', groups: ['der', 'das', 'die'], items: [
            { s: 'Bahnhof', g: 0, why: '*der Bahnhof*.' },
            { s: 'Kino', g: 1, why: '*das Kino*.' },
            { s: 'Apotheke', g: 2, why: '*die Apotheke*. Many words ending in *-e* are feminine.' },
            { s: 'Supermarkt', g: 0, why: '*der Supermarkt*, like *der Markt*.' },
            { s: 'Museum', g: 1, why: '*das Museum*.' },
            { s: 'Post', g: 2, why: '*die Post*.' },
          ] },
        ],
        [
          { t: 'text', md: 'To ask where something is, say **Wo ist …?** To ask the way, say **Wie komme ich zum … / zur …?**\n\nUse **zum** for *der* and *das* words: *der Bahnhof → zum Bahnhof*, *das Kino → zum Kino*. Use **zur** for *die* words: *die Post → zur Post*.' },
          { t: 'examples', items: [
            { s: 'Entschuldigung, **wo ist** die Post?', n: 'Start politely with *Entschuldigung*.' },
            { s: 'Wie komme ich **zum** Bahnhof?', n: '*der Bahnhof → zum Bahnhof*.' },
            { s: 'Wie komme ich **zum** Museum?', n: '*das Museum → zum Museum*.' },
            { s: 'Wie komme ich **zur** Apotheke?', n: '*die Apotheke → zur Apotheke*.' },
            { s: 'Gibt es hier eine Bank? – Ja, dort.', n: '*Gibt es hier …?*: is there … here?' },
          ] },
          { t: 'tip', art: 'owl', md: '*zum* is short for *zu dem*, and *zur* is short for *zu der*. People almost always use the short forms.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'zum or zur? Choose.', items: [
            { q: 'Wie komme ich ___ Bahnhof?', o: ['zum', 'zur', 'zu'], why: '*der Bahnhof*: *zum*.' },
            { q: 'Wie komme ich ___ Post?', o: ['zur', 'zum', 'zu'], why: '*die Post*: *zur*.' },
            { q: 'Wie komme ich ___ Kino?', o: ['zum', 'zur', 'zu'], why: '*das Kino*: *zum*.' },
            { q: 'Wie komme ich ___ Haltestelle?', o: ['zur', 'zum', 'zu'], why: '*die Haltestelle*: *zur*.' },
            { q: 'Wie komme ich ___ Krankenhaus?', o: ['zum', 'zur', 'zu'], why: '*das Krankenhaus*: *zum*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Where do you go?', pairs: [
            ['Ich brauche Medikamente.', 'zur Apotheke'],
            ['Ich möchte einen Film sehen.', 'zum Kino'],
            ['Ich nehme den Zug.', 'zum Bahnhof'],
            ['Ich brauche Brot und Milch.', 'zum Supermarkt'],
          ] },
        ],
        [
          { t: 'ex', kind: 'memory', h: 'Find the pairs.', pairs: [
            ['der Bahnhof', 'zum Bahnhof'],
            ['die Bank', 'zur Bank'],
            ['das Museum', 'zum Museum'],
            ['die Post', 'zur Post'],
            ['der Park', 'zum Park'],
          ] },
          { t: 'ex', kind: 'picture', h: 'What is it?', items: [
            { pic: 'house', o: ['das Haus', 'der Bahnhof', 'die Haltestelle'], why: '*das Haus*: a building where people live.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Gehen Sie geradeaus',
      about: 'Understand and give directions with the imperative.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'To tell someone what to do, use the **imperative**. With *Sie*, it is easy: take the *Sie* form and put the verb **first**: *Sie gehen → Gehen Sie!* In a separable verb, the small part goes to the end: *Steigen Sie am Markt aus.*' },
          { t: 'table', caption: 'Directions', explain: ['head', 'col1'], quiz: true, head: ['German', 'English'], rows: [
            ['Gehen Sie geradeaus.', 'Go straight on.'],
            ['Gehen Sie nach links.', 'Go left.'],
            ['Gehen Sie nach rechts.', 'Go right.'],
            ['Gehen Sie über die Straße.', 'Cross the street.'],
            ['Nehmen Sie die erste Straße links.', 'Take the first street on the left.'],
            ['Nehmen Sie die U2.', 'Take the U2.'],
            ['Steigen Sie am Markt aus.', 'Get off at the market.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Add **bitte** to sound polite: *Gehen Sie bitte geradeaus.* The answer to *Danke!* is *Bitte!* or *Gern!*' },
        ],
        [
          { t: 'dialogue', title: 'Wie komme ich zur Post?', lines: [
            { who: 'Clara', s: 'Entschuldigung, wie komme ich zur Post?' },
            { who: 'Mann', s: 'Zur Post? Gehen Sie hier geradeaus bis zur Ampel.' },
            { who: 'Clara', s: 'Bis zur Ampel. Und dann?' },
            { who: 'Mann', s: 'Dann gehen Sie nach links. Die Post ist rechts, neben der Bank.' },
            { who: 'Clara', s: 'Ist das weit?' },
            { who: 'Mann', s: 'Nein, nur fünf Minuten zu Fuß.' },
            { who: 'Clara', s: 'Vielen Dank!' },
            { who: 'Mann', s: 'Bitte!' },
          ] },
          { t: 'ex', kind: 'tf', h: 'True or false?', items: [
            { q: 'Clara sucht die Post.', a: 't', why: '*Wie komme ich zur Post?*' },
            { q: 'Clara geht an der Ampel nach rechts.', a: 'f', why: '*Dann gehen Sie nach links.*' },
            { q: 'Die Post ist neben der Bank.', a: 't', why: '*Die Post ist rechts, neben der Bank.*' },
            { q: 'Die Post ist sehr weit.', a: 'f', why: '*Nur fünf Minuten zu Fuß.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Make the imperative with Sie.', items: [
            { q: 'Sie gehen geradeaus.', a: ['Gehen Sie geradeaus.', 'Gehen Sie geradeaus!'], why: 'Put the verb first: *Gehen Sie …*' },
            { q: 'Sie nehmen den Bus.', a: ['Nehmen Sie den Bus.', 'Nehmen Sie den Bus!'], why: 'Put the verb first: *Nehmen Sie …*' },
            { q: 'Sie steigen am Bahnhof aus.', a: ['Steigen Sie am Bahnhof aus.', 'Steigen Sie am Bahnhof aus!'], why: 'Verb first. *aus* stays at the end.' },
            { q: 'Sie fahren bis zum Markt.', a: ['Fahren Sie bis zum Markt.', 'Fahren Sie bis zum Markt!'], why: 'Put the verb first: *Fahren Sie …*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'bank', h: 'Complete the directions.', extra: ['oben', 'Nehmen'], items: [
            { q: 'Gehen Sie hier ___ bis zur Kirche.', a: 'geradeaus', why: '*geradeaus*: straight on.' },
            { q: 'Dann gehen Sie nach ___.', a: 'links', why: '*nach links*: to the left.' },
            { q: '___ Sie über die Straße.', a: 'Gehen', why: '*Gehen Sie über die Straße*: cross the street.' },
            { q: 'Der Bahnhof ist dann ___.', a: 'rechts', why: '*rechts*: on the right.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Nehmen Sie die zweite Straße rechts.', why: 'Imperative: the verb first, then *Sie*.' },
            { a: 'Steigen Sie am Rathaus aus.', why: 'Verb first. *aus* goes to the end.' },
            { a: 'Gehen Sie bitte geradeaus.', why: 'Verb, *Sie*, then *bitte*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Mit dem Bus, mit der U-Bahn',
      about: 'Say how you travel and buy a ticket.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: 'To say how you travel, use **mit**. After *mit*, the article changes: *der* and *das* become **dem**, *die* becomes **der**. Only on foot is different: **zu Fuß**.' },
          { t: 'table', caption: 'mit + dem / der', explain: ['head'], quiz: true, head: ['Word', 'With mit'], rows: [
            ['der Bus', 'mit dem Bus'],
            ['der Zug', 'mit dem Zug'],
            ['das Auto', 'mit dem Auto'],
            ['das Fahrrad', 'mit dem Fahrrad'],
            ['die U-Bahn', 'mit der U-Bahn'],
            ['die Straßenbahn', 'mit der Straßenbahn'],
          ] },
          { t: 'tip', art: 'owl', md: 'This new case is the **Dativ**. *zu* also takes the Dativ, so *zu dem* becomes *zum* and *zu der* becomes *zur*. You know these from *Wie komme ich zum Bahnhof?*' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Ich fahre **mit dem** Bus zur Arbeit.', n: '*der Bus → mit dem Bus*.' },
            { s: 'Lukas fährt **mit dem** Fahrrad zur Schule.', n: '*das Fahrrad → mit dem Fahrrad*.' },
            { s: 'Wir fahren **mit der** U-Bahn **zum** Museum.', n: '*die U-Bahn → mit der*; *das Museum → zum*.' },
            { s: 'Ich gehe **zu Fuß**.', n: 'On foot: no article.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Ich fahre mit ___ Zug nach Köln.', o: ['dem', 'der', 'die'], why: '*der Zug → mit dem Zug*.' },
            { q: 'Fährst du mit ___ Straßenbahn?', o: ['der', 'dem', 'die'], why: '*die Straßenbahn → mit der Straßenbahn*.' },
            { q: 'Sara kommt mit ___ Auto.', o: ['dem', 'der', 'das'], why: '*das Auto → mit dem Auto*.' },
            { q: 'Wir gehen zu ___ zum Park.', o: ['Fuß', 'Füße', 'dem Fuß'], why: 'The fixed phrase is *zu Fuß*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write dem, der, zum or zur.', items: [
            { q: 'Ich fahre mit ___ U-Bahn.', a: ['der'], why: '*die U-Bahn → mit der*.' },
            { q: 'Er fährt mit ___ Fahrrad.', a: ['dem'], why: '*das Fahrrad → mit dem*.' },
            { q: 'Wie komme ich ___ Bahnhof?', a: ['zum'], why: '*der Bahnhof → zum*.' },
            { q: 'Ich gehe jetzt ___ Bank.', a: ['zur'], why: '*die Bank → zur*.' },
            { q: 'Fahren Sie mit ___ Bus Nummer 5.', a: ['dem'], why: '*der Bus → mit dem*.' },
          ] },
          { t: 'ex', kind: 'picture', h: 'What is it?', items: [
            { pic: 'bus', o: ['der Bus', 'der Zug', 'das Fahrrad'], why: '*der Bus*.' },
            { pic: 'train', o: ['der Zug', 'der Bus', 'das Auto'], why: '*der Zug*.' },
            { pic: 'bicycle', o: ['das Fahrrad', 'das Auto', 'die U-Bahn'], why: '*das Fahrrad*.' },
            { pic: 'ticket', o: ['die Fahrkarte', 'die Haltestelle', 'der Bahnhof'], why: '*die Fahrkarte*: you need it on the bus or train.' },
          ] },
        ],
        [
          { t: 'text', md: 'You can buy a ticket (**die Fahrkarte**) at the machine or at the counter. For one trip, ask for an **Einzelfahrkarte**. For a whole day, ask for a **Tageskarte**.' },
          { t: 'dialogue', title: 'Am Schalter', lines: [
            { who: 'Paul', s: 'Guten Tag. Eine Fahrkarte nach Bonn, bitte.' },
            { who: 'Verkäuferin', s: 'Einfach oder hin und zurück?' },
            { who: 'Paul', s: 'Hin und zurück, bitte. Was kostet das?' },
            { who: 'Verkäuferin', s: 'Das kostet 18 Euro 40.' },
            { who: 'Paul', s: 'Und wann fährt der Zug?' },
            { who: 'Verkäuferin', s: 'Um 10 Uhr 15, von Gleis 3.' },
            { who: 'Paul', s: 'Danke schön!' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Read the dialogue and choose.', items: [
            { q: 'Wohin fährt Paul?', o: ['nach Bonn', 'nach Köln', 'zum Gleis 10'], why: '*Eine Fahrkarte nach Bonn, bitte.*' },
            { q: 'Was kauft Paul?', o: ['eine Fahrkarte hin und zurück', 'eine Einzelfahrkarte', 'eine Tageskarte'], why: '*Hin und zurück, bitte.*' },
            { q: 'Wann fährt der Zug?', o: ['um Viertel nach zehn', 'um halb zehn', 'um Viertel vor zehn'], why: '*10 Uhr 15* is a quarter past ten.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Reading: a town and a ticket machine',
      about: 'Read a short text about a town map and a ticket machine screen.',
      art: 'pretzel',
      spreads: [
        [
          { t: 'reading', title: 'Willkommen in Lindenau', md: 'Lindenau ist klein, aber schön. Der Bahnhof ist im Norden. Vor dem Bahnhof ist die Haltestelle. Hier fahren die Busse und die Straßenbahn.\n\nDas Zentrum ist der Marktplatz. Er ist nur zehn Minuten zu Fuß vom Bahnhof. Gehen Sie einfach geradeaus. Am Marktplatz sind das Rathaus, eine Bank und viele Cafés. Am Samstag gibt es hier einen Markt.\n\nDas Museum ist neben dem Park. Fahren Sie mit der Straßenbahn Linie 2 und steigen Sie am Park aus. Das Krankenhaus ist im Süden. Dorthin fährt der Bus Nummer 7.' },
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Der Bahnhof ist im Süden.', a: 'f', why: '*Der Bahnhof ist im Norden.*' },
            { q: 'Vom Bahnhof zum Marktplatz kann man zu Fuß gehen.', a: 't', why: '*nur zehn Minuten zu Fuß*.' },
            { q: 'Das Museum ist am Sonntag geschlossen.', a: 'ng', why: 'The text does not say when the museum is open.' },
            { q: 'Zum Museum fährt die Straßenbahn Linie 2.', a: 't', why: '*Fahren Sie mit der Straßenbahn Linie 2.*' },
            { q: 'Zum Krankenhaus fährt man mit der U-Bahn.', a: 'f', why: 'Bus number 7 goes there: *der Bus Nummer 7*.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Am Fahrkartenautomaten', md: '**Willkommen! Bitte wählen Sie:**\n\n**Einzelfahrkarte:** eine Fahrt, 90 Minuten. 2,80 Euro.\n\n**Tageskarte:** viele Fahrten, heute bis 3 Uhr nachts. 7,50 Euro.\n\n**Kinder** (6 bis 14 Jahre): die Hälfte.\n\nSie können mit Karte oder bar bezahlen. Bitte nehmen Sie Ihre Fahrkarte und Ihr Geld.' },
          { t: 'ex', kind: 'choice', h: 'Read the screen and choose.', items: [
            { q: 'Herr Kaya fährt heute nur einmal mit dem Bus. Was kauft er?', o: ['eine Einzelfahrkarte', 'eine Tageskarte', 'zwei Tageskarten'], why: 'One trip: *Einzelfahrkarte*.' },
            { q: 'Nadia fährt heute fünfmal mit der Straßenbahn. Was ist gut für sie?', o: ['eine Tageskarte', 'eine Einzelfahrkarte', 'eine Kinderkarte'], why: 'Many trips in one day: *Tageskarte*.' },
            { q: 'Was kostet eine Einzelfahrkarte für ein Kind von 8 Jahren?', o: ['1,40 Euro', '2,80 Euro', '7,50 Euro'], why: 'Children pay half: 2,80 Euro → 1,40 Euro.' },
            { q: 'Wie kann man bezahlen?', o: ['mit Karte oder bar', 'nur bar', 'nur mit Karte'], why: '*Sie können mit Karte oder bar bezahlen.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'crossword', h: 'Words from the texts.', words: [
            { a: 'Bahnhof', clue: 'Hier fahren die Züge ab.' },
            { a: 'Rathaus', clue: 'Hier arbeitet die Stadt. Es ist am Marktplatz.' },
            { a: 'Museum', clue: 'Hier sehen Sie Bilder und alte Dinge.' },
            { a: 'Fahrkarte', clue: 'Sie brauchen sie im Bus und im Zug.' },
            { a: 'Haltestelle', clue: 'Hier warten Sie auf den Bus.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Wie komme ich ___ Apotheke?', o: ['zur', 'zum', 'zu'], why: '*die Apotheke → zur*.' },
      { q: 'Wie komme ich ___ Bahnhof?', o: ['zum', 'zur', 'zu'], why: '*der Bahnhof → zum*.' },
      { q: 'Ich fahre mit ___ U-Bahn.', o: ['der', 'dem', 'die'], why: '*die U-Bahn → mit der*.' },
      { q: 'Er fährt mit ___ Fahrrad.', o: ['dem', 'der', 'das'], why: '*das Fahrrad → mit dem*.' },
      { q: '', o: ['Gehen Sie geradeaus.', 'Sie geradeaus gehen.', 'Geradeaus Sie gehen.'], why: 'Imperative with *Sie*: the verb first.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: '___ Sie den Bus Nummer 4. (nehmen)', a: ['Nehmen'], why: 'Imperative: *Nehmen Sie …*' },
      { q: 'Steigen Sie am Markt ___. (aussteigen)', a: ['aus'], why: '*aussteigen*: *aus* at the end.' },
      { q: 'Ich habe kein Auto. Ich gehe zu ___.', a: ['Fuß'], why: '*zu Fuß*: on foot.' },
      { q: 'Medikamente kaufe ich in der ___.', a: ['Apotheke'], why: '*die Apotheke* sells medicine.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Make the imperative with Sie.', items: [
      { q: 'Sie gehen nach rechts.', a: ['Gehen Sie nach rechts.', 'Gehen Sie nach rechts!'], why: 'Verb first: *Gehen Sie …*' },
      { q: 'Sie fahren mit der Straßenbahn.', a: ['Fahren Sie mit der Straßenbahn.', 'Fahren Sie mit der Straßenbahn!'], why: 'Verb first: *Fahren Sie …*' },
    ] },
    { t: 'ex', kind: 'sort', h: 'zum or zur?', groups: ['zum', 'zur'], items: [
      { s: 'Kino', g: 0, why: '*das Kino → zum Kino*.' },
      { s: 'Post', g: 1, why: '*die Post → zur Post*.' },
      { s: 'Park', g: 0, why: '*der Park → zum Park*.' },
    ] },
  ],
};
