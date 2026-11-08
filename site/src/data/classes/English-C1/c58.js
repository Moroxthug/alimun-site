// English C1, class 58 (docs/LESSONS_PLAN.md, L6). Conversation class on units 1 to 12. Draft for the owner's review.
export const LESSON = {
  id: 'c58',
  focus: 'A conversation class on identity, work, science and the media, using the language of units 1 to 12. Fluency comes first: students talk for most of the hour, develop their answers with reasons and examples, react to each other and keep a discussion going. At C1 the aim is also precision: hedging, concession and the exact word, not only speaking without stopping. Accuracy is handled in one short correction slot at the end, not during the speaking.',
  tips: [
    'Do not correct while students speak. Keep a notebook with three columns: good language to praise, mistakes to correct, and moments where a more precise word was missing.',
    'At C1 a good answer does more than give an opinion: it qualifies it (*to some extent*, *arguably*), concedes a point (*Admittedly…*, *Be that as it may…*) and links to what someone else said. When a student gives a flat answer, ask *How far would you go with that?* or *What would someone who disagrees say?*',
    'Recycle the units on purpose: the Part 4 questions invite hedging (unit 4), passive reporting (unit 5), mixed conditionals (unit 6), inversion (unit 9) and reporting verbs (unit 11). Write two of these on the side of the board as a target for the class.',
    'Quieter students often speak more in pairs than in front of the group. Use pair work first, then ask pairs to share the most interesting point they heard.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Show board page 1. Each student chooses one question and answers it in about forty-five seconds.' },
    { min: 10, title: 'Phrases for a discussion', md: 'Show board page 2. Read the phrases together, then students match each one to its use. Ask them to use at least three today.' },
    { min: 20, title: 'Discussion', md: 'Use the activity for your class size below. Listen and take notes; do not correct.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Speaking Part 4 questions. Students answer in pairs for two minutes each, then one pair answers in front of the class while the others listen for qualifying and linking.' },
    { min: 10, title: 'Correction slot', md: 'Write five sentences from your notes on page 4: two good ones to praise and three with mistakes or a missing precise word. Students improve them together.' },
    { min: 5, title: 'Close', md: 'Each student reports one idea from a classmate with a reporting verb (*Lena conceded that…*, *Omar dismissed the idea as…*). Set the homework.' },
  ],
  board: [
    { title: 'Warm-up questions', blocks: [
      { t: 'text', md: 'Choose one question and answer it in about forty-five seconds.\n\nHow far has the place you grew up in shaped who you are today?\n\nIf you had chosen a completely different career, what would you be doing now?\n\nWhich scientific advance of the last twenty years has changed your daily life the most?\n\nWhen did you last change your mind because of something you read or heard in the news?' },
    ] },
    { title: 'Phrases for a discussion', blocks: [
      { t: 'ex', kind: 'match', h: 'Match each phrase to what it does.', pairs: [
        ['If I could just come in here…', 'joining in politely'],
        ['Be that as it may, …', 'accepting a fact but keeping your view'],
        ['To play devil’s advocate for a moment…', 'arguing a view you may not hold'],
        ['Building on what Sofia said…', 'linking to someone else'],
        ['I’d go along with that, up to a point.', 'agreeing only partly'],
        ['That’s not quite what I was getting at.', 'correcting a misunderstanding'],
      ] },
    ] },
    { title: 'Exam corner: Speaking Part 4', blocks: [
      { t: 'text', md: 'In the format of C1 Advanced Speaking Part 4: the examiner asks questions that develop the topic of Part 3. Give a developed answer with a reason and an example, qualify your opinion where it needs it, and respond to what your partner says.\n\nTo what extent do the jobs people do define who they are?\n\nSome people say scientists should decide what is ethical in their own field. How far do you agree?\n\nIs it the responsibility of the media or of the public to stop misinformation spreading?\n\nWould society be better off if fewer people worked full time? Why, or why not?' },
      { t: 'tip', art: 'owl', md: 'In Part 4 you may answer the examiner and then turn to your partner: *Would you go along with that, Marta?* Interaction is part of the assessment, so a short answer followed by silence wastes your turn.' },
      { t: 'ex', kind: 'choice', h: 'Which answer would show more of the range expected at C1?', items: [
        { q: '“To what extent do the jobs people do define who they are?”', o: ['To some extent, I think they do, if only because we spend most of our waking hours at work. That said, my grandfather was a bus driver for forty years, and what defined him was music. What would you say?', 'I think jobs are very important for people. Yes.', 'Jobs define people. Doctors are doctors and teachers are teachers.'], why: 'A qualified opinion, a reason, a concession with an example and a question to the partner.' },
      ] },
    ] },
    { title: 'Correction slot', blocks: [
      { t: 'text', md: 'Your teacher writes sentences from today’s discussion here. Which ones are correct? Correct the others, and find a more precise word where one would help.' },
    ] },
  ],
  activities: {
    one: { title: 'A real conversation', md: 'Have a natural conversation of about twenty minutes on the four themes, identity, work, science and the media, starting from the student’s own life and work. Ask follow-up questions, disagree sometimes so the student has to defend and qualify an opinion, and let the student ask you questions too. Take notes for the correction slot.' },
    small: { title: 'Agree, qualify, concede', md: 'Write four statements in the chat (*Your accent is part of your identity and you should never lose it*, *Within twenty years most office jobs will be done from home*, *Some scientific research should simply not be allowed*, *Social media has made people better informed, not worse*). For each one, students take turns to give an opinion with a reason and an example; the next student must react with a discussion phrase and either qualify or concede a point before giving their own view.' },
    group: { title: 'Breakout panels', md: 'Put students in breakout rooms of three or four, each with one statement from the small-group list. They discuss for eight minutes; one student keeps notes of the strongest arguments on both sides. Bring everyone back: each room’s note-taker reports the discussion in one minute with reporting verbs (*Ana maintained that…*, *Leo conceded that…*). Others may ask one question.' },
  },
  homework: { book: 'u1 u2 u3 u4 u5 u6 u7 u8 u9 u10 u11 u12', md: 'Choose one statement from today’s class and record yourself for two minutes, or write about 220 words, giving a qualified opinion with two reasons, an example and one concession. Use at least one phrase from board page 2. Look again at any unit from 1 to 12 where you felt unsure today.' },
};
