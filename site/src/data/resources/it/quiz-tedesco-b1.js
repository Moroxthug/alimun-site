// Resource: quiz. German items stay German; explanations are in Italian.
export default {
  key: 'de-quiz-b1', site: 'it', slug: 'quiz-tedesco-b1', kind: 'quiz', course: 'German', level: 'B1',
  draw: 'sun', tint: 'mint', published: '2026-10-26',
  title: 'Quiz veloce di tedesco: dieci domande di livello B1',
  metaTitle: 'Quiz di tedesco B1 gratis: grammatica e vocabolario – Alimun',
  desc: 'Un quiz gratis di tedesco di livello B1 in dieci domande: weil, dass e obwohl, Präteritum, passivo, verbi riflessivi e preposizioni, con ogni risposta spiegata.',
  lead: 'Dieci domande sulla grammatica del livello B1. Scegli una risposta per vedere perché è giusta.',
  instructions: 'Scegli la risposta migliore.',
  about: [
    'Il B1 è il livello in cui te la cavi nella maggior parte delle situazioni in viaggio o al lavoro, racconti una storia al passato, motivi le tue opinioni e colleghi le idee in frasi più lunghe.',
    'Questo quiz verifica le strutture che lo rendono possibile: le subordinate con weil, dass e obwohl, le forme del Präteritum, il passivo con werden, i verbi riflessivi e le preposizioni più comuni. Ogni risposta ha una breve spiegazione.',
  ],
  items: [
    { q: 'Ich lerne Deutsch, ___ ich in Wien arbeiten möchte.', options: ['weil', 'denn', 'deshalb', 'trotzdem'], a: 0, why: 'Il verbo möchte sta alla fine, quindi va bene solo la congiunzione subordinante weil; denn, deshalb e trotzdem vogliono un altro ordine delle parole.' },
    { q: 'Er sagt, ___ er morgen keine Zeit hat.', options: ['ob', 'dass', 'wenn', 'was'], a: 1, why: 'Dass introduce quello che qualcuno dice o pensa: er sagt, dass ...' },
    { q: 'Er hat die Prüfung bestanden, ___ er kaum gelernt hat.', options: ['weil', 'damit', 'obwohl', 'dass'], a: 2, why: "Obwohl (anche se) introduce un contrasto: ha superato l'esame pur avendo studiato pochissimo." },
    { q: 'Als Kind ___ ich jeden Sommer bei meiner Oma.', options: ['war', 'bin', 'wäre', 'sei'], a: 0, why: 'Per il passato di sein il tedesco usa di solito il Präteritum: ich war.' },
    { q: 'Gestern ___ wir einen langen Brief.', options: ['schreiben', 'schrieben', 'schreibten', 'geschrieben'], a: 1, why: 'Schreiben è un verbo forte, e il suo Präteritum è schrieb, con wir schrieben.' },
    { q: 'Die Briefe ___ jeden Morgen vom Postboten gebracht.', options: ['werden', 'sind', 'haben', 'wird'], a: 0, why: 'Il passivo usa werden più il participio passato, e il soggetto plurale die Briefe vuole werden.' },
    { q: 'Ich freue ___ auf das Wochenende.', options: ['mir', 'sich', 'mich', 'dich'], a: 2, why: "Sich freuen è riflessivo, e con ich il pronome all'accusativo è mich." },
    { q: 'Ich putze ___ die Zähne.', options: ['mich', 'mir', 'sich', 'mein'], a: 1, why: "Quando la frase ha già un complemento oggetto all'accusativo (die Zähne), il pronome riflessivo va al dativo: mir." },
    { q: 'Wir fahren im Sommer ___ Italien.', options: ['zu', 'in', 'bei', 'nach'], a: 3, why: 'Per andare in paesi e città senza articolo il tedesco usa nach: nach Italien, nach Berlin.' },
    { q: 'Ich interessiere mich sehr ___ Musik.', options: ['an', 'auf', 'über', 'für'], a: 3, why: 'Il verbo è sich interessieren für: ich interessiere mich für Musik.' },
  ],
  related: ['de-quiz-a2', 'de-quiz-b2', 'de-ex-b1'],
};
