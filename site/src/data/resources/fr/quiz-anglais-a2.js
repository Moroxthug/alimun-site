// Resource: quiz. English items stay English; explanations are in French.
export default {
  key: 'en-quiz-a2', site: 'fr', slug: 'quiz-anglais-a2', kind: 'quiz', course: 'English', level: 'A2',
  draw: 'dog', tint: 'coral', published: '2026-10-26',
  title: "Quiz d'anglais rapide : dix questions de niveau A2",
  metaTitle: "Quiz d'anglais A2 gratuit : grammaire et vocabulaire – Alimun",
  desc: "Un quiz d'anglais gratuit de dix questions au niveau A2 : past simple, comparatifs, going to, some et any, prépositions de temps, chaque réponse expliquée.",
  lead: "Dix questions sur la grammaire et les mots que tu rencontres au niveau A2. Choisis une réponse pour voir pourquoi elle est juste.",
  instructions: 'Choisis la meilleure réponse.',
  about: [
    "Au niveau A2, tu sais parler de ton passé, comparer des choses et faire des projets simples. Tu te débrouilles pour faire des achats, commander à manger, demander ton chemin et écrire de courts messages sur des sujets du quotidien.",
    "Ce quiz vérifie les points qui reviennent le plus à ce niveau : le past simple, les comparatifs, going to pour les projets et les prévisions, some et any, les noms dénombrables et indénombrables, et les prépositions de temps. Chaque réponse est accompagnée d'une courte explication.",
  ],
  items: [
    { q: 'We ___ to the beach last weekend.', options: ['go', 'went', 'gone', 'have gone'], a: 1, why: 'Last weekend est un moment terminé du passé, donc on utilise le past simple : went.' },
    { q: 'Did you ___ the email?', options: ['see', 'saw', 'seen', 'seeing'], a: 0, why: 'Après did dans une question, on utilise la forme de base du verbe : did you see?' },
    { q: 'My sister is ___ than me.', options: ['more tall', 'tallest', 'tall', 'taller'], a: 3, why: 'Les adjectifs courts prennent -er pour comparer deux choses : tall, taller.' },
    { q: 'This book is ___ than that one.', options: ['the most interesting', 'interestinger', 'more interesting', 'interesting'], a: 2, why: 'Les adjectifs longs utilisent more pour comparer deux choses : more interesting than.' },
    { q: 'Look at those dark clouds! It ___ rain.', options: ['is going to', 'will to', 'going to', 'is go to'], a: 0, why: "On utilise be going to pour une prévision fondée sur ce qu'on voit maintenant." },
    { q: 'There isn\'t ___ bread left.', options: ['some', 'any', 'many', 'a'], a: 1, why: 'On utilise any dans les phrases négatives ; bread est indénombrable, donc many et a sont faux.' },
    { q: 'How ___ water do you drink every day?', options: ['much', 'many', 'few', 'lot'], a: 0, why: 'Water est indénombrable, donc on dit how much ; how many sert pour les noms dénombrables.' },
    { q: 'She gave me some good ___.', options: ['advices', 'an advice', 'advise', 'advice'], a: 3, why: "Advice est un nom indénombrable, sans pluriel ; advise est le verbe." },
    { q: 'The meeting is ___ Monday morning.', options: ['in', 'at', 'to', 'on'], a: 3, why: "On utilise on avec les jours, y compris pour un moment d'un jour précis : on Monday morning." },
    { q: 'I started this job three years ___.', options: ['ago', 'since', 'for', 'last'], a: 0, why: "Ago se place après une durée pour dire quand quelque chose s'est passé : il correspond à « il y a »." },
  ],
  related: ['en-quiz-a1', 'en-quiz-b1', 'en-ex-a2'],
};
