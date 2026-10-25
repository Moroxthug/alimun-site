// English B2 for work, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Leading meetings',
  goal: 'Chair meetings and write clear minutes.',
  art: 'teacup',
  tags: { skills: ['speaking', 'writing', 'grammar', 'reading'], topics: ['meetings', 'chairing', 'minutes', 'passive', 'reported-speech'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'Chairing a meeting',
      about: 'Open a meeting, keep it on track and close it with clear decisions.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'The person who leads a meeting is the **chair**. A good chair does three jobs: **opens** the meeting with a clear aim, **steers** the discussion so that it stays on the agenda and everyone speaks, and **closes** it by summarising what has been decided and who will do what.' },
          { t: 'table', caption: 'Chairing phrases', explain: ['head', 'col0'], quiz: true, head: ['Job', 'Phrase'], rows: [
            ['Open the meeting', 'Right, let’s get started. The aim of today’s meeting is to agree on the budget.'],
            ['Introduce an item', 'Let’s turn to the first item on the agenda.'],
            ['Bring someone in', 'Maya, we haven’t heard from you yet. What’s your view?'],
            ['Stop a side discussion', 'That’s a good point, but let’s not get side-tracked.'],
            ['Move on', 'I think we’ve covered that. Shall we move on?'],
            ['Manage time', 'We’re running short of time, so let’s keep this brief.'],
            ['Close the meeting', 'Let’s wrap up there. To sum up, we’ve agreed to…'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'The weekly project meeting', lines: [
            { who: 'Grace', s: 'Right, let’s get started. The aim today is to decide on the launch date. Can we turn to the first item?' },
            { who: 'Ravi', s: 'Before we do, has anyone heard about the new parking rules? Apparently from next month…' },
            { who: 'Grace', s: 'That’s worth discussing, Ravi, but let’s not get side-tracked. Could we come back to it under any other business?' },
            { who: 'Ravi', s: 'Of course, sorry. On the launch date, I think the fifteenth is realistic.' },
            { who: 'Grace', s: 'Thanks. Tomasz, we haven’t heard from you yet. What’s your view?' },
            { who: 'Tomasz', s: 'Testing won’t be finished by then. I’d say the twenty-second at the earliest.' },
            { who: 'Grace', s: 'OK. So, to sum up, we’re agreed on the twenty-second, and Tomasz will confirm the testing schedule by Friday. Is that right?' },
            { who: 'Ravi', s: 'Yes, that works for me.' },
          ] },
          { t: 'tip', art: 'owl', md: '*Any other business*, often written *AOB*, is the last item on many agendas. It is the place for short topics that are not on the agenda.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each phrase to what the chair is doing.', pairs: [
            ['The aim of today’s meeting is to…', 'opening the meeting'],
            ['Sana, what’s your view on this?', 'bringing someone in'],
            ['Let’s not get side-tracked.', 'stopping a side discussion'],
            ['We’re running short of time.', 'managing time'],
            ['To sum up, we’ve agreed to…', 'closing the meeting'],
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the meeting. True or false?', items: [
            { q: 'Grace discusses the parking rules straight away.', a: 'f', why: 'She suggests coming back to them under any other business.' },
            { q: 'Grace asks Tomasz for his opinion because he has not spoken.', a: 't', why: '“Tomasz, we haven’t heard from you yet.”' },
            { q: 'The team chooses the fifteenth as the launch date.', a: 'f', why: 'Tomasz says testing will not be finished, so they agree on the twenty-second.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'You are chairing. Choose the best phrase.', items: [
            { q: 'Two people have been discussing a detail for ten minutes.', o: ['Could we take this offline and move on to the next item?', 'Stop talking, both of you.', 'This is boring for everyone.'], why: '*Take this offline* means discuss it later, outside the meeting.' },
            { q: 'A quiet colleague has not said anything.', o: ['Leila, I’d be interested to hear your view.', 'Leila, why are you so quiet?', 'Leila, say something.'], why: 'Invite the person in with a friendly, open question.' },
            { q: 'There are only five minutes left.', o: ['We’re running short of time, so let’s focus on the key decision.', 'Time is finished.', 'We have no more minutes.'], why: '*Running short of time* is the natural phrase.' },
            { q: 'You want to check that everyone agrees.', o: ['Can I take it that we’re all agreed?', 'Everybody agrees, yes or no?', 'You all agree with me.'], why: '*Can I take it that…?* checks agreement politely.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Let’s turn to the next item on the agenda.', why: '*Turn to* an item: start talking about it.' },
            { a: 'Could we come back to that later?', why: 'A polite way to postpone a topic.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Writing the minutes',
      about: 'Record decisions with the passive and report what people said.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: '**Minutes** are the written record of a meeting. They are short, neutral and in the past. Two structures appear again and again. The **passive** focuses on the decision, not the person: *The budget **was approved**.* *It **was agreed** that…* **Reported speech** tells readers what someone said, usually with the tense moved one step back.' },
          { t: 'table', caption: 'Reported speech: tenses move back', explain: ['head'], head: ['What was said', 'In the minutes'], rows: [
            ['“Sales are rising.”', 'Ana reported that sales were rising.'],
            ['“We have finished the tests.”', 'Tom said that the team had finished the tests.'],
            ['“The supplier will send a new quote.”', 'Ji-woo said that the supplier would send a new quote.'],
            ['“We can’t meet the deadline.”', 'Ben explained that they could not meet the deadline.'],
            ['“Can we delay the launch?”', 'Ruth asked whether the launch could be delayed.'],
          ] },
        ],
        [
          { t: 'text', md: 'Choose a reporting verb that shows the purpose: *reported*, *explained*, *pointed out*, *suggested*, *proposed*, *confirmed*, *agreed*. Be careful with *suggest*: use *-ing* or a *that* clause, never *to* + verb.' },
          { t: 'examples', items: [
            { s: 'Marta **suggested postponing** the launch.', n: '*Suggest* + *-ing*.' },
            { s: 'Marta **suggested that** the launch **should be** postponed.', n: '*Suggest that* + *should* + verb. Not: *suggested to postpone*.' },
            { s: '**It was agreed that** the team **would** review the plan in May.', n: 'A very common sentence in minutes: passive opening + *would*.' },
            { s: 'Paul **asked whether** the budget **had been** approved.', n: 'Reported question: *whether* or *if*, and normal word order.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Minutes often use names or initials and the past tense throughout. Keep them neutral: write *Kenji disagreed*, not *Kenji was very negative*.' },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the passive form of the verb in brackets.', items: [
            { q: 'The new budget ___ (approve) at the end of the meeting.', a: ['was approved'], why: 'Past simple passive: *was* + past participle.' },
            { q: 'It ___ (agree) that the office would close at four on Fridays.', a: ['was agreed'], why: '*It was agreed that…* is a fixed opening in minutes.' },
            { q: 'A final decision ___ (make) at the next meeting.', a: ['will be made'], why: 'Future passive: *will be* + past participle.' },
            { q: 'The proposal ___ (already / send) to the directors.', a: ['has already been sent', '’s already been sent', 'had already been sent'], why: 'Present perfect passive: *has been* + past participle, with *already* after *has*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the correct form.', items: [
            { q: 'Sofia suggested ___ an external trainer.', o: ['hiring', 'to hire', 'hire'], why: '*Suggest* + *-ing*. *Suggest to do* is a common mistake.' },
            { q: 'Dev asked whether the deadline ___ moved.', o: ['could be', 'can it be', 'could it be'], why: 'In a reported question, the word order is normal: subject + verb.' },
            { q: 'Anna confirmed that the client ___ the contract the day before.', o: ['had signed', 'has signed', 'signs'], why: 'An earlier past action in reported speech: past perfect.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Report these words in the style of minutes. Move the tense back.', items: [
            { q: '“The figures are wrong.” Lisa pointed out that the figures ___ wrong.', a: ['were'], why: '*Are* moves back to *were*.' },
            { q: '“We will need two more weeks.” Omar said that they ___ need two more weeks.', a: ['would'], why: '*Will* moves back to *would*.' },
            { q: '“I have spoken to the supplier.” Jin explained that he ___ spoken to the supplier.', a: ['had'], why: 'Present perfect moves back to past perfect: *had spoken*.' },
            { q: '“We can’t afford a new system.” Rosa said that they ___ afford a new system.', a: ['couldn’t', 'could not'], why: '*Can’t* moves back to *couldn’t*.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Each sentence from a set of minutes has one mistake. Tap it.', items: [
            { s: 'Hannah suggested [to move] the meeting to Thursday.', why: '*Suggest* + *-ing*: *suggested moving*.' },
            { s: 'Luis asked whether the report [was it] ready.', why: 'Reported questions use normal word order: *whether the report was ready*.' },
            { s: 'It [agreed] that the prices would stay the same.', why: 'It needs the passive: *It was agreed that…*' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Minutes of a team meeting',
      about: 'Read the minutes of a marketing team meeting.',
      art: 'cat',
      spreads: [
        [
          { t: 'reading', title: 'Marketing team meeting, 4 November', md: '**Present:** Hana Sato (chair), Carlos Mendes, Bethany Cole, Yusuf Demir\n**Apologies:** Priya Nair\n\n**Autumn campaign results**\n\nHana reported that the autumn campaign had produced far more website visits than expected, but that sales had only risen slightly. Carlos pointed out that most new visitors had left the site at the payment page. He suggested testing a simpler checkout before the next campaign. It was agreed that the web team would be asked for a quote.\n\n**Social media budget**\n\nBethany proposed moving part of the print budget to social media, since the print adverts had brought in very few enquiries. Yusuf disagreed. He explained that many older customers still responded to printed brochures and said that cutting them completely would be a risk. After some discussion, it was decided that the print budget would be reduced by a quarter, not removed, and that the results would be reviewed in March.\n\n**Office move**\n\nHana confirmed that the team would move to the second floor on 2 December. Staff were reminded that personal items must be packed by 29 November.\n\n**Any other business**\n\nYusuf asked whether the team could use the large meeting room for the January planning day. Hana said she would check availability.\n\n**Action points**\n\nCarlos to request a quote for a new checkout by 11 November. Bethany to prepare a revised budget for the next meeting. Hana to book a room for the planning day.\n\n**Next meeting:** 18 November, 10 am' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'The campaign brought a large rise in sales.', a: 'f', why: 'Sales “had only risen slightly”.' },
            { q: 'Carlos thinks the payment page is part of the problem.', a: 't', why: 'Most new visitors left the site at the payment page.' },
            { q: 'The team decided to stop print adverts completely.', a: 'f', why: 'The print budget will be reduced by a quarter, not removed.' },
            { q: 'Priya Nair was on holiday.', a: 'ng', why: 'She sent apologies, but the minutes do not say why.' },
            { q: 'Hana will find out if the large meeting room is free.', a: 't', why: '“Hana said she would check availability.”' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language in the minutes.', items: [
            { q: 'Why do the minutes say “it was decided that…” and not “Hana decided…”?', o: ['The decision belongs to the whole team, so the passive is used.', 'Hana wanted to hide her decision.', 'The passive is more informal.'], why: 'The passive puts the focus on the decision, not on one person.' },
            { q: 'What did Hana actually say at the meeting? “Hana said she would check availability.”', o: ['“I’ll check availability.”', '“I checked availability.”', '“I would have checked availability.”'], why: '*Would* in reported speech comes from *will* in direct speech.' },
            { q: 'What are “action points”?', o: ['Tasks that named people must do after the meeting.', 'The main points of the discussion.', 'Questions for the next meeting.'], why: 'Each action point says who does what, often by when.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the two passive verbs.', items: [
            { s: 'It [was agreed] that the web team [would be asked] for a quote.', why: '*Was agreed* and *would be asked* are passive: *be* + past participle.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'You are chairing and want to begin: “Right, let’s ___ started.”', o: ['get', 'make', 'go'], why: 'The fixed phrase is *Let’s get started*.' },
      { q: 'A colleague changes the subject. You say: “Let’s not get ___.”', o: ['side-tracked', 'side-stepped', 'off-tracked'], why: '*Get side-tracked*: move away from the main topic.' },
      { q: 'Nina suggested ___ the report to the client.', o: ['sending', 'to send', 'send'], why: '*Suggest* + *-ing*.' },
      { q: 'Marek asked if the room ___ booked.', o: ['had been', 'has it been', 'had it been'], why: 'Reported question: normal word order, tense moved back.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences from a set of minutes.', items: [
      { q: 'It was ___ that the launch would take place in May.', a: ['agreed', 'decided'], why: '*It was agreed that…* or *It was decided that…*' },
      { q: 'The proposal ___ (accept) by everyone present.', a: ['was accepted'], why: 'Past simple passive.' },
      { q: '“We will finish on Friday.” Kai said the team ___ finish on Friday.', a: ['would'], why: '*Will* moves back to *would*.' },
      { q: 'We’re running short ___ time, so let’s move on.', a: ['of'], why: '*Run short of time*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'It was agreed that prices would stay the same.', why: '*It was agreed that* + clause with *would*.' },
      { a: 'Shall we move on to the next item?', why: '*Shall we* + verb: a suggestion from the chair.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the words and their meanings.', pairs: [
      ['the chair', 'the person who leads the meeting'],
      ['the agenda', 'the list of topics for the meeting'],
      ['the minutes', 'the written record of the meeting'],
      ['apologies', 'the names of people who could not attend'],
    ] },
  ],
};
