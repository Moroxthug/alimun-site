// English B1, class 30 (docs/LESSONS_PLAN.md, L6). Conversation class on units 1 to 6. Draft for the owner's review.
export const LESSON = {
  id: 'c30',
  focus: 'A conversation class: students talk for most of the hour about work, travel and the news, using the language of units 1 to 6 freely. Fluency comes first: keep students talking, give them time to finish, and save corrections for the slot at the end. By the end every student has told a longer story about their work or a journey and given an opinion about a piece of news, with reasons.',
  tips: [
    'Do not correct while students speak. Write down mistakes in two columns, *grammar* and *words*, and choose the five most useful for the correction slot.',
    'B1 speakers can say more than they think. When an answer is short, ask *Why?*, *What happened next?* or *Can you give me an example?*',
    'Quieter students often talk more in pairs than in front of the group. Use pairs or breakout rooms for most of the speaking and keep group feedback short.',
    'Useful phrases for giving opinions are on board page 2. Point to them when a student gets stuck, rather than giving the words yourself.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Show board page 1. Each student answers one question quickly. No corrections.' },
    { min: 10, title: 'Work and study', md: 'In pairs, students talk about the questions on board page 1 about work or study. Each student tells their partner how they chose their job or studies.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below: the main speaking task.' },
    { min: 10, title: 'News and opinions', md: 'Show board page 2. Students read the three headlines and say what they think, with the opinion phrases.' },
    { min: 5, title: 'Exam corner', md: 'Show board page 3: B1 Preliminary Speaking part 4 questions. Two students answer and discuss; the others listen for reasons.' },
    { min: 15, title: 'Correction slot', md: 'Show board page 4 and your notes. Go through the most useful mistakes you heard; students correct them together, then say the correct sentence aloud.' },
  ],
  board: [
    { title: 'Work, study and travel', blocks: [
      { t: 'text', md: 'Talk about these questions. Give reasons and examples.\n\n*How did you choose your job or your studies? Did anyone help you decide?*\n\n*What did you use to do that you don’t do any more?*\n\n*What is the best journey you have ever been on? Did anything go wrong?*\n\n*What are the rules at your work or school? Which one would you change?*' },
      { t: 'tip', md: 'Make your answers longer with a reason (**because**, **so**) and an example (**For example, last year…**).' },
    ] },
    { title: 'In the news', blocks: [
      { t: 'text', md: '**City bans cars from the centre on Sundays**\n\n**Company lets staff work from home four days a week**\n\n**New study says teenagers sleep less than ten years ago**' },
      { t: 'table', caption: 'Giving your opinion', explain: ['head', 'col1'], head: ['Say', 'When'], rows: [
        ['I think it’s a great idea because…', 'you agree'],
        ['I’m not sure about that. In my opinion…', 'you partly disagree'],
        ['I don’t agree, because…', 'you disagree'],
        ['That’s true, but…', 'you accept a point and add another'],
        ['What do you think?', 'you invite someone else'],
      ] },
    ] },
    { title: 'Exam corner: Speaking part 4', blocks: [
      { t: 'text', md: 'In the format of B1 Preliminary Speaking part 4: the examiner asks both candidates general questions about a topic, and they discuss together.\n\n*Do you prefer to read the news or watch it? Why?*\n\n*Is it important to know what is happening in other countries?*\n\n*Do you think people believe everything they read online?*' },
      { t: 'tip', md: 'In Speaking part 4 you get marks for talking **with** your partner. Answer, give a reason, then ask: *What about you?* or *Do you agree?*' },
      { t: 'ex', kind: 'choice', h: 'Which answer is best in Speaking part 4?', items: [
        { q: '“Do you prefer to read the news or watch it?”', o: ['I prefer reading it, because I can choose what to read first. What about you?', 'Reading.', 'Yes, I do.'], why: 'An answer, a reason and a question to the partner.' },
        { q: '“Is it important to know about other countries?”', o: ['I think so, because what happens there can change our lives too, for example prices.', 'Yes.', 'Other countries are big.'], why: 'An opinion with a reason and an example.' },
      ] },
    ] },
    { title: 'Correction slot', blocks: [
      { t: 'text', md: 'Your teacher writes here the most useful mistakes from today. Correct them together.' },
      { t: 'ex', kind: 'fix', h: 'Typical mistakes from units 1 to 6. Find and fix them.', items: [
        { s: 'I [have worked] there in 2019.', a: ['worked'], why: 'A finished time (*in 2019*): past simple.' },
        { s: 'I am used to [get] up early.', a: ['getting'], why: '*be used to* + -ing.' },
        { s: 'You [mustn’t] pay, it’s free.', a: ['don’t have to'], why: 'No obligation: *don’t have to*. *Mustn’t* means it is not allowed.' },
        { s: 'He [said me] the news.', a: ['told me'], why: '*tell* + person.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'The long story', md: 'The student tells you about a journey that went wrong or a big change at work, for at least three minutes. You only ask follow-up questions (*What did you do then? How did you feel?*). Then swap: you tell a short story and the student asks the questions. Finish by giving the student three corrected sentences from their story.' },
    small: { title: 'Interview', md: 'In pairs, students interview each other for a magazine article called *A day in my working life*: six questions each, with follow-ups. Then each student tells the group the two most interesting things they learned about their partner.' },
    group: { title: 'News discussion', md: 'In breakout rooms of three or four, each room takes one headline from board page 2 and discusses it for ten minutes: one student leads, one notes the best arguments for, one the best arguments against. Bring everyone back: each room gives its two best arguments in one minute.' },
  },
  homework: { book: 'u1 u2 u3 u4 u5 u6', md: 'Choose one question from board page 1 and record yourself answering it for about one minute (on your phone). Listen once and write down two sentences you would now say better. Bring them to the next class.' },
};
