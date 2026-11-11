// English C1, class 34 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u8:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c34',
  focus: 'By the end every student uses be to, be due to, be set to, be on the verge (brink, point) of, be bound to and the future perfect continuous with the right meaning and grammar: an official plan, a timetable, a likely event in the news, something very close, a confident prediction, and duration up to a point in the future.',
  tips: [
    '*On the verge of* and *on the point of* take *-ing* or a noun, never an infinitive; *due to*, *set to* and *bound to* take the infinitive. Write the two groups side by side on the board.',
    '*Be to* is formal and official. For personal plans it sounds strange (*I’m to have dinner with Tom*); use the present continuous there.',
    '*Bound to* here is a prediction, not an obligation. One quick example makes the difference clear: *It’s bound to rain* (I’m sure it will).',
    'News headlines are full of these forms (*Prices set to rise*, *Minister to resign*). Two or three headlines from today’s news make a good warm-up.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Write two headlines on the blank page, for example *Fares set to rise* and *Minister to visit flood towns*. Students say what each means in a full sentence.' },
    { min: 12, title: 'Which future?', md: 'Show board page 1. Students choose the form, then say what shade of meaning it adds.' },
    { min: 10, title: 'Fix it', md: 'Show board page 2. Students correct the mistakes alone, then compare.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 4. Students complete the sentences alone, count their words, then compare. Reveal the answers.' },
    { min: 5, title: 'Close', md: 'Each student makes one prediction about next year with *bound to* and one with *set to*. Set the homework.' },
  ],
  board: [
    { title: 'Which future?', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the form that fits the meaning.', items: [
        { q: 'All candidates ___ show photo identification on arrival.', o: ['are to', 'are bound to', 'are on the point of'], why: 'An official instruction: *be to*.' },
        { q: 'The film festival is ___ open on 12 June.', o: ['due to', 'on the point to', 'bound'], why: 'A date in a programme: *due to*.' },
        { q: 'Analysts say house prices are ___ fall for the third year running.', o: ['set to', 'on the verge to', 'due'], why: 'Likely soon, in news style: *set to*.' },
        { q: 'After months of losses, the factory is on the brink of ___.', o: ['closure', 'close', 'to close'], why: '*On the brink of* + a noun or *-ing*.' },
        { q: 'Take an umbrella; it’s ___ rain this afternoon.', o: ['bound to', 'on the verge of', 'due to'], why: 'A confident prediction: *bound to*.' },
        { q: 'By March we ___ on this project for two years.', o: ['will have been working', 'will be working', 'are working'], why: 'Duration up to a future point: future perfect continuous.' },
      ] },
    ] },
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'The minister is on the point [to resign].', a: ['of resigning'], why: '*On the point of* + *-ing*.' },
        { s: 'The museum is due [reopening] next spring.', a: ['to reopen'], why: '*Be due to* + infinitive.' },
        { s: 'By the summer she [will be teaching] here for ten years.', a: ['will have been teaching'], why: 'Duration up to a future point: *will have been* + *-ing*.' },
        { s: 'I [am to see] the dentist at four, so I’ll be late.', a: ['am seeing', '’m seeing'], why: 'A personal arrangement: the present continuous, not formal *be to*.' },
        { s: 'Fuel prices are [set rising] again next year.', a: ['set to rise'], why: '*Be set to* + infinitive.' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first, using the word given. Use between three and six words, including the word given.', items: [
        { q: 'According to the timetable, the plane should land at 6.15. (The plane … at 6.15.)', cue: 'DUE', a: ['The plane is due to land at 6.15.'], why: '*Should, according to the timetable* = *is due to*: four words.' },
        { q: 'I was just about to leave when the phone rang. (I … when the phone rang.)', cue: 'POINT', a: ['I was on the point of leaving when the phone rang.'], why: '*About to* = *on the point of* + *-ing*.' },
        { q: 'The talks will almost certainly fail. (The talks … .)', cue: 'BOUND', a: ['The talks are bound to fail.'], why: 'A confident prediction: *are bound to fail*.' },
        { q: 'By June, it will be ten years since she started teaching here. (By June, she … here for ten years.)', cue: 'HAVE', a: ['By June, she will have been teaching here for ten years.', 'By June, she’ll have been teaching here for ten years.'], why: 'Duration up to a future point: four words.' },
        { q: 'Officials have announced that the president will visit Paris next week. (The president … Paris next week.)', cue: 'TO', a: ['The president is to visit Paris next week.'], why: 'An official arrangement: *is to visit*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Count your words before you move on: three to six, including the word given, which you must not change. Contractions count as two words. Each answer has two marks, so a half-right answer can still earn one.' },
    ] },
  ],
  activities: {
    one: { title: 'News desk', md: 'Show the student three short headlines (or ask them to bring some). For each, the student explains it in a full sentence with a different future form, then predicts what will happen next with *bound to* and *will have been* + *-ing*. Correct the forms as you go and note three to review.' },
    small: { title: 'Event timetable', md: 'Each student invents an event (a festival, an opening, a launch) and posts its date in the chat. The others ask questions about it; answers must use *due to*, *set to*, *be to* or *on the verge of*. The group picks the most convincing timetable.' },
    group: { title: 'Headline rooms', md: 'Breakout rooms of three write five headlines about their town in 2030 using the forms from the class. Rooms swap headlines through the chat and turn each one into a full sentence. Back together, read the best ones aloud and check the grammar.' },
  },
  homework: { book: 'u8:p1', md: 'Finish lesson 1 of unit 8 if needed, then do lesson 2 (Given that…). Write six sentences about your next year: one each with *be due to*, *be set to*, *be on the verge of*, *be bound to*, *be to* and the future perfect continuous.' },
};
