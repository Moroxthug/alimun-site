// German A1 for moving abroad, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'My neighbours',
  goal: 'Say hello to your neighbours, talk a little about yourself and accept or say no to an invitation.',
  art: 'teacup',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['neighbours', 'family', 'haben', 'mein-meine', 'invitations', 'moechten-koennen'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'Meeting the neighbours',
      about: 'Introduce yourself to a neighbour and talk about your family with haben and mein.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'In a German block of flats, people often say hello on the stairs or at the door: *Guten Tag* or *Hallo*. When you are new, it is friendly to introduce yourself: *Ich bin die neue Nachbarin* (woman) or *Ich bin der neue Nachbar* (man).' },
          { t: 'dialogue', title: 'Im Treppenhaus', lines: [
            { who: 'Fatou', s: 'Guten Tag! Ich bin Fatou Diallo. Ich bin die neue Nachbarin, aus Wohnung 4.' },
            { who: 'Herr Schmidt', s: 'Ah, guten Tag, Frau Diallo! Ich bin Herr Schmidt. Ich wohne hier unten, in Wohnung 1.' },
            { who: 'Fatou', s: 'Freut mich. Wohnen Sie schon lange hier?' },
            { who: 'Herr Schmidt', s: 'Ja, schon zwanzig Jahre. Haben Sie Familie?' },
            { who: 'Fatou', s: 'Ja, ich habe einen Mann und zwei Kinder. Mein Sohn ist sechs und meine Tochter ist drei.' },
            { who: 'Herr Schmidt', s: 'Schön! Ich habe auch Enkel. Herzlich willkommen im Haus!' },
          ] },
          { t: 'tip', art: 'owl', md: 'Neighbours usually say *Sie* to each other, especially older people. Young neighbours often say *du*. Wait and listen, or ask: *Sagen wir du?*' },
        ],
        [
          { t: 'text', md: 'Use **haben** (to have) to talk about family. After *haben*, *ein* becomes *einen* for *der* words: *Ich habe **einen** Bruder.*' },
          { t: 'table', caption: 'haben', explain: ['head'], quiz: true, head: ['Person', 'haben'], rows: [
            ['ich', 'habe'],
            ['du', 'hast'],
            ['er / sie / es', 'hat'],
            ['wir', 'haben'],
            ['ihr', 'habt'],
            ['sie / Sie', 'haben'],
          ] },
          { t: 'table', caption: 'Family', explain: ['head', 'col1'], quiz: true, head: ['German', 'Meaning'], rows: [
            ['der Mann / die Frau', 'husband / wife'],
            ['der Sohn / die Tochter', 'son / daughter'],
            ['der Bruder / die Schwester', 'brother / sister'],
            ['die Kinder', 'children'],
            ['die Eltern', 'parents'],
          ] },
        ],
        [
          { t: 'text', md: '**mein** means *my*. Use *mein* with *der* and *das* words and **meine** with *die* words and the plural: *mein Sohn*, *meine Tochter*, *meine Kinder*.' },
          { t: 'examples', items: [
            { s: 'Das ist **mein** Mann, Ibrahim.', n: '*der Mann* → *mein Mann*.' },
            { s: 'Das ist **meine** Tochter, Amara.', n: '*die Tochter* → *meine Tochter*.' },
            { s: 'Das sind **meine** Kinder.', n: 'Plural → *meine*. Also *Das sind*, not *Das ist*.' },
          ] },
          { t: 'ex', kind: 'select', h: 'mein or meine?', items: [
            { q: 'Das ist ___ Sohn.', o: ['mein', 'meine', 'meinen'], why: '*der Sohn*: *mein*.' },
            { q: 'Das ist ___ Schwester.', o: ['meine', 'mein', 'meinen'], why: '*die Schwester*: *meine*.' },
            { q: 'Das sind ___ Eltern.', o: ['meine', 'mein', 'meinen'], why: 'Plural: *meine*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the forms of haben.', verb: 'haben', tense: 'present', rows: [
            ['ich', 'habe'],
            ['du', 'hast'],
            ['er / sie / es', 'hat'],
            ['wir', 'haben'],
            ['Sie', 'haben'],
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'Fatou wohnt in Wohnung 1.', a: 'f', why: 'Fatou lives in flat 4. Herr Schmidt lives in flat 1.' },
            { q: 'Herr Schmidt wohnt schon lange im Haus.', a: 't', why: '*schon zwanzig Jahre*.' },
            { q: 'Fatou hat zwei Kinder.', a: 't', why: '*Ich habe einen Mann und zwei Kinder.*' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
            { q: 'Ich bin die neue ___. (woman, neighbour)', a: ['Nachbarin'], why: 'A woman: *die Nachbarin*. A man: *der Nachbar*.' },
            { q: '___ Sie Kinder? (haben)', a: ['Haben'], why: 'A yes/no question starts with the verb.' },
            { q: 'Er ___ eine Schwester. (haben)', a: ['hat'], why: '*er hat*: *haben* is irregular.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Coffee on Sunday?',
      about: 'Invite people with möchten and können, and say yes or no politely.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'To invite someone, ask with **möchten** (would like) or **Hast du Zeit? / Haben Sie Zeit?** With *möchten* and *können*, the second verb goes to the **end** of the sentence.' },
          { t: 'table', caption: 'möchten and können', explain: ['head'], quiz: true, head: ['Person', 'möchten', 'können'], rows: [
            ['ich', 'möchte', 'kann'],
            ['du', 'möchtest', 'kannst'],
            ['er / sie / es', 'möchte', 'kann'],
            ['wir', 'möchten', 'können'],
            ['Sie', 'möchten', 'können'],
          ] },
          { t: 'examples', items: [
            { s: 'Möchten Sie einen Kaffee **trinken**?', n: '*möchten* first in the question, *trinken* at the end.' },
            { s: 'Kannst du am Samstag **kommen**?', n: '*können* + infinitive at the end.' },
            { s: 'Leider kann ich nicht. Ich **arbeite**.', n: 'Say *leider* (unfortunately) and give a short reason.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'An der Tür', lines: [
            { who: 'Sabine', s: 'Hallo Fatou! Ich bin Sabine, aus Wohnung 3. Wir können du sagen, oder?' },
            { who: 'Fatou', s: 'Ja, gern! Hallo Sabine.' },
            { who: 'Sabine', s: 'Hast du am Sonntag Zeit? Möchtest du Kaffee trinken? Ich backe einen Kuchen.' },
            { who: 'Fatou', s: 'Am Sonntag? Ja, gern! Um wie viel Uhr?' },
            { who: 'Sabine', s: 'Um drei. Deine Kinder können auch kommen.' },
            { who: 'Fatou', s: 'Danke, das ist sehr nett. Kann mein Mann auch kommen?' },
            { who: 'Sabine', s: 'Natürlich! Bis Sonntag!' },
          ] },
          { t: 'tip', art: 'owl', md: 'Coffee and cake (*Kaffee und Kuchen*) on a Sunday afternoon is a German tradition. If you cannot come, say so: *Danke, aber leider kann ich nicht.* People like a clear answer.' },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Yes or no to the invitation?', groups: ['yes', 'no'], explain: ['groups'], items: [
            { s: 'Ja, gern!', g: 0, why: '*gern*: with pleasure.' },
            { s: 'Gute Idee! Ich komme.', g: 0, why: '*Ich komme*: I am coming.' },
            { s: 'Super, bis Sonntag!', g: 0, why: '*Bis Sonntag*: see you on Sunday.' },
            { s: 'Leider kann ich nicht.', g: 1, why: '*leider*: unfortunately.' },
            { s: 'Am Sonntag habe ich keine Zeit.', g: 1, why: '*keine Zeit*: no time.' },
            { s: 'Danke, aber ich arbeite.', g: 1, why: 'A short reason: I am working.' },
          ] },
          { t: 'ex', kind: 'colloc', h: 'Which words go with the verb?', items: [
            { key: 'trinken', o: ['einen Kaffee', 'einen Tee', 'ein Wasser', 'einen Kuchen'], a: [0, 1, 2], why: 'You drink coffee, tea and water. You eat cake: *Kuchen essen*.' },
            { key: 'haben', o: ['Zeit', 'Kinder', 'einen Bruder', 'neu'], a: [0, 1, 2], why: '*Zeit haben*, *Kinder haben*, *einen Bruder haben*. *neu* goes with *sein*: *Ich bin neu.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Möchten Sie einen Kaffee trinken?', why: '*Möchten* first, *trinken* at the end.' },
            { a: 'Hast du am Samstag Zeit?', why: 'A yes/no question starts with the verb *hast*.' },
            { a: 'Leider kann ich heute nicht.', why: 'After *Leider*, the verb *kann* comes second, then *ich*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'Kannst du am Sonntag [kommst]?', a: ['kommen'], why: 'After *kannst*, use the infinitive at the end: *kommen*.' },
            { s: 'Ich [möchtest] einen Tee trinken.', a: ['möchte'], why: 'With *ich*: *möchte*.' },
            { s: 'Leider [ich kann] nicht.', a: ['kann ich'], why: 'After *Leider*, the verb comes second: *Leider kann ich nicht.*' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Notes in the house',
      about: 'Read a note in the hallway, a note about a parcel and an invitation.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Neighbours often write notes and put them on the door or in the hallway. Many houses have quiet times: after 22 Uhr and often on Sunday, people want quiet.' },
          { t: 'reading', title: 'Liebe Nachbarn', md: 'Liebe Nachbarn,\n\nam Samstag hat unsere Tochter Geburtstag. Wir haben am Abend eine Party. Die Musik ist vielleicht ein bisschen laut. Um 22 Uhr machen wir die Musik leise.\n\nSie haben ein Problem? Klingeln Sie bitte bei uns, Wohnung 2.\n\nVielen Dank!\nFamilie Yilmaz' },
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the note. True, false or not given?', items: [
            { q: 'Die Party ist am Samstagabend.', a: 't', why: '*Am Samstag … am Abend eine Party.*' },
            { q: 'Die Musik ist bis Mitternacht laut.', a: 'f', why: 'At 22 Uhr they turn the music down: *machen wir die Musik leise*.' },
            { q: 'Familie Yilmaz wohnt in Wohnung 2.', a: 't', why: '*Klingeln Sie bitte bei uns, Wohnung 2.*' },
            { q: 'Die Tochter ist zehn Jahre alt.', a: 'ng', why: 'The note does not say how old she is.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Ein Zettel an der Tür', md: 'Hallo Frau Diallo,\n\nich habe Ihr Paket. Ich bin heute ab 18 Uhr zu Hause.\n\nViele Grüße\nK. Weber, Wohnung 5' },
          { t: 'reading', title: 'Einladung', md: 'Kaffee und Kuchen im Hof!\n\nAm Sonntag um 15 Uhr. Alle Nachbarn sind herzlich eingeladen, auch die Kinder.\n\nBringen Sie gern einen Kuchen oder Getränke mit. Tassen und Teller haben wir.\n\nBitte sagen Sie bis Freitag Bescheid: Wohnung 3, Sabine Roth.' },
          { t: 'ex', kind: 'choice', h: 'Read the two notes. Choose the answer.', items: [
            { q: 'Wo ist Fatous Paket?', o: ['in Wohnung 5', 'bei der Post', 'im Hof'], why: '*Ich habe Ihr Paket*: K. Weber from flat 5 has it.' },
            { q: 'Wann kann Fatou das Paket holen?', o: ['heute ab 18 Uhr', 'heute bis 18 Uhr', 'am Sonntag um 15 Uhr'], why: '*ab 18 Uhr*: from 6 pm.' },
            { q: 'Was bringen die Nachbarn mit?', o: ['einen Kuchen oder Getränke', 'Tassen und Teller', 'ein Paket'], why: 'Cups and plates are there: *Tassen und Teller haben wir.*' },
          ] },
        ],
        [
          { t: 'tip', art: 'owl', md: 'When you are not at home, the delivery service often gives your parcel to a neighbour. Then you find a note in your letterbox or on your door. It is polite to say thank you.' },
          { t: 'ex', kind: 'spot', h: 'Tap the day and the time of the coffee afternoon.', items: [
            { s: 'Am [Sonntag] um [15 Uhr]. Alle Nachbarn sind herzlich eingeladen.', why: 'The day: *Sonntag*. The time: *15 Uhr*, 3 pm.' },
          ] },
          { t: 'ex', kind: 'memory', h: 'Find the pairs: the word and its opposite.', pairs: [
            ['laut', 'leise'],
            ['ja', 'nein'],
            ['oben', 'unten'],
            ['offen', 'zu'],
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Das ist ___ Tochter.', o: ['meine', 'mein', 'meinen'], why: '*die Tochter*: *meine*.' },
      { q: 'Ich habe ___ Bruder.', o: ['einen', 'eine', 'ein'], why: '*der Bruder* after *haben*: *einen*.' },
      { q: 'Möchtest du einen Tee ___?', o: ['trinken', 'trinkst', 'trinkt'], why: 'After *möchtest*, the infinitive at the end.' },
      { q: 'You cannot come. You say: ___', o: ['Leider kann ich nicht.', 'Ja, gern!', 'Bis Sonntag!'], why: '*Leider kann ich nicht*: unfortunately I cannot.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Du ___ zwei Kinder. (haben)', a: ['hast'], why: '*du hast*.' },
      { q: '___ du am Samstag kommen? (können)', a: ['Kannst'], why: 'With *du*: *kannst*. The question starts with the verb.' },
      { q: 'Ich bin der neue ___. (man, neighbour)', a: ['Nachbar'], why: 'A man: *der Nachbar*.' },
    ] },
    { t: 'ex', kind: 'sort', h: 'Yes or no to the invitation?', groups: ['yes', 'no'], explain: ['groups'], items: [
      { s: 'Gern, ich komme!', g: 0, why: '*gern*: with pleasure.' },
      { s: 'Tut mir leid, ich habe keine Zeit.', g: 1, why: '*Tut mir leid*: sorry. *keine Zeit*: no time.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Haben Sie am Sonntag Zeit?', why: 'A yes/no question starts with the verb.' },
      { a: 'Ich möchte einen Kuchen backen.', why: '*möchte* second, *backen* at the end.' },
    ] },
  ],
};
