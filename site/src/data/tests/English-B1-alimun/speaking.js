// Alimun test, English B1: Speaking. Draft for native-teacher review.
export const PAPER = {
  id: 'speaking', title: 'Speaking', minutes: 10,
  parts: [
    {
      id: 'p1', ref: 'Part 1', title: 'Interview',
      about: 'The examiner asks you some questions about yourself. Give full answers with reasons and examples.',
      blocks: [
        { t: 'ex', kind: 'talk', marking: 'alimun', h: 'Answer the questions.', items: [
          { q: 'Tell me about your work or your studies. What do you enjoy about them?', secs: 45, prep: 0 },
          { q: 'How has the place where you live changed since you were a child?', secs: 45, prep: 0 },
          { q: 'What do you usually do to stay healthy?', secs: 45, prep: 0 },
          { q: 'If you could live in another country for a year, where would you go, and why?', secs: 45, prep: 0 },
        ] },
      ],
    },
    {
      id: 'p2', ref: 'Part 2', title: 'Describe a picture',
      about: 'Look at the picture and talk about it for about one minute.',
      blocks: [
        { t: 'ex', kind: 'talk', marking: 'alimun', h: 'Describe the picture.', items: [
          { q: 'Here is a picture of a station. Please tell me what you can see and what you think is happening.', secs: 60, prep: 15, scene: 'station',
            model: 'This picture shows a train station. There’s a train at the platform, so I think it has just arrived or it’s about to leave. On the right there’s a big clock and a bench, and next to the bench there’s a suitcase. Maybe someone is waiting for a later train and has gone to buy a coffee, or perhaps they’re going on holiday. The platform is quite empty, so it probably isn’t rush hour. It might be the middle of the day or late in the evening. The station looks clean and calm. Personally, I prefer travelling by train to travelling by bus, because you can read or look out of the window, and it’s usually more comfortable.' },
        ] },
      ],
    },
    {
      id: 'p3', ref: 'Part 3', title: 'Give your opinion',
      about: 'Read the card. Talk about the ideas, give your opinion and explain why.',
      blocks: [
        { t: 'ex', kind: 'talk', marking: 'alimun', h: 'Talk about the topic.', items: [
          { q: 'Your town has some money to make life better for young people. Here are some ideas. Talk about which ones would help most, and say which one you would choose.', secs: 90, prep: 30,
            notes: ['a new sports centre', 'cheaper buses', 'a free study space with computers', 'more concerts and festivals', 'a job advice centre'],
            model: 'I think all of these ideas would help young people, but some are more useful than others. A new sports centre would be good for people’s health, but it would be very expensive, and there are already some sports clubs in most towns. Concerts and festivals are fun, but they only happen a few times a year. Cheaper buses would make a real difference, because a lot of young people don’t have a car and can’t afford to travel to college or to work. A free study space would also be useful, especially for students who share a small flat and have nowhere quiet to work. If I had to choose one, I would choose cheaper buses, because they would help young people get to school, jobs and friends, and everyone could use them every day.' },
        ] },
      ],
    },
  ],
};
