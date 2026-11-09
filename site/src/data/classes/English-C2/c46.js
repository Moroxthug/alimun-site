// English C2, class 46 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u10:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c46',
  focus: 'By the end every student can chair a short meeting and take part in one: open with the purpose and the finishing time, keep to time (*let’s park that*, *in the interests of time*), bring people in by name with an open question, manage interruptions firmly but warmly (*Hold that thought*), summarise and close with named actions and dates. As participants they interrupt politely, keep the floor, bring a meeting back to the agenda and take on an action without over-promising. Exam work: grammar words and fixed phrases in the format of C2 Proficiency Reading and Use of English Part 2.',
  tips: [
    'The best chairs talk least. In the activity, count the chair’s turns: most should be short questions and summaries, not opinions.',
    'An action point needs a name and a date. If a student closes with *Someone should send the figures*, stop and ask *Who, and by when?*',
    'Softening is the C2 layer: *I was going to suggest…*, *Might it be worth…?*, *Could we let Priya finish?* Students who chair with imperatives (*Stop, Owen*) sound rude in English even when they mean to be efficient.',
    'In 1 on 1 you play every participant. Change your voice and name for each one, and keep a list of the moments the student handled well so feedback is specific.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Show board page 1. Ask each student the two Speaking Part 1 questions and give them about thirty seconds each for their answers.' },
    { min: 10, title: 'The chair’s moves', md: 'Show board page 2. Students sort the sentences alone, then each adds one sentence of their own to the group they find hardest.' },
    { min: 8, title: 'Taking part', md: 'Show board page 3. Students fix the phrases, then say each corrected phrase with the polite intonation of a meeting.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 4: C2 Proficiency Reading and Use of English Part 2. Six minutes alone, then check spelling and the fixed phrases together.' },
    { min: 20, title: 'Activity', md: 'Show board page 5: the agenda and the roles. Use the activity for your class size below.' },
    { min: 5, title: 'Close', md: 'Each student names one thing a chair did well today and one thing they will do differently in their next real meeting. Set the homework.' },
  ],
  board: [
    { title: 'Warm-up: Speaking Part 1', blocks: [
      { t: 'text', md: 'In the format of the C2 Proficiency exam (Speaking Part 1, the interview): answer each question in two or three sentences.\n\n*How much of your working or study time is spent in meetings, and how useful are they?*\n\n*What makes someone a good person to work with in a group?*' },
    ] },
    { title: 'The chair’s moves', blocks: [
      { t: 'ex', kind: 'sort', h: 'What is the chair doing?', groups: ['Opening', 'Keeping the meeting on track', 'Bringing people in', 'Closing'], explain: ['groups'], items: [
        { s: 'Thanks for coming, everyone. We have three items, and I’d like to be done by four.', g: 0, why: 'The agenda and the finishing time.' },
        { s: 'The main thing we need to decide today is the venue.', g: 0, why: 'States the purpose.' },
        { s: 'In the interests of time, can we move on to item two?', g: 1, why: 'Keeps to time.' },
        { s: 'Hold that thought, Mia: let Jon finish first, and then I’ll come to you.', g: 1, why: 'Manages an interruption firmly but warmly.' },
        { s: 'Sam, you know the venues better than any of us. What’s your take?', g: 2, why: 'By name, with an open question and a reason.' },
        { s: 'I’d like to hear from someone in finance before we decide.', g: 2, why: 'Invites a missing view.' },
        { s: 'So, Jon will draft the budget and circulate it by Wednesday.', g: 3, why: 'An action with a name and a date.' },
        { s: 'Thank you all; that was a very productive hour.', g: 3, why: 'Ends the meeting.' },
      ] },
    ] },
    { title: 'Taking part', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake in each phrase.', items: [
        { s: 'Sorry, could I just [enter] here for a moment?', a: ['come in'], why: '*Come in*: join the discussion. *Enter* is for rooms.' },
        { s: 'If I could just [end], I have one more point to make.', a: ['finish'], why: '*If I could just finish*: the polite way to keep the floor.' },
        { s: 'I think we’re getting [sidetrack] by the parking question.', a: ['sidetracked'], why: '*Get sidetracked*: a passive-like adjective, so the past participle.' },
        { s: 'Correct me if I’m [mistaking], but didn’t we agree this last month?', a: ['wrong', 'mistaken'], why: '*Correct me if I’m wrong*: a soft way to challenge.' },
        { s: 'I can take that [up], though Friday may be tight.', a: ['on'], why: '*Take something on*: accept a task. *Take something up* means start a hobby or raise an issue.' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 2', blocks: [
      { t: 'ex', kind: 'gap', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 2): read the text about chairing a meeting. Write one word in each gap.', items: [
        { q: 'Few people are ever trained to chair a meeting, ___ most of us will be asked to do so at some point.', a: ['yet', 'but'], why: 'A contrast between two clauses: *yet* or *but*.' },
        { q: 'The chair’s first task is to make clear what the meeting is actually ___.', a: ['for'], why: '*What is it for?*: its purpose. The preposition ends the clause.' },
        { q: 'A chair who fails to do this will find the discussion drifting ___ one topic to another.', a: ['from'], why: '*From one topic to another*.' },
        { q: 'Equally important is keeping ___ time.', a: ['to'], why: '*Keep to time*: finish when planned.' },
        { q: 'An hour-long meeting that runs ___ by twenty minutes leaves everyone resentful.', a: ['over'], why: '*Run over*: go on longer than planned.' },
        { q: 'Good chairs bring quieter members ___ by name rather than waiting for them to speak.', a: ['in'], why: '*Bring someone in*: invite them into the discussion.' },
        { q: 'They deal with interruptions firmly ___ warmly, so that nobody feels silenced.', a: ['but', 'yet'], why: '*Firmly but warmly*: two qualities in contrast.' },
        { q: '___ all, they close by stating who will do what, and by when.', a: ['Above'], why: '*Above all*: most importantly. *After all* would change the meaning.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In **Part 2** many gaps are prepositions inside phrasal verbs or fixed phrases: *run **over***, *bring someone **in***, *keep **to** time*, ***above** all*. Read to the end of the sentence before you decide, and remember that a contraction is never the answer.' },
    ] },
    { title: 'The meeting', blocks: [
      { t: 'text', md: '**Agenda: the city language festival** (fifteen minutes)\n\nItem 1: the venue (the old library or the riverside park). Item 2: the date (late May or mid-September). Item 3: who will contact sponsors. Any other business.\n\n**The talker** keeps moving on to the festival’s logo, which is not on the agenda. **The quiet expert** has run events in both venues but speaks only when asked. **The interrupter** has strong views on the date and cuts in often. **The sceptic** doubts there is enough money for either venue.' },
      { t: 'tip', art: 'owl', md: 'Chair: state the purpose and the finishing time, bring in the quiet expert by name, park the logo, manage the interrupter, summarise after each item and close with named actions and dates.' },
    ] },
  ],
  activities: {
    one: { title: 'Chair me', md: 'The student chairs the meeting on board page 5; you play all four participants in turn, changing name and voice (the talker, the quiet expert, the interrupter, the sceptic). Make it realistic: drift to the logo twice, interrupt once in the middle of a sentence, stay silent as the expert until you are brought in by name. Stop at fifteen minutes whatever the state of the agenda. Then give feedback: count the student’s turns, read back the best intervention, and check that every action had a name and a date. If time allows, swap: you chair for three minutes and the student plays the interrupter, using polite interruptions and *If I could just finish…*.' },
    small: { title: 'Rotating chair', md: 'One student chairs; the others take a role each from board page 5 (with fewer than four, drop the talker, then the sceptic; with six, two students share the sceptic). Run the meeting for about seven minutes, then stop and give the chair one thing that worked and one to change. A second student takes the chair for the rest of the agenda, with the roles rotated. Close with a short group comparison: which interventions moved the meeting forward fastest?' },
  },
  homework: { book: 'u10:p2', md: 'Finish lesson 2 of unit 10 if needed, then do lesson 3 (I am writing to urge you to reconsider). Write the action points of today’s meeting as a short follow-up email of about 100 words to the participants: thank them, summarise the two decisions and list each action as a sentence with a name and a date.' },
};
