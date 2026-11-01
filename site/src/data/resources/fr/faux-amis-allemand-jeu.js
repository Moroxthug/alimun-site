// Resource: game. German false friends and their real meanings. German meanings checked against Duden; French meanings against Le Robert and Larousse.
// German words stay German; options, explanations and pair meanings are in French.
export default {
  key: 'german-false-friends', site: 'fr', slug: 'faux-amis-allemand-jeu', kind: 'game', course: 'German', level: 'Tous niveaux',
  draw: 'ghost', tint: 'lime', published: '2026-11-01',
  title: 'Jeu des faux amis allemands : un Gift, est-ce un cadeau ?',
  metaTitle: 'Jeu des faux amis allemands : Gift, Handy, Rat et les autres – Alimun',
  desc: "Un jeu gratuit avec des faux amis allemands : das Gift, c'est du poison, pas un cadeau, et der Rat n'est pas un rat. Devine le vrai sens de dix mots.",
  lead: "Certains mots allemands ressemblent à de l'anglais, ou à du français, et veulent dire tout autre chose. Das Gift, c'est du poison et das Handy, ton portable. Tu reconnais les autres ?",
  instructions: 'Que veut-il vraiment dire ?',
  about: [
    "Les faux amis sont des mots qui ressemblent à un mot que tu connais déjà mais qui ont un autre sens. L'allemand en a beaucoup avec l'anglais, et quelques-uns avec le français.",
    "Les apprendre tôt t'évite des erreurs bien drôles, comme annoncer à ton hôte que tu lui apportes du poison ou parler d'un rat quand on te donne un conseil.",
  ],
  items: [
    { q: 'das Gift', options: ['un cadeau', 'du poison', 'un talent', 'un pourboire'], a: 1, why: 'das Gift = le poison. Le cadeau se dit das Geschenk.' },
    { q: 'das Handy', options: ['le portable', 'un sac à main', 'un gant', 'un outil'], a: 0, why: "das Handy = le téléphone portable. Il ressemble à l'anglais handy, qui veut dire pratique." },
    { q: 'der Chef', options: ['un cuisinier', 'un serveur', 'le patron', 'un client'], a: 2, why: "der Chef = le patron, le responsable, comme un chef de service en français. Mais ce n'est jamais le cuisinier : le cuisinier se dit der Koch." },
    { q: 'bekommen', options: ['devenir', 'revenir', 'souhaiter la bienvenue', 'recevoir, obtenir'], a: 3, why: "bekommen = recevoir, obtenir. Il ressemble à l'anglais become, mais devenir se dit werden." },
    { q: 'der Rat', options: ['un rat', 'un conseil', 'un tarif', 'une souris'], a: 1, why: "der Rat = le conseil, celui qu'on donne à quelqu'un ou une assemblée comme le conseil municipal. Il piège aussi en français : le rat se dit die Ratte." },
    { q: 'die Kaution', options: ['la prudence', 'un panneau de danger', 'une caution', 'un coussin'], a: 2, why: "die Kaution = la caution, le dépôt de garantie, par exemple pour un appartement. Ici le français t'aide ; c'est l'anglais caution, la prudence, qui piège." },
    { q: 'aktuell', options: ['actuel, à jour', 'réel, véritable', 'actif', 'exact'], a: 0, why: "aktuell = actuel, à jour, comme en français. Il piège ceux qui parlent anglais, car actual veut dire réel." },
    { q: 'eventuell', options: ['finalement', 'à chaque fois', 'tout de suite', 'éventuellement, peut-être'], a: 3, why: "eventuell = éventuellement, peut-être, comme en français. Il piège ceux qui parlent anglais, car eventually veut dire finalement, en allemand schließlich." },
    { q: 'sensibel', options: ['raisonnable, sensé', 'sensible', 'sensuel', 'sentimental'], a: 1, why: 'sensibel = sensible, comme en français. Raisonnable se dit vernünftig.' },
    { q: 'das Gymnasium', options: ['un gymnase', 'une salle de sport', 'un lycée', 'une piscine'], a: 2, why: "das Gymnasium = le lycée qui mène à l'Abitur, l'équivalent du bac. Il piège aussi en français : le gymnase de l'école se dit die Turnhalle, la salle de sport das Fitnessstudio." },
  ],
  pairs: [
    ['das Gift', 'le poison'],
    ['das Handy', 'le portable'],
    ['der Chef', 'le patron'],
    ['bekommen', 'recevoir, obtenir'],
    ['der Rat', 'le conseil'],
    ['eventuell', 'peut-être'],
    ['sensibel', 'sensible'],
    ['das Gymnasium', 'le lycée'],
  ],
  related: ['false-friends', 'german-compounds', 'untranslatable-german'],
};
