// English C1, unit 7, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Each lesson: a full explanation first (the rule in plain words, why, many examples, the usual mistakes, a text that
// uses it), then fewer exercises from controlled to free, one speaking task, and one task in the format of C1 Advanced.
export const UNIT = {
  id: 'u7',
  title: 'Language and communication',
  goal: 'Move between formal, neutral and informal English without mixing them, use idioms and fixed phrases at the right moment, avoid repetition with ellipsis and substitution, and read a long article on how the internet is changing language.',
  art: 'parrot',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['register', 'formality', 'nominalisation', 'idioms', 'fixed-phrases', 'ellipsis', 'substitution', 'language-change', 'internet'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'Commence, start or kick off?',
      about: 'Choose formal, neutral or informal words and grammar so that a whole text speaks in one consistent voice.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: 'At B2 you learned that some words are formal (*purchase*) and some informal (*grab*). At C1 the question is bigger: **register** is the whole voice of a text, and every choice in it, from vocabulary to grammar to punctuation, should point the same way. A reader notices at once when one sentence of a report suddenly sounds like a text message.\n\nThink of three levels. **Formal** English is for reports, official letters, academic writing and speeches: it is impersonal, precise and a little distant. **Neutral** English is for most emails, the news and talking to people you do not know well. **Informal** English is for friends, family and quick messages: it is personal, relaxed and full of shortcuts.\n\nNo level is better than another. A very formal message to a close friend sounds cold or even sarcastic; a chatty email to a university admissions office sounds careless. The right register is the one that fits the **reader**, the **purpose** and the **channel**.' },
          { t: 'table', caption: 'One meaning, three registers', explain: ['head'], quiz: true, head: ['Formal', 'Neutral', 'Informal'], rows: [
            ['commence', 'start, begin', 'kick off'],
            ['ascertain', 'find out', 'suss out'],
            ['endeavour', 'try', 'have a go'],
            ['reside', 'live', 'be based'],
            ['in the event of', 'if there is', 'if there’s'],
            ['prior to', 'before', 'ahead of'],
            ['a substantial number of', 'many', 'loads of'],
            ['nevertheless', 'however', 'mind you'],
          ] },
        ],
        [
          { t: 'text', md: 'Why does formal English sound the way it does? Mostly because of **where its words come from** and **who it hides**. Formal vocabulary is often from Latin or French (*commence, obtain, require*), while everyday English prefers short Germanic words and phrasal verbs (*start, get, need, put off*). And formal writing tends to remove the people: instead of *we decided*, it says *a decision was taken*.\n\nThe grammar of formality has four main tools. **Nominalisation** turns verbs into nouns: *the council has reduced spending* becomes *the reduction in spending*. **The passive and impersonal structures** take away the doer: *it has been agreed that…, there is a need to…*. **Full forms** replace contractions: *do not*, not *don’t*. **Fronted prepositions** come before *which* and *whom*: *the committee to which I referred*.\n\nInformal English does the opposite. It uses contractions, phrasal verbs, question tags, vague language (*sort of, and stuff, or something*) and **leaves words out**: *Sounds good. See you there?*' },
          { t: 'examples', items: [
            { s: 'Your attendance at the induction session is required.', n: 'Formal: a noun (*attendance*) and a passive, with no person named.' },
            { s: 'Please come to the induction session.', n: 'Neutral: direct and polite.' },
            { s: 'Make sure you turn up to the intro session, OK?', n: 'Informal: a phrasal verb, a short form and a tag.' },
            { s: 'Should you require further assistance, do not hesitate to contact us.', n: 'Formal inversion: *Should you…* = *If you…*.' },
            { s: 'Shout if you need anything else.', n: 'Informal: the same message in five words.' },
          ] },
        ],
        [
          { t: 'text', md: 'The commonest problem at C1 is not choosing the wrong level but **sliding between levels**. A student writes a careful formal opening and then, in the third paragraph, says *the plan is a bit of a nightmare*. Or a friendly email suddenly says *I would be grateful if you could furnish me with the details*. Decide the register before you start, and check every paragraph against it.' },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['Dear Ms Patel, could you give me a hand with the report?', 'Dear Ms Patel, could you help me with the report?', 'An informal idiom breaks a formal email.'],
            ['The results were kind of disappointing.', 'The results were somewhat disappointing.', '*Kind of* is spoken; *somewhat* is the formal hedge.'],
            ['I am writing to ask about the job, cheers.', 'I am writing to enquire about the position.', 'Keep vocabulary and closing in one register.'],
            ['Due to the fact that the train was late…', 'Because the train was late…', 'Formal does not mean wordy; choose the shortest precise form.'],
          ] },
          { t: 'dialogue', title: 'Two versions of one message', lines: [
            { who: 'Laura', s: 'Can you read this before I send it to the director? “We need to put off the launch because loads of stuff isn’t ready.”' },
            { who: 'Marcus', s: 'The meaning is fine, but the register isn’t. Try: “The launch will need to be postponed, as a number of elements are not yet complete.”' },
            { who: 'Laura', s: 'That sounds very stiff to me.' },
            { who: 'Marcus', s: 'For a director, it’s exactly right. Save “loads of stuff” for when you tell me about it over lunch.' },
            { who: 'Laura', s: 'Fair enough. Formal for her, informal for you.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Formal, neutral or informal? Sort the phrases.', explain: ['groups'], groups: ['formal', 'neutral', 'informal'], items: [
            { s: 'prior to the meeting', g: 0, why: '*Prior to* is the formal equivalent of *before*.' },
            { s: 'we regret to inform you', g: 0, why: 'A fixed formal phrase for bad news.' },
            { s: 'before the meeting', g: 1, why: 'Neutral: fine almost anywhere.' },
            { s: 'I’m sorry to tell you', g: 1, why: 'Polite and personal, but not stiff.' },
            { s: 'loads of people', g: 2, why: '*Loads of* belongs to conversation.' },
            { s: 'give it a go', g: 2, why: 'An informal phrase for *try*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite each sentence in a formal register. Start with the words given.', items: [
            { q: 'We put off the meeting because loads of people were off sick.', cue: 'The meeting was postponed', a: ['The meeting was postponed because a large number of staff were absent through illness.', 'The meeting was postponed because a large number of people were ill.', 'The meeting was postponed because many people were ill.', 'The meeting was postponed as a large number of staff were ill.', 'The meeting was postponed due to staff illness.'], why: 'A passive, *postponed* for *put off*, and a formal phrase for *loads of people were off sick*.' },
            { q: 'If you need any more help, just give us a shout.', cue: 'Should you', a: ['Should you require any further assistance, please contact us.', 'Should you need any further assistance, please contact us.', 'Should you require further assistance, please contact us.', 'Should you need any further help, please contact us.', 'Should you require any further assistance, do not hesitate to contact us.'], why: 'Formal inversion with *Should*, and *require assistance* for *need help*.' },
            { q: 'They’ve cut spending a lot, and people are really angry about it.', cue: 'The', a: ['The substantial reduction in spending has caused considerable anger.', 'The large reduction in spending has caused considerable public anger.', 'The significant reduction in spending has caused considerable anger.', 'The considerable reduction in spending has caused widespread anger.', 'The sharp reduction in spending has caused widespread anger.'], why: 'Nominalisation: *cut spending* becomes *the reduction in spending*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 1): read the text “A word in the right place” and choose the word that best fits each gap.', items: [
            { q: 'Linguists have long ___ that speakers adjust their language to suit the situation.', o: ['observed', 'watched', 'looked', 'regarded'], why: '*Observe that* + clause means *notice and state*; *watch* and *look* cannot take a *that*-clause here.' },
            { q: 'Most of us do this without giving it a second ___.', o: ['thought', 'idea', 'mind', 'opinion'], why: 'The fixed phrase is *without giving it a second thought*.' },
            { q: 'We would not, for ___, greet a judge in the way we greet a sister.', o: ['instance', 'case', 'sample', 'model'], why: '*For instance* = *for example*; *for case* does not exist.' },
            { q: 'The choices we make ___ from vocabulary to the length of our sentences.', o: ['range', 'vary', 'differ', 'extend'], why: 'Only *range* is followed by *from… to…* in this sense.' },
            { q: 'Problems ___ when a speaker misjudges the level of formality.', o: ['arise', 'raise', 'rise', 'arouse'], why: 'Problems *arise* (happen); *raise* needs an object.' },
            { q: 'An over-familiar email can ___ a very poor impression on an employer.', o: ['make', 'do', 'give', 'take'], why: 'The collocation is *make an impression*.' },
            { q: 'In ___ terms, nobody is born knowing these rules.', o: ['practical', 'useful', 'handy', 'working'], why: '*In practical terms* is a fixed phrase meaning *in reality*.' },
            { q: 'They are picked up gradually, ___ through years of reading and listening.', o: ['largely', 'widely', 'greatly', 'highly'], why: '*Largely* means *mainly*; *widely* means *by many people*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 1** the four options usually have similar meanings, so the answer depends on **collocation**, **fixed phrases** and **grammar**: which word can be followed by *from… to…*, which takes a *that*-clause, which needs an object. Read the whole sentence, then try each option in the gap aloud in your head.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say each version after the tutor. Notice how the rhythm changes with the register.', tutor: 'arthur', items: [
            { a: 'Should you require further assistance, please do not hesitate to contact us.' },
            { a: 'If you need any more help, just let us know.' },
            { a: 'The launch will need to be postponed.' },
            { a: 'We’re going to have to put the launch off.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'To cut a long story short',
      about: 'Use idioms and fixed phrases with their exact form, their real meaning and the register they belong to.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'An **idiom** is a group of words whose meaning is not the sum of its parts: *a blessing in disguise* is not about blessings or costumes, it means *something that seemed bad but turned out well*. A **fixed phrase** is more transparent but just as frozen: *by and large*, *on the whole*, *as a matter of fact*.\n\nAt C1 three things matter more than knowing a long list. First, the **form is fixed**. You can say *to cut a long story short* but not *to cut a long history short*, and *the tip of the iceberg* but not *the top of the iceberg*. Changing one word usually makes the idiom sound wrong or comic.\n\nSecond, idioms have a **register**. Most are informal or neutral and belong to conversation, articles and stories. In a formal essay or report, one well-chosen idiom can be effective; five in a paragraph sound like a textbook.\n\nThird, an idiom often carries an **attitude**, not just a meaning. *She jumped on the bandwagon* says she joined something popular, but it also suggests she did it without thinking. Choose an idiom when you want that attitude too.' },
          { t: 'table', caption: 'Idioms and fixed phrases worth having', explain: ['head', 'col1', 'col2'], head: ['Idiom', 'Meaning', 'Register and use'], rows: [
            ['a blessing in disguise', 'something bad that turned out well', 'neutral; stories and articles'],
            ['to cut a long story short', 'to tell only the end of a long story', 'informal; speaking'],
            ['the tip of the iceberg', 'a small sign of a much bigger problem', 'neutral; fine in articles and essays'],
            ['a double-edged sword', 'something with both good and bad effects', 'neutral; useful in essays'],
            ['get the wrong end of the stick', 'misunderstand completely', 'informal'],
            ['beat about the bush', 'avoid saying something directly', 'informal; usually negative: *stop beating about the bush*'],
            ['by and large', 'generally, on the whole', 'neutral to formal'],
            ['in the long run', 'over a long period, eventually', 'neutral; very useful in essays'],
          ] },
        ],
        [
          { t: 'text', md: 'Many idioms come from old jobs, sports and stories, which is why they make little sense today. *To learn the ropes* comes from sailing ships, where a new sailor had to learn which rope did what. *To be on the ball* comes from games where you keep your eye on the ball. Knowing the picture behind an idiom helps you to remember its exact words.\n\nIdioms can also be **adapted slightly in grammar** even though their words are fixed. The verb changes tense and the pronoun changes person: *I got the wrong end of the stick*, *she’s always getting the wrong end of the stick*. What you cannot do is replace the nouns or change *the* to *a*.' },
          { t: 'examples', items: [
            { s: 'Losing that job was **a blessing in disguise**: it pushed me to start my own business.', n: 'The idiom sums up the story; the colon explains it.' },
            { s: '**To cut a long story short**, we missed the ferry and slept in the car.', n: 'Speakers use it to skip the boring middle.' },
            { s: 'The complaints we receive are only **the tip of the iceberg**.', n: 'Neutral enough for a report.' },
            { s: 'Social media is **a double-edged sword** for small businesses.', n: 'A useful idiom for introducing both sides in an essay.' },
            { s: '**By and large**, the reforms have been well received.', n: 'A fixed phrase, acceptable in formal writing.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['It was a blessing in disguised.', 'It was a blessing in disguise.', 'The form is fixed: *disguise* is a noun here.'],
            ['This is only the top of the iceberg.', 'This is only the tip of the iceberg.', 'Never change the nouns in an idiom.'],
            ['To make a long story short, we left.', 'To cut a long story short, we left.', '*Make a long story short* is American; British English says *cut*.'],
            ['In the long term run, prices will fall.', 'In the long run, prices will fall.', 'Two fixed phrases mixed: *in the long run* or *in the long term*.'],
          ] },
          { t: 'dialogue', title: 'How did the interview go?', lines: [
            { who: 'Priya', s: 'So, how was the interview? Don’t beat about the bush.' },
            { who: 'Daniel', s: 'To cut a long story short, I didn’t get it.' },
            { who: 'Priya', s: 'Oh no. What happened?' },
            { who: 'Daniel', s: 'I got the wrong end of the stick about the role. They wanted a manager, not a designer.' },
            { who: 'Priya', s: 'Then it might be a blessing in disguise. You’d have hated managing people.' },
            { who: 'Daniel', s: 'True. In the long run, I’d rather keep designing.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each idiom with its meaning.', pairs: [
            ['learn the ropes', 'find out how a job or system works'],
            ['a double-edged sword', 'something with good and bad effects'],
            ['get the wrong end of the stick', 'misunderstand completely'],
            ['the tip of the iceberg', 'a small part of a much bigger problem'],
            ['beat about the bush', 'avoid saying something directly'],
          ] },
          { t: 'ex', kind: 'fix', h: 'Each idiom has one wrong word. Find and fix it.', items: [
            { s: 'The new rules are a [two]-edged sword for farmers.', a: ['double'], why: 'The idiom is *a double-edged sword*.' },
            { s: 'Missing the train turned out to be a blessing in [mask].', a: ['disguise'], why: 'The idiom is *a blessing in disguise*.' },
            { s: 'The scandal is just the [top] of the iceberg.', a: ['tip'], why: 'The idiom is *the tip of the iceberg*.' },
            { s: 'She is always on the [bell] when it comes to deadlines.', a: ['ball'], why: 'The idiom is *on the ball*: alert and quick.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 2): read the text “Words that refuse to die” and write one word in each gap.', items: [
            { q: 'Idioms are among the oldest parts of a language, and many of them have been ___ use for centuries.', a: ['in'], why: '*In use* is a fixed phrase.' },
            { q: 'Their original meaning has often been lost, ___ people continue to use them every day.', a: ['yet', 'but'], why: 'A contrast linker joins the two clauses.' },
            { q: 'Few speakers today know ___ the phrase “to learn the ropes” first came from.', a: ['where'], why: '*Where… came from* is an indirect question about origin.' },
            { q: 'It goes back to the days ___ sailors had to master hundreds of ropes on a ship.', a: ['when'], why: 'A relative adverb after *the days*.' },
            { q: 'An idiom survives ___ long as it still paints a picture in people’s minds.', a: ['as', 'so'], why: '*As long as* = *on condition that*.' },
            { q: 'Learners, ___ the other hand, often find idioms the hardest part of a language.', a: ['on'], why: 'The fixed linker is *on the other hand*.' },
            { q: 'This is not because the words are difficult, but because changing even one of ___ ruins the effect.', a: ['them'], why: 'A pronoun for *the words*.' },
            { q: 'The best advice is to learn each idiom as a whole, ___ than word by word.', a: ['rather'], why: '*Rather than* introduces the option you reject.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 2** there are no options. The missing words are mostly **grammar words**: prepositions, pronouns, relative words, linkers, auxiliaries and parts of fixed phrases (*on the other hand, as long as, rather than*). Read the whole text first, then look at the words on **both** sides of each gap. Only one word goes in each gap, and spelling counts.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor. Keep each idiom together as one unit.', tutor: 'kofi', items: [
            { a: 'To cut a long story short, we missed the last train.' },
            { a: 'Losing that contract was a blessing in disguise.' },
            { a: 'These complaints are only the tip of the iceberg.' },
            { a: 'In the long run, it was the right decision.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'I hope so, if not, so do I',
      about: 'Avoid repeating words with ellipsis and substitution: so, not, do so, one, the auxiliary and the infinitive to.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Natural English hates repetition. When the listener already knows what we mean, we either **leave words out** (that is **ellipsis**) or **replace them with a short word** (that is **substitution**). Learners who repeat everything sound careful but heavy: *Will it rain tomorrow? I think it will rain tomorrow.* A fluent speaker says *I think so*.\n\nThere are five main tools, and each replaces a different kind of thing.\n\n**So** and **not** replace a whole clause after verbs of thinking and hoping: *I hope so, I’m afraid not, I suppose so, I guess not*. **Do**, **does**, **did** and **do so** replace a verb phrase: *She said she’d call, and she did. He was asked to leave and did so immediately.* **One** and **ones** replace a countable noun: *I’d like the blue one.* **The auxiliary** stands alone when the rest is understood: *I haven’t finished yet, but I will.* And **to** stands for a whole infinitive: *I’d love to. You don’t have to if you don’t want to.*' },
          { t: 'table', caption: 'What replaces what', explain: ['head', 'col0', 'col2'], head: ['Tool', 'Example', 'What it replaces'], rows: [
            ['so / not', 'Is she coming? I believe so. / I hope not.', 'a whole clause (that she is coming)'],
            ['do / do so', 'He promised to help, and he did so.', 'a verb phrase (help)'],
            ['one / ones', 'These shoes are nicer than the old ones.', 'a countable noun (shoes)'],
            ['auxiliary', 'I can’t swim, but my sister can.', 'the rest of the verb phrase (swim)'],
            ['to', 'Would you like to join us? I’d love to.', 'the infinitive (join you)'],
            ['so / neither + auxiliary', 'I’m tired. So am I. / I’m not. Neither am I.', 'a whole sentence, with *me too* meaning'],
            ['if so / if not', 'Are you free? If so, call me. If not, never mind.', 'a whole condition'],
          ] },
        ],
        [
          { t: 'text', md: 'At C1 you need the fine points. With **so** and **not**, the negative usually goes on the first verb with *think, believe, expect, imagine*: *I don’t think so* is far more natural than *I think not*, which sounds formal or old-fashioned. But with *hope* and *be afraid* only **not** works: *I hope not*, *I’m afraid not*, never *I don’t hope so*.\n\n**Do so** is more formal than plain *do*, and it is common in written English, especially in instructions and reports: *Candidates who wish to withdraw must do so in writing.* In speech, *do that* or *do it* is more usual.\n\nIn informal speech, whole beginnings disappear: *(Have you) Seen Tom? (It) Sounds great. (I’ll) See you later.* This is **situational ellipsis**, and it belongs only to informal registers. In a formal email, write the full sentence.\n\nFinally, **so** can be fronted for surprise or confirmation: *Look, the bridge has reopened. So it has!* Here *so* + subject + auxiliary means *you are right, I can see that*.' },
          { t: 'examples', items: [
            { s: 'Will the prices go up again? **I expect so.**', n: '*So* replaces *that the prices will go up again*.' },
            { s: 'Is the museum open on Mondays? **I don’t think so.**', n: 'The negative goes on *think*, not on *so*.' },
            { s: 'Did we miss the deadline? **I hope not.**', n: 'With *hope*, use *not*.' },
            { s: 'Anyone wishing to appeal must **do so** within ten days.', n: 'Formal: *do so* = *appeal*.' },
            { s: 'I haven’t read the report yet, but I **will**.', n: 'The auxiliary stands for *read the report*.' },
            { s: 'You’ve had your hair cut! **So I have.**', n: 'Confirming something you had not noticed, with humour.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I don’t hope so.', 'I hope not.', 'With *hope*, the negative goes on *so*: *not*.'],
            ['I’d love.', 'I’d love to.', 'After *love, like, want, hope*, keep the *to*.'],
            ['I think it.', 'I think so.', 'Use *so*, not *it*, to replace a clause.'],
            ['A: I can’t drive. B: So can’t I.', 'A: I can’t drive. B: Neither can I.', 'For a negative, use *neither* or *nor*.'],
            ['These are my old shoes and these are my new.', 'These are my old shoes and these are my new ones.', 'After an adjective, a countable noun needs *one* or *ones*.'],
          ] },
          { t: 'dialogue', title: 'Planning the weekend', lines: [
            { who: 'Emma', s: 'Are you coming to the debate on Saturday?' },
            { who: 'Joe', s: 'I’d like to, but I’m not sure I can. Is it free?' },
            { who: 'Emma', s: 'I think so. If not, it can’t be much.' },
            { who: 'Joe', s: 'Will Clara be there?' },
            { who: 'Emma', s: 'I hope not. She talks over everyone.' },
            { who: 'Joe', s: 'So she does. Fine, I’ll come, and if Clara starts, I’ll leave.' },
            { who: 'Emma', s: 'So will I.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the reply that avoids repetition correctly.', items: [
            { q: 'Will the shops be open on Sunday? I don’t think ___.', o: ['so', 'it', 'not'], why: '*I don’t think so*: *so* replaces the clause.' },
            { q: 'Have we lost the contract? I hope ___.', o: ['not', 'so not', 'no'], why: 'With *hope*, use *not* for a negative.' },
            { q: 'Would you like to come with us? I’d love ___.', o: ['to', 'it', 'so'], why: '*To* stands for the infinitive *to come*.' },
            { q: 'Residents who wish to object must ___ in writing.', o: ['do so', 'make so', 'do it so'], why: 'Formal *do so* replaces *object*.' },
            { q: 'I’ve never been to Japan. ___ have I.', o: ['Neither', 'So', 'Either'], why: 'After a negative statement: *Neither have I*.' },
            { q: 'There might be a delay. If ___, we will contact you.', o: ['so', 'it', 'yes'], why: '*If so* = *if there is a delay*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'Is he coming? I [don’t hope so].', a: ['hope not'], why: 'With *hope*, the negative form is *I hope not*.' },
            { s: 'You don’t have to come if you don’t [want].', a: ['want to'], why: 'Keep *to* after *want* at the end of a clause.' },
            { s: 'I prefer the red jacket to the black [it].', a: ['one'], why: '*One* replaces a singular countable noun.' },
            { s: 'Will it be sunny? I [think it].', a: ['think so', 'hope so', 'expect so'], why: 'Use *so* to replace a clause.' },
          ] },
        ],
        [
          { t: 'text', md: 'Ellipsis and substitution are what make discussion sound like discussion. In **C1 Advanced Speaking Part 3**, you and a partner talk about a question with several prompts for about two minutes, then decide something together in about one more. The examiner listens for how you **respond to each other**: agreeing, disagreeing politely, adding and building on ideas. Short replies such as *I suppose so*, *I’d have thought not*, *If so, then…* and *So would I* keep the conversation moving without repeating your partner’s words.' },
          { t: 'dialogue', title: 'Speaking Part 3: how can people communicate better at work?', lines: [
            { who: 'Helen', s: 'Shall we start with email? Do you think it causes more problems than it solves?' },
            { who: 'Owen', s: 'In some offices, I suspect so. People copy everyone in, and messages get misread.' },
            { who: 'Helen', s: 'I’d agree, although face-to-face meetings aren’t perfect either.' },
            { who: 'Owen', s: 'No, they aren’t, especially when they could have been an email.' },
            { who: 'Helen', s: 'So which do you think would make the biggest difference?' },
            { who: 'Owen', s: 'Training managers to listen, I’d say. If not, nothing else will really change.' },
            { who: 'Helen', s: 'I think so too. Shall we go for that?' },
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Speaking Part 3): your partner says each sentence. Choose the most natural reply.', items: [
            { q: 'I think online meetings will replace most face-to-face meetings.', o: ['I’m not sure they will, at least not for difficult conversations.', 'I am not sure online meetings will replace most face-to-face meetings.', 'Yes. Next point.'], why: 'The auxiliary *will* avoids repeating the whole idea, and the reply adds a reason.' },
            { q: 'Do you think language classes should be compulsory for all employees?', o: ['I’d have thought not, unless the job really needs it.', 'I don’t hope so.', 'I think it.'], why: '*I’d have thought not* is a polite, tentative disagreement.' },
            { q: 'Could the company afford to train everyone?', o: ['Possibly not. If not, they could start with managers.', 'Possibly no. If no, they could start with managers.', 'It could afford to train everyone or not.'], why: '*Possibly not* and *If not* replace whole clauses.' },
            { q: 'I’d choose better listening skills as the most important one.', o: ['So would I. It affects everything else.', 'So I would.', 'Neither would I.'], why: '*So would I* agrees with a positive statement.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Speaking Part 3** there is no right answer, and you do not need to agree. Marks come from **interaction**: inviting your partner in (*What’s your take on…?*), reacting to what they actually said, and moving towards a decision. Avoid long speeches; three or four sentences, then pass the turn.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these replies after the tutor. They are short, but each one replaces a whole idea.', tutor: 'lena', items: [
            { a: 'I’d have thought so, but I may be wrong.' },
            { a: 'I hope not. That would be a real shame.' },
            { a: 'I haven’t tried it yet, but I will.' },
            { a: 'If so, we should decide quickly.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'Is the internet ruining English?',
      about: 'Read a long article on how the internet changes language, follow the writer’s argument, and notice its register.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'This lesson brings the unit together in a long text like those in **C1 Advanced Reading and Use of English Part 5**. The writer moves between a neutral, journalistic register and a few informal touches, uses idioms for effect, and avoids repetition with substitution. Read it once for the argument, then again for the detail. At C1 many questions ask about the writer’s **attitude** and the **purpose** of a paragraph, not just facts.' },
          { t: 'reading', title: 'Is the internet ruining English?', md: 'Every generation seems convinced that the young are ruining the language. Before the internet, the blame fell on television, and before television on the telegraph, which was accused of reducing elegant prose to clipped fragments. Today the accused is the smartphone, and the evidence offered is familiar: missing capital letters, abbreviations, and sentences that stop before they have properly begun.\n\nIt is worth asking, however, what exactly is being lost. Much online writing is not a degraded form of formal prose at all; it is something closer to **speech written down**. For most of history, casual conversation vanished the moment it was spoken. Now a great deal of it is typed, and so for the first time we can see, in permanent form, how people actually talk. What looks like carelessness is often a set of quite precise signals.\n\nConsider the full stop. In a formal letter it is neutral, but in a short message a final full stop can read as cold or even irritated. *Fine.* says something very different from *fine*. Writers have simply found, without any committee deciding it, ways of putting tone of voice back into text, the very thing written English had always struggled to do. Repeated letters, capitals for emphasis and small pictures all do the same job.\n\nNone of this means that standards are irrelevant. A job application written like a message to a friend will still go straight into the bin, and rightly so. But the evidence suggests that most young writers know this perfectly well. Teachers who examine students’ essays tend to report that the problems they find, such as weak structure and limited vocabulary, are much the same as they were before smartphones existed. Abbreviations rarely cross over into formal work, and when they do, they are usually corrected quickly.\n\nIf anything, the internet has made many people more aware of register, not less. Someone who switches several times a day between a group chat, a work email and a public post is practising exactly the skill that good writing requires: choosing the right voice for the reader. That is hardly a language in decline. It may, in the long run, prove to be a blessing in disguise.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 5): read the article and choose the best answer.', items: [
            { q: 'Why does the writer mention television and the telegraph in the first paragraph?', o: ['To show that worries about new technology and language are not new.', 'To argue that older technologies did more damage than smartphones.', 'To explain where modern abbreviations come from.'], why: 'The writer lists earlier targets of the same complaint: *Every generation seems convinced…*' },
            { q: 'What does the writer suggest about much online writing in the second paragraph?', o: ['It records informal speech that used to leave no trace.', 'It is a poorer version of formal written English.', 'It has replaced spoken conversation for most people.'], why: '*Something closer to speech written down… for the first time we can see… how people actually talk.*' },
            { q: 'The example of the full stop is used to show that', o: ['online writers have developed ways of expressing tone.', 'punctuation is no longer taught properly.', 'short messages are usually unfriendly.'], why: '*Ways of putting tone of voice back into text.*' },
            { q: 'What is the writer’s attitude to the job application written like a message?', o: ['It is right that such an application would fail.', 'Employers should be more flexible about style.', 'Such applications are now very common.'], why: '*Will still go straight into the bin, and rightly so.*' },
            { q: 'According to the fourth paragraph, what do teachers tend to say?', o: ['The main weaknesses in essays have not really changed.', 'Abbreviations are the biggest problem in students’ essays.', 'Students now write better essays than before.'], why: '*Much the same as they were before smartphones existed.*' },
            { q: 'In the final paragraph, the writer argues that switching between online contexts', o: ['trains the same skill that good writing depends on.', 'confuses people about which register to use.', 'should be limited for younger writers.'], why: '*Practising exactly the skill that good writing requires.*' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 5** the questions follow the order of the text, and the last one may be about the text as a whole. The correct option almost always **paraphrases** the text; an option that repeats a striking word from the passage is often a trap. For attitude questions, look for small signals such as *rightly so*, *hardly*, *if anything*.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the words and phrases from the article with their meaning.', pairs: [
            ['clipped', 'cut short, with words left out'],
            ['degraded', 'made worse in quality'],
            ['go straight into the bin', 'be rejected immediately'],
            ['cross over into', 'start appearing in a different area'],
            ['if anything', 'used to suggest the opposite may be true'],
          ] },
        ],
        [
          { t: 'text', md: 'In **C1 Advanced Speaking Part 4**, the examiner asks you broader questions linked to the Part 3 topic. Answers should be developed: an opinion, a reason, an example and, ideally, a recognition of the other side. Use the tools from this unit: a register that suits a polite discussion, perhaps one idiom, and substitution to avoid repeating the question.\n\n*Do you think people write less carefully than they used to?* A strong answer: *I’m not convinced they do, actually. They write far more than they used to, so we notice the mistakes more. In formal situations most people still make an effort, although I suppose there are exceptions.*' },
          { t: 'ex', kind: 'speak', h: 'Say these discussion answers after the tutor.', tutor: 'sofia', items: [
            { a: 'I’m not convinced they do, actually.' },
            { a: 'People write far more than they used to.' },
            { a: 'If anything, the internet has made us more aware of register.' },
            { a: 'In the long run, it may prove to be a blessing in disguise.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'Choose the word or phrase that fits the register of the sentence.', items: [
      { q: 'Dear Sir, I am writing to ___ about the vacancy advertised on your website.', o: ['enquire', 'ask around', 'check out'], why: 'A formal letter needs *enquire*.' },
      { q: 'The ceremony will ___ at ten o’clock in the main hall.', o: ['commence', 'kick off', 'get going'], why: 'A formal announcement: *commence*.' },
      { q: 'Hey, any chance you could ___ me a hand on Saturday?', o: ['give', 'provide', 'render'], why: 'Informal idiom: *give someone a hand*.' },
      { q: 'Should you ___ further information, please contact the office.', o: ['require', 'fancy', 'be after'], why: 'Formal: *require*.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Choose the correct idiom.', items: [
      { q: 'These few complaints are just the ___ of the iceberg.', o: ['tip', 'top', 'peak'], why: 'The fixed form is *the tip of the iceberg*.' },
      { q: 'Losing the match was a blessing in ___; the team finally changed coach.', o: ['disguise', 'disguised', 'mask'], why: 'The fixed form is *a blessing in disguise*.' },
      { q: 'To ___ a long story short, we got home at dawn.', o: ['cut', 'make', 'keep'], why: 'British English: *to cut a long story short*.' },
      { q: 'Tourism is a double-___ sword for small islands.', o: ['edged', 'sided', 'bladed'], why: 'The fixed form is *a double-edged sword*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete each reply with one word.', items: [
      { q: 'Is the library open today? I don’t think ___.', a: ['so'], why: '*So* replaces the clause.' },
      { q: 'Will it rain at the wedding? I hope ___.', a: ['not'], why: 'With *hope*: *I hope not*.' },
      { q: 'Would you like to stay for dinner? I’d love ___.', a: ['to'], why: '*To* stands for the infinitive.' },
      { q: 'I haven’t been to Lisbon. ___ have I.', a: ['Neither', 'Nor'], why: 'Agreeing with a negative.' },
      { q: 'The flight may be late. If ___, we’ll meet at the hotel.', a: ['so'], why: '*If so* = *if it is late*.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Complete the second sentence so that it has a similar meaning to the first. Use the word given and between three and six words.', items: [
      { q: 'If you need any more help, please contact us.', cue: 'require', a: ['Should you require any further help, please contact us.', 'Should you require any more help, please contact us.', 'Should you require further help, please contact us.', 'Should you require any further assistance, please contact us.'], why: '*Should you require* is the formal, inverted conditional.' },
      { q: 'I misunderstood what she meant completely.', cue: 'end', a: ['I got the wrong end of the stick.', 'I got hold of the wrong end of the stick.'], why: '*Get the wrong end of the stick* = misunderstand completely.' },
      { q: 'Generally speaking, the changes have been popular.', cue: 'large', a: ['By and large, the changes have been popular.'], why: '*By and large* = *generally*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'Will the bus be late? I [don’t hope so].', a: ['hope not'], why: 'With *hope*: *I hope not*.' },
      { s: 'Dear Professor Hill, could you [give me a hand] with my application?', a: ['help me', 'assist me'], why: 'An informal idiom breaks a formal email.' },
      { s: 'I like these trainers more than the old [it].', a: ['ones'], why: '*Ones* replaces a plural countable noun.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True, false or not given, according to the article in lesson 4.', ng: true, items: [
      { q: 'The writer thinks the full stop has become meaningless in short messages.', a: 'f', why: 'It carries meaning: a final full stop can read as cold.' },
      { q: 'The writer believes formal standards still matter.', a: 't', why: '*None of this means that standards are irrelevant.*' },
      { q: 'The writer has taught English in schools.', a: 'ng', why: 'The article does not say what the writer does.' },
    ] },
  ],
};
