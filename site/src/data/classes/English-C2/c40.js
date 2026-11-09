// English C2, class 40 (docs/LESSONS_PLAN.md, L6). Exam practice: C2 Proficiency Writing, with the language of units 1 to 8. Draft for the owner's review.
export const LESSON = {
  id: 'c40',
  focus: 'Exam practice in the format of C2 Proficiency Writing. By the end every student knows the two parts of the paper (one hour and thirty minutes in all; Part 1: a compulsory essay of 240 to 280 words summarising and evaluating two short texts; Part 2: one task from a choice, such as an article, a letter, a report or a review, of 280 to 320 words), can plan either part in five minutes under time pressure, has written the introduction and one body paragraph of a Part 1 essay in class, and checks writing with the four marking areas: Content, Communicative achievement, Organisation and Language. The language comes from units 1 to 8.',
  tips: [
    'Time is the hidden skill of this paper. About forty-five minutes per part, of which five go on planning and five on checking. Give strict times today and tell students when to move on, even mid-sentence.',
    'Part 1 loses most marks in three ways: copying phrases from the texts, summarising without evaluating, and a personal view with no link to the texts. Recycle units 4 and 7: paraphrase with a new structure, a fair reporting verb, and *insofar as*, *overlooks*, *by contrast*.',
    'In Part 2, the task type decides the register and the layout: headings and recommendations in a report, a named reader and a clear purpose in a letter, a title and a voice in an article, a verdict for a kind of reader in a review. Ask students which task type they write best and which they avoid, and make the homework the one they avoid.',
    'If the paper a student sits offers a Part 2 question on a set text, this course does not prepare it; students should choose from the other tasks.',
    'Mark kindly with the four areas: one strength and one thing to improve for each. Never tell a student they will pass; tell them what will raise their mark.',
  ],
  plan: [
    { min: 4, title: 'Warm-up', md: 'Ask: *What is the hardest thing about writing in English under time pressure: ideas, words, structure or checking?* Each student answers in a sentence; keep the answers for the close.' },
    { min: 7, title: 'The paper and the marking', md: 'Show board page 1. Go through both parts, the timing and the four marking areas, and ask which area each student thinks is their weakest.' },
    { min: 14, title: 'Part 1: read and plan in time', md: 'Show board page 2. Give students five minutes to read the task and the two texts and note each writer’s key point. Then they sort the notes into the plan and choose the best introduction.' },
    { min: 18, title: 'Activity: write against the clock', md: 'Use the activity for your class size below. Students write the introduction and the paragraph on text 1 in fifteen minutes, then check them with the four areas.' },
    { min: 12, title: 'Part 2 choices', md: 'Show board page 3. Read the four tasks; students match each task type with its features and choose the best opening for each. Each student chooses the task for the homework and plans it in three minutes.' },
    { min: 5, title: 'Close', md: 'Go back to the warm-up answers. Each student says one thing they will do differently under time pressure from now on. Set the homework.' },
  ],
  board: [
    { title: 'The Writing paper', blocks: [
      { t: 'table', caption: 'C2 Proficiency Writing: one hour and thirty minutes', explain: ['head', 'col1', 'col2'], head: ['Part', 'Task', 'Length'], rows: [
        ['Part 1', 'a compulsory essay: summarise and evaluate the key points of two short texts on the same subject, and give your own view, in your own words', '240 to 280 words'],
        ['Part 2', 'one task from a choice, such as an article, a letter, a report or a review', '280 to 320 words'],
      ] },
      { t: 'table', caption: 'How it is marked', explain: ['head', 'col1'], head: ['Area', 'The examiner asks'], rows: [
        ['Content', 'Is every part of the task covered, and is everything relevant?'],
        ['Communicative achievement', 'Does the text hold the reader’s attention, in the register and conventions of its type?'],
        ['Organisation', 'Is it a coherent whole, with a wide range of linking and cohesive devices used naturally?'],
        ['Language', 'Is the vocabulary and grammar wide, precise and natural, with very few errors?'],
      ] },
      { t: 'table', caption: 'About forty-five minutes per part', explain: ['head', 'col1'], head: ['Stage', 'Time'], rows: [
        ['read the task (and the texts in Part 1) and note the key points', 'about eight minutes in Part 1, three in Part 2'],
        ['plan the paragraphs and choose the register', 'about five minutes'],
        ['write', 'about twenty-five to thirty minutes'],
        ['check: task, register, linking, your own common mistakes', 'about five minutes'],
      ] },
    ] },
    { title: 'Part 1: the essay on two texts', blocks: [
      { t: 'text', md: 'In the format of the C2 Proficiency exam (Writing Part 1): read the two texts below. Write an essay **summarising and evaluating the key points from both texts**. Use your own words throughout as far as possible, and include your own ideas in your answer. Write **240 to 280 words**.' },
      { t: 'reading', title: 'Text 1: Say it plainly', md: 'Official documents are written, in theory, to be acted upon. Yet tenancy agreements, insurance policies and tax forms are still drafted as if their only readers were other lawyers. The result is not precision but confusion: people sign what they do not understand, miss deadlines buried in subclauses and lose rights they never knew they had. Plain English is not childish English. A clause that says who must do what, and by when, can be every bit as exact as one that hides its meaning behind *hereinafter* and *notwithstanding*, and it is far more likely to be obeyed.' },
      { t: 'reading', title: 'Text 2: The price of simplicity', md: 'The campaign for plain English has done much good, and few people mourn the passing of *the party of the first part*. But simplicity has a price. Legal phrases survive because their meaning has been tested, sometimes over centuries, in court; replace them with everyday words and you invite fresh argument about what those words mean. *As soon as possible* sounds friendlier than *forthwith*, but it can be read in a dozen ways, and that is precisely where disputes begin. Clarity for the reader matters, but not if it is bought with uncertainty for everyone.' },
      { t: 'ex', kind: 'sort', h: 'A five-minute plan: which paragraph does each note belong in?', groups: ['introduction', 'text 1', 'text 2', 'your view'], explain: ['groups'], items: [
        { s: 'the shared question: should official documents be rewritten in plain English?', g: 0, why: 'The introduction names the shared issue and signals that the writers differ.' },
        { s: 'confusing documents cost ordinary people their rights; clarity need not mean vagueness', g: 1, why: 'The first writer’s key point, reduced to a note.' },
        { s: 'persuasive insofar as people cannot obey what they cannot understand', g: 1, why: 'An evaluation of text 1.' },
        { s: 'tested legal wording gives certainty; everyday words reopen disputes', g: 2, why: 'The second writer’s key point.' },
        { s: 'perhaps overstated: plain drafting can define its terms', g: 2, why: 'An evaluation of text 2 that links it back to text 1.' },
        { s: 'both are right about different readers: plain wording for duties, defined terms for the rest', g: 3, why: 'A view that grows out of the evaluation and goes beyond both texts.' },
      ] },
      { t: 'ex', kind: 'choice', h: 'Choose the best introduction.', items: [
        { q: '', o: [
          'Both texts consider whether official documents should be rewritten in plain English, although they weigh the benefits of clarity against the risks of imprecision quite differently.',
          'In this essay I am going to write about two texts which are about English and documents.',
          'Official documents are written, in theory, to be acted upon, as the first text says, and the second text says simplicity has a price.',
        ], why: 'It names the shared question and the difference in the writers’ own terms, without copying either text.' },
      ] },
    ] },
    { title: 'Part 2: the choices', blocks: [
      { t: 'text', md: 'In the format of the C2 Proficiency exam (Writing Part 2): write an answer to **one** of these tasks in **280 to 320 words**.\n\n**An article.** A magazine for language learners invites articles with the title *The English nobody taught me*. Describe an experience of meeting a variety or register of English that surprised you, and explain what it taught you about communication.\n\n**A letter.** A newspaper editorial has argued that schools should stop teaching literature and teach only “practical” writing. Write a letter to the editor responding to the editorial and giving your views.\n\n**A report.** Your language school is considering a course in public speaking. The director has asked you for a report evaluating the courses now offered, assessing whether students would want the new one, and making recommendations.\n\n**A review.** A book website invites reviews of *a book with a narrator you could not trust*. Describe the book briefly, explain how the narrator affects the reader’s experience, and say who would enjoy it.' },
      { t: 'ex', kind: 'match', h: 'Match each task type with its main features.', pairs: [
        ['an article', 'an engaging title, a personal voice and a point that matters to the readers of the publication'],
        ['a letter to an editor', 'a clear reason for writing in the first lines, a formal register and a reasoned response to a named text'],
        ['a report', 'headings, an objective tone, evaluation of the present situation and recommendations'],
        ['a review', 'a brief description without spoilers, argued evaluation and a verdict for a kind of reader'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the best opening for each task.', items: [
        { q: 'The article: ___', o: ['The first time a colleague in Delhi asked me to “prepone” a meeting, I thought my English had failed me.', 'The aim of this article is to present the findings of a survey.', 'Dear Sir or Madam, I am writing to complain.'], why: 'A scene that draws the reader in, linked to the title.' },
        { q: 'The letter: ___', o: ['I am writing in response to your editorial of 3 May, which argued that literature has no place in a modern curriculum.', 'Have you ever wondered why people read novels?', 'This report evaluates the teaching of literature.'], why: 'The reason for writing and the text it responds to, in the first sentence.' },
        { q: 'The report: ___', o: ['The purpose of this report is to evaluate the courses currently offered and to assess the case for a course in public speaking.', 'Picture a nervous student at the front of a silent room.', 'Few courses have divided opinion as sharply as this one.'], why: 'A report states its purpose at once, in an objective register.' },
        { q: 'The review: ___', o: ['Few narrators lie as charmingly, or as revealingly, as the retired editor at the heart of this novel.', 'In conclusion, I would recommend this book.', 'I am writing with regard to the book you published.'], why: 'It draws the reader in and hints at the verdict, with a balanced phrase.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Choose your Part 2 task in the first two minutes and do not change your mind. Pick the task you have the most to **say** about, not the type you think is easiest; then check every part of the task is in your plan, because a missing part costs Content marks however good the language is.' },
    ] },
  ],
  activities: {
    one: { title: 'Against the clock', md: 'The student plans the Part 1 essay in five minutes, then writes the introduction and the paragraph on text 1 in fifteen minutes while you time them and say when ten minutes have gone. Mark the two paragraphs together with the four areas, one comment for each: is the key point paraphrased, is there an evaluation, is anything copied, is the register right? The student rewrites the weakest sentence, then you plan the text 2 paragraph and the view together in three minutes.' },
    small: { title: 'Write, swap, mark', md: 'Each student writes the introduction and the paragraph on text 1 in fifteen minutes, timed. Partners swap and mark with the four areas, one comment for each, and underline any phrase of three or more words copied from the texts. Writers improve one sentence with the comments. Finally the group compares how far each student got in fifteen minutes and agrees on one way to save time in planning.' },
  },
  homework: { book: 'u2:p3 u4:p3 u7:p4 u8:p3', md: 'A timed task under exam conditions. Write the full Part 1 essay on plain English in forty-five minutes, without a dictionary, and stop when the time is up. Then, on another day, write the Part 2 task you chose in class in forty-five minutes, also timed. Count your words, note how long each stage took, and check both against the four marking areas before you send them to your teacher. If you need a reminder, look again at the writing lessons in units 2, 4, 7 and 8.' },
};
