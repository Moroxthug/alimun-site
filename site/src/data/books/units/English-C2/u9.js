// English C2, unit 9, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Debate and argument: the parts of an argument (claim, reason, evidence, warrant, concession, rebuttal), naming fallacies
// politely, disagreeing at C2 in a discussion, and the essay on two texts. Exam work in the format of C2 Proficiency:
// Reading and Use of English Part 6, Listening Part 3, Speaking Part 2 and Writing Part 1.
export const UNIT = {
  id: 'u9',
  title: 'Debate and argument',
  goal: 'Build an argument from claim to rebuttal, recognise and name the common fallacies without giving offence, challenge and concede in a discussion while holding your ground, and summarise and evaluate two opinion pieces in an essay in the format of C2 Proficiency Writing Part 1.',
  art: 'parrot',
  tags: { skills: ['vocabulary', 'grammar', 'reading', 'listening', 'speaking', 'writing'], topics: ['argument', 'concession', 'rebuttal', 'fallacies', 'disagreeing', 'discussion', 'debate', 'compulsory-voting', 'essay', 'summarising'], goals: ['foundations', 'academic'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'Granted, but it does not follow',
      about: 'Build an argument in its parts, claim, reason, evidence, warrant, concession and rebuttal, and signal each move with granted, that said and it does not follow that.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'At C2 you are expected to **build** an argument that a sceptical reader cannot easily knock down, and to **take apart** someone else’s without simply contradicting it. Both depend on seeing that an argument has parts.\n\nThe **claim** is the position: *Voting should be compulsory.* The **reason** says why: *governments elected by a minority lack legitimacy.* The **evidence** supports the reason: figures, examples, research. The **warrant** is the assumption that links evidence to claim: *a government should represent the whole population.* Warrants are usually left unsaid, which is why arguments break down: two people can agree on every fact and still disagree, because their unstated assumptions differ.\n\nA strong argument also anticipates the other side. A **concession** admits that an opposing point has some force: *Granted, compulsion sits uneasily with freedom.* A **rebuttal** explains why it does not defeat the claim: *That said, we already accept compulsory jury service.*' },
          { t: 'table', caption: 'The parts of an argument', explain: ['head', 'col0', 'col1'], head: ['Part', 'What it does', 'Typical language'], rows: [
            ['Claim', 'states the position', 'I would argue that… / The case for… is overwhelming.'],
            ['Reason', 'says why', 'on the grounds that… / This is because…'],
            ['Evidence', 'supports the reason', 'As the figures show… / Take the case of…'],
            ['Warrant', 'links evidence and claim, often unsaid', 'If we accept that…, then…'],
            ['Concession', 'admits the strength of the other side', 'Granted, … / Admittedly, … / It is true that…'],
            ['Rebuttal', 'shows why the concession does not decide the matter', 'That said, … / Even so, … / It does not follow that…'],
          ] },
        ],
        [
          { t: 'text', md: '**Granted, admittedly** and **to be sure** introduce a concession and promise a turn. **That said, even so, nonetheless** and **be that as it may** introduce the rebuttal. In one sentence, use **while** or **although**: *While it is true that turnout is rising, it remains low among the young.*\n\n**It does not follow that** attacks the logic, not the facts: you accept the evidence but deny that it leads to the conclusion. **This is not to say that** blocks a misreading of your own position. And the **concessive inversion** is a mark of formal C2 style: ***Persuasive as** this argument is, it overlooks the cost. **Much as** I admire the proposal, I cannot support it.*' },
          { t: 'examples', items: [
            { s: '**Granted**, the scheme is expensive. **That said**, the cost of doing nothing is higher.', n: 'Concession, then rebuttal.' },
            { s: 'The economy grew. **It does not follow that** the policy caused the growth.', n: 'Accepts the fact, denies the link.' },
            { s: '**This is not to say that** experts are always right, only that they deserve a hearing.', n: 'Blocks a misreading of the speaker’s view.' },
            { s: '**Plausible as** the theory sounds, there is no evidence for it.', n: 'Concessive inversion: adjective + *as* + subject + verb.' },
            { s: 'The argument **rests on an unstated assumption**: that what is popular is right.', n: 'Exposing the warrant.' },
          ] },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['Granted that the plan is costly.', 'Granted, the plan is costly.', '*Granted* as a sentence adverb takes a comma and a full clause.'],
            ['Despite it is popular, it is unfair.', 'Although it is popular, it is unfair.', '*Despite* takes a noun or *-ing*, not a clause.'],
            ['As persuasive as it is, it fails.', 'Persuasive as it is, it fails.', 'The concessive inversion drops the first *as*.'],
            ['Admittedly, it is cheap. And it works.', 'Admittedly, it is cheap. However, it does not work.', 'A concession must be followed by a turn.'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'A seminar on banning cars from city centres', lines: [
            { who: 'Helen', s: 'My claim is simple: private cars should be banned from the centre, on the grounds that the air there is now a health hazard.' },
            { who: 'Owen', s: 'Granted, the air is poor. It does not follow that a ban is the answer. You could tax the most polluting vehicles instead.' },
            { who: 'Helen', s: 'That rests on an assumption: that people respond to price. The wealthy may simply pay.' },
            { who: 'Owen', s: 'Fair point. That said, a ban hits shop owners hardest, and they did nothing to cause the problem.' },
            { who: 'Helen', s: 'This is not to say their losses do not matter. But damaging as a ban may be in the short term, the long-term gain is a centre people want to visit.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'What does each sentence do in the argument?', groups: ['Claim', 'Evidence', 'Concession', 'Rebuttal'], explain: ['groups'], items: [
            { s: 'I would argue that the four-day week benefits employers as much as staff.', g: 0, why: '*I would argue that* introduces the claim.' },
            { s: 'Take the case of the town that closed its library and saw literacy fall.', g: 1, why: '*Take the case of* introduces an example.' },
            { s: 'Admittedly, some employers would struggle to adapt.', g: 2, why: '*Admittedly* concedes a point.' },
            { s: 'It is true that the policy has its critics.', g: 2, why: 'An admission of the opposing view.' },
            { s: 'Even so, the benefits clearly outweigh the costs.', g: 3, why: '*Even so* turns the concession around.' },
            { s: 'It does not follow that the scheme should be scrapped.', g: 3, why: 'Denies the opposing conclusion.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the expression that fits best.', items: [
            { q: 'Many graduates earn more. ___ a degree is the cause of their higher income.', o: ['It does not follow that', 'Granted,', 'Be that as it may,'], why: 'The fact is accepted but the causal link is denied.' },
            { q: '___, the proposal has some merit. Nonetheless, it is unaffordable.', o: ['Admittedly', 'Consequently', 'It does not follow that'], why: 'A concession that prepares for *nonetheless*.' },
            { q: 'Cheap ___ the flights are, their cost to the climate is high.', o: ['as', 'though it', 'so'], why: 'Concessive inversion.' },
            { q: 'I support the reform. ___ it will solve every problem.', o: ['This is not to say that', 'It follows that', 'Granted that'], why: 'Blocks a misreading of the speaker’s position.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Complete the second sentence so that it has a similar meaning to the first. Use the word given and do not change it. Write three to eight words, including the word given.', items: [
            { q: 'Although the idea is attractive, it is impractical.', cue: 'as', a: ['Attractive as the idea is, it is impractical.', 'Attractive as it is, the idea is impractical.', 'Attractive as the idea may be, it is impractical.'], why: 'Concessive inversion: *Attractive as the idea is*.' },
            { q: 'Crime has fallen, but that does not prove the policy worked.', cue: 'follow', a: ['Crime has fallen, but it does not follow that the policy worked.'], why: '*It does not follow that* denies the link.' },
            { q: 'I admire the proposal a great deal, but I cannot support it.', cue: 'much', a: ['Much as I admire the proposal, I cannot support it.'], why: '*Much as* + clause: a formal concession.' },
          ] },
        ],
        [
          { t: 'text', md: 'In **C2 Proficiency Reading and Use of English Part 6** you read a long text from which **seven paragraphs** have been removed. They follow the text in a different order, with **one extra paragraph** that fits nowhere. The task tests how well you follow the **structure of an argument**: what refers back to what, where a concession turns into a rebuttal. The clues are small words: *this, those, such, that last link, yet, granted*. Check both directions: a paragraph must follow what comes before **and** lead into what comes after. This text is **shortened**, but it has the exam’s shape.' },
          { t: 'reading', title: 'Arguing the other side', md: 'Every Thursday evening Margaret Ellison asks a dozen teenagers to defend opinions they find repugnant. She has coached school debaters for nearly twenty years. “If you can only argue for what you already believe,” she says, “you are not arguing. You are reciting.”\n\n[gap one]\n\nThose questions are chosen with care. A topic that is too remote produces lazy reasoning, she has found, while one that is too personal produces tears. The ideal is a question on which students hold firm views but have rarely been asked to justify them.\n\n[gap two]\n\nWhat she is teaching is the difference between a claim and an argument. An argument links a position to reasons, the reasons to evidence, and the evidence back to the claim by way of an assumption the audience can be expected to share.\n\n[gap three]\n\nBringing those assumptions into the open is uncomfortable, and not only for teenagers. Ellison recalls a parents’ evening at which two fathers grew visibly irritated as their own premises were questioned.\n\n[gap four]\n\nConcession is, in fact, the skill she rates most highly. Novice debaters treat every admission as a defeat. Experienced ones understand that granting a minor point costs little and buys a great deal of credibility.\n\n[gap five]\n\nCritics of competitive debating argue that it rewards cleverness over conviction, producing young people who can argue anything and believe nothing. Ellison does not dismiss the objection.\n\n[gap six]\n\nFormer students say the honest round is harder than any competition. Having learned to dismantle arguments, they find their own beliefs exposed to the same treatment.\n\n[gap seven]' },
        ],
        [
          { t: 'reading', title: 'The removed paragraphs', md: '**A.** The idea is older than it sounds. Students of rhetoric in the ancient world were made to argue both sides of a case. Ellison applies the principle to questions her students care about: school uniforms, the voting age, whether zoos should exist.\n\n**B.** Justification is where most of them stumble. Asked why zoos should close, a fourteen-year-old will offer a feeling, that they are cruel, and assume the case is made. Ellison’s response never varies: cruel according to what, and how do you know?\n\n**C.** It is that last link, the unstated assumption, that interests her most. “When two people shout past each other,” she says, “they usually agree on the facts. What they disagree about is something neither has said out loud.”\n\n**D.** Yet the discomfort, she insists, is the point. A student forced to admit that an opponent has a fair point, and then to explain why it does not change her conclusion, has learned something no reading can teach.\n\n**E.** This is not to say that anything goes. Ellison is scathing about polite surrender, conceding so much that no position remains. A concession must always be followed by a *but*, and the *but* must carry weight.\n\n**F.** Granted, she says, a debater never asked what she actually thinks may come to see every question as a game. That is why each season ends with the honest round, in which students argue for the side they genuinely hold.\n\n**G.** Some of them change their minds as a result. Ellison sees this not as a failure of conviction but as its opposite: a belief that has survived its strongest objection is worth far more than one that has never met it.\n\n**H.** Competitions, by contrast, are judged on a strict formula, and judges are trained to set aside their own views on the motion.' },
          { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 6): choose the paragraph A to H that fits each gap. There is one paragraph you do not need. (The text is shortened.)', items: [
            { q: 'Which paragraph fits gap one?', o: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'], why: 'A lists *questions her students care about*; the next paragraph begins *Those questions*.' },
            { q: 'Which paragraph fits gap two?', o: ['B', 'A', 'C', 'D', 'E', 'F', 'G', 'H'], why: '*Justification* picks up *asked to justify them*; *how do you know?* leads to claim and argument.' },
            { q: 'Which paragraph fits gap three?', o: ['C', 'A', 'B', 'D', 'E', 'F', 'G', 'H'], why: '*That last link, the unstated assumption* refers back; the next paragraph begins *Bringing those assumptions into the open*.' },
            { q: 'Which paragraph fits gap four?', o: ['D', 'A', 'B', 'C', 'E', 'F', 'G', 'H'], why: '*Yet the discomfort* answers the irritated fathers; *admit… a fair point* leads into concession.' },
            { q: 'Which paragraph fits gap five?', o: ['E', 'A', 'B', 'C', 'D', 'F', 'G', 'H'], why: '*This is not to say that anything goes* limits the praise of conceding minor points.' },
            { q: 'Which paragraph fits gap six?', o: ['F', 'A', 'B', 'C', 'D', 'E', 'G', 'H'], why: '*Granted, she says* follows *does not dismiss the objection*, and introduces *the honest round*.' },
            { q: 'Which paragraph fits gap seven?', o: ['G', 'A', 'B', 'C', 'D', 'E', 'F', 'H'], why: '*Change their minds as a result* follows beliefs being exposed. H is extra: nothing prepares *by contrast*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 6** the extra paragraph is on the topic and uses the text’s vocabulary, which is what makes it tempting. H mentions debating competitions, but it contrasts with nothing in the text. When a paragraph begins with *by contrast, yet, this* or *such*, ask exactly what it refers to.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'Granted, the plan is expensive. That said, the cost of doing nothing is higher.' },
            { a: 'It does not follow that the policy caused the growth.' },
            { a: 'Persuasive as this argument is, it rests on an unstated assumption.' },
          ] },
          { t: 'text', md: 'Now argue for one minute, to your teacher or a partner: *Schools should teach students to argue for positions they disagree with.* State the claim, give a reason and some evidence, concede one point with *granted* or *admittedly*, and rebut it with *that said* or *it does not follow that*.' },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'With respect, that is a straw man',
      about: 'Recognise the straw man, the false dilemma, the slippery slope, ad hominem and begging the question, and point them out politely.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'A **fallacy** is a flaw in reasoning: an argument that looks convincing but does not support its conclusion. It is not a lie: the facts in it may all be true. What fails is the **link** between the facts and the conclusion.\n\nA **straw man** replaces the opponent’s real position with a weaker version that is easy to knock down. A **false dilemma** offers two options when others exist. A **slippery slope** claims, without evidence, that one step will lead to a chain of worse ones. **Ad hominem** attacks the person instead of the argument. **Begging the question** assumes what it sets out to prove.\n\nAt C2 the skill is to point out the flaw **without sounding like a prosecutor**. *That is an ad hominem fallacy!* rarely wins anyone over; *I’d rather we looked at the argument than at who is making it* usually does.' },
          { t: 'table', caption: 'Five common fallacies', explain: ['head', 'col1'], head: ['Fallacy', 'What goes wrong', 'Example'], rows: [
            ['the straw man', 'the opponent’s view is distorted, then attacked', 'So you want to let criminals walk free?'],
            ['the false dilemma', 'two options are offered when there are more', 'Either we cut taxes or the economy collapses.'],
            ['the slippery slope', 'one step is said to lead to disaster, without evidence', 'Allow this and soon there will be no rules at all.'],
            ['ad hominem', 'the person is attacked, not the argument', 'He’s never run a business, so his plan is worthless.'],
            ['begging the question', 'the conclusion is assumed in the premise', 'The policy is fair because it treats people fairly.'],
          ] },
        ],
        [
          { t: 'text', md: 'Polite language for naming a fallacy is **tentative** or framed as a **question**, so the other person can correct the flaw without losing face. Restate your real view against a straw man: *With respect, that isn’t what I said.* Offer a third option against a false dilemma: *Are those really the only two options?* Ask for the missing evidence in a slippery slope: *I’m not sure one thing necessarily leads to the other.* Return to the argument after ad hominem: *Whatever we think of him, the argument stands or falls on its own.* Point out a circle as a question: *Isn’t that assuming what we’re trying to establish?*\n\nIn everyday English *this begs the question* often means *this raises the question*. Careful writers keep **begs the question** for the fallacy and use **raises the question** for the other meaning. In formal writing, do the same.' },
          { t: 'examples', items: [
            { s: '**With respect, that isn’t what I said.** I said the scheme needs reform, not that it should be scrapped.', n: 'Answering a straw man.' },
            { s: '**Are those really the only two options?** We could phase it in gradually.', n: 'Answering a false dilemma.' },
            { s: '**Whatever we think of her motives, the argument stands or falls on its own.**', n: 'Answering ad hominem.' },
            { s: 'The success of the trial **raises the question** of why it was stopped.', n: 'Preferred in formal writing to *begs the question* in this sense.' },
          ] },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['You are making a straw man fallacy!', 'With respect, that isn’t quite what I said.', 'Naming the fallacy outright sounds aggressive.'],
            ['It is a slippery slope, so it is false.', 'The argument assumes a chain of events without evidence.', 'A label is not a rebuttal: explain the flaw.'],
            ['This begs the question of when it will open.', 'This raises the question of when it will open.', 'Careful usage keeps *begs the question* for circular arguments.'],
            ['He is a hypocrite, so his argument is wrong.', 'Whatever his record, the argument deserves a hearing.', 'That is itself ad hominem.'],
          ] },
        ],
        [
          { t: 'reading', title: 'Letters to the editor: the cycle lane', md: 'Sir, your correspondent clearly cycles to work, so naturally he supports the lane. If we give up one lane today, we will lose the whole road tomorrow. Either the council listens to residents or it should resign.\n\nSir, the lane is a success because it has worked well. Anyone who disagrees has simply not used it.' },
          { t: 'ex', kind: 'spot', h: 'Each sentence is from the letters. Tap the words that show the fallacy named at the start.', items: [
            { s: 'Ad hominem: your correspondent [clearly cycles to work], so naturally he supports the lane.', why: 'His argument is dismissed because of who he is.' },
            { s: 'Slippery slope: if we give up one lane today, we will [lose the whole road tomorrow].', why: 'One step is said to lead to a much worse one, without evidence.' },
            { s: 'False dilemma: [either the council listens] to residents [or it should resign].', why: 'Only two options are offered.' },
            { s: 'Begging the question: the lane is a success [because it has worked well].', why: 'The reason restates the conclusion.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the most effective and polite reply.', items: [
            { q: 'Your colleague says: “So you’re saying we should sack half the staff?”', o: ['With respect, that isn’t what I said. I suggested reviewing two roles.', 'That is a straw man fallacy and you know it.', 'Yes, if you like.'], why: 'Correct the distortion and restate your real position calmly.' },
            { q: 'A speaker says: “Either we build the road or the town dies.”', o: ['Surely there is a middle ground, such as improving the railway.', 'That is stupid.', 'Then let the town die.'], why: 'A third option exposes the false dilemma.' },
            { q: 'Someone says: “He has no children, so his views on schools are irrelevant.”', o: ['Whatever his personal situation, the argument stands or falls on its own.', 'You don’t have children either.', 'That is true, actually.'], why: 'Return to the argument; a personal reply repeats the fallacy.' },
          ] },
        ],
        [
          { t: 'text', md: 'In **C2 Proficiency Listening Part 3** you hear an **interview or discussion** of about four minutes, twice, and answer **five multiple-choice questions** with **four options**. The questions follow the recording and test **attitude, opinion and purpose**. Here the course audio reads a radio interview, shortened, with a lecturer who teaches reasoning.' },
          { t: 'dialogue', title: 'An interview about bad arguments', lines: [
            { who: 'Interviewer', s: 'Helen, you’ve said that learning the names of fallacies can make people worse at arguing. That sounds rather perverse.' },
            { who: 'Helen', s: 'I say it partly to provoke. But I’ve watched a student learn the term ad hominem and suddenly every criticism of anyone is an ad hominem. The label becomes a way of ending the conversation rather than thinking about it.' },
            { who: 'Interviewer', s: 'So you don’t teach the names?' },
            { who: 'Helen', s: 'Eventually I do. First I give them arguments with no labels and ask: does the conclusion follow? Only when they can explain the gap in their own words do I tell them it has a name.' },
            { who: 'Interviewer', s: 'Which fallacy does the most damage in public life?' },
            { who: 'Helen', s: 'I’d be tempted to say the straw man, because it’s everywhere. But on reflection the false dilemma worries me more. A straw man misrepresents one opponent; a false dilemma narrows what everyone thinks is possible.' },
            { who: 'Interviewer', s: 'And the slippery slope?' },
            { who: 'Helen', s: 'In fairness, not every slippery slope is a fallacy. Sometimes one step really does make the next more likely, and there’s evidence for it. The fallacy lies in assuming the slide without showing it.' },
            { who: 'Interviewer', s: 'Is it hard to spot fallacies in arguments you agree with?' },
            { who: 'Helen', s: 'Enormously. I give students a badly argued piece that supports their own view. There’s a long silence, then someone says, rather grudgingly, “I suppose this is a bit circular.” That grudging tone is the sound of learning.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Listening Part 3): choose the answer A, B, C or D which fits best according to what you hear.', items: [
            { q: 'Why does Helen say that learning the names of fallacies can make people worse at arguing?', o: ['Students use the labels to dismiss arguments instead of examining them.', 'The names are too difficult for students to remember.', 'Most arguments contain no fallacies at all.', 'Her colleagues disagree with her approach.'], why: '*The label becomes a way of ending the conversation rather than thinking about it.*' },
            { q: 'When does Helen introduce the names of the fallacies?', o: ['Once students can describe the flaw in their own words.', 'In the first lesson, with a list of definitions.', 'Never: she avoids them throughout.', 'When students study political speeches.'], why: '*Only when they can explain the gap in their own words…*' },
            { q: 'Why does Helen consider the false dilemma more harmful than the straw man?', o: ['It limits the options the whole public considers.', 'Politicians use it more often.', 'It is harder to name politely.', 'It always misrepresents an opponent.'], why: '*A false dilemma narrows what everyone thinks is possible.* The straw man is more common, not more harmful.' },
            { q: 'What does Helen say about slippery slope arguments?', o: ['They are fallacious only when the chain of events is assumed, not shown.', 'Politicians should stop using them.', 'Her students recognise them quickly.', 'They are always dishonest.'], why: '*The fallacy lies in assuming the slide without showing it.*' },
            { q: 'What is Helen’s point about the students’ grudging tone?', o: ['Admitting flaws in an argument you agree with is hard but valuable.', 'Students resent badly written material.', 'Silence in a seminar shows confusion.', 'Her exercise rarely works.'], why: '*That grudging tone is the sound of learning.*' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Listening Part 3** the wrong options often contain words you hear. Helen does say the straw man is *everywhere*, but her reason for preferring the false dilemma is its **effect**, not its frequency. Listen for the phrases that signal a real view: *on reflection, in fairness, I’d be tempted to say… but*.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these replies after the tutor.', tutor: 'mei', items: [
            { a: 'With respect, that isn’t quite what I said.' },
            { a: 'Are those really the only two options?' },
            { a: 'Whatever we think of his motives, the argument stands or falls on its own.' },
          ] },
          { t: 'text', md: 'Now practise with your teacher or a partner. One of you says each remark; the other answers politely, without naming the fallacy: *If we let students use phones in class, they will soon stop reading altogether. / You either support the new stadium or you don’t care about the town.*' },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'I take your point, but',
      about: 'Challenge, concede and hold your ground in a discussion with precise, courteous language, in the format of C2 Proficiency Speaking Part 2.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Disagreeing at C2 is a set of distinct moves. **Challenging** questions the other point: its evidence, logic or relevance. **Conceding** admits that the other person is partly right. **Holding your ground** keeps your position after a concession or under pressure. **Moving towards agreement** looks for what you share.\n\nThe skill lies in combining them: a short concession, then a firm challenge or a restatement of your view. This pattern, **concede and turn**, sounds fair-minded and confident at once: *I take your point, but I still think…*\n\nTone is judged closely. **With the greatest respect** usually announces strong disagreement. **I hear what you’re saying** often means *I am not convinced*. **Rather** sharpens criticism because it sounds controlled: *That rather misses the point.* Understatement disagrees without weakening: *I’m not sure I’d go quite that far.* And respond to the person: pick up their word to challenge it, *Expensive compared with what?*' },
          { t: 'table', caption: 'Moves in a disagreement', explain: ['head', 'col0', 'col2'], head: ['Move', 'Language', 'Tone'], rows: [
            ['Challenging', 'I’m not sure the evidence bears that out. / That rather misses the point.', 'firm and controlled'],
            ['Conceding', 'I take your point. / I’ll grant you that. / There’s something in that.', 'generous; shows you are listening'],
            ['Holding your ground', 'Even so, I’d stand by what I said. / I’m afraid I’m not persuaded.', 'calm and firm'],
            ['Moving towards agreement', 'Perhaps we’re not so far apart. / Could we agree that…?', 'constructive'],
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['You are wrong.', 'I’m not sure the evidence bears that out.', 'Challenge the point, not the person.'],
            ['I take your points.', 'I take your point.', 'The fixed phrase is singular.'],
            ['I am not agree.', 'I don’t agree. / I’m not persuaded.', '*Agree* is a verb.'],
            ['Yes, OK, you are right. (to everything)', 'There’s something in that. Even so…', 'Conceding everything gives up your position.'],
          ] },
          { t: 'dialogue', title: 'Should universities drop entrance exams?', lines: [
            { who: 'Clara', s: 'Entrance exams should go. They mostly measure how much coaching a student could afford.' },
            { who: 'James', s: 'I take your point about coaching, but what would replace them? Interviews are even easier to prepare for if you have money.' },
            { who: 'Clara', s: 'I’ll grant you that. But that rather misses the point. I’m arguing for looking at a student’s whole record.' },
            { who: 'James', s: 'From schools that grade very differently? I’m not sure that’s any fairer.' },
            { who: 'Clara', s: 'There’s something in that. Even so, I’d stand by what I said: one exam on one morning is a poor measure of anyone.' },
            { who: 'James', s: 'Perhaps we’re not so far apart. Could we agree that the exam shouldn’t be the only measure?' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'What does each remark do in a disagreement?', groups: ['Challenging', 'Conceding', 'Holding your ground'], explain: ['groups'], items: [
            { s: 'I’m not sure the figures bear that out.', g: 0, why: 'Questions the evidence.' },
            { s: 'Expensive compared with what?', g: 0, why: 'Picks up a word to challenge it.' },
            { s: 'You have a point there.', g: 1, why: 'Admits the other person is partly right.' },
            { s: 'I’ll grant you that.', g: 1, why: 'A concession.' },
            { s: 'Even so, I’d stand by what I said.', g: 2, why: 'Keeps the position after a concession.' },
            { s: 'I’m afraid I’m not persuaded.', g: 2, why: 'Polite but firm.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete each phrase with one word.', items: [
            { q: 'I’m not sure I’d go quite that ___.', a: ['far'], why: 'Understatement for disagreement.' },
            { q: 'I’m not sure the evidence ___ that out.', a: ['bears'], why: '*Bear something out* = support it.' },
            { q: 'Perhaps we’re not so far ___ after all.', a: ['apart'], why: 'Close to agreement.' },
            { q: 'Even so, I’d ___ by what I said.', a: ['stand'], why: '*Stand by* a statement = keep to it.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'What does the speaker really mean?', items: [
            { q: '“I hear what you’re saying.”', o: ['I understand, but I am not convinced.', 'I completely agree.', 'Please speak louder.'], why: 'Often a polite sign of disagreement.' },
            { q: '“With the greatest respect, …”', o: ['I strongly disagree with you.', 'I admire you greatly.', 'I am about to agree.'], why: 'It usually introduces firm disagreement.' },
          ] },
        ],
        [
          { t: 'text', md: 'In **C2 Proficiency Speaking Part 2**, the **collaborative task**, you and a partner talk for about **four minutes**. First you discuss **one or two pictures** for about **one minute**. Then the examiner gives a **decision-making task** based on all the pictures, for about **three minutes**. You are marked on **interaction**: inviting your partner’s views, responding, disagreeing constructively and working towards a decision.\n\nThe pictures are described here in words. **A**: a crowded town-hall meeting. **B**: a school debating competition. **C**: an online comment section. **D**: a family arguing at dinner. **E**: politicians in a television studio. First: *Look at pictures A and C. How do they show different ways of disagreeing in public?* Then: *Talk together about what makes a disagreement useful in each setting, then decide which is most likely to change people’s minds.*' },
          { t: 'dialogue', title: 'Speaking Part 2: a model discussion', lines: [
            { who: 'Examiner', s: 'Now talk together about what makes a disagreement useful in each setting, then decide which is most likely to change people’s minds.' },
            { who: 'Sophie', s: 'Shall we start with the debating competition? It’s the most disciplined, but I’m not sure it changes anyone’s mind, because the sides are given in advance.' },
            { who: 'Daniel', s: 'I take your point, but the audience isn’t fixed in advance. People watching might well be persuaded.' },
            { who: 'Sophie', s: 'I’ll grant you that. The online comments, I would have thought, are the least useful. Nobody really listens.' },
            { who: 'Daniel', s: 'I’m not sure I’d go quite that far. One well-informed comment can do more than the article. What makes you so pessimistic?' },
            { who: 'Sophie', s: 'Mainly the tone. People write things they would never say face to face.' },
            { who: 'Daniel', s: 'Shall we try to decide? I’d go for the town hall: people disagree in person, about something that affects them directly.' },
            { who: 'Sophie', s: 'Even so, I’d still choose the debate, for the audience. Could we agree that both work because people hear the whole argument?' },
            { who: 'Daniel', s: 'That seems fair. Let’s say that, and that we differ on which comes first.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Speaking Part 2): choose the reply that would earn the higher mark in the collaborative task.', items: [
            { q: 'Your partner says: “The online comments are completely useless.” You say…', o: ['I’m not sure I’d go quite that far. What makes you say that?', 'Yes. Next picture.', 'You are wrong about that.'], why: 'Disagree with understatement and invite your partner to develop the idea.' },
            { q: 'You want to start the decision. You say…', o: ['Shall we try to narrow it down? I’d go for the town hall, for a couple of reasons.', 'I choose A.', 'Now we must decide, I think A, B, C.'], why: 'A suggestion that invites a response, with a reason.' },
            { q: 'Your partner makes a good point against your view. You say…', o: ['I’ll grant you that. Even so, I’d still choose the debate, because of the audience.', 'OK, you win.', 'No, it doesn’t matter.'], why: 'Concede and turn: generous but firm.' },
            { q: 'Time is almost up and you still disagree. You say…', o: ['Could we agree on what they have in common and say we differ on the order?', 'We disagree. Finished.', 'Let’s just pick mine.'], why: 'Negotiating a partial decision shows interactive skill.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Do not describe the pictures one by one on your own: it is a **collaborative** task. Do not agree with everything to be polite either, or decide in the first ten seconds. Explore several pictures, disagree courteously with a reason, and leave the decision for the last minute.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these phrases after the tutor.', tutor: 'sofia', items: [
            { a: 'I take your point, but I still think the cost is justified.' },
            { a: 'I’m not sure I’d go quite that far.' },
            { a: 'Perhaps we’re not so far apart after all.' },
          ] },
          { t: 'text', md: 'Now do the collaborative task with your teacher or a partner, for about four minutes: one minute on pictures A and C, then three minutes on the decision. Use at least one challenge, one concession followed by a turn, and one phrase that moves towards agreement.' },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'Should voting be compulsory?',
      about: 'Read two opinion pieces on compulsory voting, then summarise and evaluate them in an essay in the format of C2 Proficiency Writing Part 1.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: '**C2 Proficiency Writing Part 1** is compulsory. You read **two short texts** that take different positions on one subject and write an **essay of 240 to 280 words** that **summarises and evaluates the key points** of both and gives **your own view**, in your own words.\n\nThree things make it hard. You must find the **key points**, usually two in each text, sometimes hidden in one clause. You must **paraphrase**: copied phrases cost marks. And you must **evaluate**: say how convincing each point is and why. The tools are the ones in this unit: the claim, its evidence, the assumption behind it, and where it is weak. The best essays often organise the points by **theme**, bringing the writers together where they clash.' },
          { t: 'table', caption: 'A plan for the essay on two texts', explain: ['head', 'col0', 'col1'], head: ['Paragraph', 'What to write', 'Useful language'], rows: [
            ['Introduction', 'The issue and the two positions', 'The question of whether… divides opinion.'],
            ['First key point', 'Summarise, then evaluate', 'The first writer contends that… This is persuasive insofar as…'],
            ['Second key point', 'The same for the next point', 'The second writer, by contrast, maintains that… Yet this overlooks…'],
            ['Your view', 'Weigh the arguments and conclude', 'On balance, I find… more convincing, since…'],
          ] },
        ],
        [
          { t: 'reading', title: 'Text 1: A duty, not a burden', md: 'Democracies require citizens to serve on juries and pay taxes, yet treat the vote as optional. Elections are increasingly decided by the old, the affluent and the already engaged, and governments understandably govern for them. Compulsory voting corrects this distortion: politicians who must appeal to everyone can no longer ignore the young or the poor. Nor is the obligation onerous. Citizens need only attend; they may spoil their ballot if they wish.' },
          { t: 'reading', title: 'Text 2: The right not to choose', md: 'The case for compulsory voting confuses a larger turnout with a better democracy. Forcing reluctant citizens to the polls does not make them informed; it adds votes cast at random. Worse, it turns a freedom into an obligation. Choosing not to vote can itself be a political statement, a refusal to endorse any option on offer. If turnout is low, the remedy is to give people something worth voting for.' },
          { t: 'ex', kind: 'choice', h: 'Find the key points. Choose the best answer.', items: [
            { q: 'What is the first writer’s main reason for compulsory voting?', o: ['Governments would have to represent everyone, not only those who vote now.', 'Voters would become better informed.', 'Elections would cost less.'], why: '*Politicians who must appeal to everyone can no longer ignore the young or the poor.*' },
            { q: 'How does the first writer answer the objection about freedom?', o: ['The duty is small: people need only attend and may spoil their ballot.', 'Freedom does not matter.', 'The writer ignores it.'], why: '*Nor is the obligation onerous.*' },
            { q: 'What are the second writer’s two objections?', o: ['Forced votes are not informed votes, and abstaining can be a deliberate statement.', 'Elections are expensive, and young people should not vote.', 'Spoilt ballots are unfair, and voting takes too long.'], why: '*Does not make them informed… Choosing not to vote can itself be a political statement.*' },
          ] },
        ],
        [
          { t: 'text', md: 'To **summarise**, change the words and often the structure, and use **reporting verbs** that show stance: *contend, maintain, assert* for a claim; *concede, acknowledge* for an admission; *dismiss, reject* for a refusal; *point out, observe* for something presented as fact. A **noun phrase** can compress a sentence: *Choosing not to vote can be a political statement* becomes *abstention as a form of protest*.\n\nTo **evaluate**, use lesson 1: expose the **assumption** (*This rests on the assumption that…*), test the **logic** (*It does not follow that…*), and weigh **strength against weakness** (*persuasive insofar as… yet it overlooks…*). Keep your own view for the end, where it grows out of the evaluation.' },
          { t: 'table', caption: 'Common mistakes in the essay on two texts', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['The first text says “elections are increasingly decided by the old”.', 'The first writer contends that older, wealthier citizens now dominate elections.', 'Paraphrase; do not copy.'],
            ['Text 1 says… Text 2 says… I agree with Text 2.', 'Both writers address legitimacy, but reach opposite conclusions…', 'Compare and evaluate; do not just list.'],
            ['I think compulsory voting is good. (in the introduction)', 'On balance, the first writer’s case seems stronger, since…', 'Your view comes after the evaluation.'],
            ['The writer says it, which is wrong.', 'This rests on the questionable assumption that…', 'Say why a point is weak.'],
          ] },
        ],
        [
          { t: 'reading', title: 'A model essay', md: 'Whether voting should be compulsory raises a question about what democracy is for. The two texts give opposing answers, one stressing representation, the other individual freedom.\n\nThe first writer contends that voluntary voting allows older and wealthier citizens to dominate elections, so that governments neglect everyone else; compulsion, by obliging politicians to court every group, would restore the balance. This is persuasive insofar as parties clearly tailor their promises to those most likely to vote. The writer also anticipates the charge of coercion, observing that the duty amounts to little more than turning up.\n\nThe second writer, however, maintains that a higher turnout says nothing about the quality of the votes cast. This objection has some force, yet it rests on the questionable assumption that today’s voluntary voters are uniformly well informed. More compelling is the claim that abstention can be a deliberate statement which compulsion would suppress. Even here, though, the first text offers a reply: a spoilt ballot allows exactly that refusal to be recorded.\n\nOn balance, I find the case for compulsion the stronger. The second writer is right that turnout alone does not make a healthy democracy, and that politicians must offer something worth voting for. It does not follow, however, that the vote should be left to those who already feel represented. A small obligation, with the freedom to reject every candidate, seems a reasonable price for a government that must listen to all its citizens.' },
          { t: 'ex', kind: 'choice', h: 'Read the model essay. Choose the best answer.', items: [
            { q: 'How does the writer evaluate the second text’s first point?', o: ['By exposing the assumption it rests on.', 'By saying the writer is not an expert.', 'By repeating it in the same words.'], why: '*It rests on the questionable assumption that today’s voluntary voters are uniformly well informed.*' },
            { q: 'Why does the conclusion begin by partly agreeing with the second writer?', o: ['To concede a point before turning to the writer’s own view.', 'Because the writer has changed their mind.', 'To fill the word count.'], why: 'Concede and turn: *is right that… It does not follow, however, that…*' },
            { q: 'Which reporting verbs show the writers’ stance?', o: ['contends, maintains, observing', 'says, tells, writes', 'thinks, feels, believes'], why: 'Precise reporting verbs are part of the paraphrase.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the best reporting verb.', items: [
            { q: 'The first writer ___ that the duty is a small one.', o: ['maintains', 'tells', 'speaks'], why: '*Maintain that* reports a claim held firmly.' },
            { q: 'The second writer ___ the argument as confused.', o: ['dismisses', 'concedes', 'admits'], why: '*Dismiss as* rejects something as not worth considering.' },
            { q: 'The first writer ___ that some may resent the duty, but argues it is worth it.', o: ['acknowledges', 'refutes', 'denies'], why: '*Acknowledge* reports an admission.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Your writing task', md: 'Read the two texts below. Write an essay summarising and evaluating the key points from both texts. Use your own words throughout as far as possible, and include your own ideas in your answer. Write 240 to 280 words.\n\n**Text 1: Old enough to decide.** At sixteen, young people can work and pay tax, yet they have no say in the laws that govern them. Lowering the voting age would correct this injustice and strengthen democracy: people who vote at their first opportunity tend to keep voting, and sixteen-year-olds, still at school, can be taught how elections work at the very moment they first take part.\n\n**Text 2: A vote needs experience.** Supporters of votes at sixteen speak as if political judgement arrived with a birthday. Teenagers are more easily swayed by friends, teachers and social media, and most have yet to rent a home or hold a full-time job. Eighteen is not perfect, but it marks the point at which most citizens begin to live independently.' },
          { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Writing Part 1): before you write, check your plan.', items: [
            { q: 'What are the two key points of Text 1?', o: ['Denying the vote to people with adult duties is unjust, and voting early, with help from school, builds a lasting habit.', 'Teenagers are well informed, and eighteen is too old.', 'Taxes are too high, and schools should teach politics.'], why: 'Injustice, and the habit of voting supported by education.' },
            { q: 'What are the two key points of Text 2?', o: ['Teenagers are more easily influenced, and eighteen marks the start of independent adult life.', 'Teenagers do not pay tax, and they cannot marry.', 'Social media should be banned, and the age should be twenty-one.'], why: 'Susceptibility to influence, and the experience that comes with independence.' },
            { q: 'Which sentence evaluates rather than only summarises?', o: ['The claim that teenagers are easily swayed is plausible, yet it rests on the assumption that adults are not.', 'The second writer says teenagers are swayed by friends.', 'Text 2 is about the voting age.'], why: 'It weighs the point and exposes its assumption.' },
          ] },
          { t: 'text', md: '**Your writing task.** Write the essay above in **240 to 280 words** and send it to your teacher, who will correct it and mark it for content, communicative achievement, organisation and language. Paraphrase both texts, use at least three precise reporting verbs, evaluate each key point with a tool from this unit, and end with your own reasoned view.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these essay sentences after the tutor.', tutor: 'kofi', items: [
            { a: 'The first writer contends that compulsion would restore the balance.' },
            { a: 'This objection has some force, yet it rests on a questionable assumption.' },
            { a: 'On balance, I find the case for compulsion the stronger.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Plan for about ten minutes. Underline the **two key points** in each text, then decide how they relate: do the writers answer each other directly, or talk past each other? Building your essay around that relationship is what lifts it from a summary to an evaluation.' },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'Choose the expression that fits best.', items: [
      { q: 'Many people stayed at home. ___ they were indifferent to the result.', o: ['It does not follow that', 'Granted,', 'Admittedly,'], why: 'Accepts the fact and denies the conclusion.' },
      { q: '___, the plan has some merit. Even so, it is too expensive.', o: ['Admittedly', 'Therefore', 'It follows that'], why: 'A concession before *even so*.' },
      { q: 'Tempting ___ it is, the offer should be refused.', o: ['as', 'though it', 'so'], why: 'Concessive inversion.' },
      { q: 'I take your ___, but I am still not persuaded.', o: ['point', 'points', 'pointing'], why: 'The fixed phrase is singular.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match each remark with the fallacy it contains.', pairs: [
      ['So you want to close every hospital?', 'the straw man'],
      ['Either we build the dam or the region starves.', 'the false dilemma'],
      ['Ban one book and soon every library will be empty.', 'the slippery slope'],
      ['Ignore him; he dropped out of university.', 'ad hominem'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Complete the second sentence so that it has a similar meaning to the first. Use the word given and do not change it.', items: [
      { q: 'Although the theory is elegant, it is wrong.', cue: 'as', a: ['Elegant as the theory is, it is wrong.', 'Elegant as it is, the theory is wrong.', 'Elegant as the theory may be, it is wrong.'], why: 'Concessive inversion.' },
      { q: 'I am not saying that the critics are always wrong.', cue: 'say', a: ['This is not to say that the critics are always wrong.', 'That is not to say that the critics are always wrong.'], why: '*This is not to say that* blocks a misreading.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'The success of the trial [begs] the question of why it ended.', a: ['raises'], why: 'In formal writing: *raises the question*.' },
      { s: '[Despite] it is popular, the policy is unfair.', a: ['Although', 'Though', 'While'], why: '*Despite* cannot take a clause.' },
      { s: 'The argument stands or [drops] on its own.', a: ['falls'], why: '*Stands or falls*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
      { q: 'I’m not sure the evidence ___ that out.', a: ['bears'], why: '*Bear out* = support.' },
      { q: 'This argument ___ on the assumption that people always act rationally.', a: ['rests'], why: '*Rest on an assumption*.' },
      { q: 'The second writer ___ the proposal as unrealistic.', a: ['dismisses', 'dismissed', 'rejects'], why: '*Dismiss as*: reject as not worth considering.' },
    ] },
    { t: 'ex', kind: 'sort', h: 'What does each sentence do?', groups: ['Concession', 'Rebuttal', 'Challenge in discussion'], explain: ['groups'], items: [
      { s: 'Admittedly, the costs are high.', g: 0, why: 'Admits a point to the other side.' },
      { s: 'That said, the benefits are far greater.', g: 1, why: 'Turns the concession around.' },
      { s: 'It does not follow that the scheme has failed.', g: 1, why: 'Denies the opposing conclusion.' },
      { s: 'With respect, that rather misses the point.', g: 2, why: 'A firm challenge to relevance.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Choose the best sentence for an essay on two texts.', items: [
      { q: '', o: ['The first writer contends that compulsory voting would make governments more representative.', 'Text 1 says voting should be compulsory, it is good.', 'I think the first text is right and the second is wrong.'], why: 'A precise reporting verb and a paraphrase.' },
      { q: '', o: ['This objection is persuasive insofar as it highlights a real risk, yet it overlooks the spoilt ballot.', 'This objection is good.', 'The second writer is wrong because I disagree.'], why: 'Evaluation that weighs strength against weakness.' },
    ] },
  ],
};
