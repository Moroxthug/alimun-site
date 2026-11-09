// English C2, unit 15, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Language and the mind: what is said and what is meant (connotation, implicature, presupposition), translating meaning
// rather than words, framing, priming and nudges in advertising and politics, and a talk on whether language shapes
// thought. Each lesson: a full explanation, exercises from controlled to free, a speaking task and a task in the format
// of C2 Proficiency. Exam parts: Listening Part 1 (lesson 1), Reading and Use of English Part 2 (lesson 2),
// Writing Part 2, an article (lesson 3), Listening Part 2 (lesson 4).
export const UNIT = {
  id: 'u15',
  title: 'Language and the mind',
  goal: 'Hear what people mean as well as what they say, translate meaning rather than words, recognise framing and nudges in advertising and politics, and follow a talk on whether the language we speak shapes the way we think.',
  art: 'owl',
  tags: { skills: ['vocabulary', 'listening', 'writing', 'speaking'], topics: ['meaning', 'connotation', 'implicature', 'presupposition', 'translation', 'false-friends', 'idioms', 'register', 'persuasion', 'framing', 'advertising', 'linguistic-relativity'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'What is said and what is meant',
      about: 'Read the layers under a sentence: connotation, implicature and presupposition.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Every sentence carries more than its dictionary meaning. The **denotation** of a word is what it refers to: *slim*, *skinny* and *thin* can all describe the same body. Their **connotation** is the feeling that comes with them: *slim* is approving, *skinny* is mildly critical, *thin* is close to neutral. At C2 you choose between such words without thinking, and you also notice when someone else has chosen one on purpose.\n\nBelow connotation lie two quieter layers. **Implicature** is what a speaker means but does not say: *Some of the guests enjoyed the food* does not state that others disliked it, yet that is exactly what a listener will understand. **Presupposition** is what a sentence takes for granted before it says anything: *Have you stopped arguing with your sister?* assumes that you used to argue, whether you answer yes or no.' },
          { t: 'table', caption: 'Four layers of meaning', explain: ['head', 'col0', 'col1'], head: ['Layer', 'What it is', 'Example'], rows: [
            ['denotation', 'what the words refer to', 'He spent very little money.'],
            ['connotation', 'the feeling or judgement the word carries', 'He was thrifty. / He was stingy.'],
            ['implicature', 'what the speaker means by saying it in this way, here', 'Well, the wine was lovely. (The food was not.)'],
            ['presupposition', 'what the sentence assumes is already true', 'She regrets leaving. (She left.)'],
          ] },
        ],
        [
          { t: 'text', md: 'Why does implicature work? Because listeners assume that a speaker is **cooperating**: saying as much as is needed, no more, saying what they believe is true, staying relevant and being clear. The philosopher Paul Grice described these expectations in the last century, and they still explain a great deal.\n\nWhen a speaker seems to break one of them, the listener does not conclude that the speaker is careless. They look for a reason, and the reason is the hidden meaning. Grice’s own example is a reference letter for a philosophy student that says only that his English is excellent and he attended classes regularly. The letter says nothing false. But a teacher who says so little about the work itself is clearly saying something about it.\n\nThe same mechanism drives **understatement** (*It was not entirely a success* for a disaster), **irony** (*Lovely weather* in a storm), **damning with faint praise** (*The cover is beautiful* about a book) and the indirect refusal (*I have an early start tomorrow* as an answer to *Shall we have another drink?*).' },
          { t: 'examples', items: [
            { s: 'A: Was the presentation good? B: **The slides were very colourful.**', n: 'B praises something minor and avoids the question: the presentation was weak.' },
            { s: '**Some** of the students passed.', n: 'Implies that not all of them did, although *some* is true even if all passed.' },
            { s: 'A: Are you coming to the party? B: **I’ve got an exam on Monday.**', n: 'An indirect refusal: the listener supplies the link.' },
            { s: 'He **managed to** finish the report.', n: 'Presupposes that it was difficult and that he tried.' },
            { s: 'I’m sorry **if** anyone was offended.', n: 'The *if* avoids admitting that anyone was offended at all.' },
          ] },
        ],
        [
          { t: 'text', md: 'Presupposition hides in small words, called **triggers**. Because a presupposition is assumed rather than stated, it is hard to challenge: to reject it you must step outside the conversation and say *Wait, I never said I used to argue with her.* This is why loaded questions work in interviews and courtrooms, and why careful readers notice them.\n\nThe commonest triggers are verbs of change (*stop, start, continue*), factive verbs that treat what follows as fact (*realise, regret, know, discover*), *manage to* and *fail to*, words of repetition (*again, another, return*), *even* and *still*, and the definite article itself: *the problem with the plan* assumes there is a problem.' },
          { t: 'table', caption: 'Presupposition triggers', explain: ['head', 'col0', 'col2'], head: ['Trigger', 'Example', 'What it takes for granted'], rows: [
            ['stop, start, continue', 'They have started charging for bags.', 'They did not charge before.'],
            ['realise, regret, discover', 'He realised he had been misled.', 'He had been misled.'],
            ['manage to, fail to', 'She failed to win the vote.', 'She tried to win it.'],
            ['again, another, return', 'Prices have risen again.', 'They rose before.'],
            ['the + noun', 'The cause of the delay is unclear.', 'There was a delay.'],
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['Answering only the literal question: “Yes, I can pass the salt.”', 'Passing the salt.', '*Can you…?* is a request, not a question about ability.'],
            ['Taking “Not bad” as a complaint', 'Hearing it as mild praise', 'British understatement: *not bad* often means *good*.'],
            ['I regret that I didn’t lie. (meaning: I lied)', 'I regret lying.', '*Regret* presupposes what follows it is true.'],
            ['Answering a loaded question with yes or no', 'Challenging its assumption', '*Have you stopped…?* traps you either way.'],
            ['Using skinny as a compliment', 'Using slim or slender', 'Same denotation, different connotation.'],
          ] },
          { t: 'dialogue', title: 'After the interview', lines: [
            { who: 'Hannah', s: 'So how did the interview go?' },
            { who: 'Callum', s: 'The building is very impressive. And the coffee was excellent.' },
            { who: 'Hannah', s: 'That bad?' },
            { who: 'Callum', s: 'Not a disaster. But when the director said they had “several very strong candidates”, I don’t think she was including me.' },
            { who: 'Hannah', s: 'Did she say when they would let you know?' },
            { who: 'Callum', s: 'She said I’d hear “in due course”. In my experience, in due course is where applications go to retire.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What does the speaker imply?', items: [
            { q: 'A: Did you like my brother? B: He certainly has a lot of opinions.', o: ['B found the brother tiresome.', 'B admired the brother’s knowledge.', 'B did not meet the brother.'], why: 'A neutral fact chosen instead of praise: faint criticism.' },
            { q: 'A: Is the new manager any good? B: She’s always very punctual.', o: ['B has little positive to say about her work.', 'B thinks she is excellent.', 'B has not met her yet.'], why: 'Praising something minor avoids the real question, like Grice’s reference letter.' },
            { q: 'A: Shall we try that new restaurant? B: I had lunch there last week.', o: ['B probably does not want to go.', 'B wants to go again soon.', 'B has never eaten there.'], why: 'An answer that seems off the point invites the listener to find the link: a polite refusal.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the word or words that trigger a presupposition.', items: [
            { s: 'The minister has [stopped] defending the policy.', why: '*Stopped* assumes he defended it before.' },
            { s: 'She [regrets] signing the contract.', why: '*Regret* treats the signing as fact.' },
            { s: 'He [failed to] convince the committee.', why: '*Fail to* assumes he tried.' },
            { s: 'The trains are late [again].', why: '*Again* assumes they were late before.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In C2 listening, many questions ask **what a speaker means or feels**, not what they say. When an answer option repeats the speaker’s words exactly, be suspicious. Listen for what is avoided, what is praised faintly and what is taken for granted.' },
        ],
        [
          { t: 'dialogue', title: 'Extract one: two colleagues discuss an email', lines: [
            { who: 'Nadia', s: 'Did you read Paul’s email? “A few small adjustments to the timeline.”' },
            { who: 'Owen', s: 'I did. I read it twice, which is never a good sign.' },
            { who: 'Nadia', s: 'When Paul says small, he means the launch has slipped to next spring and nobody wants to put that in writing.' },
            { who: 'Owen', s: 'You may be right. Though to be fair to him, he can hardly announce a delay before the board has agreed to one.' },
            { who: 'Nadia', s: 'Then he could say nothing at all. Calling it small just means we will all spend the week decoding it.' },
            { who: 'Owen', s: 'True. I’d rather have bad news plainly than good news in code. Still, in his position I’d probably have written exactly the same thing.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Listening Part 1): you will hear three different extracts. For questions on each, choose the answer which fits best according to what you hear. Extract one.', items: [
            { q: 'What does Nadia believe the email really means?', o: ['The project is facing a serious delay.', 'The timeline needs only minor changes.', 'The board has rejected the project.'], why: '*Small* is code: *the launch has slipped to next spring*.' },
            { q: 'How does Owen feel about the email?', o: ['He dislikes its vagueness but understands why it was written.', 'He thinks it was perfectly clear.', 'He believes Paul was being deliberately dishonest.'], why: '*I’d rather have bad news plainly… Still, in his position I’d probably have written exactly the same thing.*' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'Extract two: a radio book review', lines: [
            { who: 'Presenter', s: 'Margaret, you’ve been reading the new novel by Edwin Marsh.' },
            { who: 'Margaret', s: 'I have, all six hundred pages of it. The cover is lovely, and you can tell he has done an enormous amount of research.' },
            { who: 'Presenter', s: 'That sounds like a very careful answer.' },
            { who: 'Margaret', s: 'Well, research isn’t the same thing as a story. Every chapter tells you exactly what everyone is feeling, so there is nothing left for the reader to do.' },
            { who: 'Presenter', s: 'Some readers like that kind of clarity.' },
            { who: 'Margaret', s: 'And they will be very happy. I would simply point out that his first novel trusted us a great deal more, and it was half the length.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Listening Part 1): extract two. Choose the answer which fits best.', items: [
            { q: 'What is Margaret’s overall opinion of the novel?', o: ['She is disappointed by it.', 'She admires it without reservation.', 'She has not finished reading it.'], why: 'She praises the cover and the research: faint praise, which the presenter notices.' },
            { q: 'What is her main criticism of the book?', o: ['It leaves the reader too little to interpret.', 'Its historical research is inaccurate.', 'Its plot is too difficult to follow.'], why: '*There is nothing left for the reader to do.*' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'Extract three: a podcast on apologies', lines: [
            { who: 'Interviewer', s: 'You’ve written about what you call the non-apology. What is it?' },
            { who: 'Ravi', s: 'A sentence with the shape of an apology but none of its content. “I’m sorry if anyone was offended” is the classic. Notice the if. It doesn’t admit that anyone was offended, or that the speaker did anything at all.' },
            { who: 'Interviewer', s: 'But surely listeners can tell.' },
            { who: 'Ravi', s: 'Most can, which is why it so often backfires. A real apology names the act and accepts responsibility for it: “I’m sorry I spoke to you like that.” The odd thing is that the real one is usually shorter.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Listening Part 1): extract three. Choose the answer which fits best.', items: [
            { q: 'According to Ravi, what makes “I’m sorry if anyone was offended” a non-apology?', o: ['It avoids accepting that anything wrong happened.', 'It is too short to sound sincere.', 'It blames the listener directly.'], why: 'The *if* means it presupposes nothing: no offence, no act.' },
            { q: 'What point does Ravi make about genuine apologies?', o: ['They are often more concise than evasive ones.', 'They rarely succeed in public.', 'They should always include an explanation.'], why: '*The real one is usually shorter.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor, with the tone that carries the hidden meaning.', tutor: 'sofia', items: [
            { a: 'Well, the slides were very colourful.' },
            { a: 'Let’s just say the meal was not memorable.' },
            { a: 'I’m not entirely convinced it will work.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'Translating meaning, not words',
      about: 'See why word-for-word translation fails: false friends, idioms with no twin and register that shifts between languages.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Languages do not divide the world in the same places. One language has a single word where another has two; one expects a verb where another uses a noun; one marks politeness in the grammar and another in the choice of words. This is why **word-for-word translation** fails, and why even advanced learners still make errors that come from their first language rather than from English.\n\nThe most familiar trap is the **false friend**: a word that looks like a word in your language but means something else. Some are complete strangers (*embarrassed* is not the Spanish *embarazada*, which means pregnant). More dangerous are the **partial** false friends, which overlap in one meaning but not in others. *Actually* exists in English, but it means *in fact*, not *at the moment*, which is what *actuellement* (French) and *actualmente* (Spanish and Portuguese) mean.' },
          { t: 'table', caption: 'False friends that survive into advanced English', explain: ['head', 'col1', 'col3'], head: ['English word', 'What it means', 'Looks like', 'What that means'], rows: [
            ['actually', 'in fact, really', 'actuellement, actualmente, attualmente', 'currently, at the moment'],
            ['eventually', 'in the end, after a long time', 'eventualmente, éventuellement', 'possibly, if necessary'],
            ['sensible', 'showing good judgement', 'sensible (French, Spanish), sensibel', 'sensitive'],
            ['sympathetic', 'understanding someone’s difficulty', 'sympathique, simpático', 'nice, friendly'],
            ['assist', 'help', 'assister à, asistir a', 'attend'],
            ['pretend', 'act as if something is true', 'pretender, prétendre', 'intend, try to, or claim'],
            ['deception', 'deliberately making someone believe a lie', 'déception, decepción', 'disappointment'],
          ] },
        ],
        [
          { t: 'text', md: '**Idioms** pose a different problem. When you meet one, there are three possibilities. Sometimes your language has a near twin with the same image (*to have your head in the clouds* exists in many languages). Sometimes it has an idiom with the same meaning but a **different image**: English rain falls as *cats and dogs*, French rain as ropes (*il pleut des cordes*); where English says *it’s all Greek to me*, a German speaker *only understands train station* (*ich verstehe nur Bahnhof*). And sometimes there is **no idiom at all**, and the translator must paraphrase.\n\nThe skilled translator looks for the **function** of the idiom, not its picture. *In bocca al lupo* (Italian, literally *in the wolf’s mouth*) is said before an exam or a performance, so its English equivalent is *good luck* or *break a leg*, not anything about wolves. A literal version may be charming in a novel, where the reader enjoys the foreignness, but it is a mistake in a business email.' },
          { t: 'examples', items: [
            { s: 'Ich verstehe nur Bahnhof. → **It’s all Greek to me.**', n: 'Same function, different image.' },
            { s: 'Il pleut des cordes. → **It’s pouring.** / **It’s raining cats and dogs.**', n: 'The plain verb is often more natural than the idiom.' },
            { s: 'In bocca al lupo! → **Good luck!** / **Break a leg!**', n: 'Translate what the phrase does: wish someone success.' },
            { s: 'Estar en las nubes → **to have your head in the clouds**', n: 'A near twin: the image survives.' },
          ] },
        ],
        [
          { t: 'text', md: '**Register** also shifts between languages. Many languages mark formality in grammar: French *tu* and *vous*, German *du* and *Sie*, Spanish *tú* and *usted*. English has only *you*, so it shows formality through **vocabulary, indirectness and length**: *Could I possibly ask you to…* rather than a different pronoun.\n\nConventions differ too. A formal German business letter opening *Sehr geehrte Damen und Herren* becomes *Dear Sir or Madam* in English, but much English business correspondence today is less formal than its equivalents elsewhere, so a translation that keeps every courtesy formula can sound stiff or even cold.\n\nThe principle behind all of this is simple to say and hard to practise: **translate the effect on the reader**, not the words on the page.' },
          { t: 'table', caption: 'Common mistakes from translation', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I assisted the conference.', 'I attended the conference.', '*Assist* means help.'],
            ['Actually I live in Lisbon, but I am moving.', 'At the moment I live in Lisbon, but I am moving.', '*Actually* means *in fact*, not *currently*.'],
            ['She is very sympathetic, everyone likes her.', 'She is very nice, everyone likes her.', '*Sympathetic* means understanding, not friendly.'],
            ['Thank you for your informations.', 'Thank you for the information.', '*Information* is uncountable in English.'],
            ['I pretend to finish by Friday.', 'I intend to finish by Friday.', '*Pretend* means act as if.'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'Two translators at work', lines: [
            { who: 'Elena', s: 'The client wants the slogan translated literally. “Our coffee wakes the lion in you.”' },
            { who: 'Marcus', s: 'In English that sounds as if the coffee might eat you.' },
            { who: 'Elena', s: 'Exactly. In the original it’s a set phrase about finding your courage. Nobody hears a lion at all.' },
            { who: 'Marcus', s: 'Then we translate the courage, not the lion. Something like “Coffee for the brave”?' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Each sentence was translated word for word. Find and fix the mistake.', items: [
            { s: 'Over a hundred people [assisted] the opening of the exhibition.', a: ['attended'], why: '*Attend* an event; *assist* means help.' },
            { s: 'The results were a real [deception] after so much work.', a: ['disappointment'], why: '*Disappointment*; *deception* means deliberately misleading.' },
            { s: 'She [pretends] to apply for the job next year.', a: ['intends', 'plans', 'is planning'], why: '*Intend*; *pretend* means act as if.' },
            { s: 'Could you send me more [informations] about the course?', a: ['information'], why: '*Information* has no plural.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best English for each phrase, translating its function.', items: [
            { q: 'An Italian friend says “In bocca al lupo!” before your exam. In English you would say:', o: ['Good luck!', 'Into the wolf’s mouth!', 'Be careful of wolves!'], why: 'The phrase wishes success; the image does not travel.' },
            { q: 'A German colleague says “Ich verstehe nur Bahnhof.” In English she means:', o: ['It’s all Greek to me.', 'I only understand the station.', 'I am going to the station.'], why: 'An idiom for not understanding anything.' },
            { q: 'The best translation of a formal letter opening for a British client today is usually:', o: ['Dear Ms Clarke,', 'Most honoured and esteemed Madam,', 'Hi there Clarke!'], why: 'Formal but not ceremonious: the English convention.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 2): read the text about translation and think of the word which best fits each gap. Use only one word in each gap.', items: [
            { q: 'Anyone ___ has tried to translate a joke knows how quickly the humour disappears.', a: ['who', 'that'], why: 'A relative pronoun for a person.' },
            { q: 'The difficulty lies not so much in the words ___ in what they take for granted.', a: ['as'], why: '*Not so much X as Y*.' },
            { q: 'A good translator asks what the original does to its reader, ___ than what each word means.', a: ['rather'], why: '*Rather than* introduces the alternative that is rejected.' },
            { q: '___ is this more obvious than in poetry, where sound and sense are tied together.', a: ['Nowhere'], why: 'A negative adverbial at the front, then inversion: *Nowhere is this*.' },
            { q: 'Some translators go so ___ as to say that a poem can only be rewritten, never translated.', a: ['far'], why: '*Go so far as to* say: an extreme claim.' },
            { q: 'Be that as it ___, readers still need translations, and most of them are remarkably good.', a: ['may'], why: 'The fixed formal phrase *be that as it may*.' },
            { q: 'No ___ had the novel appeared in English than critics began comparing it with the original.', a: ['sooner'], why: '*No sooner had… than*.' },
            { q: 'A smooth translation is not necessarily faithful, ___ is a faithful one always readable.', a: ['nor'], why: 'After a negative clause, *nor* + inversion.' },
          ] },
          { t: 'tip', art: 'parrot', md: 'In **Part 2** at C2 the gaps often sit inside **fixed formal patterns**: *not so much… as*, *go so far as to*, *be that as it may*, *no sooner… than*, *nor* with inversion. Read the whole sentence, and the one after it, before you decide: the word that fits the gap often depends on a word several places away.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'omar', items: [
            { a: 'We translate the effect on the reader, not the words on the page.' },
            { a: 'Nowhere is this more obvious than in poetry.' },
            { a: 'Be that as it may, readers still need translations.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'Framing, priming and the nudge',
      about: 'Recognise how the language of advertising and politics steers our choices, and write an article about it.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'The same fact can be presented in different ways, and the way it is presented changes how we react. This is **framing**. A yoghurt labelled *ninety per cent fat-free* sounds healthier than one labelled *ten per cent fat*, although they are the same pot. A treatment described by its survival rate tends to sound more attractive than the same treatment described by its death rate. Nothing false has been said; the listener has simply been placed somewhere different to look at the facts.\n\nFraming also works through **metaphor**. Call a tax cut *tax relief* and you have already described the tax as a burden from which people need relieving. Describe migration as a *flood* and you have made it a natural disaster. Describe a debate as a *battle* and compromise begins to sound like surrender. Once a metaphor is accepted, arguments inside it feel natural and arguments outside it feel strange.' },
          { t: 'examples', items: [
            { s: '**Ninety per cent fat-free** / **ten per cent fat**', n: 'A positive and a negative frame for the same fact.' },
            { s: 'a **tax burden** / **tax relief**', n: 'The metaphor makes the tax something heavy that hurts.' },
            { s: '**pre-owned** / **second-hand**', n: 'A euphemism that removes the idea of being used.' },
            { s: 'The company is **rightsizing**.', n: 'A euphemism for cutting jobs.' },
          ] },
        ],
        [
          { t: 'text', md: '**Priming** is subtler. A word or image can make related ideas easier to reach for a short time afterwards: a holiday advert full of words like *fresh, pure* and *open* prepares you to think of the product as healthy before it makes any claim at all. How strong such effects are is debated, and some well-known findings have not been repeated, so treat dramatic claims about priming with care.\n\nA **nudge** is a change in how a choice is presented that makes one option more likely without forbidding the others. Putting fruit at eye level in a canteen is a nudge. So is making saving for a pension the **default**, so that employees must actively opt out rather than opt in. The defenders of nudges argue that every choice has to be presented somehow, so it might as well be presented helpfully. Critics reply that people are steered without noticing, which raises the question of who decides what is helpful.' },
          { t: 'table', caption: 'Devices of persuasion', explain: ['head', 'col0', 'col1'], head: ['Device', 'How it works', 'Typical language'], rows: [
            ['framing', 'presents a fact from a chosen angle', 'ninety per cent effective, only one in ten fail'],
            ['metaphor', 'makes an issue look like something else', 'a burden, a flood, a war on'],
            ['anchoring', 'a first number makes the next seem small or large', 'was 200, now only 120'],
            ['scarcity', 'suggests the chance will disappear', 'while stocks last, for a limited time'],
            ['default', 'one option happens unless you act', 'you will be enrolled automatically'],
            ['weasel words', 'sound like a promise but promise little', 'helps, up to, can, virtually, may reduce'],
          ] },
        ],
        [
          { t: 'text', md: 'Advertising relies heavily on **weasel words**: words that seem to make a claim while leaving a way out. *Helps reduce wrinkles* does not say it reduces them; *up to fifty per cent off* allows one item at fifty and the rest at five; *virtually spotless* admits there are spots. Comparatives without a comparison are another favourite: *now with more flavour* (more than what?).\n\nPolitical language uses the same tools with higher stakes. **Euphemism** softens what is unpleasant (*collateral damage* for civilian deaths, *let go* for dismissed). **Passive and nominalised** forms hide who acted (*mistakes were made*; *there has been a reduction in services*). **Loaded labels** decide the argument before it starts: the same group may be called *protesters*, *activists* or *a mob*.\n\nNone of this means that every persuasive sentence is dishonest. Persuasion is how people who disagree reach decisions. The C2 skill is to **notice** the device, name it calmly and judge whether the claim survives without it.' },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['The cream reduces wrinkles. (reporting “helps reduce”)', 'The makers say it helps reduce wrinkles.', '*Helps* is a weaker claim; report it exactly.'],
            ['Everything is fifty per cent off.', 'Some items are up to fifty per cent off.', '*Up to* gives a maximum, not an average.'],
            ['This proves that adverts manipulate us.', 'This suggests that adverts can influence us.', 'Do not overstate what evidence shows.'],
            ['manipulative used for any persuasion', 'persuasive for fair argument, manipulative for unfair', 'The connotations are very different.'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'Reading the small print', lines: [
            { who: 'Laura', s: 'Look at this: “Clinically proven to help support healthy-looking skin.”' },
            { who: 'Owen', s: 'That is a magnificent sentence. Proven to help support. Not even skin, healthy-looking skin.' },
            { who: 'Laura', s: 'So what has actually been proven?' },
            { who: 'Owen', s: 'Possibly that people who used it said their skin looked fine. Which they might have said anyway.' },
            { who: 'Laura', s: 'And “up to forty per cent more moisture”?' },
            { who: 'Owen', s: 'Up to means at most. For all we know, most people got two per cent. I’m not saying it doesn’t work. I’m saying the sentence was written by someone very careful.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the weasel word or phrase that weakens each claim.', items: [
            { s: 'This shampoo [helps] repair damaged hair.', why: '*Helps* repair is not the same as repairs.' },
            { s: 'Save [up to] seventy per cent this weekend.', why: '*Up to* sets a maximum that few items may reach.' },
            { s: 'Our new formula leaves glasses [virtually] spotless.', why: '*Virtually* admits there are spots.' },
            { s: 'Regular exercise [may] reduce the risk.', why: '*May* is a possibility, not a promise.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'wordform', h: 'Use the word in capitals to form a word that fits the gap.', items: [
            { q: 'The advert was withdrawn after complaints that it was ___.', base: 'lead', a: ['misleading'], why: 'Prefix *mis-* and *-ing* as an adjective.' },
            { q: 'Critics described the campaign as cynical and ___.', base: 'manipulate', a: ['manipulative'], why: 'Adjective with *-ive*.' },
            { q: 'Her argument was calm, clear and entirely ___.', base: 'persuade', a: ['persuasive'], why: '*Persuade* → *persuasive*, with *d* becoming *s*.' },
            { q: 'Many nudges work precisely because they go ___ by the people they affect.', base: 'notice', a: ['unnoticed'], why: '*Go unnoticed*: negative *un-* and the past participle.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Task and model article', md: 'Task: An international magazine about language and society has invited readers to send in articles with the title **Words that change minds**. Write an article discussing how language is used to influence people in everyday life, and whether readers should be concerned about it.\n\n**Words that change minds**\n\nEvery morning, before I have finished my coffee, someone has tried to change my mind. The cereal box assures me that it is part of a balanced breakfast; the radio describes a strike as chaos; my banking app congratulates me on saving money I have simply not spent. None of this is lying, exactly. It is framing, and once you start to notice it, you cannot stop.\n\nFraming works because we rarely judge facts in isolation. A yoghurt that is ninety per cent fat-free sounds healthier than one that is ten per cent fat, though they are the same pot. A tax cut becomes tax relief, and suddenly the tax itself is an affliction from which we need relieving. The words do not change the facts; they change where we stand when we look at them.\n\nIs this sinister? Not necessarily. A school canteen that puts fruit at eye level and crisps on the bottom shelf is nudging children, yet few parents would object. The difference, I would suggest, lies in whose interests the nudge serves, and whether it would survive being explained. A pension scheme that enrols employees by default can be announced openly and still work. A limited offer that is never actually limited depends on our not looking too closely.\n\nSo what can a reader do? Retreating into suspicion of every sentence is no answer: that way lies paralysis. A better habit is to ask what has been left out, who chose these words, and how the same fact would sound if its opponents described it.\n\nPersuasion is not the enemy; it is how people who disagree get anything done. But it is a game best played with your eyes open, and the first move is simply to notice that a game is being played.' },
          { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Writing Part 2, an article): read the model article and choose the correct answer.', items: [
            { q: 'How does the article open?', o: ['with a personal, concrete scene that leads to the topic', 'with a dictionary definition of persuasion', 'with a list of statistics'], why: 'An article hooks the reader; the breakfast scene does that.' },
            { q: 'What does the third paragraph add?', o: ['a criterion for judging when persuasion is acceptable', 'a story about the writer’s childhood', 'a summary of the first two paragraphs'], why: '*Whose interests the nudge serves, and whether it would survive being explained.*' },
            { q: 'Which feature makes the style suitable for a magazine article?', o: ['rhetorical questions and a personal voice, with a measured argument', 'headings and numbered recommendations', 'a formal greeting and closing'], why: 'An article is lively and personal but still argues carefully.' },
          ] },
        ],
        [
          { t: 'text', md: 'In the format of the C2 Proficiency exam (Writing Part 2): write your own article on the task below in **280 to 320 words**, and send it to your teacher, who will correct it. Give yourself about **45 minutes**, as in the exam: plan, write and check.\n\n*A magazine for students of languages is running a series called **The power of a word**. Write an article about one area of life (advertising, politics, the news or public health) in which the choice of words influences what people think or do. Give examples, explain how the language works and say whether readers should be worried.*' },
          { t: 'tip', art: 'cat', md: 'A C2 article needs a **title**, an opening that makes the reader want to go on, a clear line of argument and an ending that stays in the mind. Use a **personal voice** and the occasional rhetorical question, but argue with care: *I would suggest*, *it is not that… but that*. Examples you invent must be clearly hypothetical; never present an invented figure as a fact.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'kofi', items: [
            { a: 'The words do not change the facts; they change where we stand.' },
            { a: 'The difference lies in whose interests the nudge serves.' },
            { a: 'It is a game best played with your eyes open.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'Does language shape thought?',
      about: 'Follow a talk on linguistic relativity and discuss the evidence with careful, academic language.',
      art: 'alien',
      spreads: [
        [
          { t: 'text', md: 'Does the language you speak change the way you think? The idea is old and attractive, and in the twentieth century it became known as the **Sapir-Whorf hypothesis**, after two American linguists. It comes in two strengths.\n\nThe **strong version**, linguistic **determinism**, says that language sets the limits of thought: if your language has no word for something, you cannot think it. Few researchers accept this today. People translate, invent new words when they need them and grasp ideas before they can name them.\n\nThe **weak version**, linguistic **relativity**, says something more modest and easier to test: the habits of a language make some distinctions **easier to notice, remember or express**. Research on colour, space and time has found effects of this kind, usually small. Other claims, especially about grammatical gender, have proved harder to confirm.' },
        ],
        [
          { t: 'text', md: 'Discussing a question like this at C2 means matching your language to the strength of the evidence. A **claim** is weaker than a **finding**; a finding that has been **replicated** is stronger than one that has not. Choose verbs carefully: language may **influence**, **shape** or **predispose**; it rarely **determines**. Results may be **consistent with** a theory without **proving** it.\n\nIt also means noticing bad reasoning. *Language X has no word for Y, so its speakers cannot understand Y* is the strong version in disguise, and it does not follow. English had no single word for *Schadenfreude* before borrowing it, but English speakers recognised the feeling perfectly well.' },
          { t: 'examples', items: [
            { s: 'The findings are **consistent with** a weak version of the hypothesis.', n: 'They fit the theory; they do not prove it.' },
            { s: 'Language may **predispose** speakers **to** notice certain distinctions.', n: '*Predispose someone to*: make them more likely to.' },
            { s: 'It **does not follow that** speakers cannot see the difference.', n: 'Rejecting a faulty conclusion.' },
            { s: 'Several of these results **have not been replicated**.', n: 'Other researchers repeated the study and did not find the same.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['Language determines how we see colours.', 'Language may influence how quickly we distinguish colours.', 'Match the verb to the evidence.'],
            ['The study proves the theory.', 'The study supports the theory.', 'One study rarely proves anything.'],
            ['There are many evidences.', 'There is a good deal of evidence.', '*Evidence* is uncountable.'],
            ['This has a big affect.', 'This has a big effect.', '*Effect* is the noun.'],
            ['They have no word for it, so they cannot feel it.', 'They have no single word for it, but that does not mean they cannot feel it.', 'The strong version rarely survives.'],
          ] },
          { t: 'ex', kind: 'colloc', h: 'Which words go with the key word?', items: [
            { key: 'evidence', o: ['compelling', 'mixed', 'a body of', 'many', 'an'], a: [0, 1, 2], why: '*Compelling, mixed, a body of evidence*; not *many* or *an*, because evidence is uncountable.' },
            { key: 'a finding', o: ['replicate', 'challenge', 'report', 'do'], a: [0, 1, 2], why: 'You replicate, challenge or report a finding; you never *do* one.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Talk: does language shape thought?', md: 'Good evening. The question I want to look at tonight is an old one: does the language we speak shape the way we think? The strongest version of the idea, usually called linguistic determinism, holds that language sets the limits of thought, so that a speaker cannot think what their language has no words for. Very few researchers defend that today, and for a simple reason: we translate, we coin new words, and children grasp ideas before they learn the names for them.\n\nThe weaker version, linguistic relativity, is more interesting. It claims only that the habits of a language make some distinctions easier to notice or to remember. Take colour. Russian has two basic words for what English calls blue, one for lighter shades and one for darker ones. In experiments, Russian speakers have been found to tell such shades apart slightly faster when they fall on either side of that line. Notice how small the effect is. Everyone can see the difference; the words simply make it a little quicker to spot.\n\nSpace is a more striking case. Speakers of Guugu Yimithirr, a language of north-eastern Australia, describe position not with left and right but with compass directions: the cup is north of the plate. To speak this way you must know at every moment which way you are facing, and speakers do seem to keep track of direction remarkably well. Here the language does not limit thought. It trains a habit of attention.\n\nGrammatical gender is where the evidence becomes shakier. A bridge is feminine in German and masculine in Spanish, and some early studies suggested that speakers described bridges in ways that matched the gender. Later attempts to replicate those results have often failed, and many researchers now treat them with caution.\n\nSo where does that leave us? My own view is that a language works less like a prison and more like a map. It does not stop you going anywhere, but it makes certain routes the obvious ones. That matters for anyone learning a second language, because learning one is partly learning to notice what its speakers notice.\n\nThe practical lesson is to be sceptical of headlines claiming that a language has no word for something and that its speakers therefore cannot understand it. That is the strong version again, and it rarely survives a close look.' },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'In the format of the C2 Proficiency exam (Listening Part 2): you will hear part of a talk about language and thought. Complete the sentences with a word or short phrase from the talk.', items: [
            { q: 'The speaker says the strongest version of the idea is called linguistic ___.', a: ['determinism'], why: '*usually called linguistic determinism*.' },
            { q: 'One reason few researchers accept it is that children ___ ideas before they learn their names.', a: ['grasp'], why: '*children grasp ideas before they learn the names for them*.' },
            { q: 'The weaker version is known as linguistic ___.', a: ['relativity'], why: '*The weaker version, linguistic relativity*.' },
            { q: 'Russian has ___ basic words for what English calls blue.', a: ['two'], why: '*two basic words for what English calls blue*.' },
            { q: 'Speakers of Guugu Yimithirr describe position using ___ directions.', a: ['compass'], why: '*with compass directions*.' },
            { q: 'The speaker says their language trains a habit of ___.', a: ['attention'], why: '*It trains a habit of attention.*' },
            { q: 'Later attempts to ___ the results on grammatical gender have often failed.', a: ['replicate'], why: '*Later attempts to replicate those results*.' },
            { q: 'The speaker compares a language to a ___ rather than a prison.', a: ['map'], why: '*less like a prison and more like a map*.' },
            { q: 'Listeners are advised to be ___ of certain headlines.', a: ['sceptical', 'skeptical'], why: '*be sceptical of headlines*.' },
          ] },
          { t: 'tip', art: 'alien', md: 'In **Listening Part 2** the words you write are **the words you hear**, but the sentence on the page paraphrases the rest. Read the sentences before the recording, predict what kind of word fits (a noun? a number?), and check the spelling: a misspelt answer may not count.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given, according to the talk?', items: [
            { q: 'The speaker believes the strong version of the idea is well supported.', a: 'f', why: '*Very few researchers defend that today.*' },
            { q: 'The difference found in the colour experiments was small.', a: 't', why: '*Notice how small the effect is.*' },
            { q: 'Guugu Yimithirr has no words for north and south.', a: 'f', why: 'It uses compass directions such as north.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite each overstated claim more carefully, using the word given.', items: [
            { q: 'Language determines how we think about time.', cue: 'MAY', a: ['Language may influence how we think about time.', 'Language may shape how we think about time.', 'Language may affect how we think about time.'], why: 'A modal and a weaker verb match the evidence.' },
            { q: 'They have no word for it, so they cannot understand it.', cue: 'FOLLOW', a: ['They have no word for it, but it does not follow that they cannot understand it.', 'They have no word for it, but it doesn’t follow that they cannot understand it.', 'They have no word for it, but it does not follow that they can’t understand it.'], why: '*It does not follow that* rejects a faulty conclusion.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'The findings are consistent with a weak version of the hypothesis.' },
            { a: 'It does not follow that speakers cannot see the difference.' },
            { a: 'A language works less like a prison and more like a map.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'What does the speaker imply?', items: [
      { q: 'A: How was the concert? B: The hall has wonderful acoustics.', o: ['B did not enjoy the performance much.', 'B thought the performance was superb.', 'B missed the concert.'], why: 'Praising something minor avoids the question: faint praise.' },
      { q: 'She has finally stopped complaining about her flat.', o: ['She used to complain about it.', 'She has never complained about it.', 'She is moving out tomorrow.'], why: '*Stopped* presupposes she complained before.' },
      { q: '“I’m sorry if my comments upset anyone.”', o: ['The speaker avoids admitting that the comments caused harm.', 'The speaker fully accepts the blame.', 'The speaker is apologising to one named person.'], why: 'The *if* turns the apology into a non-apology.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'Two hundred delegates [assisted] the summit.', a: ['attended'], why: '*Attend* an event; *assist* means help.' },
      { s: 'The ending of the film was a terrible [deception].', a: ['disappointment'], why: 'A false friend: *disappointment*.' },
      { s: 'This has a strong [affect] on how we remember colours.', a: ['effect'], why: '*Effect* is the noun.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
      { q: 'The problem lies not so much in the grammar ___ in the culture behind it.', a: ['as'], why: '*Not so much… as*.' },
      { q: '___ is the difference more obvious than in jokes.', a: ['Nowhere'], why: 'Negative adverbial + inversion.' },
      { q: 'Be that as it ___, the translation is excellent.', a: ['may'], why: 'Fixed phrase: *be that as it may*.' },
    ] },
    { t: 'ex', kind: 'wordform', h: 'Use the word in capitals to form a word that fits the gap.', items: [
      { q: 'The label was criticised as deliberately ___.', base: 'lead', a: ['misleading'], why: 'Prefix *mis-* and *-ing*.' },
      { q: 'A good speech can be ___ without being dishonest.', base: 'persuade', a: ['persuasive'], why: '*Persuasive*.' },
      { q: 'Some early findings on priming have proved ___, as other researchers could not repeat them.', base: 'rely', a: ['unreliable'], why: 'Negative *un-*, *-able*, and *y* becomes *i*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the term and its meaning.', pairs: [
      ['connotation', 'the feeling a word carries'],
      ['implicature', 'what is meant but not said'],
      ['presupposition', 'what a sentence takes for granted'],
      ['framing', 'presenting a fact from a chosen angle'],
      ['linguistic relativity', 'the idea that language influences thought'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Complete the second sentence, using the word given.', items: [
      { q: 'Language determines what we can think.', cue: 'MAY', a: ['Language may influence what we can think.', 'Language may shape what we can think.', 'Language may affect what we can think.'], why: 'A modal and a weaker verb.' },
      { q: 'Nobody liked the proposal.', cue: 'UNIVERSALLY', a: ['The proposal was not universally liked.', 'The proposal wasn’t universally liked.', 'The proposal was not universally popular.'], why: 'Understatement with *not universally*.' },
    ] },
  ],
};
