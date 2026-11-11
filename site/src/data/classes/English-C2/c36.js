// English C2, class 36 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u8:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c36',
  focus: 'By the end every student writes a close-reading paragraph that makes a point, quotes briefly inside their own sentence, explains the effect and connects the detail to the whole text, and plans and starts a review in the format of C2 Proficiency Writing Part 2 (280 to 320 words): an opening that draws the reader in, a short description without spoilers, argued praise and criticism in proportion, and a recommendation for a named kind of reader.',
  tips: [
    'The commonest weakness in both tasks is retelling. When a student writes *Then she goes to the jetty*, ask *And what does that show?* A close reading explains how a text works; a review judges it.',
    'Quotations should be short and embedded: a word or a phrase inside the student’s own sentence, not a whole line followed by *This is a simile*.',
    'A C2 review needs precise, argued praise (*the prose is spare without being thin*) rather than *amazing* and *very good*. Recycle the language of evaluation from the book and ask for one concession: *For all its strengths…*',
    'Keep the verdict consistent. Three paragraphs of complaint followed by *I highly recommend it* confuse the reader and lose marks for Communicative achievement.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What is a book, film or series you would give to a friend, and which friend would it be?* Each student answers in two sentences; note one precise phrase of praise for later.' },
    { min: 10, title: 'A close-reading paragraph', md: 'Show board page 1. Students sort the parts of the paragraph, then say what the connection sentence adds that the others do not.' },
    { min: 10, title: 'Weak and strong', md: 'Show board page 2. Students choose the strongest sentence for each part of a review, then choose the words of evaluation.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: the Part 2 review task and the plan. Students choose their film, book or series and plan the five parts in five minutes.' },
    { min: 20, title: 'Activity', md: 'Use the activity for your class size below. Students write the opening and the evaluation paragraph in fifteen minutes, then check them.' },
    { min: 5, title: 'Close', md: 'Each student reads their review title and first sentence aloud. Set the homework.' },
  ],
  board: [
    { title: 'A close-reading paragraph', blocks: [
      { t: 'text', md: 'A paragraph on the extract “Winter Harbour” from class 34, in four parts. Read it as one paragraph, then sort the parts.' },
      { t: 'ex', kind: 'sort', h: 'Which part of a close-reading paragraph is each one?', groups: ['point', 'evidence', 'effect', 'connection'], explain: ['groups'], items: [
        { s: 'The narrator presents the harbour as a town that has stopped living rather than one that is simply resting.', g: 0, why: 'A claim about the text, in the writer’s own words.' },
        { s: 'the boats lie “like patients in a ward”', g: 1, why: 'A short quotation, embedded in the writer’s sentence.' },
        { s: 'a simile that evokes not only stillness but a quiet, shared suffering', g: 2, why: 'It explains what the image carries across.' },
        { s: 'This prepares us for the stopped clock in the final sentence, where the cause of the stillness is finally named.', g: 3, why: 'It links the detail to the text as a whole.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Write the point **first**, in your own words, before you look for a quotation. Then choose the shortest evidence that proves it: often two or three words are enough.' },
    ] },
    { title: 'Weak and strong', blocks: [
      { t: 'ex', kind: 'choice', h: 'Choose the strongest sentence for each part of a review.', items: [
        { q: 'The opening', o: ['Few films have captured the stillness of a northern port in winter as faithfully as this one.', 'In this review I am going to write about a film I saw.', 'The film starts when a woman arrives at a harbour and then she goes to her father’s house.'], why: 'It draws the reader in and hints at the verdict; the third retells the plot.' },
        { q: 'The evaluation', o: ['The dialogue is spare without being thin, and the silences say as much as the words.', 'The film is amazing and the acting is very good.', 'The film has advantages and disadvantages.'], why: 'Precise, argued praise with a balanced phrase.' },
        { q: 'The criticism', o: ['If the film has a weakness, it is a final twenty minutes that explain what the rest had wisely left unsaid.', 'The ending is terrible and ruins everything, but I highly recommend it.', 'There are also some bad things.'], why: 'A concession in proportion to a positive verdict, with a reason.' },
        { q: 'The recommendation', o: ['Anyone who has lived by the sea will recognise its winters; anyone who has not will want to.', 'In conclusion, it is a good film.', 'I hope you enjoyed reading my review.'], why: 'A closing judgement for a named kind of reader, with a balanced rhythm.' },
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the word that completes the language of evaluation.', items: [
        { q: 'The secondary characters are ___ drawn.', o: ['thinly', 'slimly', 'lightly'], why: '*Thinly drawn*: not developed.' },
        { q: 'At times the symbolism is ___-handed.', o: ['heavy', 'hard', 'strong'], why: '*Heavy-handed*: too obvious.' },
        { q: 'The middle section loses ___.', o: ['momentum', 'speed', 'motion'], why: '*Lose momentum*: slow down and lose energy.' },
        { q: 'For all its strengths, the novel is not ___ its flaws.', o: ['without', 'free', 'lacking'], why: '*Not without its flaws*: a polite understatement (unit 1).' },
        { q: 'It deserves a far wider ___.', o: ['readership', 'reading', 'readers’ club'], why: '*Deserve a wider readership* (or *audience* for a film).' },
      ] },
    ] },
    { title: 'Exam corner: Writing Part 2, a review', blocks: [
      { t: 'text', md: 'In the format of the C2 Proficiency exam (Writing Part 2): **A cultural website is running a series called “A place on the page”. Write a review of a novel, film or series set in a place you know or would like to know. Describe it briefly, evaluate how well it brings the place to life, and say whether people who know the place would recognise it.** Write **280 to 320 words**.' },
      { t: 'table', caption: 'A plan for the review (280 to 320 words, about forty-five minutes)', explain: ['head', 'col1', 'col2'], head: ['Part', 'What it does', 'A possible start'], rows: [
        ['title', 'the work and a hint of your verdict', '“Winter Light”: a harbour you can almost smell'],
        ['opening', 'draws the reader in and says what the work is', 'Few films have captured…'],
        ['brief description', 'setting and situation, no spoilers', 'Set in…, it follows… over a single winter.'],
        ['evaluation', 'how the place is brought to life, with precise evidence, and one concession', 'What lifts the film is… / If it has a weakness…'],
        ['recommendation', 'answers the last part of the task for a named kind of reader', 'Anyone who knows… will recognise…'],
      ] },
      { t: 'tip', art: 'owl', md: 'The task has three parts: describe, evaluate, and say whether people who know the place would recognise it. The last part is the one most often forgotten, and it is a Content mark. Write it into your plan before you start.' },
    ] },
  ],
  activities: {
    one: { title: 'Opening and evaluation, timed', md: 'The student plans the review (five minutes) and writes the opening and the evaluation paragraph (fifteen minutes) while you wait. Read them together: is there retelling where there should be judgement, is the praise precise, is the concession in proportion? The student rewrites one sentence with a phrase from board page 2, and you check that the plan answers all three parts of the task.' },
    small: { title: 'Write, swap, judge', md: 'Each student writes the opening and the evaluation paragraph in fifteen minutes. Partners swap and mark three things: one sentence that judges rather than retells, one phrase of precise praise or criticism, and whether the verdict is consistent. Writers revise one sentence. Finally each student reads their opening aloud and the group says whether it would make them read on, and why.' },
  },
  homework: { book: 'u8:p3 u8:p4', md: 'Finish the review for “A place on the page” in 280 to 320 words, in about forty-five minutes, and check it against the plan before you send it to your teacher. Then do lesson 4 of unit 8 (A story and its critic).' },
};
