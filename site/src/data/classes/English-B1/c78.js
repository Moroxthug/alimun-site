// English B1, class 78 (docs/LESSONS_PLAN.md). Builds on book lesson u16:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c78',
  focus: 'By the end of the class every student can choose the right tense in a connected text: present simple and continuous, past simple and continuous, past perfect, present perfect simple and continuous, and the future forms. They can explain each choice with a time word or the meaning (finished time, now, before another past event, a plan).',
  tips: [
    'Make students say **why** for every tense: the reason is more useful than the answer.',
    'The two most common B1 problems are present perfect against past simple, and forgetting the past perfect when one past event happened before another.',
    'Time words are the best clue: *yesterday*, *since*, *by the time*, *at the moment*, *next week*. Ask students to underline them first.',
    'Keep the activity spoken: tenses must become automatic in speaking, not only in exercises.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask four questions in four tenses (*What are you doing this weekend? Have you ever…? What did you do yesterday? What were you doing at 8 last night?*). Students answer quickly.' },
    { min: 12, title: 'Tenses in a text', md: 'Show board page 1. Students choose the tenses in the text and give the reason for each.' },
    { min: 10, title: 'Fix it', md: 'Show board page 2. Students fix the tense mistakes.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: Reading part 5. Use "Everyone solves this", then reveal.' },
    { min: 8, title: 'Close', md: 'Each student says which tense they find hardest. Set the homework.' },
  ],
  board: [
    { title: 'All the tenses together', blocks: [
      { t: 'table', caption: 'Choosing the tense', explain: ['head', 'col0', 'col2'], head: ['Time', 'Example', 'Clue'], rows: [
        ['habits', 'I usually work from home.', 'usually, every day'],
        ['now', 'I’m writing an email.', 'at the moment, now'],
        ['finished past', 'I moved here in 2020.', 'in 2020, ago, yesterday'],
        ['past up to now', 'I’ve lived here for four years.', 'for, since, ever, yet'],
        ['before another past event', 'The film had started when we arrived.', 'by the time, already'],
        ['plans', 'I’m going to study medicine.', 'next year, tomorrow'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the right tense.', items: [
        { q: 'I ___ English for three years now.', o: ['have been learning', 'learn', 'learnt'], why: '*for three years now*: up to now, an activity → present perfect continuous.' },
        { q: 'When I got to the station, the train ___.', o: ['had already left', 'already left', 'has already left'], why: 'Before another past event: past perfect.' },
        { q: 'Look at those clouds! It ___ rain.', o: ['is going to', 'rains', 'rained'], why: 'A prediction from what we see now: *going to*.' },
      ] },
    ] },
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the tense mistake.', items: [
        { s: 'I [have visited] Rome last summer.', a: ['visited'], why: '*last summer* is finished time: past simple.' },
        { s: 'She [lives] here since 2019.', a: ['has lived', 'has been living'], why: '*since* + a time up to now: present perfect.' },
        { s: 'While I [walked] home, it started to rain.', a: ['was walking'], why: 'The longer action in progress: past continuous.' },
      ] },
    ] },
    { title: 'Exam corner: Reading part 5', blocks: [
      { t: 'reading', title: 'My new job', md: 'I (1) ___ at the hospital for six months now. Before that, I (2) ___ in a shop for two years. When I started, I was nervous because I (3) ___ in a hospital before. Next month I (4) ___ a course to become a nurse.' },
      { t: 'ex', kind: 'choice', h: 'In the format of B1 Preliminary Reading part 5: choose the right word for each gap.', items: [
        { q: 'Gap 1', o: ['have been working', 'work', 'worked'], why: '*for six months now*: up to now.' },
        { q: 'Gap 2', o: ['worked', 'have worked', 'am working'], why: 'A finished period before: past simple.' },
        { q: 'Gap 3', o: ['had never worked', 'never work', 'have never worked'], why: 'Before the past moment of starting: past perfect.' },
        { q: 'Gap 4', o: ['am starting', 'started', 'had started'], why: 'An arranged plan: present continuous.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Read the **whole text** before you choose. A time word in another sentence (*now*, *before that*, *next month*) often decides the tense of a gap.' },
    ] },
  ],
  activities: {
    one: { title: 'Life timeline', md: 'The student draws a quick timeline of their life (past, now, plans) and talks through it for two minutes. Every time they change tense correctly, tick it on the board; at the end, look at the one tense they avoided and practise it.' },
    small: { title: 'Tense dice', md: 'Write six tenses in the chat, numbered by a dice (or chosen by the next student). Each student gets a topic and a tense and must say two true sentences. The group checks the tense.' },
    group: { title: 'Story chain', md: 'In breakout rooms of three, students build a story together: each sentence must use a different tense from the last. After five minutes, each room reads its story in the main room and the class spots any wrong tense.' },
  },
  homework: { book: 'u16:p3', md: 'Do book lesson 3 of unit 16 (All the tenses together). Write 100 words about your last year, now and your plans, using at least five tenses.' },
};
