// English C1, class 48 (docs/LESSONS_PLAN.md, L6). Mid-level check of book units u1 to u10. Draft for the owner's review.
export const LESSON = {
  id: 'c48',
  focus: 'The mid-level check: a calm, structured check of units 1 to 10 that shows you and each student what they can already do and what needs more work before the second half of C1. It has two parts: a written check on the board (24 points, the last part in the format of C1 Advanced Reading and Use of English Part 4) and a short speaking check for each student with clear criteria. It is not a pass or fail; each student leaves with two clear things to practise.',
  tips: [
    'Present it as a check, not an exam: *This shows us what to practise in the second half of the course.* Calm students show what they really know.',
    'Speaking check criteria (each student, about three minutes), each marked *yes*, *nearly* or *not yet*: the student chooses perfect and continuous forms with control about their own experience; uses a past modal or a mixed conditional to judge or imagine the past; focuses or emphasises an idea with a cleft sentence, an emphatic auxiliary or an inversion; hedges or distances a claim (*it would appear*, *is thought to*); uses precise collocations of the topic; and keeps a developed answer going with linkers such as *given that* or *having said that*, without long pauses.',
    'A student is on track with *yes* or *nearly* in at least four of the six criteria and 70% or more in the written check (17 of 24). Below that, the student is behind: tell them privately, with two clear things to practise.',
    'For students who are behind: point them to the book lessons of their two weakest units and to Practice, which brings back their own mistakes; offer a short 1 on 1 if their plan includes it; and pair them with a stronger student in the next few classes.',
    'In large classes, do the speaking check two students at a time in a breakout room while the others work, or split it over this class and the next.',
  ],
  plan: [
    { min: 3, title: 'Welcome', md: 'Explain the two parts and how long they take. Reassure students that the result is for planning, not a grade.' },
    { min: 22, title: 'Written check', md: 'Show board pages 1 to 3 one by one (about seven minutes each). Students write their answers alone, privately in the chat to you or on paper. Do not help during this part.' },
    { min: 5, title: 'Check together', md: 'Go through the answers quickly. Students count their own score out of 24 and note which units their mistakes came from.' },
    { min: 25, title: 'Speaking check', md: 'Use the questions on board page 4. Call students one or two at a time. The others do the activity for your class size below.' },
    { min: 5, title: 'Close', md: 'Tell each student privately in the chat their strongest unit and two things to practise. Set the homework.' },
  ],
  board: [
    { title: 'Check 1: units 1 to 5', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
        { q: 'I ___ to call you for weeks, but something always got in the way.', o: ['had been meaning', 'have meant', 'was meant'], why: 'Duration up to a past point: past perfect continuous (unit 1).' },
        { q: 'He’s usually easy-going, but he ___ very stubborn about this.', o: ['is being', 'is been', 'has being'], why: 'A state verb in the continuous for temporary behaviour (unit 1).' },
        { q: 'We ___ spend every summer at my aunt’s farm when we were children.', o: ['would', 'were used to', 'had to be'], why: '*Would* for repeated past actions (unit 2).' },
        { q: '___ the letter, she sat down in silence.', o: ['Having read', 'Being read', 'Had read'], why: 'A participle clause for an earlier action (unit 2).' },
        { q: 'What really ___ me was the lack of preparation.', o: ['annoyed', 'annoying', 'it annoyed'], why: 'A *what*-cleft: *What* + clause + *was* (unit 3).' },
        { q: 'You ___ have brought food; there was plenty here.', o: ['needn’t', 'mustn’t', 'couldn’t'], why: '*Needn’t have*: done, but not necessary (unit 4).' },
        { q: 'There ___ to be a growing interest in part-time work.', o: ['would appear', 'would appearing', 'appears being'], why: 'Hedging with the softening *would* (unit 4).' },
        { q: 'The paintings are believed ___ during the war.', o: ['to have been stolen', 'to be stealing', 'having been stolen'], why: 'Passive reporting with a perfect passive infinitive (unit 5).' },
      ] },
    ] },
    { title: 'Check 2: units 6 to 10', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
        { q: 'If I hadn’t taken that job, I ___ in Lisbon now.', o: ['would be living', 'would have lived', 'will be living'], why: 'Mixed conditional: past cause, present result (unit 6).' },
        { q: '___ you need any help, please call reception.', o: ['Should', 'Would', 'Had'], why: 'Inverted first conditional with *should* (unit 6).' },
        { q: 'We kindly request that guests ___ their rooms by eleven.', o: ['vacate', 'get out of', 'clear off'], why: 'A formal notice needs the formal verb (unit 7).' },
        { q: '“Will the train be late?” “I hope ___.”', o: ['not', 'no', 'don’t'], why: 'Negative substitution: *I hope not* (unit 7).' },
        { q: 'The two companies are ___ the verge of a merger.', o: ['on', 'at', 'in'], why: '*Be on the verge of* (unit 8).' },
        { q: 'It was a useful, ___ expensive, course.', o: ['albeit', 'whereas', 'given'], why: '*Albeit* + adjective: although (unit 8).' },
        { q: 'At no time ___ that the job was temporary.', o: ['was I told', 'I was told', 'did I told'], why: 'Inversion after *At no time* (unit 9).' },
        { q: 'Poor sleep can be indicative ___ chronic stress.', o: ['of', 'to', 'for'], why: '*Indicative of* (unit 10).' },
      ] },
    ] },
    { title: 'Check 3 and exam corner: Reading and Use of English Part 4', blocks: [
      { t: 'text', md: 'In the format of C1 Advanced Reading and Use of English Part 4: complete the second sentence using the word given and between three and six words. Each answer is worth two points.' },
      { t: 'ex', kind: 'transform', h: 'Complete the second sentence.', items: [
        { q: 'I’m sure she didn’t mean to offend you. (She can’t ___ to offend you.)', cue: 'MEANT', a: ['She can’t possibly have meant to offend you.', 'She can’t have meant to offend you.'], why: 'Negative past deduction: *can’t (possibly) have* + past participle (unit 4).' },
        { q: 'I’d prefer you not to mention this to anyone. (I’d ___ this to anyone.)', cue: 'RATHER', a: ['I’d rather you didn’t mention this to anyone.', 'I would rather you didn’t mention this to anyone.', 'I’d rather you did not mention this to anyone.'], why: '*Would rather* + subject + past simple (unit 6).' },
        { q: 'If it hadn’t been for her help, we would have failed. (But ___ we would have failed.)', cue: 'FOR', a: ['But for her help, we would have failed.', 'But for her help we would have failed.'], why: '*But for* + noun: a formal condition (unit 6).' },
        { q: 'We didn’t know how serious the problem was until the report came out. (Not until the report came out ___ how serious the problem was.)', cue: 'DID', a: ['Not until the report came out did we know how serious the problem was.', 'Not until the report came out did we realise how serious the problem was.'], why: 'Inversion in the main clause after *Not until* (unit 9).' },
      ] },
      { t: 'tip', md: 'Score check 3 out of 8 (two points each), checks 1 and 2 out of 8 each, for 24 in total. In the real exam, Part 4 also gives one mark for each correct half of an answer.' },
    ] },
    { title: 'Speaking check', blocks: [
      { t: 'text', md: 'Your teacher asks you some of these questions. Give full, developed answers: an opinion, a reason, a qualification and an example.\n\nWhat have you been working on lately, and what have you achieved so far?\n\nTell me about a decision in the past that you now think was a mistake. What would your life be like now if you had decided differently?\n\nWhat is it that really makes a good teacher, in your view?\n\nIt is often said that people change careers more often than in the past. Why might that be?\n\nWhere do you think your town or city is going to be in twenty years?\n\nWhat helps you cope when you are under a lot of pressure?' },
    ] },
  ],
  activities: {
    one: { title: 'Check and plan', md: 'Do the written check with the student, then the full speaking check (about eight minutes in 1 on 1, so you can use all the questions). Go through the results together and agree on two units to revise, with the book lessons and Practice rounds to do this week.' },
    small: { title: 'Pair practice while waiting', md: 'While you check one student, the others work in pairs on the speaking questions from board page 4 that you are not using with them, taking turns to ask and answer and noting one good sentence from their partner. Rotate until everyone has had their speaking check.' },
    group: { title: 'Self-check rooms', md: 'While you run the speaking check in a separate breakout room, the others work in rooms of three: they compare their written answers, find which units their mistakes came from, and each writes two sentences in the chat about what they will practise. Bring everyone back at the end for the close.' },
  },
  homework: { book: 'u1 u2 u3 u4 u5 u6 u7 u8 u9 u10', md: 'Look at your two weakest units from today’s check. Do their unit tests again and the Practice round of your own mistakes. If you scored under 17 out of 24, also redo the book lessons your teacher named in the chat.' },
};
