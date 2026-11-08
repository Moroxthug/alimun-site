// English A2, class 40 (docs/LESSONS_PLAN.md). Review of unit 7 (Travel and holidays). Draft for the owner's review.
export const LESSON = {
  id: 'c40',
  focus: 'By the end of the class every student can use the language of unit 7 together in speaking: transport and stations, the past continuous with the past simple to tell a trip story, polite requests in a hotel, and a short message about a trip. Most of the class is speaking practice, with a short slot to fix the most common mistakes.',
  tips: [
    'This is a review: do not re-teach every rule. Find out what students can do, then fix the two or three mistakes you hear most.',
    'Keep a list of mistakes while students speak and correct them together at the end, not during the activity.',
    'Mix pairs so that stronger and weaker students work together for the role plays.',
    'Remind students that the unit test is their homework and that it mixes all four lessons.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Quick quiz: name three kinds of transport, two things you can ask for in a hotel, and one sentence with *was ... when*.' },
    { min: 10, title: 'Travel words', md: 'Show board page 1. Students sort the words, then say one sentence each with a word from the board.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Fix it', md: 'Show board page 2. Students find and fix the mistakes, then add one mistake you heard during the activity.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3. Read the dialogue gaps aloud; students choose the right answers.' },
    { min: 10, title: 'Close', md: 'Each student tells a two-sentence trip story with *when*. Set the unit test as homework.' },
  ],
  board: [
    { title: 'Travel words', blocks: [
      { t: 'ex', kind: 'sort', h: 'Where do you hear these words?', groups: ['at the station', 'at the hotel'], explain: ['groups'], items: [
        { s: 'platform', g: 0, why: 'Trains leave from a platform.' },
        { s: 'single ticket', g: 0, why: 'You buy a ticket at the station.' },
        { s: 'check in', g: 1, why: 'You check in when you arrive at a hotel.' },
        { s: 'key card', g: 1, why: 'A hotel gives you a key card.' },
        { s: 'delayed', g: 0, why: 'A train can be delayed.' },
        { s: 'double room', g: 1, why: 'You book a double room in a hotel.' },
      ] },
    ] },
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'I [was buying] a ticket yesterday at nine and then I took the train.', a: ['bought'], why: 'A short, complete action: past simple.' },
        { s: 'We were waiting for the bus when it [was arriving].', a: ['arrived'], why: 'The short event that interrupted: past simple.' },
        { s: '[Give me] the key, please.', a: ['Could I have', 'Could you give me'], why: 'In a hotel, ask politely: *Could I have…?*' },
        { s: 'Last summer we [go] to the mountains by train.', a: ['went'], why: 'A finished past trip: *went*.' },
      ] },
    ] },
    { title: 'Exam corner: a conversation', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: choose the best answer.', items: [
        { q: '“What time does the next train to York leave?”', o: ['In twenty minutes, from platform 4.', 'It’s a return ticket.', 'Yes, it does.'], why: 'The question asks *what time*.' },
        { q: '“Could you help me with my bags?”', o: ['Of course. Where are you going?', 'Yes, I could.', 'They’re very big.'], why: 'Answer a request with *Of course*.' },
        { q: '“How was your holiday?”', o: ['Great, thanks. The weather was perfect.', 'I’m going to Spain.', 'For two weeks.'], why: 'The question asks for an opinion about the past.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Plan, travel, stay', md: 'Play three scenes in a row: the student buys a train ticket (you are the clerk), checks in at a hotel and reports a problem (you are the receptionist), then tells you the story of the trip the next day with *was ... when*. Note mistakes and fix them at the end.' },
    small: { title: 'Travel agency', md: 'Pairs plan a weekend away for another pair: transport, hotel and one activity. They present it; the other pair asks three questions and books it politely. Swap. Collect mistakes for the "Fix it" slot.' },
    group: { title: 'Trip stories', md: 'In breakout rooms of three, each student tells a true or invented trip story in one minute using *was/were ... when*. The others ask two questions each. Each room chooses the best story and its teller tells it to the whole class.' },
  },
  homework: { book: 'u7', md: 'Do the unit test of unit 7 (Travel and holidays) in the book. Then read back over the lesson where you made the most mistakes.' },
};
