// German A1 for travel, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'First words for travellers',
  goal: 'Say hello and goodbye, use polite words and say who you are.',
  art: 'pretzel',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['greetings', 'polite-words', 'du-and-sie', 'sein', 'countries-and-languages', 'alphabet', 'signs'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Hello, please and thank you',
      about: 'Greet people, say goodbye and use the polite words every traveller needs.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'In German, the greeting often changes with the time of day. *Guten Morgen* is for the morning, *Guten Tag* for the day and *Guten Abend* for the evening. *Hallo* is friendly and you can use it all day.\n\nTo say goodbye, say *Auf Wiedersehen* in a shop or a hotel. With friends, say *Tschüss*.' },
          { t: 'table', caption: 'Hello and goodbye', explain: ['head', 'col1'], quiz: true, head: ['German', 'When you say it'], rows: [
            ['Guten Morgen!', 'in the morning'],
            ['Guten Tag!', 'during the day'],
            ['Guten Abend!', 'in the evening'],
            ['Gute Nacht!', 'before you go to bed'],
            ['Hallo!', 'hello, at any time, friendly'],
            ['Auf Wiedersehen!', 'goodbye, polite'],
            ['Tschüss!', 'goodbye, friendly'],
          ] },
          { t: 'tip', art: 'owl', md: 'In the south of Germany and in Austria, many people say *Grüß Gott* for hello. In Switzerland you often hear *Grüezi*. You can always answer with *Guten Tag*.' },
        ],
        [
          { t: 'text', md: 'These small words help you everywhere. *Bitte* means please, and it is also the answer to *Danke*. *Entschuldigung* is what you say to start a question to a stranger, or when you are sorry.' },
          { t: 'examples', items: [
            { s: '**Danke!** – **Bitte!**', n: 'Thank you. – You are welcome.' },
            { s: '**Vielen Dank!** – **Gern geschehen!**', n: 'Thank you very much. – My pleasure.' },
            { s: '**Entschuldigung**, wo ist das Hotel?', n: 'Excuse me, where is the hotel?' },
            { s: 'Ein Wasser, **bitte**.', n: 'Put *bitte* at the end to ask politely.' },
            { s: 'Wie bitte?', n: 'Sorry? Say this when you did not understand.' },
            { s: 'Ich verstehe nicht. Langsam, bitte.', n: 'I do not understand. Slowly, please.' },
          ] },
        ],
        [
          { t: 'text', md: 'German has two words for *you*. Use **Sie** with people you do not know: at the hotel, in a shop, in a restaurant, on the train. Use **du** with friends, family and children.\n\nWith *Sie*, the verb ends in *-en*: *Wie heißen Sie?* With *du*, it ends in *-st*: *Wie heißt du?*' },
          { t: 'dialogue', title: 'Im Hotel', lines: [
            { who: 'Rezeptionistin', s: 'Guten Abend!' },
            { who: 'Daniel', s: 'Guten Abend! Ich habe ein Zimmer hier.' },
            { who: 'Rezeptionistin', s: 'Wie heißen Sie, bitte?' },
            { who: 'Daniel', s: 'Mein Name ist Daniel Owusu.' },
            { who: 'Rezeptionistin', s: 'Herzlich willkommen, Herr Owusu! Ich bin Frau Becker. Hier ist Ihr Schlüssel.' },
            { who: 'Daniel', s: 'Vielen Dank, Frau Becker!' },
          ] },
          { t: 'tip', art: 'owl', md: 'With *Sie*, people use *Herr* (Mr) or *Frau* (Mrs, Ms) and the family name: *Herr Owusu*, *Frau Becker*.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'What do you say? Match the situation and the words.', pairs: [
            ['8 Uhr morgens im Hotel', 'Guten Morgen!'],
            ['19 Uhr im Restaurant', 'Guten Abend!'],
            ['Sie gehen aus dem Geschäft.', 'Auf Wiedersehen!'],
            ['Jemand sagt „Danke!“.', 'Bitte!'],
            ['Sie verstehen nicht.', 'Wie bitte?'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
            { q: 'Sie fragen einen Mann auf der Straße: „___, wo ist der Bahnhof?“', o: ['Entschuldigung', 'Tschüss', 'Gute Nacht'], why: 'To start a question to a stranger, say *Entschuldigung*.' },
            { q: 'Ihre Freundin geht nach Hause. Sie sagen: „___!“', o: ['Tschüss', 'Guten Morgen', 'Entschuldigung'], why: 'With friends, say goodbye with *Tschüss*.' },
            { q: 'Ein Kellner hilft Ihnen. Sie sagen: „Vielen ___!“', o: ['Dank', 'Bitte', 'Tag'], why: '*Vielen Dank* means thank you very much.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Is the question for a friend (du) or for a stranger (Sie)?', groups: ['du', 'Sie'], items: [
            { s: 'Wie heißt du?', g: 0, why: 'The verb ends in *-st*: this is the *du* form.' },
            { s: 'Wie heißen Sie?', g: 1, why: 'The verb ends in *-en* and *Sie* has a capital S.' },
            { s: 'Woher kommst du?', g: 0, why: '*kommst* with *-st*: the *du* form.' },
            { s: 'Woher kommen Sie?', g: 1, why: '*kommen Sie*: the polite form.' },
            { s: 'Sprichst du Englisch?', g: 0, why: '*sprichst* with *-st*: the *du* form.' },
            { s: 'Sprechen Sie Englisch?', g: 1, why: '*sprechen Sie*: the polite form.' },
          ] },
          { t: 'ex', kind: 'odd', h: 'Which one does not belong?', items: [
            { o: ['Guten Morgen', 'Auf Wiedersehen', 'Tschüss', 'Gute Nacht'], why: '*Guten Morgen* is hello. The others are said when you leave or go to bed.' },
            { o: ['Hallo', 'Danke', 'Vielen Dank', 'Gern geschehen'], why: '*Hallo* is a greeting. The others are about saying thank you.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Your name, your country and your languages',
      about: 'Say your name, where you come from and which languages you speak, and spell your name.',
      art: 'dog',
      spreads: [
        [
          { t: 'dialogue', title: 'In der Jugendherberge', lines: [
            { who: 'Lena', s: 'Hallo! Ich bin Lena. Wie heißt du?' },
            { who: 'Kenji', s: 'Hallo Lena, ich heiße Kenji.' },
            { who: 'Lena', s: 'Woher kommst du, Kenji?' },
            { who: 'Kenji', s: 'Ich komme aus Japan, aus Osaka. Und du?' },
            { who: 'Lena', s: 'Ich komme aus Österreich. Ich wohne in Graz.' },
            { who: 'Kenji', s: 'Sprichst du Englisch?' },
            { who: 'Lena', s: 'Ja, ein bisschen. Und du sprichst gut Deutsch!' },
            { who: 'Kenji', s: 'Danke! Ich lerne Deutsch für die Reise.' },
          ] },
          { t: 'text', md: 'To say where you come from, use *aus*: *Ich komme aus Brasilien.* To say where you live, use *in*: *Ich wohne in Lissabon.*\n\nA few countries have *der* or *die*, and then *aus* changes them: *aus der Schweiz*, *aus der Türkei*, *aus den USA*.' },
        ],
        [
          { t: 'text', md: 'The verb *sein* (to be) is irregular. You need it all the time: *Ich bin Kenji. Bist du Lena? Wir sind aus Japan.*' },
          { t: 'table', caption: 'sein', quiz: true, head: ['', 'sein'], rows: [
            ['ich', 'bin'],
            ['du', 'bist'],
            ['er / sie / es', 'ist'],
            ['wir', 'sind'],
            ['ihr', 'seid'],
            ['sie / Sie', 'sind'],
          ] },
          { t: 'examples', items: [
            { s: 'Ich **heiße** Amira. Ich **komme** aus Ägypten.', n: 'With *ich*, the verb ends in *-e*.' },
            { s: 'Ich **spreche** Arabisch, Englisch und ein bisschen Deutsch.', n: '*ein bisschen*: a little.' },
            { s: '**Sprechen Sie** Englisch?', n: 'A yes/no question starts with the verb.' },
            { s: 'Wir **sind** Touristen.', n: '*sein* with *wir*: *sind*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the verb.', verb: 'kommen', tense: 'present', rows: [
            ['ich', 'komme'],
            ['du', 'kommst'],
            ['er / sie / es', 'kommt'],
            ['wir', 'kommen'],
            ['ihr', 'kommt'],
            ['sie / Sie', 'kommen'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the right form.', items: [
            { q: 'Ich ___ Touristin. (sein)', a: ['bin'], why: '*sein* with *ich*: *ich bin*.' },
            { q: 'Woher ___ Sie? (kommen)', a: ['kommen'], why: 'With *Sie*, the verb ends in *-en*.' },
            { q: 'Wie ___ du? (heißen)', a: ['heißt', 'heisst'], why: '*heißen* with *du*: *heißt*. The *s* is already in *heiß-*, so add only *-t*.' },
            { q: 'Wir ___ aus Kanada. (sein)', a: ['sind'], why: '*sein* with *wir*: *wir sind*.' },
            { q: '___ du Spanisch? (sprechen)', a: ['Sprichst'], why: '*sprechen* changes *e* to *i* with *du*: *du sprichst*.' },
          ] },
        ],
        [
          { t: 'text', md: 'At the hotel or at the airport, people often ask *Wie schreibt man das?* (How do you write that?). Then you spell your name. Most letters sound almost as they look, but some are different.' },
          { t: 'table', caption: 'Letters to know', explain: ['head'], quiz: true, head: ['Letter', 'Say'], rows: [
            ['E', 'eh'],
            ['I', 'ih'],
            ['J', 'jott'],
            ['V', 'fau'],
            ['W', 'weh'],
            ['Y', 'üpsilon'],
            ['Z', 'tsett'],
            ['ß', 'ess-tsett'],
            ['ä, ö, ü', 'a-Umlaut, o-Umlaut, u-Umlaut'],
          ] },
          { t: 'tip', art: 'owl', md: 'For a double letter, say *Doppel*: *Anna* is *A, Doppel-N, A*.' },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Ich komme aus Indien.', why: 'The verb *komme* is in second place, then *aus* and the country.' },
            { a: 'Woher kommen Sie?', why: 'The question word *woher*, then the verb, then *Sie*.' },
            { a: 'Sprechen Sie Englisch?', why: 'A yes/no question starts with the verb.' },
            { a: 'Ich wohne in Berlin.', why: 'To say where you live, use *wohnen* and *in*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Ich komme ___ Mexiko.', o: ['aus', 'in', 'nach'], why: 'Where you come from: *aus*.' },
            { q: 'Ich wohne ___ Madrid.', o: ['in', 'aus', 'bei'], why: 'Where you live: *in*.' },
            { q: 'Er kommt aus ___ Schweiz.', o: ['der', 'die', 'das'], why: '*die Schweiz* changes after *aus*: *aus der Schweiz*.' },
            { q: 'Wie schreibt man „Jana“? – ___', o: ['Jott, A, En, A', 'I, A, En, A', 'Ge, A, En, A'], why: 'The letter J is said *jott*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: a welcome note and signs',
      about: 'Read a short welcome note from a host and the signs you see on a trip.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Kofi rents a small holiday flat (*eine Ferienwohnung*) in Freiburg. On the table there is a note from the owner.' },
          { t: 'reading', title: 'Herzlich willkommen!', md: 'Hallo Kofi,\n\nherzlich willkommen in Freiburg! Ich bin Sabine, die Vermieterin. Ich wohne im Haus nebenan, Nummer 12.\n\nDas WLAN-Passwort ist auf dem Kühlschrank. Der Bäcker ist gleich links. Er ist von 7 bis 18 Uhr geöffnet. Am Sonntag ist er geschlossen.\n\nIch spreche Deutsch und Französisch, aber nur ein bisschen Englisch. Meine Telefonnummer ist 0151 000 00 12.\n\nEinen schönen Urlaub!\nSabine' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the note. True, false or not given?', items: [
            { q: 'Sabine wohnt nicht weit von der Ferienwohnung.', a: 't', why: 'She lives *im Haus nebenan*, in the house next door.' },
            { q: 'Das WLAN-Passwort ist auf dem Tisch.', a: 'f', why: 'It is *auf dem Kühlschrank*, on the fridge.' },
            { q: 'Der Bäcker ist am Sonntag geöffnet.', a: 'f', why: '*Am Sonntag ist er geschlossen.*' },
            { q: 'Sabine spricht sehr gut Englisch.', a: 'f', why: 'She speaks *nur ein bisschen Englisch*, only a little.' },
            { q: 'Kofi kommt aus Ghana.', a: 'ng', why: 'The note does not say where Kofi comes from.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the two words for open and closed.', items: [
            { s: 'Er ist von 7 bis 18 Uhr [geöffnet]. Am Sonntag ist er [geschlossen].', why: '*geöffnet*: open. *geschlossen*: closed.' },
          ] },
        ],
        [
          { t: 'text', md: 'On a trip you see the same short signs again and again: on doors, in stations and in shops.' },
          { t: 'table', caption: 'Signs', explain: ['head', 'col1'], quiz: true, head: ['Sign', 'Meaning'], rows: [
            ['Eingang', 'way in'],
            ['Ausgang', 'way out'],
            ['Toiletten / WC', 'toilets'],
            ['Geöffnet', 'open'],
            ['Geschlossen', 'closed'],
            ['Drücken', 'push'],
            ['Ziehen', 'pull'],
            ['Information', 'where you can ask questions'],
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the sign and the sentence.', pairs: [
            ['Ausgang', 'Hier gehen Sie hinaus.'],
            ['Eingang', 'Hier gehen Sie hinein.'],
            ['Geschlossen', 'Heute können Sie nicht hinein.'],
            ['Ziehen', 'Die Tür kommt zu Ihnen.'],
            ['Information', 'Hier können Sie fragen.'],
          ] },
          { t: 'ex', kind: 'memory', h: 'Find the pairs: the word and its opposite.', pairs: [
            ['Eingang', 'Ausgang'],
            ['geöffnet', 'geschlossen'],
            ['drücken', 'ziehen'],
            ['Hallo', 'Tschüss'],
            ['Guten Morgen', 'Guten Abend'],
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Es ist 20 Uhr. Sie kommen ins Restaurant und sagen: „___!“', o: ['Guten Abend', 'Guten Morgen', 'Gute Nacht'], why: 'In the evening, say *Guten Abend*. *Gute Nacht* is for going to bed.' },
      { q: 'Jemand sagt: „Vielen Dank!“ Sie antworten: „___!“', o: ['Gern geschehen', 'Entschuldigung', 'Auf Wiedersehen'], why: '*Gern geschehen*: you are welcome.' },
      { q: 'Sie fragen eine Frau im Hotel: „Wie ___ Sie?“', o: ['heißen', 'heißt', 'heiße'], why: 'With *Sie*, the verb ends in *-en*.' },
      { q: 'Ich komme ___ Polen.', o: ['aus', 'in', 'zu'], why: 'Where you come from: *aus*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Wir ___ aus Brasilien. (sein)', a: ['sind'], why: '*sein* with *wir*: *sind*.' },
      { q: 'Du ___ gut Deutsch! (sprechen)', a: ['sprichst'], why: '*sprechen* with *du*: *sprichst*.' },
      { q: 'Ich ___ in Rom. (wohnen)', a: ['wohne'], why: 'With *ich*, the verb ends in *-e*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
      { a: 'Woher kommst du?', why: 'Question word, then the verb, then *du*.' },
      { a: 'Sprechen Sie Englisch?', why: 'A yes/no question starts with the verb.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: '„Ausgang“ heißt: Hier gehen Sie hinein.', a: 'f', why: '*Ausgang* is the way out. The way in is *Eingang*.' },
      { q: 'Im Hotel sagen Sie zur Rezeptionistin „Sie“.', a: 't', why: 'Use *Sie* with people you do not know.' },
      { q: '„Geschlossen“ heißt: Heute können Sie nicht hinein.', a: 't', why: '*geschlossen* means closed, so you cannot go in.' },
      { q: '„Tschüss“ sagt man zu Freunden.', a: 't', why: '*Tschüss* is a friendly goodbye.' },
    ] },
  ],
};
