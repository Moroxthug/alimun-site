// English B2, class 7 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u2:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c07',
  focus: 'By the end every student uses the past perfect continuous to explain the background and cause of a past situation (*She was tired because she had been working all night*) and knows when the simple past perfect is better. The speaking goal: explain why something went wrong, using the cause behind it.',
  tips: [
    'The past perfect continuous answers *why* and *how long* before a past moment: *His eyes were red because he had been crying*.',
    'Like the present perfect continuous, it is not used with state verbs: *had known*, not *had been knowing*.',
    'For a number of completed actions, use the simple: *She had written three emails*, not *had been writing three emails*.',
    'Students often skip it and use the past simple. That is not wrong, but at B2 First it shows range. Reward its use in speaking.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Show a picture idea: *A man is soaking wet and smiling.* Ask: *Why? What had he been doing?*' },
    { min: 12, title: 'Cause and duration', md: 'Show board page 1. Students complete the sentences, then make one about their own week.' },
    { min: 10, title: 'Simple or continuous?', md: 'Show board page 2. Students choose and explain.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: B2 First Use of English Part 4. Students rewrite alone, then compare.' },
    { min: 5, title: 'Close', md: 'Each student explains one past feeling with its cause. Set the homework.' },
  ],
  board: [
    { title: 'Why? How long?', blocks: [
      { t: 'ex', kind: 'gap', h: 'Write the past perfect continuous of the verb.', items: [
        { q: 'The ground was wet because it ___ (rain) all night.', a: ['had been raining'], why: 'The cause of a past situation, over a period.' },
        { q: 'She ___ (wait) for over an hour when the doctor finally called her.', a: ['had been waiting'], why: 'Duration up to a moment in the past.' },
        { q: 'They were exhausted because they ___ (drive) since dawn.', a: ['had been driving'], why: 'An activity continuing up to the past moment.' },
      ] },
    ] },
    { title: 'Simple or continuous?', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the better form.', items: [
        { q: 'By midnight, I ___ four chapters of the book.', o: ['had read', 'had been reading'], why: 'A number of completed things: the simple.' },
        { q: 'I ___ him for years before we worked together.', o: ['had known', 'had been knowing'], why: '*know* is a state verb.' },
        { q: 'My hands were black because I ___ the car.', o: ['had been fixing', 'had fixed'], why: 'A visible effect of an activity: the continuous.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the B2 First exam (Reading and Use of English, Part 4): complete the second sentence so it means the same as the first, using the word given.', items: [
        { q: 'He started working at the bank in 2010 and left in 2020.', cue: 'BEEN', a: ['He had been working at the bank for ten years when he left.', 'He had been working at the bank for ten years before he left.'], why: 'Duration up to a past moment: past perfect continuous.' },
        { q: 'I only realised it was late when I looked at my watch.', cue: 'UNTIL', a: ['I didn’t realise it was late until I looked at my watch.', 'I did not realise it was late until I looked at my watch.'], why: '*only… when* becomes *not… until*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Part 4 often changes the tense or the structure, not just one word. Check that your sentence still means exactly the same.' },
    ] },
  ],
  activities: {
    one: { title: 'Detective', md: 'Describe five past scenes (*The kitchen was a mess. The teenager looked guilty.*). The student explains each with the past perfect continuous. Then swap: the student describes scenes and you explain.' },
    small: { title: 'What went wrong?', md: 'Each student tells a short story of a day that went wrong, ending with the result. The others ask *What had you been doing before that?* and guess the cause.' },
    group: { title: 'Excuses', md: 'Breakout rooms of three invent the most creative excuses for arriving late, being tired or forgetting a birthday, each with the past perfect continuous. Each room shares its best excuse.' },
  },
  homework: { book: 'u2:p2', md: 'Finish lesson 2 of unit 2, then do lesson 3 (Eventually, it turned out). Write six sentences explaining past feelings with their causes.' },
};
