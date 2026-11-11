// English B2, class 40 (docs/LESSONS_PLAN.md, L6). Mid-level check of book units u1 to u8. Draft for the owner's review.
export const LESSON = {
  id: 'c40',
  focus: 'The mid-level check: a calm, structured check of units 1 to 8 that shows you and each student what they can already do and what needs more work before the second half of B2. It has two parts: a written check on the board (24 points, the last part in the format of B2 First Use of English Part 4) and a short speaking check for each student with clear criteria. It is not a pass or fail; each student leaves with two clear things to practise.',
  tips: [
    'Present it as a check, not an exam: *This shows us what to practise in the second half of the course.* Calm students show what they really know.',
    'Speaking check criteria (each student, about 3 minutes): (a) uses perfect and narrative tenses correctly about their own experience, (b) talks about the future with *will be doing* or *will have done*, (c) uses a conditional or *wish* about a real regret, (d) reports what someone said with a reporting verb, (e) speculates with degrees of certainty, (f) keeps talking with linkers and without long pauses. Mark each *yes*, *nearly* or *not yet*.',
    'A student is on track with *yes* or *nearly* in at least four criteria and 70% or more in the written check (17 of 24). Below that, the student is behind: tell them privately, with two clear things to practise.',
    'For students who are behind: point them to the book lessons of their two weakest units and to Practice, which brings back their own mistakes; offer a short 1 on 1 if their plan includes it; and pair them with a stronger student in the next few classes.',
    'In large classes, do the speaking check two students at a time in a breakout room while the others work, or split it over this class and the next.',
  ],
  plan: [
    { min: 3, title: 'Welcome', md: 'Explain the two parts and how long they take. Reassure students that the result is for planning, not a grade.' },
    { min: 22, title: 'Written check', md: 'Show board pages 1 to 3 one by one (about 7 minutes each). Students write their answers alone, privately in the chat to you or on paper. Do not help during this part.' },
    { min: 5, title: 'Check together', md: 'Go through the answers quickly. Students count their own score out of 24 and note which units their mistakes came from.' },
    { min: 25, title: 'Speaking check', md: 'Use the questions on board page 4. Call students one or two at a time. The others do the activity for your class size below.' },
    { min: 5, title: 'Close', md: 'Tell each student privately in the chat their strongest unit and two things to practise. Set the homework.' },
  ],
  board: [
    { title: 'Check 1: units 1 to 4', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
        { q: 'I ___ this report all morning and I still haven’t finished.', o: ['have been writing', 'have written', 'wrote'], why: 'Duration, not finished: present perfect continuous (unit 1).' },
        { q: 'She’s so ___; she never keeps her promises.', o: ['unreliable', 'disreliable', 'inreliable'], why: 'Prefix *un-* (unit 1).' },
        { q: 'By the time we arrived, the film ___.', o: ['had started', 'started', 'has started'], why: 'An earlier past action: past perfect (unit 2).' },
        { q: 'They were tired because they ___ for hours.', o: ['had been walking', 'were walking', 'have walked'], why: 'Duration before a past moment: past perfect continuous (unit 2).' },
        { q: 'This time tomorrow I ___ on a beach.', o: ['will be lying', 'will lie', 'will have lain'], why: 'In progress at a future time: future continuous (unit 3).' },
        { q: 'By June we ___ the project.', o: ['will have finished', 'will finish', 'are finishing'], why: 'Completed before a future time: future perfect (unit 3).' },
        { q: 'I need to ___ my car serviced before the trip.', o: ['have', 'make', 'do'], why: '*have something done* (unit 4).' },
        { q: 'The castle ___ to be over 800 years old.', o: ['is said', 'says', 'is saying'], why: 'Passive reporting: *is said to be* (unit 4).' },
      ] },
    ] },
    { title: 'Check 2: units 5 to 8', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
        { q: 'If I had saved more money, I ___ a house now.', o: ['would own', 'would have owned', 'will own'], why: 'Mixed conditional: past cause, present result (unit 5).' },
        { q: 'I wish I ___ to the party last night.', o: ['had gone', 'went', 'would go'], why: 'A past regret: *wish* + past perfect (unit 5).' },
        { q: 'He admitted ___ the mistake.', o: ['making', 'to make', 'that make'], why: '*admit* + -ing (unit 6).' },
        { q: 'It is cheap. ___, it is not very reliable.', o: ['However', 'Although', 'Despite'], why: 'A new sentence: *However* (unit 6).' },
        { q: 'She’s ___ to be late; there’s a strike today.', o: ['bound', 'sure that', 'likely that'], why: '*bound to* + verb (unit 7).' },
        { q: 'He ___ the email; he never replied.', o: ['can’t have read', 'mustn’t have read', 'can’t read'], why: 'Negative past deduction (unit 7).' },
        { q: 'The meeting was cancelled, ___ annoyed everyone.', o: ['which', 'what', 'that'], why: 'A whole idea: *which* (unit 8).' },
        { q: '___ in 1850, the bridge is still in use.', o: ['Built', 'Building', 'Having built'], why: 'Passive meaning: past participle (unit 8).' },
      ] },
    ] },
    { title: 'Check 3 and exam corner: Use of English Part 4', blocks: [
      { t: 'text', md: 'In the format of B2 First Reading and Use of English Part 4: complete the second sentence using the word given and between two and five words. Each answer is worth two points.' },
      { t: 'ex', kind: 'transform', h: 'Complete the second sentence.', items: [
        { q: 'Someone is repairing my laptop at the moment.', cue: 'HAVING', a: ['I am having my laptop repaired at the moment.', 'I’m having my laptop repaired at the moment.'], why: '*have something done*, present continuous (unit 4).' },
        { q: 'I didn’t know her number, so I couldn’t call her.', cue: 'IF', a: ['If I had known her number, I could have called her.', 'I could have called her if I had known her number.'], why: 'Third conditional (unit 5).' },
        { q: '“You should take the train,” Sam said to me.', cue: 'SUGGESTED', a: ['Sam suggested taking the train.', 'Sam suggested that I take the train.', 'Sam suggested that I should take the train.'], why: '*suggest* + -ing or *that* clause (unit 6).' },
        { q: 'I’m sure he was joking.', cue: 'MUST', a: ['He must have been joking.'], why: 'Past deduction, continuous (unit 7).' },
      ] },
      { t: 'tip', md: 'Score check 3 out of 8 (two points each), checks 1 and 2 out of 8 each, for 24 in total. In the real exam, Part 4 also gives one mark for each correct half of an answer.' },
    ] },
    { title: 'Speaking check', blocks: [
      { t: 'text', md: 'Your teacher asks you some of these questions. Answer with full, developed answers: an opinion, a reason and an example.\n\nWhat have you been doing in your free time recently?\n\nTell me about a time something went wrong on a trip.\n\nWhere do you think you will be living in ten years? What will you have achieved?\n\nIs there a decision you wish you had made differently?\n\nWhat is something you heard in the news this week? What did people say about it?\n\nLook at this situation: a man is standing in the rain outside a closed restaurant. What might have happened?' },
    ] },
  ],
  activities: {
    one: { title: 'Check and plan', md: 'Do the written check with the student, then the full speaking check (about eight minutes in 1 on 1, so you can use all the questions). Go through the results together and agree on two units to revise, with the book lessons and Practice rounds to do this week.' },
    small: { title: 'Pair practice while waiting', md: 'While you check one student, the others work in pairs on the speaking questions from board page 4 that you are not using with them, taking turns to ask and answer and noting one good sentence from their partner. Rotate until everyone has had their speaking check.' },
    group: { title: 'Self-check rooms', md: 'While you run the speaking check in a separate breakout room, the others work in rooms of three: they compare their written answers, find which units their mistakes came from, and each writes two sentences in the chat about what they will practise. Bring everyone back at the end for the close.' },
  },
  homework: { book: 'u1 u2 u3 u4 u5 u6 u7 u8', md: 'Look at your two weakest units from today’s check. Do their unit tests again and the Practice round of your own mistakes. If you scored under 17 out of 24, also redo the book lessons your teacher named in the chat.' },
};
