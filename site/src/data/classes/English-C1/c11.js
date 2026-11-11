// English C1, class 11 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u3:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c11',
  focus: 'By the end every student chooses a cleft sentence to control what the listener remembers: *what*-clefts (*What we need is…*), *it*-clefts (*It was the price that…*), *all*-clefts (*All I want is…*), clefts with *the thing*, *the reason*, *the problem* and reversed clefts (*That is what…*, *This is where…*), with the right agreement. The speaking goal: make one clear, emphatic point in a short argument.',
  tips: [
    'Start from information order: English puts known information first and the new or important idea at the end. A cleft moves the key idea into the focus position.',
    'The verb after *who* or *that* agrees with the noun in focus: *It is the volunteers who keep it open*. Students often use the singular by habit.',
    'Stress carries the effect. Read each cleft aloud with the stress on the focus, and ask students to do the same; flat intonation loses the point.',
    'One cleft per point is persuasive; three in a row sound artificial. Ask students to choose the one place in their turn where emphasis matters most.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What is the one thing your town or city really needs?* Students answer with any structure. Rewrite two answers on the board as clefts and ask which version sounds stronger.' },
    { min: 12, title: 'Choose your focus', md: 'Show board page 1. Students rewrite the sentences as clefts starting with the words given, then read them aloud with the stress on the focus.' },
    { min: 10, title: 'Agreement and mistakes', md: 'Show board page 2. Students fix the mistakes in pairs and explain each one.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 4. Students complete the sentences alone and count their words, then compare.' },
    { min: 5, title: 'Close', md: 'Each student finishes: *What I’ve learned today is…* Set the homework.' },
  ],
  board: [
    { title: 'Choose your focus', blocks: [
      { t: 'ex', kind: 'transform', h: 'Rewrite each sentence as a cleft, starting with the words given.', items: [
        { q: 'The noise bothers me, not the heat.', cue: 'It', a: ['It’s the noise that bothers me, not the heat.', 'It is the noise that bothers me, not the heat.', 'It’s the noise which bothers me, not the heat.', 'It is the noise which bothers me, not the heat.'], why: 'An *it*-cleft puts *the noise* in focus and contrasts it with *the heat*.' },
        { q: 'We need clearer signs at the station.', cue: 'What', a: ['What we need is clearer signs at the station.', 'What we need at the station is clearer signs.', 'What we need are clearer signs at the station.'], why: 'A *what*-cleft builds up to the new idea at the end.' },
        { q: 'I only want ten minutes of your time.', cue: 'All', a: ['All I want is ten minutes of your time.', 'All that I want is ten minutes of your time.'], why: '*All* = the only thing; it makes a request sound modest but firm.' },
        { q: 'Nobody consulted the residents. That was the problem.', cue: 'The problem', a: ['The problem was that nobody consulted the residents.', 'The problem was nobody consulted the residents.'], why: '*The problem was that* + clause puts the whole event in focus.' },
      ] },
    ] },
    { title: 'Agreement and mistakes', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'It is the nurses who [keeps] the ward running at night.', a: ['keep'], why: 'The verb agrees with the noun in focus: *the nurses keep*.' },
        { s: 'What surprised me [it was] how quiet the town had become.', a: ['was'], why: 'Do not repeat the subject with *it*.' },
        { s: 'The reason [because] I came is to apologise.', a: ['why', 'that'], why: '*The reason why* or *the reason that*, not *because*.' },
        { s: 'It was only when the bill arrived [when] we realised our mistake.', a: ['that'], why: 'An *it*-cleft with a time clause still uses *that*.' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first, using the word given. Use between three and six words, including the word given.', items: [
        { q: 'I didn’t realise how serious it was until I read the report.', cue: 'only', gap: 'It ___ the report that I realised how serious it was.', a: ['was only when I read', 'was only after I read', 'was only when I had read', 'was only after I had read'], why: 'An *it*-cleft with *only when*: *It was only when… that…*' },
        { q: 'They did nothing all evening except complain about the parking.', cue: 'all', gap: '___ all evening was complain about the parking.', a: ['All they did', 'All that they did'], why: 'An *all*-cleft: *All they did was* + infinitive without *to*.' },
        { q: 'Her honesty is what I admire most about her.', cue: 'thing', gap: 'The ___ her is her honesty.', a: ['thing I admire most about', 'thing that I admire most about'], why: '*The thing (that) I admire most* is a cleft with a noun.' },
        { q: 'The council should listen to residents, not developers.', cue: 'who', gap: 'It is residents ___ listen to, not developers.', a: ['who the council should', 'whom the council should'], why: 'An *it*-cleft with *who* puts *residents* in focus.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In **Part 4** clefts appear often, because one key word such as *only*, *all*, *thing* or *until* forces the structure. If the second sentence starts with *It* or *What* and the first one does not, think of a cleft first.' },
    ] },
  ],
  activities: {
    one: { title: 'The one thing', md: 'Ask the student about four topics (their job, their town, their language learning, a recent film or book). For each, they answer with one cleft that makes their main point: *What frustrates me most is…*, *It’s the… that…*, *The one thing I’d change is…* Push for the right stress and correct agreement.' },
    small: { title: 'Correct me', md: 'Each student says a deliberately wrong statement about another student (*Ana lives in Madrid*). The student corrects it with an *it*-cleft and a contrast: *It’s Seville I live in, not Madrid.* Then they make a wrong statement about someone else.' },
    group: { title: 'The campaign', md: 'In breakout rooms of three, students choose a local problem and prepare a one-minute campaign speech with three clefts: one *what*-cleft, one *it*-cleft and one reversed cleft (*That is why…*). Each room gives its speech and the class votes for the most persuasive.' },
  },
  homework: { book: 'u3:p1', md: 'Finish lesson 1 of unit 3 if needed, then do lesson 2 (I do see your point). Write about 120 words on a change your town needs, with at least three different cleft sentences.' },
};
