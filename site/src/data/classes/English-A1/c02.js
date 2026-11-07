// English A1, class 2 (docs/LESSONS_PLAN.md). Builds on book lesson u1:p1. Draft for the owner's review.
// Fields: focus (the teacher's note: what the class must get out of it), tips (for the teacher), plan (timed stages),
// board (pages the teacher shows and writes on: book blocks, exercises answered on the board), activities by class
// size (one: 1 on 1, small: 2 to 6, group: 7 to 15), homework (book lesson to do, and a short task).
export const LESSON = {
  id: 'c02',
  focus: 'By the end of the class every student can greet someone and say goodbye in a way that fits the time of day and the person, answer *How are you?* briefly and ask it back, and use a title with a family name. Speaking matters more than writing today: every student should say each phrase aloud several times.',
  tips: [
    'Students often use **Good night** as a greeting in the evening. Correct it every time: it is only for leaving or going to bed.',
    'Many learners answer *How are you?* with only *Fine.* Insist on the full pattern: **Fine, thanks. And you?** Model the friendly rising tone on *And you?*',
    'Learners whose language has a polite *you* (Sie, usted, vous) often ask how to be polite in English. Show that English uses titles, names and tone instead, then practise *Good morning, Ms Clark.*',
    'Keep explanations short: the book lesson already explains the rules. Use the class for speaking.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Greet each student by name as they arrive, using different greetings (*Hi, Ana!*, *Good evening, Mr Rossi.*). Ask: *Which greetings did you hear?* Write them on the board.' },
    { min: 10, title: 'Hello and goodbye', md: 'Show board page 1. Ask students to sort the greetings by time of day. Draw a simple day line (morning, afternoon, evening, night) and write each greeting in its place, with *good night* at the very end as a goodbye.' },
    { min: 10, title: 'How are you?', md: 'Show board page 2. Model the question and the three short answers. Drill in a chain: each student answers and asks the next one. Correct the missing *And you?*' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Titles and names', md: 'Show board page 3. Students solve the exercise on the board alone, then the class checks it together. Ask each student how they would greet their doctor, their boss and a friend.' },
    { min: 5, title: 'Exam corner', md: 'Show board page 4: the A2 Key style replies. Read each sentence aloud; students choose the reply.' },
    { min: 5, title: 'Close', md: 'Every student says goodbye to the class in a different way. Set the homework.' },
  ],
  board: [
    { title: 'Hello and goodbye', blocks: [
      { t: 'table', caption: 'When do you say it?', explain: ['head', 'col1'], head: ['English', 'When'], rows: [
        ['good morning', 'before about 12.00'],
        ['good afternoon', 'from about 12.00 to 18.00'],
        ['good evening', 'after about 18.00, when you arrive'],
        ['good night', 'when you leave late, or go to bed'],
        ['hello / hi', 'at any time'],
        ['goodbye / bye', 'when you leave'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the right greeting.', items: [
        { q: '9.00, at work: “___, everyone!”', o: ['Good morning', 'Good night', 'Good evening'], why: 'Before twelve: *good morning*.' },
        { q: '20.00, you arrive at a restaurant: “___.”', o: ['Good evening', 'Good night', 'Good afternoon'], why: 'You arrive in the evening: *good evening*.' },
        { q: '23.00, you leave a party: “___!”', o: ['Good night', 'Good evening', 'Good morning'], why: 'You leave late: *good night*.' },
      ] },
    ] },
    { title: 'How are you?', blocks: [
      { t: 'examples', items: [
        { s: 'How are you? – **Fine, thanks. And you?**', n: 'The usual answer, then ask back.' },
        { s: 'How are you? – **Very well, thank you.**', n: 'More polite.' },
        { s: 'How’s it going? – **Not bad, thanks.**', n: 'Relaxed, with friends.' },
      ] },
      { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
        { a: 'Fine, thanks. And you?', why: 'Answer, *thanks*, then ask back.' },
        { a: 'How are you today?', why: 'Question word, *be*, subject.' },
      ] },
    ] },
    { title: 'Titles and names', blocks: [
      { t: 'text', md: 'Use a title with the **family name**: **Mr** Hill, **Ms** Clark, **Dr** Patel. Never with the first name.' },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'Good morning, [Mr John].', a: ['Mr Hill', 'John'], why: 'A title goes with the family name, or use the first name alone.' },
        { s: '[Good night], Ms Clark! Nice to see you.', a: ['Good evening', 'Hello'], why: 'You are arriving, so not *good night*.' },
      ] },
    ] },
    { title: 'Exam corner: choose the reply', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: choose the best reply.', items: [
        { q: '“Nice to meet you.”', o: ['Nice to meet you, too.', 'Fine, thanks.', 'Good night.'], why: 'Answer with the same words and *too*.' },
        { q: '“See you tomorrow!”', o: ['Bye! See you.', 'Nice to meet you.', 'Yes, I am.'], why: 'A goodbye answers a goodbye.' },
        { q: '“How’s it going?”', o: ['Good, thanks. And you?', 'I’m from Rome.', 'It’s 8 o’clock.'], why: 'It means *How are you?*' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Three meetings', md: 'Play three short scenes with the student, changing roles each time: a friend in the street at 10.00, a hotel receptionist at 21.00, a new colleague on the first day. The student greets, answers *How are you?*, and says goodbye in the right way. After each scene, give one correction and replay it.' },
    small: { title: 'The party', md: 'Everyone stands up (or turns on their camera): it is a party at 20.00. Students meet each other in pairs for one minute each: greet, say their name, ask *How are you?*, say goodbye. Swap pairs three times. Listen and note the most common mistake, then correct it with the whole group.' },
    group: { title: 'Who is it?', md: 'Put students in breakout rooms of three. Give each room three cards (in the chat): a friend, a doctor (Dr Patel), a hotel guest (Mr Hill). Student A chooses a card and greets B as that person; C says who it is (*It’s the doctor!*). Rotate roles. Bring everyone back and ask two rooms to perform one scene.' },
  },
  homework: { book: 'u1:p1', md: 'Finish book lesson 1 of unit 1 (Hello and goodbye), including the speaking task. Then write a short message to a classmate: say hello, ask how they are, and say goodbye.' },
};
