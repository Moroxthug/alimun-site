// Resource: game. English idioms: what each one really means. Meanings checked against Cambridge and Merriam-Webster.
// The English sentences and idioms stay English; options and explanations are in Italian.
export default {
  key: 'english-idioms', site: 'it', slug: 'modi-di-dire-inglesi-gioco', kind: 'game', course: 'English', level: 'Tutti i livelli',
  draw: 'teacup', tint: 'mint', published: '2026-10-27',
  title: 'Gioco dei modi di dire inglesi: piove davvero cani e gatti?',
  metaTitle: 'Modi di dire inglesi: gioco con 10 espressioni spiegate – Alimun',
  desc: 'Un gioco gratis con dieci modi di dire inglesi molto comuni, da a piece of cake a spill the beans. Indovina cosa vogliono dire davvero, poi gira le carte.',
  lead: 'A piece of cake, under the weather, spill the beans. Indovina cosa vogliono dire davvero dieci modi di dire inglesi di tutti i giorni.',
  instructions: 'Cosa significa davvero il modo di dire?',
  about: [
    "I modi di dire sono espressioni il cui significato è diverso da quello delle singole parole. I madrelingua li usano di continuo, nelle conversazioni, nei film e nelle canzoni.",
    "Impara ogni modo di dire come una frase intera, con un esempio di quando si usa. Quasi tutti sono informali, quindi tienili per gli amici più che per i testi formali.",
  ],
  items: [
    { q: "It's a piece of cake.", options: ['È facilissimo.', 'È una piccola ricompensa.', 'È buonissimo.', 'Non basta.'], a: 0, why: 'A piece of cake è una cosa facilissima da fare, come il nostro "un gioco da ragazzi": The test was a piece of cake.' },
    { q: 'I feel a bit under the weather.', options: ['Ho freddo.', 'Non mi sento molto bene.', 'Sono triste per la pioggia.', 'Sono stanchissimo del lavoro.'], a: 1, why: "Under the weather vuol dire un po' malato, non in forma." },
    { q: 'Come on, spill the beans!', options: ['Pulisci questo disastro!', 'Sbrigati!', 'Dimmi il segreto!', 'Comincia a cucinare!'], a: 2, why: 'To spill the beans vuol dire rivelare un segreto, come il nostro "vuotare il sacco".' },
    { q: "It's raining cats and dogs.", options: ['Piove fortissimo.', "È un po' nuvoloso.", 'Le strade sono rumorose.', 'Il tempo cambia di continuo.'], a: 0, why: 'Raining cats and dogs vuol dire piovere a dirotto, o come diciamo noi "piovere a catinelle".' },
    { q: 'That new phone cost an arm and a leg.', options: ['Era un affare.', 'Era carissimo.', 'Era difficile da trovare.', 'Era un regalo.'], a: 1, why: 'To cost an arm and a leg vuol dire costare tantissimo, come il nostro "costare un occhio della testa".' },
    { q: "I'm going to hit the sack.", options: ['Vado in palestra.', 'Vado a fare shopping.', 'Vado a letto.', 'Mollo tutto.'], a: 2, why: 'To hit the sack è un modo informale per dire che vai a dormire.' },
    { q: 'We see each other once in a blue moon.', options: ['ogni sera', 'molto raramente', "solo d'estate", 'una volta al mese'], a: 1, why: 'Once in a blue moon vuol dire molto raramente, come il nostro "ogni morte di papa".' },
    { q: "Relax, I'm just pulling your leg.", options: ['Sto scherzando.', 'Ti sto aiutando ad alzarti.', 'Sono arrabbiato con te.', 'Ti sto chiedendo un favore.'], a: 0, why: "To pull someone's leg vuol dire prendere in giro qualcuno raccontandogli per scherzo una cosa non vera." },
    { q: 'Who let the cat out of the bag?', options: ['Chi ha lasciato la porta aperta?', 'Chi ha svelato il segreto?', 'Chi ha cominciato la lite?', 'Chi ha dimenticato la spesa?'], a: 1, why: 'To let the cat out of the bag vuol dire rivelare un segreto per sbaglio.' },
    { q: 'The ball is in your court now.', options: ['Hai perso.', 'Dovresti fare più sport.', 'Tocca a te decidere o agire.', 'Devi chiedere scusa.'], a: 2, why: 'The ball is in your court vuol dire che ora tocca a te agire o prendere una decisione: la palla passa a te.' },
  ],
  pairs: [
    ['A piece of cake', 'Facilissimo'],
    ['Under the weather', "Un po' malato"],
    ['Spill the beans', 'Svelare un segreto'],
    ['Raining cats and dogs', 'Piovere a dirotto'],
    ['Cost an arm and a leg', 'Costare carissimo'],
    ['Hit the sack', 'Andare a letto'],
    ['Once in a blue moon', 'Molto raramente'],
    ["Pull someone's leg", 'Prendere in giro qualcuno'],
  ],
  related: ['british-american', 'false-friends', 'en-quiz-b2'],
};
