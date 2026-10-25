// German A2 for travel, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Problems on holiday',
  goal: 'Deal with problems: lost things, illness, changes.',
  art: 'cactus',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['lost-property', 'perfekt', 'pharmacy', 'symptoms', 'travel-changes'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Losing something',
      about: 'Say what you have lost, describe it and report it.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'If you lose something, ask at the lost property office: *das Fundbüro*. Many towns, stations and airports have one. If someone has stolen something from you, go to the police and report it: *eine Anzeige machen*.' },
          { t: 'examples', items: [
            { s: 'Ich habe meine Tasche **verloren**.', n: '*verlieren → verloren*' },
            { s: 'Ich habe meinen Schirm im Zug **vergessen**.', n: '*vergessen → vergessen*: the participle has no *ge-*.' },
            { s: 'Man hat mir das Handy **gestohlen**.', n: '*stehlen → gestohlen*. *Man* means: someone.' },
            { s: 'Mein Rucksack ist **weg**!', n: '*weg*: gone, not there any more.' },
          ] },
          { t: 'table', caption: 'Things you can lose', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['der Ausweis', 'ID card'],
            ['der Reisepass', 'passport'],
            ['das Portemonnaie', 'wallet, purse'],
            ['der Schlüssel', 'key'],
            ['der Rucksack', 'backpack'],
            ['die Brille', 'glasses'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'Im Fundbüro', lines: [
            { who: 'Mitarbeiterin', s: 'Guten Tag. Was kann ich für Sie tun?' },
            { who: 'Herr Petrović', s: 'Guten Tag. Ich habe gestern im Bus meinen Rucksack vergessen.' },
            { who: 'Mitarbeiterin', s: 'Welche Linie war das, und wann?' },
            { who: 'Herr Petrović', s: 'Die Linie 12, gegen 17 Uhr.' },
            { who: 'Mitarbeiterin', s: 'Wie sieht der Rucksack aus?' },
            { who: 'Herr Petrović', s: 'Er ist blau und ziemlich groß. Darin sind eine Jacke, ein Buch und meine Brille.' },
            { who: 'Mitarbeiterin', s: 'Einen Moment, bitte … Ist das Ihr Rucksack?' },
            { who: 'Herr Petrović', s: 'Ja, das ist er! Vielen Dank!' },
            { who: 'Mitarbeiterin', s: 'Gern. Ich brauche dann noch Ihren Ausweis.' },
          ] },
          { t: 'text', md: 'To describe a thing, say its colour, its size and what is in it: *Er ist blau. Darin sind …* Use **er**, **sie** or **es** for the thing: *der Rucksack → er*, *die Tasche → sie*, *das Handy → es*.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Ich habe meine Tasche ___.', o: ['verloren', 'verliert', 'verlieren'], why: 'Perfekt: *haben* + participle *verloren*.' },
            { q: 'Ich habe meinen Schirm im Zug ___.', o: ['vergessen', 'vergesst', 'gevergessen'], why: '*vergessen → vergessen*, no *ge-*.' },
            { q: 'Wo ist mein Portemonnaie? Ich glaube, man hat es mir ___.', o: ['gestohlen', 'gestehlt', 'stiehlt'], why: '*stehlen → gestohlen*.' },
            { q: 'Mein Koffer ist schwarz. ___ hat einen roten Griff.', o: ['Er', 'Sie', 'Es'], why: '*der Koffer → er*.' },
            { q: 'Meine Tasche ist braun. ___ ist aus Leder.', o: ['Sie', 'Er', 'Es'], why: '*die Tasche → sie*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Where do you go?', pairs: [
            ['Ich habe meinen Schirm im Zug vergessen.', 'zum Fundbüro'],
            ['Man hat mir die Tasche gestohlen.', 'zur Polizei'],
            ['Ich habe Kopfschmerzen.', 'zur Apotheke'],
            ['Ich habe meinen Zimmerschlüssel verloren.', 'zur Rezeption'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Ich habe meinen Reisepass ___. (verlieren)', a: ['verloren'], why: '*verlieren → verloren*.' },
            { q: 'Mein Rucksack ist blau. ___ ist ziemlich groß.', a: ['Er'], why: '*der Rucksack → er*.' },
            { q: 'Ich habe meine Tasche im Bus vergessen. Wo ist das ___?', a: ['Fundbüro'], why: 'Lost things go to the *Fundbüro*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
            { a: 'Wie sieht Ihr Rucksack aus?', why: '*aussehen* is separable: *aus* goes to the end.' },
            { a: 'Haben Sie eine schwarze Tasche gefunden?', why: 'A yes/no question: *Haben* first, the participle *gefunden* at the end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Feeling ill',
      about: 'Say how you feel and get help at a pharmacy.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: 'At a pharmacy, *die Apotheke*, you can buy medicine and ask for advice. For small problems, like a cold or a headache, the pharmacist can often help you.\n\nIn Germany, at night and on Sundays, a pharmacy near you is always open: this is the *Notdienst*. You can find a list on the door of every pharmacy. In an emergency, call 112.' },
          { t: 'examples', items: [
            { s: 'Entschuldigung, wo ist die **nächste** Apotheke?', n: '*die nächste*: the nearest one.' },
            { s: 'Ich habe Kopfschmerzen und Fieber.', n: 'Two common problems.' },
            { s: '**Mir** ist schlecht.', n: 'I feel sick. *Mir* is the Dativ of *ich*.' },
            { s: 'Haben Sie etwas **gegen** Halsschmerzen?', n: '*etwas gegen*: something to help with a problem.' },
            { s: 'Ich habe einen Sonnenbrand.', n: 'Your skin is red after too much sun.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'In der Apotheke', lines: [
            { who: 'Apothekerin', s: 'Guten Tag, was kann ich für Sie tun?' },
            { who: 'Nadia', s: 'Guten Tag. Ich habe seit gestern Halsschmerzen und Schnupfen. Haben Sie etwas dagegen?' },
            { who: 'Apothekerin', s: 'Haben Sie auch Fieber?' },
            { who: 'Nadia', s: 'Nein, ich glaube nicht.' },
            { who: 'Apothekerin', s: 'Dann nehmen Sie diese Lutschtabletten, alle drei Stunden eine. Und trinken Sie viel Tee.' },
            { who: 'Nadia', s: 'Muss ich zum Arzt gehen?' },
            { who: 'Apothekerin', s: 'Wenn es in drei Tagen nicht besser ist, gehen Sie bitte zum Arzt.' },
            { who: 'Nadia', s: 'Gut, vielen Dank. Was kostet das?' },
            { who: 'Apothekerin', s: '7,95 Euro, bitte. Gute Besserung!' },
          ] },
          { t: 'tip', art: 'owl', md: 'When someone is ill, you say *Gute Besserung!* The pharmacist gives advice with the imperative and *Sie*: *Nehmen Sie …*, *Trinken Sie …*.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the questions and answers.', pairs: [
            ['Haben Sie Fieber?', 'Nein, aber ich habe Husten.'],
            ['Seit wann haben Sie die Schmerzen?', 'Seit zwei Tagen.'],
            ['Wie oft soll ich die Tabletten nehmen?', 'Dreimal am Tag.'],
            ['Wo ist die nächste Apotheke?', 'Gleich um die Ecke.'],
            ['Muss ich zum Arzt?', 'Ja, wenn es morgen nicht besser ist.'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Ich habe seit Montag Husten. Haben Sie etwas ___ Husten?', o: ['gegen', 'ohne', 'aus'], why: '*etwas gegen Husten*: something to help with a cough.' },
            { q: 'Mir ist ___. Ich glaube, ich habe etwas Falsches gegessen.', o: ['schlecht', 'krank', 'Fieber'], why: '*Mir ist schlecht*: I feel sick.' },
            { q: 'Es ist Sonntag. Welche Apotheke ist geöffnet? Die Apotheke mit ___.', o: ['Notdienst', 'Fundbüro', 'Ermäßigung'], why: 'On Sundays and at night, the pharmacy with *Notdienst* is open.' },
            { q: 'In einem Notfall rufen Sie in Deutschland die ___ an.', o: ['112', '911', '100'], why: 'The emergency number in Germany is 112.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Wo ist die ___ Apotheke? (nah, superlative)', a: ['nächste', 'naechste'], why: '*nah, näher, am nächsten*. Before a noun: *die nächste Apotheke*.' },
            { q: '___ Sie viel Tee! (trinken, imperative)', a: ['Trinken'], why: 'The imperative with *Sie*: the verb first, then *Sie*.' },
            { q: 'Ich habe ___ gestern Fieber. (since)', a: ['seit'], why: '*seit gestern*: from yesterday until now.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
            { a: 'Wo ist die nächste Apotheke?', why: 'The question word, then the verb *ist*.' },
            { a: 'Wie oft soll ich die Tabletten nehmen?', why: '*soll* in second place, the infinitive *nehmen* at the end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: a change to your trip',
      about: 'Read an email from a tour company about a change to the plan.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'On a group trip, the plan can change because of the weather or other problems. The tour company then sends a message. Read this email.' },
          { t: 'reading', title: 'Änderung Ihrer Reise', md: '**Betreff: Änderung Ihrer Reise „Am Bodensee“**\n\nLiebe Frau Mendes,\n\nleider müssen wir Ihr Programm für morgen ändern. Der Wetterbericht meldet starken Wind und Regen. Deshalb fällt die Schifffahrt nach Lindau aus.\n\nStattdessen besuchen wir am Vormittag ein Museum in Konstanz. Der Eintritt ist für Sie kostenlos.\n\nBitte beachten Sie: Der Bus fährt schon um 8:30 Uhr ab, nicht um 9 Uhr. Treffpunkt ist wie immer vor dem Hotel.\n\nDie Schifffahrt machen wir am Donnerstag, dann soll das Wetter besser sein. Das Mittagessen am Donnerstag ist dann auf dem Schiff.\n\nHaben Sie Fragen? Ihre Reiseleiterin, Frau Yılmaz, ist morgen ab 8 Uhr an der Rezeption.\n\nWir bitten um Ihr Verständnis.\n\nMit freundlichen Grüßen\nIhr Team von Sonnenweg Reisen' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the email. True, false or not given?', items: [
            { q: 'Morgen gibt es eine Schifffahrt nach Lindau.', a: 'f', why: '*Deshalb fällt die Schifffahrt nach Lindau aus.*' },
            { q: 'Das Wetter soll morgen schlecht sein.', a: 't', why: 'Strong wind and rain: *starken Wind und Regen*.' },
            { q: 'Frau Mendes muss für das Museum nichts bezahlen.', a: 't', why: '*Der Eintritt ist für Sie kostenlos.*' },
            { q: 'Der Bus fährt morgen später ab als geplant.', a: 'f', why: 'It leaves earlier: at 8:30, not at 9.' },
            { q: 'Am Donnerstag essen die Gäste mittags auf dem Schiff.', a: 't', why: '*Das Mittagessen am Donnerstag ist dann auf dem Schiff.*' },
            { q: 'Frau Yılmaz spricht auch Englisch.', a: 'ng', why: 'The email does not say which languages she speaks.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Warum fällt die Schifffahrt aus?', o: ['wegen Wind und Regen', 'weil das Schiff kaputt ist', 'weil nur wenige Gäste mitfahren'], why: 'The weather report says strong wind and rain.' },
            { q: 'Um wie viel Uhr fährt der Bus morgen ab?', o: ['um 8:30 Uhr', 'um 9 Uhr', 'um 8 Uhr'], why: '*Der Bus fährt schon um 8:30 Uhr ab.*' },
            { q: 'Wo ist der Treffpunkt?', o: ['vor dem Hotel', 'an der Rezeption', 'am Hafen'], why: '*Treffpunkt ist wie immer vor dem Hotel.* Frau Yılmaz waits at reception, but the group meets in front of the hotel.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the sentences from the email.', items: [
            { q: 'Die Schifffahrt ___ aus. (ausfallen)', a: ['fällt', 'faellt'], why: '*ausfallen*: *sie fällt … aus*. It does not take place.' },
            { q: '___ besuchen wir ein Museum. (instead)', a: ['Stattdessen'], why: '*stattdessen*: instead.' },
            { q: 'Wir bitten um Ihr ___.', a: ['Verständnis', 'Verstaendnis'], why: 'A polite sentence: we hope you understand.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Ich habe meinen Schlüssel ___.', o: ['verloren', 'verliert', 'verlieren'], why: 'Perfekt: *haben* + *verloren*.' },
      { q: 'Mein Rucksack ist grün. ___ ist klein.', o: ['Er', 'Sie', 'Es'], why: '*der Rucksack → er*.' },
      { q: 'Die Schifffahrt fällt aus. Das heißt: ___', o: ['Es gibt keine Schifffahrt.', 'Die Schifffahrt ist später.', 'Die Schifffahrt ist teurer.'], why: '*ausfallen*: it does not take place.' },
      { q: 'Am Sonntag hat nur die Apotheke mit ___ geöffnet.', o: ['Notdienst', 'Fundbüro', 'Ermäßigung'], why: 'The *Notdienst* pharmacy is open at night and on Sundays.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Ich habe mein Handy im Taxi ___. (vergessen)', a: ['vergessen'], why: '*vergessen → vergessen*, no *ge-*.' },
      { q: 'Haben Sie etwas ___ Kopfschmerzen?', a: ['gegen'], why: '*etwas gegen Kopfschmerzen*.' },
      { q: 'Man hat mir die Tasche ___. (stehlen)', a: ['gestohlen'], why: '*stehlen → gestohlen*.' },
      { q: 'Mir ist ___. Ich habe zu viel gegessen.', a: ['schlecht', 'übel', 'uebel'], why: '*Mir ist schlecht*: I feel sick.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
      { a: 'Wo ist die nächste Apotheke?', why: 'The question word, then the verb.' },
      { a: 'Wie sieht Ihre Tasche aus?', why: '*aussehen*: *aus* goes to the end.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'Im Fundbüro fragt man nach verlorenen Sachen.', a: 't', why: '*das Fundbüro*: the lost property office.' },
      { q: 'In Deutschland ist die Notrufnummer 911.', a: 'f', why: 'In Germany the emergency number is 112.' },
    ] },
  ],
};
