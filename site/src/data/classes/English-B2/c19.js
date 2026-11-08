// English B2, class 19 (docs/LESSONS_PLAN.md, L6). Reviews units 3 and 4. Draft for the owner's review.
export const LESSON = {
  id: 'c19',
  focus: 'By the end of the class every student has used the key language of units 3 and 4 again in speaking: the future continuous and future perfect, work collocations, diplomatic language for negotiating, the passive in every tense, *have something done* and the impersonal passive. The class finds and fixes its own most frequent mistakes from both units.',
  tips: [
    'This is a speaking-heavy review. Keep your own talking short: set up each activity in one minute and spend your time listening and noting mistakes.',
    'Collect real mistakes on a notepad during the speaking and bring five of them to the board anonymously in the last stage. Students learn more from their own errors than from new examples.',
    'The future perfect and the perfect passive both need a past participle and are often confused in a sentence like *By May the building will have been finished*. Give it its own minute.',
    'For students who finished units 3 and 4 quickly, ask for more natural collocations and diplomatic softeners rather than more grammar.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What will you be doing this time next year? What will you have achieved by then?* Each student answers in one or two sentences.' },
    { min: 10, title: 'Unit 3 check', md: 'Show board page 1. Students do the exercises alone, then check together. Ask for one more collocation for each verb.' },
    { min: 10, title: 'Unit 4 check', md: 'Show board page 2. Students do the exercises alone, then check together. Point at *being* and *been* where they are needed.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: word formation in the format of B2 First Reading and Use of English Part 3. Students work alone, then compare.' },
    { min: 10, title: 'Fix it', md: 'Write five real mistakes you heard today on the board. Students correct them in pairs, then together. Set the homework.' },
  ],
  board: [
    { title: 'Unit 3: work and the future', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right form or word.', items: [
        { q: 'By the end of the year I ___ my degree.', o: ['will have finished', 'will be finishing', 'will finish'], why: '*By* + a time: future perfect.' },
        { q: 'Don’t call at nine: I ___ a client then.', o: ['will be meeting', 'will have met', 'meet'], why: 'In progress at that moment: future continuous.' },
        { q: 'She has decided to ___ more responsibility at work.', o: ['take on', 'make on', 'get on'], why: 'The collocation is *take on responsibility*.' },
        { q: 'We worked all weekend to ___ the deadline.', o: ['meet', 'make', 'reach at'], why: 'You *meet* a deadline.' },
      ] },
      { t: 'ex', kind: 'choice', h: 'Which reply is the most diplomatic?', items: [
        { q: 'A client asks for a 30% discount.', o: ['I’m afraid that might be difficult for us.', 'No, that’s impossible.', 'You are asking too much.'], why: '*I’m afraid* and *might* soften the refusal.' },
        { q: 'You disagree with a colleague’s plan.', o: ['I see your point, but I’m not sure it will work.', 'Your plan is wrong.', 'I disagree with everything.'], why: 'Acknowledge first, then disagree gently.' },
      ] },
    ] },
    { title: 'Unit 4: the passive', blocks: [
      { t: 'ex', kind: 'gap', h: 'Complete with the passive of the verb in brackets.', items: [
        { q: 'The new vaccine ___ (test) on volunteers at the moment.', a: ['is being tested'], why: 'Continuous passive: *is being* + past participle.' },
        { q: 'By 2030 the old railway ___ (replace).', a: ['will have been replaced'], why: 'Future perfect passive.' },
        { q: 'The castle ___ (say) to be over 800 years old.', a: ['is said'], why: 'Impersonal passive: *is said to be*.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Each sentence has one mistake. Find it and fix it.', items: [
        { s: 'I need to have [checked my eyes] soon.', a: ['my eyes checked'], why: '*have* + object + past participle.' },
        { s: 'A new planet [has discovered] by astronomers.', a: ['has been discovered'], why: 'Perfect passive needs *been*.' },
        { s: 'He [is believed that he left] the country.', a: ['is believed to have left'], why: 'Real subject + *to have* + past participle.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 3', blocks: [
      { t: 'text', md: 'In the format of B2 First Reading and Use of English Part 3: use the word in capitals to form a word that fits the gap.' },
      { t: 'ex', kind: 'wordform', h: 'Form the right word.', items: [
        { q: 'The team’s ___ to meet every deadline impressed the client.', base: 'able', a: ['ability'], why: 'After *the team’s* we need a noun: *ability*.' },
        { q: 'The results of the experiment were completely ___.', base: 'expect', a: ['unexpected'], why: 'A negative adjective: *un-* + *expected*.' },
        { q: 'She is one of the most ___ engineers in the company.', base: 'experience', a: ['experienced'], why: 'Adjective describing a person: *experienced*.' },
        { q: 'The ___ of the new bridge took three years.', base: 'construct', a: ['construction'], why: 'Noun after *the*: *construction*.' },
      ] },
      { t: 'tip', md: 'In Part 3, first decide the **type of word** the gap needs (noun, adjective, adverb, verb), then whether it needs to be **negative** or **plural**. Many points are lost on a missing *un-* or *-s*.' },
    ] },
  ],
  activities: {
    one: { title: 'The negotiation', md: 'Role play: the student is a manager, you are a supplier. Negotiate a deadline and a price for a project. The student must use two diplomatic phrases, one future perfect (*By March we’ll have…*) and one passive (*The materials will be delivered…*). Swap roles, then review your notes with the student.' },
    small: { title: 'Project update', md: 'Each student is the manager of an invented project (a new café, a phone app, a school trip). They give a two-minute update: what has been done, what is being done, what will have been finished by next month. The others ask one diplomatic question each (*Would you be willing to…?*). Note mistakes for the final stage.' },
    group: { title: 'The startup board', md: 'Breakout rooms of four: two founders present a startup plan, two investors negotiate. Founders use future forms and passives (*The app will have been launched by…*); investors use diplomatic language to push back. Swap roles after five minutes. Back together, each room reports the deal they made.' },
  },
  homework: { book: 'u3 u4', md: 'Do the unit tests of units 3 and 4 in the book. Then look again at the lesson with your lowest score and do its exercises once more.' },
};
