// English B2, class 10 (docs/LESSONS_PLAN.md, L6). Review of units 1 and 2. Draft for the owner's review.
export const LESSON = {
  id: 'c10',
  focus: 'By the end every student uses the grammar and vocabulary of units 1 and 2 with more accuracy: present perfect simple and continuous, narrative tenses including the past perfect continuous, personality adjectives with prefixes, relationship phrasal verbs and story linkers. Speaking first: most of the class is talk, with mistakes fixed together.',
  tips: [
    'Collect typical mistakes from classes 2 to 9 before this class and put four of them on the board page.',
    'Mix grammar points deliberately: a story about a friendship uses both units at once.',
    'Give the less confident students the first, easier turns and the stronger students the follow-up questions.',
    'End with a clear next step: the two unit tests are the homework, and students should note their weakest area.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Who have you got to know better recently? What happened?* Each student answers in two sentences.' },
    { min: 12, title: 'Grammar mix', md: 'Show board page 1. Students choose the right forms, then explain one choice each.' },
    { min: 10, title: 'Fix it', md: 'Show board page 2: typical mistakes from the last classes. Students correct them in pairs.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: B2 First Use of English Part 3. Students form the words alone, then compare.' },
    { min: 5, title: 'Close', md: 'Each student names one point they now feel sure about and one to practise. Set the homework.' },
  ],
  board: [
    { title: 'Units 1 and 2 together', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
        { q: 'We ___ each other since primary school.', o: ['have known', 'have been knowing', 'knew'], why: 'A state verb up to now: present perfect simple.' },
        { q: 'He was angry because he ___ for two hours.', o: ['had been waiting', 'has been waiting', 'waited'], why: 'Cause of a past situation, over a period.' },
        { q: 'I don’t know how she puts ___ with his moods.', o: ['up', 'on', 'off'], why: '*put up with*: tolerate.' },
        { q: 'We argued for hours, but ___ we agreed.', o: ['in the end', 'at the end', 'at last time'], why: '*in the end*: finally.' },
      ] },
    ] },
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'I [am working] here since March.', a: ['have been working', '’ve been working'], why: 'From the past until now: present perfect continuous.' },
        { s: 'She is very [unpatient] with beginners.', a: ['impatient'], why: '*im-* before p.' },
        { s: 'When I arrived, everybody [left].', a: ['had left'], why: 'They left before I arrived: past perfect.' },
        { s: 'My cousin and I [fell out with] last year.', a: ['fell out'], why: 'Without an object: *fell out*.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 3', blocks: [
      { t: 'ex', kind: 'wordform', h: 'In the format of the B2 First exam (Reading and Use of English, Part 3): use the word in capitals to form a word that fits the gap.', items: [
        { q: 'Her ___ to help others made her very popular.', base: 'willing', a: ['willingness'], why: 'A noun after *her*.' },
        { q: 'It was ___ of him to tell everyone my secret.', base: 'loyal', a: ['disloyal'], why: 'A negative meaning: *disloyal*.' },
        { q: 'The story had a completely ___ ending.', base: 'expect', a: ['unexpected'], why: 'An adjective with a negative prefix.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Part 3 often needs two changes at once: a prefix and a suffix (*expect* becomes *unexpected*). Check both.' },
    ] },
  ],
  activities: {
    one: { title: 'Life story interview', md: 'Interview the student about an important friendship or relationship: how they met, what happened, how it has changed. Push for both units’ grammar. Note five sentences and correct them together at the end.' },
    small: { title: 'Find the mistake', md: 'Each student tells a short true story with one deliberate grammar mistake. The others must find and fix it. Score a point for each fix and one for a well-hidden mistake.' },
    group: { title: 'Review stations', md: 'Breakout rooms of three each get one topic in the chat (tenses, phrasal verbs, linkers). Each room writes three quiz questions for the class. Bring everyone back and run the quiz.' },
  },
  homework: { book: 'u1 u2', md: 'Do the unit 1 test and the unit 2 test in the book. Note your weakest area and practise it for 30 minutes before the next class.' },
};
