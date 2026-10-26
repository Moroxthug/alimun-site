// Resource: quiz. German items stay German; explanations are in Italian.
export default {
  key: 'de-quiz-a1', site: 'it', slug: 'quiz-tedesco-a1', kind: 'quiz', course: 'German', level: 'A1',
  draw: 'pretzel', tint: 'sun', published: '2026-10-26',
  title: 'Quiz veloce di tedesco: dieci domande di livello A1',
  metaTitle: 'Quiz di tedesco A1 gratis: grammatica e vocabolario – Alimun',
  desc: 'Un quiz gratis di tedesco di livello A1 in dieci domande: sein e haben, articoli, plurali, domande, numeri e parole di tutti i giorni, con ogni risposta spiegata.',
  lead: 'Dieci domande sulla grammatica e sulle parole dei primi mesi di tedesco. Scegli una risposta per vedere perché è giusta.',
  instructions: 'Scegli la risposta migliore.',
  about: [
    "L'A1 è il livello in cui sai presentarti, fare domande semplici e rispondere su dove abiti e cosa fai, e capire parole di tutti i giorni come i giorni della settimana, i numeri e il cibo.",
    'Questo quiz verifica le basi su cui si costruisce tutto il resto: le forme di sein e haben, der, die e das, le desinenze del plurale, le parole interrogative e i numeri. Ogni risposta ha una breve spiegazione, così impari qualcosa anche quando sbagli.',
  ],
  items: [
    { q: 'Ich ___ Anna.', options: ['bin', 'bist', 'ist', 'sind'], a: 0, why: 'Con ich il verbo sein (essere) diventa bin: ich bin, du bist, er ist.' },
    { q: '___ Tisch ist neu.', options: ['Die', 'Der', 'Das', 'Den'], a: 1, why: 'Tisch è maschile, quindi come soggetto vuole der: der Tisch.' },
    { q: 'Wir ___ zwei Kinder.', options: ['hat', 'habt', 'haben', 'hast'], a: 2, why: 'Con wir, haben (avere) mantiene la forma intera: wir haben.' },
    { q: 'Ein Buch, zwei ___.', options: ['Buchs', 'Bücher', 'Buche', 'Buchen'], a: 1, why: "Buch forma il plurale con l'Umlaut e -er: das Buch, die Bücher." },
    { q: '___ wohnst du? – In Berlin.', options: ['Wer', 'Was', 'Wann', 'Wo'], a: 3, why: 'Wo chiede dove si trova qualcuno o qualcosa, e la risposta è un luogo.' },
    { q: 'Wie sagt man 21 auf Deutsch?', options: ['einundzwanzig', 'zwanzigeins', 'zweiundzehn', 'einszwanzig'], a: 0, why: 'In tedesco si dicono le unità prima delle decine: ein-und-zwanzig, letteralmente uno e venti.' },
    { q: 'Ich habe ___ Bruder.', options: ['ein', 'eine', 'einer', 'einen'], a: 3, why: "Haben vuole l'accusativo, e ein al maschile diventa einen: ich habe einen Bruder." },
    { q: 'Am Morgen trinke ich eine Tasse ___.', options: ['Brot', 'Käse', 'Kaffee', 'Apfel'], a: 2, why: 'Si beve una tazza di caffè: eine Tasse Kaffee. Le altre parole sono cose da mangiare.' },
    { q: 'Du ___ aus Spanien, oder?', options: ['kommt', 'komme', 'kommen', 'kommst'], a: 3, why: 'Con du i verbi regolari finiscono in -st: du kommst.' },
    { q: 'Montag, Dienstag, ___, Donnerstag', options: ['Freitag', 'Sonntag', 'Mittwoch', 'Samstag'], a: 2, why: 'Mittwoch (mercoledì) viene tra Dienstag (martedì) e Donnerstag (giovedì).' },
  ],
  related: ['de-articles-a1', 'de-quiz-a2', 'de-ex-a2'],
};
