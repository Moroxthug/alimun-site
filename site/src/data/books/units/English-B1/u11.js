// English B1, unit 11, second edition (docs/LESSONS_PLAN.md, L6). Draft for native-teacher review.
// Each lesson: a full explanation first (the rule in plain words, why, many examples, the usual mistakes, a text that
// uses it), then fewer exercises from controlled to free, one speaking task, and one task in the format of B1 Preliminary.
export const UNIT = {
  id: 'u11',
  title: 'People and relationships',
  goal: 'Describe people’s personalities and feelings, add extra information about people with who and which, talk about relationships with phrasal verbs, and check things with question tags.',
  art: 'dog',
  tags: { skills: ['grammar', 'vocabulary', 'speaking', 'reading'], topics: ['personality', 'ed-ing-adjectives', 'relative-clauses', 'phrasal-verbs', 'question-tags', 'friendship'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'Kind, bossy, easy-going',
      about: 'Describe what people are like, and choose between -ed and -ing adjectives such as bored and boring.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'When we talk about a person’s **personality**, we describe how they usually behave, not how they look. The question is **What is she like?** (not *How is she?*, which asks about health or mood). The answer uses adjectives: *She’s generous and very easy-going.*\n\nMany personality adjectives come in pairs of opposites. Some opposites are a different word (**generous** / **mean**), and some take a prefix: **un-** (*unfriendly, unreliable*), **im-** (*impatient, impolite*), **in-** (*insensitive*), **dis-** (*dishonest*). Learn the prefix together with the word: there is no simple rule.\n\nTo make a description softer, English speakers often use **a bit** or **quite** with negative words: *He can be **a bit** bossy.* To make it stronger, use **really** or **extremely**: *She’s **really** reliable.*' },
          { t: 'table', caption: 'Personality adjectives', explain: ['head', 'col2'], head: ['Adjective', 'Opposite', 'What it means'], rows: [
            ['generous', 'mean', 'happy to give money, time or help'],
            ['reliable', 'unreliable', 'does what they promise'],
            ['patient', 'impatient', 'can wait calmly'],
            ['honest', 'dishonest', 'tells the truth'],
            ['easy-going', 'stressed, uptight', 'relaxed, not easily worried'],
            ['confident', 'shy', 'sure of themselves with other people'],
            ['sensible', 'silly', 'makes good, practical decisions'],
            ['hard-working', 'lazy', 'works a lot and well'],
          ] },
          { t: 'tip', art: 'owl', md: '**Sensible** is a false friend for many learners: it does not mean *sensitive*. A **sensible** person makes good decisions; a **sensitive** person feels things strongly and is easily hurt.' },
        ],
        [
          { t: 'text', md: 'Some adjectives describe feelings, and they come in two forms: **-ed** and **-ing**. The rule is simple once you see it:\n\nThe **-ed** adjective describes **how a person feels**: *I was **bored** in the meeting.* *She’s **interested** in history.*\n\nThe **-ing** adjective describes **the thing or person that causes the feeling**: *The meeting was **boring**.* *History is **interesting**.*\n\nSo a person can be both, with different meanings: *Tom is **bored*** (he feels bored) but *Tom is **boring*** (he makes other people feel bored). This difference is very important, and getting it wrong can be embarrassing!' },
          { t: 'table', caption: '-ed and -ing', explain: ['head'], head: ['How you feel', 'What causes it'], rows: [
            ['bored', 'boring'],
            ['interested', 'interesting'],
            ['tired', 'tiring'],
            ['excited', 'exciting'],
            ['surprised', 'surprising'],
            ['embarrassed', 'embarrassing'],
            ['annoyed', 'annoying'],
            ['confused', 'confusing'],
          ] },
          { t: 'examples', items: [
            { s: 'The film was **boring**, so we were all **bored**.', n: 'The film caused the feeling; we felt it.' },
            { s: 'I’m **confused**. These instructions are really **confusing**.', n: 'I feel it; the instructions cause it.' },
            { s: 'It was **embarrassing** when I forgot her name. I felt so **embarrassed**.', n: 'The situation, then my feeling.' },
            { s: 'My brother is **annoying**: he always borrows my things.', n: 'He causes the feeling in other people.' },
            { s: 'Are you **excited** about the trip?', n: 'A question about your feeling.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I am very boring today.', 'I am very bored today.', 'You feel it: *-ed*. *I am boring* means other people find you dull.'],
            ['How is your new boss?', 'What is your new boss like?', '*What … like?* asks about personality.'],
            ['She is very sensible, she cries at films.', 'She is very sensitive, she cries at films.', '*Sensitive* is about feelings; *sensible* is about good decisions.'],
            ['He is unpatient.', 'He is impatient.', 'The opposite of *patient* takes *im-*.'],
          ] },
          { t: 'dialogue', title: 'The new flatmate', lines: [
            { who: 'Lucy', s: 'So, what’s your new flatmate like?' },
            { who: 'Daniel', s: 'He’s really easy-going, and quite generous. He cooked dinner for everyone on Friday.' },
            { who: 'Lucy', s: 'That sounds amazing! Is he tidy?' },
            { who: 'Daniel', s: 'Not really. He can be a bit lazy about washing up, which is annoying.' },
            { who: 'Lucy', s: 'Well, nobody’s perfect. Are you happy you moved?' },
            { who: 'Daniel', s: 'Yes. I was a bit worried at first, but now I’m really excited about living there.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right adjective.', items: [
            { q: 'The lesson was so ___ that I nearly fell asleep.', o: ['boring', 'bored', 'bore'], why: 'The lesson causes the feeling: *-ing*.' },
            { q: 'We were really ___ when we heard the news.', o: ['surprised', 'surprising', 'surprise'], why: 'People feel it: *-ed*.' },
            { q: 'Walking up the mountain was very ___.', o: ['tiring', 'tired', 'tire'], why: 'The walk causes the feeling: *-ing*.' },
            { q: 'I’m ___ in learning to cook.', o: ['interested', 'interesting', 'interest'], why: 'How you feel about it: *interested in*.' },
            { q: 'It’s ___ when people don’t answer my messages.', o: ['annoying', 'annoyed', 'annoy'], why: 'The situation causes the feeling: *-ing*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match each person with the right adjective.', pairs: [
            ['She always does what she promises.', 'reliable'],
            ['He never shares anything.', 'mean'],
            ['She can wait for hours without complaining.', 'patient'],
            ['He always tells the truth.', 'honest'],
            ['She doesn’t worry about anything.', 'easy-going'],
          ] },
        ],
        [
          { t: 'ex', kind: 'wordform', h: 'Write the right form of the word in capitals.', items: [
            { q: 'Don’t trust him: he’s completely ___.', base: 'reliable', a: ['unreliable'], why: 'The opposite takes *un-*: *unreliable*.' },
            { q: 'Please be ___ with the children. They are only four.', base: 'patient', a: ['patient'], why: 'The meaning is positive here: be *patient*.' },
            { q: 'It was the most ___ day of my life: I fell over on stage.', base: 'embarrass', a: ['embarrassing'], why: 'The day caused the feeling: *embarrassing*.' },
            { q: 'Lying to your friends is ___.', base: 'honest', a: ['dishonest'], why: 'The opposite of *honest* is *dishonest*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of B1 Preliminary, Reading Part 1: what does the message say?', items: [
            { q: '*Message from Kim: The talk was more interesting than I expected, but the room was so hot that I was exhausted by the end.*', o: ['Kim enjoyed the talk but found the conditions tiring.', 'Kim was bored by the talk and left early.', 'Kim thought the talk was too hot to finish.'], why: '*More interesting than I expected* = she liked it; the heat made her *exhausted*.' },
            { q: '*Notice: Volunteers needed! We are looking for patient, reliable people to help children with their reading.*', o: ['The volunteers must be calm and keep their promises.', 'The volunteers must be good at reading fast.', 'Children who are patient can join the reading club.'], why: '*Patient* = calm; *reliable* = does what they promise.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Reading Part 1** you read five short texts (messages, notices, emails) and choose the option that means the same. The right option usually uses **different words** with the same meaning: here *exhausted* becomes *tiring*. Be careful with options that repeat a word from the text but change the meaning.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Your turn: say these sentences after the tutor.', tutor: 'sofia', items: [
            { a: 'What is your best friend like?' },
            { a: 'She is generous and really easy-going.' },
            { a: 'The film was boring, so I was bored.' },
            { a: 'He can be a bit impatient sometimes.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'My sister, who lives in Rome',
      about: 'Add extra information about a person or a thing with non-defining relative clauses.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'In unit 7 you learned **defining** relative clauses. They tell us **which** person or thing we mean, and the sentence does not work without them: *The man **who lives next door** is a doctor.* (Which man? The one next door.)\n\nA **non-defining** relative clause is different. It adds **extra information** about someone or something we already know. If you remove it, the sentence still makes complete sense: *My sister, **who lives in Rome**, is a doctor.* I have only one sister, so I don’t need to say which one; *who lives in Rome* is just extra information.\n\nThree rules make non-defining clauses easy to recognise:\n\nThey always have **commas** around them (or a comma and a full stop at the end).\n\nUse **who** for people and **which** for things. **Never use *that*** in a non-defining clause.\n\nYou **cannot leave out** *who* or *which*.' },
          { t: 'table', caption: 'Defining or non-defining?', explain: ['head', 'col0'], head: ['', 'Example', 'Commas?'], rows: [
            ['Defining: which one?', 'The book that you lent me was great.', 'no'],
            ['Non-defining: extra information', 'This book, which my aunt gave me, is great.', 'yes'],
            ['Defining: which person?', 'The student who sits by the window is new.', 'no'],
            ['Non-defining: extra information', 'Mr Patel, who teaches maths, is retiring.', 'yes'],
          ] },
          { t: 'tip', art: 'owl', md: 'Names usually need a **non-defining** clause, because a name already tells us who we mean: *Paris, **which** is the capital of France, …* and *Tom, **who** I met at university, …*. With a name, *that* is always wrong.' },
        ],
        [
          { t: 'text', md: 'Non-defining clauses can also use **whose** (for possession) and **where** (for places):\n\n*My neighbour, **whose** dog barks all night, has finally moved.*\n\n*We stayed in Granada, **where** my grandparents grew up.*\n\nThere is one more useful pattern: **which** can refer to the **whole idea** of the sentence before, not just one noun. *She didn’t call me back, **which** was strange.* (The fact that she didn’t call was strange.) This is very common in speaking, especially to give your opinion.' },
          { t: 'examples', items: [
            { s: 'My grandfather, **who** is ninety, still swims every day.', n: 'Extra information about a person: *who*.' },
            { s: 'The new café, **which** opened last week, is always full.', n: 'Extra information about a thing: *which*.' },
            { s: 'Ana, **whose** brother plays for Barcelona, gets free tickets.', n: 'Possession: *whose*.' },
            { s: 'We visited Porto, **where** they make port wine.', n: 'A place: *where*.' },
            { s: 'The train was cancelled, **which** meant we were late.', n: '*Which* refers to the whole first sentence.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['My father, that is a teacher, …', 'My father, who is a teacher, …', 'Never *that* in a non-defining clause.'],
            ['London which is very big is …', 'London, which is very big, is …', 'Non-defining clauses need commas.'],
            ['My cousin, lives in Lima, …', 'My cousin, who lives in Lima, …', 'You cannot leave out *who* here.'],
            ['He was late again, what annoyed me.', 'He was late again, which annoyed me.', 'For the whole idea, use *which*, not *what*.'],
          ] },
          { t: 'reading', title: 'Our team', md: 'Let me introduce the people in our small office. Marta, who started the company ten years ago, is the best boss I’ve ever had. She’s patient and always fair.\n\nThen there’s Sam, whose jokes are terrible but who always makes us laugh. He sits next to the window, which is the best desk in the office.\n\nFinally, there’s Leila, who joined us last spring. She speaks four languages, which is very useful because we work with clients all over Europe. We all get on really well, which makes going to work a pleasure.' },
          { t: 'ex', kind: 'tf', h: 'Read the text. True or false?', items: [
            { q: 'Marta started the company.', a: 't', why: '*Marta, who started the company ten years ago…*' },
            { q: 'Sam’s jokes are very good.', a: 'f', why: '*whose jokes are terrible*' },
            { q: 'Leila has worked there for more than ten years.', a: 'f', why: 'She *joined us last spring*.' },
            { q: 'The writer enjoys going to work.', a: 't', why: '*which makes going to work a pleasure*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'My best friend, ___ lives in Canada, is visiting next week.', o: ['who', 'that', 'which'], why: 'A person in a non-defining clause: *who* (never *that*).' },
            { q: 'Our car, ___ is fifteen years old, still works perfectly.', o: ['which', 'who', 'that'], why: 'A thing in a non-defining clause: *which*.' },
            { q: 'Jamie, ___ mother is a famous singer, is very shy.', o: ['whose', 'who', 'which'], why: 'Possession: *whose mother*.' },
            { q: 'We went to Lisbon, ___ we ate the best fish ever.', o: ['where', 'which', 'who'], why: 'A place followed by a full clause: *where*.' },
            { q: 'The shop was closed, ___ was really annoying.', o: ['which', 'what', 'that'], why: '*Which* refers to the whole idea.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'My brother, [that] works in a bank, is getting married.', a: ['who'], why: 'Never *that* in a non-defining clause: *who*.' },
            { s: 'I lost my phone, [what] was a disaster.', a: ['which'], why: 'For the whole idea, use *which*.' },
            { s: 'Rome, [who] is my favourite city, is very hot in summer.', a: ['which'], why: 'A city is a thing: *which*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Join the two sentences with who, which, whose or where.', items: [
            { q: 'My aunt is a pilot. She lives in Dubai.', cue: 'My aunt, who', a: ['My aunt, who lives in Dubai, is a pilot.', 'My aunt, who is a pilot, lives in Dubai.'], why: 'Put the extra information inside commas with *who*.' },
            { q: 'This bike is very fast. I bought it last week.', cue: 'This bike, which', a: ['This bike, which I bought last week, is very fast.'], why: 'A thing: *which*, with commas.' },
            { q: 'We stayed in Bath. My parents met there.', cue: 'We stayed in Bath, where', a: ['We stayed in Bath, where my parents met.'], why: 'A place: *where* replaces *there*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'In the format of B1 Preliminary, Reading Part 6: write one word in each gap.', items: [
            { q: 'My grandmother, ___ is eighty-five, still runs her own shop.', a: ['who'], why: 'A person, extra information: *who*.' },
            { q: 'The shop, ___ she opened in 1975, sells books and toys.', a: ['which'], why: 'A thing, extra information: *which*.' },
            { q: 'She knows everybody in the village, ___ is not surprising.', a: ['which'], why: '*Which* refers to the whole idea.' },
            { q: 'Her best customer is Mr Ford, ___ children she taught to read.', a: ['whose'], why: 'Possession: *whose children*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Reading Part 6** you write **one word** in each of six gaps in a short text. The missing words are usually small grammar words: relative pronouns (*who, which, whose*), prepositions, auxiliaries (*have, was*), articles. Read the whole sentence, including what comes **after** the gap, before you decide.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor. Pause a little at each comma.', tutor: 'kofi', items: [
            { a: 'My sister, who lives in Rome, is a doctor.' },
            { a: 'Our car, which is very old, still works.' },
            { a: 'He forgot my birthday, which was a bit sad.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'Get on, fall out, make up',
      about: 'Talk about friendships and relationships with phrasal verbs.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'A **phrasal verb** is a verb with a small word like **on, up, out, with** after it. Together they have a new meaning, often very different from the verb alone: **get on with** someone does not mean to get anything; it means to have a good relationship.\n\nEnglish speakers use phrasal verbs all the time to talk about people and relationships, especially in conversation. Learning them as whole phrases, with an example, is the best way to remember them.\n\nSome phrasal verbs have **three parts** (verb + two small words). Keep all three together, and the person comes at the end: *I **get on with** my sister.* *I **look up to** my grandfather.*' },
          { t: 'table', caption: 'Phrasal verbs for relationships', explain: ['head', 'col1'], head: ['Phrasal verb', 'Meaning', 'Example'], rows: [
            ['get on (well) with someone', 'have a good relationship', 'I get on well with my colleagues.'],
            ['fall out with someone', 'argue and stop being friends', 'She fell out with her best friend.'],
            ['make up (with someone)', 'become friends again', 'They argued, but they made up the next day.'],
            ['look up to someone', 'admire and respect', 'I’ve always looked up to my older brother.'],
            ['look after someone', 'take care of', 'He looks after his little sister after school.'],
            ['bring someone up', 'raise a child', 'My grandparents brought me up.'],
            ['go out with someone', 'have a romantic relationship', 'How long has Ben been going out with Sara?'],
            ['split up (with someone)', 'end a romantic relationship', 'They split up after five years.'],
          ] },
        ],
        [
          { t: 'text', md: 'Phrasal verbs change like any verb: *I **fell out** with him last year* (past of *fall*), *They’ve **split up*** (present perfect). Only the first word changes.\n\nThere are two kinds of position for the person or thing:\n\nWith most **three-part** verbs and with *look after*, *look up to*, *get on with*, the person always comes **after** the whole verb: *She looks after **her mum**.*\n\nWith **bring up**, the person can go in the middle or at the end: *They **brought me up*** / *They **brought up** three children.* When the object is a pronoun (*me, him, them*), it **must** go in the middle: *brought **them** up*, not *brought up them*.' },
          { t: 'examples', items: [
            { s: 'Do you **get on with** your neighbours?', n: 'Have a good relationship: question form.' },
            { s: 'We **fell out** over money, which was silly.', n: 'Past of *fall out*; the reason after *over*.' },
            { s: 'After a week they **made up** and went for dinner.', n: 'Became friends again.' },
            { s: 'My aunt **brought me up** after my parents moved abroad.', n: 'A pronoun goes in the middle.' },
            { s: 'Everyone **looks up to** her: she’s so brave.', n: 'Admire.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I get on my sister.', 'I get on with my sister.', 'You need all three words: *get on with*.'],
            ['They brought up me.', 'They brought me up.', 'A pronoun goes between the verb and *up*.'],
            ['She falled out with him.', 'She fell out with him.', '*Fall* is irregular: *fell*.'],
            ['I look up my teacher.', 'I look up to my teacher.', '*Look up to* = admire; *look up* = search for information.'],
          ] },
          { t: 'dialogue', title: 'Talking about family', lines: [
            { who: 'Priya', s: 'Do you get on with your brother?' },
            { who: 'Owen', s: 'Mostly. We fell out last year about a car, but we made up quickly.' },
            { who: 'Priya', s: 'What happened?' },
            { who: 'Owen', s: 'He borrowed it and didn’t look after it. But I’ve always looked up to him, so I forgave him.' },
            { who: 'Priya', s: 'That’s nice. I was brought up by my grandmother, so she’s the person I look up to.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'bank', h: 'Complete the sentences with the words in the bank.', extra: ['up to', 'out with'], items: [
            { q: 'I really get on ___ my new colleagues.', a: 'well with', why: '*Get on well with* someone.' },
            { q: 'After the argument, it took them a week to make ___.', a: 'up', why: '*Make up* = become friends again.' },
            { q: 'Who looks ___ your dog when you travel?', a: 'after', why: '*Look after* = take care of.' },
            { q: 'Tom and Kate went ___ together for two years.', a: 'out', why: '*Go out (with someone)* = have a romantic relationship.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'My grandparents brought me up in Seville.', why: 'A pronoun goes between *brought* and *up*.' },
            { a: 'Have you ever fallen out with a friend?', why: 'Present perfect question: *have* + subject + *ever* + past participle.' },
            { a: 'Everyone in the team looks up to her.', why: 'The person comes after *look up to*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'In the format of B1 Preliminary, Reading Part 5: choose the right word for each gap.', items: [
            { q: 'My cousin and I have always got on very well ___ each other.', o: ['with', 'to', 'for'], why: '*Get on well with*.' },
            { q: 'Last summer we had a big argument and ___ out for a few weeks.', o: ['fell', 'went', 'got'], why: '*Fall out* = argue and stop being friends.' },
            { q: 'Luckily, we soon ___ up, and now we’re closer than ever.', o: ['made', 'did', 'took'], why: '*Make up* = become friends again.' },
            { q: 'She is two years older, and I have always looked up ___ her.', o: ['to', 'at', 'for'], why: '*Look up to* = admire.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Reading Part 5** you choose the right word for six gaps from four options. Many questions test **words that go together**: the right preposition after a verb (*get on **with***), or the right verb in a phrase (***make** up*). If two options seem possible, look at the word right after the gap.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'omar', items: [
            { a: 'I get on really well with my brother.' },
            { a: 'We fell out, but we made up the next day.' },
            { a: 'I have always looked up to my grandmother.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'Friends for fifty years, aren’t they?',
      about: 'Check information and keep a conversation going with question tags, and read about a long friendship.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'A **question tag** is a short question at the end of a sentence: *It’s cold today, **isn’t it**?* We use tags to check something we think is true, or simply to invite the other person to talk. They make conversation friendlier.\n\nThe rule: a **positive** sentence takes a **negative** tag, and a **negative** sentence takes a **positive** tag.\n\nTo build the tag, use the **auxiliary** verb from the sentence (*be, have, can, will…*) and a **pronoun**: *You **can** swim, **can’t you**?* *She **hasn’t** called, **has she**?*\n\nIf there is no auxiliary (present simple or past simple), use **do, does** or **did**: *You **live** near here, **don’t you**?* *He **went** home, **didn’t he**?*' },
          { t: 'table', caption: 'Making question tags', explain: ['head'], head: ['Sentence', 'Tag'], rows: [
            ['You’re Spanish,', 'aren’t you?'],
            ['She isn’t coming,', 'is she?'],
            ['They’ve finished,', 'haven’t they?'],
            ['You can drive,', 'can’t you?'],
            ['He works here,', 'doesn’t he?'],
            ['You didn’t forget,', 'did you?'],
            ['It will be fine,', 'won’t it?'],
            ['I’m late,', 'aren’t I?'],
          ] },
          { t: 'tip', art: 'owl', md: 'The tag for **I am** is **aren’t I?**, not *amn’t I?*: *I’m right, aren’t I?* And the **intonation** matters: if your voice goes **down**, you are almost sure and just want agreement; if it goes **up**, it is a real question.' },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['You live here, isn’t it?', 'You live here, don’t you?', 'Use the right auxiliary: *do* for present simple.'],
            ['She is nice, is she?', 'She is nice, isn’t she?', 'A positive sentence takes a negative tag.'],
            ['He went out, wasn’t he?', 'He went out, didn’t he?', 'Past simple: *did*.'],
            ['Your mum is a nurse, isn’t your mum?', 'Your mum is a nurse, isn’t she?', 'The tag uses a pronoun.'],
          ] },
          { t: 'reading', title: 'Fifty years of friendship', md: 'Rosa and Brigid met on their first day at primary school in Dublin in 1974. Rosa, whose family had just arrived from Spain, couldn’t speak a word of English. Brigid, who was very confident even at six, decided to look after her.\n\nThey have been best friends ever since. They went to the same secondary school, shared a flat at university and were bridesmaids at each other’s weddings. They have only fallen out once, when they were sixteen, over a boy. “We made up in two days,” laughs Brigid. “The boy wasn’t worth it, was he, Rosa?”\n\nToday Rosa lives in Madrid, which is two hours away by plane, but they talk every Sunday. “People ask us what the secret is,” says Rosa. “I think it’s simple. We’re honest with each other, and we never stop being interested in each other’s lives.”' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of B1 Preliminary, Reading Part 3: read the text and choose the right answer.', items: [
            { q: 'Why did Brigid decide to look after Rosa?', o: ['Rosa couldn’t speak English when she arrived.', 'Rosa’s family asked her to.', 'Rosa was older than the other children.'], why: '*Rosa… couldn’t speak a word of English. Brigid… decided to look after her.*' },
            { q: 'What happened when they were sixteen?', o: ['They had an argument but became friends again quickly.', 'They stopped talking for two years.', 'They both went out with the same boy for years.'], why: '*They have only fallen out once… We made up in two days.*' },
            { q: 'What does Rosa think is the secret of their friendship?', o: ['Being honest and staying interested in each other.', 'Living close to each other.', 'Speaking the same language.'], why: '*We’re honest with each other, and we never stop being interested…*' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right question tag.', items: [
            { q: 'You’ve met my brother, ___?', o: ['haven’t you', 'didn’t you', 'aren’t you'], why: 'Present perfect *have*: tag *haven’t you*.' },
            { q: 'She doesn’t eat meat, ___?', o: ['does she', 'doesn’t she', 'is she'], why: 'Negative sentence, *does*: positive tag *does she*.' },
            { q: 'They went to the same school, ___?', o: ['didn’t they', 'weren’t they', 'don’t they'], why: 'Past simple: *didn’t they*.' },
            { q: 'I’m invited, ___?', o: ['aren’t I', 'amn’t I', 'isn’t it'], why: 'The tag for *I am* is *aren’t I*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Reading Part 3** there is one longer text and five multiple-choice questions, in the same order as the text. The questions often ask about **reasons and opinions** (*Why…? What does she think…?*), so read the sentences around the answer carefully, not just one word.' },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the question tag.', items: [
            { q: 'You can swim, ___?', a: ['can’t you', 'can\'t you'], why: '*Can* in the sentence: tag *can’t you*.' },
            { q: 'It wasn’t very expensive, ___?', a: ['was it'], why: 'Negative *wasn’t*: positive tag *was it*.' },
            { q: 'Your parents live in Leeds, ___?', a: ['don’t they', 'don\'t they'], why: 'Present simple with *they*: *don’t they*.' },
            { q: 'Sam will help us, ___?', a: ['won’t he', 'won\'t he'], why: '*Will*: tag *won’t he*.' },
          ] },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor. Let your voice go down on the tag.', tutor: 'arthur', items: [
            { a: 'It is a lovely day, isn’t it?' },
            { a: 'You have met Rosa, haven’t you?' },
            { a: 'They have been friends for years, haven’t they?' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
      { q: 'The journey was long and very ___.', o: ['tiring', 'tired', 'tire'], why: 'The journey causes the feeling: *-ing*.' },
      { q: 'I felt ___ when I called my teacher “Mum”.', o: ['embarrassed', 'embarrassing', 'embarrass'], why: 'How you feel: *-ed*.' },
      { q: 'My uncle, ___ is a chef, cooked for us.', o: ['who', 'that', 'which'], why: 'Non-defining, a person: *who*.' },
      { q: 'We met in Krakow, ___ my wife grew up.', o: ['where', 'who', 'whose'], why: 'A place followed by a full clause: *where*.' },
      { q: 'You don’t like coffee, ___?', o: ['do you', 'don’t you', 'are you'], why: 'Negative sentence: positive tag *do you*.' },
    ] },
    { t: 'ex', kind: 'wordform', h: 'Write the right form of the word in capitals.', items: [
      { q: 'She never keeps her promises. She’s very ___.', base: 'reliable', a: ['unreliable'], why: '*Unreliable* = does not do what they promise.' },
      { q: 'He can’t wait for anything. He’s so ___.', base: 'patient', a: ['impatient'], why: 'The opposite takes *im-*.' },
      { q: 'The ending of the film was really ___.', base: 'surprise', a: ['surprising'], why: 'The ending causes the feeling: *-ing*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'My best friend, [that] is from Peru, speaks three languages.', a: ['who'], why: 'Never *that* in a non-defining clause.' },
      { s: 'I get on [well my] sister.', a: ['well with my'], why: '*Get on well with* someone.' },
      { s: 'They brought [up me] in a small village.', a: ['me up'], why: 'A pronoun goes in the middle: *brought me up*.' },
      { s: 'He works with you, [isn’t he]?', a: ['doesn’t he', 'doesn\'t he'], why: 'Present simple: tag with *does*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the phrasal verbs and their meanings.', pairs: [
      ['look up to', 'admire'],
      ['fall out with', 'argue with'],
      ['make up', 'become friends again'],
      ['look after', 'take care of'],
      ['split up', 'end a relationship'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Join the sentences with a non-defining relative clause.', items: [
      { q: 'Our teacher is from Wales. She is very patient.', cue: 'Our teacher, who', a: ['Our teacher, who is from Wales, is very patient.', 'Our teacher, who is very patient, is from Wales.'], why: 'Extra information about a person: *who*, with commas.' },
      { q: 'The party was cancelled. This was a pity.', cue: 'The party was cancelled, which', a: ['The party was cancelled, which was a pity.'], why: '*Which* refers to the whole idea.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
      { q: 'I’ve always looked up ___ my older sister.', a: ['to'], why: '*Look up to* = admire.' },
      { q: 'Ken, ___ car was stolen, is going to the police.', a: ['whose'], why: 'Possession: *whose car*.' },
      { q: 'What is your new manager ___?', a: ['like'], why: '*What … like?* asks about personality.' },
    ] },
  ],
};
