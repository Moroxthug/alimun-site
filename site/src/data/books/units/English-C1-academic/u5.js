// English C1 for study and exams, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Academic speaking and debate',
  goal: 'Present research with confidence, describe data precisely and take part in a formal debate: concede, rebut and challenge politely.',
  art: 'sun',
  tags: { skills: ['speaking', 'listening', 'vocabulary'], topics: ['presentations', 'signposting', 'describing-data', 'handling-questions', 'debate', 'rebuttal'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Presenting research',
      about: 'Guide your audience through a talk, describe trends in data and deal with difficult questions.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'A listener cannot go back and read a sentence again, so a good speaker tells the audience where they are. These phrases are called **signposts**. At C1 level, aim for variety: if every section starts with *Next…*, the talk sounds flat.' },
          { t: 'table', caption: 'Signposting a presentation', explain: ['head', 'col0'], quiz: true, head: ['Stage', 'Useful language'], rows: [
            ['opening', 'In this talk I’ll outline… and then turn to…'],
            ['moving on', 'That brings me to… / Having looked at…, I’d now like to…'],
            ['referring to a visual', 'If you look at this graph, you’ll see that… / As this slide shows, …'],
            ['emphasising', 'What I’d really like to stress is… / The key point here is…'],
            ['a short aside', 'Incidentally, … / As a side note, …'],
            ['summing up', 'To draw this together, … / So, to recap the main points, …'],
          ] },
        ],
        [
          { t: 'text', md: 'When you describe data, be precise about the **direction**, the **size** and the **speed** of a change, and give approximate numbers naturally. Note that *rise* and *fall* are both verbs and nouns.' },
          { t: 'examples', items: [
            { s: 'Applications **rose sharply** in 2020 and then **levelled off**.', n: '*Rise sharply*: go up quickly by a lot. *Level off*: stop rising or falling.' },
            { s: 'There was **a slight decline** in attendance over the summer.', n: 'Adjective + noun: *a slight decline*, *a steady rise*, *a dramatic fall*.' },
            { s: 'The number of users **peaked at** just under two thousand.', n: '*Peak at*: reach its highest point. *Just under*: a little less than.' },
            { s: 'Costs **fluctuated** throughout the year.', n: '*Fluctuate*: go up and down repeatedly.' },
            { s: '**Roughly a third** of respondents had no previous experience.', n: '*Roughly*, *approximately* and *around* make numbers approximate.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each phrase with its meaning.', pairs: [
            ['level off', 'stop rising or falling'],
            ['peak at', 'reach the highest point'],
            ['fluctuate', 'go up and down repeatedly'],
            ['a steady rise', 'an increase at a regular speed'],
            ['plummet', 'fall very quickly and a long way'],
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the best word.', items: [
            { q: 'Sales rose ___ in January, from 200 to 900.', o: ['sharply', 'slightly', 'steadily'], why: 'From 200 to 900 in one month is a large, fast change: *sharply*.' },
            { q: 'There was a ___ fall of one per cent.', o: ['slight', 'dramatic', 'sharp'], why: 'One per cent is a small change: *slight*.' },
            { q: 'Having looked at the method, I’d now like to ___ to the results.', o: ['turn', 'look', 'bring'], why: '*Turn to* a new topic is a common signpost.' },
            { q: 'Just ___ half of the students agreed, about 48 per cent.', o: ['under', 'over', 'above'], why: '48 per cent is a little less than half: *just under*.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'Questions after a presentation', lines: [
            { who: 'Daniel', s: 'Thank you. I wondered whether your results would be the same in a larger city.' },
            { who: 'Amara', s: 'That’s a very good question. To be honest, we can’t say, because all our participants came from one town. It’s certainly something a future study could look at.' },
            { who: 'Daniel', s: 'And did you control for the students’ income?' },
            { who: 'Amara', s: 'If I understand you correctly, you’re asking whether richer students did better. We did collect that data, but I’m afraid analysing it was beyond the scope of this project.' },
            { who: 'Daniel', s: 'One last thing: isn’t a sample of forty rather small?' },
            { who: 'Amara', s: 'It is, and I mentioned that as a limitation. That said, the pattern was very consistent across the group.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'How does Amara handle the questions?', items: [
            { q: 'Why does Amara say “If I understand you correctly, you’re asking…”?', o: ['to check the question and gain time', 'to avoid answering', 'to correct Daniel’s English'], why: 'Rephrasing the question checks understanding and gives her a moment to think.' },
            { q: 'What does “beyond the scope of this project” mean?', o: ['outside what the project set out to do', 'too difficult for the researcher', 'already finished'], why: 'The *scope* is the range of what a study covers.' },
            { q: 'How does Amara respond to the point about the small sample?', o: ['She accepts it and then adds a point in her favour.', 'She rejects it completely.', 'She changes the subject.'], why: '*It is* accepts the point; *That said* introduces her counterpoint.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Debate: conceding, rebutting and challenging',
      about: 'Disagree strongly but politely, and answer the other side’s arguments.',
      art: 'dragon',
      spreads: [
        [
          { t: 'text', md: 'In a formal debate or seminar, you win respect by answering the other side’s best argument, not by ignoring it. A common pattern is to **concede** part of a point and then **rebut** it: show why it does not change your conclusion. To **challenge** a point, ask for evidence or a definition, politely.' },
          { t: 'table', caption: 'Language for debate', explain: ['head', 'col0'], quiz: true, head: ['Function', 'Useful language'], rows: [
            ['concede', 'I take your point, but… / That may well be true; however… / Granted, …'],
            ['rebut', 'That doesn’t necessarily follow. / I’m not sure the evidence supports that.'],
            ['challenge', 'With respect, … / What evidence is there for that? / Could you clarify what you mean by…?'],
            ['keep your turn', 'If I could just finish my point… / Let me come back to that in a moment.'],
            ['build on a point', 'To add to what Callum said, … / Following on from that, …'],
          ] },
          { t: 'tip', art: 'owl', md: '*With respect* sounds polite, but it usually comes just before strong disagreement. Use it carefully, and keep your tone calm.' },
        ],
        [
          { t: 'dialogue', title: 'A seminar debate: should lectures be compulsory?', lines: [
            { who: 'Priya', s: 'I’d argue that attendance should be compulsory. Students who attend regularly tend to get better marks.' },
            { who: 'Callum', s: 'I take your point, but that doesn’t necessarily follow. Students who attend may simply be more motivated in the first place.' },
            { who: 'Priya', s: 'Granted, motivation plays a role. However, attending also gives students a routine, which helps the less motivated ones most.' },
            { who: 'Callum', s: 'With respect, what evidence is there that forcing people to attend creates motivation?' },
            { who: 'Priya', s: 'If I could just finish my point: I’m not saying it creates motivation, only that it removes one reason to fall behind.' },
            { who: 'Callum', s: 'That’s a fair distinction. Even so, I’d rather see lectures improved than made compulsory.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Look at how Priya and Callum debate.', items: [
            { q: 'What does Callum suggest in his first reply?', o: ['that motivation, not attendance, may explain the better marks', 'that attendance has no link with marks', 'that Priya’s figures are wrong'], why: 'He questions the cause: motivated students may both attend and do well.' },
            { q: 'Why does Priya say “If I could just finish my point”?', o: ['to keep her turn after an interruption', 'to end the debate', 'to agree with Callum'], why: 'It politely stops an interruption so she can complete her argument.' },
            { q: 'What does “That’s a fair distinction” show?', o: ['Callum accepts that Priya has clarified her point.', 'Callum thinks Priya is being unfair.', 'Callum has changed his mind completely.'], why: 'He concedes the clarification but keeps his own position with *Even so*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'bank', h: 'Complete the debate phrases with a word from the box.', extra: ['agree', 'sorry'], items: [
            { q: 'I take your ___, but I see it differently.', a: 'point', why: '*I take your point*: I understand and partly accept it.' },
            { q: 'That doesn’t necessarily ___.', a: 'follow', why: 'The conclusion does not come logically from the argument.' },
            { q: 'With ___, I think the figures tell a different story.', a: 'respect', why: '*With respect* introduces polite but firm disagreement.' },
            { q: 'Could you ___ what you mean by success?', a: 'clarify', why: 'Asking for a definition is a polite way to challenge.' },
            { q: 'Let me come ___ to that in a moment.', a: 'back', why: '*Come back to* a point: deal with it later.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Is the speaker conceding, rebutting or challenging?', groups: ['conceding', 'rebutting', 'challenging'], explain: ['groups'], items: [
            { s: 'That may well be true.', g: 0, why: 'The speaker accepts the point, at least in part.' },
            { s: 'Granted, the costs are high.', g: 0, why: '*Granted* concedes a point.' },
            { s: 'I’m not sure the evidence supports that.', g: 1, why: 'The speaker argues that the claim is not supported.' },
            { s: 'That doesn’t necessarily follow.', g: 1, why: 'The speaker rejects the logic of the argument.' },
            { s: 'What evidence is there for that?', g: 2, why: 'A direct request for evidence.' },
            { s: 'Could you clarify what you mean by fair?', g: 2, why: 'Asking for a definition challenges the term.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'I take your point, but costs matter too.', why: 'Concede, then add your own point with *but*.' },
            { a: 'To add to what Priya said, timing matters.', why: '*To add to what X said* builds on a previous speaker.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Exams or coursework?',
      about: 'Read the transcript of a seminar debate and follow how each speaker builds and answers arguments.',
      art: 'snail',
      spreads: [
        [
          { t: 'reading', title: 'Seminar transcript: should final exams be replaced by coursework?', md: '**Tutor:** Let’s start with the main question. Elena, would you like to open?\n\n**Elena:** Thank you. My position is that final exams should be replaced by coursework in most subjects. An exam measures what a student can do in three hours under stress, which is not how anyone works in real life. Coursework allows students to research, reflect and revise, and those are the skills a degree is supposed to develop.\n\n**Kwame:** I take your point about real life, but I’d question the idea that coursework is a fairer measure. With coursework, it is much harder to know whose work you are actually marking. Students can get a great deal of help from friends, family or paid services.\n\n**Elena:** That may well be true for some students. However, the answer is to design better tasks, such as projects based on a student’s own data, not to go back to exams.\n\n**Kwame:** With respect, designing tasks like that for three hundred students takes a great deal of staff time. Exams are not perfect, but they are equal for everyone in the room.\n\n**Lena:** If I could add something here: I think you are both assuming it has to be one or the other. In my department we have a shorter exam and a project. The exam checks the basics, and the project lets people go deeper.\n\n**Kwame:** That seems a reasonable compromise, although it does mean more marking.\n\n**Tutor:** So it sounds as if the real question is less about exams against coursework and more about what each one is for.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Elena thinks exams do not reflect how people work in real life.', a: 't', why: '*Which is not how anyone works in real life.*' },
            { q: 'Kwame’s main concern is that coursework takes students too long.', a: 'f', why: 'His concern is that it is hard to know *whose work you are actually marking*.' },
            { q: 'Lena’s department uses both an exam and a project.', a: 't', why: '*We have a shorter exam and a project.*' },
            { q: 'Kwame has used paid services himself.', a: 'ng', why: 'He mentions them as a risk, but says nothing about himself.' },
            { q: 'The tutor decides that exams should be abolished.', a: 'f', why: 'The tutor changes the question; there is no decision.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at what each speaker does.', items: [
            { q: 'What does Lena point out?', o: ['that the others present a false choice', 'that Kwame’s figures are wrong', 'that coursework is always better'], why: '*You are both assuming it has to be one or the other.*' },
            { q: 'In “That may well be true for some students. However…”, Elena…', o: ['concedes part of Kwame’s point and then rebuts it', 'agrees with Kwame completely', 'asks Kwame for evidence'], why: 'She accepts the risk but argues for a different solution.' },
            { q: 'How does the tutor end the discussion?', o: ['by reframing the question', 'by giving the final answer', 'by asking Elena to speak again'], why: 'The tutor suggests the real question is what each type of assessment is for.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the phrase the speaker uses to challenge or concede.', items: [
            { s: 'Kwame: [With respect], designing tasks like that takes a great deal of staff time.', why: '*With respect* introduces firm but polite disagreement.' },
            { s: 'Kwame: [I take your point] about real life, but I’d question the idea.', why: 'A concession before he disagrees.' },
            { s: 'Kwame: That seems a reasonable compromise, [although] it does mean more marking.', why: '*Although* adds a reservation to his agreement.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
      { q: 'You want to move to the next section of your talk. What do you say?', o: ['That brings me to the results.', 'Results now.', 'I have finished the method.'], why: '*That brings me to…* is a smooth signpost.' },
      { q: 'A question is outside what your study covered. What do you say?', o: ['I’m afraid that’s beyond the scope of this study.', 'That’s a bad question.', 'I don’t want to answer that.'], why: '*Beyond the scope* explains politely that the study did not cover it.' },
      { q: 'Which phrase concedes a point?', o: ['Granted, the sample was small.', 'What evidence is there for that?', 'That doesn’t necessarily follow.'], why: '*Granted* accepts a point.' },
      { q: 'Numbers went up and down all year. Which verb fits?', o: ['fluctuated', 'levelled off', 'peaked'], why: '*Fluctuate*: go up and down repeatedly.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete each sentence with one word.', items: [
      { q: 'I take your ___, but I disagree.', a: ['point'], why: '*I take your point*: I understand and partly accept it.' },
      { q: 'Prices rose ___ in March, from ten to fifty.', a: ['sharply', 'dramatically', 'steeply', 'rapidly'], why: 'A large, fast rise.' },
      { q: 'Could you ___ what you mean by quality?', a: ['clarify', 'explain'], why: 'Asking for a definition.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'If you look at this graph, you’ll see a rise.', why: 'Referring to a visual.' },
      { a: 'That may well be true; however, costs matter.', why: 'Concede, then rebut.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the phrase with its function.', pairs: [
      ['With respect, …', 'disagree firmly but politely'],
      ['If I could just finish…', 'keep your turn'],
      ['To recap the main points, …', 'sum up'],
    ] },
  ],
};
