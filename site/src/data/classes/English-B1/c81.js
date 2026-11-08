// English B1, class 81 (docs/LESSONS_PLAN.md). Exam practice: B1 Preliminary Speaking, parts 1 to 4 (units 13 to 16). Draft for the owner's review.
export const LESSON = {
  id: 'c81',
  focus: 'By the end of the class every student has practised all four parts of B1 Preliminary Speaking: answering the examiner’s questions (part 1), describing a photo for about a minute (part 2), discussing a situation with a partner and deciding together (part 3), and discussing a related topic (part 4). Each student knows the four criteria the examiners use and one thing to improve.',
  tips: [
    'The exam is in pairs. In a one to one class, you play the partner; in groups, pair students and move between them as the examiner.',
    'Time each part strictly: part 2 is one minute per student, part 3 about two to three minutes.',
    'Share the criteria before practice: grammar and vocabulary, discourse management (long, connected answers), pronunciation, and interactive communication (working with the partner).',
    'For part 2, students who stop early lose marks. Teach phrases to keep going: *In the background I can see…*, *It looks like…*, *Maybe they are…*.',
    'Use deduction from unit 13 in part 2 (*They must be on holiday*) and contrast from unit 14 in parts 3 and 4.',
  ],
  plan: [
    { min: 5, title: 'Criteria', md: 'Show board page 1. Explain the four criteria and the four parts.' },
    { min: 8, title: 'Part 1', md: 'Show board page 2. Ask each student three questions as the examiner.' },
    { min: 15, title: 'Part 2', md: 'Show board page 3. Each student describes a photo for one minute; the class notes one strength.' },
    { min: 15, title: 'Parts 3 and 4', md: 'Show board page 4. Use the activity for your class size below.' },
    { min: 12, title: 'Feedback', md: 'Show board page 5. Students check their own speaking against the phrases, and you give each one a strength and a target.' },
    { min: 5, title: 'Close', md: 'Set the homework: record part 2 at home.' },
  ],
  board: [
    { title: 'Exam corner: how Speaking is marked', blocks: [
      { t: 'table', caption: 'B1 Preliminary Speaking', explain: ['head', 'col1', 'col2'], head: ['Part', 'What you do', 'Time'], rows: [
        ['1', 'answer the examiner’s questions about yourself', '2 to 3 minutes'],
        ['2', 'describe a photo on your own', 'about 1 minute each'],
        ['3', 'discuss a situation with your partner and decide', '2 to 3 minutes'],
        ['4', 'discuss a related topic with your partner', 'about 3 minutes'],
      ] },
      { t: 'tip', art: 'owl', md: 'Examiners mark four things: **grammar and vocabulary**, **long connected answers**, **pronunciation**, and **how you work with your partner**. Silence is the only real problem: keep talking.' },
    ] },
    { title: 'Part 1: about you', blocks: [
      { t: 'examples', items: [
        { s: 'What do you like doing at the weekend?', n: 'Give an example and a reason.' },
        { s: 'Tell us about the last film you saw.', n: 'Past simple and an opinion with *so* or *such*.' },
        { s: 'Is there anything you wish you could change about your town?', n: '*I wish* + past.' },
      ] },
    ] },
    { title: 'Part 2: describe the photo', blocks: [
      { t: 'text', md: '**Photo A:** *A family is having a picnic in a park. It looks cloudy. A child is crying and a dog is running away with a sandwich.*\n\n**Photo B:** *Two young people are climbing a wall at an indoor climbing centre. One is at the top and smiling; the other is holding the rope.*\n\n(Teacher: describe the photo in words, or show a similar photo from your own materials.)' },
      { t: 'ex', kind: 'choice', h: 'Which phrase keeps a description going?', items: [
        { q: 'You do not know the word for something in the photo.', o: ['It’s a kind of…, you use it for…', 'I don’t know.', 'Next question, please.'], why: 'Explain the word with other words.' },
        { q: 'You want to guess what is happening.', o: ['They must be on holiday.', 'They are on holiday, sure.', 'Holiday.'], why: 'Deduction with *must*.' },
      ] },
    ] },
    { title: 'Parts 3 and 4: together', blocks: [
      { t: 'text', md: '**Part 3:** A friend wants to get fitter but has little time and money. Here are some ideas: *walking to work*, *a gym membership*, *online exercise videos*, *a sports team*, *cycling at weekends*. Talk together about how good each idea is and decide which is best.\n\n**Part 4:** *Do people your age do enough exercise? Do you prefer doing sport alone or with others? Why?*' },
      { t: 'ex', kind: 'match', h: 'Match each phrase with what it does.', pairs: [
        ['What do you think?', 'asking your partner'],
        ['I see what you mean, but…', 'disagreeing politely'],
        ['So shall we choose…?', 'deciding together'],
        ['For example, …', 'giving an example'],
      ] },
    ] },
    { title: 'Check yourself', blocks: [
      { t: 'ex', kind: 'tf', h: 'Is this a good strategy in B1 Preliminary Speaking?', items: [
        { q: 'In part 2, stop when you have named the people.', a: 'f', why: 'Keep going for about a minute: place, actions, guesses.' },
        { q: 'In part 3, ask your partner questions.', a: 't', why: 'Working together is one of the four criteria.' },
        { q: 'In part 1, give one-word answers to save time.', a: 'f', why: 'Give a short reason or example.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'You and the examiner', md: 'Do the whole test with you as examiner for parts 1 and 2 and as partner for parts 3 and 4. Then repeat part 3 with the student leading. Give one mark from 1 to 5 for each criterion and explain the lowest.' },
    small: { title: 'Pairs and observer', md: 'In groups of three, two students do parts 3 and 4 while the third is the examiner with the criteria in the chat. Rotate so everyone takes each role; the observer gives each speaker one strength and one tip.' },
    group: { title: 'Exam rooms', md: 'Put students in breakout rooms of two (the real exam format) with the part 3 and 4 tasks in the chat. Visit each room as the examiner for two minutes. In the main room, share the best phrases you heard.' },
  },
  homework: { book: 'u13 u14 u15 u16', md: 'Record yourself describing a photo from your phone for one minute (part 2). Listen back: count your pauses and note one phrase to keep talking that you will use next time.' },
};
