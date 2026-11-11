// English B2, class 78 (docs/LESSONS_PLAN.md). Builds on book lesson u16:p3 (all the B2 grammar together). Draft for the owner's review.
export const LESSON = {
  id: 'c78',
  focus: 'By the end of the class every student can choose the right structure in a mixed B2 text: tenses (perfect, continuous, future perfect), conditionals and wish, the passive, reported speech, relative and participle clauses, and modals of deduction and regret. They correct their own typical errors and know which two areas they personally need to revise before the exam.',
  tips: [
    'This class is about choosing, not learning new grammar. Ask *Why this form?* after every answer.',
    'Keep a list of the class’s typical errors on the board during the lesson; it becomes the correction slot.',
    'Students who finish early can write their own sentence for each structure.',
    'End with each student naming two areas to revise: it makes the homework personal.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Read aloud: *By the time I finish this course, I…* Each student completes it with the future perfect.' },
    { min: 15, title: 'Mixed text', md: 'Show board page 1. Students read the text and choose the forms alone, then compare.' },
    { min: 10, title: 'Find the mistake', md: 'Show board page 2. Students correct the sentences and say which grammar area each one tests.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: B2 First Part 3 word formation. Solve and reveal.' },
    { min: 5, title: 'Close', md: 'Each student names two areas to revise. Set the homework.' },
  ],
  board: [
    { title: 'One text, all the grammar', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
        { q: 'The bridge, ___ in 1887, still carries thousands of cars a day.', o: ['built', 'building', 'was built'], why: 'Participle clause with a passive meaning.' },
        { q: 'By 2030, the city ___ a second bridge.', o: ['will have built', 'will build', 'builds'], why: 'Future perfect: finished before a future time.' },
        { q: 'If the engineers ___ the river better, the first bridge wouldn’t have fallen.', o: ['had studied', 'studied', 'would study'], why: 'Third conditional.' },
        { q: 'They ___ have known about the problem: there were warnings in the newspapers.', o: ['must', 'can’t', 'needn’t'], why: 'Deduction about the past: sure it was true.' },
        { q: 'The mayor said that the bridge ___ safe.', o: ['was', 'is being', 'has'], why: 'Reported statement: tense moves back.' },
      ] },
    ] },
    { title: 'Find the mistake', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'I [have been knowing] her for years.', a: ['have known'], why: 'State verbs like *know* do not use the continuous.' },
        { s: 'I wish I [didn’t say] that yesterday.', a: ['hadn’t said', 'had not said'], why: 'Past regret: *wish* + past perfect.' },
        { s: 'The report [was wrote] by two students.', a: ['was written'], why: 'Passive: past participle *written*.' },
        { s: 'She suggested [to go] to the coast.', a: ['going'], why: '*suggest* + -ing.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 3', blocks: [
      { t: 'ex', kind: 'wordform', h: 'In the format of B2 First Part 3: use the word in capitals to form a word that fits.', items: [
        { q: 'The engineers showed great ___ when the river flooded.', base: 'BRAVE', a: ['bravery'], why: 'A noun is needed: *bravery*.' },
        { q: 'The new design was completely ___.', base: 'SUCCESS', a: ['unsuccessful'], why: 'The context is negative: *unsuccessful*.' },
        { q: 'There was a ___ increase in traffic after the bridge opened.', base: 'DRAMA', a: ['dramatic'], why: 'An adjective before a noun: *dramatic*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In B2 First Part 3 decide first what kind of word the gap needs (noun, adjective, adverb, verb), then whether it is positive or negative, singular or plural.' },
    ] },
  ],
  activities: {
    one: { title: 'Grammar doctor', md: 'The student brings or writes five sentences from their recent homework. Together you diagnose each mistake by grammar area and write the correct version. Finish with a personal list of three areas to revise.' },
    small: { title: 'One story, every tense', md: 'Students build a story about a famous building together. Each sentence must use a different structure from today (participle clause, future perfect, third conditional, deduction…). The group checks each sentence.' },
    group: { title: 'Grammar auction', md: 'Share ten sentences in the chat, some correct and some wrong. In breakout rooms of three, teams "buy" the sentences they think are correct with a budget of 100 points. Reveal; the team with the most correct sentences wins.' },
  },
  homework: { book: 'u16:p3', md: 'Finish book unit 16, lesson 3. Revise your two weakest grammar areas in the book units and write five sentences for each.' },
};
