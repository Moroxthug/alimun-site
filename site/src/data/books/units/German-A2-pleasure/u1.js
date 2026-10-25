// German A2 for travel, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'Planning a trip',
  goal: 'Plan a trip, book a room and talk about dates and prices.',
  art: 'suitcase',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['dates', 'ordinal-numbers', 'prices', 'booking', 'polite-questions'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Dates, prices and booking online',
      about: 'Say dates and prices and understand a booking website.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'For dates, German uses **ordinal numbers**: *der erste*, *der zweite*, *der dritte*. In writing, a dot after the number shows this: *der 3. Mai* means *der dritte Mai*.\n\nFrom 1 to 19, add *-te* to the number: *vier → vierte*. From 20, add *-ste*: *zwanzig → zwanzigste*. Some are irregular: *erste*, *dritte*, *siebte*, *achte*.' },
          { t: 'table', caption: 'Dates', quiz: true, head: ['', 'Heute ist der …', 'Ich komme am …'], rows: [
            ['1.', 'erste', 'ersten'],
            ['2.', 'zweite', 'zweiten'],
            ['3.', 'dritte', 'dritten'],
            ['7.', 'siebte', 'siebten'],
            ['8.', 'achte', 'achten'],
            ['19.', 'neunzehnte', 'neunzehnten'],
            ['20.', 'zwanzigste', 'zwanzigsten'],
            ['31.', 'einunddreißigste', 'einunddreißigsten'],
          ] },
          { t: 'tip', art: 'owl', md: 'To say when something happens, use *am* and add *-n*: *am ersten Juni*. For a time from one day to another, use *vom … bis zum …*: *vom 3. bis zum 7. August* is *vom dritten bis zum siebten August*.' },
        ],
        [
          { t: 'text', md: 'Prices are written with a comma, not a point: *12,50 €*. You say the euros and then the cents: *zwölf Euro fünfzig*. For a price with no cents, say only the euros: *89 €* is *neunundachtzig Euro*.\n\nHotels give the price *pro Nacht* (per night) and say if breakfast is included: *inklusive Frühstück*.' },
          { t: 'table', caption: 'On a booking website', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['die Anreise', 'the day you arrive'],
            ['die Abreise', 'the day you leave'],
            ['die Übernachtung', 'one night in a hotel'],
            ['das Einzelzimmer', 'a room for one person'],
            ['das Doppelzimmer', 'a room for two people'],
            ['verfügbar', 'available, you can book it'],
            ['stornieren', 'to cancel a booking'],
            ['kostenlos', 'free, it costs nothing'],
          ] },
          { t: 'examples', items: [
            { s: 'Das Zimmer kostet **79 Euro** pro Nacht.', n: 'You say *neunundsiebzig Euro*.' },
            { s: 'Die Fahrkarte kostet **34,90 €**.', n: 'You say *vierunddreißig Euro neunzig*.' },
            { s: '**Kostenlose Stornierung** bis zum 10. Mai.', n: 'You can cancel until 10 May and you pay nothing.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the date in words.', items: [
            { q: 'Wir fahren am ___ Juni nach Hamburg. (3.)', a: ['dritten'], why: 'After *am*: *dritte* + *n* = *dritten*.' },
            { q: 'Heute ist der ___ Mai. (1.)', a: ['erste'], why: 'After *der*, with no *am*: *erste*, without *-n*.' },
            { q: 'Das Konzert ist am ___ Juli. (20.)', a: ['zwanzigsten'], why: 'From 20 the ending is *-ste*. After *am*, add *-n*: *zwanzigsten*.' },
            { q: 'Ich bleibe vom 5. bis zum ___ August. (8.)', a: ['achten'], why: '*acht* + *-te* is *achte*, with one *t*. After *zum*, add *-n*.' },
            { q: 'Mein Flug ist am ___ März. (7.)', a: ['siebten', 'siebenten'], why: '*sieben → siebte*. After *am*: *siebten*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'How do you say the price?', items: [
            { q: '12,50 €', o: ['zwölf Euro fünfzig', 'zwölf Komma fünfzig Euro', 'zwölfhundertfünfzig Euro'], why: 'With prices, you say the euros and then the cents: *zwölf Euro fünfzig*.' },
            { q: '89 €', o: ['neunundachtzig Euro', 'achtundneunzig Euro', 'achtzigneun Euro'], why: 'In German the small number comes first: *neun-und-achtzig*.' },
            { q: '145 €', o: ['hundertfünfundvierzig Euro', 'hundertvierundfünfzig Euro', 'hundertvierzigfünf Euro'], why: 'First *hundert*, then the ones before the tens: *hundert-fünf-und-vierzig*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the word and its meaning.', pairs: [
            ['das Einzelzimmer', 'ein Zimmer für eine Person'],
            ['das Doppelzimmer', 'ein Zimmer für zwei Personen'],
            ['die Anreise', 'der Tag, an dem man ankommt'],
            ['die Abreise', 'der Tag, an dem man wieder fährt'],
            ['stornieren', 'eine Buchung absagen'],
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Asking about a room or a tour',
      about: 'Ask polite questions on the phone and in an email.',
      art: 'parrot',
      spreads: [
        [
          { t: 'dialogue', title: 'Am Telefon', lines: [
            { who: 'Pension Seeblick', s: 'Pension Seeblick, Krüger, guten Tag.' },
            { who: 'Mariam', s: 'Guten Tag, mein Name ist Mariam Haddad. Haben Sie vom 12. bis zum 15. Juli ein Doppelzimmer frei?' },
            { who: 'Pension Seeblick', s: 'Einen Moment, bitte … Ja, wir haben noch ein Zimmer mit Blick auf den See.' },
            { who: 'Mariam', s: 'Wie viel kostet das Zimmer pro Nacht?' },
            { who: 'Pension Seeblick', s: '95 Euro, inklusive Frühstück.' },
            { who: 'Mariam', s: 'Gibt es auch einen Parkplatz?' },
            { who: 'Pension Seeblick', s: 'Ja, der Parkplatz ist kostenlos.' },
            { who: 'Mariam', s: 'Gut, dann möchte ich das Zimmer für drei Nächte reservieren.' },
            { who: 'Pension Seeblick', s: 'Gern. Ich schicke Ihnen eine Bestätigung per E-Mail.' },
          ] },
          { t: 'text', md: 'Mariam asks two kinds of questions. In a question with a **question word** (*wie viel*, *wann*, *wo*), the verb comes second. A **yes/no question** starts with the verb: *Haben Sie …? Gibt es …?*' },
        ],
        [
          { t: 'text', md: '*Ich möchte* and *ich hätte gern* are polite ways to say what you want. *Könnten Sie …?* is a polite way to ask someone to do something. With *können* and *möchten*, the infinitive goes to the **end**.' },
          { t: 'examples', items: [
            { s: '**Ich hätte gern** ein Zimmer mit Balkon.', n: 'Polite: I would like.' },
            { s: '**Könnten Sie** mir die Preise **schicken**?', n: 'A polite request. The infinitive *schicken* goes to the end.' },
            { s: '**Ist** das Frühstück inklusive?', n: 'A yes/no question: the verb comes first.' },
            { s: '**Wann beginnt** die Stadtführung?', n: 'A question word, then the verb.' },
            { s: '**Muss man** die Tour **reservieren**?', n: '*man* means people in general. *reservieren* goes to the end.' },
          ] },
          { t: 'tip', art: 'owl', md: 'For a tour, ask where it starts: *Wo ist der Treffpunkt?* The *Treffpunkt* is the place where the group meets.' },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
            { a: 'Haben Sie ein Einzelzimmer frei?', why: 'A yes/no question: the verb *haben* comes first, *frei* goes to the end.' },
            { a: 'Wie viel kostet die Übernachtung?', why: 'The question word *wie viel*, then the verb *kostet*.' },
            { a: 'Könnten Sie mir die Preise schicken?', why: '*Könnten* first, *mir* before *die Preise*, and *schicken* at the end.' },
            { a: 'Muss man die Tour reservieren?', why: '*Muss* first, the infinitive *reservieren* at the end.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Ich ___ gern ein Zimmer mit Balkon.', o: ['hätte', 'hättest', 'hat'], why: 'With *ich*: *ich hätte gern*.' },
            { q: '___ Sie mir bitte helfen?', o: ['Könnten', 'Könntest', 'Kann'], why: 'With *Sie*: *Könnten Sie …?*' },
            { q: '___ es in der Nähe einen Parkplatz?', o: ['Gibt', 'Ist', 'Sind'], why: '*es gibt* + Akkusativ: *einen Parkplatz*.' },
            { q: '___ kostet ein Doppelzimmer?', o: ['Wie viel', 'Wie viele', 'Wann'], why: 'For a price: *Wie viel kostet …?* *Wie viele* is for things you can count.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the questions and answers.', pairs: [
            ['Haben Sie am Wochenende ein Zimmer frei?', 'Ja, wir haben noch ein Doppelzimmer.'],
            ['Was kostet die Stadtführung?', '15 Euro pro Person.'],
            ['Wann beginnt die Tour?', 'Um halb elf.'],
            ['Wo ist der Treffpunkt?', 'Vor dem Rathaus.'],
            ['Ist das Frühstück inklusive?', 'Nein, es kostet 12 Euro extra.'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the email to a tour company.', items: [
            { q: 'Sehr ___ Damen und Herren,', a: ['geehrte'], why: 'To a company: *Sehr geehrte Damen und Herren*.' },
            { q: 'ich ___ am Samstag an der Stadtführung teilnehmen. (möchten)', a: ['möchte', 'moechte'], why: '*ich möchte*, and the infinitive *teilnehmen* at the end.' },
            { q: '___ Sie mir sagen, wann die Tour beginnt? (können, polite)', a: ['Könnten', 'Koennten'], why: 'A polite request: *Könnten Sie …?*' },
            { q: 'Mit freundlichen ___', a: ['Grüßen', 'Gruessen', 'Grüssen'], why: 'The usual formal ending: *Mit freundlichen Grüßen*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: a booking confirmation',
      about: 'Read a booking confirmation and find the important details.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'After you book, the hotel sends a confirmation: *die Buchungsbestätigung*. Check the dates, the price and the rules for cancelling.' },
          { t: 'reading', title: 'Buchungsbestätigung', md: '**Hotel am Marktplatz**\n\nSehr geehrter Herr Okoye,\n\nvielen Dank für Ihre Buchung. Hier sind Ihre Daten:\n\nAnreise: Freitag, 11. Juni 2027, ab 15 Uhr\nAbreise: Sonntag, 13. Juni 2027, bis 11 Uhr\nZimmer: 1 Doppelzimmer für 2 Erwachsene\nPreis: 2 Nächte × 110 € = 220 €, inklusive Frühstück\n\nSie bezahlen im Hotel, bar oder mit Karte. Eine Stornierung ist bis zum 7. Juni kostenlos. Danach kostet sie 50 % vom Preis.\n\nUnser Restaurant hat jeden Abend von 18 bis 22 Uhr geöffnet. Fahrräder können Sie an der Rezeption leihen.\n\nWir freuen uns auf Ihren Besuch!\n\nMit freundlichen Grüßen\nIhr Team vom Hotel am Marktplatz' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the confirmation. True, false or not given?', items: [
            { q: 'Herr Okoye bleibt zwei Nächte im Hotel.', a: 't', why: 'From Friday to Sunday: *2 Nächte*.' },
            { q: 'Das Frühstück kostet extra.', a: 'f', why: 'The price is *inklusive Frühstück*.' },
            { q: 'Herr Okoye kann schon um 12 Uhr ins Zimmer.', a: 'f', why: 'He can arrive *ab 15 Uhr*, from 3 pm.' },
            { q: 'Er muss mit Karte bezahlen.', a: 'f', why: 'He can pay *bar oder mit Karte*: in cash or by card.' },
            { q: 'Das Hotel hat einen Parkplatz.', a: 'ng', why: 'The confirmation does not talk about parking.' },
            { q: 'Man kann im Hotel Fahrräder leihen.', a: 't', why: '*Fahrräder können Sie an der Rezeption leihen.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Herr Okoye storniert am 5. Juni. Das kostet ___.', o: ['nichts', '110 Euro', '220 Euro'], why: 'Until 7 June, cancelling is *kostenlos*.' },
            { q: 'Er storniert am 9. Juni. Das kostet ___.', o: ['110 Euro', 'nichts', '220 Euro'], why: 'After 7 June it costs 50 % of 220 €, so 110 €.' },
            { q: 'Am Sonntag muss er das Zimmer bis ___ verlassen.', o: ['11 Uhr', '15 Uhr', '22 Uhr'], why: '*Abreise … bis 11 Uhr*.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the word for the day you arrive and the word for the day you leave.', items: [
            { s: '[Anreise]: Freitag, 11. Juni. [Abreise]: Sonntag, 13. Juni.', why: '*die Anreise*: the day you arrive. *die Abreise*: the day you leave.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Ich komme am ___ Mai an. (2.)', o: ['zweiten', 'zweite', 'zweiter'], why: 'After *am*: *zweite* + *n* = *zweiten*.' },
      { q: '34,50 € sagt man so: ___', o: ['vierunddreißig Euro fünfzig', 'dreiundvierzig Euro fünfzig', 'vierunddreißig Euro fünfzehn'], why: 'The ones before the tens: *vier-und-dreißig*. Then the cents: *fünfzig*.' },
      { q: 'Ein Zimmer für eine Person ist ein ___.', o: ['Einzelzimmer', 'Doppelzimmer', 'Wohnzimmer'], why: '*Einzelzimmer*: a room for one person.' },
      { q: 'Eine Buchung absagen heißt ___.', o: ['stornieren', 'reservieren', 'buchen'], why: '*stornieren*: to cancel a booking.' },
      { q: 'Anreise am 3. Juli, Abreise am 5. Juli. Das sind ___.', o: ['zwei Nächte', 'drei Nächte', 'fünf Nächte'], why: 'The nights from 3 to 4 July and from 4 to 5 July.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: '___ Sie ein Doppelzimmer frei? (haben)', a: ['Haben'], why: 'A yes/no question starts with the verb.' },
      { q: 'Ich ___ gern ein Zimmer mit Balkon. (haben, polite)', a: ['hätte', 'haette'], why: 'Polite: *ich hätte gern*.' },
      { q: 'Wir bleiben vom 3. bis zum ___ Juli. (6.)', a: ['sechsten'], why: '*sechs* + *-te* = *sechste*. After *zum*, add *-n*.' },
      { q: '___ ist der Treffpunkt? – Vor dem Rathaus.', a: ['Wo'], why: 'The answer is a place, so the question word is *wo*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
      { a: 'Wie viel kostet ein Einzelzimmer?', why: 'The question word *wie viel*, then the verb.' },
      { a: 'Könnten Sie mir eine Bestätigung schicken?', why: '*Könnten* first, *schicken* at the end.' },
    ] },
  ],
};
