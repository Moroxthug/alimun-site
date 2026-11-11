// English C1, class 38 (docs/LESSONS_PLAN.md, L6). Review of units 7 and 8. Draft for the owner's review.
export const LESSON = {
  id: 'c38',
  focus: 'By the end every student uses the language of units 7 and 8 with more accuracy and control: one consistent register, idioms in their exact form, ellipsis and substitution, advanced future forms and the connectors of a complex argument, all of them in service of the C1 Advanced essay. Speaking first: most of the class is talk, with mistakes fixed together.',
  tips: [
    'Collect typical mistakes from classes 30 to 37 before this class (register slips, *I don’t hope so*, *on the verge to*, *albeit* + clause) and put four of them on the board.',
    'Mix the units on purpose: a discussion about the future of a city uses register, idioms, future forms and connectors at once.',
    'Give the less confident students the first, easier turns and the stronger students the follow-up questions.',
    'Look back at the essays from class 36: name one strength and one weakness that most students share, without naming students.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What is bound to change in the way we communicate by 2030?* Each student answers in two sentences, with one idiom if they can.' },
    { min: 12, title: 'Units 7 and 8 together', md: 'Show board page 1. Students choose the right forms, then explain one choice each.' },
    { min: 10, title: 'Fix it', md: 'Show board page 2: typical mistakes from the last classes. Students correct them in pairs.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 4. Students complete the sentences alone, count their words, then compare.' },
    { min: 5, title: 'Close', md: 'Each student names one point they now feel sure about and one to practise. Set the homework.' },
  ],
  board: [
    { title: 'Units 7 and 8 together', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
        { q: 'Should you ___ further information, please contact the office.', o: ['require', 'fancy', 'be after'], why: 'A formal email keeps a formal verb: *require*.' },
        { q: 'Is the bridge going to reopen this month? I’m afraid ___.', o: ['not', 'no', 'don’t'], why: 'With *be afraid*, the negative is *not*.' },
        { q: 'The new funding is only a drop in the ___.', o: ['ocean', 'sea', 'lake'], why: 'The idiom is fixed: *a drop in the ocean*.' },
        { q: 'The minister ___ announce the results at noon.', o: ['is to', 'is on the verge', 'is on the point to'], why: 'An official arrangement: *be to* + infinitive.' },
        { q: 'The plan worked, ___ more slowly than expected.', o: ['albeit', 'whereas', 'given that'], why: '*Albeit* + a short phrase.' },
        { q: 'I can’t afford a car, let ___ a house.', o: ['alone', 'apart', 'aside'], why: 'The fixed connector is *let alone*.' },
      ] },
    ] },
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'Will the shop close? I [don’t hope so].', a: ['hope not'], why: 'With *hope*, the negative is *I hope not*.' },
        { s: 'Dear Mr Lee, [cheers] for your prompt reply.', a: ['thank you'], why: 'An informal word breaks a formal email.' },
        { s: 'The company is on the verge [to close].', a: ['of closing', 'of closure'], why: '*On the verge of* + *-ing* or a noun.' },
        { s: 'By May I [will work] here for six years.', a: ['will have been working', 'will have worked'], why: 'Up to a future point: the future perfect.' },
        { s: '[Giving] the risks, we decided to wait.', a: ['Given'], why: 'The connector is *given*, a past participle.' },
        { s: 'The project was finished, albeit [it was late].', a: ['late'], why: '*Albeit* + a phrase, not a clause.' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first, using the word given. Use between three and six words, including the word given.', items: [
        { q: 'Although it rained heavily, the match went ahead. (…, the match went ahead.)', cue: 'NOTWITHSTANDING', a: ['Notwithstanding the heavy rain, the match went ahead.'], why: '*Notwithstanding* + noun phrase: four words.' },
        { q: 'She was about to accept the offer when she changed her mind. (She … the offer when she changed her mind.)', cue: 'VERGE', a: ['She was on the verge of accepting the offer when she changed her mind.'], why: '*About to* = *on the verge of* + *-ing*: five words.' },
        { q: 'Losing the job turned out well for me in the end. (Losing the job … .)', cue: 'BLESSING', a: ['Losing the job was a blessing in disguise.'], why: 'Something bad that turned out well: *a blessing in disguise*.' },
        { q: 'Because the evidence is clear, the decision is easy. (…, the decision is easy.)', cue: 'GIVEN', a: ['Given that the evidence is clear, the decision is easy.', 'Given the clear evidence, the decision is easy.'], why: '*Given (that)* + a known fact.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Part 4 often tests one grammar change and one vocabulary change in the same answer. Check both before you count: the meaning must stay the same, and the word given must not change.' },
    ] },
  ],
  activities: {
    one: { title: 'The panel interview', md: 'Interview the student, as in Speaking Part 4, on *Will technology change the way we talk to each other by 2050?* Push for a consistent register, one idiom, short substituted replies, future forms and two connectors. Note five sentences and improve them together at the end.' },
    small: { title: 'Find the slip', md: 'Each student says three sentences about the future of their city, one with a deliberate mistake from units 7 or 8 (a register slip, a changed idiom, a wrong future form). The others must find and fix it. A point for each fix and one for a well-hidden mistake.' },
    group: { title: 'Review stations', md: 'Breakout rooms of three each get one area in the chat (register and idioms, ellipsis and substitution, future forms, connectors). Each room writes three quiz questions for the class. Bring everyone back and run the quiz.' },
  },
  homework: { book: 'u7 u8', md: 'Do the unit tests of unit 7 (Language and communication) and unit 8 (The future of society). Look again at any lesson where you scored under 70%. Then rewrite one paragraph of your essay from class 36 using your teacher’s corrections.' },
};
