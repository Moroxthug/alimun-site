// English C1, unit 4, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Each lesson: a full explanation first (the rule in plain words, why, many examples, the usual mistakes, a text that
// uses it), then fewer exercises from controlled to free, one speaking task, and one task in the format of C1 Advanced.
// B2 unit 7 taught must have, can’t have, could have and might not have, and B2 unit 12 should have; this unit adds the C1 layer.
export const UNIT = {
  id: 'u4',
  title: 'Work in transition',
  goal: 'Talk about a changing world of work with precision: reason and judge the past with the full range of past modals, hedge and distance your claims the way professional and academic English does, use the collocations of careers and change, and read a set of views on the four-day week in the format of C1 Advanced Reading Part 8.',
  art: 'suitcase',
  tags: { skills: ['grammar', 'vocabulary', 'speaking', 'reading'], topics: ['past-modals', 'deduction', 'hedging', 'work', 'careers', 'four-day-week'], goals: ['foundations', 'professional', 'academic'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'You needn’t have worried',
      about: 'Reason about the past and judge past actions with the full range of modal + have: might well have, can’t possibly have, will have, would have, needn’t have and might have as a complaint.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'text', md: 'At B2 you learned the core of past deduction: ***must have*** (I’m sure it happened), ***can’t have*** or ***couldn’t have*** (I’m sure it didn’t), ***could have***, ***may have*** and ***might have*** (perhaps it happened), and ***should have*** for criticism. At C1 you need finer distinctions, because in real conversation people rarely say just *yes* or *no* about the past: they show **how** sure they are and **how they feel** about it.\n\nThe pattern is always the same: **modal + have + past participle**. What changes is the modal, and with it the meaning. The perfect *have* moves the modal’s meaning back in time: *She **must be** tired* (now) becomes *She **must have been** tired* (then).\n\nFirst, you can **grade** probability. ***Might well have*** and ***may well have*** mean *quite likely*: *He may well have taken the job.* ***Can’t possibly have*** and ***couldn’t possibly have*** make an impossibility stronger: *They can’t possibly have finished already.*\n\nSecond, two modals make **confident assumptions** from what you know about people and situations. ***Will have*** assumes something about the past from the present: *You’**ll have heard** the news, I suppose.* ***Would have*** assumes something about a past moment: *That **would have been** around 2019.*' },
          { t: 'table', caption: 'Past modals at C1', explain: ['head', 'col1'], head: ['Form', 'Meaning', 'Example'], rows: [
            ['must have done', 'I am sure it happened', 'She must have known about the merger.'],
            ['may well / might well have done', 'it is quite likely', 'He might well have been offered a better deal.'],
            ['can’t / couldn’t possibly have done', 'I am completely sure it did not happen', 'They can’t possibly have read the whole contract.'],
            ['will have done', 'I confidently assume it has happened', 'You’ll have seen the email from HR by now.'],
            ['would have done', 'I assume this about a past moment', 'That would have been just before the restructure.'],
            ['should have done (expectation)', 'it was expected to happen by now', 'The new laptops should have arrived yesterday.'],
            ['needn’t have done', 'it happened, but it was unnecessary', 'You needn’t have stayed late: the deadline moved.'],
            ['might / could have done (complaint)', 'you failed to do something you ought to have done', 'You might have told me you were leaving!'],
          ] },
        ],
        [
          { t: 'text', md: 'Two contrasts cause most of the trouble at this level.\n\n***Needn’t have done*** and ***didn’t need to do*** are not the same. *I **needn’t have printed** the slides* means I printed them, and it was a waste of effort. *I **didn’t need to print** the slides* simply says it was not necessary; usually it means I did not print them, though the context can change that.\n\n***Should have*** has two meanings. As **criticism** it says something was a good idea but did not happen: *We should have asked the team first.* As **expectation** it says something was due to happen: *The report should have reached you by now.* (I expect it has; if not, something is wrong.)\n\nFinally, ***might have*** and ***could have*** can be a **complaint**, with stress on the modal and often an exclamation mark: *You **might** have warned me!* The meaning is *You did not, and you should have*. It is common in British English and sounds annoyed, so use it with care at work.' },
          { t: 'examples', items: [
            { s: 'The office is empty. Everyone **must have gone** to the all-staff meeting.', n: 'A firm deduction from evidence.' },
            { s: 'She **may well have been** right to leave when she did.', n: '*May well have*: quite likely.' },
            { s: 'He **can’t possibly have been** promoted already; he only joined in March.', n: 'A strong negative deduction.' },
            { s: 'You’**ll have noticed** that the coffee machine has finally been fixed.', n: 'A confident assumption about the listener.' },
            { s: 'The firm’s first office? That **would have been** above the old bakery.', n: 'An assumption about a past fact.' },
            { s: 'I **needn’t have prepared** so much: the interview lasted ten minutes.', n: 'I prepared, but it was unnecessary.' },
            { s: 'I **didn’t need to commute** yesterday, so I worked from home.', n: 'It was not necessary, so I did not.' },
            { s: 'You **could have** at least **copied** me in!', n: 'A complaint about a past omission.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In fast speech, *must have* sounds like *must’ve* /mʌstəv/ and *should have* like *should’ve*. Never write *should of* or *must of*: the word is always *have*. And in a negative deduction, use *can’t have* or *couldn’t have*, not *mustn’t have*, which is rare and sounds wrong to most British speakers.' },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['He mustn’t have seen the message.', 'He can’t have seen the message.', 'Negative deduction uses *can’t* or *couldn’t have*.'],
            ['She can have forgotten.', 'She may (or might, could) have forgotten.', '*Can have* is not used for a positive deduction.'],
            ['I needn’t have gone, so I stayed at home.', 'I didn’t need to go, so I stayed at home.', '*Needn’t have* means you did it.'],
            ['We should of asked them.', 'We should have asked them.', 'The word is *have*, even if it sounds like *of*.'],
            ['He might have well left.', 'He might well have left.', '*Well* comes straight after the modal.'],
            ['She must have been knowing.', 'She must have known.', '*Know* is a state verb: no continuous form.'],
          ] },
          { t: 'dialogue', title: 'The morning after the announcement', lines: [
            { who: 'Nadia', s: 'You’ll have heard about the restructure. They told the whole design team at four o’clock.' },
            { who: 'James', s: 'I heard. Marta can’t possibly have known, though. She was signing off the budget for next year.' },
            { who: 'Nadia', s: 'She might well have suspected something. The directors had been in meetings all week.' },
            { who: 'James', s: 'They might have warned us! I spent the whole weekend on a proposal that’s now pointless.' },
            { who: 'Nadia', s: 'You needn’t have done that, to be fair. Nobody asked for it until March.' },
            { who: 'James', s: 'I know. I should have waited. The new structure should have been announced in January anyway.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best modal form.', items: [
            { q: 'Don’t worry about the slides: you ___ them. The client cancelled the call.', o: ['needn’t have printed', 'didn’t need printing', 'mustn’t have printed'], why: 'You printed them, but it was unnecessary: *needn’t have printed*.' },
            { q: 'He ___ already; he only started the course on Monday.', o: ['can’t possibly have qualified', 'mustn’t have qualified', 'needn’t have qualified'], why: 'A strong negative deduction: *can’t possibly have*.' },
            { q: 'You ___ the news by now. It’s been on every website since this morning.', o: ['will have seen', 'should seen', 'can have seen'], why: '*Will have*: a confident assumption about the listener.' },
            { q: 'It’s nearly noon. The new contract ___ by now; let’s check the post room.', o: ['should have arrived', 'needn’t have arrived', 'can’t have arrived'], why: 'Expectation: it was due to arrive.' },
            { q: 'Given how unhappy she was, she ___ handed in her notice. I wouldn’t be surprised.', o: ['may well have', 'may have well', 'must well have'], why: '*May well have* = quite likely; *well* follows the modal.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete each sentence with one word.', items: [
            { q: 'I ___ have bothered learning the old software: they replaced it a month later.', a: ['needn’t', 'neednt', 'need not'], why: 'It happened, but it was unnecessary.' },
            { q: 'You might ___ told me the meeting had moved!', a: ['have'], why: 'A complaint: *might have* + past participle.' },
            { q: 'The first time I met the director? That would ___ been at my interview.', a: ['have'], why: '*Would have been*: an assumption about a past moment.' },
            { q: 'She can’t ___ have been at the conference: she was in hospital that week.', a: ['possibly'], why: '*Can’t possibly have* strengthens the deduction.' },
          ] },
        ],
        [
          { t: 'text', md: 'In **C1 Advanced Speaking Part 2** you are given **three pictures** and two questions. You choose **two** of the pictures, compare them and answer the questions, speaking alone for about **one minute**. Then your partner answers a short question about your pictures in about thirty seconds.\n\nThe questions almost always ask you to **speculate**: *Why might the people be doing this? How might they be feeling?* This is exactly where past modals earn marks: *She **might well have been** working on this for weeks*, *They **must have just** finished.* Do not describe every detail; compare the situations and go beyond what you can see.' },
          { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Speaking Part 2): the pictures show people at turning points in their working lives. The questions are “Why might the people have made these changes?” and “How might they be feeling?” Choose the answer that would score best.', items: [
            { q: 'Pictures: a woman packing up her desk in an office; a man in an apron opening the shutters of a small bakery.', o: ['Both people seem to be at a turning point. The woman may well have been made redundant, judging by the box, whereas the man must have taken a big risk to open his own business. I’d imagine she feels anxious, while he’s probably nervous but proud.', 'In the first picture there is a woman. She has a box. There is a desk. In the second picture there is a man and a bakery.', 'The woman must to have lost her job and the man must opened a bakery. They feel bad and good.'], why: 'The first answer compares, speculates with a range of past modals and answers both questions.' },
            { q: 'Pictures: a young man in a training workshop learning to use a welding mask; an older woman at a laptop on a video call with a large team.', o: ['The man might have decided to retrain, perhaps because his old job disappeared, whereas the woman can’t possibly have started her career in remote management: she will have adapted over many years. He’s probably finding it exciting; she may well be under more pressure.', 'The man is learning. The woman is on a computer. They are working.', 'Maybe he changed job, maybe she changed job, maybe they are happy, maybe not.'], why: 'The first answer uses varied, precise modals and contrasts the two situations.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Speaking Part 2**, spend no more than a sentence describing. Use a linking word to compare (*whereas*, *while*, *unlike*), give the evidence for each guess (*judging by…*), and use the full range of modals: *may well have*, *can’t possibly have*, *will have*. If you run out of time before the second question, the examiner will stop you, so answer both questions early.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor, as if you were comparing two pictures.', tutor: 'omar', items: [
            { a: 'She may well have been made redundant, judging by the box on her desk.' },
            { a: 'He must have taken a big risk to open his own business.' },
            { a: 'They can’t possibly have known what was coming.' },
            { a: 'You needn’t have worried about the interview.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'It would appear that…',
      about: 'Hedge your claims and distance yourself from them with seem, tend to, arguably, to some extent and the softening would, as professional and academic English does.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: '**Hedging** means making a claim a little less absolute than it would otherwise be. It is not weakness or vagueness. A careful writer hedges because most claims about people, work and society are true **in general** rather than **in every case**, and a claim that goes beyond the evidence is easy to attack. In a report, an essay or a meeting, hedged claims sound more credible, not less.\n\nHedging also has a social job. It leaves room for the other person to disagree without losing face, which is why it is so common in British workplaces: *It might be worth looking at the figures again* is a much easier sentence to hear than *Your figures are wrong*.\n\n**Distancing** is a close relative. It shows that a claim comes from somewhere else, or that you are reporting rather than asserting it: *The policy **is said to** have saved money. **Apparently**, the trial was a success.*' },
          { t: 'table', caption: 'Ways to hedge and distance', explain: ['head', 'col0'], head: ['Type', 'Examples'], rows: [
            ['Verbs', 'seem to, appear to, tend to, suggest, indicate'],
            ['would + verb', 'It would seem that…, It would appear that…, I would suggest that…'],
            ['Adverbs', 'arguably, apparently, seemingly, presumably, largely, broadly, generally'],
            ['Phrases of extent', 'to some extent, to a certain degree, in some respects, by and large, up to a point'],
            ['Probability', 'it is likely that, there is a tendency for, in all likelihood'],
            ['Quantity', 'many rather than all, a number of, the majority of, in most cases'],
            ['Impersonal passives', 'It has been suggested that…, It is widely thought that…, X is believed to…'],
          ] },
        ],
        [
          { t: 'text', md: 'Notice how a strong claim changes as you hedge it, one layer at a time. *Remote work reduces productivity* is a claim almost nobody can defend. *Remote work **can** reduce productivity* allows exceptions. *Remote work **would appear to** reduce productivity **in some roles*** limits the claim and signals that the evidence is not complete. *It **has been suggested** that remote work **tends to** reduce productivity in some roles* distances the writer from it altogether.\n\nThe key is to hedge **the right amount**. One or two hedges per claim are enough. Piling them up (*It might possibly perhaps seem that…*) sounds evasive, and in an exam it reads as if you have nothing to say.\n\n***Arguably*** deserves a special note. It does not mean *perhaps*: it means *I can argue this, and I am about to*. *This is **arguably** the biggest change to office life in fifty years* is a confident claim, softened just enough to invite debate.' },
          { t: 'examples', items: [
            { s: '**It would appear that** staff value flexibility more than a pay rise.', n: '*Would appear* softens the claim and suggests evidence.' },
            { s: 'Younger employees **tend to** change jobs more often.', n: '*Tend to* makes a general claim, not a universal one.' },
            { s: 'The new system is **arguably** the best investment the firm has made.', n: 'A confident claim, open to debate.' },
            { s: '**To some extent**, the problem is one of communication.', n: 'Limits how far the claim goes.' },
            { s: 'The scheme **is believed to** have reduced staff turnover.', n: 'Distancing: a belief reported, not your claim.' },
            { s: '**By and large**, the feedback has been positive.', n: 'Informal-to-neutral: *in general*.' },
            { s: 'I **would suggest that** we wait for the full results.', n: 'A softened recommendation in a meeting.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Hedge **claims**, not **facts**. *The meeting **seems to** be on Tuesday* sounds odd if the calendar says Tuesday. Hedges belong with interpretations, causes, predictions and generalisations: the places where a reasonable person could disagree.' },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['It might possibly perhaps seem that it is true.', 'It would seem that this is true.', 'One hedge is enough; three sound evasive.'],
            ['Staff are tending to leave earlier.', 'Staff tend to leave earlier.', '*Tend to* describes a general habit: simple form.'],
            ['Arguably, I don’t know.', 'Arguably, this is the main cause.', '*Arguably* introduces a claim you can defend.'],
            ['To some extents, it works.', 'To some extent, it works.', 'The phrase is singular: *to some extent*.'],
            ['It is suggested by many that…', 'It has been suggested that…', 'The impersonal passive needs no agent.'],
            ['The meeting appears to be at nine.', 'The meeting is at nine.', 'Do not hedge a simple, known fact.'],
          ] },
          { t: 'reading', title: 'From an internal report on flexible working', md: 'The six-month trial of flexible hours would appear to have been broadly successful. Feedback from staff has, by and large, been positive, and absence tends to have been lower in teams that took part, although it is too early to say whether this is a direct result of the scheme.\n\nThere are, to some extent, signs of strain. A number of managers reported that it had become harder to arrange meetings, and it has been suggested that newer staff may feel less connected to their teams. These concerns are arguably the most important issue for the next phase.\n\nWe would therefore recommend that the scheme is extended for a further six months, with a clearer policy on core hours.' },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Is the claim hedged or stated directly?', groups: ['hedged', 'direct'], explain: ['groups'], items: [
            { s: 'The trial would appear to have been broadly successful.', g: 0, why: '*Would appear* and *broadly* soften the claim.' },
            { s: 'Flexible hours make everyone happier.', g: 1, why: 'A universal claim with no hedge.' },
            { s: 'Newer staff may feel less connected.', g: 0, why: '*May* allows for exceptions.' },
            { s: 'Meetings are now impossible to arrange.', g: 1, why: 'An absolute claim.' },
            { s: 'By and large, the feedback has been positive.', g: 0, why: '*By and large* = in general.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Make each claim more cautious, starting with the words given.', items: [
            { q: 'Remote workers are less loyal to their employers.', cue: 'It has been suggested', a: ['It has been suggested that remote workers are less loyal to their employers.', 'It has been suggested that remote workers may be less loyal to their employers.', 'It has been suggested that remote workers tend to be less loyal to their employers.'], why: 'An impersonal passive distances the writer from the claim.' },
            { q: 'Staff value flexibility more than salary.', cue: 'It would appear', a: ['It would appear that staff value flexibility more than salary.', 'It would appear that staff value flexibility more than they value salary.'], why: '*It would appear that* + clause.' },
            { q: 'Younger employees change jobs more often.', cue: 'Younger employees tend', a: ['Younger employees tend to change jobs more often.'], why: '*Tend to* turns a universal claim into a general one.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'wordform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 3): use the word in capitals to form a word that fits the gap.', items: [
            { q: 'The four-day week is ___ the biggest change to working life in a generation.', base: 'argue', a: ['arguably'], why: 'An adverb that hedges a confident claim: *arguably*.' },
            { q: '___, the trial was a success, although nobody has seen the data.', base: 'apparent', a: ['Apparently'], why: 'An adverb that distances: *apparently*.' },
            { q: 'There is a growing ___ for firms to offer hybrid contracts.', base: 'tend', a: ['tendency'], why: 'A noun after *a growing*: *tendency*.' },
            { q: 'In all ___, the scheme will be extended.', base: 'like', a: ['likelihood'], why: 'The fixed phrase *in all likelihood*.' },
            { q: 'The findings are ___ consistent with earlier studies.', base: 'broad', a: ['broadly'], why: 'An adverb before an adjective: *broadly consistent*.' },
            { q: 'It would be a ___ to say that every employee wants to work from home.', base: 'general', a: ['generalisation', 'generalization'], why: 'A noun after *a*: *generalisation* (British spelling with *s*).' },
            { q: 'The manager’s ___ that staff would object proved correct.', base: 'presume', a: ['presumption'], why: 'A noun after *The manager’s*: *presumption*.' },
            { q: 'The figures give no clear ___ of whether the change has saved money.', base: 'indicate', a: ['indication'], why: 'A noun after *no clear*: *indication*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 3** there are **eight** gaps in one text, and each answer is formed from the word in capitals. At C1, many answers need **two changes**: a prefix and a suffix (*un-…-ably*), or an internal change of spelling (*argue* → *arguably*, without the *e*). Check spelling carefully: a word that is almost right scores nothing.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor, as if you were presenting a report in a meeting.', tutor: 'mei', items: [
            { a: 'It would appear that the trial has been broadly successful.' },
            { a: 'To some extent, the problem is one of communication.' },
            { a: 'This is arguably the most important issue for the next phase.' },
            { a: 'I would suggest that we wait for the full results.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'A steep learning curve',
      about: 'Talk about careers and change with natural collocations: climb the ladder, a sideways move, take on responsibility, hand in your notice.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'At C1, knowing a word is not enough: you need to know **which words it lives with**. You *hand in* your notice, you do not *give in* it. You *take on* responsibility, but you *gain* experience. A career can *take off* or *stall*. These pairings, called **collocations**, are what make English sound fluent, and they are exactly what Reading and Use of English Part 1 tests.\n\nMany work collocations are **metaphors** of movement. A career is a **ladder** (*climb the ladder*, *a rung on the ladder*), a **path** (*a career path*, *a change of direction*) or a **journey** (*at a crossroads*). A *sideways move* changes your job without making it more senior; a *step down* makes it less senior, often by choice. A *steep learning curve* means you have a lot to learn very quickly: the curve is steep because knowledge rises fast.\n\nOthers describe the **conditions** of work: a *heavy workload*, *job security*, *a high turnover of staff*, *a flexible schedule*, *a gap in your CV*, *burnout*.' },
          { t: 'table', caption: 'Collocations of work and change', explain: ['head', 'col1'], head: ['Collocation', 'Meaning'], rows: [
            ['climb the (career) ladder', 'move up into more senior jobs'],
            ['a sideways move', 'a new job at the same level'],
            ['a steep learning curve', 'a lot to learn in a short time'],
            ['take on responsibility / staff / a project', 'accept or start something new'],
            ['hand in your notice', 'formally say that you are leaving a job'],
            ['be made redundant', 'lose your job because the job no longer exists'],
            ['a gap in your CV', 'a period with no job'],
            ['a high turnover (of staff)', 'many people leaving and joining'],
            ['go freelance', 'start working for yourself for several clients'],
            ['carve out a niche', 'create a special area where you are successful'],
          ] },
        ],
        [
          { t: 'examples', items: [
            { s: 'After ten years of **climbing the ladder**, she decided to **step down** and teach.', n: 'Up the ladder, then a voluntary move down.' },
            { s: 'Moving to the sales team was **a sideways move**, but it opened new doors.', n: 'Same level, different direction.' },
            { s: 'The first six months were **a steep learning curve**.', n: 'There was a great deal to learn.' },
            { s: 'He **handed in his notice** on Friday and left a month later.', n: '*Hand in* (not *give in*) your notice.' },
            { s: 'Over two hundred staff **were made redundant** when the factory closed.', n: 'The jobs disappeared.' },
            { s: 'She **went freelance** and gradually **carved out a niche** in medical translation.', n: 'Working for herself in a specialist area.' },
            { s: 'Firms with **a high turnover of staff** spend a fortune on recruitment.', n: 'Many people leave and must be replaced.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Learn collocations in **chunks**, not as single words. Write *take on responsibility* in your notebook, not *responsibility*. When you meet a new noun, note the verb that goes with it and any preposition: *make a career change*, *gain experience **in***, *apply **for** a post*.' },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I gave in my notice.', 'I handed in my notice.', 'The collocation is *hand in* (or *give*) *your notice*.'],
            ['She was made redundancy.', 'She was made redundant.', '*Made* + adjective; *redundancy* is the noun.'],
            ['He took responsibility of the team.', 'He took on responsibility for the team.', '*Take on* responsibility *for*.'],
            ['I made a lot of experience.', 'I gained a lot of experience.', 'You *gain* or *get* experience.'],
            ['The learning curve was very high.', 'It was a steep learning curve.', 'A learning curve is *steep*.'],
            ['She climbed up the ladder of career.', 'She climbed the career ladder.', 'The fixed phrase is *climb the (career) ladder*.'],
          ] },
          { t: 'dialogue', title: 'Catching up after a career change', lines: [
            { who: 'Grace', s: 'So you finally handed in your notice! I thought you’d be climbing the ladder there for ever.' },
            { who: 'Callum', s: 'So did I. But after the second restructure, half my team were made redundant, and the turnover was awful.' },
            { who: 'Grace', s: 'And now you’ve gone freelance. Is it a steep learning curve?' },
            { who: 'Callum', s: 'Very. I’ve had to take on everything: invoices, clients, marketing. But I’m slowly carving out a niche in training.' },
            { who: 'Grace', s: 'Not bad for what everyone called a step down.' },
            { who: 'Callum', s: 'It felt like a sideways move at first. Now it feels like the best decision I’ve made.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'colloc', h: 'Which words go naturally with the key word?', items: [
            { key: 'take on', o: ['responsibility', 'new staff', 'a challenge', 'experience', 'redundant'], a: [0, 1, 2], why: 'You *take on* responsibility, staff or a challenge; you *gain* experience.' },
            { key: 'a high', o: ['turnover', 'workload', 'salary', 'ladder', 'notice'], a: [0, 1, 2], why: '*A high turnover / workload / salary*; *a heavy workload* is also common.' },
            { key: 'gain', o: ['experience', 'skills', 'a promotion', 'notice', 'a niche'], a: [0, 1, 2], why: 'You *gain* experience, skills or a promotion.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the beginnings and the endings.', pairs: [
            ['After the merger, forty people were made', 'redundant.'],
            ['Retraining as a nurse was a steep learning', 'curve.'],
            ['She left her job and went', 'freelance.'],
            ['He spent a decade climbing the career', 'ladder.'],
            ['Taking a year off left a gap in her', 'CV.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 1): read the text, sentence by sentence, and choose the word that best fits each gap.', items: [
            { q: 'When Lena was made ___ at the age of forty-five, she saw it as a chance to start again.', o: ['redundant', 'dismissed', 'discharged', 'removed'], why: 'The fixed phrase is *be made redundant*.' },
            { q: 'Rather than climbing back up the career ___, she decided to retrain as a garden designer.', o: ['ladder', 'stairs', 'steps', 'scale'], why: '*The career ladder* is the fixed metaphor.' },
            { q: 'The first year was a ___ learning curve, and there were days when she wondered whether she had made a mistake.', o: ['steep', 'high', 'tall', 'sharp'], why: 'A learning curve is *steep*.' },
            { q: 'She ___ on small projects for friends to build up a portfolio.', o: ['took', 'got', 'put', 'held'], why: '*Take on* a project.' },
            { q: 'Gradually she ___ out a niche designing gardens for small urban spaces.', o: ['carved', 'cut', 'shaped', 'dug'], why: 'The collocation is *carve out a niche*.' },
            { q: 'She admits that the move was, in ___ ways, a step down in income.', o: ['some', 'any', 'much', 'little'], why: '*In some ways* is a common hedging phrase.' },
            { q: 'Even so, she has no ___ about leaving the corporate world behind.', o: ['regrets', 'remorse', 'sorrow', 'guilt'], why: 'The fixed phrase is *have no regrets about*.' },
            { q: 'Her advice to anyone at a career ___ is simple: take the risk while you can.', o: ['crossroads', 'junction', 'corner', 'turning'], why: '*At a crossroads* is the fixed metaphor for a decision point.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 1** there are **eight** gaps, each with **four** options that often mean almost the same thing. The answer depends on **collocation** (*steep* curve, not *high*), on a **fixed phrase** (*have no regrets about*) or on the **grammar** that follows (*take on* + noun). Try each option in the whole sentence, and read the words after the gap as carefully as the words before it.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'kofi', items: [
            { a: 'The first six months were a steep learning curve.' },
            { a: 'It felt like a sideways move at first.' },
            { a: 'She went freelance and carved out a niche in training.' },
            { a: 'I handed in my notice and have no regrets.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'Four days, five days’ work?',
      about: 'Read four views on the four-day week, match statements to them in the format of C1 Advanced Reading Part 8, and notice how each writer hedges and speculates.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'This lesson brings the unit together. You will read four short pieces by people who have lived with a four-day working week, in different jobs. They use the past modals, hedging and work collocations from this unit.\n\nIn **C1 Advanced Reading and Use of English Part 8** you read one long text in sections, or several short texts, and match about **ten** statements to them. The statements paraphrase the texts, so look for the **idea**, not the same words, and expect the same section to be the answer more than once.' },
          { t: 'reading', title: 'Four days, five days’ work?', md: '**A. Tomasz, operations manager at a software company**\nWhen we moved to a four-day week, I assumed productivity would fall by a fifth. It didn’t. What happened was that meetings shrank: nobody wanted to waste a precious day sitting through updates that could have been an email. I must admit I needn’t have worried as much as I did. That said, the change suits some roles far better than others, and our customer support team still works a rota so that someone answers the phone on Fridays.\n\n**B. Grace, a nurse on a hospital ward**\nPeople talk about the four-day week as if it were a new idea. On the ward, many of us have worked long shifts for years, and in effect that is a compressed week: three or four very long days instead of five shorter ones. It would appear that the office version is something rather different, since the hours are actually reduced. I suspect it would be hard to apply in health care, at least without hiring a great many more staff, and that is not a decision a ward manager can make.\n\n**C. Ravi, a researcher who studies working patterns**\nIt is tempting to read the early results as proof, but the firms that volunteer for trials tend to be the ones most likely to succeed: they are already flexible, often small, and keen on the idea. The results may well look rather different when a less enthusiastic employer is told to adopt it. To some extent the benefits seem real, particularly for wellbeing, but I would want to see what happens after five years rather than six months.\n\n**D. Leila, owner of a small café**\nI tried it with my staff last year, and I should have thought it through more carefully. A café cannot close on a Friday, so in practice I had to take on two part-time workers to cover the extra day. The staff loved it, and nobody has handed in their notice since, which, given the high turnover in hospitality, is arguably worth more than the extra wages. But I can’t pretend it has saved me money.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 8): which writer (A Tomasz, B Grace, C Ravi, D Leila) makes each point? A writer can be the answer more than once.', items: [
            { q: 'Which writer suggests that the evidence so far may be misleading because of who took part?', o: ['C Ravi', 'A Tomasz', 'B Grace', 'D Leila'], why: '*the firms that volunteer for trials tend to be the ones most likely to succeed*' },
            { q: 'Which writer admits to having been more anxious than necessary?', o: ['A Tomasz', 'B Grace', 'C Ravi', 'D Leila'], why: '*I needn’t have worried as much as I did.*' },
            { q: 'Which writer points out that something similar already exists in their profession?', o: ['B Grace', 'A Tomasz', 'C Ravi', 'D Leila'], why: '*that is a compressed week*' },
            { q: 'Which writer says the change led to an unexpected improvement in the way people use their time together?', o: ['A Tomasz', 'B Grace', 'C Ravi', 'D Leila'], why: '*meetings shrank*' },
            { q: 'Which writer regrets not planning the change better?', o: ['D Leila', 'A Tomasz', 'B Grace', 'C Ravi'], why: '*I should have thought it through more carefully.*' },
            { q: 'Which writer believes the decision lies with people above them?', o: ['B Grace', 'A Tomasz', 'C Ravi', 'D Leila'], why: '*that is not a decision a ward manager can make*' },
            { q: 'Which writer values keeping staff more than the cost of the scheme?', o: ['D Leila', 'A Tomasz', 'B Grace', 'C Ravi'], why: '*nobody has handed in their notice since, which… is arguably worth more than the extra wages*' },
            { q: 'Which writer would like evidence collected over a longer period?', o: ['C Ravi', 'A Tomasz', 'B Grace', 'D Leila'], why: '*I would want to see what happens after five years rather than six months.*' },
            { q: 'Which writer mentions that one part of their organisation could not follow the new pattern fully?', o: ['A Tomasz', 'B Grace', 'C Ravi', 'D Leila'], why: '*our customer support team still works a rota*' },
            { q: 'Which writer had to recruit extra people to make the change work?', o: ['D Leila', 'A Tomasz', 'B Grace', 'C Ravi'], why: '*I had to take on two part-time workers*' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 8**, read the statements first and underline the key idea in each (*more anxious than necessary*). Then scan the texts for that idea in **other words** (*I needn’t have worried as much as I did*). Watch out for traps: Grace also talks about hiring staff, but only as a guess about health care; Leila is the one who actually did it.' },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the words each writer uses to hedge, speculate or judge the past.', items: [
            { s: 'I [needn’t have worried] as much as I did.', why: '*Needn’t have*: the worry happened but was unnecessary.' },
            { s: '[It would appear that] the office version is something rather different.', why: 'A hedge that softens Grace’s claim.' },
            { s: 'The results [may well] look rather different with a less enthusiastic employer.', why: '*May well*: quite likely.' },
            { s: 'I [should have thought] it through more carefully.', why: '*Should have*: criticism of her own past action.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the words from the texts with their meanings.', pairs: [
            ['a rota', 'a plan of who works when'],
            ['a compressed week', 'the same hours in fewer days'],
            ['keen on', 'enthusiastic about'],
            ['in practice', 'in reality, not in theory'],
            ['turnover', 'the rate at which staff leave and are replaced'],
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes when you discuss research and trials', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['The trial proves the four-day week works.', 'The trial would appear to show that it can work.', 'One trial rarely proves anything: hedge.'],
            ['All workers are happier.', 'Most workers tend to report being happier.', 'Generalise with care: *most*, *tend to*.'],
            ['The firms must have been lucky.', 'The firms may well have been unusually suited to it.', 'Speculate, but with evidence and nuance.'],
          ] },
          { t: 'text', md: 'Now give your own view, as you would in **Speaking Part 4**, where the examiner asks you and your partner broader questions about the topic. Use a hedge, a past modal and a collocation from the unit, and give a reason. *I’d say the four-day week **tends to** suit office jobs better than shift work. A friend of mine **took on** a role at a firm that tried it, and she **might well have left** otherwise.*' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor, as if you were giving your opinion in a discussion.', tutor: 'sofia', items: [
            { a: 'To some extent the benefits seem real, particularly for wellbeing.' },
            { a: 'The firms that volunteer tend to be the ones most likely to succeed.' },
            { a: 'I should have thought it through more carefully.' },
            { a: 'Keeping good staff is arguably worth more than the extra wages.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the best option.', items: [
      { q: 'He ___ the email: he hasn’t replied, and he always replies at once.', o: ['can’t have read', 'mustn’t have read', 'needn’t have read'], why: 'Negative deduction: *can’t have*.' },
      { q: 'I ___ so early: the office didn’t open until ten.', o: ['needn’t have arrived', 'didn’t need arriving', 'mustn’t have arrived'], why: 'I arrived, but it was unnecessary.' },
      { q: 'You ___ the news by now; it’s been everywhere.', o: ['will have heard', 'can have heard', 'should heard'], why: '*Will have*: a confident assumption.' },
      { q: 'She ___ been offered a better deal elsewhere. It would explain why she left.', o: ['may well have', 'may have well', 'can well have'], why: '*May well have*: quite likely.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Make each claim more cautious, starting with the words given.', items: [
      { q: 'Flexible hours reduce absence.', cue: 'It would appear', a: ['It would appear that flexible hours reduce absence.', 'It would appear that flexible hours can reduce absence.'], why: '*It would appear that* + clause.' },
      { q: 'Small firms adapt more quickly.', cue: 'Small firms tend', a: ['Small firms tend to adapt more quickly.'], why: '*Tend to* + base form.' },
    ] },
    { t: 'ex', kind: 'wordform', h: 'Use the word in capitals to form a word that fits the gap.', items: [
      { q: 'It is ___ the most important change in a generation.', base: 'argue', a: ['arguably'], why: 'Hedging adverb, no *e*.' },
      { q: 'In all ___, the policy will continue.', base: 'like', a: ['likelihood'], why: '*In all likelihood*.' },
      { q: 'There is a ___ for younger staff to move more often.', base: 'tend', a: ['tendency'], why: 'A noun after *a*.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Choose the word that best fits each gap.', items: [
      { q: 'Retraining was a ___ learning curve.', o: ['steep', 'high', 'tall', 'sharp'], why: 'A *steep* learning curve.' },
      { q: 'She ___ in her notice in June.', o: ['handed', 'gave', 'put', 'took'], why: '*Hand in your notice*.' },
      { q: 'He slowly ___ out a niche in medical writing.', o: ['carved', 'cut', 'dug', 'shaped'], why: '*Carve out a niche*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'Two hundred people were made [redundancy].', a: ['redundant'], why: '*Made* + adjective.' },
      { s: 'We should [of] asked the team first.', a: ['have'], why: 'The word is *have*.' },
      { s: 'I [made] a lot of experience abroad.', a: ['gained', 'got'], why: 'You *gain* experience.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the collocations with their meanings.', pairs: [
      ['a sideways move', 'a new job at the same level'],
      ['go freelance', 'work for yourself for several clients'],
      ['a gap in your CV', 'a period with no job'],
      ['a high turnover', 'many staff leaving and joining'],
    ] },
  ],
};
