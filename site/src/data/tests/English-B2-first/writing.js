// Practice test in the format of B2 First: Writing. Original Alimun tasks and model answers, not official material. Draft for native-teacher review.
export const PAPER = {
  id: 'writing', title: 'Writing', minutes: 80,
  parts: [
    {
      id: 'p1', ref: 'Part 1', title: 'Essay',
      about: 'You must answer this question. Write your answer in 140 to 190 words in an appropriate style.',
      blocks: [
        { t: 'ex', kind: 'write', marking: 'cambridge', h: 'Write an essay using all the notes and giving reasons for your point of view.', items: [
          { min: 140, max: 190,
            task: 'In your English class you have been talking about life in towns and cities. Now your English teacher has asked you to write an essay.\n\n**Should cars be banned from city centres?**\n\nNotes. Write about air quality, local shops and businesses, and your own idea.',
            model: 'In many cities, the streets in the centre are full of traffic. Some people believe that the only solution is to ban cars completely, but is this really a good idea?\n\nThe strongest argument for a ban is the effect on air quality. Exhaust fumes make city centres unpleasant places to walk, and they are a serious risk to people’s health, especially children and older people. Without cars, the air would be noticeably cleaner within a short time.\n\nOn the other hand, many shop owners worry that they would lose customers. People who live outside the city often drive in to do their shopping, and if they could no longer park nearby, they might go to large shopping centres instead.\n\nAnother point to consider is people with limited mobility. For someone who cannot walk far, a car may be the only practical way to reach a doctor or a bank in the centre.\n\nIn my opinion, a complete ban would go too far. However, cities could close most central streets to private cars while improving public transport and allowing access for those who really need it.' },
        ] },
      ],
    },
    {
      id: 'p2', ref: 'Part 2', title: 'Choose one task',
      about: 'Write an answer to one of the questions in this part. Write your answer in 140 to 190 words in an appropriate style.',
      blocks: [
        { t: 'ex', kind: 'write', marking: 'cambridge', choose: true, h: 'Choose one of these tasks and write your answer.', items: [
          { min: 140, max: 190,
            task: '**Article.** You see this announcement in an English-language magazine for young people.\n\n*A place to relax.* Tell us about a place in your town or city where you like to spend your free time. What is it like, and why do you enjoy going there? Would you recommend it to visitors? The best articles will be published next month.\n\nWrite your **article**.',
            model: '**My favourite escape: the old boathouse**\n\nEvery town has a place where you can forget about the rest of the world for a while. In mine, it’s a small café inside an old boathouse on the edge of the lake.\n\nFrom the outside, it doesn’t look like much. The paint is peeling and the sign is so faded that you can hardly read it. Inside, though, it’s a different story. There are mismatched armchairs, shelves full of second-hand books that you’re welcome to borrow, and enormous windows looking out over the water.\n\nWhat I love most is how calm it is. Nobody rushes you, even if you sit for hours over a single cup of hot chocolate. On winter afternoons I go there to read or study, and in summer I sit on the wooden deck and watch the sailing boats go past.\n\nWould I recommend it to visitors? Absolutely, as long as you’re not in a hurry. It isn’t the place for a quick coffee. But if you want to see the town the way the locals do, there’s nowhere better.' },
          { min: 140, max: 190,
            task: '**Email.** You have received this email from your English-speaking friend Sam.\n\n*I’m thinking of getting a summer job at a campsite in your country next year. What kind of work do you think I could do there? Is there anything I should know before I apply? And would it be a good way to improve my language skills? Thanks, Sam*\n\nWrite your **email**.',
            model: 'Hi Sam,\n\nWhat a great idea! Lots of students here work at campsites in the summer, and my cousin did it two years ago, so I know a bit about it.\n\nThere are quite a few different jobs you could do. Most campsites need people to clean and tidy up, which isn’t very exciting, but you could also work in the shop or the café, or help with activities for children. If you’re good at sport, some places look for people to teach swimming or run games on the beach.\n\nThe main thing to know is that you should apply early. The best jobs usually go by March. Also, be ready for long days. My cousin often worked from eight in the morning until ten at night, especially in August.\n\nAs for the language, I think it would really help. You’d be talking to guests and other staff all day, so you’d pick up a lot of everyday expressions very quickly.\n\nLet me know if you decide to go for it. You could even come and stay with us on your day off.\n\nBest wishes,\nNadia' },
          { min: 140, max: 190,
            task: '**Review.** You see this notice on an English-language website about television.\n\n*Reviews wanted: a series that made you laugh.* Write a review of a comedy series you have watched. Tell us what it is about and what made it funny. Is there anything you did not like about it? Would you recommend it to other people?\n\nWrite your **review**. You may write about a real series or one you invent, but do not copy a real review.',
            model: '**The Night Desk: a comedy worth staying up for**\n\n*The Night Desk* follows four very different people who work the night shift at a small, slightly run-down hotel. Nothing dramatic ever really happens, but that is exactly what makes it so funny.\n\nThe humour comes mostly from the characters. There’s the manager, who takes every tiny problem extremely seriously, and the young receptionist, who would rather be anywhere else. Their conversations at three in the morning, about lost keys or a guest’s noisy parrot, are some of the funniest scenes I have seen on television. The writing is clever, and the jokes never feel forced.\n\nThat said, the series is not perfect. The second season introduces a romance between two of the main characters, and these episodes are noticeably weaker. The story becomes predictable, and there are fewer laughs.\n\nOverall, though, I would strongly recommend *The Night Desk*, especially to anyone who enjoys gentle, character-based comedy rather than slapstick. Watch the first season first; if you love it as much as I did, you’ll forgive the second.' },
        ] },
      ],
    },
  ],
};
