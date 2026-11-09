// English C2, class 20 (docs/LESSONS_PLAN.md, L6). Exam practice: C2 Proficiency Reading and Use of English, units 1 to 4. Draft for the owner's review.
export const LESSON = {
  id: 'c20',
  focus: 'By the end of the class every student knows the seven parts of C2 Proficiency Reading and Use of English, has tried every part in a shortened form under time pressure with the language of units 1 to 4 (near-synonyms, collocations and binomials, euphemism, sentence rhythm, inversion and clefts, substitution and reference, irony and wordplay, idioms, hedging, noun phrases and reporting verbs), and has a one-line method for each part. Students leave knowing their strongest and weakest part.',
  tips: [
    'Time is the main difficulty in this paper: 90 minutes for seven parts and 53 questions. Suggest a budget of about 35 minutes for Parts 1 to 4 and about 55 for the long texts, and keep to strict times today.',
    'Marks are not equal. Each question in Parts 5 and 6 is worth two marks and each Part 4 item up to two; Parts 1 to 3 and 7 are worth one mark a question. Students who run out of time on the long texts lose the most.',
    'Every task today is shortened so that all seven parts fit into the hour. Say so at the start, and say that in the exam each text is longer and has more questions.',
    'Collect scores per part on the board at the end without comparing students. Ask each one which part they will practise first, and why.',
  ],
  plan: [
    { min: 3, title: 'The paper', md: 'Show board page 1. Go through the seven parts and the method for each in three minutes. Ask which part students expect to find hardest.' },
    { min: 8, title: 'Parts 1 and 2', md: 'Show board page 2. Four minutes, alone, then check together. For each Part 1 item, ask which word next to the gap decides the answer.' },
    { min: 9, title: 'Parts 3 and 4', md: 'Show board page 3. Five minutes, alone, then check spelling and word counts together. Mark Part 4 out of two per item.' },
    { min: 9, title: 'Part 5', md: 'Show board page 4. Six minutes for the text and three questions. Check together and point to the lines that give each answer.' },
    { min: 9, title: 'Part 6', md: 'Show board page 5. Six minutes. Check together, naming the link before and after each gap.' },
    { min: 8, title: 'Part 7', md: 'Show board page 6. Five minutes. Check together and point to the words in each text that the questions paraphrase.' },
    { min: 9, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 5, title: 'Close', md: 'Each student writes their score for each part and names their strongest and weakest part in the chat. Set the homework.' },
  ],
  board: [
    { title: 'The paper', blocks: [
      { t: 'table', caption: 'C2 Proficiency Reading and Use of English: 90 minutes, 53 questions', explain: ['head', 'col1', 'col2'], head: ['Part', 'What you do', 'Method'], rows: [
        ['1', 'choose the best of four words for 8 gaps', 'test every option in the phrase; only one makes the collocation or idiom'],
        ['2', 'write one word in 8 gaps', 'decide what kind of word is missing, then think of fixed phrases'],
        ['3', 'change a word to fit 8 gaps', 'word class first, then a negative or a second change'],
        ['4', 'rewrite 6 sentences with a key word, in three to eight words', 'find what the key word forces, then count and reread'],
        ['5', 'answer 6 questions on a long text', 'find the lines, then choose the option that says the same thing'],
        ['6', 'put 7 paragraphs back into a long text, with one extra', 'check the links before and after each gap'],
        ['7', 'match 10 statements to sections or short texts', 'read the statements first and look for the idea, not the words'],
      ] },
      { t: 'text', md: 'Every task in this class is **shortened** so that all seven parts fit into the hour. In the exam, each part is longer and has the number of questions shown above.' },
    ] },
    { title: 'Parts 1 and 2', blocks: [
      { t: 'ex', kind: 'select', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 1), shortened to four gaps: read the text about a lighthouse, in order, and choose the answer which best fits each gap.', items: [
        { q: 'From the cliff path, walkers can just ___ a glimpse of the old lighthouse through the mist.', o: ['catch', 'take', 'give', 'make'], why: 'The collocation is *catch a glimpse of*.' },
        { q: 'Its last keeper, who left in 1982, would ___ at the sea for hours every evening, as if waiting for someone.', o: ['gaze', 'glance', 'glimpse', 'peer'], why: '*Gaze*: a long, thoughtful look. A glance is quick, and *peer* suggests difficulty in seeing.' },
        { q: 'Repairing the lamp during winter storms was part and ___ of the job.', o: ['parcel', 'package', 'portion', 'piece'], why: 'The binomial is fixed: *part and parcel of*.' },
        { q: 'When the light was automated, he was left ___ disappointed, though he rarely spoke of it.', o: ['bitterly', 'heavily', 'gravely', 'densely'], why: 'The strong collocation is *bitterly disappointed*.' },
      ] },
      { t: 'ex', kind: 'gap', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 2), shortened to five gaps: read the text about a new museum, in order. Think of the word which best fits each gap. Use only one word in each gap.', items: [
        { q: 'The museum opened in spring, and visitors have been arriving in dribs ___ drabs ever since.', a: ['and'], why: 'The binomial *in dribs and drabs*: a few at a time.' },
        { q: '___ had the doors opened than the first complaints about the café began.', a: ['No'], why: 'Inversion with *No sooner… than*.' },
        { q: 'Two plans had been proposed, a gallery and a car park, and the council chose the ___, to the dismay of local artists.', a: ['latter'], why: 'Reference: the artists are dismayed, so the council chose the second one, the car park.' },
        { q: 'Some residents wanted the old harbour office preserved, but the developers refused to ___ so.', a: ['do'], why: 'Substitution: *do so* replaces *preserve the office*.' },
        { q: 'It was not until the director resigned ___ the council agreed to review the plans.', a: ['that'], why: 'A cleft with *It was not until… that…*' },
      ] },
    ] },
    { title: 'Parts 3 and 4', blocks: [
      { t: 'ex', kind: 'wordform', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 3), shortened to five gaps: read the text about a satirist, in order. Use the word in capitals to form a word that fits each gap.', items: [
        { q: 'The satirist had an ___ ability to find the weak spot in any official statement.', base: 'canny', a: ['uncanny'], why: '*Uncanny*: so strong it seems almost unnatural.' },
        { q: 'Even his targets admitted that his columns were ___ funny,', base: 'resist', a: ['irresistibly'], why: 'Three changes: the prefix *ir-*, the suffix *-ible* and the adverb ending, before the adjective *funny*.' },
        { q: 'though they complained bitterly about his ___ of their words.', base: 'represent', a: ['misrepresentation'], why: 'A noun after *his*; *mis-* because they say he reported their words wrongly.' },
        { q: 'Some of his jokes were, by any standard, ___,', base: 'defend', a: ['indefensible'], why: 'An adjective with a negative prefix: impossible to defend.' },
        { q: 'yet it is ___ that a more cautious writer would have been read at all.', base: 'doubt', a: ['doubtful'], why: 'An adjective after *it is*: *it is doubtful that…*' },
      ] },
      { t: 'ex', kind: 'transform', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 4), shortened to four items: complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between three and eight words, including the word given.', items: [
        { q: 'I had never seen such a beautiful sunrise before.', cue: 'NEVER', gap: '___ such a beautiful sunrise.', a: ['Never before had I seen', 'Never had I seen'], why: 'Inversion after a negative adverb at the start.' },
        { q: 'He was given the job only because his uncle owned the company.', cue: 'ONLY', gap: 'It ___ his uncle owned the company that he was given the job.', a: ['was only because'], why: 'An *it*-cleft puts the reason in focus.' },
        { q: 'It is said that the castle was built in a single summer.', cue: 'REPUTED', gap: 'The castle ___ in a single summer.', a: ['is reputed to have been built'], why: 'Passive reporting with a perfect passive infinitive.' },
        { q: 'The report greatly understates the problem.', cue: 'FAR', gap: 'The problem ___ the report suggests.', a: ['is far more serious than', 'is far worse than', 'is far greater than', 'is far bigger than'], why: '*Understates* becomes a comparison: the problem is bigger than the report says.' },
      ] },
    ] },
    { title: 'Part 5', blocks: [
      { t: 'reading', title: 'The language of bad news', md: 'Companies rarely sack anyone these days; they *let people go*, as if the employees had been straining at a leash and the firm had finally, generously, released them. The phrase is worth pausing over, because it is not merely softer than the older word. It reverses the roles: the person who loses the job becomes the one who wanted to leave, and the employer becomes the one who grants a freedom nobody asked for.\n\nIt is tempting to dismiss all such language as hypocrisy, and to call for plain words everywhere. But euphemism has older and more respectable uses. We say that someone has *passed away* not to deceive but to soften; the listener knows exactly what has happened, and the gentler phrase is a small act of tact at a moment when bluntness would be cruel. Nobody is misled, and somebody is spared.\n\nThat, I think, is the test worth applying. When a hospital reports *a negative patient outcome*, the softening protects no one who is grieving; it protects the institution. The euphemism that spares the hearer is a courtesy. The one that spares the speaker is something closer to a lie told with a straight face.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 5), shortened to three questions: read the text and choose the answer which fits best according to the text.', items: [
        { q: 'What point does the writer make about the phrase *let people go*?', o: ['It presents the employer as doing the employees a favour.', 'It is more honest than the word it replaced.', 'It was introduced by employees who wanted to leave.', 'It is used less often than it once was.'], why: 'The employer *grants a freedom nobody asked for*: the roles are reversed.' },
        { q: 'In the second paragraph, the writer suggests that *passed away*', o: ['softens bad news without misleading the listener.', 'is a form of hypocrisy like *let people go*.', 'should be replaced by plainer words.', 'confuses listeners who do not know the phrase.'], why: '*Nobody is misled, and somebody is spared.*' },
        { q: 'What test does the writer propose for judging a euphemism?', o: ['whether it protects the listener or the speaker', 'whether it is shorter than the plain word', 'whether institutions or individuals use it', 'whether the listener can guess its meaning'], why: '*The euphemism that spares the hearer is a courtesy. The one that spares the speaker…*' },
      ] },
      { t: 'tip', md: 'Method for **Part 5**: the questions follow the order of the text. Find the lines for each question, decide the answer in your own words, then choose the option that says the same thing. Wrong options often repeat words from the text with a different meaning.' },
    ] },
    { title: 'Part 6', blocks: [
      { t: 'reading', title: 'Learning to stop', md: 'For the first ten years of my working life I wrote sentences that went on for as long as I could keep them going. I admired writers who did the same, and I assumed that length was a sign of seriousness.\n\n[gap one]\n\nI was offended, naturally. But when I read the article aloud, as she had suggested, I ran out of breath twice on the first page.\n\n[gap two]\n\nNone of this meant giving up long sentences altogether. A periodic sentence, which holds its main point back until the very end, can build a suspense that no short sentence can match.\n\n[gap three]\n\nToday I teach the same lesson to younger writers, and most of them resist it exactly as I did.\n\n[gap four]' },
      { t: 'reading', title: 'The removed paragraphs', md: '**A.** The trick, I came to see, is to use such a sentence only when the delay pays off: when the reader has something worth waiting for.\n\n**B.** Reading aloud is, of course, an old technique. Actors and preachers have relied on it for centuries, and many poets still will not publish a line they have not heard.\n\n**C.** My editor at the time did not share this view. She returned my first long article with a single comment in the margin: *Where does this sentence end, and why does it take so long to get there?*\n\n**D.** They, too, believe that length means depth. The latter, I tell them, comes from thinking, not from punctuation.\n\n**E.** That was the beginning of a long apprenticeship in rhythm. I learned to follow a long sentence with a short one. The short one did the work.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 6), shortened to four gaps: choose from paragraphs A to E the one which fits each gap. There is one extra paragraph which you do not need to use.', items: [
        { q: 'Which paragraph fits gap one?', o: ['C', 'A', 'B', 'D', 'E'], why: '*This view* is the belief that length means seriousness; *she* after the gap is the editor, and *I was offended* answers her comment.' },
        { q: 'Which paragraph fits gap two?', o: ['E', 'A', 'B', 'C', 'D'], why: '*That* refers to running out of breath; the short sentences in E lead to *None of this meant giving up long sentences*.' },
        { q: 'Which paragraph fits gap three?', o: ['A', 'B', 'C', 'D', 'E'], why: '*Such a sentence* refers to the periodic sentence; *the delay* is the main point held back.' },
        { q: 'Which paragraph fits gap four?', o: ['D', 'A', 'B', 'C', 'E'], why: '*They, too* refers to the younger writers who resist *as I did*. B is the extra paragraph: on topic, but nothing after it follows from it.' },
      ] },
    ] },
    { title: 'Part 7', blocks: [
      { t: 'text', md: '**A** *Maya:* People assume that a funny column begins with a joke. Mine begin with a grievance: a parking fine, a neighbour’s hedge. The humour comes later, once I have calmed down enough to see how absurd I am being. I rarely laugh while I write; when I do, the line usually gets cut, because it means I am pleased with myself rather than with the reader.\n\n**B** *Tom:* I learned more from readers who complained than from those who wrote in with praise. One woman wrote every week for a year to tell me I was not funny. She was, by and large, right, and in trying to prove her wrong I became a much better writer.\n\n**C** *Priya:* Understatement is my main tool. Calling a disastrous holiday *not entirely restful* does more than three paragraphs of complaint. The danger is that some readers take it literally, and I have received kind letters of sympathy about problems I made up.\n\n**D** *Leo:* Serious editors frown on puns, and I can see why: a bad one stops the reader dead. But a good one, placed where nobody expects it, is the closest thing in print to a shared laugh. I allow myself one per column, never more.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 7), shortened to five questions: which columnist (A, B, C or D) says this? Each columnist may be chosen more than once.', items: [
        { q: 'Some readers have misunderstood what I meant.', o: ['C', 'A', 'B', 'D'], why: '*Some readers take it literally… letters of sympathy about problems I made up*.' },
        { q: 'Criticism helped me to improve.', o: ['B', 'A', 'C', 'D'], why: '*In trying to prove her wrong I became a much better writer*.' },
        { q: 'I deliberately limit how often I use a certain device.', o: ['D', 'A', 'B', 'C'], why: '*One per column, never more*.' },
        { q: 'Finding my own writing amusing can be a warning sign.', o: ['A', 'B', 'C', 'D'], why: '*When I do, the line usually gets cut*.' },
        { q: 'I understand why a technique I use is disapproved of.', o: ['D', 'A', 'B', 'C'], why: '*Serious editors frown on puns, and I can see why*.' },
      ] },
      { t: 'tip', md: 'Method for **Part 7**: read all the statements first and underline the key idea in each. Then read one section at a time and match every statement it answers. The words will be different, and one section may be the answer to several statements.' },
    ] },
  ],
  activities: {
    one: { title: 'Strategy coach', md: 'Go back through each part with the student. For every wrong answer, ask how they chose it, then show the method that leads to the right one: the words around a Part 1 gap, the kind of word a Part 2 gap needs, the changes in a Part 3 word, the word count in Part 4, the lines in Part 5, the links in Part 6, the paraphrase in Part 7. Finish by writing together a one-line method for each part that the student keeps.' },
    small: { title: 'Item makers', md: 'Each student writes one Part 2 item using language from units 1 to 4 (a binomial, an inversion, a reference word, an idiom) and posts the sentence in the chat with the gap. The group solves each item and decides whether only one word is possible; if two words fit, the writer must change the sentence. The two best items go on the board.' },
  },
  homework: { book: 'u5:p1', md: 'Do lesson 1 of unit 5 (Pavement or sidewalk?). Then do your weakest part from today again in a book lesson of units 1 to 4, at exam timing (about one and a half minutes per question in Parts 1 to 4, about two minutes per question in Parts 5 and 6), and note which method helped most.' },
};
