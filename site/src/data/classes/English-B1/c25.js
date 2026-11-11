// English B1, class 25 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u6:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c25',
  focus: 'By the end of the class every student can report what people said, choosing **say** or **tell** correctly and moving the verb one step back in time (*“I’m busy.” → She said she was busy.*), with the time and place words that change (*tomorrow → the next day*). Students pass on real messages in pairs.',
  tips: [
    '*Say* and *tell* are the first problem: *She said me*. Simple rule on the board: **tell + person** (*told me*), **say + no person** (*said that*), or *said to me*.',
    'The tense change is logical but hard in fast speech. Practise it with a chain: one student says a sentence, the next reports it. Correct only the tense first, then the other changes.',
    'If the situation is still true, the tense can stay the same (*She said she lives in Leeds*). Mention it once so strong students are not confused, but practise the standard backshift.',
    'Do not forget the pronouns: *“I like your dress” → She said she liked my dress.* Many learners keep *I* and *your*.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask a student a question and get an answer. Ask the class: *What did she say?* Write the report on the board exactly as students give it.' },
    { min: 10, title: 'One step back', md: 'Show board page 1. Explain the tense and time-word changes. Correct the warm-up report together.' },
    { min: 10, title: 'Say or tell', md: 'Show board page 2. Students choose *said* or *told*, then report two sentences.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: an open cloze in the format of B1 Preliminary Reading part 6. Students write one word in each gap.' },
    { min: 5, title: 'Fix it', md: 'Show board page 4 and add one mistake from the activity.' },
    { min: 5, title: 'Close', md: 'Each student reports one thing another student said today. Set the homework.' },
  ],
  board: [
    { title: 'One step back', blocks: [
      { t: 'table', caption: 'Tenses', explain: ['head'], head: ['Direct', 'Reported'], rows: [
        ['“I’m busy.”', 'She said she was busy.'],
        ['“I live in Leeds.”', 'He said he lived in Leeds.'],
        ['“I’m working.”', 'She said she was working.'],
        ['“I’ve finished.”', 'He said he had finished.'],
        ['“I will help.”', 'She said she would help.'],
        ['“I can come.”', 'He said he could come.'],
      ] },
      { t: 'table', caption: 'Time and place words', explain: ['head'], head: ['Direct', 'Reported'], rows: [
        ['today', 'that day'],
        ['tomorrow', 'the next day'],
        ['yesterday', 'the day before'],
        ['here', 'there'],
        ['now', 'then'],
      ] },
    ] },
    { title: 'Say or tell', blocks: [
      { t: 'text', md: '**tell** + a person: *She **told me** (that) she was tired.*\n\n**say** + no person: *She **said** (that) she was tired.* Or: *She said **to me** that…*' },
      { t: 'ex', kind: 'select', h: 'Choose said or told.', items: [
        { q: 'Tom ___ me that the meeting was cancelled.', o: ['told', 'said'], why: 'A person follows: *told me*.' },
        { q: 'She ___ she would call later.', o: ['said', 'told'], why: 'No person after the verb: *said*.' },
        { q: 'The doctor ___ us to wait outside.', o: ['told', 'said'], why: 'A person follows: *told us*.' },
        { q: 'He ___ that he had lost his keys.', o: ['said', 'told'], why: 'No person: *said that*.' },
      ] },
    ] },
    { title: 'Exam corner: Reading part 6', blocks: [
      { t: 'text', md: 'In the format of the B1 Preliminary exam, Reading part 6: write **one word** in each gap.\n\n*Yesterday my friend Maya phoned me with some news.*' },
      { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
        { q: 'She told me that she ___ got a new job.', a: ['had'], why: '“I’ve got a new job” becomes *she had got*.' },
        { q: 'She said she ___ start the following Monday.', a: ['would'], why: '“I will start” becomes *she would start*.' },
        { q: 'She also told me that she ___ very nervous.', a: ['was'], why: '“I’m nervous” becomes *she was nervous*.' },
        { q: 'I said ___ her that she would be great.', a: ['to'], why: '*said to* + person.' },
      ] },
      { t: 'tip', md: 'In Reading part 6, look at the verb before and after the gap. After *said* or *told* in the past, think: which verb from the original sentence moves one step back?' },
    ] },
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Each sentence has one mistake. Find it and fix it.', items: [
        { s: 'She [said me] that she was tired.', a: ['told me', 'said to me'], why: 'With a person: *told me* or *said to me*.' },
        { s: 'He [told] that he was busy.', a: ['said'], why: '*tell* needs a person.' },
        { s: 'She said she [will] come.', a: ['would'], why: '*will* becomes *would*.' },
        { s: 'He said he would see me [tomorrow].', a: ['the next day', 'the following day'], why: '*tomorrow* becomes *the next day* when reported later.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'The message chain', md: 'Tell the student five short things about your week (*I’ve been to a concert. I’m tired. I’ll travel on Friday*). The student reports each one as if telling a friend later (*She said she had been to a concert*). Then the student tells you five things and you report them, with one deliberate mistake each time for the student to catch.' },
    small: { title: 'Gossip line', md: 'Student A whispers (or sends privately in the chat) a sentence to student B. B reports it to C (*A told me that…*), C reports it to D, and so on. The last student says the final version and A says the original. Compare the two and correct every tense change together.' },
    group: { title: 'Interview and report', md: 'Breakout rooms of three: an interviewer, a guest and a reporter. The interviewer asks the guest four questions about their weekend plans; the reporter writes the answers in reported speech in the chat (*She said she was going to…*). Swap roles. Back together, check two reports from each room.' },
  },
  homework: { book: 'u6:p1', md: 'Finish book lesson 1 of unit 6 (She said that…), including the speaking task. Then write down five things people said to you today and report them in reported speech.' },
};
