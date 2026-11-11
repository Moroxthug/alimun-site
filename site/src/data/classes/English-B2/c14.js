// English B2, class 14 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u3:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c14',
  focus: 'By the end every student has read and discussed an interview about a change of career, can identify reasons and feelings in a text, and can talk about their own ambitions using the unit’s future forms and work collocations. The speaking goal: describe a career change they would consider, with reasons.',
  tips: [
    'B2 First Reading Part 7 (multiple matching) asks *which person says…*. Teach students to underline key ideas in each question before reading.',
    'Ambition can be a sensitive topic. Let students talk about a friend or an imagined person if they prefer.',
    'Recycle unit 3: future continuous and perfect, collocations and diplomatic language all fit this topic.',
    'Encourage paraphrase: the text and the questions rarely use the same words.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *If you could change career tomorrow, what would you do? Why?*' },
    { min: 15, title: 'The interview', md: 'Show board page 1. Students read alone and answer. Check by asking which words gave each answer.' },
    { min: 10, title: 'Words from the text', md: 'Show board page 2. Students match the expressions with meanings.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: B2 First Reading Part 7. Students match statements and people alone, then compare.' },
    { min: 5, title: 'Close', md: 'Each student finishes: *In five years, I’ll have…* Set the homework.' },
  ],
  board: [
    { title: 'From the courtroom to the kitchen', blocks: [
      { t: 'reading', title: 'An interview with Daniel, former lawyer, now chef', md: '“For twelve years I worked as a lawyer, and from the outside it looked like a great career. But I was working seventy-hour weeks and I had stopped enjoying it long before I admitted it to myself.\n\nCooking had always been my escape. One evening, after another twelve-hour day, I realised that I had been looking forward to cooking dinner more than to any case in months. That was the moment.\n\nThe first year in a professional kitchen was brutal. I was the oldest trainee, I earned a third of my old salary, and my feet hurt every night. But I have never regretted it. By the end of next year I’ll have opened my own small restaurant, and I’ll be doing something I love every single day.”' },
      { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
        { q: 'Why did Daniel leave the law?', o: ['He no longer enjoyed it and worked very long hours.', 'He lost his job.', 'He wanted to earn more money.'], why: '*seventy-hour weeks… I had stopped enjoying it.*' },
        { q: 'How does he feel about his decision now?', o: ['He has no regrets.', 'He is unsure.', 'He wishes he had stayed a lawyer.'], why: '*I have never regretted it.*' },
      ] },
    ] },
    { title: 'Words from the text', blocks: [
      { t: 'ex', kind: 'match', h: 'Match the expressions with their meanings.', pairs: [
        ['an escape', 'something that helps you forget daily problems'],
        ['brutal', 'extremely hard'],
        ['a trainee', 'someone learning a job'],
        ['admit it to myself', 'accept something I did not want to accept'],
      ] },
    ] },
    { title: 'Exam corner: Reading Part 7', blocks: [
      { t: 'text', md: 'Three people describe a change of career. **A**: Daniel, from lawyer to chef. **B**: Sara, from banker to teacher, who misses the money but not the stress. **C**: Ali, from engineer to photographer, who took two years to save before changing.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the B2 First exam (Reading and Use of English, Part 7): which person…', items: [
        { q: 'planned the change carefully over a long time?', o: ['C, Ali', 'A, Daniel', 'B, Sara'], why: 'Ali saved for two years before changing.' },
        { q: 'misses one thing about the old job?', o: ['B, Sara', 'A, Daniel', 'C, Ali'], why: 'Sara misses the money.' },
        { q: 'realised the truth suddenly, one evening?', o: ['A, Daniel', 'B, Sara', 'C, Ali'], why: 'Daniel: *That was the moment.*' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 7, read the questions first and underline the key idea. The text will say the same thing in different words.' },
    ] },
  ],
  activities: {
    one: { title: 'Career coach', md: 'The student describes a career change they would consider. Coach them with questions: *What will you be doing day to day? What will you have to give up? What will you have achieved in five years?* Note language for feedback.' },
    small: { title: 'Dream jobs', md: 'Each student describes a dream job in one minute without naming it. The others ask *Will you be…? Will you have to…?* and guess the job.' },
    group: { title: 'Career fair', md: 'Breakout rooms of three each prepare a short pitch for an unusual job (lighthouse keeper, chocolate taster, park ranger). They present it; the class asks questions and votes for the job they would most like.' },
  },
  homework: { book: 'u3:p4', md: 'Finish lesson 4 of unit 3. Write about 120 words: *A career change I would (or would never) make, and why.* Use two future forms and four work collocations.' },
};
