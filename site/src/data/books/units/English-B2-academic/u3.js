// English B2 for study and exams, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Summarising and paraphrasing',
  goal: 'Find the main points of a text, write a short summary and say things in your own words.',
  art: 'snail',
  tags: { skills: ['writing', 'reading', 'vocabulary'], topics: ['summary', 'main-idea', 'paraphrase', 'synonyms', 'reporting-language'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Main points and summaries',
      about: 'Tell main ideas from details and write a short summary of a text.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'A **summary** gives the main ideas of a text in your own words, in far fewer words than the original. It leaves out examples, small details and repetition, and it does not include your own opinion. To find the main ideas, look at the title, the first and last paragraphs and the first sentence of each paragraph.' },
          { t: 'examples', items: [
            { s: 'The article **argues** that cities should invest in public transport.', n: 'Use a reporting verb to show that the ideas belong to the writer, not to you.' },
            { s: '**According to** the author, most people underestimate their screen time.', n: '*According to* + the source introduces the writer’s view.' },
            { s: 'The text **examines** the causes of the decline in bee populations.', n: '*Examine*, *discuss* and *explore* say what a text is about.' },
            { s: 'The writer **concludes** that more research is needed.', n: '*Conclude* reports the writer’s final point.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Summaries are usually written in the present simple: *The author argues…*, *The text shows…*, even when the text was written years ago.' },
        ],
        [
          { t: 'reading', title: 'Community gardens', md: 'Many cities are turning empty land into community gardens. These gardens provide fresh vegetables for local families, but their main value may be social. People who would never normally meet work side by side, share tools and swap advice. In one neighbourhood in the north of England, for example, retired residents teach teenagers how to grow tomatoes. Several studies also suggest that people who garden regularly tend to feel less stressed. For these reasons, some city councils now offer free land and training to anyone who wants to start a garden.' },
          { t: 'ex', kind: 'choice', h: 'Read the paragraph and choose the best answer.', items: [
            { q: 'Which sentence best expresses the main idea of the paragraph?', o: ['Community gardens bring people together as well as providing food.', 'Retired residents teach teenagers how to grow tomatoes.', 'City councils give free land to gardeners.'], why: 'The paragraph says the main value of the gardens may be social. The other options are details.' },
            { q: 'Which detail is an example that you would leave out of a short summary?', o: ['retired residents teaching teenagers to grow tomatoes', 'the social value of the gardens', 'the fact that the gardens provide food'], why: '*For example* introduces this detail. It illustrates the main idea but is not needed in a summary.' },
            { q: 'Which is the best one-sentence summary?', o: ['The writer argues that community gardens are valuable mainly because they bring people together and may reduce stress, so some councils support them.', 'Community gardens are wonderful and every city should have many of them.', 'Older people show teenagers how to grow tomatoes, and people share tools.'], why: 'It reports the main ideas with a reporting verb and adds no opinion. The second gives an opinion; the third gives only details.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'True or false?', items: [
            { q: 'A summary should include your own opinion of the text.', a: 'f', why: 'A summary reports the writer’s ideas. Your opinion belongs in a response or an essay.' },
            { q: 'A summary is usually written in your own words.', a: 't', why: 'Copying long phrases is not summarising, and in academic work it can count as plagiarism.' },
            { q: 'Examples and small details are usually left out of a summary.', a: 't', why: 'A summary keeps the main ideas only.' },
            { q: 'A summary should follow the original text sentence by sentence.', a: 'f', why: 'A summary groups the main ideas; it does not retell every sentence.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'The author argues that cities need more trees.', why: 'Source + reporting verb + *that* clause.' },
            { a: 'The article focuses on the cost of housing.', why: '*Focus on* says what the text is about.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete each sentence from a summary with one word.', items: [
            { q: 'The article ___ that cities should invest in public transport.', a: ['argues', 'claims', 'suggests', 'states'], why: 'A reporting verb in the present simple: *argues*, *claims*, *suggests* or *states*.' },
            { q: '___ to the author, most people sleep less than they need.', a: ['According'], why: '*According to* + the source.' },
            { q: 'The text ___ the causes of the decline in bee populations.', a: ['examines', 'discusses', 'explores', 'describes', 'analyses', 'investigates'], why: 'A verb that says what the text is about: *examines*, *discusses*, *explores*…' },
            { q: 'The writer ___ by saying that more research is needed.', a: ['concludes', 'ends', 'finishes'], why: '*Concludes by saying* reports the final point of the text.' },
            { q: 'In ___, the author believes that the benefits outweigh the costs.', a: ['summary', 'short', 'brief'], why: '*In summary*, *in short* and *in brief* introduce the main point in a few words.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Synonyms and new structures',
      about: 'Paraphrase a sentence by changing both the words and the grammar, without changing the meaning.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'A **paraphrase** says the same thing as the original in different words. Changing one or two words is not enough: a good paraphrase usually changes the **words** and the **structure** of the sentence, but keeps exactly the same meaning.' },
          { t: 'table', caption: 'Ways to paraphrase', explain: ['head', 'col0'], head: ['Technique', 'Original', 'Paraphrase'], rows: [
            ['use synonyms', 'The number of tourists has risen sharply.', 'Visitor numbers have increased dramatically.'],
            ['change the word class', 'People are increasingly concerned about pollution.', 'There is growing concern about pollution.'],
            ['change active to passive', 'The council introduced the law in 2019.', 'The law was introduced in 2019.'],
            ['change the order of ideas', 'Because the trains were late, many workers missed meetings.', 'Many workers missed meetings as a result of train delays.'],
          ] },
        ],
        [
          { t: 'examples', items: [
            { s: 'Original: Regular exercise reduces the risk of heart disease.', n: 'The sentence to paraphrase.' },
            { s: 'Too close: Regular exercise **lowers** the risk of heart disease.', n: 'Only one word has changed. This is too close to the original.' },
            { s: 'Good: People who exercise regularly are **less likely to develop** heart disease.', n: 'New words and a new structure, with the same meaning.' },
            { s: 'Wrong: Exercise **stops** heart disease.', n: 'The meaning has changed. Reducing a risk is not the same as stopping a disease.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Keep technical terms, names and numbers as they are: *heart disease* has no natural synonym. And check that a synonym fits the context: prices *rise sharply*, but they do not *rise acutely*, although *sharp* and *acute* can mean the same in other contexts.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each academic word with an everyday synonym.', pairs: [
            ['rapidly', 'quickly'],
            ['demonstrate', 'show'],
            ['obtain', 'get'],
            ['require', 'need'],
            ['approximately', 'about'],
            ['consequence', 'result'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best paraphrase of each sentence.', items: [
            { q: 'Most students find it difficult to manage their time during exams.', o: ['Time management during exams is a problem for the majority of students.', 'Most students find it hard to manage their time during exams.', 'Students never manage their time well during exams.'], why: 'The second option changes only one word. The third changes the meaning: *most* is not *all*.' },
            { q: 'Fast food is popular because it is cheap and convenient.', o: ['The low cost and convenience of fast food explain its popularity.', 'Fast food is cheap and convenient because it is popular.', 'Fast food is popular since it is cheap and convenient.'], why: 'Nouns replace the adjectives and the structure is new. The second option reverses cause and result.' },
            { q: 'The museum was closed for repairs for two years.', o: ['Repair work kept the museum shut for two years.', 'The museum closed two years ago.', 'The museum was shut for repairs for two years.'], why: 'New words and a new structure. The second option changes the meaning; the third changes only one word.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the paraphrase with one word so that it means the same as the first sentence.', items: [
            { q: 'Prices rose sharply. → There was a sharp ___ in prices.', a: ['rise', 'increase'], why: 'The verb becomes a noun: *a sharp rise* or *a sharp increase*.' },
            { q: 'The company employs two hundred people. → Two hundred people are ___ by the company.', a: ['employed'], why: 'Active to passive: *are employed by*.' },
            { q: 'He was late because of the snow. → The snow ___ him to be late.', a: ['caused'], why: '*Cause someone to do something*: the cause becomes the subject.' },
            { q: 'It is not necessary to bring a laptop. → You do not ___ to bring a laptop.', a: ['need', 'have'], why: '*You do not need to* or *you do not have to*: it is not necessary.' },
            { q: 'Many people are worried about climate change. → Climate change is a ___ of concern for many people.', a: ['source', 'cause'], why: '*A source of concern*: something that worries people.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'An article and two summaries',
      about: 'Read an article, then compare a strong and a weak summary of it.',
      art: 'dog',
      spreads: [
        [
          { t: 'reading', title: 'The new life of public libraries', md: 'For centuries, the main purpose of a public library was simple: to lend books. Today, when books can be downloaded in seconds, some people question whether libraries are still needed. In several countries, local authorities facing budget cuts have reduced opening hours or closed branches altogether.\n\nYet many libraries are not disappearing; they are changing. Alongside books, they now offer free internet access, help with job applications, language classes and quiet places to study. For people without a computer or a reliable connection at home, these services can be essential. Libraries have also become meeting places, hosting everything from children’s reading groups to workshops for small businesses.\n\nSupporters argue that this makes libraries more important than ever. They point out that a library is one of the few public spaces where people can stay as long as they like without having to buy anything. Critics, on the other hand, claim that libraries are trying to do too much and that some of these services would be better provided by other organisations.\n\nWhat seems clear is that the future of libraries depends less on books than on people. Libraries that have adapted to the needs of their communities appear to attract more visitors, while those that have stayed the same are more likely to face closure. The question is no longer whether libraries should exist, but what they should be for.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'According to the article, some libraries have closed.', a: 't', why: 'Some local authorities have *closed branches altogether*.' },
            { q: 'Libraries now have fewer books than in the past.', a: 'ng', why: 'The article says libraries offer services *alongside books*, but it does not compare the number of books.' },
            { q: 'Critics believe that libraries should offer more services.', a: 'f', why: 'Critics claim that libraries are *trying to do too much*.' },
            { q: 'Libraries that have not changed are more likely to close.', a: 't', why: 'Those that have stayed the same *are more likely to face closure*.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Summary A', md: 'The article explains how public libraries are changing. Although some have closed because of budget cuts, many now provide services such as internet access, classes and study space, and act as community meeting places. Supporters believe this makes libraries more valuable, whereas critics feel they are taking on too much. The writer concludes that libraries which respond to local needs are more likely to survive.' },
          { t: 'reading', title: 'Summary B', md: 'For centuries, the main purpose of a public library was simple: to lend books. Libraries now offer free internet access, help with job applications, language classes, quiet places to study and children’s reading groups. I think this is a great idea and every town should have a library. Critics claim that libraries are trying to do too much.' },
          { t: 'ex', kind: 'choice', h: 'Compare the two summaries.', items: [
            { q: 'What is wrong with Summary B?', o: ['It copies phrases, lists details and adds a personal opinion.', 'It is much too short to be a summary.', 'It uses too many formal connectors.'], why: 'Its first sentence is copied, it lists every service, and *I think this is a great idea* is an opinion.' },
            { q: 'Summary B leaves out an important point. Which one?', o: ['the writer’s conclusion about the future of libraries', 'the free internet access', 'the critics’ view'], why: 'Summary B never mentions that libraries which adapt are more likely to survive.' },
            { q: 'Which word in Summary A shows a contrast between two views?', o: ['whereas', 'such as', 'concludes'], why: '*Whereas* contrasts what supporters believe with what critics feel.' },
            { q: 'How does Summary A describe the services in the article?', o: ['It groups them in a few general words.', 'It copies the full list from the article.', 'It leaves all of them out.'], why: '*Internet access, classes and study space* is a shorter, grouped version of the original list.' },
          ] },
        ],
        [
          { t: 'tip', art: 'owl', md: 'Before you hand in a summary, check it against the original. Have you kept every main idea? Have you left out the examples? Is every sentence in your own words? Is there any opinion of your own? If so, take it out.' },
          { t: 'ex', kind: 'spot', h: 'These sentences are from Summary A. Tap the reporting verb.', items: [
            { s: 'The article [explains] how public libraries are changing.', why: '*Explains* reports what the article does.' },
            { s: 'The writer [concludes] that libraries which respond to local needs are more likely to survive.', why: '*Concludes* reports the writer’s final point.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'A summary should…', o: ['give the main ideas in your own words', 'include every example from the text', 'add your own opinion of the text'], why: 'Main ideas, own words, no opinion.' },
      { q: 'Which is the best paraphrase of “The price of housing has doubled”?', o: ['Housing now costs twice as much as it did before.', 'The price of housing has increased.', 'Housing has doubled.'], why: '*Twice as much* keeps the exact meaning of *doubled* in new words.' },
      { q: 'The article ___ that more research is needed.', o: ['suggests', 'tells', 'speaks'], why: '*Suggest that* is correct. *Tell* needs a person (*tells us that*), and *speak* is not followed by *that*.' },
      { q: 'Which everyday word is a synonym of *obtain*?', o: ['get', 'give', 'keep'], why: '*Obtain* means *get*, especially in formal writing.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete each sentence with one word.', items: [
      { q: 'Prices increased rapidly. → There was a rapid ___ in prices.', a: ['increase', 'rise'], why: 'The verb becomes a noun; the adverb becomes an adjective.' },
      { q: 'Volunteers built the school. → The school was ___ by volunteers.', a: ['built'], why: 'Active to passive: *was built by*.' },
      { q: '___ to the article, cities need more green spaces.', a: ['According'], why: '*According to* + the source.' },
      { q: 'The writer ___ that libraries must adapt in order to survive.', a: ['argues', 'concludes', 'claims', 'believes', 'suggests', 'says', 'states', 'thinks', 'feels'], why: 'A reporting verb in the present simple.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match each academic word with an everyday synonym.', pairs: [
      ['demonstrate', 'show'],
      ['require', 'need'],
      ['approximately', 'about'],
      ['consequence', 'result'],
    ] },
  ],
};
