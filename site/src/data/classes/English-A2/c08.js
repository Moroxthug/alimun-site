// English A2, class 8 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u2:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c08',
  focus: 'By the end every student uses twenty common irregular past verbs (*went, saw, had, bought…*) and makes questions and negatives with *did* and *didn’t* + the simple form. The speaking goal: ask and answer five questions about yesterday.',
  tips: [
    'The key rule: after *did* or *didn’t*, the verb goes back to the simple form. *Did you went?* and *I didn’t saw* are the top two mistakes.',
    'Learn irregular verbs in sound groups (*bought, brought, thought; drank, swam, sang*), not in alphabetical order.',
    'Use quick drills: you say the verb, students say the past; then you say the past, they say the verb.',
    'Questions with *did* work well as a chain: each student answers, then asks the next one a new question.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Quick drill: *go – went, see – saw, have – had, buy – bought*. Faster each round.' },
    { min: 10, title: 'Irregular verbs', md: 'Show board page 1. Students match the verbs, then make one true sentence with three of them.' },
    { min: 10, title: 'Did and didn’t', md: 'Show board page 2. Students fix the mistakes, then make questions for the chain.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: choose the word, in the format of A2 Key Reading Part 4.' },
    { min: 10, title: 'Close', md: 'Each student asks you one question about yesterday. Set the homework.' },
  ],
  board: [
    { title: 'Irregular verbs', blocks: [
      { t: 'ex', kind: 'match', h: 'Match the verb and its past form.', pairs: [
        ['go', 'went'],
        ['buy', 'bought'],
        ['see', 'saw'],
        ['make', 'made'],
        ['eat', 'ate'],
        ['take', 'took'],
      ] },
      { t: 'ex', kind: 'gap', h: 'Write the past simple.', items: [
        { q: 'I ___ (get) up late this morning.', a: ['got'], why: '*get – got*.' },
        { q: 'We ___ (have) pizza for dinner.', a: ['had'], why: '*have – had*.' },
        { q: 'She ___ (think) it was a good idea.', a: ['thought'], why: '*think – thought*.' },
      ] },
    ] },
    { title: 'Did and didn’t', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'Did you [went] to the party?', a: ['go'], why: '*did* + the simple form.' },
        { s: 'I didn’t [saw] him yesterday.', a: ['see'], why: '*didn’t* + the simple form.' },
        { s: 'We [goed] to the beach.', a: ['went'], why: '*go* is irregular: *went*.' },
        { s: 'What [you did] at the weekend?', a: ['did you do'], why: 'Question: *What did you do…?*' },
      ] },
      { t: 'ex', kind: 'transform', h: 'Make a question with did.', items: [
        { q: 'She bought a new car.', cue: 'Did', a: ['Did she buy a new car?'], why: '*Did* + subject + simple form.' },
        { q: 'They went to Spain.', cue: 'Where', a: ['Where did they go?'], why: 'Question word + *did* + subject + simple form.' },
      ] },
    ] },
    { title: 'Exam corner: choose the word', blocks: [
      { t: 'reading', title: 'A message from Ben', md: 'Hi Kim, I ___ you at the station yesterday but you didn’t ___ me! Where were you going? I was with my brother. We ___ the train to Bristol for a concert.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam (Reading, Part 4): choose the right word for each gap.', items: [
        { q: 'I ___ you at the station yesterday.', o: ['saw', 'see', 'seen'], why: '*yesterday*: past simple *saw*.' },
        { q: 'You didn’t ___ me!', o: ['see', 'saw', 'seeing'], why: 'After *didn’t*: the simple form.' },
        { q: 'We ___ the train to Bristol.', o: ['took', 'taked', 'take'], why: '*take* is irregular: *took*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'If the sentence already has **did** or **didn’t**, the answer is the **simple form** of the verb. This one rule gets you many marks in Part 4.' },
    ] },
  ],
  activities: {
    one: { title: 'Yesterday, hour by hour', md: 'Ask the student ten questions about yesterday with *did* (*What time did you get up? Did you go out? What did you eat?*). The student answers with full sentences. Then swap: the student asks you. Correct *did* + past mistakes on the spot.' },
    small: { title: 'Find someone who… yesterday', md: 'Prompts in the chat: *…went shopping, …saw a friend, …cooked dinner, …took a bus, …read a book, …didn’t watch TV.* Students ask *Did you…?* questions and find a name for each. Then report: *Ana went shopping but she didn’t buy anything.*' },
    group: { title: 'Alibi', md: 'A small crime story: a cake disappeared from the office yesterday at 3 pm. In breakout rooms, pairs agree an alibi (where they were, what they did). Other students from another room question them separately. If their answers differ, they are guilty!' },
  },
  homework: { book: 'u2:p2', md: 'Do lesson 2 of unit 2 in the book. Write eight questions with *did* that you would ask a friend about their last holiday.' },
};
