// English B2, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'Who we are',
  goal: 'Describe personality and relationships precisely, and talk about how long things have been going on.',
  art: 'cat',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['present-perfect-continuous', 'present-perfect', 'personality', 'prefixes', 'phrasal-verbs', 'relationships'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'I’ve been working, I’ve worked',
      about: 'Choose between the present perfect continuous and the present perfect simple.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Use the **present perfect continuous** for an activity that started in the past and is still going on, or has only just stopped. Form it with *have* or *has* + *been* + the *-ing* form of the verb.' },
          { t: 'examples', items: [
            { s: 'I**’ve been working** here since March.', n: 'I started in March and I still work here.' },
            { s: 'How long **have** you **been learning** Spanish?', n: '*How long* asks about the length of an activity up to now.' },
            { s: 'Your eyes are red. **Have** you **been crying**?', n: 'The activity has just stopped, and we can see its effect.' },
            { s: 'We **haven’t been sleeping** well since the baby arrived.', n: 'Negative: *haven’t* or *hasn’t* + *been* + *-ing*.' },
          ] },
        ],
        [
          { t: 'text', md: 'Use the **present perfect simple** when you focus on the **result**, or on **how many** or **how much**. Use the **continuous** when you focus on the **activity** itself and **how long** it has lasted.' },
          { t: 'table', caption: 'Activity or result?', explain: ['head'], head: ['Present perfect continuous: the activity', 'Present perfect simple: the result'], rows: [
            ['I’ve been writing emails all morning.', 'I’ve written twelve emails.'],
            ['She’s been painting the kitchen.', 'She’s painted the kitchen.'],
            ['They’ve been saving for a house for years.', 'They’ve saved twenty thousand pounds.'],
          ] },
          { t: 'text', md: '*She’s been painting the kitchen* tells us how she has spent her time, and the job may not be finished. *She’s painted the kitchen* tells us the job is done.' },
        ],
        [
          { t: 'tip', art: 'owl', md: 'Verbs for states, not actions, are not normally used in the continuous: *know, like, love, believe, understand, own, belong*. Say *I’ve known Lena for years*, never *I’ve been knowing Lena for years*.' },
          { t: 'text', md: 'With *live*, *work*, *study* and *teach* and a time phrase with *for* or *since*, both forms are correct and the meaning is almost the same: *I’ve lived here for ten years* or *I’ve been living here for ten years*. The continuous can sound more temporary.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct form.', items: [
            { q: 'I ___ Marco since we were at school.', o: ['’ve known', '’ve been knowing', 'know'], why: '*Know* is a state verb, so no continuous. *Since* needs the present perfect, not the present simple.' },
            { q: 'She ___ three job applications this week.', o: ['has sent', 'has been sending', 'is sending'], why: 'We count finished results (*three*), so the present perfect simple.' },
            { q: 'You’re still living with your parents? How long ___ for a flat of your own?', o: ['have you been looking', 'are you looking', 'do you look'], why: '*How long* + an activity that is still going on: the present perfect continuous.' },
            { q: 'I’m so tired. I ___ well recently.', o: ['haven’t been sleeping', 'haven’t been slept', 'don’t sleep'], why: '*Recently*, up to now, an activity: *haven’t been* + *-ing*. *Been slept* is not a correct form.' },
            { q: 'We ___ this house, so it belongs to us now.', o: ['’ve bought', '’ve been buying', 'were buying'], why: 'The buying is complete and the result is important: the present perfect simple.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with the present perfect continuous of the verb in brackets.', items: [
            { q: 'I ___ (wait) for the bus for forty minutes!', a: ['have been waiting', '’ve been waiting'], why: '*Have* + *been* + *waiting*: the waiting started forty minutes ago and continues.' },
            { q: 'How long ___ (she / study) medicine?', a: ['has she been studying'], why: 'In a question, *has* goes before the subject: *has she been* + *-ing*.' },
            { q: 'It ___ (rain) all day, so the match is off.', a: ['has been raining', '’s been raining'], why: '*It* takes *has*: *has been raining*.' },
            { q: 'We ___ (try) to call you. Is your phone off?', a: ['have been trying', '’ve been trying'], why: 'A repeated activity up to now: *have been trying*.' },
            { q: 'What ___ (you / do) lately? I haven’t seen you for ages.', a: ['have you been doing'], why: 'A question about recent activities: *What have you been doing?*' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
            { q: '', o: ['He’s drunk four coffees this morning.', 'He’s been drinking four coffees this morning.', 'He drinks four coffees since this morning.'], why: 'With a number of finished things, use the present perfect simple.' },
            { q: '', o: ['I’ve been cooking, so the kitchen is a mess.', 'I’ve been cooked, so the kitchen is a mess.', 'I cook, so the kitchen is a mess.'], why: 'An activity that has just stopped, with a result we can see: *I’ve been cooking*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Reliable or unreliable?',
      about: 'Describe personality, and make opposites with un-, in-, im-, ir- and dis-.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Many adjectives for personality form their opposite with a prefix: *un-*, *dis-*, *in-*, *im-* or *ir-*. Usually you have to learn which prefix a word takes, so learn the two words together.' },
          { t: 'table', caption: 'Opposites with un- and dis-', explain: ['head'], quiz: true, head: ['Adjective', 'Opposite'], rows: [
            ['reliable', 'unreliable'],
            ['sociable', 'unsociable'],
            ['predictable', 'unpredictable'],
            ['honest', 'dishonest'],
            ['organised', 'disorganised'],
            ['loyal', 'disloyal'],
          ] },
        ],
        [
          { t: 'text', md: 'When an adjective takes *in-*, the prefix changes to *im-* before *p* or *m* (*impatient, immature*), to *ir-* before *r* (*irresponsible*) and to *il-* before *l* (*illogical*). Some adjectives that start with *p* take *un-*, not *im-*: *unpredictable, unpopular*.' },
          { t: 'table', caption: 'Opposites with in-, im- and ir-', explain: ['head'], quiz: true, head: ['Adjective', 'Opposite'], rows: [
            ['considerate', 'inconsiderate'],
            ['decisive', 'indecisive'],
            ['flexible', 'inflexible'],
            ['tolerant', 'intolerant'],
            ['patient', 'impatient'],
            ['mature', 'immature'],
            ['polite', 'impolite'],
            ['responsible', 'irresponsible'],
          ] },
        ],
        [
          { t: 'tip', art: 'owl', md: '*Sensitive* can be positive (you understand how other people feel) or negative (you get upset easily). Its opposite, *insensitive*, is always negative: you hurt people because you do not notice their feelings.' },
          { t: 'ex', kind: 'choice', h: 'Choose the correct word.', items: [
            { q: 'He hates waiting in queues. He’s very ___.', o: ['impatient', 'unpatient', 'dispatient'], why: '*Patient* starts with *p*, so the prefix *in-* becomes *im-*.' },
            { q: 'She often says things that hurt people without noticing. She’s rather ___.', o: ['insensitive', 'unsensitive', 'dissensitive'], why: 'The opposite of *sensitive* is *insensitive*.' },
            { q: 'You can’t trust him to look after the children. He’s completely ___.', o: ['irresponsible', 'inresponsible', 'unresponsible'], why: '*Responsible* starts with *r*, so the prefix is *ir-*.' },
            { q: 'My desk is a mess and I always lose my keys. I’m so ___.', o: ['disorganised', 'inorganised', 'imorganised'], why: 'The opposite of *organised* is *disorganised*.' },
            { q: 'Why do you never do what you promise? You’re so ___!', o: ['unreliable', 'inreliable', 'disreliable'], why: 'The opposite of *reliable* is *unreliable*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the opposite of the adjective in brackets.', items: [
            { q: 'My manager can never make up her mind. She’s very ___ (decisive).', a: ['indecisive'], why: '*Decisive* takes *in-*: *indecisive*.' },
            { q: 'He sometimes behaves like a teenager. He’s quite ___ (mature) for his age.', a: ['immature'], why: '*Mature* starts with *m*, so *in-* becomes *im-*.' },
            { q: 'Nobody knows what she will do next. She’s completely ___ (predictable).', a: ['unpredictable'], why: '*Predictable* takes *un-*, even though it starts with *p*.' },
            { q: 'Telling your friend’s secret to everyone is really ___ (loyal).', a: ['disloyal'], why: '*Loyal* takes *dis-*: *disloyal*.' },
            { q: 'Playing loud music at two in the morning is ___ (considerate) to the neighbours.', a: ['inconsiderate'], why: '*Considerate* takes *in-*: *inconsiderate*.' },
            { q: 'My boss refuses to change any of his plans. He’s totally ___ (flexible).', a: ['inflexible'], why: '*Flexible* takes *in-*: *inflexible*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each description with an adjective.', pairs: [
            ['often tells lies', 'dishonest'],
            ['prefers not to spend time with other people', 'unsociable'],
            ['accepts opinions and habits that are different from their own', 'tolerant'],
            ['gets annoyed when they have to wait', 'impatient'],
            ['often forgets to do what they promised', 'unreliable'],
            ['keeps their things and their plans in order', 'organised'],
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Getting on and falling out',
      about: 'Phrasal verbs for friendships, family and other relationships.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'English often uses **phrasal verbs** to talk about relationships. Their meaning is not always clear from the two words, so learn each one with an example.' },
          { t: 'table', caption: 'Phrasal verbs for relationships', explain: ['head', 'col1'], quiz: true, head: ['Phrasal verb', 'Meaning'], rows: [
            ['get on (well) with someone', 'have a friendly relationship with someone'],
            ['fall out (with someone)', 'stop being friends after an argument'],
            ['make up (with someone)', 'become friends again after an argument'],
            ['look up to someone', 'admire and respect someone'],
            ['put up with someone or something', 'accept someone or something annoying without complaining'],
            ['let someone down', 'disappoint someone who trusted you'],
            ['count on someone', 'be sure that someone will help you'],
            ['drift apart', 'slowly become less close'],
            ['take after someone', 'be similar to an older person in your family'],
          ] },
        ],
        [
          { t: 'text', md: 'Word order matters. With *let someone down*, the object can go after *down* (*He let his team down*). When the object is a pronoun, it **must** go in the middle: *She let me down*, never *She let down me*.' },
          { t: 'text', md: 'Three-word verbs like *get on with*, *look up to* and *put up with* never separate: *I look up to her*. *Fall out*, *make up* and *drift apart* have no object; add *with* to say who: *I fell out with my brother*.' },
          { t: 'examples', items: [
            { s: 'I **get on** really well **with** my sister-in-law.', n: 'We have a friendly relationship.' },
            { s: 'They **fell out** over money and didn’t speak for a year.', n: '*Fall out over something*: the reason for the argument.' },
            { s: 'I don’t know how you **put up with** his jokes.', n: 'His jokes are annoying, but you accept them.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each phrasal verb with a word or phrase that means the same.', pairs: [
            ['take after', 'resemble a parent'],
            ['put up with', 'tolerate'],
            ['look up to', 'admire'],
            ['count on', 'rely on'],
            ['drift apart', 'slowly lose contact'],
            ['let down', 'disappoint'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with the missing word.', items: [
            { q: 'I really look ___ to my grandmother. She’s the bravest person I know.', a: ['up'], why: '*Look up to someone*: admire them.' },
            { q: 'Jonas and his brother fell ___ over the house, and they haven’t spoken since.', a: ['out'], why: '*Fall out*: stop being friends after an argument.' },
            { q: 'You can always count ___ Amira. She never says no when you need help.', a: ['on'], why: '*Count on someone*: be sure they will help you.' },
            { q: 'We used to be very close, but we drifted ___ after university.', a: ['apart'], why: '*Drift apart*: slowly become less close, often without an argument.' },
            { q: 'Everyone says I take ___ my father. We even laugh the same way.', a: ['after'], why: '*Take after*: be like an older family member.' },
            { q: 'They had a terrible argument, but they made ___ the next morning.', a: ['up'], why: '*Make up*: become friends again.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'She has never let me down.', why: 'With a pronoun, the object goes between *let* and *down*.' },
            { a: 'How do you put up with the noise?', why: '*Put up with* stays together, and the object comes after it.' },
            { a: 'I don’t get on with my boss.', why: '*Get on with someone*: the three words stay together.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
            { q: '', o: ['He let her down again.', 'He let down her again.', 'He let again her down.'], why: 'A pronoun object goes in the middle: *let her down*.' },
            { q: '', o: ['I look up to my older sister.', 'I look my older sister up to.', 'I look up my older sister to.'], why: '*Look up to* never separates.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Making friends after thirty',
      about: 'Read an article about friendship in adult life.',
      art: 'mug',
      spreads: [
        [
          { t: 'reading', title: 'Making friends after thirty', md: 'When Nadia moved to Leeds for a new job at the age of thirty-four, she realised something strange: she had not made a new friend in almost ten years. “At school and university, friends just happened,” she says. “You saw the same people every day. Now I go to work, I go home, and the weekend disappears.”\n\nHer experience is very common. As adults, we have less free time, and the time we have is shared between work, partners, children and ageing parents. Old friends move away, and with some of them we simply drift apart, without any argument at all.\n\nResearchers who study friendship often mention three things that help it grow: being near someone, seeing them again and again, and having the chance to relax and talk openly. School gives us all three for free. Adult life rarely does, so we have to create them on purpose.\n\nThat is exactly what Nadia decided to do. For the past year, she has been going to a climbing class every Tuesday evening. “For the first few months I hardly talked to anyone,” she admits. “But you keep seeing the same faces, and eventually someone asks you to join them for a drink.” She now belongs to a small group of climbers, and one of them, Grace, has become someone she can really count on.\n\nNadia has also learned to put up with a little awkwardness. “Inviting someone for coffee at my age felt strange, almost like asking them on a date. But most people are secretly pleased to be asked. Nobody has said no yet.”\n\nHer advice is simple: be patient, and keep turning up. “You can’t hurry a friendship,” she says, “but you can make room for it.”' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Nadia moved to Leeds because of her work.', a: 't', why: 'She moved there “for a new job”.' },
            { q: 'Nadia found it easy to make friends when she was a student.', a: 't', why: '“At school and university, friends just happened.”' },
            { q: 'Nadia made friends at the climbing class very quickly.', a: 'f', why: 'For the first few months she hardly talked to anyone.' },
            { q: 'Grace started climbing before Nadia did.', a: 'ng', why: 'The text does not say when Grace started.' },
            { q: 'Someone has refused one of Nadia’s invitations.', a: 'f', why: '“Nobody has said no yet.”' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language in the text.', items: [
            { q: 'Why does the text say “she has been going to a climbing class” and not “she went”?', o: ['She started a year ago and she still goes.', 'She stopped going a year ago.', 'She went only once.'], why: 'The present perfect continuous: an activity from the past up to now.' },
            { q: '“With some of them we simply drift apart.” What does this mean?', o: ['We slowly become less close.', 'We have a big argument.', 'We move to another city together.'], why: '*Drift apart*: slowly become less close, often without an argument.' },
            { q: 'What does “keep turning up” mean in Nadia’s advice?', o: ['continue to go and be there', 'make something louder', 'say no to invitations'], why: '*Turn up* means arrive or be present. *Keep* + *-ing* means continue doing it.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the phrasal verbs.', items: [
            { s: 'Grace has become someone she can really [count on].', why: '*Count on someone*: be sure that someone will help you.' },
            { s: 'Nadia has also learned to [put up with] a little awkwardness.', why: '*Put up with*: accept something unpleasant without complaining.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'I ___ English for six years, but I still make mistakes.', o: ['’ve been learning', '’m learning', 'learn'], why: 'An activity from the past up to now, with *for*: the present perfect continuous.' },
      { q: 'We ___ each other since primary school.', o: ['’ve known', '’ve been knowing', 'know'], why: '*Know* is a state verb: no continuous form.' },
      { q: 'Leaving without saying goodbye was very ___ of you.', o: ['impolite', 'unpolite', 'dispolite'], why: '*Polite* starts with *p*, so *in-* becomes *im-*.' },
      { q: 'I don’t know how she puts ___ with his moods.', o: ['up', 'on', 'out'], why: '*Put up with*: accept something annoying.' },
      { q: 'He ___ five kilometres today, and he’s still not tired.', o: ['has run', 'has been running', 'is running'], why: 'A finished amount (*five kilometres*): the present perfect simple.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Your hands are covered in oil. What ___ (you / do)?', a: ['have you been doing'], why: 'An activity that has just stopped, with a result we can see.' },
      { q: 'She never does what she says she will. She’s really ___ (reliable).', a: ['unreliable'], why: 'The opposite of *reliable* is *unreliable*.' },
      { q: 'He promised to help, but he let me ___.', a: ['down'], why: '*Let someone down*: disappoint them.' },
      { q: 'My parents are so ___ (tolerant). They hate any music they don’t know.', a: ['intolerant'], why: 'The opposite of *tolerant* is *intolerant*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the beginnings and the endings.', pairs: [
      ['My brother and I fell out', 'over a silly argument.'],
      ['I’ve always looked up', 'to my aunt.'],
      ['People say she takes', 'after her mother.'],
      ['I can always count', 'on my best friend.'],
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'How long have you been waiting?', why: 'Question: *How long* + *have* + subject + *been* + *-ing*.' },
      { a: 'Have you fallen out with Tom?', why: '*Fall out with someone*, in a present perfect question: *Have you* + past participle.' },
    ] },
  ],
};
