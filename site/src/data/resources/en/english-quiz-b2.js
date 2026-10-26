// Resource: quiz. English items stay English; explanations are in the reader's language.
export default {
  key: 'en-quiz-b2', site: 'en', slug: 'english-quiz-b2', kind: 'quiz', course: 'English', level: 'B2',
  draw: 'monster', tint: 'lime', published: '2026-10-26',
  title: 'English quick quiz: ten questions at B2',
  metaTitle: 'Free English quiz B2: grammar and vocabulary – Alimun',
  desc: 'A free ten-question English quiz at B2 level: the passive, reported speech, wish, used to, phrasal verbs and collocations, with every answer explained.',
  lead: 'Ten questions on the grammar and words you meet at B2. Pick an answer to see why it is right.',
  instructions: 'Choose the best answer.',
  about: [
    'At B2 you can follow most conversations, news and films on familiar topics, argue for a point of view and write clear, detailed texts. Accuracy matters more now: the passive, reported speech and natural word combinations start to make the difference.',
    'This quiz checks the passive, reported questions and commands, wish, used to and be used to, common phrasal verbs and collocations. These are also points that come up often in B2 First. Every answer comes with a short explanation.',
  ],
  items: [
    { q: 'The bridge ___ in 1990.', options: ['built', 'has built', 'was building', 'was built'], a: 3, why: 'The bridge did not build anything; it received the action, so use the passive: was built.' },
    { q: 'The new hospital ___ right now, so the road is closed.', options: ['is building', 'has built', 'builds', 'is being built'], a: 3, why: 'For a passive action in progress now, use is being + past participle.' },
    { q: 'He asked me where ___.', options: ['I lived', 'did I live', 'do I live', 'I did live'], a: 0, why: 'In a reported question, use normal statement word order and shift the tense back: where I lived.' },
    { q: 'She told me ___ the door.', options: ['to close', 'close', 'closing', 'that close'], a: 0, why: 'To report an instruction, use tell someone to do something.' },
    { q: 'I wish I ___ more free time. I am so busy this week.', options: ['have', 'will have', 'had', 'would have'], a: 2, why: 'For a wish about the present, use wish + past simple: I wish I had.' },
    { q: 'I wish I ___ to the party last night. Everyone says it was great.', options: ['went', 'had gone', 'have gone', 'would go'], a: 1, why: 'For a regret about the past, use wish + past perfect: I wish I had gone.' },
    { q: 'I have lived in Chicago for years, so I ___ the cold winters.', options: ['used to', 'use to', 'am use to', 'am used to'], a: 3, why: 'Be used to + noun means to be familiar with something, so it no longer feels strange.' },
    { q: 'When I was a child, I ___ play outside every day.', options: ['used to', 'am used to', 'was used to', 'use to'], a: 0, why: 'Used to + base verb describes a past habit that is no longer true.' },
    { q: 'The game was ___ because of the storm.', options: ['called up', 'called on', 'called off', 'called out'], a: 2, why: 'Call off means to cancel something that was planned.' },
    { q: 'When you choose a school, you should ___ into account how far it is from home.', options: ['make', 'put', 'take', 'give'], a: 2, why: 'The fixed expression is take something into account, meaning to consider it.' },
  ],
  related: ['en-quiz-b1', 'en-quiz-c1', 'en-ex-b2'],
};
