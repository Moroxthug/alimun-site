// English C2, class 75 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u16:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c75',
  focus: 'By the end every student can plan and start the C2 Proficiency Writing paper against the clock: about ten minutes to plan, thirty to write and five to check for each text. For the Part 1 essay (240 to 280 words) they find the two key points in each text, paraphrase them rather than lift them, and evaluate each writer with precise reporting verbs before giving their own view; for Part 2 (280 to 320 words) they match the article, letter, report or review to its reader. They know, in general terms, what the examiners look at: content, effect on the reader, organisation and language.',
  tips: [
    'Time is the hidden difficulty: two demanding texts in 90 minutes. Time the planning strictly today. Students who skip the plan write more words and fewer ideas.',
    'The commonest Part 1 weakness at C2 is summary without evaluation. Every key point needs a judgement (*convincing, overstated, true only in some cases, beside the point*) and a reason.',
    'Lifting phrases from the texts shows nothing of the student’s range. Ask students to close the texts and say each key point aloud in new words before they write it.',
    'Reporting verbs carry much of the evaluation. *Says* and *thinks* tell the reader nothing; *contends, concedes, dismisses, overlooks, generalises from* tell them what you think of the argument.',
    'In Part 2, the choice of task matters. Advise students to choose the task whose format they know and where they have something real to say, not the one that looks easiest.',
  ],
  plan: [
    { min: 5, title: 'The paper and the clock', md: 'Show board page 1. Go through the timing and what the examiners look at, in plain words.' },
    { min: 10, title: 'Finding the key points', md: 'Show board page 2. Students read the two texts alone, then choose the best summary of each text’s key points and the best paraphrase.' },
    { min: 8, title: 'The verbs of evaluation', md: 'Show board page 3. Students complete the sentences with the reporting verbs alone, then say what each verb tells the reader about the writer’s view.' },
    { min: 15, title: 'Exam corner', md: 'Show board page 4: C2 Proficiency Writing Part 1. Students plan the essay in five minutes, then write the summary paragraph and the start of the evaluation in ten minutes, alone.' },
    { min: 8, title: 'Part 2 and the reader', md: 'Show board page 5. Students sort the sentences by text type, then say who the reader of each is.' },
    { min: 10, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 4, title: 'Close', md: 'Each student says which of the four areas they will check first when they finish the essay. Set the homework.' },
  ],
  board: [
    { title: 'The Writing paper and the clock', blocks: [
      { t: 'table', caption: 'C2 Proficiency Writing: 1 hour 30 minutes, two parts', explain: ['head', 'col1', 'col2'], head: ['Part', 'The task', 'Length and time'], rows: [
        ['Part 1 (compulsory)', 'an essay that summarises and evaluates the key points of two texts and gives your own view', '240 to 280 words, about 45 minutes'],
        ['Part 2 (one task from a choice)', 'an article, a letter, a report or a review', '280 to 320 words, about 45 minutes'],
      ] },
      { t: 'table', caption: 'What the examiners look at, in general terms', explain: ['head', 'col1'], head: ['Area', 'The question to ask yourself'], rows: [
        ['Content', 'Have I done everything the task asks, and nothing irrelevant?'],
        ['Effect on the reader', 'Is the register right for this reader, and does the text do its job?'],
        ['Organisation', 'Is each paragraph about one thing, and does the argument move forward?'],
        ['Language', 'Is the range wide and precise, and is it accurate?'],
      ] },
      { t: 'tip', art: 'mug', md: 'For each part allow about **ten minutes to plan, thirty to write and five to check**. A plan is four lines: the key points, your judgement of each, your own view and the sentence you will end with.' },
    ] },
    { title: 'Part 1: two texts and their key points', blocks: [
      { t: 'reading', title: 'Two texts on old buildings', md: '**Text 1.** A city’s old buildings are its memory. Streets that have grown over centuries give people a sense of where they are and who came before them, and visitors travel a long way to walk through them. There is a practical case too: repairing a building almost always uses fewer materials than knocking it down and starting again, so preservation is often the greener choice as well as the more beautiful one.\n\n**Text 2.** Preservation has become a reflex rather than a decision. In many cities, rules intended to protect a handful of remarkable buildings now cover whole districts, which makes it hard to build the homes people need and drives up rents. Not everything old is precious, and a city that cannot change risks becoming a museum in which only the wealthy can afford to live.' },
      { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
        { q: 'Which pair gives the two key points of Text 1?', o: ['Old buildings give a city its identity and continuity, and keeping them is usually better for the environment.', 'Visitors travel a long way, and streets have grown over centuries.', 'Old buildings are beautiful, and new ones are ugly.'], why: 'One cultural point and one practical point; the visitors are only an example.' },
        { q: 'Which pair gives the two key points of Text 2?', o: ['Protection now covers far more than it should, and this makes housing scarcer and dearer.', 'Some buildings are remarkable, and museums are popular.', 'Rents are high, and wealthy people live in cities.'], why: 'The scope of the rules and its effect on housing; *a museum* is an image for the second point.' },
        { q: 'Which sentence paraphrases a key point rather than lifting it?', o: ['The second writer argues that protection has become automatic, applied to whole neighbourhoods rather than to individual buildings of real merit.', 'The second writer says preservation has become a reflex rather than a decision.', 'The first writer says a city’s old buildings are its memory.'], why: 'The idea in new words shows range; the other two copy the texts.' },
      ] },
    ] },
    { title: 'The verbs of evaluation', blocks: [
      { t: 'ex', kind: 'bank', h: 'Complete each sentence about the two texts with a verb from the bank. Two verbs are not needed.', extra: ['says', 'thinks'], items: [
        { q: 'The first writer ___ that preservation is generally the more sustainable option.', a: 'contends', why: '*Contend*: argue a position, often one others dispute.' },
        { q: 'The second writer ___ that some old buildings are worth protecting, but only a few.', a: 'concedes', why: '*Concede*: accept part of the other side’s case.' },
        { q: 'However, the first text ___ the cost of preservation for people who need somewhere to live.', a: 'overlooks', why: '*Overlook*: fail to consider; a criticism.' },
        { q: 'The second writer arguably ___ from a few extreme cases to cities in general.', a: 'generalises', why: '*Generalise from*: draw a broad conclusion from limited cases.' },
        { q: 'He also ___ the cultural argument rather too quickly as mere nostalgia.', a: 'dismisses', why: '*Dismiss*: reject without serious consideration.' },
      ] },
      { t: 'tip', art: 'mug', md: '*Says* and *thinks* report; *contends, concedes, overlooks, generalises from, dismisses* **evaluate**. Use them and the reader knows your judgement before you state it.' },
    ] },
    { title: 'Exam corner: Writing Part 1', blocks: [
      { t: 'text', md: 'In the format of the C2 Proficiency exam (Writing Part 1): read the two texts on board page 2 again. Write an essay **summarising and evaluating** the key points from both texts. Use your own words throughout as far as possible, and include your own ideas in your answer. Write **240 to 280 words**.\n\nIn class: plan in five minutes, then write the first paragraph (both texts summarised) and begin the evaluation in ten minutes. Your teacher will read it. At home, finish the essay within 45 minutes in total.' },
      { t: 'examples', items: [
        { s: 'Both texts address the value of old buildings, **though they weigh it very differently**.', n: 'An opening that frames the comparison at once.' },
        { s: '**The first writer is surely right that** repair tends to use fewer resources; **it does not follow, however, that** every building should be kept.', n: 'Accept a point, then limit it.' },
        { s: '**Where the second text is most persuasive is** in its account of housing costs.', n: 'A cleft that focuses the evaluation.' },
        { s: '**On balance, I would argue that** protection should be selective rather than automatic.', n: 'A clear view of your own, with a reason to follow.' },
      ] },
    ] },
    { title: 'Part 2: the right text for the reader', blocks: [
      { t: 'ex', kind: 'sort', h: 'In the format of the C2 Proficiency exam (Writing Part 2): which kind of text does each sentence come from?', groups: ['article', 'letter', 'report', 'review'], items: [
        { s: 'Ask anyone over fifty what they miss about the high street, and the answer is rarely the shops.', g: 0, why: 'A hook that draws a general reader in: an article.' },
        { s: 'I am writing in response to your editorial of 3 March, with which I must respectfully disagree.', g: 1, why: 'A formal letter to an editor: the reason for writing comes first.' },
        { s: 'The purpose of this report is to assess the use of the new study centre and to recommend changes.', g: 2, why: 'A neutral statement of purpose for a committee: a report.' },
        { s: 'For all its longueurs, this is a production that stays with you for days.', g: 3, why: 'A balanced verdict for readers deciding whether to go: a review.' },
        { s: 'It is therefore recommended that opening hours be extended during the examination period.', g: 2, why: 'An impersonal recommendation with a subjunctive: a report.' },
        { s: 'I would be grateful if the council could reconsider its decision before the next meeting.', g: 1, why: 'A courteous, direct request to a senior reader: a letter.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Live edit', md: 'Read the student’s paragraph together on the board. Check content first: are both texts summarised, with two key points each, in new words? Then mark one sentence to raise in range (a cleft, a concession with *it does not follow that*, a precise reporting verb) and rewrite it together. The student then writes the next evaluation paragraph in five minutes while you time it.' },
    small: { title: 'Peer examiners', md: 'Students swap paragraphs in the chat. Each reader checks content only: are all four key points there, paraphrased, and is there at least one evaluating verb? They reply with one strength and one missing point. Writers then improve one sentence and post the new version for the group.' },
  },
  homework: { book: 'u16:p2', md: 'Finish lesson 2 of unit 16 if needed, then do lesson 3 (Listening and Speaking). Finish the essay from class in 240 to 280 words within 45 minutes in total, check it once for content and once for language, and send it to your teacher, who will correct it. Do the Part 1 or Part 2 task at the end of lesson 2 on another day.' },
};
