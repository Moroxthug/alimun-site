// English A1, unit 4, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for the owner's review.
// Each lesson: a full explanation first (the rule in plain words, why, many examples, the usual mistakes, a text that
// uses it), then fewer exercises from controlled to free, one skills task, and one task in the format of the A2 Key exam.
export const UNIT = {
  id: 'u4',
  title: 'Food and drink',
  goal: 'Say what you like to eat and drink, order in a café and understand prices.',
  art: 'teacup',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['food', 'drink', 'like', 'ordering', 'numbers', 'money'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'I like fish',
      about: 'Name food and drink, say what you like and do not like, and use a, an and some.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: 'Food is one of the first things people talk about in a new language: at home, at work, with friends, in a café. In this lesson you learn the most common words for food and drink, and how to say what you like.\n\nTo say that something is good for you, use **like**: *I like fish.* To say it more strongly, use **love**: *I love chocolate.* To say the opposite, use **don’t like**: *I don’t like coffee.* And when you really do not like something: *I **hate** onions.*' },
          { t: 'table', caption: 'Food and drink', explain: ['head'], head: ['Food', 'Drinks', 'Fruit and vegetables'], rows: [
            ['bread', 'water', 'an apple'],
            ['cheese', 'tea', 'a banana'],
            ['rice', 'coffee', 'an orange'],
            ['pasta', 'milk', 'a tomato'],
            ['fish', 'juice', 'a potato'],
            ['chicken', 'hot chocolate', 'a carrot'],
            ['an egg', 'cola', 'an onion'],
          ] },
          { t: 'tip', art: 'owl', md: 'In English you **drink** a drink and **eat** food: *I drink tea. I eat rice.* Many languages use one verb for both, or say *take* a coffee. In English, say **have** for both when you talk about a meal: *I have coffee for breakfast. We have pasta for dinner.*' },
        ],
        [
          { t: 'text', md: 'With **I, you, we** and **they**, the verb is just **like**. With **he, she** and **it**, add **-s**: **likes**. This **-s** is very small, but English speakers hear it, so try not to forget it.\n\nFor the negative, use **don’t** (= *do not*) with *I, you, we, they*, and **doesn’t** (= *does not*) with *he, she, it*. After **doesn’t**, the verb has no **-s**: *She doesn’t like milk*, not *She doesn’t likes milk*.\n\nTo ask, put **Do** or **Does** at the start: *Do you like fish? Does he like tea?* The short answers are **Yes, I do. / No, I don’t.** and **Yes, he does. / No, he doesn’t.**' },
          { t: 'table', caption: 'like', quiz: true, explain: ['head'], head: ['', 'Yes', 'No', 'Question'], rows: [
            ['I / you / we / they', 'like', 'don’t like', 'Do you like …?'],
            ['he / she / it', 'likes', 'doesn’t like', 'Does she like …?'],
          ] },
          { t: 'examples', items: [
            { s: 'I **like** pasta, but I **don’t like** rice.', n: '*but* joins a yes and a no.' },
            { s: 'My brother **loves** chicken.', n: 'One person: *loves*, with *-s*.' },
            { s: 'Anna **doesn’t like** coffee. She **likes** tea.', n: '*doesn’t* + *like*, without *-s*.' },
            { s: '**Do** you **like** fish? – **Yes, I do.**', n: 'A question and a short answer.' },
            { s: '**Does** Tom **like** cheese? – **No, he doesn’t.**', n: '*does* for *he*.' },
          ] },
        ],
        [
          { t: 'text', md: 'Some things you can **count**: *one apple, two apples, three eggs*. With one of these things, use **a** or **an**: **a** banana, **an** egg. Use **an** before a vowel sound: *an apple, an orange, an onion*.\n\nOther things you **cannot count**: *bread, cheese, rice, pasta, milk, water, coffee*. You cannot say *a bread* or *two milks*. These words have no **a** and no **-s**. To talk about an amount of them, use **some**: *some bread, some water*. Use **some** also with more than one thing you can count: *some apples*.' },
          { t: 'table', caption: 'a, an or some?', explain: ['head', 'col1'], head: ['Example', 'Why'], rows: [
            ['a banana, an egg', 'one thing you can count'],
            ['some bananas, some eggs', 'more than one thing you can count'],
            ['some bread, some milk', 'a thing you cannot count'],
          ] },
          { t: 'tip', art: 'owl', md: 'To count things you cannot count, use a container or a piece: **a cup of** tea, **a glass of** water, **a bottle of** milk, **a piece of** cheese, **a slice of** bread. *Can I have a glass of water?* is right; *a water* is common in cafés too, but *a glass of water* is always correct.' },
        ],
        [
          { t: 'text', md: 'These are the mistakes teachers hear most often in this lesson.' },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['She like fish.', 'She likes fish.', 'With *he, she, it*: add *-s*.'],
            ['He doesn’t likes tea.', 'He doesn’t like tea.', 'After *doesn’t*: no *-s*.'],
            ['I want a bread.', 'I want some bread.', '*bread* cannot be counted: no *a*.'],
            ['I like the coffee.', 'I like coffee.', 'For things in general: no *the*.'],
          ] },
          { t: 'dialogue', title: 'What’s for dinner?', lines: [
            { who: 'Sam', s: 'What do you want for dinner?' },
            { who: 'Lucy', s: 'I don’t know. Do you like fish?' },
            { who: 'Sam', s: 'Yes, I do. I love fish. But Max doesn’t like it.' },
            { who: 'Lucy', s: 'OK. What about chicken and rice?' },
            { who: 'Sam', s: 'Good idea. We’ve got rice, but no chicken.' },
            { who: 'Lucy', s: 'No problem. I can go to the shop.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'picture', h: 'What is it?', items: [
            { pic: 'apple', o: ['an apple', 'an orange', 'a banana'], why: 'This is *an apple*: *an* before a vowel sound.' },
            { pic: 'bread', o: ['bread', 'cheese', 'rice'], why: 'This is *bread*. We say *some bread*, not *a bread*.' },
            { pic: 'cheese', o: ['cheese', 'bread', 'milk'], why: 'This is *cheese*.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'My sister ___ chocolate.', o: ['loves', 'love', 'loving'], why: 'One person (*she*): add *-s*: *loves*.' },
            { q: 'We ___ like onions.', o: ['don’t', 'doesn’t', 'not'], why: 'With *we*: *don’t*.' },
            { q: '___ your father like coffee?', o: ['Does', 'Do', 'Is'], why: 'With one person (*he*): *Does*.' },
            { q: 'Can I have ___ water, please?', o: ['some', 'a', 'an'], why: '*water* cannot be counted: *some water*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Can you count it?', groups: ['a or an', 'some'], explain: ['groups'], items: [
            { s: 'egg', g: 0, why: 'You can count eggs: *an egg*.' },
            { s: 'rice', g: 1, why: 'You cannot count rice: *some rice*.' },
            { s: 'banana', g: 0, why: '*a banana*' },
            { s: 'milk', g: 1, why: '*some milk*' },
            { s: 'orange', g: 0, why: '*an orange*' },
            { s: 'cheese', g: 1, why: '*some cheese*' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Each sentence has one mistake. Find it and fix it.', items: [
            { s: 'Tom [like] pizza.', a: ['likes'], why: 'With *he*: *likes*.' },
            { s: 'She doesn’t [likes] eggs.', a: ['like'], why: 'After *doesn’t*: *like*, without *-s*.' },
            { s: 'I eat [a] bread every morning.', a: ['some'], why: '*bread* cannot be counted: *some bread*, or no word.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Your turn: say these sentences after the tutor.', tutor: 'omar', items: [
            { a: 'I love chocolate.' },
            { a: 'She doesn’t like coffee.' },
            { a: 'Do you like fish?' },
            { a: 'Can I have some water, please?' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'Can I have a coffee, please?',
      about: 'Order food and drink in a café politely, and understand what the waiter says.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'In a café or a restaurant, English speakers order with polite questions, not with orders. The two most common ways are **Can I have …, please?** and **I’d like …, please.** **I’d like** is short for **I would like**. It means *I want*, but it is much more polite.\n\nWhy is this important? In English, **I want a coffee** sounds rude to a waiter, even if you smile. It is not a grammar mistake, but it is a mistake of politeness. Always use **Can I have** or **I’d like**, and always add **please**.' },
          { t: 'examples', items: [
            { s: '**Can I have** a cup of tea, **please**?', n: 'The most common way to order.' },
            { s: '**I’d like** a cheese sandwich, **please**.', n: '*I’d like* = *I would like*: polite.' },
            { s: '**Could I have** the menu, **please**?', n: '*Could* is even more polite.' },
            { s: '**Can we have** two coffees, **please**?', n: 'For you and a friend: *Can we have*.' },
            { s: 'Just a glass of water, **thanks**.', n: '*just* = only this.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In a café, people often say **a coffee** or **two teas**, as if you can count them. This means *a cup of coffee*, *two cups of tea*. It is normal when you order: *Two coffees, please.*' },
        ],
        [
          { t: 'text', md: 'The person who serves you will use some fixed questions. You do not need to understand every word: listen for the key words.\n\n**What can I get you?** or **Are you ready to order?** means: what do you want? **Anything else?** means: do you want something more? **Eat in or take away?** means: do you want to eat here or take it with you? In the USA, people say **for here or to go?**\n\nAt the end, you ask for the bill: **Can I have the bill, please?** In the USA: **the check**.' },
          { t: 'table', caption: 'In a café', explain: ['head', 'col2'], head: ['The waiter says', 'You say', 'What it means'], rows: [
            ['What can I get you?', 'Can I have a tea, please?', 'What do you want?'],
            ['Anything else?', 'No, that’s all, thanks.', 'Do you want more?'],
            ['Eat in or take away?', 'Take away, please.', 'Here, or with you?'],
            ['Here you are.', 'Thank you.', 'Here is your order.'],
            ['That’s six pounds, please.', 'Here you are.', 'This is the price.'],
          ] },
          { t: 'tip', art: 'owl', md: 'The answer to **Anything else?** is **No, that’s all, thanks** or **Yes, can I have a croissant too?** Do not just say *No.*: it sounds cold. Add **thanks**.' },
        ],
        [
          { t: 'dialogue', title: 'In a café', lines: [
            { who: 'Waiter', s: 'Hi there. What can I get you?' },
            { who: 'Grace', s: 'Hi. Can I have a hot chocolate, please?' },
            { who: 'Waiter', s: 'Sure. Small or large?' },
            { who: 'Grace', s: 'Small, please. And I’d like a cheese sandwich.' },
            { who: 'Waiter', s: 'Anything else?' },
            { who: 'Grace', s: 'No, that’s all, thanks.' },
            { who: 'Waiter', s: 'Eat in or take away?' },
            { who: 'Grace', s: 'Eat in, please.' },
            { who: 'Waiter', s: 'OK. That’s seven pounds fifty, please.' },
            { who: 'Grace', s: 'Here you are. Thank you.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Read the dialogue. Are the sentences true or false?', items: [
            { q: 'Grace wants a coffee.', a: 'f', why: 'She wants a hot chocolate.' },
            { q: 'Her drink is small.', a: 't', why: '*Small, please.*' },
            { q: 'Grace wants a sandwich.', a: 't', why: '*I’d like a cheese sandwich.*' },
            { q: 'She takes her food away.', a: 'f', why: 'She says *Eat in, please.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the waiter’s question and the answer.', pairs: [
            ['What can I get you?', 'A tea, please.'],
            ['Anything else?', 'No, that’s all, thanks.'],
            ['Eat in or take away?', 'Take away, please.'],
            ['Small or large?', 'Large, please.'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Which is the most polite?', items: [
            { q: '', o: ['Can I have a coffee, please?', 'I want a coffee.', 'Give me a coffee.'], why: 'A polite question with *please* is best.' },
            { q: '', o: ['I’d like the bill, please.', 'The bill.', 'I want the bill now.'], why: '*I’d like … please* is polite.' },
            { q: '', o: ['No, that’s all, thanks.', 'No.', 'Nothing.'], why: 'Add *thanks*: *No, that’s all, thanks.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Can I have a glass of water, please?', why: '*Can I have* + what you want + *please*.' },
            { a: 'I’d like a cheese sandwich, please.', why: '*I’d like* + what you want + *please*.' },
            { a: 'Can we have the bill, please?', why: 'For two people: *Can we have*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: choose the best reply.', items: [
            { q: '“Are you ready to order?”', o: ['Yes, can I have the soup, please?', 'Yes, I am from Spain.', 'No, it isn’t.'], why: '*Ready to order* asks what you want to eat or drink.' },
            { q: '“Anything else?”', o: ['No, that’s all, thanks.', 'Yes, I do.', 'Here you are.'], why: '*Anything else?* asks if you want more.' },
            { q: '“Eat in or take away?”', o: ['Eat in, please.', 'I’d like tea.', 'Yes, please.'], why: 'The question gives two choices: answer with one of them.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In the A2 Key listening test, many short conversations happen in shops and cafés. When the question gives you a choice (*eat in or take away?*, *small or large?*), the right answer usually repeats **one of the two words**.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Order in a café: say these sentences after the tutor.', tutor: 'sofia', items: [
            { a: 'Can I have a coffee, please?' },
            { a: 'I’d like a cheese sandwich.' },
            { a: 'No, that’s all, thanks.' },
            { a: 'Can I have the bill, please?' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'How much is it?',
      about: 'Count to 100, ask how much things cost, and say prices in pounds and euros.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'You know the numbers from 0 to 20. The tens are easy: most of them end in **-ty**: *twenty, thirty, forty, fifty*. Be careful with the spelling of **forty**: there is no *u*, even though *four* has one.\n\nTo say a number from 21 to 99, say the ten, then the number, with a small line (a **hyphen**) when you write it: **twenty-one**, **thirty-five**, **ninety-nine**. For 100, say **a hundred** or **one hundred**.' },
          { t: 'table', caption: 'Numbers 20 to 100', quiz: true, explain: ['head'], head: ['Number', 'Word', 'Number', 'Word'], rows: [
            ['20', 'twenty', '60', 'sixty'],
            ['30', 'thirty', '70', 'seventy'],
            ['40', 'forty', '80', 'eighty'],
            ['50', 'fifty', '90', 'ninety'],
            ['21', 'twenty-one', '100', 'a hundred'],
          ] },
          { t: 'tip', art: 'owl', md: 'English speakers hear **13** and **30** by the stress. In **thirTEEN** the strong part is at the end. In **THIRty** it is at the start. When you say a price, make the stress clear: *It’s fifTEEN pounds* (15) or *It’s FIFty pounds* (50).' },
        ],
        [
          { t: 'text', md: 'To ask the price of one thing, say **How much is it?** or **How much is the cake?** For more than one thing, say **How much are they?** or **How much are the apples?** The answer is **It’s …** or **They’re …**.\n\nIn Britain, the money is **pounds** (£) and **pence** (p). In much of Europe, it is **euros** (€) and **cents**. When you say a price with pounds and pence, you usually do not say *pence*: **£2.50** is *two pounds fifty*, and **€3.20** is *three euros twenty*.' },
          { t: 'table', caption: 'Saying prices', explain: ['head'], head: ['You see', 'You say'], rows: [
            ['£1', 'one pound'],
            ['£4', 'four pounds'],
            ['50p', 'fifty pence (or fifty p)'],
            ['£2.50', 'two pounds fifty'],
            ['€1', 'one euro'],
            ['€3.20', 'three euros twenty'],
          ] },
          { t: 'examples', items: [
            { s: '**How much is** a coffee? – **It’s** two pounds fifty.', n: 'One thing: *is* and *it’s*.' },
            { s: '**How much are** the bananas? – **They’re** one euro.', n: 'More than one thing: *are* and *they’re*.' },
            { s: 'That’s **eighteen** euros, please.', n: 'The waiter tells you the total.' },
            { s: 'Can I pay **by card**? – Yes, of course.', n: 'You can also pay **in cash**.' },
          ] },
        ],
        [
          { t: 'text', md: 'These are the most common mistakes with numbers and prices.' },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['How much is the apples?', 'How much are the apples?', 'More than one thing: *are*.'],
            ['fourty', 'forty', 'No *u* in *forty*.'],
            ['two pound', 'two pounds', 'More than one pound: *pounds*.'],
            ['How many is it?', 'How much is it?', 'For a price: *how much*.'],
          ] },
          { t: 'dialogue', title: 'At the market', lines: [
            { who: 'Ben', s: 'Excuse me, how much are the oranges?' },
            { who: 'Seller', s: 'They’re two pounds for six.' },
            { who: 'Ben', s: 'OK, six oranges, please. And how much is the cheese?' },
            { who: 'Seller', s: 'It’s four pounds fifty.' },
            { who: 'Ben', s: 'Great. Can I pay by card?' },
            { who: 'Seller', s: 'Of course. That’s six pounds fifty, please.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the numbers and the words.', pairs: [
            ['40', 'forty'],
            ['14', 'fourteen'],
            ['90', 'ninety'],
            ['35', 'thirty-five'],
            ['100', 'a hundred'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the price in words.', items: [
            { q: '£3 = three ___', a: ['pounds'], why: 'More than one: *pounds*.' },
            { q: '£2.50 = two pounds ___', a: ['fifty'], why: 'We do not usually say *pence* after pounds.' },
            { q: '€60 = ___ euros', a: ['sixty'], why: '60 is *sixty*.' },
            { q: '€42 = ___ euros', a: ['forty-two', 'forty two'], why: '42 is *forty-two*, with no *u*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
            { q: 'How much ___ the tomatoes?', o: ['are', 'is', 'am'], why: 'More than one thing: *are*.' },
            { q: 'How much is the cake? – ___ three euros.', o: ['It’s', 'They’re', 'Is'], why: 'One thing: *It’s*.' },
            { q: 'Can I pay ___ card?', o: ['by', 'with the', 'on'], why: 'We say *pay by card*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: read the note and choose the right answer.', items: [
            { q: 'SALE! Apples £1 for 4. How much are 8 apples?', o: ['£2', '£4', '£1'], why: '4 apples cost £1, so 8 apples cost £2.' },
            { q: 'Café Rosa: coffee £2.20, tea £1.80. Which is cheaper?', o: ['tea', 'coffee', 'They cost the same.'], why: '£1.80 is less than £2.20.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In the A2 Key reading test, Part 1 shows short notices, signs and messages. Read the **numbers** carefully, and check the question: does it ask for one thing or more than one?' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'How much is it?' },
            { a: 'It’s two pounds fifty.' },
            { a: 'How much are the apples?' },
            { a: 'Can I pay by card?' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'At the café',
      about: 'Read a café menu and a message about lunch, and use everything from this unit together.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'In this lesson you put the unit together. First, learn the words for the things you see in a café. Then read a menu and a short message, and answer questions like in the exam.\n\nWhen you read a menu, you do not need to understand every word. Look for the words you know, look at the prices, and guess the rest.' },
          { t: 'table', caption: 'In a café', explain: ['head', 'col1'], head: ['Word', 'What it is'], rows: [
            ['a cup', 'you drink tea or coffee from it'],
            ['a glass', 'you drink water or juice from it'],
            ['a table', 'you sit at it'],
            ['a menu', 'it shows the food, the drinks and the prices'],
            ['the bill', 'the paper with the price you pay'],
            ['a waiter / a waitress', 'the person who serves you'],
          ] },
          { t: 'ex', kind: 'label', h: 'Label the café.', scene: 'cafe', extra: ['bill'], items: [
            { x: 125, y: 137, a: 'cup', why: 'You drink coffee from a *cup*.' },
            { x: 66, y: 152, a: 'table', why: 'You sit at a *table*.' },
            { x: 188, y: 132, a: 'croissant', why: 'A *croissant* is a kind of bread for breakfast.' },
            { x: 95, y: 68, a: 'window', why: 'You look out of a *window*.' },
          ] },
        ],
        [
          { t: 'reading', title: 'The Corner Café: menu', md: '**Drinks**: tea £1.80, coffee £2.20, hot chocolate £2.50, orange juice £2, water £1.\n\n**Food**: cheese sandwich £4.50, chicken sandwich £5, tomato soup with bread £5.50, pasta with vegetables £7.\n\n**Something sweet**: apple cake £3, chocolate cake £3.50.\n\nOpen every day from 8 am to 6 pm. Eat in or take away.' },
          { t: 'ex', kind: 'choice', h: 'Read the menu and choose the right answer.', items: [
            { q: 'How much is a coffee?', o: ['£2.20', '£1.80', '£2.50'], why: 'Coffee: £2.20.' },
            { q: 'Which food has vegetables?', o: ['the pasta', 'the cheese sandwich', 'the apple cake'], why: '*pasta with vegetables*' },
            { q: 'You have £3. You want a drink and a cake. What can you buy?', o: ['nothing: £3 is not enough', 'a tea and an apple cake', 'water and a chocolate cake'], why: 'The cheapest drink is £1 and the cheapest cake is £3: together £4.' },
          ] },
        ],
        [
          { t: 'reading', title: 'A message from Grace', md: 'Hi Lucy! Do you want lunch tomorrow at the Corner Café? Their soup is great, and it isn’t expensive. I don’t eat meat, so I always have the tomato soup. My brother Ben loves their chicken sandwiches. He doesn’t like soup! Is 1 pm OK for you? Grace' },
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the message. True, false, or not given?', items: [
            { q: 'Grace wants to have lunch with Lucy.', a: 't', why: '*Do you want lunch tomorrow …?*' },
            { q: 'Grace eats chicken.', a: 'f', why: 'She doesn’t eat meat.' },
            { q: 'Ben likes soup.', a: 'f', why: '*He doesn’t like soup!*' },
            { q: 'Lucy likes the café.', a: 'ng', why: 'The message does not say what Lucy thinks.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In the A2 Key reading test, some questions have three answers: *right*, *wrong* and *doesn’t say*. Choose **doesn’t say** (not given) when the text does not give the information, even if the sentence seems likely.' },
        ],
        [
          { t: 'ex', kind: 'build', h: 'Write the sentence. Two words do not belong.', items: [
            { a: 'Can I have a glass of water, please?', extra: ['want', 'some'], why: '*a glass of water*: no *some*, and *Can I have* is polite.' },
            { a: 'My brother doesn’t like soup.', extra: ['likes', 'don’t'], why: 'One person: *doesn’t like*, without *-s*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Make the sentence polite.', items: [
            { q: 'I want a tea.', cue: 'Can I', a: ['Can I have a tea, please?', 'Can I have a tea please?'], why: 'Use *Can I have …, please?*' },
            { q: 'I want the bill.', cue: 'I’d', a: ['I’d like the bill, please.', 'I’d like the bill please.'], why: '*I’d like* is the polite *I want*.' },
          ] },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'mei', items: [
            { a: 'I don’t eat meat.' },
            { a: 'Their soup is great.' },
            { a: 'Eat in, please.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
      { q: 'My mother ___ tea.', o: ['likes', 'like', 'liking'], why: 'One person: *likes*.' },
      { q: 'They ___ like fish.', o: ['don’t', 'doesn’t', 'aren’t'], why: 'With *they*: *don’t*.' },
      { q: 'Can I have ___ bread, please?', o: ['some', 'a', 'an'], why: '*bread* cannot be counted: *some*.' },
      { q: 'I’d like ___ orange juice.', o: ['an', 'a', 'two'], why: 'Before a vowel sound: *an*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'He doesn’t [eats] meat.', a: ['eat'], why: 'After *doesn’t*: no *-s*.' },
      { s: 'How much [is] the apples?', a: ['are'], why: 'More than one thing: *are*.' },
      { s: 'It’s [fourty] euros.', a: ['forty'], why: '*forty* has no *u*.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
      { q: 'The waiter asks “Anything else?” You don’t want more. You say:', o: ['No, that’s all, thanks.', 'No.', 'Yes, I do.'], why: 'Polite: *No, that’s all, thanks.*' },
      { q: 'You want to know the price of one cake. You say:', o: ['How much is it?', 'How much are they?', 'How many is it?'], why: 'One thing: *How much is it?*' },
      { q: 'You want to order a coffee. You say:', o: ['Can I have a coffee, please?', 'I want coffee.', 'Coffee now.'], why: 'A polite question with *please*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the number in words.', items: [
      { q: '30 + 20 = ___', a: ['fifty'], why: '50 is *fifty*.' },
      { q: '90 + 10 = a ___', a: ['hundred'], why: '100 is *a hundred*.' },
      { q: '15 + 6 = ___', a: ['twenty-one', 'twenty one'], why: '21 is *twenty-one*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the question and the answer.', pairs: [
      ['Do you like cheese?', 'Yes, I do.'],
      ['Does Anna like coffee?', 'No, she doesn’t.'],
      ['How much are the bananas?', 'They’re one euro.'],
      ['Eat in or take away?', 'Take away, please.'],
    ] },
  ],
};
