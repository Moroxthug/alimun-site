// English C1, class 70 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u15:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c70',
  focus: 'By the end every student recognises and uses the less obvious meanings of common phrasal verbs: *pick up* (learn informally, improve), *take in* (understand, deceive), *come across* (find by chance, give an impression), *put off* (postpone, make someone lose interest), *turn up* and *make out*, with the grammar of each meaning (object or not, separable or not, *-ing* after *put off*, *as* after *come across*). The speaking goal: tell a travel story where the same verb comes back with a different meaning.',
  tips: [
    'Start with the picture behind each verb: you *pick up* a language the way you pick something up off the floor, without effort. Students remember figurative meanings far better when they see the link.',
    'Grammar tells you the meaning: *Sales picked up* (no object: improved) against *I picked up some Greek* (object: learnt). Ask *Is there an object?* before anyone guesses.',
    'Pronouns go between the verb and the particle with separable meanings (*take it all in*, *put them off*), but *come across* (find) is inseparable: *I came across it*. Drill both with pronouns.',
    'Do not let students mix a phrasal verb and its one-word synonym (*postponed off*). And remind them of the patterns: *put off* + *-ing*, *come across as* + adjective, *make out that* + clause.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Write *pick up* on the board and ask for as many meanings as students know in one minute. Keep the list for later.' },
    { min: 12, title: 'One verb, many meanings', md: 'Show board page 1. Go through the table, then students match the sentences alone and say whether each meaning takes an object.' },
    { min: 10, title: 'The grammar of each meaning', md: 'Show board page 2. Students choose the meaning, then fix the mistakes in pairs.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 4. Students rewrite the sentences alone, then count words together. Reveal the answers.' },
    { min: 5, title: 'Close', md: 'Each student says two sentences with the same phrasal verb in two different meanings. Set the homework.' },
  ],
  board: [
    { title: 'One verb, many meanings', blocks: [
      { t: 'table', caption: 'Phrasal verbs with several meanings', explain: ['col1'], head: ['Verb', 'Meaning', 'Example'], rows: [
        ['pick up', 'learn without lessons / improve (no object)', 'I picked up some Arabic in Amman. / Trade picks up in spring.'],
        ['take in', 'understand and remember / deceive', 'It was too much to take in. / We were taken in by the fake ticket seller.'],
        ['come across', 'find by chance / give an impression (+ as)', 'We came across a tiny bookshop. / She comes across as shy.'],
        ['put off', 'postpone / make someone not want to (+ -ing)', 'They put off the trip. / The crowds put me off going.'],
        ['turn up', 'arrive unexpectedly / be found by chance', 'He turned up at midnight. / My passport turned up in my coat.'],
        ['make out', 'see or hear with difficulty / claim, often falsely', 'I could just make out the coast. / He made out that he was a local.'],
      ] },
      { t: 'ex', kind: 'match', h: 'Match each sentence with the meaning of the phrasal verb.', pairs: [
        ['The wind picked up as the ferry left the harbour.', 'became stronger'],
        ['I couldn’t make out a word of the announcement.', 'hear clearly'],
        ['My lost camera turned up at the hotel reception.', 'was found'],
        ['The guide came across as rather bored.', 'gave an impression'],
        ['The sight of the queue put us off waiting.', 'made us lose interest'],
      ] },
    ] },
    { title: 'The grammar of each meaning', blocks: [
      { t: 'ex', kind: 'choice', h: 'What does the phrasal verb mean here?', items: [
        { q: 'Bookings have picked up since the new airport opened.', o: ['increased and improved', 'been collected', 'been learnt'], why: 'No object: *pick up* = improve.' },
        { q: 'Don’t be taken in by the “free” walking tours.', o: ['deceived', 'understood', 'accepted as a guest'], why: 'Passive *be taken in*: deceived.' },
        { q: 'He made out that he had lived in Paris for years.', o: ['claimed, probably falsely', 'saw with difficulty', 'understood'], why: '*make out that* + clause: claim.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'The view was so vast I couldn’t take [in it all].', a: ['it all in'], why: 'A pronoun goes between the verb and the particle.' },
        { s: 'We had to put off [to travel] until the spring.', a: ['travelling'], why: '*put off* + *-ing*.' },
        { s: 'On the phone she comes across [like] very confident.', a: ['as'], why: '*come across as* + adjective.' },
        { s: 'We [came it across] in a second-hand shop.', a: ['came across it'], why: '*come across* (find) is inseparable.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first, using the word given. Use between three and six words, including the word given.', items: [
        { q: 'I learnt some Italian without lessons while I lived in Rome. (I … while I lived in Rome.)', cue: 'PICKED', a: ['I picked up some Italian while I lived in Rome.', 'I picked some Italian up while I lived in Rome.'], why: '*pick up* = learn informally.' },
        { q: 'He gives the impression of being very confident. (He … very confident.)', cue: 'COMES', a: ['He comes across as very confident.', 'He comes across as being very confident.'], why: '*come across as* = give an impression.' },
        { q: 'The bad reviews made us decide not to stay at the hotel. (The bad reviews … at the hotel.)', cue: 'OFF', a: ['The bad reviews put us off staying at the hotel.'], why: '*put someone off* + *-ing*.' },
        { q: 'The fake guides outside the station deceive many visitors. (Many visitors … the fake guides outside the station.)', cue: 'TAKEN', a: ['Many visitors are taken in by the fake guides outside the station.'], why: 'Passive *be taken in by* = be deceived by.' },
        { q: 'I found an old photograph of my grandparents by chance. (I … of my grandparents.)', cue: 'CAME', a: ['I came across an old photograph of my grandparents.'], why: '*come across* = find by chance.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 4 a phrasal verb often replaces a longer expression in the first sentence: *by chance* points to *come across*, *deceive* to *take in*, *learn without lessons* to *pick up*. Look for the meaning, then build the grammar around the particle.' },
    ] },
  ],
  activities: {
    one: { title: 'A trip in phrasal verbs', md: 'The student tells you about a trip or a move to a new place. Before they start, agree four verbs from the table; each one must appear twice in the story with two different meanings. Signal with a nod when you hear one. Go over any wrong particle or pattern at the end.' },
    small: { title: 'Two meanings, one verb', md: 'Write the six verbs in the chat. In turns, a student says a sentence with one verb; the next must use the same verb with a different meaning, then choose a new verb for the next student. A student who cannot find a second meaning passes and the group helps.' },
    group: { title: 'Guess the meaning', md: 'Breakout rooms of three write four short sentences, each with a verb from the table in a meaning that context makes clear. Back together, rooms read their sentences with the verb replaced by *beep*; the class guesses the verb and its meaning.' },
  },
  homework: { book: 'u15:p2', md: 'Finish book lesson 2 of unit 15 if needed, then do lesson 3 (Putting down roots). Write a short story (about 120 words) about arriving in a new place, with at least three phrasal verbs from today, each in a less obvious meaning.' },
};
