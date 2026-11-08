// English B2, unit 2, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Builds on B1 unit 9 (past simple, past continuous, past perfect, time words in stories): at B2 the three narrative
// tenses working together, the past perfect continuous, and the linking that makes a story flow; then an anecdote.
// Exam tasks in the format of B2 First.
export const UNIT = {
  id: 'u2',
  title: 'Telling stories',
  goal: 'Tell a story well: the right tense for every event, the past perfect continuous for background, and linking that keeps the listener with you.',
  art: 'ghost',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing', 'speaking'], topics: ['narrative-tenses', 'past-perfect', 'past-perfect-continuous', 'linking-words', 'stories'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'Three tenses, one story',
      about: 'Use the past simple, past continuous and past perfect together to tell a clear story.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'At B1 you learned the three narrative tenses one by one. At B2 the skill is to **combine** them so that a listener always knows what happened first, what was in the background, and what the main events were.\n\nThink of a story as a film. The **past simple** is the action that moves the story forward: *I opened the door. A man walked in.* The **past continuous** is the scenery behind the action, what was already happening: *It was raining and the lights were flickering.* The **past perfect** is a flashback to something that happened **before** the moment you are describing: *I realised I had left my keys at work.*' },
          { t: 'table', caption: 'The job of each tense', explain: ['head', 'col1'], head: ['Tense', 'Job in the story', 'Example'], rows: [
            ['past simple', 'the main events, in order', 'She picked up the phone and called the police.'],
            ['past continuous', 'the background, or an action interrupted', 'While she was waiting, the lights went out.'],
            ['past perfect', 'an earlier event: a flashback', 'Someone had cut the wire.'],
          ] },
          { t: 'tip', art: 'owl', md: 'You do **not** need the past perfect when the order is already clear from the sequence or from *after* and *before*: *After she had eaten / After she ate, she left* are both fine. Use it when the order would otherwise be confusing: *When I arrived, the film started* (I arrived, then it started) is not the same as *When I arrived, the film had started* (it started first).' },
        ],
        [
          { t: 'text', md: 'Two verbs in the past simple usually mean one thing happened **after** the other. *When the guests arrived, we served dinner*: first they arrived, then we served. Change one verb and the story changes.\n\n*When the guests arrived, we were serving dinner*: dinner was already in progress.\n*When the guests arrived, we had served dinner*: dinner was over before they came.\n\nThis small change is exactly the kind of meaning that B2 First tests in Listening and Reading, and it is what makes your own stories easy to follow.' },
          { t: 'examples', items: [
            { s: 'When I **got** to the station, the train **left**.', n: 'I got there, then the train left. I probably caught it.' },
            { s: 'When I **got** to the station, the train **was leaving**.', n: 'It was moving out as I arrived.' },
            { s: 'When I **got** to the station, the train **had left**.', n: 'It left before I arrived. I missed it.' },
            { s: 'I **was cooking** when the smoke alarm **went off**.', n: 'A background action interrupted by an event.' },
            { s: 'She **didn’t recognise** him because he **had grown** a beard.', n: 'The beard came first: a reason from earlier.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['When I arrived, the party already finished.', 'When I arrived, the party had already finished.', 'An earlier event: past perfect.'],
            ['I walked home when it started to rain.', 'I was walking home when it started to rain.', 'The walk is the background.'],
            ['I had gone to Paris last year.', 'I went to Paris last year.', 'No earlier past moment: past simple.'],
            ['While I watched TV, the phone was ringing.', 'While I was watching TV, the phone rang.', 'The background is continuous; the event is simple.'],
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the form that fits the meaning.', items: [
            { q: 'I missed the bus. When I reached the stop, it ___ .', o: ['had gone', 'went', 'was going'], why: 'It left before I arrived: past perfect.' },
            { q: 'We ___ along the beach when we saw the dolphins.', o: ['were walking', 'walked', 'had walked'], why: 'The background activity: past continuous.' },
            { q: 'He was nervous because he ___ in front of an audience before.', o: ['had never spoken', 'never spoke', 'was never speaking'], why: 'Never before that moment: past perfect.' },
            { q: 'The lights went out and everyone ___ .', o: ['screamed', 'had screamed', 'was screaming'], why: 'The next event in order: past simple.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'In the format of the B2 First exam (Reading and Use of English Part 2): write one word in each gap.', items: [
            { q: 'By the time the firefighters arrived, the fire ___ already spread to the roof.', a: ['had'], why: 'Past perfect: *had* + participle.' },
            { q: 'I was halfway home ___ I realised I’d left my phone in the café.', a: ['when'], why: '*When* introduces the sudden event.' },
            { q: '___ we were waiting for the results, nobody said a word.', a: ['While', 'As', 'Whilst'], why: '*While* or *as* introduces a background action.' },
            { q: 'She had never ___ such a beautiful place before.', a: ['seen', 'visited'], why: 'A past participle after *had never*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Part 2 gaps are usually **grammar words**: auxiliaries (*had, was*), prepositions, linking words, pronouns. Read the whole text once before you fill anything in, and check the tense around each gap: a missing *had* or *was* is a classic Part 2 answer.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'When I got to the station, the train had already left.' },
            { a: 'I was cooking dinner when the lights went out.' },
            { a: 'She didn’t recognise him because he’d grown a beard.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'I’d been waiting for hours',
      about: 'Use the past perfect continuous to explain the background and the cause of a past situation.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'The **past perfect continuous** (*had been doing*) is the past version of the present perfect continuous. Just as *I’ve been waiting for an hour* looks back from now, *I’d been waiting for an hour when she arrived* looks back from a moment in the past.\n\nIt has three main jobs in a story. It shows **how long** an activity had been going on before a past moment: *We’d been driving for six hours when the car broke down.* It explains a **visible result** in the past: *His eyes were red because he’d been crying.* And it describes a **repeated** activity up to a past moment: *She’d been calling him all evening.*' },
          { t: 'table', caption: 'Past perfect simple or continuous?', explain: ['head', 'col2'], head: ['Simple', 'Continuous', 'The difference'], rows: [
            ['She’d written the report.', 'She’d been writing the report.', 'finished / the activity, maybe not finished'],
            ['I’d read three chapters.', 'I’d been reading for an hour.', 'how many / how long'],
            ['He’d lived there since 2010.', 'He’d been living there since 2010.', 'often both possible'],
          ] },
          { t: 'tip', art: 'owl', md: 'As with all continuous forms, **state verbs** stay simple: *I’d known him for years* (not *I’d been knowing*). And remember that you only need this tense when there is a **past moment** to look back from. Without it, use the past simple: *I waited for an hour*.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'We**’d been driving** for six hours when the car **broke down**.', n: 'How long, up to a past event.' },
            { s: 'The ground was wet. It **had been raining** all night.', n: 'A visible past result of an activity.' },
            { s: 'By the time I got there, they**’d been waiting** for forty minutes.', n: '*By the time* + past simple, then past perfect continuous.' },
            { s: 'She was exhausted because she**’d been working** double shifts.', n: 'The cause of a past state.' },
            { s: 'He **had known** about the problem for weeks.', n: '*Know* is a state verb: simple form.' },
          ] },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I was waiting for two hours when the bus came.', 'I’d been waiting for two hours when the bus came.', 'Duration up to a past moment.'],
            ['She’d been knowing him for years.', 'She’d known him for years.', '*Know* is a state verb.'],
            ['I’d been visiting four museums.', 'I’d visited four museums.', 'A number of things: simple form.'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'The interview', lines: [
            { who: 'Ellie', s: 'How did the job interview go?' },
            { who: 'Joe', s: 'Badly at first. I’d been travelling since five in the morning, and the train had been delayed twice.' },
            { who: 'Ellie', s: 'Oh no. Were you late?' },
            { who: 'Joe', s: 'Ten minutes. They’d already interviewed two other people, and I could tell they’d been waiting for me.' },
            { who: 'Ellie', s: 'And then?' },
            { who: 'Joe', s: 'Then they asked about a project I’d been working on for a year, and everything changed. I think I got it.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the better form.', items: [
            { q: 'Joe was tired because he ___ since five in the morning.', o: ['had been travelling', 'had travelled', 'travelled'], why: 'Duration of an activity up to a past moment.' },
            { q: 'They ___ two other people before Joe arrived.', o: ['had interviewed', 'had been interviewing', 'interviewed'], why: 'A number of finished actions: simple form.' },
            { q: 'He talked about a project he ___ on for a year.', o: ['had been working', 'has worked', 'was working'], why: 'Duration up to a past moment: past perfect continuous.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'In the format of the B2 First exam (Reading and Use of English Part 4): complete the second sentence so that it means the same as the first, using the word given.', items: [
            { q: 'I started reading at nine, and at midnight I was still reading.', cue: 'BEEN', a: ['At midnight I had been reading for three hours.', 'At midnight I’d been reading for three hours.'], why: 'Duration up to a past moment: past perfect continuous.' },
            { q: 'The bus left just before I reached the stop.', cue: 'ALREADY', a: ['When I reached the stop, the bus had already left.', 'The bus had already left when I reached the stop.'], why: 'An earlier event: past perfect with *already*.' },
            { q: 'It was my first visit to New York.', cue: 'NEVER', a: ['I had never been to New York before.', 'I’d never been to New York before.', 'I had never visited New York before.'], why: '*First visit* in the past becomes *had never… before*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Part 4 loves **tense changes**: a sentence about a first time, a start point or a sequence often becomes a perfect form. Underline the time words in the first sentence (*at nine, just before, first*); they tell you which structure the examiner wants.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'mei', items: [
            { a: 'We’d been driving for six hours when the car broke down.' },
            { a: 'The ground was wet because it had been raining.' },
            { a: 'By the time I arrived, they’d been waiting for an hour.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'Eventually, it turned out',
      about: 'Link a story so that it flows: time words, sequence and surprise.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Good storytellers guide the listener with **linking words**. At B1 you used *when, then, after* and *in the end*. At B2 you need a wider range, and you need to use them precisely.\n\n**As soon as** and **the moment** mean *immediately after*: *As soon as I opened the email, I knew.* **By the time** means *not later than*, and usually takes a past perfect in the other clause: *By the time we arrived, the shop had closed.* **Eventually** means *after a long time or a lot of effort*: *We eventually found the hotel.* **In the end** means *finally, after everything*: *In the end, it was a great holiday.* And **at the end** (of something) is about place or time: *at the end of the film*.' },
          { t: 'table', caption: 'Linking a story', explain: ['head', 'col1'], head: ['Linker', 'Meaning', 'Example'], rows: [
            ['as soon as / the moment', 'immediately after', 'The moment she saw me, she smiled.'],
            ['by the time', 'not later than; often with past perfect', 'By the time the police came, he had gone.'],
            ['meanwhile', 'at the same time, elsewhere', 'Meanwhile, back at home, the dog was eating the cake.'],
            ['eventually', 'after a long time', 'Eventually, the train arrived.'],
            ['in the end', 'finally, as a result of everything', 'In the end, we stayed at home.'],
            ['it turned out (that)', 'we discovered later', 'It turned out that he was her brother.'],
          ] },
        ],
        [
          { t: 'text', md: '**It turned out** is very useful for surprises, because it presents information that the characters discovered later: *The “stranger” turned out to be my old teacher. It turned out that the shop had been closed for years.* Other good phrases for a twist are **to my surprise**, **just as** (*Just as I was leaving, the phone rang*) and **all of a sudden**.\n\nDo not overuse *then*. A story with *then… then… then…* sounds childish. Vary it: *after that, a few minutes later, shortly afterwards, the next morning*.' },
          { t: 'examples', items: [
            { s: '**Just as** we sat down, the fire alarm went off.', n: 'At exactly that moment.' },
            { s: 'The noise **turned out to be** a cat in the attic.', n: '*Turn out to be* + noun.' },
            { s: '**By the time** I found a taxi, I had missed the flight.', n: 'Past perfect in the other clause.' },
            { s: 'We waited for hours, and **eventually** a bus came.', n: 'After a long time.' },
            { s: '**To my surprise**, she agreed immediately.', n: 'Introducing something unexpected.' },
          ] },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['At the end, we stayed at home.', 'In the end, we stayed at home.', '*In the end* = finally.'],
            ['Eventually he’ll call. I’m not sure.', 'He might call. I’m not sure.', '*Eventually* means in the end, not *possibly*.'],
            ['By the time we arrived, the shop closed.', 'By the time we arrived, the shop had closed.', '*By the time* usually needs the past perfect.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'In the format of the B2 First exam (Reading and Use of English Part 1): choose the word that best fits each gap.', items: [
            { q: 'We searched for the hotel for an hour and ___ found it down a tiny side street.', o: ['eventually', 'actually', 'lately'], why: '*Eventually*: after a long time.' },
            { q: 'The strange noise ___ out to be the wind in the chimney.', o: ['turned', 'came', 'went'], why: 'The fixed phrase is *turn out to be*.' },
            { q: '___ the time the ambulance came, the man had stood up.', o: ['By', 'At', 'In'], why: '*By the time*: not later than.' },
            { q: '___ I was locking the door, I heard a voice behind me.', o: ['Just as', 'As soon', 'By then'], why: '*Just as*: at exactly that moment.' },
          ] },
          { t: 'ex', kind: 'build', h: 'Build the sentence. Two words do not belong.', items: [
            { a: 'It turned out that the parcel had been sent to the wrong address.', extra: ['was', 'at'], why: '*It turned out that* + past perfect passive.' },
            { a: 'In the end we decided to stay at home.', extra: ['At', 'stayed'], why: '*In the end* = finally.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'sofia', items: [
            { a: 'Just as we sat down, the fire alarm went off.' },
            { a: 'The stranger turned out to be my old teacher.' },
            { a: 'In the end, it was the best holiday we’ve ever had.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'A story with a twist',
      about: 'Read an anecdote with a twist, then plan and tell a story in the format of B2 First.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'This anecdote uses everything in the unit. As you read, notice which tense the writer uses for each event, and how the linking words guide you to the twist at the end.' },
          { t: 'reading', title: 'The wrong train', md: 'It was a cold Friday evening, and I had been working late all week. All I wanted was to get home. The station was crowded, and people were pushing towards the platforms, so when a train marked “Northfield” pulled in, I jumped on without thinking.\n\nI found a seat, closed my eyes, and fell asleep almost immediately. By the time I woke up, the train had been travelling for over an hour, and the view outside was completely unfamiliar: fields, sheep, no lights at all. My heart sank. I had taken the express to Northfield Bay, a seaside town eighty miles away, not the local train to Northfield, where I live.\n\nI got off at the next stop, a tiny village station, and discovered that the last train back had left twenty minutes earlier. Just as I was wondering where I would spend the night, an elderly man who had been watching me from a bench came over. It turned out that he ran the only guesthouse in the village, and he had seen the same thing happen to at least a dozen tired commuters over the years.\n\nIn the end, I had the best weekend I’d had in months. I still go back every summer.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the B2 First exam (Reading and Use of English Part 5): choose the best answer.', items: [
            { q: 'Why did the writer get on the wrong train?', o: ['He was tired and did not check carefully.', 'The station staff gave him wrong information.', 'The local train had been cancelled.'], why: 'He had been working late all week and jumped on *without thinking*.' },
            { q: 'When did he realise his mistake?', o: ['When he woke up and saw the countryside.', 'As soon as the train left.', 'When the ticket inspector checked his ticket.'], why: 'The view outside was completely unfamiliar when he woke up.' },
            { q: 'What does “it turned out” tell the reader about the elderly man?', o: ['The writer discovered his job only later.', 'The writer already knew him.', 'The man was also lost.'], why: '*It turned out* introduces something discovered later.' },
            { q: 'How does the writer feel about the experience now?', o: ['He remembers it fondly.', 'He is still embarrassed.', 'He is angry about the train service.'], why: 'He had the best weekend in months and goes back every summer.' },
          ] },
        ],
        [
          { t: 'text', md: 'In B2 First Writing Part 2 you may be asked to write a **story** of 140 to 190 words, often starting or ending with a sentence given by the examiner. Examiners reward stories that use a **range of past tenses accurately**, **varied linking**, and a clear **beginning, middle and end**.\n\nA simple plan works well. Set the scene with the past continuous and past perfect (*It was raining, and I had been…*). Move the action with the past simple and linkers (*Just as…, the moment…*). End with a twist or a reflection (*It turned out that…, In the end…*).' },
          { t: 'ex', kind: 'order', h: 'Put the words in order to make strong story sentences.', items: [
            { a: 'It was getting dark and I had been walking for hours.', why: 'Past continuous and past perfect continuous set the scene.' },
            { a: 'Just as I was about to give up, I saw a light.', why: '*Just as* + past continuous, then past simple.' },
            { a: 'It turned out that the house had been empty for years.', why: 'A twist with *it turned out* and the past perfect.' },
          ] },
          { t: 'tip', art: 'owl', md: 'If the task gives you a **first sentence**, copy it exactly and continue in the same tense. If it gives you a **last sentence**, plan your story backwards so that it really leads there. Stories that ignore the given sentence lose marks for content.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Tell the start of a story. Say each sentence after the tutor.', tutor: 'omar', items: [
            { a: 'I’d been working late all week, and I was exhausted.' },
            { a: 'By the time I woke up, the train had been travelling for an hour.' },
            { a: 'It turned out that I’d taken the wrong train.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'Choose the form that fits the meaning.', items: [
      { q: 'When I got to the cinema, the film ___ , so I missed the beginning.', o: ['had started', 'started', 'was starting'], why: 'It started before I arrived.' },
      { q: 'I ___ a shower when someone rang the bell.', o: ['was having', 'had', 'had had'], why: 'A background action interrupted.' },
      { q: 'Her hands were dirty because she ___ in the garden.', o: ['had been working', 'worked', 'has worked'], why: 'A visible past result of an activity.' },
      { q: 'We ___ each other for years before we became friends.', o: ['had known', 'had been knowing', 'knew'], why: '*Know* is a state verb.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
      { q: '___ the time we arrived, everyone had left.', a: ['By'], why: '*By the time*.' },
      { q: 'The noise turned ___ to be a cat.', a: ['out'], why: '*Turn out to be*.' },
      { q: 'I had ___ waiting for an hour when she called.', a: ['been'], why: 'Past perfect continuous: *had been* + -ing.' },
      { q: 'Just ___ I was leaving, it started to snow.', a: ['as'], why: '*Just as*: at that exact moment.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: '[At the end], we decided to cancel the trip.', a: ['In the end'], why: '*In the end* means finally.' },
      { s: 'I [walked] home when it started to rain.', a: ['was walking'], why: 'The walk is the background: past continuous.' },
      { s: 'By the time we arrived, the shop [closed].', a: ['had closed'], why: '*By the time* usually needs the past perfect.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Complete the second sentence so that it means the same as the first, using the word given.', items: [
      { q: 'I started waiting at six and the bus came at eight.', cue: 'BEEN', a: ['I had been waiting for two hours when the bus came.', 'I’d been waiting for two hours when the bus came.'], why: 'Duration up to a past moment.' },
      { q: 'We discovered later that the man was a famous actor.', cue: 'TURNED', a: ['It turned out that the man was a famous actor.', 'The man turned out to be a famous actor.'], why: '*It turned out (that)* / *turn out to be*.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True, false or not given, according to the story in lesson 4.', ng: true, items: [
      { q: 'The writer lives in Northfield Bay.', a: 'f', why: 'He lives in Northfield, not Northfield Bay.' },
      { q: 'He missed the last train back.', a: 't', why: 'It had left twenty minutes earlier.' },
      { q: 'The elderly man had worked on the railway.', a: 'ng', why: 'The text only says he ran the guesthouse.' },
    ] },
  ],
};
