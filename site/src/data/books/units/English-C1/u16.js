// English C1, unit 16, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Education and learning: perfect and passive infinitives and -ing forms, verbs whose meaning changes with the pattern,
// the language of learning, and the proposal for C1 Advanced Writing Part 2. Exam formats: Reading and Use of English
// Parts 3 and 4, Listening Part 3, Writing Part 2.
export const UNIT = {
  id: 'u16',
  title: 'Education and learning',
  goal: 'Use perfect and passive infinitives and -ing forms to place actions in time, choose between verb patterns that change the meaning, discuss how people learn with precise vocabulary, and write a proposal for C1 Advanced.',
  art: 'owl',
  tags: { skills: ['grammar', 'vocabulary', 'listening', 'speaking', 'writing'], topics: ['infinitives', 'gerunds', 'passive', 'verb-patterns', 'education', 'learning', 'proposal'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'Lucky to have been chosen',
      about: 'Use perfect and passive infinitives and -ing forms (to have been told, being given, having been chosen) to show time and who did what.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'At B2 you met *She is said **to have left***, the perfect infinitive after a passive reporting verb. At C1 the same two ideas, **perfect** and **passive**, combine freely with both the infinitive and the *-ing* form, wherever a verb, adjective or preposition needs one.\n\nThe **perfect** form (*to have done, having done*) shows that the action happened **before** the main verb, or that it was **not realised**. The **passive** form (*to be done, being done*) shows that the subject **receives** the action. Put both together and you get *to have been done* and *having been done*: an earlier action that happened **to** the subject.\n\n*I’m lucky **to have been chosen**.* (They chose me earlier; I feel lucky now.)\n*She resents **being treated** like a child.* (People treat her that way; she dislikes it.)\n***Having been warned** about the exam, we revised for weeks.* (The warning came first.)' },
          { t: 'table', caption: 'Eight forms', explain: ['head', 'col0', 'col3'], head: ['Form', 'Active', 'Passive', 'Meaning'], rows: [
            ['infinitive', 'to teach', 'to be taught', 'same time or later'],
            ['perfect infinitive', 'to have taught', 'to have been taught', 'earlier, or unrealised'],
            ['-ing form', 'teaching', 'being taught', 'same time, or in general'],
            ['perfect -ing form', 'having taught', 'having been taught', 'clearly earlier'],
          ] },
        ],
        [
          { t: 'text', md: 'These forms appear in four main places.\n\nAfter **seem, appear, happen, claim, pretend, expect** and the passive reporting verbs: *He **claims to have read** every book on the list. The school **is thought to have been founded** in 1610.*\n\nAfter **adjectives** of feeling: *proud, relieved, lucky, sorry, ashamed, delighted*: *I was **relieved to have been given** a second chance.*\n\nAfter verbs that take **-ing**: *deny, admit, regret, remember, resent, appreciate, avoid, risk, can’t stand*: *I **appreciate being given** time to think. He **denied having copied** the essay.* Here the simple *-ing* often already shows earlier time (*He denied copying it*).\n\nAfter **prepositions**: *without, after, on, despite, for*: *She left **without being noticed**. **After having been rejected** twice, he finally got in.*\n\nOne more C1 use: after *would like, would love, was supposed to, meant to* the perfect infinitive describes something that **did not happen**: *I **would like to have studied** medicine.* *We **were supposed to have finished** by June.*' },
          { t: 'examples', items: [
            { s: 'She **seems to have forgotten** the deadline.', n: 'Perfect: the forgetting happened earlier.' },
            { s: 'Nobody **likes being corrected** in front of the class.', n: 'Passive *-ing*: someone corrects us.' },
            { s: '**Having been taught** by her mother, she read at three.', n: 'Perfect passive participle: the teaching came first.' },
            { s: 'He **would love to have gone** to art school.', n: 'Perfect infinitive: he did not go.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['She seems to know him for years.', 'She seems to have known him for years.', 'An action continuing from the past needs the perfect.'],
            ['I remember to be told off.', 'I remember being told off.', '*Remember* + *-ing* for a memory; passive *being* + past participle.'],
            ['He denied to have cheated.', 'He denied having cheated. / He denied cheating.', '*Deny* takes *-ing*, never *to*.'],
            ['The essay needs to correct.', 'The essay needs correcting. / The essay needs to be corrected.', 'The essay receives the action: passive meaning.'],
            ['I would like to have went.', 'I would like to have gone.', 'Perfect infinitive = *have* + past participle.'],
          ] },
          { t: 'dialogue', title: 'Results day', lines: [
            { who: 'Mia', s: 'I still can’t believe it. I seem to have got a place at Edinburgh.' },
            { who: 'Callum', s: 'Seem? You either have or you haven’t.' },
            { who: 'Mia', s: 'I have. But having been rejected by two other universities, I’m not taking anything for granted.' },
            { who: 'Callum', s: 'I’d like to have applied there myself. I was supposed to have sent the form in March and I simply forgot.' },
            { who: 'Mia', s: 'Well, you’re lucky to have been offered a place at Leeds. And nobody enjoys being reminded of a missed deadline, so I’ll stop.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the correct form.', items: [
            { q: 'The old library is believed ___ during the war.', o: ['to have been destroyed', 'to destroy', 'having destroyed'], why: 'Earlier action done to the library: perfect passive infinitive.' },
            { q: 'Most students appreciate ___ clear feedback.', o: ['being given', 'to be given', 'having given'], why: '*Appreciate* + *-ing*; the students receive the feedback.' },
            { q: 'I’m proud ___ in the first group to finish the course.', o: ['to have been', 'to be being', 'having'], why: 'Adjective + perfect infinitive for a past achievement.' },
            { q: '___ the scholarship, she was free to choose any course.', o: ['Having been awarded', 'Having awarded', 'To award'], why: 'She received the award first: perfect passive participle.' },
            { q: 'The forms need ___ by Friday.', o: ['returning', 'to return', 'return'], why: '*Need* + *-ing* has a passive meaning.' },
          ] },
        ],
        [
          { t: 'text', md: '**Reading and Use of English Part 4** of C1 Advanced has **six key word transformations**. You complete a second sentence so that it means the same as the first, using the key word **without changing it** and between **three and six words** in total, including the key word. Each item is worth **two marks**, usually one for each of two changes, so a half-right answer still scores. These forms are favourites, because one key word such as *HAVING* or *BEEN* forces both a time change and a voice change.' },
          { t: 'ex', kind: 'transform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first. Use the word given and three to six words, including the word given, for the part that changes.', items: [
            { q: 'People think that the manuscript was written by a monk.', cue: 'THOUGHT', a: ['The manuscript is thought to have been written by a monk.'], why: 'Passive reporting + perfect passive infinitive: *is thought to have been written*.' },
            { q: 'I hate it when people interrupt me while I am speaking.', cue: 'BEING', a: ['I can’t stand being interrupted while I am speaking.', 'I cannot stand being interrupted while I am speaking.'], why: '*Can’t stand* + passive *-ing*.' },
            { q: 'He said that he had not seen the exam paper in advance.', cue: 'DENIED', a: ['He denied having seen the exam paper in advance.', 'He denied seeing the exam paper in advance.'], why: '*Deny* + (perfect) *-ing*.' },
            { q: 'It’s a pity I didn’t learn the piano as a child.', cue: 'LIKE', a: ['I would like to have learnt the piano as a child.', 'I would like to have learned the piano as a child.', 'I would have liked to learn the piano as a child.'], why: 'Unrealised past: *would like to have* + past participle.' },
            { q: 'Because they had been told about the strike, the students stayed at home.', cue: 'HAVING', a: ['Having been told about the strike, the students stayed at home.'], why: 'Perfect passive participle clause: *having been told*.' },
            { q: 'It appears that someone has moved the exam to Thursday.', cue: 'BEEN', a: ['The exam appears to have been moved to Thursday.'], why: '*Appear* + perfect passive infinitive.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Count words carefully in **Part 4**: contractions count as two (*can’t* = *can not*), and the key word is included in the three to six. If your answer needs seven words, you have probably repeated something already in the sentence.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'mei', items: [
            { a: 'I’m lucky to have been chosen for the course.' },
            { a: 'Nobody likes being corrected in front of the class.' },
            { a: 'Having been warned, we revised for weeks.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'I came to love it',
      about: 'Use verbs whose meaning changes with the pattern that follows: go on, mean, propose, dread, come to.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'At B2 you learnt that **remember, forget, stop, try** and **regret** change meaning with *to* or *-ing*. The general logic still holds at C1: the **infinitive** tends to look **forward** to a purpose or a next step, while the **-ing** form describes an activity that is **already happening** or is part of the situation. Other verbs follow the same logic less obviously.\n\n**Go on to do** means *do something next*, as a new stage; **go on doing** means *continue*: *After her degree she **went on to train** as a teacher.* *He **went on talking** after the bell.*\n\n**Mean to do** means *intend*; **mean doing** means *involve, have as a result*: *I **meant to email** you.* *A place at that school **means moving** to Manchester.*\n\n**Propose to do** means *intend, plan*; **propose doing** means *suggest*: *The college **proposes to open** a new campus.* *I **propose starting** an hour later.* (*Propose that…* is also common in suggestions.)' },
          { t: 'table', caption: 'Two patterns, two meanings', explain: ['head', 'col1', 'col3'], head: ['Pattern', 'Meaning', 'Example', 'Notes'], rows: [
            ['go on to do', 'do next', 'She went on to become a professor.', 'a new stage'],
            ['go on doing', 'continue', 'They went on arguing for hours.', 'the same activity'],
            ['mean to do', 'intend', 'I didn’t mean to upset you.', 'a plan'],
            ['mean doing', 'involve', 'Studying abroad means leaving friends behind.', 'a consequence'],
            ['propose to do', 'intend', 'We propose to raise fees.', 'formal'],
            ['propose doing', 'suggest', 'She proposed taking a vote.', 'a suggestion to others'],
            ['dread doing', 'fear something ahead', 'I dread sitting exams.', 'the usual pattern'],
            ['dread to think', 'not want to imagine', 'I dread to think what it cost.', 'fixed: think, imagine'],
            ['come to do', 'gradually start to', 'I came to love the subject.', 'with feel, see, realise, like'],
          ] },
        ],
        [
          { t: 'text', md: '**Dread** is normally followed by **-ing**: *Every child **dreads being** picked last.* The infinitive appears almost only in the fixed phrases ***I dread to think*** and ***I dread to imagine***, used for something bad you prefer not to picture.\n\n**Come to do** describes a slow change of attitude or understanding, and works with verbs of mind: *realise, see, accept, appreciate, like, trust, believe*. *Over the years I **came to appreciate** her methods.* It is different from *come to* + noun (*come to a decision*) and from ***when it comes to*** + **-ing** (*When it comes to learning vocabulary, nothing beats repetition*), where *to* is a preposition.\n\nTwo more contrasts are worth checking. **Need to do** has an active meaning (*I need to revise*), but **need doing** is passive (*the essays need marking* = need to be marked). **Be used to doing** means *be accustomed to*; **used to do** is a past habit.' },
          { t: 'examples', items: [
            { s: 'He **went on to win** a scholarship to Harvard.', n: 'The next stage of his life.' },
            { s: 'Getting a distinction **means doing** extra reading every week.', n: '*Mean* + *-ing* = involve.' },
            { s: 'I **dread to think** how much the course fees will be next year.', n: 'A fixed phrase; otherwise *dread* + *-ing*.' },
            { s: 'Slowly, the students **came to trust** their new teacher.', n: 'A gradual change of attitude.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I dread to sit exams.', 'I dread sitting exams.', '*Dread* + *-ing*, except in *dread to think*.'],
            ['When it comes to learn grammar, I struggle.', 'When it comes to learning grammar, I struggle.', '*To* is a preposition in *when it comes to*.'],
            ['After school she went on studying medicine.', 'After school she went on to study medicine.', 'A new stage needs *go on to do*.'],
            ['I propose you to change the date.', 'I propose changing the date. / I propose that we change the date.', '*Propose* is not followed by object + infinitive.'],
            ['This course means to work every weekend.', 'This course means working every weekend.', '*Mean* = involve takes *-ing*.'],
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the correct form.', items: [
            { q: 'Taking the evening course means ___ two nights a week.', o: ['giving up', 'to give up', 'give up'], why: '*Mean* = involve + *-ing*.' },
            { q: 'After a decade in banking, she went on ___ a school in Ghana.', o: ['to found', 'founding', 'found'], why: 'A new stage: *go on to do*.' },
            { q: 'I dread ___ what the inspectors will say.', o: ['to think', 'thinking of', 'think'], why: 'The fixed phrase *dread to think*.' },
            { q: 'Over time I came ___ that rote learning had its uses.', o: ['to accept', 'accepting', 'accept'], why: '*Come to* + verb of mind: a gradual change.' },
            { q: 'The committee proposes ___ the timetable next year.', o: ['to revise', 'revise', 'the revising'], why: '*Propose to do* = intend (formal).' },
          ] },
        ],
        [
          { t: 'text', md: '**Listening Part 3** of C1 Advanced is a long **interview or discussion**, about four minutes, with **six multiple-choice questions** of four options each. The questions follow the order of the recording and often test **attitude and opinion**: what a speaker feels, implies or concludes, not just what happened. Here, read an interview with a woman who returned to university at fifty.' },
          { t: 'dialogue', title: 'Back to university at fifty', lines: [
            { who: 'Interviewer', s: 'Helen, you left school at sixteen. What made you go back to education at fifty?' },
            { who: 'Helen', s: 'I’d always meant to do a degree, but bringing up three children meant putting it off, year after year. When my youngest left home, I realised I had run out of excuses.' },
            { who: 'Interviewer', s: 'Were you nervous?' },
            { who: 'Helen', s: 'Terrified. I dreaded being the oldest person in the room, and of course I was. But I came to see that as an advantage. The younger students were cleverer than me in some ways, but I knew how to organise my time.' },
            { who: 'Interviewer', s: 'And the teaching itself?' },
            { who: 'Helen', s: 'It surprised me. I expected to be told what to think. Instead the lecturers kept asking what I thought, and why. That was uncomfortable at first, frankly. I’d been brought up on learning facts by heart.' },
            { who: 'Interviewer', s: 'You went on to do a master’s. Would you recommend the experience?' },
            { who: 'Helen', s: 'To anyone, at any age. The only thing I regret is having waited so long. Though perhaps I wouldn’t have valued it at twenty.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Listening Part 3): choose the answer which fits best according to the interview.', items: [
            { q: 'Why did Helen not study earlier?', o: ['Family responsibilities kept taking priority.', 'She had no interest in higher education.', 'She failed to get a place at university.', 'Her school advised her against it.'], why: '*Bringing up three children meant putting it off, year after year.*' },
            { q: 'How did Helen come to feel about her age?', o: ['She saw that it gave her certain strengths.', 'She tried to hide it from other students.', 'She found it made no difference at all.', 'She felt it was a serious handicap.'], why: '*I came to see that as an advantage… I knew how to organise my time.*' },
            { q: 'What did Helen find difficult about the teaching at first?', o: ['being expected to form her own opinions', 'the amount of information to memorise', 'the lecturers’ lack of interest in students', 'the speed of the lectures'], why: '*The lecturers kept asking what I thought… That was uncomfortable at first.*' },
            { q: 'What does Helen suggest at the end?', o: ['Studying later may have made her appreciate it more.', 'She would have done better at twenty.', 'Older students should choose shorter courses.', 'She does not recommend a master’s degree.'], why: '*Perhaps I wouldn’t have valued it at twenty.*' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Listening Part 3**, the wrong options often use words that **are** in the recording. Helen mentions learning facts by heart, but she does not say that memorising was difficult at university: the difficulty was thinking for herself. Match the **meaning**, not the words.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'lena', items: [
            { a: 'I had always meant to do a degree.' },
            { a: 'Over time I came to see it as an advantage.' },
            { a: 'I dread to think how much it will cost.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'A well-rounded education',
      about: 'Discuss teaching and learning with precise vocabulary, and form words for the word formation part of C1 Advanced.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Debates about education keep returning to one contrast: **rote learning**, memorising facts by repetition, against **critical thinking**, the ability to question, analyse and judge evidence. Most teachers now argue that a good education needs both: you cannot think critically about history if you know no history. A **well-rounded education** develops the whole person, with the arts, sport and practical skills as well as academic subjects.\n\nThe vocabulary of learning is full of collocations. You **acquire** knowledge or a skill, **gain** a qualification, **sit** or **take** an exam, **pass with flying colours** or **scrape through**, and **resit** one you have failed. You can **fall behind** with your work and then **catch up**, **cram** the night before an exam, or **drop out** of a course altogether. Learning a new job quickly is a **steep learning curve**, and studying throughout your life is **lifelong learning**.' },
          { t: 'table', caption: 'The language of learning', explain: ['head', 'col1'], head: ['Expression', 'Meaning'], rows: [
            ['rote learning', 'memorising by repetition, without necessarily understanding'],
            ['critical thinking', 'analysing and questioning ideas and evidence'],
            ['a well-rounded education', 'one that develops many sides of a person'],
            ['drop out (of)', 'leave a course before finishing it'],
            ['fall behind / catch up', 'make less progress than others / reach the same level again'],
            ['scrape through', 'pass, but only just'],
            ['a mature student', 'an adult who starts studying later than usual'],
          ] },
        ],
        [
          { t: 'text', md: 'C1 also expects you to move between **word families**, because the exam tests them directly. One root can give a noun, a person, an adjective, an adverb and a negative: *educate, education, educator, educational, educationally, uneducated*. Watch for **spelling changes** (*proficient, proficiency*), **negative prefixes** (*illiterate, unqualified, inattentive, irrelevant*) and words that change meaning with the suffix: *a **knowledgeable** guide* knows a lot, but *an **acknowledged** expert* is one others recognise.\n\nWhen you see a gap, decide first **which part of speech** it needs: after *a/the* and an adjective, a noun; before a noun, an adjective; next to a verb or adjective, often an adverb. Then decide whether the sense is **positive or negative**, and whether a noun needs to be **plural**.' },
          { t: 'examples', items: [
            { s: 'Exam success is not the same as genuine **understanding**.', n: 'Noun after an adjective.' },
            { s: 'Adult **illiteracy** remains a hidden problem in many countries.', n: '*literate* → *illiterate* → *illiteracy*.' },
            { s: 'She **dropped out** in her second year but returned later as a **mature student**.', n: 'Two key expressions of learning.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I passed my exam tomorrow.', 'I take / sit my exam tomorrow.', '*Pass* means succeed; *take* or *sit* means do the exam.'],
            ['She made a degree in law.', 'She did / took a degree in law.', 'We *do* or *take* a degree, and *gain* or *get* one.'],
            ['He dropped out the university.', 'He dropped out of university.', '*Drop out of*.'],
            ['I learnt the poem by memory.', 'I learnt the poem by heart.', 'The phrase is *by heart*.'],
            ['The teacher was very knowledge.', 'The teacher was very knowledgeable.', 'An adjective is needed after *very*.'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the sentences with one word.', items: [
            { q: 'After missing a month through illness, she worked hard to catch ___.', a: ['up'], why: '*Catch up* = reach the same level again.' },
            { q: 'Nearly a third of the group dropped ___ before the final year.', a: ['out'], why: '*Drop out* = leave a course early.' },
            { q: 'He only just scraped ___ his driving theory test.', a: ['through'], why: '*Scrape through* = pass only just.' },
            { q: 'Learning dates by ___ will not help you explain why the war started.', a: ['heart', 'rote'], why: '*Learn by heart*, or *by rote*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'wordform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 3): read the text about learning and use the word in capitals to form a word that fits each gap.', items: [
            { q: 'For decades, schools were criticised for their ___ on memorising facts.', base: 'RELY', a: ['reliance'], why: 'A noun after *their*: *reliance on*.' },
            { q: 'Today, the ___ of critical thinking is widely accepted.', base: 'IMPORTANT', a: ['importance'], why: 'A noun after *the*.' },
            { q: 'Yet employers still complain that many graduates are ___ prepared for work.', base: 'ADEQUATE', a: ['inadequately'], why: 'Negative adverb before the adjective *prepared*.' },
            { q: 'Some argue that university has become too ___, focused on grades rather than ideas.', base: 'COMPETE', a: ['competitive'], why: 'An adjective after *too*.' },
            { q: 'Others point to the growing number of ___ who return to study later in life.', base: 'LEARN', a: ['learners'], why: 'A plural noun for people after *number of*.' },
            { q: 'Online courses have made education more ___ than ever before.', base: 'ACCESS', a: ['accessible'], why: 'An adjective after *more*.' },
            { q: 'However, the ___ rate on such courses is often very high.', base: 'COMPLETE', a: ['non-completion', 'noncompletion'], why: 'A negative noun: the rate of people who do not finish.' },
            { q: 'What matters most, perhaps, is a ___ curiosity about the world.', base: 'LIFE', a: ['lifelong'], why: 'A compound adjective: *lifelong curiosity*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 3** you often need **two changes** to the word in capitals: a prefix and a suffix (*adequate → inadequately*), or a suffix and a plural (*learn → learners*). Read the whole sentence: the gap may need a negative even when the word in capitals is positive.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'omar', items: [
            { a: 'A well-rounded education develops the whole person.' },
            { a: 'Rote learning has its place, but so does critical thinking.' },
            { a: 'She dropped out, then came back as a mature student.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'It is proposed that',
      about: 'Write a proposal for C1 Advanced Writing Part 2: headings, a clear purpose, recommendations and justification in 220 to 260 words.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'A **proposal** is one of the four task types in **Writing Part 2** of C1 Advanced (with the letter or email, the report and the review), in **220 to 260 words**. It is written for someone who must make a **decision**: a principal, a manager, a committee, the organisers of a fund. You describe a situation briefly and **recommend a course of action**, explaining why it will work.\n\nA proposal and a report look alike, with a title and headings, but they face in opposite directions. A **report** mainly looks **back** at what has happened and evaluates it. A **proposal** looks **forward**: what should be done, how, and with what result. Most of its words therefore go on **suggestions** and their **benefits**.\n\nThe style is **formal and impersonal**, but also **persuasive**. You want the reader to say yes, so every recommendation needs a reason, and the conclusion should leave no doubt about what you are asking for.' },
          { t: 'table', caption: 'A plan for a proposal', explain: ['head', 'col0', 'col1'], head: ['Section', 'What to write', 'Useful language'], rows: [
            ['Title and introduction', 'Who it is for and what it aims to do', 'The aim of this proposal is to… / This proposal outlines…'],
            ['Current situation', 'The problem or need, briefly', 'At present, … / Many students have expressed…'],
            ['Recommendations', 'Your suggestions, one by one, with details', 'I would recommend that the college (should) offer… / It is proposed that…'],
            ['Benefits', 'Why each idea will work', 'This would enable… / The main advantage would be…'],
            ['Conclusion', 'A final, confident request', 'Should these proposals be adopted, … / I am confident that…'],
          ] },
        ],
        [
          { t: 'reading', title: 'Task and model proposal', md: 'Task: Your college has received a grant to help students learn outside the classroom. The principal has invited students to submit proposals explaining how the money should be spent, what difference it would make, and how its success could be measured.\n\nProposal: a learning commons for independent study\n\nIntroduction\nThe aim of this proposal is to recommend how the recent grant could best support independent learning, and to suggest how its impact might be assessed.\n\nThe current situation\nAt present, students who wish to study outside lessons have two options: the library, which closes at five and is frequently full, or the canteen, which is too noisy for concentrated work. Many students have also said that they would welcome help with study skills, which are rarely taught explicitly.\n\nRecommendations\nI would recommend that the grant be used to convert the unused ground-floor classroom into a learning commons, open until nine in the evening. It should include both silent areas and rooms for group work, with reliable wi-fi and enough sockets for laptops. In addition, it is proposed that final-year students be paid to run weekly study-skills sessions there, covering note-taking, revision planning and research.\n\nMeasuring success\nThe number of students using the space could easily be recorded, and a short survey at the end of each term would show whether they feel better prepared. Exam results could also be compared with previous years.\n\nConclusion\nShould these proposals be adopted, students would gain not only a space to work but also the skills to work there effectively. I am confident that this would represent excellent value for the college.' },
          { t: 'ex', kind: 'choice', h: 'Read the model proposal. Choose the correct answer.', items: [
            { q: 'Why does the writer describe the library and the canteen?', o: ['To show the need that the recommendation answers', 'To complain about the college staff', 'To recommend closing them'], why: 'The current situation section justifies the proposal.' },
            { q: 'Which part of the task does “Measuring success” answer?', o: ['How its success could be measured', 'How the money should be spent', 'What difference it would make'], why: 'Each part of the task has its own section.' },
            { q: 'Why does the writer use *I would recommend that the grant be used*?', o: ['It is a formal, impersonal way to recommend action.', 'It is a mistake for *is used*.', 'It shows the writer is unsure.'], why: 'The subjunctive *be* after *recommend that* is formal; *should be used* also works.' },
          ] },
        ],
        [
          { t: 'text', md: 'Three features give the model its persuasive, formal voice.\n\n**Formal recommending structures.** After *recommend, propose, suggest, insist* and after *It is essential/vital that*, formal English uses the base form of the verb, called the **subjunctive**: *I recommend that the library **open** later. It is proposed that students **be** paid.* British English also uses *should* (*that the library should open*), and in less formal writing an ordinary present (*that the library opens*).\n\n**Conditionals that sell the idea.** *This would enable students to…* and the inverted ***Should these proposals be adopted**, …* show the result of saying yes.\n\n**Headings and impersonal language.** Clear headings let a busy reader find each part of the answer. Passives and nouns keep the focus on the idea, not on you: *The number of students could easily be recorded*, not *We could count the students*.' },
          { t: 'table', caption: 'Common mistakes in proposals', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I suggest the college to open a café.', 'I suggest that the college (should) open a café.', '*Suggest* is never followed by object + infinitive.'],
            ['(no headings, one long text)', 'Introduction, Recommendations, Conclusion', 'Headings are expected in a proposal.'],
            ['The library is bad and everybody hates it.', 'The library is frequently too full for group work.', 'Describe the need precisely and fairly.'],
            ['A café would be nice.', 'A café would encourage students to stay and study together.', 'Every recommendation needs a benefit.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Which section of a proposal is each sentence from?', groups: ['Current situation', 'Recommendations', 'Conclusion'], explain: ['groups'], items: [
            { s: 'At present, there is nowhere quiet to study after five.', g: 0, why: 'Describes the problem now.' },
            { s: 'It is proposed that the library open until nine.', g: 1, why: 'A formal recommendation.' },
            { s: 'Should these ideas be adopted, results would improve.', g: 2, why: 'A confident closing with an inverted conditional.' },
            { s: 'Many students have expressed frustration with the timetable.', g: 0, why: 'Evidence of the need.' },
            { s: 'I would also recommend appointing a student mentor in each class.', g: 1, why: 'A further recommendation.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Make each sentence right for a formal proposal.', items: [
            { s: 'I recommend the college [to offer] evening classes.', a: ['offer', 'should offer'], why: '*Recommend that* + subject + base form or *should*; *that* can be left out.' },
            { s: 'It is essential that every student [has] access to a computer.', a: ['have', 'should have'], why: 'Formal *It is essential that* + subjunctive.' },
            { s: '[If these proposals are adopted], the college would benefit.', a: ['Should these proposals be adopted', 'Were these proposals to be adopted', 'If these proposals were adopted'], why: 'An inverted or second conditional matches *would*.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Your task', md: 'In the format of the C1 Advanced exam (Writing Part 2), write your answer in 220 to 260 words and send it to your teacher for correction.\n\nThe company where you work wants to help employees keep learning. The training manager has asked staff to send proposals. Write a proposal suggesting what kind of learning opportunities the company should offer, explaining how employees and the company would benefit, and recommending how to encourage people to take part.' },
          { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Writing Part 2): before you write, check your plan for the task above.', items: [
            { q: 'Which set of headings covers the task?', o: ['Introduction, Suggested opportunities, Benefits, Encouraging participation, Conclusion', 'Introduction, My career so far, Conclusion', 'Problems with my manager, What I want'], why: 'One section for each point in the task, plus an introduction and conclusion.' },
            { q: 'Which sentence is the best recommendation?', o: ['I would recommend that the company fund one online course per employee each year.', 'The company should do something about training.', 'I suggest the company to pay for courses.'], why: 'Specific, formal and grammatically correct.' },
            { q: 'Which sentence gives the best justification?', o: ['This would enable staff to develop new skills without leaving their posts.', 'Everyone would be happy.', 'Training is good.'], why: 'It names a concrete benefit to staff and company.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Choose a proposal in Part 2 when you can picture **real, specific suggestions**. Give each recommendation a benefit, use headings that match the task points, and finish with a sentence that asks clearly for a decision.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these proposal sentences after the tutor.', tutor: 'sofia', items: [
            { a: 'The aim of this proposal is to suggest improvements.' },
            { a: 'I would recommend that the library open until nine.' },
            { a: 'Should these proposals be adopted, students would benefit.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'Choose the correct form.', items: [
      { q: 'The bridge is said ___ in only six months.', o: ['to have been built', 'to build', 'having built'], why: 'Passive reporting + perfect passive infinitive.' },
      { q: 'I can’t stand ___ what to do.', o: ['being told', 'to tell', 'having told'], why: '*Can’t stand* + passive *-ing*.' },
      { q: 'After her degree, she went on ___ a doctorate.', o: ['to do', 'doing', 'do'], why: 'A new stage: *go on to do*.' },
      { q: 'Living on campus means ___ a room with a stranger.', o: ['sharing', 'to share', 'share'], why: '*Mean* = involve + *-ing*.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Complete the second sentence so that it has a similar meaning. Use the word given.', items: [
      { q: 'It seems that the results were published early.', cue: 'BEEN', a: ['The results seem to have been published early.'], why: '*Seem* + perfect passive infinitive.' },
      { q: 'It’s a shame I didn’t study abroad.', cue: 'LIKE', a: ['I would like to have studied abroad.', 'I would have liked to study abroad.'], why: 'Unrealised past with *would like*.' },
      { q: 'I really don’t want to sit the exam again.', cue: 'DREAD', a: ['I dread sitting the exam again.', 'I dread having to sit the exam again.'], why: '*Dread* + *-ing*.' },
    ] },
    { t: 'ex', kind: 'wordform', h: 'Use the word in capitals to form a word that fits the gap.', items: [
      { q: 'She is a highly ___ teacher with thirty years’ experience.', base: 'QUALIFY', a: ['qualified'], why: 'An adjective after *highly*.' },
      { q: 'Many adults are embarrassed by their ___.', base: 'LITERATE', a: ['illiteracy'], why: 'A negative noun after *their*.' },
      { q: 'The new course is far more ___ than the old one.', base: 'PRACTICE', a: ['practical'], why: 'An adjective after *more*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'He dropped out [the] university after a year.', a: ['of'], why: '*Drop out of*.' },
      { s: 'When it comes to [write] essays, planning is everything.', a: ['writing'], why: '*When it comes to* + *-ing*.' },
      { s: 'I suggest the school [to start] later.', a: ['start', 'should start'], why: '*Suggest that* + subject + base form or *should*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the expressions with their meanings.', pairs: [
      ['rote learning', 'memorising by repetition'],
      ['scrape through', 'pass, but only just'],
      ['fall behind', 'make less progress than others'],
      ['a mature student', 'an adult who starts studying later'],
      ['vocational training', 'education for a particular job'],
    ] },
    { t: 'ex', kind: 'choice', h: 'Choose the best sentence for a proposal.', items: [
      { q: '', o: ['I would recommend that a mentoring scheme be introduced for first-year students.', 'Maybe they could do some mentoring or something.', 'Mentoring is cool, so let’s do it.'], why: 'A formal, specific recommendation.' },
      { q: '', o: ['Should this proposal be adopted, attendance would be likely to improve.', 'If you do this, it will be great.', 'Anyway, I hope you like my ideas!'], why: 'A formal, persuasive conclusion.' },
    ] },
  ],
};
