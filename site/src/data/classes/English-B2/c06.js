// English B2, class 6 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u2:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c06',
  focus: 'By the end every student tells a past story using the past simple for the main events, the past continuous for the background and interrupted actions, and the past perfect for what happened earlier. The speaking goal: a one-minute story where the order of events is always clear.',
  tips: [
    'Show the three tenses on a timeline: the past perfect is *before* the story, the past continuous is the *background*, the past simple *moves the story on*.',
    'Do not overuse the past perfect. When events are told in order, the past simple is enough: *I got up, had breakfast and left*.',
    'Learners often use the past continuous for a series of finished actions (*I was going and I was buying*). Correct it gently with the timeline.',
    'B2 First Writing Part 2 can be a story. Point out that clear tenses are a big part of a good mark.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Tell a 30-second story of something that happened to you on a journey. Ask students to spot the three tenses.' },
    { min: 12, title: 'Three tenses', md: 'Show board page 1. Students choose the tenses, then explain each choice with the timeline.' },
    { min: 10, title: 'What happened first?', md: 'Show board page 2. Students build sentences that make the order clear.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: B2 First Use of English Part 2. Students fill the gaps alone, then compare.' },
    { min: 5, title: 'Close', md: 'Each student gives the first sentence of a story using the past continuous. Set the homework.' },
  ],
  board: [
    { title: 'Three tenses in one story', blocks: [
      { t: 'table', caption: 'Narrative tenses', explain: ['head', 'col2'], head: ['Tense', 'Example', 'Job in the story'], rows: [
        ['past simple', 'The lights went out.', 'the main events'],
        ['past continuous', 'We were having dinner…', 'the background, an interrupted action'],
        ['past perfect', 'Someone had forgotten to pay the bill.', 'something earlier'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the best tense.', items: [
        { q: 'It ___ heavily when we finally reached the hotel.', o: ['was raining', 'rained', 'had rained'], why: 'The background at that moment: past continuous.' },
        { q: 'When I got to the station, the train ___ .', o: ['had already left', 'was leaving already', 'already left'], why: 'It left before I arrived: past perfect.' },
        { q: 'She ___ the door, turned on the light and screamed.', o: ['opened', 'had opened', 'was opening'], why: 'A series of events in order: past simple.' },
      ] },
    ] },
    { title: 'What happened first?', blocks: [
      { t: 'ex', kind: 'build', h: 'Write the sentence. Two words do not belong.', items: [
        { a: 'By the time the police arrived, the thief had escaped.', extra: ['was', 'has'], why: 'The escape came first: past perfect.' },
        { a: 'While I was waiting for the bus, I saw an old friend.', extra: ['had', 'saw'], why: 'Background in the continuous, the event in the simple.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 2', blocks: [
      { t: 'ex', kind: 'gap', h: 'In the format of the B2 First exam (Reading and Use of English, Part 2): write one word in each gap.', items: [
        { q: 'I was walking home ___ I heard someone call my name.', a: ['when'], why: 'An action interrupting the background: *when*.' },
        { q: 'I realised I ___ left my keys in the office.', a: ['had'], why: 'Leaving the keys came first: past perfect *had left*.' },
        { q: 'They had been married for ten years ___ they first went abroad together.', a: ['before'], why: 'The order of events: *before*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Part 2 gaps are often small grammar words: auxiliaries (*had*, *was*), linkers (*when*, *while*) and prepositions. Read the sentence before and after the gap.' },
    ] },
  ],
  activities: {
    one: { title: 'A story in three tenses', md: 'Give the student a first line: *I had just closed the door when I realised…* They continue for two minutes. Afterwards, write their key verbs on a timeline together and check each tense.' },
    small: { title: 'Story chain', md: 'One student starts a story with a past continuous sentence; each next student adds one sentence, using a different tense from the last one. After two rounds, the group retells the whole story.' },
    group: { title: 'Picture stories', md: 'Put three unrelated words in the chat (umbrella, wedding, phone). Breakout rooms of three build a story that uses all three and all three tenses. Each room tells it in one minute.' },
  },
  homework: { book: 'u2:p1', md: 'Finish lesson 1 of unit 2, then do lesson 2 (I’d been waiting for hours). Write a 120-word story that starts: *It was getting dark when…*' },
};
