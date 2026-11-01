// Resource: game. German false friends and their real meanings. German meanings checked against Duden; Italian meanings against Treccani.
// German words stay German; options, explanations and pair meanings are in Italian.
export default {
  key: 'german-false-friends', site: 'it', slug: 'falsi-amici-tedesco-gioco', kind: 'game', course: 'German', level: 'Tutti i livelli',
  draw: 'ghost', tint: 'lime', published: '2026-11-01',
  title: 'Gioco dei falsi amici in tedesco: un Gift è un regalo?',
  metaTitle: 'Falsi amici in tedesco, il gioco: Gift, Handy, Chef e altri – Alimun',
  desc: "Un gioco gratis con i falsi amici del tedesco: das Gift è il veleno, non un regalo, e der Chef è il capo. Indovina cosa significano davvero dieci parole.",
  lead: "Alcune parole tedesche sembrano inglesi, o italiane, e vogliono dire tutt'altro. Das Gift è il veleno e das Handy è il cellulare. Riconosci le altre?",
  instructions: 'Cosa significa davvero?',
  about: [
    "I falsi amici sono parole che somigliano a una parola che conosci già ma hanno un altro significato. Il tedesco ne ha tanti con l'inglese, e qualcuno anche con l'italiano.",
    "Impararli subito ti evita errori buffi, come dire al tuo ospite che gli hai portato del veleno o chiedere un cuoco quando cerchi il capo.",
  ],
  items: [
    { q: 'das Gift', options: ['un regalo', 'il veleno', 'un talento', 'una mancia'], a: 1, why: "das Gift = il veleno. Il regalo si dice das Geschenk." },
    { q: 'das Handy', options: ['il cellulare', 'una borsetta', 'un guanto', 'un attrezzo'], a: 0, why: "das Handy = il cellulare. Somiglia all'inglese handy, che vuol dire pratico." },
    { q: 'der Chef', options: ['un cuoco', 'un cameriere', 'il capo', 'un cliente'], a: 2, why: "der Chef = il capo, il responsabile. Attenzione anche per l'italiano: da noi lo chef è il cuoco, che in tedesco si dice der Koch." },
    { q: 'bekommen', options: ['diventare', 'tornare', 'dare il benvenuto', 'ricevere, ottenere'], a: 3, why: "bekommen = ricevere, ottenere. Somiglia all'inglese become, ma diventare si dice werden." },
    { q: 'der Rat', options: ['un ratto', 'un consiglio', 'una rata', 'un topo'], a: 1, why: "der Rat = il consiglio, sia quello che dai a qualcuno sia un organo come il consiglio comunale. Il ratto si dice die Ratte." },
    { q: 'die Kaution', options: ['la prudenza', 'un cartello di pericolo', 'una cauzione', 'un cuscino'], a: 2, why: "die Kaution = la cauzione, per esempio per un appartamento. Qui l'italiano ti aiuta; inganna chi parla inglese, perché caution vuol dire prudenza." },
    { q: 'aktuell', options: ['attuale, aggiornato', 'reale, effettivo', 'attivo', 'esatto'], a: 0, why: "aktuell = attuale, aggiornato, come in italiano. Inganna chi parla inglese, perché actual vuol dire reale." },
    { q: 'eventuell', options: ['alla fine', 'ogni volta', 'subito', 'forse, eventualmente'], a: 3, why: "eventuell = forse, se capita, proprio come l'italiano eventualmente. Inganna chi parla inglese: eventually vuol dire alla fine, che in tedesco è schließlich." },
    { q: 'sensibel', options: ['ragionevole, assennato', 'sensibile', 'sensuale', 'sentimentale'], a: 1, why: "sensibel = sensibile, come in italiano. Ragionevole si dice vernünftig." },
    { q: 'das Gymnasium', options: ['una palestra', 'un palazzetto dello sport', 'un liceo', 'una piscina'], a: 2, why: "das Gymnasium = il liceo, la scuola superiore che porta all'Abitur. La palestra si dice das Fitnessstudio, quella della scuola die Turnhalle." },
  ],
  pairs: [
    ['das Gift', 'il veleno'],
    ['das Handy', 'il cellulare'],
    ['der Chef', 'il capo'],
    ['bekommen', 'ricevere, ottenere'],
    ['der Rat', 'il consiglio'],
    ['eventuell', 'forse'],
    ['sensibel', 'sensibile'],
    ['das Gymnasium', 'il liceo'],
  ],
  related: ['false-friends', 'german-compounds', 'untranslatable-german'],
};
