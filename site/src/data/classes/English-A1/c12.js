// English A1, class 12 (docs/LESSONS_PLAN.md). Exam practice on units u1 and u2. Draft for the owner's review.
export const LESSON = {
  id: 'c12',
  focus: 'The first exam-practice class. Students meet the kinds of reading and listening tasks they will see in A2 Key, using only the language of units 1 and 2: short notices, a short message with questions, choosing the right reply, and listening for names, numbers and spelling. By the end every student knows three exam strategies: read the questions first, look for words that mean the same, and listen for the exact detail (a spelling, a number). Results are not graded; the goal is confidence.',
  tips: [
    'Explain that A2 Key is the exam at the end of A2, so this is early practice: the tasks are easier, the format is the same.',
    'Time the tasks (the timer on screen). Students who finish early check their answers instead of waiting.',
    'Read the listening texts at natural speed, twice, as in the exam. Do not slow down the second time.',
    'After each task, ask *How did you find the answer?* The strategy matters more than the score.',
    'Some students get anxious about exams. Keep the tone light and celebrate progress.',
  ],
  plan: [
    { min: 5, title: 'About the exam', md: 'Show board page 1. Explain the exam parts in two sentences and the three strategies.' },
    { min: 10, title: 'Reading: notices', md: 'Show board page 2. Students have four minutes alone, then check together. Ask which words helped.' },
    { min: 10, title: 'Reading: a message', md: 'Show board page 3. Five minutes alone; check together.' },
    { min: 15, title: 'Listening', md: 'Show board page 4. Read each conversation twice at normal speed. Students answer in the chat, then check.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below: students make their own exam questions.' },
    { min: 5, title: 'Close', md: 'Ask each student which task was easiest and which was hardest. Set the homework.' },
  ],
  board: [
    { title: 'The exam and three strategies', blocks: [
      { t: 'text', md: 'A2 Key has **reading and writing**, **listening** and **speaking**. Today we practise reading and listening with words from units 1 and 2.\n\n**Read the questions first**, then the text.\n\n**Look for words that mean the same**: *Porto* and *Portuguese*, *mum* and *mother*.\n\n**Listen for the detail**: a spelling, a number, a name.' },
      { t: 'tip', art: 'owl', md: 'In the exam, never leave an answer empty. A guess can be right; an empty answer is always wrong.' },
    ] },
    { title: 'Reading: notices', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key reading test: what does the notice say?', items: [
        { q: 'Notice on a classroom door: “English class: room 14. Bring your book and a pen.”', o: ['Students need a book and a pen.', 'The class is in room 40.', 'Students buy a book here.'], why: '*Bring your book and a pen.* Room *14*, not 40.' },
        { q: 'Message: “Hi Ana, my sister’s phone number is 07 6611 4590. Her name is Sophie.”', o: ['Sophie is Ana’s friend’s sister.', 'Sophie is Ana’s sister.', 'Ana’s phone number is 07 6611 4590.'], why: 'The writer’s sister is Sophie; it is her number.' },
        { q: 'Sign at a hotel: “Families with children: rooms on the first floor.”', o: ['Parents with children sleep on the first floor.', 'Children cannot stay here.', 'All rooms are for families.'], why: '*Families with children* = parents with children.' },
      ] },
    ] },
    { title: 'Reading: a message', blocks: [
      { t: 'reading', title: 'From Paulo', md: 'Hi Grace! I’m in Lisbon with my wife, Inés, and our two children. Our son, Lucas, is 8 and our daughter, Maya, is 5. Inés is Spanish, from Seville, but we live in Porto. Lucas has got a new friend here, a boy from Brazil. They speak Portuguese together. See you next week! Paulo' },
      { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key reading test: choose the right answer.', items: [
        { q: 'Where does Paulo’s family live?', o: ['in Porto', 'in Lisbon', 'in Seville'], why: '*we live in Porto*; they are only visiting Lisbon.' },
        { q: 'Inés is', o: ['Spanish.', 'Portuguese.', 'Brazilian.'], why: '*Inés is Spanish, from Seville.*' },
        { q: 'Lucas’s new friend is', o: ['from Brazil.', 'from Spain.', 'his sister.'], why: '*a boy from Brazil*.' },
        { q: 'How many children has Paulo got?', o: ['two', 'three', 'one'], why: '*our two children*: Lucas and Maya.' },
      ] },
    ] },
    { title: 'Listening: names and numbers', blocks: [
      { t: 'text', md: 'Your teacher reads each conversation twice.\n\n**1.** *What’s your surname, please?* – *Cavaco. C, A, V, A, C, O.*\n\n**2.** *How old is your daughter?* – *She’s fourteen. And my son is eleven.*\n\n**3.** *Which room are you in?* – *Room thirteen, next to my parents in room twelve.*\n\n**4.** *Has your brother got a car?* – *No, he hasn’t. He’s got a bike.*' },
      { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key listening test: choose the right answer.', items: [
        { q: 'The surname is', o: ['Cavaco', 'Cabaco', 'Kavaco'], why: '*C, A, V, A, C, O*.' },
        { q: 'The daughter is', o: ['14', '40', '11'], why: '*fourTEEN*; the son is 11.' },
        { q: 'The speaker’s room is', o: ['13', '12', '30'], why: 'Room 13; the parents are in 12.' },
        { q: 'The brother has got', o: ['a bike.', 'a car.', 'a bike and a car.'], why: '*No, he hasn’t. He’s got a bike.*' },
      ] },
      { t: 'tip', art: 'owl', md: 'In listening tasks you often hear **all three** options. Wait for the full answer: *my son is eleven* is about the son, not the daughter.' },
    ] },
  ],
  activities: {
    one: { title: 'Be the examiner', md: 'The student writes one short notice and two questions about it (with three options), using unit 1 and 2 language. You answer them, sometimes choosing a wrong option on purpose; the student explains why it is wrong. Then you dictate a short conversation with a name and a number and the student answers your question.' },
    small: { title: 'Make a listening question', md: 'Each student writes a two-line conversation with a spelling or a number in it and one question with three options (two options must also appear in the conversation). They read it aloud twice; the others answer in the chat. Discuss which questions were tricky and why.' },
    group: { title: 'Exam writers', md: 'Breakout rooms of three write a short message (four or five sentences, units 1 and 2 language) and three multiple-choice questions about it. Back in the main room, rooms exchange messages through the chat and answer each other’s questions. Collect the best question on the board.' },
  },
  homework: { book: 'u2', md: 'In the dashboard, open Mock tests and try the first short A2 Key-style practice set, or do the unit 1 and unit 2 tests again to get a higher score. Write down one strategy that helped you.' },
};
