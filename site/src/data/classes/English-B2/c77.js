// English B2, class 77 (docs/LESSONS_PLAN.md). Builds on book lesson u16:p2 (Writing Part 2: choose your task). Draft for the owner's review.
export const LESSON = {
  id: 'c77',
  focus: 'By the end of the class every student knows the four B2 First Writing Part 2 task types (article, email or letter, report, review), can recognise the register and layout each one needs, and chooses the task that suits them best in under two minutes. They plan one task together and write the opening paragraph. Knowing which task to choose is the main goal.',
  tips: [
    'Students should choose the task where they have the most to say and the right vocabulary, not the one that looks easiest.',
    'Register is the most common problem: an article can be lively and personal; a report is formal with headings; an email to a friend is informal.',
    'Teach the marking areas in plain words: did you answer everything (content), is it right for the reader (communicative achievement), is it organised (organisation), is the language varied and accurate (language).',
    'The word count is 140 to 190 words. Too short loses content; much too long usually loses accuracy.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Show board page 1. Students match each opening sentence with its task type.' },
    { min: 12, title: 'Four tasks', md: 'Show board page 2. Go through the table and ask which features they can see in the openings.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 15, title: 'Plan and open', md: 'Show board page 3. Choose a task together, plan four paragraphs on the board, then each student writes the first paragraph.' },
    { min: 8, title: 'Exam corner', md: 'Show board page 4. Students choose between two tasks in two minutes and explain their choice.' },
    { min: 5, title: 'Close', md: 'Set the homework: write the full task.' },
  ],
  board: [
    { title: 'Which task is it?', blocks: [
      { t: 'ex', kind: 'match', h: 'Match each opening with the task type.', pairs: [
        ['Have you ever wondered what life would be like without your phone?', 'an article'],
        ['Hi Sam, thanks for your message, it was great to hear from you!', 'an informal email'],
        ['The aim of this report is to assess the sports facilities at our college.', 'a report'],
        ['If you are looking for a film that will keep you guessing, this is it.', 'a review'],
      ] },
    ] },
    { title: 'Four tasks, four styles', blocks: [
      { t: 'table', caption: 'B2 First Writing Part 2', explain: ['head', 'col1', 'col2'], head: ['Task', 'Reader and register', 'Must have'], rows: [
        ['article', 'magazine readers; lively, can be personal', 'a catchy title, questions to the reader'],
        ['email or letter', 'a friend (informal) or a manager (formal)', 'all points answered, a suitable ending'],
        ['report', 'a manager or teacher; formal and clear', 'headings, facts, a recommendation'],
        ['review', 'readers of a website or magazine; neutral', 'description, opinion, a recommendation'],
      ] },
      { t: 'ex', kind: 'choice', h: 'Which is better for the task?', items: [
        { q: 'A report for your college director:', o: ['In conclusion, I would recommend…', 'So, to sum up, it’s awesome!', 'Hope you like my ideas!'], why: 'Reports are formal and end with a recommendation.' },
        { q: 'An article for a student magazine:', o: ['Imagine waking up without your alarm…', 'Dear Sir or Madam,', 'The aim of this report is…'], why: 'Articles involve the reader from the start.' },
      ] },
    ] },
    { title: 'Plan together', blocks: [
      { t: 'text', md: '**Task:** *Your English teacher has asked you to write a review of a place to eat in your town for the school website. Describe the place, say what you liked and did not like, and say who would enjoy it.* Plan: **paragraph one**, introduce the place; **paragraph two**, the food and atmosphere; **paragraph three**, a weakness; **paragraph four**, who it is for and your recommendation.' },
    ] },
    { title: 'Exam corner: choose in two minutes', blocks: [
      { t: 'text', md: '**Task A, an article:** *Is it better to learn something new with a teacher or alone? Write an article for our website.* **Task B, a report:** *Your town wants to attract more young tourists. Write a report on what the town offers and what could be improved.*' },
      { t: 'tip', art: 'owl', md: 'In B2 First Writing Part 2 you choose one of three tasks. Before choosing, ask yourself: do I know the words I need? Can I answer every part? Can I keep the right register for 140 to 190 words?' },
    ] },
  ],
  activities: {
    one: { title: 'Same topic, four styles', md: 'Take one topic (a new gym in town). The student says one opening sentence for each task type: article, email to a friend, report, review. Discuss what changes in each.' },
    small: { title: 'Register detectives', md: 'Share six sentences in the chat from different tasks. Students decide which task each comes from and rewrite one sentence for a different reader.' },
    group: { title: 'Task choice debate', md: 'In breakout rooms of three, students read two tasks and each chooses one, giving two reasons. The room agrees on the best choice for a student who is strong in vocabulary but weak in organisation.' },
  },
  homework: { book: 'u16:p2', md: 'Finish book unit 16, lesson 2. Write the review planned in class (140 to 190 words) and check it against the four marking areas.' },
};
