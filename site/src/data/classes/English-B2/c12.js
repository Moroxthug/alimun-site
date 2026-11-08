// English B2, class 12 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u3:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c12',
  focus: 'By the end every student uses the natural word partners of working life (meet a deadline, run a business, take on responsibility, make a decision, do overtime, reach an agreement) so their English sounds professional. The speaking goal: describe their own job or a job they want, with at least six collocations.',
  tips: [
    'Collocations cannot be guessed: *make a decision*, not *do a decision*. Teach them as chunks.',
    'Spanish, French and Italian speakers often say *take a decision* (British English accepts it, but *make* is safer).',
    'Recycle: ask students to use the collocations in a sentence about their own work immediately.',
    'B2 First Use of English Part 1 tests collocations constantly. Mention it when students choose between similar verbs.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What do you have to do every week at work or university? What is the hardest part?*' },
    { min: 12, title: 'Word partners', md: 'Show board page 1. Students match the verbs and nouns, then say which ones apply to their work.' },
    { min: 10, title: 'Make, do or take?', md: 'Show board page 2. Students choose the verb, then explain any they find surprising.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: B2 First Use of English Part 1. Students choose alone, then compare.' },
    { min: 5, title: 'Close', md: 'Each student describes their ideal job in two sentences with collocations. Set the homework.' },
  ],
  board: [
    { title: 'Word partners at work', blocks: [
      { t: 'ex', kind: 'match', h: 'Match the verbs and nouns.', pairs: [
        ['meet', 'a deadline'],
        ['run', 'a business'],
        ['take on', 'responsibility'],
        ['reach', 'an agreement'],
        ['apply for', 'a promotion'],
        ['work', 'overtime'],
      ] },
    ] },
    { title: 'Make, do or take?', blocks: [
      { t: 'ex', kind: 'colloc', h: 'Which nouns go with the verb?', items: [
        { key: 'make', o: ['a decision', 'a mistake', 'research', 'progress'], a: [0, 1, 3], why: '*make a decision, a mistake, progress*; but *do research*.' },
        { key: 'do', o: ['business', 'a meeting', 'your best', 'a course'], a: [0, 2, 3], why: '*do business, your best, a course*; but *have a meeting*.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 1', blocks: [
      { t: 'ex', kind: 'select', h: 'In the format of the B2 First exam (Reading and Use of English, Part 1): choose the word that best fits each gap.', items: [
        { q: 'We worked all weekend to ___ the deadline.', o: ['meet', 'reach', 'make'], why: '*meet a deadline*.' },
        { q: 'After long talks, the two companies ___ an agreement.', o: ['reached', 'met', 'did'], why: '*reach an agreement*.' },
        { q: 'She has ___ a lot of responsibility since her promotion.', o: ['taken on', 'taken up', 'taken in'], why: '*take on responsibility*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 1, all options often have similar meanings. Ask yourself which one collocates with the noun after the gap.' },
    ] },
  ],
  activities: {
    one: { title: 'Job interview', md: 'You interview the student for a job they would like. Ask about deadlines, responsibility, decisions and teamwork. Note the collocations they use and suggest three better ones.' },
    small: { title: 'Collocation dominoes', md: 'Write verbs and nouns separately in the chat. Students take turns making a collocation and using it in a sentence about work. A correct sentence scores a point.' },
    group: { title: 'Start-up', md: 'Breakout rooms of three plan a small business: what it does, who runs it, the first deadlines and decisions. Each room presents its plan with at least six collocations.' },
  },
  homework: { book: 'u3:p2', md: 'Finish lesson 2 of unit 3, then do lesson 3 (I see your point, but…). Write about 100 words describing your job or studies with eight collocations.' },
};
