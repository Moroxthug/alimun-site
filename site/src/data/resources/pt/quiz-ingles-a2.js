// Resource: quiz. English items stay English; explanations are in Portuguese.
export default {
  key: 'en-quiz-a2', site: 'pt', slug: 'quiz-ingles-a2', kind: 'quiz', course: 'English', level: 'A2',
  draw: 'dog', tint: 'coral', published: '2026-10-26',
  title: 'Quiz rápido de inglês: dez perguntas no nível A2',
  metaTitle: 'Quiz de inglês A2 grátis: gramática e vocabulário online – Alimun',
  desc: 'Um quiz de inglês grátis com dez perguntas no nível A2: past simple, comparativos, going to, some e any e preposições de tempo, com todas as respostas explicadas.',
  lead: 'Dez perguntas sobre a gramática e as palavras que você encontra no A2. Escolha uma resposta para ver por que ela está certa.',
  instructions: 'Escolha a melhor resposta.',
  about: [
    'No A2 você consegue falar do seu passado, comparar coisas e fazer planos simples. Você consegue fazer compras, pedir comida, pedir informações sobre o caminho e escrever mensagens curtas sobre assuntos do dia a dia.',
    'Este quiz confere os pontos que mais aparecem nesse nível: o past simple, os comparativos, going to para planos e previsões, some e any, substantivos contáveis e incontáveis e as preposições de tempo. Cada resposta vem com uma explicação curta.',
  ],
  items: [
    { q: 'We ___ to the beach last weekend.', options: ['go', 'went', 'gone', 'have gone'], a: 1, why: 'Last weekend é um momento já terminado no passado, então use o past simple: went.' },
    { q: 'Did you ___ the email?', options: ['see', 'saw', 'seen', 'seeing'], a: 0, why: 'Depois de did numa pergunta, use o verbo na forma base: did you see?' },
    { q: 'My sister is ___ than me.', options: ['more tall', 'tallest', 'tall', 'taller'], a: 3, why: 'Adjetivos curtos recebem -er para comparar duas coisas: tall, taller.' },
    { q: 'This book is ___ than that one.', options: ['the most interesting', 'interestinger', 'more interesting', 'interesting'], a: 2, why: 'Adjetivos longos usam more para comparar duas coisas: more interesting than.' },
    { q: 'Look at those dark clouds! It ___ rain.', options: ['is going to', 'will to', 'going to', 'is go to'], a: 0, why: 'Use be going to para uma previsão baseada no que você está vendo agora.' },
    { q: "There isn't ___ bread left.", options: ['some', 'any', 'many', 'a'], a: 1, why: 'Use any em frases negativas; bread é incontável, então many e a estão errados.' },
    { q: 'How ___ water do you drink every day?', options: ['much', 'many', 'few', 'lot'], a: 0, why: 'Water é incontável, então use how much; how many é para substantivos contáveis.' },
    { q: 'She gave me some good ___.', options: ['advices', 'an advice', 'advise', 'advice'], a: 3, why: 'Advice é um substantivo incontável, sem plural; advise é o verbo.' },
    { q: 'The meeting is ___ Monday morning.', options: ['in', 'at', 'to', 'on'], a: 3, why: 'Use on com os dias, inclusive com partes de um dia específico: on Monday morning.' },
    { q: 'I started this job three years ___.', options: ['ago', 'since', 'for', 'last'], a: 0, why: 'Ago vem depois de um período de tempo para dizer quando algo aconteceu no passado.' },
  ],
  related: ['en-quiz-a1', 'en-quiz-b1', 'en-ex-a2'],
};
