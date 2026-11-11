// English C2, class 7 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u2:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c07',
  focus: 'By the end every student links ideas without repeating themselves, using substitution (*one*, *do so*, *so*, *not*, *the same*), ellipsis (*Some voted for it, others against*) and reference (*the former*, *the latter*, *such*, *this* with a summarising noun), and follows those links across paragraphs. The exam goal: in Part 6, use the words that cannot stand alone to put removed paragraphs back.',
  tips: [
    'Reference words point backwards. Every time a student meets *this*, *such* or *the latter*, ask: *What exactly does it refer to?* If they cannot say, the link has failed.',
    '*The former* and *the latter* are for two things only. With three or more, use *the first* and *the last*. And if the reader has to look back to remember which was which, repeat the name instead.',
    'A lonely *this* at the start of a sentence often refers to too much. Teach the habit of adding a summarising noun: *This decision*, *These changes*, *Such behaviour*.',
    'In Part 6, students often match by topic. Insist on a link in the first line of the paragraph and another in its last line before they accept an answer.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Read aloud, without substitution: *I bought a new phone because my old phone broke, and my sister bought a new phone too, because her old phone also broke.* Students rewrite it as briefly as they can and compare versions.' },
    { min: 10, title: 'Say it once', md: 'Show board page 1. Students choose the word that avoids repetition and say what it replaces.' },
    { min: 8, title: 'What does it refer to?', md: 'Show board page 2. Students fix the unclear or wrong references in pairs.' },
    { min: 12, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 20, title: 'Exam corner', md: 'Show board page 3: C2 Proficiency Reading and Use of English Part 6. Eight minutes, alone. Check together: for each gap, students point to the word in the paragraph that links back and the word in the text after it that links forward, and say why the extra paragraph fits nowhere.' },
    { min: 5, title: 'Close', md: 'Each student says one sentence about two things they own or two places they know, using *the former* or *the latter* correctly. Set the homework.' },
  ],
  board: [
    { title: 'Say it once', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the word or phrase that avoids repetition.', items: [
        { q: 'I asked whether the train would be on time, and the guard said he was afraid ___.', o: ['not', 'no', 'so not'], why: 'The negative clause substitute is *not*: *I’m afraid not*.' },
        { q: '“Will the shop be open on Sunday?” “I doubt ___.”', o: ['it', 'so', 'that so'], why: '*I doubt it*. *Doubt* does not take *so*, unlike *think*, *hope* or *expect*.' },
        { q: 'Some guests came by car, others ___ train.', o: ['by', 'did by', 'so by'], why: 'Ellipsis: the verb *came* is left out the second time.' },
        { q: 'The first proposal was cheaper and the second faster; in the end the board chose ___.', o: ['the latter', 'the later', 'the last one of them'], why: 'The second of two: *the latter*. *Later* is about time.' },
        { q: 'Delays, cancellations, lost luggage: ___ problems are common in August.', o: ['such', 'so', 'these kind of'], why: '*Such* + plural noun refers to a kind of thing just listed.' },
        { q: 'He was told to hand back his keys, and he ___ without a word.', o: ['did so', 'did it so', 'made so'], why: '*Do so* replaces the verb phrase *hand back his keys*.' },
      ] },
    ] },
    { title: 'What does it refer to?', blocks: [
      { t: 'ex', kind: 'fix', h: 'Make the reference clear or correct.', items: [
        { s: 'Tom and his brother both studied law; [the last] now works in Paris.', a: ['the latter', 'his brother'], why: 'Two people: *the latter*, or simply repeat the name.' },
        { s: 'The museum raised its prices and shortened its hours. [It] has angered regular visitors.', a: ['This', 'These changes', 'This decision', 'These decisions'], why: '*It* has no clear noun to refer to; *this* or a summarising noun points to both actions.' },
        { s: 'My old laptop was faster than [the new].', a: ['the new one', 'my new one'], why: 'An adjective cannot stand alone: add *one*.' },
        { s: 'She was asked to resign, and she did [it so] the next morning.', a: ['so'], why: 'The substitute is *do so*, without *it*.' },
        { s: '“Has the parcel arrived?” “I don’t think [it].”', a: ['so'], why: 'With *think*, the clause substitute is *so*.' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 6', blocks: [
      { t: 'reading', title: 'The island', md: 'For most of my working life I lived in cities, and I assumed I always would. The island was meant to be a holiday: two weeks, a rented cottage, a pile of books. I stayed for six years.\n\n**Gap 1**\n\nThat was the first lesson. The second took longer to learn. On the mainland I had been, I thought, a sociable person; I knew a great many people and saw most of them rarely. On the island I knew everyone, and I saw all of them constantly.\n\n**Gap 2**\n\nSuch closeness has its price, of course. Nothing goes unnoticed. If your lights are on late, someone will ask the next day whether you slept badly; if they are off early, someone will ask whether you are ill.\n\n**Gap 3**\n\nI did, in the end, leave. But I left with a habit I have never lost: I say good morning to strangers, and I wait for the answer.' },
      { t: 'reading', title: 'The removed paragraphs', md: '**A** The decision, when it came, was not really a decision at all. The cottage’s owner mentioned over coffee that she was looking for someone to take it on for the winter, and I heard myself say yes before I had thought about it. I learned then that the important choices are often made before we notice we are making them.\n\n**B** At first I found this exhausting. A trip to the shop for a pint of milk could take an hour, because everyone I met wanted to talk, and it would have been rude not to. Gradually, though, I came to see these conversations differently. They were not interruptions to life on the island; they were the life of the island.\n\n**C** Some people find this intolerable, and a few leave after a single winter for exactly that reason. I understood them. Yet I found that being watched was not the same as being judged, and that the questions, however nosy, were usually a kind way of saying that someone had noticed I was there.\n\n**D** The winters were harder than I had expected. Storms could stop the ferry for days at a time, and I learned to keep a cupboard full of tins and candles, and to enjoy, rather than fear, the silence that followed.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 6), shortened to three gaps: choose the paragraph (A to D) which fits each gap. There is one extra paragraph which you do not need to use.', items: [
        { q: 'Which paragraph fits gap 1?', o: ['A', 'B', 'C', 'D'], why: '*The decision* follows *I stayed for six years*, and *I learned then that…* is picked up by *That was the first lesson*.' },
        { q: 'Which paragraph fits gap 2?', o: ['B', 'A', 'C', 'D'], why: '*This* refers to seeing everyone constantly; *these conversations… the life of the island* is picked up by *Such closeness*.' },
        { q: 'Which paragraph fits gap 3?', o: ['C', 'A', 'B', 'D'], why: '*This* refers to being noticed all the time; *a few leave* is picked up by *I did, in the end, leave*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In **Part 6** **seven** paragraphs have been removed from a long text, and there is **one extra** in the list. Paragraph D is about the island, but nothing in it links to the words before or after any gap: that is how the extra paragraph works. Match links, not topics.' },
    ] },
  ],
  activities: {
    one: { title: 'Two of everything', md: 'Ask the student to compare two things from their life: two jobs, two cities, two teachers, two ways of travelling to work. They speak for two minutes without repeating a single noun phrase, using *the former*, *the latter*, *one*, *do so*, *the same* and *such*. Note each repetition and replay it; the student repairs it on the spot.' },
    small: { title: 'Cut it down', md: 'Post a deliberately repetitive paragraph of about 80 words in the chat (or write one about a recent class event). Students take one sentence each and rewrite it with substitution, ellipsis or reference, then read the whole new paragraph aloud in order. The group checks that every *this*, *such* and *the latter* points to exactly one thing.' },
  },
  homework: { book: 'u2:p3', md: 'Finish lesson 2 of unit 2 if needed, then do lesson 3 (Semicolons and dashes). Write about 150 words comparing two places you have lived or worked in, without repeating any noun phrase; use *the former* and *the latter*, *do so* and *such* at least once each.' },
};
