// English C1, class 84 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u18:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c84',
  focus: 'By the end every student talks about technology and change with natural collocations: *cutting-edge* and *state-of-the-art*, *make a breakthrough in*, *pave the way for*, *go viral*, *catch on*, *keep pace with* and *fall behind*, *become obsolete*, *raise concerns about*, *an unintended consequence*. The speaking goal: give an opinion on a new technology through the collocations themselves, without saying *I think* every time. The exam goal: form words in the technology word families, in the format of C1 Advanced Reading and Use of English Part 3.',
  tips: [
    'The verb is usually the problem: *make* (not *do*) a breakthrough, *go* (not *become*) viral, *raise* (not *rise*) concerns, *keep pace with* (no article). Correct the verb and repeat the whole phrase.',
    'Point out the attitude in each phrase: *cutting-edge* and *a breakthrough* are positive, *pose a threat to* and *an unintended consequence* are critical. Ask students to describe one device twice, once positively and once critically.',
    '*Obsolete* and *cutting-edge* are opposites. Students sometimes use *obsolete* to mean *new*; check with a quick example.',
    'For word formation, technology words have tricky families: *obsolete, obsolescence*; *innovate, innovative, innovation*; *rely, reliable, reliability, unreliable*. Build them on the board as they come up.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What is a piece of technology you used ten years ago that has now become obsolete?* Each student answers in two sentences.' },
    { min: 12, title: 'Collocations of change', md: 'Show board page 1. Students choose the words that go with each key word, then make one sentence with two of the collocations.' },
    { min: 10, title: 'Fix it', md: 'Show board page 2. Students fix the mistakes in pairs, then say whether each corrected sentence sounds positive or critical.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Board page 3: C1 Advanced Reading and Use of English Part 3. Students form the words alone with "Everyone solves this", then check the spelling together.' },
    { min: 5, title: 'Close', md: 'Each student describes one new technology in a single sentence that shows their attitude through a collocation. Set the homework.' },
  ],
  board: [
    { title: 'Collocations of change', blocks: [
      { t: 'examples', items: [
        { s: 'The discovery **paved the way for** cheaper solar panels.', n: 'Made a later development possible.' },
        { s: 'Small shops are struggling to **keep pace with** online retailers.', n: 'Move as fast as something else.' },
        { s: 'The app’s success was **an unintended consequence** of a school project.', n: 'A result nobody planned.' },
        { s: '**Early adopters** paid twice as much for the first models.', n: 'The first people to use a new product.' },
      ] },
      { t: 'ex', kind: 'colloc', h: 'Which words go naturally with the key word?', items: [
        { key: 'make', o: ['a breakthrough', 'progress', 'viral', 'an advance', 'obsolete'], a: [0, 1, 3], why: '*Make a breakthrough, progress, an advance*; but *go viral* and *become obsolete*.' },
        { key: 'raise', o: ['concerns', 'doubts', 'a breakthrough', 'questions', 'pace'], a: [0, 1, 3], why: 'We *raise* concerns, doubts and questions.' },
        { key: 'state-of-the-art', o: ['equipment', 'technology', 'facilities', 'fax machine', 'past'], a: [0, 1, 2], why: '*State-of-the-art* describes the newest equipment, technology or facilities.' },
        { key: 'become', o: ['obsolete', 'outdated', 'widespread', 'viral', 'a breakthrough'], a: [0, 1, 2], why: '*Become obsolete, outdated, widespread*; but *go viral*.' },
      ] },
    ] },
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'Engineers have finally [done] a breakthrough in battery life.', a: ['made', 'achieved'], why: '*Make* or *achieve* a breakthrough.' },
        { s: 'Her video [became viral] within hours.', a: ['went viral'], why: 'The fixed phrase is *go viral*.' },
        { s: 'Older staff find it hard to keep [the pace of] new software.', a: ['pace with'], why: '*Keep pace with*, no article.' },
        { s: 'The new cameras have [risen] concerns about privacy.', a: ['raised'], why: '*Raise* takes an object; *rise* does not.' },
        { s: 'Once the smartphone arrived, the pager quickly became [cutting-edge].', a: ['obsolete', 'outdated'], why: 'Out of use because something better exists: *obsolete*.' },
        { s: 'Many people worry that the technology could pose a threat [for] jobs.', a: ['to'], why: '*Pose a threat to*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Collocations carry your opinion for you. *The scheme paved the way for* sounds positive; *The scheme raised serious concerns about* sounds critical. In an essay this lets you persuade without writing *I think* in every sentence.' },
    ] },
    { title: 'Exam corner: Use of English Part 3', blocks: [
      { t: 'text', md: 'The sentences make one short text about how quickly technology goes out of date.' },
      { t: 'ex', kind: 'wordform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 3): use the word in capitals to form a word that fits each gap.', items: [
        { q: 'Many devices are designed with built-in ___, so they stop working after a few years.', base: 'OBSOLETE', a: ['obsolescence'], why: 'A noun after *built-in*: *obsolete* becomes *obsolescence*.' },
        { q: 'Manufacturers argue that rapid change is the price of ___.', base: 'INNOVATE', a: ['innovation'], why: 'A noun after *the price of*.' },
        { q: 'Consumers, however, complain about the ___ of cheaper models.', base: 'RELY', a: ['unreliability'], why: 'A negative noun after *the*: prefix and suffix.' },
        { q: 'Repairs are often ___ expensive, so people simply buy a new phone.', base: 'PROHIBIT', a: ['prohibitively'], why: 'An adverb before an adjective: *prohibitively expensive*.' },
        { q: 'The ___ adoption of repair laws in some countries may change this.', base: 'WIDE', a: ['widespread'], why: 'An adjective before a noun: *widespread adoption*.' },
        { q: 'For now, though, last year’s cutting-edge phone is this year’s ___ bargain.', base: 'DATE', a: ['outdated'], why: 'An adjective with a prefix: *outdated*.' },
      ] },
      { t: 'tip', md: 'Part 3 at C1 often needs two changes at once (*rely* becomes *unreliability*) or a change inside the word (*obsolete* becomes *obsolescence*). Read the whole sentence: the meaning tells you whether the word must be negative.' },
    ] },
  ],
  activities: {
    one: { title: 'Two reviews', md: 'The student chooses a real device or app. They review it twice in about a minute each: once as an enthusiastic early adopter, once as a critic. Each review must use at least three collocations from the lesson. Discuss which collocations changed the attitude.' },
    small: { title: 'Obsolete by 2040?', md: 'Post six things in the chat (cash, car keys, passwords, printed books, landline phones, office buildings). Each student chooses one and argues whether it will have become obsolete by 2040, with two collocations. The others agree or disagree with a reason.' },
    group: { title: 'Pitch an invention', md: 'Breakout rooms of three invent a cutting-edge product and prepare a one-minute pitch with at least four collocations from the lesson. After each pitch, another room raises one concern about an unintended consequence. The class chooses the invention most likely to catch on.' },
  },
  homework: { book: 'u18:p3', md: 'Finish lesson 3 of unit 18 if needed, then do lesson 4 (A month of quiet evenings). Write 120 words about a technology that has changed your daily life, showing your attitude through at least five collocations from today.' },
};
