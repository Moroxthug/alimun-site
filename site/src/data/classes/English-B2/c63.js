// English B2, class 63 (docs/LESSONS_PLAN.md). Builds on book lesson u13:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c63',
  focus: 'By the end of the class every student can add emphasis in two ways: with *do, does* and *did* before a verb (*I did enjoy it*, *She does play well*), and by pairing gradable and extreme adjectives with the right adverbs (*very good* but *absolutely brilliant*, *really tired* but *completely exhausted*). Students should give strong, natural opinions about films, books and performances.',
  tips: [
    'The key rule: *very* goes with normal (gradable) adjectives, *absolutely* with extreme ones. *Very brilliant* and *absolutely good* both sound wrong. *Really* works with both, which is a safe choice.',
    'Emphatic *do* is often used to contrast or to insist: *I didn’t like the start, but I did like the end.* Model the stress: the *do* word is said strongly.',
    'After emphatic *did*, the verb is in the base form: *I did enjoy*, not *I did enjoyed*. This is the most common mistake.',
    'Learners often overuse *very*. Give them a short list of extreme adjectives to use instead: *brilliant, awful, exhausted, freezing, huge, tiny, hilarious*.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What is a film you thought was very good, and one you thought was absolutely terrible?* Notice which adverbs students use.' },
    { min: 12, title: 'Normal and extreme adjectives', md: 'Show board page 1. Go through the table, then students choose the right adverb for each adjective.' },
    { min: 10, title: 'Emphatic do', md: 'Show board page 2. Model the stress, then students correct the sentences and say them aloud with emphasis.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: B2 First Reading and Use of English Part 1, multiple-choice cloze. Students choose alone, then explain each answer.' },
    { min: 5, title: 'Close', md: 'Each student describes their week with one extreme adjective and one emphatic *did*. Set the homework.' },
  ],
  board: [
    { title: 'Normal and extreme adjectives', blocks: [
      { t: 'table', caption: 'Which adverb?', explain: ['head'], head: ['Normal adjective', 'Extreme adjective', 'Adverbs'], rows: [
        ['good', 'brilliant, superb', 'very good / absolutely brilliant'],
        ['bad', 'awful, terrible', 'very bad / absolutely awful'],
        ['tired', 'exhausted', 'very tired / completely exhausted'],
        ['funny', 'hilarious', 'very funny / absolutely hilarious'],
        ['big', 'huge, enormous', 'very big / absolutely huge'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the right adverb.', items: [
        { q: 'The final scene was ___ brilliant.', o: ['absolutely', 'very', 'a bit'], why: '*Brilliant* is extreme: *absolutely*.' },
        { q: 'The second half was ___ slow.', o: ['very', 'absolutely', 'completely'], why: '*Slow* is a normal adjective: *very*.' },
        { q: 'After the concert we were ___ exhausted.', o: ['completely', 'very', 'slightly'], why: '*Exhausted* is extreme: *completely*.' },
        { q: 'The theatre was ___ huge.', o: ['really', 'very', 'fairly'], why: '*Really* works with extreme adjectives; *very huge* is wrong.' },
      ] },
    ] },
    { title: 'Emphatic do, does, did', blocks: [
      { t: 'examples', items: [
        { s: 'The plot was weak, but I **did** like the music.', n: 'Contrast: the music was good.' },
        { s: 'She **does** sing beautifully, even if you don’t like the songs.', n: 'Insisting on a fact.' },
        { s: '**Do** come to the opening, it’ll be fun!', n: 'A warm, strong invitation.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'I wasn’t sure at first, but I [did enjoyed] it.', a: ['did enjoy'], why: 'After emphatic *did*, use the base verb.' },
        { s: 'The show was [very fantastic].', a: ['absolutely fantastic'], why: '*Fantastic* is extreme: *absolutely*, not *very*.' },
        { s: 'He [does plays] the guitar really well.', a: ['does play'], why: 'After *does*, use the base verb.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 1', blocks: [
      { t: 'text', md: 'In the format of B2 First Reading and Use of English Part 1: read the text and choose the word that best fits each gap.' },
      { t: 'ex', kind: 'select', h: 'Choose the best word.', items: [
        { q: 'Last night’s concert was absolutely ___.', o: ['superb', 'nice', 'pleasant', 'fine'], why: 'After *absolutely*, an extreme adjective: *superb*.' },
        { q: 'The audience was ___ silent during the final song.', o: ['completely', 'very', 'much', 'quite a'], why: '*Silent* is an absolute adjective: *completely silent*.' },
        { q: 'The tickets were expensive, but it ___ make the evening special.', o: ['did', 'was', 'had', 'got'], why: 'Emphatic *did* + base verb.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Part 1 tests words that go together. If the gap is next to *absolutely* or *completely*, look for an extreme adjective; if it is before a verb in the base form, think of emphatic *do*.' },
    ] },
  ],
  activities: {
    one: { title: 'Rave or rant', md: 'Name five films, books or places. For each one the student gives a strong opinion with an extreme adjective and the right adverb, and adds a contrast with emphatic *did* or *does*. Correct every *very* + extreme adjective.' },
    small: { title: 'The critics', md: 'Each student chooses a film or show and gives a 30-second review using three extreme adjectives and one emphatic *do*. The others rate how strong and how natural the review sounded.' },
    group: { title: 'Upgrade the review', md: 'Share a dull review in the chat (*The film was very good and quite funny. The ending was very sad.*). In breakout rooms of three, students rewrite it with extreme adjectives and emphatic *do*. Back together, rooms read their versions and the class chooses the best.' },
  },
  homework: { book: 'u13:p2', md: 'Finish book lesson 2 of unit 13. Then write a short message to a friend about a film or event, using four extreme adjectives with the right adverbs and two emphatic *do* sentences.' },
};
