// English C1 for work, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Chairing and facilitating',
  goal: 'Facilitate discussions, build consensus and bring every voice in.',
  art: 'teacup',
  tags: { skills: ['speaking', 'listening', 'vocabulary', 'reading'], topics: ['facilitation', 'chairing', 'paraphrasing', 'consensus', 'meetings', 'workshops'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'So what you’re saying is…',
      about: 'Ask neutral questions, paraphrase what people say and summarise a discussion.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'A **chair** runs a meeting; a **facilitator** helps a group think and decide together. At C1 you can do both. The facilitator’s main tools are simple: **open, neutral questions** that do not suggest an answer, **paraphrasing** to check that you and the group have understood, and **summarising** to show where the discussion has got to.' },
          { t: 'table', caption: 'Facilitating phrases', explain: ['head', 'col0'], quiz: true, head: ['Purpose', 'Phrase'], rows: [
            ['Open the discussion', 'What would a good outcome look like for you?'],
            ['Dig deeper', 'Could you say a bit more about what you mean by that?'],
            ['Paraphrase', 'So, if I’ve understood you correctly, your concern is the timing rather than the cost.'],
            ['Check a paraphrase', 'Is that a fair summary of your position?'],
            ['Link two speakers', 'That ties in with what Nadia said earlier about the budget.'],
            ['Summarise the discussion', 'Let me just capture where we are. We seem to agree on the aim, but not yet on the method.'],
          ] },
        ],
        [
          { t: 'text', md: 'A **leading question** pushes people towards one answer: *Don’t you think we should delay?* A **neutral question** leaves the answer open: *How do you feel about the timing?* In a workshop, neutral questions get honest answers; leading ones get polite agreement.' },
          { t: 'examples', items: [
            { s: '**What are the main obstacles**, as you see them?', n: 'Open and neutral: it invites the person’s own view.' },
            { s: '**Surely** we all agree that the deadline is unrealistic?', n: 'Leading: *surely* expects agreement.' },
            { s: '**So what you’re saying is that** the process works, but people don’t know about it.', n: 'Paraphrase: say the idea again in your own words.' },
            { s: '**Correct me if I’m wrong, but** I think we’ve heard two different proposals.', n: 'A modest way to summarise and invite corrections.' },
          ] },
          { t: 'tip', art: 'owl', md: 'A good paraphrase is shorter than the original and uses different words. If it repeats the speaker’s words exactly, it only shows that you were listening, not that you understood.' },
        ],
        [
          { t: 'ex', kind: 'odd', h: 'Which question is the odd one out? Three are neutral and one is leading.', items: [
            { o: ['Wouldn’t it be better to cancel the event?', 'How do you feel about the event?', 'What options do we have for the event?', 'What would make the event a success?'], why: '*Wouldn’t it be better…?* expects the answer *yes*: it is leading.' },
            { o: ['Surely nobody wants another reorganisation?', 'What has your experience of reorganisations been?', 'What worries you most about the changes?', 'How could we make the changes easier?'], why: '*Surely* tells people what they should think.' },
            { o: ['You agree that the old system was a disaster, don’t you?', 'What worked well in the old system?', 'What would you change about the old system?', 'How did the old system affect your work?'], why: 'The question tag *don’t you?* pushes people to agree.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match each phrase to what the facilitator is doing.', pairs: [
            ['Could you say a bit more about that?', 'asking someone to go deeper'],
            ['So your concern is the timing, not the cost?', 'paraphrasing'],
            ['That ties in with what Yusuf said.', 'linking two speakers'],
            ['Let me just capture where we are.', 'summarising'],
            ['What would a good outcome look like?', 'opening the discussion'],
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the word that completes each phrase.', items: [
            { q: 'If I’ve understood you ___, the issue is the training, not the software.', o: ['correctly', 'rightly', 'exactly'], why: 'The fixed phrase is *if I’ve understood you correctly*.' },
            { q: 'Is that a ___ summary of what you said?', o: ['fair', 'just', 'right'], why: 'We say *a fair summary*: accurate and balanced.' },
            { q: 'Correct me if I’m ___, but we seem to have two proposals.', o: ['wrong', 'mistake', 'false'], why: 'The fixed phrase is *correct me if I’m wrong*.' },
            { q: 'That ties ___ with the point Grace made earlier.', o: ['in', 'up', 'on'], why: '*Tie in with* means connect to.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Could you say a bit more about what you mean?', why: 'A polite request to go deeper: *say a bit more about*.' },
            { a: 'Let me just capture where we are so far.', why: '*Capture where we are* means summarise the discussion up to now.' },
            { a: 'What would a good outcome look like for you?', why: 'An open question that starts with the group’s aims.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Can everyone live with that?',
      about: 'Build consensus and manage people who talk too much or too little.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: '**Consensus** does not mean that everyone loves the decision. It means that everyone can **live with** it and nobody will block it. A facilitator looks for **common ground**, keeps one voice from **dominating** and makes room for quieter people. When a topic cannot be solved now, it is **parked**: written down and dealt with later.' },
          { t: 'table', caption: 'Managing the group', explain: ['head', 'col0'], head: ['Situation', 'Phrase'], rows: [
            ['Someone dominates', 'Can I just stop you there? I’d like to hear from a few other people.'],
            ['Someone is silent', 'Bilal, you’ve worked on this for years. What’s your take?'],
            ['The group goes round in circles', 'I sense we’re going round in circles. Shall we try a different angle?'],
            ['A topic is off track', 'That’s important. Let’s park it and come back to it at the end.'],
            ['Look for common ground', 'Where do we actually agree?'],
            ['Test consensus', 'Is there anyone who couldn’t live with this?'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'A workshop on flexible working', lines: [
            { who: 'Priya', s: 'So we have two proposals on the table: two fixed office days for everyone, or each team chooses its own days.' },
            { who: 'Gareth', s: 'Fixed days are the only sensible option. If every team does its own thing, we’ll never see each other. I’ve said this for months, and frankly…' },
            { who: 'Priya', s: 'Can I just stop you there, Gareth? You’ve made your position very clear, and I’d like to hear from a few others. Mei, what’s your take?' },
            { who: 'Mei', s: 'I see Gareth’s point, but my team works with clients in Asia. A fixed Monday would be very hard for us.' },
            { who: 'Priya', s: 'Thank you. So, where do we actually agree? It sounds as if everyone wants teams to meet in person regularly.' },
            { who: 'Gareth', s: 'Well, yes. That’s really the whole point.' },
            { who: 'Priya', s: 'Then here’s a suggestion: one fixed day for the whole office, and one day each team chooses. Is there anyone who couldn’t live with that?' },
            { who: 'Mei', s: 'I could live with that, as long as the fixed day isn’t Monday.' },
            { who: 'Priya', s: 'Noted. Let’s park the choice of day and come back to it once we’ve agreed the principle.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Think about the workshop. True or false?', items: [
            { q: 'Priya lets Gareth finish his long point.', a: 'f', why: 'She stops him politely: *Can I just stop you there?*' },
            { q: 'Mei rejects Gareth’s idea without any acknowledgement.', a: 'f', why: 'She says *I see Gareth’s point* before giving her reason.' },
            { q: 'Priya finds something that both sides agree on.', a: 't', why: 'Everyone wants teams to meet in person regularly.' },
            { q: 'The group decides which day will be the fixed day.', a: 'f', why: 'The choice of day is parked for later.' },
          ] },
          { t: 'ex', kind: 'build', h: 'Build the facilitator’s sentence. Two words do not belong.', items: [
            { a: 'Is there anyone who couldn’t live with this?', extra: ['without', 'must'], why: '*Live with* something: accept it even if it is not your first choice.' },
            { a: 'Let’s park that and come back to it later.', extra: ['stop', 'over'], why: '*Park* a topic: put it aside to discuss later.' },
            { a: 'I sense we’re going round in circles.', extra: ['turning', 'about'], why: '*Go round in circles*: keep discussing without making progress.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'You are facilitating. Choose the best response.', items: [
            { q: 'One manager has spoken for ten minutes and others look frustrated.', o: ['Thank you, Tarek. I’d like to bring in a few other voices now.', 'Tarek, please be quiet now.', 'Does anyone else agree with Tarek?'], why: 'Thank the speaker, then open the floor to others.' },
            { q: 'Two people disagree, but both want lower costs.', o: ['It sounds as if you both want to reduce costs. Can we start from there?', 'One of you must be wrong.', 'Let’s vote and move on.'], why: 'Start from the common ground before discussing the differences.' },
            { q: 'Someone raises an important issue that is not on today’s agenda.', o: ['That’s an important point. Let’s park it and return to it at the end.', 'That has nothing to do with this meeting.', 'Let’s discuss that now instead.'], why: '*Park* it: recognise its value without losing the focus.' },
            { q: 'You want to check whether the group can accept a proposal.', o: ['Is there anyone who couldn’t live with this?', 'Everyone loves this, right?', 'So we all agree, then.'], why: 'Asking who *couldn’t* accept it gives people a safe way to object.' },
          ] },
          { t: 'ex', kind: 'memory', h: 'Find the pairs: each expression and its meaning.', pairs: [
            ['common ground', 'shared views'],
            ['park a topic', 'leave it for later'],
            ['live with', 'accept'],
            ['dominate', 'talk too much'],
            ['go round in circles', 'make no progress'],
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Why good facilitators talk less',
      about: 'Read an article about the facilitator’s role in a group discussion.',
      art: 'mug',
      spreads: [
        [
          { t: 'reading', title: 'The quiet person at the front of the room', md: 'Ask people to describe the worst workshop they have attended, and the same figure tends to appear: the facilitator who could not stop talking. They had prepared slides, a framework and a set of conclusions, and the participants spent the day being steered towards them. Everyone left politely, and nothing changed.\n\nThe best facilitators, by contrast, are often the quietest people in the room. Their job is not to supply answers but to create the conditions in which the group can find its own. That sounds modest, but it is extremely demanding. It requires the discipline to ask a question and then wait, sometimes for an uncomfortable length of time, rather than filling the silence.\n\nSilence, in fact, is one of the facilitator’s most underrated tools. People who think before they speak, and they are often the ones with the most considered views, need a gap in the conversation before they will step into it. A facilitator who rushes to the next question hands the floor back to whoever speaks fastest.\n\nNeutrality matters just as much. Once participants sense that the facilitator favours one outcome, they stop saying what they think and start guessing what is wanted. This is why experienced facilitators avoid praising some contributions more than others and paraphrase every view with the same care, including the ones they personally disagree with.\n\nNone of this means the facilitator is passive. They decide when a discussion has gone far enough, when a topic should be parked and when the group is ready to test a decision. But they intervene to manage the process, not to influence the content. The group should leave feeling that the conclusions were theirs, because they were.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'In the worst workshops, the facilitator already had the conclusions in mind.', a: 't', why: 'They had prepared “a set of conclusions” and steered people towards them.' },
            { q: 'The writer thinks that facilitation is an easy job.', a: 'f', why: 'The writer says it is “extremely demanding”.' },
            { q: 'Most facilitators have had formal training.', a: 'ng', why: 'The article does not mention training.' },
            { q: 'Silence helps people who need time to think before speaking.', a: 't', why: 'They “need a gap in the conversation before they will step into it”.' },
            { q: 'A good facilitator never interrupts the discussion.', a: 'f', why: 'They intervene to manage the process, for example to park a topic.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language in the article.', items: [
            { q: '“Silence is one of the facilitator’s most underrated tools.” What does underrated mean?', o: ['More useful than people think.', 'Used too often.', 'Difficult to learn.'], why: '*Underrated*: not valued as highly as it should be.' },
            { q: '“…hands the floor back to whoever speaks fastest.” What does have the floor mean?', o: ['Have the right to speak.', 'Leave the room.', 'Make the final decision.'], why: 'In a meeting, the person who *has the floor* is the one speaking.' },
            { q: 'What is the difference between process and content in the last paragraph?', o: ['Process is how the group discusses; content is what it decides.', 'Process is the agenda; content is the minutes.', 'Process is the slides; content is the questions.'], why: 'The facilitator manages *how* the discussion runs, not *what* the group concludes.' },
          ] },
          { t: 'ex', kind: 'bank', h: 'Complete the sentences with words from the article.', extra: ['passive', 'framework'], items: [
            { q: 'A facilitator must stay ___ and not favour one outcome.', a: 'neutral', why: '*Neutral*: not on any side.' },
            { q: 'Participants stop speaking openly if they are ___ towards an answer.', a: 'steered', why: '*Steer* someone towards something: guide them in a direction.' },
            { q: 'The facilitator should ___ only to manage the process.', a: 'intervene', why: '*Intervene*: step in to change what is happening.' },
            { q: 'Quiet people often have the most ___ views.', a: 'considered', why: '*Considered*: carefully thought about.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'Which question is neutral?', o: ['How do you feel about the new schedule?', 'Surely the new schedule is better?', 'You prefer the new schedule, don’t you?'], why: 'A neutral question does not suggest the answer.' },
      { q: 'So, if I’ve understood you ___, your concern is the cost.', o: ['correctly', 'rightly', 'fairly'], why: 'The fixed phrase is *if I’ve understood you correctly*.' },
      { q: 'Is there anyone who couldn’t live ___ this?', o: ['with', 'by', 'for'], why: '*Live with* something: accept it.' },
      { q: 'I sense we’re going round in ___.', o: ['circles', 'rounds', 'rings'], why: 'The idiom is *go round in circles*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the facilitator’s phrases with one word.', items: [
      { q: 'Could you say a bit ___ about what you mean?', a: ['more'], why: '*Say a bit more about* something.' },
      { q: 'That’s important. Let’s ___ it and come back to it later.', a: ['park'], why: '*Park* a topic: leave it for later.' },
      { q: 'Where do we have common ___?', a: ['ground'], why: '*Common ground*: the points where people agree.' },
      { q: 'Correct me if I’m ___, but we have two proposals.', a: ['wrong'], why: 'The fixed phrase is *correct me if I’m wrong*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Is that a fair summary of your position?', why: 'Check a paraphrase: *a fair summary of*.' },
      { a: 'Can I just stop you there?', why: 'A polite way to interrupt someone who is dominating.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the words and their meanings.', pairs: [
      ['a facilitator', 'someone who helps a group think and decide'],
      ['consensus', 'a decision that everyone can accept'],
      ['a leading question', 'a question that suggests the answer'],
      ['intervene', 'step in to change what is happening'],
    ] },
  ],
};
