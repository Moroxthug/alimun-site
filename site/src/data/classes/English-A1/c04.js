// English A1, class 4 (docs/LESSONS_PLAN.md). Builds on book lesson u1:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c04',
  focus: 'By the end of the class every student can ask and answer yes or no questions with *be* (*Are you …? Is she …?*) with correct short answers, make negatives with *not* (*I’m not, he isn’t*), ask *Where are you from?*, *How old …?*, *What’s …?*, and use countries and nationalities with a capital letter. Most of the class is students asking each other questions.',
  tips: [
    'Learners often use *don’t* with *be* (*I don’t from Spain*). Write **be + not** on the board and point to it.',
    'In short answers, *Yes, I’m.* is a typical mistake. Drill **Yes, I am. / Yes, she is.** with a strong final word.',
    'Many languages make questions with intonation only (*You are Spanish?*). Accept it in conversation once, then model the inverted question and ask the student to repeat it.',
    'Students mix up countries and nationalities (*I’m from Spanish*). Use the two-column table and point: *from* + country, *I’m* + nationality.',
    'Use the students’ real countries. If the class is all from one country, add the countries of famous people they know.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Guess: *Are you from Italy? Are you a teacher? Are you 20?* Students answer only *Yes, I am* or *No, I’m not.* Write both answers on the board.' },
    { min: 10, title: 'Questions and short answers', md: 'Show board page 1. Show how the order changes: *You are* → *Are you?* Students make the questions on the board, then answer them about themselves.' },
    { min: 10, title: 'Countries and nationalities', md: 'Show board page 2. Students sort the words, then each says *I’m from … I’m …*. Correct capital letters in the chat.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Question words', md: 'Show board page 3. Match question words with answers; then students ask you questions with each word.' },
    { min: 5, title: 'Exam corner', md: 'Show board page 4: choose the reply, A2 Key style.' },
    { min: 5, title: 'Close', md: 'Each student asks one question to the next student, who answers with a short answer. Set the homework.' },
  ],
  board: [
    { title: 'Are you …? Is she …?', blocks: [
      { t: 'table', caption: 'Questions and short answers', explain: ['head'], head: ['Question', 'Yes', 'No'], rows: [
        ['Are you a student?', 'Yes, I am.', 'No, I’m not.'],
        ['Is he Turkish?', 'Yes, he is.', 'No, he isn’t.'],
        ['Are they from Lima?', 'Yes, they are.', 'No, they aren’t.'],
      ] },
      { t: 'ex', kind: 'transform', h: 'Make a question.', items: [
        { q: 'She is your teacher.', cue: 'Is', a: ['Is she your teacher?'], why: 'Put *is* before *she*.' },
        { q: 'You are from Egypt.', cue: 'Are', a: ['Are you from Egypt?'], why: 'Put *are* before *you*.' },
        { q: 'They are married.', cue: 'Are', a: ['Are they married?'], why: 'Put *are* before *they*.' },
      ] },
    ] },
    { title: 'Countries and nationalities', blocks: [
      { t: 'ex', kind: 'sort', h: 'Country or nationality?', groups: ['country', 'nationality'], explain: ['groups'], items: [
        { s: 'Mexico', g: 0, why: '*I’m from Mexico.*' },
        { s: 'Turkish', g: 1, why: '*I’m Turkish.*' },
        { s: 'Brazil', g: 0, why: '*I’m from Brazil.*' },
        { s: 'Egyptian', g: 1, why: '*I’m Egyptian.*' },
        { s: 'Japan', g: 0, why: '*I’m from Japan.*' },
        { s: 'Italian', g: 1, why: '*I’m Italian.*' },
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
        { q: 'Kenji is from Japan. He’s ___.', o: ['Japanese', 'Japan', 'japanese'], why: 'A nationality, with a capital letter.' },
        { q: 'I’m not French. I’m from ___.', o: ['Portugal', 'Portuguese', 'the Portugal'], why: '*from* + a country, no *the*.' },
      ] },
    ] },
    { title: 'Question words', blocks: [
      { t: 'ex', kind: 'match', h: 'Match the questions and the answers.', pairs: [
        ['What’s your name?', 'Rosa.'],
        ['Where are you from?', 'I’m from Lisbon.'],
        ['How old is your son?', 'He’s six.'],
        ['Who is that?', 'It’s my teacher.'],
        ['How are you?', 'Fine, thanks.'],
      ] },
    ] },
    { title: 'Exam corner: choose the reply', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: choose the best reply.', items: [
        { q: '“Is your sister a student?”', o: ['No, she isn’t. She’s a nurse.', 'No, she doesn’t.', 'Yes, she’s.'], why: 'Short answer with *be*: *No, she isn’t.*' },
        { q: '“How old are you?”', o: ['I’m 31.', 'I have 31.', 'I’m fine.'], why: 'An age with *be*.' },
        { q: '“Are you Spanish?”', o: ['No, I’m Mexican.', 'No, I’m from Mexican.', 'Yes, I’m.'], why: '*I’m* + nationality.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In the exam, the right reply must fit the **grammar** of the question too: *Is …?* wants *Yes, … is* or *No, … isn’t*.' },
    ] },
  ],
  activities: {
    one: { title: 'Twenty questions', md: 'Think of a famous person. The student finds out who it is with yes or no questions only (*Is she American? Is he a singer? Is she old?*). You answer with short answers. Then swap: the student thinks of someone and you ask. Correct questions without inversion by repeating them correctly.' },
    small: { title: 'Find someone who', md: 'Put five prompts in the chat (*… is from a big city*, *… is a student*, *… is over 30*, *… is tired today*, *… is a good cook*). Students ask each other yes or no questions (*Are you a student?*) and write a name next to each prompt. Report: *Ana is a student.*' },
    group: { title: 'Passport control', md: 'Breakout rooms of three: an officer, a traveller and a checker. The officer asks *What’s your name? Where are you from? Are you a tourist? How old are you?*; the traveller answers; the checker listens for short answers and capital letters and writes one correction in the chat. Rotate twice.' },
  },
  homework: { book: 'u1:p3', md: 'Do book lesson 3 of unit 1 (Are you from Spain?). Then write five questions you want to ask a classmate next class, with *Are you …?*, *Is your …?*, *Where …?* and *How old …?*.' },
};
