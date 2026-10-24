// English A2, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Food and shopping',
  goal: 'Buy food, order in a café and talk about what you eat.',
  art: 'teacup',
  tags: { skills: ['grammar', 'vocabulary', 'speaking', 'reading'], topics: ['countable-uncountable', 'quantifiers', 'containers', 'cafe', 'shopping'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Some bread, an apple',
      about: 'Learn countable and uncountable nouns, and use a, an, some and any.',
      art: 'croissant',
      spreads: [
        [
          { t: 'text', md: '**Countable** nouns are things you can count: *one apple*, *two apples*. They have a singular and a plural form. **Uncountable** nouns are things you cannot count one by one, like liquids and many foods: *milk*, *rice*, *bread*. They have no plural form.' },
          { t: 'table', caption: 'Countable or uncountable?', explain: ['head'], quiz: true, head: ['Countable', 'Uncountable'], rows: [
            ['an egg, two eggs', 'milk'],
            ['a banana, three bananas', 'rice'],
            ['a tomato, four tomatoes', 'bread'],
            ['a sandwich, two sandwiches', 'cheese'],
            ['a biscuit, some biscuits', 'water'],
            ['a potato, five potatoes', 'pasta'],
          ] },
          { t: 'tip', art: 'owl', md: 'Do not say *a bread* or *breads*. Say *some bread* or *a loaf of bread*. The same is true for *money*: *some money*, not *a money*.' },
        ],
        [
          { t: 'text', md: 'Use **a** or **an** with one countable thing. Use *an* before a vowel sound: *an egg*, *an orange*, *an hour*. Use **some** and **any** with plural nouns and with uncountable nouns.' },
          { t: 'table', caption: 'A, an, some, any', explain: ['head'], head: ['', 'Singular', 'Plural', 'Uncountable'], rows: [
            ['+', 'There’s an apple.', 'There are some apples.', 'There’s some milk.'],
            ['−', 'There isn’t an apple.', 'There aren’t any apples.', 'There isn’t any milk.'],
            ['?', 'Is there an apple?', 'Are there any apples?', 'Is there any milk?'],
          ] },
          { t: 'examples', items: [
            { s: 'We need **some** onions for the soup.', n: 'A positive sentence: *some*.' },
            { s: 'I haven’t got **any** cash.', n: 'A negative sentence: *any*.' },
            { s: 'Would you like **some** cake?', n: 'When you offer something, use *some*, even in a question.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap every uncountable noun.', items: [
            { s: 'For breakfast I have [bread], two eggs and some [juice].', why: '*Bread* and *juice* are uncountable. *Eggs* has a plural, so it is countable.' },
            { s: 'Can you buy some [rice], three lemons and some [butter]?', why: '*Rice* and *butter* are uncountable. *Lemons* is a plural countable noun.' },
            { s: 'There are some apples, but there isn’t any [cheese].', why: '*Cheese* is uncountable. *Apples* is plural, so it is countable.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a, an, some or any.', items: [
            { q: 'I’d like ___ orange juice, please.', a: ['an', 'some'], why: 'Both are correct: *an orange juice* is one glass, *some orange juice* is an amount.' },
            { q: 'There isn’t ___ sugar in my coffee.', a: ['any'], why: 'A negative sentence with an uncountable noun: *any*.' },
            { q: 'She eats ___ apple every morning.', a: ['an'], why: 'One apple, and *apple* starts with a vowel sound: *an*.' },
            { q: 'We’ve got ___ tomatoes, so we can make a salad.', a: ['some'], why: 'A positive sentence with a plural noun: *some*.' },
            { q: 'Are there ___ eggs in the fridge?', a: ['any'], why: 'A question with a plural noun: *any*.' },
            { q: 'I need ___ new pan for the kitchen.', a: ['a'], why: 'One pan, and *new* starts with a consonant sound: *a*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
            { q: '', o: ['Can I have some water?', 'Can I have some waters?', 'Can I have any waters?'], why: '*Water* is uncountable: *some water*.' },
            { q: '', o: ['There aren’t any bananas.', 'There aren’t some bananas.', 'There isn’t any bananas.'], why: 'Negative with a plural noun: *aren’t any*.' },
            { q: '', o: ['I bought some bread.', 'I bought a bread.', 'I bought some breads.'], why: '*Bread* is uncountable, so no *a* and no plural.' },
            { q: '', o: ['We had an egg for lunch.', 'We had a egg for lunch.', 'We had any egg for lunch.'], why: '*Egg* starts with a vowel sound: *an egg*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'How much? How many?',
      about: 'Talk about quantities with how much, how many, a lot of, a few and a little, and name food containers.',
      art: 'pretzel',
      spreads: [
        [
          { t: 'text', md: 'Use **How many** with plural countable nouns. Use **How much** with uncountable nouns. *How much* is also the question for prices.' },
          { t: 'examples', items: [
            { s: '**How many** eggs do we need?', n: '*Eggs* is countable: *how many*.' },
            { s: '**How much** milk is there?', n: '*Milk* is uncountable: *how much*.' },
            { s: '**How much** is this cake?', n: 'A question about the price.' },
          ] },
          { t: 'table', caption: 'Big and small amounts', explain: ['head', 'col0'], head: ['', 'Countable', 'Uncountable'], rows: [
            ['a big amount', 'a lot of eggs', 'a lot of milk'],
            ['a small amount', 'a few eggs', 'a little milk'],
            ['in negatives', 'not many eggs', 'not much milk'],
          ] },
          { t: 'tip', art: 'owl', md: '*A lot of* works with both kinds of nouns. In positive sentences, *a lot of* is more natural than *much*: say *I drink a lot of tea*, not *I drink much tea*.' },
        ],
        [
          { t: 'text', md: 'We often buy uncountable things in **containers** or pieces. Then we can count them: *two bottles of water*, *three loaves of bread*.' },
          { t: 'table', caption: 'Containers and amounts', explain: ['head'], quiz: true, head: ['Container', 'Example'], rows: [
            ['a bottle of', 'a bottle of water'],
            ['a carton of', 'a carton of milk'],
            ['a packet of', 'a packet of biscuits'],
            ['a tin of', 'a tin of tomatoes'],
            ['a jar of', 'a jar of jam'],
            ['a loaf of', 'a loaf of bread'],
            ['a bar of', 'a bar of chocolate'],
            ['a bunch of', 'a bunch of bananas'],
            ['a kilo of', 'a kilo of potatoes'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct word.', items: [
            { q: 'How ___ apples do you want?', o: ['many', 'much', 'little'], why: '*Apples* is countable and plural: *how many*.' },
            { q: 'How ___ rice do we need for six people?', o: ['much', 'many', 'few'], why: '*Rice* is uncountable: *how much*.' },
            { q: 'I only want a ___ sugar in my tea.', o: ['little', 'few', 'many'], why: '*Sugar* is uncountable: *a little*.' },
            { q: 'There are only a ___ biscuits left.', o: ['few', 'little', 'much'], why: '*Biscuits* is countable and plural: *a few*.' },
            { q: 'We haven’t got ___ money this month.', o: ['much', 'many', 'a few'], why: 'Negative with an uncountable noun: *not much*.' },
            { q: 'My son eats ___ fruit. He loves it.', o: ['a lot of', 'many', 'a few'], why: '*Fruit* is uncountable here, and this is a positive sentence: *a lot of*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the containers and the food.', pairs: [
            ['a loaf of', 'bread'],
            ['a bar of', 'chocolate'],
            ['a jar of', 'jam'],
            ['a tin of', 'tuna'],
            ['a bunch of', 'bananas'],
            ['a bottle of', 'olive oil'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with How much or How many.', items: [
            { q: '___ cups of coffee do you drink a day?', a: ['How many'], why: '*Cups* is countable: *how many*.' },
            { q: '___ cheese is in the fridge?', a: ['How much'], why: '*Cheese* is uncountable: *how much*.' },
            { q: '___ is a bottle of water here?', a: ['How much'], why: 'A question about the price: *how much*.' },
            { q: '___ people are coming to dinner?', a: ['How many'], why: '*People* is the plural of *person*: *how many*.' },
            { q: '___ bread do we need for the picnic?', a: ['How much'], why: '*Bread* is uncountable: *how much*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Can I have…?',
      about: 'Order in a café, buy things in a shop and ask about prices.',
      art: 'teacup',
      spreads: [
        [
          { t: 'dialogue', title: 'In a café', lines: [
            { who: 'Waiter', s: 'Hello. What would you like?' },
            { who: 'Fatima', s: 'Hi. Can I have a large cappuccino, please?' },
            { who: 'Waiter', s: 'Of course. Anything else?' },
            { who: 'Fatima', s: 'Yes, I’d like a piece of carrot cake, please.' },
            { who: 'Waiter', s: 'Eat in or take away?' },
            { who: 'Fatima', s: 'Eat in, please. How much is it?' },
            { who: 'Waiter', s: 'That’s six pounds twenty, please.' },
            { who: 'Fatima', s: 'Can I pay by card?' },
            { who: 'Waiter', s: 'Yes, of course. Here you are.' },
          ] },
          { t: 'text', md: '*Can I have…?* and *I’d like…* are polite ways to ask for something. *I’d like* means *I would like*. *Here you are* is what we say when we give something to someone.' },
        ],
        [
          { t: 'table', caption: 'Useful phrases', explain: ['head', 'col0'], head: ['What you want to do', 'What you say'], rows: [
            ['ask for something', 'Can I have a tea, please?'],
            ['say what you want', 'I’d like two croissants, please.'],
            ['ask the price of one thing', 'How much is it?'],
            ['ask the price of more things', 'How much are they?'],
            ['ask how to pay', 'Can I pay by card?'],
            ['finish your order', 'No, thanks. That’s all.'],
          ] },
          { t: 'tip', art: 'owl', md: '*I want a coffee* can sound rude in a café or a shop. *I’d like a coffee, please* or *Can I have a coffee, please?* are polite.' },
        ],
        [
          { t: 'dialogue', title: 'At the market', lines: [
            { who: 'Seller', s: 'Good morning. Can I help you?' },
            { who: 'Daniel', s: 'Yes, please. How much are the strawberries?' },
            { who: 'Seller', s: 'They’re three pounds a box.' },
            { who: 'Daniel', s: 'I’d like two boxes, please. And a kilo of carrots.' },
            { who: 'Seller', s: 'Here you are. Anything else?' },
            { who: 'Daniel', s: 'No, thanks. That’s all.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the questions and the answers.', pairs: [
            ['Large or small?', 'Small, please.'],
            ['Eat in or take away?', 'Take away, please.'],
            ['Anything else?', 'No, thanks. That’s all.'],
            ['How much is it?', 'It’s four pounds fifty.'],
            ['Can I pay by card?', 'Yes, of course.'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the correct words.', items: [
            { q: '___ a cheese sandwich, please.', o: ['I’d like', 'I like', 'I’d liking'], why: '*I’d like* = *I would like*, a polite way to order. *I like* means you enjoy it in general.' },
            { q: 'How much ___ these lemons?', o: ['are', 'is', 'do'], why: '*These lemons* is plural: *How much are…?*' },
            { q: 'Can I ___ a bottle of water, please?', o: ['have', 'having', 'to have'], why: '*Can I* + base form: *Can I have…?*' },
            { q: 'Thank you. ___ you are.', o: ['Here', 'There', 'This'], why: 'When we give something to someone, we say *Here you are*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Can I have a glass of water?', why: '*Can I have* + the thing you want.' },
            { a: 'How much are the strawberries?', why: '*How much* + *are* + plural noun.' },
            { a: 'I’d like a piece of cake.', why: '*I’d like* + the thing you want.' },
            { a: 'Can I pay by card?', why: '*Can I* + *pay* + *by card*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Soup for dinner',
      about: 'Read a recipe and a shopping list.',
      art: 'pizza',
      spreads: [
        [
          { t: 'reading', title: 'Easy tomato soup (for four people)', md: 'You need two tins of tomatoes, one onion, a little olive oil, a litre of water, a little salt and a little sugar. You also need some fresh bread.\n\nFirst, cut the onion into small pieces. Then put a little olive oil in a big pan and cook the onion for five minutes. After that, add the tomatoes, the water, the salt and the sugar. Cook the soup for twenty minutes. Finally, serve it hot with the bread.' },
          { t: 'reading', title: 'A note on the fridge', md: 'Hi Tom,\n\nI’m making tomato soup tonight. We’ve got some onions and a lot of salt, but there isn’t any olive oil and there aren’t any tomatoes. Can you buy two tins of tomatoes, a small bottle of olive oil and a loaf of bread, please? We don’t need any sugar.\n\nThanks! Yasmin' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'The soup is for four people.', a: 't', why: 'The recipe title says “for four people”.' },
            { q: 'You cook the onion for twenty minutes.', a: 'f', why: 'You cook the onion for five minutes. You cook the soup for twenty minutes.' },
            { q: 'Yasmin has got some onions at home.', a: 't', why: '“We’ve got some onions.”' },
            { q: 'Tom needs to buy some sugar.', a: 'f', why: '“We don’t need any sugar.”' },
            { q: 'Tom likes tomato soup.', a: 'ng', why: 'The note does not say what Tom likes.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
            { q: 'What do you do first?', o: ['Cut the onion.', 'Add the water.', 'Cook the tomatoes.'], why: '“First, cut the onion into small pieces.”' },
            { q: 'How many tins of tomatoes does Tom need to buy?', o: ['Two.', 'One.', 'Four.'], why: '“Can you buy two tins of tomatoes…?”' },
            { q: 'What does Tom need to buy?', o: ['Tomatoes, olive oil and bread.', 'Onions, salt and bread.', 'Tomatoes, sugar and onions.'], why: 'The note asks for tomatoes, olive oil and a loaf of bread.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with words from the texts.', items: [
            { q: 'You need a ___ of water.', a: ['litre'], why: 'The recipe says “a litre of water”.' },
            { q: 'Can you buy a small ___ of olive oil?', a: ['bottle'], why: 'Liquids like oil often come in a *bottle*.' },
            { q: 'There isn’t ___ olive oil.', a: ['any'], why: 'A negative sentence with an uncountable noun: *any*.' },
            { q: 'Can you buy a ___ of bread, please?', a: ['loaf'], why: 'We say *a loaf of bread*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'There aren’t ___ potatoes in the cupboard.', o: ['any', 'some', 'a'], why: 'Negative with a plural noun: *any*.' },
      { q: 'How ___ water do you drink a day?', o: ['much', 'many', 'few'], why: '*Water* is uncountable: *how much*.' },
      { q: 'I need ___ umbrella. It’s raining.', o: ['an', 'a', 'some'], why: 'One umbrella, and *umbrella* starts with a vowel sound: *an*.' },
      { q: 'Can you buy a ___ of chocolate for Grandma?', o: ['bar', 'loaf', 'bunch'], why: 'We say *a bar of chocolate*.' },
      { q: 'We’ve only got a ___ eggs, so we can’t make a big cake.', o: ['few', 'little', 'lot'], why: '*Eggs* is countable and plural: *a few*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'There’s ___ milk in the fridge, but there isn’t any juice.', a: ['some'], why: 'A positive sentence with an uncountable noun: *some*.' },
      { q: 'How ___ bananas are there?', a: ['many'], why: '*Bananas* is countable and plural: *how many*.' },
      { q: 'I’d like a ___ of milk, please. (container)', a: ['carton', 'bottle', 'glass', 'jug'], why: 'Milk comes in a *carton* or a *bottle*. In a café you can also ask for *a glass of milk*.' },
      { q: 'How much ___ these grapes? (be)', a: ['are'], why: '*These grapes* is plural: *are*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the questions and the answers.', pairs: [
      ['Eat in or take away?', 'Eat in, please.'],
      ['How many sandwiches would you like?', 'Two, please.'],
      ['How much is the coffee?', 'Two pounds forty.'],
      ['Anything else?', 'No, that’s all, thanks.'],
    ] },
    { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
      { q: '', o: ['I’d like some rice, please.', 'I’d like a rice, please.', 'I’d like some rices, please.'], why: '*Rice* is uncountable: *some rice*.' },
      { q: '', o: ['We eat a lot of vegetables.', 'We eat much vegetables.', 'We eat a little vegetables.'], why: '*A lot of* works in positive sentences. *A little* is for uncountable nouns.' },
    ] },
  ],
};
