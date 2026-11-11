// English C1, class 39 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u9:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c39',
  focus: 'By the end every student uses negative and limiting openers with inversion (little, at no time, on no account, in no way, nowhere, not once, not a single), puts the inversion in the main clause after not until, only when, only after and only by, and knows when not to invert (*Hardly anyone came*, *Only Maria knew*). They use inversion for emphasis at the right moments, not in every sentence.',
  tips: [
    'Show the question link: the inverted part is word for word a question (*did I understand?*, *was the public…?*). If the normal sentence has no auxiliary, add *do*, *does* or *did*.',
    'The delayed patterns are the C1 trap: after *Not until* and *Only when*, the first clause keeps normal order and the main clause inverts. Underline the two clauses in different colours.',
    'Contrast two pairs to show when not to invert: *Hardly anyone came* (subject) and *Hardly had we arrived when…*; *In no time we were home* (quickly) and *At no time were we in danger* (never).',
    'Inversion is formal and dramatic. In speaking, one well-placed inversion is impressive; three in a minute sound like a speech.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Write *I have never seen such a mess.* on the blank page. Students make it dramatic (*Never have I seen…*) and say where they might hear it.' },
    { min: 12, title: 'Which is correct?', md: 'Show board page 1. Students choose the correct sentence, then explain where the inversion goes in each.' },
    { min: 10, title: 'Fix it', md: 'Show board page 2. Students correct the mistakes alone; one item needs no inversion at all.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 4. Students complete the sentences alone, count their words, then compare. Reveal the answers.' },
    { min: 5, title: 'Close', md: 'Each student says one sentence about their week with an inversion, stressing the opener. Set the homework.' },
  ],
  board: [
    { title: 'Which is correct?', blocks: [
      { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
        { q: '', o: ['Only after the meeting had ended did he apologise.', 'Only after the meeting had ended he apologised.', 'Only after did the meeting end he apologised.'], why: 'Normal order in the *after* clause, inversion in the main clause.' },
        { q: '', o: ['At no time did the staff feel unsafe.', 'At no time the staff felt unsafe.', 'At no time felt the staff unsafe.'], why: 'No auxiliary in the normal sentence, so add *did*.' },
        { q: '', o: ['Little did they realise how serious it was.', 'Little they realised how serious it was.', 'Little realised they how serious it was.'], why: '*Little* + *did* + subject + base form.' },
        { q: '', o: ['Not until she moved abroad did she miss her family.', 'Not until did she move abroad she missed her family.', 'Not until she moved abroad she missed her family.'], why: 'The inversion comes after the whole *until* clause.' },
        { q: '', o: ['Hardly anyone noticed the change.', 'Hardly did anyone notice the change.', 'Hardly noticed anyone the change.'], why: '*Hardly anyone* is the subject, so there is no inversion.' },
      ] },
    ] },
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Each sentence has one mistake. Find it and fix it.', items: [
        { s: 'On no account [you should] open this door.', a: ['should you'], why: 'After *On no account*, the auxiliary comes before the subject.' },
        { s: 'Only by [we practise] every day can we improve.', a: ['practising'], why: '*Only by* + *-ing*; the inversion is in *can we improve*.' },
        { s: 'Not once [she complained] about the long hours.', a: ['did she complain'], why: 'Add *did* and use the base form.' },
        { s: 'Nowhere [the problem is] more obvious than in the schools.', a: ['is the problem'], why: 'With *be*, the verb itself moves before the subject.' },
        { s: 'Only Maria [did know] the answer.', a: ['knew'], why: '*Only Maria* is the subject, so there is no inversion.' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first, using the word given. Use between three and six words, including the word given.', items: [
        { q: 'I only realised my mistake when I got home. (Only when I got home … my mistake.)', cue: 'DID', a: ['Only when I got home did I realise my mistake.', 'Only when I got home did I notice my mistake.'], why: 'Inversion in the main clause: *did I realise*, three words.' },
        { q: 'The public was never in any danger. (At … in any danger.)', cue: 'TIME', a: ['At no time was the public in any danger.'], why: '*At no time* + *was* + subject: five words.' },
        { q: 'You must not tell anyone under any circumstances. (On … anyone.)', cue: 'ACCOUNT', a: ['On no account must you tell anyone.', 'On no account should you tell anyone.'], why: '*On no account* + modal + subject: five words.' },
        { q: 'The team can only win if they defend well. (Only … can the team win.)', cue: 'BY', a: ['Only by defending well can the team win.'], why: '*Only by* + *-ing*: three words.' },
        { q: 'She didn’t say a single word all evening. (… did she say all evening.)', cue: 'NOT', a: ['Not a single word did she say all evening.'], why: 'A fronted object with *Not a single*: four words.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Words such as *little*, *account*, *time*, *until* and *only* are strong signals of inversion in Part 4. Write the opener, then ask the question form of the verb: that is what follows.' },
    ] },
  ],
  activities: {
    one: { title: 'The turning-point speech', md: 'The student gives a one-minute speech about a moment that changed their plans, with three inversions placed at the moments they want to stress. Stop at each inversion to check the structure, then the student gives the speech again, more smoothly. Finish by finding one sentence that sounds better without inversion.' },
    small: { title: 'Make it dramatic', md: 'Post plain sentences in the chat one at a time (*I didn’t know the truth*, *We realised the danger only later*). Students race to give a dramatic inverted version with a different opener each time. The group votes for the most natural version and checks its word order.' },
    group: { title: 'Press conference', md: 'Breakout rooms of three each prepare a short official statement denying a scandal at an imaginary company, using *At no time*, *In no way*, *On no account* and *Not once*. One spokesperson per room reads the statement to the class, and the class checks every inversion.' },
  },
  homework: { book: 'u9:p1', md: 'Finish lesson 1 of unit 9 if needed, then do lesson 2 (So great was the demand). Write a short paragraph (about 100 words) about a day that changed your plans, using three different inversions, including one with *Not until* or *Only when*.' },
};
