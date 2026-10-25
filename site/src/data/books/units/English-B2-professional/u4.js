// English B2 for work, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Reports and proposals',
  goal: 'Write structured reports and proposals.',
  art: 'snail',
  tags: { skills: ['writing', 'vocabulary', 'grammar', 'reading'], topics: ['reports', 'proposals', 'formal-register', 'recommendations', 'describing-results'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'Structure and formal register',
      about: 'Organise a report in clear sections and write it in a formal style.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'A work report answers a question for a reader who is busy. It is divided into sections with headings, so the reader can find what they need quickly. Many readers only read the beginning and the recommendations, so these parts must be clear on their own. A **proposal** has a similar structure, but its aim is to persuade the reader to approve a plan.' },
          { t: 'table', caption: 'Typical sections of a report', explain: ['head', 'col1'], head: ['Section', 'What it contains'], rows: [
            ['Introduction', 'The purpose of the report and how the information was collected.'],
            ['Background', 'The situation or problem that led to the report.'],
            ['Findings', 'The facts and results, without personal opinion.'],
            ['Conclusions', 'What the findings mean.'],
            ['Recommendations', 'What the writer advises the reader to do.'],
          ] },
        ],
        [
          { t: 'text', md: 'Reports use a **formal register**. Writers avoid contractions, prefer single verbs to phrasal verbs, and often use impersonal structures such as *It was found that…* or *This report aims to…* instead of *I* and *we*.' },
          { t: 'table', caption: 'Neutral and formal', explain: ['head'], quiz: true, head: ['Neutral', 'Formal'], rows: [
            ['find out', 'establish / discover'],
            ['look into', 'investigate'],
            ['go up', 'increase / rise'],
            ['cut down on', 'reduce'],
            ['get', 'obtain / receive'],
            ['a lot of', 'a large number of / a significant amount of'],
            ['We think that…', 'It appears that…'],
          ] },
          { t: 'tip', art: 'owl', md: 'Use *a large number of* with countable nouns (*a large number of complaints*) and *a significant amount of* with uncountable nouns (*a significant amount of time*).' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each neutral verb to its formal equivalent.', pairs: [
            ['look into', 'investigate'],
            ['cut down on', 'reduce'],
            ['find out', 'establish'],
            ['go up', 'increase'],
            ['carry out', 'conduct'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Which sentence is more suitable for a formal report?', items: [
            { q: '', o: ['The number of complaints increased in the third quarter.', 'Complaints went up quite a bit in the third quarter.'], why: '*Increased* is a formal single verb; *went up quite a bit* is conversational.' },
            { q: '', o: ['It was found that most staff do not use the new system.', 'We found out that loads of people don’t use the new system.'], why: 'Impersonal passive, no contraction, no informal *loads of*.' },
            { q: '', o: ['This report aims to evaluate the new booking process.', 'In this report I’m going to have a look at the new booking process.'], why: '*This report aims to* is the standard formal opening.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Rewrite the words in brackets in a formal style. Write one word.', items: [
            { q: 'The committee will ___ (look into) the causes of the delay.', a: ['investigate', 'examine'], why: '*Investigate* is the formal verb for *look into*.' },
            { q: 'The aim is to ___ (cut down on) energy costs by next year.', a: ['reduce', 'lower'], why: '*Reduce* is the formal verb for *cut down on*.' },
            { q: 'Staff numbers ___ (went up) by ten per cent last year.', a: ['increased', 'rose', 'grew'], why: '*Increased* or *rose*: formal and precise.' },
            { q: 'Further information can be ___ (got) from the HR department.', a: ['obtained'], why: '*Obtain* is the formal verb for *get*.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Each sentence from a report has one informal expression. Tap it.', items: [
            { s: 'The survey showed that [loads of] customers were unhappy with the waiting times.', why: '*Loads of* is informal. Use *a large number of* or *many*.' },
            { s: 'The project team [didn’t] receive the data until March.', why: 'Formal reports avoid contractions: *did not*.' },
            { s: 'Management should [sort out] the problem with the printers as soon as possible.', why: '*Sort out* is informal. Use *resolve* or *solve*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Results and recommendations',
      about: 'Describe survey results precisely and make clear recommendations.',
      art: 'pretzel',
      spreads: [
        [
          { t: 'text', md: 'When you present results, be precise but readable. Instead of a long list of percentages, use **quantity expressions** and give the exact figure in brackets when it matters: *Just over half of the staff (54%) work from home at least once a week.*' },
          { t: 'table', caption: 'Describing proportions', explain: ['head', 'col1'], quiz: true, head: ['Expression', 'Roughly'], rows: [
            ['almost all', 'more than 90%'],
            ['the vast majority', 'around 80% or more'],
            ['just over half', 'a little more than 50%'],
            ['just under half', 'a little less than 50%'],
            ['about a quarter', 'around 25%'],
            ['a small minority', 'a small group, often less than 10%'],
          ] },
          { t: 'tip', art: 'owl', md: '*The majority of* + a plural noun takes a plural verb: *The majority of respondents **were** satisfied.* Results are usually reported in the past: *The survey **showed** that…*' },
        ],
        [
          { t: 'text', md: 'Recommendations tell the reader what to do. Use *recommend* + *-ing*, or *recommend that* + subject + (*should*) + base form. In formal writing, the base form is used even after *he*, *she* or *it*: *We recommend that the company **introduce** a new policy.* Never write *recommend to* + verb.' },
          { t: 'examples', items: [
            { s: 'We **recommend introducing** a shorter approval process.', n: '*Recommend* + *-ing*.' },
            { s: 'We recommend **that** the team **should receive** further training.', n: '*Recommend that* + subject + *should* + base form.' },
            { s: '**It is recommended that** the trial **be extended** until June.', n: 'Impersonal and very formal: the base form *be*, not *is*.' },
            { s: 'We would **advise against** changing supplier at this stage.', n: '*Advise against* + *-ing*: a negative recommendation.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the expression that matches the figure.', items: [
            { q: '___ of customers (52%) said they would order again.', o: ['Just over half', 'Just under half', 'The vast majority'], why: '52% is a little more than half.' },
            { q: '___ of staff (6%) said they had never used the intranet.', o: ['A small minority', 'About a quarter', 'Just under half'], why: '6% is a small group: *a small minority*.' },
            { q: '___ of respondents (96%) found the new website easy to use.', o: ['Almost all', 'Just over half', 'About a quarter'], why: '96% is nearly everyone: *almost all*.' },
            { q: 'The majority of participants ___ that the training was useful.', o: ['felt', 'feels', 'was feeling'], why: 'Results are reported in the past, and *the majority of participants* is plural.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the recommendations. Use the verb in brackets.', items: [
            { q: 'We recommend ___ (review) the budget every three months.', a: ['reviewing'], why: '*Recommend* + *-ing*.' },
            { q: 'It is recommended that the policy ___ (be) updated before January.', a: ['be', 'should be'], why: 'After *It is recommended that*, use the base form *be* or *should be*.' },
            { q: 'We would advise against ___ (hire) new staff until the summer.', a: ['hiring'], why: '*Advise against* + *-ing*.' },
            { q: 'We recommend that each department ___ (appoint) a contact person.', a: ['appoint', 'should appoint'], why: 'Formal: base form after *recommend that*, even with a singular subject.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'This report aims to evaluate the pilot project.', why: 'A standard formal opening: *This report aims to* + verb.' },
            { a: 'The majority of staff were in favour.', why: '*The majority of* + plural noun + plural verb.' },
            { a: 'We recommend extending the trial by three months.', why: '*Recommend* + *-ing*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Extract from a proposal',
      about: 'Read part of a proposal for a hybrid working trial.',
      art: 'mug',
      spreads: [
        [
          { t: 'reading', title: 'Proposal: a hybrid working trial for the customer service team', md: '**Introduction**\n\nThis proposal recommends a six-month trial of hybrid working for the customer service team, in which staff would work from home on two days a week. It is based on a staff survey carried out in September and on interviews with three team leaders.\n\n**Background**\n\nOver the past year, the team has found it increasingly difficult to recruit and keep staff. Four experienced advisers left in the last twelve months, and in their exit interviews all four mentioned the long journey to the office. At the same time, the current office is too small for the team, and desks often have to be shared.\n\n**Findings**\n\nThe survey revealed strong support for change. The vast majority of advisers (84%) said they would like to work from home for part of the week, and just over half (55%) said this would make them more likely to stay with the company. However, a small minority expressed concern about feeling isolated, and two team leaders pointed out that new staff learn a great deal by listening to experienced colleagues.\n\n**Recommendations**\n\nIt is therefore recommended that a trial be introduced from February, under the following conditions. New staff should work in the office full-time for their first eight weeks. Each team should agree on one shared office day so that colleagues meet regularly. Performance should be measured monthly, using the same targets as at present.\n\nWe would advise against extending hybrid working to other teams until the results of the trial are known. A short evaluation report will be presented to the management board at the end of the six months.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Under the trial, staff would work from home every day.', a: 'f', why: 'They would work from home on two days a week.' },
            { q: 'All four advisers who left mentioned the journey to the office.', a: 't', why: '“…all four mentioned the long journey to the office.”' },
            { q: 'Most advisers said they would like to work from home sometimes.', a: 't', why: 'The vast majority (84%) said so.' },
            { q: 'The company plans to move to a larger office next year.', a: 'ng', why: 'The office is too small, but no move is mentioned.' },
            { q: 'The writer recommends hybrid working for all teams at once.', a: 'f', why: 'The writer advises against extending it until the trial results are known.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the structure and language of the proposal.', items: [
            { q: 'In which section does the writer mention the concerns about new staff?', o: ['Findings', 'Background', 'Introduction'], why: 'The team leaders’ comments are part of the results of the research.' },
            { q: 'Why does the writer say “It is therefore recommended that a trial be introduced” and not “I want a trial”?', o: ['It is impersonal and formal, which suits a proposal.', 'The writer does not agree with the trial.', 'It is shorter and more direct.'], why: 'Impersonal structures are typical of the formal register.' },
            { q: 'Which condition responds to the team leaders’ concern?', o: ['New staff should work in the office full-time for their first eight weeks.', 'Performance should be measured monthly.', 'An evaluation report will be presented to the board.'], why: 'The team leaders said new staff learn by listening to experienced colleagues.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the two quantity expressions.', items: [
            { s: '[The vast majority] of advisers wanted change, but [a small minority] were concerned about isolation.', why: '*The vast majority* and *a small minority* describe proportions.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'In which section of a report do you advise the reader what to do?', o: ['Recommendations', 'Background', 'Findings'], why: 'Recommendations say what the reader should do.' },
      { q: 'Which is the most formal?', o: ['The company should reduce its costs.', 'The company should cut down on its costs.', 'The company’s got to cut costs.'], why: 'A single verb, no contraction.' },
      { q: 'We recommend ___ an external consultant.', o: ['hiring', 'to hire', 'hire'], why: '*Recommend* + *-ing*.' },
      { q: '___ of the staff (47%) use the new app.', o: ['Just under half', 'Just over half', 'The vast majority'], why: '47% is a little less than half.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences with one word.', items: [
      { q: 'It is recommended that the trial ___ extended until June.', a: ['be'], why: 'The base form *be* after *It is recommended that*.' },
      { q: 'This report ___ to evaluate the new software.', a: ['aims'], why: '*This report aims to…*' },
      { q: 'We would advise ___ changing the system this year.', a: ['against'], why: '*Advise against* + *-ing*.' },
      { q: 'The committee will ___ the complaint. (= look into)', a: ['investigate', 'examine'], why: 'The formal verb for *look into*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the figures and the expressions.', pairs: [
      ['97%', 'almost all'],
      ['53%', 'just over half'],
      ['47%', 'just under half'],
      ['26%', 'about a quarter'],
      ['4%', 'a small minority'],
    ] },
  ],
};
