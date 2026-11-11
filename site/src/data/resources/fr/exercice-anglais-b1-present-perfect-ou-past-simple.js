// Resource: exercise. English items stay English; explanations are in French.
export default {
  key: 'en-ex-b1', site: 'fr', slug: 'exercice-anglais-b1-present-perfect-ou-past-simple', kind: 'exercise', course: 'English', level: 'B1',
  draw: 'owl', tint: 'coral', published: '2026-10-26',
  title: "Exercice d'anglais : present perfect ou past simple ? (B1)",
  metaTitle: 'Exercices anglais present perfect ou past simple B1 – Alimun',
  desc: "Douze questions gratuites pour le niveau B1 en anglais sur le present perfect et le past simple, avec les mots de temps comme indices et chaque réponse expliquée.",
  lead: "Choisis le present perfect ou le past simple dans chaque phrase. Tu vois tout de suite si tu as juste, et pourquoi.",
  instructions: 'Choisis le bon temps.',
  about: [
    "On utilise le past simple pour une action qui s'est passée à un moment terminé : yesterday, last Friday, two days ago, in 2019, when I was a child. Si la phrase dit ou laisse clairement comprendre quand c'est arrivé, le past simple est le bon choix, et les questions avec when le prennent aussi : \"When did you move here?\" C'est aussi le temps qu'on emploie pour la vie, terminée, des personnes décédées, comme dans \"Leonardo da Vinci painted the Mona Lisa.\"",
    "On utilise le present perfect (have ou has + participe passé) quand la période va jusqu'à maintenant. Il s'emploie avec since et for quand la situation est toujours vraie (\"She has lived here since 2020\"), avec les questions en how long (\"How long have you known her?\"), après \"This is the first time...\" et avec les périodes qui ne sont pas encore finies, comme all my life. Un test simple : si tu peux ajouter un moment terminé comme yesterday, choisis le past simple ; si l'action est liée au présent, choisis le present perfect.",
  ],
  items: [
    { q: 'We ___ to Japan in 2019.', options: ['have gone', 'went', 'have been'], a: 1, why: 'In 2019 est un moment terminé, donc on utilise le past simple.' },
    { q: 'She ___ in Boston since 2020.', options: ['has lived', 'lived', 'lives'], a: 0, why: "Since + point de départ montre une situation qui dure jusqu'à maintenant : present perfect." },
    { q: 'I ___ my keys two days ago.', options: ['have lost', 'lose', 'lost'], a: 2, why: 'Ago renvoie à un moment terminé, donc on utilise le past simple.' },
    { q: 'How long ___ you known Maria?', options: ['did', 'have', 'do'], a: 1, why: 'Les questions en how long sur une situation toujours vraie prennent le present perfect.' },
    { q: 'This is the first time I ___ sushi.', options: ['ate', 'eat', 'have eaten'], a: 2, why: "Après \"This is the first time\", l'anglais utilise le present perfect." },
    { q: 'When ___ you move to this apartment?', options: ['did', 'have', 'are'], a: 0, why: 'Les questions avec when portent sur un moment terminé, donc elles prennent le past simple.' },
    { q: 'They ___ married for ten years, and they are still very happy.', options: ['were', 'are', 'have been'], a: 2, why: "For + une durée qui continue jusqu'à maintenant prend le present perfect." },
    { q: 'Leonardo da Vinci ___ the Mona Lisa.', options: ['has painted', 'painted', 'paints'], a: 1, why: "Sa vie est terminée, donc l'action appartient à un moment terminé : past simple." },
    { q: 'He ___ for the company since he left college.', options: ['has worked', 'worked', 'works'], a: 0, why: 'Since + un événement passé, avec un emploi qui continue, prend le present perfect.' },
    { q: 'I ___ him last Friday at the party.', options: ['have seen', 'saw', 'see'], a: 1, why: 'Last Friday est un moment terminé, donc on utilise le past simple.' },
    { q: 'I ___ in this town all my life, and I don\'t want to leave.', options: ['lived', 'was living', 'have lived'], a: 2, why: "All my life est une période qui n'est pas encore finie, donc on utilise le present perfect." },
    { q: 'What ___ you do last weekend?', options: ['have', 'did', 'do'], a: 1, why: 'Last weekend est un moment terminé, donc la question se forme avec did.' },
  ],
  related: ['en-ex-a2', 'en-ex-b2', 'en-quiz-b1'],
};
