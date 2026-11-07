// English A1, class 42 (docs/LESSONS_PLAN.md). Builds on book lesson u8:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c42',
  focus: 'By the end of the class every student can say how they travel (*by bus*, *by train*, *on foot*), ask and answer *How do you get to work?* and *How long does it take?*, and ask about times (*What time does the train leave?*). The key forms are *by* + transport with no article, and *does* in questions about times.',
  tips: [
    'Learners add an article: *by the bus*. Correct it to **by bus** every time; the only exception they need is **on foot**.',
    'Many learners invent *by walk* or *by foot*. Teach **on foot** and **I walk** as fixed phrases.',
    'Questions about timetables need *does*: *What time does the train leave?* Speakers of German and Romance languages often say *What time leaves the train?* Drill the right order.',
    '*It takes* + time: show it as a fixed frame on the board (*It takes … minutes*) and practise it with real journeys.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask each student: *How do you get to work or school?* Write the transport words on the board.' },
    { min: 10, title: 'By bus, on foot', md: 'Show board page 1. Students solve the exercise, then say how they travel to three places (work, the supermarket, a friend’s house).' },
    { min: 10, title: 'How long does it take?', md: 'Show board page 2. Model the question and answer, then students put the questions in order.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Timetables', md: 'Show board page 3. Students read the timetable and answer the questions on the board.' },
    { min: 5, title: 'Exam corner', md: 'Show board page 4.' },
    { min: 5, title: 'Close', md: 'Each student describes their journey to work or school in two sentences. Set the homework.' },
  ],
  board: [
    { title: 'How do you travel?', blocks: [
      { t: 'text', md: 'Use **by** + transport, with no *a* or *the*: **by bus**, **by train**, **by car**, **by bike**, **by plane**. When you walk, say **on foot** or **I walk**.' },
      { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
        { q: 'I go to work ___.', o: ['by bus', 'by the bus', 'with bus'], why: '*by* + transport, no article.' },
        { q: 'My school is near, so I go ___.', o: ['on foot', 'by foot', 'by walk'], why: 'Walking is *on foot*.' },
        { q: 'We go to Paris ___ train.', o: ['by', 'on', 'in'], why: '*by train*.' },
      ] },
    ] },
    { title: 'How long does it take?', blocks: [
      { t: 'examples', items: [
        { s: '**How do you get to** work? – I go by tram.', n: 'Asking how someone travels.' },
        { s: '**How long does it take?** – **It takes** twenty minutes.', n: 'Asking about the time of a journey.' },
        { s: 'It takes ten minutes **on foot**.', n: 'Walking.' },
      ] },
      { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
        { a: 'How do you get to the airport?', why: '*How do you get to* + place.' },
        { a: 'It takes an hour by car.', why: '*It takes* + time + transport.' },
      ] },
    ] },
    { title: 'Timetables', blocks: [
      { t: 'table', caption: 'Trains to Oxford', explain: ['head'], head: ['Leaves', 'Arrives', 'Platform'], rows: [
        ['8.15', '9.20', '3'],
        ['9.45', '10.50', '5'],
        ['11.30', '12.35', '3'],
      ] },
      { t: 'ex', kind: 'choice', h: 'Read the timetable. Choose the right answer.', items: [
        { q: 'What time does the first train leave?', o: ['At quarter past eight.', 'At twenty past nine.', 'At half past eleven.'], why: '8.15 is quarter past eight.' },
        { q: 'How long does the journey take?', o: ['About an hour.', 'Two hours.', 'Ten minutes.'], why: '8.15 to 9.20: 65 minutes.' },
        { q: 'Which platform does the 9.45 train leave from?', o: ['Platform 5.', 'Platform 3.', 'Platform 9.'], why: 'The 9.45 train: platform 5.' },
      ] },
    ] },
    { title: 'Exam corner: notices', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: what does the notice say?', items: [
        { q: 'BUS 12: NO SERVICE ON SUNDAYS', o: ['You cannot take bus 12 on Sunday.', 'Bus 12 is free on Sunday.', 'Bus 12 leaves early on Sunday.'], why: '*No service* means the bus does not run.' },
        { q: 'TRAIN TICKETS: BUY BEFORE YOU GET ON', o: ['You need a ticket before you get on the train.', 'You can buy a ticket on the train.', 'Tickets are cheaper on the train.'], why: '*Buy before you get on.*' },
      ] },
      { t: 'tip', art: 'owl', md: 'Part 1 of the A2 Key reading test has short notices and messages. Read each option and ask: *Does the notice really say this?* Two options are usually close, so look for the small difference.' },
    ] },
  ],
  activities: {
    one: { title: 'My week of journeys', md: 'The student tells you about a normal week: how they travel to work, the shops, friends and the gym, and how long each journey takes. You ask follow-up questions. Then swap: you describe your week and the student asks the questions.' },
    small: { title: 'Class survey', md: 'Each student asks every other student two questions: *How do you get to work?* and *How long does it take?* They note the answers, then report one fact: *Three people go by bus. Ana’s journey is the longest: it takes an hour.*' },
    group: { title: 'Travel agents', md: 'Breakout rooms of three. Send a simple timetable (bus, train and plane between two cities) in the chat. A is a traveller, B is at the information desk, C checks the answers. A asks how to travel, what time it leaves and how long it takes. Rotate twice.' },
  },
  homework: { book: 'u8:p1', md: 'Finish book lesson 1 of unit 8 (By bus, by train). Then write about your journey to work, school or the shops: how you travel, what time you leave and how long it takes.' },
};
