// English B1, class 42 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u9:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c42',
  focus: 'By the end of the class every student can use the **past perfect** (*had + past participle*) to show that one past action happened before another (*When I arrived, the film had started*), and knows when it is needed and when the past simple is enough. Each student tells a short story with at least two moments where they go back in time.',
  tips: [
    'Draw a timeline with two past points. The past perfect is the earlier one: *I got to the station (2). The train had left (1).* Students who see it rarely forget it.',
    'Compare two sentences: *When I arrived, the film started* (I saw the start) and *When I arrived, the film had started* (I missed the start). Ask *Did I see the beginning?*',
    'Do not let students use the past perfect for everything in the past. If the order is clear (*first, then, after*), the past simple is enough.',
    'Common form errors: *had went*, *had saw*. Revise irregular past participles quickly at the start if your class needs it.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Have you ever arrived somewhere too late? What had already happened?* Two or three students answer.' },
    { min: 10, title: 'Before the past', md: 'Show board page 1. Draw the timeline, go through the table, then students do the exercise.' },
    { min: 10, title: 'Did I see it?', md: 'Show board page 2. Students choose the meaning, then fix the mistakes.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: B1 Preliminary Listening part 2 style. Read each short dialogue aloud twice; students choose.' },
    { min: 5, title: 'Participles', md: 'Show board page 4: irregular past participles, matched quickly.' },
    { min: 5, title: 'Close', md: 'Each student finishes: *By the time I got home yesterday, …*. Set the homework.' },
  ],
  board: [
    { title: 'Before the past', blocks: [
      { t: 'table', caption: 'The past perfect', explain: ['head', 'col0'], head: ['', 'Form', 'Example'], rows: [
        ['Positive', 'had + past participle', 'The film had started when we arrived.'],
        ['Negative', 'hadn’t + past participle', 'I hadn’t eaten all day, so I was hungry.'],
        ['Question', 'Had + subject + past participle?', 'Had you met him before the party?'],
      ] },
      { t: 'ex', kind: 'gap', h: 'Write the past perfect of the verb in brackets.', items: [
        { q: 'When we got to the station, the train ___ (leave).', a: ['had left', '’d left'], why: 'The train left before we arrived: *had left*.' },
        { q: 'She was nervous because she ___ (never / fly) before.', a: ['had never flown', '’d never flown'], why: 'Before that moment: *had never flown*.' },
        { q: 'I didn’t recognise him because he ___ (grow) a beard.', a: ['had grown', '’d grown'], why: 'The beard came first: *had grown*.' },
        { q: 'They were hungry because they ___ (not eat) since breakfast.', a: ['hadn’t eaten', 'had not eaten'], why: 'Negative past perfect: *hadn’t* + past participle.' },
      ] },
    ] },
    { title: 'Did I see it?', blocks: [
      { t: 'ex', kind: 'choice', h: 'What does each sentence mean?', items: [
        { q: 'When I got to the party, Anna left.', o: ['I saw Anna leave.', 'Anna left before I arrived.', 'Anna never came.'], why: 'Past simple: one action right after the other, so I saw it.' },
        { q: 'When I got to the party, Anna had left.', o: ['Anna left before I arrived.', 'I saw Anna leave.', 'Anna arrived after me.'], why: 'Past perfect: she left earlier, so I missed her.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'By the time the police arrived, the thief [had went].', a: ['had gone'], why: 'Past participle of *go*: *gone*.' },
        { s: 'I was tired because I [didn’t sleep] the night before.', a: ['hadn’t slept'], why: 'Earlier than *was tired*: past perfect.' },
      ] },
    ] },
    { title: 'Exam corner: Listening part 2', blocks: [
      { t: 'text', md: 'In the format of B1 Preliminary Listening part 2: short conversations; answer a question about each. Your teacher reads them twice.\n\n**One.** *A: How was the concert? B: Terrible. By the time we found a parking space, the band had already played their best song. A: Oh no! B: But the last part was good.*\n\n**Two.** *A: Did you enjoy the book? B: I’d seen the film before I read it, so I knew the ending. That spoiled it a bit.*' },
      { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
        { q: 'One: Why was the speaker unhappy?', o: ['They missed the band’s best song.', 'The band played badly all night.', 'They couldn’t find the concert.'], why: '*the band had already played their best song* before they arrived.' },
        { q: 'Two: Why didn’t she enjoy the book much?', o: ['She already knew how it ended.', 'It was too long.', 'She didn’t like the film.'], why: '*I’d seen the film before… so I knew the ending.*' },
      ] },
      { t: 'tip', md: 'In Listening part 2, the answer often depends on the order of events. Listen for **had**, **already**, **before** and **by the time**.' },
    ] },
    { title: 'Participles', blocks: [
      { t: 'ex', kind: 'match', h: 'Match the verb and its past participle.', pairs: [
        ['go', 'gone'],
        ['see', 'seen'],
        ['eat', 'eaten'],
        ['forget', 'forgotten'],
        ['leave', 'left'],
        ['write', 'written'],
      ] },
    ] },
  ],
  activities: {
    one: { title: 'A day that went wrong', md: 'The student tells you about a day when they arrived too late or found something unexpected, with at least two past perfect sentences (*When I got home, I realised I had left my keys at work*). Ask *What had happened before?* to push for more. Then you tell a mixed-up story and the student puts the events in order.' },
    small: { title: 'Too late!', md: 'Give each pair a situation in the chat (*You arrived at the airport…*, *You got to the cinema…*). Pairs say what had already happened (*The plane had taken off, the gates had closed…*) as many ways as possible in two minutes. Then each pair invents a full short story with one of them and tells it to the group.' },
    group: { title: 'Mystery', md: 'Tell the class: *When Mr Hill came home, the window was open, the cat was outside and there was a cake on the table.* In breakout rooms of three, rooms explain what had happened before he came home, with the past perfect. Bring everyone back: each room tells its version; the class votes for the best.' },
  },
  homework: { book: 'u9:p2', md: 'Finish book lesson 2 of unit 9 (When I arrived, the film had started), including the speaking task. Then write 70 to 90 words about a time you arrived somewhere and something had already happened, with at least three past perfect verbs.' },
};
