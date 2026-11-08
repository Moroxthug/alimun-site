// English A2, class 1 (docs/LESSONS_PLAN.md, L6). Welcome to A2; builds on book unit u1. Draft for the owner's review.
export const LESSON = {
  id: 'c01',
  focus: 'The first A2 class. By the end every student has spoken about themselves for at least two minutes using what they learned in A1 (be, the present simple, can, there is), knows how the A2 course works (two classes a week, the book, practice, the mid-level check and the test for moving up to B1), and has met the rest of the class. Keep the atmosphere relaxed: this class shows students how much they can already do.',
  tips: [
    'Students come from A1, from other schools or from the placement test, so levels are mixed. Listen in the first activity and note who needs more support and who needs a challenge.',
    'Show the course in a few sentences: 48 classes, one per book lesson plus reviews, conversation classes and exam practice. At the end there is a test in the format of A2 Key: passing it means they are ready for B1.',
    'Many learners are shy in the first class. Let them prepare their answers on paper for one minute before speaking.',
    'Typical A1 mistakes still heard at A2: *I am agree*, *She work*, *I have 25 years*. Note them now and bring them back in the class on the present simple.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Greet each student by name. Ask two easy questions: *How are you today? Where are you right now?*' },
    { min: 10, title: 'How the course works', md: 'Show board page 1. Explain the course in your own words: the book, practice, classes, the mid-level check and the A2 Key style test at the end.' },
    { min: 15, title: 'What can you already do?', md: 'Show board page 2. Students choose four questions and prepare short answers. Then each student talks for about a minute while the others listen and ask one more question.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: a short A2 Key style message. Students read it alone, then answer together. Explain that every class has an exam corner like this.' },
    { min: 5, title: 'Close', md: 'Each student says one thing they want to do in English by the end of A2. Set the homework.' },
  ],
  board: [
    { title: 'Your A2 course', blocks: [
      { t: 'text', md: 'At A2 you learn to talk about your **daily life**, the **past**, your **plans**, your **health** and your **travels**, and to understand short texts, messages and conversations.\n\nThe course has **48 classes**: one for each lesson of the book, a review after every unit, two conversation classes and three exam-practice classes. In the middle there is a short **check**. At the end there is a **test in the format of A2 Key**: pass it and you are ready for **B1**.' },
      { t: 'tip', art: 'owl', md: 'Before each class, do the book lesson. After each class, do the practice in your dashboard. Thirty minutes a day is enough.' },
    ] },
    { title: 'What can you already do?', blocks: [
      { t: 'text', md: 'Choose four questions and answer them in full sentences.\n\n**Where are you from, and where do you live now? What do you do? What do you usually do at the weekend? Can you cook, swim or drive? Is there a park or a café near your home? Which languages do you speak?**' },
      { t: 'ex', kind: 'fix', h: 'These sentences have one mistake each. Find it and fix it.', items: [
        { s: 'My sister [work] in a hospital.', a: ['works'], why: 'With *he, she, it*, the present simple adds *-s*.' },
        { s: 'I [have] 28 years old.', a: ['am', '’m'], why: 'For your age, use *be*.' },
        { s: 'There [is] two cafés in my street.', a: ['are'], why: 'More than one: *there are*.' },
        { s: 'She can [speaks] three languages.', a: ['speak'], why: 'After *can*, the simple form.' },
      ] },
    ] },
    { title: 'Exam corner: a short message', blocks: [
      { t: 'reading', title: 'A note on the fridge', md: 'Hi Tom, I’m at the gym until seven. Can you buy some bread and milk on your way home? The shop on the corner closes at eight. Thanks! Ana' },
      { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam (Reading, Part 1): what does the message say?', items: [
        { q: '', o: ['Ana wants Tom to go shopping before eight.', 'Ana is at the shop until seven.', 'Tom must go to the gym after work.'], why: 'She asks him to buy bread and milk; the shop closes at eight.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Reading Part 1 each text is short: a note, a sign, a message. Read it twice, then choose the option that means **the same**, even with different words.' },
    ] },
  ],
  activities: {
    one: { title: 'A two-minute talk', md: 'The student talks for two minutes about their life, using the questions on board page 2. Do not interrupt. Then ask three follow-up questions (*Why? How often? With who?*) and note one thing to improve. Repeat the talk at the end of the class: it is almost always better the second time.' },
    small: { title: 'Find someone who', md: 'Write six prompts in the chat: *…cooks every day, …can play an instrument, …lives near a park, …speaks three languages, …works at the weekend, …has got a pet.* Students ask each other questions (*Do you cook every day?*) and write a name for each. The first to complete the list tells the class what they found.' },
    group: { title: 'Class map', md: 'Breakout rooms of four: each student says where they live, what they do and one thing they like doing. One student in each room writes three facts about the room in the chat. Back in the main room, read the facts and ask the class to guess who each one is about.' },
  },
  homework: { book: 'u1:p1', md: 'Do lesson 1 of unit 1 in the book (Every day). Then write a short message to the class: who you are, what you do and why you are learning English.' },
};
