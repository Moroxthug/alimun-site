// English B2, unit 1, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Builds on B1 unit 1 (present perfect simple and continuous, for and since): at B2 the choice between the two forms
// for result, duration and repeated action; then precise personality words with prefixes, relationship phrasal verbs,
// and a reading. Exam tasks in the format of B2 First.
export const UNIT = {
  id: 'u1',
  title: 'Who we are',
  goal: 'Describe personality and relationships precisely, and choose exactly the right perfect form to talk about results, durations and repeated actions up to now.',
  art: 'cat',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'speaking'], topics: ['present-perfect-continuous', 'present-perfect', 'personality', 'prefixes', 'phrasal-verbs', 'relationships'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'I’ve been working, I’ve worked',
      about: 'Choose between the present perfect simple and continuous when you talk about results, duration and repeated actions.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'At B1 you learned that both the **present perfect simple** (*I have worked*) and the **present perfect continuous** (*I have been working*) connect the past to now. At B2 the question is no longer which one is correct, but which one says exactly what you mean. Very often both are grammatical, and the choice changes the message.\n\nThink of it like this. The **simple** form looks at the **result**: what is finished, how much, how many. The **continuous** form looks at the **activity** itself: how long it has been going on, and the fact that it is still in progress or has only just stopped.' },
          { t: 'table', caption: 'Result or activity?', explain: ['head', 'col2'], head: ['Simple', 'Continuous', 'The difference'], rows: [
            ['I’ve written three emails.', 'I’ve been writing emails all morning.', 'how many (result) / how long (activity)'],
            ['She’s painted the kitchen.', 'She’s been painting the kitchen.', 'the job is finished / it may not be finished'],
            ['They’ve lived here for years.', 'They’ve been living here since June.', 'permanent / felt as temporary'],
          ] },
          { t: 'tip', art: 'owl', md: 'A number or a quantity (*three emails, ten kilometres, half the book*) almost always needs the **simple** form, because you are counting a result. *I’ve been reading 50 pages* sounds wrong; *I’ve read 50 pages* or *I’ve been reading for an hour* are both natural.' },
        ],
        [
          { t: 'text', md: 'Two more uses of the continuous are very common in conversation.\n\n**Visible results of a recent activity.** When you can see or feel the effect of something that has just stopped, use the continuous: *You’re out of breath. Have you been running?* *My hands are dirty because I’ve been gardening.*\n\n**Repeated actions up to now.** The continuous can describe something that has happened again and again over a period: *I’ve been getting strange calls all week.* *He’s been coming late to meetings recently.* This often sounds slightly irritated or surprised.\n\nRemember that **state verbs** (*know, believe, belong, own, understand*) are not normally used in the continuous: *I’ve known her for ten years*, not *I’ve been knowing her*.' },
          { t: 'examples', items: [
            { s: 'Your eyes are red. **Have you been crying**?', n: 'A visible result of an activity that has just stopped.' },
            { s: 'I**’ve been trying** to call you all day!', n: 'Repeated attempts, with a hint of frustration.' },
            { s: 'We**’ve known** each other since school.', n: '*Know* is a state verb: simple form only.' },
            { s: 'How many cups of coffee **have** you **had** today?', n: '*How many* asks for a number: simple form.' },
            { s: 'How long **have** you **been waiting**?', n: '*How long* with an activity: continuous form.' },
            { s: 'The price of rent **has risen** sharply this year.', n: 'A completed change seen as a result.' },
          ] },
        ],
        [
          { t: 'text', md: 'These are the mistakes B2 learners still make with the two forms. Most come from choosing the continuous for everything, because it feels more modern or more fluent.' },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I’ve been reading four books this month.', 'I’ve read four books this month.', 'A number of things finished: simple.'],
            ['I’ve been knowing him for years.', 'I’ve known him for years.', '*Know* is a state verb.'],
            ['I work here since 2020.', 'I’ve worked / been working here since 2020.', '*Since* needs a perfect form.'],
            ['Sorry I’m late. Have you waited long?', 'Sorry I’m late. Have you been waiting long?', 'The waiting is the point, and it has just stopped.'],
          ] },
          { t: 'dialogue', title: 'A tired colleague', lines: [
            { who: 'Daniel', s: 'You look exhausted. Have you been working late again?' },
            { who: 'Laura', s: 'Every night this week. I’ve been preparing the report for the board.' },
            { who: 'Daniel', s: 'Have you finished it?' },
            { who: 'Laura', s: 'Almost. I’ve written four sections, and I’ve been checking the figures since lunch.' },
            { who: 'Daniel', s: 'You’ve been doing too much. Why don’t I take the last section?' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the better form.', items: [
            { q: 'I ___ three chapters of my thesis so far.', o: ['’ve written', '’ve been writing', 'write'], why: 'A number of chapters finished: the simple form shows the result.' },
            { q: 'You’re covered in paint! What ___ ?', o: ['have you been doing', 'have you done', 'did you do'], why: 'A visible effect of a recent activity: the continuous.' },
            { q: 'They ___ each other since primary school.', o: ['’ve known', '’ve been knowing', 'know'], why: '*Know* is a state verb, so only the simple form is possible.' },
            { q: 'My neighbour ___ loud music every night this week.', o: ['’s been playing', '’s played', 'plays'], why: 'A repeated, annoying action up to now: the continuous.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'I [have been visiting] five countries this year.', a: ['have visited', '’ve visited'], why: 'A number of places: use the simple form for the result.' },
            { s: 'She [is living] here since 2019.', a: ['has lived', 'has been living', '’s lived', '’s been living'], why: '*Since* needs a perfect form, not the present continuous.' },
            { s: 'I [have been owning] this car for twelve years.', a: ['have owned', '’ve owned'], why: '*Own* is a state verb, so the continuous is not used.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'In the format of the B2 First exam (Reading and Use of English Part 4): complete the second sentence so that it means the same as the first, using the word given.', items: [
            { q: 'I started learning the guitar three years ago.', cue: 'BEEN', a: ['I have been learning the guitar for three years.', 'I’ve been learning the guitar for three years.'], why: 'Start + time ago becomes the present perfect continuous with *for*.' },
            { q: 'This is my first visit to Scotland.', cue: 'NEVER', a: ['I have never visited Scotland before.', 'I’ve never visited Scotland before.', 'I have never been to Scotland before.', 'I’ve never been to Scotland before.'], why: '*First time* becomes *never… before* with the present perfect.' },
            { q: 'The last time I saw Anna was in May.', cue: 'SINCE', a: ['I have not seen Anna since May.', 'I haven’t seen Anna since May.'], why: '*The last time… was* becomes a negative present perfect with *since*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Part 4 you must use between **two and five words**, including the word given, and you must not change that word. Each answer is marked in two halves, so even a partly right answer can score one point. Write the whole sentence in your head first, then count the words.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor. Stress the important word.', tutor: 'sofia', items: [
            { a: 'I’ve been waiting for over an hour.' },
            { a: 'I’ve read three of her novels.' },
            { a: 'Have you been running? You look exhausted.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'Kind, unkind, disloyal',
      about: 'Describe personality precisely, and make opposites with prefixes.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'At B2 you need more than *nice* and *friendly*. Precise personality words make your speaking and writing sound mature, and they are tested in B2 First, especially in word formation.\n\nMany personality adjectives make their opposite with a **prefix**. There is no perfect rule, but there are useful patterns. **un-** is the most common (*unkind, unreliable*). **in-** is common with words from Latin (*insensitive, inconsiderate*). It becomes **im-** before *m* and *p* (*impatient, immature*), **ir-** before *r* (*irresponsible*) and **il-** before *l* (*illogical*). **dis-** appears with some verbs and adjectives (*dishonest, disloyal*).' },
          { t: 'table', caption: 'Opposites with prefixes', explain: ['head'], head: ['Prefix', 'Adjective', 'Opposite'], rows: [
            ['un-', 'reliable, predictable, selfish', 'unreliable, unpredictable, unselfish'],
            ['in-', 'sensitive, considerate, decisive', 'insensitive, inconsiderate, indecisive'],
            ['im-', 'patient, mature, polite', 'impatient, immature, impolite'],
            ['ir-', 'responsible, rational', 'irresponsible, irrational'],
            ['dis-', 'honest, loyal, organised', 'dishonest, disloyal, disorganised'],
          ] },
          { t: 'tip', art: 'owl', md: 'Be careful with **unselfish**: it is positive. Not every opposite is negative. And some words have no prefix opposite at all: the opposite of *generous* is *mean*, not *ungenerous* (which exists but is rare).' },
        ],
        [
          { t: 'text', md: 'Precision also means choosing between words that look similar. **Sensible** means practical and reasonable; **sensitive** means easily upset, or good at noticing other people’s feelings. **Confident** describes a person who believes in themselves; **confidential** describes information that is secret.\n\nYou can also make descriptions more exact with **adverbs** and with **noun phrases**: *She’s remarkably self-confident. He has a very dry sense of humour. She’s a good listener.* And to soften a negative word, English speakers often use *a bit*, *rather* or *can be*: *He can be a bit stubborn.*' },
          { t: 'examples', items: [
            { s: 'She’s **sensible** with money; she never buys on impulse.', n: '*Sensible*: practical, reasonable.' },
            { s: 'He’s quite **sensitive**, so be careful what you say.', n: '*Sensitive*: easily hurt, or aware of feelings.' },
            { s: 'My brother is **easy-going**, but he **can be** a bit **lazy**.', n: '*Can be* softens criticism.' },
            { s: 'Our manager is **decisive**, which makes meetings short.', n: 'The opposite is *indecisive*.' },
            { s: 'It was **immature** of him to leave without saying goodbye.', n: '*It was + adjective + of someone + to…* judges an action.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['She’s very unpatient.', 'She’s very impatient.', '*im-* before *p*.'],
            ['He’s sensible, he cries at films.', 'He’s sensitive; he cries at films.', '*Sensitive* is about feelings.'],
            ['It was kind from you to help.', 'It was kind of you to help.', 'The pattern is *kind of someone*.'],
            ['She is very responsable.', 'She is very responsible.', 'Spelling: *-ible*.'],
          ] },
          { t: 'reading', title: 'The perfect flatmate?', md: 'Finding a good flatmate is harder than it looks. My first one, Theo, was charming and generous, but completely unreliable: he forgot to pay his share of the rent twice in three months.\n\nMy second flatmate, Mira, was the opposite. She was organised, considerate and extremely sensible with money. The problem was that she was also rather inflexible. Any change to the cleaning rota was a crisis.\n\nNow I live with Sam, who is easy-going without being careless. He can be a bit indecisive (choosing a pizza takes twenty minutes), but he is honest, and when something goes wrong, he tells me immediately. I think that’s what matters most.' },
        ],
        [
          { t: 'ex', kind: 'wordform', h: 'In the format of the B2 First exam (Reading and Use of English Part 3): use the word in capitals to form a word that fits the gap.', items: [
            { q: 'Theo was charming but completely ___ with money.', base: 'reliable', a: ['unreliable'], why: 'The context is negative: *un-* + *reliable*.' },
            { q: 'Leaving dirty dishes for a week is very ___ .', base: 'consider', a: ['inconsiderate'], why: 'You need an adjective with a negative meaning: *in-* + *considerate*.' },
            { q: 'She showed great ___ when she told me the truth.', base: 'honest', a: ['honesty'], why: 'After *great* you need a noun: *honesty*.' },
            { q: 'His ___ to make decisions annoys everyone.', base: 'able', a: ['inability'], why: 'A noun meaning *not being able*: *inability*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Part 3, first decide **which kind of word** the gap needs (noun, adjective, adverb, verb), then whether the meaning is **positive or negative**, and finally whether it needs a **plural** or another change. Many points are lost by forgetting a negative prefix.' },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Read the text again. True, false or not given?', ng: true, items: [
            { q: 'Theo sometimes didn’t pay his rent.', a: 't', why: 'He forgot to pay his share twice in three months.' },
            { q: 'Mira was relaxed about changes to the routine.', a: 'f', why: 'She was inflexible; any change was a crisis.' },
            { q: 'Sam is careless.', a: 'f', why: 'He is easy-going *without being careless*.' },
            { q: 'The writer and Sam have been friends since university.', a: 'ng', why: 'The text does not say how they met.' },
          ] },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'omar', items: [
            { a: 'He can be a bit stubborn, but he’s very loyal.' },
            { a: 'It was really thoughtful of you to call.' },
            { a: 'She’s sensible, decisive and well organised.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'We get on, we fell out',
      about: 'Talk about relationships with phrasal verbs, and use them with the right grammar.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'Relationships are full of **phrasal verbs**, and native speakers use them far more than formal synonyms. *We fell out* is much more natural than *We had a disagreement and ended our friendship*.\n\nAt B2 you need to know not only what they mean, but how they behave. Some phrasal verbs take **no object** (*We fell out*). Some take an object **after the particle** and cannot be separated (*I look up to her*, not *I look her up to*). Three-part verbs like **get on with**, **put up with** and **look up to** always keep their parts together, with the object at the end.' },
          { t: 'table', caption: 'Phrasal verbs for relationships', explain: ['head', 'col1'], head: ['Phrasal verb', 'Meaning', 'Example'], rows: [
            ['get on (well) with', 'have a good relationship with', 'I get on well with my in-laws.'],
            ['fall out (with)', 'argue and stop being friends', 'They fell out over money.'],
            ['make up', 'become friends again', 'We argued, but we made up the next day.'],
            ['look up to', 'admire and respect', 'She has always looked up to her aunt.'],
            ['put up with', 'accept something unpleasant', 'I can’t put up with his jokes any more.'],
            ['let down', 'disappoint by not doing what you promised', 'He let me down again.'],
            ['split up', 'end a romantic relationship', 'They split up after ten years.'],
          ] },
        ],
        [
          { t: 'text', md: '**Let down** is a separable verb: the object can go in the middle or at the end. *He let me down* / *He let his team down* / *He let down his team*. But when the object is a **pronoun** (*me, him, them*), it must go in the middle: *He let me down*, never *He let down me*.\n\nPhrasal verbs often have a related **noun**: *a let-down* (a disappointment), *a break-up* (the end of a relationship), *a falling-out* (an argument). These nouns are useful in writing and appear in exam texts.' },
          { t: 'examples', items: [
            { s: 'I’ve **put up with** the noise for months.', n: 'Three-part verb: the object comes at the end.' },
            { s: 'Don’t **let** your friends **down**.', n: 'Separable verb with a noun object.' },
            { s: 'She promised to come, but she **let us down**.', n: 'A pronoun goes in the middle.' },
            { s: 'They had a **falling-out** at the wedding.', n: 'The noun from *fall out*.' },
            { s: 'The film was a real **let-down**.', n: 'The noun from *let down*: a disappointment.' },
          ] },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['He let down me.', 'He let me down.', 'A pronoun goes between the verb and the particle.'],
            ['I look up her.', 'I look up to her.', '*Look up to* needs all three parts.'],
            ['We fell out us.', 'We fell out.', '*Fall out* takes no object.'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'After the argument', lines: [
            { who: 'Emma', s: 'Have you and Joe made up yet?' },
            { who: 'Marcus', s: 'Not really. We fell out over the holiday plans, and he hasn’t called since.' },
            { who: 'Emma', s: 'You two have always got on so well. What happened?' },
            { who: 'Marcus', s: 'He booked the flights without asking me. I felt he’d let me down.' },
            { who: 'Emma', s: 'I understand, but don’t let one argument end a friendship. Call him.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with the right particle.', items: [
            { q: 'I really look up ___ my grandmother.', a: ['to'], why: '*Look up to* someone: admire them.' },
            { q: 'They fell ___ over who should pay the bill.', a: ['out'], why: '*Fall out*: argue and stop being friends.' },
            { q: 'How do you put up ___ such long working hours?', a: ['with'], why: '*Put up with*: accept something unpleasant.' },
            { q: 'He promised to help, but he let me ___ .', a: ['down'], why: '*Let someone down*: disappoint them.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'In the format of the B2 First exam (Reading and Use of English Part 1): choose the word that best fits each gap.', items: [
            { q: 'Most teenagers ___ out with their parents at some point.', o: ['fall', 'drop', 'break'], why: 'The fixed phrasal verb is *fall out*.' },
            { q: 'Good friends are people you can always ___ on.', o: ['count', 'trust', 'believe'], why: '*Count on* someone means rely on them; *trust* and *believe* do not take *on* here.' },
            { q: 'She has a very ___ sense of humour that not everyone understands.', o: ['dry', 'flat', 'thin'], why: 'The collocation is *a dry sense of humour*.' },
            { q: 'It took them weeks to ___ up after the argument.', o: ['make', 'do', 'get'], why: '*Make up*: become friends again.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Part 1 often tests **collocations and phrasal verbs**, not just meaning. Three options may mean almost the same thing, but only one goes with the words around the gap. Read the whole sentence, including the words **after** the gap.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'lena', items: [
            { a: 'We fell out last year, but we’ve made up since.' },
            { a: 'I’ve always looked up to my older sister.' },
            { a: 'I can’t put up with people who are always late.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'Friends for life',
      about: 'Read an article about friendship in adult life, and talk about your own relationships.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'This lesson brings the unit together in a longer text, like the articles in B2 First Reading Part 5. Read it once for the main idea, then a second time for detail. Notice how the writer uses the present perfect simple and continuous, precise personality words and phrasal verbs.' },
          { t: 'reading', title: 'Why adult friendships fade, and how to keep them', md: 'Most of us have had the experience: a friend who was once part of our daily life gradually becomes someone we message on birthdays. Researchers who have been studying friendship for decades say this is not a sign that anyone has done anything wrong. Adult life simply puts pressure on our time.\n\nA well-known study found that it takes around fifty hours together to turn an acquaintance into a casual friend, and more than two hundred to become close friends. When we start full-time work, move cities or have children, those hours disappear. Friendships rarely end with a dramatic falling-out; they fade because nobody makes the effort.\n\nThe good news is that small habits make a big difference. People who have kept their friends for twenty years or more tend to share three things. They are reliable: they turn up when they say they will. They are forgiving: they do not let one disappointment end a relationship. And they are curious: they keep asking questions, even when they think they already know the answers.\n\n“I’ve been friends with the same four women since university,” says Anna, 46. “We’ve lived in different countries, we’ve had our arguments, but we’ve never let more than a month go by without a call. That’s the whole secret.”' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the B2 First exam (Reading and Use of English Part 5): choose the best answer.', items: [
            { q: 'According to researchers, why do many adult friendships fade?', o: ['Because adult life leaves less time for them.', 'Because people often have serious arguments.', 'Because people stop liking each other.'], why: '*Adult life simply puts pressure on our time.*' },
            { q: 'What does the study about hours suggest?', o: ['Close friendships need a lot of time together.', 'Fifty hours are enough for a close friendship.', 'Most friends meet at work.'], why: 'More than two hundred hours are needed to become close friends.' },
            { q: 'Which quality is NOT mentioned as shared by long-term friends?', o: ['Being generous with money.', 'Being reliable.', 'Being curious.'], why: 'The three qualities are reliable, forgiving and curious.' },
            { q: 'What is Anna’s “secret”?', o: ['Never letting too much time pass without contact.', 'Living in the same country.', 'Never arguing.'], why: 'They have never let more than a month go by without a call.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Part 5 the right answer usually says the same as the text **in different words**. Be suspicious of an option that repeats an exact phrase from the text: it is often a trap.' },
        ],
        [
          { t: 'text', md: 'Now use the language of the unit to talk about yourself. In B2 First Speaking Part 1 the examiner asks personal questions. Good answers are two or three sentences long, with a reason or an example, not one word.\n\nCompare: *Have you got many close friends? – Yes.* with *Yes, a few. I’ve known two of them since I was at school, and although we live in different cities now, we’ve been talking almost every week.*' },
          { t: 'ex', kind: 'order', h: 'Put the words in order to make strong exam answers.', items: [
            { a: 'I’ve known my best friend since we were six.', why: 'Present perfect simple with a state verb and *since*.' },
            { a: 'We’ve been planning a trip together for months.', why: 'Present perfect continuous for an activity in progress.' },
            { a: 'I really look up to my older cousin.', why: 'Three-part phrasal verb with the object at the end.' },
          ] },
          { t: 'ex', kind: 'speak', h: 'Say these answers after the tutor.', tutor: 'kofi', items: [
            { a: 'I’ve known my best friend since primary school.' },
            { a: 'We don’t see each other often, but we’ve never lost touch.' },
            { a: 'What I value most in a friend is honesty.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'Choose the best form.', items: [
      { q: 'I ___ four job applications this week.', o: ['’ve sent', '’ve been sending', 'send'], why: 'A number of things finished: the simple form.' },
      { q: 'Why are you so hot? ___ ?', o: ['Have you been running', 'Have you run', 'Did you run'], why: 'A visible result of a recent activity: continuous.' },
      { q: 'We ___ each other for over twenty years.', o: ['’ve known', '’ve been knowing', 'know'], why: '*Know* is a state verb.' },
      { q: 'He ___ late every day this week.', o: ['’s been arriving', '’s arrived', 'arrives'], why: 'A repeated action up to now, often with annoyance: continuous.' },
    ] },
    { t: 'ex', kind: 'wordform', h: 'Use the word in capitals to form a word that fits the gap.', items: [
      { q: 'It was very ___ of him to forget your birthday.', base: 'thought', a: ['thoughtless'], why: 'A negative adjective is needed: *thoughtless*.' },
      { q: 'She is too ___ to wait in a queue.', base: 'patient', a: ['impatient'], why: '*im-* before *p*.' },
      { q: 'Leaving a child alone at home is ___ .', base: 'responsible', a: ['irresponsible'], why: '*ir-* before *r*.' },
      { q: 'I admire her ___ .', base: 'loyal', a: ['loyalty'], why: 'After *her* you need a noun.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete with one word.', items: [
      { q: 'I can’t put up ___ his rudeness any more.', a: ['with'], why: '*Put up with*.' },
      { q: 'They fell ___ and haven’t spoken since.', a: ['out'], why: '*Fall out*.' },
      { q: 'She’s always looked up ___ her father.', a: ['to'], why: '*Look up to*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'He [let down me] again.', a: ['let me down'], why: 'A pronoun goes between the verb and the particle.' },
      { s: 'It was very kind [from] you to help.', a: ['of'], why: 'The pattern is *kind of someone*.' },
      { s: 'I [am working] here since January.', a: ['have been working', '’ve been working', 'have worked'], why: '*Since* needs a perfect form.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Complete the second sentence so that it means the same as the first, using the word given.', items: [
      { q: 'I began working here in 2021.', cue: 'SINCE', a: ['I have been working here since 2021.', 'I’ve been working here since 2021.', 'I have worked here since 2021.', 'I’ve worked here since 2021.'], why: 'A start point becomes *since* with a perfect form.' },
      { q: 'I can no longer tolerate the noise.', cue: 'PUT', a: ['I can no longer put up with the noise.', 'I can’t put up with the noise any more.', 'I can not put up with the noise any more.'], why: '*Tolerate* = *put up with*.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True, false or not given, according to the article in lesson 4.', ng: true, items: [
      { q: 'Most adult friendships end with a big argument.', a: 'f', why: 'They rarely end with a dramatic falling-out.' },
      { q: 'Anna and her friends live in the same city.', a: 'f', why: 'They have lived in different countries.' },
      { q: 'Anna met her friends at university.', a: 't', why: 'Friends with the same four women since university.' },
    ] },
  ],
};
