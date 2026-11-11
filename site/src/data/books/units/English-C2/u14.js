// English C2, unit 14, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Culture and identity, culture as society rather than art: generalising carefully about groups without stereotypes,
// the vocabulary of society and belonging, inversion and fronting for emphasis in discursive writing, and an essay on
// living between two cultures. Exam tasks in the format of C2 Proficiency: Speaking Part 3, Reading and Use of English
// Parts 3, 4 and 7. Places and people in the texts are imaginary.
export const UNIT = {
  id: 'u14',
  title: 'Culture and identity',
  goal: 'Generalise about cultures and groups carefully and respectfully, use the vocabulary of society and belonging precisely, give emphasis with inversion and fronting in discursive writing, and read a personal essay on identity in the format of C2 Proficiency.',
  art: 'suitcase',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading', 'writing'], topics: ['culture', 'identity', 'society', 'belonging', 'generalising', 'hedging', 'word-formation', 'inversion', 'fronting', 'multiple-matching'], goals: ['academic', 'professional', 'relocation'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'By and large, with notable exceptions',
      about: 'Generalise carefully about groups (tend to, by and large, with notable exceptions, it would be simplistic to say) and avoid stereotypes, for the long turn in C2 Proficiency Speaking Part 3.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'You cannot talk about culture without generalising. *Families here usually eat together on Sundays* is a generalisation, and a useful one. The problem is the **stereotype**: a generalisation that is presented as true of **every** member of a group, as **fixed** and **natural** rather than learned, and often as a judgement. *They are lazy* or *They are cold* tells us nothing about real people and a great deal about the speaker.\n\nA careful generalisation differs in five ways. It describes a **tendency**, not a law (*tend to, more often than not*). It limits its **scope** (*in many urban households, among older people*). It admits **exceptions** (*with notable exceptions, though by no means all*). It shows where the idea **comes from** (*it is often said that, studies of… suggest*). And it describes **practices**, what people do and why, rather than what people **are**.\n\nThis is not only politeness. At C2, examiners and readers expect **intellectual precision**: a claim that is limited and qualified is more likely to be true, and so more persuasive.' },
          { t: 'table', caption: 'Language for careful generalisation', explain: ['head', 'col0'], head: ['What it does', 'Expressions', 'Example'], rows: [
            ['describes a tendency', 'tend to, there is a tendency (for… to), be inclined to, more often than not, as a rule', 'People here tend to keep work and family life apart.'],
            ['limits the scope', 'by and large, on the whole, broadly speaking, in many cases, among younger people, in rural areas', 'By and large, weddings are large, noisy affairs.'],
            ['admits exceptions', 'with notable exceptions, though by no means all, this varies considerably, there are many exceptions', 'Most families, though by no means all, eat late.'],
            ['shows the source', 'it is often said that, the common perception is that, studies suggest, in my experience', 'It is often said that people here are reserved.'],
            ['challenges a stereotype', 'it would be simplistic to say, that is something of a caricature, it is closer to the truth to say', 'It would be simplistic to say that they are unfriendly.'],
          ] },
        ],
        [
          { t: 'text', md: 'Grammar helps, too. **The + nationality adjective** (*the British, the French*) makes a sweeping statement about a whole nation; *many people in Britain* or *British people often* is more precise. **Always, never, all** and **every** are rarely true of millions of people. **Modal verbs** soften a claim: *Visitors **may** find people reserved at first*. And describing a **situation** rather than a **character** is both fairer and more accurate: not *people here are rude*, but *people here tend to be very direct in meetings, which visitors sometimes read as rudeness*.\n\nNotice the last example. It explains the behaviour from the inside, and points out that the judgement comes from the **observer’s** expectations. This is the habit that separates real cultural understanding from cliché.\n\nA useful pattern for challenging a stereotype: name it, qualify it, replace it. *It is often said that people in the north are unfriendly. **That is something of a caricature.** It **would be closer to the truth to say** that they are slower to open up to strangers, but that friendships, once made, tend to last.*' },
          { t: 'examples', items: [
            { s: 'People in the capital **tend to** work long hours, **though by no means all** of them do.', n: 'A tendency, with exceptions.' },
            { s: '**By and large**, family celebrations are large and include several generations.', n: 'A general statement, limited in scope.' },
            { s: '**It would be simplistic to say** that young people have no interest in tradition.', n: 'Rejecting an oversimplification.' },
            { s: '**The common perception is that** people here are reserved; **in my experience**, they are simply private.', n: 'Source of the idea, then a personal correction.' },
            { s: 'Directness in meetings is valued, **which visitors sometimes read as** rudeness.', n: 'Explains the practice and the observer’s view of it.' },
            { s: '**With notable exceptions**, the older districts have kept their character.', n: 'Admits exceptions at the start.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['People from the north are cold.', 'People in the north tend to be more reserved with strangers, at least at first.', 'A tendency and a situation, not a fixed character.'],
            ['All teenagers are addicted to their phones.', 'Many teenagers spend a great deal of time on their phones, though by no means all.', '*All* is rarely true of a group.'],
            ['They tend to eating late.', 'They tend to eat late.', '*Tend to* + base form.'],
            ['It would be simplistic saying that…', 'It would be simplistic to say that…', 'The pattern is *simplistic to* + verb.'],
            ['On the large, people are friendly.', 'By and large, people are friendly. / On the whole, people are friendly.', 'Two fixed phrases mixed together.'],
            ['With notable exception, the shops close at noon.', 'With notable exceptions, the shops close at noon.', 'The fixed phrase is plural.'],
          ] },
          { t: 'dialogue', title: 'Talking about a new city', lines: [
            { who: 'Elena', s: 'Everyone warned me that people here would be cold. That hasn’t been my experience at all.' },
            { who: 'Jonas', s: 'I think it’s something of a caricature. By and large, people are reserved with strangers, but that isn’t the same thing.' },
            { who: 'Elena', s: 'No. My neighbours took months to say more than hello, but now they invite me to everything.' },
            { who: 'Jonas', s: 'That’s quite typical, though by no means universal. Friendships tend to start slowly and then last.' },
            { who: 'Elena', s: 'And people are very direct at work, which I found rude at first.' },
            { who: 'Jonas', s: 'It would be simplistic to call it rudeness, though. Directness is seen as a form of respect: you don’t waste people’s time.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which sentence generalises most carefully?', items: [
            { q: '', o: ['In many households, the main meal of the day tends to be eaten late in the evening.', 'Everyone in that country eats late.', 'They always eat at strange times.'], why: 'Limited scope (*in many households*) and a tendency (*tends to*).' },
            { q: '', o: ['Older people in rural areas are, by and large, more likely to attend religious festivals.', 'Old people are all religious.', 'Country people are traditional by nature.'], why: 'A specific group, *by and large*, *more likely*: a tendency, not a nature.' },
            { q: '', o: ['It would be simplistic to say that young people reject tradition; many adapt it instead.', 'Young people hate tradition.', 'Young people never respect the past.'], why: 'Names the oversimplification and replaces it with something closer to the truth.' },
            { q: '', o: ['Negotiations there can take longer than visitors expect, as relationships are often built first.', 'People there are slow and inefficient.', 'They never get to the point.'], why: 'Describes a practice and explains it, instead of judging a character.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the expression that completes the sentence correctly.', items: [
            { q: 'Weddings ___ be large, though some couples now prefer small ceremonies.', o: ['tend to', 'are tending', 'tend for'], why: '*Tend to* + base form.' },
            { q: '___, people are welcoming, with some exceptions in the tourist areas.', o: ['By and large', 'On the large', 'By the large'], why: 'The fixed phrase is *by and large*.' },
            { q: 'It would be ___ to say that the whole region shares one culture.', o: ['simplistic', 'simple', 'simplified'], why: '*Simplistic*: treating something complex as if it were simple.' },
            { q: 'Most students, though by no ___ all, live with their parents.', o: ['means', 'way', 'chance'], why: 'The fixed phrase is *by no means*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'It would be simplistic to say that they are unfriendly.', why: '*It would be simplistic to say that* + clause.' },
            { a: 'By and large, people tend to keep work and family apart.', why: 'Scope phrase first, then *tend to* + verb.' },
            { a: 'Most families, though by no means all, eat together on Sundays.', why: 'The exception goes between commas after the subject.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'People in the city tend to [working] long hours.', a: ['work'], why: '*Tend to* + base form.' },
            { s: 'It would be simplistic [saying] that the young have no traditions.', a: ['to say'], why: '*Simplistic to say*.' },
            { s: 'With notable [exception], the old town has kept its character.', a: ['exceptions'], why: 'The phrase is plural: *with notable exceptions*.' },
            { s: 'Most families, though by no [mean] all, still eat together.', a: ['means'], why: '*By no means*: always with *-s*.' },
          ] },
        ],
        [
          { t: 'text', md: 'In **Speaking Part 3** of C2 Proficiency, each candidate gives a **long turn of about two minutes**. The examiner hands you a **card** with a question and some ideas you may use or ignore. Your partner then answers a short follow-up question, and the examiner finishes with a **discussion** between the three of you on the same theme.\n\nA strong long turn does not list the ideas on the card. It takes a **position**, **develops** it with reasons and examples, considers **another view**, and reaches a conclusion. When the topic is culture, careful generalisation is exactly what the examiner listens for: a candidate who says *people from X are all…* is not only less polite but less precise, and precision is what C2 rewards.' },
          { t: 'dialogue', title: 'Speaking Part 3: a model long turn', lines: [
            { who: 'Examiner', s: 'Here is your card. The question is: how far do the customs we grow up with shape who we are? You can use the ideas on the card if you like: family, language, moving abroad. Please start when you are ready.' },
            { who: 'Leila', s: 'I’d say they shape us more than we usually realise, though not as completely as people sometimes assume. Take language. The language you grow up with tends to carry a whole set of habits: how direct you are, how you show respect, even how you argue. I only noticed mine when I moved abroad and found that my polite way of disagreeing was heard as hesitation.' },
            { who: 'Leila', s: 'That said, it would be simplistic to say that we are prisoners of our upbringing. Many people, myself included, adopt new habits as adults, and second-generation families often blend two sets of customs into something new. So my answer would be that our customs give us a starting point rather than a fixed identity. By and large, we keep the deepest ones, like the way we treat older relatives, and adapt the rest.' },
            { who: 'Examiner', s: 'Thank you. Jonas, do you think moving abroad changes people’s sense of who they are?' },
            { who: 'Jonas', s: 'To some extent, yes. You notice your own habits for the first time, as Leila said. But in my experience most people become more aware of their culture abroad, not less attached to it.' },
            { who: 'Examiner', s: 'Thank you. Now, to both of you: some people say that a strong sense of national identity is less important than it used to be. What do you think?' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Speaking Part 3): read the model long turn. Choose the best answer to each question about it.', items: [
            { q: 'How does Leila begin her long turn?', o: ['With a clear but qualified position that answers the question.', 'By reading the ideas on the card aloud.', 'By asking the examiner what to say.'], why: '*They shape us more than we usually realise, though not as completely as people sometimes assume.*' },
            { q: 'Why does she tell the story about disagreeing politely?', o: ['To support her point with a concrete example from her own experience.', 'To complain about the people in her new country.', 'To change the subject to language learning.'], why: 'A personal example develops the claim about language and habits.' },
            { q: 'What does *it would be simplistic to say that we are prisoners of our upbringing* do?', o: ['It considers and rejects an overstated view.', 'It contradicts everything she said before.', 'It shows she has run out of ideas.'], why: 'Weighing another view is a mark of a strong long turn.' },
            { q: 'Which ending would score higher in a long turn on culture?', o: ['So customs give us a starting point; we keep the deepest ones and adapt the rest.', 'So people from every country are basically the same.', 'So people from my country are better at adapting.'], why: 'A qualified conclusion that answers the question, with no stereotype.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In the **long turn**, two minutes is longer than it sounds. Plan three moves: your **position**, an **example** that supports it, and **another view** that you weigh (*That said, it would be simplistic to say…*). End by returning to the question. Using every idea on the card is not necessary; developing one or two well is better.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'mei', items: [
            { a: 'By and large, people are reserved with strangers.' },
            { a: 'It would be simplistic to say that they are unfriendly.' },
            { a: 'Most families, though by no means all, eat together on Sundays.' },
            { a: 'Our customs give us a starting point rather than a fixed identity.' },
          ] },
          { t: 'text', md: 'Now give your own long turn of about two minutes on this card: *Is it possible to truly belong to more than one culture?* Ideas you may use: language, food and celebrations, how others see you. Take a position, give an example, weigh another view with *it would be simplistic to say* or *that is something of a caricature*, and use at least three expressions of careful generalisation. Record it or give it in class to your teacher.' },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'A sense of place',
      about: 'The vocabulary of society and belonging (assimilation, integration, heritage, a melting pot, a sense of place, cultural capital) and its word families, for C2 Proficiency Reading and Use of English Part 3.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Discussions of society and identity rely on a set of **abstract nouns** whose meanings are close but not the same, and which carry different attitudes. Using them precisely is the difference between a fluent speaker and a convincing one.\n\n**Assimilation** is the process by which a minority adopts the culture of the majority, usually losing much of its own. **Integration** means taking a full part in a society while keeping one’s own culture. The two are often confused, and the difference is political: many people today regard integration as the aim and assimilation as a loss.\n\nTwo metaphors describe diverse societies. In a **melting pot**, cultures blend into a new, shared one; in a **mosaic** or **salad bowl**, they live side by side and keep their shape. **Heritage** is what is handed down: traditions, buildings, language. A **diaspora** is a community living away from the place its families came from, often keeping strong links with it.\n\n**A sense of place** is the feeling that a place has its own character, and that you are connected to it. **A sense of belonging** is the feeling of being accepted as part of a group. **Cultural capital**, a term from sociology, means the knowledge, tastes and manners that help people get on in a society: knowing how to behave at an interview, which books to mention, how to speak to a doctor.' },
          { t: 'table', caption: 'Society and belonging', explain: ['head', 'col1'], head: ['Word', 'Meaning', 'Example'], rows: [
            ['assimilation', 'a minority adopting the majority culture, losing much of its own', 'Earlier policies pushed for assimilation rather than integration.'],
            ['integration', 'taking full part in a society while keeping one’s own culture', 'Language classes are central to integration.'],
            ['a melting pot / a mosaic', 'cultures that blend / cultures that live side by side', 'The city is less a melting pot than a mosaic.'],
            ['heritage', 'traditions, buildings and language handed down', 'The festival celebrates the town’s fishing heritage.'],
            ['diaspora', 'a community living away from its families’ place of origin', 'The diaspora sends money and ideas home.'],
            ['a sense of place / of belonging', 'connection to a place / acceptance by a group', 'Newcomers often lack a sense of belonging at first.'],
            ['cultural capital', 'knowledge, tastes and manners that help you get on', 'Private tutoring can give children cultural capital.'],
            ['social cohesion', 'the bonds that hold a community together', 'Shared spaces strengthen social cohesion.'],
            ['marginalised', 'pushed to the edge of society, with little power', 'Marginalised groups are often left out of decisions.'],
          ] },
        ],
        [
          { t: 'text', md: 'Many of these words come in **families**, and C2 Proficiency tests them in **Reading and Use of English Part 3**, where you change a word in capitals to fit a gap. At this level the change is often more than a suffix: a **prefix and a suffix** (*ROOT → **uprooted***), an **internal change** (*COHERE → **cohesion***), or a word that is not obviously related (*INTEGRATE → **integral***).\n\nLearn the families, not single words. Note the **adjectives** in particular: *cohesive*, *inclusive*, *marginal*, *customary*, *integral*. And watch the meaning: ***integral** to* means essential to, not *integrated*; ***heritage*** is uncountable; ***belonging*** is a noun in *a sense of belonging*.' },
          { t: 'table', caption: 'Word families', explain: ['head'], head: ['Base', 'Noun', 'Adjective / verb', 'Example'], rows: [
            ['integrate', 'integration', 'integral, integrated', 'Food is integral to the festival.'],
            ['assimilate', 'assimilation', 'assimilated', 'Second-generation families are often fully assimilated.'],
            ['cohere', 'cohesion', 'cohesive', 'A cohesive community looks after its members.'],
            ['include', 'inclusion, inclusivity', 'inclusive', 'The school has an inclusive policy.'],
            ['margin', 'marginalisation', 'marginal, marginalise', 'Rising rents have marginalised older residents.'],
            ['root', 'roots, rootedness', 'rooted, uprooted', 'Uprooted by war, the family settled abroad.'],
            ['place', 'displacement', 'displaced', 'Thousands were displaced by the new dam.'],
            ['custom', 'custom, customs', 'customary', 'It is customary to bring a small gift.'],
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['She integrated in the community.', 'She integrated into the community.', '*Integrate into* (or *with*).'],
            ['I have a strong feeling of belong.', 'I have a strong sense of belonging.', '*Belonging* is the noun.'],
            ['The city has many heritages.', 'The city has a rich heritage.', '*Heritage* is uncountable.'],
            ['Food is integrated to our culture.', 'Food is integral to our culture.', '*Integral to*: essential to.'],
            ['Assimilation and integration are the same.', 'Integration keeps one’s own culture; assimilation largely gives it up.', 'The difference matters, and is often political.'],
            ['Cultural capital is a city with many museums.', 'A European Capital of Culture is a city; cultural capital is a kind of advantage.', 'A sociological term, not a place.'],
          ] },
          { t: 'dialogue', title: 'Where are you from?', lines: [
            { who: 'Amira', s: 'I always hesitate when someone asks where I’m from. Do they mean where I was born, or where my parents grew up?' },
            { who: 'Tomasz', s: 'I know the feeling. My family is part of quite a large diaspora, so “home” has two meanings for us.' },
            { who: 'Amira', s: 'My grandparents were expected to assimilate: to speak only the new language and keep their customs private.' },
            { who: 'Tomasz', s: 'Whereas the aim now is integration. You take part fully, but you don’t have to give up your heritage.' },
            { who: 'Amira', s: 'In theory. In practice, a sense of belonging depends on whether people treat you as one of them.' },
            { who: 'Tomasz', s: 'True. And on cultural capital: knowing the unwritten rules that nobody explains to newcomers.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the words with their meanings.', pairs: [
            ['assimilation', 'adopting the majority culture and largely losing one’s own'],
            ['integration', 'taking full part in a society while keeping one’s own culture'],
            ['diaspora', 'a community living away from its families’ place of origin'],
            ['cultural capital', 'knowledge and manners that help you get on in a society'],
            ['social cohesion', 'the bonds that hold a community together'],
            ['a mosaic', 'a society in which cultures live side by side and keep their shape'],
          ] },
          { t: 'ex', kind: 'wordform', h: 'Write the correct form of the word in capitals.', items: [
            { q: 'Shared meals are ___ to the festival; without them it would not exist.', base: 'INTEGRATE', a: ['integral'], why: '*Integral to*: essential to.' },
            { q: 'The town council wants a more ___ approach to planning.', base: 'INCLUDE', a: ['inclusive'], why: 'Adjective: *inclusive*.' },
            { q: 'It is ___ to remove your shoes before entering a home.', base: 'CUSTOM', a: ['customary'], why: 'Adjective: *customary*, usual according to custom.' },
            { q: 'Many families felt a strong sense of ___ to the old neighbourhood.', base: 'BELONG', a: ['belonging'], why: 'Noun: *a sense of belonging*.' },
            { q: 'A ___ community is better able to cope with sudden change.', base: 'COHERE', a: ['cohesive'], why: 'Adjective from *cohesion*: *cohesive*.' },
          ] },
        ],
        [
          { t: 'text', md: 'In **Reading and Use of English Part 3** of C2 Proficiency you read a text with **eight gaps**; next to each is a word in capitals that you must change to fit. Read the whole sentence: decide the **word class**, then whether the meaning is **negative** (*un-, in-, dis-*), whether a noun is **plural**, and whether the word needs a **prefix and a suffix** at once. Spelling must be correct.' },
          { t: 'ex', kind: 'wordform', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 3): the sentences make one short text about an imaginary street market. Use the word in capitals to form a word that fits the gap.', items: [
            { q: 'Few places capture the ___ of the city better than the market on Linden Street.', base: 'DIVERSE', a: ['diversity'], why: 'Noun after *the*: *diversity*.' },
            { q: 'For many newcomers, ___ from familiar places, it offers a first sense of belonging.', base: 'ROOT', a: ['uprooted'], why: 'Prefix and suffix: *uprooted*, taken away from home.' },
            { q: 'Older residents, once wary of change, now speak of the market as ___ to the area’s identity.', base: 'INTEGRATE', a: ['integral'], why: '*Integral to*: essential to.' },
            { q: 'Sociologists see it as a small example of ___: newcomers take part fully without giving up their own customs.', base: 'INCLUDE', a: ['inclusion'], why: 'Noun after *example of*: *inclusion*.' },
            { q: 'Not everyone has gained, however; some long-standing tenants have been ___ by the rising rents that followed.', base: 'PLACE', a: ['displaced'], why: 'Passive participle with *dis-*: *displaced*, forced to leave.' },
            { q: 'Others feel ___ by the changes, as though the street no longer belonged to them.', base: 'MARGIN', a: ['marginalised', 'marginalized'], why: 'Verb in the passive: *marginalised*.' },
            { q: 'The council, keen to preserve the street’s ___ character, has protected its oldest buildings.', base: 'TRADITION', a: ['traditional'], why: 'Adjective before a noun: *traditional*.' },
            { q: 'Whether the market can go on strengthening social ___ as the area changes is an open question.', base: 'COHERE', a: ['cohesion'], why: 'Internal change: *cohere* becomes *cohesion*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 3**, the meaning of the whole text guides you. *Not everyone has gained, however* tells you the next gap is **negative** in meaning, which points to *displaced* rather than *placed*. And when a gap is followed by *to*, think of adjectives with a dependent preposition: *integral to, conducive to, central to*.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'omar', items: [
            { a: 'The aim now is integration rather than assimilation.' },
            { a: 'Shared meals are integral to the festival.' },
            { a: 'The city is less a melting pot than a mosaic.' },
            { a: 'A sense of belonging depends on how others treat you.' },
          ] },
          { t: 'text', md: 'Now describe, in about a minute, a place where you feel a strong **sense of place** or **sense of belonging**, or one where you did not. Use at least four words from this lesson precisely, including one pair that is often confused (*assimilation* and *integration*, *integral* and *integrated*), and say what makes people feel they belong there.' },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'Nowhere is this more evident',
      about: 'Use inversion and fronting for emphasis in discursive writing (Nowhere is this more evident than, Such is the pull of, Central to this is) and practise them in C2 Proficiency Reading and Use of English Part 4.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'In discursive writing, such as essays, articles and reports, you can give a point **emphasis** by moving a phrase to the front of the sentence. English then often changes the normal order of subject and verb. You have met some of these patterns at C1; at C2 you use a wider range, and you use them for a **reason**.\n\n**Negative and restrictive adverbials + auxiliary + subject.** After *never, rarely, seldom, little, nowhere, at no time, not only, not until, only when / only by / only then, under no circumstances, no sooner… than, hardly… when*, the auxiliary comes before the subject, as in a question: ***Rarely have** traditions changed so quickly. **Not only does** language carry meaning; it carries identity.* If there is no auxiliary, use *do, does, did*: ***Little did** they know…*. With *be*, the verb itself moves: ***Nowhere is** this more evident than in the kitchen.*\n\n**Such / so + be.** ***Such is** the pull of home **that** many emigrants return in old age.* ***So strong is** the pull of home **that**…*. Both mean *the pull is so strong that*.\n\n**Fronting with full inversion.** An adjective phrase, a participle or a prepositional phrase goes first, and the **whole verb** (usually *be* or a verb of place) comes before a long subject: ***Central to this is** the idea that… **Equally important is**… **Of particular interest is**… **Gone are the days when**… **Here lies** the problem.*' },
          { t: 'table', caption: 'Inversion and fronting', explain: ['head', 'col0'], head: ['Pattern', 'Form', 'Example'], rows: [
            ['negative adverbial', 'Never / Rarely / Seldom / Little + auxiliary + subject', 'Seldom has a festival changed so much in a generation.'],
            ['not only… but', 'Not only + auxiliary + subject…, but…', 'Not only does food mark identity, but it also marks change.'],
            ['only + time or means', 'Only when / Only by / Not until + clause, then auxiliary + subject', 'Only when I left did I notice my accent.'],
            ['nowhere… than', 'Nowhere + be + subject + more + adjective + than', 'Nowhere is this more evident than in the language of the young.'],
            ['such / so', 'Such is + noun phrase + that… / So + adjective + be + subject + that…', 'Such is the pull of home that many return.'],
            ['fronted adjective', 'Central / Equally important / Of particular interest + be + subject', 'Central to this is the question of language.'],
            ['fronted participle', 'Gone are / Lost is / Among the… is', 'Gone are the days when newcomers were told to forget their past.'],
          ] },
        ],
        [
          { t: 'text', md: 'Why move things around at all? There are three reasons, and good writers use the patterns for all three.\n\n**Emphasis.** The fronted word gets the spotlight: *Never* is far stronger at the start of a sentence than in the middle.\n\n**Cohesion.** The fronted phrase often **links back** to the previous sentence, so the paragraph flows: *Many families now celebrate two new years. **Central to this** is the role of grandparents.* The word *this* connects the two ideas at once.\n\n**End-weight.** English prefers long, new information at the **end** of a sentence. *The idea that identity is something we choose rather than inherit is central to this* is top-heavy; *Central to this is the idea that identity is something we choose rather than inherit* puts the heavy part last.\n\nA warning about register: these patterns are formal and literary. One or two in a paragraph sound polished; one in every sentence sounds pompous. In conversation, keep to the few that are also spoken: *Not only that, but…*, *Little did I know…*, *Only then did I realise…*' },
          { t: 'examples', items: [
            { s: '**Nowhere is** the tension between old and new **more evident than** at family weddings.', n: '*Nowhere* + *be* + subject + *more… than*.' },
            { s: '**Such is** the pull of the old neighbourhood **that** many return every weekend.', n: 'The pull is so strong that…' },
            { s: '**Central to** her argument **is** the idea that identity is chosen, not inherited.', n: 'Fronted adjective phrase; the long subject goes last.' },
            { s: '**Gone are** the days when newcomers were told to forget their past.', n: 'Fronted participle: those days have gone.' },
            { s: '**Only when** I moved abroad **did I** realise how British my manners were.', n: 'The inversion is in the main clause, after the *when* clause.' },
            { s: '**Not only does** language carry meaning, **but** it also carries memory.', n: '*Not only* + *does* + subject.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['Rarely I have seen such a change.', 'Rarely have I seen such a change.', 'Auxiliary before subject after *rarely*.'],
            ['Not only it changed the town, but…', 'Not only did it change the town, but…', 'Add *did* when there is no auxiliary.'],
            ['Only when I arrived I understood.', 'Only when I arrived did I understand.', 'Invert the main clause, not the *when* clause.'],
            ['Nowhere this is more evident than…', 'Nowhere is this more evident than…', '*Be* comes before the subject.'],
            ['Such the pull is that…', 'Such is the pull that…', '*Such is* + noun phrase.'],
            ['Little did I knew…', 'Little did I know…', 'Base form after *did*.'],
            ['Central to this the idea is…', 'Central to this is the idea…', 'Full inversion: the verb before the subject.'],
          ] },
          { t: 'reading', title: 'A paragraph from an essay on food and identity', md: 'Few things reveal a culture as clearly as what, and how, its people eat. Nowhere is this more evident than in families who have moved from one country to another. Rarely do the first generation abandon the dishes they grew up with; such is the pull of familiar tastes that ingredients are carried across borders in suitcases. Central to this is not nostalgia alone but continuity: a meal cooked as one’s grandmother cooked it is a way of saying who one is. Gone are the days, however, when such food was eaten only at home. Not only has it reached the restaurants of the new country, but it has changed the way the majority eat, too. Only in the third generation, perhaps, do the two cuisines finally merge into something new.' },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the correct form.', items: [
            { q: 'Rarely ___ such a rapid change in customs.', o: ['have we seen', 'we have seen', 'we saw'], why: 'Auxiliary before subject after *rarely*.' },
            { q: 'Little ___ that the move would change their lives.', o: ['did they know', 'they knew', 'they did know'], why: '*Little* + *did* + subject + base form.' },
            { q: '___ the influence of the diaspora that the festival is now celebrated worldwide.', o: ['Such is', 'So is', 'Such'], why: '*Such is* + noun phrase + *that*.' },
            { q: 'Central to the debate ___ the question of language.', o: ['is', 'it is', 'does'], why: 'Full inversion: *is* + the subject.' },
            { q: 'Only by learning the language ___ to feel at home.', o: ['did she begin', 'she began', 'she did begin'], why: '*Only by* + -ing, then inversion in the main clause.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'Nowhere [this is] more evident than in the capital.', a: ['is this'], why: '*Be* before the subject.' },
            { s: 'Not only [it changed] the town, but it changed us too.', a: ['did it change'], why: 'Add *did* and invert.' },
            { s: 'Only when I returned home [I noticed] how much I had changed.', a: ['did I notice'], why: 'Invert the main clause.' },
            { s: 'Little did I [knew] how much I would miss it.', a: ['know'], why: 'Base form after *did*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order to make an emphatic sentence.', items: [
            { a: 'Nowhere is this more evident than in the kitchen.', why: '*Nowhere* + *is* + subject + *more… than*.' },
            { a: 'Such is the pull of home that many return.', why: '*Such is* + noun phrase + *that* + clause.' },
            { a: 'Gone are the days when newcomers hid their language.', why: 'Fronted participle, then *are* + subject.' },
            { a: 'Seldom has a tradition changed so quickly.', why: '*Seldom* + *has* + subject.' },
          ] },
        ],
        [
          { t: 'text', md: 'In **Reading and Use of English Part 4** of C2 Proficiency there are **six** items. You complete a second sentence so that it means the same as the first, using **three to eight words**, including a **key word** that you must not change. Each item can earn **two marks**, so a partly correct answer still earns one. Inversion and fronting are tested often, because they need a change of grammar and of word order at once. In the book you write the whole new sentence.' },
          { t: 'ex', kind: 'transform', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first, using the word given. Do not change the word given.', items: [
            { q: 'The pull of home is so strong that many emigrants return in old age.', cue: 'such', a: ['Such is the pull of home that many emigrants return in old age.'], why: '*So strong that* becomes *Such is the pull… that*.' },
            { q: 'This tension is most obvious in the way families celebrate weddings.', cue: 'nowhere', a: ['Nowhere is this tension more obvious than in the way families celebrate weddings.', 'Nowhere is this tension more evident than in the way families celebrate weddings.'], why: '*Most obvious in* becomes *Nowhere is… more obvious than in*.' },
            { q: 'She only realised how much she missed the language when she heard it on the train.', cue: 'until', a: ['Not until she heard it on the train did she realise how much she missed the language.', 'Not until she heard the language on the train did she realise how much she missed it.'], why: '*Not until* + clause, then inversion with *did*.' },
            { q: 'The idea of national identity depends above all on language.', cue: 'central', a: ['Central to the idea of national identity is language.'], why: 'Fronted adjective phrase with full inversion.' },
            { q: 'People no longer expect newcomers to give up their customs.', cue: 'gone', a: ['Gone are the days when people expected newcomers to give up their customs.', 'Gone are the days when newcomers were expected to give up their customs.'], why: '*No longer* becomes *Gone are the days when*.' },
            { q: 'He had no idea that the move would change his life so much.', cue: 'little', a: ['Little did he know that the move would change his life so much.', 'Little did he realise that the move would change his life so much.', 'Little did he imagine that the move would change his life so much.'], why: '*Had no idea* becomes *Little did he know*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 4**, count only the words **between** the given start and end in the exam; contractions count as two. When the key word is *never, little, rarely, only, until* or *such*, expect inversion, and check the auxiliary: *did* for the past simple, *has* for the present perfect, *is* for *be*. Changing the key word (*rare* for *rarely*) loses both marks.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'sofia', items: [
            { a: 'Nowhere is this more evident than at family weddings.' },
            { a: 'Such is the pull of home that many return in old age.' },
            { a: 'Central to her argument is the idea that identity is chosen.' },
            { a: 'Only when I moved abroad did I notice my own habits.' },
          ] },
          { t: 'text', md: '**Short writing for your teacher.** Write a paragraph of about **120 to 150 words** for an essay with the title *Does a globalised world make cultural identity stronger or weaker?* Use at least **three** different patterns from this lesson: one negative adverbial (*rarely, not only, only when*), one *such is* or *nowhere… than*, and one fronted phrase (*central to this is, gone are the days*). Make sure each one has a reason to be there, emphasis, a link back or end-weight, and send the paragraph to your teacher, who will correct it.' },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'Between two cultures',
      about: 'Read a personal essay on living between two cultures and match ideas to its sections as in C2 Proficiency Reading and Use of English Part 7.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'text', md: 'The essay in this lesson is written by an imaginary writer who grew up speaking one language at home and another at school. It is **personal** but also **reflective**: she tells stories from her life, then steps back to ask what they mean. Notice how she uses the language of this unit: careful generalisation (*more often than not*), the vocabulary of belonging (*heritage, a sense of belonging, cultural capital*), and inversion for emphasis (*Only much later did I understand*).\n\nIn **Reading and Use of English Part 7** of C2 Proficiency you read a long text divided into sections, or several short texts, and answer **ten questions** by choosing the section where each idea appears. The questions **paraphrase** the text: *recalls being embarrassed by something she later valued* will not use the words *embarrassed* or *valued*. Read the questions first, underline the **idea** in each, then scan. Some sections answer more than one question.' },
          { t: 'ex', kind: 'match', h: 'Before you read, match the words from the essay with their meanings.', pairs: [
            ['a language broker', 'a child who interprets for parents who do not speak the language'],
            ['a third culture', 'a mix that belongs fully to neither of two cultures'],
            ['a hyphenated identity', 'an identity described with two names, joined together'],
            ['to pass on', 'to give something to the next generation'],
            ['behind glass', 'kept safe but not touched or used, as in a museum'],
          ] },
        ],
        [
          { t: 'reading', title: 'Living in the space between', md: '**A. Two kitchens.** At school I wanted, more than anything, to be ordinary. Ordinary children, it seemed to me, had sandwiches in their lunchboxes, not the rice and spiced vegetables my mother packed each morning. I begged her to stop, and for a year she gave me sandwiches I did not much like. It was a teacher, of all people, who changed my mind. Overhearing a boy mock my lunch one day, she told the whole class that I was lucky to grow up with two kitchens and two languages, and that most of them would spend years trying to learn what I already had. I doubt I believed her then. Only much later did I understand that she had handed me a way of seeing my difference as something to keep.\n\n**B. Translation duty.** From the age of nine I was my parents’ voice in the world of forms and offices. I explained letters from the bank, interpreted at the doctor’s, and once negotiated, with great seriousness, the price of a second-hand car. Researchers call children like me language brokers, and the term is apt: we stood between two worlds and made deals between them. I am proud of what I did, and I resented it at the same time. It made me grow up early, and it reversed, for a while, the usual order of a family: I knew things my parents did not, and all of us felt the strangeness of that.\n\n**C. Going back.** At fifteen I visited the country my parents had left, convinced that I would at last feel I belonged. Instead I was, once again, the one who was different. My cousins teased me about my accent, which they said sounded like a radio announcer from their grandparents’ time, and I did not know the songs, the jokes or the unwritten rules that every child there took for granted. The surprise came from my grandmother. I expected her to be disappointed; instead she laughed, held my face in her hands, and said that I spoke the language exactly as my mother had at my age. For the first time I saw that belonging might be a matter of people rather than of places.\n\n**D. The hyphen.** Official forms like boxes, and I have never fitted neatly into one. For years I ticked whichever seemed least wrong. There is a long academic debate about whether people like me have a hyphenated identity or a third culture, a mix that belongs fully to neither side; I find both terms useful and neither sufficient. What troubles me about the boxes is not that they are inaccurate, but that they ask us to choose, as if identity were a nationality with a single passport. More often than not, the people I know who grew up between cultures refuse that choice, and I think they are right to.\n\n**E. What I pass on.** I now have two children of my own, and they speak my parents’ language far less well than I do. For a while this felt like a failure, as though I had dropped something precious that had been handed to me. I see it differently now. A heritage is not an object to be kept behind glass, admired and never touched; it is closer to a conversation, and every generation adds its own voice. My children cook my mother’s dishes with ingredients she would never have used, and they will no doubt pass on to their own children something that neither of us can imagine. I have come to think that this is not the end of a culture but the way a culture stays alive.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 7): in which section (A to E) does the writer do each of these things? Sections may be chosen more than once.', items: [
            { q: 'recall being embarrassed by something she later came to value', o: ['A', 'B', 'C', 'D', 'E'], why: 'She begged her mother to stop the home-cooked lunches, then learned to see her difference *as something to keep*.' },
            { q: 'describe feeling like an outsider in a place where she expected to fit in', o: ['C', 'A', 'B', 'D', 'E'], why: '*Convinced that I would at last feel I belonged. Instead I was, once again, the one who was different.*' },
            { q: 'describe a responsibility that made her mature before her time', o: ['B', 'A', 'C', 'D', 'E'], why: '*It made me grow up early.*' },
            { q: 'question the assumption behind official categories', o: ['D', 'A', 'B', 'C', 'E'], why: '*They ask us to choose, as if identity were a nationality with a single passport.*' },
            { q: 'describe a change in how she judges something she once saw as a loss', o: ['E', 'A', 'B', 'C', 'D'], why: '*For a while this felt like a failure… I see it differently now.*' },
            { q: 'explain how an adult’s public remark changed her outlook', o: ['A', 'B', 'C', 'D', 'E'], why: 'The teacher *told the whole class that I was lucky*.' },
            { q: 'admit to mixed feelings about a role she had as a child', o: ['B', 'A', 'C', 'D', 'E'], why: '*I am proud of what I did, and I resented it at the same time.*' },
            { q: 'compare a tradition to something that should not be preserved untouched', o: ['E', 'A', 'B', 'C', 'D'], why: '*A heritage is not an object to be kept behind glass.*' },
            { q: 'mention a relative’s reaction that was not what she had feared', o: ['C', 'A', 'B', 'D', 'E'], why: '*I expected her to be disappointed; instead she laughed.*' },
            { q: 'say that two expert terms are helpful but incomplete', o: ['D', 'A', 'B', 'C', 'E'], why: '*I find both terms useful and neither sufficient.*' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 7**, two sections often contain similar ideas. Both A and E describe a change of view; the difference is in **what** changed. Check the whole question against the section: *an adult’s public remark* fits A (the teacher spoke to the whole class), not E. Sections A, B, C, D and E are each used twice here; in the exam the pattern is not always so even.' },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'According to the essay, are these statements true or false?', items: [
            { q: 'The writer believed her teacher immediately.', a: 'f', why: '*I doubt I believed her then.*' },
            { q: 'Being a language broker changed the usual roles in her family for a time.', a: 't', why: '*It reversed, for a while, the usual order of a family.*' },
            { q: 'Her visit at fifteen made her feel she finally belonged to her parents’ country.', a: 'f', why: '*Instead I was, once again, the one who was different.*' },
            { q: 'She thinks people who grow up between cultures should choose one identity.', a: 'f', why: '*I think they are right to* refuse that choice.' },
            { q: 'She now sees changes in her children’s culture as a sign that it is alive.', a: 't', why: '*Not the end of a culture but the way a culture stays alive.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the inversion or fronted phrase in each sentence from the essay or the unit.', items: [
            { s: '[Only much later did I understand] that she had handed me a way of seeing my difference.', why: '*Only* + time phrase, then *did I understand*.' },
            { s: '[Nowhere is this more evident] than at family weddings.', why: '*Nowhere* + *is* + subject.' },
            { s: '[Central to her argument is] the idea that identity is chosen.', why: 'Fronted adjective phrase with *is* before the subject.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'lena', items: [
            { a: 'Belonging might be a matter of people rather than of places.' },
            { a: 'A heritage is not an object to be kept behind glass.' },
            { a: 'I find both terms useful and neither sufficient.' },
            { a: 'This is not the end of a culture but the way it stays alive.' },
          ] },
          { t: 'text', md: 'Now respond to the essay, in about two minutes or in a paragraph for your teacher: *Which of the writer’s ideas do you find most convincing, and which would you question?* Generalise carefully, as in lesson 1, use at least three words from lesson 2 (*heritage, a sense of belonging, integration, cultural capital*), and give one point emphasis with an inversion or a fronted phrase from lesson 3.' },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Which sentence generalises most carefully?', items: [
      { q: '', o: ['By and large, people in the region are reserved with strangers, though by no means all.', 'People in the region are cold.', 'Everyone in the region is unfriendly.'], why: 'Scope, tendency and exceptions, with no fixed character.' },
      { q: '', o: ['It would be simplistic to say that young people reject tradition; many adapt it.', 'Young people hate tradition.', 'Young people always ignore the past.'], why: 'Names the oversimplification and replaces it.' },
    ] },
    { t: 'ex', kind: 'select', h: 'Choose the correct option.', items: [
      { q: 'People there tend ___ late in the evening.', o: ['to eat', 'eating', 'to eating'], why: '*Tend to* + base form.' },
      { q: 'Most students, though by no ___ all, live at home.', o: ['means', 'way', 'chance'], why: '*By no means*.' },
      { q: 'Shared meals are ___ to the festival.', o: ['integral', 'integrated', 'integration'], why: '*Integral to*: essential to.' },
      { q: 'Rarely ___ so much change in one generation.', o: ['have we seen', 'we have seen', 'we saw'], why: 'Inversion after *rarely*.' },
    ] },
    { t: 'ex', kind: 'wordform', h: 'Write the correct form of the word in capitals.', items: [
      { q: 'Some long-standing tenants were ___ by the rising rents.', base: 'PLACE', a: ['displaced'], why: '*Displaced*: forced to leave.' },
      { q: 'A ___ community copes better with change.', base: 'COHERE', a: ['cohesive'], why: 'Adjective: *cohesive*.' },
      { q: 'Newcomers often lack a sense of ___ at first.', base: 'BELONG', a: ['belonging'], why: 'Noun: *belonging*.' },
      { q: 'It is ___ to bring a small gift.', base: 'CUSTOM', a: ['customary'], why: 'Adjective: *customary*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'Nowhere [this is] more evident than in the kitchen.', a: ['is this'], why: '*Be* before the subject.' },
      { s: 'Only when I left [I understood] how much I missed it.', a: ['did I understand'], why: 'Invert the main clause.' },
      { s: 'She integrated [in] the community quickly.', a: ['into', 'with'], why: '*Integrate into* or *with*.' },
      { s: 'It would be simplistic [saying] that they are unfriendly.', a: ['to say'], why: '*Simplistic to say*.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Complete the second sentence so that it has a similar meaning to the first, using the word given.', items: [
      { q: 'The pull of home is so strong that many return.', cue: 'such', a: ['Such is the pull of home that many return.'], why: '*Such is* + noun phrase + *that*.' },
      { q: 'People no longer expect newcomers to hide their language.', cue: 'gone', a: ['Gone are the days when people expected newcomers to hide their language.', 'Gone are the days when newcomers were expected to hide their language.'], why: '*Gone are the days when*.' },
      { q: 'He had no idea how much he would miss it.', cue: 'little', a: ['Little did he know how much he would miss it.', 'Little did he realise how much he would miss it.'], why: '*Little did he know*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the words with their meanings.', pairs: [
      ['assimilation', 'adopting the majority culture and largely losing one’s own'],
      ['integration', 'taking full part in a society while keeping one’s own culture'],
      ['heritage', 'traditions, buildings and language handed down'],
      ['cultural capital', 'knowledge and manners that help you get on in a society'],
      ['a language broker', 'a child who interprets for parents'],
    ] },
  ],
};
