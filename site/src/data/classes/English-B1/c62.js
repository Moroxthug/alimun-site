// English B1, class 62 (docs/LESSONS_PLAN.md). Builds on book lesson u13:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c62',
  focus: 'By the end of the class every student can say how sure they are about something in the present with *must* (almost sure it is true), *might / may / could* (possible) and *can’t* (almost sure it is not true), and can explain their reasons (*It must be his because…*). Students should guess and reason aloud, not just choose the right modal on paper.',
  tips: [
    'The key point is that the opposite of deduction *must* is *can’t*, not *mustn’t*. *Mustn’t* is a rule (*You mustn’t park here*). Put the two side by side on the board.',
    'No *to* after a modal, and no *-s*: *She must be*, not *She must to be* or *She musts be*. Speakers of German and Scandinavian languages often get the meaning right but add *to*.',
    'Use percentages (95%, 50%, 5%) as a quick visual scale; students find it easy to remember.',
    'Mystery objects and photos make this lesson come alive. Bring a few unusual objects or pictures to show on camera.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Show an unusual object or photo on camera. Ask: *What do you think it is? How sure are you?* Accept any answer.' },
    { min: 12, title: 'How sure are you?', md: 'Show board page 1. Explain the scale with the three examples. Students say whether each sentence is 95%, 50% or 5%.' },
    { min: 10, title: 'Practice', md: 'Show board page 2. Students choose the modal and explain the clue that decides it.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: Reading Part 1, short messages. Students choose what each message says.' },
    { min: 5, title: 'Close', md: 'Each student makes one guess about the teacher’s weekend with *must, might* or *can’t*. Set the homework.' },
  ],
  board: [
    { title: 'How sure are you?', blocks: [
      { t: 'table', caption: 'Guessing about now', explain: ['head', 'col0'], head: ['How sure?', 'Modal', 'Example'], rows: [
        ['almost sure it is true (95%)', 'must', 'The lights are on. They must be at home.'],
        ['possible (50%)', 'might / may / could', 'Take an umbrella. It might rain later.'],
        ['almost sure it is not true (5%)', 'can’t', 'That can’t be Tom. He’s in Spain this week.'],
      ] },
      { t: 'tip', art: 'owl', md: 'The opposite of **must** (I’m sure it’s true) is **can’t** (I’m sure it isn’t true). **Mustn’t** means something is not allowed, so it is a different meaning.' },
    ] },
    { title: 'Read the clues', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the best word.', items: [
        { q: 'He’s been working for twelve hours. He ___ be very tired.', o: ['must', 'can’t', 'might not'], why: 'Twelve hours of work: we are almost sure he is tired.' },
        { q: 'She ___ be at home. I saw her in town ten minutes ago.', o: ['can’t', 'must', 'might'], why: 'We saw her in town, so we are sure she is not at home.' },
        { q: 'I’m not sure where Ana is. She ___ be in the library.', o: ['might', 'must', 'can’t'], why: 'We are not sure: possible, *might*.' },
        { q: 'This bag is very expensive. It ___ be real leather.', o: ['must', 'can’t', 'mustn’t'], why: 'The high price is a strong clue: *must*.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'You [must to be] hungry after the match.', a: ['must be'], why: 'No *to* after a modal.' },
        { s: 'That [mustn’t] be Lisa. She has long hair, not short.', a: ['can’t'], why: 'For deduction, the opposite of *must* is *can’t*.' },
      ] },
    ] },
    { title: 'Exam corner: Reading Part 1', blocks: [
      { t: 'text', md: 'In the format of B1 Preliminary Reading Part 1: read each short message and choose what it says.' },
      { t: 'ex', kind: 'choice', h: 'What does the message say?', items: [
        { q: 'Note on a desk: *Found these keys in the meeting room. They must be Jack’s, he was the last one there. Can someone give them to him?*', o: ['The writer thinks the keys belong to Jack.', 'Jack has lost the meeting room keys.', 'The writer will give Jack the keys.'], why: '*They must be Jack’s*: the writer is almost sure they are Jack’s.' },
        { q: 'Message: *The shop might be closed today because of the holiday. Phone first before you go.*', o: ['The shop may not be open today.', 'The shop is closed every holiday.', 'You must phone to buy something.'], why: '*Might be closed* means it is possible, not sure.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Reading Part 1, the options often change **how sure** the message is. *Might* is not the same as *is*, and *must* is not the same as *maybe*. Check the modal verb carefully.' },
    ] },
  ],
  activities: {
    one: { title: 'What’s in the bag?', md: 'Describe the contents of an invented bag one object at a time (a train ticket to Paris, a child’s drawing, a doctor’s appointment card). After each clue the student guesses who the owner is and what they are like, using *must, might* and *can’t* with a reason. Then the student does the same for you.' },
    small: { title: 'Mystery photos', md: 'Share three unusual photos (a strange place, a person with an unusual expression, an object close up). For each one, every student makes one *must*, one *might* and one *can’t* sentence with a reason. The group votes for the most convincing explanation.' },
    group: { title: 'Who is it?', md: 'In breakout rooms of four, each student writes three facts about a famous person in the chat without the name. The others guess using *It must be… / It might be… / It can’t be… because…*. Bring everyone back to share the hardest one.' },
  },
  homework: { book: 'u13:p1', md: 'Finish book lesson 1 of unit 13. Then look out of your window and write six guesses about the people or things you see, two with *must*, two with *might* and two with *can’t*.' },
};
