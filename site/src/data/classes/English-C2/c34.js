// English C2, class 34 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u8:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c34',
  focus: 'By the end every student names metaphor, simile, personification and symbol in a literary passage and, more importantly, explains what each image carries across to the thing described, with precise verbs of effect (*evokes, suggests, conveys, lends, undercuts, foreshadows*). They create and explain fresh images of their own and complete a full text in the format of C2 Proficiency Reading and Use of English Part 1.',
  tips: [
    'Naming is the easy part. Every time a student says *It is a metaphor*, ask *What does it carry across?* until the answer names a feeling or an idea, not just a likeness.',
    'Ban *shows* on its own and *makes the reader want to read on*. Give the verbs of effect on the board and ask for a different one in each answer.',
    'Symbols are the hardest to spot because the object is real: a stopped clock is a clock. Ask *Why this object, here, at this moment?*',
    'In Part 1 at C2 all four options are often real and similar in meaning. The answer depends on collocation and fixed phrases, sometimes on a word after the gap, so students must read the whole sentence before choosing.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Describe your street at six in the morning in one sentence, but do not use any adjectives.* Students quickly find themselves using verbs and images; write two on the board and ask what each suggests.' },
    { min: 10, title: 'Name the image', md: 'Show board page 1. Read the extract aloud once. Students sort the phrases, then say which one is hardest to label and why.' },
    { min: 10, title: 'What does it do?', md: 'Show board page 2. Students choose the main effect of each image, then explain one of them in a full sentence with a verb of effect.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 15, title: 'Exam corner', md: 'Show board page 3: a full Part 1 text, eight gaps. Students answer alone in eight minutes, then compare and justify each answer with the collocation or fixed phrase.' },
    { min: 5, title: 'Close', md: 'Each student offers the freshest image they heard today and says what it evokes. Set the homework.' },
  ],
  board: [
    { title: 'Name the image', blocks: [
      { t: 'reading', title: 'From a story: “Winter Harbour”', md: 'In January the harbour went grey and quiet, a held breath between storms. The boats lay in rows like patients in a ward, their masts nodding whenever the wind remembered them. On the sea wall the lighthouse kept watch, although nobody had needed it for years. My grandmother called it the old liar: it promised safety and gave nothing but light. Above the fish market the clock had stopped at a quarter to six, the hour the last trawler failed to come home.' },
      { t: 'ex', kind: 'sort', h: 'Which device is each phrase from the extract?', groups: ['metaphor', 'simile', 'personification', 'symbol'], explain: ['groups'], items: [
        { s: 'a held breath between storms (the quiet harbour)', g: 0, why: 'The quiet *is* a held breath: no *like* or *as*.' },
        { s: 'the boats lay in rows like patients in a ward', g: 1, why: 'An open comparison with *like*.' },
        { s: 'whenever the wind remembered them', g: 2, why: 'The wind is given a human mind.' },
        { s: 'the lighthouse kept watch', g: 2, why: 'A building given a guard’s duty.' },
        { s: 'the clock had stopped at a quarter to six', g: 3, why: 'A real object that stands for a town frozen at the moment of a loss.' },
      ] },
    ] },
    { title: 'What does it do?', blocks: [
      { t: 'ex', kind: 'choice', h: 'What is the main effect of each image?', items: [
        { q: '“The boats lay in rows like patients in a ward”', o: ['It evokes idleness and quiet suffering, as if the boats were waiting to recover.', 'It suggests the boats are new and well cared for.', 'It shows that the harbour has a hospital.'], why: 'Patients in a ward lie still, in rows, unwell and waiting: the image carries that over to the boats in winter.' },
        { q: '“My grandmother called it the old liar”', o: ['It conveys a bitterness that suggests the lighthouse once failed someone she loved.', 'It suggests the lighthouse is badly built.', 'It shows that the grandmother has a sense of humour.'], why: 'A promise of safety that *gave nothing but light* points to a loss; the last sentence confirms it.' },
        { q: '“the clock had stopped at a quarter to six, the hour the last trawler failed to come home”', o: ['It suggests that the town’s life stopped with the loss of the trawler and has not moved on.', 'It suggests that nobody in the town can repair clocks.', 'It tells the reader the exact time of the story.'], why: 'A symbol: the stopped clock stands for grief that keeps the town at one moment.' },
      ] },
      { t: 'tip', art: 'owl', md: 'A strong sentence about imagery names the device, quotes briefly and explains the effect in one go: *Calling the lighthouse “the old liar”, the grandmother turns a building into a betrayer, a bitterness that the stopped clock explains.*' },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 1', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 1): the text “The life of a cliché” is given sentence by sentence. Choose the word that best fits each gap.', items: [
        { q: 'Every cliché was once a ___ of genius: somebody, somewhere, was the first to say that a heart could break.', o: ['stroke', 'strike', 'blow', 'touch'], why: 'The fixed phrase is *a stroke of genius*.' },
        { q: 'The phrase ___ on because it captured a feeling that plainer words could not.', o: ['caught', 'took', 'held', 'picked'], why: '*Catch on*: become popular.' },
        { q: 'But the more often an image is repeated, the more its power wears ___.', o: ['thin', 'light', 'slim', 'fine'], why: '*Wear thin*: become weaker through repetition.' },
        { q: 'Before long, readers no longer ___ the picture at all; they simply take in the meaning.', o: ['register', 'record', 'enrol', 'file'], why: '*Register* = notice, be aware of.' },
        { q: 'Linguists call such expressions dead metaphors, and everyday English is shot ___ with them.', o: ['through', 'across', 'over', 'along'], why: '*Shot through with*: full of, all the way through.' },
        { q: 'We ___ conclusions, grasp ideas and run out of time without a second thought.', o: ['draw', 'pull', 'drag', 'take'], why: 'The collocation is *draw a conclusion*.' },
        { q: 'For a writer, the challenge is to find an image fresh enough to make the reader ___ up and take notice.', o: ['sit', 'stand', 'look', 'wake'], why: 'The fixed phrase is *sit up and take notice*.' },
        { q: 'Yet a metaphor that tries too hard can ___ the very effect it was meant to create.', o: ['undermine', 'underline', 'undergo', 'undertake'], why: '*Undermine*: weaken gradually; *underline* would mean the opposite.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In **Part 1**, say each option in the sentence in your head. At C2 the wrong ones are rarely impossible, just not what a native writer would say: *a strike of genius* and *wear slim* sound wrong because the phrases are fixed. Check the word **after** the gap too: *on*, *thin*, *through* and *up* decided four of these.' },
    ] },
  ],
  activities: {
    one: { title: 'The image workshop', md: 'The student chooses a place they know well and describes it in four sentences: one metaphor, one simile, one personification and one object that could work as a symbol. For each, you ask *What does it carry across?* and the student explains with a verb of effect. Then you replace one image with a cliché (*as quiet as the grave*) and the student finds a fresher one that does the same job.' },
    small: { title: 'Pass the image', md: 'Each student describes a place in two sentences with one image. The next student names the device and explains its effect with a verb of effect from the board, then adds a contrasting image of the same place (a hopeful one after a gloomy one). After two rounds, the group chooses the freshest image and the one that comes closest to a cliché, and rewrites the cliché together.' },
  },
  homework: { book: 'u8:p1 u8:p2', md: 'Finish lesson 1 of unit 8 if needed, then do lesson 2 (Who is telling the story?). Write a paragraph of about 120 words describing a place at a particular moment, with at least three kinds of figurative language, and add two sentences explaining what your strongest image is meant to suggest.' },
};
