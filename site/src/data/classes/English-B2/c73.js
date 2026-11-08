// English B2, class 73 (docs/LESSONS_PLAN.md). Builds on book lesson u15:p2 (collocations with take, make, do and have). Draft for the owner's review.
export const LESSON = {
  id: 'c73',
  focus: 'By the end of the class every student uses the most common collocations with *take*, *make*, *do* and *have* correctly when talking about decisions and risks (*take a risk*, *make a decision*, *do your best*, *have a go*), and can explain the general difference: *make* for creating or producing, *do* for tasks and activities. These collocations are tested in B2 First Use of English Part 1.',
  tips: [
    'Many languages use one verb where English uses two (*make* and *do*). Give the general rule, but insist that collocations are learned as chunks.',
    'Keep a running list on the board page and ask students to copy it into their notes: they will need it for the exam.',
    'Common mistakes: *do a mistake*, *make sport*, *take a decision* (British English prefers *make a decision*), *make a photo*.',
    'Get students to use each collocation about their own life, not just in exercises.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What is the biggest decision you have made this year?* Write the student’s collocation on the board and underline *make*.' },
    { min: 12, title: 'Four verbs', md: 'Show board page 1. Go through the table; students sort the collocations, then check together.' },
    { min: 10, title: 'In context', md: 'Show board page 2. Students fill the gaps, then say which sentences are true for them.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: B2 First Part 1. Students solve it alone, then you reveal the answers.' },
    { min: 8, title: 'Close', md: 'Each student makes one sentence with a collocation from today about next week. Set the homework.' },
  ],
  board: [
    { title: 'Take, make, do, have', blocks: [
      { t: 'table', caption: 'Common collocations', explain: ['head', 'col2'], head: ['Verb', 'Collocations', 'Idea'], rows: [
        ['take', 'a risk, a chance, part in, responsibility for', 'accepting or getting involved'],
        ['make', 'a decision, a mistake, an effort, progress, a difference', 'producing or creating something'],
        ['do', 'your best, research, a course, damage, someone a favour', 'tasks and activities'],
        ['have', 'a go, a break, an argument, second thoughts', 'experiences'],
      ] },
      { t: 'ex', kind: 'sort', h: 'Which verb goes with each phrase?', groups: ['take', 'make', 'do', 'have'], items: [
        { s: 'a risk', g: 0, why: '*take a risk*.' },
        { s: 'a mistake', g: 1, why: '*make a mistake*.' },
        { s: 'your best', g: 2, why: '*do your best*.' },
        { s: 'a go', g: 3, why: '*have a go* = try.' },
        { s: 'progress', g: 1, why: '*make progress*.' },
        { s: 'research', g: 2, why: '*do research*.' },
      ] },
    ] },
    { title: 'Decisions and risks', blocks: [
      { t: 'ex', kind: 'gap', h: 'Write take, make, do or have in the right form.', items: [
        { q: 'I finally ___ the decision to change jobs.', a: ['made'], why: '*make a decision*.' },
        { q: 'She was nervous, but she ___ a go at rock climbing.', a: ['had'], why: '*have a go*.' },
        { q: 'You have to ___ responsibility for your choices.', a: ['take'], why: '*take responsibility for*.' },
        { q: 'Just ___ your best and don’t worry about the result.', a: ['do'], why: '*do your best*.' },
        { q: 'Starting a business means ___ a lot of risks.', a: ['taking'], why: '*take a risk*.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 1', blocks: [
      { t: 'ex', kind: 'select', h: 'In the format of B2 First Part 1: choose the word that fits.', items: [
        { q: 'When he lost his job, he decided to ___ the most of it and travel.', o: ['make', 'do', 'take', 'have'], why: '*make the most of*.' },
        { q: 'The storm ___ a lot of damage to the old bridge.', o: ['did', 'made', 'took', 'had'], why: '*do damage*.' },
        { q: 'I was going to quit, but I ___ second thoughts.', o: ['had', 'made', 'did', 'took'], why: '*have second thoughts*.' },
        { q: 'Everyone in the team ___ part in the charity run.', o: ['took', 'made', 'did', 'had'], why: '*take part in*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'B2 First Part 1 often tests collocations: all four words have a similar meaning, but only one goes with the words around the gap. Read the whole phrase, not just the gap.' },
    ] },
  ],
  activities: {
    one: { title: 'Decision diary', md: 'The student describes three decisions from the last year: one good, one bad, one they are still thinking about. Each must use at least two collocations from the table. Then you ask follow-up questions using the collocations too.' },
    small: { title: 'Collocation challenge', md: 'Each student gets two phrases in the chat (*take a chance*, *make an effort*…). In one minute they tell a short story that uses both. The others listen and note which verbs were used correctly.' },
    group: { title: 'Risk survey', md: 'In breakout rooms of three, students write five survey questions with collocations (*Have you ever taken a big risk for love?*), ask each other, and report back the most surprising answer to the class.' },
  },
  homework: { book: 'u15:p2', md: 'Finish book unit 15, lesson 2. Make your own list of ten collocations with take, make, do and have, each in a sentence about your life.' },
};
