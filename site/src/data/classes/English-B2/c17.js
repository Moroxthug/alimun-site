// English B2, class 17 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u4:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c17',
  focus: 'By the end of the class every student can report beliefs, claims and expectations in the impersonal passive, in both patterns: **It is said that he is rich** and **He is said to be rich**, including past reference (*He is believed to have left*). Accuracy point: *it* goes with *that*; a real subject goes with *to*.',
  tips: [
    'The classic mistake is mixing the two patterns: *He is said that he is rich*. Write two fixed frames on the board, **It is + said + that + clause** and **Subject + is said + to + infinitive**, and keep them there all class.',
    'Past reference is the hard part: *He is thought to have left the country.* Draw a timeline: the belief is now (*is thought*), the action is earlier (*to have left*).',
    'This structure is formal and common in news and reports, and B2 First Part 4 tests it often. Tell students it makes their essays sound more objective.',
    'Useful verbs: *say, think, believe, expect, report, know, consider, estimate*. Learners overuse *say*; push for at least three different verbs.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Read a rumour aloud: *People say the old cinema is going to close.* Ask how a newspaper would write it. Collect ideas and show *It is said that…* and *The old cinema is said to be…*' },
    { min: 12, title: 'Two patterns', md: 'Show board page 1. Build both patterns from one active sentence, then show past reference with *to have* + past participle.' },
    { min: 10, title: 'Practice', md: 'Show board page 2. Students rewrite the sentences alone, then compare in pairs before checking on the board.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: key word transformations in the format of B2 First Reading and Use of English Part 4. Students work alone, then check word counts and the key word on the board.' },
    { min: 5, title: 'Close', md: 'Each student reports one thing that is believed about their city or country. Set the homework.' },
  ],
  board: [
    { title: 'Two ways to report', blocks: [
      { t: 'table', caption: 'From people say… to the passive', explain: ['head'], head: ['Active', 'It is … that', 'Subject + to'], rows: [
        ['People say he is rich.', 'It is said that he is rich.', 'He is said to be rich.'],
        ['Experts expect prices to rise.', 'It is expected that prices will rise.', 'Prices are expected to rise.'],
        ['People believe she left.', 'It is believed that she left.', 'She is believed to have left.'],
        ['They think the fire started at night.', 'It is thought that the fire started at night.', 'The fire is thought to have started at night.'],
      ] },
      { t: 'text', md: 'When the action happened **before** the belief, use **to have** + past participle. When it is happening now, use **to be** + -ing: *The suspect is thought **to be hiding** in the city.*' },
    ] },
    { title: 'Practice', blocks: [
      { t: 'ex', kind: 'transform', h: 'Rewrite the sentence starting with the words given.', items: [
        { q: 'People believe the painting is a fake.', cue: 'The painting is believed', a: ['The painting is believed to be a fake.'], why: 'Subject + *is believed* + *to be*.' },
        { q: 'People say the old castle was built in 1200.', cue: 'It is said', a: ['It is said that the old castle was built in 1200.', 'It is said the old castle was built in 1200.'], why: '*It is said that* + the original clause.' },
        { q: 'Police think the thieves escaped by car.', cue: 'The thieves are thought', a: ['The thieves are thought to have escaped by car.'], why: 'Earlier action: *to have escaped*.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Each sentence has one mistake. Find it and fix it.', items: [
        { s: 'He [is said that] he is the best player in the club.', a: ['is said to be'], why: 'With a real subject, use *to*: *He is said to be…*' },
        { s: 'The minister is reported [to resign] yesterday.', a: ['to have resigned'], why: '*yesterday* is earlier than the report: *to have resigned*.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 4', blocks: [
      { t: 'text', md: 'In the format of B2 First Reading and Use of English Part 4: complete the second sentence with two to five words, including the word given.' },
      { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with the key word.', items: [
        { q: 'People say that the hotel is haunted. (The hotel … haunted.)', cue: 'SAID', a: ['The hotel is said to be haunted.'], why: '*is said to be* is four words with the key word.' },
        { q: 'Experts think the bridge collapsed because of the storm. (The bridge … collapsed because of the storm.)', cue: 'THOUGHT', a: ['The bridge is thought to have collapsed because of the storm.'], why: 'Earlier action: *is thought to have collapsed*.' },
        { q: 'They expect the new museum to open in June. (It … the new museum will open in June.)', cue: 'EXPECTED', a: ['It is expected that the new museum will open in June.'], why: '*It is expected that* is four words.' },
      ] },
      { t: 'tip', md: 'If the second sentence starts with **It**, you need **that**. If it starts with a person or a thing, you need **to**. Decide this first, then check the time: is the action earlier than the belief?' },
    ] },
  ],
  activities: {
    one: { title: 'The news desk', md: 'Give the student five rumours in plain English (*People say the mayor is resigning; experts think the lake is drying up…*). The student writes or says each one as a news sentence, alternating the two patterns. Then the student invents two rumours about a famous person and you report them. Check *to have* for past actions.' },
    small: { title: 'Local legends', md: 'Each student shares a legend or belief from their town or country (*The old tower is said to be…*). The others ask *Is it believed that…?* questions. At the end, the group writes the three most surprising beliefs in the chat in both patterns.' },
    group: { title: 'Breaking news', md: 'Breakout rooms of three or four write a short breaking-news report (five sentences) about an invented event, using at least four impersonal passives with different verbs. Back together, one person per room reads it as a newsreader; the others count the passive forms and spot any mistakes.' },
  },
  homework: { book: 'u4:p3', md: 'Finish book lesson 3 of unit 4 (It is said that…), including the speaking task. Then find a short news story online and rewrite three sentences from it in the impersonal passive, in both patterns.' },
};
