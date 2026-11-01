// Resource: game. Make or do: ten English collocations learners mix up. Collocations and usage checked against Cambridge Dictionary and Oxford Learner's Dictionaries.
// The English sentences, verbs and phrases stay English; explanations and translations are in Italian.
export default {
  key: 'make-or-do', site: 'it', slug: 'make-o-do-gioco-inglese', kind: 'game', course: 'English', level: 'Tutti i livelli',
  draw: 'owl', tint: 'mint', published: '2026-11-01',
  title: 'Make o do? Il gioco per non confonderli più in inglese',
  metaTitle: 'Make o do: gioco con 10 collocazioni inglesi da allenare – Alimun',
  desc: 'Un gioco gratis con dieci collocazioni inglesi di tutti i giorni, da make a mistake a do your homework. Scegli make, do o un altro verbo, poi abbina le coppie.',
  lead: 'Make a mistake o do a mistake? Do your homework o make? Scegli il verbo giusto in dieci frasi inglesi di tutti i giorni.',
  instructions: 'Quale verbo completa la frase?',
  about: [
    "In italiano diciamo fare in entrambi i casi, mentre l'inglese ha due verbi, make e do, ed è facile confonderli. In generale do si usa per compiti, lavori e attività, make per creare, produrre o causare qualcosa.",
    'La regola ha delle eccezioni, come make the bed e do someone a favour, quindi impara ogni espressione intera, verbo e nome insieme. Più inglese leggi e ascolti, più il verbo giusto ti suonerà naturale.',
  ],
  items: [
    { q: "Don't worry, everyone ___ mistakes when they're learning.", options: ['makes', 'does', 'has', 'takes'], a: 0, why: 'Si dice make a mistake, mai do. Do è per compiti e lavori, make per creare o causare qualcosa, e un errore è qualcosa che causi.' },
    { q: 'I have to ___ my homework before dinner.', options: ['make', 'give', 'do', 'have'], a: 2, why: 'I compiti sono un lavoro da svolgere, quindi vogliono do, come do the housework e do an exercise. Make homework è sbagliato.' },
    { q: 'We need to ___ a decision by Friday.', options: ['do', 'make', 'give', 'have'], a: 1, why: "Make a decision è l'espressione normale. Nell'inglese britannico si dice anche take a decision, soprattutto in contesti formali, ma mai do a decision." },
    { q: "It's your turn to ___ the dishes tonight.", options: ['make', 'have', 'give', 'do'], a: 3, why: 'Le faccende di casa vogliono do: do the dishes, do the laundry, do the cleaning. Una famosa eccezione è make the bed, rifare il letto.' },
    { q: 'She ___ a real effort to speak only English in class.', options: ['did', 'made', 'had', 'got'], a: 1, why: 'Make an effort, come make progress e make a difference: produci qualcosa, quindi in inglese si usa make.' },
    { q: "It's a pleasure to ___ business with you.", options: ['make', 'take', 'do', 'give'], a: 2, why: "Do business è un'espressione fissa, anche se gli affari creano qualcosa. Imparala intera: do business with someone, fare affari con qualcuno." },
    { q: 'He ___ a lot of friends at university.', options: ['did', 'took', 'gave', 'made'], a: 3, why: 'Make friends vuol dire farsi degli amici, creare nuove amicizie. Al passato diventa made friends.' },
    { q: 'Could you ___ me a favour and close the window?', options: ['do', 'make', 'give', 'take'], a: 0, why: "Do someone a favour è un'eccezione: un favore non è proprio un lavoro, ma vuole sempre do. Nell'inglese americano si scrive favor." },
    { q: 'I have to ___ a phone call to my bank before it closes.', options: ['do', 'take', 'make', 'get'], a: 2, why: 'Make a phone call, come make a complaint e make a suggestion. Esiste anche take a phone call, ma vuol dire rispondere a una telefonata.' },
    { q: "Don't worry about the result, just ___ your best.", options: ['do', 'make', 'have', 'take'], a: 0, why: "Do your best è un'espressione fissa che significa fare del tuo meglio. Make your best è sbagliato." },
  ],
  pairs: [
    ['make a mistake', 'sbagliare'],
    ['do homework', 'fare i compiti'],
    ['make a decision', 'prendere una decisione'],
    ['do the dishes', 'lavare i piatti'],
    ['make friends', 'fare amicizia'],
    ['do business', 'fare affari'],
    ['make a phone call', 'fare una telefonata'],
    ['do your best', 'fare del proprio meglio'],
  ],
  related: ['english-idioms', 'false-friends', 'en-verbs-sheet'],
};
