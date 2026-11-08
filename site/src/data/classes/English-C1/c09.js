// English C1, class 9 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u2:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c09',
  focus: 'By the end every student has read and discussed a short memoir, can see how the writer moves between the past as it was lived and the present in which it is understood, and recognises the unit’s grammar doing that work (*would*, *used to*, *was to*, participle clauses, fronting). The speaking goal: tell a memory of a person or place with the same tools, and find specific information quickly across several short texts.',
  tips: [
    'Before discussing the content, ask: *Where is the writer standing in time? When are they remembering, and when are they reflecting?* This is the skill C1 reading tests.',
    'Recycle the whole unit on purpose: ask students to find one example of each structure in the text before they talk about it.',
    'In multiple matching, students often read every text in full for every question. Teach them to read the questions first and scan for the idea, not the words.',
    'Memories of family can be emotional. Keep the speaking task open: a person, a place or a habit, real or invented.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Is there a place from your childhood that you have never been back to? Why not?* Two or three students answer.' },
    { min: 15, title: 'The memoir', md: 'Show board page 1. Students read alone and answer. Check by asking where in the text the answer is and which words show the writer’s present view.' },
    { min: 10, title: 'The unit in the text', md: 'Show board page 2. Students find the forms from the unit, then say what each one does in the story.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 8. Students read the questions first, then match them to the texts against the clock.' },
    { min: 5, title: 'Close', md: 'Each student finishes: *I have a vivid memory of… but I only understood it years later.* Set the homework.' },
  ],
  board: [
    { title: 'The kitchen at number nine', blocks: [
      { t: 'reading', title: 'The kitchen at number nine', md: 'My aunt’s kitchen was the warmest room I have ever known. Every Saturday she would bake for the whole street, and by ten o’clock the window would be white with steam. I used to sit on the step by the back door, pretending to read, waiting for the first tray to come out.\n\nShe was forever giving things away. Half of what she made left the house before lunch, wrapped in newspaper, carried to neighbours who were ill or lonely or simply new. Having grown up with very little, she seemed to think that food kept in a tin was food wasted.\n\nI was twelve when she sold the house. She was to have moved in with my mother, but she changed her mind at the last minute and took a small flat by the sea, where she was to live for another twenty years. On the kitchen table, the day I helped her pack, lay a single envelope with my name on it. Inside was the recipe for her bread, written out in pencil. I did not bake it for a long time. It was only when I had a kitchen of my own that I understood what she had been giving me.' },
      { t: 'ex', kind: 'choice', h: 'Choose the answer which fits best according to the text.', items: [
        { q: 'What does the writer suggest about the aunt’s generosity?', o: ['It came from her own experience of having little.', 'It was meant to impress the neighbours.', 'It annoyed the rest of the family.'], why: '*Having grown up with very little, she seemed to think…*' },
        { q: 'What do we learn about the aunt’s plans when she sold the house?', o: ['She did not do what had been arranged.', 'She moved in with the writer’s mother.', 'She regretted moving to the sea.'], why: '*She was to have moved in with my mother, but she changed her mind.*' },
        { q: 'In the last sentence, the writer is', o: ['reflecting on the meaning of the gift from a later point in life.', 'describing how difficult the recipe was.', 'explaining why she stopped baking.'], why: '*It was only when I had a kitchen of my own that I understood*: the adult writer looking back.' },
      ] },
    ] },
    { title: 'The unit in the text', blocks: [
      { t: 'ex', kind: 'spot', h: 'Tap the form from this unit in each sentence from the memoir.', items: [
        { s: 'Every Saturday she [would bake] for the whole street.', why: '*Would* for a repeated past action, with a nostalgic tone.' },
        { s: 'She [was forever giving] things away.', why: '*Was forever* + *-ing*: a habit, seen with affection.' },
        { s: '[Having grown up] with very little, she seemed to think that food kept in a tin was food wasted.', why: 'A participle clause for an earlier situation that explains her behaviour.' },
        { s: 'She [was to have moved] in with my mother.', why: '*Was to have* + past participle: a plan that did not happen.' },
        { s: 'On the kitchen table [lay] a single envelope with my name on it.', why: 'Fronting: a place first, then the verb before the subject.' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 8', blocks: [
      { t: 'text', md: 'Four people remember a teacher. **A**: Marta, whose music teacher made her practise scales for a year before she was allowed to play a real piece. **B**: Tom, whose history teacher would read from old letters and diaries instead of the textbook. **C**: Leila, whose science teacher failed her in her first test and then stayed late every Thursday to help her catch up. **D**: Piotr, whose art teacher once told him he had no talent, a remark he was to prove wrong twenty years later.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 8): which person mentions…', items: [
        { q: 'a teacher who gave up their own time?', o: ['C, Leila', 'A, Marta', 'B, Tom', 'D, Piotr'], why: 'Leila’s teacher *stayed late every Thursday*.' },
        { q: 'a judgement that later turned out to be mistaken?', o: ['D, Piotr', 'C, Leila', 'A, Marta', 'B, Tom'], why: 'Piotr was *to prove wrong* the remark about talent.' },
        { q: 'a teacher who preferred original sources to set material?', o: ['B, Tom', 'A, Marta', 'C, Leila', 'D, Piotr'], why: 'Old letters and diaries *instead of the textbook*.' },
        { q: 'a long period of preparation before the real work began?', o: ['A, Marta', 'B, Tom', 'C, Leila', 'D, Piotr'], why: 'A year of scales *before she was allowed to play a real piece*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In **Part 8** read the questions first and underline the key idea in each. The texts say the same thing in **different words**: *gave up their own time* is *stayed late every Thursday*. Do not expect the questions to follow the order of the texts.' },
    ] },
  ],
  activities: {
    one: { title: 'A memoir in miniature', md: 'The student tells a memory of a person who mattered to them, using *would* or *used to*, one participle clause, one fronted sentence and one phrase about memory. Then ask *How do you see it now?* so they move from the past as lived to the present view. Write their best two sentences together.' },
    small: { title: 'Then and now', md: 'Each student describes a place from their past twice: first as it was (*There used to be…*, *We would…*), then as they see it now (*It was only later that I realised…*). The group asks one question each about what changed.' },
    group: { title: 'Teachers we remember', md: 'In breakout rooms of four, each student describes a teacher they remember in about a minute. The room then writes four Part 8 questions about their stories (*Which person mentions…?*) and tests another room with them.' },
  },
  homework: { book: 'u2:p4', md: 'Finish lesson 4 of unit 2 if needed, and do the unit 2 test. Write about 150 words: a memory of a person or a place, told with *would* or *used to*, at least two participle clauses and one fronted sentence, ending with how you see it now.' },
};
