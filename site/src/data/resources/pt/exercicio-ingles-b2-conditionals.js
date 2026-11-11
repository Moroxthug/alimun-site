// Resource: exercise. English items stay English; instructions and explanations are in Portuguese.
export default {
  key: 'en-ex-b2', site: 'pt', slug: 'exercicio-ingles-b2-conditionals', kind: 'exercise', course: 'English', level: 'B2',
  draw: 'cat', tint: 'lime', published: '2026-10-26',
  title: 'Exercício de inglês: conditionals (B2)',
  metaTitle: 'Exercícios de conditionals em inglês B2 com respostas – Alimun',
  desc: 'Doze perguntas grátis para quem estuda inglês no nível B2 sobre zero, first, second, third e mixed conditionals, com uma explicação para cada resposta.',
  lead: 'Escolha a forma verbal certa em cada frase com if. Você vê na hora se acertou e por quê.',
  instructions: 'Escolha a forma certa.',
  about: [
    'O zero conditional (if + present, present) é para fatos e coisas que sempre acontecem: "If you heat ice, it melts." O first conditional (if + present, will + verbo) é para possibilidades reais no futuro: "If it rains tomorrow, we will stay home." Unless significa if not, então segue o mesmo padrão. O second conditional (if + past, would + verbo) é para situações irreais ou pouco prováveis agora: "If I had more time, I would learn the piano." No inglês formal, usa-se were para todas as pessoas: "If I were you..."',
    'O third conditional (if + past perfect, would have + past participle) é para mudanças imaginadas no passado: "If we had left earlier, we would have caught the train." Os mixed conditionals combinam os dois: um passado irreal com um resultado no presente ("If I had taken that job, I would live in New York now"), ou um presente irreal com um resultado no passado ("If he were more careful, he wouldn\'t have made that mistake"). Observe as expressões de tempo em cada metade da frase para decidir qual forma se encaixa.',
  ],
  items: [
    { q: 'If you mix red and white paint, you ___ pink.', options: ['would get', 'get', 'got', 'had gotten'], a: 1, why: 'Um fato geral usa o zero conditional: if + present, present.' },
    { q: 'If it ___ tomorrow, we will cancel the picnic.', options: ['will rain', 'rained', 'rains', 'would rain'], a: 2, why: 'No first conditional, a oração com if leva o present simple, mesmo falando do futuro.' },
    { q: 'If I ___ you, I would talk to her.', options: ['were', 'am', 'had been', 'will be'], a: 0, why: 'Para dar conselhos, o second conditional usa "If I were you", com were para todas as pessoas.' },
    { q: 'If she had studied harder, she ___ the exam last month.', options: ['would pass', 'will pass', 'would have passed', 'passed'], a: 2, why: 'Um resultado imaginado no passado, no third conditional, leva would have + past participle.' },
    { q: 'If I had taken the job in New York, I ___ there now.', options: ['would live', 'would have lived', 'will live', 'lived'], a: 0, why: 'Um mixed conditional: uma condição irreal no passado com um resultado no presente (now) leva would + verbo.' },
    { q: "If we ___ the map, we wouldn't have gotten lost.", options: ['had checked', 'checked', 'would check', 'have checked'], a: 0, why: 'A oração com if do third conditional leva o past perfect.' },
    { q: 'Unless you hurry, you ___ the bus.', options: ['miss', 'would miss', 'missed', 'will miss'], a: 3, why: 'Unless significa if not, e aqui segue o first conditional: will + verbo.' },
    { q: 'If he ___ more money, he would buy a house.', options: ['would have', 'will have', 'has', 'had'], a: 3, why: 'O second conditional leva o past simple na oração com if.' },
    { q: 'If he were more careful, he ___ that mistake yesterday.', options: ["wouldn't make", "wouldn't have made", "won't make", "didn't make"], a: 1, why: 'Um mixed conditional: uma condição irreal no presente com um resultado no passado leva would have + past participle.' },
    { q: "If she weren't so busy, she ___ us more often.", options: ['visits', 'will visit', 'would visit', 'would have visited'], a: 2, why: 'Uma situação irreal no presente usa o second conditional: would + verbo.' },
    { q: "If I hadn't eaten so much, I ___ sick now.", options: ["wouldn't feel", "won't feel", "wouldn't have felt", "don't feel"], a: 0, why: 'Um mixed conditional: uma condição no passado com um resultado no presente (now) leva would + verbo.' },
    { q: 'What would you do if you ___ the lottery?', options: ['win', 'had won', 'will win', 'won'], a: 3, why: 'Uma situação imaginada e pouco provável usa o second conditional: if + past simple.' },
  ],
  related: ['en-ex-b1', 'en-ex-c1', 'en-quiz-b2'],
};
