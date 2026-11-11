// English C1, class 44 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u10:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c44',
  focus: 'By the end every student uses the right dependent preposition after advanced adjectives, verbs and nouns (*conducive to*, *prone to*, *refrain from*, *deprive someone of*, *an insight into*) and knows that related words can take different ones (*proud of* but *take pride in*). The speaking goal: talk about habits that help or harm wellbeing with these combinations, accurately and without hesitation.',
  tips: [
    'When *to* is a preposition, the verb after it takes *-ing*: *committed to improving*, *averse to taking risks*. Ask students to test it: if a noun fits after *to*, it is a preposition.',
    'Translation is the main source of errors here. Collect the students’ own wrong prepositions during the class and put them on board page 2 next time.',
    'Teach the word families as pairs: *fond of / fondness for*, *capable of / capacity for*, *proud of / pride in*. Students remember the contrast better than either word alone.',
    'In Part 2 of C1 Advanced, a gap straight after a word like *conducive*, *reluctance* or *refrain* is very often its fixed preposition. Train students to look one word to the left of every gap.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What kind of place is good for concentrating? What stops you sleeping well?* Recast the answers with *conducive to* and *deprive someone of* on the board.' },
    { min: 12, title: 'Which preposition?', md: 'Show board page 1. Students sort the words alone, then check in pairs by saying a sentence with each one.' },
    { min: 10, title: 'Fix it', md: 'Show board page 2. Students correct the mistakes and say whether the problem was the preposition or the form after it.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 2. Students write one word in each gap alone, then compare. Reveal the answers and ask which gaps were fixed prepositions.' },
    { min: 5, title: 'Close', md: 'Each student finishes one sentence: *I’m not averse to…*, *I try to refrain from…* or *I’m prone to…* Set the homework.' },
  ],
  board: [
    { title: 'Which preposition?', blocks: [
      { t: 'ex', kind: 'sort', h: 'Which preposition follows each word?', groups: ['to', 'of', 'from', 'in / into'], items: [
        { s: 'detrimental', g: 0, why: '*detrimental to your health*' },
        { s: 'succumb', g: 0, why: '*succumb to pressure*' },
        { s: 'indicative', g: 1, why: '*indicative of a deeper problem*' },
        { s: 'wary', g: 1, why: '*wary of quick fixes*' },
        { s: 'refrain', g: 2, why: '*refrain from commenting*' },
        { s: 'abstain', g: 2, why: '*abstain from alcohol*' },
        { s: 'confide', g: 3, why: '*confide in a friend*' },
        { s: 'an insight', g: 3, why: '*an insight into the problem*' },
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
        { q: 'Long commutes deprive many parents ___ time with their children.', o: ['of', 'from', 'with'], why: '*Deprive someone of something*.' },
        { q: 'She attributes her recovery ___ a change of routine.', o: ['to', 'for', 'on'], why: '*Attribute a result to a cause*.' },
        { q: 'He takes great pride ___ his garden.', o: ['in', 'of', 'for'], why: 'The noun *pride* takes *in*, although the adjective is *proud of*.' },
        { q: 'I’ve always had a strange aversion ___ hospitals.', o: ['to', 'of', 'against'], why: '*An aversion to*.' },
      ] },
    ] },
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'An open-plan office is not conducive [for] deep work.', a: ['to'], why: '*Conducive to*.' },
        { s: 'We are committed to [reduce] waiting times for patients.', a: ['reducing'], why: '*To* is a preposition here, so *-ing* follows.' },
        { s: 'Passengers are asked to refrain [to use] their phones.', a: ['from using'], why: '*Refrain from* + *-ing*.' },
        { s: 'Night shifts can have a serious effect [to] your sleep.', a: ['on'], why: '*An effect on*.' },
        { s: 'She has a real fondness [of] old films.', a: ['for'], why: 'The adjective is *fond of*, the noun is *fondness for*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Learn the preposition with the word, in a short phrase you can say aloud: *prone to headaches*, *preoccupied with work*, *oblivious to the noise*.' },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 2', blocks: [
      { t: 'text', md: 'A short text about a school’s new rest policy, one sentence at a time. Each gap needs one word.' },
      { t: 'ex', kind: 'gap', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 2): read the text and write one word in each gap.', items: [
        { q: 'Teachers had noticed that many pupils were prone ___ falling asleep in the afternoon.', a: ['to'], why: '*Prone to* + *-ing*.' },
        { q: 'The head attributed the problem largely ___ late-night screen use.', a: ['to'], why: '*Attribute X to Y*.' },
        { q: 'Parents were asked to refrain ___ giving their children phones at bedtime.', a: ['from'], why: '*Refrain from*.' },
        { q: 'Some families were wary ___ the idea at first.', a: ['of'], why: '*Wary of*.' },
        { q: 'Within a term, the head reported a marked improvement ___ concentration.', a: ['in'], why: '*An improvement in* something.' },
        { q: 'Many pupils said the quieter evenings were more conducive ___ reading.', a: ['to'], why: '*Conducive to*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Part 2 of C1 Advanced has eight gaps and no options. Read the word just before each gap: if it is an adjective, verb or noun with a fixed preposition, that is very likely your answer.' },
    ] },
  ],
  activities: {
    one: { title: 'Wellbeing interview', md: 'Ask the student about the conditions that help them work and rest: *What is conducive to your concentration? What are you prone to when you’re tired? What do you try to refrain from?* Note every preposition and go over three at the end, with the student correcting their own.' },
    small: { title: 'Preposition tennis', md: 'One student says a word from the lesson (*succumb*, *indicative*, *pride*); the next student must reply with the preposition and a full sentence within five seconds. A wrong preposition or a missing *-ing* passes the turn on. Keep score in the chat.' },
    group: { title: 'Advice rooms', md: 'Breakout rooms of three write five pieces of advice for a stressed colleague, each using a different combination from today (*Try not to dwell on…*, *Be wary of…*). Bring everyone back; each room reads its best two and the class checks the prepositions.' },
  },
  homework: { book: 'u10:p2', md: 'Finish lesson 2 of unit 10 if needed, then do lesson 3 (A sense of purpose). Write eight sentences about your own habits, each with a different word from today and its preposition, and underline the preposition.' },
};
