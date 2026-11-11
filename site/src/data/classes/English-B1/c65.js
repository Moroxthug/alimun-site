// English B1, class 65 (docs/LESSONS_PLAN.md). Builds on book lesson u13:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c65',
  focus: 'By the end of the class every student has followed a short mystery, used the clues to reach a conclusion, and explained it with the language of unit 13: present and past deduction (*must be, can’t have been*), certainty words, and the detective phrases (*Did you notice…? It can’t have been… because… So it must have been…*). Students should argue their solution, not only state it.',
  tips: [
    'Let students disagree. A mystery works best when two students defend different solutions and have to give reasons.',
    'Typical mistakes: *It can’t be Mrs Dunn yesterday* (needs *can’t have been*), *Someone might have took it* (needs *taken*).',
    'Reading Part 5 tests grammar and vocabulary in context. Ask students to explain why each wrong option is wrong; it is the best way to learn the patterns.',
    'Keep the reading time short in class: students can read the book version again at home.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Do you like detective stories? What makes a good mystery?*' },
    { min: 12, title: 'The mystery', md: 'Show board page 1. Read the mystery together. Students note the clues.' },
    { min: 13, title: 'Solve it', md: 'Show board page 2. Students rule out suspects with *can’t have* and reach a conclusion with *must have*, using the detective phrases.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: Reading Part 5. Students choose the word for each gap and explain the wrong options.' },
    { min: 5, title: 'Close', md: 'Each student says who they think took the painting and why, in one sentence. Set the homework.' },
  ],
  board: [
    { title: 'The missing cake', blocks: [
      { t: 'reading', title: 'The missing cake', md: 'On Friday afternoon, a birthday cake disappeared from the office kitchen. It was there at two o’clock. At three o’clock the plate was empty.\n\nThree people were in the office. Marco was in a meeting from one until four, with the door closed. Lena had a bad cold and said she could not taste anything all week. Jamal said he was at his desk all afternoon, but there was chocolate on his sleeve, and the cake was chocolate.\n\nThe kitchen window was open, and there were small dirty footprints on the floor. The office cat, Biscuit, was asleep under Jamal’s desk, looking very happy.' },
    ] },
    { title: 'Solve it', blocks: [
      { t: 'table', caption: 'Thinking like a detective', explain: ['head', 'col0'], head: ['Step', 'Say'], rows: [
        ['notice a clue', 'Did you notice the chocolate on his sleeve?'],
        ['suggest an explanation', 'Someone might have come in through the window.'],
        ['rule something out', 'It can’t have been Marco, because he was in a meeting.'],
        ['reach a conclusion', 'So it must have been…'],
      ] },
      { t: 'ex', kind: 'choice', h: 'Choose the best conclusion for each clue.', items: [
        { q: 'Marco was in a meeting from one until four.', o: ['It can’t have been Marco.', 'It must have been Marco.', 'Marco might have taken it at two.'], why: 'He was in the meeting the whole time: *can’t have been*.' },
        { q: 'There were small dirty footprints and the cat looked very happy.', o: ['The cat might have eaten some of it.', 'The cat can’t have been in the kitchen.', 'Lena must have taken the cat.'], why: 'Small footprints and a happy cat: possible, *might have*.' },
      ] },
    ] },
    { title: 'Exam corner: Reading Part 5', blocks: [
      { t: 'text', md: 'In the format of B1 Preliminary Reading Part 5: choose the best word for each gap.\n\n*The police are still looking for the painting. It (1) ___ have been taken during the night, because the guard saw it at midnight. The thief must have (2) ___ through the roof, as all the doors were locked. It (3) ___ as if the thief knew the building very well.*' },
      { t: 'ex', kind: 'choice', h: 'Choose the best word for each gap.', items: [
        { q: '(1)', o: ['must', 'can’t', 'should'], why: 'The guard saw it at midnight, so it is almost sure it was taken during the night: *must*.' },
        { q: '(2)', o: ['climbed', 'climb', 'climbing'], why: '*Must have* + past participle: *climbed*.' },
        { q: '(3)', o: ['looks', 'sees', 'shows'], why: 'Fixed phrase: *It looks as if*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Reading Part 5, check the **grammar pattern** around the gap: after *must have* you need a past participle; after *It* + *as if* you need *looks* or *seems*.' },
    ] },
  ],
  activities: {
    one: { title: 'Interview the suspect', md: 'The student is the detective; you play Jamal from the reading. The student asks questions (with question tags where possible: *You were at your desk all afternoon, weren’t you?*) and then explains their conclusion. Swap roles: you are the detective and the student is Lena.' },
    small: { title: 'Write a mystery', md: 'The group writes a short mystery together in the chat: a missing object, three suspects, three clues. Then each student argues for a different solution using *must have, might have* and *can’t have*. The group votes on the most logical answer.' },
    group: { title: 'Case files', md: 'Breakout rooms of three each get a short case (a missing phone at a party, a broken window at school, a lost dog). They solve it and prepare a one-minute explanation using the detective phrases. Bring the rooms back to present; the class can challenge each solution.' },
  },
  homework: { book: 'u13:p4', md: 'Finish book lesson 4 of unit 13 and its unit test. Then write the solution to *The missing cake* in about 80 words, explaining each clue.' },
};
