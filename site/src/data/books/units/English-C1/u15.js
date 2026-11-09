// English C1, unit 15, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Travel and belonging: articles and generic reference, phrasal verbs with several meanings, the language of place and
// belonging, and the formal letter or email for C1 Advanced Writing Part 2. Exam formats: Reading and Use of English
// Parts 1 and 2, Listening Part 4, Writing Part 2.
export const UNIT = {
  id: 'u15',
  title: 'Travel and belonging',
  goal: 'Talk about people and ideas in general with precise use of articles, handle phrasal verbs that change meaning with context, describe what it is like to leave home and find a new one, and write a formal letter or email for C1 Advanced.',
  art: 'suitcase',
  tags: { skills: ['grammar', 'vocabulary', 'listening', 'speaking', 'writing'], topics: ['articles', 'generic-reference', 'phrasal-verbs', 'belonging', 'migration', 'travel', 'formal-letter'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'The traveller and travellers',
      about: 'Use articles to talk about things in general: the + adjective for groups, generic the and a, and when abstract nouns take an article.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'text', md: 'At B2 you used the basic rules: **a/an** for one of many, **the** for something the listener can identify, and **no article** for plurals and uncountable nouns in general. At C1 the harder question is how to talk about a **whole class** of things, and why abstract nouns such as *belonging* or *knowledge* sometimes take an article and sometimes do not.\n\nEnglish has three ways of making a **generic** statement, and they are not quite the same.\n\nA **plural with no article** is the most neutral and the most common: ***Migrants** often send money home.*\n\n**The + singular noun** treats the class as one idea. It is more formal and typical of inventions, species, instruments and types of person in academic writing: ***The passport** is a surprisingly recent invention.*\n\n**A/an + singular noun** means *any typical member*. It suits definitions and statements about what one member does: ***A good guide** knows when to stay quiet.* *An expat is **a person** who lives outside their native country.*' },
          { t: 'table', caption: 'Three ways to speak in general', explain: ['head', 'col0', 'col2'], head: ['Form', 'Example', 'Best for'], rows: [
            ['plural, no article', 'Refugees need stability above all.', 'most general statements, everyday and formal'],
            ['the + singular', 'The bicycle transformed rural life.', 'a class as one idea: inventions, species, types (formal)'],
            ['a/an + singular', 'A traveller should respect local customs.', 'any typical member; definitions'],
            ['the + adjective', 'The young adapt more quickly than the old.', 'a group of people (plural verb)'],
          ] },
        ],
        [
          { t: 'text', md: 'Generic **a/an** cannot describe the class *as a whole*. *The tiger is endangered* works because the species is endangered, but **A tiger is endangered** is wrong: no single tiger is endangered.\n\n**The + adjective** names a group of people: **the rich, the poor, the elderly, the young, the unemployed, the homeless, the displaced, the disabled**. It always takes a **plural verb** and never adds *-s*: *The elderly **are** often the most isolated.* For one person, add a noun: *an elderly **man**, a homeless **woman***.\n\n**Abstract nouns** take no article when they are used in general: ***Belonging** matters more than wealth.* Add **the** when the noun is limited to something specific, often by *of* or a relative clause: ***the freedom** to work anywhere*, ***the loneliness** that many students feel in their first term*.\n\nThe C1 point is the third use. Many abstract and uncountable nouns take **a/an** when an adjective or a phrase describes **a kind** or **an instance** of the quality: ***a sense of** belonging, **a deep** distrust of officials, **a good knowledge of** the city, **a warm** welcome, **an** education that lasts.*' },
          { t: 'examples', items: [
            { s: '**Travel** broadens the mind, or so they say.', n: '*Travel* in general: uncountable, no article. One journey is *a trip* or *a journey*.' },
            { s: '**The homeless** are often invisible to tourists.', n: '*The* + adjective for a group, with a plural verb.' },
            { s: 'She had **a strong sense of** where she came from.', n: '*A* + adjective + abstract noun: a particular kind of awareness.' },
            { s: 'He went **to hospital** after the accident; his wife went **to the hospital** to see him.', n: 'British English: no article for the institution’s purpose, *the* for the building.' },
            { s: 'They received **a good education** but **little practical advice**.', n: '*Education* takes *a* with an adjective; *advice* never does.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['The life abroad is never easy.', 'Life abroad is never easy.', 'Abstract noun in general: no article.'],
            ['The rich is getting richer.', 'The rich are getting richer.', '*The* + adjective is plural.'],
            ['A panda is in danger of extinction.', 'The panda is in danger of extinction.', 'A statement about the whole species needs generic *the* (or *Pandas are*).'],
            ['We had a wonderful travel.', 'We had a wonderful trip.', '*Travel* is uncountable; use *trip* or *journey* for one.'],
            ['I felt the sense of belonging there.', 'I felt a sense of belonging there.', '*A sense of* + noun: one instance of the feeling.'],
          ] },
          { t: 'reading', title: 'The art of arriving', md: 'Travel writers love departures, but arrival is the harder art. The newcomer to a city has none of the old landmarks: no favourite café, no neighbour who knows your name, no sense of which streets feel safe after dark.\n\nResearch on migration suggests that the young adapt faster than the old, though not always more happily. What seems to matter most is not language, or even money, but a sense of being needed. People who volunteer, join a choir or coach a children’s team report a far stronger attachment to their new home than those who simply wait for belonging to arrive.' },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the best article, or no article (–).', items: [
            { q: '___ unemployed are the first to feel a rise in prices.', o: ['The', 'An', '–'], why: '*The* + adjective for a group of people.' },
            { q: 'She arrived with ___ deep suspicion of anyone in uniform.', o: ['a', 'the', '–'], why: '*A* + adjective + abstract noun: a particular kind of suspicion.' },
            { q: '___ loneliness is one of the hidden costs of moving abroad.', o: ['–', 'The', 'A'], why: 'An abstract noun in general takes no article.' },
            { q: '___ loneliness I felt that first winter was hard to describe.', o: ['The', '–', 'A'], why: 'Limited by a relative clause: one specific loneliness.' },
          ] },
        ],
        [
          { t: 'text', md: '**Reading and Use of English Part 2** of C1 Advanced is an **open cloze**: a text of about 150 to 170 words with **eight gaps** and no options. You write **one word** in each gap. Articles appear often, but so do the other small words of English: prepositions, pronouns, auxiliaries, linkers, quantifiers and words inside fixed phrases such as *by no means* or *as far as*.' },
          { t: 'ex', kind: 'gap', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 2): read the text about arriving in a new country and write one word in each gap.', items: [
            { q: 'Few experiences test ___ person’s resilience like the first months in a new country.', a: ['a'], why: 'Generic *a*: any person.' },
            { q: 'For many newcomers, ___ hardest part is not the language but the paperwork.', a: ['the'], why: 'Superlative: *the hardest part*.' },
            { q: 'Simple tasks, ___ as opening a bank account, can take weeks.', a: ['such'], why: '*Such as* introduces examples.' },
            { q: 'Those ___ arrive with a job tend to settle in more quickly.', a: ['who', 'that'], why: 'Relative pronoun after *those*.' },
            { q: 'This is by ___ means true for everyone, however.', a: ['no'], why: 'Fixed phrase: *by no means* = not at all.' },
            { q: 'Some people feel at home almost at ___, while others never do.', a: ['once'], why: '*At once* = immediately.' },
            { q: 'What seems to help most is ___ sense of being useful to others.', a: ['a'], why: '*A sense of* + noun.' },
            { q: 'As far ___ belonging is concerned, small kindnesses count for more than official welcomes.', a: ['as'], why: 'Fixed phrase: *as far as… is concerned*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Before you write an article in Part 2, ask what kind of noun follows. **Singular countable** always needs a determiner (*a, the, this, every*). **Abstract** and **plural** nouns in general take none. If the gap is before *sense of, knowledge of* or an adjective with an abstract noun, *a* is a strong candidate.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'sofia', items: [
            { a: 'The young often adapt more quickly than the old.' },
            { a: 'What matters most is a sense of belonging.' },
            { a: 'Travel broadens the mind, but arrival is the harder art.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'It came across well',
      about: 'Recognise and use phrasal verbs with several meanings: pick up, take in, come across, put off, and a few more.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Many of the most common phrasal verbs have **several meanings**, and at C1 you are expected to know the less obvious ones. Usually one meaning is **literal** (*pick up a bag*) and the others are **figurative**, built from the same picture: you *pick up* a language the way you collect something from the floor, without effort.\n\nContext tells you which meaning is in play, and so does **grammar**. Some meanings take an object and some do not: *Sales **picked up*** (improved, no object) but *I **picked up** some Greek* (learnt, with an object). Some meanings are **separable** and some are not: *I picked **it** up*, but *I came across **it*** (never *came it across*).' },
          { t: 'table', caption: 'Four verbs, many meanings', explain: ['head', 'col1'], head: ['Verb', 'Meaning', 'Example'], rows: [
            ['pick up', 'learn informally, without lessons', 'She picked up Portuguese from her neighbours.'],
            ['pick up', 'improve, recover (no object)', 'Trade picks up when the cruise ships arrive.'],
            ['take in', 'understand and remember', 'There was too much to take in on the first day.'],
            ['take in', 'deceive (often passive)', 'Many tourists are taken in by fake guides.'],
            ['come across', 'find or meet by chance (inseparable)', 'We came across a tiny museum down a side street.'],
            ['come across (as)', 'give an impression', 'He comes across as shy, but he isn’t.'],
            ['put off', 'postpone', 'They put off the trip until the spring.'],
            ['put off', 'make someone dislike or lose interest', 'The crowds put me off visiting in August.'],
          ] },
        ],
        [
          { t: 'text', md: 'A few more verbs are worth learning in the same way. **Turn up** means *arrive, often unexpectedly* (*He turned up at midnight*), *be found by chance* (*My passport turned up in my coat*), or *increase* (*turn up the heating*). **Make out** means *see or hear with difficulty* (*I could just make out the coast*), *understand* (*I can’t make out what she wants*), or *claim, often falsely* (*He made out that he was a local*).\n\nWatch the patterns after them. **Put off** is followed by **-ing**: *We put off **booking***, *the price put us off **going***. **Come across as** is followed by an adjective or noun: *She comes across **as confident***. **Make out that** is followed by a clause. And with separable verbs, a **pronoun** must go between the two parts: *take **them** in*, *put **it** off*.' },
          { t: 'examples', items: [
            { s: 'I **picked up** the accent without realising it.', n: 'Learnt informally.' },
            { s: 'The wind **picked up** as we reached the summit.', n: 'Became stronger; no object.' },
            { s: 'The view was so vast it was hard to **take** it all **in**.', n: 'Absorb with the mind; pronoun in the middle.' },
            { s: 'I nearly **was taken in** by the “official” taxi driver.', n: 'Deceived.' },
            { s: 'Her letter **came across as** rather cold.', n: 'Gave that impression; *as* + adjective.' },
            { s: 'The reviews **put** me **off** staying there.', n: 'Made me not want to; + *-ing*.' },
            { s: 'Through the fog we could just **make out** the harbour lights.', n: 'See with difficulty.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['We came a lovely café across.', 'We came across a lovely café.', '*Come across* (find) is inseparable.'],
            ['He comes across arrogant.', 'He comes across as arrogant.', 'In this meaning you need *as*.'],
            ['I picked up it at the airport.', 'I picked it up at the airport.', 'A pronoun goes between verb and particle.'],
            ['The noise put me off to sleep.', 'The noise put me off sleeping.', '*Put off* + *-ing*.'],
            ['They postponed off the meeting.', 'They put off the meeting.', 'Do not mix the phrasal verb and its one-word synonym.'],
          ] },
          { t: 'dialogue', title: 'Back from Lisbon', lines: [
            { who: 'Lucy', s: 'So how was it? Did you pick up any Portuguese?' },
            { who: 'Ravi', s: 'A little. Enough to order, anyway. There was so much to take in that the week flew by.' },
            { who: 'Lucy', s: 'And the flat you booked? The photos looked suspiciously good.' },
            { who: 'Ravi', s: 'I was half expecting to be taken in, but it was lovely. The owner came across as a bit abrupt on the phone, then turned up with a cake.' },
            { who: 'Lucy', s: 'I keep putting off booking anything for the summer. The prices put me off.' },
            { who: 'Ravi', s: 'Go in the autumn. Things pick up again after the tourists leave, but it’s calmer.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each sentence with the meaning of the phrasal verb.', pairs: [
            ['The economy is finally picking up.', 'improving'],
            ['I picked up a little Swahili on the trip.', 'learnt without lessons'],
            ['Don’t be taken in by the free tour.', 'deceived'],
            ['I came across an old map in the attic.', 'found by chance'],
            ['The smell of the market put him off eating.', 'made him lose interest'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 1): read the text about a year in Kyoto and choose the word or phrase that best fits each gap.', items: [
            { q: 'When I first arrived in Kyoto, there was simply too much to ___ in.', o: ['take', 'pick', 'put', 'come'], why: '*Take in* = understand and absorb.' },
            { q: 'I had never studied Japanese, but I ___ up the basics from my landlady.', o: ['picked', 'took', 'turned', 'made'], why: '*Pick up* = learn informally.' },
            { q: 'She ___ across as strict, yet she was the kindest person I met.', o: ['came', 'put', 'took', 'got'], why: '*Come across as* = give an impression.' },
            { q: 'The long winters ___ some of my classmates off staying a second year.', o: ['put', 'took', 'turned', 'made'], why: '*Put someone off* + *-ing*.' },
            { q: 'One evening I ___ across a festival in a temple I had passed every day.', o: ['came', 'made', 'went', 'turned'], why: '*Come across* = find by chance.' },
            { q: 'Business at the café ___ up noticeably once the cherry blossom arrived.', o: ['picked', 'took', 'came', 'made'], why: '*Pick up* = improve, with no object.' },
            { q: 'In the dark I could barely ___ out the path back to the house.', o: ['make', 'take', 'pick', 'turn'], why: '*Make out* = see with difficulty.' },
            { q: 'My lost camera ___ up a week later at the police station.', o: ['turned', 'picked', 'came', 'took'], why: '*Turn up* = be found.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 1** all four options usually fit the grammar. The difference is the **particle** or the **collocation** around the gap. Read the words after the gap carefully: *___ across as*, *___ off staying*, *___ up the basics* each point to one verb only.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'kofi', items: [
            { a: 'There was far too much to take in on the first day.' },
            { a: 'He comes across as shy, but he isn’t at all.' },
            { a: 'The crowds put me off going in August.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'Putting down roots',
      about: 'Talk precisely about leaving home, settling somewhere new and the feeling of belonging, and follow five speakers in a multiple-matching task.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'When people talk about moving to a new place, English uses a rich set of images from **plants** and **journeys**. You **put down roots** somewhere when you settle there for the long term; you feel **uprooted** when you are forced to leave; someone who never settles is **rootless**. You **find your feet** when you become confident in a new situation, and you **settle in** during the first weeks.\n\nSeveral pairs look similar but mean different things. To **fit in** is to be accepted by a group; to **belong** is to feel that a place or group is truly yours. You can fit in at work without feeling you belong there. To **settle in** is to get used to a new home or job; to **settle down** is to start a calmer life, often with a partner and a fixed home. **Homesick** is the pain of missing home now; **nostalgic** is a gentler, often pleasant longing for the past.' },
          { t: 'table', caption: 'Place and belonging', explain: ['head', 'col1'], head: ['Expression', 'Meaning'], rows: [
            ['put down roots', 'settle somewhere for a long time'],
            ['feel uprooted', 'feel torn from your home, often against your will'],
            ['a sense of belonging', 'the feeling of being part of a place or group'],
            ['feel out of place / like a fish out of water', 'feel that you do not fit, uncomfortable'],
            ['find your feet', 'become confident and independent somewhere new'],
            ['home from home', 'a place where you feel as comfortable as at home'],
            ['culture shock / reverse culture shock', 'confusion on arriving in a new culture / on returning to your own'],
            ['integrate into (a community)', 'become a full part of it'],
            ['strike up a friendship', 'begin a friendship, often by chance'],
          ] },
        ],
        [
          { t: 'text', md: 'At C1, the precision is in the **collocations** and the **prepositions**. You *adapt **to*** a culture, *integrate **into*** a community, *feel at home **in*** a city, and are *torn **between*** two countries. You *have **mixed** feelings*, *a **deep-rooted** attachment*, and you can be ***at home** in* a language as well as a place. A city can be ***welcoming*** or ***insular***, and a community ***close-knit*** or ***transient***.\n\nThese words also carry **attitude**: many people hear *expat* as privileged and *immigrant* as neutral or negative, so careful writers often prefer *newcomers*.' },
          { t: 'examples', items: [
            { s: 'It took me a year to **find my feet**, and ten to **put down roots**.', n: 'Confidence comes first; a permanent home later.' },
            { s: 'I **fit in** well at the office, but I never felt I **belonged**.', n: 'Accepted by the group, without the deeper feeling.' },
            { s: 'Coming back, I had worse **reverse culture shock** than when I left.', n: 'The confusion of returning home.' },
            { s: 'She is **torn between** the village she grew up in and the city she loves.', n: '*Torn between* two places.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I quickly adapted the new culture.', 'I quickly adapted to the new culture.', '*Adapt to* something.'],
            ['She integrated in the community.', 'She integrated into the community.', '*Integrate into*.'],
            ['They settled down in their new jobs.', 'They settled into their new jobs.', '*Settle in* for the first weeks; *settle down* for a calmer life.'],
            ['I feel nostalgic for my family every night.', 'I feel homesick every night.', 'Painful missing now is *homesick*.'],
            ['He put down his roots in Oslo.', 'He put down roots in Oslo.', 'The idiom has no possessive.'],
          ] },
          { t: 'ex', kind: 'bank', h: 'Complete the sentences with the words from the box.', extra: ['nostalgic'], items: [
            { q: 'After six months she had finally found her ___ in Seoul.', a: 'feet', why: '*Find your feet*.' },
            { q: 'The war left thousands of families ___ and scattered.', a: 'uprooted', why: '*Uprooted* = torn from home.' },
            { q: 'In such a ___ community, newcomers are noticed at once.', a: 'close-knit', why: '*Close-knit* = strongly connected.' },
            { q: 'He was ___ between his career abroad and his ageing parents.', a: 'torn', why: '*Torn between* two choices.' },
            { q: 'Volunteering gave me a real ___ of belonging.', a: 'sense', why: '*A sense of belonging*.' },
          ] },
        ],
        [
          { t: 'text', md: '**Listening Part 4** of C1 Advanced is **multiple matching**. You hear **five short monologues** on one theme and do **two tasks** at the same time. For each speaker you choose from a list of eight options in Task One and from another list of eight in Task Two, so three options in each task are not used. The speakers rarely use the words in the options: you match the **idea**, not the vocabulary. Here, read the five speakers first, then do the two tasks.' },
          { t: 'dialogue', title: 'Five people who moved abroad', lines: [
            { who: 'Grace', s: 'Honestly, I was running away. My marriage had ended, and staying in the same town meant bumping into the past every day. Lyon was the first place with a job I could do. I had imagined freedom; what I got was loneliness.' },
            { who: 'Tarek', s: 'My company sent me to Montreal for two years, and that was eight years ago. I had no plan to stay. The turning point was the hockey team I joined, mostly by accident. Now I suppose I belong in two places, which is odd but not unpleasant.' },
            { who: 'Hannah', s: 'I went to Kraków to study and stayed in a bubble with other English speakers. It was only when I started teaching at a local school that I realised how much I had been missing. If I could change anything, I would have learnt Polish from day one.' },
            { who: 'Kwame', s: 'I followed my wife, who was offered a research post in Edinburgh. I gave up a good job in Accra, and for a while I resented it. Then I retrained as a nurse, and the work gave me back a sense of purpose. The weather, though, I have not forgiven.' },
            { who: 'Priya', s: 'I always wanted to see whether I could manage on my own somewhere completely different, so at twenty-five I moved to Lima with one suitcase. The first year was hard. Coming home to Leicester was the real shock: everything looked the same, and I didn’t.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'In the format of the C1 Advanced exam (Listening Part 4), Task One: match each speaker with the main reason they moved. In the exam there are three extra options.', pairs: [
            ['Grace', 'to escape a painful situation'],
            ['Tarek', 'because an employer arranged it'],
            ['Hannah', 'to take up a place on a course'],
            ['Kwame', 'to support a partner’s career'],
            ['Priya', 'to test her own independence'],
          ] },
          { t: 'ex', kind: 'match', h: 'Task Two: match each speaker with what they say about the experience now.', pairs: [
            ['Grace', 'Reality was very different from what she had imagined.'],
            ['Tarek', 'He feels at home in more than one country.'],
            ['Hannah', 'She regrets not making more effort with the language.'],
            ['Kwame', 'A new career helped him overcome his resentment.'],
            ['Priya', 'Returning home was harder than leaving.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Listening Part 4 you hear all five speakers **twice**. Many students do **Task One** on the first listening and **Task Two** on the second, but listen for both from the start if you can. Watch for **distractors**: Kwame mentions the weather, but that is not what he says about the experience as a whole.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'omar', items: [
            { a: 'It took me a year to find my feet.' },
            { a: 'I fitted in at work, but I never felt I belonged.' },
            { a: 'Coming home was the real culture shock.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'I am writing with regard to',
      about: 'Write a formal letter or email for C1 Advanced Writing Part 2: purpose, tone, polite requests and a clear structure in 220 to 260 words.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'In **Writing Part 2** of C1 Advanced you choose **one task from three**. The options come from four types: **a letter or email, a proposal, a report and a review**. You write **220 to 260 words**.\n\nA formal **letter or email** is written to someone you do not know or who has authority: the editor of a magazine, the manager of a company, the director of a programme, a local council. The task usually asks you to do **two or three things**, for example *explain a problem, evaluate a service and suggest improvements*. Every one of them must be covered, and the reader must finish knowing exactly **why you wrote** and **what you want**.\n\nAt C1 the examiner looks beyond the absence of contractions and slang, for **control of tone**: firm without being rude, polite without being vague, and persuasive.' },
          { t: 'table', caption: 'A plan for a formal letter or email', explain: ['head', 'col0', 'col1'], head: ['Paragraph', 'What to write', 'Useful language'], rows: [
            ['Opening', 'Who you are and why you are writing', 'I am writing with regard to… / As a participant in…'],
            ['Body one', 'The first point of the task, with detail', 'While I found… particularly valuable, …'],
            ['Body two', 'The second point, often a problem or criticism', 'I was, however, disappointed to discover that…'],
            ['Body three', 'Suggestions or requests', 'I would be grateful if you could… / It might be worth considering…'],
            ['Closing', 'What you expect next, and a polite close', 'I look forward to hearing from you. Yours sincerely,'],
          ] },
        ],
        [
          { t: 'reading', title: 'Task and model letter', md: 'Task: You recently spent three months abroad on a work placement arranged by an international exchange organisation. The organisation has asked participants for feedback. Write a letter to the programme director, evaluating the support you received before and during the placement and suggesting how the programme could better help participants settle into their host communities.\n\nDear Ms Okafor,\n\nI am writing in response to your request for feedback on the Bridges placement programme, in which I took part from March to May at a design studio in Porto.\n\nI should say at the outset that the placement itself exceeded my expectations. The studio welcomed me warmly, and the pre-departure briefing gave a clear picture of what the work would involve. The practical information on visas and insurance was also excellent.\n\nI was, however, less well prepared for life outside work. Apart from a single welcome evening, there was no contact with local people, and the accommodation provided was shared exclusively with other participants. As a result, I spent my first month in what felt like a foreign bubble, and it was only by chance that I came across a language exchange in the city.\n\nI would therefore like to suggest two changes. Firstly, it might be worth arranging host-family stays, or at least placing participants in local shared housing. Secondly, a short list of clubs, volunteering projects and language exchanges in each city would make an enormous difference to newcomers who are eager to integrate but do not know where to begin.\n\nI hope these comments prove useful, and I would be happy to discuss them further or to speak to future participants about my experience.\n\nYours sincerely,\nLaura Kendrick' },
          { t: 'ex', kind: 'choice', h: 'Read the model letter. Choose the correct answer.', items: [
            { q: 'Which part of the task does the third paragraph answer?', o: ['Evaluating the support during the placement', 'Suggesting improvements', 'Explaining why she applied'], why: 'It evaluates life outside work during the placement.' },
            { q: 'Why does the writer begin with what went well?', o: ['To make the criticism that follows sound fair and balanced', 'Because the task asks only for praise', 'To fill the word count'], why: 'Praise first makes the reader more open to the criticism.' },
            { q: 'Why does she close with *Yours sincerely*?', o: ['Because she addressed the reader by name', 'Because the letter is informal', 'Because she does not know the reader’s name'], why: '*Dear Ms Okafor* → *Yours sincerely*; *Dear Sir or Madam* → *Yours faithfully*.' },
          ] },
        ],
        [
          { t: 'text', md: 'Look at how the model letter keeps a formal, persuasive tone.\n\nIt **softens criticism** without hiding it: *less well prepared* rather than *badly prepared*, and *I was, however, disappointed* rather than *It was terrible*. It makes **indirect suggestions**: *it might be worth arranging* and *I would like to suggest*. It uses **formal linkers** inside sentences (*however, therefore, as a result*) instead of starting every sentence with *But* or *So*. And it uses **noun phrases** where speech would use verbs: *the pre-departure briefing*, *contact with local people*.' },
          { t: 'table', caption: 'Common mistakes in formal letters', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I’m writing because I want to complain.', 'I am writing to express my concern about…', 'State your purpose formally and precisely.'],
            ['You must give us more help.', 'I would be grateful if you could provide more support.', 'An indirect request is firm but polite.'],
            ['Dear Sir or Madam, … Yours sincerely,', 'Dear Sir or Madam, … Yours faithfully,', 'Unknown name: *faithfully* (British convention).'],
            ['The housing was awful and the briefing was useless.', 'The housing, while comfortable, offered little contact with local people.', 'Criticism with precise detail is more persuasive.'],
            ['Hope to hear from you soon!', 'I look forward to hearing from you.', 'A formal close; *to* + *-ing*.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Make each sentence right for a formal letter.', items: [
            { s: 'I am writing [about] your advertisement in Travel Weekly.', a: ['with regard to', 'in response to', 'regarding', 'concerning'], why: 'A more formal way to give the topic.' },
            { s: 'I would be grateful if you [can] send me further details.', a: ['could'], why: '*I would be grateful if you could*: conditional politeness.' },
            { s: 'I look forward to [hear] from you.', a: ['hearing'], why: '*Look forward to* + *-ing*.' },
            { s: 'The staff were helpful. [But] the website was confusing.', a: ['However,', 'However'], why: 'Avoid *But* at the start of a sentence in formal writing.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Your task', md: 'In the format of the C1 Advanced exam (Writing Part 2), write your answer in 220 to 260 words and send it to your teacher for correction.\n\nYou have read in a local newspaper that your town council plans to close its welcome centre for people who have recently moved to the area, to save money. Write a letter to the council. In your letter you should explain what the centre has offered newcomers, evaluate the likely effects of closing it, and suggest a less costly way of continuing at least part of its work.' },
          { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Writing Part 2): before you write, check your plan for the task above.', items: [
            { q: 'How many points must your letter cover?', o: ['Three: what the centre offers, the effects of closing it, and a cheaper alternative', 'One: your opinion of the council', 'Two: a story about moving and a complaint'], why: 'Every point in the task is needed for full Content marks.' },
            { q: 'Which opening is best?', o: ['I am writing in response to the article in last Thursday’s Gazette concerning the proposed closure of the welcome centre.', 'Hi, I just read that you want to close the centre, which is crazy.', 'My name is Paul and I moved here two years ago from Lisbon, which is in Portugal.'], why: 'It states the purpose formally and refers to the source.' },
            { q: 'Which sentence makes the best suggestion?', o: ['Might the council consider keeping the centre open two days a week, staffed partly by volunteers?', 'Keep it open or people will be angry.', 'I suggest you to think again.'], why: 'An indirect question is polite but clear. *Suggest you to* is wrong.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Spend **five minutes planning**: list the task points, give each one a paragraph, and decide on your **reader** and **tone**. In the last five minutes, check that each point is covered, that the opening says why you are writing, and that the close matches the greeting.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these letter sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'I am writing with regard to the proposed closure.' },
            { a: 'I would be grateful if you could reconsider this decision.' },
            { a: 'I look forward to hearing from you.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'Choose the best article, or no article (–).', items: [
      { q: '___ disabled are often excluded from cheap travel.', o: ['The', 'A', '–'], why: '*The* + adjective for a group.' },
      { q: 'She spoke with ___ quiet confidence that impressed everyone.', o: ['a', '–', 'the'], why: '*A* + adjective + abstract noun: one instance.' },
      { q: '___ hospitality is central to life in the region.', o: ['–', 'The', 'A'], why: 'Abstract noun in general: no article.' },
      { q: '___ printing press changed the spread of ideas for ever.', o: ['The', 'A', '–'], why: 'Generic *the* for an invention.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
      { q: 'I came ___ an old photo of my grandparents’ village.', a: ['across'], why: '*Come across* = find by chance.' },
      { q: 'Don’t be taken ___ by offers that look too good to be true.', a: ['in'], why: '*Be taken in* = be deceived.' },
      { q: 'The high prices put us ___ staying in the old town.', a: ['off'], why: '*Put someone off* + *-ing*.' },
      { q: 'He comes across ___ rather distant at first.', a: ['as'], why: '*Come across as* + adjective.' },
      { q: 'It took her months to find her ___ in Tokyo.', a: ['feet'], why: '*Find your feet*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'It took years to adapt [the] local customs.', a: ['to the'], why: '*Adapt to* something.' },
      { s: 'The young [is] usually quicker to pick up the language.', a: ['are'], why: '*The* + adjective is plural.' },
      { s: 'I look forward to [receive] your reply.', a: ['receiving'], why: '*Look forward to* + *-ing*.' },
      { s: 'Dear Sir or Madam, … Yours [sincerely],', a: ['faithfully'], why: 'Unknown name: *Yours faithfully*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the expressions with their meanings.', pairs: [
      ['put down roots', 'settle somewhere for the long term'],
      ['like a fish out of water', 'completely out of place'],
      ['reverse culture shock', 'confusion on returning home'],
      ['close-knit', 'strongly connected'],
      ['settle in', 'get used to a new home or job'],
    ] },
    { t: 'ex', kind: 'choice', h: 'Choose the best sentence for a formal letter.', items: [
      { q: '', o: ['I would be grateful if you could clarify the conditions of the placement.', 'Tell me the conditions, please.', 'What are the conditions? I need to know asap.'], why: 'An indirect request in a formal register.' },
      { q: '', o: ['While the briefing was thorough, it offered little guidance on daily life.', 'The briefing was long but kind of useless.', 'Briefing: OK. Daily life: no info.'], why: 'Balanced, precise and formal.' },
    ] },
  ],
};
