// English B2, class 23 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u5:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c23',
  focus: 'By the end of the class every student can express wishes and regrets about the present (*I wish I lived by the sea*), the past (*If only I had listened*) and other people’s annoying habits (*I wish he would stop*), and can say what they or others would prefer with **would rather** (*I’d rather stay in; I’d rather you didn’t smoke*).',
  tips: [
    'Students say *I wish I would have a car*. Explain that *wish + would* is only for other people or things we want to change: *I wish it would stop raining.* For your own situation, use the past simple.',
    '*Would rather* has two patterns that learners mix: **I’d rather + infinitive** (same subject) and **I’d rather + someone + past simple** (another person). Put both on the board.',
    'Pronunciation: *I wish I’d* sounds like *I wish I would* or *I had*. Model the full forms slowly, then the contractions.',
    'Keep it emotional and real: wishes and regrets are much easier to remember when they are the students’ own.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *If you had one wish for your life right now, what would it be?* Write two answers on the board and rephrase them with *I wish…*' },
    { min: 12, title: 'Wish, if only, would rather', md: 'Show board page 1. Go through the three times and the two *would rather* patterns.' },
    { min: 10, title: 'Practice', md: 'Show board page 2. Students complete and fix alone, then check together.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: key word transformations in the format of B2 First Reading and Use of English Part 4. Students work alone, then check word counts together.' },
    { min: 5, title: 'Close', md: 'Each student says one present wish and one past regret about learning English. Set the homework.' },
  ],
  board: [
    { title: 'Wishes, regrets and preferences', blocks: [
      { t: 'table', caption: 'wish / if only', explain: ['head', 'col0'], head: ['About', 'Form', 'Example'], rows: [
        ['the present', 'wish + past simple / were', 'I wish I lived by the sea.'],
        ['the past (a regret)', 'wish + past perfect', 'If only I had listened to her.'],
        ['other people, annoying things', 'wish + would + infinitive', 'I wish my neighbour would turn the music down.'],
      ] },
      { t: 'table', caption: 'would rather', explain: ['head', 'col0'], head: ['Who', 'Form', 'Example'], rows: [
        ['the same person', 'would rather + infinitive', 'I’d rather stay at home tonight.'],
        ['another person', 'would rather + someone + past simple', 'I’d rather you didn’t tell anyone.'],
      ] },
    ] },
    { title: 'Practice', blocks: [
      { t: 'ex', kind: 'gap', h: 'Complete with the right form of the verb in brackets.', items: [
        { q: 'I wish I ___ (have) more free time. I’m always busy.', a: ['had'], why: 'Present wish: past simple.' },
        { q: 'If only we ___ (leave) earlier, we wouldn’t have missed the plane.', a: ['had left', '’d left'], why: 'Past regret: past perfect.' },
        { q: 'I’d rather you ___ (not / call) me so late.', a: ['didn’t call', 'did not call'], why: '*would rather* + another person + past simple.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Each sentence has one mistake. Find it and fix it.', items: [
        { s: 'I wish I [would have] a bigger flat.', a: ['had'], why: 'Your own situation: no *would*, past simple.' },
        { s: 'I wish I [didn’t eat] that whole cake yesterday.', a: ['hadn’t eaten', 'had not eaten'], why: 'A past event: past perfect.' },
        { s: 'I’d rather [to stay] in tonight.', a: ['stay'], why: '*would rather* + infinitive without *to*.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 4', blocks: [
      { t: 'text', md: 'In the format of B2 First Reading and Use of English Part 4: complete the second sentence with two to five words, including the word given.' },
      { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with the key word.', items: [
        { q: 'I regret selling my old guitar. (I … my old guitar.)', cue: 'WISH', a: ['I wish I had not sold my old guitar.', 'I wish I hadn’t sold my old guitar.'], why: 'Past regret: *wish* + past perfect.' },
        { q: 'I would prefer you not to use my phone. (I’d … my phone.)', cue: 'RATHER', a: ['I’d rather you didn’t use my phone.', 'I’d rather you did not use my phone.'], why: '*would rather* + another person + past simple.' },
        { q: 'It’s a pity I can’t speak Japanese. (If … speak Japanese.)', cue: 'ONLY', a: ['If only I could speak Japanese.'], why: 'Present wish about ability: *If only I could*.' },
      ] },
      { t: 'tip', md: 'Words like *regret*, *it’s a pity* and *prefer* are signals in Part 4: the answer is often *wish*, *if only* or *would rather*. Then check the time: present wish (past simple) or past regret (past perfect)?' },
    ] },
  ],
  activities: {
    one: { title: 'The complaints box', md: 'The student tells you three things that annoy them in daily life (people, weather, transport) using *I wish… would…*, three personal wishes (*I wish I…*) and one past regret (*If only I had…*). You ask one follow-up question after each. Then the student asks you what you would rather do this weekend and you answer with both patterns.' },
    small: { title: 'Three wishes', md: 'Each student writes three wishes in the chat: one about now, one about the past, one about another person. The others guess which one is the most important to the writer and ask *Why?* At the end, check the forms of all the wishes on the board.' },
    group: { title: 'Would you rather?', md: 'Breakout rooms of three or four. Each room gets five *Would you rather…?* questions (*live in the city or the country? speak ten languages or play five instruments?*). Students answer with *I’d rather… than…* and give a reason. Then each room writes two new questions for another room.' },
  },
  homework: { book: 'u5:p3', md: 'Finish book lesson 3 of unit 5 (I wish, if only, I’d rather), including the speaking task. Then write a short paragraph (about 80 words) beginning *If only I had…* about a decision you would make differently, and add two present wishes.' },
};
