// German B1 for travel, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'Travelling independently',
  goal: 'Plan and make your own way, and change plans when needed.',
  art: 'suitcase',
  tags: { skills: ['speaking', 'reading', 'vocabulary', 'grammar'], topics: ['transport', 'tickets', 'komparativ', 'indirect-questions', 'recommendations'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Train, bus or car?',
      about: 'Compare ways to travel, then book or change a ticket.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'To compare two ways to travel, use the **comparative**: adjective + *-er* + *als*. For the top of a group, use *am* + adjective + *-sten*. Many short adjectives add an umlaut: *lang*, *länger*, *am längsten*.' },
          { t: 'examples', items: [
            { s: 'Der Zug ist **schneller als** der Bus.', n: '*schnell*, *schneller als*: you compare two things.' },
            { s: 'Mit dem Fernbus fährt man **am günstigsten**.', n: '*am günstigsten*: the cheapest of all.' },
            { s: 'Mit dem Auto ist man **flexibler**, aber man steht oft im Stau.', n: '*flexibel* loses an *e*: *flexibler*.' },
            { s: 'Der Regionalzug ist **nicht so schnell wie** der Fernzug.', n: '*nicht so* … *wie*: less than the other thing.' },
            { s: '**Je früher** man bucht, **desto billiger** ist das Ticket.', n: '*je* + comparative, verb at the end. Then *desto* + comparative, verb next.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Germany, long-distance train tickets are often cheaper when you book early. Cheap tickets are usually valid only on one train. A flexible ticket costs more, but you can take any train on that route.' },
        ],
        [
          { t: 'table', caption: 'Words for tickets and journeys', explain: ['head', 'col1'], quiz: true, head: ['German', 'Meaning'], rows: [
            ['die einfache Fahrt', 'a one-way journey'],
            ['die Hin- und Rückfahrt', 'a return journey'],
            ['umsteigen', 'to change trains or buses'],
            ['die Verbindung', 'a connection: the train or bus you take'],
            ['die Sitzplatzreservierung', 'a seat reservation'],
            ['umbuchen', 'to change a booking to another day or time'],
            ['stornieren', 'to cancel a booking'],
            ['die Verspätung', 'a delay'],
          ] },
          { t: 'text', md: '*umsteigen* and *umbuchen* are separable verbs. In the present they split: *Ich steige in Köln um.* In the Perfekt the *ge* goes in the middle: *Ich habe das Ticket umgebucht.*' },
        ],
        [
          { t: 'dialogue', title: 'At the ticket office', lines: [
            { who: 'Leyla', s: 'Guten Tag. Ich habe ein Ticket von Hamburg nach München für Freitag. Kann ich die Fahrt auf Samstag umbuchen?' },
            { who: 'Mitarbeiter', s: 'Zeigen Sie mal … Das ist ein Sparticket. Umbuchen geht, aber es kostet eine Gebühr von 10 Euro.' },
            { who: 'Leyla', s: 'Das ist in Ordnung. Gibt es am Samstagmorgen eine direkte Verbindung?' },
            { who: 'Mitarbeiter', s: 'Um 8:04 Uhr fährt ein Zug ohne Umsteigen. Mit Umsteigen in Hannover sind Sie eine halbe Stunde früher da, aber die Verbindung ist teurer.' },
            { who: 'Leyla', s: 'Dann nehme ich lieber den direkten Zug. Der ist zwar langsamer, aber bequemer.' },
            { who: 'Mitarbeiter', s: 'Möchten Sie auch eine Sitzplatzreservierung? Am Samstag sind die Züge oft voll.' },
            { who: 'Leyla', s: 'Ja, bitte. Einen Platz am Fenster, wenn möglich.' },
            { who: 'Mitarbeiter', s: 'Wagen 7, Platz 45, am Fenster. Mit der Gebühr macht das zusammen 15 Euro.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'Leyla möchte einen Tag später fahren.', a: 't', why: 'She has a ticket for Friday and wants to travel on Saturday.' },
            { q: 'Das Umbuchen ist kostenlos.', a: 'f', why: 'There is a fee: *eine Gebühr von 10 Euro*.' },
            { q: 'Die Verbindung mit Umsteigen ist schneller.', a: 't', why: 'With a change in Hannover she arrives half an hour earlier.' },
            { q: 'Leyla muss in Hannover umsteigen.', a: 'f', why: 'She takes the direct train: *Dann nehme ich lieber den direkten Zug.*' },
            { q: 'Leyla bezahlt 15 Euro.', a: 't', why: '10 Euro for the change and 5 Euro for the seat reservation.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Der Fernzug ist ___ als der Regionalzug.', o: ['schneller', 'schnell', 'am schnellsten'], why: 'Two things with *als*: the comparative *schneller*.' },
            { q: 'Von allen Verbindungen ist der Nachtzug ___.', o: ['am bequemsten', 'bequemer', 'am bequemer'], why: 'The top of a group: *am* + adjective + *-sten*.' },
            { q: 'Der Bus ist nicht so teuer ___ der Zug.', o: ['wie', 'als', 'dann'], why: '*nicht so* … *wie*. Use *als* only after a comparative.' },
            { q: 'Je länger die Fahrt ist, ___ wichtiger ist eine Reservierung.', o: ['desto', 'als', 'so'], why: '*je* … *desto*: the longer, the more important.' },
            { q: 'Mit dem Auto dauert die Fahrt ___ als mit dem Zug.', o: ['länger', 'langer', 'mehr lang'], why: '*lang* takes an umlaut: *länger*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the table.', items: [
            { q: 'Es gibt keinen direkten Zug. In Köln muss ich ___. (change trains)', a: ['umsteigen'], why: 'After the modal verb *muss*, the infinitive *umsteigen* goes to the end.' },
            { q: 'Mein Zug hat 20 Minuten ___. (delay)', a: ['Verspätung'], why: '*Verspätung haben*: to be late.' },
            { q: 'Eine Hin- und ___ nach Leipzig, bitte. (return)', a: ['Rückfahrt', 'Rueckfahrt'], why: '*die Hin- und Rückfahrt*: there and back.' },
            { q: 'Am Freitag kann ich nicht. Ich möchte mein Ticket auf Sonntag ___. (change)', a: ['umbuchen'], why: '*umbuchen*: the same journey on another day.' },
            { q: 'Die Reise fällt leider aus. Ich muss das Hotel ___. (cancel)', a: ['stornieren'], why: '*stornieren*: you cancel the booking completely.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Asking locals for tips',
      about: 'Ask people politely and understand their recommendations.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'When you ask a stranger, an **indirect question** sounds more polite. Start with *Können Sie mir sagen, …* or *Wissen Sie, …*. The verb goes to the **end**. For a yes/no question, use *ob*.' },
          { t: 'examples', items: [
            { s: 'Können Sie mir sagen, **wo** die Altstadt **ist**?', n: 'From *Wo ist die Altstadt?* The question word stays, the verb goes to the end.' },
            { s: 'Wissen Sie, **ob** der Bus zum Strand **fährt**?', n: 'From *Fährt der Bus zum Strand?* A yes/no question needs *ob*.' },
            { s: 'Wissen Sie, wann das Museum **aufmacht**?', n: 'A separable verb comes together again at the end: *aufmacht*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Start with *Entschuldigung* or *Entschuldigen Sie*, and use *Sie* with adults you do not know. In hostels and with other young travellers, *du* is usual.' },
        ],
        [
          { t: 'dialogue', title: 'In a bakery in Lübeck', lines: [
            { who: 'Ji-woo', s: 'Entschuldigung, ich bin nur zwei Tage hier. Können Sie mir sagen, was man unbedingt sehen sollte?' },
            { who: 'Frau Hansen', s: 'Die Altstadt natürlich. Und wenn das Wetter gut ist, würde ich nach Travemünde fahren. Da ist der Strand.' },
            { who: 'Ji-woo', s: 'Wissen Sie, wie lange man mit dem Bus braucht?' },
            { who: 'Frau Hansen', s: 'Ungefähr eine halbe Stunde, glaube ich. Mit dem Zug geht es auch.' },
            { who: 'Ji-woo', s: 'Und wo kann man hier gut Fisch essen? Aber nicht zu teuer.' },
            { who: 'Frau Hansen', s: 'Am Hafen gibt es viele Restaurants, aber die sind oft voll. Ich empfehle Ihnen den kleinen Imbiss hinter der Kirche. Das Fischbrötchen dort lohnt sich!' },
            { who: 'Ji-woo', s: 'Super, vielen Dank für den Tipp!' },
            { who: 'Frau Hansen', s: 'Gern. Und probieren Sie unbedingt das Marzipan. Dafür ist Lübeck bekannt.' },
          ] },
          { t: 'text', md: 'People recommend things with *Ich empfehle Ihnen …*, *Sie sollten unbedingt …*, *An Ihrer Stelle würde ich …* or *Das lohnt sich*. *Unbedingt* means you really should do it.' },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Make the questions polite.', items: [
            { a: 'Können Sie mir sagen, wo der Bahnhof ist?', why: 'The question word *wo* stays, and the verb *ist* goes to the end.' },
            { a: 'Wissen Sie, ob das Museum geöffnet ist?', why: 'A yes/no question with *ob*: *geöffnet ist* at the end.' },
            { a: 'Können Sie mir sagen, wann der letzte Bus fährt?', why: 'After *wann* the verb *fährt* goes to the end.' },
            { a: 'Wissen Sie, wie lange die Fähre braucht?', why: '*wie lange* starts the indirect question; *braucht* is last.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the question and the answer.', pairs: [
            ['Wo kann man hier gut frühstücken?', 'Im Café am Marktplatz, da gibt es ein tolles Buffet.'],
            ['Lohnt sich das Schloss?', 'Ja, aber gehen Sie früh hin. Mittags ist es sehr voll.'],
            ['Wie komme ich am besten zum Strand?', 'Am besten mit dem Fahrrad, das dauert zehn Minuten.'],
            ['Wissen Sie, ob es heute regnet?', 'Laut Wetterbericht bleibt es trocken.'],
            ['Was würden Sie heute Abend machen?', 'An Ihrer Stelle würde ich ins Hafenviertel gehen.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Ich empfehle ___ den Wanderweg am Fluss.', o: ['Ihnen', 'Sie', 'Ihr'], why: '*empfehlen*: the person gets the dative, *Ihnen*.' },
            { q: 'An Ihrer Stelle ___ ich mit dem Rad fahren.', o: ['würde', 'werde', 'wäre'], why: 'Advice with Konjunktiv II: *würde* + infinitive.' },
            { q: 'Die Aussicht vom Turm lohnt ___.', o: ['sich', 'es', 'ihn'], why: 'The verb is reflexive: *sich lohnen*, to be worth it.' },
            { q: 'Können Sie mir sagen, wo ___?', o: ['die Haltestelle ist', 'ist die Haltestelle', 'die Haltestelle sein'], why: 'In an indirect question the conjugated verb goes to the end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: a travel forum thread',
      about: 'Read advice from other travellers and find what is useful.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'In travel forums people write informally, with *du* and *ihr*. Many posts end with a short greeting: *LG* (*Liebe Grüße*) or *VG* (*Viele Grüße*).' },
          { t: 'reading', title: 'Mit Zug und Rad an den Bodensee?', md: '**Tomasz88:** Hallo zusammen! Ich möchte im Juni eine Woche am Bodensee verbringen, aber ohne Auto. Mein Plan: mit dem Zug nach Lindau fahren und dann mit dem Fahrrad um den See. Ist das realistisch? Und lohnt es sich, mein eigenes Rad mitzunehmen, oder sollte ich lieber eins vor Ort leihen? LG Tomasz\n\n**SeeblickAnna:** Hi Tomasz, das ist total realistisch! Der Radweg um den See ist gut ausgeschildert und meistens flach. Ich würde aber ein Rad vor Ort leihen. Im Sommer sind die Regionalzüge oft voll, und für dein eigenes Rad brauchst du meistens eine extra Fahrradkarte. Buch auch die Unterkünfte früh, im Juni ist viel los.\n\n**RadlerJens:** Ich war letztes Jahr dort. Mein Tipp: Plane nicht zu viele Kilometer pro Tag. Es gibt so viele schöne Orte, an denen man anhalten möchte. Und wenn das Wetter schlecht ist, kannst du einfach ein Stück mit dem Schiff fahren. Das ist langsamer als der Zug, aber viel schöner. Viel Spaß!\n\n**Tomasz88:** Danke euch! Dann leihe ich ein Rad und plane lieber kürzere Etappen. VG' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the thread. True, false or not given?', items: [
            { q: 'Tomasz möchte mit dem Auto an den Bodensee fahren.', a: 'f', why: 'He writes *aber ohne Auto*: he wants to go by train.' },
            { q: 'Anna findet den Plan gut.', a: 't', why: '*Das ist total realistisch!*' },
            { q: 'Anna empfiehlt, das eigene Fahrrad mitzunehmen.', a: 'f', why: 'She writes *Ich würde aber ein Rad vor Ort leihen.*' },
            { q: 'Jens ist einmal um den ganzen See gefahren.', a: 'ng', why: 'Jens was there last year, but he does not say how far he cycled.' },
            { q: 'Jens sagt, dass das Schiff schneller als der Zug ist.', a: 'f', why: '*Das ist langsamer als der Zug, aber viel schöner.*' },
            { q: 'Tomasz hat schon eine Unterkunft gebucht.', a: 'ng', why: 'Anna tells him to book early, but we do not know if he has booked.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What do these words from the thread mean?', items: [
            { q: 'Der Radweg ist gut **ausgeschildert**. Das heißt: ___', o: ['Es gibt viele Schilder.', 'Es gibt keine Schilder.', 'Der Weg ist ganz neu.'], why: '*ausgeschildert*: there are signs that show the way.' },
            { q: 'Im Juni ist **viel los**. Das heißt: ___', o: ['Es sind viele Leute da.', 'Es ist sehr ruhig.', 'Alles ist geschlossen.'], why: '*viel los*: busy, a lot is happening.' },
            { q: 'Ein Rad **vor Ort** leihen heißt: ___', o: ['am Bodensee leihen', 'zu Hause leihen', 'im Zug leihen'], why: '*vor Ort*: at the place where you are.' },
            { q: '**Kürzere Etappen** planen heißt: ___', o: ['jeden Tag weniger Kilometer fahren', 'jeden Tag schneller fahren', 'öfter mit dem Zug fahren'], why: 'An *Etappe* is the part of a trip you do in one day.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the comparatives.', items: [
            { s: 'Das Schiff ist [langsamer] als der Zug, aber viel [schöner].', why: '*langsam* becomes *langsamer*, *schön* becomes *schöner*.' },
            { s: 'Kleine Orte sind oft [ruhiger] und [günstiger] als große Städte.', why: '*ruhig*, *ruhiger*; *günstig*, *günstiger*. *große* is the normal form.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Der Zug ist ___ als der Fernbus, aber auch teurer.', o: ['schneller', 'schnell', 'am schnellsten'], why: 'Comparing two things with *als*: *schneller*.' },
      { q: 'Ich kann am Samstag nicht. Ich möchte mein Ticket auf Sonntag ___.', o: ['umbuchen', 'umsteigen', 'stornieren'], why: 'Another day for the same journey: *umbuchen*.' },
      { q: 'Wissen Sie, ___ der Bus heute fährt?', o: ['ob', 'wenn', 'als'], why: 'An indirect yes/no question starts with *ob*.' },
      { q: 'An Ihrer Stelle ___ ich die Altstadt zu Fuß besichtigen.', o: ['würde', 'wird', 'hätte'], why: 'Advice: *An Ihrer Stelle würde ich* + infinitive.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Je früher man bucht, ___ günstiger ist das Ticket.', a: ['desto', 'umso'], why: '*je* … *desto* (or *umso*).' },
      { q: 'Der Zug hat 30 Minuten ___. (delay)', a: ['Verspätung'], why: '*Verspätung haben*: to be late.' },
      { q: 'Es gibt keinen direkten Zug. In Hannover muss ich ___. (change trains)', a: ['umsteigen'], why: '*umsteigen*: you change to another train.' },
      { q: 'Ich empfehle ___ das Fischbrötchen am Hafen. (Sie)', a: ['Ihnen'], why: '*empfehlen* + dative: *Ihnen*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the polite questions.', items: [
      { a: 'Können Sie mir sagen, wo die Fähre abfährt?', why: 'Indirect question: the separable verb *abfährt* comes together at the end.' },
      { a: 'Wissen Sie, wie lange das Museum geöffnet ist?', why: 'After *wie lange*, the verb *ist* goes to the end.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'Wer eine Fahrt storniert, fährt an einem anderen Tag.', a: 'f', why: '*stornieren* cancels the trip. Another day is *umbuchen*.' },
      { q: '*LG* am Ende eines Beitrags bedeutet *Liebe Grüße*.', a: 't', why: 'A short, friendly greeting in informal posts.' },
    ] },
  ],
};
