// English C1, class 49 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u11:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c49',
  focus: 'By the end every student reports speech with verbs that carry a judgement, each with its own pattern: *urge someone to*, *concede that*, *dismiss something as*, *attribute something to*, *accuse someone of*, *credit someone with*, *deny* + *-ing*. The speaking goal: retell what someone said in a news story or a meeting so that the listener knows what the speaker was doing (pressing, giving way, rejecting, blaming) and not just what they said.',
  tips: [
    'Ask after every example: *What was the speaker doing?* Choosing between *said*, *conceded*, *claimed* and *insisted* is a choice of meaning, not of style.',
    'The patterns cause most of the errors. *Suggest* never takes object + *to*; *deny* never takes *to*; you *dismiss something as*, never *like*; you *credit a person with* a thing but *attribute* a thing *to* a person.',
    'Some verbs presuppose the fact is true (*reveal*, *acknowledge*), others leave it open (*claim*, *allege*). Point this out when students report news.',
    'In Part 4 of C1 Advanced a reporting-verb item usually tests two things: the verb and the pattern after it. A correct verb with the wrong preposition can still earn one of the two marks.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Read out a short quote: *“All right, we made some mistakes, but the plan was sound.”* Ask students to report it with one verb that shows what the speaker was doing. Collect *admitted*, *conceded*, *insisted* and discuss the difference.' },
    { min: 12, title: 'Verb and pattern', md: 'Show board page 1. Students choose the word that completes each pattern, then say one more sentence with the same verb.' },
    { min: 10, title: 'Fix it', md: 'Show board page 2. Students correct the mistakes alone and say which part of the pattern was wrong.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 4. Students rewrite the sentences alone, count their words, then compare. Reveal the answers and mark them in two halves.' },
    { min: 5, title: 'Close', md: 'Each student reports one thing someone said to them this week with a precise reporting verb. Set the homework.' },
  ],
  board: [
    { title: 'Verb and pattern', blocks: [
      { t: 'table', caption: 'What the speaker was doing', explain: ['head', 'col2'], head: ['Verb', 'Pattern', 'What it tells us'], rows: [
        ['urge, press, implore', 'someone + to do', 'pushing strongly for action'],
        ['concede, acknowledge', 'that + clause', 'accepting a point, often reluctantly'],
        ['dismiss, brand, portray', 'something + as', 'judging or labelling it'],
        ['accuse, blame, credit', 'someone + of / for / with', 'giving blame or praise'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the word that completes the pattern.', items: [
        { q: 'The editor dismissed the complaint ___ a misunderstanding.', o: ['as', 'like', 'for'], why: '*Dismiss something as*.' },
        { q: 'Campaigners pressed the council ___ publish the full report.', o: ['to', 'that', 'for'], why: '*Press someone to do*.' },
        { q: 'The journalist was credited ___ uncovering the scandal.', o: ['with', 'for', 'to'], why: '*Credit someone with* something.' },
        { q: 'He strongly objected ___ being filmed without permission.', o: ['to', 'against', 'for'], why: '*Object to* + *-ing*.' },
        { q: 'The minister ___ that the figures had been presented badly.', o: ['acknowledged', 'urged', 'accused'], why: '*Acknowledge that*: accept a fact.' },
      ] },
    ] },
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'My colleague [suggested me to contact] the source directly.', a: ['suggested contacting', 'suggested that I contact', 'suggested that I should contact', 'suggested I contact'], why: '*Suggest* + *-ing* or a *that* clause, never object + *to*.' },
        { s: 'The company [denied to sell] customer data.', a: ['denied selling', 'denied having sold'], why: '*Deny* + *-ing*.' },
        { s: 'Critics [accused the channel for] ignoring the story.', a: ['accused the channel of'], why: '*Accuse someone of*.' },
        { s: 'They [blamed the editor on] the misleading headline.', a: ['blamed the editor for', 'blamed the misleading headline on the editor'], why: '*Blame a person for* a problem, or *blame a problem on* a person.' },
        { s: 'She [insisted to check] every quote herself.', a: ['insisted on checking'], why: '*Insist on* + *-ing*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Learn each reporting verb with a short model sentence, not on its own: *She urged him to stay*, *He dismissed it as gossip*, *They credited her with the idea*.' },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first, using the word given. Write between three and six words, including the word given.', items: [
        { q: '“You really must check your facts before you publish,” the editor told Sam. (The editor ___ facts before publishing.)', cue: 'URGED', a: ['The editor urged Sam to check his facts before publishing.', 'The editor urged Sam to check her facts before publishing.', 'The editor urged Sam to check their facts before publishing.'], why: '*Urge someone to do*.' },
        { q: '“Yes, the survey was too small,” the researcher said reluctantly. (The researcher ___ too small.)', cue: 'CONCEDED', a: ['The researcher conceded that the survey was too small.', 'The researcher conceded the survey was too small.'], why: '*Concede that*: accept reluctantly.' },
        { q: 'People say the scientist was the first to notice the error. (The scientist ___ noticing the error first.)', cue: 'CREDITED', a: ['The scientist is credited with noticing the error first.', 'The scientist has been credited with noticing the error first.'], why: 'Passive *be credited with* + *-ing*.' },
        { q: '“The story is nothing but gossip,” said the spokesperson. (The spokesperson ___ gossip.)', cue: 'DISMISSED', a: ['The spokesperson dismissed the story as gossip.', 'The spokesperson dismissed the story as nothing but gossip.'], why: '*Dismiss something as*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 4 of C1 Advanced you write three to six words and must not change the word given. Each answer is marked in two halves: here, usually the verb and then its pattern.' },
    ] },
  ],
  activities: {
    one: { title: 'Meeting minutes', md: 'Role-play a short, tense work meeting with the student: you push for a change, the student resists, then partly agrees. Afterwards the student reports the meeting in six sentences, each with a different reporting verb and its pattern (*You urged me to…*, *I conceded that…*). Correct the patterns together.' },
    small: { title: 'Who said what?', md: 'Each student reads one invented quote aloud (*“It wasn’t me, I wasn’t even there!”*). The next student reports it with the most precise verb they can, then the group decides whether a better verb exists. A point for each verb with a correct pattern.' },
    group: { title: 'Newsroom rooms', md: 'Give each breakout room of three a short invented news story in the chat with three quotes from different people. The room rewrites the quotes as reported speech with precise verbs that show each speaker’s position. Bring everyone back; rooms read their versions and the class checks every pattern.' },
  },
  homework: { book: 'u11:p1', md: 'Finish lesson 1 of unit 11 if needed, then do lesson 2 (Allegedly, reportedly). Find a short news article in English and rewrite three of its quotes as reported speech, each with a different reporting verb from today.' },
};
