// English A1, class 47 (docs/LESSONS_PLAN.md). Practice exam in the format of A2 Key, all units. Draft for the owner's review.
export const LESSON = {
  id: 'c47',
  focus: 'A shortened practice exam in the format of A2 Key, covering all eight units. Students work alone and under time, as in the real exam: reading (notices, a text, gaps), a listening-type task the teacher reads aloud, a short writing task and speaking part 1 questions. Answers are revealed only at the end. The aim is not a score but confidence: students learn the formats and one strategy for each part.',
  tips: [
    'Explain the rules before you start: no dictionaries, no talking, answers in the chat or on paper. Treat it like a real exam; students take it more seriously.',
    'Show answers only at the end of each part, when everyone has finished. Reveal them on the board and explain the *why*, especially for options that looked right.',
    'Read the listening texts twice, at a natural but clear speed, as in the exam. Do not repeat a third time.',
    'A1 students are not yet at A2 Key level. Say so clearly: this class shows them the formats early so the real exam later holds no surprises.',
    'Note each student’s weakest part; you will need it for the end-of-level check in the next class.',
  ],
  plan: [
    { min: 5, title: 'Introduction', md: 'Explain the exam format and the rules for today. Show the four parts on the board.' },
    { min: 15, title: 'Reading', md: 'Show board pages 1 and 2. Students answer alone in the chat or on paper. Ten minutes for the notices and the text, five for the gaps. Then reveal the answers.' },
    { min: 10, title: 'Listening', md: 'Show board page 3. Read each text twice. Students answer alone, then reveal.' },
    { min: 10, title: 'Writing', md: 'Show board page 4. Students write their message in eight minutes; check two messages together against the three points.' },
    { min: 15, title: 'Speaking', md: 'Show board page 5. Ask each student two or three part 1 questions. The others listen and note one good answer.' },
    { min: 5, title: 'Close', md: 'Ask each student which part was the hardest. Give one strategy for it. Set the homework.' },
  ],
  board: [
    { title: 'Reading: notices and messages', blocks: [
      { t: 'ex', kind: 'choice', h: 'Reading part 1: what does each notice or message say?', items: [
        { q: 'CAFÉ: OPEN EVERY DAY 8 AM – 6 PM, EXCEPT MONDAYS', o: ['You cannot have a coffee here on Monday.', 'The café opens at 6 am.', 'The café is open at night.'], why: '*Except Mondays*: it is closed on Monday.' },
        { q: 'Mum: I’m at the shops. Can you buy some bread and milk? Dad has got the car.', o: ['Mum wants you to buy bread and milk.', 'Mum is buying bread and milk.', 'Dad is at the shops.'], why: '*Can you buy some bread and milk?*' },
        { q: 'SALE: ALL JUMPERS HALF PRICE THIS WEEK', o: ['Jumpers are cheaper this week.', 'Jumpers are free this week.', 'There are no jumpers this week.'], why: '*Half price* means they cost less.' },
      ] },
    ] },
    { title: 'Reading: a text and gaps', blocks: [
      { t: 'reading', title: 'My new job', md: 'Hi, I’m Kofi. I’m from Accra, but now I live in Manchester. I work in a hotel near the station. I start at seven, so I get up very early. I go to work by bus and it takes twenty minutes. My colleagues are friendly, and at the weekend we sometimes play football in the park. I can’t cook very well, so I often eat at the hotel!' },
      { t: 'ex', kind: 'tf', h: 'Reading part 3: are the sentences true, false or not given?', ng: true, items: [
        { q: 'Kofi lives in Accra.', a: 'f', why: 'He is from Accra, but he lives in Manchester.' },
        { q: 'He goes to work by bus.', a: 't', why: '*I go to work by bus.*' },
        { q: 'He likes his job very much.', a: 'ng', why: 'He says his colleagues are friendly, but not if he likes the job.' },
        { q: 'Kofi is a good cook.', a: 'f', why: '*I can’t cook very well.*' },
      ] },
      { t: 'ex', kind: 'select', h: 'Reading part 5: choose the right word for each gap.', items: [
        { q: 'Dear Anna, I ___ writing from my holiday in Spain.', o: ['am', 'is', 'have'], why: '*I am* + *-ing*.' },
        { q: 'There ___ a lot of nice beaches here.', o: ['are', 'is', 'has'], why: 'More than one beach: *there are*.' },
        { q: 'We go swimming ___ the morning.', o: ['in', 'on', 'at'], why: '*in the morning*.' },
      ] },
    ] },
    { title: 'Listening', blocks: [
      { t: 'text', md: 'The teacher reads each text twice.\n\nText 1: *The museum opens at half past nine and closes at five. Tickets are eight pounds, and children under twelve are free.*\n\nText 2: *Hi, it’s Mia. I can’t come to the cinema tonight, sorry. I’m working late. Can we go on Friday?*\n\nText 3: *Go straight on and take the second street on the right. The pharmacy is next to the bank.*' },
      { t: 'ex', kind: 'choice', h: 'Listening part 1: choose the right answer.', items: [
        { q: 'Text 1: What time does the museum open?', o: ['9.30', '9.00', '5.00'], why: '*half past nine* is 9.30.' },
        { q: 'Text 1: How much is a ticket for an adult?', o: ['£8', '£12', 'free'], why: '*Tickets are eight pounds.* Children under twelve are free.' },
        { q: 'Text 2: Why can’t Mia go to the cinema?', o: ['She’s working late.', 'She’s ill.', 'The cinema is closed.'], why: '*I’m working late.*' },
        { q: 'Text 3: Where is the pharmacy?', o: ['Next to the bank.', 'Opposite the bank.', 'On the first street on the right.'], why: '*The second street on the right… next to the bank.*' },
      ] },
    ] },
    { title: 'Writing', blocks: [
      { t: 'text', md: 'Writing part 6 format: *You are on holiday. Write a message to your English friend Alex (25 words or more). Say: where you are, what the weather is like, and what you are doing today.*' },
      { t: 'tip', art: 'owl', md: 'Use the three points as your plan, one sentence each, then add one more sentence. Check verbs (*I’m staying*, *It’s sunny*) and capital letters before you finish.' },
    ] },
    { title: 'Speaking part 1', blocks: [
      { t: 'text', md: 'The examiner (the teacher) asks each student two or three questions:\n\n*What’s your name? How do you spell your surname? Where do you live? What do you do? What do you usually do at the weekend? How do you get to work or school? What’s the weather like today? What can you cook?*' },
      { t: 'tip', art: 'owl', md: 'In speaking part 1, answer in a full sentence and add one more piece of information: not just *Madrid*, but *I live in Madrid, near the city centre.* It shows the examiner what you can do.' },
    ] },
  ],
  activities: {
    one: { title: 'Exam with feedback', md: 'Do the whole practice exam with the student, part by part, under time. After each part, reveal the answers and ask the student to explain one wrong answer. For speaking, ask all eight questions and give feedback on full sentences and extra information.' },
    small: { title: 'Mini exam', md: 'Students do the reading and listening alone, then compare answers in pairs before you reveal them: they must explain their choices. For speaking, pair students as examiner and candidate with the question list; you listen to each pair.' },
    group: { title: 'Exam conditions', md: 'The whole class does reading, listening and writing in the main room, answering in the chat only when you say so. For speaking, use breakout rooms of three: an examiner with the question list, a candidate, and an observer who notes full sentences. Rotate; visit every room.' },
  },
  homework: { book: 'u8', md: 'Write the holiday message from the writing part again, using the teacher’s feedback. Then repeat the unit test of the unit you find hardest. The next class is the end-of-level check.' },
};
