// English C1, class 20 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u5:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c20',
  focus: 'By the end every student reports claims precisely and keeps their distance from them with passive reporting structures and the right infinitive: *is said to be*, *is thought to be doing*, *is alleged to have done*, *is believed to have been doing*, *is reported to have been done*, and the *it*-pattern (*It has been suggested that…*). The speaking goal: retell a science news story as a newsreader would, without vouching for what is claimed.',
  tips: [
    'The infinitive carries two pieces of information: when the action happened compared with the reporting, and whether it is active or passive. Draw a simple timeline on the board for *is thought to be racing* and *is alleged to have hidden*.',
    'A past date needs the perfect infinitive: *The bridge is said to have been built in 1820*, not *to be built*.',
    '*Suggest*, *propose* and *recommend* only work with the *it*-pattern: *It was suggested that the trial (should) stop*, never *The trial was suggested to stop*.',
    'Do not mix the patterns: *It is believed the drug to be safe* is wrong. Either *It is believed that the drug is safe* or *The drug is believed to be safe*.',
    'The verbs differ in tone: *allege* is an unproved accusation, *is understood to* suggests inside information, *is known to* is established. Ask students which a careful journalist would choose.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Say: *I read that a famous scientist hid her results for years.* Ask: *Would a newspaper write it like that? Why not?* Collect ideas about how journalists avoid saying something is true.' },
    { min: 12, title: 'The right infinitive', md: 'Show board page 1. Students choose the infinitive, then say for each one whether the action is at the same time, earlier, in progress or passive.' },
    { min: 10, title: 'Common mistakes', md: 'Show board page 2. Students fix the sentences in pairs and say which pattern they used, personal or *it*.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 4. Students rewrite alone, count their words, then compare. Reveal the answers.' },
    { min: 5, title: 'Close', md: 'Each student reports one thing they have heard about a famous person or place, with a different reporting verb. Set the homework.' },
  ],
  board: [
    { title: 'The right infinitive', blocks: [
      { t: 'table', caption: 'Reporting verb + infinitive', explain: ['head', 'col0'], head: ['Time and voice', 'Infinitive', 'Example'], rows: [
        ['same time, or a general fact', 'to + verb', 'The plant is known to grow only above 2,000 metres.'],
        ['in progress at the time', 'to be + -ing', 'The two labs are thought to be working on the same idea.'],
        ['earlier than the reporting', 'to have + past participle', 'The researcher is alleged to have copied the data.'],
        ['over a period up to then', 'to have been + -ing', 'The team is believed to have been testing it for years.'],
        ['passive, earlier', 'to have been + past participle', 'The samples are reported to have been lost.'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the infinitive that gives the right time and voice.', items: [
        { q: 'The meteorite is believed ___ about 4 billion years ago.', o: ['to have formed', 'to form', 'to be forming'], why: 'The formation was long before the belief: perfect infinitive.' },
        { q: 'The professor is understood ___ a book about the scandal.', o: ['to be writing', 'to have been written', 'to write'], why: 'In progress now: *to be* + *-ing*.' },
        { q: 'The vaccine is expected ___ by the end of the year.', o: ['to be approved', 'to have approved', 'to approve'], why: 'Future and passive: someone will approve it.' },
        { q: 'The company is alleged ___ the safety tests for months.', o: ['to have been ignoring', 'to be ignored', 'to ignore'], why: 'An activity over a period up to the report: *to have been* + *-ing*.' },
      ] },
    ] },
    { title: 'Common mistakes', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'The museum is said [to be built] in 1850.', a: ['to have been built'], why: 'A past date and a passive: *to have been built*.' },
        { s: 'It is believed [the drug to be] safe for children.', a: ['that the drug is', 'the drug is'], why: 'Do not mix the patterns: *It is believed that the drug is safe.*' },
        { s: 'The minister is [thought resign] next week.', a: ['thought to be resigning', 'expected to resign'], why: 'After the reporting verb you need *to* + an infinitive.' },
        { s: 'The scientist [is reported to] that the results were wrong.', a: ['has reported', 'reported'], why: '*Is reported to* needs an infinitive; with a *that*-clause, use the active verb.' },
      ] },
      { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
        { q: '', o: ['It was recommended that the study be repeated.', 'The study was recommended to be repeated.', 'The study was recommended repeating.'], why: '*Recommend* only works with the *it*-pattern.' },
        { q: '', o: ['There is said to have been a mistake in the first trial.', 'There is said to be a mistake in the first trial last year.', 'It is said there to have been a mistake.'], why: '*There is said to have been* for an earlier event.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first, using the word given. The new part has three to six words, including the word given.', items: [
        { q: 'People say that the director resigned last week.', cue: 'SAID', a: ['The director is said to have resigned last week.'], why: 'An earlier event: *is said to have resigned*.' },
        { q: 'It is thought that the two companies are negotiating a merger.', cue: 'THOUGHT', a: ['The two companies are thought to be negotiating a merger.'], why: 'In progress now: *are thought to be negotiating*.' },
        { q: 'Police believe the thieves had been watching the building for weeks.', cue: 'BELIEVED', a: ['The thieves are believed to have been watching the building for weeks.'], why: 'An activity over a period before: *to have been watching*.' },
        { q: 'According to reports, the files were deleted before the inspection.', cue: 'REPORTED', a: ['The files are reported to have been deleted before the inspection.', 'The files were reported to have been deleted before the inspection.'], why: 'Earlier and passive: *to have been deleted*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Passive reporting is a favourite in Part 4 because one answer tests two things: the reporting pattern and the infinitive. Decide first whether the action is earlier than the reporting, then whether it is active or passive.' },
    ] },
  ],
  activities: {
    one: { title: 'The newsroom', md: 'Give the student three short rumours in plain English in the chat (*A singer secretly bought an island last year*). The student reads each one aloud as a newsreader, with a passive reporting structure and the right infinitive, and adds one more sentence of their own. Then they report a real story they have read this week. Correct the infinitives together.' },
    small: { title: 'Pass it on', md: 'Each student writes one invented science headline in the chat. The next student turns it into a careful news sentence (*The team is understood to have been…*), the next adds a second claim with the *it*-pattern. After each round the group checks the infinitives and chooses the most believable story.' },
    group: { title: 'Two newspapers', md: 'Breakout rooms of four: two write a short report on a lab scandal as a sensational tabloid (stating everything as fact), two as a careful broadsheet (reporting every claim). Bring everyone back; each pair reads its version and the class finds every reporting structure in the careful one.' },
  },
  homework: { book: 'u5:p1', md: 'Finish lesson 1 of unit 5 if needed, then do lesson 2 (The discovery of the gene). Find a short news story in English and rewrite four of its claims with passive reporting structures, each with a different infinitive.' },
};
