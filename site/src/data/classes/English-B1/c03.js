// English B1, class 3 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u1:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c03',
  focus: 'By the end every student chooses between the present perfect and the past simple by asking one question: is the time finished? They use the past simple with finished times (*yesterday, in 2020, last week, when I was a child*) and with *When…?*, and the present perfect with unfinished times (*today, this year, so far*) and for results now. The speaking goal: tell a short piece of news, then answer *When…?* questions about it.',
  tips: [
    'Draw a timeline with *now* on the right. A finished box (*yesterday*) does not touch *now*; an unfinished box (*this week*) does. Students can then decide by looking.',
    'German and French speakers use their present perfect for finished time (*I have seen him yesterday*). Correct it every time.',
    'Questions with *When…?* always need the past simple: *When did you arrive?*, never *When have you arrived?*',
    'The same event can be both: *I’ve lost my keys* (news, result now) then *I lost them at the gym* (the details).',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What have you done today? What did you do yesterday?* Write one answer of each kind on the board and underline the time words.' },
    { min: 10, title: 'Finished or not finished?', md: 'Show board page 1 with the timeline. Students sort the time words, then make one true sentence with three of them.' },
    { min: 10, title: 'News and details', md: 'Show board page 2. Students choose the right form, then explain each choice with *finished* or *not finished*.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 15, title: 'Exam corner', md: 'Show board page 3: B1 Preliminary Writing Part 1 language. Students choose the best sentences for an email reply, then you reveal the answers and explain the tense in each.' },
    { min: 5, title: 'Close', md: 'Each student gives one piece of news from this week and one detail about it. Set the homework.' },
  ],
  board: [
    { title: 'Finished or not finished?', blocks: [
      { t: 'ex', kind: 'sort', h: 'Is the time finished or not finished?', groups: ['finished: past simple', 'not finished: present perfect'], explain: ['groups'], items: [
        { s: 'yesterday', g: 0, why: 'Yesterday is over.' },
        { s: 'this year', g: 1, why: 'This year is still going on.' },
        { s: 'in 2019', g: 0, why: 'A year in the past.' },
        { s: 'so far', g: 1, why: '*So far* means up to now.' },
        { s: 'last summer', g: 0, why: 'Last summer is over.' },
        { s: 'today', g: 1, why: 'Today is not over yet.' },
      ] },
      { t: 'tip', art: 'owl', md: 'One question decides: **is the time finished?** If yes, past simple. If it reaches now, present perfect.' },
    ] },
    { title: 'News and details', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
        { q: 'I ___ my phone. Can you call it?', o: ['’ve lost', 'lost', 'was losing'], why: 'News with a result now: present perfect.' },
        { q: 'I think I ___ it on the bus this morning.', o: ['left', '’ve left', 'leave'], why: '*This morning* is over now (it is afternoon): past simple for the detail.' },
        { q: 'When ___ you start this job?', o: ['did', 'have', 'do'], why: '*When…?* asks for a finished time: past simple.' },
        { q: 'She ___ three books so far.', o: ['has written', 'wrote', 'writes'], why: '*so far* reaches now: present perfect.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'I [have seen] him yesterday.', a: ['saw'], why: '*yesterday* is finished time: past simple.' },
        { s: 'When [have you arrived]?', a: ['did you arrive'], why: '*When…?* takes the past simple.' },
      ] },
    ] },
    { title: 'Exam corner: an email reply', blocks: [
      { t: 'reading', title: 'An email from your friend Sam', md: 'Hi! How are things? I haven’t heard from you for ages. What have you done since we last met? Did you go anywhere nice in the summer? Write soon!' },
      { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam (Writing, Part 1): choose the best sentence for each part of your reply.', items: [
        { q: 'You answer the first question:', o: ['I’ve started a new job, and I’ve moved to a bigger flat.', 'I started a new job since we met.', 'I start a new job.'], why: 'News up to now: present perfect.' },
        { q: 'You answer the second question:', o: ['Yes, I went to Croatia in August and it was beautiful.', 'Yes, I’ve been to Croatia in August.', 'Yes, I go to Croatia.'], why: '*in August* is finished: past simple.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Writing Part 1 you answer every question in the email. The examiner checks that each one has an answer, so tick them off as you write.' },
    ] },
  ],
  activities: {
    one: { title: 'News and questions', md: 'The student tells you three pieces of real news (*I’ve bought a bike*). For each, you ask two *When / Where / Why did you…?* questions and the student answers in the past simple. Then swap roles once.' },
    small: { title: 'Timeline talk', md: 'Each student draws a quick timeline of their last month in the chat or on paper and shows it. The others ask *What have you done this month?* and *What did you do on…?* Correct tense choices as you listen.' },
    group: { title: 'Class news desk', md: 'Breakout rooms of three: each room writes four headlines about their members in the present perfect (*Ana has passed her driving test*) and one detail in the past simple for each. Rooms read their news to the class.' },
  },
  homework: { book: 'u1:p3', md: 'Do lesson 3 of unit 1 (How long? Since, for, just, yet). Reply to Sam’s email on board page 3 in about 100 words.' },
};
