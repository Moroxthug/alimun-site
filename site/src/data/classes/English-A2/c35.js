// English A2, class 35 (docs/LESSONS_PLAN.md). Exam practice: listening and speaking, units 5 and 6. Draft for the owner's review.
export const LESSON = {
  id: 'c35',
  focus: 'Exam practice in the format of A2 Key, listening and speaking, with the language of units 5 and 6. By the end of the class every student knows how Listening Parts 1 and 2 work, has practised listening for one word or a number, and has done a short Speaking Part 1 and Part 2 with simple criteria. Strategy matters as much as language today.',
  tips: [
    'Read each listening text aloud **twice**, at a natural speed, as in the exam. Do not slow down too much; students need to get used to real speed.',
    'Before listening, students read the questions and guess the kind of answer (a time, a place, a number). This is the most useful habit to build.',
    'In speaking, the commonest problem at A2 is short answers. Insist on *answer + reason or detail* for every question.',
    'Mark speaking with the simple criteria on the board so students learn what the examiner listens for; keep it encouraging.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What happens in the A2 Key listening and speaking tests?* Show the parts on board page 1.' },
    { min: 10, title: 'Listening Part 1', md: 'Board page 1. Read each short conversation twice; students choose the answer, then check together.' },
    { min: 10, title: 'Listening Part 2', md: 'Board page 2. Students read the notes first and guess the kind of word. Read the text twice; students complete the notes.' },
    { min: 5, title: 'How speaking is marked', md: 'Board page 3. Go through the criteria and the example answers.' },
    { min: 20, title: 'Activity: speaking', md: 'Use the activity for your class size below, with the questions and the task on board page 4.' },
    { min: 10, title: 'Feedback and close', md: 'General feedback with the criteria. Each student says one strategy they will use in the exam. Set the homework.' },
  ],
  board: [
    { title: 'Listening Part 1', blocks: [
      { t: 'reading', title: 'For the teacher to read aloud twice', md: '**One.** Woman: Are we meeting at the cinema? Man: No, the film’s at the shopping centre this week, so let’s meet outside the café there.\n\n**Two.** Man: What’s wrong, Kate? Kate: My back is fine now, but I’ve got a terrible headache.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: choose the right answer.', items: [
        { q: 'One. Where are they going to meet?', o: ['outside the café', 'at the cinema', 'at the station'], why: '*let’s meet outside the café there*; the cinema is not where they meet.' },
        { q: 'Two. What is Kate’s problem?', o: ['a headache', 'her back', 'a cough'], why: '*My back is fine now, but I’ve got a terrible headache.*' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Listening Part 1 you often hear **all three** answers. Listen for words like **but**, **no** and **now**: they show which answer is right.' },
    ] },
    { title: 'Listening Part 2', blocks: [
      { t: 'reading', title: 'For the teacher to read aloud twice', md: 'Hello, this is the Riverside Health Centre. Your appointment with Dr Lopez is on Thursday the twenty-first, not Wednesday. Please come at quarter to ten. The centre is on King Street, opposite the park. Bring your medicine with you.' },
      { t: 'ex', kind: 'gap', h: 'In the format of the A2 Key exam: complete the notes. Write one word, a number or a time.', items: [
        { q: 'Doctor: Dr ___', a: ['Lopez'], why: 'The name is spelled the way it is said: *Lopez*.' },
        { q: 'Day: Thursday the ___', a: ['21st', '21', 'twenty-first'], why: '*Thursday the twenty-first, not Wednesday*.' },
        { q: 'Time: ___ to ten', a: ['quarter'], why: '*quarter to ten*.' },
        { q: 'Street: ___ Street', a: ['King'], why: '*on King Street*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Listening Part 2 read the notes **before** you listen and guess what kind of word is missing. Speakers often correct themselves (*Thursday, not Wednesday*): write the second one.' },
    ] },
    { title: 'How speaking is marked', blocks: [
      { t: 'table', caption: 'What the examiner listens for', explain: ['head', 'col0', 'col1'], head: ['Criterion', 'What it means'], rows: [
        ['grammar and words', 'You use simple forms correctly and know the words you need.'],
        ['pronunciation', 'People understand you easily.'],
        ['talking together', 'You give full answers and keep the conversation going.'],
      ] },
      { t: 'ex', kind: 'choice', h: 'Which answer is better for the exam?', items: [
        { q: 'What are you going to do this weekend?', o: ['I’m going to visit my sister in Leeds. We’re going to cook together.', 'Visit my sister.', 'Yes.'], why: 'A full answer with a detail keeps the conversation going.' },
        { q: 'Do you like going to the doctor’s?', o: ['Not really, because I always have to wait a long time.', 'No.', 'Doctor.'], why: 'Answer + reason.' },
      ] },
    ] },
    { title: 'Exam corner: speaking', blocks: [
      { t: 'text', md: '**Part 1.** What’s your name? Where do you live? What are you doing this weekend? What do you do when you have a cold?\n\n**Part 2.** Talk together about plans for a day out: a picnic, a museum, a football match, a cooking class. Which would you like to do, and why?' },
      { t: 'ex', kind: 'order', h: 'Put the words in order to make good phrases for Part 2.', items: [
        { a: 'What do you think about the picnic?', why: 'Ask your partner’s opinion.' },
        { a: 'I’d like to go to the museum because I love history.', why: 'Say what you want and why.' },
        { a: 'How about the cooking class?', why: 'Suggest another idea.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Mini speaking test', md: 'Play the examiner: ask four Part 1 questions, then do Part 2 together with the pictures described on board page 4. Use the criteria on board page 3 to give one strength and one thing to improve. Repeat Part 2 with a new topic (a weekend away).' },
    small: { title: 'Pairs exam', md: 'In pairs, students do Part 1 (one asks, one answers, then swap) and Part 2 together while the others listen with the criteria. Each listener gives one piece of feedback. Rotate so every pair performs once.' },
    group: { title: 'Examiner rooms', md: 'In breakout rooms of three: one examiner (reads the questions from board page 4) and two candidates. The examiner gives feedback with the criteria. Rotate so everyone is examiner once. Back together, collect the best phrases for Part 2 on the board.' },
  },
  homework: { book: 'u6', md: 'Review units 5 and 6 in the book. Then record yourself (or write) answers to the four Part 1 questions on board page 4, each with a reason or a detail.' },
};
