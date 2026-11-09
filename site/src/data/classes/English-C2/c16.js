// English C2, class 16 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u4:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c16',
  focus: 'By the end every student reports other writers with a verb that shows exactly what they did (*contend, maintain, assert, posit, concede, acknowledge, dispute, question, refute, rebut*), with the right pattern after it, and packs a clause into an academic noun phrase (*the extent to which, the lack of, the assumption that, the implications of, a marked fall in*). The speaking goal: summarise a debate fairly, showing both the writers’ stance and the student’s own.',
  tips: [
    '*Refute* is the verb to watch. In academic English it means to prove false; in the news it is often used for *deny*. Ask each time: *Did they show it was false, or only say so?*',
    'Reporting verbs carry the writer’s attitude too. *She asserts that…* hints that the claim lacks support; *she shows that…* accepts it. Ask students which verb is fair to the author.',
    'Noun phrases are a means, not a goal. A paragraph made only of nominalisations is hard to read. Ask for one dense subject followed by a clear verb: *The lack of staff meant that…*',
    'For word formation, insist on the full word written out with spelling checked. At C2 most answers need two changes, and one wrong letter loses the mark.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Think of an argument you have read or heard recently. What did the person actually do: claim, admit, deny, prove?* Collect the verbs students use and put them on the board.' },
    { min: 12, title: 'The right reporting verb', md: 'Show board page 1. Students choose alone, then say which word in each sentence decided the verb.' },
    { min: 10, title: 'Clauses into noun phrases', md: 'Show board page 2, then page 3. Students rewrite the sentences from the words given, then fix the mistakes and explain each one.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 4: C2 Proficiency Reading and Use of English Part 3. Eight minutes alone, then check together. For each answer, name the changes made to the stem.' },
    { min: 5, title: 'Close', md: 'Each student reports one classmate’s view from the activity in a single sentence with a reporting verb and a noun phrase. Set the homework.' },
  ],
  board: [
    { title: 'The right reporting verb', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the reporting verb that fits what the writer did.', items: [
        { q: 'The authors ___ that their sample came from a single city and may not be typical.', o: ['acknowledge', 'assert', 'refute'], why: 'They admit a weakness in their own study.' },
        { q: 'Drawing on fieldwork in three villages, the study ___ a link between land ownership and school attendance.', o: ['posits', 'concedes', 'rebuts'], why: '*Posit* + noun: put forward an idea as a basis for argument.' },
        { q: 'A larger trial in 2019 ___ the claim: the effect disappeared once diet was taken into account.', o: ['refuted', 'disputed', 'asserted'], why: 'The new evidence showed the claim to be false.' },
        { q: 'Several reviewers ___ whether the interviews had been conducted in the participants’ own language.', o: ['questioned', 'contended', 'maintained'], why: '*Question whether*: express doubt. *Contend* and *maintain* need *that*.' },
        { q: 'Ten years and many critics later, she still ___ that her original reading of the poem is correct.', o: ['maintains', 'concedes', 'posits'], why: 'Holding a position against opposition.' },
        { q: 'In a long reply, the author ___ each objection in turn, though not every reader was persuaded.', o: ['rebutted', 'refuted', 'conceded'], why: 'She argued against them; if she had refuted them, readers would have no reason to remain unpersuaded.' },
      ] },
    ] },
    { title: 'Clauses into noun phrases', blocks: [
      { t: 'ex', kind: 'transform', h: 'Rewrite each sentence with a noun phrase, starting with the words given.', items: [
        { q: 'How far online lessons help younger children is still unclear.', cue: 'The extent to which', a: ['The extent to which online lessons help younger children is still unclear.', 'The extent to which online lessons help younger children remains unclear.'], why: 'The frame needs *to which*; the clause after it keeps its own verb.' },
        { q: 'Crime in the city centre has fallen sharply since 2020.', cue: 'There has been', a: ['There has been a sharp fall in crime in the city centre since 2020.', 'There has been a marked fall in crime in the city centre since 2020.', 'There has been a sharp decline in crime in the city centre since 2020.', 'There has been a marked decline in crime in the city centre since 2020.', 'There has been a sharp drop in crime in the city centre since 2020.'], why: 'The verb *fall* becomes the noun *a fall in*, and the adverb becomes an adjective.' },
        { q: 'The hospital did not have enough staff, so operations were cancelled.', cue: 'The lack of', a: ['The lack of staff at the hospital meant that operations were cancelled.', 'The lack of staff at the hospital meant operations were cancelled.', 'The lack of staff at the hospital led to the cancellation of operations.', 'The lack of staff at the hospital led to operations being cancelled.'], why: '*The lack of* + noun becomes the subject, and *meant that* or *led to* carries the result.' },
        { q: 'Many people assume that older workers cannot learn new technology, and they are wrong.', cue: 'The assumption that', a: ['The assumption that older workers cannot learn new technology is wrong.', 'The assumption that older workers cannot learn new technology is mistaken.', 'The assumption that older workers cannot learn new technology is false.'], why: '*The assumption that* + clause: a whole belief becomes one subject.' },
        { q: 'Nobody has yet considered what the ruling means for small businesses.', cue: 'The implications of', a: ['The implications of the ruling for small businesses have not yet been considered.', 'The implications of the ruling for small businesses have yet to be considered.'], why: '*The implications of X for Y*; the plural subject takes *have*.' },
      ] },
    ] },
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'The spokesperson [refuted] the accusations but offered no evidence.', a: ['denied', 'rejected'], why: 'Without evidence nothing was proved false, so *refute* is wrong.' },
        { s: 'Researchers have gathered a substantial body of [evidences] on the question.', a: ['evidence'], why: '*Evidence* is uncountable.' },
        { s: 'The degree [which] diet affects mood is not yet known.', a: ['to which'], why: 'The frame is *the degree to which*.' },
        { s: 'The article [posits about] a connection between noise and stress.', a: ['posits'], why: '*Posit* takes a direct object or *that*.' },
        { s: 'Hall [contends to have] found the original manuscript.', a: ['contends that she has', 'contends that he has', 'claims to have'], why: '*Contend* takes a *that*-clause, not an infinitive; *claim* can take either.' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 3', blocks: [
      { t: 'ex', kind: 'wordform', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 3): read the text about a local legend, in order. Use the word in capitals to form a word that fits each gap.', items: [
        { q: 'Few local stories have proved as ___ as the claim that the town was founded by monks.', base: 'endure', a: ['enduring'], why: 'An adjective after *as*: *enduring* = lasting a long time.' },
        { q: 'The story rests largely on a single ___ document,', base: 'date', a: ['undated'], why: 'Two changes: the negative prefix and the past participle used as an adjective.' },
        { q: 'whose ___ has never been established.', base: 'authentic', a: ['authenticity'], why: 'A noun after *whose*.' },
        { q: 'Earlier historians accepted it ___,', base: 'critic', a: ['uncritically'], why: 'An adverb with a negative prefix: they did not question it.' },
        { q: 'perhaps because it offered such an ___ satisfying origin for the abbey.', base: 'emotion', a: ['emotionally'], why: 'An adverb before the adjective *satisfying*.' },
        { q: 'Recent excavations, however, point to a ___ of settlement going back to Roman times,', base: 'continue', a: ['continuity'], why: 'A noun after *a*; *continuation* means carrying on after a pause, not unbroken settlement.' },
        { q: 'which makes the monastic account all but ___.', base: 'tenable', a: ['untenable'], why: '*All but* = almost; the sense is negative: impossible to defend.' },
        { q: 'The question now is less whether the legend is true than why it has shown such ___.', base: 'persist', a: ['persistence'], why: 'A noun after *such*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Method for **Part 3**: read the whole text once for sense, then at each gap decide the word class, check whether the meaning is negative (*all but*, *accepted it without question*), and check plural or singular. Academic texts often need two changes, so ask whether a prefix is also missing before you move on.' },
    ] },
  ],
  activities: {
    one: { title: 'Report the debate', md: 'The student chooses a debate in their field or in the news and summarises it in about two minutes as if for a seminar: who argues what, who concedes what, who disputes whom. Interrupt to ask *Did they prove it or only say it?* and *Is that verb fair to them?* Then the student adds one sentence of their own view. Write the best three sentences on the board.' },
    small: { title: 'Who said what', md: 'Give the group a question (for example *Should museums return objects to their countries of origin?*). Each student gives their opinion in two sentences. The next student reports it with a reporting verb that is fair (*Lina maintains that…, though she concedes that…*). The original speaker says whether the verb is fair. After one round, each student summarises the whole discussion in three sentences with at least one noun phrase.' },
  },
  homework: { book: 'u4:p2', md: 'Finish lesson 2 of unit 4 if needed, then do lesson 3 (Two texts, one essay). Write a paragraph of about 150 words reporting two writers who disagree on a question you care about: use four different reporting verbs correctly and at least two noun phrase frames from today.' },
};
