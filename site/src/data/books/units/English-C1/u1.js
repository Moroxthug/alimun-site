// English C1, unit 1, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Identity and perception: what the perfect and the continuous each add, state verbs used dynamically, precise
// adverb and adjective collocations for personality, and an essay on first impressions. Exam: C1 Advanced.
export const UNIT = {
  id: 'u1',
  title: 'Identity and perception',
  goal: 'Choose the perfect and the continuous for what they add, use state verbs in the continuous to shift meaning and tone, describe character with precise collocations, and follow a demanding essay on how we judge people.',
  art: 'owl',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'speaking'], topics: ['aspect', 'perfect', 'continuous', 'state-verbs', 'personality', 'collocations', 'first-impressions'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'I’d been meaning to call',
      about: 'See what the perfect and the continuous each add to a verb, in the past, the present and the future, and combine them with control.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'At B2 you learned the tenses one by one. At C1 it helps to see that English builds them from two separate ideas, called **aspects**, which you can add to any time: past, present or future.\n\nThe **perfect** (*have* + past participle) looks **back** from a point in time. It connects an earlier event to that point: *I **have finished*** (looking back from now), *I **had finished*** (looking back from a moment in the past), *I **will have finished*** (looking back from a moment in the future).\n\nThe **continuous** (*be* + *-ing*) puts you **inside** an action. It shows the action as in progress, temporary, unfinished or repeated, and it often adds a feeling: interest, irritation, tentativeness. *I **was reading*** says nothing about whether I finished the book.' },
          { t: 'table', caption: 'What each aspect adds', explain: ['head', 'col0', 'col1'], head: ['Aspect', 'What it adds', 'Example'], rows: [
            ['Simple', 'The action as a complete fact, a whole', 'She wrote three novels.'],
            ['Perfect', 'A link back from a later point; the result counts', 'She has written three novels.'],
            ['Continuous', 'The action in progress, temporary or incomplete', 'She was writing her third novel.'],
            ['Perfect continuous', 'An activity filling the time up to a point; its effects', 'She had been writing for years before anyone noticed.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Think of the simple as a **photograph of the whole event**, the continuous as a **frame from a film** and the perfect as a **look over your shoulder**.' },
        ],
        [
          { t: 'text', md: 'The difference between the perfect simple and the perfect continuous is often a difference of **focus**. The simple focuses on the **result** or the **quantity** achieved; the continuous focuses on the **activity** and its duration, and it can suggest the activity is **not yet complete**.\n\n*I’ve read your report.* (finished: I can discuss it)\n*I’ve been reading your report.* (I’ve spent time on it; I may not have finished)\n\nThe **future perfect** looks back from a future deadline: *By the time you land, I’ll have left the office.* The **future perfect continuous** measures an activity up to that deadline: *In June I’ll have been working here for ten years.*\n\nA very useful C1 pattern is ***have been meaning to*** and ***had been meaning to***: an intention that has lasted for some time and has **not been carried out**. It sounds apologetic and natural: *I’ve been meaning to ring you for weeks.*' },
          { t: 'examples', items: [
            { s: 'I’ve **been thinking** about what you said.', n: 'An ongoing process of thought, not a finished conclusion. It sounds open and tentative.' },
            { s: 'I’ve **thought** about it, and the answer is no.', n: 'The thinking is complete: here is the result.' },
            { s: 'By Friday we’ll **have interviewed** every candidate.', n: 'Future perfect: a task complete before a future deadline.' },
            { s: 'Next month he’ll **have been living** abroad for half his life.', n: 'Future perfect continuous: duration measured up to a future point.' },
            { s: 'I’d **been meaning to** tell you, but the moment never came.', n: 'An intention that lasted and was never acted on.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I’ve been writing four emails this morning.', 'I’ve written four emails this morning.', 'A number of finished things: the result, so the simple.'],
            ['I’ve been knowing her since school.', 'I’ve known her since school.', '*Know* describes a state, not an activity.'],
            ['When I arrived, they left already.', 'When I arrived, they had already left.', 'The leaving came first: the past perfect looks back from *arrived*.'],
            ['By 2030 I will finish my doctorate.', 'By 2030 I will have finished my doctorate.', '*By* + future point needs the future perfect.'],
          ] },
          { t: 'dialogue', title: 'Catching up', lines: [
            { who: 'Helen', s: 'Owen! I’ve been meaning to get in touch since your birthday. I’m so sorry.' },
            { who: 'Owen', s: 'Don’t be. I’d been planning to write to you too, and look how that went.' },
            { who: 'Helen', s: 'So what have you been doing? You look as if you’ve been sleeping properly at last.' },
            { who: 'Owen', s: 'I have. I’ve handed in the thesis. By the end of the summer I’ll have been working on it for four years.' },
            { who: 'Helen', s: 'And by the end of the summer you’ll have forgotten every word of it.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the form that says what the speaker means.', items: [
            { q: 'You look exhausted. ___ all night?', o: ['Have you been revising', 'Have you revised', 'Did you revise'], why: 'A visible effect of an activity that has just been going on: the perfect continuous.' },
            { q: 'I ___ three chapters, so I can tell you how it starts.', o: ['’ve read', '’ve been reading', '’m reading'], why: 'A quantity achieved: the perfect simple.' },
            { q: 'When the police arrived, the thieves ___ the building for an hour.', o: ['had been searching', 'searched', 'have been searching'], why: 'An activity lasting up to a past point: the past perfect continuous.' },
            { q: 'Don’t phone at nine; we ___ dinner by then.', o: ['won’t have finished', 'won’t finish', 'aren’t finishing'], why: '*By then* looks back from a future point: the future perfect.' },
            { q: 'In May, she ___ the charity for twenty years.', o: ['will have been running', 'will run', 'is running'], why: 'Duration measured up to a future point: the future perfect continuous.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first. Use between three and six words, including the word given, and do not change the word given.', items: [
            { q: 'I intended to reply to your letter weeks ago, but I still haven’t.', cue: 'meaning', gap: 'I ___ to your letter for weeks.', a: ['have been meaning to reply', '’ve been meaning to reply'], why: 'An intention lasting up to now: *have been meaning to* + infinitive.' },
            { q: 'The last time I saw Clara was at her wedding.', cue: 'seen', gap: 'I ___ her wedding.', a: ['have not seen Clara since', 'haven’t seen Clara since', 'have not seen her since', 'haven’t seen her since'], why: '*The last time… was* becomes the present perfect negative + *since*.' },
            { q: 'Ben started teaching here in 2010; in 2030 it will be twenty years.', cue: 'have', gap: 'By 2030, Ben ___ here for twenty years.', a: ['will have been teaching', '’ll have been teaching'], why: 'Duration up to a future point: the future perfect continuous.' },
            { q: 'The train left before we got to the station.', cue: 'already', gap: 'By the time we got to the station, the train ___.', a: ['had already left', 'had already gone', 'had already departed'], why: 'Looking back from a past point: the past perfect, with *already* after *had*.' },
            { q: 'It’s the first time she has ever given a speech in public.', cue: 'never', gap: 'She ___ a speech in public before.', a: ['has never given', '’s never given', 'has never made', '’s never made'], why: '*It’s the first time* = *has never… before*.' },
            { q: 'Her eyes were red because she had spent the afternoon in tears.', cue: 'been', gap: 'Her eyes were red because she ___ all afternoon.', a: ['had been crying', '’d been crying', 'had been weeping'], why: 'An earlier activity explains a past result: *had been crying*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 4** you write **three to six words**, including the key word, which you must not change. Contractions count as two words: *haven’t* = *have not*. Each answer is worth **two marks**, one for each half of the change, so a partly right answer still earns a mark. Count your words before you move on.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor. Notice how the continuous softens what you say.', tutor: 'lena', items: [
            { a: 'I’ve been meaning to call you for ages.' },
            { a: 'I’ve been thinking about what you said yesterday.' },
            { a: 'By June I’ll have been living here for ten years.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'She’s being difficult',
      about: 'Use state verbs in the continuous to change their meaning or to make what you say temporary, tentative or lively.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'At B2 you learned that **state verbs** (*know, believe, own, seem, love*) are not normally used in the continuous, because a state is not an activity: it has no stages. At C1 you need the other half of the rule: many of these verbs **can** take the continuous, and when they do, either their **meaning changes** or their **tone** does.\n\nThe meaning changes when the verb has two senses, one a state and one an action. *I **think** she’s right* is an opinion (a state). *I’**m thinking** about moving* is a mental process (an activity). *We **have** a flat* is possession; *We’**re having** lunch* is an activity.\n\nThe continuous also turns a permanent quality into a **temporary behaviour**. *He **is** rude* describes his character. *He’**s being** rude* describes how he is acting **right now**, possibly out of character. This is why *She’s being difficult* is a complaint about today, not a judgement of who she is.' },
          { t: 'table', caption: 'One verb, two meanings', explain: ['head', 'col1', 'col3'], head: ['Verb', 'State', 'Example', 'Activity', 'Example'], rows: [
            ['see', 'perceive; understand', 'I see what you mean.', 'meet, date; visit', 'She’s seeing a specialist.'],
            ['think', 'have an opinion', 'I think it’s too late.', 'consider', 'I’m thinking of resigning.'],
            ['have', 'possess', 'They have two cars.', 'experience, eat, take part', 'We’re having a great time.'],
            ['look', 'seem', 'You look tired.', 'direct your eyes; search', 'I’m looking for my keys.'],
            ['be', 'a permanent quality', 'He is generous.', 'behaviour at the moment', 'He’s being generous tonight.'],
          ] },
        ],
        [
          { t: 'text', md: 'Even when the meaning stays the same, the continuous can change the **tone**. Three uses are typical of fluent speakers.\n\nFor **politeness and tentativeness**: *I **was wondering** if you could help.* *We’**re hoping** to finish by Friday.* The continuous makes a request or a hope sound less direct, as if it were still being formed.\n\nFor **change in progress**: *I’**m understanding** the system better every day.* *You’**re resembling** your father more and more.* The state is developing, so it behaves like an activity.\n\nFor **lively, informal emphasis**: *I’**m loving** this weather.* *It’**s looking** good for the team.* *How **are** you **liking** the new job?* Fine in a chat; keep them out of an essay.' },
          { t: 'examples', items: [
            { s: 'You’**re being** very quiet tonight. Is something wrong?', n: 'Temporary behaviour, unusual for the person.' },
            { s: 'I’**m seeing** the dentist on Thursday.', n: '*See* = have an appointment with.' },
            { s: 'I **was wondering** whether you’d be free for a call.', n: 'The past continuous softens a request.' },
            { s: 'The soup **tastes** of garlic. / The chef **is tasting** the soup.', n: 'A quality versus a deliberate action.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I’m not believing what he says.', 'I don’t believe what he says.', '*Believe* = hold an opinion, a state.'],
            ['He’s being tall for his age.', 'He’s tall for his age.', 'Height is not behaviour; *being* only works with qualities a person can show or choose.'],
            ['This bag is belonging to me.', 'This bag belongs to me.', '*Belong* has no activity meaning.'],
            ['I think to move to Lisbon.', 'I’m thinking of moving to Lisbon.', 'Considering a plan: *be thinking of / about* + *-ing*.'],
          ] },
          { t: 'dialogue', title: 'In the meeting room', lines: [
            { who: 'Priya', s: 'I was wondering if you’d had a chance to look at the figures.' },
            { who: 'Daniel', s: 'I’m looking at them now. They’re not looking too good, are they?' },
            { who: 'Priya', s: 'No. And Mark is being very difficult about the budget.' },
            { who: 'Daniel', s: 'He isn’t a difficult person. I think he’s just having a bad week.' },
            { who: 'Priya', s: 'Maybe. I’m seeing him tomorrow, so I’ll find out.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Is the verb used for a state or for an activity?', groups: ['State', 'Activity'], explain: ['groups'], items: [
            { s: 'I see your point.', g: 0, why: '*See* = understand.' },
            { s: 'She’s seeing someone new.', g: 1, why: '*See* = date.' },
            { s: 'The parcel weighs two kilos.', g: 0, why: 'A property of the parcel.' },
            { s: 'They’re having an argument.', g: 1, why: '*Have* = take part in.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'I [am not understanding] why he left.', a: ['don’t understand', 'do not understand'], why: 'Understanding a reason is a state: the simple.' },
            { s: 'You [are] so unreasonable today. That isn’t like you.', a: ['are being', '’re being'], why: 'Behaviour today, out of character: *are being*.' },
            { s: 'I [think] about changing careers, but I haven’t decided.', a: ['am thinking', '’m thinking', 'have been thinking', '’ve been thinking'], why: 'Considering, a process: the continuous.' },
            { s: 'This house [is belonging] to my aunt.', a: ['belongs'], why: '*Belong* has only a state meaning.' },
          ] },
        ],
        [
          { t: 'text', md: 'In the format of the C1 Advanced exam (**Speaking Part 1**), the examiner asks each candidate a few questions about themselves: where they live, what they do, their plans, their likes. It lasts about two minutes. A strong answer is short but **developed**: answer, then add a reason, a detail or a contrast. Aspects and dynamic state verbs help you talk precisely about **now** and **lately**.\n\n*What are you enjoying about your studies at the moment?* *Well, I’ve been doing a lot of fieldwork recently, and I’m really enjoying being out of the library. I’d been thinking of changing course last year, so it’s been a relief.*' },
          { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Speaking Part 1): the examiner asks you a question. Choose the answer that would score best.', items: [
            { q: '“What have you been doing in your free time lately?”', o: ['I’ve been getting into climbing, actually. A friend took me in the spring and I’ve been going twice a week since then.', 'Climbing.', 'In my free time I am doing climbing because climbing is my hobby.'], why: 'A direct answer, then a detail and a time frame, with natural aspects.' },
            { q: '“Is there anything you’re hoping to change in your life in the next few years?”', o: ['I’m hoping to move somewhere quieter. I’ve been living in the city centre for years and I’m beginning to find the noise wearing.', 'Yes, many things.', 'I hope I will change my city. The city is noisy. I don’t like noise.'], why: 'A clear answer with a reason, using *hoping* and the perfect continuous for duration.' },
            { q: '“How do your friends see you?”', o: ['They’d probably say I’m fairly laid-back, though I can be fiercely competitive when I’m playing sport.', 'Friendly.', 'My friends see me with their eyes every day.'], why: 'An answer with a contrast and a precise collocation.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Speaking Part 1**, do not prepare long speeches: the examiner wants natural, spontaneous answers. Aim for two or three sentences. If you need a moment, use a phrase like *That’s an interesting question* or *I’ve never really thought about that, but…*' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these answers after the tutor.', tutor: 'kofi', items: [
            { a: 'I was wondering if you could help me with something.' },
            { a: 'He isn’t usually rude; he’s just being difficult today.' },
            { a: 'I’ve been thinking of changing jobs for a while now.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'Fiercely independent',
      about: 'Describe personality precisely with adverb and adjective collocations, words with the right connotation and compound adjectives.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'At B2, describing someone often stops at *very kind* or *really shy*. At C1, English speakers reach for an **adverb that collocates** with the adjective: a fixed partnership that sounds natural and adds a precise shade of meaning. *Painfully shy* is not just *very shy*: it suggests the shyness hurts the person, and perhaps the people watching.\n\nThese pairs are not logical, so you learn them as units. You can be **fiercely** independent or loyal, but not *fiercely shy*. You can be **refreshingly** honest, but **brutally** honest is harsher. The adverb often carries the speaker’s **attitude**: *refreshingly* approves, *notoriously* warns, *blissfully* gently mocks.' },
          { t: 'table', caption: 'Adverb and adjective collocations for character', explain: ['head', 'col2'], head: ['Adverb', 'Typical adjectives', 'What it adds'], rows: [
            ['fiercely', 'independent, loyal, competitive, protective', 'strength and determination; approving'],
            ['painfully', 'shy, slow, aware, honest', 'the quality causes discomfort'],
            ['refreshingly', 'honest, direct, modest, down-to-earth', 'pleasantly unlike most people'],
            ['notoriously', 'unreliable, difficult, late, stubborn', 'well known for something bad'],
            ['blissfully', 'unaware, ignorant, happy', 'happily not knowing; a little ironic'],
            ['quietly', 'confident, determined, ambitious', 'strength without show'],
          ] },
        ],
        [
          { t: 'text', md: 'Precision also means choosing the word with the right **connotation**. Many qualities have a positive word and a negative one for almost the same behaviour. If you call a friend *frank*, you admire their honesty; if you call them *blunt*, you are hinting that they hurt people. Your choice tells the listener what **you** think.\n\nC1 descriptions also use **compound adjectives**, often with a body part or a participle: *level-headed* (calm and sensible), *thick-skinned* (not easily hurt by criticism), *quick-witted* (fast and clever in reply), *self-effacing* (modest, keeps out of the spotlight), *highly strung* (nervous and easily upset), *easy-going*, *strong-willed*, *open-minded*.' },
          { t: 'table', caption: 'Positive and negative words for similar behaviour', explain: ['head'], head: ['Approving', 'Disapproving'], rows: [
            ['frank, direct', 'blunt, tactless'],
            ['determined, resolute', 'stubborn, obstinate'],
            ['assertive', 'pushy, aggressive'],
            ['self-assured', 'arrogant, conceited'],
            ['careful with money, thrifty', 'mean, tight-fisted'],
            ['inquisitive, curious', 'nosy'],
            ['ambitious', 'ruthless'],
          ] },
          { t: 'examples', items: [
            { s: 'My grandmother was **fiercely independent** and refused any help until she was ninety.', n: 'Strong, determined, and admired.' },
            { s: 'As a teenager he was **painfully shy**; he couldn’t order in a café.', n: 'The shyness caused real difficulty.' },
            { s: 'She’s **refreshingly down-to-earth** for someone so famous.', n: 'Pleasantly unlike what you would expect.' },
            { s: 'You need to be fairly **thick-skinned** to work in politics.', n: 'A compound adjective: not hurt by criticism.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['She is strongly independent.', 'She is fiercely independent.', 'The fixed partner of *independent* is *fiercely*.'],
            ['My boss is very nosy about new ideas.', 'My boss is very curious about new ideas.', '*Nosy* is negative: too interested in other people’s private lives.'],
            ['She is a level-head person.', 'She is a level-headed person.', 'The compound uses the *-ed* form.'],
            ['He’s sensible, he cries at films.', 'He’s sensitive; he cries at films.', '*Sensible* = practical; *sensitive* = easily moved.'],
          ] },
          { t: 'dialogue', title: 'Describing a new colleague', lines: [
            { who: 'Grace', s: 'So what’s the new director like? Everyone says she’s terrifying.' },
            { who: 'Tomasz', s: 'Not at all. She’s refreshingly direct, which some people mistake for blunt.' },
            { who: 'Grace', s: 'And the old one was notoriously indecisive, so that will make a change.' },
            { who: 'Tomasz', s: 'Exactly. She’s quietly ambitious too. I wouldn’t be surprised if she ran the company in five years.' },
            { who: 'Grace', s: 'As long as she isn’t ruthless about it.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'colloc', h: 'Which adjectives go naturally with the adverb?', items: [
            { key: 'fiercely', o: ['independent', 'loyal', 'shy', 'competitive', 'unaware'], a: [0, 1, 3], why: '*Fiercely* adds strength: independent, loyal, competitive.' },
            { key: 'painfully', o: ['shy', 'aware', 'slow', 'generous', 'ambitious'], a: [0, 1, 2], why: '*Painfully* suggests discomfort.' },
            { key: 'blissfully', o: ['unaware', 'ignorant', 'happy', 'stubborn', 'reliable'], a: [0, 1, 2], why: '*Blissfully* goes with happy, untroubled states.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 1): read the text about a portrait painter and choose the word that best fits each gap.', items: [
            { q: 'Those who knew Ilse Marr describe her as ___ private: she gave almost no interviews.', o: ['intensely', 'heavily', 'strongly', 'highly'], why: '*Intensely private* is the fixed collocation.' },
            { q: 'She was also ___ protective of her sitters, never revealing who they were.', o: ['fiercely', 'wildly', 'sharply', 'firmly'], why: '*Fiercely protective* collocates.' },
            { q: 'Critics, however, found her ___ honest portraits hard to accept.', o: ['brutally', 'violently', 'cruelly', 'roughly'], why: '*Brutally honest*: honesty that may hurt.' },
            { q: 'Her sitters were rarely flattered; wrinkles and scars were ___ recorded.', o: ['faithfully', 'loyally', 'trustingly', 'devotedly'], why: 'You record something *faithfully*: accurately.' },
            { q: 'Her own self-portraits show a woman ___ aware of her age.', o: ['acutely', 'severely', 'deeply', 'bitterly'], why: '*Acutely aware* = very conscious of.' },
            { q: 'Yet friends say she was ___ modest about her success.', o: ['disarmingly', 'alarmingly', 'harmlessly', 'arrestingly'], why: '*Disarmingly modest*: so modest it wins people over.' },
            { q: 'She was, as one put it, ‘thick-___ about criticism and thin-skinned about injustice.’', o: ['skinned', 'headed', 'minded', 'hearted'], why: 'The contrast with *thin-skinned* needs *thick-skinned*.' },
            { q: 'It is that combination that ___ her apart from her contemporaries.', o: ['set', 'put', 'held', 'kept'], why: 'The phrasal verb *set someone apart* = make them different.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 1** all four options usually mean something similar. What decides the answer is **collocation**, a fixed phrase or the grammar after the gap. Read past the gap: *set her apart from* fixes the verb, whatever the meaning suggests.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these descriptions after the tutor.', tutor: 'mei', items: [
            { a: 'My grandmother was fiercely independent until the very end.' },
            { a: 'He’s refreshingly honest, though some people find him blunt.' },
            { a: 'She was blissfully unaware of the trouble she had caused.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'The face we show',
      about: 'Read an essay on first impressions, answer questions in the format of C1 Advanced Reading Part 5 and talk about how others see you.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'This essay brings the unit together: aspects that place events in time, state verbs used dynamically, and precise vocabulary for character. Read it once for the writer’s **argument**, then again for the **detail**. Notice words that carry the writer’s attitude, such as *comforting* or *merely*.' },
          { t: 'reading', title: 'The face we show', md: 'Most of us have been told, at some point, that we never get a second chance to make a first impression. The advice is usually offered kindly, often just before an interview, and it is meant to concentrate the mind. What it rarely does is make us wonder whether the people judging us are any good at it.\n\nPsychologists have been studying snap judgements for decades, and the broad finding is not in dispute: we form impressions of strangers astonishingly fast, and we are remarkably confident in them. Show people a photograph of a face for a fraction of a second and they will happily tell you whether its owner is trustworthy, competent or kind. Show them the same face for longer and their verdicts barely change; they simply become more certain. Speed, it seems, is not the problem. Confidence is.\n\nThe comforting explanation is that these judgements must be accurate, or evolution would not have equipped us with them. But a tool can be useful without being precise. For our ancestors, deciding quickly whether a stranger was a threat mattered far more than deciding correctly; a person who hesitated to run from a friendly face lost nothing, while one who lingered beside a hostile one might lose everything. We have inherited a system designed to avoid one kind of error, and we pay for it with another.\n\nThat other error is the confusion of a state with a trait. When a colleague is being short with us on a Monday morning, we tend to conclude that he is a short-tempered person, rather than a man who has been up all night with a sick child. We read behaviour as character because character is simpler: it lets us predict, and prediction feels like safety. Having decided, we then notice what confirms the verdict and quietly file away what does not. The manager who has labelled a new recruit as disorganised will remember every missed deadline and forget every early one.\n\nNone of this means that first impressions are worthless. People who are fiercely independent or painfully shy often do signal it within minutes. But what such observations capture tends to be manner, not substance: warmth, energy, ease. Whether a person is honest, or loyal, or good at their job is a slower matter, and it is revealed in what they do repeatedly, over time, when they are not trying to impress.\n\nPerhaps, then, the advice should be turned around. Rather than telling the candidate that the first moments are everything, we might tell the interviewer that they are merely the beginning. A first impression is a hypothesis. The mistake is not to form one; it is to treat it as a conclusion.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 5): read the essay and choose the answer which fits best according to the text.', items: [
            { q: 'In the first paragraph, the writer suggests that the familiar advice about first impressions', o: ['overlooks the question of how reliable the judges are.', 'is usually given unkindly.', 'makes candidates too nervous to perform well.', 'is no longer believed by most people.'], why: 'The advice rarely makes us wonder *whether the people judging us are any good at it*.' },
            { q: 'What does the writer find most significant about the research in the second paragraph?', o: ['People become more certain without becoming more accurate.', 'People need several seconds to judge a face.', 'People change their minds when they look for longer.', 'People are better at judging competence than kindness.'], why: '*Their verdicts barely change; they simply become more certain… Confidence is* the problem.' },
            { q: 'Why does the writer describe our ancestors’ situation in the third paragraph?', o: ['To explain why a judgement can be useful but still inaccurate.', 'To prove that snap judgements are usually correct.', 'To show that early humans trusted strangers too easily.', 'To argue that evolution has made us more precise over time.'], why: '*A tool can be useful without being precise*: speed mattered more than accuracy.' },
            { q: 'The example of the colleague on a Monday morning illustrates', o: ['how we mistake temporary behaviour for permanent character.', 'how tiredness makes people rude.', 'why parents of young children are often short-tempered.', 'why we should avoid colleagues early in the week.'], why: 'It is the *confusion of a state with a trait*: *being short* versus *a short-tempered person*.' },
            { q: 'What does the writer say about the manager and the new recruit?', o: ['Once the manager has a view, he notices only what supports it.', 'The recruit is in fact disorganised.', 'The manager deliberately treats the recruit unfairly.', 'Most new recruits miss deadlines at first.'], why: '*Having decided, we then notice what confirms the verdict.*' },
            { q: 'In the final paragraph, the writer’s main point is that a first impression', o: ['should be treated as a starting point to be tested.', 'should be ignored by interviewers.', 'matters more to interviewers than to candidates.', 'is the most important part of an interview.'], why: '*A first impression is a hypothesis… the mistake is to treat it as a conclusion.*' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 5** the questions follow the order of the text, and each one usually focuses on one paragraph. Wrong options often **repeat words from the text** (*Monday*, *child*, *deadlines*) while saying something the writer did not mean. Look for the option that matches the **idea**, in different words.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the words from the essay with their meaning in context.', pairs: [
            ['concentrate the mind', 'make someone think seriously'],
            ['not in dispute', 'accepted by everyone'],
            ['a verdict', 'a final judgement'],
            ['linger', 'stay longer than necessary'],
            ['file away', 'put aside and forget'],
            ['a hypothesis', 'an idea that still needs testing'],
          ] },
        ],
        [
          { t: 'text', md: 'Now talk about yourself, as in **Speaking Part 1** and the discussion that might follow it. Use a precise collocation for character, a dynamic state verb (*I’m being*, *I’m seeing*, *I’ve been thinking*) and one perfect form that looks back.\n\n*People who don’t know me well often think I’m rather reserved, but I’m not, really. I’ve been working in sales for three years, so I’ve had to become fairly thick-skinned. My friends would say I’m fiercely loyal, and occasionally blunt.*' },
          { t: 'ex', kind: 'speak', h: 'Say these answers after the tutor.', tutor: 'arthur', items: [
            { a: 'People often mistake my shyness for arrogance.' },
            { a: 'I’ve had to become fairly thick-skinned in my job.' },
            { a: 'A first impression is a hypothesis, not a conclusion.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'Choose the form that fits best.', items: [
      { q: 'I ___ to ask you about the flat, but I keep forgetting.', o: ['’ve been meaning', '’ve meant', 'mean'], why: 'A lasting, unfulfilled intention: *have been meaning to*.' },
      { q: 'By the time the ambulance arrived, he ___ consciousness.', o: ['had regained', 'has regained', 'regained already'], why: 'Looking back from a past point: the past perfect.' },
      { q: 'Next year we ___ married for forty years.', o: ['will have been', 'will be being', 'are'], why: 'Duration up to a future point with a state verb: *will have been*.' },
      { q: 'You’re covered in paint. ___ the kitchen?', o: ['Have you been decorating', 'Have you decorated', 'Did you decorate'], why: 'A visible effect of a recent activity.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Complete the second sentence so that it has a similar meaning to the first. Use between three and six words, including the word given.', items: [
      { q: 'It’s years since I last went to the theatre.', cue: 'been', gap: 'I ___ the theatre for years.', a: ['haven’t been to', 'have not been to'], why: '*It’s years since* = present perfect negative + *for*.' },
      { q: 'I planned to call you, but I never did.', cue: 'meaning', gap: 'I ___ you, but I never did.', a: ['had been meaning to call', '’d been meaning to call', 'had been meaning to phone', '’d been meaning to phone'], why: 'A past intention that was never carried out.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete each collocation with one word.', items: [
      { q: 'He was ___ shy as a child and hated speaking in class.', a: ['painfully'], why: '*Painfully shy*: shyness that causes discomfort.' },
      { q: 'She’s ___ independent and refuses all help.', a: ['fiercely'], why: '*Fiercely independent*.' },
      { q: 'The airline is ___ unreliable, so book an early flight.', a: ['notoriously'], why: '*Notoriously* = well known for something bad.' },
      { q: 'He was ___ unaware of the damage he had done.', a: ['blissfully'], why: '*Blissfully unaware*: happily ignorant.' },
    ] },
    { t: 'ex', kind: 'wordform', h: 'Use the word in capitals to form a word that fits the gap.', items: [
      { q: 'Her ___ to admit mistakes made her hard to work with.', base: 'willing', a: ['unwillingness'], why: 'A negative noun after *Her*: *unwillingness*.' },
      { q: 'He is admired for his ___ in difficult situations.', base: 'resolute', a: ['resolution', 'resoluteness'], why: 'A noun after *his*.' },
      { q: 'She is ___ modest about her achievements.', base: 'arm', a: ['disarmingly'], why: 'An adverb before *modest*: *disarmingly*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'I [have been knowing] him since university.', a: ['have known', '’ve known'], why: '*Know* is a state verb.' },
      { s: 'She’s a very [level-head] person in a crisis.', a: ['level-headed'], why: 'Compound adjectives with a body part take *-ed*.' },
      { s: 'He’s so [sensible]: he cries at every film.', a: ['sensitive'], why: '*Sensitive* = easily moved.' },
    ] },
  ],
};
