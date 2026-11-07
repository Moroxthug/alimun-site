// English A1, class 3 (docs/LESSONS_PLAN.md). Builds on book lesson u1:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c03',
  focus: 'By the end of the class every student can use **am**, **is** and **are** correctly with every subject, use the short forms when speaking, and say five things about themselves and another person: name, city, age, job and how they feel. The two mistakes to remove today are *I have 25 years* and a job without *a* / *an*.',
  tips: [
    'Speakers of Spanish, French, Italian, Portuguese and Arabic often say *I have 25 years*. Write *I’m 25.* on the board and point to it every time.',
    'Speakers of Spanish, Italian, Portuguese and Arabic often leave out the subject (*Is a doctor*). Ask *Who?* until they add *he* or *she*.',
    'Many learners forget *a* / *an* with jobs (*She is teacher*). Drill *She’s a teacher, he’s an engineer* with real jobs from the class.',
    'Practise the short forms aloud: *I’m, you’re, he’s, she’s, we’re, they’re*. Students who read them often say the full form; that is fine in writing, but model the short form for speaking.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Say three true and one false sentence about yourself (*I’m 32. I’m from Mars.*). Students say which one is false. Write the true sentences on the board and underline *am*, *is*, *are*.' },
    { min: 10, title: 'am, is, are', md: 'Show board page 1. Build the table with the class: ask *I …?*, *she …?*. Then do the exercise on the board together, one student per item.' },
    { min: 10, title: 'Five things after be', md: 'Show board page 2. For each line, ask two students to say a sentence about themselves. Correct *I have … years* immediately.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Fix the mistakes', md: 'Show board page 3. Students find each mistake alone first (one minute), then you fix them on the board together. Ask *Why?* each time.' },
    { min: 5, title: 'Exam corner', md: 'Show board page 4: read the short text, students decide true or false.' },
    { min: 5, title: 'Close', md: 'Each student says one sentence about the student on their left (*Ana is 30. She’s a nurse.*). Set the homework.' },
  ],
  board: [
    { title: 'am, is, are', blocks: [
      { t: 'table', caption: 'be', explain: ['head'], head: ['Subject', 'be', 'Short form'], rows: [
        ['I', 'am', 'I’m'],
        ['you / we / they', 'are', 'you’re / we’re / they’re'],
        ['he / she / it', 'is', 'he’s / she’s / it’s'],
      ] },
      { t: 'ex', kind: 'gap', h: 'Write am, is or are.', items: [
        { q: 'My teacher ___ from Dublin.', a: ['is'], why: 'One person: *is*.' },
        { q: 'We ___ in the same class.', a: ['are'], why: '*we are*' },
        { q: 'I ___ very happy today.', a: ['am'], why: '*I am*' },
        { q: 'Tom and Ana ___ friends.', a: ['are'], why: 'Two people: *are*.' },
      ] },
    ] },
    { title: 'Five things after be', blocks: [
      { t: 'examples', items: [
        { s: 'I’m **Marco**.', n: 'A name.' },
        { s: 'She’s **from Cairo**.', n: 'A place, with *from*.' },
        { s: 'He’s **42**.', n: 'An age: *be*, not *have*.' },
        { s: 'I’m **an architect**.', n: 'A job, with *a* or *an*.' },
        { s: 'We’re **tired** today.', n: 'How you feel.' },
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
        { q: 'My son ___ 8.', o: ['is', 'has', 'are'], why: 'An age: *be*. One person: *is*.' },
        { q: 'She’s ___ doctor.', o: ['a', 'an', 'the'], why: 'A job with a consonant sound: *a*.' },
        { q: 'He’s ___ engineer.', o: ['an', 'a', 'the'], why: '*engineer* starts with a vowel sound: *an*.' },
      ] },
    ] },
    { title: 'Fix the mistakes', blocks: [
      { t: 'ex', kind: 'fix', h: 'Each sentence has one mistake. Fix it.', items: [
        { s: 'I [have] 25 years old.', a: ['am', '’m'], why: 'For an age, use *be*.' },
        { s: 'My sister is [nurse].', a: ['a nurse'], why: 'A job needs *a* or *an*.' },
        { s: '[Is] from Mexico. He’s my friend.', a: ['He’s', 'He is'], why: 'Every sentence needs a subject.' },
        { s: 'They [is] very kind.', a: ['are'], why: 'With *they*: *are*.' },
      ] },
    ] },
    { title: 'Exam corner: read and decide', blocks: [
      { t: 'reading', title: 'A message from Lina', md: 'Hi! I’m Lina and I’m new in the class. I’m 29 and I’m from Amman, in Jordan. I’m a dentist. My friend Rosa is in the class too. She’s from Lisbon. She’s a student and she’s 22.' },
      { t: 'ex', kind: 'tf', h: 'In the format of the A2 Key exam: true, false or doesn’t say?', ng: true, items: [
        { q: 'Lina is from Jordan.', a: 't', why: 'Amman is in Jordan.' },
        { q: 'Rosa is a dentist.', a: 'f', why: 'Lina is a dentist. Rosa is a student.' },
        { q: 'Rosa is Lina’s sister.', a: 'f', why: 'Rosa is her friend.' },
        { q: 'Lina is married.', a: 'ng', why: 'The message does not say.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Two people I know', md: 'The student chooses two people from their life (a friend, a parent, a colleague) and tells you five things about each: name, city, age, job, and how they are this week. You ask follow-up questions with *is* (*Is he a doctor?*). Correct the age sentence and the missing *a* / *an* every time, then let the student say the whole description again without stopping.' },
    small: { title: 'Fake identities', md: 'Write a fake identity for each student in a private chat message (name, city, age, job, feeling). Each student introduces themselves with the identity in five sentences. The others listen and write one sentence about each person in the chat (*Kemal is 50. He’s a pilot.*). Check the chat sentences together.' },
    group: { title: 'Interview and report', md: 'Breakout rooms of three: each student asks the others *How old are you? What’s your job? How are you today?* and notes the answers. Back in the main room, each student reports one person in three sentences with *he* or *she*. Write the best report on the board.' },
  },
  homework: { book: 'u1:p2', md: 'Do book lesson 2 of unit 1 (I am, you are, she is). Then write five sentences about a person in your family: name, city, age, job and how they are today.' },
};
