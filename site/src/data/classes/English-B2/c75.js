// English B2, class 75 (docs/LESSONS_PLAN.md). Builds on book lesson u15:p4 (reading: people who took the plunge). Draft for the owner's review.
export const LESSON = {
  id: 'c75',
  focus: 'By the end of the class every student can read a B2 article about people who took a big risk, find specific information and the writer’s attitude, and talk for two minutes about a risk they would or would not take, using the unit’s inversion, collocations and idioms. Reading skills for B2 First Part 5 (attitude and detail) are the main goal.',
  tips: [
    'Before reading, ask students to predict what the people risked. Prediction makes reading faster and more focused.',
    'For attitude questions, teach students to look for evaluative words (*foolishly*, *bravely*, *surprisingly*).',
    'Do not explain every word in the text. Ask students to guess from context first.',
    'The discussion at the end is where the unit’s language comes back: listen for inversion and collocations.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Would you rather have a safe, boring life or an exciting, risky one?* Quick show of hands, then two reasons.' },
    { min: 15, title: 'Reading', md: 'Show board page 1. Students read alone in five minutes, then answer the questions with "Everyone solves this".' },
    { min: 8, title: 'Words in context', md: 'Show board page 2. Students guess the meaning of the words from the text.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: B2 First Part 5 attitude question. Discuss the strategy, then reveal.' },
    { min: 7, title: 'Close', md: 'Each student says which person in the text they admire most and why. Set the homework.' },
  ],
  board: [
    { title: 'Three risks', blocks: [
      { t: 'reading', title: 'People who took the plunge', md: 'When Marta sold her flat to buy a fishing boat, her friends thought she had lost her mind. She had never worked at sea. Ten years later, her small company runs tours for whale watchers and employs six people. “Not only did I learn to sail,” she says, “I learned to stop listening to fear.”\n\nDavid’s risk was quieter. At forty-five he went back to university to study medicine. Hardly had he started when his savings ran out, and he worked night shifts in a supermarket to finish. He is now a family doctor.\n\nNot every story ends well. Kemal invested everything in a restaurant that closed after a year. Yet he does not regret it. “Failing taught me more than any job,” he says. His second restaurant opened last spring.' },
      { t: 'ex', kind: 'tf', h: 'True, false or not given?', ng: true, items: [
        { q: 'Marta had experience of working on boats.', a: 'f', why: '*She had never worked at sea.*' },
        { q: 'David had money problems while he studied.', a: 't', why: '*his savings ran out*.' },
        { q: 'Kemal’s first restaurant was successful.', a: 'f', why: 'It *closed after a year*.' },
        { q: 'Kemal’s second restaurant makes a profit.', a: 'ng', why: 'The text says it opened, not how it is doing.' },
      ] },
    ] },
    { title: 'Words from the text', blocks: [
      { t: 'ex', kind: 'match', h: 'Match the words with their meaning.', pairs: [
        ['lost her mind', 'gone crazy'],
        ['ran out', 'were all used'],
        ['night shifts', 'work periods at night'],
        ['regret', 'feel sorry about a past action'],
      ] },
    ] },
    { title: 'Exam corner: Reading Part 5', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of B2 First Part 5: choose the best answer.', items: [
        { q: 'What does Marta’s quotation suggest?', o: ['The biggest change was in how she deals with fear.', 'Sailing was harder than she expected.', 'She regrets selling her flat.', 'Her friends helped her learn to sail.'], why: '*I learned to stop listening to fear*.' },
        { q: 'What is the writer’s point in the last paragraph?', o: ['A failure can still be valuable.', 'Restaurants are a bad investment.', 'Kemal should have played it safe.', 'Second attempts always succeed.'], why: '*Failing taught me more than any job*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In B2 First Part 5, find the part of the text the question refers to and read it carefully. Wrong options often use words from the text but change the meaning.' },
    ] },
  ],
  activities: {
    one: { title: 'Interview a risk-taker', md: 'The student chooses Marta, David or Kemal. You interview them as that person for five minutes; then swap. Encourage inversion and idioms (*Never had I felt so free*, *it really paid off*).' },
    small: { title: 'Risk ranking', md: 'Students rank the three risks from the text (and one of their own) from smallest to biggest, then defend their ranking. The group must agree on one order.' },
    group: { title: 'Would you?', md: 'In breakout rooms of three, each student answers three questions in the chat: *Would you sell your home for a dream? Would you go back to studying at 45? Would you risk your savings?* Rooms share the most interesting answer.' },
  },
  homework: { book: 'u15:p4', md: 'Finish book unit 15, lesson 4 and the unit 15 test. Write 120 words: a risk you are glad you took, or one you are glad you did not take.' },
};
