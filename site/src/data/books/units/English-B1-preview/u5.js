// English B1, unit 5, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Each lesson: a full explanation first (the rule in plain words, why, many examples, the usual mistakes, a text that
// uses it), then fewer exercises from controlled to free, one speaking task, and one task in the format of B1 Preliminary.
export const UNIT = {
  id: 'u5',
  title: 'The world around us',
  goal: 'Describe how things are made and what happened to them, talk about the environment with natural word partners, and compare things precisely.',
  art: 'cactus',
  tags: { skills: ['grammar', 'vocabulary', 'speaking', 'reading'], topics: ['passive', 'environment', 'collocations', 'comparisons'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'It is made, it was built',
      about: 'Describe processes and past events with the passive in the present simple and the past simple.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Most English sentences start with the person or thing that **does** the action: *Volunteers clean the beach every spring.* This is an **active** sentence.\n\nSometimes the person who does the action is not the interesting part. We want to talk about the beach, not the volunteers. Then we use the **passive**: *The beach **is cleaned** every spring.* The thing that the action happens to becomes the subject.\n\nThe passive has two parts: a form of **be** and the **past participle** of the main verb (*cleaned, made, built, sold, taken*). The tense is shown by *be*: **is/are** for the present simple, **was/were** for the past simple. The past participle never changes.' },
          { t: 'table', caption: 'The passive: present simple and past simple', quiz: true, explain: ['head', 'col0'], head: ['', 'Active', 'Passive'], rows: [
            ['present simple', 'They recycle glass here.', 'Glass is recycled here.'],
            ['present, plural', 'They sell tickets online.', 'Tickets are sold online.'],
            ['past simple', 'Someone built the bridge in 1890.', 'The bridge was built in 1890.'],
            ['past, plural', 'They planted the trees last year.', 'The trees were planted last year.'],
            ['negative', 'They don’t collect bins on Sundays.', 'Bins aren’t collected on Sundays.'],
            ['question', 'Did they close the factory?', 'Was the factory closed?'],
          ] },
          { t: 'tip', art: 'owl', md: 'Many past participles are irregular, and you need them for the passive: *make – made*, *build – built*, *take – taken*, *write – written*, *grow – grown*, *throw – thrown*, *find – found*, *give – given*. Learn them with the verb, not alone.' },
        ],
        [
          { t: 'text', md: 'Use the passive in three common situations.\n\n**We do not know who did it**: *My bike **was stolen** last night.* (Nobody knows the thief.)\n\n**It is not important, or it is obvious who did it**: *The rubbish **is collected** on Tuesdays.* (Of course the rubbish collectors do it.)\n\n**We describe a process** step by step, as in a factory or a recipe: *First the bottles **are washed**. Then they **are crushed** and **melted**.*\n\nIf you want to say who did the action, add **by** + the person or thing: *The park was designed **by** a famous architect.* Add *by* only when this information is new and useful. *The rubbish is collected by rubbish collectors* sounds strange, because it tells us nothing new.' },
          { t: 'examples', items: [
            { s: 'Paper **is made** from wood.', n: 'A process: present simple passive.' },
            { s: 'The old factory **was closed** in 2010.', n: 'A past event: past simple passive.' },
            { s: 'These bottles **were collected by** local schoolchildren.', n: '*By* adds who did it, because this is interesting.' },
            { s: 'About ten million plastic bags **are used** every day in this country.', n: 'We do not need to say who uses them: everybody.' },
            { s: '**Was** the bridge **damaged** in the storm? – No, it **wasn’t**.', n: 'A question and a short answer in the passive.' },
            { s: 'Our street **isn’t cleaned** very often.', n: 'Negative: *be* + *not* + past participle.' },
          ] },
        ],
        [
          { t: 'text', md: 'These are the mistakes teachers see most often. Most of them come from forgetting one of the two parts of the passive.' },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['The house built in 1950.', 'The house was built in 1950.', 'The passive needs *be*; without it, the house built itself.'],
            ['The cars are make in Spain.', 'The cars are made in Spain.', 'After *be*, use the past participle, not the base form.'],
            ['The museum was opened from the mayor.', 'The museum was opened by the mayor.', 'The person who does the action comes after *by*.'],
            ['Glass are recycled here.', 'Glass is recycled here.', '*Be* agrees with the subject: *glass* is one thing (uncountable).'],
            ['It was happened last year.', 'It happened last year.', 'Some verbs (*happen, arrive, die, go*) have no object, so no passive.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Before you write a passive, ask: *Can this verb have an object?* You can *build a house*, so *the house was built* is fine. But you cannot *happen something*, so *it was happened* is impossible.' },
        ],
        [
          { t: 'reading', title: 'From bottle to bottle', md: 'Every year, millions of glass bottles are thrown away in our town. But many of them are not wasted. They are taken to a recycling centre on the edge of town.\n\nFirst, the bottles are sorted by colour, because clear, green and brown glass are recycled separately. Then they are washed, and the labels are removed. After that, the glass is crushed into small pieces and melted at a very high temperature.\n\nThe centre was opened in 2015 and was paid for by the town council. Last year, more than 4,000 tonnes of glass were recycled there. Most of it was made into new bottles, which were sold to local drinks companies.' },
          { t: 'ex', kind: 'order', h: 'Put the steps in the right order: make one sentence for each step.', items: [
            { a: 'The bottles are sorted by colour.', why: 'This is the first step in the text.' },
            { a: 'The glass is crushed into small pieces.', why: 'This happens after the bottles are washed.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Read the text again. Are the sentences true or false?', items: [
            { q: 'All the glass is recycled together.', a: 'f', why: 'Clear, green and brown glass are recycled separately.' },
            { q: 'The labels are taken off before the glass is crushed.', a: 't', why: 'They are washed, and the labels are removed. *After that*, the glass is crushed.' },
            { q: 'The centre was paid for by drinks companies.', a: 'f', why: 'It was paid for by the town council.' },
            { q: 'Most recycled glass becomes new bottles.', a: 't', why: '*Most of it was made into new bottles.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with the passive of the verb in brackets. Use the present simple or the past simple.', items: [
            { q: 'Coffee ___ (grow) in many hot countries.', a: ['is grown'], why: 'A general fact: present simple passive, *is* + *grown*.' },
            { q: 'The first email ___ (send) in 1971.', a: ['was sent'], why: 'A past event: *was* + *sent*.' },
            { q: 'These shoes ___ (make) from old car tyres.', a: ['are made'], why: '*Shoes* is plural: *are* + *made*.' },
            { q: 'The windows ___ (break) during the storm last night.', a: ['were broken'], why: 'Past, plural: *were* + *broken*.' },
            { q: 'Plastic bags ___ (not give) free in shops any more.', a: ['are not given', 'aren’t given'], why: 'Negative present passive: *are not* + *given*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentences in the passive. Do not use *by* unless it is needed.', items: [
            { q: 'They built this school in 1975.', cue: 'This school', a: ['This school was built in 1975.'], why: 'Past simple active → *was built*. We do not need *by them*.' },
            { q: 'People speak English in many countries.', cue: 'English', a: ['English is spoken in many countries.'], why: '*Speak – spoken*. *By people* tells us nothing new.' },
            { q: 'A famous chef opened the restaurant.', cue: 'The restaurant', a: ['The restaurant was opened by a famous chef.'], why: 'Here *by a famous chef* is interesting, so we keep it.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake in each sentence.', items: [
            { s: 'The bridge [was build] in the nineteenth century.', a: ['was built'], why: 'After *was*, the past participle: *built*.' },
            { s: 'Our bins [is] emptied every Monday.', a: ['are'], why: '*Bins* is plural, so *are emptied*.' },
            { s: 'This song was written [from] a teenager.', a: ['by'], why: 'Who did the action comes after *by*.' },
            { s: 'The accident [was happened] at six o’clock.', a: ['happened'], why: '*Happen* has no object, so no passive.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam (Reading Part 5): choose the word that best fits each gap.', items: [
            { q: 'The new library was ___ by a local writer last month.', o: ['opened', 'open', 'opening', 'opens'], why: 'Passive: *was* + past participle *opened*.' },
            { q: 'More than half of the town’s waste is now ___ instead of thrown away.', o: ['recycled', 'recycling', 'recycle', 'to recycle'], why: '*Is* + past participle; *instead of thrown away* is also passive.' },
            { q: 'The paintings ___ found in an old house in 1998.', o: ['were', 'was', 'are', 'did'], why: 'Past, plural subject: *were found*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Reading Part 5 of B1 Preliminary, you choose from four words for each gap. Read the **whole sentence** before you choose: words like *was*, *by* or *last month* tell you that you need a passive or a past form.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'sofia', items: [
            { a: 'Paper is made from wood.' },
            { a: 'The bridge was built in 1890.' },
            { a: 'Glass is recycled separately.' },
            { a: 'The park was designed by a famous architect.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'Our planet',
      about: 'Talk about the environment with the words that naturally go together.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'In English, some words like to go together. We say **reduce waste**, not *make smaller waste*; **climate change**, not *weather change*. These pairs are called **collocations**. Using them makes you sound natural, and it makes you faster, because you learn two or three words as one piece.\n\nWhen you learn a new word about the environment, learn the verb that goes with it. Do not just learn *energy*: learn **save energy**, **waste energy**, **renewable energy**.' },
          { t: 'table', caption: 'Verbs and nouns that go together', explain: ['head'], head: ['Verb', 'Noun', 'Example'], rows: [
            ['reduce', 'waste, pollution, your carbon footprint', 'We must reduce waste.'],
            ['save', 'energy, water, money', 'Turn off the lights to save energy.'],
            ['protect', 'the environment, wildlife, forests', 'Laws protect wildlife in the park.'],
            ['cause', 'pollution, damage, floods', 'Traffic causes air pollution.'],
            ['recycle', 'paper, glass, plastic', 'We recycle all our paper.'],
            ['throw away', 'rubbish, food, plastic', 'Don’t throw away good food.'],
          ] },
          { t: 'tip', art: 'owl', md: '**Throw away** is a phrasal verb. When the object is a pronoun, it goes in the middle: *throw **it** away*, not *throw away it*.' },
        ],
        [
          { t: 'text', md: 'Some environment words are often used as **two nouns together**, where the first noun works like an adjective: **climate change**, **air pollution**, **plastic waste**, **energy bills**, **recycling bin**. The important noun is the second one: *air pollution* is a kind of pollution.\n\nOther common pairs are **adjective + noun**: **renewable energy** (from the sun or wind, it does not run out), **fossil fuels** (coal, oil and gas), **public transport** (buses, trains), **endangered species** (animals that may disappear), **global warming** (the Earth getting hotter).' },
          { t: 'examples', items: [
            { s: '**Air pollution** is a big problem in many cities.', n: 'Noun + noun: a kind of pollution.' },
            { s: 'More and more homes use **renewable energy**.', n: 'Energy from the sun, wind or water.' },
            { s: 'If more people used **public transport**, there would be less traffic.', n: 'Buses, trains and trams.' },
            { s: 'The tiger is an **endangered species**.', n: 'There are very few tigers left.' },
            { s: '**Burning fossil fuels** is one of the main causes of **global warming**.', n: 'Two important collocations in one sentence.' },
          ] },
        ],
        [
          { t: 'text', md: 'Learners often choose a verb that means the same in their language but does not sound natural in English.' },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['We must make less pollution.', 'We must reduce pollution.', 'The natural partner of *pollution* is *reduce*.'],
            ['The weather change is serious.', 'Climate change is serious.', 'The fixed phrase is *climate change*.'],
            ['Close the light, please.', 'Turn off the light, please.', 'Lights and machines are *turned off*, not *closed*.'],
            ['I throw away it.', 'I throw it away.', 'With a pronoun, the pronoun goes in the middle.'],
            ['The environment pollution', 'Environmental pollution', 'Use the adjective *environmental* before a noun.'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'A greener office', lines: [
            { who: 'Priya', s: 'Our office uses so much paper. Can we reduce it?' },
            { who: 'Tom', s: 'Easy. We could print only when it’s really necessary, and recycle the rest.' },
            { who: 'Priya', s: 'And the lights are on all night. What a waste of energy.' },
            { who: 'Tom', s: 'Let’s ask the last person to leave to turn them off.' },
            { who: 'Priya', s: 'Good idea. Also, most of us drive to work.' },
            { who: 'Tom', s: 'The office could pay part of our public transport tickets. Fewer cars, less air pollution.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the beginnings and the endings to make collocations.', pairs: [
            ['save', 'energy'],
            ['reduce', 'waste'],
            ['public', 'transport'],
            ['climate', 'change'],
            ['endangered', 'species'],
          ] },
        ],
        [
          { t: 'ex', kind: 'colloc', h: 'Which words go with the verb? Choose all the right ones.', items: [
            { key: 'save', o: ['energy', 'water', 'pollution', 'money'], a: [0, 1, 3], why: 'We *save* energy, water and money. Pollution is something we *reduce*.' },
            { key: 'cause', o: ['damage', 'floods', 'energy', 'pollution'], a: [0, 1, 3], why: 'We *cause* problems: damage, floods, pollution. We *save* or *use* energy.' },
            { key: 'protect', o: ['wildlife', 'forests', 'the environment', 'rubbish'], a: [0, 1, 2], why: 'We *protect* things we want to keep. We *throw away* rubbish.' },
          ] },
          { t: 'ex', kind: 'bank', h: 'Complete the text with words from the box.', extra: ['close'], items: [
            { q: 'Burning fossil fuels causes global ___.', a: 'warming', why: '*Global warming*: the Earth getting hotter.' },
            { q: 'Solar and wind power are kinds of ___ energy.', a: 'renewable', why: 'Energy that does not run out.' },
            { q: 'Please ___ off the computer when you leave.', a: 'turn', why: 'Machines are *turned off*.' },
            { q: 'Put the bottles in the recycling ___.', a: 'bin', why: '*Recycling bin*: noun + noun.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'In the format of the B1 Preliminary exam (Reading Part 6): write ONE word in each gap.', items: [
            { q: 'Many people now cycle to work instead ___ driving.', a: ['of'], why: 'The fixed phrase is *instead of*.' },
            { q: 'Every year, tonnes of food ___ thrown away by supermarkets.', a: ['are'], why: 'Passive, plural: *are thrown away*.' },
            { q: 'If we want to protect the planet, we ___ to change our habits.', a: ['need', 'have'], why: '*Need to* or *have to*: necessity.' },
            { q: 'Turning off the lights is ___ easy way to save energy.', a: ['an', 'one'], why: '*An easy way*: *an* before a vowel sound.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Reading Part 6 there are **no options**: you write one word in each gap. The missing words are usually small ones: prepositions (*of, in*), articles (*a, the*), auxiliaries (*are, was, have*) and pronouns. Look at the words on both sides of the gap.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'kofi', items: [
            { a: 'We should reduce plastic waste.' },
            { a: 'Turn off the lights to save energy.' },
            { a: 'Public transport causes less pollution.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'Not as big as…',
      about: 'Compare precisely: as … as, not as … as, and much, far, a bit and slightly with comparatives.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'You already know comparatives: *bigger, cheaper, more expensive, better*. At B1, you learn to make comparisons more **precise** and more **polite**.\n\nTo say two things are the **same**, use **as + adjective + as**: *My flat is **as big as** yours.* To say they are different, use **not as + adjective + as**: *The train is **not as fast as** the plane.*\n\n*Not as … as* is often more polite than a comparative. *Your town is not as lively as mine* sounds softer than *Your town is more boring than mine*.' },
          { t: 'examples', items: [
            { s: 'This city is **as expensive as** London.', n: 'The same price level.' },
            { s: 'Buses are**n’t as fast as** trains.', n: 'Trains are faster.' },
            { s: 'The new park is**n’t as big as** the old one, but it’s greener.', n: 'A polite comparison.' },
            { s: 'Cycling is **as quick as** driving in the city centre.', n: 'Equal: the same time.' },
            { s: 'I’m **not as good at** maths **as** my sister.', n: '*As* comes back after *good at maths*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Use the adjective in its normal form between *as … as*: *as big as*, *as expensive as*, never *as bigger as* or *as more expensive as*.' },
        ],
        [
          { t: 'text', md: 'To say how **big** the difference is, put a word before the comparative.\n\nA **big** difference: **much**, **far**, **a lot**: *The train is **much faster** than the bus.* *Solar energy is **far cleaner** than coal.*\n\nA **small** difference: **a bit**, **a little**, **slightly**: *This flat is **a bit cheaper**.* *Today is **slightly warmer** than yesterday.*\n\nYou cannot use *very* before a comparative: *very bigger* is wrong. Use *much bigger*.' },
          { t: 'table', caption: 'How big is the difference?', explain: ['head', 'col0'], head: ['', 'Words', 'Example'], rows: [
            ['big difference', 'much, far, a lot', 'Cars are much more polluting than bikes.'],
            ['small difference', 'a bit, a little, slightly', 'The second hotel is slightly cheaper.'],
            ['no difference', 'as … as', 'It’s as cold as last winter.'],
            ['negative', 'not as … as, not nearly as … as', 'It’s not nearly as hot as last year.'],
          ] },
        ],
        [
          { t: 'text', md: 'These mistakes are very common, even at B1 and B2.' },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['It’s very cheaper.', 'It’s much cheaper.', '*Very* does not go before a comparative.'],
            ['He’s as tall than me.', 'He’s as tall as me.', 'After *as … *, use *as*, not *than*.'],
            ['It’s more cheaper.', 'It’s cheaper.', 'Short adjectives take *-er*, not *more*.'],
            ['She’s more better now.', 'She’s much better now.', '*Better* is already a comparative.'],
            ['It’s not so expensive like I thought.', 'It’s not as expensive as I thought.', 'The pattern is *not as … as*.'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'Choosing how to travel', lines: [
            { who: 'Lucas', s: 'Should we take the train or fly to Edinburgh?' },
            { who: 'Ana', s: 'The plane is much faster, but it’s far worse for the environment.' },
            { who: 'Lucas', s: 'True. And the train isn’t as expensive as I thought.' },
            { who: 'Ana', s: 'It’s only slightly more expensive than the bus, and much more comfortable.' },
            { who: 'Lucas', s: 'And we can work on the train. It’s not nearly as stressful as an airport.' },
            { who: 'Ana', s: 'Train it is, then.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Read the dialogue. Choose the right answer.', items: [
            { q: 'What do they say about the plane?', o: ['It is faster but worse for the environment.', 'It is cheaper than the train.', 'It is as comfortable as the train.'], why: '*The plane is much faster, but it’s far worse for the environment.*' },
            { q: 'How do the train and the bus compare?', o: ['The train costs a little more.', 'The bus is much more comfortable.', 'They cost the same.'], why: '*Only slightly more expensive than the bus.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'Wind energy is ___ cleaner than coal.', o: ['far', 'very', 'more'], why: 'A big difference: *far* + comparative.' },
            { q: 'My new phone isn’t as fast ___ my old one.', o: ['as', 'than', 'like'], why: '*Not as … as*.' },
            { q: 'This year was ___ warmer than last year: only one degree.', o: ['slightly', 'much', 'far'], why: 'One degree is a small difference: *slightly*.' },
            { q: 'Organic food is ___ more expensive than normal food.', o: ['a lot', 'very', 'too'], why: 'A big difference: *a lot*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite with *not as … as* so the meaning stays the same.', items: [
            { q: 'The train is faster than the bus.', cue: 'The bus', a: ['The bus is not as fast as the train.', 'The bus isn’t as fast as the train.'], why: 'If the train is faster, the bus is *not as fast as* the train.' },
            { q: 'My town is quieter than the capital.', cue: 'The capital', a: ['The capital is not as quiet as my town.', 'The capital isn’t as quiet as my town.'], why: 'Turn it round: the capital is *not as quiet as* my town.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'Bikes are [very] cheaper than cars.', a: ['much', 'far', 'a lot'], why: '*Very* cannot go before a comparative.' },
            { s: 'She is as clever [than] her brother.', a: ['as'], why: '*As … as*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam (Reading Part 1): read the notice. What does it say?', items: [
            { q: 'CITY BIKES: Hire a bike for the day. Now as cheap as a single bus ticket!', o: ['A day of bike hire costs the same as one bus ticket.', 'Bikes are now cheaper than buses for a week.', 'You can take your bike on the bus.'], why: '*As cheap as* = the same price.' },
            { q: 'Our new shop is open! Slightly smaller than the old one, but with far more organic food.', o: ['The new shop is a bit smaller but has much more organic food.', 'The new shop is much bigger.', 'The old shop sold more organic food.'], why: '*Slightly smaller* (a bit), *far more* (much more).' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Reading Part 1, you read a short notice or message and choose what it means. The right answer often uses **different words** with the same meaning: *as cheap as* becomes *costs the same*. Do not choose an option just because it repeats words from the text.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'The bus isn’t as fast as the train.' },
            { a: 'Solar energy is far cleaner than coal.' },
            { a: 'This flat is slightly cheaper.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'How Westbridge cut its plastic',
      about: 'Read a longer article about a real change, and use the passive and comparisons to talk about it.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'This lesson puts the unit together. You will read an article about a town that changed its habits. Notice how the writer uses the **passive** to describe what was done, **collocations** like *reduce waste* and *single-use plastic*, and **comparisons** to show how much things changed.\n\nBefore you read, learn two words: **single-use plastic** is plastic that is used once and then thrown away (straws, bags, cups). A **refill station** is a place where you fill your own bottle or container.' },
          { t: 'reading', title: 'How Westbridge cut its plastic', md: 'Five years ago, the small town of Westbridge had a problem. Its beaches were covered in plastic, and the town produced far more waste than other towns of the same size.\n\nThen a group of local people decided to act. First, single-use plastic bags were banned in all the shops. Refill stations were opened in the market, where people could fill their own bottles with water, milk and even soap. Restaurants were asked to stop using plastic straws.\n\nNot everyone was happy at first. Some shop owners said that paper bags were much more expensive than plastic ones. But the changes worked. Today, the town produces about 40% less plastic waste than five years ago, and the beaches are much cleaner.\n\n“It wasn’t as hard as we thought,” says Maya Collins, who started the group. “People just needed an easy way to change.” Last year, Westbridge was given a national prize, and its ideas are now being copied by other towns.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam (Reading Part 3): read the article and choose the best answer.', items: [
            { q: 'What was Westbridge’s problem five years ago?', o: ['It produced more waste than similar towns.', 'It had no shops or restaurants.', 'Its beaches were too crowded.', 'It had no recycling centre.'], why: '*The town produced far more waste than other towns of the same size.*' },
            { q: 'What could people do at the refill stations?', o: ['Fill their own containers.', 'Buy plastic bags.', 'Recycle old bottles.', 'Buy cheap paper bags.'], why: '*People could fill their own bottles with water, milk and even soap.*' },
            { q: 'Why were some shop owners unhappy?', o: ['Paper bags cost them more.', 'They had to close their shops.', 'Nobody came to the market.', 'They lost the prize.'], why: '*Paper bags were much more expensive than plastic ones.*' },
            { q: 'What does Maya Collins say about the changes?', o: ['They were easier than people expected.', 'They were too expensive.', 'Nobody wanted them.', 'They need more time.'], why: '*It wasn’t as hard as we thought.*' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Reading Part 3, the questions follow the order of the text. Read each question, find the part of the text it is about, and read that part carefully. Three options are wrong for a reason: they say something the text does not say.' },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the verbs in the passive in these sentences from the article.', items: [
            { s: 'First, single-use plastic bags were [banned] in all the shops.', why: '*Were banned*: past simple passive.' },
            { s: 'Refill stations were [opened] in the market.', why: '*Were opened*: past simple passive.' },
            { s: 'Last year, Westbridge was [given] a national prize.', why: '*Was given*: past simple passive.' },
          ] },
          { t: 'ex', kind: 'wordform', h: 'Complete each sentence with the right form of the word in capitals.', items: [
            { q: 'Plastic is very bad for the ___.', base: 'environmental', a: ['environment'], why: 'The noun: *the environment*.' },
            { q: 'Air ___ is a serious problem in big cities.', base: 'pollute', a: ['pollution'], why: 'The noun from *pollute* is *pollution*.' },
            { q: 'Solar power is a kind of ___ energy.', base: 'renew', a: ['renewable'], why: 'The adjective: *renewable* (it can be renewed).' },
          ] },
        ],
        [
          { t: 'text', md: 'Now talk about your own town. Use what you learned in this unit: the passive to say what was done (*a new park was opened*), collocations (*reduce waste, public transport*), and comparisons (*much cleaner, not as busy as*).\n\nFor example: *In my town, a new bike lane was built last year. Now cycling is much safer than before, and the centre isn’t as noisy as it was.*' },
          { t: 'ex', kind: 'build', h: 'Build the sentence. Two words do not belong.', items: [
            { a: 'The beaches are much cleaner than before.', extra: ['very', 'more'], why: '*Much* + comparative; *cleaner* already has *-er*.' },
            { a: 'Plastic bags were banned in all the shops.', extra: ['was', 'from'], why: 'Plural subject: *were banned*.' },
          ] },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'mei', items: [
            { a: 'Plastic bags were banned in all the shops.' },
            { a: 'It wasn’t as hard as we thought.' },
            { a: 'The town produces far less waste now.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'gap', h: 'Complete with the passive of the verb in brackets.', items: [
      { q: 'This cheese ___ (make) in a small village.', a: ['is made'], why: 'Present simple passive: *is made*.' },
      { q: 'The castle ___ (build) in the twelfth century.', a: ['was built'], why: 'Past simple passive: *was built*.' },
      { q: 'Thousands of trees ___ (plant) last year.', a: ['were planted'], why: 'Past, plural: *were planted*.' },
      { q: 'Glass ___ (not recycle) with paper.', a: ['is not recycled', 'isn’t recycled'], why: 'Negative present passive.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'The museum [was open] by the mayor in 2019.', a: ['was opened'], why: 'Past participle: *opened*.' },
      { s: 'It [was happened] on a Sunday.', a: ['happened'], why: '*Happen* has no passive.' },
      { s: 'Cars are [very] more polluting than bikes.', a: ['much', 'far', 'a lot'], why: 'Not *very* before a comparative.' },
    ] },
    { t: 'ex', kind: 'colloc', h: 'Which words go with the verb?', items: [
      { key: 'reduce', o: ['waste', 'pollution', 'wildlife', 'your carbon footprint'], a: [0, 1, 3], why: 'We *reduce* bad things; we *protect* wildlife.' },
    ] },
    { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
      { q: 'The bus isn’t as quick ___ the tram.', o: ['as', 'than', 'that'], why: '*Not as … as*.' },
      { q: 'This model is ___ cheaper: just one euro less.', o: ['slightly', 'far', 'much'], why: 'A small difference: *slightly*.' },
      { q: 'Please turn ___ the heating when you go out.', o: ['off', 'away', 'down'], why: 'Machines are *turned off*.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentences.', items: [
      { q: 'They sell fresh fish at the market.', cue: 'Fresh fish', a: ['Fresh fish is sold at the market.'], why: 'Passive: *is sold*.' },
      { q: 'The plane is faster than the train.', cue: 'The train', a: ['The train is not as fast as the plane.', 'The train isn’t as fast as the plane.'], why: '*Not as … as*.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Choose the best word.', items: [
      { q: 'Burning fossil fuels causes global ___.', o: ['warming', 'heating', 'weather', 'change'], why: 'The collocation is *global warming*.' },
      { q: 'More towns are now using ___ energy from the sun and wind.', o: ['renewable', 'recycled', 'fossil', 'endangered'], why: '*Renewable energy* does not run out.' },
    ] },
  ],
};
