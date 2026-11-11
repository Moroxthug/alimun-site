// English C2, class 72 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u15:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c72',
  focus: 'By the end every student can name the devices that steer a reader (framing, metaphor, anchoring, scarcity, defaults and weasel words), report a claim exactly as strong as it was made, and judge calmly whether it survives without the device. They form the words of this topic accurately in a C2 Proficiency Reading and Use of English Part 3 task, and plan a Writing Part 2 article on persuasion with a hook, a line of argument and an ending that stays in the mind.',
  tips: [
    'Keep the tone analytical, not cynical. The aim is to notice a device and name it, not to conclude that all persuasion is dishonest; the book’s own article makes this point, and C2 writing is valued for measured judgement.',
    'The commonest error in reporting a claim is making it stronger than it was: *helps reduce* becomes *reduces*, *up to* becomes *all*. Whenever a student reports a claim, ask *Is that exactly what it said?*',
    'Priming is a contested area: some well-known findings have not been repeated. If students cite dramatic results, ask how strong the evidence is and model careful verbs (*may, has been linked to, the evidence is mixed*).',
    'In the article plan, the ending is where most C2 articles are weakest. Ask each student to write their final sentence before the middle paragraphs, so the argument leads somewhere.',
    'Remind students that invented examples in an article must be clearly hypothetical: never present an invented figure as a fact.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What is the last advert, headline or app message that tried to change what you did? How did it do it?* Each student answers in two or three sentences.' },
    { min: 10, title: 'Name the device', md: 'Show board page 1. Students match each example to its device alone, then explain one choice each.' },
    { min: 8, title: 'Weasel words', md: 'Show board page 2. Students tap the word that weakens each claim, then choose the accurate report of it.' },
    { min: 12, title: 'Exam corner', md: 'Show board page 3: C2 Proficiency Reading and Use of English Part 3. Seven minutes alone with “Everyone solves this”, then check. For each answer, students name every change to the stem.' },
    { min: 12, title: 'Planning an article', md: 'Show board page 4: C2 Proficiency Writing Part 2. Students choose the strongest opening and ending, then write their own title, opening sentence and final sentence in five minutes.' },
    { min: 10, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 4, title: 'Close', md: 'Each student reads their final sentence aloud. Set the homework.' },
  ],
  board: [
    { title: 'Name the device', blocks: [
      { t: 'ex', kind: 'match', h: 'Match each example to the device it uses.', pairs: [
        ['Was £80, now just £35.', 'anchoring: a first number makes the next seem small'],
        ['Only three rooms left at this price.', 'scarcity: the chance seems about to disappear'],
        ['Your data will be shared with our partners unless you untick this box.', 'a default: one option happens unless you act'],
        ['Nine out of ten patients remain free of symptoms after a year.', 'a positive frame for a fact that could be stated negatively'],
        ['The council has declared war on litter.', 'a metaphor that makes an issue look like something else'],
        ['Restructuring will result in some roles being discontinued.', 'euphemism and nominalisation that hide who acts'],
      ] },
      { t: 'tip', art: 'cat', md: 'Naming the device is the first step. The second is to restate the claim **without** it and ask whether you still believe it: *Some patients have symptoms again within a year; is that good?*' },
    ] },
    { title: 'Weasel words and accurate reports', blocks: [
      { t: 'ex', kind: 'spot', h: 'Tap the word or phrase that weakens each claim.', items: [
        { s: 'Our toothpaste [can help] fight the causes of tooth decay.', why: '*Can help* is a possibility of a contribution, not a promise that it works.' },
        { s: 'The new route is [virtually] free of delays.', why: '*Virtually* admits that some delays happen.' },
        { s: 'Members enjoy savings of [up to] a third on every booking.', why: '*Up to* sets a maximum; most bookings may save much less.' },
        { s: 'Experts agree it is [one of] the safest cars on the road.', why: '*One of* places it in an undefined group, which could be large.' },
      ] },
      { t: 'ex', kind: 'choice', h: 'Choose the report that is exactly as strong as the original claim.', items: [
        { q: 'Original: “This supplement may support a healthy immune system.”', o: ['The makers claim it may support the immune system.', 'The supplement strengthens the immune system.', 'The supplement has been proven to prevent illness.'], why: '*May support* is reported with *may support*; the other two make the claim much stronger.' },
        { q: 'Original: “Up to 40% off selected lines.”', o: ['Some items are reduced, by as much as 40%.', 'Everything is 40% cheaper.', 'Most items are reduced by about 40%.'], why: '*Selected* and *up to* limit both which items and how much.' },
        { q: 'Original: “Mistakes were made in the handling of the complaint.”', o: ['The statement admits that the complaint was handled badly without saying who was responsible.', 'The manager admitted that he had made mistakes.', 'The company denied any mistakes.'], why: 'The passive admits the error but hides the agent.' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 3', blocks: [
      { t: 'ex', kind: 'wordform', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 3): read the text about choice architecture and use the word in capitals to form a word that fits each gap.', items: [
        { q: 'Most of us make hundreds of small decisions a day, many of them almost ___.', base: 'conscious', a: ['unconsciously', 'subconsciously'], why: 'An adverb after *almost*, with a negative prefix: *unconsciously* or *subconsciously*.' },
        { q: 'A dessert placed by the till can prove all but ___ to a tired shopper.', base: 'resist', a: ['irresistible'], why: '*Ir-* + *resist* + *-ible*: an adjective after *prove*.' },
        { q: 'Defenders of nudges argue that their aims should be stated with complete ___.', base: 'transparent', a: ['transparency'], why: 'A noun after *complete*: *-ent* becomes *-ency*.' },
        { q: 'Critics reply that steering people without their knowledge is fundamentally ___.', base: 'ethic', a: ['unethical'], why: '*Un-* + *ethic* + *-al*: a negative adjective.' },
        { q: 'There is little agreement about the long-term ___ of such schemes.', base: 'effect', a: ['effectiveness'], why: '*Effect* → *effective* → *effectiveness*: two suffixes.' },
        { q: 'Claims made in advertisements are now subject to closer ___ by regulators.', base: 'scrutinise', a: ['scrutiny'], why: 'The noun of *scrutinise* is *scrutiny*: the stem changes.' },
        { q: 'One complaint concerned the ___ of a survey of just twenty customers as “research”.', base: 'represent', a: ['misrepresentation'], why: '*Mis-* + *represent* + *-ation*: a noun after *the*.' },
        { q: 'Whether every nudge serves the public interest remains highly ___.', base: 'question', a: ['questionable'], why: 'An adjective after *highly*: *-able*.' },
      ] },
      { t: 'tip', art: 'cat', md: 'At C2 one gap can need a prefix, a suffix and a change to the stem at once (*scrutinise → scrutiny*). Decide the word class from the words around the gap, then whether the sense is negative, then check the spelling letter by letter.' },
    ] },
    { title: 'Writing Part 2: planning an article', blocks: [
      { t: 'text', md: 'In the format of the C2 Proficiency exam (Writing Part 2, an article, 280 to 320 words): *A website about modern life is publishing articles with the title **Who chose that for me?** Write an article about the defaults, nudges and small print that shape everyday decisions, from online sign-ups to supermarket shelves. Explain how they work, and say whether readers should welcome them or resist them.*' },
      { t: 'ex', kind: 'choice', h: 'Choose the strongest option for the article.', items: [
        { q: 'An opening sentence:', o: ['Last month I discovered that I had been paying for a magazine I had never opened, thanks to one box I had not unticked.', 'This article will discuss defaults, nudges and small print.', 'There are many types of persuasion in the world today.'], why: 'A concrete, personal scene hooks the reader and leads straight to the topic.' },
        { q: 'A sentence for the middle of the article that sets a criterion:', o: ['The question is not whether we are nudged, since every choice has to be presented somehow, but whether the nudge would survive being explained.', 'Nudges are very bad and should be banned immediately.', 'Some nudges are good and some are bad.'], why: 'A *not whether… but whether* frame gives the reader a test to apply, which is the core of a C2 argument.' },
        { q: 'A final sentence:', o: ['The next time a box is ticked for you, untick it, if only to remind yourself that you can.', 'In conclusion, there are advantages and disadvantages.', 'I hope you enjoyed reading my article.'], why: 'An ending that returns to the opening image and leaves the reader with something to do.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Advert autopsy', md: 'Ask the student to bring, or find during the class, a real advert, product label, political slogan or app message in English. Together, name each device in it, restate the claim without the device, and decide whether it survives. Then the student writes two versions of the same message for the same product: one honest and persuasive, one manipulative, and explains the difference in two sentences.' },
    small: { title: 'Two frames', md: 'Post one plain fact for each student in the chat (for example *A new bus lane has cut journey times for buses and lengthened them for cars*). Each student presents it twice, once to win support and once to stir opposition, using a different device each time. The others name the devices and vote for the frame that would work best on them, and say why.' },
  },
  homework: { book: 'u15:p3', md: 'Finish lesson 3 of unit 15 if needed, then do lesson 4 (Does language shape thought?). In the format of the C2 Proficiency exam (Writing Part 2): write the article from the board, or the one in the book, in 280 to 320 words and no more than 45 minutes, using the opening and ending you planned in class, and send it to your teacher, who will correct it.' },
};
