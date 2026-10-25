// English B2 for study and exams, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Argument and essays',
  goal: 'Plan and write a balanced argumentative essay with a clear thesis, linked arguments and careful claims.',
  art: 'parrot',
  tags: { skills: ['writing', 'vocabulary', 'reading'], topics: ['essay-structure', 'thesis-statement', 'connectors', 'hedging'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Thesis, arguments, counterarguments, conclusion',
      about: 'Learn the parts of an argumentative essay and what each part does.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'An argumentative essay answers a question with a **clear position**. A balanced essay also presents the opposing view fairly and then explains why your position is still stronger. Readers and examiners expect the parts in a familiar order.' },
          { t: 'table', caption: 'The parts of an argumentative essay', explain: ['head', 'col1'], head: ['Part', 'What it does', 'Useful language'], rows: [
            ['Introduction', 'gives background and ends with your thesis statement', 'This essay will argue that…'],
            ['Argument', 'gives one reason for your position, with an example', 'The main argument in favour of… is that…'],
            ['Counterargument', 'presents the opposing view fairly and then answers it', 'Critics argue that… However, …'],
            ['Conclusion', 'sums up and restates your position, with no new arguments', 'On balance, …'],
          ] },
        ],
        [
          { t: 'text', md: 'The **thesis statement** is one sentence, usually at the end of the introduction, that tells the reader what you will argue. It should be clear and specific, but not extreme. Each body paragraph then starts with a **topic sentence** that gives its main point.' },
          { t: 'examples', items: [
            { s: 'This essay will argue that, although online exams are convenient, they should not replace written exams.', n: 'A good thesis: it states a position and shows that the writer has considered the other side.' },
            { s: 'There are advantages and disadvantages to online exams.', n: 'Too weak: it gives no position, so the reader does not know what you will argue.' },
            { s: 'Online exams are the worst idea in the history of education.', n: 'Too extreme and emotional. Academic writing is calm and careful.' },
          ] },
          { t: 'tip', art: 'owl', md: 'A counterargument does not weaken your essay. When you present the other side fairly and then answer it, you show the reader that your position survives criticism.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each part of an essay with an example sentence.', pairs: [
            ['Thesis statement', 'This essay will argue that tourism brings more benefits than problems.'],
            ['Argument', 'The main benefit of tourism is that it creates jobs.'],
            ['Counterargument', 'Critics argue that tourism damages the environment.'],
            ['Response', 'However, this damage can be reduced with careful planning.'],
            ['Conclusion', 'On balance, the advantages of tourism outweigh its disadvantages.'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best sentence.', items: [
            { q: 'The best thesis for the question “Should cities ban cars from their centres?”', o: ['This essay will argue that cities should limit cars in their centres, but that a complete ban would be unrealistic.', 'Cars are a topic that many people talk about.', 'Banning cars is obviously the only sensible thing to do.'], why: 'It takes a clear, specific position and is not extreme.' },
            { q: 'The best thesis for the question “Is it better to study abroad or in your own country?”', o: ['While studying abroad offers valuable experience, this essay will argue that it is not the right choice for every student.', 'Studying abroad and studying at home both have good and bad points.', 'I will write about studying abroad in this essay.'], why: 'It accepts one point from the other side and then states the writer’s position.' },
            { q: 'The best topic sentence for a body paragraph:', o: ['The main argument against a four-day school week is that it would cause childcare problems for parents.', 'Some parents work.', 'Childcare, which many parents need, especially when both parents work full-time, and which is often expensive, is a problem.'], why: 'A topic sentence gives the main point of the paragraph clearly, in one readable sentence.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'True or false?', items: [
            { q: 'The thesis statement usually comes at the end of the introduction.', a: 't', why: 'The introduction gives the background first and then leads to the thesis.' },
            { q: 'A conclusion is a good place to introduce a new argument.', a: 'f', why: 'A conclusion sums up. A new argument belongs in a body paragraph.' },
            { q: 'In a balanced essay, you ignore the opposing view.', a: 'f', why: 'A balanced essay presents the opposing view and answers it.' },
            { q: 'Each body paragraph usually starts with a topic sentence.', a: 't', why: 'The topic sentence tells the reader the main point of the paragraph.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'This essay will argue that fees should be abolished.', why: '*This essay will argue that…* is a clear way to introduce a thesis.' },
            { a: 'Critics argue that the plan is too expensive.', why: '*Critics argue that…* introduces a counterargument.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Connectors and hedging',
      about: 'Link your arguments clearly and make careful claims that match the evidence.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Connectors show the reader how one idea relates to the next: is it an extra point, a contrast or a result? At B2 level, move beyond *and*, *but* and *so* to more formal connectors.' },
          { t: 'table', caption: 'Connectors for arguments', explain: ['head', 'col0'], quiz: true, head: ['Function', 'Connectors'], rows: [
            ['adding a point', 'furthermore, moreover, in addition'],
            ['contrasting', 'however, nevertheless, whereas, although'],
            ['giving a result', 'therefore, consequently, as a result'],
            ['accepting the other side', 'admittedly, while it is true that…'],
            ['concluding', 'on balance, in conclusion, overall'],
          ] },
          { t: 'tip', art: 'owl', md: '*However*, *moreover* and *therefore* usually start a new sentence and are followed by a comma. *Whereas*, *although* and *while* join two clauses in one sentence: *Some students prefer exams, whereas others prefer coursework.*' },
        ],
        [
          { t: 'text', md: 'In academic writing, a claim must not go further than the evidence. Writers use **hedging** to make claims more careful. Compare *Social media causes depression* (too strong) with *Social media may contribute to depression in some teenagers*.' },
          { t: 'examples', items: [
            { s: 'Students who sleep well **tend to** get better marks.', n: '*Tend to* means usually, but not always.' },
            { s: 'The policy **appears to** have reduced traffic.', n: '*Appear to* and *seem to* report what the evidence suggests, without certainty.' },
            { s: 'This **may** be because the sample was small.', n: '*May*, *might* and *could* show that something is possible.' },
            { s: 'Higher fees are **likely to** reduce applications.', n: '*Be likely to*: probable, but not certain.' },
            { s: 'Cost is **arguably** the most important factor.', n: '*Arguably*: the writer believes this and can give reasons, but accepts that others may disagree.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Do not hedge everything. Too many *may* and *might* make you sound unsure of your own argument. Hedge the claims you cannot prove, and state facts directly.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the connector that fits best.', items: [
            { q: 'Placements help students find jobs. ___, they give students a clearer idea of their future career.', o: ['Furthermore', 'However', 'Therefore'], why: 'The second sentence adds another benefit: *furthermore*.' },
            { q: 'Online courses are cheaper. ___, many students still prefer face-to-face teaching.', o: ['Nevertheless', 'Moreover', 'Consequently'], why: 'The second idea is surprising after the first: a contrast, *nevertheless*.' },
            { q: 'Fees have risen sharply. ___, fewer students are applying.', o: ['As a result', 'Moreover', 'Nevertheless'], why: 'Fewer applications are a result of higher fees.' },
            { q: 'Some students learn best in groups, ___ others prefer to work alone.', o: ['whereas', 'however', 'moreover'], why: '*Whereas* joins two contrasting clauses in one sentence. *However* would need a new sentence.' },
            { q: '___ it is true that exams cause stress, they are a fair way to compare students.', o: ['While', 'However', 'Despite'], why: '*While it is true that…* accepts a point before you answer it. *Despite* is followed by a noun or *-ing*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Make each claim more careful. Complete with one word.', items: [
            { q: 'Social media ___ (appear) to affect sleep in teenagers.', a: ['appears'], why: '*Appear to* is a hedge. *Social media* takes a singular verb here: *appears*.' },
            { q: 'Higher fees are ___ to reduce the number of applicants. (= will probably)', a: ['likely'], why: '*Be likely to* + base form: probable, but not certain.' },
            { q: 'This ___ be because the sample was very small.', a: ['may', 'might', 'could'], why: '*May*, *might* or *could* show that this is one possible reason.' },
            { q: 'It ___ that the new policy has had little effect.', a: ['seems', 'appears'], why: '*It seems that…* or *It appears that…* reports what the evidence suggests.' },
            { q: 'Online courses are, to some ___, as effective as classroom courses.', a: ['extent', 'degree'], why: '*To some extent* means partly, not completely.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the word that makes the claim too strong.', items: [
            { s: 'Online learning [always] leads to better results.', why: '*Always* is too absolute. *Often* or *can* would be more careful.' },
            { s: 'This study [proves] that homework improves results.', why: 'One study rarely proves something. *Suggests* or *indicates* is more careful.' },
            { s: '[All] students prefer online exams.', why: '*All* is too strong. *Many* or *most* would be more careful.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A model essay with comments',
      about: 'Read a balanced argumentative essay and a teacher’s comments on how it works.',
      art: 'dog',
      spreads: [
        [
          { t: 'reading', title: 'Should all university degrees include a year of work experience?', md: 'In many countries, employers complain that graduates leave university with good theoretical knowledge but little practical experience. As a result, some people argue that every degree should include a compulsory year in the workplace. This essay will argue that, while work placements have clear benefits, making them compulsory for all students would be a mistake.\n\nThe main argument in favour of compulsory placements is that they help students find jobs. A year in a company allows students to apply what they have learnt, develop professional skills and make useful contacts. Furthermore, students who have worked in their field tend to have a clearer idea of the career they want.\n\nHowever, a compulsory year would not suit every subject or every student. For students of subjects such as philosophy or pure mathematics, a suitable placement may be difficult to find. Moreover, an extra year adds to the cost of a degree, which could discourage students from poorer backgrounds from applying at all.\n\nAdmittedly, universities could help students to find placements and could ask employers to pay them a fair salary. Nevertheless, there are not enough good placements for every student, and a poor placement is arguably worse than none, since students might spend a year doing tasks that teach them very little.\n\nOn balance, work experience appears to be valuable for many students, but it should be encouraged rather than required. Universities should offer optional placements, support the students who choose them and make sure that cost does not exclude anyone. In this way, students can benefit from practical experience without being forced into a single model.' },
        ],
        [
          { t: 'text', md: '**Teacher’s comments.** The introduction gives the background and ends with a clear thesis. Each body paragraph starts with a topic sentence. In the fourth paragraph, the writer accepts a possible solution with *Admittedly* and then answers it with *Nevertheless*. Hedging (*tend to*, *may*, *arguably*, *appears to*) keeps the claims careful. The conclusion restates the position and makes a recommendation, but it adds no new argument.' },
          { t: 'ex', kind: 'match', h: 'Match each paragraph with what it does.', pairs: [
            ['First paragraph', 'background and thesis'],
            ['Second paragraph', 'arguments for placements'],
            ['Third paragraph', 'arguments against compulsory placements'],
            ['Fourth paragraph', 'a possible solution, and why it is not enough'],
            ['Fifth paragraph', 'the writer’s final position'],
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'The writer thinks that work placements have no benefits.', a: 'f', why: 'The thesis says that *work placements have clear benefits*.' },
            { q: 'The writer thinks compulsory placements could stop some students from applying to university.', a: 't', why: 'An extra year *could discourage students from poorer backgrounds from applying at all*.' },
            { q: 'The writer did a work placement during their own degree.', a: 'ng', why: 'The essay does not mention the writer’s own experience.' },
            { q: 'According to the writer, a poor placement may be worse than no placement.', a: 't', why: '*A poor placement is arguably worse than none.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language in the essay.', items: [
            { q: 'Why does the writer start paragraph four with *Admittedly*?', o: ['to accept that the other side has a fair point', 'to add a new argument against placements', 'to begin the conclusion'], why: '*Admittedly* accepts a point before the writer answers it with *Nevertheless*.' },
            { q: 'In the thesis statement, which word introduces the point that the writer accepts?', o: ['while', 'argue', 'mistake'], why: '*While work placements have clear benefits* accepts a point; the main clause gives the position.' },
            { q: '*A poor placement is arguably worse than none* means…', o: ['the writer thinks it is worse, but accepts that others may disagree', 'research has proved that it is worse', 'everyone agrees that it is worse'], why: '*Arguably* is a hedge: a personal view that can be supported with reasons.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'Where does the thesis statement usually go?', o: ['at the end of the introduction', 'at the start of the conclusion', 'in the middle of the second paragraph'], why: 'The introduction leads to the thesis.' },
      { q: 'Prices rose. ___, sales fell.', o: ['Consequently', 'Moreover', 'Whereas'], why: 'Falling sales are a result: *consequently*.' },
      { q: 'Some experts support the plan, ___ others reject it completely.', o: ['whereas', 'moreover', 'therefore'], why: '*Whereas* joins two contrasting clauses.' },
      { q: 'Which claim is the most careful?', o: ['Regular exercise may improve concentration in some students.', 'Regular exercise improves concentration.', 'Regular exercise always improves concentration in every student.'], why: '*May* and *some* make the claim match the evidence.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete each sentence with one word.', items: [
      { q: 'The new rules ___ (seem) to have had little effect.', a: ['seem'], why: '*Seem to* is a hedge; *the rules* is plural.' },
      { q: 'Online learning is likely ___ grow in the next decade.', a: ['to'], why: '*Be likely to* + base form.' },
      { q: '___ it is true that the plan is expensive, it would save money in the long term.', a: ['While', 'Although', 'Though', 'Whilst'], why: 'A clause with *while* or *although* accepts a point before the main argument.' },
      { q: 'On ___, the arguments for the plan are stronger than those against it.', a: ['balance'], why: '*On balance* introduces a final judgement after looking at both sides.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'This essay will argue that exams are necessary.', why: 'A clear thesis statement.' },
      { a: 'Students tend to work harder before exams.', why: '*Tend to* + base form: a careful general claim.' },
    ] },
    { t: 'ex', kind: 'spot', h: 'Tap the word that makes the claim too strong.', items: [
      { s: 'Homework [always] improves results.', why: '*Always* is too absolute for an academic claim.' },
      { s: 'This survey [proves] that students prefer online classes.', why: 'A survey suggests; it does not prove.' },
    ] },
  ],
};
