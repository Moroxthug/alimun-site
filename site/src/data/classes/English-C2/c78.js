// English C2, class 78 (docs/LESSONS_PLAN.md, L6). Review of units 15 and 16 (Language and the mind; Ready for C2 Proficiency). Draft for the owner's review.
export const LESSON = {
  id: 'c78',
  focus: 'By the end every student uses the language of unit 15 with more precision (implicature and presupposition, false friends, framing and weasel words, verbs matched to the strength of the evidence) and applies the exam methods of unit 16 to mixed tasks: a Listening Part 1 extract where the answer lies in what is meant rather than said, and a Reading and Use of English Part 4 round. Speaking comes first, with mistakes fixed together, so students arrive at the practice exam confident in both the language and the format.',
  tips: [
    'Collect four or five real mistakes from classes 70 to 77 before this class, especially false friends, overstated claims (*proves, determines*) and Part 4 answers that changed the key word, and add them to the fix page.',
    'Mix the units on purpose: discussing how a news story was framed needs implicature, careful verbs of evidence and the long turn of Speaking Part 3 at once.',
    'In the listening, ask students what the speaker **means**, then what she **says**. If the two are the same, the question is probably too easy for C2, and the answer is probably elsewhere.',
    'Give the less confident students the first turns in the warm-up and the stronger students the Part 4 items with two changes.',
    'Remind students that the next class is the practice exam with strict timing, and that the rest of it is set as timed homework. Tell them to bring paper and a pen for planning.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Tell us about a sentence you heard or read recently that meant more than it said. What did it really mean?* Each student answers in two sentences.' },
    { min: 10, title: 'Units 15 and 16 together', md: 'Show board page 1. Students choose the right forms alone with “Everyone solves this”, then explain one choice each.' },
    { min: 8, title: 'Fix it', md: 'Show board page 2, then add the real mistakes you collected. Students correct them alone, then compare.' },
    { min: 10, title: 'Listening Part 1', md: 'Show board page 3. Give 30 seconds to read the questions, then read the script on board page 5 aloud twice. Students answer alone; check, then show the script.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 4: C2 Proficiency Reading and Use of English Part 4. Six minutes alone, then check and count the words together.' },
    { min: 13, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 4, title: 'Close', md: 'Each student names one point they now feel sure about and one to practise before the practice exam. Set the homework.' },
  ],
  board: [
    { title: 'Units 15 and 16 together', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
        { q: '“I’m sorry ___ anyone was offended” is a non-apology.', o: ['if', 'that', 'because'], why: 'Unit 15: the *if* avoids admitting that anyone was offended at all.' },
        { q: 'She ___ leaving the company, so she must have left.', o: ['regrets', 'considers', 'imagines'], why: 'Unit 15: *regret* presupposes that what follows is true.' },
        { q: 'Two hundred people ___ the conference in Lisbon.', o: ['attended', 'assisted', 'presented'], why: 'Unit 15: *attend* an event; *assist* is a false friend meaning help.' },
        { q: 'These results are ___ with a weak version of the hypothesis.', o: ['consistent', 'proven', 'determined'], why: 'Unit 15: *consistent with* fits the theory without claiming proof.' },
        { q: 'The cream “___ reduce the appearance of fine lines”.', o: ['helps', 'will', 'always'], why: 'Unit 15: a weasel word that weakens the claim.' },
        { q: 'In Reading and Use of English Part 4 you use ___ words, including the key word.', o: ['three to eight', 'two to five', 'up to ten'], why: 'Unit 16: three to eight words, and the key word never changes.' },
        { q: 'The Writing Part 1 essay summarises and ___ the key points of two texts.', o: ['evaluates', 'copies', 'lists'], why: 'Unit 16: summary and evaluation, with your own view.' },
        { q: 'In Reading and Use of English Part 6 there are eight paragraphs for ___ gaps.', o: ['seven', 'eight', 'six'], why: 'Unit 16: one paragraph is not needed.' },
      ] },
    ] },
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'The meeting was a big [deception]: nothing was decided.', a: ['disappointment'], why: 'Unit 15: a false friend; *deception* means deliberately misleading.' },
        { s: 'Could you [control] my essay for mistakes before I send it?', a: ['check'], why: 'Unit 15: *check* for mistakes; *control* means direct or restrain.' },
        { s: 'There is now [a strong evidence] that sleep affects memory.', a: ['strong evidence', 'a strong body of evidence'], why: 'Unit 15: *evidence* is uncountable.' },
        { s: 'The study [proves] that language may influence perception.', a: ['suggests', 'indicates', 'supports the idea'], why: 'Unit 15: *proves* is too strong next to *may*; match the verb to the evidence.' },
        { s: 'The cost of living has risen [disproportionally] for students.', a: ['disproportionately'], why: 'Unit 16: in Part 3, every change counts: *dis-* + *proportion* + *-ate* + *-ly*.' },
        { s: 'I was on the verge [to give] up when the answer came to me.', a: ['of giving'], why: 'Unit 16: *on the verge of* + *-ing*.' },
      ] },
    ] },
    { title: 'Listening Part 1', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Listening Part 1): you will hear two friends talking about a speech given by a local politician. Choose the answer which fits best according to what you hear. (Shortened: one extract instead of three.)', items: [
        { q: 'What does Sara imply about the speech?', o: ['It avoided making any real commitment.', 'It was too long for the audience.', 'It contained several false statements.'], why: '*Beautifully phrased… I’ve read it three times and still can’t find a single promise in it.*' },
        { q: 'What do they agree about the phrase “difficult decisions ahead”?', o: ['It prepares people for cuts without naming them.', 'It shows the politician is being honest.', 'It is an unusual phrase for a politician.'], why: '*That’s the bit where they tell you cuts are coming without using the word* / *Exactly.*' },
      ] },
      { t: 'tip', art: 'owl', md: 'In C2 listening, the right answer often paraphrases what a speaker **means**. An option that repeats the speaker’s exact words is usually a trap.' },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first. Do not change the word given. Use between three and eight words, including the word given.', items: [
        { q: 'The difficulty lies less in the words than in the culture behind them.', cue: 'MUCH', a: ['The difficulty lies not so much in the words as in the culture behind them.'], why: 'Unit 15: *not so much… as*.' },
        { q: 'They did not tell us that the price had changed.', cue: 'DARK', a: ['They kept us in the dark about the change in price.', 'They kept us in the dark about the price change.', 'They kept us in the dark about the price having changed.'], why: '*Keep someone in the dark*: not tell them.' },
        { q: 'Without the subtitles, I would not have understood a word.', cue: 'FOR', a: ['Had it not been for the subtitles, I would not have understood a word.', 'If it had not been for the subtitles, I would not have understood a word.', 'If it hadn’t been for the subtitles, I wouldn’t have understood a word.', 'Were it not for the subtitles, I would not have understood a word.', 'But for the subtitles, I would not have understood a word.'], why: 'Units 15 and 16: *had it not been for* or *but for* + noun.' },
        { q: 'It doesn’t matter how carefully you phrase it; people will still be upset.', cue: 'HOWEVER', a: ['However carefully you phrase it, people will still be upset.'], why: '*However* + adverb for concession.' },
        { q: 'Nobody noticed that the label had been changed.', cue: 'UNNOTICED', a: ['The change to the label went unnoticed.', 'The fact that the label had been changed went unnoticed.', 'The change in the label went unnoticed.'], why: 'Unit 15: *go unnoticed*.' },
        { q: 'I only realised that I had been misled much later.', cue: 'DAWNED', a: ['It only dawned on me much later that I had been misled.', 'It dawned on me only much later that I had been misled.', 'It was only much later that it dawned on me that I had been misled.'], why: 'Units 15 and 16: *it dawned on me that*; *dawned* stays as given.' },
      ] },
    ] },
    { title: 'Listening script (read aloud twice; show after the answers)', blocks: [
      { t: 'dialogue', title: 'Two friends after a speech', lines: [
        { who: 'Sara', s: 'Did you see the speech the mayor gave last night?' },
        { who: 'Tom', s: 'Most of it. It sounded very confident.' },
        { who: 'Sara', s: 'Oh, it was beautifully phrased. I’ve read it three times and I still can’t find a single promise in it.' },
        { who: 'Tom', s: 'There was the line about “difficult decisions ahead”.' },
        { who: 'Sara', s: 'That’s the bit where they tell you cuts are coming without using the word.' },
        { who: 'Tom', s: 'Exactly. Though I suppose it’s more honest than pretending everything is fine.' },
        { who: 'Sara', s: 'Slightly. Honest would be saying which services.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'A story and its frame', md: 'Ask the student to bring a real news story, advert or political statement in English, or find one together. They give a two-minute long turn on it: what it says, what it implies or presupposes, which devices it uses and whether the claim survives without them, with careful verbs of evidence. Then you take the other side and the student responds tactfully. Note five sentences and correct them together at the end.' },
    small: { title: 'Speaking Part 3 with a twist', md: 'Each student gives a long turn of about two minutes on *How much should we trust what we read in advertising and the news?* Each speaker must use one example of implicature or presupposition, one device of persuasion and one careful verb of evidence from unit 15. The others listen and note each one they hear; after every turn, a listener asks one follow-up question.' },
  },
  homework: { book: 'u15 u16', md: 'Do the unit 15 and unit 16 tests in the book if you have not yet. Then redo the exercises of the lesson with your lowest score, and do one timed Reading and Use of English Part 4 task and one timed Writing plan (ten minutes) before the practice exam.' },
};
