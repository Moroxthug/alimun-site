// English C2, unit 5, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Varieties of English: British, American, Australian, Indian, Irish and Scottish English; slang, regional speech,
// politeness and taboo language (explained in general terms, no slurs or strong swear words printed); legal English and
// the plain English movement; a radio discussion between speakers of different Englishes.
// Exam formats (C2 Proficiency): Listening Part 2, Listening Part 4, Reading and Use of English Part 2, Listening Part 3.
export const UNIT = {
  id: 'u5',
  title: 'Varieties of English',
  goal: 'Understand the main varieties of English, from Glasgow to Sydney and from Delhi to Chicago; recognise slang, regional speech and the unwritten rules of politeness and taboo; read legal English and rewrite it in plain English; and follow speakers of different Englishes in the format of C2 Proficiency Listening.',
  art: 'suitcase',
  tags: { skills: ['vocabulary', 'listening', 'reading', 'speaking'], topics: ['british-english', 'american-english', 'world-englishes', 'slang', 'politeness', 'taboo', 'legal-english', 'plain-english'], goals: ['foundations', 'professional', 'relocation'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'Pavement or sidewalk?',
      about: 'Recognise the vocabulary, spelling and grammar of British, American, Australian, Indian, Irish and Scottish English, and keep your own writing consistent.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'text', md: 'At C2 you are expected to understand English **whoever is speaking it**: a taxi driver in Glasgow, a lawyer in Delhi, a podcaster in Texas. English is not one language with a single correct form but a **family of standard varieties**, each with its own dictionaries and style guides, and each correct in its own place. British and American English are the most widely taught; Australian, Indian, Irish, Scottish, Canadian, Nigerian and Singaporean English are used by millions every day.\n\nThe varieties share almost all their grammar. The differences sit in **vocabulary** (*the pavement* and *the sidewalk*), **spelling** (*colour* and *color*), a handful of **grammar points** (*have got* and *have gotten*) and pronunciation. Knowing them helps you **understand** more, and **write consistently**, which editors, examiners and clients notice at once.' },
          { t: 'table', caption: 'Everyday vocabulary: British and American', explain: ['head', 'col2'], head: ['British', 'American', 'Meaning'], rows: [
            ['the pavement', 'the sidewalk', 'the path beside a road'],
            ['a flat', 'an apartment', 'a home on one floor of a larger building'],
            ['a lift', 'an elevator', 'a machine that carries people between floors'],
            ['the boot / the bonnet', 'the trunk / the hood', 'the back and the front covers of a car'],
            ['a queue', 'a line', 'people waiting one behind another'],
            ['chips / crisps', 'fries / chips', 'hot fried potato / thin fried slices in a bag'],
            ['the ground floor / the first floor', 'the first floor / the second floor', 'the floor at street level / the one above it'],
          ] },
        ],
        [
          { t: 'text', md: 'The dangerous words are the **false friends**: the same word with a different meaning in each variety. In British English, ***quite*** before an ordinary adjective usually means *fairly*: *The film was quite good* (it was all right). In American English it tends to mean *very*. A British ***public school*** is an old, fee-paying private school; an American one is free and run by the state. To ***table*** a proposal in Britain is to put it forward for discussion; in the United States it is to **postpone** it.\n\nIn a story the context helps. In **meetings, contracts and emails**, people act on what they think you said.' },
          { t: 'examples', items: [
            { s: 'Let’s **table** the budget question until next month.', n: 'American: postpone it. A British colleague might expect to discuss it now.' },
            { s: 'The new proposal was **tabled** at Tuesday’s meeting.', n: 'British: it was put forward for discussion.' },
            { s: 'He went to a **public school** in Somerset, so the fees were enormous.', n: 'British: a private, fee-paying school.' },
            { s: 'Your report was **quite good**, actually.', n: 'British: fairly good. American: very good.' },
          ] },
          { t: 'tip', art: 'owl', md: 'When a misunderstanding could cost time or money, **remove the variety-specific word**. Instead of *Let’s table this*, say *Let’s discuss this next month* or *Let’s put this on the agenda now*. Instead of *the first floor*, say *one floor up from the entrance*. Clear international English is a C2 skill in itself.' },
        ],
        [
          { t: 'text', md: '**Spelling** follows patterns, mostly because American spelling dropped letters that were not pronounced in the nineteenth century. Two points surprise even native speakers: British English accepts **both -ise and -ize**, and it separates some nouns and verbs (a *licence*, to *license*; *practice*, to *practise*). Australian, Irish, Indian and most Commonwealth varieties follow British spelling.' },
          { t: 'table', caption: 'Spelling patterns', explain: ['head', 'col2'], head: ['British', 'American', 'Pattern'], rows: [
            ['colour, humour, neighbour', 'color, humor, neighbor', '-our becomes -or'],
            ['centre, theatre, metre', 'center, theater, meter', '-re becomes -er'],
            ['realise, organise (or -ize)', 'realize, organize', '-ise or -ize; American uses -ize'],
            ['travelling, cancelled, modelling', 'traveling, canceled, modeling', 'no double l before an ending when the stress is not on the last syllable'],
          ] },
        ],
        [
          { t: 'text', md: '**Grammar** differs in a few places, mostly as preferences rather than rules.\n\n***Have got*** and ***have gotten***. British English uses *got* as the past participle of *get*: *She has got much better.* American English uses ***gotten*** when *get* means *obtain*, *become* or *move*. For possession both say *I’ve got a car*, but Americans more often ask *Do you have…?*\n\n**Collective nouns.** British English can see a group as people, with a **plural verb**: *The team **are** playing well. England **are** through to the final.* American English uses the singular.\n\nBritish English also keeps *learnt, burnt, dreamt, spelt* beside the *-ed* forms, and uses the present perfect more strictly: an American can say *Did you eat yet?*' },
          { t: 'table', caption: 'Grammar and usage', explain: ['head', 'col0'], head: ['Point', 'British', 'American'], rows: [
            ['get in the perfect', 'She has got better.', 'She has gotten better.'],
            ['possession', 'Have you got a pen?', 'Do you have a pen?'],
            ['collective nouns', 'The committee are divided.', 'The committee is divided.'],
            ['the mandative subjunctive', 'They insisted that he should leave. (also leave)', 'They insisted that he leave.'],
            ['prepositions', 'at the weekend; Monday to Friday; write to me', 'on the weekend; Monday through Friday; write me'],
            ['institutions', 'in hospital; at university', 'in the hospital; in college'],
          ] },
        ],
        [
          { t: 'text', md: 'Beyond Britain and America, each variety has features you will meet in films, news and work.\n\n**Australian English** shortens words and adds *-ie* or *-o*: *brekkie*, *arvo* (afternoon), *servo* (a petrol station), *a barbie*. *No worries* answers a thank-you, and *heaps* means *a lot*.\n\n**Indian English** is the standard of a huge educated population, not a learner’s version of British English. It gave us ***prepone*** (bring forward) and uses *revert* for *reply* and *itself* for emphasis: *I will send it today itself.*\n\n**Irish English** has its own perfect: ***I’m after finishing*** means *I’ve just finished*. *Grand* means *fine* and *to give out* is to complain.\n\n**Scottish English** uses *wee*, *aye*, *outwith* (outside) and *dreich* (cold, grey and wet). Many regard **Scots** as a language of its own.' },
          { t: 'examples', items: [
            { s: 'The meeting has been **preponed** to ten o’clock.', n: 'Indian: moved to an earlier time.' },
            { s: 'Kindly **revert** with your comments by Friday.', n: 'Indian: reply. In British and American English *revert* means *go back to an earlier state*.' },
            { s: 'Don’t worry, **I’m after ringing** them already.', n: 'Irish: I have just phoned them.' },
            { s: 'She was **giving out** about the noise all evening.', n: 'Irish: complaining.' },
            { s: 'It’s a **dreich** day, so take a jacket.', n: 'Scottish: cold, grey and wet.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['The colour of the center was grey.', 'The colour of the centre was grey.', 'Do not mix spellings in one text.'],
            ['She has gotten better. (in a British report)', 'She has got better.', 'British English does not use *gotten*.'],
            ['The team is top of the league and are playing well.', 'The team is top of the league and is playing well.', 'Choose singular or plural for a group noun, and keep it.'],
            ['Indian English is just British English with mistakes.', 'Indian English is a variety with its own standard.', 'A variety is not an error; it has its own conventions.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Is it typically British or typically American?', groups: ['British', 'American'], explain: ['groups'], items: [
            { s: 'The government have changed their minds.', g: 0, why: 'A plural verb with a collective noun is British.' },
            { s: 'She has gotten a lot more confident.', g: 1, why: '*Gotten* is American.' },
            { s: 'I’ll see you at the weekend.', g: 0, why: '*At the weekend* is British; Americans say *on the weekend*.' },
            { s: 'The store is open Monday through Friday.', g: 1, why: '*Through* for a range of days is American.' },
            { s: 'He spent a week in hospital.', g: 0, why: 'British leaves out *the* in *in hospital*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What does the speaker most probably mean?', items: [
            { q: 'An American manager says: “We’ll table the hiring plan for now.”', o: ['The plan will be discussed later.', 'The plan will be discussed straight away.', 'The plan has been rejected.'], why: 'In American English, *table* means postpone.' },
            { q: 'A British colleague says your presentation was “quite good”.', o: ['It was fairly good, but not outstanding.', 'It was excellent.', 'It was poor.'], why: 'British *quite* + ordinary adjective often means *fairly*.' },
            { q: 'An email from Bengaluru asks you to “kindly revert by Monday”.', o: ['Please reply by Monday.', 'Please return to the old version by Monday.', 'Please be kind on Monday.'], why: 'Indian English *revert* = reply.' },
            { q: 'A friend in Dublin says: “I’m after eating, thanks.”', o: ['I have just eaten.', 'I am going to eat later.', 'I am looking for food.'], why: 'The Irish *after* perfect means *have just done*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Each sentence is from a text in British English. Find and fix the word that breaks the variety.', items: [
            { s: 'The theatre was full, so we queued on the [sidewalk].', a: ['pavement'], why: 'British *pavement*, to match *theatre* and *queued*.' },
            { s: 'The neighbours’ [color] scheme was a matter of local debate.', a: ['colour'], why: 'British spelling: *colour*, to match *neighbours’*.' },
            { s: 'The flight was [canceled] because of the weather.', a: ['cancelled'], why: 'British doubles the *l*: *cancelled*.' },
            { s: 'She has [gotten] much more confident since starting university.', a: ['got', 'become'], why: 'British English uses *got*, not *gotten*.' },
          ] },
        ],
        [
          { t: 'text', md: 'In **C2 Proficiency Listening Part 2** you hear **one speaker** for about three minutes: a talk, a lecture or a radio feature. You read **nine sentences** that summarise it and write the missing word or short phrase in each, using the **exact words you hear**. You hear the recording twice.\n\nThe sentences follow the order of the talk but **paraphrase** it, so listen for the idea around the gap, not for the words of the sentence. The answer itself is usually a **concrete word**: a noun, a place, a type of document. Spelling must be correct.\n\nHere you will read a talk by Helen, who edits a dictionary of world English, about how words from different varieties are added.' },
          { t: 'dialogue', title: 'How a word gets into the dictionary', lines: [
            { who: 'Helen', s: 'Good evening. People often ask me how a word gets into a dictionary of world English. The short answer is evidence. We add a word when we can show that a community uses it, over time, in writing that isn’t trying to be clever.' },
            { who: 'Helen', s: 'That evidence used to come mainly from newspapers and novels. These days the most useful material is far less glamorous: local news sites, court reports and, above all, online forums, where people write the way they speak.' },
            { who: 'Helen', s: 'Take the Indian English verb prepone, meaning to bring something forward. Some people call it a mistake, but our earliest clear examples came from school timetables, and within a few years it was everywhere in office emails. It is simply a word one variety needed and the others did not.' },
            { who: 'Helen', s: 'Irish English set us a different challenge. “I’m after finishing”, meaning “I’ve just finished”, is grammar, not vocabulary, so it can’t go under a single headword. We describe it in a usage note, and we added it only once we had found it in the dialogue of plays as well as in radio phone-ins.' },
            { who: 'Helen', s: 'Scottish words raise a question of identity. Many people regard Scots as a language in its own right, so a word like dreich, for cold, grey, wet weather, needs careful labelling. We take our advice from a panel of teachers in Aberdeen and Glasgow.' },
            { who: 'Helen', s: 'With Australian English, the difficulty is speed. Short forms such as arvo or servo spread so fast that by the time we have the evidence, some already sound dated. Our rule is that a word must turn up in three separate years before we consider it.' },
            { who: 'Helen', s: 'Does all this make the dictionary less authoritative? I’d argue the opposite. A dictionary of one variety would describe a language nobody actually speaks. Our job isn’t to referee English. It’s to describe it, accurately and without apology.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'In the format of the C2 Proficiency exam (Listening Part 2): complete the sentences with a word or short phrase from Helen’s talk.', items: [
            { q: 'Helen says a word is added only when there is ___ that a community uses it.', a: ['evidence'], why: '*The short answer is evidence.*' },
            { q: 'Today the most useful material often comes from online ___.', a: ['forums', 'fora'], why: '*Above all, online forums, where people write the way they actually speak.*' },
            { q: 'The earliest clear examples of *prepone* were found in school ___.', a: ['timetables'], why: '*Our earliest clear examples came from school timetables.* Office emails came later.' },
            { q: 'Because the Irish *after* construction is grammar, it is described in a ___.', a: ['usage note', 'note'], why: '*We describe it in a usage note instead.*' },
            { q: 'Before adding it, the team found the construction in the dialogue of ___ and in radio phone-ins.', a: ['plays'], why: '*In the dialogue of plays as well as in recordings of radio phone-ins.*' },
            { q: 'Many people consider Scots to be a ___ in its own right.', a: ['language'], why: '*Many people regard Scots as a language in its own right.*' },
            { q: 'Advice on Scottish words comes from a panel of ___.', a: ['teachers'], why: '*A panel of teachers in Aberdeen and Glasgow.*' },
            { q: 'Some Australian short forms already sound ___ by the time there is enough evidence.', a: ['dated'], why: '*Some of them already sound dated.*' },
            { q: 'Helen sees the dictionary’s role as to ___ English rather than to referee it.', a: ['describe'], why: '*Our job isn’t to referee English. It’s to describe it.*' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 2**, read all nine sentences before the recording starts and predict the **type** of word for each gap: a plural noun after *online*, a verb after *to*. Write the word **you hear**, not a synonym: *timetables*, not *schedules*. Watch for distractors placed near the answer: Helen mentions *office emails* straight after *school timetables*, but only one of them was the earliest source.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'In American English, to table a proposal means to postpone it.' },
            { a: 'A British reader would expect the proposal to be discussed.' },
            { a: 'Indian English gave the language the useful verb prepone.' },
            { a: 'Our job is not to referee English but to describe it.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'Gutted, chuffed and knackered',
      about: 'Understand slang, regional speech, indirect politeness and taboo language, and judge when informal language is safe to use and when it is not.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: '**Slang** is very informal language that belongs to a group: a region, a generation, a circle of friends. It changes quickly, which is part of its purpose: it marks who is *in* the group. A learner who uses last decade’s slang sounds odder than one who uses none.\n\nAt C2 the aim is to **recognise** common informal words and know **who could say them to whom**. A British friend who is *gutted* is very disappointed; *chuffed*, very pleased; *knackered*, exhausted; *skint*, out of money. These are informal but polite, fine with friends and colleagues you know well. Americans are *bummed* when disappointed; Australians are *stoked* when delighted; the Irish ask *What’s the craic?*' },
          { t: 'table', caption: 'Common informal words', explain: ['head', 'col1'], head: ['Word', 'Meaning', 'Where'], rows: [
            ['gutted', 'very disappointed', 'Britain, Ireland'],
            ['chuffed', 'very pleased', 'Britain'],
            ['knackered', 'exhausted', 'Britain, Ireland'],
            ['skint', 'having no money', 'Britain'],
                        ['bummed (out)', 'disappointed', 'United States'],
            ['stoked', 'delighted, excited', 'Australia, United States'],
            ['the craic', 'fun, news, good company', 'Ireland'],
          ] },
        ],
        [
          { t: 'text', md: 'You can often work out slang from its **form**: **metaphors** (*gutted*, literally with your insides removed), **shortenings** (*brekkie*, *uni*) and **old words with new meanings** (*sick* for *excellent*). London **rhyming slang** replaces a word with a rhyming phrase and then drops the rhyme: *head* became *loaf of bread*, then *loaf*, so *Use your loaf!* means *Think!*\n\n**Regional speech** goes beyond words: *I were* for *I was* in parts of England, *youse* as a plural *you*. In speech these are not mistakes but the grammar of a community; in formal writing they are not used.' },
          { t: 'examples', items: [
            { s: 'I’m absolutely **gutted** we lost in the last minute.', n: 'Very disappointed.' },
            { s: 'She was **chuffed to bits** with her results.', n: 'Extremely pleased; *to bits* intensifies.' },
            { s: 'I can’t come out this weekend: I’m **skint** until payday.', n: 'I have no money.' },
            { s: 'Come on, **use your loaf**!', n: 'Rhyming slang: *loaf of bread* = head, so *think*.' },
          ] },
        ],
        [
          { t: 'text', md: '**Politeness** has varieties too. Many British speakers use **understatement**, softening criticism until an outsider can miss it: *That’s an interesting idea* may mean *I think it is a bad idea*, and *Not bad at all* can be high praise. American professional English is often **more direct and more openly enthusiastic** (*Great job! This part doesn’t work for me*). Australian English values informality; in Indian professional English, *kindly* shows respect. Neither style is more polite: they put the politeness in different places. These are tendencies, not rules about every person.' },
          { t: 'table', caption: 'Understatement: what may be meant', explain: ['head', 'col1'], head: ['What is said', 'What may be meant'], rows: [
            ['That’s an interesting idea.', 'I am not convinced; it may be a bad idea.'],
            ['I’ll bear it in mind.', 'I probably won’t do anything about it.'],
            ['With the greatest respect…', 'I think you are wrong.'],
            ['Not bad at all.', 'Very good.'],
          ] },
        ],
        [
          { t: 'text', md: '**Taboo language** means words a community finds offensive in most situations: swearing, and **slurs**, words that insult people for their ethnicity, religion, disability, sex or sexuality. Swear words usually come from **religion**, the **body** or **sex**; slurs are in a class of their own and are not acceptable from anyone in any normal setting.\n\nThe strength of a swear word is **not fixed**: it depends on the variety, the generation and the situation. *Bloody* is a mild intensifier in Britain and Australia; some words Australians use almost affectionately are seriously offensive in the United States. So English has many **euphemisms** and **minced oaths** that keep the feeling without the offence: *gosh*, *heck*, *darn*, *flipping*, *for crying out loud*, and *pardon my French* as an apology for swearing.' },
          { t: 'tip', art: 'owl', md: 'Learn to **understand** strong language in films, songs and conversation, because you will meet it. Do not **use** it, even when native speakers around you do. A word that sounds casual in one group can end a friendship or a job interview in another, and listeners judge a learner’s swearing more harshly than a native speaker’s. If a dictionary marks a word *offensive* or *taboo*, leave it out; if you need to express strong feeling, a minced oath such as *for crying out loud* is enough.' },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I was gutted when I passed my exam.', 'I was chuffed when I passed my exam.', '*Gutted* means very disappointed.'],
            ['Dear Sir, I am knackered after the conference.', 'Dear Sir, I am rather tired after the conference.', 'Slang does not belong in a formal letter.'],
            ['She said “interesting idea”, so she likes it.', 'She said “interesting idea”; she may have doubts.', 'Understatement can hide disagreement.'],
            ['Using a swear word to sound fluent.', 'Using a minced oath such as *for crying out loud*.', 'Strong language is risky for learners.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each informal word with its meaning.', pairs: [
            ['gutted', 'very disappointed'],
            ['chuffed', 'very pleased'],
            ['knackered', 'exhausted'],
            ['skint', 'having no money'],
            ['stoked', 'delighted'],
          ] },
          { t: 'ex', kind: 'choice', h: 'A British colleague says each sentence below. What is the most likely meaning?', items: [
            { q: '“With the greatest respect, I think we may be missing something.”', o: ['I think you are wrong.', 'I admire you very much.', 'I have lost a document.'], why: '*With the greatest respect* introduces disagreement.' },
            { q: '“I’ll bear it in mind.” (about your suggestion)', o: ['I probably won’t act on it.', 'I will definitely do it.', 'I didn’t understand it.'], why: 'A polite way to put a suggestion aside.' },
            { q: '“Perhaps you could have a quick look at the figures.”', o: ['Please check the figures.', 'You may check them if you want.', 'The figures are perfect.'], why: 'A softened instruction.' },
            { q: '“Not bad at all, actually.” (about your report)', o: ['It is very good.', 'It is poor.', 'It is unfinished.'], why: 'Understatement: *not bad at all* is praise.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Would this sentence be safe in a job interview, or only with close friends?', groups: ['safe in a job interview', 'only with close friends'], explain: ['groups'], items: [
            { s: 'I was very disappointed when the project was cancelled.', g: 0, why: 'Neutral and clear.' },
            { s: 'I was absolutely gutted when they pulled the plug.', g: 1, why: '*Gutted* and *pulled the plug* are informal.' },
            { s: 'The workload was demanding, but I learned a great deal.', g: 0, why: 'Neutral, professional language.' },
            { s: 'My last boss was a total nightmare, pardon my French.', g: 1, why: 'Informal, and criticising a former boss is risky anyway.' },
          ] },
        ],
        [
          { t: 'text', md: 'In **C2 Proficiency Listening Part 4** you hear **five short monologues** on one theme, each about thirty-five seconds. You do **two tasks at the same time**: for each speaker you choose one option in Task One and one in Task Two. In the exam each task has **eight options**, so three in each are not used; here there are five, to fit the page. You hear the recordings twice.\n\nThe speakers never use the words of the options. They tell a story, and you match its **point**. Here, five people describe a time when informal or polite English confused them.' },
          { t: 'dialogue', title: 'Lost in translation, in English', lines: [
            { who: 'Raj', s: 'When I moved from Mumbai to Manchester, I sent my manager a proposal. He said it was an interesting idea and he’d bear it in mind. I took that as a yes and waited three weeks for a decision. A colleague finally explained that it had been a polite no. These days, when a meeting ends, I always ask what happens next and who is doing it.' },
            { who: 'Mei', s: 'My first month in Sydney, a colleague invited me to a barbecue and said, “Just bring a plate.” So I did. One clean plate, in my handbag. Everyone else had brought a salad or a cake to share. They were lovely about it, but now if an invitation sounds strange, I check with my flatmate before I go anywhere.' },
            { who: 'Gareth', s: 'I’m from Cardiff, and I spent a year in an office in New York. My boss read my first report and said it was quite good. To me, that’s faint praise, so I rewrote the whole thing over the weekend. On Monday she was baffled: she’d meant it was very good. Since then I listen to the tone and the face as much as to the words.' },
            { who: 'Amara', s: 'In Dublin my neighbour told me she’d been giving out to the council about the bins. I thought she meant she was handing out leaflets, and I offered to help. She laughed so much. Giving out means complaining. But that was the moment she started talking to me like one of the street, and now I give out about the bins with the best of them.' },
            { who: 'Sophie', s: 'I shared a flat with two Australians, and there was one word they used constantly, almost as a compliment. I picked it up without thinking. Then I used it at a family lunch with my partner’s parents in Ohio, and the room went silent. I hadn’t realised how much stronger it sounds there. Now I keep anything like that well away from people I don’t know well.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'In the format of the C2 Proficiency exam (Listening Part 4), Task One: what caused each speaker’s misunderstanding? In the exam there are eight options, three of them not used.', pairs: [
            ['Raj', 'a polite phrase that hid a refusal'],
            ['Mei', 'an everyday request taken literally'],
            ['Gareth', 'a word of degree understood differently'],
            ['Amara', 'a regional verb with an unexpected meaning'],
            ['Sophie', 'a word far stronger in one country than another'],
          ] },
          { t: 'ex', kind: 'match', h: 'Task Two: what does each speaker do or feel now?', pairs: [
            ['Raj', 'asks for clear next steps after a meeting'],
            ['Mei', 'checks unusual invitations with someone she lives with'],
            ['Gareth', 'pays attention to tone and expression, not only words'],
            ['Amara', 'sees local speech as a sign that she belongs'],
            ['Sophie', 'avoids strong language with people she is not close to'],
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 4**, each speaker usually touches on more than one option, and only one is the **main point**. Mei mentions her flatmate and her colleagues; the question is what she does **now**. Do Task One on the first listening and check it while doing Task Two on the second, or listen for both at once if you can.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor, with the right tone.', tutor: 'sofia', items: [
            { a: 'That’s an interesting idea. I’ll bear it in mind.' },
            { a: 'With the greatest respect, I think we may be missing something.' },
            { a: 'I was absolutely gutted when they cancelled it.' },
            { a: 'She was chuffed to bits with her results.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'Hereinafter and notwithstanding',
      about: 'Read the vocabulary and structures of legal and formal English, and rewrite a legal clause in plain English without changing what it means.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: '**Legal English** is the most conservative register of the language. Contracts, terms and conditions, wills and laws still use words that almost nobody says aloud: *hereinafter*, *notwithstanding*, *thereof*, *whereas*. There are reasons for this. A phrase whose meaning has been tested in court is **safer** than a new one, so lawyers reuse old wording. Much of the vocabulary came into English from **Latin** and **Law French**, the language of English courts for centuries. And legal drafting aims to close every gap a reader might use to escape an obligation, so it piles up words.\n\nThe result is **precise but heavy**. A C2 reader needs to understand it, because you will sign tenancy agreements, employment contracts and terms of service; and a C2 writer needs to know when **not** to imitate it.' },
          { t: 'table', caption: 'Formal and legal words, with plain equivalents', explain: ['head', 'col1'], head: ['Formal', 'Plain English'], rows: [
            ['hereinafter', 'from now on in this document'],
            ['notwithstanding', 'despite, even if'],
            ['thereof / therein', 'of it / in it'],
            ['whereby', 'by which, under which'],
            ['aforementioned / the said', 'this, that (already mentioned)'],
            ['pursuant to', 'under, in line with'],
            ['prior to / subsequent to', 'before / after'],
            ['in the event that', 'if'],
            ['forthwith', 'at once'],
          ] },
        ],
        [
          { t: 'text', md: 'Most of the strange words follow one pattern. ***Here-*** points to **this document** (*herein*, *hereby*, *hereto*); ***there-*** to **the thing just mentioned** (*thereof*, *therein*, *thereafter*); ***where-*** means **which** (*whereby*, *wherein*).\n\n***Whereas*** contrasts two facts in everyday English (*She prefers tea, whereas he drinks coffee*), but at the start of a contract it gives the **background**: *Whereas the parties wish to cooperate…* means *Because…* ***Notwithstanding*** means *despite* and can come before or after its noun (*Clause 4 notwithstanding*). Legal English also loves **doublets** (*null and void*, *terms and conditions*) and uses ***shall*** for obligation.' },
          { t: 'examples', items: [
            { s: 'Alimun Ltd, **hereinafter** “the Company”, agrees to the following.', n: 'From now on in this document it is called *the Company*.' },
            { s: '**Notwithstanding** clause 7, either party may end the agreement with a month’s notice.', n: 'Despite clause 7.' },
            { s: 'The Tenant shall keep the Property and the fixtures **therein** in good repair.', n: 'The fixtures in it.' },
            { s: 'An arrangement **whereby** staff may work from home on Fridays.', n: 'An arrangement under which.' },
            { s: '**Whereas** the Parties wish to set out the terms of their cooperation…', n: 'Because the parties wish to…' },
          ] },
        ],
        [
          { t: 'text', md: 'The **plain English movement** argues that legal and official documents should be written for the people who must **act on them**. Since the second half of the twentieth century, campaigners in Britain, the United States, Australia and elsewhere have pushed governments, banks and insurers to rewrite their forms and contracts.\n\nPlain English is **not** childish English: a good plain version keeps every legal effect. To simplify a clause, ask **who must do what, and when**. Make that person the subject of an active verb, turn heavy nouns back into verbs (*make payment* becomes *pay*), replace archaic words, cut doublets, split long sentences, and use *must* for a duty and *may* for a permission. Critics answer that tested wording is safer; supporters reply that dense prose hides more gaps than it closes.' },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['Notwithstanding of the delay, we will proceed.', 'Notwithstanding the delay, we will proceed.', '*Notwithstanding* takes no *of*.'],
            ['I am hereby writing to complain.', 'I am writing to complain.', '*Hereby* belongs to legal acts, not ordinary letters.'],
            ['You may pay the rent monthly. (for a duty)', 'You must pay the rent monthly.', 'In plain English a duty is *must*; *may* gives permission.'],
            ['The deposit is returned when the tenancy ends. (original: shall be returned within 14 days)', 'We must return your deposit within 14 days of the end of the tenancy.', 'Plain English keeps every condition.'],
          ] },
          { t: 'reading', title: 'A clause from a tenancy agreement, and its plain version', md: '**Original.** In the event that the Tenant shall fail to make payment of any instalment of rent within fourteen (14) days of the date upon which the same shall have become due, whether formally demanded or not, the Landlord shall be entitled, notwithstanding any other provision hereof, to recover the same together with interest thereon at the rate specified in Schedule 2 hereto.\n\n**Plain version.** If you do not pay any rent within 14 days of the date it is due, we may charge you interest on it at the rate in Schedule 2. This applies even if we have not asked you for the rent, and whatever any other part of this agreement says.\n\nThe plain version names the people (*you* and *we*), turns *make payment* into *pay*, replaces *notwithstanding any other provision hereof* with *whatever any other part of this agreement says*, and splits one sentence of more than sixty words into two shorter ones. Every condition is still there.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each formal word with its plain meaning.', pairs: [
            ['notwithstanding', 'despite'],
            ['thereof', 'of it'],
            ['whereby', 'by which'],
            ['forthwith', 'at once'],
            ['prior to', 'before'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the plain version that keeps the meaning of the original exactly.', items: [
            { q: 'The Employee shall give not less than one month’s notice in writing prior to the termination of employment.', o: ['You must give at least one month’s written notice before you leave.', 'You should try to tell us a month before you leave.', 'You may give one month’s notice when you leave.'], why: 'A duty (*must*), the minimum (*at least*) and the form (*written*) are all kept.' },
            { q: 'Notwithstanding the foregoing, the Company may vary these terms in the event of an emergency.', o: ['Despite what is written above, we may change these terms in an emergency.', 'Because of what is written above, we must change these terms in an emergency.', 'We may never change these terms, even in an emergency.'], why: '*Notwithstanding the foregoing* = despite what comes before.' },
            { q: 'Whereas the Parties wish to collaborate on the project, they hereby agree as follows.', o: ['Because the parties want to work together on the project, they agree to the following.', 'Although the parties want to work together, they disagree about the following.', 'The parties wanted to work together but now agree to stop.'], why: 'In a contract, *whereas* gives the background: *because*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite each clause in plain English, starting with the words given.', items: [
            { q: 'Payment of the deposit shall be made by the Tenant prior to the commencement of the tenancy.', cue: 'You must pay', a: ['You must pay the deposit before the tenancy starts.', 'You must pay the deposit before the tenancy begins.', 'You must pay the deposit before the start of the tenancy.'], why: 'Active verb, *you* as subject, *before* and *starts* for *prior to the commencement*.' },
            { q: 'In the event that the goods are damaged, the Customer shall notify the Company forthwith.', cue: 'If the goods', a: ['If the goods are damaged, you must tell us at once.', 'If the goods are damaged, you must tell us immediately.', 'If the goods are damaged, you must notify us at once.', 'If the goods are damaged, you must notify us immediately.', 'If the goods are damaged, the customer must tell the company at once.', 'If the goods are damaged, the customer must notify the company immediately.'], why: '*In the event that* = *if*; *forthwith* = *at once*; *shall* = *must*.' },
            { q: 'The said agreement is hereby declared null and void.', cue: 'This agreement', a: ['This agreement is invalid.', 'This agreement is no longer valid.', 'This agreement is now invalid.', 'This agreement is cancelled.'], why: '*The said* = *this*; *null and void* = *invalid*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 2): the sentences make one short text about plain English. Write one word in each gap.', items: [
            { q: 'For centuries, legal documents were written in a style few people outside the profession could follow, ___ was hardly surprising given their history.', a: ['which'], why: 'A relative pronoun referring to the whole previous clause: *which*.' },
            { q: 'Many old phrases came into English from Latin and French, and lawyers kept them partly out ___ habit.', a: ['of'], why: 'The fixed phrase *out of habit*.' },
            { q: 'Others survived because a phrase already tested in court seemed safer ___ a new one.', a: ['than'], why: 'A comparison: *safer than*.' },
            { q: 'Campaigners argue that a contract is of little use if the people ___ sign it cannot understand it.', a: ['who', 'that'], why: 'A relative pronoun for people: *who* or *that*.' },
            { q: '___ from making documents less precise, they say, clear writing often exposes gaps that dense prose hides.', a: ['Far'], why: 'The fixed phrase *Far from* + -ing.' },
            { q: 'A clause ___ as “the Tenant shall be liable for all costs arising therefrom” can usually be put more simply.', a: ['such'], why: '*Such as* introduces an example.' },
            { q: 'Not ___ lawyer has welcomed the change, and some still say familiar wording reduces the risk of a dispute.', a: ['every'], why: '*Not every* + singular noun.' },
            { q: 'Even so, some public bodies now require that new forms ___ tested on ordinary readers before they are used.', a: ['be'], why: 'The mandative subjunctive after *require that*: *be tested*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 2** there are **eight** gaps in one text, and the answers are mostly **grammar words**: pronouns, prepositions, articles, auxiliaries, parts of fixed phrases (*out of habit*, *far from*). Read the whole sentence, including what comes **after** the gap, before you decide. At C2, expect formal structures too: a relative *which* referring to a whole clause, or a subjunctive *be*.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'mei', items: [
            { a: 'Notwithstanding clause seven, either party may end the agreement.' },
            { a: 'If you do not pay within fourteen days, we may charge interest.' },
            { a: 'Plain English keeps every condition but removes the noise.' },
            { a: 'The Company hereby confirms your appointment.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'Whose English is it?',
      about: 'Follow a conversation between friends from four countries, then a radio discussion between speakers of different Englishes, with questions in the format of C2 Proficiency Listening Part 3.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'This lesson brings the unit together. First, four friends from Glasgow, Chicago, Sydney and Bengaluru plan a weekend away, each in their own English. Then a radio programme asks a harder question: if English belongs to so many people, who decides what is correct?\n\nAs you read the friends’ conversation, notice how they understand each other without effort. Each uses words from their own variety, and nobody stops to translate.' },
          { t: 'dialogue', title: 'Planning a weekend', lines: [
            { who: 'Callum', s: 'I’m knackered after this week, but aye, I’m up for it. Shall we take my car? The boot’s big enough for all of us.' },
            { who: 'Daniel', s: 'Sounds good. Mine has a tiny trunk, so I’ve gotten used to packing light. Is there an elevator at the cottage, or are we hauling bags upstairs?' },
            { who: 'Mia', s: 'There’s no lift, but no worries, it’s two floors. I’m stoked about the barbie on Saturday arvo, by the way.' },
            { who: 'Priya', s: 'I’ll try to prepone my Friday meeting so I can leave early. I’ll send everyone the address today itself.' },
            { who: 'Callum', s: 'Brilliant. If the weather’s dreich we can stay in and play cards.' },
            { who: 'Daniel', s: 'I’ll book the place. We can sort out the rest on the weekend.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Which friend’s variety does each word or phrase come from?', groups: ['Callum, Scotland', 'Daniel, United States', 'Mia, Australia', 'Priya, India'], explain: ['groups'], items: [
            { s: 'aye', g: 0, why: 'Scottish for *yes*.' },
            { s: 'dreich', g: 0, why: 'Scottish for cold, grey, wet weather.' },
            { s: 'I’ve gotten used to', g: 1, why: '*Gotten* is American.' },
            { s: 'on the weekend', g: 1, why: 'American preposition.' },
            { s: 'arvo', g: 2, why: 'Australian for *afternoon*.' },
            { s: 'stoked', g: 2, why: 'Australian (and American) for *delighted*.' },
            { s: 'prepone', g: 3, why: 'Indian English for *bring forward*.' },
            { s: 'today itself', g: 3, why: 'Indian English emphasis: *today, not later*.' },
          ] },
        ],
        [
          { t: 'text', md: 'In **C2 Proficiency Listening Part 3** you hear an **interview or discussion** of about four minutes and answer **five multiple-choice questions**, each with **four options**. You hear it twice. The questions follow the order of the recording and test **opinion, attitude and implication**: what a speaker believes, what they accept, why they mention an example.\n\nThe wrong options are carefully made. They often use words you **will** hear, but give the view of the other speaker, an idea the speaker rejects, or something stronger than what was said. Listen for the moments when speakers **qualify** or **concede**: *up to a point*, *fair enough*, *I’d agree, but*. The answer is often in what follows.' },
          { t: 'dialogue', title: 'Talking Point: whose English is it anyway?', lines: [
            { who: 'Presenter', s: 'On today’s programme: whose English is it anyway? I’m joined by Priya, a linguist in Bengaluru who studies how English is used in business; Callum, who teaches English at a secondary school in Glasgow; and Mia, who writes subtitles for films and series in Sydney. Priya, is there still such a thing as correct English?' },
            { who: 'Priya', s: 'There are correct Englishes, plural. Indian English has its own standard, with its own conventions in newspapers, in courts and in schools. What I find odd is that people who would never call American spelling a mistake will happily call an Indian usage one. Prepone is a perfectly logical word. The objection isn’t really about language at all. It’s about whose English has the prestige.' },
            { who: 'Presenter', s: 'Callum, you must hear that argument in the classroom.' },
            { who: 'Callum', s: 'All the time, though usually the other way round. My pupils switch between Scots at home and standard English in their essays, and some have been told, not always kindly, that their grandparents speak bad English. I don’t accept that. But I’d be letting them down if I didn’t teach them the standard written form as well, because that’s what employers and universities will judge them on, fairly or not.' },
            { who: 'Callum', s: 'So I teach them to choose. Knowing when to say aye and when to write yes isn’t a betrayal of where you come from. It’s a skill, and frankly it’s one that people who only ever speak one variety never get to develop.' },
            { who: 'Presenter', s: 'Mia, subtitles are an interesting case. Do you translate one English into another?' },
            { who: 'Mia', s: 'Less than people imagine. Years ago a series from here might have had its slang replaced for overseas viewers: arvo became afternoon. Now the instruction is usually to keep it. Audiences seem to enjoy working it out, and I think streaming has made people far more used to hearing an English that isn’t their own.' },
            { who: 'Priya', s: 'Can I pick up on that? Because the same thing is happening in business. When I started, Indian companies were told to sound as British or as American as possible on international calls. Now what we find is that being understood is what matters, and the hardest people to understand are often native speakers who talk fast, use idioms and never adjust.' },
            { who: 'Presenter', s: 'That’s quite a provocative claim.' },
            { who: 'Priya', s: 'It’s meant to be, a little. But on those calls you have a team in Pune, a client in Frankfurt and a supplier in São Paulo. English is their shared language, and it belongs to none of them.' },
            { who: 'Callum', s: 'I’d agree up to a point. But there’s a risk in saying anything goes. My pupils still need a model to aim at when they write. Being understood is a fine principle in a meeting, but it won’t get you through a job application.' },
            { who: 'Mia', s: 'Isn’t that just another kind of choosing, though? It’s what you described earlier: you pick the English that fits the audience.' },
            { who: 'Callum', s: 'Fair enough. Maybe the real lesson is that nobody speaks English as such. We all speak a version of it, and the good speakers know which version they’re using, and why.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Listening Part 3): choose the answer that fits best according to the discussion.', items: [
            { q: 'What is Priya’s main point about criticism of Indian English?', o: ['It reflects attitudes to status rather than to language.', 'It is justified because Indian English has no fixed standard.', 'It is mostly directed at American spelling.', 'It comes mainly from speakers in India itself.'], why: '*The objection isn’t really about language at all. It’s about whose English has the prestige.*' },
            { q: 'Why does Callum teach his pupils standard written English?', o: ['They will be judged on it, whether or not that is fair.', 'He believes Scots is less expressive than English.', 'Their families have asked him to discourage Scots.', 'Universities refuse to accept essays in Scots.'], why: '*That’s what employers and universities will judge them on, fairly or not.* He rejects the idea that Scots is *bad English*.' },
            { q: 'How does Callum describe the ability to move between Scots and standard English?', o: ['as an advantage that speakers of one variety lack', 'as a betrayal of his pupils’ background', 'as a habit teachers should gradually correct', 'as something only older pupils can manage'], why: '*It’s a skill… one that people who only ever speak one variety never get to develop.* *Betrayal* is the idea he rejects.' },
            { q: 'According to Mia, how has subtitling Australian series changed?', o: ['Local slang is now usually left as it is.', 'Slang is now always replaced with standard words.', 'Overseas viewers complain more about unfamiliar words.', 'Streaming services now ask for American English.'], why: '*Now the instruction is usually to keep it.*' },
            { q: 'What does Callum accept by the end of the discussion?', o: ['Choosing the right version of English for the audience is the key skill.', 'His pupils do not need a model for their writing.', 'Being understood matters more than any written standard.', 'Native speakers are always the hardest to understand.'], why: '*Fair enough… the good speakers know which version they’re using, and why.* He still holds that pupils need a model.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 3**, the wrong options often take a word from the recording and twist it. *Betrayal*, *prestige* and *a model* are all heard here, but Callum **rejects** the idea of betrayal, and Priya’s *anything goes* is Callum’s worry, not her claim. Before you choose, ask **who** said it, and whether they agreed with it.' },
        ],
        [
          { t: 'text', md: 'Now give your own view, as you would in **Speaking Part 3**, where you speak alone for two minutes from a question card and then discuss the topic. A card might ask: *Should learners aim to sound like native speakers?* Use what you have learned: name a variety, give an example of a difference, and make a balanced point. *I’d say the aim should be clarity rather than a particular accent. A friend of mine works with a team in Bengaluru, and what matters on their calls is that everyone can follow, not whether anyone sounds British.*' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor, as if you were giving your view in a discussion.', tutor: 'kofi', items: [
            { a: 'There are correct Englishes, plural, not one correct English.' },
            { a: 'Knowing when to say aye and when to write yes is a skill.' },
            { a: 'I would agree up to a point, but there is a risk in saying anything goes.' },
            { a: 'The good speakers know which version they are using, and why.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
      { q: 'In American English, to “table” a proposal means to…', o: ['postpone discussing it', 'put it forward for discussion', 'reject it'], why: 'American *table* = postpone; British *table* = put forward.' },
      { q: 'Which sentence is consistently British?', o: ['The neighbours queued on the pavement outside the theatre.', 'The neighbors queued on the pavement outside the theatre.', 'The neighbours queued on the sidewalk outside the theatre.'], why: 'British *neighbours*, *pavement*, *theatre*.' },
      { q: 'An Irish friend says, “I’m after phoning her.” This means…', o: ['I have just phoned her.', 'I am going to phone her.', 'I am trying to find her number.'], why: 'The Irish *after* perfect.' },
      { q: 'A British manager says your plan is “an interesting idea”. She probably…', o: ['has doubts about it', 'thinks it is excellent', 'has not read it'], why: 'Understatement can hide disagreement.' },
      { q: '“Notwithstanding the delay, the work will finish in May.” Notwithstanding means…', o: ['despite', 'because of', 'before'], why: '*Notwithstanding* = despite.' },
      { q: 'At the start of a contract, “Whereas the parties wish to cooperate…” means…', o: ['Because the parties wish to cooperate…', 'Although the parties wish to cooperate…', 'If the parties wish to cooperate…'], why: 'In a contract, *whereas* gives the background.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match each word with its meaning.', pairs: [
      ['gutted', 'very disappointed'],
      ['skint', 'having no money'],
      ['prepone', 'bring forward to an earlier time'],
      ['dreich', 'cold, grey and wet'],
      ['forthwith', 'at once'],
    ] },
    { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
      { q: 'She has ___ much better since the operation. (American English)', a: ['gotten'], why: 'American participle of *get*.' },
      { q: 'England ___ through to the final! (a British sports report)', a: ['are'], why: 'British plural verb with a collective noun.' },
      { q: 'Sorry about the swearing. Pardon my ___.', a: ['French'], why: 'The fixed apology.' },
      { q: 'Many offices now require that every form ___ tested on real readers.', a: ['be'], why: 'Mandative subjunctive after *require that*.' },
      { q: 'Lawyers kept the old phrases partly out ___ habit.', a: ['of'], why: '*Out of habit*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the word that does not belong in each sentence.', items: [
      { s: 'The [center] of the town has a new pavement.', a: ['centre'], why: 'British *pavement* needs British *centre*.' },
      { s: 'She parked on the sidewalk and put the bags in the [boot].', a: ['trunk'], why: 'American *sidewalk* needs American *trunk*.' },
      { s: 'Notwithstanding [of the] weather, the event will go ahead.', a: ['the'], why: '*Notwithstanding* takes no *of*.' },
      { s: 'I was [gutted] when I heard I had passed.', a: ['chuffed', 'delighted', 'thrilled'], why: 'Passing is good news: *chuffed*, not *gutted*.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite in plain English, starting with the words given.', items: [
      { q: 'In the event that you are unable to attend, kindly notify us forthwith.', cue: 'If you', a: ['If you cannot attend, please tell us at once.', 'If you cannot attend, please tell us immediately.', 'If you can’t attend, please tell us at once.', 'If you can’t attend, please tell us immediately.', 'If you cannot come, please tell us at once.', 'If you cannot come, please tell us immediately.', 'If you are unable to attend, please tell us at once.', 'If you are unable to attend, please tell us immediately.'], why: '*In the event that* = *if*; *forthwith* = *at once*.' },
      { q: 'Payment shall be made by the Customer prior to delivery.', cue: 'You must', a: ['You must pay before delivery.', 'You must pay before the delivery.', 'You must pay before we deliver.', 'You must pay before the goods are delivered.'], why: 'Active verb, *you*, and *before*.' },
    ] },
    { t: 'ex', kind: 'sort', h: 'Formal and legal, or informal?', groups: ['formal and legal', 'informal'], explain: ['groups'], items: [
      { s: 'hereinafter', g: 0, why: 'Legal: from now on in this document.' },
      { s: 'chuffed to bits', g: 1, why: 'British informal: very pleased.' },
      { s: 'null and void', g: 0, why: 'A legal doublet.' },
      { s: 'heaps of fun', g: 1, why: 'Australian informal.' },
    ] },
  ],
};
