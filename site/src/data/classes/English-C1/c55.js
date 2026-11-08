// English C1, class 55 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u12:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c55',
  focus: 'By the end every student says who or what makes something happen with the right causative pattern: *make someone do*, *let someone do*, *have someone do*, *get someone to do*, *cause something to do*, *have or get something done*, and the passives *be made to do* and *be allowed to do*. The speaking goal: explain how a change in nature or in a community came about, and who made it happen.',
  tips: [
    'The infinitive is the trap: *make*, *let* and *have* take the infinitive without *to*; *get*, *cause* and *allow* take *to*. In the passive, *make* needs *to*: *They were made to leave*.',
    '*Let* has no passive. Students who say *We were let to camp* need *We were allowed to camp*.',
    '*Have something done* can also describe something bad that happens to you: *They had their crops destroyed by the floods*. Point out that nobody chose it.',
    'In Part 4 of C1 Advanced, look at what the key word needs after it. If the word is *MADE* in a passive sentence, the answer almost always contains *to*.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What did your parents make you do as a child? What did they let you do?* Write one answer of each kind on the board.' },
    { min: 12, title: 'Which pattern?', md: 'Show board page 1. Students read the table, then choose the form that fits each sentence and say why.' },
    { min: 10, title: 'Fix it', md: 'Show board page 2. Students correct the mistakes alone and say whether the problem was the verb, *to* or the word order.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 4. Students rewrite the sentences alone, count their words, then compare. Reveal the answers.' },
    { min: 5, title: 'Close', md: 'Each student says one thing they had done for them recently and one thing they got someone to do. Set the homework.' },
  ],
  board: [
    { title: 'Which pattern?', blocks: [
      { t: 'table', caption: 'Causatives and their infinitives', explain: ['head', 'col2'], head: ['Pattern', 'Example', 'Meaning'], rows: [
        ['make / let / have + someone + do', 'The heat made the plants wilt.', 'force, permission, instruction'],
        ['get / cause + someone + to do', 'The rain caused the river to rise.', 'persuade, be the reason'],
        ['have / get + something + done', 'We had the old drains removed.', 'someone else does it, or it happens to you'],
        ['be made / be allowed + to do', 'Visitors were made to stay on the path.', 'the passive forms'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the form that fits.', items: [
        { q: 'The ranger ___ us take photos of the nest from a distance.', o: ['let', 'allowed', 'got'], why: '*Let* + object + infinitive without *to*.' },
        { q: 'The oil spill caused thousands of birds ___ their habitat.', o: ['to lose', 'lose', 'losing'], why: '*Cause* + object + *to*.' },
        { q: 'It took months to get the council ___ the plan.', o: ['to approve', 'approve', 'approved'], why: '*Get someone to do*: persuade.' },
        { q: 'Several farmers had their fields ___ by the storm.', o: ['flooded', 'flood', 'to flood'], why: '*Have something done*: something bad that happened to them.' },
        { q: 'The children were made ___ the litter they had dropped.', o: ['to pick up', 'pick up', 'picking up'], why: 'Passive *make* needs *to*.' },
      ] },
    ] },
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'The smoke made everyone [to cough].', a: ['cough'], why: 'Active *make*: no *to*.' },
        { s: 'We [were let] to walk on the dunes.', a: ['were allowed'], why: '*Let* has no passive: use *be allowed to*.' },
        { s: 'We need to [have cut the trees] before winter.', a: ['have the trees cut'], why: 'Object before the past participle: *have something done*.' },
        { s: 'The warm water caused the coral [lose] its colour.', a: ['to lose'], why: '*Cause* + object + *to*.' },
        { s: 'I finally [got the plumber fix] the leak.', a: ['got the plumber to fix', 'had the plumber fix'], why: '*Get* + person + *to*, or *have* + person + infinitive.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Look at what follows the object. No *to* points to *make*, *let* or *have*; *to* points to *get*, *cause*, *allow* or a passive *made*; a past participle points to *have* or *get something done*.' },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first, using the word given. Write between three and six words, including the word given.', items: [
        { q: 'The landowner forced the walkers to turn back. (The walkers ___ back by the landowner.)', cue: 'MADE', a: ['The walkers were made to turn back by the landowner.'], why: 'Passive *make* + *to*.' },
        { q: 'They didn’t let us camp near the lake. (We ___ camp near the lake.)', cue: 'ALLOWED', a: ['We were not allowed to camp near the lake.', 'We weren’t allowed to camp near the lake.'], why: '*Let* has no passive: *be allowed to*.' },
        { q: 'A specialist is going to test the water for us next week. (We are going ___ next week.)', cue: 'HAVE', a: ['We are going to have the water tested next week.'], why: '*Have something done* by a specialist.' },
        { q: 'She persuaded the neighbours to plant wildflowers. (She ___ wildflowers.)', cue: 'GOT', a: ['She got the neighbours to plant wildflowers.'], why: '*Get someone to do*: persuade.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 4 of C1 Advanced you write three to six words and must not change the word given. Causatives are a favourite because one sentence tests the verb, the object and the form after it.' },
    ] },
  ],
  activities: {
    one: { title: 'How did it happen?', md: 'The student explains a change they know about (a park that was saved, a street that became car-free, a renovation at home): who made it happen, who was persuaded, what was done by professionals. Push for every causative pattern from the table. Note six sentences and correct the infinitives together.' },
    small: { title: 'Rules of the reserve', md: 'The group imagines they run a nature reserve. Each student adds one rule and one reason in turn, using a different pattern (*We make visitors…*, *We let dogs…*, *Visitors are allowed to…*, *We have the paths checked…*). The others correct any wrong *to*. Collect the rules in the chat.' },
    group: { title: 'Village story rooms', md: 'Breakout rooms of three tell the story of a village that brought its river back to life, in six sentences, each with a different causative. Bring everyone back; rooms read their stories and the class checks every pattern.' },
  },
  homework: { book: 'u12:p3', md: 'Finish lesson 3 of unit 12 if needed, then do lesson 4 (Letting nature take over). Write eight sentences about your childhood or your town, each with a different causative pattern from today, including two passives.' },
};
