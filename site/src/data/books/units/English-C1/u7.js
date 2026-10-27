// English C1, unit 7 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u7',
  title: 'Language and communication',
  goal: 'Adapt your language to the situation and use idiom naturally.',
  art: 'parrot',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['register', 'formal-and-informal', 'idioms', 'binomials', 'ellipsis', 'substitution', 'language-change'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Commence, start or kick off?',
      about: 'Choose formal, neutral or informal words and grammar to fit the situation.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: '**Register** is the level of formality you choose for a situation. A C1 speaker moves easily between three levels: **formal** for official letters, reports and speeches; **neutral** for most emails, the news and conversations with people you do not know well; and **informal** for friends, family and quick messages. Formal is not better than informal. The right register is the one that fits the reader and the purpose.' },
          { t: 'table', caption: 'Three registers', explain: ['head'], quiz: true, head: ['Formal', 'Neutral', 'Informal'], rows: [
            ['commence', 'start', 'kick off'],
            ['inform', 'tell', 'let someone know'],
            ['obtain', 'get', 'get hold of'],
            ['assist', 'help', 'give someone a hand'],
            ['postpone', 'delay', 'put off'],
            ['numerous', 'many', 'loads of'],
            ['approximately', 'about', 'or so'],
            ['nevertheless', 'however', 'mind you'],
          ] },
        ],
        [
          { t: 'text', md: 'Register is not only vocabulary. Formal English prefers the passive, nouns instead of verbs, full forms (*do not*) and relative clauses with the preposition first (*the person to whom I spoke*). Informal English uses contractions, phrasal verbs, question tags, vague expressions (*and stuff, sort of, or something*) and leaves words out (*Sounds good. Coming tonight?*).' },
          { t: 'examples', items: [
            { s: 'Your attendance at the meeting is requested.', n: 'Formal: a passive and a noun (*attendance*).' },
            { s: 'Could you come to the meeting, please?', n: 'Neutral: a polite question.' },
            { s: 'Any chance you could make the meeting?', n: 'Informal: words left out at the start, and *make* meaning *attend*.' },
            { s: 'Applicants who fail to meet the deadline will not be considered.', n: 'Formal: an impersonal rule about a group of people.' },
            { s: 'If you miss the deadline, you’re out, I’m afraid.', n: 'Informal: direct, with contractions.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Mixing registers sounds strange. *Dear Professor Ahmed, could you give me a hand with my thesis?* starts formally and then becomes too casual. In a formal email, keep the whole message at the same level. In a message to a friend, very formal words can sound cold or even sarcastic.' },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Formal, neutral or informal? Sort the words.', explain: ['groups'], groups: ['formal', 'neutral', 'informal'], items: [
            { s: 'commence', g: 0, why: '*Commence* is formal, used in official notices and ceremonies.' },
            { s: 'reside', g: 0, why: '*Reside* is formal: *Applicants must reside in the area.*' },
            { s: 'sufficient', g: 0, why: '*Sufficient* is the formal word for *enough*.' },
            { s: 'begin', g: 1, why: '*Begin* is neutral and fits almost any situation.' },
            { s: 'live', g: 1, why: '*Live* is the neutral verb.' },
            { s: 'enough', g: 1, why: '*Enough* is neutral.' },
            { s: 'kick off', g: 2, why: '*Kick off* is informal, from football.' },
            { s: 'stuff', g: 2, why: '*Stuff* is informal for things or material.' },
            { s: 'loads of', g: 2, why: '*Loads of* is informal for *a lot of*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the sentence that best fits the situation.', items: [
            { q: 'A message to a close friend:', o: ['Running late, sorry! Be there in ten.', 'I regret to inform you that I will be delayed by approximately ten minutes.', 'I am writing to inform you that I am late.'], why: 'With a close friend, short informal messages are natural. Formal language would sound strange or sarcastic.' },
            { q: 'A report for a company’s board:', o: ['Sales fell significantly in the third quarter.', 'Sales went down loads after the summer.', 'Sales sort of dropped, to be honest.'], why: 'A report needs formal, precise language: *fell significantly*.' },
            { q: 'A notice in a hotel lobby:', o: ['Guests are kindly requested to vacate their rooms by 11 a.m.', 'Get out of your rooms by eleven, OK?', 'You lot need to be out by eleven.'], why: 'Notices use impersonal, formal language: a passive and *vacate*.' },
            { q: 'An email to a colleague you work with every day:', o: ['Could you send me the figures when you get a chance?', 'I should be most grateful were you to forward the figures at your earliest convenience.', 'Figures. Now.'], why: 'Neutral and polite fits a colleague. The second is far too formal; the third is rude.' },
            { q: 'Asking a stranger at a bus stop:', o: ['Excuse me, do you know if the 42 stops here?', 'I wish to enquire whether the number 42 service halts at this location.', 'Does the 42 stop here or what?'], why: 'A neutral, polite question fits a stranger.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Each sentence has one word or phrase in the wrong register. Replace it.', items: [
            { s: 'Dear Sir or Madam, I would like to [get hold of] a copy of the annual report.', a: ['obtain', 'receive', 'request'], why: 'A formal letter needs a formal verb: *obtain*.' },
            { s: 'Please note that the ceremony will [kick off] at 9 a.m. in the main hall.', a: ['commence', 'start', 'begin'], why: 'An official notice: *commence* or neutral *start*. *Kick off* is too informal.' },
            { s: 'Hey Tom, thanks for the invite! [I shall be delighted to attend].', a: ['I’d love to come', 'I would love to come', 'I’ll be there', 'I will be there', 'I’d love to', 'Count me in'], why: 'A friendly message needs informal language. The formal phrase sounds cold.' },
            { s: 'We regret that the concert has been [put off] owing to illness.', a: ['postponed'], why: '*We regret that* and *owing to* are formal, so use *postponed*.' },
            { s: 'The committee has received [loads of] complaints about the new rules.', a: ['numerous', 'many', 'a large number of', 'a great many'], why: 'A formal statement needs *numerous* or *a large number of*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'To cut a long story short',
      about: 'Understand and use common idioms and fixed phrases naturally, in the right register.',
      art: 'monster',
      spreads: [
        [
          { t: 'text', md: 'An **idiom** is a group of words whose meaning is different from the meanings of the single words. Idioms are fixed: you usually cannot change the words, the order or the grammar. *A blessing in disguise* cannot become *a disguised blessing*. Most idioms are neutral or informal, so use them in conversation, stories and lighter writing, and use them sparingly in formal texts.' },
          { t: 'examples', items: [
            { s: 'Losing that job was **a blessing in disguise**: I finally started my own business.', n: 'Something that seems bad at first but brings something good.' },
            { s: '**To cut a long story short**, we missed the ferry and spent the night in the car.', n: 'Used to skip the details and go to the end of a story.' },
            { s: 'The complaints we have received are only **the tip of the iceberg**.', n: 'A small visible part of a much bigger problem.' },
            { s: 'The plan didn’t work, so it’s **back to the drawing board**.', n: 'We have to start again with a new plan.' },
            { s: 'I think I’ve **bitten off more than I can chew** with this course.', n: 'I have taken on more than I can manage.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Idioms by purpose', explain: ['head', 'col0', 'col2'], head: ['Purpose', 'Idiom', 'Meaning'], rows: [
            ['telling a story', 'out of the blue', 'suddenly and without warning'],
            ['telling a story', 'as luck would have it', 'by chance, luckily or unluckily'],
            ['judging a situation', 'a mixed blessing', 'something with good and bad sides'],
            ['judging a situation', 'a far cry from', 'very different from'],
            ['talking about difficulty', 'touch and go', 'very uncertain; it could end well or badly'],
            ['talking about difficulty', 'the last straw', 'the final problem that makes a situation impossible'],
            ['agreeing', 'see eye to eye', 'agree completely'],
            ['deciding', 'have second thoughts', 'start to doubt a decision'],
          ] },
          { t: 'text', md: 'Many fixed phrases are **binomials**: two words joined by *and* or *or*, always in the same order. Say *pros and cons*, never *cons and pros*. Others are *by and large* (in general), *sooner or later*, *ups and downs*, *few and far between* (rare), *peace and quiet*, *odds and ends* (small things of different kinds) and *give and take* (compromise).' },
          { t: 'tip', art: 'owl', md: 'Do not change the words of an idiom to sound original: it usually sounds like a mistake. Learn idioms as whole phrases, with an example, and notice their register. *The last straw* is fine at work, but *kick the bucket* (die) would be shocking at a funeral.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the idioms with their meanings.', pairs: [
            ['a blessing in disguise', 'a problem that brings something good'],
            ['the tip of the iceberg', 'a small part of a much bigger problem'],
            ['back to the drawing board', 'time to start again with a new plan'],
            ['out of the blue', 'suddenly and without warning'],
            ['see eye to eye', 'agree completely'],
            ['have second thoughts', 'start to doubt a decision'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete each idiom with one word.', items: [
            { q: 'The news came completely out of the ___; nobody expected it.', a: ['blue'], why: '*Out of the blue*: suddenly, without warning.' },
            { q: 'His rude email was the last ___. I resigned the next day.', a: ['straw'], why: '*The last straw*: the final problem that you cannot accept.' },
            { q: 'It was touch and ___ whether we would catch the flight.', a: ['go'], why: '*Touch and go*: very uncertain.' },
            { q: 'To cut a long story ___, I ended up living in Spain.', a: ['short'], why: '*To cut a long story short*: to skip the details.' },
            { q: 'Moving abroad was a mixed ___: exciting, but lonely at first.', a: ['blessing'], why: '*A mixed blessing*: something with good and bad sides.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct fixed phrase.', items: [
            { q: 'After weeks of noise from the building site, we just want some ___.', o: ['peace and quiet', 'quiet and peace', 'peace and silence'], why: 'Binomials have a fixed order and fixed words: *peace and quiet*.' },
            { q: '___, the new system works well, although there are a few problems.', o: ['By and large', 'Large and by', 'By and far'], why: '*By and large* means in general.' },
            { q: 'Good restaurants are few and ___ in this part of town.', o: ['far between', 'far apart', 'between'], why: '*Few and far between* means rare.' },
            { q: 'Every relationship has its ___.', o: ['ups and downs', 'downs and ups', 'highs and downs'], why: 'The fixed order is *ups and downs*.' },
          ] },
          { t: 'ex', kind: 'memory', h: 'Find the two halves of each binomial.', pairs: [
            ['pros and', 'cons'],
            ['by and', 'large'],
            ['sooner or', 'later'],
            ['peace and', 'quiet'],
            ['odds and', 'ends'],
            ['give and', 'take'],
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the idiom in each sentence.', items: [
            { s: 'My manager and I don’t always [see eye to eye], but she is fair.', why: '*See eye to eye* means agree completely.' },
            { s: '[As luck would have it], the last ticket was still available.', why: '*As luck would have it* introduces something that happened by chance.' },
            { s: 'Our new flat is [a far cry from] the tiny room we rented as students.', why: '*A far cry from* means very different from.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'I hope so',
      about: 'Avoid repeating words by leaving them out or replacing them with so, not, do and one.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Natural English avoids repeating words. There are two ways to do this: **substitution**, where a short word replaces a longer phrase, and **ellipsis**, where words are simply left out because the listener can understand them.' },
          { t: 'table', caption: 'Substitution and ellipsis', explain: ['head', 'col0'], head: ['Pattern', 'Example'], rows: [
            ['*so* or *not* after verbs of thinking', '“Will it rain?” “I hope **so**.” / “I hope **not**.”'],
            ['*do so* in formal English', 'Visitors may leave bags here, but those who **do so** are responsible for them.'],
            ['*one* or *ones* instead of a noun', 'I don’t want the red jacket; I want the green **one**.'],
            ['an auxiliary instead of a verb phrase', 'I haven’t read it yet, but Lena **has**.'],
            ['*to* instead of a whole infinitive', '“Would you like to join us?” “I’d love **to**.”'],
            ['*so*, *neither* or *nor* + auxiliary + subject', '“I’m exhausted.” “**So am I**.” / “I can’t swim.” “**Neither can I**.”'],
            ['*if so* or *if not*', 'Is the offer still open? **If so**, I’d like to accept. **If not**, never mind.'],
          ] },
        ],
        [
          { t: 'text', md: 'Use *so* and *not* after *think, hope, expect, suppose, imagine, guess, be afraid* and *seem*. With *think, expect, suppose* and *imagine*, the usual negative is *I don’t think so*; *I think not* sounds formal or old-fashioned. With *hope* and *be afraid*, use *not*: *I hope not, I’m afraid not*. Do not use *so* after *know* or *be sure*: say *I know* and *I’m sure*.\n\nIn informal speech, words at the start of a sentence are often left out: *(Have you) seen this? (It) sounds good. (Are you) coming tonight?*' },
          { t: 'dialogue', title: 'A leaving party', lines: [
            { who: 'Leila', s: 'Are you going to Sara’s leaving party on Friday?' },
            { who: 'Callum', s: 'I’d like to, but I’m not sure I can. Are you?' },
            { who: 'Leila', s: 'I think so. Jun is, and so are most of the team.' },
            { who: 'Callum', s: 'Is it at the usual place?' },
            { who: 'Leila', s: 'I don’t think so. Somewhere new, near the river. Sounds nice, though.' },
            { who: 'Callum', s: 'Have you bought her a present?' },
            { who: 'Leila', s: 'Not yet. Have you?' },
            { who: 'Callum', s: 'No, and nor has anyone else, I imagine. Shall we get one together?' },
            { who: 'Leila', s: 'Good idea. A book, maybe? She loves the ones about travel.' },
          ] },
          { t: 'tip', art: 'owl', md: '*So do I* means *me too*. *So I do* is different: it shows surprise when you notice that something is true about you. “You’ve got paint on your shirt.” “So I have!”' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct reply.', items: [
            { q: '“Is the museum open on Mondays?” “I’m afraid ___.”', o: ['not', 'no', 'so not'], why: 'With *be afraid*, the negative is *I’m afraid not*.' },
            { q: '“Will you be home before midnight?” “I ___ so.”', o: ['expect', 'know', 'am sure'], why: '*So* follows *expect*, but not *know* or *be sure*.' },
            { q: '“I’ve never been to Asia.” “___ I.”', o: ['Neither have', 'So have', 'Neither did'], why: 'Agreeing with a negative: *Neither* + the same auxiliary (*have*) + subject.' },
            { q: 'These glasses are too small. Have you got any bigger ___?', o: ['ones', 'one', 'them'], why: '*Ones* replaces the plural noun *glasses*.' },
            { q: '“Do you want to come with us?” “I’d love ___, but I’m working.”', o: ['to', 'it', 'so'], why: '*To* replaces the whole infinitive *to come with you*.' },
            { q: 'Check whether the train is delayed. If ___, we can have another coffee.', o: ['so', 'it', 'yes'], why: '*If so* = if the train is delayed.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete each sentence with one word.', items: [
            { q: '“Is Mara coming to the meeting?” “I don’t think ___.”', a: ['so'], why: '*I don’t think so* is the usual negative after *think*.' },
            { q: '“Will it be expensive?” “I hope ___.”', a: ['not'], why: 'A negative wish after *hope*: *I hope not*.' },
            { q: '“She speaks Arabic.” “So ___ her brother.”', a: ['does'], why: '*So* + auxiliary + subject. *Speaks* is present simple, so *does*.' },
            { q: '“I haven’t finished the report.” “Nor ___ I.”', a: ['have'], why: '*Nor* + the same auxiliary (*have*) + subject.' },
            { q: 'I didn’t want to go to the dentist, but I had ___.', a: ['to'], why: '*To* replaces *to go to the dentist*.' },
            { q: 'Guests may bring a partner, but those who do ___ must tell us by Friday.', a: ['so'], why: 'In formal English, *do so* replaces a verb phrase: *bring a partner*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: '“Is it going to rain?” “I [don’t hope so].”', a: ['hope not'], why: 'With *hope*, the negative is *I hope not*.' },
            { s: '“I love this song.” “[So I do].”', a: ['So do I'], why: 'To mean *me too*, put the auxiliary before the subject: *So do I*.' },
            { s: 'I don’t like the blue shirt, but I like the white [it].', a: ['one'], why: '*One* replaces a singular countable noun after an adjective.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Is the internet ruining English?',
      about: 'Read an article on how the internet changes language, and notice its register and idioms.',
      art: 'cat',
      spreads: [
        [
          { t: 'reading', title: 'Is the internet ruining English?', md: 'Every generation worries that young people are ruining the language. In the past, the blame fell on the telephone, television and slang; today it falls on the internet. Yet linguists who study online writing tend to be far more optimistic than the critics.\n\nThe first thing to notice is that people are writing more than ever before. For most of history, everyday conversation was spoken and disappeared the moment it ended. Now huge numbers of people chat in writing every day, and they have had to invent ways of showing tone of voice on a screen. A full stop at the end of a short message can seem cold or even angry; repeated letters (“sooo good”) add enthusiasm; capital letters feel like shouting. None of this is careless. It is a new set of conventions for informal writing, and most users follow them without ever being taught.\n\nOnline writing is also full of ellipsis. A message such as “Running late, there in five” leaves out the subject and the auxiliary, exactly as we do in speech. Critics see this as laziness, but it is simply the informal register moved into writing. The same people who type “thx” to a friend can usually write a formal email when they need to. What matters, as always, is knowing which register fits the situation.\n\nNew words spread faster, too. A phrase invented in one corner of the internet can be used around the world within weeks, and some, by and large the most useful, end up in dictionaries. Many disappear just as quickly. To cut a long story short, the internet has not created a new language; it has speeded up the ordinary processes of change that every living language goes through.\n\nThat is not to say there are no concerns. Some teachers find that students bring informal habits into their essays, and the speed of online communication can lead to misunderstandings: without a face or a voice, irony is easily missed. But these are problems of register and audience, not signs of decline.\n\nPerhaps the real lesson is that people are more flexible with language than we give them credit for. Most of us switch between several kinds of English every day, from a quick message to a colleague to a careful letter to a bank. The internet has not made us worse writers. If anything, it has turned more of us into writers in the first place.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Linguists are generally more worried about online language than other critics are.', a: 'f', why: 'They “tend to be far more optimistic than the critics”.' },
            { q: 'In the past, most everyday conversation was never written down.', a: 't', why: 'It “was spoken and disappeared the moment it ended”.' },
            { q: 'A full stop at the end of a short message can make it seem unfriendly.', a: 't', why: 'It “can seem cold or even angry”.' },
            { q: 'Most people learn the rules of online writing at school.', a: 'f', why: 'Most users follow them “without ever being taught”.' },
            { q: 'Most new words from the internet end up in dictionaries.', a: 'f', why: 'Only some do; many disappear just as quickly.' },
            { q: 'The writer has studied online language for many years.', a: 'ng', why: 'The text talks about linguists, but says nothing about the writer’s own work.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language and the ideas in the text.', items: [
            { q: '“Running late, there in five.” What has been left out?', o: ['The subject and the auxiliary verbs (I’m, I’ll be)', 'Only the main verb', 'Nothing; it is a complete sentence'], why: 'The full sentence is *I’m running late; I’ll be there in five minutes*.' },
            { q: 'According to the writer, why is there so much ellipsis online?', o: ['People move the informal register of speech into writing.', 'People are too lazy to write properly.', 'People want to sound more formal.'], why: '“It is simply the informal register moved into writing.”' },
            { q: 'Why does the writer use idioms such as *by and large* and *to cut a long story short*?', o: ['To give the article a conversational, neutral tone', 'To make the article sound like a legal document', 'Because they are technical terms in linguistics'], why: 'Idioms are neutral or informal. They make the article lively and easy to read.' },
            { q: 'What is the writer’s main argument?', o: ['The internet speeds up normal language change and has made more people write.', 'The internet is destroying the English language.', 'Young people can no longer write formally.'], why: 'The last paragraph says it has turned more of us into writers, and the fourth says it has speeded up ordinary change.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'wordform', h: 'Complete each sentence with a form of the word in capitals, as in the text.', items: [
            { q: 'Most linguists are ___ about the future of English.', base: 'optimism', a: ['optimistic'], why: 'An adjective after *are*: *optimistic*.' },
            { q: 'Repeated letters add ___ to a message.', base: 'enthusiastic', a: ['enthusiasm'], why: 'A noun after *add*: *enthusiasm*.' },
            { q: 'Fast messages can easily lead to ___.', base: 'understand', a: ['misunderstandings', 'misunderstanding'], why: 'The prefix *mis-* means wrongly: *misunderstandings*.' },
            { q: 'Most of us are more ___ with language than we think.', base: 'flexibility', a: ['flexible'], why: 'An adjective after *are more*: *flexible*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'Which word is the most formal?', o: ['commence', 'start', 'kick off'], why: '*Commence* is formal; *start* is neutral; *kick off* is informal.' },
      { q: 'Which sentence fits a formal notice?', o: ['Visitors are requested not to feed the animals.', 'Please don’t feed the animals, guys.', 'No feeding the animals, OK?'], why: 'A notice uses impersonal, formal language: a passive and *requested*.' },
      { q: 'I didn’t expect him to call. The message came completely out of the ___.', o: ['blue', 'sky', 'dark'], why: '*Out of the blue*: suddenly and without warning.' },
      { q: '“Is the shop still open?” “I don’t think ___.”', o: ['so', 'it', 'not'], why: 'After *think*, the usual negative is *I don’t think so*.' },
      { q: '“I can’t stand horror films.” “Neither ___ I.”', o: ['can', 'do', 'am'], why: '*Neither* + the same auxiliary (*can*) + subject.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete each sentence with one word.', items: [
      { q: 'Failing the exam was a blessing in ___: I chose a course I love.', a: ['disguise'], why: '*A blessing in disguise*: a problem that brings something good.' },
      { q: 'We weighed up the pros and ___ before buying the house.', a: ['cons'], why: 'The fixed binomial *pros and cons*.' },
      { q: '“Will there be any tickets left?” “I hope ___.”', a: ['so'], why: '*I hope so*: a positive wish.' },
      { q: 'I haven’t been to the new gallery, but my sister ___.', a: ['has'], why: 'The auxiliary *has* replaces *has been to the new gallery*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'Dear Mr Lee, I would be grateful if you could [let me know] whether the position is still available.', a: ['inform me', 'tell me', 'confirm'], why: 'A formal letter: *inform me* fits better than the informal *let me know*.' },
      { s: 'Every job has its [downs and ups].', a: ['ups and downs'], why: 'Binomials have a fixed order: *ups and downs*.' },
      { s: '“Are you coming?” “I’d love [it], but I can’t.”', a: ['to'], why: '*To* replaces the whole infinitive *to come*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'To cut a long story short, we got married.', why: 'The idiom is fixed, and a comma follows it.' },
      { a: 'Is the offer still open? If so, I accept.', why: '*If so* = if the offer is still open.' },
    ] },
  ],
};
