// English B2, class 55 (docs/LESSONS_PLAN.md). Builds on book lesson u11:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c55',
  focus: 'By the end of the class every student has read an article about slow travel, can explain the writer’s view and the arguments on both sides, and can give and defend their own opinion about travel and the environment. Students practise B2 First Reading Part 5 (multiple choice on attitude and meaning) and use unit 11 language (*both, neither, about to, compound adjectives*).',
  tips: [
    'In Reading Part 5, many questions ask about the **writer’s attitude** or what a phrase means. Teach students to read the sentences before and after the reference, not just the line.',
    'Wrong options in Part 5 often use words from the text but say something different. Ask students to prove the right answer and disprove one wrong one.',
    'The topic can become very political. Keep it practical: costs, time, enjoyment, and what each person can do.',
    'Recycle *both… and*, *neither… nor* and compound adjectives (*a two-week train journey*) in the discussion.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *How did you travel on your last holiday? Would you do it the same way again?*' },
    { min: 12, title: 'Reading', md: 'Board page 1. Students read for the writer’s main opinion in three minutes, then answer the gist question.' },
    { min: 13, title: 'Exam corner', md: 'Board page 2: Reading Part 5. Students answer alone, then prove each answer with words from the text.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Language from the text', md: 'Board page 3. The class finds useful phrases and uses them in their own opinions.' },
    { min: 5, title: 'Close', md: 'Each student says whether they would try slow travel, and why. Set the homework.' },
  ],
  board: [
    { title: 'Is slow travel the future?', blocks: [
      { t: 'reading', title: 'Is slow travel the future?', md: 'When I told friends I was going from London to Athens by train, most of them thought I had lost my mind. A three-hour flight, they pointed out, costs less than a single night in a Swiss hotel. They were not wrong. Slow travel is rarely the cheap option, and neither is it always the comfortable one.\n\nAnd yet, somewhere between Munich and Ljubljana, I realised that the journey had stopped being the boring part between two holidays. It had become the holiday. I talked to people I would never have met at an airport, watched the landscape change from forest to vineyards, and arrived feeling that I had actually gone somewhere.\n\nThe environmental argument is real: a train journey produces a fraction of the emissions of a flight. But I suspect that most people who choose slow travel do it for the experience, not out of duty. That may be its greatest strength. Guilt rarely changes how we travel; pleasure might.' },
      { t: 'ex', kind: 'choice', h: 'What is the writer’s main opinion?', items: [
        { q: '', o: ['Slow travel is expensive but worth it, mainly because it is enjoyable.', 'Everyone has a duty to stop flying.', 'Trains are cheaper and more comfortable than planes.'], why: 'The writer admits it is not cheap but says the journey itself becomes the holiday, and pleasure is its strength.' },
      ] },
    ] },
    { title: 'Exam corner: Reading Part 5', blocks: [
      { t: 'tip', art: 'owl', md: 'In Part 5, find the part of the text the question is about, then read **one sentence before and one after**. Wrong options often repeat words from the text with a different meaning.' },
      { t: 'ex', kind: 'choice', h: 'In the format of B2 First Reading Part 5: choose the right answer.', items: [
        { q: 'What does the writer say about his friends’ reaction?', o: ['Their practical objections were fair.', 'They wanted to come with him.', 'They did not believe the train existed.'], why: '*They were not wrong*: the writer accepts their point about cost.' },
        { q: '"It had become the holiday" suggests that the writer', o: ['began to enjoy the journey for its own sake.', 'decided not to go to Athens.', 'was annoyed that the trip took so long.'], why: 'The journey stopped being the boring part and became the enjoyable part.' },
        { q: 'In the last paragraph, the writer suggests that people', o: ['are more likely to change their habits for enjoyment than out of guilt.', 'mostly travel by train for environmental reasons.', 'should feel guilty about flying.'], why: '*Guilt rarely changes how we travel; pleasure might.*' },
      ] },
    ] },
    { title: 'Useful language', blocks: [
      { t: 'ex', kind: 'match', h: 'Match the phrase from the text with its meaning.', pairs: [
        ['lost my mind', 'gone crazy'],
        ['a fraction of', 'a very small part of'],
        ['out of duty', 'because you think you must'],
        ['pointed out', 'mentioned a fact'],
      ] },
    ] },
  ],
  activities: {
    one: { title: 'For and against', md: 'The student argues for slow travel for two minutes, then against it for two minutes, using phrases from the text and unit 11 language. Then they give their real opinion with a reason and an example from their own life.' },
    small: { title: 'Plan a slow trip', md: 'In pairs, students plan a trip to a city 1,000 km away without flying: route, stops, time and cost. Each pair presents to the group, and the group decides if it is worth it.' },
    group: { title: 'Balloon debate', md: 'In breakout rooms of four, each student defends one way to travel (plane, train, car, bicycle) for a two-week holiday. After two rounds, the room votes on the most convincing. Back together, rooms report the winner and the best argument.' },
  },
  homework: { book: 'u11:p4', md: 'Finish book lesson 4 of unit 11. Then write a B2 First essay paragraph (about 80 words): *Should governments make train travel cheaper than flying?*' },
};
