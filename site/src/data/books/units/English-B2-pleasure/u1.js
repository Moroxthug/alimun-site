// English B2 for travel, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'Slow travel and local life',
  goal: 'Talk in depth about ways of travelling and living like a local.',
  art: 'snail',
  tags: { skills: ['speaking', 'vocabulary', 'grammar', 'reading'], topics: ['modified-comparatives', 'pros-and-cons', 'used-to', 'be-get-used-to', 'neighbourhoods', 'slow-travel'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Train, plane or bike?',
      about: 'Compare ways of travelling precisely and talk about their pros and cons.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'text', md: 'At B2 you can say not only that one thing is better than another, but **how much** better. Put a word in front of the comparative: *much*, *far* or *a lot* for a big difference, *slightly* or *a bit* for a small one. To say that two things are very different, *nowhere near as … as* is common in speech.' },
          { t: 'examples', items: [
            { s: 'The night train is **far more comfortable** than the coach.', n: '*Far*, *much* and *a lot* make the difference big.' },
            { s: 'Flying is only **slightly quicker** once you count the time at the airport.', n: '*Slightly* and *a bit* make the difference small.' },
            { s: 'The ferry is **nowhere near as fast as** the plane, but it’s much more fun.', n: '*Nowhere near as … as* means *much less … than*.' },
            { s: '**The longer** you stay, **the cheaper** the flat becomes.', n: '*The* + comparative, *the* + comparative: one change causes another.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Talking about pros and cons', explain: ['head'], head: ['Phrase', 'Example'], rows: [
            ['The main advantage of … is that …', 'The main advantage of cycling is that you can stop wherever you like.'],
            ['One drawback of … is that …', 'One drawback of the coach is that it often gets stuck in traffic.'],
            ['On the plus side, …', 'On the plus side, you don’t have to worry about luggage limits.'],
            ['The downside is that …', 'The downside is that the journey takes all day.'],
            ['It’s (well) worth + -ing', 'It’s well worth booking your seat in advance.'],
          ] },
          { t: 'dialogue', title: 'Planning a trip to the south of France', lines: [
            { who: 'Hana', s: 'I’ve found flights for the end of May. They’re a lot cheaper than the train.' },
            { who: 'Oliver', s: 'True, but the main advantage of the train is that we see the countryside on the way.' },
            { who: 'Hana', s: 'The downside is that it takes nearly the whole day.' },
            { who: 'Oliver', s: 'Flying isn’t that much quicker when you add the airport and the transfers.' },
            { who: 'Hana', s: 'Fair point. And on the plus side, we can take as much luggage as we like.' },
            { who: 'Oliver', s: 'Exactly. The more I think about it, the less I want to fly.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best word or phrase.', items: [
            { q: 'The bus is ___ cheaper than the train: it costs less than half the price.', o: ['far', 'slightly', 'very'], why: 'Less than half the price is a big difference: *far* cheaper. *Very* cannot go before a comparative.' },
            { q: 'The two hotels are almost the same. This one is only ___ bigger.', o: ['slightly', 'much', 'far'], why: 'A small difference: *slightly* bigger.' },
            { q: 'A coach is nowhere near ___ comfortable as a sleeper train.', o: ['as', 'so much', 'more'], why: 'The pattern is *nowhere near as* + adjective + *as*.' },
            { q: 'The earlier you book, ___ you pay.', o: ['the less', 'less', 'the least'], why: '*The* + comparative, *the* + comparative.' },
            { q: 'One ___ of travelling by bike is that you depend on the weather.', o: ['drawback', 'advantage', 'plus side'], why: 'Depending on the weather is a disadvantage: a *drawback*.' },
            { q: 'It’s well worth ___ a day in the old town.', o: ['spending', 'to spend', 'spend'], why: '*It’s worth* is followed by the *-ing* form.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete each sentence with one word.', items: [
            { q: 'Driving is nowhere near as relaxing ___ going by train.', a: ['as'], why: '*Nowhere near as … as*.' },
            { q: 'The more you walk, the ___ you see.', a: ['more'], why: '*The more …, the more …*: one change causes another.' },
            { q: 'The main advantage ___ a rail pass is that you can change your plans.', a: ['of'], why: '*The main advantage of* + noun.' },
            { q: 'The ___ is that the ferry only runs twice a week.', a: ['downside', 'problem', 'drawback', 'disadvantage'], why: '*The downside is that…* introduces a disadvantage.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'It’s well worth taking the night train.', why: '*It’s well worth* + *-ing*.' },
            { a: 'The coach isn’t that much cheaper.', why: '*Not that much* + comparative: the difference is smaller than people think.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Living like a local',
      about: 'Talk about markets, neighbourhoods and daily routines in a new place.',
      art: 'croissant',
      spreads: [
        [
          { t: 'text', md: 'When you stay somewhere for a while, you talk about old habits and new ones. Three forms look similar but mean different things. *Used to* + base form is a past habit that has stopped. *Be used to* + *-ing* means something is normal for you now. *Get used to* + *-ing* means it is slowly becoming normal.' },
          { t: 'examples', items: [
            { s: 'I **used to stay** in big hotels in the centre.', n: 'A past habit: I do not do it any more.' },
            { s: 'After three weeks, I**’m used to shopping** at the market every morning.', n: '*Be used to* + *-ing*: it is normal for me now.' },
            { s: 'We**’re** still **getting used to eating** dinner so late.', n: '*Get used to* + *-ing*: it is becoming normal, slowly.' },
            { s: 'She **didn’t use to like** spicy food, but now she loves it.', n: 'Negative: *didn’t use to*, without *-d*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'After *be used to* and *get used to*, the word *to* is a preposition, so a verb after it takes *-ing*: *I’m used to getting up early*, not *I’m used to get up early*.' },
        ],
        [
          { t: 'table', caption: 'Local life', explain: ['head', 'col1'], quiz: true, head: ['Word or phrase', 'Meaning'], rows: [
            ['a stall', 'a table or small stand where things are sold at a market'],
            ['a regular', 'a customer who goes to the same café or shop very often'],
            ['a tourist trap', 'a place that is crowded with visitors and too expensive'],
            ['off the beaten track', 'far from the places where most tourists go'],
            ['a residential area', 'a part of town where people live, with few shops or hotels'],
            ['settle in', 'start to feel comfortable in a new place'],
            ['get to know', 'learn more about a person or a place over time'],
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the beginnings and the endings.', pairs: [
            ['The fruit seller at the corner', 'stall knows my name now.'],
            ['That restaurant by the cathedral is', 'a tourist trap.'],
            ['We stayed in a quiet residential', 'area, far from the hotels.'],
            ['The village is off the beaten', 'track, so few visitors find it.'],
            ['It took us a week to settle', 'in, but now we love it.'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with the correct form of the verb in brackets.', items: [
            { q: 'I used to ___ (take) taxis everywhere, but now I walk.', a: ['take'], why: '*Used to* + base form for a past habit.' },
            { q: 'He isn’t used to ___ (drive) on the left yet.', a: ['driving'], why: '*Be used to* + *-ing*.' },
            { q: 'We’re slowly getting used to ___ (have) lunch at three.', a: ['having'], why: '*Get used to* + *-ing*.' },
            { q: 'Did you ___ (use) to live near the market?', a: ['use'], why: 'In questions and negatives with *did*, it is *use to*, without *-d*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Each sentence has one mistake. Tap the wrong word.', items: [
            { s: 'After a month in Lisbon, I’m used to [walk] up steep hills.', why: '*Be used to* + *-ing*: *I’m used to walking*.' },
            { s: 'When I was a student, I [use] to travel with a tent.', why: 'A past habit in a positive sentence: *I used to travel*.' },
            { s: 'It took her a while to get used to [speak] Spanish all day.', why: '*Get used to* + *-ing*: *speaking*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'I’m getting used to the noise.', why: '*Get used to* + noun.' },
            { a: 'She has become a regular at the café.', why: '*Become a regular at* + a place.' },
            { a: 'We didn’t use to eat breakfast.', why: 'Negative past habit: *didn’t use to* + base form.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'The case for slow travel',
      about: 'Read an essay about slow travel and follow the writer’s argument.',
      art: 'snail',
      spreads: [
        [
          { t: 'reading', title: 'The case for slow travel', md: 'A few years ago, I would visit four cities in a week and come home exhausted, with hundreds of photos and very few memories. These days I travel differently. I choose one place, stay for at least a fortnight and, wherever possible, get there by train.\n\nSlow travel is not a new idea, but it has become more popular as people look for alternatives to rushed city breaks. Its supporters argue that the journey itself should be part of the holiday. A long train ride is nowhere near as fast as a flight, but you watch the landscape change, you talk to the people around you, and you arrive feeling that you have actually travelled.\n\nThe real benefit, though, comes once you stop moving. When you rent a flat in an ordinary neighbourhood rather than a hotel in the centre, you start to live like a resident. You find a bakery you like, you become a regular at the café on the corner, and the man at the fruit stall starts to recognise you. Within a week, you are used to the rhythm of the place: when the shops close, where people go in the evening, which streets are quiet on Sundays.\n\nThere are drawbacks, of course. Slow travel needs time, which many people simply do not have, and long train journeys are not always cheaper than flying. It can also feel lonely at first.\n\nStill, I would argue that the slower you go, the more you notice. You may see fewer famous sights, but you will understand the places you visit far better. For me, that is well worth the extra days.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'In the past, the writer often visited several cities in a short time.', a: 't', why: '“I would visit four cities in a week.”' },
            { q: 'The writer now always travels by train.', a: 'f', why: 'The writer goes by train *wherever possible*, so not always.' },
            { q: 'According to the writer, slow travel is a completely new idea.', a: 'f', why: '“Slow travel is not a new idea.”' },
            { q: 'The writer usually learns some of the local language on a slow trip.', a: 'ng', why: 'The essay does not mention learning the language.' },
            { q: 'The writer admits that slow travel can feel lonely at the beginning.', a: 't', why: '“It can also feel lonely at first.”' },
            { q: 'The writer thinks slow travellers see more famous sights.', a: 'f', why: '“You may see fewer famous sights.”' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language in the essay.', items: [
            { q: '“Stay for at least a fortnight.” A fortnight is:', o: ['two weeks', 'one weekend', 'a month'], why: '*A fortnight* is a British word for two weeks.' },
            { q: '“You become a regular at the café on the corner.” This means:', o: ['you go there so often that the staff know you', 'you start working at the café', 'you only go there on special days'], why: 'A *regular* is a customer who comes back again and again.' },
            { q: '“The slower you go, the more you notice.” The writer means:', o: ['travelling slowly helps you see more', 'you need to go slowly to stay safe', 'slow trains have bigger windows'], why: '*The* + comparative, *the* + comparative: one change causes the other.' },
            { q: 'In the last paragraph, *Still* means:', o: ['in spite of the drawbacks', 'without moving', 'even now, as before'], why: 'At the start of a sentence, *Still* introduces a point that goes against what came before.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the words that show a big difference.', items: [
            { s: 'A long train ride is [nowhere near] as fast as a flight.', why: '*Nowhere near as … as* means *much less … than*.' },
            { s: 'You will understand the places you visit [far] better.', why: '*Far* + comparative shows a big difference.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'The train is ___ more expensive than the bus: it costs three times as much.', o: ['much', 'slightly', 'very'], why: 'A big difference: *much* + comparative.' },
      { q: 'The sooner we leave, ___ we’ll arrive.', o: ['the earlier', 'earlier', 'the earliest'], why: '*The* + comparative, *the* + comparative.' },
      { q: 'I’m not used to ___ so much coffee.', o: ['drinking', 'drink', 'drank'], why: '*Be used to* + *-ing*.' },
      { q: 'We ___ go camping every summer when we were children.', o: ['used to', 'were used to', 'got used to'], why: 'A past habit: *used to* + base form.' },
      { q: 'That restaurant is a tourist ___: the food is poor and the prices are high.', o: ['trap', 'track', 'stall'], why: 'A *tourist trap* is crowded and too expensive.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete each sentence with one word.', items: [
      { q: 'The ferry is nowhere ___ as quick as the plane.', a: ['near'], why: '*Nowhere near as … as*.' },
      { q: 'It took us a few days to ___ in, but now the flat feels like home.', a: ['settle'], why: '*Settle in*: start to feel comfortable in a new place.' },
      { q: 'One ___ of the night bus is that you hardly sleep.', a: ['drawback', 'disadvantage', 'downside', 'problem'], why: 'A disadvantage: *one drawback of…*.' },
      { q: 'It’s worth ___ (visit) the market on Saturday morning.', a: ['visiting'], why: '*It’s worth* + *-ing*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'He never got used to the cold winters.', why: '*Get used to* + noun; *never* goes before the verb.' },
      { a: 'It’s well worth the extra money.', why: '*It’s worth* + noun: the benefit is bigger than the cost.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: '*I used to live in Rome* means I live in Rome now.', a: 'f', why: '*Used to* is a past habit or state that has stopped.' },
      { q: 'A place *off the beaten track* has few tourists.', a: 't', why: 'It is far from the places most tourists go.' },
    ] },
  ],
};
