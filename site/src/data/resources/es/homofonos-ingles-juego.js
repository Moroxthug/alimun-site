// Resource: game. English homophones: words that sound the same but are spelled differently. Meanings and UK/US pronunciations checked against Cambridge Dictionary.
// The English sentences and words stay English; explanations and meanings are in Spanish.
export default {
  key: 'english-homophones', site: 'es', slug: 'homofonos-ingles-juego', kind: 'game', course: 'English', level: 'Todos los niveles',
  draw: 'cat', tint: 'coral', published: '2026-11-01',
  title: "Juego de homófonos en inglés: ¿their, there o they're?",
  metaTitle: "Homófonos en inglés: juego con their, there, they're y más – Alimun",
  desc: "Un juego gratis con diez grupos de palabras inglesas que suenan igual pero se escriben distinto, de their y there a piece y peace. Elige la forma correcta.",
  lead: "¿Their, there o they're? ¿Your o you're? Completa diez frases con la palabra bien escrita y luego une cada palabra con su significado.",
  instructions: '¿Qué forma completa la frase?',
  about: [
    "Los homófonos son palabras que se pronuncian exactamente igual pero tienen distinta ortografía y distinto significado, como their, there y they're. Cuando escuchas, la frase te dice cuál es; cuando escribes, tienes que elegir tú.",
    "Los nativos también los confunden, sobre todo its e it's o your y you're. Un truco rápido: si en su lugar puedes decir it is o you are, usa la forma con apóstrofo.",
  ],
  items: [
    { q: 'Look over ___, by the window.', options: ['their', 'there', "they're", 'thier'], a: 1, why: "There significa allí, en ese lugar. Their (su, de ellos) y they're (they are, ellos son o están) suenan igual: /ðeə/ en inglés británico y /ðer/ en inglés americano." },
    { q: "___ going to love this film.", options: ["You're", 'Your', 'Youre', "Your'e"], a: 0, why: "You're es la forma corta de you are, tú eres o estás. Your significa tu. Las dos se pronuncian /jɔː/ en inglés británico y normalmente /jʊr/ en inglés americano." },
    { q: 'The dog wagged ___ tail.', options: ["it's", "its'", 'its', 'it is'], a: 2, why: "Its significa su (de una cosa o un animal) y no lleva apóstrofo. It's es la forma corta de it is o it has. Las dos se pronuncian /ɪts/." },
    { q: 'This coffee is ___ hot to drink.', options: ['to', 'two', 'tow', 'too'], a: 3, why: 'Too significa demasiado, o también. Two es el número 2. To suele pronunciarse más corto, /tə/, y solo suena /tuː/ cuando lleva el acento.' },
    { q: "I can't decide ___ to go or stay.", options: ['weather', 'whether', 'wheather', 'whather'], a: 1, why: 'Whether significa si, cuando eliges entre dos posibilidades. Weather es el tiempo que hace. Casi todo el mundo pronuncia las dos /ˈweðə/; algunos americanos empiezan whether con un sonido aspirado /hw/.' },
    { q: "Speak up, I can't ___ you!", options: ['hear', 'here', 'heer', 'hier'], a: 0, why: 'Hear significa oír; here significa aquí. Se pronuncian /hɪə/ en inglés británico y /hɪr/ en inglés americano.' },
    { q: "I don't ___ the answer.", options: ['no', 'now', 'know', 'kno'], a: 2, why: 'Know significa saber. No es lo contrario de yes. Se pronuncian /nəʊ/ en inglés británico y /noʊ/ en inglés americano.' },
    { q: 'I need to ___ some milk on the way home.', options: ['by', 'bye', 'bie', 'buy'], a: 3, why: 'Buy significa comprar. By significa junto a o por, y bye es la forma corta de goodbye, adiós. Las tres se pronuncian /baɪ/.' },
    { q: "Don't forget to ___ your name at the top.", options: ['right', 'write', 'rite', 'wright'], a: 1, why: 'Write significa escribir. Right significa correcto o derecha, un rite es un rito, y wright aparece en palabras como playwright, dramaturgo. Todas se pronuncian /raɪt/.' },
    { q: 'All we want is a bit of ___ and quiet.', options: ['peace', 'piece', 'peice', 'peese'], a: 0, why: 'Peace significa paz y tranquilidad. A piece es un trozo de algo, como a piece of cake. Las dos se pronuncian /piːs/.' },
  ],
  pairs: [
    ['their', 'Su, de ellos'],
    ["they're", 'Ellos son o están'],
    ["you're", 'Tú eres o estás'],
    ["it's", 'Es o ha (it is, it has)'],
    ['too', 'También, o demasiado'],
    ['whether', 'Si, entre dos opciones'],
    ['buy', 'Comprar'],
    ['piece', 'Un trozo'],
  ],
  related: ['english-idioms', 'british-american', 'false-friends'],
};
