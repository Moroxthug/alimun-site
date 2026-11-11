// English C2, unit 3, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Irony, humour and wordplay: irony, sarcasm, understatement and overstatement; puns, double meanings and twisted idioms;
// less common idioms and phrasal verbs; and a humorous newspaper column. Each lesson has a speaking task and one task in
// the format of a named C2 Proficiency part: Listening Part 1, Reading and Use of English Parts 3, 1 and 7.
export const UNIT = {
  id: 'u3',
  title: 'Irony, humour and wordplay',
  goal: 'Recognise irony, sarcasm, understatement and overstatement from tone and context, explain how a pun or a twisted idiom works, use less common idioms and phrasal verbs with their grammar and register, and follow the humour of a newspaper column in the format of C2 Proficiency.',
  art: 'ghost',
  tags: { skills: ['vocabulary', 'listening', 'reading', 'speaking'], topics: ['irony', 'sarcasm', 'understatement', 'litotes', 'puns', 'wordplay', 'headlines', 'idioms', 'phrasal-verbs', 'humour', 'column'], goals: ['foundations', 'pleasure'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'Lovely weather, isn’t it?',
      about: 'Tell irony, sarcasm, understatement, litotes and overstatement apart, and hear the signals that show a speaker does not mean exactly what they say.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'Much of what people say is not meant literally, and at C2 you are expected to catch the difference without being told. Five tools do most of the work.\n\nIn **verbal irony**, the words say the opposite of what the speaker means, and the listener is trusted to notice: *Lovely weather, isn’t it?* said in a storm. **Sarcasm** is irony with an edge: it is aimed at someone, and it mocks or criticises (*Oh, brilliant. Another meeting about meetings.*). **Understatement** says much **less** than the truth (*The exam was a bit of a challenge*, from someone who failed it), and **litotes** is a special form of it that denies the opposite: *not bad* for very good, *not unlike* for quite like, *no small achievement* for a great one. **Overstatement**, or **hyperbole**, says much **more** than the truth: *I’ve told you a thousand times.*\n\nThe word *irony* also describes events. **Situational irony** is an outcome that reverses what was expected: the fire station burns down; the safety inspector slips on the stairs. **Dramatic irony** is when the audience knows something a character does not.' },
          { t: 'table', caption: 'Five ways of not saying it directly', explain: ['head', 'col0', 'col1'], head: ['Type', 'What the speaker does', 'Example'], rows: [
            ['verbal irony', 'says the opposite, usually gently', 'Lovely weather for a picnic. (in a downpour)'],
            ['sarcasm', 'says the opposite to mock or criticise someone', 'Thanks so much for your help. (to someone who did nothing)'],
            ['understatement', 'says much less than the truth', 'We had a slight disagreement. (after a furious row)'],
            ['litotes', 'denies the opposite to make a point quietly', 'It wasn’t the worst film I’ve seen. / That’s no mean feat.'],
            ['overstatement (hyperbole)', 'says far more than the truth', 'This bag weighs a ton. / I’ve been waiting for ages.'],
            ['situational irony', 'an outcome that reverses what was expected', 'The book on time management was delivered three weeks late.'],
          ] },
        ],
        [
          { t: 'text', md: 'Why does indirect meaning work at all? Because listeners assume that a speaker is trying to make sense. When the words clearly do not fit the facts (praise for a disaster, a shrug at a catastrophe), the listener looks for a second meaning, and finding it creates a small moment of shared understanding. That is why irony and understatement feel friendly between people who know each other, and why they can feel cold or confusing between strangers.\n\nYou recognise them by **signals**. In speech, the strongest is **tone**: exaggerated enthusiasm (*Oh, wonderful*), a flat voice for something dramatic (**deadpan**), or heavy stress on a word (*That was **really** helpful*). In both speech and writing, look for a **gap between the words and the facts**, over-the-top politeness, scare quotes (*my “colleague”*), and set phrases that often carry irony: *Great, just great*, *That’s all I needed*, *Tell me about it*, *As if*, *Of course you did*, *Well, that went well*.\n\nIndirect meaning also has a **social purpose**. Understatement lets a speaker complain without making a scene; litotes lets them praise without gushing; sarcasm lets them criticise while keeping the option of saying *I was only joking*. Listeners at C2 respond to the **intended** meaning, not to the words.' },
          { t: 'examples', items: [
            { s: '“Well, that went well,” said the director, as the curtain jammed halfway down.', n: 'Verbal irony: praise for an obvious failure.' },
            { s: '“Don’t rush on my account,” she said to the waiter who had ignored her for forty minutes.', n: 'Sarcasm: polite words aimed at someone, with a sharp edge.' },
            { s: 'The mountaineer described the storm as “a little unpleasant”.', n: 'Understatement: the calm words make the danger sound greater.' },
            { s: 'Running a marathon at seventy is **no mean feat**.', n: 'Litotes: *no mean feat* means a considerable achievement.' },
            { s: 'Her new novel is **not without its flaws**.', n: 'Litotes used to criticise gently: it has some clear weaknesses.' },
            { s: 'I’ve got about a million emails to answer before lunch.', n: 'Hyperbole: an exaggeration nobody takes literally.' },
            { s: 'My “quick chat” with the manager lasted two hours.', n: 'Scare quotes signal that the label is ironic.' },
            { s: 'The anti-noise campaign held its launch at a rock concert.', n: 'Situational irony: the setting reverses the purpose.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['It’s so ironic that it rained on my birthday.', 'It’s so annoying / typical that it rained on my birthday.', 'Bad luck is not irony; irony needs a reversal of what was expected.'],
            ['I was being ironical.', 'I was being ironic.', '*Ironic* is the usual adjective; *ironical* sounds dated.'],
            ['calling gentle teasing “sarcasm”', 'calling it irony, or teasing', 'Sarcasm is aimed at someone and is meant to sting.'],
            ['Thank you so much for losing my parcel! (in a formal complaint)', 'Unfortunately, my parcel appears to have been lost.', 'Irony is easily misread in writing and sounds rude to an official reader.'],
            ['He’s not unintelligent. (meant as warm praise)', 'He’s very bright.', 'Litotes often sounds cool or faintly critical, not warm.'],
            ['I literally died laughing. (in an essay)', 'I found it extremely funny.', 'Hyperbole belongs to informal speech; *literally* as an intensifier irritates many readers.'],
          ] },
          { t: 'dialogue', title: 'After the office party', lines: [
            { who: 'Owen', s: 'So, how was the party? I hear the karaoke was a highlight.' },
            { who: 'Grace', s: 'Oh, unforgettable. Mainly because Daniel sang the same song four times.' },
            { who: 'Owen', s: 'Four times? That’s dedication.' },
            { who: 'Grace', s: 'That’s one word for it. The manager said his performance was “not without energy”.' },
            { who: 'Owen', s: 'Which, coming from her, is practically a standing ovation.' },
            { who: 'Grace', s: 'And then the fire alarm went off during the speech on workplace safety.' },
            { who: 'Owen', s: 'You couldn’t make it up. Was anyone hurt?' },
            { who: 'Grace', s: 'Only Daniel’s pride. He had to stop halfway through the fifth time.' },
          ] },
        ],
        [
          { t: 'tip', art: 'owl', md: 'In a second language, use **sarcasm** with care. A native listener reads your tone instantly; a listener from another culture, or one who does not know you well, may hear only the words and take offence. **Understatement** and gentle **irony** are safer, and in British English they are part of everyday politeness: *It’s a bit nippy* in freezing weather, *I’m not entirely convinced* for strong disagreement.' },
          { t: 'ex', kind: 'sort', h: 'Which type of indirect meaning is it?', groups: ['irony or sarcasm', 'understatement or litotes', 'overstatement'], explain: ['groups'], items: [
            { s: '“Great, another delay,” he muttered as the board changed again.', g: 0, why: 'Positive words for something he clearly dislikes.' },
            { s: '“It’s a bit damp,” said the man standing in a flooded kitchen.', g: 1, why: 'Far less than the truth: understatement.' },
            { s: '“I’ve been queuing here since the dawn of time.”', g: 2, why: 'A wild exaggeration of a long wait.' },
            { s: '“Winning the regional title was no small achievement.”', g: 1, why: 'Litotes: *no small* means great.' },
            { s: '“Oh, do take your time,” she said to the colleague who was an hour late.', g: 0, why: 'Polite words aimed at someone, meant to criticise: sarcasm.' },
            { s: '“This suitcase must weigh a ton.”', g: 2, why: 'Hyperbole: no suitcase weighs a ton.' },
            { s: '“The reviews were not entirely positive,” said the author of the worst-reviewed play of the year.', g: 1, why: 'A great understatement of very bad reviews.' },
            { s: '“Lovely day for it,” said the postman, soaked to the skin.', g: 0, why: 'Gentle verbal irony about the weather.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What does the speaker really mean?', items: [
            { q: '“Well, that’s just what I needed,” said Lucy, as her laptop died during the presentation.', o: ['It was the worst possible thing to happen.', 'She had been hoping for a break.', 'She needed a new laptop anyway.'], why: 'Irony: the opposite of what she says.' },
            { q: '“His cooking isn’t exactly award-winning,” said his sister.', o: ['His cooking is rather poor.', 'He has never entered a competition.', 'His cooking has improved.'], why: '*Not exactly* + praise is a common understatement for criticism.' },
            { q: '“Climbing it in winter was no picnic,” said the guide.', o: ['It was very hard.', 'They did not stop to eat.', 'It was quite enjoyable.'], why: 'Litotes: *no picnic* means difficult.' },
            { q: '“Oh, of course you were working late,” said Sara, holding up his cinema ticket.', o: ['She does not believe him.', 'She is sorry he had to work.', 'She wants to see the film.'], why: '*Of course you were* + clear evidence against it: sarcasm.' },
            { q: '“There may have been one or two people at the concert,” said James, looking at the photo of a packed stadium.', o: ['The concert was extremely well attended.', 'Hardly anyone came.', 'He was not sure how many came.'], why: 'Deliberate understatement for comic effect.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Say it more quietly: rewrite each sentence as an understatement or with litotes, starting with the words given.', items: [
            { q: 'The hotel was absolutely awful.', cue: 'The hotel wasn’t', a: ['The hotel wasn’t exactly luxurious.', 'The hotel wasn’t the best.', 'The hotel wasn’t exactly the best.', 'The hotel wasn’t great.', 'The hotel wasn’t exactly great.', 'The hotel wasn’t very good.'], why: '*Not exactly* or *not the best* says less than the truth.' },
            { q: 'Finishing the book in a month was a great achievement.', cue: 'Finishing the book in a month was no', a: ['Finishing the book in a month was no mean feat.', 'Finishing the book in a month was no small achievement.', 'Finishing the book in a month was no small feat.', 'Finishing the book in a month was no mean achievement.'], why: 'Litotes: *no mean feat* or *no small achievement*.' },
            { q: 'The two brothers hate each other.', cue: 'The two brothers aren’t', a: ['The two brothers aren’t exactly close.', 'The two brothers aren’t the best of friends.', 'The two brothers aren’t on the best of terms.', 'The two brothers aren’t exactly the best of friends.'], why: 'A tactful understatement of a serious conflict.' },
            { q: 'I strongly disagree with the plan.', cue: 'I’m not entirely', a: ['I’m not entirely convinced by the plan.', 'I’m not entirely sure about the plan.', 'I’m not entirely happy with the plan.', 'I’m not entirely convinced about the plan.'], why: 'The classic British way of disagreeing politely.' },
          ] },
        ],
        [
          { t: 'text', md: 'In **C2 Proficiency Listening Part 1** you hear **three short extracts**, each a conversation or a monologue on a different subject, and answer **two multiple-choice questions** on each, with **three options**. You hear each extract twice.\n\nAt this level the questions rarely ask for a fact. They ask what a speaker **means**, **implies** or **feels**, and that is exactly where irony and understatement live. The wrong options usually take the speaker’s words at face value. When a speaker praises something that has clearly gone wrong, or plays down something serious, ask: what would they say if they spoke plainly?' },
          { t: 'dialogue', title: 'Extract one: the launch', lines: [
            { who: 'Owen', s: 'So, the product launch. I hear it was a triumph.' },
            { who: 'Grace', s: 'Oh, absolutely. The projector died in the first minute, the samples never arrived, and our guest speaker spent twenty minutes talking about his boat. Apart from that, flawless.' },
            { who: 'Owen', s: 'And the client?' },
            { who: 'Grace', s: 'Left early. Very politely, I should say. He told us the afternoon had been “most illuminating”, which, coming from him, is roughly the same as tearing up the contract.' },
            { who: 'Owen', s: 'Has Margaret seen the feedback?' },
            { who: 'Grace', s: 'She sent round an email thanking everyone for their “energy and creativity”. I can’t decide whether she’s being kind or whether she simply wasn’t there.' },
            { who: 'Owen', s: 'She wasn’t. She was at the dentist.' },
            { who: 'Grace', s: 'Lucky her.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Listening Part 1): listen to extract one and choose the answer which fits best according to what you hear.', items: [
            { q: 'When Grace says “Apart from that, flawless”, she is', o: ['being ironic about a series of failures', 'admitting there were only minor problems', 'praising the guest speaker’s performance'], why: 'She lists three disasters and then calls the event flawless: verbal irony.' },
            { q: 'What does Grace suggest about the client’s comment that the afternoon was “most illuminating”?', o: ['It was a polite way of showing he was unimpressed.', 'It showed that he had learned a great deal.', 'It meant he was ready to sign the contract.'], why: '*Roughly the same as tearing up the contract*: the polite words hide a negative verdict.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'Extract two: the comedian', lines: [
            { who: 'Presenter', s: 'Oliver, you’ve built a whole show around British understatement. Why does it make people laugh?' },
            { who: 'Oliver', s: 'Because it’s a kind of shared secret. If I tell you a hurricane was “a bit breezy”, I’m trusting you to know exactly how bad it was. The joke happens in the gap between my words and the truth, and you fill that gap yourself.' },
            { who: 'Presenter', s: 'Some visitors find it baffling, though. They hear “not bad” and think it’s an insult.' },
            { who: 'Oliver', s: 'They’re right to be confused. “Not bad” can mean anything from “mediocre” to “the best meal I’ve had in years”. You have to listen to the voice, not the words. I’ve had audiences abroad sit in silence through my best material and then laugh when I dropped my notes.' },
            { who: 'Presenter', s: 'Does that bother you?' },
            { who: 'Oliver', s: 'Bother me? I was devastated. For about a minute and a half.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Listening Part 1): listen to extract two and choose the answer which fits best according to what you hear.', items: [
            { q: 'According to Oliver, understatement is funny because', o: ['the listener has to complete the meaning', 'it exaggerates the truth for effect', 'it avoids offending anybody'], why: '*The joke happens in the gap… and you fill that gap yourself.* The second option describes overstatement.' },
            { q: 'When Oliver says “I was devastated. For about a minute and a half”, he is', o: ['making fun of his own reaction', 'admitting that the experience upset him deeply', 'criticising audiences in other countries'], why: 'The second sentence undercuts the first: self-mocking irony.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'Extract three: the cottage', lines: [
            { who: 'Daniel', s: 'How was the cottage? The photos on the website looked idyllic.' },
            { who: 'Mia', s: 'The photos were a work of fiction. The “sea view” required a ladder, and “cosy kitchen” meant two people couldn’t open the fridge at the same time.' },
            { who: 'Daniel', s: 'Oh dear. And the weather?' },
            { who: 'Mia', s: 'It rained precisely once. It started on Saturday morning and stopped as we drove away.' },
            { who: 'Daniel', s: 'So, never again?' },
            { who: 'Mia', s: 'Are you joking? It’s the best holiday we’ve had in years. We played cards for a week and nobody looked at a phone. I’d go back tomorrow, though I might bring my own ladder.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Listening Part 1): listen to extract three and choose the answer which fits best according to what you hear.', items: [
            { q: 'What does Mia imply about the description of the cottage?', o: ['It was misleading.', 'It was accurate but unappealing.', 'It was written in a humorous style.'], why: '*A work of fiction*, and the scare quotes around *sea view* and *cosy kitchen*.' },
            { q: 'How does Mia feel about the holiday overall?', o: ['She enjoyed it in spite of its problems.', 'She regrets having chosen it.', 'She only began to relax at the end.'], why: '*The best holiday we’ve had in years… I’d go back tomorrow.* *It rained precisely once* is irony: it rained all week.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Listening Part 1**, the questions often quote the speaker (*When Grace says…, she is…*). That is a signal that the words do not mean what they seem to. Listen to what comes **before and after** the quoted words: the context, not the phrase itself, gives the answer.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor. Let your voice carry the irony.', tutor: 'sofia', items: [
            { a: 'Well, that went well.' },
            { a: 'Running a marathon at seventy is no mean feat.' },
            { a: 'Apart from that, the launch was flawless.' },
            { a: 'I’m not entirely convinced by the plan.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'Puns and double meanings',
      about: 'Explain how puns, ambiguous headlines and twisted idioms make readers look twice, and form the words that describe humour.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'A **pun** (also called a **play on words**) uses a word or phrase so that two meanings are active at the same time. The reader notices the first meaning, then the second, and the pleasure (or the groan) comes from holding both at once.\n\nPuns work in a few ways. One word can have **two meanings**: *I used to be a banker, but I lost **interest**.* Two words can **sound alike**: a bakery that promises *We **knead** your custom* (*knead* and *need*). A word can fit **two contexts** at once: *Council’s new bin plan is **rubbish*** (waste, and nonsense). A **fixed idiom** can be twisted by changing one word or by reading it literally: a fish and chip shop called *The **Cod**father*, or a hairdresser called *Curl Up and **Dye***.\n\nTwo relatives of the pun are worth knowing. **Zeugma** makes one verb serve two objects in different senses: *She lost her keys and her temper.* An **ambiguous headline** is wordplay by accident: *Squad helps dog bite victim* can be read as a squad helping a victim of a dog bite, or helping a dog to bite someone.' },
          { t: 'table', caption: 'How wordplay works', explain: ['head', 'col0', 'col2'], head: ['Technique', 'Example', 'The two meanings'], rows: [
            ['one word, two meanings', 'I used to be a banker, but I lost interest.', 'curiosity / money paid on a loan'],
            ['two words that sound alike', 'We knead your custom. (bakery)', 'knead (work dough) / need'],
            ['a word that fits both contexts', 'Council’s new bin plan is rubbish.', 'waste / nonsense'],
            ['a twisted idiom or title', 'The Codfather (fish shop)', 'cod / the film title The Godfather'],
            ['an idiom read literally', 'Hard cheese for festival fans. (cheese festival cancelled)', 'bad luck (idiom) / firm cheese'],
            ['zeugma', 'She lost her keys and her temper.', 'lose an object / lose control'],
            ['an accidental ambiguity', 'Squad helps dog bite victim.', 'helps a victim / helps a dog to bite'],
          ] },
        ],
        [
          { t: 'text', md: 'Why do headline writers, advertisers and shop owners love puns? Because a pun **makes the reader stop**. A headline that can be read twice is read at least once more slowly, and an advert that makes you smile is remembered. On the sports and features pages of British newspapers, a good pun is almost expected; on the front page, about a tragedy, it would be in very bad taste.\n\nTo **explain** a pun, which you may have to do in class or in an exam, name **both meanings** and say what in the context supports each one. *The headline “Hard cheese for festival fans” is a play on **hard cheese**, a British idiom for bad luck, and on the literal hard cheese the festival was meant to celebrate.*\n\nPuns are notoriously difficult to **translate**, because the two meanings rarely share one word in another language. Translators often replace a pun with a different joke, or give up and add a note.' },
          { t: 'examples', items: [
            { s: 'Time flies like an arrow; fruit flies like a banana.', n: 'The second half changes the grammar: *fruit flies* (insects) *like* (enjoy) a banana.' },
            { s: 'A sign in a shoe shop: Our sole purpose is your comfort.', n: '*Sole* (only) and the *sole* of a shoe.' },
            { s: 'Headline: Local orchestra hits the right note with new hall.', n: '*Hit the right note* (do something well) and musical notes.' },
            { s: 'A café called Brew-tiful.', n: 'A blend of *brew* and *beautiful*: the shop-sign pun.' },
            { s: 'He drove his car into a lamp post and his insurance premium through the roof.', n: 'Zeugma: *drove* used literally and figuratively.' },
            { s: 'Headline: Kids make nutritious snacks.', n: 'Accidental ambiguity: children prepare snacks, or children are snacks.' },
            { s: 'Advert for an optician: Seeing is believing.', n: 'A proverb used literally for a business about eyesight.' },
            { s: 'I’m reading a book about anti-gravity. It’s impossible to put down.', n: '*Impossible to put down*: very gripping, and literally floating.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['It’s a play of words.', 'It’s a play on words.', 'The fixed phrase uses *on*.'],
            ['a word game in the headline', 'wordplay in the headline', 'A *word game* is a game such as a crossword.'],
            ['The joke has a double sense.', 'The joke has a double meaning.', '*Double meaning* is the natural collocation.'],
            ['a humoristic article', 'a humorous article', '*Humoristic* is not used in English.'],
            ['The pun is with “interest”.', 'The pun is on “interest”.', 'A pun is *on* a word.'],
            ['explaining only the hidden meaning', 'naming both meanings and the context for each', 'A pun needs both meanings at once.'],
          ] },
          { t: 'dialogue', title: 'Writing the headline', lines: [
            { who: 'Laura', s: 'Right, the cheese festival story. Rain has cancelled it for the first time in forty years. Headline?' },
            { who: 'Ben', s: '“Festival cancelled because of heavy rain”?' },
            { who: 'Laura', s: 'Accurate, and nobody will read past it. Give me something with a bit of wit.' },
            { who: 'Ben', s: '“Grate disappointment for cheese lovers”?' },
            { who: 'Laura', s: 'Better. The pun on grate and great works, but it’s been done a hundred times. What do we say in Britain when someone has bad luck?' },
            { who: 'Ben', s: 'Hard cheese! “Hard cheese for festival fans.”' },
            { who: 'Laura', s: 'Perfect. The idiom means bad luck, and the festival’s literally about cheese. Nobody can read it only one way.' },
            { who: 'Ben', s: 'Shall I add “Organisers feel the pinch” for the second story?' },
            { who: 'Laura', s: 'Only if the second story is about money. A pun that doesn’t fit the facts is just a bad joke.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each word from a pun with its two meanings.', pairs: [
            ['interest', 'curiosity / money paid on a loan'],
            ['rubbish', 'waste / nonsense'],
            ['sole', 'only / the bottom of a shoe'],
            ['hard cheese', 'bad luck / firm cheese'],
            ['grate', 'shred food / sounds like great'],
            ['put down', 'stop reading / place on a surface'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Which word or phrase carries the double meaning?', items: [
            { q: 'A headline about a new bridge that has opened late: “Bridge finally spans the gap between promise and reality.”', o: ['spans the gap', 'finally', 'promise'], why: 'A bridge literally *spans a gap*; here it is also the gap between what was promised and what happened.' },
            { q: 'An optician’s advert: “We’ll see you soon.”', o: ['see', 'soon', 'We’ll'], why: '*See you soon* means goodbye; at an optician’s, they will also literally test how well you see.' },
            { q: 'A headline about a librarian who won a tennis match: “Librarian books place in final.”', o: ['books', 'place', 'final'], why: '*Book a place* means reserve it; librarians work with books.' },
            { q: 'A sign outside a gym: “Where there’s a will, there’s a weigh.”', o: ['weigh', 'will', 'there’s'], why: 'The proverb ends *there’s a way*; *weigh* sounds the same and fits the gym.' },
            { q: 'She arrived in tears and a taxi.', o: ['arrived in', 'tears', 'taxi'], why: 'Zeugma: *arrive in tears* (crying) and *arrive in a taxi* (transport).' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Each headline can be read in two ways by accident. Tap the word or words that cause the ambiguity.', items: [
            { s: 'Squad helps dog [bite] victim.', why: '*Bite* can be a noun (*a dog bite victim*) or a verb (*helps the dog bite*).' },
            { s: 'Kids [make] nutritious snacks.', why: '*Make* can mean prepare, or be (as in *She makes a good teacher*).' },
            { s: 'Police help man [with knife] wound.', why: 'A man with a knife wound, or a man using a knife to wound.' },
            { s: 'Elderly drivers [hit] by new rules.', why: '*Hit* figuratively (affected by) or literally.' },
          ] },
          { t: 'tip', art: 'owl', md: 'When you **write** a pun, check that it works on **both** levels. Laura’s rule in the dialogue is a good one: the second meaning must fit the facts of the story, or it is only noise. In formal writing, such as a report or an academic essay, leave puns out altogether.' },
        ],
        [
          { t: 'text', md: 'In **C2 Proficiency Reading and Use of English Part 3** you read a text with **eight gaps**. Each gap has a **stem word** in capitals, and you change it to fit. At C2 most answers need **more than one change**: a prefix and a suffix (*INTEND → **unintentionally***), an internal change (*CONGRUOUS → **incongruity***) or a compound.\n\nWork in this order: decide the **word class** the sentence needs; decide whether the meaning is **positive or negative**; check whether a noun must be **plural**; then spell it with care, because a single wrong letter loses the mark.' },
          { t: 'ex', kind: 'wordform', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 3): read the text about puns. Use the word in capitals to form a word that fits each gap.', items: [
            { q: 'A good pun asks the reader to hold two meanings at once, and the pleasure lies in the moment of ___.', base: 'recognise', a: ['recognition'], why: 'A noun after *the moment of*: *recognition*.' },
            { q: 'Headline writers are ___ fond of wordplay, especially on the sports pages.', base: 'notorious', a: ['notoriously'], why: 'An adverb before the adjective *fond*.' },
            { q: 'Some puns are so ___ that readers groan rather than laugh.', base: 'predict', a: ['predictable'], why: 'An adjective after *so*: *predictable*.' },
            { q: 'Yet even a groan is a form of ___: nobody groans at a joke they have not understood.', base: 'appreciate', a: ['appreciation'], why: 'A noun after *a form of*.' },
            { q: 'Puns that depend on sound are almost ___, which is why translators dread them.', base: 'translate', a: ['untranslatable'], why: 'Negative prefix *un-* and suffix *-able*: two changes.' },
            { q: 'An ___ ambiguous headline can be funnier than any deliberate joke.', base: 'intend', a: ['unintentionally'], why: 'An adverb with *un-*, *-tion*, *-al* and *-ly*; *an* before it tells you it starts with a vowel.' },
            { q: 'Psychologists argue that the ___ of two meanings meeting in one word is what makes us laugh.', base: 'congruous', a: ['incongruity'], why: 'Negative *in-* and the noun ending *-ity*, with the *u* dropped.' },
            { q: 'Comedians who rely on wordplay are sometimes dismissed as lightweight, a ___ that many of them resent.', base: 'characterise', a: ['characterisation', 'characterization'], why: 'A noun: *characterisation* (British) or *characterization*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'I used to be a banker, but I lost interest.' },
            { a: 'The headline is a play on words.' },
            { a: 'She lost her keys and her temper.' },
            { a: 'A pun that doesn’t fit the facts is just a bad joke.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'Bite the bullet, grasp the nettle',
      about: 'Use less common idioms and phrasal verbs with their exact grammar, register and attitude.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'At C2, idioms are not decoration. A well-chosen idiom compresses an **attitude** into a few words: *He finally **bit the bullet*** tells us that the task was unpleasant, that he had been putting it off, and that he deserves some credit. The difficulty is that idioms are **fixed**: change a word and the idiom breaks, or becomes a joke.\n\nThe idioms in this lesson group naturally by meaning. To **face** something difficult: **bite the bullet** (do the unpleasant thing you have been avoiding), **grasp the nettle** (deal firmly with a problem; common in British politics and journalism), **face the music** (accept the consequences). To **avoid** it: **wriggle out of** (escape a duty, often with excuses), **fob someone off** (satisfy someone with an excuse or something inferior), **pass the buck** (push the responsibility onto someone else), **paper over the cracks** (hide a problem instead of solving it). **Power**: **hold sway** (have great influence), **call the shots** (make the decisions). **Getting through**: **tide someone over** (help someone through a short difficult period), **keep the wolf from the door** (earn just enough to live). **Trouble**: **fall foul of** (get into trouble with a rule or authority), **put paid to** (end a hope or plan for good).' },
          { t: 'table', caption: 'Idioms and phrasal verbs with their grammar', explain: ['head', 'col1', 'col2'], head: ['Expression', 'Meaning', 'Grammar', 'Example'], rows: [
            ['bite the bullet', 'do something unpleasant you have avoided', 'fixed; often + and + verb', 'I bit the bullet and called the bank.'],
            ['grasp the nettle', 'deal firmly with a difficult problem', 'fixed; often + of + noun', 'The council must grasp the nettle of housing.'],
            ['hold sway', 'have great power or influence', 'no object; + over / in', 'Tradition still holds sway in the village.'],
            ['tide someone over', 'help someone through a short difficult time', 'object between tide and over', 'A small loan tided us over until spring.'],
            ['wriggle out of', 'avoid a duty, often with excuses', '+ noun or -ing', 'He wriggled out of doing the dishes.'],
            ['fob someone off (with)', 'satisfy someone with an excuse or something inferior', 'object usually in the middle', 'They fobbed me off with a voucher.'],
            ['pass the buck', 'push responsibility onto someone else', 'fixed; + to + person', 'The ministry passed the buck to the councils.'],
            ['put paid to', 'end a hope or plan completely', '+ noun', 'The injury put paid to her hopes of a medal.'],
            ['fall foul of', 'get into trouble with a rule or authority', '+ noun', 'The advert fell foul of the regulator.'],
          ] },
        ],
        [
          { t: 'text', md: 'Three things decide whether you use an idiom well.\n\n**Grammar.** Most idioms are fixed, but the verb changes tense normally (*She **bit** the bullet*, *They **have grasped** the nettle*). Phrasal verbs keep their own patterns: the object goes **between** the parts of *tide someone over* and usually of *fob someone off*, while *wriggle out of* and *fall foul of* take their object **after** them.\n\n**Register.** *Bite the bullet*, *wriggle out of* and *fob off* are informal to neutral: natural in conversation, journalism and emails between colleagues, out of place in an academic essay. *Grasp the nettle*, *hold sway* and *put paid to* are at home in serious journalism and speeches.\n\n**Attitude.** Many idioms carry a judgement. *Wriggle out of* and *pass the buck* are critical; *grasp the nettle* is admiring. *Fob off* tells us the speaker feels cheated. Choose the idiom whose attitude you really mean.' },
          { t: 'examples', items: [
            { s: 'After months of delay, she finally **bit the bullet** and handed in her notice.', n: 'She did the unpleasant thing she had been putting off.' },
            { s: 'No government has yet been willing to **grasp the nettle** of pension reform.', n: 'Admiring language for facing a hard problem; typical of journalism.' },
            { s: 'For centuries the guilds **held sway over** trade in the city.', n: '*Hold sway over* + the area of influence.' },
            { s: 'Could you lend me fifty pounds to **tide me over** until payday?', n: 'The object goes in the middle: *tide me over*.' },
            { s: 'He always manages to **wriggle out of** the washing-up.', n: 'Critical: he avoids his share cleverly.' },
            { s: 'I asked for a refund and they **fobbed me off with** a discount code.', n: 'The speaker feels cheated: something less than they wanted.' },
            { s: 'When things go wrong, managers there tend to **pass the buck**.', n: 'Critical: nobody takes responsibility.' },
            { s: 'A late frost **put paid to** any hope of a good harvest.', n: 'Ended the hope completely.' },
            { s: 'The campaign **fell foul of** the new advertising rules.', n: 'Got into trouble with an authority or a rule.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I bit the bullets and called him.', 'I bit the bullet and called him.', 'The idiom is fixed: one bullet.'],
            ['A loan will tide over me.', 'A loan will tide me over.', 'The object goes between *tide* and *over*.'],
            ['He wriggled out from the meeting.', 'He wriggled out of the meeting.', 'The preposition is *of*.'],
            ['They fobbed me with excuses.', 'They fobbed me off with excuses.', '*Off* is part of the verb.'],
            ['The rain put paid the match.', 'The rain put paid to the match.', '*Put paid to* + noun.'],
            ['Tradition holds the sway here.', 'Tradition holds sway here.', 'No article in *hold sway*.'],
            ['We must grasp the nettle. (in a lab report)', 'We must address the problem directly.', 'Too idiomatic for academic writing.'],
          ] },
          { t: 'dialogue', title: 'The awkward conversation', lines: [
            { who: 'Kate', s: 'Have you spoken to the supplier about the late deliveries yet?' },
            { who: 'Tom', s: 'Not yet. Every time I ring, they fob me off with some story about the ferry.' },
            { who: 'Kate', s: 'Then it’s time to grasp the nettle. If we paper over the cracks again, the next delay could put paid to the whole contract.' },
            { who: 'Tom', s: 'I know. I’ve just been hoping someone else would deal with it.' },
            { who: 'Kate', s: 'You mean pass the buck? Tom, you manage the account.' },
            { who: 'Tom', s: 'Fair enough. I’ll bite the bullet and call the director this afternoon.' },
            { who: 'Kate', s: 'Good. And if they try to wriggle out of the penalty clause, remind them it’s in writing.' },
            { who: 'Tom', s: 'Our stock should tide us over for a week. After that, we’re in trouble.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each expression with its meaning.', pairs: [
            ['bite the bullet', 'do the unpleasant thing you have been avoiding'],
            ['hold sway', 'have great power or influence'],
            ['tide someone over', 'help someone through a short difficult time'],
            ['fob someone off', 'satisfy someone with an excuse'],
            ['pass the buck', 'push responsibility onto someone else'],
            ['put paid to', 'end a hope or plan completely'],
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the word that completes the expression correctly.', items: [
            { q: 'Two hundred pounds should tide ___ over until the end of the month.', o: ['us', 'for us', 'to us'], why: 'The object goes between *tide* and *over*.' },
            { q: 'She managed to wriggle ___ of giving the speech.', o: ['out', 'off', 'away'], why: '*Wriggle out of* + -ing.' },
            { q: 'The scheme fell ___ of the competition authorities.', o: ['foul', 'short', 'flat'], why: '*Fall foul of* an authority. *Fall short of* means fail to reach.' },
            { q: 'Old superstitions still hold ___ in some mountain villages.', o: ['sway', 'power', 'control'], why: '*Hold sway*: fixed, no article.' },
            { q: 'When I complained, they fobbed me off ___ a free coffee.', o: ['with', 'by', 'for'], why: '*Fob someone off with* something.' },
            { q: 'The scandal put ___ to his political ambitions.', o: ['paid', 'pay', 'paying'], why: 'The fixed form is *put paid to*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake in each sentence.', items: [
            { s: 'It was time to [bite the bullets] and tell the team.', a: ['bite the bullet'], why: 'The idiom is fixed: *bite the bullet*.' },
            { s: 'The minister tried to [pass the bucks] to her predecessor.', a: ['pass the buck'], why: 'The idiom is fixed: *pass the buck*.' },
            { s: 'We can’t keep [papering the cracks]; the building needs real repairs.', a: ['papering over the cracks'], why: '*Paper over the cracks*: *over* is part of the idiom.' },
            { s: 'He always wriggles out [from] the difficult jobs.', a: ['of'], why: '*Wriggle out of*.' },
          ] },
        ],
        [
          { t: 'text', md: 'In **C2 Proficiency Reading and Use of English Part 1** you read a text with **eight gaps** and choose one of **four options** for each. The options are close in meaning, and the answer usually depends on a **fixed expression**, a **collocation**, a **dependent preposition** or a fine difference of meaning. Idioms and phrasal verbs are typical: all four options may be real verbs, but only one makes the idiom.\n\nRead the whole text first. At each gap, read to the end of the sentence, because the words **after** the gap often decide the answer (*tide the market **over***, *put paid **to***).' },
          { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 1): read the text about a town’s old market and choose the answer which best fits each gap.', items: [
            { q: 'For years, the council preferred to ___ the question of the crumbling market hall rather than pay for repairs.', o: ['sidestep', 'sidetrack', 'overstep', 'sidle'], why: 'You *sidestep a question*: avoid dealing with it. You *sidetrack* a person, *overstep* a limit and *sidle* towards someone.' },
            { q: 'Traders who complained were ___ off with promises of a review that never came.', o: ['fobbed', 'fended', 'warded', 'palmed'], why: '*Fob someone off with* promises. You *fend off* or *ward off* an attack; you *palm something off on* someone.' },
            { q: 'Last spring, the new council leader finally decided to ___ the nettle.', o: ['grasp', 'seize', 'clutch', 'grip'], why: 'The fixed idiom is *grasp the nettle*.' },
            { q: 'Tradition still ___ sway in the town, and the plan to sell the building met fierce resistance.', o: ['holds', 'keeps', 'bears', 'carries'], why: 'The fixed idiom is *hold sway*. *Carry weight* is a different expression.' },
            { q: 'Her critics accused her of trying to ___ the buck to the previous administration.', o: ['pass', 'hand', 'give', 'throw'], why: 'The fixed idiom is *pass the buck*.' },
            { q: 'A grant from a heritage trust should ___ the market over until a permanent solution is found.', o: ['tide', 'carry', 'bring', 'take'], why: '*Tide something over*: help it through a short difficult period.' },
            { q: 'The decision has almost certainly ___ paid to any hope of a supermarket on the site.', o: ['put', 'set', 'made', 'laid'], why: 'The fixed idiom is *put paid to*.' },
            { q: 'Most traders, however, are prepared to ___ their time and see whether the repairs succeed.', o: ['bide', 'mark', 'while', 'kill'], why: '*Bide your time*: wait patiently for the right moment. You *mark time* without *their*, and *while away* or *kill* time when you are bored.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 1**, never choose an option just because it “sounds right” on its own. Put each one into the sentence and ask whether it makes a **fixed expression** with the words around it. *Seize the nettle* sounds plausible, but no English speaker says it.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'omar', items: [
            { a: 'I’ll bite the bullet and call the director this afternoon.' },
            { a: 'If we paper over the cracks again, we could lose the contract.' },
            { a: 'A small loan should tide us over until spring.' },
            { a: 'Tradition still holds sway in the town.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'A column that laughs at itself',
      about: 'Read a humorous newspaper column, name the devices that make it funny, and find information in it in the format of C2 Proficiency Reading and Use of English Part 7.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'A **humorous column** is a regular piece in a newspaper or magazine in which a writer turns small events of everyday life into entertainment. The humour rarely comes from jokes. It comes from a **persona**: a narrator who is slightly pompous, slightly hopeless and fully aware of it, and from a handful of devices that you have already met in this unit.\n\n**Mock-heroic** language describes something trivial in grand terms: a trip to the supermarket becomes a war. **Bathos** builds up to something serious and then drops to something ridiculous. **Self-deprecation** makes the writer the target of the joke. **Personification** gives objects human feelings and intentions. **Deadpan** reports absurd events in a flat, serious voice. The **comic list** runs through ordinary items and ends with an odd one. Add **understatement**, **hyperbole** and an idiom or two, and you have the column’s whole toolkit.' },
          { t: 'table', caption: 'The comic devices of a column', explain: ['head', 'col0', 'col1'], head: ['Device', 'What it does', 'Example'], rows: [
            ['mock-heroic', 'describes something trivial in grand terms', 'The machine has declared war on me.'],
            ['bathos', 'falls from the serious to the ridiculous', 'I have faced grief, illness and the self-checkout.'],
            ['self-deprecation', 'makes the writer the target', 'It is more of a negotiation, and I am losing.'],
            ['personification', 'gives an object human feelings', 'The banana is looking forward to it.'],
            ['deadpan', 'reports the absurd in a flat voice', '“It does that,” said the assistant.'],
            ['the comic list', 'ends a list with an odd item', 'bread, a lettuce and somebody else’s receipt'],
          ] },
        ],
        [
          { t: 'reading', title: 'My long war with the self-checkout', md: '**A.** There is a machine at my local supermarket that has declared war on me. It is called the self-checkout, a name which suggests a certain independence on my part. In practice, our relationship is more of a negotiation, conducted on its terms, and I am losing. I have faced exams, job interviews and a driving test in the snow. None of them prepared me for this.\n\n**B.** “Unexpected item in the bagging area,” it announces, in the voice of a disappointed headteacher. The item is a banana. I have, as far as I can tell, been carrying this banana since the previous decade. I remove it; the machine is satisfied. I put it back; the machine is not. A young assistant glides over, taps a screen without looking at it and says, “It does that.” I would like it recorded that this was not a comfort.\n\n**C.** I have considered grasping the nettle and queuing at a till staffed by a human being. But that would feel like admitting defeat, and besides, I always end up behind a man paying for a week’s shopping in coins. Online delivery was no better. I ordered three limes and received, with a note of apology, a single grapefruit. I have kept the note. It is the most sincere thing anyone has written to me in years.\n\n**D.** Meanwhile, everyone else glides through. Pensioners scan their shopping with the calm of concert pianists. My teenage son can do it with one hand while texting with the other, and the machine never once accuses him of anything. I am fairly sure it likes him. The assistant, for her part, now approaches me slowly, with her palms open, as one might approach a nervous horse.\n\n**E.** Yesterday, after a short, intense struggle, I left with a loaf of bread, a lettuce and, by accident, somebody else’s receipt. It was, to put it mildly, a modest victory, but I am taking it. Tomorrow I shall bite the bullet and attempt the scales. The banana, I am told, is looking forward to it.' },
        ],
        [
          { t: 'text', md: 'In **C2 Proficiency Reading and Use of English Part 7** you read a long text divided into **sections**, or several short texts, and answer **ten questions**. Each question describes an idea, and you decide which section contains it. A section can be the answer to more than one question.\n\nThe questions **paraphrase** the text: *suggest that a name is misleading* will not contain the words *self-checkout* or *independence*. Read the questions first and underline the key idea in each. Then read section by section, asking which questions each section answers. In a humorous text, the questions often describe the **device** rather than the content: *compare a machine to a person in authority* means you are looking for the headteacher.' },
          { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 7): read the column. In which section does the writer do each of these things? Each section may be chosen more than once.', items: [
            { q: 'present his relationship with a machine as a contest he is failing to win', o: ['A', 'B', 'C', 'D', 'E'], why: 'A: *a negotiation, conducted on its terms, and I am losing*.' },
            { q: 'suggest that the name of something is misleading', o: ['A', 'B', 'C', 'D', 'E'], why: 'A: the name *suggests a certain independence on my part*, but he is not independent at all.' },
            { q: 'compare the voice of a machine to that of a person in authority', o: ['B', 'A', 'C', 'D', 'E'], why: 'B: *in the voice of a disappointed headteacher*.' },
            { q: 'report a reply from a member of staff that did not reassure him', o: ['B', 'A', 'C', 'D', 'E'], why: 'B: *“It does that.” … this was not a comfort.*' },
            { q: 'explain why one alternative would feel like surrender', o: ['C', 'A', 'B', 'D', 'E'], why: 'C: queuing at a till *would feel like admitting defeat*.' },
            { q: 'describe a disappointing result from a different way of shopping', o: ['C', 'A', 'B', 'D', 'E'], why: 'C: online delivery brought one grapefruit instead of three limes.' },
            { q: 'suggest that other people find the task effortless', o: ['D', 'A', 'B', 'C', 'E'], why: 'D: *everyone else glides through… with the calm of concert pianists*.' },
            { q: 'imagine that the machine prefers another customer to him', o: ['D', 'A', 'B', 'C', 'E'], why: 'D: *I am fairly sure it likes him.*' },
            { q: 'mention an achievement that included something he did not intend', o: ['E', 'A', 'B', 'C', 'D'], why: 'E: he left with *somebody else’s receipt* *by accident*.' },
            { q: 'end by giving human feelings to an object', o: ['E', 'A', 'B', 'C', 'D'], why: 'E: *The banana… is looking forward to it.*' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes in Part 7', explain: ['head', 'col0', 'col1'], head: ['Not this', 'But this'], rows: [
            ['choosing the section that repeats a word from the question', 'choosing the section that expresses the same idea'],
            ['reading the whole text again for every question', 'reading section by section and matching several questions at once'],
            ['assuming each section is used the same number of times', 'letting the text decide: one section may answer three questions, another none'],
            ['missing an idea that is said ironically', 'asking what the writer means, not only what the words say'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Which comic device does each line from the column use?', items: [
            { q: 'I have faced exams, job interviews and a driving test in the snow. None of them prepared me for this.', o: ['bathos', 'litotes', 'a pun'], why: 'Serious life tests, then a fall to a supermarket machine.' },
            { q: 'I have, as far as I can tell, been carrying this banana since the previous decade.', o: ['hyperbole', 'understatement', 'zeugma'], why: 'A wild exaggeration of how long he has held it.' },
            { q: '“It does that.”', o: ['deadpan', 'mock-heroic', 'hyperbole'], why: 'An absurd problem reported in a flat, bored voice.' },
            { q: 'It was, to put it mildly, a modest victory.', o: ['understatement', 'overstatement', 'personification'], why: '*To put it mildly* signals that he is saying less than he means.' },
            { q: 'There is a machine at my local supermarket that has declared war on me.', o: ['mock-heroic', 'deadpan', 'litotes'], why: 'The language of war for a trip to the shops.' },
            { q: 'It is the most sincere thing anyone has written to me in years.', o: ['self-deprecation', 'a pun', 'zeugma'], why: 'He makes himself the joke: an apology note is the warmest thing he receives.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the idioms from lesson 3 that the writer uses for comic effect.', items: [
            { s: 'I have considered [grasping the nettle] and queuing at a till staffed by a human being.', why: 'An idiom for facing a serious problem, used for a small decision: mock-heroic.' },
            { s: 'Tomorrow I shall [bite the bullet] and attempt the scales.', why: 'Facing something unpleasant: here, weighing fruit.' },
          ] },
        ],
        [
          { t: 'text', md: 'Now tell your own story the way a columnist would. Choose a small, everyday battle you fight (with an app, a printer, a neighbour’s cat, a self-assembly wardrobe) and describe it for about a minute. Use at least one mock-heroic phrase, one understatement and one idiom from this unit, and end with a line of deadpan or bathos.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor, in a deadpan voice.', tutor: 'mei', items: [
            { a: 'There is a machine at my local supermarket that has declared war on me.' },
            { a: 'I would like it recorded that this was not a comfort.' },
            { a: 'It was, to put it mildly, a modest victory.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'What does the speaker really mean?', items: [
      { q: '“Well, that’s just perfect,” said Owen, as the last train pulled away without him.', o: ['It is a very bad situation.', 'He is pleased to have more time.', 'He did not want to catch the train.'], why: 'Verbal irony.' },
      { q: '“Her first novel was not without its admirers.”', o: ['Quite a few people admired it.', 'Nobody admired it.', 'Everyone admired it.'], why: 'Litotes: *not without* means it had some.' },
      { q: '“Oh, don’t trouble yourself,” said Sara to the flatmate who never cleans.', o: ['She is criticising him.', 'She does not want him to clean.', 'She is worried about him.'], why: 'Polite words aimed at someone, with an edge: sarcasm.' },
      { q: 'The pilot described the landing in the storm as “a touch bumpy”.', o: ['It was extremely rough.', 'It was perfectly smooth.', 'It was slightly late.'], why: 'Understatement.' },
    ] },
    { t: 'ex', kind: 'sort', h: 'Which type is it?', groups: ['understatement or litotes', 'overstatement'], explain: ['groups'], items: [
      { s: 'Winning the cup was no small achievement.', g: 0, why: 'Litotes.' },
      { s: 'I’ve walked about a thousand miles today.', g: 1, why: 'Hyperbole.' },
      { s: 'The flood caused a little inconvenience.', g: 0, why: 'Understatement.' },
      { s: 'This homework will take me a century.', g: 1, why: 'Hyperbole.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Which word carries the pun?', items: [
      { q: 'A headline about a choir that won a prize: “Choir strikes a chord with judges.”', o: ['chord', 'choir', 'judges'], why: '*Strike a chord* (affect people) and a musical chord.' },
      { q: 'A sign in a clock shop: “We have all the time in the world.”', o: ['time', 'world', 'have'], why: 'The idiom for patience, and the clocks the shop sells.' },
    ] },
    { t: 'ex', kind: 'wordform', h: 'Use the word in capitals to form a word that fits the gap.', items: [
      { q: 'The headline was ___ funny: the editor had not noticed the second meaning.', base: 'intend', a: ['unintentionally'], why: 'Prefix and three suffixes.' },
      { q: 'Some jokes are almost ___ into other languages.', base: 'translate', a: ['untranslatable'], why: '*un-* + *-able*.' },
      { q: 'The ___ between the grand words and the small event is what makes us laugh.', base: 'congruous', a: ['incongruity'], why: '*in-* + *-ity*.' },
      { q: 'Writers of wordplay are ___ fond of the sports pages.', base: 'notorious', a: ['notoriously'], why: 'An adverb before an adjective.' },
    ] },
    { t: 'ex', kind: 'select', h: 'Choose the word that completes the expression.', items: [
      { q: 'A part-time job helped tide ___ over while she studied.', o: ['her', 'for her', 'to her'], why: 'Object between *tide* and *over*.' },
      { q: 'He tried to wriggle ___ of the meeting.', o: ['out', 'away', 'off'], why: '*Wriggle out of*.' },
      { q: 'The injury put paid ___ her hopes of a medal.', o: ['to', 'for', 'on'], why: '*Put paid to*.' },
      { q: 'Local families still hold ___ over the council.', o: ['sway', 'the sway', 'swing'], why: '*Hold sway*, with no article.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'It’s a clever play [of] words.', a: ['on'], why: '*A play on words*.' },
      { s: 'They fobbed me [with] a voucher.', a: ['off with'], why: '*Fob someone off with* something.' },
      { s: 'It was time to [grasp the nettles].', a: ['grasp the nettle'], why: 'The idiom is fixed.' },
      { s: 'It’s so [ironic] that I caught a cold on holiday.', a: ['annoying', 'unfortunate', 'typical', 'unlucky'], why: 'Bad luck is not irony.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the comic device with what it does.', pairs: [
      ['bathos', 'falls from the serious to the ridiculous'],
      ['deadpan', 'reports the absurd in a flat voice'],
      ['mock-heroic', 'describes something trivial in grand terms'],
      ['zeugma', 'uses one verb in two senses at once'],
      ['self-deprecation', 'makes the writer the target of the joke'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence, starting with the words given.', items: [
      { q: 'Climbing the mountain was a great achievement.', cue: 'Climbing the mountain was no', a: ['Climbing the mountain was no mean feat.', 'Climbing the mountain was no small achievement.', 'Climbing the mountain was no small feat.', 'Climbing the mountain was no mean achievement.'], why: 'Litotes.' },
      { q: 'I finally did the unpleasant thing and called the bank.', cue: 'I finally bit', a: ['I finally bit the bullet and called the bank.'], why: '*Bite the bullet*.' },
    ] },
  ],
};
