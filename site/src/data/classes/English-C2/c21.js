// English C2, class 21 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u5:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c21',
  focus: 'By the end every student recognises the main differences of vocabulary, spelling and grammar between British and American English and the best-known features of Australian, Indian, Irish and Scottish English, spots the false friends that cause real misunderstandings (*quite, table, first floor, momentarily, homely*), and keeps one variety consistent in their own writing. The listening goal: catch the exact words of a speaker in the format of C2 Proficiency Listening Part 2.',
  tips: [
    'Present the varieties as equals: each is correct in its own place. Students often ask which one is right; the C2 answer is *the one your reader expects, used consistently*.',
    'False friends matter more than *lift* and *elevator*, because nobody notices the misunderstanding until it costs something. Spend most of the vocabulary time on them.',
    'Students may choose either British or American spelling in the exam, but must not mix them. Ask them to decide today which they will use and stick to it.',
    'In the listening, read the script aloud at a natural speed, twice, as in the exam. Do not slow down for the gaps: the task is to hear the answer at normal speed.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Which English did you learn first, and which do you hear most now? Has a word from another variety ever confused you?* Collect the examples on the board.' },
    { min: 12, title: 'British or American?', md: 'Show board page 1, then page 2. Students sort the sentences, then decide what each speaker most probably means and say what a listener from the other variety might understand.' },
    { min: 8, title: 'Keep it consistent', md: 'Show board page 3. Students fix the word that breaks the variety in each sentence and explain the pattern.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 15, title: 'Exam corner', md: 'Show board page 4: C2 Proficiency Listening Part 2. Give students forty-five seconds to read the sentences and predict the type of word. Read the script aloud twice at natural speed. Check the answers and spelling together.' },
    { min: 5, title: 'Close', md: 'Each student says which variety they will write in and one false friend they will avoid in international emails. Set the homework.' },
  ],
  board: [
    { title: 'British or American?', blocks: [
      { t: 'ex', kind: 'sort', h: 'Is each sentence typically British or typically American?', groups: ['British', 'American'], items: [
        { s: 'The committee have not yet agreed among themselves.', g: 0, why: 'A plural verb with a collective noun is British.' },
        { s: 'Prices have gotten much higher since the spring.', g: 1, why: '*Gotten* as the past participle of *get* (become) is American.' },
        { s: 'We’ll see you at the weekend, then.', g: 0, why: 'British *at the weekend*; American English says *on the weekend*.' },
        { s: 'The board recommended that she be promoted.', g: 1, why: 'The mandative subjunctive without *should* is much more common in American English.' },
        { s: 'I’ve just been to the chemist for some plasters.', g: 0, why: 'British *chemist* and *plasters*; American *drugstore* and *Band-Aids*.' },
        { s: 'Write me when you get to the apartment.', g: 1, why: '*Write me* without *to*, and *apartment*.' },
      ] },
    ] },
    { title: 'False friends', blocks: [
      { t: 'ex', kind: 'choice', h: 'What does the speaker most probably mean?', items: [
        { q: 'A pilot on an American flight: “We will be landing momentarily.”', o: ['We will land in a few moments.', 'We will land for a very short time.', 'We will not land after all.'], why: 'In American English *momentarily* often means *very soon*; in British English it means *for a moment*.' },
        { q: 'A British receptionist: “Your meeting room is on the first floor.”', o: ['One floor up from the entrance.', 'At street level.', 'In the basement.'], why: 'In Britain the floor at street level is the *ground floor*; in the United States it is the *first floor*.' },
        { q: 'An American friend describes a guest house as “rather homely”.', o: ['It is plain and unattractive.', 'It is warm and comfortable.', 'It is run by a family.'], why: 'American *homely* means plain-looking; British *homely* means cosy and welcoming.' },
        { q: 'A British manager reads your proposal and says it is “quite interesting”.', o: ['It is of some interest, but she is not enthusiastic.', 'She finds it extremely interesting.', 'She has not read it yet.'], why: 'British *quite* + ordinary adjective usually means *fairly*, often with polite reserve.' },
      ] },
      { t: 'tip', md: 'When a misunderstanding could cost time or money, replace the variety-specific word with one that means the same everywhere: *in a few minutes*, *one floor up*, *next month’s meeting*.' },
    ] },
    { title: 'Keep it consistent', blocks: [
      { t: 'ex', kind: 'fix', h: 'Each sentence is from a text in one variety. Find and fix the word that breaks it.', items: [
        { s: 'British: The neighbours organised a street party in the town [center].', a: ['centre'], why: 'British spelling to match *neighbours* and *organised*: *centre*.' },
        { s: 'American: The program was canceled because the theater roof needed [labour].', a: ['labor'], why: 'American spelling to match *program*, *canceled* and *theater*.' },
        { s: 'British: She has [gotten] much more confident since she started her new job.', a: ['got', 'become'], why: 'British English does not use *gotten*.' },
        { s: 'British: We were [traveling] for three days before we reached the coast.', a: ['travelling'], why: 'British English doubles the *l*: *travelling*.' },
        { s: 'American: Our team [are] meeting with the client on Monday.', a: ['is'], why: 'American English almost always uses a singular verb with a collective noun.' },
      ] },
    ] },
    { title: 'Exam corner: Listening Part 2', blocks: [
      { t: 'dialogue', title: 'Script for the teacher to read aloud twice: one English for four offices', lines: [
        { who: 'Anna', s: 'When our company opened offices in four countries, the first question I was asked was which English we would use. People expected me to say British, because the head office is in Leeds. In the end we chose American spelling, simply because most of our clients were in North America and our software already used it.' },
        { who: 'Anna', s: 'What we didn’t do was ask everyone to sound American. The style guide covers spelling and punctuation, but it says almost nothing about vocabulary, apart from one list I call the danger words. Those are words like *table* and *quite*, which mean different things on either side of the Atlantic.' },
        { who: 'Anna', s: 'The biggest surprise was dates. We once lost a whole shipment because someone in Chicago read the seventh of March as the third of July. Since then, every date in a contract has been written with the month as a word.' },
        { who: 'Anna', s: 'The most common complaint I hear comes from British colleagues, who say the guide has taken away their letter u. I tell them the guide is about consistency, not loyalty. A document that mixes two spellings of *colour* looks careless to every reader, whichever side they are on.' },
        { who: 'Anna', s: 'My advice to any organisation is to decide early, write the decision down, and make one person responsible for answering questions. Otherwise the argument starts again with every new employee.' },
      ] },
      { t: 'ex', kind: 'gap', h: 'In the format of the C2 Proficiency exam (Listening Part 2), shortened to five sentences: complete the sentences with a word or short phrase from Anna’s talk.', items: [
        { q: 'The company chose American spelling because most of its ___ were in North America.', a: ['clients'], why: '*Most of our clients were in North America.* Write the word you hear, not *customers*.' },
        { q: 'Anna keeps a list of what she calls the ___.', a: ['danger words'], why: '*One list I call the danger words.*' },
        { q: 'A misread date once led to the loss of a ___.', a: ['shipment', 'whole shipment'], why: '*We once lost a whole shipment.*' },
        { q: 'In contracts, the ___ is now always written as a word.', a: ['month'], why: '*Every date… written with the month as a word.*' },
        { q: 'Anna tells British critics that the guide is about consistency rather than ___.', a: ['loyalty'], why: '*Consistency, not loyalty.* *Spelling* is heard nearby but does not fit the sentence.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Method for **Listening Part 2**: read every sentence before the recording and predict the type of word (a plural noun after *most of its*, a noun after *a*). The sentences paraphrase the talk, so listen for the idea, then write the exact word you hear and check its spelling.' },
    ] },
  ],
  activities: {
    one: { title: 'International English', md: 'Play a colleague from another variety in a short work call (an American project manager, an Indian client, a Scottish supplier) and use three or four variety-specific words or false friends (*table it*, *revert*, *first floor*, *quite good*). The student must notice each one, check the meaning politely (*Just to be sure, do you mean…?*) and restate the agreement in clear international English at the end. Swap roles once: the student uses the words and you check.' },
    small: { title: 'Danger words', md: 'Each student chooses one false friend or variety-specific word from today and says a sentence with it, as a speaker of that variety would. The others say what a listener from a different variety might understand. The group then rewrites the sentence so that it means the same everywhere. Finish by agreeing a list of five danger words for the group’s next international email.' },
  },
  homework: { book: 'u5:p1', md: 'Finish lesson 1 of unit 5 if needed, then do lesson 2 (Gutted, chuffed and knackered). Write an email of about 150 words to colleagues in three countries about a change of meeting date and place, in one consistent variety and without any false friends.' },
};
