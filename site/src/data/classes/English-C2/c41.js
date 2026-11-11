// English C2, class 41 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u9:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c41',
  focus: 'By the end every student builds an argument in its parts (claim, reason, evidence, warrant, concession and rebuttal) and signals each move precisely: *I would argue that*, *on the grounds that*, *take the case of*, *if we accept that…, then*, *granted*, *admittedly*, *that said*, *it does not follow that*, *this is not to say that* and the concessive *Plausible as it sounds*. The speaking goal: hold a one-minute argument that concedes a point and still wins it. The exam goal: a full task in the format of C2 Proficiency Reading and Use of English Part 4.',
  tips: [
    'Students often contradict instead of arguing (*No, that’s wrong*). Insist on the two-step move: accept something first (*Granted, …*), then turn (*That said, …*). It sounds more reasonable and it is harder to answer.',
    '*It does not follow that* attacks the logic, not the facts. Practise it on a true fact with a weak conclusion (*Ice-cream sales and drownings both rise in summer*) so students feel the difference.',
    'The warrant is usually unspoken, which is why it is powerful. When an argument feels wrong but the facts are right, ask *What would you have to believe for this to follow?*',
    'Watch two common mistakes: *Despite it is popular* (use *Although* or *Despite its popularity*) and *As persuasive as it is* in the concessive inversion (*Persuasive as it is*).',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Write a motion on the board: *Primary schools should abolish homework.* Students say in one sentence whether they agree. Note one reason from each.' },
    { min: 10, title: 'The parts of an argument', md: 'Show board page 1. Students sort the sentences, then say which part they would attack first if they disagreed, and why.' },
    { min: 10, title: 'Concede, then turn', md: 'Show board page 2. Students choose the expressions, then each makes one concession and one rebuttal about the motion from the warm-up.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 15, title: 'Exam corner', md: 'Show board page 3: a full Part 4 task, six items. Students answer alone in eight minutes, count their words, then check together and score out of 12.' },
    { min: 5, title: 'Close', md: 'Each student finishes: *Granted, …; that said, …* about something they changed their mind on this year. Set the homework.' },
  ],
  board: [
    { title: 'The parts of an argument', blocks: [
      { t: 'ex', kind: 'sort', h: 'What does each sentence do in the argument?', groups: ['claim', 'reason', 'evidence', 'warrant', 'concession', 'rebuttal'], explain: ['groups'], items: [
        { s: 'I would argue that primary schools should abolish homework altogether.', g: 0, why: '*I would argue that* states the position.' },
        { s: 'This is because young children learn more from play and sleep than from worksheets.', g: 1, why: '*This is because* gives the reason.' },
        { s: 'Take the case of the schools in our district that dropped homework last year: reading levels did not fall.', g: 2, why: '*Take the case of* introduces an example that supports the reason.' },
        { s: 'If we accept that time at home is limited, then it should go to whatever helps children most.', g: 3, why: 'The assumption that links the evidence to the claim.' },
        { s: 'Admittedly, some parents value homework as a window on what their children are learning.', g: 4, why: '*Admittedly* accepts a point for the other side.' },
        { s: 'That said, a short weekly note from the teacher would do the same job far better.', g: 5, why: '*That said* turns the concession and answers it.' },
      ] },
      { t: 'tip', art: 'owl', md: 'The strongest place to attack an argument is often its **warrant**, the unspoken assumption. *Reading levels did not fall* is a fact; *so homework is useless* follows only if you assume reading levels are the only thing homework is for.' },
    ] },
    { title: 'Concede, then turn', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the expression that fits best.', items: [
        { q: 'Graduates tend to earn more than non-graduates. ___ the degree itself is what raises their income.', o: ['It does not follow that', 'Granted,', 'That said,'], why: 'The fact is accepted; the causal link is denied.' },
        { q: '___ the theory sounds, there is no evidence that it works.', o: ['Plausible as', 'As plausible', 'Despite plausible'], why: 'The concessive inversion: adjective + *as* + subject + verb.' },
        { q: '___ it is true that turnout is rising, it remains low among the young.', o: ['While', 'Despite', 'However'], why: '*While* (or *Although*) + clause; *despite* needs a noun or *-ing*.' },
        { q: '___, the report was written in a hurry. Even so, its conclusions stand.', o: ['Admittedly', 'Therefore', 'Similarly'], why: 'A concession that prepares for *Even so*.' },
        { q: 'Experts disagree about the details. ___ they disagree about everything.', o: ['This is not to say that', 'It follows that', 'Granted,'], why: '*This is not to say that* blocks a misreading of your own point.' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first, using the word given. Do not change the word given. Use between three and eight words, including the word given.', items: [
        { q: 'Although the idea is appealing, it would be very expensive.', cue: 'AS', gap: '___, it would be very expensive.', a: ['Appealing as the idea is', 'Appealing as the idea may be', 'Appealing as the idea might be', 'Appealing as it is'], why: 'The concessive inversion: *Appealing as the idea is*, with no *as* before the adjective.' },
        { q: 'Sales rose after the campaign, but that does not prove the campaign caused the rise.', cue: 'FOLLOW', gap: 'Sales rose after the campaign, but it ___ caused the rise.', a: ['does not follow that the campaign', 'doesn’t follow that the campaign', 'does not follow that it', 'doesn’t follow that it'], why: '*It does not follow that* + clause denies the link, not the fact.' },
        { q: 'I accept that the scheme has some advantages, but I still oppose it.', cue: 'GRANTED', gap: '___ some advantages, but I still oppose it.', a: ['Granted, the scheme has', 'Granted the scheme has', 'Granted that the scheme has', 'Granted, the scheme does have'], why: '*Granted* as a sentence adverb introduces the concession.' },
        { q: 'I am not saying that experts are always right.', cue: 'SAY', gap: '___ that experts are always right.', a: ['This is not to say', 'That is not to say', 'This isn’t to say', 'That isn’t to say'], why: '*This is not to say that* blocks a misreading.' },
        { q: 'The plan is expensive, but despite that, doing nothing would cost more.', cue: 'SAID', gap: 'The plan is expensive. ___ would cost more.', a: ['That said, doing nothing', 'Having said that, doing nothing', 'That being said, doing nothing'], why: '*That said* introduces the rebuttal after a concession.' },
        { q: 'The argument assumes, without saying so, that popular policies are right.', cue: 'RESTS', gap: 'The argument ___ that popular policies are right.', a: ['rests on an unstated assumption', 'rests on the unstated assumption', 'rests on an unspoken assumption', 'rests on the assumption', 'rests on an assumption'], why: '*Rest on an (unstated) assumption*: the warrant made visible.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In **Part 4**, check three things before you move on: the key word is unchanged (*SAID*, not *saying*), the answer has three to eight words (contractions count as two), and the second sentence means the same as the first, including any negative.' },
    ] },
  ],
  activities: {
    one: { title: 'Build it, then break it', md: 'The student chooses a side of a motion (*Cities should ban private cars from their centres*, or one of their own) and has two minutes to build a one-minute argument with a claim, a reason, evidence, one concession and a rebuttal. While they speak, note each move. Then attack the warrant (*That only follows if…*). The student must reply with *Granted, …; that said, …* or *It does not follow that…*. Swap sides and repeat.' },
    small: { title: 'Argument relay', md: 'Give the group a motion. The first student states the claim and a reason, the next adds evidence, the next names the warrant, the next concedes a point for the other side and the next rebuts it; with fewer students, go round again. Then the opposing case runs the same way. Finish by voting on which side’s weakest link was easiest to attack, and why.' },
  },
  homework: { book: 'u9:p1 u9:p2', md: 'Finish lesson 1 of unit 9 if needed, then do lesson 2 (With respect, that is a straw man). Write a paragraph of about 150 words on a motion of your choice with a claim, a reason, evidence, one concession and a rebuttal, and underline the words that signal each move.' },
};
