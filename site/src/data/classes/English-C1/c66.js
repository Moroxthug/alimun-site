// English C1, class 66 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u14:p4 (writing a report). Draft for the owner's review.
export const LESSON = {
  id: 'c66',
  focus: 'By the end every student knows what a C1 report needs in the format of C1 Advanced Writing Part 2 (220 to 260 words): a title, an introduction that states the aim and the basis, headings that follow the task, findings with precise quantifiers, evaluation with comparison, and recommendations linked to the findings in a formal, impersonal register. Every student tells a report from a proposal, plans a report in class and writes its introduction and one findings section.',
  tips: [
    'Report or proposal? A report looks at a situation that exists now and evaluates it; a proposal suggests a new plan. Students who confuse them lose marks for Communicative achievement, so start with this.',
    'The language of unit 14 does the work in a report: quantifiers report findings without inventing figures (*the vast majority of, only a handful of*), comparison evaluates (*by far the greatest concern, nowhere near as well used as*). Ask for at least two of each.',
    'After *it is recommended that* and *I suggest that*, formal English uses the base form for every person: *that the school extend*, not *extends*. *Should extend* is also correct.',
    'Mark with the four areas. A report with no headings, or with headings that do not match the task, usually loses marks for Organisation; check headings first.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Who reads a report, and what do they want from it?* Collect ideas: a manager, a committee, a council who must make a decision.' },
    { min: 10, title: 'Report or proposal', md: 'Show board page 1. Students sort the tasks, then match each section of a report with its job.' },
    { min: 10, title: 'Formal language', md: 'Show board page 2. Students choose the best options for a formal report and explain each choice.' },
    { min: 10, title: 'The task and the plan', md: 'Show board page 3. Read the task together, decide the headings, and students plan in four short notes.' },
    { min: 20, title: 'Activity: write and mark', md: 'Use the activity for your class size below. Students write the title, the introduction and one findings section in fifteen minutes, then mark with the four areas.' },
    { min: 5, title: 'Close', md: 'Each student reads one recommendation aloud, starting *It is recommended that…*. Set the homework.' },
  ],
  board: [
    { title: 'Report or proposal?', blocks: [
      { t: 'ex', kind: 'sort', h: 'Is each task a report or a proposal?', groups: ['report', 'proposal'], explain: ['groups'], items: [
        { s: 'Describe how the town’s bike scheme is used, assess it and suggest improvements.', g: 0, why: 'It looks at something that exists now.' },
        { s: 'Suggest a new club for students and explain why the college should fund it.', g: 1, why: 'It puts forward a new plan.' },
        { s: 'Explain why fewer people visit the museum and recommend what it could do.', g: 0, why: 'A present situation, then recommendations.' },
        { s: 'Put forward an idea for a community garden and say how it would benefit residents.', g: 1, why: 'A plan for the future.' },
      ] },
      { t: 'ex', kind: 'match', h: 'Match each section of a report with its job.', pairs: [
        ['the introduction', 'states the aim and what the report is based on'],
        ['the findings', 'describes the situation with precise quantities'],
        ['the evaluation', 'says what works and what does not'],
        ['the recommendations', 'gives practical suggestions linked to the findings'],
      ] },
    ] },
    { title: 'Formal language', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the best option for a formal report.', items: [
        { q: 'It is recommended that the centre ___ open until nine on weekdays.', o: ['stay', 'stays', 'will stay'], why: 'Base form after *it is recommended that*.' },
        { q: '___ of the students surveyed use the centre at least once a week.', o: ['The majority', 'Loads', 'A great deal'], why: 'Formal, and *majority* goes with a group of people.' },
        { q: 'The centre is ___ as popular as the library.', o: ['nowhere near', 'very less', 'not at all near'], why: '*nowhere near as… as*: much less.' },
        { q: 'By ___ the most common complaint concerned the noise.', o: ['far', 'much', 'very'], why: '*by far* + superlative.' },
      ] },
      { t: 'tip', art: 'owl', md: 'A report is impersonal: no contractions, few uses of *I*, and phrases such as *It was found that…*, *The survey suggests that…*, *In view of these findings…*.' },
    ] },
    { title: 'Exam task: Writing Part 2', blocks: [
      { t: 'text', md: 'In the format of C1 Advanced Writing Part 2. **The director of the language school where you study wants to know how students use the school’s self-study centre.** *Write a report describing how the centre is used at the moment, evaluating how well it meets students’ needs, and recommending changes that would encourage more students to use it.* **Write your report in 220 to 260 words.**' },
      { t: 'ex', kind: 'choice', h: 'Which set of headings matches the task best?', items: [
        { q: '', o: ['Introduction; Current use of the centre; How well it meets students’ needs; Recommendations', 'Hello; My opinion; Conclusion', 'Introduction; The history of the school; Other schools in the city; Conclusion'], why: 'Each heading answers one part of the task, ending with recommendations.' },
      ] },
      { t: 'tip', md: 'You may invent a short survey as the basis of the report (*It is based on a questionnaire completed by students…*), but you do not need exact figures. Quantifiers such as *the vast majority* or *only a handful* report findings precisely enough.' },
    ] },
  ],
  activities: {
    one: { title: 'Timed sections', md: 'The student plans the report (five minutes) and writes the title, the introduction and the first findings section (fifteen minutes) while you wait. Mark together with the four areas; the student finds one improvement for each and rewrites the weaker section.' },
    small: { title: 'Write, swap, mark', md: 'Each student writes the title, the introduction and one findings section in fifteen minutes. Swap with a partner, who marks with the four areas and checks the register: no contractions, formal quantifiers, a clear aim. Writers improve their work with the comments.' },
    group: { title: 'The review committee', md: 'Everyone writes the title, the introduction and one findings section (fifteen minutes). In breakout rooms of three, students read each other’s work as the school director would and decide which one is clearest and why. Back together, each room shares one strong sentence and one sentence rewritten in a more formal register.' },
  },
  homework: { book: 'u14:p4', md: 'Finish book lesson 4 of unit 14 if needed and write the full report for the task on the board in 220 to 260 words; send it to your teacher. Before the next class, look back over units 13 and 14 and note two points you are unsure about.' },
};
