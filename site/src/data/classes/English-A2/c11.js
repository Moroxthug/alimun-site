// English A2, class 11 (docs/LESSONS_PLAN.md, L6). Review of book unit u2. Draft for the owner's review.
export const LESSON = {
  id: 'c11',
  focus: 'This class brings unit 2 together. By the end every student can talk about past events for two minutes with *was / were*, regular and irregular verbs, questions with *did*, time expressions and linking words, and can ask others about their past. Speaking takes most of the class; the board is for the class’s own mistakes.',
  tips: [
    'Before class, look at the students’ unit 2 practice results and bring their real mistakes to the board.',
    'Typical unit 2 mistakes: *Did you went*, *I didn’t saw*, *I were*, *before two days*, *goed*, *-ed* said as an extra syllable.',
    'Do not reteach. If a point is still weak, give one example and three quick questions.',
    'Mix pairs so that stronger students help weaker ones in the activity.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Fast irregular verbs drill: you say the verb, students the past.' },
    { min: 10, title: 'Past questions', md: 'Show board page 1. Students interview a partner with five questions.' },
    { min: 20, title: 'Activity', md: 'Use the activity for your class size below. This is the main part of the class.' },
    { min: 10, title: 'Our mistakes', md: 'Show board page 2 with the mistakes you heard. Students fix them alone, then together.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: one word in each gap, in the format of A2 Key Reading Part 5.' },
    { min: 5, title: 'Close', md: 'Remind students that the unit 2 test is in their dashboard (70% passes). Set the homework.' },
  ],
  board: [
    { title: 'Questions about the past', blocks: [
      { t: 'text', md: '**Where were you last New Year’s Eve? What did you do last weekend? When did you last travel by plane? What did you have for dinner yesterday? Did you go out last Friday? When did you start learning English?**' },
    ] },
    { title: 'Our mistakes', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'Did you [went] out last night?', a: ['go'], why: '*did* + the simple form.' },
        { s: 'I [were] at home all weekend.', a: ['was'], why: '*I* takes *was*.' },
        { s: 'We moved here [before three years].', a: ['three years ago'], why: 'A length of time + *ago*.' },
        { s: 'She [buyed] a new phone.', a: ['bought'], why: '*buy* is irregular: *bought*.' },
        { s: 'They didn’t [liked] the film.', a: ['like'], why: '*didn’t* + the simple form.' },
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
        { q: 'I saw her ___ Monday.', o: ['on', 'in', 'at'], why: 'Days: *on Monday*.' },
        { q: 'He started his job ___ 2021.', o: ['in', 'on', 'at'], why: 'Years: *in 2021*.' },
      ] },
    ] },
    { title: 'Exam corner: one word in each gap', blocks: [
      { t: 'reading', title: 'Our trip', md: 'Last month I went to Edinburgh with my friend Chloe. We ___ there by train and it took five hours. On the first day it ___ very cold, so we visited the castle and then had a hot chocolate in a small café.' },
      { t: 'ex', kind: 'gap', h: 'In the format of the A2 Key exam (Reading, Part 5): write one word in each gap.', items: [
        { q: 'We ___ there by train.', a: ['went', 'travelled', 'traveled'], why: 'Past simple of a verb of movement: *went*.' },
        { q: 'It ___ very cold.', a: ['was'], why: '*it* + past of *be*: *was*.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Interview and retell', md: 'Ask the student the six questions on board page 1 and two follow-up questions for each. Note three mistakes. Correct them together, then the student retells their answers as a short story with linking words.' },
    small: { title: 'Interview and report', md: 'Pairs interview each other with board page 1 in breakout rooms of two. Back together, each student reports two things about their partner (*Marco went to Naples last weekend. He didn’t go out on Friday.*).' },
    group: { title: 'The class timeline', md: 'Breakout rooms of four: each student says one thing they did last year and when. The room writes the events in order in the chat with dates. In the main room, combine all rooms into one class timeline on the board.' },
  },
  homework: { book: 'u2', md: 'Do the unit 2 test in your dashboard (70% passes). Then practise your weakest exercises in Practice.' },
};
