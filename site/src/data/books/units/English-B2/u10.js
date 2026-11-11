// English B2, unit 10, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Learning for life: verbs that change meaning with -ing or to, needn't have done and didn't need to do, word formation
// in depth (B2 First Reading and Use of English Part 3), and a reading about learning a skill as an adult.
export const UNIT = {
  id: 'u10',
  title: 'Learning for life',
  goal: 'Choose correctly between -ing and to after verbs like remember, try and stop, talk about unnecessary actions in the past, build new words with prefixes and suffixes, and discuss learning as an adult.',
  art: 'cactus',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'speaking'], topics: ['gerunds', 'infinitives', 'needn-t-have', 'word-formation', 'learning', 'education'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'I remember doing it',
      about: 'Choose between -ing and to after remember, forget, try, stop, regret and mean, where the meaning changes.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'At B1 you learned that some verbs take **-ing** (*enjoy doing*) and some take **to** (*decide to do*). At B2 you meet a small group of verbs that can take **both**, but with a **different meaning**. Getting them right is a favourite test in B2 First Part 4.\n\nThe general idea: **-ing** often looks **back** at an action that already happened, while **to** often looks **forward** to an action that is still to come.\n\n**Remember doing** = you did it, and now you have the memory: *I remember **visiting** Rome as a child.*\n**Remember to do** = you must not forget a task: ***Remember to lock** the door.*' },
          { t: 'table', caption: 'Verbs that change meaning', explain: ['head', 'col1', 'col2'], head: ['Verb', '+ -ing', '+ to'], rows: [
            ['remember', 'a memory of the past', 'a task you must not forget'],
            ['forget', 'lose the memory of something (often in never forget)', 'not do a task'],
            ['stop', 'end an activity', 'pause one action in order to do another'],
            ['try', 'do something as an experiment to solve a problem', 'make an effort to do something difficult'],
            ['regret', 'be sorry about something in the past', 'be sorry to give bad news (formal)'],
            ['mean', 'involve, have as a result', 'intend, plan'],
          ] },
        ],
        [
          { t: 'text', md: '**Stop** is easy to confuse. *He **stopped smoking*** = he doesn’t smoke any more. *He **stopped to smoke*** = he stopped (walking, working) **in order to** smoke a cigarette.\n\n**Try** is subtle. **Try to** means *make an effort*, often with difficulty: *I **tried to** open the window, but it was stuck.* **Try -ing** means *do it as an experiment and see if it helps*: *If you can’t sleep, **try drinking** warm milk.*\n\n**Regret to** is used in formal bad news: *We **regret to inform** you that your application was unsuccessful.* **Mean -ing** = involve: *Learning a language **means making** mistakes.*' },
          { t: 'examples', items: [
            { s: 'I’ll never **forget meeting** my first English teacher.', n: 'A memory: *-ing*.' },
            { s: 'I **forgot to bring** my notes, so I borrowed yours.', n: 'A task not done: *to*.' },
            { s: 'We **stopped to have** a coffee on the way to class.', n: 'Paused in order to have a coffee.' },
            { s: 'If the app freezes, **try restarting** your phone.', n: 'An experiment that might help.' },
            { s: 'I **tried to concentrate**, but the room was too noisy.', n: 'An effort that failed.' },
            { s: 'I **regret not studying** harder at school.', n: 'Sorry about the past.' },
            { s: 'Passing the exam **means getting** a better job.', n: '*mean* = involve, have as a result.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['Remember locking the door when you leave.', 'Remember to lock the door when you leave.', 'A future task: *to*.'],
            ['I stopped to smoke ten years ago.', 'I stopped smoking ten years ago.', 'The habit ended: *-ing*.'],
            ['I regret to not go to university.', 'I regret not going to university.', 'Sorry about the past: *not* + *-ing*.'],
            ['I never forget to see the sea for the first time.', 'I’ll never forget seeing the sea for the first time.', 'A memory: *-ing*.'],
          ] },
          { t: 'dialogue', title: 'Before the exam', lines: [
            { who: 'Priya', s: 'Did you remember to bring a pencil and an eraser?' },
            { who: 'Callum', s: 'Yes. I remember forgetting them last time, so I packed them last night.' },
            { who: 'Priya', s: 'I tried to revise yesterday, but I just couldn’t focus.' },
            { who: 'Callum', s: 'Try turning your phone off next time. It helped me a lot.' },
            { who: 'Priya', s: 'Good idea. Let’s stop to get some water before we go in.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the correct form.', items: [
            { q: 'Please remember ___ your homework on Friday.', o: ['to hand in', 'handing in', 'hand in'], why: 'A task for the future: *to*.' },
            { q: 'I remember ___ my first exam; I was so nervous.', o: ['taking', 'to take', 'take'], why: 'A memory of the past: *-ing*.' },
            { q: 'If you can’t remember new words, try ___ them on cards.', o: ['writing', 'to write', 'write'], why: 'An experiment that might help.' },
            { q: 'She stopped ___ a text message, then carried on walking.', o: ['to read', 'reading', 'read'], why: 'She paused in order to read it.' },
            { q: 'We regret ___ you that the course is full.', o: ['to tell', 'telling', 'tell'], why: 'Formal bad news: *regret to*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'I [regret to not learn] to swim as a child.', a: ['regret not learning'], why: 'Sorry about the past: *regret not -ing*.' },
            { s: 'He gave up coffee and stopped [to drink] it completely.', a: ['drinking'], why: 'The habit ended: *-ing*.' },
            { s: 'Don’t forget [locking] the classroom.', a: ['to lock'], why: 'A task: *to*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'In the format of B2 First Reading and Use of English Part 4: complete the second sentence so it means the same as the first, using the word given.', items: [
            { q: 'I’m sorry that I didn’t practise more before the concert.', cue: 'REGRET', a: ['I regret not practising more before the concert.', 'I regret not having practised more before the concert.'], why: '*regret not -ing* for the past.' },
            { q: 'He doesn’t eat meat any more.', cue: 'STOPPED', a: ['He has stopped eating meat.', 'He stopped eating meat.'], why: 'The habit ended: *stop -ing*.' },
            { q: 'Don’t forget to call your mother tonight.', cue: 'REMEMBER', a: ['Remember to call your mother tonight.'], why: 'A task: *remember to*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 4**, verbs like *remember*, *stop* and *regret* are popular because one small change of form changes the meaning. Ask yourself: does the action happen **before** (use *-ing*) or **after** (use *to*) the verb?' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'I’ll never forget meeting my first teacher.' },
            { a: 'Remember to bring your notes tomorrow.' },
            { a: 'If you can’t sleep, try reading for ten minutes.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'You needn’t have worried',
      about: 'Talk about unnecessary actions in the past with needn’t have done and didn’t need to do.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'English has two ways to say that something in the past was **not necessary**, and they do **not** mean the same.\n\n**Didn’t need to + verb** says only that it wasn’t necessary. Usually we understand that the person **didn’t do it**: *I **didn’t need to** take a taxi, because my friend drove me.* (So I didn’t take a taxi.)\n\n**Needn’t have + past participle** says that the person **did it**, but it was **not necessary**, often a waste of time, money or worry: *I **needn’t have taken** a taxi; the station was only five minutes away.* (I took a taxi, and it was a waste.)' },
          { t: 'table', caption: 'Two ways to say “not necessary”', explain: ['head', 'col1', 'col2'], head: ['Form', 'Did it happen?', 'Typical meaning'], rows: [
            ['didn’t need to do', 'usually no', 'it wasn’t necessary, so I didn’t'],
            ['needn’t have done', 'yes', 'I did it, but it was a waste'],
            ['didn’t have to do', 'usually no', 'there was no obligation'],
          ] },
          { t: 'tip', art: 'owl', md: 'A quick test: if you can add *“but I did it anyway”*, use **needn’t have done**. If you can add *“so I didn’t”*, use **didn’t need to**.' },
        ],
        [
          { t: 'text', md: '**Needn’t have** is very common for **worry** and **effort**: *You **needn’t have worried**; the exam was easy.* It can sound like gentle reassurance or a polite thank-you: *You **needn’t have brought** flowers! They’re lovely.*\n\nIn questions and in American English, **didn’t need to** and **didn’t have to** are more common, and some speakers use *didn’t need to do* even when the action happened. In the exam, keep the clear difference above.' },
          { t: 'examples', items: [
            { s: 'I **needn’t have revised** grammar so much; the test was all vocabulary.', n: 'I revised, but it wasn’t necessary.' },
            { s: 'We **didn’t need to** book; the café was half empty.', n: 'We didn’t book: it wasn’t necessary.' },
            { s: 'You **needn’t have waited** for me. I had a key.', n: 'You waited, but you didn’t have to.' },
            { s: 'She **didn’t have to** pay for the course; her company paid.', n: 'No obligation.' },
            { s: 'Oh, you **needn’t have cooked**! We could have ordered a pizza.', n: 'A polite thank-you.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I needn’t have go to class yesterday.', 'I needn’t have gone to class yesterday.', '*needn’t have* + past participle.'],
            ['I didn’t need to bought a ticket.', 'I didn’t need to buy a ticket.', '*didn’t need to* + base form.'],
            ['You needn’t to worry.', 'You needn’t worry.', '*needn’t* is a modal: no *to*.'],
            ['I didn’t need have cooked.', 'I needn’t have cooked.', 'The form is *needn’t have done*.'],
          ] },
          { t: 'dialogue', title: 'After the interview', lines: [
            { who: 'Mum', s: 'How did the university interview go?' },
            { who: 'Elena', s: 'Really well! I needn’t have stayed up all night preparing.' },
            { who: 'Mum', s: 'Did they ask about your exam results?' },
            { who: 'Elena', s: 'No, I didn’t need to show them anything. They already had my file.' },
            { who: 'Mum', s: 'See? You needn’t have worried so much.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the correct form.', items: [
            { q: 'I ___ a dictionary; the teacher gave us one in class. (I bought one.)', o: ['needn’t have bought', 'didn’t need to buy', 'needn’t buy'], why: 'I did it, but it wasn’t necessary.' },
            { q: 'We ___ queue; there was nobody at the desk. (We didn’t queue.)', o: ['didn’t need to', 'needn’t have', 'mustn’t'], why: 'Not necessary, so we didn’t.' },
            { q: 'You ___ so early! The class starts at ten.', o: ['needn’t have come', 'didn’t need come', 'needn’t came'], why: 'You came, but too early.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with one word.', items: [
            { q: 'You needn’t ___ bought me a present.', a: ['have'], why: '*needn’t have* + past participle.' },
            { q: 'I didn’t ___ to take the bus; my brother drove me.', a: ['need', 'have'], why: '*didn’t need to* / *didn’t have to*.' },
            { q: 'She needn’t have ___ so much; the test was easy.', a: ['worried'], why: 'Past participle after *have*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'In the format of B2 First Reading and Use of English Part 4: use the word given.', items: [
            { q: 'It wasn’t necessary for you to wait for me, but you did.', cue: 'NEEDN’T', a: ['You needn’t have waited for me.'], why: 'Done but unnecessary: *needn’t have*.' },
            { q: 'There was no need for us to take the exam again, so we didn’t.', cue: 'NEED', a: ['We didn’t need to take the exam again.', 'We did not need to take the exam again.'], why: 'Not necessary, not done.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Part 4, read the **first sentence** carefully for clues: *but you did* points to **needn’t have**; *so we didn’t* points to **didn’t need to**.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'lena', items: [
            { a: 'You needn’t have worried about the exam.' },
            { a: 'I didn’t need to book, so I just turned up.' },
            { a: 'I needn’t have bought a new dictionary.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'Building words',
      about: 'Form nouns, adjectives, adverbs and verbs with prefixes and suffixes, as in B2 First Reading and Use of English Part 3.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'In **B2 First Part 3**, you read a text with eight gaps. Next to each gap is a word in capitals, and you must change it into the right form: *SUCCESS → successful, successfully, unsuccessful*.\n\nTwo questions solve most items. First, **what kind of word** does the gap need? After *a / the / their* you need a **noun**; before a noun you need an **adjective**; next to a verb you often need an **adverb**. Second, does the meaning need to be **negative** or **plural**? Read the whole sentence before you write.' },
          { t: 'table', caption: 'Suffixes that change the word class', explain: ['head', 'col0'], head: ['Making', 'Suffixes', 'Examples'], rows: [
            ['nouns from verbs', '-ment, -tion / -sion, -ance / -ence, -al', 'improve → improvement, decide → decision, appear → appearance, arrive → arrival'],
            ['nouns from adjectives', '-ness, -ity, -dom', 'kind → kindness, able → ability, free → freedom'],
            ['nouns for people', '-er / -or, -ist, -ant', 'teach → teacher, science → scientist, assist → assistant'],
            ['adjectives', '-ful, -less, -ous, -ive, -able, -al', 'help → helpful, use → useless, danger → dangerous, create → creative'],
            ['verbs', '-en, -ise / -ize, -ify', 'wide → widen, modern → modernise, simple → simplify'],
            ['adverbs', '-ly', 'careful → carefully, easy → easily'],
          ] },
        ],
        [
          { t: 'text', md: '**Prefixes** change the meaning, not the word class. Negative prefixes are the most tested: **un-**, **in-**, **im-** (before *m* and *p*), **il-** (before *l*), **ir-** (before *r*) and **dis-**. Other useful prefixes: **re-** (again), **mis-** (wrongly), **over-** (too much), **under-** (too little).\n\nWatch the **spelling** when you add a suffix: final *-e* often disappears (*create → creative*), *-y* becomes *-i* (*happy → happiness*), and some words change inside (*able → ability*, *long → length*).' },
          { t: 'table', caption: 'Prefixes', explain: ['head', 'col1'], head: ['Prefix', 'Meaning', 'Examples'], rows: [
            ['un-, in-, dis-', 'not, the opposite', 'unlikely, inexperienced, dishonest'],
            ['im-, il-, ir-', 'not (before m/p, l, r)', 'impossible, illegal, irregular'],
            ['re-', 'again', 'rewrite, retrain'],
            ['mis-', 'wrongly', 'misunderstand, mispronounce'],
            ['over-, under-', 'too much, too little', 'overestimate, underpaid'],
          ] },
          { t: 'tip', art: 'owl', md: 'Part 3 often tests **two changes at once**: a prefix **and** a suffix. *EMPLOY → unemployment*, *EXPECT → unexpectedly*. When the sentence is negative in meaning, look for a prefix as well.' },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['She is very creativ.', 'She is very creative.', 'Keep the final *-e* before *-ive*.'],
            ['The happyness of students matters.', 'The happiness of students matters.', '*-y* becomes *-i*.'],
            ['It is unpossible.', 'It is impossible.', '*im-* before *p*.'],
            ['He spoke very confident.', 'He spoke very confidently.', 'An adverb describes the verb *spoke*.'],
            ['There were many improves.', 'There were many improvements.', 'After *many* you need a plural noun.'],
          ] },
          { t: 'ex', kind: 'sort', h: 'Which word class is each word?', groups: ['noun', 'adjective', 'adverb'], explain: ['groups'], items: [
            { s: 'knowledge', g: 0, why: '*-ledge*: a noun.' },
            { s: 'successful', g: 1, why: '*-ful*: an adjective.' },
            { s: 'patiently', g: 2, why: '*-ly*: an adverb.' },
            { s: 'improvement', g: 0, why: '*-ment*: a noun.' },
            { s: 'creative', g: 1, why: '*-ive*: an adjective.' },
            { s: 'surprisingly', g: 2, why: '*-ly*: an adverb.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Learning at any age', md: 'Many adults believe that learning becomes impossible after a certain age. In reality, the brain keeps its flexibility for much longer than people think.\n\nWhat changes is not our ability to learn but our confidence. Adults are often embarrassed to make mistakes, so they give up too easily. With patience and a little encouragement, however, most learners make surprisingly fast progress.' },
          { t: 'ex', kind: 'wordform', h: 'In the format of B2 First Reading and Use of English Part 3: use the word in capitals to form a word that fits the gap.', items: [
            { q: 'Many adults think that learning a language is ___ after forty.', base: 'possible', a: ['impossible'], why: 'Negative meaning: *im-* before *p*.' },
            { q: 'The brain keeps its ___ for much longer than people think.', base: 'flexible', a: ['flexibility'], why: 'After *its*: a noun, *-ity*.' },
            { q: 'Adults are often ___ to make mistakes in front of others.', base: 'embarrass', a: ['embarrassed'], why: 'Feeling: *-ed* adjective.' },
            { q: 'With a little ___, most learners progress quickly.', base: 'encourage', a: ['encouragement'], why: 'After *a little*: a noun, *-ment*.' },
            { q: 'Most learners make ___ fast progress.', base: 'surprise', a: ['surprisingly'], why: 'Before an adjective: an adverb.' },
            { q: 'Teachers should be ___ and kind with beginners.', base: 'patience', a: ['patient'], why: 'After *be*: an adjective.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Before you write, **say the word class** in your head: “after *its*, noun”, “before an adjective, adverb”. Then check the **meaning** of the sentence: is it negative? Is it plural? Finally, check the **spelling**: a misspelt word gets no mark.' },
        ],
        [
          { t: 'ex', kind: 'wordform', h: 'More practice: form the right word.', items: [
            { q: 'The ___ of the course depends on regular practice.', base: 'succeed', a: ['success'], why: 'After *The*: a noun.' },
            { q: 'Some students feel ___ when they can’t follow a native speaker.', base: 'hope', a: ['hopeless'], why: 'An adjective with a negative feeling: *-less*.' },
            { q: 'It’s easy to ___ what a teacher says on the phone.', base: 'understand', a: ['misunderstand'], why: '*mis-* = wrongly.' },
          ] },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'omar', items: [
            { a: 'Learning a language takes patience and encouragement.' },
            { a: 'It’s not impossible; it just takes time.' },
            { a: 'She made surprisingly fast progress.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'Never too late',
      about: 'Read about adults learning new skills and discuss learning in the format of the speaking exam.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'This lesson brings the unit together. You will read three short texts by people who learned something new as adults, then answer questions in the format of **B2 First Part 7**, where you match statements to the right person.' },
          { t: 'reading', title: 'Three late learners', md: '**A. Grace, 52.** I always regretted not learning the piano as a child, so last year I finally took lessons. I remember feeling ridiculous at the first one, surrounded by teenagers. What surprised me was how much my memory improved; I needn’t have worried that I was too old.\n\n**B. Tomasz, 38.** I tried to learn Spanish three times with apps and stopped each time after a month. Then a friend suggested joining a conversation group. Speaking with real people meant making embarrassing mistakes, but it was the only thing that worked for me.\n\n**C. Nadia, 61.** After I retired I decided to retrain as a tour guide. The course involved a lot of reading and an exam I didn’t expect to pass. I did, and now I take groups around my city three days a week. My only advice: never stop being curious.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of B2 First Reading and Use of English Part 7: which person says this? (A Grace, B Tomasz, C Nadia)', items: [
            { q: 'I gave up several times before I found the right method.', o: ['B Tomasz', 'A Grace', 'C Nadia'], why: '*stopped each time after a month* … *the only thing that worked*.' },
            { q: 'I was surprised by a change in a mental ability.', o: ['A Grace', 'B Tomasz', 'C Nadia'], why: '*how much my memory improved*.' },
            { q: 'I learned something to start a new working life.', o: ['C Nadia', 'A Grace', 'B Tomasz'], why: '*retrain as a tour guide*.' },
            { q: 'I felt out of place with younger learners.', o: ['A Grace', 'B Tomasz', 'C Nadia'], why: '*feeling ridiculous … surrounded by teenagers*.' },
            { q: 'I passed a test I thought I would fail.', o: ['C Nadia', 'A Grace', 'B Tomasz'], why: '*an exam I didn’t expect to pass. I did.*' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 7**, the statements use **different words** from the texts. Underline the key idea of each statement (*gave up several times*), then look for the same idea in other words (*stopped each time*). A name can be the answer more than once.' },
        ],
        [
          { t: 'text', md: 'Find the grammar of this unit in the texts: *regretted not learning*, *remember feeling*, *needn’t have worried*, *tried to learn*, *stopped*, *meant making*, *never stop being*. Each one follows the rules from lessons 1 and 2.' },
          { t: 'ex', kind: 'gap', h: 'Complete the sentences about the texts with one word.', items: [
            { q: 'Grace regretted not ___ the piano as a child.', a: ['learning'], why: '*regret not -ing*.' },
            { q: 'Grace needn’t have ___ about her age.', a: ['worried'], why: '*needn’t have* + past participle.' },
            { q: 'Speaking with real people meant ___ mistakes.', a: ['making'], why: '*mean* = involve: *-ing*.' },
            { q: 'Nadia advises people never to stop ___ curious.', a: ['being'], why: '*stop -ing*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'I regret not learning a musical instrument.', why: '*regret not -ing*.' },
            { a: 'It is never too late to learn a new skill.', why: 'A fixed phrase: *never too late to*.' },
          ] },
        ],
        [
          { t: 'text', md: 'Speaking: in **B2 First Speaking Part 3**, you discuss ideas with another candidate. Useful phrases: *What do you think about…?*, *I’d say that…*, *That’s a good point, but…*, *Shall we decide…?* Repeat these model answers after the tutor.' },
          { t: 'ex', kind: 'speak', h: 'Say these answers after the tutor.', tutor: 'kofi', items: [
            { a: 'I think learning with other people is more motivating.' },
            { a: 'That’s a good point, but apps are more flexible.' },
            { a: 'I regret not learning to swim when I was younger.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'Choose the correct form.', items: [
      { q: 'Remember ___ the windows before you leave.', o: ['to close', 'closing', 'close'], why: 'A task: *to*.' },
      { q: 'I’ll never forget ___ my first class in London.', o: ['teaching', 'to teach', 'teach'], why: 'A memory: *-ing*.' },
      { q: 'If the computer is slow, try ___ it.', o: ['restarting', 'to restart', 'restart'], why: 'An experiment: *-ing*.' },
      { q: 'He stopped ___ when he was thirty.', o: ['smoking', 'to smoke', 'smoke'], why: 'The habit ended.' },
    ] },
    { t: 'ex', kind: 'select', h: 'Needn’t have or didn’t need to?', items: [
      { q: 'I ___ revise all night; the exam was easy. (I revised.)', o: ['needn’t have revised', 'didn’t need to revise', 'needn’t revise'], why: 'Done, but unnecessary.' },
      { q: 'We ___ pay; entry was free. (We didn’t pay.)', o: ['didn’t need to', 'needn’t have', 'mustn’t'], why: 'Not necessary, not done.' },
    ] },
    { t: 'ex', kind: 'wordform', h: 'Form the right word.', items: [
      { q: 'Her ___ to learn fast surprised everyone.', base: 'able', a: ['ability'], why: 'After *Her*: a noun.' },
      { q: 'It was ___ to finish the course in a week.', base: 'possible', a: ['impossible'], why: 'Negative meaning.' },
      { q: 'He answered the questions ___.', base: 'confident', a: ['confidently'], why: 'An adverb for the verb.' },
      { q: 'The teacher was very ___ and answered every question.', base: 'help', a: ['helpful'], why: 'An adjective: *-ful*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'I [regret to not study] harder.', a: ['regret not studying'], why: '*regret not -ing*.' },
      { s: 'You needn’t have [came] so early.', a: ['come'], why: 'Past participle: *come*.' },
      { s: 'She is a very [creativ] student.', a: ['creative'], why: 'Keep the *-e*.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Complete the second sentence using the word given.', items: [
      { q: 'I’m sorry that I didn’t go to the lecture.', cue: 'REGRET', a: ['I regret not going to the lecture.', 'I regret not having gone to the lecture.'], why: '*regret not -ing*.' },
      { q: 'It wasn’t necessary for you to cook, but you did.', cue: 'NEEDN’T', a: ['You needn’t have cooked.'], why: '*needn’t have done*.' },
      { q: 'Don’t forget to send me the notes.', cue: 'REMEMBER', a: ['Remember to send me the notes.'], why: '*remember to*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the prefix and its meaning.', pairs: [
      ['re-', 'again'],
      ['mis-', 'wrongly'],
      ['over-', 'too much'],
      ['under-', 'too little'],
    ] },
  ],
};
