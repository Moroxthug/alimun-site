// English B2, class 49 (docs/LESSONS_PLAN.md). Review of units 9 and 10. Draft for the owner's review.
export const LESSON = {
  id: 'c49',
  focus: 'A speaking-heavy review of units 9 and 10. By the end of the class every student can use conditions and precautions (*unless, provided that, in case*), purpose (*so that, in order to*), lifestyle collocations, verbs that change meaning with *to* or *-ing*, *needn’t have* and word formation in their own speech, and has corrected the typical mistakes of these units.',
  tips: [
    'Start with a quick diagnostic on the board and spend the most time on what the class gets wrong, not on everything.',
    'The most frequent errors in these units: *in case* used like *if* (*In case it rains, we will stay home*), *so that* followed by an infinitive, *remember to* for memories, and the wrong word class in word formation.',
    'Keep the speaking long and personal; correct on the board after each activity, not during it.',
    'Remind students that the homework is both unit tests and that the next class is writing practice.',
  ],
  plan: [
    { min: 8, title: 'Quick check', md: 'Board page 1: students do the mixed exercise alone in five minutes. Check together and note the weakest point.' },
    { min: 10, title: 'Fix it', md: 'Board page 2: the class finds and fixes the typical mistakes, explaining each rule in their own words.' },
    { min: 20, title: 'Activity', md: 'Use the activity for your class size below. Note mistakes as you listen.' },
    { min: 12, title: 'Exam corner', md: 'Board page 3: mixed Use of English Parts 3 and 4 with units 9 and 10.' },
    { min: 10, title: 'Correction slot and close', md: 'Write five sentences you heard during the activity (anonymously); the class corrects them. Set the homework.' },
  ],
  board: [
    { title: 'Units 9 and 10: quick check', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right word or form.', items: [
        { q: 'Take a jacket ___ it gets cold later.', o: ['in case', 'unless', 'provided that'], why: '*In case* = as a precaution against something that might happen.' },
        { q: 'I go to bed early ___ I can get up at six.', o: ['so that', 'in order to', 'unless'], why: '*So that* is followed by a clause with a subject.' },
        { q: 'I’ll never forget ___ my driving test.', o: ['passing', 'to pass'], why: 'A memory: *forget* + -ing.' },
        { q: 'You ___ cooked so much; nobody was hungry.', o: ['needn’t have', 'didn’t need to'], why: 'You did cook, and it was unnecessary.' },
        { q: 'She is trying to ___ down on coffee.', o: ['cut', 'take', 'give'], why: '*Cut down on* = have less of.' },
      ] },
    ] },
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Each sentence has a typical mistake. Find and fix it.', items: [
        { s: 'We will go to the beach [unless it is sunny].', a: ['provided that it is sunny', 'if it is sunny'], why: '*Unless* means *if not*; the meaning here is a positive condition.' },
        { s: 'I saved money so that [to buy] a laptop.', a: ['I could buy', 'I can buy'], why: '*So that* needs a subject and a verb.' },
        { s: 'Please remember [locking] the door.', a: ['to lock'], why: 'A duty in the future: *remember* + to.' },
        { s: 'His [improve] was clear to everyone.', a: ['improvement'], why: 'After *his* we need a noun.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Parts 3 and 4', blocks: [
      { t: 'ex', kind: 'wordform', h: 'In the format of B2 First Part 3: use the word in capitals to form a word that fits.', items: [
        { q: 'A good night’s sleep has a ___ effect on memory.', base: 'benefit', a: ['beneficial'], why: 'Before a noun: an adjective, *beneficial*.' },
        { q: 'Many adults lack the ___ to learn something new.', base: 'confident', a: ['confidence'], why: 'After *the*: a noun.' },
      ] },
      { t: 'ex', kind: 'transform', h: 'In the format of B2 First Part 4: complete the second sentence using the word given.', items: [
        { q: 'You can come as long as you are on time. PROVIDED', cue: 'You can come', a: ['You can come provided that you are on time.', 'You can come provided you are on time.'], why: '*Provided (that)* = as long as.' },
        { q: 'It wasn’t necessary for me to buy a ticket, but I did. NEEDN’T', cue: 'I', a: ['I needn’t have bought a ticket.'], why: 'I bought one, and it was unnecessary.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Life coach interview', md: 'Twenty minutes of conversation about the student’s lifestyle and learning: health habits, what they would like to take up, what they regret not learning, times they worried for nothing. Prompt them to use one structure from each lesson. Note mistakes for the correction slot.' },
    small: { title: 'Topic cards', md: 'Put six topic cards in the chat (sleep, giving up a habit, learning as an adult, a wasted effort, exams, a skill you mean to learn). Students take turns: one talks for ninety seconds, the others ask two follow-up questions. Everyone talks at least twice.' },
    group: { title: 'Discussion rooms', md: 'In breakout rooms of four, students discuss three questions you post in the chat: *Is a healthy lifestyle a choice or a privilege? What should schools teach adults? What do people worry about for no reason?* One student in each room notes good sentences and mistakes to share.' },
  },
  homework: { book: 'u9 u10', md: 'Do the unit 9 and unit 10 tests in the book. Then write down the three questions you got wrong and explain the right answer in your own words.' },
};
