// English C1, class 97 (docs/LESSONS_PLAN.md, L6). Practice exam in the format of C1 Advanced, shortened and timed (all 20 units). Draft for the owner's review.
export const LESSON = {
  id: 'c97',
  focus: 'By the end of the class every student has done a timed, shortened practice exam in the format of C1 Advanced: Reading and Use of English (Parts 1, 2, 3, 4 and a Part 8 reading), a Listening Part 1 read aloud by the teacher, a Writing Part 1 plan and opening, and a short Speaking Part 4 round. They see their answers at the end, know their score per part, and know which part needs most work before the level test for C2.',
  tips: [
    'Keep strict time and say how many minutes are left. Time pressure is part of the practice, and it is the main difficulty of the real exam.',
    'Use “Everyone solves this” for each written page so every student works alone, and reveal nothing until the answers stage.',
    'Read the listening script at natural speed, twice, as in the real exam. Do not explain words before the second reading. Show the script only after the answers.',
    'At the end, students count their correct answers per part. A score per part tells them more than a total, and shows what to revise before the level test.',
    'Writing is only planned and started in class; the full essay is homework and is marked against the four areas. Remind students that this is practice in the format of the exam, not a prediction of their exam result.',
  ],
  plan: [
    { min: 3, title: 'Instructions', md: 'Explain the timing, that every part is done alone, and that answers come at the end.' },
    { min: 20, title: 'Reading and Use of English', md: 'Show board pages 1, 2 and 3. Students work alone, about seven minutes per page.' },
    { min: 8, title: 'Listening', md: 'Show board page 4. Give 30 seconds to read the questions, then read the script on board page 6 aloud twice. Students answer alone.' },
    { min: 10, title: 'Writing Part 1', md: 'Show board page 5. Students plan the essay and write the introduction.' },
    { min: 8, title: 'Speaking', md: 'Ask each student one Part 4 question from board page 5; about one minute each, with a short follow-up.' },
    { min: 11, title: 'Answers and scores', md: 'Reveal all the answers and show the listening script. Students count their score per part and choose the part to revise before the level test.' },
  ],
  board: [
    { title: 'Reading and Use of English: Parts 1 and 2', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 1): choose the word that best fits each gap.', items: [
        { q: 'The decision to close the library ___ a wave of protest across the town.', o: ['triggered', 'pulled', 'pushed', 'drew'], why: '*Trigger a wave of protest*: cause it suddenly.' },
        { q: 'The new manager was quick to ___ responsibility for the mistakes.', o: ['take', 'make', 'give', 'hold'], why: '*Take responsibility for*.' },
        { q: 'Young people are particularly ___ to the influence of online advertising.', o: ['susceptible', 'likely', 'open', 'tolerant'], why: '*Susceptible to*: easily affected by.' },
        { q: 'It is high ___ the council dealt with the problem.', o: ['time', 'moment', 'hour', 'point'], why: 'The fixed phrase *it is high time* + past.' },
      ] },
      { t: 'ex', kind: 'gap', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 2): write one word in each gap.', items: [
        { q: 'Not ___ did the plan save money, it also reduced waste.', a: ['only'], why: '*Not only* with inversion.' },
        { q: 'The project went ahead, ___ the objections of local residents.', a: ['notwithstanding', 'despite'], why: 'One word for concession before a noun.' },
        { q: 'She is by ___ means the only person to have complained.', a: ['no'], why: 'The fixed phrase *by no means*.' },
        { q: 'The scheme, ___ which volunteers repair old bicycles, has been a success.', a: ['under', 'through', 'in'], why: 'A preposition before *which*: *the scheme under which…*' },
      ] },
    ] },
    { title: 'Reading and Use of English: Parts 3 and 4', blocks: [
      { t: 'ex', kind: 'wordform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 3): use the word in capitals to form a word that fits the gap.', items: [
        { q: 'The government’s response to the crisis was widely seen as ___.', base: 'adequate', a: ['inadequate'], why: 'A negative meaning: *in-*.' },
        { q: 'There is growing concern about the ___ of the town centre.', base: 'commerce', a: ['commercialisation', 'commercialization'], why: 'A noun after *the*: *commercial* + *-isation*.' },
        { q: 'Her ___ to compromise impressed everyone at the meeting.', base: 'willing', a: ['willingness'], why: 'A noun after *her*.' },
      ] },
      { t: 'ex', kind: 'transform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first. Use the word given and three to six words, including the word given.', items: [
        { q: 'I regret not telling her the truth.', cue: 'WISH', a: ['I wish I had told her the truth.', 'I wish that I had told her the truth.'], why: 'Unit 6: *wish* + past perfect for a past regret.' },
        { q: 'It is said that the castle was built in a single year.', cue: 'SAID', a: ['The castle is said to have been built in a single year.'], why: 'Unit 5: passive reporting with a perfect passive infinitive.' },
        { q: 'It was unnecessary for you to buy a present, but thank you.', cue: 'NEEDN’T', a: ['You needn’t have bought a present, but thank you.'], why: 'Unit 4: *needn’t have* + past participle for something done that was not necessary.' },
      ] },
    ] },
    { title: 'Reading Part 8: four views', blocks: [
      { t: 'reading', title: 'Learning a language as an adult', md: '**A. Carla.** I started Japanese at fifty, convinced I was too old. The grammar was hard, but my patience turned out to be an advantage I had never had at school.\n\n**B. Dev.** What kept me going was a group of fellow learners. On my own I would have given up within a month.\n\n**C. Mirela.** I made far more progress once I stopped worrying about mistakes. My teacher kept saying that errors were information, not failure, and in the end I believed her.\n\n**D. Tom.** I had always assumed that living in the country would be enough. Two years in Madrid proved me wrong: without study, I spoke fluently but badly.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 8): which person says each thing?', items: [
        { q: 'Who found that a belief about how to learn was mistaken?', o: ['D', 'A', 'B', 'C'], why: 'Tom: *living in the country would be enough… proved me wrong*.' },
        { q: 'Who credits other people with their persistence?', o: ['B', 'A', 'C', 'D'], why: 'Dev: *What kept me going was a group of fellow learners.*' },
        { q: 'Who discovered that age brought an unexpected benefit?', o: ['A', 'B', 'C', 'D'], why: 'Carla: *my patience turned out to be an advantage*.' },
        { q: 'Who changed their attitude to getting things wrong?', o: ['C', 'A', 'B', 'D'], why: 'Mirela: *errors were information, not failure*.' },
      ] },
    ] },
    { title: 'Listening Part 1 (the teacher reads twice)', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Listening Part 1): you hear two colleagues talking about working from home. Choose the answer which fits best according to what you hear.', items: [
        { q: 'What does the woman imply about the new policy?', o: ['It was introduced without asking staff.', 'It will save the company money.', 'It is popular with most staff.', 'It will be reversed soon.'], why: '*Funny how nobody remembers being asked*: decided without consulting staff. Money is mentioned by the man.' },
        { q: 'How does the man feel about working in the office again?', o: ['relieved, though he would not say so publicly', 'angry about the longer journey', 'worried about his workload', 'indifferent to the change'], why: '*Don’t tell anyone, but I’ve missed it.*' },
      ] },
    ] },
    { title: 'Writing Part 1 and Speaking', blocks: [
      { t: 'text', md: '**Writing Part 1 (essay, 220 to 260 words):** *Your class has had a discussion on how people can be encouraged to resolve disagreements calmly. You have made the notes below. Write an essay discussing **two** of the methods in your notes. Explain which method you think is more effective, giving reasons in support of your answer.* **Notes:** *mediation services; teaching conflict skills at school; public campaigns.* **Speaking Part 4:** *Do you think people are less patient with each other than they used to be? Should workplaces do more to help colleagues resolve conflicts? Is it ever right to end a friendship over a disagreement?*' },
      { t: 'tip', art: 'owl', md: 'In the plan, choose your two methods and your conclusion first. Write the conclusion sentence in your notes before you start: then every paragraph can lead to it.' },
    ] },
    { title: 'Listening script (show after the answers)', blocks: [
      { t: 'dialogue', title: 'Two colleagues', lines: [
        { who: 'Woman', s: 'So, three days a week in the office from next month. The email says it was decided “after consultation”. Funny how nobody remembers being asked.' },
        { who: 'Man', s: 'Management say it’ll save money on equipment, apparently. I doubt it.' },
        { who: 'Woman', s: 'And the journey for some people is over an hour each way. You must be furious.' },
        { who: 'Man', s: 'Officially, yes, I’m outraged. Don’t tell anyone, but I’ve missed it. My kitchen table was never meant to be a desk.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Exam conditions', md: 'Follow the plan exactly, as the examiner. In the speaking part, give a full Part 4 round with all three questions, then a Part 2 long turn with three pictures of your choice. Finish with a score per part and one strategy for the weakest part.' },
    small: { title: 'Score and share', md: 'After the answers, each student shares their score per part and one tip that helped them today. The group agrees on the three most useful tips before the level test.' },
    group: { title: 'Breakout speaking', md: 'For the speaking part, put students in breakout rooms of two with the Part 4 questions; they ask each other and give one follow-up question each. Visit each room. Afterwards, rooms share one strong answer they heard.' },
  },
  homework: { book: 'u20:p3', md: 'Write the full Writing Part 1 essay (220 to 260 words) in no more than 45 minutes, check it against the four marking areas and send it to your teacher. Revise the part where you scored lowest before the level test.' },
};
