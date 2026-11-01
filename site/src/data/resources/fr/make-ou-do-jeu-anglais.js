// Resource: game. Make or do: ten English collocations learners mix up. Collocations and usage checked against Cambridge Dictionary and Oxford Learner's Dictionaries.
// The English sentences, verbs and phrases stay English; explanations and translations are in French.
export default {
  key: 'make-or-do', site: 'fr', slug: 'make-ou-do-jeu-anglais', kind: 'game', course: 'English', level: 'Tous niveaux',
  draw: 'owl', tint: 'mint', published: '2026-11-01',
  title: 'Make ou do ? Le jeu pour ne plus les confondre en anglais',
  metaTitle: 'Make ou do : jeu avec 10 collocations anglaises – Alimun',
  desc: "Un jeu gratuit avec dix collocations anglaises du quotidien, de make a mistake à do your homework. Choisis make, do ou un autre verbe, puis associe les paires.",
  lead: "Make a mistake ou do a mistake ? Do your homework ou make ? Choisis le bon verbe dans dix phrases anglaises du quotidien.",
  instructions: 'Quel verbe complète la phrase ?',
  about: [
    "En français, on dit faire dans les deux cas, alors que l'anglais a deux verbes, make et do, et on les confond facilement. En règle générale, do s'utilise pour les tâches, le travail et les activités, et make pour créer, produire ou provoquer quelque chose.",
    "La règle a des exceptions, comme make the bed et do someone a favour, alors apprends chaque expression en entier, verbe et nom ensemble. Plus tu lis et écoutes de l'anglais, plus le bon verbe te paraîtra naturel.",
  ],
  items: [
    { q: "Don't worry, everyone ___ mistakes when they're learning.", options: ['makes', 'does', 'has', 'takes'], a: 0, why: "On dit make a mistake, jamais do. Do sert pour les tâches et le travail, make pour créer ou provoquer quelque chose, et une erreur, c'est quelque chose qu'on provoque." },
    { q: 'I have to ___ my homework before dinner.', options: ['make', 'give', 'do', 'have'], a: 2, why: "Les devoirs sont une tâche, donc on dit do, comme do the housework et do an exercise. Make homework est faux." },
    { q: 'We need to ___ a decision by Friday.', options: ['do', 'make', 'give', 'have'], a: 1, why: "Make a decision est l'expression habituelle. En anglais britannique, on dit aussi take a decision, surtout dans un contexte formel, mais jamais do a decision." },
    { q: "It's your turn to ___ the dishes tonight.", options: ['make', 'have', 'give', 'do'], a: 3, why: "Les tâches ménagères prennent do : do the dishes, do the laundry, do the cleaning. Une exception bien connue : make the bed, faire le lit." },
    { q: 'She ___ a real effort to speak only English in class.', options: ['did', 'made', 'had', 'got'], a: 1, why: "Make an effort, comme make progress et make a difference : on produit quelque chose, donc l'anglais utilise make." },
    { q: "It's a pleasure to ___ business with you.", options: ['make', 'take', 'do', 'give'], a: 2, why: "Do business est une expression figée, même si les affaires créent des choses. Apprends-la en entier : do business with someone, faire des affaires avec quelqu'un." },
    { q: 'He ___ a lot of friends at university.', options: ['did', 'took', 'gave', 'made'], a: 3, why: "Make friends veut dire se faire des amis, créer de nouvelles amitiés. Au passé, on dit made friends." },
    { q: 'Could you ___ me a favour and close the window?', options: ['do', 'make', 'give', 'take'], a: 0, why: "Do someone a favour est une exception : un service n'est pas vraiment une tâche, mais on dit toujours do. En anglais américain, on écrit favor." },
    { q: 'I have to ___ a phone call to my bank before it closes.', options: ['do', 'take', 'make', 'get'], a: 2, why: "Make a phone call, comme make a complaint et make a suggestion. Take a phone call existe aussi, mais veut dire répondre à un appel." },
    { q: "Don't worry about the result, just ___ your best.", options: ['do', 'make', 'have', 'take'], a: 0, why: "Do your best est une expression figée qui veut dire faire de son mieux. Make your best est faux." },
  ],
  pairs: [
    ['a mistake', 'make a mistake (faire une erreur)'],
    ['homework', 'do homework (faire ses devoirs)'],
    ['a decision', 'make a decision (prendre une décision)'],
    ['the dishes', 'do the dishes (faire la vaisselle)'],
    ['friends', 'make friends (se faire des amis)'],
    ['business', 'do business (faire des affaires)'],
    ['a phone call', 'make a phone call (passer un appel)'],
    ['your best', 'do your best (faire de son mieux)'],
  ],
  related: ['english-idioms', 'false-friends', 'en-verbs-sheet'],
};
