// English C1, class 1 (docs/LESSONS_PLAN.md, L6). Welcome to C1. Draft for the owner's review.
export const LESSON = {
  id: 'c01',
  focus: 'By the end every student has spoken at length about themselves, knows how the C1 course works (book, practice, class lessons, the level test before C2) and has seen the four papers of C1 Advanced. The speaking goal: answer personal questions with developed, natural answers that add a reason, a detail or a contrast, the way Speaking Part 1 expects.',
  tips: [
    'C1 students are usually fluent but rely on a few safe structures. From the first class, ask for precision: *Can you say that more exactly? Is there a stronger word?*',
    'Students arriving from B2 often expect more grammar rules. Explain that C1 is about choice: the same idea can be said in several correct ways, and the class works on choosing the best one.',
    'Explain the exam honestly: C1 Advanced has four papers (Reading and Use of English, Writing, Listening, Speaking). Every class has an Exam corner, so each part becomes familiar step by step.',
    'Note mistakes quietly today and correct only three or four at the end. The first class should feel like a conversation, not a test.',
  ],
  plan: [
    { min: 10, title: 'Warm-up', md: 'Everyone introduces themselves: who they are, how they use English now and one thing they want to do with it at the end of C1 that they cannot do yet. Write the goals on the board.' },
    { min: 10, title: 'How C1 works', md: 'Show board page 1. Explain the book, the 30 minutes a day of practice, the class lessons and the level test before C2. Students answer the quiz.' },
    { min: 10, title: 'The C1 Advanced exam', md: 'Show board page 2. Go through the four papers. Students match each paper with what it asks them to do.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: Speaking Part 1 questions. Students choose the best answers and say why, then answer two questions each for the class.' },
    { min: 5, title: 'Close', md: 'Each student says one thing that surprised them about a classmate today. Set the homework.' },
  ],
  board: [
    { title: 'How C1 works', blocks: [
      { t: 'text', md: 'C1 has **20 units** in the book and **98 classes**. Before each class, do the book lesson; after it, practise for about **30 minutes a day**. Along the way there are reviews, exam practice, a mid-level check and a practice exam. The last class is a **level test**: pass it, and you can move up to C2, which runs as small groups and 1 on 1.' },
      { t: 'ex', kind: 'tf', h: 'True or false?', items: [
        { q: 'You do the book lesson before the class.', a: 't', why: 'The class builds on the book lesson, so you arrive ready to use it.' },
        { q: 'C1 ends without a test.', a: 'f', why: 'The last class is the level test for moving up to C2.' },
        { q: 'C2 at Alimun is taught in small groups and 1 on 1.', a: 't', why: 'After C1, the next step is a C2 small group or 1 on 1.' },
      ] },
    ] },
    { title: 'C1 Advanced: the four papers', blocks: [
      { t: 'ex', kind: 'match', h: 'Match each paper with what you do in it.', pairs: [
        ['Reading and Use of English', 'eight parts on grammar, vocabulary and long texts, in an hour and a half'],
        ['Writing', 'an essay and one other text: a letter or email, a proposal, a report or a review'],
        ['Listening', 'four parts with extracts, a talk, an interview and short monologues'],
        ['Speaking', 'four parts with an examiner and another candidate'],
      ] },
      { t: 'tip', art: 'owl', md: 'You do not need a separate exam course. Every class has an **Exam corner** with one part of C1 Advanced, so by the end you will have worked in the format of every part many times.' },
    ] },
    { title: 'Exam corner: Speaking Part 1', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Speaking Part 1): the examiner asks you a question. Choose the answer that would score best.', items: [
        { q: '“How important is English in your working life?”', o: ['More than I expected, to be honest. Most of our suppliers are abroad now, so I spend half my week writing to people I’ve never met.', 'Very important.', 'English is very important for my work because it is important.'], why: 'A C1 answer is short but developed: the answer, then a reason and a concrete detail.' },
        { q: '“Is there anything you’d like to learn in the next few years?”', o: ['I’ve been toying with the idea of learning to sail. It’s partly the challenge and partly that I’d love an excuse to be outdoors more.', 'Yes, sailing.', 'I would like learning many things in the next years.'], why: 'Precise vocabulary (*toying with the idea*) and two reasons, in natural sentences.' },
        { q: '“Do you prefer spending free time alone or with other people?”', o: ['It depends on the week. After a busy few days I need time on my own, but on the whole I’m happiest with a few close friends around.', 'With other people.', 'I prefer with friends, alone is boring, I don’t like.'], why: 'A balanced answer with a contrast (*but on the whole*) sounds natural and controlled.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In **Speaking Part 1** the examiner asks a few questions about you. Aim for two or three sentences each: answer, then add a reason, a detail or a contrast. Do not learn speeches by heart; natural answers score better.' },
    ] },
  ],
  activities: {
    one: { title: 'Precision interview', md: 'Interview the student about their work, a place they love and a recent decision. After each answer, ask *Can you say that more precisely?* and help them find a stronger word or collocation. Note three upgrades for them to keep.' },
    small: { title: 'Interview and introduce', md: 'In pairs, students interview each other for five minutes (work or studies, a turning point, why English, a goal for C1), then introduce their partner to the group in one minute. The group asks one follow-up question each.' },
    group: { title: 'Two truths and a lie', md: 'In breakout rooms of three, each student tells three short stories about themselves, one of them invented. The others ask follow-up questions and decide which one is false. Each room reports the best-hidden lie.' },
  },
  homework: { book: 'u1:p1', md: 'Start unit 1: do lesson 1 (I’d been meaning to call). Write about 120 words: how you use English now, why you are learning it and what you want to be able to do at the end of C1.' },
};
