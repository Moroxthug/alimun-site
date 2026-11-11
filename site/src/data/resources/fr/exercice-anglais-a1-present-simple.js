// Resource: exercise. English items stay English; explanations are in French.
export default {
  key: 'en-ex-a1', site: 'fr', slug: 'exercice-anglais-a1-present-simple', kind: 'exercise', course: 'English', level: 'A1',
  draw: 'teacup', tint: 'mint', published: '2026-10-26',
  title: "Exercice d'anglais : le present simple (A1)",
  metaTitle: "Exercices anglais present simple A1 (gratuit, corrigé) – Alimun",
  desc: "Douze questions gratuites sur le present simple pour débuter en anglais (A1) : am, is, are, do, does et le -s à la 3e personne, chaque réponse expliquée.",
  lead: "Choisis la bonne forme du verbe dans chaque phrase. Tu vois tout de suite si tu as juste, et pourquoi.",
  instructions: 'Choisis la bonne forme.',
  about: [
    "Le present simple sert à parler des habitudes, des routines et des vérités générales : I work in an office, she drinks tea, water boils at 100 degrees. Avec le verbe be, on dit am avec I, is avec he, she et it, et are avec you, we et they. Avec les autres verbes, on ajoute -s après he, she et it (she lives, he works), -es après ch, sh, s, x et o (he watches, she goes), et une consonne + y finale devient -ies (the baby cries). Have devient has.",
    "Pour les questions et la négation, les autres verbes ont besoin d'un auxiliaire : do avec I, you, we et they, et does avec he, she et it. Après does et doesn't, le verbe principal reprend sa forme de base : on dit \"Does she live here?\" et \"He doesn't eat meat\", jamais \"Does she lives\". Le verbe be n'a pas besoin de cet auxiliaire : \"Are you tired?\" et \"I am not ready.\"",
  ],
  items: [
    { q: 'She ___ in a big city.', options: ['live', 'lives', 'living'], a: 1, why: 'Avec he, she et it, on ajoute -s au verbe : she lives.' },
    { q: 'They ___ from Brazil.', options: ['is', 'am', 'are'], a: 2, why: 'Avec they, le verbe be devient are : they are.' },
    { q: '___ you like coffee?', options: ['Do', 'Does', 'Are'], a: 0, why: 'Les questions avec you se forment avec do + verbe de base : Do you like... ?' },
    { q: 'My brother ___ eat meat.', options: ["don't", "doesn't", "isn't"], a: 1, why: "My brother, c'est he, donc la négation est doesn't + verbe de base." },
    { q: 'I ___ a student.', options: ['is', 'are', 'am'], a: 2, why: 'Avec I, le verbe be est toujours am : I am.' },
    { q: 'He ___ TV every evening.', options: ['watches', 'watchs', 'watch'], a: 0, why: 'Les verbes en ch prennent -es avec he, she et it : he watches.' },
    { q: '___ your sister work in a bank?', options: ['Do', 'Is', 'Does'], a: 2, why: "Your sister, c'est she, donc la question se forme avec does + verbe de base." },
    { q: 'My parents ___ have a car.', options: ["doesn't", "don't", "aren't"], a: 1, why: "My parents, c'est they, donc la négation est don't + verbe de base." },
    { q: 'He ___ two brothers.', options: ['has', 'have', 'haves'], a: 0, why: 'Have est irrégulier : avec he, she et it, il devient has.' },
    { q: 'The baby ___ a lot at night.', options: ['crys', 'cry', 'cries'], a: 2, why: 'Après une consonne, le y final devient -ies : cry devient cries.' },
    { q: 'Where ___ he live?', options: ['do', 'does', 'is'], a: 1, why: 'Les questions avec he prennent does, et le verbe principal reste à la forme de base : Where does he live?' },
    { q: 'The store ___ at nine o\'clock.', options: ['opens', 'open', 'opening'], a: 0, why: "The store, c'est it, donc le verbe prend un -s : it opens." },
  ],
  related: ['en-ex-a2', 'en-quiz-a1', 'en-quiz-a2'],
};
