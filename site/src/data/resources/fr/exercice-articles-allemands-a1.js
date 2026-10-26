// Resource: exercise. German items stay German; instructions and explanations are in French.
export default {
  key: 'de-articles-a1', site: 'fr', slug: 'exercice-articles-allemands-a1', kind: 'exercise', course: 'German', level: 'A1',
  draw: 'pretzel', tint: 'sun', published: '2026-10-26',
  title: 'Exercice sur les articles allemands : der, die ou das ? (A1)',
  metaTitle: 'Exercice articles allemands der, die, das (A1, gratuit) – Alimun',
  desc: "Douze questions gratuites sur der, die et das pour débuter en allemand (A1), corrigées tout de suite, avec une explication pour chaque réponse.",
  lead: "Choisis der, die ou das pour chaque nom. Tu vois tout de suite si tu as juste, et pourquoi.",
  instructions: "Choisis le bon article.",
  about: [
    "En allemand, chaque nom a un genre, et l'article le montre : der pour le masculin, die pour le féminin et das pour le neutre. Au pluriel, les trois deviennent die.",
    "Beaucoup de noms trahissent leur genre par leur terminaison : les noms en -ung, -heit et -keit sont féminins, les noms en -chen sont neutres, et les jours, les mois et les saisons sont masculins. Les autres s'apprennent avec le nom, c'est pour ça que ça vaut la peine de toujours dire l'article à voix haute.",
  ],
  items: [
    { q: '___ Zeitung', options: ['der', 'die', 'das'], a: 1, why: 'Les noms en -ung sont féminins : die Zeitung.' },
    { q: '___ Mädchen', options: ['der', 'die', 'das'], a: 2, why: "Les noms en -chen sont toujours neutres, même pour une personne : das Mädchen." },
    { q: '___ Montag', options: ['der', 'die', 'das'], a: 0, why: 'Les jours de la semaine sont masculins : der Montag.' },
    { q: '___ Freiheit', options: ['der', 'die', 'das'], a: 1, why: 'Les noms en -heit sont féminins : die Freiheit.' },
    { q: '___ Sommer', options: ['der', 'die', 'das'], a: 0, why: 'Les saisons sont masculines : der Sommer.' },
    { q: '___ Brötchen', options: ['der', 'die', 'das'], a: 2, why: 'La terminaison -chen rend un nom neutre : das Brötchen.' },
    { q: '___ Universität', options: ['der', 'die', 'das'], a: 1, why: 'Les noms en -tät sont féminins : die Universität.' },
    { q: '___ Januar', options: ['der', 'die', 'das'], a: 0, why: 'Les mois sont masculins : der Januar.' },
    { q: '___ Möglichkeit', options: ['der', 'die', 'das'], a: 1, why: 'Les noms en -keit sont féminins : die Möglichkeit.' },
    { q: '___ Haustür', options: ['der', 'die', 'das'], a: 1, why: "Un nom composé prend le genre de sa dernière partie : die Tür, donc die Haustür." },
    { q: '___ Bücher (pluriel)', options: ['der', 'die', 'das'], a: 1, why: 'Au pluriel, tous les noms prennent die : die Bücher.' },
    { q: '___ Museum', options: ['der', 'die', 'das'], a: 2, why: 'La plupart des noms en -um sont neutres : das Museum.' },
  ],
  related: ['en-quiz-b1', 'de-articles-sheet', 'false-friends'],
};
