// Resource: quiz. English items stay English; explanations are in French.
export default {
  key: 'en-quiz-b1', site: 'fr', slug: 'quiz-anglais-b1', kind: 'quiz', course: 'English', level: 'B1',
  draw: 'parrot', tint: 'mint', published: '2026-10-26',
  title: "Quiz d'anglais rapide : dix questions de niveau B1",
  metaTitle: "Quiz d'anglais B1 gratuit : grammaire et vocabulaire – Alimun",
  desc: "Un quiz d'anglais gratuit de dix questions au niveau B1 : temps, prépositions et vocabulaire du quotidien, avec chaque réponse expliquée.",
  lead: "Dix questions sur la grammaire et les mots que tu rencontres au niveau B1. Choisis une réponse pour voir pourquoi elle est juste.",
  instructions: 'Choisis la meilleure réponse.',
  about: [
    "Le B1, c'est le niveau où tu te débrouilles dans la plupart des situations du quotidien : tu parles de tes expériences et de tes projets, et tu commences à utiliser avec assurance le present perfect, le past continuous et le first conditional.",
    "Ce quiz mélange les points sur lesquels on pose le plus de questions à ce niveau. Chaque réponse est accompagnée d'une courte explication, pour que tu apprennes quelque chose même quand tu te trompes.",
  ],
  items: [
    { q: 'I have lived in this city ___ 2019.', options: ['for', 'since', 'from', 'during'], a: 1, why: "On utilise since avec un point de départ dans le temps (2019) et for avec une durée (seven years)." },
    { q: 'She ___ dinner when the phone rang.', options: ['cooked', 'was cooking', 'has cooked', 'cooks'], a: 1, why: "Le past continuous décrit une action en cours au moment où autre chose s'est produit." },
    { q: 'If it rains tomorrow, we ___ at home.', options: ['stay', 'will stay', 'would stay', 'stayed'], a: 1, why: 'First conditional : if + present simple, puis will + verbe.' },
    { q: 'Have you ever ___ to Canada?', options: ['gone', 'went', 'been', 'go'], a: 2, why: "Pour un voyage terminé, on utilise been : have you ever been to Canada?" },
    { q: 'I am really looking forward ___ you.', options: ['to see', 'to seeing', 'seeing', 'see'], a: 1, why: "Dans look forward to, to est une préposition, donc le verbe prend -ing." },
    { q: 'He is good ___ math.', options: ['in', 'on', 'at', 'with'], a: 2, why: 'On dit good at something : good at math, good at tennis.' },
    { q: 'We ran out ___ milk, so I went to the shop.', options: ['from', 'of', 'off', 'with'], a: 1, why: "Run out of veut dire ne plus en avoir." },
    { q: 'This is the ___ film I have ever seen.', options: ['worse', 'baddest', 'worst', 'most bad'], a: 2, why: 'Bad est irrégulier : bad, worse, the worst.' },
    { q: 'You ___ wear a seatbelt in the car. It is the law.', options: ['must', 'might', 'could', 'would'], a: 0, why: "Must exprime une obligation forte, comme une règle ou une loi." },
    { q: 'Can you ___ the music down, please? I am on the phone.', options: ['put', 'take', 'turn', 'make'], a: 2, why: 'Turn down veut dire baisser le volume : turn the music down.' },
  ],
  related: ['de-articles-a1', 'en-reading-a2', 'buddy-quiz'],
};
