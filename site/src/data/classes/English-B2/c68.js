// English B2, class 68 (docs/LESSONS_PLAN.md). Builds on book lesson u14:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c68',
  focus: 'By the end of the class every student can talk about rules, rights and fairness and give a balanced opinion in a discussion: they state a view, give a reason and an example, acknowledge the other side, and react to other speakers (*I see your point, but…*, *That’s true to some extent*). The class is mostly speaking, practising B2 First Speaking Part 4.',
  tips: [
    'This is a speaking lesson: keep your own talking short. Your job is to ask follow-up questions and note mistakes for the correction slot.',
    'Weaker students give one-word answers. Teach the three-step answer: opinion, reason, example. Write it on the board as *I think… because… For example…*.',
    'In Part 4 the examiner asks each candidate questions and also invites them to react to each other. Practise reacting: *I agree with Sara up to a point, but…*.',
    'Some topics can be sensitive (politics, religion). Stay with everyday fairness: rules at work, school, sport, prices, public transport.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Is it fair that some people get free public transport and others don’t?* Quick answers from everyone.' },
    { min: 10, title: 'Words for fairness', md: 'Show board page 1. Match the words to their meanings; students use two of them in a sentence.' },
    { min: 10, title: 'Balanced answers', md: 'Show board page 2. Students order the parts of a strong answer, then build one aloud.' },
    { min: 20, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: Speaking Part 4 questions. Ask each student one question; others react.' },
    { min: 5, title: 'Correction slot', md: 'Write three mistakes you heard on the board; students correct them. Set the homework.' },
  ],
  board: [
    { title: 'Words for fairness', blocks: [
      { t: 'ex', kind: 'match', h: 'Match the words with their meanings.', pairs: [
        ['equal rights', 'the same rights for everyone'],
        ['discrimination', 'treating someone unfairly because of who they are'],
        ['compulsory', 'something you must do by law or rule'],
        ['a privilege', 'a special advantage only some people have'],
        ['to abolish', 'to end a law or system officially'],
      ] },
    ] },
    { title: 'Balanced answers', blocks: [
      { t: 'examples', items: [
        { s: '**I’d say** it’s unfair, **mainly because** not everyone can afford it.', n: 'Opinion and reason.' },
        { s: '**For example,** students on low incomes often can’t pay.', n: 'A concrete example.' },
        { s: '**Having said that,** some limits are probably necessary.', n: 'Acknowledge the other side.' },
        { s: '**I see your point, but** I don’t think it would work.', n: 'React to another speaker.' },
      ] },
      { t: 'ex', kind: 'order', h: 'Put the words in order to make useful discussion phrases.', items: [
        { a: 'That is true to some extent, but not always.', why: 'A partial agreement.' },
        { a: 'It depends on what you mean by fair.', why: 'A way to buy time and show thought.' },
      ] },
    ] },
    { title: 'Exam corner: Speaking Part 4', blocks: [
      { t: 'text', md: 'In the format of B2 First Speaking Part 4: the examiner asks questions related to the topic. Give an opinion, a reason and an example, and react to your partner.\n\nShould voting be compulsory for everyone?\n\nIs it ever fair to pay men and women differently for the same job?\n\nDo young people today have more rights than their parents had?' },
      { t: 'ex', kind: 'choice', h: 'Which answer would get a better mark in Part 4?', items: [
        { q: 'Should voting be compulsory?', o: ['I’m not sure. In a way it’s good, because more people would take part, but forcing people might make them vote without thinking.', 'No.', 'Yes, voting is compulsory in some countries and it is a law.'], why: 'The best answer gives a view, reasons and both sides.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 4 there is no right answer. You are marked on how well you **develop** your ideas and **interact**: give reasons, examples, and respond to what your partner says.' },
    ] },
  ],
  activities: {
    one: { title: 'Interview', md: 'Play the examiner: ask the student five Part 4 questions on fairness and rights, one at a time. After each answer, ask *Why?* or *Can you give an example?* once. In the last five minutes, give feedback on how well each answer was developed.' },
    small: { title: 'The fairness panel', md: 'Give the group three situations (a company pays its London staff more, a city gives free buses to over-65s only, a school bans phones). For each one the group discusses for three minutes; every student must react to someone else at least once with a phrase from the board.' },
    group: { title: 'Part 4 in threes', md: 'In breakout rooms of three, two students discuss Part 4 questions from the board while the third acts as examiner, asking follow-ups and noting reacting phrases. Rotate roles. Bring everyone back for the correction slot.' },
  },
  homework: { book: 'u14:p3', md: 'Finish book lesson 3 of unit 14. Then record yourself answering two Part 4 questions from the board, one minute each, and listen back: did you give a reason, an example and the other side?' },
};
