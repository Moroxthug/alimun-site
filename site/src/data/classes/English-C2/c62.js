// English C2, class 62 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u13:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c62',
  focus: 'By the end every student explains causes and consequences in formal writing with the right grammar after each expression (*give rise to*, *bring about*, *stem from*, *be attributable to*, *in the wake of*, *owing to* + noun phrase; *with the result that* + clause), shows how strong a link is (*caused* or *contributed to*, *appears to stem from*), and plans a report in the format of C2 Proficiency Writing Part 2: a clear purpose, findings with careful causes, and recommendations the reader can act on.',
  tips: [
    'The grammar is the trap. *Stem from* and *result from* go from effect back to cause; *give rise to* and *result in* go from cause to effect. *Owing to* and *in the wake of* need a noun phrase, never a clause. Draw the arrow on the board for each one.',
    'Strength matters as much as grammar. A report that says one thing *caused* another when it only *contributed to* it loses the reader’s trust. Ask students to defend every *caused*.',
    'A C2 report is written for a named reader who must decide something. Before students plan, ask: *Who reads this? What will they do after reading it?* The answer decides the tone and the recommendations.',
    'The full report is homework. In class, spend the time on the plan and one section written and corrected together; that is where students learn most.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Think of a change in your town in the last few years: a new road, a closed shop, a new rule. What followed from it?* Students answer; write two of their sentences on the board and upgrade the cause-and-effect expressions together.' },
    { min: 9, title: 'Which way does it go?', md: 'Show board page 1. Students choose the expression that fits the grammar of each sentence, and say whether it goes from cause to effect or from effect to cause.' },
    { min: 9, title: 'Fix it, and do not overclaim', md: 'Show board page 2. Students fix the mistakes in grammar, then choose the sentence whose strength matches the evidence.' },
    { min: 17, title: 'Exam corner', md: 'Show board page 3: C2 Proficiency Writing Part 2, a report. Students read the task and answer the questions about it. Then show board page 4 and ask them to find the cause-and-effect expressions in the model findings.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 5, title: 'Close', md: 'Each student reads out the one recommendation they wrote and the others say whether the trustees could act on it tomorrow. Set the homework.' },
  ],
  board: [
    { title: 'Which way does it go?', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the expression that fits the grammar of the sentence.', items: [
        { q: 'The fall in passing trade largely ___ the opening of the bypass.', o: ['stemmed from', 'gave rise to', 'led to'], why: 'The effect is the subject, so we need an expression that goes back to the cause: *stem from*.' },
        { q: 'The bypass opened, ___ many roadside cafés lost most of their customers.', o: ['with the result that', 'owing to', 'in the wake of'], why: 'A full clause follows, so we need *with the result that*.' },
        { q: '___ the closure of the mine, dozens of shops closed within a year.', o: ['In the wake of', 'With the result that', 'Stemming from'], why: '*In the wake of* + noun phrase: after, and partly because of.' },
        { q: 'The delays were largely ___ a shortage of drivers.', o: ['attributable to', 'resulting in', 'giving rise to'], why: '*Be attributable to* + cause, after the effect.' },
        { q: 'The new tax is likely to ___ a fall in demand for second homes.', o: ['bring about', 'stem from', 'arise from'], why: 'Cause as subject, effect as object: *bring about*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Cause → effect: **give rise to, bring about, lead to, result in**. Effect → cause: **stem from, arise from, result from, be attributable to**. Noun phrase after: **owing to, due to, in the wake of, as a result of**. Clause after: **with the result that, so that, because**.' },
    ] },
    { title: 'Fix it, and do not overclaim', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'The closure [resulted from] the loss of two hundred jobs, most of them skilled.', a: ['resulted in', 'led to', 'gave rise to', 'brought about'], why: 'The closure caused the job losses: *result in* + effect. *Result from* would make the jobs the cause.' },
        { s: 'The delay was due to [the factory closed].', a: ['the closure of the factory', 'the factory’s closure', 'the factory closing', 'the factory’s closing'], why: '*Due to* takes a noun phrase, not a clause.' },
        { s: 'Much of the decline [stems in] a lack of investment.', a: ['stems from'], why: 'The fixed pattern is *stem from*.' },
        { s: '[Owing to] the port lost its contract, many jobs disappeared.', a: ['Because', 'Since', 'As'], why: 'A full clause follows, so use a conjunction. *Owing to* needs a noun phrase (*Owing to the loss of the contract*).' },
      ] },
      { t: 'ex', kind: 'choice', h: 'The facts: the bus route to the market was cut in March. In April and May, visitor numbers fell by a quarter. It also rained for most of those two months. Which sentence claims exactly what the evidence shows?', items: [
        { q: '', o: ['The cut in the bus route appears to have contributed to the fall in visitors, although the weather may also have played a part.', 'The cut in the bus route caused the fall in visitors.', 'The fall in visitors was entirely due to the cut in the bus route.'], why: 'Two possible causes, so *appears to have contributed to*, with the other cause named. The other sentences claim a single, certain cause.' },
      ] },
    ] },
    { title: 'Exam corner: Writing Part 2, a report', blocks: [
      { t: 'text', md: 'In the format of the C2 Proficiency exam (Writing Part 2, a report). **Task:** *Two years ago, the city museum introduced an entrance fee for the first time. Since then, its income has risen but visitor numbers have fallen. The museum’s board of trustees has asked you to write a report describing the main consequences of the fee, assessing whether it has achieved its aims, and recommending what the museum should do next.* Write **280 to 320 words**.' },
      { t: 'ex', kind: 'choice', h: 'Read the task. Choose the best answer to each question about it.', items: [
        { q: 'Who is the reader, and what does that mean for the tone?', o: ['The trustees: formal, clear and direct, with recommendations they can act on.', 'The general public: lively and entertaining, with questions to the reader.', 'A colleague: informal, with personal stories.'], why: 'A report is written for a named reader who must decide something.' },
        { q: 'Which opening fits the report best?', o: ['The purpose of this report is to assess the effects of the entrance fee introduced two years ago and to recommend a course of action.', 'Have you ever wondered why museums charge for entry?', 'I was asked to write about the museum, so here are my thoughts.'], why: 'A report states its purpose at once. A rhetorical question belongs in an article.' },
        { q: 'Which sentence best assesses a consequence?', o: ['While the fee has raised income, it appears to have brought about a marked fall in visits by local families.', 'The fee is terrible and everybody hates it.', 'Visitor numbers went down a lot, obviously because of the fee.'], why: 'It weighs a gain against a cost and gives the link at the right strength.' },
        { q: 'Which recommendation is the most useful?', o: ['It is recommended that the museum introduce free entry for local residents one day a week and review the effect after six months.', 'The museum should perhaps think about the fee again.', 'In conclusion, museums are very important for every city.'], why: 'Specific, practical and measurable, with a formal subjunctive (*recommended that the museum introduce*).' },
        { q: 'Which layout suits the task?', o: ['280 to 320 words in short sections with clear headings', 'about 150 words in a single paragraph', 'about 500 words, to show as much language as possible'], why: 'Keep to the word range; headings help the reader find the findings and the recommendations.' },
      ] },
    ] },
    { title: 'Model findings', blocks: [
      { t: 'reading', title: 'From the findings section', md: 'Income from tickets has risen steadily, and the fee now covers roughly a fifth of running costs. However, in the wake of its introduction, visits by local families fell sharply, while visits by tourists were largely unaffected. This difference appears to stem from price rather than interest: a survey of former visitors suggests that many would return if entry were free on certain days. The fall in school visits is less clearly attributable to the fee, since a change in the school timetable occurred in the same year.' },
      { t: 'ex', kind: 'spot', h: 'Tap the expressions of cause, effect and strength in each sentence from the model.', items: [
        { s: '[In the wake of] its introduction, visits by local families fell sharply.', why: '*In the wake of* + noun phrase: after, and partly because of.' },
        { s: 'This difference [appears to stem from] price rather than interest.', why: 'Effect → cause, softened with *appears to*.' },
        { s: 'The fall in school visits is [less clearly attributable to] the fee.', why: 'A weaker link, because there was another possible cause.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Plan it, then write one section', md: 'The student plans the museum report aloud in about five minutes: the headings, three consequences with the strength of each link, and two recommendations. Challenge any *caused* that is not earned. Then the student writes the recommendations section in about 70 words while you wait, and you correct it together on the board, upgrading one cause-and-effect expression and one recommendation.' },
    small: { title: 'Report by committee', md: 'In pairs, or in a three, students plan the museum report together and agree the headings. Then each student writes one section (introduction, findings, recommendations) in about eight minutes. Put the sections together on the board and read the report in order. The others check that the sections fit together and that every cause is at the right strength, and suggest one upgrade for each section. With two students, one writes the findings and the other the recommendations, and you write the introduction.' },
  },
  homework: { book: 'u13:p4', md: 'Write the museum report from board page 3 in 280 to 320 words, in 45 minutes as in the exam, and send it to your teacher. Use at least four different cause-and-effect expressions with the right grammar, and at least one weaker link (*appears to*, *contributed to*). Then do lesson 4 of unit 13 (Globalisation and its critics).' },
};
