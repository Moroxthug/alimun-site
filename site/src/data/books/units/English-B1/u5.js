// English B1, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'The world around us',
  goal: 'Describe the environment and processes, and compare.',
  art: 'cactus',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['passive', 'environment', 'comparisons'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'It is made, it was built',
      about: 'Describe processes and past events with the passive in the present simple and the past simple.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'In the **passive**, the focus is on the action, or on the person or thing it happens to, not on who does it. Form it with *be* + past participle.' },
          { t: 'table', caption: 'The passive', explain: ['head', 'col0'], quiz: true, head: ['', 'Active', 'Passive'], rows: [
            ['present simple', 'They recycle glass here.', 'Glass is recycled here.'],
            ['past simple', 'Someone built the bridge in 1890.', 'The bridge was built in 1890.'],
            ['negative', 'They don’t collect bins on Sundays.', 'Bins aren’t collected on Sundays.'],
            ['question', 'Do they sell tickets online?', 'Are tickets sold online?'],
          ] },
          { t: 'examples', items: [
            { s: 'Paper **is made** from wood.', n: 'A process: present simple passive.' },
            { s: 'The old factory **was closed** in 2010.', n: 'A past event: past simple passive.' },
            { s: 'These bottles **were collected by** local volunteers.', n: 'Use *by* when you want to say who did it.' },
          ] },
        ],
        [
          { t: 'text', md: 'Use the passive when we do not know who did something, when it is not important, or when it is obvious. Add **by** + the person only when this information is useful.' },
          { t: 'tip', art: 'owl', md: 'The verb *be* changes with the tense and the subject: *is* or *are* for the present, *was* or *were* for the past. The past participle does not change.' },
          { t: 'ex', kind: 'spot', h: 'Tap every past participle in a passive verb.', items: [
            { s: 'Most of our waste is [collected] once a week. Plastic and glass are [taken] to a recycling centre, where they are [sorted] by machines.', why: '*Is collected*, *are taken* and *are sorted* are present simple passive. *Recycling* is not a participle.' },
            { s: 'The new park was [opened] in May. Hundreds of trees were [planted], and the old car park was [turned] into a garden.', why: '*Was opened*, *were planted* and *was turned* are past simple passive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct form.', items: [
            { q: 'English ___ in many countries.', o: ['is spoken', 'speaks', 'is speaking'], why: 'People speak English: the passive is *is spoken*.' },
            { q: 'Our house ___ in 1925.', o: ['was built', 'is built', 'built'], why: 'A past event, and the house did not build itself: *was built*.' },
            { q: 'Bins ___ every Tuesday in our street.', o: ['are emptied', 'are emptying', 'empty'], why: 'A regular event, present simple passive: *are emptied*.' },
            { q: 'The windows ___ last week, so the house is warmer now.', o: ['were replaced', 'are replaced', 'replaced'], why: '*Last week* is past, and *windows* is plural: *were replaced*.' },
            { q: 'Where ___ these vegetables grown?', o: ['are', 'do', 'is'], why: 'Passive question: *are* + subject + past participle.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with the passive of the verb in brackets, present simple or past simple.', items: [
            { q: 'Coffee ___ (grow) in hot countries.', a: ['is grown'], why: 'A general fact: present simple passive.' },
            { q: 'The bridge ___ (close) last winter because of the floods.', a: ['was closed'], why: '*Last winter* is past: *was closed*.' },
            { q: 'Today, many bottles ___ (make) from recycled plastic.', a: ['are made'], why: '*Today* and a plural subject: *are made*.' },
            { q: 'The meeting ___ (not / cancel). It was moved to Thursday.', a: ['wasn’t cancelled', 'was not cancelled'], why: 'Past simple passive, negative: *wasn’t cancelled*.' },
            { q: 'The old library ___ (turn) into a hotel in 2019.', a: ['was turned'], why: '*In 2019* is past: *was turned*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'This song was written by my cousin.', why: 'Passive + *by* + the person who did it.' },
            { a: 'Are the bins collected on Mondays?', why: 'Passive question: *Are* + subject + past participle.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Our planet',
      about: 'Words and phrases for talking about the environment.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'These words often appear in the news. Many of them go together in fixed pairs, so learn them as phrases.' },
          { t: 'table', caption: 'The environment', explain: ['head', 'col1'], quiz: true, head: ['Phrase', 'Meaning'], rows: [
            ['climate change', 'changes in the Earth’s weather over a long time'],
            ['global warming', 'the Earth slowly getting hotter'],
            ['renewable energy', 'energy from the sun, wind or water, which does not run out'],
            ['carbon emissions', 'the gas that cars, planes and factories put into the air'],
            ['air pollution', 'dirty air, for example from traffic and factories'],
            ['reduce waste', 'make less rubbish'],
            ['recycle', 'use old materials again to make new things'],
            ['save energy', 'use less electricity, gas or fuel'],
            ['protect the environment', 'keep nature safe from harm'],
          ] },
        ],
        [
          { t: 'tip', art: 'owl', md: 'Use the right verb. We *reduce* waste, we *save* energy and we *protect* the environment. We do not say *keep energy* or *defend the environment*.' },
          { t: 'ex', kind: 'match', h: 'Match the beginnings and the endings.', pairs: [
            ['We can save energy by', 'turning off lights we don’t need.'],
            ['Solar and wind power are', 'types of renewable energy.'],
            ['Many cities want to reduce', 'the number of cars in the centre.'],
            ['Air pollution is often worst', 'near busy roads.'],
            ['If we recycle more,', 'less rubbish goes into the ground.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best word.', items: [
            { q: 'Turn off the heating when you go out. It’s an easy way to ___ energy.', o: ['save', 'keep', 'spend'], why: 'We *save* energy: we use less of it.' },
            { q: 'Wind and solar power are examples of ___ energy.', o: ['renewable', 'recycled', 'reduced'], why: 'Energy that does not run out is *renewable*.' },
            { q: 'Our office is trying to ___ the amount of paper it uses.', o: ['reduce', 'protect', 'save'], why: 'Make the amount smaller: *reduce*.' },
            { q: 'National parks help to ___ wild animals and plants.', o: ['protect', 'reduce', 'recycle'], why: 'Keep them safe: *protect*.' },
            { q: 'Most scientists agree that ___ is causing more extreme weather.', o: ['climate change', 'renewable energy', 'recycling'], why: '*Climate change*: long-term changes in the Earth’s weather.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the lesson. The first letter is given.', items: [
            { q: 'Please put empty bottles in the ___ (r) bin.', a: ['recycling'], why: 'The bin for things that will be used again is the *recycling* bin.' },
            { q: 'The air ___ (p) in our city is worse in winter.', a: ['pollution'], why: '*Air pollution*: dirty air.' },
            { q: 'Plastic bags create a lot of ___ (w).', a: ['waste'], why: '*Waste* means rubbish, things we throw away.' },
            { q: 'We’ve put solar panels on our roof because we want to use ___ (r) energy.', a: ['renewable'], why: 'Energy from the sun is *renewable*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Not as big as…',
      about: 'Compare things with as … as, not as … as, and much or a bit + comparative.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: '**as** + adjective + **as** means two things are the same. **not as** + adjective + **as** means the first thing has less of the quality.' },
          { t: 'examples', items: [
            { s: 'The train is **as fast as** the plane on this route.', n: 'They are the same speed.' },
            { s: 'Cycling **isn’t as dangerous as** many people think.', n: 'Cycling is less dangerous than people think.' },
            { s: 'My new flat **isn’t as big as** my old one.', n: 'The old flat was bigger.' },
          ] },
          { t: 'table', caption: 'Making comparisons', explain: ['head', 'col0'], head: ['Meaning', 'Example'], rows: [
            ['the same', 'Bus tickets are as expensive as train tickets here.'],
            ['less', 'Buses aren’t as fast as trains.'],
            ['a big difference', 'Trains are much faster than buses.'],
            ['a small difference', 'The train is a bit more expensive than the bus.'],
          ] },
        ],
        [
          { t: 'text', md: 'To say how big a difference is, put **much**, **far** or **a lot** (a big difference) or **a bit** or **slightly** (a small difference) before the comparative.' },
          { t: 'text', md: 'Remember how to make comparatives. Short adjectives add *-er*: cheap → cheaper. Longer adjectives use *more*: expensive → more expensive. Some are irregular: good → **better**, bad → **worse**, far → **further**.' },
          { t: 'tip', art: 'owl', md: 'Do not use *very* with comparatives. *Very cheaper* is wrong. Say *much cheaper*.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct words.', items: [
            { q: 'Electric cars are ___ quieter than petrol cars.', o: ['much', 'very', 'more'], why: '*Much* + comparative. *Very* does not go with comparatives.' },
            { q: 'My town isn’t as ___ as London.', o: ['big', 'bigger', 'biggest'], why: 'After *as*, use the normal adjective.' },
            { q: 'This summer was ___ hotter than last summer, but only by one degree.', o: ['a bit', 'much', 'very'], why: 'One degree is a small difference: *a bit*.' },
            { q: 'A train ticket is as cheap ___ a bus ticket here.', o: ['as', 'than', 'like'], why: 'The pattern is *as … as*.' },
            { q: 'The air in the countryside is ___ than in the city.', o: ['much cleaner', 'much more clean', 'very cleaner'], why: '*Clean* is short, so *cleaner*. *Much* shows a big difference.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the sentences. Use the words in brackets.', items: [
            { q: 'The new bus is ___ (much / comfortable) than the old one.', a: ['much more comfortable'], why: '*Comfortable* is long, so *more comfortable*. *Much* goes before it.' },
            { q: 'Walking ___ (not / fast) as cycling.', a: ['isn’t as fast', 'is not as fast'], why: '*not as* + adjective + *as*.' },
            { q: 'Our new flat is ___ (a bit / small) than our old one.', a: ['a bit smaller'], why: 'A small difference: *a bit* + comparative.' },
            { q: 'Today’s weather is ___ (bad) than yesterday’s.', a: ['worse'], why: '*Bad* is irregular: bad, worse, worst.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'My bike is much older than yours.', why: '*Much* + comparative + *than*.' },
            { a: 'Our village isn’t as noisy as the city.', why: '*not as* + adjective + *as*.' },
            { a: 'Buses are a lot cheaper than taxis.', why: '*A lot* + comparative shows a big difference.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'How Westbridge cut its plastic',
      about: 'Read how a town reduced its plastic waste and check the details.',
      art: 'cactus',
      spreads: [
        [
          { t: 'reading', title: 'How Westbridge cut its plastic', md: 'In 2016, the streets of Westbridge were full of plastic. Bags were caught in trees, and bottles were left on the beach after every sunny weekend. Today the town is much cleaner. How did it happen?\n\nThe first step was small. In 2017, free water fountains were put in the main squares and parks. People were asked to carry their own bottles, and a map of the fountains was printed on the back of every bus ticket.\n\nNext, the town worked with local shops. Customers who brought their own bags or boxes were given a small discount. At first, many shop owners were worried, but most of them soon saw that customers liked the idea.\n\nThe biggest change came in schools. Every class was given a project: find one way to use less plastic at home. The children’s ideas were shown in an exhibition at the town hall, and some of them were later used by the town.\n\nToday, the amount of plastic collected from the beach is about half of what it was in 2016. Westbridge still isn’t as clean as its people would like, but it is a lot better than before. “It wasn’t one big idea,” says Hana Okoro, who works for the town council. “It was a hundred small ones.”' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'In 2016 there was a lot of plastic on the streets of Westbridge.', a: 't', why: 'The streets were full of plastic.' },
            { q: 'The water fountains were put in shops.', a: 'f', why: 'They were put in the main squares and parks.' },
            { q: 'Customers with their own bags paid a little less.', a: 't', why: 'They were given a small discount.' },
            { q: 'All shop owners liked the idea from the start.', a: 'f', why: 'At first, many of them were worried.' },
            { q: 'Thousands of people visited the exhibition.', a: 'ng', why: 'The text does not say how many people visited it.' },
            { q: 'There is no plastic on the beach now.', a: 'f', why: 'There is about half as much as in 2016.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
            { q: 'Where could people find a map of the fountains?', o: ['On their bus tickets.', 'In the town hall.', 'In the shops.'], why: 'It was printed on the back of every bus ticket.' },
            { q: 'What did each school class have to do?', o: ['Find a way to use less plastic at home.', 'Clean the beach.', 'Build a water fountain.'], why: 'That was the class project.' },
            { q: '“It was a hundred small ones.” What does Hana mean?', o: ['Many small changes together made the difference.', 'The town tried a hundred ideas that failed.', 'Only one idea was really important.'], why: 'There was no single big idea, but many small ones.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'Paper ___ from wood.', o: ['is made', 'makes', 'is making'], why: 'A process: present simple passive.' },
      { q: 'The road ___ last year, so it’s much safer now.', o: ['was repaired', 'is repaired', 'repaired'], why: '*Last year* is past: past simple passive.' },
      { q: 'You can ___ energy by turning off lights.', o: ['save', 'protect', 'recycle'], why: 'We *save* energy.' },
      { q: 'Solar power is a type of ___ energy.', o: ['renewable', 'recycled', 'reduced'], why: 'Energy that does not run out is *renewable*.' },
      { q: 'This flat is ___ cheaper than the one we saw yesterday.', o: ['much', 'very', 'more'], why: '*Much* + comparative. Not *very* or *more*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences. Use the words in brackets.', items: [
      { q: 'Glass ___ (recycle) at the centre on Green Street.', a: ['is recycled'], why: 'Present simple passive: *is* + past participle.' },
      { q: 'The trees ___ (plant) by students last spring.', a: ['were planted'], why: '*Last spring* and a plural subject: *were planted*.' },
      { q: 'My car isn’t ___ (fast) as yours.', a: ['as fast'], why: '*not as* + adjective + *as*.' },
      { q: 'The bus is ___ (a bit / slow) than the train.', a: ['a bit slower'], why: 'A small difference: *a bit* + comparative.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Is plastic recycled in your town?', why: 'Passive question: *Is* + subject + past participle.' },
      { a: 'Our town isn’t as clean as it was.', why: '*not as* + adjective + *as*.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
      { q: '', o: ['The windows were cleaned yesterday.', 'The windows was cleaned yesterday.', 'The windows cleaned yesterday.'], why: '*Windows* is plural: *were* + past participle.' },
      { q: '', o: ['The new phone is much better than the old one.', 'The new phone is very better than the old one.', 'The new phone is more better than the old one.'], why: '*Better* is already a comparative. Use *much* before it.' },
      { q: '', o: ['English is spoken here.', 'English is speaking here.', 'English speaks here.'], why: 'Passive: *is* + past participle.' },
    ] },
  ],
};
