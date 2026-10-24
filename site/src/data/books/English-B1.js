// English B1 course book (docs/BOOKS.md). Draft: reviewed by a native teacher before it is published.
// Explanations are written in English here and translated in i18n/English-B1.<lang>.json; example sentences,
// exercises and reading texts stay in English. In choice items the first option is right; the reader shuffles.
export const BOOK = {
  id: 'English-B1',
  language: 'English',
  level: 'B1',
  review: 'draft',
  units: [
    {
      id: 'u1',
      title: 'Life stories',
      goal: 'Talk about your experiences and the big moments in your life, with the present perfect and the past simple.',
      art: 'suitcase',
      tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['present-perfect', 'past-simple', 'life-events'], goals: ['foundations'] },
      pages: [
        {
          id: 'p1',
          title: 'Have you ever…?',
          about: 'Talk about your experiences with the present perfect.',
          art: 'parrot',
          spreads: [
            [
              { t: 'text', md: 'When you talk about experiences in your life up to now, without saying **when** they happened, use the **present perfect**: *have* or *has* + the past participle.' },
              { t: 'examples', items: [
                { s: 'I **have travelled** a lot for work.', n: 'At some time in my life. We do not say when.' },
                { s: 'She**’s** never **eaten** sushi.', n: '*Never* means “not at any time”. It goes before the participle.' },
                { s: '**Have** you ever **lived** abroad?', n: '*Ever* means “at any time in your life”. We use it in questions.' },
              ] },
            ],
            [
              { t: 'table', caption: 'The present perfect', explain: ['head'], quiz: true, head: ['', 'Positive', 'Negative', 'Question'], rows: [
                ['I / you / we / they', 'I have (I’ve) worked', 'I haven’t worked', 'Have you worked?'],
                ['he / she / it', 'she has (she’s) worked', 'she hasn’t worked', 'Has she worked?'],
              ] },
              { t: 'text', md: 'Regular verbs add *-ed*: work → worked, live → lived, study → studied. Many common verbs are irregular, so learn their participles: be → **been**, do → **done**, see → **seen**, eat → **eaten**, write → **written**, meet → **met**, read → **read**.' },
              { t: 'tip', art: 'owl', md: '*Been* or *gone*? *She has been to Rome* means she went and came back. *She has gone to Rome* means she is there now.' },
            ],
            [
              { t: 'ex', kind: 'choice', h: 'Choose the correct form.', items: [
                { q: '___ you ever ridden a horse?', o: ['Have', 'Did', 'Has'], why: 'A question about experience: *Have* + *you* + *ever* + past participle.' },
                { q: 'My parents ___ to Australia twice.', o: ['have been', 'have gone', 'has been'], why: 'They went and came back, so *been*. *Parents* is plural, so *have*.' },
                { q: 'I’ve never ___ a whole book in English.', o: ['read', 'readed', 'reading'], why: '*Read* is irregular: read, read, read. The participle is spelled the same but sounds like “red”.' },
                { q: 'Has your sister ever ___ a marathon?', o: ['run', 'ran', 'runned'], why: 'Run, ran, run: the past participle is *run*.' },
              ] },
            ],
            [
              { t: 'ex', kind: 'gap', h: 'Complete with the present perfect of the verb in brackets.', items: [
                { q: 'I ___ (never / see) snow.', a: ['have never seen', '’ve never seen'], why: '*Never* goes between *have* and the participle.' },
                { q: 'She ___ (write) three books about her travels.', a: ['has written', '’s written'], why: '*She* takes *has*. Write, wrote, written.' },
                { q: 'We ___ (not / try) Ethiopian food.', a: ['haven’t tried', 'have not tried'], why: 'Negative: *haven’t* + past participle.' },
                { q: 'My brother ___ (be) to Japan three times.', a: ['has been', '’s been'], why: 'He went and came back three times: *has been*.' },
              ] },
            ],
          ],
        },
        {
          id: 'p2',
          title: 'Finished or not finished?',
          about: 'Choose between the present perfect and the past simple.',
          art: 'mug',
          spreads: [
            [
              { t: 'text', md: 'Use the **past simple** when you say or ask **when** something happened, or when the time is finished: *yesterday, last year, in 2015, two weeks ago, when I was a child*.' },
              { t: 'text', md: 'Use the **present perfect** when the time is not finished, or when you do not say it: *ever, never, today, this week, so far, in my life*.' },
              { t: 'tip', art: 'owl', md: 'If you can put a finished time on it, use the past simple. *I have seen him yesterday* is a mistake: say *I saw him yesterday*.' },
            ],
            [
              { t: 'dialogue', title: 'At a party', lines: [
                { who: 'Maya', s: 'Have you ever been to Mexico?' },
                { who: 'Leo', s: 'Yes, I have. I went there in 2019.' },
                { who: 'Maya', s: 'Really? What did you do?' },
                { who: 'Leo', s: 'I visited Oaxaca and took a cooking class. I’ve made mole at home a few times since then.' },
              ] },
              { t: 'text', md: 'The first question is about experience, so it is in the present perfect. As soon as Leo gives a time, *in 2019*, he changes to the past simple, and the details stay in the past simple.' },
            ],
            [
              { t: 'ex', kind: 'spot', h: 'Tap every verb in the past simple.', items: [
                { s: 'Yes, I have. I [went] there in 2019. I [visited] Oaxaca and [took] a cooking class.', why: '*Went*, *visited* and *took* are past simple: they happened in 2019.' },
                { s: 'I’ve made mole at home since then, and last week I [cooked] it for my parents.', why: '*Cooked* has a finished time, *last week*. *I’ve made* is the present perfect.' },
              ] },
            ],
            [
              { t: 'ex', kind: 'choice', h: 'Choose the correct form.', items: [
                { q: 'We ___ to Lisbon last summer.', o: ['went', 'have gone', 'have been'], why: '*Last summer* is a finished time, so the past simple.' },
                { q: 'I ___ three cups of coffee today, and it’s only ten o’clock.', o: ['have had', 'had', 'was having'], why: '*Today* is not finished yet, so the present perfect.' },
                { q: 'When ___ you start learning English?', o: ['did', 'have', 'has'], why: 'A question with *when* asks about a finished time.' },
                { q: 'This is the best film I ___.', o: ['have ever seen', 'ever saw', 'have ever saw'], why: 'After *the best*, *the worst*, *the most*… we use the present perfect with *ever*.' },
              ] },
            ],
            [
              { t: 'ex', kind: 'tf', h: 'Think about the conversation at the party. True or false?', items: [
                { q: 'Leo has been to Mexico.', a: 't', why: 'He says “Yes, I have.”' },
                { q: 'Leo went to Mexico in 2020.', a: 'f', why: 'He went there in 2019.' },
                { q: 'Leo has cooked mole more than once.', a: 't', why: '“I’ve made mole at home a few times.”' },
                { q: 'Maya took a cooking class in Oaxaca.', a: 'f', why: 'Leo took the cooking class, not Maya.' },
              ] },
            ],
          ],
        },
        {
          id: 'p3',
          title: 'For, since, just, already, yet',
          about: 'Say how long, and give recent news.',
          art: 'snail',
          spreads: [
            [
              { t: 'text', md: 'The present perfect also connects the past with **now**. Use it with **for** and **since** for something that started in the past and is still true today.' },
              { t: 'table', caption: 'For or since?', explain: ['head'], head: ['for + a length of time', 'since + a point in time'], rows: [
                ['for ten minutes', 'since nine o’clock'],
                ['for three years', 'since 2021'],
                ['for a long time', 'since I was a child'],
              ] },
              { t: 'examples', items: [
                { s: 'I**’ve known** Ana **for** twenty years.', n: 'We met twenty years ago, and I still know her.' },
                { s: 'They**’ve lived** here **since** 2018.', n: 'They moved here in 2018 and they still live here.' },
              ] },
            ],
            [
              { t: 'tip', art: 'owl', md: 'Do not use the present simple here. *I live here since 2018* is one of the most common mistakes in English. Say *I’ve lived here since 2018*.' },
              { t: 'text', md: '**Just**, **already** and **yet** are for recent news. *Just* means a very short time ago. *Already* means before now, often sooner than expected. *Yet* means up to now, and it goes at the end of questions and negative sentences.' },
              { t: 'examples', items: [
                { s: 'I**’ve just finished** my exams!', n: 'A few minutes or hours ago.' },
                { s: 'Have you booked the tickets **yet**? Yes, I**’ve already** done it.', n: '*Yet* in the question, *already* in the answer.' },
                { s: 'The train **hasn’t arrived yet**.', n: 'We are still waiting.' },
              ] },
            ],
            [
              { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
                { q: 'She has worked at the hospital ___ 2016.', o: ['since', 'for', 'from'], why: '2016 is a point in time, so *since*.' },
                { q: 'We’ve been friends ___ more than ten years.', o: ['for', 'since', 'during'], why: 'More than ten years is a length of time, so *for*.' },
                { q: 'Have you finished your homework ___?', o: ['yet', 'already', 'just'], why: '*Yet* goes at the end of questions.' },
                { q: 'I don’t need to cook. I’ve ___ eaten.', o: ['already', 'yet', 'since'], why: '*Already*: it happened before now.' },
              ] },
            ],
            [
              { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
                { a: 'I have just seen your message.', why: '*Just* goes between *have* and the participle.' },
                { a: 'Has the film started yet?', why: '*Yet* goes at the end of the question.' },
                { a: 'They have lived in Rome for six years.', why: '*For* + a length of time comes at the end.' },
              ] },
            ],
          ],
        },
        {
          id: 'p4',
          title: 'The big moments',
          about: 'Words and phrases for the important events in a life.',
          art: 'dog',
          spreads: [
            [
              { t: 'text', md: 'These verbs and nouns go together. Learn them as one phrase, the way native speakers use them.' },
              { t: 'table', caption: 'Life events', explain: ['head'], quiz: true, head: ['Phrase', 'Example'], rows: [
                ['be born', 'I was born in a small town near the sea.'],
                ['grow up', 'She grew up on a farm.'],
                ['graduate from university', 'They graduated from university in 2020.'],
                ['get a job', 'I got my first job at sixteen.'],
                ['move abroad', 'We moved abroad when I was ten.'],
                ['fall in love', 'They fell in love on holiday.'],
                ['get married', 'My grandparents got married in 1968.'],
                ['have a baby', 'My sister has just had a baby.'],
                ['retire', 'My father retired last year.'],
              ] },
              { t: 'tip', art: 'owl', md: 'We say *get married* or *marry someone*, never *marry with someone*. And we *pass* an exam but *graduate from* a university.' },
            ],
            [
              { t: 'ex', kind: 'match', h: 'Match the beginnings and the endings.', pairs: [
                ['fall', 'in love'],
                ['get', 'a job'],
                ['grow', 'up'],
                ['graduate', 'from university'],
                ['have', 'a baby'],
                ['move', 'abroad'],
              ] },
            ],
            [
              { t: 'ex', kind: 'gap', h: 'Complete with the correct form of the verb in brackets.', items: [
                { q: 'My grandparents ___ (get) married in 1968.', a: ['got'], why: '*In 1968* is a finished time: past simple. Get, got, got.' },
                { q: 'I ___ (grow) up in a small village, but now I live in a city.', a: ['grew'], why: 'Past simple of *grow*: *grew*.' },
                { q: 'Guess what? My sister ___ (just / have) a baby girl!', a: ['has just had', '’s just had'], why: 'Recent news: *has just* + past participle.' },
                { q: 'Since he left school, he ___ (move) house five times.', a: ['has moved', '’s moved'], why: '*Since* + a point in time, up to now: present perfect.' },
              ] },
            ],
          ],
        },
        {
          id: 'p5',
          title: 'A life in three cities',
          about: 'Read a short life story and check the details.',
          art: 'suitcase',
          spreads: [
            [
              { t: 'reading', title: 'A life in three cities', md: 'Rosa Delgado was born in Valencia in 1958. She grew up above her parents’ bakery, and by the age of ten she could make bread on her own. When she was nineteen, she moved to London to study English, and she stayed for twenty-two years.\n\nIn London, Rosa worked in restaurant kitchens, met her husband Daniel and had two children. In 1999 the family moved to Toronto, where Daniel got a job at a hospital. Rosa opened a small café there, and it is still open today.\n\nRosa has lived in Canada for more than twenty-five years now. She has visited Valencia every summer since she left, and she has taught her grandchildren to make her mother’s bread. “I have had three homes,” she says, “but I have only ever had one recipe.”' },
            ],
            [
              { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
                { q: 'Rosa learned to make bread as a child.', a: 't', why: 'By the age of ten she could make bread on her own.' },
                { q: 'Rosa went to London to work in a bakery.', a: 'f', why: 'She moved to London to study English.' },
                { q: 'Daniel is a doctor.', a: 'ng', why: 'He got a job at a hospital, but the text does not say which job.' },
                { q: 'Rosa’s café in Toronto has closed.', a: 'f', why: 'It is still open today.' },
                { q: 'Rosa’s grandchildren live in Valencia.', a: 'ng', why: 'The text does not say where they live.' },
              ] },
            ],
            [
              { t: 'ex', kind: 'choice', h: 'Look at the verbs in the text.', items: [
                { q: '“She moved to London”, not “she has moved to London”. Why?', o: ['It happened at a finished time.', 'She still lives in London.', 'Move is an irregular verb.'], why: '*When she was nineteen* is a finished time, so the past simple.' },
                { q: '“Rosa has lived in Canada for more than twenty-five years.” Why the present perfect?', o: ['She started living there in the past and she still lives there.', 'She does not live there any more.', 'We always use it with numbers.'], why: 'Present perfect + *for*: from the past up to now.' },
                { q: '“I have only ever had one recipe.” What does Rosa mean?', o: ['In her whole life she has used one bread recipe.', 'She had one recipe in the past, but she lost it.', 'She wants to find a new recipe.'], why: '*Only ever*: in her whole life, up to now, just one.' },
              ] },
            ],
          ],
        },
      ],
      test: [
        { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
          { q: 'I ___ to Canada three times, and I’d love to go again.', o: ['have been', 'went', 'have gone'], why: 'Experience up to now, and I came back: *have been*.' },
          { q: 'When ___ your first job?', o: ['did you get', 'have you got', 'have you gotten'], why: '*When* asks about a finished time: past simple.' },
          { q: 'We’ve lived in this flat ___ 2019.', o: ['since', 'for', 'ago'], why: '2019 is a point in time: *since*.' },
          { q: 'She graduated ___ university last year.', o: ['from', 'in', 'of'], why: '*Graduate from* university.' },
          { q: 'This is the most beautiful place I’ve ___ visited.', o: ['ever', 'never', 'yet'], why: '*The most…* + present perfect + *ever*.' },
        ] },
        { t: 'ex', kind: 'gap', h: 'Complete with the correct form of the verb in brackets.', items: [
          { q: 'He ___ (not / finish) the report yet.', a: ['hasn’t finished', 'has not finished'], why: '*Yet* with a negative: *hasn’t* + past participle.' },
          { q: 'My parents ___ (get) married in 1990.', a: ['got'], why: '*In 1990* is a finished time: past simple.' },
          { q: 'I ___ (know) Sam for ten years.', a: ['have known', '’ve known'], why: '*For ten years*, up to now: present perfect.' },
          { q: 'They ___ (just / have) a baby boy.', a: ['have just had', '’ve just had'], why: 'Recent news: *have just* + past participle.' },
        ] },
        { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
          { a: 'Have you ever lived abroad?', why: '*Have* + *you* + *ever* + past participle.' },
          { a: 'She has already sent the email.', why: '*Already* goes between *has* and the participle.' },
        ] },
        { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
          { q: '', o: ['I’ve lived here for five years.', 'I live here since five years.', 'I’ve lived here since five years.'], why: 'Present perfect, and *for* with a length of time.' },
          { q: '', o: ['I saw her yesterday.', 'I have seen her yesterday.', 'I have saw her yesterday.'], why: '*Yesterday* is a finished time: past simple.' },
        ] },
      ],
    },
    { id: 'u2', title: 'Work and study', planned: true },
    { id: 'u3', title: 'Getting around', planned: true },
    { id: 'u4', title: 'Food and health', planned: true },
    { id: 'u5', title: 'The world around us', planned: true },
    { id: 'u6', title: 'News and messages', planned: true },
    { id: 'u7', title: 'A new home abroad', planned: true },
    { id: 'u8', title: 'Looking ahead', planned: true },
  ],
};
