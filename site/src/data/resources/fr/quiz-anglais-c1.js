// Resource: quiz. English items stay English; explanations are in French.
export default {
  key: 'en-quiz-c1', site: 'fr', slug: 'quiz-anglais-c1', kind: 'quiz', course: 'English', level: 'C1',
  draw: 'alien', tint: 'mint', published: '2026-10-26',
  title: "Quiz d'anglais rapide : dix questions de niveau C1",
  metaTitle: "Quiz d'anglais C1 gratuit : grammaire et vocabulaire – Alimun",
  desc: "Un quiz d'anglais gratuit de dix questions au niveau C1 : inversion, phrases clivées, collocations, expressions idiomatiques et paronymes, chaque réponse expliquée.",
  lead: "Dix questions sur la grammaire et les mots que tu rencontres au niveau C1. Choisis une réponse pour voir pourquoi elle est juste.",
  instructions: 'Choisis la meilleure réponse.',
  about: [
    "Au niveau C1, tu utilises l'anglais avec souplesse pour le travail, les études et la vie sociale. Tu comprends des textes longs et exigeants, tu saisis les sous-entendus et tu t'exprimes avec aisance sans chercher tes mots. L'enjeu n'est plus de faire juste, mais de choisir la formulation la plus précise et la plus naturelle.",
    "Ce quiz vérifie l'inversion après une ouverture négative ou conditionnelle, les phrases clivées pour mettre en relief, les collocations avancées, des expressions idiomatiques courantes et des mots qui se ressemblent mais n'ont pas le même sens. Ces points reviennent aussi au C1 Advanced et à l'IELTS. Chaque réponse est accompagnée d'une courte explication.",
  ],
  items: [
    { q: 'Never ___ such a beautiful sunset.', options: ['I have seen', 'have I seen', 'I saw', 'did I saw'], a: 1, why: "Quand une phrase commence par un mot négatif comme never, le sujet et l'auxiliaire s'inversent : never have I seen." },
    { q: 'Not only ___ late, but he also forgot the tickets.', options: ['did he arrive', 'he arrived', 'he did arrive', 'arrived he'], a: 0, why: "Après not only en début de phrase, on utilise l'ordre d'une question avec un auxiliaire : not only did he arrive." },
    { q: '___ I known about the problem, I would have helped.', options: ['If', 'Have', 'Had', 'Should'], a: 2, why: 'Had I known est un third conditional inversé et veut dire la même chose que if I had known.' },
    { q: '___ I need is a long vacation.', options: ['That', 'What', 'Which', 'It'], a: 1, why: 'Une phrase clivée avec what met l\'accent sur la fin : what I need is a long vacation.' },
    { q: 'It was Maria ___ found the mistake, not Tom.', options: ['which', 'what', 'who', 'whom'], a: 2, why: "Dans une phrase clivée en it sur une personne sujet, on utilise who (ou that) : it was Maria who found it." },
    { q: 'The report ___ serious doubts about the project.', options: ['rose', 'arose', 'raised', 'lifted'], a: 2, why: "Raise prend un complément et s'associe à doubts, questions et concerns ; rise et arise n'en prennent pas." },
    { q: 'The decision ___ a storm of protest.', options: ['lit', 'fired', 'burned', 'sparked'], a: 3, why: "Spark s'associe à protest, debate et controversy et veut dire les déclencher soudainement." },
    { q: 'I expected the exam to be hard, but it was a ___.', options: ['cup of tea', 'piece of cake', 'slice of bread', 'bag of tricks'], a: 1, why: "A piece of cake est une expression idiomatique pour quelque chose de très facile, comme « du gâteau »." },
    { q: 'We will have to ___ the bullet and pay for the repairs.', options: ['chew', 'hit', 'take', 'bite'], a: 3, why: "Bite the bullet veut dire accepter quelque chose de désagréable qu'on ne peut pas éviter." },
    { q: 'The instructions were so ___ that nobody knew what to do.', options: ['ambivalent', 'ambitious', 'ambiguous', 'amiable'], a: 2, why: 'Ambiguous veut dire qui peut avoir plusieurs sens ; ambivalent décrit des sentiments partagés, pas des textes.' },
  ],
  related: ['en-quiz-b2', 'en-ex-c1', 'en-ex-b2'],
};
