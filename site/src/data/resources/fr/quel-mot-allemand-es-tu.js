// Resource: fun. Each option votes for a drawing from the cast; the result is a German word that fits.
export default {
  key: 'german-word-quiz', site: 'fr', slug: 'quel-mot-allemand-es-tu', kind: 'fun', course: 'German', level: 'Pour le plaisir',
  draw: 'pretzel', tint: 'coral', published: '2026-10-27',
  title: 'Quel mot allemand es-tu ?',
  metaTitle: 'Quel mot allemand es-tu ? Un quiz amusant pour apprendre – Alimun',
  desc: "Un quiz gratuit de trois questions : découvre le mot allemand qui correspond à ta personnalité, de Fernweh à Gemütlichkeit, puis partage-le avec un ami.",
  lead: "Trois petites questions, un mot allemand qui te résume. Partage-le avec un ami et apprends ce qu'il veut dire.",
  about: [
    "L'allemand a des mots pour des sentiments que d'autres langues décrivent en une phrase. L'un d'eux te décrit sûrement mieux que tu ne le penses.",
    "Ce quiz est juste pour le plaisir, mais chaque mot est réel et utilisé tous les jours : tu repartiras avec un nouveau mot que tu n'oublieras pas.",
  ],
  youAre: 'Ton mot allemand : {}',
  buddy: {
    questions: [
      ['Vendredi, 18 heures. Tu...', [['Réserves un voyage vers un endroit nouveau', 'suitcase'], ['Allumes une bougie et te fais un thé', 'teacup'], ["Fermes l'ordinateur et fais la fête", 'mug'], ['Organises tout le week-end', 'owl']]],
      ['Ta façon préférée de passer un dimanche ?', [['Une longue balade loin de chez toi', 'suitcase'], ['Plaid, canapé, un bon livre', 'teacup'], ['Un Biergarten entre amis', 'mug'], ['Une chanson en boucle pendant que tu cuisines', 'parrot']]],
      ['Choisis un son :', [["Un train qui quitte la gare", 'suitcase'], ['La pluie contre la fenêtre', 'teacup'], ['Des verres qui trinquent', 'mug'], ['Un refrain entraînant', 'parrot']]],
    ],
    results: {
      suitcase: ['Fernweh', "L'envie de partir loin. Tu es le plus heureux en route vers un endroit nouveau."],
      teacup: ['Gemütlichkeit', "La chaleur, le confort et le sentiment d'être chez soi. Tu rends chaque endroit douillet."],
      mug: ['Feierabend', "Le bonheur de la fin de la journée de travail. Tu sais déconnecter et en profiter."],
      owl: ['Ordnung', "L'ordre. Tu aimes avoir un plan, et tes plans marchent vraiment."],
      parrot: ['Ohrwurm', "Une chanson qui reste en tête. Tu apportes du rythme et de la bonne humeur partout où tu vas."],
    },
  },
  related: ['untranslatable-german', 'german-idioms', 'buddy-quiz'],
};
