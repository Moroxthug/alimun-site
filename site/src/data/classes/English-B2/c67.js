// English B2, class 67 (docs/LESSONS_PLAN.md). Builds on book lesson u14:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c67',
  focus: 'By the end of the class every student can contrast ideas and make concessions with B2 linkers, each in its correct grammar: *whereas* and *while* between two clauses, *nevertheless* and *even so* starting a new sentence, and *despite the fact that* + clause (but *despite* + noun or *-ing*). Students should build a short balanced argument aloud and in writing, the skill they need for the essay in the next lessons.',
  tips: [
    'Grammar is the problem, not meaning. Draw three columns on the board: linkers that join clauses (*whereas, while, although*), linkers that start a new sentence (*However, Nevertheless, Even so*), and linkers followed by a noun (*despite, in spite of*).',
    'The classic mistakes: *despite of*, *despite it was raining*, and *although… but…*. Cross them out on the board.',
    '*Even so* and *nevertheless* need a full stop or semicolon before them. Students often use them with a comma like *but*.',
    'Use real opinions: students argue better and use more linkers when the topic matters to them (working from home, phones at school, city cars).',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Working from home: good or bad?* Each student gives one advantage and one disadvantage in one sentence.' },
    { min: 12, title: 'Where does each linker go?', md: 'Show board page 1. Go through the three groups. Students rewrite one sentence three ways.' },
    { min: 10, title: 'Practice', md: 'Show board page 2. Students choose the linker and correct the mistakes.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: B2 First Reading and Use of English Part 2, open cloze. Students write one word in each gap alone, then check.' },
    { min: 5, title: 'Close', md: 'Each student gives one balanced sentence on any topic with *despite the fact that* or *even so*. Set the homework.' },
  ],
  board: [
    { title: 'Where does each linker go?', blocks: [
      { t: 'table', caption: 'Contrast and concession', explain: ['head', 'col0'], head: ['Grammar', 'Linkers', 'Example'], rows: [
        ['joins two clauses', 'whereas, while, although, even though', 'Cities are noisy, whereas villages are calm.'],
        ['starts a new sentence', 'However, Nevertheless, Even so', 'The rent is high. Even so, I love living here.'],
        ['+ noun or -ing', 'despite, in spite of', 'Despite the cost, we went.'],
        ['+ clause', 'despite the fact that', 'Despite the fact that it was late, the shops were open.'],
      ] },
    ] },
    { title: 'Practice', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right linker.', items: [
        { q: 'Some people love remote work, ___ others feel lonely at home.', o: ['whereas', 'despite', 'nevertheless'], why: 'Joining two contrasting clauses: *whereas*.' },
        { q: 'The law is unpopular. ___, it has reduced traffic.', o: ['Nevertheless', 'Although', 'Despite'], why: 'Starts a new sentence: *Nevertheless*.' },
        { q: '___ the rain, thousands joined the march.', o: ['Despite', 'Although', 'Whereas'], why: '+ noun: *Despite*.' },
        { q: '___ the fact that it was free, few people came.', o: ['Despite', 'Even so', 'However'], why: '*Despite the fact that* + clause.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: '[Despite of] the risks, they went ahead.', a: ['Despite', 'In spite of'], why: '*Despite* has no *of*.' },
        { s: 'Although the job is well paid, [but it] is stressful.', a: ['it'], why: 'Use only one linker: no *but* after *although*.' },
        { s: 'Despite [it was expensive], we bought it.', a: ['the fact that it was expensive', 'the price', 'the cost'], why: '*Despite* + noun, or *despite the fact that* + clause.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 2', blocks: [
      { t: 'text', md: 'In the format of B2 First Reading and Use of English Part 2: write **one word** in each gap.' },
      { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
        { q: 'In ___ of the protests, the government did not change the law.', a: ['spite'], why: '*In spite of* + noun.' },
        { q: 'Some cities have banned cars, ___ others have made them cheaper to use.', a: ['whereas', 'while'], why: 'Contrasting two clauses.' },
        { q: 'The plan was expensive. Even ___, most people supported it.', a: ['so'], why: '*Even so* starts the sentence.' },
        { q: 'Despite the ___ that it rained, the festival was a success.', a: ['fact'], why: '*Despite the fact that* + clause.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Part 2 often tests the small words inside linkers: *in spite **of***, *even **so***, *despite the **fact** that*. Learn the linkers as complete phrases.' },
    ] },
  ],
  activities: {
    one: { title: 'Both sides', md: 'Give the student three statements (*Cities should ban cars. University should be free. Social media does more harm than good.*). For each one they argue both sides in four sentences using four different linkers. Correct the grammar of each linker.' },
    small: { title: 'Linker relay', md: 'Choose a topic. The first student gives an opinion; the next must reply starting with a different linker from the table; continue round the group without repeating a linker. Keep a list on the board and check grammar at the end.' },
    group: { title: 'Balanced paragraph', md: 'In breakout rooms of three, each room writes a balanced paragraph of five sentences on a topic you post (*working from home*), using at least four linkers from different groups. Back together, rooms read their paragraphs; the class checks the grammar of every linker.' },
  },
  homework: { book: 'u14:p2', md: 'Finish book lesson 2 of unit 14. Then write a short balanced paragraph (about 80 words) on a topic you care about, using *whereas*, *nevertheless*, *despite* and *despite the fact that*.' },
};
