// English B1, unit 6, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Each lesson: a full explanation first (the rule in plain words, why, many examples, the usual mistakes, a text that
// uses it), then fewer exercises from controlled to free, one speaking task, and one task in the format of B1 Preliminary.
export const UNIT = {
  id: 'u6',
  title: 'News and messages',
  goal: 'Report what people said, asked and told you to do, and talk about news and social media.',
  art: 'parrot',
  tags: { skills: ['grammar', 'vocabulary', 'speaking', 'reading'], topics: ['reported-speech', 'reported-questions', 'say-tell', 'news-media'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'She said that…',
      about: 'Report what people said, choose between say and tell, and move the verb one step back in time.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'There are two ways to give someone else’s words. You can repeat them exactly, with quotation marks: *Ana said, “I’m tired.”* This is **direct speech**. Or you can tell the content in your own sentence: *Ana said that she was tired.* This is **reported speech**, and it is what we use most in conversation and in emails.\n\nThe two most common reporting verbs are **say** and **tell**. They mean almost the same, but the grammar is different:\n\n**say** + (that) + what was said: *She **said** (that) she was tired.*\n\n**tell** + **a person** + (that) + what was said: *She **told me** (that) she was tired.*\n\nAfter *tell*, you must say who heard the words. After *say*, you do not put a person directly. The word **that** is optional with both.' },
          { t: 'examples', items: [
            { s: '“I’m tired.” → Ana **said** (that) she **was** tired.', n: '*Say*, no person. *Am* becomes *was*; *I* becomes *she*.' },
            { s: '“I work in a bank.” → He **told me** (that) he **worked** in a bank.', n: '*Tell* + a person. *Work* becomes *worked*.' },
            { s: '“We’ll call you.” → They **said** they **would** call me.', n: '*Will* becomes *would*; *you* becomes *me*.' },
            { s: '“I can’t come.” → She **told us** she **couldn’t** come.', n: '*Can* becomes *could*.' },
            { s: '“I’ve lost my keys.” → Tom **said** he **had lost** his keys.', n: 'Present perfect becomes past perfect.' },
          ] },
          { t: 'tip', art: 'owl', md: 'If you want to use *say* with a person, add **to**: *She said **to me** that she was tired.* But *She told me* is much more common.' },
        ],
        [
          { t: 'text', md: 'Why does the verb change? When you report, you speak **later** than the original speaker. What was true then may not be true now. So when the reporting verb is in the past (*said, told*), the verb in the reported part usually moves **one step back** in time.\n\nPronouns and time words also change, because the speaker, the place and the time are different now: *I* may become *he* or *she*; *today* becomes *that day*; *tomorrow* becomes *the next day*; *here* becomes *there*.' },
          { t: 'table', caption: 'One step back', quiz: true, explain: ['head'], head: ['Direct speech', 'Reported speech'], rows: [
            ['“I am / I’m busy.”', 'she said she was busy'],
            ['“I live in Leeds.”', 'he said he lived in Leeds'],
            ['“I’m working.”', 'she said she was working'],
            ['“I’ve finished.”', 'he said he had finished'],
            ['“I finished.”', 'he said he had finished'],
            ['“I will help.”', 'she said she would help'],
            ['“I can swim.”', 'he said he could swim'],
            ['“I must go.”', 'she said she had to go'],
          ] },
          { t: 'table', caption: 'Time and place words', explain: ['head'], head: ['Direct speech', 'Reported speech'], rows: [
            ['today', 'that day'],
            ['tomorrow', 'the next day'],
            ['yesterday', 'the day before'],
            ['next week', 'the following week'],
            ['here', 'there'],
            ['now', 'then'],
          ] },
        ],
        [
          { t: 'text', md: 'You do **not** always have to change the tense. If what the person said is **still true**, you can keep the present: *She said she **lives** in Paris* (she still does). And if the reporting verb is in the present (*She says…*), nothing changes: *She **says** she is tired.*' },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['She said me that she was tired.', 'She told me that she was tired.', 'With a person, use *tell* (or *said to me*).'],
            ['He told that he was busy.', 'He said that he was busy.', '*Tell* needs a person: *told me*, *told her*.'],
            ['She said she will come.', 'She said she would come.', 'After *said*, *will* usually becomes *would*.'],
            ['He said he can drive.', 'He said he could drive.', '*Can* becomes *could*.'],
            ['She said that “she is tired”.', 'She said that she was tired.', 'No quotation marks in reported speech.'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'Passing on a message', lines: [
            { who: 'Ben', s: 'Did you speak to Clara?' },
            { who: 'Mia', s: 'Yes. She said she couldn’t come to the meeting tomorrow.' },
            { who: 'Ben', s: 'Oh no. Did she say why?' },
            { who: 'Mia', s: 'She told me she had a doctor’s appointment.' },
            { who: 'Ben', s: 'Will she send her report?' },
            { who: 'Mia', s: 'Yes, she said she would send it tonight.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'What did Clara say? Choose the direct words.', items: [
            { q: 'She said she couldn’t come to the meeting the next day.', o: ['“I can’t come to the meeting tomorrow.”', '“I couldn’t come to the meeting yesterday.”', '“I won’t come to the meeting today.”'], why: '*Couldn’t* comes from *can’t*; *the next day* from *tomorrow*.' },
            { q: 'She said she would send it that night.', o: ['“I’ll send it tonight.”', '“I sent it tonight.”', '“I would send it tomorrow.”'], why: '*Would* comes from *will*; *that night* from *tonight*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose *said* or *told*.', items: [
            { q: 'She ___ me she was leaving.', o: ['told', 'said'], why: 'A person follows: *told me*.' },
            { q: 'He ___ that the shop was closed.', o: ['said', 'told'], why: 'No person: *said*.' },
            { q: 'They ___ us the train was late.', o: ['told', 'said'], why: 'A person follows: *told us*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Report the sentences. Start with the words given.', items: [
            { q: '“I’m very busy today.”', cue: 'She said', a: ['She said she was very busy that day.', 'She said that she was very busy that day.'], why: '*Am* → *was*; *today* → *that day*.' },
            { q: '“I’ll help you tomorrow.”', cue: 'He told me', a: ['He told me he would help me the next day.', 'He told me that he would help me the next day.'], why: '*Will* → *would*; *you* → *me*; *tomorrow* → *the next day*.' },
            { q: '“We’ve booked the hotel.”', cue: 'They said', a: ['They said they had booked the hotel.', 'They said that they had booked the hotel.'], why: 'Present perfect → past perfect.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'In the format of the B1 Preliminary exam (Reading Part 6): write ONE word in each gap.', items: [
            { q: 'When I called the hotel, the receptionist told ___ that there were no rooms left.', a: ['me'], why: '*Told* + a person.' },
            { q: 'She said that she ___ call me back later, but she never did.', a: ['would'], why: '*Will* becomes *would* in reported speech.' },
            { q: 'My brother said he ___ already seen the film.', a: ['had'], why: 'Present perfect becomes past perfect: *had seen*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Reading Part 6, you write one word without options. In a reported sentence, check two things: does *told* have a person after it, and has the verb moved one step back (*would, could, had*)?' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'lena', items: [
            { a: 'She told me she was tired.' },
            { a: 'He said he would call me later.' },
            { a: 'They said they had finished.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'She asked me if…',
      about: 'Report questions with ask if and ask where, and requests and orders with ask or tell + to.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'When you report a **question**, it stops being a question. It becomes a normal sentence inside a longer one. So the word order changes back to **subject + verb**, there is **no** *do, does* or *did*, and there is **no** question mark.\n\nFor a **yes/no question**, use **ask + if** (or **whether**): “*Are you hungry?*” → *She asked **if I was** hungry.*\n\nFor a question with a **question word** (*where, when, what, why, how*), keep the question word: “*Where do you live?*” → *He asked **where I lived**.*\n\nThe verb moves one step back, just like in reported statements.' },
          { t: 'examples', items: [
            { s: '“Are you ready?” → She **asked if I was** ready.', n: 'Yes/no question: *if* + subject + verb.' },
            { s: '“Do you like jazz?” → He **asked me if I liked** jazz.', n: '*Do* disappears; *like* becomes *liked*.' },
            { s: '“Where do you work?” → She **asked where I worked**.', n: 'Question word + subject + verb.' },
            { s: '“What time does the train leave?” → I **asked what time the train left**.', n: 'Not *what time did the train leave*.' },
            { s: '“Have you seen my phone?” → Tom **asked whether I had seen** his phone.', n: '*Whether* = *if*, a little more formal.' },
          ] },
        ],
        [
          { t: 'text', md: 'To report a **request** or an **order**, use **ask** or **tell** + a person + **to** + the base form of the verb.\n\n**Ask** is for polite requests: “*Could you open the window, please?*” → *She **asked me to open** the window.*\n\n**Tell** is for orders and instructions: “*Turn off your phones.*” → *The teacher **told us to turn off** our phones.*\n\nFor a negative, put **not** before *to*: “*Don’t be late.*” → *He told us **not to be** late.*' },
          { t: 'table', caption: 'Reporting questions and requests', explain: ['head', 'col0'], head: ['', 'Direct', 'Reported'], rows: [
            ['yes/no question', '“Is it far?”', 'He asked if it was far.'],
            ['question word', '“Why are you late?”', 'She asked why I was late.'],
            ['polite request', '“Can you help me?”', 'He asked me to help him.'],
            ['order', '“Sit down.”', 'She told us to sit down.'],
            ['negative order', '“Don’t touch it.”', 'He told me not to touch it.'],
          ] },
        ],
        [
          { t: 'text', md: 'The biggest problem with reported questions is keeping the question word order. Read your sentence again: if you see *did*, *does* or a question mark, change it.' },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['She asked where did I live.', 'She asked where I lived.', 'No *did* in reported questions; normal word order.'],
            ['He asked me was I hungry.', 'He asked me if I was hungry.', 'Yes/no questions need *if* or *whether*.'],
            ['She asked what time was it?', 'She asked what time it was.', 'Subject before verb, and no question mark.'],
            ['He told me don’t be late.', 'He told me not to be late.', 'Negative order: *not to* + verb.'],
            ['She asked me that I help her.', 'She asked me to help her.', 'Requests: *ask* + person + *to*.'],
          ] },
          { t: 'tip', art: 'owl', md: 'The same word order is used in **indirect questions**, which you met in unit 3: *Could you tell me **where the station is**?* Reported questions and indirect questions work the same way.' },
        ],
        [
          { t: 'dialogue', title: 'A job interview, told later', lines: [
            { who: 'Lucas', s: 'How was the interview?' },
            { who: 'Sara', s: 'Good, I think. First they asked me why I wanted the job.' },
            { who: 'Lucas', s: 'What else did they ask?' },
            { who: 'Sara', s: 'They asked if I could start in March, and whether I had a driving licence.' },
            { who: 'Lucas', s: 'And at the end?' },
            { who: 'Sara', s: 'They asked me to send two references, and told me not to worry if they called late.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the direct questions to the reported ones.', pairs: [
            ['“Why do you want the job?”', 'They asked why she wanted the job.'],
            ['“Can you start in March?”', 'They asked if she could start in March.'],
            ['“Do you have a driving licence?”', 'They asked whether she had a licence.'],
            ['“Please send two references.”', 'They asked her to send two references.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Report the questions and requests. Start with the words given.', items: [
            { q: '“Are you coming to the party?”', cue: 'She asked me', a: ['She asked me if I was coming to the party.', 'She asked me whether I was coming to the party.'], why: 'Yes/no question: *if* + subject + verb, one step back.' },
            { q: '“Where did you buy that jacket?”', cue: 'He asked me', a: ['He asked me where I had bought that jacket.', 'He asked me where I bought that jacket.'], why: 'No *did*; *bought* or *had bought*.' },
            { q: '“Please don’t park here.”', cue: 'The man asked us', a: ['The man asked us not to park there.'], why: 'Negative request: *not to*; *here* becomes *there*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'She asked me what time the shop closed.', why: 'Question word, then subject + verb.' },
            { a: 'He told us not to use our phones.', why: '*Told* + person + *not to* + verb.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam (Writing Part 1): your friend Sam wrote: “What did the hotel say when you called?” Choose the best sentence for your reply email.', items: [
            { q: 'Reporting the price', o: ['The receptionist told me that a double room cost 90 euros a night.', 'The receptionist told that a double room costs 90 euros.', 'The receptionist said me the room is 90 euros.'], why: '*Told me that* + the verb one step back.' },
            { q: 'Reporting a question', o: ['She asked if we wanted breakfast.', 'She asked did we want breakfast?', 'She asked we want breakfast.'], why: 'Yes/no question: *asked if* + subject + verb.' },
            { q: 'Reporting a request', o: ['She asked us to arrive before 10 pm.', 'She asked that we arrive before 10 pm?', 'She told to us arrive before 10 pm.'], why: 'Request: *asked us to* + verb.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Writing Part 1 you answer an email in about 100 words, and you must cover all the points in the notes. When a note says *Tell Sam what they said*, reported speech is the natural choice, and it shows the examiner a range of grammar.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'omar', items: [
            { a: 'She asked me if I was ready.' },
            { a: 'He asked where I lived.' },
            { a: 'The teacher told us not to be late.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'Headlines and posts',
      about: 'Talk about the news and social media with the words people really use.',
      art: 'monster',
      spreads: [
        [
          { t: 'text', md: 'People get their news in many ways today: from the **TV news**, **news websites**, **apps** and, more and more, **social media**. Each one has its own words.\n\nA newspaper or website has **articles** (longer texts) with a **headline** (the title in big letters). The people who write them are **journalists** or **reporters**. A story that has just happened is **breaking news**. The **latest** news is the most recent.\n\nOn social media, people **post** things (a photo, a video, a comment), and other people **like**, **share** and **comment on** them. Something that suddenly spreads very fast and is seen by millions of people **goes viral**. People who **follow** you see your posts; they are your **followers**.' },
          { t: 'table', caption: 'News and social media words', explain: ['head', 'col1'], head: ['Word', 'Meaning'], rows: [
            ['headline', 'the title of a news story'],
            ['breaking news', 'news about something that has just happened'],
            ['a source', 'where information comes from'],
            ['fake news', 'false stories made to look like real news'],
            ['to post', 'to put something on social media'],
            ['to share', 'to send someone else’s post to your followers'],
            ['to go viral', 'to spread very fast to millions of people'],
            ['a follower', 'a person who sees your posts'],
          ] },
        ],
        [
          { t: 'text', md: 'Because so much is posted every second, it is important to **check your sources** before you believe or share something. Ask: *Who wrote this? Is it on a real news website? Do other sources say the same?* Stories that are false but look real are called **fake news**, or **misinformation**.\n\nNotice the collocations: you **read** or **watch** the news; you **post** a photo; you **leave** a comment; a story **makes the headlines** (it becomes big news); a video **gets** a million views.' },
          { t: 'examples', items: [
            { s: 'I **read the news** on my phone every morning.', n: '*News* is uncountable: *the news is*, not *the news are*.' },
            { s: 'She **posted** a photo of her new flat.', n: 'Put it on social media.' },
            { s: 'The video **went viral** and **got** two million views in a day.', n: 'It spread very fast.' },
            { s: 'Always **check your sources** before you **share** a story.', n: 'Make sure it is true.' },
            { s: 'The rescue of the dog **made the headlines** in every newspaper.', n: 'It became big news.' },
          ] },
          { t: 'tip', art: 'owl', md: '**News** looks plural, but it is uncountable: *The news **is** good*, *a piece of news*, never *a news* or *the news are*.' },
        ],
        [
          { t: 'text', md: 'These are the most common mistakes with news words.' },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I have a news for you.', 'I have some news for you.', '*News* is uncountable.'],
            ['The news are bad.', 'The news is bad.', 'Uncountable nouns take a singular verb.'],
            ['I saw it in the internet.', 'I saw it on the internet.', 'We say *on* the internet, *on* social media.'],
            ['He commented my post.', 'He commented on my post.', 'The verb is *comment on*.'],
            ['The video became viral.', 'The video went viral.', 'The fixed phrase is *go viral*.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'bank', h: 'Complete the sentences with words from the box.', extra: ['source'], items: [
            { q: 'The story was on the front page with a huge ___.', a: 'headline', why: 'The title of a news story.' },
            { q: 'Her video of the cat went ___ overnight.', a: 'viral', why: '*Go viral*: spread very fast.' },
            { q: 'I always leave a ___ when I like a post.', a: 'comment', why: '*Leave a comment*.' },
            { q: 'He has over ten thousand ___ on social media.', a: 'followers', why: 'People who see his posts.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'I read it [in] the internet.', a: ['on'], why: '*On the internet*.' },
            { s: 'The news [are] very good today.', a: ['is'], why: '*News* takes a singular verb.' },
            { s: 'She commented [my] photo.', a: ['on my'], why: '*Comment on* something.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'In the format of the B1 Preliminary exam (Reading Part 2): match each person to the best news service.', pairs: [
            ['Ali wants short updates on his phone during the day.', 'NewsNow: alerts in fifty words or less'],
            ['Grace wants long articles to read at the weekend.', 'The Sunday Long Read: in-depth stories'],
            ['Kenji wants to check if stories online are true.', 'FactCheck: we test the stories you share'],
            ['Rosa wants local news about her town.', 'Westbridge Daily: news from your streets'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Reading Part 2, you read about five people and eight short texts, and match each person to one text. Underline what each person **needs** (short, long, local, true), then look for a text that gives **all** of it, not just one part.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'I read the news on my phone.' },
            { a: 'The video went viral.' },
            { a: 'Always check your sources.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'A very late library book',
      about: 'Read a short news story and the comments under it, and report what people said.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'This lesson puts the unit together. You will read a short news story from a local website and the comments readers left under it. Notice how the journalist uses **reported speech** to tell us what people said, and how readers use social media language in their comments.\n\nOne useful word first: a **fine** is money you must pay when you break a rule, for example when you bring a library book back late.' },
          { t: 'reading', title: 'Book returned 52 years late', md: 'A library book has been returned to Westbridge Library 52 years after it was borrowed.\n\nThe book, a guide to British birds, was taken out in 1973. Last week, a woman in her seventies brought it back with a letter. In the letter, she said she had found the book in her late father’s house. She wrote that she was very sorry and that her father had always loved birds.\n\nLibrarian Tom Ellis told reporters that the library would not ask for a fine. “We just asked her if we could keep the letter,” he said. He added that the book would go on display next to the front desk.\n\nThe story was shared thousands of times on social media after the library posted a photo of the book.' },
          { t: 'reading', title: 'Comments', md: 'Jo_B: What a lovely story! I asked my mum if she still had any old library books, and she found two!\n\nRaj K: The fine would be huge after 52 years. Nice of the library.\n\nEllaReads: My teacher always told us to look after library books. This one was looked after for half a century!' },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Read the story and the comments. Are the sentences true or false?', items: [
            { q: 'The book was borrowed in 1973.', a: 't', why: '*The book … was taken out in 1973.*' },
            { q: 'The woman’s father had returned the book.', a: 'f', why: 'She found it in her late father’s house and brought it back herself.' },
            { q: 'The library asked her to pay a fine.', a: 'f', why: '*The library would not ask for a fine.*' },
            { q: 'Jo’s mother found some old library books at home.', a: 't', why: '*She found two!*' },
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam (Reading Part 4): which sentence best fills the gap in the story?', items: [
            { q: 'The book, a guide to British birds, was taken out in 1973. ___ Last week, a woman in her seventies brought it back with a letter.', o: ['For more than fifty years, nobody knew where it was.', 'The library opens at nine every morning.', 'Birds are very popular in Britain.', 'She said she would visit again soon.'], why: 'This sentence links the date it was taken and the day it came back.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Reading Part 4, five sentences are taken out of a text and you choose where each one goes. Look at the sentences **before and after** the gap: the right sentence connects them in meaning, and words like *it*, *this* or *then* must point to something nearby.' },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Report what the people in the story said.', items: [
            { q: 'The woman: “I’m very sorry.”', cue: 'She said', a: ['She said she was very sorry.', 'She said that she was very sorry.'], why: '*Am* → *was*.' },
            { q: 'Tom Ellis: “Can we keep the letter?”', cue: 'He asked her', a: ['He asked her if they could keep the letter.', 'He asked her whether they could keep the letter.'], why: 'Yes/no question: *if* + *could*.' },
            { q: 'Ella’s teacher: “Look after library books.”', cue: 'Her teacher told them', a: ['Her teacher told them to look after library books.'], why: 'Order: *told* + person + *to*.' },
          ] },
          { t: 'text', md: 'Now think of a piece of news you heard this week: from a friend, the TV or social media. Tell it using reported speech: *My friend told me that…*, *The news said that…*, *Someone asked if…*.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'mei', items: [
            { a: 'She said she had found the book.' },
            { a: 'He told reporters there would be no fine.' },
            { a: 'The story was shared thousands of times.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
      { q: 'She ___ me she was moving to Spain.', o: ['told', 'said', 'asked'], why: '*Told* + a person.' },
      { q: 'He asked me ___ I liked my new job.', o: ['if', 'that', 'what'], why: 'Yes/no question: *if*.' },
      { q: 'The doctor told me ___ eat so much sugar.', o: ['not to', 'don’t', 'no'], why: 'Negative order: *not to*.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Report the sentences.', items: [
      { q: '“I’ll be late.”', cue: 'She said', a: ['She said she would be late.', 'She said that she would be late.'], why: '*Will* → *would*.' },
      { q: '“Where do you live?”', cue: 'He asked me', a: ['He asked me where I lived.'], why: 'No *do*; normal word order.' },
      { q: '“Please close the door.”', cue: 'She asked me', a: ['She asked me to close the door.'], why: 'Request: *asked me to*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'She asked where [did I work].', a: ['I worked'], why: 'No *did*; subject + verb.' },
      { s: 'He [said me] that he was busy.', a: ['told me'], why: '*Tell* + person.' },
      { s: 'The news [are] terrible today.', a: ['is'], why: '*News* is uncountable.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write ONE word in each gap.', items: [
      { q: 'Her post went ___ and was seen by millions.', a: ['viral'], why: '*Go viral*.' },
      { q: 'He told us that he ___ never been to Paris.', a: ['had'], why: 'Past perfect in reported speech.' },
      { q: 'I left a comment ___ her photo.', a: ['on'], why: '*A comment on* something.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'What did they say? Choose the direct words.', items: [
      { q: 'He said he couldn’t find his keys.', o: ['“I can’t find my keys.”', '“I couldn’t find your keys.”', '“I won’t find my keys.”'], why: '*Couldn’t* comes from *can’t*.' },
      { q: 'She asked if I had finished.', o: ['“Have you finished?”', '“Did I finish?”', '“You have finished.”'], why: '*Had finished* comes from *have finished*, a question.' },
    ] },
  ],
};
