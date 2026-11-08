// English B2, class 20 (docs/LESSONS_PLAN.md, L6). Exam practice: B2 First Reading and Use of English, units 1 to 4. Draft for the owner's review.
export const LESSON = {
  id: 'c20',
  focus: 'By the end of the class every student knows the seven parts of B2 First Reading and Use of English, has tried Parts 1, 2, 3, 4 and 7 under time pressure using the language of units 1 to 4, and has a clear strategy for each part. Students leave knowing their strongest and weakest part.',
  tips: [
    'Time is the main problem in this paper: 75 minutes for seven parts. Give strict times today and tell students when to move on, even if they have not finished.',
    'For Part 2 (open cloze), the gaps are almost always grammar words: articles, prepositions, auxiliaries, pronouns, linkers. Students who look for "difficult" words miss easy points.',
    'For Part 4, remind students of the two checks: the meaning must be the same, and the answer must be two to five words including the key word (contractions count as two).',
    'Collect scores per part on the board at the end. Do not compare students; ask each one which part they will practise at home.',
  ],
  plan: [
    { min: 5, title: 'The paper', md: 'Show board page 1. Go through the seven parts in two minutes. Ask which part students think is hardest.' },
    { min: 10, title: 'Part 1 and Part 2', md: 'Show board page 2. Five minutes, alone, then check together. For each Part 2 gap, ask what type of word it is.' },
    { min: 10, title: 'Part 3 and Part 4', md: 'Show board page 3. Six minutes, alone, then check word counts and spelling together.' },
    { min: 15, title: 'Part 7', md: 'Show board page 4. Strict time of seven minutes. Check together and point to the synonyms in each text.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 5, title: 'Close', md: 'Each student writes their strongest and weakest part in the chat. Set the homework.' },
  ],
  board: [
    { title: 'The paper', blocks: [
      { t: 'table', caption: 'B2 First Reading and Use of English: 75 minutes', explain: ['head', 'col1', 'col2'], head: ['Part', 'What you do', 'What it tests'], rows: [
        ['1', 'choose the best word for 8 gaps', 'collocations, phrasal verbs, meaning'],
        ['2', 'write one word in 8 gaps', 'grammar words'],
        ['3', 'change a word to fit 8 gaps', 'word formation'],
        ['4', 'rewrite 6 sentences with a key word', 'grammar and vocabulary together'],
        ['5', 'answer 6 questions on a long text', 'detail, opinion, attitude'],
        ['6', 'put 6 sentences back into a text', 'how a text holds together'],
        ['7', 'match 10 questions to texts', 'finding information fast'],
      ] },
    ] },
    { title: 'Parts 1 and 2', blocks: [
      { t: 'ex', kind: 'select', h: 'Part 1: choose the best word.', items: [
        { q: 'She has always got ___ well with her colleagues.', o: ['on', 'up', 'over'], why: '*get on (well) with someone*.' },
        { q: 'He was under pressure to ___ the deadline.', o: ['meet', 'do', 'catch'], why: 'You *meet* a deadline.' },
        { q: 'The company ___ a new manager last spring.', o: ['took on', 'took up', 'took off'], why: '*take on* = employ.' },
      ] },
      { t: 'ex', kind: 'gap', h: 'Part 2: write one word in each gap.', items: [
        { q: 'I have been working here ___ 2019.', a: ['since'], why: 'A point in time: *since*.' },
        { q: 'By the time we arrived, the film ___ already started.', a: ['had'], why: 'Past perfect: *had started*.' },
        { q: 'The museum is said ___ have been built in 1850.', a: ['to'], why: '*is said to have been*.' },
        { q: 'I’m used ___ working long hours now.', a: ['to'], why: '*be used to* + -ing.' },
      ] },
    ] },
    { title: 'Parts 3 and 4', blocks: [
      { t: 'ex', kind: 'wordform', h: 'Part 3: form the right word.', items: [
        { q: 'He is a very ___ person and never gives up.', base: 'determine', a: ['determined'], why: 'Adjective for a person: *determined*.' },
        { q: 'It was ___ of her to leave without saying goodbye.', base: 'polite', a: ['impolite'], why: 'Negative adjective: *impolite*.' },
      ] },
      { t: 'ex', kind: 'transform', h: 'Part 4: rewrite with the key word (two to five words).', items: [
        { q: 'I started learning the piano three years ago. (I … the piano for three years.)', cue: 'BEEN', a: ['I have been learning the piano for three years.', 'I’ve been learning the piano for three years.'], why: 'Present perfect continuous with *for*.' },
        { q: 'They will finish the work before Friday. (The work … before Friday.)', cue: 'HAVE', a: ['The work will have been finished before Friday.'], why: 'Future perfect passive.' },
      ] },
    ] },
    { title: 'Part 7', blocks: [
      { t: 'text', md: '**A** *Ana:* I changed jobs at forty. My salary is lower now, but I finally enjoy Monday mornings.\n\n**B** *Jon:* I had my whole flat redesigned by an architect friend. It took months, and the noise was terrible.\n\n**C** *Sara:* My grandmother is said to have been the first female engineer in her town. I still have her drawings.\n\n**D** *Leo:* By next year I’ll have been running my own business for a decade, which still surprises me.' },
      { t: 'ex', kind: 'choice', h: 'Which person (A, B, C or D)…', items: [
        { q: '…mentions a family member’s achievement?', o: ['C', 'A', 'D'], why: 'Her grandmother, the first female engineer.' },
        { q: '…accepted earning less for a happier life?', o: ['A', 'D', 'B'], why: '*My salary is lower now, but I finally enjoy…*' },
        { q: '…mentions an anniversary coming soon?', o: ['D', 'C', 'A'], why: '*By next year… for a decade*.' },
        { q: '…found the process unpleasant?', o: ['B', 'A', 'C'], why: '*the noise was terrible*.' },
      ] },
      { t: 'tip', md: 'In Part 7 read the questions first and underline the idea in each one. Then scan the texts for that idea said in **different words**. Never read every text in full first: there is not enough time.' },
    ] },
  ],
  activities: {
    one: { title: 'Strategy coach', md: 'Go back through each part with the student. For every wrong answer, ask the student to explain how they chose it, then show the strategy that leads to the right answer. Finish by writing together a one-line strategy for each part that the student can keep.' },
    small: { title: 'Test makers', md: 'Each student writes one Part 4 item from units 1 to 4 (original sentence, key word, answer) and posts it in the chat. The group solves each item, counts the words and decides if it is fair. The best two items go on the board.' },
    group: { title: 'Gap hunters', md: 'Breakout rooms of three: each room writes a short paragraph (five sentences) using language from units 1 to 4, then removes four grammar words to make a Part 2 task. Rooms swap tasks through the chat and solve another room’s paragraph. Back together, discuss the hardest gap.' },
  },
  homework: { book: 'u1 u2 u3 u4', md: 'Do the exam-format task in each lesson of units 1 to 4 again (one per lesson), timing yourself. Write down which part of the paper took you the longest and bring one question you found difficult to the next class.' },
};
