// English B2 for travel, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Writing about travel',
  goal: 'Write vivid reviews and travel pieces.',
  art: 'parrot',
  tags: { skills: ['writing', 'vocabulary', 'reading'], topics: ['descriptive-adjectives', 'adjective-order', 'senses', 'similes', 'review-structure', 'travel-writing'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Bustling, crumbling, breathtaking',
      about: 'Describe places vividly with precise adjectives, the senses and images.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Words like *nice*, *good* and *beautiful* tell the reader very little. Good travel writers choose **precise adjectives** that help the reader see the place: not *a nice street* but *a narrow, winding street*; not *a busy market* but *a bustling market*.' },
          { t: 'table', caption: 'Precise adjectives for places', explain: ['head', 'col1'], quiz: true, head: ['Adjective', 'Meaning'], rows: [
            ['bustling', 'full of people who are busy and active'],
            ['sleepy', 'very quiet, where little happens'],
            ['crumbling', 'old and slowly falling to pieces'],
            ['winding', 'with a lot of bends'],
            ['deserted', 'with no people in it at all'],
            ['breathtaking', 'so beautiful that it surprises you'],
            ['run-down', 'in bad condition because nobody looks after it'],
          ] },
        ],
        [
          { t: 'text', md: 'Vivid writing uses **all the senses**, not just sight. After the verbs *look*, *sound*, *smell*, *taste* and *feel*, use an adjective, or *like* + noun. Writers also use **similes**, which compare two things with *like* or *as … as*.' },
          { t: 'examples', items: [
            { s: 'The whole street **smelled of** fresh bread.', n: '*Smell of* + noun.' },
            { s: 'The sand **felt** as soft **as** flour.', n: 'A simile with *as … as*.' },
            { s: 'From the hill, the town **looked like** a pile of white boxes.', n: '*Look like* + noun.' },
            { s: 'The traffic **sounded like** a distant sea.', n: '*Sound like* + noun: a simile for a noise.' },
            { s: 'The square was **deserted**: not a single person, not a single car.', n: 'The second part shows what *deserted* means.' },
          ] },
          { t: 'tip', art: 'owl', md: 'When you use several adjectives before a noun, the usual order is opinion, size, age, shape, colour, origin, material: *a charming little old stone house*, *a lovely big blue Greek boat*. In practice, two or three adjectives are usually enough.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best word.', items: [
            { q: 'At midnight the beach was completely ___: there was nobody there.', o: ['deserted', 'bustling', 'winding'], why: '*Deserted*: with no people at all.' },
            { q: 'A ___ road climbs up the mountain, with a sharp bend every few metres.', o: ['winding', 'crumbling', 'sleepy'], why: '*Winding*: with a lot of bends.' },
            { q: 'The kitchen smelled ___ garlic and lemons.', o: ['of', 'at', 'from'], why: '*Smell of* + noun. (*Smell like* + noun is also possible.)' },
            { q: 'The water was as clear ___ glass.', o: ['as', 'like', 'than'], why: 'A simile: *as* + adjective + *as*.' },
            { q: 'We stayed in a ___ cottage by the sea.', o: ['lovely little white', 'white little lovely', 'little white lovely'], why: 'Opinion (*lovely*), then size (*little*), then colour (*white*).' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the beginnings and the endings of the similes.', pairs: [
            ['The sand was as soft', 'as flour.'],
            ['The sea was as flat', 'as a mirror.'],
            ['The old town is like', 'a maze of tiny streets.'],
            ['The wind sounded like', 'someone crying.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete each sentence with one word.', items: [
            { q: 'The streets were full of busy people: the market was ___.', a: ['bustling', 'busy', 'crowded', 'packed', 'lively'], why: '*Bustling*: full of active, busy people.' },
            { q: 'The castle walls are old and ___: pieces fall off every winter.', a: ['crumbling'], why: '*Crumbling*: slowly falling to pieces.' },
            { q: 'From the plane, the fields looked ___ a green and yellow blanket.', a: ['like'], why: '*Look like* + noun.' },
            { q: 'The view from the top was absolutely ___: I just stood and stared.', a: ['breathtaking', 'stunning', 'amazing', 'incredible', 'spectacular', 'magnificent'], why: '*Breathtaking*: so beautiful that it surprises you.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the word that tells you which sense the writer uses.', items: [
            { s: 'The soup [tasted] of smoke and fresh herbs.', why: '*Taste*: the sense of taste.' },
            { s: 'The stones [felt] warm under our bare feet.', why: '*Feel*: the sense of touch.' },
            { s: 'The church bells [sounded] very far away.', why: '*Sound*: the sense of hearing.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Hook, body, verdict',
      about: 'Plan a review or a travel article so that readers keep reading.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'A travel article or a review needs a clear structure. Most begin with a **hook**: an opening that makes the reader want to continue. Then each paragraph has **one main idea**. A review usually ends with a **verdict**: a short final judgement and a recommendation.' },
          { t: 'table', caption: 'A common structure', explain: ['head', 'col0', 'col1'], head: ['Part', 'What it does'], rows: [
            ['Title', 'is short and makes the reader curious'],
            ['Hook', 'starts with a scene, a question or a surprising detail'],
            ['Background', 'says where the place is and why the writer went'],
            ['Highlights', 'describe the best parts, with details and the senses'],
            ['Downsides and tips', 'are honest about problems and give practical advice'],
            ['Verdict', 'sums up and says who would enjoy it'],
          ] },
        ],
        [
          { t: 'text', md: 'Compare two ways to start the same article. The first is a summary. The second puts the reader inside a scene, often in the **present tense**, which makes it feel immediate.' },
          { t: 'examples', items: [
            { s: 'Last summer I went to a small island. It was very nice.', n: 'Weak: no detail, and *very nice* tells us nothing.' },
            { s: 'The ferry arrives just after six, when the harbour is still asleep.', n: 'Strong: a scene in the present tense, with a precise time and an image.' },
            { s: 'Is there anywhere left in Europe without a souvenir shop?', n: 'A question can also be a good hook.' },
          ] },
          { t: 'tip', art: 'owl', md: 'For a verdict, these phrases are common: *All in all, …*, *If you’re looking for…, this is the place.*, *It’s not for everyone, but…*, *I’d go back in a heartbeat.*' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each sentence with the part of a review where it belongs.', pairs: [
            ['The smell of coffee drifts across the empty square.', 'hook'],
            ['I spent four nights there in early April.', 'background'],
            ['The rooftop terrace is the real star of the hotel.', 'highlights'],
            ['Book early: there are only six rooms.', 'tips'],
            ['All in all, it’s the perfect place for a quiet break.', 'verdict'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best option for a lively travel article.', items: [
            { q: 'Which is the strongest opening line?', o: ['Rain drums on the tin roof as the bus finally stops.', 'I went on holiday to the mountains in May.', 'This article is about my trip.'], why: 'It starts with a scene, sound and movement.' },
            { q: 'Which is the best title?', o: ['Where the ferry stops', 'My holiday', 'A report about a trip I took'], why: 'It is short and makes the reader curious.' },
            { q: 'Which sentence is a verdict?', o: ['If you’re looking for peace and quiet, this is the place.', 'We took a taxi from the airport.', 'The hotel has forty rooms.'], why: 'It sums up and says who would enjoy the place.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'True or false?', items: [
            { q: 'Each paragraph of an article should have one main idea.', a: 't', why: 'One idea per paragraph makes the text easy to follow.' },
            { q: 'A good hook always starts with the date of the trip.', a: 'f', why: 'A hook can be a scene, a question or a surprising detail; a date is usually not exciting.' },
            { q: 'An honest review can mention problems.', a: 't', why: 'Readers trust a review more when it mentions downsides.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order to make verdict sentences.', items: [
            { a: 'It’s not for everyone, but I loved it.', why: '*It’s not for everyone, but…* is an honest verdict.' },
            { a: 'I can’t wait to go back.', why: '*I can’t wait to* + base form: a warm, personal verdict.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Where the ferry stops',
      about: 'Read a travel article and notice the choices the writer makes.',
      art: 'nata',
      spreads: [
        [
          { t: 'reading', title: 'Where the ferry stops', md: 'The ferry arrives just after six, when the sky above the harbour is still the colour of weak tea. A handful of passengers step off with their bags, and within a few minutes the quay is silent again, apart from the slap of water against the boats.\n\nI had come to the island for three days. I stayed for ten.\n\nIt is not the kind of place that appears in glossy brochures. There are no grand hotels, no famous monuments and only one road, which winds lazily from the harbour up to the village on the hill. But what the island lacks in sights, it makes up for in atmosphere. By eight, the bakery on the square is filling the narrow streets with the smell of warm bread. Old men sit outside the café, arguing about football over tiny cups of coffee as thick as mud. Somewhere a radio is playing, and a dog is asleep in the only patch of shade.\n\nThe afternoons are hot and slow. Most people disappear indoors, and the whole village seems to hold its breath until the heat breaks. Then, as the sun sinks behind the hills, everything comes back to life: children race their bikes along the seafront, and the fish restaurants put out their tables, each one lit by a string of crooked lights.\n\nIf you go, take cash, because the island’s only cash machine is as unreliable as the weather forecast. Bring a good book, too. There is not much to do here, and that is exactly the point.' },
        ],
        [
          { t: 'text', md: 'Notes on the style. The article opens with a **scene** in the present tense, not a summary. The second paragraph has only two short sentences, so it stands out. Images come from **all the senses**: the *slap of water* (hearing), the *smell of warm bread* (smell), the heat of the afternoon (touch). **Similes** such as *as thick as mud* make details memorable. The village *seems to hold its breath*: the writer describes a place as if it were a person. The last paragraph gives **practical tips** and ends with a short, strong line.' },
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'The writer planned to stay on the island for ten days.', a: 'f', why: 'The plan was three days; the writer stayed for ten.' },
            { q: 'The island has several large hotels.', a: 'f', why: '“There are no grand hotels.”' },
            { q: 'The village is quiet in the afternoon.', a: 't', why: '“Most people disappear indoors.”' },
            { q: 'The writer went to the island with a friend.', a: 'ng', why: 'The article does not say whether the writer travelled alone.' },
            { q: 'The writer suggests bringing cash.', a: 't', why: '“If you go, take cash.”' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the writer’s choices.', items: [
            { q: 'Why is “I had come to the island for three days. I stayed for ten.” a paragraph on its own?', o: ['To make a surprising point stand out.', 'Because the writer forgot to finish the paragraph.', 'To introduce the practical tips.'], why: 'A very short paragraph draws the reader’s attention.' },
            { q: '“What the island lacks in sights, it makes up for in atmosphere” means:', o: ['it has few sights, but its atmosphere is excellent', 'it has many sights and a good atmosphere', 'the atmosphere is worse than the sights'], why: '*Make up for* something: balance a weakness with a strength.' },
            { q: 'Which phrase describes the village as if it were a person?', o: ['seems to hold its breath', 'a string of crooked lights', 'the only patch of shade'], why: 'Only people and animals hold their breath, so this gives the village human qualities.' },
            { q: 'Why does the article end with “that is exactly the point”?', o: ['To show that having little to do is what makes the island special.', 'To complain that the island is boring.', 'To tell readers not to go.'], why: 'The writer presents the quiet as the main attraction.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the simile.', items: [
            { s: 'Old men sit outside the café, arguing about football over tiny cups of coffee [as thick as mud].', why: 'A simile compares two things with *as … as*.' },
            { s: 'The island’s only cash machine is [as unreliable as the weather forecast].', why: 'The cash machine is compared with the weather forecast, using *as … as*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'The old town was full of busy shoppers and street sellers: it was ___.', o: ['bustling', 'deserted', 'sleepy'], why: '*Bustling*: full of busy, active people.' },
      { q: 'The garden smelled ___ roses.', o: ['of', 'as', 'from'], why: '*Smell of* + noun.' },
      { q: 'The lake was as still ___ a mirror.', o: ['as', 'like', 'than'], why: 'Simile: *as* + adjective + *as*.' },
      { q: 'They live in a ___ house.', o: ['beautiful old stone', 'stone old beautiful', 'old stone beautiful'], why: 'Opinion, age, material.' },
      { q: 'The final part of a review, with a judgement, is the ___.', o: ['verdict', 'hook', 'background'], why: 'The *verdict* sums up and recommends.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete each sentence with one word.', items: [
      { q: 'The old houses are ___: the walls are falling to pieces.', a: ['crumbling'], why: '*Crumbling*: slowly falling to pieces.' },
      { q: 'From the top, the cars looked ___ toys.', a: ['like'], why: '*Look like* + noun.' },
      { q: 'A good opening that makes people keep reading is called a ___.', a: ['hook'], why: 'A *hook* catches the reader’s attention.' },
      { q: 'All in ___, it’s a wonderful place for a weekend.', a: ['all'], why: '*All in all* introduces a verdict.' },
    ] },
    { t: 'ex', kind: 'spot', h: 'Tap the word for a sense.', items: [
      { s: 'The fresh bread [smelled] wonderful.', why: '*Smell*: the sense of smell.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'The square was completely deserted.', why: '*Completely deserted*: there was nobody at all.' },
    ] },
  ],
};
