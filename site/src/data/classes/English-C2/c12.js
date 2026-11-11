// English C2, class 12 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u3:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c12',
  focus: 'By the end every student explains how puns, ambiguous headlines and twisted idioms work (one word with two meanings, two words that sound alike, a structure that can be read two ways), writes a pun that works on both levels, and forms words with more than one change in the format of C2 Proficiency Reading and Use of English Part 3.',
  tips: [
    'Explaining a pun kills it, but at C2 students need to explain it once. Ask for both meanings in plain words, then let the joke land again.',
    'Accidental ambiguity in headlines usually comes from grammar, not vocabulary: a word that can be a noun or a verb, or a phrase that can attach to two different nouns. Ask students to draw the two readings.',
    'In Part 3 at C2 most answers need two changes (a prefix and a suffix, or an internal change). Ask students to say the word class the gap needs first, then the meaning (positive or negative), and only then to write.',
    'Spelling counts in Part 3. Check doubled consonants and dropped letters (*deceptively*, *painstakingly*) letter by letter.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Write on the board: *I used to be a banker, but I lost interest.* Ask why it is funny, then ask students for a pun or a joke with a double meaning from their own language and how it would sound translated.' },
    { min: 10, title: 'Two meanings at once', md: 'Show board page 1. Students match the words with their two meanings, then try to make a one-line pun with one of them.' },
    { min: 10, title: 'Read it twice', md: 'Show board page 2. Students find the word that carries the double meaning, then tap the words that make each headline ambiguous and explain both readings.' },
    { min: 12, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 18, title: 'Exam corner', md: 'Show board page 3: C2 Proficiency Reading and Use of English Part 3. Seven minutes, alone. Check together: for each answer, students say how many changes the word needed and spell it aloud.' },
    { min: 5, title: 'Close', md: 'Each student reads out their best pun of the day. The group groans or laughs. Set the homework.' },
  ],
  board: [
    { title: 'Two meanings at once', blocks: [
      { t: 'ex', kind: 'match', h: 'Match each word with its two meanings.', pairs: [
        ['grave', 'very serious / the place where someone is buried'],
        ['current', 'happening now / a flow of water or electricity'],
        ['pressing', 'urgent / pushing flat, as with an iron'],
        ['draw', 'make a picture / a game that nobody wins'],
        ['novel', 'new and original / a long written story'],
        ['bright', 'full of light / clever'],
      ] },
      { t: 'tip', art: 'owl', md: 'A pun works only when **both** meanings fit the situation. A dry cleaner’s sign *We’ll handle your pressing problems* works because the shop really does press clothes and does solve urgent problems. If the second meaning has nothing to do with the facts, it is only noise.' },
    ] },
    { title: 'Read it twice', blocks: [
      { t: 'ex', kind: 'choice', h: 'Which word or phrase carries the double meaning?', items: [
        { q: 'A headline about an energy company that ignores complaints: “Power firm shows no current interest in its customers.”', o: ['current', 'firm', 'shows'], why: '*Current* means *present* and is also electricity, which fits an energy company.' },
        { q: 'A bakery’s slogan: “Our bread rises to every occasion.”', o: ['rises', 'bread', 'occasion'], why: 'Bread *rises* in the oven, and to *rise to the occasion* is to meet a challenge well.' },
        { q: 'A headline about gardeners protesting against new houses on their allotments: “Gardeners dig in over housing plan.”', o: ['dig in', 'over', 'plan'], why: 'Gardeners literally dig, and to *dig in* means to refuse to change your position.' },
        { q: 'A story about a tailor’s shop closing after poor sales: “Business had been sew-sew, says retiring tailor.”', o: ['sew-sew', 'business', 'retiring'], why: '*Sew* sounds like *so*: *so-so* means not very good, and a tailor sews.' },
      ] },
      { t: 'ex', kind: 'spot', h: 'Each headline can be read in two ways by accident. Tap the word or words that cause the ambiguity.', items: [
        { s: '[Seven foot] doctors sue hospital.', why: 'Seven doctors who treat feet, or doctors who are seven feet tall?' },
        { s: 'Stolen painting found [by] tree.', why: '*By* can mean *next to* or introduce who found it.' },
        { s: 'Students [cook and serve] grandparents.', why: 'Did they cook for their grandparents, or cook them?' },
        { s: '[Man eating] piranha sold as pet fish.', why: 'A man eating a piranha, or a man-eating piranha?' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 3', blocks: [
      { t: 'ex', kind: 'wordform', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 3): read the text about stand-up comedy. Use the word in capitals to form a word that fits the gap.', items: [
        { q: 'Stand-up comedy looks ___ simple: one person, one microphone and no props.', base: 'deceive', a: ['deceptively'], why: 'An adverb before an adjective, with an internal change: *deceive* to *deceptive* to *deceptively*.' },
        { q: 'In reality, few performers are as ___ as a comedian facing a silent room.', base: 'defend', a: ['defenceless', 'defenseless'], why: 'An adjective with a negative meaning: *defence* + *-less*.' },
        { q: 'Many jokes depend on a sudden ___ of what the audience expects.', base: 'reverse', a: ['reversal'], why: 'A noun after *a sudden*: *reversal*.' },
        { q: 'A pun that seems ___ at first can turn out to be the cleverest line of the night.', base: 'consequence', a: ['inconsequential'], why: 'Two changes: the negative prefix *in-* and the adjective suffix *-ial*.' },
        { q: 'Timing is ___ the hardest skill for a new comedian to learn.', base: 'argue', a: ['arguably'], why: 'An adverb for a cautious claim; the *e* of *argue* is dropped.' },
        { q: 'Most comedians admit to a lifelong ___ with words.', base: 'obsess', a: ['obsession'], why: 'A noun after *a lifelong*: *obsession*.' },
        { q: 'Audiences are often blissfully ___ of how much rewriting goes into a short set.', base: 'aware', a: ['unaware'], why: 'A negative prefix: the collocation is *blissfully unaware*.' },
        { q: 'The best lines are ___ tested in small clubs many times before they reach television.', base: 'pain', a: ['painstakingly'], why: 'An adverb from the compound *painstaking*: very careful and thorough.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In **Part 3** there are **eight gaps**, each with a word in capitals. At C2, expect two changes in most answers: a prefix and a suffix, an internal change, or a compound. Decide the word class, then whether the meaning is positive or negative, then spell it.' },
    ] },
  ],
  activities: {
    one: { title: 'The headline desk', md: 'Give the student three short news stories in the chat (a zoo whose penguins escaped, a bakery that won a prize, a bridge opened two years late). The student writes a punning headline for each, then explains both meanings. Improve them together until each pun works on both levels. Finish with a headline about something in the student’s own week.' },
    small: { title: 'Pun shop', md: 'Each student chooses a kind of shop (a florist, a dentist, a bookshop, a fishmonger) and writes a punning name or slogan for it in the chat (*Curl Up and Dye* for a hairdresser). The group explains each pun and votes for the one that works best on both levels. Then everyone writes a second one for the shop that lost.' },
  },
  homework: { book: 'u3:p3', md: 'Finish lesson 2 of unit 3 if needed, then do lesson 3 (Bite the bullet, grasp the nettle). Collect three puns or ambiguous headlines from newspapers, adverts or shop signs this week, and write two or three sentences on each: what the two meanings are and whether the pun works.' },
};
