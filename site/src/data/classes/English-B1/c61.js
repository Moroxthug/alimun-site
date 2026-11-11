// English B1, class 61 (docs/LESSONS_PLAN.md). Exam practice: B1 Preliminary Listening, units 11 and 12. Draft for the owner's review.
export const LESSON = {
  id: 'c61',
  focus: 'By the end of the class every student has practised the four parts of the B1 Preliminary Listening paper with texts read aloud by the teacher, knows what each part tests and how many times they will hear it, and has a strategy for each part: read the questions first, predict, listen for meaning rather than repeated words, and check on the second listening. The language comes from units 11 and 12.',
  tips: [
    'Read each text aloud at natural B1 speed, twice, as in the real exam. Do not slow down too much: students need to get used to real speed.',
    'The main trap in B1 listening is the distractor: all three options are usually mentioned, but only one answers the question. After each task, ask students why the wrong options are wrong.',
    'Give students the time the exam gives them to read the questions before you start reading. Train the habit of predicting the answer.',
    'For Part 3 (gap fill), remind students that spelling counts for common words and that the words they write are the words they hear.',
  ],
  plan: [
    { min: 5, title: 'The Listening paper', md: 'Show board page 1. Explain the four parts and the strategy for each. Ask students which part they find hardest.' },
    { min: 10, title: 'Part 1', md: 'Show board page 2. Students read the questions, then you read each short conversation twice. Check answers and discuss the distractors.' },
    { min: 12, title: 'Part 3', md: 'Show board page 3. Students read the notes and predict the type of word for each gap. Read the talk twice. Check spelling.' },
    { min: 13, title: 'Part 4', md: 'Show board page 4. Students read the questions, then you read the interview twice.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below: students now create and read listening tasks for each other.' },
    { min: 5, title: 'Close', md: 'Each student says one strategy they will use in the exam. Set the homework.' },
  ],
  board: [
    { title: 'The Listening paper', blocks: [
      { t: 'table', caption: 'B1 Preliminary Listening', explain: ['head', 'col1', 'col2'], head: ['Part', 'What you hear', 'What you do'], rows: [
        ['Part 1', 'seven short conversations', 'choose the right picture or answer'],
        ['Part 2', 'six short conversations', 'choose what the speakers think or feel'],
        ['Part 3', 'one person talking', 'write one or two words in each gap'],
        ['Part 4', 'an interview', 'choose the right answer to six questions'],
      ] },
      { t: 'tip', art: 'owl', md: 'You hear every recording **twice**. Use the first listening to choose an answer, and the second to check it. Never leave an answer empty.' },
    ] },
    { title: 'Part 1: short conversations', blocks: [
      { t: 'text', md: '**Teacher reads aloud, twice:**\n\n(1) *Woman:* Did you buy the blue jacket in the end? *Man:* No, it was too expensive, and the black one was the wrong size. So I bought a grey one, which was a real bargain.\n\n(2) *Man:* How much do I owe you for the tickets? *Woman:* They were thirty each, but I had a discount, so give me twenty-five.' },
      { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
        { q: 'Which jacket did the man buy?', o: ['the grey one', 'the blue one', 'the black one'], why: 'Blue was too expensive, black was the wrong size: *I bought a grey one*.' },
        { q: 'How much does the man pay the woman?', o: ['25', '30', '60'], why: 'The tickets were 30, but with the discount: *give me twenty-five*.' },
      ] },
    ] },
    { title: 'Part 3: complete the notes', blocks: [
      { t: 'text', md: '**Teacher reads aloud, twice:** *Welcome to the Second-Hand Market. We are open every Saturday from nine until three. You can find clothes, books and furniture, and everything costs less than twenty pounds. If you want to sell something, you need to book a table online at least a week before. Tables cost eight pounds. Please remember that we only accept cash.*' },
      { t: 'ex', kind: 'gap', h: 'Complete the notes with one or two words or a number.', items: [
        { q: 'Open every ___ from nine until three.', a: ['Saturday'], why: '*We are open every Saturday.*' },
        { q: 'Everything costs less than ___ pounds.', a: ['twenty', '20'], why: '*Everything costs less than twenty pounds.*' },
        { q: 'Book a table at least a ___ before.', a: ['week'], why: '*At least a week before.*' },
        { q: 'You can only pay in ___.', a: ['cash'], why: '*We only accept cash.*' },
      ] },
    ] },
    { title: 'Part 4: an interview', blocks: [
      { t: 'text', md: '**Teacher reads aloud, twice:** *Interviewer:* Tom, you run a website for people who want to save money. How did it start? *Tom:* Well, I was always short of money as a student, so I started writing tips for my friends. I didn’t think anyone else would read them. *Interviewer:* And what is the most popular tip? *Tom:* People love the one about waiting forty-eight hours before buying anything online. It stops impulse buys. *Interviewer:* Do you ever go over budget yourself? *Tom:* Of course! Mostly on concert tickets, I’m afraid.' },
      { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
        { q: 'Tom started writing tips because', o: ['he wanted to help his friends.', 'he wanted to earn money.', 'his teacher asked him to.'], why: 'He *started writing tips for my friends*.' },
        { q: 'His most popular tip is about', o: ['waiting before you buy online.', 'buying second-hand clothes.', 'cooking at home.'], why: '*Waiting forty-eight hours before buying anything online.*' },
        { q: 'Tom sometimes spends too much on', o: ['concert tickets.', 'clothes.', 'travel.'], why: '*Mostly on concert tickets.*' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Your turn to read', md: 'The student writes a Part 1 conversation with three possible answers (one right, two distractors) about shopping or a friend, and reads it aloud twice. You answer and explain your choice. Then discuss together how the distractors worked.' },
    small: { title: 'Make a listening test', md: 'Pairs write a short Part 3 announcement (a shop, a club, a market) with four gaps, in the chat. Each pair reads theirs aloud twice to the group, who complete the gaps. The group checks spelling together.' },
    group: { title: 'Distractor workshop', md: 'Breakout rooms of three write one Part 1 conversation where all three options are mentioned but only one is the answer. Bring everyone back; each room reads its conversation twice and the class answers. Vote for the best distractor.' },
  },
  homework: { book: 'u11 u12', md: 'Listen to the dialogues of units 11 and 12 in the book again without reading, then read them to check. Write down five phrases you did not understand the first time.' },
};
