// English C1, class 83 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u18:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c83',
  focus: 'By the end every student works out phrasal verbs from the core meaning of their particles: *up* for more or complete, *out* for removal, ending or spreading, *off* for stopping or fading, *through* for to the end or past the surface, *down* for reducing or stopping, *on* for continuing or catching on. The skills goal: understand new phrasal verbs in context without stopping, and choose between a phrasal verb and its formal one-word equivalent.',
  tips: [
    'Start every new verb with the particle: *What does* out *usually mean?* Students who reason from the particle guess well, and remember better than students who memorise a list.',
    'The same verb changes with each particle: *cut down on*, *cut out*, *be cut off*; *wear off*, *wear out*. Put each family on the board side by side.',
    'Separable verbs need the pronoun in the middle: *switch it off*, not *switch off it*. Correct it every time it comes up.',
    'Show the register difference: *phase out* in speech and articles, *discontinue gradually* in a formal report. At C1 students should be able to move between the two.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Is there a digital habit you have cut down on, or one you would like to cut out completely?* Each student answers in two sentences.' },
    { min: 12, title: 'What the particle means', md: 'Show board page 1. Go through the table, then students choose the particle and say which core meaning it carries.' },
    { min: 10, title: 'New verbs, same logic', md: 'Show board page 2. Students match verbs they may not know with their meanings, using only the particle, then check with the examples.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Board page 3: C1 Advanced Reading and Use of English Part 1. Students choose the words alone with "Everyone solves this", then compare and say which particle or verb made the difference.' },
    { min: 5, title: 'Close', md: 'Each student uses one phrasal verb from today about their own week. Set the homework.' },
  ],
  board: [
    { title: 'What the particle means', blocks: [
      { t: 'table', caption: 'Particles and their meanings', explain: ['head', 'col1'], head: ['Particle', 'Core meaning', 'Examples'], rows: [
        ['up', 'more, or complete', 'speed up, scale up, use up, free up'],
        ['out', 'remove, end, or spread to many', 'phase out, run out, opt out, roll out'],
        ['off', 'stop, separate, or fade', 'switch off, cut off, wear off, log off'],
        ['through', 'to the end, or past the surface', 'get through, follow through, see through'],
        ['down', 'reduce, or stop working', 'slow down, cut down on, break down, shut down'],
        ['on', 'continue, or become accepted', 'carry on, keep on, catch on'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the particle that gives the meaning.', items: [
        { q: 'The government plans to phase ___ coal power stations by 2030.', o: ['out', 'off', 'up'], why: 'Removing in stages: *phase out*.' },
        { q: 'The effect of the painkiller began to wear ___ after an hour.', o: ['off', 'out', 'down'], why: 'Fading: *wear off*.' },
        { q: 'Moving my files to the cloud has freed ___ a lot of space.', o: ['up', 'out', 'off'], why: 'Making more available: *free up*.' },
        { q: 'Video calls caught ___ very quickly during the pandemic.', o: ['on', 'up', 'out'], why: 'Becoming popular: *catch on*.' },
        { q: 'The company is rolling ___ the new app across Europe next month.', o: ['out', 'up', 'through'], why: 'Spreading to many people: *roll out*.' },
        { q: 'Most readers saw ___ the advert’s promises at once.', o: ['through', 'off', 'out'], why: 'Seeing past the surface: *see through*.' },
      ] },
    ] },
    { title: 'New verbs, same logic', blocks: [
      { t: 'examples', items: [
        { s: 'The applause slowly **died down**, and the speaker began.', n: '*Down*: reducing until it stops.' },
        { s: 'The music was so loud it **drowned out** the announcements.', n: '*Out*: removed from hearing.' },
        { s: 'Interest in the game **tailed off** after the first month.', n: '*Off*: fading gradually.' },
        { s: 'Before you sign, **think** the contract **through**.', n: '*Through*: to the end, considering everything.' },
      ] },
      { t: 'ex', kind: 'match', h: 'Match each phrasal verb with its meaning. Use the particle to help you.', pairs: [
        ['scale back', 'reduce the size of a plan'],
        ['filter out', 'remove what you do not want'],
        ['tail off', 'become gradually less'],
        ['think through', 'consider every part of something'],
        ['die down', 'become quieter or weaker until it stops'],
        ['opt out', 'choose not to take part'],
      ] },
      { t: 'tip', art: 'owl', md: 'Meet an unknown phrasal verb? Look at the particle first, then at the context. *The noise gradually died down* already tells you the noise got less: you do not need a dictionary to keep reading.' },
    ] },
    { title: 'Exam corner: Use of English Part 1', blocks: [
      { t: 'text', md: 'The sentences make one short text about a company that changed its working habits.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 1): choose the word that best fits each gap.', items: [
        { q: 'Two years ago, the company decided to phase ___ internal email in favour of a chat app.', o: ['out', 'off', 'down', 'away'], why: 'Removing in stages: *phase out*.' },
        { q: 'Managers hoped the change would speed ___ decisions.', o: ['up', 'on', 'through', 'over'], why: 'More speed: *speed up*.' },
        { q: 'At first the novelty kept everyone enthusiastic, but it soon wore ___.', o: ['off', 'out', 'down', 'away'], why: 'Fading: *wear off*.' },
        { q: 'Staff complained that they could not ___ off in the evenings.', o: ['switch', 'turn', 'put', 'take'], why: '*Switch off*: stop thinking about work.' },
        { q: 'So the company introduced a rule allowing staff to ___ out of messages after six.', o: ['opt', 'drop', 'pull', 'leave'], why: '*Opt out of*: choose not to take part.' },
        { q: 'The idea has ___ on, and other firms in the city now do the same.', o: ['caught', 'taken', 'held', 'got'], why: '*Catch on*: become popular.' },
      ] },
      { t: 'tip', md: 'In Part 1 the gap is sometimes the verb and sometimes the particle. Read the whole phrase: *wore ___* followed by nothing points to a fading meaning, *___ out of* points to a choice.' },
    ] },
  ],
  activities: {
    one: { title: 'Particle detective', md: 'Read the student a short paragraph you make up with four phrasal verbs they probably do not know (*the plan fizzled out*, *prices bottomed out*, *he talked down the risk*). The student guesses each meaning from the particle and the context, then checks. Finish with three formal one-word equivalents (*reduce*, *launch*, *accelerate*).' },
    small: { title: 'Formal or spoken?', md: 'Post six sentences in the chat, half with a phrasal verb and half with its formal equivalent (*The bank is discontinuing paper statements*). Each student rewrites one in the other register. The group decides where each version would appear: a chat, an article or a report.' },
    group: { title: 'Particle families', md: 'Breakout rooms of three each get one particle (*up*, *out*, *off*, *down*). Each room finds as many phrasal verbs with it as they can in four minutes and writes one sentence for the two most useful. Rooms share their verbs, and the class checks that each one fits the core meaning.' },
  },
  homework: { book: 'u18:p2', md: 'Finish lesson 2 of unit 18 if needed, then do lesson 3 (Cutting-edge or obsolete). Find five phrasal verbs in an English article or video, write each one down with its sentence, and explain its meaning from the particle.' },
};
