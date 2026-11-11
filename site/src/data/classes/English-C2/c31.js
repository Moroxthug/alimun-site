// English C2, class 31 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u7:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c31',
  focus: 'By the end every student recognises and uses the classic devices of the speech (anaphora, epistrophe, antithesis, chiasmus, the rising tricolon, the rhetorical question, hypophora and the extended metaphor), explains what each one does for a listener rather than only naming it, and gives a two-minute long turn in the format of C2 Proficiency Speaking Part 3 with one contrast, one question and one tricolon used naturally.',
  tips: [
    'Antithesis and chiasmus are the pair students confuse. Antithesis opposes two ideas (*courage, not caution*); chiasmus reverses the same words (*spend time to save money, not money to save time*). Ask *Are the same words coming back in reverse order?*',
    'A tricolon works when it rises: each item a little longer or stronger. Four items sound like a shopping list; two sound unfinished. Make students say their tricolon aloud and hear the rhythm.',
    'Devices in a long turn must sound spoken, not recited. One well-placed device per minute is plenty; three in a row make a candidate sound rehearsed, which examiners notice.',
    'In Speaking Part 3 the long turn is about two minutes. Time it strictly and stop the student kindly at two minutes, so they learn the length. Feed back on one device that worked and one place where the turn lost its shape.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Is there a line from a speech, a song or an advert that you still remember? Why do you think it stuck?* Write two of the lines on the board and ask what pattern makes them memorable.' },
    { min: 9, title: 'Name the pattern', md: 'Show board page 1. Students match the devices with the examples, then say what each one does for a listener who hears it only once.' },
    { min: 7, title: 'Which device?', md: 'Show board page 2. Students choose alone, then explain the difference between antithesis and chiasmus with their own example.' },
    { min: 10, title: 'Make it memorable', md: 'Show board page 3. Students rewrite each plain sentence with the device given, then read their versions aloud with the rhythm of a speech.' },
    { min: 8, title: 'Exam corner', md: 'Show board page 4: Speaking Part 3. Go through how the part works, then give students one minute to plan the first card: a position, two developed points and a conclusion.' },
    { min: 16, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 5, title: 'Close', md: 'Each student says the one line from today they would keep for a real speech. Set the homework.' },
  ],
  board: [
    { title: 'Name the pattern', blocks: [
      { t: 'ex', kind: 'match', h: 'Match each device with its example.', pairs: [
        ['anaphora', 'We will not be rushed. We will not be bullied. We will not be ignored.'],
        ['epistrophe', 'When the clinic closed, the old paid. When the fares rose, the old paid.'],
        ['antithesis', 'We asked for a hearing; we were given a leaflet.'],
        ['chiasmus', 'We do not keep the river; the river keeps us.'],
        ['the rising tricolon', 'a plan that is cheaper, fairer and far easier to explain to our grandchildren'],
        ['hypophora', 'Why does this matter? Because the next flood will not wait for a committee.'],
        ['the extended metaphor', 'This scheme is a seed: plant it now, water it for a year, and by spring the whole street will sit in its shade.'],
      ] },
    ] },
    { title: 'Which device?', blocks: [
      { t: 'ex', kind: 'choice', h: 'Which device is used? Choose the best answer.', items: [
        { q: '“They said it could not be done. They said it should not be done. They said, in the end, that it would never be done by people like us.”', o: ['anaphora', 'epistrophe', 'chiasmus', 'antithesis'], why: 'The same words, *They said*, open each sentence; the last one grows longer and lands hardest.' },
        { q: '“Spend time to save money, not money to save time.”', o: ['chiasmus', 'antithesis', 'tricolon', 'hypophora'], why: 'The same words come back in reverse order: *time… money / money… time*.' },
        { q: '“The question is not whether we can afford to act, but whether we can afford not to.”', o: ['antithesis', 'chiasmus', 'epistrophe', 'extended metaphor'], why: 'Two opposed ideas in a balanced structure: *to act / not to*.' },
        { q: '“Is it fair that a nurse cannot afford to live near the hospital she works in?”', o: ['rhetorical question', 'hypophora', 'anaphora', 'tricolon'], why: 'A question asked for effect, with no answer expected; hypophora would answer it straight away.' },
      ] },
      { t: 'tip', art: 'owl', md: 'When you write or talk about a speech, never stop at the name. *The speaker uses anaphora* earns little; *the repeated “They said” builds a sense of being talked down to, which the longer last sentence turns into anger* shows that you understand what the device **does**.' },
    ] },
    { title: 'Make it memorable', blocks: [
      { t: 'ex', kind: 'transform', h: 'Rewrite each sentence using the device in brackets. Start with the words given.', items: [
        { q: 'We need courage, not caution. (antithesis)', cue: 'We do not need', a: ['We do not need caution; we need courage.', 'We do not need caution, we need courage.', 'We do not need caution. We need courage.', 'We do not need more caution; we need courage.'], why: 'The balanced structure puts the rejected idea first and the chosen one last, where it lands.' },
        { q: 'They closed the library, the pool and the youth club. (anaphora)', cue: 'They closed the library. They closed', a: ['They closed the library. They closed the pool. They closed the youth club.'], why: 'Repeating *They closed* gives each loss its own weight.' },
        { q: 'This matters because the next storm will not wait for a committee. (hypophora)', cue: 'Why does this matter?', a: ['Why does this matter? Because the next storm will not wait for a committee.'], why: 'The speaker asks the listener’s question and answers it at once.' },
        { q: 'When the bank left, the village suffered, and it suffered again when the bus stopped running. (epistrophe)', cue: 'When the bank left, the village suffered.', a: ['When the bank left, the village suffered. When the bus stopped running, the village suffered.'], why: 'The same words close each sentence, so *the village suffered* keeps ringing.' },
        { q: 'We should eat in order to live; we should not live only in order to eat. (chiasmus)', cue: 'Eat to live;', a: ['Eat to live; do not live to eat.', 'Eat to live; don’t live to eat.', 'Eat to live, not live to eat.', 'Eat to live; not live to eat.'], why: 'The reversal *eat… live / live… eat* makes the idea short and easy to remember.' },
      ] },
    ] },
    { title: 'Exam corner: Speaking Part 3', blocks: [
      { t: 'text', md: 'In the format of the C2 Proficiency exam (Speaking Part 3): each candidate receives a card with a question and some ideas and speaks **alone for about two minutes**. You may use the ideas or your own. When you finish, the examiner asks your partner a short question about what you said, and then asks you both a further question. After both long turns, the examiner leads a discussion of the wider topic.\n\n**Card one.** *Is it more important for a leader to be persuasive or to be right?* Ideas: public trust; decisions under pressure; history.\n\n**Card two.** *Is it ever right to appeal to people’s feelings rather than their reason?* Ideas: advertising; charities; elections.\n\n**Discussion.** Should persuasive speaking be taught at school? Have social media changed the way people try to persuade us? Can a speech change what people actually do, or only what they say they think?' },
      { t: 'tip', art: 'owl', md: 'Plan in one minute: your **position**, **two developed points** with an example each, and a **conclusion** that returns to the question. Place one device where it matters most, often in the first or the last sentence: *Being right matters. Being believed matters more, and that is the uncomfortable truth.*' },
    ] },
  ],
  activities: {
    one: { title: 'Two long turns', md: 'The student gives a two-minute long turn on card one; you time it and note the devices used. Ask the follow-up question (*Do you think that is true of business leaders too?*). Give one piece of feedback, then the student does card two, aiming to use the device that was missing the first time. Finish with two minutes of the discussion questions as an equal partner.' },
    small: { title: 'Long turns in exam pairs', md: 'In pairs, students take card one and card two in turn. While one speaks for two minutes, the partner listens and notes one device that worked; then the partner answers a short question you ask about what was said. After both turns, run the discussion with the pair. With three or more students, the third student acts as the examiner with a timer and gives the feedback; rotate so everyone gives a long turn.' },
  },
  homework: { book: 'u7:p2 u7:p3', md: 'Finish lesson 2 of unit 7 if needed, then do lesson 3 (The same story, told twice). Record yourself giving a two-minute long turn on the card you did not use in class, listen back, and write down the one device that worked best and one sentence you would change.' },
};
