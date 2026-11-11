// English C2, class 26 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u6:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c26',
  focus: 'By the end every student writes compact sentences with absolute constructions (*The meeting over, we left. Her hands shaking, she opened the letter.*), *with* + object + participle (*With prices rising…*), fixed absolutes (*weather permitting, all things considered*), non-finite and verbless clauses whose understood subject is the subject of the main clause, and ellipsis after auxiliaries, *to*, *so* and *not*. The exam goal: these structures as key-word answers in the format of C2 Proficiency Reading and Use of English Part 4.',
  tips: [
    'The one rule to repeat: an absolute has its own subject and no finite verb; a non-finite or verbless clause borrows the subject of the main clause. *The meeting was over, we left* breaks the first; *Having eaten lunch, the bus left* breaks the second.',
    'Dangling participles are common even in published writing. Ask students to say aloud who is doing the action in the opening clause: if it is not the subject that follows the comma, the sentence must change.',
    'Absolutes belong to written and literary English; *with*-clauses are fine in speech too. In the activity, accept *with* in speaking and ask for absolutes in writing.',
    'Ellipsis is invisible until it goes wrong. When students repeat a whole verb phrase (*He said he would help and he helped me with it*), ask which words the listener could supply.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask each student to describe the moment they arrived somewhere memorable (a city, a new job, a home) in one long sentence. Write one on the board and show how an absolute could make it shorter.' },
    { min: 12, title: 'Compact sentences', md: 'Show board page 1. Students rewrite the sentences from the words given, then read them aloud and say what the opening clause adds: time, reason or circumstances.' },
    { min: 10, title: 'Who is doing it?', md: 'Show board page 2, then page 3. Students choose the correct sentence and say what is wrong with the others, then fill the gaps where words have been left out.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 4: C2 Proficiency Reading and Use of English Part 4. Eight minutes alone. Check together, counting words and marking each answer out of two.' },
    { min: 5, title: 'Close', md: 'Each student says one sentence about their day that begins with *With…* or with an absolute. Set the homework.' },
  ],
  board: [
    { title: 'Compact sentences', blocks: [
      { t: 'ex', kind: 'transform', h: 'Rewrite each sentence with an absolute, a *with*-clause or a verbless clause, starting with the words given.', items: [
        { q: 'As the decision had been made, there was no point in arguing.', cue: 'The decision', a: ['The decision made, there was no point in arguing.', 'The decision having been made, there was no point in arguing.'], why: 'An absolute: its own subject and a participle, no finite verb.' },
        { q: 'Her heart was pounding as she walked onto the stage.', cue: 'Her heart', a: ['Her heart pounding, she walked onto the stage.'], why: 'An absolute with *-ing* for something in progress.' },
        { q: 'More people are buying houses because interest rates are falling.', cue: 'With', a: ['With interest rates falling, more people are buying houses.'], why: '*With* + object + *-ing* gives the reason.' },
        { q: 'He left the room. His coat was over his arm.', cue: 'He left the room,', a: ['He left the room, his coat over his arm.', 'He left the room with his coat over his arm.'], why: 'An absolute with a prepositional phrase adds a detail of the scene.' },
        { q: 'We can start earlier if it is necessary.', cue: 'If', a: ['If necessary, we can start earlier.'], why: 'A verbless clause after a conjunction: *if necessary*.' },
      ] },
    ] },
    { title: 'Who is doing it?', blocks: [
      { t: 'ex', kind: 'choice', h: 'Choose the sentence that is correct and natural.', items: [
        { q: 'A walk in the park', o: ['Walking through the park, I noticed that the old trees had been cut down.', 'Walking through the park, the old trees had been cut down.', 'Walking through the park, it was noticed that the old trees had been cut down.'], why: 'The understood subject of *walking* must be the main subject: *I*.' },
        { q: 'An old bridge', o: ['Built in 1820, the bridge is still used every day.', 'Built in 1820, people still use the bridge every day.', 'Building in 1820, the bridge is still used every day.'], why: 'The bridge was built: the past participle, with *the bridge* as the main subject.' },
        { q: 'Arriving home', o: ['Once inside, she locked the door behind her.', 'Once inside, the door was locked behind her.', 'Once being inside, the door was locked behind her.'], why: 'The verbless clause *once inside* needs *she* as the main subject.' },
        { q: 'A finished report', o: ['Having finished the report, he sent it to his manager.', 'Having finished the report, it was sent to his manager.', 'Finished the report, he sent it to his manager.'], why: '*Having* + past participle for the earlier action, with *he* as the subject.' },
      ] },
    ] },
    { title: 'Leave it out', blocks: [
      { t: 'ex', kind: 'gap', h: 'Write one word in each gap. The rest of the sentence is understood.', items: [
        { q: 'They said they would finish the bridge by May, and they ___.', a: ['did'], why: 'Ellipsis after an auxiliary: *they did (finish it by May)*.' },
        { q: 'You can borrow the car if you want ___.', a: ['to'], why: 'Ellipsis after *to*: *if you want to (borrow it)*.' },
        { q: '“Will the shop be open on Sunday?” “I’m afraid ___.”', a: ['not'], why: '*Not* replaces a negative clause: it will not be open.' },
        { q: '“Has the parcel arrived yet?” “I believe ___.”', a: ['so'], why: '*So* replaces a positive clause: it has arrived.' },
        { q: 'I would love to join you on Friday, but I ___.', a: ['can’t', 'cannot'], why: 'Ellipsis after a modal: *I can’t (join you)*.' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between three and eight words, including the word given.', items: [
        { q: 'When the speeches had finished, the guests went outside.', cue: 'OVER', gap: '___, the guests went outside.', a: ['The speeches over', 'With the speeches over', 'The speeches being over'], why: 'An absolute: noun phrase + *over*, no finite verb.' },
        { q: 'If the weather allows it, lunch will be served in the garden.', cue: 'PERMITTING', gap: 'Lunch will be served ___.', a: ['in the garden, weather permitting', 'in the garden weather permitting'], why: 'The fixed absolute *weather permitting* = if the weather allows.' },
        { q: 'Because the children were asleep, the house was finally quiet.', cue: 'WITH', gap: '___, the house was finally quiet.', a: ['With the children asleep', 'With the children sleeping'], why: '*With* + object + adjective gives the reason.' },
        { q: 'Taking everything into account, the trip was a success.', cue: 'CONSIDERED', gap: '___, the trip was a success.', a: ['All things considered', 'Everything considered'], why: 'The fixed absolute *all things considered*.' },
        { q: 'She read the contract carefully, and then she refused to sign it.', cue: 'HAVING', gap: '___, she refused to sign it.', a: ['Having read the contract carefully', 'Having carefully read the contract'], why: '*Having* + past participle: the reading came first, and *she* is the subject.' },
        { q: 'I asked whether the shop was open, and he said he thought it was.', cue: 'SO', gap: 'I asked whether the shop was open, and ___.', a: ['he said he thought so', 'he said that he thought so'], why: 'Ellipsis: *so* replaces *(that) it was open*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Method for **Part 4**: if the second sentence starts with a gap and a comma, and the first starts with *When*, *Because* or *If*, think of an absolute, a *with*-clause or *Having*. Check that the subject after the comma is the one doing the action, then count three to eight words.' },
    ] },
  ],
  activities: {
    one: { title: 'Compress the story', md: 'The student tells you about a journey or a busy day in about two minutes, in ordinary sentences. Note four of them. Together, rewrite each one more compactly on the board, with one absolute, one *with*-clause, one *having*-clause and one verbless clause. The student then tells the story again using all four, and you listen for any dangling participle.' },
    small: { title: 'The travel journal', md: 'The group writes a shared travel journal in the chat, one sentence per student in turn. Every sentence must begin with a different structure from today: an absolute (*The bags packed, …*), a *with*-clause, a *having*-clause, a past participle (*Exhausted by the climb, …*), a verbless clause (*Once inside, …*) or a fixed absolute (*Weather permitting, …*). The next student checks that the subject after the comma is the right one before adding their own sentence.' },
  },
  homework: { book: 'u6:p2', md: 'Finish lesson 2 of unit 6 if needed, then do lesson 3 (He will keep doing that). Write a journal entry of about 150 words about a day out, with two absolutes, a *with*-clause, a *having*-clause, a verbless clause and two examples of ellipsis.' },
};
