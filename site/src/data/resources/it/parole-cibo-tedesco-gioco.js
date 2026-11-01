// Resource: game. German food and drink nouns, their articles and regional words (Semmel, Schrippe, Breze, Erdapfel). Checked against Duden.
// German words stay German; questions, options and explanations are in Italian.
export default {
  key: 'german-food', site: 'it', slug: 'parole-cibo-tedesco-gioco', kind: 'game', course: 'German', level: 'Tutti i livelli',
  draw: 'pretzel', tint: 'sun', published: '2026-11-01',
  title: 'Gioco delle parole del cibo in tedesco: Brezel, Brötchen e Spätzle',
  metaTitle: 'Il cibo in tedesco, il gioco: Brezel, Brötchen, Spätzle – Alimun',
  desc: "Un gioco gratis con le parole tedesche del cibo: indovina cosa sono Brötchen, Schorle ed Eintopf, scegli l'articolo giusto e scopri i nomi regionali.",
  lead: 'A colazione a Monaco chiedi una Semmel, a Berlino la stessa cosa si chiama Schrippe. Dieci parole tedesche del cibo, i loro articoli e qualche sorpresa regionale.',
  instructions: "Che cosa vuol dire, o qual è l'articolo giusto?",
  about: [
    "Le parole del cibo sono tra le prime che ti servono in tedesco, e ognuna ha il suo articolo: der Kuchen, die Kartoffel, das Brötchen. Se impari l'articolo insieme alla parola, dopo dovrai tirare a indovinare molto meno.",
    'Il tedesco cambia anche da regione a regione. Lo stesso panino si chiama Brötchen, Semmel o Schrippe a seconda di dove lo compri, e in Austria una patata può essere un Erdapfel.',
  ],
  items: [
    { q: 'die Brezel', options: ['un brezel salato', 'un panino', 'una ciambella', 'una cialda'], a: 0, why: 'die Brezel = il brezel, il pane intrecciato a forma di nodo. In Baviera e in Austria si dice anche die Breze.' },
    { q: 'das Brötchen', options: ['una fetta di pane tostato', 'un panino', 'una briciola', 'una pagnotta intera'], a: 1, why: 'das Brötchen = il panino. In Baviera e in Austria si dice die Semmel, e a Berlino un panino lungo con un taglio sopra è die Schrippe.' },
    { q: "Spätzle: qual è l'articolo giusto?", options: ['der', 'das', 'die, perché la parola è plurale', 'die, perché la parola è femminile'], a: 2, why: 'die Spätzle sono piccoli gnocchetti di pasta all’uovo della Svevia. Il Duden riporta la parola solo al plurale, per questo prende die.' },
    { q: 'der Kuchen', options: ['una cucina', 'un biscotto', 'un cuoco', 'una torta'], a: 3, why: 'der Kuchen = la torta. Non confonderla con die Küche, la cucina, o con der Koch, il cuoco.' },
    { q: 'die Schorle', options: ["vino o succo di mela allungato con acqua frizzante", 'un punch caldo', 'birra con limonata', 'un frappè'], a: 0, why: 'die Schorle è vino o succo di mela allungato con acqua frizzante, come la Apfelschorle. Il Duden accetta anche das Schorle, che si sente in alcune regioni.' },
    { q: 'der Aufschnitt', options: ['un taglio sul dito', 'affettati misti', 'una fetta di torta', 'un tramezzino'], a: 1, why: 'der Aufschnitt = gli affettati: salumi, prosciutto e arrosto tagliati a fette, spesso serviti su un vassoio.' },
    { q: "Kartoffel: qual è l'articolo giusto?", options: ['der', 'das', 'die', 'cambia da regione a regione'], a: 2, why: 'die Kartoffel = la patata. In Austria e in alcune altre regioni si dice anche der Erdapfel, alla lettera mela di terra.' },
    { q: 'das Abendbrot', options: ['una cena semplice, di solito a base di pane', "l'ultima pagnotta del forno", 'un pane dolce per il dessert', 'uno spuntino notturno al bar'], a: 0, why: 'das Abendbrot, alla lettera pane della sera, è una cena semplice, di solito pane con affettati e formaggio.' },
    { q: 'der Eintopf', options: ['un vaso da fiori', 'uno stufato denso cotto in una sola pentola', 'una porzione singola', 'una teiera'], a: 1, why: 'der Eintopf, alla lettera una pentola, è uno stufato sostanzioso in cui tutto cuoce insieme.' },
    { q: "Senf: qual è l'articolo giusto?", options: ['die', 'das', 'der', 'cambia da regione a regione'], a: 2, why: 'der Senf = la senape. Seinen Senf dazugeben vuol dire dire la propria quando nessuno l’ha chiesto.' },
  ],
  pairs: [
    ['die Brezel', 'il brezel'],
    ['das Brötchen', 'il panino'],
    ['die Spätzle', "gli gnocchetti all'uovo"],
    ['der Kuchen', 'la torta'],
    ['die Schorle', 'succo o vino con acqua frizzante'],
    ['der Aufschnitt', 'gli affettati'],
    ['die Kartoffel', 'la patata'],
    ['der Senf', 'la senape'],
  ],
  related: ['german-compounds', 'de-articles-sheet', 'untranslatable-german'],
};
