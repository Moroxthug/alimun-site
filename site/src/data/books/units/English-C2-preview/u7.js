// English C2, unit 7, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Each lesson: a full explanation first (the rule in plain words, why it works, many examples, the usual mistakes, a text
// that uses it), then exercises from controlled to free, one speaking task, and one task in the format of C2 Proficiency.
// Exam formats: Listening Part 3, Speaking Part 3, Reading and Use of English Part 7, Writing Part 1. Every speech, interview,
// report and commentary is original; quotations from real speeches are limited to a few famous public-domain words.
export const UNIT = {
  id: 'u7',
  title: 'Rhetoric and persuasion',
  goal: 'Understand how speeches persuade and use the devices yourself: build trust, feeling and argument with ethos, pathos and logos, shape sentences with the classic devices of the speech, read framing and loaded language critically, and summarise and evaluate a speech and a commentary on it in the format of C2 Proficiency Writing Part 1.',
  art: 'parrot',
  tags: { skills: ['listening', 'speaking', 'reading', 'writing', 'vocabulary'], topics: ['rhetoric', 'ethos', 'pathos', 'logos', 'anaphora', 'antithesis', 'chiasmus', 'tricolon', 'framing', 'loaded-language', 'bias', 'essay'], goals: ['foundations', 'academic', 'professional'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'Trust, feeling and reason',
      about: 'Recognise how a speaker builds trust (ethos), stirs feeling (pathos) and argues (logos), learn the language of each appeal and of its misuse, and follow a long radio interview in the format of C2 Proficiency Listening Part 3.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: '**Rhetoric** is the art of persuading an audience. More than two thousand years ago, Aristotle described three ways in which a speaker can do it, and every speech, advert, sales pitch and opinion column still uses them.\n\n**Ethos** is the appeal to the speaker’s **character**: it answers the listener’s silent question *Why should I listen to you?* **Pathos** is the appeal to **feeling**: *Why should I care?* **Logos** is the appeal to **reason**: *Why should I believe it?*\n\nAt C2 the point is not to put a label on a sentence. It is to see how the three appeals **work together**, in what order, and how each one can go wrong. A speech with only logos is accurate and forgotten by lunchtime. A speech with only pathos is moving and proves nothing. A speech with only ethos is a speaker talking about themselves. Persuasion happens when the audience trusts the speaker, cares about the problem and can follow the reasoning, usually in that order.' },
          { t: 'table', caption: 'The three appeals', explain: ['head', 'col1', 'col2'], head: ['Appeal', 'The audience asks', 'How the speaker answers', 'Example'], rows: [
            ['ethos', 'Why should I listen to you?', 'experience, fairness, shared values, admitting limits', 'I have run this clinic for eleven years, and I have been wrong about it before.'],
            ['pathos', 'Why should I care?', 'one concrete person, vivid detail, the inclusive *we*', 'Think of the man who waits three hours in the rain for a bus that never comes.'],
            ['logos', 'Why should I believe it?', 'evidence, cause and effect, analogy, answering objections', 'If the route closes, the cost does not disappear: it moves to the hospital.'],
          ] },
        ],
        [
          { t: 'text', md: 'Each appeal has its own language.\n\n**Ethos** is shown, not claimed. Experience is mentioned lightly (*In my years on the ward…*), shared identity is stressed (*Like many of you, I…*), and, surprisingly, **conceding** builds trust: a speaker who says *My opponents are right about the cost* sounds fair, so the audience believes the rest. Admitting what you do not know (*I am not an economist*) costs little and earns a great deal.\n\n**Pathos** works through the **particular**. One named person moves an audience more than a large number: listeners feel for a woman called Rosa, not for *thousands of residents*. Speakers use sensory detail, imagined scenes in the present tense (*Imagine… Picture…*) and the inclusive *we* and *our*.\n\n**Logos** in a speech is not a list of data. A listener cannot reread a sentence, so figures are **rounded and explained** (*nearly one in four of us*), reasoning is made visible (*which means…*, *as a result…*), an **analogy** makes an abstract point concrete, and the strongest objection is answered before anyone raises it: *Some will say we cannot afford this. The truth is that we cannot afford not to.*' },
          { t: 'examples', items: [
            { s: 'Last winter a woman called Rosa waited six hours for an ambulance.', n: 'Pathos through one concrete case.' },
            { s: '**Picture** the empty classroom, the chairs stacked, the lights off at noon.', n: 'Pathos through an imagined scene.' },
            { s: 'Nearly one in four households here has no car, **which means** the bus is not a convenience but a lifeline.', n: 'Logos: a rounded figure and its meaning.' },
            { s: 'Closing the library to save money **is like** selling the roof to pay for the heating.', n: 'Logos through analogy.' },
            { s: '**Some will say** we cannot afford this. **The truth is that** we cannot afford not to.', n: 'Logos: the objection answered in advance.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Classical rhetoric had a fourth idea, ***kairos***: the right moment. The same words can persuade at a memorial and offend at a party. When you judge a speech, ask not only *what* it says but *when* and *to whom*: an appeal that suits the occasion is half the persuasion.' },
        ],
        [
          { t: 'text', md: 'Every appeal can be **misused**, and a critical listener notices when it is. Ethos turns into **name-dropping** or the bare **appeal to authority** (*Experts agree…* without saying which). Pathos becomes **manipulation** when the story is all there is: the audience is asked to feel instead of think. Logos becomes a **data dump**, or hides a weak argument behind impressive numbers. Attacking the other speaker instead of the argument (***ad hominem***) usually damages the attacker’s own ethos.' },
          { t: 'table', caption: 'Common mistakes when you use the appeals', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['As an expert, I am obviously right.', 'In twenty years on the ward, I have seen this more often than I would like.', 'Ethos is shown through experience, not claimed.'],
            ['Thousands of people suffer every day!', 'Last winter, a woman called Rosa waited six hours for an ambulance.', 'One concrete case moves an audience more than a vague crowd.'],
            ['Statistics show that 73.48% of residents agree.', 'Nearly three in four residents agree.', 'A listener remembers a rounded figure, not decimals.'],
            ['My opponent is a hypocrite, so his plan is wrong.', 'My opponent’s plan leaves out the cost of maintenance.', 'Attacking the person (*ad hominem*) weakens your ethos.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Which appeal does each sentence mainly use?', groups: ['ethos', 'pathos', 'logos'], explain: ['groups'], items: [
            { s: 'I have taught in this town for thirty years, and I have made every mistake in the book.', g: 0, why: 'Experience plus honesty about mistakes: the speaker’s character.' },
            { s: 'Picture a nine-year-old doing her homework by the light of a phone.', g: 1, why: 'An imagined scene with one child: feeling.' },
            { s: 'If the centre closes, the nearest one is a two-hour round trip, which most families here cannot make.', g: 2, why: 'Cause and consequence: reasoning.' },
            { s: 'Some will say this is a luxury. Yet the scheme costs less than the repairs it prevents.', g: 2, why: 'An objection answered with a comparison of costs.' },
            { s: 'My opponents are right that the plan is ambitious, and I will not pretend otherwise.', g: 0, why: 'A concession makes the speaker sound fair.' },
            { s: 'Cutting the service to save money is like cancelling the fire brigade because there were no fires last year.', g: 2, why: 'An analogy that makes an argument concrete.' },
          ] },
        ],
        [
          { t: 'text', md: 'In **C2 Proficiency Listening Part 3** you hear an **interview or discussion** of about four minutes and answer **five multiple-choice questions** with **four options** each. You hear it twice. The questions follow the order of the recording.\n\nAt C2 the questions test **attitude, opinion, purpose and implication** far more than facts: *What does she suggest by…? Why does he mention…? How does she respond to the suggestion that…?* The speaker rarely gives the answer in the words of the question. Often they **correct** the interviewer (*I wouldn’t put it quite like that*), **qualify** a claim (*That’s been rather exaggerated*) or make a point through an **anecdote**, and you have to say what the anecdote shows.\n\nRead the interview below as the course audio speaks it, then answer the questions.' },
          { t: 'dialogue', title: 'Talking Point: the art of the speechwriter', lines: [
            { who: 'Presenter', s: 'My guest today spent twelve years writing speeches for politicians, charities and, she tells me, one very nervous bridegroom. Helen, people say speechwriting is the art of putting words in other people’s mouths. Is that fair?' },
            { who: 'Helen', s: 'It’s fair in the sense that the words aren’t theirs to begin with. But done well, the job is closer to tailoring than to ventriloquism. You listen to how someone actually talks, the phrases they reach for, the jokes they make when they’re relaxed, and you cut the speech to fit. A speech that doesn’t sound like the speaker is worse than no speech at all, because an audience can always tell.' },
            { who: 'Presenter', s: 'So the speaker’s character matters more than the argument?' },
            { who: 'Helen', s: 'I wouldn’t put it quite like that. What I learned early on is that an audience decides whether to trust you within about a minute, and after that it either listens generously or listens for mistakes. Everything else, the evidence, the stories, depends on winning that first minute. So character doesn’t matter more; it comes first. That’s a different thing.' },
            { who: 'Presenter', s: 'And how do you win that minute?' },
            { who: 'Helen', s: 'Rarely by listing achievements. The most effective opening I ever wrote was for a hospital director, and it began with a mistake she’d made in her first year as a nurse. People had come expecting a defence of the hospital’s record. What they got was someone admitting she’d once got something badly wrong, and you could feel the room relax. She had their trust before she’d made a single claim.' },
            { who: 'Presenter', s: 'Some listeners might call that manipulation: a confession designed to disarm.' },
            { who: 'Helen', s: 'It would be, if it weren’t true, or if it were the whole speech. The line I always drew was this: emotion is legitimate when it points to something real. A story about one family who lost their home is honest if it stands for a pattern you can show. It becomes manipulation when the story is all there is, when you’re asking people to feel instead of think.' },
            { who: 'Presenter', s: 'You’ve said elsewhere that you dislike statistics in speeches.' },
            { who: 'Helen', s: 'That’s been rather exaggerated. I dislike statistics nobody can hold in their head. A listener can’t reread a sentence. Give them twenty-three point six per cent and it’s gone before you’ve finished the next clause. Give them nearly one in four, and tell them what it means for the street they live on, and they’ll still remember it at dinner.' },
            { who: 'Presenter', s: 'And the nervous bridegroom?' },
            { who: 'Helen', s: 'Ah. He ignored every word I’d written and spoke from the heart for ninety seconds. It was far better than my draft. I’ve used it as a lesson ever since: the best rhetoric often sounds as though there isn’t any.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Listening Part 3): choose the answer which fits best according to what you hear.', items: [
            { q: 'What does Helen suggest by comparing her work to tailoring?', o: ['A speech must be shaped to suit the way the speaker naturally talks.', 'Speechwriting demands a great deal of patience.', 'Speakers rarely notice the changes she makes.', 'Audiences prefer speeches that are short and simple.'], why: '*You listen to how someone actually talks… and you cut the speech to fit.*' },
            { q: 'When the presenter asks whether character matters more than argument, Helen', o: ['refines the idea by separating what comes first from what matters most.', 'agrees that evidence counts for little once trust is won.', 'admits that she has never been sure of the answer.', 'says that most audiences listen generously to any speaker.'], why: '*Character doesn’t matter more; it comes first. That’s a different thing.*' },
            { q: 'Why does Helen mention the hospital director’s opening?', o: ['To show how admitting a fault can win an audience’s trust.', 'To illustrate how a defensive speech can backfire.', 'To explain why she prefers writing for people in health care.', 'To suggest that a list of achievements is sometimes necessary.'], why: '*She had their trust before she’d made a single claim.* The audience expected a defence, but did not get one.' },
            { q: 'What is Helen’s view of emotional appeals?', o: ['They are acceptable when they stand for a wider truth that can be shown.', 'They have no place in a serious speech.', 'They are always a form of manipulation, however well meant.', 'They work best when they make up most of a speech.'], why: '*Emotion is legitimate when it points to something real… a pattern you can show.*' },
            { q: 'What lesson does Helen draw from the bridegroom’s speech?', o: ['Persuasion is often most effective when it does not seem deliberate.', 'Speechwriters are unnecessary on personal occasions.', 'Short speeches are always more memorable than long ones.', 'Her draft had been too emotional for the occasion.'], why: '*The best rhetoric often sounds as though there isn’t any.*' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 3**, listen for the moment a speaker **corrects or qualifies** the interviewer: *I wouldn’t put it quite like that*, *That’s been rather exaggerated*, *It would be, if…* The answer usually comes straight after. And when a speaker tells an anecdote, the question is almost never *what happened* but *what it shows*.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor, as if you were opening a speech to a public meeting.', tutor: 'arthur', items: [
            { a: 'I am not an economist, and I will not pretend to be one.' },
            { a: 'Like many of you, I have stood at that bus stop in the dark.' },
            { a: 'Nearly one in four households here has no car.' },
            { a: 'Some will say we cannot afford this. The truth is that we cannot afford not to.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'Patterns that persuade',
      about: 'Recognise and use the classic devices of the speech: anaphora, epistrophe, antithesis, chiasmus, the tricolon, the rhetorical question and the extended metaphor, and give a long turn in the format of C2 Proficiency Speaking Part 3.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'A speech is heard **once**, at the speaker’s speed. The listener cannot go back, so the speaker gives them **patterns**: repetition, balance and contrast that make an idea easy to follow and hard to forget. These patterns have Greek names, but you use many of them already without knowing it.\n\n**Anaphora** repeats the same words at the **start** of successive clauses; **epistrophe** repeats them at the **end**. **Antithesis** sets two opposite ideas side by side in a balanced structure. **Chiasmus** repeats two ideas in **reverse order** (A B, B A). The **tricolon** is a group of three parallel items. A **rhetorical question** is asked for effect, not for an answer; in **hypophora** the speaker asks a question and answers it at once. An **extended metaphor** carries one image through a whole passage.' },
          { t: 'table', caption: 'Devices of the speech', explain: ['head', 'col1', 'col2'], head: ['Device', 'What it is', 'Why it works', 'Example'], rows: [
            ['anaphora', 'the same words open each clause', 'each repetition adds weight and momentum', 'We will not wait for permission. We will not wait for a better year.'],
            ['epistrophe', 'the same words close each clause', 'the key word keeps ringing', 'When the mill closed, the town paid. When the river flooded, the town paid.'],
            ['antithesis', 'opposites in a balanced structure', 'it turns an issue into a clear choice', 'It was the best of times, it was the worst of times. (Dickens)'],
            ['chiasmus', 'two ideas repeated in reverse order', 'it sounds like settled wisdom', 'Ask not what your country can do for you; ask what you can do for your country. (Kennedy)'],
            ['tricolon', 'three parallel items, often rising', 'three feels complete', 'government of the people, by the people, for the people (Lincoln)'],
            ['rhetorical question', 'a question asked for effect', 'the audience supplies the answer itself', 'If we will not protect it, who will?'],
            ['hypophora', 'a question the speaker answers at once', 'it raises an objection and disposes of it', 'Is it expensive? Yes. Is it as expensive as doing nothing? Not remotely.'],
            ['extended metaphor', 'one image carried through a passage', 'it gives the speech unity and colour', 'a town as a ship: the storm, the crew, the harbour'],
          ] },
        ],
        [
          { t: 'text', md: 'A few points of craft separate a skilled speaker from a showy one.\n\nThe **tricolon** works best when it **rises**: each item is a little longer or stronger than the last, so the third lands with the most force (*a town that is safe, a town that is fair, a town that is proud of what it has become*). A list of four sounds like a shopping list; a list of two sounds unfinished.\n\n**Antithesis** and **chiasmus** are often confused. Antithesis opposes two **ideas** (*hope, not fear*). Chiasmus reverses the **order of words or ideas** (*we do not live to work; we work to live*). Chiasmus often contains an antithesis, but its signature is the mirror shape.\n\nA **rhetorical question** is risky: if the audience might answer it the wrong way, it backfires. *Is this the best we can do?* invites *No*; *Should we simply give up?* is safe only if nobody in the room wants to.\n\nAn **extended metaphor** must stay **consistent**. A speaker who says *We must steer this ship through the fire* has mixed two images, and the audience may smile in the wrong place. Above all, a device must **carry an idea**: repetition with nothing to repeat sounds hollow.' },
          { t: 'examples', items: [
            { s: 'We came to **listen**, we stayed to **learn**, and we leave determined to **act**.', n: 'A rising tricolon: three verbs, the last the strongest.' },
            { s: 'They promised **progress**; they delivered **paperwork**.', n: 'Antithesis, sharpened by the same first sound.' },
            { s: 'We should not ask whether **the city** can afford **the park**, but whether **the park** can survive **the city**.', n: 'Chiasmus: city/park, park/city.' },
            { s: 'This charity has been **a lighthouse** for forty years: it has **guided** families through **dark nights** and **warned** them off **the rocks**.', n: 'An extended metaphor: lighthouse, guide, night, rocks.' },
          ] },
          { t: 'tip', art: 'owl', md: 'When you write about a speech, never stop at the name of the device. *The speaker uses anaphora* earns little; *the anaphora of “We will not wait” builds a sense of impatience that the final short sentence releases* shows that you understand what the device **does**. Name it, quote it briefly, and give its effect.' },
        ],
        [
          { t: 'table', caption: 'Common mistakes with the devices', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['We need homes, jobs, parks, schools and buses.', 'We need homes to live in, work to be proud of and a town worth staying in.', 'Five items are a list; three rising items are a tricolon.'],
            ['We must steer this ship through the fire.', 'We must steer this ship through the storm.', 'A mixed metaphor: keep the image consistent.'],
            ['Is anyone here happy with the service?', 'How much longer must we wait for a bus that never comes?', 'A rhetorical question must have only one possible answer.'],
            ['The speaker uses a chiasmus.', 'The chiasmus “not what… but what” turns the duty back on the listener.', 'Name the device, quote it and give its effect.'],
          ] },
          { t: 'reading', title: 'From a speech at the reopening of the Riverside Library', md: 'Three years ago, the water came up these steps in a single night. It took the children’s corner, it took the local archive, and it took, for a while, our faith that anything here could be put right.\n\nWe were told the building could not be saved. We were told the money was not there. We were told, politely and often, that people do not need libraries any more. And yet here you are: on a Tuesday evening, in the rain, in a library.\n\nWhat brought us back? Not the council, though it helped. Not the insurance, though it paid. What brought us back was the five hundred people who carried wet books to dry in their own kitchens, page by page, through a whole winter.\n\nA library is not a warehouse of books; it is a harbour. For a hundred years it has given shelter to the curious, the lonely and the unlucky, and it has sent them back out into the weather a little better equipped. Tonight the harbour is open again.\n\nSo let us not ask what this library can still do for us. Let us ask what we can still do for it.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each device with an example from the library speech.', pairs: [
            ['anaphora', 'We were told… We were told… We were told…'],
            ['tricolon', 'the curious, the lonely and the unlucky'],
            ['hypophora', 'What brought us back? Not the council…'],
            ['antithesis', 'not a warehouse of books; it is a harbour'],
            ['chiasmus', 'not ask what this library can do for us… what we can do for it'],
            ['extended metaphor', 'harbour, shelter, back out into the weather'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Which device is used? Choose the best answer.', items: [
            { q: '“When the factory closed, the young left. When the bank closed, the young left. When the school closed, nobody was surprised that the young left.”', o: ['epistrophe', 'anaphora', 'chiasmus', 'hypophora'], why: 'The same words *the young left* close each clause.' },
            { q: '“We do not need more promises from the powerful; we need more power for the promised.”', o: ['chiasmus', 'tricolon', 'epistrophe', 'rhetorical question'], why: '*Promises… powerful / power… promised*: the ideas are reversed.' },
            { q: '“Is the plan perfect? No. Is it better than anything else on the table? Without question.”', o: ['hypophora', 'antithesis', 'anaphora', 'extended metaphor'], why: 'The speaker asks the questions and answers them.' },
            { q: '“They built walls; we will build bridges.”', o: ['antithesis', 'chiasmus', 'tricolon', 'epistrophe'], why: 'Two opposite ideas, walls and bridges, in a balanced structure.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite each sentence using the device in brackets. Start with the words given.', items: [
            { q: 'We will not give up, go quietly or forget. (anaphora)', cue: 'We will not give up. We will not', a: ['We will not give up. We will not go quietly. We will not forget.'], why: 'Anaphora: the same opening, *We will not*, three times.' },
            { q: 'You should work in order to live; you should not live only in order to work. (chiasmus)', cue: 'Work to live;', a: ['Work to live; don’t live to work.', 'Work to live; do not live to work.', 'Work to live, don’t live to work.'], why: 'The two halves mirror each other: work, live / live, work.' },
          ] },
        ],
        [
          { t: 'text', md: 'In **C2 Proficiency Speaking Part 3** each candidate in turn receives a **card** with a question and a few ideas, and speaks **alone for about two minutes**. You may use the ideas on the card or your own. When you finish, the examiner asks your partner a short question about what you said, then asks you both a further question. At the end of the part, the examiner leads a **discussion** of the wider topic with both of you.\n\nTwo minutes is a long time to talk alone, and the rhetoric of this lesson helps: a clear opening that states your position, points that are **signposted**, a **contrast** or a **rhetorical question** to move between them, and a short conclusion that returns to the question. You are marked on how you organise and develop your ideas, the range of language you use and how naturally you speak, so use the devices **lightly**: you are talking to an examiner, not addressing a crowd.' },
          { t: 'dialogue', title: 'Speaking Part 3: a model long turn', lines: [
            { who: 'Examiner', s: 'Here is your card. The question is: is the ability to speak persuasively more important today than it was in the past? You can use the ideas on the card if you like: politics and public life, work and job interviews, social media. Please start whenever you’re ready.' },
            { who: 'Clara', s: 'I’d argue that it matters more today, but not for the reasons people usually give. In the past, persuasion was the job of a small number of people: politicians, lawyers, preachers. Today almost everyone is expected to persuade, almost all the time.' },
            { who: 'Clara', s: 'Take work. A generation ago, you might have been hired on the strength of a reference. Now you pitch yourself in an interview, you pitch your ideas in meetings, and if you work for yourself, you pitch every single week.' },
            { who: 'Clara', s: 'Then there’s social media, which has turned millions of people into speakers with an audience. The trouble is that the platforms reward the loudest voice, not the best argument. So is persuasion more important? Yes. Is it more valuable? I’m not so sure.' },
            { who: 'Clara', s: 'What has changed, I think, is that the skill we most need now is the other side of the coin: not speaking persuasively, but listening critically. A society full of persuaders and short of sceptics is not a healthy one. So I’d say both matter, but the second may matter more.' },
            { who: 'Examiner', s: 'Thank you. Daniel, do you think schools should teach persuasive speaking?' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Speaking Part 3): read the model long turn again. Choose the best answer to each question about it.', items: [
            { q: 'How does Clara open her long turn?', o: ['She states a clear position and signals that her reasons will be unexpected.', 'She repeats the question word for word.', 'She lists every idea on the card in order.'], why: '*I’d argue that it matters more today, but not for the reasons people usually give.*' },
            { q: 'Why is “Is persuasion more important? Yes. Is it more valuable? I’m not so sure.” effective?', o: ['Hypophora lets her answer the question and add a twist in a few words.', 'It shows that she has not understood the question.', 'It gives the examiner a chance to reply.'], why: 'She asks and answers her own questions, then turns the argument.' },
          ] },
          { t: 'text', md: 'Now prepare your own long turn on a second card. **The question:** *Do people trust experts less than they used to?* **Ideas:** science and health; politics; online information. Plan for one minute: your position, two developed points and a conclusion. Use one contrast, one rhetorical question or hypophora, and one tricolon, then speak for two minutes. Record yourself or practise with your teacher.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these lines after the tutor, with the rhythm of a speech.', tutor: 'mei', items: [
            { a: 'We came to listen, we stayed to learn, and we leave determined to act.' },
            { a: 'They promised progress; they delivered paperwork.' },
            { a: 'Is the plan perfect? No. Is it better than anything else on the table? Without question.' },
            { a: 'A library is not a warehouse of books; it is a harbour.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'The same story, told twice',
      about: 'See how selection, framing, loaded words, reporting verbs and the agentless passive shape the way an event is told, read critically, and match statements to four accounts of one event in the format of C2 Proficiency Reading and Use of English Part 7.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'No account of an event is complete. Every writer **selects** what to include, decides what comes **first**, and chooses the **words** for it. The result is a **frame**: a way of seeing the event that answers one question and quietly ignores another. *Council saves £2 million* and *Council closes pool* may describe the same decision. Both are true; they are not neutral.\n\nFraming is not always dishonest, and you cannot avoid it in your own writing. But a reader at C2 should be able to see it at work, and a writer at C2 should be able to choose a frame **deliberately** and, when fairness is needed, to write as neutrally as possible.' },
          { t: 'table', caption: 'How framing works', explain: ['head', 'col0', 'col1'], head: ['Technique', 'How it works', 'Example'], rows: [
            ['selection and omission', 'some facts are included, others left out', 'the saving reported, the forty jobs lost not mentioned'],
            ['order and emphasis', 'what comes in the headline and first line seems most important', 'Pool closes, then a line about the new sports hall in the last paragraph'],
            ['loaded words', 'words with a positive or negative colour', 'a determined crowd / a mob; reform / cuts'],
            ['naming', 'the label chosen for people or groups', 'residents / protesters / activists / agitators'],
            ['gain or loss', 'the same figure framed as success or failure', '90% of services protected / 10% of services cut'],
            ['the agentless passive', 'hides who is responsible', 'Mistakes were made. Jobs were lost.'],
            ['nominalisation', 'turns an action into a thing, without a doer', 'the closure of the pool (who closed it?)'],
            ['presupposition', 'a question or clause takes something for granted', 'When will the council stop wasting money?'],
          ] },
        ],
        [
          { t: 'text', md: 'Two quieter techniques do a great deal of work.\n\n**Reporting verbs** carry judgement. *She **said*** is neutral. *She **claimed*** suggests doubt. *She **admitted*** suggests something wrong was confessed; *she **conceded*** that she gave way in an argument. *He **insisted*** hints that nobody believed him; *he **alleged*** reports an accusation not yet proved; *it **emerged*** or *it was **revealed*** that suggests the fact had been hidden. Change the verb and you change the story.\n\n**Presupposition** hides a claim inside a question or a clause, where it is harder to challenge: *Why has the council ignored residents?* assumes that it has. *Even the minister now accepts the plan has failed* assumes that the minister is the last to see it.\n\nA critical reader asks four questions of any text: **Who is speaking? What is included, and what is left out? Which words carry judgement? Who benefits from this version?** This is not cynicism. It is the ordinary skill of reading news, advertising and political speech, in any language.' },
          { t: 'examples', items: [
            { s: 'The minister **said** the figures were accurate.', n: 'Neutral: no judgement.' },
            { s: 'The minister **claimed** the figures were accurate.', n: 'The writer casts doubt on the claim.' },
            { s: 'The minister **admitted** the figures had been wrong.', n: 'A confession of a mistake.' },
            { s: 'It **emerged** that the report had been delayed for months.', n: 'Suggests the delay had been hidden.' },
            { s: '**Mistakes were made** in the planning process.', n: 'Agentless passive: nobody is named.' },
          ] },
          { t: 'tip', art: 'owl', md: 'When you **summarise** someone else’s view, choose your reporting verb carefully. *The writer says*, *argues*, *suggests* and *points out* are fair. *The writer admits*, *claims* or *insists* add your judgement, which is fine in an evaluation but not in a neutral summary. *Points out* also tells the reader that you think the point is true.' },
        ],
        [
          { t: 'table', caption: 'Common mistakes when you report and summarise', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['The mayor admitted that the budget was balanced.', 'The mayor said (or pointed out) that the budget was balanced.', '*Admit* implies a confession of something bad.'],
            ['The writer claims that water boils at 100°C.', 'The writer notes that water boils at 100°C.', '*Claim* casts doubt even on a plain fact.'],
            ['Thousands of thugs invaded the square.', 'Several thousand protesters gathered in the square.', 'Neutral writing avoids loaded naming.'],
            ['Mistakes were made by us.', 'We made mistakes.', 'If you name the doer, the active is clearer and more honest.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Does the word or phrase present the people or action approvingly, disapprovingly or neutrally?', groups: ['approving', 'neutral', 'disapproving'], explain: ['groups'], items: [
            { s: 'campaigners', g: 1, why: 'A neutral label for people who campaign.' },
            { s: 'a mob', g: 2, why: 'Suggests an angry, violent crowd.' },
            { s: 'a regime', g: 2, why: 'Much more negative than *government*.' },
            { s: 'reforms', g: 0, why: 'Suggests changes for the better.' },
            { s: 'changes', g: 1, why: 'Neither good nor bad.' },
            { s: 'slashed', g: 2, why: 'A violent verb for a cut: disapproving.' },
            { s: 'streamlined', g: 0, why: 'Presents a cut as making something more efficient.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the reporting verb that matches the meaning in brackets.', items: [
            { q: 'The chief executive ___ that the company had misled customers. (she confessed it)', o: ['admitted', 'claimed', 'insisted'], why: '*Admit* is used for confessing something wrong.' },
            { q: 'The opposition ___ that the figures had been altered. (an accusation not yet proved)', o: ['alleged', 'conceded', 'noted'], why: '*Allege* reports an accusation without proof.' },
            { q: 'The minister ___ that the plan was working, despite the evidence. (nobody believed him)', o: ['insisted', 'admitted', 'revealed'], why: '*Insist* suggests repeating a claim others doubt.' },
            { q: 'It ___ that the report had been kept from the board for six months. (it had been hidden)', o: ['emerged', 'insisted', 'conceded'], why: '*It emerged that* suggests the fact had been hidden.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite each sentence so that it names who is responsible. Start with the words given.', items: [
            { q: 'Mistakes were made in the planning of the new road.', cue: 'The planners', a: ['The planners made mistakes in the planning of the new road.', 'The planners made mistakes in planning the new road.'], why: 'The active voice names the doer that the passive hid.' },
            { q: 'The decision to close the library was taken on Friday.', cue: 'The council', a: ['The council decided to close the library on Friday.', 'The council took the decision to close the library on Friday.'], why: 'The nominalisation *the decision* hid who decided.' },
          ] },
        ],
        [
          { t: 'text', md: 'In **C2 Proficiency Reading and Use of English Part 7** you read one long text in sections, or several short texts, and answer **ten** questions by deciding which section each one refers to. A section can be the answer more than once, and some may not be used at all.\n\nThe questions **paraphrase** the texts, often in more abstract language: *Which writer questions the motives of those who disagree?* rather than *Which writer says the campaigners are hypocrites?* So read for **attitude and purpose**, not just facts. Read the questions first, underline the key idea in each, then scan for it in other words. Below, four writers describe the same evening.' },
          { t: 'reading', title: 'Four accounts of one evening', md: '**A. From the local newspaper**\nHallam Bridge Council last night voted by seven votes to four to close Victoria Baths at the end of March. Council officers told the meeting that a survey had found the roof unsafe and that repairs would cost an estimated £2.3 million. Around two hundred residents attended, and a petition with four hundred signatures was presented. The council says that it will offer free transport to the leisure centre in Northgate, eight miles away. Campaigners have said they will challenge the decision.\n\n**B. From the Save Our Baths blog**\nLast night, in a hall packed to the doors, seven councillors turned their backs on a hundred and twenty years of history. Not one of them could explain why a roof survey commissioned in May was only shown to the public in November. We were offered a bus to Northgate as if that settled it. Ask any parent of a toddler, or anyone over eighty, how “free transport” to a pool an hour away actually works. We are not finished. We are only beginning.\n\n**C. From the council’s press release**\nFollowing a detailed independent survey, the council has taken the difficult decision to close Victoria Baths for public safety. We recognise the strength of feeling in the community and are grateful to everyone who took part in last night’s meeting. By investing in the modern facilities at Northgate and providing a free dedicated bus service, we will ensure that every resident continues to have access to swimming. Public safety must always come first.\n\n**D. From a newspaper column**\nThere were no villains at Victoria Baths last night, which is precisely what made it so dispiriting. The councillors were not heartless; they had been handed a report that left them very little room. The campaigners were not naive; they knew the roof was bad. What nobody would say aloud was that the town has let the building decay for twenty years because maintenance never wins votes, and that the bill has simply arrived all at once. Both sides, in their own way, preferred a story with someone to blame.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 7): which section (A, B, C or D) does each statement refer to? Each section may be chosen more than once.', items: [
            { q: 'Which account suggests that both sides avoided an uncomfortable truth?', o: ['D', 'A', 'B', 'C'], why: '*What nobody would say aloud… Both sides… preferred a story with someone to blame.*' },
            { q: 'Which account reports the result of the vote precisely?', o: ['A', 'B', 'C', 'D'], why: '*by seven votes to four*: only A gives the figures.' },
            { q: 'Which account questions the timing of the release of information?', o: ['B', 'A', 'C', 'D'], why: '*a roof survey commissioned in May was only shown to the public in November*' },
            { q: 'Which account acknowledges public opposition without engaging with its arguments?', o: ['C', 'A', 'B', 'D'], why: '*We recognise the strength of feeling* thanks people but answers none of their points.' },
            { q: 'Which account presents the decision as a break with the past?', o: ['B', 'A', 'C', 'D'], why: '*turned their backs on a hundred and twenty years of history*' },
            { q: 'Which account attributes the closure to a long-term failure of priorities?', o: ['D', 'A', 'B', 'C'], why: '*the town has let the building decay for twenty years because maintenance never wins votes*' },
            { q: 'Which account uses a repeated phrase to present safety as the only consideration?', o: ['C', 'A', 'B', 'D'], why: '*for public safety… Public safety must always come first.*' },
            { q: 'Which account suggests that an offer was inadequate for particular groups?', o: ['B', 'A', 'C', 'D'], why: '*Ask any parent of a toddler, or anyone over eighty…*' },
            { q: 'Which account reports both sides’ positions without obvious comment?', o: ['A', 'B', 'C', 'D'], why: 'A uses neutral verbs (*told*, *says*, *have said*) and gives both sides’ facts.' },
            { q: 'Which account denies that anyone acted out of bad intentions?', o: ['D', 'A', 'B', 'C'], why: '*There were no villains… The councillors were not heartless… The campaigners were not naive.*' },
          ] },
          { t: 'tip', art: 'owl', md: 'Two traps in **Part 7**. First, the same **topic** appears in several sections: all four mention the roof or the bus, so a question about the bus is not answered by any section that mentions it, only by the one that makes the **point** in the question. Second, abstract words in the questions (*acknowledges*, *attributes*, *denies*) describe what the writer is **doing**; ask which writer is doing that, not which writer uses that word.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor, as a neutral news report.', tutor: 'sofia', items: [
            { a: 'The council voted by seven votes to four to close the baths.' },
            { a: 'Campaigners have said they will challenge the decision.' },
            { a: 'The council says it will provide a free bus service.' },
            { a: 'It emerged that the survey had been completed in May.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'A speech and its critic',
      about: 'Read a speech and a commentary on it, then summarise and evaluate both in an essay in the format of C2 Proficiency Writing Part 1.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'This lesson brings the unit together in one of the hardest tasks of C2 Proficiency. In **Writing Part 1** you read **two short texts** on the same subject, usually with different views, and write an **essay** of **240 to 280 words**. You must **summarise** the key points of **both** texts, **evaluate** them and give **your own view**, in a formal register and **in your own words**. The two texts here are a speech and a commentary on it; they are a little longer than in the exam, so that you can study how each one persuades.' },
          { t: 'reading', title: 'Text 1: from a speech at a school prize-giving', md: 'Every child in this hall will one day need to persuade someone of something: an employer that they deserve the job, a bank that their idea deserves a loan, a neighbour that the hedge is, in fact, on their side of the fence. Yet we teach persuasion to almost nobody. We teach it, if at all, to the confident few who join the debating club.\n\nI have taught here for twenty-two years, and I have watched brilliant students lose arguments they should have won, simply because nobody had shown them how to stand up, organise three points and look an audience in the eye. That is not a failure of talent. It is a failure of teaching.\n\nSo I make no apology for asking that public speaking be taught to every pupil, in every year, not as a hobby but as a basic skill, like reading and arithmetic. Confidence is not a gift handed to the lucky. We do not teach children to speak because they are confident; they become confident because we have taught them to speak.' },
          { t: 'reading', title: 'Text 2: a commentary on the speech', md: 'The headteacher’s speech was warmly received, and it is easy to see why. It was itself a fine example of the skill it recommended: a personal appeal, a memorable phrase, a tidy final flourish. But it rests on an assumption worth questioning.\n\nThe speech treats persuasion as a neutral tool, like arithmetic. It is not. A pupil trained to win arguments is not thereby trained to deserve to win them, and the world is not short of people who speak fluently in support of bad ideas. If schools are to spend time on rhetoric, they should spend at least as much on the other side of the exchange: noticing a loaded word, asking where a statistic comes from, recognising when an appeal to feeling has replaced an argument.\n\nNone of this means the headteacher is wrong to want shy pupils to find their voices. It means that a confident speaker who cannot tell a good argument from a bad one is not an educated person, merely a persuasive one.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read both texts and choose the best answer.', items: [
            { q: 'What is the headteacher’s main proposal?', o: ['Public speaking should be taught to all pupils as a basic skill.', 'The debating club should be open to more students.', 'Pupils should learn to persuade employers and banks.', 'Confident pupils should help shy ones in class.'], why: '*public speaking be taught to every pupil, in every year… as a basic skill*' },
            { q: 'Which device ends the speech?', o: ['Chiasmus: teach to speak because confident / confident because taught to speak.', 'A rhetorical question.', 'An extended metaphor of a journey.', 'Epistrophe on the word *lucky*.'], why: '*We do not teach children to speak because they are confident; they become confident because we have taught them to speak*: the two ideas are reversed.' },
            { q: 'What assumption does the commentary question?', o: ['That persuasion is a neutral skill, like arithmetic.', 'That shy pupils can become confident.', 'That teachers know how to teach speaking.', 'That employers value good speakers.'], why: '*The speech treats persuasion as a neutral tool, like arithmetic. It is not.*' },
          ] },
        ],
        [
          { t: 'text', md: 'A Part 1 essay has three jobs, and the marks depend on doing all three.\n\n**Summarise** the key points of both texts **in your own words**. Copying phrases from the texts is penalised; you need to **paraphrase**, which usually means changing the structure as well as the words, and **reducing** each text to its central idea. *The headteacher calls for public speaking to be taught to all pupils* is a summary; *The headteacher says every child will one day need to persuade someone of something* only repeats a detail.\n\n**Evaluate** the points: say how convincing they are, what each writer gets right, what is missing, where the two texts meet and where they disagree.\n\n**Give your own view**, supported by a reason. You may take one side, combine the two, or add something neither writer says.\n\nThere is no fixed plan, but this one works for most tasks. Integrate the two texts rather than writing one paragraph on each with nothing to connect them.' },
          { t: 'table', caption: 'A plan for a Part 1 essay (240 to 280 words)', explain: ['head', 'col0', 'col1'], head: ['Paragraph', 'What to write', 'Useful language'], rows: [
            ['Introduction', 'the shared issue, in one or two sentences', 'Both texts consider whether…'],
            ['Text 1', 'its key point, paraphrased, with your evaluation', 'The first writer contends that… This is persuasive insofar as…'],
            ['Text 2', 'its key point, paraphrased, linked to Text 1', 'The second writer, by contrast, takes issue with… / goes further, arguing that…'],
            ['Your view', 'your position and the reason for it', 'On balance, I would argue that… / Neither writer acknowledges that…'],
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Paraphrase each point in your own words for a summary. Start with the words given.', items: [
            { q: 'We teach persuasion to almost nobody.', cue: 'Very few pupils', a: ['Very few pupils are taught how to persuade.', 'Very few pupils are taught to persuade.', 'Very few pupils are taught persuasion.', 'Very few pupils learn how to persuade.'], why: 'The structure changes (passive, new subject) as well as the words.' },
            { q: 'Confidence is not a gift handed to the lucky.', cue: 'The headteacher believes that confidence', a: ['The headteacher believes that confidence can be learned rather than being a gift.', 'The headteacher believes that confidence can be learned.', 'The headteacher believes that confidence can be taught.', 'The headteacher believes that confidence is learned, not inborn.'], why: 'The metaphor *a gift handed to the lucky* is reduced to its meaning.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Which sentence would work best in a Part 1 essay?', items: [
            { q: '', o: ['The headteacher argues that public speaking should be taught to every pupil as a core skill.', 'The headteacher says every child in this hall will one day need to persuade someone of something.', 'The headteacher gave a very good speech which everybody liked.'], why: 'The first paraphrases the key point; the second copies a detail; the third evaluates nothing.' },
            { q: '', o: ['The commentator’s objection is persuasive, although it perhaps underestimates how much shy pupils stand to gain.', 'The commentator is right.', 'The commentator says a pupil trained to win arguments is not trained to deserve to win them.'], why: 'The first evaluates with nuance; the second gives no reason; the third copies the text.' },
          ] },
        ],
        [
          { t: 'reading', title: 'A model essay (268 words)', md: '**Should schools teach persuasion?**\n\nBoth texts consider whether persuasive speaking deserves a place at the heart of the school curriculum, although they reach rather different conclusions.\n\nThe first writer, a headteacher, maintains that the ability to present a case clearly is a basic skill on a par with literacy, and that confining it to a self-selected few lets down many able pupils. This argument is persuasive insofar as confidence in public plainly can be developed, and the writer’s long experience lends weight to the claim that talented students are held back for want of it.\n\nThe second writer, while accepting this aim, takes issue with the assumption behind it. Persuasion, the commentator argues, is not a neutral technique: training pupils to argue effectively does nothing to ensure that what they argue is sound. Schools should therefore give at least equal attention to critical listening, so that pupils learn to detect manipulation as well as practise it.\n\nWhere the two writers agree is that shy pupils deserve help to find their voices. Where they differ is in what that help is for. In my view, the commentator identifies the more serious problem, but proposes a division that is unnecessary. Learning to build an argument and learning to dismantle one are, in practice, the same lesson seen from two sides: a pupil who has had to support a claim with evidence is far quicker to notice when someone else has not.\n\nOn balance, then, I would argue that rhetoric should be taught to all pupils, provided it is taught as a discipline of reasoning rather than a set of tricks.' },
          { t: 'ex', kind: 'choice', h: 'Read the model essay. Choose the best answer.', items: [
            { q: 'How does the essay handle the two texts?', o: ['It paraphrases each one, evaluates it and connects them through agreement and difference.', 'It copies the key sentences from each text.', 'It discusses only the text the writer agrees with.'], why: 'Each text is reduced to its central idea in new words, then the two are linked.' },
            { q: 'Where does the writer’s own view go beyond both texts?', o: ['In arguing that building and dismantling arguments are the same lesson.', 'In the title.', 'In agreeing that shy pupils deserve help.'], why: 'Neither text says that the two skills are one; this is the writer’s contribution.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes in a Part 1 essay', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['Long quotations from the texts', 'Paraphrase: new words and a new structure', 'Copied language is not credited.'],
            ['One paragraph per text, never connected', 'Points of agreement and difference linked', 'The essay should integrate the two texts.'],
            ['Summary only, no judgement', 'This is convincing insofar as… / This overlooks…', 'Evaluation is a required part of the task.'],
            ['The writer admits that confidence can be learned.', 'The writer argues that confidence can be learned.', '*Admit* adds a judgement that the writer did not make.'],
          ] },
          { t: 'text', md: '**Your writing task.** Read the two texts below and write an essay summarising and evaluating the key points from both texts. Use **your own words** throughout as far as possible, and include **your own ideas** in your answer. Write **240 to 280 words** and send it to your teacher, who will correct it.\n\n**Text 1.** *Political speeches have never been more carefully crafted, and never less trusted. Every phrase is tested on focus groups; every pause is rehearsed. Audiences sense the machinery, and the more polished the performance, the less they believe it. What voters now reward is the appearance of saying what one really thinks, which is itself, of course, a kind of performance.*\n\n**Text 2.** *It is fashionable to sneer at rhetoric, as though plain speaking were its opposite. But every memorable call to action, from the abolition of slavery to votes for women, was won partly by people who had taken great care over their words. The problem is not that speeches are crafted. It is that too many are crafted to say nothing at all.*\n\nPlan for five minutes first. Use at least two reporting verbs from lesson 3, one sentence that evaluates with *insofar as* or *overlooks*, and one device from lesson 2 in your own conclusion.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these essay sentences after the tutor.', tutor: 'kofi', items: [
            { a: 'Both texts consider whether persuasive speaking deserves a place in the curriculum.' },
            { a: 'The second writer takes issue with the assumption behind it.' },
            { a: 'This argument is persuasive insofar as confidence can be developed.' },
            { a: 'On balance, I would argue that rhetoric should be taught to all pupils.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'sort', h: 'Which appeal does each sentence mainly use?', groups: ['ethos', 'pathos', 'logos'], explain: ['groups'], items: [
      { s: 'In my fifteen years on the night bus, I have seen this every week.', g: 0, why: 'Experience: the speaker’s credibility.' },
      { s: 'Imagine an old man standing in the rain at midnight.', g: 1, why: 'An imagined scene: feeling.' },
      { s: 'If the route closes, the cost moves to the hospital.', g: 2, why: 'Cause and consequence: reasoning.' },
      { s: 'I am not an economist, and I will not pretend to be one.', g: 0, why: 'Honesty about limits builds trust.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Which device is used?', items: [
      { q: '“We will not wait. We will not beg. We will not be ignored.”', o: ['anaphora', 'chiasmus', 'epistrophe', 'hypophora'], why: 'The same words open each sentence.' },
      { q: '“We must not let the economy shape our values; our values must shape the economy.”', o: ['chiasmus', 'anaphora', 'tricolon', 'rhetorical question'], why: 'Economy, values / values, economy: the order is reversed.' },
      { q: '“When the mine closed, the families paid. When the line closed, the families paid.”', o: ['epistrophe', 'anaphora', 'antithesis', 'chiasmus'], why: 'The same words close each clause.' },
    ] },
    { t: 'ex', kind: 'select', h: 'Choose the reporting verb that fits the meaning.', items: [
      { q: 'The director ___ that she had known about the problem for months. (a confession)', o: ['admitted', 'insisted', 'alleged'], why: '*Admit*: confessing something wrong.' },
      { q: 'The union ___ that staff had been pressured to work unpaid hours. (not yet proved)', o: ['alleged', 'conceded', 'noted'], why: '*Allege*: an accusation without proof.' },
      { q: 'It ___ that the report had been delayed until after the election. (hidden until now)', o: ['emerged', 'conceded', 'insisted'], why: '*It emerged that*: a hidden fact comes out.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite each sentence. Use the words given.', items: [
      { q: 'Mistakes were made in the design of the bridge.', cue: 'The engineers', a: ['The engineers made mistakes in the design of the bridge.', 'The engineers made mistakes in designing the bridge.'], why: 'The active names who was responsible.' },
      { q: 'We will not give up, go quietly or forget.', cue: 'We will not give up. We will not', a: ['We will not give up. We will not go quietly. We will not forget.'], why: 'Anaphora: the same opening three times.' },
      { q: 'We do not teach persuasion to many pupils.', cue: 'Very few pupils', a: ['Very few pupils are taught how to persuade.', 'Very few pupils are taught to persuade.', 'Very few pupils are taught persuasion.'], why: 'A paraphrase changes the structure as well as the words.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'We must steer this ship through the [fire] of the crisis.', a: ['storm', 'waves', 'rocks'], why: 'Keep the sea image consistent.' },
      { s: 'The writer [admits] that public speaking can be learned. (a neutral summary)', a: ['argues', 'says', 'suggests', 'believes'], why: '*Admit* adds a judgement; a neutral summary uses *argues* or *says*.' },
      { s: 'As a nurse for twenty years, I use [logos] to show that I can be trusted.', a: ['ethos'], why: 'Trust in the speaker is ethos.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match each framing technique with its example.', pairs: [
      ['the agentless passive', 'Jobs were lost.'],
      ['loaded naming', 'a mob of agitators'],
      ['presupposition', 'Why does the council keep ignoring us?'],
      ['gain or loss framing', '90% of services protected'],
      ['nominalisation', 'the closure of the pool'],
    ] },
    { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
      { q: 'Which sentence would work best in a C2 Proficiency Writing Part 1 essay?', o: ['The commentator’s objection is persuasive, although it underestimates how much shy pupils stand to gain.', 'The commentator is right and the headteacher is wrong.', 'The commentator says a pupil trained to win arguments is not trained to deserve to win them.'], why: 'It evaluates with nuance and does not copy the text.' },
    ] },
  ],
};
