// English A2 for travel, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Eating out',
  goal: 'Order food, ask about dishes and pay.',
  art: 'pizza',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['restaurant', 'menu', 'ordering', 'allergies', 'paying'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'A table for two, please',
      about: 'Ask for a table, ask about the menu and order a meal.',
      art: 'pizza',
      spreads: [
        [
          { t: 'dialogue', title: 'In a restaurant', lines: [
            { who: 'Waiter', s: 'Good evening. Do you have a booking?' },
            { who: 'Sara', s: 'No, we don’t. A table for two, please.' },
            { who: 'Waiter', s: 'Of course. This way, please. Here’s the menu.' },
            { who: 'Sara', s: 'Thank you. What’s the soup of the day?' },
            { who: 'Waiter', s: 'It’s tomato and red pepper.' },
            { who: 'Sara', s: 'And what do you recommend for the main course?' },
            { who: 'Waiter', s: 'The fish pie is very popular.' },
            { who: 'Sara', s: 'OK. I’ll have the soup to start, and then the fish pie.' },
            { who: 'Waiter', s: 'And what would you like to drink?' },
            { who: 'Sara', s: 'Just some water, please. Tap water is fine.' },
          ] },
        ],
        [
          { t: 'text', md: 'A meal in a restaurant often has three parts: a **starter**, a **main course** and a **dessert**. To order, say *I’ll have…* or *Could I have…?* To ask about a dish, say *What’s…?* or *What’s in…?*' },
          { t: 'table', caption: 'Ordering in a restaurant', explain: ['head'], head: ['The waiter asks', 'You answer'], rows: [
            ['Are you ready to order?', 'Yes, I’ll have the chicken salad, please.'],
            ['What would you like to drink?', 'A glass of orange juice, please.'],
            ['Would you like a starter?', 'No, thank you. Just a main course.'],
            ['Anything else?', 'No, that’s all, thank you.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In the UK, you can ask for *tap water* in a restaurant. It is usually free. *Still water* and *sparkling water* come in a bottle and you pay for them.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the waiter’s question and the answer.', pairs: [
            ['Do you have a booking?', 'No, we don’t.'],
            ['Are you ready to order?', 'Yes, I’ll have the lamb, please.'],
            ['What would you like to drink?', 'Some sparkling water, please.'],
            ['Would you like a dessert?', 'No, thanks. I’m full.'],
            ['Anything else?', 'No, that’s all.'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right words.', items: [
            { q: 'A table ___ four, please.', o: ['for', 'of', 'to'], why: '*A table for* + the number of people.' },
            { q: 'I’ll ___ the vegetable curry, please.', o: ['have', 'take it', 'having'], why: '*I’ll have…* is a common way to order.' },
            { q: 'What do you ___?', o: ['recommend', 'recommending', 'recommends'], why: 'After *do you*, use the base form: *recommend*.' },
            { q: 'What’s ___ the house salad?', o: ['in', 'on', 'at'], why: '*What’s in…?* asks about the food in a dish.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Could I have the menu?', why: '*Could I have…?* is a polite request.' },
            { a: 'What is the soup of the day?', why: '*What* + *is* + the thing.' },
            { a: 'What would you like to drink?', why: '*What would you like…?* is the waiter’s polite question.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the three parts of a meal.', items: [
            { s: 'For a [starter] I’ll have the soup, then the steak as a [main] [course], and ice cream for [dessert].', why: 'A meal often has a *starter*, a *main course* and a *dessert*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Could we have the bill?',
      about: 'Talk about allergies and food you do not eat, and pay at the end.',
      art: 'churro',
      spreads: [
        [
          { t: 'text', md: 'If there is food you cannot or do not eat, tell the waiter before you order. Restaurants in the UK can tell you what is in their dishes, so always ask.' },
          { t: 'examples', items: [
            { s: 'I’m **allergic to** nuts.', n: '*Allergic to* + food: this food makes you ill.' },
            { s: '**Does** this dish **have** any milk in it?', n: 'Ask what is in a dish.' },
            { s: 'I’m **vegetarian**. I don’t eat meat or fish.', n: 'A *vegan* also does not eat eggs, milk or cheese.' },
            { s: 'Could I have it **without** onions?', n: '*Without* + food: ask for a dish with one thing less.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'Paying', lines: [
            { who: 'Javier', s: 'Excuse me. Could we have the bill, please?' },
            { who: 'Waitress', s: 'Of course. Here you are.' },
            { who: 'Javier', s: 'Is service included?' },
            { who: 'Waitress', s: 'Yes, there’s a service charge of ten per cent on the bill.' },
            { who: 'Javier', s: 'OK. Can I pay by card?' },
            { who: 'Waitress', s: 'Yes, of course. Do you want to pay together or separately?' },
            { who: 'Javier', s: 'Together, please.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In the UK, restaurants sometimes add a *service charge* to the bill. If there is no service charge, many people leave a tip of about ten per cent. In cafés and pubs where you pay at the bar, people often do not leave a tip.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right words.', items: [
            { q: 'I’m allergic ___ eggs.', o: ['to', 'of', 'with'], why: 'We say *allergic to*.' },
            { q: 'Does this soup ___ any meat in it?', o: ['have', 'has', 'having'], why: 'After *does*, use the base form: *have*.' },
            { q: 'I don’t eat meat. I’m ___', o: ['vegetarian.', 'allergic.', 'hungry.'], why: 'A *vegetarian* does not eat meat or fish.' },
            { q: 'Could I have the burger ___ cheese, please?', o: ['without', 'no', 'not'], why: '*Without* + food: with no cheese.' },
            { q: 'Could we have the ___, please? We want to pay.', o: ['bill', 'menu', 'tip'], why: 'The *bill* tells you how much to pay.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete what the customer says.', items: [
            { q: 'Is service ___ in the bill?', a: ['included'], why: '*Is service included?* asks if you pay for service already.' },
            { q: 'Can I pay ___ card?', a: ['by'], why: '*Pay by card*, *pay in cash*.' },
            { q: 'Can we pay ___? I’ll pay for my food and she’ll pay for hers.', a: ['separately'], why: '*Separately*: each person pays for their own food.' },
            { q: 'I’m allergic to fish. ___ this sauce have any fish in it?', a: ['Does'], why: '*This sauce* is one thing: *Does…?*' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'Javier pays in cash.', a: 'f', why: 'He asks *Can I pay by card?* and the waitress says yes.' },
            { q: 'The service charge is already on the bill.', a: 't', why: '*There’s a service charge of ten per cent on the bill.*' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A menu and a review',
      about: 'Read a menu and a short review of a restaurant.',
      art: 'teacup',
      spreads: [
        [
          { t: 'reading', title: 'The Blue Door: lunch menu', md: 'Starters\n\nSoup of the day with bread, £6.50 (v)\n\nGrilled sardines with lemon, £7.95\n\nMain courses\n\nChicken and mushroom pie with peas, £15.50\n\nFish and chips with salad, £16.00\n\nSpinach and goat’s cheese tart, £13.50 (v)\n\nDesserts\n\nApple crumble with custard, £6.00 (v)\n\nChocolate cake, £6.50 (v, contains nuts)\n\n(v) = vegetarian. Please tell us about any allergies.' },
          { t: 'ex', kind: 'choice', h: 'Look at the menu. Choose the right answer.', items: [
            { q: 'Ines is vegetarian. Which main course can she eat?', o: ['the spinach and goat’s cheese tart', 'the chicken and mushroom pie', 'the fish and chips'], why: 'The tart has a *(v)*: it is vegetarian.' },
            { q: 'Ravi is allergic to nuts. Which dessert is safe for him?', o: ['the apple crumble', 'the chocolate cake', 'both desserts'], why: 'The chocolate cake *contains nuts*.' },
            { q: 'Which is the cheapest main course?', o: ['the tart', 'the pie', 'the fish and chips'], why: 'The tart is £13.50. The others cost more.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Review: lunch at The Blue Door', md: 'I had lunch at The Blue Door last Saturday with my sister. It is a small restaurant near the harbour, and it was very busy, so it is a good idea to book a table.\n\nThe staff were friendly and helpful. My sister is vegetarian, and the waiter explained which dishes were good for her. She had the spinach tart and loved it. I had the fish and chips. The fish was fresh, but the chips were a bit cold.\n\nFor dessert we shared the apple crumble. It was the best part of the meal!\n\nThe food took quite a long time to arrive, about forty minutes. But the prices are fair and the view of the boats is lovely. I would go again.\n\nAnna R.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the review. True, false or not given?', items: [
            { q: 'Anna went to the restaurant on her own.', a: 'f', why: 'She went *with my sister*.' },
            { q: 'Anna thinks you should book a table.', a: 't', why: '*It was very busy, so it is a good idea to book a table.*' },
            { q: 'Everything on Anna’s plate was perfect.', a: 'f', why: '*The chips were a bit cold.*' },
            { q: 'They waited about forty minutes for their food.', a: 't', why: '*The food took quite a long time to arrive, about forty minutes.*' },
            { q: 'Anna paid by card.', a: 'ng', why: 'The review does not say how she paid.' },
            { q: 'Anna wants to go back to the restaurant.', a: 't', why: '*I would go again.*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'A table ___ two, please.', o: ['for', 'to', 'of'], why: '*A table for* + number of people.' },
      { q: 'I’m allergic ___ milk.', o: ['to', 'with', 'of'], why: '*Allergic to.*' },
      { q: 'The first part of a meal is the ___', o: ['starter.', 'dessert.', 'bill.'], why: 'Starter, then main course, then dessert.' },
      { q: 'Could we have the ___, please? We’d like to pay.', o: ['bill', 'menu', 'starter'], why: 'The *bill* shows what you pay.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'I’ll ___ the soup and the fish pie, please.', a: ['have'], why: '*I’ll have…* is how you order.' },
      { q: 'Could I have the pasta ___ mushrooms? I don’t like them.', a: ['without'], why: '*Without* + food.' },
      { q: 'Is service ___?', a: ['included'], why: '*Is service included?*' },
      { q: 'What do you ___? It’s our first time here.', a: ['recommend'], why: '*What do you recommend?* asks for the waiter’s idea.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Does this dish have nuts in it?', why: '*Does* + subject + *have*.' },
      { a: 'Could we have the bill?', why: '*Could we have…?* is a polite request.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'A vegetarian does not eat meat or fish.', a: 't', why: 'That is what *vegetarian* means.' },
      { q: '*Pay separately* means one person pays for everyone.', a: 'f', why: '*Separately* means each person pays for their own food. One person for everyone is *together*.' },
    ] },
  ],
};
