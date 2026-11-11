// English B2, class 51 (docs/LESSONS_PLAN.md). Conversation class: mysteries, cities and how we live (units 7 to 10). Draft for the owner's review.
export const LESSON = {
  id: 'c51',
  focus: 'A fluency class. Students talk for most of the hour about mysteries and explanations, how their towns and cities are changing, and how they live and learn, using the language of units 7 to 10 naturally: degrees of certainty and past deduction, relative and participle clauses, conditions and purpose, and verbs that change meaning. Fluency comes first; accuracy is the last ten minutes.',
  tips: [
    'Do not correct during the speaking. Note mistakes and good phrases; deal with them in the correction slot.',
    'Give a short thinking time before each round. B2 students talk more and better after thirty seconds of planning.',
    'Push for longer turns with *Why do you think so? What makes you sure? Can you give an example?* B2 speakers should justify, not just answer.',
    'Rotate partners between rounds so students hear different voices and opinions.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Each student answers quickly: *What is something in your town that was not there five years ago?*' },
    { min: 15, title: 'Round 1: mysteries', md: 'Board page 1. Pairs speculate about the situations using degrees of certainty and past deduction.' },
    { min: 15, title: 'Round 2: changing places', md: 'Board page 2. Students discuss how their town or city has changed, with relative and participle clauses.' },
    { min: 10, title: 'Round 3: how we live', md: 'Board page 3. Quick-fire opinions about lifestyle and learning, then an Exam corner question.' },
    { min: 10, title: 'Correction slot', md: 'Write the mistakes you noted on the board. Students correct them in pairs; praise the best phrases you heard.' },
    { min: 5, title: 'Close', md: 'Each student says the most interesting opinion they heard today. Set the homework.' },
  ],
  board: [
    { title: 'Round 1: what must have happened?', blocks: [
      { t: 'text', md: 'Talk with a partner about each situation. What might have happened? What is likely, and what is impossible?\n\nYour neighbour’s car has been parked in the same place for three weeks.\n\nYou find a wedding ring in a library book.\n\nA colleague arrives at work with sand in their shoes on a Monday morning.\n\nAll the lights in your street went off at exactly midnight.' },
      { t: 'tip', art: 'owl', md: 'Use different degrees of certainty: **must have** (almost sure), **might / could have** (possible), **can’t have** (impossible), **is bound to / is likely to** (for the future).' },
    ] },
    { title: 'Round 2: a changing place', blocks: [
      { t: 'text', md: 'Describe your town or city to your partner.\n\nWhat has changed most in the last ten years, and who has it helped?\n\nIs there a building, *built long ago*, that you would like to protect?\n\nWhat would make your neighbourhood a better place to live, *provided that money was not a problem*?' },
      { t: 'tip', art: 'owl', md: 'Join your ideas: *The old market, **which** closed last year, is now a gym. **Having lived** there for ten years, I miss it.*' },
    ] },
    { title: 'Round 3 and Exam corner', blocks: [
      { t: 'text', md: 'Quick opinions (one minute each): Should cities ban cars from the centre? Is it better to learn online or in a classroom? What do people worry about for no reason?' },
      { t: 'tip', art: 'owl', md: 'In B2 First Speaking Part 4, the examiner asks your opinion on wider topics. Give your view, a **reason** and an **example**, then react to what your partner says.' },
      { t: 'ex', kind: 'choice', h: 'In the format of B2 First Speaking Part 4: which answer would get the most credit?', items: [
        { q: 'Examiner: "Do you think cities will become better places to live in the future?"', o: [
          'I think so, provided that they invest in public transport. In my city, for example, a new tram line has made the centre much quieter. What do you think?',
          'Yes.',
          'Cities are big and there are many people and cars and shops and buildings.',
        ], why: 'It gives an opinion, a condition, an example and invites the partner to respond.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Three rounds together', md: 'Do the three rounds with the student as your partner, letting them lead each one. Ask follow-up questions that need reasons and examples. Note five sentences (good and less good) for the correction slot.' },
    small: { title: 'Rotating pairs', md: 'Students work in pairs for each round, changing partner every round. After round 2, each pair tells the group the most surprising change they heard about. Note mistakes for the correction slot.' },
    group: { title: 'Breakout rounds', md: 'Run each round in breakout rooms of three, with new rooms each time. One student per room notes the best sentence they heard. Back together after each round, rooms share their best sentence before the next round.' },
  },
  homework: { book: 'u7 u8 u9 u10', md: 'Write 140 to 190 words in the format of a B2 First article: *How my town has changed*. Use at least one relative clause, one participle clause and one sentence about the future with a degree of certainty.' },
};
