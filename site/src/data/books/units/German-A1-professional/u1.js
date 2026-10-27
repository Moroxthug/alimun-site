// German A1 for work, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'My first day',
  goal: 'Greet colleagues, introduce yourself at work and say where you come from.',
  art: 'suitcase',
  tags: { skills: ['speaking', 'vocabulary', 'reading'], topics: ['greetings', 'introductions', 'du-and-sie', 'countries', 'languages', 'alphabet', 'workplace'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'Hello, I am new here',
      about: 'Greet colleagues at different times of the day and say that you are new.',
      art: 'pretzel',
      spreads: [
        [
          { t: 'text', md: 'At work you greet people when you arrive and when you leave. The greeting depends on the time of day.\n\nOn your first day, say your name and **Ich bin neu hier.** (I am new here.)' },
          { t: 'table', caption: 'Hello and goodbye at work', explain: ['head', 'col1'], quiz: true, head: ['German', 'When you say it'], rows: [
            ['Guten Morgen!', 'in the morning, until about 11'],
            ['Guten Tag!', 'during the day'],
            ['Guten Abend!', 'in the evening'],
            ['Hallo!', 'to colleagues you know well'],
            ['Auf Wiedersehen!', 'goodbye, polite'],
            ['Tschüss!', 'goodbye, to colleagues you know well'],
            ['Schönen Feierabend!', 'when a colleague goes home after work'],
          ] },
          { t: 'tip', art: 'owl', md: '*der Feierabend* is the time after work. *Schönen Feierabend!* is a friendly way to say goodbye at the end of the day.' },
        ],
        [
          { t: 'dialogue', title: 'The first morning', lines: [
            { who: 'Elif', s: 'Guten Morgen! Ich bin Elif Yılmaz. Ich bin neu hier.' },
            { who: 'Herr Wolf', s: 'Guten Morgen, Frau Yılmaz! Ich bin Thomas Wolf, der Teamleiter. Herzlich willkommen!' },
            { who: 'Elif', s: 'Danke schön!' },
            { who: 'Herr Wolf', s: 'Das ist Jonas. Er ist auch im Team.' },
            { who: 'Jonas', s: 'Hallo! Ich bin Jonas. Wir sagen hier du, okay?' },
            { who: 'Elif', s: 'Ja, gern! Ich bin Elif.' },
          ] },
          { t: 'text', md: 'At work, say **Sie** to your manager, to customers and to new people. Use the family name: *Frau Yılmaz*, *Herr Wolf*.\n\nIn many teams colleagues say **du** and use the first name. Wait until a colleague offers it: *Wir sagen hier du.*' },
        ],
        [
          { t: 'table', caption: 'Sie and du', explain: ['head'], quiz: true, head: ['Sie (polite)', 'du (friendly)'], rows: [
            ['Wie heißen Sie?', 'Wie heißt du?'],
            ['Woher kommen Sie?', 'Woher kommst du?'],
            ['Wie geht es Ihnen?', 'Wie geht’s?'],
            ['Sind Sie neu hier?', 'Bist du neu hier?'],
          ] },
          { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
            { q: 'Es ist 8 Uhr am Morgen. Sie kommen ins Büro.', o: ['Guten Morgen!', 'Guten Abend!', 'Schönen Feierabend!'], why: 'In the morning you say *Guten Morgen!*' },
            { q: 'Ihre Kollegin geht um 17 Uhr nach Hause.', o: ['Schönen Feierabend!', 'Guten Morgen!', 'Herzlich willkommen!'], why: 'At the end of the working day: *Schönen Feierabend!*' },
            { q: 'Ihr Chef ist Herr Wolf. Sie fragen:', o: ['Wie geht es Ihnen, Herr Wolf?', 'Wie geht’s, Thomas?', 'Tschüss, Thomas!'], why: 'With your manager you say *Sie* and use the family name.' },
            { q: 'Ein neuer Kollege ist da. Sie fragen:', o: ['Sind Sie neu hier?', 'Sind Sie alt hier?', 'Bist du Auf Wiedersehen?'], why: '*neu hier*: new here. With a new person you say *Sie*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the question and the answer.', pairs: [
            ['Wie heißen Sie?', 'Ich heiße Elif Yılmaz.'],
            ['Wie geht es Ihnen?', 'Gut, danke. Und Ihnen?'],
            ['Sind Sie neu hier?', 'Ja, heute ist mein erster Tag.'],
            ['Wer ist das?', 'Das ist Jonas. Er ist im Team.'],
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Ich bin neu hier.', why: 'The verb *bin* is in second place.' },
            { a: 'Wie heißen Sie?', why: 'Question word, then the verb, then *Sie*.' },
            { a: 'Wir sagen hier du.', why: 'The verb *sagen* is in second place.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Name, country and languages',
      about: 'Say your name, where you come from and which languages you speak, and spell your name.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'To introduce yourself, you need four verbs: **sein** (to be), **heißen** (to be called), **kommen** (to come) and **sprechen** (to speak). *sein* is irregular. *sprechen* changes its vowel with *du* and *er/sie*: *du sprichst, sie spricht*.' },
          { t: 'table', caption: 'Four verbs', explain: ['head'], quiz: true, head: ['Person', 'sein', 'heißen', 'kommen', 'sprechen'], rows: [
            ['ich', 'bin', 'heiße', 'komme', 'spreche'],
            ['du', 'bist', 'heißt', 'kommst', 'sprichst'],
            ['er / sie', 'ist', 'heißt', 'kommt', 'spricht'],
            ['wir', 'sind', 'heißen', 'kommen', 'sprechen'],
            ['ihr', 'seid', 'heißt', 'kommt', 'sprecht'],
            ['sie / Sie', 'sind', 'heißen', 'kommen', 'sprechen'],
          ] },
        ],
        [
          { t: 'examples', items: [
            { s: 'Ich **komme** aus Polen.', n: '*aus* + the country: where you come from.' },
            { s: 'Ich **wohne** in Köln.', n: '*in* + the city: where you live now.' },
            { s: 'Frau Haddad **kommt** aus Syrien. Sie **spricht** Arabisch und Englisch.', n: 'Languages often end in *-isch*: *Arabisch*, *Englisch*, *Polnisch*.' },
            { s: 'Ich **spreche** ein bisschen Deutsch.', n: '*ein bisschen*: a little.' },
            { s: 'Elif **kommt** aus der Türkei.', n: 'A few countries have an article: *aus der Türkei*, *aus der Schweiz*.' },
          ] },
          { t: 'ex', kind: 'conjugate', h: 'Write the forms of sprechen.', verb: 'sprechen', tense: 'present', rows: [
            ['ich', 'spreche'],
            ['du', 'sprichst', 'With *du* the *e* changes to *i*.'],
            ['er / sie', 'spricht', 'With *er* and *sie* the *e* changes to *i* too.'],
            ['wir', 'sprechen'],
            ['Sie', 'sprechen'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'Ich ___ Kofi Mensah. (heißen)', a: ['heiße', 'heisse'], why: '*ich heiße*: the ending for *ich* is *-e*.' },
            { q: 'Herr Mensah ___ aus Ghana. (kommen)', a: ['kommt'], why: '*Herr Mensah* is *er*: *er kommt*.' },
            { q: '___ Sie neu im Team? (sein)', a: ['Sind'], why: '*Sie sind*. In a yes/no question the verb comes first.' },
            { q: 'Woher ___ du? (kommen)', a: ['kommst'], why: '*du kommst*: the ending for *du* is *-st*.' },
            { q: 'Jonas ___ Deutsch und Spanisch. (sprechen)', a: ['spricht'], why: '*er spricht*: the *e* changes to *i*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the country and the language.', pairs: [
            ['Polen', 'Polnisch'],
            ['Spanien', 'Spanisch'],
            ['die Türkei', 'Türkisch'],
            ['Frankreich', 'Französisch'],
            ['England', 'Englisch'],
          ] },
        ],
        [
          { t: 'text', md: 'At work, people often ask you to spell your name: *Wie schreibt man das?* Say the German letters one by one. Some letters sound very different from English: **E** sounds like *ay*, **I** like *ee*, **J** like *yot*, **W** like *vay*, **Z** like *tset*.' },
          { t: 'dialogue', title: 'At reception', lines: [
            { who: 'Rezeptionistin', s: 'Guten Tag! Wie ist Ihr Name, bitte?' },
            { who: 'Herr Nowak', s: 'Mein Name ist Nowak. Ich bin neu im Lager.' },
            { who: 'Rezeptionistin', s: 'Wie schreibt man das?' },
            { who: 'Herr Nowak', s: 'N, O, W, A, K.' },
            { who: 'Rezeptionistin', s: 'Danke. Und Ihr Vorname?' },
            { who: 'Herr Nowak', s: 'Tomasz. T, O, M, A, S, Z.' },
            { who: 'Rezeptionistin', s: 'Gut, Herr Nowak. Herzlich willkommen!' },
          ] },
          { t: 'tip', art: 'owl', md: '*der Vorname* is your first name. *der Familienname* or *der Nachname* is your family name.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Wie schreibt man das?', o: ['N, O, W, A, K.', 'Ich komme aus Polen.', 'Ich spreche Polnisch.'], why: '*Wie schreibt man das?* asks you to spell the word.' },
            { q: 'Was ist ein Vorname?', o: ['Tomasz', 'Nowak', 'Lager'], why: 'The *Vorname* is the first name: *Tomasz*.' },
            { q: 'Ich komme ___ Spanien.', o: ['aus', 'in', 'von'], why: 'Where you come from: *aus* + the country.' },
            { q: 'Ich wohne ___ Hamburg.', o: ['in', 'aus', 'bei'], why: 'Where you live: *in* + the city.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'Er [sprecht] Englisch und Deutsch.', a: ['spricht'], why: '*sprechen* changes its vowel: *er spricht*.' },
            { s: 'Ich [bist] neu hier.', a: ['bin'], why: '*sein*: *ich bin*, *du bist*.' },
            { s: 'Woher [kommen] du?', a: ['kommst'], why: 'With *du*: *kommst*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Ich spreche ein bisschen Deutsch.', why: 'The verb *spreche* is in second place.' },
            { a: 'Woher kommen Sie?', why: 'Question word, verb, then *Sie*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: welcome to the team',
      about: 'Read a short welcome note about two new colleagues.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'In many companies, new colleagues are introduced in a short note on the notice board or by email. Read the note from a hotel in Leipzig.' },
          { t: 'reading', title: 'Neu im Team', md: 'Liebe Kolleginnen und Kollegen,\n\nwir haben zwei neue Kolleginnen im Team. Herzlich willkommen!\n\nDas ist Priya Sharma. Sie kommt aus Indien und wohnt jetzt in Leipzig. Priya ist an der Rezeption. Sie spricht Hindi, Englisch und Deutsch.\n\nUnd das ist Ana Costa. Sie kommt aus Portugal. Ana ist in der Küche. Sie spricht Portugiesisch, Spanisch und ein bisschen Deutsch. Bitte sprechen Sie langsam mit Ana!\n\nPriya und Ana sagen gern du. Ihr Büro ist im Erdgeschoss.\n\nViele Grüße\nThomas Wolf' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the note. True, false or not given?', items: [
            { q: 'Priya kommt aus Indien.', a: 't', why: '*Sie kommt aus Indien.*' },
            { q: 'Ana ist an der Rezeption.', a: 'f', why: '*Ana ist in der Küche.* Priya is at reception.' },
            { q: 'Ana spricht sehr gut Deutsch.', a: 'f', why: 'She speaks *ein bisschen Deutsch*, a little.' },
            { q: 'Priya und Ana sagen gern du.', a: 't', why: '*Priya und Ana sagen gern du.*' },
            { q: 'Ana wohnt in Leipzig.', a: 'ng', why: 'The note says that Priya lives in Leipzig, but nothing about where Ana lives.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Welche Sprachen spricht Priya?', o: ['Hindi, Englisch und Deutsch', 'Portugiesisch und Spanisch', 'nur Englisch'], why: '*Sie spricht Hindi, Englisch und Deutsch.*' },
            { q: 'Woher kommt Ana?', o: ['aus Portugal', 'aus Spanien', 'aus Indien'], why: '*Sie kommt aus Portugal.*' },
            { q: 'Wer schreibt die Notiz?', o: ['Thomas Wolf', 'Priya Sharma', 'Ana Costa'], why: 'The name at the end: *Viele Grüße, Thomas Wolf*.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the four languages.', items: [
            { s: 'Ana spricht [Portugiesisch] und [Spanisch]. Priya spricht [Hindi] und [Englisch].', why: 'Many languages end in *-isch*. *Hindi* is a language too.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Es ist 9 Uhr am Morgen. Sie sagen:', o: ['Guten Morgen!', 'Guten Abend!', 'Gute Nacht!'], why: 'In the morning: *Guten Morgen!*' },
      { q: 'Ihre Kollegin geht nach Hause. Sie sagen:', o: ['Schönen Feierabend!', 'Herzlich willkommen!', 'Ich bin neu hier.'], why: '*Schönen Feierabend!*: have a nice evening after work.' },
      { q: 'Ein Kunde ist da. Sie fragen:', o: ['Wie heißen Sie?', 'Wie heißt du?', 'Wie heißen du?'], why: 'With customers you say *Sie*: *Wie heißen Sie?*' },
      { q: 'Ich komme ___ der Türkei.', o: ['aus', 'in', 'bei'], why: 'Where you come from: *aus*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
      { q: 'Ich ___ neu hier. (sein)', a: ['bin'], why: '*sein*: *ich bin*.' },
      { q: 'Frau Costa ___ Portugiesisch. (sprechen)', a: ['spricht'], why: '*sie spricht*: the *e* changes to *i*.' },
      { q: 'Wie ___ du? (heißen)', a: ['heißt', 'heisst'], why: '*du heißt*: after *ß* you add only *-t*.' },
      { q: 'Wir ___ aus Polen. (kommen)', a: ['kommen'], why: '*wir kommen*: the same form as the infinitive.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'Herr Wolf [sind] der Teamleiter.', a: ['ist'], why: '*Herr Wolf* is *er*: *er ist*.' },
      { s: 'Ich [wohnt] in Köln.', a: ['wohne'], why: '*ich wohne*: the ending for *ich* is *-e*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Wie schreibt man das?', why: 'Question word, verb, then *man*.' },
      { a: 'Sie spricht ein bisschen Deutsch.', why: 'The verb *spricht* is in second place.' },
    ] },
  ],
};
