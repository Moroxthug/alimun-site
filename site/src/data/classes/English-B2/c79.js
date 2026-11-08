// English B2, class 79 (docs/LESSONS_PLAN.md). Builds on book lesson u16:p4 (the B2 First exam, step by step). Draft for the owner's review.
export const LESSON = {
  id: 'c79',
  focus: 'By the end of the class every student knows the structure of B2 First (Reading and Use of English, Writing, Listening, Speaking), the timing of each paper, what each part tests and one strategy per paper, and has a personal plan for the last weeks before the exam. They also know that the next step in Alimun is the level test for C1.',
  tips: [
    'Many students only know the exam by name. Showing the whole map lowers stress and helps them plan.',
    'Give practical numbers: Reading and Use of English 1 hour 15 minutes, Writing 1 hour 20 minutes, Listening about 40 minutes, Speaking about 14 minutes for two candidates.',
    'Stress time management: in Reading and Use of English students should not spend more than 10 minutes on Part 1 to Part 4 each.',
    'Explain that the level test at the end of B2 in Alimun is not the Cambridge exam, but it uses the same kinds of tasks.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What do you already know about B2 First? What worries you most?* Note the worries on the board.' },
    { min: 15, title: 'The four papers', md: 'Show board page 1. Go through the table; students match each part with what it tests.' },
    { min: 10, title: 'Strategies', md: 'Show board page 2. Students choose the best strategy for each situation.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: Speaking Part 3, a short dialogue. Students find the good strategies.' },
    { min: 5, title: 'Close', md: 'Each student says one thing they will do every day before the exam. Mention the level test for C1. Set the homework.' },
  ],
  board: [
    { title: 'The exam map', blocks: [
      { t: 'table', caption: 'B2 First', explain: ['head', 'col1', 'col2'], head: ['Paper', 'Time', 'What it tests'], rows: [
        ['Reading and Use of English', '1 hour 15 minutes, 7 parts', 'grammar, vocabulary, reading for detail and attitude'],
        ['Writing', '1 hour 20 minutes, 2 parts', 'an essay, then a choice of article, email or letter, report or review'],
        ['Listening', 'about 40 minutes, 4 parts', 'detail, opinion and the main idea'],
        ['Speaking', 'about 14 minutes, 4 parts, in pairs', 'talking about yourself, pictures, discussion with a partner'],
      ] },
      { t: 'ex', kind: 'match', h: 'Match the part with what you do.', pairs: [
        ['Use of English Part 4', 'rewrite a sentence with a key word'],
        ['Writing Part 1', 'write an essay with your own idea'],
        ['Speaking Part 2', 'compare two photos for one minute'],
        ['Reading Part 7', 'match statements with texts'],
      ] },
    ] },
    { title: 'What would you do?', blocks: [
      { t: 'ex', kind: 'choice', h: 'Choose the best strategy.', items: [
        { q: 'You don’t know the answer to a Part 1 question.', o: ['Guess, mark it and move on.', 'Leave it empty.', 'Spend ten minutes on it.'], why: 'There is no penalty for wrong answers; time matters.' },
        { q: 'In Speaking Part 3 your partner says very little.', o: ['Ask your partner a question: What do you think?', 'Talk for the whole time alone.', 'Wait in silence.'], why: 'Part 3 marks interaction.' },
        { q: 'You hear a Listening text for the first time and miss an answer.', o: ['Leave it and listen for it the second time.', 'Stop listening to the next question.', 'Write anything.'], why: 'Every Listening text is played twice.' },
      ] },
    ] },
    { title: 'Exam corner: Speaking Part 3', blocks: [
      { t: 'dialogue', title: 'Two candidates', lines: [
        { who: 'Anna', s: 'Shall we start with the idea of working from home? What do you think?' },
        { who: 'Luca', s: 'I think it saves a lot of time, but it can be lonely, can’t it?' },
        { who: 'Anna', s: 'That’s a good point. I’d add that some people find it hard to concentrate at home.' },
        { who: 'Luca', s: 'True. So which one do you think is the most important?' },
      ] },
      { t: 'tip', art: 'owl', md: 'In B2 First Speaking Part 3 you discuss a question with your partner using written prompts. You do not have to talk about every prompt; what matters is a real discussion: suggest, agree, disagree politely and ask your partner’s opinion.' },
    ] },
  ],
  activities: {
    one: { title: 'Personal exam plan', md: 'With the student, make a four-week plan on the board: which paper each week, how many practice tasks, and how to check progress. The student explains it back to you in their own words.' },
    small: { title: 'Exam myths', md: 'Read out six statements (*You lose points for wrong answers*, *You can use a pencil in Writing*…). Students decide true or false and explain. Finish with each student’s biggest remaining question.' },
    group: { title: 'Paper experts', md: 'In breakout rooms of three, each room becomes expert on one paper and prepares three tips in the chat. Rooms present their tips to the class in two minutes each.' },
  },
  homework: { book: 'u16:p4', md: 'Finish book unit 16, lesson 4 and the unit 16 test. Write your own four-week exam plan and do one full Reading and Use of English practice in 75 minutes.' },
};
