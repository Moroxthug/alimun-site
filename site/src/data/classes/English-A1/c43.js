// English A1, class 43 (docs/LESSONS_PLAN.md). Builds on book lesson u8:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c43',
  focus: 'By the end of the class every student can buy a train or bus ticket (*A single / A return to …, please*), ask the price, the time and the platform, and, just as important, ask for help when they do not understand (*Sorry, can you say that again, please?*). These "repair" phrases are some of the most useful in the whole level: every student must use them in the role play.',
  tips: [
    'Single and return are new words for most learners. Draw a simple arrow (one way) and a double arrow (there and back) and keep them on the board.',
    'Learners often say *Repeat!* or *What?*, which sounds rude in English. Teach **Sorry, can you say that again, please?** and **Can you speak more slowly, please?** and praise every use.',
    'In the role play, the ticket seller should speak a little fast on purpose, so students need the help phrases.',
    'Prices: practise saying *£12.50* as *twelve pounds fifty*. Many learners read every digit.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *When did you last take a train? Where to?* Keep it short; accept simple answers.' },
    { min: 10, title: 'At the ticket office', md: 'Show board page 1. Go through the phrases, then students complete the conversation on the board.' },
    { min: 10, title: 'When you do not understand', md: 'Show board page 2. Say sentences very fast or very quietly; students react with the right help phrase. Then the matching exercise.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Prices and times', md: 'Show board page 3. Students write the prices and times in words, then say them aloud.' },
    { min: 5, title: 'Exam corner', md: 'Show board page 4.' },
    { min: 5, title: 'Close', md: 'Each student buys one ticket from you in one breath. Set the homework.' },
  ],
  board: [
    { title: 'At the ticket office', blocks: [
      { t: 'table', caption: 'Buying a ticket', explain: ['head', 'col1'], head: ['Say', 'What it means'], rows: [
        ['A single to York, please.', 'a ticket for one way'],
        ['A return to York, please.', 'a ticket there and back'],
        ['How much is it?', 'you ask the price'],
        ['What time is the next train?', 'you ask the time'],
        ['Which platform?', 'you ask where the train leaves'],
      ] },
      { t: 'ex', kind: 'bank', h: 'Complete the conversation.', extra: ['single'], items: [
        { q: 'Good morning. A ___ to York, please. I’m coming back tonight.', a: 'return', why: 'There and back on the same day: a *return*.' },
        { q: 'That’s twenty-four pounds. – ___ is the next train?', a: 'When', why: 'You ask about the time.' },
        { q: 'At 10.15, from ___ 4.', a: 'platform', why: 'Trains leave from a *platform*.' },
      ] },
    ] },
    { title: 'When you do not understand', blocks: [
      { t: 'ex', kind: 'match', h: 'What do you say?', pairs: [
        ['You did not hear.', 'Sorry, can you say that again, please?'],
        ['The person speaks too fast.', 'Can you speak more slowly, please?'],
        ['You do not know a word.', 'What does “return” mean?'],
        ['You do not understand at all.', 'Sorry, I don’t understand.'],
      ] },
    ] },
    { title: 'Prices and times', blocks: [
      { t: 'examples', items: [
        { s: '£8.50 – **eight pounds fifty**', n: 'Pounds, then pence, without *and*.' },
        { s: '€14 – **fourteen euros**', n: 'The currency comes after the number.' },
        { s: '10.45 – **quarter to eleven** or **ten forty-five**', n: 'Both are correct at the station.' },
      ] },
      { t: 'ex', kind: 'choice', h: 'How do you say it?', items: [
        { q: '£12.20', o: ['twelve pounds twenty', 'pounds twelve twenty', 'twelve twenty pounds'], why: 'Pounds first, then pence.' },
        { q: '9.30', o: ['half past nine', 'half nine past', 'nine and half'], why: '*half past* + the hour.' },
      ] },
    ] },
    { title: 'Exam corner: listening at the station', blocks: [
      { t: 'text', md: 'The teacher reads the announcement twice. Listen and answer: *The 11.20 train to Leeds leaves from platform six. A single ticket costs nine pounds fifty.*' },
      { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: listen and choose the right answer.', items: [
        { q: 'Which platform does the train leave from?', o: ['6', '11', '9'], why: '*from platform six*.' },
        { q: 'How much is a single ticket?', o: ['£9.50', '£11.20', '£6'], why: '*nine pounds fifty*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In the A2 Key listening test you hear numbers, prices and times, and the wrong options are often other numbers you also hear. Write each number down as you hear it, then choose.' },
    ] },
  ],
  activities: {
    one: { title: 'The fast ticket seller', md: 'You are a ticket seller who speaks quickly and uses a new word or two. The student buys three tickets (a single, a return, a ticket for tomorrow) and must use at least three help phrases to get the information. Then swap roles.' },
    small: { title: 'Station role play', md: 'One student is the ticket seller with a timetable and price list (send it in the chat). The others each have a card with a journey. They buy tickets one by one; the seller must give the price, time and platform. Swap the seller after each customer.' },
    group: { title: 'Information desk', md: 'Breakout rooms of three: a traveller, a station worker and an observer who ticks every help phrase used (*say that again*, *more slowly*, *what does … mean*). Ten minutes, rotating roles. In the main room, rooms report how many help phrases they used.' },
  },
  homework: { book: 'u8:p2', md: 'Finish book lesson 2 of unit 8 (A single to Leeds, please). Then write a short conversation (six lines) at a ticket office in your city, with one help phrase.' },
};
