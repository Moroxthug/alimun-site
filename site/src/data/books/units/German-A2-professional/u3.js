// German A2 for work, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Emails at work',
  goal: 'Write and understand short work emails.',
  art: 'cat',
  tags: { skills: ['writing', 'reading', 'vocabulary'], topics: ['email', 'greetings', 'polite-requests', 'dativ-pronouns'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'Greetings and endings',
      about: 'Start and end a work email in the right way.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'A work email has a subject line, the **Betreff**, then a greeting, the text and an ending. The greeting depends on how well you know the person.' },
          { t: 'table', caption: 'Greetings', explain: ['head', 'col0'], quiz: true, head: ['', 'More formal', 'Less formal'], rows: [
            ['To a woman', 'Sehr geehrte Frau Krause,', 'Liebe Frau Krause,'],
            ['To a man', 'Sehr geehrter Herr Yilmaz,', 'Lieber Herr Yilmaz,'],
            ['You do not know the name', 'Sehr geehrte Damen und Herren,', 'Guten Tag,'],
            ['A colleague you say du to', 'Liebe Jana,', 'Hallo Jana,'],
          ] },
          { t: 'tip', art: 'owl', md: 'After the greeting comes a comma. The next line starts with a **small letter**, unless the first word is a noun or *Sie*: *Sehr geehrte Frau Krause, / vielen Dank für Ihre E-Mail.*' },
        ],
        [
          { t: 'table', caption: 'Endings', explain: ['head', 'col1'], quiz: true, head: ['Ending', 'When you use it'], rows: [
            ['Mit freundlichen Grüßen', 'very formal, for example to a new customer or an office'],
            ['Freundliche Grüße', 'formal, a little shorter'],
            ['Viele Grüße', 'friendly, for colleagues and people you know'],
            ['Liebe Grüße', 'for colleagues you know well'],
          ] },
          { t: 'text', md: 'In emails, the polite *Sie* and all its forms start with a **capital letter**: *Sie, Ihnen, Ihr, Ihre*. The informal *du, dir, dein* usually start with a small letter. A capital letter is also correct there.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best greeting or ending.', items: [
            { q: 'You write to an office. You do not know the name of the person.', o: ['Sehr geehrte Damen und Herren,', 'Liebe Damen und Herren,', 'Hallo zusammen,'], why: 'Formal, without a name: *Sehr geehrte Damen und Herren*.' },
            { q: 'You write to a new customer, Herr Brandt.', o: ['Sehr geehrter Herr Brandt,', 'Sehr geehrte Herr Brandt,', 'Hallo Brandt,'], why: 'For a man: *Sehr geehrter*, with *-r*.' },
            { q: 'You write to your colleague Ahmed. You say du to each other.', o: ['Hallo Ahmed,', 'Sehr geehrter Ahmed,', 'Sehr geehrter Herr Ahmed,'], why: '*Sehr geehrter* goes with *Herr* and the family name. For a colleague you say du to: *Hallo Ahmed* or *Lieber Ahmed*.' },
            { q: 'The ending in an email to a new customer:', o: ['Mit freundlichen Grüßen', 'Liebe Grüße', 'Bis dann'], why: 'The usual formal ending.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the greetings and the ending.', items: [
            { q: 'Sehr ___ Frau Weiß, (geehrt)', a: ['geehrte'], why: 'For a woman: *Sehr geehrte*.' },
            { q: 'Sehr ___ Herr Nowak, (geehrt)', a: ['geehrter'], why: 'For a man: *Sehr geehrter*.' },
            { q: '___ Herr Sato, (lieb)', a: ['Lieber'], why: 'For a man: *Lieber*. For a woman: *Liebe*.' },
            { q: 'Mit freundlichen ___', a: ['Grüßen', 'Gruessen'], why: 'The formal ending: *Mit freundlichen Grüßen*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap all the forms of the polite Sie.', items: [
            { s: 'vielen Dank für [Ihre] E-Mail. Ich schicke [Ihnen] die Unterlagen morgen.', why: '*Ihre* (your) and *Ihnen* (to you) are forms of the polite *Sie*.' },
            { s: 'Können [Sie] mir bitte [Ihre] Telefonnummer geben?', why: '*Sie* and *Ihre* start with a capital letter. *mir* means *to me*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Asking and answering',
      about: 'Ask for something in an email and answer a request politely.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'To ask for something politely, use **Können Sie …?** or the softer **Könnten Sie …?**, often with *bitte*. The modal verb comes first, and the infinitive goes to the end: *Können Sie mir bitte den Plan **schicken**?*' },
          { t: 'examples', items: [
            { s: '**Können** Sie mir bitte die Rechnung **schicken**?', n: '*mir*: to me. *schicken* goes to the end.' },
            { s: '**Könnten** Sie mich morgen kurz **anrufen**?', n: '*Könnten* is softer and more polite than *Können*.' },
            { s: 'Ich brauche die Zahlen **bis Freitag**.', n: '*bis Freitag*: on Friday at the latest.' },
          ] },
          { t: 'tip', art: 'owl', md: 'When the person is a short word like *mir*, *ihm* or *Ihnen* and the thing is a noun, the person comes first: *Können Sie **mir** **den Plan** schicken?*' },
        ],
        [
          { t: 'table', caption: 'Answering an email', explain: ['head', 'col0'], head: ['You want to …', 'You write …'], rows: [
            ['say thank you', 'Vielen Dank für Ihre E-Mail.'],
            ['say yes', 'Gern schicke ich Ihnen die Unterlagen.'],
            ['send a file', 'Im Anhang finden Sie den Plan.'],
            ['say no politely', 'Leider kann ich Ihnen die Zahlen erst am Montag schicken.'],
            ['offer more help', 'Bei Fragen können Sie mich gern anrufen.'],
            ['hope for an answer', 'Ich freue mich auf Ihre Antwort.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
            { q: 'Können Sie ___ bitte die Liste schicken? (to me)', a: ['mir'], why: '*mir* is the Dativ of *ich*: to me.' },
            { q: '___ Sie mir bitte helfen? (können, more polite)', a: ['Könnten', 'Koennten'], why: '*Könnten Sie …?* is softer than *Können Sie …?*' },
            { q: 'Vielen Dank ___ Ihre E-Mail.', a: ['für', 'fuer'], why: '*Danke für* + Akkusativ.' },
            { q: 'Ich freue mich ___ Ihre Antwort.', a: ['auf'], why: '*sich freuen auf*: to look forward to something.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Können Sie mir den Plan schicken?', why: '*Können* first, the person *mir* before the thing *den Plan*, *schicken* at the end.' },
            { a: 'Ich freue mich auf Ihre Antwort.', why: 'A common last line in a formal email.' },
            { a: 'Könnten Sie mich morgen anrufen?', why: '*Könnten* first, the short word *mich* right after *Sie*, *anrufen* at the end.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What do you write?', items: [
            { q: 'Your manager wants a report today. You can only send it tomorrow.', o: ['Leider kann ich Ihnen den Bericht erst morgen schicken.', 'Gern schicke ich Ihnen den Bericht heute.', 'Ich schicke Ihnen den Bericht nicht.'], why: '*Leider … erst morgen*: a polite no, with a new time.' },
            { q: 'You send a file with your email.', o: ['Im Anhang finden Sie die Liste.', 'Ich freue mich auf die Liste.', 'Bei Fragen finden Sie die Liste.'], why: '*Im Anhang*: attached to the email.' },
            { q: 'A customer wrote to you. Your first line:', o: ['vielen Dank für Ihre E-Mail.', 'vielen Dank für deine E-Mail.', 'danke für Ihre E-Mail, tschüss.'], why: 'To a customer: *Ihre*, polite. *tschüss* is too informal.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: three work emails',
      about: 'Read a message from a colleague, a request from a customer and a reply.',
      art: 'snail',
      spreads: [
        [
          { t: 'reading', title: 'E-Mail 1', md: '**Betreff:** Kopierer im 2. Stock\n\nHallo Ali,\n\nder Kopierer im 2. Stock ist schon wieder kaputt. Kannst du bitte den Techniker anrufen? Ich habe heute keine Zeit, ich bin den ganzen Tag beim Kunden.\n\nDanke und viele Grüße\nJana' },
          { t: 'reading', title: 'E-Mail 2', md: '**Betreff:** Angebot für Büromöbel\n\nSehr geehrte Damen und Herren,\n\nwir ziehen im Mai in ein neues Büro und brauchen zehn Schreibtische und zehn Stühle. Könnten Sie mir bitte ein Angebot schicken? Wir brauchen die Möbel bis zum 20. April.\n\nMit freundlichen Grüßen\nKarin Vogt\nVogt Steuerberatung' },
        ],
        [
          { t: 'reading', title: 'E-Mail 3', md: '**Betreff:** AW: Angebot für Büromöbel\n\nSehr geehrte Frau Vogt,\n\nvielen Dank für Ihre Anfrage. Im Anhang finden Sie unser Angebot. Leider haben wir die Stühle erst ab dem 25. April. Die Schreibtische können wir aber schon am 15. April liefern.\n\nBei Fragen rufen Sie mich gern an.\n\nFreundliche Grüße\nMarco Bianchi' },
          { t: 'tip', art: 'owl', md: '*AW:* in the subject line means *Antwort*: the email is a reply. *WG:* means *weitergeleitet*: someone forwarded the email.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the three emails. True, false or not given?', items: [
            { q: 'Jana möchte, dass Ali den Techniker anruft.', a: 't', why: '*Kannst du bitte den Techniker anrufen?*' },
            { q: 'Jana ist heute im Büro.', a: 'f', why: '*ich bin den ganzen Tag beim Kunden*.' },
            { q: 'Frau Vogt kennt den Namen der Person bei der Möbelfirma.', a: 'f', why: 'She writes *Sehr geehrte Damen und Herren*, so she does not know the name.' },
            { q: 'Herr Bianchi schickt das Angebot mit der E-Mail.', a: 't', why: '*Im Anhang finden Sie unser Angebot.*' },
            { q: 'Die Stühle kommen vor dem 20. April.', a: 'f', why: 'The chairs are only there *ab dem 25. April*.' },
            { q: 'Frau Vogt hat schon einmal bei der Firma bestellt.', a: 'ng', why: 'The emails do not say this.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the word and its meaning.', pairs: [
            ['der Betreff', 'das Thema der E-Mail'],
            ['der Anhang', 'eine Datei mit der E-Mail'],
            ['AW:', 'Das ist eine Antwort.'],
            ['die Anfrage', 'eine Frage an eine Firma, zum Beispiel nach dem Preis'],
            ['das Angebot', 'der Preis und die Informationen von der Firma'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Warum sagt Jana *du* zu Ali?', o: ['Ali ist ihr Kollege.', 'Ali ist ein neuer Kunde.', 'Ali arbeitet in einem Amt.'], why: 'Colleagues often say *du* to each other. To a new customer or an office you write *Sie*.' },
            { q: 'Was kann die Firma am 15. April liefern?', o: ['die Schreibtische', 'die Stühle', 'den Kopierer'], why: '*Die Schreibtische können wir aber schon am 15. April liefern.*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'An email to a man you do not know well:', o: ['Sehr geehrter Herr Fischer,', 'Sehr geehrte Herr Fischer,', 'Lieber Fischer,'], why: 'For a man: *Sehr geehrter Herr* + family name.' },
      { q: 'The subject line of an email is the ___.', o: ['Betreff', 'Anhang', 'Angebot'], why: '*der Betreff*: the subject.' },
      { q: '___ Sie mir bitte die Rechnung schicken?', o: ['Könnten', 'Könnte', 'Kannst'], why: 'With *Sie*: *Könnten Sie …?* or *Können Sie …?*' },
      { q: 'You do not know who will read your email. You write:', o: ['Sehr geehrte Damen und Herren,', 'Liebe Grüße,', 'Hallo Herr,'], why: 'The formal greeting without a name.' },
      { q: 'A friendly ending for a colleague:', o: ['Viele Grüße', 'Sehr geehrte Grüße', 'Mit freundliche Grüßen'], why: '*Viele Grüße* is friendly. *Mit freundlichen Grüßen* needs *-en*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the email.', items: [
      { q: 'Sehr ___ Frau Adeyemi, (geehrt)', a: ['geehrte'], why: 'For a woman: *Sehr geehrte*.' },
      { q: 'vielen Dank für ___ E-Mail. (your, polite)', a: ['Ihre'], why: 'The polite *your*: *Ihre*, with a capital *I*.' },
      { q: 'Im ___ finden Sie die Unterlagen. (the file with the email)', a: ['Anhang'], why: '*Im Anhang*: attached to the email.' },
      { q: 'Leider ___ ich erst am Montag antworten. (können)', a: ['kann'], why: '*ich kann*, and the infinitive *antworten* goes to the end.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Können Sie mir die Liste schicken?', why: '*mir* before *die Liste*, *schicken* at the end.' },
      { a: 'Vielen Dank für Ihre Anfrage.', why: '*Danke für* + Akkusativ.' },
    ] },
    { t: 'ex', kind: 'spot', h: 'Tap the forms of the polite Sie.', items: [
      { s: 'Gern schicke ich [Ihnen] den Plan. Bei Fragen rufen [Sie] mich an.', why: '*Ihnen* and *Sie* are polite forms, with a capital letter.' },
    ] },
  ],
};
