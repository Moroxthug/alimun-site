// Resource: quiz. German items stay German; explanations are in French.
export default {
  key: 'de-quiz-a1', site: 'fr', slug: 'quiz-allemand-a1', kind: 'quiz', course: 'German', level: 'A1',
  draw: 'pretzel', tint: 'sun', published: '2026-10-26',
  title: "Quiz d'allemand rapide : dix questions de niveau A1",
  metaTitle: "Quiz d'allemand A1 gratuit : grammaire et vocabulaire – Alimun",
  desc: "Un quiz d'allemand gratuit de dix questions au niveau A1 : sein et haben, articles, pluriels, questions, nombres et mots du quotidien, chaque réponse expliquée.",
  lead: "Dix questions sur la grammaire et les mots que tu rencontres pendant tes premiers mois d'allemand. Choisis une réponse pour voir pourquoi elle est juste.",
  instructions: 'Choisis la meilleure réponse.',
  about: [
    "L'A1, c'est le niveau où tu sais te présenter, poser des questions simples et y répondre sur l'endroit où tu vis et ce que tu fais, et comprendre des mots du quotidien comme les jours de la semaine, les nombres et la nourriture.",
    "Ce quiz vérifie les bases sur lesquelles tout le reste se construit : les formes de sein et de haben, der, die et das, les terminaisons du pluriel, les mots interrogatifs et les nombres. Chaque réponse est accompagnée d'une courte explication, pour que tu apprennes quelque chose même quand tu te trompes.",
  ],
  items: [
    { q: 'Ich ___ Anna.', options: ['bin', 'bist', 'ist', 'sind'], a: 0, why: 'Avec ich, le verbe sein (être) devient bin : ich bin, du bist, er ist.' },
    { q: '___ Tisch ist neu.', options: ['Die', 'Der', 'Das', 'Den'], a: 1, why: 'Tisch est masculin, donc le sujet prend der : der Tisch.' },
    { q: 'Wir ___ zwei Kinder.', options: ['hat', 'habt', 'haben', 'hast'], a: 2, why: 'Avec wir, haben (avoir) garde sa forme complète : wir haben.' },
    { q: 'Ein Buch, zwei ___.', options: ['Buchs', 'Bücher', 'Buche', 'Buchen'], a: 1, why: 'Buch forme son pluriel avec un Umlaut et -er : das Buch, die Bücher.' },
    { q: '___ wohnst du? – In Berlin.', options: ['Wer', 'Was', 'Wann', 'Wo'], a: 3, why: 'Wo demande où se trouve quelqu\'un ou quelque chose, et la réponse est un lieu.' },
    { q: 'Wie sagt man 21 auf Deutsch?', options: ['einundzwanzig', 'zwanzigeins', 'zweiundzehn', 'einszwanzig'], a: 0, why: "L'allemand dit les unités avant les dizaines : ein-und-zwanzig, littéralement un et vingt." },
    { q: 'Ich habe ___ Bruder.', options: ['ein', 'eine', 'einer', 'einen'], a: 3, why: "Haben est suivi de l'accusatif, et ein au masculin devient einen : ich habe einen Bruder." },
    { q: 'Am Morgen trinke ich eine Tasse ___.', options: ['Brot', 'Käse', 'Kaffee', 'Apfel'], a: 2, why: 'On boit une tasse de café : eine Tasse Kaffee. Les autres mots désignent des choses qui se mangent.' },
    { q: 'Du ___ aus Spanien, oder?', options: ['kommt', 'komme', 'kommen', 'kommst'], a: 3, why: 'Avec du, les verbes réguliers se terminent en -st : du kommst.' },
    { q: 'Montag, Dienstag, ___, Donnerstag', options: ['Freitag', 'Sonntag', 'Mittwoch', 'Samstag'], a: 2, why: 'Mittwoch (mercredi) vient entre Dienstag (mardi) et Donnerstag (jeudi).' },
  ],
  related: ['de-articles-a1', 'de-quiz-a2', 'de-ex-a2'],
};
