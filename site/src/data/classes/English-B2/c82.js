// English B2, class 82 (docs/LESSONS_PLAN.md). Conversation: a discussion class on the whole level (units 1 to 16). Draft for the owner's review.
export const LESSON = {
  id: 'c82',
  focus: 'By the end of the class every student has taken part in a long, structured discussion on topics from the whole B2 course (identity, work, technology, the media, cities, health, learning, money, art, society, risk), defended an opinion with reasons and examples, reacted to others, and used a wide range of B2 language without help. Fluency and interaction come first; a short correction slot closes the class.',
  tips: [
    'Act as chair, not as a participant. Your job is to bring quiet students in and keep the discussion moving.',
    'Ask for the B2 range: hedging (*arguably*, *it seems that*), contrast (*whereas*, *nevertheless*), emphasis (*what worries me is…*).',
    'Note good sentences as well as mistakes, and read some good ones aloud at the end: it builds confidence before the level test.',
    'If a topic is sensitive for someone, move to the next one without comment.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Show board page 1. Each student chooses the unit they enjoyed most and says why in one minute.' },
    { min: 15, title: 'Round one', md: 'Show board page 2. Discuss two statements. Each student must agree or disagree and give an example.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: a Speaking Part 4 round on the whole level.' },
    { min: 10, title: 'Correction slot', md: 'Show board page 4 with typical mistakes, then read out three excellent sentences you heard.' },
    { min: 5, title: 'Close', md: 'Set the homework.' },
  ],
  board: [
    { title: 'Looking back', blocks: [
      { t: 'text', md: 'Our 16 units: *Who we are, Telling stories, Work and ambition, Science and technology, If only, Media and opinion, Mysteries and deductions, A changing world, Health and lifestyle, Learning for life, Travel and the planet, Money and choices, Arts and creativity, Society and rights, Risk and challenge, Ready for B2 First.* Which one taught you the most?' },
    ] },
    { title: 'Statements to discuss', blocks: [
      { t: 'text', md: '*Technology has made our lives easier but not happier.* *Cities of the future will be better places to live than villages.* *Everyone should learn a skill that has nothing to do with their job.* *Failure is the best teacher.*' },
      { t: 'examples', items: [
        { s: '**Arguably**, technology has made us more connected but lonelier.', n: 'Hedging a strong opinion.' },
        { s: '**What I find worrying is** how much time we spend on screens.', n: 'Emphasis with a cleft sentence.' },
        { s: 'I take your point. **Nevertheless**, I think cities offer more opportunities.', n: 'Polite disagreement.' },
      ] },
    ] },
    { title: 'Exam corner: Speaking Part 4', blocks: [
      { t: 'text', md: '*Do you think people learn more from success or from failure? Should everyone travel before they start working? How has the way people get news changed in your lifetime? Is it ever right to break a rule?*' },
      { t: 'tip', art: 'owl', md: 'In B2 First Speaking Part 4, if you do not know much about a topic, say so and still give an opinion: *I’ve never really thought about it, but I suppose…* Silence loses marks; a reasoned guess does not.' },
    ] },
    { title: 'Correction slot', blocks: [
      { t: 'ex', kind: 'fix', h: 'Fix the mistakes.', items: [
        { s: 'In my opinion, I think [that people should] travel more.', a: ['people should'], why: 'Do not use *In my opinion* and *I think* together; keep the clause.' },
        { s: 'It depends [of] the person.', a: ['on'], why: '*depend on*.' },
        { s: '[I am agree] with you.', a: ['I agree'], why: '*agree* is a verb; no *am*.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Devil’s advocate', md: 'For each statement, you take the opposite view to the student, whatever they say. The student must defend their opinion for two minutes with reasons, examples and polite disagreement. Swap roles for the last statement.' },
    small: { title: 'Chaired discussion', md: 'Students take turns as chair for one statement each: the chair introduces it, asks everyone for a view, keeps time and summarises the discussion in three sentences.' },
    group: { title: 'Rotating rooms', md: 'In breakout rooms of three, each room discusses one statement for six minutes, then rotates to the next statement. Each room keeps a list of the best arguments in the chat and shares one with the class.' },
  },
  homework: { book: 'u16:p4', md: 'Write a 180-word opinion essay on one of today’s statements, in the format of B2 First Writing Part 1, and check it against the four marking areas.' },
};
