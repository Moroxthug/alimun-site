// English B2, class 46 (docs/LESSONS_PLAN.md). Builds on book lesson u10:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c46',
  focus: 'By the end of the class every student can talk about unnecessary actions in the past and tell **needn’t have done** (you did it, but it was not necessary) from **didn’t need to do** (it was not necessary, and usually you did not do it). Students use both in short stories about worries, preparations and wasted effort.',
  tips: [
    'The key difference: *needn’t have done* always means the action **happened**. *Didn’t need to do* usually means it did not happen (but context can change that). Put the two on the board with a tick and a cross.',
    'Many learners say *I didn’t need to worry* when they did worry. Ask: *Did you worry?* If yes, *you needn’t have worried*.',
    'The form after *needn’t have* is the past participle: *needn’t have bought*, not *needn’t have buy*. Correct every time.',
    'Link to the class mood: everyone has prepared too much for something. Personal stories make the form stick.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Tell a short story: *I took an umbrella this morning, but it was sunny all day.* Ask: *Was the umbrella necessary?*' },
    { min: 12, title: 'Two forms', md: 'Board page 1. Explain the table with ticks and crosses; students make one sentence of each about their week.' },
    { min: 10, title: 'Practice', md: 'Board page 2. The class solves the exercise and the mistake hunt together.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Board page 3: Use of English Part 4. Students work alone, then compare and discuss what changed in each sentence.' },
    { min: 5, title: 'Close', md: 'Each student finishes the sentence *Last week I needn’t have…*. Set the homework.' },
  ],
  board: [
    { title: 'Needn’t have or didn’t need to?', blocks: [
      { t: 'table', caption: 'Unnecessary actions in the past', explain: ['head', 'col2'], head: ['Form', 'Example', 'Did it happen?'], rows: [
        ['needn’t have + past participle', 'You needn’t have brought a present.', 'Yes, but it was not necessary.'],
        ['didn’t need to + verb', 'I didn’t need to cook: we ate out.', 'Usually no: it was not necessary, so I did not.'],
        ['didn’t have to + verb', 'We didn’t have to wait long.', 'No obligation (often the same as didn’t need to).'],
      ] },
      { t: 'tip', art: 'owl', md: 'If you can add *…but I did it anyway*, use **needn’t have**. If you can add *…so I didn’t*, use **didn’t need to**.' },
    ] },
    { title: 'Practice', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the better form.', items: [
        { q: 'I studied all weekend, but the exam was easy. I ___ so hard.', o: ['needn’t have studied', 'didn’t need to study'], why: 'You studied, and it was unnecessary: *needn’t have studied*.' },
        { q: 'The train was on time, so I ___ a taxi.', o: ['didn’t need to take', 'needn’t have taken'], why: 'You did not take a taxi: *didn’t need to take*.' },
        { q: 'Thanks for the flowers, but you really ___ anything!', o: ['needn’t have brought', 'didn’t need to bring'], why: 'The flowers are here, so they were brought: *needn’t have brought*.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'You needn’t have [buy] the tickets; they were free.', a: ['bought'], why: 'After *needn’t have* we use the past participle.' },
        { s: 'I was so worried, but I [didn’t need to worry]: everything went well.', a: ['needn’t have worried'], why: 'You did worry, so it is *needn’t have worried*.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 4', blocks: [
      { t: 'tip', art: 'owl', md: 'Part 4 often tests the same idea in a different structure: *It wasn’t necessary for you to…* can become *You needn’t have…*. Count your words: two to five, contractions count as two.' },
      { t: 'ex', kind: 'transform', h: 'In the format of B2 First Reading and Use of English Part 4: complete the second sentence using the word given.', items: [
        { q: 'It wasn’t necessary for you to call me, but thank you. NEEDN’T', cue: 'You', a: ['You needn’t have called me, but thank you.'], why: 'You called, and it was unnecessary: *needn’t have called*.' },
        { q: 'We had plenty of food, so it wasn’t necessary to go shopping. NEED', cue: 'We had plenty of food, so we', a: ['We had plenty of food, so we didn’t need to go shopping.'], why: 'They did not go: *didn’t need to go*.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Wasted effort', md: 'The student tells you about three times they prepared too much or worried for nothing (an exam, a trip, a meeting). After each story, they sum it up with *needn’t have* and add one thing they *didn’t need to do*. Correct the participle every time.' },
    small: { title: 'Story chain', md: 'One student starts a story about a disastrous trip where they over-prepared. Each student adds a sentence with *needn’t have* or *didn’t need to*. The group then retells the full story, and everyone checks the forms.' },
    group: { title: 'Agony aunts', md: 'In breakout rooms of three, students read short problems you put in the chat (*I cancelled my holiday because of a storm that never came*). They reply as advice columnists using *needn’t have* and *didn’t need to*. Back together, each room reads its kindest reply.' },
  },
  homework: { book: 'u10:p2', md: 'Finish book lesson 2 of unit 10. Then write a short paragraph (80 words) about a time you worried or prepared for nothing, using both forms.' },
};
