// English C1, class 14 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u3:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c14',
  focus: 'By the end every student has analysed a short persuasive speech and can name how it works (a concession, clefts, emphatic *do*, rhetorical devices), compares the views of several writers on one issue, and delivers a short persuasive turn of their own. The speaking goal: a one-minute speech for or against a local decision, using the whole of unit 3.',
  tips: [
    'Ask students to listen or read twice: first as the audience (*Were you persuaded? Why?*), then as the speechwriter (*What did she do to persuade you?*).',
    'Comparing writers is a C1 skill in itself. Before the exam task, ask students to say each writer’s view in one sentence; most mistakes come from not having done this.',
    'Recycle the unit: when a student gives their speech, the others note every cleft, emphatic *do*, marker and device they hear.',
    'Strong opinions are welcome, but keep the topic local and practical so no student feels their politics are on trial.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Which public place in your town would you fight to keep open? Why?* Two or three students answer in a few sentences.' },
    { min: 15, title: 'The speech', md: 'Show board page 1. Students read the speech, decide whether it persuades them, then answer the questions about how it works.' },
    { min: 10, title: 'Make it persuasive', md: 'Show board page 2. Students build the sentences, leaving out the extra words, and read them aloud with the stress on the focus.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 6. Students sum up each writer’s view in a few words first, then answer the questions alone.' },
    { min: 5, title: 'Close', md: 'Each student names the device they find most persuasive and the one they find least honest. Set the homework.' },
  ],
  board: [
    { title: 'Save the pool', blocks: [
      { t: 'reading', title: 'Save the pool', md: 'Good evening. I am not going to pretend that the pool on Station Road is cheap to run. It is not. The roof leaks, the boiler is older than most of the people in this room, and, admittedly, fewer adults swim there than ten years ago.\n\nBe that as it may, what the report does not tell you is who still uses it. It is the pool where every child in this town learns to swim. It is where people recovering from an operation come to get moving again. And it is the only place within ten miles where older residents can exercise without fear of falling.\n\nI do understand that the council must make savings. But ask yourselves this: what is the real cost of a town where children cannot swim? Closing the pool takes one vote. Replacing it would take a generation.' },
      { t: 'ex', kind: 'choice', h: 'How does the speaker persuade? Choose the best answer.', items: [
        { q: 'Why does the speaker begin by listing the pool’s problems?', o: ['To show that she is honest and has considered the other side.', 'To persuade the council to close the pool.', 'To complain about the council’s spending.'], why: 'A concession at the start makes the speaker sound fair before she argues.' },
        { q: 'What is the effect of “It is the pool where… It is where… And it is…”?', o: ['It groups three kinds of users and gives the point rhythm and weight.', 'It shows that the speaker is unsure what to say.', 'It describes the building in detail.'], why: 'Repetition and the rule of three, built on clefts.' },
        { q: 'Why does the speech end with “Closing the pool takes one vote. Replacing it would take a generation.”?', o: ['A sharp contrast leaves the audience with the cost of the decision.', 'It gives the exact date of the vote.', 'It suggests that the pool will be replaced.'], why: 'Contrast and parallel structure make the final point memorable.' },
      ] },
    ] },
    { title: 'Make it persuasive', blocks: [
      { t: 'ex', kind: 'build', h: 'Build the persuasive sentence. Two words do not belong.', items: [
        { a: 'What this town needs is a pool, not another car park.', extra: ['it', 'does'], why: 'A *what*-cleft with a contrast; no *it* after the clause.' },
        { a: 'I do understand the pressure on the budget.', extra: ['am', 'did'], why: 'Emphatic *do* in the present, to concede a point.' },
        { a: 'It is the children who will pay the price.', extra: ['which', 'pays'], why: 'An *it*-cleft: people take *who*, and the verb agrees with *children*.' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 6', blocks: [
      { t: 'text', md: 'Four writers comment on plans to close public swimming pools. **A**: Pools are expensive, but they save the health service far more than they cost; closing them is a false economy. **B**: Councils have no choice: with budgets cut, keeping a half-empty pool open means closing something more people use. **C**: The problem is not the cost but the management; a pool run by its users, as in some towns, can cover its costs. **D**: Closure is a false economy, because the cost returns later as poorer health; but councils should also ask users to pay a fairer price.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 6): which writer…', items: [
        { q: 'shares writer A’s view that closing pools does not really save money?', o: ['D', 'B', 'C'], why: 'D also calls closure *a false economy*, because the cost returns as poorer health.' },
        { q: 'has a different view from the others on whether closure can be avoided?', o: ['B', 'A', 'C', 'D'], why: 'Only B says councils *have no choice*.' },
        { q: 'suggests a solution that none of the other writers mentions?', o: ['C', 'A', 'B', 'D'], why: 'C proposes a pool *run by its users*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In **Part 6** there are four short texts on one topic and four questions that ask you to **compare** the writers. Before you look at the questions, sum up each writer’s view in a few words of your own; then the answers are easier to see.' },
    ] },
  ],
  activities: {
    one: { title: 'The one-minute speech', md: 'The student prepares for two minutes, then gives a one-minute speech for or against a local decision of their choice. It must open with a concession and use one cleft, one emphatic *do* and one device. Give feedback on the effect first, then on accuracy, and ask them to deliver it again.' },
    small: { title: 'Town meeting', md: 'Students play residents at a meeting about closing a local service. Each gives a 45-second speech; the others listen and must begin their own turn by responding to the previous speaker (*I do take Marco’s point, but…*). End with a vote.' },
    group: { title: 'Rival campaigns', md: 'Breakout rooms of four split into two pairs: one pair for keeping a public service, one against. Each pair prepares a one-minute speech using the devices of unit 3. Bring everyone back; each room presents both speeches and the class votes on which side was more persuasive, and why.' },
  },
  homework: { book: 'u3', md: 'Finish lesson 4 of unit 3 if needed and do the unit 3 test, then do lesson 1 of unit 4 (You needn’t have worried). Write a persuasive speech of about 150 words for or against closing a public place in your town, with a concession, two clefts and one rhetorical device.' },
};
