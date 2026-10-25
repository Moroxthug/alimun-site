// German A2 for travel, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'At the station and airport',
  goal: 'Travel by train, bus and plane.',
  art: 'dog',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['train', 'airport', 'separable-verbs', 'indirect-questions', 'announcements'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Tickets, platforms and gates',
      about: 'Buy a ticket, find your train or gate and talk about delays.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'dialogue', title: 'Am Fahrkartenschalter', lines: [
            { who: 'Tomasz', s: 'Guten Tag. Eine Fahrkarte nach Köln, bitte.' },
            { who: 'Mitarbeiterin', s: 'Einfach oder hin und zurück?' },
            { who: 'Tomasz', s: 'Hin und zurück. Ich fahre heute und komme am Sonntag zurück.' },
            { who: 'Mitarbeiterin', s: 'Das kostet 89 Euro. Möchten Sie einen Sitzplatz reservieren?' },
            { who: 'Tomasz', s: 'Ja, gern. Muss ich umsteigen?' },
            { who: 'Mitarbeiterin', s: 'Ja, in Hannover. Der Zug fährt um 10:12 Uhr von Gleis 4 ab.' },
            { who: 'Tomasz', s: 'Und wann komme ich in Köln an?' },
            { who: 'Mitarbeiterin', s: 'Um 14:35 Uhr. Gute Reise!' },
          ] },
          { t: 'text', md: 'Many travel verbs are **separable**: *abfahren*, *ankommen*, *umsteigen*, *einchecken*. In a main clause, the prefix goes to the **end**: *Der Zug fährt um 10:12 Uhr ab.*' },
        ],
        [
          { t: 'table', caption: 'At the station and at the airport', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['die Fahrkarte', 'ticket for a train or bus'],
            ['einfach / hin und zurück', 'one way / return'],
            ['das Gleis', 'platform'],
            ['umsteigen', 'to change trains'],
            ['die Verspätung', 'delay'],
            ['der Flug', 'flight'],
            ['die Bordkarte', 'boarding pass'],
            ['das Handgepäck', 'hand luggage'],
            ['den Koffer aufgeben', 'to check in your suitcase'],
          ] },
          { t: 'examples', items: [
            { s: 'Der Zug hat **20 Minuten Verspätung**.', n: 'The train is 20 minutes late.' },
            { s: 'Ich **steige** in Hannover **um**.', n: '*umsteigen*: the prefix *um* goes to the end.' },
            { s: 'Das Boarding beginnt um 9:40 Uhr an **Gate B12**.', n: 'At the airport, people also say *Gate* and *Boarding*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Germany you can buy train tickets at the ticket office, at a machine or online. On many local trains you cannot buy a ticket on board, so buy it before you get on.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the word and the sentence.', pairs: [
            ['die Bordkarte', 'Die brauche ich am Gate.'],
            ['das Gleis', 'Hier hält der Zug.'],
            ['die Verspätung', 'Der Zug kommt später.'],
            ['umsteigen', 'in einen anderen Zug steigen'],
            ['das Handgepäck', 'Diese Tasche nehme ich mit ins Flugzeug.'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Sie fahren am Freitag nach Köln und am Sonntag zurück. Sie sagen: „Eine Fahrkarte nach Köln, ___.“', o: ['hin und zurück', 'einfach', 'umsteigen'], why: 'You come back, so you need a return ticket: *hin und zurück*.' },
            { q: 'Der Zug fährt um 10:12 Uhr ___.', o: ['ab', 'an', 'um'], why: 'The train leaves: *abfahren*, so *fährt … ab*.' },
            { q: 'Wann kommt der Flug in Wien ___?', o: ['an', 'ab', 'um'], why: 'To arrive: *ankommen*, so *kommt … an*.' },
            { q: 'Muss ich in Hannover ___?', o: ['umsteigen', 'umgestiegen', 'steige um'], why: 'After *muss*, the infinitive goes to the end: *umsteigen*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the right form of the verb.', items: [
            { q: 'Der Zug ___ um 8:05 Uhr ab. (abfahren)', a: ['fährt', 'faehrt'], why: '*er fährt … ab*: *a* becomes *ä*, and *ab* goes to the end.' },
            { q: 'Wir ___ um 14 Uhr in Köln an. (ankommen)', a: ['kommen'], why: '*wir kommen … an*: the prefix *an* goes to the end.' },
            { q: 'Ich ___ in Frankfurt um. (umsteigen)', a: ['steige'], why: '*ich steige … um*: the prefix *um* goes to the end.' },
            { q: 'Der Zug kommt 15 Minuten zu spät. Er hat 15 Minuten ___.', a: ['Verspätung'], why: 'A train that is late *hat Verspätung*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Asking for help and reading messages',
      about: 'Ask people for help and understand short written messages about your train or flight.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'To ask a stranger for help, start with *Entschuldigung* and use *Sie*. A question that starts with *Wissen Sie, …* or *Können Sie mir sagen, …* is very polite. In the second part, the verb goes to the **end**.' },
          { t: 'examples', items: [
            { s: '**Entschuldigung**, wo ist Gleis 7?', n: 'A short, direct question.' },
            { s: 'Wissen Sie, wo das Gate B12 **ist**?', n: 'After *Wissen Sie, wo …*, the verb *ist* goes to the end.' },
            { s: 'Können Sie mir sagen, wann der Bus nach Bremen **fährt**?', n: 'The verb *fährt* goes to the end.' },
            { s: '**Fährt** dieser Zug nach Leipzig?', n: 'A yes/no question: the verb comes first.' },
            { s: 'Wo kann ich eine Fahrkarte **kaufen**?', n: 'The infinitive *kaufen* goes to the end.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'Am Bahnsteig', lines: [
            { who: 'Aiko', s: 'Entschuldigung, können Sie mir helfen? Fährt dieser Zug nach Leipzig?' },
            { who: 'Mann', s: 'Nein, der fährt nach Dresden. Der Zug nach Leipzig fährt heute von Gleis 9.' },
            { who: 'Aiko', s: 'Oh, danke! Wissen Sie, wo Gleis 9 ist?' },
            { who: 'Mann', s: 'Gehen Sie die Treppe hinunter und dann nach rechts.' },
            { who: 'Aiko', s: 'Vielen Dank!' },
            { who: 'Mann', s: 'Gern geschehen. Gute Reise!' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
            { a: 'Fährt dieser Zug nach Leipzig?', why: 'A yes/no question: the verb *fährt* comes first.' },
            { a: 'Wissen Sie, wo Gleis 9 ist?', why: 'After *wo*, the verb *ist* goes to the end.' },
            { a: 'Wo kann ich eine Fahrkarte kaufen?', why: '*kann* in second place, the infinitive *kaufen* at the end.' },
            { a: 'Können Sie mir sagen, wann der Bus fährt?', why: 'After *wann*, the verb *fährt* goes to the end.' },
          ] },
        ],
        [
          { t: 'text', md: 'On screens at the station or airport and in travel apps, you often read short messages. They use few words and often no verb.' },
          { t: 'table', caption: 'Short messages', explain: ['head', 'col1'], quiz: true, head: ['Message', 'Meaning'], rows: [
            ['ca. 10 Minuten später', 'about 10 minutes late'],
            ['Der Zug fällt aus.', 'The train does not run.'],
            ['Gleiswechsel', 'The train leaves from a different platform.'],
            ['Ersatzverkehr mit Bussen', 'Buses run instead of the train.'],
            ['Gate geschlossen', 'The gate is closed. You cannot get on the plane any more.'],
            ['Flug annulliert', 'The flight is cancelled.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What does the message mean?', items: [
            { q: 'Zug nach Bremen: ca. 25 Minuten später', o: ['Der Zug kommt etwa 25 Minuten zu spät.', 'Der Zug fährt 25 Minuten früher.', 'Der Zug fällt aus.'], why: '*ca.* means about. *später*: later.' },
            { q: 'Der Zug nach Leipzig fällt heute aus.', o: ['Der Zug fährt heute nicht.', 'Der Zug fährt heute später.', 'Der Zug fährt heute von einem anderen Gleis.'], why: '*ausfallen*: the train does not run.' },
            { q: 'Gleiswechsel: Abfahrt heute von Gleis 12', o: ['Der Zug fährt heute von Gleis 12.', 'Der Zug hält heute nicht.', 'Man muss heute umsteigen.'], why: '*Gleiswechsel*: a different platform.' },
            { q: 'Flug 315 nach Lissabon: Gate geschlossen', o: ['Man kann nicht mehr ins Flugzeug.', 'Das Boarding beginnt bald.', 'Der Flug hat Verspätung.'], why: 'When the gate is closed, you cannot get on the plane any more.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the questions.', items: [
            { q: 'Wissen Sie, wo der Ausgang ___? (sein)', a: ['ist'], why: 'After *wo*, the verb goes to the end: *ist*.' },
            { q: 'Können Sie mir sagen, wann der Zug ___? (ankommen)', a: ['ankommt'], why: 'At the end of the sentence, the separable verb is one word again: *ankommt*.' },
            { q: '___ dieser Bus zum Flughafen? (fahren)', a: ['Fährt', 'Faehrt'], why: 'A yes/no question starts with the verb: *Fährt …?*' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: a departure board and a notice',
      about: 'Read the departure board and a notice about building work.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'At the station, a board shows the next trains: *die Abfahrt* (departures). The last column gives extra information: *der Hinweis*.\n\n*Halt in Fulda entfällt* means: the train does not stop in Fulda.' },
          { t: 'table', caption: 'Abfahrt', head: ['Zeit', 'Nach', 'Gleis', 'Hinweis'], rows: [
            ['9:05', 'Hamburg', '3', 'ca. 15 Minuten später'],
            ['9:12', 'München', '7', ''],
            ['9:20', 'Leipzig', '12', 'Gleiswechsel, heute Gleis 9'],
            ['9:34', 'Köln', '5', 'fällt heute aus'],
            ['9:41', 'Frankfurt', '2', 'Halt in Fulda entfällt'],
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Read the board. True or false?', items: [
            { q: 'Der Zug nach Hamburg fährt pünktlich um 9:05 Uhr ab.', a: 'f', why: 'It is about 15 minutes late: *ca. 15 Minuten später*.' },
            { q: 'Der Zug nach Leipzig fährt heute von Gleis 12.', a: 'f', why: '*Gleiswechsel, heute Gleis 9*.' },
            { q: 'Heute gibt es um 9:34 Uhr keinen Zug nach Köln.', a: 't', why: 'The train to Cologne *fällt heute aus*.' },
            { q: 'Der Zug nach Frankfurt hält heute nicht in Fulda.', a: 't', why: '*Halt in Fulda entfällt*.' },
            { q: 'Der Zug nach München fährt von Gleis 7.', a: 't', why: 'The board shows Gleis 7 and no change.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Hinweis', md: '**Bauarbeiten zwischen Hannover und Celle**\n\nLiebe Fahrgäste,\n\nvom 4. bis zum 18. Mai bauen wir zwischen Hannover und Celle. In dieser Zeit fahren keine Regionalzüge zwischen den beiden Städten. Bitte nehmen Sie die Busse. Sie fahren vor dem Bahnhof ab, beim Taxistand.\n\nDie Busse fahren jede halbe Stunde. Die Fahrt dauert etwa 30 Minuten länger als mit dem Zug. Ihre Fahrkarte gilt auch im Bus. Fahrräder können wir im Bus leider nicht mitnehmen.\n\nWir bitten um Ihr Verständnis und wünschen Ihnen eine gute Fahrt.' },
          { t: 'tip', art: 'owl', md: '*Wir bitten um Ihr Verständnis* is a polite sentence you often read in notices. It means: we are sorry, and we hope you understand.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the notice. True, false or not given?', items: [
            { q: 'Die Bauarbeiten dauern zwei Wochen.', a: 't', why: 'From 4 to 18 May: two weeks.' },
            { q: 'In dieser Zeit fahren zwischen Hannover und Celle keine Regionalzüge.', a: 't', why: '*In dieser Zeit fahren keine Regionalzüge.*' },
            { q: 'Für den Bus braucht man eine neue Fahrkarte.', a: 'f', why: '*Ihre Fahrkarte gilt auch im Bus*: your ticket is valid on the bus.' },
            { q: 'Mit dem Bus dauert die Fahrt länger.', a: 't', why: 'About 30 minutes longer than by train.' },
            { q: 'Man kann sein Fahrrad im Bus mitnehmen.', a: 'f', why: '*Fahrräder können wir im Bus leider nicht mitnehmen.*' },
            { q: 'Die Busse haben WLAN.', a: 'ng', why: 'The notice does not say anything about wifi.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Wo fahren die Busse ab?', o: ['vor dem Bahnhof, beim Taxistand', 'an Gleis 1', 'am Flughafen'], why: '*Sie fahren vor dem Bahnhof ab, beim Taxistand.*' },
            { q: 'Wie oft fährt ein Bus?', o: ['alle 30 Minuten', 'jede Stunde', 'zweimal am Tag'], why: '*jede halbe Stunde*: every 30 minutes.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Der Zug fährt um 7:50 Uhr ___.', o: ['ab', 'an', 'um'], why: '*abfahren*: to leave.' },
      { q: 'Am Gate brauche ich meine ___.', o: ['Bordkarte', 'Fahrkarte', 'Verspätung'], why: 'At the airport gate you show your boarding pass, *die Bordkarte*.' },
      { q: 'Der Zug fällt aus. Das heißt: ___', o: ['Der Zug fährt nicht.', 'Der Zug ist zu früh.', 'Der Zug ist voll.'], why: '*ausfallen*: the train does not run.' },
      { q: 'Ich fahre am Montag hin und am Freitag zurück. Ich kaufe eine Fahrkarte ___.', o: ['hin und zurück', 'einfach', 'mit Verspätung'], why: 'You come back, so you need a return ticket.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Wir ___ um 16 Uhr in Wien an. (ankommen)', a: ['kommen'], why: '*wir kommen … an*.' },
      { q: 'Wissen Sie, wo Gleis 3 ___? (sein)', a: ['ist'], why: 'After *wo*, the verb goes to the end.' },
      { q: 'Ich ___ in Kassel um. (umsteigen)', a: ['steige'], why: '*ich steige … um*.' },
      { q: 'Der Zug kommt 10 Minuten zu spät. Er hat 10 Minuten ___.', a: ['Verspätung'], why: 'A late train *hat Verspätung*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
      { a: 'Fährt dieser Bus zum Flughafen?', why: 'A yes/no question: the verb comes first.' },
      { a: 'Können Sie mir sagen, wann der Zug abfährt?', why: 'After *wann*, the verb goes to the end as one word: *abfährt*.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: '„Gleiswechsel“ heißt: Der Zug fährt von einem anderen Gleis.', a: 't', why: '*Gleiswechsel*: a change of platform.' },
      { q: '„Ersatzverkehr mit Bussen“ heißt: Der Zug fährt und die Busse fahren auch.', a: 'f', why: 'The buses run **instead of** the train.' },
    ] },
  ],
};
