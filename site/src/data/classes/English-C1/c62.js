// English C1, class 62 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u13:p4 (writing a review). Draft for the owner's review.
export const LESSON = {
  id: 'c62',
  focus: 'By the end every student knows what a C1 review needs in the format of C1 Advanced Writing Part 2 (220 to 260 words): a title that hints at the verdict, an opening that draws the reader in, short description, most of the text on evaluation, the task’s angle answered clearly, and a verdict for a named reader. Every student plans a review in class and writes its opening and one evaluation paragraph, using the language of unit 13.',
  tips: [
    'The commonest problem at this level is still too much plot. Set a rule for today: no more than two sentences of description.',
    'Every Part 2 task has an angle (*say how it compares with…*, *explain why it surprised you*). Students lose Content marks when they forget it. Make them underline it in the task before they plan.',
    'Register: a review talks to the reader of a real website or magazine. It can be lively and personal, but it is not an essay; *In conclusion, the advantages outweigh the disadvantages* does not belong in it.',
    'Mark with the four areas: Content, Communicative achievement, Organisation and Language. Give one strength and one thing to improve for each; peer marking teaches the criteria fastest.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *When did a review last change your mind about seeing or reading something? What did it say?* Collect two or three answers.' },
    { min: 10, title: 'The parts of a review', md: 'Show board page 1. Students match each part of a review with its job, then say which part should be longest.' },
    { min: 10, title: 'Useful language', md: 'Show board page 2. Students sort the sentences into opening, evaluation and verdict, then choose the strongest title.' },
    { min: 10, title: 'The task and the plan', md: 'Show board page 3. Read the task together, underline the angle, and students plan their review in five short notes.' },
    { min: 20, title: 'Activity: write and mark', md: 'Use the activity for your class size below. Students write the title, the opening and one evaluation paragraph in fifteen minutes, then mark with the four areas.' },
    { min: 5, title: 'Close', md: 'Each student reads their title aloud and says who they will recommend the event to. Set the homework.' },
  ],
  board: [
    { title: 'The parts of a review', blocks: [
      { t: 'ex', kind: 'match', h: 'Match each part of a C1 review with its job.', pairs: [
        ['the title', 'names the work and hints at the verdict'],
        ['the opening', 'draws the reader in and says what the work is'],
        ['the description', 'gives only what the reader needs, with no spoilers'],
        ['the evaluation', 'weighs strengths and weaknesses with precise reasons'],
        ['the verdict', 'answers the task’s angle and recommends to a named reader'],
      ] },
      { t: 'tip', art: 'owl', md: 'At C1 the evaluation is the heart of the review: plan for two paragraphs of it and only a few sentences of description.' },
    ] },
    { title: 'Useful language', blocks: [
      { t: 'ex', kind: 'sort', h: 'Which part of a review does each sentence belong to?', groups: ['opening', 'evaluation', 'verdict'], explain: ['groups'], items: [
        { s: 'If you think a jazz festival is only for jazz fans, think again.', g: 0, why: 'It challenges the reader’s expectations and draws them in.' },
        { s: 'What lifts the evening is the way in which the acoustics change from hall to hall.', g: 1, why: 'A precise reason for praise.' },
        { s: 'The sound in the main tent, however, was painfully muddy at times.', g: 1, why: 'A fair, specific criticism.' },
        { s: 'Even at forty pounds a ticket, it is well worth it for anyone curious about live music.', g: 2, why: 'It answers the angle and recommends to a named reader.' },
        { s: 'Few events in the city arrive with as much noise as this one.', g: 0, why: 'A lively first line.' },
      ] },
      { t: 'ex', kind: 'choice', h: 'Choose the best title for a review of a mixed but memorable festival.', items: [
        { q: '', o: ['Riverside Jazz Festival: messy, crowded and utterly unmissable', 'My review of the festival', 'A festival that happened last weekend'], why: 'It names the event and hints at a balanced verdict.' },
      ] },
    ] },
    { title: 'Exam task: Writing Part 2', blocks: [
      { t: 'text', md: 'In the format of C1 Advanced Writing Part 2. **You see this on a culture magazine’s website:** *Live and in person. We want reviews of a concert, festival or other live event you attended recently. Describe the event briefly, evaluate the atmosphere and the performances, and tell our readers whether it was worth the price of the ticket.* **Write your review in 220 to 260 words.**' },
      { t: 'ex', kind: 'choice', h: 'Which plan covers the whole task?', items: [
        { q: '', o: ['Title; opening; two sentences of description; atmosphere and performances, with a strength and a weakness; value for money and a verdict for the reader.', 'Title; the history of the band; every song in order; conclusion.', 'Opening; description of the venue and the travel there; my opinion of the ticket website.'], why: 'All three parts of the task are there, including the angle: value for the price of the ticket.' },
      ] },
      { t: 'tip', md: 'Use the language of unit 13 where it fits naturally: two modifiers (*painfully muddy, utterly unmissable*), one advanced relative clause (*by which time…*) and one concession (*For all its flaws…*). One precise phrase is worth more than five *amazing*s.' },
    ] },
  ],
  activities: {
    one: { title: 'Timed paragraphs', md: 'The student plans the review (five minutes) and writes the title, the opening and one evaluation paragraph (fifteen minutes) while you wait. Mark together with the four areas; the student finds one improvement for each and rewrites the weaker paragraph.' },
    small: { title: 'Write, swap, mark', md: 'Each student writes the title, the opening and one evaluation paragraph in fifteen minutes. Swap with a partner, who marks with the four areas and gives one comment for each. Writers improve their paragraph with the comments.' },
    group: { title: 'Editors for a day', md: 'Everyone writes the title, the opening and one evaluation paragraph (fifteen minutes). In breakout rooms of three, students read each other’s work and choose the opening that would make a reader carry on, and say why. Back together, each room shares one strong sentence and one common mistake.' },
  },
  homework: { book: 'u13:p4', md: 'Finish book lesson 4 of unit 13 if needed and write the full review for the task on the board in 220 to 260 words; send it to your teacher. Then do lesson 1 of unit 14 (A great deal of money, a handful of shops).' },
};
