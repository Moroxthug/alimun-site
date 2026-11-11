// Resource: game. English homophones: words that sound the same but are spelled differently. Meanings and UK/US pronunciations checked against Cambridge Dictionary.
// The English sentences and words stay English; explanations and meanings are in Brazilian Portuguese.
export default {
  key: 'english-homophones', site: 'pt', slug: 'homofonos-ingles-jogo', kind: 'game', course: 'English', level: 'Todos os níveis',
  draw: 'cat', tint: 'coral', published: '2026-11-01',
  title: "Jogo de homófonos em inglês: their, there ou they're?",
  metaTitle: "Jogo de homófonos em inglês: their, there, they're – Alimun",
  desc: "Um jogo grátis com dez grupos de palavras em inglês que soam iguais mas se escrevem de outro jeito, de their e there a piece e peace. Escolha a forma certa.",
  lead: "Their, there ou they're? Your ou you're? Complete dez frases com a palavra escrita do jeito certo e depois ligue cada palavra ao seu significado.",
  instructions: 'Qual forma completa a frase?',
  about: [
    "Homófonos são palavras que se pronunciam exatamente igual, mas têm grafia e significado diferentes, como their, there e they're. Quando você ouve, a frase mostra qual é; quando você escreve, precisa escolher.",
    "Os falantes nativos também confundem, principalmente its e it's ou your e you're. Um truque rápido: se der para dizer it is ou you are no lugar, use a forma com apóstrofo.",
  ],
  items: [
    { q: 'Look over ___, by the window.', options: ['their', 'there', "they're", 'thier'], a: 1, why: "There significa lá, naquele lugar. Their (deles, delas) e they're (they are, eles são ou estão) soam iguais: /ðeə/ no inglês britânico e /ðer/ no inglês americano." },
    { q: "___ going to love this film.", options: ["You're", 'Your', 'Youre', "Your'e"], a: 0, why: "You're é a forma curta de you are, você é ou está. Your significa seu, sua, de você. As duas se pronunciam /jɔː/ no inglês britânico e geralmente /jʊr/ no inglês americano." },
    { q: 'The dog wagged ___ tail.', options: ["it's", "its'", 'its', 'it is'], a: 2, why: "Its significa seu, sua (de uma coisa ou de um animal) e não tem apóstrofo. It's é a forma curta de it is ou it has. As duas se pronunciam /ɪts/." },
    { q: 'This coffee is ___ hot to drink.', options: ['to', 'two', 'tow', 'too'], a: 3, why: 'Too significa demais, ou também. Two é o número 2. To costuma ser pronunciado mais curto, /tə/, e só soa como /tuː/ quando é tônico.' },
    { q: "I can't decide ___ to go or stay.", options: ['weather', 'whether', 'wheather', 'whather'], a: 1, why: 'Whether significa se, quando você escolhe entre duas possibilidades. Weather é o tempo, o clima. Quase todo mundo pronuncia as duas /ˈweðə/; alguns americanos começam whether com um som aspirado /hw/.' },
    { q: "Speak up, I can't ___ you!", options: ['hear', 'here', 'heer', 'hier'], a: 0, why: 'Hear significa ouvir; here significa aqui. Elas se pronunciam /hɪə/ no inglês britânico e /hɪr/ no inglês americano.' },
    { q: "I don't ___ the answer.", options: ['no', 'now', 'know', 'kno'], a: 2, why: 'Know significa saber. No é o contrário de yes. Elas se pronunciam /nəʊ/ no inglês britânico e /noʊ/ no inglês americano.' },
    { q: 'I need to ___ some milk on the way home.', options: ['by', 'bye', 'bie', 'buy'], a: 3, why: 'Buy significa comprar. By significa perto de ou por, e bye é a forma curta de goodbye, tchau. As três se pronunciam /baɪ/.' },
    { q: "Don't forget to ___ your name at the top.", options: ['right', 'write', 'rite', 'wright'], a: 1, why: 'Write significa escrever. Right significa certo ou direita, um rite é um rito, e wright aparece em palavras como playwright, dramaturgo. Todas se pronunciam /raɪt/.' },
    { q: 'All we want is a bit of ___ and quiet.', options: ['peace', 'piece', 'peice', 'peese'], a: 0, why: 'Peace significa paz e sossego. A piece é um pedaço de alguma coisa, como a piece of cake. As duas se pronunciam /piːs/.' },
  ],
  pairs: [
    ['their', 'Deles, delas'],
    ["they're", 'Eles são ou estão'],
    ["you're", 'Você é ou está'],
    ["it's", 'É, ou tem (it is, it has)'],
    ['too', 'Também, ou demais'],
    ['whether', 'Se, entre duas opções'],
    ['buy', 'Comprar'],
    ['piece', 'Um pedaço'],
  ],
  related: ['english-idioms', 'british-american', 'false-friends'],
};
