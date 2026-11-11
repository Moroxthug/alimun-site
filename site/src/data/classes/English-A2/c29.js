// English A2, class 29 (docs/LESSONS_PLAN.md). Review of unit 5. Draft for the owner's review.
export const LESSON = {
  id: 'c29',
  focus: 'A speaking-heavy review of unit 5. By the end of the class every student can talk about plans (*going to*), arrangements (present continuous with times and dates) and invitations without hesitating, and fixes their own typical mistakes. The teacher listens for the three most common errors in the class and corrects them together at the end.',
  tips: [
    'Spend most of the class on speaking. Keep a list of mistakes you hear during the activity; correct them together in the last ten minutes, not during the activity.',
    'The three mistakes to watch: missing *be* in *going to*, wrong *at / on / in*, and *Would you like come*. Bring them back on the board if they appear.',
    'Mix pairs often so stronger students do not do all the talking.',
    'Remind students that the unit test is in the book; today is practice, not a test.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Quick round: each student says one plan, one arrangement and one invitation in three sentences.' },
    { min: 10, title: 'Mixed practice', md: 'Board page 1. Students choose the right form and say why.' },
    { min: 20, title: 'Activity', md: 'Use the activity for your class size below. Note mistakes as you listen.' },
    { min: 10, title: 'Fix it', md: 'Board page 2. Students fix the typical mistakes, then add any you heard during the activity.' },
    { min: 10, title: 'Exam corner', md: 'Board page 3: Reading Part 4. Students choose the right word for each gap.' },
    { min: 5, title: 'Close', md: 'Each student names one thing they now say better. Set the homework.' },
  ],
  board: [
    { title: 'Plans, arrangements, invitations', blocks: [
      { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
        { q: 'Look at those clouds! It ___ rain.', o: ['’s going to', 'rains', 'is raining'], why: 'A prediction from what you can see: *going to*.' },
        { q: 'I can’t come on Friday. I ___ my aunt at the airport.', o: ['’m meeting', 'meet', 'will to meet'], why: 'An arrangement with a time: present continuous.' },
        { q: '___ you like to come to my birthday party?', o: ['Would', 'Do', 'Are'], why: 'An invitation: *Would you like …?*' },
        { q: 'The party is ___ 14 June.', o: ['on', 'in', 'at'], why: 'Dates: *on*.' },
      ] },
    ] },
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'We [going] to visit Paris next summer.', a: ['are going', '’re going'], why: 'Do not forget *be*.' },
        { s: 'Would you like [come] for dinner?', a: ['to come'], why: '*Would you like to …*' },
        { s: 'My course starts [on] September.', a: ['in'], why: 'Months: *in*.' },
        { s: 'How about [meet] at the station?', a: ['meeting'], why: '*How about* + *-ing*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Before you speak or write, check three things: **be** before *going to*, the right word for the time (**at, on, in**), and **to** after *would like*.' },
    ] },
    { title: 'Exam corner: Reading Part 4', blocks: [
      { t: 'reading', title: 'An email', md: 'Hi Jake, I’m (1) ___ a party next Saturday for my birthday. It starts (2) ___ seven o’clock. Would you like to (3) ___? Let me know! Rosa' },
      { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: choose the right word for each gap.', items: [
        { q: '(1) I’m ___ a party next Saturday.', o: ['having', 'doing', 'making'], why: 'We *have* a party.' },
        { q: '(2) It starts ___ seven o’clock.', o: ['at', 'on', 'in'], why: 'Clock times: *at*.' },
        { q: '(3) Would you like to ___?', o: ['come', 'coming', 'came'], why: '*would like to* + base form.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Reading Part 4 all three words often have a similar meaning. Check the **words around the gap**: *have a party*, *at seven*, *to come*.' },
    ] },
  ],
  activities: {
    one: { title: 'Interview about the future', md: 'Ask the student ten questions mixing the unit (*What are you doing tomorrow? What are you going to do next year? Would you like to …?*). They answer with two sentences each. Then the student interviews you with their own questions. Finish with the three mistakes you noted.' },
    small: { title: 'Speed plans', md: 'Pairs have two minutes for each card: a plan for next year, a weekend arrangement, an invitation to accept, an invitation to refuse politely. Change partners after each card. At the end, students report the most interesting plan they heard.' },
    group: { title: 'The unit 5 challenge', md: 'In breakout rooms of three or four, students take turns: one reads a card in the chat (for example *Invite the room to a picnic*, *Tell the room your plans for the summer*), the others answer. Each room writes its three best sentences in the chat. Back together, correct the sentences on the board.' },
  },
  homework: { book: 'u5', md: 'Do the unit 5 test in the book (aim for 70% or more). Then write five sentences about next month: two plans with *going to*, two arrangements with the day and time, and one invitation.' },
};
