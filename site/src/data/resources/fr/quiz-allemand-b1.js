// Resource: quiz. German items stay German; explanations are in French.
export default {
  key: 'de-quiz-b1', site: 'fr', slug: 'quiz-allemand-b1', kind: 'quiz', course: 'German', level: 'B1',
  draw: 'sun', tint: 'mint', published: '2026-10-26',
  title: "Quiz d'allemand rapide : dix questions de niveau B1",
  metaTitle: "Quiz d'allemand B1 gratuit : grammaire et vocabulaire – Alimun",
  desc: "Un quiz d'allemand gratuit de dix questions au niveau B1 : weil, dass et obwohl, Präteritum, passif, verbes pronominaux et prépositions, réponses expliquées.",
  lead: "Dix questions sur la grammaire que tu rencontres au niveau B1. Choisis une réponse pour voir pourquoi elle est juste.",
  instructions: 'Choisis la meilleure réponse.',
  about: [
    "Le B1, c'est le niveau où tu te débrouilles dans la plupart des situations en voyage ou au travail, où tu racontes une histoire au passé, justifies tes opinions et relies tes idées dans des phrases plus longues.",
    "Ce quiz vérifie les structures qui rendent tout ça possible : les subordonnées avec weil, dass et obwohl, les formes du Präteritum, le passif avec werden, les verbes pronominaux et les prépositions courantes. Chaque réponse est accompagnée d'une courte explication.",
  ],
  items: [
    { q: 'Ich lerne Deutsch, ___ ich in Wien arbeiten möchte.', options: ['weil', 'denn', 'deshalb', 'trotzdem'], a: 0, why: "Le verbe möchte est à la fin, donc seule la conjonction de subordination weil convient ; denn, deshalb et trotzdem demandent un autre ordre des mots." },
    { q: 'Er sagt, ___ er morgen keine Zeit hat.', options: ['ob', 'dass', 'wenn', 'was'], a: 1, why: "Dass introduit ce que quelqu'un dit ou pense : er sagt, dass ..." },
    { q: 'Er hat die Prüfung bestanden, ___ er kaum gelernt hat.', options: ['weil', 'damit', 'obwohl', 'dass'], a: 2, why: "Obwohl (bien que) introduit une opposition : il a réussi alors qu'il n'a presque pas révisé." },
    { q: 'Als Kind ___ ich jeden Sommer bei meiner Oma.', options: ['war', 'bin', 'wäre', 'sei'], a: 0, why: "Pour le passé de sein, l'allemand utilise normalement le Präteritum : ich war." },
    { q: 'Gestern ___ wir einen langen Brief.', options: ['schreiben', 'schrieben', 'schreibten', 'geschrieben'], a: 1, why: 'Schreiben est un verbe fort, son Präteritum est schrieb, et avec wir on dit schrieben.' },
    { q: 'Die Briefe ___ jeden Morgen vom Postboten gebracht.', options: ['werden', 'sind', 'haben', 'wird'], a: 0, why: 'Le passif se forme avec werden + participe passé, et le sujet pluriel die Briefe demande werden.' },
    { q: 'Ich freue ___ auf das Wochenende.', options: ['mir', 'sich', 'mich', 'dich'], a: 2, why: "Sich freuen est pronominal, et avec ich le pronom à l'accusatif est mich." },
    { q: 'Ich putze ___ die Zähne.', options: ['mich', 'mir', 'sich', 'mein'], a: 1, why: "Quand la phrase a déjà un complément à l'accusatif (die Zähne), le pronom réfléchi est au datif : mir." },
    { q: 'Wir fahren im Sommer ___ Italien.', options: ['zu', 'in', 'bei', 'nach'], a: 3, why: "Pour aller dans un pays ou une ville sans article, l'allemand utilise nach : nach Italien, nach Berlin." },
    { q: 'Ich interessiere mich sehr ___ Musik.', options: ['an', 'auf', 'über', 'für'], a: 3, why: 'Le verbe est sich interessieren für : ich interessiere mich für Musik.' },
  ],
  related: ['de-quiz-a2', 'de-quiz-b2', 'de-ex-b1'],
};
