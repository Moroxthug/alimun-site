// English B2, class 66 (docs/LESSONS_PLAN.md). Builds on book lesson u14:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c66',
  focus: 'By the end of the class every student uses the right pattern after verbs of permission, pressure and prevention: *let / make + object + base verb* (*They let us vote*), *allow / encourage / force / persuade + object + to* (*They allowed us to vote*), and *prevent / stop + object + from -ing* (*The rain prevented us from leaving*). Students should talk about rules at school, work and home using all three patterns.',
  tips: [
    'The two patterns that cause most mistakes are *let* and *make*: no *to*. Write *make someone to do* on the board and cross out *to*.',
    'In the passive, *make* takes *to*: *We were made to wait.* *Let* has no passive; use *be allowed to*. This is a classic Use of English Part 4 point.',
    '*Prevent / stop someone from doing*: students often write *prevent someone to do*. Insist on *from* + *-ing*.',
    'Speakers of Romance languages often translate *make someone do* as *do someone do*. Listen for *it did me laugh*.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What did your parents let you do when you were a teenager? What did they make you do?*' },
    { min: 12, title: 'Three patterns', md: 'Show board page 1. Go through the table and examples. Students say which pattern each verb takes.' },
    { min: 10, title: 'Practice', md: 'Show board page 2. Students complete and correct the sentences, then say one about their own job or school.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: B2 First Reading and Use of English Part 4. Students work alone, then check the passive forms together.' },
    { min: 5, title: 'Close', md: 'Each student says one rule they would change at work or school, using *allow* or *make*. Set the homework.' },
  ],
  board: [
    { title: 'Three patterns', blocks: [
      { t: 'table', caption: 'Verb + object + …', explain: ['head', 'col0'], head: ['Pattern', 'Verbs', 'Example'], rows: [
        ['+ base verb', 'let, make, help', 'The teacher let us leave early.'],
        ['+ to + verb', 'allow, encourage, force, persuade, permit, help', 'They encouraged me to apply.'],
        ['+ from + -ing', 'prevent, stop, ban', 'The law prevents companies from selling our data.'],
      ] },
      { t: 'tip', art: 'owl', md: 'In the passive: **make** → *be made to do* (*We were made to wait*). **Let** has no passive: use *be allowed to* (*We were allowed to leave*).' },
    ] },
    { title: 'Practice', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
        { q: 'My boss made me ___ the report again.', o: ['write', 'to write', 'writing'], why: '*Make* + object + base verb.' },
        { q: 'The school doesn’t allow students ___ phones in class.', o: ['to use', 'use', 'from using'], why: '*Allow* + object + *to*.' },
        { q: 'A storm stopped the ferry ___ on time.', o: ['from leaving', 'to leave', 'leave'], why: '*Stop* + object + *from -ing*.' },
        { q: 'We were made ___ for two hours.', o: ['to wait', 'wait', 'waiting'], why: 'Passive *make* takes *to*.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'My parents never [let me to stay] out late.', a: ['let me stay'], why: '*Let* + object + base verb, no *to*.' },
        { s: 'The new rule prevents people [to park] here.', a: ['from parking'], why: '*Prevent* + object + *from -ing*.' },
        { s: 'We [were let] to use the gym for free.', a: ['were allowed'], why: '*Let* has no passive: *be allowed to*.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 4', blocks: [
      { t: 'text', md: 'In the format of B2 First Reading and Use of English Part 4: complete the second sentence so that it means the same as the first. Use the word given and **two to five words**.' },
      { t: 'ex', kind: 'transform', h: 'Complete the second sentence. Use the word given.', items: [
        { q: 'They didn’t let us take photos in the museum. (ALLOWED) We ___ photos in the museum.', cue: 'ALLOWED', a: ['were not allowed to take', 'weren’t allowed to take'], why: '*Let* in the passive becomes *be allowed to*.' },
        { q: 'The heavy snow meant we couldn’t drive home. (PREVENTED) The heavy snow ___ home.', cue: 'PREVENTED', a: ['prevented us from driving'], why: '*Prevent* + object + *from -ing*.' },
        { q: 'The manager made the staff work late. (MADE) The staff ___ late.', cue: 'MADE', a: ['were made to work'], why: 'Passive *make* takes *to*.' },
      ] },
      { t: 'tip', art: 'owl', md: '*Let* and *make* changing into the passive is one of the most common Part 4 tests. If you see *let* in the first sentence and *ALLOWED* as the key word, think *be allowed to*.' },
    ] },
  ],
  activities: {
    one: { title: 'Rules then and now', md: 'The student compares the rules of their childhood and their life now (home, school, work) using *let, make, allow, encourage, prevent from*. Ask follow-up questions that push for the passive: *Were you made to…? Were you allowed to…?*' },
    small: { title: 'The ideal workplace', md: 'Students design the rules of an ideal workplace together: what it lets people do, what it encourages them to do, and what it prevents. Each student adds two rules in the chat with the right pattern; the group corrects any mistakes.' },
    group: { title: 'Fair or not?', md: 'In breakout rooms of three, give each room three real rules (no phones at school, a ban on cars in a city centre, compulsory voting). Rooms discuss each one using at least four different verbs from the lesson and decide if it is fair. Back together, each room reports one decision.' },
  },
  homework: { book: 'u14:p1', md: 'Finish book lesson 1 of unit 14. Then write six sentences about rules in your country or company with *let, make, allow, encourage, force* and *prevent… from*, including two in the passive.' },
};
