// English B2, class 43 (docs/LESSONS_PLAN.md). Builds on book lesson u9:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c43',
  focus: 'By the end of the class every student can talk about their own lifestyle with natural collocations and phrasal verbs (*take up*, *cut down on*, *give up*, *lead an active life*, *get into the habit of*), choose the right verb in a collocation without thinking, and use them in a two-minute talk. The aim is natural combinations, not single words.',
  tips: [
    'Learners translate word by word and say *do a diet* or *make sport*. Always correct to the whole chunk: **go on a diet**, **do sport**, **take exercise**.',
    'Separable phrasal verbs cause trouble with pronouns: *cut down it* is wrong. Drill **cut it down** / **cut down on it** (with *on*, it never separates).',
    'Write collocations on the board in full, with the verb, and keep them visible all class. Students will reuse what they can see.',
    'In Use of English Part 1, the options are often near-synonyms (*lead*, *live*, *have*, *keep*). Teach students to read the whole phrase, not just the gap.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What is one healthy habit you have, and one you would like to have?* Note the verbs students use; keep them for later.' },
    { min: 12, title: 'Collocations', md: 'Board page 1. Go through the table; students say which ones are true for them. Then the class does the exercise on the board.' },
    { min: 10, title: 'Phrasal verbs', md: 'Board page 2. Explain *take up*, *give up*, *cut down on*, *cut out*. Drill the pronoun pattern. Class solves the fix exercise.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Board page 3: B2 First Use of English Part 1. Students work alone for five minutes, then reveal the answers and discuss the near-synonyms.' },
    { min: 5, title: 'Close', md: 'Each student says one change they will make this month with one collocation from the board. Set the homework.' },
  ],
  board: [
    { title: 'Lifestyle collocations', blocks: [
      { t: 'table', caption: 'Verb + noun', explain: ['head', 'col1'], head: ['Collocation', 'Meaning'], rows: [
        ['lead an active life', 'move a lot, every day'],
        ['take regular exercise', 'do sport or activity often'],
        ['follow a balanced diet', 'eat a healthy mix of food'],
        ['get into the habit of (doing)', 'start doing something regularly'],
        ['break a habit', 'stop a bad habit'],
        ['keep fit', 'stay in good physical condition'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the verb that goes with the noun.', items: [
        { q: 'Since she moved to the coast, she ___ a much more active life.', o: ['leads', 'makes', 'does'], why: 'The collocation is *lead a(n) active/healthy life*.' },
        { q: 'It took me months to ___ the habit of checking my phone in bed.', o: ['break', 'cut', 'lose'], why: 'We *break* a habit.' },
        { q: 'My doctor told me to ___ more exercise.', o: ['take', 'make', 'play'], why: '*Take exercise* is the usual collocation.' },
      ] },
    ] },
    { title: 'Cutting down and taking up', blocks: [
      { t: 'text', md: '**Take up** = start a new hobby or activity: *I took up swimming last year.*\n\n**Give up** = stop completely: *He gave up smoking.*\n\n**Cut down on** = do or use less of something: *I am cutting down on sugar.*\n\n**Cut out** = stop eating or doing it completely: *She cut out coffee.*\n\nWith *take up* and *give up*, a pronoun goes in the middle: *I took **it** up.* With *cut down on*, the verb never separates: *I cut down on **it**.*' },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'I loved tennis, so I [took up it] again.', a: ['took it up'], why: 'With a pronoun, *take up* separates: *took it up*.' },
        { s: 'He is trying to [cut down sugar].', a: ['cut down on sugar'], why: 'The phrasal verb is *cut down **on*** something.' },
        { s: 'She [made] a balanced diet for a month.', a: ['followed'], why: 'We *follow* a diet.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 1', blocks: [
      { t: 'tip', art: 'owl', md: 'In Part 1, all four options often mean something similar. The right one is the one that **collocates**: read the words just before and after the gap.' },
      { t: 'ex', kind: 'choice', h: 'In the format of B2 First Reading and Use of English Part 1: choose the word that best fits each gap.', items: [
        { q: 'More people than ever are trying to ___ a healthier lifestyle.', o: ['adopt', 'catch', 'join'], why: 'We *adopt* a lifestyle (start living that way).' },
        { q: 'Doctors say we should ___ down on processed food.', o: ['cut', 'take', 'go'], why: '*Cut down on* = eat less of.' },
        { q: 'It is easier to ___ fit if you exercise with a friend.', o: ['keep', 'hold', 'make'], why: 'The fixed phrase is *keep fit*.' },
        { q: 'He finally ___ up running after his knee got better.', o: ['took', 'got', 'put'], why: '*Take up* = start a new activity.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Lifestyle interview', md: 'Interview the student for five minutes about their week: food, exercise, sleep, habits. They must use at least six collocations from the board; tick them as they appear. Then swap: they interview you and give you advice using *cut down on* and *take up*.' },
    small: { title: 'Change one thing', md: 'In pairs, each student describes a bad habit and the partner suggests two changes with phrasal verbs (*Why don’t you cut down on…? You could take up…*). Change pairs twice. Finish with each student telling the group the best advice they received.' },
    group: { title: 'The healthy-living survey', md: 'In breakout rooms of three, students write five survey questions with collocations from the board (*How often do you take regular exercise?*), ask each other and note the answers. Back together, each room reports one surprising result with a full sentence.' },
  },
  homework: { book: 'u9:p3', md: 'Finish book lesson 3 of unit 9. Then write 80 to 100 words about a habit you would like to break or take up, using at least five collocations from today.' },
};
