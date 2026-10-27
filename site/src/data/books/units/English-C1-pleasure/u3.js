// English C1 for travel, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Food culture in depth',
  goal: 'Discuss flavours, cooking and food traditions with precision and nuance.',
  art: 'pizza',
  tags: { skills: ['speaking', 'vocabulary', 'grammar', 'reading'], topics: ['taste-and-texture', 'cooking-methods', 'food-traditions', 'concessive-clauses', 'much-as', 'food-writing'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Smoky, tangy and melt-in-the-mouth',
      about: 'Describe taste, texture and the way food is cooked with precise words.',
      art: 'croissant',
      spreads: [
        [
          { t: 'text', md: 'To talk about food in depth, *delicious* and *tasty* are not enough. Food writers separate **taste** (what your tongue notices), **texture** (how the food feels in your mouth) and **method** (how it was cooked). A precise word in each area tells the listener exactly what to expect.' },
          { t: 'table', caption: 'Taste and texture', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['tangy', 'with a sharp, slightly sour taste, like lemon or yoghurt'],
            ['savoury', 'salty or spicy rather than sweet'],
            ['earthy', 'tasting a little of soil, like mushrooms or beetroot'],
            ['smoky', 'tasting of smoke from a fire or grill'],
            ['bland', 'with very little taste'],
            ['crumbly', 'breaking easily into small pieces'],
            ['chewy', 'needing a lot of biting before you can swallow it'],
            ['flaky', 'made of thin layers that break apart'],
          ] },
        ],
        [
          { t: 'examples', items: [
            { s: 'The lamb is **braised** for hours until it **melts in the mouth**.', n: '*Braise*: cook slowly in a little liquid in a closed pot.' },
            { s: 'The beans are **simmered** with garlic and bay leaves.', n: '*Simmer*: cook gently, just below boiling.' },
            { s: 'The peppers are **charred** over an open flame, then peeled.', n: '*Char*: burn the outside a little, for a smoky taste.' },
            { s: 'The cabbage is **fermented** for several weeks, which gives it a sour, tangy flavour.', n: '*Ferment*: leave food to change slowly, often becoming sour.' },
            { s: 'The ham is **cured** with salt and hung in a cool cellar.', n: '*Cure*: preserve meat or fish with salt, smoke or drying.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Strong descriptions often combine areas: *a crumbly, tangy cheese*, *a rich, slow-cooked stew*, *crisp on the outside and soft in the middle*. Compound adjectives such as *slow-cooked*, *home-made* and *wood-fired* describe method in one word.' },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Is the word about taste or texture?', groups: ['taste', 'texture'], explain: ['groups'], items: [
            { s: 'tangy', g: 0, why: '*Tangy* describes a sharp, sour taste.' },
            { s: 'crunchy', g: 1, why: '*Crunchy* describes the noise and feel when you bite.' },
            { s: 'bitter', g: 0, why: '*Bitter* is a taste, like strong coffee or dark chocolate.' },
            { s: 'silky', g: 1, why: '*Silky*: very smooth in the mouth.' },
            { s: 'earthy', g: 0, why: '*Earthy* is a taste, like mushrooms or soil.' },
            { s: 'chewy', g: 1, why: '*Chewy*: you have to bite it a lot.' },
            { s: 'gooey', g: 1, why: '*Gooey*: soft and sticky, like melted cheese.' },
          ] },
          { t: 'ex', kind: 'wordform', h: 'Complete with a form of the word in capitals.', items: [
            { q: 'The pastry was light and ___, with dozens of thin layers.', base: 'flake', a: ['flaky'], why: 'Noun or verb *flake* + *-y*: *flaky*, dropping the *e*.' },
            { q: 'Without salt, the soup was rather ___ and dull.', base: 'taste', a: ['tasteless'], why: '*-less* means *without*: with no taste.' },
            { q: 'This cheese has a strong, ___ smell that not everyone likes.', base: 'pungency', a: ['pungent'], why: 'The adjective is *pungent*: very strong in smell or taste.' },
            { q: 'The peaches were so ___ that the juice ran down my arm.', base: 'juice', a: ['juicy'], why: '*Juice* + *-y*, dropping the *e*: *juicy*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'crossword', h: 'Cooking methods: complete the crossword.', words: [
            { a: 'simmer', clue: 'Cook gently, just below boiling.' },
            { a: 'braise', clue: 'Cook slowly in a little liquid in a closed pot.' },
            { a: 'ferment', clue: 'Leave food to change slowly until it becomes sour, like yoghurt or kimchi.' },
            { a: 'cure', clue: 'Preserve meat or fish with salt, smoke or drying.' },
            { a: 'char', clue: 'Burn the outside of something a little over a flame.' },
            { a: 'poach', clue: 'Cook an egg or fish gently in water that is not quite boiling.' },
          ] },
          { t: 'ex', kind: 'colloc', h: 'Which words go with the key word?', items: [
            { key: 'slow-cooked', o: ['stew', 'beef', 'salad', 'ice cream'], a: [0, 1], why: 'Only dishes that are heated for a long time are *slow-cooked*.' },
            { key: 'wood-fired', o: ['oven', 'pizza', 'yoghurt', 'smoothie'], a: [0, 1], why: '*Wood-fired*: cooked in an oven heated by burning wood.' },
            { key: 'crisp', o: ['apple', 'pastry', 'soup', 'jelly'], a: [0, 1], why: '*Crisp*: hard and fresh, breaking with a clean sound.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Much as I love it…',
      about: 'Talk about food traditions in a more formal style and balance positive and negative views.',
      art: 'churro',
      spreads: [
        [
          { t: 'text', md: 'When you talk about where a dish comes from and what it means to people, a more formal set of phrases is useful. These phrases are common in food writing, guidebooks and documentaries.' },
          { t: 'table', caption: 'Food and tradition', explain: ['head'], head: ['Phrase', 'Example'], rows: [
            ['date back to', 'The recipe dates back to the sixteenth century.'],
            ['be passed down', 'The method has been passed down from mother to daughter.'],
            ['be synonymous with', 'The town is synonymous with blue cheese.'],
            ['be steeped in tradition', 'The festival is steeped in tradition.'],
            ['a staple', 'Rice is a staple in much of Asia.'],
            ['an acquired taste', 'Salted liquorice is an acquired taste: few people love it at first.'],
            ['a regional speciality', 'Every valley seems to have its own regional speciality.'],
          ] },
        ],
        [
          { t: 'text', md: 'A thoughtful opinion about food often admits two things at once: *I love it, but…* At C1 you can express this **contrast** with more elegant structures. *Much as* means *although … very much*. In the pattern **adjective + as + subject + verb**, the adjective moves to the front for emphasis. *However* + adjective means *it does not matter how*.' },
          { t: 'examples', items: [
            { s: '**Much as** I love street food, I wouldn’t eat it every day.', n: '*Much as* = *although I love it very much*. Used with verbs of liking.' },
            { s: '**Strange as it may sound**, the best meal of the trip was at a petrol station.', n: 'Adjective + *as* + subject + verb: *Although it may sound strange*.' },
            { s: '**However** spicy the sauce is, my grandmother eats it without blinking.', n: '*However* + adjective: it does not matter how spicy.' },
            { s: '**While** the dish looks simple, it takes two days to prepare.', n: '*While* (or *whilst*, more British and formal) can mean *although*.' },
            { s: '**Despite being** a staple, bread is treated almost as sacred there.', n: '*Despite* + *-ing* or noun, never + a clause.' },
          ] },
          { t: 'tip', art: 'cat', md: 'In the pattern *Strange as it may sound*, the word *as* can be replaced by *though*: *Strange though it may sound*. But never put *very* or *so* in front of the adjective here: not *Very strange as it may sound*.' },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence, starting with the words given.', items: [
            { q: 'Although I love seafood, I couldn’t eat raw sea urchin.', cue: 'Much as', a: ['Much as I love seafood, I couldn’t eat raw sea urchin.'], why: '*Much as* + subject + verb of liking.' },
            { q: 'Although it may seem odd, they put sugar on their tomatoes.', cue: 'Odd as', a: ['Odd as it may seem, they put sugar on their tomatoes.'], why: 'Adjective + *as* + subject + verb.' },
            { q: 'It doesn’t matter how hungry you are, don’t order the giant platter.', cue: 'However', a: ['However hungry you are, don’t order the giant platter.', 'However hungry you may be, don’t order the giant platter.'], why: '*However* + adjective + subject + verb.' },
            { q: 'Although the restaurant is famous, the service was disappointing.', cue: 'Despite', a: ['Despite the restaurant being famous, the service was disappointing.', 'Despite the fame of the restaurant, the service was disappointing.', 'Despite the restaurant’s fame, the service was disappointing.', 'Despite being famous, the restaurant had disappointing service.'], why: '*Despite* is followed by a noun or an *-ing* form, not by a clause.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'bank', h: 'Complete with the words from the bank.', extra: ['acquainted', 'staple diet'], items: [
            { q: 'The town is ___ with its chocolate cake, which has its own festival.', a: 'synonymous', why: '*Be synonymous with*: so closely linked that people think of one when they hear the other.' },
            { q: 'Most people hate this bitter drink at first: it’s an ___ taste.', a: 'acquired', why: '*An acquired taste*: something you learn to like over time.' },
            { q: 'The recipe has been ___ down through five generations.', a: 'passed', why: '*Be passed down*: be given from older people to younger people.' },
            { q: 'The tradition ___ back to a harvest festival in the Middle Ages.', a: 'dates', why: '*Date back to*: have existed since a time in the past.' },
            { q: 'The whole ceremony is ___ in tradition, from the songs to the food.', a: 'steeped', why: '*Be steeped in*: be full of something, especially history or tradition.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: '[Despite] the dish looks simple, it takes hours to make.', a: ['Although', 'Though', 'While', 'Even though', 'Whilst'], why: '*Despite* cannot go before a clause. Use *Although* or *While*.' },
            { s: 'Much as I [am loving] the market, it gets far too crowded.', a: ['love'], why: '*Love* is a state verb here: *Much as I love*.' },
            { s: 'However [the sauce is spicy], they add more chilli.', a: ['spicy the sauce is'], why: '*However* is followed directly by the adjective: *However spicy the sauce is*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Breakfast at the market',
      about: 'Read a food writer’s essay and look at how it describes taste and tradition.',
      art: 'nata',
      spreads: [
        [
          { t: 'reading', title: 'Breakfast at the market', md: 'By six in the morning, the covered market is already loud. Delivery vans reverse into the loading bay, porters shout to each other over crates of oranges, and at the back of the hall, under a single bare bulb, a small counter is serving the best breakfast in the city.\n\nThere is no menu. The woman behind the counter, who has worked here for longer than anyone can remember, simply asks whether you want it “with or without”. *With* means a spoonful of fiery red paste, made from peppers that have been charred, peeled and left to ferment in jars along the shelf. *Without* is for visitors, she says, though she says it with a smile.\n\nThe dish itself is humble: beans simmered overnight with garlic, a soft-boiled egg, and a thick slice of bread that is crisp outside and chewy inside. Yet much as I have tried to recreate it at home, I have never managed it. The beans are earthy and almost creamy, the paste tangy and hot enough to make your eyes water, and the bread soaks it all up.\n\nThe recipe is said to date back to the days when market porters needed something cheap and filling before a long shift. Today the counter is synonymous with the market, and its regulars range from fish sellers to office workers in suits. Some of them have been coming for decades, and the woman knows exactly how each of them takes their coffee.\n\nCheap as it is, the breakfast is not really about saving money. It is about belonging, briefly, to a place that has been feeding people the same way for generations. However early you arrive, someone will already be there, and they will move along the bench to make room.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'The breakfast counter is near the entrance of the market.', a: 'f', why: 'It is “at the back of the hall”.' },
            { q: 'Customers choose their breakfast from a written menu.', a: 'f', why: '“There is no menu.”' },
            { q: 'The red paste is made from peppers that have been fermented.', a: 't', why: 'The peppers are charred, peeled and left to ferment in jars.' },
            { q: 'The writer has successfully made the dish at home.', a: 'f', why: '“I have never managed it.”' },
            { q: 'The woman at the counter owns the market.', a: 'ng', why: 'The essay says she has worked there for a long time, not that she owns it.' },
            { q: 'The writer says the breakfast is mainly popular because it is cheap.', a: 'f', why: '“The breakfast is not really about saving money. It is about belonging.”' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language of the essay.', items: [
            { q: '*Without* is for visitors, “though she says it with a smile”. This suggests that:', o: ['she is teasing gently, not being unfriendly', 'she refuses to serve visitors', 'visitors always choose *with*'], why: 'The smile shows the remark is a friendly joke.' },
            { q: '“The dish itself is **humble**.” Here *humble* means:', o: ['simple and ordinary', 'shy', 'expensive'], why: 'For food, *humble* means simple, not fancy.' },
            { q: '“Cheap as it is, the breakfast is not really about saving money.” This means:', o: ['although it is cheap', 'because it is cheap', 'as cheap as possible'], why: 'Adjective + *as* + subject + verb expresses contrast: *although*.' },
            { q: '“The recipe **is said to** date back to…” The writer uses this phrase because:', o: ['it is what people say, not a proven fact', 'the woman told the writer directly', 'the recipe is written in a book'], why: '*Is said to* reports a common belief and keeps a distance from it.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the words from the essay with their meanings.', pairs: [
            ['fiery', 'very hot and spicy'],
            ['filling', 'making you feel full'],
            ['soak up', 'take in a liquid, like a sponge'],
            ['regulars', 'customers who come very often'],
            ['make room', 'move so that there is space for someone'],
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'The soup had almost no flavour. It was ___.', o: ['bland', 'tangy', 'earthy'], why: '*Bland*: with very little taste.' },
      { q: 'Cook the sauce gently: let it ___ for twenty minutes.', o: ['simmer', 'char', 'cure'], why: '*Simmer*: cook just below boiling.' },
      { q: '___ I enjoy spicy food, this was far too hot for me.', o: ['Much as', 'Despite', 'However'], why: '*Much as* + subject + verb of liking: *although I like it very much*.' },
      { q: 'Rice is a ___ in many countries: people eat it almost every day.', o: ['staple', 'speciality', 'taste'], why: 'A *staple* is a basic food eaten regularly.' },
      { q: '___ it may sound, I prefer the cheap café to the famous restaurant.', o: ['Strange as', 'As strange', 'Very strange as'], why: 'Adjective + *as* + subject + verb.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete each sentence with one word.', items: [
      { q: 'This festival dates ___ to the fourteenth century.', a: ['back'], why: '*Date back to* a time in the past.' },
      { q: 'The pastry is light and ___, made of many thin layers.', a: ['flaky'], why: '*Flaky*: made of thin layers that break apart.' },
      { q: '___ hungry you are, you won’t finish that plate.', a: ['However'], why: '*However* + adjective: it does not matter how.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence, starting with the words given.', items: [
      { q: 'Although the meal was expensive, it was worth every penny.', cue: 'Expensive as', a: ['Expensive as the meal was, it was worth every penny.', 'Expensive as it was, the meal was worth every penny.'], why: 'Adjective + *as* + subject + verb.' },
      { q: 'Although it was raining, the market was full.', cue: 'Despite', a: ['Despite the rain, the market was full.', 'Despite it raining, the market was full.', 'Despite the fact that it was raining, the market was full.'], why: '*Despite* + noun, *-ing* form or *the fact that*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'In spite of [it was cold], we ate outside.', a: ['the cold', 'it being cold', 'the fact that it was cold'], why: '*In spite of* is followed by a noun or an *-ing* form, not a clause.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'An *acquired taste* is something most people love the first time they try it.', a: 'f', why: 'It is something you learn to like over time.' },
    ] },
  ],
};
