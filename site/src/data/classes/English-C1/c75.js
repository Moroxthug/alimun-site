// English C1, class 75 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u16:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c75',
  focus: 'By the end every student discusses teaching and learning with precise collocations (*acquire a skill*, *sit an exam*, *scrape through*, *fall behind* and *catch up*, *drop out of*) and the key ideas of the debate (*rote learning*, *critical thinking*, *a well-rounded education*, *lifelong learning*). The exam goal: build words from one family with the right prefix and suffix, in the format of C1 Advanced Reading and Use of English Part 3.',
  tips: [
    '*Pass* means succeed; *take* or *sit* means do the exam. *I pass my exam tomorrow* is one of the most common mistakes at every level, so correct it at once.',
    'In word formation, make students say the part of speech first (*after the, an adjective, so a noun*), then the meaning (*positive or negative?*), then the spelling. Saying it aloud slows down careless answers.',
    'Collect spelling changes on the board as they come up: *proficient, proficiency*, *rely, reliance*, *literate, illiterate, illiteracy*.',
    'The discussion can touch on painful school memories. Keep it about systems and ideas, and let students decide how personal to be.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What is one thing school taught you well, and one thing it should have taught you?* Each student answers in two sentences.' },
    { min: 12, title: 'The language of learning', md: 'Show board page 1. Students choose the words, then use two of the collocations in a sentence about themselves.' },
    { min: 10, title: 'Fix it', md: 'Show board page 2. Students fix the mistakes in pairs and explain each change.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Board page 3: C1 Advanced Reading and Use of English Part 3. Students form the words alone with "Everyone solves this", then check the spelling together.' },
    { min: 5, title: 'Close', md: 'Each student says whether rote learning or critical thinking mattered more in their own education, with one reason. Set the homework.' },
  ],
  board: [
    { title: 'The language of learning', blocks: [
      { t: 'examples', items: [
        { s: 'She **acquired** her Italian on the job, not in a classroom.', n: 'We *acquire* knowledge or a skill.' },
        { s: 'He didn’t revise and only just **scraped through** the exam.', n: 'Passed, but only just.' },
        { s: 'After a month in hospital she **fell behind**, but soon **caught up**.', n: 'Less progress than others, then the same level again.' },
        { s: 'Universities now welcome **mature students** of every age.', n: 'Adults who start studying later than usual.' },
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the best word.', items: [
        { q: 'She passed the final exam with flying ___.', o: ['colours', 'flags', 'marks'], why: 'The idiom is *pass with flying colours*: very successfully.' },
        { q: 'If you fail the written paper, you can ___ it in August.', o: ['resit', 'retake off', 'repass'], why: 'You *resit* an exam you have failed.' },
        { q: 'I always ___ the night before a test, which never works.', o: ['cram', 'drop', 'scrape'], why: '*Cram*: study a lot in a short time before an exam.' },
        { q: 'A ___ education includes the arts and sport as well as academic subjects.', o: ['well-rounded', 'well-done', 'round-edged'], why: '*A well-rounded education* develops the whole person.' },
        { q: 'Memorising dates without understanding them is a classic example of ___ learning.', o: ['rote', 'route', 'root'], why: '*Rote learning*: learning by repetition.' },
      ] },
    ] },
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'I [pass] my driving theory exam next Tuesday.', a: ['take', 'am taking', 'sit', 'am sitting', '’m taking', '’m sitting'], why: '*Pass* means succeed; *take* or *sit* means do the exam.' },
        { s: 'My brother [made] a degree in engineering.', a: ['did', 'took', 'got'], why: 'We *do* or *take* a degree, and *get* or *gain* one.' },
        { s: 'She dropped out [the] college after one term.', a: ['of'], why: '*Drop out of* a course or college.' },
        { s: 'We had to learn the whole speech by [memory].', a: ['heart'], why: 'The phrase is *by heart*.' },
        { s: 'Our guide was extremely [knowledge] about local history.', a: ['knowledgeable'], why: 'An adjective is needed after *extremely*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Lifelong learning, rote learning, a steep learning curve: when you learn a word, learn the words it usually goes with. That is what makes C1 English sound natural rather than translated.' },
    ] },
    { title: 'Exam corner: Use of English Part 3', blocks: [
      { t: 'text', md: 'The sentences make one short text about learning outside school.' },
      { t: 'ex', kind: 'wordform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 3): use the word in capitals to form a word that fits each gap.', items: [
        { q: 'Many adults reach a high level of ___ in a language without ever taking a class.', base: 'PROFICIENT', a: ['proficiency'], why: 'A noun after *a high level of*; *-ent* becomes *-ency*.' },
        { q: 'Their success suggests that formal teaching is not always ___ for learning.', base: 'ESSENCE', a: ['essential'], why: 'An adjective after *is not always*.' },
        { q: 'Some researchers argue that classrooms are ___ designed for how adults learn.', base: 'ADEQUATE', a: ['inadequately'], why: 'A negative adverb before a past participle: prefix and suffix.' },
        { q: 'Self-taught learners often show remarkable ___ when they meet difficulties.', base: 'PERSIST', a: ['persistence'], why: 'A noun after an adjective.' },
        { q: 'Not every subject, however, can be mastered ___, without any guidance at all.', base: 'DEPEND', a: ['independently'], why: 'An adverb after the verb: prefix *in-* and suffix *-ly*.' },
        { q: 'For complete beginners, the support of ___ teachers can still make a huge difference.', base: 'EXPERIENCE', a: ['experienced'], why: 'An adjective before a noun: *experienced teachers*.' },
      ] },
      { t: 'tip', md: 'In Part 3 decide the part of speech first, then the meaning: the word in capitals may be positive while the gap needs a negative. Many gaps need two changes, such as a prefix and a suffix.' },
    ] },
  ],
  activities: {
    one: { title: 'Design your ideal school', md: 'The student designs a school for ten-year-olds in five minutes: what they would learn, how, and how they would be assessed. Push for the lesson’s vocabulary with questions (*How would you stop pupils falling behind? Would there be any rote learning?*). Note five collocations and correct them at the end.' },
    small: { title: 'Rote or critical?', md: 'Post four statements in the chat (*Learning poems by heart is a waste of time*, *Exams measure memory, not understanding*). Each student agrees or disagrees with one in about a minute, using two expressions from board page 1. The others respond with one question each.' },
    group: { title: 'Word family race', md: 'Breakout rooms of three get one root each in the chat (*educate, literate, qualify, attend, relevant*). Each room writes every word in the family they can think of, with one example sentence for the hardest. Back together, rooms read out their lists; the class checks spelling and meaning.' },
  },
  homework: { book: 'u16:p3', md: 'Finish lesson 3 of unit 16 if needed, then do lesson 4 (It is proposed that). Write 120 words on the question *Should schools teach more critical thinking and less content?* using at least five expressions from today.' },
};
