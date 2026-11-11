// English B2, class 15 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u4:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c15',
  focus: 'By the end of the class every student can form the passive in every tense, including the continuous and perfect forms (**is being tested**, **has been found**, **will have been finished**), and can explain why the passive is the better choice in a given sentence: the doer is unknown, obvious or unimportant, or the result matters more. Accuracy point: *being* in the continuous passive and *been* in the perfect passive.',
  tips: [
    'The two forms students drop most are **being** and **been**. Write both families on the board side by side: *is being repaired / has been repaired / will have been repaired*, and point at them every time a student leaves one out.',
    'Many learners use the passive everywhere once they know it. Insist on the reason: in a story about people, the active is usually clearer. Ask *Who did it? Do we care?* before every passive sentence.',
    'Learners whose language uses a reflexive passive (Spanish *se*, Italian *si*, French *se*) sometimes say *The bridge is repairing*. Ask: *Does the bridge repair itself?* and show the continuous passive.',
    'Modal passives (*must be done*, *can’t have been seen*) are where B2 First Part 4 often tests the passive. Spend a few minutes on them at the end.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Show a short news headline on the board: *New species found in Amazon*. Ask students to say the full sentence. Collect versions and keep the best one: *A new species has been found in the Amazon.*' },
    { min: 12, title: 'Every tense', md: 'Show board page 1. Go down the table quickly, then ask students to change three active sentences into the passive aloud, one tense each. Point at *being* and *been* every time.' },
    { min: 10, title: 'Why the passive?', md: 'Show board page 2. Students decide for each pair which sentence is better and say why. Accept the active where the doer matters.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: key word transformations in the format of B2 First Reading and Use of English Part 4. Students write alone for five minutes, then check together on the board. Count words: two to five, the key word unchanged.' },
    { min: 5, title: 'Close', md: 'Each student says one thing that is being done near their home right now (*a road is being repaired*). Set the homework.' },
  ],
  board: [
    { title: 'The passive in every tense', blocks: [
      { t: 'table', caption: 'be + past participle', explain: ['head'], head: ['Tense', 'Active', 'Passive'], rows: [
        ['present simple', 'They test every phone.', 'Every phone is tested.'],
        ['present continuous', 'They are testing the drug.', 'The drug is being tested.'],
        ['past continuous', 'They were building the lab.', 'The lab was being built.'],
        ['present perfect', 'Someone has found a cure.', 'A cure has been found.'],
        ['past perfect', 'They had changed the results.', 'The results had been changed.'],
        ['future perfect', 'They will have finished it by May.', 'It will have been finished by May.'],
        ['modal', 'You must check the data.', 'The data must be checked.'],
      ] },
      { t: 'text', md: 'Continuous forms need **being**. Perfect forms need **been**. Add **by** + the doer only when it is new or important information.' },
    ] },
    { title: 'Active or passive?', blocks: [
      { t: 'ex', kind: 'choice', h: 'Which sentence is better here?', items: [
        { q: 'In a news report: nobody knows who took the painting.', o: ['The painting was stolen last night.', 'Someone stole the painting last night.', 'The painting stole last night.'], why: 'The thief is unknown, so the passive puts the painting first.' },
        { q: 'In a story about your grandmother.', o: ['My grandmother built this house in 1960.', 'This house was built by my grandmother in 1960.', 'This house was being built in 1960.'], why: 'The story is about her, so the active is clearer.' },
        { q: 'In a science article.', o: ['The samples are being analysed in two labs.', 'Two labs are analysing the samples now and they do it.', 'The samples are analysing in two labs.'], why: 'The process matters more than who does it.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Each sentence has one mistake. Find it and fix it.', items: [
        { s: 'The new hospital [is building] at the moment.', a: ['is being built'], why: 'A building does not build itself: continuous passive with *being*.' },
        { s: 'A solution has [found] by the team.', a: ['been found'], why: 'Present perfect passive: *has been* + past participle.' },
        { s: 'The results [must check] again.', a: ['must be checked'], why: 'Modal passive: *must be* + past participle.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 4', blocks: [
      { t: 'text', md: 'In the format of B2 First Reading and Use of English Part 4: complete the second sentence so that it means the same as the first. Use the word given, do not change it, and use two to five words.' },
      { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with the key word.', items: [
        { q: 'Engineers are repairing the bridge this week. (The bridge … this week.)', cue: 'BEING', a: ['The bridge is being repaired this week.'], why: '*is being repaired* is four words and uses the key word.' },
        { q: 'Someone has already sent the invitations. (The invitations … sent.)', cue: 'BEEN', a: ['The invitations have already been sent.'], why: '*have already been* keeps *already* and the perfect passive.' },
        { q: 'They will finish the report by Friday. (The report … by Friday.)', cue: 'HAVE', a: ['The report will have been finished by Friday.'], why: 'Future perfect passive: *will have been finished*.' },
      ] },
      { t: 'tip', md: 'Part 4 often tests two things at once, for example a passive **and** a tense. Check the time words in the first sentence (*already*, *by Friday*) and keep them. Contractions count as two words.' },
    ] },
  ],
  activities: {
    one: { title: 'The lab tour', md: 'You are a visitor; the student is the guide in a research lab. Ask *What happens to the samples? What has been done this week? What will have been finished by next month?* The student answers in the passive. Then swap and the student asks you. Note every missing *being* or *been* and replay those sentences.' },
    small: { title: 'Headline chain', md: 'Each student writes a short headline in the chat (*Cure found*, *Museum closed*, *Thief caught*). The next student turns it into a full passive sentence with the right tense and adds one detail. The group votes on the most natural sentence, then you correct any form errors together.' },
    group: { title: 'Process posters', md: 'Breakout rooms of three or four. Each room chooses a process (making chocolate, recycling a bottle, publishing a book) and writes five steps in the passive in the chat, using at least two different tenses. Back together, each room reads its process; the others say which steps could be active and why.' },
  },
  homework: { book: 'u4:p1', md: 'Finish book lesson 1 of unit 4 (It has been found, it is being tested), including the speaking task. Then write a short news report (about 80 words) about something that has happened in your town, using at least four passive forms in different tenses.' },
};
