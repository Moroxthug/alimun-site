// English A2, class 9 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u2:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c09',
  focus: 'By the end every student can say when something happened (*last week, two days ago, in 2019, on Monday*) and tell a short story in order with *first, then, after that, when, finally*. The speaking and writing goal: a 35-word story in the format of A2 Key Writing Part 7.',
  tips: [
    '*Before two days* (Spanish, Italian, Portuguese, French speakers) and *in the last summer* are typical. Show *two days ago* and *last summer* side by side.',
    '*Yesterday night* is wrong: say *last night*.',
    'For stories, insist on linking words: without them, A2 stories sound like lists.',
    'Model the picture-story task with the whole class before students try it alone.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *When was the last time you went to the cinema? Ate in a restaurant? Visited another city?* Students answer with a time expression.' },
    { min: 10, title: 'When did it happen?', md: 'Show board page 1. Students choose the right expression and fix the mistakes.' },
    { min: 10, title: 'In the right order', md: 'Show board page 2. Put the story in order together, then retell it with the linking words.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: choose the best story, in the format of A2 Key Writing Part 7.' },
    { min: 10, title: 'Close', md: 'Two students tell their story to the class. Set the homework.' },
  ],
  board: [
    { title: 'When did it happen?', blocks: [
      { t: 'table', caption: 'Saying when', explain: ['head'], head: ['Pattern', 'Examples'], rows: [
        ['last + time', 'last week, last night, last summer'],
        ['time + ago', 'two days ago, a month ago'],
        ['in + month / year', 'in May, in 2020'],
        ['on + day / date', 'on Monday, on 3 March'],
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'I met her [before two days].', a: ['two days ago'], why: 'A length of time + *ago*.' },
        { s: 'We went to Italy [in the last summer].', a: ['last summer'], why: 'No *in* and no *the* with *last*.' },
        { s: 'I slept badly [yesterday night].', a: ['last night'], why: 'We say *last night*.' },
      ] },
    ] },
    { title: 'In the right order', blocks: [
      { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
        { a: 'First we had breakfast at the hotel.', why: '*First* starts the story.' },
        { a: 'After that we walked to the old town.', why: '*After that* moves the story on.' },
        { a: 'Finally we took a taxi back.', why: '*Finally* ends the story.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Linking words make a story: **first**, **then**, **after that**, **when**, **finally**. Use at least three in every story you tell or write.' },
    ] },
    { title: 'Exam corner: a picture story', blocks: [
      { t: 'text', md: 'Three pictures: **a woman leaves home without an umbrella**, **it starts to rain hard on the way to work**, **she arrives at the office very wet and her colleagues laugh**. Write the story in 35 words or more.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam (Writing, Part 7): which story is the best answer?', items: [
        { q: '', o: ['Last Monday Sara left home without her umbrella. On the way to work it started to rain hard. When she arrived at the office, she was very wet and her colleagues laughed.', 'Sara has an umbrella. It is raining. She is wet. Her colleagues are laughing at her in the office now.', 'Last Monday it was rainy. Sara likes her colleagues and her office is very nice.'], why: 'It tells all three pictures, in the past, with linking words.' },
      ] },
      { t: 'tip', art: 'owl', md: 'For Part 7, write **one or two sentences for each picture**, use the **past simple**, and join the parts with **then, after that, when**. Give the person a name.' },
    ] },
  ],
  activities: {
    one: { title: 'A story from your life', md: 'The student tells a short real story (a trip, a funny day, a first day at work) using at least four time expressions and three linking words. You ask *When? Then what happened?* Then the student writes the story in 35 words and you correct it together.' },
    small: { title: 'Story chain', md: 'Give the first sentence: *Last Saturday, Tom woke up very late.* Each student adds one sentence starting with a linking word (*Then… After that… When…*). Write the story on the board as you go. Finish with *Finally…* and read it all aloud.' },
    group: { title: 'Picture stories', md: 'Describe three pictures in the chat for each breakout room (a different set for each). Rooms write a 35-word story together. Back in the main room, each room reads its story; the class guesses the three pictures.' },
  },
  homework: { book: 'u2:p3', md: 'Do lesson 3 of unit 2. Write a story of 35 words or more about something that happened to you last month, with three linking words.' },
};
