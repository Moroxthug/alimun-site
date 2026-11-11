// English B2, class 72 (docs/LESSONS_PLAN.md). Builds on book lesson u15:p1 (emphasis with inversion). Draft for the owner's review.
export const LESSON = {
  id: 'c72',
  focus: 'By the end of the class every student can recognise and use three emphatic structures with inversion: *Not only… but also*, *Never have I…* and *Hardly… when* / *No sooner… than*, and knows that the auxiliary comes before the subject. They use them in a short, dramatic story about a challenge. Accuracy of word order matters more than quantity.',
  tips: [
    'The key point is the question order after the negative word: *Never **have I** seen…*, not *Never I have seen*. Drill it until it is automatic.',
    'Inversion is formal and dramatic. Tell students to use it once or twice in an essay or story, not in every sentence.',
    'Students often forget *do/does/did* when there is no auxiliary: *Not only **did** she win…*.',
    '*Hardly* goes with *when*, *No sooner* goes with *than*. Write the pairs on the board and leave them there.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What is the most frightening thing you have ever done?* Collect two or three answers and write one on the board in a normal sentence.' },
    { min: 12, title: 'Never have I…', md: 'Show board page 1. Rewrite the warm-up sentence with inversion. Explain the auxiliary before the subject, then students rewrite the examples aloud.' },
    { min: 10, title: 'Hardly and no sooner', md: 'Show board page 2. Students solve the exercise alone, then check together.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: B2 First Use of English Part 4. Students do it with "Everyone solves this", then reveal.' },
    { min: 8, title: 'Close', md: 'Each student says one dramatic sentence about the class (*Never have I worked so hard on a Tuesday!*). Set the homework.' },
  ],
  board: [
    { title: 'Not only, never: putting the verb first', blocks: [
      { t: 'table', caption: 'Normal sentence or emphasis', explain: ['head'], head: ['Normal', 'With inversion'], rows: [
        ['I have never seen such a storm.', 'Never have I seen such a storm.'],
        ['She won the race and broke the record.', 'Not only did she win the race, but she also broke the record.'],
        ['I had rarely felt so tired.', 'Rarely had I felt so tired.'],
      ] },
      { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
        { a: 'Never have I been so frightened.', why: 'Negative word, auxiliary, subject, verb.' },
        { a: 'Not only did he climb the mountain, but he also skied down.', why: '*did* comes before *he* after *Not only*.' },
      ] },
    ] },
    { title: 'Hardly… when, no sooner… than', blocks: [
      { t: 'examples', items: [
        { s: '**Hardly had** we started **when** it began to rain.', n: 'One thing happened immediately after another.' },
        { s: '**No sooner had** she jumped **than** she regretted it.', n: '*No sooner* goes with *than*.' },
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
        { q: 'Hardly had I left the house ___ the phone rang.', o: ['when', 'than', 'that'], why: '*Hardly… when*.' },
        { q: 'No sooner had we arrived ___ the lights went out.', o: ['than', 'when', 'then'], why: '*No sooner… than*.' },
        { q: 'Never ___ such a brave decision.', o: ['have I made', 'I have made', 'I made'], why: 'Auxiliary before the subject.' },
        { q: 'Not only ___ the exam, but she also got the top mark.', o: ['did she pass', 'she passed', 'passed she'], why: 'No auxiliary in the normal sentence, so add *did*.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of B2 First Part 4: use the word given; two to five words.', items: [
        { q: 'I have never seen such a beautiful sunrise.', cue: 'NEVER', a: ['Never have I seen such a beautiful sunrise.', 'Never have I seen such a beautiful sunrise'], why: 'Inversion after *Never*: *have I seen*.' },
        { q: 'She sang well and she also wrote the songs.', cue: 'ONLY', a: ['Not only did she sing well, but she also wrote the songs.', 'Not only did she sing well but she also wrote the songs.'], why: '*Not only did she…*' },
        { q: 'As soon as we sat down, the film started.', cue: 'SOONER', a: ['No sooner had we sat down than the film started.'], why: '*No sooner had… than*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 4 you must use the key word without changing it, and write between two and five words. Contractions count as two words. Check the meaning has not changed.' },
    ] },
  ],
  activities: {
    one: { title: 'Tell it dramatically', md: 'The student tells you about a real challenge (a move, an exam, a sport) in normal sentences. Then retell it together as a radio presenter would, adding three sentences with inversion. Record or write the best version.' },
    small: { title: 'The adventure story', md: 'Students build a story about a mountain trip together: each adds one sentence, and every third sentence must use inversion (*Hardly had we…*, *Never had I…*). Correct word order on the spot.' },
    group: { title: 'Headline makers', md: 'In breakout rooms of three, students write five dramatic news headlines about everyday events with inversion (*Never has a bus been so late!*). Each room reads its best two to the class; the class votes for the funniest correct one.' },
  },
  homework: { book: 'u15:p1', md: 'Finish book unit 15, lesson 1. Write a 100-word story about a time you took a risk, with at least three sentences using inversion.' },
};
