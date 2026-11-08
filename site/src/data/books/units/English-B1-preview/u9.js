// English B1, unit 9, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Telling stories: past simple and past continuous together, the past perfect, time words, and writing a short story.
export const UNIT = {
  id: 'u9',
  title: 'Stories and memories',
  goal: 'Tell a story about the past clearly: set the scene, say what happened and in what order, and write a short story.',
  art: 'teacup',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing', 'speaking'], topics: ['past-continuous', 'past-perfect', 'narrative-tenses', 'linkers', 'storytelling'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'I was walking home when…',
      about: 'Use the past simple and the past continuous together to set the scene and say what happened.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: 'A good story has two layers. The **background** is what was happening around the main events: the weather, what people were doing, the place. The **events** are the things that happened, one after the other.\n\nIn English, the background usually takes the **past continuous** (*was / were + -ing*): *It **was raining**. People **were hurrying** home.* The events take the **past simple**: *Suddenly the lights **went** out.*\n\nYou met the past continuous at A2. At B1 the important skill is to use both tenses together, so the listener knows what is background and what is the story.' },
          { t: 'table', caption: 'Two layers of a story', explain: ['head', 'col0'], head: ['Layer', 'Tense', 'Example'], rows: [
            ['background: in progress at that moment', 'past continuous', 'I was waiting for the bus.'],
            ['event: a complete action', 'past simple', 'A car stopped next to me.'],
            ['events one after the other', 'past simple', 'The door opened and a woman got out.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Think of the past continuous as a film that is already playing, and the past simple as something that **interrupts** the film: *I **was watching** TV **when** the phone **rang**.*' },
        ],
        [
          { t: 'text', md: '**When** and **while** join the two layers. **While** usually goes with the longer action, in the past continuous: *While I **was cooking**, the baby **woke up**.* **When** usually goes with the short action, in the past simple: *I **was cooking** when the baby **woke up**.*\n\nTwo actions in progress at the same time can both be in the past continuous: *While my brother **was studying**, I **was playing** music.*\n\nRemember that some verbs are rarely continuous, because they are states, not actions: *know, want, like, believe, belong*. Say *I **knew** the answer*, not *I was knowing*.' },
          { t: 'examples', items: [
            { s: 'I **was walking** home **when** I **saw** an old friend.', n: 'Background, then the interruption.' },
            { s: '**While** we **were having** dinner, somebody **knocked** at the door.', n: '*While* + the longer action.' },
            { s: 'What **were** you **doing** at ten last night?', n: 'A question about a moment in progress.' },
            { s: 'She **was reading** and he **was listening** to the radio.', n: 'Two actions in progress at the same time.' },
            { s: 'I **didn’t know** his name.', n: '*Know* is a state: no continuous.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['When I walked home, it rained.', 'When I was walking home, it was raining.', 'The background is in progress: past continuous.'],
            ['I was seeing an accident yesterday.', 'I saw an accident yesterday.', 'A short, complete event: past simple.'],
            ['While I cooked, the phone was ringing.', 'While I was cooking, the phone rang.', 'The long action is continuous; the interruption is simple.'],
            ['I was knowing the answer.', 'I knew the answer.', '*Know* is a state verb.'],
          ] },
          { t: 'dialogue', title: 'A strange evening', lines: [
            { who: 'Grace', s: 'You look tired. What happened last night?' },
            { who: 'Ben', s: 'Well, I was working late and everyone else was going home.' },
            { who: 'Grace', s: 'And?' },
            { who: 'Ben', s: 'While I was finishing a report, all the lights went out.' },
            { who: 'Grace', s: 'Oh no! What did you do?' },
            { who: 'Ben', s: 'I was looking for my phone when I heard footsteps. It was the cleaner! She was laughing because I was hiding under the desk.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
            { q: 'I ___ along the beach when I found a ring.', o: ['was walking', 'walked', 'were walking'], why: 'Background in progress: past continuous, with *I was*.' },
            { q: 'While they were playing football, it ___ to snow.', o: ['started', 'was starting', 'starts'], why: 'The interruption is a complete event: past simple.' },
            { q: 'What ___ when the fire alarm went off?', o: ['were you doing', 'did you do', 'you were doing'], why: 'A question about an action in progress: *were you doing*.' },
            { q: 'I ___ who he was until he said his name.', o: ['didn’t know', 'wasn’t knowing', 'don’t know'], why: '*Know* is a state verb: past simple.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the verb in the past simple or the past continuous.', items: [
            { q: 'The sun was shining and the birds ___ (sing).', a: ['were singing'], why: 'More background: past continuous.' },
            { q: 'I ___ (drop) my keys while I was getting off the bus.', a: ['dropped'], why: 'The short event: past simple.' },
            { q: 'She was driving to work when her car ___ (break) down.', a: ['broke'], why: 'The interruption: irregular past simple *broke*.' },
            { q: 'We ___ (watch) a film when the neighbours started shouting.', a: ['were watching'], why: 'The action in progress: past continuous.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'When I arrived, my friends [ate] dinner, so I joined them.', a: ['were eating'], why: 'They were in the middle of dinner: past continuous.' },
            { s: 'While I [walked] in the park, I met my old teacher.', a: ['was walking'], why: '*While* + the longer action in progress.' },
            { s: 'I [was hearing] a strange noise in the kitchen.', a: ['heard'], why: 'A short event: past simple.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam (Listening part 1): read the short text and choose the right answer.', items: [
            { q: '“I was waiting at the bus stop for twenty minutes, and then my sister drove past and gave me a lift.” How did the speaker get home?', o: ['by car', 'by bus', 'on foot'], why: 'She waited for the bus, but her sister *gave her a lift* in her car.' },
            { q: '“We were having a picnic when it started to rain, so we finished our lunch in the café next to the park.” Where did they finish lunch?', o: ['in a café', 'in the park', 'at home'], why: 'They moved to the café when it rained.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Listening part 1 you hear a short recording and choose one of three pictures. All three things are usually **mentioned**. Listen for what **really** happened in the end, not just the first thing you hear.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'sofia', items: [
            { a: 'I was walking home when I saw an old friend.' },
            { a: 'While we were having dinner, somebody knocked at the door.' },
            { a: 'What were you doing at ten last night?' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'When I arrived, the film had started',
      about: 'Use the past perfect to show that one past action happened before another.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'Sometimes a story goes **back in time**. You are telling what happened at a moment in the past, and you need to mention something that happened **even earlier**. For that earlier action English uses the **past perfect**: *had* + past participle.\n\n*When I got to the cinema, the film **had started**.* First the film started, then I arrived. Compare: *When I got to the cinema, the film **started**.* Here I arrived, and then it started: I saw the beginning.\n\nThe form is the same for every person: *I had gone, she had gone, they had gone*. The short form is **’d**: *I’d already eaten.*' },
          { t: 'table', caption: 'The past perfect', quiz: true, explain: ['head'], head: ['', 'Example'], rows: [
            ['positive', 'She had left.'],
            ['short form', 'She’d left.'],
            ['negative', 'She hadn’t left.'],
            ['question', 'Had she left?'],
          ] },
          { t: 'tip', art: 'owl', md: 'Use the past perfect only when the order of events is important or not clear. If you tell events in order, the past simple is enough: *I finished work, went home and cooked dinner.*' },
        ],
        [
          { t: 'text', md: 'Words like **already**, **just**, **never … before** and **by the time** often go with the past perfect.\n\n*By the time the police arrived, the thief **had** already **gone**.*\n*I **had never seen** snow before I moved to Canada.*\n*She was sad because her best friend **had just moved** to another city.*\n\nThe past perfect also helps to **explain** a situation in the past: *I was hungry because I **hadn’t eaten** all day.*' },
          { t: 'examples', items: [
            { s: 'When we reached the station, the train **had left**.', n: 'The train left first: we missed it.' },
            { s: 'When we reached the station, the train **left**.', n: 'We arrived, then it left: we were on time.' },
            { s: 'I **had never flown** before that trip.', n: 'An experience up to a point in the past.' },
            { s: 'He couldn’t pay because he **had lost** his wallet.', n: 'The earlier action explains the problem.' },
            { s: '**Had** you **met** her before the party?', n: 'A question about an earlier time.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['When I arrived, everyone left.', 'When I arrived, everyone had left.', 'They left before I arrived.'],
            ['I had gone to Paris last year.', 'I went to Paris last year.', 'No earlier past action: past simple.'],
            ['She had forget her keys.', 'She had forgotten her keys.', 'After *had*: the past participle.'],
            ['I never saw the sea before 2019.', 'I had never seen the sea before 2019.', 'Experience up to a point in the past.'],
          ] },
          { t: 'reading', title: 'The wrong house', md: 'Last summer my cousin Tom drove to a village by the sea to stay with friends. It was late when he arrived, and he was tired because he had driven for six hours.\n\nThe front door was open, so he went in. He was surprised: the house was much bigger than he had imagined. He found a bed upstairs and fell asleep at once.\n\nIn the morning, an old woman woke him up. She was holding a cup of tea. Tom realised he had chosen the wrong house! His friends lived next door. Luckily, the woman laughed. She had seen his car and had guessed what had happened.' },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Read “The wrong house”. Are the sentences true or false?', items: [
            { q: 'Tom was tired because he had driven a long way.', a: 't', why: '*He had driven for six hours.*' },
            { q: 'Tom had visited the house many times before.', a: 'f', why: 'It was bigger than he *had imagined*: he did not know it.' },
            { q: 'The old woman was angry.', a: 'f', why: '*Luckily, the woman laughed.*' },
            { q: 'Tom’s friends lived in the next house.', a: 't', why: '*His friends lived next door.*' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the verb in the past perfect.', items: [
            { q: 'By the time we got there, the shop ___ (close).', a: ['had closed', '’d closed'], why: 'The shop closed first: *had closed*.' },
            { q: 'I recognised her because I ___ (see) her photo before.', a: ['had seen', '’d seen'], why: 'Earlier experience: *had seen*.' },
            { q: 'They were hungry because they ___ (not eat) since breakfast.', a: ['hadn’t eaten', 'had not eaten'], why: 'Negative past perfect: *hadn’t eaten*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Join the two sentences with “when” and the past perfect.', items: [
            { q: 'The concert started. Then we arrived.', cue: 'When we arrived', a: ['When we arrived, the concert had started.', 'When we arrived, the concert had already started.'], why: 'The concert started first: past perfect.' },
            { q: 'My friends ate all the cake. Then I got home.', cue: 'When I got home', a: ['When I got home, my friends had eaten all the cake.'], why: 'They ate it before I arrived.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam (Reading part 5): choose the word that best fits each gap.', items: [
            { q: 'When Maria opened the letter, she saw that someone ___ already read it.', o: ['had', 'has', 'was'], why: 'Someone read it before she opened it: *had read*.' },
            { q: 'I was nervous because I had ___ given a speech before.', o: ['never', 'ever', 'yet'], why: '*had never* + past participle for experience.' },
            { q: 'By the ___ the taxi came, we were very late.', o: ['time', 'moment when', 'hour'], why: 'The fixed phrase is *by the time*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Reading part 5 is a short text with six gaps. Many gaps test **grammar words**: *had, been, already, by the time*. Read the whole sentence, and check the time: is this action before another one?' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'When we reached the station, the train had left.' },
            { a: 'I had never flown before that trip.' },
            { a: 'She was hungry because she hadn’t eaten all day.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'As soon as, by the time, in the end',
      about: 'Use time words to put the events of a story in order and make it easy to follow.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Time words are the signposts of a story. They tell the listener **when** something happened and in **what order**.\n\nTo begin: **at first**, **one day**, **last summer**, **a few years ago**. To continue: **then**, **after that**, **later**, **the next day**. To show speed: **as soon as** (immediately after), **suddenly**. To end: **finally**, **in the end**, **eventually**.\n\nNotice the difference between **at the end** and **in the end**. *At the end of the film* is the last part of something. *In the end* means "finally, after some problems or changes": *We got lost twice, but in the end we found the hotel.*' },
          { t: 'table', caption: 'Time words in a story', explain: ['head', 'col0'], head: ['Use', 'Words'], rows: [
            ['to start', 'one day, a few years ago, at first'],
            ['to continue', 'then, after that, later, the next day, afterwards'],
            ['something fast', 'as soon as, suddenly, immediately'],
            ['up to a moment', 'by the time, until'],
            ['to finish', 'finally, in the end, eventually'],
          ] },
        ],
        [
          { t: 'text', md: '**As soon as**, **when**, **after**, **before**, **until** and **by the time** join two clauses. After them, use a past tense, never *would* or *will*.\n\n*As soon as I **saw** the message, I called her.* (I called immediately.)\n*I waited **until** the rain **stopped**.* (I waited, then the rain stopped and I left.)\n*By the time she **arrived**, we **had finished** dinner.* (By the time + past simple, then often the past perfect.)\n\n**After** often takes **-ing** too: *After **finishing** work, I went to the gym.*' },
          { t: 'examples', items: [
            { s: '**As soon as** the doors opened, everyone ran in.', n: 'Immediately after.' },
            { s: 'We stayed at the beach **until** it got dark.', n: 'Up to that moment.' },
            { s: '**By the time** I found my glasses, the bus had gone.', n: 'Before that moment, and the past perfect.' },
            { s: '**After** leaving school, she worked in a hotel.', n: '*After* + -ing.' },
            { s: 'The trip was difficult, but **in the end** we had a great time.', n: 'Finally, after problems.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['At the end we found the hotel.', 'In the end we found the hotel.', 'Finally, after problems: *in the end*.'],
            ['As soon as I will arrive, I call you.', 'As soon as I arrived, I called you.', 'No *will* after *as soon as* in a past story.'],
            ['I waited since the rain stopped.', 'I waited until the rain stopped.', 'Up to a moment: *until*.'],
            ['After finish work, I went home.', 'After finishing work, I went home.', '*After* + -ing.'],
          ] },
          { t: 'dialogue', title: 'The job interview', lines: [
            { who: 'Lucy', s: 'How was the interview?' },
            { who: 'Karim', s: 'It started badly. At first I couldn’t find the building.' },
            { who: 'Lucy', s: 'Oh no.' },
            { who: 'Karim', s: 'By the time I found it, I was ten minutes late. But as soon as I sat down, I felt calm.' },
            { who: 'Lucy', s: 'And then?' },
            { who: 'Karim', s: 'They asked me lots of questions. After that I met the team. In the end they offered me the job!' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'I called you ___ I heard the news.', o: ['as soon as', 'until', 'at the end'], why: 'Immediately after: *as soon as*.' },
            { q: 'We waited ___ the last train arrived.', o: ['until', 'as soon as', 'by'], why: 'Up to that moment: *until*.' },
            { q: 'I didn’t like the city at first, but ___ I loved it.', o: ['in the end', 'at the end', 'at first'], why: 'Finally, after a change: *in the end*.' },
            { q: '___ the end of the concert, everyone stood up.', o: ['At', 'In', 'By'], why: 'The last part of something: *at the end of*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'As soon as I got home, I made a cup of tea.', why: '*As soon as* + past, then the main clause.' },
            { a: 'By the time we arrived, the party had finished.', why: '*By the time* + past simple, then the past perfect.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'bank', h: 'Complete the story with the words.', extra: ['since', 'at the end'], items: [
            { q: '___ last spring, my sister decided to learn to swim.', a: 'One day', why: 'A start for a story.' },
            { q: '___ she was afraid of the water.', a: 'At first', why: 'The beginning of a change.' },
            { q: 'She practised ___ she could swim one length.', a: 'until', why: 'Up to that moment.' },
            { q: '___, she swam across the lake with her friends.', a: 'In the end', why: 'Finally, after a lot of work.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam (Reading part 3): read the text and choose the right answer.', items: [
            { q: 'Karim says: “At first I couldn’t find the building, and by the time I found it I was late. But as soon as I sat down I felt calm.” How did Karim feel during the interview?', o: ['relaxed', 'nervous', 'angry'], why: '*As soon as I sat down, I felt calm.*' },
            { q: 'Karim says: “After that I met the team. In the end they offered me the job.” What happened last?', o: ['He got a job offer.', 'He met the team.', 'He arrived late.'], why: '*In the end* marks the last event.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Reading part 3 you read a longer text and answer questions about feelings and opinions. Time words like *at first*, *but* and *in the end* often show a **change** of feeling. The answer is usually the feeling **after** the change.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'omar', items: [
            { a: 'As soon as I saw the message, I called her.' },
            { a: 'By the time I found my glasses, the bus had gone.' },
            { a: 'It was difficult, but in the end we had a great time.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'Writing a short story',
      about: 'Plan and write a short story of about 100 words, as in B1 Preliminary Writing part 2.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'In the B1 Preliminary exam you can choose to write a **story** of about **100 words**. You get the **first sentence**, and you continue the story. A good story has a clear shape:\n\n**The beginning** sets the scene: who, where, when, and the background (past continuous).\n\n**The middle** tells the main events in order (past simple, time words), and sometimes goes back in time (past perfect).\n\n**The end** says how it finished and how people felt: *in the end, finally, I was so relieved*.\n\nUse the tenses from this unit, a few time words, and one or two interesting adjectives: *terrified, delighted, exhausted, relieved*.' },
          { t: 'table', caption: 'The shape of a story', explain: ['head', 'col0', 'col1'], head: ['Part', 'What you write', 'Example'], rows: [
            ['beginning', 'scene and background', 'It was a cold evening and I was walking home.'],
            ['middle', 'events in order, with time words', 'Suddenly I heard a noise. As soon as I turned round…'],
            ['end', 'how it finished and how you felt', 'In the end I laughed. I was so relieved.'],
          ] },
        ],
        [
          { t: 'reading', title: 'A model story: “When I opened the door, I couldn’t believe my eyes.”', md: 'When I opened the door, I couldn’t believe my eyes. My kitchen was full of balloons!\n\nI had been away for a week, and while I was travelling home I was thinking only about my bed. I was exhausted.\n\nSuddenly, my friends jumped out from behind the sofa and shouted “Happy birthday!” I had completely forgotten that it was my birthday. They had planned the party for weeks.\n\nAt first I didn’t know what to say. Then I started laughing. In the end we danced until midnight, and it was the best birthday of my life.' },
          { t: 'tip', art: 'owl', md: 'Count the tenses in the model: past simple for events (*opened, jumped*), past continuous for background (*was travelling, was thinking*), past perfect for earlier events (*had been away, had forgotten*). A mix like this gets good marks.' },
        ],
        [
          { t: 'table', caption: 'Common mistakes in stories', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I open the door and I see…', 'I opened the door and saw…', 'Keep the story in the past.'],
            ['Then… then… then…', 'Then… After that… In the end…', 'Vary the time words.'],
            ['It was very very good.', 'It was amazing.', 'Use a stronger adjective.'],
            ['A story with no ending.', 'In the end we laughed.', 'The story needs a clear end.'],
          ] },
          { t: 'ex', kind: 'tf', h: 'Read the model story again. Are the sentences true or false?', items: [
            { q: 'The writer had been away from home.', a: 't', why: '*I had been away for a week.*' },
            { q: 'The writer remembered that it was their birthday.', a: 'f', why: '*I had completely forgotten.*' },
            { q: 'The friends planned the party at the last minute.', a: 'f', why: '*They had planned the party for weeks.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the parts of the story in order.', items: [
            { a: 'It was raining and I was waiting for the last bus.', why: 'The beginning: the scene and background.' },
            { a: 'Suddenly a car stopped and a woman asked me for directions.', why: 'The middle: an event with a time word.' },
            { a: 'In the end she gave me a lift home.', why: 'The end: how it finished.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Improve the story. Find and fix the mistake.', items: [
            { s: 'Last year I [go] to a music festival with my brother.', a: ['went'], why: 'The story is in the past.' },
            { s: 'While we [danced], it started to rain.', a: ['were dancing'], why: 'Background in progress: past continuous.' },
            { s: '[At the end] we found our tent and went to sleep.', a: ['In the end', 'Finally'], why: 'Finally, after problems: *in the end*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam (Writing part 2): which is the best way to continue the story “The phone rang at three o’clock in the morning.”?', items: [
            { q: '', o: ['I was sleeping deeply, so at first I didn’t hear it. When I finally answered, it was my brother.', 'I sleep and the phone is ringing. I answer.', 'Phones are very useful in the modern world.'], why: 'Past tenses, a time word and a clear next event.' },
            { q: '', o: ['In the end, I was so relieved that everyone was safe.', 'In the end I am happy.', 'At the end of the phone.'], why: 'A past tense, a clear ending and a feeling.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Writing part 2 you choose an **article** or a **story**. For the story, you must use the first sentence you are given. Plan for one minute: what is the background, what are two or three events, how does it end? Then write about 100 words.' },
          { t: 'ex', kind: 'speak', h: 'Tell the start of a story. Say these sentences after the tutor.', tutor: 'mei', items: [
            { a: 'It was a cold evening and I was walking home.' },
            { a: 'Suddenly I heard a noise behind me.' },
            { a: 'In the end I laughed. It was only my neighbour’s cat.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
      { q: 'I ___ a shower when the water went cold.', o: ['was having', 'had', 'have had'], why: 'Background in progress: past continuous.' },
      { q: 'While we were walking, we ___ a famous actor.', o: ['saw', 'were seeing', 'had seen'], why: 'The short event: past simple.' },
      { q: 'When I got to the party, my friends ___ home.', o: ['had gone', 'went', 'were going'], why: 'They left before I arrived: past perfect.' },
      { q: 'I didn’t like the book at first, but ___ I loved it.', o: ['in the end', 'at the end', 'until'], why: 'Finally, after a change.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the verb in the right past tense.', items: [
      { q: 'It ___ (snow) when we left the house.', a: ['was snowing'], why: 'Background: past continuous.' },
      { q: 'She was tired because she ___ (not sleep) well.', a: ['hadn’t slept', 'had not slept'], why: 'Earlier reason: past perfect.' },
      { q: 'As soon as the bell rang, the children ___ (run) outside.', a: ['ran'], why: 'An event: irregular past simple.' },
      { q: 'I ___ (never/see) the sea before I was twenty.', a: ['had never seen', '’d never seen'], why: 'Experience up to a point in the past.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'When I arrived, the film [started] already.', a: ['had started', 'had already started'], why: 'It started before I arrived.' },
      { s: 'I [was knowing] the answer, but I didn’t say it.', a: ['knew'], why: '*Know* is a state verb: *I knew*.' },
      { s: 'After [finish] dinner, we went for a walk.', a: ['finishing'], why: '*After* + -ing.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Join the sentences.', items: [
      { q: 'The bus left. Then we got to the stop.', cue: 'When we got to the stop', a: ['When we got to the stop, the bus had left.', 'When we got to the stop, the bus had already left.'], why: 'The earlier action: past perfect.' },
      { q: 'I was cooking. The phone rang.', cue: 'While', a: ['While I was cooking, the phone rang.'], why: '*While* + the long action, then the interruption.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the two halves.', pairs: [
      ['I waited at the café', 'until my friend arrived.'],
      ['As soon as I saw the message,', 'I called her.'],
      ['By the time the police came,', 'the thief had escaped.'],
      ['We got lost twice, but', 'in the end we found the hotel.'],
    ] },
  ],
};
