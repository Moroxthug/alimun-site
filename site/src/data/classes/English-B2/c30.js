// English B2, class 30 (docs/LESSONS_PLAN.md, L6). Conversation class on units 1 to 6. Draft for the owner's review.
export const LESSON = {
  id: 'c30',
  focus: 'A conversation class on ambition, technology and the media, using the language of units 1 to 6. Fluency comes first: students talk for most of the hour, develop their answers, react to each other and keep a discussion going. Accuracy is handled in one short correction slot at the end, not during the speaking.',
  tips: [
    'Do not correct while students speak. Keep a notebook with three columns: good language to praise, mistakes to correct, and words students were missing.',
    'Push for longer answers. At B2 a good answer has an opinion, a reason and an example. If a student gives one sentence, ask *Why?* or *Can you give an example?*',
    'Teach two or three phrases for joining a discussion before you start (*Can I just add something?*, *That’s a fair point, but…*, *Going back to what Ana said…*). Students who use them sound much more natural.',
    'Quieter students often speak more in pairs than in front of the group. Use pair work first, then ask pairs to share.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Show board page 1. Each student chooses one question and answers it in about thirty seconds.' },
    { min: 10, title: 'Phrases for a discussion', md: 'Show board page 2. Read the phrases together, then students match each phrase to its use. Ask them to use at least three today.' },
    { min: 20, title: 'Discussion', md: 'Use the activity for your class size below. Listen and take notes; do not correct.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: B2 First Speaking Part 4 questions. Students answer in pairs for two minutes each, then one pair answers in front of the class.' },
    { min: 10, title: 'Correction slot', md: 'Write five sentences from your notes on the blank page: two good ones to praise and three with mistakes. Students correct them together.' },
    { min: 5, title: 'Close', md: 'Each student says one idea from a classmate that they found interesting, using a reporting verb. Set the homework.' },
  ],
  board: [
    { title: 'Warm-up questions', blocks: [
      { t: 'text', md: 'Choose one question and answer it in about thirty seconds.\n\nWhat have you been working on recently that you are proud of?\n\nWhat will you have achieved by this time next year?\n\nWhich piece of technology could you not live without, and why?\n\nWhere do you get your news, and how much do you trust it?' },
    ] },
    { title: 'Phrases for a discussion', blocks: [
      { t: 'ex', kind: 'match', h: 'Match each phrase to what it does.', pairs: [
        ['Can I just add something?', 'joining in politely'],
        ['That’s a fair point, but…', 'disagreeing politely'],
        ['Going back to what Ana said…', 'linking to someone else'],
        ['What I mean is…', 'explaining again'],
        ['I’d go along with that.', 'agreeing'],
      ] },
    ] },
    { title: 'Exam corner: Speaking Part 4', blocks: [
      { t: 'text', md: 'In the format of B2 First Speaking Part 4: the examiner asks questions related to the Part 3 topic. Answer with an opinion, a reason and an example, and react to your partner.\n\nDo you think people today are more ambitious than in the past?\n\nSome people say technology makes us less patient. What do you think?\n\nShould young people trust the news they see on social media?\n\nIs it better to have a job you love or a job that pays well?' },
      { t: 'tip', md: 'In Part 4 you can, and should, talk to your partner as well as the examiner: *Do you agree, Marco?* Examiners give marks for how well you interact, not only for your grammar.' },
      { t: 'ex', kind: 'choice', h: 'Which answer would get more marks in Part 4?', items: [
        { q: '“Is it better to have a job you love or a job that pays well?”', o: ['I’d say a job you love, because you spend most of your life at work. My uncle took a well-paid job he hated and he was miserable. What do you think?', 'A job you love.', 'Money is important. Jobs are important too.'], why: 'An opinion, a reason, an example and a question to the partner.' },
      ] },
    ] },
    { title: 'Correction slot', blocks: [
      { t: 'text', md: 'Your teacher writes sentences from today’s discussion here. Which ones are correct? Correct the others together.' },
    ] },
  ],
  activities: {
    one: { title: 'A real conversation', md: 'Have a natural conversation of about twenty minutes on the three themes, ambition, technology and the media, starting from the student’s own life. Ask follow-up questions, disagree sometimes so the student must defend an opinion, and let the student ask you questions too. Take notes for the correction slot.' },
    small: { title: 'Agree, disagree, explain', md: 'Write four statements in the chat (*Working from home makes people less ambitious*, *Children should not have smartphones before 14*, *Newspapers will disappear in ten years*, *It is never too late to change career*). For each one, students take turns to give an opinion with a reason and an example, and the next student must react to the previous one with a discussion phrase before giving their own view.' },
    group: { title: 'Breakout debates', md: 'Put students in breakout rooms of three or four, each with one statement from the small-group list. They discuss for eight minutes; one student keeps notes of the best arguments. Bring everyone back: each room’s note-taker reports their discussion in one minute with reporting verbs (*Ana argued that…*, *Leo admitted…*). Others may ask one question.' },
  },
  homework: { book: 'u1 u2 u3 u4 u5 u6', md: 'Choose one statement from today’s class and record yourself (or write about 150 words) giving your opinion with two reasons and an example. Use at least three linking words from unit 6. Look again at any unit from 1 to 6 where you felt unsure today.' },
};
