// Resource: quiz. German items stay German; explanations are in Portuguese.
export default {
  key: 'de-quiz-a2', site: 'pt', slug: 'quiz-alemao-a2', kind: 'quiz', course: 'German', level: 'A2',
  draw: 'mug', tint: 'coral', published: '2026-10-26',
  title: 'Quiz rápido de alemão: dez perguntas no nível A2',
  metaTitle: 'Quiz de alemão A2 grátis: gramática e vocabulário online – Alimun',
  desc: 'Um quiz de alemão grátis com dez perguntas no nível A2: Perfekt, verbos modais, dativo, verbos separáveis e comparativos, com todas as respostas explicadas.',
  lead: 'Dez perguntas sobre a gramática que você encontra no A2. Escolha uma resposta para ver por que ela está certa.',
  instructions: 'Escolha a melhor resposta.',
  about: [
    'O A2 é o nível em que você consegue contar o que fez no fim de semana, descrever sua rotina, dizer o que pode, precisa ou quer fazer e comparar coisas em frases simples.',
    'Este quiz confere os pontos que mais confundem os alunos nesse nível: haben ou sein no Perfekt, os particípios passados, os verbos modais, as formas do dativo depois de verbos e preposições, os verbos separáveis e os comparativos. Cada resposta vem com uma explicação curta.',
  ],
  items: [
    { q: 'Gestern ___ ich ins Kino gegangen.', options: ['habe', 'bin', 'war', 'hatte'], a: 1, why: 'Verbos de deslocamento de um lugar para outro, como gehen, formam o Perfekt com sein: ich bin gegangen.' },
    { q: 'Wir haben den ganzen Abend Pizza ___.', options: ['gegessen', 'geessen', 'gegesst', 'essen'], a: 0, why: 'Essen é irregular, e o particípio passado é gegessen.' },
    { q: 'Hier ___ man nicht rauchen. Das ist verboten.', options: ['muss', 'will', 'darf', 'möchte'], a: 2, why: 'Nicht dürfen expressa que algo não é permitido.' },
    { q: 'Ich helfe ___ Mutter in der Küche.', options: ['meine', 'meiner', 'meinen', 'meinem'], a: 1, why: 'Helfen pede o dativo, e o feminino mein vira meiner no dativo.' },
    { q: 'Wann stehst du morgens ___?', options: ['an', 'auf', 'aus', 'ein'], a: 1, why: 'Aufstehen (levantar-se) é separável, então auf vai para o final da frase.' },
    { q: 'Mein Bruder ist drei Jahre ___ als ich.', options: ['am ältesten', 'alt', 'älter', 'ältere'], a: 2, why: 'Comparações com als usam o comparativo, e alt recebe trema: alt, älter, am ältesten.' },
    { q: 'Ich trinke lieber Tee ___ Kaffee.', options: ['als', 'wie', 'dann', 'wenn'], a: 0, why: 'Depois de um comparativo como lieber, o alemão usa als (do que).' },
    { q: 'Das Buch liegt auf ___ Tisch.', options: ['der', 'den', 'dem', 'des'], a: 2, why: 'Liegen descreve uma posição, então auf pede o dativo: auf dem Tisch.' },
    { q: 'Hast du schon ___?', options: ['geeinkauft', 'einkaufen', 'eingekaufen', 'eingekauft'], a: 3, why: 'Nos verbos separáveis, o ge- fica entre o prefixo e o radical: einkaufen, eingekauft.' },
    { q: 'Gefällt ___ das Kleid?', options: ['dich', 'du', 'dein', 'dir'], a: 3, why: 'Gefallen pede o dativo, então du vira dir: das Kleid gefällt dir.' },
  ],
  related: ['de-quiz-a1', 'de-quiz-b1', 'de-ex-a2'],
};
