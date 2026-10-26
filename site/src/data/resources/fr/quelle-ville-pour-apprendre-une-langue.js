// Resource: fun. Each option votes for a drawing from the cast; the result is a city to learn English or German in.
export default {
  key: 'city-quiz', site: 'fr', slug: 'quelle-ville-pour-apprendre-une-langue', kind: 'fun', course: null, level: 'Pour le plaisir',
  draw: 'suitcase', tint: 'mint', published: '2026-10-27',
  title: 'Dans quelle ville devrais-tu apprendre ta nouvelle langue ?',
  metaTitle: "Quelle ville pour apprendre l'anglais ou l'allemand ? – Alimun",
  desc: "Un quiz gratuit de trois questions : Londres, Dublin, New York, Berlin, Vienne ou Zurich ? Trouve la ville qui colle à ta façon de vivre et d'apprendre.",
  lead: "Londres ou Berlin ? New York ou Vienne ? Trois questions pour trouver la ville où tu apprendrais le mieux l'anglais ou l'allemand.",
  about: [
    "L'endroit où tu pratiques change ta façon d'apprendre : une grande ville animée te fait parler, une ville calme te laisse le temps d'écouter.",
    "Ce quiz est juste pour le plaisir. Pas besoin de déménager pour apprendre, mais c'est sympa de savoir où tu te sentirais chez toi.",
  ],
  youAre: 'Ta ville : {}',
  buddy: {
    questions: [
      ['Ta soirée parfaite ?', [['Un spectacle dans un grand théâtre', 'teacup'], ['De la musique live dans un pub chaleureux', 'cat'], ['Un rooftop avec vue', 'sun'], ['Un club qui ouvre à minuit', 'pretzel']]],
      ['Choisis un petit-déjeuner :', [['Thé et toasts', 'teacup'], ['Un bagel sur le pouce', 'sun'], ['Un café et une part de gâteau', 'croissant'], ['Des petits pains frais de la boulangerie', 'pretzel']]],
      ['Comment tu aimes te déplacer ?', [['En métro', 'teacup'], ['À pied, en discutant avec les gens', 'cat'], ['En tram, tranquillement', 'croissant'], ['En train, toujours à l\'heure', 'owl']]],
    ],
    results: {
      teacup: ['Londres', "Des théâtres, des musées et une tasse de thé à chaque coin de rue. Tu adores les villes pleines d'histoire et d'énergie."],
      cat: ['Dublin', "Accueillante, musicale et pleine d'histoires. Tu apprends mieux en parlant avec tous ceux que tu croises."],
      sun: ['New York', "Rapide, lumineuse et ouverte toute la nuit. Tu apprends en te lançant et en parlant dès le premier jour."],
      pretzel: ['Berlin', "Créative, détendue et toujours éveillée. Tu aimes les villes qui te laissent être toi-même."],
      croissant: ['Vienne', "Des cafés viennois, de la musique et des rues élégantes. Tu aimes prendre ton temps et en profiter."],
      owl: ['Zurich', "Calme, propre et parfaitement à l'heure. Tu aimes avoir un plan et une belle vue."],
    },
  },
  related: ['buddy-quiz', 'german-word-quiz', 'british-american'],
};
