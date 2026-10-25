// Alimun test, English B1: Reading. Draft for native-teacher review.
export const PAPER = {
  id: 'reading', title: 'Reading', minutes: 40,
  parts: [
    {
      id: 'p1', ref: 'Part 1', title: 'Never too late to learn',
      about: 'Four people talk about something they learned as adults. For each question, choose the right person.',
      texts: [
        { title: 'Grace', md: '**A** I didn’t learn to drive until I was forty. I used to take the bus everywhere, and I was quite happy with that. Then we moved to a village with only two buses a day, so I didn’t really have a choice. My first instructor shouted a lot, which made me nervous, so I changed to a different one. I failed the test once, but I passed the second time. Now I can’t imagine life without the car.' },
        { title: 'Owen', md: '**B** I’ve always been good with numbers, so when my company offered to pay for an evening course in accounting, I agreed immediately. It was harder than I expected, though. After a long day at work, sitting in a classroom until nine o’clock was tiring. But my manager noticed how hard I was working, and last spring I got a better job in the finance team.' },
        { title: 'Priya', md: '**C** My husband’s family speak Portuguese, and at family dinners I used to just smile and say nothing. So I signed up for an online course. I practised for twenty minutes every morning before work, which suited me much better than a weekly class would have. I’m not fluent yet, but last month I told a whole story at dinner, and everyone laughed in the right places.' },
        { title: 'Felix', md: '**D** I worked in an office for twelve years before I admitted that I hated it. I’d always enjoyed making things with wood, so at thirty-five I started an apprenticeship with a carpenter. I earn less money than before, and some of my friends thought I was crazy. But I go home tired and happy, and I’ve never regretted the decision.' },
      ],
      blocks: [
        { t: 'ex', kind: 'pick', h: 'Choose A, B, C or D.', opts: ['Grace', 'Owen', 'Priya', 'Felix'], items: [
          { q: 'Who had to learn something because of where they went to live?', a: 0, why: 'Grace moved to a village with only two buses a day, so she “didn’t really have a choice”.' },
          { q: 'Who did not have to pay for the course?', a: 1, why: 'Owen’s company “offered to pay for an evening course”.' },
          { q: 'Who wanted to understand people in their family?', a: 2, why: 'Priya’s husband’s family speak Portuguese and she used to say nothing at dinners.' },
          { q: 'Who now has less money than before?', a: 3, why: 'Felix says “I earn less money than before”.' },
          { q: 'Who did not succeed the first time?', a: 0, why: 'Grace “failed the test once” and passed the second time.' },
          { q: 'Who studied a little every day?', a: 2, why: 'Priya “practised for twenty minutes every morning before work”.' },
          { q: 'Who found studying after work very tiring?', a: 1, why: 'Owen says sitting in a classroom until nine after a long day “was tiring”.' },
          { q: 'Who says other people did not agree with their choice?', a: 3, why: 'Felix says “some of my friends thought I was crazy”.' },
        ] },
      ],
    },
    {
      id: 'p2', ref: 'Part 2', title: 'A café for broken things',
      about: 'Read the article. For each question, choose the right answer.',
      text: { title: 'Don’t throw it away, fix it', md: 'On the first Saturday of every month, the old community hall in Ashford is full of broken things: lamps, toasters, bicycles, jackets with missing buttons. This is the Ashford Repair Café, and it was started three years ago by a retired engineer called Margaret Price.\n\n“I was walking past the rubbish bins behind my flats one day,” she says, “and I saw a perfectly good vacuum cleaner that someone had thrown away. I took it home, and it took me ten minutes to fix. That made me angry, and then it gave me an idea.”\n\nMargaret put a notice in the local newspaper asking for volunteers who were good at repairing things. She expected four or five people to reply. In fact, more than thirty did. Today the café has a team of electricians, tailors and bicycle mechanics, and visitors bring around eighty items every month.\n\nThe service is free, although most visitors leave a small donation, which pays for tea, cake and the rent of the hall. Visitors are not allowed to simply leave their things and come back later. “That’s the most important rule,” says Margaret. “You sit with the volunteer and you learn how to do it yourself next time.”\n\nNot everything can be saved. About one item in four is too badly damaged, or the parts are impossible to find. But last year the café calculated that it had kept more than two tonnes of rubbish out of the bins. The town council was so impressed that it now lets the café use the hall for half the usual price.\n\nFor Margaret, though, the best part isn’t the numbers. “People arrive as strangers and leave as friends,” she says. “Some of our volunteers first came here with a broken radio.”' },
      blocks: [
        { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
          { q: 'How did Margaret get the idea for the Repair Café?', o: ['She found something that was easy to repair', 'She read about a similar café in a newspaper', 'Her own vacuum cleaner stopped working'], why: 'She found a thrown-away vacuum cleaner that “took me ten minutes to fix”, and “it gave me an idea”.' },
          { q: 'What surprised Margaret when she asked for volunteers?', o: ['How many people answered', 'How few people could repair things', 'How quickly the newspaper printed her notice'], why: 'She expected four or five replies, but “more than thirty did”.' },
          { q: 'Where does the money for tea and the hall come from?', o: ['Visitors who choose to give something', 'A fee that every visitor pays', 'The volunteers themselves'], why: 'The service is free, but “most visitors leave a small donation, which pays for tea, cake and the rent”.' },
          { q: 'What is the café’s most important rule?', o: ['Visitors must stay and watch the repair', 'Visitors must leave a donation', 'Only one item per visitor can be repaired'], why: 'Visitors cannot leave their things; “You sit with the volunteer and you learn how to do it yourself”.' },
          { q: 'What does the article say about the town council?', o: ['It has made the hall cheaper for the café', 'It pays the volunteers', 'It collects the things that can’t be repaired'], why: 'The council “now lets the café use the hall for half the usual price”.' },
          { q: 'What does Margaret like most about the café?', o: ['The friendships it creates', 'The amount of rubbish it saves', 'The skills she has learned there'], why: 'She says the best part “isn’t the numbers”: “People arrive as strangers and leave as friends.”' },
        ] },
      ],
    },
    {
      id: 'p3', ref: 'Part 3', title: 'A year abroad',
      about: 'Six sentences are missing from the text. Choose the right sentence for each gap. There is one sentence you do not need.',
      blocks: [
        { t: 'ex', kind: 'cloze', h: 'Choose the right sentence for each gap.',
          text: 'When my company asked me to spend a year in our office in Canada, I said yes before I had time to worry. {} I had never lived outside my home town, and suddenly I needed to find a flat, open a bank account and learn how everything worked.\n\nThe first few weeks were the hardest. {} I found the office easily, but I got lost every time I tried to go anywhere else, and I was too shy to ask for directions.\n\nThings started to change when a colleague invited me to join her running club. {} I couldn’t keep up with the others at first, but nobody seemed to mind, and afterwards we always went for breakfast together.\n\nI also had to get used to some local customs. {} When I went to a colleague’s house for dinner, I was the only person who didn’t take my shoes off at the door, and I felt very embarrassed.\n\nBy the spring I felt at home. {} I knew which bakery had the best bread and which bus driver always said good morning.\n\nNow I’m back home, and people often ask me if I would do it again. {} The year wasn’t always easy, but it taught me that I can manage much more than I thought.',
          opts: [
            'The worrying started a week later.',
            'I didn’t know anyone, and the city seemed enormous.',
            'I’m not a sporty person, but I didn’t want to say no.',
            'Some of them were small, but they still surprised me.',
            'I had my favourite places and a group of good friends.',
            'My answer is always the same: yes, without a doubt.',
            'My parents came to visit me twice during the year.',
          ],
          items: [
            { a: 0, why: 'The next sentences list the problems she suddenly had to think about, which follows “before I had time to worry”.' },
            { a: 1, why: 'Getting lost and being too shy to ask fit a newcomer who knew nobody in a big city.' },
            { a: 2, why: '“I couldn’t keep up with the others” follows the idea that she is not sporty but said yes.' },
            { a: 3, why: '“Some of them” refers to the local customs, and the shoes example is a small one that surprised her.' },
            { a: 4, why: 'Her favourite places and friends are then explained: the bakery and the friendly bus driver.' },
            { a: 5, why: 'It answers the question “would you do it again?”, and the last sentence explains why.' },
          ] },
      ],
    },
  ],
};
