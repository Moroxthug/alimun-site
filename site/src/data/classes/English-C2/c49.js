// English C2, class 49 (docs/LESSONS_PLAN.md, L6). Review of units 9 and 10. Draft for the owner's review.
export const LESSON = {
  id: 'c49',
  focus: 'By the end every student uses the language of units 9 and 10 together, with more accuracy and more choice: the parts of an argument and its signals (*granted, that said, it does not follow that, plausible as it sounds*), naming a weak argument politely, disagreeing and conceding in discussion, conditional offers and the idioms of negotiation, chairing and taking part in meetings, and the formal language of letters and reports (*I would ask that the decision be…*, *the data suggest*, *it is recommended that…*). Most of the class is speaking, with an exam task in the format of C2 Proficiency Reading and Use of English Part 4.',
  tips: [
    'Before the class, collect four mistakes your students made in classes 43 to 48 and swap them into board page 2 if you can. Their own mistakes are the most useful review.',
    'The two units meet in one skill: holding a position while keeping the other side talking. In the activity, reward the student who concedes and then gets something back, whether in a debate or a negotiation.',
    'Range matters at C2. When a sentence is correct, ask *Can you say it more precisely, or more courteously?* and accept the better version on the board.',
    'End with a clear next step: each student names their weakest area from the two units and one book lesson to do again before the next class.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What is the hardest conversation you have had at work or in your studies this year: an argument, a negotiation or a meeting?* Each student answers in three sentences.' },
    { min: 10, title: 'Units 9 and 10 together', md: 'Show board page 1. Students choose the forms alone, then say which unit and which skill each sentence comes from.' },
    { min: 8, title: 'Fix it', md: 'Show board page 2. Students correct the mistakes and explain each one in a few words.' },
    { min: 12, title: 'Exam corner', md: 'Show board page 3: C2 Proficiency Reading and Use of English Part 4. Eight minutes alone, then check together, counting words and giving two marks per item.' },
    { min: 18, title: 'Activity', md: 'Show board page 4: the residents’ meeting. Use the activity for your class size below.' },
    { min: 5, title: 'Close', md: 'Each student names one point from units 9 and 10 they now feel sure about and one to practise. Set the homework.' },
  ],
  board: [
    { title: 'Units 9 and 10 together', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
        { q: '___, the scheme is expensive. That said, doing nothing would cost more.', o: ['Granted', 'Despite', 'Although'], why: 'A sentence adverb that concedes, followed by a turn. *Despite* and *Although* cannot stand alone before a comma.' },
        { q: 'The argument ___ on an unstated assumption: that what is popular must be right.', o: ['rests', 'lies', 'stands'], why: '*Rest on an assumption*: exposing the warrant.' },
        { q: 'I take your ___, but I’m not sure the figures bear it out.', o: ['point', 'points', 'idea'], why: 'The fixed phrase is singular: *I take your point*.' },
        { q: 'We would be prepared to waive the fee provided that you ___ for a further two years.', o: ['renew', 'will renew', 'would renew'], why: 'Present tense for the future after *provided that*.' },
        { q: 'Let’s come back to that under any other ___.', o: ['business', 'matters', 'points'], why: 'The fixed item at the end of an agenda: *any other business*.' },
        { q: 'In light of these findings, it is recommended that the board ___ the proposal at its next meeting.', o: ['consider', 'considers', 'will consider'], why: 'The base form after *it is recommended that*.' },
      ] },
    ] },
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'Despite [it is popular], the plan is unfair to tenants.', a: ['its popularity', 'being popular'], why: '*Despite* takes a noun or *-ing*, not a clause (unit 9).' },
        { s: 'We cannot proceed unless you [don’t pay] a deposit.', a: ['pay'], why: '*Unless* already means *if not* (unit 10).' },
        { s: 'Could we let Ben [finishing]? Then I’ll come to you.', a: ['finish'], why: '*Let* + infinitive without *to* (unit 10).' },
        { s: 'The survey [proves] that staff want the scheme to continue.', a: ['suggests', 'indicates'], why: 'Match the verb to the strength of the evidence (unit 10).' },
        { s: 'Dear Ms Hart, … Yours [faithfully],', a: ['sincerely'], why: 'A named reader takes *Yours sincerely* in British convention (unit 10).' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between three and eight words, including the word given.', items: [
        { q: 'Although the theory sounds plausible, there is no evidence for it.', cue: 'AS', gap: '___, there is no evidence for it.', a: ['Plausible as the theory sounds', 'Plausible as the theory may sound', 'Plausible as the theory might sound'], why: 'Concessive inversion: adjective + *as* + subject + verb.' },
        { q: 'The economy grew, but that does not mean that the policy caused the growth.', cue: 'FOLLOW', gap: 'The economy grew, but it ___ the policy caused the growth.', a: ['does not follow that', 'doesn’t follow that', 'does not necessarily follow that', 'doesn’t necessarily follow that'], why: '*It does not follow that* accepts the fact and denies the link.' },
        { q: 'We will sign the contract only if the price stays fixed for two years.', cue: 'CONDITION', gap: 'We will sign the contract ___ fixed for two years.', a: ['on condition that the price stays', 'on condition that the price remains', 'on condition the price stays', 'on condition the price remains', 'on condition that the price is'], why: '*On condition that* + present tense for the future.' },
        { q: 'I would like the decision to be postponed until after the consultation.', cue: 'ASK', gap: 'I would ___ postponed until after the consultation.', a: ['ask that the decision be', 'ask for the decision to be', 'ask that the decision should be'], why: 'A formal request with the base form: *ask that… be*.' },
        { q: 'We should leave that question until the end of the meeting.', cue: 'PARK', gap: 'Let’s ___ until the end of the meeting.', a: ['park that question', 'park the question', 'park that question for now', 'park this question'], why: '*Park* an issue: leave it for later.' },
        { q: 'Both sides gave way a little and agreed on a price in the middle.', cue: 'HALFWAY', gap: 'Both sides ___ and agreed on a price in the middle.', a: ['met each other halfway', 'met one another halfway'], why: 'The idiom is *meet someone halfway*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Review your **Part 4** answers in three passes: the key word unchanged, three to eight words (a contraction counts as two), and the whole sentence read again for meaning. Most lost marks come from the third pass being skipped.' },
    ] },
    { title: 'The residents’ meeting', blocks: [
      { t: 'text', md: '**The situation.** A developer wants to build ninety flats on a disused sports ground. Residents want it kept as open space. The council will decide next month, and has asked both sides to meet first.\n\n**The developer’s representative** needs at least seventy flats to make the project pay, could include a small park, and can offer a contribution to the local school, but only if work starts this year.\n\n**The residents’ spokesperson** wants a park on at least half the site and no building higher than four floors, and doubts the developer’s claim that the area needs new flats. Their bottom line: the football pitch stays.\n\n**The chair (a council officer)** must keep to twenty minutes, give both sides a fair hearing and close with what has been agreed and what has not.' },
      { t: 'tip', art: 'owl', md: 'Use both units: concede and turn, name a weak argument politely (*That rather assumes that…*), make conditional offers, chair with short questions and summaries, and close with actions and dates.' },
    ] },
  ],
  activities: {
    one: { title: 'Across the table, then in the chair', md: 'Play the developer’s representative from board page 4; the student is the residents’ spokesperson. Give the student a real argument to answer (*The city needs homes; open space is a luxury*) and real offers to bargain over. After about eight minutes, stop and switch: the student becomes the chair and runs a three-minute closing session in which you play both sides in turn, pushing to reopen a point already agreed. The student summarises, parks what cannot be settled and closes with actions. Finish with five sentences you noted, upgraded together.' },
    small: { title: 'The meeting', md: 'Give the roles on board page 4 (with two students, one is the developer and one the spokesperson, and you chair; with four to six, add a second resident who is sympathetic to the flats, a school head who wants the contribution and an observer who notes every conditional offer and every concession followed by a turn). Run the meeting for twelve minutes. The observer, or you, reports for two minutes. Then agree as a group the three sentences that best used the language of units 9 and 10.' },
  },
  homework: { book: 'u9 u10', md: 'Do the unit 9 and unit 10 tests in the book if you have not yet, then do lesson 1 of unit 11 (Linked to, not caused by). Write about 150 words as the chair of today’s meeting: a short summary for the council of what was agreed, what was not and the next steps, with a recommendation in the base form.' },
};
