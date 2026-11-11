// English C2, class 74 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u16:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c74',
  focus: 'By the end every student has a clear method for each of the seven parts of C2 Proficiency Reading and Use of English and has used it on new tasks under strict time: in Part 1 the words on both sides of the gap decide the collocation; in Part 2 they ask what kind of word is missing and find the other half of the pattern; in Part 3 they check every change to the stem; in Part 4 they find what the key word forces and count three to eight words; in Parts 5 to 7 they match meaning, not words, and in Part 6 they check the links both before and after each gap. Each student leaves knowing which part costs them most marks.',
  tips: [
    'Ninety minutes for seven parts is tight. A common plan is about forty minutes for Parts 1 to 4 and fifty for Parts 5 to 7. Today give strict times, say how many minutes are left, and move on when the time is up.',
    'In Part 1 at C2 all four options are usually real words with close meanings; only one completes the collocation or fixed phrase. Ask students to read the words **after** the gap aloud before choosing (*take issue **with***, *play **host** to*).',
    'In Part 4, remind students that each item can earn two marks, so half an answer is worth writing; contractions count as two words, and the key word never changes form.',
    'In Part 6, the commonest mistake is checking only the sentence before a gap. A paragraph must fit both the text before it and the text after it; ask students to underline the reference words (*that, such, this demand*) on both sides.',
    'Parts 5 and 7 were practised in the book lesson. If time runs short, keep Part 6 and mention the shared rule: the wrong option often repeats a word from the text, the right one paraphrases it.',
  ],
  plan: [
    { min: 5, title: 'The method', md: 'Show board page 1. Go through the seven methods quickly and ask each student which part they find hardest.' },
    { min: 8, title: 'Part 1', md: 'Show board page 2. Four minutes alone with “Everyone solves this”, then check. For each item, students say which word next to the gap decided it.' },
    { min: 12, title: 'Parts 2 and 3', md: 'Show board page 3. Seven minutes alone, then check. Students name the kind of word in Part 2 and every change in Part 3.' },
    { min: 10, title: 'Part 4', md: 'Show board page 4. Six minutes alone, then check together: what the key word forces and the word count for each item.' },
    { min: 13, title: 'Part 6', md: 'Show board pages 5 and 6. Seven minutes alone, then check. For each gap, students point to the link before and the link after.' },
    { min: 8, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 4, title: 'Close', md: 'Each student writes their score for each part and their weakest part in the chat. Set the homework.' },
  ],
  board: [
    { title: 'A method for Parts 1 to 7', blocks: [
      { t: 'table', caption: 'C2 Proficiency Reading and Use of English: 1 hour 30 minutes, seven parts', explain: ['head', 'col1', 'col2'], head: ['Part', 'What you do', 'The method'], rows: [
        ['Part 1', 'choose one of four words for eight gaps', 'read both sides of the gap; test every option in the phrase'],
        ['Part 2', 'write one word in eight gaps', 'ask what kind of word is missing; find the other half of the pattern'],
        ['Part 3', 'form a word from the stem in capitals for eight gaps', 'word class, then negative or plural, then spelling'],
        ['Part 4', 'complete six sentences with a key word', 'what the key word forces; three to eight words; same meaning'],
        ['Part 5', 'answer six questions on one long text', 'find the lines for each question; reject each wrong option for a reason'],
        ['Part 6', 'put seven removed paragraphs back, choosing from eight', 'check the links before and after each gap'],
        ['Part 7', 'match ten statements to sections or short texts', 'read the statements first; scan for the same idea in other words'],
      ] },
      { t: 'tip', art: 'owl', md: 'About **forty minutes for Parts 1 to 4** and **fifty for Parts 5 to 7**. If an item is holding you up, write your best guess, mark it and come back: a blank never earns a mark.' },
    ] },
    { title: 'Part 1: multiple-choice cloze', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 1): read the text about walking in cities and decide which answer best fits each gap. (Shortened: six gaps instead of eight.)', items: [
        { q: 'Few urban planners would ___ issue with the claim that cities were long designed for cars.', o: ['take', 'make', 'raise', 'have'], why: '*Take issue with*: disagree with.' },
        { q: 'Pedestrians have, by and ___, been treated as an afterthought.', o: ['large', 'far', 'wide', 'big'], why: 'The fixed binomial *by and large*: on the whole.' },
        { q: 'This year, however, the city will ___ host to its first festival of walking.', o: ['play', 'act', 'hold', 'give'], why: '*Play host to*: be the place where an event happens.' },
        { q: 'The scheme to widen pavements was ___ in controversy from the start.', o: ['mired', 'sunk', 'bogged', 'drowned'], why: '*Mired in controversy*; *bogged* needs *down*.' },
        { q: 'Its success was by no ___ guaranteed.', o: ['means', 'way', 'chance', 'account'], why: '*By no means*: not at all; *on no account* is a different phrase.' },
        { q: 'Since then, though, the project has gone from strength to ___.', o: ['strength', 'power', 'force', 'success'], why: 'The fixed phrase *go from strength to strength*.' },
      ] },
    ] },
    { title: 'Parts 2 and 3: open cloze and word formation', blocks: [
      { t: 'ex', kind: 'gap', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 2): read the text about handwriting and think of the word which best fits each gap. Use only one word in each gap. (Shortened: six gaps instead of eight.)', items: [
        { q: '___ though typing is far quicker, many students still take notes by hand.', a: ['Even'], why: '*Even though*: a strong contrast.' },
        { q: 'Research has ___ to settle the question of which method helps memory more.', a: ['yet'], why: '*Have yet to*: has not done it so far.' },
        { q: 'Writing slowly forces you to summarise ___ than simply copy every word.', a: ['rather'], why: '*Rather than* introduces the rejected alternative.' },
        { q: 'For ___ who struggle with spelling, a keyboard can be a great relief.', a: ['those'], why: '*Those who*: the people who.' },
        { q: '___ it not for spellcheckers, many adults would write a great deal less.', a: ['Were'], why: 'An inverted conditional: *Were it not for*.' },
        { q: 'The point is not so ___ that handwriting is dying as that its role is changing.', a: ['much'], why: '*Not so much… as*: the other half of the pattern comes later in the sentence.' },
      ] },
      { t: 'ex', kind: 'wordform', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 3): read the text about restoring a painting and use the word in capitals to form a word that fits each gap. (Shortened: six gaps instead of eight.)', items: [
        { q: 'The ___ of the ceiling paintings took the team almost a decade.', base: 'restore', a: ['restoration'], why: 'A noun after *the*: *-ation*, and the final *e* goes.' },
        { q: 'Under the dirt, the colours turned out to be ___ bright.', base: 'astonish', a: ['astonishingly'], why: 'An adverb before an adjective: *-ing* + *-ly*.' },
        { q: 'A few critics found the result ___, arguing that the colours were now too bright.', base: 'convince', a: ['unconvincing'], why: 'A negative adjective: *un-* + *-ing*.' },
        { q: 'Some of the damage caused by earlier repairs is sadly ___.', base: 'reverse', a: ['irreversible'], why: '*Ir-* + *-ible*: it cannot be undone.' },
        { q: 'Visitors are struck above all by the ___ of the blues.', base: 'vivid', a: ['vividness'], why: 'A noun after *the*: *-ness*.' },
        { q: 'Experts disagree, ___, about what the original looked like.', base: 'understand', a: ['understandably'], why: 'A sentence adverb: *-able* + *-ly*, with *e* dropped.' },
      ] },
    ] },
    { title: 'Part 4: key word transformations', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first. Do not change the word given. Use between three and eight words, including the word given.', items: [
        { q: 'I didn’t expect the film to be so moving.', cue: 'ABACK', a: ['I was taken aback by how moving the film was.', 'I was quite taken aback by how moving the film was.'], why: '*Be taken aback*: be surprised.' },
        { q: 'It’s pointless to complain about it now.', cue: 'POINT', a: ['There is no point in complaining about it now.', 'There is no point complaining about it now.', 'There’s no point in complaining about it now.', 'There’s no point complaining about it now.'], why: '*There is no point (in)* + *-ing*.' },
        { q: 'She was determined to succeed, whatever it cost her.', cue: 'MATTER', a: ['She was determined to succeed no matter what it cost her.', 'She was determined to succeed, no matter what it cost her.'], why: '*No matter what* = whatever.' },
        { q: 'People suspect that the figures were altered.', cue: 'SUSPECTED', a: ['The figures are suspected of having been altered.', 'The figures are suspected to have been altered.'], why: 'Passive reporting with a perfect passive form.' },
        { q: 'He only apologised because his manager insisted.', cue: 'HAD', a: ['Had his manager not insisted, he would not have apologised.', 'Had his manager not insisted, he wouldn’t have apologised.', 'Had his manager not insisted, he would not have apologized.'], why: 'An inverted third conditional: *Had* + subject + *not* + past participle.' },
        { q: 'Nobody expected the play to succeed, and the director expected it least.', cue: 'LEAST', a: ['Nobody expected the play to succeed, least of all the director.', 'Nobody had expected the play to succeed, least of all the director.'], why: '*Least of all*: and especially not.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Check every Part 4 answer twice: does it mean exactly what the first sentence means, and does it use three to eight words with the key word unchanged? *Wouldn’t* counts as two words.' },
    ] },
    { title: 'Part 6: the text', blocks: [
      { t: 'reading', title: 'The first weather forecasts', md: 'Few things are discussed as often, or forgiven as rarely, as a wrong weather forecast. Yet the idea of predicting the weather at all was once thought faintly ridiculous.\n\n[gap one]\n\nThe choice of word was deliberate. A prophecy claims certainty; a forecast, as he saw it, was a reasoned opinion based on evidence, and it could be wrong.\n\n[gap two]\n\nFor some years after his death, the newspaper forecasts were stopped altogether. It was public demand, not scientific approval, that eventually brought them back.\n\n[gap three]\n\nAccuracy, though, has not brought gratitude. A forecast that is right is forgotten by lunchtime; one that is wrong is remembered for years.\n\n[gap four]\n\nRemoved paragraphs:\n\n**A.** That changed in the 1860s, when a naval officer, Robert FitzRoy, began collecting reports sent by telegraph from ports around the coast. From them he drew up what he called a forecast.\n\n**B.** The public, however, had little patience with such distinctions. When the forecasts appeared in a newspaper and turned out to be mistaken, readers, and some scientists, mocked them.\n\n**C.** That demand has never gone away. Today forecasts are produced by computers working through vast quantities of data, and they are far more reliable than anything available in the nineteenth century.\n\n**D.** Perhaps this is because we still hear a forecast as a promise. FitzRoy would have recognised the mistake: he never claimed to offer more than a well-informed opinion.\n\n**E.** FitzRoy himself was confident that the weather would soon be predicted with complete certainty, and said so often.' },
    ] },
    { title: 'Part 6: the gaps', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 6): choose the paragraph which fits each gap in the text on board page 5. One paragraph is not needed. (Shortened: four gaps and five paragraphs instead of seven and eight.)', items: [
        { q: 'Which paragraph fits gap one?', o: ['A', 'B', 'C', 'D', 'E'], why: '*That changed* answers *once thought faintly ridiculous*; *a forecast* leads into *The choice of word was deliberate*.' },
        { q: 'Which paragraph fits gap two?', o: ['B', 'A', 'C', 'D', 'E'], why: '*Such distinctions* refers to prophecy and forecast; the mockery explains why the forecasts were later stopped.' },
        { q: 'Which paragraph fits gap three?', o: ['C', 'A', 'B', 'D', 'E'], why: '*That demand* picks up *public demand*; *more reliable* leads into *Accuracy, though*.' },
        { q: 'Which paragraph fits gap four?', o: ['D', 'A', 'B', 'C', 'E'], why: '*This* refers to remembering only the wrong forecasts. E is not needed: it contradicts *it could be wrong*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'The extra paragraph usually fits one side of a gap and breaks the other, or contradicts the writer. Here E sounds plausible but clashes with what the text says FitzRoy believed.' },
    ] },
  ],
  activities: {
    one: { title: 'Error audit', md: 'Go back through every wrong answer with the student. For each one, ask how they chose it, name the step of the method they skipped, and show how that step leads to the right answer. Then the student writes a one-line method for each of the seven parts in their own words, and you agree on the time they will give each part in the practice exam.' },
    small: { title: 'Item makers', md: 'Each student writes one item in the format of a part they find hard: a Part 1 gap with four real-word options, a Part 2 gap inside a pattern, or a Part 4 item with a key word and its answer. They post it in the chat; the group solves each one and decides whether it is fair, and, for Part 4, counts the words.' },
  },
  homework: { book: 'u16:p1', md: 'Finish lesson 1 of unit 16 if needed, then do lesson 2 (Writing against the clock). Do the Parts 1 to 4 tasks in lesson 1 again in no more than forty minutes, and note how long each part took you and where you lost marks.' },
};
