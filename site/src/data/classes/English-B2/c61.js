// English B2, class 61 (docs/LESSONS_PLAN.md). Exam practice: B2 First Listening, with the language of units 11 and 12.
// Draft for the owner's review.
export const LESSON = {
  id: 'c61',
  focus: 'By the end of the class every student knows the four parts of B2 First Listening and one strategy for each: predicting before listening in Part 1, listening for the exact word in Part 2, matching ideas not words in Part 3, and following an argument in Part 4. Students practise each part once with texts the teacher reads aloud, and check their answers against the scripts.',
  tips: [
    'The board has the questions and, on separate pages, the scripts. Read each script aloud twice at natural speed, as in the exam, before you show the script page.',
    'Before each part, give students 20 to 30 seconds to read the questions and underline key words. This is the habit that makes the biggest difference.',
    'In Part 2 the answer is a word or short phrase actually heard, but students often write a synonym. Remind them to write what they hear and to check spelling.',
    'Distractors are the heart of B2 Listening: a speaker mentions an option and then rejects it. When you check answers, show where in the script each wrong option appears and why it is wrong.',
    'If time is short, skip Part 4 in class and set it as homework with the script.',
  ],
  plan: [
    { min: 5, title: 'The Listening paper', md: 'Show board page 1. Explain the four parts and their strategies in two minutes.' },
    { min: 12, title: 'Part 1', md: 'Students read the questions on board page 2. Read script 1 (board page 6) aloud twice. Students answer, then you show the script and check.' },
    { min: 12, title: 'Part 2', md: 'Students read the sentences on board page 3. Read script 2 twice. Check spelling as well as meaning.' },
    { min: 12, title: 'Part 3', md: 'Students read the options on board page 4. Read the three speakers twice. Show where the wrong options are mentioned.' },
    { min: 12, title: 'Part 4', md: 'Students read the questions on board page 5. Read the interview twice, then check.' },
    { min: 7, title: 'Close', md: 'Each student says which part was hardest and which strategy they will use. Set the homework.' },
  ],
  board: [
    { title: 'The Listening paper', blocks: [
      { t: 'table', caption: 'B2 First Listening: four parts, about 40 minutes', explain: ['head', 'col1', 'col2'], head: ['Part', 'What you hear', 'Strategy'], rows: [
        ['Part 1', 'eight short, separate extracts; choose A, B or C', 'read the question first and predict the situation'],
        ['Part 2', 'one long talk; complete ten sentences', 'write the exact word you hear and check the spelling'],
        ['Part 3', 'five speakers; match each to one of eight options', 'listen for the idea, not the same words'],
        ['Part 4', 'an interview; seven questions, A, B or C', 'follow the speaker’s opinion as it develops'],
      ] },
      { t: 'tip', art: 'owl', md: 'You hear everything **twice**. Use the first listening to find the answer and the second to check it.' },
    ] },
    { title: 'Part 1: short extracts', blocks: [
      { t: 'ex', kind: 'choice', h: 'Listen to two short extracts and choose the best answer.', items: [
        { q: 'Extract 1. You hear a woman talking about a holiday. Why did she change her plans?', o: ['The train she wanted was cancelled.', 'She found a cheaper flight.', 'Her friend could not come.'], why: 'She says the night train *was cancelled at the last minute*; the flight was more expensive.' },
        { q: 'Extract 2. You hear a man talking about a purchase. How does he feel about it now?', o: ['He regrets buying it so quickly.', 'He thinks it was good value.', 'He wants to buy another one.'], why: '*I should have waited*: he regrets it. He mentions the price but says it was not worth it.' },
      ] },
    ] },
    { title: 'Part 2: sentence completion', blocks: [
      { t: 'ex', kind: 'gap', h: 'Listen to a guide talking about a slow-travel route. Write one word in each gap.', items: [
        { q: 'The whole route takes about ___ days by train.', a: ['twelve', '12'], why: 'The guide says *twelve days*; *ten* is mentioned for the old route.' },
        { q: 'Travellers sleep in small family-run ___ along the way.', a: ['guesthouses', 'guest houses'], why: 'The exact word is *guesthouses*, not *hotels*, which she says are rare.' },
        { q: 'The most popular part of the trip is the crossing of the ___.', a: ['mountains'], why: '*The crossing of the mountains* is what most people remember.' },
      ] },
    ] },
    { title: 'Part 3: five speakers', blocks: [
      { t: 'ex', kind: 'match', h: 'Listen to three people talking about money. Match each speaker to what they say.', pairs: [
        ['Speaker 1', 'I learned to save from a family member.'],
        ['Speaker 2', 'I spend more since I started shopping online.'],
        ['Speaker 3', 'I regret a big purchase I made when I was young.'],
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 3 there are more options than speakers. Each speaker usually **mentions** two or three options, but only one matches what they really mean.' },
    ] },
    { title: 'Part 4: an interview', blocks: [
      { t: 'ex', kind: 'choice', h: 'Listen to an interview with a travel writer and choose the best answer.', items: [
        { q: 'Why did Maya start travelling slowly?', o: ['She wanted to see more of each place.', 'Flights became too expensive.', 'She was afraid of flying.'], why: 'She says price was *not really the reason*; she wanted time in each place.' },
        { q: 'What does she say about slow travel today?', o: ['It is becoming more popular with young people.', 'It is only for people with lots of money.', 'It will soon replace flying.'], why: '*More and more young people*; she says it will *not replace* flying.' },
      ] },
    ] },
    { title: 'Scripts (show after listening)', blocks: [
      { t: 'reading', title: 'Script 1 and 2', md: 'Extract 1. I had everything booked: the night train to Vienna, a hotel near the station. Then the train was cancelled at the last minute, so I had to fly instead, which cost me twice as much. My friend still came, luckily.\n\nExtract 2. I bought the coat in the sale because the price looked amazing. To be honest, I should have waited and tried it on properly. It was cheap, but it wasn’t worth it.\n\nGuide. Our new route takes about twelve days by train; the old one took ten. Hotels are rare along the way, so you sleep in small family-run guesthouses. Ask anyone who has done it, and they’ll tell you the crossing of the mountains is the part they remember most.' },
      { t: 'reading', title: 'Script 3 and 4', md: 'Speaker 1. My grandmother kept a little notebook of every coin she spent. I laughed at her then, but she taught me to save, and I still do it.\n\nSpeaker 2. Since I started buying everything online, I spend far more. One click and it’s done. I don’t even save my receipts.\n\nSpeaker 3. At twenty I bought a sports car with all my savings. I should have put the money towards a flat. I still think about it.\n\nInterview. People think I travel slowly because flights are expensive, but price was not really the reason. I wanted to see more of each place. And it’s changing: more and more young people choose trains now. Will it replace flying? No, but it’s a real choice.' },
    ] },
  ],
  activities: {
    one: { title: 'Your own extract', md: 'After the parts, the student records (or says) a 30-second extract in the style of Part 1, with one distractor: they mention an option and then reject it. You answer the question and point out how the distractor worked.' },
    small: { title: 'Distractor hunt', md: 'After checking each part, students find in the scripts every wrong option and say in one sentence why it is wrong. The student who finds the most wins the next reading-aloud turn.' },
    group: { title: 'Read aloud in rooms', md: 'In breakout rooms of three, one student reads a script aloud while the others answer the questions; rotate for each part. Bring everyone back to compare answers and discuss the hardest question.' },
  },
  homework: { book: 'u11 u12', md: 'Listen to an English podcast or radio interview of about five minutes. Write three questions in the style of Part 4 with three options each, and the right answers.' },
};
