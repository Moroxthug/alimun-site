// Resource: exercise. English items stay English; explanations are in French.
export default {
  key: 'en-ex-b2', site: 'fr', slug: 'exercice-anglais-b2-conditionnels', kind: 'exercise', course: 'English', level: 'B2',
  draw: 'cat', tint: 'lime', published: '2026-10-26',
  title: "Exercice d'anglais : les conditionnels (B2)",
  metaTitle: 'Exercices anglais conditionnels et phrases en if B2 – Alimun',
  desc: "Douze questions gratuites pour le niveau B2 en anglais sur les conditionnels zero, first, second, third et mixed, avec une explication pour chaque réponse.",
  lead: "Choisis la bonne forme du verbe dans chaque phrase en if. Tu vois tout de suite si tu as juste, et pourquoi.",
  instructions: 'Choisis la bonne forme.',
  about: [
    "Le zero conditional (if + présent, présent) sert pour les faits et ce qui arrive toujours : \"If you heat ice, it melts.\" Le first conditional (if + présent, will + verbe) sert pour les possibilités réelles dans le futur : \"If it rains tomorrow, we will stay home.\" Unless veut dire if not et suit donc le même schéma. Le second conditional (if + prétérit, would + verbe) sert pour les situations irréelles ou peu probables aujourd'hui : \"If I had more time, I would learn the piano.\" En anglais soutenu, on utilise were à toutes les personnes : \"If I were you...\"",
    "Le third conditional (if + past perfect, would have + participe passé) sert à imaginer un passé différent : \"If we had left earlier, we would have caught the train.\" Les mixed conditionals combinent les deux : un passé irréel avec une conséquence présente (\"If I had taken that job, I would live in New York now\"), ou un présent irréel avec une conséquence passée (\"If he were more careful, he wouldn't have made that mistake\"). Regarde les mots de temps dans chaque moitié de la phrase pour savoir quelle forme convient.",
  ],
  items: [
    { q: 'If you mix red and white paint, you ___ pink.', options: ['would get', 'get', 'got', 'had gotten'], a: 1, why: 'Un fait général utilise le zero conditional : if + présent, présent.' },
    { q: 'If it ___ tomorrow, we will cancel the picnic.', options: ['will rain', 'rained', 'rains', 'would rain'], a: 2, why: 'Dans le first conditional, la proposition en if prend le present simple, même pour parler du futur.' },
    { q: 'If I ___ you, I would talk to her.', options: ['were', 'am', 'had been', 'will be'], a: 0, why: 'Pour donner un conseil avec le second conditional, on dit "If I were you", avec were à toutes les personnes.' },
    { q: 'If she had studied harder, she ___ the exam last month.', options: ['would pass', 'will pass', 'would have passed', 'passed'], a: 2, why: 'Une conséquence passée imaginée, dans le third conditional, prend would have + participe passé.' },
    { q: 'If I had taken the job in New York, I ___ there now.', options: ['would live', 'would have lived', 'will live', 'lived'], a: 0, why: 'Un mixed conditional : une condition passée irréelle avec une conséquence présente (now) prend would + verbe.' },
    { q: 'If we ___ the map, we wouldn\'t have gotten lost.', options: ['had checked', 'checked', 'would check', 'have checked'], a: 0, why: 'La proposition en if du third conditional prend le past perfect.' },
    { q: 'Unless you hurry, you ___ the bus.', options: ['miss', 'would miss', 'missed', 'will miss'], a: 3, why: 'Unless veut dire if not, et ici il suit le first conditional : will + verbe.' },
    { q: 'If he ___ more money, he would buy a house.', options: ['would have', 'will have', 'has', 'had'], a: 3, why: 'Le second conditional prend le past simple dans la proposition en if.' },
    { q: 'If he were more careful, he ___ that mistake yesterday.', options: ['wouldn\'t make', 'wouldn\'t have made', 'won\'t make', 'didn\'t make'], a: 1, why: 'Un mixed conditional : une condition présente irréelle avec une conséquence passée prend would have + participe passé.' },
    { q: 'If she weren\'t so busy, she ___ us more often.', options: ['visits', 'will visit', 'would visit', 'would have visited'], a: 2, why: 'Une situation présente irréelle utilise le second conditional : would + verbe.' },
    { q: 'If I hadn\'t eaten so much, I ___ sick now.', options: ['wouldn\'t feel', 'won\'t feel', 'wouldn\'t have felt', 'don\'t feel'], a: 0, why: 'Un mixed conditional : une condition passée avec une conséquence présente (now) prend would + verbe.' },
    { q: 'What would you do if you ___ the lottery?', options: ['win', 'had won', 'will win', 'won'], a: 3, why: 'Une situation imaginée et peu probable utilise le second conditional : if + past simple.' },
  ],
  related: ['en-ex-b1', 'en-ex-c1', 'en-quiz-b2'],
};
