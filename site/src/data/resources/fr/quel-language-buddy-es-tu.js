// Resource: fun. Each option votes for a buddy from the drawing cast; the most votes wins.
export default {
  key: 'buddy-quiz', site: 'fr', slug: 'quel-language-buddy-es-tu', kind: 'fun', course: null, level: 'Pour le plaisir',
  draw: 'churro', tint: 'sun', published: '2026-10-26',
  title: 'Quel language buddy es-tu ?',
  metaTitle: 'Quel language buddy es-tu ? Le quiz pour qui apprend – Alimun',
  desc: "Un quiz gratuit de trois questions pour ceux qui apprennent une langue : découvre le buddy Alimun qui correspond à ta façon d'apprendre, puis partage-le.",
  lead: "Trois questions sur ta façon d'apprendre. À la fin, tu rencontres ton buddy, et tu peux le partager avec un ami.",
  about: [
    "Chacun apprend une langue un peu à sa manière. Certains apprennent en parlant, d'autres en s'organisant, d'autres encore grâce aux films et à la musique.",
    "Ce quiz est juste pour le plaisir, mais le résultat dit quelque chose de vrai sur toi : la façon dont tu apprends le mieux, c'est celle qui te fera continuer.",
  ],
  buddy: {
    questions: [
      ["Comment tu aimes apprendre ?", [['En parlant avec les gens', 'churro'], ['Avec un plan clair et des règles', 'pretzel'], ['Avec des films et de la musique', 'croissant'], ['Avec une tasse de thé et un bon livre', 'teacup']]],
      ['Ton week-end idéal ?', [['Un long déjeuner entre amis', 'pizza'], ['Un voyage dans un endroit nouveau', 'nata'], ['Un musée, puis un café', 'croissant'], ['Organiser la semaine prochaine', 'pretzel']]],
      ['Quand tu fais une erreur...', [["J'en ris et je continue", 'churro'], ["Je la note pour la corriger", 'pretzel'], ["Je demande à quelqu'un de m'expliquer", 'teacup'], ['Je réessaie, plus fort', 'pizza']]],
    ],
    results: {
      churro: ['Churro', "Chaleureux, sociable et sans peur. Tu apprends plus vite en parlant."],
      pretzel: ['Bretzel', 'Organisé et constant. Les règles et les habitudes sont ton super-pouvoir.'],
      croissant: ['Croissant', 'Curieux et élégant. Les films, la musique et la culture t\'attirent.'],
      teacup: ['Tasse de thé', 'Calme et réfléchi. Tu aimes comprendre avant de parler.'],
      pizza: ['Pizza', 'Généreux et expressif. Tu apprends avec les mains et avec le cœur.'],
      nata: ['Pastel de nata', "Aventurier. Les nouveaux endroits et les nouveaux mots, c'est ce que tu adores."],
    },
  },
  related: ['false-friends', 'en-quiz-b1', 'cefr-poster'],
};
