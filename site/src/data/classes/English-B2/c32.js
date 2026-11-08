// English B2, class 32 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u7:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c32',
  focus: 'By the end of the class every student can reason about the past with *must have*, *could have*, *might not have* and *can’t have*, including the continuous (*must have been working*) and the passive (*can’t have been stolen*), and can explain the evidence behind each deduction.',
  tips: [
    'Students know *must have* and *can’t have* from B1. Spend most of the time on the continuous and passive forms, which are new and come up in Part 4 key word transformations.',
    'Common mistakes: *must had*, *can’t have went* and *mustn’t have* for a negative deduction (it should be *can’t have*). Correct *mustn’t have* every time.',
    'Always ask *How do you know?* Deduction needs evidence; the language is more natural when students say what made them think so.',
    '*Could have* can also mean a missed possibility (*You could have told me!*). Mention it briefly, but keep today about deduction.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Show a simple situation: *Your colleague arrives with wet hair and an umbrella.* Students say what must have happened, what might have happened and what can’t have happened.' },
    { min: 15, title: 'Past deduction in depth', md: 'Show board page 1. Go through the table, highlighting the continuous and passive forms. Students make one sentence of each type about the warm-up situation.' },
    { min: 10, title: 'Practice', md: 'Show board page 2. Students choose and correct alone, then check together.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: B2 First Part 4 key word transformations with past modals. Students write alone, then reveal.' },
    { min: 5, title: 'Close', md: 'Each student tells one small mystery from their week, and the class deduces what happened. Set the homework.' },
  ],
  board: [
    { title: 'Deduction about the past', blocks: [
      { t: 'table', caption: 'Past deduction', explain: ['head', 'col2'], head: ['Form', 'Example', 'Meaning'], rows: [
        ['must have + past participle', 'She must have left early.', 'I’m almost sure it happened.'],
        ['can’t / couldn’t have', 'He can’t have seen us.', 'I’m almost sure it didn’t happen.'],
        ['might / could / may have', 'They might have missed the bus.', 'Perhaps it happened.'],
        ['might not have', 'She might not have got my message.', 'Perhaps it didn’t happen.'],
        ['must have been + -ing', 'He must have been sleeping.', 'An action in progress.'],
        ['can’t have been + past participle', 'It can’t have been stolen.', 'A passive deduction.'],
      ] },
      { t: 'tip', md: 'For a negative deduction use **can’t have** or **couldn’t have**, never *mustn’t have*: *He can’t have heard the phone.*' },
    ] },
    { title: 'Practice', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the best form.', items: [
        { q: 'The lights were off. They ___ at home.', o: ['can’t have been', 'mustn’t have been', 'must have been'], why: 'Lights off: almost sure they were not there.' },
        { q: 'His eyes were red. He ___ for hours.', o: ['must have been crying', 'must have cried for', 'can’t have been crying'], why: 'An action in progress: continuous.' },
        { q: 'The car isn’t outside. It ___ towed away.', o: ['might have been', 'might have', 'might be'], why: 'Passive deduction: *might have been* + past participle.' },
        { q: 'She didn’t reply. She ___ my message.', o: ['might not have got', 'mustn’t have got', 'can’t got'], why: 'Perhaps it didn’t happen: *might not have*.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'He [must had] forgotten the meeting.', a: ['must have'], why: 'Modal + *have* + past participle.' },
        { s: 'She can’t have [went] to work; her keys are here.', a: ['gone'], why: 'After *have*: past participle *gone*.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 4', blocks: [
      { t: 'text', md: 'In the format of B2 First Reading and Use of English Part 4: use the word given and between two and five words.' },
      { t: 'ex', kind: 'transform', h: 'Complete the second sentence.', items: [
        { q: 'I’m sure the window was broken by the wind.', cue: 'MUST', a: ['The window must have been broken by the wind.'], why: 'Sure about the past, passive: *must have been* + past participle.' },
        { q: 'It’s impossible that he was driving at that time.', cue: 'CAN’T', a: ['He can’t have been driving at that time.'], why: 'Impossible, in progress: *can’t have been* + -ing.' },
        { q: 'Perhaps they didn’t hear the announcement.', cue: 'MIGHT', a: ['They might not have heard the announcement.'], why: 'Perhaps not: *might not have* + past participle.' },
      ] },
      { t: 'tip', md: 'Part 4 often tests modals of deduction. When you see *I’m sure*, think *must have*; *It’s impossible*, think *can’t have*; *Perhaps*, think *might have*.' },
    ] },
  ],
  activities: {
    one: { title: 'Detective', md: 'Describe a scene in about six details (an open window, a cold cup of coffee, a missing laptop, muddy footprints). The student deduces what happened, using at least one continuous and one passive form, and explains the evidence each time. Then swap: the student invents a scene for you.' },
    small: { title: 'What happened here?', md: 'Write three short situations in the chat (*Your neighbour’s car has a new dent*, *A friend arrives two hours late and very happy*, *The office fridge is empty*). Pairs make three deductions for each, one sure, one possible, one impossible, with reasons. Then share; the most convincing pair wins.' },
    group: { title: 'Mystery rooms', md: 'Give each breakout room of three a different short mystery in the chat. They have eight minutes to agree on what must have happened and what can’t have happened, using continuous and passive forms. Each room presents its solution; the others ask one question each.' },
  },
  homework: { book: 'u7:p2', md: 'Finish book lesson 2 of unit 7 (She must have been working). Then write about something strange that happened to you or someone you know, and five deductions about it, including one continuous and one passive.' },
};
