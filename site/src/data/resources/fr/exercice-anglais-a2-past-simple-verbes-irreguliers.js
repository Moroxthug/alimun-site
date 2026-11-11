// Resource: exercise. English items stay English; explanations are in French.
export default {
  key: 'en-ex-a2', site: 'fr', slug: 'exercice-anglais-a2-past-simple-verbes-irreguliers', kind: 'exercise', course: 'English', level: 'A2',
  draw: 'snail', tint: 'sun', published: '2026-10-26',
  title: "Exercice d'anglais : le past simple des verbes irréguliers (A2)",
  metaTitle: 'Exercices anglais past simple verbes irréguliers A2 – Alimun',
  desc: "Douze questions gratuites sur le past simple pour le niveau A2 en anglais : went, saw, took, did et d'autres verbes irréguliers, chaque réponse expliquée.",
  lead: "Choisis la bonne forme du passé dans chaque phrase. Tu vois tout de suite si tu as juste, et pourquoi.",
  instructions: 'Choisis la bonne forme.',
  about: [
    "Le past simple sert à parler d'actions terminées à un moment terminé du passé : yesterday, last week, two years ago, in 2019. Les verbes réguliers prennent -ed (work, worked), mais beaucoup des verbes les plus courants sont irréguliers et ont leur propre forme du passé, à apprendre par cœur : go devient went, see devient saw, take devient took, buy devient bought. Le verbe be a deux formes au passé : was avec I, he, she et it, et were avec you, we et they.",
    "Au passé, les questions et la négation se forment avec did et didn't pour toutes les personnes, et après did le verbe principal reprend sa forme de base : \"Did you eat?\" et \"I didn't sleep well\", jamais \"Did you ate\". Une erreur fréquente consiste à utiliser le participe passé (gone, seen, taken) à la place du past simple. Le participe va avec have, comme dans \"I have seen it\", donc tout seul il est faux : on dit \"I saw it\", pas \"I seen it\".",
  ],
  items: [
    { q: 'Yesterday I ___ to the beach.', options: ['goed', 'went', 'gone', 'go'], a: 1, why: 'Go est irrégulier : son past simple est went.' },
    { q: 'She ___ a new phone last week.', options: ['bought', 'buyed', 'buy', 'boughted'], a: 0, why: 'Buy est irrégulier : son past simple est bought.' },
    { q: 'We ___ a great movie on Saturday.', options: ['seen', 'saw', 'seed', 'see'], a: 1, why: 'Le past simple de see est saw ; seen a besoin de have devant lui.' },
    { q: 'Did you ___ breakfast this morning?', options: ['ate', 'eaten', 'eat', 'eated'], a: 2, why: 'Après did, le verbe principal est à la forme de base : Did you eat?' },
    { q: 'He ___ his keys at home this morning.', options: ['leaved', 'lefted', 'left', 'leave'], a: 2, why: 'Leave est irrégulier : son past simple est left.' },
    { q: 'I ___ sleep well last night.', options: ["didn't", "don't", "wasn't"], a: 0, why: "Au passé, la négation des verbes ordinaires se forme avec didn't + verbe de base." },
    { q: 'They ___ a lot of photos on vacation.', options: ['taken', 'taked', 'took'], a: 2, why: 'Le past simple de take est took ; taken a besoin de have devant lui.' },
    { q: 'Last night my grandfather ___ me a story.', options: ['told', 'telled', 'tells'], a: 0, why: 'Tell est irrégulier : son past simple est told.' },
    { q: 'She ___ her friend at the coffee shop yesterday.', options: ['meeted', 'met', 'meets'], a: 1, why: 'Meet est irrégulier : son past simple est met.' },
    { q: 'What time ___ you get up yesterday?', options: ['did', 'do', 'were'], a: 0, why: 'Au passé, les questions avec des verbes ordinaires se forment avec did + verbe de base.' },
    { q: 'I ___ a letter to my aunt last month.', options: ['writed', 'written', 'wrote'], a: 2, why: 'Le past simple de write est wrote ; written a besoin de have devant lui.' },
    { q: 'We ___ very tired after the long walk.', options: ['was', 'were', 'are'], a: 1, why: 'Au passé, be devient were avec we, you et they.' },
  ],
  related: ['en-ex-a1', 'en-ex-b1', 'en-quiz-a2'],
};
