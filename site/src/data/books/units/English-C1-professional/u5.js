// English C1 for work, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Managing change and conflict',
  goal: 'Announce change, respond to concerns and help colleagues resolve conflict.',
  art: 'sun',
  tags: { skills: ['speaking', 'grammar', 'vocabulary', 'reading'], topics: ['change-management', 'announcements', 'future-forms', 'conflict', 'mediation', 'past-modals'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'Announcing change',
      about: 'Announce a change clearly with formal future forms and respond to people’s concerns.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'People rarely resist change itself; they resist uncertainty. A good announcement answers the questions in everyone’s head: **what** is changing, **why**, **when**, **what stays the same** and **what happens next**. It also **acknowledges** how people may feel, without pretending that everyone will be happy.' },
          { t: 'text', md: 'Formal announcements use a few future forms you will hear on the news and in official messages. *Be to* + verb describes an official plan or arrangement. *Be due to* gives a timetable. *Be set to* means that something is ready and very likely to happen.' },
          { t: 'examples', items: [
            { s: 'The two departments **are to merge** in the new year.', n: '*Be to*: an official decision or plan.' },
            { s: 'The new system **is due to go** live on 1 March.', n: '*Be due to*: planned for a particular time.' },
            { s: 'The changes **are set to affect** around two hundred staff.', n: '*Be set to*: likely, because everything is in place.' },
            { s: 'Staff **are not to** use the old system after that date.', n: '*Be not to*: a formal instruction or rule.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Responding to concerns', explain: ['head', 'col0'], quiz: true, head: ['Purpose', 'Phrase'], rows: [
            ['Acknowledge feelings', 'I appreciate that this is unsettling for many of you.'],
            ['Be honest about what you don’t know', 'I don’t have all the answers yet, but I will share them as soon as I do.'],
            ['Say what stays the same', 'What won’t change is the way we work with our clients.'],
            ['Explain the reason', 'The reason for this is that our two systems can no longer cope.'],
            ['Commit to next steps', 'You will hear from your manager by the end of the week.'],
            ['Invite questions', 'I’d rather you asked me directly than worried in silence.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Avoid promises you cannot keep, such as *nothing will change for you*. If you do not know yet, say so and say when you will know. Honest uncertainty builds more trust than false confidence.' },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the correct form.', items: [
            { q: 'The new office is due ___ open in September.', o: ['to', 'for', 'at'], why: '*Be due to* + base form.' },
            { q: 'The two teams ___ to merge, the director confirmed this morning.', o: ['are', 'will', 'have'], why: '*Be to* + base form: an official plan.' },
            { q: 'The changes are ___ to affect every department.', o: ['set', 'put', 'sure of'], why: '*Be set to*: very likely to happen.' },
            { q: 'Visitors are not ___ enter the site without a badge.', o: ['to', 'for', 'being'], why: '*Be not to*: a formal rule.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best response to the concern.', items: [
            { q: '“Will my job be safe?” You do not know yet.', o: ['I can’t give you a full answer today, but you will hear from me by Friday.', 'Don’t worry, nothing will happen to anyone.', 'That’s not something I can talk about.'], why: 'Be honest about what you do not know and say when you will know.' },
            { q: '“Why are we doing this at all?”', o: ['That’s a fair question. The reason is that our two systems can no longer cope with demand.', 'Because the directors decided.', 'It’s not really important why.'], why: 'Acknowledge the question, then explain the reason.' },
            { q: 'A colleague looks anxious after the announcement.', o: ['I appreciate this is a lot to take in. Would it help to talk it through?', 'You’ll get used to it.', 'Everyone else seems fine with it.'], why: 'Acknowledge the feeling and offer support.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Mediating a conflict',
      about: 'Help two colleagues resolve a conflict by reframing and looking back without blame.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: 'When you **mediate**, you help two people solve a conflict between them. You do not decide who is right. Your main tool is **reframing**: you take an accusation and turn it into a need. *You never tell me anything* becomes *You’d like to be kept informed earlier.* The facts stay; the blame goes.' },
          { t: 'table', caption: 'Reframing', explain: ['head'], head: ['What they say', 'How you reframe it'], rows: [
            ['She always ignores my emails.', 'So it’s important to you to get a reply.'],
            ['He’s completely disorganised.', 'You need to be able to rely on the plan.'],
            ['They dumped the whole project on us.', 'You’d have liked more time and support for the handover.'],
            ['Nobody here respects my experience.', 'You want your experience to be taken into account.'],
          ] },
        ],
        [
          { t: 'text', md: 'Looking back at what went wrong is useful only if it does not become a trial. **Past modals** let people talk about the past calmly. *Should have* + past participle says what would have been better. *Could have* says what was possible. *Needn’t have* says something was done but was not necessary. Using *we* rather than *you* shares the responsibility.' },
          { t: 'examples', items: [
            { s: 'We **should have agreed** the deadlines in writing.', n: 'What would have been better: shared, with *we*.' },
            { s: 'I **could have asked** for help earlier.', n: 'Admitting your own part makes it easier for the other person to do the same.' },
            { s: 'You **needn’t have redone** the whole report. A short note would have been enough.', n: 'It was done, but it was not necessary.' },
            { s: 'It **might have been better to** involve the client earlier.', n: 'A soft way to suggest a lesson for next time.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Compare *needn’t have done* and *didn’t need to do*. *You needn’t have come* means you came, but it was not necessary. *You didn’t need to come* usually means it was not necessary, and often that you did not come.' },
        ],
        [
          { t: 'dialogue', title: 'A mediation meeting', lines: [
            { who: 'Amara', s: 'Thank you both for coming. I’m not here to decide who’s right. I’d like each of you to explain how you see the situation. Omar, would you like to start?' },
            { who: 'Omar', s: 'Frankly, Rosa’s team never tells us when the orders change. We find out when the client calls us.' },
            { who: 'Amara', s: 'So what you need is to hear about changes before the client contacts you.' },
            { who: 'Omar', s: 'Exactly. That’s all I’m asking.' },
            { who: 'Rosa', s: 'But the client changes things at the last minute. We can’t pass on information we don’t have.' },
            { who: 'Amara', s: 'So the changes reach you late too. It sounds as if you’re both caught by the same problem.' },
            { who: 'Rosa', s: 'I suppose so. Looking back, we could have copied Omar’s team into the client emails.' },
            { who: 'Omar', s: 'And we should have raised this months ago instead of letting it build up.' },
            { who: 'Amara', s: 'That’s a good place to start. What would a simple fix look like for both of you?' },
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Think about the mediation. True or false?', items: [
            { q: 'Amara begins by saying who she thinks is right.', a: 'f', why: 'She says she is not there to decide who is right.' },
            { q: 'Amara turns Omar’s complaint into a need.', a: 't', why: '*So what you need is to hear about changes…*: a reframe.' },
            { q: 'Rosa’s team hides information on purpose.', a: 'f', why: 'They receive the changes late from the client too.' },
            { q: 'Both Rosa and Omar accept part of the responsibility.', a: 't', why: 'Rosa says *we could have copied…*; Omar says *we should have raised this*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with should have, could have or needn’t have and the verb in brackets.', items: [
            { q: 'We ___ (tell) the client sooner. It would have avoided the confusion.', a: ['should have told', 'should’ve told'], why: '*Should have* + past participle: what would have been better.' },
            { q: 'You ___ (print) the slides. Everyone had them on their laptops.', a: ['needn’t have printed', 'need not have printed'], why: 'It was done, but it was not necessary: *needn’t have* + past participle.' },
            { q: 'I ___ (ask) Leila for help, but I didn’t think of it.', a: ['could have asked', 'could’ve asked'], why: '*Could have*: it was possible, but it did not happen.' },
            { q: 'It might ___ (be) better to involve the team from the start.', a: ['have been'], why: '*Might have been better to*: a soft lesson for next time.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Does the sentence blame or reframe? Sort them.', groups: ['blames', 'reframes'], items: [
            { s: 'You never listen to anyone.', g: 0, why: '*You never* is an accusation.' },
            { s: 'You’d like your ideas to be heard.', g: 1, why: 'The complaint becomes a need.' },
            { s: 'It’s all your team’s fault.', g: 0, why: 'It puts all the blame on one side.' },
            { s: 'We should have agreed the process together.', g: 1, why: '*We* shares the responsibility.' },
            { s: 'He’s just lazy.', g: 0, why: 'A personal attack, not a description of the problem.' },
            { s: 'So timing is the main issue for you.', g: 1, why: 'It names the issue, not the person.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Two teams, one department',
      about: 'Read a case study of two teams that were merged.',
      art: 'dog',
      spreads: [
        [
          { t: 'reading', title: 'Case study: the merger that nearly failed', md: 'When a regional insurer decided to combine its claims team and its customer service team, the logic seemed obvious. Customers were tired of being passed between departments, and the two teams often handled the same case without knowing it. The new department was to open in January, and the announcement was made in a single all-staff email in early December.\n\nWithin weeks, the trouble began. Claims staff, used to careful, detailed work, felt they were being pushed to answer calls as fast as possible. Customer service staff felt that their new colleagues looked down on them. Small disagreements about procedures turned into open complaints, and two experienced people resigned before the spring.\n\nThe department’s new head, Nadia Brooks, later admitted that the problems had been predictable. “We should have involved both teams in designing the new process,” she said. “We told them what was going to happen, but we never asked them how it could work.”\n\nWhat turned things around was a series of facilitated sessions in which small mixed groups mapped out a typical customer case from start to finish. For the first time, each side saw the pressures the other faced. Claims staff realised that callers were often anxious and needed quick reassurance; customer service staff saw how one careless note could delay a payment for weeks. The groups agreed on a shared set of steps, and complaints between the teams fell sharply over the following months.\n\nLooking back, Brooks believes the merger was the right decision, delivered in the wrong way. Her advice to other managers is short: announce change in person, be honest about what you do not yet know, and give people a real part in shaping what happens next.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Customers had complained about being passed between departments.', a: 't', why: '“Customers were tired of being passed between departments.”' },
            { q: 'The change was announced at a meeting with all staff.', a: 'f', why: 'It was announced “in a single all-staff email”.' },
            { q: 'Two people left the company before the spring.', a: 't', why: '“Two experienced people resigned before the spring.”' },
            { q: 'Nadia Brooks had managed a merger before.', a: 'ng', why: 'The case study does not mention her past experience.' },
            { q: 'Brooks now thinks the merger was a mistake.', a: 'f', why: 'She believes it was “the right decision, delivered in the wrong way”.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language in the case study.', items: [
            { q: '“The new department was to open in January.” What does was to mean here?', o: ['It was officially planned to open in January.', 'It opened in January.', 'It should not have opened in January.'], why: '*Was to* + verb: an official plan in the past.' },
            { q: '“…felt that their new colleagues looked down on them.” What did they feel?', o: ['That their colleagues thought they were less important.', 'That their colleagues were watching them.', 'That their colleagues worked on a higher floor.'], why: '*Look down on* someone: think you are better than them.' },
            { q: 'What finally improved the situation?', o: ['Mixed groups working through a real customer case together.', 'A second email from the director.', 'Moving the teams to separate offices.'], why: 'The facilitated sessions helped each side see the other’s pressures.' },
          ] },
          { t: 'ex', kind: 'crossword', h: 'Complete the crossword with words from the unit.', words: [
            { a: 'mediate', clue: 'Help two people in a conflict to reach an agreement.' },
            { a: 'reframe', clue: 'Describe a complaint in a new, more neutral way.' },
            { a: 'merger', clue: 'When two teams or companies become one.' },
            { a: 'unsettling', clue: 'Making people feel anxious or uncertain.' },
            { a: 'blame', clue: 'Say that someone is responsible for something bad.' },
            { a: 'resign', clue: 'Leave your job by choice.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'The new system is due ___ go live in March.', o: ['to', 'for', 'at'], why: '*Be due to* + base form.' },
      { q: 'The two offices ___ to close next year, the company has announced.', o: ['are', 'will', 'do'], why: '*Be to*: an official plan.' },
      { q: 'You ___ booked a taxi. I could have driven you.', o: ['needn’t have', 'mustn’t have', 'couldn’t have'], why: 'It was done but not necessary: *needn’t have*.' },
      { q: 'A colleague says: “He never answers my emails.” The best reframe is:', o: ['So getting a reply is important to you.', 'Yes, he’s very rude.', 'Maybe you write too many emails.'], why: 'A reframe turns the complaint into a need, without blame.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'We ___ (consult) the team before the decision. That was our mistake.', a: ['should have consulted', 'should’ve consulted'], why: '*Should have* + past participle.' },
      { q: 'I appreciate that this is ___ for many of you. (= making you feel uncertain)', a: ['unsettling'], why: '*Unsettling*: making people anxious or uncertain.' },
      { q: 'The changes are ___ to affect around fifty people. (= very likely)', a: ['set', 'expected', 'likely'], why: '*Be set to*: likely to happen.' },
      { q: 'I ___ (call) you, but I didn’t want to disturb you.', a: ['could have called', 'could’ve called'], why: '*Could have*: possible, but it did not happen.' },
    ] },
    { t: 'ex', kind: 'sort', h: 'Does the sentence blame or reframe? Sort them.', groups: ['blames', 'reframes'], items: [
      { s: 'It’s your fault the project is late.', g: 0, why: 'It puts the blame on one person.' },
      { s: 'You need to be able to rely on the dates.', g: 1, why: 'It turns the complaint into a need.' },
      { s: 'We should have checked the plan together.', g: 1, why: '*We* shares the responsibility.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the words and their meanings.', pairs: [
      ['mediate', 'help two sides solve a conflict'],
      ['look down on', 'think you are better than someone'],
      ['acknowledge', 'show that you recognise something'],
    ] },
  ],
};
