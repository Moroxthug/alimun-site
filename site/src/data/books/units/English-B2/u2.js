// English B2, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Telling stories',
  goal: 'Tell a story well: in the right order, with the right tenses and linking words.',
  art: 'ghost',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['narrative-tenses', 'past-perfect', 'past-perfect-continuous', 'linking-words', 'stories'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'What happened, what was happening',
      about: 'Use the past simple, the past continuous and the past perfect to tell a story.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'A good story uses three past tenses together. Each one has its own job.' },
          { t: 'table', caption: 'Narrative tenses', explain: ['head', 'col0', 'col1'], head: ['Tense', 'Use', 'Example'], rows: [
            ['Past simple', 'the main events, in the order they happened', 'She opened the door and walked in.'],
            ['Past continuous', 'the background, or an action in progress when something else happened', 'It was raining, and people were hurrying home.'],
            ['Past perfect', 'an action that happened before another past action', 'When I arrived, the film had started.'],
          ] },
        ],
        [
          { t: 'examples', items: [
            { s: 'I **was cycling** to work when a fox **ran** across the road.', n: 'A longer action in progress (past continuous) is interrupted by a short one (past simple).' },
            { s: 'When we got to the station, the train **had left**.', n: 'First the train left, then we arrived. We missed it.' },
            { s: 'When we got to the station, the train **left**.', n: 'First we arrived, then the train left. We probably caught it.' },
            { s: 'While she **was cooking**, her husband **was setting** the table.', n: 'Two actions in progress at the same time.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Do not put every past action in the past perfect. Use it only when you need to show that something happened **before** another past moment. When *after* or *before* already makes the order clear, the past simple is often enough: *After she finished work, she went home*.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct form.', items: [
            { q: 'I ___ my keys when I was running for the bus.', o: ['dropped', 'was dropping', 'had dropped'], why: 'Dropping keys is a short action that happened during the longer one: past simple.' },
            { q: 'When I opened the fridge, I saw that someone ___ my lunch.', o: ['had eaten', 'was eating', 'has eaten'], why: 'Someone ate it before I opened the fridge: past perfect.' },
            { q: 'We ___ dinner when the lights suddenly went out.', o: ['were having', 'have had', 'are having'], why: 'Dinner was in progress when something interrupted it: past continuous.' },
            { q: 'By the time the police arrived, the thieves ___.', o: ['had escaped', 'have escaped', 'escape'], why: 'The thieves escaped before the police arrived: past perfect.' },
            { q: 'She ___ the letter, put it in an envelope and posted it.', o: ['wrote', 'had written', 'was writing'], why: 'A list of main events in order: past simple for each one.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with the past simple, past continuous or past perfect of the verb in brackets.', items: [
            { q: 'I ___ (walk) home when I heard someone call my name.', a: ['was walking'], why: 'The walking was in progress when something happened: past continuous.' },
            { q: 'Tom was nervous because he ___ (never / fly) before.', a: ['had never flown', '’d never flown'], why: 'His experience before that moment: past perfect. Fly, flew, flown.' },
            { q: 'While they ___ (wait) for the bus, it started to snow.', a: ['were waiting'], why: '*While* + an action in progress: past continuous.' },
            { q: 'When I got home, I ___ (realise) that I had left my phone at work.', a: ['realised', 'realized'], why: 'A main event in the story: past simple.' },
            { q: 'She didn’t recognise him at first because he ___ (grow) a beard.', a: ['had grown', '’d grown'], why: 'He grew the beard before she saw him: past perfect. Grow, grew, grown.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs in the past perfect.', items: [
            { s: 'When Elif arrived at the party, most of the guests [had gone] home and someone [had eaten] all the cake.', why: 'Both things happened before Elif arrived.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'She had been waiting for hours',
      about: 'Use the past perfect continuous for activities that went on up to a moment in the past.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Use the **past perfect continuous** for an activity that continued up to a moment in the past, or stopped just before it. Form it with *had* + *been* + the *-ing* form. It is the past version of the present perfect continuous.' },
          { t: 'examples', items: [
            { s: 'When I met her, she **had been living** in Berlin for two years.', n: 'She started living there two years before we met, and she still lived there.' },
            { s: 'The streets were wet. It **had been raining**.', n: 'The rain stopped just before, and we could see the result.' },
            { s: 'How long **had** you **been waiting** when the doctor finally called you?', n: '*How long* asks about the length of the activity up to that past moment.' },
          ] },
        ],
        [
          { t: 'text', md: 'The **past perfect simple** focuses on a finished action or a result, often with a number. The **past perfect continuous** focuses on the activity and how long it lasted.' },
          { t: 'table', caption: 'Activity or result?', explain: ['head'], head: ['Past perfect continuous: the activity', 'Past perfect simple: the result'], rows: [
            ['She had been writing all afternoon.', 'She had written four pages.'],
            ['They had been driving for hours.', 'They had driven three hundred kilometres.'],
          ] },
          { t: 'tip', art: 'owl', md: 'State verbs do not take the continuous here either. Say *I had known him for years*, never *I had been knowing him for years*.' },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with the past perfect continuous of the verb in brackets.', items: [
            { q: 'Her eyes were red because she ___ (cry).', a: ['had been crying', '’d been crying'], why: 'The crying stopped just before, and we could see the result.' },
            { q: 'We ___ (drive) for six hours when the car broke down.', a: ['had been driving', '’d been driving'], why: 'An activity that lasted six hours up to a past moment.' },
            { q: 'He was out of breath because he ___ (run).', a: ['had been running', '’d been running'], why: 'The running explains how he was at that moment.' },
            { q: 'How long ___ (they / go) out together before they got married?', a: ['had they been going'], why: 'In a question, *had* goes before the subject: *had they been going out*.' },
            { q: 'I ___ (not / sleep) well for weeks, so I went to see a doctor.', a: ['hadn’t been sleeping', 'had not been sleeping'], why: 'Negative: *hadn’t* + *been* + *-ing*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct form.', items: [
            { q: 'When I finally found my glasses, I ___ for them for twenty minutes.', o: ['had been looking', 'have been looking', 'am looking'], why: 'An activity up to a moment in the past: past perfect continuous.' },
            { q: 'By midnight, the band ___ ten songs.', o: ['had recorded', 'had been recording', 'were recording'], why: 'We count finished results (*ten songs*), so the past perfect simple.' },
            { q: 'I ___ him for years before we started working together.', o: ['had known', 'had been knowing', 'was knowing'], why: '*Know* is a state verb: no continuous form.' },
            { q: 'The kitchen smelled wonderful. Dad ___ bread all morning.', o: ['had been baking', 'has been baking', 'bakes'], why: 'The story is in the past, so *had been*, not *has been*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'How long had you been studying English?', why: 'Question: *How long* + *had* + subject + *been* + *-ing*.' },
            { a: 'Why had he been crying?', why: 'Question word + *had* + subject + *been* + *-ing*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'As soon as, while, in the end',
      about: 'Link the events of a story so the listener can follow them.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Linking words show how the events in a story connect in time. They make a story much easier to follow.' },
          { t: 'table', caption: 'Linking words for stories', explain: ['head', 'col1'], quiz: true, head: ['Linking word', 'Meaning', 'Example'], rows: [
            ['as soon as', 'immediately after', 'As soon as I saw the email, I called her.'],
            ['while', 'during the time that', 'While I was waiting, I read the news.'],
            ['by the time', 'before or at the moment when', 'By the time we arrived, the shop had closed.'],
            ['until', 'up to the time when', 'We waited until the rain stopped.'],
            ['at first', 'at the beginning, before things changed', 'At first I hated the job, but now I love it.'],
            ['eventually', 'after a long time or after many problems', 'The bus eventually arrived at midnight.'],
            ['in the end', 'finally, after a lot of changes or discussion', 'In the end, we decided to stay at home.'],
          ] },
        ],
        [
          { t: 'text', md: '*In the end* means finally, after a lot of changes, problems or discussion. *At the end* is about the last part of something, and it is usually followed by *of*: *at the end of the film*, *at the end of the street*.' },
          { t: 'text', md: '*By the time* is often followed by the past simple, with the past perfect in the other part of the sentence: *By the time I got there, everyone had left*.' },
          { t: 'tip', art: 'owl', md: 'In many languages a similar word means *possibly*. In English, *eventually* never means *possibly*. It means *finally, after some time*: *She eventually found a job*.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best linking word.', items: [
            { q: '___ I got home, I took off my shoes and lay down on the sofa.', o: ['As soon as', 'While', 'Eventually'], why: '*As soon as*: immediately after I got home.' },
            { q: '___ we were driving through the mountains, the weather changed.', o: ['While', 'By the time', 'In the end'], why: '*While* + an action in progress.' },
            { q: '___ the ambulance arrived, the man had already stood up.', o: ['By the time', 'While', 'Until'], why: '*By the time* + past simple, with the past perfect in the other part.' },
            { q: 'We looked at twenty flats, and ___ we found one we both liked.', o: ['eventually', 'at first', 'while'], why: '*Eventually*: after a long time and many attempts.' },
            { q: 'I didn’t like my flatmate ___, but now we’re good friends.', o: ['at first', 'in the end', 'as soon as'], why: '*At first*: at the beginning, before things changed.' },
            { q: 'Please stay here ___ I come back.', o: ['until', 'by the time', 'eventually'], why: '*Until*: up to the time when I come back.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with *in* or *at*.', items: [
            { q: 'Turn left ___ the end of the street.', a: ['at'], why: '*At the end of* a place: the last part of it.' },
            { q: 'Everyone stood up and clapped ___ the end of the concert.', a: ['at'], why: '*At the end of* an event: its last part.' },
            { q: 'I couldn’t decide which job to take. ___ the end, I chose the one closer to home.', a: ['in'], why: '*In the end*: finally, after a long time deciding.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the beginnings and the endings.', pairs: [
            ['As soon as the plane landed,', 'everyone switched on their phones.'],
            ['While I was cleaning the flat,', 'I found an old photo of my grandparents.'],
            ['By the time I finished the report,', 'my colleagues had all gone home.'],
            ['We stayed at the station', 'until the last train had gone.'],
            ['The traffic was terrible, but', 'we eventually got there.'],
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'The wrong suitcase',
      about: 'Read a short story with a surprise at the end.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'reading', title: 'The wrong suitcase', md: 'Last spring, Daniel flew to Lisbon for a job interview. He had been preparing for weeks, and he had packed his best suit, a white shirt and a pair of new shoes.\n\nThe flight was two hours late, and by the time he reached the baggage hall, most of the other passengers had already left. A single black suitcase was going round and round. Daniel grabbed it, jumped into a taxi and went straight to his hotel. He was so tired that he fell asleep as soon as he lay down.\n\nThe next morning, while he was having breakfast, he noticed the time and panicked. He rushed back to his room, opened the suitcase and froze. There was no suit inside. Instead, he found a pair of walking boots, a guidebook and a large box of chocolates. Someone else had taken his bag, and he had taken theirs.\n\nDaniel phoned the airport, but nobody could help him. In the end, he went to the interview in jeans and a creased T-shirt, feeling completely embarrassed.\n\nThe woman who interviewed him was polite but serious. At first she asked the usual questions about his experience. Then she looked at his T-shirt and asked why he was not wearing a suit. Daniel told her the whole story: the late flight, the black suitcase, the walking boots.\n\nShe was silent for a moment, and then she started to laugh. “I was on that flight too,” she said. “I’ve been trying to find the owner of a black suitcase since last night. It’s in my office. There’s a very nice suit inside.”\n\nDaniel got the job. He still does not know if it was because of his answers or because he gave her the chocolates back.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Daniel went to Lisbon on holiday.', a: 'f', why: 'He went there for a job interview.' },
            { q: 'Daniel’s flight arrived on time.', a: 'f', why: 'The flight was two hours late.' },
            { q: 'Daniel opened the suitcase as soon as he got to the hotel.', a: 'f', why: 'He fell asleep and opened it the next morning.' },
            { q: 'The interviewer had taken Daniel’s suitcase.', a: 't', why: 'She had a black suitcase with a suit inside in her office.' },
            { q: 'The interviewer had visited Lisbon many times before.', a: 'ng', why: 'The text does not say.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language in the story.', items: [
            { q: '“By the time he reached the baggage hall, most of the other passengers had already left.” What happened first?', o: ['The passengers left.', 'Daniel reached the baggage hall.', 'Both happened at the same moment.'], why: 'The past perfect, *had left*, shows the earlier action.' },
            { q: '“He had been preparing for weeks.” What does this tell us?', o: ['He spent a long time preparing before the trip.', 'He started preparing after the interview.', 'He prepared for a few minutes.'], why: 'The past perfect continuous: an activity that lasted up to a past moment.' },
            { q: 'What is the surprise at the end of the story?', o: ['The interviewer had the suitcase with Daniel’s suit.', 'Daniel missed the interview.', 'The suitcase was empty.'], why: 'She had taken his suitcase at the airport by mistake.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verb in the past continuous.', items: [
            { s: 'The next morning, while he [was having] breakfast, he noticed the time and panicked.', why: '*Was having*: an action in progress when something else happened.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'I ___ along the beach when I found the ring.', o: ['was walking', 'walked', 'had walked'], why: 'The longer action in progress: past continuous.' },
      { q: 'When we reached the cinema, the film ___.', o: ['had already started', 'has already started', 'already starts'], why: 'The film started before we arrived: past perfect.' },
      { q: 'She was exhausted because she ___ all night.', o: ['had been studying', 'has been studying', 'studies'], why: 'An activity up to a moment in the past: past perfect continuous.' },
      { q: '___ I heard the news, I phoned my mother.', o: ['As soon as', 'While', 'Until'], why: '*As soon as*: immediately after.' },
      { q: 'We tried three different hotels, and ___ we found a room.', o: ['eventually', 'at first', 'while'], why: '*Eventually*: after a long time and several attempts.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'By the time I got up, my flatmate ___ (leave).', a: ['had left', '’d left'], why: '*By the time* + past simple, with the past perfect in the other part.' },
      { q: 'They ___ (play) tennis when it started to rain.', a: ['were playing'], why: 'An action in progress, interrupted: past continuous.' },
      { q: 'How long ___ (you / wait) when the bus finally came?', a: ['had you been waiting'], why: '*How long* + an activity up to a past moment: past perfect continuous.' },
      { q: 'Wait here ___ I get back.', a: ['until', 'till'], why: '*Until*: up to the time when.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'I was having a shower when the phone rang.', why: 'Past continuous for the background, past simple for the interruption.' },
      { a: 'Had she ever been abroad before?', why: 'Past perfect question: *Had* + subject + *ever* + past participle.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
      { q: '', o: ['I had known him for years.', 'I had been knowing him for years.', 'I was knowing him for years.'], why: '*Know* is a state verb: no continuous form.' },
      { q: '', o: ['At the end of the film, everyone cried.', 'In the end of the film, everyone cried.', 'Eventually of the film, everyone cried.'], why: '*At the end of* + an event.' },
      { q: '', o: ['When I arrived, she had already gone.', 'When I arrived, she has already gone.', 'When I had arrived, she already went.'], why: 'She went first, so the past perfect for her action and the past simple for mine.' },
    ] },
  ],
};
