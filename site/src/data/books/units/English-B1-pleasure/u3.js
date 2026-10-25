// English B1 for travel, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Food culture',
  goal: 'Talk about food, customs and local specialities.',
  art: 'pizza',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['food-adjectives', 'present-passive', 'restaurants', 'tipping', 'customs'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Sweet, spicy or sour?',
      about: 'Describe tastes and explain a regional dish.',
      art: 'croissant',
      spreads: [
        [
          { t: 'text', md: 'To describe food, talk about its **taste** (*sweet*, *salty*, *spicy*, *sour*, *bitter*), its **texture** (*crunchy*, *creamy*, *soft*, *juicy*) and how it is **cooked** (*grilled*, *fried*, *roasted*, *baked*, *steamed*).' },
          { t: 'table', caption: 'Describing food', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning', 'Example'], rows: [
            ['spicy', 'hot, with a lot of chilli or pepper', 'This curry is too spicy for me.'],
            ['sour', 'with a sharp taste, like a lemon', 'The sauce is a bit sour.'],
            ['bitter', 'strong and not sweet, like dark coffee', 'Dark chocolate is slightly bitter.'],
            ['crunchy', 'hard and noisy when you bite it', 'I love crunchy apples.'],
            ['creamy', 'soft and smooth, often made with cream', 'The soup is rich and creamy.'],
            ['grilled', 'cooked over or under strong heat', 'We had grilled fish by the sea.'],
            ['steamed', 'cooked over hot water', 'The dumplings are steamed, not fried.'],
          ] },
        ],
        [
          { t: 'text', md: 'To explain a local dish, use the phrases below. The **present simple passive** (*is made*, *is served*) is common here, because the dish is more important than the person who cooks it.' },
          { t: 'examples', items: [
            { s: 'It’s **a kind of** soup **made with** fish and potatoes.', n: '*a kind of* + a noun; *made with* + the ingredients.' },
            { s: 'It’s usually **served with** bread and butter.', n: 'Present simple passive: *is served*.' },
            { s: 'It **tastes a bit like** chicken, but it’s softer.', n: '*taste like* + a noun: compare it with something people know.' },
            { s: 'It **comes from** the north of the country.', n: 'Where the dish is from.' },
          ] },
          { t: 'dialogue', title: 'At a food stall in Cornwall', lines: [
            { who: 'Amara', s: 'Excuse me, what’s that? It smells amazing.' },
            { who: 'Seller', s: 'It’s a Cornish pasty. It’s a kind of pastry filled with beef, potato, onion and swede.' },
            { who: 'Amara', s: 'Swede? What’s that?' },
            { who: 'Seller', s: 'It’s a root vegetable. It tastes a bit like a sweet turnip.' },
            { who: 'Amara', s: 'Is the pasty spicy?' },
            { who: 'Seller', s: 'Not at all. It’s quite peppery, but not hot. They’re usually eaten warm.' },
            { who: 'Amara', s: 'Sounds great. I’ll have one, please.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best word.', items: [
            { q: 'Lemons taste ___.', o: ['sour', 'sweet', 'creamy'], why: '*sour* is the sharp taste of a lemon. *Creamy* is a texture, not a taste.' },
            { q: 'These crisps are really ___. I can hear you eating them!', o: ['crunchy', 'juicy', 'soft'], why: '*crunchy* food is hard and makes a noise when you bite it.' },
            { q: 'The bread is ___ in the oven every morning.', o: ['baked', 'fried', 'boiled'], why: 'Bread and cakes are *baked* in an oven.' },
            { q: 'This chilli sauce is very ___. Have some water ready!', o: ['spicy', 'bitter', 'sour'], why: 'Chilli makes food *spicy*: hot in your mouth.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the sentences. Use the word in brackets if there is one.', items: [
            { q: 'Paella is a rice dish. It’s ___ (make) with seafood or chicken.', a: ['made'], why: 'Present simple passive: *it is made with*.' },
            { q: 'In the north, the soup is usually ___ (serve) with dark bread.', a: ['served'], why: 'Present simple passive: *is served*.' },
            { q: 'It tastes a bit ___ chicken.', a: ['like'], why: '*taste like* + a noun.' },
            { q: 'It’s a ___ of sweet pancake.', a: ['kind', 'sort', 'type'], why: '*a kind of* (or *a sort of*, *a type of*) + a noun.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the British and Irish dish with its description.', pairs: [
            ['fish and chips', 'fried fish with thick potato chips'],
            ['a scone', 'a small baked cake, often eaten with jam and cream'],
            ['Irish stew', 'meat, potatoes and onions cooked slowly in liquid'],
            ['a Welsh cake', 'a flat sweet cake cooked on a hot metal plate'],
            ['haggis', 'a Scottish dish, often served with mashed potatoes'],
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Tipping and table manners',
      about: 'Understand customs in restaurants and pay the bill.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: 'Customs at the table are different from place to place. To talk about them, use *It’s polite to…* and *It’s rude to…*, *You’re supposed to…* for what people expect, and *You don’t have to…* for what is not necessary.' },
          { t: 'examples', items: [
            { s: 'In a British pub, **you’re supposed to** wait your turn at the bar.', n: '*be supposed to* + verb: what people expect you to do.' },
            { s: '**It’s rude to** look at your phone all through dinner.', n: 'Something people do not like.' },
            { s: '**It’s polite to** wait until everyone has their food.', n: 'Something people see as good manners.' },
            { s: '**You don’t have to** leave a tip if service is already included.', n: 'It is not necessary.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Tipping in a few places', explain: ['head', 'col0', 'col1'], head: ['Where', 'What people usually do'], rows: [
            ['A restaurant in the UK', 'People often leave about 10%. Check the bill first: sometimes a service charge is already included.'],
            ['A pub in the UK', 'You usually order and pay at the bar. A tip is not usually expected.'],
            ['A restaurant in the USA', 'A tip of 15 to 20% is usual, because tips are an important part of the staff’s pay.'],
            ['A restaurant in Japan', 'Tipping is not usual. Good service is seen as part of the job.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Customs change, and they are not the same everywhere in a country. If you are not sure, just ask: *Is service included?* or *Do people usually leave a tip here?*' },
        ],
        [
          { t: 'dialogue', title: 'Paying the bill', lines: [
            { who: 'Nadia', s: 'That was delicious. Shall we get the bill?' },
            { who: 'Owen', s: 'Yes. Excuse me, could we have the bill, please?' },
            { who: 'Waiter', s: 'Of course. I’ll bring it now.' },
            { who: 'Nadia', s: 'Shall we split it?' },
            { who: 'Owen', s: 'No, it’s my treat. You paid for lunch yesterday.' },
            { who: 'Nadia', s: 'Are you sure? Thanks! Is service included, by the way?' },
            { who: 'Owen', s: 'Let me check. Yes, there’s a service charge of 12.5%, so we don’t have to leave anything extra.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'Nadia and Owen split the bill.', a: 'f', why: 'Owen says *it’s my treat*: he pays for both.' },
            { q: 'Nadia paid for lunch the day before.', a: 't', why: '*You paid for lunch yesterday.*' },
            { q: 'Service was not included in the bill.', a: 'f', why: 'There is *a service charge of 12.5%*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct word.', items: [
            { q: 'In a British pub, you’re ___ to order at the bar.', o: ['supposed', 'suppose', 'supposing'], why: 'The phrase is *be supposed to* + verb.' },
            { q: 'Service is already included, so you ___ leave a tip.', o: ['don’t have to', 'mustn’t', 'have to'], why: 'It is not necessary, but it is not forbidden: *don’t have to*.' },
            { q: 'Could we have the ___, please?', o: ['bill', 'account', 'ticket'], why: 'In British English, you ask for *the bill* in a restaurant.' },
            { q: 'Let’s ___ the bill. You pay half, and I’ll pay half.', o: ['split', 'break', 'cut'], why: '*split the bill*: everyone pays a part.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the sentences with one word.', items: [
            { q: 'Put your money away. It’s my ___ today.', a: ['treat'], why: '*It’s my treat*: I will pay for you.' },
            { q: 'Is service ___ in the price?', a: ['included'], why: '*Is service included?* asks if the tip is already in the bill.' },
            { q: 'Can we ___ (eat together) a few dishes? Then everyone can try a little of each.', a: ['share'], why: '*share* dishes: everyone eats a little of each.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'At the market',
      about: 'Read an article about a local food market.',
      art: 'churro',
      spreads: [
        [
          { t: 'reading', title: 'A morning at Harbour Street Market', md: 'Every Saturday morning, the old car park behind Harbour Street turns into one of the busiest places in town. By eight o’clock, more than sixty stalls are open, and the air smells of fresh bread, coffee and grilled fish.\n\nThe market started twelve years ago with just six farmers selling vegetables. Today you can find almost anything: local cheese, honey, handmade pasta and street food from all over the world. Gloria, who runs a small Mexican food stall, says Saturday is the best day of her week. “People come hungry and curious,” she explains. “They always want to try something new.”\n\nThe busiest stall belongs to Ray Thomas, a fisherman who sells his catch straight from the boat. “If you want the best fish, come before nine,” he says. “By ten, it’s usually gone.”\n\nFor visitors, the market is a great way to taste the region in one morning. Bring some cash, because a few of the smaller stalls don’t take cards, and bring a bag for your shopping. Most of all, come hungry. The portions are generous, and it is hard to stop at one.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the article again. True, false or not given?', items: [
            { q: 'The market takes place in an old car park.', a: 't', why: '*the old car park behind Harbour Street*' },
            { q: 'When it started, the market had more than sixty stalls.', a: 'f', why: 'It started *with just six farmers*. Today there are more than sixty stalls.' },
            { q: 'Gloria sells Mexican food.', a: 't', why: 'She *runs a small Mexican food stall*.' },
            { q: 'Ray Thomas has sold fish at the market for twelve years.', a: 'ng', why: 'The article does not say when Ray started.' },
            { q: 'You can pay by card at every stall.', a: 'f', why: '*a few of the smaller stalls don’t take cards*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the sentences with a word from the article.', items: [
            { q: 'The portions are ___: you get a lot of food.', a: ['generous'], why: '*generous* portions are big.' },
            { q: 'Come early. By ten, the best fish is usually ___.', a: ['gone'], why: '*gone*: there is none left.' },
            { q: 'Ray sells his ___, the fish he caught that day.', a: ['catch'], why: 'A fisherman’s *catch* is the fish he has caught.' },
          ] },
          { t: 'tip', art: 'owl', md: 'At a market, you can ask *Can I try a little?* before you buy. Many sellers are happy to give you a taste.' },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'Dark coffee without sugar tastes ___.', o: ['bitter', 'sweet', 'creamy'], why: 'Strong and not sweet: *bitter*.' },
      { q: 'It’s usually ___ with rice.', o: ['served', 'serving', 'serve'], why: 'Present simple passive: *is served*.' },
      { q: 'Service is included, so you ___ leave a tip.', o: ['don’t have to', 'mustn’t', 'must'], why: 'Not necessary: *don’t have to*.' },
      { q: 'You paid last time, so today it’s my ___.', o: ['treat', 'gift', 'prize'], why: '*It’s my treat*: I will pay.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'It’s a kind of soup ___ (make) with lentils.', a: ['made'], why: '*made with* + the ingredients.' },
      { q: 'The vegetables are ___ (steam), not fried.', a: ['steamed'], why: 'Present simple passive: *are steamed*.' },
      { q: 'Could we have the ___, please? We’d like to pay.', a: ['bill'], why: 'You ask for *the bill* when you want to pay.' },
      { q: 'You’re ___ to wait your turn at the bar.', a: ['supposed'], why: '*be supposed to*: what people expect.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match each word with its meaning.', pairs: [
      ['sour', 'with a sharp taste, like a lemon'],
      ['crunchy', 'hard and noisy when you bite it'],
      ['creamy', 'soft and smooth'],
      ['spicy', 'hot, with a lot of chilli'],
    ] },
  ],
};
