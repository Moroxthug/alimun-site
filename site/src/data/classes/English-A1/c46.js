// English A1, class 46 (docs/LESSONS_PLAN.md). Review of book unit u8. Draft for the owner's review.
export const LESSON = {
  id: 'c46',
  focus: 'A review of unit 8 (Out and about). By the end of the class every student can say how they travel and how long it takes, buy a ticket and ask for help when they do not understand, and give and follow directions. Most of the time is speaking in realistic situations; correct the typical mistakes of the unit as they come up.',
  tips: [
    'Before class, check the students’ book progress and practice mistakes for unit 8, and choose the two weakest points for extra time.',
    'The three mistakes to listen for: *by the bus* (by bus), *You turn left* (Turn left), *What time leaves the train?* (What time does the train leave?).',
    'Reward every help phrase (*Sorry, can you say that again?*). Students who use them confidently cope much better in real life and in the speaking exam.',
    'Collect mistakes anonymously during the activity and use them on board page 3.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Each student says how they got to their last holiday or trip, and how long it took.' },
    { min: 10, title: 'Transport and times', md: 'Show board page 1. Students solve both exercises aloud.' },
    { min: 10, title: 'Directions', md: 'Show board page 2. Students order the directions, then give the class directions to a place in their town.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Fix it', md: 'Show board page 3, then add mistakes from the activity. Students correct them together.' },
    { min: 5, title: 'Exam corner', md: 'Show board page 4.' },
    { min: 5, title: 'Close', md: 'Ask each student what is still difficult in unit 8. Set the unit test as homework.' },
  ],
  board: [
    { title: 'Transport and times', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
        { q: 'I go to the gym ___ bike.', o: ['by', 'on', 'with'], why: '*by* + transport.' },
        { q: 'What time ___ the bus leave?', o: ['does', 'is', 'do'], why: 'Questions in the present simple with *it*: *does*.' },
        { q: 'It ___ thirty minutes by tram.', o: ['takes', 'is taking', 'take'], why: '*It takes* + time.' },
      ] },
      { t: 'ex', kind: 'match', h: 'Match the question and the answer.', pairs: [
        ['A single or a return?', 'A return, please.'],
        ['Which platform?', 'Platform two.'],
        ['How much is it?', 'Six pounds fifty.'],
        ['How do you get to work?', 'I go on foot.'],
      ] },
    ] },
    { title: 'Directions', blocks: [
      { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
        { a: 'Take the second street on the left.', why: 'Imperative first: *Take*.' },
        { a: 'Don’t turn right at the bank.', why: 'Negative imperative: *Don’t* + verb.' },
        { a: 'The museum is opposite the park.', why: 'Place + *is* + preposition + place.' },
      ] },
    ] },
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'We go to school [by the] bus.', a: ['by'], why: 'After *by*, no *the*.' },
        { s: 'It takes ten minutes [by walk].', a: ['on foot'], why: 'Walking is *on foot*.' },
        { s: 'What time [leaves the train]?', a: ['does the train leave'], why: 'Questions need *does* + subject + verb.' },
        { s: 'Sorry, can you [repeat me]?', a: ['say that again'], why: 'The polite phrase is *Can you say that again, please?*' },
      ] },
    ] },
    { title: 'Exam corner: notices and messages', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: what does it say?', items: [
        { q: 'PLATFORM 4 CLOSED TODAY. TRAINS TO BATH LEAVE FROM PLATFORM 2.', o: ['Today you take the train to Bath from platform 2.', 'There are no trains to Bath today.', 'Platform 2 is closed.'], why: 'Platform 4 is closed, so trains leave from platform 2.' },
        { q: 'Tom: The bus is late! I’m walking. See you in 20 minutes at the café.', o: ['Tom is going to the café on foot.', 'Tom is waiting for the bus.', 'Tom is at the café now.'], why: '*I’m walking* and *see you in 20 minutes*.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'A day trip', md: 'Plan a real day trip with the student: how to get there, ticket type and price, what time to leave, how long it takes, and directions from the station to one place. You play every person they meet (ticket seller, local). Note mistakes, then replay the hardest part.' },
    small: { title: 'Lost in town', md: 'Share a town map. Each student gets a secret start and destination (private chat). They ask the others for directions; the others answer from the map. Then a ticket scene at the station for the way home. Collect mistakes for board page 3.' },
    group: { title: 'Travel stations', md: 'Breakout rooms of three, three scenes of four minutes each: buying a ticket, asking about times and platforms, asking for directions from the station. Rotate roles each scene. Visit the rooms and note mistakes for board page 3.' },
  },
  homework: { book: 'u8', md: 'Do the unit 8 test in the book. If you score under 70%, repeat the lesson with the most mistakes, then take the test again. Bring one question about any unit to the next class: it is a practice exam.' },
};
