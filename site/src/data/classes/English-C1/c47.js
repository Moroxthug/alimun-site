// English C1, class 47 (docs/LESSONS_PLAN.md, L6). Review of units 9 and 10. Draft for the owner's review.
export const LESSON = {
  id: 'c47',
  focus: 'By the end every student uses the grammar and vocabulary of units 9 and 10 with more accuracy and control: inversion after negative and limiting adverbials (*Not until…*, *Little did…*, *At no time…*), fronted *so* and *such*, idioms and collocations of change and decisions, complex noun phrases, dependent prepositions and the collocations of wellbeing. Speaking first: most of the class is talk about turning points and wellbeing, with mistakes fixed together.',
  tips: [
    'Collect typical mistakes from classes 39 to 46 before this class and put four of them on board page 2 in place of the examples there if they are more useful.',
    'Mix the units on purpose: a story about a turning point in someone’s life naturally needs inversion, change idioms and the language of stress and recovery.',
    'Inversion sounds dramatic and formal. Praise accurate use, but remind students that one inverted sentence in a speaking answer is effective, and five sound like a speech.',
    'End with a clear next step: the next class is the mid-level check on units 1 to 10, so students should note their weakest area today and revise it.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Tell us about a moment when you changed your mind about something important.* Each student answers in two sentences; push for one idiom from unit 9.' },
    { min: 12, title: 'Units 9 and 10 together', md: 'Show board page 1. Students choose the right forms, then explain one choice each.' },
    { min: 10, title: 'Fix it', md: 'Show board page 2: typical mistakes from the last classes. Students correct them in pairs.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 4. Students complete the sentences alone, count their words, then compare.' },
    { min: 5, title: 'Close', md: 'Each student names one point they now feel sure about and one to revise before the mid-level check. Set the homework.' },
  ],
  board: [
    { title: 'Units 9 and 10 together', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
        { q: 'Not until she moved abroad ___ how much she missed her family.', o: ['did she realise', 'she realised', 'she did realise'], why: 'After a *not until* clause, the main clause inverts (unit 9).' },
        { q: '___ was the demand that the tickets sold out in minutes.', o: ['Such', 'So', 'So much'], why: '*Such was + noun + that* (unit 9).' },
        { q: 'After weeks of doubt, he finally took ___ and resigned.', o: ['the plunge', 'the jump', 'the leap'], why: 'The idiom is *take the plunge* (unit 9).' },
        { q: 'The patients ___ were moved to another ward.', o: ['most at risk', 'at risk most', 'most risky'], why: 'Adverb + phrase after the noun (unit 10).' },
        { q: 'A tidy desk is more conducive ___ concentration.', o: ['to', 'for', 'with'], why: '*Conducive to* (unit 10).' },
        { q: 'The long hours eventually took their ___ on her health.', o: ['toll', 'price', 'cost'], why: '*Take its (their) toll on* (unit 10).' },
      ] },
    ] },
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'Little [she knew] that her life was about to change.', a: ['did she know'], why: 'No auxiliary in the normal sentence, so add *did* and invert (unit 9).' },
        { s: 'So quickly [the rumour spread] that the company had to respond.', a: ['did the rumour spread'], why: 'Fronted *so* + adverb: *did* + subject + base form (unit 9).' },
        { s: 'I found myself [in] a crossroads after university.', a: ['at'], why: 'The fixed phrase is *at a crossroads* (unit 9).' },
        { s: 'She signed up for a [twelve-weeks] programme.', a: ['twelve-week'], why: 'Number + noun before a noun stays singular (unit 10).' },
        { s: 'Please refrain [to talk] during the meditation session.', a: ['from talking'], why: '*Refrain from* + *-ing* (unit 10).' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first, using the word given. Write between three and six words, including the word given.', items: [
        { q: 'I only understood the risk when I read the contract. (Only when I read the contract ___ the risk.)', cue: 'DID', a: ['Only when I read the contract did I understand the risk.', 'Only when I read the contract did I realise the risk.'], why: 'Inversion in the main clause after *only when* (unit 9).' },
        { q: 'The noise was so loud that nobody could sleep. (Such ___ nobody could sleep.)', cue: 'NOISE', a: ['Such was the noise that nobody could sleep.'], why: 'Fronted *such* + *was* + subject + *that* (unit 9).' },
        { q: 'He decided not to emigrate after all. (He had ___ emigrating.)', cue: 'CHANGE', a: ['He had a change of heart about emigrating.'], why: '*Have a change of heart about* (unit 9).' },
        { q: 'Lack of sleep was the reason the team made so many errors. (The team’s errors were ___ of sleep.)', cue: 'ATTRIBUTED', a: ['The team’s errors were attributed to a lack of sleep.', 'The team’s errors were attributed to lack of sleep.'], why: 'Passive *attribute X to Y* (unit 10).' },
      ] },
      { t: 'tip', art: 'owl', md: 'Part 4 of C1 Advanced is marked in two halves, so a sentence that is nearly right can still earn one mark. Always write something, and check the word count: three to six words, contractions counting as two.' },
    ] },
  ],
  activities: {
    one: { title: 'A turning point interview', md: 'Interview the student about a turning point in their life or in the life of someone they admire: what happened, how they decided, how it affected their wellbeing. Push for one inversion, two idioms of change and two wellbeing collocations. Note five sentences and correct them together at the end.' },
    small: { title: 'Find the mistake', md: 'Each student tells a short true story about a decision, with one deliberate mistake from units 9 or 10 hidden in it. The others must find and fix it. A point for each fix and one for a well-hidden mistake.' },
    group: { title: 'Review stations', md: 'Breakout rooms of three each get one area in the chat (inversion, idioms of change, noun phrases and prepositions, wellbeing collocations). Each room writes three quiz questions for the class. Bring everyone back and run the quiz.' },
  },
  homework: { book: 'u9 u10', md: 'Do the unit 9 test and the unit 10 test in the book. Note your weakest area across units 1 to 10 and practise it for 30 minutes before the mid-level check in the next class.' },
};
