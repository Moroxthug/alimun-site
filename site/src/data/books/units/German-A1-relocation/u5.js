// German A1 for moving abroad, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'At the doctor',
  goal: 'Make an appointment, say what hurts and understand a few simple instructions.',
  art: 'cactus',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['body', 'health', 'doctor', 'appointments', 'days-of-the-week', 'imperative-sie'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'What hurts?',
      about: 'Words for the body, and how to say that you are ill and what hurts.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'When you are ill, you go to a family doctor first, the **Hausarzt** or **Hausärztin**. You say *Ich bin krank* (I am ill) and then what is wrong.' },
          { t: 'table', caption: 'The body', explain: ['head', 'col1'], quiz: true, head: ['German', 'Meaning'], rows: [
            ['der Kopf', 'head'],
            ['der Hals', 'throat, neck'],
            ['der Bauch', 'stomach'],
            ['der Rücken', 'back'],
            ['der Arm', 'arm'],
            ['das Bein', 'leg'],
            ['das Ohr', 'ear'],
            ['das Auge', 'eye'],
            ['der Fuß', 'foot'],
          ] },
          { t: 'tip', art: 'owl', md: 'Pain is *Schmerzen*. Put the body part in front: *Kopfschmerzen* (headache), *Halsschmerzen* (sore throat), *Bauchschmerzen* (stomach ache), *Rückenschmerzen* (back pain).' },
        ],
        [
          { t: 'text', md: 'There are two easy ways to say what hurts. Use **Ich habe …schmerzen**: *Ich habe Kopfschmerzen.* Or use **tut weh** (hurts) for one thing and **tun weh** for two or more: *Mein Bein tut weh. Meine Augen tun weh.*' },
          { t: 'examples', items: [
            { s: 'Ich habe **Fieber**.', n: '*das Fieber*: a high temperature. No article here.' },
            { s: 'Ich habe **Husten** und **Schnupfen**.', n: '*der Husten*: a cough. *der Schnupfen*: a cold with a runny nose.' },
            { s: 'Mein Rücken **tut weh**.', n: 'One thing: *tut weh*.' },
            { s: 'Meine Füße **tun weh**.', n: 'Two feet, plural: *tun weh*. *der Fuß*, *die Füße*.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'In der Praxis', lines: [
            { who: 'Ärztin', s: 'Guten Tag, Herr Okoro. Was ist los?' },
            { who: 'Daniel', s: 'Ich bin krank. Ich habe Halsschmerzen und Husten.' },
            { who: 'Ärztin', s: 'Haben Sie auch Fieber?' },
            { who: 'Daniel', s: 'Ja, ein bisschen. 38 Grad.' },
            { who: 'Ärztin', s: 'Machen Sie bitte den Mund auf. Hm, Ihr Hals ist rot.' },
            { who: 'Ärztin', s: 'Trinken Sie viel Tee und bleiben Sie drei Tage zu Hause. Hier ist ein Rezept für Tabletten.' },
            { who: 'Daniel', s: 'Danke. Ich brauche auch eine Krankmeldung für die Arbeit.' },
            { who: 'Ärztin', s: 'Kein Problem. Gute Besserung!' },
          ] },
          { t: 'text', md: 'The doctor gives instructions with **Sie**: the verb comes first. *Trinken Sie viel Wasser. Nehmen Sie die Tabletten. Bleiben Sie im Bett.* When someone is ill, you say **Gute Besserung!** (Get well soon.)' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the words and their meaning.', pairs: [
            ['Kopfschmerzen', 'Der Kopf tut weh.'],
            ['Halsschmerzen', 'Der Hals tut weh.'],
            ['Bauchschmerzen', 'Der Bauch tut weh.'],
            ['Rückenschmerzen', 'Der Rücken tut weh.'],
          ] },
          { t: 'ex', kind: 'select', h: 'tut weh or tun weh?', items: [
            { q: 'Mein Arm ___.', o: ['tut weh', 'tun weh', 'tust weh'], why: 'One arm: *tut weh*.' },
            { q: 'Meine Ohren ___.', o: ['tun weh', 'tut weh', 'tust weh'], why: '*die Ohren* is plural: *tun weh*.' },
            { q: 'Mein Bauch ___.', o: ['tut weh', 'tun weh', 'tust weh'], why: 'One stomach: *tut weh*.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'Daniel hat Halsschmerzen.', a: 't', why: '*Ich habe Halsschmerzen und Husten.*' },
            { q: 'Daniel hat kein Fieber.', a: 'f', why: 'He has a little fever: 38 degrees.' },
            { q: 'Daniel bleibt drei Tage zu Hause.', a: 't', why: 'The doctor says: *Bleiben Sie drei Tage zu Hause.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'build', h: 'Build the doctor’s instructions. One word does not belong.', items: [
            { a: 'Trinken Sie viel Tee.', extra: ['trinkst'], why: 'A polite instruction: the infinitive form first, then *Sie*.' },
            { a: 'Nehmen Sie die Tabletten.', extra: ['nimmt'], why: '*Nehmen Sie …*: the form with *Sie* is like the infinitive.' },
            { a: 'Bleiben Sie zu Hause.', extra: ['nach'], why: 'At home: *zu Hause*. *nach Hause* means going home.' },
          ] },
          { t: 'ex', kind: 'search', h: 'Find six words for the body in the grid.', words: ['Kopf', 'Hals', 'Bauch', 'Bein', 'Arm', 'Auge'] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Making an appointment',
      about: 'Phone the practice, say the day and the time, and understand what to bring.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Most doctors want an appointment, a **Termin**. You phone the practice (*die Praxis*) or book online. Say the day with **am** and the time with **um**: *am Montag um 10 Uhr*.' },
          { t: 'table', caption: 'Days of the week', quiz: true, head: ['Short', 'Day'], rows: [
            ['Mo', 'Montag'],
            ['Di', 'Dienstag'],
            ['Mi', 'Mittwoch'],
            ['Do', 'Donnerstag'],
            ['Fr', 'Freitag'],
            ['Sa', 'Samstag'],
            ['So', 'Sonntag'],
          ] },
          { t: 'tip', art: 'owl', md: '*heute* is today, *morgen* is tomorrow. *morgen früh* is tomorrow morning. Many practices are closed on Wednesday afternoon and at the weekend.' },
        ],
        [
          { t: 'dialogue', title: 'Am Telefon', lines: [
            { who: 'Arzthelferin', s: 'Praxis Dr. Neumann, guten Tag.' },
            { who: 'Hana', s: 'Guten Tag, mein Name ist Hana Sato. Ich möchte einen Termin, bitte.' },
            { who: 'Arzthelferin', s: 'Was haben Sie denn?' },
            { who: 'Hana', s: 'Ich habe Bauchschmerzen, schon zwei Tage.' },
            { who: 'Arzthelferin', s: 'Können Sie heute um 11.30 Uhr kommen?' },
            { who: 'Hana', s: 'Heute kann ich leider nicht. Geht es morgen?' },
            { who: 'Arzthelferin', s: 'Ja, morgen, am Donnerstag, um 9 Uhr.' },
            { who: 'Hana', s: 'Gut, am Donnerstag um 9 Uhr. Danke.' },
            { who: 'Arzthelferin', s: 'Bringen Sie bitte Ihre Versichertenkarte mit.' },
          ] },
          { t: 'text', md: 'With **können**, the second verb goes to the **end**: *Können Sie morgen **kommen**?* *Ich kann heute nicht **kommen**.* *mitbringen* is a separable verb: *Bringen Sie Ihre Karte **mit**.*' },
        ],
        [
          { t: 'ex', kind: 'select', h: 'am or um?', items: [
            { q: 'Der Termin ist ___ Freitag.', o: ['am', 'um', 'im'], why: 'For a day: *am*.' },
            { q: 'Kommen Sie bitte ___ 8.15 Uhr.', o: ['um', 'am', 'im'], why: 'For a clock time: *um*.' },
            { q: '___ Montag habe ich keine Zeit.', o: ['Am', 'Um', 'Im'], why: 'For a day: *am Montag*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
            { q: 'Ich ___ einen Termin, bitte. (möchten)', a: ['möchte'], why: '*ich möchte*: I would like.' },
            { q: '___ Sie morgen um 10 Uhr kommen? (können)', a: ['Können'], why: 'A yes/no question starts with the verb: *Können Sie …?*' },
            { q: 'Bringen Sie bitte Ihre Karte ___. (mitbringen)', a: ['mit'], why: '*mitbringen* is separable: *mit* goes to the end.' },
            { q: 'Heute kann ich leider nicht ___. (kommen)', a: ['kommen'], why: 'After *kann*, the infinitive goes to the end.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Ich möchte einen Termin, bitte.', why: '*Ich*, the verb *möchte*, then the object *einen Termin*.' },
            { a: 'Können Sie am Freitag kommen?', why: '*Können* first, *kommen* at the end.' },
            { a: 'Ich habe am Montag keine Zeit.', why: 'The verb *habe* second. *keine Zeit*: no time.' },
          ] },
          { t: 'ex', kind: 'crossword', h: 'Write the days of the week.', words: [
            { a: 'Montag', clue: 'Der erste Tag in der Woche.' },
            { a: 'Mittwoch', clue: 'Der Tag nach Dienstag.' },
            { a: 'Freitag', clue: 'Der Tag vor Samstag.' },
            { a: 'Sonntag', clue: 'An diesem Tag sind die Geschäfte zu.' },
            { a: 'Donnerstag', clue: 'Hanas Termin ist am …' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'The practice and a reminder',
      about: 'Read the opening hours of a practice and a text message about an appointment.',
      art: 'snail',
      spreads: [
        [
          { t: 'reading', title: 'Praxis Dr. Neumann', md: 'Allgemeinmedizin\n\nSprechzeiten\nMontag, Dienstag, Donnerstag: 8 bis 12 Uhr und 15 bis 18 Uhr\nMittwoch und Freitag: 8 bis 12 Uhr\n\nTermine bitte am Telefon oder online.\nBitte bringen Sie Ihre Versichertenkarte mit.\n\nAm Abend und am Wochenende: Ärztlicher Bereitschaftsdienst, Telefon 116 117.\nIm Notfall: 112.' },
          { t: 'ex', kind: 'tf', h: 'Read the sign. True or false?', items: [
            { q: 'Am Mittwochnachmittag ist die Praxis zu.', a: 't', why: 'Wednesday: only 8 to 12 Uhr.' },
            { q: 'Am Dienstag um 16 Uhr ist die Praxis offen.', a: 't', why: 'Tuesday: also 15 to 18 Uhr.' },
            { q: 'Am Samstag ist die Praxis offen.', a: 'f', why: 'Saturday is not on the sign. At the weekend you call 116 117.' },
            { q: 'Im Notfall ruft man 116 117 an.', a: 'f', why: 'In an emergency: 112. 116 117 is the doctor on duty in the evening and at the weekend.' },
          ] },
        ],
        [
          { t: 'reading', title: 'SMS', md: 'Praxis Dr. Neumann: Hallo Frau Sato, Ihr Termin ist morgen, Donnerstag, um 9 Uhr. Bitte kommen Sie 10 Minuten früher. Sie können nicht kommen? Bitte rufen Sie an: 0123 44 55 66.' },
          { t: 'ex', kind: 'choice', h: 'Read the message. Choose the answer.', items: [
            { q: 'Wann ist Hanas Termin?', o: ['am Donnerstag um 9 Uhr', 'am Mittwoch um 9 Uhr', 'am Donnerstag um 10 Uhr'], why: '*morgen, Donnerstag, um 9 Uhr*.' },
            { q: 'Wann soll Hana in der Praxis sein?', o: ['um 8.50 Uhr', 'um 9.10 Uhr', 'um 9 Uhr'], why: '*10 Minuten früher*: 10 minutes before 9 is 8.50.' },
            { q: 'Hana kann nicht kommen. Was macht sie?', o: ['Sie ruft an.', 'Sie schreibt eine E-Mail.', 'Sie kommt am Freitag.'], why: '*Bitte rufen Sie an.*' },
          ] },
        ],
        [
          { t: 'tip', art: 'owl', md: 'Your health insurance card is the *Versichertenkarte* or *Gesundheitskarte*. Always bring it to the practice. A *Rezept* is a prescription: you take it to the chemist’s, the *Apotheke*.' },
          { t: 'ex', kind: 'spot', h: 'Tap the two numbers for help at night or in an emergency.', items: [
            { s: 'Am Abend und am Wochenende: Telefon [116 117]. Im Notfall: [112].', why: '116 117: a doctor on duty. 112: an emergency, the ambulance.' },
          ] },
          { t: 'ex', kind: 'odd', h: 'Which word is the odd one out?', items: [
            { o: ['der Termin', 'der Kopf', 'der Bauch', 'der Rücken'], why: 'An appointment is not a part of the body.' },
            { o: ['der Fuß', 'das Fieber', 'der Husten', 'der Schnupfen'], why: 'A foot is a part of the body. The others are things you have when you are ill.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Mein Kopf tut weh. Ich habe ___.', o: ['Kopfschmerzen', 'Bauchschmerzen', 'Fieber'], why: '*der Kopf* + *Schmerzen*.' },
      { q: 'Meine Füße ___.', o: ['tun weh', 'tut weh', 'tust weh'], why: 'Plural: *tun weh*.' },
      { q: 'Der Termin ist ___ Dienstag.', o: ['am', 'um', 'im'], why: 'A day: *am*.' },
      { q: 'Your colleague is ill. You say: ___', o: ['Gute Besserung!', 'Gute Nacht!', 'Guten Appetit!'], why: '*Gute Besserung*: Get well soon.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Können Sie morgen um 9 Uhr ___? (kommen)', a: ['kommen'], why: 'After *können*, the infinitive at the end.' },
      { q: 'Bringen Sie bitte Ihre Versichertenkarte ___.', a: ['mit'], why: '*mitbringen*: *mit* at the end.' },
      { q: '___ Sie viel Tee. (trinken)', a: ['Trinken'], why: 'A polite instruction: the verb first.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'Kommen Sie bitte [am] 10 Uhr.', a: ['um'], why: 'A clock time: *um*.' },
      { s: 'Ich [möchten] einen Termin.', a: ['möchte'], why: '*ich möchte*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Heute habe ich Fieber.', why: 'The time first, then the verb *habe* in second place, then *ich*.' },
      { a: 'Können Sie am Montag kommen?', why: '*Können* first, *kommen* at the end.' },
    ] },
  ],
};
