// Resource: fun. Each option votes for a drawing from the cast; the result is a city to learn English or German in.
export default {
  key: 'city-quiz', site: 'pt', slug: 'qual-cidade-para-aprender-ingles-ou-alemao', kind: 'fun', course: null, level: 'Só por diversão',
  draw: 'suitcase', tint: 'mint', published: '2026-10-27',
  title: 'Em qual cidade você deveria aprender o seu novo idioma?',
  metaTitle: 'Em qual cidade você deveria aprender inglês ou alemão? – Alimun',
  desc: 'Um quiz grátis de três perguntas: Londres, Dublin, Nova York, Berlim, Viena ou Zurique? Descubra a cidade que combina com o seu jeito de viver e aprender.',
  lead: 'Londres ou Berlim? Nova York ou Viena? Três perguntas para descobrir a cidade onde você aprenderia melhor inglês ou alemão.',
  about: [
    'O lugar onde você pratica muda o jeito como você aprende: uma cidade grande e agitada faz você falar, uma cidade tranquila dá tempo para ouvir.',
    'Este quiz é só por diversão. Você não precisa se mudar para aprender, mas é bom saber onde você se sentiria em casa.',
  ],
  youAre: 'Sua cidade: {}',
  buddy: {
    questions: [
      ['Sua noite perfeita?', [['Um espetáculo em um grande teatro', 'teacup'], ['Música ao vivo em um pub aconchegante', 'cat'], ['Um bar no terraço com vista', 'sun'], ['Uma balada que abre à meia-noite', 'pretzel']]],
      ['Escolha um café da manhã:', [['Chá e torrada', 'teacup'], ['Um bagel para comer andando', 'sun'], ['Café e uma fatia de bolo', 'croissant'], ['Pãezinhos fresquinhos da padaria', 'pretzel']]],
      ['Como você gosta de se locomover?', [['De metrô', 'teacup'], ['A pé, conversando com as pessoas', 'cat'], ['De bonde, sem pressa', 'croissant'], ['De trem, sempre no horário', 'owl']]],
    ],
    results: {
      teacup: ['Londres', 'Teatros, museus e uma xícara de chá em cada esquina. Você ama uma cidade cheia de história e energia.'],
      cat: ['Dublin', 'Simpática, musical e cheia de histórias. Você aprende melhor conversando com todo mundo que encontra.'],
      sun: ['Nova York', 'Rápida, iluminada e aberta a noite toda. Você aprende se jogando e falando desde o primeiro dia.'],
      pretzel: ['Berlim', 'Criativa, descontraída e sempre acordada. Você gosta de uma cidade que deixa você ser quem é.'],
      croissant: ['Viena', 'Cafés tradicionais, música e ruas elegantes. Você gosta de ir com calma e aproveitar.'],
      owl: ['Zurique', 'Tranquila, limpa e sempre pontual. Você gosta de um plano e de uma vista bonita.'],
    },
  },
  related: ['buddy-quiz', 'german-word-quiz', 'british-american'],
};
