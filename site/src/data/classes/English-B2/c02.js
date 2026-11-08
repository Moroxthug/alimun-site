// English B2, class 2 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u1:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c02',
  focus: 'By the end every student chooses confidently between the present perfect simple and continuous: the simple for results and how many, the continuous for duration, activity and visible effects. The speaking goal: talk about recent activities and achievements naturally (*I’ve been training for months and I’ve finally run 10 km*).',
  tips: [
    'The key contrast: *how long* (continuous) versus *how many / what result* (simple). *I’ve been writing emails all morning* / *I’ve written twenty emails*.',
    'State verbs (know, like, believe, own) do not take the continuous: *I’ve known her for years*, not *I’ve been knowing*.',
    'Learners whose language uses a present tense for unfinished time say *I am here since May*. Correct it every time: *I’ve been here since May*.',
    'Visible effects of recent activity sound natural with the continuous: *You’re out of breath. Have you been running?*',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What have you been doing lately? What have you achieved this month?* Write two answers on the board, one simple and one continuous.' },
    { min: 12, title: 'Result or duration', md: 'Show board page 1. Students choose the form, then explain why in their own words.' },
    { min: 10, title: 'State verbs and evidence', md: 'Show board page 2. Students fix the mistakes, then make one sentence about something they can see right now (*It’s been raining*).' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: B2 First Use of English Part 4. Students rewrite the sentences alone, then compare. Reveal the answers.' },
    { min: 5, title: 'Close', md: 'Each student says one thing they have been doing and one thing they have done this week. Set the homework.' },
  ],
  board: [
    { title: 'Result or duration?', blocks: [
      { t: 'table', caption: 'Simple or continuous', explain: ['head', 'col2'], head: ['Form', 'Example', 'Focus'], rows: [
        ['present perfect simple', 'I’ve read three of her novels.', 'the result, how many'],
        ['present perfect continuous', 'I’ve been reading all afternoon.', 'the activity, how long'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the better form.', items: [
        { q: 'She ___ for the company since 2019.', o: ['has been working', 'has worked twice'], why: 'Duration up to now: the continuous is natural.' },
        { q: 'I ___ four job applications this week.', o: ['have sent', 'have been sending'], why: 'A number of completed actions: the simple.' },
        { q: 'Your eyes are red. ___ crying?', o: ['Have you been', 'Have you'], why: 'A visible effect of a recent activity: the continuous.' },
      ] },
    ] },
    { title: 'Common mistakes', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'I [have been knowing] him since school.', a: ['have known', '’ve known'], why: '*know* is a state verb: no continuous.' },
        { s: 'We [are living] here since 2020.', a: ['have been living', 'have lived'], why: 'From the past until now: the present perfect.' },
        { s: 'He [has been finishing] the report, so we can send it now.', a: ['has finished'], why: 'A finished result: the simple.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the B2 First exam (Reading and Use of English, Part 4): complete the second sentence so it means the same as the first, using the word given.', items: [
        { q: 'I started learning the guitar two years ago.', cue: 'BEEN', a: ['I have been learning the guitar for two years.', 'I’ve been learning the guitar for two years.'], why: 'Started in the past and still going: present perfect continuous with *for*.' },
        { q: 'This is the first time I have eaten sushi.', cue: 'NEVER', a: ['I have never eaten sushi before.', 'I’ve never eaten sushi before.'], why: '*the first time* becomes *never… before*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 4 you must use the key word without changing it, and write between two and five words. Contractions count as two words.' },
    ] },
  ],
  activities: {
    one: { title: 'My progress report', md: 'The student talks about a long-term project (a skill, a job, a home). Prompt with *How long have you been…? How much have you…? What have you achieved so far?* Note every tense choice and go over three at the end.' },
    small: { title: 'Find the reason', md: 'Each student describes a situation with visible effects (*I’m covered in paint*). The others guess with the continuous: *Have you been decorating?* Score a point for a correct guess in the right tense.' },
    group: { title: 'Class survey', md: 'Breakout rooms of three ask each other: *How long have you been…?* (living here, learning English, doing your job) and *How many… have you…?* (countries visited, books read this year). Each room reports two facts in the right tense.' },
  },
  homework: { book: 'u1:p1', md: 'Finish lesson 1 of unit 1 if needed, then do lesson 2 (Kind, unkind, disloyal). Write six sentences about your year so far: three with the simple and three with the continuous.' },
};
