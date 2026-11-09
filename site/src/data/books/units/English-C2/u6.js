// English C2, unit 6, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Advanced grammar in use: the mandative and formulaic subjunctive, absolute and non-finite constructions with ellipsis,
// modality and aspect in subtle use (will, would, shall, may well, might as well, dare, need, the continuous for annoyance
// and tact), and a short story that uses them all.
// Exam formats (C2 Proficiency): Reading and Use of English Parts 4, 2, 4 and 5.
export const UNIT = {
  id: 'u6',
  title: 'Advanced grammar in use',
  goal: 'Use the finer points of English grammar with confidence: the subjunctive and the fixed phrases it survives in, compact absolute and non-finite clauses, the subtle meanings of will, would, shall, dare and need, and the continuous for annoyance and tact; then read a short story that uses them, in the format of C2 Proficiency Reading Part 5.',
  art: 'cat',
  tags: { skills: ['grammar', 'reading', 'speaking'], topics: ['subjunctive', 'formulaic-phrases', 'absolute-constructions', 'non-finite-clauses', 'ellipsis', 'modals', 'aspect'], goals: ['foundations', 'academic'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'Far be it from me',
      about: 'Use the mandative subjunctive after verbs, adjectives and nouns of demand and importance, and the fixed phrases the old subjunctive survives in: were it not for, so be it, come what may, suffice it to say.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'English has a **subjunctive** that is easy to miss, because it looks like the **base form** of the verb. The **mandative subjunctive** follows words that express a **demand, a recommendation or importance**, in a *that*-clause: *I suggest that he **be** told. It is essential that she **attend**. The board insisted that the contract **be** signed.*\n\nThe base form is the same for every person, so there is no *-s* for *he, she, it*: *We recommend that each student **take** notes*, not *takes*. Why? The clause does not describe a fact; it describes something **wanted or required**, which may never happen. The base form marks it as unreal.\n\nThe triggers are verbs (*suggest, recommend, insist, demand, request, propose, require, urge, ask*), adjectives (*essential, vital, imperative, crucial, important, necessary*) and nouns (*the recommendation that, the requirement that, the proposal that*).' },
          { t: 'table', caption: 'The mandative subjunctive', explain: ['head', 'col0'], head: ['Trigger', 'Example'], rows: [
            ['a verb of demand or advice', 'They insisted that the contract be signed at once.'],
            ['an adjective of importance', 'It is vital that every passenger wear a seat belt.'],
            ['a noun of demand', 'The requirement that all staff complete the course was dropped.'],
            ['negative: not + base form', 'We asked that he not be informed.'],
            ['passive: be + past participle', 'She proposed that the meeting be postponed.'],
            ['past trigger, no backshift', 'The judge ordered that the prisoner be released.'],
          ] },
        ],
        [
          { t: 'text', md: 'The subjunctive is normal in **American English** in all registers and common in **formal British English**. British speakers have two other options. The first is ***should*** + infinitive: *I suggest that he **should** be told.* The second, in informal speech, is the ordinary indicative: *I suggest he **tells** them.* All three are correct in British English; only the subjunctive is formal everywhere.\n\nTwo details matter at C2. The verb **does not move back in time** after a past trigger: *They insisted that she **leave***, not *left*. And the negative is ***not* + base form**, with no *do*: *It is essential that the results **not be** published yet*, not *don’t be*.\n\nThe subjunctive is **not** used after verbs of thinking or saying: *I think that he **is** right.* *Suggest* takes the subjunctive only when it means *propose*; when it means *indicate*, it takes the indicative: *The evidence suggests that he **was** there.*' },
          { t: 'examples', items: [
            { s: 'The doctor recommended that he **rest** for a fortnight.', n: 'Base form for *he*: no *-s*.' },
            { s: 'It is imperative that the patient **not be** moved.', n: 'Negative: *not* + base form.' },
            { s: 'The union demanded that the decision **be** reversed.', n: 'Passive subjunctive: *be* + past participle.' },
            { s: 'I suggest that you **should** speak to her first.', n: 'British alternative with *should*.' },
            { s: 'The fingerprints suggest that the thief **was** left-handed.', n: '*Suggest* = indicate: no subjunctive.' },
            { s: 'Her request that the hearing **be held** in private was granted.', n: 'A noun trigger: *request that*.' },
          ] },
        ],
        [
          { t: 'text', md: 'The old subjunctive survives in **fixed phrases**, which you must learn as blocks. Most of them belong to formal or literary English, but several are common in everyday speech, often with a touch of irony.\n\n***Were*** is the past subjunctive of *be*, used for unreal situations: *If I **were** you… I wish it **were** true.* It also starts an inverted conditional: ***Were it not for*** *the rain, we would go.* The past perfect version is ***Had it not been for*** *your help, we would have failed.*\n\nOther phrases use the base form with an unusual word order. ***Far be it from me to*** criticise introduces criticism while claiming not to; the irony is part of its meaning.' },
          { t: 'table', caption: 'Formulaic subjunctive phrases', explain: ['head', 'col1'], head: ['Phrase', 'Meaning', 'Example'], rows: [
            ['so be it', 'I accept it, even if I do not like it', 'If they want to leave, so be it.'],
            ['far be it from me to…', 'I would not presume to… (but I am about to)', 'Far be it from me to interfere, but…'],
            ['come what may', 'whatever happens', 'Come what may, we open in June.'],
            ['suffice it to say', 'I will say only this', 'Suffice it to say we won’t be going back.'],
            ['be that as it may', 'even if that is true', 'Be that as it may, the rules are clear.'],
            ['were it not for', 'if it were not for', 'Were it not for her, I would have given up.'],
            ['if need be', 'if it is necessary', 'We can work late, if need be.'],
            ['heaven forbid', 'I very much hope not', 'If, heaven forbid, the flight is cancelled…'],
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I suggest that he takes a break.', 'I suggest that he take a break. (or should take)', 'Formal style needs the base form or *should*.'],
            ['It is vital that she doesn’t be late.', 'It is vital that she not be late.', 'The negative is *not* + base form.'],
            ['They insisted that he left.', 'They insisted that he leave.', 'No backshift after a past trigger.'],
            ['I think that he be right.', 'I think that he is right.', 'Verbs of thinking take the indicative.'],
            ['Far it be from me to judge.', 'Far be it from me to judge.', 'The word order is fixed.'],
          ] },
          { t: 'dialogue', title: 'The last item on the agenda', lines: [
            { who: 'Margaret', s: 'Right, the last item. The auditors have recommended that the charity’s accounts be published online every quarter.' },
            { who: 'Owen', s: 'Far be it from me to question the auditors, but every quarter? Suffice it to say our finance team is two people.' },
            { who: 'Leila', s: 'I take the point. But the funders insist that every grant be reported in full. Were it not for that condition, I’d agree with you.' },
            { who: 'Owen', s: 'Then I propose that we publish twice a year and that the board review the decision next spring.' },
            { who: 'Margaret', s: 'Is it essential that we decide today?' },
            { who: 'Leila', s: 'It is. The funders have asked that we not leave it beyond Friday.' },
            { who: 'Margaret', s: 'Very well. Twice a year, then. If the funders object, so be it: we’ll think again.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct form.', items: [
            { q: 'It is essential that every applicant ___ the form in person.', o: ['sign', 'signs', 'signed'], why: 'Mandative subjunctive after *essential that*: base form.' },
            { q: 'The court ordered that the documents ___ returned.', o: ['be', 'are', 'were being'], why: 'Passive subjunctive: *be returned*.' },
            { q: 'The new data suggest that prices ___ falling.', o: ['are', 'be', 'should be'], why: '*Suggest* = indicate: an ordinary indicative.' },
            { q: '___ for the scholarship, she could never have studied abroad.', o: ['Had it not been', 'Had not it been', 'If it had not'], why: 'Inverted past conditional: *Had it not been for*.' },
            { q: 'We asked that the children ___ told until after the holiday.', o: ['not be', 'don’t be', 'not are'], why: 'Negative subjunctive: *not be*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'The committee insisted that the report [is] rewritten.', a: ['be'], why: 'Passive subjunctive after *insisted that*: *be rewritten*.' },
            { s: 'I recommend that she [applies] for the senior post.', a: ['apply', 'should apply'], why: 'Base form, or British *should apply*.' },
            { s: '[Be] it not for the delay, we would be home by now.', a: ['Were'], why: 'The fixed phrase is *Were it not for*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 4): write a sentence with a similar meaning to the first, using the word given, which must not change. In the exam the second sentence is partly printed and you write three to eight words; here you write the whole sentence.', items: [
            { q: '“You really must hand in the report by Friday,” the manager told us.', cue: 'INSISTED', a: ['The manager insisted that we hand in the report by Friday.', 'The manager insisted that we hand the report in by Friday.', 'The manager insisted we hand in the report by Friday.', 'The manager insisted that we should hand in the report by Friday.', 'The manager insisted on our handing in the report by Friday.', 'The manager insisted on us handing in the report by Friday.'], why: '*insist that* + subjunctive (*hand*, not *handed*), or *insist on* + -ing.' },
            { q: 'If you hadn’t helped us, we would have failed.', cue: 'BEEN', a: ['Had it not been for your help, we would have failed.', 'If it had not been for your help, we would have failed.', 'If it hadn’t been for your help, we would have failed.'], why: '*Had it not been for* + noun: the inverted past conditional.' },
            { q: 'I don’t want to criticise, but I think the plan has serious flaws.', cue: 'FAR', a: ['Far be it from me to criticise, but I think the plan has serious flaws.', 'Far be it from me to criticise, but the plan has serious flaws.'], why: 'The fixed phrase *Far be it from me to* + infinitive.' },
            { q: 'Whatever happens, I am going to finish this course.', cue: 'COME', a: ['Come what may, I am going to finish this course.', 'Come what may, I’m going to finish this course.', 'I am going to finish this course, come what may.', 'I’m going to finish this course, come what may.'], why: '*Come what may* = whatever happens.' },
            { q: 'The committee recommended reviewing the policy immediately.', cue: 'BE', a: ['The committee recommended that the policy be reviewed immediately.', 'The committee recommended the policy be reviewed immediately.', 'The committee recommended that the policy be reviewed at once.'], why: 'Passive subjunctive: *that the policy be reviewed*.' },
            { q: 'I will only say that the evening did not go well.', cue: 'SUFFICE', a: ['Suffice it to say that the evening did not go well.', 'Suffice it to say the evening did not go well.', 'Suffice it to say that the evening didn’t go well.', 'Suffice it to say the evening didn’t go well.'], why: '*Suffice it to say (that)* = I will say only this.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 4** there are **six** items, each worth **two marks**: one for each half of the answer, so a partly right answer still scores. The key word **must not change** (*be*, never *being*), and contractions count as two words. At C2 the items test **fixed phrases** and **grammatical shifts** at the same time: if a sentence starts with *If* and the key word is *BEEN*, think of *Had it not been for*.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor, in a formal, measured tone.', tutor: 'arthur', items: [
            { a: 'It is essential that every member be informed before Friday.' },
            { a: 'Far be it from me to criticise, but the plan has serious flaws.' },
            { a: 'Were it not for her help, I would have given up long ago.' },
            { a: 'If they want to leave, so be it.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'The meeting over, we left',
      about: 'Write compact, elegant sentences with absolute constructions, with + object + participle, non-finite and verbless clauses, and ellipsis in complex sentences.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'An **absolute construction** is a short clause with its **own subject** but **no finite verb**. It is attached to a main clause and gives the background: the time, the reason or the circumstances. *The meeting over, we went home* means *When the meeting was over, we went home.*\n\nThe pattern is **noun phrase + participle, adjective or prepositional phrase**: *The work **finished**, they relaxed. Her voice **trembling**, she began to read. He stood at the window, hands **in his pockets**.*\n\nWhy use it? It is **compact**: it removes a conjunction and a verb, and it lets the writer pack a detail into a sentence without starting a new one. It belongs mainly to **written, literary and formal English**; in conversation people say *When the meeting was over…* But a handful of fixed absolutes are everyday English, and at C2 you should use them naturally: ***weather permitting***, ***all things considered***, ***that said***, ***other things being equal***.' },
          { t: 'examples', items: [
            { s: '**The speeches over**, the guests moved to the garden.', n: 'When the speeches were over.' },
            { s: '**Her hands shaking**, she opened the envelope.', n: 'A present participle: what was happening at the time.' },
            { s: '**The decision made**, there was no point in arguing.', n: 'A past participle: once the decision had been made.' },
            { s: '**Dinner being ready**, we sat down.', n: 'A formal, rather old-fashioned reason clause.' },
            { s: 'He walked out, **his coat over his arm**.', n: 'A prepositional phrase: a detail of description.' },
            { s: 'We’ll eat outside, **weather permitting**.', n: 'Fixed: if the weather allows it.' },
          ] },
        ],
        [
          { t: 'text', md: 'A very common relative of the absolute uses ***with* + object + participle** (or adjective, or phrase). It is less formal and appears in speech as well as writing: ***With prices rising**, people are spending less. **With the children asleep**, the house was quiet. She fell asleep **with the television on**.*\n\nThe *with* clause usually gives a **reason** or the **circumstances**. The participle follows the usual logic: **-ing** for something active or in progress (*with prices rising*), the **past participle** for something done to the object (*with the work finished*).\n\nThe fixed absolutes are worth learning as phrases. Most are **sentence adverbials**: they comment on the whole sentence, usually at the start or the end.' },
          { t: 'table', caption: 'Fixed absolutes and with-clauses', explain: ['head', 'col1'], head: ['Phrase', 'Meaning'], rows: [
            ['weather permitting / time permitting', 'if the weather / the time allows it'],
            ['all things considered', 'taking everything into account'],
            ['other things being equal', 'if nothing else changes'],
            ['that said / that being said', 'despite what I have just said'],
            ['present company excepted', 'not including the people here'],
            ['with + object + -ing', 'because or while something is happening'],
            ['with + object + past participle', 'because or after something has been done'],
          ] },
        ],
        [
          { t: 'text', md: 'Absolutes have their own subject. **Non-finite clauses** borrow the subject of the main clause: ***Having finished** the report, she went home* (she had finished). ***Built** in 1820, the bridge is still in use* (the bridge was built). ***To be** fair, he did warn us.*\n\n**Verbless clauses** go further and drop the verb as well, after a conjunction: ***Although tired**, he kept going. **If necessary**, we can start earlier. **When in doubt**, ask. **Once inside**, she locked the door.*\n\nThe rule that matters is the **subject**. The understood subject of the non-finite clause must be the subject of the main clause. If it is not, you have a **dangling participle**, which is a real mistake and often an unintentionally funny one: *Walking down the street, the trees were beautiful* says the trees were walking. Correct it by changing the main subject (*Walking down the street, **I** admired the trees*) or by using a full clause (*As I walked down the street…*).' },
          { t: 'examples', items: [
            { s: '**Having read** the contract, she refused to sign it.', n: 'Perfect participle: first she read it.' },
            { s: '**Written** in haste, the letter was full of mistakes.', n: 'The letter was written: past participle.' },
            { s: '**Although exhausted**, the runners kept smiling.', n: 'A verbless clause: although they were exhausted.' },
            { s: '**If in doubt**, check with your supervisor.', n: 'If you are in doubt.' },
            { s: '**Arriving** late, I missed the introduction.', n: 'Correct: *I* arrived late and *I* missed it.' },
          ] },
        ],
        [
          { t: 'text', md: '**Ellipsis** means leaving out words that the reader can recover from the context. It makes complex sentences shorter and avoids clumsy repetition, and native writers use it constantly.\n\nIn **coordinated clauses**, a repeated verb can disappear: *Some chose tea, others coffee* (others chose coffee). This is called **gapping**. After an **auxiliary or modal**, the rest of the verb phrase can go: *He said he would help, and he **did**. I’d like to come, but I **can’t**.* After ***to***, the infinitive can go: *I didn’t want to go, but I **had to**.* And ***so*** and ***not*** can replace a whole clause: *Is it ready? If **so**, send it. If **not**, tell me.*\n\nThe limit is clarity: if the reader has to search for what is missing, put it back.' },
          { t: 'table', caption: 'Ellipsis in complex sentences', explain: ['head', 'col0'], head: ['Type', 'Example', 'Full version'], rows: [
            ['gapping', 'Anna studied law and her brother medicine.', 'her brother studied medicine'],
            ['after an auxiliary', 'They promised to finish by May, and they did.', 'they did finish by May'],
            ['after to', 'You can stay if you want to.', 'if you want to stay'],
            ['so / not for a clause', 'Will it rain? I hope not.', 'I hope it will not rain'],
            ['verbless clause', 'Though small, the flat is bright.', 'Though it is small'],
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['Having eaten lunch, the bus left.', 'Having eaten lunch, we caught the bus.', 'A dangling participle: the bus did not eat.'],
            ['The meeting was over, we left.', 'The meeting over, we left. (or When the meeting was over)', 'An absolute has no finite verb.'],
            ['With the prices rise, people spend less.', 'With prices rising, people spend less.', '*With* + object + participle.'],
            ['Weather permits, we will sail.', 'Weather permitting, we will sail.', 'The fixed phrase uses *permitting*.'],
            ['I wanted to call, but I didn’t to.', 'I wanted to call, but I didn’t.', 'After an auxiliary, drop the whole verb phrase.'],
          ] },
          { t: 'reading', title: 'From a walking journal', md: 'We left the hut at dawn, the stars still visible over the ridge. With the path frozen, progress was slow, and by nine we had covered only four miles. That said, nobody complained. Having climbed the pass twice before, Tomás led the way; the rest of us followed, heads down against the wind.\n\nAt the summit we stopped for tea, or rather some of us did, others for chocolate. Asked whether we would reach the valley by dark, Tomás said he thought so. All things considered, he was right: the light fading, we walked into the village just after six, tired but triumphant.' },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite each sentence with an absolute construction or a with-clause, starting with the words given.', items: [
            { q: 'When the speeches were over, the guests went into the garden.', cue: 'The speeches over', a: ['The speeches over, the guests went into the garden.'], why: 'Noun + *over*: no finite verb.' },
            { q: 'Because prices are rising, many families are cutting back.', cue: 'With prices', a: ['With prices rising, many families are cutting back.'], why: '*With* + object + -ing for a reason.' },
            { q: 'After she had read the letter, she burst into tears.', cue: 'Having', a: ['Having read the letter, she burst into tears.'], why: 'Perfect participle: the reading came first.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Which sentence is correct and natural?', items: [
            { q: '', o: ['Driving to work, I saw an accident.', 'Driving to work, an accident happened.', 'Driving to work, the accident was seen.'], why: 'The understood subject of *driving* must be the main subject: *I*.' },
            { q: '', o: ['Although tired, she finished the essay.', 'Although tired, the essay was finished.', 'Although being tired, the essay was finished by her.'], why: 'The verbless clause needs *she* as the main subject.' },
            { q: '', o: ['Some ordered fish, others pasta.', 'Some ordered fish, others ordered pasta ordered.', 'Some ordered fish, others to pasta.'], why: 'Gapping: the repeated verb is left out.' },
            { q: '', o: ['I meant to ring you, but I forgot to.', 'I meant to ring you, but I forgot to it.', 'I meant to ring you, but I forgot to do.'], why: 'After *to*, the infinitive can be dropped.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 2): the sentences make one short text about a mountain rescue. Write one word in each gap.', items: [
            { q: 'The worst of the storm ___, the climbers began the long descent to the valley.', a: ['over', 'past'], why: 'An absolute construction: *the storm over*.' },
            { q: '___ visibility improving by the hour, they reached the shelter before dark.', a: ['With'], why: '*With* + object + -ing.' },
            { q: 'Food was running short, most of their supplies ___ been lost in the avalanche.', a: ['having'], why: 'An absolute with a perfect participle: *having been lost*.' },
            { q: '___ exhausted, the youngest member of the team insisted on carrying the radio.', a: ['Though', 'Although', 'While', 'Whilst'], why: 'A verbless clause: *Though (he was) exhausted*.' },
            { q: 'The leader said they would rest for a day, and so they ___.', a: ['did'], why: 'Ellipsis after an auxiliary: *so they did (rest)*.' },
            { q: 'Some wanted to press on at once; ___ preferred to wait for the helicopter.', a: ['others'], why: '*Some… others* contrasts two groups.' },
            { q: 'Weather ___, the helicopter would land on the ridge the following morning.', a: ['permitting'], why: 'The fixed absolute *weather permitting*.' },
            { q: 'All things ___, the expedition had been a success: nobody had been seriously hurt.', a: ['considered'], why: 'The fixed absolute *all things considered*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 2** at C2, many gaps test **structure** rather than vocabulary. If a sentence begins with a noun phrase and a comma and has no verb before the main clause, think **absolute**: *over*, *having*, *being*, *permitting*. If the gap comes after *and so they* or *but I*, think **ellipsis**: an auxiliary such as *did*, *can’t* or *would*.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'lena', items: [
            { a: 'The meeting over, we went straight home.' },
            { a: 'With prices rising, many families are cutting back.' },
            { a: 'We will eat outside, weather permitting.' },
            { a: 'All things considered, the trip was a success.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'He will keep doing that',
      about: 'Use will and would for habit and insistence, shall, may well and might as well, dare and need as modals, and the continuous for annoyance and for tact.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'At C2, modal verbs are less about grammar and more about **attitude**. The same modal can sound neutral, fond or furious depending on stress and context.\n\n***Will*** describes **typical behaviour** in the present: *She’**ll** sit for hours with a book.* ***Would*** does the same for the past: *On Sundays my grandfather **would** walk to the harbour.* Both are characteristic, almost affectionate. But when *will* or *would* is **stressed** and not contracted, it shows **annoyance at someone’s insistence**: *He **will** leave the door open!* (he insists on doing it, and it annoys me). *She **would** say that* means *That is exactly what I expected her to say*, usually with irritation.\n\n***Won’t*** and ***wouldn’t*** express **refusal**, even of objects: *The car **won’t** start. The lid **wouldn’t** come off.*' },
          { t: 'examples', items: [
            { s: 'My cat **will** sleep anywhere warm.', n: 'Typical behaviour: neutral or fond.' },
            { s: 'Every summer we **would** rent the same cottage.', n: 'Past habit: *would*.' },
            { s: 'He **will** keep interrupting me!', n: 'Stressed *will*: annoyance at insistence.' },
            { s: '“The minister says the policy works.” “Well, he **would** say that.”', n: 'Stressed *would*: an expected, self-serving remark.' },
            { s: 'The printer **won’t** print anything in colour.', n: 'Refusal, used of a machine.' },
          ] },
        ],
        [
          { t: 'text', md: '***Shall*** is rare in American English but alive in British English in a few uses: **offers and suggestions** (*Shall I open the window? Shall we go?*), **formal obligation** in rules and contracts (*The tenant **shall** pay rent monthly*), and **determination or promise**, which sounds literary (*You **shall** go to the ball*).\n\n***May well***, ***might well*** and ***could well*** mean **quite likely**: *The report **may well** be delayed.* ***Might as well*** and ***may as well*** are quite different: they mean **there is no better option, so we should**. *The last bus has gone; we **might as well** walk.* The tone is often resigned. *Might just as well* adds emphasis.' },
          { t: 'table', caption: 'Modals with attitude', explain: ['head', 'col1'], head: ['Form', 'Meaning', 'Example'], rows: [
            ['will / would (unstressed)', 'typical behaviour, present / past', 'He’ll talk to anyone.'],
            ['will / would (stressed)', 'annoying insistence', 'She will play her music at midnight.'],
            ['won’t / wouldn’t', 'refusal', 'The door won’t open.'],
            ['shall I / shall we', 'offer or suggestion', 'Shall I take your coat?'],
            ['shall (formal)', 'obligation in rules', 'Members shall pay an annual fee.'],
            ['may / might / could well', 'quite likely', 'It may well rain later.'],
            ['might / may as well', 'no better option, so let’s', 'We might as well start without them.'],
          ] },
        ],
        [
          { t: 'text', md: '***Dare*** and ***need*** can be **main verbs** (*He doesn’t dare to ask. You don’t need to come.*) or **modal verbs**, with no *-s*, no *do* and no *to*, mostly in **negatives and questions**: *He **daren’t** ask. **Need** I say more? You **needn’t** come.* The modal forms are more formal and more British. Fixed phrases keep them alive everywhere: ***How dare you!*** (outrage), ***I dare say*** (I suppose), ***Don’t you dare!*** (a warning). Remember from C1 that *needn’t have done* means you did something unnecessary: *You **needn’t have** brought a present.*\n\n**Aspect** has attitude too. ***Always*** (or *forever*, *constantly*) with the **present continuous** shows **annoyance** at a repeated habit: *You’re **always losing** your keys.* The **past continuous** and **future continuous** add **tact**, making a request or question less direct: ***I was wondering*** *if you could help. **Will you be staying** for dinner?* (a neutral question about plans, not a request). ***I’m hoping*** *you can join us* is softer than *I hope*.' },
          { t: 'examples', items: [
            { s: 'I **daren’t** tell her what happened.', n: 'Modal *dare*: no *to*, no *do*.' },
            { s: '**Need** I remind you that the deadline is tomorrow?', n: 'Modal *need* in a question; formal and pointed.' },
            { s: 'You’re **always leaving** the lights on!', n: 'Present continuous with *always*: annoyance.' },
            { s: 'I **was wondering** whether you might be free on Friday.', n: 'Past continuous for a polite request.' },
            { s: '**Will you be using** the car tomorrow?', n: 'Future continuous: asks about plans tactfully.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['He dares not to ask.', 'He dare not ask. / He doesn’t dare (to) ask.', 'Modal *dare* takes no *-s* and no *to*.'],
            ['You needn’t to come.', 'You needn’t come.', 'Modal *need* takes no *to*.'],
            ['We may well walk; the bus has gone.', 'We might as well walk; the bus has gone.', '*May well* = likely; *might as well* = no better option.'],
            ['He always leaves his socks everywhere! (to complain)', 'He’s always leaving his socks everywhere!', 'Annoyance uses the continuous with *always*.'],
            ['I wonder you can help me.', 'I was wondering if you could help me.', 'The tactful form needs *if* and is usually past.'],
          ] },
          { t: 'dialogue', title: 'House rules', lines: [
            { who: 'Lucy', s: 'Tom, you will leave the milk out. That’s the third time this week.' },
            { who: 'Tom', s: 'Sorry. I was going to put it back. Anyway, who’s been using my headphones?' },
            { who: 'Lucy', s: 'Guilty. I needn’t have borrowed them, to be fair: I found mine an hour later.' },
            { who: 'Tom', s: 'You might have asked. Shall we just agree on some rules?' },
            { who: 'Lucy', s: 'We might as well. I was wondering if you’d be willing to do the bins on Mondays.' },
            { who: 'Tom', s: 'How dare you. Fine. But you’re always saying you’ll clean the bathroom, and you never do.' },
            { who: 'Lucy', s: 'Point taken. It may well be my turn.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Is the speaker showing annoyance, or being tactful?', groups: ['annoyance', 'tact'], explain: ['groups'], items: [
            { s: 'He will keep interrupting me!', g: 0, why: 'Stressed *will*: annoying insistence.' },
            { s: 'I was wondering if you could send me the file.', g: 1, why: 'Past continuous softens a request.' },
            { s: 'You’re always borrowing my charger.', g: 0, why: '*Always* + continuous: a complaint.' },
            { s: 'Will you be needing anything else today?', g: 1, why: 'Future continuous: a polite question about plans.' },
            { s: 'Well, she would say that, wouldn’t she?', g: 0, why: 'Stressed *would*: an expected, irritating remark.' },
            { s: 'We were hoping you might join us.', g: 1, why: 'Past continuous of *hope*: a soft invitation.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best option.', items: [
            { q: 'The last train has gone. We ___ get a taxi.', o: ['might as well', 'may well', 'dare'], why: 'No better option: *might as well*.' },
            { q: 'Don’t book yet: the price ___ come down next week.', o: ['may well', 'might as well', 'shall'], why: 'Quite likely: *may well*.' },
            { q: '___ I carry those boxes for you?', o: ['Shall', 'Will', 'Need'], why: 'An offer: *Shall I…?*' },
            { q: 'She ___ ask her boss for a day off; he is in a terrible mood.', o: ['daren’t', 'daren’t to', 'doesn’t dare not'], why: 'Modal *dare*: no *to*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 4): write a sentence with a similar meaning to the first, using the word given, which must not change. In the exam the second sentence is partly printed and you write three to eight words; here you write the whole sentence.', items: [
            { q: 'There is nothing better to do, so we should go home.', cue: 'AS', a: ['We might as well go home.', 'We may as well go home.', 'We might just as well go home.', 'We may just as well go home.'], why: '*Might as well* = there is no better option.' },
            { q: 'It is quite likely that the train will be late.', cue: 'WELL', a: ['The train may well be late.', 'The train might well be late.', 'The train could well be late.'], why: '*May well* = quite likely.' },
            { q: 'It annoys me that he constantly interrupts me.', cue: 'ALWAYS', a: ['He is always interrupting me.', 'He’s always interrupting me.'], why: '*Always* + present continuous shows annoyance.' },
            { q: 'It wasn’t necessary for you to bring a present, but thank you.', cue: 'NEED', a: ['You needn’t have brought a present, but thank you.', 'You need not have brought a present, but thank you.'], why: '*Needn’t have* + past participle: you did it, but it was unnecessary.' },
            { q: 'I was too frightened to tell my father what had happened.', cue: 'DARE', a: ['I did not dare tell my father what had happened.', 'I didn’t dare tell my father what had happened.', 'I did not dare to tell my father what had happened.', 'I didn’t dare to tell my father what had happened.', 'I dared not tell my father what had happened.'], why: '*Dare* as a main verb (*didn’t dare (to)*) or a modal (*dared not*).' },
            { q: 'Would you like me to carry your bag?', cue: 'SHALL', a: ['Shall I carry your bag?', 'Shall I carry your bag for you?'], why: '*Shall I…?* makes an offer.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Part 4 often tests two near-identical forms with different meanings: ***may well*** (likely) and ***might as well*** (no better option); ***needn’t have done*** (did it, unnecessarily) and ***didn’t need to do*** (not necessary, usually not done). Before you write, ask **what the first sentence actually says happened**.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor, with the stress that shows the attitude.', tutor: 'omar', items: [
            { a: 'He will keep leaving the door open!' },
            { a: 'The last bus has gone, so we might as well walk.' },
            { a: 'I was wondering if you could help me with something.' },
            { a: 'You needn’t have brought anything, but thank you.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'The last ferry',
      about: 'Read a short story that uses the structures of the unit, answer questions in the format of C2 Proficiency Reading Part 5, and notice how the grammar creates tone.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'This lesson brings the unit together in a short story. Notice how the grammar does more than carry information: the absolutes set the scene in a few words, the stressed *would* tells you what Marta thinks of the man in the kiosk, and the formulaic subjunctive gives the stranger his old-fashioned voice.\n\nIn **C2 Proficiency Reading and Use of English Part 5** you read **one long text**, often from a novel, a memoir or a serious magazine, and answer **six multiple-choice questions** with **four options** each. The questions follow the order of the text and test **detail, opinion, attitude, implication, tone and purpose**, and the meaning of a phrase in context. The text here is shorter than in the exam.' },
          { t: 'reading', title: 'The last ferry', md: 'The ticket office shuttered for the night, Marta stood on the quay and watched the last ferry rocking at its moorings, its lights smeared by the rain. Weather permitting, it would have had her home by midnight. The weather, as the man in the kiosk had warned her that afternoon, did not permit. The crossing was cancelled.\n\n“I suggest you wait in the café,” he had said, “and that you not try the coast road. Not tonight.” He would say that, she thought. He would always find a reason for people to stay exactly where they were. Far be it from her to argue with a man who had watched these waters for forty years, but the café was cold, and the coffee, when it came, was worse.\n\nShe had been sitting there for an hour, her coat still dripping onto the tiles, when a man in a fisherman’s jumper took the chair opposite without asking. “You’ll have been hoping for the eleven o’clock,” he said. It was not a question. She nodded. “Then you might as well have a proper drink,” he said, and went to fetch two glasses of something brown before she could refuse.\n\nHe talked. He was always talking, she would decide later, the way some people are always fidgeting: about the boats he had crewed, about a sister in Lisbon who never wrote, about the winter the harbour froze. Marta, who had come to the island to be alone, found that she did not mind. Dare she admit it, she was glad of him. When he asked why she had come, she told him; when he asked whether she was going back, she found she did not know.\n\n“My father used to say a person need never explain why they leave a place,” he said, “only why they come back.”\n\n“And did he? Come back?”\n\n“Every time. Suffice it to say my mother was a patient woman.”\n\nAround three, the storm spent, he stood, buttoned his jacket and wished her a safe crossing. “Come what may,” he said, “take the first boat.” She laughed. He did not.\n\nWith the sky already paling over the headland, Marta walked back down to the quay. The first ferry was waiting, engine running, a boy coiling ropes on the deck. She thought of the cottage behind her, of the silence she had wanted so badly and had, it now seemed, never needed. Were it not for a stranger and a cold café, she might have stayed another month and called it peace. “So be it,” she said to no one in particular, and stepped aboard.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 5): read the story again and choose the answer which fits best according to the text.', items: [
            { q: 'What do we learn in the first paragraph?', o: ['The crossing was called off, as Marta had been told it might be.', 'Marta arrived too late to catch the last ferry.', 'The ferry left the harbour without its passengers.', 'Marta decided not to travel because of the rain.'], why: '*The weather, as the man in the kiosk had warned her… did not permit. The crossing was cancelled.*' },
            { q: 'What is Marta’s attitude to the man in the kiosk?', o: ['She finds his caution predictable but does not challenge it.', 'She suspects him of sending customers to the café.', 'She resents him for refusing to sell her a ticket.', 'She trusts his judgement completely because of his experience.'], why: '*He would say that* shows she expected it; *Far be it from her to argue* shows she does not challenge him.' },
            { q: 'Why does the stranger say “You’ll have been hoping for the eleven o’clock”?', o: ['He is drawing a confident conclusion from what he can see.', 'He wants to know which ferry she intended to take.', 'He is criticising her for arriving so late.', 'He is offering to take her across in his own boat.'], why: '*Will have* makes a confident assumption; *It was not a question.*' },
            { q: 'The comparison “the way some people are always fidgeting” suggests that the man’s talking was…', o: ['a constant habit rather than an effort to entertain her.', 'a sign that he was nervous in her company.', 'something Marta found more and more irritating.', 'a way of avoiding her questions.'], why: '*Always* + continuous describes a habit; and Marta *found that she did not mind*.' },
            { q: 'What does the stranger imply about his father?', o: ['He left home many times and always returned.', 'He never told anyone why he travelled.', 'He was rarely welcome when he came back.', 'He regretted every journey he made.'], why: '*Every time. Suffice it to say my mother was a patient woman*: the father kept leaving and coming back.' },
            { q: 'In the final paragraph, Marta realises that…', o: ['she no longer wants the solitude she came for.', 'she will return to the island next month.', 'the stranger had planned their meeting.', 'the cottage had never been comfortable.'], why: '*The silence she had wanted so badly and had, it now seemed, never needed.*' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 5**, the answer is rarely stated in the text’s own words. Questions on **attitude** and **implication** depend on exactly the grammar of this unit: a stressed *would* (*He would say that*) shows irritation, *far be it from her* shows reluctance to argue, *suffice it to say* hints at more than it says. Read the lines **around** the reference, and reject options that go further than the text.' },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the structure from the unit in each sentence from the story.', items: [
            { s: '[The ticket office shuttered for the night], Marta stood on the quay.', why: 'An absolute construction: its own subject, no finite verb.' },
            { s: 'I suggest you wait in the café and that you [not try] the coast road.', why: 'Negative mandative subjunctive: *not* + base form.' },
            { s: 'Then you [might as well] have a proper drink.', why: '*Might as well*: there is no better option.' },
            { s: '[Dare she admit it], she was glad of him.', why: 'Modal *dare* in an inverted, literary phrase.' },
            { s: '[Were it not for] a stranger and a cold café, she might have stayed.', why: 'The inverted conditional with subjunctive *were*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match each phrase from the story with what it shows.', pairs: [
            ['He would say that.', 'irritation at a predictable remark'],
            ['Far be it from her to argue', 'reluctance to challenge someone'],
            ['Suffice it to say', 'hinting at more than is said'],
            ['the storm spent', 'background given in a few words'],
            ['So be it.', 'accepting a decision'],
          ] },
        ],
        [
          { t: 'text', md: 'Now talk about the story, as you would in **Speaking Part 3**, where you speak alone for about two minutes and then discuss the topic. A question card might ask: *Why do people sometimes choose to be alone, and is it good for them?* Use the structures of the unit naturally: *All things considered, I’d say solitude can help, but only for a while. Were it not for the stranger, Marta might have mistaken loneliness for peace.*' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor, as if you were discussing the story.', tutor: 'sofia', items: [
            { a: 'The crossing cancelled, Marta had no choice but to wait.' },
            { a: 'Were it not for the stranger, she might have stayed another month.' },
            { a: 'All things considered, I think she made the right decision.' },
            { a: 'He would say that, she thought, and she was probably right.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the best option.', items: [
      { q: 'It is vital that every passenger ___ a seat belt.', o: ['wear', 'wears', 'wore'], why: 'Mandative subjunctive: base form.' },
      { q: 'The evidence suggests that the fire ___ started deliberately.', o: ['was', 'be', 'should be'], why: '*Suggest* = indicate: indicative.' },
      { q: '___ the children asleep, the house was finally quiet.', o: ['With', 'Being', 'Having'], why: '*With* + object + adjective.' },
      { q: 'The bus has gone, so we ___ walk.', o: ['might as well', 'may well', 'will'], why: 'No better option: *might as well*.' },
      { q: 'You’re ___ my pens without asking!', o: ['always taking', 'always take', 'always taken'], why: '*Always* + present continuous for annoyance.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
      { q: 'Far be it ___ me to criticise, but the plan won’t work.', a: ['from'], why: '*Far be it from me to…*' },
      { q: '___ it not for your advice, I would have accepted the offer.', a: ['Were'], why: 'Inverted conditional: *Were it not for*.' },
      { q: 'We’ll have lunch on the terrace, weather ___.', a: ['permitting'], why: 'The fixed absolute.' },
      { q: 'She said she would finish it by Friday, and she ___.', a: ['did'], why: 'Ellipsis after an auxiliary.' },
      { q: '___ I remind you that the deadline is today?', a: ['Need'], why: 'Modal *need* in a pointed question.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Write a sentence with a similar meaning, using the word given.', items: [
      { q: 'The board demanded an immediate change to the rules.', cue: 'BE', a: ['The board demanded that the rules be changed immediately.', 'The board demanded the rules be changed immediately.', 'The board demanded that the rules be changed at once.'], why: 'Passive subjunctive after *demanded that*.' },
      { q: 'It is quite likely that she will get the job.', cue: 'WELL', a: ['She may well get the job.', 'She might well get the job.', 'She could well get the job.'], why: '*May well* = quite likely.' },
      { q: 'After he had finished the report, he went home.', cue: 'HAVING', a: ['Having finished the report, he went home.'], why: 'A perfect participle clause.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'I recommend that he [takes] a few days off.', a: ['take', 'should take'], why: 'Mandative subjunctive: base form, or *should take*.' },
      { s: 'He [dares not to] complain to the manager.', a: ['dare not', 'daren’t', 'does not dare to', 'doesn’t dare to', 'doesn’t dare'], why: 'Modal *dare*: no *-s* and no *to*.' },
      { s: 'We [needn’t to have] worried: the exam was easy.', a: ['needn’t have', 'need not have'], why: 'Modal *need* takes no *to*: *needn’t have worried*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match each phrase with its meaning.', pairs: [
      ['come what may', 'whatever happens'],
      ['suffice it to say', 'I will say only this'],
      ['all things considered', 'taking everything into account'],
      ['other things being equal', 'if nothing else changes'],
    ] },
  ],
};
