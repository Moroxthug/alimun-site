// English A1, class 16 (docs/LESSONS_PLAN.md). Builds on book lesson u3:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c16',
  focus: 'By the end of the class every student can read a short text about someone’s day, say how often they do things with **always, usually, often, sometimes, never** in the right place (before the verb), and describe their own typical day in a short connected talk of six to eight sentences.',
  tips: [
    'Word order with frequency words is the key point today: *I always get up early*, not *I get up always early*. With *be* it goes after: *I am always tired*. Show both on the board.',
    'Speakers of Romance languages often put the adverb at the end (*I drink coffee always*). Correct it with a quick gesture: move your hand before the verb.',
    '*Never* is already negative: *I never eat meat*, not *I don’t never eat meat*.',
    'Use the reading as a model for the final talk. Students who find speaking hard can follow the same order: morning, work, evening.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask three quick questions: *What time do you get up? Do you drink coffee in the morning? Do you work at the weekend?* Answer them yourself too.' },
    { min: 12, title: 'Read', md: 'Show board page 1. Students read the text alone (or you read it aloud), then answer the true or false questions on the board together.' },
    { min: 10, title: 'How often?', md: 'Show board page 2. Draw a line from 0% to 100% and place the five words. Students do the exercise and say the sentences aloud.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 8, title: 'Exam corner', md: 'Show board page 4: a short reading in the format of A2 Key. Students answer alone in 4 minutes, then check together.' },
    { min: 10, title: 'My day: speaking', md: 'Show board page 3. Each student gives a one-minute talk about their typical day, using times and at least two frequency words. The class asks one question to each speaker.' },
  ],
  board: [
    { title: 'A day in the life of a nurse', blocks: [
      { t: 'reading', title: 'Leila, night nurse', md: 'Leila is a nurse in a big hospital in Manchester. She works at night, so her day is different. She gets up at four o’clock in the afternoon and has breakfast at five. She always has eggs and a big cup of tea. She starts work at eight in the evening and finishes at eight in the morning. She often feels tired, but she loves her job. When she gets home, she usually reads for half an hour and then she goes to bed. She never drinks coffee after midnight.' },
      { t: 'ex', kind: 'tf', h: 'True or false?', items: [
        { q: 'Leila works in the day.', a: 'f', why: 'She works at night.' },
        { q: 'She has breakfast at five in the afternoon.', a: 't', why: '*has breakfast at five*, in the afternoon.' },
        { q: 'She sometimes has eggs for breakfast.', a: 'f', why: 'She *always* has eggs.' },
        { q: 'She doesn’t drink coffee after midnight.', a: 't', why: '*She never drinks coffee after midnight.*' },
      ] },
    ] },
    { title: 'How often?', blocks: [
      { t: 'table', caption: 'How often?', explain: ['head', 'col1'], head: ['Word', 'How often'], rows: [
        ['always', '100%, every time'],
        ['usually', 'nearly every time'],
        ['often', 'many times'],
        ['sometimes', 'some times'],
        ['never', '0%, not one time'],
      ] },
      { t: 'tip', art: 'owl', md: 'The word goes **before** a normal verb: *I **usually** walk to work.* With **be**, it goes **after**: *She is **often** tired.*' },
      { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
        { a: 'I always have tea in the morning.', why: '*always* before the verb *have*.' },
        { a: 'We sometimes eat at a restaurant.', why: '*sometimes* before *eat*.' },
        { a: 'He is never late.', why: 'With *be*: *is never*.' },
      ] },
    ] },
    { title: 'Your day', blocks: [
      { t: 'text', md: 'Talk about your typical day. Say **what** you do, **when** (at seven, in the evening) and **how often** (always, usually, sometimes, never). Start like this: *On a normal day, I get up at …*' },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'I drink [always] coffee in the morning.', a: ['always drink'], why: 'The frequency word goes before the verb: *I always drink coffee.*' },
        { s: 'She [don’t never] eats meat.', a: ['never'], why: '*never* is already negative.' },
        { s: 'They [usually are] at home on Sundays.', a: ['are usually'], why: 'With *be*, the word goes after: *are usually*.' },
      ] },
    ] },
    { title: 'Exam corner: read and choose', blocks: [
      { t: 'reading', title: 'A note on the fridge', md: 'Hi Sam! I start work early tomorrow, at six, so I can’t take the children to school. Can you take them? School starts at quarter to nine. They usually have cereal for breakfast. I finish at three and I always pick them up. Thanks! Mum' },
      { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: choose the right answer.', items: [
        { q: 'What time does Mum start work tomorrow?', o: ['At six', 'At quarter to nine', 'At three'], why: '*I start work early tomorrow, at six.*' },
        { q: 'Who takes the children to school tomorrow?', o: ['Sam', 'Mum', 'The children'], why: 'Mum asks Sam: *Can you take them?*' },
        { q: 'What do the children usually have for breakfast?', o: ['Cereal', 'Eggs', 'Nothing'], why: '*They usually have cereal for breakfast.*' },
      ] },
      { t: 'tip', art: 'owl', md: 'In reading tasks, find the **same idea**, not always the same words. *Tomorrow, at six* answers *What time … tomorrow?*' },
    ] },
  ],
  activities: {
    one: { title: 'How often do you…?', md: 'Ask the student ten *How often do you …?* questions (*cook, go to the cinema, call your family, eat fast food…*). The student answers with a frequency word in full sentences. Then the student interviews you. End with the student saying three things you have in common.' },
    small: { title: 'True or false day', md: 'Each student tells the group about their day with five sentences, one of them false (*I never watch TV.*). The others ask questions to find the false sentence. Give one point for each correct guess and one point to the speaker if nobody finds it.' },
    group: { title: 'The class day', md: 'Breakout rooms of three or four. Each room gets a part of the day in the chat (morning, afternoon, evening, night). They find out what everyone in the room usually does then and prepare three sentences: *We usually have coffee at eight. Ana sometimes goes to the gym.* Back in the main room, the rooms report in order and you write a "class day" on the board.' },
  },
  homework: { book: 'u3:p4', md: 'Finish book lesson 4 of unit 3 (A day in the life of a baker). Then write a short text about your day (60 to 80 words) with times and at least three frequency words.' },
};
