// English C1, class 76 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u16:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c76',
  focus: 'By the end every student can plan a proposal for C1 Advanced Writing Part 2: a title and headings that match the task, a brief description of the need, recommendations each with a benefit, and a conclusion that asks clearly for a decision. The language goal is the formal recommending voice: *I would recommend that the college offer…*, *It is proposed that…*, *This would enable…*, *Should these proposals be adopted, …*.',
  tips: [
    'A proposal looks forward and a report looks back. If a student’s plan spends most of its words describing what happened, ask: *What do you want the reader to decide?*',
    'After *recommend, propose, suggest* and *It is essential that*, the base form (*that the library open*) or *should* (*that the library should open*) are both correct in British English. Never accept *recommend the college to open*.',
    'Every recommendation needs a benefit. Make students say *because…* or *This would…* after each idea before they write it down.',
    'Headings are expected in a proposal, and they should match the task points. Students who choose clear headings plan faster in the exam.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *If your workplace or school had money for one improvement, what should it be?* Each student answers in one sentence with a reason.' },
    { min: 10, title: 'Which section?', md: 'Show board page 1. Students sort the sentences into the sections of a proposal, then say what each section does.' },
    { min: 12, title: 'Recommending formally', md: 'Show board page 2. Students fix the recommending structures and explain the pattern after each verb or adjective.' },
    { min: 15, title: 'Exam corner', md: 'Board page 3: C1 Advanced Writing Part 2. Students read the task, answer the planning questions, then write their headings and one recommendation with its benefit. Two students read theirs aloud.' },
    { min: 13, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 5, title: 'Close', md: 'Each student says their strongest recommendation and its benefit in one sentence. Set the homework.' },
  ],
  board: [
    { title: 'Which section?', blocks: [
      { t: 'table', caption: 'A plan for a proposal', explain: ['head', 'col1'], head: ['Section', 'What it does', 'Useful language'], rows: [
        ['Introduction', 'who it is for and what it aims to do', 'The aim of this proposal is to…'],
        ['Current situation', 'the need, briefly and fairly', 'At present, … / Many members have said…'],
        ['Recommendations', 'each suggestion with details', 'I would recommend that… / It is proposed that…'],
        ['Benefits', 'why each idea will work', 'This would enable… / The main advantage would be…'],
        ['Conclusion', 'a confident request for a decision', 'Should these proposals be adopted, …'],
      ] },
      { t: 'ex', kind: 'sort', h: 'Which section of a proposal is each sentence from?', groups: ['current situation', 'recommendations', 'benefits', 'conclusion'], explain: ['groups'], items: [
        { s: 'At present, the sports hall is closed every weekend.', g: 0, why: 'Describes the need now.' },
        { s: 'Many parents have said they cannot find childcare after four.', g: 0, why: 'Evidence of the need.' },
        { s: 'It is proposed that the hall open on Saturday mornings.', g: 1, why: 'A formal recommendation.' },
        { s: 'I would recommend that older students be trained as coaches.', g: 1, why: 'A recommendation with the subjunctive.' },
        { s: 'This would enable younger pupils to try new sports at low cost.', g: 2, why: 'The result of saying yes.' },
        { s: 'Should these suggestions be accepted, I am confident the hall will be fully used.', g: 3, why: 'A confident close with inversion.' },
      ] },
    ] },
    { title: 'Recommending formally', blocks: [
      { t: 'ex', kind: 'fix', h: 'Make each sentence right for a formal proposal.', items: [
        { s: 'I suggest the company [to provide] free language lessons.', a: ['provide', 'should provide'], why: '*Suggest that* + subject + base form or *should*; never object + infinitive.' },
        { s: 'It is vital that every new employee [receives] training in the first month.', a: ['receive', 'should receive'], why: 'After *It is vital that*: the base form or *should*.' },
        { s: 'We recommend that the canteen [opens] earlier.', a: ['open', 'should open'], why: 'Formal recommending: base form, no *-s*.' },
        { s: '[If] these proposals be adopted, attendance would rise.', a: ['Should'], why: 'Inverted conditional: *Should these proposals be adopted*.' },
        { s: 'A later closing time would enable students [studying] in the evening.', a: ['to study'], why: '*Enable* someone *to do* something: the infinitive.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Use passives and nouns to keep the focus on the idea: *Attendance could easily be recorded* sounds more like a proposal than *We could count the people*.' },
    ] },
    { title: 'Exam corner: Writing Part 2', blocks: [
      { t: 'reading', title: 'Your task', md: 'In the format of the C1 Advanced exam (Writing Part 2), write your answer in 220 to 260 words.\n\nThe library in your town has been given money to attract more young people between sixteen and twenty-five. The director has asked for proposals. Write a proposal explaining why few young people use the library at present, recommending two or three changes, and saying how the library could find out whether the changes have worked.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Writing Part 2): check your plan before you write.', items: [
        { q: 'Which set of headings covers the task?', o: ['Introduction, The current situation, Recommendations, Measuring success, Conclusion', 'Introduction, My favourite books, Conclusion', 'Problems with the staff, What young people want, Goodbye'], why: 'One section for each task point, plus an introduction and a conclusion.' },
        { q: 'Which sentence belongs in the current situation section?', o: ['At present, the library closes at six, before most students finish classes.', 'The library should open a café.', 'I am confident these ideas will succeed.'], why: 'It describes the need precisely and fairly.' },
        { q: 'Which recommendation is best?', o: ['I would recommend that the library open until nine on weekdays, which would allow students to study after classes.', 'Open later.', 'The library is boring and should change everything.'], why: 'A formal recommendation with a specific detail and a benefit.' },
        { q: 'What should the conclusion do?', o: ['Ask clearly for a decision and sum up the main benefit', 'Add a new recommendation', 'Tell a story about your last visit'], why: 'A proposal ends with a confident request, not new ideas.' },
      ] },
      { t: 'tip', md: 'Choose the proposal in Part 2 when you can picture real, specific suggestions. Give each recommendation a benefit, match the headings to the task points and end with a clear request.' },
    ] },
  ],
  activities: {
    one: { title: 'The decision maker', md: 'You play the library director. The student presents their proposal from board page 3 in two minutes, using the formal language. You ask two difficult questions (*How much would that cost? Why would young people come?*); the student answers with a benefit each time. Then swap: you propose something weak and the student finds what is missing.' },
    small: { title: 'Pitch and vote', md: 'Each student has three minutes to plan one recommendation for your class or workplace (a resource, a change of timetable, a new activity), with a benefit and a way to measure success. They present it formally; the group votes for the proposal they would accept and says what made it convincing.' },
    group: { title: 'Proposal committee', md: 'Breakout rooms of three, each with the task on board page 3. Each room agrees on headings and writes two recommendations with benefits in the chat. Back together, rooms read their recommendations and the class, as the library director, chooses which to fund and why.' },
  },
  homework: { book: 'u16:p4', md: 'Finish lesson 4 of unit 16. Write the proposal from board page 3 in 220 to 260 words and send it to your teacher for correction. Before the review class, look back at units 15 and 16 and note the two points you find hardest.' },
};
