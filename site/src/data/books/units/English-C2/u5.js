// English C2, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Varieties of English',
  goal: 'Understand the main varieties of English and choose between them.',
  art: 'suitcase',
  tags: { skills: ['vocabulary', 'reading', 'listening'], topics: ['British English', 'American English', 'Australian English', 'Indian English', 'Scots', 'slang', 'legal English', 'plain English'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Lift or elevator?',
      about: 'Recognise the main differences between British, American, Australian, Indian and Scottish English.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'text', md: 'English is a **family** of varieties, not one language with a single correct form. Each has a standard form and a character of its own. The most visible differences are in **vocabulary**: British *lift*, *pavement*, *flat*, *boot* (of a car), *biscuit*, *jumper*, *queue* correspond to American *elevator*, *sidewalk*, *apartment*, *trunk*, *cookie*, *sweater*, *line*. **Spelling** differs too: British *colour, centre, programme, travelling*; American *color, center, program, traveling*. British writers can use *-ise* or *-ize* (*realise* or *realize*); American writers use *-ize*.' },
          { t: 'table', caption: 'British and American', explain: ['head', 'col0'], head: ['British', 'American', 'Meaning'], rows: [
            ['lift', 'elevator', 'a lift in a building'],
            ['pavement', 'sidewalk', 'a path beside the road'],
            ['flat', 'apartment', 'a home in a larger building'],
            ['boot', 'trunk', 'the luggage space of a car'],
            ['biscuit', 'cookie', 'a small sweet baked item'],
            ['colour / centre', 'color / center', 'spelling'],
          ] },
        ],
        [
          { t: 'text', md: '**Grammar** differs in small ways. American English uses **gotten** as the past participle of *get* (*She has gotten better*); British English uses *got* (*She has got better*). British speakers say *Have you got a pen?* more often than Americans, who say *Do you have a pen?* British speakers can use a **plural verb** with a collective noun (*The team are playing well*); Americans prefer a singular one (*The team is playing well*). British: *at the weekend*, *different to / from*; American: *on the weekend*, *different from / than*.' },
          { t: 'text', md: 'Other varieties have their own character. **Australian English** shortens words and adds *-ie* or *-o*: *brekkie* (breakfast), *arvo* (afternoon), *barbie* (barbecue); *no worries* means *you’re welcome*. **Indian English** has forms such as *prepone* (move to an earlier time) and *do the needful* (do what is necessary). **Scots** has *wee* (small), *aye* (yes) and *ken* (know).' },
          { t: 'tip', art: 'owl', md: 'You do not need to speak every variety. You need to **understand** them, and to be **consistent** in your own: do not write *colour* and *center* in the same text, or *lift* and *sidewalk*. Choose one variety for each piece of writing.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the British word with the American one.', pairs: [
            ['lift', 'elevator'],
            ['pavement', 'sidewalk'],
            ['biscuit', 'cookie'],
            ['boot', 'trunk'],
          ] },
          { t: 'ex', kind: 'sort', h: 'Which variety?', groups: ['British', 'American'], explain: ['groups'], items: [
            { s: 'colour', g: 0, why: 'British spelling.' },
            { s: 'sidewalk', g: 1, why: 'American vocabulary.' },
            { s: 'The team are playing well.', g: 0, why: 'Plural verb with a collective noun.' },
            { s: 'She has gotten better.', g: 1, why: '*Gotten* is American.' },
            { s: 'at the weekend', g: 0, why: 'British.' },
            { s: 'on the weekend', g: 1, why: 'American.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
            { q: 'In Australian English, “arvo” means…', o: ['afternoon', 'avocado', 'argument'], why: 'Australian shortening: *arvo* = afternoon.' },
            { q: 'In Indian English, “prepone” means…', o: ['move to an earlier time', 'move to a later time', 'cancel'], why: 'The opposite of *postpone*.' },
            { q: 'In Scots, “wee” means…', o: ['small', 'wet', 'wise'], why: '*Wee* = small.' },
            { q: 'Which sentence is consistently American?', o: ['The center of the city has a new sidewalk.', 'The centre of the city has a new sidewalk.', 'The center of the city has a new pavement.'], why: 'Do not mix varieties.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite in British English.', items: [
            { q: 'She took the elevator to her apartment.', cue: 'She took the lift', a: ['She took the lift to her flat.'], why: 'British *lift* and *flat*.' },
            { q: 'He parked on the sidewalk and put the bags in the trunk.', cue: 'He parked on the pavement', a: ['He parked on the pavement and put the bags in the boot.'], why: 'British *pavement* and *boot*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Gutted, stoked and chuffed',
      about: 'Understand informal, regional and polite language, and know when to use it.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: '**Slang** is informal, often regional or generational language. It changes quickly, so trying to learn it all is pointless; but you should recognise common words. In British English, **gutted** means *very disappointed*, **chuffed** means *very pleased*, **knackered** means *very tired*. In American English, **bummed (out)** means *disappointed*. In Australian English, **stoked** means *delighted*. A friend can be a **mate** (British, Australian) or a **buddy** (American).' },
          { t: 'table', caption: 'Informal words', explain: ['head', 'col0'], head: ['Word', 'Meaning', 'Variety'], rows: [
            ['gutted', 'very disappointed', 'British'],
            ['chuffed', 'very pleased', 'British'],
            ['knackered', 'very tired', 'British'],
            ['bummed out', 'disappointed', 'American'],
            ['stoked', 'delighted', 'Australian'],
            ['mate / buddy', 'friend', 'British, Australian / American'],
          ] },
        ],
        [
          { t: 'text', md: '**Politeness** also varies. British speakers often soften requests and opinions with indirect phrases: *I wonder if you could…*, *That’s not quite what I had in mind* (= I disagree), *With the greatest respect…* (= I think you are wrong). Americans are often more direct and warm in a different way: *Sure, no problem.* *Great job!* These styles can cause misunderstandings: the British *quite good* may mean *fairly good*, while the American *pretty good* may mean *very good*.' },
          { t: 'tip', art: 'owl', md: '**Taboo** language (swearing and offensive terms) is much more common in some groups and settings than in others, and it can seriously offend. Learn to **understand** it in films and conversation, but as a learner do not use it, especially in writing or at work. If a word is marked *offensive* in a dictionary, avoid it.' },
          { t: 'ex', kind: 'match', h: 'Match the informal word with its meaning.', pairs: [
            ['gutted', 'very disappointed'],
            ['chuffed', 'very pleased'],
            ['knackered', 'very tired'],
            ['stoked', 'delighted'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What does the speaker really mean?', items: [
            { q: '“With the greatest respect, I think you’ve missed the point.”', o: ['I disagree with you.', 'I respect you completely.', 'I did not understand.'], why: '*With the greatest respect* often introduces disagreement.' },
            { q: '“That’s not quite what I had in mind,” said the manager about the report.', o: ['It is not what I wanted.', 'It is exactly right.', 'I did not read it.'], why: 'A polite British way to express disapproval.' },
            { q: '“I’m absolutely gutted,” she said when she lost the final.', o: ['She is very disappointed.', 'She is very angry.', 'She is very hungry.'], why: '*Gutted* = very disappointed.' },
            { q: '“I wonder if you could possibly help me.”', o: ['A polite request.', 'A question about a wonder.', 'An order.'], why: 'An indirect, polite request.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with the informal word from the lesson.', items: [
            { q: 'After the long flight, I was totally ___. (British: very tired)', a: ['knackered'], why: '*Knackered* = very tired.' },
            { q: 'We were so ___ when we won the match! (British: very pleased)', a: ['chuffed'], why: '*Chuffed* = very pleased.' },
            { q: 'My friend in Sydney said he was ___ about the concert. (Australian: delighted)', a: ['stoked'], why: '*Stoked* = delighted.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Direct or indirect?', groups: ['direct', 'indirect'], explain: ['groups'], items: [
            { s: 'I disagree.', g: 0, why: 'Very direct.' },
            { s: 'With the greatest respect, I wonder if that is quite right.', g: 1, why: 'Softened with several phrases.' },
            { s: 'That is wrong.', g: 0, why: 'Very direct.' },
            { s: 'I’m not sure that is quite what we need.', g: 1, why: 'A soft way to disagree.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Hereinafter and notwithstanding',
      about: 'Read formal and legal English and rewrite it in plain English.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'Legal and formal documents use words that almost nobody uses in speech. **Hereinafter** means *from this point in the document*. **Notwithstanding** means *despite*. **Thereof** means *of it*. **Whereby** means *by which*. **Aforementioned** means *mentioned earlier*. **Pursuant to** means *under* or *in accordance with*. **Herein** means *in this document*. They make a text precise, but also heavy and hard for ordinary readers.' },
          { t: 'table', caption: 'Formal words and plain alternatives', explain: ['head', 'col0'], head: ['Formal', 'Plain English'], rows: [
            ['hereinafter', 'from now on'],
            ['notwithstanding', 'despite'],
            ['thereof', 'of it'],
            ['whereby', 'by which'],
            ['aforementioned', 'the above / this'],
            ['pursuant to', 'under'],
            ['commence', 'start'],
          ] },
        ],
        [
          { t: 'text', md: 'The **plain English movement** argues that official documents should be clear to the reader, without losing legal accuracy. Its advice: use short sentences, active verbs, common words and a direct *you* for the reader. Compare *The aforementioned party shall commence payment thereof pursuant to the terms herein* with *You must start paying under these terms.*' },
          { t: 'tip', art: 'owl', md: 'In an exam, you may be asked to **rewrite** a formal sentence in plain English. Keep the meaning exactly the same: change the **words** and the **structure** (passive to active, long to short) but not the **facts**. Keep *shall* and *must* where the obligation is important.' },
          { t: 'ex', kind: 'match', h: 'Match the formal word with its plain meaning.', pairs: [
            ['notwithstanding', 'despite'],
            ['thereof', 'of it'],
            ['whereby', 'by which'],
            ['pursuant to', 'under'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the plain English version.', items: [
            { q: 'The tenant shall commence payment of rent on the first day of the month.', o: ['The tenant must start paying rent on the first day of the month.', 'The tenant may possibly pay rent when convenient.', 'The tenant has paid rent already.'], why: 'Plain English keeps the obligation.' },
            { q: 'Notwithstanding the aforementioned clause, the contract remains valid.', o: ['Despite the clause above, the contract is still valid.', 'Because of the clause above, the contract is cancelled.', 'The clause above and the contract are the same.'], why: '*Notwithstanding* = despite.' },
            { q: 'This agreement, hereinafter called “the Contract”…', o: ['From now on, we call this agreement “the Contract”.', 'This is a copy of the Contract.', 'The Contract was called yesterday.'], why: '*Hereinafter* = from now on.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite in plain English, starting with the words given.', items: [
            { q: 'The party shall commence payment thereof pursuant to this agreement.', cue: 'You must start', a: ['You must start paying it under this agreement.', 'You must start paying under this agreement.', 'You must start paying for it under this agreement.'], why: 'Short words and a direct *you*.' },
            { q: 'Notwithstanding the weather, the event will proceed.', cue: 'Despite', a: ['Despite the weather, the event will go ahead.', 'Despite the weather, the event will take place.', 'Despite the weather, the event will proceed.'], why: '*Notwithstanding* becomes *despite*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with the formal word.', items: [
            { q: 'The ___ clause remains in force. (mentioned earlier)', a: ['aforementioned'], why: '*Aforementioned* = mentioned earlier.' },
            { q: 'An agreement ___ the seller transfers the goods to the buyer. (by which)', a: ['whereby'], why: '*Whereby* = by which.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Four friends, four Englishes',
      about: 'Read a conversation between speakers of different varieties.',
      art: 'sun',
      spreads: [
        [
          { t: 'reading', title: 'Four friends, four Englishes', md: 'Fiona (from Glasgow), Dwight (from Texas), Mia (from Sydney) and Anil (from Delhi) are planning a weekend away.\n\nFIONA: I’m knackered, but aye, I’m up for it. Shall we take the car? The boot is big enough for all our bags.\n\nDWIGHT: Sure thing. My trunk back home is smaller, so I’ve gotten used to packing light. Is there an elevator at the hotel?\n\nMIA: There’s a lift, no worries. I’m stoked about the barbie on Saturday arvo. Anil, you’re quiet.\n\nANIL: I wanted to prepone my meeting so that I can join you. I’ll do the needful tonight.\n\nFIONA: That’s a wee bit of effort for a weekend. I’m chuffed you’re coming!\n\nDWIGHT: Great job, everybody. I’ll book the rooms; we’ll sort out the details on the weekend.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'The four friends are planning a weekend away.', a: 't', why: '“Planning a weekend away.”' },
            { q: 'Fiona is very tired but still wants to go.', a: 't', why: '“I’m knackered, but aye, I’m up for it.”' },
            { q: 'Dwight uses “gotten”, an American form.', a: 't', why: '“I’ve gotten used to packing light.”' },
            { q: 'Anil wants to move his meeting to a later time.', a: 'f', why: '*Prepone* means to move earlier.' },
            { q: 'Mia is looking forward to a barbecue on Saturday afternoon.', a: 't', why: '“Stoked about the barbie on Saturday arvo.”' },
            { q: 'The hotel is by the sea.', a: 'ng', why: 'The text does not say.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Which word shows that Fiona is Scottish?', o: ['aye', 'trunk', 'arvo'], why: '*Aye* is Scots for *yes*.' },
            { q: 'Which word shows that Dwight is American?', o: ['elevator', 'lift', 'boot'], why: 'American vocabulary.' },
            { q: 'Which words show that Mia is Australian?', o: ['barbie and arvo', 'wee and aye', 'prepone and needful'], why: 'Australian shortenings.' },
            { q: 'Which phrase is typical of Indian English?', o: ['do the needful', 'no worries', 'sure thing'], why: '*Do the needful* is common in Indian English.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the word from the text with its meaning.', pairs: [
            ['knackered', 'very tired'],
            ['stoked', 'delighted'],
            ['chuffed', 'very pleased'],
            ['prepone', 'move to an earlier time'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the text.', items: [
            { q: 'The ___ of the car is big enough for all our bags. (British)', a: ['boot'], why: 'British word for the car’s luggage space.' },
            { q: 'There’s a lift, no ___.', a: ['worries'], why: 'The Australian phrase *no worries*.' },
            { q: 'I’ve ___ used to packing light. (American)', a: ['gotten'], why: 'American participle.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Which speaker said it?', groups: ['Fiona or Mia', 'Dwight or Anil'], explain: ['groups'], items: [
            { s: 'aye', g: 0, why: 'Fiona, from Scotland.' },
            { s: 'arvo', g: 0, why: 'Mia, from Australia.' },
            { s: 'gotten', g: 1, why: 'Dwight, from the United States.' },
            { s: 'prepone', g: 1, why: 'Anil, from India.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
      { q: 'American English for “lift” is…', o: ['elevator', 'escalator', 'stairs'], why: 'American vocabulary.' },
      { q: 'In Australian English, “arvo” means…', o: ['afternoon', 'avocado', 'argument'], why: 'Australian shortening.' },
      { q: '“With the greatest respect, I think you’re wrong” is…', o: ['a polite disagreement', 'a compliment', 'a question'], why: 'Indirect disagreement.' },
      { q: 'Notwithstanding the weather, the event will go ahead. “Notwithstanding” means…', o: ['despite', 'because of', 'before'], why: '*Notwithstanding* = despite.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
      ['knackered', 'very tired'],
      ['chuffed', 'very pleased'],
      ['prepone', 'move to an earlier time'],
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentence.', items: [
      { q: 'The ___ clause remains in force. (mentioned earlier)', a: ['aforementioned'], why: '*Aforementioned*.' },
      { q: 'She has ___ better since the operation. (American participle of get)', a: ['gotten'], why: '*Gotten* is American.' },
      { q: 'The team ___ playing well. (British, plural verb)', a: ['are'], why: 'British plural verb with a collective noun.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite, using the words given.', items: [
      { q: 'She took the elevator to her apartment.', cue: 'She took the lift', a: ['She took the lift to her flat.'], why: 'British vocabulary.' },
      { q: 'The party shall commence payment pursuant to this agreement.', cue: 'You must start', a: ['You must start paying under this agreement.', 'You must start paying it under this agreement.'], why: 'Plain English.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mixture of varieties.', items: [
      { s: 'The [center] of the town has a new pavement.', a: ['centre'], why: 'British *pavement* needs British *centre*.' },
      { s: 'She parked on the sidewalk and put the bags in the [boot].', a: ['trunk'], why: 'American *sidewalk* needs American *trunk*.' },
    ] },
  ],
};
