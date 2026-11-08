// English C1, unit 20, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// The last unit of C1, modelled on English B2 unit 16: every part of Reading and Use of English (Parts 1 to 8) with method
// and practice, Writing Parts 1 and 2 under exam conditions, and the whole C1 Advanced exam step by step, with a look
// ahead to C2 Proficiency and the level test for moving up. Marking is described in general terms only.
export const UNIT = {
  id: 'u20',
  title: 'Ready for C1 Advanced and beyond',
  goal: 'Use a clear method for every part of Reading and Use of English, write an essay and a Part 2 text in the time allowed, and know every part of the C1 Advanced exam before the level test for C2.',
  art: 'dragon',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing', 'speaking', 'listening'], topics: ['use-of-english', 'reading', 'cloze', 'word-formation', 'transformations', 'gapped-text', 'multiple-matching', 'essay', 'proposal', 'exam'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'Parts 1 to 4: the language papers',
      about: 'Learn a method for the four Use of English parts of C1 Advanced and the grammar and vocabulary they test most.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'The **Reading and Use of English** paper of C1 Advanced has eight parts. The first four test your control of the language itself, and they reward everything you have studied in this book.\n\n**Part 1, multiple-choice cloze**: a text with **eight gaps** and four options for each. The options usually have similar meanings, so the answer depends on **collocation** (*a **heated** debate*, not *a hot debate*), **fixed phrases** (*on the **verge** of*), **dependent prepositions** (***prone** to*) or a fine difference of meaning (*reluctant* or *unwilling*).\n\n**Part 2, open cloze**: eight gaps and no options. Each gap takes **one word**, nearly always a grammar word: an auxiliary, a preposition, a relative pronoun, a linker, a quantifier, or a word in a fixed phrase such as *by **no** means* or ***as** far as I know*.\n\n**Part 3, word formation**: eight gaps, each with a stem word in capitals. At C1, many answers need **two or three changes**: a prefix, a suffix and sometimes an internal change (*SUSTAIN → **unsustainably***, *DEPEND → **interdependence***).\n\n**Part 4, key word transformations**: six items. You complete a second sentence with **three to six words**, including a key word you must not change. Each item can earn **two marks**.' },
          { t: 'table', caption: 'What Parts 1 to 4 test most', explain: ['head', 'col0', 'col1'], head: ['Part', 'What it tests', 'Examples from this book'], rows: [
            ['Part 1', 'collocation, fixed phrases, dependent prepositions, shades of meaning', 'a steep learning curve, conducive to, at loggerheads'],
            ['Part 2', 'auxiliaries, prepositions, linkers, relative words, fixed phrases', 'whereby, notwithstanding, so as not to, by no means'],
            ['Part 3', 'prefixes, suffixes, negative forms, internal changes', 'misinterpretation, irreplaceable, unsustainably'],
            ['Part 4', 'grammar structures and fixed expressions, two changes at once', 'Had I known, is said to have, it wasn’t until, see eye to eye'],
          ] },
        ],
        [
          { t: 'text', md: 'Each part has a method that saves time and marks.\n\nIn **Part 1**, read the whole text first for its gist. At each gap, read the words **on both sides**: the word after the gap often decides it (*prone **to***, *in **spite** of*). Try all four options in the sentence before you choose; three of them will usually break a collocation or a pattern.\n\nIn **Part 2**, ask what **kind** of word is missing before you ask which word. Is the sentence missing its verb? Then an auxiliary. Does a clause need joining? Then a linker or relative word. Check the meaning: *although* and *despite* both show contrast, but only one fits the grammar.\n\nIn **Part 3**, decide the **word class** first (noun, adjective, adverb, verb), then whether the meaning is **positive or negative**, then whether a noun needs to be **plural**. Spell carefully: a wrong letter loses the mark.\n\nIn **Part 4**, find what the key word **forces**, then what else must change. Count your words (contractions count as two) and read the whole sentence back to check it means exactly the same.' },
          { t: 'examples', items: [
            { s: 'The proposal sparked a **heated** debate. (heated / hot / warm / burning)', n: 'Part 1: only *heated* collocates with *debate*.' },
            { s: 'She is by **no** means the only person to complain.', n: 'Part 2: a fixed phrase, *by no means*.' },
            { s: 'The town grew **unsustainably** fast in the 1990s. (SUSTAIN)', n: 'Part 3: three changes, *un-* + *-able* + *-ly*.' },
            { s: 'I didn’t realise until later. (WAS) → It **was not until later that I** realised.', n: 'Part 4: a cleft with *not until*, six words.' },
            { s: 'If I had known, I would have helped. (HAD) → **Had I known**, I would have helped.', n: 'Part 4: inversion in a conditional.' },
            { s: 'People believe she left the country. (BELIEVED) → She **is believed to have left** the country.', n: 'Part 4: passive reporting with a perfect infinitive.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['Choosing the Part 1 option that “sounds right” alone', 'Reading the words after the gap', 'The next word often fixes the answer.'],
            ['in spite (Part 2, one gap)', 'despite', 'One gap, one word.'],
            ['sustainible', 'sustainable', 'Spelling counts in Part 3.'],
            ['A singular noun after many or several', 'Checking whether the noun must be plural', 'Some Part 3 answers need a final *-s*.'],
            ['Seven words in Part 4', 'Three to six words, key word included', 'Contractions count as two words.'],
            ['Changing the key word: KNOW → knew', 'Using KNOW exactly as given', 'The key word never changes.'],
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 1): choose the word that best fits each gap in this text about working from home.', items: [
            { q: 'When offices closed, many companies were forced to ___ their assumptions about where work could be done.', o: ['revisit', 'return', 'recall', 'repeat'], why: '*Revisit an assumption*: think about it again.' },
            { q: 'For some employees, home proved far more ___ to concentration than an open-plan office.', o: ['conducive', 'helpful', 'useful', 'positive'], why: '*Conducive to*: only this option takes *to* with this meaning.' },
            { q: 'Others found that the line between work and rest became increasingly ___.', o: ['blurred', 'faint', 'dim', 'misty'], why: '*A blurred line* is the fixed collocation.' },
            { q: 'Managers were, on the ___, slower to adapt than their teams.', o: ['whole', 'total', 'entire', 'complete'], why: 'The fixed phrase *on the whole*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 2): write one word in each gap.', items: [
            { q: 'The town started a scheme ___ residents share their tools with each other.', a: ['whereby'], why: '*Whereby*: a formal relative word meaning *by which*.' },
            { q: '___ having little money, the volunteers kept the library open.', a: ['Despite'], why: 'One word with *-ing*: *despite*.' },
            { q: 'It was by ___ means an easy decision.', a: ['no'], why: 'Fixed phrase: *by no means*.' },
            { q: 'Little ___ they know how popular it would become.', a: ['did'], why: 'Inversion after *little*: *did they know*.' },
            { q: 'She left early so ___ not to miss the last train.', a: ['as'], why: '*So as not to* for a negative purpose.' },
          ] },
          { t: 'ex', kind: 'wordform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 3): use the word in capitals to form a word that fits the gap.', items: [
            { q: 'The report blamed the delay on a simple ___ of the instructions.', base: 'interpret', a: ['misinterpretation'], why: 'Prefix *mis-* and suffix *-ation*.' },
            { q: 'Old trees are ___: once cut down, they take centuries to grow back.', base: 'replace', a: ['irreplaceable'], why: 'Negative *ir-* and *-able*.' },
            { q: 'The region has grown ___ in recent years, using far more water than it has.', base: 'sustain', a: ['unsustainably'], why: 'An adverb with three changes.' },
            { q: 'The ___ of the two economies means a crisis in one quickly affects the other.', base: 'depend', a: ['interdependence'], why: 'Prefix *inter-* and the noun *-ence*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first. Use the word given and three to six words, including the word given.', items: [
            { q: 'I only realised the truth when I read her letter.', cue: 'UNTIL', a: ['It was not until I read her letter that I realised the truth.', 'It wasn’t until I read her letter that I realised the truth.', 'Not until I read her letter did I realise the truth.'], why: 'A cleft with *not until*, or inversion after *not until*.' },
            { q: 'If you need any help, please call me.', cue: 'SHOULD', a: ['Should you need any help, please call me.'], why: 'Inverted conditional: *Should you need*.' },
            { q: 'People say the painter destroyed his early work.', cue: 'SAID', a: ['The painter is said to have destroyed his early work.'], why: 'Passive reporting with a perfect infinitive.' },
            { q: 'The new road had almost no effect on traffic.', cue: 'HARDLY', a: ['The new road had hardly any effect on traffic.'], why: '*Hardly any* = almost no.' },
            { q: 'It was a mistake for us to ignore his advice.', cue: 'SHOULD', a: ['We should not have ignored his advice.', 'We shouldn’t have ignored his advice.'], why: 'A past criticism: *should not have* + past participle.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Suggested timing for the whole paper is about **ten minutes for each of Parts 1 to 4**, which leaves you most of the time for the long reading texts. If an item is taking too long, write your best guess, mark it and come back. A blank answer can never earn a mark.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'mei', items: [
            { a: 'It was not until I read her letter that I realised the truth.' },
            { a: 'Should you need any help, please call me.' },
            { a: 'The painter is said to have destroyed his early work.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'Parts 5 to 8: the long texts',
      about: 'Use a method for multiple choice, cross-text matching, the gapped text and multiple matching.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Parts 5 to 8 test reading. The texts are long and demanding, often taken from serious newspapers, magazines and non-fiction, and the questions test not only **what** a writer says but **why** and **how**: their attitude, their purpose and the way the text is built.\n\n**Part 5, multiple choice**: one long text with **six questions**, each with four options. The questions follow the order of the text. Some ask about a detail, others about the writer’s opinion, the meaning of a phrase, or what a word such as *this* or *it* refers to.\n\n**Part 6, cross-text multiple matching**: **four short texts** by different writers on the same subject, and **four questions** that ask you to compare them: *Which writer shares B’s view on…? Which writer has a different opinion from the others about…?*\n\n**Part 7, gapped text**: a long text with **six paragraphs removed**. You choose the right paragraph for each gap from seven; one is not needed.\n\n**Part 8, multiple matching**: **ten questions** and a long text in sections, or several short texts. You find the section where each idea appears.' },
          { t: 'table', caption: 'A method for each part', explain: ['head', 'col0', 'col1', 'col2'], head: ['Part', 'First', 'Then'], rows: [
            ['Part 5', 'skim the text for the writer’s overall view', 'for each question, find the place, read closely and reject each wrong option for a reason'],
            ['Part 6', 'note each writer’s view on every issue in a few words', 'compare the notes, not the whole texts again'],
            ['Part 7', 'read the main text and predict what each gap needs', 'check the links both ways: words like this, such, however and names'],
            ['Part 8', 'read the questions first and underline the key idea', 'scan for paraphrases of the idea, not for the same words'],
          ] },
        ],
        [
          { t: 'text', md: 'The four parts share one danger: **matching words instead of meaning**. The wrong options in Part 5 often repeat words from the text; the wrong section in Part 8 often contains the same noun as the question. The right answer nearly always **paraphrases** the idea. *She came to regret the move* in a question may be *in hindsight, it was not the wisest step* in the text.\n\nIn **Part 7**, the paragraph before a gap and the paragraph after it both have to fit. Look for **reference words** (*this decision, these figures, such an approach*), **linkers** (*however, as a result, by contrast*), changes of **time** and the first mention of **names**: a paragraph that says *Moreno* without introducing her cannot come before the paragraph that introduces her.\n\nIn **Part 6**, the questions are about **opinions**, so make a small grid in your head or on the paper: each writer, each issue, agree or disagree. Two writers can agree with different words, and one writer can agree with another about one point and disagree about the next.' },
          { t: 'reading', title: 'Part 5 practice: the quiet virtue', md: 'We tend to admire people who speak their minds. In meetings and on screens, the confident voice wins, and we are taught, from school debates onwards, that silence is a kind of failure. Yet anyone who has worked in a team knows that the most valuable colleague is not always the loudest one.\n\nThe psychologist I spoke to for this piece, who has spent two decades observing groups at work, put it bluntly: teams that reward quick talkers make worse decisions. The problem, she argued, is not that confident people are wrong, but that their certainty discourages others from mentioning doubts. By the time anyone raises an objection, the decision has a momentum of its own.\n\nNone of this is an argument for timidity. What she recommends is something more demanding: leaders who deliberately ask for the opposing view, and colleagues who are willing to give it calmly. That, she says, is a skill, and like any skill it can be learned. It is also, I suspect, rarer than it should be.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 5): read the text and choose the answer which fits best.', items: [
            { q: 'In the first paragraph, the writer suggests that', o: ['our admiration for confident speakers may be misplaced', 'quiet people usually do better at school', 'meetings have become longer than they used to be', 'most teams prefer colleagues who say little'], why: '*Yet… the most valuable colleague is not always the loudest one.*' },
            { q: 'According to the psychologist, the main problem with confident speakers is that', o: ['others hold back their doubts', 'they are usually mistaken', 'they speak too quickly to follow', 'they change their minds too often'], why: '*Their certainty discourages others from mentioning doubts.*' },
            { q: 'What does “None of this is an argument for timidity” tell us?', o: ['The writer does not want people to become less willing to speak.', 'The writer thinks confident people should be quieter.', 'The writer disagrees with the psychologist.', 'The writer believes shy people make better leaders.'], why: 'He rejects the idea that the answer is to say less; he wants a harder skill.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Part 5, the option that repeats the text’s words is often a trap: *usually mistaken* uses the idea of being *wrong*, which the psychologist explicitly rejects. Find the sentence that answers the question, then choose the option that says the **same thing in other words**.' },
        ],
        [
          { t: 'reading', title: 'Part 6 practice: should workplaces avoid conflict?', md: '**A.** Disagreement at work is too often treated as a symptom of failure. In my experience, the teams that argue openly, within limits, reach better decisions than those that keep the peace at any price. What matters is that arguments stay focused on ideas, not on people.\n\n**B.** I would not go as far as to celebrate conflict. Even polite disagreement costs energy and trust, and in small teams it can linger for months. Managers should resolve differences early, before positions harden, rather than encourage debate for its own sake.\n\n**C.** The question is not whether conflict is good or bad but whether it is handled well. Like writer A, I believe that open disagreement often improves decisions, provided that someone keeps it about the work. The real danger lies in the conflicts nobody mentions.\n\n**D.** It is fashionable to say that conflict is healthy. I doubt it. Most people dislike confrontation, and asking them to argue simply rewards those who enjoy it. A calm, well-run process, in which views are gathered privately, serves a team better than a heated meeting.' },
          { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 6): which writer is described?', items: [
            { q: 'Which writer shares A’s view that open disagreement can improve decisions?', o: ['C', 'B', 'D'], why: 'C: *Like writer A, I believe that open disagreement often improves decisions.*' },
            { q: 'Which writer, like B, is sceptical about encouraging conflict?', o: ['D', 'A', 'C'], why: 'D: *It is fashionable to say that conflict is healthy. I doubt it.*' },
            { q: 'Which writer suggests a way of collecting opinions that avoids open argument?', o: ['D', 'A', 'B'], why: 'D: *views are gathered privately*.' },
            { q: 'Which writer warns about the effect of conflict that lasts a long time?', o: ['B', 'A', 'C'], why: 'B: *it can linger for months*.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Part 7 practice: the mediator', md: 'When Rosa Moreno began working as a family mediator, she assumed her job would be to find solutions. Within a month she had abandoned the idea.\n\n[gap one]\n\nThat discovery changed how she ran every session. Instead of proposing compromises, she began asking each person to describe the other’s point of view until the other agreed it was fair.\n\n[gap two]\n\nIt was slow, and some clients found it maddening. Yet the agreements reached this way tended to last far longer than the ones she had once negotiated.\n\n[gap three]\n\nRemoved paragraphs:\n\n**A.** “People rarely came to me because they lacked ideas,” she explains. “They came because each felt the other had never really listened.”\n\n**B.** She now trains other mediators, and the first thing she tells them is to resist the urge to fix things.\n\n**C.** Only once both had done so would she allow any talk of what should happen next.\n\n**D.** Her first clients were mostly business partners rather than families.' },
          { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 7): choose the paragraph that fits each gap. One paragraph is not needed.', items: [
            { q: 'Which paragraph fits gap one?', o: ['A', 'B', 'C', 'D'], why: 'A explains why she *abandoned the idea*, and the next paragraph begins *That discovery*.' },
            { q: 'Which paragraph fits gap two?', o: ['C', 'A', 'B', 'D'], why: '*Only once both had done so* refers back to describing the other’s view; *It was slow* follows naturally.' },
            { q: 'Which paragraph fits gap three?', o: ['B', 'A', 'C', 'D'], why: 'B brings the story to the present: *She now trains other mediators*. D contradicts *family mediator*.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Part 8 practice: four people on working with family', md: '**A. Laura, café owner.** Running a business with my brother taught me that you cannot leave work at the door. We now have a rule: no shop talk at Sunday lunch, and it has saved us more than once.\n\n**B. Joseph, architect.** My father was my first boss. He was far harder on me than on anyone else, which I resented at the time. In hindsight, it made me a better architect.\n\n**C. Amara, farmer.** On a farm, everyone works together whether they like it or not. The arguments are real, but so is the sense that we are building something for the next generation.\n\n**D. Felix, lawyer.** I turned down a place in my mother’s firm. I suspected clients would never quite believe I had earned my position, and I still think I was right.' },
          { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 8): which person says each thing?', items: [
            { q: 'Who appreciates something now that annoyed them in the past?', o: ['B', 'A', 'C', 'D'], why: 'Joseph: *which I resented at the time. In hindsight, it made me a better architect.*' },
            { q: 'Who describes an agreement that keeps family life separate from work?', o: ['A', 'B', 'C', 'D'], why: 'Laura: *no shop talk at Sunday lunch*.' },
            { q: 'Who worried about how other people would see them?', o: ['D', 'A', 'B', 'C'], why: 'Felix: *clients would never quite believe I had earned my position*.' },
            { q: 'Who feels the work has a purpose beyond the present?', o: ['C', 'A', 'B', 'D'], why: 'Amara: *building something for the next generation*.' },
          ] },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'Their certainty discourages others from mentioning doubts.' },
            { a: 'In hindsight, it made me a better architect.' },
            { a: 'The real danger lies in the conflicts nobody mentions.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'Writing against the clock',
      about: 'Plan, write and check a C1 Advanced essay and a Part 2 text in the time allowed.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'The C1 Advanced **Writing** paper lasts **1 hour 30 minutes** and has two parts, each **220 to 260 words**. That gives you about **45 minutes per task**: roughly ten minutes to plan, thirty to write and five to check.\n\n**Part 1** is compulsory and always an **essay**. You read a short input, often notes from a lecture or a discussion, with **three points** and sometimes some opinions. You write about **two of the three points**, explaining which is more important or more effective, and **giving reasons**. You may use the opinions in the notes, but in your own words.\n\n**Part 2** gives you a choice of **three tasks**, from an email or letter, a proposal, a report and a review. Choose the one where you know the format and have something real to say.\n\nUnder time pressure, the plan is what saves you. A plan is not a draft: a few words for each paragraph, the **position** you will take, and two or three pieces of C1 language you intend to use.' },
          { t: 'table', caption: 'The Part 2 text types at C1', explain: ['head', 'col1', 'col2'], head: ['Type', 'Reader and purpose', 'Shape and style'], rows: [
            ['email or letter', 'a person or organisation: respond, request, complain, recommend', 'greeting and closing to match the reader; clear paragraphs'],
            ['proposal', 'a manager or committee: suggest a plan for the future and persuade', 'title and headings; the aim, the plan, its benefits, a recommendation'],
            ['report', 'a manager or committee: describe the present situation and recommend', 'title and headings; findings first, then recommendations; neutral'],
            ['review', 'readers of a website or magazine: describe, evaluate, recommend', 'a lively opening, a balanced opinion, a clear verdict'],
          ] },
        ],
        [
          { t: 'reading', title: 'Task and model essay', md: 'Task: Your class has attended a lecture on how communities can reduce conflict between neighbours. Write an essay discussing **two** of the methods in the notes. Explain which method you think is more effective, giving reasons. Notes: local mediation services, shared community events, clearer rules from local councils.\n\nDisputes between neighbours over noise, parking or boundaries can poison daily life, and few people know where to turn when they arise. Two approaches deserve particular attention: local mediation services and shared community events.\n\nMediation offers a structured way out of a dispute that has already begun. A trained, neutral person helps both sides to listen to one another, which is often what has been missing. Its great strength is that the solution belongs to the neighbours themselves, so it is more likely to last than one imposed from outside. Its weakness is that it comes late, usually once positions have hardened.\n\nCommunity events, by contrast, work long before any quarrel. A street party or a shared garden gives neighbours a reason to know one another, and it is far harder to hold a grudge against someone you have cooked with. Admittedly, such events attract the sociable and may never reach the people most likely to fall out.\n\nOn balance, I would argue that community events are the more effective method, precisely because they prevent conflicts rather than repair them. Mediation remains essential when things go wrong, but a community in which people already know one another will need it far less often.' },
          { t: 'ex', kind: 'choice', h: 'Read the model essay. Choose the correct answer.', items: [
            { q: 'How many of the three methods does the essay discuss?', o: ['two, as the task asks', 'all three', 'one'], why: 'The task asks for two; discussing all three wastes words and time.' },
            { q: 'What does each body paragraph contain?', o: ['a strength and a weakness of one method', 'a story about the writer’s neighbours', 'a list of facts with no opinion'], why: 'A balanced paragraph: *Its great strength… Its weakness…*' },
            { q: 'Where does the writer say which method is more effective?', o: ['in the conclusion, with a reason', 'in the first sentence only', 'nowhere'], why: '*On balance, I would argue that… precisely because…*' },
          ] },
        ],
        [
          { t: 'text', md: 'The examiners mark every C1 Writing task on **four areas**. **Content**: have you covered what the task asks, here two methods and a reasoned choice? **Communicative achievement**: does the text do its job for its reader, in the right register, holding their attention? **Organisation**: is it well structured and linked, with a range of cohesive devices, not only *firstly* and *secondly*? **Language**: do you use a **range** of vocabulary and grammar, including less common items, accurately and naturally?\n\nAt C1, range matters as much as accuracy. The model essay uses varied structures: emphasis (*precisely because*), concession (*Admittedly*), contrast (*by contrast*), a relative clause (*in which people already know one another*) and idiom in a neutral form (*hold a grudge*). It never uses contractions and never addresses the reader directly.' },
          { t: 'table', caption: 'Common mistakes under time pressure', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['Writing about all three points', 'Choosing two and going deeper', 'The task asks for two; depth scores better.'],
            ['No clear choice at the end', 'On balance, I would argue that… because…', 'The task asks which is more effective.'],
            ['Copying phrases from the notes', 'Paraphrasing the ideas', 'Copied language does not show your range.'],
            ['A proposal that only describes the present', 'Describing the present, then proposing and persuading', 'A proposal looks forward.'],
            ['Starting to write at once', 'Ten minutes of planning first', 'A plan prevents a weak structure you cannot fix later.'],
            ['No time to check', 'Five minutes kept for checking', 'Small errors are the easiest marks to win back.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Proposal or report? Sort the sentences.', groups: ['proposal', 'report'], explain: ['groups'], items: [
            { s: 'The aim of this proposal is to suggest how the college could reduce tension between departments.', g: 0, why: 'A proposal suggests a plan.' },
            { s: 'This report assesses how well the current complaints procedure works.', g: 1, why: 'A report assesses the present situation.' },
            { s: 'If adopted, this scheme would encourage staff to raise problems early.', g: 0, why: 'A proposal persuades with future benefits.' },
            { s: 'Most staff interviewed felt that complaints were handled slowly.', g: 1, why: 'A report gives findings.' },
            { s: 'I would urge the committee to approve the plan before the summer.', g: 0, why: 'A proposal ends by persuading.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Writing Part 2): choose the best sentence for each task.', items: [
            { q: 'The opening of a proposal to a local council about a community garden:', o: ['The purpose of this proposal is to outline a plan for a community garden and to explain its benefits.', 'Have you ever dreamed of growing your own vegetables?', 'I am writing to complain about the state of the park.'], why: 'A proposal states its purpose clearly in a neutral style.' },
            { q: 'The last sentence of a letter to a newspaper editor about a local dispute:', o: ['I trust that your readers will see the value of a calmer, more open debate.', 'Anyway, bye for now!', 'In conclusion, the aim of this report was to inform.'], why: 'A formal letter ends with a polite, purposeful sentence.' },
            { q: 'A sentence for a review of a film about a family feud:', o: ['What lifts the film above the ordinary is its refusal to take sides.', 'The aim of this review is to recommend the cinema.', 'Firstly, secondly and thirdly, the film was good.'], why: 'A review evaluates, with a range of language.' },
          ] },
        ],
        [
          { t: 'text', md: 'In the format of the C1 Advanced exam (Writing Part 1): write your own essay on the task below, in **220 to 260 words**, and send it to your teacher, who will correct it. Give yourself **45 minutes** in total, as in the exam: plan first, then write, then check.\n\n*Your class has had a discussion about what causes conflict between generations. You have made the notes below. Write an essay discussing **two** of the causes in your notes. Explain which cause you think is more significant, giving reasons in support of your answer.*\n\n*Notes: different attitudes to technology, competition for housing and jobs, changing social values.*\n\n*Some opinions expressed in the discussion: “Young people and their grandparents simply live online and offline.” “It’s about money, not values.” “Every generation thinks the next one has lost its way.”*' },
          { t: 'tip', art: 'owl', md: 'Before you send your essay, read it once for **content** (two causes, a clear choice with reasons) and once for **language**: tenses, articles, agreement and spelling. Then count the words roughly. Your teacher will mark it on the same four areas as the examiners.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'lena', items: [
            { a: 'On balance, I would argue that community events are more effective.' },
            { a: 'The purpose of this proposal is to outline a plan for the garden.' },
            { a: 'What lifts the film above the ordinary is its refusal to take sides.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'The C1 Advanced exam, step by step',
      about: 'Walk through every paper of C1 Advanced, and look ahead to C2 Proficiency and the level test before it.',
      art: 'dragon',
      spreads: [
        [
          { t: 'text', md: 'You have now studied all the language of C1. This lesson puts the whole **C1 Advanced** exam in one place, so that nothing on the day is a surprise. There are four papers, and the written papers take most of a day.\n\n**Reading and Use of English** (1 hour 30 minutes, eight parts). Parts 1 to 4 test vocabulary and grammar: multiple-choice cloze, open cloze, word formation and key word transformations. Parts 5 to 8 test reading: multiple choice on a long text, cross-text matching, the gapped text and multiple matching.\n\n**Writing** (1 hour 30 minutes, two parts). Part 1 is a compulsory essay. In Part 2 you choose an email or letter, a proposal, a report or a review. Each text is 220 to 260 words.' },
          { t: 'text', md: '**Listening** (about 40 minutes, four parts). **Part 1**: three short extracts with two speakers, two multiple-choice questions on each. **Part 2**: a talk by one speaker, with **sentence completion**: you write a word or short phrase you hear. **Part 3**: a long interview or discussion with multiple-choice questions. **Part 4**: five short monologues and **two matching tasks**, for example why each speaker changed job and what each has learned. You hear everything **twice**.\n\n**Speaking** (about 15 minutes, usually with another candidate). **Part 1**: the examiner asks each of you questions about yourself. **Part 2**: the **long turn**; you get three pictures, choose two and talk about them for about a minute, answering the questions printed with them, and then comment briefly on your partner’s pictures. **Part 3**: the collaborative task you practised in unit 19. **Part 4**: the discussion.' },
          { t: 'table', caption: 'C1 Advanced at a glance', explain: ['head', 'col0', 'col2'], head: ['Paper', 'Parts', 'Time'], rows: [
            ['Reading and Use of English', '8', '1 h 30 min'],
            ['Writing', '2', '1 h 30 min'],
            ['Listening', '4', 'about 40 min'],
            ['Speaking', '4', 'about 15 min, usually in pairs'],
          ] },
        ],
        [
          { t: 'text', md: 'How is it marked? In general terms, you receive a **score for each skill** (reading, use of English, writing, listening and speaking) and an **overall result**, which reflects all of them together. A strong paper can make up for a weaker one, so no single part decides everything. Writing and Speaking are marked by trained examiners using the areas you have met in this book: content and task, range and accuracy, organisation and interaction. The other papers have fixed answers.\n\nThis tells you how to prepare in the last weeks: work on **all** the papers, not only your favourite, and practise under **real timing**, because time is what most candidates find hardest.' },
          { t: 'table', caption: 'Common mistakes on exam day', explain: ['head', 'col0', 'col1'], head: ['Not this', 'But this'], rows: [
            ['Spending 25 minutes on Part 1 of Reading', 'About ten minutes each on Parts 1 to 4, more on Parts 5 to 8'],
            ['Writing both texts without a plan', 'Ten minutes of planning for each text'],
            ['Trying to catch every word in Listening', 'Listening for the idea behind the words'],
            ['Giving one-sentence answers in Speaking', 'Developing each answer with a reason or example'],
            ['Leaving any answer blank', 'Always writing your best guess'],
          ] },
          { t: 'ex', kind: 'match', h: 'Match the exam part and what you do.', pairs: [
            ['Reading and Use of English Part 3', 'form a word from the stem in capitals'],
            ['Reading and Use of English Part 6', 'compare the views of four writers'],
            ['Reading and Use of English Part 7', 'put removed paragraphs back into a text'],
            ['Listening Part 2', 'complete sentences with words you hear'],
            ['Listening Part 4', 'do two matching tasks on five speakers'],
            ['Speaking Part 2', 'talk about two of three pictures'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'Speaking Part 2: a model long turn', lines: [
            { who: 'Examiner', s: 'Here are your pictures. They show people dealing with disagreements. Choose two, and say what the people might be disagreeing about and how they might be feeling.' },
            { who: 'Priya', s: 'I’ll take the family at the dinner table and the colleagues in the meeting room. In the first, the teenager looks as though he’s been told something he doesn’t want to hear, perhaps about a curfew, and he seems more frustrated than angry. The colleagues, by contrast, appear to be disagreeing quite calmly, maybe about a budget. Whereas the family argument looks personal, the meeting seems to be about the work rather than the people. If I had to guess, I’d say the family will have forgotten it by tomorrow, while the work disagreement might take longer to resolve.' },
            { who: 'Examiner', s: 'Thank you. Daniel, which situation do you think would be easier to resolve?' },
            { who: 'Daniel', s: 'Probably the meeting, because there’s a clear goal everyone shares.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Speaking Part 2): what makes the long turn successful?', items: [
            { q: 'In the long turn, you should', o: ['compare the two pictures and answer both printed questions', 'describe every detail of one picture', 'talk about all three pictures in turn'], why: 'The task: choose two, compare them and answer the questions.' },
            { q: 'Which phrase speculates in a C1 way?', o: ['He looks as though he’s been told something he doesn’t want to hear.', 'There is a boy. There is a table.', 'He is sad. I am sure.'], why: '*Looks as though* + a perfect form: speculation with range.' },
          ] },
        ],
        [
          { t: 'text', md: 'What comes after C1? **C2**, the highest level of the scale. At C2 you understand virtually everything you hear or read, summarise information from different sources in a coherent way, and express yourself spontaneously and precisely, with fine shades of meaning even in complex situations. The exam for this level is **C2 Proficiency**.\n\nIt has the same four papers, with longer and more demanding texts. In Writing Part 1, for example, you write an essay that **summarises and evaluates the ideas in two short texts**, so the skills of paraphrase and evaluation you have built here carry straight on.\n\nBefore you move into the C2 course, there is a **level test** in class. It covers everything in this book: grammar, vocabulary, reading, writing, listening and speaking. It is not a trick: if you have done the units, the tests and the practice, you are ready. Your teacher will tell you your result privately, and if you need more time, you can take it again later after focused practice.' },
          { t: 'ex', kind: 'transform', h: 'A last round in the format of Reading and Use of English Part 4: complete the second sentence, using the word given and three to six words.', items: [
            { q: 'We had only just sat down when the fire alarm went off.', cue: 'HARDLY', a: ['Hardly had we sat down when the fire alarm went off.'], why: 'Inversion after *hardly*: *Hardly had we* + past participle + *when*.' },
            { q: 'Without your help, I would never have finished on time.', cue: 'BUT', a: ['But for your help, I would never have finished on time.'], why: '*But for* + noun = *without* in a conditional.' },
            { q: 'They never agreed about the budget.', cue: 'EYE', a: ['They never saw eye to eye about the budget.', 'They never saw eye to eye on the budget.', 'They never saw eye to eye over the budget.'], why: 'The idiom *see eye to eye* from unit 19.' },
          ] },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'sofia', items: [
            { a: 'He looks as though he’s been told something he doesn’t want to hear.' },
            { a: 'Hardly had we sat down when the fire alarm went off.' },
            { a: 'If I had to guess, I’d say it will take longer to resolve.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the word that best fits each gap.', items: [
      { q: 'The two sides remain at ___ over the new contract.', o: ['loggerheads', 'arguments', 'quarrels', 'disputes'], why: '*At loggerheads* over something.' },
      { q: 'A quiet room is far more ___ to study than a busy café.', o: ['conducive', 'helpful', 'useful', 'suitable'], why: '*Conducive to*.' },
      { q: 'The plan was, on the ___, a success.', o: ['whole', 'total', 'entire', 'full'], why: 'Fixed phrase: *on the whole*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
      { q: 'It was by ___ means a perfect solution.', a: ['no'], why: '*By no means*.' },
      { q: 'Not ___ the end of the film did we understand the title.', a: ['until', 'till'], why: '*Not until* + inversion.' },
      { q: 'She spoke quietly so ___ not to wake the baby.', a: ['as'], why: '*So as not to*.' },
    ] },
    { t: 'ex', kind: 'wordform', h: 'Use the word in capitals to form a word that fits the gap.', items: [
      { q: 'A simple ___ led to months of argument.', base: 'understand', a: ['misunderstanding'], why: 'Prefix *mis-* and *-ing* as a noun.' },
      { q: 'Some losses are simply ___.', base: 'replace', a: ['irreplaceable'], why: 'Negative *ir-* and *-able*.' },
      { q: 'The city grew ___ during the boom.', base: 'sustain', a: ['unsustainably'], why: 'An adverb with three changes.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Complete the second sentence, using the word given and three to six words.', items: [
      { q: 'If you have any questions, please ask the staff.', cue: 'SHOULD', a: ['Should you have any questions, please ask the staff.'], why: 'Inverted conditional.' },
      { q: 'People believe the house was built in 1600.', cue: 'BELIEVED', a: ['The house is believed to have been built in 1600.'], why: 'Passive reporting with a perfect passive infinitive.' },
      { q: 'Without the map, we would have got lost.', cue: 'BUT', a: ['But for the map, we would have got lost.'], why: '*But for* + noun.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the paper and what it contains.', pairs: [
      ['Reading and Use of English', 'eight parts, language and long texts'],
      ['Writing', 'an essay and one Part 2 text'],
      ['Listening', 'four parts, each heard twice'],
      ['Speaking', 'four parts, usually with a partner'],
    ] },
    { t: 'ex', kind: 'choice', h: 'Which is right for the C1 Advanced Writing paper?', items: [
      { q: 'In the Part 1 essay you discuss', o: ['two of the three points, and say which is more important', 'all three points equally', 'only your own idea'], why: 'Two of three points with a reasoned choice.' },
      { q: 'Each text should be', o: ['220 to 260 words', '140 to 190 words', 'about 400 words'], why: 'C1 Advanced Writing: 220 to 260 words for each task.' },
      { q: 'A proposal is mainly about', o: ['a plan for the future and why it should be adopted', 'what happened last year', 'your opinion of a film'], why: 'A proposal looks forward and persuades.' },
    ] },
  ],
};
