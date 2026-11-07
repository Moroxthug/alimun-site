// English A1, class 6 (docs/LESSONS_PLAN.md). Review of book unit u1. Draft for the owner's review.
export const LESSON = {
  id: 'c06',
  focus: 'This class brings unit 1 together. By the end every student can have a full first conversation with a stranger: greet, give their name and spell it, say where they are from, their age, job and languages, ask the same questions back, and say goodbye. Speaking time is the priority: aim for every student to speak for at least ten minutes in total. Use the class to remove the most common unit 1 mistakes before the unit test.',
  tips: [
    'Before class, look at the students’ unit 1 practice results in the dashboard and bring two or three of their real mistakes to the board.',
    'The typical unit 1 mistakes: *I have 30 years*, *She is teacher*, *Good night* as a greeting, *Yes, I’m*, missing subject. Listen for them in the activity and write them down without names.',
    'Do not reteach grammar from the beginning. If a point is still weak, use one board example and three quick questions.',
    'Weaker students: give them the question list on board page 1 to read from. Stronger students: ask them to add one extra question of their own.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Fast questions around the class: *How are you? Where are you from? How old is …? How do you spell …?* Keep the pace high.' },
    { min: 10, title: 'The first conversation', md: 'Show board page 1. Read the conversation with a strong student. Then pairs read it with their own information.' },
    { min: 20, title: 'Activity', md: 'Use the activity for your class size below. This is the main part of the class.' },
    { min: 10, title: 'Our mistakes', md: 'Show board page 2, adding the mistakes you heard today. Students fix them alone first, then together.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: a short A2 Key style reading. Students read alone for three minutes, then answer together.' },
    { min: 5, title: 'Close', md: 'Tell students the unit test is in their dashboard and what score passes (70%). Set the homework.' },
  ],
  board: [
    { title: 'The first conversation', blocks: [
      { t: 'dialogue', title: 'At a language café', lines: [
        { who: 'Mira', s: 'Hi! I’m Mira. What’s your name?' },
        { who: 'Owen', s: 'Hello, Mira. I’m Owen. Nice to meet you.' },
        { who: 'Mira', s: 'Nice to meet you, too. Where are you from, Owen?' },
        { who: 'Owen', s: 'I’m from Cardiff, in Wales. And you?' },
        { who: 'Mira', s: 'I’m from Zagreb. I’m a nurse. Are you a student?' },
        { who: 'Owen', s: 'No, I’m not. I’m a chef. I speak English and a little Spanish.' },
        { who: 'Mira', s: 'Great! See you next week, Owen.' },
        { who: 'Owen', s: 'Bye, Mira! Have a nice evening.' },
      ] },
      { t: 'text', md: 'Your questions: **What’s your name? How do you spell it? Where are you from? How old are you? What’s your job? Which languages do you speak?**' },
    ] },
    { title: 'Our mistakes', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'Good [night]! Nice to see you again.', a: ['evening'], why: '*Good night* is only for leaving.' },
        { s: 'My father is [driver].', a: ['a driver'], why: 'A job needs *a* or *an*.' },
        { s: '“Are you a nurse?” “Yes, [I’m].”', a: ['I am'], why: 'Short answers end with the full form.' },
        { s: 'We [is] from Peru.', a: ['are'], why: 'With *we*: *are*.' },
        { s: 'I [don’t] from London.', a: ['’m not', 'am not'], why: 'With *be*, the negative is *be + not*.' },
      ] },
      { t: 'ex', kind: 'build', h: 'Write the sentence. Two words do not belong.', items: [
        { a: 'How old is your sister?', extra: ['has', 'are'], why: '*How old* + *is* + subject.' },
        { a: 'They aren’t from Italy.', extra: ['don’t', 'the'], why: 'Negative of *be*; no *the* before Italy.' },
      ] },
    ] },
    { title: 'Exam corner: read and answer', blocks: [
      { t: 'reading', title: 'New in the club', md: 'Welcome to our new members! Paulo is 34 and he’s from Porto. He’s an engineer and he speaks Portuguese, English and a little French. Aiko is from Osaka. She’s a student and she’s 20. She speaks Japanese and English. Aiko and Paulo are in the Tuesday group.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key reading test: choose the right answer.', items: [
        { q: 'Paulo is', o: ['Portuguese.', 'French.', 'Japanese.'], why: 'He is from Porto, in Portugal.' },
        { q: 'Who speaks three languages?', o: ['Paulo', 'Aiko', 'both of them'], why: 'Paulo: Portuguese, English and a little French.' },
        { q: 'Aiko is', o: ['a student.', 'an engineer.', '34.'], why: '*She’s a student and she’s 20.*' },
      ] },
      { t: 'tip', art: 'owl', md: 'In the exam, read the **questions first**, then find the answer in the text. The words in the question are often different from the words in the text (*Porto* → *Portuguese*).' },
    ] },
  ],
  activities: {
    one: { title: 'Three strangers', md: 'You play three different people the student meets: a neighbour, a new colleague, a tourist at the station. The student starts each conversation and must ask at least four questions. After each one, give one correction and one compliment, then repeat the weakest conversation.' },
    small: { title: 'Speed meeting', md: 'Pairs have a two-minute conversation using the questions on board page 1, then swap partners (use breakout rooms or call pairs in the main room). After three rounds, each student tells the group one person’s information. The listeners say *true* or *false* to check.' },
    group: { title: 'Class profile', md: 'Breakout rooms of four: students interview each other and fill a shared table in the chat (name, city, age, job, languages). Back in the main room, ask quiz questions about the class: *Who speaks three languages? Who is from a big city?* Rooms answer from their tables.' },
  },
  homework: { book: 'u1', md: 'Do the unit 1 test in your course book (70% passes). Then record or write your first conversation: introduce yourself in six sentences and ask three questions.' },
};
