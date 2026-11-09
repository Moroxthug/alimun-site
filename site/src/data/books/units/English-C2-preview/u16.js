// English C2, unit 16, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// The last unit of C2 and of the whole English course, modelled on English C1 unit 20: every part of Reading and Use of
// English (Parts 1 to 7) with method and practice, Writing Parts 1 and 2 under exam conditions, Listening and Speaking
// with method and timing, and the whole C2 Proficiency exam step by step, then how to keep improving after C2 and the
// final check. Marking is described in general terms only; some exam tasks are shortened to fit a page and say so.
export const UNIT = {
  id: 'u16',
  title: 'Ready for C2 Proficiency',
  goal: 'Use a clear method for every part of every paper of C2 Proficiency, write an essay on two texts and a Part 2 text in the time allowed, know the whole exam before the final check, and know how to keep improving after C2.',
  art: 'dragon',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing', 'listening', 'speaking'], topics: ['use-of-english', 'reading', 'cloze', 'word-formation', 'transformations', 'gapped-text', 'multiple-matching', 'essay', 'summary', 'listening', 'speaking', 'exam', 'lifelong-learning'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'Reading and Use of English, Parts 1 to 7',
      about: 'Learn a method for the four language parts and the three long texts of C2 Proficiency, and practise each one.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'The **Reading and Use of English** paper of C2 Proficiency lasts **1 hour 30 minutes** and has **seven parts**. Parts 1 to 4 test your control of the language; Parts 5 to 7 test reading of long, demanding texts.\n\n**Part 1, multiple-choice cloze**: a text with **eight gaps** and four options each. At C2 the options are often all real words with close meanings, so the answer depends on **collocation**, **fixed phrases** and **idiom** (*bear the **brunt***, *to no **avail***, *it **stands** to reason*).\n\n**Part 2, open cloze**: **eight gaps**, **one word** each, no options. Expect grammar words inside formal patterns: *much **as***, *were it not **for***, *let **alone***, *on no **account***.\n\n**Part 3, word formation**: **eight gaps**, each with a stem in capitals. Many answers need several changes at once (*PROPORTION → **disproportionately***).\n\n**Part 4, key word transformations**: **six items**. You complete a second sentence in **three to eight words**, including a key word that **must not change**. Each item can earn two marks, so half an answer is worth writing.' },
          { t: 'text', md: 'In **Part 1**, read the whole text first, then at each gap read **both sides**: the word after the gap often decides it (*bear the brunt **of***). Try every option in the sentence; three of them usually break a collocation.\n\nIn **Part 2**, ask what **kind** of word is missing before you ask which word: an auxiliary for an inversion, a preposition in a fixed phrase, a linker between clauses. Then read the next sentence too, because the meaning often depends on it.\n\nIn **Part 3**, decide the **word class**, then whether the meaning is **positive or negative**, then whether a noun is **plural**. Spelling counts.\n\nIn **Part 4**, work out what the key word **forces** and what else must change. Count your words (a contraction counts as two) and check that the new sentence means exactly what the first one meant, no more and no less.' },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['Choosing the Part 1 option that sounds grand', 'Choosing the one that collocates', 'Several options are real words; only one fits the phrase.'],
            ['unprecedent', 'unprecedented', 'Check the word class: an adjective is needed.'],
            ['Nine words in Part 4', 'Three to eight words, key word included', 'Contractions count as two words.'],
            ['DAWNED → dawn', 'DAWNED exactly as given', 'The key word never changes.'],
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 1): read the text about keeping a diary and decide which answer best fits each gap.', items: [
            { q: 'For centuries, diarists have written with no ___ of being read.', o: ['intention', 'purpose', 'aim', 'design'], why: '*With no intention of* + -ing.' },
            { q: 'Yet many of them, it ___ to reason, secretly hoped that someone would.', o: ['stands', 'holds', 'goes', 'follows'], why: 'The fixed phrase *it stands to reason*.' },
            { q: 'The best diaries ___ the brunt of their authors’ worst moods.', o: ['bear', 'carry', 'hold', 'take'], why: '*Bear the brunt of*.' },
            { q: 'They record events whose importance was far from a ___ conclusion at the time.', o: ['foregone', 'finished', 'closed', 'decided'], why: '*A foregone conclusion*: certain in advance.' },
            { q: 'Read later, they ___ light on ordinary lives that history books ignore.', o: ['shed', 'spread', 'give', 'drop'], why: '*Shed light on*.' },
            { q: 'Many people have tried, to no ___, to write in one every single day.', o: ['avail', 'use', 'point', 'gain'], why: '*To no avail*: without success.' },
            { q: 'Most ___ up abandoning the habit within weeks.', o: ['end', 'finish', 'close', 'stop'], why: '*End up* + -ing.' },
            { q: 'They come to ___ with the fact that discipline is rarer than good intentions.', o: ['terms', 'accord', 'acceptance', 'settlement'], why: '*Come to terms with*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 2): read the text about public libraries and think of the word which best fits each gap. Use only one word in each gap. (Shortened: six gaps instead of eight.)', items: [
            { q: 'Much ___ I love new technology, I still prefer the quiet of a public library.', a: ['as'], why: '*Much as* = although.' },
            { q: 'Were it not ___ libraries, many people would have no internet access at all.', a: ['for'], why: '*Were it not for* = if there were no.' },
            { q: 'Few politicians argue openly for closing them, ___ their funding continues to fall.', a: ['yet'], why: 'Contrast between two clauses: *yet*.' },
            { q: 'Librarians rarely receive the recognition they deserve, ___ alone the pay.', a: ['let'], why: '*Let alone*: still less.' },
            { q: 'On ___ account should a library be judged by its visitor numbers alone.', a: ['no'], why: '*On no account* + inversion.' },
            { q: 'It is high time we recognised ___ much they quietly contribute.', a: ['how'], why: '*How much* introduces the clause.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'wordform', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 3): use the word in capitals to form a word that fits the gap. (Shortened: six gaps instead of eight.)', items: [
            { q: 'The scale of the change was ___ in the town’s history.', base: 'precede', a: ['unprecedented'], why: '*Un-* + *precedent* + *-ed*.' },
            { q: 'His instructions were almost ___, full of jargon and abbreviations.', base: 'comprehend', a: ['incomprehensible'], why: '*In-* + *-ible*, with *d* becoming *s*.' },
            { q: 'Rising prices hit poorer households ___.', base: 'proportion', a: ['disproportionately'], why: 'Three changes: *dis-*, *-ate*, *-ly*.' },
            { q: 'She is ___ the most gifted player of her generation.', base: 'deny', a: ['undeniably'], why: '*Un-* + *-able* + *-ly*; *y* becomes *i*.' },
            { q: 'The book sets out to correct some common ___ about sleep.', base: 'conceive', a: ['misconceptions'], why: '*Mis-* + *conception*, plural.' },
            { q: 'Everyone will be paid the same, ___ of experience.', base: 'respect', a: ['irrespective'], why: '*Irrespective of*: without considering.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first. Do not change the word given. Use between three and eight words, including the word given.', items: [
            { q: 'Although I admire her work, I find her difficult to work with.', cue: 'MUCH', a: ['Much as I admire her work, I find her difficult to work with.'], why: '*Much as* = although, at the front of the clause.' },
            { q: 'He was about to leave when the phone rang.', cue: 'VERGE', a: ['He was on the verge of leaving when the phone rang.'], why: '*On the verge of* + -ing.' },
            { q: 'I only realised what she meant much later.', cue: 'DAWNED', a: ['It only dawned on me much later what she meant.', 'It was only much later that it dawned on me what she meant.', 'It dawned on me only much later what she meant.'], why: '*It dawned on me*: I realised. *Dawned* stays as given.' },
            { q: 'They did not consider the cost at all.', cue: 'ACCOUNT', a: ['They took no account of the cost.', 'They took no account of the cost at all.', 'They did not take the cost into account at all.', 'They didn’t take the cost into account at all.', 'They did not take account of the cost at all.'], why: '*Take no account of* or *take something into account*.' },
            { q: 'She was so tired that she could hardly keep her eyes open.', cue: 'SUCH', a: ['Such was her tiredness that she could hardly keep her eyes open.', 'Such was her exhaustion that she could hardly keep her eyes open.'], why: 'Fronted *such* + *be* + noun + *that*.' },
            { q: 'The minister’s resignation surprised everyone.', cue: 'SURPRISE', a: ['The minister’s resignation took everyone by surprise.', 'The minister’s resignation came as a surprise to everyone.', 'The minister’s resignation came as a complete surprise to everyone.'], why: '*Take someone by surprise* or *come as a surprise to*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Ninety minutes for seven parts is tight. A common plan is roughly **forty minutes for Parts 1 to 4** and **fifty for Parts 5 to 7**, which take longer to read. If an item is holding you up, write your best guess, mark it and come back: a blank never earns a mark.' },
        ],
        [
          { t: 'text', md: '**Part 5, multiple choice**: one long text and **six questions** with four options, in the order of the text. They test detail, opinion, attitude, purpose, the meaning of a phrase and what a word refers to.\n\n**Part 6, gapped text**: a long text with **seven paragraphs removed**. You choose from **eight**; one is not needed. The links are in reference words (*this*, *those slips*, *such an approach*), linkers, time and the first mention of names and ideas.\n\n**Part 7, multiple matching**: **ten questions** on one text in sections or several short texts. You find the section where each idea appears.\n\nAll three share one danger: **matching words instead of meaning**. The wrong option often repeats a word from the text; the right one usually **paraphrases**.' },
          { t: 'reading', title: 'Part 5 practice: the pleasure of difficult books', md: 'There is a particular kind of pleasure that only difficult books provide, and it is not, as their detractors assume, the pleasure of having finished them. Anyone who has read a demanding novel purely in order to say so knows how thin that satisfaction is. The real reward arrives earlier and less predictably: a sentence that had resisted you for a page suddenly opens, and you find that you have been changed slightly in the effort of understanding it.\n\nThis is unfashionable to say. We are encouraged to think of reading as consumption, and of a difficult book as a faulty product, one that has failed to deliver its contents efficiently. On that view, a writer who makes us work is guilty of a kind of discourtesy. Yet the comparison breaks down as soon as we look at it. No one complains that a mountain is badly designed because it is hard to climb.\n\nI do not mean that difficulty is a virtue in itself. Plenty of books are obscure because their authors had nothing clear to say. The test, I think, is whether the effort is returned with interest: whether, having worked, you see something you could not have seen without working.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 5): read the text and choose the answer which fits best. (Shortened: three questions instead of six.)', items: [
            { q: 'What does the writer say about the satisfaction of finishing a difficult book?', o: ['It is less rewarding than people assume.', 'It is the main reason people read such books.', 'It arrives earlier than expected.', 'It is felt mainly by critics.'], why: '*Anyone who has read a demanding novel purely in order to say so knows how thin that satisfaction is.*' },
            { q: 'The comparison with a mountain is used to', o: ['reject the idea that difficulty is a design fault', 'suggest that reading is a form of exercise', 'show that some books are not worth the effort', 'praise writers who avoid difficult subjects'], why: 'A mountain is not *badly designed* because it is hard: difficulty is not a fault.' },
            { q: 'In the final paragraph, the writer', o: ['sets a condition for when difficulty is worthwhile', 'withdraws the earlier argument', 'admits to preferring easy books', 'blames readers for finding books obscure'], why: '*The test… is whether the effort is returned with interest.*' },
          ] },
        ],
        [
          { t: 'reading', title: 'Part 6 practice: a dictionary built from evidence', md: 'When the editors of a great historical dictionary first planned it in the nineteenth century, they imagined the work would take about ten years.\n\n[gap one]\n\nThose slips arrived by the thousand, in every kind of handwriting, and each one had to be read, checked and filed before a single entry could be written.\n\n[gap two]\n\nIt was, in other words, a dictionary built from evidence rather than opinion. Its editors did not decide what a word should mean; they recorded what it had meant, in the words of those who had used it.\n\n[gap three]\n\nToday the same principle survives, although the slips have long since become a database.\n\nRemoved paragraphs:\n\n**A.** Their method was simple to state and almost impossible to carry out. Volunteers would read books and copy out, onto small paper slips, every sentence that showed a word in use.\n\n**B.** The result was that every definition could be traced back to real sentences, the earliest dated and quoted alongside the rest.\n\n**C.** That approach, radical at the time, has since become the standard for serious dictionaries everywhere.\n\n**D.** The editors therefore decided to rely entirely on their own knowledge of the language.' },
          { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 6): choose the paragraph which fits each gap. One paragraph is not needed. (Shortened: three gaps and four paragraphs instead of seven and eight.)', items: [
            { q: 'Which paragraph fits gap one?', o: ['A', 'B', 'C', 'D'], why: 'A introduces the *slips*; the next paragraph begins *Those slips*.' },
            { q: 'Which paragraph fits gap two?', o: ['B', 'A', 'C', 'D'], why: 'B describes the result; *in other words, a dictionary built from evidence* sums it up.' },
            { q: 'Which paragraph fits gap three?', o: ['C', 'A', 'B', 'D'], why: '*That approach* refers back to recording what words had meant; *Today the same principle survives* follows. D contradicts the whole text.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Part 7 practice: learning a language as an adult', md: '**A. Grace.** I came to Portuguese at forty, mostly through songs. For years I could sing far better than I could speak, which caused some confusion in shops. What finally helped was a weekly conversation with a neighbour who refused to switch to English, however much I begged.\n\n**B. Kenji.** My problem was perfectionism. I would not open my mouth until I had built the whole sentence in my head, by which time the conversation had moved on. It took a blunt teacher to tell me that a wrong sentence spoken is worth more than a perfect one kept to myself.\n\n**C. Ines.** Reading was my way in. I read detective novels I already knew in translation, so the plot carried me through the vocabulary. I still think it is the most underrated method there is, though I accept it did little for my pronunciation.\n\n**D. Tomasz.** I moved abroad for work and assumed that living there would do the rest. It did not. I spent two years speaking English with colleagues before admitting that living in a country and learning its language are not the same thing.' },
          { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 7): which person says each thing? The people may be chosen more than once. (Shortened: five questions instead of ten.)', items: [
            { q: 'Who realised that an assumption about learning was wrong?', o: ['D', 'A', 'B', 'C'], why: 'Tomasz: *assumed that living there would do the rest. It did not.*' },
            { q: 'Who benefited from someone’s refusal to make things easier?', o: ['A', 'B', 'C', 'D'], why: 'Grace: *a neighbour who refused to switch to English*.' },
            { q: 'Who admits a limitation of the method they recommend?', o: ['C', 'A', 'B', 'D'], why: 'Ines: *it did little for my pronunciation*.' },
            { q: 'Who describes being held back by a fear of mistakes?', o: ['B', 'A', 'C', 'D'], why: 'Kenji: *perfectionism*.' },
          ] },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'mei', items: [
            { a: 'Much as I admire her work, I find her difficult to work with.' },
            { a: 'It only dawned on me much later what she meant.' },
            { a: 'On no account should a library be judged by its visitor numbers alone.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'Writing against the clock',
      about: 'Plan, write and check an essay on two texts and a Part 2 text in the time allowed.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'The C2 Proficiency **Writing** paper lasts **1 hour 30 minutes** and has two parts, so you have about **45 minutes for each**: roughly ten to plan, thirty to write and five to check.\n\n**Part 1** is compulsory. You read **two short texts** on the same subject and write an **essay of 240 to 280 words** that **summarises and evaluates** the key points of both, and gives **your own view**. Each text usually has two key points, so there are about four ideas to cover. Use your own words: lifting phrases from the texts shows nothing of your range.\n\n**Part 2** offers a choice of task types: an **article**, a **letter**, a **report** or a **review**, in **280 to 320 words**. Choose the task where you know the format and have something real to say, not the one that looks easiest.' },
          { t: 'table', caption: 'The Part 2 text types at C2', explain: ['head', 'col1', 'col2'], head: ['Type', 'Reader and purpose', 'Shape and style'], rows: [
            ['article', 'readers of a magazine or website: interest, argue, entertain', 'a title, a hook, a personal voice, a memorable ending'],
            ['letter', 'an editor, an organisation or a senior reader: respond, argue, request', 'the right greeting and closing; the point early; courteous and direct'],
            ['report', 'a committee or manager: assess a situation and recommend', 'a title and headings; neutral; findings, then recommendations'],
            ['review', 'readers of a publication: describe, evaluate, recommend', 'enough description to judge by, a balanced view, a clear verdict'],
          ] },
        ],
        [
          { t: 'reading', title: 'Part 1 task and model essay', md: 'Task: Read the two texts below. Write an essay summarising and evaluating the key points from both texts. Use your own words throughout as far as possible, and include your own ideas in your answer.\n\n**Text 1.** Boredom has had a bad press. We treat it as a problem to be solved, usually with a screen, but a mind left without stimulation does not simply switch off. It wanders, and in wandering it makes connections it would never make under pressure. By filling every gap in the day, we may be starving the very process that produces original thought.\n\n**Text 2.** It is fashionable to praise boredom as a hidden source of creativity, but this romantic view overlooks what boredom feels like for most people. Persistent boredom tends to go with low mood and with poor choices made simply to escape it. A child stuck in a lesson that is far too easy is not quietly incubating genius; the child is being failed. Boredom is better understood as a signal that something needs to change.\n\n**Model essay**\n\nBoth texts consider whether boredom deserves its poor reputation, but they reach rather different conclusions. The first argues that an unoccupied mind is far from idle: left to wander, it forms unexpected connections, and our habit of filling every spare moment may therefore be suppressing creativity. The second writer, by contrast, dismisses this as a romantic notion, pointing out that persistent boredom tends to accompany low mood and rash decisions, and contends that it should be treated as a warning rather than a condition to encourage.\n\nTo my mind, the two positions are less incompatible than they first appear, largely because they describe different kinds of boredom. The first writer is surely right that brief, undemanding pauses are valuable; most people can recall a solution that came to them only once they had stopped searching for it. Yet that is a far cry from the chronic tedium the second writer has in mind. A pupil trapped for months in work that is beneath her is unlikely to emerge more creative; she is more likely to switch off altogether.\n\nThe weakness of the first text, then, is that it generalises from the pleasant idleness of a train journey to boredom in all its forms. The second, however, arguably goes too far in the opposite direction by implying that boredom has no value at all. On balance, I would argue that we should protect short periods of unstructured time while taking prolonged boredom seriously as a sign of unmet needs.' },
        ],
        [
          { t: 'text', md: 'Look at how the model works. The **first paragraph summarises** both texts: two key points from each, in new words (*an unoccupied mind is far from idle* for *does not simply switch off*). The **second and third paragraphs evaluate**: where each writer is right, where each goes too far, and why. The **last sentence** gives a clear view of the writer’s own.\n\nEvaluation is what separates a C2 essay from a summary. Do not only report that writer A says X; say whether X is **convincing**, **overstated**, **true only in some cases** or **beside the point**, and give a reason. Reporting verbs carry much of this work: *argues*, *contends*, *dismisses*, *concedes*, *overlooks*, *generalises from*.' },
          { t: 'ex', kind: 'choice', h: 'Read the model essay. Choose the correct answer.', items: [
            { q: 'What does the first paragraph do?', o: ['It summarises the key points of both texts in new words.', 'It gives only the writer’s own opinion.', 'It copies the main sentences of each text.'], why: 'A summary of both, paraphrased.' },
            { q: 'How does the essay evaluate the first text?', o: ['It accepts part of its argument and says where it generalises too far.', 'It rejects it completely.', 'It does not evaluate it.'], why: '*Surely right that brief pauses are valuable… The weakness… is that it generalises.*' },
            { q: 'What is the essay’s own position?', o: ['Short pauses are worth protecting, but long boredom is a warning sign.', 'Boredom is always harmful.', 'Boredom is the main source of creativity.'], why: 'The final sentence combines the two views with a reason.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes under time pressure', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['Summarising one text and forgetting the other', 'Covering the key points of both', 'Part 1 is about two texts.'],
            ['Copying sentences from the texts', 'Paraphrasing the ideas', 'Copied language does not show your range.'],
            ['Only summarising', 'Summarising and evaluating, with your own view', 'Evaluation is half the task.'],
            ['Writing until the last minute', 'Five minutes kept for checking', 'Small errors are the easiest marks to win back.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Writing Part 2): choose the best sentence for each task.', items: [
            { q: 'The opening of an article for a culture magazine on why people reread books:', o: ['Why would anyone return to a book whose ending they already know?', 'The purpose of this report is to examine rereading.', 'Dear Sir or Madam, I am writing about books.'], why: 'An article hooks the reader, often with a question.' },
            { q: 'A sentence for a letter to the editor of a newspaper:', o: ['While I share your correspondent’s concern, I cannot accept his conclusion.', 'Hey, loved your paper yesterday!', 'Findings: most people disagree.'], why: 'Courteous, direct and formal.' },
            { q: 'A heading and opening for a report to a college committee:', o: ['Recommendations: It is recommended that the library extend its opening hours.', 'What a wonderful library we have!', 'Once upon a time, the library closed early.'], why: 'A report uses headings and neutral, impersonal language.' },
            { q: 'The verdict of a review of an exhibition:', o: ['For all its flaws, this is an exhibition that rewards a second visit.', 'The exhibition has paintings in it.', 'I am writing to complain about the gallery.'], why: 'A review ends with a clear, balanced judgement.' },
          ] },
        ],
        [
          { t: 'text', md: 'In the format of the C2 Proficiency exam (Writing Part 1): write an essay of **240 to 280 words** on the two texts below and send it to your teacher, who will correct it. Allow yourself **45 minutes**.\n\n*Text 1. Charging for entry to national museums keeps out exactly the people who would benefit most from them. Free entry treats culture as a public good, like a park, and the result is fuller galleries and more first-time visitors.*\n\n*Text 2. Nothing is truly free. When museums cannot charge, they depend on governments whose priorities change, and exhibitions and conservation suffer. A modest fee, with free days for those who need them, may protect collections better than a principle.*' },
          { t: 'text', md: 'Then, on another day, in the format of the C2 Proficiency exam (Writing Part 2): write a **review** of **280 to 320 words** in **45 minutes**, and send it to your teacher.\n\n*A cultural website invites reviews with the title **A book, film or exhibition that changed my mind**. Describe the work briefly, explain how it changed your view of something, and say who else would benefit from it.*' },
          { t: 'tip', art: 'mug', md: 'Before you send each text, read it once for **content** (both texts summarised and evaluated, your own view; or every part of the Part 2 task) and once for **language**. Your teacher marks it, in general terms, on content, effect on the reader, organisation and language, like the examiners.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'lena', items: [
            { a: 'The second writer, by contrast, dismisses this as a romantic notion.' },
            { a: 'The two positions are less incompatible than they first appear.' },
            { a: 'On balance, I would argue that we should protect short periods of unstructured time.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'Listening and Speaking',
      about: 'Use a method for the four Listening parts and the three Speaking parts, and know what the examiner listens for.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'The **Listening** paper lasts **about 40 minutes** and has four parts. You hear each recording **twice**.\n\n**Part 1**: **three short extracts**, each with **two multiple-choice questions** (three options). **Part 2**: a monologue with **nine sentences to complete** with a word or short phrase you hear. **Part 3**: a long interview or discussion with **five multiple-choice questions** (four options). **Part 4**: **five short monologues** on one theme and **two tasks**: for each speaker you choose from a list of eight in Task One and from another list of eight in Task Two.\n\nAt C2 the questions test **attitude, opinion, purpose and implication** as much as facts, as you saw in unit 15. Use the first listening to answer and the second to check.' },
          { t: 'table', caption: 'A method for each part', explain: ['head', 'col0', 'col1', 'col2'], head: ['Part', 'Before you listen', 'While you listen'], rows: [
            ['Part 1', 'read the questions and underline what each asks: feeling, purpose, agreement', 'listen for what speakers mean, not only the words they use'],
            ['Part 2', 'predict the kind of word for each gap', 'write the exact words you hear; check spelling'],
            ['Part 3', 'read the questions in order; they follow the recording', 'reject each wrong option for a reason'],
            ['Part 4', 'read both lists and think of paraphrases', 'do both tasks on each listening, or one task per listening'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'Part 1 practice: two friends discuss a documentary', lines: [
            { who: 'Elena', s: 'Did you see the documentary on memory last night?' },
            { who: 'Lucas', s: 'I did. I expected the usual tricks for remembering names, but it was far more unsettling than that.' },
            { who: 'Elena', s: 'The part about false memories, you mean? People absolutely certain of things that never happened.' },
            { who: 'Lucas', s: 'Exactly. I spent the rest of the evening wondering which of my own favourite stories are true. Though I suspect the programme overstated it a little. Most of what we remember is roughly right.' },
            { who: 'Elena', s: 'Roughly right is a rather comforting phrase for something so important.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Listening Part 1): choose the answer which fits best. (Shortened: one extract instead of three.)', items: [
            { q: 'How did Lucas react to the documentary?', o: ['It disturbed him more than he had expected.', 'It taught him useful techniques.', 'It bored him because he knew the subject.'], why: '*Far more unsettling than that.*' },
            { q: 'What does Elena imply about Lucas’s final point?', o: ['She finds his reassurance unconvincing.', 'She agrees completely.', 'She thinks he has misunderstood the programme.'], why: '*Roughly right is a rather comforting phrase*: gentle irony.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'Part 4 practice: five people talk about changing career', lines: [
            { who: 'Amara', s: 'I had been an accountant for twelve years when my firm merged and my job simply vanished. Retraining as a nurse at my age was humbling. The hardest part wasn’t the studying; it was being the least experienced person in every room after years of being the expert.' },
            { who: 'Joseph', s: 'Nobody forced me out. I just realised one day that I could no longer explain to my children what I actually did all day, so I became a carpenter. The money was the real shock. I expected to earn less, but not to worry about it every month.' },
            { who: 'Leila', s: 'My doctor told me plainly that if I carried on working those hours, I would not stay well for long. So I moved into teaching. What I hadn’t bargained for was how exhausting it is to be watched by thirty people all day.' },
            { who: 'Callum', s: 'I had always wanted to cook professionally, and when my grandfather left me a little money, there was no excuse left. Kitchens are tough, though. What I found hardest was the hierarchy: taking orders from people half my age.' },
            { who: 'Fatima', s: 'I was offered a post abroad that combined my old field with something completely new, and I couldn’t turn it down. The work was fine. It was the isolation that nearly defeated me: no friends, a language I barely spoke and long winter evenings.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Listening Part 4), Task One: why did each speaker change career? (Shortened: four options for each speaker instead of a list of eight.)', items: [
            { q: 'Amara', o: ['losing her job', 'a health warning', 'an inheritance', 'boredom'], why: '*My job simply vanished.*' },
            { q: 'Joseph', o: ['losing a sense of purpose', 'losing his job', 'wanting more money', 'pressure from family'], why: 'He could not explain what he *actually did all day*.' },
            { q: 'Leila', o: ['a health warning', 'an unexpected offer', 'losing her job', 'wanting to travel'], why: '*My doctor told me plainly…*' },
            { q: 'Callum', o: ['an inheritance', 'a health warning', 'losing his job', 'an unexpected offer'], why: '*My grandfather left me a little money.*' },
            { q: 'Fatima', o: ['an unexpected offer', 'an inheritance', 'losing a sense of purpose', 'a health warning'], why: '*I was offered a post abroad.*' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Task Two: what did each speaker find hardest? (Shortened: four options for each speaker.)', items: [
            { q: 'Amara', o: ['losing her status as an expert', 'money worries', 'loneliness', 'long hours'], why: '*The least experienced person in every room.*' },
            { q: 'Joseph', o: ['money worries', 'a rigid hierarchy', 'being constantly observed', 'loneliness'], why: '*Not to worry about it every month.*' },
            { q: 'Leila', o: ['being constantly observed', 'money worries', 'loneliness', 'losing her status as an expert'], why: '*Watched by thirty people all day.*' },
            { q: 'Callum', o: ['a rigid hierarchy', 'loneliness', 'money worries', 'being constantly observed'], why: '*Taking orders from people half my age.*' },
            { q: 'Fatima', o: ['loneliness', 'a rigid hierarchy', 'losing her status as an expert', 'money worries'], why: '*The isolation that nearly defeated me.*' },
          ] },
        ],
        [
          { t: 'text', md: 'The **Speaking** test lasts **about 16 minutes**, usually with another candidate and two examiners: one talks to you, the other only listens and assesses.\n\n**Part 1, interview**: a few questions about you, your life and your views. Answer naturally and add a reason or detail, but keep it short. **Part 2, collaborative task**: you and your partner look at some pictures. First you talk together briefly about one or two of them, then about all of them, working towards a **decision**. **Part 3, long turn**: each of you receives a **card with a question** and some ideas, and speaks **alone for about two minutes**. The examiner then asks your partner a question about what you said, and finally all three of you discuss the wider topic.\n\nIn general terms, the examiners listen for the **range and accuracy** of your grammar and vocabulary, how well you **organise** what you say, your **pronunciation**, and how well you **interact**: listening, responding, inviting your partner in and moving the discussion forward.' },
          { t: 'dialogue', title: 'Speaking Part 2: a model collaborative task', lines: [
            { who: 'Examiner', s: 'Here are some pictures of people learning in different places. A city is planning a campaign to encourage adults to keep learning. Talk together about what each picture shows about learning, then decide which one would work best for the campaign.' },
            { who: 'Grace', s: 'Shall we start with the workshop? What strikes me is that nobody is looking at a book, and yet they’re plainly learning a great deal.' },
            { who: 'Kenji', s: 'True, and it suggests learning can be practical and sociable. The library picture, by contrast, is rather solitary. Would that appeal to someone who left school with bad memories?' },
            { who: 'Grace', s: 'Probably not. Though some people find that quiet reassuring. What did you make of the online class?' },
            { who: 'Kenji', s: 'Convenient, but a bit anonymous for a campaign. If I had to choose, I’d go for the workshop. It shows that learning doesn’t have to look like school.' },
            { who: 'Grace', s: 'I’m inclined to agree. Shall we settle on that?' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Speaking Part 2): what makes the model successful?', items: [
            { q: 'Grace’s opening question “Shall we start with the workshop?” shows', o: ['that she manages the discussion and involves her partner', 'that she wants to speak alone', 'that she has not understood the task'], why: 'Interaction: she proposes a way in and invites Kenji.' },
            { q: 'How do they finish?', o: ['They reach a decision and check that they agree.', 'They stop when the time runs out, without deciding.', 'They ask the examiner to decide.'], why: 'The task asks for a decision: *Shall we settle on that?*' },
          ] },
          { t: 'table', caption: 'Common mistakes in Speaking', explain: ['head', 'col0', 'col1'], head: ['Not this', 'But this'], rows: [
            ['A memorised speech in Part 1', 'Natural answers with one reason or detail'],
            ['Talking without looking at your partner in Part 2', 'Responding to what your partner says and asking their view'],
            ['Reading the ideas on the Part 3 card as a list', 'Using them as a starting point, with your own ideas too'],
            ['Stopping after thirty seconds of the long turn', 'Developing the answer for about two minutes'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'Speaking Part 3: a model long turn', lines: [
            { who: 'Examiner', s: 'Kenji, your card says: How important is it to keep learning throughout life? You can use the ideas on the card if you like: work, health, relationships. Please start when you are ready.' },
            { who: 'Kenji', s: 'I’d like to begin with work, since that’s where the case is most obvious. Jobs change so quickly now that what you learn at twenty may be of little use at forty, so continuing to learn is less a luxury than a necessity. But I’d argue the more interesting reasons lie elsewhere. Learning something difficult seems to keep the mind supple, and a class is one of the few places adults meet people outside their usual circle. That said, I’d be wary of turning it into a duty. People who are exhausted by work and family hardly need to be told they ought to be studying as well. So my answer would be that it matters a great deal, provided it’s something people choose rather than something imposed on them.' },
            { who: 'Examiner', s: 'Thank you. Grace, do you think employers should pay for their staff to keep learning?' },
            { who: 'Grace', s: 'Up to a point. It’s in their interest, after all. But if they pay only for skills they need, people may never learn anything for its own sake.' },
          ] },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'kofi', items: [
            { a: 'I’d like to begin with work, since that’s where the case is most obvious.' },
            { a: 'That said, I’d be wary of turning it into a duty.' },
            { a: 'Shall we start with the workshop? What strikes me is that nobody is looking at a book.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'The C2 Proficiency exam, step by step',
      about: 'Walk through every paper of C2 Proficiency, then see how to keep improving after C2 and what the final check is.',
      art: 'dragon',
      spreads: [
        [
          { t: 'text', md: 'You have now studied all the language of C2, the highest level of the scale. This lesson puts the whole **C2 Proficiency** exam in one place, so that nothing on the day is a surprise.\n\n**Reading and Use of English** (1 hour 30 minutes, seven parts): multiple-choice cloze, open cloze, word formation and key word transformations, then multiple choice on a long text, a gapped text and multiple matching. **Writing** (1 hour 30 minutes, two parts): the essay on two texts, then an article, letter, report or review. **Listening** (about 40 minutes, four parts, everything heard twice). **Speaking** (about 16 minutes, three parts, usually in pairs).\n\nThe written papers are usually taken on one day, and Speaking may be on the same day or a different one.' },
          { t: 'table', caption: 'C2 Proficiency at a glance', explain: ['head', 'col0', 'col2'], head: ['Paper', 'Parts', 'Time'], rows: [
            ['Reading and Use of English', '7', '1 h 30 min'],
            ['Writing', '2', '1 h 30 min'],
            ['Listening', '4', 'about 40 min'],
            ['Speaking', '3', 'about 16 min, usually in pairs'],
          ] },
        ],
        [
          { t: 'text', md: 'How is it marked? In general terms, you receive a **score for each skill** (reading, use of English, writing, listening and speaking) and an **overall result** that reflects all of them together, so a stronger paper can make up for a weaker one. Writing and Speaking are assessed by trained examiners on the areas you met in this unit; the other papers have fixed answers.\n\nThat tells you how to spend the last weeks: work on **every** paper, not only your favourite, and practise under **real timing**, because time is what most candidates find hardest at this level.' },
          { t: 'table', caption: 'Common mistakes on exam day', explain: ['head', 'col0', 'col1'], head: ['Not this', 'But this'], rows: [
            ['Spending half the Reading time on Parts 1 to 4', 'About forty minutes on Parts 1 to 4, the rest on Parts 5 to 7'],
            ['Writing the Part 1 essay without evaluating', 'Summarising both texts and evaluating them'],
            ['Panicking at a word you missed in Listening', 'Following the idea and using the second listening'],
            ['Giving short answers in the long turn', 'Developing your answer for about two minutes'],
            ['Leaving any answer blank', 'Always writing your best guess'],
          ] },
          { t: 'ex', kind: 'match', h: 'Match the exam part and what you do.', pairs: [
            ['Reading and Use of English Part 4', 'rewrite a sentence in three to eight words with a key word'],
            ['Reading and Use of English Part 6', 'put seven removed paragraphs back, with one extra'],
            ['Writing Part 1', 'summarise and evaluate two texts'],
            ['Listening Part 2', 'complete nine sentences with words you hear'],
            ['Listening Part 4', 'do two matching tasks on five speakers'],
            ['Speaking Part 3', 'speak alone for about two minutes from a question card'],
          ] },
        ],
        [
          { t: 'text', md: 'In the last weeks, take at least one **full practice exam** under exam conditions; this course has one in class before the final check. Mark it honestly, and spend the remaining time on the parts that cost you most. The day before, stop studying early. Check the time and place, your identity document and what you may bring, and sleep.\n\nOn the day, read every instruction, even for parts you know well. Keep an eye on the clock without staring at it. Between papers, do not compare answers with other candidates: it unsettles you and changes nothing. In the Speaking test, remember that your partner is not your rival. Helping the conversation along helps you both.' },
        ],
        [
          { t: 'text', md: 'What comes after C2? There is **no higher level** on the scale, and no level test to move up. But language does not stop at a certificate. Even native speakers keep learning words, registers and styles all their lives, and a language you stop using slowly loses its edge.\n\nThe most reliable way forward is to **use English for something you care about**: read in a field you love, from novels to law reports, and notice how its writers build their sentences. Keep a notebook of **collocations and phrases**, not single words. **Listen widely**, to accents you find difficult and to fast, unscripted speech. **Write for real readers**: reviews, reports at work, letters to editors; feedback from a real audience teaches what no exercise can. And try **specialised registers** you have not mastered yet: legal drafting, academic writing in your discipline, the language of a profession.\n\nAt C2 progress is measured less by new grammar than by **precision, ease and range**: saying exactly what you mean, in the right tone, without effort.' },
          { t: 'examples', items: [
            { s: 'I read **one long article a day** in a field I care about.', n: 'Steady, interested input beats occasional cramming.' },
            { s: 'I keep a notebook of **phrases, not words**: *bear the brunt of*, *a far cry from*.', n: 'Collocations are what make English sound natural.' },
            { s: 'I **write for a real reader** once a week: a review, a report, a letter.', n: 'Real readers give the most honest feedback.' },
          ] },
        ],
        [
          { t: 'text', md: 'The course ends with a **final check** in class. It covers everything in this book: grammar, vocabulary, reading, writing, listening and speaking. It is not a gate, because there is no level after C2. Its purpose is to show you and your teacher where you stand, which parts of the exam you are ready for, and what to keep working on. Your teacher will tell you the result privately and suggest what to focus on next.\n\nYou started this course at the first level and have reached the last. Whatever you do with your English now, you have the method to keep improving on your own.' },
          { t: 'ex', kind: 'transform', h: 'A last round in the format of Reading and Use of English Part 4: complete the second sentence, using the word given and three to eight words.', items: [
            { q: 'Without your support, I would never have finished the course.', cue: 'BEEN', a: ['Had it not been for your support, I would never have finished the course.', 'If it had not been for your support, I would never have finished the course.', 'If it hadn’t been for your support, I would never have finished the course.'], why: '*Had it not been for* + noun = without, in a past conditional.' },
            { q: 'We had only just started when the lights went out.', cue: 'SOONER', a: ['No sooner had we started than the lights went out.'], why: '*No sooner had* + subject + past participle + *than*.' },
            { q: 'This is very different from what we expected.', cue: 'CRY', a: ['This is a far cry from what we expected.'], why: 'The idiom *a far cry from*.' },
          ] },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'sofia', items: [
            { a: 'Had it not been for your support, I would never have finished the course.' },
            { a: 'At C2, progress is measured by precision, ease and range.' },
            { a: 'Whatever I do with my English now, I have the method to keep improving.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the word that best fits each gap.', items: [
      { q: 'Small businesses bore the ___ of the new tax.', o: ['brunt', 'weight', 'force', 'blow'], why: '*Bear the brunt of*.' },
      { q: 'They searched for hours, but to no ___.', o: ['avail', 'use', 'point', 'gain'], why: '*To no avail*.' },
      { q: 'The result was a foregone ___.', o: ['conclusion', 'decision', 'ending', 'finish'], why: '*A foregone conclusion*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
      { q: 'Were it not ___ the rain, we would have stayed longer.', a: ['for'], why: '*Were it not for*.' },
      { q: 'He can barely boil an egg, ___ alone cook a dinner.', a: ['let'], why: '*Let alone*.' },
      { q: '___ as I admire him, I cannot support his plan.', a: ['Much'], why: '*Much as* = although.' },
    ] },
    { t: 'ex', kind: 'wordform', h: 'Use the word in capitals to form a word that fits the gap.', items: [
      { q: 'The flood caused ___ damage to the old town.', base: 'precede', a: ['unprecedented'], why: '*Un-* + *precedent* + *-ed*.' },
      { q: 'Tickets cost the same, ___ of age.', base: 'respect', a: ['irrespective'], why: '*Irrespective of*.' },
      { q: 'The article corrects several popular ___.', base: 'conceive', a: ['misconceptions'], why: '*Mis-* + *conception*, plural.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Complete the second sentence, using the word given and three to eight words.', items: [
      { q: 'I was about to give up when the answer came to me.', cue: 'VERGE', a: ['I was on the verge of giving up when the answer came to me.'], why: '*On the verge of* + -ing.' },
      { q: 'I only understood the joke the next morning.', cue: 'DAWNED', a: ['It only dawned on me the next morning what the joke meant.', 'It was only the next morning that the joke dawned on me.'], why: '*Dawn on someone*: become clear to them.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the paper and what it contains.', pairs: [
      ['Reading and Use of English', 'seven parts, language and long texts'],
      ['Writing', 'an essay on two texts and one Part 2 text'],
      ['Listening', 'four parts, each heard twice'],
      ['Speaking', 'three parts, usually with a partner'],
    ] },
    { t: 'ex', kind: 'choice', h: 'Which is right for C2 Proficiency?', items: [
      { q: 'The Writing Part 1 essay should be', o: ['240 to 280 words', '220 to 260 words', '140 to 190 words'], why: 'Part 1: 240 to 280 words.' },
      { q: 'A Part 2 task should be', o: ['280 to 320 words', '240 to 280 words', 'about 400 words'], why: 'Part 2: 280 to 320 words.' },
      { q: 'In Speaking Part 3 each candidate', o: ['speaks alone for about two minutes from a question card', 'describes three photographs', 'reads a text aloud'], why: 'The long turn from a question card.' },
    ] },
  ],
};
