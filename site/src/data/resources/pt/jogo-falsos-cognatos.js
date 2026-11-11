// Resource: game. Cards: [word, language of the word, what it looks like in Portuguese, what it really means,
// how to say what it looks like in that language]. The game asks what each word really means.
// Every card is a false friend between the foreign word and Portuguese.
export default {
  key: 'false-friends', site: 'pt', slug: 'jogo-falsos-cognatos', kind: 'game', course: null, level: 'Todos os níveis',
  draw: 'dragon', tint: 'coral', published: '2026-10-26',
  title: 'Jogo de falsos cognatos: palavras que enganam',
  metaTitle: 'Jogo de falsos cognatos: inglês, alemão, espanhol e mais – Alimun',
  desc: 'Um jogo grátis com falsos cognatos entre o português e o inglês, o alemão, o espanhol, o italiano e o francês: palavras parecidas que significam outra coisa.',
  lead: 'Palavras que parecem português, mas significam outra coisa. Adivinhe o que cada uma quer dizer de verdade e depois vire a carta para conferir.',
  instructions: 'O que a palavra significa de verdade?',
  about: [
    'Falsos cognatos são palavras que se parecem, na escrita ou no som, com uma palavra de outro idioma, mas têm outro significado. Eles estão entre os erros mais comuns, e mais engraçados, de quem aprende um idioma.',
    'Jogue e depois vire as cartas para ver a palavra de que você realmente precisa.',
  ],
  cards: [
    ['pretend', 'Inglês', 'pretender', 'fingir', 'to intend'],
    ['push', 'Inglês', 'puxar', 'empurrar', 'to pull'],
    ['parents', 'Inglês', 'parentes', 'pais (pai e mãe)', 'relatives'],
    ['library', 'Inglês', 'livraria', 'biblioteca', 'bookstore'],
    ['Chef', 'Alemão', 'chef de cozinha', 'chefe', 'der Koch'],
    ['Mappe', 'Alemão', 'mapa', 'pasta (para papéis)', 'die Landkarte'],
    ['Tablett', 'Alemão', 'tablet', 'bandeja', 'das Tablet'],
    ['embarazada', 'Espanhol', 'embaraçada', 'grávida', 'avergonzada'],
    ['exquisito', 'Espanhol', 'esquisito', 'delicioso', 'raro'],
    ['camera', 'Italiano', 'câmera', 'quarto', 'macchina fotografica'],
    ['burro', 'Italiano', 'burro', 'manteiga', 'asino'],
    ['salir', 'Francês', 'sair', 'sujar', 'sortir'],
  ],
  related: ['buddy-quiz', 'de-articles-a1', 'en-quiz-b1'],
};
