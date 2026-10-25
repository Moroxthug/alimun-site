// English B2 for moving abroad, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Belonging',
  goal: 'Talk about identity, home and community in depth.',
  art: 'sun',
  tags: { skills: ['speaking', 'reading', 'grammar', 'vocabulary'], topics: ['used-to', 'be-used-to', 'get-used-to', 'wish', 'volunteering', 'community', 'meetings', 'identity'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'Identity and change',
      about: 'Reflect on how you have changed, using used to, be used to, get used to and wish.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'text', md: 'When people talk about moving abroad, they often compare the past and the present. Three similar forms are easy to confuse. *Used to* + base form describes past habits or states that are no longer true. *Be used to* + noun or *-ing* means that something is normal and familiar for you. *Get used to* + noun or *-ing* describes the process of it becoming familiar.' },
          { t: 'table', caption: 'Used to, be used to, get used to', explain: ['head', 'col1'], head: ['Form', 'Meaning', 'Example'], rows: [
            ['used to + base form', 'a past habit or state, not true now', 'I used to live with my parents.'],
            ['be used to + -ing or noun', 'it is normal for me now', 'I’m used to driving on the left.'],
            ['get used to + -ing or noun', 'it is becoming normal for me', 'I’m slowly getting used to the dark winters.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Do not confuse *I used to work* (I worked in the past, but not now) with *I’m used to working* (working is normal for me). After *be used to* and *get used to*, a verb takes *-ing*.' },
        ],
        [
          { t: 'text', md: 'Other useful phrases help you reflect on how you have changed and what you would do differently.' },
          { t: 'examples', items: [
            { s: 'I **didn’t use to** drink tea without sugar, but now I can’t drink it any other way.', n: 'Negative: *didn’t use to*, without *-d*.' },
            { s: '**It took me a while to get used to** people queuing so patiently.', n: '*It took me a while to* + base form: it happened slowly.' },
            { s: 'I**’ve come to realise** that home is more about people than places.', n: '*Come to* + *realise*, *understand* or *appreciate*: your view changed over time.' },
            { s: 'I **wish I’d known** how long the visa process would take.', n: '*Wish* + past perfect: a regret about the past.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct form.', items: [
            { q: 'I ___ in a big city, but now I live in a small village.', o: ['used to live', 'am used to living', 'get used to living'], why: 'A past state that is no longer true: *used to* + base form.' },
            { q: 'After five years here, I ___ the rain. It doesn’t bother me any more.', o: ['’m used to', 'used to', 'use to'], why: 'It is normal for me now: *be used to* + noun.' },
            { q: 'It took me months to ___ working such long hours.', o: ['get used to', 'used to', 'be use to'], why: 'The process of something becoming normal: *get used to* + *-ing*.' },
            { q: 'I ___ how hard it would be to find a flat. Nobody warned me.', o: ['wish I’d known', 'wish I know', 'wished I know'], why: 'A regret about the past: *wish* + past perfect.' },
            { q: 'Over the years, I’ve ___ to appreciate the quiet of the countryside.', o: ['come', 'gone', 'been'], why: '*Come to appreciate*: a change in your feelings over time.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with the correct form of the words in brackets.', items: [
            { q: 'I ___ (not / use to) enjoy cooking, but now I love it.', a: ['didn’t use to', 'did not use to'], why: 'Negative: *didn’t use to* + base form.' },
            { q: 'Are you used to ___ (live) on your own yet?', a: ['living'], why: '*Be used to* + *-ing*.' },
            { q: 'I’m still getting used to ___ (speak) English all day.', a: ['speaking'], why: '*Get used to* + *-ing*.' },
            { q: 'I wish I ___ (learn) more English before I moved.', a: ['had learnt', 'had learned', '’d learnt', '’d learned'], why: 'A regret about the past: *wish* + past perfect.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'It took me a while to settle in.', why: '*It took me a while to* + base form.' },
            { a: 'I wish I had come here sooner.', why: '*Wish* + past perfect for a regret.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Getting involved',
      about: 'Talk about volunteering and local campaigns, and give your opinion at a community meeting.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'Getting involved locally is one of the quickest ways to feel at home. Many towns have **residents’ associations**, community gardens, food banks, sports clubs and local campaigns, and many charities rely on **volunteers**. Public meetings, for example about a new road or the future of a library, are usually open to everyone who lives in the area.' },
          { t: 'table', caption: 'Words for community life', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['volunteer', 'work without pay, usually for a charity or a community group'],
            ['residents’ association', 'a group of people who live in an area and work to improve it'],
            ['campaign', 'organised action to achieve a change, for example to save a park'],
            ['petition', 'a document that many people sign to ask for a change'],
            ['raise a concern', 'mention a problem that worries you'],
            ['the council', 'the local government of a town or area'],
          ] },
        ],
        [
          { t: 'text', md: 'At a meeting, polite but clear language helps you to be heard. Introduce your point, say why your view matters and give a reason.' },
          { t: 'examples', items: [
            { s: '**I’d like to raise a point about** the bus service.', n: 'Introduces your topic.' },
            { s: '**Speaking as** a parent of two young children, I’m worried about the traffic.', n: '*Speaking as* + a role: explains why your view matters.' },
            { s: '**I take your point, but** closing the library would affect a lot of older residents.', n: 'Accepts the other view, then disagrees.' },
            { s: '**Could I just come in here?**', n: 'A polite way to interrupt in a meeting.' },
            { s: '**It seems to me that** we need more information before we decide.', n: 'Gives an opinion carefully.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'The future of the old library', lines: [
            { who: 'Margaret', s: 'Right, the next item is the plan to turn the old library into flats. Who’d like to start?' },
            { who: 'Bilal', s: 'I’d like to raise a point, if I may. Speaking as someone who arrived here two years ago, the library was where I first met people.' },
            { who: 'Margaret', s: 'Thank you, Bilal. Ana?' },
            { who: 'Ana', s: 'I take your point, but the building has been empty for a year, and we desperately need more homes.' },
            { who: 'Bilal', s: 'Could I just come in here? I’m not against new homes. It seems to me that we could have both: flats upstairs and a community space on the ground floor.' },
            { who: 'Ana', s: 'That’s actually not a bad idea. Has anyone asked the council whether that’s possible?' },
            { who: 'Margaret', s: 'Not yet. Shall we put it in writing and start a petition?' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the meeting. True or false?', items: [
            { q: 'Bilal says the library helped him to meet people when he arrived.', a: 't', why: '*The library was where I first met people.*' },
            { q: 'Ana thinks the area has enough homes.', a: 'f', why: '*We desperately need more homes.*' },
            { q: 'Bilal is completely against building flats.', a: 'f', why: '*I’m not against new homes.* He suggests having both.' },
            { q: 'Ana likes Bilal’s idea.', a: 't', why: '*Not a bad idea* is understatement: she likes it.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the phrase and what it does.', pairs: [
            ['I’d like to raise a point about…', 'introduce your topic'],
            ['Speaking as a parent, …', 'explain your role'],
            ['I take your point, but…', 'accept a view, then disagree'],
            ['Could I just come in here?', 'interrupt politely'],
            ['It seems to me that…', 'give your opinion carefully'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with one word.', items: [
            { q: 'I’d like to ___ a concern about the new car park.', a: ['raise', 'express', 'voice'], why: '*Raise a concern*: mention a problem that worries you.' },
            { q: '___ as a local business owner, I support the plan.', a: ['Speaking'], why: '*Speaking as* + a role.' },
            { q: 'I ___ your point, but I still think it’s too expensive.', a: ['take', 'see', 'understand'], why: '*I take your point, but…* accepts a view and then disagrees.' },
            { q: 'More than five hundred people have signed the ___ to save the park.', a: ['petition'], why: 'People *sign a petition* to ask for a change.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Where is home?',
      about: 'Read an essay about how one newcomer came to feel at home.',
      art: 'nata',
      spreads: [
        [
          { t: 'reading', title: 'Where is home?', md: 'When I moved to Cardiff six years ago, I thought that feeling at home would be a matter of time. I imagined that one morning I would simply wake up and belong. It did not happen like that.\n\nIn the first year, everything was an effort. I used to rehearse phone calls before I made them, and I avoided the corner shop because I could never understand the man behind the counter. I was not used to the humour, the indirectness, or the way people said “cheers” when they meant “thank you”. I felt like a guest who had stayed too long.\n\nWhat changed things was not time, but involvement. A neighbour persuaded me to help at the community garden on Saturday mornings. I knew nothing about plants, and I said so. “Neither do we,” she replied, “but we have tea.” Over the next few months, I learnt the names of vegetables, of streets and, most importantly, of people. When the council planned to sell the land, I found myself standing up at a public meeting and speaking as “a local resident”. Nobody laughed.\n\nI have come to realise that belonging is not a feeling you wait for, but something you build, slowly and often clumsily. I still miss my parents, the food of my childhood and the sound of my own language in the street. I wish I had understood earlier that missing one place does not stop you from loving another.\n\nThese days, when people ask me where home is, I give two answers, and both of them are true.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'The writer felt at home almost immediately.', a: 'f', why: '*It did not happen like that.* In the first year, *everything was an effort*.' },
            { q: 'In the first year, the writer practised phone calls before making them.', a: 't', why: '*I used to rehearse phone calls before I made them.*' },
            { q: 'The writer knew a lot about gardening before joining the community garden.', a: 'f', why: '*I knew nothing about plants.*' },
            { q: 'In the end, the council decided not to sell the land.', a: 'ng', why: 'The writer spoke at the meeting, but the essay does not say what the council decided.' },
            { q: 'The writer no longer misses anything about her first home.', a: 'f', why: '*I still miss my parents, the food of my childhood…*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the ideas and language of the essay.', items: [
            { q: 'According to the writer, what made the biggest difference?', o: ['getting involved in the community', 'simply waiting for time to pass', 'learning to cook local food'], why: '*What changed things was not time, but involvement.*' },
            { q: '“Neither do we,” she replied, “but we have tea.” What does the neighbour mean?', o: ['Nobody there is an expert, and the group is friendly and relaxed.', 'The writer must bring her own tea.', 'She does not want the writer to join.'], why: 'A light, self-deprecating joke that makes the writer feel welcome.' },
            { q: 'What does the last sentence suggest?', o: ['The writer feels at home in two places.', 'The writer cannot decide where to live.', 'The writer is planning to move again.'], why: 'Both answers are true: she belongs to both places.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the phrase that shows a change of view over time.', items: [
            { s: 'I have [come to realise] that belonging is something you build.', why: '*Come to realise*: your understanding changed slowly.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'I ___ play football every weekend when I was a student.', o: ['used to', 'was used to', 'got used to'], why: 'A past habit: *used to* + base form.' },
      { q: 'I’m not used to ___ so early.', o: ['getting up', 'get up', 'got up'], why: '*Be used to* + *-ing*.' },
      { q: 'I wish I ___ my family more often when I was younger.', o: ['had visited', 'visited', 'have visited'], why: 'A regret about the past: *wish* + past perfect.' },
      { q: 'A document that many people sign to ask for a change is a ___.', o: ['petition', 'campaign', 'council'], why: '*Petition*.' },
      { q: 'You want to interrupt politely in a meeting: “___”', o: ['Could I just come in here?', 'Stop talking, please.', 'Be quiet for a second.'], why: '*Could I just come in here?* is a polite interruption.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'It took me a long time to get used to ___ (drive) on the left.', a: ['driving'], why: '*Get used to* + *-ing*.' },
      { q: 'I didn’t ___ to like spicy food, but now I love it.', a: ['use'], why: 'Negative: *didn’t use to*, without *-d*.' },
      { q: 'I take your ___, but I don’t agree.', a: ['point'], why: '*I take your point, but…*' },
      { q: 'Many charities rely on ___ who work without pay.', a: ['volunteers'], why: '*Volunteers* work without pay.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'I’d like to raise a point about parking.', why: '*I’d like to raise a point about* + topic.' },
      { a: 'Are you used to the weather yet?', why: 'Question with *be used to* + noun.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: '*I’m used to working at night* means working at night is normal for me.', a: 't', why: '*Be used to*: familiar and normal.' },
      { q: '*I used to work at night* means I work at night now.', a: 'f', why: '*Used to* + base form: in the past, but not now.' },
    ] },
  ],
};
