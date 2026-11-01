// Resource: game. English homophones: words that sound the same but are spelled differently. Meanings and UK/US pronunciations checked against Cambridge Dictionary.
// The English sentences and words stay English; explanations and meanings are in Italian.
export default {
  key: 'english-homophones', site: 'it', slug: 'omofoni-inglesi-gioco', kind: 'game', course: 'English', level: 'Tutti i livelli',
  draw: 'cat', tint: 'coral', published: '2026-11-01',
  title: "Gioco degli omofoni inglesi: their, there o they're?",
  metaTitle: "Omofoni inglesi: gioco con their, there, they're e altri – Alimun",
  desc: "Un gioco gratis con dieci gruppi di parole inglesi che si pronunciano uguali ma si scrivono in modo diverso, da their e there a piece e peace. Scegli la grafia giusta.",
  lead: "Their, there o they're? Your o you're? Completa dieci frasi con la parola scritta nel modo giusto, poi abbina ogni parola al suo significato.",
  instructions: 'Quale grafia completa la frase?',
  about: [
    "Gli omofoni sono parole che si pronunciano esattamente allo stesso modo ma hanno grafia e significato diversi, come their, there e they're. Quando ascolti è la frase a dirti quale si intende; quando scrivi, devi scegliere tu.",
    "Anche i madrelingua li confondono, soprattutto its e it's o your e you're. Un trucco veloce: se al loro posto puoi dire it is o you are, usa la forma con l'apostrofo.",
  ],
  items: [
    { q: 'Look over ___, by the window.', options: ['their', 'there', "they're", 'thier'], a: 1, why: "There vuol dire lì, in quel posto. Their (il loro) e they're (they are, loro sono) si pronunciano allo stesso modo: /ðeə/ in inglese britannico, /ðer/ in inglese americano." },
    { q: "___ going to love this film.", options: ["You're", 'Your', 'Youre', "Your'e"], a: 0, why: "You're è la forma breve di you are, tu sei. Your vuol dire tuo. Si pronunciano entrambi /jɔː/ in inglese britannico e di solito /jʊr/ in inglese americano." },
    { q: 'The dog wagged ___ tail.', options: ["it's", "its'", 'its', 'it is'], a: 2, why: "Its vuol dire suo (di una cosa o di un animale) e non ha l'apostrofo. It's è la forma breve di it is o it has. Si pronunciano entrambi /ɪts/." },
    { q: 'This coffee is ___ hot to drink.', options: ['to', 'two', 'tow', 'too'], a: 3, why: 'Too vuol dire troppo, oppure anche. Two è il numero 2. To di solito si pronuncia più breve, /tə/, e suona come /tuː/ solo quando è accentato.' },
    { q: "I can't decide ___ to go or stay.", options: ['weather', 'whether', 'wheather', 'whather'], a: 1, why: "Whether vuol dire se, quando si sceglie tra due possibilità. Weather è il tempo che fa. Quasi tutti li pronunciano /ˈweðə/; alcuni americani iniziano whether con un suono aspirato /hw/." },
    { q: "Speak up, I can't ___ you!", options: ['hear', 'here', 'heer', 'hier'], a: 0, why: "Hear vuol dire sentire, con le orecchie; here vuol dire qui. Si pronunciano /hɪə/ in inglese britannico e /hɪr/ in inglese americano." },
    { q: "I don't ___ the answer.", options: ['no', 'now', 'know', 'kno'], a: 2, why: 'Know vuol dire sapere. No è il contrario di yes. Si pronunciano /nəʊ/ in inglese britannico e /noʊ/ in inglese americano.' },
    { q: 'I need to ___ some milk on the way home.', options: ['by', 'bye', 'bie', 'buy'], a: 3, why: 'Buy vuol dire comprare. By vuol dire vicino a o tramite, e bye è la forma breve di goodbye, ciao. Si pronunciano tutti e tre /baɪ/.' },
    { q: "Don't forget to ___ your name at the top.", options: ['right', 'write', 'rite', 'wright'], a: 1, why: 'Write vuol dire scrivere. Right vuol dire giusto oppure destra, un rite è un rito, e wright compare in parole come playwright, drammaturgo. Si pronunciano tutti /raɪt/.' },
    { q: 'All we want is a bit of ___ and quiet.', options: ['peace', 'piece', 'peice', 'peese'], a: 0, why: 'Peace vuol dire pace e tranquillità. A piece è un pezzo di qualcosa, come a piece of cake. Si pronunciano entrambi /piːs/.' },
  ],
  pairs: [
    ['their', 'Il loro, la loro'],
    ["they're", 'Loro sono'],
    ["you're", 'Tu sei'],
    ["it's", 'È, oppure ha (it is, it has)'],
    ['too', 'Anche, oppure troppo'],
    ['whether', 'Se, tra due possibilità'],
    ['buy', 'Comprare'],
    ['piece', 'Un pezzo'],
  ],
  related: ['english-idioms', 'british-american', 'false-friends'],
};
