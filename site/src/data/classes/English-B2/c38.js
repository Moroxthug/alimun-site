// English B2, class 38 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u8:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c38',
  focus: 'By the end of the class every student can read several short opinions about how cities are changing, match statements to the right person as in B2 First Reading Part 7, and discuss the future of their own city using the relative clauses, participle clauses and formal language of unit 8.',
  tips: [
    'Part 7 is about scanning, not reading every word. Give a strict time limit and show students how to underline key words in the statements first.',
    'The statements in Part 7 paraphrase the texts. A statement with the same words as a text is often a trap.',
    'For the discussion, ask students to use one participle clause and one *which* for a whole idea; this joins the unit’s grammar to real speaking.',
    'Students from small towns may have less to say about big cities; let them talk about the town or city they know best.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *How has your town or city changed in the last ten years?* One or two sentences each.' },
    { min: 15, title: 'Exam corner: Reading Part 7', md: 'Show board page 1. Students read the four views and match the statements in eight minutes, then check together, finding the exact words that give each answer.' },
    { min: 10, title: 'Language from the texts', md: 'Show board page 2. Students find examples of unit 8 grammar in the texts and complete the sentences.' },
    { min: 20, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 5, title: 'Correction slot', md: 'Write three sentences from the discussion on the blank page and correct them together.' },
    { min: 5, title: 'Close', md: 'Each student says one change they would make to their city, with a reason. Set the homework.' },
  ],
  board: [
    { title: 'Exam corner: Reading Part 7', blocks: [
      { t: 'text', md: 'In the format of B2 First Reading and Use of English Part 7: read the four views and decide which person (A–D) says each thing. Each person may be chosen more than once.' },
      { t: 'reading', title: 'Four views on changing cities', md: 'A, Elena, architect: Cities are finally being designed for people rather than cars. Streets which used to be full of traffic are now parks, which I think is the best change of my lifetime.\n\nB, Tom, shop owner: Rents have risen so much that small shops like mine are disappearing. The centre now looks the same as every other city, full of the same chains.\n\nC, Amira, student: Having grown up in a small town, I find the city exciting, but I worry that young people will never be able to buy a home here.\n\nD, Ken, retired teacher: People complain about change, but the city I was born in was dirty and noisy. Built over a century ago, many old buildings were in terrible condition.' },
      { t: 'ex', kind: 'choice', h: 'Which person…', items: [
        { q: '…thinks housing is becoming too expensive for the young?', o: ['C (Amira)', 'B (Tom)', 'A (Elena)'], why: 'Amira: *young people will never be able to buy a home*.' },
        { q: '…believes the city was worse in the past?', o: ['D (Ken)', 'A (Elena)', 'C (Amira)'], why: 'Ken: *the city I was born in was dirty and noisy*.' },
        { q: '…regrets that cities are losing their individual character?', o: ['B (Tom)', 'D (Ken)', 'C (Amira)'], why: 'Tom: *looks the same as every other city*.' },
        { q: '…welcomes a change in how streets are used?', o: ['A (Elena)', 'B (Tom)', 'D (Ken)'], why: 'Elena: streets that were full of traffic are now parks.' },
      ] },
      { t: 'tip', md: 'In Part 7, read the statements first and underline the key idea in each (*housing*, *the past*, *character*). Then scan the texts for that idea in different words.' },
    ] },
    { title: 'Language from the texts', blocks: [
      { t: 'ex', kind: 'gap', h: 'Complete with one word from the texts.', items: [
        { q: 'Streets ___ used to be full of traffic are now parks.', a: ['which', 'that'], why: 'A defining relative clause about things.' },
        { q: '___ grown up in a small town, I find the city exciting.', a: ['Having'], why: 'A perfect participle clause: *Having* + past participle.' },
        { q: '___ over a century ago, many old buildings were in terrible condition.', a: ['Built'], why: 'A past participle clause with a passive meaning.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Mayor for a day', md: 'The student is mayor of their city for one day. They describe three changes they would make and why, then you play an angry resident from the texts (Tom or Amira) and the student must answer politely in a formal register. End with the student summarising the four views from the reading.' },
    small: { title: 'Agree or disagree', md: 'Each student chooses the person from the reading they agree with most and explains why, using one relative clause and one participle clause. The group then decides together on three changes that would make their cities better places to live.' },
    group: { title: 'City council', md: 'In breakout rooms of three, each room is a city council with a budget for one big project (a park, cheaper housing, a new metro line, saving old buildings). They agree on one project and three reasons. Each room presents in the main room in a formal style; the class votes.' },
  },
  homework: { book: 'u8:p4', md: 'Finish book lesson 4 of unit 8 (Cities in change). Then write about 120 words in a formal style on how your city has changed and how it should change next, using at least two relative clauses and two participle clauses.' },
};
