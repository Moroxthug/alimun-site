// English B2, class 25 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u6:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c25',
  focus: 'By the end of the class every student can report what people said with precise reporting verbs and the right pattern for each: **refuse to do**, **warn someone not to do**, **deny doing**, **suggest doing / that someone do**, **accuse someone of doing**, **apologise for doing**. Students choose the verb that shows *how* something was said, not just *what*.',
  tips: [
    'The mistake heard most is *He suggested me to apply*. Write **suggest** in its own box on the board with its two correct patterns and leave it there all class.',
    'Students learn the verbs but not the patterns. Group them by pattern on the board (verb + to; verb + person + to; verb + -ing; verb + preposition + -ing), not alphabetically.',
    'Prepositions are the second trap: *accuse **of***, *apologise **for***, *insist **on***, *blame **for***. Drill them as chunks.',
    'B2 First Part 4 loves reporting verbs: *“I didn’t take it,” he said* → *He denied taking it.* Keep a few transformations for the end.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Read three quotes aloud with clear emotion: *“I won’t do it!” “Be careful, the floor is wet.” “It wasn’t me!”* Ask students to describe what each person did, not what they said (*refused, warned, denied*).' },
    { min: 12, title: 'Verbs and patterns', md: 'Show board page 1. Go through the patterns; students add one more verb to each row from memory.' },
    { min: 10, title: 'Practice', md: 'Show board page 2. Students report the quotes alone, then fix the mistakes together.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: key word transformations in the format of B2 First Reading and Use of English Part 4. Students work alone, then check word counts together.' },
    { min: 5, title: 'Close', md: 'Each student reports one thing someone said to them this week with a precise verb. Set the homework.' },
  ],
  board: [
    { title: 'Reporting verbs and their patterns', blocks: [
      { t: 'table', caption: 'Each verb has its own pattern', explain: ['head', 'col0'], head: ['Pattern', 'Verbs', 'Example'], rows: [
        ['verb + to + infinitive', 'agree, refuse, offer, promise, threaten', 'She refused to answer.'],
        ['verb + person + to + infinitive', 'warn, advise, remind, persuade, encourage', 'He warned us not to go out.'],
        ['verb + -ing', 'deny, admit, suggest, recommend', 'He denied taking the money.'],
        ['verb + preposition + -ing', 'apologise for, insist on, accuse (someone) of, blame (someone) for', 'They accused him of lying.'],
        ['suggest + that + subject + verb', 'suggest, recommend', 'She suggested that we leave early.'],
      ] },
    ] },
    { title: 'Practice', blocks: [
      { t: 'ex', kind: 'transform', h: 'Report each quote starting with the words given.', items: [
        { q: '“I’ll help you move house,” Tom said to me.', cue: 'Tom offered', a: ['Tom offered to help me move house.', 'Tom offered to help me to move house.'], why: '*offer* + *to* + infinitive.' },
        { q: '“Don’t touch the cables,” the electrician told us.', cue: 'The electrician warned us', a: ['The electrician warned us not to touch the cables.'], why: '*warn* + person + *not to*.' },
        { q: '“I’m sorry I was late,” said Ana.', cue: 'Ana apologised', a: ['Ana apologised for being late.'], why: '*apologise for* + -ing.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Each sentence has one mistake. Find it and fix it.', items: [
        { s: 'He [suggested me to apply] for the job.', a: ['suggested that I apply', 'suggested that I should apply', 'suggested applying'], why: '*suggest* has no person + *to*.' },
        { s: 'She denied [to steal] the money.', a: ['stealing'], why: '*deny* + -ing.' },
        { s: 'They accused him [for cheating].', a: ['of cheating'], why: '*accuse someone of* + -ing.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 4', blocks: [
      { t: 'text', md: 'In the format of B2 First Reading and Use of English Part 4: complete the second sentence with two to five words, including the word given.' },
      { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with the key word.', items: [
        { q: '“I didn’t break the window,” said Leo. (Leo … the window.)', cue: 'DENIED', a: ['Leo denied breaking the window.', 'Leo denied having broken the window.'], why: '*deny* + -ing.' },
        { q: '“You should see a doctor,” my sister told me. (My sister … see a doctor.)', cue: 'ADVISED', a: ['My sister advised me to see a doctor.'], why: '*advise* + person + *to*.' },
        { q: '“Let’s take a taxi,” said Mia. (Mia … a taxi.)', cue: 'SUGGESTED', a: ['Mia suggested taking a taxi.', 'Mia suggested that we take a taxi.', 'Mia suggested we take a taxi.'], why: '*suggest* + -ing or *that* + clause.' },
      ] },
      { t: 'tip', md: 'In Part 4, a quote is a strong signal for a reporting verb. Decide the pattern **before** writing: does the verb need *to*, a person, *-ing* or a preposition? Then count the words.' },
    ] },
  ],
  activities: {
    one: { title: 'The witness', md: 'Tell the student a short story with five quotes (an argument between two neighbours). The student retells it as a witness to the police, using five different reporting verbs and the right patterns. Then swap: the student tells a story and you report it, making two pattern mistakes for the student to find.' },
    small: { title: 'Who said what?', md: 'Each student writes two quotes in the chat that a famous person, a parent or a teacher might say. The others report each quote with the most precise verb they can find (*She insisted on…*, *He threatened to…*). The best verb for each quote wins a point.' },
    group: { title: 'Meeting minutes', md: 'Breakout rooms of four hold a two-minute meeting about a class trip (one leader, three members). One student in each room is the secretary and writes minutes in the chat with reporting verbs (*Ana suggested going to the coast; Tom refused to…*). Back together, each secretary reads the minutes and the class checks the patterns.' },
  },
  homework: { book: 'u6:p1', md: 'Finish book lesson 1 of unit 6 (He denied it), including the speaking task. Then write a short report (about 80 words) of a real or invented argument, using at least six different reporting verbs with their correct patterns.' },
};
