// English C2, class 10 (docs/LESSONS_PLAN.md, L6). Review of units 1 and 2 (book u1 u2). Draft for the owner's review.
export const LESSON = {
  id: 'c10',
  focus: 'By the end every student uses the language of units 1 and 2 with more accuracy and more choice: near-synonyms and connotation, strong collocations and binomials, euphemism and understatement, sentence rhythm and inversion, substitution and reference, and punctuation for effect. Speaking and editing first: most of the class is talk and rewriting, with mistakes fixed together, and two exam tasks in the format of Reading and Use of English.',
  tips: [
    'Collect typical mistakes from classes 2 to 9 before this class and, if you can, replace the items on board page 2 with four of your own students’ sentences.',
    'Mix the units on purpose: a review of a restaurant or a description of a colleague uses connotation, collocation, understatement, rhythm and reference all at once.',
    'At C2 a review is about range as much as accuracy. When a sentence is correct, ask *Can you say it more sharply? More kindly? In fewer words?* and reward the better version.',
    'End with a clear next step: each student names their weakest area from units 1 and 2 and the lesson they will redo before the next class.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask each student to describe their last fortnight in three sentences: one long, one very short, and one with an understatement. The others ask one follow-up question each.' },
    { min: 10, title: 'Units 1 and 2 together', md: 'Show board page 1. Students choose the right words, then explain one choice each and say which unit it comes from.' },
    { min: 8, title: 'Fix it', md: 'Show board page 2: typical mistakes. Students correct them in pairs and give the reason.' },
    { min: 12, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner: Part 1', md: 'Show board page 3. Four minutes, alone. For each gap, students give one reason why each wrong option fails.' },
    { min: 10, title: 'Exam corner: Part 4', md: 'Show board page 4. Five minutes, alone, then count the words of each answer together.' },
    { min: 5, title: 'Close', md: 'Each student names one point they now feel sure about and one they will practise. Set the homework.' },
  ],
  board: [
    { title: 'Units 1 and 2 together', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the word or phrase that fits best.', items: [
        { q: 'The director ___ every clause of the contract before she would sign it.', o: ['scrutinised', 'glimpsed', 'peeked at'], why: 'A long, critical look: *scrutinise*. Unit 1.' },
        { q: 'He was ___ aware that everyone was watching him.', o: ['acutely', 'strongly', 'heavily'], why: 'The collocation *acutely aware*. Unit 1.' },
        { q: 'Long hours are part and ___ of the job, I’m afraid.', o: ['parcel', 'package', 'piece'], why: 'The binomial *part and parcel*. Unit 1.' },
        { q: '___ had the ink dried than the agreement was broken.', o: ['No sooner', 'Hardly', 'Scarcely'], why: '*No sooner… than*; *hardly* and *scarcely* need *when*. Unit 2.' },
        { q: 'Paris and Lisbon were both considered; in the end, ___ was chosen for its lower costs.', o: ['the latter', 'the last', 'the later'], why: 'The second of two: *the latter*. Unit 2.' },
        { q: 'There was only one thing missing ___ an apology.', o: [':', ';', ','], why: 'A colon delivers what the sentence promised. Unit 2.' },
      ] },
    ] },
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'I admire how [stingy] my grandfather was: he saved every penny and still gave to charity.', a: ['thrifty', 'frugal'], why: 'Praise needs an approving word. Unit 1.' },
        { s: 'The report contains a [shining] omission on page three.', a: ['glaring'], why: '*A glaring omission*. Unit 1.' },
        { s: 'After the operation, my uncle [passed out] peacefully in his sleep.', a: ['passed away'], why: '*Pass away* means die; *pass out* means faint. Unit 1.' },
        { s: 'She enjoys hiking, sailing and [to climb].', a: ['climbing'], why: 'A list in parallel form. Unit 2.' },
        { s: 'Never [I have] heard such nonsense.', a: ['have I'], why: 'Invert after a fronted negative. Unit 2.' },
        { s: 'The meeting was long[,] the decision was quick.', a: [';', '.', '–'], why: 'A comma splice: a semicolon, a full stop or a dash. Unit 2.' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 1', blocks: [
      { t: 'ex', kind: 'select', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 1), shortened to four gaps: read the text about a hotel review, sentence by sentence, and choose the answer (A, B, C or D) which best fits each gap.', items: [
        { q: 'The hotel’s website promised a ___ room with views of the old harbour.', o: ['cosy', 'cramped', 'poky', 'tight'], why: 'A website uses the approving word; the other three criticise.' },
        { q: 'What we found was a room so small that we could barely turn round, and the view was, to ___ it mildly, limited.', o: ['put', 'say', 'tell', 'speak'], why: 'The fixed phrase *to put it mildly* signals understatement.' },
        { q: 'By and ___, though, the staff were helpful, and breakfast was excellent.', o: ['large', 'far', 'big', 'wide'], why: 'The binomial *by and large*: on the whole.' },
        { q: 'I would not ___ the hotel to anyone hoping for a romantic weekend, but for a night on business it is perfectly adequate.', o: ['recommend', 'advise', 'suggest', 'propose'], why: '*Recommend something to someone*; the others do not take this pattern.' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 4), shortened to four items: complete the second sentence so that it has a similar meaning to the first, using the word given. Use between three and eight words, including the word given.', items: [
        { q: 'We did not realise how serious the problem was until the report came out.', cue: 'only', gap: '___ we realise how serious the problem was.', a: ['Only when the report came out did', 'Only after the report came out did', 'Only once the report came out did', 'Only when the report had come out did', 'Only after the report had come out did'], why: '*Only when* + clause, then inversion with *did*: seven or eight words.' },
        { q: 'I was bitterly disappointed when they rejected my proposal.', cue: 'came', gap: 'The rejection of my proposal ___ disappointment to me.', a: ['came as a bitter', 'came as a great', 'came as a deep'], why: '*Come as a (bitter) disappointment to someone*: the adverb becomes an adjective. Four words.' },
        { q: 'She told him to leave, and he left at once.', cue: 'so', gap: 'She told him to leave, and ___.', a: ['he did so at once', 'he did so immediately'], why: '*Do so* replaces *leave*: five words.' },
        { q: 'The noise was so loud that we could not sleep.', cue: 'such', gap: '___ that we could not sleep.', a: ['Such was the noise', 'Such was the loudness of the noise'], why: '*Such was* + noun phrase, with inversion: four to seven words.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In **Part 4**, a word that changes class is a common trap: *bitterly disappointed* becomes *a bitter disappointment*, *so loud* becomes *such was the noise*. Keep every piece of meaning, and count the words before you move on.' },
    ] },
  ],
  activities: {
    one: { title: 'Two reviews', md: 'The student chooses a real restaurant, hotel or film they know. They give you a one-minute review as a kind friend would, then a one-minute review as a harsh critic would, with the same facts. Push for the language of both units: connotation, collocation, understatement, a short sentence for impact and an inversion. Note five sentences and upgrade them together at the end.' },
    small: { title: 'Upgrade it', md: 'Each student says a plain sentence about a person, a place or an event (*The hotel was small. The staff were nice. We left early.*). The next student upgrades it with the language of units 1 and 2: a precise near-synonym, a collocation, a binomial, a semicolon or an inversion. The group votes for the best upgrade in each round.' },
  },
  homework: { book: 'u3:p1', md: 'Do the unit 1 and unit 2 tests in the book if you have not yet, and redo the lesson with your lowest score. Then do lesson 1 of unit 3 (Lovely weather, isn’t it?). Write about 150 words reviewing a place you have stayed, using at least one item from each lesson of units 1 and 2.' },
};
