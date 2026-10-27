// German A1 for work, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Phone and messages',
  goal: 'Answer a simple work call and write a short message to a colleague.',
  art: 'parrot',
  tags: { skills: ['speaking', 'writing', 'vocabulary', 'reading'], topics: ['telephone', 'numbers', 'spelling', 'messages', 'koennen', 'imperative'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'On the phone',
      about: 'Answer the phone at work, ask for someone and say a phone number.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'At work, people answer the phone with the name of the company, their own name and a greeting: *Hotel Lindenhof, Sara Klein, guten Tag.*\n\nThe caller says who they are: *Hier ist …* Then they ask for a person: *Kann ich bitte Frau Roth sprechen?*' },
          { t: 'dialogue', title: 'A call at the hotel', lines: [
            { who: 'Sara', s: 'Hotel Lindenhof, Sara Klein, guten Tag.' },
            { who: 'Herr Braun', s: 'Guten Tag, hier ist Peter Braun. Kann ich bitte Frau Roth sprechen?' },
            { who: 'Sara', s: 'Moment, bitte. Oh, Frau Roth ist leider nicht da.' },
            { who: 'Herr Braun', s: 'Wann ist sie wieder da?' },
            { who: 'Sara', s: 'Am Nachmittag, um drei. Wie ist Ihre Telefonnummer?' },
            { who: 'Herr Braun', s: 'Null eins sieben zwo, vierundfünfzig, achtzehn, null drei.' },
            { who: 'Sara', s: 'Danke, Herr Braun. Auf Wiederhören!' },
            { who: 'Herr Braun', s: 'Auf Wiederhören!' },
          ] },
        ],
        [
          { t: 'table', caption: 'Useful phrases on the phone', explain: ['head', 'col0'], quiz: true, head: ['Situation', 'What you say'], rows: [
            ['You answer the phone.', 'Hotel Lindenhof, Sara Klein, guten Tag.'],
            ['You say who you are.', 'Hier ist Peter Braun.'],
            ['You ask for a person.', 'Kann ich bitte Frau Roth sprechen?'],
            ['You ask the caller to wait.', 'Moment, bitte.'],
            ['The person is not there.', 'Frau Roth ist leider nicht da.'],
            ['You did not understand.', 'Wie bitte? Noch einmal, bitte.'],
            ['You say goodbye.', 'Auf Wiederhören!'],
          ] },
          { t: 'tip', art: 'owl', md: 'On the phone you say **Auf Wiederhören** (*hören*: to hear), not *Auf Wiedersehen* (*sehen*: to see).' },
        ],
        [
          { t: 'text', md: 'People often say phone numbers in pairs: *54* is *vierundfünfzig*. In German the small number comes first: *vier-und-fünfzig*.\n\nOn the phone many people say **zwo** for *zwei*, so it does not sound like *drei*.' },
          { t: 'examples', items: [
            { s: 'Meine Nummer ist null eins sieben **zwo** …', n: '*zwo* is *zwei* on the phone.' },
            { s: '**achtzehn**, **null drei**', n: '18, 03.' },
            { s: '**Wie bitte?** Noch einmal, bitte.', n: 'You did not understand. Ask the caller to say it again.' },
            { s: 'Wie schreibt man das?', n: 'Ask the caller to spell a name.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the number and the words.', pairs: [
            ['54', 'vierundfünfzig'],
            ['18', 'achtzehn'],
            ['72', 'zweiundsiebzig'],
            ['36', 'sechsunddreißig'],
            ['91', 'einundneunzig'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
            { q: 'Das Telefon im Büro klingelt. Sie sagen:', o: ['Firma Lenz, Mira Haas, guten Tag.', 'Ja? Wer ist da?', 'Auf Wiederhören!'], why: 'The name of the company, your name and a greeting.' },
            { q: 'Sie möchten mit Frau Roth sprechen. Sie fragen:', o: ['Kann ich bitte Frau Roth sprechen?', 'Ist Frau Roth leider nicht da?', 'Wie schreibt man Frau Roth?'], why: '*Kann ich bitte … sprechen?* asks for a person.' },
            { q: 'Sie verstehen die Nummer nicht. Sie sagen:', o: ['Wie bitte? Noch einmal, bitte.', 'Moment, bitte.', 'Hier ist Mira Haas.'], why: '*Wie bitte?* means you did not understand.' },
            { q: 'Das Telefonat ist zu Ende. Sie sagen:', o: ['Auf Wiederhören!', 'Auf Wiedersehen!', 'Guten Tag!'], why: 'On the phone: *Auf Wiederhören!*' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Kann ich bitte Herrn Braun sprechen?', why: '*kann* first, *sprechen* at the end. In this question *Herr* becomes *Herrn*.' },
            { a: 'Wann ist sie wieder da?', why: 'Question word, verb, *sie*, then *wieder da*.' },
            { a: 'Wie ist Ihre Telefonnummer?', why: 'Question word, verb, then *Ihre Telefonnummer*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Short messages',
      about: 'Write a short message: you are ill, you are late, or you ask for a call back.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'Colleagues often send short messages. Start with *Hallo* or *Liebe …* / *Lieber …* and end with *Viele Grüße* or, to colleagues you know well, *LG* (*liebe Grüße*).' },
          { t: 'examples', items: [
            { s: 'Ich bin **krank**. Ich komme heute nicht.', n: '*krank*: ill.' },
            { s: 'Ich komme zehn Minuten **später**.', n: '*später*: later.' },
            { s: 'Der Bus **kommt** nicht. Ich bin um halb neun da.', n: '*da sein*: to be there.' },
            { s: '**Kannst** du heute für mich arbeiten?', n: '*können* + an infinitive at the end.' },
            { s: '**Rufen Sie** bitte **zurück**.', n: 'A polite request with *Sie*: the verb comes first.' },
          ] },
          { t: 'tip', art: 'owl', md: '*Liebe* is for a woman (*Liebe Katrin*), *Lieber* is for a man (*Lieber Jonas*). *Hallo* is for everybody.' },
        ],
        [
          { t: 'text', md: 'To ask someone politely to do something, use the verb with **Sie**, and put the verb **first**: *Sie rufen zurück.* becomes ***Rufen Sie** bitte zurück!* With a separable verb, the small part still goes to the end.' },
          { t: 'ex', kind: 'transform', h: 'Make a polite request with Sie.', items: [
            { q: 'Sie rufen bitte zurück.', cue: 'Rufen', a: ['Rufen Sie bitte zurück.', 'Rufen Sie bitte zurück!'], why: 'The verb *rufen* comes first, then *Sie*. *zurück* goes to the end.' },
            { q: 'Sie schreiben bitte eine E-Mail.', cue: 'Schreiben', a: ['Schreiben Sie bitte eine E-Mail.', 'Schreiben Sie bitte eine E-Mail!'], why: 'The verb comes first, then *Sie*.' },
            { q: 'Sie kommen bitte um zehn Uhr.', cue: 'Kommen', a: ['Kommen Sie bitte um zehn Uhr.', 'Kommen Sie bitte um zehn Uhr!'], why: 'The verb comes first, then *Sie*.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: '___ du heute für mich arbeiten?', o: ['Kannst', 'Kann', 'Können'], why: '*können* with *du*: *kannst*.' },
            { q: 'Ich ___ heute nicht kommen. Ich bin krank.', o: ['kann', 'kannst', 'können'], why: '*können* with *ich*: *kann*.' },
            { q: '___ Katrin, ich komme heute später.', o: ['Liebe', 'Lieber', 'Lieb'], why: '*Katrin* is a woman: *Liebe Katrin*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'bank', h: 'Complete the message with the words.', extra: ['Wiederhören', 'Lieber'], items: [
            { q: '___ Frau Weber,', a: 'Liebe', why: 'Frau Weber is a woman: *Liebe*.' },
            { q: 'ich bin heute ___.', a: 'krank', why: '*krank*: ill.' },
            { q: 'Ich komme heute ___.', a: 'nicht', why: '*nicht* makes the sentence negative.' },
            { q: 'Morgen ___ ich wieder da.', a: 'bin', why: '*sein*: *ich bin*.' },
            { q: 'Viele ___, Ana Costa', a: 'Grüße', why: 'A message ends with *Viele Grüße*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'Ich komme zehn Minuten [spät].', a: ['später'], why: '*zehn Minuten später*: ten minutes later.' },
            { s: '[Lieber] Katrin, ich bin krank.', a: ['Liebe'], why: '*Katrin* is a woman: *Liebe*.' },
            { s: 'Rufen Sie bitte [an zurück].', a: ['zurück'], why: '*zurückrufen*: only *zurück* goes to the end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: the team chat',
      about: 'Read short messages in the chat of a team at a hotel.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Many teams have a group chat on the phone. Read the messages from the team of a hotel kitchen on a Monday morning.' },
          { t: 'reading', title: 'Team Küche', md: '**Jonas, 6.10 Uhr:** Guten Morgen! Ich bin krank und komme heute nicht. Ich bin am Mittwoch wieder da. Sorry! LG Jonas\n\n**Lena, 6.25 Uhr:** Gute Besserung, Jonas! Wer kann heute für Jonas arbeiten?\n\n**Bilal, 6.40 Uhr:** Ich kann ab 10 Uhr kommen. Um 8 Uhr bin ich beim Arzt.\n\n**Lena, 6.45 Uhr:** Super, danke, Bilal!\n\n**Elena, 7.05 Uhr:** Hallo! Mein Zug ist zu spät. Ich komme 20 Minuten später, um halb acht.\n\n**Lena, 7.10 Uhr:** Kein Problem, Elena. Und bitte alle: Morgen um 14 Uhr ist Teamsitzung im Büro. Viele Grüße, Lena' },
          { t: 'tip', art: 'owl', md: '*Gute Besserung!* is what you say to someone who is ill: get well soon. *die Teamsitzung* is a meeting of the team.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the chat. True, false or not given?', items: [
            { q: 'Jonas ist krank.', a: 't', why: '*Ich bin krank und komme heute nicht.*' },
            { q: 'Jonas kommt am Dienstag wieder.', a: 'f', why: '*Ich bin am Mittwoch wieder da.*' },
            { q: 'Bilal kann ab 10 Uhr arbeiten.', a: 't', why: '*Ich kann ab 10 Uhr kommen.*' },
            { q: 'Elena kommt mit dem Bus.', a: 'f', why: '*Mein Zug ist zu spät.* She comes by train.' },
            { q: 'Lena ist die Chefin von der Küche.', a: 'ng', why: 'Lena organises the team, but the chat does not say what her job is.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Warum kommt Bilal erst um 10 Uhr?', o: ['Um 8 Uhr ist er beim Arzt.', 'Er ist krank.', 'Sein Zug ist zu spät.'], why: '*Um 8 Uhr bin ich beim Arzt.*' },
            { q: 'Wann kommt Elena?', o: ['um halb acht', 'um 7.10 Uhr', 'um 10 Uhr'], why: '*Ich komme 20 Minuten später, um halb acht.*' },
            { q: 'Wann ist die Teamsitzung?', o: ['morgen um 14 Uhr', 'heute um 14 Uhr', 'am Mittwoch um 10 Uhr'], why: '*Morgen um 14 Uhr ist Teamsitzung im Büro.*' },
          ] },
          { t: 'ex', kind: 'match', h: 'What do you write? Match.', pairs: [
            ['Ein Kollege ist krank.', 'Gute Besserung!'],
            ['Ein Kollege hilft.', 'Danke!'],
            ['Eine Kollegin kommt später.', 'Kein Problem.'],
            ['Sie beginnen eine Nachricht.', 'Guten Morgen!'],
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Am Ende von einem Telefonat sagen Sie:', o: ['Auf Wiederhören!', 'Auf Wiedersehen!', 'Gute Besserung!'], why: 'On the phone you hear the person: *Auf Wiederhören*.' },
      { q: 'Sie möchten mit Frau Roth sprechen:', o: ['Kann ich bitte Frau Roth sprechen?', 'Frau Roth ist leider nicht da.', 'Hier ist Frau Roth?'], why: '*Kann ich bitte … sprechen?* asks for a person.' },
      { q: 'Am Telefon sagen viele Leute ___ für *zwei*.', o: ['zwo', 'zwölf', 'zwanzig'], why: '*zwo* does not sound like *drei*.' },
      { q: 'Eine Kollegin ist krank. Sie schreiben:', o: ['Gute Besserung!', 'Kein Problem!', 'Schönen Feierabend!'], why: '*Gute Besserung!*: get well soon.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Ich bin krank. Ich komme heute ___.', a: ['nicht'], why: '*nicht* makes the sentence negative.' },
      { q: '___ du morgen für mich arbeiten? (können)', a: ['Kannst'], why: '*können* with *du*: *kannst*.' },
      { q: 'Herr Braun, rufen Sie bitte ___. (zurückrufen)', a: ['zurück'], why: '*zurückrufen*: *zurück* goes to the end.' },
      { q: '___ Jonas, ich komme heute später. (lieb)', a: ['Lieber'], why: '*Jonas* is a man: *Lieber Jonas*.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Make a polite request with Sie.', items: [
      { q: 'Sie warten bitte einen Moment.', cue: 'Warten', a: ['Warten Sie bitte einen Moment.', 'Warten Sie bitte einen Moment!'], why: 'The verb comes first, then *Sie*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Wie ist Ihre Telefonnummer?', why: 'Question word, verb, then *Ihre Telefonnummer*.' },
      { a: 'Ich komme zehn Minuten später.', why: 'The verb *komme* is in second place.' },
      { a: 'Frau Roth ist leider nicht da.', why: 'The verb *ist* is in second place.' },
    ] },
  ],
};
