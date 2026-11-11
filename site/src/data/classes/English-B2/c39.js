// English B2, class 39 (docs/LESSONS_PLAN.md, L6). Review of book units u7 and u8. Draft for the owner's review.
export const LESSON = {
  id: 'c39',
  focus: 'A speaking-heavy review of units 7 and 8. By the end every student can express exactly how certain they are, make deductions about the past including continuous and passive forms, speculate about pictures, use relative clauses with *which* for a whole idea, *whose* and *most of whom*, shorten sentences with participle clauses, and switch to a formal register. The mid-level check is next class, so students leave knowing what to revise.',
  tips: [
    'List the three mistakes you heard most in units 7 and 8 and give them the most time. Typical ones: *mustn’t have* for a negative deduction, *what* instead of *which* for a whole idea, and dangling participles.',
    'Every grammar task should end with a true sentence from the students: a deduction about something that happened this week, a sentence about their city with *which*.',
    'Remind students how the mid-level check works (a written check of units 1 to 8 and a short speaking check) so they are calm about it.',
    'Keep the exam corner short and focused; it is practice for the check as well as the exam.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Describe a small mystery: *Your neighbour’s lights have been on all night.* Each student gives one deduction and one speculation.' },
    { min: 10, title: 'Unit 7: certainty and deduction', md: 'Show board page 1. Students choose the forms alone, then compare.' },
    { min: 10, title: 'Unit 8: relative and participle clauses', md: 'Show board page 2. Students join and correct the sentences.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: B2 First Part 4 key word transformations from both units. Students write alone, then reveal.' },
    { min: 5, title: 'Fix the mistakes', md: 'Show board page 4 and add mistakes from your notes.' },
    { min: 5, title: 'Close', md: 'Explain the mid-level check. Set the homework.' },
  ],
  board: [
    { title: 'Unit 7: certainty and deduction', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the best form.', items: [
        { q: 'She’s been practising every day, so she’s ___ to pass.', o: ['bound', 'likely that', 'no way'], why: '*bound to* + verb: very sure.' },
        { q: 'The ground is wet. It ___ in the night.', o: ['must have rained', 'must rain', 'can’t have rained'], why: 'Evidence: *must have* + past participle.' },
        { q: 'He looked exhausted. He ___ all night.', o: ['must have been working', 'must have worked to', 'mustn’t have worked'], why: 'An action in progress: continuous.' },
        { q: 'The painting ___ stolen; the alarm never went off.', o: ['can’t have been', 'mustn’t have been', 'can’t be'], why: 'Passive negative deduction: *can’t have been*.' },
        { q: '___ as if they’re waiting for someone.', o: ['It looks', 'It looks like as', 'They look like'], why: '*It looks as if* + clause.' },
      ] },
    ] },
    { title: 'Unit 8: relative and participle clauses', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
        { q: 'The bus was late, ___ meant I missed the start.', o: ['which', 'what', 'that'], why: 'A whole idea: *which*.' },
        { q: 'I have three cousins, all of ___ live in Canada.', o: ['whom', 'them', 'who'], why: 'One sentence: *all of whom*.' },
        { q: '___ in 1900, the station has been modernised.', o: ['Opened', 'Opening', 'Having opened'], why: 'Passive meaning: past participle.' },
        { q: '___ my work, I went for a walk.', o: ['Having finished', 'Finished', 'Having finish'], why: 'An earlier action: *having* + past participle.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 4', blocks: [
      { t: 'text', md: 'In the format of B2 First Reading and Use of English Part 4: use the word given and between two and five words.' },
      { t: 'ex', kind: 'transform', h: 'Complete the second sentence.', items: [
        { q: 'I’m sure Anna took the keys by mistake.', cue: 'MUST', a: ['Anna must have taken the keys by mistake.'], why: 'Sure about the past: *must have* + past participle.' },
        { q: 'It is very probable that the price will rise.', cue: 'LIKELY', a: ['The price is very likely to rise.', 'The price is likely to rise.'], why: '*be likely to* + verb.' },
        { q: 'After she had read the report, she called the manager.', cue: 'HAVING', a: ['Having read the report, she called the manager.'], why: 'Perfect participle clause.' },
      ] },
      { t: 'tip', md: 'In Part 4 the word given can never be changed: if it is *HAVING*, you must use *having*, not *had*. Count your words; contractions count as two.' },
    ] },
    { title: 'Fix the mistakes', blocks: [
      { t: 'ex', kind: 'fix', h: 'Typical mistakes from units 7 and 8.', items: [
        { s: 'He [mustn’t have] heard me; he didn’t answer.', a: ['can’t have', 'couldn’t have'], why: 'Negative deduction: *can’t have*.' },
        { s: 'She won the prize, [what] surprised everyone.', a: ['which'], why: 'A whole idea: *which*.' },
        { s: 'My car, [that] is ten years old, still works.', a: ['which'], why: 'After a comma: *which*, not *that*.' },
        { s: '[Walk] into the room, I saw my old teacher.', a: ['Walking'], why: 'Present participle for an action at the same time.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Mystery and city', md: 'First the student solves a short mystery you describe, using three degrees of certainty and two past deductions. Then they describe their city in a formal style with two relative clauses and two participle clauses, as if for a guidebook. Correct afterwards and note the two points to revise for the check.' },
    small: { title: 'Interview swap', md: 'In pairs, A interviews B with six questions from units 7 and 8 (*What do you think must have happened when…? How has your city changed? What is bound to happen in your country next year?*). Swap. Then each student reports two answers to the group using a relative or participle clause.' },
    group: { title: 'Review stations', md: 'In breakout rooms of three, each room has two minutes per station in the chat: certainty phrases (rank five sentences), past deduction (explain three pictures in words), relative clauses (join four pairs), formal register (make three sentences formal). Rotate through the stations, then check answers together.' },
  },
  homework: { book: 'u7 u8', md: 'Do the unit tests of unit 7 (Mysteries and deductions) and unit 8 (A changing world). Look again at any lesson where you scored under 70%, because the next class is the mid-level check of units 1 to 8.' },
};
