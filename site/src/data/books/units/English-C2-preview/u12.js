// English C2, unit 12, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Ethics and dilemmas, one of the eight academic and professional units: the formal language of obligation and
// permission, hypothetical reasoning, the abstract vocabulary of ethics with a long turn in the format of Speaking Part 3,
// and a philosopher's essay on a classic dilemma. The philosopher and every person in the texts are fictional. Each lesson
// ends with a task in the format of a named C2 Proficiency part and a speaking task.
export const UNIT = {
  id: 'u12',
  title: 'Ethics and dilemmas',
  goal: 'Discuss moral questions with precision, balance and tact: say who must, may and need not act, reason about what would happen if, name the ideas of ethics exactly, and follow a philosopher’s argument closely.',
  art: 'ghost',
  tags: { skills: ['grammar', 'vocabulary', 'speaking', 'reading'], topics: ['ethics', 'obligation', 'permission', 'conditionals', 'inversion', 'hypotheticals', 'abstract-nouns', 'long-turn'], goals: ['foundations', 'academic', 'professional'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'It is not for us to judge',
      about: 'Say who must act, who may act and who need not, in the formal language of duty and permission.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'At lower levels, *must*, *have to*, *can* and *don’t have to* cover most needs. When people discuss ethics, law or professional conduct, they need finer distinctions: not only *what* must be done but **whose** duty it is, **where it comes from**, and whether a permission is a **right** or merely a **freedom**.\n\n***It is incumbent on** someone **to do** something* means it is their formal duty, usually because of their role: *It is incumbent on doctors to keep records.* **Be under an obligation to** and **be duty-bound to** say the same, and **be under no obligation to** says the opposite: *You are under no obligation to answer.*\n\n**Be entitled to** expresses a **right**: something you can claim and others should respect (*entitled to a fair hearing, entitled to know*). **Be at liberty to** expresses **freedom**: nothing stops you (*You are at liberty to leave at any time*). **Be within your rights to** means an action is allowed, even if others dislike it.\n\n***It is not for** someone **to do** something* means it is not their place: *It is not for us to judge.* **It falls to** someone **to do** something says the duty has landed on them, often unexpectedly: *It fell to the youngest nurse to tell the family.*' },
          { t: 'table', caption: 'Duty, freedom and rights', explain: ['head', 'col1'], head: ['Expression', 'Meaning', 'Example'], rows: [
            ['it is incumbent on / upon someone to do', 'it is their formal duty', 'It is incumbent on the board to act.'],
            ['be under an obligation to / be duty-bound to', 'they must, by rule or conscience', 'We are duty-bound to report it.'],
            ['be under no obligation to', 'they do not have to', 'You are under no obligation to reply.'],
            ['be entitled to + noun / to do', 'they have a right to it', 'Patients are entitled to see their records.'],
            ['be at liberty to do', 'they are free to do it', 'You are at liberty to quote me.'],
            ['be within your rights to do', 'it is allowed, even if unwelcome', 'She was within her rights to refuse.'],
            ['it is not for someone to do', 'it is not their place or role', 'It is not for me to say.'],
            ['it falls to someone to do', 'the task or duty comes to them', 'It fell to her to break the news.'],
            ['have no business doing', 'they should not be doing it (critical)', 'He had no business reading my emails.'],
          ] },
        ],
        [
          { t: 'text', md: 'These expressions come with **fixed patterns**, and the small words are where mistakes happen. *Incumbent* takes ***on** or **upon***, never *for*. *Entitled* takes ***to***, followed by a noun or an infinitive. *At liberty* has **no article**. *Under no obligation* keeps *no* before *obligation*, not *not* before *under*. *It is not for* takes **for + person + to-infinitive**.\n\nThey also differ in **tone**. *It is incumbent on you* is formal and slightly weighty; use it for real responsibilities. *You are under no obligation* is polite and reassuring, common in letters and consent forms. *It is not for me to say* is a tactful way of declining to judge, and *I am not at liberty to say* is how officials refuse to reveal information.\n\nThe opposite of *must* is not always *must not*. *You **must not** tell anyone* forbids it; *you are **under no obligation** to tell anyone* leaves the choice to you; *you are **not at liberty** to tell anyone* says you are not allowed, usually because of a rule.' },
          { t: 'examples', items: [
            { s: 'It is **incumbent upon** every member of the committee **to declare** any personal interest.', n: 'A formal duty attached to a role.' },
            { s: 'You are **under no obligation to** take part, and you may withdraw at any time.', n: 'Typical wording of a consent form: reassuring and polite.' },
            { s: 'Employees **are entitled to** a written explanation of any decision against them.', n: 'A right that others must respect.' },
            { s: 'I’m afraid I’m **not at liberty to** discuss individual cases.', n: 'An official refusal: a rule prevents me.' },
            { s: '**It is not for** a journalist **to decide** who is guilty; that is for the courts.', n: 'Not their role: *not for* + person + *to*.' },
            { s: 'When the manager resigned, **it fell to** a junior colleague **to explain** the losses.', n: 'The duty landed on someone, often unfairly.' },
            { s: 'She **was within her rights to** refuse, but it did not make her popular.', n: 'Allowed, though others disliked it.' },
            { s: 'Strangers **have no business** telling parents how to raise their children.', n: 'Critical: they should not be doing it.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['It is incumbent for managers to act.', 'It is incumbent on managers to act.', '*incumbent on / upon*, never *for*.'],
            ['You are not under obligation to reply.', 'You are under no obligation to reply.', 'The fixed phrase is *under no obligation*.'],
            ['You are at the liberty to leave.', 'You are at liberty to leave.', 'No article in *at liberty*.'],
            ['Customers are entitled for a refund.', 'Customers are entitled to a refund.', '*entitled to*.'],
            ['It is not for us judging.', 'It is not for us to judge.', '*not for* + person + *to*-infinitive.'],
            ['He has no business to read my emails.', 'He has no business reading my emails.', '*have no business* + *-ing*.'],
            ['It fell on her to tell them.', 'It fell to her to tell them.', '*fall to* someone to do something.'],
          ] },
          { t: 'dialogue', title: 'Should we report it?', lines: [
            { who: 'Margaret', s: 'Owen, I’ve found an error in the figures Daniel sent to the client last month. It overstated our results.' },
            { who: 'Owen', s: 'Deliberately?' },
            { who: 'Margaret', s: 'I doubt it. But it isn’t for me to decide that. What I do know is that it’s incumbent on us to correct it.' },
            { who: 'Owen', s: 'Strictly speaking, we’re under no obligation to report a colleague’s mistake to the board.' },
            { who: 'Margaret', s: 'To the board, no. But the client is entitled to accurate figures, whoever made the error.' },
            { who: 'Owen', s: 'Fair enough. Then we talk to Daniel first. He’s within his rights to explain before anyone else hears of it.' },
            { who: 'Margaret', s: 'Agreed. And if he won’t correct it, I suppose it falls to us.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the word that completes the expression.', items: [
            { q: 'It is incumbent ___ all staff to report safety concerns.', o: ['on', 'for', 'to'], why: '*incumbent on / upon* someone.' },
            { q: 'You are under ___ obligation to buy anything.', o: ['no', 'not', 'any'], why: 'The fixed phrase *under no obligation*.' },
            { q: 'Tenants are entitled ___ a copy of the contract.', o: ['to', 'for', 'of'], why: '*entitled to* + noun.' },
            { q: 'I am not at ___ to reveal my sources.', o: ['liberty', 'freedom', 'permission'], why: 'The fixed phrase *at liberty to*.' },
            { q: 'It is not ___ the government to tell people what to believe.', o: ['for', 'to', 'of'], why: '*It is not for* someone *to do*.' },
            { q: 'He had no business ___ through her private papers.', o: ['looking', 'to look', 'look'], why: '*have no business* + *-ing*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'Patients are entitled [for] see their own medical records.', a: ['to'], why: '*entitled to* + infinitive.' },
            { s: 'You are [at the] liberty to share this report.', a: ['at'], why: 'No article: *at liberty*.' },
            { s: 'When the director left, it fell [on] the deputy to explain the decision.', a: ['to'], why: '*It fell to* someone *to do*.' },
            { s: 'You are [not under] obligation to answer these questions.', a: ['under no'], why: '*under no obligation*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 2): read the text about doctors and confidentiality. Write one word in each gap.', items: [
            { q: 'It has long been incumbent ___ doctors to keep what their patients tell them in confidence.', a: ['on', 'upon'], why: '*incumbent on / upon* someone.' },
            { q: 'Patients, for their part, are entitled ___ expect that their secrets will go no further.', a: ['to'], why: '*entitled to* + infinitive.' },
            { q: 'Yet the duty is by ___ means absolute.', a: ['no'], why: 'The fixed phrase *by no means*: not at all.' },
            { q: 'Where a patient poses a serious risk to others, a doctor may be ___ liberty to break that confidence,', a: ['at'], why: '*at liberty to*: free to.' },
            { q: 'and in some cases is under an obligation ___ do so.', a: ['to'], why: '*under an obligation to* do something.' },
            { q: 'It is not ___ the individual doctor alone to decide where that line lies;', a: ['for'], why: '*It is not for* someone *to do*.' },
            { q: 'professional guidance sets it out, and it falls ___ the courts to settle any disputes.', a: ['to'], why: '*it falls to* someone *to do*.' },
            { q: 'Even so, many doctors admit that they have found ___ in a grey area more often than the guidance suggests.', a: ['themselves'], why: '*find yourself* in a situation: a reflexive pronoun.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 2** of C2 Proficiency there are **eight gaps** and no options, and every answer is **one word**. Many gaps sit inside fixed expressions like *incumbent **on***, ***by** no means* and *at **liberty***, so read a few words on both sides before you decide. Spelling counts, and a contraction is never the answer.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor, tactfully and clearly.', tutor: 'mei', items: [
            { a: 'It is incumbent on all of us to correct the record.' },
            { a: 'You are under no obligation to take part.' },
            { a: 'I am afraid I am not at liberty to discuss individual cases.' },
            { a: 'It is not for me to say whether he acted in good faith.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'Were we to accept this',
      about: 'Reason about hypothetical cases with inverted conditionals, suppose and what if, and it is one thing to … and quite another to.',
      art: 'alien',
      spreads: [
        [
          { t: 'text', md: 'Moral argument runs on **hypotheticals**: *What would happen if everyone did this? Suppose you knew nobody would find out?* At C2 you need formal ways to set up an imagined case and to reason from it.\n\nThe most formal is the **inverted conditional**, which drops *if* and puts the auxiliary first. ***Were** we **to** accept this argument, we would have to accept its consequences* (= *If we were to accept…*): *were + subject + to-infinitive* presents a future possibility as hypothetical and slightly unlikely. ***Should** the vote be tied, the chair decides* (= *If the vote is tied*): a real but unlikely possibility. ***Had** she **not** spoken up, nobody would have known* (= *If she had not spoken up*): the past.\n\n***Were it not for*** and ***Had it not been for*** + noun mean *without*: ***Were it not for** the law, many firms would cut corners* (now); ***Had it not been for** her courage, the fraud would have continued* (past). ***But for*** + noun says the same more briefly. Notice that negative inversion puts *not* after the subject: ***Had she not*** spoken, never *Hadn’t she* spoken.' },
          { t: 'table', caption: 'Formal hypotheticals', explain: ['head', 'col1'], head: ['Structure', 'Use', 'Example'], rows: [
            ['Were + subject + to do', 'an imagined future, rather unlikely', 'Were the law to change, many firms would close.'],
            ['Were + subject + noun / adjective', 'an imagined present', 'Were I in her position, I would resign.'],
            ['Should + subject + verb', 'a possible but unlikely event', 'Should you need help, call me.'],
            ['Had + subject + (not) + past participle', 'an imagined past', 'Had he known, he would have refused.'],
            ['Were it not for + noun', 'without (now)', 'Were it not for the rules, chaos would follow.'],
            ['Had it not been for + noun', 'without (in the past)', 'Had it not been for her, we would have failed.'],
            ['But for + noun', 'without (now or past)', 'But for the leak, nobody would know.'],
          ] },
        ],
        [
          { t: 'text', md: 'In discussion, hypotheticals are often set up with ***Suppose** (that)…*, ***Supposing**…*, ***Imagine** (that)…*, ***What if**…?* and ***Say**…*. With an imagined case, the verb moves **one step back** in time, as in the second and third conditionals: ***Suppose** you **found** a wallet full of cash. Would you hand it in?* ***What if** nobody **had** noticed?* With a real possibility, the present stays: ***Suppose** the client **calls**: what do we tell them?*\n\nTo concede part of an argument and resist the rest, C2 speakers use ***It is one thing to** do X **and quite another to** do Y*: ***It is one thing to** bend a rule to help a patient, **and quite another to** do it for profit.* The first action may be acceptable; the second is the real issue. ***For the sake of argument***, ***let us assume that*** and ***on the assumption that*** set up a case you do not necessarily believe.\n\nFinally, **mixed conditionals** link a past cause to a present result: ***Had** the company **listened** to its staff, it **would not be** in this position now.*' },
          { t: 'examples', items: [
            { s: '**Were** everyone **to** ignore the rule, the system would collapse.', n: 'A formal imagined future: *were + subject + to*.' },
            { s: '**Had it not been for** one honest accountant, the fraud would have gone unnoticed.', n: 'Without her, in the past.' },
            { s: '**Should** any conflict of interest **arise**, it must be declared at once.', n: 'Formal: a real but unlikely possibility.' },
            { s: '**Suppose** you **knew** for certain that nobody would ever find out. Would you still tell the truth?', n: 'An imagined case: past form for the present.' },
            { s: '**It is one thing to** keep a secret for a friend, **and quite another to** lie to protect them.', n: 'Concede the first; question the second.' },
            { s: '**For the sake of argument**, let us assume the information was obtained legally.', n: 'Setting up a case you may not believe.' },
            { s: '**But for** the whistleblower, the public would still be at risk.', n: '*But for* + noun: without.' },
            { s: '**Had** the regulator **acted** sooner, we **would not be** facing this crisis now.', n: 'Mixed: past condition, present result.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['Hadn’t she spoken up, nobody would have known.', 'Had she not spoken up, nobody would have known.', 'Inverted conditionals do not use contractions; *not* follows the subject.'],
            ['Were we accept this, we would…', 'Were we to accept this, we would…', '*Were + subject + to*-infinitive.'],
            ['Had it not for her help…', 'Had it not been for her help…', 'The past form needs *been*.'],
            ['If were the law to change…', 'Were the law to change…', 'Inversion replaces *if*; do not use both.'],
            ['Suppose you find a wallet. Would you keep it?', 'Suppose you found a wallet. Would you keep it?', 'An imagined case with *would*: one step back.'],
            ['It is one thing to criticise, and other to act.', 'It is one thing to criticise, and quite another to act.', 'The fixed pair: *one thing… another*.'],
          ] },
          { t: 'dialogue', title: 'A seminar on the invisible ring', lines: [
            { who: 'Interviewer', s: 'Here is an old thought experiment. Suppose you found a ring that made you invisible. Would you still behave well?' },
            { who: 'Clara', s: 'I’d like to think so. But were I honest, I’d admit that some of my good behaviour depends on being seen.' },
            { who: 'James', s: 'That’s the point of the story, isn’t it? Were it not for the risk of being caught, many people would cut corners.' },
            { who: 'Clara', s: 'Possibly. But it’s one thing to bend a small rule when nobody is watching, and quite another to harm someone.' },
            { who: 'James', s: 'Granted. Still, had nobody ever been punished for anything, I doubt our idea of fairness would look the way it does.' },
            { who: 'Interviewer', s: 'So, for the sake of argument, should a perfectly invisible person still feel guilt?' },
            { who: 'Clara', s: 'I think so. Guilt is about who you are, not who is watching.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the form that completes the formal hypothetical.', items: [
            { q: '___ the company to admit its mistake, it might regain some trust.', o: ['Were', 'Should', 'Had'], why: '*Were + subject + to*: an imagined future.' },
            { q: '___ it not been for the leak, the public would never have known.', o: ['Had', 'Were', 'Should'], why: 'The past: *Had it not been for*.' },
            { q: '___ you have any concerns, please contact the ethics officer.', o: ['Should', 'Were', 'Had'], why: '*Should* + subject + base verb: a possible event.' },
            { q: 'Suppose you ___ the only witness. What would you do?', o: ['were', 'are being', 'will be'], why: 'An imagined case: one step back, *were*.' },
            { q: 'It is one thing to doubt a decision, and quite ___ to sabotage it.', o: ['another', 'other', 'different'], why: 'The fixed pair *one thing… another*.' },
            { q: 'Had the board listened to its staff, it ___ in this position now.', o: ['would not be', 'would not have been', 'will not be'], why: 'Mixed conditional: past condition, present result.' },
          ] },
          { t: 'ex', kind: 'build', h: 'Build the sentence. Two words do not belong.', items: [
            { a: 'Were we to accept this argument, we would have to change the law.', extra: ['if', 'will'], why: 'Inversion replaces *if*, and the result clause takes *would*.' },
            { a: 'Had it not been for her courage, the fraud would have continued.', extra: ['hadn’t', 'was'], why: 'No contraction in an inverted conditional; *Had it not been for*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first, using the word given. Do not change the word given. Use between three and eight words, including the word given.', items: [
            { q: 'The fraud only came to light because she was courageous.', cue: 'not', gap: 'Had ___, the fraud would never have come to light.', a: ['it not been for her courage', 'she not been so courageous', 'she not been courageous', 'she not shown such courage', 'she not shown courage', 'it not been for her bravery'], why: 'An inverted third conditional: *Had it not been for* + noun, or *Had she not been*.' },
            { q: 'If the committee decided to approve the plan, there would be protests.', cue: 'were', gap: '___ the plan, there would be protests.', a: ['Were the committee to approve', 'Were the committee to decide to approve'], why: '*Were + subject + to*-infinitive replaces *If… decided to*.' },
            { q: 'Criticising a decision is much easier than taking it yourself.', cue: 'another', gap: 'It is one thing to criticise a decision ___ yourself.', a: ['and quite another to take it', 'but quite another to take it', 'and another to take it', 'and quite another thing to take it', 'but another to take it'], why: 'The fixed pair *It is one thing to… and quite another to…*.' },
            { q: 'Imagine that you found a wallet full of cash. Would you hand it in?', cue: 'suppose', gap: '___ a wallet full of cash. Would you hand it in?', a: ['Suppose you found', 'Suppose that you found', 'Suppose you were to find', 'Suppose that you were to find', 'Suppose you happened to find'], why: '*Suppose* + past form for an imagined case.' },
            { q: 'Without the leaked report, we would not have known about the risk.', cue: 'had', gap: '___, we would not have known about the risk.', a: ['Had it not been for the leaked report', 'Had it not been for the report that was leaked', 'Had the report not been leaked', 'Had the report not leaked'], why: '*Had it not been for* + noun, or an inverted third conditional.' },
            { q: 'In the unlikely event that the vote is tied, the chair will decide.', cue: 'should', gap: '___ tied, the chair will decide.', a: ['Should the vote be', 'Should the vote turn out to be', 'Should the vote end up', 'Should the vote end up being', 'Should the vote prove to be'], why: '*Should* + subject + base verb for an unlikely event.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Many **Part 4** answers at C2 test **two things at once**: here, the inversion and the fixed phrase after it. Each item can earn **two marks**, one for each half, so write something even if you are unsure of the second half. Keep to **eight words at most**, never change the key word, and remember that inverted conditionals are not contracted.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'Were we to accept this argument, we would have to accept its consequences.' },
            { a: 'Had it not been for her courage, the fraud would have continued.' },
            { a: 'It is one thing to bend a rule, and quite another to harm someone.' },
            { a: 'Suppose you knew that nobody would ever find out.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'A grey area',
      about: 'Name the ideas of ethics precisely, from integrity and accountability to moral hazard, and use them in a long turn in the format of C2 Proficiency Speaking Part 3.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Talking about ethics at C2 means naming ideas exactly. Many of these words are **abstract nouns** with precise meanings that everyday speech blurs.\n\n**Integrity** is acting on your principles consistently, even when it costs you; it is more than honesty. **Accountability** is being answerable for your decisions: someone can ask you to explain them and face the consequences. **Transparency** is openness about how decisions are made. A **conflict of interest** arises when a person’s private interest could influence a decision they make in an official role, whether or not it actually does. A **grey area** is a situation where the rules do not give a clear answer. **The lesser of two evils** is the less bad of two bad options. **Moral hazard** is the risk that people behave less carefully because they are protected from the consequences, as when a bank expects to be rescued.\n\nA few related words complete the set: **complicity** (sharing in a wrong, even passively), **culpability** (how far someone is to blame), **impartiality** (not favouring either side), **a double standard** (judging one group more harshly than another for the same thing) and **a clear conscience**.' },
          { t: 'table', caption: 'The vocabulary of ethics', explain: ['head', 'col1'], head: ['Term', 'Meaning', 'Example'], rows: [
            ['integrity', 'acting on your principles consistently', 'She resigned rather than compromise her integrity.'],
            ['accountability', 'being answerable for your decisions', 'There must be accountability for the failures.'],
            ['transparency', 'openness about how decisions are made', 'The process lacked transparency.'],
            ['a conflict of interest', 'a private interest that could affect an official decision', 'He declared a conflict of interest and left the room.'],
            ['a grey area', 'a case the rules do not clearly settle', 'Gifts from clients are a grey area.'],
            ['the lesser of two evils', 'the less bad of two bad options', 'Closing one ward was the lesser of two evils.'],
            ['moral hazard', 'carelessness caused by protection from consequences', 'Rescuing the bank creates moral hazard.'],
            ['complicity', 'sharing in a wrong, even by silence', 'Silence can amount to complicity.'],
            ['a double standard', 'judging similar cases differently', 'It is a double standard to punish only junior staff.'],
          ] },
        ],
        [
          { t: 'text', md: 'These nouns live in **collocations**, and C2 speakers use them as blocks. You **declare** a conflict of interest; you **compromise** (or **maintain**) your integrity; you **hold** someone **to account**; you **demand** or **ensure** accountability; you **turn a blind eye** to wrongdoing, or you **blow the whistle** on it; you **cut corners** when you skip safeguards; you **act in good faith** when you mean well, and **in bad faith** when you do not.\n\nTwo verbs are worth distinguishing. To **condone** something is to accept or allow behaviour that is wrong; to **condemn** it is to say publicly that it is wrong. And three adjectives: **ethical** (in line with moral principles), **unethical** (against them) and **amoral** (without any moral sense at all, not the same as *immoral*, which means wrong).\n\nTact matters when you discuss other people’s choices. *That was dishonest* is a verdict; *That seems to fall into a grey area* or *I’m not sure that was entirely transparent* opens a discussion. At C2, the ability to criticise without attacking is part of precision.' },
          { t: 'examples', items: [
            { s: 'As the judge’s brother-in-law, he should have **declared a conflict of interest**.', n: 'You *declare* a conflict of interest.' },
            { s: 'Nobody was ever **held to account** for the failures.', n: '*hold someone to account*: make them answer for something.' },
            { s: 'The managers knew about the problem but **turned a blind eye**.', n: 'Deliberately ignored it.' },
            { s: 'It took an engineer to **blow the whistle** on the unsafe design.', n: 'Report wrongdoing to the public or the authorities.' },
            { s: 'To meet the deadline, the builders **cut corners** on safety.', n: 'Skipped steps that should not be skipped.' },
            { s: 'She **acted in good faith**, even though the outcome was bad.', n: 'She meant well.' },
            { s: 'Silence in the face of injustice is not neutrality; it is a form of **complicity**.', n: '*complicity*: sharing in a wrong.' },
            { s: 'I don’t **condone** what he did, but I understand why he did it.', n: '*condone*: accept wrong behaviour; here, refusing to.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['He has a conflict of interests with the supplier.', 'He has a conflict of interest involving the supplier.', 'The usual phrase is *a conflict of interest*.'],
            ['She made a conflict of interest.', 'She declared a conflict of interest.', 'You *declare* it, or *have* one.'],
            ['They hold him responsible to account.', 'They hold him to account. / They hold him responsible.', 'Two separate idioms.'],
            ['The bank is amoral to take the money.', 'It was immoral of the bank to take the money.', '*immoral* = wrong; *amoral* = without morals.'],
            ['We cannot condemn such behaviour by staying silent.', 'We cannot condone such behaviour by staying silent.', '*condone* = accept; *condemn* = criticise.'],
            ['the less of two evils', 'the lesser of two evils', 'The fixed phrase uses *lesser*.'],
          ] },
          { t: 'ex', kind: 'match', h: 'Match the term and its meaning.', pairs: [
            ['integrity', 'acting on your principles even when it costs you'],
            ['accountability', 'being answerable for your decisions'],
            ['a grey area', 'a case the rules do not clearly settle'],
            ['moral hazard', 'carelessness caused by protection from consequences'],
            ['complicity', 'sharing in a wrong, even by silence'],
            ['the lesser of two evils', 'the less bad of two bad options'],
          ] },
        ],
        [
          { t: 'ex', kind: 'bank', h: 'Complete each sentence with a word from the bank.', extra: ['amoral', 'condemn'], items: [
            { q: 'The councillor failed to ___ a conflict of interest when the contract was discussed.', a: 'declare', why: 'You *declare* a conflict of interest.' },
            { q: 'An inspector eventually blew the ___ on the dangerous practices.', a: 'whistle', why: '*blow the whistle on* wrongdoing.' },
            { q: 'Managers who turn a blind ___ to bullying share responsibility for it.', a: 'eye', why: '*turn a blind eye*: deliberately ignore.' },
            { q: 'If banks know they will always be rescued, there is a risk of moral ___.', a: 'hazard', why: '*moral hazard*.' },
            { q: 'We cannot ___ cheating, however much pressure the students were under.', a: 'condone', why: '*condone*: accept wrong behaviour.' },
            { q: 'Without proper ___, nobody will ever answer for these mistakes.', a: 'accountability', why: '*accountability*: being answerable.' },
          ] },
          { t: 'ex', kind: 'colloc', h: 'Which words go with the key word? Choose all that fit.', items: [
            { key: 'integrity', o: ['compromise your', 'maintain your', 'a person of', 'declare your', 'blow your'], a: [0, 1, 2], why: 'You compromise or maintain your integrity; a person *of* integrity.' },
            { key: 'account', o: ['hold someone to', 'be called to', 'take into', 'turn a blind', 'act in'], a: [0, 1, 2], why: '*hold someone to account*, *be called to account*, *take into account*.' },
          ] },
        ],
        [
          { t: 'text', md: 'In **Speaking Part 3** of C2 Proficiency, you and your partner each give a **long turn**. The examiner hands you a **card** with a **question** and **three ideas** you may use, or not. You speak for about **two minutes** without interruption. Then the examiner asks your partner a question about what you said, and asks you a follow-up question. After both long turns, there is a **discussion** with both candidates on the wider theme.\n\nA strong long turn has a clear shape: **answer the question directly**, develop **two or three points** with reasons and examples (you need not use every idea on the card), consider the **other side**, and **come back** to your answer at the end. Examiners listen for range, precision, organisation and the ability to keep going naturally. Abstract vocabulary is exactly what lifts a long turn to C2.' },
          { t: 'dialogue', title: 'Speaking Part 3: a model long turn', lines: [
            { who: 'Examiner', s: 'Priya, here is your card. The question is: is it ever right to break a rule in order to do the right thing? You may like to think about the workplace, the law and personal relationships. You have about two minutes.' },
            { who: 'Priya', s: 'I think it can be, but far less often than people like to believe. Most rules exist for good reasons, and it is one thing to break a rule to prevent real harm, and quite another to break it because it is inconvenient.' },
            { who: 'Priya', s: 'Take the workplace. If an employee discovers that the company is cutting corners on safety, I would argue that it is incumbent on her to blow the whistle, even if that breaks a confidentiality agreement. Silence there would amount to complicity.' },
            { who: 'Priya', s: 'On the other hand, the law is a grey area. Were everyone to decide for themselves which laws to obey, the system would collapse, so I think anyone who breaks a law on principle should accept the consequences. That, to me, is what integrity looks like.' },
            { who: 'Priya', s: 'So, to come back to the question: yes, sometimes, but only as the lesser of two evils, and never in secret.' },
            { who: 'Examiner', s: 'Thank you. Kwame, do you think people who break rules on principle should be punished?' },
            { who: 'Kwame', s: 'I think so, though perhaps more leniently. Otherwise we create a kind of moral hazard, where anyone can claim their motives were good.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Speaking Part 3, the long turn): read the model long turn again and choose the best answer.', items: [
            { q: 'How does Priya begin her long turn?', o: ['She answers the question directly and qualifies her answer.', 'She describes the card.', 'She asks the examiner to repeat the question.'], why: '*I think it can be, but far less often than people like to believe.*' },
            { q: 'How does she use the ideas on the card?', o: ['She develops two of them with reasons and examples.', 'She lists all three without comment.', 'She ignores them and talks about something else.'], why: 'The workplace and the law, each developed.' },
            { q: 'What does she do in her last sentence?', o: ['She returns to the question with a clear, qualified answer.', 'She introduces a new example.', 'She asks her partner for help.'], why: '*to come back to the question: yes, sometimes, but only…*' },
            { q: 'Which phrase best shows C2 range?', o: ['Silence there would amount to complicity.', 'Rules are good and bad.', 'I think it is right sometimes.'], why: 'Precise abstract vocabulary in a natural structure.' },
          ] },
          { t: 'text', md: 'Now give your own long turn, in the format of the C2 Proficiency exam (Speaking Part 3). Speak for **two minutes** to your teacher or your partner in class, without notes after the first minute of preparation.\n\n*Question: Should organisations be held responsible for the mistakes of their employees? You may like to think about accountability, fairness to individuals and the role of rules.*\n\nAim to answer the question directly, develop two points, give the other side and come back to your answer. Use at least four words from this lesson.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'kofi', items: [
            { a: 'He should have declared a conflict of interest.' },
            { a: 'Silence there would amount to complicity.' },
            { a: 'Closing one ward was the lesser of two evils.' },
            { a: 'Rescuing the bank would create a kind of moral hazard.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'In defence of the runaway tram',
      about: 'Read a philosopher’s essay on a classic dilemma in the format of C2 Proficiency Reading Part 5, and follow the writer’s attitude and argument.',
      art: 'dragon',
      spreads: [
        [
          { t: 'text', md: 'Philosophers test moral ideas with **thought experiments**: short, artificial stories that isolate one question. The most famous is the **runaway tram** (in American English, the *trolley*): a tram is about to kill five people, and you can divert it so that it kills one instead. Hundreds of variations exist, and critics have long argued about whether such cases teach us anything.\n\nThis lesson’s essay is by a fictional philosopher who teaches the problem every year. In **Part 5** of C2 Proficiency you read one long text and answer **six multiple-choice questions** with four options each. The questions follow the order of the text and often ask about the writer’s **attitude**, the **purpose** of a paragraph, the meaning of a **phrase in context**, or what a word like *this* refers to.\n\nFor attitude questions, watch the small signals. ***There is something to this*** concedes part of a criticism. ***Whether that is wise is another matter*** introduces doubt. ***I part company with*** marks disagreement. ***Nor should we overlook*** adds a further objection. ***I suspect*** is a tentative personal view.' },
          { t: 'table', caption: 'Signals of a writer’s attitude', explain: ['head', 'col1'], head: ['Phrase', 'What the writer is doing'], rows: [
            ['There is something to this.', 'conceding that a criticism is partly right'],
            ['That has never been its purpose.', 'rejecting a criticism as beside the point'],
            ['Whether that is wise is another matter.', 'raising a doubt'],
            ['Here I part company with…', 'disagreeing with others'],
            ['Nor should we overlook…', 'adding a further limitation'],
            ['I suspect…', 'giving a tentative personal view'],
          ] },
        ],
        [
          { t: 'reading', title: 'In defence of the runaway tram', md: 'Every year, I begin my introductory ethics course with the same scenario, and every year at least one student groans. A runaway tram is heading towards five people who cannot escape. You are standing beside a lever. If you pull it, the tram will switch to a side track, where it will kill one person instead. Do you pull the lever? Most students say yes, quickly and without much discomfort. Then I change the story. This time there is no lever; you are on a footbridge above the track, next to a very large stranger, and the only way to stop the tram is to push him off. The arithmetic is identical, one life for five, yet almost nobody is willing to push.\n\nThe groan, I have come to realise, is not boredom. It is a protest. The problem, its critics argue, is absurdly artificial: real moral life does not come with helpless strangers and perfectly reliable levers, and a theory built on such cases is a theory of nothing. There is something to this. No one who has sat with a dying parent, or agonised over whether to report a friend, has felt that their dilemma resembled a railway timetable. If the purpose of the exercise were to tell us what to do in such situations, it would be a poor exercise indeed.\n\nBut that has never been its purpose. The tram problem is less like a map than like a laboratory. Its artificiality is precisely the point: by stripping away everything except the variable we wish to study, it allows us to see what is doing the work in our judgements. And what it reveals is striking. We do not, it seems, judge actions solely by their consequences. Something about using a person, treating his body as a mere instrument for saving others, strikes us as different in kind from diverting a threat that happens to fall on him.\n\nWhether that intuition is wise is another matter, and here I part company with some of my colleagues, who treat our reactions to such cases as if they were readings from a reliable instrument. Intuitions can be products of habit, squeamishness or upbringing; that most people recoil from pushing the stranger tells us something about people, not necessarily about morality. A laboratory finding still has to be interpreted.\n\nNor should we overlook what the problem leaves out. In the textbook version, we know exactly what will happen. In life, we almost never do. The surgeon, the regulator, the parent: each decides under uncertainty, and with responsibilities that a passer-by beside a lever does not have. Much of what makes real dilemmas hard, the uncertainty, the relationships, the fact that we must live with what we choose, is missing from the tracks.\n\nWhy, then, do I keep the tram? Because it teaches a habit of mind that my students will need long after they have forgotten the details: the habit of asking, when two cases feel different, what exactly the difference is, and whether it ought to matter. That question will not settle any dilemma for them. But it may stop them from mistaking a strong feeling for a good reason, which is, I suspect, the most common moral error of all.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 5): read the essay and choose the answer which fits best according to the text.', items: [
            { q: 'In the first paragraph, the writer’s account of the two versions of the problem emphasises that', o: ['the same outcome provokes very different responses', 'students find the second version easier to answer', 'most students refuse to answer either question', 'the first version is more realistic than the second'], why: '*The arithmetic is identical… yet almost nobody is willing to push.*' },
            { q: 'The writer interprets the students’ groan as', o: ['an objection to the problem itself', 'a sign that they find the course too easy', 'a reaction to the violence of the scenario', 'an indication that they already know the answer'], why: '*The groan… is not boredom. It is a protest*, followed by the critics’ objection.' },
            { q: 'In the second paragraph, the writer’s attitude to the critics is best described as', o: ['partly sympathetic', 'openly dismissive', 'entirely convinced', 'deliberately ironic'], why: '*There is something to this*: a partial concession, before he rejects their main point.' },
            { q: 'The comparison with a laboratory is used to argue that the problem', o: ['is useful precisely because it is simplified', 'should be studied with scientific methods', 'produces results that can be measured exactly', 'proves that only consequences matter'], why: '*Its artificiality is precisely the point.*' },
            { q: 'Where does the writer disagree with some of his colleagues?', o: ['They give intuitions more authority than they deserve.', 'They refuse to use artificial examples.', 'They believe pushing the stranger is acceptable.', 'They ignore the views of students.'], why: '*who treat our reactions… as if they were readings from a reliable instrument*.' },
            { q: 'What is the writer’s main reason for continuing to teach the problem?', o: ['It trains students to examine what lies behind their judgements.', 'It gives students reliable answers to real dilemmas.', 'It is the best-known example in the subject.', 'It shows that strong feelings are usually right.'], why: '*the habit of asking… what exactly the difference is, and whether it ought to matter*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 5**, attitude questions are rarely answered by one word. The writer of this essay concedes, then rejects, then doubts, then concedes again. Before choosing, read the sentences **just before and just after** the place the question points to, and eliminate any option that is **too strong** (*entirely convinced*, *proves*) for a writer who hedges.' },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the phrases from the essay with one word.', items: [
            { q: 'There is ___ to this.', a: ['something'], why: '*There is something to this*: it is partly right.' },
            { q: 'Its artificiality is ___ the point.', a: ['precisely', 'exactly'], why: '*precisely the point*: emphasises that the criticism misses it.' },
            { q: 'Here I part ___ with some of my colleagues.', a: ['company'], why: '*part company with*: disagree with.' },
            { q: 'Using a person strikes us as different in ___ from diverting a threat.', a: ['kind'], why: '*different in kind*: a different type, not just a different degree.' },
            { q: 'It may stop them from mistaking a strong feeling ___ a good reason.', a: ['for'], why: '*mistake A for B*.' },
          ] },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'sofia', items: [
            { a: 'There is something to this, but that has never been its purpose.' },
            { a: 'Its artificiality is precisely the point.' },
            { a: 'Whether that intuition is wise is another matter.' },
            { a: 'It may stop them from mistaking a strong feeling for a good reason.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
      { q: 'It is incumbent ___ the chair to remain impartial.', a: ['on', 'upon'], why: '*incumbent on / upon*.' },
      { q: 'You are under ___ obligation to sign today.', a: ['no'], why: '*under no obligation*.' },
      { q: 'I am not at ___ to discuss the details.', a: ['liberty'], why: '*at liberty to*.' },
      { q: 'It is not ___ us to decide who deserves help.', a: ['for'], why: '*It is not for* someone *to do*.' },
    ] },
    { t: 'ex', kind: 'select', h: 'Choose the correct form.', items: [
      { q: '___ the government to raise taxes, there would be protests.', o: ['Were', 'Had', 'Should'], why: '*Were + subject + to*.' },
      { q: '___ it not been for the warning, many would have died.', o: ['Had', 'Were', 'But'], why: '*Had it not been for*.' },
      { q: 'Suppose you ___ the truth. Would you tell her?', o: ['knew', 'know', 'will know'], why: 'An imagined case: past form.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Complete the second sentence so that it has a similar meaning to the first, using the word given. Use between three and eight words, including the word given.', items: [
      { q: 'Praising honesty is much easier than practising it.', cue: 'another', gap: 'It is one thing to praise honesty ___ it.', a: ['and quite another to practise', 'but quite another to practise', 'and another to practise', 'and quite another to practice', 'but quite another to practice'], why: '*one thing… and quite another*.' },
      { q: 'If you have any doubts, please speak to your manager.', cue: 'should', gap: '___ any doubts, please speak to your manager.', a: ['Should you have'], why: '*Should* + subject + base verb.' },
      { q: 'Without the auditor, the error would never have been found.', cue: 'been', gap: 'Had ___, the error would never have been found.', a: ['it not been for the auditor', 'the auditor not been there', 'there not been an auditor'], why: '*Had it not been for* + noun.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the term and its meaning.', pairs: [
      ['a conflict of interest', 'a private interest that could affect an official decision'],
      ['moral hazard', 'carelessness caused by protection from consequences'],
      ['a double standard', 'judging similar cases differently'],
      ['transparency', 'openness about how decisions are made'],
    ] },
    { t: 'ex', kind: 'choice', h: 'Choose the word that best fits each gap.', items: [
      { q: 'The engineer decided to blow the ___ on the unsafe design.', o: ['whistle', 'horn', 'alarm', 'trumpet'], why: '*blow the whistle on*.' },
      { q: 'We cannot ___ cheating, whatever the pressure.', o: ['condone', 'condemn', 'contend', 'confide'], why: '*condone*: accept wrong behaviour.' },
      { q: 'Choosing to close one ward was the ___ of two evils.', o: ['lesser', 'less', 'least', 'smaller'], why: 'The fixed phrase *the lesser of two evils*.' },
      { q: 'In the essay, “There is something to this” shows that the writer', o: ['partly accepts a criticism', 'rejects a criticism completely', 'is confused by a criticism', 'has changed his whole view'], why: 'A partial concession.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'Had it not [for] her courage, the fraud would have continued.', a: ['been for'], why: 'The past form needs *been*: *Had it not been for*.' },
      { s: 'Customers are entitled [for] a full refund.', a: ['to'], why: '*entitled to*.' },
    ] },
  ],
};
