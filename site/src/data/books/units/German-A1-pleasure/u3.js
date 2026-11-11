// German A1 for travel, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Eating out',
  goal: 'Order in a café, say what you like and pay.',
  art: 'croissant',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['cafe', 'food-and-drink', 'accusative', 'kein', 'gern', 'prices', 'menu'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'In the café: ich möchte',
      about: 'Order food and drinks with ich möchte and einen, eine, ein.',
      art: 'teacup',
      spreads: [
        [
          { t: 'dialogue', title: 'Im Café', lines: [
            { who: 'Kellnerin', s: 'Guten Tag! Was möchten Sie?' },
            { who: 'Lucas', s: 'Ich möchte einen Kaffee, bitte.' },
            { who: 'Kellnerin', s: 'Mit Milch?' },
            { who: 'Lucas', s: 'Ja, mit Milch, aber ohne Zucker.' },
            { who: 'Sara', s: 'Und ich möchte eine Apfelschorle und ein Stück Kuchen.' },
            { who: 'Kellnerin', s: 'Wir haben Apfelkuchen und Käsekuchen.' },
            { who: 'Sara', s: 'Ich nehme den Apfelkuchen.' },
            { who: 'Kellnerin', s: 'Gern. Einen Kaffee, eine Apfelschorle und einen Apfelkuchen.' },
          ] },
          { t: 'text', md: 'To order, say *Ich möchte …* or *Ich nehme …* and then what you want. *Ich möchte* means *I would like*. It is polite and you can use it everywhere.' },
        ],
        [
          { t: 'text', md: 'After *ich möchte* and *ich nehme*, the article of a *der* word changes: *ein* becomes **einen** and *der* becomes **den**. With *die* and *das* words, nothing changes.' },
          { t: 'table', caption: 'Ich möchte …', quiz: true, head: ['', 'Das ist …', 'Ich möchte …'], rows: [
            ['der Kaffee', 'ein Kaffee', 'einen Kaffee'],
            ['der Tee', 'ein Tee', 'einen Tee'],
            ['die Suppe', 'eine Suppe', 'eine Suppe'],
            ['die Cola', 'eine Cola', 'eine Cola'],
            ['das Wasser', 'ein Wasser', 'ein Wasser'],
            ['das Brötchen', 'ein Brötchen', 'ein Brötchen'],
          ] },
          { t: 'examples', items: [
            { s: 'Ich möchte **einen Tee** mit Zitrone.', n: '*der Tee*, so *einen*.' },
            { s: 'Ich nehme **den Salat**.', n: '*der Salat*: *der* becomes *den*.' },
            { s: 'Zwei Kaffee, bitte.', n: 'In a café, people often say *zwei Kaffee* without a plural ending.' },
            { s: 'Noch ein Wasser, bitte.', n: '*noch ein*: one more.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Food and drink', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['der Kaffee', 'coffee'],
            ['der Tee', 'tea'],
            ['der Saft', 'juice'],
            ['das Wasser', 'water'],
            ['das Brötchen', 'bread roll'],
            ['der Käse', 'cheese'],
            ['der Kuchen', 'cake'],
            ['die Suppe', 'soup'],
            ['der Apfel', 'apple'],
          ] },
          { t: 'ex', kind: 'picture', h: 'What is it?', items: [
            { pic: 'bread', o: ['das Brot', 'der Käse', 'der Apfel'], why: 'This is *das Brot*. A small one for breakfast is *das Brötchen*.' },
            { pic: 'cheese', o: ['der Käse', 'der Kuchen', 'die Suppe'], why: 'This is *der Käse*.' },
            { pic: 'apple', o: ['der Apfel', 'der Saft', 'das Wasser'], why: 'This is *der Apfel*. *Apfelsaft* is juice made from apples.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write einen, eine or ein.', items: [
            { q: 'Ich möchte ___ Saft, bitte. (der Saft)', a: ['einen'], why: '*der Saft* after *ich möchte*: *einen*.' },
            { q: 'Ich nehme ___ Suppe. (die Suppe)', a: ['eine'], why: '*die Suppe*: *eine* does not change.' },
            { q: 'Wir möchten ___ Wasser. (das Wasser)', a: ['ein'], why: '*das Wasser*: *ein* does not change.' },
            { q: 'Ich möchte ___ Käsebrötchen. (das Brötchen)', a: ['ein'], why: 'The last word decides: *das Brötchen*, so *das Käsebrötchen* and *ein*.' },
            { q: 'Sie nimmt ___ Kuchen. (der Kuchen)', a: ['einen'], why: '*der Kuchen*: *einen*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'build', h: 'Build the order. Two words do not belong.', items: [
            { a: 'Ich möchte einen Tee, bitte.', extra: ['ein', 'bin'], why: '*der Tee*, so *einen*. *möchte* already is the verb.' },
            { a: 'Ich nehme den Apfelkuchen.', extra: ['das', 'nimmt'], why: '*der Apfelkuchen* becomes *den*. With *ich*: *nehme*.' },
            { a: 'Was möchten Sie trinken?', extra: ['möchte', 'du'], why: 'With *Sie*: *möchten*. The infinitive *trinken* goes to the end.' },
          ] },
          { t: 'ex', kind: 'search', h: 'Find the food and drink words.', words: ['Kaffee', 'Tee', 'Saft', 'Wasser', 'Suppe', 'Kuchen'] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Paying and saying what you like',
      about: 'Say what you like and do not eat, ask for the bill and understand the price.',
      art: 'pretzel',
      spreads: [
        [
          { t: 'text', md: 'To say what you like, put **gern** after the verb: *Ich esse gern Fisch.* To say what you do not like, use **nicht gern**: *Ich trinke nicht gern Bier.*\n\nTo say you do not eat or drink something at all, use **kein**: *Ich esse kein Fleisch.* With a *der* word: *Ich trinke keinen Alkohol.*' },
          { t: 'examples', items: [
            { s: 'Ich trinke **gern** Tee.', n: 'I like drinking tea.' },
            { s: 'Ich esse **nicht gern** Käse.', n: 'I do not like eating cheese.' },
            { s: 'Ich esse **kein** Fleisch. Ich bin Vegetarierin.', n: '*das Fleisch*: *kein Fleisch*. A man says *Vegetarier*.' },
            { s: 'Ich trinke **keinen** Kaffee.', n: '*der Kaffee*: *keinen Kaffee*.' },
            { s: 'Ich habe **keinen** Hunger, nur Durst.', n: 'I am not hungry, only thirsty.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'Zahlen, bitte!', lines: [
            { who: 'Lucas', s: 'Entschuldigung! Zahlen, bitte.' },
            { who: 'Kellnerin', s: 'Zusammen oder getrennt?' },
            { who: 'Lucas', s: 'Zusammen, bitte.' },
            { who: 'Kellnerin', s: 'Ein Kaffee, eine Apfelschorle, ein Apfelkuchen. Das macht 11,40 Euro.' },
            { who: 'Lucas', s: 'Kann ich mit Karte zahlen?' },
            { who: 'Kellnerin', s: 'Ja, natürlich.' },
            { who: 'Lucas', s: '12 Euro, bitte. Stimmt so.' },
            { who: 'Kellnerin', s: 'Vielen Dank! Einen schönen Tag noch!' },
          ] },
          { t: 'text', md: '*Zusammen* means one bill for everybody. *Getrennt* means everybody pays for their own food. Prices are written with a comma: *11,40 €* is *elf Euro vierzig*.' },
          { t: 'tip', art: 'owl', md: 'In German-speaking countries, people often give a small tip by saying the new total: *12 Euro, bitte. Stimmt so.* This means: keep the rest. Some small cafés only take cash, so it is good to have some with you.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Ich bin Vegetarier. Ich esse ___ Fleisch.', o: ['kein', 'keinen', 'nicht'], why: '*das Fleisch*: *kein Fleisch*.' },
            { q: 'Ich trinke ___ Kaffee. Ich trinke lieber Tee.', o: ['keinen', 'kein', 'keine'], why: '*der Kaffee*: *keinen Kaffee*.' },
            { q: 'Fisch ist super! Ich esse ___ Fisch.', o: ['gern', 'nicht gern', 'kein'], why: 'You like fish: *gern*.' },
            { q: 'Wir möchten zahlen. Jeder zahlt für sich. – ___, bitte.', o: ['Getrennt', 'Zusammen', 'Stimmt so'], why: 'Everybody pays alone: *getrennt*.' },
          ] },
          { t: 'ex', kind: 'select', h: 'How do you say the price?', items: [
            { q: '7,50 € = ___', o: ['sieben Euro fünfzig', 'sieben Komma fünfzehn Euro', 'siebzig Euro fünf'], why: 'Say the euros, then the cents: *sieben Euro fünfzig*.' },
            { q: '13,20 € = ___', o: ['dreizehn Euro zwanzig', 'dreißig Euro zwanzig', 'drei Euro zwanzig'], why: '*dreizehn* is 13, *dreißig* is 30.' },
            { q: '24,90 € = ___', o: ['vierundzwanzig Euro neunzig', 'zweiundvierzig Euro neunzig', 'vierundzwanzig Euro neunzehn'], why: 'The small number first: *vier-und-zwanzig*. 90 is *neunzig*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Ich esse gern Kuchen.', why: '*gern* comes after the verb *esse*.' },
            { a: 'Ich trinke keinen Alkohol.', why: '*der Alkohol*: *keinen Alkohol*.' },
            { a: 'Kann ich mit Karte zahlen?', why: 'A yes/no question starts with the verb. The infinitive *zahlen* goes to the end.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the question and the answer.', pairs: [
            ['Was möchten Sie trinken?', 'Einen Orangensaft, bitte.'],
            ['Zusammen oder getrennt?', 'Zusammen, bitte.'],
            ['Kann ich mit Karte zahlen?', 'Ja, natürlich.'],
            ['Möchten Sie noch etwas?', 'Nein, danke.'],
            ['Wie viel macht das?', 'Das macht 8,60 Euro.'],
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: a café menu',
      about: 'Read a café menu, find prices and choose something to eat and drink.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'A menu is *die Speisekarte*. Drinks are *Getränke* and food is *Speisen*. *Hausgemacht* means the café makes it in its own kitchen.' },
          { t: 'reading', title: 'Café am Markt', md: '**Frühstück** (bis 11 Uhr)\nKleines Frühstück: 2 Brötchen, Butter, Marmelade, 1 Kaffee oder Tee: 7,90 €\nKäsefrühstück: 2 Brötchen, Käse, 1 Ei, 1 Kaffee oder Tee: 9,50 €\n\n**Speisen**\nTomatensuppe mit Brot: 6,80 €\nSalat mit Käse: 8,20 €\nKäsebrötchen: 3,90 €\n\n**Kuchen** (hausgemacht)\nApfelkuchen: 3,80 €\nKäsekuchen: 4,10 €\n\n**Getränke**\nKaffee: 2,90 €\nTee: 2,60 €\nApfelsaft: 3,20 €\nMineralwasser: 2,50 €\n\nWir sind Montag bis Samstag von 8 bis 18 Uhr für Sie da. Am Sonntag ist das Café geschlossen.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the menu. True, false or not given?', items: [
            { q: 'Um 12 Uhr gibt es kein Frühstück mehr.', a: 't', why: 'Breakfast is *bis 11 Uhr*, until 11.' },
            { q: 'Beim kleinen Frühstück gibt es auch einen Kaffee oder einen Tee.', a: 't', why: '*1 Kaffee oder Tee* is part of it.' },
            { q: 'Die Kuchen kommen aus dem Supermarkt.', a: 'f', why: 'The cakes are *hausgemacht*: the café makes them.' },
            { q: 'Das Café ist am Sonntag geöffnet.', a: 'f', why: '*Am Sonntag ist das Café geschlossen.*' },
            { q: 'Im Café gibt es auch Pizza.', a: 'ng', why: 'Pizza is not on the menu, and the menu does not say anything about it.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Was kostet ein Käsekuchen?', o: ['4,10 €', '3,80 €', '3,90 €'], why: '*Käsekuchen: 4,10 €*. The *Apfelkuchen* is 3,80 €.' },
            { q: 'Sie möchten etwas Warmes essen. Sie nehmen ___.', o: ['die Tomatensuppe', 'den Apfelsaft', 'das Mineralwasser'], why: 'A soup is warm food. The others are drinks.' },
            { q: 'Ein Tee und ein Apfelkuchen. Das macht ___.', o: ['6,40 €', '6,70 €', '7,90 €'], why: '2,60 € and 3,80 € make 6,40 €.' },
          ] },
          { t: 'ex', kind: 'odd', h: 'Which one does not belong?', items: [
            { o: ['Apfelkuchen', 'Kaffee', 'Tee', 'Apfelsaft'], why: '*Apfelkuchen* is food. The others are drinks.' },
            { o: ['Mineralwasser', 'Brötchen', 'Käse', 'Ei'], why: '*Mineralwasser* is a drink. The others are food for breakfast.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Ich möchte ___ Tee, bitte.', o: ['einen', 'eine', 'ein'], why: '*der Tee*: *einen Tee*.' },
      { q: 'Ich bin Vegetarierin. Ich esse ___ Fleisch.', o: ['kein', 'keinen', 'nicht gern'], why: '*das Fleisch*: *kein Fleisch*. *nicht gern* means you eat it but do not like it.' },
      { q: 'Sie möchten bezahlen. Sie sagen: „___, bitte.“', o: ['Zahlen', 'Zusammen', 'Getrennt'], why: 'To ask for the bill: *Zahlen, bitte.*' },
      { q: '9,80 € sagt man so: ___', o: ['neun Euro achtzig', 'neunzig Euro acht', 'neun Euro achtzehn'], why: 'The euros, then the cents: *neun Euro achtzig*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Ich nehme ___ Suppe. (eine / einen)', a: ['eine'], why: '*die Suppe*: *eine* does not change.' },
      { q: 'Ich trinke ___ Kaffee, nur Tee. (kein)', a: ['keinen'], why: '*der Kaffee*: *keinen*.' },
      { q: 'Ich esse ___ Fisch. Fisch ist lecker! (like)', a: ['gern', 'gerne'], why: 'To say you like it: *gern* after the verb.' },
    ] },
    { t: 'ex', kind: 'bank', h: 'Complete the order.', extra: ['keinen', 'getrennt'], items: [
      { q: 'Was ___ Sie?', a: 'möchten', why: 'With *Sie*: *möchten*.' },
      { q: 'Ich nehme ___ Salat mit Käse.', a: 'den', why: '*der Salat* after *nehme*: *den*.' },
      { q: 'Und ein Wasser ___ Gas, bitte.', a: 'ohne', why: '*ohne*: without. *Wasser ohne Gas* is still water.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: '„Zusammen“ heißt: Eine Person zahlt für alle.', a: 't', why: '*zusammen*: one bill for everybody.' },
      { q: '„Stimmt so“ heißt: Ich möchte das Geld zurück.', a: 'f', why: '*Stimmt so* means keep the rest: it is a tip.' },
    ] },
  ],
};
