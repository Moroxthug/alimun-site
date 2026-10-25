// English B1 for travel, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Travel stories',
  goal: 'Tell stories about your travels.',
  art: 'alien',
  tags: { skills: ['grammar', 'vocabulary', 'speaking', 'reading'], topics: ['narrative-tenses', 'past-perfect', 'time-linkers', 'so-such', 'extreme-adjectives', 'feelings'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'What happened next?',
      about: 'Use past tenses and time linkers to tell a story.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'A good story uses three past tenses. The **past simple** tells the main events, one after another. The **past continuous** (*was* / *were* + *-ing*) describes the background: what was happening at that moment. The **past perfect** (*had* + past participle) goes back to something that happened **earlier** than the main events.' },
          { t: 'examples', items: [
            { s: 'We **were waiting** for the bus when it **started** to snow.', n: 'Past continuous for the background; past simple for the event in the middle of it.' },
            { s: 'When we **got** to the station, the last train **had left**.', n: 'The train left first, so it is in the past perfect.' },
            { s: 'I **opened** my bag, **took** out my passport and **gave** it to the officer.', n: 'Past simple: the main events, one after another.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Compare: *When we arrived, the train left.* (we arrived, then it left) and *When we arrived, the train had left.* (it left before we arrived).' },
        ],
        [
          { t: 'table', caption: 'Time linkers for stories', explain: ['head', 'col1'], quiz: true, head: ['Linker', 'Use'], rows: [
            ['while', 'two things happen at the same time'],
            ['as soon as', 'immediately after something'],
            ['by the time', 'when the second thing happened, the first was already finished'],
            ['suddenly', 'something happens quickly, and you do not expect it'],
            ['eventually', 'after a long time or after a lot of problems'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the correct form.', items: [
            { q: 'I ___ along the beach when I found an old bottle.', o: ['was walking', 'am walking', 'walk'], why: 'The background action in the past: past continuous.' },
            { q: 'When I got to the airport, I realised I ___ my passport at home.', o: ['had left', 'was leaving', 'have left'], why: 'I left it before I got to the airport: past perfect.' },
            { q: 'By the time we reached the top, the fog ___.', o: ['had come down', 'comes down', 'was come down'], why: '*By the time…*: the first action was already finished, so past perfect.' },
            { q: 'My phone rang ___ I was having a shower.', o: ['while', 'during', 'by the time'], why: '*while* + subject + verb. *during* goes before a noun: *during my shower*.' },
            { q: 'We waited for three hours. ___, at midnight, the bus arrived.', o: ['Eventually', 'While', 'As soon as'], why: '*Eventually*: after a long time.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the story sentences. Use the words in brackets.', items: [
            { q: 'While we ___ (drive) through the mountains, a deer ran across the road.', a: ['were driving'], why: 'The background action: past continuous.' },
            { q: 'The museum ___ (close) by the time we found it.', a: ['had closed', '’d closed'], why: 'It closed before we found it: past perfect.' },
            { q: 'As soon as I ___ (see) the view, I forgot how tired I was.', a: ['saw'], why: 'A main event: past simple.' },
            { q: 'She ___ (never / be) on a plane before that trip.', a: ['had never been', '’d never been'], why: 'Her experience before that time: past perfect, *had never been*.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs in the past perfect.', items: [
            { s: 'When I [had paid] for my ticket, I went to the platform.', why: '*had paid*: it happened before *went*.' },
            { s: 'The guide told us that the castle [had burned] down two hundred years before.', why: '*had burned*: it happened long before the guide told them.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'By the time we arrived, the party had finished.', why: '*By the time* + past simple, then the past perfect.' },
            { a: 'I had never seen such a beautiful lake.', why: '*had never seen*: past perfect for experience before a moment in the past.' },
            { a: 'We were sitting in a café when the storm started.', why: 'Past continuous for the background, *when* + past simple for the event.' },
          ] },
          { t: 'tip', art: 'owl', md: 'When you tell a story aloud, linkers like *Then*, *After that* and *In the end* help people follow you. Do not use the past perfect for every sentence: use it only to go back in time.' },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Places, people and feelings',
      about: 'Describe what you saw and how you felt.',
      art: 'nata',
      spreads: [
        [
          { t: 'text', md: 'A story comes alive when you describe what you saw and how you felt. These adjectives are useful for places, people and feelings.\n\nTo make an adjective stronger, use **so** + adjective (*so crowded*) or **such** + *a* + adjective + noun (*such a crowded street*). Without a singular noun, leave out *a*: *such friendly people*.' },
          { t: 'table', caption: 'Useful adjectives', explain: ['head'], head: ['Places', 'People', 'Feelings'], rows: [
            ['breathtaking', 'friendly', 'relieved'],
            ['crowded', 'helpful', 'nervous'],
            ['peaceful', 'rude', 'embarrassed'],
            ['lively', 'generous', 'disappointed'],
            ['run-down', 'chatty', 'grateful'],
          ] },
        ],
        [
          { t: 'text', md: '**Extreme adjectives** already mean *very*: *exhausted* is very tired, *freezing* is very cold, *starving* is very hungry, *terrified* is very frightened. Use *absolutely* or *really* with them, not *very*.' },
          { t: 'examples', items: [
            { s: 'After the night bus, I was **absolutely exhausted**.', n: 'Not *very exhausted*.' },
            { s: 'The square was **so crowded that** we couldn’t move.', n: '*so* + adjective + *that*: the result.' },
            { s: 'It was **such a peaceful** place **that** we stayed an extra night.', n: '*such a* + adjective + noun + *that*.' },
            { s: 'I felt so **relieved** when my bag finally appeared.', n: '*relieved*: happy because a worry has gone.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct word.', items: [
            { q: 'The town was ___ crowded that we couldn’t find a table anywhere.', o: ['so', 'such', 'very'], why: '*so* + adjective + *that*.' },
            { q: 'It was ___ a beautiful evening that we walked home.', o: ['such', 'so', 'too'], why: '*such a* + adjective + noun.' },
            { q: 'After walking for ten hours, we were absolutely ___.', o: ['exhausted', 'tired', 'sleepy'], why: '*absolutely* goes with extreme adjectives like *exhausted*, not with *tired*.' },
            { q: 'I felt really ___ when I couldn’t remember the guide’s name.', o: ['embarrassed', 'relieved', 'peaceful'], why: '*embarrassed*: uncomfortable because you did something silly.' },
            { q: 'The hotel was old and ___. The paint was coming off the walls.', o: ['run-down', 'breathtaking', 'lively'], why: '*run-down*: old and in bad condition.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each feeling with its meaning.', pairs: [
            ['relieved', 'happy because a worry has gone'],
            ['nervous', 'worried about something that will happen'],
            ['embarrassed', 'uncomfortable because you did something silly'],
            ['disappointed', 'sad because something was not as good as you hoped'],
            ['grateful', 'thankful for someone’s help'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the sentences with one word.', items: [
            { q: 'They were ___ friendly people that we are still in touch.', a: ['such'], why: '*such* + adjective + plural noun, with no *a*.' },
            { q: 'The water was ___ (very cold), so nobody swam.', a: ['freezing', 'ice-cold', 'icy'], why: '*freezing*: very, very cold.' },
            { q: 'I was ___ (very hungry), so I ate two dinners.', a: ['starving', 'famished'], why: '*starving*: very, very hungry.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A story with a surprise',
      about: 'Read a travel story and follow the events.',
      art: 'ghost',
      spreads: [
        [
          { t: 'reading', title: 'The wrong train', md: 'Last October, I was travelling around Scotland on my own. One evening, I was reading a book on a train to Inverness when I noticed something strange. The stations outside the window had names that I didn’t recognise. I checked my ticket and my heart sank. I had got on the wrong train, and it was the last one of the day.\n\nBy the time I got off, it was dark and raining heavily. The station was tiny, and there was nobody there except an old man with a dog. He saw how worried I looked and asked if I was all right. I explained everything, feeling very embarrassed.\n\n“You’d better come with me,” he said. His name was Alasdair, and he and his wife ran a small guesthouse in the village. That night they gave me soup, a warm bed and some very bad jokes.\n\nThe surprise came the next morning. On the wall of the dining room, I saw an old photo of a young woman in front of my grandmother’s house in Poland. It was Alasdair’s mother. Seventy years earlier, she had lived in the same street as my grandmother, and they had been best friends at school.\n\nI never got to Inverness on that trip. I stayed three more days, and we are still in touch.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the story again. True, false or not given?', items: [
            { q: 'The writer was travelling with a friend.', a: 'f', why: 'The writer was travelling *on my own*.' },
            { q: 'The writer saw the mistake after checking the ticket.', a: 't', why: '*I checked my ticket and my heart sank. I had got on the wrong train.*' },
            { q: 'Alasdair and his wife ran a guesthouse.', a: 't', why: '*he and his wife ran a small guesthouse in the village*' },
            { q: 'Alasdair’s wife was an excellent cook.', a: 'ng', why: 'They gave the writer soup, but the story does not say if she cooked well.' },
            { q: 'Alasdair’s mother and the writer’s grandmother went to school together.', a: 't', why: '*they had been best friends at school*' },
            { q: 'The writer went on to Inverness the next day.', a: 'f', why: '*I never got to Inverness on that trip.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the sentences about the story. Use the verbs in brackets.', items: [
            { q: 'The writer ___ (read) a book when something strange happened.', a: ['was reading'], why: 'The background action: past continuous.' },
            { q: 'The writer realised that they ___ (get) on the wrong train.', a: ['had got', '’d got', 'had gotten'], why: 'Getting on the train happened earlier: past perfect.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Why did the writer feel embarrassed at the station?', o: ['Because of the mistake with the train.', 'Because of Alasdair’s jokes.', 'Because the dog was wet.'], why: 'The writer felt embarrassed while explaining the mistake.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'I ___ when I heard a strange noise outside the tent.', o: ['was sleeping', 'am sleeping', 'sleep'], why: 'The background action: past continuous.' },
      { q: 'When we got to the cinema, the film ___.', o: ['had already started', 'already starts', 'has already started'], why: 'It started before we got there: past perfect.' },
      { q: 'It was ___ a hot day that we stayed in the shade.', o: ['such', 'so', 'very'], why: '*such a* + adjective + noun.' },
      { q: 'By the end of the hike, I was absolutely ___.', o: ['exhausted', 'tired', 'hungry'], why: '*absolutely* + an extreme adjective.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'While I ___ (wait) for the ferry, I met an old friend.', a: ['was waiting'], why: 'Background action after *while*: past continuous.' },
      { q: 'We waited for hours. ___, the plane took off at midnight.', a: ['Eventually', 'In the end', 'Finally'], why: '*Eventually*: after a long time.' },
      { q: 'I felt so ___ (happy that a worry had gone) when I found my wallet.', a: ['relieved'], why: '*relieved*: happy because a worry has gone.' },
      { q: 'The sea was ___ (very cold).', a: ['freezing', 'ice-cold', 'icy'], why: '*freezing*: very cold.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'I had never eaten such delicious food.', why: '*such* + adjective + noun.' },
      { a: 'The square was so crowded that we left.', why: '*so* + adjective + *that*.' },
    ] },
    { t: 'ex', kind: 'spot', h: 'Tap the verb in the past perfect.', items: [
      { s: 'When we got to the beach, the rain [had stopped].', why: '*had stopped*: it stopped before we got there.' },
      { s: 'I [had lost] my map, so I asked a farmer for directions.', why: '*had lost*: it happened before I asked.' },
    ] },
  ],
};
