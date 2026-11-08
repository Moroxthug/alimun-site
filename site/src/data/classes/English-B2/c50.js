// English B2, class 50 (docs/LESSONS_PLAN.md). Exam practice: B2 First Writing, with the language of units 9 and 10. Draft for the owner's review.
export const LESSON = {
  id: 'c50',
  focus: 'Exam practice in the format of B2 First Writing. By the end of the class every student knows the two parts of the paper (Part 1: a compulsory essay of 140 to 190 words with two given notes and one idea of your own; Part 2: one of an email or letter, an article, a report or a review, 140 to 190 words), has planned and written one Part 1 essay paragraph in class, and can check writing with the four marking areas: content, communicative achievement, organisation and language.',
  tips: [
    'The most common way to lose marks in Part 1 is **not using both notes and adding a third idea of your own**. Make students tick all three in the plan.',
    'Register is part of communicative achievement: an essay is neutral or formal (no contractions, no *Hi guys*), an article talks to the reader, a report has headings, a review gives a recommendation.',
    'Organisation means paragraphs and linking. Recycle B2 linkers: *What is more, On the other hand, Nevertheless, As a result*.',
    'Mark kindly with the four areas on the board: one strength and one thing to improve for each. Peer marking teaches the criteria fastest.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What is the difference between an essay, an article and a review?* Collect ideas on the board.' },
    { min: 10, title: 'The paper and the marking', md: 'Board page 1. Go through both parts and the four marking areas.' },
    { min: 10, title: 'Part 1 essay: plan', md: 'Board page 2. Read the task; students plan four paragraphs with both notes and their own idea, and choose the best opening sentence.' },
    { min: 20, title: 'Activity: write and mark', md: 'Use the activity for your class size below. Students write the introduction and one body paragraph in fifteen minutes, then mark with the criteria.' },
    { min: 10, title: 'Part 2 types', md: 'Board page 3. Match each Part 2 task type with its features; students choose one Part 2 task for homework.' },
    { min: 5, title: 'Close', md: 'Each student says one thing they will check in every piece of writing. Set the homework.' },
  ],
  board: [
    { title: 'The Writing paper', blocks: [
      { t: 'table', caption: 'B2 First Writing', explain: ['head', 'col1', 'col2'], head: ['Part', 'Task', 'Length'], rows: [
        ['Part 1', 'an essay: two notes are given, you add one idea of your own', '140 to 190 words'],
        ['Part 2', 'choose one: an email or letter, an article, a report or a review', '140 to 190 words'],
      ] },
      { t: 'table', caption: 'How it is marked', explain: ['head', 'col1'], head: ['Area', 'The examiner asks'], rows: [
        ['Content', 'Is everything in the task answered and relevant?'],
        ['Communicative achievement', 'Is the style right for the reader and the text type?'],
        ['Organisation', 'Are there clear paragraphs and good linking?'],
        ['Language', 'Is there a range of vocabulary and grammar, used accurately?'],
      ] },
    ] },
    { title: 'Part 1: the essay', blocks: [
      { t: 'text', md: '**Essay task.** *In your English class you have been talking about learning. Now your teacher has asked you to write an essay.*\n\n**Is it better to learn a new skill as a child or as an adult?**\n\nNotes: write about **1. free time**, **2. motivation**, **3. your own idea**.' },
      { t: 'ex', kind: 'choice', h: 'Choose the best essay introduction.', items: [
        { q: '', o: [
          'Many people believe that childhood is the best time to learn. However, adults often have advantages that children lack. This essay will consider both sides.',
          'Hi! Today I want to tell you all about learning, it’s a really cool topic!',
          'I learned the piano when I was seven. My teacher was called Mrs Hill and she was very strict.',
        ], why: 'An essay introduction is neutral, introduces the question and says what the essay will do.' },
      ] },
      { t: 'ex', kind: 'order', h: 'Put the essay plan in order.', items: [
        { a: 'Introduction, free time, motivation, my idea, conclusion', why: 'Introduction, one paragraph for each point, then a conclusion with your opinion.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Your own idea must be **different** from the two notes. Good third ideas for this task: cost, memory, confidence, the support of family.' },
    ] },
    { title: 'Exam corner: Part 2 text types', blocks: [
      { t: 'ex', kind: 'match', h: 'Match each Part 2 text type with its main feature.', pairs: [
        ['an article', 'interests the reader, often with a question in the title'],
        ['a review', 'describes and recommends (or not) a film, book or place'],
        ['a report', 'has headings and makes suggestions to a manager or teacher'],
        ['an email or letter', 'answers a person, formal or informal as the task needs'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the best phrase for each text type.', items: [
        { q: 'A good ending for a review: ___', o: ['I would definitely recommend it to anyone who loves music.', 'The purpose of this report is to…', 'Looking forward to hearing from you.'], why: 'A review ends with a recommendation.' },
        { q: 'A good start for a report: ___', o: ['The aim of this report is to describe…', 'Have you ever wondered why…?', 'Dear Sam, thanks for your email!'], why: 'A report states its aim at the start.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Timed paragraph', md: 'The student plans the essay (four minutes) and writes the introduction and the free-time paragraph (fifteen minutes) while you wait. Mark them together with the four areas; the student finds one improvement for each and rewrites the weaker paragraph.' },
    small: { title: 'Write, swap, mark', md: 'Each student writes the introduction and one body paragraph in fifteen minutes. Swap with a partner, who marks with the four areas and gives one comment for each. Writers correct their paragraph with the comments.' },
    group: { title: 'Examiners for a day', md: 'Everyone writes the introduction and one paragraph (fifteen minutes). In breakout rooms of three, students read each other’s work and decide which one is best organised and why. Back together, each room shares one strong sentence and one common mistake; build a checking sentence on the board.' },
  },
  homework: { book: 'u9 u10', md: 'Finish the Part 1 essay you started in class (140 to 190 words). Then choose one Part 2 task type and write it on a learning topic. Check both with the four marking areas before you hand them in.' },
};
