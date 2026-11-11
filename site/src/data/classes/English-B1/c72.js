// English B1, class 72 (docs/LESSONS_PLAN.md). Builds on book lesson u15:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c72',
  focus: 'By the end of the class every student can talk about ability in the past and about difficult things they succeeded in doing: *could* for general ability, *was able to* and *managed to* for one success on one occasion, and *couldn’t* for both. Every student tells at least one short story of a challenge they managed.',
  tips: [
    'The key rule: for one specific success, use *was able to* or *managed to*, not *could*. *I could swim at five* (general) but *I managed to swim across the lake* (one time).',
    'In the negative, *couldn’t* is fine for both: *I couldn’t open the door* is correct.',
    'Learners often say *I managed finish*: insist on *managed to finish*.',
    'Romance-language speakers may translate *poder* or *pouvoir* with *could* every time; give a clear example pair on the board.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What could you do when you were ten that you can’t do now?* Each student answers in one sentence.' },
    { min: 12, title: 'Could or managed to?', md: 'Show board page 1. Go through the table, then students choose the right forms.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Fix it', md: 'Show board page 2. Students fix the sentences and explain each change.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: a B1 Preliminary Reading part 5 gap fill. Use "Everyone solves this" for 4 minutes, then reveal.' },
    { min: 8, title: 'Close', md: 'Each student tells the class one thing they managed to do this year. Set the homework.' },
  ],
  board: [
    { title: 'Could, was able to, managed to', blocks: [
      { t: 'table', caption: 'Ability in the past', explain: ['head', 'col2'], head: ['Form', 'Example', 'When'], rows: [
        ['could', 'I could read when I was four.', 'general ability over a period'],
        ['was able to', 'The roads were closed, but we were able to get home.', 'one success on one occasion'],
        ['managed to', 'I managed to finish the race in the rain.', 'one success that was difficult'],
        ['couldn’t', 'I couldn’t sleep last night.', 'no ability, general or once'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
        { q: 'My grandmother ___ speak four languages.', o: ['could', 'managed to', 'was able'], why: 'General ability over her life: *could*.' },
        { q: 'The exam was hard, but I ___ pass it.', o: ['managed to', 'could', 'can'], why: 'One difficult success: *managed to*.' },
        { q: 'It was so noisy that I ___ hear the teacher.', o: ['couldn’t', 'didn’t manage', 'wasn’t able'], why: 'Negative: *couldn’t* works for one occasion too.' },
      ] },
    ] },
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'After three hours we [could] reach the top of the mountain.', a: ['managed to', 'were able to'], why: 'One success: *managed to* or *were able to*.' },
        { s: 'She managed [finish] the marathon in four hours.', a: ['to finish'], why: '*manage* + *to* + verb.' },
        { s: 'I wasn’t able [open] the window.', a: ['to open'], why: '*be able* + *to* + verb.' },
      ] },
      { t: 'ex', kind: 'transform', h: 'Rewrite with the word given.', items: [
        { q: 'In the end I found my keys.', cue: 'managed', a: ['In the end I managed to find my keys.'], why: 'A success after trying: *managed to find*.' },
        { q: 'He couldn’t get a ticket.', cue: 'able', a: ['He wasn’t able to get a ticket.', 'He was not able to get a ticket.'], why: '*couldn’t* = *wasn’t able to*.' },
      ] },
    ] },
    { title: 'Exam corner: Reading part 5', blocks: [
      { t: 'reading', title: 'The long swim', md: 'Last summer Tom decided to swim across the lake near his village. He had trained for months, but on the day the water was very cold. For the first hour he (1) ___ keep a good speed. Then the wind started, and he (2) ___ see the other side. He almost gave up, but in the end he (3) ___ to reach the beach, where his friends were waiting.' },
      { t: 'ex', kind: 'choice', h: 'In the format of B1 Preliminary Reading part 5: choose the right word for each gap.', items: [
        { q: 'Gap 1', o: ['was able to', 'managed', 'could to'], why: '*was able to* + verb for one occasion.' },
        { q: 'Gap 2', o: ['couldn’t', 'didn’t manage', 'wasn’t able'], why: 'Only *couldn’t* fits before a bare verb in the negative.' },
        { q: 'Gap 3', o: ['managed', 'could', 'succeeded'], why: '*managed to reach*; *succeeded* needs *in reaching*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Reading part 5 look at the words **after** the gap: *to*, *in* or a bare verb often tells you which option fits.' },
    ] },
  ],
  activities: {
    one: { title: 'Challenge interview', md: 'Ask the student about a difficult moment: an exam, a move, learning to drive. They tell it with *couldn’t* at the start and *managed to* at the end. Retell it back with one mistake on purpose; the student finds it.' },
    small: { title: 'Against the odds', md: 'Each student gets a problem in the chat (*the last train was cancelled*, *the shop closed early*). The next student must say how they *managed to* solve it, then pass a new problem on. Keep going until each student has spoken three times.' },
    group: { title: 'Rescue stories', md: 'In breakout rooms of three, students build a short story of a rescue (lost hikers, a stuck cat) with two *couldn’t*, two *managed to* and one *was able to*. Each room tells its story in the main room in one minute.' },
  },
  homework: { book: 'u15:p1', md: 'Do book lesson 1 of unit 15 (I managed to finish). Then write 60 words about a challenge you managed, using *could*, *couldn’t* and *managed to*.' },
};
