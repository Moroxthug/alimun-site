// English C1, class 92 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u20:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c92',
  focus: 'By the end every student has a clear method for each of C1 Advanced Reading and Use of English Parts 1 to 4 and has used it under time pressure: in Part 1 the words on both sides of the gap decide the answer; in Part 2 they ask what kind of word is missing; in Part 3 they check every change (prefix, suffix, plural, spelling); in Part 4 they find the two changes and count three to six words. Each student leaves knowing which of the four parts costs them most marks.',
  tips: [
    'Suggested timing is about ten minutes for each of Parts 1 to 4. Today give strict times and tell students when to move on; finishing matters more than perfection.',
    'In Part 1, ask students to read the words **after** the gap aloud. The collocation or preposition there usually rules out three options (*conducive **to***, *on the **verge** of*).',
    'In Part 2, the gaps are mostly grammar words: auxiliaries, prepositions, relative words, linkers and parts of fixed phrases. Before checking an answer, ask *What kind of word is it?*',
    'In Part 3, many answers need two or three changes at once (*un- + -able + -ly*), and spelling counts. Ask students to say each change aloud when they check.',
    'In Part 4, remind students that answers can earn two marks, that contractions count as two words, and that the key word must not change. A sensible guess is always better than a blank.',
  ],
  plan: [
    { min: 5, title: 'The method', md: 'Show board page 1. Go through the four methods in two minutes and ask which part students find hardest.' },
    { min: 12, title: 'Part 1', md: 'Show board page 2. Five minutes alone with “Everyone solves this”, then check. For each item, students say which word next to the gap decided it.' },
    { min: 13, title: 'Parts 2 and 3', md: 'Show board page 3. Seven minutes alone, then check. Students name the kind of word in Part 2 and the changes in Part 3.' },
    { min: 12, title: 'Part 4', md: 'Show board page 4. Six minutes alone, then check together: the two changes and the word count for each item.' },
    { min: 13, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 5, title: 'Close', md: 'Each student writes their score for each part and their weakest part in the chat. Set the homework.' },
  ],
  board: [
    { title: 'A method for Parts 1 to 4', blocks: [
      { t: 'table', caption: 'C1 Advanced Reading and Use of English, Parts 1 to 4', explain: ['head', 'col1', 'col2'], head: ['Part', 'What you do', 'The method'], rows: [
        ['Part 1', 'choose one of four words for eight gaps', 'read the words on both sides of the gap; test every option in the sentence'],
        ['Part 2', 'write one word in eight gaps', 'ask what kind of word is missing, then which word; check the meaning'],
        ['Part 3', 'form a word from the stem in capitals for eight gaps', 'decide the word class, then check every change and the spelling'],
        ['Part 4', 'rewrite six sentences with a key word', 'find the two changes; use three to six words with the key word unchanged'],
      ] },
      { t: 'tip', art: 'owl', md: 'About ten minutes for each of Parts 1 to 4 leaves most of the 90 minutes for the long texts. If an item takes too long, write your best guess, mark it and come back.' },
    ] },
    { title: 'Part 1: multiple-choice cloze', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 1): choose the word that best fits each gap in this text about a city’s new cycle lanes.', items: [
        { q: 'The plan to close the high street to cars ___ a heated debate among local businesses.', o: ['sparked', 'lit', 'burned', 'fired'], why: '*Spark a debate*: the fixed collocation.' },
        { q: 'Some shop owners were ___ to accept that fewer cars could mean more customers.', o: ['reluctant', 'opposed', 'against', 'resistant'], why: '*Reluctant to* + verb; *opposed* and *resistant* take *to* + noun or *-ing*.' },
        { q: 'Within a year, however, the number of people cycling into the centre had risen ___.', o: ['considerably', 'heavily', 'strongly', 'deeply'], why: '*Rise considerably*: the natural adverb for an increase.' },
        { q: 'The council now plans to ___ the scheme to two more districts.', o: ['extend', 'enlarge', 'widen', 'stretch'], why: '*Extend a scheme to*: make it cover more places.' },
      ] },
    ] },
    { title: 'Parts 2 and 3: open cloze and word formation', blocks: [
      { t: 'ex', kind: 'gap', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 2): write one word in each gap.', items: [
        { q: 'The museum introduced a system ___ visitors book a time slot online.', a: ['whereby'], why: '*Whereby*: a formal relative word, *by which*.' },
        { q: '___ the rain, the festival went ahead as planned.', a: ['Despite', 'Notwithstanding'], why: 'One word before a noun: *despite* or *notwithstanding*.' },
        { q: 'He left early so ___ not to miss the last train.', a: ['as'], why: 'The fixed phrase *so as not to*.' },
        { q: 'Little ___ they know that the house had once belonged to a famous painter.', a: ['did'], why: 'Inversion after *little*: *did* + subject.' },
      ] },
      { t: 'ex', kind: 'wordform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 3): use the word in capitals to form a word that fits the gap.', items: [
        { q: 'The delay was caused by a ___ between the two departments.', base: 'understand', a: ['misunderstanding'], why: 'Prefix *mis-* and suffix *-ing*: a noun after *a*.' },
        { q: 'Some of the damage to the old church is ___.', base: 'repair', a: ['irreparable'], why: 'Negative *ir-*, *-able*, and the stem changes to *repar-*.' },
        { q: 'The new manager handled the crisis with remarkable ___.', base: 'decisive', a: ['decisiveness'], why: 'A noun after *remarkable*: *-ness*.' },
        { q: 'Prices in the area have risen ___ in recent years.', base: 'proportion', a: ['disproportionately'], why: 'Three changes: *dis-*, *-ate*, *-ly*.' },
      ] },
    ] },
    { title: 'Part 4: key word transformations', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first. Use the word given and three to six words, including the word given.', items: [
        { q: 'I only understood the problem when I spoke to the engineer.', cue: 'UNTIL', a: ['It was not until I spoke to the engineer that I understood the problem.', 'It wasn’t until I spoke to the engineer that I understood the problem.', 'Not until I spoke to the engineer did I understand the problem.'], why: 'A cleft with *not until*, or inversion after *not until*.' },
        { q: 'If you have any questions, please contact the office.', cue: 'SHOULD', a: ['Should you have any questions, please contact the office.'], why: 'An inverted conditional: *Should you have*.' },
        { q: 'People believe that the bridge was designed by a woman.', cue: 'BELIEVED', a: ['The bridge is believed to have been designed by a woman.'], why: 'Passive reporting with a perfect passive infinitive.' },
        { q: 'There is no way he could have known about the plan.', cue: 'POSSIBLY', a: ['He can’t possibly have known about the plan.', 'He cannot possibly have known about the plan.', 'He couldn’t possibly have known about the plan.', 'He could not possibly have known about the plan.'], why: '*Can’t possibly have* + past participle: certain it was not true.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Check every Part 4 answer twice: does it mean the same as the first sentence, and does it use three to six words with the key word unchanged? *Can’t* counts as two words.' },
    ] },
  ],
  activities: {
    one: { title: 'Strategy coach', md: 'Go back through every wrong answer with the student. For each one, ask how they chose it, then show the step of the method that leads to the right answer. Finish by writing a one-line method for each part together, in the student’s own words, for them to keep.' },
    small: { title: 'Item makers', md: 'Each student writes one Part 4 item using a structure from the book (a cleft, an inversion, passive reporting, a modal of deduction): the first sentence, the key word and the answer. They post it in the chat; the group solves each item, counts the words and decides whether it is fair.' },
    group: { title: 'Gap hunters', md: 'Breakout rooms of three each write a short paragraph (five sentences) on a topic from the book, then remove four grammar words to make a Part 2 task. Rooms swap tasks through the chat and solve another room’s paragraph. Back together, discuss the hardest gap and what kind of word it was.' },
  },
  homework: { book: 'u20:p1', md: 'Finish lesson 1 of unit 20 if needed, then do lesson 2 (Parts 5 to 8: the long texts). Do the exam tasks of Parts 1 to 4 in lesson 1 again, timing yourself at about ten minutes each, and note which part took you the longest.' },
};
