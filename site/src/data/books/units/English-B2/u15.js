// English B2, unit 15, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Risk and challenge: emphasis with inversion (gently), collocations with take, make, do and have, idioms for risk and
// success, and a reading about people who took a big risk. Exam tasks in the format of B2 First.
export const UNIT = {
  id: 'u15',
  title: 'Risk and challenge',
  goal: 'Add emphasis with inversion, choose the right verb in common collocations, use idioms for risk and success, and follow a longer text about people who took a chance.',
  art: 'monster',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'speaking', 'writing'], topics: ['inversion', 'emphasis', 'collocations', 'idioms', 'risk'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'Not only that…',
      about: 'Add emphasis by putting a negative or limiting word first: not only, never, hardly, no sooner, rarely.',
      art: 'monster',
      spreads: [
        [
          { t: 'text', md: 'Most English sentences put the subject before the verb. But when a sentence **starts** with certain negative or limiting words, English swaps them round, as in a question: *Never* **have I** *seen such a view.* This is called **inversion**.\n\nInversion sounds strong and a little formal. You will meet it in articles, speeches and stories, and in the B2 First exam, especially in Use of English Part 4. In everyday conversation people use it much less, so learn to recognise it and to use a few patterns well, not to put it everywhere.' },
          { t: 'table', caption: 'Normal order and inversion', explain: ['head'], head: ['Normal', 'With inversion'], rows: [
            ['I have never seen such a view.', 'Never have I seen such a view.'],
            ['She not only won, she broke the record.', 'Not only did she win, she broke the record.'],
            ['We had hardly arrived when it started to rain.', 'Hardly had we arrived when it started to rain.'],
            ['He had no sooner left than the phone rang.', 'No sooner had he left than the phone rang.'],
            ['People rarely see wolves here.', 'Rarely do people see wolves here.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Use the same helper verb as a question: *have, had, did, do, does, is, can…* If the normal sentence has no helper verb, add **do, does** or **did**: *She won* → *Not only* **did** *she win…*' },
        ],
        [
          { t: 'text', md: 'Some patterns go in pairs, and each one has its partner word:\n\n**Not only** … **but (also)**: *Not only is the route dangerous, but it is also very long.*\n\n**Hardly / Scarcely** … **when**: *Hardly had the race begun when it started to snow.*\n\n**No sooner** … **than**: *No sooner had we set off than the car broke down.*\n\nWith **hardly** and **no sooner** we usually talk about the past, so the verb is the past perfect: *had* + past participle.' },
          { t: 'examples', items: [
            { s: '**Never before had** the team faced such a strong opponent.', n: '*Never before* + past perfect: a first time in the past.' },
            { s: '**Not only did** he climb the mountain, **but** he did it alone.', n: 'Past simple, so the helper is *did*.' },
            { s: '**No sooner had** she signed the contract **than** the company closed.', n: 'One thing happened immediately after another.' },
            { s: '**Seldom do** we get a second chance like this.', n: '*Seldom* = rarely; present simple, so *do*.' },
            { s: '**Under no circumstances should** you swim here alone.', n: 'A strong warning.' },
          ] },
        ],
        [
          { t: 'text', md: 'These are the mistakes teachers see most often with inversion.' },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['Never I have seen this.', 'Never have I seen this.', 'After *never* at the start, the helper verb comes before the subject.'],
            ['Not only she won the race…', 'Not only did she win the race…', 'No helper verb in the normal sentence: add *did*.'],
            ['No sooner had we left when…', 'No sooner had we left than…', '*No sooner* goes with *than*; *hardly* goes with *when*.'],
            ['Hardly we had arrived when…', 'Hardly had we arrived when…', 'Inversion: *had* before *we*.'],
          ] },
          { t: 'dialogue', title: 'A climber on the radio', lines: [
            { who: 'Presenter', s: 'You reached the top in a storm. Weren’t you scared?' },
            { who: 'Marcus', s: 'Not only was I scared, I was sure we would have to turn back.' },
            { who: 'Presenter', s: 'So what changed?' },
            { who: 'Marcus', s: 'No sooner had we decided to go down than the wind dropped. Never have I been so lucky.' },
            { who: 'Presenter', s: 'Would you do it again?' },
            { who: 'Marcus', s: 'Under no circumstances would I go up in those conditions again!' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct sentence.', items: [
            { q: '', o: ['Never have I felt so tired.', 'Never I have felt so tired.', 'Never I felt so tired.'], why: 'After *never* at the start: helper verb + subject.' },
            { q: '', o: ['Not only did she finish, she won.', 'Not only she finished, she won.', 'Not only finished she, she won.'], why: 'Past simple: add *did* before the subject.' },
            { q: '', o: ['No sooner had we started than it rained.', 'No sooner had we started when it rained.', 'No sooner we had started than it rained.'], why: '*No sooner* + *had* + subject … *than*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'In the format of the B2 First exam (Reading and Use of English Part 4): complete the second sentence so that it means the same as the first, using the word given.', items: [
            { q: 'I have never seen such a beautiful sunrise.', cue: 'NEVER', a: ['Never have I seen such a beautiful sunrise.'], why: '*Never* first, then *have I*.' },
            { q: 'As soon as we left the house, it started to snow.', cue: 'SOONER', a: ['No sooner had we left the house than it started to snow.'], why: '*No sooner had* + subject + past participle … *than*.' },
            { q: 'He was not only late, he also forgot the tickets.', cue: 'ONLY', a: ['Not only was he late, he also forgot the tickets.', 'Not only was he late, but he also forgot the tickets.'], why: '*Not only* + *was he*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Part 4 you must use **between two and five words**, including the word given, and you must not change that word. Inversion is a favourite: if the key word is *never, only, sooner* or *hardly*, think of inversion first.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor. Stress the first words.', tutor: 'arthur', items: [
            { a: 'Never have I seen anything like it.' },
            { a: 'Not only did we win, we broke the record.' },
            { a: 'No sooner had I left than it started to rain.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'Take a chance, make a decision',
      about: 'Choose the right verb in the most common collocations with take, make, do and have.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'A **collocation** is a pair of words that English speakers usually use together. There is often no logical reason: we **make** a decision but **take** a risk. Other languages often use the same verb for both, so these are a classic source of mistakes, and a classic exam question in Reading and Use of English Part 1.\n\nA few general ideas help. **Make** is often about creating or causing something (*make a plan, make a mess*). **Do** is often about tasks and work (*do the shopping, do research*). **Take** is often about accepting or using something (*take a risk, take advice*). **Have** is often about experiences and actions (*have a go, have a look*). But in the end, collocations must be learned.' },
          { t: 'table', caption: 'Collocations to learn', explain: ['head'], head: ['take', 'make', 'do', 'have'], rows: [
            ['a risk', 'a decision', 'your best', 'a go'],
            ['a chance', 'a mistake', 'research', 'a look'],
            ['part in', 'an effort', 'damage', 'an argument'],
            ['advice', 'progress', 'someone a favour', 'fun'],
            ['responsibility', 'a difference', 'harm', 'difficulty (in) doing'],
          ] },
        ],
        [
          { t: 'examples', items: [
            { s: 'She **took a big risk** when she left her job.', n: 'Not *made a risk*.' },
            { s: 'We need to **make a decision** by Friday.', n: 'Not *take a decision* in most British English, though some people say it.' },
            { s: 'Just **do your best**: nobody expects you to be perfect.', n: 'Not *make your best*.' },
            { s: 'Why don’t you **have a go**? It’s easier than it looks.', n: '*Have a go* = try.' },
            { s: 'Volunteers really **make a difference** to the event.', n: 'Have a positive effect.' },
            { s: 'Over a thousand runners **took part in** the race.', n: '*Take part in* = participate.' },
          ] },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['make a risk', 'take a risk', 'Risk goes with *take*.'],
            ['do a mistake', 'make a mistake', 'Mistake goes with *make*.'],
            ['make research', 'do research', 'Research goes with *do*.'],
            ['make part in', 'take part in', 'A fixed phrase with *take*.'],
          ] },
        ],
        [
          { t: 'reading', title: 'Advice from a mountain guide', md: 'Every year I meet people who want to climb a big mountain after only a few months of training. I always tell them the same thing: take your time. You will make mistakes, and that is fine, as long as you make them on small hills first.\n\nDo your research before any trip. Find out about the weather, the route and the rescue services. And never be afraid to make a decision that disappoints you: turning back is not a failure.\n\nThe climbers I admire most are not the ones who take the biggest risks. They are the ones who take responsibility for their team and come home safely, year after year.' },
          { t: 'ex', kind: 'tf', h: 'Read the text. Are the sentences true or false?', items: [
            { q: 'The guide thinks beginners should avoid making any mistakes.', a: 'f', why: '*You will make mistakes, and that is fine.*' },
            { q: 'She advises people to find out about the weather before a trip.', a: 't', why: '*Do your research… find out about the weather.*' },
            { q: 'She admires the climbers who take the biggest risks.', a: 'f', why: 'She admires those who *take responsibility* and come home safely.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'In the format of the B2 First exam (Reading and Use of English Part 1): choose the word that best fits each gap.', items: [
            { q: 'Last year she decided to ___ a risk and open her own café.', o: ['take', 'make', 'do'], why: '*Take a risk.*' },
            { q: 'The new coach has really ___ a difference to the team.', o: ['made', 'done', 'had'], why: '*Make a difference.*' },
            { q: 'Scientists are ___ research into why some people enjoy danger.', o: ['doing', 'making', 'taking'], why: '*Do research.*' },
            { q: 'More than two hundred schools ___ part in the competition.', o: ['took', 'made', 'had'], why: '*Take part in.*' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Part 1, the four options often have similar meanings, and only one forms the right **collocation** with the words around the gap. Read the whole phrase, not just the gap: *___ a difference* can only be *make*.' },
          { t: 'ex', kind: 'colloc', h: 'Which words go with the verb?', items: [
            { key: 'make', o: ['a decision', 'a risk', 'progress', 'research'], a: [0, 2], why: '*Make a decision, make progress*; but *take a risk, do research*.' },
            { key: 'take', o: ['advice', 'a mistake', 'responsibility', 'your best'], a: [0, 2], why: '*Take advice, take responsibility*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'sofia', items: [
            { a: 'It was a risk, but I decided to take it.' },
            { a: 'We all make mistakes when we start.' },
            { a: 'Why don’t you have a go?' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'Against all odds',
      about: 'Understand and use idioms for risk, effort and success.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'text', md: 'An **idiom** is a group of words whose meaning is different from the meaning of each word. *Take the plunge* has nothing to do with swimming: it means to decide to do something risky after thinking about it for a long time.\n\nAt B2 you are not expected to use many idioms, but you are expected to **understand** common ones in articles and conversations, and the exam sometimes tests them. Use the ones you know well, in the right situation, and avoid putting several in one sentence: it sounds unnatural.' },
          { t: 'table', caption: 'Idioms for risk and success', explain: ['head', 'col1'], head: ['Idiom', 'Meaning'], rows: [
            ['take the plunge', 'finally decide to do something risky'],
            ['against all odds', 'although success seemed very unlikely'],
            ['in at the deep end', 'start something difficult with no preparation'],
            ['a long shot', 'something with little chance of success'],
            ['play it safe', 'avoid risks'],
            ['pull it off', 'succeed in something difficult'],
            ['get cold feet', 'become nervous and want to stop'],
          ] },
        ],
        [
          { t: 'examples', items: [
            { s: 'After years of talking about it, they finally **took the plunge** and moved to Canada.', n: 'They decided to do it.' },
            { s: '**Against all odds**, the smallest team won the cup.', n: 'Nobody expected it.' },
            { s: 'On my first day I was thrown **in at the deep end**: I had to run a meeting.', n: 'No preparation.' },
            { s: 'Getting tickets now is **a long shot**, but let’s try.', n: 'Little chance.' },
            { s: 'He **got cold feet** the night before the wedding.', n: 'He became nervous.' },
          ] },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['against all the odds', 'against all odds', 'Both exist, but *against all odds* is the most common fixed form.'],
            ['take a plunge', 'take the plunge', 'The idiom uses *the*.'],
            ['play it safety', 'play it safe', '*Safe* is an adjective here.'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'A new business', lines: [
            { who: 'Emma', s: 'So you’ve really left your job? I thought you’d get cold feet.' },
            { who: 'Joe', s: 'Honestly, I nearly did. But I’d been playing it safe for ten years.' },
            { who: 'Emma', s: 'And now you’re running a bakery with no experience. That’s really in at the deep end.' },
            { who: 'Joe', s: 'I know. Everyone says it’s a long shot.' },
            { who: 'Emma', s: 'Well, if anyone can pull it off, it’s you.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the idiom and its meaning.', pairs: [
            ['take the plunge', 'finally do something risky'],
            ['a long shot', 'little chance of success'],
            ['pull it off', 'succeed in something difficult'],
            ['get cold feet', 'become nervous and want to stop'],
            ['play it safe', 'avoid risks'],
          ] },
        ],
        [
          { t: 'ex', kind: 'bank', h: 'Complete the sentences with the words from the box.', extra: ['safe'], items: [
            { q: 'Winning the lottery is a long ___, so don’t count on it.', a: 'shot', why: '*A long shot* = little chance.' },
            { q: 'Against all ___, the climbers survived the night.', a: 'odds', why: '*Against all odds*.' },
            { q: 'She was nervous, but she managed to pull it ___.', a: 'off', why: '*Pull it off* = succeed.' },
            { q: 'He was about to sign, but at the last minute he got cold ___.', a: 'feet', why: '*Get cold feet*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the B2 First exam (Listening Part 1): read what the speaker says and choose the best answer.', items: [
            { q: 'You hear a woman talking about her new job. “I’d never managed a team before, and on day one they handed me twenty people and a deadline. Somehow it all worked out.” How did she feel at first?', o: ['unprepared', 'bored', 'confident'], why: 'Twenty people and a deadline with no experience: in at the deep end.' },
            { q: 'You hear a man talking about a race. “Everyone said I had no chance, with my injury. Crossing that line first was unbelievable.” What does he say about the race?', o: ['He won although it seemed unlikely.', 'He did not finish because of an injury.', 'He expected to win easily.'], why: 'Against all odds he won.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Listening Part 1 the speakers rarely use the words in the answer. Listen for the **idea**: *they handed me twenty people and a deadline* is the idea of being unprepared, even though the word is never said.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'kofi', items: [
            { a: 'Against all odds, we pulled it off.' },
            { a: 'I nearly got cold feet.' },
            { a: 'It’s a long shot, but let’s try.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'People who took the plunge',
      about: 'Read a longer article about three people who took a big risk, and practise reading for detail.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'In B2 First Reading Part 7, you read several short texts about different people and match questions to them. The texts often say similar things, so you need to read carefully for detail. This article uses the language of the whole unit: inversion for emphasis, collocations and idioms.' },
          { t: 'reading', title: 'Three people who took the plunge', md: '**Ana, 34, sailor.** Ana had never sailed alone before she decided to cross the Atlantic. “Not only did people think I was crazy, they told me so,” she laughs. She spent two years doing research and taking advice from experienced sailors. The crossing took forty days. “Hardly had I left port when the engine failed. I had to make every decision alone, and I learned more in those forty days than in ten years of office work.”\n\n**Kemal, 52, student.** After thirty years as an accountant, Kemal went back to university to study medicine. “It was a long shot. I had to take an entrance exam with eighteen-year-olds.” He nearly got cold feet the night before the exam. “But I told myself: if you play it safe now, you will always wonder.” He is now in his third year and works part-time in a hospital.\n\n**Lucy, 27, designer.** Lucy left a secure job to start a company that makes furniture from old wood. “No sooner had we opened than the first lockdown started.” Against all odds, the business survived: she sold online and took part in every local market she could find. “The risk was worth it. I’ve made a difference, even if it’s a small one.”' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the B2 First exam (Reading and Use of English Part 7): which person… ?', items: [
            { q: '…had a problem very soon after starting?', o: ['Ana and Lucy', 'Kemal only', 'Kemal and Lucy'], why: 'Ana’s engine failed just after leaving; Lucy’s lockdown started just after opening.' },
            { q: '…nearly gave up before an important moment?', o: ['Kemal', 'Ana', 'Lucy'], why: 'Kemal *nearly got cold feet* the night before the exam.' },
            { q: '…prepared for a long time before the challenge?', o: ['Ana', 'Lucy', 'Kemal'], why: 'Ana spent two years doing research and taking advice.' },
            { q: '…feels that their work has helped others?', o: ['Lucy', 'Ana', 'Kemal'], why: '*I’ve made a difference.*' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Part 7, underline the key idea in each question (*very soon after starting*), then look for the same idea in different words in the texts (*hardly had I left*, *no sooner had we opened*). Watch out: the same idea can appear in more than one text.' },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the sentences about the article with one word.', items: [
            { q: 'Not only did people think Ana was crazy, ___ told her so.', a: ['they'], why: 'A second clause with its own subject.' },
            { q: 'Kemal took an entrance ___ with eighteen-year-olds.', a: ['exam', 'examination'], why: 'From the text.' },
            { q: 'No sooner had Lucy opened ___ the first lockdown started.', a: ['than'], why: '*No sooner… than*.' },
            { q: 'Lucy took ___ in every local market.', a: ['part'], why: '*Take part in*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Never had she sailed alone before.', why: '*Never* + *had she* + past participle.' },
            { a: 'If you play it safe, you will always wonder.', why: 'First conditional with the idiom *play it safe*.' },
          ] },
        ],
        [
          { t: 'text', md: 'Now talk about a risk you have taken, or would like to take. Use at least one inversion, one collocation and one idiom from this unit. For example: *Not only did I change jobs, I moved to another city. It was a long shot, but I pulled it off.*' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'omar', items: [
            { a: 'Hardly had I left port when the engine failed.' },
            { a: 'The risk was worth it.' },
            { a: 'I’ve made a difference, even if it’s a small one.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct sentence.', items: [
      { q: '', o: ['Rarely do we see such talent.', 'Rarely we see such talent.', 'Rarely see we such talent.'], why: 'Inversion: *do we*.' },
      { q: '', o: ['Hardly had she sat down when the phone rang.', 'Hardly she had sat down when the phone rang.', 'Hardly had she sat down than the phone rang.'], why: '*Hardly had* … *when*.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Complete the second sentence so that it means the same as the first, using the word given.', items: [
      { q: 'He not only lost the match, he also hurt his knee.', cue: 'ONLY', a: ['Not only did he lose the match, he also hurt his knee.', 'Not only did he lose the match, but he also hurt his knee.'], why: '*Not only did he lose*.' },
      { q: 'I have never been so frightened.', cue: 'NEVER', a: ['Never have I been so frightened.'], why: '*Never have I*.' },
      { q: 'We arrived and immediately the concert started.', cue: 'SOONER', a: ['No sooner had we arrived than the concert started.'], why: '*No sooner had we arrived than*.' },
    ] },
    { t: 'ex', kind: 'select', h: 'Choose the word that best fits each gap.', items: [
      { q: 'Don’t worry, everyone ___ mistakes at the beginning.', o: ['makes', 'does', 'takes'], why: '*Make a mistake*.' },
      { q: 'She decided to ___ the advice of her coach.', o: ['take', 'make', 'have'], why: '*Take advice*.' },
      { q: 'Students have to ___ their own research for this project.', o: ['do', 'make', 'take'], why: '*Do research*.' },
      { q: 'Why don’t you ___ a go? You might enjoy it.', o: ['have', 'make', 'do'], why: '*Have a go*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the idiom and its meaning.', pairs: [
      ['against all odds', 'although success seemed unlikely'],
      ['in at the deep end', 'with no preparation'],
      ['take the plunge', 'finally do something risky'],
      ['play it safe', 'avoid risks'],
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'No sooner had we left [when] it started to rain.', a: ['than'], why: '*No sooner… than*.' },
      { s: 'He decided to [make] a risk and change careers.', a: ['take'], why: '*Take a risk*.' },
      { s: 'Not only [she won] the race, she broke the record.', a: ['did she win'], why: 'Inversion with *did*.' },
    ] },
  ],
};
