// Resource: quiz. German items stay German; explanations are in French.
export default {
  key: 'de-quiz-b2', site: 'fr', slug: 'quiz-allemand-b2', kind: 'quiz', course: 'German', level: 'B2',
  draw: 'ghost', tint: 'lime', published: '2026-10-26',
  title: "Quiz d'allemand rapide : dix questions de niveau B2",
  metaTitle: "Quiz d'allemand B2 gratuit : grammaire et vocabulaire – Alimun",
  desc: "Un quiz d'allemand gratuit de dix questions au niveau B2 : Konjunktiv II, passif avec modaux, adjectifs, déclinaison en n et verbes à préposition.",
  lead: "Dix questions sur la grammaire que tu rencontres au niveau B2. Choisis une réponse pour voir pourquoi elle est juste.",
  instructions: 'Choisis la meilleure réponse.',
  about: [
    "Le B2, c'est le niveau où tu suis l'essentiel d'une discussion sur un sujet familier, où tu expliques ton point de vue en détail, parles de ce qui aurait pu se passer et écris des textes clairs sur des sujets très variés.",
    "Ce quiz vérifie la grammaire qui fait la différence entre un bon niveau intermédiaire et un allemand précis : le Konjunktiv II, le passif avec les verbes de modalité, la déclinaison de l'adjectif, les noms de la déclinaison en n et les verbes à préposition fixe. Chaque réponse est accompagnée d'une courte explication.",
  ],
  items: [
    { q: 'Wenn ich mehr Zeit ___, würde ich öfter reisen.', options: ['habe', 'hatte', 'hätte', 'hat'], a: 2, why: 'Une condition irréelle au présent utilise le Konjunktiv II : wenn ich mehr Zeit hätte.' },
    { q: 'Wenn du mich angerufen ___, wäre ich gekommen.', options: ['hättest', 'wärst', 'würdest', 'hast'], a: 0, why: 'Une condition irréelle au passé utilise hätte ou wäre + participe passé, et anrufen forme son Perfekt avec haben.' },
    { q: 'Der Antrag muss bis Freitag ___.', options: ['abgeben werden', 'abgegeben werden', 'abgegeben worden', 'abgegeben wird'], a: 1, why: "Le passif avec un verbe de modalité se forme avec le participe passé + werden à l'infinitif : muss abgegeben werden." },
    { q: 'Ich habe mir einen ___ Mantel gekauft.', options: ['warme', 'warmer', 'warmes', 'warmen'], a: 3, why: "Après einen (accusatif masculin), l'adjectif se termine en -en : einen warmen Mantel." },
    { q: 'Bei ___ Wetter bleiben wir zu Hause.', options: ['schlechtem', 'schlechten', 'schlechtes', 'schlechter'], a: 0, why: "Sans article, l'adjectif montre lui-même le cas : bei est suivi du datif, et le datif neutre est en -em." },
    { q: 'Ich habe gestern mit ___ gesprochen.', options: ['dem Nachbar', 'dem Nachbarn', 'den Nachbar', 'der Nachbar'], a: 1, why: 'Nachbar appartient à la déclinaison en n et prend -n partout sauf au nominatif singulier : mit dem Nachbarn.' },
    { q: 'Die Ärztin untersucht ___.', options: ['den Patient', 'dem Patient', 'den Patienten', 'der Patienten'], a: 2, why: "Patient est un nom de la déclinaison en n, donc l'accusatif est den Patienten." },
    { q: 'Ich kann mich nicht ___ seinen Namen erinnern.', options: ['an', 'auf', 'für', 'über'], a: 0, why: "Le verbe est sich erinnern an + accusatif : ich erinnere mich an seinen Namen." },
    { q: 'Ob wir fahren, hängt ___ dem Wetter ab.', options: ['an', 'mit', 'von', 'aus'], a: 2, why: 'Le verbe est abhängen von + datif : es hängt vom Wetter ab.' },
    { q: '___ wartest du? – Auf meinen Freund.', options: ['Worauf', 'Wofür', 'Woran', 'Auf wen'], a: 3, why: 'Quand la réponse est une personne, la question garde la préposition et ajoute wen ou wem : auf wen ; worauf sert pour les choses.' },
  ],
  related: ['de-quiz-b1', 'de-quiz-c1', 'de-ex-b2'],
};
