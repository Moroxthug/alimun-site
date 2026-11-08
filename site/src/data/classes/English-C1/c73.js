// English C1, class 73 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u16:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c73',
  focus: 'By the end every student uses perfect and passive infinitives and -ing forms to show time and who did what: *to have done* and *having done* for an earlier action, *to be done* and *being done* when the subject receives the action, and *to have been done* and *having been done* for both. The speaking goal: talk about experiences of school and learning with these forms (*I was lucky to have been taught by…*, *I hated being made to…*).',
  tips: [
    'Build the forms in two steps: first ask *earlier or same time?* (perfect or not), then *does the subject do it or receive it?* (active or passive). Two questions give all eight forms.',
    'The commonest mistake is a simple infinitive where an earlier action needs the perfect: *She seems to know him for years* instead of *She seems to have known him*. Correct it every time.',
    'After *deny, admit, regret, remember*, the simple -ing already shows earlier time (*He denied copying it*). Accept both forms and do not insist on *having copied*.',
    'Use *would like to have done* and *was supposed to have done* for regrets and plans that did not happen. Students enjoy this, and it brings out real stories.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What were you lucky to have been given as a child? What did you hate being made to do at school?* Write one answer of each kind on the board.' },
    { min: 12, title: 'Eight forms', md: 'Show board page 1. Go through the table with the two questions, then students choose the forms and explain each choice.' },
    { min: 10, title: 'Common mistakes', md: 'Show board page 2. Students fix the mistakes in pairs, then make one true sentence with a form from the table.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Board page 3: C1 Advanced Reading and Use of English Part 4. Students rewrite the sentences alone with "Everyone solves this", then count the words together. Reveal the answers.' },
    { min: 5, title: 'Close', md: 'Each student says one thing they would like to have done differently in their education. Set the homework.' },
  ],
  board: [
    { title: 'Earlier, and done to someone', blocks: [
      { t: 'table', caption: 'Eight forms', explain: ['head', 'col3'], head: ['Form', 'Active', 'Passive', 'Time'], rows: [
        ['infinitive', 'to mark', 'to be marked', 'same time or later'],
        ['perfect infinitive', 'to have marked', 'to have been marked', 'earlier, or did not happen'],
        ['-ing form', 'marking', 'being marked', 'same time, or in general'],
        ['perfect -ing form', 'having marked', 'having been marked', 'clearly earlier'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the correct form.', items: [
        { q: 'The college is said ___ by a group of farmers in 1820.', o: ['to have been founded', 'to found', 'being founded'], why: 'An earlier action done to the college: perfect passive infinitive.' },
        { q: 'Most children dislike ___ in front of their friends.', o: ['being criticised', 'to have criticised', 'having criticised'], why: 'Someone criticises them, in general: passive -ing.' },
        { q: '___ the same question three times, the teacher lost patience.', o: ['Having been asked', 'Being asking', 'To have asked'], why: 'The questions came first and were asked to her: perfect passive -ing.' },
        { q: 'He would love ___ music, but his parents said no.', o: ['to have studied', 'studying', 'to be studied'], why: 'Something that did not happen: perfect infinitive.' },
        { q: 'I appreciate ___ a second chance to take the exam.', o: ['being given', 'to be given', 'giving'], why: '*Appreciate* + -ing; I receive the chance: passive.' },
      ] },
    ] },
    { title: 'Common mistakes', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'She appears [to lose] her notes before the lecture started.', a: ['to have lost'], why: 'The losing happened earlier: perfect infinitive.' },
        { s: 'I still remember [to be punished] for talking in class.', a: ['being punished'], why: '*Remember* + -ing for a memory; passive *being* + past participle.' },
        { s: 'He admitted [to have cheated] in the test.', a: ['having cheated', 'cheating', 'to having cheated'], why: '*Admit* takes -ing (or *to* + -ing), not an infinitive.' },
        { s: 'Our homework needs [to check] before Monday.', a: ['checking', 'to be checked'], why: 'The homework receives the action: *needs checking* or *needs to be checked*.' },
        { s: 'We were supposed to have [finish] the project by June.', a: ['finished'], why: 'Perfect infinitive: *have* + past participle.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Two questions find the right form every time: *Did it happen earlier?* (then use *have*) and *Was it done to the subject?* (then use *be* or *being* + past participle).' },
    ] },
    { title: 'Exam corner: Use of English Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first. Use the word given and three to six words, including the word given.', items: [
        { q: 'It seems that someone has moved my desk.', cue: 'SEEMS', a: ['My desk seems to have been moved.'], why: 'Earlier action done to the desk: *seems to have been moved*.' },
        { q: 'I hate it when people tell me what to do.', cue: 'BEING', a: ['I hate being told what to do.'], why: '*Hate* + passive -ing: *being told*.' },
        { q: 'They chose her for the team, and she feels proud.', cue: 'PROUD', a: ['She is proud to have been chosen for the team.', 'She’s proud to have been chosen for the team.', 'She feels proud to have been chosen for the team.'], why: 'Adjective of feeling + perfect passive infinitive.' },
        { q: 'He says that he finished the essay before the deadline.', cue: 'CLAIMS', a: ['He claims to have finished the essay before the deadline.'], why: '*Claim* + perfect infinitive for an earlier action.' },
        { q: 'The students were warned twice, and then they finally listened.', cue: 'HAVING', a: ['Having been warned twice, the students finally listened.'], why: 'Perfect passive -ing: the warning came first.' },
      ] },
      { t: 'tip', md: 'Each Part 4 item is worth two marks, usually one for each change. Here many answers need two changes at once: the time (*have*) and the voice (*been* + past participle). Contractions count as two words.' },
    ] },
  ],
  activities: {
    one: { title: 'My education story', md: 'The student talks for three minutes about their school years. Prompt with *What are you glad to have learnt? What do you regret not having done? What did you dislike being made to do?* Note every infinitive and -ing form and go over four of them at the end.' },
    small: { title: 'Lucky or not?', md: 'Each student writes two sentences in the chat, one true and one invented: *I was lucky to have been…*, *I can’t stand being…* The others ask one question each and guess which sentence is invented. Score a point for a correct guess and a point for a correct form.' },
    group: { title: 'Rumours about a school', md: 'Breakout rooms of three invent a mysterious old school. Each room writes four rumours with passive reporting and perfect infinitives (*It is said to have been built on a lake*, *The first head is believed to have…*). Rooms read their rumours to the class; the class chooses the strangest one that is also grammatically perfect.' },
  },
  homework: { book: 'u16:p1', md: 'Finish lesson 1 of unit 16 if needed, then do lesson 2 (I came to love it). Write six sentences about your own education, using at least four of the eight forms in the table.' },
};
