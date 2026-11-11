// English B1, class 9 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u2:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c09',
  focus: 'By the end every student can understand two short career stories and compare them, use *work as / work for / study to be* correctly, and talk for two minutes about their own career or study path: how they chose it, what they used to want to do, and what they hope to do next. This class pulls unit 2 together.',
  tips: [
    '*work as* + a job, *work for* + a company, *work in* + a place or field: *I work as a nurse for the health service in a hospital*.',
    'Students often say *like a teacher* for a job. Point out that *like* means *similar to*.',
    'Purpose needs *to* + verb: *I studied to be a doctor*, not *for be*.',
    'In the speaking task, push students to use the verb patterns and *used to* from earlier in the unit.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What did you want to be when you were ten? Why?* Write a few answers with *used to want to be*.' },
    { min: 15, title: 'Two roads to a career', md: 'Show board page 1. Students read the two short stories and do the task, then say which path is more like their own.' },
    { min: 10, title: 'As, for, like', md: 'Show board page 2. Students fix the mistakes and make two true sentences about their work or studies.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: B1 Preliminary Reading Part 2. Students match people with courses, then explain the key detail for each.' },
    { min: 5, title: 'Close', md: 'Each student says one thing they hope to do in their career in the next five years. Set the homework.' },
  ],
  board: [
    { title: 'Two roads to a career', blocks: [
      { t: 'reading', title: 'Ravi and Lucía', md: 'Ravi always knew he wanted to be a doctor. He studied medicine for six years and now works as a surgeon in a big hospital. He enjoys his job, but he works very long hours.\n\nLucía studied history, but she couldn’t find a job she liked. She started making cakes for friends, and three years ago she decided to open her own bakery. She works for herself now and has two employees.' },
      { t: 'ex', kind: 'tf', h: 'Read the stories. Are the sentences true or false?', items: [
        { q: 'Ravi changed his mind about his career.', a: 'f', why: 'He *always knew* he wanted to be a doctor.' },
        { q: 'Lucía’s job is connected to what she studied.', a: 'f', why: 'She studied history but makes cakes.' },
        { q: 'Lucía is her own boss.', a: 't', why: '*She works for herself now.*' },
      ] },
    ] },
    { title: 'Work as, work for, study to be', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'She works [like] a teacher in a primary school.', a: ['as'], why: '*as* for a job; *like* means *similar to*.' },
        { s: 'He works [in] Google.', a: ['for'], why: '*work for* a company.' },
        { s: 'I studied [for be] a nurse.', a: ['to be'], why: 'Purpose: *to* + verb.' },
      ] },
      { t: 'ex', kind: 'bank', h: 'Complete with the words from the box.', extra: ['like'], items: [
        { q: 'My sister works ___ a lawyer.', a: 'as', why: '*as* + a job.' },
        { q: 'They both work ___ a big bank.', a: 'for', why: '*for* + a company.' },
        { q: 'I’d like to work ___ tourism.', a: 'in', why: '*in* + a field or area.' },
      ] },
    ] },
    { title: 'Exam corner: choose the right course', blocks: [
      { t: 'reading', title: 'Evening courses', md: 'A. Web design: twelve weeks, Tuesdays, for beginners with no experience.\n\nB. Business English: Saturdays, for people who already use English at work.\n\nC. Professional cooking: six weeks, every evening, with a certificate at the end.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam (Reading, Part 2): which course is best for each person?', items: [
        { q: 'Tom wants to open a restaurant and needs a qualification. He is free every evening.', o: ['C', 'A', 'B'], why: 'C gives a certificate and is every evening.' },
        { q: 'Amira writes emails to clients in English every day and works Monday to Friday.', o: ['B', 'A', 'C'], why: 'B is for people who use English at work, on Saturdays.' },
        { q: 'Chen has never made a website but wants to learn.', o: ['A', 'B', 'C'], why: 'A is for beginners with no experience.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Reading Part 2, each person has two or three needs. The right text matches all of them, not just one. Underline the needs before you read the texts.' },
    ] },
  ],
  activities: {
    one: { title: 'My road', md: 'The student tells the story of their career or studies so far in about two minutes: what they used to want to do, how they decided, what they enjoy, what they hope to do next. Ask three follow-up questions, then give feedback on *as, for, in* and verb patterns.' },
    small: { title: 'Career advice', md: 'Each student describes a problem at work or in their studies in one sentence in the chat. The others give advice using the verbs from the unit (*Have you thought about applying for…? You could try asking…*). The student chooses the best advice.' },
    group: { title: 'Dream jobs', md: 'Breakout rooms of four. Each student describes a dream job without naming it (*I would work for…, I would need to…*). The room guesses it. Each room reports the most unusual dream job to the class.' },
  },
  homework: { book: 'u2', md: 'Do the unit 2 test. Write about 100 words on your career or study path, using *used to*, two verb patterns and *work as / for / in*.' },
};
