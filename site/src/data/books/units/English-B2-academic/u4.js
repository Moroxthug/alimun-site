// English B2 for study and exams, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Seminars and presentations',
  goal: 'Present a topic clearly, deal with questions and take an active part in a seminar discussion.',
  art: 'parrot',
  tags: { skills: ['speaking', 'listening', 'reading'], topics: ['presentations', 'signposting', 'handling-questions', 'agreeing-disagreeing', 'seminars'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Presenting a topic and handling questions',
      about: 'Guide your audience through a talk and answer questions calmly and politely.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'A good academic presentation tells the audience where it is going. Speakers use **signposting** phrases to introduce the topic, give an outline, move from one part to the next and finish. Your listeners cannot go back and reread, so these phrases help them follow you.' },
          { t: 'table', caption: 'Signposting in a presentation', explain: ['head', 'col0'], quiz: true, head: ['Purpose', 'Phrase'], rows: [
            ['opening the talk', 'Today I’m going to talk about…'],
            ['giving an outline', 'I’ll start by…, and then I’ll move on to…'],
            ['moving on', 'Let’s now turn to…'],
            ['referring to a slide', 'As you can see from this graph, …'],
            ['concluding', 'To sum up, …'],
            ['inviting questions', 'I’d be happy to take any questions.'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'Questions after a presentation on green roofs', lines: [
            { who: 'Leila', s: 'To sum up, green roofs can lower temperatures in city centres and reduce flooding. I’d be happy to take any questions.' },
            { who: 'Tomasz', s: 'Thanks, Leila. How much does a green roof cost compared with a normal roof?' },
            { who: 'Leila', s: 'That’s a good question. I don’t have the exact figures with me, but I can find out and email them to you.' },
            { who: 'Grace', s: 'You mentioned flooding. Do green roofs work in very heavy rain?' },
            { who: 'Leila', s: 'If I understand you correctly, you’re asking whether they can hold all the water in a storm?' },
            { who: 'Grace', s: 'Yes, exactly.' },
            { who: 'Leila', s: 'Not all of it, no. They slow the water down, which gives the drains more time.' },
            { who: 'Tomasz', s: 'And are the building rules different in each country?' },
            { who: 'Leila', s: 'I’m afraid that’s beyond the scope of this talk, but I’m happy to discuss it afterwards.' },
          ] },
          { t: 'tip', art: 'owl', md: 'You do not need to know every answer. *I can find out and email you* is a perfectly professional reply. Checking the question first (*If I understand you correctly…*) also gives you a few seconds to think.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each purpose with a phrase.', pairs: [
            ['opening the talk', 'Today I’m going to talk about…'],
            ['giving an outline', 'I’ll start by…, and then I’ll move on to…'],
            ['referring to a slide', 'As you can see from this graph, …'],
            ['concluding', 'To sum up, …'],
            ['inviting questions', 'I’d be happy to take any questions.'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best way to respond.', items: [
            { q: 'You did not hear the question clearly.', o: ['Sorry, could you repeat the question, please?', 'What?', 'Say it again.'], why: '*Sorry, could you…, please?* is polite. The other two sound rude.' },
            { q: 'You are going to talk about this topic later in your presentation.', o: ['That’s a good question. I’ll come back to it in a few minutes.', 'Wait. Don’t ask that now.', 'I don’t want to talk about that.'], why: 'Thank the speaker and say when you will answer.' },
            { q: 'The question is about a different topic.', o: ['I’m afraid that’s beyond the scope of this talk, but I’m happy to discuss it afterwards.', 'That has nothing to do with my talk.', 'Why are you asking that?'], why: '*Beyond the scope of this talk* means outside your topic, said politely.' },
            { q: 'You want to check that you have understood the question.', o: ['If I understand you correctly, you’re asking whether the results apply to all ages?', 'You are asking a question.', 'Did you understand my talk?'], why: 'Repeat the question in your own words to check it.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete each phrase with one word.', items: [
            { q: 'Today I’m going to ___ about the causes of urban flooding.', a: ['talk', 'speak'], why: '*Today I’m going to talk about…* opens a presentation.' },
            { q: 'I’ll ___ by explaining the background, and then I’ll show you our results.', a: ['start', 'begin'], why: '*I’ll start by* + *-ing* gives the outline.' },
            { q: 'Let’s now ___ to the second part of my talk.', a: ['turn', 'move'], why: '*Let’s now turn to* or *move on to* introduces the next part.' },
            { q: 'If I understand you ___, you’re asking about the cost.', a: ['correctly', 'rightly'], why: '*If I understand you correctly* checks a question.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'I’d be happy to take any questions.', why: 'A polite way to invite questions at the end.' },
            { a: 'Thank you for that interesting question.', why: 'Thanking the speaker gives you time to think.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Agreeing, disagreeing and building on points',
      about: 'Join a seminar discussion, respond to others and add your own ideas politely.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'In a seminar, a small group discusses a topic with a tutor. At many UK universities, tutors expect every student to speak, and disagreeing with an idea is normal and welcome, as long as you do it politely. These phrases help you respond to others and connect your ideas to theirs.' },
          { t: 'table', caption: 'Phrases for a discussion', explain: ['head', 'col0'], quiz: true, head: ['Purpose', 'Phrases'], rows: [
            ['agreeing', 'I completely agree. / That’s exactly what I think.'],
            ['partly agreeing', 'I agree up to a point, but… / That’s true to some extent.'],
            ['disagreeing politely', 'I see your point, but… / I’m not sure I agree.'],
            ['building on a point', 'Building on what Ana said, … / I’d like to add to that.'],
            ['asking for clarification', 'Could you say a bit more about that? / What exactly do you mean by…?'],
            ['joining in', 'Can I just come in here? / Sorry to interrupt, but…'],
          ] },
        ],
        [
          { t: 'examples', items: [
            { s: 'That’s a fair point, **but** have we thought about the cost?', n: 'Accept the idea first, then add a question. This sounds more open than a direct *no*.' },
            { s: '**Going back to** what Kenji said earlier, I think the sample was too small.', n: 'Link your point to something said earlier, so the discussion stays connected.' },
            { s: '**I take your point**, but the data only covers one year.', n: '*I take your point* means *I understand and accept part of what you say*.' },
            { s: '**What exactly do you mean by** “fair”?', n: 'Ask about a key word before you agree or disagree.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Disagree with the idea, not the person. Say *I’m not sure that argument works*, not *You’re wrong*. And use names: *Building on what Ana said* shows that you have listened.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the most suitable response in a seminar.', items: [
            { q: 'A classmate says that exams are the fairest form of assessment. You partly agree.', o: ['That’s true to some extent, but coursework shows other skills.', 'You’re wrong about exams.', 'Exams are fine, I suppose. Whatever.'], why: '*True to some extent, but…* accepts part of the idea and then adds yours.' },
            { q: 'You want to add an idea to what Ana has just said.', o: ['Building on what Ana said, we could also look at the costs.', 'Ana is right, but let’s stop talking about it.', 'Forget what Ana said.'], why: '*Building on what Ana said* connects your idea to hers.' },
            { q: 'You did not understand a key word that a classmate used.', o: ['What exactly do you mean by “sustainable”?', 'Your word is wrong.', 'Nobody understands that word.'], why: '*What exactly do you mean by…?* asks for clarification politely.' },
            { q: 'Two people are talking and you want to join in.', o: ['Sorry to interrupt, but can I just add something?', 'Stop talking, it’s my turn.', 'Be quiet, please.'], why: '*Sorry to interrupt, but…* is the polite way to join in.' },
            { q: 'You agree completely with the tutor.', o: ['That’s exactly what I think.', 'I agree up to a point.', 'I’m not sure I agree.'], why: '*That’s exactly what I think* shows full agreement. The others show only partial agreement or disagreement.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete each phrase with one word.', items: [
            { q: 'I agree up to a ___, but I think the cost is too high.', a: ['point'], why: '*Up to a point* means partly.' },
            { q: 'That’s true to some ___.', a: ['extent', 'degree'], why: '*To some extent* means partly.' },
            { q: 'Could you say a bit more ___ that?', a: ['about'], why: '*Say more about something*: explain it further.' },
            { q: 'Sorry to ___, but I think we’re running out of time.', a: ['interrupt'], why: '*Sorry to interrupt, but…* lets you join politely.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Each phrase has one wrong word. Tap it.', items: [
            { s: 'I [am] agree with Sofia on this.', why: '*Agree* is a verb, so we say *I agree*, not *I am agree*.' },
            { s: 'I see your [mean], but I think the sample was too small.', why: 'The phrase is *I see your point*.' },
            { s: 'I’d like to build [in] what Omar said.', why: 'We *build on* someone’s point.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A seminar discussion',
      about: 'Read the transcript of a seminar and notice how the speakers agree, disagree and reach a compromise.',
      art: 'mug',
      spreads: [
        [
          { t: 'reading', title: 'Should universities record every lecture?', md: '**Dr Okafor:** Today’s question is whether universities should record every lecture. Hana, would you like to start?\n\n**Hana:** Sure. I think recordings are extremely useful. If you miss something, or if English isn’t your first language, you can listen again at your own speed.\n\n**Marco:** I see your point, but I’m not convinced. If every lecture is recorded, some students will simply stop coming. They tell themselves they’ll watch it later, and then they never do.\n\n**Priya:** Can I just come in here? I partly agree with Marco, but I don’t think the answer is to stop recording. Building on what Hana said, recordings help students who work part-time or care for a relative. They can’t always attend.\n\n**Dr Okafor:** So, if I understand you correctly, Priya, you’re saying the benefits for some students are worth the risk of lower attendance?\n\n**Priya:** Exactly. And if a lecture is interactive, people come anyway, because they don’t want to miss the discussion.\n\n**Marco:** That’s a fair point. But some lecturers feel less free to try out new ideas when they know they’re being recorded.\n\n**Hana:** Could you say a bit more about that? Do you mean they worry about clips being shared online?\n\n**Marco:** Yes, partly. A short clip without its context can easily be misunderstood.\n\n**Dr Okafor:** So we have two concerns: attendance, and how comfortable lecturers feel. Is there a way to deal with both?\n\n**Priya:** Perhaps recordings could be available only to students on the course, and only until the exam.\n\n**Hana:** I’d go along with that. It keeps the main benefit and reduces the risk.\n\n**Marco:** I could live with that too, as long as lecturers can pause the recording during discussions.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Hana thinks recordings help students whose first language is not English.', a: 't', why: '*If English isn’t your first language, you can listen again at your own speed.*' },
            { q: 'Marco believes recordings may lead to lower attendance.', a: 't', why: '*Some students will simply stop coming.*' },
            { q: 'Priya wants the university to stop recording lectures.', a: 'f', why: '*I don’t think the answer is to stop recording.*' },
            { q: 'Most students at this university watch recordings before their exams.', a: 'ng', why: 'Nobody gives information about how many students watch recordings.' },
            { q: 'By the end, all three students accept a compromise.', a: 't', why: 'Hana would *go along with that*, and Marco *could live with that too*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language in the discussion.', items: [
            { q: 'Why does Priya say “Can I just come in here?”', o: ['to join the discussion politely', 'to ask if she can enter the room', 'to ask the tutor a question'], why: '*Come in* here means *join the discussion*.' },
            { q: 'What is the tutor doing with “So, if I understand you correctly…”?', o: ['checking that Priya’s point has been understood', 'disagreeing with Priya', 'changing the topic'], why: 'The tutor repeats Priya’s idea in other words to check it.' },
            { q: '“I could live with that” means…', o: ['I can accept that, although it is not perfect', 'I would like to live there', 'I strongly disagree with that'], why: '*I could live with that* shows that you accept a compromise.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match each speaker with their main contribution.', pairs: [
            ['Hana', 'recordings let you listen again at your own speed'],
            ['Marco', 'some students will stop coming to lectures'],
            ['Priya', 'recordings help students who work or care for others'],
            ['Dr Okafor', 'sums up the two main concerns'],
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the best phrase.', items: [
      { q: 'You want to move to the next part of your talk.', o: ['Let’s now turn to the costs.', 'Let’s now finish to the costs.', 'Now we go costs.'], why: '*Let’s now turn to…* introduces the next part.' },
      { q: 'Someone asks a question that you cannot answer.', o: ['I’m not sure, but I can find out and email you.', 'That’s a stupid question.', 'I don’t know. Next question.'], why: 'Be honest and offer to find out.' },
      { q: 'You agree only partly.', o: ['I agree up to a point, but…', 'I totally agree.', 'You’re completely wrong.'], why: '*Up to a point* means partly.' },
      { q: 'You want a classmate to explain their idea further.', o: ['Could you say a bit more about that?', 'Say more.', 'What are you talking about?'], why: 'A polite question asks for clarification.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete each phrase with one word.', items: [
      { q: 'As you can ___ from this chart, sales fell in March.', a: ['see'], why: '*As you can see from…* refers to a slide.' },
      { q: 'To ___ up, there are three main problems.', a: ['sum'], why: '*To sum up* introduces the conclusion.' },
      { q: 'I’d like to build ___ what Ana said.', a: ['on'], why: '*Build on* someone’s point.' },
      { q: 'I see your ___, but I think the sample was too small.', a: ['point'], why: '*I see your point, but…* disagrees politely.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'That’s beyond the scope of this talk.', why: 'A polite way to say a question is outside your topic.' },
      { a: 'Could you say a bit more about that?', why: 'A polite request for clarification.' },
    ] },
    { t: 'ex', kind: 'spot', h: 'Each sentence has one wrong word. Tap it.', items: [
      { s: 'Thank you for listening. I’d be happy to [make] any questions.', why: 'We *take* questions at the end of a talk.' },
      { s: 'Can I just come [on] here?', why: 'The phrase is *come in*: join the discussion.' },
    ] },
  ],
};
