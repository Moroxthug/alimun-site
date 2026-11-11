// English B2, class 69 (docs/LESSONS_PLAN.md). Builds on book lesson u14:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c69',
  focus: 'By the end of the class every student can plan and write the B2 First essay (Writing Part 1, 140 to 190 words): an introduction that answers the question, one paragraph for each given note plus one for their own idea, a conclusion with a clear opinion, and the contrast linkers of unit 14. Students plan the whole essay in class and write the introduction and one body paragraph.',
  tips: [
    'The essay must cover **both** notes in the task **and** one idea of the student’s own. Missing one costs marks for content; check every plan for three ideas.',
    'Students often write a story or a letter instead of an essay. Show the neutral, formal tone of the model: no contractions, no *you know*, no exclamation marks.',
    'The conclusion should not add new ideas. It sums up and gives the student’s own opinion clearly.',
    'Linkers from lesson 2 (*whereas, nevertheless, despite the fact that*) make the organisation score jump. Ask for at least three.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Read the essay question on board page 3. Ask: *What is your first answer? Yes, no, or it depends?*' },
    { min: 12, title: 'The model essay', md: 'Show board page 1. Students find the introduction, the two notes, the own idea and the conclusion.' },
    { min: 8, title: 'Formal or not?', md: 'Show board page 2. Students sort the phrases into formal essay language and informal language to avoid.' },
    { min: 15, title: 'Plan and write', md: 'Show board page 3, the exam task. Students plan four paragraphs, then write the introduction and one body paragraph.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 5, title: 'Close', md: 'Each student says the opinion their conclusion will give. Set the homework.' },
  ],
  board: [
    { title: 'A model essay', blocks: [
      { t: 'reading', title: 'Should all public transport in cities be free?', md: 'Public transport is essential in modern cities, and some have already made it free. While this idea has clear advantages, it also raises some important questions.\n\nThe main argument in favour is the environment. If buses and trains were free, many people would leave their cars at home, which would reduce pollution and traffic.\n\nFree transport would also help people on low incomes. Whereas a car is expensive to run, a free bus pass would give everyone the same access to work and education.\n\nNevertheless, someone has to pay. Despite the fact that tickets would disappear, the service would still need money, which would probably come from higher taxes.\n\nIn conclusion, I believe free public transport is a good idea for large cities, as long as the government finds a fair way to fund it.' },
      { t: 'tip', art: 'owl', md: 'Shape: **introduction** (the topic and both sides), **note 1**, **note 2**, **your own idea**, **conclusion** with your opinion. Neutral language, no contractions.' },
    ] },
    { title: 'Formal or not?', blocks: [
      { t: 'ex', kind: 'sort', h: 'Is each phrase good for an essay or too informal?', groups: ['essay', 'too informal'], explain: ['groups'], items: [
        { s: 'In conclusion, I believe…', g: 0, why: 'A clear, neutral way to give the final opinion.' },
        { s: 'The main argument in favour is…', g: 0, why: 'Neutral and organised.' },
        { s: 'It is often argued that…', g: 0, why: 'A formal way to present a view.' },
        { s: 'Honestly, it’s a crazy idea!', g: 1, why: 'Too emotional and informal.' },
        { s: 'You know what I mean?', g: 1, why: 'Spoken language, not for an essay.' },
        { s: 'Plus, it’s super cheap.', g: 1, why: '*Plus* and *super* are informal; use *In addition* and *very*.' },
      ] },
    ] },
    { title: 'Exam corner: Writing Part 1', blocks: [
      { t: 'text', md: 'In the format of B2 First Writing Part 1. **In your English class you have been talking about work. Now your teacher has asked you to write an essay.** *Is it better to work for a large company or a small one?* **Notes:** write about salary and opportunities, the atmosphere at work, and an idea of your own. **Write your essay in 140 to 190 words.**' },
      { t: 'ex', kind: 'choice', h: 'Which is the best introduction for this essay?', items: [
        { q: '', o: ['Choosing where to work is one of the biggest decisions we make, and both large and small companies have clear advantages.', 'I work for a small company and I love it, so it is better!', 'Large companies are big and small companies are small.'], why: 'It introduces the topic and both sides in a neutral tone.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Write each note as its own paragraph, joined by linkers. And do not forget the third point, **your own idea**: it is required.' },
    ] },
  ],
  activities: {
    one: { title: 'Paragraph clinic', md: 'The student reads their introduction and body paragraph aloud. Check together: Is the tone neutral? Does it answer the question? Is there at least one linker from unit 14? Rewrite one sentence together to make it stronger.' },
    small: { title: 'Own idea brainstorm', md: 'Each student posts a possible *own idea* for note 3 in the chat (job security, travel, flexibility…). The group chooses the three strongest and explains why. Each student then adds the best one to their plan.' },
    group: { title: 'Peer check', md: 'In breakout rooms of three, students swap their plans and check them against a short list: answers the question, both notes, an own idea, an opinion in the conclusion. Each gives one suggestion. Back together, share one good introduction per room.' },
  },
  homework: { book: 'u14:p4', md: 'Finish book lesson 4 of unit 14. Then write the full essay for the task on the board in 140 to 190 words, with both notes, your own idea and a clear conclusion, and send it to your teacher.' },
};
