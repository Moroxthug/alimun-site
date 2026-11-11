// Resource: quiz. English items stay English; explanations are in French.
export default {
  key: 'en-quiz-b2', site: 'fr', slug: 'quiz-anglais-b2', kind: 'quiz', course: 'English', level: 'B2',
  draw: 'monster', tint: 'lime', published: '2026-10-26',
  title: "Quiz d'anglais rapide : dix questions de niveau B2",
  metaTitle: "Quiz d'anglais B2 gratuit : grammaire et vocabulaire – Alimun",
  desc: "Un quiz d'anglais gratuit de dix questions au niveau B2 : passif, discours indirect, wish, used to, phrasal verbs et collocations, chaque réponse expliquée.",
  lead: "Dix questions sur la grammaire et les mots que tu rencontres au niveau B2. Choisis une réponse pour voir pourquoi elle est juste.",
  instructions: 'Choisis la meilleure réponse.',
  about: [
    "Au niveau B2, tu suis la plupart des conversations, des infos et des films sur des sujets familiers, tu défends un point de vue et tu écris des textes clairs et détaillés. La précision compte davantage : le passif, le discours indirect et les associations de mots naturelles commencent à faire la différence.",
    "Ce quiz vérifie le passif, les questions et les ordres au discours indirect, wish, used to et be used to, des phrasal verbs et des collocations courants. Ce sont aussi des points qui reviennent souvent au B2 First. Chaque réponse est accompagnée d'une courte explication.",
  ],
  items: [
    { q: 'The bridge ___ in 1990.', options: ['built', 'has built', 'was building', 'was built'], a: 3, why: "Le pont n'a rien construit, il a subi l'action, donc on utilise le passif : was built." },
    { q: 'The new hospital ___ right now, so the road is closed.', options: ['is building', 'has built', 'builds', 'is being built'], a: 3, why: 'Pour une action passive en cours en ce moment, on utilise is being + participe passé.' },
    { q: 'He asked me where ___.', options: ['I lived', 'did I live', 'do I live', 'I did live'], a: 0, why: "Dans une question au discours indirect, on garde l'ordre d'une phrase affirmative et on recule le temps : where I lived." },
    { q: 'She told me ___ the door.', options: ['to close', 'close', 'closing', 'that close'], a: 0, why: 'Pour rapporter une consigne, on utilise tell someone to do something.' },
    { q: 'I wish I ___ more free time. I am so busy this week.', options: ['have', 'will have', 'had', 'would have'], a: 2, why: 'Pour un souhait sur le présent, on utilise wish + past simple : I wish I had.' },
    { q: 'I wish I ___ to the party last night. Everyone says it was great.', options: ['went', 'had gone', 'have gone', 'would go'], a: 1, why: 'Pour un regret sur le passé, on utilise wish + past perfect : I wish I had gone.' },
    { q: 'I have lived in Chicago for years, so I ___ the cold winters.', options: ['used to', 'use to', 'am use to', 'am used to'], a: 3, why: "Be used to + nom veut dire être habitué à quelque chose, qui ne paraît donc plus étrange." },
    { q: 'When I was a child, I ___ play outside every day.', options: ['used to', 'am used to', 'was used to', 'use to'], a: 0, why: "Used to + verbe de base décrit une habitude passée qui n'est plus vraie." },
    { q: 'The game was ___ because of the storm.', options: ['called up', 'called on', 'called off', 'called out'], a: 2, why: 'Call off veut dire annuler quelque chose de prévu.' },
    { q: 'When you choose a school, you should ___ into account how far it is from home.', options: ['make', 'put', 'take', 'give'], a: 2, why: "L'expression figée est take something into account, qui veut dire prendre quelque chose en compte." },
  ],
  related: ['en-quiz-b1', 'en-quiz-c1', 'en-ex-b2'],
};
