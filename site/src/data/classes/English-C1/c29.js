// English C1, class 29 (docs/LESSONS_PLAN.md, L6). Exam practice: C1 Advanced Reading and Use of English, units 1 to 6. Draft for the owner's review.
export const LESSON = {
  id: 'c29',
  focus: 'By the end of the class every student knows the eight parts of C1 Advanced Reading and Use of English, has tried Parts 1, 2, 3, 4 and 8 under time pressure using the language of units 1 to 6, and has a clear strategy for each part. Students leave knowing their strongest and weakest part.',
  tips: [
    'Time is the main difficulty in this paper: 90 minutes for eight parts and 56 questions. Suggest a rough budget of about half an hour for Parts 1 to 4 and about an hour for the long texts, and give strict times today.',
    'Part 4 at C1 asks for three to six words, including the word given, and each answer is worth two marks. Tell students always to write something: half an answer can still earn a mark.',
    'Parts 2 and 3 reward precision: one wrong letter loses the mark. Leave a minute at the end of each part for spelling.',
    'Collect scores per part on the board at the end. Do not compare students; ask each one which part they will practise at home.',
  ],
  plan: [
    { min: 5, title: 'The paper', md: 'Show board page 1. Go through the eight parts in two minutes. Ask which part students expect to find hardest and why.' },
    { min: 10, title: 'Part 1 and Part 2', md: 'Show board page 2. Five minutes, alone, then check together. For each Part 1 item, ask which words around the gap decide the answer.' },
    { min: 10, title: 'Part 3 and Part 4', md: 'Show board page 3. Six minutes, alone, then check spelling and word counts together.' },
    { min: 15, title: 'Part 8', md: 'Show board page 4. A strict time of seven minutes. Check together and point to the words in each text that the statements paraphrase.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 5, title: 'Close', md: 'Each student writes their strongest and weakest part in the chat. Set the homework.' },
  ],
  board: [
    { title: 'The paper', blocks: [
      { t: 'table', caption: 'C1 Advanced Reading and Use of English: 90 minutes', explain: ['head', 'col1', 'col2'], head: ['Part', 'What you do', 'What it tests'], rows: [
        ['1', 'choose the best of four words for 8 gaps', 'collocations, fixed phrases, shades of meaning'],
        ['2', 'write one word in 8 gaps', 'grammar words and fixed phrases'],
        ['3', 'change a word to fit 8 gaps', 'word formation'],
        ['4', 'rewrite 6 sentences with a key word, in three to six words', 'grammar and vocabulary together'],
        ['5', 'answer 6 questions on a long text', 'detail, opinion, attitude and purpose'],
        ['6', 'answer 4 questions across four short texts', 'where writers agree and disagree'],
        ['7', 'put 6 paragraphs back into a long text', 'how a text holds together'],
        ['8', 'match 10 statements to sections of a text', 'finding ideas fast'],
      ] },
    ] },
    { title: 'Parts 1 and 2', blocks: [
      { t: 'ex', kind: 'select', h: 'Part 1: choose the word that best fits each gap.', items: [
        { q: 'She is ___ loyal to her friends and would never let them down.', o: ['fiercely', 'strongly', 'heavily', 'deeply'], why: '*Fiercely loyal* is a fixed collocation; the others do not go with *loyal*.' },
        { q: 'Her name ___ a bell, but I can’t remember where we met.', o: ['rings', 'sounds', 'calls', 'strikes'], why: '*Ring a bell*: seem familiar.' },
        { q: 'He spent twenty years climbing the career ___ before he left to teach.', o: ['ladder', 'stairs', 'steps', 'scale'], why: 'The fixed image is *the career ladder*.' },
        { q: 'The team were ___ disappointed to lose in the final minute.', o: ['bitterly', 'sharply', 'heavily', 'strongly'], why: '*Bitterly disappointed* is the natural intensifier.' },
      ] },
      { t: 'ex', kind: 'gap', h: 'Part 2: write one word in each gap.', items: [
        { q: 'What I find hardest about the job ___ the early starts.', a: ['is'], why: 'A cleft sentence: *What I find hardest… is…*' },
        { q: 'The results are thought ___ have been altered before publication.', a: ['to'], why: 'Passive reporting: *are thought to have been*.' },
        { q: '___ you need any help during your stay, please call reception.', a: ['Should'], why: 'An inverted conditional: *Should you need* = *If you need*.' },
        { q: 'It’s high time we ___ a decision about the move.', a: ['made', 'took', 'reached'], why: '*It’s high time* + past simple.' },
        { q: 'As a child, I ___ spend hours reading under the covers with a torch.', a: ['would'], why: '*Would* for a past habit; *used* would need *to*.' },
      ] },
    ] },
    { title: 'Parts 3 and 4', blocks: [
      { t: 'ex', kind: 'wordform', h: 'Part 3: use the word in capitals to form a word that fits the gap.', items: [
        { q: 'Other scientists questioned the ___ of the results.', base: 'reliable', a: ['reliability'], why: 'A noun after *the*: *reliability*.' },
        { q: 'His ___ to admit mistakes made him hard to work with.', base: 'willing', a: ['unwillingness'], why: 'Two changes: a negative prefix and a noun suffix.' },
        { q: 'There is still no ___ proof that the drug is safe.', base: 'conclude', a: ['conclusive'], why: 'An adjective before *proof*: *conclusive*.' },
        { q: 'She described her grandmother with great ___.', base: 'fond', a: ['fondness'], why: 'A noun after *great*: *fondness*.' },
      ] },
      { t: 'ex', kind: 'transform', h: 'Part 4: complete the second sentence so that it has a similar meaning to the first, using the word given. Use between three and six words, including the word given.', items: [
        { q: 'It’s possible that the email went to the wrong address. (The email … to the wrong address.)', cue: 'MIGHT', a: ['The email might have gone to the wrong address.', 'The email might well have gone to the wrong address.'], why: 'Speculating about the past: *might (well) have* + past participle.' },
        { q: 'People believe that the painting was stolen in 1990. (The painting … in 1990.)', cue: 'BELIEVED', a: ['The painting is believed to have been stolen in 1990.'], why: 'Passive reporting with a perfect passive infinitive: six words.' },
        { q: 'Without your help, I would have failed. (If … your help, I would have failed.)', cue: 'BEEN', a: ['If it had not been for your help, I would have failed.', 'If it hadn’t been for your help, I would have failed.'], why: '*If it had not been for* = *without*; the contraction also counts as two words.' },
        { q: 'His attitude is the thing that annoys me. (… his attitude.)', cue: 'WHAT', a: ['What annoys me is his attitude.'], why: 'A cleft sentence with *What*: four words.' },
      ] },
    ] },
    { title: 'Part 8', blocks: [
      { t: 'text', md: '**A** *Nadia:* My first job was in a bookshop, and I would spend my lunch breaks reading the stock. Looking back, I needn’t have worried so much about the customers; most of them knew exactly what they wanted. If I hadn’t taken that job, I doubt I would be working in publishing now.\n\n**B** *Pablo:* At seventeen I was a waiter in a busy hotel. It would appear that I was the worst waiter they had ever employed: I dropped a tray on my very first night and must have broken a dozen glasses that summer. I wish someone had shown me how to carry them properly.\n\n**C** *Grace:* I worked in a call centre while I was at university. What I remember most is not the calls but the people I sat with; two of them are still among my closest friends. The work itself was, to some extent, repetitive, but I learned to stay calm with angry callers.\n\n**D** *Sami:* My uncle gave me a job in his garage. I had been meaning to ask him for months, but I was too shy. He tended to explain everything twice, which drove me mad at the time. Had he not been so patient, I would never have learned a trade.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 8): which person (A, B, C or D) says this?', items: [
        { q: 'I made friends there who are still important to me.', o: ['C', 'A', 'B', 'D'], why: '*two of them are still among my closest friends*.' },
        { q: 'I regret that nobody taught me a practical skill.', o: ['B', 'D', 'A', 'C'], why: '*I wish someone had shown me how to carry them properly*.' },
        { q: 'That job set me on the path to my present career.', o: ['A', 'D', 'C', 'B'], why: '*If I hadn’t taken that job, I doubt I would be working in publishing now*.' },
        { q: 'I put off asking for the job because I lacked confidence.', o: ['D', 'B', 'A', 'C'], why: '*I had been meaning to ask him for months, but I was too shy*.' },
        { q: 'Some of the work was rather dull.', o: ['C', 'A', 'B', 'D'], why: '*to some extent, repetitive*.' },
        { q: 'My worries turned out to be unnecessary.', o: ['A', 'B', 'D', 'C'], why: '*I needn’t have worried so much*.' },
      ] },
      { t: 'tip', md: 'In Part 8, read the statements first and decide what kind of idea each one is: a feeling, a regret, a cause. Then scan the texts for that idea in **different words**. A person can be the answer more than once, so do not cross anyone out.' },
    ] },
  ],
  activities: {
    one: { title: 'Strategy coach', md: 'Go back through each part with the student. For every wrong answer, ask how they chose it, then show the strategy that leads to the right one: the words around a Part 1 gap, the type of word a Part 2 gap needs, the two changes in a Part 3 word, the word count in Part 4. Finish by writing together a one-line strategy for each part that the student can keep.' },
    small: { title: 'Test makers', md: 'Each student writes one Part 4 item using the language of units 1 to 6 (the first sentence, the key word and the answer) and posts it in the chat. The group solves each item, counts the words and decides whether it is fair. The two best items go on the board.' },
    group: { title: 'Gap hunters', md: 'Breakout rooms of three each write a short paragraph (five sentences) using language from units 1 to 6, then remove four grammar words to make a Part 2 task. Rooms swap tasks through the chat and solve another room’s paragraph. Back together, discuss the hardest gap and why.' },
  },
  homework: { book: 'u1 u2 u3 u4 u5 u6', md: 'Do the Reading and Use of English tasks in the lessons of units 1 to 6 again, timing yourself at about one and a half minutes per question. Write down which part took you longest and bring one question you found difficult to the next class.' },
};
