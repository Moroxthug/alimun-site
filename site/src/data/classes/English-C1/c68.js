// English C1, class 68 (docs/LESSONS_PLAN.md, L6). Exam practice: C1 Advanced Writing, with the language of units 1 to 14. Draft for the owner's review.
export const LESSON = {
  id: 'c68',
  focus: 'Exam practice in the format of C1 Advanced Writing. By the end of the class every student knows the two parts of the paper (one hour and thirty minutes in all; Part 1: a compulsory essay of 220 to 260 words on two of three points from a set of notes, saying which is more important and why; Part 2: one task from a choice of three, such as a letter or email, a proposal, a report or a review, also 220 to 260 words), has planned a Part 1 essay and written its introduction and one body paragraph in class, and can check writing with the four marking areas: Content, Communicative achievement, Organisation and Language.',
  tips: [
    'The commonest way to lose Content marks in Part 1 is to write about all three points, or about only one, or to forget to say which point is more important. Make students write the comparison sentence in their plan before they start.',
    'The opinions in the notes are optional. Students may use them, but in their own words: copying a quoted opinion word for word shows the examiner nothing about the student’s language.',
    'Organisation at C1 means more than paragraphs and *Firstly, Secondly*. Recycle the linking of unit 8 (*given that, whereas, insofar as*), the hedging of unit 4 (*arguably, to some extent*) and the concession of unit 13 (*For all its…*).',
    'Timing: about forty-five minutes per part, including five minutes to plan and five to check. Give strict times today and tell students when to move on.',
    'Mark kindly with the four areas: one strength and one thing to improve for each. Peer marking teaches the criteria fastest. Never tell a student they will pass; tell them what will raise their mark.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Which do you find harder to write, an essay or a review? Why?* Collect ideas on the board.' },
    { min: 8, title: 'The paper and the marking', md: 'Board page 1. Go through both parts, the timing and the four marking areas.' },
    { min: 12, title: 'Part 1 essay: plan', md: 'Board page 2. Read the task; students choose two of the three points, decide which is more important, plan four paragraphs and choose the best introduction.' },
    { min: 20, title: 'Activity: write and mark', md: 'Use the activity for your class size below. Students write the introduction and one body paragraph in fifteen minutes, then mark with the criteria.' },
    { min: 10, title: 'Part 2 choices', md: 'Board page 3. Match each Part 2 task type with its features and its opening; students choose a Part 2 task type for homework.' },
    { min: 5, title: 'Close', md: 'Each student says one thing they will check in every piece of writing from now on. Set the homework.' },
  ],
  board: [
    { title: 'The Writing paper', blocks: [
      { t: 'table', caption: 'C1 Advanced Writing: one hour and thirty minutes', explain: ['head', 'col1', 'col2'], head: ['Part', 'Task', 'Length'], rows: [
        ['Part 1', 'a compulsory essay: discuss two of the three points in the notes and say which is more important, giving reasons', '220 to 260 words'],
        ['Part 2', 'choose one of three tasks, such as a letter or email, a proposal, a report or a review', '220 to 260 words'],
      ] },
      { t: 'table', caption: 'How it is marked', explain: ['head', 'col1'], head: ['Area', 'The examiner asks'], rows: [
        ['Content', 'Is every part of the task covered and relevant?'],
        ['Communicative achievement', 'Does the text hold the reader’s attention in the right register for its type?'],
        ['Organisation', 'Is it well structured, with a variety of linking and cohesive devices?'],
        ['Language', 'Is there a wide range of vocabulary and complex grammar, used with control?'],
      ] },
    ] },
    { title: 'Part 1: the essay', blocks: [
      { t: 'text', md: '**Essay task.** *Your class has attended a panel discussion on what city councils can do to improve life for residents. You have made the notes below.*\n\n**Ways councils can improve city life:** public transport, green spaces, affordable housing.\n\n**Some opinions expressed in the discussion:** *“If buses were cheaper, far fewer people would drive.”* *“Parks matter every bit as much as hospitals for our health.”* *“Young people are leaving because they simply cannot afford the rent.”*\n\n**Write an essay discussing two of the ways in your notes. You should explain which way is more important for councils to focus on, giving reasons in support of your answer.** You may, if you wish, make use of the opinions expressed in the discussion, but you should use your own words as far as possible. Write 220 to 260 words.' },
      { t: 'ex', kind: 'choice', h: 'Choose the best essay introduction.', items: [
        { q: '', o: [
          'City councils face growing pressure to improve the quality of urban life, yet their budgets are limited. Of the many possible priorities, public transport and affordable housing are arguably the most pressing, and this essay will consider which deserves more attention.',
          'Hi everyone! Cities are great but they have lots of problems, so let’s talk about what councils should do about it.',
          'Public transport, green spaces and affordable housing are all very important. Public transport is important. Green spaces are important. Housing is also important.',
        ], why: 'A formal introduction that sets out the issue, names the two points chosen and says what the essay will do.' },
      ] },
      { t: 'ex', kind: 'order', h: 'Put the essay plan in order.', items: [
        { a: 'Introduction, first point, second point, which is more important and why', why: 'One paragraph for each chosen point, then a conclusion that compares them and gives reasons.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Choose the two points you have the most to say about, not the two you think the examiner wants. Your conclusion must compare them: *Given that…, it is housing that councils should tackle first.*' },
    ] },
    { title: 'Exam corner: Part 2 choices', blocks: [
      { t: 'ex', kind: 'match', h: 'Match each Part 2 task type with its main feature.', pairs: [
        ['a review', 'describes and evaluates a work or event, then recommends to a named reader'],
        ['a report', 'describes and evaluates a present situation for a decision-maker, with headings'],
        ['a proposal', 'puts forward a new plan and persuades the reader to accept it'],
        ['a letter or email', 'writes to a named person or organisation in the register the task needs'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the best opening for each text type.', items: [
        { q: 'A proposal: ___', o: ['The purpose of this proposal is to suggest a new mentoring scheme for first-year students.', 'Anyone who thinks mentoring is boring is in for a surprise.', 'Dear Sam, it was great to hear from you!'], why: 'A proposal states its purpose at the start.' },
        { q: 'A formal letter: ___', o: ['I am writing with regard to your recent decision to close the welcome centre.', 'The aim of this report is to assess the welcome centre.', 'Have you ever wondered why welcome centres matter?'], why: 'A formal letter gives the reason for writing in the first sentence.' },
        { q: 'A review: ___', o: ['Few events in the city have divided opinion quite as sharply as this one.', 'In view of these findings, it is recommended that…', 'I look forward to hearing from you.'], why: 'A review draws the reader in.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Timed paragraphs', md: 'The student plans the essay (five minutes) and writes the introduction and the first body paragraph (fifteen minutes) while you wait. Mark them together with the four areas; the student finds one improvement for each and rewrites the weaker paragraph. If there is time, look at the review or report they wrote for classes 62 and 66 and choose one sentence to make more precise.' },
    small: { title: 'Write, swap, mark', md: 'Each student writes the introduction and one body paragraph in fifteen minutes. Swap with a partner, who marks with the four areas and gives one comment for each, including whether the opinions from the notes were put in the writer’s own words. Writers improve their paragraph with the comments.' },
    group: { title: 'Examiners for a day', md: 'Everyone writes the introduction and one paragraph (fifteen minutes). In breakout rooms of three, students read each other’s work and decide which is best organised and why. Back together, each room shares one strong linking sentence and one common mistake; build one model sentence together on the board.' },
  },
  homework: { book: 'u8:p3 u13:p4 u14:p4', md: 'Finish the Part 1 essay you started in class (220 to 260 words) in forty-five minutes, timed. Then write one Part 2 task of a type you have not yet written in this course, also in 220 to 260 words. Check both with the four marking areas before you send them to your teacher, and look again at the writing lessons in units 8, 13 and 14.' },
};
