// English B2, class 70 (docs/LESSONS_PLAN.md). Review of units 13 and 14. Draft for the owner's review.
export const LESSON = {
  id: 'c70',
  focus: 'By the end of the class every student has used the main language of units 13 and 14 in speaking: cleft sentences (*What I love is…*, *It was… that…*), emphatic *do* and extreme adjectives, collocations for the arts, verb + object patterns (*let / make / allow / prevent from*) and contrast linkers (*whereas, nevertheless, despite the fact that*). The most common mistakes from both units are corrected, and students know what to practise before the two unit tests and their review and essay.',
  tips: [
    'Keep explanations to one sentence: the aim is to use the language and fix mistakes, not to teach it again.',
    'Top mistakes to listen for: *What I like are…*, *did enjoyed*, *very brilliant*, *let me to*, *prevent us to*, *despite of*, *although… but…*.',
    'Combine both units in the activity: a discussion about a controversial artwork or a festival ban lets students use cleft sentences, extreme adjectives, permission verbs and contrast in one conversation.',
    'Remind students that the review and the essay from lessons 4 are due; this class is a good moment to answer questions about them.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What is something you absolutely love, and something you are not allowed to do but would like to?* One sentence each.' },
    { min: 12, title: 'Focus and emphasis', md: 'Show board page 1. Students choose the right form and say the sentences aloud with the right stress.' },
    { min: 10, title: 'Rules and contrast', md: 'Show board page 2. Students correct the mistakes from unit 14 and explain each rule.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: B2 First Reading and Use of English Part 4 mixing both units. Students work alone, then check together and count words.' },
    { min: 5, title: 'Close', md: 'Each student names one point from units 13 and 14 they want to practise more. Set the homework.' },
  ],
  board: [
    { title: 'Focus and emphasis', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
        { q: 'What I enjoyed most ___ the dancing.', o: ['was', 'were', 'did'], why: 'After *What I enjoyed* use singular *was*.' },
        { q: 'The ending was ___ hilarious.', o: ['absolutely', 'very', 'slightly'], why: '*Hilarious* is extreme: *absolutely*.' },
        { q: 'I wasn’t sure at first, but I ___ like it in the end.', o: ['did', 'was', 'have'], why: 'Emphatic *did* + base verb.' },
        { q: 'It was the costumes ___ made the show special.', o: ['that', 'what', 'it'], why: '*It was… that…*.' },
      ] },
    ] },
    { title: 'Rules and contrast', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'The museum didn’t [let us to take] photos.', a: ['let us take'], why: '*Let* + object + base verb.' },
        { s: 'The noise prevented us [to sleep].', a: ['from sleeping'], why: '*Prevent* + object + *from -ing*.' },
        { s: '[Despite of] the bad reviews, it sold out.', a: ['Despite', 'In spite of'], why: '*Despite* has no *of*.' },
        { s: 'Some loved the show, [nevertheless] others found it too long.', a: ['whereas', 'while'], why: 'Joining two contrasting clauses needs *whereas* or *while*; *nevertheless* starts a new sentence.' },
        { s: 'We [were let] to stay until midnight.', a: ['were allowed'], why: '*Let* has no passive: *be allowed to*.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 4', blocks: [
      { t: 'text', md: 'In the format of B2 First Reading and Use of English Part 4: complete the second sentence so that it means the same as the first, using the word given and **two to five words**.' },
      { t: 'ex', kind: 'transform', h: 'Complete the second sentence. Use the word given.', items: [
        { q: 'The soundtrack impressed me most. (WHAT) ___ the soundtrack.', cue: 'WHAT', a: ['What impressed me most was'], why: 'A cleft sentence with *What… was*.' },
        { q: 'Although the tickets were expensive, the concert sold out. (FACT) Despite ___ were expensive, the concert sold out.', cue: 'FACT', a: ['the fact that the tickets', 'the fact that tickets'], why: '*Despite the fact that* + clause.' },
        { q: 'They didn’t allow us to bring food into the cinema. (LET) They ___ food into the cinema.', cue: 'LET', a: ['did not let us bring', 'didn’t let us bring'], why: '*Let* + object + base verb.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Units 13 and 14 give some of the most common Part 4 changes: *What… is / was*, *despite the fact that*, and *let / allow / make* in the active and the passive. Practise them until they are automatic.' },
    ] },
  ],
  activities: {
    one: { title: 'The festival ban', md: 'Tell the student a city wants to ban a popular music festival because of noise. They give a balanced opinion for two minutes, using a cleft sentence, an extreme adjective, two verb + object patterns and two contrast linkers. Note the mistakes and correct them at the end.' },
    small: { title: 'Art on trial', md: 'Share a photo of a controversial modern artwork or a street-art wall. The group debates whether the city should allow it or remove it. Every student must use at least one item from each unit; keep a tally on the board.' },
    group: { title: 'Two-unit challenge', md: 'In breakout rooms of three, each room gets a card in the chat with six items to use (*What I love is…, absolutely, did + verb, let, prevent from, nevertheless*) and must tell a short story using all six. Back together, rooms tell their stories and the class checks every item.' },
  },
  homework: { book: 'u13 u14', md: 'Do the unit tests of units 13 and 14 in the book. Then finish and send your review and your essay if you have not done so yet, and redo the exercises of the lesson with your lowest score.' },
};
