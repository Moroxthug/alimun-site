// Alimun test, English A2: Speaking. Draft for native-teacher review.
export const PAPER = {
  id: 'speaking', title: 'Speaking', minutes: 10,
  parts: [
    {
      id: 'p1', ref: 'Part 1', title: 'About you',
      about: 'The examiner asks you some questions. Answer in two or three sentences.',
      blocks: [
        { t: 'ex', kind: 'talk', marking: 'alimun', h: 'Answer the questions.', items: [
          { q: 'Hello. Can you tell me about yourself? Where do you live, and who do you live with?', secs: 30, prep: 0 },
          { q: 'What do you usually do on a weekday? Tell me about your day.', secs: 40, prep: 0 },
          { q: 'What did you do last weekend?', secs: 40, prep: 0 },
          { q: 'What are you going to do next summer?', secs: 40, prep: 0 },
        ] },
      ],
    },
    {
      id: 'p2', ref: 'Part 2', title: 'A picture',
      about: 'Look at the picture. Say what you can see.',
      blocks: [
        { t: 'ex', kind: 'talk', marking: 'alimun', h: 'Talk about the picture.', items: [
          { q: 'Look at this picture of a café. Tell me what you can see. Do you like this café? Why?', secs: 60, prep: 15, scene: 'cafe',
            model: 'This is a picture of a café. There’s a big window, and there’s a lamp near the wall. There’s a green plant, too. On the table there’s a cup of coffee and a croissant. I think it’s morning, because people often have a croissant for breakfast. The café looks quiet and nice. I like it, because it’s small and there’s a lot of light from the window. I usually go to a café near my office on Saturday mornings. I always have a cup of tea and a piece of cake.' },
        ] },
      ],
    },
    {
      id: 'p3', ref: 'Part 3', title: 'Make a plan',
      about: 'Look at the card. Talk about the ideas and choose one.',
      blocks: [
        { t: 'ex', kind: 'talk', marking: 'alimun', h: 'Make a plan.', items: [
          { q: 'Your friend from another country is visiting your town for one day. Here are some ideas. What can you do together? Which idea is the best, and why?', secs: 60, prep: 20,
            notes: ['a walk in the old town', 'a museum', 'lunch at a market', 'a boat trip', 'shopping'],
            model: 'My friend is visiting for one day, so we haven’t got much time. In the morning we can walk in the old town, because it’s beautiful and it’s free. Then we can have lunch at the market. The food there is cheap and very good. A museum is interesting, but I think it’s boring on a sunny day. Shopping is more expensive. I think the best idea is the walk and lunch at the market, because my friend can see the town and try our food.' },
        ] },
      ],
    },
  ],
};
