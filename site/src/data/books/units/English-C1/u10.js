// English C1, unit 10, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Mind and wellbeing: complex noun phrases (pre- and post-modification), dependent prepositions with nouns, verbs and
// adjectives, collocations of health and the mind, and a long article on the psychology of happiness.
export const UNIT = {
  id: 'u10',
  title: 'Mind and wellbeing',
  goal: 'Pack information into precise noun phrases, use the right preposition after advanced nouns, verbs and adjectives, talk about stress, recovery and wellbeing with natural collocations, and follow a long, nuanced article on what makes people happy.',
  art: 'sun',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'speaking'], topics: ['noun-phrases', 'modification', 'prepositions', 'collocations', 'wellbeing', 'stress', 'happiness', 'psychology'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'A widely held belief',
      about: 'Build complex noun phrases with words before the noun and phrases after it, the way formal and academic English does.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Compare two ways of saying the same thing. *Many people believe that stress is always bad. This belief is wrong.* And: **The widely held belief that stress is always harmful** *is mistaken.* The second version is shorter, more formal and more precise, because the information sits inside one **noun phrase** instead of being spread over two sentences.\n\nAt C1 this is one of the clearest differences between conversational and written English. Articles, reports and essays build long noun phrases around a **head noun**, adding detail **before** it (pre-modification) and **after** it (post-modification). Being able to read these phrases quickly, and to build them yourself, is essential for the reading paper and for a high mark in writing.' },
          { t: 'table', caption: 'The parts of a noun phrase', explain: ['head', 'col1'], head: ['Part', 'What it adds', 'Example'], rows: [
            ['adverb + participle', 'a compact description before the noun', 'a **widely held** belief'],
            ['noun modifier', 'the type or topic', 'a **sleep** disorder, **stress** levels'],
            ['prepositional phrase', 'what it is about or belongs to', 'the health **of young adults**'],
            ['participle phrase', 'a reduced relative clause', 'the people **affected by the change**'],
            ['to-infinitive', 'purpose, ability or an order of events', 'the ability **to switch off**, the first **to notice**'],
            ['that-clause', 'the content of an idea, fact or belief', 'the belief **that stress is harmful**'],
          ] },
          { t: 'tip', art: 'owl', md: 'To understand a long noun phrase, find the **head noun** first and ask what each part tells you about it. In *the growing number of students reporting high levels of anxiety*, the head is *number*: everything else describes it.' },
        ],
        [
          { t: 'text', md: '**Before the noun.** An **adverb + past participle** gives a compact description: *a **widely held** view*, *a **carefully designed** study*, *a **poorly understood** condition*. Adverbs ending in *-ly* are never hyphenated. Compounds with *well*, *ill*, *badly* or *long* are hyphenated before the noun but not after a verb: *a **well-known** effect*, but *the effect is **well known***.\n\n**Number + noun** before another noun stays singular and takes a hyphen: *a **two-week** course*, *a **ten-minute** break*. A **noun modifier** is usually singular too: *a **sleep** disorder*, *a **stress** hormone*, even when the meaning is plural. A few established compounds keep a plural, such as *a sports centre* and *a careers adviser*, so learn those as fixed phrases.' },
          { t: 'examples', items: [
            { s: 'It is a **commonly held** view that exercise improves mood.', n: '*-ly* adverb + participle: no hyphen.' },
            { s: 'This is a **well-documented** link, and the link is **well documented** in the research.', n: 'Hyphen before the noun, none after the verb.' },
            { s: 'She signed up for a **six-week** course in **stress management**.', n: 'Number + singular noun; noun + noun.' },
            { s: 'The clinic treats **long-term** sleep problems.', n: '*Long-term* before a noun.' },
            { s: 'A **poorly understood** condition can be hard to diagnose.', n: '*Poorly* + participle.' },
          ] },
        ],
        [
          { t: 'text', md: '**After the noun.** A relative clause can often be reduced to a participle: *the people **who were most affected by** the change* becomes *the people **most affected by** the change*. Notice that the adverb (*most*, *least*, *directly*, *worst*) stays **after** the noun, before the participle: *the areas **worst hit** by the floods*, *the patients **most at risk***.\n\nSome adjectives also go after the noun, and the position changes the meaning. *The people **concerned*** are the people affected or involved; *concerned people* are worried people. *The members **present*** are the ones in the room; *present members* are the current ones. *The person **responsible*** is the one to blame or in charge; *a responsible person* is reliable.\n\nA **to-infinitive** after the noun gives ability, purpose or order: *the **ability to concentrate***, *the **decision to leave***, *the **first person to notice***.' },
          { t: 'table', caption: 'Position changes the meaning', explain: ['head', 'col1', 'col3'], head: ['After the noun', 'Meaning', 'Before the noun', 'Meaning'], rows: [
            ['the people concerned', 'the people affected or involved', 'concerned people', 'worried people'],
            ['the members present', 'those in the room', 'the present members', 'the current members'],
            ['the person responsible', 'the one to blame or in charge', 'a responsible person', 'a reliable person'],
            ['the people involved', 'those taking part', 'an involved explanation', 'a complicated explanation'],
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['a held widely belief', 'a widely held belief', 'The adverb comes before the participle.'],
            ['the most affected by the change people', 'the people most affected by the change', 'A participle phrase goes after the noun.'],
            ['a two-weeks course', 'a two-week course', 'Number + noun as a modifier stays singular.'],
            ['a widely-held belief', 'a widely held belief', 'No hyphen after an *-ly* adverb.'],
            ['the involved people', 'the people involved', '*Involved* meaning *taking part* goes after the noun.'],
            ['the ability of concentrating', 'the ability to concentrate', '*Ability* takes a to-infinitive.'],
          ] },
          { t: 'reading', title: 'One finding, two styles', md: '**Spoken style.** Lots of students say they feel anxious, and the number is going up. The students who are most anxious are often the ones who sleep badly. Researchers have known this for a long time, but schools haven’t done much about it.\n\n**Written style.** The growing number of students reporting high levels of anxiety is a cause for concern. Those most affected tend to be the students with the poorest sleep, a well-established link that has so far received little attention from schools.' },
          { t: 'tip', art: 'owl', md: 'Dense noun phrases suit essays, reports and reviews. In conversation they sound stiff, and even in writing a whole paragraph of them is hard to read. Aim for a mix: one or two well-built noun phrases per sentence, with clear verbs around them.' },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the correct noun phrase.', items: [
            { q: 'The survey questioned ___ in the city.', o: ['the residents most affected by the noise', 'the most affected by the noise residents', 'the residents affected most the noise'], why: 'Noun, then adverb + participle phrase.' },
            { q: 'She is taking ___.', o: ['a three-month break', 'a three-months break', 'a three month’s break'], why: 'Number + singular noun with a hyphen.' },
            { q: 'It is ___ that we only use ten per cent of our brains.', o: ['a widely held myth', 'a held widely myth', 'a widely-held myth'], why: 'Adverb before the participle, no hyphen after *-ly*.' },
            { q: 'Could ___ please contact the office?', o: ['the students concerned', 'the concerned students', 'the students concerning'], why: '*The students concerned* = the ones affected, not the worried ones.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order to make sentences with complex noun phrases.', items: [
            { a: 'The people most at risk are often the least likely to ask for help.', why: 'Noun + *most at risk*, then *the least likely to*.' },
            { a: 'Her decision to take a break surprised everyone.', why: 'Noun + to-infinitive.' },
            { a: 'It is a well-known fact that sleep affects mood.', why: 'Hyphenated compound before the noun.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'wordform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 3): use the word in capitals to form a word that fits the gap.', items: [
            { q: 'It is a widely ___ belief that all stress is harmful.', base: 'HOLD', a: ['held'], why: 'Adverb + past participle: *a widely held belief*.' },
            { q: 'The workers most ___ by the reorganisation were never consulted.', base: 'AFFECT', a: ['affected'], why: 'A reduced relative: *the workers (who were) most affected*.' },
            { q: 'There is growing ___ that loneliness damages physical health.', base: 'RECOGNISE', a: ['recognition'], why: 'A noun after *growing*: *recognition*.' },
            { q: 'Her ___ to switch off after work protects her from burnout.', base: 'ABLE', a: ['ability'], why: 'Noun + to-infinitive: *the ability to*.' },
            { q: 'This is a ___ documented effect, confirmed by many studies.', base: 'THOROUGH', a: ['thoroughly'], why: '*-ly* adverb before the participle.' },
            { q: 'The study found a ___ rise in reported stress among first-year students.', base: 'SIGNIFY', a: ['significant'], why: 'An adjective before *rise*.' },
            { q: 'The ___ of anxiety among teenagers has been widely discussed.', base: 'PREVAIL', a: ['prevalence'], why: '*Prevail* → *prevalent* → *prevalence*: how common something is.' },
            { q: 'Many ___ are unaware of the support their company offers.', base: 'EMPLOY', a: ['employees'], why: 'Plural noun for people: *employees*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 3** of C1 Advanced you form **eight words** from the words in capitals. Many items test exactly the word classes inside noun phrases: an adverb before a participle, an adjective before a noun, a noun after *the* or *a growing*. Decide the word class from the position first, then the form, and check whether it needs to be plural or negative.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'mei', items: [
            { a: 'It is a widely held belief that stress is always harmful.' },
            { a: 'The people most affected by the change were never asked.' },
            { a: 'She took a two-week break to recharge.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'Conducive to, refrain from',
      about: 'Use the right dependent preposition after advanced adjectives, verbs and nouns, and notice when a related word takes a different one.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: 'At B2 you learned the common combinations: *interested in*, *depend on*, *afraid of*. At C1 you meet a large set of more formal words whose preposition is fixed and has to be learned with them: *conducive **to***, *prone **to***, *refrain **from***, *an aversion **to***.\n\nTwo things make them tricky. First, the preposition rarely follows logic, so translation from your language often gives the wrong one. Second, when the preposition is **to**, it is usually a preposition, not part of an infinitive, so a verb after it takes **-ing**: *She is committed to **improving** staff wellbeing*, not *to improve*.' },
          { t: 'table', caption: 'Adjectives and their prepositions', explain: ['head', 'col1'], head: ['Adjective', 'Meaning', 'Example'], rows: [
            ['conducive to', 'helping something to happen', 'A quiet room is conducive to sleep.'],
            ['prone to', 'likely to suffer from', 'He’s prone to headaches when he’s tired.'],
            ['detrimental to', 'harmful to', 'Long hours are detrimental to health.'],
            ['averse to', 'opposed to, unwilling', 'I’m not averse to a bit of risk.'],
            ['wary of', 'careful, a little suspicious', 'Be wary of quick fixes.'],
            ['indicative of', 'a sign of', 'Poor sleep can be indicative of stress.'],
            ['oblivious to / of', 'not noticing', 'She was oblivious to the noise.'],
            ['preoccupied with', 'thinking about all the time', 'He’s preoccupied with work.'],
          ] },
        ],
        [
          { t: 'text', md: 'Verbs and nouns follow the same principle. Some verbs take an object **and** a preposition: you **attribute** a result **to** a cause, **deprive** someone **of** something, **subject** someone **to** a test. Others take a preposition directly: you **refrain from**, **succumb to**, **adhere to**, **dwell on**, **confide in**.\n\nNouns often keep the preposition of their verb or adjective, but not always, and that is where C1 learners lose marks.' },
          { t: 'table', caption: 'Verbs and nouns', explain: ['head', 'col1'], head: ['Word', 'Meaning', 'Example'], rows: [
            ['refrain from + -ing', 'stop yourself doing', 'Please refrain from using your phone.'],
            ['succumb to', 'give in to', 'She finally succumbed to exhaustion.'],
            ['dwell on', 'keep thinking about something negative', 'Try not to dwell on mistakes.'],
            ['confide in', 'tell your secrets to', 'He confided in his sister.'],
            ['attribute X to Y', 'say Y caused X', 'She attributes her calm to yoga.'],
            ['deprive X of Y', 'take Y away from X', 'Noise deprived them of sleep.'],
            ['an aversion to', 'a strong dislike of', 'I have an aversion to crowds.'],
            ['an insight into', 'a deep understanding of', 'The book offers an insight into grief.'],
            ['a predisposition to / towards', 'a natural tendency to', 'a predisposition to anxiety'],
          ] },
        ],
        [
          { t: 'text', md: 'Related words do not always share a preposition. You are *proud **of*** your work but take *pride **in*** it; you are *fond **of*** a place but feel *fondness **for*** it; you are *capable **of*** a lot but have a *capacity **for*** it. Learn these as pairs.' },
          { t: 'table', caption: 'One family, two prepositions', explain: ['head'], head: ['Adjective or verb', 'Noun'], rows: [
            ['proud of', 'pride in'],
            ['fond of', 'fondness for'],
            ['afraid of', 'fear of'],
            ['capable of', 'capacity for'],
            ['dependent on', 'dependence on'],
            ['sensitive to', 'sensitivity to'],
            ['interested in', 'interest in'],
          ] },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['conducive for learning', 'conducive to learning', 'Fixed preposition: *to*.'],
            ['committed to improve', 'committed to improving', '*To* is a preposition here: use *-ing*.'],
            ['refrain to smoke', 'refrain from smoking', '*Refrain from* + *-ing*.'],
            ['deprived from sleep', 'deprived of sleep', '*Deprive someone of something*.'],
            ['take pride of your work', 'take pride in your work', 'The noun takes *in*.'],
            ['an effect to your mood', 'an effect on your mood', '*An effect / impact on*.'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'Coffee after a long week', lines: [
            { who: 'Nadia', s: 'You look exhausted. Is it still the project?' },
            { who: 'Felix', s: 'Partly. I’m prone to overthinking at the best of times, and lately I can’t stop dwelling on what might go wrong.' },
            { who: 'Nadia', s: 'Have you talked to anyone? Confiding in someone really helps.' },
            { who: 'Felix', s: 'I’ve always been a bit wary of making a fuss. And the open-plan office isn’t exactly conducive to a quiet chat.' },
            { who: 'Nadia', s: 'Fair enough. But working until midnight is detrimental to your health, not just your mood.' },
            { who: 'Felix', s: 'I know. I’ve decided to refrain from checking emails after eight. My manager wasn’t averse to the idea, surprisingly.' },
            { who: 'Nadia', s: 'Good. And I’d attribute half your stress to that inbox.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Which preposition follows each word?', groups: ['to', 'of', 'from', 'with'], items: [
            { s: 'conducive', g: 0, why: '*conducive to*' },
            { s: 'succumb', g: 0, why: '*succumb to*' },
            { s: 'wary', g: 1, why: '*wary of*' },
            { s: 'indicative', g: 1, why: '*indicative of*' },
            { s: 'refrain', g: 2, why: '*refrain from*' },
            { s: 'abstain', g: 2, why: '*abstain from*' },
            { s: 'preoccupied', g: 3, why: '*preoccupied with*' },
            { s: 'cope', g: 3, why: '*cope with*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Each sentence has one mistake. Find it and fix it.', items: [
            { s: 'The new policy is not conducive [for] good sleep.', a: ['to'], why: '*conducive to*' },
            { s: 'She is committed to [help] staff who feel overwhelmed.', a: ['helping'], why: '*committed to* + *-ing*.' },
            { s: 'He takes great pride [of] his garden.', a: ['in'], why: 'The noun *pride* takes *in*.' },
            { s: 'Shift work can deprive people [from] proper rest.', a: ['of'], why: '*deprive someone of something*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 2): read the text about a workplace wellbeing scheme and write one word in each gap.', items: [
            { q: 'The new open-plan office was hardly conducive ___ concentration.', a: ['to'], why: '*conducive to*' },
            { q: 'Staff had been complaining ___ the noise for months.', a: ['about', 'of'], why: '*complain about* (or *complain of* for symptoms).' },
            { q: 'Several were prone ___ headaches by mid-afternoon.', a: ['to'], why: '*prone to*' },
            { q: 'Managers were asked to refrain ___ sending emails after seven.', a: ['from'], why: '*refrain from* + *-ing*.' },
            { q: 'Some people were wary ___ the scheme at first.', a: ['of'], why: '*wary of*' },
            { q: 'There was some reluctance ___ the part of senior staff to join in.', a: ['on'], why: 'The fixed phrase *on the part of*.' },
            { q: 'Later, the company attributed a fall in sick days ___ the new quiet room.', a: ['to'], why: '*attribute X to Y*.' },
            { q: 'In the end, hardly anyone objected ___ being given an hour of quiet time.', a: ['to'], why: '*object to* + *-ing*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Dependent prepositions are a favourite in **Part 2**. When the gap comes straight after an adjective, a verb or a noun such as *conducive*, *refrain* or *reluctance*, the answer is very often its fixed preposition. Also look for fixed phrases around the gap, such as *on the part of* or *in the light of*.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'omar', items: [
            { a: 'A quiet bedroom is conducive to a good night’s sleep.' },
            { a: 'Try to refrain from checking your phone in bed.' },
            { a: 'She attributes her calm to a daily walk.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'A sense of purpose',
      about: 'Talk about stress, recovery and wellbeing with natural collocations such as mental resilience, suffer from burnout and a sense of purpose.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'Talking about the mind is an area where learners often fall back on a handful of general words: *stressed*, *tired*, *happy*, *better*. At C1 you can be much more precise, and precision matters, because these are topics where the difference between *a bit run-down* and *burnt out* is important.\n\nAs always, the strength of your English lies in the **collocations**: which verb goes with *burnout*, which adjective with *stress*, which noun after *a sense of*. The first table describes the mind under pressure; the second, recovery and wellbeing.' },
          { t: 'table', caption: 'The mind under pressure', explain: ['head', 'col1'], head: ['Collocation', 'Meaning', 'Example'], rows: [
            ['suffer from burnout', 'be exhausted by long-term stress, usually from work', 'Half the team were suffering from burnout.'],
            ['be under (a lot of) strain', 'be under pressure that is hard to bear', 'She’d been under strain for months.'],
            ['take its toll on', 'gradually cause harm to', 'The night shifts took their toll on him.'],
            ['run-down', 'tired and slightly ill', 'I feel run-down and keep catching colds.'],
            ['chronic / acute stress', 'long-lasting / sudden and intense', 'Chronic stress affects sleep.'],
            ['at a low ebb', 'at a low point emotionally', 'After the move I was at a low ebb.'],
            ['reach breaking point', 'reach the point where you cannot cope', 'By March she had reached breaking point.'],
          ] },
        ],
        [
          { t: 'table', caption: 'Recovery and wellbeing', explain: ['head', 'col1'], head: ['Collocation', 'Meaning', 'Example'], rows: [
            ['build mental resilience', 'develop the ability to recover from difficulty', 'Sport can help children build resilience.'],
            ['bounce back', 'recover quickly', 'She bounced back after a difficult year.'],
            ['a sense of purpose / belonging', 'a feeling that your life has meaning / that you fit in', 'Volunteering gave him a sense of purpose.'],
            ['peace of mind', 'freedom from worry', 'Insurance gives you peace of mind.'],
            ['recharge your batteries', 'rest to get your energy back', 'I need a week off to recharge my batteries.'],
            ['keep things in perspective', 'see how important something really is', 'Talking to friends helps me keep things in perspective.'],
            ['strike a balance', 'find a healthy middle point', 'It’s hard to strike a balance between work and rest.'],
            ['a support network', 'the people you can rely on', 'A strong support network makes a difference.'],
          ] },
          { t: 'text', md: 'Verbs for making things better are not interchangeable. You **relieve**, **ease** or **alleviate** pain, symptoms or anxiety (*alleviate* is the most formal). You **boost** confidence or morale, and something cheerful **lifts** your spirits. You **seek** help or advice in formal English, and you **cope with** or **deal with** pressure.\n\nAdjectives of degree also collocate: stress or pain can be *mild*, *severe*, *chronic* or *acute*, but not *strong* or *heavy*.' },
          { t: 'tip', art: 'owl', md: '**Peace of mind** is uncountable: *It gives me peace of mind*, not *a peace of mind*. **Recharge your batteries** is always plural, and **takes its toll** changes to fit the subject: *The stress took **its** toll*, *The long hours took **their** toll*.' },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['The job took its price on her.', 'The job took its toll on her.', 'Fixed: *take its toll on*.'],
            ['I suffer from a strong stress.', 'I suffer from severe stress.', '*Severe* or *acute*, and *stress* is uncountable here.'],
            ['It gives me a peace of mind.', 'It gives me peace of mind.', 'Uncountable: no *a*.'],
            ['I need to recharge my battery.', 'I need to recharge my batteries.', 'The idiom is plural.'],
            ['I am very stressing.', 'I am very stressed.', 'Feelings: *-ed*; the cause is *stressful*.'],
            ['She jumped back quickly.', 'She bounced back quickly.', 'The phrasal verb is *bounce back*.'],
          ] },
          { t: 'dialogue', title: 'Back at work', lines: [
            { who: 'Elena', s: 'It’s good to have you back. How are you feeling?' },
            { who: 'Gareth', s: 'Much better, thanks. By the end of last year I’d honestly reached breaking point. The commute and the deadlines really took their toll.' },
            { who: 'Elena', s: 'We could all see you were under strain. What helped?' },
            { who: 'Gareth', s: 'Time off, mainly, and actually seeking help instead of pretending I was fine. And I started volunteering at a food bank, which gave me a sense of purpose outside work.' },
            { who: 'Elena', s: 'That’s great. Are you doing anything differently now?' },
            { who: 'Gareth', s: 'I’m trying to strike a better balance. I leave at six, and I’ve stopped letting small things build up. It’s easier to keep them in perspective.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'colloc', h: 'Which words go with the key word?', items: [
            { key: 'alleviate / ease', o: ['symptoms', 'anxiety', 'a sense of purpose', 'resilience'], a: [0, 1], why: 'You *ease* or *alleviate* symptoms and anxiety; you *find* a sense of purpose and *build* resilience.' },
            { key: '___ stress', o: ['chronic', 'severe', 'acute', 'heavy'], a: [0, 1, 2], why: '*Heavy* does not collocate with *stress*.' },
            { key: 'a sense of', o: ['purpose', 'belonging', 'humour', 'burnout'], a: [0, 1, 2], why: '*A sense of purpose, belonging, humour*; not *burnout*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match each phrase with its meaning.', pairs: [
            ['at a low ebb', 'feeling low emotionally'],
            ['bounce back', 'recover quickly'],
            ['run-down', 'tired and slightly ill'],
            ['peace of mind', 'freedom from worry'],
            ['reach breaking point', 'be unable to cope any more'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 1): read the text about recovering from burnout and choose the word that best fits each gap.', items: [
            { q: 'Years of long hours eventually took their ___ on Maya’s health.', o: ['toll', 'price', 'cost', 'charge'], why: '*Take its / their toll on*.' },
            { q: 'She had been under enormous ___ for months before she admitted it.', o: ['strain', 'tension', 'load', 'weight'], why: '*Under strain*; *tension* is not used this way.' },
            { q: 'Fortunately, her friends formed a strong support ___ around her.', o: ['network', 'web', 'chain', 'grid'], why: '*A support network*.' },
            { q: 'Gradually she learned to keep things in ___.', o: ['perspective', 'sight', 'view', 'focus'], why: '*Keep things in perspective*.' },
            { q: 'A walk every morning helped to ___ her anxiety.', o: ['ease', 'soften', 'lighten', 'smooth'], why: '*Ease anxiety*.' },
            { q: 'Volunteering gave her a renewed ___ of purpose.', o: ['sense', 'spirit', 'meaning', 'view'], why: '*A sense of purpose*.' },
            { q: 'Within a year she had ___ back and returned to work.', o: ['bounced', 'jumped', 'sprung', 'leapt'], why: '*Bounce back* = recover.' },
            { q: 'She now tries hard to strike a healthier ___ between work and rest.', o: ['balance', 'equality', 'measure', 'harmony'], why: '*Strike a balance*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 1** the wrong options are often words with a similar meaning that simply do not collocate: *price* and *toll* both suggest a cost, but only one goes with *take its … on*. If two options both seem right, say the whole phrase in your head and choose the one you have heard before.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'lena', items: [
            { a: 'The long hours eventually took their toll on my health.' },
            { a: 'Volunteering gave me a real sense of purpose.' },
            { a: 'I’m trying to strike a better balance between work and rest.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'The psychology of happiness',
      about: 'Read a long article on why happiness is hard to predict, answer questions in the format of the exam and discuss the topic.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'This article is the length and difficulty of a C1 Advanced Part 5 text. The writer builds an argument, qualifies it and comes to a cautious conclusion, so pay attention to words that signal attitude: *if slightly deflating*, *none of this means*, *the point is rather*. Notice too the noun phrases and prepositions from this unit.' },
          { t: 'reading', title: 'The pursuit of happiness, reconsidered', md: 'Ask people what would make them happier and the answers are remarkably consistent: more money, a better job, a bigger home, perhaps a move somewhere sunnier. Ask psychologists and you are likely to get a more cautious reply. Decades of research into wellbeing have produced a widely shared, if slightly deflating, conclusion: we are surprisingly poor judges of what will make us happy, and the things we chase most energetically are often the ones least likely to deliver.\n\nPart of the explanation lies in a process known as hedonic adaptation. Human beings grow accustomed to changes in their circumstances, good or bad, with remarkable speed. The thrill of a pay rise or a new car is real, but it fades, and what once felt like a luxury soon comes to feel like the normal state of affairs. A frequently cited study from the 1970s compared people who had won large sums on the lottery with people who had won nothing and found that, some time later, the winners were not much happier. The finding has been debated and refined since, but the underlying pattern has proved remarkably durable.\n\nA second difficulty is what some researchers call the focusing illusion. When we imagine a change, we concentrate on the one thing that will be different and overlook everything that will stay the same. Someone dreaming of a move to the coast pictures the sea views, not the commute, the unfamiliar neighbours or the fact that they will still have to do the washing-up. The imagined life is vivid and simple; the real one is crowded with detail, much of it ordinary.\n\nNone of this means that circumstances are irrelevant. Poverty, chronic illness and isolation are genuinely detrimental to wellbeing, and removing them makes a lasting difference. The point is rather that, once basic needs are met, further gains in comfort tend to bring smaller and shorter-lived rewards. What seems to matter more is less tangible: the quality of our relationships, a sense of purpose, and the feeling that we have some control over how we spend our time.\n\nThere is also an irony that the philosopher John Stuart Mill noticed in the nineteenth century, when he wrote that asking yourself whether you are happy is a reliable way to stop being so. Some studies have suggested that people who place a very high value on being happy are more prone to disappointment, perhaps because every ordinary afternoon becomes evidence that they are falling short.\n\nSo what, if anything, should we do? The most consistent advice from researchers is modest. Invest in relationships rather than possessions; spend money, if you have it, on experiences and on other people; protect time for activities that absorb you so completely that you lose track of the hour. Above all, perhaps, refrain from measuring your life constantly against an imagined ideal. Happiness, it seems, is less a destination than a by-product of a life that is going reasonably well.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 5): read the article and choose the best answer.', items: [
            { q: 'In the first paragraph, how does the writer describe the conclusion reached by psychologists?', o: ['As broadly accepted but somewhat disappointing.', 'As surprising to most psychologists.', 'As based on too little evidence.', 'As popular with the general public.'], why: '*a widely shared, if slightly deflating, conclusion*.' },
            { q: 'What does the writer say about hedonic adaptation?', o: ['It causes the pleasure of an improvement to wear off.', 'It affects only people who suddenly become rich.', 'It means that bad events have no effect on us.', 'It was first identified in a study of lottery winners.'], why: '*The thrill … is real, but it fades*.' },
            { q: 'Why does the writer mention the lottery study?', o: ['To illustrate a pattern that has stood up to later scrutiny.', 'To prove that money has no effect on happiness.', 'To criticise the methods of early research.', 'To suggest that winners spend their money unwisely.'], why: '*debated and refined since, but the underlying pattern has proved remarkably durable*.' },
            { q: 'The example of the move to the coast shows that we tend to…', o: ['imagine future changes in an oversimplified way.', 'be disappointed by the places we move to.', 'underestimate how long commutes will be.', 'dislike ordinary household tasks.'], why: '*The imagined life is vivid and simple; the real one is crowded with detail*.' },
            { q: 'In the fourth paragraph, the writer is careful to point out that…', o: ['some hardships really do reduce wellbeing.', 'comfort is the most important source of happiness.', 'relationships matter less than income.', 'basic needs are rarely met in modern societies.'], why: '*None of this means that circumstances are irrelevant*.' },
            { q: 'What is the writer’s main point in the final paragraph?', o: ['Happiness tends to follow from a life lived well rather than from chasing it.', 'People should stop trying to improve their lives.', 'Spending on experiences guarantees happiness.', 'Researchers cannot agree on how to be happy.'], why: '*less a destination than a by-product of a life that is going reasonably well*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 5** of C1 Advanced there are **six questions** on a long text, in the order of the text. Many test the writer’s **attitude** or **purpose** (*Why does the writer mention…?*), so watch for qualifying words like *if slightly*, *none of this means* and *the point is rather*. An option that is true in the real world but not stated in the text is still wrong.' },
        ],
        [
          { t: 'text', md: 'The article uses the language of this unit throughout. Complete the phrases from the text.' },
          { t: 'ex', kind: 'gap', h: 'Complete the phrases from the article with one word.', items: [
            { q: 'Decades of research ___ wellbeing have produced a widely shared conclusion.', a: ['into'], why: '*research into* a subject.' },
            { q: 'Human beings grow accustomed ___ changes in their circumstances.', a: ['to'], why: '*accustomed to*' },
            { q: 'Poverty and isolation are genuinely detrimental ___ wellbeing.', a: ['to'], why: '*detrimental to*' },
            { q: 'People who value happiness highly may be more prone ___ disappointment.', a: ['to'], why: '*prone to*' },
            { q: 'Protect time for activities that make you lose ___ of the hour.', a: ['track'], why: '*lose track of time*.' },
            { q: 'Above all, refrain ___ measuring your life against an imagined ideal.', a: ['from'], why: '*refrain from* + *-ing*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the words from the article with their meanings.', pairs: [
            ['deflating', 'making you feel less hopeful'],
            ['durable', 'lasting a long time'],
            ['tangible', 'real and easy to see or measure'],
            ['a by-product', 'a result that comes from something else'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Speaking Part 4): the examiner asks you and your partner, “Some people say that money can’t buy happiness. To what extent do you agree?” Choose the best answer.', items: [
            { q: 'Which answer would get the best marks?', o: ['I’d agree up to a point. Once you can pay the bills, more money probably makes less difference than people think. Having said that, for someone struggling to pay rent, it’s hard to argue that money doesn’t matter.', 'Yes, I agree. Money can’t buy happiness.', 'I don’t know. Maybe. It depends on the person, I suppose.'], why: 'A qualified opinion, a reason, the other side and an example.' },
            { q: 'Your partner says, “I think people today are under far more pressure than in the past.” What is the best reply?', o: ['That’s an interesting point. I’d say the pressure is different rather than greater: we’re always reachable now. Would you agree with that?', 'Yes.', 'I want to talk about something else now.'], why: 'It reacts, adds nuance and invites the partner back in.' },
            { q: 'The examiner asks, “Should employers be responsible for their staff’s mental wellbeing?” Which opening is most effective?', o: ['To some extent, yes. Employers can’t solve everything, but they can certainly avoid making things worse, for example by not expecting replies to emails at midnight.', 'Employers. Hmm. Mental wellbeing.', 'No, never, that’s a private matter and the end.'], why: 'It hedges, develops the idea and gives a concrete example.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Speaking Part 4** of C1 Advanced the examiner asks you and your partner broader questions on the theme of Part 3. Examiners listen for developed answers: an opinion, a reason, a qualification such as *up to a point* or *having said that*, and an example. Respond to your partner too, building on what they say rather than waiting for your turn.' },
        ],
        [
          { t: 'text', md: 'Answer the examiner’s question about money and happiness in three or four sentences, then say these model sentences after the tutor.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'I’d agree up to a point, but it depends on your circumstances.' },
            { a: 'Once basic needs are met, more money makes less difference.' },
            { a: 'What matters more is a sense of purpose and good relationships.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'wordform', h: 'Use the word in capitals to form a word that fits the gap.', items: [
      { q: 'It is a ___ held view that sleep and mood are linked.', base: 'WIDE', a: ['widely'], why: '*-ly* adverb before the participle.' },
      { q: 'The residents worst ___ by the floods received help first.', base: 'AFFECT', a: ['affected'], why: 'A reduced relative: *(who were) worst affected*.' },
      { q: 'She has a remarkable ___ to stay calm under pressure.', base: 'ABLE', a: ['ability'], why: '*the ability to*' },
      { q: 'Lack of sleep is ___ to concentration.', base: 'DETRIMENT', a: ['detrimental'], why: 'Adjective: *detrimental to*.' },
    ] },
    { t: 'ex', kind: 'select', h: 'Choose the correct preposition.', items: [
      { q: 'A cluttered desk is not conducive ___ clear thinking.', o: ['to', 'for', 'with'], why: '*conducive to*' },
      { q: 'Please refrain ___ talking during the session.', o: ['from', 'to', 'of'], why: '*refrain from*' },
      { q: 'He has always had an aversion ___ crowds.', o: ['to', 'of', 'from'], why: '*an aversion to*' },
      { q: 'She takes great pride ___ her work.', o: ['in', 'of', 'on'], why: '*pride in*' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
      { q: 'The long hours eventually took their ___ on his health.', a: ['toll'], why: '*take its / their toll on*.' },
      { q: 'Volunteering gave her a sense ___ purpose.', a: ['of'], why: '*a sense of purpose*.' },
      { q: 'After the illness, it took him a year to bounce ___.', a: ['back'], why: '*bounce back*.' },
      { q: 'I need a holiday to recharge my ___.', a: ['batteries'], why: 'The idiom is plural.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Choose the correct noun phrase.', items: [
      { q: 'The survey focused on ___.', o: ['the people most at risk', 'the most at risk people', 'the people at risk most'], why: 'Noun + *most at risk*.' },
      { q: 'He completed ___.', o: ['a twelve-week programme', 'a twelve-weeks programme', 'a twelve weeks programme'], why: 'Number + singular noun with a hyphen.' },
      { q: 'Could ___ come to the front?', o: ['the students involved', 'the involved students', 'the students involving'], why: '*Involved* meaning *taking part* goes after the noun.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'The company is committed to [reduce] stress at work.', a: ['reducing'], why: '*committed to* + *-ing*.' },
      { s: 'Night shifts deprive many nurses [from] sleep.', a: ['of'], why: '*deprive someone of something*.' },
      { s: 'Talking to friends gives me [a peace] of mind.', a: ['peace'], why: '*Peace of mind* is uncountable.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the collocation and its meaning.', pairs: [
      ['take its toll on', 'gradually harm'],
      ['keep things in perspective', 'see how important something really is'],
      ['strike a balance', 'find a healthy middle point'],
      ['at a low ebb', 'at a low point emotionally'],
    ] },
  ],
};
