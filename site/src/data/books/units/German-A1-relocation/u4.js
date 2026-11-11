// German A1 for moving abroad, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Bus and train',
  goal: 'Use the bus, tram and train, buy a simple ticket and ask when a bus leaves.',
  art: 'dog',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['public-transport', 'fahren', 'mit-dem-mit-der', 'time', 'tickets', 'timetable'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'How do you go?',
      about: 'Words for transport, the verb fahren, and mit dem Bus, mit der U-Bahn.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'In German cities you often go by bus, tram or underground. To say how you travel, use **mit** + the transport. With *der* and *das* words, say **mit dem**. With *die* words, say **mit der**. On foot is **zu Fuß**.' },
          { t: 'table', caption: 'Transport', explain: ['head', 'col2'], quiz: true, head: ['Word', 'How you go', 'Meaning'], rows: [
            ['der Bus', 'mit dem Bus', 'bus'],
            ['der Zug', 'mit dem Zug', 'train'],
            ['das Auto', 'mit dem Auto', 'car'],
            ['das Fahrrad', 'mit dem Fahrrad', 'bicycle'],
            ['die U-Bahn', 'mit der U-Bahn', 'underground'],
            ['die S-Bahn', 'mit der S-Bahn', 'city train'],
            ['die Straßenbahn', 'mit der Straßenbahn', 'tram'],
          ] },
          { t: 'tip', art: 'owl', md: 'In some cities the tram is called *die Tram*. Many people go everywhere by bike. Bike lanes are often red: do not walk there.' },
        ],
        [
          { t: 'text', md: 'The verb **fahren** (to go by transport, to drive) is a little irregular: with *du* and *er / sie / es*, the *a* becomes **ä**. Use *gehen* when you walk: *Ich gehe zu Fuß.*' },
          { t: 'table', caption: 'fahren', explain: ['head'], quiz: true, head: ['Person', 'fahren'], rows: [
            ['ich', 'fahre'],
            ['du', 'fährst'],
            ['er / sie / es', 'fährt'],
            ['wir', 'fahren'],
            ['ihr', 'fahrt'],
            ['sie / Sie', 'fahren'],
          ] },
          { t: 'examples', items: [
            { s: 'Ich **fahre** mit dem Bus zur Arbeit.', n: '*zur Arbeit*: to work.' },
            { s: 'Lina **fährt** mit dem Fahrrad.', n: 'With *sie*: *fährt*, with *ä*.' },
            { s: 'Wir **gehen** zu Fuß. Es ist nicht weit.', n: 'Walking: *gehen*, not *fahren*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'picture', h: 'What is it?', items: [
            { pic: 'bus', o: ['der Bus', 'der Zug', 'das Fahrrad'], why: '*der Bus*: *mit dem Bus*.' },
            { pic: 'train', o: ['der Zug', 'der Bus', 'das Auto'], why: '*der Zug*: *mit dem Zug*.' },
            { pic: 'bicycle', o: ['das Fahrrad', 'die U-Bahn', 'der Bus'], why: '*das Fahrrad*: *mit dem Fahrrad*.' },
            { pic: 'ticket', o: ['die Fahrkarte', 'die Haltestelle', 'der Zug'], why: '*die Fahrkarte*: the ticket.' },
          ] },
          { t: 'ex', kind: 'conjugate', h: 'Write the forms of fahren.', verb: 'fahren', tense: 'present', rows: [
            ['ich', 'fahre'],
            ['du', 'fährst', 'With *du*, the *a* becomes *ä*.'],
            ['er / sie / es', 'fährt', 'With *er*, *sie* and *es*, the *a* becomes *ä*.'],
            ['wir', 'fahren'],
            ['Sie', 'fahren'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'mit dem or mit der?', items: [
            { q: 'Ich fahre ___ U-Bahn.', o: ['mit der', 'mit dem', 'mit die'], why: '*die U-Bahn*: *mit der U-Bahn*.' },
            { q: 'Er fährt ___ Bus.', o: ['mit dem', 'mit der', 'mit den'], why: '*der Bus*: *mit dem Bus*.' },
            { q: 'Wir fahren ___ Fahrrad.', o: ['mit dem', 'mit der', 'mit das'], why: '*das Fahrrad*: *mit dem Fahrrad*.' },
            { q: 'Sie fährt ___ Straßenbahn.', o: ['mit der', 'mit dem', 'mit die'], why: '*die Straßenbahn*: *mit der Straßenbahn*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with fahren or gehen.', items: [
            { q: 'Du ___ mit dem Zug nach Berlin. (fahren)', a: ['fährst'], why: '*du fährst*, with *ä*.' },
            { q: 'Ich ___ zu Fuß. (gehen)', a: ['gehe'], why: 'On foot: *gehen*. With *ich*: *gehe*.' },
            { q: 'Mein Kollege ___ mit dem Auto. (fahren)', a: ['fährt'], why: '*er fährt*, with *ä*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'When does the bus go?',
      about: 'Ask where the stop is and when the bus leaves, and buy a ticket.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'At the stop and in the station you hear the time with **um**: *Der Bus fährt um 8.15 Uhr.* For timetables, Germans use the 24-hour clock. Say the hour, then *Uhr*, then the minutes: 8.15 Uhr is *acht Uhr fünfzehn*.' },
          { t: 'table', caption: 'Times on a timetable', quiz: true, head: ['Time', 'Say'], rows: [
            ['7.00 Uhr', 'sieben Uhr'],
            ['8.15 Uhr', 'acht Uhr fünfzehn'],
            ['12.30 Uhr', 'zwölf Uhr dreißig'],
            ['17.45 Uhr', 'siebzehn Uhr fünfundvierzig'],
            ['20.05 Uhr', 'zwanzig Uhr fünf'],
          ] },
          { t: 'tip', art: 'owl', md: 'Ask *Wann fährt der Bus?* for the time. Ask *Wo ist die Haltestelle?* for the place. The answer is often short: *Dort links.* *Hier rechts.* *Da vorne.*' },
        ],
        [
          { t: 'dialogue', title: 'An der Haltestelle', lines: [
            { who: 'Kofi', s: 'Entschuldigung, fährt der Bus 5 zum Bahnhof?' },
            { who: 'Frau Klein', s: 'Nein, der Bus 5 fährt nicht zum Bahnhof. Sie brauchen die Straßenbahn 2.' },
            { who: 'Kofi', s: 'Und wo ist die Haltestelle?' },
            { who: 'Frau Klein', s: 'Da vorne links.' },
            { who: 'Kofi', s: 'Wann fährt die Straßenbahn?' },
            { who: 'Frau Klein', s: 'Alle zehn Minuten. Die nächste fährt um 9.20 Uhr.' },
            { who: 'Kofi', s: 'Und wo kaufe ich eine Fahrkarte?' },
            { who: 'Frau Klein', s: 'Am Automaten. Er ist dort rechts.' },
            { who: 'Kofi', s: 'Vielen Dank!' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'Der Bus 5 fährt zum Bahnhof.', a: 'f', why: '*Der Bus 5 fährt nicht zum Bahnhof.*' },
            { q: 'Die Straßenbahn fährt alle zehn Minuten.', a: 't', why: 'Frau Klein says: *Alle zehn Minuten.*' },
            { q: 'Kofi kauft die Fahrkarte im Bus.', a: 'f', why: 'He buys it at the machine (*Automat*) at the stop.' },
          ] },
        ],
        [
          { t: 'text', md: 'At a counter or from the driver, you can buy a ticket with *Ich möchte …* or just with the word and *bitte*: *Eine Fahrkarte nach Bonn, bitte.* *Einmal zum Bahnhof, bitte.* Then ask: *Was kostet das?*' },
          { t: 'ex', kind: 'match', h: 'Match the question and the answer.', pairs: [
            ['Wann fährt der Zug?', 'Um 10.40 Uhr.'],
            ['Wo ist die Haltestelle?', 'Dort rechts.'],
            ['Was kostet die Fahrkarte?', '3,20 Euro.'],
            ['Fährt der Bus zum Bahnhof?', 'Ja, Linie 7.'],
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right question word.', items: [
            { q: '___ fährt die U-Bahn? – Um 8 Uhr.', o: ['Wann', 'Wo', 'Was'], why: 'A time: *Wann?*' },
            { q: '___ ist der Bahnhof? – Dort links.', o: ['Wo', 'Wann', 'Wie viel'], why: 'A place: *Wo?*' },
            { q: '___ kostet ein Ticket? – Drei Euro.', o: ['Was', 'Wo', 'Wann'], why: 'A price: *Was kostet …?*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
            { a: 'Wann fährt der nächste Bus?', why: '*Wann*, then the verb *fährt*, then *der nächste Bus*.' },
            { a: 'Fährt die U-Bahn zum Flughafen?', why: 'A yes/no question starts with the verb.' },
            { a: 'Wo kaufe ich eine Fahrkarte?', why: '*Wo*, the verb *kaufe*, *ich*, then the object.' },
          ] },
          { t: 'ex', kind: 'crossword', h: 'Write the words for transport.', words: [
            { a: 'Bus', clue: 'Er hält an der Haltestelle. Linie 5 ist ein …' },
            { a: 'Zug', clue: 'Er fährt von Köln nach Berlin.' },
            { a: 'Fahrrad', clue: 'Es hat zwei Räder und keinen Motor.' },
            { a: 'Fahrkarte', clue: 'Sie kaufen sie am Automaten.' },
            { a: 'Haltestelle', clue: 'Hier warten Sie auf den Bus.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Tickets and timetables',
      about: 'Read a ticket machine screen and a simple bus timetable.',
      art: 'snail',
      spreads: [
        [
          { t: 'reading', title: 'Fahrkartenautomat', md: 'Bitte wählen Sie:\n\nEinzelfahrkarte Erwachsene: 3,20 €\nEinzelfahrkarte Kind (6 bis 14 Jahre): 1,60 €\nKurzstrecke (4 Haltestellen): 2,10 €\nTageskarte: 7,90 €\n\nSie können mit Münzen, Scheinen oder mit Karte bezahlen.\nDie Fahrkarte gilt 90 Minuten.' },
          { t: 'ex', kind: 'choice', h: 'Read the screen. Choose the answer.', items: [
            { q: 'Kofi fährt einmal in die Stadt. Was kostet die Fahrkarte?', o: ['3,20 €', '7,90 €', '1,60 €'], why: 'One trip for an adult: *Einzelfahrkarte Erwachsene*, 3,20 €.' },
            { q: 'Kofi fährt nur drei Haltestellen. Welche Fahrkarte kauft er?', o: ['die Kurzstrecke', 'die Tageskarte', 'die Fahrkarte für ein Kind'], why: '*Kurzstrecke*: a short trip, up to 4 stops.' },
            { q: 'Seine Tochter ist 8 Jahre alt. Ihre Fahrkarte kostet ___.', o: ['1,60 €', '3,20 €', '2,10 €'], why: 'Children from 6 to 14: 1,60 €.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Bus 5: Rathaus → Universität', head: ['Haltestelle', 'Montag bis Freitag', 'Samstag', 'Sonntag'], rows: [
            ['Rathaus', '7.10', '8.10', '9.10'],
            ['Marktplatz', '7.14', '8.14', '9.14'],
            ['Stadtpark', '7.20', '8.20', '9.20'],
            ['Universität', '7.28', '8.28', '9.28'],
          ] },
          { t: 'text', md: 'The bus goes every 30 minutes from Monday to Friday and every hour on Saturday and Sunday.' },
          { t: 'ex', kind: 'tf', h: 'Read the timetable. True or false?', items: [
            { q: 'Am Montag fährt der Bus um 7.10 Uhr am Rathaus ab.', a: 't', why: 'Monday to Friday: *Rathaus 7.10*.' },
            { q: 'Vom Rathaus zur Universität sind es 18 Minuten.', a: 't', why: 'From 7.10 to 7.28: 18 minutes.' },
            { q: 'Am Sonntag fährt der erste Bus um 8.10 Uhr.', a: 'f', why: 'On Sunday the first bus leaves the *Rathaus* at 9.10. 8.10 is Saturday.' },
            { q: 'Am Samstag fährt der Bus alle 30 Minuten.', a: 'f', why: 'On Saturday it goes every hour.' },
          ] },
        ],
        [
          { t: 'tip', art: 'owl', md: 'In many German cities nobody checks your ticket when you get on. But inspectors come often, and without a ticket you pay a high fine. Always buy your ticket before the trip.' },
          { t: 'ex', kind: 'spot', h: 'Tap the three ways to pay at the machine.', items: [
            { s: 'Sie können mit [Münzen], [Scheinen] oder mit [Karte] bezahlen.', why: '*Münzen*: coins. *Scheine*: notes. *Karte*: a bank card.' },
          ] },
          { t: 'ex', kind: 'memory', h: 'Find the pairs: the word and its meaning in German.', pairs: [
            ['die Haltestelle', 'hier hält der Bus'],
            ['der Automat', 'hier kaufen Sie die Fahrkarte'],
            ['die Kurzstrecke', 'eine kurze Fahrt'],
            ['die Tageskarte', 'für einen ganzen Tag'],
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Ich fahre ___ U-Bahn.', o: ['mit der', 'mit dem', 'mit die'], why: '*die U-Bahn*: *mit der*.' },
      { q: 'Du ___ mit dem Fahrrad.', o: ['fährst', 'fahrst', 'fährt'], why: '*du fährst*, with *ä*.' },
      { q: '___ fährt der Bus? – Um 9 Uhr.', o: ['Wann', 'Wo', 'Was'], why: 'A time: *Wann?*' },
      { q: 'Wo ist die Haltestelle? – ___', o: ['Dort links.', 'Um 8 Uhr.', 'Drei Euro.'], why: '*Wo?* asks for a place.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Wir gehen zu ___. Es ist nicht weit.', a: ['Fuß'], why: 'On foot: *zu Fuß*.' },
      { q: 'Er fährt mit ___ Zug nach Hamburg.', a: ['dem'], why: '*der Zug*: *mit dem Zug*.' },
      { q: 'Eine ___ nach Bonn, bitte.', a: ['Fahrkarte', 'Karte'], why: 'To buy a ticket: *Eine Fahrkarte nach …, bitte.*' },
    ] },
    { t: 'ex', kind: 'picture', h: 'What is it?', items: [
      { pic: 'train', o: ['der Zug', 'das Fahrrad', 'die Fahrkarte'], why: '*der Zug*.' },
      { pic: 'ticket', o: ['die Fahrkarte', 'der Bus', 'die Haltestelle'], why: '*die Fahrkarte*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
      { a: 'Wann fährt der nächste Zug?', why: '*Wann*, the verb, then the subject.' },
      { a: 'Fährt der Bus zum Bahnhof?', why: 'A yes/no question starts with the verb.' },
    ] },
  ],
};
