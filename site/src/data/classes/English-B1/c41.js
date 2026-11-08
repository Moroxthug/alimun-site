// English B1, class 41 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u9:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c41',
  focus: 'By the end of the class every student can tell a story with two layers: the **background** with the past continuous (*It was raining and people were hurrying home*) and the **events** with the past simple (*Suddenly a man stopped me*), joining them with **when** and **while**. Each student tells a short true or invented story of about one minute that starts with a scene and then something happens.',
  tips: [
    'The key idea is *long action interrupted by a short one*: draw a long line for the past continuous and a cross for the past simple. Students remember the picture better than the rule.',
    'Common mistake: past continuous for every past action (*I was going to the shop and I was buying bread*). Ask *Was it in progress, or did it just happen?*',
    'Verbs like *know, want, like* are not used in the continuous: *I was knowing* is wrong. Mention it when it comes up, not as a list.',
    '*when* is usually followed by the short action, *while* by the long one: *I was cooking when the phone rang* / *While I was cooking, the phone rang*.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What were you doing at eight o’clock last night?* Each student answers with *I was…-ing*.' },
    { min: 10, title: 'Background and events', md: 'Show board page 1. Go through the table and the picture idea, then students do the exercise.' },
    { min: 10, title: 'When and while', md: 'Show board page 2. Students join the sentences, then fix the mistakes.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: B1 Preliminary Writing part 2 story openings. Students choose and then continue a story in the chat.' },
    { min: 5, title: 'Story words', md: 'Show board page 4. Students sort the words for setting the scene and for sudden events.' },
    { min: 5, title: 'Close', md: 'Two students tell their story to the class. Set the homework.' },
  ],
  board: [
    { title: 'Background and events', blocks: [
      { t: 'table', caption: 'Two layers of a story', explain: ['head', 'col0', 'col1'], head: ['Layer', 'Form', 'Example'], rows: [
        ['Background: what was in progress', 'past continuous', 'The sun was shining and children were playing in the park.'],
        ['Events: what happened', 'past simple', 'A dog ran across the road and a car stopped.'],
        ['Long action interrupted', 'past continuous + past simple', 'I was reading when the lights went out.'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
        { q: 'I ___ dinner when my brother arrived.', o: ['was cooking', 'cooked', 'am cooking'], why: 'A long action in progress, interrupted: past continuous.' },
        { q: 'While we were walking in the mountains, it suddenly ___ to snow.', o: ['started', 'was starting', 'starts'], why: 'A short event that interrupts: past simple.' },
        { q: 'It was a beautiful morning. Birds ___ in the trees.', o: ['were singing', 'sang', 'sing'], why: 'Background of the scene: past continuous.' },
        { q: 'She opened the door, ___ the letter and smiled.', o: ['read', 'was reading', 'reads'], why: 'A sequence of events: past simple.' },
      ] },
    ] },
    { title: 'When and while', blocks: [
      { t: 'ex', kind: 'transform', h: 'Join the sentences. Start with the words given.', items: [
        { q: 'I was waiting for the bus. I saw an old friend.', cue: 'While', a: ['While I was waiting for the bus, I saw an old friend.'], why: '*While* + the long action.' },
        { q: 'We were having lunch. The fire alarm went off.', cue: 'We were having lunch', a: ['We were having lunch when the fire alarm went off.'], why: '*when* + the short event.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'I [was knowing] the answer, but I didn’t say anything.', a: ['knew'], why: '*know* is not used in the continuous.' },
        { s: 'When I arrived at the party, everyone [danced].', a: ['was dancing'], why: 'The background in progress when I arrived: past continuous.' },
      ] },
    ] },
    { title: 'Exam corner: Writing part 2 (story)', blocks: [
      { t: 'text', md: 'In the format of B1 Preliminary Writing part 2. Your English teacher has asked you to write a story. It must begin with this sentence:\n\n*It was raining hard when Maria left the office.*\n\nWrite about 100 words.' },
      { t: 'ex', kind: 'choice', h: 'Which next sentence is best?', items: [
        { q: 'After the first sentence:', o: ['She was running to the bus stop when she heard someone call her name.', 'She runs to the bus.', 'It was raining.'], why: 'It continues the scene with the past continuous and adds an event.' },
        { q: 'A good middle sentence:', o: ['To her surprise, it was a man she hadn’t seen for ten years.', 'Then something.', 'He is her friend.'], why: 'A surprising event keeps the reader interested.' },
      ] },
      { t: 'tip', md: 'In Writing part 2 the story must start with the given sentence and keep to it. Use the past continuous for the scene, the past simple for the events, and an ending that surprises or closes the story.' },
    ] },
    { title: 'Story words', blocks: [
      { t: 'ex', kind: 'sort', h: 'Setting the scene or a sudden event?', groups: ['setting the scene', 'a sudden event'], explain: ['groups'], items: [
        { s: 'It was a cold winter evening.', g: 0, why: 'It describes the time and atmosphere.' },
        { s: 'Suddenly, the lights went out.', g: 1, why: '*Suddenly* introduces an event.' },
        { s: 'People were hurrying home.', g: 0, why: 'Background in progress.' },
        { s: 'All of a sudden, someone screamed.', g: 1, why: '*All of a sudden* introduces an event.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Tell me a story', md: 'The student tells a true story (a strange meeting, a travel problem, a funny moment) for at least one minute, starting with a scene in the past continuous. You interrupt with *What was happening around you?* to get more background. Then you tell a story with three mistakes in the tenses and the student finds them.' },
    small: { title: 'Story chain', md: 'Give the first sentence: *It was a dark and windy night.* Each student adds one sentence, alternating background (past continuous) and events (past simple). After eight sentences, the group finishes the story together. Then start a new chain with a happier first sentence.' },
    group: { title: 'Alibi', md: 'Tell the class that a cake disappeared from the office kitchen yesterday between 3 and 4 p.m. In breakout rooms of three, each student prepares an alibi: *At three I was talking to my boss when…*. Bring everyone back: the class asks questions and decides who is lying.' },
  },
  homework: { book: 'u9:p1', md: 'Finish book lesson 1 of unit 9 (I was walking home when…), including the speaking task. Then write the story from the Exam corner, about 100 words, starting with *It was raining hard when Maria left the office.*' },
};
