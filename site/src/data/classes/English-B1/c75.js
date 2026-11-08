// English B1, class 75 (docs/LESSONS_PLAN.md). Builds on book lesson u15:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c75',
  focus: 'By the end of the class every student has understood a longer story of a personal challenge and can retell a challenge of their own, using the whole of unit 15 together: *managed to* and *couldn’t*, *better and better* and *the more …, the more …*, and sport and fitness words.',
  tips: [
    'Read the text once for the story and once for the language. Do not explain every word before the first reading.',
    'When students retell, listen for the past tenses: a challenge story needs past simple, past continuous and sometimes the past perfect.',
    'Encourage real stories. Students who prefer can tell a friend’s story or invent one.',
    'Keep the exam corner strict on time: Reading part 3 takes about ten minutes in the exam.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What is the hardest thing you have ever trained for or practised?* Two or three students answer.' },
    { min: 15, title: 'Reading', md: 'Show board page 1. Students read alone, then answer the questions. Check together.' },
    { min: 10, title: 'Language from the text', md: 'Show board page 2. Students find the forms in the text and complete the sentences.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: Reading part 3 questions on the same text. Use "Everyone solves this", then reveal.' },
    { min: 5, title: 'Close', md: 'Students say which part of unit 15 they find easiest and hardest. Set the homework.' },
  ],
  board: [
    { title: 'From the sofa to a marathon', blocks: [
      { t: 'reading', title: 'Nadia’s year', md: 'Two years ago Nadia couldn’t run for the bus without stopping to breathe. She was working long hours and spent her evenings on the sofa. Then her doctor told her that her heart was getting weaker and weaker.\n\nShe started with walking. The more she walked, the better she felt, so after two months she joined a running club. At first she couldn’t run for more than five minutes, but the coach told her to be patient.\n\nA year later Nadia managed to run her first marathon. It took her five hours, and she hurt her knee at the 30-kilometre point, but she was able to finish. “I didn’t win anything,” she says, “but I won my health back.”' },
      { t: 'ex', kind: 'tf', h: 'True or false?', items: [
        { q: 'Nadia was very fit two years ago.', a: 'f', why: 'She *couldn’t run for the bus without stopping*.' },
        { q: 'Her doctor worried about her heart.', a: 't', why: '*her heart was getting weaker and weaker*.' },
        { q: 'She stopped running when she hurt her knee.', a: 'f', why: '*she was able to finish*.' },
      ] },
    ] },
    { title: 'Language from the text', blocks: [
      { t: 'ex', kind: 'gap', h: 'Complete with one word from the text.', items: [
        { q: 'At first she ___ run for more than five minutes.', a: ['couldn’t', "couldn't"], why: 'General inability at the start: *couldn’t*.' },
        { q: 'A year later she ___ to run her first marathon.', a: ['managed'], why: 'One difficult success: *managed to*.' },
        { q: 'The more she walked, the ___ she felt.', a: ['better'], why: '*the more …, the better …*.' },
      ] },
    ] },
    { title: 'Exam corner: Reading part 3', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of B1 Preliminary Reading part 3: choose the best answer.', items: [
        { q: 'Why did Nadia start walking?', o: ['Her health was getting worse.', 'Her club asked her to.', 'She wanted to win a race.'], why: 'The doctor said her heart was getting weaker.' },
        { q: 'What did the coach tell her?', o: ['To be patient', 'To run faster', 'To stop running'], why: '*the coach told her to be patient*.' },
        { q: 'What does Nadia think about the marathon?', o: ['It gave her a healthier life.', 'It was too easy.', 'She was disappointed with her time.'], why: '*I won my health back*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Reading part 3, the last question is often about the **whole text** or the writer’s opinion. Read the ending carefully: it often gives the answer.' },
    ] },
  ],
  activities: {
    one: { title: 'Your challenge story', md: 'The student tells a challenge story in three parts, like Nadia’s: before, the training, the result. Ask questions after each part, then help them retell it in under two minutes with *managed to*, *couldn’t* and one *the more …, the more …*.' },
    small: { title: 'Interview Nadia', md: 'One student is Nadia; the others are journalists and prepare three questions each (*How did you manage to…?*, *What couldn’t you do at first?*). Change who plays Nadia after three questions.' },
    group: { title: 'Challenge plans', md: 'In breakout rooms of three, each student chooses a challenge for next year (learn to swim, run 10 km, pass B1). The room makes a plan for each one in four steps. Each room shares its most ambitious plan in the main room.' },
  },
  homework: { book: 'u15:p4', md: 'Do book lesson 4 of unit 15 (From the sofa to a marathon). Write your own challenge story in about 100 words, as a short article.' },
};
