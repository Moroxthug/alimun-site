// English C2, class 9 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u2:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c09',
  focus: 'By the end every student reads a reflective magazine essay closely, follows the writer’s attitude where it turns (agreeing, then qualifying), answers questions in the format of Part 5, and names the tools of style the writer uses: short sentences for impact, reference and substitution, and punctuation for effect. The speaking goal: argue a balanced view on slowing down, in a voice of their own.',
  tips: [
    'This essay qualifies its own argument (*I do not want to romanticise this*). Attitude questions often depend on that turn, so ask students to mark every *but*, *yet* and *I admit* before answering.',
    'Ask students to read the short sentences aloud (*Nobody waits any more.*, *When I am waiting, I wait.*). Hearing the rhythm helps them see why the writer placed them where they are.',
    'Use the essay as a model for unit 2: *the former… the latter*, *such small refusals* and the dashes around an aside are all things students practised in classes 6 to 8.',
    'The next class is the review of units 1 and 2. Note the mistakes you hear today; they make good material for its board.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *When did you last wait for something without looking at your phone?* Each student answers in two or three sentences.' },
    { min: 20, title: 'Read and answer', md: 'Show board page 1. Students read the essay alone (about eight minutes), then answer the questions in the format of Part 5. Check together, quoting the lines that give each answer and the reason each wrong option fails.' },
    { min: 8, title: 'The writer’s tools', md: 'Show board page 2. Students tap the tools of style in the extracts, then match the phrases from the essay with their meanings.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 7, title: 'Your view', md: 'Show board page 3. Each student gives their view in about a minute, with one short sentence for impact, one reference word and one concession.' },
    { min: 5, title: 'Close', md: 'Each student says one place where they will try *when I am waiting, I wait* this week. Set the homework.' },
  ],
  board: [
    { title: 'Exam corner: Reading and Use of English Part 5', blocks: [
      { t: 'reading', title: 'In praise of waiting', md: 'Nobody waits any more. We queue, certainly, and we sit in traffic, and we stand on platforms watching the departure board change its mind. But we do not wait, in the old sense of the word: we fill the time. The phone comes out before the kettle has started to boil. This is not a complaint about technology, or not only one. It is an observation about what we have lost, which is not time – we have as much of it as ever – but the empty part of it.\n\nI noticed this first in my son. Asked to wait ten minutes for dinner, he reacted as though he had been sentenced. Ten minutes of what? Of nothing, I said. He looked at me with the pity reserved for the very old. Yet I can remember whole afternoons of nothing from my own childhood, and I remember them more clearly than much of what has happened to me since.\n\nThat, I suspect, is the point. Boredom is uncomfortable; it is meant to be. The discomfort is what drives the mind to wander, and a wandering mind is where a surprising number of ideas come from. It is in the gaps between tasks, not in the tasks themselves, that we tend to make sense of what has happened to us. Fill every gap, and the sense-making does not happen. It is simply postponed, and then, quietly, abandoned.\n\nI do not want to romanticise this. The afternoons of nothing were also, often, afternoons of loneliness, and nobody who has waited for news in a hospital corridor would call waiting a gift. There is a difference between the emptiness we choose and the emptiness that is imposed on us. The former can be restful; the latter rarely is.\n\nWhat I have tried, with modest success, is a small rule: when I am waiting, I wait. On the platform, I watch the platform. It is not, I admit, a thrilling discipline. But such small refusals add up, and I find that I arrive at things slightly less tired than I used to, and slightly more aware of where I have been.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 5), shortened to five questions: read the essay and choose the answer (A, B, C or D) which fits best according to the text.', items: [
        { q: 'In the first paragraph, the writer’s main point is that people', o: ['no longer allow themselves any unoccupied time.', 'have less free time than they used to.', 'dislike waiting only because of technology.', 'spend more time in queues and traffic than before.'], why: '*What we have lost… is not time… but the empty part of it.* *Or not only one* rules out the third option.' },
        { q: 'The writer mentions his son’s reaction in order to', o: ['illustrate how strange unfilled time now seems to the young.', 'criticise the way children are brought up today.', 'show that his son is unusually impatient.', 'explain why family meals have become difficult.'], why: 'The son treats ten minutes of nothing as a punishment and pities his father for suggesting it.' },
        { q: 'What does the writer suggest about boredom in the third paragraph?', o: ['Its discomfort plays a useful part in how we think.', 'It becomes pleasant once people get used to it.', 'It is a problem that experts have only recently noticed.', 'It should be avoided when we are making important decisions.'], why: '*The discomfort is what drives the mind to wander*, and that is where ideas and sense-making come from.' },
        { q: 'In the fourth paragraph, the writer', o: ['accepts that not all empty time is valuable.', 'admits that his childhood was an unhappy one.', 'argues that waiting in hospitals should be made easier.', 'regrets the time he spent alone as a child.'], why: 'He distinguishes chosen emptiness (restful) from imposed emptiness (*rarely* restful). He does not say his childhood was unhappy.' },
        { q: 'How does the writer present the effect of his own rule?', o: ['as a small but real improvement', 'as a complete change in his way of life', 'as an experiment that has mostly failed', 'as a habit that everyone ought to adopt'], why: '*With modest success… slightly less tired… slightly more aware*: understatement for a real, limited benefit.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In **Part 5** a writer often agrees, then qualifies. Questions about attitude are usually answered across several sentences, so read to the end of the paragraph and watch for turning words: *yet*, *but*, *I do not want to…*, *I admit*.' },
    ] },
    { title: 'The writer’s tools', blocks: [
      { t: 'ex', kind: 'spot', h: 'Tap the words or marks that show the tools of style from unit 2.', items: [
        { s: 'Nobody waits any more. [We queue, certainly, and we sit in traffic, and we stand on platforms watching the departure board change its mind.]', why: 'A long loose sentence after a very short one: the rhythm changes on purpose.' },
        { s: 'What we have lost is not time [–] we have as much of it as ever [–] but the empty part of it.', why: 'A pair of dashes sets off an aside.' },
        { s: 'The emptiness we choose and the emptiness imposed on us: [the former] can be restful; [the latter] rarely is.', why: 'Reference to the first and second of two things.' },
        { s: 'But [such] small refusals add up.', why: '*Such* refers back to the kind of thing just described.' },
      ] },
      { t: 'ex', kind: 'match', h: 'Match the phrases from the essay with their meanings.', pairs: [
        ['change its mind', 'here, of a departure board: show a new time'],
        ['the pity reserved for the very old', 'the kind of sympathy people feel for the elderly'],
        ['romanticise', 'make something seem better than it really is'],
        ['imposed on us', 'forced on us, not chosen'],
        ['with modest success', 'with some success, but not a great deal'],
      ] },
    ] },
    { title: 'Your view', blocks: [
      { t: 'text', md: 'Is empty time something we should protect, or a luxury that most people cannot afford? Give your view in about a minute. Use one very short sentence for impact, one reference word (*such*, *this*, *the former*, *the latter*) and one concession (*I do not want to suggest that…*, *Admittedly,…*).' },
      { t: 'examples', items: [
        { s: 'Protecting empty time is easy advice for people with time to spare. **Admittedly,** it costs nothing. But it is not free.', n: 'A concession, then a short sentence for impact.' },
        { s: 'Some people rest by doing nothing, others by doing something different; **the latter** is probably more realistic for most of us.', n: 'Ellipsis and reference.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Interview the writer', md: 'You play the writer of the essay; the student interviews you for five minutes, challenging your argument (*Isn’t this a privilege of people who are not busy?*). Then swap: the student defends the essay and you challenge it. Push for a short sentence for impact and one concession in each answer.' },
    small: { title: 'For and against', md: 'Divide the group into two sides (with two students, one each). One side argues that empty time should be protected at school and at work, the other that the idea is unrealistic. Each side has two minutes to prepare and one minute per speaker, then everyone may change sides if they were persuaded. Finish by asking which arguments changed minds and why.' },
  },
  homework: { book: 'u2', md: 'Finish lesson 4 of unit 2 if needed and do the unit 2 test. Then write about 200 words in reply to today’s question, *Is empty time something we should protect?*, with a short sentence for impact, a semicolon, a pair of dashes and *the former* and *the latter*. The next class is the review of units 1 and 2.' },
};
