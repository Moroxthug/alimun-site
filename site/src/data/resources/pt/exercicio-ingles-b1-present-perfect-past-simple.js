// Resource: exercise. English items stay English; instructions and explanations are in Portuguese.
export default {
  key: 'en-ex-b1', site: 'pt', slug: 'exercicio-ingles-b1-present-perfect-past-simple', kind: 'exercise', course: 'English', level: 'B1',
  draw: 'owl', tint: 'coral', published: '2026-10-26',
  title: 'Exercício de inglês: present perfect ou past simple? (B1)',
  metaTitle: 'Exercícios de present perfect e past simple (B1, grátis) – Alimun',
  desc: 'Doze perguntas grátis para quem estuda inglês no nível B1 sobre present perfect e past simple, com expressões de tempo como pista e cada resposta explicada.',
  lead: 'Escolha o present perfect ou o past simple em cada frase. Você vê na hora se acertou e por quê.',
  instructions: 'Escolha o tempo verbal certo.',
  about: [
    'Use o past simple para uma ação que aconteceu em um momento já terminado: yesterday, last Friday, two days ago, in 2019, when I was a child. Se a frase diz ou deixa claro quando aconteceu, o past simple é a escolha certa, e as perguntas com when também pedem esse tempo: "When did you move here?" Ele também é o tempo usado para a vida de pessoas que já morreram, como em "Leonardo da Vinci painted the Mona Lisa."',
    'Use o present perfect (have ou has + past participle) quando o tempo chega até agora. Ele aparece com since e for quando a situação ainda é verdade ("She has lived here since 2020"), em perguntas com how long ("How long have you known her?"), depois de "This is the first time..." e com períodos que ainda não terminaram, como all my life. Um teste simples: se dá para acrescentar um momento terminado como yesterday, escolha o past simple; se a ação se liga ao presente, escolha o present perfect.',
  ],
  items: [
    { q: 'We ___ to Japan in 2019.', options: ['have gone', 'went', 'have been'], a: 1, why: 'In 2019 é um momento já terminado, então use o past simple.' },
    { q: 'She ___ in Boston since 2020.', options: ['has lived', 'lived', 'lives'], a: 0, why: 'Since + um ponto de partida mostra uma situação que continua até agora: present perfect.' },
    { q: 'I ___ my keys two days ago.', options: ['have lost', 'lose', 'lost'], a: 2, why: 'Ago aponta para um momento já terminado, então use o past simple.' },
    { q: 'How long ___ you known Maria?', options: ['did', 'have', 'do'], a: 1, why: 'Perguntas com how long sobre uma situação que ainda é verdade usam o present perfect.' },
    { q: 'This is the first time I ___ sushi.', options: ['ate', 'eat', 'have eaten'], a: 2, why: 'Depois de "This is the first time", o inglês usa o present perfect.' },
    { q: 'When ___ you move to this apartment?', options: ['did', 'have', 'are'], a: 0, why: 'Perguntas com when falam de um momento já terminado, então pedem o past simple.' },
    { q: 'They ___ married for ten years, and they are still very happy.', options: ['were', 'are', 'have been'], a: 2, why: 'For + um período que continua até agora pede o present perfect.' },
    { q: 'Leonardo da Vinci ___ the Mona Lisa.', options: ['has painted', 'painted', 'paints'], a: 1, why: 'A vida dele já terminou, então a ação pertence a um tempo concluído: past simple.' },
    { q: 'He ___ for the company since he left college.', options: ['has worked', 'worked', 'works'], a: 0, why: 'Since + um acontecimento do passado, com o emprego ainda em andamento, pede o present perfect.' },
    { q: 'I ___ him last Friday at the party.', options: ['have seen', 'saw', 'see'], a: 1, why: 'Last Friday é um momento já terminado, então use o past simple.' },
    { q: "I ___ in this town all my life, and I don't want to leave.", options: ['lived', 'was living', 'have lived'], a: 2, why: 'All my life é um período que ainda não terminou, então use o present perfect.' },
    { q: 'What ___ you do last weekend?', options: ['have', 'did', 'do'], a: 1, why: 'Last weekend é um momento já terminado, então a pergunta usa did.' },
  ],
  related: ['en-ex-a2', 'en-ex-b2', 'en-quiz-b1'],
};
