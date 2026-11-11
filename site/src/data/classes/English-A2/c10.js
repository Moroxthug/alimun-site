// English A2, class 10 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u2:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c10',
  focus: 'By the end every student can read a short story about a bad day, answer detailed questions about it in the format of A2 Key Reading Part 3, and tell their own bad-day story with the past simple and linking words. Reading for detail and speaking fluently are the aims.',
  tips: [
    'In Reading Part 3 the right option usually says the same thing as the text in different words. Show students how to find the matching sentence before choosing.',
    'When students tell their own stories, accept small mistakes during the story and collect them for the end; fluency matters most here.',
    'Expressions for reacting help conversation: *Oh no! Really? What happened next? Poor you!* Put them on the board.',
    'Students with less confidence can tell the story from the reading in their own words instead of a personal one.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Did anything go wrong for you last week?* Accept short answers.' },
    { min: 15, title: 'Reading', md: 'Show board page 1. Students read alone (four minutes), then answer the questions on board page 2. Check together, finding the matching words in the text.' },
    { min: 10, title: 'Reacting to a story', md: 'Show the reactions on board page 3. Practise them with a short story you tell.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Mistakes and close', md: 'Fix three mistakes from the stories. Set the homework.' },
    { min: 5, title: 'Exam strategy', md: 'Repeat the Part 3 tip on board page 2: find the part of the text, then compare the meaning.' },
  ],
  board: [
    { title: 'A bad day', blocks: [
      { t: 'reading', title: 'Not my day', md: 'Last Tuesday was a terrible day for Omar. His alarm didn’t ring, so he woke up at nine, an hour late. He ran to the bus stop, but the bus left just before he arrived. When he finally got to the office, he couldn’t find his keys. In the afternoon his computer stopped working and he lost two hours of work.\n\nBut in the evening things got better. His sister called and invited him to dinner, and at the restaurant he found his keys: they were in his coat pocket all day!' },
    ] },
    { title: 'Exam corner: Reading Part 3', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam (Reading, Part 3): choose the right answer.', items: [
        { q: 'Omar woke up late because', o: ['his alarm didn’t work.', 'he went to bed late.', 'he missed the bus.'], why: '*His alarm didn’t ring*.' },
        { q: 'At the bus stop,', o: ['the bus was already gone.', 'he waited an hour.', 'he met his sister.'], why: '*the bus left just before he arrived*.' },
        { q: 'In the afternoon, Omar', o: ['had a problem with his computer.', 'found his keys.', 'went to a restaurant.'], why: '*his computer stopped working*.' },
        { q: 'Where were the keys?', o: ['In his coat.', 'At the office.', 'At the restaurant.'], why: '*they were in his coat pocket all day*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 3, find the part of the text for each question, then read it **carefully**. The right option usually says the same thing **in different words** (*didn’t ring* = *didn’t work*).' },
    ] },
    { title: 'Reacting to a story', blocks: [
      { t: 'examples', items: [
        { s: '**Oh no!** What did you do?', n: 'Something bad happened.' },
        { s: '**Really?** That’s terrible!', n: 'Surprise and sympathy.' },
        { s: '**What happened next?**', n: 'Ask the speaker to continue.' },
        { s: '**Poor you!**', n: 'Friendly sympathy.' },
        { s: '**Lucky you!**', n: 'Something good happened.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'My worst day', md: 'The student tells you about a bad day (real or invented) in at least eight sentences. React with the expressions on board page 3 and ask *What happened next?* Then tell your own story and let the student react and ask questions.' },
    small: { title: 'Bad day, good ending', md: 'Each student tells a short bad-day story with a good ending, like Omar’s. The listeners must react at least twice and ask one question. The class votes for the worst day and the best ending.' },
    group: { title: 'Story relay', md: 'Breakout rooms of four: the first student starts a bad-day story with one sentence, the next adds one, and so on, for three rounds. The room writes its story in the chat. In the main room, each room reads its story aloud.' },
  },
  homework: { book: 'u2:p4', md: 'Do lesson 4 of unit 2. Write your bad-day story (50 to 70 words) with at least three linking words and send it to your teacher.' },
};
