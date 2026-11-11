// English B2, class 71 (docs/LESSONS_PLAN.md). Conversation: money, art and society (units 11 to 14). Draft for the owner's review.
export const LESSON = {
  id: 'c71',
  focus: 'By the end of the class every student has spoken at length about money, the arts and society, using the language of units 11 to 14 naturally: *should have* for regret, detailed comparisons (*far*, *nowhere near*), cleft sentences, emphatic *do*, *whereas* and *nevertheless*, and verb patterns like *encourage someone to*. Fluency comes first; accuracy is the last slot.',
  tips: [
    'Talk less than the students. Follow up with *Why do you think that?* and *Can you give an example?* instead of giving your own view.',
    'Note mistakes quietly while students speak and correct them only in the correction slot, so the conversation keeps its pace.',
    'Money and rights can be sensitive. Let students speak about people in general or about their country rather than their own situation.',
    'At B2 an answer has a view, a reason and an example. Ask for the missing part when an answer is too short.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Show board page 1. Each student finishes one cleft sentence about themselves (*What I can never resist buying is…*).' },
    { min: 12, title: 'Money and choices', md: 'Show board page 2. In pairs or with you, students talk about a purchase they regret, with *should have* or *shouldn’t have*, and compare two ways of spending money with *far* or *nowhere near*.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Art and society', md: 'Show board page 3. Students discuss whether governments should pay for the arts, using *whereas*, *nevertheless* and one verb pattern from unit 14.' },
    { min: 8, title: 'Exam corner', md: 'Show board page 4: B2 First Speaking Part 4. Ask each student one question; others add a comment.' },
    { min: 10, title: 'Correction slot', md: 'Show board page 5 and add the mistakes you collected. Students fix them together.' },
  ],
  board: [
    { title: 'Warm-up: what I love is…', blocks: [
      { t: 'text', md: 'A **cleft sentence** puts the important part at the end: *What I love about weekends is the silence.* *It was my sister who taught me to save.*' },
      { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
        { q: '___ I can never resist is a good book sale.', o: ['What', 'That', 'Which'], why: 'Cleft sentences start with *What*.' },
        { q: 'It was my grandmother ___ taught me to paint.', o: ['who', 'what', 'which'], why: '*It was* + person + *who*.' },
        { q: 'What annoys me ___ people who talk during films.', o: ['is', 'are', 'be'], why: 'The *what* clause takes a singular verb.' },
      ] },
    ] },
    { title: 'Money and choices', blocks: [
      { t: 'examples', items: [
        { s: 'I **should have** saved more before the holiday.', n: 'Regret about the past.' },
        { s: 'Renting is **nowhere near as** expensive here as in London.', n: 'A big difference, in a negative way.' },
        { s: 'Online shopping is **far** more convenient, **whereas** markets are more fun.', n: 'Contrast inside one sentence.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'I should have [buy] cheaper shoes, but I didn’t.', a: ['bought'], why: '*should have* + past participle.' },
        { s: 'It’s [much more] cheap to cook at home.', a: ['much cheaper', 'far cheaper'], why: 'Short adjectives take *-er*, not *more*.' },
      ] },
    ] },
    { title: 'Art and society', blocks: [
      { t: 'ex', kind: 'choice', h: 'Choose the best word.', items: [
        { q: 'Museums are free in some countries, ___ in others they are expensive.', o: ['whereas', 'nevertheless', 'despite'], why: '*whereas* joins two contrasting facts in one sentence.' },
        { q: 'The festival lost money. ___, it was a great success.', o: ['Nevertheless', 'Whereas', 'Although'], why: '*Nevertheless* starts a new sentence.' },
        { q: 'Free classes encourage young people ___ an instrument.', o: ['to learn', 'learning', 'learn'], why: '*encourage someone to do*.' },
      ] },
    ] },
    { title: 'Exam corner: Speaking Part 4', blocks: [
      { t: 'text', md: '**Answer the examiner, then add to your partner’s answer:** *Some people say that art is a luxury. What do you think?* *Should rich people give more money to good causes?* *Is it better to spend money on experiences or on things?*' },
      { t: 'tip', art: 'owl', md: 'In B2 First Speaking Part 4 the examiner asks each of you questions related to Part 3. Give a full answer with a reason and an example, and react to your partner: *I see what you mean, but…*' },
    ] },
    { title: 'Correction slot', blocks: [
      { t: 'ex', kind: 'fix', h: 'Fix the mistakes.', items: [
        { s: 'They prevented me [to enter] the gallery.', a: ['from entering'], why: '*prevent someone from doing*.' },
        { s: 'I [do] really enjoyed the concert.', a: ['did'], why: 'Emphatic past: *did* + base form.' },
        { s: 'It was the price [what] surprised me.', a: ['that', 'which'], why: '*It was… that*.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'The budget meeting', md: 'You and the student are on a town council with 100,000 euros. Options: a new library, free concerts, help for small shops. The student argues for one, you argue for another; agree on a split, using *whereas*, *nevertheless* and *should*. Then swap roles.' },
    small: { title: 'Regrets and lessons', md: 'Each student tells a story about a money decision they (or someone they know) regret, using *should have* and *if I had*. The others ask two questions each and give advice. Finish with one lesson everyone agrees on.' },
    group: { title: 'Panel debate', md: 'In breakout rooms of three, each room prepares one side of a statement in the chat: *Public money should pay for the arts.* After eight minutes, two rooms meet and debate for five minutes. Bring everyone back and vote.' },
  },
  homework: { book: 'u14:p3', md: 'Look again at unit 14, lesson 3. Write 120 words: should museums be free? Use *whereas*, *nevertheless* and one cleft sentence.' },
};
