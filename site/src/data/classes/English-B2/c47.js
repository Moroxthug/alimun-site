// English B2, class 47 (docs/LESSONS_PLAN.md). Builds on book lesson u10:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c47',
  focus: 'By the end of the class every student can build nouns, adjectives, adverbs and verbs from a base word with common prefixes and suffixes (*-tion, -ment, -ness, -ity, -ful, -less, -ous, -ive, -ly, un-, im-, dis-, mis-, re-, -en, -ise*), and has a clear method for B2 First Reading and Use of English Part 3: decide the word class from the gap, then the meaning (positive or negative), then the spelling.',
  tips: [
    'Most Part 3 mistakes are the **word class**, not the spelling. Before any suffix, ask: *noun, adjective, adverb or verb?* Look at the words around the gap.',
    'Negative prefixes are the second trap: the sentence may need *unreliable*, not *reliable*. Teach students to read the whole sentence for meaning.',
    'Plural nouns are often needed (*improvements*). Remind students to check whether the noun is countable and plural.',
    'Spelling changes matter: *decide → decision*, *pronounce → pronunciation*, *happy → happiness*. Keep a list on the board as they come up.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Write *CREATE* on the board. How many words can the class build from it in one minute? (*creative, creation, creativity, creator, recreate*).' },
    { min: 12, title: 'Word families', md: 'Board page 1. Go through the suffix table; students add one example each from their own knowledge.' },
    { min: 10, title: 'Practice', md: 'Board page 2. The class sorts words by class, then completes the gap sentences.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Board page 3: a Part 3 text. Students follow the three-step method and say the word class aloud before writing.' },
    { min: 5, title: 'Close', md: 'Each student gives one base word and the class builds its family. Set the homework.' },
  ],
  board: [
    { title: 'Building words', blocks: [
      { t: 'table', caption: 'Common endings', explain: ['head', 'col0'], head: ['Word class', 'Endings', 'Examples'], rows: [
        ['noun', '-tion, -ment, -ness, -ity, -ance, -er', 'education, improvement, kindness, ability, performance, learner'],
        ['adjective', '-ful, -less, -ous, -ive, -able, -al', 'useful, careless, famous, creative, reliable, practical'],
        ['adverb', '-ly', 'carefully, easily, surprisingly'],
        ['verb', '-en, -ise, -ify, re-', 'strengthen, memorise, simplify, rewrite'],
      ] },
      { t: 'table', caption: 'Prefixes that change meaning', explain: ['head', 'col1'], head: ['Prefix', 'Meaning', 'Examples'], rows: [
        ['un-, in-, im-, ir-, dis-', 'not, the opposite', 'unlikely, inexpensive, impossible, irregular, dishonest'],
        ['mis-', 'wrongly', 'misunderstand, mispronounce'],
        ['re-', 'again', 'retake, rebuild'],
        ['over-, under-', 'too much, too little', 'overestimate, underpaid'],
      ] },
    ] },
    { title: 'Practice', blocks: [
      { t: 'ex', kind: 'sort', h: 'Noun, adjective or adverb?', groups: ['noun', 'adjective', 'adverb'], explain: ['groups'], items: [
        { s: 'patience', g: 0, why: '*-ence* makes a noun.' },
        { s: 'helpful', g: 1, why: '*-ful* makes an adjective.' },
        { s: 'confidently', g: 2, why: '*-ly* makes an adverb.' },
        { s: 'achievement', g: 0, why: '*-ment* makes a noun.' },
        { s: 'expensive', g: 1, why: '*-ive* makes an adjective.' },
        { s: 'happiness', g: 0, why: '*-ness* makes a noun.' },
      ] },
      { t: 'ex', kind: 'wordform', h: 'Complete each sentence with a form of the word in capitals.', items: [
        { q: 'There has been a big ___ in my writing this year.', base: 'improve', a: ['improvement'], why: 'After *a big*, we need a noun: *improvement*.' },
        { q: 'It is ___ to learn a language without practice.', base: 'possible', a: ['impossible'], why: 'The meaning is negative: *impossible*.' },
        { q: 'She answered every question ___.', base: 'correct', a: ['correctly'], why: 'It describes how she answered: an adverb.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 3', blocks: [
      { t: 'tip', art: 'owl', md: 'Three steps for every gap in Part 3: **class** (look at the words before and after), **meaning** (positive or negative? singular or plural?), **spelling** (check the letters that change).' },
      { t: 'ex', kind: 'wordform', h: 'In the format of B2 First Reading and Use of English Part 3: use the word in capitals to form a word that fits the gap.', items: [
        { q: 'Learning as an adult needs a lot of ___.', base: 'patient', a: ['patience'], why: 'After *a lot of*: a noun.' },
        { q: 'Many adults find that their ___ to remember new words is better than they expected.', base: 'able', a: ['ability'], why: 'After *their*: a noun, *ability*.' },
        { q: 'Online courses are often ___ cheaper than evening classes.', base: 'surprise', a: ['surprisingly'], why: 'It modifies the adjective *cheaper*: an adverb.' },
        { q: 'Without regular practice, progress can feel very ___.', base: 'satisfy', a: ['unsatisfying'], why: 'The meaning is negative and an adjective is needed: *unsatisfying*.' },
        { q: 'Teachers say ___ is the key to success.', base: 'motivate', a: ['motivation'], why: 'The subject of the clause: a noun, *motivation*.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Word family race', md: 'Give the student five base words (*create, decide, rely, honest, strong*). They have one minute for each to build as many family members as possible and use two in a sentence. Then they make you a five-gap Part 3 text from their words.' },
    small: { title: 'Build and challenge', md: 'Each student writes a sentence with a gap and a base word in capitals for the others. The group solves each one and the writer explains the word class. Count the correct answers; the most difficult correct item wins.' },
    group: { title: 'Word-family wall', md: 'In breakout rooms of three, each room gets four base words in the chat and builds full families (noun, adjective, adverb, verb, negative). Back together, rooms share families and the class adds them to a shared list on the board.' },
  },
  homework: { book: 'u10:p3', md: 'Finish book lesson 3 of unit 10. Then start a word-family notebook: ten base words with all their forms and one example sentence each.' },
};
