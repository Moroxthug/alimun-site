// Italian A1, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Food and drink',
  goal: 'Order in a café, buy food and say what you like.',
  art: 'pizza',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['food', 'drink', 'articles', 'partitive', 'ordering', 'prices', 'likes'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Il pane, la mela, gli spaghetti',
      about: 'Masculine and feminine nouns, the articles and food words.',
      art: 'croissant',
      spreads: [
        [
          { t: 'text', md: 'Every Italian noun is **masculine** or **feminine**. Most masculine nouns end in **-o** and most feminine nouns end in **-a**: *il formaggio* and *la mela* follow the rule. Nouns that end in **-e** can be either: learn them with their article, for example *il latte* and *la verdura*. The **definite article** (*the*) changes with the first letter of the noun.' },
          { t: 'table', caption: 'The definite article (the)', explain: ['head', 'col0'], head: ['', 'singular', 'plural'], rows: [
            ['masculine, before a consonant', 'il pane', 'i pani'],
            ['masculine, before s + consonant or z', 'lo zucchero, lo spaghetto', 'gli zuccheri, gli spaghetti'],
            ['masculine, before a vowel', 'l’olio', 'gli oli'],
            ['feminine, before a consonant', 'la mela', 'le mele'],
            ['feminine, before a vowel', 'l’acqua', 'le acque'],
          ] },
          { t: 'tip', art: 'owl', md: 'The plural is made with the last letter: **-o** becomes **-i**, **-a** becomes **-e**, **-e** becomes **-i**: *il formaggio → i formaggi, la mela → le mele, il latte → i latti.* A few words are irregular: **l’uovo → le uova** (the eggs). Words with a stressed last vowel do not change: *il caffè → i caffè.*' },
        ],
        [
          { t: 'table', caption: 'The indefinite article (a, an)', explain: ['head', 'col0'], head: ['', 'masculine', 'feminine'], rows: [
            ['before a consonant', 'un panino', 'una mela'],
            ['before s + consonant or z', 'uno zucchero', 'una zuppa'],
            ['before a vowel', 'un uovo', 'un’arancia'],
          ] },
          { t: 'table', caption: 'Food and drink', explain: ['head', 'col1'], head: ['Italian', 'English'], rows: [
            ['il pane', 'bread'],
            ['il formaggio', 'cheese'],
            ['il latte', 'milk'],
            ['il caffè, il tè', 'coffee, tea'],
            ['il succo d’arancia', 'orange juice'],
            ['l’acqua (f.)', 'water'],
            ['la mela, la banana', 'apple, banana'],
            ['il riso, la pasta', 'rice, pasta'],
            ['le verdure', 'vegetables'],
            ['il pollo, la carne', 'chicken, meat'],
            ['il pesce', 'fish'],
            ['la torta', 'cake'],
          ] },
          { t: 'examples', items: [
            { s: 'Mangio **un** panino e bevo **un** caffè.', n: '*mangiare* eat, *bere* drink.' },
            { s: '**L’**insalata è molto buona.', n: 'Before a vowel: *l’insalata*.' },
            { s: 'Compra **le** mele e **le** banane.', n: 'Feminine plural: *le*.' },
            { s: '**Il** latte è nel frigorifero.', n: '*il latte* is masculine.' },
            { s: 'Ecco **lo** zucchero e **il** pane.', n: '*lo* before *z*, *il* before *p*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Which article goes with the word?', groups: ['il', 'lo / l’', 'la / l’', 'i / gli / le'], items: [
            { s: 'pane', g: 0, why: '*il pane*' },
            { s: 'zucchero', g: 1, why: '*lo zucchero*' },
            { s: 'mela', g: 2, why: '*la mela*' },
            { s: 'verdure', g: 3, why: 'Plural feminine: *le verdure*.' },
            { s: 'formaggio', g: 0, why: '*il formaggio*' },
            { s: 'acqua', g: 2, why: '*l’acqua* (feminine)' },
            { s: 'spaghetti', g: 3, why: 'Plural: *gli spaghetti*.' },
            { s: 'olio', g: 1, why: '*l’olio* (masculine before a vowel)' },
          ] },
          { t: 'ex', kind: 'picture', h: 'What is it?', items: [
            { pic: 'apple', o: ['una mela', 'un pane', 'un formaggio'], why: 'A *mela* is an apple, and *mela* is feminine: *una mela*.' },
            { pic: 'bread', o: ['un pane', 'una mela', 'un formaggio'], why: 'Bread is *il pane*, so *un pane*.' },
            { pic: 'cheese', o: ['un formaggio', 'una mela', 'un tè'], why: 'Cheese is *il formaggio*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right article.', items: [
            { q: 'Vorrei ___ caffè.', o: ['un', 'una', 'uno'], why: '*caffè* is masculine: *un caffè*.' },
            { q: 'Mangia ___ mela.', o: ['una', 'un', 'uno'], why: '*mela* is feminine: *una mela*.' },
            { q: 'Comprano ___ spaghetti.', o: ['gli', 'i', 'le'], why: '*spaghetti* starts with s + consonant: *gli spaghetti*.' },
            { q: '___ acqua è sul tavolo.', o: ['L’', 'Il', 'Lo'], why: 'Before a vowel: *l’acqua*.' },
          ] },
          { t: 'ex', kind: 'memory', h: 'Find the pairs.', pairs: [
            ['il pane', 'bread'],
            ['il latte', 'milk'],
            ['la mela', 'apple'],
            ['il formaggio', 'cheese'],
            ['le uova', 'eggs'],
            ['il pollo', 'chicken'],
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Vorrei del caffè',
      about: 'del, della, dei, non … niente, and how to say what you want and like.',
      art: 'pizza',
      spreads: [
        [
          { t: 'text', md: 'To talk about *some* of something you cannot count, Italian uses **di** + the definite article. This is called the partitive: **del** (masculine), **dello**, **dell’**, **della** (feminine), **dei**, **degli**, **delle** (plural): *Prendo del formaggio e della verdura.* In a negative sentence, use nothing: **non ho pane**, **non mangio carne**. To say *nothing*, use **non … niente**: *Non mangio niente.*' },
          { t: 'table', caption: 'del, della, dei', explain: ['head'], head: ['', 'masculine', 'feminine', 'plural'], rows: [
            ['some', 'del pane', 'della pasta', 'dei panini'],
            ['some, before a vowel', 'dell’olio', 'dell’acqua', 'degli spaghetti'],
            ['not any', 'non ho pane', 'non ho pasta', 'non ho panini'],
          ] },
          { t: 'tip', art: 'owl', md: 'The partitive is often **left out** in everyday speech: *Vorrei acqua* or *Vorrei dell’acqua* are both fine. A very common way to ask for something is **vorrei** (I would like) or **prendo** (I am having): *Vorrei un caffè. Prendo un tè.*' },
        ],
        [
          { t: 'text', md: 'Use **vorrei** to order or ask politely, **prendo** to choose, and **mi piace** to say what you like. **mi piace** is followed by a singular noun with the article: *Mi piace il caffè.* For a plural noun, say **mi piacciono**: *Mi piacciono le mele.* To say you do not like something, use **non mi piace**: *Non mi piace il pesce.* To say how much, use **un bicchiere di**, **una bottiglia di**, **un chilo di**: no article after *di*.' },
          { t: 'examples', items: [
            { s: '**Vorrei** un tè, per favore.', n: '*vorrei* is a polite way to ask.' },
            { s: '**Prendo** del formaggio e del pane.', n: '*prendere* to take, to have.' },
            { s: '**Mi piace** il caffè, ma **non mi piace** il tè.', n: '*mi piace* + singular.' },
            { s: '**Mi piacciono** le mele.', n: '*mi piacciono* + plural.' },
            { s: 'Un bicchiere **d’**acqua e una bottiglia **di** latte.', n: 'No article after *di* in quantities.' },
          ] },
          { t: 'table', caption: 'prendere (to take, to have)', quiz: true, head: ['', 'prendere'], rows: [
            ['io', 'prendo'],
            ['tu', 'prendi'],
            ['lui / lei / Lei', 'prende'],
            ['noi', 'prendiamo'],
            ['voi', 'prendete'],
            ['loro', 'prendono'],
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'del, della, dell’, dei, degli or delle? Choose.', items: [
            { q: 'Prendo ___ pane.', o: ['del', 'della', 'dei'], why: '*pane* is masculine: *del pane*.' },
            { q: 'Mangia ___ pasta.', o: ['della', 'del', 'delle'], why: '*pasta* is feminine: *della pasta*.' },
            { q: 'Vuoi ___ spaghetti?', o: ['degli', 'dei', 'dello'], why: '*spaghetti* starts with s + consonant: *degli spaghetti*.' },
            { q: 'Beve ___ acqua.', o: ['dell’', 'della', 'del'], why: 'Before a vowel: *dell’acqua*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Non mangio ___. (nothing)', a: ['niente'], why: '*non … niente* means nothing.' },
            { q: 'Vorrei un ___ d’acqua. (a glass)', a: ['bicchiere'], why: '*un bicchiere d’acqua*' },
            { q: 'Il tè? Non mi ___. (I do not like it)', a: ['piace'], why: '*non mi piace*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the forms of prendere.', verb: 'prendere', tense: 'present', rows: [
            ['io', 'prendo'],
            ['tu', 'prendi'],
            ['lui / lei', 'prende'],
            ['noi', 'prendiamo'],
            ['voi', 'prendete'],
            ['loro', 'prendono'],
          ] },
          { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
            { q: 'Ami le mele. Dici: «Mi ___ le mele.»', o: ['piacciono', 'piace', 'piacete'], why: 'Plural noun: *mi piacciono*.' },
            { q: 'Vuoi un bicchiere d’acqua. Dici: «Un bicchiere ___ acqua, per favore.»', o: ['d’', 'di', 'dell’'], why: 'After a quantity, *di* (*d’* before a vowel), with no article.' },
            { q: 'Chiedi un tè con gentilezza: «___ un tè, per favore.»', o: ['Vorrei', 'Voglio', 'Prendono'], why: '*vorrei* is the polite way to ask.' },
            { q: 'Non ami il pesce: «Non mi ___ il pesce.»', o: ['piace', 'piacciono', 'piaci'], why: 'Singular noun: *piace*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Al bar',
      about: 'Order, ask the price and pay.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: 'In a café or bar, the waiter or the barman says **Cosa prende?** (What will you have?) or **Mi dica** (Tell me). You say **Vorrei …, per favore** or **Prendo …**. To pay, say **Il conto, per favore** (The bill, please) or **Quanto costa?** (How much is it?). Always start with **Buongiorno** and end with **Grazie, arrivederci**.' },
          { t: 'dialogue', title: 'Al bar', lines: [
            { who: 'Barista', s: 'Buongiorno! Cosa prende?' },
            { who: 'Giulia', s: 'Vorrei un caffè e una brioche, per favore.' },
            { who: 'Barista', s: 'Certo. E per Lei, signore?' },
            { who: 'Marco', s: 'Un tè, per favore. E dell’acqua.' },
            { who: 'Barista', s: 'Ecco. Sono sei euro e cinquanta.' },
            { who: 'Giulia', s: 'Grazie, arrivederci!' },
          ] },
          { t: 'tip', art: 'owl', md: 'In many Italian bars, you pay at the **cassa** (the till) first and then show the receipt (**lo scontrino**) to the barman. A coffee at the counter (**al banco**) is often cheaper than at a table (**al tavolo**). If you say **un caffè**, you get a small strong espresso; for a coffee with milk, ask for **un cappuccino** or **un caffè macchiato**.' },
        ],
        [
          { t: 'text', md: 'Prices are said with **euro**, which does not change in the plural: *un euro, due euro*. To say the cents, add **e** and the number: **2,50 €** is *due euro e cinquanta*. To ask the price, say **Quanto costa?** (for one thing) or **Quanto costano?** (for several). The answer is **Costa** or **Sono**: *Costa due euro. Sono sei euro e cinquanta.*' },
          { t: 'table', caption: 'Prices', explain: ['head'], head: ['Price', 'Say'], rows: [
            ['1 €', 'un euro'],
            ['2,50 €', 'due euro e cinquanta'],
            ['3,20 €', 'tre euro e venti'],
            ['4,80 €', 'quattro euro e ottanta'],
            ['12 €', 'dodici euro'],
            ['0,90 €', 'novanta centesimi'],
          ] },
          { t: 'examples', items: [
            { s: '**Quanto costa** il caffè? – **Costa** un euro e dieci.', n: 'The price of a coffee.' },
            { s: '**Quanto costano** le mele? – **Costano** due euro al chilo.', n: 'Plural: *costano*.' },
            { s: '**Il conto**, per favore.', n: 'The bill.' },
            { s: 'Posso pagare **con la carta**?', n: 'Can I pay by card? *in contanti* in cash.' },
            { s: 'Un caffè, **basta così**, grazie.', n: 'That is all.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Vorrei un caffè, per favore.', why: '*Vorrei* + what you want.' },
            { a: 'Il conto, per favore.', why: 'To ask for the bill.' },
            { a: 'Sono sei euro e cinquanta.', why: '*Sono* + the price.' },
            { a: 'Quanto costa il caffè?', why: '*Quanto costa* + the thing.' },
          ] },
          { t: 'ex', kind: 'build', h: 'Build the sentence. Some words do not belong.', items: [
            { a: 'Prendo un tè e una brioche.', extra: ['uno', 'del'], why: '*tè* is masculine: *un*; *brioche* is feminine: *una*.' },
            { a: 'Quanto costa il tè?', extra: ['costano', 'sono'], why: 'One thing: *costa*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Find the price.', pairs: [
            ['2,50 €', 'due euro e cinquanta'],
            ['3,20 €', 'tre euro e venti'],
            ['5,00 €', 'cinque euro'],
            ['1,00 €', 'un euro'],
          ] },
          { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
            { q: 'You want to pay. You say:', o: ['Il conto, per favore.', 'Vorrei un caffè.', 'Buonanotte.'], why: '*Il conto* is the bill.' },
            { q: 'You ask the price of a tea:', o: ['Quanto costa il tè?', 'Cosa prende?', 'Sono un euro.'], why: '*Quanto costa?* asks the price.' },
            { q: 'The barman says «Sono quattro euro». You say:', o: ['Ecco. Grazie.', 'Vorrei un tè.', 'Buongiorno, signore.'], why: 'You pay and say thank you.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Il menu e la spesa',
      about: 'Read a café menu and a shopping list.',
      art: 'pizza',
      spreads: [
        [
          { t: 'reading', title: 'Il menu del bar', md: '**Bevande**\nCaffè: 1,20 €\nCappuccino: 1,80 €\nTè: 2,50 €\nSucco d’arancia: 3,00 €\nAcqua: 1,50 €\n\n**Da mangiare**\nBrioche: 1,30 €\nPanino al formaggio: 4,50 €\nInsalata: 6,00 €\nTorta del giorno: 3,50 €' },
          { t: 'reading', title: 'La lista della spesa', md: 'Per sabato:\npane, latte, uova, formaggio, un’insalata, un chilo di mele, una bottiglia d’acqua.\n\nNon compriamo il pollo: mangiamo del riso e delle verdure.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Il caffè costa un euro e venti.', a: 't', why: '*Caffè: 1,20 €*' },
            { q: 'Il succo d’arancia costa due euro.', a: 'f', why: 'It costs three euro: *Succo d’arancia: 3,00 €*.' },
            { q: 'Il panino è al formaggio.', a: 't', why: '*Panino al formaggio*' },
            { q: 'Il bar chiude alle sette.', a: 'ng', why: 'The menu does not say when the bar closes.' },
            { q: 'Nella lista della spesa c’è il pollo.', a: 'f', why: '*Non compriamo il pollo*: they eat rice and vegetables.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the texts.', items: [
            { q: 'Una brioche costa un euro e ___.', a: ['trenta'], why: '*Brioche: 1,30 €* is *un euro e trenta*.' },
            { q: 'Per sabato, comprano un chilo di ___.', a: ['mele'], why: '*un chilo di mele*' },
            { q: 'Mangiano del riso e delle ___.', a: ['verdure'], why: '*del riso e delle verdure*' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Look at the menu and choose.', items: [
            { q: 'La torta del giorno costa…', o: ['tre euro e cinquanta', 'quattro euro e cinquanta', 'sei euro'], why: '*Torta del giorno: 3,50 €*' },
            { q: 'Cosa costa di più?', o: ['L’insalata', 'Il caffè', 'La brioche'], why: 'The salad costs 6,00 €, the most.' },
            { q: 'Per due caffè, si paga…', o: ['due euro e quaranta', 'tre euro', 'un euro e venti'], why: 'Two coffees at 1,20 € make 2,40 €.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Vorrei ___ tè.', o: ['un', 'una', 'uno'], why: '*tè* is masculine: *un tè*.' },
      { q: 'Mangia ___ insalata.', o: ['dell’', 'del', 'dei'], why: 'Before a vowel: *dell’insalata*.' },
      { q: 'Mi ___ le mele.', o: ['piacciono', 'piace', 'piaci'], why: 'Plural: *mi piacciono*.' },
      { q: '___ spaghetti sono buoni.', o: ['Gli', 'I', 'Le'], why: '*spaghetti* starts with s + consonant: *gli*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Noi ___ del pane. (prendere)', a: ['prendiamo'], why: '*noi prendiamo*' },
      { q: '___ un caffè, per favore.', a: ['Vorrei'], why: 'The polite form: *vorrei*.' },
      { q: 'Un bicchiere ___ latte.', a: ['di'], why: 'After a quantity: *di*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Find the price.', pairs: [
      ['2,50 €', 'due euro e cinquanta'],
      ['3,20 €', 'tre euro e venti'],
      ['5,00 €', 'cinque euro'],
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Vorrei del pane e del formaggio.', why: '*del pane*, *del formaggio*: both masculine.' },
      { a: 'Quanto costa il caffè?', why: 'The question about the price.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Vorrei [una] caffè.', a: ['un'], why: '*caffè* is masculine: *un caffè*.' },
      { s: 'Mi [piace] le mele.', a: ['piacciono'], why: 'Plural noun: *mi piacciono*.' },
    ] },
  ],
};
