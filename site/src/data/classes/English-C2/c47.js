// English C2, class 47 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u10:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c47',
  focus: 'By the end every student can write a formal letter to a senior reader in the format of C2 Proficiency Writing Part 2: an opening that says who they are, why they are writing and what they want; body paragraphs with reasons, a courteous concession (*I recognise that…* followed by *Nevertheless…*) and a practical proposal; and a close that repeats the request. The tone is direct but courteous: nominalisation rather than emotion, precise reporting, measured hedging, formal requests with the base form (*I would ask that the decision be reviewed*) and a close that matches the greeting.',
  tips: [
    'Use the forwarding test all class: could the first paragraph alone be sent to the person who decides? If it starts with background or memories, the point is not yet first.',
    'Students tend to swing between two faults: anger (*outrageous, absurd*) and over-hedging (*I would perhaps maybe like to suggest*). Ask for one plain request and one courteous acknowledgement in every draft.',
    'The base form after *ask that*, *recommend that*, *it is essential that* surprises many students. Give it as formal British and American usage; *should* + infinitive is also accepted.',
    'A letter to a named reader takes *Yours sincerely* in British convention. Mention it once and check it in every draft rather than spending time on it.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *If you could change one decision made by someone senior at your work, school or city, what would it be?* Each student says it in one sentence starting *I would urge… to reconsider…*' },
    { min: 8, title: 'The point first', md: 'Show board page 1. Students choose the best openings and closes alone, then say why each rejected option would fail the forwarding test.' },
    { min: 10, title: 'Direct but courteous', md: 'Show board page 2. Students fix the sentences in pairs or with you, then read the corrected versions aloud as if to the director.' },
    { min: 9, title: 'Exam corner: Part 3', md: 'Show board page 3: C2 Proficiency Reading and Use of English Part 3. Five minutes alone, then check spelling and the number of changes each word needed.' },
    { min: 20, title: 'Activity', md: 'Show board page 4: the Writing Part 2 task. Use the activity for your class size below.' },
    { min: 5, title: 'Close', md: 'Each student reads their opening paragraph aloud. The others say in one word whether they would forward it. Set the homework: the full letter.' },
  ],
  board: [
    { title: 'The point first', blocks: [
      { t: 'ex', kind: 'choice', h: 'The task is on board page 4. Choose the best answer for the letter.', items: [
        { q: 'Which opening puts the point first?', o: ['I am writing as a member of the theatre’s youth panel to urge you to reconsider the decision to end the under-26 ticket scheme, and to propose a way of funding it.', 'I have been coming to the theatre since I was a child, and I have many happy memories of it.', 'I hope this letter finds you well. I would like to say a few things about tickets.'], why: 'Who the writer is, what they want and what they offer, in one sentence.' },
        { q: 'Which sentence acknowledges the director’s reasons courteously?', o: ['I recognise that the scheme is costly, and that the theatre has lost a significant share of its public funding.', 'Obviously the theatre only cares about money.', 'I suppose you have your reasons.'], why: 'A real concession, specific and respectful, which makes the turn after it stronger.' },
        { q: 'Which close is best?', o: ['I would welcome the opportunity to discuss this proposal with you, and I hope the decision might be reviewed before the new season is announced.', 'Please reply soon, or we will take the matter to the newspapers.', 'Anyway, that is all I wanted to say.'], why: 'It repeats the request and names the next step without a threat.' },
        { q: 'Which greeting and close match in British convention?', o: ['Dear Mr Okafor, … Yours sincerely,', 'Dear Mr Okafor, … Yours faithfully,', 'Dear Sir Okafor, … Best wishes,'], why: 'A named reader takes *Yours sincerely*; *Yours faithfully* follows *Dear Sir or Madam*.' },
      ] },
    ] },
    { title: 'Direct but courteous', blocks: [
      { t: 'ex', kind: 'fix', h: 'Make each sentence right for a formal letter to a senior reader.', items: [
        { s: 'I would ask that the scheme [is] retained for at least one more season.', a: ['be', 'should be'], why: 'The base form after *ask that* in formal English.' },
        { s: 'This decision is [outrageous] and shows no respect for young audiences.', a: ['regrettable', 'unfortunate', 'disappointing'], why: 'Direct but courteous: criticise the decision without anger.' },
        { s: 'It is essential that the scheme [continues] while alternatives are explored.', a: ['continue', 'should continue'], why: 'The base form after *it is essential that*.' },
        { s: 'Young people [are complaining everywhere] about the decision.', a: ['have expressed concern', 'have voiced concern', 'have expressed their concern'], why: 'Precise, measured reporting instead of a vague and emotional claim.' },
        { s: 'I look forward to [hear] from you.', a: ['hearing'], why: '*Look forward to* + *-ing*: *to* is a preposition here.' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 3', blocks: [
      { t: 'ex', kind: 'wordform', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 3, shortened: six gaps instead of eight): read the paragraph from a letter. Use the word in capitals to form a word that fits each gap.', items: [
        { q: 'I recognise that, at current prices, the scheme has become financially ___ for the theatre.', base: 'sustain', a: ['unsustainable'], why: 'Three changes: the prefix *un-*, the suffix *-able* and the adjective form.' },
        { q: 'Nevertheless, its loss would fall ___ on students and young workers.', base: 'proportion', a: ['disproportionately'], why: 'A negative prefix and two suffixes: *dis- + proportion + -ate + -ly*.' },
        { q: 'For many of them, full ticket prices are ___ high.', base: 'prohibit', a: ['prohibitively'], why: 'An adverb before an adjective: *prohibitively expensive* or *high*, so high that people cannot pay.' },
        { q: '___, the decision was announced before the youth panel had met.', base: 'regret', a: ['Regrettably'], why: 'A sentence adverb: *regrettably* (it is to be regretted), not *regretfully* (with a feeling of regret).' },
        { q: 'There was no ___ with the young audiences whom it affects most.', base: 'consult', a: ['consultation'], why: 'A noun after *no*: *consultation with* someone.' },
        { q: 'I would therefore urge the theatre to renew its ___ to them.', base: 'commit', a: ['commitment'], why: 'A noun after *its*: *commitment to* someone.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In **Part 3** at C2 many words need **two or three changes**. Decide the word class from the gap, then check the meaning: here *unsustainable* and *disproportionately* both need a negative or a prefix. *Regrettably* and *regretfully* are a favourite trap.' },
    ] },
    { title: 'Exam corner: Writing Part 2, a letter', blocks: [
      { t: 'reading', title: 'Your task', md: 'In the format of the C2 Proficiency exam (Writing Part 2): write your answer in **280 to 320 words**.\n\nThe director of the national theatre in your city, Mr Okafor, has announced that the scheme offering heavily reduced tickets to people under twenty-six will end next season, because the theatre can no longer afford it. As a member of the theatre’s youth panel, write a letter to the director. Explain the effects you expect the decision to have, acknowledge the reasons given for it and propose a way in which the scheme, or something like it, could continue.' },
      { t: 'table', caption: 'A plan for the letter', explain: ['head', 'col1'], head: ['Paragraph', 'What it does'], rows: [
        ['Opening', 'who you are, why you are writing, what you want'],
        ['Body one', 'the main effect of the decision, with evidence'],
        ['Body two', 'a courteous concession, then a further reason'],
        ['Body three', 'a practical proposal and what it would achieve'],
        ['Close', 'the request again, the next step, *Yours sincerely*'],
      ] },
    ] },
  ],
  activities: {
    one: { title: 'The director reads', md: 'The student writes the opening paragraph and the close of the letter on board page 4 (eight minutes). You then read them aloud as Mr Okafor would, with two minutes to spare, and react honestly: what do you now know, and would you forward the opening to the board? The student revises once. Then they write the concession paragraph (body two, about 70 words), and you check it for tone: a real acknowledgement, a clear turn with *Nevertheless* or *Even so*, and no emotional adjectives.' },
    small: { title: 'Forward it or not', md: 'Each student writes an opening paragraph for the letter on board page 4 in four minutes and posts it in the chat. The group reads them as the director and votes on each: forward it, or not, with one reason. The writer of the strongest opening explains what made it work. Then the group writes the proposal paragraph together: each student adds one sentence in turn, and the next student must keep the tone direct but courteous. Finish by agreeing the closing sentence together.' },
  },
  homework: { book: 'u10:p3', md: 'Finish lesson 3 of unit 10 if needed, then do lesson 4 (A briefing for the board). Write the letter to Mr Okafor from board page 4 in 280 to 320 words and send it to your teacher, with the base form after *ask that* or *it is essential that* at least once.' },
};
