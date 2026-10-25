// IELTS Academic practice test (English B2): Writing. Written by Alimun; not official material. Draft for review.
// Task 1 (a line graph, 150 words, about 20 minutes) and Task 2 (an essay, 250 words, about 40 minutes).
export const PAPER = {
  id: 'writing', title: 'Academic Writing', minutes: 60,
  parts: [
    { id: 't1', ref: 'Task 1', title: 'Describing a graph',
      about: 'You should spend about 20 minutes on this task. Write at least 150 words.',
      chart: { type: 'line', title: 'Percentage of commuters using four modes of transport in one city, 1990 to 2025', unit: '%',
        labels: ['1990', '1995', '2000', '2005', '2010', '2015', '2020', '2025'],
        series: [
          { name: 'Car', values: [58, 61, 63, 60, 55, 49, 44, 41] },
          { name: 'Bus', values: [22, 19, 16, 15, 14, 15, 13, 12] },
          { name: 'Rail', values: [12, 12, 13, 15, 18, 21, 23, 24] },
          { name: 'Bicycle', values: [4, 4, 5, 6, 9, 11, 16, 19] },
        ] },
      blocks: [
        { t: 'ex', kind: 'write', marking: 'ielts', h: 'Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
          items: [{
            task: 'The graph below shows the percentage of commuters in one city who travelled to work by car, bus, rail and bicycle between 1990 and 2025.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.',
            min: 150, max: 220,
            model: [
              'The line graph shows how the proportion of commuters in one city who travelled to work by car, bus, rail and bicycle changed between 1990 and 2025.',
              'Overall, the car remained the most common way of getting to work throughout the period, although its share fell considerably after 2000. In contrast, rail and cycling grew steadily in popularity, while bus use declined.',
              'In 1990, 58% of commuters drove to work, and this figure rose gradually to a peak of 63% in 2000. After that, however, car use fell continuously, reaching 41% by 2025. The bus followed a downward trend over the whole period, dropping from 22% to 12%, with only a slight recovery to 15% in 2015.',
              'Rail, by contrast, stayed at around 12 to 13% until 2000 before almost doubling to 24% in 2025, and it was the second most popular mode from 2010 onwards. The most dramatic change, however, was in cycling. Only 4% of commuters cycled in 1990, but the figure began to climb after 2005 and rose particularly sharply after 2015, overtaking the bus by 2020 and ending the period at 19%.',
            ].join('\n\n'),
          }] },
      ] },

    { id: 't2', ref: 'Task 2', title: 'Essay',
      about: 'You should spend about 40 minutes on this task. Write at least 250 words.',
      blocks: [
        { t: 'ex', kind: 'write', marking: 'ielts', h: 'Give reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.',
          items: [{
            task: 'Write about the following topic:\n\n*In many countries, a growing number of people now work from home for at least part of the week.*\n\n*Do the advantages of this development outweigh the disadvantages?*\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.',
            min: 250, max: 320,
            model: [
              'Over the past few years, working from home has changed from being an unusual privilege to an ordinary part of many people\'s jobs. While this shift brings some genuine drawbacks, I believe that, for most employees and employers, its benefits are greater.',
              'The most obvious advantage is the time and money saved on commuting. Someone who previously spent an hour and a half travelling each day can now use that time to rest, exercise or look after their family, and the savings on fuel or train fares can be considerable. Remote working also allows people to live further from expensive city centres, which can ease the pressure on housing and bring new life to smaller towns. For employers, it widens the pool of candidates they can recruit from, since applicants no longer need to live within easy reach of the office.',
              'There are, however, real disadvantages. Many people find it harder to separate their working life from their private life when both take place in the same room, and some end up working longer hours rather than shorter ones. Younger employees in particular may miss out on the informal learning that happens when they can watch experienced colleagues and ask quick questions. Loneliness is a further risk for those who live alone.',
              'Nevertheless, most of these problems can be reduced by sensible arrangements rather than by abandoning remote work altogether. A hybrid pattern, in which staff spend two or three days a week in the office, preserves much of the contact and guidance that newer workers need, while clear rules about working hours can protect people\'s free time. The benefits of commuting less, by contrast, are difficult to obtain in any other way.',
              'In conclusion, although working from home does not suit every person or every job, I am convinced that its advantages outweigh its disadvantages, provided that it is organised with care.',
            ].join('\n\n'),
          }] },
      ] },
  ],
};
