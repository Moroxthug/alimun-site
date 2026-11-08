// English B1, unit 10, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Technology: the zero conditional, gerunds as subjects and after prepositions, phrasal verbs for technology, and a reading.
export const UNIT = {
  id: 'u10',
  title: 'Technology in our lives',
  goal: 'Explain how things work, talk about what you are good at and interested in, use common technology phrasal verbs and discuss screen time.',
  art: 'alien',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing', 'speaking'], topics: ['zero-conditional', 'gerunds', 'phrasal-verbs', 'technology', 'screen-time'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'If you press this, it turns off',
      about: 'Use the zero conditional for facts, rules and how things work.',
      art: 'alien',
      spreads: [
        [
          { t: 'text', md: 'You already know the **first conditional** for a possible future: *If it rains tomorrow, I’ll stay at home.* The **zero conditional** is for things that are **always true**: facts, rules, habits and how machines work.\n\nThe form is simple: **If + present simple, present simple**. *If you **heat** ice, it **melts**. If I **drink** coffee after six, I **don’t sleep**.*\n\nIn the zero conditional, **if** means the same as **when** or **every time**: *If / When you **press** this button, the screen **turns** off.* There is no *will*, because we are not talking about one future moment.' },
          { t: 'table', caption: 'Zero or first conditional?', explain: ['head', 'col0'], head: ['Use', 'Form', 'Example'], rows: [
            ['always true: facts, how things work', 'if + present, present', 'If the battery is low, the light goes red.'],
            ['one possible future situation', 'if + present, will', 'If the battery is low tonight, I’ll charge it.'],
          ] },
          { t: 'tip', art: 'owl', md: 'You can put the **if** part second. Then there is no comma: *The light goes red **if** the battery is low.*' },
        ],
        [
          { t: 'text', md: 'The zero conditional is perfect for **instructions** and **explaining technology**. Notice the imperative in the main clause for advice: *If your laptop **freezes**, **restart** it.*\n\nUseful verbs: *press, click, tap, swipe, charge, connect, download, update, restart, freeze, crash*.\n\nFor negatives, use *don’t / doesn’t* in either part: *If you **don’t save** your work, you **lose** it. My phone **doesn’t work** if it **gets** wet.*' },
          { t: 'examples', items: [
            { s: 'If you **tap** the screen twice, the photo **gets** bigger.', n: 'How a phone works.' },
            { s: 'When the battery **dies**, the phone **switches** itself off.', n: '*When* = every time.' },
            { s: 'If your computer **crashes**, **restart** it.', n: 'Imperative for advice.' },
            { s: 'I **get** a headache if I **look** at a screen for too long.', n: 'A personal fact, *if* second.' },
            { s: 'If you **don’t update** the app, it **doesn’t work** properly.', n: 'Negatives in both parts.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['If you heat ice, it will melt.', 'If you heat ice, it melts.', 'A fact: present in both parts.'],
            ['If you will press here, it opens.', 'If you press here, it opens.', 'Never *will* after *if*.'],
            ['If it rain, the match stops.', 'If it rains, the match stops.', '*it* takes *-s* in the present.'],
            ['My phone don’t work if it’s cold.', 'My phone doesn’t work if it’s cold.', '*phone* = *it*: *doesn’t*.'],
          ] },
          { t: 'dialogue', title: 'The new printer', lines: [
            { who: 'Mia', s: 'Can you help me? This printer never works.' },
            { who: 'Tom', s: 'Let’s see. If the orange light is on, it means there’s no paper.' },
            { who: 'Mia', s: 'There’s paper. Look.' },
            { who: 'Tom', s: 'OK. If you connect it to the wifi first, it usually prints from your phone.' },
            { who: 'Mia', s: 'How do I do that?' },
            { who: 'Tom', s: 'You press this button for five seconds. When it beeps, it’s ready.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
            { q: 'If you ___ water to 100 degrees, it boils.', o: ['heat', 'will heat', 'heated'], why: 'A fact: present simple after *if*.' },
            { q: 'If the screen goes black, ___ the power button.', o: ['press', 'you will press', 'pressed'], why: 'Advice: imperative.' },
            { q: 'My laptop ___ if I open too many tabs.', o: ['slows down', 'will slow down', 'slow down'], why: 'A fact about my laptop: present simple with *-s*.' },
            { q: 'If it rains tomorrow, I ___ my umbrella.', o: ['’ll take', 'take', 'took'], why: 'One future situation: first conditional.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the two halves.', pairs: [
            ['If you don’t charge your phone,', 'the battery runs out.'],
            ['If an app freezes,', 'close it and open it again.'],
            ['If you forget your password,', 'you can reset it by email.'],
            ['If I drink coffee late,', 'I don’t sleep well.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Write one sentence with “if” in the zero conditional.', items: [
            { q: 'Every time I use this app, my phone gets hot.', cue: 'If', a: ['If I use this app, my phone gets hot.'], why: 'Every time = zero conditional: present + present.' },
            { q: 'Every time you click this link, a new window opens.', cue: 'If', a: ['If you click this link, a new window opens.'], why: 'How it works: present + present.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam (Reading part 1): read the notice and choose what it says.', items: [
            { q: 'Library computers: If the screen freezes, do not switch off. Ask a member of staff.', o: ['Staff will help if a computer stops working.', 'You must switch off the computer when you finish.', 'Computers freeze if you use them for too long.'], why: 'If it freezes, *ask a member of staff*.' },
            { q: 'Phone shop: Repairs are free if your phone is less than a year old.', o: ['You don’t pay to repair a new phone.', 'All repairs cost nothing.', 'You can buy a phone for free.'], why: 'Free only *if* the phone is less than a year old.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Reading part 1 has five short texts: notices, messages, labels. Each one has a **condition** or a **rule**. Look for words like *if, unless, only, must*: the wrong answers often ignore the condition.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'kofi', items: [
            { a: 'If you press this button, the screen turns off.' },
            { a: 'If your computer crashes, restart it.' },
            { a: 'I get a headache if I look at a screen for too long.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'Good at fixing, tired of waiting',
      about: 'Use the -ing form as the subject of a sentence and after prepositions.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'At A2 and in unit 2 you learned that some verbs take **-ing** after them: *enjoy reading, stop working*. The **-ing form** (also called the **gerund**) works like a noun, so you can use it in two more important places.\n\nFirst, as the **subject** of a sentence: ***Learning** a language **takes** time. **Using** your phone in bed **is** bad for your sleep.* The verb after it is singular.\n\nSecond, after **prepositions**: *in, at, of, about, for, without, before, after, by*. A preposition is always followed by a noun or an **-ing** form, never by the base verb or *to*: *I’m interested **in learning** to code*, not *in learn*.' },
          { t: 'table', caption: 'Common adjective + preposition + -ing', explain: ['head'], head: ['Phrase', 'Example'], rows: [
            ['good at', 'She’s good at fixing computers.'],
            ['interested in', 'I’m interested in making videos.'],
            ['tired of', 'We’re tired of waiting for the update.'],
            ['afraid of', 'He’s afraid of losing his data.'],
            ['worried about', 'They’re worried about spending too much time online.'],
            ['bad at', 'I’m bad at remembering passwords.'],
          ] },
        ],
        [
          { t: 'text', md: 'Verbs with prepositions also take **-ing**: *think about **buying**, look forward to **seeing**, succeed in **finding**, apologise for **being** late*.\n\nBe careful with **look forward to**: here *to* is a preposition, so it takes **-ing**: *I look forward to **hearing** from you.*\n\nShort words that explain how or when also take **-ing**: *without **asking**, before **leaving**, after **finishing**, by **clicking***. **By + -ing** explains how you do something: *You can save the file **by pressing** Ctrl and S.*' },
          { t: 'examples', items: [
            { s: '**Watching** videos is my favourite way to relax.', n: '-ing as the subject, singular verb.' },
            { s: 'I’m thinking **about buying** a new laptop.', n: 'Verb + preposition + -ing.' },
            { s: 'She left **without saying** goodbye.', n: '*without* + -ing.' },
            { s: 'You can join the meeting **by clicking** this link.', n: '*by* + -ing: how.' },
            { s: 'I look forward **to meeting** you.', n: '*to* is a preposition here.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I’m interested in learn coding.', 'I’m interested in learning coding.', 'After a preposition: -ing.'],
            ['Use social media are fun.', 'Using social media is fun.', 'Subject -ing, singular verb.'],
            ['I look forward to see you.', 'I look forward to seeing you.', '*to* here is a preposition.'],
            ['She left without to say goodbye.', 'She left without saying goodbye.', '*without* + -ing.'],
          ] },
          { t: 'reading', title: 'Ask the expert', md: 'Dear Alex,\n\nI’m worried about spending too much money on technology. My children are always asking for new phones, and I’m tired of buying gadgets that we don’t really need. Do you have any advice?\n\nPaula\n\nDear Paula,\n\nYou’re not alone! Buying a new phone every year is very expensive. Before agreeing to buy something, ask your children to explain why they need it. Keeping a phone for three or four years is perfectly normal, and you can save money by repairing old devices instead of replacing them. Good luck!\n\nAlex' },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Read “Ask the expert”. Are the sentences true or false?', items: [
            { q: 'Paula is worried about spending too much.', a: 't', why: '*I’m worried about spending too much money.*' },
            { q: 'Alex thinks buying a new phone every year is cheap.', a: 'f', why: 'He says it is *very expensive*.' },
            { q: 'Alex suggests repairing old devices.', a: 't', why: '*by repairing old devices*' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the -ing form.', items: [
            { q: 'I’m not very good at ___ (take) photos.', a: ['taking'], why: '*good at* + -ing.' },
            { q: '___ (read) on a screen makes my eyes tired.', a: ['Reading'], why: '-ing as the subject.' },
            { q: 'Thank you for ___ (help) me with my computer.', a: ['helping'], why: '*for* + -ing.' },
            { q: 'He fixed the problem by ___ (restart) the router.', a: ['restarting'], why: '*by* + -ing: how.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'I’m tired of [wait] for this website to load.', a: ['waiting'], why: '*tired of* + -ing.' },
            { s: '[Learn] new apps is easy for children.', a: ['Learning'], why: 'Subject: -ing.' },
            { s: 'We look forward to [hear] from you.', a: ['hearing'], why: '*look forward to* + -ing.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam (Reading part 6): choose the word that fills each gap.', items: [
            { q: 'Many people are interested ___ learning how to build their own website.', o: ['in', 'on', 'at'], why: '*interested in*.' },
            { q: 'You can make the text bigger ___ pressing these two keys.', o: ['by', 'with', 'for'], why: '*by* + -ing for how.' },
            { q: 'Don’t leave the room ___ saving your work.', o: ['without', 'except', 'unless'], why: '*without* + -ing.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Reading part 6 is a text with six gaps and **no options**: you write one word in each gap. Prepositions are very common answers. When you see an -ing form right after the gap, the missing word is often a preposition: *in, at, of, by, without*.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'lena', items: [
            { a: 'I’m interested in making videos.' },
            { a: 'Using your phone in bed is bad for your sleep.' },
            { a: 'I look forward to hearing from you.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'Log in, back up, run out',
      about: 'Use common phrasal verbs for technology, and put the object in the right place.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'A **phrasal verb** is a verb + a small word like *on, off, up, in, out, down*. Together they have a new meaning, and English speakers use them all the time, especially when they talk about technology.\n\n*Turn on / switch on* the computer, *turn off / switch off* the light, *log in* to your account, *log out* when you finish, *set up* a new phone, *back up* your photos (make a copy), *plug in* the charger, *run out of* battery or space, *shut down* the laptop, *look up* a word online.' },
          { t: 'table', caption: 'Technology phrasal verbs', explain: ['head', 'col1'], head: ['Phrasal verb', 'Meaning'], rows: [
            ['turn on / turn off', 'start / stop a machine or light'],
            ['log in / log out', 'enter / leave an account'],
            ['set up', 'prepare something new so it works'],
            ['back up', 'make a copy of your files'],
            ['plug in', 'connect to electricity'],
            ['run out of', 'have no more of something'],
            ['look up', 'find information in a dictionary or online'],
            ['shut down', 'turn off a computer completely'],
          ] },
        ],
        [
          { t: 'text', md: 'Where does the **object** go? With most of these verbs, a noun can go **after** the phrasal verb or **between** the two parts: *Turn **the TV** off. / Turn off **the TV**.*\n\nBut a **pronoun** (*it, them, him, her*) must go **between** the two parts: *Turn **it** off*, never *Turn off it*. *I backed **them** up yesterday.*\n\nSome phrasal verbs have no object at all: *I always **log out** before I leave.* And **run out of** has three parts, with the object at the end: *We’ve **run out of** paper.*' },
          { t: 'examples', items: [
            { s: 'Can you **turn the music down**? / **turn down the music**?', n: 'A noun can go in either place.' },
            { s: 'Your phone is ringing. **Switch it off**, please.', n: 'A pronoun goes in the middle.' },
            { s: 'Don’t forget to **back up** your files.', n: 'Make a copy.' },
            { s: 'I don’t know this word. I’ll **look it up**.', n: 'Find information; pronoun in the middle.' },
            { s: 'My phone has **run out of** battery.', n: 'Three parts; object at the end.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['Turn off it, please.', 'Turn it off, please.', 'A pronoun goes in the middle.'],
            ['I ran out battery.', 'I ran out of battery.', '*run out of* has three parts.'],
            ['I logged in my account.', 'I logged in to my account.', 'Add *to* before the account.'],
            ['Can you open the TV?', 'Can you turn on the TV?', 'Machines: *turn on*, not *open*.'],
          ] },
          { t: 'dialogue', title: 'A new phone', lines: [
            { who: 'Sam', s: 'I’ve just bought a new phone, but I don’t know how to set it up.' },
            { who: 'Lucy', s: 'First, plug it in. The battery is probably low.' },
            { who: 'Sam', s: 'OK. Now what?' },
            { who: 'Lucy', s: 'Turn it on and log in to your account. Did you back up your old phone?' },
            { who: 'Sam', s: 'Yes, I backed it up last night.' },
            { who: 'Lucy', s: 'Great. Then all your photos will come back. Just don’t run out of space!' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right phrasal verb.', items: [
            { q: 'I always ___ before I close the browser on a shared computer.', o: ['log out', 'look up', 'plug in'], why: 'Leave an account: *log out*.' },
            { q: 'We’ve ___ milk. Can you buy some?', o: ['run out of', 'set up', 'backed up'], why: 'Have no more: *run out of*.' },
            { q: 'Can you help me ___ the new printer?', o: ['set up', 'run out', 'log out'], why: 'Prepare something new: *set up*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Please turn it off before you leave.', why: 'A pronoun goes between *turn* and *off*.' },
            { a: 'I looked it up in the dictionary.', why: 'Pronoun in the middle of *look up*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'This is my old laptop. I want to [switch off it].', a: ['switch it off'], why: 'Pronoun in the middle.' },
            { s: 'My phone has run [out] battery again.', a: ['out of'], why: '*run out of*.' },
            { s: 'Can you [open] the computer for me?', a: ['turn on', 'switch on'], why: 'Machines: *turn on*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam (Reading part 5): choose the word that best fits each gap.', items: [
            { q: 'Before you start the online test, please log ___ with your student number.', o: ['in', 'on', 'up'], why: '*log in* to an account.' },
            { q: 'Remember to back ___ your work every evening.', o: ['up', 'out', 'off'], why: '*back up* = make a copy.' },
            { q: 'If the battery runs ___, plug the laptop in.', o: ['out', 'off', 'down'], why: '*run out* = have no more.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Reading part 5, phrasal verbs often appear with the small word missing. Read the meaning of the whole sentence and choose the particle: *log **in***, *back **up***, *run **out***.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'Turn it off, please.' },
            { a: 'Don’t forget to back up your files.' },
            { a: 'My phone has run out of battery.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'How much screen time is too much?',
      about: 'Read an article about screen time, understand opinions and give your own.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'In this lesson you read a longer article and practise the B1 skill of understanding **opinions**: what people think, and why. Look for opinion words: *I think, in my opinion, I believe, I’m not sure, I don’t agree, the problem is, on the other hand*.\n\nTo give your own opinion, use the grammar from this unit: *If I use my phone before bed, I don’t sleep well* (zero conditional). ***Spending** time outside is important* (-ing as subject). *I always **switch** my phone **off** at dinner* (phrasal verb).' },
          { t: 'table', caption: 'Giving and comparing opinions', explain: ['head', 'col0'], head: ['Use', 'Phrases'], rows: [
            ['your opinion', 'I think…, In my opinion…, I believe…'],
            ['agreeing', 'I agree with…, That’s true.'],
            ['disagreeing politely', 'I’m not sure about that., I see your point, but…'],
            ['the other side', 'On the other hand…, However…'],
          ] },
        ],
        [
          { t: 'reading', title: 'Switched off for a week', md: 'Last month, four friends from Leeds agreed to switch off their phones for a week. They wanted to find out if life is better without screens.\n\nHana, a student, found the first two days very hard. “If I don’t check my messages, I feel nervous,” she said. “But by Wednesday I was enjoying reading books again.”\n\nDaniel, a taxi driver, was worried about missing work. In the end he used an old phone only for calls. “On the other hand,” he said, “I slept much better. If I don’t look at a screen before bed, I fall asleep faster.”\n\nOlivia didn’t enjoy the experiment at all. “Using maps on paper was a nightmare,” she laughed. “I got lost twice.”\n\nThe fourth friend, Raj, said the week changed his life. He now switches his phone off every evening at eight. “Being with people without screens is the best way to really talk,” he said.' },
        ],
        [
          { t: 'table', caption: 'Common mistakes in opinions', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I am agree.', 'I agree.', '*agree* is a verb: no *am*.'],
            ['In my opinion, I think…', 'In my opinion, … / I think…', 'Use one opinion phrase, not two.'],
            ['On the other side…', 'On the other hand…', 'The fixed phrase is *on the other hand*.'],
            ['Use phones is bad.', 'Using phones is bad.', 'Subject: -ing.'],
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam (Reading part 2): which friend matches each description?', items: [
            { q: 'This person now turns their phone off every evening.', o: ['Raj', 'Hana', 'Olivia'], why: '*He now switches his phone off every evening at eight.*' },
            { q: 'This person didn’t like the experiment.', o: ['Olivia', 'Raj', 'Daniel'], why: '*Olivia didn’t enjoy the experiment at all.*' },
            { q: 'This person still used a phone for one thing.', o: ['Daniel', 'Hana', 'Raj'], why: 'Daniel *used an old phone only for calls*.' },
            { q: 'This person felt nervous at the beginning.', o: ['Hana', 'Olivia', 'Daniel'], why: 'Hana: *If I don’t check my messages, I feel nervous.*' },
          ] },
          { t: 'tip', art: 'owl', md: 'Reading part 2 matches **five people** with **eight short texts**. Each person needs several things. Underline the key needs, then check that **all** of them match, not just one.' },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Read the article again. Are the sentences true or false, or doesn’t it say?', ng: true, items: [
            { q: 'The friends switched off their phones for a month.', a: 'f', why: 'They did it *for a week*.' },
            { q: 'Daniel slept better during the week.', a: 't', why: '*I slept much better.*' },
            { q: 'Olivia got lost because she used paper maps.', a: 't', why: '*Using maps on paper was a nightmare… I got lost twice.*' },
            { q: 'Hana is studying medicine.', a: 'ng', why: 'The article says she is a student, but not what she studies.' },
          ] },
          { t: 'ex', kind: 'bank', h: 'Complete the opinions with the words.', extra: ['agree', 'opinion'], items: [
            { q: '___ a book is better than scrolling online.', a: 'Reading', why: 'Subject: -ing.' },
            { q: 'If I ___ my phone off at night, I sleep better.', a: 'switch', why: 'Zero conditional: present simple.' },
            { q: 'I see your point, ___ I need my phone for work.', a: 'but', why: 'Disagreeing politely: *I see your point, but…*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Give your opinion. Say these sentences after the tutor.', tutor: 'mei', items: [
            { a: 'In my opinion, being with people without screens is important.' },
            { a: 'If I don’t look at a screen before bed, I fall asleep faster.' },
            { a: 'I see your point, but I need my phone for work.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
      { q: 'If you ___ ice, it melts.', o: ['heat', 'will heat', 'heated'], why: 'Zero conditional: present simple.' },
      { q: 'I’m interested in ___ how robots work.', o: ['learning', 'learn', 'to learn'], why: 'After a preposition: -ing.' },
      { q: 'Your phone is ringing. Please turn ___.', o: ['it off', 'off it', 'it out'], why: 'Pronoun in the middle.' },
      { q: '___ too much coffee is bad for you.', o: ['Drinking', 'Drink', 'To drinking'], why: 'Subject: -ing.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'We’ve run out ___ printer paper.', a: ['of'], why: '*run out of*.' },
      { q: 'If my laptop freezes, I ___ (restart) it.', a: ['restart'], why: 'Zero conditional: present simple.' },
      { q: 'Thank you for ___ (call) me back.', a: ['calling'], why: '*for* + -ing.' },
      { q: 'Remember to back ___ your photos.', a: ['up'], why: '*back up* = make a copy.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'If you [will click] here, the video starts.', a: ['click'], why: 'Never *will* after *if*.' },
      { s: 'I look forward to [see] you next week.', a: ['seeing'], why: '*look forward to* + -ing.' },
      { s: 'She’s very good [in] fixing bikes.', a: ['at'], why: '*good at*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the phrasal verbs and their meanings.', pairs: [
      ['set up', 'prepare something new so it works'],
      ['back up', 'make a copy of your files'],
      ['look up', 'find information'],
      ['log out', 'leave an account'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence.', items: [
      { q: 'It is fun to make videos.', cue: 'Making', a: ['Making videos is fun.'], why: 'Subject: -ing, singular verb.' },
      { q: 'Every time I press this button, the light comes on.', cue: 'If', a: ['If I press this button, the light comes on.'], why: 'Zero conditional.' },
    ] },
  ],
};
