// English B2, class 21 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u5:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c21',
  focus: 'By the end of the class every student can use the second and third conditionals with confidence and choose between them by thinking about time and reality: an unreal present or future (*If I had more time, I would travel*) or an unreal past (*If I had known, I would have come*). Accuracy point: never *would* in the *if* clause.',
  tips: [
    'The most common B2 mistake is *If I would have known…*. Draw a line down the middle of the board: **if** clause on the left (no *would*), result on the right (*would*). Point to the left side every time.',
    'Students know the second conditional from B1 but often use it for real possibilities. Ask: *Is it likely?* If yes, it is the first conditional.',
    'Contractions confuse listening: *I’d* can be *I would* or *I had*. Show *If I’d known, I’d have come* and ask what each *’d* means.',
    'Push beyond *would*: *could* and *might* make conditional sentences sound more natural and more B2 (*If we’d left earlier, we might have caught it*).',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask two questions: *If you could live anywhere, where would you live?* and *If you hadn’t come to class today, what would you have done?* Each student answers one.' },
    { min: 12, title: 'Two unreal conditionals', md: 'Show board page 1. Compare the two forms and their time. Ask students to change three second conditionals into the past.' },
    { min: 10, title: 'Practice', md: 'Show board page 2. Students complete the sentences alone, then fix the mistakes together.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: key word transformations in the format of B2 First Reading and Use of English Part 4, all built on conditionals. Students work alone, then check word counts together.' },
    { min: 5, title: 'Close', md: 'Each student finishes the sentence *If I had known English ten years ago, …* Set the homework.' },
  ],
  board: [
    { title: 'Two unreal conditionals', blocks: [
      { t: 'table', caption: 'Unreal now and unreal past', explain: ['head', 'col1'], head: ['Type', 'Time and meaning', 'Example'], rows: [
        ['second', 'unreal or unlikely, now or in the future', 'If I had more time, I would learn to paint.'],
        ['third', 'unreal past: it did not happen', 'If I had left earlier, I would have caught the train.'],
        ['second + could / might', 'possible result', 'If you asked her, she might help.'],
        ['third + could / might', 'possible past result', 'If we had booked, we could have sat together.'],
      ] },
      { t: 'text', md: 'In careful English, use **were** for every person in the second conditional: *If I **were** you, …* The **if** clause never takes *would*.' },
    ] },
    { title: 'Practice', blocks: [
      { t: 'ex', kind: 'gap', h: 'Complete with the right form of the verb in brackets.', items: [
        { q: 'If she ___ (know) the answer, she would tell us. (She does not know it.)', a: ['knew'], why: 'Unreal present: past simple in the *if* clause.' },
        { q: 'If they had trained harder, they ___ (win) the final.', a: ['would have won', '’d have won', 'could have won', 'might have won'], why: 'Unreal past result: *would have* + past participle.' },
        { q: 'If I ___ (not / miss) the bus, I wouldn’t have been late.', a: ['hadn’t missed', 'had not missed'], why: 'Unreal past: past perfect.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Each sentence has one mistake. Find it and fix it.', items: [
        { s: 'If I [would have known], I would have come.', a: ['had known'], why: 'No *would* in the *if* clause.' },
        { s: 'If he [studied] more last year, he would have passed.', a: ['had studied'], why: 'A past situation: past perfect.' },
        { s: 'If I were rich, I [would have bought] a house by the sea now.', a: ['would buy'], why: '*now* is present: *would* + infinitive.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 4', blocks: [
      { t: 'text', md: 'In the format of B2 First Reading and Use of English Part 4: complete the second sentence with two to five words, including the word given.' },
      { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with the key word.', items: [
        { q: 'I didn’t go to the party because I was ill. (If I … ill, I would have gone to the party.)', cue: 'BEEN', a: ['If I hadn’t been ill, I would have gone to the party.', 'If I had not been ill, I would have gone to the party.'], why: 'Unreal past: *hadn’t been*.' },
        { q: 'I don’t have a car, so I can’t drive you home. (If … a car, I could drive you home.)', cue: 'HAD', a: ['If I had a car, I could drive you home.'], why: 'Unreal present: *If I had*.' },
        { q: 'We missed the start because the traffic was bad. (If the traffic had been better, … the start.)', cue: 'WOULD', a: ['If the traffic had been better, we would not have missed the start.', 'If the traffic had been better, we wouldn’t have missed the start.'], why: '*wouldn’t have missed*.' },
      ] },
      { t: 'tip', md: 'When the first sentence gives a **reason** (*because*, *so*), Part 4 often wants a conditional. Turn the fact into its opposite: *I was ill* becomes *If I hadn’t been ill*.' },
    ] },
  ],
  activities: {
    one: { title: 'Sliding doors', md: 'Ask the student to tell you about one important choice they made in the past. Then ask five *What if…?* questions about it (*If you hadn’t moved, where would you be now? What would you have done?*). The student answers in full sentences. Swap: the student asks you about a choice of yours.' },
    small: { title: 'Chain of consequences', md: 'Start a chain: *If I hadn’t missed the bus this morning, …* Each student adds a consequence that becomes the next *if* clause (*…I would have arrived early. If I had arrived early, …*). Keep it going for three rounds. Then correct the forms from the chain together.' },
    group: { title: 'Moral dilemmas', md: 'Breakout rooms of three or four. Give each room two dilemmas in the chat (*You find a wallet with 500 euros. Your best friend copies in an exam*). Students say what they would do and what they would have done at fifteen. Back together, each room shares its most surprising answer.' },
  },
  homework: { book: 'u5:p1', md: 'Finish book lesson 1 of unit 5 (If things were different), including the speaking task. Then write six sentences: three about what you would do if your life were different now, and three about what would have happened if one past event had been different.' },
};
