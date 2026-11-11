// German A1 for work, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Things at work',
  goal: 'Name things at work, say what you need and ask for help.',
  art: 'teacup',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['office', 'articles', 'plural', 'accusative', 'kein', 'asking-for-help', 'workplace'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'What do you need?',
      about: 'Name things at work with der, die, das and say what you need with einen, eine, ein.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'Every German noun has an article: **der**, **die** or **das**. Learn the article with the word. In the plural the article is always **die**.' },
          { t: 'table', caption: 'Things at work', explain: ['head'], quiz: true, head: ['Singular', 'Plural'], rows: [
            ['der Computer', 'die Computer'],
            ['der Drucker', 'die Drucker'],
            ['der Stift', 'die Stifte'],
            ['der Schlüssel', 'die Schlüssel'],
            ['der Stuhl', 'die Stühle'],
            ['die Tasse', 'die Tassen'],
            ['die Schere', 'die Scheren'],
            ['das Telefon', 'die Telefone'],
            ['das Papier', '(no plural)'],
          ] },
          { t: 'tip', art: 'owl', md: 'Many people say *der Kuli* for a pen. It is short for *der Kugelschreiber*.' },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'der, die or das?', groups: ['der', 'die', 'das'], items: [
            { s: 'Drucker', g: 0, why: '*der Drucker*.' },
            { s: 'Tasse', g: 1, why: '*die Tasse*. Many words that end in *-e* are *die* words.' },
            { s: 'Telefon', g: 2, why: '*das Telefon*.' },
            { s: 'Schlüssel', g: 0, why: '*der Schlüssel*.' },
            { s: 'Schere', g: 1, why: '*die Schere*: it ends in *-e*.' },
            { s: 'Papier', g: 2, why: '*das Papier*.' },
            { s: 'Stuhl', g: 0, why: '*der Stuhl*.' },
          ] },
          { t: 'ex', kind: 'picture', h: 'What is it?', items: [
            { pic: 'key', o: ['der Schlüssel', 'der Stift', 'die Tasse'], why: 'A key: *der Schlüssel*, plural *die Schlüssel*.' },
            { pic: 'phone', o: ['das Telefon', 'der Drucker', 'der Computer'], why: 'A phone: *das Telefon*.' },
            { pic: 'clock', o: ['die Uhr', 'die Schere', 'das Papier'], why: 'A clock: *die Uhr*. *Wie viel Uhr ist es?* uses the same word.' },
          ] },
        ],
        [
          { t: 'text', md: 'After **brauchen** (to need) and **haben**, use the accusative. Only *der* words change: *ein* becomes **einen**, *kein* becomes **keinen**. *Eine*, *ein* (for *das*), *keine* and *kein* (for *das*) stay the same.' },
          { t: 'table', caption: 'The accusative of ein and kein', explain: ['head'], quiz: true, head: ['Word', 'Ich brauche …', 'Ich habe …'], rows: [
            ['der Stift', 'einen Stift', 'keinen Stift'],
            ['die Tasse', 'eine Tasse', 'keine Tasse'],
            ['das Telefon', 'ein Telefon', 'kein Telefon'],
            ['die Stifte (plural)', 'Stifte', 'keine Stifte'],
          ] },
          { t: 'examples', items: [
            { s: 'Ich brauche **einen** Kuli. Haben Sie **einen** Kuli?', n: '*der Kuli*: *einen*.' },
            { s: 'Ich habe **keinen** Schlüssel für das Büro.', n: '*der Schlüssel*: *keinen*.' },
            { s: 'Wir brauchen Papier für den Drucker.', n: 'With *Papier* there is often no article.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write einen, eine, ein or keinen, keine, kein.', items: [
            { q: 'Ich brauche ___ Stift. (ein)', a: ['einen'], why: '*der Stift*: *einen*.' },
            { q: 'Haben Sie ___ Schere? (ein)', a: ['eine'], why: '*die Schere*: *eine* does not change.' },
            { q: 'Ich habe ___ Schlüssel. (kein)', a: ['keinen'], why: '*der Schlüssel*: *keinen*.' },
            { q: 'Im Büro gibt es ___ Telefon. (kein)', a: ['kein'], why: '*das Telefon*: *kein* does not change.' },
            { q: 'Wir brauchen ___ Tasse für den Gast. (ein)', a: ['eine'], why: '*die Tasse*: *eine*.' },
          ] },
          { t: 'ex', kind: 'crossword', h: 'Things at work. Solve the crossword.', words: [
            { a: 'Drucker', clue: 'Er druckt Papier.' },
            { a: 'Schere', clue: 'Sie schneidet Papier.' },
            { a: 'Tasse', clue: 'Man trinkt Kaffee. Man braucht eine …' },
            { a: 'Stuhl', clue: 'Hier sitzt man am Tisch.' },
            { a: 'Telefon', clue: 'Hier sagt man: Hallo, hier ist …' },
            { a: 'Schlüssel', clue: 'Er öffnet die Tür.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Can you help me?',
      about: 'Ask for help, say that something does not work and ask where things are.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'When you need help, start with **Entschuldigung** (excuse me). Learn *Können Sie mir helfen?* and *Kannst du mir helfen?* as whole phrases: *mir* means *me* here.\n\nWhen a thing does not work, say: *Der Drucker ist **kaputt**.* or *Das Telefon **funktioniert nicht**.*' },
          { t: 'dialogue', title: 'The printer', lines: [
            { who: 'Fatima', s: 'Entschuldigung, Herr Kaya. Können Sie mir helfen?' },
            { who: 'Herr Kaya', s: 'Ja, gern. Was ist das Problem?' },
            { who: 'Fatima', s: 'Der Drucker funktioniert nicht.' },
            { who: 'Herr Kaya', s: 'Hm. Er hat kein Papier. Das Papier ist dort, im Schrank links.' },
            { who: 'Fatima', s: 'Ah, danke! Und wo ist die Schere?' },
            { who: 'Herr Kaya', s: 'Sie ist hier, rechts.' },
            { who: 'Fatima', s: 'Vielen Dank!' },
            { who: 'Herr Kaya', s: 'Bitte, gern.' },
          ] },
        ],
        [
          { t: 'text', md: 'To talk about a thing again, use **er**, **sie** or **es**. It depends on the article: *der* becomes *er*, *die* becomes *sie*, *das* becomes *es*. *Wo ist der Drucker? **Er** ist im Flur.*' },
          { t: 'examples', items: [
            { s: 'Wo ist der Schlüssel? **Er** ist hier.', n: '*der Schlüssel*: *er*.' },
            { s: 'Wo ist die Tasse? **Sie** ist dort.', n: '*die Tasse*: *sie*.' },
            { s: 'Das Telefon? **Es** ist kaputt.', n: '*das Telefon*: *es*.' },
            { s: 'Der Computer ist **links**, der Drucker ist **rechts**.', n: '*links*: on the left. *rechts*: on the right.' },
          ] },
          { t: 'ex', kind: 'select', h: 'er, sie or es?', items: [
            { q: 'Wo ist der Drucker? ___ ist im Flur.', o: ['Er', 'Sie', 'Es'], why: '*der Drucker*: *er*.' },
            { q: 'Ist die Schere hier? Ja, ___ ist hier.', o: ['sie', 'er', 'es'], why: '*die Schere*: *sie*.' },
            { q: 'Das Telefon funktioniert nicht. ___ ist kaputt.', o: ['Es', 'Er', 'Sie'], why: '*das Telefon*: *es*.' },
            { q: 'Wo ist der Schlüssel? ___ ist dort, rechts.', o: ['Er', 'Es', 'Sie'], why: '*der Schlüssel*: *er*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
            { q: 'Sie brauchen Hilfe. Sie sagen:', o: ['Entschuldigung, können Sie mir helfen?', 'Bitte, gern.', 'Der Drucker ist im Flur.'], why: '*Entschuldigung* first, then *Können Sie mir helfen?*' },
            { q: 'Der Computer funktioniert nicht. Sie sagen:', o: ['Der Computer ist kaputt.', 'Der Computer ist links.', 'Der Computer ist neu.'], why: '*kaputt*: it does not work.' },
            { q: 'Sie suchen den Schlüssel. Sie fragen:', o: ['Wo ist der Schlüssel?', 'Wer ist der Schlüssel?', 'Wann ist der Schlüssel?'], why: '*wo*: where.' },
            { q: 'Ein Kollege sagt: Vielen Dank! Sie sagen:', o: ['Bitte, gern.', 'Entschuldigung.', 'Wie bitte?'], why: 'The answer to *danke*: *Bitte* or *Gern*.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the conversation. True or false?', items: [
            { q: 'Der Drucker hat kein Papier.', a: 't', why: '*Er hat kein Papier.*' },
            { q: 'Das Papier ist im Schrank rechts.', a: 'f', why: 'It is *im Schrank links*.' },
            { q: 'Die Schere ist rechts.', a: 't', why: '*Sie ist hier, rechts.*' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Kannst du mir bitte helfen?', why: '*kannst* first, *helfen* at the end.' },
            { a: 'Das Telefon funktioniert nicht.', why: '*nicht* comes after the verb here.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: a notice in the kitchen',
      about: 'Read a notice for new staff in the office kitchen.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'In many offices there is a small kitchen for the staff, the **Teeküche**. Read the notice on the door.' },
          { t: 'reading', title: 'Willkommen in der Teeküche!', md: 'Liebe neue Kolleginnen und Kollegen,\n\nhier gibt es eine Kaffeemaschine, einen Wasserkocher und einen Kühlschrank. Kaffee und Tee sind gratis.\n\nDie Tassen sind im Schrank links. Die Teller sind im Schrank rechts. Bitte spülen Sie Ihre Tasse.\n\nDer Kühlschrank ist für alle. Bitte schreiben Sie Ihren Namen auf Ihr Essen.\n\nDer Drucker ist nicht hier. Er ist im Flur, neben Büro 12. Papier ist auch im Flur, im Schrank rechts.\n\nDie Kaffeemaschine ist kaputt? Der Drucker funktioniert nicht? Rufen Sie bitte Herrn Kaya an: Telefon 15.\n\nViele Grüße\nIhr Büroteam' },
          { t: 'tip', art: 'owl', md: '*gratis* means free: you do not pay. *spülen*: to wash the dishes.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the notice. True, false or not given?', items: [
            { q: 'Der Kaffee kostet einen Euro.', a: 'f', why: '*Kaffee und Tee sind gratis.*' },
            { q: 'Die Tassen sind im Schrank links.', a: 't', why: '*Die Tassen sind im Schrank links.*' },
            { q: 'Der Drucker ist in der Teeküche.', a: 'f', why: '*Der Drucker ist nicht hier. Er ist im Flur.*' },
            { q: 'Herr Kaya hat die Telefonnummer 15.', a: 't', why: '*Rufen Sie bitte Herrn Kaya an: Telefon 15.*' },
            { q: 'Die Teeküche ist im ersten Stock.', a: 'ng', why: 'The notice does not say where the kitchen is.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Was gibt es in der Teeküche?', o: ['einen Kühlschrank', 'einen Drucker', 'einen Computer'], why: '*hier gibt es eine Kaffeemaschine, einen Wasserkocher und einen Kühlschrank.*' },
            { q: 'Was schreiben Sie auf Ihr Essen?', o: ['Ihren Namen', 'Ihre Telefonnummer', 'die Uhrzeit'], why: '*Bitte schreiben Sie Ihren Namen auf Ihr Essen.*' },
            { q: 'Die Kaffeemaschine ist kaputt. Was machen Sie?', o: ['Ich rufe Herrn Kaya an.', 'Ich spüle die Tasse.', 'Ich gehe in den Flur.'], why: '*Die Kaffeemaschine ist kaputt? … Rufen Sie bitte Herrn Kaya an.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the three polite requests: the verbs that come before Sie.', items: [
            { s: 'Bitte [spülen] Sie Ihre Tasse. Bitte [schreiben] Sie Ihren Namen auf Ihr Essen. [Rufen] Sie bitte Herrn Kaya an.', why: 'In a polite request the verb comes before *Sie*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Ich brauche ___ Stift.', o: ['einen', 'eine', 'ein'], why: '*der Stift*: *einen* after *brauchen*.' },
      { q: 'Wo ist die Tasse? ___ ist im Schrank.', o: ['Sie', 'Er', 'Es'], why: '*die Tasse*: *sie*.' },
      { q: 'Das Telefon funktioniert nicht. Es ist ___.', o: ['kaputt', 'gratis', 'links'], why: '*kaputt*: it does not work.' },
      { q: 'Sie brauchen Hilfe. Sie sagen:', o: ['Können Sie mir helfen?', 'Bitte, gern.', 'Wo ist er?'], why: '*Können Sie mir helfen?* asks for help.' },
    ] },
    { t: 'ex', kind: 'sort', h: 'der, die or das?', groups: ['der', 'die', 'das'], items: [
      { s: 'Computer', g: 0, why: '*der Computer*.' },
      { s: 'Schere', g: 1, why: '*die Schere*.' },
      { s: 'Telefon', g: 2, why: '*das Telefon*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Ich habe ___ Schlüssel. (kein)', a: ['keinen'], why: '*der Schlüssel*: *keinen*.' },
      { q: 'Haben Sie ___ Schere? (ein)', a: ['eine'], why: '*die Schere*: *eine*.' },
      { q: 'Wo ist der Drucker? ___ ist im Flur.', a: ['Er'], why: '*der Drucker*: *er*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'Ich brauche [ein] Kuli.', a: ['einen'], why: '*der Kuli*: *einen* after *brauchen*.' },
      { s: 'Wir haben zwei [Stuhl].', a: ['Stühle'], why: 'The plural of *der Stuhl* is *die Stühle*.' },
    ] },
  ],
};
