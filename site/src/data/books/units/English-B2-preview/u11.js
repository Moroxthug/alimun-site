// English B2, unit 11, second edition (docs/LESSONS_PLAN.md, L6). Draft for native-teacher review.
// Each lesson: a full explanation first (the rule in plain words, why, many examples, the usual mistakes, a text that
// uses it), then fewer exercises from controlled to free, one speaking task, and one task in the format of B2 First.
export const UNIT = {
  id: 'u11',
  title: 'Travel and the planet',
  goal: 'Talk about groups and choices with both, either, neither, each, every, all and none, describe what is about to happen, build compound adjectives, and discuss how we can travel with less harm to the planet.',
  art: 'suitcase',
  tags: { skills: ['grammar', 'vocabulary', 'speaking', 'reading', 'writing'], topics: ['quantifiers', 'near-future', 'compound-adjectives', 'travel', 'environment'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'Both, either, neither',
      about: 'Talk about two or more things with both, either, neither, each, every, all and none.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'text', md: 'When we talk about a group, English has a different word depending on **how many** things there are and whether we look at them **together** or **one by one**.\n\nFor **two** things, use **both** (the two together), **either** (one or the other, it does not matter which) and **neither** (not one and not the other). *I’ve been to **both** cities. You can take **either** train. **Neither** hotel had a pool.*\n\nFor **three or more**, use **all** (the whole group), **none** (zero of them), and **each** or **every** (the members one by one). *All the flights were cancelled. None of the buses was on time.*' },
          { t: 'table', caption: 'Two things or more', explain: ['head', 'col1', 'col2'], head: ['Word', 'How many', 'Meaning'], rows: [
            ['both', 'two', 'the two together'],
            ['either', 'two', 'one or the other'],
            ['neither', 'two', 'not one and not the other'],
            ['all', 'three or more', 'the whole group'],
            ['none', 'three or more', 'zero of them'],
            ['each', 'two or more', 'every one, seen separately'],
            ['every', 'three or more', 'all of them, as a group of single members'],
          ] },
          { t: 'tip', art: 'owl', md: '**Either** and **neither** take a **singular** verb when they are used alone with a noun: *Neither hotel **was** cheap.* With **of** + plural, both singular and plural are heard, but the singular is safer in writing and in the exam: *Neither of the hotels **was** cheap.*' },
        ],
        [
          { t: 'text', md: '**Each** and **every** are close, but not the same. **Every** sees the group as a whole made of single members, so it needs three or more. **Each** looks at the members **one at a time**, so it can be used for two: *She had a bag in **each** hand* (not *every hand*).\n\nBoth words take a **singular** noun and verb: *Every passenger **has** to show a ticket.*\n\nWhen there is a pronoun or *the/my/these*, use **of**: *both **of** them, each **of** the rooms, none **of** my friends, either **of** these routes*. With **every**, say **every one of**: *every one of the seats*.' },
          { t: 'examples', items: [
            { s: '**Both** my parents love travelling by train.', n: 'The two of them together; *both* goes before *my*.' },
            { s: 'We can leave on Friday or Saturday. **Either** day is fine.', n: 'One or the other: singular noun.' },
            { s: '**Neither of** the two airports is close to the city.', n: 'Not one and not the other.' },
            { s: '**Each** room has its own balcony.', n: 'The rooms one by one.' },
            { s: '**Every** seat on the ferry was taken.', n: 'All of them, as single members.' },
            { s: '**None of** the beaches were crowded in October.', n: 'Zero out of a group of three or more.' },
          ] },
        ],
        [
          { t: 'text', md: 'These words also work **alone**, as answers or at the end of a sentence: *“Coffee or tea?” “**Either**, thanks.”* *We visited three museums and liked **all** of them.*\n\nTo add a second negative idea, use **neither** or **nor** at the start, with the auxiliary before the subject: *“I can’t swim.” “**Neither can I**.”* And **not … either** at the end: *I can’t swim **either**.*' },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['Both of hotels were full.', 'Both hotels were full. / Both of the hotels were full.', '*of* needs *the*, *my*, *these*… or a pronoun after it.'],
            ['Neither of them are coming.', 'Neither of them is coming.', 'Singular verb is safer with *neither*.'],
            ['Every rooms have Wi-Fi.', 'Every room has Wi-Fi.', '*Every* takes a singular noun and verb.'],
            ['I didn’t like neither of them.', 'I didn’t like either of them.', 'No double negative: *not … either*.'],
            ['She held a bag in every hand.', 'She held a bag in each hand.', 'For two, use *each*.'],
          ] },
          { t: 'dialogue', title: 'Choosing a route', lines: [
            { who: 'Lena', s: 'There are two ways to get to Lisbon: the night train or a short flight.' },
            { who: 'Marcus', s: 'Either is fine with me, but neither of them is cheap.' },
            { who: 'Lena', s: 'True. Both options cost about the same, but the train is much better for the planet.' },
            { who: 'Marcus', s: 'And each ticket includes a bed, doesn’t it?' },
            { who: 'Lena', s: 'Yes, every cabin has two beds. None of the other routes are as comfortable.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'There were two cafés, but ___ of them was open.', o: ['neither', 'none', 'either'], why: 'Two things, not one and not the other: *neither*.' },
            { q: '___ passenger must show a passport at the gate.', o: ['Every', 'All', 'Both'], why: 'Singular noun *passenger*: *every*.' },
            { q: 'We tried five restaurants and ___ of them had a free table.', o: ['none', 'neither', 'either'], why: 'More than two, zero of them: *none*.' },
            { q: 'You can sit on ___ side of the bus; the view is the same.', o: ['either', 'both', 'neither'], why: 'One or the other, it does not matter: *either*.' },
            { q: 'The guide gave a map to ___ of the two groups.', o: ['each', 'every', 'all'], why: 'For two, use *each*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: '[Both of hotels] were fully booked.', a: ['Both hotels', 'Both of the hotels'], why: '*Both of* needs *the* or a possessive before the noun.' },
            { s: 'Every [rooms] in the hostel has a locker.', a: ['room'], why: '*Every* takes a singular noun.' },
            { s: 'I didn’t enjoy [neither] of the tours.', a: ['either'], why: 'With *didn’t*, use *either*: no double negative.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'In the format of the B2 First exam, Reading and Use of English Part 4: complete the second sentence so that it means the same as the first. Use the word given.', items: [
            { q: 'The train wasn’t on time and the bus wasn’t on time.', cue: 'neither', a: ['Neither the train nor the bus was on time.', 'Neither the train nor the bus were on time.'], why: '*Neither … nor* joins two negative ideas.' },
            { q: 'You can pay by card or in cash; it doesn’t matter which.', cue: 'either', a: ['You can pay either by card or in cash.', 'You can pay either in cash or by card.'], why: '*Either … or*: one of two choices.' },
            { q: 'All the guests received a welcome drink.', cue: 'each', a: ['Each guest received a welcome drink.', 'Each of the guests received a welcome drink.'], why: '*All the guests* becomes *each guest* (singular).' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 4** you must use the word given **without changing it**, and write **between two and five words**. Contractions count as two words (*don’t* = 2). Check that your sentence means exactly the same as the first one.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'omar', items: [
            { a: 'Neither of the flights was cheap.' },
            { a: 'Both options take about six hours.' },
            { a: 'Every cabin has its own window.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'About to leave',
      about: 'Talk about the very near future with be about to, be due to and be on the point of.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'You already know *will*, *going to* and the present continuous for the future. B2 adds a few phrases for things that are **very close** in time or **planned by a timetable**.\n\n**Be about to + infinitive** means *very soon, in a moment*: *Hurry up, the train **is about to leave**.*\n\n**Be on the point of + -ing** means the same, but sounds a little more dramatic: *We **were on the point of giving up** when the bus finally came.*\n\n**Be due to + infinitive** means that something is **expected or scheduled**: *The flight **is due to land** at 6.40.* We also use **due** alone with a time: *The next ferry is **due at** noon.*' },
          { t: 'table', caption: 'The near future', explain: ['head', 'col1'], head: ['Form', 'Meaning'], rows: [
            ['be about to + verb', 'in a moment, very soon'],
            ['be on the point of + -ing', 'very soon, often at an important moment'],
            ['be due to + verb', 'expected or scheduled, by a plan or timetable'],
            ['be due + time', 'expected at that time'],
          ] },
        ],
        [
          { t: 'text', md: 'All three work in the **past** too, for something that was going to happen soon: *I **was about to call** you when you rang.* Very often the plan did **not** happen, or something interrupted it: *The plane **was due to take off** at nine, but it was delayed.*\n\nDo not add time expressions like *soon* or *in a minute* to **be about to**: the meaning is already there. *The film is about to start* is natural; *The film is about to start soon* is not.' },
          { t: 'examples', items: [
            { s: 'Quick, take a photo! The sun **is about to set**.', n: 'In a moment.' },
            { s: 'The conference **is due to finish** on Friday.', n: 'Scheduled.' },
            { s: 'They **were on the point of selling** the hotel when tourists came back.', n: 'Very close to doing it, at an important moment.' },
            { s: 'I **was about to book** the flight, but the price went up.', n: 'Past: it did not happen.' },
            { s: 'Our train **is due at** platform 4 at 8.15.', n: '*Due* + time or place.' },
          ] },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['The bus is about to leaving.', 'The bus is about to leave.', '*about to* + infinitive.'],
            ['We were on the point to cancel.', 'We were on the point of cancelling.', '*on the point of* + -ing.'],
            ['The train is due to arrive soon in five minutes.', 'The train is due to arrive in five minutes.', 'One time expression is enough.'],
            ['The film is about to start in a minute.', 'The film is about to start.', '*about to* already means *very soon*.'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'At the departure gate', lines: [
            { who: 'Announcer', s: 'Flight 214 to Oslo is about to board. Please have your passports ready.' },
            { who: 'Sofia', s: 'Wait, I thought we were due to leave at seven.' },
            { who: 'Kofi', s: 'We were, but they moved it. Good thing we didn’t stop for coffee.' },
            { who: 'Sofia', s: 'I was on the point of buying a sandwich when I heard the announcement.' },
            { who: 'Kofi', s: 'Well, the plane is due to land at ten, so we can eat in Oslo.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Read the dialogue. True or false?', items: [
            { q: 'The flight is boarding very soon.', a: 't', why: '*is about to board*: in a moment.' },
            { q: 'The flight was always planned for this time.', a: 'f', why: 'They were due to leave at seven, but it was moved.' },
            { q: 'Sofia bought a sandwich.', a: 'f', why: 'She was *on the point of* buying one: she did not.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with one word.', items: [
            { q: 'Turn off your phones, please. The concert is ___ to begin.', a: ['about'], why: '*be about to*: in a moment.' },
            { q: 'The new metro line is ___ to open next spring.', a: ['due'], why: 'Scheduled: *be due to*.' },
            { q: 'We were on the ___ of leaving when the storm started.', a: ['point'], why: '*on the point of* + -ing.' },
            { q: 'The coach is due ___ six o’clock.', a: ['at'], why: '*due at* + time.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the B2 First exam, Listening Part 1: read what a speaker says and choose the best answer.', items: [
            { q: '“We were due to fly home on Sunday, but the airline cancelled every flight that weekend, so we ended up taking the train.” How did the speaker get home?', o: ['by train', 'by plane on Sunday', 'by plane after the weekend'], why: 'The flight was only *due*; they *ended up taking the train*.' },
            { q: '“I was about to buy the tickets online when my sister said she could drive us.” What happened?', o: ['The speaker didn’t buy the tickets.', 'The speaker bought the tickets.', 'The sister bought the tickets.'], why: '*was about to* + something interrupted: it did not happen.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Listening Part 1** the speakers often mention **all three options**. Listen for words like *was due to*, *was about to* or *ended up*: they tell you which plan really happened.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'sofia', items: [
            { a: 'The train is about to leave.' },
            { a: 'Our flight is due to land at ten.' },
            { a: 'I was on the point of giving up.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'A two-hour flight',
      about: 'Build compound adjectives like two-hour, well-known and eco-friendly.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'A **compound adjective** is two or more words joined, usually with a **hyphen**, that work together as one adjective before a noun. They let you say a lot in few words, which is useful in writing and in the exam.\n\nThe most common patterns are:\n\n**Number + noun**: *a **two-hour** flight, a **five-star** hotel, a **ten-minute** walk*. The noun stays **singular**: *a two-hour flight*, never *a two-hours flight*.\n\n**Adverb + past participle**: *a **well-known** writer, a **badly-paid** job, a **well-organised** trip*.\n\n**Adjective / noun + -ing**: *a **good-looking** guide, a **record-breaking** journey, a **time-consuming** task*.\n\n**Noun + adjective**: *an **eco-friendly** hotel, a **tax-free** shop, **sugar-free** drinks*.' },
          { t: 'table', caption: 'Patterns', explain: ['head', 'col0'], head: ['Pattern', 'Examples'], rows: [
            ['number + noun', 'a two-week holiday, a three-day pass'],
            ['adverb + past participle', 'well-known, well-paid, badly-designed'],
            ['adjective or noun + -ing', 'good-looking, mouth-watering, time-consuming'],
            ['noun + adjective', 'eco-friendly, duty-free, world-famous'],
            ['adjective + noun + -ed', 'blue-eyed, open-minded, short-sleeved'],
          ] },
        ],
        [
          { t: 'text', md: 'Use the hyphen when the compound comes **before** the noun. After the verb *be*, many writers drop it: *a **well-known** actor*, but *The actor is **well known**.*\n\nWith numbers, compare: *The flight lasts **two hours**.* (noun, plural) and *It’s a **two-hour** flight.* (adjective, singular, hyphen).' },
          { t: 'examples', items: [
            { s: 'We stayed in a **family-run** guesthouse by the lake.', n: 'Noun + past participle.' },
            { s: 'It’s a **twenty-minute** walk from the station.', n: 'Number + singular noun.' },
            { s: 'The island is **world-famous** for its beaches.', n: 'Noun + adjective.' },
            { s: 'Planning a trip with kids is **time-consuming**.', n: 'Noun + -ing.' },
            { s: 'Our guide was friendly and very **open-minded**.', n: 'Adjective + noun + -ed.' },
          ] },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['a three-hours journey', 'a three-hour journey', 'The noun in the compound stays singular.'],
            ['a five stars hotel', 'a five-star hotel', 'Singular and with a hyphen.'],
            ['a well know writer', 'a well-known writer', 'Past participle: *known*.'],
            ['an eco friendly bag', 'an eco-friendly bag', 'Hyphen before the noun.'],
          ] },
        ],
        [
          { t: 'reading', title: 'A slower way to see the coast', md: 'Last summer I swapped a two-hour flight for a four-day journey along the coast. I used a forty-euro rail pass, stayed in family-run guesthouses and ate mouth-watering fish in places that no guidebook mentions.\n\nIt was more time-consuming, of course, and some of the trains were badly-timed. But the walks between villages were the best part: a twenty-minute path through the pines, then a world-famous view over the cliffs.\n\nI came home relaxed, with a smaller carbon footprint and a list of open-minded people I met on the way.' },
          { t: 'ex', kind: 'tf', h: 'Read the text. True, false or not given?', ng: true, items: [
            { q: 'The writer flew to the coast.', a: 'f', why: 'They *swapped a two-hour flight* for a journey by train.' },
            { q: 'The rail pass cost forty euros.', a: 't', why: '*a forty-euro rail pass*.' },
            { q: 'All the trains were on time.', a: 'f', why: '*some of the trains were badly-timed*.' },
            { q: 'The writer travelled with friends.', a: 'ng', why: 'The text does not say who they travelled with.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Write one compound adjective. Use the word given.', items: [
            { q: 'The walk takes ten minutes.', cue: 'It’s a', a: ['It’s a ten-minute walk.', 'It is a ten-minute walk.'], why: 'Number + singular noun, with a hyphen.' },
            { q: 'Everybody knows this restaurant.', cue: 'It’s a', a: ['It’s a well-known restaurant.', 'It is a well-known restaurant.'], why: '*well* + past participle *known*.' },
            { q: 'This hotel doesn’t harm the environment.', cue: 'It’s an', a: ['It’s an eco-friendly hotel.', 'It is an eco-friendly hotel.'], why: 'Noun + adjective: *eco-friendly*.' },
          ] },
          { t: 'ex', kind: 'wordform', h: 'In the format of the B2 First exam, Reading and Use of English Part 3: use the word in capitals to form a word that fits the gap.', items: [
            { q: 'Taking the train is much more ___ than flying for short trips.', base: 'environment', a: ['environmentally friendly'], why: 'Adverb + adjective: *environmentally friendly*.' },
            { q: 'The guesthouse was run by a very ___ family.', base: 'welcome', a: ['welcoming'], why: 'An adjective from *welcome*: *welcoming*.' },
            { q: 'Tourism has caused a huge ___ in plastic waste on the islands.', base: 'grow', a: ['growth'], why: 'A noun after *a huge*: *growth*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 3**, first decide what **kind of word** the gap needs (noun, adjective, adverb) by looking at the words around it. Then think about **prefixes** for negative meanings and check your **spelling**: one wrong letter loses the mark.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'It was a two-hour flight.' },
            { a: 'We stayed in a family-run hotel.' },
            { a: 'The view is world-famous.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'Is slow travel the future?',
      about: 'Read and discuss an article about slow travel, and give your opinion on travel and the environment.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Travel is one of the biggest topics in the B2 First exam, and environmental questions come up often in Speaking Part 4. To discuss them well you need a few **collocations**: *reduce your carbon footprint, offset emissions, a long-haul flight, mass tourism, local communities, off the beaten track, peak season*.\n\nIn a discussion, show you can **balance** two sides: *On the one hand…, on the other hand…*, *While it’s true that…, it’s also important to…*.' },
          { t: 'table', caption: 'Travel and the planet', explain: ['head', 'col1'], head: ['Expression', 'Meaning'], rows: [
            ['carbon footprint', 'the amount of CO2 your actions produce'],
            ['long-haul flight', 'a flight of many hours, to another continent'],
            ['mass tourism', 'very large numbers of tourists in one place'],
            ['off the beaten track', 'away from places most tourists visit'],
            ['peak season', 'the busiest time of the year'],
            ['local communities', 'the people who live in a place'],
          ] },
        ],
        [
          { t: 'reading', title: 'Is slow travel the future?', md: 'For decades, holidays were about getting as far as possible in as little time as possible. Cheap long-haul flights meant that both city breaks and beach holidays were within everyone’s reach. Now a growing number of travellers are choosing the opposite: slow travel.\n\nThe idea is simple. Instead of visiting five cities in a week, you stay longer in one place, travel by train, bus or bike, and spend your money in local communities. Each journey becomes part of the holiday rather than a waste of time.\n\nSupporters say the benefits are clear. Neither trains nor bikes produce as much CO2 as planes, and visitors who stay longer tend to avoid the crowds of peak season. Critics reply that slow travel is a luxury: not everyone has the time or money for a three-week trip, and in many regions there is no fast rail network at all.\n\nThe truth may lie somewhere in between. Airlines are due to introduce cleaner fuels over the next ten years, but until then, every traveller who swaps one flight for a train makes a small difference.' },
          { t: 'ex', kind: 'choice', h: 'In the format of the B2 First exam, Reading and Use of English Part 5: choose the best answer.', items: [
            { q: 'According to the article, in the past holidays were mainly about…', o: ['travelling far in a short time', 'staying a long time in one place', 'spending money locally'], why: '*getting as far as possible in as little time as possible*.' },
            { q: 'What do critics say about slow travel?', o: ['Not everybody can afford the time it needs.', 'It produces more CO2 than flying.', 'It is only popular in peak season.'], why: '*not everyone has the time or money for a three-week trip*.' },
            { q: 'What is the writer’s conclusion?', o: ['Small changes by travellers help until cleaner fuels arrive.', 'Planes will soon be as clean as trains.', 'Slow travel is only for rich people.'], why: '*until then, every traveller who swaps one flight… makes a small difference*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 5** the questions follow the order of the text. Find the part that answers each question, then check that **every word** in your answer is supported: wrong options often use words from the text but change the meaning.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the expressions with their meanings.', pairs: [
            ['carbon footprint', 'the CO2 your actions produce'],
            ['off the beaten track', 'away from the usual tourist places'],
            ['peak season', 'the busiest time of the year'],
            ['long-haul flight', 'a very long flight to another continent'],
            ['mass tourism', 'huge numbers of visitors in one place'],
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order to make sentences for a discussion.', items: [
            { a: 'On the one hand, trains are slower than planes.', why: 'Starts the first side of the argument.' },
            { a: 'While it’s true that flying is quick, it harms the planet.', why: '*While it’s true that…* introduces a point you then balance.' },
          ] },
        ],
        [
          { t: 'text', md: 'Now give your own opinion, as in **Speaking Part 4**. Use the words from this unit: *both… and*, *neither… nor*, *be due to*, a compound adjective, and a phrase to balance your view.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'mei', items: [
            { a: 'On the one hand, flying is quick and cheap.' },
            { a: 'Neither trains nor bikes produce as much CO2.' },
            { a: 'Every traveller can make a small difference.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
      { q: 'I asked two guides, but ___ of them knew the way.', o: ['neither', 'none', 'either'], why: 'Two people, not one and not the other.' },
      { q: '___ room in the hotel has a sea view.', o: ['Every', 'All', 'Both'], why: 'Singular noun: *every*.' },
      { q: 'You can come on Monday or Tuesday. ___ day suits me.', o: ['Either', 'Both', 'Neither'], why: 'One or the other: *either*.' },
      { q: 'We visited six islands and ___ of them was crowded.', o: ['none', 'neither', 'either'], why: 'More than two, zero: *none*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete with one word.', items: [
      { q: 'Hurry! The ferry is about ___ leave.', a: ['to'], why: '*be about to* + infinitive.' },
      { q: 'The plane is ___ to land at 6.30.', a: ['due'], why: 'Scheduled: *due to*.' },
      { q: 'I was on the point ___ booking when the price went up.', a: ['of'], why: '*on the point of* + -ing.' },
      { q: 'Both ___ my sisters live abroad.', a: ['of'], why: '*both of* + *my*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'It was a [three-hours] journey.', a: ['three-hour'], why: 'The noun in a compound adjective stays singular.' },
      { s: 'We stayed in a [five stars] hotel.', a: ['five-star'], why: 'Singular, with a hyphen.' },
      { s: 'The bus is about to [leaving].', a: ['leave'], why: '*about to* + infinitive.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with the word given.', items: [
      { q: 'The museum wasn’t open and the castle wasn’t open.', cue: 'neither', a: ['Neither the museum nor the castle was open.', 'Neither the museum nor the castle were open.'], why: '*Neither … nor*.' },
      { q: 'The train will arrive at noon, according to the timetable.', cue: 'due', a: ['The train is due to arrive at noon.', 'The train is due at noon.'], why: 'Scheduled: *be due to* or *due at*.' },
    ] },
    { t: 'ex', kind: 'wordform', h: 'Use the word in capitals to form a word that fits the gap.', items: [
      { q: 'The trip was long but very ___.', base: 'enjoy', a: ['enjoyable'], why: 'An adjective: *enjoyable*.' },
      { q: 'The ___ of slow travel is growing every year.', base: 'popular', a: ['popularity'], why: 'A noun after *The*: *popularity*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the expressions with their meanings.', pairs: [
      ['mass tourism', 'huge numbers of visitors'],
      ['peak season', 'the busiest time'],
      ['carbon footprint', 'the CO2 you produce'],
      ['local communities', 'the people who live there'],
    ] },
  ],
};
