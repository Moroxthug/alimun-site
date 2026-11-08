// English C1, class 60 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u13:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c60',
  focus: 'By the end every student builds formal, precise sentences with advanced relative clauses: a preposition before *which* or *whom*, quantity clauses (*most of which, few of whom*), and the linking phrases *whereby, in which case, by which time, at which point* and *the extent to which*. The speaking goal: tell a short story about a performance or event in long, linked sentences (*We arrived at nine, by which time the band had left*).',
  tips: [
    'Show the point of these phrases first: two flat sentences (*We arrived at nine. The curtain had fallen by then.*) become one with a logical link. Students then see why they are worth the effort.',
    '*In which case, by which time* and *at which point* always follow a comma and refer back to the whole previous clause. Students often write *in that case* after a comma, which joins two sentences without a linking word.',
    'After a preposition, only *which* (things) or *whom* (people), never *that* or *who*: *the critic to whom it is dedicated*. In conversation the preposition can go to the end; mention it, but practise the formal form today.',
    'Quantity clauses (*none of which, several of whom*) are where students write *none of them were*. Point out that *them* needs a new sentence or a linking word.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Write on the board: *The concert started late. By then half the audience had left.* Ask students to make it one sentence. Collect ideas, then show *by which time*.' },
    { min: 12, title: 'Linking with which', md: 'Show board page 1. Go through the table, then students choose the right phrase alone and explain one choice each.' },
    { min: 10, title: 'Common mistakes', md: 'Show board page 2. Students fix the mistakes in pairs and say which rule each one breaks.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 4. Students rewrite the sentences alone, then count the words together. Reveal the answers.' },
    { min: 5, title: 'Close', md: 'Each student says one sentence about their week with *by which time*, *at which point* or *in which case*. Set the homework.' },
  ],
  board: [
    { title: 'Linking with which', blocks: [
      { t: 'table', caption: 'Advanced relative phrases', explain: ['head', 'col1'], head: ['Phrase', 'Meaning', 'Example'], rows: [
        ['in which case', 'and if that happens', 'The singer may be ill, in which case the understudy will perform.'],
        ['by which time', 'and before or at that point', 'We found our seats at half past, by which time the overture was over.'],
        ['at which point', 'and at that moment', 'The lights failed, at which point the cast carried on by torchlight.'],
        ['whereby', 'by which; a system or arrangement (formal)', 'an agreement whereby local schools use the hall for free'],
        ['most / none / few of which, whom', 'part of a group already named', 'thirty dancers, few of whom had trained professionally'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the right relative phrase.', items: [
        { q: 'The audience began to whistle, ___ the conductor stopped the orchestra.', o: ['at which point', 'whereby', 'in which case'], why: 'At that moment: *at which point*.' },
        { q: 'This is the studio ___ the painter spent her last years.', o: ['in which', 'in that', 'which'], why: 'Preposition + *which*; never *in that*.' },
        { q: 'The festival relies on forty volunteers, most of ___ are students.', o: ['whom', 'them', 'who'], why: 'Part of a group of people: *most of whom*.' },
        { q: 'The city signed an agreement ___ the orchestra rehearses in the town hall for free.', o: ['whereby', 'by which time', 'at which point'], why: 'An arrangement: *whereby*.' },
      ] },
    ] },
    { title: 'Common mistakes', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'The director [with who] she worked for years has retired.', a: ['with whom'], why: 'After a preposition, *whom* for people.' },
        { s: 'It may snow, [in that case] the concert will be cancelled.', a: ['in which case'], why: 'After a comma, *which* makes one sentence.' },
        { s: 'He painted forty canvases, [most of them] were lost in a fire.', a: ['most of which'], why: 'Without a linking word you need *which*.' },
        { s: 'The gallery [in that] the portrait hangs is closed today.', a: ['in which', 'where'], why: 'No *that* after a preposition.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first, using the word given. Use between three and six words, including the word given.', items: [
        { q: 'We got to the theatre at half past seven. The play had already started by then. (We got to the theatre at half past seven, … already started.)', cue: 'WHICH', a: ['We got to the theatre at half past seven, by which time the play had already started.'], why: '*by which time* + past perfect: six words.' },
        { q: 'The tickets may sell out. If that happens, we will watch the stream. (The tickets may sell out, … watch the stream.)', cue: 'CASE', a: ['The tickets may sell out, in which case we will watch the stream.', 'The tickets may sell out, in which case we’ll watch the stream.'], why: '*in which case* = and if that happens.' },
        { q: 'Under the scheme, members receive two free tickets a year. (There is a scheme … two free tickets a year.)', cue: 'WHEREBY', a: ['There is a scheme whereby members receive two free tickets a year.', 'There is a scheme whereby members get two free tickets a year.'], why: '*whereby* for a system or arrangement.' },
        { q: 'She wrote nine novels, but only two of them were published. (She wrote nine novels, … published.)', cue: 'WHICH', a: ['She wrote nine novels, only two of which were published.'], why: 'A quantity clause: *only two of which*.' },
        { q: 'Critics disagree about how far the film is based on real events. (Critics disagree about … based on real events.)', cue: 'EXTENT', a: ['Critics disagree about the extent to which the film is based on real events.'], why: '*the extent to which* = how far.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 4 at C1 you write **three to six words**, including the word given, which you must not change. Contractions count as two words. Each answer usually has two marks, so a half-right answer can still earn one.' },
    ] },
  ],
  activities: {
    one: { title: 'The night it went wrong', md: 'The student tells you about a concert, play, match or event where something unexpected happened. Interrupt with prompts: *And then?* (*at which point…*), *What if…?* (*in which case…*), *How late was it?* (*by which time…*). Write down their three best sentences and improve one together.' },
    small: { title: 'Chain story', md: 'Start a story in the chat: *The band arrived two hours late…* Each student adds one sentence, which must contain a phrase from the table (*by which time, at which point, in which case, few of whom, whereby*). Nobody may use the same phrase twice in a row. Read the whole story aloud at the end.' },
    group: { title: 'The festival programme', md: 'Breakout rooms of three write a short programme note (four sentences) for an imaginary arts festival, using at least four relative phrases from the table. Rooms paste their notes in the chat; the class votes for the most natural one and corrects any mistakes together.' },
  },
  homework: { book: 'u13:p2', md: 'Finish book lesson 2 of unit 13 if needed, then do lesson 3 (A tour de force, or simply overrated?). Write six sentences about a book, show or festival you know, each with a different phrase from today’s table.' },
};
