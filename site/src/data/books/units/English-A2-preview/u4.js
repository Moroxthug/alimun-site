// English A2, unit 4, second edition (docs/LESSONS_PLAN.md, L6). Draft for native-teacher review.
// Each lesson: a full explanation first (the rule in plain words, why, many examples, the usual mistakes, a text that
// uses it), then fewer exercises from controlled to free, one speaking task, and one task in the format of A2 Key.
export const UNIT = {
  id: 'u4',
  title: 'Homes and towns',
  goal: 'Describe your home and your town, say where places are, compare places, and ask for and give directions.',
  art: 'cactus',
  tags: { skills: ['grammar', 'vocabulary', 'speaking', 'reading'], topics: ['there-is-there-are', 'prepositions-of-place', 'comparatives', 'directions', 'home'], goals: ['foundations', 'relocation'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'There’s a park opposite',
      about: 'Describe a place with there is, there are, there was and there were, and say exactly where things are.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'You already know **there is** and **there are** for saying what is in a place: *There’s a sofa in the living room. There are two bedrooms.* Remember: **there is** with one thing or an uncountable noun, **there are** with plurals. *There’s some milk. There are some shops.*\n\nNow use the same pattern in the past, to talk about your old home or your town when you were a child: **there was** (one thing) and **there were** (plurals). *There was a big garden. There were a lot of trees.*\n\nNegatives and questions work like *be*: *There wasn’t a lift. Were there any shops near your house?*' },
          { t: 'table', caption: 'there is and there was', explain: ['head', 'col0'], head: ['', 'Now', 'In the past'], rows: [
            ['One thing', 'There’s a park.', 'There was a park.'],
            ['More than one', 'There are three cafés.', 'There were three cafés.'],
            ['Negative', 'There isn’t a lift.', 'There wasn’t a lift.'],
            ['Question', 'Are there any shops?', 'Were there any shops?'],
          ] },
          { t: 'tip', art: 'owl', md: 'When a sentence starts with a place, use **there is** or **there are**: *In my town there is a cinema.* Learners often write *In my town have a cinema*, which is wrong. You can also say *My town has a cinema*, with the town as the subject.' },
        ],
        [
          { t: 'text', md: 'At A1 you learned **in**, **on** and **under**. To describe a home or a street exactly, you need more words of place:\n\n**next to** (very near, at the side): *The bank is next to the post office.*\n\n**opposite** (on the other side of the street or room): *There’s a park opposite my flat.*\n\n**between** (with something on each side): *The café is between the bank and the cinema.*\n\n**behind** and **in front of**: *There’s a garden behind the house. The bus stop is in front of the school.*\n\n**near** (not far): *Is there a supermarket near here?*' },
          { t: 'examples', items: [
            { s: 'The pharmacy is **next to** the bakery.', n: 'At the side, very close.' },
            { s: 'There’s a big park **opposite** our building.', n: 'On the other side of the street.' },
            { s: 'The café is **between** the bank **and** the cinema.', n: '*between* A *and* B.' },
            { s: 'We park the car **behind** the house.', n: 'At the back.' },
            { s: 'Meet me **in front of** the station.', n: 'At the front, outside.' },
            { s: 'When I was a child, **there was** a cinema **near** our house.', n: 'The past, with *there was*.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['In my street have a café.', 'In my street there is a café.', 'For what is in a place: *there is*.'],
            ['There is two bedrooms.', 'There are two bedrooms.', 'Plural: *there are*.'],
            ['next the bank', 'next to the bank', '*next* needs *to*.'],
            ['between the bank with the café', 'between the bank and the café', '*between* A *and* B.'],
            ['There were a garden.', 'There was a garden.', 'One thing: *there was*.'],
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
            { q: 'When I was young, ___ a big park near my school.', o: ['there was', 'there were', 'it was'], why: 'One park, in the past: *there was*.' },
            { q: '___ any good restaurants in your town?', o: ['Are there', 'Is there', 'Have'], why: 'A question with a plural: *Are there*.' },
            { q: 'The bus stop is in front ___ the library.', o: ['of', 'to', 'at'], why: '*in front of*' },
            { q: 'Our flat is ___ the bakery and the bank.', o: ['between', 'opposite', 'next'], why: 'Two places, one on each side: *between*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'label', h: 'Label the kitchen.', scene: 'kitchen', extra: ['sofa', 'mirror'], items: [
            { x: 260, y: 70, a: 'fridge', why: 'You keep milk and cheese in the *fridge*.' },
            { x: 156, y: 100, a: 'kettle', why: 'You boil water for tea in a *kettle*.' },
            { x: 160, y: 165, a: 'cupboard', why: 'Plates and food go in the *cupboard*.' },
            { x: 160, y: 50, a: 'window', why: 'You look out of the *window*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Each sentence has one mistake. Find it and fix it.', items: [
            { s: 'The bank is [next] the post office.', a: ['next to'], why: '*next to*' },
            { s: 'In my old town [there were] a castle.', a: ['there was'], why: 'One castle: *there was*.' },
            { s: '[Is there] any shops near your flat?', a: ['Are there'], why: '*shops* is plural.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam (Speaking, Part 1): choose the best answer to the examiner’s question.', items: [
            { q: '“Tell me something about the place where you live.”', o: ['I live in a small flat in the city centre. There’s a park opposite, and there are a lot of cafés near it.', 'Yes, I live.', 'In my street have a café.'], why: 'A good answer gives two or three details in full sentences.' },
            { q: '“Is there anything you don’t like about your town?”', o: ['There isn’t a cinema, so we go to the next town to see films.', 'No.', 'There aren’t a cinema.'], why: 'Answer and give a reason; *a cinema* is singular: *there isn’t*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Part 1 of the A2 Key speaking test the examiner asks about you: your home, your town, your free time. One-word answers lose marks. Say **two or three sentences**, and use **because**, **and** and **but** to join them.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'kofi', items: [
            { a: 'There’s a park opposite my flat.' },
            { a: 'The café is between the bank and the cinema.' },
            { a: 'When I was a child, there was a market near our house.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'Bigger and better',
      about: 'Compare places and things with comparative adjectives and than.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'text', md: 'To compare two places or things, use a **comparative** adjective + **than**: *London is bigger than Oxford. My new flat is quieter than my old one.*\n\nHow you make the comparative depends on the length of the adjective:\n\n**Short adjectives** (one syllable) add **-er**: *cheap → cheaper, old → older, small → smaller*.\n\nAdjectives ending in **-y** change *y* to **-ier**: *busy → busier, noisy → noisier, easy → easier*.\n\n**Long adjectives** (two or more syllables) use **more**: *expensive → more expensive, beautiful → more beautiful, interesting → more interesting*.' },
          { t: 'table', caption: 'Making comparatives', explain: ['head', 'col0'], head: ['Rule', 'Adjective', 'Comparative'], rows: [
            ['most short adjectives: add -er', 'cheap', 'cheaper'],
            ['ending in -e: add -r', 'nice', 'nicer'],
            ['one vowel + one consonant: double it', 'big', 'bigger'],
            ['ending in -y: -ier', 'busy', 'busier'],
            ['long adjectives: more', 'expensive', 'more expensive'],
            ['irregular', 'good / bad / far', 'better / worse / further'],
          ] },
          { t: 'tip', art: 'owl', md: 'Never use **more** and **-er** together: *more bigger* is wrong. Choose one: **bigger**, or **more expensive**. And remember the three irregular ones: **good → better**, **bad → worse**, **far → further**.' },
        ],
        [
          { t: 'text', md: 'To say two things are the same, use **as … as**: *My flat is as big as yours.* The negative **not as … as** is a polite way to say *less*: *The bus isn’t as fast as the train.*\n\nIn speaking, you can make a comparison stronger with **much** or **a lot**: *The city is much busier than my village.*' },
          { t: 'examples', items: [
            { s: 'Rome is **hotter than** London in summer.', n: '*hot* doubles the *t*: *hotter*.' },
            { s: 'My new flat is **more expensive than** my old one.', n: 'Long adjective: *more*.' },
            { s: 'The city centre is **noisier than** the suburbs.', n: '*noisy → noisier*.' },
            { s: 'The coffee here is **better than** at the station.', n: 'Irregular: *good → better*.' },
            { s: 'The bus is**n’t as fast as** the train.', n: '*not as … as*.' },
            { s: 'This street is **much quieter than** mine.', n: '*much* makes it stronger.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['more cheap', 'cheaper', 'Short adjective: *-er*.'],
            ['more bigger', 'bigger', 'Never *more* and *-er* together.'],
            ['gooder', 'better', '*good* is irregular.'],
            ['bigger that Paris', 'bigger than Paris', 'Comparatives use *than*.'],
            ['as big than', 'as big as', '*as … as*.'],
          ] },
          { t: 'ex', kind: 'wordform', h: 'Write the comparative of the word in capitals.', items: [
            { q: 'My village is ___ than the city.', base: 'quiet', a: ['quieter'], why: 'Short adjective: *quieter*.' },
            { q: 'Flats in the centre are ___ than in the suburbs.', base: 'expensive', a: ['more expensive'], why: 'Long adjective: *more expensive*.' },
            { q: 'The weather today is ___ than yesterday.', base: 'bad', a: ['worse'], why: 'Irregular: *bad → worse*.' },
            { q: 'Saturday is ___ than Monday at the market.', base: 'busy', a: ['busier'], why: '*-y → -ier*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with not as … as.', items: [
            { q: 'The train is faster than the bus.', cue: 'The bus isn’t', a: ['The bus isn’t as fast as the train.', 'The bus isn\'t as fast as the train.'], why: '*not as* + adjective + *as*.' },
            { q: 'My flat is bigger than your flat.', cue: 'Your flat isn’t', a: ['Your flat isn’t as big as my flat.', 'Your flat isn’t as big as mine.', 'Your flat isn\'t as big as my flat.', 'Your flat isn\'t as big as mine.'], why: '*not as big as*.' },
          ] },
          { t: 'ex', kind: 'build', h: 'Write the sentence. Two words do not belong.', items: [
            { a: 'Madrid is hotter than Dublin.', extra: ['more', 'that'], why: '*hotter than*, not *more hotter that*.' },
            { a: 'This café is better than that one.', extra: ['gooder', 'as'], why: '*good → better*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam (Reading, Part 2): three people describe their towns. Who says each thing?', items: [
            { q: 'Anna: “My town is small but it’s cheaper than the city and the people are friendly.” Ben: “I live in a big city. It’s noisier than my village was, but there’s more to do.” Carla: “My town is by the sea. It’s quieter in winter than in summer.” Who lives somewhere that changes with the seasons?', o: ['Carla', 'Anna', 'Ben'], why: '*quieter in winter than in summer*.' },
            { q: 'Who says the place where they live costs less than a city?', o: ['Anna', 'Ben', 'Carla'], why: '*cheaper than the city*.' },
            { q: 'Who used to live in a village?', o: ['Ben', 'Anna', 'Carla'], why: '*noisier than my village was*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Part 2 of the A2 Key reading paper you read three short texts and match seven questions to the right person. The question and the text use **different words for the same idea**: *costs less* in the question, *cheaper* in the text.' },
          { t: 'ex', kind: 'speak', h: 'Compare. Say these sentences after the tutor.', tutor: 'lena', items: [
            { a: 'My new flat is bigger than my old one.' },
            { a: 'The city is much noisier than my village.' },
            { a: 'The bus isn’t as fast as the train.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'How do I get to the station?',
      about: 'Ask for and give longer directions in town, and ask how far a place is.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'At A1 you learned *Turn left* and *Go straight on*. To give a whole route, add these:\n\n**go along** (follow a street): *Go along this street.*\n\n**go past** (walk by something): *Go past the church.*\n\n**take the first / second turning on the left**: the first or second street.\n\n**cross** (go to the other side): *Cross the road at the traffic lights.*\n\n**it’s on your left / right**, **it’s on the corner**, **at the end of the street**.\n\nTo ask, be polite: **Excuse me, how do I get to the station?** or **Excuse me, is there a pharmacy near here?**' },
          { t: 'examples', items: [
            { s: '**Go along** this street and **go past** the church.', n: 'Follow the street, then walk by the church.' },
            { s: '**Take the second turning on the right.**', n: 'The second street.' },
            { s: '**Cross the road** at the traffic lights.', n: 'Go to the other side.' },
            { s: 'The station is **at the end of** the street, **on your left**.', n: 'Where it is at the end.' },
            { s: '**How far is it?** – It’s about **ten minutes’ walk**.', n: 'Asking about distance.' },
          ] },
          { t: 'tip', art: 'owl', md: 'To ask about distance, say **How far is it?** The answer is often a time, not a distance: *It’s five minutes on foot* or *It’s about ten minutes by bus*.' },
        ],
        [
          { t: 'dialogue', title: 'Excuse me…', lines: [
            { who: 'Daniel', s: 'Excuse me, how do I get to the train station?' },
            { who: 'Woman', s: 'Go along this street and go past the supermarket.' },
            { who: 'Daniel', s: 'Past the supermarket, OK.' },
            { who: 'Woman', s: 'Then take the second turning on the left. Cross the road at the traffic lights, and the station is on your right.' },
            { who: 'Daniel', s: 'How far is it?' },
            { who: 'Woman', s: 'About ten minutes on foot.' },
            { who: 'Daniel', s: 'Thank you very much!' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Read the dialogue and choose the right answer.', items: [
            { q: 'What does Daniel walk past first?', o: ['the supermarket', 'the station', 'the traffic lights'], why: '*go past the supermarket*.' },
            { q: 'Which turning does he take?', o: ['the second on the left', 'the first on the left', 'the second on the right'], why: '*take the second turning on the left*.' },
            { q: 'How long is the walk?', o: ['about ten minutes', 'about two minutes', 'about an hour'], why: '*About ten minutes on foot.*' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['How can I go to the station?', 'How do I get to the station?', 'The natural question uses *get to*.'],
            ['Cross the road in the traffic lights.', 'Cross the road at the traffic lights.', 'A point on the way: *at*.'],
            ['It’s in your left.', 'It’s on your left.', '*on your left / right*.'],
            ['How long is it? (distance)', 'How far is it?', 'Distance: *how far*.'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
            { q: 'Go ___ the bank and turn right.', a: ['past'], why: 'Walk by it: *go past*.' },
            { q: 'Take the first turning ___ the left.', a: ['on'], why: '*on the left*' },
            { q: 'The museum is ___ the end of the street.', a: ['at'], why: '*at the end of*' },
            { q: 'How ___ is it from here? – About five minutes.', a: ['far'], why: 'Distance: *how far*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Excuse me, how do I get to the museum?', why: 'Polite start, then *how do I get to*.' },
            { a: 'Cross the road at the traffic lights.', why: 'Imperative + place + *at*.' },
            { a: 'It’s on your left, opposite the bank.', why: '*on your left*, then a second detail.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam (Listening, Part 4): read what you hear and choose the right answer.', items: [
            { q: 'You hear a man on the phone: “The new restaurant isn’t in the high street. It’s near the river, next to the bridge, opposite the old church.” Where is the restaurant?', o: ['next to the bridge', 'in the high street', 'behind the church'], why: '*near the river, next to the bridge*.' },
            { q: 'You hear a woman: “It’s about twenty minutes on foot, but there’s a bus every ten minutes and it only takes five.” How long does the bus take?', o: ['five minutes', 'ten minutes', 'twenty minutes'], why: '*it only takes five*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Part 4 of the A2 Key listening paper you hear five short texts and answer one question for each. You will hear **all three options** mentioned, like *five, ten* and *twenty minutes*. Listen for the one that answers the exact question.' },
          { t: 'ex', kind: 'speak', h: 'Give directions. Say these sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'Go along this street and go past the church.' },
            { a: 'Take the second turning on the right.' },
            { a: 'It’s about ten minutes on foot.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'My new neighbourhood',
      about: 'Read an email about a new flat and its area, and write a short message about where you live.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'When you write to a friend about your home, three things make your message clear and friendly. **Open and close** the email: *Hi Tom, … Write soon! Ana*. **Give details** with *there is / there are* and places: *There’s a market opposite*. **Compare** with your old home: *It’s smaller than my old flat, but it’s much nearer to my work.*\n\nJoin your ideas with **and**, **but**, **because** and **so**. These small words make your writing better in the A2 Key writing paper.' },
          { t: 'reading', title: 'An email from Ana', md: 'Hi Tom,\n\nI moved into my new flat last week! It’s on the third floor of an old building near the river. It’s smaller than my old flat, but it’s much brighter, and the rent is cheaper.\n\nThere are two rooms, a small kitchen and a bathroom. There isn’t a lift, so I walk up the stairs every day, which is good exercise!\n\nThe area is great. There’s a market opposite the building on Saturdays, and there are a lot of cafés in the next street. The bus stop is in front of the bakery, and it’s only fifteen minutes to my office by bus. When I lived in the suburbs, it took an hour.\n\nCome and visit soon!\n\nAna' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam (Reading, Part 3): read Ana’s email and choose the right answer.', items: [
            { q: 'Ana’s new flat is', o: ['smaller but cheaper than her old flat.', 'bigger and more expensive than her old flat.', 'the same size as her old flat.'], why: '*It’s smaller than my old flat… the rent is cheaper.*' },
            { q: 'Why does Ana walk up the stairs?', o: ['There isn’t a lift.', 'She wants to get fit.', 'The lift is slow.'], why: '*There isn’t a lift, so I walk up the stairs.*' },
            { q: 'When is the market there?', o: ['on Saturdays', 'every day', 'on Sundays'], why: '*a market opposite the building on Saturdays*.' },
            { q: 'How long does Ana’s journey to work take now?', o: ['fifteen minutes', 'an hour', 'ten minutes'], why: '*only fifteen minutes to my office by bus*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Part 3 of the A2 Key reading paper you read one longer text and answer five questions. The questions follow the **order of the text**, so read it once quickly, then find the answer to each question one by one.' },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Read the email again. True, false or not given?', ng: true, items: [
            { q: 'Ana moved last month.', a: 'f', why: 'She moved *last week*.' },
            { q: 'Her flat is near the river.', a: 't', why: '*near the river*' },
            { q: 'Ana has got a car.', a: 'ng', why: 'The email does not say.' },
            { q: 'The bus stop is in front of the bakery.', a: 't', why: '*in front of the bakery*' },
          ] },
          { t: 'ex', kind: 'bank', h: 'Complete Tom’s answer with the words.', extra: ['than'], items: [
            { q: 'Hi Ana, your flat sounds great, ___ I’m happy for you!', a: 'and', why: '*and* joins two ideas.' },
            { q: 'My street is noisy ___ there’s a lot of traffic.', a: 'because', why: '*because* gives the reason.' },
            { q: 'I’d love to visit, ___ I’m very busy this month.', a: 'but', why: '*but* gives a different idea.' },
            { q: 'I’m free next month, ___ I can come then.', a: 'so', why: '*so* gives the result.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'In the format of the A2 Key exam (Writing, Part 6): put the sentences of a short message in order. Write about your home: where it is, what there is near it, and one thing you like.', items: [
            { a: 'I live in a flat near the city centre.', why: 'Point one: where your home is.' },
            { a: 'There’s a big park opposite my building.', why: 'Point two: what is near it.' },
            { a: 'I like it because it’s quieter than my old street.', why: 'Point three: what you like, with a reason.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Part 6 of the A2 Key writing paper you write a short message of **25 words or more** that answers **three points**. Write one or two sentences for each point, and check you have answered all three: a missing point loses marks.' },
          { t: 'ex', kind: 'speak', h: 'Talk about your area. Say these sentences after the tutor.', tutor: 'sofia', items: [
            { a: 'There’s a market opposite my building on Saturdays.' },
            { a: 'It’s smaller than my old flat, but it’s much brighter.' },
            { a: 'It’s only fifteen minutes to work by bus.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
      { q: 'When I was a child, ___ a lot of trees in our street.', o: ['there were', 'there was', 'it were'], why: 'Plural, past: *there were*.' },
      { q: 'The pharmacy is ___ to the bakery.', o: ['next', 'near', 'opposite'], why: '*next to*' },
      { q: '___ a supermarket near here?', o: ['Is there', 'Are there', 'Has'], why: 'Singular question: *Is there*.' },
    ] },
    { t: 'ex', kind: 'wordform', h: 'Write the comparative of the word in capitals.', items: [
      { q: 'The train is ___ than the bus.', base: 'fast', a: ['faster'], why: 'Short adjective: *faster*.' },
      { q: 'This hotel is ___ than the one by the sea.', base: 'comfortable', a: ['more comfortable'], why: 'Long adjective: *more*.' },
      { q: 'My English is ___ than last year.', base: 'good', a: ['better'], why: 'Irregular: *better*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'London is [more bigger] than Bristol.', a: ['bigger'], why: 'Never *more* and *-er* together.' },
      { s: 'Cross the road [in] the traffic lights.', a: ['at'], why: 'A point on the way: *at*.' },
      { s: 'The bank is [in] your left.', a: ['on'], why: '*on your left*' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
      { q: 'How ___ is the station? – Five minutes on foot.', a: ['far'], why: 'Distance: *how far*.' },
      { q: 'My flat isn’t as big ___ yours.', a: ['as'], why: '*as … as*' },
      { q: 'The café is between the bank ___ the cinema.', a: ['and'], why: '*between* A *and* B.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
      { q: 'You want to find the museum. You ask:', o: ['Excuse me, how do I get to the museum?', 'Where is museum go?', 'How can I museum?'], why: 'Polite and natural: *how do I get to*.' },
      { q: 'Someone asks “How far is it?” You say:', o: ['About ten minutes on foot.', 'It’s on the left.', 'Yes, it is.'], why: '*How far* asks about distance or time.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the words to their meaning.', pairs: [
      ['opposite', 'on the other side of the street'],
      ['behind', 'at the back of'],
      ['go past', 'walk by something'],
      ['cross', 'go to the other side'],
    ] },
  ],
};
