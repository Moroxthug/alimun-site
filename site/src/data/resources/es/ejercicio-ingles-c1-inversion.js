// Resource: exercise. English items stay English; instructions and explanations are in Spanish.
export default {
  key: 'en-ex-c1', site: 'es', slug: 'ejercicio-ingles-c1-inversion', kind: 'exercise', course: 'English', level: 'C1',
  draw: 'dragon', tint: 'mint', published: '2026-10-26',
  title: 'Ejercicio de inglés: la inversión (C1)',
  metaTitle: 'Ejercicios de inversión en inglés C1 con respuestas – Alimun',
  desc: 'Doce preguntas gratis de nivel C1 de inglés sobre la inversión: Never have I, Hardly had, Not only, Should you y más, con cada respuesta explicada.',
  lead: 'Elige el orden de palabras correcto en cada frase. Ves al momento si aciertas y por qué.',
  instructions: 'Elige la forma correcta.',
  about: [
    'Cuando una frase empieza con una palabra negativa o restrictiva como never, rarely, seldom, little, hardly, no sooner, not only, not until, only after o under no circumstances, el inglés invierte el sujeto y el verbo auxiliar, igual que en una pregunta: "Never have I seen such a view", "Not only was he late, but...". Si no hay auxiliar, se añade do, does o did: "Little did she know", "Rarely do we see this." Hardly va seguido de when y no sooner de than: "Hardly had I arrived when the phone rang", "No sooner had we sat down than the music started."',
    'Las oraciones condicionales también pueden prescindir de if e invertir el orden, lo que suena formal y es habitual en cartas, correos y exámenes: "Should you need help" significa "If you need help", "Had I known" significa "If I had known" y "Were he to resign" significa "If he resigned". Estas estructuras dan énfasis o formalidad a textos y discursos, y aparecen en exámenes avanzados como C1 Advanced e IELTS.',
  ],
  items: [
    { q: 'Never ___ such a beautiful sunset.', options: ['I have seen', 'have I seen', 'I saw', 'did I saw'], a: 1, why: 'Después de una palabra negativa al principio, el auxiliar va delante del sujeto: Never have I seen.' },
    { q: 'Hardly ___ arrived when the phone rang.', options: ['had I', 'I had', 'did I', 'have I'], a: 0, why: 'Hardly al principio lleva inversión con el past perfect: Hardly had I arrived when...' },
    { q: 'Not only ___ late, but he also forgot the tickets.', options: ['he was', 'did he be', 'was he'], a: 2, why: 'Not only al principio invierte el verbo be y el sujeto: Not only was he late.' },
    { q: '___ you need any help, please call me.', options: ['Would', 'Should', 'Were', 'Had'], a: 1, why: 'Should + sujeto sustituye a "If you need" en un first conditional formal.' },
    { q: '___ I known about the traffic, I would have left earlier.', options: ['Have', 'Did', 'Had', 'Were'], a: 2, why: 'Had + sujeto sustituye a "If I had" en un third conditional.' },
    { q: '___ he to resign, the company would be in trouble.', options: ['Were', 'Was', 'Should', 'Did'], a: 0, why: 'Were + sujeto + infinitivo con to sustituye a "If he resigned" en un second conditional formal.' },
    { q: 'No sooner had we sat down ___ the music started.', options: ['when', 'than', 'then', 'that'], a: 1, why: 'No sooner va siempre seguido de than.' },
    { q: 'Only after the meeting ___ the truth.', options: ['we learned', 'learned we', 'we did learn', 'did we learn'], a: 3, why: 'Only after + tiempo invierte la oración principal, con did cuando no hay otro auxiliar.' },
    { q: 'Little ___ that she was being watched.', options: ['she knew', 'knew she', 'did she know', 'she did know'], a: 2, why: 'Little al principio significa en absoluto y lleva inversión con did: Little did she know.' },
    { q: 'Under no circumstances ___ open this door.', options: ['you should', 'should you', 'you must', 'must'], a: 1, why: 'Under no circumstances es negativo, así que el verbo modal va delante del sujeto: should you.' },
    { q: 'Rarely ___ such talent in someone so young.', options: ['do we see', 'we see', 'see we', 'we do see'], a: 0, why: 'Rarely al principio lleva inversión, con do en present simple: Rarely do we see.' },
    { q: 'Not until I read the letter ___ how worried she had been.', options: ['I realized', 'did I realize', 'I did realize', 'realized I'], a: 1, why: 'Con Not until, la inversión va en la oración principal: did I realize.' },
  ],
  related: ['en-ex-b2', 'en-quiz-c1', 'en-quiz-b2'],
};
