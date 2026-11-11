// English A2, class 5 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u1:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c05',
  focus: 'By the end every student can read a short personal profile, find specific information in it, and write a short email (25 words or more) about themselves and their week that answers all three points of an A2 Key Writing Part 6 task. Writing is the main skill today.',
  tips: [
    'The most common way to lose marks in Writing Part 6 is to forget one of the three points. Make students underline them before writing and tick them after.',
    'Students often write too much or copy sentences from the task. Remind them: 25 words or more, in their own words.',
    'Correct only errors that make meaning unclear while they write; collect the rest for the feedback slot.',
    'Use the shared board to write one model email together before students write their own.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What did you do this week? What are you doing next weekend?* Keep answers short.' },
    { min: 10, title: 'Reading a profile', md: 'Show board page 1. Students read the profile and answer the true or false questions alone, then check together.' },
    { min: 15, title: 'The email task', md: 'Show board page 2. Underline the three points together. Write a model email on the board with the class’s ideas.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below: students write and share their own email.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: choose the email that answers all three points.' },
    { min: 5, title: 'Close', md: 'Each student reads one sentence from their email aloud. Set the homework.' },
  ],
  board: [
    { title: 'Reading a profile', blocks: [
      { t: 'reading', title: 'Meet Kenji', md: 'Kenji is 26 and he lives in Leeds with two friends. He works for a bank, but this month he is working from home because his office is closed. He usually goes swimming on Tuesdays and Thursdays. At the weekend he often cooks Japanese food for his flatmates. He is learning to play the guitar at the moment.' },
      { t: 'ex', kind: 'tf', h: 'Read the text. True or false?', items: [
        { q: 'Kenji lives alone.', a: 'f', why: 'He lives with two friends.' },
        { q: 'He is working at home this month.', a: 't', why: '*this month he is working from home*.' },
        { q: 'He goes swimming twice a week.', a: 't', why: 'On Tuesdays and Thursdays.' },
        { q: 'He can play the guitar very well.', a: 'f', why: 'He is learning at the moment.' },
      ] },
    ] },
    { title: 'Write an email', blocks: [
      { t: 'text', md: '**The task.** Your English friend Sam wants to know about your week. Write an email to Sam. Say: **what you do on weekdays**, **what you are doing differently this week**, and **what you like doing at the weekend**. Write 25 words or more.' },
      { t: 'tip', art: 'owl', md: 'Start with **Hi Sam** and end with **See you soon** or **Bye for now**. Use one sentence for each point, then add one detail to each.' },
    ] },
    { title: 'Exam corner: three points', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam (Writing, Part 6): which email answers all three points?', items: [
        { q: '', o: ['Hi Sam, on weekdays I work in a shop. This week I’m studying for a test, so I’m not working. At the weekend I like going to the beach. Bye!', 'Hi Sam, I work in a shop and I like my job very much. My boss is very nice and my colleagues are friendly. Bye!', 'Hi Sam, this week I’m studying. At the weekend I like the beach because it’s near my flat. Bye!'], why: 'Only the first email talks about weekdays, this week and the weekend.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Before you write, **underline the three points**. After you write, **tick them off**. Missing one point costs more marks than a small grammar mistake.' },
    ] },
  ],
  activities: {
    one: { title: 'Write, read, improve', md: 'The student writes the email on board page 2 on the board (allow them to write) or in the chat. Read it together, tick the three points, then improve two sentences: one with a frequency word, one with a detail. The student rewrites the email at the end.' },
    small: { title: 'Email exchange', md: 'Each student writes their email in the chat. Then each student replies to someone else’s email with one question about each point (*What shop do you work in?*). The writers answer the questions aloud.' },
    group: { title: 'Peer check', md: 'Students write their email alone (8 minutes). In breakout rooms of three, they swap emails and check: are the three points there? Is it 25 words or more? Each room chooses the best email to read to the class.' },
  },
  homework: { book: 'u1', md: 'Write the email to Sam again, using today’s corrections, and send it to your teacher. Then start the unit 1 test in your dashboard.' },
};
