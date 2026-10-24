// English B1, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'News and messages',
  goal: 'Report what people said and asked, and talk about news and social media.',
  art: 'parrot',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['reported-speech', 'reported-questions', 'say-tell', 'news-media'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'She said that…',
      about: 'Report what people said, and change the tense.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'To tell someone what another person said, use **reported speech**. The most common verbs are *say* and *tell*. After *tell*, say **who** heard it: *told me*, *told her*. After *say*, do not put a person. The word *that* is optional.' },
          { t: 'examples', items: [
            { s: '“I’m tired.” → Ana **said** (that) she **was** tired.', n: '*Am* becomes *was*. *I* becomes *she*.' },
            { s: '“I work in a bank.” → He **told me** (that) he **worked** in a bank.', n: '*Tell* + a person. *Work* becomes *worked*.' },
            { s: '“We’ll call you.” → They **said** they **would** call me.', n: '*Will* becomes *would*. *You* becomes *me*, because I am now the speaker.' },
          ] },
        ],
        [
          { t: 'text', md: 'When the reporting verb is in the past (*said*, *told*), the verb in the reported sentence usually moves **one step back** into the past.' },
          { t: 'table', caption: 'Tense changes', explain: ['head'], quiz: true, head: ['Direct speech', 'Reported speech'], rows: [
            ['“I **am** busy.”', 'She said she **was** busy.'],
            ['“I**’m working**.”', 'She said she **was working**.'],
            ['“I**’ve finished**.”', 'She said she **had finished**.'],
            ['“I **lost** my phone.”', 'She said she **had lost** her phone.'],
            ['“I**’ll** help.”', 'She said she **would** help.'],
            ['“I **can** drive.”', 'She said she **could** drive.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Pronouns and time words change too: *my* → *his* or *her*, *today* → *that day*, *tomorrow* → *the next day*, *yesterday* → *the day before*. If something is still true now, you can keep the present: *She said she lives in Leeds.*' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct words.', items: [
            { q: 'He ___ me that the meeting was cancelled.', o: ['told', 'said', 'says'], why: '*Tell* is followed by a person: *told me*. We cannot say *said me*.' },
            { q: '“I’m leaving.” → She said she ___.', o: ['was leaving', 'had leave', 'leaving'], why: 'The present continuous *am leaving* becomes the past continuous *was leaving*.' },
            { q: '“We’ve sold the car.” → They told us they ___ the car.', o: ['had sold', 'has sold', 'were sold'], why: 'The present perfect *have sold* becomes the past perfect *had sold*.' },
            { q: '“I can’t find my keys.” → Omar said he ___ find his keys.', o: ['couldn’t', 'can’t not', 'didn’t could'], why: '*Can’t* becomes *couldn’t*.' },
            { q: '“I’ll send it tomorrow.” → A week later: Lena said she would send it ___.', o: ['the next day', 'tomorrow day', 'the day before'], why: 'When we report it later, *tomorrow* becomes *the next day*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Report the sentences. Move each verb one step back into the past.', items: [
            { q: '“I am really nervous.” → Priya said she ___ really nervous.', a: ['was'], why: '*Am* becomes *was*.' },
            { q: '“We’re moving to Dublin.” → They told me they ___ to Dublin.', a: ['were moving'], why: '*Are moving* becomes *were moving*.' },
            { q: '“I’ve lost my passport.” → Jamal said he ___ his passport.', a: ['had lost', '’d lost'], why: '*Have lost* becomes *had lost*.' },
            { q: '“I’ll be home late.” → My wife said she ___ be home late.', a: ['would', '’d'], why: '*Will* becomes *would*.' },
            { q: '“I don’t eat meat.” → Chen told me he ___ meat.', a: ['didn’t eat', 'did not eat'], why: '*Don’t eat* becomes *didn’t eat*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'She told me that she was moving.', why: '*Told* + a person (*me*) + *that* + the reported sentence.' },
            { a: 'They said they would call back.', why: '*Said* with no person after it. *Will* becomes *would*.' },
            { a: 'He told us he had missed the bus.', why: '*Told us*, then the past perfect for the earlier action.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'She asked me if…',
      about: 'Report questions and requests.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'To report a question, use **ask**. The word order is the same as in a normal sentence: subject + verb. Do not use *do*, *does* or *did*, and do not use a question mark. The tense moves back, as in reported statements.' },
          { t: 'text', md: 'For a **yes/no question**, use **if** or **whether**. For a question with a question word (*where, when, why, how, what*), keep the question word.' },
          { t: 'examples', items: [
            { s: '“Are you busy?” → She **asked if** I **was** busy.', n: 'A yes/no question: *if* + subject + verb.' },
            { s: '“Do you like your job?” → He asked **whether** I **liked** my job.', n: '*Do* disappears. *Like* becomes *liked*.' },
            { s: '“Where do you live?” → They asked me **where I lived**.', n: 'Not *where did I live*. The subject comes before the verb.' },
          ] },
        ],
        [
          { t: 'text', md: 'To report a **request** or an **order**, use *ask* or *tell* + a person + **to** + verb. For a negative, put **not** before *to*.' },
          { t: 'table', caption: 'Requests and orders', explain: ['head'], head: ['Direct speech', 'Reported speech'], rows: [
            ['“Please close the door.”', 'He **asked me to close** the door.'],
            ['“Can you help me, please?”', 'She **asked us to help** her.'],
            ['“Wait here.”', 'The guard **told us to wait** there.'],
            ['“Don’t be late.”', 'My boss **told me not to be** late.'],
          ] },
          { t: 'tip', art: 'owl', md: 'A very common mistake is to keep the question order: *She asked me where did I work.* The correct sentence is *She asked me where I worked.*' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct reported question.', items: [
            { q: '“Is the shop open?” → He asked ___ the shop was open.', o: ['if', 'that', 'do'], why: 'A yes/no question is reported with *if* or *whether*.' },
            { q: '“What time does the train leave?” → She asked what time ___.', o: ['the train left', 'did the train leave', 'does the train leave'], why: 'No *did* or *does*: subject + verb, and the tense moves back.' },
            { q: '“Have you seen my glasses?” → My grandfather asked if I ___ his glasses.', o: ['had seen', 'have I seen', 'did see'], why: '*Have seen* becomes *had seen*, in normal word order.' },
            { q: '“Why are you crying?” → She asked him why ___ crying.', o: ['he was', 'was he', 'did he'], why: 'Keep *why*, then subject + verb: *he was*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Report the requests and orders. Use *to* or *not to* and the verb in brackets.', items: [
            { q: 'My neighbour asked me ___ (water) her plants.', a: ['to water'], why: '*Ask* + person + *to* + verb.' },
            { q: 'The doctor told him ___ (not / drink) coffee at night.', a: ['not to drink'], why: 'Negative order: *not* comes before *to*.' },
            { q: 'Can you ask Sara ___ (call) me back?', a: ['to call'], why: '*Ask someone to do something*.' },
            { q: 'They told us ___ (not / park) in front of the gate.', a: ['not to park'], why: '*Tell* + person + *not to* + verb.' },
            { q: 'I asked the waiter ___ (bring) the bill.', a: ['to bring'], why: 'A polite request: *asked* + person + *to* + verb.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'She asked me where I lived.', why: 'Question word, then subject + verb: *where I lived*.' },
            { a: 'He asked if I was hungry.', why: '*If* + subject + verb. No question mark.' },
            { a: 'My boss asked me to send the report.', why: '*Asked* + person + *to* + verb.' },
            { a: 'The nurse told me not to eat anything.', why: '*Not* goes before *to*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Headlines and posts',
      about: 'Words for news and social media, and the difference between say and tell.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'These words are useful when you talk about the news, in a newspaper or online.' },
          { t: 'table', caption: 'News and social media', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['a headline', 'the title of a news story, in large letters'],
            ['an article', 'a piece of writing in a newspaper or on a website'],
            ['a journalist', 'a person who writes or reports the news'],
            ['breaking news', 'very new information about something that is happening now'],
            ['a post', 'a message or photo that you put on social media'],
            ['share', 'send a post or a link to other people'],
            ['a follower', 'a person who chooses to see your posts'],
            ['go viral', 'spread very fast online and be seen by many people'],
            ['fake news', 'false stories that look like real news'],
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the words and the meanings.', pairs: [
            ['headline', 'the title of a news story'],
            ['journalist', 'a person who reports the news'],
            ['follower', 'a person who sees your posts'],
            ['go viral', 'be seen by a huge number of people online'],
            ['fake news', 'false stories that look real'],
            ['comment', 'what you write under someone’s post'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Her video ___ viral, and now millions of people have seen it.', o: ['went', 'made', 'did'], why: 'The phrase is *go viral*. Go, went, gone.' },
            { q: 'I read an interesting ___ about working from home in the newspaper.', o: ['article', 'headline', 'follower'], why: 'You read a whole *article*. A headline is only the title.' },
            { q: 'Don’t ___ that post before you check if it’s true.', o: ['share', 'follow', 'tell'], why: 'You *share* a post with other people.' },
            { q: 'The singer has two million ___ on social media.', o: ['followers', 'headlines', 'articles'], why: '*Followers* are the people who see your posts.' },
          ] },
        ],
        [
          { t: 'text', md: '**Say** or **tell**? Both verbs are about speaking, but the grammar is different. *Tell* usually needs a person after it. *Say* does not.' },
          { t: 'table', caption: 'Say or tell?', head: ['say', 'tell'], rows: [
            ['say something', 'tell someone something'],
            ['say hello / goodbye', 'tell a story / a joke'],
            ['say sorry', 'tell the truth / a lie'],
            ['say something to someone', 'tell someone the time'],
          ] },
          { t: 'tip', art: 'owl', md: 'If the person comes straight after the verb, use *tell*: *She told me…* With *say*, put *to* before the person: *She said to me…*, never *She said me…*' },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with the correct form of *say* or *tell*.', items: [
            { q: 'She ___ me a funny story about her first day at work.', a: ['told'], why: '*Tell* + person + *a story*. Past: *told*.' },
            { q: 'He ___ goodbye and closed the door.', a: ['said'], why: 'We *say goodbye*. Past: *said*.' },
            { q: 'Could you ___ me the way to the station?', a: ['tell'], why: '*Tell* + person + information.' },
            { q: 'What did the manager ___ to you?', a: ['say'], why: '*Say* + something + *to* + person. After *did*, use the base form.' },
            { q: 'I don’t believe him. I think he’s ___ a lie.', a: ['telling'], why: 'We *tell a lie*. After *he’s* we need the *-ing* form.' },
            { q: 'You should ___ sorry to your sister.', a: ['say'], why: 'We *say sorry* to someone.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'A very late library book',
      about: 'Read a short news story and the comments under it.',
      art: 'teacup',
      spreads: [
        [
          { t: 'reading', title: 'Book returned after 41 years', md: 'The library in the small town of Ashby Vale had a surprise last week: a book that someone borrowed in 1985. The book, a guide to birds, arrived in a parcel with a short letter and a twenty-pound note.\n\nThe letter was from a man called Peter Hale, who is now 68. He wrote that he had found the book in a box while he was moving house. He said he was very sorry and that he had always meant to return it. He also asked the library to use the money for children’s books.\n\nLibrarian Nadia Osei told reporters that the staff had laughed when they opened the parcel. “The book is in perfect condition,” she said. She added that the library would not charge Mr Hale anything, and that the book would go back on the shelf next month.\n\n**Comments**\n\n**Grace_T:** What a lovely story! I hope he reads it again before he sends it back.\n\n**Marco82:** My dad still has a library book from his school days. I’ll tell him about this.\n\n**J_Webb:** Why is this news? People should return books on time.\n\n**Ola_reads:** Imagine the fine after 41 years! Good for him.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'The book was about birds.', a: 't', why: 'It was a guide to birds.' },
            { q: 'Peter Hale found the book in his garden.', a: 'f', why: 'He found it in a box while he was moving house.' },
            { q: 'Peter Hale wanted the money to buy books for children.', a: 't', why: 'He asked the library to use the money for children’s books.' },
            { q: 'The library asked Mr Hale to pay a fine.', a: 'f', why: 'Nadia Osei said the library would not charge him anything.' },
            { q: 'Peter Hale was a teacher.', a: 'ng', why: 'The text does not say what his job was.' },
            { q: 'All the comments are positive.', a: 'f', why: 'J_Webb thinks people should return books on time.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the reporting verbs: the verbs that introduce what someone said or wrote.', items: [
            { s: 'He [wrote] that he had found the book in a box. He [said] he was very sorry.', why: '*Wrote* and *said* introduce his words. *Had found* is part of what he reported.' },
            { s: 'Nadia Osei [told] reporters that the staff had laughed. She [added] that the book would go back on the shelf.', why: '*Told* and *added* introduce her words. *Added* means she said one more thing.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Report the people in the story.', items: [
            { q: '“The book is in perfect condition.” → Nadia said the book ___ in perfect condition.', o: ['was', 'is being', 'were'], why: '*Is* becomes *was*. *Book* is singular, so not *were*.' },
            { q: '“I’ll tell him about this.” → Marco said he ___ tell his dad about it.', o: ['would', 'will to', 'had'], why: '*Will* becomes *would*, followed by the base form.' },
            { q: 'J_Webb asked ___.', o: ['why this was news', 'why was this news', 'why is this news?'], why: 'In a reported question: subject + verb, and no question mark.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: '“I’m tired.” → Leo said he ___ tired.', o: ['was', 'is being', 'were'], why: '*Am* becomes *was*.' },
      { q: 'She ___ us that the flight was delayed.', o: ['told', 'said', 'asked'], why: '*Tell* + person + *that*.' },
      { q: 'He asked me where ___.', o: ['I worked', 'did I work', 'do I work'], why: 'Reported question: subject + verb, no *did*.' },
      { q: 'My mum asked me ___ the shopping.', o: ['to do', 'do', 'doing'], why: '*Ask* + person + *to* + verb.' },
      { q: 'The story ___ viral in just two hours.', o: ['went', 'did', 'made'], why: 'The phrase is *go viral*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the reported speech with one or two words.', items: [
      { q: '“I will call you.” → Sam said he ___ call me.', a: ['would', '’d'], why: '*Will* becomes *would*.' },
      { q: '“We have finished.” → They told me they ___ finished.', a: ['had'], why: '*Have finished* becomes *had finished*.' },
      { q: '“Do you speak French?” → She asked me ___ I spoke French.', a: ['if', 'whether'], why: 'A yes/no question: *if* or *whether*.' },
      { q: '“Don’t touch it.” → He told me ___ touch it.', a: ['not to'], why: 'A negative order: *not to* + verb.' },
      { q: 'Please ___ me the truth.', a: ['tell'], why: 'We *tell the truth*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'She asked me if I was ready.', why: '*If* + subject + verb.' },
      { a: 'He told me not to worry.', why: '*Told* + person + *not to* + verb.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
      { q: '', o: ['She told me that she was ill.', 'She said me that she was ill.', 'She told that she was ill.'], why: '*Tell* needs a person after it. *Say* does not take one.' },
      { q: '', o: ['He asked me what time it was.', 'He asked me what time was it.', 'He asked me what time is it?'], why: 'Reported question: subject before verb, no question mark.' },
      { q: '', o: ['They asked us to wait outside.', 'They asked us wait outside.', 'They asked to us to wait outside.'], why: '*Ask* + person + *to* + verb.' },
    ] },
  ],
};
