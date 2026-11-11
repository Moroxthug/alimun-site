// English B1, class 1 (docs/LESSONS_PLAN.md, L6). Welcome to B1; builds on book unit u1. Draft for the owner's review.
export const LESSON = {
  id: 'c01',
  focus: 'The first B1 class. By the end every student has spoken for at least two minutes about their life and their reasons for learning English, using the A2 language they already have (past simple, present perfect, going to, comparatives), knows how the B1 course works (84 classes, 16 book units, reviews, conversation classes, exam practice for each paper of B1 Preliminary, a mid-level check and an end-of-level check), and has met the class. B1 means becoming an independent user: the class should feel like a conversation, not a drill.',
  tips: [
    'Levels are mixed: some students come from the new A2, others from the placement test or another school. Listen in the first speaking task and note who needs support with the past simple and who is ready for longer answers.',
    'Explain the course in a few sentences and show that every class prepares for B1 Preliminary: four papers (Reading, Writing, Listening, Speaking), and each paper has its own practice class.',
    'Typical A2 mistakes that B1 students still make: *I am agree*, *I have been in Paris last year*, *It depends of*. Note them today and come back to them in the classes on the present perfect.',
    'Give students one minute to prepare before they speak. At B1 the goal is longer answers with reasons: push for *because…* and *for example…*.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Greet each student by name and ask: *What did you do last weekend? What have you done this week that you enjoyed?*' },
    { min: 10, title: 'Your B1 course', md: 'Show board page 1. Explain the course, the book and the four papers of B1 Preliminary. Ask: *Which paper do you think will be hardest for you, and why?*' },
    { min: 15, title: 'Tell us about you', md: 'Show board page 2. Students choose three questions, prepare for one minute, then talk for about two minutes. The others ask one follow-up question each.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: B1 Preliminary Speaking Part 1 questions. Students answer in pairs or with you, then compare answers that are too short with answers that are just right.' },
    { min: 5, title: 'Close', md: 'Each student says one thing they want to be able to do in English by the end of B1. Set the homework.' },
  ],
  board: [
    { title: 'Your B1 course', blocks: [
      { t: 'text', md: 'At B1 you become an **independent user** of English. You can talk about your experiences, your work and your plans, give reasons and opinions, deal with most situations when you travel, and write clear emails, stories and articles.\n\nThe course has **16 units**. After every two units there is a **review**. Four classes practise the four papers of **B1 Preliminary**: Reading, Writing, Listening and Speaking. Halfway there is a **mid-level check**, and at the end a **practice exam** and the **end-of-level check**.' },
      { t: 'ex', kind: 'match', h: 'Match each paper of B1 Preliminary with what you do in it.', pairs: [
        ['Reading', 'You read notices, messages and longer texts.'],
        ['Writing', 'You write an email and an article or a story.'],
        ['Listening', 'You hear short and long recordings and answer questions.'],
        ['Speaking', 'You talk with an examiner and another candidate.'],
      ] },
    ] },
    { title: 'Tell us about you', blocks: [
      { t: 'text', md: 'Choose three questions. Prepare for one minute, then talk. Give **reasons** and **examples**.\n\nWhere did you grow up, and what was it like?\n\nWhat have you done in the last year that you are proud of?\n\nWhy are you learning English?\n\nWhat is the most interesting place you have ever visited?\n\nWhat are you going to do next summer?' },
      { t: 'tip', art: 'owl', md: 'At B1, a good answer has two or three sentences: an answer, a reason and an example. *I grew up in Porto. I loved it because the sea was always near. For example, we swam every day in summer.*' },
    ] },
    { title: 'Exam corner: Speaking Part 1', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam (Speaking, Part 1): choose the best answer to the examiner’s question.', items: [
        { q: '“Tell us about where you live.”', o: ['I live in a small flat in the centre of Lyon. I like it because everything is close, but it can be noisy at night.', 'Lyon.', 'I am living in Lyon since three years.'], why: 'A full answer with a detail and a reason, and correct grammar.' },
        { q: '“Do you prefer studying in the morning or in the evening?”', o: ['In the morning, because my head is clearer and the house is quiet.', 'Yes, I do.', 'I prefer to studying in the morning.'], why: 'It answers the question and gives a reason.' },
        { q: '“What did you do last weekend?”', o: ['I visited my grandparents and we cooked a big lunch together.', 'I have visited my grandparents last weekend.', 'I visit my grandparents.'], why: '*Last weekend* is finished time: past simple.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Speaking Part 1, the examiner asks easy questions about you. One-word answers lose marks. Answer, then add a reason or an example.' },
    ] },
  ],
  activities: {
    one: { title: 'Interview swap', md: 'Interview the student with five questions from board page 2, asking a follow-up each time (*Why? What happened then?*). Then the student interviews you. At the end, give two pieces of feedback: one thing they did well, one sentence to say better.' },
    small: { title: 'Find someone who', md: 'Write in the chat: *Find someone who has lived in another country / used to play an instrument / is going to travel this year / has never been on a plane.* Students ask each other with full questions (*Have you ever…?*) and report back with one detail each.' },
    group: { title: 'Three true things', md: 'Breakout rooms of three or four. Each student tells the room three facts about their life; one is false. The others ask up to five questions and guess which one is false. Each room reports the most surprising true fact to the class.' },
  },
  homework: { book: 'u1:p1', md: 'Do lesson 1 of unit 1 (Experiences: have you ever…?). Write a short paragraph (60 to 80 words) about why you are learning English and what you want to do with it.' },
};
