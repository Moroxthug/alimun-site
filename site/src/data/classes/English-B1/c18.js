// English B1, class 18 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u4:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c18',
  focus: 'By the end of the class every student can read an article about healthy habits, find the writer’s main ideas and opinions (not only facts), and discuss their own habits using the language of unit 4: the first conditional, *too* and *enough*, and advice. The reading skill today is telling the main idea from a detail, as in B1 Preliminary Reading part 3.',
  tips: [
    'Many learners read every word slowly and lose the main idea. Ask for the gist first: one sentence about what the writer thinks, before any detail questions.',
    'Opinion questions are hard at B1. Teach the signals: *I think, in my view, the best thing is, surprisingly, the problem is*. Opinions often sit in the first and last paragraphs.',
    'Habits are personal: some students may not want to talk about weight or illness. Keep the discussion on sleep, water, walking, screens and food choices.',
    'Use the collocations from the book (*take a break, get enough sleep, make a change*) in your own questions so students hear them again.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What is one small healthy thing you do every day?* Write the habits on the board with their verbs (*drink water, take the stairs*).' },
    { min: 15, title: 'Read the article', md: 'Show board page 1. Students read for two minutes and say the main idea in one sentence. Then they read again and answer the true or false questions on the same page.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 2: questions in the format of B1 Preliminary Reading part 3. Students answer alone, then explain which sentence in the text gave them the answer.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Words that go together', md: 'Show board page 3. Students choose the right verbs, then each says one true sentence with a collocation.' },
    { min: 5, title: 'Close', md: 'Each student promises one small change for next week with *If I…, I’ll…*. Set the homework.' },
  ],
  board: [
    { title: 'Small habits, big changes', blocks: [
      { t: 'reading', title: 'Two minutes a day', md: 'Most people try to change everything at once on the first of January, and by February they have stopped. In my view, the problem is not a lack of willpower. It is that the changes are too big.\n\nA better idea is to start with something so small that it feels almost silly: two minutes of stretching after you brush your teeth, one glass of water before your morning coffee. Because it is easy, you do it every day, and after a few weeks it becomes automatic.\n\nSurprisingly, small habits often grow by themselves. People who start with two minutes of walking usually walk for longer without planning to. If you want a big change, my advice is simple: make it small enough to start today.' },
      { t: 'ex', kind: 'tf', h: 'Read the article. Are the sentences true or false?', items: [
        { q: 'The writer thinks people fail because they are lazy.', a: 'f', why: '“the problem is not a lack of willpower”.' },
        { q: 'The writer suggests very small changes.', a: 't', why: '“start with something so small that it feels almost silly”.' },
        { q: 'Small habits sometimes become bigger without a plan.', a: 't', why: '“small habits often grow by themselves”.' },
      ] },
    ] },
    { title: 'Exam corner: Reading part 3', blocks: [
      { t: 'text', md: 'In the format of the B1 Preliminary exam, Reading part 3: choose the right answer about the article.' },
      { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
        { q: 'What is the writer’s main point?', o: ['Change works better when it starts very small.', 'New Year is the best time to change.', 'Stretching is better than walking.'], why: 'The last sentence sums it up: make it small enough to start today.' },
        { q: 'Why does the writer mention a glass of water before coffee?', o: ['As an example of an easy first step.', 'Because coffee is bad for you.', 'To show that water is better in the morning.'], why: 'It is one of two examples of “something so small”.' },
        { q: 'How does the writer feel about big New Year plans?', o: ['They usually do not last.', 'They are the best way to start.', 'They are too easy.'], why: '“by February they have stopped”.' },
      ] },
      { t: 'tip', md: 'In Reading part 3 the questions follow the text in order, and the last question is often about the whole text or the writer’s opinion. For that one, read the first and last paragraphs again.' },
    ] },
    { title: 'Words that go together', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the verb that goes with the words.', items: [
        { q: 'You should ___ a break every hour.', o: ['take', 'do', 'make'], why: 'The partner is *take a break*.' },
        { q: 'Teenagers need to ___ enough sleep.', o: ['get', 'do', 'make'], why: 'We say *get enough sleep*.' },
        { q: 'It’s hard to ___ a big change all at once.', o: ['make', 'do', 'take'], why: 'We say *make a change*.' },
        { q: 'I try to ___ exercise three times a week.', o: ['do', 'make', 'get'], why: 'We say *do exercise*.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'The two-minute plan', md: 'Talk about the student’s day from waking up to going to bed. Together, find one place where a two-minute habit could fit. The student explains the plan with *When I…, I’ll…* and *If I forget, I’ll…*. Then ask for advice for your own habit, so the student uses *should* and *If I were you*.' },
    small: { title: 'Habit survey', md: 'Each student asks the others two questions about habits (*How much water do you drink? Do you get enough sleep?*) and notes the answers. Then each reports one result to the group (*Two of us don’t get enough sleep*) and gives the group one piece of advice.' },
    group: { title: 'Agree or disagree', md: 'Post three statements in the chat: *Big changes are better than small ones. Nobody needs eight hours of sleep. Working from home is healthier.* In breakout rooms of three, students discuss each one for three minutes and must give a reason and an example. Back together, each room says which statement started the biggest discussion and why.' },
  },
  homework: { book: 'u4:p4', md: 'Finish book lesson 4 of unit 4 (Small habits, big changes), including the speaking task. Then write 60 to 80 words about one small habit you started (or will start) and why it helps.' },
};
