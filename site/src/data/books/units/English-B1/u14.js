// English B1, unit 14, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Each lesson: a full explanation first (the rule in plain words, why, many examples, the usual mistakes, a text that
// uses it), then fewer exercises from controlled to free, one speaking task, and one task in the format of B1 Preliminary.
export const UNIT = {
  id: 'u14',
  title: 'Entertainment and culture',
  goal: 'Talk about films, books and music, give strong opinions with so and such, contrast ideas, recommend things, and write an article.',
  art: 'parrot',
  tags: { skills: ['grammar', 'vocabulary', 'speaking', 'reading', 'writing'], topics: ['so-such', 'although-however-despite', 'films', 'books', 'music', 'reviews', 'article'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'Such a good film',
      about: 'Make your opinions stronger with so and such, and give results with so … that.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'When you talk about films, books or concerts, you often want to make an opinion **stronger**. *The film was good* is fine, but *The film was **so** good* or *It was **such** a good film* shows more feeling.\n\n**So** and **such** both mean *very*, but they go with different words.\n\nUse **so** before an **adjective** or an **adverb** alone: *The ending was **so** sad.* *She sings **so** beautifully.*\n\nUse **such** before a **noun**, usually with an adjective: ***such** a long book*, ***such** an amazing voice*, ***such** good actors*. With a singular countable noun you need **a / an** after *such*: *such **a** funny story*. With plural or uncountable nouns there is no *a*: *such loud music*, *such great songs*.' },
          { t: 'table', caption: 'So or such?', explain: ['head', 'col0'], head: ['Pattern', 'Example'], rows: [
            ['so + adjective', 'The concert was so loud.'],
            ['so + adverb', 'The actors spoke so quickly.'],
            ['such + a / an + adjective + singular noun', 'It was such a strange ending.'],
            ['such + adjective + plural noun', 'They have such beautiful songs.'],
            ['such + adjective + uncountable noun', 'We had such terrible weather at the festival.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Remember the word order with **such**: *such* comes **before** *a*. Say ***such a** good film*, never *a such good film*.' },
        ],
        [
          { t: 'text', md: 'You can add a **result** with **that**: **so** + adjective + **that** …, **such** (a) + adjective + noun + **that** …\n\n*The film was **so** long **that** I fell asleep.* *It was **such** a funny show **that** we laughed all evening.*\n\nIn speech, people often leave out *that*: *The music was so loud we couldn’t talk.*\n\nWith **many**, **much**, **few** and **little**, use **so**, not *such*: *There were **so many** people at the concert.* *I had **so little** time to read.* But with *a lot of*, use **such**: *such a lot of people*.' },
          { t: 'examples', items: [
            { s: 'The book was **so** exciting **that** I read it in one night.', n: '*so* + adjective + *that* + result.' },
            { s: 'She’s **such** a talented singer.', n: '*such a* + adjective + singular noun.' },
            { s: 'They play **such** great music in that café.', n: 'Uncountable noun: no *a*.' },
            { s: 'There were **so many** people that we couldn’t see the stage.', n: '*so many* + plural noun.' },
            { s: 'It was **such** a hot day **that** the concert started late.', n: '*such a* … *that* + result.' },
            { s: 'Why was the film **so** popular?', n: '*so* + adjective in a question.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['It was so a good film.', 'It was such a good film.', 'Before *a* + noun, use *such*.'],
            ['It was a such good film.', 'It was such a good film.', '*such* comes before *a*.'],
            ['The music was such loud.', 'The music was so loud.', 'Before an adjective alone, use *so*.'],
            ['There were such many people.', 'There were so many people.', 'Use *so* with *many* and *much*.'],
            ['They have such a beautiful songs.', 'They have such beautiful songs.', 'No *a* with plural nouns.'],
          ] },
          { t: 'dialogue', title: 'After the concert', lines: [
            { who: 'Lucy', s: 'That was such an amazing concert!' },
            { who: 'Daniel', s: 'I know. The singer was so good that I forgot about the rain.' },
            { who: 'Lucy', s: 'And there were so many people! I couldn’t see the stage at the start.' },
            { who: 'Daniel', s: 'The last song was so beautiful. I’m going to listen to it all week.' },
            { who: 'Lucy', s: 'It was such a great night. Let’s buy tickets for their next tour.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose so or such.', items: [
            { q: 'The play was ___ boring that half the audience left.', o: ['so', 'such', 'such a'], why: 'Adjective alone: *so*.' },
            { q: 'It was ___ interesting documentary.', o: ['such an', 'so', 'such'], why: 'Singular noun with *an*: *such an*.' },
            { q: 'They make ___ funny videos.', o: ['such', 'so', 'such a'], why: 'Plural noun: *such* with no *a*.' },
            { q: 'There was ___ much noise that we went home.', o: ['so', 'such', 'such a'], why: 'With *much*: *so*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'She has [such] beautiful voice.', a: ['such a'], why: 'Singular noun: *such a*.' },
            { s: 'The film was [such] long that I fell asleep.', a: ['so'], why: 'Adjective alone: *so*.' },
            { s: 'It was [a such] great book.', a: ['such a'], why: '*such* goes before *a*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with the word given.', items: [
            { q: 'The story was very sad. I cried at the end.', cue: 'so', a: ['The story was so sad that I cried at the end.', 'The story was so sad I cried at the end.'], why: '*so* + adjective + *that* + result.' },
            { q: 'The match was very exciting. Nobody left early.', cue: 'such', a: ['It was such an exciting match that nobody left early.', 'It was such an exciting match nobody left early.'], why: '*such an* + adjective + noun + *that*.' },
            { q: 'The band was very popular. The tickets sold out in an hour.', cue: 'so', a: ['The band was so popular that the tickets sold out in an hour.', 'The band was so popular the tickets sold out in an hour.'], why: '*so* + adjective + *that* + result.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam, Reading part 5: choose the word that fits each gap.', items: [
            { q: 'Last night’s show was ___ a success that the theatre added two more dates.', o: ['such', 'so', 'very'], why: '*such a success* + *that*.' },
            { q: 'The actors were ___ good that the audience stood up at the end.', o: ['so', 'such', 'too'], why: '*so* + adjective + *that*.' },
            { q: 'There were ___ many people outside that the police closed the road.', o: ['so', 'such', 'such a'], why: '*so many* + plural noun.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Reading part 5, the options are often very close in meaning, like *so*, *such* and *very*. The answer depends on the **words after the gap**: is there *a* + noun, an adjective alone, or *many*? Check that before you choose.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'lena', items: [
            { a: 'It was such a good film.' },
            { a: 'The ending was so sad.' },
            { a: 'There were so many people at the concert.' },
            { a: 'The book was so exciting that I read it in one night.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'Although it was long…',
      about: 'Contrast two ideas with although, even though, however, despite and in spite of.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Opinions about films and books are rarely all good or all bad. To talk about **two different ideas** in a balanced way, you need words of **contrast**. You already know **but**: *The film was long, **but** it was great.* At B1 you need a few more, and each one works in a different way in the sentence.\n\n**Although** and **even though** are followed by a **full sentence** (subject + verb). *Even though* is stronger and more surprising. The *although* part can come first or second: ***Although** the film was long, I enjoyed it.* *I enjoyed the film **although** it was long.* When it comes first, put a **comma** after it.\n\n**However** connects **two sentences**. It usually starts the second sentence and has a comma after it: *The book had great reviews. **However**, I found it boring.*' },
          { t: 'table', caption: 'Words of contrast', explain: ['head', 'col1'], head: ['Word', 'What comes next', 'Example'], rows: [
            ['but', 'a sentence, joined with a comma', 'The tickets were expensive, but the show was worth it.'],
            ['although / even though', 'a sentence (subject + verb)', 'Although it was raining, the festival continued.'],
            ['however', 'a new sentence, after a full stop', 'The food was good. However, the service was slow.'],
            ['despite / in spite of', 'a noun or -ing', 'Despite the rain, the festival continued.'],
          ] },
        ],
        [
          { t: 'text', md: '**Despite** and **in spite of** mean the same as *although*, but they are followed by a **noun** or an **-ing form**, **not** by a sentence.\n\n***Despite** the rain, we went to the concert.* ***In spite of** being tired, she watched the whole film.*\n\nNotice: *despite* has no *of*, but *in spite of* does. Never say *despite of*.\n\nIf you want to use a full sentence after *despite*, add **the fact that**: ***Despite the fact that** it was raining, we went.* But usually it is easier to use *although*.' },
          { t: 'examples', items: [
            { s: '**Although** I’m not a fan of jazz, I loved the concert.', n: '*although* + subject + verb.' },
            { s: 'She finished the book **even though** she didn’t like it.', n: '*even though*: a stronger, more surprising contrast.' },
            { s: 'The film won three prizes. **However**, it wasn’t a big success.', n: '*However* starts the second sentence.' },
            { s: '**Despite** the bad reviews, the show was full every night.', n: '*despite* + noun.' },
            { s: '**In spite of** feeling ill, he played the guitar all evening.', n: '*in spite of* + -ing.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['Despite of the rain, we went.', 'Despite the rain, we went.', '*despite* has no *of*.'],
            ['Despite it was raining, we went.', 'Although it was raining, we went.', 'After *despite*, use a noun or *-ing*, not a sentence.'],
            ['Although it was late, but we stayed.', 'Although it was late, we stayed.', 'Do not use *although* and *but* together.'],
            ['The film was long, however it was good.', 'The film was long. However, it was good.', '*However* starts a new sentence.'],
          ] },
          { t: 'reading', title: 'A review: The Lighthouse Keeper', md: 'Although I don’t usually enjoy slow films, *The Lighthouse Keeper* kept me interested from start to finish. It tells the story of an old man who lives alone on a small island and the young journalist who comes to interview him.\n\nThe photography is beautiful. However, some scenes are much too long, and I checked my watch more than once in the middle of the film. Despite this, the ending is so powerful that most people in the cinema were silent when the lights came on.\n\nThe two main actors are excellent, even though one of them has never been in a film before. In spite of a small budget, the director has made something really special. I would recommend it to anyone who likes quiet, thoughtful stories – but take a coffee with you!' },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Read the review. Are the sentences true, false or not given?', ng: true, items: [
            { q: 'The writer usually likes slow films.', a: 'f', why: '*I don’t usually enjoy slow films.*' },
            { q: 'The writer thinks some scenes are too long.', a: 't', why: '*some scenes are much too long*.' },
            { q: 'The film was very expensive to make.', a: 'f', why: 'It had *a small budget*.' },
            { q: 'The film has won several prizes.', a: 'ng', why: 'The review does not mention prizes.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best word.', items: [
            { q: '___ the long queue, we got good seats.', o: ['Despite', 'Although', 'However'], why: 'A noun follows: *despite*.' },
            { q: '___ it was expensive, the concert was worth every penny.', o: ['Although', 'Despite', 'In spite of'], why: 'A full sentence follows: *although*.' },
            { q: 'The book was popular. ___, I didn’t enjoy it.', o: ['However', 'Although', 'Despite'], why: 'It starts a new sentence: *However*.' },
            { q: 'He kept singing in spite of ___ a cold.', o: ['having', 'he had', 'have'], why: '*in spite of* + -ing.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with the word given.', items: [
            { q: 'It was raining, but the concert went ahead.', cue: 'Although', a: ['Although it was raining, the concert went ahead.'], why: '*Although* + sentence, then a comma.' },
            { q: 'The film had bad reviews, but it was a big success.', cue: 'Despite', a: ['Despite the bad reviews, it was a big success.', 'Despite the bad reviews, the film was a big success.'], why: '*Despite* + noun phrase, no *of*.' },
            { q: 'She was tired, but she went to the party.', cue: 'In spite of', a: ['In spite of being tired, she went to the party.'], why: '*In spite of* + -ing.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam, Reading part 3: read the review again and choose the answer.', items: [
            { q: 'What is the writer’s overall opinion of the film?', o: ['It is very good, although it is slow in places.', 'It is too slow to enjoy.', 'It is only good for people who like journalism.'], why: 'The writer recommends it but says some scenes are too long.' },
            { q: 'Why does the writer mention coffee at the end?', o: ['To make a joke about how slow some parts are.', 'Because the cinema sells good coffee.', 'Because the film is about a café.'], why: 'A light joke: you might feel sleepy in the slow parts.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Reading part 3 you read a longer text and answer questions about the **writer’s opinion** and **purpose**. Words of contrast like *however* and *despite this* are important: the writer’s real opinion often comes **after** them.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'mei', items: [
            { a: 'Although it was long, I enjoyed it.' },
            { a: 'Despite the rain, the festival continued.' },
            { a: 'However, the ending was a bit weak.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'You should watch it',
      about: 'Talk about films, books and music, and recommend things to other people.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: 'To talk well about entertainment, you need the right words for each kind. A **film** (in American English, a *movie*) has a **plot** (the story), **characters**, a **cast** (all the actors), a **director** and a **soundtrack**. A **book** has an **author**, **chapters** and a **plot**; it can be a **novel**, a **biography** or a **thriller**. **Music** has **lyrics** (the words of a song), a **band** or a **singer**, an **album** and a **tour**.\n\nTo describe them, use adjectives with real meaning, not only *good* and *bad*: **gripping** (so exciting you cannot stop), **moving** (it makes you feel emotional), **hilarious** (very funny), **predictable** (you know what will happen), **disappointing**, **catchy** (a song you cannot forget).' },
          { t: 'table', caption: 'Kinds of films and books', explain: ['head', 'col1'], head: ['Word', 'What it is'], rows: [
            ['a thriller', 'an exciting story with danger or crime'],
            ['a comedy', 'a funny film or show'],
            ['a documentary', 'a film about real facts and events'],
            ['science fiction', 'a story about the future, space or technology'],
            ['a biography', 'the story of a real person’s life'],
            ['a series', 'a show with many episodes'],
          ] },
          { t: 'tip', art: 'owl', md: 'Be careful with **-ed** and **-ing** adjectives: a film is **disappointing** or **boring**; *you* are **disappointed** or **bored**. *I was bored* means you didn’t enjoy it. *I was boring* means other people didn’t enjoy **you**!' },
        ],
        [
          { t: 'text', md: 'When you **recommend** something, you give your opinion and a reason, and you say who would like it.\n\n**You should** watch / read / listen to … *You **should** watch it – it’s hilarious.*\n**I’d recommend** it to anyone who … *I’d **recommend** it to anyone who likes history.* (Notice: *recommend* **it to** someone, not *recommend you it*.)\n**It’s worth** + -ing: *It’s **worth** watching.* (= it is good enough to spend time on.)\n**If you like** … , **you’ll love** … : *If you like thrillers, you’ll love this book.*\n\nTo **ask** for a recommendation, say ***Can you recommend** a good book?* or ***What would you recommend**?*' },
          { t: 'examples', items: [
            { s: 'It’s a really **gripping** thriller. I’d **recommend** it **to** anyone.', n: '*recommend* + it + *to* + person.' },
            { s: 'The soundtrack is so **catchy**. I can’t stop singing it.', n: '*catchy*: you can’t forget it.' },
            { s: 'The new series is **worth watching**, even if the first episode is slow.', n: '*worth* + -ing.' },
            { s: '**If you like** science fiction, **you’ll love** this book.', n: 'A first conditional for recommending.' },
            { s: 'The ending was so **predictable**. I guessed it after ten minutes.', n: '*predictable*: you know what will happen.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I recommend you this book.', 'I recommend this book to you.', '*recommend* + thing + *to* + person.'],
            ['The film was very bored.', 'The film was very boring.', 'The film is *boring*; you are *bored*.'],
            ['It’s worth to see.', 'It’s worth seeing.', '*worth* + -ing.'],
            ['The letters of the song are beautiful.', 'The lyrics of the song are beautiful.', 'The words of a song are *lyrics*.'],
          ] },
          { t: 'dialogue', title: 'What should I watch?', lines: [
            { who: 'Sam', s: 'I’ve got a long train journey tomorrow. Can you recommend a good series?' },
            { who: 'Mia', s: 'What kind of things do you like?' },
            { who: 'Sam', s: 'Comedy, mostly. Nothing too serious.' },
            { who: 'Mia', s: 'Then you should watch *Flat Six*. It’s hilarious, and each episode is only twenty minutes.' },
            { who: 'Sam', s: 'Is it worth downloading the whole series?' },
            { who: 'Mia', s: 'Definitely. If you like the first episode, you’ll love the rest.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the word and its meaning.', pairs: [
            ['gripping', 'so exciting you cannot stop'],
            ['hilarious', 'very funny'],
            ['predictable', 'you know what will happen'],
            ['moving', 'it makes you feel emotional'],
            ['catchy', 'easy to remember and hard to forget'],
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'I fell asleep. The film was really ___.', o: ['boring', 'bored', 'bore'], why: 'The film causes the feeling: *boring*.' },
            { q: 'I’d recommend it ___ anyone who likes music.', o: ['to', 'for', 'at'], why: '*recommend* something *to* someone.' },
            { q: 'The museum is worth ___ if you’re in Paris.', o: ['visiting', 'to visit', 'visit'], why: '*worth* + -ing.' },
            { q: 'The ___ of this song are about a lost love.', o: ['lyrics', 'letters', 'words list'], why: 'The words of a song are *lyrics*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam, Reading part 2: three friends want something to watch. Choose the best one for each person.', items: [
            { q: 'Ana wants something true about the natural world, and she has only an hour.', o: ['“Wild Coasts”: a 55-minute documentary about the animals of the Atlantic coast.', '“Red Planet”: a two-hour science fiction film about a trip to Mars.', '“Office Life”: a comedy series about a crazy company.'], why: 'Only *Wild Coasts* is true (a documentary), about nature, and under an hour.' },
            { q: 'Pedro loves to laugh and wants short episodes to watch on his phone.', o: ['“Office Life”: a comedy series about a crazy company, 15-minute episodes.', '“Wild Coasts”: a 55-minute documentary about the animals of the Atlantic coast.', '“The Long Night”: a serious three-hour historical drama.'], why: 'A comedy with short episodes.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Reading part 2 you match five people to the best of eight short texts. Each person has **two or three** needs (for example *true story*, *short*, *about nature*). The right text matches **all** of them. A text that matches only one need is a trap.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'kofi', items: [
            { a: 'You should watch it. It’s hilarious.' },
            { a: 'I’d recommend it to anyone who likes history.' },
            { a: 'If you like thrillers, you’ll love this book.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'Writing an article',
      about: 'Plan and write an article for the B1 Preliminary exam, Writing part 2.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'In the B1 Preliminary exam, **Writing part 2** gives you a choice: a **story** or an **article**. If you choose the article, you read a short announcement from a magazine or website that asks readers a question, and you write about **100 words** in answer.\n\nAn article is written for **other readers**, not for one friend, so it should be **interesting** and a little **personal**. A good article has:\n\nA **title** that catches the reader’s attention.\nAn **opening** that speaks to the reader, often with a **question**: *Have you ever watched a film that changed the way you think?*\nTwo short **paragraphs** that answer every part of the question, with **examples** and **reasons**.\nAn **ending** that gives your final opinion or speaks to the reader again.' },
          { t: 'table', caption: 'Useful language for an article', explain: ['head', 'col0'], head: ['Purpose', 'Example'], rows: [
            ['start by speaking to the reader', 'Do you love music as much as I do?'],
            ['give your opinion', 'For me, the best thing about … is …'],
            ['give a reason', 'This is because … / That’s why …'],
            ['give an example', 'For example, … / Last year, …'],
            ['contrast two ideas', 'Although … , … / However, …'],
            ['end strongly', 'So, if you get the chance, …! / In the end, …'],
          ] },
        ],
        [
          { t: 'text', md: 'Read the task and the article a student wrote. Notice the title, the question at the start, the paragraphs, and the language from this unit: **so** and **such**, **although** and **however**, and recommendations.\n\n**The task:** *We want to know about your favourite kind of entertainment! What do you enjoy doing in your free time: watching films, reading, going to concerts…? Why do you like it? Write an article answering these questions.*' },
          { t: 'reading', title: 'Why I can’t stop going to concerts', md: 'Have you ever sung so loudly that you lost your voice? I have, many times, because live music is my favourite thing in the world.\n\nAlthough I enjoy films and books, nothing is as exciting as being in a crowd when your favourite band comes on stage. Last summer I went to a festival by the sea. It rained all weekend. However, it was such an amazing experience that I didn’t care about my wet shoes!\n\nConcerts can be expensive, but I think they are worth every penny. So, if you get the chance, buy a ticket, forget your phone, and just enjoy the music!' },
          { t: 'tip', art: 'owl', md: 'Count your words: about **100** is right. Much shorter, and you probably have not answered every part of the question. Much longer, and you lose time for checking. Always leave two minutes to check verb forms, spelling and **capital letters**.' },
        ],
        [
          { t: 'table', caption: 'Common mistakes in articles', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['Dear readers, I write to tell you…', 'Have you ever…? / Do you love…?', 'An article is not a letter: start with a question or a strong idea.'],
            ['I like concerts. They are good. I go a lot.', 'I love concerts because they are so exciting.', 'Join ideas and give reasons.'],
            ['It was such amazing experience.', 'It was such an amazing experience.', 'Singular noun: *such an*.'],
            ['Although it rained, but we stayed.', 'Although it rained, we stayed.', 'Not *although* and *but* together.'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Look at the student’s article again and choose the answer.', items: [
            { q: 'How does the article begin?', o: ['With a question to the reader.', 'With “Dear readers”.', 'With the name of a band.'], why: 'It starts *Have you ever sung so loudly…?*' },
            { q: 'Which word does the writer use to contrast the rain and the great experience?', o: ['However', 'Because', 'So'], why: '*It rained all weekend. However, …*' },
            { q: 'What does the writer do in the last paragraph?', o: ['Gives a final recommendation to the reader.', 'Describes another festival.', 'Says concerts are too expensive.'], why: '*So, if you get the chance, buy a ticket…*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order to make sentences from a short article.', items: [
            { a: 'Have you ever read a book that changed your life?', why: 'A good article opens with a question to the reader.' },
            { a: 'Although I don’t read much, one novel made me want to travel.', why: '*Although* + sentence, then the main idea.' },
            { a: 'So, if you get the chance, read it!', why: 'The ending speaks to the reader again.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam, Writing part 2: choose the best sentence for each part of an article about films.', items: [
            { q: 'The best opening:', o: ['Is there anything better than a good film on a rainy evening?', 'Dear Sir or Madam, I am writing about films.', 'Films. I like them.'], why: 'A question that speaks to the reader is a strong opening.' },
            { q: 'The best sentence to give a reason:', o: ['I love comedies because they make me forget my problems.', 'I love comedies.', 'Comedies, films, series and documentaries.'], why: 'It gives the opinion **and** a reason with *because*.' },
            { q: 'The best ending:', o: ['So switch off your phone and enjoy a great film tonight!', 'That is all. Goodbye.', 'Films are long sometimes.'], why: 'It gives a final, friendly recommendation.' },
          ] },
          { t: 'tip', art: 'owl', md: 'The examiner checks four things in Writing part 2: did you answer **all** the questions, is it **interesting** for the reader, is it **organised** in paragraphs with linking words, and is the **language** varied and correct? Using *so / such*, *although* and *however* well helps with the last two.' },
        ],
        [
          { t: 'text', md: 'Now plan your own article for the same task: *What do you enjoy doing in your free time, and why?* Write a title, an opening question, two short paragraphs with reasons and an example, and a strong ending. Then say these sentences after the tutor to practise the article style.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'omar', items: [
            { a: 'Have you ever watched a film that changed your life?' },
            { a: 'For me, the best thing about music is the feeling.' },
            { a: 'So, if you get the chance, buy a ticket!' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'Choose so or such.', items: [
      { q: 'It was ___ a long film that I needed a break.', o: ['such', 'so', 'very'], why: '*such a* + adjective + noun.' },
      { q: 'The concert was ___ loud.', o: ['so', 'such', 'such a'], why: 'Adjective alone: *so*.' },
      { q: 'There were ___ many people that we went home.', o: ['so', 'such', 'such a'], why: '*so many*.' },
      { q: 'They play ___ good music.', o: ['such', 'so', 'such a'], why: 'Uncountable noun: *such*, no *a*.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Choose the best word.', items: [
      { q: '___ the bad weather, the festival was a success.', o: ['Despite', 'Although', 'However'], why: 'A noun follows: *despite*.' },
      { q: '___ I don’t like horror films, I enjoyed this one.', o: ['Although', 'Despite', 'In spite of'], why: 'A sentence follows: *although*.' },
      { q: 'The book is long. ___, it is never boring.', o: ['However', 'Although', 'Despite'], why: 'Starts a new sentence: *However*.' },
      { q: 'She went on stage in spite of ___ nervous.', o: ['feeling', 'she felt', 'feel'], why: '*in spite of* + -ing.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'It was [a such] good book.', a: ['such a'], why: '*such* before *a*.' },
      { s: '[Despite of] the price, the tickets sold out.', a: ['Despite', 'In spite of'], why: '*despite* has no *of*.' },
      { s: 'I recommend [you this film].', a: ['this film to you'], why: '*recommend* + thing + *to* + person.' },
      { s: 'The documentary is worth [to watch].', a: ['watching'], why: '*worth* + -ing.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the word and its meaning.', pairs: [
      ['a thriller', 'an exciting story with danger or crime'],
      ['lyrics', 'the words of a song'],
      ['hilarious', 'very funny'],
      ['predictable', 'you know what will happen'],
      ['a documentary', 'a film about real facts'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with the word given.', items: [
      { q: 'The show was very funny. We laughed all evening.', cue: 'so', a: ['The show was so funny that we laughed all evening.', 'The show was so funny we laughed all evening.'], why: '*so* + adjective + *that*.' },
      { q: 'It was raining, but we watched the match.', cue: 'Although', a: ['Although it was raining, we watched the match.'], why: '*Although* + sentence.' },
    ] },
    { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
      { q: 'I was ___ by the ending. I expected more.', o: ['disappointed', 'disappointing', 'disappoint'], why: 'How *you* feel: *disappointed*.' },
      { q: 'A good article usually starts with a ___ to the reader.', o: ['question', 'letter', 'list'], why: 'A question catches the reader’s attention.' },
    ] },
  ],
};
