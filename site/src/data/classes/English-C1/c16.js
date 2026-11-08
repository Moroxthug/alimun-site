// English C1, class 16 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u4:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c16',
  focus: 'By the end every student can make a claim less absolute in the way professional and academic English does, with *seem to*, *appear to*, *tend to*, *arguably*, *to some extent*, *by and large* and the softening *would* (*It would appear that…*), and knows where hedging belongs: with interpretations, causes and generalisations, not with plain facts. The speaking goal: present the results of a workplace change in a meeting, sounding careful and credible.',
  tips: [
    'Present hedging as precision, not weakness: a hedged claim is harder to attack. Ask the class which of two claims they would trust more in a report, and why.',
    'One hedge per claim is usually enough. *It might possibly perhaps seem that…* sounds evasive; reward students who choose one well-placed hedge.',
    '*Tend to* describes a general habit and takes the simple form: *Staff tend to leave earlier*, not *are tending to*.',
    '*Arguably* introduces a claim the speaker is ready to defend. Students sometimes use it as *maybe*; check with *Could you defend that?*',
    'Watch *to some extents*: the phrase is always singular.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Write on the board: *Working from home makes people lazy.* Ask: *Who agrees completely? Who could attack this sentence?* Collect the objections, then ask how to say it so nobody can attack it.' },
    { min: 12, title: 'From strong to careful', md: 'Show board page 1. Students sort the claims, then choose the best hedge for each gap. Ask why the direct claims would be easy to attack.' },
    { min: 10, title: 'One hedge is enough', md: 'Show board page 2. Students fix the mistakes in pairs, then rewrite one over-hedged sentence of their own.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 4. Students rewrite the sentences alone, then compare. Reveal the answers.' },
    { min: 5, title: 'Close', md: 'Each student makes one careful claim about their own workplace or school with a hedge from today. Set the homework.' },
  ],
  board: [
    { title: 'From strong to careful', blocks: [
      { t: 'examples', items: [
        { s: 'Open-plan offices reduce concentration.', n: 'A claim almost nobody can defend.' },
        { s: 'Open-plan offices **can** reduce concentration.', n: 'Allows exceptions.' },
        { s: 'Open-plan offices **would appear to** reduce concentration **in some roles**.', n: 'Limits the claim and signals that the evidence is not complete.' },
        { s: '**It has been suggested that** open-plan offices **tend to** reduce concentration.', n: 'Distances the speaker from the claim.' },
      ] },
      { t: 'ex', kind: 'sort', h: 'Is the claim hedged or stated directly?', groups: ['hedged', 'direct'], items: [
        { s: 'By and large, the new rota has been welcomed.', g: 0, why: '*By and large* softens the claim.' },
        { s: 'The new rota has made everyone more productive.', g: 1, why: 'A universal claim with no hedge.' },
        { s: 'Part-time staff seem to feel less involved in decisions.', g: 0, why: '*Seem to* presents it as an impression.' },
        { s: 'Managers never listen to junior staff.', g: 1, why: '*Never* makes it absolute.' },
        { s: 'The pay rise is arguably overdue.', g: 0, why: '*Arguably* marks a claim the writer can defend.' },
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the best hedge.', items: [
        { q: '___, the training has been a success, although a few teams have not finished it yet.', o: ['By and large', 'Arguably not', 'To some extents'], why: '*By and large*: in general, with exceptions.' },
        { q: 'Shorter meetings ___ to improve morale, but we need more data.', o: ['would appear', 'are tending', 'arguably'], why: '*Would appear to* softens a cause you cannot yet prove.' },
        { q: 'The problem is, ___, one of poor communication.', o: ['to some extent', 'seemingly to', 'in some extent'], why: 'The fixed phrase is *to some extent*.' },
      ] },
    ] },
    { title: 'One hedge is enough', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'Younger staff [are tending to] change jobs more often.', a: ['tend to'], why: '*Tend to* describes a general habit: simple form.' },
        { s: 'To some [extents], the new system has helped.', a: ['extent'], why: 'The phrase is singular: *to some extent*.' },
        { s: 'It [might possibly perhaps seem] that the plan is working.', a: ['would seem', 'seems'], why: 'One hedge is enough; three sound evasive.' },
        { s: 'The meeting [appears to be] at ten; it says so on the calendar.', a: ['is'], why: 'Hedge claims, not facts: the calendar makes it a fact.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Hedge the part of the sentence where a reasonable person could disagree: the cause, the prediction or the generalisation. Leave dates, numbers and things everyone can check as they are.' },
    ] },
    { title: 'Exam corner: Use of English Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first, using the word given. The new part has three to six words, including the word given.', items: [
        { q: 'It seems that the new manager is popular with the staff.', cue: 'APPEARS', a: ['The new manager appears to be popular with the staff.'], why: '*It seems that* becomes subject + *appears to be*.' },
        { q: 'In general, part-time workers change employers less often.', cue: 'TEND', a: ['Part-time workers tend to change employers less often.'], why: 'A general habit: *tend to* + verb, simple form.' },
        { q: 'I agree with the proposal, but only partly.', cue: 'EXTENT', a: ['I agree with the proposal to some extent.', 'I agree with the proposal to a certain extent.', 'To some extent, I agree with the proposal.', 'To a certain extent, I agree with the proposal.'], why: '*Only partly* becomes *to some extent* or *to a certain extent*.' },
        { q: 'People say that the scheme has reduced absence.', cue: 'SAID', a: ['The scheme is said to have reduced absence.'], why: 'A reported claim about an earlier result: *is said to have reduced*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'When the word given is a verb such as *appear*, *seem* or *tend*, the new sentence usually starts with a real subject and needs *to* + verb after it. Check the tense of the infinitive: *to be*, or *to have* + past participle for an earlier action.' },
    ] },
  ],
  activities: {
    one: { title: 'Report to the board', md: 'The student imagines their company or school has tried a change for six months (flexible hours, no email after six, a new office). They present the results in two minutes as if to a board meeting, with at least four hedges. You then challenge one claim; the student defends or softens it. Note the hedges used and suggest two more precise ones.' },
    small: { title: 'Attack and defend', md: 'Each student writes one bold claim about work in the chat (*Nobody needs an office any more*). The next student attacks it in one sentence; the writer then rewrites it so it can be defended, using one hedge only. Score a point for every claim that survives a second attack.' },
    group: { title: 'Careful headlines', md: 'Breakout rooms of three get four overconfident headlines in the chat (*Four-day week makes workers happier*). Each room rewrites them for a serious report, with a different hedge each time. Bring everyone back; each room reads its most careful version and the class decides whether it says too little or just enough.' },
  },
  homework: { book: 'u4:p2', md: 'Finish lesson 2 of unit 4 if needed, then do lesson 3 (A steep learning curve). Write about 100 words reporting a change at your work or school as if for a manager, with at least four different hedges and no more than one per sentence.' },
};
