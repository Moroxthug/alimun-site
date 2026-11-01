// Resource: fun. Each option votes for a learner type; the most votes wins. No word meanings to check; "moulin à paroles", "couche-tard" and "rat de bibliothèque" checked against Larousse. The types are playful, not a research-based "learning styles" test, and the about text says so.
export default {
  key: 'learner-type-quiz', site: 'fr', slug: 'quel-type-d-apprenant-en-langues-es-tu', kind: 'fun', course: null, level: 'Pour le plaisir',
  draw: 'owl', tint: 'mint', published: '2026-11-01',
  title: 'Quel type d\'apprenant en langues es-tu ?',
  metaTitle: 'Quel type d\'apprenant en langues es-tu ? Le quiz – Alimun',
  desc: 'Un quiz gratuit de trois questions : moulin à paroles, organisé, explorateur, couche-tard ou rat de bibliothèque ? Découvre ton type et un conseil adapté.',
  lead: 'Trois questions ludiques sur tes habitudes. À la fin, tu découvres ton type, avec un conseil adapté à ta façon d\'apprendre.',
  about: [
    'Certains apprennent une langue en parlant à tout le monde, d\'autres en faisant des listes, d\'autres avec des films et des voyages, d\'autres tard le soir, d\'autres avec un bon livre.',
    'Ce quiz est juste pour le plaisir, ce n\'est pas un test scientifique. Ton résultat est un petit coup de pouce : les habitudes que tu aimes déjà sont celles qui te feront continuer.',
  ],
  youAre: 'Tu es : {}',
  buddy: {
    questions: [
      ['D\'où viennent tes nouveaux mots ?', [['De conversations avec les gens', 'parrot'], ['D\'une liste bien rangée dans mon carnet', 'cat'], ['D\'un film ou d\'une série sous-titrés', 'suitcase'], ['D\'un livre que je ne lâche plus', 'teacup']]],
      ['Quand est-ce que tu étudies le mieux ?', [['Tard le soir, quand la maison est calme', 'owl'], ['À la même heure tous les jours', 'cat'], ['Dès que je trouve quelqu\'un à qui parler', 'parrot'], ['Dans le train, en route vers ailleurs', 'suitcase']]],
      ['Choisis la soirée parfaite :', [['Un dîner avec des amis d\'un autre pays', 'parrot'], ['Un roman et une théière', 'teacup'], ['Un film étranger et le plan du prochain voyage', 'suitcase'], ['Encore debout après minuit, occupé et heureux', 'owl']]],
    ],
    results: {
      parrot: ['Moulin à paroles', 'Tu apprends en parlant, et les erreurs ne te font pas peur. Essaie d\'utiliser chaque nouveau mot à voix haute, dans une phrase à toi, le jour même où tu l\'apprends.'],
      cat: ['Organisé', 'Tu adores les plannings et les listes de mots bien rangées. Planifie ta semaine, mais garde une séance libre pour utiliser ces mots dans une vraie conversation.'],
      suitcase: ['Explorateur', 'Les films, la musique et les nouveaux endroits t\'attirent. Regarde quelque chose que tu aimes dans la langue que tu apprends et note trois mots que tu entends.'],
      owl: ['Couche-tard', 'Ton cerveau se réveille quand les autres vont dormir. Fais court mais régulier avant de te coucher, puis revois les mêmes mots le lendemain soir.'],
      teacup: ['Rat de bibliothèque', 'Tu apprends le mieux en lisant, page après page. Choisis un livre un peu en dessous de ton niveau, pour lire pour l\'histoire et non pour le dictionnaire.'],
    },
  },
  related: ['buddy-quiz', 'german-word-quiz', 'city-quiz'],
};
