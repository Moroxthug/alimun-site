// English B1, class 37 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u8:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c37',
  focus: 'By the end of the class every student can talk about hopes and plans with the right verb patterns: **hope to**, **plan to**, **would like to**, **intend to** and **look forward to + -ing**. Each student describes three plans for this year and one thing they are looking forward to, and writes a short email about their plans in the format of B1 Preliminary Writing part 1.',
  tips: [
    '*look forward to* is followed by **-ing** or a noun: *I’m looking forward to seeing you*. Expect *looking forward to see* and correct it every time; it is one of the most famous mistakes in English.',
    'After *hope*, students sometimes use *will* incorrectly (*I hope I will can come*). Keep it simple: **hope to** + verb, or **hope (that)** + a full sentence.',
    '*would like to* is more polite than *want to*. In emails, encourage *I’d like to* and *I’m planning to*.',
    'Spend real time on the email task: B1 Preliminary Writing part 1 rewards answering every note in the prompt, which students often forget.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What are you looking forward to this month?* One sentence each. Write *looking forward to* + -ing on the board.' },
    { min: 10, title: 'Hope to, plan to…', md: 'Show board page 1. Go through the patterns, then students do the exercise.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 15, title: 'Exam corner', md: 'Show board page 2: B1 Preliminary Writing part 1. Read the email and notes together, plan the answer, and students write their reply in the chat (about 100 words). Look at one or two together.' },
    { min: 10, title: 'Fix the mistakes', md: 'Show board page 3. Then use mistakes from the students’ emails.' },
    { min: 5, title: 'Close', md: 'Each student says one plan with *I’m planning to* and one hope with *I hope to*. Set the homework.' },
  ],
  board: [
    { title: 'Hopes and plans', blocks: [
      { t: 'table', caption: 'Verb patterns', explain: ['head', 'col2'], head: ['Pattern', 'Example', 'Meaning'], rows: [
        ['hope to + verb', 'I hope to pass the exam.', 'you want it and think it’s possible'],
        ['plan to / intend to + verb', 'I’m planning to move in May.', 'you have decided'],
        ['would like to + verb', 'I’d like to learn Spanish.', 'a polite wish'],
        ['look forward to + -ing / noun', 'I’m looking forward to seeing you.', 'you are happy about something coming'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
        { q: 'I’m really looking forward to ___ my family at Christmas.', o: ['seeing', 'see', 'to see'], why: '*look forward to* + -ing.' },
        { q: 'We’re planning ___ a small party for her birthday.', o: ['to have', 'having', 'have'], why: '*plan to* + verb.' },
        { q: 'I hope ___ my driving test this summer.', o: ['to pass', 'passing', 'pass'], why: '*hope to* + verb.' },
        { q: 'I’d like ___ more about the course, please.', o: ['to know', 'knowing', 'know'], why: '*would like to* + verb.' },
      ] },
    ] },
    { title: 'Exam corner: Writing part 1', blocks: [
      { t: 'text', md: 'In the format of B1 Preliminary Writing part 1. Read this email from your English friend Sam and the notes you have made. Write your reply in about 100 words.\n\n*Hi! I’m coming to your city for a week in July (**Great!**). What are your plans for the summer? (**Tell Sam**) Could we do something together while I’m there? (**Suggest…**) Is there anything I should bring? (**Explain**) Sam*' },
      { t: 'ex', kind: 'choice', h: 'Which sentence answers each note best?', items: [
        { q: '**Great!**', o: ['It’s great news that you’re coming. I’m really looking forward to seeing you!', 'OK.', 'I am fine, thank you.'], why: 'A warm reaction with a full sentence.' },
        { q: '**Tell Sam**', o: ['I’m planning to work in the mornings, but I hope to go to the beach every weekend.', 'Summer is hot.', 'I like plans.'], why: 'It answers the question with plan and hope patterns.' },
        { q: '**Suggest…**', o: ['Why don’t we go on a boat trip on the river? You’d love it.', 'We could.', 'Something.'], why: 'A clear suggestion with a reason.' },
      ] },
      { t: 'tip', md: 'In Writing part 1 there are four notes. Answer **all four**, start and end like an email to a friend (*Hi Sam*, *See you soon*), and write about 100 words.' },
    ] },
    { title: 'Fix the mistakes', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'I’m looking forward to [hear] from you.', a: ['hearing'], why: '*look forward to* + -ing.' },
        { s: 'We plan [going] to Greece next year.', a: ['to go'], why: '*plan to* + verb.' },
        { s: 'I hope [I will can] visit you soon.', a: ['to', 'I can', 'I will'], why: '*hope to* + verb, or *hope I can*. Never *will can*.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'This year', md: 'The student talks about three plans for this year (*I’m planning to…*), two hopes (*I hope to…*) and one thing they are looking forward to. For each, ask *Why?* and *What will you need to do?*. Then help the student improve their Writing part 1 email together, sentence by sentence.' },
    small: { title: 'Plans survey', md: 'Each student asks every other student the same question: *What are you planning to do this summer?* and *What are you looking forward to?*. They write short notes in the chat. Then each student reports: *Three of us are planning to travel, and Ana is looking forward to starting a new job.*' },
    group: { title: 'Peer emails', md: 'After the Exam corner, students swap their emails in breakout rooms of three. Each reader checks: are all four notes answered? Is there a good start and end? Is it about 100 words? They give one improvement each. Bring everyone back and read one strong email aloud.' },
  },
  homework: { book: 'u8:p3', md: 'Finish book lesson 3 of unit 8 (Hopes and plans), including the speaking task. Then write the final version of your email to Sam, about 100 words, answering all four notes.' },
};
