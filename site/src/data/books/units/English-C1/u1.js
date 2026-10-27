// English C1, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'Identity and perception',
  goal: 'Talk precisely about yourself and how others see you, with the full range of tenses.',
  art: 'cat',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['perfect-aspect', 'continuous-aspect', 'future-perfect-continuous', 'past-perfect-continuous', 'state-verbs', 'personality', 'collocations', 'first-impressions'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'I’ve been thinking',
      about: 'See what the perfect and the continuous each add to a verb, in the past, present and future.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Every English tense is built from two ideas that can be added to a verb. The **perfect** (*have* + past participle) looks back from a point in time: something happened **before** that point and matters **at** it. The **continuous** (*be* + *-ing*) shows an activity **in progress**: unfinished, temporary or repeated.' },
          { t: 'text', md: 'At C1 the question is not only which tense is correct, but what each choice tells the listener. Put both together and you get the perfect continuous: an activity in progress over a period that leads up to a point in time.' },
          { t: 'table', caption: 'The perfect continuous in three times', explain: ['head', 'col0'], head: ['Point of view', 'Form', 'Example'], rows: [
            ['up to now', 'have been + -ing', 'I**’ve been thinking** about what you said.'],
            ['up to a point in the past', 'had been + -ing', 'She **had been working** there for years when they promoted her.'],
            ['up to a point in the future', 'will have been + -ing', 'By June I**’ll have been living** here for a decade.'],
          ] },
        ],
        [
          { t: 'text', md: 'Compare the simple and the continuous forms of the perfect. The simple form presents a **completed** whole or a **result**. The continuous form presents an **activity** that may be unfinished, and often explains a present situation.' },
          { t: 'examples', items: [
            { s: 'Someone**’s been reading** my diary.', n: 'The diary is not where I left it. We see the traces of the activity, not a finished result.' },
            { s: 'Someone**’s read** my diary.', n: 'The reading is complete and the secret is out. The focus is the result.' },
            { s: 'I**’ll have finished** the report by Friday.', n: 'Future perfect simple: the job will be complete before Friday.' },
            { s: 'By Friday I**’ll have been working** on this report for a month.', n: 'Future perfect continuous: the length of the activity up to Friday. It is often said with some frustration.' },
            { s: 'When I met him, he **had been travelling** for six months and looked exhausted.', n: 'The past perfect continuous explains a state in the past: why he looked exhausted.' },
          ] },
        ],
        [
          { t: 'text', md: 'The continuous also makes statements softer and less direct. *I’ve been meaning to call you* and *I’d been meaning to tell you* present an intention that has existed for a while but has not happened yet. It sounds apologetic. *I was wondering if…* and *I’ve been hoping…* work in the same way.' },
          { t: 'examples', items: [
            { s: 'I**’d been meaning to** tell you, but the moment never seemed right.', n: 'An intention that existed before a past moment and was never carried out.' },
            { s: 'We**’ve been wondering** whether you might like to join us.', n: 'A gentle, tentative way of making an invitation.' },
            { s: 'I **was hoping** you could look over my CV.', n: 'The past continuous here is about politeness, not past time.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Count and the continuous rarely mix. If you say how many or how much (*three chapters*, *twenty kilometres*), use the simple form: *I’ve written three chapters*, not *I’ve been writing three chapters*.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the form that fits the meaning best.', items: [
            { q: 'Your shoes are soaking. ___ in the rain?', o: ['Have you been walking', 'Have you walked', 'Did you walk'], why: 'We can see the effect of a recent activity: the present perfect continuous.' },
            { q: 'By the time the ambulance arrived, the man ___ for over an hour.', o: ['had been lying there', 'has been lying there', 'is lying there'], why: 'An activity in progress up to a point in the past: the past perfect continuous.' },
            { q: 'Next September we ___ married for twenty-five years.', o: ['will have been', 'will be', 'have been'], why: '*Be married* is a state, so the future perfect simple: twenty-five years up to a future point.' },
            { q: 'I ___ to ask you: how did the interview go?', o: ['’ve been meaning', '’ve meant', 'mean'], why: '*I’ve been meaning to* presents a long-held intention that has not yet happened.' },
            { q: 'She ___ four novels, and the fifth is out next spring.', o: ['has written', 'has been writing', 'had been writing'], why: 'A number of finished works: the present perfect simple.' },
            { q: 'By the end of this year, Kenji ___ the orchestra for a decade.', o: ['will have been conducting', 'will conduct', 'has been conducting'], why: 'An activity in progress up to a future point: the future perfect continuous.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with the best form of the verb in brackets. Use a perfect or continuous form.', items: [
            { q: 'I could tell from her voice that she ___ (cry).', a: ['had been crying', '’d been crying'], why: 'An activity just before a past moment, with a visible effect: the past perfect continuous.' },
            { q: 'By the time you get this letter, I ___ (leave) the country.', a: ['will have left', '’ll have left'], why: 'A completed action before a future point: the future perfect simple.' },
            { q: 'In March, Owen ___ (teach) at the same school for thirty years.', a: ['will have been teaching', '’ll have been teaching', 'will have taught', '’ll have taught'], why: 'Duration up to a future point. The continuous stresses the activity; the simple is also possible with *teach*.' },
            { q: 'We ___ (not / speak) for months when she suddenly called me.', a: ['hadn’t spoken', 'had not spoken', 'hadn’t been speaking', 'had not been speaking'], why: 'A period up to a past moment. With a negative, the simple form is more usual, but both are possible.' },
            { q: 'Sorry I’m late. ___ (you / wait) long?', a: ['Have you been waiting'], why: 'A question about an activity that has just stopped: the present perfect continuous.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'I [have been knowing] her since we were children.', a: ['have known', '’ve known'], why: '*Know* is a state verb and is not used in the continuous.' },
            { s: 'By 2030, they [will be finishing] the new bridge, so we can drive across it then.', a: ['will have finished', '’ll have finished'], why: 'The bridge will be complete before 2030: the future perfect simple.' },
            { s: 'He was tired because he [has been working] all night.', a: ['had been working', '’d been working'], why: 'The story is in the past, so the activity before it takes the past perfect continuous.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'She’s being difficult',
      about: 'Use state verbs in the continuous to change their meaning or tone.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'State verbs (*be, have, see, think, look, feel, taste, appear*) are usually used in simple forms. But many of them have a second, **dynamic** meaning, an action or a temporary situation, and then the continuous is correct. The change of form signals a change of meaning.' },
          { t: 'table', caption: 'One verb, two meanings', explain: ['head'], head: ['State: simple form', 'Action or temporary: continuous form'], rows: [
            ['I **see** what you mean. (understand)', 'I**’m seeing** a client at three. (meet)'],
            ['I **think** she’s right. (opinion)', 'I**’m thinking** about moving abroad. (consider)'],
            ['He **has** two brothers. (possess)', 'He**’s having** a hard time at work. (experience)'],
            ['This soup **tastes** of garlic. (quality)', 'The chef **is tasting** the sauce. (action)'],
            ['She **appears** calm. (seem)', 'She**’s appearing** in a play this month. (perform)'],
            ['The plan **looks** good. (seem)', 'We**’re looking** at three options. (examine)'],
          ] },
        ],
        [
          { t: 'text', md: '**Be** + adjective describes someone’s character: *He’s selfish.* **Being** + adjective describes how someone is behaving **at the moment**, often unusually: *He’s being selfish* means this behaviour is temporary, or not typical of him. It often carries criticism.' },
          { t: 'examples', items: [
            { s: 'You**’re being** ridiculous. Of course they’ll invite you.', n: 'Your behaviour right now is ridiculous; I am not saying you are a ridiculous person.' },
            { s: 'She**’s being** very quiet tonight. Is something wrong?', n: 'This is not her usual behaviour.' },
            { s: 'I know he**’s being** difficult, but he**’s** under a lot of pressure.', n: 'Temporary behaviour explained by a temporary situation.' },
          ] },
          { t: 'text', md: 'The continuous of *look*, *feel* and *sound* can also show that a situation is **developing**: *Things are looking good for the team this season. I’m feeling much more confident these days.* And *I’m loving it* or *I’m liking the new design* are informal and enthusiastic; avoid them in formal writing.' },
        ],
        [
          { t: 'tip', art: 'owl', md: 'Some verbs almost never take the continuous, even in informal English: *know, believe, belong, consist, contain, own, mean* (when it means signify) and *seem*. Say *This box contains old letters*, not *is containing*.' },
          { t: 'ex', kind: 'choice', h: 'Choose the correct form.', items: [
            { q: 'I ___ your point, but I still disagree.', o: ['see', '’m seeing', '’ve been seeing'], why: '*See* meaning understand is a state: the simple form.' },
            { q: 'We ___ of selling the house and moving to the coast.', o: ['’re thinking', 'think', 'thought of'], why: '*Think of* or *about* meaning consider is dynamic: the continuous.' },
            { q: 'Why ___ so unfriendly to your cousin? It’s not like you.', o: ['are you being', 'are you', 'have you'], why: '*It’s not like you* shows the behaviour is unusual: *being* + adjective.' },
            { q: 'This old house ___ to my grandparents.', o: ['belongs', 'is belonging', 'has been belonging'], why: '*Belong* is a state verb and is never continuous.' },
            { q: 'The doctor ___ a patient at the moment; can you wait?', o: ['is seeing', 'sees', 'has seen'], why: '*See* meaning meet or examine is dynamic.' },
            { q: 'These days the economy ___ a little stronger.', o: ['is looking', 'is looked', 'has looking'], why: '*Look* in the continuous can show a developing situation. *Looks* would also be possible, but the other options are wrong.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with the simple or continuous form of the verb in brackets.', items: [
            { q: 'Shh. I ___ (taste) the soup to see if it needs salt.', a: ['am tasting', '’m tasting'], why: 'An action happening now: the continuous.' },
            { q: 'Lina ___ (have) a party on Saturday. Are you coming?', a: ['is having', '’s having'], why: '*Have a party* is an action, and the continuous is used for a future arrangement.' },
            { q: 'I ___ (not / think) that’s a very good idea.', a: ['don’t think', 'do not think'], why: '*Think* meaning have an opinion is a state: the simple form.' },
            { q: 'He ___ (be) unusually generous today. I wonder what he wants.', a: ['is being', '’s being'], why: 'Temporary, unusual behaviour: *being* + adjective.' },
            { q: 'What ___ (this word / mean)?', a: ['does this word mean'], why: '*Mean* (signify) is a state verb: the simple form.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Sort the sentences: state meaning or dynamic meaning?', groups: ['state', 'dynamic'], explain: ['groups'], items: [
            { s: 'The flat has two balconies.', g: 0, why: '*Have* meaning possess: a state.' },
            { s: 'We’re having dinner with Sara.', g: 1, why: '*Have dinner*: an action.' },
            { s: 'She appears to be lost.', g: 0, why: '*Appear* meaning seem: a state.' },
            { s: 'He’s appearing at the festival.', g: 1, why: '*Appear* meaning perform: an action.' },
            { s: 'I feel that we should wait.', g: 0, why: '*Feel* meaning think: a state.' },
            { s: 'I’m feeling a lot better.', g: 1, why: '*Feel* about a developing physical condition: dynamic.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Fiercely independent',
      about: 'Describe personality with precise adjectives and the adverbs that naturally go with them.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'At C1 you go beyond *kind* and *shy*. Choose adjectives that say exactly what you mean, and know whether they sound positive, neutral or negative. *Frugal* and *stingy* both describe someone who spends little money, but only *stingy* is a criticism.' },
          { t: 'table', caption: 'Precise personality adjectives', explain: ['head', 'col1'], quiz: true, head: ['Adjective', 'Meaning'], rows: [
            ['assertive', 'confident to say what you want or think, without being rude'],
            ['self-effacing', 'modest; not wanting to attract attention to yourself'],
            ['abrasive', 'rude and unkind in the way you speak to people'],
            ['conscientious', 'careful to do your work well and thoroughly'],
            ['aloof', 'unfriendly and distant, not interested in others'],
            ['gregarious', 'enjoying the company of other people'],
            ['headstrong', 'determined to do things your way, without listening to advice'],
            ['perceptive', 'quick to notice and understand things that others miss'],
          ] },
        ],
        [
          { t: 'text', md: 'Certain adverbs and adjectives go together naturally. These **collocations** make your English sound precise and native-like. Many of them intensify: *fiercely* adds strength and pride, *painfully* adds discomfort, *refreshingly* adds a positive surprise.' },
          { t: 'examples', items: [
            { s: 'My grandmother is **fiercely independent** and refuses any help.', n: '*Fiercely* collocates with *independent, loyal, competitive, proud*.' },
            { s: 'As a teenager I was **painfully shy**.', n: '*Painfully* collocates with *shy, slow, obvious, aware*: so much that it hurts or is uncomfortable.' },
            { s: 'She’s **refreshingly honest** about her mistakes.', n: '*Refreshingly* shows a pleasant surprise: *refreshingly direct, modest, different*.' },
            { s: 'He’s **notoriously unreliable**, so have a plan B.', n: '*Notoriously*: well known for something bad.' },
            { s: 'They’re **deeply religious** but **highly tolerant** of other views.', n: '*Deeply* goes with feelings and beliefs; *highly* with qualities like *intelligent, motivated, critical*.' },
          ] },
        ],
        [
          { t: 'tip', art: 'owl', md: 'Compound adjectives describe character economically: *open-minded, level-headed, quick-tempered, thick-skinned* (not easily hurt), *self-centred, easy-going*. They are written with a hyphen before a noun and usually after a verb too.' },
          { t: 'ex', kind: 'colloc', h: 'Which adverbs collocate naturally with the adjective?', items: [
            { key: 'independent', o: ['fiercely', 'fully', 'totally', 'painfully'], a: [0, 1, 2], why: '*Fiercely independent*, *fully independent* and *totally independent* are all natural. *Painfully independent* is not.' },
            { key: 'shy', o: ['painfully', 'extremely', 'deeply', 'highly'], a: [0, 1], why: 'We say *painfully shy* and *extremely shy*, but not *deeply shy* or *highly shy*.' },
            { key: 'intelligent', o: ['highly', 'exceptionally', 'deeply', 'fiercely'], a: [0, 1], why: '*Highly intelligent* and *exceptionally intelligent* are common. *Deeply* goes with feelings and beliefs.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each description with an adjective.', pairs: [
            ['never wants to be the centre of attention', 'self-effacing'],
            ['always does a careful, thorough job', 'conscientious'],
            ['ignores everyone’s advice and does it anyway', 'headstrong'],
            ['notices what people are really feeling', 'perceptive'],
            ['seems cold and keeps away from others', 'aloof'],
            ['states their needs clearly but politely', 'assertive'],
          ] },
          { t: 'ex', kind: 'odd', h: 'Which word is the odd one out?', items: [
            { o: ['gregarious', 'aloof', 'withdrawn', 'reserved'], why: '*Gregarious* people love company; the other three keep a distance from others.' },
            { o: ['frugal', 'stingy', 'mean', 'tight-fisted'], why: '*Frugal* is neutral or positive; the other three are criticisms of someone who will not spend money.' },
            { o: ['level-headed', 'quick-tempered', 'irritable', 'short-tempered'], why: '*Level-headed* means calm and sensible; the others describe people who get angry easily.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'wordform', h: 'Complete with the correct form of the word in capitals.', items: [
            { q: 'He’s highly ___ and never misses a deadline.', base: 'conscience', a: ['conscientious'], why: 'The adjective from *conscience* is *conscientious*.' },
            { q: 'Her ___ in negotiations has won her a lot of respect.', base: 'assert', a: ['assertiveness'], why: 'Noun from *assertive*: *assertiveness*.' },
            { q: 'I admire his ___; he always speaks about his success as luck.', base: 'modest', a: ['modesty'], why: 'Noun from *modest*: *modesty*.' },
            { q: 'She’s remarkably ___ and always knows when something is wrong.', base: 'perceive', a: ['perceptive'], why: 'The adjective from *perceive* is *perceptive*: quick to notice and understand.' },
          ] },
          { t: 'ex', kind: 'memory', h: 'Find the pairs: adverb and the adjective it often goes with.', pairs: [
            ['fiercely', 'loyal'],
            ['painfully', 'slow'],
            ['refreshingly', 'direct'],
            ['notoriously', 'difficult'],
            ['deeply', 'committed'],
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'The first seven seconds',
      about: 'Read an essay on first impressions and how far we should trust them.',
      art: 'mug',
      spreads: [
        [
          { t: 'reading', title: 'The first seven seconds', md: 'We are told, endlessly, that we have only a few seconds to make a first impression. The number changes with the source, seven seconds here, a tenth of a second there, but the message is always the same: the moment you walk into a room, you are being judged, and the verdict is almost impossible to appeal. It is a frightening idea, and like many frightening ideas, it is only partly true.\n\nIt is certainly the case that we form impressions quickly. Within moments of meeting a stranger, most of us have decided whether they seem warm or cold, competent or careless, trustworthy or not. We do this on remarkably little evidence: a handshake, a tone of voice, the way someone holds a cup. Evolution, so the argument goes, has made us efficient rather than fair. For our ancestors, deciding quickly whether a stranger was a friend or a threat mattered more than deciding correctly.\n\nWhat is less often said is how frequently those impressions turn out to be wrong. I had been working with a colleague for almost a year before I realised that the woman I had privately labelled aloof was, in fact, painfully shy. Her apparent coldness was not indifference but nerves. Had I trusted my first reading, I would have missed one of the most perceptive and fiercely loyal people I have ever known.\n\nPart of the problem is that we mistake a state for a trait. When someone is being short with us, we conclude that they are a short-tempered person, when they may simply be having a dreadful week. Psychologists have a name for this habit of explaining other people’s behaviour by their character while explaining our own by our circumstances. When I snap at a waiter, it is because I am exhausted; when a stranger does it, it is because he is rude.\n\nNone of this means that first impressions are worthless. They are a starting point, a rough sketch to be corrected. The danger lies in treating the sketch as a finished portrait, and then, without noticing, looking only for details that confirm it. A manager who has decided in the first interview that a new employee is unreliable will tend to notice every late email and forget every early one.\n\nSo perhaps the more useful question is not how to make a good first impression, but how to hold our own impressions more lightly. By the time we have known someone for a few months, we will have seen them tired, angry, generous and wrong. Only then do we have something worth calling an opinion. Until that point, the most honest thing we can say about a stranger is the thing we least like admitting: we do not yet know who they are.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'The writer believes the idea of instant judgement is completely false.', a: 'f', why: 'The writer says it is “only partly true”: we do form impressions quickly.' },
            { q: 'According to the essay, quick judgements helped our ancestors survive.', a: 't', why: 'Deciding quickly whether a stranger was a friend or a threat “mattered more than deciding correctly”.' },
            { q: 'The writer’s colleague later became the writer’s manager.', a: 'ng', why: 'The essay describes the colleague as loyal and perceptive, but says nothing about a promotion.' },
            { q: 'The writer thinks first impressions have no value at all.', a: 'f', why: '“None of this means that first impressions are worthless. They are a starting point.”' },
            { q: 'The writer suggests we need months of experience before forming a real opinion.', a: 't', why: '“By the time we have known someone for a few months… Only then do we have something worth calling an opinion.”' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Answer the questions about the essay.', items: [
            { q: 'What does the writer mean by “we mistake a state for a trait”?', o: ['We think temporary behaviour shows someone’s permanent character.', 'We forget how people behaved in the past.', 'We judge people by where they come from.'], why: 'A state is temporary (*being short*); a trait is permanent (*a short-tempered person*).' },
            { q: 'Why does the writer mention the manager and the new employee?', o: ['To show how a first impression can make us notice only what confirms it.', 'To show that managers are usually good judges of character.', 'To give advice about job interviews.'], why: 'The manager “will tend to notice every late email and forget every early one”.' },
            { q: 'What is the main purpose of the essay?', o: ['To encourage readers to treat their first impressions with caution.', 'To teach readers how to make a good first impression.', 'To explain the science of the brain.'], why: 'The writer’s conclusion: “how to hold our own impressions more lightly”.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language in the essay.', items: [
            { q: '“I had been working with a colleague for almost a year before I realised…” Why the past perfect continuous?', o: ['It shows a long activity up to a moment in the past.', 'It shows the work finished a year ago.', 'It makes the sentence more polite.'], why: 'The working continued over a period leading up to the moment of realising.' },
            { q: '“When someone is being short with us…” What does *being short* suggest?', o: ['Their impatient behaviour is temporary.', 'They are a small person.', 'They have always been impatient.'], why: '*Being* + adjective: behaviour at a particular moment, not a permanent quality.' },
            { q: '“By the time we have known someone for a few months, we will have seen them tired, angry…” What does *will have seen* express?', o: ['Experiences that will be complete before a point in the future.', 'Something we see regularly now.', 'A prediction that may not come true.'], why: 'The future perfect: actions completed before a future point.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the adverb + adjective collocations.', items: [
            { s: 'The woman I had labelled aloof was, in fact, [painfully shy].', why: '*Painfully shy*: so shy that it is uncomfortable.' },
            { s: 'One of the most perceptive and [fiercely loyal] people I have ever known.', why: '*Fiercely loyal*: loyal with great strength and conviction.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'By the time she retires, she ___ at the hospital for forty years.', o: ['will have been working', 'will work', 'has been working'], why: 'An activity in progress up to a future point: the future perfect continuous.' },
      { q: 'He looked pale because he ___ all night.', o: ['had been studying', 'has been studying', 'studies'], why: 'An activity before a past moment that explains a past state: the past perfect continuous.' },
      { q: 'I ___ to phone you for weeks. I’m so sorry.', o: ['’ve been meaning', '’ve meant', '’m meaning'], why: '*I’ve been meaning to*: a long-held intention that has not yet happened.' },
      { q: 'You ___ very stubborn about this. Just listen for a minute.', o: ['’re being', 'are', '’ve been being'], why: 'Temporary behaviour that the speaker criticises: *being* + adjective.' },
      { q: 'This drawer ___ all the documents you need.', o: ['contains', 'is containing', 'has been containing'], why: '*Contain* is a state verb and is not used in the continuous.' },
      { q: 'As a child he was ___ shy and hardly spoke at school.', o: ['painfully', 'highly', 'fiercely'], why: '*Painfully shy* is the natural collocation.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete with the correct form of the verb in brackets.', items: [
      { q: 'I ___ (think) of changing jobs. What do you think?', a: ['am thinking', '’m thinking', 'have been thinking', '’ve been thinking'], why: '*Think of* meaning consider is dynamic, so a continuous form.' },
      { q: 'By next week, we ___ (finish) all the exams.', a: ['will have finished', '’ll have finished'], why: 'Complete before a future point: the future perfect simple.' },
      { q: 'This coffee ___ (taste) burnt. Can I have another one?', a: ['tastes'], why: '*Taste* describing a quality is a state: the simple form.' },
      { q: 'She has always been fiercely ___ (independence).', a: ['independent'], why: 'An adverb is followed by an adjective: *independent*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the adjectives with their meanings.', pairs: [
      ['gregarious', 'loves being with other people'],
      ['headstrong', 'refuses to listen to advice'],
      ['conscientious', 'works carefully and thoroughly'],
      ['abrasive', 'rude and harsh with people'],
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'I [am knowing] exactly what you mean.', a: ['know'], why: '*Know* is a state verb: no continuous.' },
      { s: 'She [has been writing] three emails this morning.', a: ['has written', '’s written'], why: 'With a number of finished things, use the present perfect simple.' },
    ] },
  ],
};
