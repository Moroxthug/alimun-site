// English C1 for moving abroad, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Settling for the long term',
  goal: 'Talk about long-term residence, citizenship and your own journey with depth and nuance.',
  art: 'sun',
  tags: { skills: ['reading', 'grammar', 'vocabulary', 'speaking'], topics: ['residence', 'citizenship', 'eligibility', 'mixed-conditionals', 'wish', 'inverted-conditionals', 'identity', 'belonging'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'Staying for good',
      about: 'Understand the language of long-term residence and citizenship, in general terms.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'After some years abroad, many people think about staying for good. Most countries offer some form of **permanent residence**, and many allow residents to become citizens through **naturalisation**. The rules vary enormously and change over time: how long you must have lived there, whether you may keep your first nationality, and what tests or fees are involved. Always check the official guidance for your own situation; this lesson only teaches the language you will meet.' },
          { t: 'table', caption: 'Words of residence and citizenship', explain: ['head', 'col1'], quiz: true, head: ['Term', 'Meaning'], rows: [
            ['a residence permit', 'a document that allows you to live in a country'],
            ['permanent residence', 'the right to live in a country with no end date'],
            ['naturalisation', 'the legal process of becoming a citizen'],
            ['eligible for', 'meeting the conditions for something'],
            ['continuous residence', 'living in the country without long breaks'],
            ['dual nationality', 'being a citizen of two countries at the same time'],
            ['a citizenship ceremony', 'an event where new citizens make a promise or pledge'],
          ] },
        ],
        [
          { t: 'text', md: 'Official guidance on residence is usually written impersonally. It describes **requirements**, **conditions** and **exceptions**, often with the passive and with nouns in place of verbs.' },
          { t: 'examples', items: [
            { s: 'Applicants **are normally required to have lived** in the country for a set number of years.', n: '*Be required to have* + past participle: something must already be true when you apply.' },
            { s: 'You **may be eligible** to apply **if** you are married to a citizen.', n: '*Eligible to* + verb, or *eligible for* + noun. *May* means it depends on details.' },
            { s: '**Time spent** outside the country **may not count** towards the qualifying period.', n: 'The *qualifying period* is the time you need before you can apply.' },
            { s: 'Applicants **are expected to demonstrate** knowledge of the language.', n: '*Demonstrate* means show, often with a test or a certificate.' },
            { s: '**Should** your circumstances change, you **must** inform the office.', n: 'An inverted conditional: *should* means *if*. Very common in official texts.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Watch the difference between *may* and *must* in official guidance. *You must provide* is a requirement. *You may be asked to provide* means it is possible, so keep the document ready.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the term and its meaning.', pairs: [
            ['naturalisation', 'becoming a citizen through a legal process'],
            ['eligible', 'meeting the conditions'],
            ['dual nationality', 'being a citizen of two countries'],
            ['qualifying period', 'the time you must live somewhere before applying'],
            ['residence permit', 'a document that lets you live in a country'],
            ['demonstrate', 'show, for example with a test'],
          ] },
          { t: 'ex', kind: 'colloc', h: 'Which words go with the key word?', items: [
            { key: 'meet', o: ['the requirements', 'the conditions', 'the criteria', 'a permit', 'a nationality'], a: [0, 1, 2], why: 'You *meet* requirements, conditions or criteria: you satisfy them.' },
            { key: 'apply for', o: ['citizenship', 'a residence permit', 'permanent residence', 'eligible', 'continuous'], a: [0, 1, 2], why: '*Apply for* + noun. *Eligible* and *continuous* are adjectives.' },
            { key: 'renew', o: ['a permit', 'a passport', 'a visa', 'a ceremony', 'a citizen'], a: [0, 1, 2], why: 'Documents with an end date can be *renewed*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What does the guidance mean?', items: [
            { q: '“Applicants must have been continuously resident for five years.”', o: ['You must have lived there for five years without long breaks.', 'You must stay for five more years after you apply.', 'You can apply after any five visits.'], why: '*Must have been resident* refers to the time before applying; *continuously* means without long breaks.' },
            { q: '“You may be asked to attend an interview.”', o: ['An interview is possible but not certain.', 'Everyone must attend an interview.', 'Interviews are not allowed.'], why: '*May be asked*: it is possible.' },
            { q: '“Should you wish to withdraw your application, please write to us.”', o: ['If you want to cancel your application, write to us.', 'You should cancel your application.', 'You must write to us every month.'], why: 'An inverted conditional: *Should you wish* = *If you wish*.' },
            { q: '“Time spent abroad for work may count towards the qualifying period.”', o: ['Time abroad for work might be included in the time you need.', 'Time abroad for work is never included.', 'You must work abroad before you apply.'], why: '*Count towards*: be included in a total.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with one word.', items: [
            { q: 'After five years, she became ___ for permanent residence.', a: ['eligible'], why: '*Eligible for* + noun.' },
            { q: 'Applicants are expected to ___ a good knowledge of the language.', a: ['demonstrate', 'show', 'have'], why: '*Demonstrate* (or *show*) knowledge.' },
            { q: 'Long periods abroad may not count ___ the qualifying period.', a: ['towards', 'toward'], why: '*Count towards* a total. *Toward* is more common in American English.' },
            { q: 'Make sure you ___ your permit before it expires.', a: ['renew'], why: '*Renew* a document: get a new one when the old one ends.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'If I had never left',
      about: 'Look back and imagine with mixed conditionals, wish, if only and inverted conditionals.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Talking about a long move means imagining other versions of your life. **Mixed conditionals** link an imagined past to the present, or a present fact to the past. **Wish** and **if only** express regret or longing. **Inverted conditionals** with *had*, *were* and *should* are more formal and often used in writing.' },
          { t: 'table', caption: 'Imagining other lives', explain: ['head', 'col0'], head: ['Pattern', 'Example'], rows: [
            ['past condition → present result', 'If I **hadn’t taken** that job, I **wouldn’t be living** here now.'],
            ['present condition → past result', 'If I **were** more patient, I **would have learned** the language faster.'],
            ['wish + past (present regret)', 'I **wish** my parents **lived** closer.'],
            ['wish + past perfect (past regret)', 'I **wish** I **had started** lessons earlier.'],
            ['wish + would (annoyance or wanting a change)', 'I **wish** people **would stop** asking when I’m going home.'],
            ['inverted: had', '**Had I known** how hard it would be, I might not have come.'],
            ['inverted: were', '**Were I to** move again, I’d plan it differently.'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'Ten years on', lines: [
            { who: 'Leila', s: 'Can you believe it’s been ten years? If you’d told me back then that I’d still be here, I’d have laughed.' },
            { who: 'Diego', s: 'Same. If I hadn’t met Sara in my first year, I’d probably be back in Valencia by now.' },
            { who: 'Leila', s: 'Do you ever wish you’d stayed at home?' },
            { who: 'Diego', s: 'Sometimes. I wish I saw my parents more, that’s the main thing. But had I stayed, I wouldn’t have the life I’ve got now.' },
            { who: 'Leila', s: 'I know what you mean. If only I’d taken the language more seriously at the start. It took me years to feel confident.' },
            { who: 'Diego', s: 'Come off it, your English is better than mine.' },
            { who: 'Leila', s: 'Now, maybe. And I wish people would stop asking me where I’m really from.' },
            { who: 'Diego', s: 'Were you to apply for citizenship, would that change anything for you?' },
            { who: 'Leila', s: 'On paper, yes. In my head, I think I decided I was staying a long time ago.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Think about the conversation. True, false or not given?', items: [
            { q: 'Ten years ago, Leila expected to stay this long.', a: 'f', why: 'She says she would have laughed if someone had told her.' },
            { q: 'Meeting Sara is one reason Diego stayed.', a: 't', why: '*If I hadn’t met Sara… I’d probably be back in Valencia.*' },
            { q: 'Diego’s parents live in the same city as him.', a: 'f', why: '*I wish I saw my parents more* suggests they live far away.' },
            { q: 'Leila regrets not studying the language harder at the beginning.', a: 't', why: '*If only I’d taken the language more seriously at the start.*' },
            { q: 'Leila has already applied for citizenship.', a: 'ng', why: 'Diego asks a hypothetical question; we do not know whether she has applied.' },
          ] },
          { t: 'tip', art: 'owl', md: '*Come off it* is informal and means *I don’t believe you* or *don’t be silly*. Diego uses it kindly, to say that Leila is too modest about her English.' },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence, starting with the words given.', items: [
            { q: 'I didn’t learn to drive, so I depend on buses now.', cue: 'If I had', a: ['If I had learned to drive, I wouldn’t depend on buses now.', 'If I had learnt to drive, I wouldn’t depend on buses now.', 'If I had learned to drive, I would not depend on buses now.', 'If I had learnt to drive, I would not depend on buses now.'], why: 'A mixed conditional: past condition (*had learned*), present result (*wouldn’t depend*).' },
            { q: 'I regret not bringing my old photos.', cue: 'I wish', a: ['I wish I had brought my old photos.', 'I wish I’d brought my old photos.'], why: '*Wish* + past perfect for a regret about the past.' },
            { q: 'If I had known about the cold winters, I would have brought warmer clothes.', cue: 'Had I', a: ['Had I known about the cold winters, I would have brought warmer clothes.', 'Had I known about the cold winters, I’d have brought warmer clothes.'], why: 'Inversion: *Had I known* replaces *If I had known*.' },
            { q: 'If you need any help, please call us.', cue: 'Should you', a: ['Should you need any help, please call us.'], why: '*Should you* + base form replaces *If you* in formal language.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the correct form.', items: [
            { q: 'If she weren’t so determined, she ___ the move in the first year.', o: ['would have given up', 'would give up', 'had given up'], why: 'Present condition (*weren’t so determined*), past result: *would have given up*.' },
            { q: 'I wish I ___ speak the language as well as my children do.', o: ['could', 'can', 'would'], why: 'A present wish about ability: *wish* + *could*.' },
            { q: 'If only I ___ to my grandmother more before she died.', o: ['had talked', 'talked', 'would talk'], why: 'A past regret: *if only* + past perfect.' },
            { q: 'I wish my neighbours ___ so much noise at night.', o: ['wouldn’t make', 'don’t make', 'hadn’t made'], why: '*Wish* + *would* for an annoying habit you want to change.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'If I hadn’t moved here, I [wouldn’t meet] my wife.', a: ['wouldn’t have met', 'would not have met'], why: 'Both parts are about the past, so the result needs *would have* + past participle.' },
            { s: 'If I [would have] stayed at home, I would be a teacher now.', a: ['had'], why: 'The *if* clause never takes *would*. Past condition: *If I had stayed*.' },
            { s: 'I wish I [have] more time to see my friends.', a: ['had'], why: 'A present wish takes a past form: *I wish I had*.' },
            { s: '[Had I knew] how expensive it was, I would have rented.', a: ['Had I known'], why: 'Inversion with *had* needs the past participle: *Had I known*.' },
          ] },
          { t: 'ex', kind: 'build', h: 'Build the sentence. Two words do not belong.', items: [
            { a: 'If I had stayed, I would be living with my parents now.', extra: ['have', 'will'], why: 'Mixed conditional: *had stayed* (past), *would be living* (now).' },
            { a: 'Were I to move again, I would learn the language first.', extra: ['If', 'was'], why: 'Formal inversion: *Were I to* + base form replaces *If I were to*.' },
            { a: 'I wish people would stop asking where I am from.', extra: ['will', 'stopped'], why: '*Wish* + *would* + base form: wanting someone to change their behaviour.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Deciding to stay',
      about: 'Read a personal essay about the moment a temporary move became a life.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'reading', title: 'The year I stopped counting', md: 'For the first three years I kept a count. Not consciously, perhaps, but somewhere in my head there was always a number: how long I had been here, how long my contract had left, how many months until I could reasonably go home. I lived in furnished flats, bought nothing I could not fit into two suitcases, and described my life to friends back home as “an experience”.\n\nI cannot point to the day it changed. There was no single decision, only a series of small ones that I did not recognise as decisions at the time. I joined a choir because a colleague asked me to. I took on an allotment because nobody else wanted it. I bought a bookcase, which, for someone who had planned to leave, was an oddly significant act. Had anyone asked me then whether I was staying, I would have said I had not decided. In truth, I think I already had.\n\nWhen I eventually applied for permanent residence, the forms asked for dates: when I had arrived, how long I had spent abroad, where I had lived. Filling them in, I realised that I had stopped counting years before. The paperwork was simply catching up with something that had already happened.\n\nI do not want to make this sound easier than it was. There are still days when I wish I were nearer to my family, and conversations in which I am reminded, gently or otherwise, that I was not born here. Belonging, I have come to think, is not a feeling you wait for. It is something you build, slowly and often without noticing, until one day you look around and find that it is there.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the essay. True, false or not given?', items: [
            { q: 'In the beginning, the writer saw the move as temporary.', a: 't', why: 'She counted months, kept few things and called it *an experience*.' },
            { q: 'The writer made one big decision to stay on a particular day.', a: 'f', why: '*There was no single decision, only a series of small ones.*' },
            { q: 'Buying a bookcase felt important to the writer.', a: 't', why: 'It was *an oddly significant act* for someone who had planned to leave.' },
            { q: 'The writer’s application for permanent residence was successful.', a: 'ng', why: 'She says she applied, but not what the result was.' },
            { q: 'The writer now never misses her family.', a: 'f', why: '*There are still days when I wish I were nearer to my family.*' },
            { q: 'The writer thinks belonging is something you actively create.', a: 't', why: '*It is something you build.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language of the essay.', items: [
            { q: '“Had anyone asked me then whether I was staying, I would have said I had not decided.” What does *Had anyone asked* mean?', o: ['If anyone had asked', 'Because someone asked', 'When everyone asked'], why: 'An inverted third conditional: *Had anyone asked* = *If anyone had asked*.' },
            { q: '“The paperwork was simply catching up with something that had already happened.” What does she mean?', o: ['The forms only made official a change that had already taken place in her life.', 'The paperwork was late because of the office.', 'She had made a mistake on the forms.'], why: '*Catch up with*: reach something that was ahead. Her life changed first; the documents followed.' },
            { q: '“I am reminded, gently or otherwise, that I was not born here.” What does *or otherwise* suggest?', o: ['Sometimes people are not gentle about it.', 'People are always gentle about it.', 'Nobody ever mentions it.'], why: '*Gently or otherwise*: gently or not gently. It is a polite understatement.' },
            { q: 'Why does the writer call buying a bookcase “oddly significant”?', o: ['A heavy piece of furniture showed, without her realising, that she planned to stay.', 'It was very expensive.', 'She did not like reading.'], why: 'You do not buy furniture that will not fit into two suitcases unless you are staying.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the words that express a wish or regret.', items: [
            { s: 'There are still days when [I wish I were] nearer to my family.', why: '*Wish* + *were*: a present wish about something that is not true.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'The legal process of becoming a citizen is called ___.', o: ['naturalisation', 'nationalisation', 'normalisation'], why: '*Naturalisation*. *Nationalisation* is when the state takes over a company.' },
      { q: 'If you meet the conditions, you are ___ to apply.', o: ['eligible', 'available', 'capable'], why: '*Eligible to apply*.' },
      { q: 'If I hadn’t moved here, I ___ my best friend now.', o: ['wouldn’t know', 'won’t know', 'hadn’t known'], why: 'Mixed conditional: past condition, present result.' },
      { q: '___ you require further information, please contact us.', o: ['Should', 'Would', 'Had'], why: '*Should you require* = *If you require*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete with one word.', items: [
      { q: 'Being a citizen of two countries is called ___ nationality.', a: ['dual'], why: '*Dual nationality*.' },
      { q: 'I wish I ___ learned the language before I came.', a: ['had'], why: '*Wish* + past perfect: a past regret.' },
      { q: 'Time abroad may not count ___ the qualifying period.', a: ['towards', 'toward'], why: '*Count towards*.' },
      { q: 'You must ___ your permit before it runs out.', a: ['renew'], why: '*Renew* a document.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence, starting with the words given.', items: [
      { q: 'If I had known it would rain so much, I would have moved somewhere sunnier.', cue: 'Had I', a: ['Had I known it would rain so much, I would have moved somewhere sunnier.', 'Had I known it would rain so much, I’d have moved somewhere sunnier.'], why: 'Inversion: *Had I known* = *If I had known*.' },
      { q: 'I’m not patient, so I didn’t enjoy the first year.', cue: 'If I were', a: ['If I were patient, I would have enjoyed the first year.', 'If I were more patient, I would have enjoyed the first year.', 'If I were patient, I’d have enjoyed the first year.', 'If I were more patient, I’d have enjoyed the first year.'], why: 'Mixed conditional: present condition (*were*), past result (*would have enjoyed*).' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: '*Permanent residence* means you can live in a country with no end date.', a: 't', why: 'That is its meaning.' },
      { q: '*I wish people would stop…* is used for a past regret.', a: 'f', why: '*Wish* + *would* is for behaviour you want to change now.' },
    ] },
  ],
};
