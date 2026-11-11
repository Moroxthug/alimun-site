// English B2, class 35 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u8:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c35',
  focus: 'By the end of the class every student can use relative clauses in depth: *which* to refer to a whole idea (*He was late, which annoyed everyone*), *whose*, *whom* after prepositions in formal English, prepositions at the start or end of the clause, and quantifiers such as *most of whom* and *some of which*, with the right commas.',
  tips: [
    'B1 taught defining and non-defining clauses. Today’s new points are *which* for a whole idea, preposition position, and quantifier + *whom/which*. Keep the B1 revision short.',
    'Common mistakes: *what* instead of *which* for a whole idea (*He failed, what surprised me*), *most of them* instead of *most of whom* inside a sentence, and *in which* split wrongly (*the house in which I lived in*).',
    'Show both registers: *the man I spoke to* (everyday) and *the man to whom I spoke* (formal). Students only need to produce the formal one in writing.',
    'Commas matter: a non-defining clause has commas, and *that* is never used after a comma.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask each student to describe a relative or friend in one sentence with *who* or *whose*. Note any comma or *that* problems.' },
    { min: 15, title: 'Relative clauses in depth', md: 'Show board page 1. Go through each pattern with its example. Students rewrite two pairs of sentences as one.' },
    { min: 10, title: 'Practice', md: 'Show board page 2. Students choose and fix alone, then check.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: B2 First Reading and Use of English Part 2, an open cloze. Students write alone, then you reveal.' },
    { min: 5, title: 'Close', md: 'Each student says one sentence about their city with *which* for a whole idea. Set the homework.' },
  ],
  board: [
    { title: 'Relative clauses in depth', blocks: [
      { t: 'table', caption: 'Beyond who and which', explain: ['head', 'col2'], head: ['Pattern', 'Example', 'Use'], rows: [
        [', which (whole idea)', 'The train was cancelled, which meant we were late.', 'refers to the whole previous clause'],
        ['whose', 'The writer, whose books I love, lives nearby.', 'possession'],
        ['preposition + whom / which', 'The colleague to whom I sent it never replied.', 'formal'],
        ['quantifier + of + whom / which', 'I invited twenty people, most of whom came.', 'part of a group'],
        ['preposition at the end', 'That’s the hotel we stayed at.', 'everyday'],
      ] },
      { t: 'tip', md: 'After a comma, use **which** or **who**, never **that**: *My car, which is ten years old, still works.*' },
    ] },
    { title: 'Practice', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
        { q: 'She passed all her exams, ___ made her parents very proud.', o: ['which', 'what', 'that'], why: 'A whole idea after a comma: *which*.' },
        { q: 'There were thirty applicants, none of ___ had experience.', o: ['whom', 'them', 'who'], why: 'Inside one sentence: *none of whom*.' },
        { q: 'The company for ___ she works is based in Lyon.', o: ['which', 'that', 'what'], why: 'After a preposition: *which* (not *that*).' },
        { q: 'He’s the actor ___ brother was in my class.', o: ['whose', 'who’s', 'which'], why: 'Possession: *whose*.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'He forgot my birthday, [what] really upset me.', a: ['which'], why: 'A whole idea: *which*.' },
        { s: 'I met five students, two of [them] were from Peru.', a: ['whom'], why: 'One sentence: *two of whom*.' },
        { s: 'This is the house [in which I grew up in].', a: ['in which I grew up', 'which I grew up in'], why: 'The preposition appears only once, either before *which* or at the end.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 2', blocks: [
      { t: 'text', md: 'In the format of B2 First Reading and Use of English Part 2: write **one** word in each gap.\n\nThe old market, (1) ___ was built in 1850, has reopened after a long restoration. The architects, most of (2) ___ came from the city itself, kept the original iron roof, (3) ___ visitors say is the most beautiful part. The family (4) ___ business ran the market for a century has returned too.' },
      { t: 'ex', kind: 'gap', h: 'Write one word for each gap.', items: [
        { q: 'Gap 1: The old market, ___ was built in 1850', a: ['which'], why: 'Non-defining, a thing: *which*.' },
        { q: 'Gap 2: most of ___ came from the city', a: ['whom'], why: 'Quantifier + *of whom* for people.' },
        { q: 'Gap 3: the original iron roof, ___ visitors say is the most beautiful part', a: ['which'], why: 'A thing after a comma: *which*.' },
        { q: 'Gap 4: The family ___ business ran the market', a: ['whose'], why: 'Possession: *whose business*.' },
      ] },
      { t: 'tip', md: 'Relative words are among the most common answers in Part 2. When the gap comes after a comma or a noun, try *which*, *who*, *whose* or *whom* first.' },
    ] },
  ],
  activities: {
    one: { title: 'People and places', md: 'The student describes five people and places in their life, each with a different pattern from page 1 (one *whose*, one *which* for a whole idea, one *most of whom*, one formal preposition, one everyday preposition at the end). You ask follow-up questions and correct commas and word choice afterwards.' },
    small: { title: 'Join them up', md: 'Put eight short sentence pairs in the chat (*I have three brothers. All of them live abroad.*). In pairs, students join each pair into one sentence with a relative clause, then compare with another pair. Finish with each student saying one true sentence with *which* for a whole idea.' },
    group: { title: 'Guess who', md: 'In breakout rooms of three, students write definitions of famous people or places using two relative clauses each (*a city whose river…, which…*). Back in the main room, rooms read their definitions and the others guess. Correct relative clause mistakes at the end.' },
  },
  homework: { book: 'u8:p1', md: 'Finish book lesson 1 of unit 8 (Most of whom, which surprised us). Then write six sentences about your family or city, using *whose*, *which* for a whole idea, and *most of whom* or *some of which*.' },
};
