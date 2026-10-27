// English C1 for travel, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Literature and film',
  goal: 'Talk about books and films with depth: story, character, theme and style.',
  art: 'cat',
  tags: { skills: ['speaking', 'vocabulary', 'grammar', 'reading'], topics: ['narrative-vocabulary', 'literary-analysis', 'adverb-adjective-collocations', 'cleft-sentences', 'comparison', 'books-and-films'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'The plot hinges on a letter',
      about: 'Use the language of analysis to talk about plot, character, theme and style.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Talking about a book or a film at C1 means going beyond *it was good*. You can describe **how** the story is told: who tells it, how it is organised, what it is really about underneath the events. These words are used by critics, but also in everyday conversations between people who love books and films.' },
          { t: 'table', caption: 'The language of analysis', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['the protagonist', 'the main character'],
            ['a subplot', 'a second, smaller story inside the main one'],
            ['the setting', 'where and when the story takes place'],
            ['a flashback', 'a scene that shows an earlier time'],
            ['a twist', 'a sudden, surprising change in the story'],
            ['the pacing', 'how fast or slowly the story moves'],
            ['an unreliable narrator', 'a storyteller whose version of events we cannot fully trust'],
            ['a coming-of-age story', 'a story about a young person growing up'],
          ] },
        ],
        [
          { t: 'examples', items: [
            { s: 'The novel **is set in** a fishing village in the 1950s.', n: '*Be set in*: the place and time of the story.' },
            { s: 'The whole plot **hinges on** a letter that never arrives.', n: '*Hinge on*: depend completely on one thing.' },
            { s: 'It’s **told from the point of view of** the youngest daughter.', n: 'Who sees and tells the story.' },
            { s: 'The film **explores themes of** loss and belonging.', n: '*Explore themes of*: deal with big ideas in depth.' },
            { s: 'The ending **ties up all the loose ends**.', n: '*Loose ends*: questions in the story that are still open.' },
            { s: 'The second half **drags** a little.', n: '*Drag*: move too slowly and become boring.' },
          ] },
          { t: 'tip', art: 'cat', md: 'If you talk about a twist, a friend who has not seen the film may not want to know it. Warn them first: *I won’t give anything away* or *Spoiler alert!* A *spoiler* is information that ruins a surprise.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best word or phrase.', items: [
            { q: 'Half the story is told in ___, so we slowly learn about her childhood.', o: ['flashbacks', 'twists', 'subplots'], why: 'A *flashback* shows an earlier time.' },
            { q: 'The narrator lies to us from the start: he’s completely ___.', o: ['unreliable', 'unpredictable', 'unbelievable'], why: 'An *unreliable narrator* cannot be trusted to tell the truth.' },
            { q: 'The plot ___ on one phone call in the first chapter.', o: ['hinges', 'depends of', 'relies'], why: '*Hinge on*: depend completely on.' },
            { q: 'The film is beautifully shot, but the ___ is uneven: some scenes go on far too long.', o: ['pacing', 'setting', 'protagonist'], why: '*Pacing*: how fast or slowly the story moves.' },
            { q: 'It’s a classic ___ story about a teenager leaving her village for the city.', o: ['coming-of-age', 'growing-old', 'grown-up'], why: 'A *coming-of-age story* is about a young person growing up.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'crossword', h: 'Complete the crossword.', words: [
            { a: 'protagonist', clue: 'The main character of a story.' },
            { a: 'twist', clue: 'A sudden, surprising change in the plot.' },
            { a: 'setting', clue: 'Where and when a story takes place.' },
            { a: 'subplot', clue: 'A smaller story inside the main one.' },
            { a: 'spoiler', clue: 'Information that ruins a surprise in a film or book.' },
            { a: 'narrator', clue: 'The person who tells the story.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete each sentence with one word.', items: [
            { q: 'The story is ___ in Lisbon just before the revolution.', a: ['set'], why: '*Be set in*: the place and time of the story.' },
            { q: 'I won’t give anything ___, but the last chapter changes everything.', a: ['away'], why: '*Give something away*: reveal a secret.' },
            { q: 'The final scene ties up all the loose ___.', a: ['ends'], why: '*Loose ends*: questions still open in the story.' },
            { q: 'The middle section ___ a bit: nothing much happens for forty pages.', a: ['drags'], why: '*Drag*: move too slowly.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'What struck me most was…',
      about: 'Give a nuanced opinion with precise adverbs, comparisons and cleft sentences.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'A nuanced opinion is rarely just positive or negative. Precise **adverb + adjective** combinations let you say exactly how something affected you. Many of them are fixed collocations: native speakers say *deeply moving*, not *strongly moving*.' },
          { t: 'examples', items: [
            { s: 'The final scene is **deeply moving**.', n: '*Deeply* goes with feelings: *deeply moving, deeply disturbing*.' },
            { s: 'It’s **beautifully shot**, but the dialogue is **painfully slow**.', n: '*Painfully* + adjective: so much that it is uncomfortable.' },
            { s: 'I found it **strangely compelling**, even though very little happens.', n: '*Strangely*: in a way that is hard to explain.' },
            { s: 'Honestly, I think the book is **wildly overrated**.', n: '*Wildly*: very much, often for opinions that are too positive.' },
            { s: 'It’s a **quietly powerful** film about two old friends.', n: '*Quietly*: without drama, but with strong effect.' },
          ] },
        ],
        [
          { t: 'text', md: 'To give one idea extra weight, English often uses a **cleft sentence**: the sentence is split into two parts so that the important part stands out. *What* + clause + *be* puts the focus at the end. *It* + *be* + the focus + *that* puts it at the beginning. Comparisons can also be more precise: *by far*, *every bit as … as*, *not nearly as … as*.' },
          { t: 'table', caption: 'Focus and comparison', explain: ['head'], head: ['Neutral', 'With more focus'], rows: [
            ['I loved the music.', 'What I loved was the music.'],
            ['The ending surprised me.', 'It was the ending that surprised me.'],
            ['The acting struck me most.', 'The thing that struck me most was the acting.'],
            ['It’s the best film of the year.', 'It’s by far the best film of the year.'],
            ['The film is as good as the book.', 'The film is every bit as good as the book.'],
            ['The sequel is much worse.', 'The sequel is not nearly as good.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In a *What* cleft, the verb *be* is usually singular, even before a plural: *What I need is two weeks off.* After *What … did*, use the base form of the verb, with or without *to*: *What she did was (to) leave the cinema.*' },
        ],
        [
          { t: 'ex', kind: 'colloc', h: 'Which adjectives go naturally with the adverb?', items: [
            { key: 'deeply', o: ['moving', 'disturbing', 'shot', 'long'], a: [0, 1], why: '*Deeply* goes with feelings: *deeply moving, deeply disturbing*.' },
            { key: 'painfully', o: ['slow', 'obvious', 'brilliant', 'beautiful'], a: [0, 1], why: '*Painfully* + a negative quality: *painfully slow, painfully obvious*.' },
            { key: 'beautifully', o: ['shot', 'written', 'boring', 'overrated'], a: [0, 1], why: '*Beautifully* + past participle for how something was made.' },
            { key: 'wildly', o: ['overrated', 'popular', 'quiet', 'slow'], a: [0, 1], why: '*Wildly* means *very much*: *wildly overrated, wildly popular*.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the word that fits.', items: [
            { q: 'It’s ___ far the best book I’ve read this year.', o: ['by', 'so', 'very'], why: '*By far* + superlative.' },
            { q: 'The remake is every bit ___ good as the original.', o: ['as', 'so', 'more'], why: '*Every bit as … as*: just as.' },
            { q: 'The second season is not ___ as exciting as the first.', o: ['nearly', 'almost', 'much'], why: '*Not nearly as … as*: much less than.' },
            { q: '___ I didn’t expect was how funny it would be.', o: ['What', 'That', 'It'], why: 'A *What* cleft: *What I didn’t expect was…*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with more focus, starting with the words given.', items: [
            { q: 'I really enjoyed the soundtrack.', cue: 'What I really enjoyed', a: ['What I really enjoyed was the soundtrack.'], why: '*What* + clause + *was* + the focus.' },
            { q: 'The final twist made me cry.', cue: 'It was', a: ['It was the final twist that made me cry.'], why: '*It was* + the focus + *that*.' },
            { q: 'The length of the film annoyed me.', cue: 'The thing that', a: ['The thing that annoyed me was the length of the film.', 'The thing that annoyed me was the film’s length.'], why: '*The thing that* + clause + *was*.' },
            { q: 'She walked out after twenty minutes.', cue: 'What she did', a: ['What she did was walk out after twenty minutes.', 'What she did was to walk out after twenty minutes.'], why: 'After *What … did was*, use the base form of the verb.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'It was the acting that impressed me.', why: '*It was* + focus + *that* + clause.' },
            { a: 'The book is wildly overrated, in my opinion.', why: '*Wildly overrated*: far too highly praised.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading the map',
      about: 'Read an essay about reading novels set in the places you travel to.',
      art: 'snail',
      spreads: [
        [
          { t: 'reading', title: 'Reading the map', md: 'Whenever I travel, I pack one novel set in the place I am going to. Not a guidebook, and not a history, but a story. It is a habit I started by accident, years ago, when the only English book in a station kiosk happened to be about the city I was heading for. By the time the train arrived, I felt I had been there before.\n\nWhat a good novel gives you is not information but atmosphere. A guidebook tells you that the old port was rebuilt after a fire; a novel makes you smell the smoke. It shows you where people go to argue, what they eat when they are sad, which streets feel safe at night and which do not. When you finally walk those streets, you recognise them in a way no map can prepare you for.\n\nOf course, fiction is not always a reliable guide. Many of the novels I have carried were written decades ago, and the cities in them have changed beyond recognition. Some are told by narrators so unreliable that I am not sure the places they describe ever existed. One book I read in a mountain town was painfully slow and, to be honest, wildly overrated; I finished it only because the snow kept me indoors.\n\nYet even the disappointing ones taught me something. It was a mediocre detective story, not a great novel, that first made me notice how people in one southern city greeted each other on the street. And it was a coming-of-age story, read on a ferry, that made me understand why so many young people from the islands leave and so few come back.\n\nThese days, the novel matters to me every bit as much as the ticket. I choose it carefully, I read it slowly, and when I come home, I leave it behind for the next traveller.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'The writer started the habit after reading advice in a magazine.', a: 'f', why: 'It started “by accident”, with a book from a station kiosk.' },
            { q: 'According to the writer, novels give you more facts than guidebooks.', a: 'f', why: '“What a good novel gives you is not information but atmosphere.”' },
            { q: 'Some of the cities in the writer’s novels look very different today.', a: 't', why: 'They “have changed beyond recognition”.' },
            { q: 'The writer enjoyed every book they took on a trip.', a: 'f', why: 'One was painfully slow and wildly overrated.' },
            { q: 'The detective story was written by a local author.', a: 'ng', why: 'The essay does not say who wrote it.' },
            { q: 'The writer leaves the novel at the destination.', a: 't', why: '“I leave it behind for the next traveller.”' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language of the essay.', items: [
            { q: '“A guidebook tells you that the old port was rebuilt after a fire; a novel makes you smell the smoke.” The writer is contrasting:', o: ['facts and lived experience', 'old and new books', 'history and geography'], why: 'The guidebook gives a fact; the novel lets you feel it.' },
            { q: '“What a good novel gives you is not information but atmosphere.” This is:', o: ['a cleft sentence that focuses on *atmosphere*', 'a question', 'a comparison with *as … as*'], why: '*What* + clause + *is*: the focus comes at the end.' },
            { q: '“Changed beyond recognition” means:', o: ['changed so much that you cannot recognise them', 'changed a little', 'not changed at all'], why: '*Beyond recognition*: so different that you cannot recognise it.' },
            { q: 'Why does the writer mention the mediocre detective story?', o: ['to show that even weak books can teach you something', 'to recommend it to readers', 'to explain why they stopped reading'], why: '“Even the disappointing ones taught me something.”' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the words that begin a cleft sentence for emphasis.', items: [
            { s: '[It was] a mediocre detective story, not a great novel, that first made me notice how people greeted each other.', why: '*It was* + focus + *that*.' },
            { s: '[What] a good novel gives you is not information but atmosphere.', why: '*What* + clause + *is* + focus.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'The main character of a story is the ___.', o: ['protagonist', 'narrator', 'setting'], why: 'The *protagonist* is the main character; the narrator tells the story.' },
      { q: 'The whole film hinges ___ one decision.', o: ['on', 'of', 'at'], why: '*Hinge on*: depend completely on.' },
      { q: 'The final scene is ___ moving. I cried for ten minutes.', o: ['deeply', 'strongly', 'highly'], why: 'The collocation is *deeply moving*.' },
      { q: '___ I liked most was the photography.', o: ['What', 'That', 'Which'], why: 'A *What* cleft: *What I liked most was…*.' },
      { q: 'The sequel is not ___ as good as the first film.', o: ['nearly', 'by far', 'every bit'], why: '*Not nearly as … as*: much less good.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete each sentence with one word.', items: [
      { q: 'The novel is ___ in a small town in the 1980s.', a: ['set'], why: '*Be set in*: the time and place of the story.' },
      { q: 'It’s by ___ the best thing she has written.', a: ['far'], why: '*By far* + superlative.' },
      { q: 'Please don’t tell me the ending. No ___!', a: ['spoilers', 'spoiler'], why: 'A *spoiler* reveals a surprise.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence, starting with the words given.', items: [
      { q: 'The music made the film special.', cue: 'It was', a: ['It was the music that made the film special.'], why: '*It was* + focus + *that*.' },
      { q: 'I didn’t like the ending.', cue: 'What I', a: ['What I didn’t like was the ending.', 'What I did not like was the ending.'], why: '*What* + clause + *was* + focus.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'What she did was [to leaving] before the end.', a: ['leave', 'to leave'], why: 'After *What … did was*, use the base form, with or without *to*.' },
      { s: 'The remake is every bit [so] good as the original.', a: ['as'], why: '*Every bit as … as*.' },
    ] },
  ],
};
