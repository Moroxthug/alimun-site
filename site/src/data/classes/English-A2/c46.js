// English A2, class 46 (docs/LESSONS_PLAN.md). Review of unit 8 (Experiences). Draft for the owner's review.
export const LESSON = {
  id: 'c46',
  focus: 'By the end of the class every student can use the language of unit 8 together in speaking: superlatives, the present perfect for experiences with *ever* and *never*, *been* and *gone*, and the change to the past simple for a finished time. Most of the class is speaking, with a short slot to fix the most common mistakes before the practice exam.',
  tips: [
    'The biggest problem in unit 8 is mixing the present perfect and the past simple. Listen for it in every activity and collect the examples.',
    'Use the students’ lists of difficult points from the last class to choose what to review.',
    'Keep corrections for the end; during the activities, let students talk.',
    'Remind students: the unit test is homework, and the next class is a practice exam in the format of A2 Key.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Each student asks the class one *Have you ever…?* question; anyone who says yes gives one detail in the past simple.' },
    { min: 10, title: 'Mixed practice', md: 'Show board page 1. Students choose the right form, then explain one answer.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Fix it', md: 'Show board page 2. Students fix the mistakes, then add two you heard during the activity.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3. Students match the questions and answers.' },
    { min: 10, title: 'Close', md: 'Explain what the practice exam will look like and how long each part takes. Set the unit test as homework.' },
  ],
  board: [
    { title: 'Mixed practice', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
        { q: 'This is the ___ cake I’ve ever eaten.', o: ['best', 'better', 'most good'], why: '*good – the best*.' },
        { q: 'I ___ to Prague two years ago.', o: ['went', 'have been', 'have gone'], why: '*two years ago*: past simple.' },
        { q: '___ you ever tried skiing?', o: ['Have', 'Did', 'Are'], why: 'An experience question: *Have you ever…?*' },
        { q: 'My parents aren’t at home. They’ve ___ to the cinema.', o: ['gone', 'been', 'went'], why: 'They are there now: *gone*.' },
      ] },
    ] },
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'Paris is the [most big] city in France.', a: ['biggest'], why: 'A short word: *the biggest*.' },
        { s: 'I [have seen] that film last week.', a: ['saw'], why: '*last week*: past simple.' },
        { s: 'Have you ever [ate] octopus?', a: ['eaten'], why: 'Present perfect needs the past participle: *eaten*.' },
        { s: 'She’s never [went] to a concert.', a: ['been'], why: 'Experience of going somewhere: *been*.' },
      ] },
    ] },
    { title: 'Exam corner: questions and answers', blocks: [
      { t: 'ex', kind: 'match', h: 'In the format of the A2 Key exam: match each question with the best answer.', pairs: [
        ['Have you ever been to Italy?', 'Yes, I went to Rome in 2022.'],
        ['What’s the best book you’ve read?', 'Probably one by Agatha Christie.'],
        ['Where’s Ana?', 'She’s gone to the dentist.'],
        ['When did you start learning English?', 'About two years ago.'],
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Life interview', md: 'Interview the student as if for a magazine: their best and worst experiences, places they have been to and when, something they have never done. Then swap. Collect every mixed tense and fix them in the "Fix it" slot.' },
    small: { title: 'Experience bingo', md: 'Each student makes a 3x3 grid in the chat with experiences (*been on a boat*, *met a famous person*). Students ask *Have you ever…?* and write a name when someone says yes, plus one detail in the past simple. The first full line wins and reads its sentences aloud.' },
    group: { title: 'The class magazine', md: 'In breakout rooms of three, students interview each other and write three sentences for a "class magazine": one superlative, one present perfect, one past simple. Rooms share their sentences in the main room and the class corrects any mistakes.' },
  },
  homework: { book: 'u8', md: 'Do the unit test of unit 8 (Experiences) in the book. Before the practice exam, look again at the unit where your test score was lowest.' },
};
