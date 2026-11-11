// English C1, class 37 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u8:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c37',
  focus: 'By the end of the class every student can read a longer text about how places may change by 2050, follow the writer’s argument and judgement, and discuss the future of where they live with the future forms and connectors of unit 8. Word formation for C1 Advanced Part 3 and the function questions of Part 5 are practised.',
  tips: [
    'Ask students to read the book essay before class if possible. Today’s board text is new and shorter; give six minutes of silent reading.',
    'Point out how the writer uses the unit’s grammar to sound careful: *bound to*, *set to*, *on the verge of* for predictions, *given*, *albeit*, *whereas*, *let alone* for the argument.',
    'Part 5 function questions (*Why does the writer mention…?*) are answered by what the detail proves, not by the detail itself. Model the question *what is this example for?*',
    'In the discussion, every prediction needs a reason. Ask *What makes you so sure?* whenever a student says *bound to*.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Would you rather live in a big city or a small town in 2050? Why?* Each student answers in two sentences.' },
    { min: 10, title: 'Reading', md: 'Show board page 1. Students read the text alone and answer the true, false or not given questions.' },
    { min: 10, title: 'Exam corner: word formation', md: 'Show board page 2: C1 Advanced Reading and Use of English Part 3. Students form the words alone, then check spelling together.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 15, title: 'Exam corner: the long text', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 5. Students choose alone, then find the line in the text that proves each answer.' },
    { min: 5, title: 'Close', md: 'Each student makes one prediction about where they live with a future form and a reason. Set the homework.' },
  ],
  board: [
    { title: 'The text', blocks: [
      { t: 'reading', title: 'The return of the small town', md: 'For most of the last century, the story of small towns was a story of loss. Young people left for the cities, shops closed, and the railway station became a car park. Given how strong that pattern has been, it would be easy to assume that it is bound to continue.\n\nThere are signs, however, that the next few decades may look different. Remote work, albeit less common than it was during the pandemic, has allowed a minority of professionals to live far from their offices, and several regions are set to invest in faster broadband for exactly that reason. Whereas a small town once had to offer jobs to keep its residents, it may now need to offer something else: space, a sense of community and a reasonable rent.\n\nNone of this will save every town. Places without a doctor, a school or a bus are unlikely to attract anyone, let alone young families. But the towns that are on the verge of disappearing are not, as is often claimed, beyond help. By 2050 some of them will have been reinventing themselves for twenty years, and the results may surprise us.' },
      { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
        { q: 'Small towns lost people and services in the last century.', a: 't', why: '*Young people left for the cities, shops closed…*' },
        { q: 'Remote work is more common now than during the pandemic.', a: 'f', why: '*albeit less common than it was during the pandemic*.' },
        { q: 'Some regions plan to improve internet connections.', a: 't', why: '*several regions are set to invest in faster broadband*.' },
        { q: 'The writer believes every small town can be saved.', a: 'f', why: '*None of this will save every town.*' },
        { q: 'Young families prefer towns with good schools to towns with cheap rents.', a: 'ng', why: 'The text does not compare what young families prefer.' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 3', blocks: [
      { t: 'ex', kind: 'wordform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 3): use the word in capitals to form a word that fits the gap.', items: [
        { q: 'The ___ of the railway line left the town isolated.', base: 'close', a: ['closure'], why: 'A noun after *the*: *closure*.' },
        { q: 'Remote work has given some professionals greater ___ to choose where they live.', base: 'free', a: ['freedom'], why: 'A noun after *greater*: *freedom*.' },
        { q: 'Lower rents are a strong ___ for young families.', base: 'attract', a: ['attraction'], why: 'A noun after *a strong*: *attraction*.' },
        { q: 'Planners hope to make towns more ___ for older residents.', base: 'access', a: ['accessible'], why: 'An adjective after *more*: *accessible*.' },
        { q: 'Many forecasts about rural life have proved ___ wrong.', base: 'embarrass', a: ['embarrassingly'], why: 'An adverb before the adjective *wrong*; note the double *r* and double *s*.' },
        { q: 'Without a bus service, the village is ___ cut off in winter.', base: 'virtual', a: ['virtually'], why: 'An adverb: *virtually* = almost completely.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 3 decide the word class first from the words around the gap (a noun after *the*, an adverb before an adjective), then check whether the meaning needs a negative prefix or a plural. Spelling must be exact.' },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 5', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 5): choose the answer that fits best according to the text.', items: [
        { q: 'What does the writer suggest in the first paragraph?', o: ['The decline of small towns can easily look impossible to stop.', 'Small towns have always been popular with young people.', 'Railway stations mattered more than shops.', 'The car was the main cause of the decline.'], why: '*it would be easy to assume that it is bound to continue*.' },
        { q: 'What does the writer say about remote work?', o: ['It has made a difference, though only for some people.', 'It has brought most professionals back to small towns.', 'It came to an end after the pandemic.', 'It has pushed up rents in small towns.'], why: '*has allowed a minority of professionals…*' },
        { q: 'Why does the writer mention a doctor, a school and a bus?', o: ['To show what a town needs before anyone will move there.', 'To list the services remote workers bring with them.', 'To explain why young families leave cities.', 'To criticise regional governments.'], why: 'Without them, towns *are unlikely to attract anyone*.' },
        { q: 'How would you describe the writer’s view of the future of small towns?', o: ['cautiously hopeful', 'completely confident', 'deeply pessimistic', 'indifferent'], why: '*None of this will save every town* but *the results may surprise us*.' },
      ] },
      { t: 'tip', md: 'A *Why does the writer mention…?* question is about what the detail **proves**. Ask yourself which argument the example supports, then find the option that says so in other words.' },
    ] },
  ],
  activities: {
    one: { title: 'My town in 2050', md: 'The student describes the place where they live as it might be in 2050, using *bound to*, *set to*, *on the verge of* and *will have been* + *-ing*, linked with *given that*, *whereas* and *albeit*. Challenge each prediction (*What makes you so sure?*) and note three sentences to improve together at the end.' },
    small: { title: 'Prediction market', md: 'Each student posts three predictions for 2050 in the chat. The group rates each one as likely or unlikely, and the writer defends it with *given that* or *insofar as*. Finish with the prediction the group finds most convincing.' },
    group: { title: 'Town councils', md: 'Breakout rooms of three are the council of a small town that is losing young people. Each room agrees on two investments for 2050 and the reason for each. Back together, each council presents its plan in one minute using the connectors from unit 8, and the class votes on the best plan.' },
  },
  homework: { book: 'u8:p4', md: 'Finish lesson 4 of unit 8 if needed. Then write about 150 words in a formal register on how the place where you live is likely to change by 2050, using at least three future forms and three connectors from unit 8. The next class reviews units 7 and 8.' },
};
