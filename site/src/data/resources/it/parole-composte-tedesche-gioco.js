// Resource: game. German compound nouns and their literal meanings. Checked against Duden.
// German words stay German; literal glosses, options and explanations are in Italian.
export default {
  key: 'german-compounds', site: 'it', slug: 'parole-composte-tedesche-gioco', kind: 'game', course: 'German', level: 'Tutti i livelli',
  draw: 'cat', tint: 'lime', published: '2026-10-27',
  title: "Gioco delle parole composte tedesche: cos'è una scarpa per la mano?",
  metaTitle: 'Parole composte tedesche: gioco con Handschuh, Faultier – Alimun',
  desc: 'Un gioco gratis con buffe parole composte tedesche: una scarpa per la mano è un guanto e un animale pigro è un bradipo. Indovina dieci parole dal senso letterale.',
  lead: 'Il tedesco crea parole nuove incollando insieme quelle vecchie. Una scarpa per la mano è un guanto e un animale pigro è un bradipo. Indovini le altre?',
  instructions: "Che cos'è?",
  about: [
    "Il tedesco unisce i sostantivi per crearne di nuovi, e l'ultima parte dà sempre il genere alla parola: der Handschuh perché der Schuh.",
    'Quando conosci le parti, molte parole lunghe si spiegano da sole. Per questo le parole composte sono uno dei modi più divertenti per arricchire il tuo vocabolario tedesco.',
  ],
  items: [
    { q: 'Handschuh (mano + scarpa)', options: ['un guanto', 'una pantofola', 'un anello', 'un calzino'], a: 0, why: 'der Handschuh = il guanto: una scarpa per la mano.' },
    { q: 'Faultier (pigro + animale)', options: ['un gatto', 'un bradipo', 'una tartaruga', 'un koala'], a: 1, why: 'das Faultier = il bradipo.' },
    { q: 'Kühlschrank (fresco + armadio)', options: ['un sacchetto per il freezer', 'una cantina', 'un frigorifero', 'un condizionatore'], a: 2, why: 'der Kühlschrank = il frigorifero.' },
    { q: 'Schildkröte (scudo + rospo)', options: ['una rana', 'un granchio', 'uno scarabeo', 'una tartaruga'], a: 3, why: 'die Schildkröte = la tartaruga: un rospo con lo scudo.' },
    { q: 'Glühbirne (incandescente + pera)', options: ['una lampadina', 'una candela', 'una pera matura', 'una lanterna'], a: 0, why: 'die Glühbirne = la lampadina, che ha la forma di una pera luminosa.' },
    { q: 'Stinktier (puzza + animale)', options: ['un maiale', 'una moffetta', 'una capra', 'un ratto'], a: 1, why: "das Stinktier = la moffetta, l'animale che spruzza un liquido puzzolente." },
    { q: 'Staubsauger (polvere + succhiatore)', options: ['una scopa', 'un piumino per la polvere', 'un aspirapolvere', 'un ventilatore'], a: 2, why: "der Staubsauger = l'aspirapolvere." },
    { q: 'Flugzeug (volo + attrezzo)', options: ['un uccello', 'un aquilone', 'un aereo', 'un drone'], a: 2, why: "das Flugzeug = l'aereo: un attrezzo per volare." },
    { q: 'Nacktschnecke (nuda + lumaca)', options: ['una limaccia', 'un verme', 'una lumaca appena nata', "un'anguilla"], a: 0, why: 'die Nacktschnecke = la limaccia: una lumaca senza guscio.' },
    { q: 'Drahtesel (filo di ferro + asino)', options: ['un robot', 'un recinto', 'una bicicletta', 'un trattore'], a: 2, why: 'der Drahtesel è un modo scherzoso per dire bicicletta: un asino di fil di ferro.' },
  ],
  pairs: [
    ['der Handschuh: mano + scarpa', 'il guanto'],
    ['das Faultier: pigro + animale', 'il bradipo'],
    ['der Kühlschrank: fresco + armadio', 'il frigorifero'],
    ['die Schildkröte: scudo + rospo', 'la tartaruga'],
    ['die Glühbirne: incandescente + pera', 'la lampadina'],
    ['das Stinktier: puzza + animale', 'la moffetta'],
    ['der Staubsauger: polvere + succhiatore', "l'aspirapolvere"],
    ['die Nacktschnecke: nuda + lumaca', 'la limaccia'],
  ],
  related: ['german-idioms', 'de-articles-a1', 'de-articles-sheet'],
};
