// English B2, class 36 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u8:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c36',
  focus: 'By the end of the class every student can shorten sentences with participle clauses: present participles for actions at the same time (*Walking home, I saw…*), perfect participles for an earlier action (*Having finished the report, she left*) and past participles for a passive meaning (*Built in 1900, the bridge…*), and can avoid the dangling participle.',
  tips: [
    'The key rule: the participle and the main clause must have the same subject. *Walking home, it started to rain* is wrong because *it* was not walking.',
    'Participle clauses are mostly written English. Show students that they make essays and reports sound more mature, and use them in the writing slot.',
    'Common mistakes: *Having finish*, *After finished the work*, and using a present participle for a passive meaning (*Writing in 1920, the novel…* instead of *Written in 1920*).',
    'Build sentences from two short ones on the board; students see the meaning stays the same.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Write two short sentences on the blank page: *I opened the door. I saw a cat.* Ask students to join them in as many ways as they can.' },
    { min: 15, title: 'Three kinds of participle clause', md: 'Show board page 1. Go through each type. Students transform two sentences of each type.' },
    { min: 10, title: 'Practice', md: 'Show board page 2. Students choose the participle and find the dangling participles.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: B2 First Reading and Use of English Part 1. Students choose alone, then reveal.' },
    { min: 5, title: 'Close', md: 'Each student says one sentence about their morning that starts with *Having…*. Set the homework.' },
  ],
  board: [
    { title: 'Participle clauses', blocks: [
      { t: 'table', caption: 'Three kinds', explain: ['head', 'col2'], head: ['Type', 'Example', 'Meaning'], rows: [
        ['-ing (present)', 'Walking home, I met an old friend.', 'at the same time, active'],
        ['having + past participle', 'Having finished the report, she went home.', 'before the main action'],
        ['past participle', 'Built in 1900, the bridge is still in use.', 'passive meaning'],
        ['not + participle', 'Not knowing the way, we asked a local.', 'negative'],
      ] },
      { t: 'tip', md: 'The participle and the main clause need the **same subject**. *Arriving late, the meeting had started* is wrong: the meeting did not arrive. Say *Arriving late, I found the meeting had started.*' },
    ] },
    { title: 'Practice', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
        { q: '___ in 1920, the novel is still popular today.', o: ['Written', 'Writing', 'Having written'], why: 'The novel was written: passive meaning.' },
        { q: '___ the email, he closed his laptop.', o: ['Having sent', 'Sent', 'Having send'], why: 'An earlier action: *having* + past participle.' },
        { q: '___ what to say, she stayed silent.', o: ['Not knowing', 'Knowing not', 'Not known'], why: 'Negative: *not* before the participle.' },
        { q: '___ along the beach, we watched the sunset.', o: ['Walking', 'Walked', 'Having walked'], why: 'At the same time, active: *-ing*.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Each sentence has one mistake. Fix it.', items: [
        { s: 'Having [finish] my homework, I went out.', a: ['finished'], why: '*having* + past participle.' },
        { s: '[Writing] by a famous architect, the museum attracts many visitors.', a: ['Designed', 'Built'], why: 'Passive meaning: past participle.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 1', blocks: [
      { t: 'text', md: 'In the format of B2 First Reading and Use of English Part 1: choose the word that best fits each gap.\n\n(1) ___ by a local businessman in 1885, the theatre was once the centre of city life. (2) ___ closed for twenty years, it has now been restored, and (3) ___ the first performance, the audience stood and cheered.' },
      { t: 'ex', kind: 'select', h: 'Choose the best word for each gap.', items: [
        { q: 'Gap 1: ___ by a local businessman in 1885', o: ['Founded', 'Founding', 'Having founded'], why: 'The theatre was founded: passive meaning.' },
        { q: 'Gap 2: ___ closed for twenty years', o: ['Having been', 'Having', 'Been'], why: 'Earlier and passive: *having been* + past participle.' },
        { q: 'Gap 3: and ___ the first performance, the audience stood', o: ['after', 'having', 'during to'], why: '*after* + noun; *having* would need a participle.' },
      ] },
      { t: 'tip', md: 'If the subject is the one doing the action, use *-ing*; if something is done to it, use the past participle. Ask yourself: *Did the theatre found someone, or was it founded?*' },
    ] },
  ],
  activities: {
    one: { title: 'A shorter story', md: 'The student tells you about a recent trip in simple sentences. Together you rewrite five of them with participle clauses on the blank page, checking each time that the subjects match. Then the student retells the trip using at least three participle clauses.' },
    small: { title: 'Sentence surgery', md: 'Put eight pairs of short sentences in the chat. In pairs, students join four of them with participle clauses and swap with another pair, who check the subjects match and fix any dangling participle. Share the best and the funniest mistakes.' },
    group: { title: 'Guidebook writers', md: 'Each breakout room of three writes four sentences for a city guidebook about places in their own cities, each starting with a different kind of participle clause (*Built in…*, *Standing on…*, *Having survived…*). Rooms read their sentences in the main room; the class checks the subjects.' },
  },
  homework: { book: 'u8:p2', md: 'Finish book lesson 2 of unit 8 (Having finished, built in 1900). Then write a short paragraph (about 80 words) about a famous building with at least three participle clauses of different kinds.' },
};
