// Alimun test, English B2: Speaking. Draft for native-teacher review.
export const PAPER = {
  id: 'speaking', title: 'Speaking', minutes: 11,
  parts: [
    {
      id: 'p1', ref: 'Part 1', title: 'Interview',
      about: 'The examiner asks you some questions about yourself and your opinions. Develop your answers with reasons and examples.',
      blocks: [
        { t: 'ex', kind: 'talk', marking: 'alimun', h: 'Answer the questions.', items: [
          { q: 'How long have you been studying English, and what has helped you most?', secs: 45, prep: 0 },
          { q: 'Tell me about a friend you have known for a long time. Why do you think you get on so well?', secs: 45, prep: 0 },
          { q: 'Where do you think you will be working or studying five years from now?', secs: 45, prep: 0 },
          { q: 'Is there a decision in your life that you wish you had made differently?', secs: 45, prep: 0 },
        ] },
      ],
    },
    {
      id: 'p2', ref: 'Part 2', title: 'Compare two pictures',
      about: 'Look at the two pictures. Compare them and speculate about the people who use these places.',
      blocks: [
        { t: 'ex', kind: 'talk', marking: 'alimun', h: 'Compare the pictures.', items: [
          { q: 'Here are two pictures: a kitchen and a park. Compare them, and say who might spend time in each place and what they might have been doing there.', secs: 60, prep: 15, scenes: ['kitchen', 'park'],
            model: 'Both pictures show places where people might spend some quiet time, but they’re very different. The first one is a kitchen, with a fridge, cupboards and a window. There’s a pot on the cooker and a kettle, so someone must have been cooking, or perhaps they’ve just made a cup of tea and stepped out of the room. It looks like a family kitchen, quite tidy, so whoever lives there probably cooks at home a lot.\n\nThe second picture is a park on a sunny day, with a large tree, a bench and a pond. There’s a bird in the sky as well. It might be a weekend, because it looks very peaceful. Someone may have been sitting on the bench reading, or feeding the birds near the pond.\n\nThe kitchen is a private, practical space, whereas the park is public and more about relaxing. Personally, I’d rather spend a free afternoon in the park, because being outside clears my head, although I do enjoy cooking for friends in the evening.' },
        ] },
      ],
    },
    {
      id: 'p3', ref: 'Part 3', title: 'Discussion',
      about: 'Look at the card. Talk about the ideas for about a minute and a half and reach a decision. Then answer the examiner’s question.',
      blocks: [
        { t: 'ex', kind: 'talk', marking: 'alimun', h: 'Discuss the question.', items: [
          { q: 'A city wants to make its centre a better place to live over the next ten years. Here are some ideas. Talk about how each one might help, then decide which two would make the biggest difference.', secs: 90, prep: 30,
            notes: ['fewer cars and more cycle lanes', 'more parks and trees', 'cheaper homes for young people', 'free public events', 'longer opening hours for shops and libraries'],
            model: 'Let me start with fewer cars and more cycle lanes. That would obviously reduce pollution and noise, and the streets would be safer, although some people who depend on their cars might feel the city was being unfair to them. More parks and trees would make the centre greener and cooler in summer, which is becoming more and more important. Cheaper homes for young people are a different kind of idea, but I think it’s crucial, because if young people can’t afford to live in the centre, it slowly turns into a place where nobody actually lives. Free public events are enjoyable, but their effect is probably temporary, and longer opening hours would be convenient rather than life-changing. So, if I had to choose two, I’d go for cheaper homes and more parks. The first would keep the centre alive, and the second would make it somewhere people actually want to spend their time.' },
          { q: 'Some people say that cities will become less important as more people work from home. How far do you agree?', secs: 60, prep: 0,
            model: 'I agree up to a point. It’s true that many people no longer need to travel to an office every day, and some have already moved to smaller towns. However, I don’t think cities will lose their importance. People don’t only go to cities for work; they go for culture, education, healthcare and, above all, for other people. What might change is the way city centres are used, with fewer offices and more homes, cafés and public spaces. In that sense, working from home could actually make cities more pleasant rather than less important.' },
        ] },
      ],
    },
  ],
};
