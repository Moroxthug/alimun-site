// IELTS Academic practice test (English B2): Speaking. Written by Alimun; not official material. Draft for review.
// Part 1 interview, Part 2 long turn with a task card (one minute to prepare), Part 3 discussion.
export const PAPER = {
  id: 'speaking', title: 'Speaking', minutes: 14,
  parts: [
    { id: 'p1', ref: 'Part 1', title: 'Introduction and interview',
      about: 'The examiner asks you questions about yourself and some familiar topics. This part lasts four to five minutes.',
      blocks: [
        { t: 'ex', kind: 'talk', marking: 'ielts', h: 'Answer the examiner\'s questions.', items: [
          { q: 'Let\'s talk about what you do. Do you work, or are you a student?', secs: 25 },
          { q: 'What do you enjoy most about your work or your studies?', secs: 30 },
          { q: 'Now let\'s talk about the weather. What kind of weather do you like best?', secs: 30 },
          { q: 'Does the weather ever affect your mood?', secs: 30 },
          { q: 'Has the weather where you live changed since you were a child?', secs: 30 },
        ] },
      ] },

    { id: 'p2', ref: 'Part 2', title: 'Long turn',
      about: 'You have one minute to prepare a talk on the topic on the card, and then you talk for one to two minutes. You can make notes.',
      blocks: [
        { t: 'ex', kind: 'talk', marking: 'ielts', h: 'Read the task card. You have one minute to prepare, then talk for up to two minutes.', items: [
          { q: 'I\'m going to give you a topic, and I\'d like you to talk about it for one to two minutes. Before you talk, you\'ll have one minute to think about what you\'re going to say. You can make some notes if you wish. Here is your topic. Describe a skill you learned outside school or university.',
            prep: 60, secs: 120,
            notes: ['Describe a skill you learned outside school or university.', 'You should say: what the skill is', 'when and how you learned it', 'who helped you to learn it', 'and explain why this skill is useful to you.'],
            model: [
              'I\'d like to talk about learning to cook, which is something I picked up entirely outside the classroom. At school we never had cookery lessons, so when I moved into a shared flat at the age of nineteen, I could barely boil an egg, and for the first few months I was living on toast and instant noodles.',
              'The turning point came when one of my flatmates, a guy called Marco, offered to teach me. His family ran a small restaurant, so he\'d grown up in a kitchen, and he was incredibly patient. Every Sunday evening we\'d cook a meal together. He\'d show me one basic technique each week, how to chop an onion properly, how to make a simple sauce, that kind of thing, and then I\'d have to cook the same dish on my own during the week. Later on I started watching videos online as well, but honestly, I don\'t think I\'d have stuck with it without Marco standing over me and tasting everything.',
              'As for why it\'s useful, well, the obvious answer is that I eat much better and spend far less money than I used to. But it\'s more than that. Cooking has become a way of relaxing after a stressful day, and it\'s also a great way to bring people together. These days, whenever friends come round, I\'m the one who does the cooking, and I really enjoy that. So I\'d say it\'s probably the most valuable thing I learned during my time as a student, even though it had nothing to do with my degree.',
            ].join('\n\n') },
        ] },
      ] },

    { id: 'p3', ref: 'Part 3', title: 'Discussion',
      about: 'The examiner asks you more general and abstract questions connected with the topic of Part 2. This part lasts four to five minutes.',
      blocks: [
        { t: 'ex', kind: 'talk', marking: 'ielts', h: 'Answer the examiner\'s questions. Give reasons and examples.', items: [
          { q: 'We\'ve been talking about a skill you learned, and now I\'d like to discuss some more general questions about learning skills. Why do you think many people now prefer to learn practical skills from online videos rather than from a teacher?', secs: 45 },
          { q: 'Do you think practical skills, such as cooking or repairing things, are valued less today than they were in the past? Why?', secs: 45 },
          { q: 'Should schools spend more time teaching practical skills, even if this means less time for academic subjects?', secs: 45 },
          { q: 'How do you think the skills that employers look for will change in the future?', secs: 45 },
          { q: 'Is it harder for adults to learn new skills than it is for children? Why or why not?', secs: 45 },
        ] },
      ] },
  ],
};
