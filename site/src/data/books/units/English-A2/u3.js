// English A2, unit 3, second edition (docs/LESSONS_PLAN.md, L6). Draft for native-teacher review.
// Each lesson: a full explanation first (the rule in plain words, why, many examples, the usual mistakes, a text that
// uses it), then fewer exercises from controlled to free, one speaking task, and one task in the format of A2 Key.
export const UNIT = {
  id: 'u3',
  title: 'Food and shopping',
  goal: 'Talk about food and amounts, order in a café, buy things in a shop, and follow a simple recipe.',
  art: 'teacup',
  tags: { skills: ['grammar', 'vocabulary', 'speaking', 'reading'], topics: ['countable-uncountable', 'quantifiers', 'containers', 'cafe', 'shopping'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'Some bread, an apple',
      about: 'Know which nouns you can count, and use a, an, some and any in sentences, negatives and questions.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: 'In English, nouns are in two groups. **Countable** nouns are things you can count one by one: *one apple, two apples, three eggs*. They have a singular and a plural form.\n\n**Uncountable** nouns are things you cannot count one by one, usually because they are a mass or a liquid: *bread, rice, water, milk, cheese, money, music, information*. They have no plural, and you never put *a* or *an* before them. You say *some bread*, not *a bread* and not *breads*.\n\nThis matters because the small words before a noun (*a, some, any, much, many*) change with the group. Learn new food words with their group, and the rest becomes easy.' },
          { t: 'table', caption: 'Countable or uncountable?', explain: ['head'], head: ['Countable', 'Uncountable'], rows: [
            ['an apple, two apples', 'bread'],
            ['an egg, six eggs', 'rice'],
            ['a tomato, tomatoes', 'cheese'],
            ['a biscuit, biscuits', 'milk'],
            ['a sandwich, sandwiches', 'water'],
            ['a potato, potatoes', 'pasta'],
          ] },
          { t: 'tip', art: 'owl', md: 'Some words are uncountable in English but countable in other languages: **bread, pasta, fruit, money, news, advice, information, furniture**. *I need some information*, never *an information* or *informations*.' },
        ],
        [
          { t: 'text', md: 'Use **a** or **an** with one countable thing: *a banana, an orange*.\n\nUse **some** in positive sentences, with plural countable nouns and with uncountable nouns: *There are some eggs. I bought some cheese.*\n\nUse **any** in negative sentences and in most questions: *We haven’t got any milk. Have you got any eggs?*\n\nThere is one important exception: when you **offer** something or **ask for** something, use **some** in the question, because you expect the answer *yes*: *Would you like some tea? Can I have some water, please?*' },
          { t: 'examples', items: [
            { s: 'I’d like **an** apple and **a** banana.', n: 'One countable thing each: *a* or *an*.' },
            { s: 'There’s **some** rice in the cupboard.', n: 'Positive, uncountable: *some*.' },
            { s: 'We need **some** tomatoes for the salad.', n: 'Positive, plural: *some*.' },
            { s: 'There isn’t **any** bread left.', n: 'Negative: *any*.' },
            { s: 'Are there **any** eggs in the fridge?', n: 'A normal question: *any*.' },
            { s: 'Would you like **some** cake?', n: 'An offer: *some*, because you expect *yes*.' },
          ] },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I’d like a bread.', 'I’d like some bread.', '*bread* is uncountable: no *a*.'],
            ['We haven’t got some milk.', 'We haven’t got any milk.', 'In negatives, use *any*.'],
            ['Can I have any water?', 'Can I have some water?', 'When you ask for something, use *some*.'],
            ['I need some informations.', 'I need some information.', '*information* has no plural.'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'What’s in the fridge?', lines: [
            { who: 'Lucy', s: 'I’m hungry. Is there any food in the fridge?' },
            { who: 'Sam', s: 'There’s some cheese and there are some eggs.' },
            { who: 'Lucy', s: 'Is there any bread?' },
            { who: 'Sam', s: 'No, there isn’t any bread. But we’ve got some pasta.' },
            { who: 'Lucy', s: 'Great. And are there any tomatoes?' },
            { who: 'Sam', s: 'Just one. Would you like some tea while I cook?' },
            { who: 'Lucy', s: 'Yes, please!' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Read the dialogue. True or false?', items: [
            { q: 'There is some cheese in the fridge.', a: 't', why: '*There’s some cheese.*' },
            { q: 'There is some bread.', a: 'f', why: '*There isn’t any bread.*' },
            { q: 'They have got a lot of tomatoes.', a: 'f', why: 'There is *just one* tomato.' },
            { q: 'Sam offers Lucy a drink.', a: 't', why: '*Would you like some tea?*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Countable or uncountable?', groups: ['countable', 'uncountable'], explain: ['groups'], items: [
            { s: 'banana', g: 0, why: '*one banana, two bananas*' },
            { s: 'rice', g: 1, why: 'You cannot count rice one by one.' },
            { s: 'egg', g: 0, why: '*an egg, six eggs*' },
            { s: 'milk', g: 1, why: 'A liquid: uncountable.' },
            { s: 'money', g: 1, why: 'You count coins, but *money* is uncountable.' },
            { s: 'sandwich', g: 0, why: '*a sandwich, two sandwiches*' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose a, an, some or any.', items: [
            { q: 'Can I have ___ orange juice, please?', o: ['some', 'any', 'an'], why: 'Asking for something: *some*.' },
            { q: 'There aren’t ___ biscuits left.', o: ['any', 'some', 'a'], why: 'Negative: *any*.' },
            { q: 'I eat ___ egg every morning.', o: ['an', 'a', 'some'], why: 'One countable thing, vowel sound: *an*.' },
            { q: 'Have you got ___ cheese?', o: ['any', 'a', 'an'], why: 'A normal question: *any*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Each sentence has one mistake. Find it and fix it.', items: [
            { s: 'Would you like [any] coffee?', a: ['some'], why: 'An offer: *some*.' },
            { s: 'I bought [a bread] at the bakery.', a: ['some bread', 'bread'], why: '*bread* is uncountable.' },
            { s: 'We don’t have [some] eggs.', a: ['any'], why: 'Negative: *any*.' },
            { s: 'He gave me some good [advices].', a: ['advice'], why: '*advice* has no plural.' },
          ] },
          { t: 'ex', kind: 'select', h: 'In the format of the A2 Key exam (Reading, Part 1): what does the notice say?', items: [
            { q: 'Notice in a café: “Sandwiches: sorry, no bread today. Try our soups!” ___', o: ['You can’t get a sandwich today.', 'There is no soup today.', 'The café is closed today.'], why: 'No bread means no sandwiches; soup is offered instead.' },
            { q: 'Message on the fridge: “Sam, we haven’t got any milk. Can you buy some? Lucy” ___', o: ['Lucy wants Sam to buy milk.', 'Lucy bought some milk.', 'There is some milk in the fridge.'], why: '*We haven’t got any milk. Can you buy some?*' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Part 1 of the A2 Key reading paper you read six short notices or messages and choose what each one means. Read the whole notice first, then each option. The right option usually says the same thing **in different words**.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'sofia', items: [
            { a: 'Is there any milk in the fridge?' },
            { a: 'Would you like some tea?' },
            { a: 'There isn’t any bread left.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'How much? How many?',
      about: 'Ask and talk about amounts with how much, how many, a lot of, a few and a little, and name food containers.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'To ask about an amount, choose the question by the group of the noun.\n\n**How many** + plural countable noun: *How many eggs do we need?*\n\n**How much** + uncountable noun: *How much milk is there?* People also use **How much is it?** for prices, because *money* is uncountable.\n\nFor a big amount, **a lot of** works with both groups: *a lot of apples, a lot of water*. In negatives and questions people also say **much** and **many**: *We haven’t got much time. Are there many people?*' },
          { t: 'table', caption: 'Small and big amounts', explain: ['head', 'col0'], head: ['', 'Countable (plural)', 'Uncountable'], rows: [
            ['Question', 'How many tomatoes?', 'How much rice?'],
            ['A big amount', 'a lot of tomatoes', 'a lot of rice'],
            ['A small amount', 'a few tomatoes', 'a little rice'],
            ['Negative', 'not many tomatoes', 'not much rice'],
          ] },
          { t: 'tip', art: 'owl', md: '**A few** and **a little** are positive: *I have a few friends here* means some, enough to be happy. Without *a*, **few** and **little** sound negative (almost none). At A2, use **a few** and **a little**.' },
        ],
        [
          { t: 'text', md: 'Uncountable food is often counted with a **container** or a **piece**: *a bottle of water, two cartons of milk, a loaf of bread, a piece of cake*. The container is countable, so it can be plural: *three bottles of water*.\n\nThis is how you buy uncountable things in a shop, and how recipes give amounts.' },
          { t: 'table', caption: 'Containers and pieces', explain: ['head', 'col1'], head: ['English', 'Usually for'], rows: [
            ['a bottle of', 'water, juice, oil'],
            ['a carton of', 'milk, juice'],
            ['a packet of', 'biscuits, rice, pasta'],
            ['a tin of', 'tomatoes, beans, tuna'],
            ['a jar of', 'jam, honey, coffee'],
            ['a loaf of', 'bread'],
            ['a piece of', 'cake, cheese, paper'],
            ['a kilo of', 'potatoes, apples'],
          ] },
          { t: 'examples', items: [
            { s: '**How many** bottles of water do we need? – Two.', n: '*bottles* are countable: *how many*.' },
            { s: '**How much** sugar is in it? – Just **a little**.', n: '*sugar* is uncountable.' },
            { s: 'There were **a lot of** people at the market.', n: '*a lot of* with both groups.' },
            { s: 'I only bought **a few** apples.', n: 'A small number.' },
            { s: 'Could I have **a piece of** cake, please?', n: 'A piece makes *cake* countable.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['How much eggs?', 'How many eggs?', '*eggs* are countable.'],
            ['How many water?', 'How much water?', '*water* is uncountable.'],
            ['two milks', 'two cartons of milk', 'Count the container, not the milk.'],
            ['a few cheese', 'a little cheese', '*cheese* is uncountable: *a little*.'],
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'How ___ apples do you want?', o: ['many', 'much', 'lot'], why: '*apples* are countable.' },
            { q: 'There’s only ___ milk left.', o: ['a little', 'a few', 'many'], why: '*milk* is uncountable.' },
            { q: 'I’ve got ___ friends in London.', o: ['a few', 'a little', 'much'], why: '*friends* are countable.' },
            { q: 'We haven’t got ___ time.', o: ['much', 'many', 'a few'], why: '*time* is uncountable; negative: *much*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the container and the food.', pairs: [
            ['a loaf of', 'bread'],
            ['a carton of', 'milk'],
            ['a jar of', 'honey'],
            ['a tin of', 'tuna'],
            ['a packet of', 'biscuits'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write how much or how many.', items: [
            { q: '___ bananas are there?', a: ['How many'], why: '*bananas* are countable.' },
            { q: '___ coffee do you drink every day?', a: ['How much'], why: '*coffee* is uncountable.' },
            { q: '___ is a bottle of water?', a: ['How much'], why: 'A price: *how much*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'In the format of the A2 Key exam (Reading, Part 4): read the email and choose the best word for each gap.', items: [
            { q: 'Hi Ben, can you go to the supermarket? We need a ___ of bread.', o: ['loaf', 'bottle', 'tin'], why: 'Bread comes in a *loaf*.' },
            { q: 'Please get two ___ of milk too.', o: ['cartons', 'pieces', 'jars'], why: 'Milk comes in *cartons*.' },
            { q: 'We don’t need ___ eggs, there are six in the fridge.', o: ['any', 'some', 'much'], why: 'Negative, countable: *any*.' },
            { q: 'And buy a ___ apples for the children. Thanks!', o: ['few', 'little', 'lot'], why: '*apples* are countable: *a few*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Part 4 of the A2 Key reading paper, a short text has six gaps and three choices for each. Read the words **before and after** the gap: here, *of bread* tells you the answer must be a container for bread.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'omar', items: [
            { a: 'How many eggs do we need?' },
            { a: 'Could I have a bottle of water, please?' },
            { a: 'There’s only a little cheese left.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'I’d like a coffee, please',
      about: 'Order in a café and buy things in a shop politely, with I’d like, Could I have, Would you like and prices.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'At A1 you learned **Can I have…, please?** At A2 you can be more polite and more natural.\n\n**I’d like** (= I would like) is a polite way to say what you want: *I’d like a cheese sandwich, please.* It is softer than *I want*, which can sound rude to a waiter.\n\n**Could I have…?** is a very polite question: *Could I have the menu, please?*\n\nThe waiter or shop assistant offers with **Would you like…?** *Would you like anything to drink?* Answer **Yes, please** or **No, thank you**. Do not answer *Yes, I would like*: it sounds strange.' },
          { t: 'examples', items: [
            { s: '**I’d like** a large cappuccino, please.', n: 'Polite and natural.' },
            { s: '**Could I have** the bill, please?', n: 'Very polite: asking to pay.' },
            { s: '**Would you like** some milk with that? – **No, thank you.**', n: 'An offer and a polite answer.' },
            { s: '**Is that to take away**, or to eat here?', n: 'In a café: are you leaving with it?' },
            { s: '**Anything else?** – **No, that’s all, thanks.**', n: 'At the end of the order.' },
          ] },
          { t: 'tip', art: 'owl', md: '**I want** is grammatically correct, but in a café or shop it can sound like an order. Children say *I want*; adults usually say **I’d like** or **Could I have**.' },
        ],
        [
          { t: 'text', md: 'Prices: ask **How much is it?** for one thing and **How much are they?** for more than one. Say prices like this: **£3.50** is *three pounds fifty*; **€12.99** is *twelve euros ninety-nine*. In shops you will also hear **That’s £8.40, please** and **Do you want to pay by card?**\n\nSizes and choices: *small, medium, large*; *still or sparkling water*; *with or without sugar*.' },
          { t: 'dialogue', title: 'At the Corner Café', lines: [
            { who: 'Waiter', s: 'Hi! What would you like?' },
            { who: 'Maya', s: 'I’d like a medium latte and a piece of chocolate cake, please.' },
            { who: 'Waiter', s: 'Would you like anything else?' },
            { who: 'Maya', s: 'Could I have a bottle of water too? Still, please.' },
            { who: 'Waiter', s: 'Sure. Is that to eat here or to take away?' },
            { who: 'Maya', s: 'To eat here. How much is it?' },
            { who: 'Waiter', s: 'That’s nine pounds twenty, please.' },
            { who: 'Maya', s: 'Can I pay by card?' },
            { who: 'Waiter', s: 'Of course.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Read the dialogue and choose the right answer.', items: [
            { q: 'What does Maya order to drink?', o: ['A latte and some water', 'A latte and some juice', 'Only water'], why: '*a medium latte* and *a bottle of water*.' },
            { q: 'Where does Maya eat?', o: ['In the café', 'At home', 'At work'], why: '*To eat here.*' },
            { q: 'How much does she pay?', o: ['£9.20', '£2.90', '£9.12'], why: '*nine pounds twenty* is £9.20.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['Yes, I would like.', 'Yes, please.', 'Answer an offer with *Yes, please*.'],
            ['I would like a coffee? (to the waiter)', 'Could I have a coffee, please?', 'A question needs *could*, *can* or *would*.'],
            ['How much is the apples?', 'How much are the apples?', 'Plural: *are*.'],
            ['I want the bill.', 'Could I have the bill, please?', '*I want* sounds rude here.'],
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Could I have the menu, please?', why: '*Could I have* + thing + *please*.' },
            { a: 'Would you like anything to drink?', why: 'The waiter’s offer.' },
            { a: 'I’d like a small orange juice.', why: '*I’d like* + size + drink.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the waiter’s question and the best answer.', pairs: [
            ['What would you like?', 'A tea, please.'],
            ['Anything else?', 'No, that’s all, thanks.'],
            ['To eat here or to take away?', 'To take away, please.'],
            ['Still or sparkling?', 'Sparkling, please.'],
            ['Would you like sugar?', 'No, thank you.'],
          ] },
          { t: 'ex', kind: 'label', h: 'Label the café.', scene: 'cafe', extra: ['bill', 'menu'], items: [
            { x: 125, y: 137, a: 'cup', why: 'Your coffee comes in a *cup*.' },
            { x: 188, y: 132, a: 'croissant', why: 'A *croissant* is a kind of bread for breakfast.' },
            { x: 66, y: 152, a: 'table', why: 'You sit at a *table*.' },
            { x: 250, y: 42, a: 'lamp', why: 'A *lamp* gives light.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam (Listening, Part 1): read what you hear and choose the right answer.', items: [
            { q: 'Woman: “A cheese sandwich and an apple juice, please.” Man: “Sorry, we haven’t got any apple juice.” Woman: “Then an orange juice.” What does the woman drink?', o: ['orange juice', 'apple juice', 'water'], why: 'There is no apple juice, so she has *an orange juice*.' },
            { q: 'Man: “How much are the strawberries?” Woman: “Three pounds a box, or two boxes for five pounds.” He buys two boxes. How much does he pay?', o: ['£5', '£3', '£6'], why: '*two boxes for five pounds*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Part 1 of the A2 Key listening paper you hear five short conversations, and the speakers often **change their mind**, like the woman who wanted apple juice. Listen to the end before you choose.' },
          { t: 'ex', kind: 'speak', h: 'Order in the café. Say these sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'I’d like a medium latte, please.' },
            { a: 'Could I have the bill, please?' },
            { a: 'How much is it?' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'Soup for dinner',
      about: 'Read a recipe and a shopping list, and give instructions with first, then and after that.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: 'Recipes give instructions with the **imperative**: the verb on its own, with no subject. *Cut the onions. Add the water. Cook for twenty minutes.* The negative is **Don’t** + verb: *Don’t add salt yet.*\n\nTo show the order of the steps, use **First**, **Then**, **Next**, **After that** and **Finally**. These words make a text easy to follow, and they are useful in the A2 Key writing paper too.' },
          { t: 'table', caption: 'Kitchen verbs', explain: ['head', 'col1'], head: ['Verb', 'What you do'], rows: [
            ['cut', 'make something into pieces with a knife'],
            ['boil', 'cook in very hot water'],
            ['fry', 'cook in hot oil'],
            ['add', 'put one thing into another'],
            ['mix', 'put things together and turn them'],
            ['heat', 'make something hot'],
          ] },
        ],
        [
          { t: 'reading', title: 'Easy tomato soup (for four people)', md: '**You need:** two onions, a little oil, a tin of tomatoes, a litre of water, a few fresh tomatoes, some salt and a loaf of bread.\n\nFirst, cut the onions into small pieces. Then heat a little oil in a big pot and fry the onions for five minutes.\n\nNext, add the tin of tomatoes, the fresh tomatoes and the water. Boil it all for twenty minutes. Don’t add the salt yet.\n\nAfter that, mix the soup until it is smooth, and add some salt. Finally, cut the bread and serve the soup hot. Enjoy!' },
          { t: 'ex', kind: 'tf', h: 'Read the recipe. True, false or not given?', ng: true, items: [
            { q: 'The soup is for four people.', a: 't', why: '*for four people*' },
            { q: 'You fry the onions for twenty minutes.', a: 'f', why: 'You fry them for *five minutes*.' },
            { q: 'You add the salt at the start.', a: 'f', why: '*Don’t add the salt yet*: you add it after mixing.' },
            { q: 'The soup is good for children.', a: 'ng', why: 'The recipe does not say.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Shopping list', md: 'Hi Sam, I’m making the soup tonight. Can you buy these on your way home? Two onions, a tin of tomatoes, a loaf of bread. We’ve got oil and salt, so we don’t need any. Thanks! Lucy' },
          { t: 'ex', kind: 'choice', h: 'Read Lucy’s message and choose the right answer.', items: [
            { q: 'Why is Lucy writing?', o: ['to ask Sam to buy food', 'to invite Sam to dinner', 'to give Sam a recipe'], why: '*Can you buy these on your way home?*' },
            { q: 'What doesn’t Sam need to buy?', o: ['oil', 'onions', 'bread'], why: '*We’ve got oil and salt.*' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the steps in the right order: make sentences.', items: [
            { a: 'First, cut the onions.', why: '*First* + imperative.' },
            { a: 'Then add the water.', why: '*Then* + imperative.' },
            { a: 'Don’t add the salt yet.', why: 'Negative imperative: *Don’t* + verb.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'In the format of the A2 Key exam (Reading, Part 5): write one word in each gap.', items: [
            { q: 'Hi Maya! I’m cooking dinner tonight. Would you like ___ come?', a: ['to'], why: '*Would you like to* + verb.' },
            { q: 'I’m making soup, so I need ___ few tomatoes.', a: ['a'], why: '*a few* + plural noun.' },
            { q: 'Have you got ___ bread at home? Can you bring it?', a: ['any'], why: 'A question: *any*.' },
            { q: 'Dinner is ___ seven o’clock. See you later!', a: ['at'], why: '*at* + a time.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Part 5 of the A2 Key reading paper you write **one word** in each gap, with no options. The missing words are usually small grammar words: *to, a, any, at, of, there*. Read the whole sentence, then ask: which word makes it correct?' },
          { t: 'ex', kind: 'speak', h: 'Give the steps. Say these sentences after the tutor.', tutor: 'mei', items: [
            { a: 'First, cut the onions into small pieces.' },
            { a: 'After that, boil it for twenty minutes.' },
            { a: 'Finally, serve the soup hot.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'Choose a, an, some or any.', items: [
      { q: 'Would you like ___ cake?', o: ['some', 'any', 'a'], why: 'An offer: *some*.' },
      { q: 'There aren’t ___ eggs in the fridge.', o: ['any', 'some', 'an'], why: 'Negative: *any*.' },
      { q: 'I had ___ orange for breakfast.', o: ['an', 'a', 'any'], why: 'One countable thing, vowel sound: *an*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write how much or how many.', items: [
      { q: '___ people are coming?', a: ['How many'], why: '*people* is plural.' },
      { q: '___ rice do we need?', a: ['How much'], why: '*rice* is uncountable.' },
    ] },
    { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
      { q: 'Can you buy a ___ of milk?', o: ['carton', 'loaf', 'tin'], why: 'Milk comes in a *carton*.' },
      { q: 'There’s only a ___ sugar left.', o: ['little', 'few', 'lot'], why: '*sugar* is uncountable.' },
      { q: 'We’ve got a ___ apples.', o: ['few', 'little', 'much'], why: '*apples* are countable.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'Can I have [any] water, please?', a: ['some'], why: 'Asking for something: *some*.' },
      { s: 'How [many] money have you got?', a: ['much'], why: '*money* is uncountable.' },
      { s: 'I need some [informations].', a: ['information'], why: '*information* has no plural.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
      { q: 'The waiter asks: “Would you like some milk?” You want milk. You say:', o: ['Yes, please.', 'Yes, I would like.', 'Yes, I want.'], why: 'Answer an offer with *Yes, please*.' },
      { q: 'You want to pay. You say:', o: ['Could I have the bill, please?', 'I want the bill.', 'Give me the bill.'], why: 'Polite: *Could I have…?*' },
    ] },
    { t: 'ex', kind: 'tf', h: 'Read and decide: true or false?', items: [
      { q: 'In a recipe, “Cut the onions” is an imperative.', a: 't', why: 'The verb on its own gives an instruction.' },
      { q: '“Don’t add salt” means you add salt now.', a: 'f', why: '*Don’t* means not to do it.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the container and the food.', pairs: [
      ['a jar of', 'jam'],
      ['a loaf of', 'bread'],
      ['a bottle of', 'oil'],
      ['a piece of', 'cake'],
    ] },
  ],
};
