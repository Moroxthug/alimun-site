// German A2 for travel, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'At the hotel',
  goal: 'Check in, ask for things and solve small problems.',
  art: 'teacup',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['hotel', 'time-questions', 'complaints', 'polite-requests', 'kein'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Checking in and out',
      about: 'Check in, check out and ask about breakfast and wifi.',
      art: 'mug',
      spreads: [
        [
          { t: 'dialogue', title: 'An der Rezeption', lines: [
            { who: 'Rezeption', s: 'Guten Abend! Herzlich willkommen.' },
            { who: 'Herr Ruiz', s: 'Guten Abend. Ich habe ein Zimmer reserviert. Mein Name ist Ruiz.' },
            { who: 'Rezeption', s: 'Ja, Herr Ruiz, ein Einzelzimmer für drei Nächte. Darf ich bitte Ihren Ausweis sehen?' },
            { who: 'Herr Ruiz', s: 'Hier, bitte. Ab wann gibt es Frühstück?' },
            { who: 'Rezeption', s: 'Von halb sieben bis zehn Uhr, im Erdgeschoss neben der Bar.' },
            { who: 'Herr Ruiz', s: 'Gibt es im Zimmer WLAN?' },
            { who: 'Rezeption', s: 'Ja, das Passwort steht auf dieser Karte. Hier ist Ihre Schlüsselkarte. Sie haben Zimmer 214 im zweiten Stock.' },
            { who: 'Herr Ruiz', s: 'Danke. Und bis wann muss ich am Abreisetag auschecken?' },
            { who: 'Rezeption', s: 'Bis elf Uhr. Ihr Gepäck können Sie danach gern hier lassen.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Hotels in Germany often ask for your ID card or passport when you check in. Breakfast is often a buffet: *das Frühstücksbuffet*.' },
        ],
        [
          { t: 'text', md: 'Questions about time: *Ab wann …?* asks when something starts. *Bis wann …?* asks when something ends.\n\nTo say what you did, use the **Perfekt**: *Ich habe ein Zimmer reserviert.* Verbs that end in *-ieren* make the participle without *ge-*.' },
          { t: 'examples', items: [
            { s: '**Ab wann** kann ich einchecken? – Ab 15 Uhr.', n: 'When does it start?' },
            { s: '**Bis wann** gibt es Frühstück? – Bis 10 Uhr.', n: 'When does it end?' },
            { s: 'Ich **habe** ein Zimmer **reserviert**.', n: '*reservieren → reserviert*, without *ge-*.' },
            { s: '**Kann** ich mit Karte **bezahlen**?', n: 'A yes/no question with *können*. *bezahlen* goes to the end.' },
            { s: 'Ich **checke** morgen um 9 Uhr **aus**.', n: '*auschecken* is separable: *aus* goes to the end.' },
          ] },
        ],
        [
          { t: 'table', caption: 'In the hotel', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['die Rezeption', 'reception'],
            ['die Schlüsselkarte', 'key card'],
            ['das Erdgeschoss', 'ground floor'],
            ['der erste Stock', 'first floor'],
            ['der Aufzug', 'lift'],
            ['das WLAN', 'wifi'],
            ['einchecken / auschecken', 'to check in / to check out'],
          ] },
          { t: 'ex', kind: 'match', h: 'Match the questions and answers.', pairs: [
            ['Ab wann gibt es Frühstück?', 'Ab halb sieben.'],
            ['Bis wann muss ich auschecken?', 'Bis elf Uhr.'],
            ['Wie ist das WLAN-Passwort?', 'Es steht auf Ihrer Karte.'],
            ['Wo ist der Aufzug?', 'Gleich hier links.'],
            ['Kann ich mit Karte bezahlen?', 'Ja, natürlich.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: '___ wann muss ich auschecken? – Bis 11 Uhr.', o: ['Bis', 'Ab', 'Seit'], why: 'The answer is *bis 11 Uhr*, so the question is *Bis wann …?*' },
            { q: 'Ich ___ ein Zimmer reserviert.', o: ['habe', 'bin', 'werde'], why: 'Perfekt: *haben* + *reserviert*.' },
            { q: 'Ihr Zimmer ist im zweiten ___.', o: ['Stock', 'Erdgeschoss', 'Aufzug'], why: '*im zweiten Stock*: on the second floor.' },
            { q: 'Darf ich bitte Ihren ___ sehen?', o: ['Ausweis', 'Frühstück', 'WLAN'], why: 'At check-in the hotel often asks to see your ID: *der Ausweis*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Ich ___ morgen früh aus. (auschecken)', a: ['checke'], why: '*ich checke … aus*: the prefix goes to the end.' },
            { q: 'Ich habe ein Zimmer ___. (reservieren)', a: ['reserviert'], why: 'Verbs with *-ieren*: the participle has no *ge-*.' },
            { q: '___ ich mit Karte bezahlen? (können)', a: ['Kann'], why: '*ich kann*. A yes/no question starts with the verb.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Small problems with the room',
      about: 'Say what is wrong and ask politely for help.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'To say what is wrong, use *funktioniert nicht*, *ist kaputt*, *geht nicht auf* or *es gibt kein …*. With **zu** + adjective, you say that something is too much for you: *zu laut*, *zu kalt*.' },
          { t: 'examples', items: [
            { s: 'Die Heizung **funktioniert nicht**.', n: 'For more than one thing: *Die Lampen funktionieren nicht.*' },
            { s: 'Die Dusche ist **kaputt**.', n: '*kaputt*: broken.' },
            { s: 'Das Fenster **geht nicht auf**.', n: '*aufgehen* is separable. It means: I cannot open the window.' },
            { s: 'Es gibt **kein** warmes Wasser.', n: '*es gibt* + Akkusativ: *das Wasser → kein Wasser*.' },
            { s: 'Das Zimmer ist **zu** laut.', n: '*zu laut*: so loud that it is a problem.' },
            { s: 'Im Bad **fehlt** ein Handtuch.', n: '*fehlen*: something is not there.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'Ein Anruf bei der Rezeption', lines: [
            { who: 'Frau Lindqvist', s: 'Hallo, hier ist Lindqvist, Zimmer 305. Entschuldigung, aber die Heizung funktioniert nicht. Es ist sehr kalt im Zimmer.' },
            { who: 'Rezeption', s: 'Oh, das tut mir leid. Ich schicke sofort jemanden.' },
            { who: 'Frau Lindqvist', s: 'Danke. Und im Bad fehlen Handtücher.' },
            { who: 'Rezeption', s: 'Wir bringen Ihnen gleich zwei Handtücher.' },
            { who: 'Frau Lindqvist', s: 'Noch eine Frage: Könnten Sie mich morgen um sechs Uhr wecken?' },
            { who: 'Rezeption', s: 'Natürlich. Brauchen Sie sonst noch etwas?' },
            { who: 'Frau Lindqvist', s: 'Nein, das ist alles. Vielen Dank!' },
          ] },
          { t: 'tip', art: 'owl', md: 'Be polite: start with *Entschuldigung* and ask with *Könnten Sie …?* or *Ich hätte gern …*. The hotel often answers *Das tut mir leid*: I am sorry.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Die Heizung ___ nicht.', o: ['funktioniert', 'funktionieren', 'funktionierst'], why: '*die Heizung* is one thing: *sie funktioniert*.' },
            { q: 'Es gibt ___ warmes Wasser.', o: ['kein', 'keine', 'nicht'], why: '*das Wasser*: *kein Wasser*. Use *kein* with a noun, not *nicht*.' },
            { q: 'Es gibt ___ Handtücher im Bad.', o: ['keine', 'kein', 'nicht'], why: 'Plural: *keine Handtücher*.' },
            { q: 'Ich kann nicht schlafen. Das Zimmer ist ___ laut.', o: ['zu', 'nicht', 'gern'], why: '*zu laut*: so loud that you cannot sleep.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the problem and the polite request.', pairs: [
            ['Die Heizung funktioniert nicht.', 'Könnten Sie sie bitte reparieren?'],
            ['Im Bad fehlt ein Handtuch.', 'Könnten Sie mir ein Handtuch bringen?'],
            ['Das Zimmer ist zu laut.', 'Ich hätte gern ein ruhiges Zimmer.'],
            ['Ich muss morgen sehr früh aufstehen.', 'Könnten Sie mich um fünf Uhr wecken?'],
            ['Das WLAN funktioniert nicht.', 'Könnten Sie mir das Passwort noch einmal geben?'],
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the requests.', items: [
            { a: 'Könnten Sie mich um sechs Uhr wecken?', why: '*Könnten* first, the pronoun *mich* early, and *wecken* at the end.' },
            { a: 'Könnten Sie mir zwei Handtücher bringen?', why: '*mir* before *zwei Handtücher*, and *bringen* at the end.' },
            { a: 'Kann ich ein anderes Zimmer bekommen?', why: '*Kann* first, the infinitive *bekommen* at the end.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Das Fenster geht nicht ___. (aufgehen)', a: ['auf'], why: '*aufgehen* is separable: *auf* goes to the end.' },
            { q: 'Im Bad ___ ein Handtuch. (fehlen)', a: ['fehlt'], why: '*ein Handtuch* is one thing: *es fehlt*.' },
            { q: 'Oh, das tut mir ___! Ich schicke sofort jemanden.', a: ['leid'], why: '*Das tut mir leid*: I am sorry.' },
            { q: '___ Sie mir bitte helfen? (können, polite)', a: ['Könnten', 'Koennten'], why: 'Polite: *Könnten Sie …?*' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: information for guests',
      about: 'Read the information in your hotel room.',
      art: 'croissant',
      spreads: [
        [
          { t: 'text', md: 'In many hotel rooms there is a page with information for guests: *die Gästeinformation*. Read this one.' },
          { t: 'reading', title: 'Informationen für unsere Gäste', md: '**Willkommen im Hotel Lindenhof!**\n\n**Frühstück:** Montag bis Freitag von 6:30 bis 10 Uhr, am Wochenende von 7:30 bis 11 Uhr. Das Frühstücksbuffet finden Sie im Erdgeschoss.\n\n**WLAN:** Das WLAN ist kostenlos. Das Passwort steht auf Ihrer Schlüsselkarte.\n\n**Abreise:** Bitte checken Sie bis 11 Uhr aus. Ihr Gepäck können Sie danach an der Rezeption lassen.\n\n**Handtücher:** Möchten Sie neue Handtücher? Dann legen Sie die alten Handtücher bitte auf den Boden im Bad. Handtücher am Haken bedeuten: Ich benutze sie weiter.\n\n**Ruhe:** Von 22 bis 7 Uhr ist Nachtruhe. Bitte seien Sie in dieser Zeit leise.\n\n**Parken:** Unsere Garage kostet 15 Euro pro Tag. Bitte melden Sie sich an der Rezeption.\n\nBei Fragen sind wir 24 Stunden für Sie da. Wählen Sie die 9.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the information. True, false or not given?', items: [
            { q: 'Am Samstag gibt es bis 11 Uhr Frühstück.', a: 't', why: '*am Wochenende von 7:30 bis 11 Uhr*.' },
            { q: 'Das WLAN kostet extra.', a: 'f', why: '*Das WLAN ist kostenlos.*' },
            { q: 'Nach dem Auschecken kann man das Gepäck im Hotel lassen.', a: 't', why: '*Ihr Gepäck können Sie danach an der Rezeption lassen.*' },
            { q: 'Wer neue Handtücher möchte, legt die alten Handtücher auf den Boden.', a: 't', why: '*legen Sie die alten Handtücher bitte auf den Boden*.' },
            { q: 'Um 23 Uhr darf man im Zimmer laut Musik hören.', a: 'f', why: 'From 22 to 7 is *Nachtruhe*: guests should be quiet.' },
            { q: 'Das Hotel hat ein Schwimmbad.', a: 'ng', why: 'The information does not talk about a swimming pool.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Sie haben in der Nacht eine Frage. Was machen Sie?', o: ['Sie wählen die 9.', 'Sie warten bis 7 Uhr.', 'Sie schreiben eine E-Mail.'], why: '*Bei Fragen sind wir 24 Stunden für Sie da. Wählen Sie die 9.*' },
            { q: 'Sie parken drei Tage in der Garage. Das kostet ___.', o: ['45 Euro', '15 Euro', '30 Euro'], why: '15 Euro per day × 3 days = 45 Euro.' },
            { q: 'Wo steht das WLAN-Passwort?', o: ['auf der Schlüsselkarte', 'an der Tür', 'im Bad'], why: '*Das Passwort steht auf Ihrer Schlüsselkarte.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the three places in the hotel.', items: [
            { s: 'Das Frühstück ist im [Erdgeschoss], das Gepäck bleibt an der [Rezeption] und das Auto steht in der [Garage].', why: 'Three places from the information page.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: '___ wann gibt es Frühstück? – Ab 7 Uhr.', o: ['Ab', 'Bis', 'Um'], why: 'The answer is *ab 7 Uhr*, so the question is *Ab wann …?*' },
      { q: 'Die Dusche ___ nicht.', o: ['funktioniert', 'funktionieren', 'funktionierst'], why: '*die Dusche* is one thing: *sie funktioniert*.' },
      { q: 'Es gibt ___ Handtücher im Bad.', o: ['keine', 'kein', 'nicht'], why: 'Plural: *keine Handtücher*.' },
      { q: 'Ich kann nicht schlafen. Das Zimmer ist ___ laut.', o: ['zu', 'zum', 'nicht'], why: '*zu laut*: too loud.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Ich habe ein Doppelzimmer ___. (reservieren)', a: ['reserviert'], why: '*-ieren* verbs: no *ge-*.' },
      { q: 'Wir ___ morgen um 10 Uhr aus. (auschecken)', a: ['checken'], why: '*wir checken … aus*.' },
      { q: '___ Sie mich um sieben Uhr wecken? (können, polite)', a: ['Könnten', 'Koennten'], why: 'Polite: *Könnten Sie …?*' },
      { q: 'Die Heizung ist kaputt? Das tut mir ___.', a: ['leid'], why: '*Das tut mir leid*: I am sorry.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
      { a: 'Kann ich mit Karte bezahlen?', why: '*Kann* first, *bezahlen* at the end.' },
      { a: 'Bis wann muss ich auschecken?', why: '*Bis wann*, then *muss*, and *auschecken* at the end.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: '„Nachtruhe“ heißt: In der Nacht soll man leise sein.', a: 't', why: '*die Nachtruhe*: quiet time at night.' },
      { q: 'Das Erdgeschoss ist ganz oben im Haus.', a: 'f', why: '*das Erdgeschoss* is the ground floor.' },
    ] },
  ],
};
