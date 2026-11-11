// English C1, class 94 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u20:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c94',
  focus: 'By the end every student can plan and start a C1 Advanced Writing task against the clock: about ten minutes to plan, thirty to write and five to check for each 220 to 260 word text. For the Part 1 essay they choose two of the three points, give each a balanced paragraph and reach a reasoned choice; for Part 2 they match the text type (email or letter, proposal, report, review) to its reader. They know the four areas the examiners mark: content, communicative achievement, organisation and language.',
  tips: [
    'Time is the hidden difficulty of this paper: 90 minutes for two texts. Today, time the planning strictly. Students who skip the plan write longer and score lower.',
    'The most common content mistake in Part 1 is discussing all three points. The task asks for two and a clear choice between them; depth scores better than coverage.',
    'Students often copy phrases from the task notes. Ask them to paraphrase every note before they write: copied language does not show their range.',
    'Proposals look forward and persuade; reports describe the present and recommend. Students mix them up under pressure, so ask *Who reads it, and what should it make them do?*',
    'At C1 range matters as much as accuracy. Point to less common linkers and structures from the book (*Given that…, Whereas…, Not only… but…*) rather than *firstly, secondly*.',
  ],
  plan: [
    { min: 5, title: 'The paper and the clock', md: 'Show board page 1. Go through the timing and the four marking areas in plain words.' },
    { min: 12, title: 'Planning the essay', md: 'Show board page 2. Students read the task and choose the best plan, then make their own plan for the same task in five minutes.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Writing Part 1. Students write the introduction and the first body paragraph from their plan in twelve minutes, alone.' },
    { min: 10, title: 'Part 2 and register', md: 'Show board page 4. Students choose the best sentence for each text type and say who the reader is.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 5, title: 'Close', md: 'Each student says which marking area they will check first in their homework. Set the homework.' },
  ],
  board: [
    { title: 'The Writing paper and the clock', blocks: [
      { t: 'table', caption: 'C1 Advanced Writing: 1 hour 30 minutes, two tasks of 220 to 260 words', explain: ['head', 'col1'], head: ['Marking area', 'What the examiner asks'], rows: [
        ['Content', 'Does the text do everything the task asks, and nothing irrelevant?'],
        ['Communicative achievement', 'Is the register right for the reader, and does the text hold their attention?'],
        ['Organisation', 'Is it well structured, with clear paragraphs and a range of linking devices?'],
        ['Language', 'Is there a range of vocabulary and grammar, including less common items, used accurately?'],
      ] },
      { t: 'tip', art: 'owl', md: 'For each task allow about **ten minutes to plan, thirty to write and five to check**. Plan the paragraphs, the main idea of each and two or three advanced structures you want to use.' },
    ] },
    { title: 'Planning the essay', blocks: [
      { t: 'text', md: '**Task:** *Your class has attended a lecture on how cities can reduce tension between people who use public spaces in different ways. You have made the notes below. Write an essay discussing **two** of the methods in your notes. You should explain which method you think is more effective, giving reasons in support of your answer.* **Notes:** *clear rules for each space; designing spaces that separate uses; public consultation before changes.* **Opinions heard:** *“Rules only work if someone enforces them.” “People respect what they helped to plan.”*' },
      { t: 'ex', kind: 'choice', h: 'Which plan best answers the task?', items: [
        { q: 'Choose the best plan for a 220 to 260 word essay.', o: ['Introduction: the problem; paragraph on design, with a strength and a limit; paragraph on consultation, with a strength and a limit; conclusion: consultation is more effective, because people respect what they helped to plan.', 'Introduction; one short paragraph on each of the three methods; conclusion: all three are important.', 'Introduction; a long story about a park in my town; conclusion: cities should spend more money.'], why: 'Two methods, balanced paragraphs and a reasoned choice; the opinion is paraphrased, not copied.' },
        { q: 'Which sentence paraphrases one of the opinions in the notes?', o: ['Residents are far more likely to protect a space they have had a say in shaping.', 'People respect what they helped to plan.', 'Rules only work if someone enforces them.'], why: 'The same idea in your own words shows range; the other two are copied.' },
        { q: 'Which conclusion gives a clear, reasoned choice?', o: ['On balance, I would argue that consultation is the more effective approach, since it gives people a reason to respect the result.', 'Both methods have advantages and disadvantages.', 'In conclusion, there are many ways to reduce tension in cities.'], why: 'The task asks which method is more effective, with a reason.' },
      ] },
    ] },
    { title: 'Exam corner: Writing Part 1', blocks: [
      { t: 'text', md: 'In the format of the C1 Advanced exam (Writing Part 1): using your plan, write the introduction and the first body paragraph of the essay on board page 2 in twelve minutes. Your teacher will read them. At home, finish the essay in 220 to 260 words.' },
      { t: 'examples', items: [
        { s: '**Few things** divide a neighbourhood **as quickly as** a shared space that nobody feels responsible for.', n: 'An opening that states the problem with a comparative structure.' },
        { s: '**Given that** most conflicts arise from competing uses, careful design **would seem** an obvious answer.', n: 'A linker of reason and a hedge.' },
        { s: '**Its great strength lies in** prevention; **its weakness**, however, **is** cost.', n: 'A balanced paragraph in one sentence.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Write one main idea per paragraph and open each with a sentence that tells the reader what the paragraph is about. Keep the opinion for the conclusion, where the task asks for it.' },
    ] },
    { title: 'Part 2: the right text for the reader', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Writing Part 2): choose the best sentence for each task.', items: [
        { q: 'The opening of a report for your manager on how well a new booking system is working:', o: ['The aim of this report is to assess how well the new booking system has worked since its introduction and to recommend improvements.', 'Imagine a world where booking a room took seconds!', 'I am writing to complain about the new booking system.'], why: 'A report states its purpose in a neutral style and looks at the present.' },
        { q: 'A sentence from a proposal to the college for a quiet study room:', o: ['If adopted, this plan would give students a calm place to work and reduce noise in the library.', 'The library has been noisy for some time.', 'Last week I saw a great film about libraries.'], why: 'A proposal looks forward and persuades with benefits.' },
        { q: 'The closing line of a review of a new restaurant for a magazine:', o: ['Despite the slow service, it is well worth a visit for the desserts alone.', 'I look forward to hearing from you.', 'In conclusion, the aim of this report was to describe the restaurant.'], why: 'A review ends with a recommendation for the reader.' },
        { q: 'The opening of a letter to a local councillor about a parking dispute:', o: ['I am writing with regard to the ongoing dispute over parking on Mill Street.', 'Hi! Hope you’re well.', 'This report will examine parking.'], why: 'A formal letter states its reason for writing in a polite, neutral register.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Live edit', md: 'Read the student’s introduction and first paragraph together on the board. Mark one example for each marking area, one thing done well and one to improve, then rewrite one sentence together to raise its range (a cleft, an inversion, a less common linker). The student finishes the paragraph again in three minutes.' },
    small: { title: 'Peer examiners', md: 'Students swap their paragraphs in the chat. Each reader comments on content and organisation only: are two methods planned, is there one idea per paragraph, is the opinion paraphrased? Then swap back and each writer improves one sentence.' },
    group: { title: 'Plan race', md: 'Breakout rooms of three each get a different Part 2 task in the chat (a report, a proposal, a review, a formal letter). In six minutes each room plans the text: the reader, the headings or paragraphs and the opening sentence. Back together, rooms share their plans and the others check the register.' },
  },
  homework: { book: 'u20:p3', md: 'Finish lesson 3 of unit 20 if needed, then do lesson 4 (The C1 Advanced exam, step by step). Finish the essay from class in 220 to 260 words, in no more than 45 minutes in total, check it once for content and once for language, and send it to your teacher, who will correct it.' },
};
