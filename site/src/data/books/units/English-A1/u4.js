// English A1, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Food and drink',
  goal: 'Say what you like to eat and drink, order in a café and understand prices.',
  art: 'teacup',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['food', 'drink', 'like', 'ordering', 'numbers', 'money'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'I like fish',
      about: 'Name food and drink, and say what you like and want.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: 'Here are some common food and drink words. To say what you like, use **like** or **love**: *I like fish. I love chocolate.* For the negative, use **don’t like**: *I don’t like coffee.* For **he, she** and **it**, use **likes** and **doesn’t like**. To say what you want, use **want**: *I want some tea.*' },
          { t: 'table', caption: 'Food and drink', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Example'], rows: [
            ['bread', 'I eat bread every day.'],
            ['cheese', 'She likes cheese.'],
            ['rice', 'We eat rice with fish.'],
            ['fish', 'I don’t like fish.'],
            ['chicken', 'He eats chicken for dinner.'],
            ['apple', 'I want an apple.'],
            ['banana', 'She has a banana for breakfast.'],
            ['egg', 'I have an egg every morning.'],
            ['milk', 'The children drink milk.'],
            ['water', 'I drink water all day.'],
            ['tea', 'My father drinks tea.'],
            ['coffee', 'I don’t drink coffee.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In English, **tea** and **coffee** are drinks, and so are **water**, **milk** and **juice**. For **eat**, say *eat bread*. For drinks, say **drink**, not *eat*: *I drink tea.* In Britain, **supper** is a light meal late in the evening, and in the USA, **dinner** is the main evening meal.' },
        ],
        [
          { t: 'text', md: 'Use **a** or **an** with one thing you can count: *an apple, a banana, an egg*. Use **some** with more than one thing, and with things you cannot count, such as **bread, cheese, rice, milk** and **water**: *some apples, some bread, some milk*. You cannot say *a bread* or *two breads*.' },
          { t: 'examples', items: [
            { s: 'I want **an** apple.', n: 'One thing you can count: *an*.' },
            { s: 'I want **a** banana.', n: 'One thing you can count: *a*.' },
            { s: 'I want **some** bread.', n: 'You cannot count *bread*: *some*.' },
            { s: 'She likes **some** fruit, but she doesn’t like **any** vegetables.', n: '*some* for yes, *any* for no.' },
            { s: 'Do you want **some** tea?', n: 'An offer: *some*.' },
          ] },
          { t: 'dialogue', title: 'At home', lines: [
            { who: 'Ben', s: 'What do you want for lunch?' },
            { who: 'Grace', s: 'I want some rice and fish. Do you like fish?' },
            { who: 'Ben', s: 'No, I don’t like fish. I like chicken.' },
            { who: 'Grace', s: 'OK. We want rice, fish and chicken.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'picture', h: 'What is it?', items: [
            { pic: 'apple', o: ['apple', 'bread', 'cheese'], why: 'It is an *apple*.' },
            { pic: 'bread', o: ['bread', 'cheese', 'apple'], why: 'It is *bread*.' },
            { pic: 'cheese', o: ['cheese', 'bread', 'apple'], why: 'It is *cheese*.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Food or drink? Sort the words.', groups: ['food', 'drink'], explain: ['groups'], items: [
            { s: 'bread', g: 0, why: 'You eat bread.' },
            { s: 'tea', g: 1, why: 'You drink tea.' },
            { s: 'rice', g: 0, why: 'You eat rice.' },
            { s: 'juice', g: 1, why: 'You drink juice.' },
            { s: 'fish', g: 0, why: 'You eat fish.' },
            { s: 'coffee', g: 1, why: 'You drink coffee.' },
            { s: 'apple', g: 0, why: 'You eat an apple.' },
            { s: 'milk', g: 1, why: 'You drink milk.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write a, an or some.', items: [
            { q: 'I want ___ apple.', a: ['an'], why: '*apple* starts with a vowel sound: *an*.' },
            { q: 'I want ___ bread.', a: ['some'], why: '*Bread* is not countable: *some*.' },
            { q: 'She eats ___ egg.', a: ['an'], why: '*egg* starts with a vowel sound: *an*.' },
            { q: 'He drinks ___ water.', a: ['some'], why: '*Water* is not countable: *some*.' },
            { q: 'I want ___ banana.', a: ['a'], why: '*banana* starts with a consonant sound: *a*.' },
            { q: 'Do you want ___ tea?', a: ['some'], why: 'An offer: *some*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'I ___ fish. It is my favourite food.', o: ['love', 'don’t love', 'hate'], why: 'A favourite food: *love*.' },
            { q: 'She ___ coffee. She drinks tea.', o: ['doesn’t like', 'don’t like', 'isn’t like'], why: 'With *she*: *doesn’t like*.' },
            { q: 'Do you ___ tea?', o: ['like', 'likes', 'liking'], why: 'After *do* the verb has no *-s*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'odd', h: 'Find the odd one out.', items: [
            { o: ['bread', 'apple', 'banana', 'orange'], why: '*Bread* is not a fruit. The others are fruit.' },
            { o: ['cheese', 'water', 'tea', 'coffee'], why: '*Cheese* is food. The others are drinks.' },
            { o: ['milk', 'egg', 'fish', 'chicken'], why: '*Milk* is a drink. The others are food.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'I like fish and rice.', why: 'Subject, verb, object.' },
            { a: 'Do you want some tea?', why: '*Do* + subject + verb + *some*.' },
            { a: 'She doesn’t like coffee.', why: 'Subject, *doesn’t*, verb, object.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Can I have a coffee, please?',
      about: 'Order food and drink in a café and ask for something politely.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'To order in a café, say **Can I have …, please?** or **I’d like …, please.** **I’d like** is a polite way to say *I want*. It is short for **I would like**. The person who serves you often asks **Anything else?** To finish, say **No, thank you. That’s all.** When you give something to someone, say **Here you are.**' },
          { t: 'table', caption: 'In a café', explain: ['head', 'col1'], head: ['Say', 'When'], rows: [
            ['Can I have a coffee, please?', 'to order'],
            ['I’d like a sandwich, please.', 'to order, politely'],
            ['Anything else?', 'the waiter asks'],
            ['No, thank you. That’s all.', 'to finish your order'],
            ['Here you are.', 'when you give something'],
            ['Thank you. – You’re welcome.', 'to thank and to answer'],
          ] },
          { t: 'tip', art: 'owl', md: 'Do not say **I want a coffee** to a waiter. It sounds rude in English. Say **Can I have a coffee, please?** or **I’d like a coffee, please.** Always add **please**. In Britain, you often order at the counter and pay at once.' },
        ],
        [
          { t: 'dialogue', title: 'In a café', lines: [
            { who: 'Waitress', s: 'Good morning. What would you like?' },
            { who: 'Ben', s: 'Can I have a coffee, please?' },
            { who: 'Waitress', s: 'Of course. Anything else?' },
            { who: 'Ben', s: 'Yes, I’d like a cheese sandwich, please.' },
            { who: 'Waitress', s: 'Here you are.' },
            { who: 'Ben', s: 'Thank you.' },
            { who: 'Waitress', s: 'You’re welcome.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'bank', h: 'Fill the gaps with the words from the box.', extra: ['want', 'get'], items: [
            { q: 'Can I ___ a coffee, please?', a: 'have', why: '*Can I have …, please?*' },
            { q: 'I’d ___ a tea, please.', a: 'like', why: '*I’d like* is a polite way to order.' },
            { q: 'Anything ___?', a: 'else', why: '*Anything else?* is the waiter’s question.' },
            { q: 'Here you ___.', a: 'are', why: '*Here you are* when you give something.' },
            { q: 'No, ___ you. That’s all.', a: 'thank', why: '*No, thank you.*' },
          ] },
          { t: 'ex', kind: 'match', h: 'Find the answer.', pairs: [
            ['What would you like?', 'Can I have a tea, please?'],
            ['Anything else?', 'No, thank you. That’s all.'],
            ['Here you are.', 'Thank you.'],
            ['Thank you.', 'You’re welcome.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
            { q: 'You order a coffee. You say:', o: ['Can I have a coffee, please?', 'I want coffee.', 'Give me coffee.'], why: 'The polite way to order is *Can I have …, please?*' },
            { q: 'The waiter says “Anything else?” You do not want anything. You say:', o: ['No, thank you. That’s all.', 'Yes, here you are.', 'You’re welcome.'], why: 'To finish: *No, thank you. That’s all.*' },
            { q: 'The waiter gives you the coffee. He says “Here you are.” You say:', o: ['Thank you.', 'You’re welcome.', 'Anything else?'], why: 'Thank the waiter: *thank you*.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'I’d ___ a sandwich, please.', o: ['like', 'likes', 'liking'], why: '*I’d like* is the polite form.' },
            { q: 'Can I ___ a tea, please?', o: ['have', 'has', 'having'], why: '*Can I have …?* with no ending after *can*.' },
            { q: 'Here you ___.', o: ['are', 'is', 'am'], why: '*Here you are.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'build', h: 'Build the sentences. Two words do not belong.', items: [
            { a: 'Can I have a cheese sandwich, please?', extra: ['want', 'am'], why: '*Can I have …, please?* is the polite way to order.' },
            { a: 'I’d like a tea and some cake.', extra: ['are', 'has'], why: '*I’d like* + what you want.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'Can I [has] a coffee, please?', a: ['have'], why: 'After *can*, the verb does not change: *have*.' },
            { s: '[Do] I have a tea, please?', a: ['Can'], why: 'To ask politely, say *Can I have …?*' },
            { s: 'Here you [is].', a: ['are'], why: '*Here you are.*' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'How much is it?',
      about: 'Count to 100 and ask and say prices in pounds and euros.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'You know the numbers from 0 to 20. For **tens**, learn the words in the table. Be careful with the spelling of **forty** (no *u*) and with **fifteen** against **fifty**. To say 21 to 99, say the tens, then the number: *twenty-one, thirty-five, ninety-nine*.' },
          { t: 'table', caption: 'Numbers 20 to 100', explain: ['head'], quiz: true, head: ['Number', 'English', 'Number', 'English'], rows: [
            ['20', 'twenty', '60', 'sixty'],
            ['21', 'twenty-one', '70', 'seventy'],
            ['30', 'thirty', '80', 'eighty'],
            ['40', 'forty', '90', 'ninety'],
            ['50', 'fifty', '100', 'a hundred'],
          ] },
          { t: 'tip', art: 'owl', md: 'Say **thirteen** (13) with the stress on the end and **thirty** (30) with the stress on the beginning. **-teen** is stressed, **-ty** is not. In Britain, people say *a hundred* or *one hundred* for 100.' },
        ],
        [
          { t: 'text', md: 'To ask a price, say **How much is it?** for one thing and **How much are they?** for more than one. In Britain, the money is **pounds (£)** and **pence (p)**. In many countries in Europe, it is **euros (€)** and **cents**. Say the pounds, then the pence: *£2.50* is **two pounds fifty**. *75p* is **seventy-five pence**.' },
          { t: 'table', caption: 'Saying prices', explain: ['head'], quiz: true, head: ['Price', 'Say'], rows: [
            ['£1.00', 'one pound'],
            ['£2.50', 'two pounds fifty'],
            ['75p', 'seventy-five pence'],
            ['€3.20', 'three euros twenty'],
            ['€10.00', 'ten euros'],
            ['£15.99', 'fifteen pounds ninety-nine'],
          ] },
          { t: 'dialogue', title: 'At the market', lines: [
            { who: 'Grace', s: 'Hello. How much are the apples?' },
            { who: 'Man', s: 'They’re two pounds fifty.' },
            { who: 'Grace', s: 'And how much is the cheese?' },
            { who: 'Man', s: 'It’s four pounds.' },
            { who: 'Grace', s: 'I’d like some apples and some cheese, please.' },
            { who: 'Man', s: 'That’s six pounds fifty, please.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'crossword', h: 'Write the numbers.', words: [
            { a: 'thirty', clue: 'Twenty plus ten.' },
            { a: 'forty', clue: 'Thirty plus ten.' },
            { a: 'fifty', clue: 'Forty plus ten.' },
            { a: 'sixty', clue: 'Fifty plus ten.' },
            { a: 'eighty', clue: 'Seventy plus ten.' },
            { a: 'ninety', clue: 'Eighty plus ten.' },
          ] },
          { t: 'ex', kind: 'memory', h: 'Find the pairs.', pairs: [
            ['£1.00', 'one pound'],
            ['£2.50', 'two pounds fifty'],
            ['75p', 'seventy-five pence'],
            ['€3.20', 'three euros twenty'],
            ['€10.00', 'ten euros'],
            ['£15.99', 'fifteen pounds ninety-nine'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'How ___ is the tea?', a: ['much'], why: 'To ask a price: *How much …?*' },
            { q: 'How much ___ the apples?', a: ['are'], why: 'More than one thing: *are*.' },
            { q: 'How much ___ the cheese?', a: ['is'], why: 'One thing: *is*.' },
            { q: '£3.50 is three pounds ___.', a: ['fifty'], why: '50 pence: *fifty*.' },
            { q: 'Twenty plus thirty is ___.', a: ['fifty'], why: '20 + 30 = 50: *fifty*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: '£2.50: two pounds ___.', o: ['fifty', 'five', 'fifteen'], why: '50 pence: *fifty*.' },
            { q: '14: ___', o: ['fourteen', 'forty', 'fortyteen'], why: '14 is *fourteen*, and 40 is *forty*.' },
            { q: '€10.00: ten ___.', o: ['euros', 'pounds', 'pence'], why: '€ is *euro*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'How much is the coffee?', why: '*How much is* + one thing.' },
            { a: 'How much are the apples?', why: '*How much are* + more than one thing.' },
            { a: 'It is two pounds fifty.', why: 'Pounds first, then pence.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'How [many] is the tea?', a: ['much'], why: 'To ask a price: *How much …?*' },
            { s: 'How much [is] the apples?', a: ['are'], why: 'More than one thing: *are*.' },
            { s: 'It is [forteen] pounds.', a: ['fourteen'], why: 'The spelling is *fourteen*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'At the café',
      about: 'Read about a café menu and an order.',
      art: 'mug',
      spreads: [
        [
          { t: 'reading', title: 'The café menu', md: 'The café has a short menu. A cup of tea costs £2, and a coffee costs £2.50. A cheese sandwich costs £4.50 and a bowl of soup costs £5. For dessert, there is a slice of apple cake for £3.\n\nGrace and Ben are at the café. Grace says, “Can I have a tea and a cheese sandwich, please?” The waitress says, “That’s £6.50.” Ben says, “I’d like a coffee and some apple cake, please.” The waitress says, “That’s £5.50.” In total, they pay £12.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'A tea costs £2.', a: 't', why: '*A cup of tea costs £2.*' },
            { q: 'A cheese sandwich costs £5.', a: 'f', why: 'A cheese sandwich costs £4.50. The soup costs £5.' },
            { q: 'Grace wants a coffee.', a: 'f', why: 'Grace wants a tea and a cheese sandwich.' },
            { q: 'Ben wants apple cake.', a: 't', why: '*I’d like a coffee and some apple cake.*' },
            { q: 'They pay £12 in total.', a: 't', why: '£6.50 + £5.50 = £12.' },
            { q: 'The café has got a garden.', a: 'ng', why: 'The text does not say.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'What does it cost?', pairs: [
            ['tea', '£2'],
            ['coffee', '£2.50'],
            ['soup', '£5'],
            ['apple cake', '£3'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Read the text again and choose.', items: [
            { q: 'How much is the soup?', o: ['£5', '£4.50', '£3'], why: '*A bowl of soup costs £5.*' },
            { q: 'What does Grace order?', o: ['A tea and a cheese sandwich', 'A coffee and soup', 'A tea and apple cake'], why: '*Can I have a tea and a cheese sandwich, please?*' },
            { q: 'How much does Ben pay?', o: ['£5.50', '£6.50', '£12'], why: 'A coffee (£2.50) and apple cake (£3) cost £5.50.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'I want ___ apple.', o: ['an', 'a', 'some'], why: '*apple* starts with a vowel sound: *an*.' },
      { q: 'She ___ like fish.', o: ['doesn’t', 'don’t', 'isn’t'], why: 'With *she*: *doesn’t*.' },
      { q: '“___ I have a coffee, please?”', o: ['Can', 'Do', 'Am'], why: '*Can I have …, please?*' },
      { q: '£2.50: two pounds ___.', o: ['fifty', 'five', 'fifteen'], why: '50 pence: *fifty*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'I want ___ water.', a: ['some'], why: '*Water* is not countable: *some*.' },
      { q: 'How ___ is the tea?', a: ['much'], why: 'To ask a price: *How much …?*' },
      { q: 'How much ___ the apples?', a: ['are'], why: 'More than one thing: *are*.' },
      { q: 'Twenty plus thirty is ___.', a: ['fifty'], why: '20 + 30 = 50: *fifty*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Find the answer.', pairs: [
      ['What would you like?', 'I’d like a tea, please.'],
      ['Anything else?', 'No, thank you.'],
      ['How much is it?', 'It’s two pounds.'],
      ['Here you are.', 'Thank you.'],
    ] },
    { t: 'ex', kind: 'build', h: 'Build the sentences. Two words do not belong.', items: [
      { a: 'Can I have a cheese sandwich, please?', extra: ['want', 'am'], why: '*Can I have …, please?* is the polite way to order.' },
      { a: 'I’d like some tea, please.', extra: ['am', 'has'], why: '*I’d like* + what you want.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'How [many] is the tea?', a: ['much'], why: 'To ask a price: *How much …?*' },
      { s: 'She [don’t] like fish.', a: ['doesn’t', 'does not'], why: 'With *she*: *doesn’t*.' },
    ] },
  ],
};
