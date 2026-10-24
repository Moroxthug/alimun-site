// English A2, unit 7 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u7',
  title: 'Travel and holidays',
  goal: 'Travel, book a room and talk about past trips.',
  art: 'suitcase',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['transport', 'airport', 'past-continuous', 'hotel'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Getting there',
      about: 'Talk about transport, and find your way at the station and the airport.',
      art: 'pretzel',
      spreads: [
        [
          { t: 'text', md: 'To say how you travel, use **by** + the transport, with no *the*: *by bus, by train, by car, by plane, by bike*. When you walk, say **on foot**.\n\nWe **get on** and **get off** a bus, a train or a plane. We **get in** and **get out of** a car or a taxi.' },
          { t: 'examples', items: [
            { s: 'I go to work **by** train.', n: 'Not *by the train*.' },
            { s: 'The school is near, so the children go **on foot**.', n: 'They walk.' },
            { s: 'We **got off** the bus at the museum.', n: 'Bus, train, plane: *get on* and *get off*.' },
            { s: 'She **got out of** the taxi and paid the driver.', n: 'Car, taxi: *get in* and *get out of*.' },
          ] },
        ],
        [
          { t: 'table', caption: 'At the station and the airport', explain: ['head'], quiz: true, head: ['Word', 'Example'], rows: [
            ['a single ticket', 'A single ticket to York, please.'],
            ['a return ticket', 'A return ticket is cheaper than two singles.'],
            ['a platform', 'The train leaves from platform 6.'],
            ['a timetable', 'Check the timetable for the last bus.'],
            ['delayed', 'Our train is delayed by twenty minutes.'],
            ['cancelled', 'The flight is cancelled because of the snow.'],
            ['check in', 'You can check in online the day before.'],
            ['a boarding pass', 'Show your boarding pass at the gate.'],
            ['luggage', 'How much luggage have you got?'],
          ] },
          { t: 'tip', art: 'owl', md: 'In British English, a *single* is a ticket for one way, and a *return* is a ticket there and back. *Luggage* is uncountable: say *two bags* or *two pieces of luggage*, not *two luggages*.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct word.', items: [
            { q: 'I usually go to work ___ bus.', o: ['by', 'in', 'with'], why: '*By* + transport, with no *the*.' },
            { q: 'It’s only ten minutes, so I go ___ foot.', o: ['on', 'by', 'with'], why: 'We say *on foot*.' },
            { q: 'Hurry! We have to get ___ the train now.', o: ['on', 'in', 'up'], why: 'Bus, train, plane: *get on*.' },
            { q: 'The taxi is here. Let’s get ___.', o: ['in', 'on', 'up'], why: 'Car, taxi: *get in*.' },
            { q: 'Our flight is ___. It’s leaving two hours late.', o: ['delayed', 'cancelled', 'on time'], why: '*Delayed* means late. *Cancelled* means it is not leaving at all.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the words and their meanings.', pairs: [
            ['a return ticket', 'a ticket to go and come back'],
            ['a timetable', 'a list of times for buses or trains'],
            ['the gate', 'where you wait to get on the plane'],
            ['luggage', 'your bags and suitcases'],
            ['arrivals', 'where you meet people after their flight'],
            ['a platform', 'where you wait to get on a train'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with one word.', items: [
            { q: 'A ___ ticket is for one way only.', a: ['single', 'one-way'], why: 'In British English we say *a single ticket* or *a single*.' },
            { q: 'The train to Leeds leaves from ___ 4.', a: ['platform'], why: 'At a station, trains leave from a *platform*.' },
            { q: 'You need your passport and your ___ pass to get on the plane.', a: ['boarding'], why: 'A *boarding pass* lets you get on the plane.' },
            { q: 'The 8.15 train is ___, so there are no trains this morning. We have to take a bus.', a: ['cancelled', 'canceled'], why: 'The train is not running at all, so it is *cancelled*. British English spells it with *ll*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'I was walking when…',
      about: 'Tell a story with the past continuous and the past simple.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'Use the **past continuous** for an action that was in progress at a time in the past: *was* or *were* + verb-*ing*.\n\nUse the **past simple** for a short action that happened in the middle of the longer one. We often join them with **when**.' },
          { t: 'examples', items: [
            { s: 'At eight o’clock I **was having** breakfast.', n: 'At eight, the action was in progress.' },
            { s: 'I **was walking** to the station when it **started** to rain.', n: 'The long action: *was walking*. The short action in the middle: *started*.' },
            { s: '**While** we **were waiting**, we **had** a coffee.', n: '*While* + the long action in the past continuous.' },
          ] },
        ],
        [
          { t: 'table', caption: 'The past continuous', explain: ['head'], quiz: true, head: ['', 'Positive', 'Negative', 'Question'], rows: [
            ['I / he / she / it', 'I was waiting', 'I wasn’t waiting', 'Was I waiting?'],
            ['you / we / they', 'we were waiting', 'we weren’t waiting', 'Were we waiting?'],
          ] },
          { t: 'tip', art: 'owl', md: 'Some verbs are not usually in the continuous form: *know, want, like, need*. Say *I knew the answer*, not *I was knowing the answer*.' },
          { t: 'text', md: 'Remember: **when** usually goes with the short action in the past simple, and **while** goes with the long action in the past continuous.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct words.', items: [
            { q: 'At 7 o’clock last night I ___ dinner.', o: ['was cooking', 'am cooking', 'were cooking'], why: 'An action in progress at a time in the past. *I* takes *was*.' },
            { q: 'They were sleeping when the phone ___.', o: ['rang', 'was ringing', 'rings'], why: 'The short action in the middle of the long one: past simple, *rang*.' },
            { q: '___ you working when I called?', o: ['Were', 'Was', 'Did'], why: 'Past continuous question with *you*: *Were you working…?*' },
            { q: 'She was driving to the airport ___ her car broke down.', o: ['when', 'while', 'during'], why: '*When* + the short action in the past simple.' },
            { q: '___ we were waiting for the train, we had a coffee.', o: ['While', 'During', 'Then'], why: '*While* + the long action in the past continuous.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with the past continuous or the past simple of the verb in brackets.', items: [
            { q: 'I ___ (walk) home when I saw an old friend.', a: ['was walking'], why: 'The long action in progress: *was walking*.' },
            { q: 'It ___ (rain) when we left the house, so we took an umbrella.', a: ['was raining'], why: 'The rain was in progress when we left: *was raining*.' },
            { q: 'We were having lunch when the fire alarm ___ (start).', a: ['started'], why: 'The short action in the middle: past simple, *started*.' },
            { q: 'What ___ (you / do) at ten o’clock last night?', a: ['were you doing'], why: 'An action in progress at a past time: *were you doing*.' },
            { q: 'While Amir ___ (wait) for his bus, he read a book.', a: ['was waiting'], why: '*While* + past continuous: *was waiting*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'I was sleeping when you called.', why: 'Long action first, then *when* + the short action.' },
            { a: 'They weren’t listening to the guide.', why: 'Negative: *weren’t* + verb-*ing*.' },
            { a: 'What were you doing at midnight?', why: 'Question word + *were* + *you* + verb-*ing*.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs in the past continuous.', items: [
            { s: 'We [were sitting] on the bus when a man got on with a big dog.', why: '*Were sitting* is the past continuous. *Got on* is the past simple.' },
            { s: 'While I [was buying] the tickets, my friends [were looking] at the map.', why: '*Was buying* and *were looking*: *was* or *were* + verb-*ing*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'At the hotel',
      about: 'Book a room, check in and explain a problem with your room.',
      art: 'croissant',
      spreads: [
        [
          { t: 'dialogue', title: 'Checking in', lines: [
            { who: 'Receptionist', s: 'Good evening. Can I help you?' },
            { who: 'Nadia', s: 'Yes, I have a reservation. My name is Nadia Haddad.' },
            { who: 'Receptionist', s: 'Yes, a double room for three nights. Can I see your passport, please?' },
            { who: 'Nadia', s: 'Here you are. Is breakfast included?' },
            { who: 'Receptionist', s: 'Yes, it is. Breakfast is from seven to ten in the restaurant.' },
            { who: 'Nadia', s: 'Great. And is there Wi-Fi in the room?' },
            { who: 'Receptionist', s: 'Yes. The password is on your key card. Your room is 214, on the second floor.' },
          ] },
          { t: 'text', md: 'A **single room** is for one person. A **double room** has one big bed for two people. A **twin room** has two beds. You **check in** when you arrive and **check out** when you leave.' },
        ],
        [
          { t: 'table', caption: 'Useful phrases', explain: ['head', 'col0'], head: ['Situation', 'You can say'], rows: [
            ['Booking a room', 'I’d like to book a single room for two nights.'],
            ['Asking about the price', 'How much is it per night?'],
            ['Arriving', 'I have a reservation in the name of Silva.'],
            ['Asking a question', 'Is breakfast included?'],
            ['Explaining a problem', 'The air conditioning doesn’t work.'],
            ['Asking for help', 'Could you send someone, please?'],
          ] },
          { t: 'dialogue', title: 'A problem with the room', lines: [
            { who: 'Nadia', s: 'Hello, this is room 214. I’m afraid there’s a problem. The shower isn’t working.' },
            { who: 'Receptionist', s: 'I’m sorry about that. I’ll send someone now.' },
            { who: 'Nadia', s: 'Thank you. And there aren’t any towels in the bathroom.' },
            { who: 'Receptionist', s: 'I’m very sorry. We’ll bring some towels too.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best words.', items: [
            { q: 'I’d like to ___ a room for two nights, please.', o: ['book', 'reserve to', 'take on'], why: 'We *book* a room.' },
            { q: 'How much is it ___ night?', o: ['per', 'in', 'by'], why: 'We say *per night*: for each night.' },
            { q: 'I have a reservation ___ the name of Jensen.', o: ['in', 'on', 'with'], why: 'We say *in the name of…*' },
            { q: 'The TV in my room ___ work.', o: ['doesn’t', 'isn’t', 'don’t'], why: 'Present simple negative with *it*: *doesn’t work*.' },
            { q: '___ you send someone to fix it, please?', o: ['Could', 'Do', 'Are'], why: 'A polite request: *Could you…?*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the words and their meanings.', pairs: [
            ['a single room', 'a room for one person'],
            ['a double room', 'a room with one big bed for two people'],
            ['a twin room', 'a room with two beds'],
            ['check in', 'arrive at the hotel and get your key'],
            ['check out', 'pay and leave the hotel'],
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Is breakfast included in the price?', why: 'Question: *Is* + *breakfast* + *included*.' },
            { a: 'There aren’t any towels in my room.', why: '*There aren’t any* + plural noun.' },
            { a: 'Could I change rooms, please?', why: 'A polite request: *Could I* + verb.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Think about Nadia’s two conversations. True or false?', items: [
            { q: 'Nadia booked a single room.', a: 'f', why: 'She has a double room.' },
            { q: 'She is staying at the hotel for three nights.', a: 't', why: 'The receptionist says “a double room for three nights”.' },
            { q: 'Breakfast is not included.', a: 'f', why: 'The receptionist says “Yes, it is.”' },
            { q: 'There are two problems in Nadia’s room.', a: 't', why: 'The shower isn’t working, and there aren’t any towels.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Three days in the mountains',
      about: 'Read a holiday blog post and check the details.',
      art: 'nata',
      spreads: [
        [
          { t: 'reading', title: 'Three days in the mountains', md: 'Last month my sister and I spent three days in a small town in the mountains. We went by train. The journey was long, but the views were beautiful, and we were talking and laughing all the way.\n\nOur hotel was old and very quiet. On the first evening, we were sitting in the garden when it started to snow! The receptionist brought us two hot chocolates, and we watched the snow from the window.\n\nThe next day, we walked to a lake above the town. While we were walking, we saw two deer near the path. We were very tired after the walk, so we came back by bus.\n\nThere was one problem. On the last morning, the hot water wasn’t working, so we had cold showers. That wasn’t fun!\n\nWould I go back? Yes, I would. Next time I’m going to stay for a week.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'The two sisters travelled to the town by train.', a: 't', why: '“We went by train.”' },
            { q: 'The journey was short.', a: 'f', why: 'The journey was long.' },
            { q: 'It started to snow while they were sitting in the garden.', a: 't', why: '“We were sitting in the garden when it started to snow!”' },
            { q: 'They walked back from the lake.', a: 'f', why: 'They were tired, so they came back by bus.' },
            { q: 'The hotel had a swimming pool.', a: 'ng', why: 'The blog does not say anything about a pool.' },
            { q: 'The writer wants to stay longer next time.', a: 't', why: '“Next time I’m going to stay for a week.”' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
            { q: 'What was the problem on the last morning?', o: ['There was no hot water.', 'The train was cancelled.', 'It was snowing.'], why: '“The hot water wasn’t working.”' },
            { q: 'When did they see the deer?', o: ['While they were walking to the lake.', 'While they were sitting in the garden.', 'While they were on the train.'], why: '“While we were walking, we saw two deer.”' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs in the past continuous.', items: [
            { s: 'On the first evening, we [were sitting] in the garden. The next day, while we [were walking], we saw two deer.', why: '*Were sitting* and *were walking*: *were* + verb-*ing*. *Saw* is past simple.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'We went to the beach ___ car.', o: ['by', 'with', 'on'], why: '*By* + transport.' },
      { q: 'Excuse me, which ___ does the train to Bristol leave from?', o: ['platform', 'gate', 'timetable'], why: 'At a station, trains leave from a *platform*.' },
      { q: 'I ___ a shower when the lights went out.', o: ['was having', 'were having', 'had'], why: 'The long action in progress: *was having*.' },
      { q: 'While she was shopping, she ___ her keys.', o: ['lost', 'was losing', 'loses'], why: 'The short action: past simple, *lost*.' },
      { q: 'A ___ room has two beds.', o: ['twin', 'double', 'single'], why: 'A *twin room* has two beds. A *double room* has one big bed.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete with the correct form of the verb in brackets.', items: [
      { q: 'They ___ (play) tennis when it started to rain.', a: ['were playing'], why: 'The long action in progress: *were playing*.' },
      { q: 'I was reading when my brother ___ (come) home.', a: ['came'], why: 'The short action: past simple. Come, came, come.' },
      { q: '___ (you / sleep) when I phoned?', a: ['Were you sleeping'], why: 'Question: *Were* + *you* + verb-*ing*.' },
      { q: 'The heating in my room ___ (not / work).', a: ['doesn’t work', 'does not work', 'isn’t working', 'is not working'], why: 'A problem now: *doesn’t work* or *isn’t working*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'I’d like to book a double room.', why: '*I’d like to* + verb.' },
      { a: 'She was waiting when the bus came.', why: 'Long action, then *when* + the short action.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
      { q: '', o: ['We got off the train in Milan.', 'We got out the train in Milan.', 'We got down of the train in Milan.'], why: 'Train: *get off*.' },
      { q: '', o: ['I knew the answer.', 'I was knowing the answer.', 'I were knowing the answer.'], why: '*Know* is not usually in the continuous form.' },
      { q: '', o: ['How much luggage have you got?', 'How many luggages have you got?', 'How much luggages have you got?'], why: '*Luggage* is uncountable: *how much luggage*.' },
    ] },
  ],
};
