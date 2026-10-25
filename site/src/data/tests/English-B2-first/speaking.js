// Practice test in the format of B2 First: Speaking. Original Alimun tasks and model answers, not official material. Draft for native-teacher review.
export const PAPER = {
  id: 'speaking', title: 'Speaking', minutes: 14,
  parts: [
    {
      id: 'p1', ref: 'Part 1', title: 'Interview',
      about: 'The examiner asks you some questions about yourself, your interests and your everyday life.',
      blocks: [
        { t: 'ex', kind: 'talk', marking: 'cambridge', h: 'Answer the examiner’s questions. Give a full answer with a reason or an example.', items: [
          { q: 'First of all, where are you from, and what do you like about living there?', secs: 30 },
          { q: 'What do you usually do at the weekend?', secs: 25 },
          { q: 'Tell us about a teacher who was important to you.', secs: 30 },
          { q: 'Do you prefer spending time with a large group of friends or with just one or two people? Why?', secs: 25 },
          { q: 'What kind of music do you enjoy listening to?', secs: 20 },
          { q: 'If you could learn a completely new skill, what would it be?', secs: 25 },
        ] },
      ],
    },
    {
      id: 'p2', ref: 'Part 2', title: 'Long turn',
      about: 'The examiner gives you two photographs. You talk about them on your own for about a minute, and then answer a short question about your partner’s photographs.',
      blocks: [
        { t: 'ex', kind: 'talk', marking: 'cambridge', h: 'Compare the photographs and answer the question. Then answer the short question about the other photographs.', items: [
          { q: 'In this part of the test, I’m going to give you two photographs. Here are your photographs. They show people spending time with friends in different places: one group is in a café and the other is having a picnic in a park. I’d like you to compare the photographs, and say what the people might enjoy about spending time together in these places. All right?', scene: 'cafe', secs: 60,
            model: 'Both photographs show groups of friends relaxing together, but in quite different settings. In the first one, the people are sitting round a table in a busy café, probably chatting over coffee and cake, whereas in the second they’re outdoors, sitting on the grass in a park.\n\nI think the people in the café might enjoy the fact that it’s comfortable and warm, and that someone else is doing the work for them. It’s easy to have a long conversation when you don’t have to worry about the weather. On the other hand, it can get quite noisy, so they might have to raise their voices.\n\nThe people in the park, by contrast, are probably enjoying the fresh air and the feeling of space. A picnic is cheaper, too, and they can stay as long as they like without buying anything else. I’d guess it’s a warm day, so they look really relaxed. If I had to choose, I think the park looks more fun, although it depends a lot on the weather.' },
          { q: 'Which of these places would you prefer to meet your friends in? Why?', scene: 'park', secs: 30,
            model: 'I’d probably prefer the park, at least in summer. You can move around, play games and stay for hours without spending much money. In winter, though, I’d definitely choose the café.' },
          { q: 'Now, here are your photographs. They show people who are in a hurry: one person is running for a train at a busy station and the other is making breakfast in a kitchen before going out. I’d like you to compare the photographs, and say why the people might be in a hurry and how they might be feeling. All right?', scene: 'station', secs: 60,
            model: 'In both photographs the people seem to be short of time, but the situations are rather different. The man at the station is running along the platform, maybe because his train is about to leave, while the woman in the kitchen is trying to make breakfast and get ready at the same time.\n\nThe man might be in a hurry because he got up late, or perhaps his bus was delayed on the way to the station. He’s probably feeling quite stressed, and maybe a bit annoyed with himself, because if he misses this train he could be late for work or for an important meeting.\n\nThe woman, on the other hand, is at home, so she’s still in control of the situation to some extent. She might have children to get ready for school, or she might just have overslept. She looks busy rather than panicked. I think the man is under more pressure, because once a train has gone, there’s nothing you can do about it.' },
          { q: 'Do you usually leave plenty of time when you have to be somewhere? Why or why not?', scene: 'kitchen', secs: 30,
            model: 'I try to, because I hate arriving somewhere out of breath. I usually leave about ten minutes earlier than I need to, just in case there’s a problem with the traffic.' },
        ] },
      ],
    },
    {
      id: 'p3', ref: 'Part 3', title: 'Collaborative task',
      about: 'You talk with your partner for about two minutes about the ideas on the task card. Then you have about a minute to reach a decision together.',
      blocks: [
        { t: 'ex', kind: 'talk', marking: 'cambridge', h: 'Discuss the question and the ideas on the card, then make a decision together.', items: [
          { q: 'Now, I’d like you to talk about something together for about two minutes. Some people think young people should spend a year doing something different before they start university or a job. Here are some things they could do and a question for you to discuss. Talk to each other about what young people might learn from doing these things.', secs: 120,
            notes: ['What might young people learn from doing these things?', 'working in another country', 'volunteering for a charity', 'travelling on a small budget', 'learning a new skill or sport', 'getting a job close to home'],
            model: 'Shall we start with working in another country? I think that’s probably the one where you’d learn the most, because you’d have to deal with a new language and a different way of doing things, all at the same time. You’d become much more independent. What do you think?\n\nVolunteering for a charity is interesting, too. I suppose you’d learn a lot about other people’s lives, and maybe it would make you appreciate what you have. It could also help you decide what kind of career you want.\n\nTravelling on a small budget sounds like fun, but I’m not sure you’d learn as much. Well, you’d certainly learn how to manage money, and how to solve problems when things go wrong, like missing a bus in the middle of nowhere.\n\nLearning a new skill or sport is good for confidence, I think, although you could do that at any time, not just in a year off. And getting a job close to home is the least exciting option, but it’s actually very practical. You’d learn about responsibility and you could save money for university. That’s not a bad thing, is it?' },
          { q: 'Now you have about a minute to decide which of these things would be the most useful for a young person.', secs: 60,
            model: 'So, we need to choose one. For me, it’s between working abroad and volunteering. Working abroad teaches you independence and a language, which are useful for the rest of your life. Volunteering is great, but you can do it later, in your free time. Would you agree that working abroad is the most useful? Yes, I think we agree, then. Working in another country.' },
        ] },
      ],
    },
    {
      id: 'p4', ref: 'Part 4', title: 'Discussion',
      about: 'The examiner asks you some more questions related to the topic of Part 3.',
      blocks: [
        { t: 'ex', kind: 'talk', marking: 'cambridge', h: 'Answer the examiner’s questions. Give your opinion and explain your reasons.', items: [
          { q: 'Do you think it is a good idea for young people to take a year off before university? Why or why not?', secs: 40 },
          { q: 'Some people say that travelling teaches you more than studying. What do you think?', secs: 40 },
          { q: 'Should schools do more to prepare young people for the world of work?', secs: 40 },
          { q: 'Is it better to choose a career early in life or to wait until you are older?', secs: 40 },
          { q: 'Why do you think some people prefer to stay close to home all their lives?', secs: 40 },
        ] },
      ],
    },
  ],
};
