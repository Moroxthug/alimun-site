// Resource: game. Ten common English phrasal verbs (B1-B2): what each one means in context. Meanings checked against the Cambridge Dictionary and Oxford Learner's Dictionaries.
// The English sentences and phrasal verbs stay English; options and explanations are in Italian.
export default {
  key: 'phrasal-verbs-game', site: 'it', slug: 'gioco-phrasal-verbs-inglesi', kind: 'game', course: 'English', level: 'Tutti i livelli',
  draw: 'parrot', tint: 'sun', published: '2026-11-01',
  title: 'Gioco dei phrasal verbs inglesi: sai cosa vuol dire davvero give up?',
  metaTitle: 'Phrasal verbs inglesi: gioco con 10 verbi più usati – Alimun',
  desc: 'Un gioco gratis con dieci phrasal verbs inglesi molto comuni, da give up a take after. Leggili in una frase vera, indovina cosa significano e abbina le carte.',
  lead: 'Give up, run out of, figure out. Leggi dieci phrasal verbs inglesi di tutti i giorni in frasi vere e indovina cosa significa ciascuno.',
  instructions: 'Cosa significa il phrasal verb in questa frase?',
  about: [
    'Un phrasal verb è un verbo seguito da una piccola parola come up, out, off o over, e insieme spesso significano qualcosa di molto diverso dal verbo da solo. I madrelingua li usano di continuo, soprattutto quando parlano.',
    "Impara ogni phrasal verb dentro una frase d'esempio intera, non da solo. Molti hanno più di un significato, quindi fai caso a cosa ti dice il resto della frase.",
  ],
  items: [
    { q: 'I gave up smoking last year.', options: ['Ho cominciato a fumare.', 'Ho smesso di fumare.', 'Ho fumato di meno.', 'Mi è piaciuto fumare.'], a: 1, why: 'To give something up vuol dire smettere di fare qualcosa che si faceva regolarmente: She gave up chocolate for a month.' },
    { q: "I'm really looking forward to the holidays.", options: ['Non vedo l\'ora che arrivino.', 'Sono preoccupato per le vacanze.', 'Le sto organizzando con cura.', 'Me le sto ricordando.'], a: 0, why: 'To look forward to something vuol dire essere felice e impaziente per qualcosa che deve ancora succedere: non vedere l\'ora.' },
    { q: "We've run out of milk.", options: ['Abbiamo troppo latte.', 'Abbiamo rovesciato il latte.', 'Abbiamo finito il latte.', 'Abbiamo comprato latte fresco.'], a: 2, why: 'To run out of something vuol dire averlo usato tutto, finché non ne rimane più.' },
    { q: 'It took her two weeks to get over the flu.', options: ["per prendersi l'influenza", "per evitare l'influenza", "per raccontare a tutti dell'influenza", "per guarire dall'influenza"], a: 3, why: "To get over una malattia o una brutta esperienza vuol dire riprendersi, superarla." },
    { q: "Don't put off your homework until tomorrow.", options: ['Non fare i compiti di fretta.', 'Non rimandare i compiti.', 'Non perdere i compiti.', 'Non copiare i compiti.'], a: 1, why: 'To put something off vuol dire rimandare qualcosa a più tardi: We put off the meeting until Friday.' },
    { q: 'She turned down the job offer.', options: ["L'ha rifiutata.", "L'ha accettata.", 'Ha chiesto più soldi.', "Se n'è dimenticata."], a: 0, why: 'To turn down an offer vuol dire rifiutare una proposta o una richiesta.' },
    { q: "I can't figure out how this app works.", options: ['Non riesco a scaricarla.', 'Non posso permettermela.', 'Non riesco a capirla.', 'Non riesco a smettere di usarla.'], a: 2, why: 'To figure something out vuol dire riuscire finalmente a capire qualcosa o a trovare la soluzione, di solito dopo averci pensato.' },
    { q: 'I came across some old photos while I was tidying up.', options: ['Le ho buttate via.', 'Le ho cercate per ore.', 'Le ho scattate io.', 'Le ho trovate per caso.'], a: 3, why: 'To come across something vuol dire trovare qualcosa o qualcuno per caso, senza cercarlo.' },
    { q: 'Our car broke down on the motorway.', options: ['Si è guastata.', "Si è scontrata con un'altra auto.", 'Andava velocissima.', 'Era troppo piena.'], a: 0, why: 'Quando una macchina o un apparecchio breaks down, smette di funzionare: si guasta.' },
    { q: 'Tom really takes after his father.', options: ['Segue suo padre ovunque.', 'Assomiglia a suo padre.', 'Si prende cura di suo padre.', 'Lavora per suo padre.'], a: 1, why: 'To take after un familiare più grande vuol dire assomigliargli, nell\'aspetto o nel carattere. Non confonderlo con look after, che vuol dire prendersi cura.' },
  ],
  pairs: [
    ['Give up', 'Smettere di fare qualcosa'],
    ['Look forward to', "Non vedere l'ora"],
    ['Run out of', 'Finire, restare senza'],
    ['Get over', 'Riprendersi da'],
    ['Put off', 'Rimandare'],
    ['Turn down', 'Rifiutare'],
    ['Figure out', 'Riuscire a capire'],
    ['Come across', 'Trovare per caso'],
  ],
  related: ['english-idioms', 'en-verbs-sheet', 'en-quiz-b1'],
};
