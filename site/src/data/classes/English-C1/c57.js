// English C1, class 57 (docs/LESSONS_PLAN.md, L6). Review of units 11 and 12. Draft for the owner's review.
export const LESSON = {
  id: 'c57',
  focus: 'By the end every student uses the language of units 11 and 12 with more control: reporting verbs with their patterns (*urge someone to, concede that, dismiss something as, attribute something to*), distancing and passive reporting (*allegedly, is said to have done*), the vocabulary of news and bias, word formation in several steps, compound nouns and adjectives, and the causative patterns with *make, let, have, get* and *cause*. Speaking first: most of the class is talk, with mistakes fixed together.',
  tips: [
    'Collect typical mistakes from classes 49 to 56 before this class and swap four of them into the board page *Fix it*. The commonest at this point: *suggest someone to*, *dismiss like*, *is said to leave* for an earlier action, and *made them to sell*.',
    'Mix the two units deliberately: a news story about a nature reserve needs reporting verbs, distancing, compounds and causatives at once. Ask for all of them in the activity.',
    'Word formation is where marks are lost on spelling. When a student says a derived word, ask them to spell it: *irreversible*, *maintenance*, *unsustainably*.',
    'End with a clear next step: the two unit tests are the homework, and each student names their weakest area before leaving.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What is a story in the news this week that you only half believe? Who is behind it?* Each student answers in two or three sentences; push for *allegedly* or *is said to*.' },
    { min: 12, title: 'Units 11 and 12 together', md: 'Show board page 1. Students choose the right forms alone, then explain one choice each.' },
    { min: 10, title: 'Fix it', md: 'Show board page 2: typical mistakes from the last classes. Students correct them in pairs, then say the rule in their own words.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 3. Students form the words alone in six minutes, then check spelling together.' },
    { min: 5, title: 'Close', md: 'Each student names one point they now feel sure about and one to practise. Set the homework.' },
  ],
  board: [
    { title: 'Units 11 and 12 together', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
        { q: 'The spokesperson ___ the rumours as pure speculation.', o: ['dismissed', 'denied', 'refused'], why: '*dismiss X as Y*: reject it as not worth taking seriously.' },
        { q: 'The minister is reported ___ her resignation late last night.', o: ['to have offered', 'to offer', 'offering'], why: 'An earlier action after passive reporting: the perfect infinitive.' },
        { q: 'Critics accused the channel ___ cherry-picking the facts.', o: ['of', 'for', 'with'], why: '*accuse someone of* + -ing.' },
        { q: 'The heavy rain caused the river ___ its banks.', o: ['to burst', 'burst', 'bursting'], why: '*cause* + object + *to*.' },
        { q: 'Visitors ___ to feed the deer in the park.', o: ['are not allowed', 'are not let', 'do not let'], why: '*let* has no passive: use *be allowed to*.' },
        { q: 'The new dam will have ___ consequences for the valley.', o: ['far-reaching', 'far-reached', 'far-reach'], why: 'Adjective + -ing compound: *far-reaching*.' },
      ] },
    ] },
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'The charity urged [that the council] to protect the woods.', a: ['the council'], why: '*urge* + object + *to*, with no *that*.' },
        { s: '[According to me], the article is biased.', a: ['In my view', 'In my opinion'], why: '*according to* introduces someone else’s view, not yours.' },
        { s: 'The headline was deliberately [misleaded].', a: ['misleading'], why: 'The *-ing* adjective describes what misleads.' },
        { s: 'Two hundred oaks were planted in the [birds sanctuary].', a: ['bird sanctuary'], why: 'In a compound noun the first noun stays singular.' },
        { s: 'The drought made the farmers [to sell] their cattle.', a: ['sell'], why: 'Active *make* + object + infinitive without *to*.' },
        { s: 'Some of the damage to the wetland may be [unreversible].', a: ['irreversible'], why: '*ir-* before *r*.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 3', blocks: [
      { t: 'ex', kind: 'wordform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 3): use the word in capitals to form a word that fits the gap.', items: [
        { q: 'The programme was criticised for its lack of ___.', base: 'object', a: ['objectivity'], why: 'A noun after *its lack of*: *object → objective → objectivity*.' },
        { q: 'The claims in the article remain entirely ___.', base: 'substance', a: ['unsubstantiated'], why: 'A negative adjective in three steps: *un-substant-iated*.' },
        { q: 'Visitors are surprised by the ___ of wildlife in the reserve.', base: 'abound', a: ['abundance'], why: 'A noun after *the*, with the spelling change *abound → abundance*.' },
        { q: 'Rainfall here is ___ low in August.', base: 'vary', a: ['invariably'], why: 'An adverb meaning *always*: *in-vari-ably*.' },
        { q: 'The editor’s ___ of the complaint as trivial angered readers.', base: 'dismiss', a: ['dismissal'], why: 'A noun after *The editor’s*: *dismissal*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 3 at C1 a single answer often needs two or three changes: a prefix, a suffix and a spelling change inside the word. Read the whole sentence first: if the meaning is negative, the answer probably has a prefix.' },
    ] },
  ],
  activities: {
    one: { title: 'The story behind the story', md: 'The student tells you about a news story they followed recently, real or about nature and the environment. Ask: *Who said what? How did the paper report it? Who made it happen?* Push for a reporting verb with its pattern, a distancing phrase and a causative. Note five sentences and correct them together at the end.' },
    small: { title: 'Newsroom', md: 'Give the group a headline in the chat: *Wolves return to the valley after 100 years*. Each student adds one sentence to the news report in turn, and each sentence must use something from units 11 or 12 (*It is thought that…*, *Farmers have urged…*, *drought-resistant*, *had the fences taken down*). The others check the pattern before the next student goes.' },
    group: { title: 'Two papers, one story', md: 'Breakout rooms of three get the same event in the chat (a council lets a forest grow wild). Half the rooms write a short, sensationalist report; the other half write a balanced account, both using reporting verbs and distancing. Back together, rooms read their reports and the class names the words that show the bias.' },
  },
  homework: { book: 'u11 u12', md: 'Do the unit 11 test and the unit 12 test in the book. Note your weakest area and practise it for 30 minutes before the next class.' },
};
