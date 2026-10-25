// C1 Advanced practice test, Speaking (docs/TESTS.md). Written by Alimun; not official material.
// Draft for native-teacher review.
export const PAPER = {
  id: 'speaking', title: 'Speaking', minutes: 15,
  parts: [
    { id: 'p1', ref: 'Part 1', title: 'Interview',
      about: 'The examiner asks you some questions about yourself, your opinions and your experiences.',
      blocks: [
        { t: 'ex', kind: 'talk', marking: 'cambridge', h: 'Answer each question in a few sentences.', items: [
          { q: 'First of all, we’d like to know something about you. Where are you from, and what do you like most about living there?', secs: 30 },
          { q: 'What do you enjoy doing in your free time, and has that changed in recent years?', secs: 30 },
          { q: 'If you could spend a year working in another country, where would you go, and why?', secs: 30 },
          { q: 'Do you prefer to plan things carefully, or are you more of a spontaneous person?', secs: 30 },
          { q: 'What is the most useful thing you have learnt from a friend or a member of your family?', secs: 30 },
        ] },
      ] },
    { id: 'p2', ref: 'Part 2', title: 'Long turn',
      about: 'The examiner gives you two pictures and asks you to talk about them on your own for about a minute. Then the examiner asks you a short question about them.',
      blocks: [
        { t: 'ex', kind: 'talk', marking: 'cambridge', h: 'Compare the two pictures, then answer the follow-up question.', items: [
          { q: 'In this part of the test, I’m going to give you two pictures, and I’d like you to talk about them on your own for about a minute. Your pictures show people spending time in different public places. I’d like you to compare the pictures, and say why the people might have chosen to be there, and how they might be feeling. All right?',
            secs: 60, scenes: ['station', 'park'],
            model: `Both pictures show people in public places, but the atmosphere could hardly be more different. In the station, everyone seems to be in a hurry. I imagine most of them are commuters on their way to work, or perhaps people setting off on a trip, so they haven't really chosen to be there; it's simply somewhere they have to pass through. They're probably feeling a bit tense, checking the departure board and worrying about missing their train, although one or two of them might be quite excited if they're heading off on holiday.

The park, on the other hand, looks like a place people have chosen to visit for its own sake. They might have come to get some fresh air, to meet friends or just to get away from the noise of the city for an hour or so. I'd say they're far more relaxed than the people at the station; nobody seems to be watching the clock. Having said that, both places are shared spaces where strangers are close together, and in a way that's part of their appeal.` },
          { q: 'Which of these places would you find more relaxing to spend time in? Why?', secs: 30,
            model: `Without a doubt the park. I find stations quite stressful, even when I'm not in a rush, because of the announcements and the crowds. In a park you can slow down and actually notice what's around you.` },
        ] },
      ] },
    { id: 'p3', ref: 'Part 3', title: 'Collaborative task',
      about: 'You talk with the other candidate about the prompts on the card for about two minutes. Then you have about a minute to reach a decision together. In this practice test, give both sides of the discussion yourself.',
      blocks: [
        { t: 'ex', kind: 'talk', marking: 'cambridge', h: 'Discuss the question, using the ideas on the card.', items: [
          { q: 'Now I’d like you to talk about something together for about two minutes. Here are some things that can help people feel part of their local community, and a question for you to discuss. Talk to each other about how these things might help people feel part of their community.',
            secs: 120,
            notes: ['How might these things help people feel part of their community?', 'local festivals and events', 'volunteering', 'shared green spaces such as parks and gardens', 'independent shops and markets', 'online neighbourhood groups'],
            model: `Shall we start with festivals? I think they're quite powerful, because they give everyone a reason to come out of their homes at the same time. You end up chatting to people you'd normally just walk past. The only drawback is that they only happen once or twice a year, so the effect might not last.

Volunteering is different, because it's ongoing. If you help out at a food bank or a youth club every week, you get to know people from completely different backgrounds, and you feel you're contributing something, which is probably what belonging really means.

Green spaces are interesting too. A park or a community garden is somewhere people meet without having planned to. Parents chat while their children play, and people who grow vegetables side by side tend to swap advice and then, eventually, other things.

Local shops and markets work in a similar way. When the person who sells you bread knows your name, you feel recognised, and that matters more than people think. Supermarkets can't really offer that.

As for online groups, I'm a bit torn. They're very useful for practical things, like finding a lost cat or recommending a plumber, and they can reach people who are housebound. But I'm not sure they create real connections on their own; they work best when they lead to people actually meeting face to face.` },
          { q: 'Now you have about a minute to decide which of these things would do most to bring people in a community together.', secs: 60,
            model: `So, it seems to come down to festivals or volunteering. Festivals are great for bringing large numbers of people together, but they're over in a day. Volunteering, on the other hand, builds relationships week after week, and it gives people a genuine stake in the place where they live. I'd go for volunteering, then, because it lasts. If anything comes second, it would be shared green spaces, since they're open to everyone and cost nothing to use.` },
        ] },
      ] },
    { id: 'p4', ref: 'Part 4', title: 'Discussion',
      about: 'The examiner asks you some questions related to the topic of Part 3.',
      blocks: [
        { t: 'ex', kind: 'talk', marking: 'cambridge', h: 'Answer each question, giving reasons and examples.', items: [
          { q: 'Some people say that communities were stronger in the past than they are today. Do you agree?', secs: 45 },
          { q: 'Do you think technology has brought people closer together, or kept them further apart?', secs: 45 },
          { q: 'Should local authorities be responsible for creating a sense of community, or is that up to residents themselves?', secs: 45 },
          { q: 'Why do you think some people prefer not to get to know their neighbours?', secs: 45 },
          { q: 'How far does the place where someone grows up shape the kind of person they become?', secs: 45 },
        ] },
      ] },
  ],
};
