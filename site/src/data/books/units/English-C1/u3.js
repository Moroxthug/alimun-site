// English C1, unit 3, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Each lesson: a full explanation first (the rule in plain words, why, many examples, the usual mistakes, a text that
// uses it), then fewer exercises from controlled to free, one speaking task, and one task in the format of C1 Advanced.
// B2 unit 13 taught the basic what-cleft, it-cleft and emphatic do; this unit adds the C1 layer.
export const UNIT = {
  id: 'u3',
  title: 'Persuasion',
  goal: 'Persuade people with precision: control the focus of a sentence with the whole family of cleft structures, add weight with stressed auxiliaries and exact intensifiers, guide a listener with concessive discourse markers and rhetorical devices, and follow a persuasive speech in the format of C1 Advanced Listening Part 2.',
  art: 'parrot',
  tags: { skills: ['grammar', 'vocabulary', 'speaking', 'listening', 'reading'], topics: ['cleft-sentences', 'emphasis', 'intensifiers', 'discourse-markers', 'rhetoric', 'libraries'], goals: ['foundations', 'academic', 'professional'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'What it comes down to',
      about: 'Use the whole family of cleft sentences, including reversed clefts and it-clefts with whole clauses, to decide exactly which idea your listener remembers.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'At B2 you met the two basic cleft sentences: ***What I need is** a holiday* and ***It was** the price **that** put me off.* At C1 the point is no longer just to recognise them, but to **choose** between them, because each one handles information in a slightly different way.\n\nEnglish likes to put **known** information first and **new or important** information last, where the voice naturally falls. A cleft sentence lets you break a normal sentence in two so that the part you care about lands exactly where you want it. In persuasion this matters a great deal: the listener tends to remember the point that comes after *is* or *was*, so a cleft is a way of deciding what they take home.\n\nThe **wh-cleft** (*What we need is…*) builds suspense: the listener waits for the answer. The **it-cleft** (*It is the principle that…*) singles out one element and quietly rejects the alternatives. The **reversed wh-cleft** (*That’s what I mean*, *This is where the plan fails*) points back to something already said and sums it up.' },
          { t: 'table', caption: 'The cleft family at C1', explain: ['head', 'col2'], head: ['Pattern', 'Example', 'What it does'], rows: [
            ['What + clause + be', 'What worries residents is the lack of any consultation.', 'Builds up to the key idea.'],
            ['What happened was (that)…', 'What happened was that the funding simply ran out.', 'Introduces a whole event as the focus.'],
            ['The thing / the one thing / the last thing…', 'The last thing this town needs is another car park.', 'A stronger, more personal alternative to *what*.'],
            ['The reason (why) / the place where / the person who', 'The place where the plan falls down is the cost.', 'Puts a reason, place or person in focus.'],
            ['All (that) + clause + be', 'All we are asking for is a fair hearing.', 'Means *the only thing*: it makes a request sound modest.'],
            ['Reversed: focus + be + what / where / why', 'A fair hearing is all we are asking for. That’s exactly why we came.', 'Sums up and points back to an earlier idea.'],
            ['It + be + focus + that / who', 'It is not the cost that concerns me but the principle.', 'Selects one element and rejects another.'],
            ['It + be + clause or phrase + that', 'It was only when the branch closed that people noticed it.', 'Puts a whole time, reason or condition in focus.'],
          ] },
        ],
        [
          { t: 'text', md: 'Three points of grammar matter at this level.\n\nFirst, in an **it-cleft** the verb after *who* or *that* agrees with the noun in focus: *It is the volunteers who **keep** the place open*, not *keeps*. With a pronoun in focus, formal English uses the subject form (*It is **they** who must decide*), while everyday speech uses the object form (*It’s **them** who decide*). In an essay, choose the formal version or rephrase.\n\nSecond, after ***What… do / did** is*, the verb can be a bare infinitive or, in more formal style, a *to*-infinitive: *What we did was (to) write to every councillor.* The bare form is more common, and both are correct.\n\nThird, the pattern ***It is not X that…, but Y*** (or ***It is not so much X as Y that…***) is one of the most useful in an argument, because it corrects the listener’s assumption in a single sentence. *It is not so much the money as the message that matters.*' },
          { t: 'examples', items: [
            { s: '**What this campaign is really about is** who gets to use public space.', n: 'A wh-cleft can have a long subject; the key idea still comes last.' },
            { s: '**What happened was that** nobody asked the people who actually use the building.', n: '*What happened was (that)* + a whole clause.' },
            { s: '**The one thing I would ask is that** you visit the library before you vote.', n: 'A polite but firm request.' },
            { s: '**All you have to do is** look at the queue on a Saturday morning.', n: '*All* = *the only thing*: it makes the evidence sound obvious.' },
            { s: 'Free access for everyone. **That is what** a library stands for.', n: 'A reversed cleft sums up the idea just mentioned.' },
            { s: '**This is where** the council’s argument falls apart.', n: 'Reversed with *where*: points to the weak spot.' },
            { s: '**It was only after** the closure was announced **that** people started to protest.', n: 'An it-cleft with a whole time phrase in focus.' },
            { s: '**It is not so much** the building **as** the people inside it **that** we want to protect.', n: 'Corrects an assumption: not X, but Y.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In speech, the **stress** falls on the focus: *It was **Ruth** who organised it.* If you read a cleft aloud with flat intonation, the effect disappears. Use one cleft for your main point in a paragraph or a speaking turn; three in a row sound like a politician who has swallowed a textbook.' },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['It is the volunteers who keeps it open.', 'It is the volunteers who keep it open.', 'The verb agrees with the noun in focus (*volunteers*).'],
            ['What we need it is more time.', 'What we need is more time.', 'Do not repeat the subject with *it*.'],
            ['The thing what bothers me is the noise.', 'The thing that bothers me is the noise.', 'After a noun, use *that* or *which*, not *what*.'],
            ['It was only when I moved here when I understood.', 'It was only when I moved here that I understood.', 'The second part of an it-cleft starts with *that*.'],
            ['All what we want is a fair hearing.', 'All we want is a fair hearing.', 'After *all*, use nothing or *that*, never *what*.'],
            ['It is not the cost that matters, it is the principle that matters.', 'It is not the cost that matters but the principle.', 'Use *but* and say the verb only once.'],
          ] },
          { t: 'dialogue', title: 'Planning the public meeting', lines: [
            { who: 'Hannah', s: 'So what’s our opening line? We get about two minutes before they start checking their phones.' },
            { who: 'Daniel', s: 'I’d start with the facts. The branch is used every day, the building is sound, and the savings are tiny.' },
            { who: 'Hannah', s: 'Facts, yes, but it isn’t the facts that people remember. It’s the one sentence they repeat on the way home.' },
            { who: 'Daniel', s: 'Fine. Then what we should say is that this isn’t really about money at all.' },
            { who: 'Hannah', s: 'Exactly. And that’s where Mrs Okafor comes in. It was her reading group that found the leak in the roof report.' },
            { who: 'Daniel', s: 'All we have to do, then, is let her tell that story. That’s what will win the room.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the sentence that is correct and natural.', items: [
            { q: '', o: ['It is the residents who pay for the service.', 'It is the residents who pays for the service.', 'It is the residents which pay for the service.'], why: 'People take *who*, and the verb agrees with *residents*.' },
            { q: '', o: ['All we ask is that you listen.', 'All what we ask is that you listen.', 'All we ask it is that you listen.'], why: '*All* + clause, with no *what* and no extra *it*.' },
            { q: '', o: ['It wasn’t until the vote that the risk became clear.', 'It wasn’t until the vote when the risk became clear.', 'It was until the vote that the risk became clear.'], why: '*It wasn’t until… that…*: negative first, then *that*.' },
            { q: '', o: ['It is not the delay that annoys me but the silence.', 'It is not the delay that annoys me but the silence that annoys me.', 'It is not the delay what annoys me but the silence.'], why: '*It is not X that…, but Y*: the verb appears once.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order to make a cleft sentence.', items: [
            { a: 'This is where the argument falls apart.', why: 'A reversed cleft with *where*.' },
            { a: 'What happened was that nobody read the report.', why: '*What happened was that* + clause.' },
            { a: 'The last thing we need is another delay.', why: '*The last thing* + clause + *is*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first, using the word given. Write the whole new sentence here; in the exam you write only three to six words, including the word given.', items: [
            { q: 'People only began to value the library when it was threatened with closure.', cue: 'until', a: ['It was not until the library was threatened with closure that people began to value it.', 'It wasn’t until the library was threatened with closure that people began to value it.'], why: '*Only… when* becomes *It was not until… that…*' },
            { q: 'The only thing the campaigners want is a public debate.', cue: 'all', a: ['All the campaigners want is a public debate.', 'All that the campaigners want is a public debate.'], why: '*The only thing* = *All (that)*.' },
            { q: 'Residents were angered most of all by the lack of consultation.', cue: 'what', a: ['What angered residents most was the lack of consultation.', 'What angered residents most of all was the lack of consultation.', 'What angered the residents most was the lack of consultation.', 'What most angered residents was the lack of consultation.'], why: 'A wh-cleft: *What* + clause + *was* + the key idea, which now comes last.' },
            { q: 'I object to the way the decision was made rather than the decision itself.', cue: 'much', a: ['It is not so much the decision itself as the way it was made that I object to.', 'It’s not so much the decision itself as the way it was made that I object to.', 'It is not so much the decision as the way it was made that I object to.'], why: '*It is not so much X as Y that…*' },
            { q: 'Mr Reyes was the one who first suggested a petition.', cue: 'it', a: ['It was Mr Reyes who first suggested a petition.', 'It was Mr Reyes that first suggested a petition.'], why: 'An it-cleft with a person in focus.' },
            { q: 'Our next step should be to contact the local newspaper.', cue: 'do', a: ['What we should do next is contact the local newspaper.', 'What we should do next is to contact the local newspaper.', 'What we should do is contact the local newspaper next.'], why: '*What we should do is (to)* + infinitive.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 4** there are **six** questions, each worth **two** marks, and you can get one mark for half of the answer. You must write **between three and six words**, including the word given, and you must not change the word given. Contractions such as *wasn’t* count as two words. Clefts appear often, because one key word such as *until*, *all* or *much* forces the whole structure.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor. Put the stress on the idea in focus.', tutor: 'sofia', items: [
            { a: 'What this is really about is who gets to use public space.' },
            { a: 'It is not the cost that concerns me but the principle.' },
            { a: 'All we are asking for is a fair hearing.' },
            { a: 'That is exactly why we are here tonight.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'I do see your point',
      about: 'Add weight with emphatic do, stressed auxiliaries and intensifiers that collocate precisely (bitterly disappointed, by far the best, not in the least).',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'At B2, **emphatic do** meant *I **do** like jazz*: a positive verb made stronger. At C1 its most useful job in an argument is **concession**: you accept the other person’s point before you answer it. *I **do** see your point, but…* sounds far more reasonable than *I see your point, but…*, because the stressed *do* shows that you mean it.\n\nWhen the verb phrase already contains an **auxiliary** or a form of **be**, you do not add *do*: you simply **stress the auxiliary** in speech. *I **have** read the report.* *It **is** important.* *We **can** afford it.* In writing, where stress is invisible, you can add a word such as *indeed* or *certainly*: *It is **indeed** important.*\n\nA polite imperative with *do* is common in formal requests and invitations: ***Do** let us know if you can attend.* ***Do** feel free to ask questions.*' },
          { t: 'examples', items: [
            { s: 'I **do** understand your concerns, but the figures tell a different story.', n: 'Concession first, then the counter-argument.' },
            { s: 'The scheme **did** reduce waiting times, whatever its critics say.', n: 'Emphatic *did* insists on a past fact.' },
            { s: 'We **have** considered the alternatives. Every one of them.', n: 'Stress the auxiliary: no *do* needed.' },
            { s: 'This **is** a serious matter, and it deserves a serious answer.', n: 'Stressed *is*.' },
            { s: 'If you **do** decide to come, bring a copy of the plan.', n: 'Emphatic *do* in a condition: if, against expectation, you decide.' },
            { s: '**Do** take a leaflet on your way out.', n: 'A warm, polite imperative.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Emphatic *do* sounds natural only when there is a **contrast** in the air: something someone doubted, denied or did not expect. Used with no contrast, it sounds defensive. *I do live in Leeds* only works if someone suggested you didn’t.' },
        ],
        [
          { t: 'text', md: 'An **intensifier** strengthens a word, but at C1 the question is which one. English intensifiers **collocate**: native speakers say *bitterly disappointed* and *deeply concerned*, not *highly disappointed* or *bitterly concerned*, and the wrong partner sounds odd even when the meaning is clear.\n\nThey also work in groups. Some go with **superlatives** (*by far the best, easily the most popular, the very best*). Some go with **comparatives** (*far better, considerably cheaper, a great deal more*). Some strengthen **negatives** (*not at all, not in the least, not remotely, no… whatsoever, by no means*). And some add emphasis to a **noun** or **question**: *the minister **herself***, *the **very** day it opened*, *What **on earth** were they thinking?*' },
          { t: 'table', caption: 'Intensifiers and their partners', explain: ['head', 'col2'], head: ['Intensifier', 'Typical partners', 'Note'], rows: [
            ['bitterly', 'disappointed, opposed, cold, regret', 'Strong negative feeling.'],
            ['deeply', 'concerned, moved, rooted, divided, offensive', 'Feelings and beliefs.'],
            ['highly', 'unlikely, recommended, controversial, effective, qualified', 'Judgements and probability, not feelings.'],
            ['utterly', 'ridiculous, convinced, exhausted, unacceptable', 'Mostly extreme or negative adjectives.'],
            ['painfully', 'slow, obvious, shy, aware', 'Something uncomfortably true.'],
            ['strongly / wholeheartedly', 'oppose, believe, recommend / agree, support', 'With verbs of opinion.'],
            ['by far / easily / far and away', 'the best, the most important, the largest', 'With superlatives only.'],
            ['not in the least / whatsoever', 'not in the least surprised / no evidence whatsoever', 'Strengthen a negative.'],
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['We were highly disappointed.', 'We were bitterly (or deeply) disappointed.', '*Highly* goes with judgements, not feelings.'],
            ['It is by far better than the old plan.', 'It is far better than the old plan.', 'With a comparative, use *far* or *much*; *by far* needs a superlative.'],
            ['I am totally agree.', 'I totally agree.', '*Agree* is a verb: no *am*.'],
            ['I have no doubt whatsoever not.', 'I have no doubt whatsoever.', '*Whatsoever* follows the negative noun phrase.'],
            ['I does understand.', 'I do understand.', 'Emphatic *do* agrees with the subject and takes the base form.'],
            ['He did can come.', 'He could come. (stress *could*)', 'With a modal, stress the modal: no *do*.'],
          ] },
          { t: 'dialogue', title: 'After the council meeting', lines: [
            { who: 'Clara', s: 'I do see why they want to save money. I’m not in the least naive about the budget.' },
            { who: 'Gareth', s: 'Nobody said you were. But closing the branch is by far the worst option on the table.' },
            { who: 'Clara', s: 'It is. And the report itself admits the savings are painfully small.' },
            { who: 'Gareth', s: 'So what on earth are they thinking? There’s no evidence whatsoever that people will travel to the central library.' },
            { who: 'Clara', s: 'I was bitterly disappointed, I must say. Still, the chair did promise a second consultation.' },
            { who: 'Gareth', s: 'Then do make sure you’re first in the queue to speak.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the intensifier that collocates best.', items: [
            { q: 'The proposal is ___ controversial, so expect a lively meeting.', o: ['highly', 'bitterly', 'painfully'], why: '*Highly controversial* is a fixed collocation for a judgement.' },
            { q: 'Many residents are ___ opposed to the closure.', o: ['bitterly', 'highly', 'easily'], why: '*Bitterly opposed*: strong negative feeling.' },
            { q: 'This is ___ the most important decision the council will make this year.', o: ['easily', 'far', 'considerably'], why: '*Easily* (or *by far*) strengthens a superlative.' },
            { q: 'The new building is ___ cheaper to heat than the old one.', o: ['considerably', 'by far', 'utterly'], why: 'A comparative takes *considerably*, *far* or *much*.' },
            { q: 'I was not ___ surprised by the result.', o: ['in the least', 'whatsoever', 'by far'], why: '*Not in the least* + adjective. *Whatsoever* follows a noun: *no surprise whatsoever*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'We were [highly] disappointed by the response.', a: ['bitterly', 'deeply'], why: 'Feelings take *bitterly* or *deeply*.' },
            { s: 'The second option is [by far] cheaper.', a: ['far', 'much', 'considerably'], why: '*By far* needs a superlative; with a comparative use *far* or *much*.' },
            { s: 'She [does knows] the area better than anyone.', a: ['does know'], why: 'Emphatic *does* + base form.' },
            { s: 'There is no proof [whatever not] that it will work.', a: ['whatsoever', 'whatever'], why: '*No* + noun + *whatsoever*; no second negative.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 2): read the text, sentence by sentence, and think of the word which best fits each gap. Use only one word in each gap.', items: [
            { q: 'Critics of the plan ___ have a point: the building is old and expensive to run.', a: ['do'], why: 'Emphatic *do* in a concession before the counter-argument.' },
            { q: 'But ___ they seem to forget is how many people depend on it.', a: ['what'], why: 'A wh-cleft: *What they seem to forget is…*' },
            { q: 'It is not the building ___ matters, but the service it provides.', a: ['that', 'which'], why: '*It is not X that…, but Y.*' },
            { q: 'For many older residents, it is ___ far the most important public space in the town.', a: ['by'], why: '*By far* + superlative.' },
            { q: 'There is no alternative ___ within walking distance.', a: ['whatsoever', 'whatever'], why: '*No* + noun + *whatsoever* strengthens the negative.' },
            { q: 'The councillors ___ admit, when pressed, that the savings would be small.', a: ['do', 'did'], why: 'Emphatic *do* or *did*: they really admit it, though reluctantly.' },
            { q: 'All we ask is ___ they visit the branch before they vote.', a: ['that'], why: '*All we ask is that* + clause.' },
            { q: 'If they ___, they will see why it is worth keeping.', a: ['do'], why: 'Emphatic *do* stands for *visit the branch*; it also stresses the condition.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 2** there are **eight** gaps, and every answer is one word, usually a grammar word: an auxiliary, a preposition, a pronoun, a linker or part of a fixed phrase. Read the whole text first for meaning. Then, for each gap, ask what kind of word the grammar needs before you think of the meaning. A gap before a superlative may want *by*; a gap before *is* at the start of a sentence often wants *what*.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor. Stress the auxiliary or the intensifier.', tutor: 'arthur', items: [
            { a: 'I do see your point, but the figures tell a different story.' },
            { a: 'We have considered every alternative.' },
            { a: 'This is by far the worst option on the table.' },
            { a: 'I was not in the least surprised.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'Be that as it may',
      about: 'Guide a listener with concessive and summing-up discourse markers, and persuade with rhetorical questions, the rule of three, contrast and repetition.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'A persuasive speaker rarely ignores the other side. The usual move is to **concede** a point and then **counter** it, and English has a whole set of markers for each half of that move. The concession markers say *I accept this*: ***admittedly***, ***granted***, ***of course***, ***it is true that***, ***I’ll grant you that***. The counter markers say *but this matters more*: ***be that as it may***, ***even so***, ***that said***, ***all the same***, ***nonetheless***, ***still***.\n\nThe difference between them is mainly **register**. *Be that as it may* and *nonetheless* are formal and suit a speech or an essay. *That said* and *all the same* are neutral. *Still* and *I’ll grant you that* are conversational.\n\nOther markers guide the listener through the argument. ***Needless to say*** introduces something obvious (and so makes it sound undeniable). ***To put it another way*** and ***in other words*** restate a point more simply. ***By the same token*** applies the same reasoning to a second case. ***On the contrary*** rejects what was just said, which is not the same as ***on the other hand***, which adds a second side.' },
          { t: 'table', caption: 'Discourse markers for argument', explain: ['head', 'col1', 'col2'], head: ['Marker', 'Job', 'Register'], rows: [
            ['admittedly, granted', 'concede a point', 'neutral to formal'],
            ['be that as it may', 'accept a point, then dismiss it', 'formal'],
            ['that said, even so, all the same', 'introduce the counter-point', 'neutral'],
            ['nonetheless, nevertheless', 'counter-point, after a full stop', 'formal'],
            ['needless to say', 'present something as obvious', 'neutral'],
            ['to put it another way', 'restate the point more simply', 'neutral'],
            ['by the same token', 'apply the same logic to a new case', 'formal'],
            ['on the contrary', 'reject what was just said', 'neutral'],
          ] },
        ],
        [
          { t: 'text', md: 'Rhetorical **devices** do the same job with the shape of a sentence. A **rhetorical question** is asked for effect, not for an answer: *Do we really want a town where reading is a luxury?* The listener answers it silently, and the answer is the one you want.\n\nThe **rule of three** groups ideas in threes because three feels complete: *It is warm, it is free and it is open to everyone.* Two items can sound unfinished; four can sound like a shopping list.\n\n**Contrast** (antithesis) sets two opposite ideas side by side in parallel form: *A library costs us little; losing one costs us a great deal.* **Repetition** of an opening phrase (anaphora) builds rhythm: *It is where children learn to read. It is where job seekers write their first CV. It is where the lonely find company.*\n\nThe **inclusive *we*** turns the audience into partners: *we all know*, *what we risk losing*.' },
          { t: 'examples', items: [
            { s: '**Admittedly**, the building needs repairs. **Be that as it may**, the service is worth every penny.', n: 'Concede, then dismiss the point.' },
            { s: 'The savings are small. **That said**, every saving counts, and I respect the effort.', n: '*That said* introduces a fair counter-point.' },
            { s: '**Needless to say**, nobody asked the users.', n: 'Makes the point sound obvious and therefore shocking.' },
            { s: 'Is a few thousand pounds really worth a whole community’s trust?', n: 'A rhetorical question: the expected answer is *no*.' },
            { s: 'It is warm, it is free and it is open to everyone.', n: 'The rule of three, with repeated *it is*.' },
            { s: 'Closing a library takes a single vote; building a reading habit takes a lifetime.', n: 'Contrast in parallel form.' },
            { s: 'If we expect children to read, **by the same token** we must give them somewhere to do it.', n: 'Applying the same logic to a second case.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Do not confuse ***on the contrary*** with ***on the other hand***. *Is it too expensive? On the contrary, it is cheap.* (I reject what you said.) *It is expensive. On the other hand, it lasts for years.* (Both are true.)' },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['It is cheap. On the contrary, it is slow.', 'It is cheap. On the other hand, it is slow.', '*On the contrary* rejects the previous idea; here both are true.'],
            ['Be that as it may, I agree completely.', 'You may be right. Be that as it may, the decision is wrong.', '*Be that as it may* introduces disagreement, not agreement.'],
            ['Admittedly, I think it is a great idea.', 'Admittedly, it is expensive. Even so, it is a great idea.', '*Admittedly* concedes a point against your own side.'],
            ['Needless to say that nobody came.', 'Needless to say, nobody came.', 'No *that*: *needless to say* is followed by a comma.'],
            ['It is warm, free, open, quiet and useful.', 'It is warm, it is free and it is open to everyone.', 'Three parallel items persuade; a long list does not.'],
          ] },
          { t: 'dialogue', title: 'Speaking Part 3, two candidates', lines: [
            { who: 'Examiner', s: 'Here are some ways a town could persuade people to use its public services more. Talk together about how effective each idea might be.' },
            { who: 'Priya', s: 'Shall we start with advertising? Admittedly, it reaches a lot of people, but I’m not sure posters change anyone’s habits.' },
            { who: 'Owen', s: 'I’ll grant you that. Even so, if people don’t know a service exists, they can hardly use it, can they?' },
            { who: 'Priya', s: 'Fair point. What strikes me about longer opening hours, though, is that it removes the real obstacle, which is time.' },
            { who: 'Owen', s: 'True. And by the same token, free events would bring in people who have never been through the door.' },
            { who: 'Examiner', s: 'Thank you. Now you have about a minute to decide which idea would be the most effective.' },
            { who: 'Priya', s: 'For me, it has to be the opening hours. What do you think?' },
          ] },
        ],
        [
          { t: 'ex', kind: 'bank', h: 'Complete the paragraph with the markers from the box. One is not needed.', extra: ['on the contrary'], items: [
            { q: '___, the reading room is in poor condition.', a: 'Admittedly', why: 'Concedes a point against the speaker’s own side.' },
            { q: '___, it is still the busiest room in the building.', a: 'Be that as it may', why: 'Accepts the point, then sets it aside.' },
            { q: '___, nobody from the council has visited it in years.', a: 'Needless to say', why: 'Presents an obvious and damning fact.' },
            { q: 'Reading is a skill we all value. ___, we should value the places that teach it.', a: 'By the same token', why: 'The same logic applied to a second case.' },
            { q: 'The savings are real. ___, they are tiny compared with what we would lose.', a: 'That said', why: 'A neutral counter-point after a concession.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match each sentence with the device it uses.', pairs: [
            ['Do we really want our children to grow up without books?', 'a rhetorical question'],
            ['It is warm, it is free and it is open to all.', 'the rule of three'],
            ['A library costs little; losing one costs a great deal.', 'contrast in parallel form'],
            ['It is where we learn. It is where we meet. It is where we belong.', 'repetition of an opening phrase'],
            ['What we all stand to lose is more than a building.', 'the inclusive we in a cleft'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Speaking Part 3): you and your partner are discussing ways to persuade people to use public services. Choose what you would say next to keep the discussion going and score well.', items: [
            { q: 'Your partner says: “I think free events are the best idea, because they bring in new people.”', o: ['That’s a good point. Even so, would people come back once the event was over, do you think?', 'Yes.', 'Free events are good. Advertising is also good. Opening hours are good.'], why: 'React, add a counter-point and invite your partner to respond.' },
            { q: 'There are about thirty seconds left and you have not decided.', o: ['We seem to agree that time is the main obstacle, so shall we go for longer opening hours?', 'I don’t know. Everything is good.', 'Let’s talk about advertising again from the beginning.'], why: 'Summarise, then move towards a decision with your partner.' },
            { q: 'Your partner has been quiet for a while.', o: ['I’ve been doing most of the talking. How do you see the idea of advertising?', 'And another thing about opening hours is that…', 'You should say something now.'], why: 'Invite your partner politely: the examiner listens for interaction.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Speaking Part 3** you and your partner talk together for about **two minutes** about a question with several written prompts, then for about **one minute** you try to reach a decision. You do not have to agree, and you do not have to cover every prompt. The marks are for **interaction**: concede (*I’ll grant you that*), counter (*Even so…*), build on your partner’s ideas (*By the same token…*) and invite them in (*How do you see it?*).' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these turns after the tutor, as if you were in Speaking Part 3.', tutor: 'kofi', items: [
            { a: 'Admittedly, it reaches a lot of people, but I am not sure it changes habits.' },
            { a: 'I will grant you that. Even so, people need to know the service exists.' },
            { a: 'By the same token, free events would bring in new people.' },
            { a: 'For me, it has to be the opening hours. What do you think?' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'A room with no price on the door',
      about: 'Listen to and read a persuasive speech about public libraries, complete sentences in the format of C1 Advanced Listening Part 2, and analyse how the speaker persuades.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: 'This lesson brings the unit together. You will hear a speech given at a public meeting by a woman who wants to stop the closure of her local library. It uses cleft sentences, emphasis, concession and the rhetorical devices from Lesson 3.\n\nIn **C1 Advanced Listening Part 2** you hear one speaker talking for about three minutes and complete **eight** sentences with a word or short phrase. The sentences follow the order of the talk, and the words you need are words you actually hear, but the sentences around them are paraphrased. You hear the recording twice.\n\nPlay the speech first without reading it, and try the sentences on the next page. Then read the text to check.' },
          { t: 'reading', title: 'A room with no price on the door', md: 'Good evening. My name is Ruth Adeyemi, and for twenty-two years I have used the library on Mill Street. I am not here to tell you that the council has no right to make savings. It does have that right, and, admittedly, the building needs a new roof. Be that as it may, I want to talk about what we would actually lose.\n\nThe report on your desks describes the branch as “underused”. I went in last Tuesday at ten in the morning and counted. There were eleven people at the computers, a toddlers’ singing group in the corner, and a queue at the desk. What the report measured was the number of books borrowed. What it did not measure was everything else.\n\nIt is not so much a book store as a living room for the town. It is where children learn to read before they start school. It is where people who have lost their jobs write their first CV in years. And it is where people who live alone come for the one conversation they will have all day.\n\nNeedless to say, none of those people were asked. The consultation was held online, which is a strange way to consult people who come to the library precisely because they do not have the internet at home.\n\nI do understand the budget. I have read the figures, every page of them. The saving from closing the branch is roughly what the council spends on hanging baskets in the high street. That said, I am not asking you to choose between flowers and books. All I am asking is that you look for the money somewhere that will not cost us the one room in town with no price on the door.\n\nSo here is my question. Do we want to be the council that kept the baskets and lost the library? Closing a branch takes one vote. Rebuilding the habit of reading takes a generation. Thank you.' },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'In the format of the C1 Advanced exam (Listening Part 2): complete the sentences with a word or short phrase from the speech.', items: [
            { q: 'Ruth has used the Mill Street library for ___ years.', a: ['twenty-two', '22', 'twenty two'], why: '*for twenty-two years I have used the library*' },
            { q: 'Ruth accepts that the building needs a new ___.', a: ['roof'], why: '*admittedly, the building needs a new roof*' },
            { q: 'The council’s report calls the branch ___.', a: ['underused'], why: '*describes the branch as “underused”*' },
            { q: 'When Ruth visited, she saw a ___ for toddlers.', a: ['singing group'], why: '*a toddlers’ singing group in the corner*' },
            { q: 'According to Ruth, the report only counted the number of ___.', a: ['books borrowed'], why: '*What the report measured was the number of books borrowed.*' },
            { q: 'Ruth describes the library as a ___ for the town.', a: ['living room'], why: '*a living room for the town*' },
            { q: 'Ruth criticises the consultation because it took place ___.', a: ['online'], why: '*The consultation was held online*' },
            { q: 'Ruth compares the saving with the cost of the ___ in the high street.', a: ['hanging baskets', 'baskets'], why: '*what the council spends on hanging baskets in the high street*' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Listening Part 2**, read the sentences before you listen and predict the kind of word each gap needs: a number, a noun, a place. Write the **exact words** you hear; do not change their form. Often the speaker mentions something similar first (*eleven people at the computers*) before the real answer (*a toddlers’ singing group*), so keep listening.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'How does Ruth persuade? Choose the best answer.', items: [
            { q: 'Why does Ruth say “It does have that right” near the start?', o: ['To concede a point and sound reasonable before she argues.', 'To show that she agrees with the closure.', 'To correct a mistake in the council’s report.'], why: 'Emphatic *does* concedes; *Be that as it may* then turns the argument.' },
            { q: 'What is the effect of “What the report measured was… What it did not measure was…”?', o: ['Two parallel wh-clefts contrast what was counted with what was ignored.', 'It shows that the report is accurate.', 'It lists the books that the library owns.'], why: 'Parallel clefts put both ideas in focus and contrast them.' },
            { q: 'Why does Ruth mention the hanging baskets?', o: ['To make the saving seem small by comparing it with something minor.', 'To ask the council to cut the flowers.', 'To show that the high street is more important.'], why: 'She says she is *not asking you to choose*; the comparison simply shows scale.' },
            { q: 'What does her final question do?', o: ['It invites the council to picture how the decision will be remembered.', 'It asks for information about the budget.', 'It changes the subject to the high street.'], why: 'A rhetorical question: the listener answers it silently.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the words that make each sentence a cleft, a concession or a rhetorical device.', items: [
            { s: '[Admittedly], the building needs a new roof. [Be that as it may], I want to talk about what we would lose.', why: 'Concede, then turn the argument.' },
            { s: '[It is where] children learn to read. [It is where] people write their first CV.', why: 'Repetition of an opening phrase builds rhythm.' },
            { s: '[All I am asking is that] you look for the money somewhere else.', why: 'An all-cleft makes the request sound modest.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes when you write a persuasive speech', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['Opening with a list of statistics.', 'Opening with who you are and why you care.', 'Listeners trust a person before they trust a number.'],
            ['Ignoring the other side.', 'Conceding a point, then countering it.', 'Concession makes you sound fair.'],
            ['Ten clefts and five rhetorical questions.', 'One strong cleft per section and one question at the end.', 'Devices lose force when they are overused.'],
            ['Ending with “That is all.”', 'Ending with a contrast or a question.', 'The last sentence is the one people repeat.'],
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite each plain sentence so that it persuades, starting with the words given.', items: [
            { q: 'People who live alone need the library most.', cue: 'It is', a: ['It is people who live alone who need the library most.', 'It is the people who live alone who need the library most.', 'It is people who live alone that need the library most.'], why: 'An it-cleft puts the people in focus.' },
            { q: 'We want you to visit the branch before you vote.', cue: 'All', a: ['All we want is for you to visit the branch before you vote.', 'All we ask is that you visit the branch before you vote.', 'All we want is that you visit the branch before you vote.'], why: 'An all-cleft makes the request sound modest.' },
            { q: 'The report ignored the computer users.', cue: 'What', a: ['What the report ignored was the computer users.', 'What the report ignored were the computer users.'], why: 'A wh-cleft builds up to the key information.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these lines from the speech after the tutor, as if you were giving it.', tutor: 'lena', items: [
            { a: 'Be that as it may, I want to talk about what we would actually lose.' },
            { a: 'It is not so much a book store as a living room for the town.' },
            { a: 'All I am asking is that you look for the money somewhere else.' },
            { a: 'Closing a branch takes one vote. Rebuilding the habit of reading takes a generation.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct sentence.', items: [
      { q: '', o: ['It is the volunteers who keep the branch open.', 'It is the volunteers who keeps the branch open.', 'It is the volunteers what keep the branch open.'], why: 'The verb agrees with *volunteers*.' },
      { q: '', o: ['All we want is a fair hearing.', 'All what we want is a fair hearing.', 'All we want it is a fair hearing.'], why: '*All* + clause, no *what*.' },
      { q: '', o: ['It is far better than the old plan.', 'It is by far better than the old plan.', 'It is easily better than the old plan.'], why: 'A comparative takes *far* or *much*.' },
      { q: '', o: ['Is it expensive? On the contrary, it costs very little.', 'It is cheap. On the contrary, it is slow.', 'Needless to say that it is cheap.'], why: '*On the contrary* rejects the previous idea.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Complete the second sentence so that it has a similar meaning to the first, using the word given.', items: [
      { q: 'We only realised how much the library mattered when it closed.', cue: 'until', a: ['It was not until the library closed that we realised how much it mattered.', 'It wasn’t until the library closed that we realised how much it mattered.', 'It was not until it closed that we realised how much the library mattered.', 'It wasn’t until it closed that we realised how much the library mattered.'], why: '*It was not until… that…*' },
      { q: 'The only thing they need is a little more time.', cue: 'all', a: ['All they need is a little more time.', 'All that they need is a little more time.'], why: '*The only thing* = *All*.' },
      { q: 'It is the message that matters more than the money.', cue: 'much', a: ['It is not so much the money as the message that matters.', 'It’s not so much the money as the message that matters.'], why: '*Not so much X as Y*.' },
    ] },
    { t: 'ex', kind: 'select', h: 'Choose the word that collocates best.', items: [
      { q: 'Residents were ___ disappointed by the decision.', o: ['bitterly', 'highly', 'easily'], why: 'Feelings: *bitterly disappointed*.' },
      { q: 'It is ___ unlikely that the plan will be approved.', o: ['highly', 'bitterly', 'painfully'], why: 'Probability: *highly unlikely*.' },
      { q: 'There is no evidence ___ that the new system works.', o: ['whatsoever', 'in the least', 'by far'], why: '*No* + noun + *whatsoever*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete each sentence with one word.', items: [
      { q: 'I ___ understand your concerns, but I disagree.', a: ['do'], why: 'Emphatic *do* in a concession.' },
      { q: '___ that as it may, the decision is wrong.', a: ['Be'], why: 'The fixed phrase *be that as it may*.' },
      { q: 'This is ___ the council’s argument falls apart.', a: ['where'], why: 'A reversed cleft with *where*.' },
      { q: 'If we value reading, by the same ___ we must value libraries.', a: ['token'], why: '*By the same token*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match each sentence with the device it uses.', pairs: [
      ['Do we really want a town without books?', 'a rhetorical question'],
      ['It is warm, it is free and it is open to everyone.', 'the rule of three'],
      ['Closing it takes a vote; rebuilding it takes a generation.', 'contrast'],
      ['Admittedly, it is old. Even so, it is busy.', 'concession and counter-point'],
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'The thing [what] worries me is the cost.', a: ['that', 'which'], why: 'After a noun, use *that* or *which*.' },
      { s: 'It was only when it closed [when] people noticed.', a: ['that'], why: 'The second part of an it-cleft starts with *that*.' },
      { s: 'We were [highly] disappointed.', a: ['bitterly', 'deeply'], why: '*Highly* is for judgements, not feelings.' },
    ] },
  ],
};
