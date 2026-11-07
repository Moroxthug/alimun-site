// English A1, class 34 (docs/LESSONS_PLAN.md). Review class for book unit u6. Draft for the owner's review.
export const LESSON = {
  id: 'c34',
  focus: 'A speaking-heavy review of unit 6. By the end of the class every student can talk for one minute about their abilities and free time: what they can and can’t do, what they like doing, how often they do it, and ask polite requests. The teacher notes and corrects the typical unit 6 mistakes.',
  tips: [
    'Typical unit 6 mistakes to listen for: *she cans*, *can to + verb*, *I like swim*, *play swimming*, *I go always*. Collect them during the activities for the “Fix it” stage.',
    'Mix grammar in the speaking: one question can need *can*, the next *like + -ing*, the next a frequency word. This is closer to real conversation and to the exam.',
    'Give weaker students a list of sentence starters in the chat (*I can …, I can’t …, I love …-ing, I usually …*).',
    'The unit test is the homework; keep today relaxed and encouraging.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask each student one fast question: *Can you cook? Do you like running? How often do you go out?*' },
    { min: 10, title: 'Quick review', md: 'Board pages 1 and 2. The class solves the mixed exercises together.' },
    { min: 20, title: 'Activity', md: 'Use the activity for your class size below. Note mistakes as you listen.' },
    { min: 10, title: 'Fix it', md: 'Board page 3, plus the mistakes you noted during the activity.' },
    { min: 10, title: 'Exam corner', md: 'Board page 4: speaking part 1 practice in the A2 Key format.' },
    { min: 5, title: 'Close', md: 'Ask each student for one new thing they can say after unit 6. Set the unit test as homework.' },
  ],
  board: [
    { title: 'Quick review: can, like', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
        { q: 'My grandmother ___ use a computer.', o: ['can', 'cans', 'can to'], why: '*can* never changes and has no *to*.' },
        { q: 'I love ___ to music.', o: ['listening', 'listen', 'to listening'], why: '*love* + *-ing* for hobbies.' },
        { q: '___ I open the window? It’s hot.', o: ['Can', 'Do', 'Am'], why: 'Asking for permission: *Can I …?*' },
      ] },
    ] },
    { title: 'Quick review: play, go, do, how often', blocks: [
      { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
        { q: 'We ___ swimming every Friday.', a: ['go'], why: '*go* + *-ing* activity.' },
        { q: 'Do you ___ tennis?', a: ['play'], why: 'Ball sports: *play*.' },
        { q: 'She ___ yoga before work.', a: ['does'], why: '*do yoga*; with *she*: *does*.' },
        { q: 'I see my parents once ___ week.', a: ['a'], why: '*once a week*.' },
      ] },
    ] },
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'These are typical mistakes. Find and fix each one.', items: [
        { s: 'He [cans] speak Arabic.', a: ['can'], why: '*can* has no *-s*.' },
        { s: 'I [go always] to the gym.', a: ['always go'], why: 'The frequency word goes before the main verb.' },
        { s: 'They like [play] chess.', a: ['playing'], why: '*like* + *-ing*.' },
        { s: 'Can you [to help] me?', a: ['help'], why: 'No *to* after *can*.' },
      ] },
    ] },
    { title: 'Exam corner: speaking part 1', blocks: [
      { t: 'text', md: 'Answer the examiner. Give **a short answer and one or two more sentences**.\n\n*What do you like doing at the weekend?*\n\n*Can you play a sport? Tell me about it.*\n\n*How often do you see your friends?*\n\n*What can’t you do, but you want to learn?*' },
      { t: 'tip', art: 'owl', md: 'Use the examiner’s words in your answer: *How often do you see your friends?* – *I see my friends **twice a week**, usually on Fridays.* It is easier, and it shows you understood.' },
    ] },
  ],
  activities: {
    one: { title: 'One-minute talk', md: 'The student speaks for one minute about their free time and their skills. Note mistakes; give feedback on the two most important ones; the student tries again. Then do a short mock speaking part 1: ask the four exam corner questions and give feedback on answer length.' },
    small: { title: 'Speed interviews', md: 'Pairs have two minutes to interview each other with questions from unit 6 (can, like, how often). Change pairs three times. At the end each student tells the group the most surprising thing they learnt about a classmate.' },
    group: { title: 'Mock speaking part 1', md: 'In breakout rooms of three: one examiner, two candidates. The examiner asks the four exam corner questions (post them in the chat). Rotate roles twice so everyone is the examiner once. Back together, discuss: *What makes a good answer?*' },
  },
  homework: { book: 'u6', md: 'Do the unit 6 test in the book. Then record yourself answering the four exam corner questions (about 20 seconds for each).' },
};
