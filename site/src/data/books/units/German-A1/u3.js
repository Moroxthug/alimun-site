// German A1, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Food and drink',
  goal: 'Order in a café, buy food and say what you like. Learn der, die, das, plural forms, and ein and kein in the Akkusativ.',
  art: 'croissant',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['food-and-drink', 'articles', 'plural', 'akkusativ', 'kein', 'cafe', 'prices', 'gern'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'der, die, das',
      about: 'Articles and plurals, with words for food and drink.',
      art: 'pizza',
      spreads: [
        [
          { t: 'text', md: 'Every German noun has a gender: masculine (**der**), feminine (**die**) or neuter (**das**). Nouns always start with a capital letter. The word for *a* is **ein** for *der* and *das* nouns, and **eine** for *die* nouns.' },
          { t: 'table', caption: 'Articles', explain: ['head', 'col0'], quiz: true, head: ['', 'the', 'a'], rows: [
            ['masculine', 'der Kaffee', 'ein Kaffee'],
            ['feminine', 'die Banane', 'eine Banane'],
            ['neuter', 'das Brot', 'ein Brot'],
            ['plural', 'die Bananen', 'Bananen'],
          ] },
          { t: 'tip', art: 'owl', md: 'Always learn a noun with its article: not *Apfel*, but *der Apfel*. In the plural, the article is always *die*, and there is no *ein*.' },
        ],
        [
          { t: 'text', md: 'Here are words for food and drink. Read them aloud with the article.' },
          { t: 'table', caption: 'Essen und Trinken', quiz: true, head: ['der', 'die', 'das'], rows: [
            ['der Kaffee', 'die Milch', 'das Wasser'],
            ['der Tee', 'die Banane', 'das Brot'],
            ['der Saft', 'die Tomate', 'das Brötchen'],
            ['der Apfel', 'die Kartoffel', 'das Ei'],
            ['der Käse', 'die Suppe', 'das Obst'],
            ['der Fisch', 'die Wurst', 'das Fleisch'],
            ['der Kuchen', 'die Butter', 'das Gemüse'],
          ] },
          { t: 'tip', art: 'owl', md: '*das Brötchen* is a small bread roll. Many people in Germany eat *Brötchen* for breakfast.' },
        ],
        [
          { t: 'text', md: 'German plurals have different endings, so learn the plural with the noun. Many *die* nouns add **-n** or **-en**. Some nouns add an umlaut (*a → ä*). Some do not change at all.' },
          { t: 'table', caption: 'Plural forms', explain: ['head'], quiz: true, head: ['Singular', 'Plural'], rows: [
            ['die Banane', 'die Bananen'],
            ['die Tomate', 'die Tomaten'],
            ['die Kartoffel', 'die Kartoffeln'],
            ['der Apfel', 'die Äpfel'],
            ['der Saft', 'die Säfte'],
            ['das Ei', 'die Eier'],
            ['der Fisch', 'die Fische'],
            ['das Brötchen', 'die Brötchen'],
            ['der Kuchen', 'die Kuchen'],
          ] },
          { t: 'tip', art: 'owl', md: 'Nouns that end in *-chen* never change in the plural: *ein Brötchen, zwei Brötchen*. In a café, people often say *zwei Kaffee* or *drei Tee* without a plural ending.' },
        ],
        [
          { t: 'ex', kind: 'picture', h: 'What is it?', items: [
            { pic: 'apple', o: ['der Apfel', 'der Käse', 'das Brot'], why: '*der Apfel*, plural *die Äpfel*.' },
            { pic: 'bread', o: ['das Brot', 'die Butter', 'der Kuchen'], why: '*das Brot*: neuter.' },
            { pic: 'cheese', o: ['der Käse', 'die Wurst', 'der Apfel'], why: '*der Käse*: masculine.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'der, die or das? Sort the words.', groups: ['der', 'die', 'das'], items: [
            { s: 'Tee', g: 0, why: '*der Tee*' },
            { s: 'Banane', g: 1, why: '*die Banane*. Many nouns that end in *-e* are *die*.' },
            { s: 'Wasser', g: 2, why: '*das Wasser*' },
            { s: 'Saft', g: 0, why: '*der Saft*' },
            { s: 'Suppe', g: 1, why: '*die Suppe*' },
            { s: 'Ei', g: 2, why: '*das Ei*' },
            { s: 'Käse', g: 0, why: '*der Käse*. It ends in *-e*, but it is *der*.' },
            { s: 'Milch', g: 1, why: '*die Milch*' },
            { s: 'Brötchen', g: 2, why: '*das Brötchen*. Nouns that end in *-chen* are always *das*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write ein or eine.', items: [
            { q: 'Das ist ___ Apfel.', a: ['ein'], why: '*der Apfel*: *ein*.' },
            { q: 'Das ist ___ Tomate.', a: ['eine'], why: '*die Tomate*: *eine*.' },
            { q: 'Das ist ___ Ei.', a: ['ein'], why: '*das Ei*: *ein*.' },
            { q: 'Das ist ___ Kartoffel.', a: ['eine'], why: '*die Kartoffel*: *eine*.' },
            { q: 'Das ist ___ Brötchen.', a: ['ein'], why: '*das Brötchen*: *ein*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Find the plural.', pairs: [
            ['der Apfel', 'die Äpfel'],
            ['das Ei', 'die Eier'],
            ['die Tomate', 'die Tomaten'],
            ['der Saft', 'die Säfte'],
            ['das Brötchen', 'die Brötchen'],
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'einen Kaffee, keinen Hunger',
      about: 'ein and kein in the Akkusativ.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'Many verbs have an object: *Ich möchte **einen** Kaffee.* The object is in the **Akkusativ**. Only masculine nouns change: *ein* becomes **einen**. Feminine, neuter and plural nouns stay the same.' },
          { t: 'table', caption: 'ein in the Akkusativ', explain: ['head', 'col0'], quiz: true, head: ['', 'Nominativ', 'Akkusativ'], rows: [
            ['masculine', 'Das ist ein Apfel.', 'Ich esse einen Apfel.'],
            ['feminine', 'Das ist eine Banane.', 'Ich esse eine Banane.'],
            ['neuter', 'Das ist ein Ei.', 'Ich esse ein Ei.'],
            ['plural', 'Das sind Äpfel.', 'Ich esse Äpfel.'],
          ] },
          { t: 'examples', items: [
            { s: 'Ich möchte **einen** Tee, bitte.', n: '*der Tee*: *einen*.' },
            { s: 'Wir kaufen **ein** Brot und **eine** Wurst.', n: 'Neuter and feminine: no change.' },
            { s: 'Er isst **einen** Kuchen.', n: '*essen*: *du isst, er isst*.' },
            { s: 'Hast du **einen** Apfel?', n: '*haben* also takes the Akkusativ.' },
          ] },
          { t: 'tip', art: 'owl', md: '*Ich möchte* (I would like) is the polite way to ask for something. You also need *du möchtest* and *Sie möchten*. Unit 6 has all the forms.' },
        ],
        [
          { t: 'text', md: '**kein** means *no* or *not a*. It has the same endings as *ein*: **keinen** for masculine nouns in the Akkusativ, **keine** for feminine and plural nouns, **kein** for neuter nouns.' },
          { t: 'table', caption: 'ein and kein in the Akkusativ', explain: ['col0'], quiz: true, head: ['', 'ein', 'kein'], rows: [
            ['masculine', 'einen Saft', 'keinen Saft'],
            ['feminine', 'eine Banane', 'keine Banane'],
            ['neuter', 'ein Ei', 'kein Ei'],
            ['plural', 'Äpfel', 'keine Äpfel'],
          ] },
          { t: 'examples', items: [
            { s: 'Ich habe **keinen** Hunger.', n: '*der Hunger*: *keinen*.' },
            { s: 'Danke, ich habe **keinen** Durst.', n: '*der Durst*: *keinen*.' },
            { s: 'Wir haben **keine** Milch mehr.', n: '*kein … mehr* means no more, none left.' },
            { s: 'Ich esse **kein** Fleisch.', n: '*das Fleisch*: *kein*.' },
          ] },
          { t: 'tip', art: 'owl', md: '*Hunger* and *Durst* are nouns in German. You say *Ich habe Hunger* (I am hungry) and *Ich habe Durst* (I am thirsty).' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose ein, eine or einen.', items: [
            { q: 'Ich möchte ___ Saft, bitte.', o: ['einen', 'ein', 'eine'], why: '*der Saft*, Akkusativ: *einen*.' },
            { q: 'Wir essen ___ Suppe.', o: ['eine', 'einen', 'ein'], why: '*die Suppe*: *eine*. Feminine does not change.' },
            { q: 'Er trinkt ___ Wasser.', o: ['ein', 'einen', 'eine'], why: '*das Wasser*: *ein*. Neuter does not change.' },
            { q: 'Möchten Sie ___ Kuchen?', o: ['einen', 'ein', 'eine'], why: '*der Kuchen*, Akkusativ: *einen*.' },
            { q: 'Ich kaufe ___ Brötchen.', o: ['ein', 'einen', 'eine'], why: '*das Brötchen*: *ein*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write kein, keine or keinen.', items: [
            { q: 'Ich habe ___ Hunger.', a: ['keinen'], why: '*der Hunger*: *keinen*.' },
            { q: 'Wir haben ___ Milch.', a: ['keine'], why: '*die Milch*: *keine*.' },
            { q: 'Er isst ___ Fleisch.', a: ['kein'], why: '*das Fleisch*: *kein*.' },
            { q: 'Sie hat ___ Durst.', a: ['keinen'], why: '*der Durst*: *keinen*.' },
            { q: 'Ich kaufe heute ___ Tomaten.', a: ['keine'], why: 'Plural: *keine*.' },
            { q: 'Ich trinke ___ Kaffee.', a: ['keinen'], why: '*der Kaffee*: *keinen*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say no. Use kein.', items: [
            { q: 'Ich habe einen Apfel.', a: ['Ich habe keinen Apfel'], why: '*einen* becomes *keinen*.' },
            { q: 'Wir haben eine Banane.', a: ['Wir haben keine Banane'], why: '*eine* becomes *keine*.' },
            { q: 'Sie möchte ein Ei.', a: ['Sie möchte kein Ei'], why: '*ein* becomes *kein*.' },
            { q: 'Ich habe Hunger.', a: ['Ich habe keinen Hunger'], why: 'No article: use *kein*. *der Hunger*: *keinen*.' },
            { q: 'Er kauft Äpfel.', a: ['Er kauft keine Äpfel'], why: 'Plural without an article: *keine*.' },
          ] },
          { t: 'ex', kind: 'colloc', h: 'What do you drink? What do you eat? Tap all that fit.', items: [
            { key: 'trinken', o: ['Kaffee', 'Wasser', 'Saft', 'Brot', 'Käse', 'Milch'], a: [0, 1, 2, 5], why: 'You drink coffee, water, juice and milk. You eat bread and cheese.' },
            { key: 'essen', o: ['Kuchen', 'Suppe', 'Obst', 'Tee', 'Saft', 'Fisch'], a: [0, 1, 2, 5], why: 'You eat cake, soup, fruit and fish. In German, you also *essen* soup. Tea and juice are drinks.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write it correctly.', items: [
            { s: 'Ich möchte [ein] Kaffee, bitte.', a: ['einen'], why: '*der Kaffee*, Akkusativ: *einen*.' },
            { s: 'Wir haben [keinen] Milch.', a: ['keine'], why: '*die Milch*: *keine*.' },
            { s: 'Ich habe [kein] Hunger.', a: ['keinen'], why: '*der Hunger*: *keinen*.' },
            { s: 'Er [esst] einen Apfel.', a: ['isst'], why: '*essen*: *er isst*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Im Café',
      about: 'Order, ask the price and pay, and say what you like.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: 'In a café, the waiter asks *Was möchten Sie?* or *Was darf es sein?* You answer with *Ich möchte …* or *Ich nehme …* and the Akkusativ: *Ich nehme einen Tee.*' },
          { t: 'dialogue', title: 'Ein Kaffee, bitte', lines: [
            { who: 'Kellnerin', s: 'Guten Tag! Was möchten Sie?' },
            { who: 'Ben', s: 'Ich möchte einen Kaffee, bitte.' },
            { who: 'Kellnerin', s: 'Mit Milch?' },
            { who: 'Ben', s: 'Ja, mit Milch, bitte. Und ein Stück Kuchen.' },
            { who: 'Kellnerin', s: 'Apfelkuchen oder Käsekuchen?' },
            { who: 'Ben', s: 'Apfelkuchen, bitte. Was kostet der Kuchen?' },
            { who: 'Kellnerin', s: 'Drei Euro sechzig.' },
            { who: 'Ben', s: 'Ich möchte bitte zahlen.' },
            { who: 'Kellnerin', s: 'Gern. Das macht sechs Euro vierzig.' },
            { who: 'Ben', s: 'Hier sind sieben Euro. Stimmt so.' },
            { who: 'Kellnerin', s: 'Vielen Dank! Einen schönen Tag noch!' },
          ] },
        ],
        [
          { t: 'table', caption: 'In the café', explain: ['head'], head: ['The waiter says', 'You say'], rows: [
            ['Was möchten Sie?', 'Ich möchte einen Tee, bitte.'],
            ['Was darf es sein?', 'Ich nehme ein Wasser.'],
            ['Noch etwas?', 'Nein, danke. Das ist alles.'],
            ['Zusammen oder getrennt?', 'Getrennt, bitte.'],
            ['Das macht 8,40 Euro.', 'Hier, bitte. Stimmt so.'],
          ] },
          { t: 'examples', items: [
            { s: 'Was kostet der Kuchen? – 3,20 Euro.', n: 'Say *drei Euro zwanzig*.' },
            { s: 'Ein Kaffee kostet 2,90 €.', n: 'Say *zwei Euro neunzig*.' },
            { s: 'Das macht 12,50 Euro.', n: 'Say *zwölf Euro fünfzig*.' },
            { s: 'Das Brötchen kostet 0,80 €.', n: 'Say *achtzig Cent*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Prices have a comma in German: 2,50 €. You say *zwei Euro fünfzig*. *Stimmt so* means *keep the change*: you give a small tip. *Getrennt* means each person pays for their own things.' },
        ],
        [
          { t: 'text', md: 'To say what you like, put **gern** after the verb: *Ich trinke gern Tee.* For things you do not like, say **nicht gern**. In a question, *gern* comes after the person: *Trinkst du gern Tee?*' },
          { t: 'examples', items: [
            { s: 'Ich trinke **gern** Kaffee.', n: 'You like it.' },
            { s: 'Mein Sohn isst **nicht gern** Gemüse.', n: 'He does not like it.' },
            { s: 'Isst du gern Fisch? – Ja, sehr gern!', n: '*sehr gern*: you like it very much.' },
            { s: 'Was trinkst du gern? – Ich trinke gern Saft.', n: 'Question word, verb, person, *gern*.' },
          ] },
          { t: 'tip', art: 'owl', md: '*gern* is also a friendly answer: *Möchten Sie einen Tee? – Ja, gern!* (Yes, please.) And the waiter says *Gern!* when you say *Danke*.' },
        ],
        [
          { t: 'ex', kind: 'label', scene: 'cafe', h: 'Label the café.', extra: ['der Stuhl', 'das Glas'], items: [
            { x: 125, y: 137, a: 'die Tasse', why: '*die Tasse*: the cup for coffee or tea.' },
            { x: 188, y: 132, a: 'das Croissant', why: '*das Croissant* is a French word, but people in Germany use it too.' },
            { x: 66, y: 152, a: 'der Tisch', why: '*der Tisch*: the table.' },
            { x: 95, y: 68, a: 'das Fenster', why: '*das Fenster*: the window.' },
            { x: 250, y: 42, a: 'die Lampe', why: '*die Lampe*: the lamp.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Find the right answer.', pairs: [
            ['Was möchten Sie?', 'Einen Tee, bitte.'],
            ['Noch etwas?', 'Nein, danke. Das ist alles.'],
            ['Was kostet der Kuchen?', 'Drei Euro zwanzig.'],
            ['Zusammen oder getrennt?', 'Zusammen, bitte.'],
            ['Mit Milch?', 'Nein, ohne Milch, bitte.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'bank', h: 'Complete with words from the box.', extra: ['nehme', 'bitte'], items: [
            { q: 'Was ___ ein Wasser? – 2,20 Euro.', a: 'kostet', why: '*Was kostet …?* asks the price.' },
            { q: 'Ich trinke ___ Tee, aber nicht gern Kaffee.', a: 'gern', why: '*gern* after the verb: you like tea.' },
            { q: 'Zusammen oder ___?', a: 'getrennt', why: '*getrennt*: each person pays.' },
            { q: 'Hier sind zehn Euro. Stimmt ___.', a: 'so', why: '*Stimmt so*: keep the change.' },
            { q: 'Ich habe ___. Ich möchte eine Suppe.', a: 'Hunger', why: '*Ich habe Hunger*: I am hungry.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
            { q: 'Was isst du gern?', o: ['Ich esse gern Kuchen.', 'Ich bin gern Kuchen.', 'Ich gern esse Kuchen.'], why: 'The verb *esse* is in position 2, then *gern*.' },
            { q: 'Möchten Sie einen Kaffee?', o: ['Ja, gern!', 'Ja, ich bin Kaffee.', 'Nein, ich habe keinen Hunger.'], why: '*Ja, gern!* means Yes, please. Coffee is a drink, so *Hunger* does not fit.' },
            { q: '4,60 €', o: ['vier Euro sechzig', 'sechzig Euro vier', 'vier Euro sechs'], why: 'First the euros, then the cents: *vier Euro sechzig*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Menu and shopping list',
      about: 'Read a café menu and a shopping list.',
      art: 'pretzel',
      spreads: [
        [
          { t: 'reading', title: 'Café am Markt: Speisekarte', md: '**Warme Getränke**\nKaffee 2,80 €\nCappuccino 3,40 €\nTee (schwarz, grün oder Pfefferminze) 2,60 €\nheiße Schokolade 3,50 €\n\n**Kalte Getränke**\nMineralwasser 2,20 €\nApfelsaft 2,90 €\nOrangensaft 3,20 €\n\n**Essen**\nBrötchen mit Käse 3,90 €\nBrötchen mit Wurst 4,20 €\nTomatensuppe mit Brot 5,80 €\nApfelkuchen 3,60 €\n\n**Frühstück für zwei Personen**\nVier Brötchen, Butter, Käse, zwei Eier und zwei Kaffee: 16,50 €' },
          { t: 'reading', title: 'Eine Nachricht', md: 'Hallo Jonas,\n\nhier ist die Einkaufsliste für heute: einen Liter Milch, ein Brot, sechs Eier, ein Kilo Äpfel und Käse. Wir haben noch Butter, aber wir haben keinen Kaffee mehr! Morgen früh trinke ich gern einen Kaffee.\n\nDanke!\nLena' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Ein Tee kostet 2,60 €.', a: 't', why: '*Tee … 2,60 €*' },
            { q: 'Im Café gibt es Fischsuppe.', a: 'f', why: 'The café has tomato soup: *Tomatensuppe mit Brot*.' },
            { q: 'Der Apfelkuchen ist sehr gut.', a: 'ng', why: 'The menu gives the price, but it does not say if the cake is good.' },
            { q: 'Lena und Jonas haben noch Butter.', a: 't', why: '*Wir haben noch Butter.*' },
            { q: 'Jonas kauft zwei Brote.', a: 'f', why: 'The list says *ein Brot*: one loaf.' },
            { q: 'Lena trinkt morgen früh einen Tee.', a: 'f', why: 'She wants coffee: *Morgen früh trinke ich gern einen Kaffee.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read the menu and the message again and choose.', items: [
            { q: 'Sie möchten einen Kaffee und einen Apfelkuchen. Was kostet das?', o: ['6,40 €', '5,40 €', '6,60 €'], why: '2,80 € + 3,60 € = 6,40 €.' },
            { q: 'Was ist nicht im Frühstück für zwei Personen?', o: ['Wurst', 'Eier', 'Käse'], why: 'The breakfast has rolls, butter, cheese, eggs and coffee, but no sausage.' },
            { q: 'Was haben Lena und Jonas nicht mehr?', o: ['Kaffee', 'Butter', 'Brot und Butter'], why: '*Wir haben keinen Kaffee mehr!* They still have butter.' },
          ] },
          { t: 'ex', kind: 'search', h: 'Find six words from the menu and the list.', words: ['Kaffee', 'Milch', 'Butter', 'Eier', 'Suppe', 'Kuchen'] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Ich möchte ___ Tee, bitte.', o: ['einen', 'ein', 'eine'], why: '*der Tee*, Akkusativ: *einen*.' },
      { q: 'Das ist ___ Banane.', o: ['eine', 'ein', 'einen'], why: '*die Banane*: *eine*.' },
      { q: 'Wir haben ___ Brot mehr.', o: ['kein', 'keine', 'keinen'], why: '*das Brot*: *kein*.' },
      { q: '', o: ['Ich trinke gern Kaffee.', 'Ich gern trinke Kaffee.', 'Gern ich trinke Kaffee.'], why: 'The verb is in position 2, and *gern* comes after it.' },
      { q: 'Was ___ der Saft?', o: ['kostet', 'kosten', 'kostest'], why: '*der Saft* is *er*: *er kostet*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'ein Apfel, zwei ___', a: ['Äpfel'], why: '*der Apfel*, plural *die Äpfel*, with an umlaut.' },
      { q: 'ein Ei, drei ___', a: ['Eier'], why: '*das Ei*, plural *die Eier*.' },
      { q: 'Danke, ich habe ___ Hunger. (kein)', a: ['keinen'], why: '*der Hunger*: *keinen*.' },
      { q: 'Zahlen Sie zusammen oder ___?', a: ['getrennt'], why: '*Zusammen oder getrennt?*' },
    ] },
    { t: 'ex', kind: 'sort', h: 'der, die or das? Sort the words.', groups: ['der', 'die', 'das'], items: [
      { s: 'Saft', g: 0, why: '*der Saft*' },
      { s: 'Milch', g: 1, why: '*die Milch*' },
      { s: 'Brot', g: 2, why: '*das Brot*' },
      { s: 'Käse', g: 0, why: '*der Käse*' },
      { s: 'Suppe', g: 1, why: '*die Suppe*' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write it correctly.', items: [
      { s: 'Er trinkt [keine] Kaffee.', a: ['keinen'], why: '*der Kaffee*, Akkusativ: *keinen*.' },
    ] },
  ],
};
