// English C1 for study and exams, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
// Authors and studies cited in this unit are invented for practice.
export const UNIT = {
  id: 'u4',
  title: 'The literature review and dissertation',
  goal: 'Understand the parts of a dissertation and write a literature review that leads clearly to your own research gap and aims.',
  art: 'mug',
  tags: { skills: ['writing', 'reading', 'vocabulary'], topics: ['dissertation', 'literature-review', 'research-gap', 'research-questions', 'tense-choice'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'The structure of a dissertation',
      about: 'Learn what each part of a dissertation does and the language that is typical of it.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'A dissertation or a research report usually follows the same broad structure, although it varies between subjects. Each part has its own job, and readers expect to find certain information in certain places. If you know the job of each part, you know what to write in it.' },
          { t: 'table', caption: 'The parts of a dissertation', explain: ['head', 'col1'], quiz: true, head: ['Part', 'What it does'], rows: [
            ['abstract', 'summarises the whole study in one paragraph: aims, method, main findings and what they mean'],
            ['introduction', 'presents the topic, explains why it matters and states the aims'],
            ['literature review', 'discusses earlier research and shows the gap that this study fills'],
            ['methodology', 'explains how the data were collected and analysed, and why'],
            ['findings', 'presents the results, often with tables and figures, without much comment'],
            ['discussion', 'interprets the results, compares them with earlier research and admits limitations'],
            ['conclusion', 'sums up what the study has shown and suggests future research'],
          ] },
        ],
        [
          { t: 'text', md: 'Each part also has its typical language. The methodology often uses the **passive**, because the method matters more than who carried it out. The findings report; the discussion interprets and hedges.' },
          { t: 'examples', items: [
            { s: 'This study **investigates** how part-time work affects first-year students.', n: 'Abstract or introduction: present simple for what the study does.' },
            { s: 'Data **were collected** through semi-structured interviews with twenty students.', n: 'Methodology: the passive, past simple.' },
            { s: '**As Table 2 shows**, most participants worked at weekends.', n: 'Findings: pointing the reader to a table or figure.' },
            { s: 'This difference **may be explained by** the length of the working day.', n: 'Discussion: interpreting a result, with a hedge.' },
            { s: '**Future research could** examine students in their final year.', n: 'Conclusion: suggesting what other researchers might do next.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Write the abstract last, even though it comes first. You can only summarise the study well once you know what you found.' },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Which part of a dissertation does each sentence come from?', groups: ['methodology', 'findings', 'discussion'], explain: ['groups'], items: [
            { s: 'Participants were recruited through a university mailing list.', g: 0, why: 'It explains how the data were collected.' },
            { s: 'The interviews were recorded and transcribed.', g: 0, why: 'A description of the method, in the passive.' },
            { s: 'Sixty-two per cent of respondents reported working more than ten hours a week.', g: 1, why: 'It reports a result without interpreting it.' },
            { s: 'Figure 3 shows the average marks of each group.', g: 1, why: 'Pointing to a figure is typical of the findings.' },
            { s: 'One possible explanation for this result is tiredness.', g: 2, why: 'It interprets a result, with a hedge.' },
            { s: 'These results differ from those reported by Ahmed (2019).', g: 2, why: 'Comparing results with earlier research happens in the discussion.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'crossword', h: 'Complete the crossword about research.', words: [
            { a: 'abstract', clue: 'A one-paragraph summary at the start of a dissertation.' },
            { a: 'methodology', clue: 'The section that explains how the research was done.' },
            { a: 'hypothesis', clue: 'An idea that a study sets out to test.' },
            { a: 'sample', clue: 'The group of people chosen to take part in a study.' },
            { a: 'appendix', clue: 'A section at the end with extra material, such as a questionnaire.' },
            { a: 'findings', clue: 'The results of a study.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
            { q: 'Where do you normally admit the limitations of your study?', o: ['in the discussion', 'in the abstract', 'in the methodology'], why: 'The discussion interprets the results, including what they cannot show.' },
            { q: 'Why is the passive common in the methodology?', o: ['because the method matters more than who did it', 'because the methodology is always in the past', 'because active verbs are not allowed in academic writing'], why: '*Data were collected* focuses on the action, not the researcher.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Finding the gap and stating aims',
      about: 'Lead your reader from earlier research to the gap your study fills, using the right tenses.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'A literature review is not a list of everything you have read. It is an argument: it shows what is already known, points to what is **not** known, and so explains why your study is needed. Introductions often follow the same path. First establish the field, then show the gap, then state your aims.' },
          { t: 'table', caption: 'From the field to the gap to your aims', explain: ['head', 'col0'], quiz: true, head: ['Move', 'Useful language'], rows: [
            ['establish the field', 'Considerable research has been devoted to… / It is widely accepted that…'],
            ['show the gap', 'However, little attention has been paid to… / Few studies have examined… / It remains unclear whether…'],
            ['state the aims', 'This study aims to… / The present study seeks to… / This dissertation sets out to…'],
            ['ask the questions', 'To what extent does…? / How do… perceive…? / What factors influence…?'],
          ] },
        ],
        [
          { t: 'text', md: 'Tense choice in a literature review is not random. It shows how you see the research.' },
          { t: 'examples', items: [
            { s: 'Several studies **have examined** the effect of part-time work.', n: 'Present perfect: research in the field up to now, without specific dates.' },
            { s: 'In a survey of 800 students, Ahmed (2019) **found** that marks fell after fifteen hours a week.', n: 'Past simple: one specific study and what it found.' },
            { s: 'Ahmed **argues** that universities should limit working hours.', n: 'Present simple: the author’s view is still current; it is still in the text today.' },
            { s: 'Little is known about students who **work** at night.', n: 'Present simple: the situation now, which is the gap.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Research questions are often open: *To what extent…?*, *How…?*, *What factors…?*. A yes or no question, such as *Does work affect marks?*, usually leads to a less interesting answer.' },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the best tense.', items: [
            { q: 'A number of studies ___ the link between sleep and exam results.', o: ['have investigated', 'investigated', 'are investigating'], why: 'Present perfect for research in the field up to now.' },
            { q: 'In 2021, Moreno ___ that students who slept less made more mistakes.', o: ['found', 'has found', 'finds'], why: 'A specific study at a past time: past simple.' },
            { q: 'Moreno ___ that schools should start later in the day.', o: ['argues', 'had argued', 'is arguing'], why: 'Present simple for an author’s view in their text.' },
            { q: 'It ___ unclear whether the effect lasts into adulthood.', o: ['remains', 'remained', 'has remained being'], why: 'The gap is the situation now: present simple.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete each phrase with one word.', items: [
            { q: 'However, little attention has been ___ to older students.', a: ['paid', 'given'], why: '*Pay attention to*: in the passive, *attention has been paid to*.' },
            { q: '___ studies have examined this question outside Europe.', a: ['Few'], why: '*Few studies* (not many) points to a gap. *A few* would be more positive.' },
            { q: 'This study ___ out to compare two teaching methods.', a: ['sets'], why: '*Set out to* do something: aim to do it.' },
            { q: 'To what ___ does class size affect results?', a: ['extent', 'degree'], why: '*To what extent…?* is a common open research question.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite each sentence using the word given.', items: [
            { q: 'Not many researchers have studied this group.', cue: 'Few', a: ['Few researchers have studied this group.', 'Few studies have examined this group.'], why: '*Few* is more formal and points clearly to a gap.' },
            { q: 'We want to find out why students leave their courses.', cue: 'aims', a: ['This study aims to find out why students leave their courses.', 'This study aims to investigate why students leave their courses.', 'The study aims to find out why students leave their courses.'], why: '*This study aims to…* is the formal way to state an aim.' },
            { q: 'Nobody knows yet whether the effect lasts.', cue: 'unclear', a: ['It remains unclear whether the effect lasts.', 'It is unclear whether the effect lasts.', 'It is still unclear whether the effect lasts.'], why: '*It remains unclear whether…* is a formal way to name a gap.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order to make research questions.', items: [
            { a: 'To what extent does homework improve results?', why: '*To what extent* + question word order.' },
            { a: 'How do teachers perceive online assessment?', why: 'An open *how* question about people’s views.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Working while studying',
      about: 'Read an abstract and an extract from a literature review, and see how they lead to a research gap.',
      art: 'snail',
      spreads: [
        [
          { t: 'reading', title: 'Abstract', md: 'An increasing number of university students combine their studies with paid work, yet the effects of this on first-year students remain poorly understood. This study investigates how working hours relate to academic performance and wellbeing in the first year of university. An online questionnaire was completed by 214 first-year students at one university, and fifteen of them were later interviewed. The results indicate that students who worked more than fifteen hours a week had lower average marks, but only when their work took place in the evenings during the week. Students who worked at weekends reported similar marks to those who did not work at all. These findings suggest that the timing of work may matter as much as the number of hours, and that advice to students could take this into account.' },
          { t: 'ex', kind: 'choice', h: 'Look at the parts of the abstract.', items: [
            { q: 'Which sentence states the aim of the study?', o: ['This study investigates how working hours relate to academic performance and wellbeing.', 'An increasing number of university students combine their studies with paid work.', 'Students who worked at weekends reported similar marks.'], why: 'The aim is stated with *This study investigates…*.' },
            { q: 'Which phrase shows the gap?', o: ['remain poorly understood', 'an increasing number of', 'was completed by'], why: 'Saying that the effects are *poorly understood* shows that more research is needed.' },
            { q: 'Why does the abstract say “may matter” in the last sentence?', o: ['to hedge a conclusion from one university', 'to show that the result is certain', 'to ask a question'], why: 'The data come from one university, so the conclusion is cautious.' },
          ] },
        ],
        [
          { t: 'reading', title: 'From the literature review', md: 'The relationship between paid work and academic performance has received considerable attention. Several large surveys have found that marks tend to fall once students work more than a certain number of hours a week. Ahmed (2019), for example, found a clear drop in marks above fifteen hours. Other researchers, however, argue that work can bring benefits, such as time-management skills and confidence (Kovacs, 2020).\n\nMost of this research has focused on the number of hours that students work. Far less attention has been paid to when the work takes place. Moreover, nearly all existing studies have looked at students in their second or final year, who may already have developed effective study habits. It therefore remains unclear whether the patterns found among older students also apply to those in their first year, when the transition to university is at its most demanding. The present study seeks to address this gap.' },
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Earlier research has mainly looked at the number of hours students work.', a: 't', why: '*Most of this research has focused on the number of hours.*' },
            { q: 'Kovacs found that work always harms academic performance.', a: 'f', why: 'Kovacs is cited for the view that work *can bring benefits*.' },
            { q: 'Most earlier studies looked at first-year students.', a: 'f', why: '*Nearly all existing studies have looked at students in their second or final year.*' },
            { q: 'Ahmed’s study took place at the same university as the present study.', a: 'ng', why: 'The text does not say where Ahmed’s study took place.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the phrase that points to the gap.', items: [
            { s: '[Far less attention has been paid to] when the work takes place.', why: 'The writer shows what earlier research has not done.' },
            { s: 'It therefore [remains unclear whether] the patterns found among older students also apply.', why: '*Remains unclear whether* names the question this study answers.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Look at the language of the review.', items: [
            { q: 'Why does the review say “Ahmed (2019) found” in the past simple?', o: ['It reports one specific study.', 'Ahmed’s view is no longer accepted.', 'The study has not finished yet.'], why: 'Past simple for the results of a specific study.' },
            { q: 'What is the purpose of the last sentence, “The present study seeks to address this gap”?', o: ['to link the review to the aims of the study', 'to summarise Ahmed’s findings', 'to admit a limitation'], why: 'The review ends by showing why the study is needed.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
      { q: 'Which part of a dissertation explains how the data were collected?', o: ['the methodology', 'the abstract', 'the conclusion'], why: 'The methodology describes and justifies the method.' },
      { q: 'Which sentence points to a gap in the research?', o: ['Few studies have examined this question in rural schools.', 'Many studies have examined this question.', 'This question is important for schools.'], why: '*Few studies have examined* shows what is missing.' },
      { q: 'Which is the best research question?', o: ['To what extent does feedback improve writing?', 'Is feedback good?', 'Feedback improves writing.'], why: 'An open question that allows a detailed answer.' },
      { q: 'Where do you compare your results with earlier research?', o: ['in the discussion', 'in the methodology', 'in the abstract only'], why: 'The discussion interprets results and relates them to the literature.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete each sentence with one word.', items: [
      { q: 'Little attention has been ___ to this group.', a: ['paid', 'given'], why: '*Pay attention to*, in the passive.' },
      { q: 'This study ___ to compare two methods.', a: ['aims', 'seeks', 'attempts'], why: '*Aims to* or *seeks to* + base form.' },
      { q: 'Data were ___ through online questionnaires.', a: ['collected', 'gathered', 'obtained'], why: 'The passive for the method.' },
    ] },
    { t: 'ex', kind: 'select', h: 'Choose the best tense.', items: [
      { q: 'Several studies ___ this question since 2010.', o: ['have addressed', 'addressed', 'address'], why: 'Present perfect with *since*: research up to now.' },
      { q: 'In 2018, Ortiz ___ a sharp rise in costs.', o: ['reported', 'has reported', 'reports'], why: 'A specific study at a past time: past simple.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match each part with its job.', pairs: [
      ['abstract', 'summarises the whole study'],
      ['literature review', 'shows what is already known and the gap'],
      ['findings', 'presents the results'],
    ] },
  ],
};
