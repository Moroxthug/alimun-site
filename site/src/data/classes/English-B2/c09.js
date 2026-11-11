// English B2, class 9 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u2:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c09',
  focus: 'By the end every student can plan and write a short story in the format of B2 First Writing Part 2: a strong opening, clear narrative tenses, linkers, a twist and an ending that answers the task. The speaking goal: tell the planned story aloud before writing it.',
  tips: [
    'In the exam, the story must start or end with the given sentence. Students who change it lose marks. Insist on copying it exactly.',
    'A good story has a clear shape: set the scene, build up, the twist, the ending. Four short paragraphs work well.',
    'Encourage a few vivid words (*crept*, *whispered*, *soaked*) but warn against too many: clarity first.',
    'Use the unit’s grammar: one past perfect continuous and three linkers make the story sound B2.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Read the story opening on board page 1 aloud. Ask: *What do you think happens next?*' },
    { min: 12, title: 'A model story', md: 'Show board page 1. Students read the model and answer the questions about its shape.' },
    { min: 10, title: 'Better words', md: 'Show board page 2. Students choose the more vivid word for each gap.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: the task and simple marking points. Students plan their story in four lines.' },
    { min: 5, title: 'Close', md: 'Two students tell their planned endings. Set the homework.' },
  ],
  board: [
    { title: 'A model story', blocks: [
      { t: 'reading', title: 'The wrong train', md: 'As soon as the doors closed, Marta knew something was wrong. She had been travelling for six hours and was too tired to read the signs properly.\n\nThe train was heading north, not south. Her phone battery was dead, and the next stop was two hours away. She sat down, close to tears.\n\nAn old man opposite her smiled and offered her a sandwich. They started talking, and it turned out that he had grown up in the very town she was trying to reach.\n\nIn the end, she arrived a day late, but with a new friend and an invitation to his family’s farm for the summer.' },
      { t: 'ex', kind: 'tf', h: 'True or false?', items: [
        { q: 'The story starts by setting the scene and the problem.', a: 't', why: 'The first paragraph gives the situation and the mistake.' },
        { q: 'The twist comes in the last sentence.', a: 'f', why: 'The twist, *it turned out that…*, is in the third paragraph.' },
        { q: 'The writer uses the past perfect continuous.', a: 't', why: '*She had been travelling for six hours.*' },
      ] },
    ] },
    { title: 'Vivid words', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the more vivid word.', items: [
        { q: 'She ___ into the room so as not to wake anyone.', o: ['crept', 'went', 'moved'], why: '*crept*: moved slowly and quietly.' },
        { q: 'By the time we got home, we were completely ___ .', o: ['soaked', 'wet', 'bad'], why: '*soaked*: very wet.' },
        { q: '“Don’t move,” he ___ .', o: ['whispered', 'said', 'told'], why: '*whispered*: said very quietly, which adds tension.' },
      ] },
    ] },
    { title: 'Exam corner: Writing Part 2, a story', blocks: [
      { t: 'text', md: 'Your story must **begin** with this sentence: *I opened the letter and couldn’t believe what I was reading.* Write **140 to 190 words**.' },
      { t: 'ex', kind: 'order', h: 'Put the stages of a good story in order.', items: [
        { a: 'Set the scene, build up the action, give the twist, then end clearly.', why: 'A clear shape makes the story easy to follow.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Examiners look at four things: content (did you answer the task?), organisation, language range and accuracy, and how well you communicate. Copy the given sentence exactly.' },
    ] },
  ],
  activities: {
    one: { title: 'Story planning', md: 'The student plans the exam story in four lines, then tells it aloud in two minutes. Give feedback on the twist and the tenses, then they tell it again, improved.' },
    small: { title: 'Story relay', md: 'Each student writes the first paragraph of the exam story in five minutes, then passes it (in the chat) to the next student, who writes the twist. A third student writes the ending. Read the stories aloud.' },
    group: { title: 'Plan and pitch', md: 'Breakout rooms of three plan a story for the exam task in four lines and choose the best twist. Each room pitches its plan in one minute; the class votes on the most original.' },
  },
  homework: { book: 'u2:p4', md: 'Finish lesson 4 of unit 2. Write the exam story (140 to 190 words) starting with the given sentence, and check your tenses and linkers before you send it.' },
};
