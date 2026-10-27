// German A1 for travel, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Shopping and souvenirs',
  goal: 'Ask about prices, colours and sizes and buy a souvenir.',
  art: 'mug',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['shopping', 'souvenirs', 'prices', 'plurals', 'colours', 'adjectives', 'nicht-and-kein', 'war-and-hatte'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Souvenirs and prices',
      about: 'Ask what things cost, say what you take and talk about a thing again with der, die or das.',
      art: 'pretzel',
      spreads: [
        [
          { t: 'dialogue', title: 'Im Souvenirladen', lines: [
            { who: 'Verkäuferin', s: 'Guten Tag! Kann ich Ihnen helfen?' },
            { who: 'Ben', s: 'Ja, gern. Was kostet die Tasse hier?' },
            { who: 'Verkäuferin', s: 'Die kostet 9 Euro.' },
            { who: 'Ben', s: 'Und was kosten die Postkarten?' },
            { who: 'Verkäuferin', s: 'Eine Postkarte kostet 1 Euro. Fünf Postkarten kosten 4 Euro.' },
            { who: 'Ben', s: 'Dann nehme ich die Tasse und fünf Postkarten.' },
            { who: 'Verkäuferin', s: 'Gern. Das macht 13 Euro. Brauchen Sie eine Tüte?' },
            { who: 'Ben', s: 'Nein, danke. Ich habe eine Tasche.' },
          ] },
          { t: 'text', md: 'For one thing, ask *Was kostet …?* For two or more things, ask *Was kosten …?* The verb changes with the plural.' },
        ],
        [
          { t: 'text', md: 'German plurals have different endings. Learn the plural with the word. In the plural, the article is always **die**.' },
          { t: 'table', caption: 'Souvenirs', quiz: true, head: ['', 'one', 'two or more'], explain: ['head', 'col0'], rows: [
            ['postcard', 'die Postkarte', 'die Postkarten'],
            ['cup', 'die Tasse', 'die Tassen'],
            ['T-shirt', 'das T-Shirt', 'die T-Shirts'],
            ['magnet', 'der Magnet', 'die Magnete'],
            ['bag', 'die Tasche', 'die Taschen'],
            ['book', 'das Buch', 'die Bücher'],
            ['umbrella', 'der Regenschirm', 'die Regenschirme'],
          ] },
          { t: 'tip', art: 'owl', md: 'When you talk about a thing again, you can say *der*, *die* or *das* instead of the noun: *Die Tasse? Die kostet 9 Euro.* *Der Magnet? Der ist schön.* For plurals, say *die*: *Die Postkarten? Die kosten 1 Euro.*' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'kostet or kosten?', items: [
            { q: 'Was ___ das T-Shirt?', o: ['kostet', 'kosten', 'kostest'], why: 'One thing: *kostet*.' },
            { q: 'Was ___ die Magnete?', o: ['kosten', 'kostet', 'kostest'], why: '*die Magnete* is plural: *kosten*.' },
            { q: 'Die Bücher ___ 15 Euro.', o: ['kosten', 'kostet', 'kostest'], why: '*die Bücher* is plural: *kosten*.' },
            { q: 'Der Regenschirm ___ 12 Euro.', o: ['kostet', 'kosten', 'kostest'], why: 'One thing: *kostet*.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose der, die or das.', items: [
            { q: 'Das T-Shirt? ___ kostet 20 Euro.', o: ['Das', 'Der', 'Die'], why: '*das T-Shirt*: *Das kostet …*' },
            { q: 'Der Regenschirm? ___ ist sehr praktisch.', o: ['Der', 'Die', 'Das'], why: '*der Regenschirm*: *Der ist …*' },
            { q: 'Die Tassen? ___ sind schön.', o: ['Die', 'Der', 'Das'], why: 'Plural: *die*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'picture', h: 'What is it?', items: [
            { pic: 'umbrella', o: ['der Regenschirm', 'die Tasse', 'die Tasche'], why: 'This is *der Regenschirm*. You need it when it rains.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the plural.', items: [
            { q: 'Ich nehme drei ___. (die Postkarte)', a: ['Postkarten'], why: '*die Postkarte* becomes *die Postkarten*.' },
            { q: 'Wir kaufen zwei ___. (die Tasse)', a: ['Tassen'], why: '*die Tasse* becomes *die Tassen*.' },
            { q: 'Haben Sie auch ___ auf Englisch? (das Buch)', a: ['Bücher', 'Buecher'], why: '*das Buch* becomes *die Bücher*, with *ü*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Was kosten die Postkarten?', why: 'Plural, so *kosten*.' },
            { a: 'Ich nehme die Tasse.', why: '*nehme* in second place.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Colours and sizes',
      about: 'Ask for another colour or size and say what is wrong with nicht and kein.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'After *sein*, adjectives have no ending: *Das T-Shirt ist rot. Die Tasche ist groß.* Use *zu* when something is more than you want: *zu groß*, *zu klein*, *zu teuer*.' },
          { t: 'table', caption: 'Colours and sizes', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['rot', 'red'],
            ['blau', 'blue'],
            ['grün', 'green'],
            ['gelb', 'yellow'],
            ['schwarz', 'black'],
            ['weiß', 'white'],
            ['groß / klein', 'big / small'],
            ['teuer / billig', 'expensive / cheap'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'Im Geschäft', lines: [
            { who: 'Grace', s: 'Entschuldigung, haben Sie das T-Shirt auch in Blau?' },
            { who: 'Verkäufer', s: 'Ja, hier. Welche Größe brauchen Sie?' },
            { who: 'Grace', s: 'M, bitte.' },
            { who: 'Verkäufer', s: 'Hier ist M. Die Umkleide ist dort hinten.' },
            { who: 'Grace', s: 'Hm, das T-Shirt ist zu groß. Haben Sie S?' },
            { who: 'Verkäufer', s: 'Nein, leider nicht. In S haben wir kein T-Shirt mehr in Blau, nur in Weiß.' },
            { who: 'Grace', s: 'Weiß ist auch gut. Dann nehme ich das T-Shirt in Weiß.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Sizes for clothes are often S, M, L and XL. You say the letters in German: *Ess*, *Emm*, *Ell*, *Ix-Ell*.' },
        ],
        [
          { t: 'text', md: 'Use **nicht** to say *not* with a verb or an adjective: *Das T-Shirt ist nicht teuer.* Use **kein** in place of *ein*, or with a noun with no article: *Wir haben kein T-Shirt in S. Ich habe kein Geld.*' },
          { t: 'examples', items: [
            { s: 'Die Tasse ist **nicht** teuer.', n: '*nicht* + adjective.' },
            { s: 'Ich kaufe das **nicht**.', n: '*nicht* at the end of the sentence.' },
            { s: 'Wir haben **keine** Taschen mehr.', n: '*keine* with a plural noun.' },
            { s: 'Das ist **kein** Problem.', n: '*ein Problem* becomes *kein Problem*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write nicht, kein or keine.', items: [
            { q: 'Das Buch ist ___ teuer. Es kostet nur 5 Euro.', a: ['nicht'], why: 'With an adjective: *nicht*.' },
            { q: 'Wir haben ___ Postkarten mehr.', a: ['keine'], why: 'A plural noun: *keine*.' },
            { q: 'Das ist ___ Problem!', a: ['kein'], why: '*ein Problem* becomes *kein Problem*.' },
            { q: 'Ich nehme die Tasche ___. Sie ist zu klein.', a: ['nicht'], why: '*nicht* with the verb, at the end.' },
          ] },
          { t: 'ex', kind: 'odd', h: 'Which one does not belong?', items: [
            { o: ['teuer', 'rot', 'blau', 'gelb'], why: '*teuer* is about the price. The others are colours.' },
            { o: ['Größe', 'klein', 'groß', 'billig'], why: '*Größe* is a noun, with a capital letter. The others are adjectives.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the problem and the question.', pairs: [
            ['Das T-Shirt ist zu groß.', 'Haben Sie das auch in S?'],
            ['Ich möchte das nicht in Rot.', 'Haben Sie das auch in Blau?'],
            ['Das ist zu teuer.', 'Haben Sie auch etwas für 10 Euro?'],
            ['Ich möchte das T-Shirt anprobieren.', 'Wo ist die Umkleide?'],
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and correct it.', items: [
            { s: 'Die Tasche ist [kein] teuer.', a: ['nicht'], why: 'With an adjective: *nicht teuer*.' },
            { s: 'Wir haben [nicht] T-Shirts in XL.', a: ['keine'], why: 'With a plural noun: *keine T-Shirts*.' },
            { s: 'Das ist [nicht] Problem.', a: ['kein'], why: '*ein Problem* becomes *kein Problem*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: a postcard from a trip',
      about: 'Read a postcard about a holiday in the past.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'On a postcard, people write about their trip. They use the past. Two short forms are very common: **war** (was, from *sein*) and **hatte** (had, from *haben*): *Das Wetter war schön. Wir hatten viel Zeit.*\n\nFor other verbs, German uses *haben* and a form at the end: *Ich habe Fisch gegessen. Wir haben viel gesehen.* You will learn this better later. For now, just understand it.' },
          { t: 'reading', title: 'Liebe Grüße aus Salzburg', md: 'Liebe Hannah,\n\nviele Grüße aus Salzburg! Die Stadt ist wunderschön. Am Montag war das Wetter leider schlecht, aber heute ist es warm und sonnig.\n\nUnser Hotel ist klein und sehr nett. Gestern waren wir im Schloss und auf dem Berg. Wir haben viele Fotos gemacht. Am Abend hatten wir großen Hunger und haben in der Altstadt gegessen.\n\nHeute haben wir Souvenirs gekauft: eine Tasse für Mama und einen Magneten für dich. Die Geschäfte hier sind schön, aber leider teuer!\n\nAm Samstag fahren wir mit dem Zug zurück.\n\nBis bald!\nFatima' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the postcard. True, false or not given?', items: [
            { q: 'Am Montag war das Wetter gut.', a: 'f', why: '*Am Montag war das Wetter leider schlecht.*' },
            { q: 'Heute scheint die Sonne.', a: 't', why: '*heute ist es warm und sonnig*.' },
            { q: 'Das Hotel ist groß.', a: 'f', why: '*Unser Hotel ist klein.*' },
            { q: 'Fatima hat für Hannah einen Magneten gekauft.', a: 't', why: '*einen Magneten für dich*: *dich* is Hannah.' },
            { q: 'Das Hotel hat ein Restaurant.', a: 'ng', why: 'The postcard says they ate in the old town. It does not say if the hotel has a restaurant.' },
            { q: 'Fatima fährt mit dem Flugzeug nach Hause.', a: 'f', why: '*Am Samstag fahren wir mit dem Zug zurück.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the past forms of sein and haben.', items: [
            { s: 'Am Montag [war] das Wetter schlecht. Gestern [waren] wir im Schloss. Am Abend [hatten] wir großen Hunger.', why: '*war* and *waren* are from *sein*. *hatten* is from *haben*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Was hat Fatima für ihre Mutter gekauft?', o: ['eine Tasse', 'einen Magneten', 'eine Postkarte'], why: '*eine Tasse für Mama*.' },
            { q: 'Wo war Fatima gestern?', o: ['im Schloss und auf dem Berg', 'im Museum', 'im Zug'], why: '*Gestern waren wir im Schloss und auf dem Berg.*' },
            { q: 'Wie findet Fatima die Geschäfte?', o: ['schön, aber teuer', 'billig und schön', 'nicht schön'], why: '*Die Geschäfte hier sind schön, aber leider teuer!*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Was ___ die Postkarten?', o: ['kosten', 'kostet', 'kostest'], why: 'Plural: *kosten*.' },
      { q: 'Der Magnet? ___ kostet 4 Euro.', o: ['Der', 'Die', 'Das'], why: '*der Magnet*: *Der kostet …*' },
      { q: 'Das T-Shirt ist zu groß. Sie fragen: „Haben Sie das auch in ___?“', o: ['S', 'L', 'XL'], why: 'It is too big, so you need a smaller size.' },
      { q: 'Am Montag ___ das Wetter schlecht.', o: ['war', 'hatte', 'waren'], why: '*das Wetter* is *es*: the past of *sein* is *war*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Die Tasse ist ___ teuer. Sie kostet nur 3 Euro. (not)', a: ['nicht'], why: 'With an adjective: *nicht*.' },
      { q: 'Wir haben ___ Taschen mehr. (kein)', a: ['keine'], why: 'A plural noun: *keine*.' },
      { q: 'Ich nehme zwei ___. (die Tasse)', a: ['Tassen'], why: 'The plural of *die Tasse* is *die Tassen*.' },
    ] },
    { t: 'ex', kind: 'sort', h: 'Colour or price?', explain: ['groups'], groups: ['colour', 'price'], items: [
      { s: 'grün', g: 0, why: '*grün*: green.' },
      { s: 'teuer', g: 1, why: '*teuer*: expensive.' },
      { s: 'schwarz', g: 0, why: '*schwarz*: black.' },
      { s: 'billig', g: 1, why: '*billig*: cheap.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the question.', items: [
      { a: 'Haben Sie das T-Shirt auch in Blau?', why: 'A yes/no question starts with the verb.' },
    ] },
  ],
};
