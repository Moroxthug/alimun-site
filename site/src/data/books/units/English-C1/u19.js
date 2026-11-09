// English C1, unit 19, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Each lesson: a full explanation first (the rule in plain words, why, many examples, the usual mistakes, a text that
// uses it), then fewer exercises from controlled to free, one speaking task, and one task in the format of C1 Advanced.
// Exam parts: Reading and Use of English Part 4 (lessons 1 and 3), Listening Part 1 (lesson 2), Speaking Parts 3 and 4 (lesson 4).
export const UNIT = {
  id: 'u19',
  title: 'People and conflict',
  goal: 'Disagree without causing offence, report what people meant as well as what they said, talk about relationships and quarrels with natural idioms, and handle the discussion parts of the C1 Advanced Speaking test.',
  art: 'parrot',
  tags: { skills: ['grammar', 'vocabulary', 'speaking', 'listening'], topics: ['diplomacy', 'softening', 'indirect-questions', 'reporting-verbs', 'implication', 'idioms', 'relationships', 'conflict', 'discussion'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'I was wondering if…',
      about: 'Soften requests, suggestions and disagreement with the distancing past, indirect questions and careful modals.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'At B2 you learnt to be polite with *Could you…?* and *Would you mind…?* At C1 the question is no longer whether you are polite, but **how direct you choose to sound**. In a tense meeting, an email to someone senior or a disagreement with a friend, the same idea can land as a helpful suggestion or as an attack, and the difference is often a few small words.\n\nEnglish softens in layers. Each layer adds a little distance between you and what you are asking, so the other person can say no, or disagree, without losing face.\n\nThe **distancing past** uses a past form with a present meaning: *I **wanted** to ask you something.* *I **thought** we **might** look at the budget again.* Nothing happened in the past; the past simply makes the request sound less insistent.\n\nThe **continuous** adds a further step back: *I **was wondering** if you could help.* *We **were hoping** to finish by Friday.* It presents the idea as something still in your mind, not a demand.' },
          { t: 'table', caption: 'From direct to diplomatic', explain: ['head', 'col2'], head: ['Direct', 'Diplomatic', 'What changed'], rows: [
            ['Send me the report.', 'I was wondering if you could send me the report.', 'distancing past, continuous, could'],
            ['You’re wrong.', 'I’m not sure that’s entirely right.', 'a negative frame and a limiting adverb'],
            ['Check the figures.', 'It might be worth checking the figures.', 'an impersonal structure with might'],
            ['We should delay it.', 'Wouldn’t it be better to delay it?', 'a negative question as a suggestion'],
            ['It’s a bad idea.', 'It’s not the best idea we’ve had.', 'understatement'],
            ['Where is the file?', 'Could you tell me where the file is?', 'an indirect question'],
          ] },
        ],
        [
          { t: 'text', md: '**Indirect questions** are the other main tool. Start with a frame such as *Could you tell me…, Do you know…, I’d like to know…* or *Would you mind explaining…*, then use **statement word order** and no *do, does* or *did*. For a yes or no question, use **if** or **whether**.\n\n*Where **is** the meeting?* → *Do you know where the meeting **is**?*\n*Did they **agree**?* → *I was wondering **whether** they **agreed**.*\n\nWords that limit or blur also soften: *slightly, a bit, rather* (with negative ideas), *not entirely, not altogether, to some extent, perhaps, possibly*. And **understatement** says less than you mean, which listeners hear as tact: *That wasn’t ideal* for *That was a disaster*.\n\nWhy does this work? Directness in English is heard as pressure. Each softener gives the listener room: room to refuse, room to keep their dignity, room to change their mind without seeming to give in.' },
          { t: 'examples', items: [
            { s: 'I **was wondering whether** we **could** move the deadline.', n: 'Distancing past, continuous and *could*: three layers.' },
            { s: '**I thought** you **might** like to see the draft first.', n: 'An offer that does not push.' },
            { s: '**It might be worth** asking the client before we decide.', n: '*It might be worth* + *-ing*: a suggestion with no person in it.' },
            { s: '**Wouldn’t it make more sense** to wait?', n: 'A negative question invites agreement.' },
            { s: 'I **can see where you’re coming from**, but I’m **not altogether convinced**.', n: 'Acknowledge first, then disagree gently.' },
            { s: '**Would you mind telling me** why the order was cancelled?', n: 'An indirect question: statement order after *why*.' },
            { s: 'The presentation was **a little on the long side**.', n: 'Understatement: it was much too long.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['Could you tell me where is the station?', 'Could you tell me where the station is?', 'Indirect questions use statement order.'],
            ['Do you know when does it start?', 'Do you know when it starts?', 'No *does* in an indirect question.'],
            ['I was wondering if you can help.', 'I was wondering if you could help.', 'Keep the distance: *could* after the distancing past.'],
            ['It might be worth to check.', 'It might be worth checking.', '*Worth* is followed by *-ing*.'],
            ['You are rather right.', 'You may well be right.', '*Rather* softens negative ideas; with positive ones it sounds surprised.'],
            ['I disagree completely, with respect.', 'With respect, I see it slightly differently.', 'A softener cannot rescue a blunt sentence; change the sentence itself.'],
          ] },
          { t: 'dialogue', title: 'A difficult meeting', lines: [
            { who: 'Helen', s: 'Daniel, I was wondering if we could talk about the launch date for a moment.' },
            { who: 'Daniel', s: 'Of course. I thought we’d all agreed on the fifteenth.' },
            { who: 'Helen', s: 'We had, more or less. I’m just not entirely sure the design team can be ready by then.' },
            { who: 'Daniel', s: 'I see. Wouldn’t it be better to ask them before we change anything?' },
            { who: 'Helen', s: 'That’s fair. It might also be worth checking whether the printers could manage a later date.' },
            { who: 'Daniel', s: 'Good idea. I was hoping to avoid a delay, but I’d rather move it than launch something half-finished.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the more diplomatic option for a work email.', items: [
            { q: '___ you could send me the minutes of yesterday’s meeting.', o: ['I was wondering if', 'I want that', 'Tell me if'], why: 'Distancing past and continuous: the softest frame.' },
            { q: 'It might be worth ___ the supplier before we sign.', o: ['contacting', 'to contact', 'contact'], why: '*Worth* + *-ing*.' },
            { q: 'I’m not ___ convinced that this is the right moment.', o: ['entirely', 'totally not', 'never'], why: '*Not entirely* limits the disagreement.' },
            { q: 'Could you tell me when ___?', o: ['the delivery is due', 'is the delivery due', 'does the delivery come'], why: 'Indirect question: statement order.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'Do you happen to know where [is the nearest branch]?', a: ['the nearest branch is'], why: 'Statement order in an indirect question.' },
            { s: 'I was hoping you [can] look at my proposal.', a: ['could', 'would', 'might'], why: 'Keep the past form after *I was hoping*.' },
            { s: 'I wonder [do they] still need us on Monday.', a: ['if they', 'whether they'], why: 'A yes or no indirect question needs *if* or *whether*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first. Use the word given and three to six words, including the word given.', items: [
            { q: 'Please send me the final figures by Friday.', cue: 'WONDERING', a: ['I was wondering if you could send me the final figures by Friday.', 'I was wondering whether you could send me the final figures by Friday.', 'I was wondering if you would send me the final figures by Friday.'], why: '*Was wondering if you could* + verb: the distancing past and continuous.' },
            { q: 'You should probably check the contract again.', cue: 'WORTH', a: ['It might be worth checking the contract again.', 'It may be worth checking the contract again.', 'It would be worth checking the contract again.', 'It could be worth checking the contract again.'], why: '*It might be worth* + *-ing*.' },
            { q: 'Why don’t we postpone the launch?', cue: 'BETTER', a: ['Wouldn’t it be better to postpone the launch?', 'Would it not be better to postpone the launch?', 'Wouldn’t it be better if we postponed the launch?'], why: 'A negative question as a suggestion: *it be better to* + verb.' },
            { q: 'What time does the meeting start?', cue: 'TELL', a: ['Could you tell me what time the meeting starts?', 'Could you tell me when the meeting starts?'], why: 'An indirect question: no *does*, and *starts* in statement order.' },
            { q: 'In my view, your plan has some serious problems.', cue: 'CONVINCED', a: ['I am not entirely convinced that your plan will work.', 'I am not convinced that your plan will work.', 'I am not altogether convinced that your plan will work.', 'I am not completely convinced that your plan will work.', 'I am not totally convinced that your plan will work.', 'I am not entirely convinced your plan will work.', 'I am not convinced your plan will work.'], why: 'Disagreement framed as doubt: *not (entirely) convinced that*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Part 4 gives up to **two marks** per item, usually one for each change. Here the key word often forces the frame (*wondering, worth, tell*) and the second mark is for what follows it: the right verb form or the right word order. Count your words: *wouldn’t* counts as two.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'sofia', items: [
            { a: 'I was wondering if we could talk about the deadline.' },
            { a: 'It might be worth checking with the client first.' },
            { a: 'I can see where you’re coming from, but I’m not entirely convinced.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'Reading between the lines',
      about: 'Report what people meant as well as what they said: imply, hint, make out, let slip, give the impression.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'At B2 you reported **what** people said with verbs like *explain, promise* and *admit*. At C1 you also need to report **how** they said it and **what they really meant**. People rarely say everything directly, so a good listener, and a good C1 candidate, reports the message underneath.\n\n**Imply that** means to suggest something without saying it: *He **implied that** I hadn’t done my share.* The listener **infers** it: *I **inferred** from his tone that he was annoyed.* The speaker implies; the listener infers.\n\n**Hint that** or **hint at** something is to suggest it lightly, often on purpose: *She **hinted that** a promotion might be coming. She **hinted at** changes.* **Drop a hint** is the informal phrase.\n\n**Make out that** (informal) means to claim something, usually something untrue or exaggerated: *He **made out that** he’d never been told.* With a person: *She **made herself out to be** the victim.*\n\n**Let slip that** means to reveal something by accident: *He **let slip that** they were moving abroad.* With a noun: *She **let slip** the name of the buyer.*' },
          { t: 'table', caption: 'Verbs for what was meant', explain: ['head', 'col1'], head: ['Verb and pattern', 'Meaning', 'Example'], rows: [
            ['imply that', 'suggest without saying', 'Are you implying that I lied?'],
            ['hint that, hint at + noun', 'suggest lightly, on purpose', 'He hinted at a change of plan.'],
            ['make out that, make someone out to be', 'claim, often falsely', 'She made out that it was my fault.'],
            ['let slip that, let slip + noun', 'reveal by accident', 'He let slip that he was leaving.'],
            ['insinuate that', 'suggest something unpleasant, indirectly', 'They insinuated that she had cheated.'],
            ['give the impression that', 'make people believe', 'He gave the impression that he was in charge.'],
            ['come across as + adjective', 'seem to others', 'She came across as rather defensive.'],
          ] },
        ],
        [
          { t: 'text', md: 'These verbs carry a **judgement**. *She said she was busy* is neutral; *She made out that she was busy* tells the listener you do not believe her. *He insinuated that…* tells them the suggestion was unkind. Choosing the verb is choosing your attitude, which is why C1 listening and reading questions so often ask what a speaker **implies** or **feels**.\n\nThe tense rules are those of reported speech, with one C1 refinement: if what was said is **still true**, you may keep the original tense. *She hinted that she **is** thinking of leaving* (she still is). *She hinted that she **was** thinking of leaving* is always correct.\n\nWatch two patterns. **Suggest** is never followed by an object and an infinitive: say *She suggested **that we leave***, not *She suggested us to leave*. And **imply** never takes a person as its object: *He implied that I was late*, not *He implied me that…*' },
          { t: 'examples', items: [
            { s: 'Without saying so, he **implied that** the decision had already been made.', n: 'Something suggested but not said.' },
            { s: 'I **inferred from** her silence that she disagreed.', n: 'The listener works it out: *infer from*.' },
            { s: 'She kept **hinting at** problems with the new manager.', n: '*Hint at* + noun.' },
            { s: 'He **made out that** he’d been working all weekend.', n: 'The reporter does not believe him.' },
            { s: 'My brother **let slip that** they were planning a surprise party.', n: 'An accidental reveal.' },
            { s: 'Her email **gave the impression that** she was annoyed with us.', n: 'An effect on the reader, perhaps not intended.' },
            { s: 'In the interview he **came across as** confident but a little arrogant.', n: 'How someone seems to others.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['Are you inferring that I’m lazy?', 'Are you implying that I’m lazy?', 'The speaker implies; the listener infers.'],
            ['He implied me that I was late.', 'He implied that I was late.', '*Imply* takes no personal object.'],
            ['She suggested us to leave early.', 'She suggested that we leave early.', '*Suggest* + *that* clause or *-ing*, never object + infinitive.'],
            ['He let slipped the news.', 'He let slip the news.', '*Let* + base form: *let slip*, in every tense.'],
            ['She hinted a change.', 'She hinted at a change.', 'With a noun, use *hint at*.'],
            ['He made out he is innocent, so he was.', 'He made out that he was innocent, but nobody believed him.', '*Make out* signals doubt, not a fact.'],
          ] },
          { t: 'dialogue', title: 'After the team meeting', lines: [
            { who: 'Grace', s: 'Did you notice what Paul said about the deadline?' },
            { who: 'Owen', s: 'He implied that we’d been slow, didn’t he? Without actually saying it.' },
            { who: 'Grace', s: 'Exactly. And then he made out that he’d warned us weeks ago, which he certainly hadn’t.' },
            { who: 'Owen', s: 'To be fair, he did hint at changes in the spring.' },
            { who: 'Grace', s: 'Hinting isn’t the same as telling. Oh, and he let slip that the director is leaving.' },
            { who: 'Owen', s: 'Really? That might explain why he came across as so tense.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each sentence to what it tells you about the speaker.', pairs: [
            ['She let slip that she was pregnant.', 'She did not mean to tell anyone yet.'],
            ['She made out that she was pregnant.', 'The reporter thinks it is not true.'],
            ['She hinted that she was pregnant.', 'She suggested it on purpose, without saying it.'],
            ['I inferred that she was pregnant.', 'The listener worked it out.'],
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the word that fits.', items: [
            { q: 'Are you ___ that I took the money?', o: ['implying', 'inferring', 'hinting'], why: 'The speaker suggests it: *imply that*.' },
            { q: 'He ___ himself out to be an expert, but he knew very little.', o: ['made', 'let', 'gave'], why: '*Make someone out to be*.' },
            { q: 'During dinner she let ___ that they had sold the house.', o: ['slip', 'slipped', 'to slip'], why: '*Let* + base form.' },
            { q: 'The manager hinted ___ possible job cuts.', o: ['at', 'that', 'to'], why: '*Hint at* + noun.' },
          ] },
        ],
        [
          { t: 'text', md: 'In the format of the C1 Advanced exam (Listening Part 1): you will hear three short extracts with different speakers. There are **two questions** on each extract. In the exam you hear each extract twice, and the questions often ask what a speaker **implies, feels or suggests**, not what they say word for word.' },
          { t: 'dialogue', title: 'Extract one: two colleagues talk about a manager', lines: [
            { who: 'Sophie', s: 'Did you see Martin’s email about the new rota? He said it was entirely up to us.' },
            { who: 'James', s: 'Up to us, as long as we choose the option he’s already put in bold.' },
            { who: 'Sophie', s: 'Ha, yes. I suppose he wants it to look like a team decision.' },
            { who: 'James', s: 'Which would be fine, if he’d asked us first. I just wish he’d be straight with us.' },
          ] },
          { t: 'dialogue', title: 'Extract two: a man describes a quarrel with his sister', lines: [
            { who: 'Callum', s: 'We hadn’t spoken for months. It started over something tiny, the date of a birthday lunch.' },
            { who: 'Callum', s: 'Looking back, the lunch wasn’t the issue. She felt I always expected her to fit around my plans, and she wasn’t wrong.' },
            { who: 'Callum', s: 'When I finally rang her, I didn’t defend myself. I just said I could see why she was hurt. That changed everything.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'Extract three: two friends discuss a neighbour', lines: [
            { who: 'Nadia', s: 'Mrs Clarke stopped me again this morning. She said she’s sure we don’t mean to be noisy.' },
            { who: 'Oliver', s: 'That’s her way of telling us we are noisy.' },
            { who: 'Nadia', s: 'I know. And she let slip that the people downstairs have complained too.' },
            { who: 'Oliver', s: 'Then perhaps we should invite them all round and clear the air before it turns into something bigger.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Listening Part 1): choose the answer which fits best according to what you hear.', items: [
            { q: 'Extract one. What does James imply about Martin?', o: ['He has already made the decision himself.', 'He has not finished writing the rota.', 'He wants the team to vote by email.', 'He is unsure which option is best.'], why: '*As long as we choose the option he’s already put in bold* implies the choice is made.' },
            { q: 'Extract one. How does James feel about the situation?', o: ['frustrated by Martin’s lack of honesty', 'pleased to have some freedom', 'worried about his own workload', 'confused by the new rota'], why: '*I just wish he’d be straight with us.*' },
            { q: 'Extract two. Callum now thinks the quarrel was really about', o: ['his sister feeling that her plans mattered less', 'the date of a family celebration', 'money they had lent each other', 'a misunderstanding on the phone'], why: '*She felt I always expected her to fit around my plans.*' },
            { q: 'Extract two. What made the difference when Callum called?', o: ['He acknowledged her feelings instead of arguing.', 'He apologised for the date of the lunch.', 'He offered to organise the next lunch.', 'He explained why he had been busy.'], why: '*I didn’t defend myself. I just said I could see why she was hurt.*' },
            { q: 'Extract three. What does Mrs Clarke really mean?', o: ['The young people are too noisy.', 'She is happy with her neighbours.', 'She would like to be invited round.', 'She has not heard any noise.'], why: 'Oliver explains her polite remark: *That’s her way of telling us we are noisy.*' },
            { q: 'Extract three. What does Oliver suggest?', o: ['talking openly with the neighbours', 'ignoring the complaint', 'complaining about the people downstairs', 'moving to another flat'], why: '*Invite them all round and clear the air.*' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Listening Part 1 the wrong options are often things the speakers **mention**: a birthday lunch, a rota, a phone call. The right option is usually a **paraphrase** of the idea behind the words. Ask yourself: what is this person really saying?' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'omar', items: [
            { a: 'Are you implying that I didn’t do my share?' },
            { a: 'He made out that he had warned us weeks ago.' },
            { a: 'She let slip that the director was leaving.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'Burying the hatchet',
      about: 'Talk about relationships, quarrels and making up with natural idioms, and know how far each one can change.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'English has a rich set of idioms for how people get on, fall out and make up. At C1 you should understand them easily and use a few naturally in speech and informal writing. Their meaning is not the sum of their words: *to bury the hatchet* has nothing to do with tools.\n\nThink of a relationship as a story. People **hit it off** (like each other at once) or **get off on the wrong foot** (start badly). They **see eye to eye** (agree) or find themselves **at loggerheads** (in strong, lasting disagreement). Something becomes **a bone of contention** (the subject of the argument) or **a sore point** (a topic that still hurts). Then someone **extends an olive branch** (makes a first move towards peace), they **clear the air** (talk openly to end the tension), **meet each other halfway** (compromise) and finally **bury the hatchet** (end the quarrel for good). Or they simply **agree to disagree**.' },
          { t: 'table', caption: 'Idioms of conflict and making up', explain: ['head', 'col1'], head: ['Idiom', 'Meaning', 'Example'], rows: [
            ['hit it off (with someone)', 'like each other immediately', 'We hit it off on the first day.'],
            ['get off on the wrong foot', 'start a relationship badly', 'We got off on the wrong foot, but we’re friends now.'],
            ['see eye to eye (on something)', 'agree', 'They rarely see eye to eye on money.'],
            ['be at loggerheads (with someone)', 'disagree strongly, for a long time', 'The two departments are at loggerheads.'],
            ['a bone of contention', 'the subject of an argument', 'The garden wall is a bone of contention.'],
            ['rub someone up the wrong way', 'annoy someone, often without meaning to', 'His jokes rub people up the wrong way.'],
            ['clear the air', 'talk openly to end tension', 'We need a meeting to clear the air.'],
            ['bury the hatchet', 'end a quarrel and become friendly', 'After years of silence, they buried the hatchet.'],
          ] },
        ],
        [
          { t: 'text', md: 'Idioms are **fixed**, but not frozen. The verb changes for tense and person: *they **buried** the hatchet, she **has hit** it off with everyone*. Possessives and objects change: *rub **my boss** up the wrong way*. Some take an adverb: *They **never really** saw eye to eye.* What you cannot change are the core words: it is always *eye to eye*, never *eye in eye*; always *hatchet*, never *axe*.\n\nRegister matters too. Most of these idioms are **informal or neutral**: excellent in conversation, a story or an informal email, but too colourful for a formal report. In formal writing, use the plain meaning: *the two sides reached a compromise*, not *met each other halfway*.\n\nThere are also many verbs: **fall out (with someone)** (quarrel and stop being friends), **make up** (become friends again), **patch things up** (repair a relationship, perhaps not completely), **hold a grudge (against someone)** (keep feeling angry about something old), **have words with someone** (speak angrily to them), **walk on eggshells** (be very careful not to upset someone).' },
          { t: 'examples', items: [
            { s: 'My cousin and I **fell out** over the inheritance and didn’t speak for years.', n: '*Fall out (with someone) over something*.' },
            { s: 'They **patched things up**, but it’s not the friendship it was.', n: 'Repaired, though not completely.' },
            { s: 'She still **holds a grudge against** him for missing her wedding.', n: '*Hold a grudge against someone*.' },
            { s: 'Since the argument, everyone in the office has been **walking on eggshells**.', n: 'Being very careful not to upset anyone.' },
            { s: 'He finally **extended an olive branch** by inviting her to lunch.', n: 'A first move towards peace.' },
            { s: 'We’ll never agree on politics, so we’ve **agreed to disagree**.', n: 'Accepting a difference and moving on.' },
            { s: 'Raising his salary at dinner just **added fuel to the fire**.', n: 'Made a bad situation worse.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['We don’t see eye in eye.', 'We don’t see eye to eye.', 'The core words of an idiom never change.'],
            ['They buried the axe.', 'They buried the hatchet.', 'Only *hatchet* is used.'],
            ['We need to clean the air.', 'We need to clear the air.', '*Clear* the air, as after a storm.'],
            ['It’s a bone of contest.', 'It’s a bone of contention.', 'The fixed noun is *contention*.'],
            ['I fell out my brother.', 'I fell out with my brother.', '*Fall out with* someone.'],
            ['The parties met each other halfway on the treaty.', 'The parties reached a compromise on the treaty.', 'In formal writing, use plain language instead of idioms.'],
          ] },
          { t: 'reading', title: 'The wall', md: 'For twelve years, the low stone wall between number 14 and number 16 was the biggest bone of contention on our street. Mr Hughes said it was his; Mrs Patel said it was hers. They got off on the wrong foot the week she moved in, when his ladder fell into her roses, and they never really saw eye to eye after that.\n\nBy the time I was a teenager, the whole street walked on eggshells around them. Mention the wall at a party and you would be adding fuel to the fire.\n\nThen one winter the wall collapsed in a storm. The next morning Mr Hughes knocked on Mrs Patel’s door with two cups of tea. Nobody knows exactly what was said, but they spent the afternoon rebuilding it together. They didn’t become best friends, but they had clearly buried the hatchet. When people asked whose wall it was, they would smile and say they had agreed to disagree.' },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Read the text. Are the sentences true, false or not given?', ng: true, items: [
            { q: 'The neighbours disagreed about who owned the wall.', a: 't', why: '*Mr Hughes said it was his; Mrs Patel said it was hers.*' },
            { q: 'They liked each other when they first met.', a: 'f', why: '*They got off on the wrong foot the week she moved in.*' },
            { q: 'Mr Hughes apologised for the roses.', a: 'ng', why: 'The text does not say whether he apologised.' },
            { q: 'After the storm, they settled who owned the wall.', a: 'f', why: '*They had agreed to disagree.*' },
          ] },
          { t: 'ex', kind: 'bank', h: 'Complete the sentences with the words from the bank.', extra: ['axe', 'contest'], items: [
            { q: 'After the argument, we went for a walk to clear the ___.', a: 'air', why: '*Clear the air*: talk openly to end tension.' },
            { q: 'I liked her straight away; we really hit it ___.', a: 'off', why: '*Hit it off*.' },
            { q: 'He still holds a ___ against his old business partner.', a: 'grudge', why: '*Hold a grudge against someone*.' },
            { q: 'Her habit of interrupting rubs people up the wrong ___.', a: 'way', why: '*Rub someone up the wrong way*.' },
            { q: 'The two leaders have been at ___ for months.', a: 'loggerheads', why: '*Be at loggerheads*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first. Use the word given and three to six words, including the word given.', items: [
            { q: 'Tom and his father have never agreed about politics.', cue: 'EYE', a: ['Tom and his father have never seen eye to eye about politics.', 'Tom and his father have never seen eye to eye on politics.', 'Tom and his father have never seen eye to eye over politics.'], why: '*See eye to eye*, in the present perfect: *have never seen*.' },
            { q: 'The two managers disagree strongly and constantly.', cue: 'LOGGERHEADS', a: ['The two managers are constantly at loggerheads.', 'The two managers are always at loggerheads.', 'The two managers are constantly at loggerheads with each other.', 'The two managers are always at loggerheads with each other.', 'The two managers are permanently at loggerheads with each other.'], why: '*Be at loggerheads with someone*, with an adverb for *constantly*.' },
            { q: 'The parking space has caused arguments between the neighbours for years.', cue: 'CONTENTION', a: ['The parking space has been a bone of contention between the neighbours for years.', 'For years, the parking space has been a bone of contention between the neighbours.'], why: '*A bone of contention between* two people.' },
            { q: 'Sara liked her new flatmate from the moment they met.', cue: 'HIT', a: ['Sara hit it off with her new flatmate from the moment they met.', 'Sara and her new flatmate hit it off from the moment they met.'], why: '*Hit it off with someone*: the past of *hit* is *hit*.' },
            { q: 'After years of silence, they decided to forget their old quarrel.', cue: 'BURY', a: ['After years of silence, they decided to bury the hatchet.', 'After years of silence, they agreed to bury the hatchet.', 'After years of silence, they buried the hatchet.'], why: '*Decide to* + *bury the hatchet*: the key word stays as given.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Part 4 often tests **idioms and fixed phrases**. When the key word is a noun such as *loggerheads* or *contention*, the idiom is the first mark. The second mark is usually the grammar around it: the tense, the preposition (*at loggerheads **with***, *a bone of contention **between***) or an adverb that keeps the meaning.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'lena', items: [
            { a: 'We got off on the wrong foot, but now we get on really well.' },
            { a: 'The garden wall was a bone of contention for years.' },
            { a: 'In the end they decided to bury the hatchet.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'Talking it through',
      about: 'Learn how C1 Advanced Speaking Parts 3 and 4 work, and the language to discuss, disagree and decide with a partner.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'The C1 Advanced Speaking test takes about **15 minutes** and you usually take it with another candidate. There are two examiners: one asks the questions, the other only listens and marks. This lesson is about the second half, where you **discuss**.\n\nIn **Part 3, the collaborative task**, the examiner gives you and your partner a question with **five written prompts** around it, for example *Why do people sometimes find it hard to resolve conflicts at work?* with prompts such as *workload, communication styles, competition for promotion, working remotely* and *management decisions*. You have about 15 seconds to look at it, then you **talk together for about two minutes**. You do not need to discuss every prompt. The examiner then asks a second question, for example *Which of these do you think causes the most lasting damage?*, and you have **about a minute to reach a decision** together. You may agree, or you may agree to disagree.\n\nIn **Part 4, the discussion**, the examiner asks further questions on the same topic, to each of you and to both of you, for about **five minutes**. The questions are broader and more abstract: *Some people say avoiding an argument is always wise. What do you think?*' },
          { t: 'table', caption: 'Speaking Parts 3 and 4 at a glance', explain: ['head', 'col0', 'col1', 'col2'], head: ['Part', 'What happens', 'How long'], rows: [
            ['Part 3, first stage', 'discuss a question with five prompts, together', 'about 2 minutes'],
            ['Part 3, second stage', 'answer a new question and try to reach a decision', 'about 1 minute'],
            ['Part 4', 'answer wider questions on the topic, alone and together', 'about 5 minutes'],
          ] },
        ],
        [
          { t: 'text', md: 'What do the examiners listen for? In general terms, five things: the **range and accuracy** of your grammar and vocabulary, how well you **organise** what you say into longer, linked contributions, your **pronunciation**, and, in Parts 3 and 4 above all, your **interaction**: starting the discussion, inviting your partner in, responding to what they actually said, developing their ideas and steering towards a decision.\n\nThis means a brilliant monologue is not a good Part 3. A good Part 3 sounds like two intelligent people thinking aloud together. Use the diplomacy of lesson 1 here: *I can see what you mean, but…*, *Wouldn’t you say that…?*, *I’m not entirely sure I’d go that far.*\n\nIn Part 4, the opposite risk is the short answer. A C1 answer usually has three or four moves: your **view**, a **reason**, an **example** or an **exception**, and sometimes a nod to the **other side**. You may also comment on your partner’s answer: *I’d agree with Marcus there, although…*' },
          { t: 'table', caption: 'Language for the discussion', explain: ['head', 'col0'], head: ['To…', 'You can say'], rows: [
            ['start', 'Shall we begin with workload? It’s probably the most obvious cause.'],
            ['invite your partner', 'How do you feel about that? Would you agree?'],
            ['agree and add', 'Absolutely, and on top of that…'],
            ['partly agree', 'That’s true up to a point, but…'],
            ['disagree tactfully', 'I see it slightly differently, actually.'],
            ['move on', 'Shall we look at remote working? We haven’t touched on that yet.'],
            ['buy time', 'That’s an interesting question. Let me think…'],
            ['decide', 'So, are we agreed that…? Or shall we agree to disagree?'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'Part 3: a model discussion', lines: [
            { who: 'Ellie', s: 'Shall we start with workload? When people are exhausted, small disagreements turn into real conflicts.' },
            { who: 'Marcus', s: 'Absolutely, and on top of that nobody has time to sort them out properly. What about communication styles, though?' },
            { who: 'Ellie', s: 'That’s a good one. Some people are very direct, and others hear that as rudeness. Would you agree?' },
            { who: 'Marcus', s: 'Up to a point. I think it’s less about style and more about assumptions. People assume the worst.' },
            { who: 'Ellie', s: 'That’s true. Shall we look at remote working? We haven’t touched on that yet.' },
            { who: 'Marcus', s: 'Well, online it’s harder to read between the lines, so misunderstandings last longer.' },
            { who: 'Ellie', s: 'So for the second question, are we agreed that poor communication does the most lasting damage?' },
            { who: 'Marcus', s: 'I’d say so, although competition for promotion comes a close second.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'What is each speaker doing? Sort the phrases.', groups: ['inviting the partner', 'partly agreeing', 'moving on', 'reaching a decision'], explain: ['groups'], items: [
            { s: 'Where do you stand on this?', g: 0, why: 'A question that brings the partner in.' },
            { s: 'I take your point, but…', g: 1, why: 'Accepts part of the idea, then adds a different view.' },
            { s: 'Shall we have a look at this one?', g: 2, why: 'Moves to another prompt.' },
            { s: 'So, if we had to pick one…', g: 3, why: 'Steers towards a decision.' },
            { s: 'Would you go along with that?', g: 0, why: 'Invites the partner to agree or disagree.' },
            { s: 'That’s true to some extent.', g: 1, why: 'Partial agreement.' },
            { s: 'We haven’t mentioned workload yet.', g: 2, why: 'Moves the discussion on.' },
            { s: 'Shall we go for that one, then?', g: 3, why: 'Proposes the final choice.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes in Parts 3 and 4', explain: ['head', 'col0', 'col1', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['Talking about every prompt quickly, one after another', 'Discussing two or three prompts in depth', 'Depth and interaction score better than coverage.'],
            ['Ignoring what your partner said', 'Picking up their idea: As you said…', 'Interaction means responding to the other person.'],
            ['Agreeing with everything', 'Agreeing partly and adding a new angle', 'Polite disagreement keeps the discussion alive.'],
            ['Deciding in the first stage', 'Deciding only when the examiner asks the second question', 'The first stage is for discussion.'],
            ['Yes, I think so. (in Part 4)', 'A view, a reason, an example and the other side', 'Part 4 rewards developed answers.'],
            ['Silence when you have no opinion', 'That’s not something I’ve thought much about, but…', 'Buy time and then think aloud.'],
          ] },
          { t: 'dialogue', title: 'Part 4: a model answer', lines: [
            { who: 'Examiner', s: 'Some people say that avoiding an argument is always the wisest choice. What do you think?' },
            { who: 'Ellie', s: 'I’d say that’s true in the short term, but not always in the long run. If you avoid every argument, resentment builds up and eventually explodes. My grandparents, for instance, never argued, but they also never really talked. So I think it depends on whether the issue matters.' },
            { who: 'Examiner', s: 'Marcus, do you agree?' },
            { who: 'Marcus', s: 'Mostly, yes. I’d add that the way you argue matters more than whether you argue. A calm disagreement can actually bring people closer.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Speaking Part 3): choose the best response.', items: [
            { q: 'Your partner says: “I think competition for promotion is the biggest problem.” You say:', o: ['That’s true up to a point, but don’t you think it only matters in some companies?', 'Next one. Remote working.', 'Yes.'], why: 'Respond to the idea, partly agree, and invite your partner to develop it.' },
            { q: 'You have discussed two prompts in depth and a minute has passed. You say:', o: ['Shall we look at management decisions? We haven’t touched on that yet.', 'I have finished talking now.', 'Can you tell us the right answer?'], why: 'Moving on politely is part of managing the discussion.' },
            { q: 'The examiner asks the decision question. You and your partner disagree. You say:', o: ['It seems we see this differently, so shall we agree to disagree?', 'You are wrong, so we will choose mine.', 'Let’s just say both.'], why: 'You do not have to agree; you do need to reach a conclusion together.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Speaking Part 4): which answer is the strongest?', items: [
            { q: 'Examiner: “Do you think people are less tolerant of disagreement than they used to be?”', o: ['To some extent, yes. Online, people tend to block views they dislike, so they lose practice in disagreeing. That said, I think face to face most people are still willing to listen.', 'Yes, I think so. People are less tolerant now.', 'I don’t know. Maybe. It depends.'], why: 'A view, a reason, an example and the other side: a developed C1 answer.' },
            { q: 'Examiner: “Should schools teach children how to resolve conflicts?”', o: ['I’d say so, because most children learn it by accident, if at all. A short course on listening and compromise could prevent a great deal of bullying, although it couldn’t replace what children learn at home.', 'Yes. They should.', 'Schools teach many subjects such as maths, history and science.'], why: 'An opinion with a reason, a consequence and a limit, all on the question asked.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Part 3, **listen** as much as you speak. The examiner is marking how you build on each other’s ideas, so the phrase *As you were saying…* is worth more than a perfect sentence that ignores your partner. In Part 4, keep going for three or four sentences, then stop and let the conversation move on.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'kofi', items: [
            { a: 'That’s true up to a point, but I see it slightly differently.' },
            { a: 'Shall we look at remote working? We haven’t touched on that yet.' },
            { a: 'It seems we see this differently, so shall we agree to disagree?' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'transform', h: 'Complete the second sentence so that it has a similar meaning to the first. Use the word given and three to six words.', items: [
      { q: 'Please help me with the presentation.', cue: 'HOPING', a: ['I was hoping that you could help me with the presentation.', 'I was hoping you could help me with the presentation.', 'I was hoping you would help me with the presentation.', 'I was hoping you might help me with the presentation.'], why: 'The distancing past and continuous: *was hoping you could*.' },
      { q: 'Where does the director work?', cue: 'KNOW', a: ['Do you know where the director works?'], why: 'An indirect question: statement order, no *does*.' },
      { q: 'My sister and I rarely agree about anything.', cue: 'EYE', a: ['My sister and I rarely see eye to eye about anything.', 'My sister and I rarely see eye to eye on anything.'], why: '*See eye to eye about* or *on* something.' },
      { q: 'He claimed he had never received the letter, though nobody believed him.', cue: 'MADE', a: ['He made out that he had never received the letter.', 'He made out he had never received the letter.'], why: '*Make out that*: a claim the reporter doubts.' },
    ] },
    { t: 'ex', kind: 'select', h: 'Choose the word that fits.', items: [
      { q: 'Are you ___ that I don’t work hard enough?', o: ['implying', 'inferring', 'letting'], why: 'The speaker implies; the listener infers.' },
      { q: 'It might be worth ___ a second opinion.', o: ['getting', 'to get', 'get'], why: '*Worth* + *-ing*.' },
      { q: 'She accidentally let ___ that she was leaving.', o: ['slip', 'slipped', 'slips'], why: '*Let* + base form.' },
      { q: 'Could you tell me what time ___?', o: ['the shop closes', 'does the shop close', 'closes the shop'], why: 'Statement order in an indirect question.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the idiom and its meaning.', pairs: [
      ['bury the hatchet', 'end a quarrel'],
      ['hit it off', 'like each other at once'],
      ['a bone of contention', 'the subject of an argument'],
      ['clear the air', 'talk openly to end the tension'],
      ['walk on eggshells', 'be very careful not to upset someone'],
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'We got off on the [bad] foot, but we’re fine now.', a: ['wrong'], why: '*Get off on the wrong foot*.' },
      { s: 'She suggested [us to wait] until Monday.', a: ['that we wait', 'that we should wait', 'waiting'], why: '*Suggest that we wait* or *suggest waiting*.' },
      { s: 'I fell out [to] my brother over money.', a: ['with'], why: '*Fall out with* someone.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Which is the best thing to say in the Speaking test?', items: [
      { q: 'Part 3: your partner has just given an opinion.', o: ['I take your point, but wouldn’t you say it depends on the company?', 'Next prompt.', 'I agree with everything.'], why: 'Respond, partly agree and invite your partner.' },
      { q: 'Part 4: the examiner asks your opinion.', o: ['I’d say so, mainly because… For instance… Having said that…', 'Yes.', 'I have no idea about this.'], why: 'A developed answer: view, reason, example, other side.' },
    ] },
  ],
};
