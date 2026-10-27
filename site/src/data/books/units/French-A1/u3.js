// French A1, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Food and drink',
  goal: 'Order in a café, buy food and say what you like.',
  art: 'pizza',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['food', 'drink', 'articles', 'partitive', 'ordering', 'prices', 'likes'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Le pain, la pomme, les œufs',
      about: 'Masculine and feminine nouns, le / la / les, un / une / des and food words.',
      art: 'croissant',
      spreads: [
        [
          { t: 'text', md: 'Every French noun is **masculine** or **feminine**, even a table or a loaf of bread. You must learn the article with the noun: **le pain**, **la pomme**. Before a vowel or a silent **h**, both become **l’**: *l’eau*, *l’homme*. The plural is **les** for both. For *a* and *some*, use **un** (masculine), **une** (feminine) and **des** (plural).' },
          { t: 'table', caption: 'The articles', explain: ['head'], head: ['', 'masculine', 'feminine', 'plural'], rows: [
            ['the', 'le pain', 'la pomme', 'les pommes'],
            ['the, before a vowel', 'l’œuf', 'l’eau', 'les œufs'],
            ['a, an, some', 'un fromage', 'une banane', 'des bananes'],
          ] },
          { t: 'tip', art: 'owl', md: 'To make a plural, add **-s**, which you do not pronounce: *la pomme, les pommes* sound the same, but *le* and *les* sound different. Nouns that end in **-eau** take **-x**: *un gâteau, des gâteaux*. Say **des** and **les** with a liaison before a vowel: *des œufs*, *les œufs*. The word *œuf* is pronounced with an **f**, but *œufs* loses it.' },
        ],
        [
          { t: 'table', caption: 'Food and drink', explain: ['head', 'col1'], head: ['French', 'English'], rows: [
            ['le pain', 'bread'],
            ['le fromage', 'cheese'],
            ['le lait', 'milk'],
            ['le café, le thé', 'coffee, tea'],
            ['le jus d’orange', 'orange juice'],
            ['l’eau (f.)', 'water'],
            ['la pomme, la banane', 'apple, banana'],
            ['le riz, les pâtes (f.)', 'rice, pasta'],
            ['les légumes (m.)', 'vegetables'],
            ['le poulet', 'chicken'],
            ['la viande, le poisson', 'meat, fish'],
            ['la salade', 'salad'],
            ['le gâteau', 'cake'],
          ] },
          { t: 'examples', items: [
            { s: 'Je mange **un** croissant et je bois **un** café.', n: '*manger* eat, *boire* drink.' },
            { s: '**La** salade est très bonne.', n: 'A particular salad: *la*.' },
            { s: 'Elle achète **des** pommes et **des** bananes.', n: 'Plural: *des*.' },
            { s: '**Le** lait est dans le frigo.', n: '*le lait* is masculine.' },
            { s: 'Voici **l’**eau et **le** pain.', n: '*l’eau* is feminine, *le pain* is masculine.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Masculine or feminine? Sort the words.', groups: ['le', 'la', 'les'], items: [
            { s: 'pain', g: 0, why: '*le pain*' },
            { s: 'pomme', g: 1, why: '*la pomme*' },
            { s: 'légumes', g: 2, why: 'Plural: *les légumes*.' },
            { s: 'fromage', g: 0, why: '*le fromage*' },
            { s: 'banane', g: 1, why: '*la banane*' },
            { s: 'pâtes', g: 2, why: 'Plural: *les pâtes*.' },
            { s: 'lait', g: 0, why: '*le lait*' },
            { s: 'salade', g: 1, why: '*la salade*' },
          ] },
          { t: 'ex', kind: 'picture', h: 'What is it?', items: [
            { pic: 'apple', o: ['une pomme', 'un pain', 'un fromage'], why: 'A *pomme* is an apple, and *pomme* is feminine: *une pomme*.' },
            { pic: 'bread', o: ['un pain', 'une pomme', 'un fromage'], why: 'Bread is *le pain*, so *un pain*.' },
            { pic: 'cheese', o: ['un fromage', 'une pomme', 'un thé'], why: 'Cheese is *le fromage*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right article.', items: [
            { q: 'Je voudrais ___ café.', o: ['un', 'une', 'des'], why: '*café* is masculine: *un café*.' },
            { q: 'Elle mange ___ pomme.', o: ['une', 'un', 'des'], why: '*pomme* is feminine: *une pomme*.' },
            { q: 'Nous achetons ___ pâtes.', o: ['des', 'un', 'une'], why: '*pâtes* is plural: *des pâtes*.' },
            { q: '___ eau est sur la table.', o: ['L’', 'Le', 'La'], why: 'Before a vowel: *l’eau*.' },
          ] },
          { t: 'ex', kind: 'memory', h: 'Find the pairs.', pairs: [
            ['le pain', 'bread'],
            ['le lait', 'milk'],
            ['la pomme', 'apple'],
            ['le fromage', 'cheese'],
            ['les œufs', 'eggs'],
            ['le poulet', 'chicken'],
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Je voudrais du café',
      about: 'du, de la, des, pas de, and how to say what you want and like.',
      art: 'pizza',
      spreads: [
        [
          { t: 'text', md: 'To talk about *some* of something you cannot count, French uses **du** (masculine), **de la** (feminine), **de l’** (before a vowel) and **des** (plural): *Je prends du fromage et de la salade.* This is called the partitive. In a negative sentence, all of them become **de** (or **d’** before a vowel): *Je ne prends pas de fromage.*' },
          { t: 'table', caption: 'du, de la, des', explain: ['head'], head: ['', 'masculine', 'feminine', 'plural'], rows: [
            ['some', 'du pain', 'de la salade', 'des pâtes'],
            ['some, before a vowel', 'de l’orange', 'de l’eau', 'des œufs'],
            ['none, not any', 'pas de pain', 'pas de salade', 'pas de pâtes'],
          ] },
          { t: 'tip', art: 'owl', md: '**du** is also in *Je viens du Maroc*, where it means *from the* (*de* + *le*). Here it means *some*. In a shop or a café, you will hear the partitive all the time: *Je voudrais du café, s’il vous plaît.*' },
        ],
        [
          { t: 'text', md: 'Use **je voudrais** (I would like) to order or ask politely, **je prends** (I am having) to choose and **j’aime** (I like) to say what you like. After **aimer**, **adorer** and **détester**, use **le, la, les**, not *du* or *de la*: *J’aime le thé. J’adore les pommes. Je déteste le poisson.* To say how much, use **un verre de**, **une bouteille de**, **un kilo de**: no article after **de**.' },
          { t: 'examples', items: [
            { s: 'Je **voudrais** un thé, s’il vous plaît.', n: '*voudrais* is a polite way to ask.' },
            { s: 'Je **prends** du fromage et du pain.', n: '*prendre* to take, to have.' },
            { s: '**J’aime** le café, mais je **n’aime pas** le thé.', n: 'After *aimer*, use *le*, *la*, *les*.' },
            { s: 'Un verre **d’**eau, s’il vous plaît.', n: '*de* becomes *d’* before a vowel.' },
            { s: 'Un kilo **de** pommes et une bouteille **de** lait.', n: 'No article after *de* for quantities.' },
          ] },
          { t: 'table', caption: 'prendre (to take, to have)', quiz: true, head: ['', 'prendre'], rows: [
            ['je', 'prends'],
            ['tu', 'prends'],
            ['il / elle / on', 'prend'],
            ['nous', 'prenons'],
            ['vous', 'prenez'],
            ['ils / elles', 'prennent'],
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'du, de la, de l’ or des? Choose.', items: [
            { q: 'Je prends ___ pain.', o: ['du', 'de la', 'des'], why: '*pain* is masculine: *du pain*.' },
            { q: 'Elle mange ___ salade.', o: ['de la', 'du', 'des'], why: '*salade* is feminine: *de la salade*.' },
            { q: 'Vous voulez ___ pâtes ?', o: ['des', 'du', 'de la'], why: '*pâtes* is plural: *des pâtes*.' },
            { q: 'Il boit ___ eau.', o: ['de l’', 'du', 'de la'], why: 'Before a vowel: *de l’eau*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the negative: pas de.', items: [
            { q: 'Je mange du fromage. → Je ne mange pas ___ fromage.', a: ['de'], why: 'In a negative sentence, *du* becomes *de*.' },
            { q: 'Elle prend de la salade. → Elle ne prend pas ___ salade.', a: ['de'], why: '*de la* becomes *de*.' },
            { q: 'Nous avons des œufs. → Nous n’avons pas ___ œufs.', a: ['d’', 'd'], why: '*des* becomes *de*, and before a vowel *d’*: *pas d’œufs*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the forms of prendre.', verb: 'prendre', tense: 'present', rows: [
            ['je', 'prends'],
            ['tu', 'prends'],
            ['il / elle', 'prend'],
            ['nous', 'prenons'],
            ['vous', 'prenez'],
            ['ils / elles', 'prennent'],
          ] },
          { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
            { q: 'You love apples. You say: « J’adore ___ pommes. »', o: ['les', 'des', 'de'], why: 'After *adorer*, use *les*.' },
            { q: 'You want a glass of water. You say: « Un verre ___ eau, s’il vous plaît. »', o: ['d’', 'de l’', 'du'], why: 'After a quantity, *de* (*d’* before a vowel), with no article.' },
            { q: 'You politely ask for a tea: « Je ___ un thé, s’il vous plaît. »', o: ['voudrais', 'veux', 'prenez'], why: '*je voudrais* is the polite way to ask.' },
            { q: 'You do not like fish: « Je n’aime ___ le poisson. »', o: ['pas', 'rien', 'de'], why: '*ne … pas* makes the sentence negative.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Au café',
      about: 'Order, ask the price and pay.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: 'In a café, the waiter says **Qu’est-ce que vous prenez ?** (What will you have?) or **Vous désirez ?** (What would you like?). You say **Je voudrais …, s’il vous plaît** or **Je vais prendre …**. To pay, say **L’addition, s’il vous plaît** (The bill, please). Always start with **Bonjour** and end with **Merci, au revoir**.' },
          { t: 'dialogue', title: 'Au café', lines: [
            { who: 'Serveur', s: 'Bonjour ! Qu’est-ce que vous prenez ?' },
            { who: 'Sophie', s: 'Je voudrais un café et un croissant, s’il vous plaît.' },
            { who: 'Serveur', s: 'Très bien. Et pour vous, Monsieur ?' },
            { who: 'Lucas', s: 'Un thé, s’il vous plaît. Et de l’eau.' },
            { who: 'Serveur', s: 'Voilà. Ça fait neuf euros cinquante.' },
            { who: 'Sophie', s: 'Merci. Au revoir !' },
          ] },
          { t: 'tip', art: 'owl', md: 'In France, a service charge is already in the price, so a tip is not needed; people sometimes leave small coins. If you say *un café*, you get a small, strong coffee. *Un café crème* or *un café au lait* is a coffee with milk.' },
        ],
        [
          { t: 'text', md: 'Prices are said with **euros** and **centimes**, and the comma is read as the word *euros*: **3,50 €** is *trois euros cinquante*. To ask the price, say **C’est combien ?** or **Combien ça coûte ?** The answer is **Ça fait …** or **C’est … euros**. The word *euro* takes **-s** in the plural: *deux euros*, but *un euro*.' },
          { t: 'table', caption: 'Prices', explain: ['head'], head: ['Price', 'Say'], rows: [
            ['1 €', 'un euro'],
            ['2,50 €', 'deux euros cinquante'],
            ['3,20 €', 'trois euros vingt'],
            ['4,80 €', 'quatre euros quatre-vingts'],
            ['12 €', 'douze euros'],
            ['0,90 €', 'quatre-vingt-dix centimes'],
          ] },
          { t: 'examples', items: [
            { s: '**C’est combien**, le café ? – **Deux euros** cinquante.', n: 'The price of a coffee.' },
            { s: '**Combien ça coûte** ? – **Ça fait** huit euros.', n: 'The total.' },
            { s: '**L’addition**, s’il vous plaît.', n: 'The bill.' },
            { s: 'Je **paie** par carte ?', n: 'Do I pay by card? *par carte* by card, *en espèces* in cash.' },
            { s: 'Un café, **c’est tout**, merci.', n: 'That is all.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Je voudrais un café, s’il vous plaît.', why: '*Je voudrais* + what you want.' },
            { a: 'Qu’est-ce que vous prenez ?', why: 'The waiter’s question.' },
            { a: 'L’addition, s’il vous plaît.', why: 'To ask for the bill.' },
            { a: 'Ça fait trois euros cinquante.', why: '*Ça fait* + the price.' },
          ] },
          { t: 'ex', kind: 'build', h: 'Build the sentence. Some words do not belong.', items: [
            { a: 'Je prends un thé et un gâteau.', extra: ['une', 'de'], why: '*thé* and *gâteau* are masculine: *un*.' },
            { a: 'Combien coûte le café ?', extra: ['font', 'est'], why: '*coûter* for the price.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Find the price.', pairs: [
            ['2,50 €', 'deux euros cinquante'],
            ['3,20 €', 'trois euros vingt'],
            ['5,00 €', 'cinq euros'],
            ['1,00 €', 'un euro'],
          ] },
          { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
            { q: 'You want to pay. You say:', o: ['L’addition, s’il vous plaît.', 'Je voudrais un café.', 'Bonne nuit.'], why: '*L’addition* is the bill.' },
            { q: 'You ask the price of a tea:', o: ['C’est combien, le thé ?', 'Qu’est-ce que vous prenez ?', 'Ça fait un euro.'], why: '*C’est combien ?* asks the price.' },
            { q: 'The waiter says « Ça fait quatre euros ». You say:', o: ['Voilà. Merci.', 'Je voudrais un thé.', 'Bonjour, Monsieur.'], why: 'You pay and say thank you.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'La carte et les courses',
      about: 'Read a café menu and a shopping list.',
      art: 'pizza',
      spreads: [
        [
          { t: 'reading', title: 'Le menu du café', md: '**Boissons**\nCafé : 2,00 €\nCafé crème : 3,00 €\nThé : 3,00 €\nJus d’orange : 4,00 €\nEau : 2,50 €\n\n**À manger**\nCroissant : 1,50 €\nSandwich au fromage : 5,50 €\nSalade : 7,00 €\nGâteau du jour : 4,50 €' },
          { t: 'reading', title: 'Une liste de courses', md: 'Pour samedi :\ndu pain, du lait, des œufs, du fromage, une salade, un kilo de pommes, une bouteille d’eau.\n\nPas de poulet : nous mangeons du riz et des légumes.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Le café coûte deux euros.', a: 't', why: '*Café : 2,00 €*' },
            { q: 'Le jus d’orange coûte trois euros.', a: 'f', why: 'It costs four euros: *Jus d’orange : 4,00 €*.' },
            { q: 'Le sandwich est au fromage.', a: 't', why: '*Sandwich au fromage*' },
            { q: 'Le café ferme à sept heures.', a: 'ng', why: 'The menu does not say when the café closes.' },
            { q: 'Il y a du poulet sur la liste de courses.', a: 'f', why: '*Pas de poulet*: they eat rice and vegetables.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the texts.', items: [
            { q: 'Un croissant coûte un euro ___.', a: ['cinquante'], why: '*Croissant : 1,50 €* is *un euro cinquante*.' },
            { q: 'Pour samedi, ils achètent un kilo de ___.', a: ['pommes'], why: '*un kilo de pommes*' },
            { q: 'Ils mangent du riz et des ___.', a: ['légumes', 'legumes'], why: '*du riz et des légumes*' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Look at the menu and choose.', items: [
            { q: 'Le gâteau du jour coûte…', o: ['quatre euros cinquante', 'cinq euros cinquante', 'sept euros'], why: '*Gâteau du jour : 4,50 €*' },
            { q: 'Qu’est-ce qui est le plus cher ?', o: ['La salade', 'Le café', 'Le croissant'], why: 'The salad costs 7,00 €, the most.' },
            { q: 'Pour deux cafés, on paie…', o: ['quatre euros', 'trois euros', 'deux euros'], why: 'Two coffees at 2,00 € make 4,00 €.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Je voudrais ___ thé.', o: ['un', 'une', 'des'], why: '*thé* is masculine: *un thé*.' },
      { q: 'Elle mange ___ salade.', o: ['de la', 'du', 'des'], why: '*salade* is feminine: *de la salade*.' },
      { q: 'J’adore ___ fromage.', o: ['le', 'du', 'un'], why: 'After *adorer*, use *le*.' },
      { q: 'Je ne mange pas ___ viande.', o: ['de', 'du', 'la'], why: 'In a negative sentence: *pas de*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Nous ___ du pain. (prendre)', a: ['prenons'], why: '*nous prenons*' },
      { q: 'Je ___ un café, s’il vous plaît. (vouloir, polite)', a: ['voudrais'], why: 'The polite form: *je voudrais*.' },
      { q: 'Un verre ___ lait, s’il vous plaît.', a: ['de'], why: 'After a quantity: *de*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Find the price.', pairs: [
      ['2,50 €', 'deux euros cinquante'],
      ['3,20 €', 'trois euros vingt'],
      ['5,00 €', 'cinq euros'],
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Je voudrais du pain et du fromage.', why: '*du pain*, *du fromage*: both masculine.' },
      { a: 'C’est combien, le café ?', why: 'The question about the price.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Je voudrais [du] salade.', a: ['de la'], why: '*salade* is feminine: *de la salade*.' },
      { s: 'Elle ne mange pas [du] viande.', a: ['de'], why: 'In a negative sentence: *pas de viande*.' },
    ] },
  ],
};
