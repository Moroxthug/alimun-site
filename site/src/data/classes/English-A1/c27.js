// English A1, class 27 (docs/LESSONS_PLAN.md). Builds on book lesson u5:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c27',
  focus: 'By the end of the class every student can name common places in a town, ask *Is there a … near here?*, and understand and give very simple directions (*go straight on, turn left, it’s on the right, it’s next to the bank*). The aim is a complete short exchange: ask, understand the answer, say thank you.',
  tips: [
    'Learners mix up **left** and **right** under pressure. Use hand gestures every time and ask students to do the same on camera.',
    '*It’s on the right* (where it is) and *turn right* (what to do) are different; many learners say *it’s on right*. Drill the article: *on the left, on the right*.',
    'Names of places with *the*: *the station*, *the bank*, but *a bank near here*. Do not go deep into articles; model the chunks.',
    'Directions come back fully in unit 8. Today, keep them to five phrases and focus on the question and the polite thank you.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What is near your home? A supermarket? A park?* Write the places students mention on the board.' },
    { min: 10, title: 'Places in a town', md: 'Board page 1. Students match each place with what you do there. Practise pronunciation of *supermarket*, *pharmacy*, *library*.' },
    { min: 10, title: 'Is there a … near here?', md: 'Board page 2. Read the dialogue in two roles, then swap. Students complete the exercise on the board.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Directions', md: 'Board page 3. Teach the five phrases with gestures, then students solve the order exercise.' },
    { min: 5, title: 'Exam corner', md: 'Board page 4: an A2 Key style listening-type task, read aloud by you.' },
    { min: 5, title: 'Close', md: 'Each student asks the class about one place near them. Set the homework.' },
  ],
  board: [
    { title: 'Places in a town', blocks: [
      { t: 'ex', kind: 'match', h: 'Where do you go?', pairs: [
        ['a bank', 'to get money'],
        ['a pharmacy', 'to buy medicine'],
        ['a library', 'to read and borrow books'],
        ['a supermarket', 'to buy food'],
        ['a station', 'to take a train'],
      ] },
    ] },
    { title: 'Is there a … near here?', blocks: [
      { t: 'dialogue', title: 'In the street', lines: [
        { who: 'Ana', s: 'Excuse me, is there a pharmacy near here?' },
        { who: 'Man', s: 'Yes, there is. Go straight on. It’s on the left, next to the bank.' },
        { who: 'Ana', s: 'Thank you very much.' },
        { who: 'Man', s: 'You’re welcome.' },
      ] },
      { t: 'ex', kind: 'choice', h: 'Read the dialogue. Choose the right answer.', items: [
        { q: 'What does Ana want?', o: ['a pharmacy', 'a bank', 'a station'], why: '*is there a pharmacy near here?*' },
        { q: 'Where is it?', o: ['On the left, next to the bank.', 'On the right, next to the bank.', 'Behind the bank.'], why: '*It’s on the left, next to the bank.*' },
      ] },
    ] },
    { title: 'Simple directions', blocks: [
      { t: 'table', caption: 'Five phrases', explain: ['head', 'col1'], head: ['Say', 'Meaning'], rows: [
        ['Go straight on.', 'do not turn'],
        ['Turn left.', 'go to the left'],
        ['Turn right.', 'go to the right'],
        ['It’s on the left.', 'you can see it at your left side'],
        ['It’s on the right.', 'you can see it at your right side'],
      ] },
      { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
        { a: 'Is there a bank near here?', why: '*Is there* + a place + *near here*.' },
        { a: 'Go straight on and turn right.', why: 'Directions start with the verb.' },
        { a: 'It’s next to the supermarket.', why: '*It’s* + where it is.' },
      ] },
    ] },
    { title: 'Exam corner: where is it?', blocks: [
      { t: 'text', md: 'The teacher reads a short conversation. Listen and choose the answer.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: where is the library?', items: [
        { q: '“Excuse me, where’s the library?” – “Go straight on. It’s on the right, between the bank and the café.”', o: ['between the bank and the café', 'next to the station', 'on the left'], why: 'The speaker says *on the right, between the bank and the café*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In the listening test, the speakers often name **two or three places**. Do not choose the first place you hear: listen for *between*, *next to* and *opposite*.' },
    ] },
  ],
  activities: {
    one: { title: 'My street', md: 'The student describes the street where they live: what places there are and where they are (*There is a café next to my house*). You ask follow-up questions: *Is there a park near here? Is there a pharmacy?* Then the student asks you about your street.' },
    small: { title: 'Ask the way', md: 'Draw a simple street map on the board with six places. Students work in pairs: A asks *Is there a … near here?*, B answers with directions from the start point, A says which place it is. Swap roles after three questions.' },
    group: { title: 'Tourist and local', md: 'In breakout rooms of three: one tourist, two locals. The tourist asks for three places in the town where the locals live; the locals answer with real places. Rotate so everyone is the tourist once. Back together, ask: *Which town has the best places?*' },
  },
  homework: { book: 'u5:p3', md: 'Finish book lesson 3 of unit 5 (Is there a bank near here?), including the speaking task. Then write three questions and answers about places near your home.' },
};
