// Resource: quiz. German items stay German; explanations are in Portuguese.
export default {
  key: 'de-quiz-a1', site: 'pt', slug: 'quiz-alemao-a1', kind: 'quiz', course: 'German', level: 'A1',
  draw: 'pretzel', tint: 'sun', published: '2026-10-26',
  title: 'Quiz rápido de alemão: dez perguntas no nível A1',
  metaTitle: 'Quiz de alemão A1 grátis: gramática e vocabulário online – Alimun',
  desc: 'Um quiz de alemão grátis com dez perguntas no nível A1: sein e haben, artigos, plurais, perguntas, números e palavras do dia a dia, com as respostas explicadas.',
  lead: 'Dez perguntas sobre a gramática e as palavras que você encontra nos primeiros meses de alemão. Escolha uma resposta para ver por que ela está certa.',
  instructions: 'Escolha a melhor resposta.',
  about: [
    'O A1 é o nível em que você consegue se apresentar, fazer e responder perguntas simples sobre onde mora e o que faz, e entender palavras do dia a dia, como os dias da semana, os números e os alimentos.',
    'Este quiz confere a base sobre a qual todo o resto é construído: as formas de sein e haben, der, die e das, as terminações do plural, as palavras interrogativas e os números. Cada resposta vem com uma explicação curta, então você aprende algo mesmo quando erra.',
  ],
  items: [
    { q: 'Ich ___ Anna.', options: ['bin', 'bist', 'ist', 'sind'], a: 0, why: 'Com ich, o verbo sein (ser, estar) vira bin: ich bin, du bist, er ist.' },
    { q: '___ Tisch ist neu.', options: ['Die', 'Der', 'Das', 'Den'], a: 1, why: 'Tisch é masculino, então como sujeito leva der: der Tisch.' },
    { q: 'Wir ___ zwei Kinder.', options: ['hat', 'habt', 'haben', 'hast'], a: 2, why: 'Com wir, haben (ter) mantém a forma completa: wir haben.' },
    { q: 'Ein Buch, zwei ___.', options: ['Buchs', 'Bücher', 'Buche', 'Buchen'], a: 1, why: 'Buch forma o plural com trema e -er: das Buch, die Bücher.' },
    { q: '___ wohnst du? – In Berlin.', options: ['Wer', 'Was', 'Wann', 'Wo'], a: 3, why: 'Wo pergunta onde alguém ou algo está, e a resposta é um lugar.' },
    { q: 'Wie sagt man 21 auf Deutsch?', options: ['einundzwanzig', 'zwanzigeins', 'zweiundzehn', 'einszwanzig'], a: 0, why: 'O alemão diz as unidades antes das dezenas: ein-und-zwanzig, ao pé da letra um e vinte.' },
    { q: 'Ich habe ___ Bruder.', options: ['ein', 'eine', 'einer', 'einen'], a: 3, why: 'Haben pede o acusativo, e o masculino ein vira einen: ich habe einen Bruder.' },
    { q: 'Am Morgen trinke ich eine Tasse ___.', options: ['Brot', 'Käse', 'Kaffee', 'Apfel'], a: 2, why: 'Você bebe uma xícara de café: eine Tasse Kaffee. As outras palavras são coisas que se comem.' },
    { q: 'Du ___ aus Spanien, oder?', options: ['kommt', 'komme', 'kommen', 'kommst'], a: 3, why: 'Com du, os verbos regulares terminam em -st: du kommst.' },
    { q: 'Montag, Dienstag, ___, Donnerstag', options: ['Freitag', 'Sonntag', 'Mittwoch', 'Samstag'], a: 2, why: 'Mittwoch (quarta-feira) vem entre Dienstag (terça-feira) e Donnerstag (quinta-feira).' },
  ],
  related: ['de-articles-a1', 'de-quiz-a2', 'de-ex-a2'],
};
