// English B2, class 80 (docs/LESSONS_PLAN.md). Review of units 15 and 16 (Risk and challenge; Ready for B2 First and beyond). Draft for the owner's review.
export const LESSON = {
  id: 'c80',
  focus: 'By the end of the class every student has reused the language of units 15 and 16 in speaking and in exam tasks: inversion for emphasis, collocations with take, make, do and have, idioms for risk, and the Use of English techniques for Parts 2 and 4. Mistakes from the unit tests are corrected, and each student knows what to revise before the practice exam.',
  tips: [
    'Start from the students’ own mistakes in units 15 and 16 if you have seen their tests or homework.',
    'Keep the speaking parts long: this is a review, so students should talk more than you.',
    'Mix controlled practice (board exercises) with free speaking so you can see who can use the language without help.',
    'Remind students that the practice exam and the level test are coming: this review is part of their preparation.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Each student says one sentence starting *Never have I…* about the course.' },
    { min: 12, title: 'Grammar and words', md: 'Show board page 1. Students solve it with "Everyone solves this", then reveal.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Fix it', md: 'Show board page 2 with typical mistakes; add the ones you collected.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: B2 First Part 4. Solve and reveal.' },
    { min: 8, title: 'Close', md: 'Each student names two areas to revise before the practice exam. Set the homework.' },
  ],
  board: [
    { title: 'Units 15 and 16', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
        { q: 'Not only ___ the race, but he also raised money for charity.', o: ['did he finish', 'he finished', 'finished he'], why: 'Unit 15: inversion with *did*.' },
        { q: 'She ___ a big risk when she moved abroad alone.', o: ['took', 'made', 'did'], why: 'Unit 15: *take a risk*.' },
        { q: 'All those hours of practice really ___ off.', o: ['paid', 'took', 'made'], why: 'Unit 15: *pay off*.' },
        { q: 'He was going to sign, but he had second ___.', o: ['thoughts', 'ideas', 'minds'], why: 'Unit 15: *have second thoughts*.' },
      ] },
    ] },
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'Hardly had we arrived [than] it started to snow.', a: ['when'], why: '*Hardly… when*.' },
        { s: 'I [did] a mistake in the last question.', a: ['made'], why: '*make a mistake*.' },
        { s: 'Never [I have] felt so proud.', a: ['have I'], why: 'Inversion: auxiliary before subject.' },
        { s: 'In Part 4 you can write up to [seven] words.', a: ['five'], why: 'Part 4: two to five words.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of B2 First Part 4: use the word given; two to five words.', items: [
        { q: 'I tried as hard as I could in the interview.', cue: 'BEST', a: ['I did my best in the interview.'], why: '*do your best*.' },
        { q: 'Immediately after the start, the rain began.', cue: 'HARDLY', a: ['Hardly had it started when the rain began.', 'Hardly had the race started when the rain began.'], why: '*Hardly had… when*.' },
        { q: 'She finally decided to leave her job.', cue: 'DECISION', a: ['She finally made the decision to leave her job.', 'She finally made a decision to leave her job.'], why: '*make a decision*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In B2 First Part 4 there are often two changes to make, for example a collocation and a tense. Each part of the answer can earn a mark, so write what you can.' },
    ] },
  ],
  activities: {
    one: { title: 'Interview: my B2 journey', md: 'Interview the student about their year of learning English as a radio presenter would. They must use two inversions, three collocations and two idioms from units 15 and 16. Then the student interviews you.' },
    small: { title: 'Risk stories round', md: 'Each student tells a two-minute story about a risk (real or invented) using the unit language. After each story the others ask two questions and note one sentence that was especially good.' },
    group: { title: 'Exam quiz', md: 'In breakout rooms of three, teams answer ten quick questions in the chat about B2 First (times, parts, strategies) and five grammar items from units 15 and 16. Teams swap and mark.' },
  },
  homework: { book: 'u15 u16', md: 'Do the unit 15 and unit 16 tests in the book. Revise the two areas you named in class and do one Part 2 and one Part 4 practice.' },
};
