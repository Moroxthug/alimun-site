// English A1, class 1 (docs/LESSONS_PLAN.md). Welcome class; builds on book unit u1. Draft for the owner's review.
export const LESSON = {
  id: 'c01',
  focus: 'The first class sets the tone for the whole course. By the end every student has spoken English at least five times, knows the names of the others, can say *Hello, I’m … I’m from …*, and knows how the course works: two classes a week, the course book and about 30 minutes a day of book and practice, and the exam they are preparing for (A2 Key comes after A2). Keep it warm and relaxed: many students are nervous in their first class.',
  tips: [
    'Learn every name in the first ten minutes and use names all the time. Ask students to write their name in the chat so everyone can see the spelling.',
    'Total beginners may freeze. Give them a model sentence on the board and let them read it the first time; the second time, hide it.',
    'Do not correct every mistake today. Correct only *I am* / *I’m* and the missing subject (*Am from Spain*), and praise every attempt.',
    'Show the dashboard on your screen for two minutes: the course book, Practice and Homework. Students who know where things are do the home study.',
    'Some students come from other levels or are unsure about A1. Note who seems much stronger and tell the school after class.',
  ],
  plan: [
    { min: 5, title: 'Welcome', md: 'Greet each student by name as they join: *Hello, Ana! Welcome.* Introduce yourself in short sentences: *I’m Laura. I’m your teacher. I’m from Dublin.* Write them on the board.' },
    { min: 10, title: 'Who are you?', md: 'Show board page 1. Model the three sentences, then each student says them. Write each student’s name and city on the board as they speak.' },
    { min: 10, title: 'How the course works', md: 'Show board page 2. Explain simply, and show the dashboard: the classes, the book lesson before or after each class, Practice, homework. Say which exam the course prepares for. Check understanding with the true or false exercise.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Classroom English', md: 'Show board page 3. Teach the phrases students need in every class. Practise them: say a phrase, students say it back; then act out a situation (you speak too fast) and students choose the phrase.' },
    { min: 5, title: 'Exam corner', md: 'Show board page 4. Explain in one sentence that every class has a short task in the format of the exam. Do it together.' },
    { min: 5, title: 'Close', md: 'Each student says one sentence: *Goodbye! See you on Thursday.* Set the homework and show where it is in the dashboard.' },
  ],
  board: [
    { title: 'Who are you?', blocks: [
      { t: 'text', md: 'Three sentences to start: your **name**, where you are **from**, and one thing about you.' },
      { t: 'examples', items: [
        { s: 'Hello! **I’m** Laura.', n: 'Your name.' },
        { s: '**I’m from** Dublin, in Ireland.', n: 'Your city or country.' },
        { s: '**I’m** a teacher. / **I’m** a student.', n: 'One thing about you.' },
      ] },
      { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
        { a: 'I’m from Madrid.', why: '*I’m from* + a city.' },
        { a: 'My name is Ahmed.', why: '*My name is* + your name.' },
      ] },
    ] },
    { title: 'How the course works', blocks: [
      { t: 'text', md: 'You have **two classes a week**. Before or after each class, do the **book lesson** in your dashboard. Then **practise about 30 minutes a day**: book exercises, Practice and flashcards. Every class has a short task in the format of the exam.' },
      { t: 'ex', kind: 'tf', h: 'True or false?', items: [
        { q: 'There are two classes a week.', a: 't', why: 'Two classes a week in this course.' },
        { q: 'You only study in class.', a: 'f', why: 'You also do the book and about 30 minutes a day of practice.' },
        { q: 'Every class has a task in the format of the exam.', a: 't', why: 'This is the *Exam corner*.' },
      ] },
    ] },
    { title: 'Classroom English', blocks: [
      { t: 'table', caption: 'Phrases for every class', explain: ['head', 'col1'], head: ['Say', 'When'], rows: [
        ['Sorry, can you repeat that, please?', 'you did not understand'],
        ['Can you speak more slowly, please?', 'the teacher speaks too fast'],
        ['How do you say … in English?', 'you need a word'],
        ['What does … mean?', 'you do not know a word'],
        ['How do you spell it?', 'you want to write a word'],
      ] },
      { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
        { q: 'You do not understand the teacher. You say:', o: ['Sorry, can you repeat that, please?', 'Goodbye.', 'I’m from Italy.'], why: 'Ask the teacher to say it again.' },
        { q: 'You need the English word for a thing. You say:', o: ['How do you say it in English?', 'How are you?', 'What’s your name?'], why: '*How do you say … in English?*' },
      ] },
    ] },
    { title: 'Exam corner: choose the reply', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: choose the best reply.', items: [
        { q: '“Hi, I’m Sam.”', o: ['Hello, Sam. I’m Ana.', 'Fine, thanks.', 'Goodbye.'], why: 'Say hello and your name.' },
        { q: '“Where are you from?”', o: ['I’m from Brazil.', 'I’m a student.', 'Yes, I am.'], why: '*Where … from?* asks for a place.' },
        { q: '“Welcome to the class!”', o: ['Thank you!', 'I’m 25.', 'See you.'], why: 'Answer *welcome* with *thank you*.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Getting to know you', md: 'Ask the student five easy questions (*What’s your name? Where are you from? Are you a student? Why English?*) and help them answer in full sentences. Then swap: the student asks you the questions, reading from the board. Finish by writing three sentences about the student together.' },
    small: { title: 'Name chain', md: 'Student A says *I’m Ana. I’m from Lima.* Student B repeats A and adds: *She’s Ana. She’s from Lima. I’m Jun. I’m from Seoul.* Continue around the group; the last student says everyone. Then ask: *Who is from …?* and students answer with the names.' },
    group: { title: 'Find three people', md: 'In breakout rooms of three or four, students introduce themselves and find one thing they share (a city, a job, a language). Each room writes one sentence in the chat: *We are all students.* / *Ana and Jun are from Lima.* Back in the main room, read the sentences and correct them together.' },
  },
  homework: { book: 'u1:p1', md: 'Start unit 1 of the course book: do lesson 1 (Hello and goodbye), including the speaking task. Then write three sentences about yourself in your dashboard messages to the teacher: your name, where you are from, and one thing about you.' },
};
