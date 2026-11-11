// Resource: quiz. German items stay German; explanations are in French.
export default {
  key: 'de-quiz-a2', site: 'fr', slug: 'quiz-allemand-a2', kind: 'quiz', course: 'German', level: 'A2',
  draw: 'mug', tint: 'coral', published: '2026-10-26',
  title: "Quiz d'allemand rapide : dix questions de niveau A2",
  metaTitle: "Quiz d'allemand A2 gratuit : grammaire et vocabulaire – Alimun",
  desc: "Un quiz d'allemand gratuit de dix questions au niveau A2 : Perfekt, verbes de modalité, datif, verbes à particule séparable et comparatifs, chaque réponse expliquée.",
  lead: "Dix questions sur la grammaire que tu rencontres au niveau A2. Choisis une réponse pour voir pourquoi elle est juste.",
  instructions: 'Choisis la meilleure réponse.',
  about: [
    "L'A2, c'est le niveau où tu sais raconter ce que tu as fait le week-end dernier, décrire ta journée, dire ce que tu peux, dois ou veux faire, et comparer des choses avec des phrases simples.",
    "Ce quiz vérifie les points qui posent le plus de problèmes à ce niveau : haben ou sein au Perfekt, les participes passés, les verbes de modalité, le datif après certains verbes et prépositions, les verbes à particule séparable et les comparatifs. Chaque réponse est accompagnée d'une courte explication.",
  ],
  items: [
    { q: 'Gestern ___ ich ins Kino gegangen.', options: ['habe', 'bin', 'war', 'hatte'], a: 1, why: "Les verbes de déplacement d'un endroit à un autre, comme gehen, forment le Perfekt avec sein : ich bin gegangen." },
    { q: 'Wir haben den ganzen Abend Pizza ___.', options: ['gegessen', 'geessen', 'gegesst', 'essen'], a: 0, why: 'Essen est irrégulier, et son participe passé est gegessen.' },
    { q: 'Hier ___ man nicht rauchen. Das ist verboten.', options: ['muss', 'will', 'darf', 'möchte'], a: 2, why: "Nicht dürfen exprime que quelque chose n'est pas permis." },
    { q: 'Ich helfe ___ Mutter in der Küche.', options: ['meine', 'meiner', 'meinen', 'meinem'], a: 1, why: 'Helfen est suivi du datif, et mein au féminin devient meiner au datif.' },
    { q: 'Wann stehst du morgens ___?', options: ['an', 'auf', 'aus', 'ein'], a: 1, why: 'Aufstehen (se lever) est un verbe à particule séparable, donc auf va à la fin de la phrase.' },
    { q: 'Mein Bruder ist drei Jahre ___ als ich.', options: ['am ältesten', 'alt', 'älter', 'ältere'], a: 2, why: 'Les comparaisons avec als utilisent le comparatif, et alt prend un Umlaut : alt, älter, am ältesten.' },
    { q: 'Ich trinke lieber Tee ___ Kaffee.', options: ['als', 'wie', 'dann', 'wenn'], a: 0, why: "Après un comparatif comme lieber, l'allemand utilise als (que)." },
    { q: 'Das Buch liegt auf ___ Tisch.', options: ['der', 'den', 'dem', 'des'], a: 2, why: 'Liegen décrit une position, donc auf prend le datif : auf dem Tisch.' },
    { q: 'Hast du schon ___?', options: ['geeinkauft', 'einkaufen', 'eingekaufen', 'eingekauft'], a: 3, why: 'Dans les verbes à particule séparable, ge- se place entre la particule et le radical : einkaufen, eingekauft.' },
    { q: 'Gefällt ___ das Kleid?', options: ['dich', 'du', 'dein', 'dir'], a: 3, why: 'Gefallen est suivi du datif, donc du devient dir : das Kleid gefällt dir.' },
  ],
  related: ['de-quiz-a1', 'de-quiz-b1', 'de-ex-a2'],
};
