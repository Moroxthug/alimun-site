// English B1, class 74 (docs/LESSONS_PLAN.md). Builds on book lesson u15:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c74',
  focus: 'By the end of the class every student knows the main words for sport and fitness (*play*, *go*, *do* with sports; *warm up*, *stretch*, *train*, *injure*) and can give clear spoken instructions in order with the imperative and sequencing words (*first*, *then*, *after that*, *finally*, *make sure you*).',
  tips: [
    'The classic mistake is the verb with the sport: *play* for ball games, *go* for -ing activities, *do* for others (*do yoga*, *do karate*).',
    'For instructions, short imperatives are polite enough in English; add *make sure you…* and *don’t forget to…* for important points.',
    'Get students moving if the room allows it: they give real stretching instructions to the class and the others follow.',
    'Correct *I did a injury*: we say *I injured my knee* or *I hurt my back*.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask each student which sport they do or would like to do, with the right verb (*play*, *go*, *do*).' },
    { min: 10, title: 'Play, go or do?', md: 'Show board page 1. Students sort the sports and explain the pattern.' },
    { min: 10, title: 'Instructions', md: 'Show board page 2. Read the warm-up routine, then students put the steps in order.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 12, title: 'Exam corner', md: 'Show board page 3: a B1 Preliminary Listening part 1 style task. Read each text twice.' },
    { min: 8, title: 'Close', md: 'Each student gives the class one instruction for a healthy week. Set the homework.' },
  ],
  board: [
    { title: 'Play, go or do?', blocks: [
      { t: 'ex', kind: 'sort', h: 'Which verb goes with each sport?', groups: ['play', 'go', 'do'], items: [
        { s: 'tennis', g: 0, why: 'A ball game: *play tennis*.' },
        { s: 'swimming', g: 1, why: 'An -ing activity: *go swimming*.' },
        { s: 'yoga', g: 2, why: 'Not a ball game, not -ing: *do yoga*.' },
        { s: 'football', g: 0, why: 'A ball game: *play football*.' },
        { s: 'cycling', g: 1, why: 'An -ing activity: *go cycling*.' },
        { s: 'karate', g: 2, why: 'A martial art: *do karate*.' },
      ] },
    ] },
    { title: 'A warm-up routine', blocks: [
      { t: 'reading', title: 'Before you run', md: 'First, walk quickly for three minutes to warm up your body. Then do ten slow knee lifts on each side. After that, stretch your legs: hold each stretch for twenty seconds, and don’t bounce. Make sure you breathe slowly. Finally, start running at an easy speed for the first five minutes.' },
      { t: 'ex', kind: 'order', h: 'Put the instructions in order.', items: [
        { a: 'First walk quickly for three minutes.', why: 'The routine starts with a fast walk.' },
        { a: 'Make sure you breathe slowly.', why: '*Make sure you* + verb for an important point.' },
      ] },
      { t: 'ex', kind: 'tf', h: 'True or false?', items: [
        { q: 'You should bounce when you stretch.', a: 'f', why: '*don’t bounce*.' },
        { q: 'You hold each stretch for twenty seconds.', a: 't', why: '*hold each stretch for twenty seconds*.' },
      ] },
    ] },
    { title: 'Exam corner: Listening part 1', blocks: [
      { t: 'text', md: '**Teacher, read each text twice.**\n\n**One:** *The swimming pool is closed on Monday for cleaning, so the club will meet on Tuesday instead, at the same time.*\n\n**Two:** *I wanted to go cycling, but my bike had a flat tyre, so in the end I went for a run in the park.*\n\n**Three:** *Don’t forget your towel and a bottle of water. You don’t need special shoes; the gym gives them to you.*' },
      { t: 'ex', kind: 'choice', h: 'In the format of B1 Preliminary Listening part 1: choose the right answer.', items: [
        { q: 'When will the club meet this week?', o: ['On Tuesday', 'On Monday', 'On Wednesday'], why: '*the club will meet on Tuesday instead*.' },
        { q: 'What did the speaker do?', o: ['He went running.', 'He went cycling.', 'He repaired his bike.'], why: '*in the end I went for a run*.' },
        { q: 'What do you NOT need to bring?', o: ['Shoes', 'A towel', 'Water'], why: '*You don’t need special shoes*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Listening part 1 you often hear **all three** options. Listen for words like *instead*, *in the end* and *don’t need*: they tell you which one is the answer.' },
    ] },
  ],
  activities: {
    one: { title: 'Coach for a day', md: 'The student is a coach and gives you a five-step routine for a sport they know, with *first*, *then*, *after that*, *finally* and one *make sure you*. Follow the instructions (on camera) and ask a question when a step is not clear.' },
    small: { title: 'Follow me', md: 'Each student gives the group a 30-second stretching or breathing routine on camera; the others follow it. The group then votes for the clearest instructions and says why.' },
    group: { title: 'Sports day', md: 'In breakout rooms of three, each room invents a new sport and writes its rules and a warm-up in five instructions. Rooms present in the main room; the others ask questions (*Do you play it or do it?*).' },
  },
  homework: { book: 'u15:p3', md: 'Do book lesson 3 of unit 15 (Warm up first). Write the instructions for a sport or a recipe you know, in six steps with sequencing words.' },
};
