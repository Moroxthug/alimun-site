// English B1, class 5 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u1:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c05',
  focus: 'By the end every student can use the words for the big moments of a life (*be born, grow up, move, get a degree, retire*), understand a short life story and find its key details, and tell the story of their own life or someone they admire in about two minutes, choosing between the past simple and the present perfect. This class pulls unit 1 together.',
  tips: [
    '*be born* is always passive: *I was born in 1990*, never *I born*. Correct it every time.',
    'Learners mix *grow up* (become an adult) and *bring up* (look after a child). Give one example of each.',
    'For the life story, insist on time linkers: *when I was ten, after that, a few years later, since then*.',
    'If a student does not want to talk about their own life, let them talk about a famous person or a grandparent.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Show three photos of yourself at different ages (or describe them). Students guess where you lived and what you did then.' },
    { min: 10, title: 'Big moments', md: 'Show board page 1. Students match the words and meanings, then put the moments in a typical order.' },
    { min: 10, title: 'A life story', md: 'Show board page 2. Students read the story and do the true or false task alone, then check together.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 15, title: 'Exam corner', md: 'Show board page 3: B1 Preliminary Reading Part 4. Students choose the sentence for each gap, then explain which words before and after the gap helped them.' },
    { min: 5, title: 'Close', md: 'Each student says one big moment of their life so far and one they hope for. Set the homework.' },
  ],
  board: [
    { title: 'The big moments of a life', blocks: [
      { t: 'ex', kind: 'match', h: 'Match each phrase with its meaning.', pairs: [
        ['be born', 'start your life'],
        ['grow up', 'go from child to adult'],
        ['get a degree', 'finish a university course'],
        ['settle down', 'start a calm life in one place'],
        ['retire', 'stop working because of your age'],
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'I [born] in Casablanca in 1995.', a: ['was born'], why: '*be born* is always passive: *I was born*.' },
        { s: 'She grew [in] a small village.', a: ['up in'], why: 'The phrasal verb is *grow up*.' },
      ] },
    ] },
    { title: 'A life story', blocks: [
      { t: 'reading', title: 'Elena’s life in three cities', md: 'Elena was born in Valencia in 1988 and grew up near the beach. When she was nineteen, she moved to Madrid to study engineering, and she got her degree four years later.\n\nIn 2014 she got a job in Munich. At first she found the winters hard, but she learned German and made good friends. She has lived in Munich for ten years now, and last year she started her own company.' },
      { t: 'ex', kind: 'tf', h: 'Read the story. Are the sentences true or false?', items: [
        { q: 'Elena studied in Valencia.', a: 'f', why: 'She moved to Madrid to study.' },
        { q: 'She finished her degree when she was about twenty-three.', a: 't', why: 'She started at nineteen and finished four years later.' },
        { q: 'She still lives in Munich.', a: 't', why: '*She has lived in Munich for ten years now.*' },
        { q: 'She liked the Munich winters from the start.', a: 'f', why: '*At first she found the winters hard.*' },
      ] },
    ] },
    { title: 'Exam corner: the missing sentences', blocks: [
      { t: 'reading', title: 'A famous chef', md: 'Paul Martin grew up in a small town in the north of France. (1) ___ His grandmother taught him to cook when he was eight. After school he worked in restaurants in Paris and London. (2) ___ Today he has three restaurants and has written four cookbooks.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam (Reading, Part 4): choose the sentence that fits each gap.', items: [
        { q: 'Gap 1', o: ['His family owned a bakery there.', 'He opened his first restaurant in 2015.', 'His books are sold all over the world.'], why: 'It continues the sentence about the town where he grew up.' },
        { q: 'Gap 2', o: ['In 2010 he opened his own restaurant in Lyon.', 'His grandmother was born in Spain.', 'He did not like school very much.'], why: 'It comes between working for others and having three restaurants today.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Reading Part 4, read the sentences before and after each gap. Look for links: names, times (*after that*, *today*) and words like *there* or *it*.' },
    ] },
  ],
  activities: {
    one: { title: 'My life in five moments', md: 'The student chooses five big moments of their life (or a famous person’s) and tells the story in about two minutes. You ask three follow-up questions, then retell the story with one mistake for the student to find.' },
    small: { title: 'Timeline guessing', md: 'Each student writes five years in the chat (*1995, 2008, 2013…*). The others ask *What happened in…?* and *Have you…since then?* and the student answers. Vote for the most interesting life story.' },
    group: { title: 'Biography race', md: 'Breakout rooms of three get the name of a famous person (in the chat). In eight minutes they write a five-sentence life story with *was born, grew up, moved, has…*. Rooms read their stories; the class guesses who it is before the name is said.' },
  },
  homework: { book: 'u1', md: 'Do the unit 1 test. Write the story of your life, or of someone you admire, in about 100 words, with at least three time linkers.' },
};
