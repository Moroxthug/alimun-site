// English A1, class 18 (docs/LESSONS_PLAN.md). Conversation class using units u1 to u3. Draft for the owner's review.
export const LESSON = {
  id: 'c18',
  focus: 'A conversation class: meeting new people. Students use everything from units 1 to 3 (greetings, *be*, family and things, daily routine, the present simple) in longer, freer conversations. Fluency comes first: each student should speak for as long as possible, ask follow-up questions and keep a conversation going. Correction happens only in the slot at the end.',
  tips: [
    'Talk less than usual. Your job today is to set up situations, keep time and listen. Aim for students speaking at least 70% of the class.',
    'Do not interrupt to correct. Write mistakes down and use them in the correction slot. Praise good follow-up questions (*Really? Where do you work?*).',
    'Shy students speak more in pairs than in front of the group. Use pairs or breakout rooms before any whole-class speaking.',
    'Teach two "conversation keepers" at the start: **Really?** and **And you?**, plus **Sorry, can you say that again?** Students who use them keep talking for longer.',
    'If a student uses a structure from later units (past tense, *going to*), accept it and do not explain it now.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Show board page 1. Read the useful phrases with the class. Each student chooses two to use today.' },
    { min: 10, title: 'Question bank', md: 'Show board page 2. Together, complete the questions. Then students ask you any three questions from the page.' },
    { min: 25, title: 'Activity', md: 'Use the activity for your class size below. Note mistakes and good language as you listen.' },
    { min: 5, title: 'Exam corner', md: 'Show board page 3: the speaking test, part 1. Ask two or three students the questions like an examiner.' },
    { min: 10, title: 'Correction slot', md: 'Write 4 to 6 mistakes you heard on board page 4 (no names). Students correct them together. Also write two good sentences you heard.' },
    { min: 5, title: 'Close', md: 'Each student says one new thing they learned about a classmate. Set the homework.' },
  ],
  board: [
    { title: 'Keep the conversation going', blocks: [
      { t: 'table', caption: 'Useful phrases', explain: ['head', 'col1'], head: ['Say', 'When'], rows: [
        ['Really?', 'you are interested or surprised'],
        ['And you?', 'you ask the same question back'],
        ['Me too! / Me neither.', 'you are the same'],
        ['Sorry, can you say that again?', 'you did not understand'],
        ['That’s nice! / That’s interesting!', 'you show interest'],
      ] },
      { t: 'examples', items: [
        { s: 'I live near the sea. – **Really?** That’s nice!', n: 'Show interest, then say something more.' },
        { s: 'I don’t drink coffee. – **Me neither.**', n: 'The same, with a negative sentence.' },
        { s: 'I work in a hotel. **And you?**', n: 'Ask back.' },
      ] },
    ] },
    { title: 'Question bank', blocks: [
      { t: 'ex', kind: 'gap', h: 'Complete the questions with one word.', items: [
        { q: 'What ___ your name?', a: ['is', '’s'], why: '*What is your name?*' },
        { q: 'Where ___ you from?', a: ['are'], why: 'With *be*: *Where are you from?*' },
        { q: 'What ___ you do?', a: ['do'], why: '*What do you do?* asks for a job.' },
        { q: '___ you have any brothers or sisters?', a: ['Do'], why: '*Do you have …?*' },
        { q: 'What time ___ you usually get up?', a: ['do'], why: 'Present simple question: *do*.' },
        { q: 'How often ___ you go to the cinema?', a: ['do'], why: '*How often do you …?*' },
      ] },
    ] },
    { title: 'Exam corner: speaking, part 1', blocks: [
      { t: 'text', md: 'In part 1 of the A2 Key speaking test, the examiner asks each person simple questions about themselves. Answer in a full sentence and add one more piece of information.' },
      { t: 'examples', items: [
        { s: 'Where do you live? – I live in Porto, **near the river**.', n: 'Answer, then add one detail.' },
        { s: 'Do you work or study? – I work. I’m a cook **in an Italian restaurant**.', n: 'Not only *I work*.' },
        { s: 'What do you do in your free time? – I **usually** play football **on Sundays**.', n: 'A frequency word and a time make the answer better.' },
      ] },
      { t: 'ex', kind: 'choice', h: 'Which answer is better in the exam?', items: [
        { q: 'Examiner: “Do you like your job?”', o: ['Yes, I do. I like my colleagues and I work near home.', 'Yes.', 'Yes, I like.'], why: 'A full answer with one more piece of information.' },
        { q: 'Examiner: “Tell me about your family.”', o: ['I have two sisters. They live in Lyon with my parents.', 'Two sisters.', 'My family is.'], why: 'Full sentences and a detail.' },
      ] },
    ] },
    { title: 'Correction slot', blocks: [
      { t: 'text', md: 'Your teacher writes today’s mistakes here. Correct them together, then read the good sentences aloud.' },
      { t: 'ex', kind: 'fix', h: 'Typical mistakes in this kind of conversation: find and fix.', items: [
        { s: 'What [do you do] your name?', a: ['is'], why: '*What is your name?*' },
        { s: 'I [have] 30 years.', a: ['am', '’m'], why: 'For age, use *be*: *I am 30.*' },
        { s: 'She [work] in a school.', a: ['works'], why: '*she* + *-s*.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Three people, one evening', md: 'You play three different people at a party, one after the other (a new neighbour, a colleague of a friend, a tourist). The student starts each conversation, asks at least five questions and answers yours, and uses the useful phrases. Each conversation lasts about seven minutes. After each one, the student tells you two things they found out.' },
    small: { title: 'The welcome party', md: 'Give each student a role card in the chat (name, country, job, family, one hobby, one routine; for example *Lucia, from Mexico, a nurse, two children, plays the guitar, gets up at 5*). Students mingle in pairs for four minutes per pair, staying in role, and must find one thing in common with each person. At the end, each student says who they liked meeting and why.' },
    group: { title: 'Speed meeting', md: 'Breakout rooms of two, three minutes each, then you reshuffle the rooms (five rounds). In each round, students meet as themselves and must find two things in common. Post a new "challenge question" in the chat for each round (*Find out what time your partner goes to bed.*). Back in the main room, ask several students to introduce someone they met.' },
  },
  homework: { book: 'u1 u2 u3', md: 'Write about a person you met in class today (60 to 80 words): their name, where they are from, their job or studies, their family, and their routine. Then do any book lesson from units 1 to 3 where your score is below 80%.' },
};
