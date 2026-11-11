// German A1 for moving abroad, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Food shopping',
  goal: 'Buy food at the bakery, the market and the supermarket, ask the price and pay.',
  art: 'pretzel',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['food', 'articles', 'plural', 'accusative-ein-kein', 'prices', 'shopping'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'Food words',
      about: 'Learn food words with der, die or das, and simple plurals.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Every German noun has an article: **der**, **die** or **das**. Nouns always start with a capital letter. Learn each new word with its article, because there is often no rule.' },
          { t: 'table', caption: 'Food and drink', explain: ['head', 'col2'], quiz: true, head: ['Article', 'Word', 'Meaning'], rows: [
            ['der', 'Apfel', 'apple'],
            ['der', 'Käse', 'cheese'],
            ['der', 'Reis', 'rice'],
            ['die', 'Milch', 'milk'],
            ['die', 'Tomate', 'tomato'],
            ['die', 'Banane', 'banana'],
            ['das', 'Brot', 'bread'],
            ['das', 'Brötchen', 'bread roll'],
            ['das', 'Ei', 'egg'],
            ['das', 'Wasser', 'water'],
          ] },
          { t: 'tip', art: 'owl', md: 'A small help: many words that end in *-e* are *die* words (*die Tomate*, *die Banane*). Words that end in *-chen* are always *das* words (*das Brötchen*).' },
        ],
        [
          { t: 'text', md: 'For one thing, use **ein** with *der* and *das* words and **eine** with *die* words: *ein Apfel*, *eine Banane*, *ein Ei*. In the plural, the article is always **die**, and there is no *ein*.' },
          { t: 'table', caption: 'One and many', explain: ['head'], quiz: true, head: ['One', 'Many'], rows: [
            ['der Apfel', 'die Äpfel'],
            ['die Tomate', 'die Tomaten'],
            ['die Banane', 'die Bananen'],
            ['das Brötchen', 'die Brötchen'],
            ['das Ei', 'die Eier'],
            ['die Kartoffel', 'die Kartoffeln'],
          ] },
          { t: 'examples', items: [
            { s: 'Ich kaufe **zwei Äpfel**.', n: '*der Apfel*, plural *die Äpfel*: the *A* becomes *Ä*.' },
            { s: 'Wir brauchen **sechs Eier**.', n: '*das Ei*, plural *die Eier*.' },
            { s: 'Vier **Brötchen**, bitte.', n: 'Words with *-chen* do not change in the plural.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'picture', h: 'What is it?', items: [
            { pic: 'apple', o: ['der Apfel', 'die Banane', 'das Ei'], why: '*der Apfel*, plural *die Äpfel*.' },
            { pic: 'bread', o: ['das Brot', 'der Käse', 'die Milch'], why: '*das Brot*. A small one is *das Brötchen*.' },
            { pic: 'cheese', o: ['der Käse', 'das Brot', 'die Tomate'], why: '*der Käse*. It has the same form in the plural.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'der, die or das?', groups: ['der', 'die', 'das'], items: [
            { s: 'Apfel', g: 0, why: '*der Apfel*.' },
            { s: 'Reis', g: 0, why: '*der Reis*.' },
            { s: 'Milch', g: 1, why: '*die Milch*.' },
            { s: 'Banane', g: 1, why: '*die Banane*: many words with *-e* are *die* words.' },
            { s: 'Brötchen', g: 2, why: '*das Brötchen*: words with *-chen* are *das* words.' },
            { s: 'Wasser', g: 2, why: '*das Wasser*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'wordform', h: 'Write the plural of the word in capitals.', items: [
            { q: 'Ich kaufe drei ___.', base: 'Apfel', a: ['Äpfel'], why: '*der Apfel*, *die Äpfel*: *A* becomes *Ä*.' },
            { q: 'Wir brauchen zehn ___.', base: 'Ei', a: ['Eier'], why: '*das Ei*, *die Eier*.' },
            { q: 'Die ___ sind rot.', base: 'Tomate', a: ['Tomaten'], why: 'Words with *-e* often add *-n*: *die Tomaten*.' },
          ] },
          { t: 'ex', kind: 'search', h: 'Find six food words in the grid.', words: ['Brot', 'Käse', 'Apfel', 'Milch', 'Reis', 'Banane'] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'At the bakery',
      about: 'Ask for things with Ich möchte, say what you do not need, and ask the price.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'When you buy something, the thing is the object of the sentence. Then *ein* changes for *der* words only: **einen**. The same is true for **kein** (no, not any): *keinen*.' },
          { t: 'table', caption: 'ein and kein after möchte, brauche, kaufe, habe', explain: ['head'], quiz: true, head: ['Word', 'ein', 'kein'], rows: [
            ['der Kaffee', 'einen Kaffee', 'keinen Kaffee'],
            ['die Brezel', 'eine Brezel', 'keine Brezel'],
            ['das Brot', 'ein Brot', 'kein Brot'],
            ['die Brötchen (plural)', 'Brötchen', 'keine Brötchen'],
          ] },
          { t: 'examples', items: [
            { s: 'Ich möchte **einen** Kaffee, bitte.', n: '*der Kaffee* → *einen Kaffee*.' },
            { s: 'Ich brauche **keine** Tüte, danke.', n: '*die Tüte*: a bag. *keine Tüte*: no bag.' },
            { s: 'Haben Sie **ein** Brot ohne Körner?', n: '*das Brot* does not change: *ein Brot*.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'In der Bäckerei', lines: [
            { who: 'Verkäuferin', s: 'Guten Morgen! Was möchten Sie?' },
            { who: 'Mira', s: 'Guten Morgen. Ich möchte vier Brötchen und eine Brezel, bitte.' },
            { who: 'Verkäuferin', s: 'Gern. Sonst noch etwas?' },
            { who: 'Mira', s: 'Ja, einen Kaffee, bitte. Was kostet ein Brot?' },
            { who: 'Verkäuferin', s: 'Das Brot hier kostet 3,20 Euro.' },
            { who: 'Mira', s: 'Danke, heute kein Brot. Das ist alles.' },
            { who: 'Verkäuferin', s: 'Das macht 6,40 Euro. Bar oder mit Karte?' },
            { who: 'Mira', s: 'Mit Karte, bitte.' },
          ] },
          { t: 'text', md: 'Prices: **3,20 €** is *drei Euro zwanzig*. Germans write a comma, not a point. **0,90 €** is *neunzig Cent*. Ask *Was kostet …?* for one thing and *Was kosten …?* for many things.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'einen, eine or ein?', items: [
            { q: 'Ich möchte ___ Kaffee, bitte.', o: ['einen', 'eine', 'ein'], why: '*der Kaffee*: *einen Kaffee*.' },
            { q: 'Ich nehme ___ Brezel.', o: ['eine', 'einen', 'ein'], why: '*die Brezel*: *eine Brezel*.' },
            { q: 'Wir brauchen ___ Brot.', o: ['ein', 'einen', 'eine'], why: '*das Brot*: *ein Brot*, no change.' },
            { q: 'Ich kaufe ___ Apfel.', o: ['einen', 'ein', 'eine'], why: '*der Apfel*: *einen Apfel*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Say no. Write the sentence with kein.', items: [
            { q: 'Ich brauche eine Tüte.', cue: 'Ich brauche', a: ['Ich brauche keine Tüte.'], why: '*eine* → *keine*.' },
            { q: 'Ich möchte einen Kaffee.', cue: 'Ich möchte', a: ['Ich möchte keinen Kaffee.'], why: '*einen* → *keinen*.' },
            { q: 'Wir haben ein Brot.', cue: 'Wir haben', a: ['Wir haben kein Brot.'], why: '*ein* → *kein*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'bank', h: 'Complete the dialogue in the shop.', extra: ['kostet', 'keinen'], items: [
            { q: 'Guten Tag! Was ___ Sie?', a: 'möchten', why: '*Was möchten Sie?*: What would you like?' },
            { q: 'Was ___ die Äpfel?', a: 'kosten', why: '*die Äpfel* is plural: *kosten*.' },
            { q: 'Sonst noch ___?', a: 'etwas', why: '*Sonst noch etwas?*: Anything else?' },
            { q: 'Bar oder mit ___?', a: 'Karte', why: 'Cash or card: *bar oder mit Karte*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the price and how you say it.', pairs: [
            ['1,50 €', 'ein Euro fünfzig'],
            ['2,99 €', 'zwei Euro neunundneunzig'],
            ['0,80 €', 'achtzig Cent'],
            ['12,00 €', 'zwölf Euro'],
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Lists, prices and receipts',
      about: 'Read a shopping list, a sign at the market and a receipt.',
      art: 'snail',
      spreads: [
        [
          { t: 'reading', title: 'Einkaufsliste', md: 'Milch\n6 Eier\n1 kg Kartoffeln\nReis\n4 Tomaten\nKäse\nKein Brot, wir haben noch Brot.' },
          { t: 'reading', title: 'Markt: Obst und Gemüse', md: 'Äpfel: 1 kg 2,49 €\nBananen: 1 kg 1,79 €\nTomaten: 500 g 1,99 €\nKartoffeln: 2 kg 2,50 €\n\nHeute im Angebot: Erdbeeren, 500 g nur 2,99 €' },
          { t: 'ex', kind: 'tf', h: 'Read the list and the sign. True or false?', items: [
            { q: 'Auf der Liste steht Brot.', a: 'f', why: '*Kein Brot*: they still have bread.' },
            { q: 'Zwei Kilo Kartoffeln kosten 2,50 Euro.', a: 't', why: '*Kartoffeln: 2 kg 2,50 €.*' },
            { q: 'Ein Kilo Bananen kostet 2,49 Euro.', a: 'f', why: 'Bananas cost 1,79 € a kilo. 2,49 € is the price for apples.' },
            { q: 'Erdbeeren sind heute billig.', a: 't', why: '*im Angebot*: on offer, cheaper today.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Kassenbon', md: 'Milch 1 l 1,19\nEier 6 Stück 2,29\nReis 1 kg 1,89\nKäse 1,99\nTüte 0,20\n\nSumme EUR 7,56\nKarte 7,56\n\nVielen Dank für Ihren Einkauf!' },
          { t: 'ex', kind: 'choice', h: 'Read the receipt. Choose the answer.', items: [
            { q: 'Was kostet der Reis?', o: ['1,89 €', '1,19 €', '7,56 €'], why: '*Reis 1 kg 1,89.*' },
            { q: 'Wie bezahlt die Person?', o: ['mit Karte', 'bar', 'mit dem Handy'], why: 'The receipt says *Karte 7,56*.' },
            { q: 'Was kostet die Tüte?', o: ['20 Cent', '2 Euro', '1,20 Euro'], why: '*Tüte 0,20*: twenty cents.' },
          ] },
          { t: 'tip', art: 'owl', md: 'A *Kassenbon* is a receipt. In German supermarkets you often pay for a bag (*die Tüte*), so many people bring their own. *1 l* is *ein Liter*, *1 kg* is *ein Kilo*, *500 g* is *fünfhundert Gramm*.' },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the three things sold by weight, in kilos or grams.', items: [
            { s: '[Äpfel]: 1 kg 2,49 €. Milch: 1 l 1,19 €. [Tomaten]: 500 g 1,99 €. Eier: 6 Stück 2,29 €. [Kartoffeln]: 2 kg 2,50 €.', why: '*kg* and *g* are for weight. Milk is in litres, eggs by the piece (*Stück*).' },
          ] },
          { t: 'ex', kind: 'odd', h: 'Which word is the odd one out?', items: [
            { o: ['die Tüte', 'der Apfel', 'die Banane', 'die Tomate'], why: 'A bag is not food. The others are fruit and vegetables.' },
            { o: ['die Milch', 'der Euro', 'der Cent', 'der Preis'], why: 'Milk is food. The others are about money.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Ich möchte ___ Kaffee, bitte.', o: ['einen', 'eine', 'ein'], why: '*der Kaffee*: *einen*.' },
      { q: 'Ich brauche ___ Tüte, danke.', o: ['keine', 'keinen', 'kein'], why: '*die Tüte*: *keine*.' },
      { q: 'Was ___ die Tomaten?', o: ['kosten', 'kostet', 'koste'], why: 'Plural: *kosten*.' },
      { q: '4,50 € = ___', o: ['vier Euro fünfzig', 'fünfzig Euro vier', 'vierzig Euro fünf'], why: 'First the euros, then the cents.' },
    ] },
    { t: 'ex', kind: 'picture', h: 'What is it?', items: [
      { pic: 'bread', o: ['das Brot', 'der Apfel', 'die Milch'], why: '*das Brot*.' },
      { pic: 'apple', o: ['der Apfel', 'der Käse', 'das Ei'], why: '*der Apfel*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Ich kaufe sechs ___. (das Ei, plural)', a: ['Eier'], why: '*das Ei*, *die Eier*.' },
      { q: 'Bar oder mit ___?', a: ['Karte'], why: 'Cash or card.' },
      { q: 'Sonst noch ___?', a: ['etwas', 'was'], why: '*Sonst noch etwas?*' },
    ] },
    { t: 'ex', kind: 'sort', h: 'der, die or das?', groups: ['der', 'die', 'das'], items: [
      { s: 'Käse', g: 0, why: '*der Käse*.' },
      { s: 'Tomate', g: 1, why: '*die Tomate*.' },
      { s: 'Ei', g: 2, why: '*das Ei*.' },
    ] },
  ],
};
