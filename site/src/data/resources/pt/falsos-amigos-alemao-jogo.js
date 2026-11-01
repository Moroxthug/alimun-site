// Resource: game. German false friends and their real meanings. German meanings checked against Duden; Portuguese meanings against Michaelis and Houaiss.
// German words stay German; options, explanations and pair meanings are in Brazilian Portuguese.
export default {
  key: 'german-false-friends', site: 'pt', slug: 'falsos-amigos-alemao-jogo', kind: 'game', course: 'German', level: 'Todos os níveis',
  draw: 'ghost', tint: 'lime', published: '2026-11-01',
  title: 'Jogo de falsos amigos em alemão: um Gift é um presente?',
  metaTitle: 'Falsos amigos em alemão: jogo com Gift, Handy, Chef – Alimun',
  desc: 'Um jogo grátis com falsos amigos do alemão: das Gift é veneno, não presente, e der Chef é o seu chefe. Adivinhe o que dez palavras significam de verdade.',
  lead: 'Algumas palavras alemãs parecem inglês, ou português, e querem dizer outra coisa. Das Gift é veneno e das Handy é o celular. Você reconhece as outras?',
  instructions: 'O que significa de verdade?',
  about: [
    'Falsos amigos, ou falsos cognatos, são palavras parecidas com uma palavra que você já conhece mas com outro significado. O alemão tem muitos com o inglês, e alguns com o português.',
    'Aprender cedo evita erros engraçados, como dizer ao seu anfitrião que trouxe veneno para ele ou procurar um cozinheiro quando quer falar com o chefe.',
  ],
  items: [
    { q: 'das Gift', options: ['um presente', 'veneno', 'um talento', 'uma gorjeta'], a: 1, why: 'das Gift = o veneno. Presente se diz das Geschenk.' },
    { q: 'das Handy', options: ['o celular', 'uma bolsa de mão', 'uma luva', 'uma ferramenta'], a: 0, why: 'das Handy = o celular. Parece o inglês handy, que quer dizer prático.' },
    { q: 'der Chef', options: ['um cozinheiro', 'um garçom', 'o chefe', 'um cliente'], a: 2, why: 'der Chef = o chefe. Cuidado: não é o chef de cozinha, que em alemão se diz der Koch.' },
    { q: 'bekommen', options: ['tornar-se', 'voltar', 'dar as boas-vindas', 'receber, ganhar'], a: 3, why: 'bekommen = receber, ganhar. Parece o inglês become, mas tornar-se se diz werden.' },
    { q: 'der Rat', options: ['um rato', 'um conselho', 'uma taxa', 'um esquilo'], a: 1, why: 'der Rat = o conselho, tanto o que você dá a alguém quanto um órgão, como a câmara municipal. O rato se diz die Ratte ou die Maus.' },
    { q: 'die Kaution', options: ['a cautela', 'uma placa de perigo', 'uma caução', 'uma almofada'], a: 2, why: 'die Kaution = a caução, o depósito de garantia, por exemplo no aluguel de um apartamento. Aqui o português ajuda; quem fala inglês cai na armadilha, porque caution quer dizer cautela.' },
    { q: 'aktuell', options: ['atual, atualizado', 'real, verdadeiro', 'ativo', 'exato'], a: 0, why: 'aktuell = atual, atualizado, como em português. Engana quem fala inglês, porque actual quer dizer real.' },
    { q: 'eventuell', options: ['no fim', 'toda vez', 'imediatamente', 'talvez, se for o caso'], a: 3, why: 'eventuell = talvez, se for o caso, como o eventual do português. Nunca quer dizer no fim, que em alemão é schließlich.' },
    { q: 'sensibel', options: ['sensato, razoável', 'sensível', 'sensual', 'sentimental'], a: 1, why: 'sensibel = sensível, como em português. Sensato se diz vernünftig.' },
    { q: 'das Gymnasium', options: ['uma academia', 'um ginásio de esportes', 'uma escola de ensino médio', 'uma piscina'], a: 2, why: 'das Gymnasium = a escola que prepara para o Abitur, o exame para entrar na universidade. Também engana em português: o ginásio de esportes se diz die Sporthalle ou die Turnhalle, e a academia das Fitnessstudio.' },
  ],
  pairs: [
    ['das Gift', 'o veneno'],
    ['das Handy', 'o celular'],
    ['der Chef', 'o chefe'],
    ['bekommen', 'receber, ganhar'],
    ['der Rat', 'o conselho'],
    ['eventuell', 'talvez'],
    ['sensibel', 'sensível'],
    ['das Gymnasium', 'a escola de ensino médio'],
  ],
  related: ['false-friends', 'german-compounds', 'untranslatable-german'],
};
