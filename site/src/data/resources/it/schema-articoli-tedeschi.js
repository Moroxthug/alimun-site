// Resource: printable. The page shows the sheet; the PDF is printed from the same page (scripts/resources-pdf.mjs).
export default {
  key: 'de-articles-sheet', site: 'it', slug: 'schema-articoli-tedeschi', kind: 'printable', course: 'German', level: 'A1–B1',
  draw: 'pretzel', tint: 'lime', published: '2026-10-26',
  title: 'Schema degli articoli tedeschi: der, die, das in una pagina',
  metaTitle: 'Schema articoli tedeschi (PDF gratis): der, die, das – Alimun',
  desc: "Un PDF gratis di una pagina con gli articoli tedeschi: le desinenze che indicano il genere, i quattro casi e l'articolo indeterminativo. Stampalo e tienilo vicino.",
  lead: "Le desinenze che indicano il genere, l'articolo in tutti e quattro i casi e l'articolo indeterminativo, in una pagina da stampare.",
  about: [
    "Il tedesco ha tre generi e quattro casi, e l'articolo cambia con entrambi. Questo schema mette in una sola pagina le regole che usi ogni giorno, così puoi controllarle al volo mentre studi.",
    "Stampalo, attaccalo vicino alla scrivania e di' l'articolo ad alta voce ogni volta che impari un sostantivo nuovo.",
  ],
  sheet: [
    { h: 'Le desinenze che indicano il genere', table: { head: ['Articolo', 'Desinenze e gruppi', 'Esempi'], rows: [
      ['die', '-ung, -heit, -keit, -schaft, -ion, -tät, -ik', 'die Zeitung, die Freiheit, die Möglichkeit, die Nation, die Musik'],
      ['das', '-chen, -lein, quasi tutti i sostantivi in -um, verbi usati come sostantivi', 'das Mädchen, das Büchlein, das Museum, das Essen'],
      ['der', 'giorni, mesi, stagioni, -ling, -ismus', 'der Montag, der Januar, der Sommer, der Frühling, der Tourismus'],
    ] } },
    { h: "L'articolo determinativo nei quattro casi", table: { head: ['Caso', 'Maschile', 'Femminile', 'Neutro', 'Plurale'], rows: [
      ['Nominativo', 'der', 'die', 'das', 'die'], ['Accusativo', 'den', 'die', 'das', 'die'], ['Dativo', 'dem', 'der', 'dem', 'den'], ['Genitivo', 'des', 'der', 'des', 'der'],
    ] } },
    { h: "L'articolo indeterminativo", table: { head: ['Caso', 'Maschile', 'Femminile', 'Neutro'], rows: [
      ['Nominativo', 'ein', 'eine', 'ein'], ['Accusativo', 'einen', 'eine', 'ein'], ['Dativo', 'einem', 'einer', 'einem'], ['Genitivo', 'eines', 'einer', 'eines'],
    ] } },
    { h: 'Da ricordare', p: "I sostantivi composti prendono il genere dell'ultima parte: das Haus e die Tür formano die Haustür. Al plurale tutti i sostantivi usano die. Dopo mit, bei, von, zu, aus, nach e seit si usa il dativo; dopo durch, für, gegen, ohne e um si usa l'accusativo. Impara ogni sostantivo insieme al suo articolo, come un'unica cosa." },
  ],
  related: ['de-articles-a1', 'en-verbs-sheet', 'cefr-poster'],
};
