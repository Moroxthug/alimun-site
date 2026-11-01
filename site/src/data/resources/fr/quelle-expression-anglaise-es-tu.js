// Resource: fun. Each option votes for a drawing from the cast; the result is an English idiom that fits. Idioms stay in English; everything else is in French. Idiom meanings checked against Cambridge Dictionary (night owl, life and soul of the party, go the extra mile, on cloud nine, as cool as a cucumber).
export default {
  key: 'english-idiom-quiz', site: 'fr', slug: 'quelle-expression-anglaise-es-tu', kind: 'fun', course: 'English', level: 'Pour le plaisir',
  draw: 'parrot', tint: 'coral', published: '2026-11-01',
  title: 'Quelle expression anglaise es-tu ?',
  metaTitle: 'Quelle expression anglaise es-tu ? Un quiz amusant – Alimun',
  desc: "Un quiz gratuit de trois questions : découvre l'expression anglaise qui correspond à ta personnalité, de a night owl à on cloud nine, et partage-la.",
  lead: "Trois petites questions, une expression anglaise qui te résume. Partage-la avec un ami et apprends ce qu'elle veut dire.",
  about: [
    "L'anglais est plein d'expressions idiomatiques, des phrases dont on ne devine pas le sens à partir des mots. Les anglophones les utilisent tout le temps, et l'une d'elles te décrit sûrement mieux que tu ne le penses.",
    "Ce quiz est juste pour le plaisir, mais chaque expression est réelle et courante : tu repartiras avec une nouvelle expression à placer dans ta prochaine conversation en anglais.",
  ],
  youAre: 'Ton expression anglaise : {}',
  buddy: {
    questions: [
      ['Samedi soir. Tu...', [['Commences un nouveau projet à minuit', 'owl'], ['Danses au milieu du salon', 'parrot'], ['Aides un ami à porter ses cartons dans son nouvel appart', 'dog'], ['Restes calme pendant que les autres se disputent sur le programme', 'cat']]],
      ['Un ami a une échéance importante demain. Tu...', [['Veilles tard pour travailler avec lui', 'owl'], ["Apportes de quoi grignoter et restes jusqu'à ce que ce soit fini", 'dog'], ['Lui dis que tout ira bien et fais un plan clair', 'cat'], ["Prépares la fête pour quand il aura terminé", 'sun']]],
      ['Choisis un son :', [['Une ville silencieuse à deux heures du matin', 'owl'], ['Des rires dans une fête bondée', 'parrot'], ['Ton téléphone qui sonne pour une super nouvelle', 'sun'], ['Des vagues lentes sur une mer calme', 'cat']]],
    ],
    results: {
      owl: ['a night owl', "Littéralement « un hibou de nuit » : un couche-tard, quelqu'un qui préfère être éveillé et actif la nuit. Tes meilleures idées arrivent quand tout le monde dort."],
      parrot: ['the life and soul of the party', "Le boute-en-train : quelqu'un d'énergique et drôle, toujours au cœur de la soirée. Quand tu arrives, la fête commence."],
      dog: ['go the extra mile', "Faire plus d'efforts que ce qu'on attend de toi. Tes amis savent qu'ils peuvent toujours compter sur toi."],
      sun: ['on cloud nine', 'Être aux anges : extrêmement heureux et enthousiaste. Ta bonne humeur illumine toute la pièce.'],
      cat: ['as cool as a cucumber', "D'un calme olympien, surtout quand on ne s'y attend pas. Rien ne te déstabilise, même quand tout le monde panique."],
    },
  },
  related: ['english-idioms', 'buddy-quiz', 'british-american'],
};
