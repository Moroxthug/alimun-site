// Alimun test, English B2: Reading. Draft for native-teacher review.
export const PAPER = {
  id: 'reading', title: 'Reading', minutes: 40,
  parts: [
    {
      id: 'p1', ref: 'Part 1', title: 'Four days a week',
      about: 'Read the article. For each question, choose the answer which fits best according to the text.',
      text: { title: 'The Friday experiment', md: 'When Daniel Okafor announced that his software company would trial a four-day working week, the reaction from his staff was not quite what he had expected. “I thought there would be cheering,” he admits. “Instead, people looked at each other nervously. Several of them came to see me afterwards and asked, very politely, whether this was a clever way of cutting their salaries.”\n\nIt was not. Under the six-month trial, the company’s forty employees would keep their full pay while working thirty-two hours instead of forty. In return, they were asked to find ways of doing the same amount of work in less time. Okafor had read research suggesting that most office workers are genuinely productive for only a few hours a day, and he was curious to see whether the rest of the time could simply be removed.\n\nThe first month was, by his own account, chaotic. Deadlines were missed and customers complained that they could not reach anyone on Fridays. “We had underestimated how much of our week was taken up by habits rather than by work,” he says. The breakthrough came when a small team suggested that meetings should be limited to twenty-five minutes and that nobody should be invited unless they had something to contribute. Within weeks, the number of hours spent in meetings had fallen by almost half.\n\nBy the end of the trial, the figures were striking. Sales had risen slightly, and the number of days lost to sickness had dropped considerably. Perhaps more importantly for a small company competing with far larger rivals, two experienced developers who had been planning to leave decided to stay.\n\nNot everyone was convinced, however. Rachel Burns, who manages the customer support team, found that her staff could not simply work faster, because they depend on customers calling them. “For us it meant either leaving the phones unanswered or working on Friday anyway,” she says. Her team now works a rota, with each person taking a different day off, which she describes as “a reasonable compromise, but not quite the dream we were promised”.\n\nOkafor accepts the criticism. “A four-day week isn’t a magic solution, and it won’t work in the same way for every job,” he says. “What it did do was force us to ask why we were doing things the way we were. That question alone was worth the experiment.”' },
      blocks: [
        { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
          { q: 'How did employees first react to Daniel Okafor’s announcement?', o: ['They suspected there might be a hidden disadvantage.', 'They were delighted by the idea.', 'They refused to take part in the trial.', 'They asked for more information about the research.'], why: 'People looked nervous and asked “whether this was a clever way of cutting their salaries”.' },
          { q: 'Why did Okafor want to try the four-day week?', o: ['He wondered whether some working hours were unnecessary.', 'He wanted to reduce the company’s costs.', 'His employees had complained about working too much.', 'A larger company had done it successfully.'], why: 'He had read that workers are productive for only a few hours, and wondered “whether the rest of the time could simply be removed”.' },
          { q: 'According to Okafor, what was the main cause of the problems in the first month?', o: ['The way people had always organised their time', 'Customers who did not like the new system', 'Staff who were not working hard enough', 'A lack of clear deadlines'], why: 'He says “much of our week was taken up by habits rather than by work”.' },
          { q: 'What change made the biggest difference?', o: ['Shorter meetings with fewer people', 'Closing the office on Fridays', 'Smaller teams for each project', 'Longer hours from Monday to Thursday'], why: 'The breakthrough came when meetings were limited to twenty-five minutes and only people with something to contribute were invited.' },
          { q: 'Why does the writer mention the two developers?', o: ['To show a benefit that mattered especially to a small company', 'To show that some staff disliked the trial', 'To explain why sales increased', 'To give an example of staff who were often ill'], why: 'For “a small company competing with far larger rivals”, keeping two experienced developers who had planned to leave was important.' },
          { q: 'How does Rachel Burns feel about the result for her team?', o: ['It is acceptable but disappointing.', 'It has completely solved her team’s problems.', 'It is worse than the old system.', 'It is unfair to the customers.'], why: 'She calls the rota “a reasonable compromise, but not quite the dream we were promised”.' },
        ] },
      ],
    },
    {
      id: 'p2', ref: 'Part 2', title: 'Leaving the city',
      about: 'Four people describe moving from a big city to a small town or village. For each question, choose the right person. You can choose each person more than once.',
      texts: [
        { title: 'Bethan', md: '**A** We moved out when our rent went up for the third year running. I’d assumed that the hardest part would be finding work, but in fact I kept my job and now work from home three days a week. What I hadn’t anticipated was how dark it would be. The first winter, walking home from the bus stop without streetlights, I was genuinely frightened. I carry a torch now, and I’ve come to love the stars, but it took a while.' },
        { title: 'Marcus', md: '**B** I grew up in a village and couldn’t wait to escape, so moving back at forty felt a bit like admitting defeat. My friends in the city kept asking when I’d be coming back. The truth is that I was lonely in London, despite being surrounded by millions of people. Here, the woman in the post office knows my name, and I’ve joined the volunteer fire service, which I’d never have imagined doing. I don’t miss the city at all.' },
        { title: 'Farah', md: '**C** For me it was entirely about the children. I wanted them to be able to cycle to school safely and play outside without me watching every minute. That part has worked out well. The downside is the shopping. There’s one small shop that closes at six, and the nearest supermarket is a forty-minute drive away, so I’ve had to become much more organised than I used to be. I plan every meal for the week on a Sunday.' },
        { title: 'Owen', md: '**D** Honestly, I’m still not sure we made the right decision. The house is lovely and we have far more space than before, but I spend nearly three hours a day commuting, which leaves little time for anything else. I’d hoped to get to know the neighbours, but most of them have lived here for generations and are polite rather than friendly. Perhaps it just takes longer than I expected.' },
      ],
      blocks: [
        { t: 'ex', kind: 'pick', h: 'Choose A, B, C or D.', opts: ['Bethan', 'Marcus', 'Farah', 'Owen'], items: [
          { q: 'Who moved mainly for financial reasons?', a: 0, why: 'Bethan moved “when our rent went up for the third year running”.' },
          { q: 'Who has started an activity they would not have expected to do?', a: 1, why: 'Marcus joined the volunteer fire service, “which I’d never have imagined doing”.' },
          { q: 'Who has had to change the way they organise daily life?', a: 2, why: 'Farah has “had to become much more organised” and plans every meal on Sunday.' },
          { q: 'Who has doubts about the move?', a: 3, why: 'Owen says “I’m still not sure we made the right decision.”' },
          { q: 'Who says a problem they expected did not happen?', a: 0, why: 'Bethan thought finding work would be hardest, “but in fact I kept my job”.' },
          { q: 'Who felt isolated in the city?', a: 1, why: 'Marcus “was lonely in London, despite being surrounded by millions of people”.' },
          { q: 'Who says that local people have not been very welcoming?', a: 3, why: 'Owen’s neighbours “are polite rather than friendly”.' },
          { q: 'Who wanted more freedom for other members of the family?', a: 2, why: 'Farah moved so her children could cycle to school and play outside without being watched.' },
        ] },
      ],
    },
    {
      id: 'p3', ref: 'Part 3', title: 'The meadow',
      about: 'Six sentences have been removed from the article. Choose the sentence which fits each gap. There is one extra sentence which you do not need to use.',
      blocks: [
        { t: 'ex', kind: 'cloze', h: 'Choose the right sentence for each gap.',
          text: 'When Helen Marsh inherited her uncle’s farm, the field behind the house was a flat green rectangle of grass, cut four times a year and sprayed regularly to keep it that way. Her neighbours assumed she would sell it. {}\n\nShe stopped cutting the grass in spring, stopped the spraying altogether, and scattered seeds of wild flowers that had once been common in the area. For the first year, almost nothing happened. {} Several friends quietly suggested that she had made an expensive mistake.\n\nIn the second summer, however, the field changed colour. Poppies appeared first, followed by tall purple flowers whose name she had to look up. {} By August, a local wildlife group had counted fourteen species of butterfly, compared with two the year before.\n\nScientists say that Helen’s experience is not unusual. Many seeds can survive in the soil for decades, waiting for the right conditions. {} In some cases, they simply need the grass to be left alone long enough to flower.\n\nThe meadow has now become something of a local attraction. Schools bring children to count insects, and a retired teacher runs monthly walks. {} “People used to drive past without looking,” she says. “Now they stop the car.”\n\nHelen is quick to point out that she is not an expert. {} “If I can do it,” she says, “anyone with a patch of grass can do something similar, even if it’s only the size of a table.”',
          opts: [
            'Instead, she decided to find out what the land would do if it were left to itself.',
            'The field looked untidy, and the grass grew long and grey.',
            'With them came bees, in numbers she had never seen on the farm.',
            'Once the chemicals and the constant cutting stop, they can begin to grow again.',
            'Helen herself prefers to watch from the kitchen window.',
            'Everything she knows, she has learned by making mistakes and asking questions.',
            'Many farmers in the area have since sold their land to developers.',
          ],
          items: [
            { a: 0, why: 'Her neighbours expected her to sell; *Instead* introduces what she really did, which the next paragraph describes.' },
            { a: 1, why: '“Almost nothing happened” is explained by the untidy field, and it leads to friends calling it a mistake.' },
            { a: 2, why: '*Them* refers to the flowers, and the bees prepare for the butterfly count that follows.' },
            { a: 3, why: '*They* refers to the seeds in the soil, and the next sentence adds that sometimes they only need time.' },
            { a: 4, why: '*Helen herself* contrasts with the schools and the teacher, and the quote that follows is Helen’s view from the house.' },
            { a: 5, why: 'It explains “she is not an expert” and leads to her advice that anyone can do the same.' },
          ] },
      ],
    },
  ],
};
