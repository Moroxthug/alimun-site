// English B2, unit 13, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Each lesson: a full explanation first (the rule in plain words, why, many examples, the usual mistakes, a text that
// uses it), then fewer exercises from controlled to free, one speaking task, and one task in the format of B2 First.
export const UNIT = {
  id: 'u13',
  title: 'Arts and creativity',
  goal: 'Put the focus where you want it with cleft sentences and emphatic do, choose strong adjectives with the right adverbs, describe art, music and performances, and write a review for B2 First.',
  art: 'parrot',
  tags: { skills: ['grammar', 'vocabulary', 'speaking', 'reading', 'writing'], topics: ['cleft-sentences', 'emphasis', 'extreme-adjectives', 'art', 'music', 'performances', 'review'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'What I love is the music',
      about: 'Use cleft sentences (What I love is…, It was… that…) to put the focus on the most important part of a sentence.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'In a normal English sentence, the most important new information usually comes **at the end**. But sometimes you want to point at one part of the sentence and say: *this* is the important bit. A **cleft sentence** does exactly that. *Cleft* means *split*: you split one sentence into two parts so that one part stands out.\n\nCompare: *I love the music in this film.* (neutral) and ***What I love about this film is the music.*** (the music is now clearly the main point).\n\nThere are two common types at B2: the **what**-cleft and the **it**-cleft.' },
          { t: 'table', caption: 'Two kinds of cleft sentence', explain: ['head', 'col2'], head: ['Pattern', 'Example', 'What it does'], rows: [
            ['What + clause + be + focus', 'What I enjoyed most was the dancing.', 'Focus on a thing or an idea'],
            ['What + subject + do/did + be + infinitive', 'What she did was paint the whole wall.', 'Focus on an action'],
            ['It + be + focus + that/who + clause', 'It was the singer who impressed me.', 'Focus on one person, thing, time or place'],
            ['It + be + focus + that + clause', 'It was in Paris that they first performed.', 'Focus on a time or a place'],
          ] },
          { t: 'tip', art: 'owl', md: 'In a **what**-cleft, the verb **be** agrees with what comes after it in normal use: *What I need **is** a holiday.* With a plural focus, many speakers still say *is*: *What I need **is** two weeks off.* Both are heard, but in the exam *is* is always safe.' },
        ],
        [
          { t: 'text', md: 'The **it**-cleft is very useful when you want to **correct** someone or **contrast** two things. The stressed word in speech is the focus word.\n\n*A: Did you like the actors?*\n*B: Not really. **It was the story that** I liked.*\n\nYou can put almost any part of the sentence in focus: a person, an object, a time, a place, or a reason.\n\n*Ana painted the mural in May.*\n→ ***It was Ana who** painted the mural.* (not someone else)\n→ ***It was the mural that** Ana painted.* (not the door)\n→ ***It was in May that** Ana painted it.* (not in June)\n\nFor people, use **who** or **that**. For everything else, use **that**.' },
          { t: 'examples', items: [
            { s: '**What surprised me was** how young the band was.', n: 'A what-cleft with a whole clause as the focus.' },
            { s: '**What we did was** buy tickets for every night.', n: 'Focus on an action: *do* + infinitive without *to*.' },
            { s: '**It was** the lighting **that** made the show special.', n: 'An it-cleft: the lighting, not the music.' },
            { s: '**It wasn’t until** the second act **that** I understood the story.', n: 'A very common pattern: *It wasn’t until… that…*' },
            { s: '**All I want is** a quiet evening with a good book.', n: '*All* works like *what*: *All I want* = *the only thing I want*.' },
            { s: '**The reason why** I left early **was** the noise.', n: 'Another way to put the reason in focus.' },
          ] },
        ],
        [
          { t: 'text', md: 'Cleft sentences are strong. If you use them in every sentence, your English sounds unnatural. Use them for the **one point** you really want people to remember, especially in speaking and in the conclusion of a piece of writing.' },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['What I like it is the music.', 'What I like is the music.', 'Do not add *it*: *what* is already the object.'],
            ['It was Maria which sang.', 'It was Maria who sang.', 'For a person, use *who* or *that*.'],
            ['What she did was to paint the wall.', 'What she did was paint the wall.', 'After *What… did was*, the infinitive usually has no *to*.'],
            ['It was until midnight that I slept.', 'It wasn’t until midnight that I slept.', 'This pattern needs the negative: *It wasn’t until…*'],
          ] },
          { t: 'dialogue', title: 'After the concert', lines: [
            { who: 'Laura', s: 'So, what did you think? Weren’t the singers amazing?' },
            { who: 'Marcus', s: 'They were good, but it was the orchestra that really impressed me.' },
            { who: 'Laura', s: 'Really? What I noticed was how quiet the audience was.' },
            { who: 'Marcus', s: 'True. It wasn’t until the last song that anyone even moved.' },
            { who: 'Laura', s: 'All I want now is to hear the whole thing again.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct cleft sentence.', items: [
            { q: '', o: ['What I enjoyed most was the costumes.', 'What I enjoyed it most was the costumes.', 'That I enjoyed most was the costumes.'], why: 'A what-cleft starts with *What* + clause, with no extra *it*.' },
            { q: '', o: ['It was my brother who bought the tickets.', 'It was my brother which bought the tickets.', 'It was my brother what bought the tickets.'], why: 'For a person: *who* (or *that*).' },
            { q: '', o: ['It wasn’t until I read the book that I understood the film.', 'It was until I read the book that I understood the film.', 'It wasn’t until I read the book when I understood the film.'], why: 'The pattern is *It wasn’t until… that…*' },
            { q: '', o: ['What they did was record the album at home.', 'What they did was recorded the album at home.', 'What they did it was record the album at home.'], why: 'After *What… did was*, use the infinitive without *to*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence so that the underlined part is the focus. Use the word given.', items: [
            { q: 'The final scene made me cry.', cue: 'It', a: ['It was the final scene that made me cry.', 'It was the final scene which made me cry.'], why: '*It was* + focus + *that* + the rest of the sentence.' },
            { q: 'I love her voice.', cue: 'What', a: ['What I love is her voice.', 'What I love about her is her voice.'], why: '*What* + clause + *is* + focus.' },
            { q: 'We only understood the joke the next day.', cue: 'until', a: ['It wasn’t until the next day that we understood the joke.', 'It was not until the next day that we understood the joke.'], why: '*It wasn’t until* + time + *that*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'In the format of the B2 First exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first. Use the word given.', items: [
            { q: 'I only realised how talented she was when I saw her live.', cue: 'until', a: ['It wasn’t until I saw her live that I realised how talented she was.', 'It was not until I saw her live that I realised how talented she was.'], why: '*Only… when* becomes *It wasn’t until… that…*' },
            { q: 'The thing that annoyed me was the noise from the bar.', cue: 'what', a: ['What annoyed me was the noise from the bar.'], why: '*The thing that* = *What*.' },
            { q: 'Tom suggested the trip to the gallery, not Sara.', cue: 'who', a: ['It was Tom who suggested the trip to the gallery.', 'It was Tom, not Sara, who suggested the trip to the gallery.'], why: 'An it-cleft puts Tom in focus.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 4** you must use **between two and five words**, including the word given, and you must **not change** the word given. Contractions like *wasn’t* count as **two** words. The six questions often test fixed patterns like *It wasn’t until…* and *What… is…*.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor. Stress the word in focus.', tutor: 'sofia', items: [
            { a: 'What I loved was the ending.' },
            { a: 'It was the drummer who stole the show.' },
            { a: 'It wasn’t until the interval that I relaxed.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'It was absolutely brilliant',
      about: 'Add emphasis with do, does and did, and match gradable and extreme adjectives with the right adverbs.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Another simple way to add emphasis is to use **do, does** or **did** in a positive sentence. Normally we only use these in questions and negatives, but in a positive sentence they make the verb **stronger**. In speech, *do / does / did* is stressed.\n\n*I **do** like jazz.* (Really, I like it, even if you think I don’t.)\n*She **does** play well, doesn’t she?*\n*We **did** enjoy the evening, thank you.*\n\nAfter *do / does / did*, the main verb is in the **base form**: *She does **play***, not *She does plays*.\n\nWe use this emphasis to **contrast** with something someone said or thought, to **insist**, or to be **polite** and warm (*I did enjoy it!*). In imperatives, *do* makes an invitation warmer: ***Do** come in! **Do** sit down.*' },
          { t: 'examples', items: [
            { s: 'I don’t go to the theatre often, but I **do** love musicals.', n: 'Contrast: not theatre in general, but musicals, yes.' },
            { s: 'He says he can’t draw, but he **does** have talent.', n: 'Insisting that something is true.' },
            { s: 'Thank you, we **did** enjoy the concert.', n: 'Polite and warm.' },
            { s: '**Do** take a programme; they’re free.', n: 'A friendly invitation.' },
          ] },
        ],
        [
          { t: 'text', md: 'Adjectives come in two groups. **Gradable** adjectives can be more or less: *good, tired, big, cold, interesting*. You can be a little cold or very cold. **Extreme** (or **non-gradable**) adjectives already mean *very* + adjective: *brilliant* (= very good), *exhausted* (= very tired), *huge* (= very big), *freezing* (= very cold), *fascinating* (= very interesting).\n\nThe adverb must match the group. With **gradable** adjectives, use **very, extremely, really, fairly, a bit**. With **extreme** adjectives, use **absolutely, completely, totally, utterly** or **really**. **Really** works with both. But *very brilliant* and *absolutely good* sound wrong.' },
          { t: 'table', caption: 'Gradable and extreme adjectives', explain: ['head'], head: ['Gradable (very…)', 'Extreme (absolutely…)'], rows: [
            ['good', 'brilliant, superb, wonderful'],
            ['bad', 'awful, terrible, dreadful'],
            ['interesting', 'fascinating'],
            ['surprised', 'astonished, amazed'],
            ['tired', 'exhausted'],
            ['big', 'huge, enormous'],
            ['funny', 'hilarious'],
            ['beautiful', 'stunning, gorgeous'],
          ] },
          { t: 'tip', art: 'owl', md: '**Quite** is tricky. With a gradable adjective it means *fairly*: *quite good* = good, but not very. With an extreme adjective it means *completely*: *quite brilliant* = absolutely brilliant. Your voice helps the listener to understand.' },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['The show was very brilliant.', 'The show was absolutely brilliant.', '*Brilliant* is extreme: use *absolutely*, not *very*.'],
            ['The film was absolutely good.', 'The film was really good.', '*Good* is gradable: use *very* or *really*.'],
            ['She does plays the cello.', 'She does play the cello.', 'After emphatic *does*, use the base form.'],
            ['I did enjoyed it.', 'I did enjoy it.', 'After *did*, use the base form.'],
          ] },
          { t: 'reading', title: 'A night at the Riverside Theatre', md: 'I don’t usually go to comedy shows, but I did want to see Maya Bell, so I bought a ticket for her first night at the Riverside Theatre.\n\nThe theatre itself is absolutely stunning, with a huge painted ceiling. My seat was fairly comfortable, although the room was extremely warm.\n\nMaya’s first ten minutes were a bit slow, and I was starting to feel tired. Then she told a story about her grandmother learning to use a phone, and the whole audience was in tears. It was hilarious. By the end, I was exhausted from laughing.\n\nI do recommend the show, but book early: the tickets are selling fast.' },
          { t: 'ex', kind: 'tf', h: 'Read the review. Are the sentences true or false?', items: [
            { q: 'The writer often goes to comedy shows.', a: 'f', why: '*I don’t usually go to comedy shows.*' },
            { q: 'The writer thought the theatre building was very beautiful.', a: 't', why: '*absolutely stunning*' },
            { q: 'The show was funny from the first minute.', a: 'f', why: '*Maya’s first ten minutes were a bit slow.*' },
            { q: 'The writer recommends the show.', a: 't', why: '*I do recommend the show.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the adverb that fits.', items: [
            { q: 'The view from the top was ___ stunning.', o: ['absolutely', 'very', 'a bit'], why: '*Stunning* is extreme: *absolutely*.' },
            { q: 'The second song was ___ good, but not their best.', o: ['fairly', 'absolutely', 'utterly'], why: '*Good* is gradable; *fairly* means *not very*.' },
            { q: 'After the eight-hour rehearsal we were ___ exhausted.', o: ['completely', 'very', 'slightly'], why: '*Exhausted* is extreme: *completely*.' },
            { q: 'The sculpture was ___ big, about two metres tall.', o: ['quite', 'absolutely', 'totally'], why: '*Big* is gradable; *quite big* = fairly big.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'She [does knows] every song by heart.', a: ['does know', 'knows'], why: 'After *does*, use the base form: *does know*.' },
            { s: 'The comedian was very [hilarious].', a: ['funny'], why: '*Hilarious* is extreme; with *very*, use a gradable word like *funny*.' },
            { s: 'We [did enjoyed] the exhibition.', a: ['did enjoy', 'enjoyed'], why: 'After *did*, use the base form.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'wordform', h: 'In the format of the B2 First exam (Reading and Use of English Part 3): use the word in capitals to form a word that fits the gap.', items: [
            { q: 'The concert was an ___ success: every ticket was sold.', base: 'astonish', a: ['astonishing'], why: 'An adjective before *success*: *astonishing*.' },
            { q: 'Her ___ as a painter grew after the exhibition in Berlin.', base: 'popular', a: ['popularity'], why: 'A noun after *Her*: *popularity*.' },
            { q: 'The actors were ___ prepared and forgot several lines.', base: 'adequate', a: ['inadequately'], why: 'An adverb before *prepared*, with a negative prefix: *inadequately*.' },
            { q: 'The museum is famous for its ___ of modern photography.', base: 'collect', a: ['collection'], why: 'A noun after *its*: *collection*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 3**, first decide **what kind of word** the gap needs: noun, adjective, adverb or verb. Then check if it needs a **negative** prefix (*un-, in-, dis-*) or a **plural**. Read the whole sentence: the meaning often tells you if the word is positive or negative.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'I do love a good thriller.' },
            { a: 'The ending was absolutely brilliant.' },
            { a: 'It was fairly interesting, but a bit long.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'A breathtaking performance',
      about: 'Describe art, music and performances with precise words and natural collocations.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'To talk well about the arts, you need two things: **precise words** for the people, places and parts of an artwork or show, and **collocations**, the word partners that native speakers use together.\n\nFor a **performance** (a play, a concert, a dance show), think about the **cast** (all the actors), the **lead** (the main role), the **script** or **plot**, the **set** (the scenery on the stage), the **lighting**, and the **audience**. A show can **get rave reviews** (very positive) or **get mixed reviews**, and it can be **a sell-out** (all tickets sold).\n\nFor **visual art**, talk about the **artist**, the **exhibition**, a **painting**, a **sculpture**, a **portrait** (of a person) or a **landscape** (of the countryside), the **style**, the **colours** and the **light**.' },
          { t: 'table', caption: 'Useful collocations', explain: ['head', 'col1'], head: ['Collocation', 'Meaning'], rows: [
            ['give a powerful performance', 'act or play in a strong, memorable way'],
            ['bring a character to life', 'make a character feel real'],
            ['hold the audience’s attention', 'keep people interested'],
            ['a moving / gripping story', 'one that makes you feel emotion / that you cannot stop following'],
            ['a breathtaking view or performance', 'so beautiful or impressive that you almost stop breathing'],
            ['strike a chord with someone', 'feel familiar or meaningful to them'],
            ['be out of tune', 'singing or playing the wrong notes'],
            ['be well worth seeing', 'be very good, recommended'],
          ] },
        ],
        [
          { t: 'text', md: 'When you **describe** a work, move from **facts** to **feelings**. Say what it is and who made it, describe what you see or hear, then give your **reaction** and **why**. Use a mix of the language from this unit: a cleft sentence for your main point, strong adjectives with the right adverbs, and a collocation or two.\n\n*It’s a large portrait of an old fisherman by a young Portuguese artist. The light comes from one side, so half of his face is in shadow. **What struck me most was** his eyes: they seem to follow you around the room. It’s **absolutely haunting**, and it **struck a chord with me** because my grandfather was a fisherman too.*' },
          { t: 'examples', items: [
            { s: 'The lead actress **gave a powerful performance**.', n: 'A common collocation for strong acting.' },
            { s: 'The play **got rave reviews** in every newspaper.', n: '*Rave reviews* = extremely positive reviews.' },
            { s: 'The story **held my attention** from start to finish.', n: 'It kept me interested.' },
            { s: 'The exhibition is **well worth seeing**.', n: 'A natural way to recommend something.' },
            { s: 'One of the singers was slightly **out of tune**.', n: 'Singing the wrong notes.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['The public clapped for ten minutes.', 'The audience clapped for ten minutes.', 'The people watching a show are the *audience*.'],
            ['The actors made a great performance.', 'The actors gave a great performance.', 'The collocation is *give a performance*.'],
            ['It’s worth to see.', 'It’s worth seeing.', '*Worth* is followed by *-ing*.'],
            ['The scene of the play was beautiful.', 'The set of the play was beautiful.', 'The scenery on the stage is the *set*.'],
          ] },
          { t: 'dialogue', title: 'At the gallery', lines: [
            { who: 'Emma', s: 'Have you seen the landscapes in the next room?' },
            { who: 'Joe', s: 'Not yet. I’ve been looking at this portrait for ages.' },
            { who: 'Emma', s: 'It is gripping, isn’t it? It’s the light that does it.' },
            { who: 'Joe', s: 'Exactly. What I love is how calm she looks.' },
            { who: 'Emma', s: 'The whole exhibition is well worth seeing. I’m coming back with my sister.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the beginnings and endings to make collocations.', pairs: [
            ['give a powerful', 'performance'],
            ['bring a character', 'to life'],
            ['hold the audience’s', 'attention'],
            ['get rave', 'reviews'],
            ['strike a', 'chord'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the sentences with one word.', items: [
            { q: 'The new musical is a ___: there are no tickets left until March.', a: ['sell-out'], why: 'A *sell-out* is a show with all tickets sold.' },
            { q: 'The ___ was simple: just a table, two chairs and a window.', a: ['set'], why: 'The scenery on stage is the *set*.' },
            { q: 'The film is long, but it’s well worth ___.', a: ['seeing', 'watching'], why: '*Worth* + *-ing*.' },
            { q: 'The ___ stood up and clapped at the end.', a: ['audience'], why: 'The people watching a show.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the B2 First exam (Reading and Use of English Part 1): choose the word that best fits each gap.', items: [
            { q: 'The young director’s first film ___ rave reviews at the festival.', o: ['received', 'made', 'did', 'took'], why: 'You *receive* or *get* reviews.' },
            { q: 'The story is so ___ that I read the book in one night.', o: ['gripping', 'holding', 'catching', 'taking'], why: 'A *gripping* story is one you cannot stop reading.' },
            { q: 'The actor managed to ___ a difficult character to life.', o: ['bring', 'take', 'carry', 'put'], why: 'The fixed phrase is *bring someone to life*.' },
            { q: 'The song really struck a ___ with older listeners.', o: ['chord', 'note', 'tune', 'sound'], why: 'The idiom is *strike a chord*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 1**, the four options often have **similar meanings**. The right answer is usually the one that makes a **collocation** or a **fixed phrase** with the words around the gap. Read the words just before and just after the gap carefully.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'mei', items: [
            { a: 'The lead actor gave a powerful performance.' },
            { a: 'The exhibition is well worth seeing.' },
            { a: 'The story held my attention from start to finish.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'Writing a review',
      about: 'Write a review for B2 First Writing Part 2: describe, give your opinion and recommend.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'In **B2 First Writing Part 2**, you choose one task from several. A **review** is often one of them. You write **140–190 words** for a magazine or website about a film, book, concert, restaurant, app or place.\n\nA good review does three jobs: it **describes** the thing briefly, it gives your **opinion** with reasons, and it ends with a **recommendation**: who would enjoy it, and who might not. The reader wants to decide whether to see, read or visit it.\n\nThe style is **semi-formal** and **lively**: speak to the reader, use strong adjectives, and give your personal reaction. A catchy **title** helps.' },
          { t: 'table', caption: 'A plan for a review', explain: ['head', 'col0', 'col1'], head: ['Paragraph', 'What to write', 'Useful language'], rows: [
            ['Title', 'Short and catchy', 'A night to remember'],
            ['Introduction', 'What it is, where, when; catch the reader’s interest', 'If you’re looking for…, this is the one.'],
            ['Description', 'The story, the music, the place: the main facts, no spoilers', 'It tells the story of… / It is set in…'],
            ['Opinion', 'What you liked and did not like, with reasons', 'What impressed me most was… / The only weakness was…'],
            ['Recommendation', 'Who should go, and a final verdict', 'I would definitely recommend it to… / It’s well worth…'],
          ] },
        ],
        [
          { t: 'reading', title: 'Model review: “The Lighthouse Keeper”', md: 'Looking for a film that will stay with you for days? Then “The Lighthouse Keeper” is the one to see.\n\nSet on a tiny island off the coast of Scotland, the film tells the story of Ewan, an old man who has looked after the same lighthouse for forty years. When a young engineer arrives to replace the light with an automatic one, the two men slowly become friends.\n\nWhat impressed me most was the acting. Both leads give powerful performances, and the silences between them say more than any words. The photography is absolutely breathtaking, especially in the storm scenes. The only weakness is the middle of the film, which is a little slow.\n\nIt isn’t a film for anyone who wants action, but if you enjoy moving stories about people, I would definitely recommend it. It’s well worth seeing on the big screen.' },
          { t: 'ex', kind: 'choice', h: 'Read the model review. Choose the correct answer.', items: [
            { q: 'What does the first paragraph do?', o: ['It catches the reader’s interest.', 'It tells the end of the story.', 'It describes the director’s life.'], why: 'The opening question speaks to the reader.' },
            { q: 'What does the writer criticise?', o: ['The middle of the film is slow.', 'The acting is weak.', 'The photography is boring.'], why: '*The only weakness is the middle of the film.*' },
            { q: 'Who would NOT enjoy the film, according to the writer?', o: ['People who want action.', 'People who like moving stories.', 'People who live in Scotland.'], why: '*It isn’t a film for anyone who wants action.*' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes in reviews', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['At the end, the brother dies and…', 'The ending is a real surprise.', 'Do not tell the ending: no spoilers.'],
            ['The film was good. The actors were good.', 'The acting was superb and the plot gripping.', 'Use a range of precise adjectives.'],
            ['In conclusion, I am writing to inform you…', 'All in all, it’s well worth seeing.', 'A review is lively, not like a formal letter.'],
            ['I liked it.', 'What I liked most was the music, because…', 'Always give a reason for your opinion.'],
          ] },
          { t: 'tip', art: 'owl', md: 'The examiner checks four things: **Content** (did you answer every part of the task?), **Communicative achievement** (is the style right for a review and the reader?), **Organisation** (clear paragraphs and linking), and **Language** (a range of vocabulary and grammar). Plan for two minutes before you write, and keep five minutes to check your work.' },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order to make sentences for a review.', items: [
            { a: 'What impressed me most was the music.', why: 'A what-cleft for the main point.' },
            { a: 'I would definitely recommend it to families.', why: 'A recommendation: *recommend it to* + people.' },
            { a: 'The only weakness was the ending.', why: 'A balanced opinion names one weakness.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Which part of a review is each sentence from?', groups: ['Introduction', 'Opinion', 'Recommendation'], explain: ['groups'], items: [
            { s: 'Want a great night out with friends?', g: 0, why: 'A question to catch the reader’s interest.' },
            { s: 'The costumes were absolutely stunning.', g: 1, why: 'A personal reaction with a strong adjective.' },
            { s: 'It’s perfect for anyone who loves jazz.', g: 2, why: 'Who should go: a recommendation.' },
            { s: 'The second half felt a bit long.', g: 1, why: 'A weakness: part of your opinion.' },
            { s: 'Don’t miss it if it comes to your town.', g: 2, why: 'A final recommendation.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the B2 First exam (Writing Part 2): read the task. Choose the best answer to each question about it.', items: [
            { q: 'Task: “Reviews wanted! Write a review of a concert or show you have seen. Tell us what it was like, what you enjoyed and whether you would recommend it.” How many things must the review include?', o: ['Three: what it was like, what you enjoyed, and a recommendation.', 'One: what it was like.', 'Two: a description and the price.'], why: 'Every part of the task must be answered for full Content marks.' },
            { q: 'How many words should you write?', o: ['140–190', '50–80', '250–300'], why: 'Writing Part 2 asks for 140–190 words.' },
            { q: 'Which opening is best for this review?', o: ['If you think classical music is boring, this concert will change your mind.', 'Dear Sir or Madam, I am writing about a concert.', 'The concert was on 4 May at 8 p.m.'], why: 'A lively opening that speaks to the reader suits a review.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Before you choose a task in **Part 2**, check you have **enough to say** and the **vocabulary** you need. A review of something you really know is easier to write well than one about something you saw only once.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'omar', items: [
            { a: 'If you love moving stories, this is the one to see.' },
            { a: 'The only weakness is the slow middle part.' },
            { a: 'I would definitely recommend it to anyone who enjoys music.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct sentence.', items: [
      { q: '', o: ['What I enjoyed most was the dancing.', 'What I enjoyed it most was the dancing.', 'That I enjoyed most was the dancing.'], why: 'No extra *it* in a what-cleft.' },
      { q: '', o: ['It was the director who chose the music.', 'It was the director which chose the music.', 'It was the director what chose the music.'], why: 'For a person: *who*.' },
      { q: '', o: ['She does play the violin beautifully.', 'She does plays the violin beautifully.', 'She do plays the violin beautifully.'], why: 'Emphatic *does* + base form.' },
    ] },
    { t: 'ex', kind: 'select', h: 'Choose the adverb that fits.', items: [
      { q: 'The ending was ___ hilarious.', o: ['absolutely', 'very', 'fairly'], why: '*Hilarious* is extreme.' },
      { q: 'The book was ___ interesting, but too long.', o: ['quite', 'utterly', 'totally'], why: '*Interesting* is gradable; *quite* = fairly.' },
      { q: 'We were ___ exhausted after the festival.', o: ['completely', 'very', 'a bit'], why: '*Exhausted* is extreme.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Complete the second sentence so that it has a similar meaning. Use the word given.', items: [
      { q: 'I only understood the poem when the teacher explained it.', cue: 'until', a: ['It wasn’t until the teacher explained it that I understood the poem.', 'It was not until the teacher explained it that I understood the poem.'], why: '*It wasn’t until… that…*' },
      { q: 'The thing I need is a long holiday.', cue: 'what', a: ['What I need is a long holiday.'], why: '*The thing (that)* = *What*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete with one word.', items: [
      { q: 'The play got ___ reviews: every critic loved it.', a: ['rave'], why: '*Rave reviews* are very positive.' },
      { q: 'The exhibition is well worth ___.', a: ['seeing', 'visiting'], why: '*Worth* + *-ing*.' },
      { q: 'The lead actor ___ a powerful performance.', a: ['gave'], why: 'The collocation is *give a performance*.' },
    ] },
    { t: 'ex', kind: 'wordform', h: 'Use the word in capitals to form a word that fits the gap.', items: [
      { q: 'The show was an ___ success.', base: 'astonish', a: ['astonishing'], why: 'An adjective before *success*.' },
      { q: 'The gallery is proud of its ___ of portraits.', base: 'collect', a: ['collection'], why: 'A noun after *its*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'The concert was very [brilliant].', a: ['good'], why: 'With *very*, use a gradable adjective like *good*.' },
      { s: 'The [public] clapped for five minutes.', a: ['audience'], why: 'The people at a show are the *audience*.' },
      { s: 'We [did enjoyed] it a lot.', a: ['did enjoy', 'enjoyed'], why: 'After *did*, use the base form.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the parts of a review with their job.', pairs: [
      ['Introduction', 'catches the reader’s interest'],
      ['Description', 'gives the main facts, no spoilers'],
      ['Opinion', 'says what you liked and why'],
      ['Recommendation', 'says who should go'],
    ] },
  ],
};
