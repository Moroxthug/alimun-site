// English C1, class 19 (docs/LESSONS_PLAN.md, L6). Reviews units 3 and 4. Draft for the owner's review.
export const LESSON = {
  id: 'c19',
  focus: 'By the end every student has used the key language of units 3 and 4 again, mostly in speaking: cleft sentences to control focus, emphatic *do* and precise intensifiers (*bitterly disappointed*, *by far the best*), concessive markers (*admittedly*, *be that as it may*, *that said*), the full range of past modals, hedging, and the collocations of work and change. The class finds and fixes its own most frequent mistakes from both units.',
  tips: [
    'Collect real mistakes from classes 11 to 18 before this class and add four of them, anonymously, to the fix stage at the end.',
    'Persuasion and hedging pull in opposite directions: unit 3 adds weight, unit 4 takes it away. Ask students when each is the better choice (a speech to win votes, a report to a manager).',
    'Clefts and past modals combine naturally: *What must have happened is that the email went to the wrong person.* Model one such sentence and ask for more.',
    'Give the less confident students the first, easier turns and the stronger students the follow-up questions that need a concession or a hedge.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What is the one thing your workplace or school should change, and why hasn’t it changed yet?* Each student answers in two sentences, one a cleft.' },
    { min: 10, title: 'Unit 3 check', md: 'Show board page 1. Students choose the forms alone, then explain one choice each.' },
    { min: 10, title: 'Unit 4 check', md: 'Show board page 2. Students fix the mistakes in pairs, then say whether each sentence is about certainty, caution or collocation.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 12, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 4. Students work alone, then compare. Reveal the answers.' },
    { min: 8, title: 'Fix it', md: 'Write five real mistakes you heard today or in the last classes on the board. Students correct them in pairs, then together. Set the homework.' },
  ],
  board: [
    { title: 'Unit 3: persuasion', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
        { q: '___ residents want is a say in the decision.', o: ['What', 'That', 'Which'], why: 'A cleft with *what*: *What residents want is…*' },
        { q: 'It was only when the bus route closed ___ people started to complain.', o: ['that', 'what', 'when'], why: 'An *it*-cleft: *It was only when… that…*' },
        { q: 'The council were ___ disappointed by the turnout.', o: ['bitterly', 'highly', 'utterly'], why: '*Bitterly disappointed*; *highly* goes with judgements, not feelings.' },
        { q: 'This is ___ the best plan we have seen.', o: ['by far', 'far', 'much'], why: '*By far* goes with a superlative.' },
        { q: 'Admittedly, the scheme is expensive. ___, it would pay for itself within five years.', o: ['That said', 'On the contrary', 'Needless to say'], why: 'Concede a point, then introduce the counter-point: *That said*.' },
      ] },
    ] },
    { title: 'Unit 4: work in transition', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'He [mustn’t have] read the contract, or he wouldn’t have signed.', a: ['can’t have', 'couldn’t have', 'cannot have'], why: 'Negative deduction: *can’t have* or *couldn’t have*.' },
        { s: 'I [needn’t have called] her, so I sent a message instead.', a: ['didn’t need to call', 'did not need to call'], why: 'The call did not happen: *didn’t need to call*.' },
        { s: 'Remote workers [are tending to] work longer hours.', a: ['tend to'], why: 'A general habit: *tend to*, simple form.' },
        { s: 'After the takeover, sixty people were made [redundancy].', a: ['redundant'], why: '*Be made redundant*: an adjective.' },
        { s: 'The new job was a very [high] learning curve.', a: ['steep'], why: 'A learning curve is *steep*.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first, using the word given. The new part has three to six words, including the word given.', items: [
        { q: 'The lack of training worries the staff most.', cue: 'WHAT', a: ['What worries the staff most is the lack of training.'], why: 'A cleft with *what* puts the key idea at the end.' },
        { q: 'I’m sure she didn’t forget about the meeting.', cue: 'CAN’T', a: ['She can’t have forgotten about the meeting.'], why: 'A negative deduction about the past: *can’t have* + past participle.' },
        { q: 'It seems that the staff prefer the new rota.', cue: 'APPEAR', a: ['The staff appear to prefer the new rota.'], why: '*It seems that* becomes subject + *appear to*.' },
        { q: 'The team was extremely disappointed by the decision.', cue: 'BITTERLY', a: ['The team was bitterly disappointed by the decision.', 'The team were bitterly disappointed by the decision.'], why: 'The precise intensifier for disappointment: *bitterly*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 4, check that your sentence keeps the same meaning as the first one, not just the same words. A cleft changes the focus but not the facts; a hedge or a modal can change how sure the sentence is, so match the original exactly.' },
    ] },
  ],
  activities: {
    one: { title: 'Pitch and report', md: 'The student argues for one change at their work or school in a one-minute persuasive pitch (a cleft, an intensifier, a concession). Then they present the same idea as a careful report to a manager, with hedges and a past modal about what may have caused the problem. Compare the two versions together and note five sentences to correct.' },
    small: { title: 'Two voices', md: 'Each student gets a topic in the chat (a four-day week, a new office, retraining staff). They speak for one minute as a campaigner, then the next student answers as a cautious manager. Score a point for each cleft, concession, hedge or past modal used correctly.' },
    group: { title: 'Review stations', md: 'Breakout rooms of three each get one area in the chat (clefts and emphasis, discourse markers, past modals, work collocations). Each room writes three quiz questions for the class, one in the format of Part 4. Bring everyone back and run the quiz.' },
  },
  homework: { book: 'u3 u4', md: 'Do the unit tests of units 3 and 4 in the book if you have not yet. Then look again at the lesson with your lowest score, do its exercises once more, and write five sentences that use what it teaches.' },
};
