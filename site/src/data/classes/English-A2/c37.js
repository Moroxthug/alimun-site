// English A2, class 37 (docs/LESSONS_PLAN.md). Builds on book lesson u7:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c37',
  focus: 'By the end of the class every student can tell the story of a short trip using the past continuous for the background (*I was walking*, *it was raining*) and the past simple for the event that interrupted it (*when I saw*, *when the bus stopped*). They can join the two parts with **when** and **while** and tell a story of four or five sentences aloud.',
  tips: [
    'Students often use the past continuous for every past action: *I was going to Rome last year.* Show the timeline: a long action (the line) and a short one (the point). Only the line takes *was/were + -ing*.',
    'German, French and Italian speakers may not have a separate form for the background. Use real stories from the class: the background first, then *when* + the event.',
    'Check *was* and *were*: *they was walking* is very common. Drill *I/he/she/it was*, *you/we/they were*.',
    'Verbs like *know*, *want* and *like* are not normally used in the continuous: *I was knowing* is wrong. Mention it briefly if it comes up.',
    'Give students time to plan their story. A short silence before speaking is useful at A2.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Tell a short true story: *Last summer I was waiting for a train in Milan when my phone rang.* Ask: *What was I doing? What happened?* Write the two parts on the board.' },
    { min: 10, title: 'The line and the point', md: 'Show board page 1. Draw a long line (was walking) and a short point (saw). Students complete the exercise; check *was* and *were*.' },
    { min: 10, title: 'When and while', md: 'Show board page 2. Show that *while* goes with the long action and *when* usually with the short one. Students fix the mistakes on the board.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Put the story in order', md: 'Show board page 3. Students order the sentences of a travel story, then retell it from memory.' },
    { min: 5, title: 'Exam corner', md: 'Show board page 4. Read the short story aloud; students choose the right answers.' },
    { min: 5, title: 'Close', md: 'Each student says one sentence with *I was … when …* about a trip. Set the homework.' },
  ],
  board: [
    { title: 'What was happening?', blocks: [
      { t: 'text', md: 'Use the **past continuous** (*was/were* + verb-*ing*) for the background: an action that was in progress. Use the **past simple** for the short event that happened in the middle of it: *I **was walking** to the hotel when it **started** to rain.*' },
      { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
        { q: 'We ___ breakfast when the taxi arrived.', o: ['were having', 'was having', 'had having'], why: 'The background, with *we*: *were having*.' },
        { q: 'I was sleeping when the plane ___.', o: ['landed', 'was landing', 'lands'], why: 'The short event: past simple.' },
        { q: 'It ___ when we left the museum.', o: ['was raining', 'were raining', 'rained raining'], why: 'The background, with *it*: *was raining*.' },
        { q: 'What ___ you doing at eight o’clock yesterday?', o: ['were', 'was', 'did'], why: 'A question in the past continuous with *you*: *were you doing*.' },
      ] },
    ] },
    { title: 'When and while', blocks: [
      { t: 'examples', items: [
        { s: '**While** I was waiting for the bus, I met an old friend.', n: '*while* + the long action.' },
        { s: 'I was waiting for the bus **when** I met an old friend.', n: '*when* + the short event.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'They [was] walking in the old town when they got lost.', a: ['were'], why: 'With *they*: *were*.' },
        { s: 'I [was finding] a wallet while I was walking on the beach.', a: ['found'], why: 'Finding is the short event: past simple.' },
        { s: 'She was reading [when] the train was going through the tunnel.', a: ['while'], why: 'Two long actions at the same time: *while*.' },
      ] },
    ] },
    { title: 'A story from a trip', blocks: [
      { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
        { a: 'We were driving to the coast when the car stopped.', why: 'Background first, then *when* + the event.' },
        { a: 'While I was taking a photo, my hat fell into the river.', why: '*While* + the long action, then the event.' },
        { a: 'What were you doing when the phone rang?', why: 'Question word, *were*, subject, verb-*ing*.' },
      ] },
    ] },
    { title: 'Exam corner: a short story', blocks: [
      { t: 'reading', title: 'A surprise in Paris', md: 'Last spring Lucia was visiting Paris with her sister. On the second day they were looking at the paintings in a small museum when Lucia heard her name. It was Tom, a friend from school. He was working in Paris for a month. They all had lunch together in a café near the river.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: choose the right answer.', items: [
        { q: 'Where were Lucia and her sister when they met Tom?', o: ['in a museum', 'in a café', 'at the station'], why: '*They were looking at the paintings in a small museum.*' },
        { q: 'Why was Tom in Paris?', o: ['He was working there.', 'He was on holiday.', 'He was visiting his sister.'], why: '*He was working in Paris for a month.*' },
        { q: 'What did they do after they met?', o: ['They had lunch.', 'They went home.', 'They visited another museum.'], why: '*They all had lunch together.*' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Story in four pictures', md: 'Describe four moments of a trip in a few words each (a train, rain, a lost ticket, a kind stranger). The student tells the story using *was/were + -ing* for the background and the past simple for the events. Then swap: you tell a story with three mistakes and the student corrects them.' },
    small: { title: 'Chain story', md: 'Start a story: *Last summer I was walking in Lisbon when…* Each student adds one sentence, alternating background (*was/were + -ing*) and event (past simple). After two rounds, the group writes the story in the chat and checks the verbs together.' },
    group: { title: 'Alibi', md: 'In breakout rooms of three, students prepare an alibi: *What were you doing yesterday between 7 and 9?* Back in the main room, the teacher asks each group member separately and the class listens for differences (*You said you were having dinner, but she said you were watching a film!*). Correct *was/were* at the end.' },
  },
  homework: { book: 'u7:p2', md: 'Finish book lesson 2 of unit 7, including the speaking task. Then write a short story of 40 to 50 words about something that happened on a trip, using *when* or *while* at least twice.' },
};
