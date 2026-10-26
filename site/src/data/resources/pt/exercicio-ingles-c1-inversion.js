// Resource: exercise. English items stay English; instructions and explanations are in Portuguese.
export default {
  key: 'en-ex-c1', site: 'pt', slug: 'exercicio-ingles-c1-inversion', kind: 'exercise', course: 'English', level: 'C1',
  draw: 'dragon', tint: 'mint', published: '2026-10-26',
  title: 'Exercício de inglês: inversion (C1)',
  metaTitle: 'Exercícios de inversion em inglês C1 com respostas – Alimun',
  desc: 'Doze perguntas grátis para quem estuda inglês no nível C1 sobre inversion: Never have I, Hardly had, Not only, Should you e mais, com cada resposta explicada.',
  lead: 'Escolha a ordem certa das palavras em cada frase. Você vê na hora se acertou e por quê.',
  instructions: 'Escolha a forma certa.',
  about: [
    'Quando uma frase começa com uma palavra negativa ou restritiva, como never, rarely, seldom, little, hardly, no sooner, not only, not until, only after ou under no circumstances, o inglês inverte o sujeito e o verbo auxiliar, como numa pergunta: "Never have I seen such a view", "Not only was he late, but...". Se não houver auxiliar, acrescente do, does ou did: "Little did she know", "Rarely do we see this." Hardly vem seguido de when, e no sooner de than: "Hardly had I arrived when the phone rang", "No sooner had we sat down than the music started."',
    'As frases condicionais também podem dispensar o if e usar a inversão, o que soa formal e é comum em cartas, e-mails e provas: "Should you need help" significa "If you need help", "Had I known" significa "If I had known", e "Were he to resign" significa "If he resigned". Essas estruturas dão ênfase ou formalidade a textos e discursos, e caem em provas avançadas como o C1 Advanced e o IELTS.',
  ],
  items: [
    { q: 'Never ___ such a beautiful sunset.', options: ['I have seen', 'have I seen', 'I saw', 'did I saw'], a: 1, why: 'Depois de uma palavra negativa no início, coloque o auxiliar antes do sujeito: Never have I seen.' },
    { q: 'Hardly ___ arrived when the phone rang.', options: ['had I', 'I had', 'did I', 'have I'], a: 0, why: 'Hardly no início pede inversão com o past perfect: Hardly had I arrived when...' },
    { q: 'Not only ___ late, but he also forgot the tickets.', options: ['he was', 'did he be', 'was he'], a: 2, why: 'Not only no início inverte o verbo be e o sujeito: Not only was he late.' },
    { q: '___ you need any help, please call me.', options: ['Would', 'Should', 'Were', 'Had'], a: 1, why: 'Should + sujeito substitui "If you need" num first conditional formal.' },
    { q: '___ I known about the traffic, I would have left earlier.', options: ['Have', 'Did', 'Had', 'Were'], a: 2, why: 'Had + sujeito substitui "If I had" num third conditional.' },
    { q: '___ he to resign, the company would be in trouble.', options: ['Were', 'Was', 'Should', 'Did'], a: 0, why: 'Were + sujeito + to-infinitive substitui "If he resigned" num second conditional formal.' },
    { q: 'No sooner had we sat down ___ the music started.', options: ['when', 'than', 'then', 'that'], a: 1, why: 'No sooner vem sempre seguido de than.' },
    { q: 'Only after the meeting ___ the truth.', options: ['we learned', 'learned we', 'we did learn', 'did we learn'], a: 3, why: 'Only after + uma expressão de tempo inverte a oração principal, usando did quando não há outro auxiliar.' },
    { q: 'Little ___ that she was being watched.', options: ['she knew', 'knew she', 'did she know', 'she did know'], a: 2, why: 'Little no início significa de jeito nenhum e pede inversão com did: Little did she know.' },
    { q: 'Under no circumstances ___ open this door.', options: ['you should', 'should you', 'you must', 'must'], a: 1, why: 'Under no circumstances é negativo, então o modal vem antes do sujeito: should you.' },
    { q: 'Rarely ___ such talent in someone so young.', options: ['do we see', 'we see', 'see we', 'we do see'], a: 0, why: 'Rarely no início pede inversão, com do no present simple: Rarely do we see.' },
    { q: 'Not until I read the letter ___ how worried she had been.', options: ['I realized', 'did I realize', 'I did realize', 'realized I'], a: 1, why: 'Com Not until, a inversão acontece na oração principal: did I realize.' },
  ],
  related: ['en-ex-b2', 'en-quiz-c1', 'en-quiz-b2'],
};
