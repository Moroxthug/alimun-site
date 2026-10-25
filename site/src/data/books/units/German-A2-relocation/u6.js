// German A2 for moving abroad, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Neighbours and new friends',
  goal: 'Greet neighbours, invite people and make small talk.',
  art: 'mug',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['greetings', 'du-sie', 'neighbours', 'invitations', 'small-talk'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'Hello, I am new here',
      about: 'Greet people, introduce yourself and choose between du and Sie.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'In Germany, people usually greet neighbours in the stairs or in the street, even if they do not know them well. The greeting depends on the time of day and on the region.' },
          { t: 'table', caption: 'Greetings', explain: ['head', 'col1'], head: ['Greeting', 'When or where'], rows: [
            ['Guten Morgen!', 'in the morning'],
            ['Guten Tag!', 'during the day, polite'],
            ['Guten Abend!', 'in the evening'],
            ['Hallo!', 'informal, at any time'],
            ['Moin!', 'in northern Germany, all day'],
            ['Grüß Gott! / Servus!', 'in southern Germany and Austria'],
            ['Grüezi!', 'in Switzerland, polite'],
          ] },
          { t: 'tip', art: 'owl', md: 'To say goodbye: *Auf Wiedersehen* (polite), *Tschüss* (informal) or *Schönen Tag noch!* *Gute Nacht* is only for late in the evening, before you go to bed.' },
        ],
        [
          { t: 'text', md: 'Use **Sie** with adults you do not know, at offices and usually with neighbours at first. Use **du** with friends, family and children. In many workplaces colleagues say *du*, but not in all. If you are not sure, start with *Sie*. The other person may offer *du*: *Wir können uns gern duzen.*' },
          { t: 'dialogue', title: 'Im Treppenhaus', lines: [
            { who: 'Frau Hoffmann', s: 'Guten Tag! Sind Sie neu hier?' },
            { who: 'Rania', s: 'Ja, guten Tag. Ich bin Rania Saleh. Ich wohne seit einer Woche im zweiten Stock.' },
            { who: 'Frau Hoffmann', s: 'Herzlich willkommen! Ich bin Gisela Hoffmann. Ich wohne direkt unter Ihnen.' },
            { who: 'Rania', s: 'Freut mich. Ich hoffe, wir sind nicht zu laut. Wir haben zwei kleine Kinder.' },
            { who: 'Frau Hoffmann', s: 'Ach, das ist kein Problem. Wenn Sie etwas brauchen, klingeln Sie einfach.' },
            { who: 'Rania', s: 'Vielen Dank, das ist sehr nett.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
            { q: 'Sie treffen Ihre ältere Nachbarin, Frau Hoffmann, im Treppenhaus.', o: ['Guten Tag, Frau Hoffmann. Wie geht es Ihnen?', 'Hallo Gisela, wie geht’s dir?', 'Hey, alles klar bei dir?'], why: 'A neighbour you do not know well: *Sie*, *Frau* + surname, *Ihnen*.' },
            { q: 'Ein neuer Kollege, 25 Jahre alt, sagt: „Hi, ich bin Leon.“ Sie antworten: ___', o: ['Hallo Leon, ich bin Sam.', 'Guten Tag, Herr Leon.', 'Sehr geehrter Leon,'], why: 'He uses his first name and *Hi*, so you answer the same way.' },
            { q: 'Sie sind in Hamburg. Ein Nachbar sagt am Abend „Moin!“. Sie antworten: ___', o: ['Moin!', 'Grüezi!', 'Gute Nacht!'], why: '*Moin* is used in the north all day. *Grüezi* is Swiss.' },
            { q: 'Ihre Nachbarin sagt: „Wir können uns gern duzen.“ Sie antworten: ___', o: ['Gern! Ich bin Rania.', 'Gute Besserung!', 'Herzlich willkommen!'], why: 'You accept the *du* and say your first name.' },
          ] },
          { t: 'ex', kind: 'match', h: 'When or where do people say it?', pairs: [
            ['Guten Morgen!', 'am Morgen'],
            ['Grüß Gott!', 'in Bayern und Österreich'],
            ['Grüezi!', 'in der Schweiz'],
            ['Moin!', 'in Norddeutschland'],
            ['Gute Nacht!', 'vor dem Schlafen'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'du or Sie? Complete the questions.', items: [
            { q: 'Woher ___ du? (kommen)', a: ['kommst'], why: '*du kommst*: ending *-st*.' },
            { q: 'Wie geht es ___? (Sie)', a: ['Ihnen'], why: 'Polite: *Wie geht es Ihnen?*' },
            { q: 'Wie geht es ___? (du)', a: ['dir'], why: 'Informal: *Wie geht es dir?*' },
            { q: 'Wohnen ___ auch hier im Haus? (polite)', a: ['Sie'], why: 'The polite *Sie* always has a capital *S*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
            { a: 'Seit wann wohnen Sie in diesem Haus?', why: '*Seit wann* first, then the verb *wohnen* and *Sie*.' },
            { a: 'Wollen wir uns duzen?', why: 'A suggestion: *Wollen wir …?* with *duzen* at the end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Inviting and replying',
      about: 'Invite someone, say yes, or say no politely.',
      art: 'pizza',
      spreads: [
        [
          { t: 'text', md: 'To invite a friend, ask *Hast du Lust …?* with *auf* + a noun, or with a comma and *zu* + infinitive at the end. When you say no, give a short reason. You can also suggest another day: *Vielleicht nächste Woche?*' },
          { t: 'table', caption: 'Inviting and replying', explain: ['head'], head: ['Invitation', 'Yes', 'No'], rows: [
            ['Hast du Lust auf einen Kaffee?', 'Ja, gern!', 'Leider kann ich nicht.'],
            ['Hast du am Samstag Zeit?', 'Ja, da habe ich Zeit.', 'Nein, am Samstag arbeite ich.'],
            ['Hast du Lust, mit uns zu grillen?', 'Super, ich komme gern!', 'Schade, da bin ich nicht da.'],
            ['Möchten Sie morgen zum Kaffee kommen?', 'Sehr gern, vielen Dank!', 'Das ist sehr nett, aber leider habe ich keine Zeit.'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'Nachrichten', lines: [
            { who: 'Jonas', s: 'Hallo Rania! Wir grillen am Samstag im Hof. Hast du Lust zu kommen? Deine Familie natürlich auch!' },
            { who: 'Rania', s: 'Hallo Jonas! Danke, sehr gern. Um wie viel Uhr?' },
            { who: 'Jonas', s: 'Ab 17 Uhr. Jeder bringt etwas zu essen mit.' },
            { who: 'Rania', s: 'Okay, ich mache einen Salat. Soll ich auch Getränke mitbringen?' },
            { who: 'Jonas', s: 'Nicht nötig, Getränke haben wir genug.' },
            { who: 'Rania', s: 'Super! Mein Mann muss leider arbeiten, aber ich komme mit den Kindern.' },
            { who: 'Jonas', s: 'Prima, bis Samstag!' },
          ] },
          { t: 'tip', art: 'owl', md: 'Guests often bring something small: flowers, a drink, or a salad for a barbecue. For a dinner, people usually come on time. For a party, coming a little later is fine.' },
          { t: 'ex', kind: 'tf', h: 'Think about the messages. True or false?', items: [
            { q: 'Die Grillparty ist am Samstag.', a: 't', why: '*Wir grillen am Samstag im Hof.*' },
            { q: 'Rania soll Getränke mitbringen.', a: 'f', why: '*Nicht nötig*: they have enough drinks.' },
            { q: 'Ranias Mann kommt auch.', a: 'f', why: '*Mein Mann muss leider arbeiten.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
            { q: 'Hast du Lust, am Sonntag spazieren zu gehen? (Sie haben keine Zeit.)', o: ['Leider kann ich nicht, ich besuche meine Eltern.', 'Ja, gern, ich komme mit!', 'Danke, gleichfalls.'], why: 'You say no with *leider* and give a reason.' },
            { q: 'Möchten Sie am Freitag zum Abendessen kommen? (Sie haben Zeit.)', o: ['Sehr gern, vielen Dank!', 'Leider habe ich keine Zeit.', 'Gute Besserung!'], why: 'You say yes politely and thank the person.' },
            { q: 'Kommst du mit ins Kino? (Sie wollen mitkommen.)', o: ['Klar, wann denn?', 'Nein, das geht leider nicht.', 'Herzlichen Glückwunsch!'], why: 'You say yes and ask about the time.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the invitations and replies.', items: [
            { q: 'Hast du ___ auf einen Kaffee?', a: ['Lust'], why: '*Lust haben auf* + Akkusativ: to feel like something.' },
            { q: 'Hast du Lust, mit uns ___ grillen?', a: ['zu'], why: 'After the comma: *zu* + infinitive at the end.' },
            { q: '___ kann ich nicht, ich muss arbeiten.', a: ['Leider'], why: '*leider*: unfortunately. It makes a no polite.' },
            { q: 'Um wie viel ___ fängt die Party an?', a: ['Uhr'], why: '*Um wie viel Uhr?* asks for the time.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Hast du Lust auf einen Kaffee?', why: 'The verb *hast* first, then *du*, then *Lust auf* + Akkusativ.' },
            { a: 'Soll ich etwas mitbringen?', why: '*soll* first, *mitbringen* at the end.' },
            { a: 'Kommst du mit ins Kino?', why: '*mitkommen* is separable: *mit* goes after *du*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A note and an invitation',
      about: 'Read a note from a neighbour and an invitation to a party.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'In Germany, neighbours often take in parcels for each other when someone is not at home. Then they leave a short note.' },
          { t: 'reading', title: 'Eine Nachricht von Frau Hoffmann', md: 'Liebe Frau Saleh,\n\nheute Vormittag war der Paketbote da. Sie waren nicht zu Hause, deshalb habe ich ein Paket für Sie angenommen. Es ist ziemlich groß und schwer. Sie können es heute ab 18 Uhr bei mir abholen. Morgen bin ich den ganzen Tag bei meiner Tochter, aber am Donnerstag bin ich wieder da.\n\nÜbrigens: Am Freitag kommt der Hausmeister und repariert die Haustür. Dann ist die Tür von 9 bis 12 Uhr offen. Bitte lassen Sie keine Fahrräder und keinen Kinderwagen im Flur stehen, er braucht dort Platz.\n\nHerzliche Grüße\nGisela Hoffmann, 1. Stock' },
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the note. True, false or not given?', items: [
            { q: 'Frau Hoffmann hat ein Paket für Frau Saleh.', a: 't', why: '*… habe ich ein Paket für Sie angenommen.*' },
            { q: 'Frau Saleh kann das Paket morgen abholen.', a: 'f', why: 'Tomorrow Frau Hoffmann is at her daughter’s. Today from 6 pm or on Thursday.' },
            { q: 'Das Paket ist klein und leicht.', a: 'f', why: '*ziemlich groß und schwer*: big and heavy.' },
            { q: 'Am Freitagvormittag ist die Haustür offen.', a: 't', why: '*von 9 bis 12 Uhr offen*.' },
            { q: 'Der Hausmeister kommt jeden Freitag.', a: 'ng', why: 'The note only talks about this Friday.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Einladung zur Einweihungsparty', md: 'Hallo zusammen,\n\nwir haben es geschafft: Die Kisten sind ausgepackt, die Lampen hängen und die Küche funktioniert! Darum möchten wir mit euch unsere neue Wohnung feiern.\n\nDie Party ist am Samstag, 14. November, ab 19 Uhr im Kastanienweg 5, 3. Stock links. Bitte bei Brandt klingeln.\n\nGetränke und Pizza haben wir. Wenn ihr wollt, bringt einen Salat oder einen Nachtisch mit. Kinder sind herzlich willkommen, für sie gibt es ein Zimmer mit Spielen.\n\nWir haben auch unsere Nachbarn eingeladen. Ab 22 Uhr machen wir die Musik leiser.\n\nBitte sagt uns bis Mittwoch, ob ihr kommt.\n\nWir freuen uns auf euch!\nMalik und Sarah' },
          { t: 'ex', kind: 'tf', h: 'Read the invitation. True or false?', items: [
            { q: 'Die Party ist am Samstagabend.', a: 't', why: 'Saturday from 7 pm.' },
            { q: 'Die Gäste sollen Getränke mitbringen.', a: 'f', why: '*Getränke und Pizza haben wir.* A salad or a dessert is welcome.' },
            { q: 'Kinder dürfen auch kommen.', a: 't', why: '*Kinder sind herzlich willkommen.*' },
            { q: 'Die Gäste sollen bis Mittwoch antworten.', a: 't', why: '*Bitte sagt uns bis Mittwoch, ob ihr kommt.*' },
          ] },
        ],
        [
          { t: 'tip', art: 'owl', md: 'Many buildings have house rules (*Hausordnung*). Often there is a quiet time at night, usually from 22 Uhr. That is why Malik and Sarah turn the music down at 10 pm.' },
          { t: 'ex', kind: 'gap', h: 'Write a reply to Malik and Sarah.', items: [
            { q: 'Vielen Dank für die ___!', a: ['Einladung'], why: '*einladen* → *die Einladung*: the invitation.' },
            { q: 'Ich komme sehr ___.', a: ['gern', 'gerne'], why: '*gern kommen*: to be happy to come.' },
            { q: '___ ich einen Nachtisch mitbringen? (sollen)', a: ['Soll'], why: 'A question: *soll* first. *ich soll*: no ending.' },
            { q: 'Mein Freund ___ leider nicht kommen. (können)', a: ['kann'], why: '*er kann*: no ending, like *ich kann*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Sie sind in Wien und gehen in eine Bäckerei. Sie sagen: ___', o: ['Grüß Gott!', 'Moin!', 'Grüezi!'], why: '*Grüß Gott* is used in Austria and southern Germany.' },
      { q: 'Ihr neuer Nachbar ist etwa 70 Jahre alt. Sie fragen: ___', o: ['Wie geht es Ihnen?', 'Wie geht’s dir?', 'Alles klar bei dir?'], why: 'An older neighbour you do not know well: *Sie*.' },
      { q: 'Hast du Lust auf ein Eis? (Sie wollen nicht.)', o: ['Danke, heute leider nicht.', 'Ja, sehr gern!', 'Herzlich willkommen!'], why: 'A polite no with *leider*.' },
      { q: 'Die Nachbarin hat ein Paket für Sie ___.', o: ['angenommen', 'angerufen', 'angefangen'], why: '*ein Paket annehmen*: to take in a parcel.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Woher ___ Sie? (kommen)', a: ['kommen'], why: '*Sie kommen*: the same form as the infinitive.' },
      { q: 'Hast du Lust, ins Kino ___ gehen?', a: ['zu'], why: '*zu* + infinitive at the end.' },
      { q: 'Vielen Dank für die ___! (einladen, noun)', a: ['Einladung'], why: '*die Einladung*.' },
      { q: 'Wir können uns gern ___. (du sagen)', a: ['duzen'], why: '*duzen*: to say *du* to each other.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Wollen wir uns duzen?', why: '*Wollen wir* first, *duzen* at the end.' },
      { a: 'Soll ich etwas mitbringen?', why: '*soll* first, *mitbringen* at the end.' },
      { a: 'Seit wann wohnen Sie hier?', why: '*Seit wann* + verb + *Sie*.' },
    ] },
  ],
};
