// English B1, class 69 (docs/LESSONS_PLAN.md). Builds on book lesson u14:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c69',
  focus: 'By the end of the class every student can plan and write an article in the format of B1 Preliminary Writing Part 2: start by speaking to the reader, give an opinion with reasons and examples, contrast ideas, and end strongly, in about 100 words. They know how an article differs from an email or a story, and how the examiner marks it.',
  tips: [
    'Many students start an article like a letter (*Dear readers, I write to tell you…*). Show three good openings: a question, a surprising fact, a strong opinion.',
    'The examiner looks at four things: content (all points answered), communicative achievement (it reads like an article), organisation (linking words and paragraphs) and language. Put these on the board so students can check their own work.',
    'Join ideas: B1 students often write short separate sentences (*I like concerts. They are good. I go a lot.*). Show how *because, although, so* and relative clauses improve the same ideas.',
    'Writing takes time. Use the class for planning and writing together; students write the full article at home and in the next class you can give feedback.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Do you read articles online? What makes you keep reading after the first line?*' },
    { min: 10, title: 'What an article needs', md: 'Show board page 1. Go through the useful language and the four marking areas.' },
    { min: 10, title: 'Better sentences', md: 'Show board page 2. Students choose the better sentence for each part of an article and say why.' },
    { min: 20, title: 'Exam corner: plan together', md: 'Show board page 3. Read the task, find the questions to answer, then plan the article together on the board: opening, two paragraphs, ending.' },
    { min: 10, title: 'Activity', md: 'Use the activity for your class size below: students write their opening and one paragraph.' },
    { min: 5, title: 'Close', md: 'Each student reads their opening sentence aloud. Set the homework.' },
  ],
  board: [
    { title: 'What an article needs', blocks: [
      { t: 'table', caption: 'Useful language for an article', explain: ['head', 'col0'], head: ['Part', 'Say'], rows: [
        ['speak to the reader', 'Do you love music as much as I do?'],
        ['give your opinion', 'For me, the best thing about … is …'],
        ['give a reason', 'This is because … / That’s why …'],
        ['give an example', 'For example, … / Last year, …'],
        ['contrast two ideas', 'Although … , … / However, …'],
        ['end strongly', 'So, why not try it? You won’t regret it!'],
      ] },
      { t: 'tip', art: 'owl', md: 'The examiner checks four things: did you answer **all the questions**, does it **read like an article**, is it **well organised** with linking words, and is the **language** varied and correct?' },
    ] },
    { title: 'Better sentences', blocks: [
      { t: 'ex', kind: 'choice', h: 'Choose the better sentence for an article.', items: [
        { q: 'The opening', o: ['Have you ever been to a concert that changed your life?', 'Dear readers, I am writing to tell you about concerts.', 'This article is about concerts.'], why: 'An article speaks to the reader and makes them want to read on.' },
        { q: 'Giving an opinion', o: ['I love live music because the energy is so exciting.', 'I like concerts. They are good.', 'Concerts. Exciting.'], why: 'Join the opinion and the reason with *because*.' },
        { q: 'The ending', o: ['So, if you’ve never been to a festival, why not go this summer?', 'That is all. Bye.', 'The end.'], why: 'End strongly by speaking to the reader again.' },
      ] },
    ] },
    { title: 'Exam corner: Writing Part 2', blocks: [
      { t: 'text', md: 'In the format of B1 Preliminary Writing Part 2: you see this notice in an English-language magazine.\n\n**Articles wanted: My favourite way to spend a free evening.** *What do you like doing? Why do you enjoy it? Is it better alone or with friends?* The best articles will appear in next month’s magazine.\n\nWrite your article in about **100 words**.' },
      { t: 'ex', kind: 'order', h: 'Put the words in order to make sentences for the article.', items: [
        { a: 'What do you do when you finally have a free evening?', why: 'A question that speaks to the reader is a good opening.' },
        { a: 'For me, nothing is better than cooking for my friends.', why: 'Give your opinion clearly.' },
        { a: 'Although it takes time, it is so relaxing.', why: 'Contrast and make the opinion stronger.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Write it together', md: 'The student plans the article from the Exam corner aloud, then writes the opening and the first paragraph in the chat. Give feedback using the four marking areas, and help the student improve one sentence by joining ideas.' },
    small: { title: 'Peer review', md: 'Each student writes an opening and one paragraph for the article in the chat. Pairs swap and give feedback: one thing that works, one question that is not answered yet, one sentence to improve. Students rewrite one sentence before the end.' },
    group: { title: 'Article workshop', md: 'Breakout rooms of three write one article together in a shared chat message: one student writes the opening, one the middle paragraph, one the ending. Bring the rooms back; read two articles aloud and say which marking area each does best.' },
  },
  homework: { book: 'u14:p4', md: 'Finish book lesson 4 of unit 14. Then write the full article from the Exam corner in about 100 words, and check it with the four marking areas before you hand it in.' },
};
