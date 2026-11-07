// English A1, class 35 (docs/LESSONS_PLAN.md). Exam practice: writing and speaking, units 5 and 6. Draft for the owner's review.
export const LESSON = {
  id: 'c35',
  focus: 'Exam practice in the format of A2 Key, writing and speaking, with the language of units 5 and 6. By the end of the class every student knows how the short message task works (25 words or more, three points), can plan and write one, and can answer speaking part 1 questions with a short answer plus detail. Students also learn the simple criteria the examiner uses.',
  tips: [
    'Many learners lose marks by forgetting one of the three points. Teach a routine: read the task, underline the three points, write one sentence for each, check.',
    'Word count: 25 words is not much. Weaker students worry about length; stronger ones write too much and make more mistakes. Aim for 30 to 40 words.',
    'For speaking, the most common problem at A1 is one-word answers. Insist on *answer + one more sentence* for every question.',
    'Be encouraging: this is practice, not a test. Mark with the simple criteria on the board so students learn to check their own work.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What is in the A2 Key exam?* Show the four parts (reading, writing, listening, speaking). Today: writing and speaking.' },
    { min: 10, title: 'The message task', md: 'Board page 1. Read the task and the model answer. Students find the three points in the model.' },
    { min: 10, title: 'How it is marked', md: 'Board page 2. Go through the simple criteria. Students check two sample answers and say which is better and why.' },
    { min: 10, title: 'Write', md: 'Board page 3. Students write their own message (eight minutes), then check it with the criteria.' },
    { min: 15, title: 'Activity: speaking', md: 'Use the activity for your class size below, with the questions on board page 4.' },
    { min: 10, title: 'Feedback and close', md: 'Read two good messages aloud. Give general feedback on speaking. Set the homework.' },
  ],
  board: [
    { title: 'The message task', blocks: [
      { t: 'text', md: '**Task.** You want to go swimming with your friend Sam on Saturday. Write a message to Sam. In your message: ask Sam to come swimming; say where the pool is; say what time to meet. Write **25 words or more**.' },
      { t: 'reading', title: 'A model answer', md: 'Hi Sam, can you come swimming with me on Saturday? The pool is in the sports centre, next to the station. Let’s meet there at ten o’clock. Bring a towel! Maria' },
      { t: 'ex', kind: 'tf', h: 'Read the model. Does it answer each point?', items: [
        { q: 'It asks Sam to come swimming.', a: 't', why: '*can you come swimming with me on Saturday?*' },
        { q: 'It says where the pool is.', a: 't', why: '*in the sports centre, next to the station*.' },
        { q: 'It says what time to meet.', a: 't', why: '*at ten o’clock*.' },
        { q: 'It has fewer than 25 words.', a: 'f', why: 'It has about 35 words.' },
      ] },
    ] },
    { title: 'How it is marked', blocks: [
      { t: 'table', caption: 'Simple criteria for the message', explain: ['head', 'col0', 'col1'], head: ['Check', 'What the examiner looks for'], rows: [
        ['the three points', 'every point is in the message and clear'],
        ['the reader', 'it is easy to understand and sounds like a message to a friend'],
        ['the language', 'simple sentences, mostly correct, some linking words (and, but, so)'],
        ['the length', '25 words or more'],
      ] },
      { t: 'ex', kind: 'choice', h: 'Which answer is better?', items: [
        { q: 'Task: invite a friend to play tennis, say when, say what to bring.', o: ['Hi Jo, do you want to play tennis with me on Sunday at three? Bring your racket and some water. See you!', 'Hi Jo, I like tennis very much. I play tennis every week. Tennis is my favourite sport and I am good. Bye!'], why: 'The first answers all three points; the second is about tennis but does not invite, say when, or say what to bring.' },
      ] },
    ] },
    { title: 'Your turn', blocks: [
      { t: 'text', md: '**Task.** Your English friend Leo wants to visit you next weekend. Write a message to Leo. In your message: say what there is near your home; say what you can do together; say what time Leo can come. Write **25 words or more**.' },
      { t: 'tip', art: 'owl', md: 'Before you write: underline the three points. After you write: count your words and tick each point. Check *there is / there are* and *can* + verb.' },
    ] },
    { title: 'Exam corner: speaking part 1', blocks: [
      { t: 'text', md: 'In part 1 the examiner asks about you. Answer, then add one more sentence.\n\n*Where do you live?* – *I live in a flat in the centre. There’s a big park near my home.*\n\n*What can you see from your window?*\n\n*What do you like doing in your free time?*\n\n*Can you swim? Where do you swim?*\n\n*How often do you play a sport?*' },
      { t: 'tip', art: 'owl', md: 'The examiner wants to hear you speak, so give more than *yes* or *no*. But keep it short and correct: two sentences are perfect at this level.' },
    ] },
  ],
  activities: {
    one: { title: 'Mock speaking', md: 'Play the examiner: ask the part 1 questions from board page 4 in a formal, friendly way, and give the student 20 seconds for each answer. Then give feedback with the criteria (answers the question, adds detail, uses unit 5 and 6 language), and do it again with different questions about home and free time.' },
    small: { title: 'Examiner and candidates', md: 'Students take turns being the examiner: the examiner asks two questions from board page 4 to each candidate. The others listen and give one point of feedback each: *good detail*, *answer too short*, *check can + verb*.' },
    group: { title: 'Breakout mock tests', md: 'In breakout rooms of three: one examiner, two candidates, with the questions in the chat. Rotate every four minutes so everyone is the examiner once. Visit each room for one minute. Back together, collect the best answers on the board.' },
  },
  homework: { book: 'u6', md: 'Correct your message from class with the criteria and send it to your teacher. Then write a second message: invite a friend to your favourite place in your town, say what you can do there, and when to meet (25 words or more).' },
};
