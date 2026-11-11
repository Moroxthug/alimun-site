// English C2, class 79 (docs/LESSONS_PLAN.md, L6). Practice exam in the format of C2 Proficiency, a timed sample of every paper with the rest as timed homework (all 16 units). Draft for the owner's review.
export const LESSON = {
  id: 'c79',
  focus: 'By the end of the class every student has done a timed sample of every paper in the format of C2 Proficiency: Reading and Use of English (Parts 1 to 5, shortened), a Listening Part 1 extract read aloud by the teacher, a Writing Part 1 plan and opening, and Speaking Parts 1 and 3. They see their answers at the end, know their score per part, and leave with the rest of the exam set as timed homework: a Reading and Use of English Part 7 task and the whole Writing paper in 90 minutes. The aim is to show where each student stands before the final check, not to predict an exam result.',
  tips: [
    'Keep strict time and say how many minutes are left. Time pressure is part of the practice, and at C2 it is what most candidates find hardest.',
    'Use “Everyone solves this” for each written page so every student works alone, and reveal nothing until the answers stage.',
    'Read the listening script at natural speed, twice, as in the exam, with a short pause between readings. Do not explain any word before the second reading. Show the script only after the answers.',
    'At the end, students count their correct answers per part. A score per part tells them more than a total, and shows what to revise before the final check.',
    'Present this as practice in the format of the exam, not a mock result. If a student asks whether they will pass, say what they did well and what to work on; say *ready to take the exam* only when the work shows it, never *you will pass*.',
  ],
  plan: [
    { min: 3, title: 'Instructions', md: 'Explain the timing, that every part is done alone, that answers come at the end and that the rest of the exam is homework.' },
    { min: 22, title: 'Reading and Use of English', md: 'Show board pages 1, 2 and 3. Students work alone, about seven minutes per page.' },
    { min: 7, title: 'Listening', md: 'Show board page 4. Give 30 seconds to read the questions, then read the script on board page 8 aloud twice. Students answer alone.' },
    { min: 10, title: 'Writing Part 1', md: 'Show board page 5. Students plan the essay and write the first paragraph, summarising both texts.' },
    { min: 8, title: 'Speaking', md: 'Use the activity for your class size below, with the questions on board page 5.' },
    { min: 10, title: 'Answers, scores and homework', md: 'Reveal all the answers and show the listening script. Students count their score per part and choose the part to revise before the final check. Show board pages 6 and 7 and set the timed homework.' },
  ],
  board: [
    { title: 'Reading and Use of English: Parts 1 and 2', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 1): read the text about sleep and decide which answer best fits each gap. (Shortened: four gaps instead of eight.)', items: [
        { q: 'Over time, a lack of sleep ___ its toll on both mind and body.', o: ['takes', 'makes', 'pays', 'gives'], why: '*Take its toll on*: cause gradual harm.' },
        { q: 'Doctors are at ___ to point out that one bad night does little harm.', o: ['pains', 'lengths', 'efforts', 'troubles'], why: '*Be at pains to*: take great care to; *go to great lengths* is a different phrase.' },
        { q: 'It goes without ___ that a bedroom full of screens does not help.', o: ['saying', 'telling', 'speaking', 'mentioning'], why: 'The fixed phrase *it goes without saying*.' },
        { q: 'In the ___ run, regular habits matter more than the occasional early night.', o: ['long', 'far', 'wide', 'distant'], why: '*In the long run*: over a long period.' },
      ] },
      { t: 'ex', kind: 'gap', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 2): read the text about museums opening at night and think of the word which best fits each gap. Use only one word in each gap. (Shortened: four gaps instead of eight.)', items: [
        { q: 'No ___ had the doors opened at ten than a queue formed down the street.', a: ['sooner'], why: '*No sooner… than*.' },
        { q: 'The event proved popular, ___ the late hour and the cold.', a: ['despite', 'notwithstanding'], why: 'One word for concession before a noun.' },
        { q: 'Visitors, many of ___ had never set foot in a museum, stayed until two.', a: ['whom'], why: '*Many of whom*: a relative after a preposition.' },
        { q: 'It remains to ___ seen whether the idea will last beyond the first year.', a: ['be'], why: 'The fixed phrase *it remains to be seen*.' },
      ] },
    ] },
    { title: 'Reading and Use of English: Parts 3 and 4', blocks: [
      { t: 'ex', kind: 'wordform', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 3): read the text about volunteering and use the word in capitals to form a word that fits each gap. (Shortened: four gaps instead of eight.)', items: [
        { q: 'The library survives thanks to the ___ of a small group of volunteers.', base: 'commit', a: ['commitment'], why: 'A noun after *the*: *-ment*.' },
        { q: 'Much of their work goes largely ___ by the people who benefit from it.', base: 'recognise', a: ['unrecognised', 'unrecognized'], why: '*Go unrecognised*: *un-* and the past participle.' },
        { q: 'Recent funding cuts have had a ___ effect on similar projects nearby.', base: 'devastate', a: ['devastating'], why: 'An adjective before *effect*: *-ing*.' },
        { q: 'The long-term ___ of the scheme depends on finding younger volunteers.', base: 'sustain', a: ['sustainability'], why: '*Sustain* → *sustainable* → *sustainability*.' },
      ] },
      { t: 'ex', kind: 'transform', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first. Do not change the word given. Use between three and eight words, including the word given. (Shortened: three items instead of six.)', items: [
        { q: 'It’s quite possible that he forgot about the meeting.', cue: 'WELL', a: ['He may well have forgotten about the meeting.', 'He might well have forgotten about the meeting.', 'He could well have forgotten about the meeting.'], why: 'Unit 6: *may well have* + past participle.' },
        { q: 'The storm was so violent that the match had to be cancelled.', cue: 'SUCH', a: ['Such was the violence of the storm that the match had to be cancelled.', 'The storm was such that the match had to be cancelled.'], why: 'Unit 14: fronted *such* + *be* + noun + *that*.' },
        { q: 'I’d prefer you not to mention this to anyone.', cue: 'RATHER', a: ['I’d rather you didn’t mention this to anyone.', 'I would rather you did not mention this to anyone.', 'I would rather you didn’t mention this to anyone.', 'I’d rather you did not mention this to anyone.'], why: '*Would rather* + subject + past tense for another person’s action.' },
      ] },
    ] },
    { title: 'Reading and Use of English: Part 5', blocks: [
      { t: 'reading', title: 'In praise of getting lost', md: 'There was a time when getting lost was an ordinary part of travel, as unremarkable as rain. Satellite navigation has largely abolished it, and few of us would wish it back. Yet something has gone with the getting lost. A traveller who must find their own way pays attention: to the slope of a street, the position of the sun, the shop on the corner that will serve as a landmark on the way home. One who follows a blue dot attends only to the dot.\n\nSome researchers suggest that relying on such devices may weaken our ability to build a mental map of a place, though the evidence is far from settled. I am less interested in the science than in the experience. The cities I know best are the ones in which I was most thoroughly lost, and I doubt that is a coincidence. Being lost forced me to ask strangers the way, and the directions came with opinions, warnings and, once, an invitation to lunch.\n\nNone of this is an argument for throwing the phone away. It is an argument for leaving it, now and then, in a pocket.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 5): read the text and choose the answer which fits best. (Shortened: three questions on a short text instead of six on a long one.)', items: [
        { q: 'In the first paragraph, the writer suggests that satellite navigation', o: ['has changed what travellers notice', 'is unpopular with most travellers', 'has made travel more dangerous', 'is less accurate than a paper map'], why: '*One who follows a blue dot attends only to the dot.* *Few of us would wish it back* rules out *unpopular*.' },
        { q: 'The writer mentions research on mental maps in order to', o: ['acknowledge a possible effect without treating it as proven', 'prove that the devices are harmful', 'show that scientists share his view', 'reject the findings as unreliable'], why: '*Some researchers suggest… though the evidence is far from settled.*' },
        { q: 'What is the writer’s main point in the final paragraph?', o: ['Going without the device occasionally is worthwhile.', 'Phones should be banned on holiday.', 'Getting lost is always enjoyable.', 'Strangers give better directions than devices.'], why: '*Not an argument for throwing the phone away… leaving it, now and then, in a pocket.*' },
      ] },
    ] },
    { title: 'Listening Part 1 (the teacher reads twice)', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Listening Part 1): you will hear two colleagues talking about their new open-plan office. Choose the answer which fits best according to what you hear. (Shortened: one extract instead of three.)', items: [
        { q: 'What does the woman imply about the new office?', o: ['It makes concentrating difficult.', 'It has improved her relationships at work.', 'It is too far from her home.'], why: '*I’ve learnt a great deal about my colleagues’ weekend plans… I’ve started arriving at seven. It’s the only quiet hour.*' },
        { q: 'What does she concede about the change?', o: ['Meetings have become more efficient.', 'She now works fewer hours.', 'Her manager was right to make it.'], why: '*I’ll admit the meetings are shorter now that nobody can hide in a room.*' },
      ] },
    ] },
    { title: 'Writing Part 1 and Speaking', blocks: [
      { t: 'text', md: '**Writing Part 1 (essay, 240 to 280 words).** *Read the two texts below. Write an essay summarising and evaluating the key points from both texts. Use your own words throughout as far as possible, and include your own ideas in your answer.*\n\n*Text 1. A four-day working week is no longer a fantasy. Where it has been tried, people often report feeling more rested and more focused, and much of the work still gets done. Time is the one thing modern employees say they lack, and giving them more of it may be the cheapest improvement an employer can make.*\n\n*Text 2. The four-day week suits offices far better than hospitals, schools or shops, where someone has to be present every day. Squeezing five days into four can also simply make each day longer and more intense. A reform that benefits only some workers risks widening a gap that is already wide.*\n\n**Speaking Part 1.** *What kind of work would you most like to be doing in ten years’ time? How do you usually switch off after a busy day?*\n\n**Speaking Part 3, the long turn (about two minutes).** *How has the world of work changed in your lifetime?* Ideas: technology, security, where people work. Follow-up for the partner: *Do you think these changes have been for the better?*' },
      { t: 'tip', art: 'dragon', md: 'In the plan, write the four key points in your own words first, then one judgement for each and the last sentence of your essay. Then every paragraph can lead to it.' },
    ] },
    { title: 'Timed homework: Reading and Use of English Part 7', blocks: [
      { t: 'reading', title: 'Four reviews of a museum of everyday objects', md: '**A. Priya.** The idea is charming: a museum of things nobody thought worth keeping, from bus tickets and school reports to a kettle. Where it falls short is the labelling, which explains everything and leaves visitors nothing to wonder about.\n\n**B. Daniel.** I went expecting nostalgia and left unsettled. Seeing my own childhood lunchbox behind glass made me feel, for the first time, that I belong to history. The museum is at its best when it makes you slightly uncomfortable.\n\n**C. Hélène.** Some critics have complained that the collection is random. That is precisely its point: ordinary life is random. My only reservation is practical. The rooms are cramped, and on a busy afternoon you see more backs than objects.\n\n**D. Marcus.** It is easy to mock a museum of kettles, and I arrived ready to. I was wrong. The curators have chosen with real intelligence, and the room of objects that people repaired rather than replaced is quietly moving.' },
      { t: 'ex', kind: 'choice', h: 'At home, in 12 minutes. In the format of the C2 Proficiency exam (Reading and Use of English Part 7): which reviewer says each thing? The reviewers may be chosen more than once. (Shortened: five questions instead of ten.)', items: [
        { q: 'Who changed an opinion they held before the visit?', o: ['D', 'A', 'B', 'C'], why: 'Marcus: *I arrived ready to [mock it]. I was wrong.*' },
        { q: 'Who feels the information provided leaves too little to the imagination?', o: ['A', 'B', 'C', 'D'], why: 'Priya: *explains everything and leaves visitors nothing to wonder about*.' },
        { q: 'Who defends the museum against a criticism made by others?', o: ['C', 'A', 'B', 'D'], why: 'Hélène: *Some critics have complained… That is precisely its point.*' },
        { q: 'Who was made to see their own life in a new way?', o: ['B', 'A', 'C', 'D'], why: 'Daniel: *made me feel, for the first time, that I belong to history*.' },
        { q: 'Who mentions a problem with the conditions of visiting?', o: ['C', 'A', 'B', 'D'], why: 'Hélène: *The rooms are cramped.*' },
      ] },
    ] },
    { title: 'Timed homework: the Writing paper', blocks: [
      { t: 'text', md: 'At home, in one sitting of **1 hour 30 minutes**, as in the exam: write the **Writing Part 1** essay on page 5 (240 to 280 words), then **one** of the Writing Part 2 tasks below (280 to 320 words).\n\n**Article.** *A magazine for young professionals invites articles with the title **The best advice I ignored**. Describe the advice, explain why you ignored it and what you learnt, and say whether you would give it to others.*\n\n**Letter.** *Your local newspaper has published an editorial arguing that libraries are no longer needed. Write a letter to the editor responding to the editorial and giving your own view.*\n\n**Report.** *The director of the language centre where you study has asked for a report on how students use the centre’s study spaces. Assess what works well, what does not, and recommend improvements.*\n\n**Review.** *A cultural website invites reviews of a place to visit, such as a museum, park or historic building, that deserves more visitors. Describe it, evaluate it and say who would enjoy it most.*' },
    ] },
    { title: 'Listening script (show after the answers)', blocks: [
      { t: 'dialogue', title: 'Two colleagues in an open-plan office', lines: [
        { who: 'Man', s: 'So, how are you finding the new open-plan office?' },
        { who: 'Woman', s: 'It’s certainly very sociable. I’ve learnt a great deal about my colleagues’ weekend plans.' },
        { who: 'Man', s: 'And have you managed to get any work done?' },
        { who: 'Woman', s: 'I’ve started arriving at seven. It’s the only quiet hour. Mind you, I’ll admit the meetings are shorter now that nobody can hide in a room.' },
        { who: 'Man', s: 'That’s true. I came round to it faster than I expected.' },
        { who: 'Woman', s: 'Give me another month. I may come round too, or I may move my desk into the stationery cupboard.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Exam conditions', md: 'Act as the examiner and follow the timing exactly. In the speaking part, ask both Part 1 questions, then give the Part 3 card: the student speaks for about two minutes, and you ask the follow-up question and two questions on the wider topic (*Should employers decide where their staff work? Will people in future have one career or several?*). Finish with a score per part and one strategy for the weakest part.' },
    small: { title: 'Speaking round', md: 'Ask each student one Part 1 question, about thirty seconds each. Then, as time allows, two students give a long turn on the Part 3 card, each followed by a partner answering the follow-up question; the others give theirs as a recorded long turn for homework. After the answers, each student shares their score per part and one tip that helped them today.' },
  },
  homework: { book: 'u16:p2', md: 'The rest of the practice exam, timed. Do the Reading and Use of English Part 7 task on board page 6 in 12 minutes. Then, in one sitting of 1 hour 30 minutes, write the Writing Part 1 essay and one Writing Part 2 task from board page 7, check each once for content and once for language, and send both to your teacher, who will correct them. If you did not give a long turn in class, record a two-minute answer to the Part 3 card and send it too. The board pages are in your class notes. Revise the part where you scored lowest before the final check.' },
};
