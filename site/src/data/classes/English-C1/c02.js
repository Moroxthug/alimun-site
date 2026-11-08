// English C1, class 2 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u1:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c02',
  focus: 'By the end every student chooses the aspect for what it adds rather than by rule: the perfect to look back from a point in time, the continuous for an activity in progress or unfinished, the perfect continuous for an activity filling time up to a point. They use the same choices in the past and the future (*I’d been meaning to*, *I’ll have finished*, *I’ll have been living*). The speaking goal: talk about long projects and intentions with control.',
  tips: [
    'Frame the lesson as two ideas added to any time: the perfect looks back, the continuous shows something in progress. Students who see this stop memorising twelve tenses and start choosing.',
    'Result or activity is the key contrast: *I’ve read your report* (I can discuss it) and *I’ve been reading your report* (I have spent time on it, perhaps not finished).',
    'The future perfect continuous sounds advanced but students need a reason to use it. Anniversaries and milestones give one: *By June I’ll have been working here for ten years.*',
    'Learners often say *I am here since May* or *I know her for years*. Correct every time; at C1 these slips are noticed more than the advanced forms are admired.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What have you been meaning to do for ages and still haven’t done?* Write two answers on the board and point out *have been meaning to*.' },
    { min: 12, title: 'What each aspect adds', md: 'Show board page 1. Students choose the forms, then explain in their own words what each choice adds.' },
    { min: 10, title: 'Looking back from the future', md: 'Show board page 2. Students fix the mistakes, then each makes one sentence about a milestone of their own with *By… I’ll have…*' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 4. Students complete the sentences alone, count their words, then compare. Reveal the answers.' },
    { min: 5, title: 'Close', md: 'Each student says one thing they have been doing lately and one thing they will have done by the end of the month. Set the homework.' },
  ],
  board: [
    { title: 'What each aspect adds', blocks: [
      { t: 'table', caption: 'One action, four views', explain: ['head', 'col1'], head: ['Aspect', 'What it adds', 'Example'], rows: [
        ['simple', 'the whole event as a fact', 'He ran the Berlin marathon in 2019.'],
        ['perfect', 'a look back; the result counts now', 'He has run four marathons.'],
        ['continuous', 'in progress, temporary or unfinished', 'He was running when he hurt his knee.'],
        ['perfect continuous', 'an activity filling time up to a point', 'He’s been running since dawn, which is why he’s soaked.'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the form that says what the speaker means.', items: [
        { q: 'I ___ your proposal, and I have two questions about the budget.', o: ['have read', 'have been reading', 'was reading'], why: 'The reading is finished and the result matters now: the perfect simple.' },
        { q: 'Sorry about the mess. We ___ the spare room all weekend.', o: ['have been painting', 'have painted', 'painted'], why: 'An activity filling the time up to now, with visible effects: the perfect continuous.' },
        { q: 'By the time the ambulance arrived, she ___ on the floor for over an hour.', o: ['had been lying', 'was lying', 'has been lying'], why: 'Duration up to a point in the past: the past perfect continuous.' },
        { q: 'She ___ in Lisbon this term while her flat is being renovated.', o: ['is staying', 'stays', 'has stayed'], why: 'A temporary situation: the continuous.' },
      ] },
    ] },
    { title: 'Looking back from the future', blocks: [
      { t: 'examples', items: [
        { s: 'By the end of the year we’ll **have opened** three new branches.', n: 'The future perfect: a result completed before a future point.' },
        { s: 'In June I’ll **have been teaching** here for twenty years.', n: 'The future perfect continuous: the length of an activity at a future point.' },
        { s: 'I’d **been meaning to** ring you, but the week got away from me.', n: 'An intention that lasted up to a past point, and did not happen.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'I [am working] for this company since 2018.', a: ['have been working', '’ve been working', 'have worked', '’ve worked'], why: 'From the past until now: the present perfect, not the present.' },
        { s: 'By next summer they [will finish] the new stadium.', a: ['will have finished', '’ll have finished'], why: 'Completed before a future point: the future perfect.' },
        { s: 'We [have been knowing] each other since university.', a: ['have known', '’ve known'], why: '*Know* is a state, not an activity: no continuous.' },
        { s: 'When I got to the station, the last train [left].', a: ['had left', 'had already left'], why: 'The train left first: the past perfect looks back from *got to the station*.' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first, using the word given. Use between three and six words, including the word given.', items: [
        { q: 'The last time I spoke to my brother was three years ago.', cue: 'spoken', gap: 'I ___ for three years.', a: ['haven’t spoken to my brother', 'have not spoken to my brother', 'haven’t spoken with my brother', 'have not spoken with my brother'], why: '*The last time… was… ago* becomes the present perfect with *for*.' },
        { q: 'The builders started the extension in March and they are still working on it.', cue: 'been', gap: 'The builders ___ the extension since March.', a: ['have been working on', '’ve been working on', 'have been building'], why: 'An activity from March until now: the present perfect continuous with *since*.' },
        { q: 'The report will be ready before the manager gets back on Friday.', cue: 'have', gap: 'We ___ the report by the time the manager gets back on Friday.', a: ['will have finished', '’ll have finished', 'will have completed', 'will have written'], why: 'Completed before a future point: the future perfect.' },
        { q: 'Ana started teaching at the school twenty years ago next month.', cue: 'will', gap: 'Next month Ana ___ at the school for twenty years.', a: ['will have been teaching'], why: 'The length of an activity at a future point: the future perfect continuous.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In **Part 4** write **three to six words**, including the word given, which you must not change. Contractions count as two words. Each answer has two marks, so a half-right answer still earns one: never leave a gap empty.' },
    ] },
  ],
  activities: {
    one: { title: 'Milestones', md: 'The student draws a quick timeline of a long project (a job, a home, a skill). Ask *How long have you been…? What have you achieved so far? What will you have done by next year? How long will you have been… by then?* Note every aspect choice and go over three at the end.' },
    small: { title: 'What’s the story?', md: 'Each student describes a scene with visible effects (*There are boxes everywhere and I can’t find my kettle*). The others guess what has been happening, using the perfect continuous, and what has happened, using the perfect simple. A point for each correct guess in the right form.' },
    group: { title: 'Class milestones', md: 'In breakout rooms of three, students find out how long each person has been doing three things (living where they live, working or studying, learning English) and work out what each will have been doing for how long at the end of the course. Each room reports two sentences with the future perfect continuous.' },
  },
  homework: { book: 'u1:p1', md: 'Finish lesson 1 of unit 1 if needed, then do lesson 2 (She’s being difficult). Write about 120 words on a long project in your life: what you have done, what you have been doing and what you will have done by the end of the year.' },
};
