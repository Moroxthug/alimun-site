// German A1 for study and exams, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Asking for help',
  goal: 'Ask the teacher for help with können, ask your classmates simple questions and read messages in a class chat.',
  art: 'parrot',
  tags: { skills: ['grammar', 'speaking', 'reading'], topics: ['modal-koennen', 'polite-requests', 'w-questions', 'yes-no-questions', 'du-and-sie', 'group-chat'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Können Sie das bitte wiederholen?',
      about: 'Ask the teacher for help in a polite way with können and bitte.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'To ask for help, use **können** with a second verb. *können* is in second position, or in first position in a question. The second verb is the **infinitive**, and it goes to the **end**: *Können Sie das bitte **wiederholen**?* Add **bitte** to make it polite.' },
          { t: 'table', caption: 'können', explain: ['head'], quiz: true, head: ['Person', 'können'], rows: [
            ['ich', 'kann'],
            ['du', 'kannst'],
            ['er / sie / man', 'kann'],
            ['wir', 'können'],
            ['ihr', 'könnt'],
            ['sie / Sie', 'können'],
          ] },
          { t: 'tip', art: 'owl', md: '*ich kann* and *er kann* have no *-e* and no *-t* at the end. Not: *ich kanne*, *er kannt*.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Können Sie das bitte **wiederholen**?', n: 'The teacher says it again.' },
            { s: 'Können Sie bitte langsam **sprechen**?', n: 'The teacher speaks more slowly.' },
            { s: 'Können Sie das bitte **buchstabieren**?', n: 'The teacher says the word letter by letter.' },
            { s: 'Können Sie das bitte an die Tafel **schreiben**?', n: 'You want to see the word on the board.' },
            { s: 'Ich habe eine Frage.', n: 'Say this first, and then ask.' },
            { s: 'Ich kann die Übung nicht **machen**. Sie ist schwer.', n: '*nicht* comes before the infinitive at the end.' },
          ] },
          { t: 'dialogue', title: 'After the lesson', lines: [
            { who: 'Priya', s: 'Entschuldigung, Herr Wagner, ich habe eine Frage.' },
            { who: 'Herr Wagner', s: 'Ja, bitte?' },
            { who: 'Priya', s: 'Ich verstehe die Übung auf Seite 18 nicht. Können Sie mir helfen?' },
            { who: 'Herr Wagner', s: 'Natürlich. Hier schreiben Sie die Verben. Zum Beispiel: ich kann, du kannst.' },
            { who: 'Priya', s: 'Ah, jetzt verstehe ich. Danke! Und was sind die Hausaufgaben?' },
            { who: 'Herr Wagner', s: 'Seite 19, Übung 2 und 3.' },
            { who: 'Priya', s: 'Können Sie das bitte noch einmal sagen?' },
            { who: 'Herr Wagner', s: 'Seite 19, Übung 2 und 3.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Complete the verb können.', verb: 'können', tense: 'present', rows: [
            ['ich', 'kann'],
            ['du', 'kannst'],
            ['er / sie', 'kann'],
            ['wir', 'können|koennen'],
            ['ihr', 'könnt|koennt'],
            ['Sie', 'können|koennen'],
          ] },
          { t: 'ex', kind: 'match', h: 'What do you want? Match the situation and the question.', pairs: [
            ['Sie hören das Wort nicht gut.', 'Können Sie das bitte wiederholen?'],
            ['Der Lehrer spricht sehr schnell.', 'Können Sie bitte langsam sprechen?'],
            ['Sie können das Wort nicht schreiben.', 'Können Sie das bitte buchstabieren?'],
            ['Sie verstehen die Übung nicht.', 'Können Sie mir helfen?'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with the right form of können.', items: [
            { q: '___ Sie das bitte wiederholen?', a: ['Können', 'Koennen'], why: 'A question: *können* first, the infinitive at the end. With *Sie*: *können*.' },
            { q: 'Ich ___ das Wort nicht lesen.', a: ['kann'], why: '*ich kann*: no ending.' },
            { q: '___ du mir helfen?', a: ['Kannst'], why: '*du kannst*.' },
            { q: 'Wir ___ die Hausaufgaben zusammen machen.', a: ['können', 'koennen'], why: '*wir können*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order. The infinitive goes to the end.', items: [
            { a: 'Können Sie bitte langsam sprechen?', why: '*Können* first, the infinitive *sprechen* at the end.' },
            { a: 'Ich kann die Übung nicht machen.', why: '*kann* in second position, *nicht* before the infinitive, *machen* at the end.' },
            { a: 'Können Sie das bitte buchstabieren?', why: 'A yes/no question: the modal verb first, the infinitive last.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Hast du einen Stift?',
      about: 'Ask your classmates questions with du: W-questions and yes/no questions.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'There are two kinds of questions. A **W-question** starts with a question word, and the verb comes second: *Woher **kommst** du?* A **yes/no question** starts with the verb: ***Hast** du einen Stift?* With *du*, the verb usually ends in **-st**.' },
          { t: 'table', caption: 'Question words', explain: ['head', 'col2'], quiz: true, head: ['Word', 'Example', 'English'], rows: [
            ['Wer?', 'Wer ist das?', 'who'],
            ['Was?', 'Was machst du?', 'what'],
            ['Wo?', 'Wo wohnst du?', 'where'],
            ['Woher?', 'Woher kommst du?', 'where from'],
            ['Wann?', 'Wann ist die Pause?', 'when'],
            ['Wie?', 'Wie heißt du?', 'how'],
          ] },
        ],
        [
          { t: 'text', md: 'Classmates often say **du** to each other. Teachers and the people in the office usually get **Sie**. The verb changes: *Woher kommen **Sie**?* and *Woher komm**st du**?*' },
          { t: 'dialogue', title: 'In the break', lines: [
            { who: 'Kofi', s: 'Hallo, ich bin Kofi. Wie heißt du?' },
            { who: 'Lena', s: 'Ich heiße Lena. Woher kommst du, Kofi?' },
            { who: 'Kofi', s: 'Ich komme aus Ghana. Und du?' },
            { who: 'Lena', s: 'Aus Polen. Sag mal, hast du einen Stift für mich? Ich habe keinen.' },
            { who: 'Kofi', s: 'Ja, hier, bitte.' },
            { who: 'Lena', s: 'Danke! Verstehst du die Hausaufgaben?' },
            { who: 'Kofi', s: 'Nein, nicht alle. Möchtest du am Freitag zusammen lernen?' },
            { who: 'Lena', s: 'Gern! Um wie viel Uhr?' },
            { who: 'Kofi', s: 'Um vier Uhr in der Bibliothek?' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'Kofi kommt aus Polen.', a: 'f', why: 'Kofi comes from Ghana. Lena comes from Poland.' },
            { q: 'Lena hat keinen Stift.', a: 't', why: '*Ich habe keinen.* Kofi gives her a pen.' },
            { q: 'Kofi und Lena lernen am Freitag zusammen.', a: 't', why: '*Möchtest du am Freitag zusammen lernen?* and Lena says *Gern!*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right question word.', items: [
            { q: '___ kommst du? Aus Spanien.', o: ['Woher', 'Wo', 'Wann'], why: '*aus* + country: the answer to *Woher?*' },
            { q: '___ wohnst du? In Bremen.', o: ['Wo', 'Woher', 'Wer'], why: '*in* + city: the answer to *Wo?*' },
            { q: '___ ist der Test? Am Freitag.', o: ['Wann', 'Was', 'Wie'], why: 'A day or a time answers *Wann?*' },
            { q: '___ ist das? Das ist Frau Becker.', o: ['Wer', 'Was', 'Wo'], why: 'A person answers *Wer?*' },
          ] },
          { t: 'ex', kind: 'transform', h: 'You talk to a classmate. Write the question with du.', items: [
            { q: 'Woher kommen Sie?', cue: 'du', a: ['Woher kommst du?'], why: 'With *du*, the verb ends in *-st*: *kommst*.' },
            { q: 'Haben Sie einen Kuli?', cue: 'du', a: ['Hast du einen Kuli?'], why: '*haben* with *du* is *hast*.' },
            { q: 'Können Sie mir helfen?', cue: 'du', a: ['Kannst du mir helfen?'], why: '*können* with *du* is *kannst*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right verb form.', items: [
            { q: 'Was ___ du am Wochenende?', o: ['machst', 'machen', 'macht'], why: 'With *du*, the ending is *-st*: *machst*.' },
            { q: '___ du ein Wörterbuch?', o: ['Hast', 'Habt', 'Haben'], why: '*du hast*. The yes/no question starts with the verb.' },
            { q: 'Wo ___ Sie, Frau Becker?', o: ['wohnen', 'wohnst', 'wohnt'], why: 'With *Sie*, the verb has the infinitive form.' },
          ] },
          { t: 'ex', kind: 'odd', h: 'Which one is not a question word?', items: [
            { o: ['Hier', 'Wo', 'Wann', 'Woher'], why: '*hier* means *here*. It is not a question word.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: a class group chat',
      about: 'Read short messages between classmates and find who needs what.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'The learners of an A1 course have a group chat. Read the messages. Who asks a question? Who answers?' },
          { t: 'reading', title: 'Gruppe: Deutschkurs A1', md: '**Lena:** Hallo zusammen! Ich bin heute krank und kann nicht kommen. Was sind die Hausaufgaben?\n\n**Jonas:** Hallo Lena! Seite 24, Übung 3 und 4. Gute Besserung!\n\n**Mei:** Danke, Jonas. Wann ist der Test? Am Donnerstag oder am Freitag?\n\n**Jonas:** Am Freitag um neun Uhr, in Raum 5.\n\n**Omar:** Hat jemand ein Wörterbuch für Freitag? Ich habe kein Wörterbuch.\n\n**Mei:** Ja, ich habe zwei. Ich bringe ein Wörterbuch für dich mit.\n\n**Lena:** Kann jemand die Übung 4 fotografieren? Ich habe mein Buch nicht hier.\n\n**Jonas:** Klar, kein Problem.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the chat. True, false or not given?', items: [
            { q: 'Lena ist heute im Kurs.', a: 'f', why: '*Ich bin heute krank und kann nicht kommen.*' },
            { q: 'Der Test ist am Freitag.', a: 't', why: '*Am Freitag um neun Uhr.*' },
            { q: 'Omar hat kein Wörterbuch.', a: 't', why: '*Ich habe kein Wörterbuch.*' },
            { q: 'Mei wohnt neben der Schule.', a: 'ng', why: 'The chat says nothing about where Mei lives.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Was sind die Hausaufgaben?', o: ['Seite 24, Übung 3 und 4', 'Seite 5, Übung 9', 'Seite 4, Übung 24'], why: 'Jonas writes: *Seite 24, Übung 3 und 4.*' },
            { q: 'Was möchte Lena von Jonas?', o: ['ein Foto von Übung 4', 'ein Wörterbuch', 'einen Stift'], why: '*Kann jemand die Übung 4 fotografieren?* She does not have her book with her.' },
            { q: 'Wer bringt ein Wörterbuch mit?', o: ['Mei', 'Omar', 'Lena'], why: '*Ich habe zwei. Ich bringe ein Wörterbuch für dich mit.* Mei writes this.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the message and the answer.', pairs: [
            ['Was sind die Hausaufgaben?', 'Seite 24, Übung 3 und 4.'],
            ['Wann ist der Test?', 'Am Freitag um neun Uhr.'],
            ['Hat jemand ein Wörterbuch?', 'Ja, ich bringe ein Wörterbuch mit.'],
            ['Ich bin krank.', 'Gute Besserung!'],
          ] },
          { t: 'tip', art: 'owl', md: '*jemand* means *somebody*. *Hat jemand …?* and *Kann jemand …?* are good questions for a group: one person in the group can answer.' },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: '___ Sie das bitte wiederholen?', o: ['Können', 'Kann', 'Kannst'], why: 'With *Sie*: *können*.' },
      { q: '___ wohnst du? In Wien.', o: ['Wo', 'Woher', 'Wann'], why: 'A city with *in* answers *Wo?*' },
      { q: 'Der Lehrer spricht sehr schnell. Sie sagen: „___“', o: ['Können Sie bitte langsam sprechen?', 'Können Sie das bitte buchstabieren?', 'Wie heißen Sie?'], why: 'You want the teacher to speak more slowly.' },
      { q: '___ du einen Kuli?', o: ['Hast', 'Habe', 'Hat'], why: '*du hast*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Ich ___ heute nicht kommen. (können)', a: ['kann'], why: '*ich kann*, with no ending.' },
      { q: 'Woher ___ du? (kommen)', a: ['kommst'], why: 'With *du*, the ending is *-st*.' },
      { q: 'Können Sie das bitte an die Tafel ___? (schreiben)', a: ['schreiben'], why: 'After *können*, the infinitive goes to the end.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Kannst du mir bitte helfen?', why: '*Kannst* first, *helfen* at the end.' },
      { a: 'Wann ist der Test?', why: 'A W-question: the question word, then the verb.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Write the question with du.', items: [
      { q: 'Wie heißen Sie?', cue: 'du', a: ['Wie heißt du?', 'Wie heisst du?'], why: '*heißen* with *du*: *heißt*. The *s* of *-st* is already in *ß*.' },
      { q: 'Haben Sie heute Zeit?', cue: 'du', a: ['Hast du heute Zeit?'], why: '*haben* with *du* is *hast*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the question and the answer.', pairs: [
      ['Wer ist das?', 'Das ist Herr Wagner.'],
      ['Woher kommst du?', 'Aus Ghana.'],
      ['Wann ist die Pause?', 'Um halb elf.'],
    ] },
  ],
};
