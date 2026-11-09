// English C2, class 17 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u4:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c17',
  focus: 'By the end every student can find the four key points in two short texts, tell a key point (a claim with its reason) from an example, paraphrase each one in their own words, and evaluate it as they summarise, so that the essay in the format of C2 Proficiency Writing Part 1 links the two texts instead of summarising them one after the other. Students plan the full essay in class and write it at home.',
  tips: [
    'Spend real time on finding the key points: it is where most Part 1 essays lose marks. A key point is a claim with its reason; a nurse or a bus driver is an example, not a point.',
    'Paraphrase is checked phrase by phrase. If a student’s sentence keeps three or more words in a row from the text, ask for another version. Technical words (*four-day week*, *productivity*) may stay.',
    'Evaluation belongs inside the summary, not in a separate paragraph at the end. Each key point gets a judgement in the same or the next sentence: *This is persuasive, although…*',
    'The strongest essays make the second text answer the first. Ask the class: *Which point in text two is a direct reply to text one?* That sentence is the heart of the essay.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Would you take a four-day week for the same pay if it meant longer days? Who would lose out?* Two or three sentences each.' },
    { min: 12, title: 'Find the key points', md: 'Show board page 1, then page 2. Students read both texts in silence (three minutes), then answer the questions and sort the sentences into key points and examples.' },
    { min: 10, title: 'Paraphrase and evaluate', md: 'Show board page 3. Students match each phrase with its paraphrase, then choose the evaluation language. Ask for one more paraphrase of each phrase.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 4: the task in the format of C2 Proficiency Writing Part 1. Students write a plan of four lines (one per paragraph) and the introduction, then read their introductions aloud.' },
    { min: 5, title: 'Close', md: 'Each student says which text they find more convincing and the one reason they will give in their conclusion. Set the homework.' },
  ],
  board: [
    { title: 'Two texts on the four-day week', blocks: [
      { t: 'reading', title: 'Text one: Working less, achieving more', md: 'Trials in which employees work four days a week for the same pay have produced striking results. Output has generally held steady or even risen, because people who return from a long weekend are rested and waste less of their working time. Staff also report lower stress and take fewer days off sick, which saves employers a considerable amount. A shorter week, in other words, is not a gift to workers at the expense of business. It is simply a better way of organising work, and one from which both sides gain.' },
      { t: 'reading', title: 'Text two: Not every job fits into four days', md: 'Enthusiasm for the four-day week rests largely on trials in offices, where tasks can be compressed and meetings cut. A nurse, a bus driver or a shop assistant cannot do five days’ work in four; someone must still cover the fifth day, and that means employing more people at greater cost. There is a danger, too, that the change will widen the gap between desk workers, who would gain a free day, and those in public-facing jobs, who would not. Any move towards a shorter week should begin with the jobs that are hardest to change, not the easiest.' },
    ] },
    { title: 'Find the key points', blocks: [
      { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
        { q: 'Which is a key point of text one?', o: ['Productivity does not fall because rested staff use their time better.', 'Some trials have produced striking results.', 'Workers return from a long weekend.'], why: 'A key point is a claim with its reason; the other options are a vague statement and a detail.' },
        { q: 'What is the second key point of text one?', o: ['Lower stress and less sickness save employers money, so both sides benefit.', 'Employers spend a lot of money.', 'A shorter week is a gift to workers.'], why: 'The writer links well-being to cost, and denies that it is only a gift to workers.' },
        { q: 'What is the first key point of text two?', o: ['The evidence comes from office work, and in many other jobs a shorter week would raise costs.', 'Nurses and bus drivers work hard.', 'Meetings in offices can be cut.'], why: 'The claim (the evidence is narrow) and its consequence (more staff, more cost); the jobs are examples.' },
        { q: 'Which point in text two answers text one most directly?', o: ['The claim that both sides gain ignores jobs where the work cannot be compressed.', 'Shop assistants deserve a free day.', 'Change should start with easy jobs.'], why: 'Text one says both sides gain; text two shows that this is true only where work can be compressed. The third option reverses what text two says.' },
      ] },
      { t: 'ex', kind: 'sort', h: 'Key point or example? Sort the ideas from the two texts.', groups: ['key point', 'example or detail'], items: [
        { s: 'A shorter week can widen the gap between groups of workers.', g: 0, why: 'A claim about consequences: the second key point of text two.' },
        { s: 'A nurse, a bus driver or a shop assistant.', g: 1, why: 'Examples of jobs that cannot be compressed.' },
        { s: 'Rested staff waste less time, so output holds steady.', g: 0, why: 'A claim with its reason.' },
        { s: 'Staff take fewer days off sick.', g: 1, why: 'A detail supporting the claim about well-being and cost.' },
        { s: 'Meetings can be cut in offices.', g: 1, why: 'A detail explaining why office trials succeed.' },
        { s: 'Covering the fifth day means employing more people.', g: 0, why: 'The reason behind the first key point of text two.' },
      ] },
    ] },
    { title: 'Paraphrase and evaluate', blocks: [
      { t: 'ex', kind: 'match', h: 'Match each phrase from the texts with a paraphrase that could appear in an essay.', pairs: [
        ['output has generally held steady or even risen', 'productivity has not suffered and has sometimes improved'],
        ['waste less of their working time', 'use their hours more efficiently'],
        ['not a gift to workers at the expense of business', 'not a benefit for employees paid for by employers'],
        ['rests largely on trials in offices', 'is based mainly on evidence from desk-based work'],
        ['employing more people at greater cost', 'taking on extra staff, which raises costs'],
        ['widen the gap between desk workers and those in public-facing jobs', 'deepen the divide between different kinds of employee'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the expression that fits the evaluation.', items: [
        { q: 'The first writer ___ observes that rested employees tend to work more efficiently.', o: ['rightly', 'overly', 'barely'], why: '*Rightly observes*: the essay writer agrees.' },
        { q: 'The claim that both sides gain is, however, ___, since the evidence comes mainly from offices.', o: ['overstated', 'conceded', 'compressed'], why: '*Overstated*: claimed more strongly than the evidence allows.' },
        { q: 'The second writer ___ the first by pointing out that some work cannot be compressed.', o: ['implicitly answers', 'rightly concedes', 'largely ignores'], why: 'Text two never names text one, so the reply is *implicit*.' },
        { q: 'This concern about fairness has some ___, although it may be an argument for a gradual change rather than against change itself.', o: ['force', 'power', 'energy'], why: '*The argument has some force*: partial agreement.' },
      ] },
    ] },
    { title: 'Exam corner: Writing Part 1', blocks: [
      { t: 'text', md: 'In the format of the C2 Proficiency exam (Writing Part 1): read the two texts on the four-day week. Write an essay **summarising and evaluating the key points** from both texts. Use your own words throughout as far as possible, and include your own ideas in your answer. Write **240 to 280 words**.\n\nIn class: write a plan of four lines (introduction, text one with evaluation, text two linked to text one, your view) and the introduction. At home: write the full essay in about 45 minutes.' },
      { t: 'tip', art: 'owl', md: 'Before you hand in a **Part 1** essay, check four things: all four key points are there; each one is evaluated, not only summarised; the second text is linked to the first; and no phrase of three or more words is copied from the texts. Your own view comes last and grows out of your evaluation.' },
    ] },
  ],
  activities: {
    one: { title: 'Draft it live', md: 'The student writes the paragraph on text one directly on the board, in about eight minutes, while you watch. Then go through it sentence by sentence: underline any words copied from the text and ask for a new version, and mark every key point that has no evaluation. The student rewrites the paragraph once more. Finish by agreeing the sentence that will link text two to text one.' },
    small: { title: 'Paragraph pairs', md: 'Divide the students into pairs (or work alone in a group of two or three). One pair writes the paragraph on text one, another the paragraph on text two, a third the conclusion. Each paragraph goes into the chat after eight minutes. The group reads them as one essay, checks that the four key points are there and that text two answers text one, and improves one link between paragraphs.' },
  },
  homework: { book: 'u4:p3', md: 'Finish lesson 3 of unit 4 if needed, then do lesson 4 (Inside a literature review). Write the full essay on the four-day week (240 to 280 words) in about 45 minutes and send it to your teacher, who will correct it.' },
};
