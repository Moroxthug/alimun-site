// English A1, class 10 (docs/LESSONS_PLAN.md). Builds on book lesson u2:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c10',
  focus: 'By the end of the class every student can describe a family photo for about one minute: who the people are, where they are in the picture (**on the left, on the right, in the middle, at the front, at the back**), what they look like and what they have got. This joins all of unit 2: family words, possessives, *have got*, adjectives and *this / that*. It is also the first longer speaking turn, which the exam asks for later.',
  tips: [
    'Learners often say *in the left*. Write **on** the left / right, **in** the middle on the board.',
    'Before the long turn, give students one minute to prepare in silence and note three key words. A short plan makes a big difference at A1.',
    'Let students use a photo from the internet if they do not want to share a private family photo.',
    'While students speak, write down good sentences as well as mistakes; read the good ones aloud at the end.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Show any group photo on your screen. Ask *How many people are there? Who is in the middle?* Students answer in short sentences.' },
    { min: 10, title: 'Where are they?', md: 'Show board page 1. Teach the position words with the picture on screen. Students do the exercise.' },
    { min: 10, title: 'A model description', md: 'Show board page 2. Read the description aloud. Students answer the questions, then find the position words in the text.' },
    { min: 20, title: 'Activity', md: 'Use the activity for your class size below. This is the main part of the class.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: a short writing task in the format of the A2 Key exam. Students write in the chat; correct two answers on the board.' },
    { min: 5, title: 'Close', md: 'Read three good sentences you heard today. Set the homework.' },
  ],
  board: [
    { title: 'Where are they?', blocks: [
      { t: 'table', caption: 'In a photo', explain: ['head', 'col1'], head: ['Position', 'Where'], rows: [
        ['on the left', 'at the left side'],
        ['on the right', 'at the right side'],
        ['in the middle', 'at the centre'],
        ['at the front', 'near the camera'],
        ['at the back', 'far from the camera'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
        { q: 'My dad is ___ the left.', o: ['on', 'in', 'at'], why: '*on the left*' },
        { q: 'I’m ___ the middle, with my sister.', o: ['in', 'on', 'at'], why: '*in the middle*' },
        { q: 'My grandparents are ___ the back.', o: ['at', 'on', 'in'], why: '*at the back*' },
      ] },
    ] },
    { title: 'A model description', blocks: [
      { t: 'reading', title: 'My birthday photo', md: 'This is a photo of my birthday. I’m in the middle, with a big cake. The man on the left is my uncle Felix. He’s got short grey hair and glasses. The woman on the right is my aunt. She’s my mother’s sister. At the front are my two cousins. They’ve got a small dog. Its name is Toby!' },
      { t: 'ex', kind: 'choice', h: 'Answer the questions.', items: [
        { q: 'Who is on the left?', o: ['the uncle', 'the aunt', 'the cousins'], why: '*The man on the left is my uncle Felix.*' },
        { q: 'The aunt is', o: ['the mother’s sister.', 'the father’s sister.', 'the uncle’s mother.'], why: '*She’s my mother’s sister.*' },
        { q: 'Who has got a dog?', o: ['the cousins', 'the uncle', 'the writer'], why: '*They’ve got a small dog.*' },
      ] },
    ] },
    { title: 'Exam corner: write a short message', blocks: [
      { t: 'text', md: 'In the format of the A2 Key writing test: your friend Sam asks about a photo of your family. Write **25 words or more**. Say:\n\n**who** is in the photo,\n\n**where** they are in the picture,\n\n**one thing** about each person.' },
      { t: 'tip', art: 'owl', md: 'In the exam, you get points for answering **all three** parts. Short sentences are fine: *My brother is on the left. He’s got a red jacket.*' },
      { t: 'ex', kind: 'fix', h: 'Correct these sentences from a student’s message.', items: [
        { s: 'My mother is [in] the right.', a: ['on'], why: '*on the right*' },
        { s: 'My sister has got [eyes blue].', a: ['blue eyes'], why: 'The adjective goes before the noun.' },
        { s: '[Theirs] dog is very small.', a: ['Their'], why: '*their* + noun.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Two photos', md: 'The student describes a photo for one minute without stopping; you only listen. Then give feedback on three points and ask the student to describe it again, better. Then describe a photo yourself while the student draws simple people on paper; compare the drawing with your photo.' },
    small: { title: 'Photo presentations', md: 'Each student describes a photo for one minute (timer on screen). The listeners ask one question each (*Who is the man at the back?*). After everyone, vote for the clearest description and say why.' },
    group: { title: 'Describe and draw', md: 'Breakout rooms of three: A describes a photo (from the internet, sent privately), B draws it with simple shapes, C checks the description uses position words and *has got*. Rotate. Back in the main room, two rooms show a drawing and the photo side by side.' },
  },
  homework: { book: 'u2:p4', md: 'Do book lesson 4 of unit 2 (A family photo). Then write a description of a photo of your family or friends in 40 to 60 words, with at least three position words.' },
};
