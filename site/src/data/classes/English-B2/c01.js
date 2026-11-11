// English B2, class 1 (docs/LESSONS_PLAN.md, L6). Welcome to B2. Draft for the owner's review.
export const LESSON = {
  id: 'c01',
  focus: 'By the end every student has introduced themselves at length, knows how the B2 course works (book, practice, class lessons, the level test before C1) and has seen the four papers of B2 First. The speaking goal: talk for a full minute about themselves without stopping, the way Speaking Part 1 and Part 2 expect.',
  tips: [
    'B2 students often speak in short, safe sentences. From the first class, ask for reasons and examples: *Why? Can you give me an example?*',
    'Students arriving from B1 may know the grammar names but not use them under pressure. Today is about fluency; note mistakes quietly and correct only a few at the end.',
    'Explain the exam honestly: B2 First has four papers (Reading and Use of English, Writing, Listening, Speaking). Every class has an Exam corner, so the exam becomes familiar step by step.',
    'Mixed classes: pair a confident speaker with a quieter one for the activity, and give the quieter student the first turn.',
  ],
  plan: [
    { min: 10, title: 'Warm-up', md: 'Everyone introduces themselves in three sentences: who they are, why they are learning English, and one thing they want to be able to do at the end of B2. Write the goals on the board.' },
    { min: 10, title: 'How B2 works', md: 'Show board page 1. Explain the book, the 30 minutes a day of practice, the class lessons and the level test before C1. Students answer the quiz.' },
    { min: 10, title: 'The B2 First exam', md: 'Show board page 2. Go through the four papers. Students match each paper with what it tests.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: Speaking Part 1 questions. Students choose the best answers, then answer two questions each for the class.' },
    { min: 5, title: 'Close', md: 'Each student says one thing they learned about a classmate today. Set the homework.' },
  ],
  board: [
    { title: 'How B2 works', blocks: [
      { t: 'text', md: 'B2 has **16 units** in the book and **84 classes**. Before each class, do the book lesson; after it, practise for about **30 minutes a day**. At the end of B2 there is a **level test**: pass it, and you move up to C1.' },
      { t: 'ex', kind: 'tf', h: 'True or false?', items: [
        { q: 'You do the book lesson before the class.', a: 't', why: 'The class builds on the book lesson, so you arrive ready to speak.' },
        { q: 'There is no test at the end of B2.', a: 'f', why: 'There is a level test before C1.' },
        { q: 'About 30 minutes of practice a day is enough to keep up.', a: 't', why: 'That is the pace the course is planned for.' },
      ] },
    ] },
    { title: 'B2 First: the four papers', blocks: [
      { t: 'ex', kind: 'match', h: 'Match each paper with what it tests.', pairs: [
        ['Reading and Use of English', 'grammar, vocabulary and reading long texts'],
        ['Writing', 'an essay and one other text, such as a review or an email'],
        ['Listening', 'recordings of different lengths and speakers'],
        ['Speaking', 'talking with an examiner and another candidate'],
      ] },
      { t: 'tip', art: 'owl', md: 'You do not need to study the exam separately. Every class has an **Exam corner** with a real part of B2 First.' },
    ] },
    { title: 'Exam corner: Speaking Part 1', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the B2 First exam (Speaking, Part 1): choose the best answer.', items: [
        { q: '“What do you enjoy most about your job or studies?”', o: ['Mostly the people. I work in a small team, and we really support each other, which makes long days much easier.', 'People.', 'I enjoy my job because I enjoy it.'], why: 'A B2 answer gives a reason and a detail, in two or three sentences.' },
        { q: '“Why are you learning English?”', o: ['Partly for work, because more and more of my clients are international, and partly because I’d love to travel without a phrasebook.', 'For work and travel.', 'Because English is important language.'], why: 'Extend with *partly… and partly…* and reasons; avoid one-word answers.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 1, aim for two or three sentences: the answer, a reason and an example. Do not learn answers by heart; the examiner notices.' },
    ] },
  ],
  activities: {
    one: { title: 'One-minute talks', md: 'Give the student three topics (my work, a place I love, a skill I want to learn). They speak for one minute on each while you time them. After each minute, ask one follow-up question and note one language point to improve.' },
    small: { title: 'Interview and introduce', md: 'In pairs, students interview each other for four minutes (life, work, hobbies, why English), then introduce their partner to the group in one minute. The group asks one question each.' },
    group: { title: 'Find someone who', md: 'Put six prompts in the chat (has lived abroad, has changed jobs, has been learning English for over five years…). In breakout rooms of three, students find who matches each prompt and note one extra detail. Each room reports its most surprising answer.' },
  },
  homework: { book: 'u1:p1', md: 'Start unit 1: do lesson 1 (I’ve been working, I’ve worked). Write about 80 words: who you are, why you are learning English and your goal for the end of B2.' },
};
