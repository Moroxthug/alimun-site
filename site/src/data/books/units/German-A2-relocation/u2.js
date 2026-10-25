// German A2 for moving abroad, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Finding your way',
  goal: 'Buy a ticket, use public transport and ask for directions.',
  art: 'dog',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['public-transport', 'tickets', 'directions', 'zum-zur', 'imperative-sie', 'timetable'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'Buying a ticket',
      about: 'The words for tickets and transport, and how to buy a ticket.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Buses, trams, the underground (*U-Bahn*) and city trains (*S-Bahn*) are the easiest way to travel in most German cities. You buy a ticket, a **Fahrkarte** or **Ticket**, at a machine, at a counter or in an app.' },
          { t: 'table', caption: 'Tickets and transport', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['der Einzelfahrschein', 'a ticket for one trip'],
            ['die Tageskarte', 'a ticket for one whole day'],
            ['die Monatskarte', 'a ticket for one month'],
            ['die Haltestelle', 'a bus or tram stop'],
            ['das Gleis', 'the platform number at a station'],
            ['der Automat', 'the ticket machine'],
            ['umsteigen', 'to change to another bus or train'],
            ['entwerten', 'to stamp a ticket before the trip'],
          ] },
          { t: 'tip', art: 'owl', md: 'In many German cities there are no barriers. Inspectors check tickets on the bus or train, and without a valid ticket you pay a high fine. In some cities you must stamp (*entwerten*) your ticket in a small machine before you travel.' },
        ],
        [
          { t: 'dialogue', title: 'Im Kundenzentrum', lines: [
            { who: 'Mitarbeiter', s: 'Guten Tag. Was kann ich für Sie tun?' },
            { who: 'Sofia', s: 'Ich möchte zum Flughafen fahren. Welche Fahrkarte brauche ich?' },
            { who: 'Mitarbeiter', s: 'Einen Einzelfahrschein. Der kostet 3,80 Euro.' },
            { who: 'Sofia', s: 'Gibt es auch eine Tageskarte? Ich fahre heute noch in die Stadt.' },
            { who: 'Mitarbeiter', s: 'Ja, die kostet 8,50 Euro. Damit können Sie den ganzen Tag fahren.' },
            { who: 'Sofia', s: 'Dann nehme ich eine Tageskarte. Muss ich umsteigen?' },
            { who: 'Mitarbeiter', s: 'Ja. Sie fahren mit der S2 bis zum Hauptbahnhof und steigen dort in die S5 um.' },
            { who: 'Sofia', s: 'Und von welchem Gleis fährt die S2?' },
            { who: 'Mitarbeiter', s: 'Von Gleis 3.' },
          ] },
          { t: 'text', md: '*umsteigen* is a separable verb. In a normal sentence, *um* goes to the **end**: *Ich steige am Hauptbahnhof **um**.* The same is true for *einsteigen* (get on) and *aussteigen* (get off).' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the word and its meaning.', pairs: [
            ['der Einzelfahrschein', 'für eine Fahrt'],
            ['die Tageskarte', 'für einen ganzen Tag'],
            ['die Monatskarte', 'für einen Monat'],
            ['die Haltestelle', 'hier hält der Bus'],
            ['das Gleis', 'hier hält der Zug'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Which ticket is best?', items: [
            { q: 'Sie fahren heute fünfmal mit dem Bus. Sie kaufen ___.', o: ['eine Tageskarte', 'einen Einzelfahrschein', 'eine Monatskarte'], why: 'Many trips on one day: a *Tageskarte* is best.' },
            { q: 'Sie fahren jeden Tag mit der U-Bahn zur Arbeit. Sie kaufen ___.', o: ['eine Monatskarte', 'eine Tageskarte', 'einen Einzelfahrschein'], why: 'Every day for weeks: a *Monatskarte* is usually the cheapest.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
            { q: 'Ich ___ am Hauptbahnhof um. (umsteigen)', a: ['steige'], why: '*ich steige … um*: the verb is second, *um* at the end.' },
            { q: 'Fahren Sie bis zum Marktplatz und steigen Sie dort ___. (umsteigen)', a: ['um'], why: 'Also in a request, *um* goes to the end.' },
            { q: 'Was ___ eine Tageskarte? (kosten)', a: ['kostet'], why: '*eine Tageskarte* is singular: *kostet*.' },
            { q: 'Wo ist die nächste ___? Ich möchte den Bus nehmen.', a: ['Haltestelle', 'Bushaltestelle'], why: 'The bus stops at a *Haltestelle*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
            { a: 'Muss ich am Hauptbahnhof umsteigen?', why: 'A yes/no question: *muss* first, the infinitive *umsteigen* at the end.' },
            { a: 'Wo kann ich eine Fahrkarte kaufen?', why: 'Question word, *kann*, *ich*, and *kaufen* at the end.' },
            { a: 'Wie lange ist die Fahrkarte gültig?', why: '*Wie lange* asks how long. *gültig* means valid.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Asking the way',
      about: 'Ask for directions and understand the answer.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'To ask the way, start with *Entschuldigung* and ask: *Wie komme ich zum Bahnhof?* After *zu*, use the Dativ: **zum** is *zu dem* (for *der* and *das* words), **zur** is *zu der* (for *die* words).' },
          { t: 'table', caption: 'Directions', explain: ['head', 'col1'], quiz: true, head: ['German', 'Meaning'], rows: [
            ['geradeaus', 'straight on'],
            ['links / rechts', 'left / right'],
            ['an der Ampel', 'at the traffic lights'],
            ['an der Kreuzung', 'at the crossroads'],
            ['die erste Straße links', 'the first street on the left'],
            ['über die Straße', 'across the street'],
            ['gegenüber', 'opposite'],
            ['zu Fuß', 'on foot'],
          ] },
          { t: 'tip', art: 'owl', md: '*der Bahnhof* → *zum Bahnhof*. *das Rathaus* → *zum Rathaus*. *die Post* → *zur Post*. If you are not sure, ask *Wo ist …?*: *Wo ist die Post?*' },
        ],
        [
          { t: 'dialogue', title: 'Auf der Straße', lines: [
            { who: 'Amir', s: 'Entschuldigung, wie komme ich zur Post?' },
            { who: 'Frau Berg', s: 'Zur Post? Gehen Sie hier geradeaus bis zur Ampel. An der Ampel gehen Sie links.' },
            { who: 'Amir', s: 'An der Ampel links. Und dann?' },
            { who: 'Frau Berg', s: 'Dann nehmen Sie die zweite Straße rechts. Die Post ist neben der Apotheke.' },
            { who: 'Amir', s: 'Ist das weit?' },
            { who: 'Frau Berg', s: 'Nein, nur fünf Minuten zu Fuß.' },
            { who: 'Amir', s: 'Vielen Dank!' },
            { who: 'Frau Berg', s: 'Gern geschehen.' },
          ] },
          { t: 'text', md: 'Directions are often polite requests with **Sie**: the verb comes first. *Gehen Sie geradeaus. Nehmen Sie die zweite Straße rechts. Fahren Sie bis zur Endstation.*' },
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'Amir geht an der Ampel rechts.', a: 'f', why: '*An der Ampel gehen Sie links.*' },
            { q: 'Die Post ist neben der Apotheke.', a: 't', why: 'Frau Berg says this at the end.' },
            { q: 'Amir braucht einen Bus.', a: 'f', why: 'The post office is only five minutes away *zu Fuß*, on foot.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'zum or zur?', items: [
            { q: 'Wie komme ich ___ Bahnhof?', o: ['zum', 'zur', 'zu'], why: '*der Bahnhof*: *zu dem* = *zum*.' },
            { q: 'Wie komme ich ___ Apotheke?', o: ['zur', 'zum', 'zu'], why: '*die Apotheke*: *zu der* = *zur*.' },
            { q: 'Wie komme ich ___ Rathaus?', o: ['zum', 'zur', 'zu'], why: '*das Rathaus*: *zu dem* = *zum*.' },
            { q: 'Wie komme ich ___ Haltestelle?', o: ['zur', 'zum', 'zu'], why: '*die Haltestelle*: *zur*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the words and their meaning.', pairs: [
            ['geradeaus', 'nicht links und nicht rechts'],
            ['gegenüber', 'auf der anderen Straßenseite'],
            ['die Ampel', 'rot, gelb und grün'],
            ['die Kreuzung', 'hier treffen sich zwei Straßen'],
            ['zu Fuß', 'ohne Bus und ohne Auto'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Give directions. Write the verb.', items: [
            { q: '___ Sie hier geradeaus. (gehen)', a: ['Gehen'], why: 'A polite request: the verb first, then *Sie*.' },
            { q: '___ Sie die erste Straße links. (nehmen)', a: ['Nehmen'], why: '*Nehmen Sie …*: the same form as the infinitive.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
            { a: 'Wie komme ich zur Haltestelle?', why: 'Question word, verb, *ich*, then *zur Haltestelle*.' },
            { a: 'Wie weit ist es bis zum Bahnhof?', why: '*Wie weit* asks about the distance. *bis zum*: as far as the station.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Timetables and delays',
      about: 'Read a departure board, a ticket and a notice about building work.',
      art: 'snail',
      spreads: [
        [
          { t: 'table', caption: 'Abfahrt, Hauptbahnhof', head: ['Abfahrt', 'Zug', 'Nach', 'Gleis'], rows: [
            ['8.05', 'RE 3', 'Hannover', '4'],
            ['8.12', 'S 1', 'Flughafen', '2'],
            ['8.20', 'RB 17', 'Celle', '5'],
            ['8.34', 'S 1', 'Flughafen', '2'],
          ] },
          { t: 'reading', title: 'Anzeige am Bahnsteig', md: 'RE 3 nach Hannover: heute ca. 15 Minuten Verspätung.\n\nRB 17 nach Celle: Der Zug fällt heute aus. Bitte nehmen Sie den nächsten Zug um 9.20 Uhr.' },
          { t: 'ex', kind: 'choice', h: 'Look at the board and the display. Choose the answer.', items: [
            { q: 'Sie wollen um 8 Uhr zum Flughafen. Wann fährt Ihr Zug?', o: ['um 8.12 Uhr', 'um 8.05 Uhr', 'um 8.20 Uhr'], why: 'The first *S 1* to the *Flughafen* leaves at 8.12.' },
            { q: 'Wann fährt der RE 3 heute ungefähr?', o: ['um 8.20 Uhr', 'um 8.05 Uhr', 'um 7.50 Uhr'], why: '8.05 + 15 minutes *Verspätung* (delay) = about 8.20.' },
            { q: 'Die RB 17 fällt aus. Das heißt: ___', o: ['Sie fährt heute nicht.', 'Sie fährt heute später.', 'Sie fährt von einem anderen Gleis.'], why: '*ausfallen*: the train is cancelled.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Bauarbeiten: Linie 4', md: 'Liebe Fahrgäste,\n\nwegen Bauarbeiten fährt die Straßenbahn Linie 4 vom 12. bis zum 25. Oktober nur zwischen Hauptbahnhof und Marktplatz. Zwischen Marktplatz und Waldfriedhof fahren Busse. Bitte steigen Sie am Marktplatz in den Ersatzbus um. Die Haltestelle für den Ersatzbus ist in der Bahnhofstraße, gegenüber vom Rathaus.\n\nDie Busse fahren alle zehn Minuten, nach 20 Uhr alle zwanzig Minuten. Bitte planen Sie mehr Zeit ein: Die Fahrt dauert etwa 15 Minuten länger.\n\nIhre Fahrkarte gilt auch im Ersatzbus. Fahrräder dürfen leider nicht im Ersatzbus mitfahren.\n\nWir bitten um Ihr Verständnis.\nIhre Stadtwerke' },
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the notice. True, false or not given?', items: [
            { q: 'Im Oktober fährt die Linie 4 zwei Wochen lang nicht bis zum Waldfriedhof.', a: 't', why: 'From 12 to 25 October it only goes between *Hauptbahnhof* and *Marktplatz*.' },
            { q: 'Am Marktplatz müssen die Fahrgäste umsteigen.', a: 't', why: '*Bitte steigen Sie am Marktplatz in den Ersatzbus um.*' },
            { q: 'Für den Ersatzbus braucht man eine neue Fahrkarte.', a: 'f', why: '*Ihre Fahrkarte gilt auch im Ersatzbus.*' },
            { q: 'Am Abend fahren die Busse nicht so oft.', a: 't', why: 'After 8 pm only every twenty minutes.' },
            { q: 'Man kann das Fahrrad im Bus mitnehmen.', a: 'f', why: '*Fahrräder dürfen leider nicht … mitfahren.*' },
            { q: 'Die Bauarbeiten sind an den Schienen.', a: 'ng', why: 'The notice does not say what the building work is.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Fahrkarte', md: 'Tageskarte Erwachsene\nGültig am 14.10.2026 bis 3 Uhr am nächsten Tag\nZone A und B\n8,50 EUR\nNicht übertragbar' },
          { t: 'tip', art: 'owl', md: 'Words for problems: *die Verspätung* (delay), *fällt aus* (is cancelled), *der Ersatzbus* (a bus instead of a train or tram), *Gleiswechsel* (the train leaves from another platform). *Nicht übertragbar* on a ticket means only you can use it.' },
          { t: 'ex', kind: 'spot', h: 'Tap the words for problems on the trip.', items: [
            { s: 'Der Zug hat 20 Minuten [Verspätung]. Die S-Bahn [fällt] heute [aus]. Statt der Straßenbahn fährt ein [Ersatzbus].', why: 'Delay, cancelled (*fällt … aus*, two words) and the replacement bus.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Read the ticket. True or false?', items: [
            { q: 'Mit der Karte kann man am 15.10. um 10 Uhr fahren.', a: 'f', why: 'It is valid only until 3 am on the next day.' },
            { q: 'Eine Freundin darf die Karte auch benutzen.', a: 'f', why: '*Nicht übertragbar*: only the owner can use it.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Entschuldigung, wie komme ich ___ Bahnhof?', o: ['zum', 'zur', 'zu'], why: '*der Bahnhof*: *zum*.' },
      { q: 'Mit einer ___ kann man den ganzen Tag fahren.', o: ['Tageskarte', 'Monatskarte', 'Haltestelle'], why: '*Tageskarte*: a ticket for one day.' },
      { q: 'Der Zug fällt aus. Das heißt: ___', o: ['Er fährt nicht.', 'Er ist pünktlich.', 'Er ist sehr voll.'], why: '*ausfallen*: cancelled.' },
      { q: 'Gehen Sie hier ___ bis zur Kreuzung.', o: ['geradeaus', 'gegenüber', 'umsteigen'], why: '*geradeaus*: straight on.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Ich steige am Marktplatz ___. (umsteigen)', a: ['um'], why: 'Separable verb: *um* at the end.' },
      { q: 'Wie komme ich ___ Universität?', a: ['zur'], why: '*die Universität*: *zu der* = *zur*.' },
      { q: 'Der Zug hat zehn Minuten ___. (spät, noun)', a: ['Verspätung'], why: '*die Verspätung*: the delay.' },
      { q: '___ Sie die erste Straße rechts. (nehmen)', a: ['Nehmen'], why: 'Polite request: verb first, then *Sie*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
      { a: 'Muss ich am Hauptbahnhof umsteigen?', why: '*muss* first, *umsteigen* at the end.' },
      { a: 'Wo kann ich eine Fahrkarte kaufen?', why: 'Question word, *kann*, *ich*, *kaufen* at the end.' },
      { a: 'Wie komme ich zur Post?', why: 'Question word, verb, *ich*, then the place.' },
    ] },
  ],
};
