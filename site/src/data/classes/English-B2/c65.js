// English B2, class 65 (docs/LESSONS_PLAN.md). Builds on book lesson u13:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c65',
  focus: 'By the end of the class every student can plan and write a B2 First review (Writing Part 2, 140 to 190 words): a title, an engaging opening, a short description, a balanced opinion with reasons, and a clear recommendation for a specific reader. Students write the plan and the opening paragraph in class and finish the review at home.',
  tips: [
    'The most common problem is a review that only describes (the whole plot of a film). Tell students: describe briefly, then spend most words on opinion and recommendation.',
    'A review must answer every point in the task. Underline the points in the task together before writing.',
    'Recycle the unit: cleft sentences (*What makes this film special is…*), emphatic *do*, extreme adjectives and collocations all raise the language score.',
    'Count words with students the first time; many write far too much or too little.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Do you read reviews before you watch a film or buy something? What makes a review useful?*' },
    { min: 12, title: 'The shape of a review', md: 'Show board page 1. Read the model review and find the four parts. Point out the language from the unit.' },
    { min: 10, title: 'Useful language', md: 'Show board page 2. Students sort the phrases into describing, giving an opinion and recommending.' },
    { min: 15, title: 'Plan and start', md: 'Show board page 3, the exam task. Students plan their review in four short notes and write the opening paragraph. Read two openings aloud.' },
    { min: 13, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 5, title: 'Close', md: 'Each student says their title and who they recommend the film or book to. Set the homework.' },
  ],
  board: [
    { title: 'A model review', blocks: [
      { t: 'reading', title: 'Small Town, Big Dreams: a film worth your evening', md: 'Have you ever wanted to leave everything behind and start again? That is exactly what Lena, the hero of Small Town, Big Dreams, decides to do.\n\nThe film follows her first year running a tiny café in a village where nobody wants change. Without giving too much away, the story is simple, but the characters are wonderfully real.\n\nWhat makes the film special is the acting. Mira Holt is absolutely brilliant as Lena, and the soundtrack is moving without being too sweet. It does feel a little slow in the middle, but the ending more than makes up for it.\n\nI would recommend this film to anyone who needs a gentle, hopeful story after a long week. Just bring tissues.' },
      { t: 'tip', art: 'owl', md: 'Four parts: **opening** (catch the reader), **description** (short), **opinion** (good and bad, with reasons), **recommendation** (who should see it and why).' },
    ] },
    { title: 'Useful language', blocks: [
      { t: 'ex', kind: 'sort', h: 'Is each phrase for describing, giving an opinion or recommending?', groups: ['describing', 'opinion', 'recommending'], explain: ['groups'], items: [
        { s: 'The story follows…', g: 0, why: 'It tells the reader what happens.' },
        { s: 'It is set in…', g: 0, why: 'It gives the place or time.' },
        { s: 'What I loved most was…', g: 1, why: 'A personal opinion, with a cleft sentence.' },
        { s: 'It does drag a little in the middle.', g: 1, why: 'A balanced criticism with emphatic *do*.' },
        { s: 'It’s a must-see for anyone who…', g: 2, why: 'It tells the reader who should watch it.' },
        { s: 'I wouldn’t recommend it if…', g: 2, why: 'A recommendation with a condition.' },
      ] },
    ] },
    { title: 'Exam corner: Writing Part 2', blocks: [
      { t: 'text', md: 'In the format of B2 First Writing Part 2. **You see this announcement on a website:** *Reviews wanted! Tell us about a film or series that made you think. What was it about? Why did it make you think? Would you recommend it to other people your age?* **Write your review in 140 to 190 words.**' },
      { t: 'ex', kind: 'order', h: 'Put the parts of the review plan in a good order.', items: [
        { a: 'Opening question, short description, opinion with reasons, recommendation.', why: 'This order answers every point in the task and ends with the recommendation.' },
      ] },
      { t: 'tip', art: 'owl', md: 'The examiner checks four things: did you answer **every** part of the task, is it organised, is the language varied, and does it sound like a review (lively, personal, for a reader)?' },
    ] },
  ],
  activities: {
    one: { title: 'Peer review, one to one', md: 'The student reads their opening aloud. You respond as a reader: *Would I keep reading? Why?* Then together you improve one sentence with a cleft sentence or an extreme adjective, and plan the recommendation for a specific reader.' },
    small: { title: 'Best opening', md: 'Each student posts the first sentence of their review in the chat. The group votes for the most engaging one and explains why. Then everyone rewrites their own first sentence once.' },
    group: { title: 'Plan swap', md: 'In breakout rooms of three, students show each other their four-part plans and check that every point of the task is answered. Each student must add one improvement to another’s plan. Back together, share one useful recommending phrase per room.' },
  },
  homework: { book: 'u13:p4', md: 'Finish book lesson 4 of unit 13. Then write the full review for the task on the board in 140 to 190 words and send it to your teacher.' },
};
