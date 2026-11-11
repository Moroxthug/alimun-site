// English C1, class 89 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u19:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c89',
  focus: 'By the end every student reports what people meant as well as what they said, and chooses the verb that shows their own attitude: *imply that* and *infer from*, *hint that* and *hint at*, *make out that*, *let slip that*, *insinuate that*, *give the impression that* and *come across as*. They also listen for what a speaker implies or feels, as in C1 Advanced Listening Part 1.',
  tips: [
    'The speaker implies; the listener infers. Students who mix them up usually say *Are you inferring that…?* Fix it every time and ask *Who is doing the suggesting?*',
    'These verbs carry a judgement. Show the difference with one fact: *She said she was ill / made out that she was ill / let slip that she was ill.* Ask what each tells us about the reporter.',
    'Watch the patterns: *imply* takes no personal object (*He implied that I was late*), *suggest* never takes an object and an infinitive (*She suggested that we leave*), and *let slip* keeps the base form in every tense.',
    'In the listening task, the wrong options are things the speakers mention. Ask students to say in their own words what the speaker really means before they look at the options.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Has anyone ever told you something without actually saying it? How did you know?* Take two short stories and retell one of them with *implied* or *hinted*.' },
    { min: 12, title: 'Verbs for what was meant', md: 'Show board page 1. Go through the verbs and what each says about the speaker and the reporter, then students choose the verb that fits.' },
    { min: 10, title: 'Attitude and patterns', md: 'Show board page 2. Students sort the sentences by what they tell us, then fix the pattern mistakes.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Listening Part 1. Give students 30 seconds to read the questions, then read the two extracts from board page 4 aloud twice. Check, then show the script.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 5, title: 'Close', md: 'Each student reports one thing someone said in class today with one of the new verbs. Set the homework.' },
  ],
  board: [
    { title: 'Verbs for what was meant', blocks: [
      { t: 'table', caption: 'Reporting the message underneath', explain: ['head', 'col1'], head: ['Verb and pattern', 'What it tells you', 'Example'], rows: [
        ['imply that', 'suggested without saying it', 'His tone implied that the decision was final.'],
        ['infer from', 'the listener worked it out', 'I inferred from her silence that she was hurt.'],
        ['hint that, hint at + noun', 'suggested lightly, on purpose', 'The manager hinted at changes after the summer.'],
        ['make out that', 'claimed, and the reporter doubts it', 'He made out that the idea had been his.'],
        ['let slip that', 'revealed by accident', 'She let slip that the shop was closing.'],
        ['insinuate that', 'suggested something unpleasant', 'They insinuated that he had copied the work.'],
        ['come across as + adjective', 'how someone seems to others', 'He came across as rather nervous.'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the verb that fits.', items: [
        { q: 'Without saying so directly, the letter ___ that we were to blame.', o: ['implied', 'inferred', 'let slip'], why: 'The letter suggests it: *imply that*.' },
        { q: 'From the way he avoided my eyes, I ___ that something was wrong.', o: ['inferred', 'implied', 'hinted'], why: 'The listener works it out: *infer*.' },
        { q: 'At the party, my sister let ___ that she was engaged.', o: ['slip', 'slipped', 'to slip'], why: '*Let* + base form, in every tense.' },
        { q: 'He ___ himself out to be an expert, but he had never done the job.', o: ['made', 'gave', 'let'], why: '*Make someone out to be*: a claim the reporter doubts.' },
        { q: 'On the radio she ___ across as calm and well informed.', o: ['came', 'gave', 'made'], why: '*Come across as*: how someone seems.' },
      ] },
    ] },
    { title: 'Attitude and patterns', blocks: [
      { t: 'ex', kind: 'sort', h: 'What does each sentence tell you?', groups: ['said on purpose, but not directly', 'said by accident', 'the reporter does not believe it'], explain: ['groups'], items: [
        { s: 'She hinted that she might apply for the job.', g: 0, why: '*Hint*: a light suggestion, on purpose.' },
        { s: 'He let slip that the results were already out.', g: 1, why: '*Let slip*: an accidental reveal.' },
        { s: 'They made out that the train had been late.', g: 2, why: '*Make out that*: the reporter doubts it.' },
        { s: 'His smile implied that he knew more than he said.', g: 0, why: '*Imply*: suggested, not said.' },
        { s: 'She made out that she had never seen the email.', g: 2, why: 'Doubt again: *made out that*.' },
        { s: 'The waiter let slip that the chef had left.', g: 1, why: 'He did not mean to tell them.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'Are you [inferring] that I forgot on purpose?', a: ['implying'], why: 'The speaker implies; the listener infers.' },
        { s: 'She [implied me] that I had been rude.', a: ['implied'], why: '*Imply* takes no personal object.' },
        { s: 'The coach suggested [us to train] harder.', a: ['that we train', 'that we should train', 'training'], why: '*Suggest* + *that* clause or *-ing*, never object + infinitive.' },
        { s: 'He kept [hinting] a pay rise, but nothing happened.', a: ['hinting at'], why: 'With a noun, use *hint at*.' },
      ] },
    ] },
    { title: 'Exam corner: Listening Part 1', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Listening Part 1): you will hear two extracts. Choose the answer which fits best according to what you hear.', items: [
        { q: 'Extract one. Two flatmates talk about a new tenant. What does the man imply about the new tenant?', o: ['She is less tidy than she claimed.', 'She is planning to leave soon.', 'She is unfriendly to visitors.', 'She is often late with the rent.'], why: '*Spotless, she said. I’ve seen her room*: he implies she is not tidy. The rent is mentioned and is fine.' },
        { q: 'Extract one. How does the woman feel about the situation?', o: ['willing to give the tenant more time', 'angry that she was misled', 'worried about the rent', 'keen to find someone else'], why: '*It’s only been a week. Let’s give her a chance.*' },
        { q: 'Extract two. A woman talks about a meeting with her manager. What did the manager let slip?', o: ['that the department is going to be reorganised', 'that she is going to be promoted', 'that her work has been criticised', 'that the manager is leaving'], why: '*He let slip that the whole department is being restructured.* Promotion is what she hoped for, not what he said.' },
        { q: 'Extract two. What does the woman infer from the meeting?', o: ['Her manager is not free to tell her everything.', 'Her manager does not trust her.', 'She should look for another job.', 'The meeting was a mistake.'], why: '*I got the impression his hands were tied*: he cannot say more.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Listening Part 1 you hear each extract twice. Use the first listening to decide what each speaker **means**, and the second to check that your option says the same thing in different words.' },
    ] },
    { title: 'Script (show after listening)', blocks: [
      { t: 'dialogue', title: 'Extract one: two flatmates', lines: [
        { who: 'Tom', s: 'So, how’s our new flatmate settling in?' },
        { who: 'Ana', s: 'Fine, I think. She paid the rent on the first day, which is more than the last one ever did.' },
        { who: 'Tom', s: 'True. “Spotless”, she said, when we asked if she was tidy. I’ve seen her room.' },
        { who: 'Ana', s: 'It’s only been a week. Let’s give her a chance before we start keeping score.' },
      ] },
      { t: 'dialogue', title: 'Extract two: after a meeting', lines: [
        { who: 'Rachel', s: 'I went in hoping he’d mention the promotion. He didn’t, of course.' },
        { who: 'Rachel', s: 'But halfway through he let slip that the whole department is being restructured, and then went very quiet.' },
        { who: 'Rachel', s: 'He wasn’t unfriendly. I just got the impression his hands were tied, and he’d said more than he was supposed to.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'What did they really mean?', md: 'Ask the student to recall a real conversation where someone did not say what they meant: a boss, a relative, a neighbour. The student reports it twice: once neutrally (*She said…*) and once with a verb that shows what they think (*She made out that…, She hinted at…*). Discuss how the choice of verb changes the story.' },
    small: { title: 'Gossip chain', md: 'Post a short neutral statement in the chat (*Jo said she was busy on Friday*). The first student reports it with a judging verb (*Jo made out that…*), the next adds what they inferred, and so on round the group. At the end, compare the final version with the first and name every verb used.' },
    group: { title: 'Read between the lines', md: 'Breakout rooms of three each get two short quotes in the chat (*I’m sure you did your best*, *It’s an interesting choice of colour*). Each room decides what the speaker really meant and reports it with two different verbs from board page 1. Back together, compare the rooms’ versions.' },
  },
  homework: { book: 'u19:p2', md: 'Finish lesson 2 of unit 19 if needed, then do lesson 3 (Burying the hatchet). Write a short account (about 120 words) of a conversation in which someone hinted at something or let something slip, using at least four verbs from today’s table.' },
};
