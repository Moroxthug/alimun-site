// Resource: printable. The page shows the sheet; the PDF is printed from the same page (scripts/resources-pdf.mjs).
export default {
  key: 'de-articles-sheet', site: 'es', slug: 'chuleta-articulos-aleman', kind: 'printable', course: 'German', level: 'A1–B1',
  draw: 'pretzel', tint: 'lime', published: '2026-10-26',
  title: 'Chuleta de artículos en alemán: der, die, das en una página',
  metaTitle: 'Chuleta de artículos en alemán (PDF gratis): der, die, das – Alimun',
  desc: 'Un PDF gratis de una página con los artículos en alemán: las terminaciones que indican el género, los cuatro casos y el artículo indeterminado.',
  lead: 'Las terminaciones que indican el género, el artículo en los cuatro casos y el artículo indeterminado, en una sola página para imprimir.',
  about: [
    'El alemán tiene tres géneros y cuatro casos, y el artículo cambia con los dos. Esta chuleta reúne en una página los patrones que usas a diario, para que los consultes rápido mientras estudias.',
    'Imprímela, pégala junto a tu mesa y di el artículo en voz alta cada vez que aprendas un sustantivo nuevo.',
  ],
  sheet: [
    { h: 'Terminaciones que indican el género', table: { head: ['Artículo', 'Terminaciones y grupos', 'Ejemplos'], rows: [
      ['die', '-ung, -heit, -keit, -schaft, -ion, -tät, -ik', 'die Zeitung, die Freiheit, die Möglichkeit, die Nation, die Musik'],
      ['das', '-chen, -lein, la mayoría de los sustantivos en -um, verbos usados como sustantivos', 'das Mädchen, das Büchlein, das Museum, das Essen'],
      ['der', 'días, meses, estaciones, -ling, -ismus', 'der Montag, der Januar, der Sommer, der Frühling, der Tourismus'],
    ] } },
    { h: 'El artículo determinado en los cuatro casos', table: { head: ['Caso', 'Masculino', 'Femenino', 'Neutro', 'Plural'], rows: [
      ['Nominativo', 'der', 'die', 'das', 'die'], ['Acusativo', 'den', 'die', 'das', 'die'], ['Dativo', 'dem', 'der', 'dem', 'den'], ['Genitivo', 'des', 'der', 'des', 'der'],
    ] } },
    { h: 'El artículo indeterminado', table: { head: ['Caso', 'Masculino', 'Femenino', 'Neutro'], rows: [
      ['Nominativo', 'ein', 'eine', 'ein'], ['Acusativo', 'einen', 'eine', 'ein'], ['Dativo', 'einem', 'einer', 'einem'], ['Genitivo', 'eines', 'einer', 'eines'],
    ] } },
    { h: 'Para recordar', p: 'Los sustantivos compuestos toman el género de su última parte: das Haus y die Tür forman die Haustür. En plural todos los sustantivos llevan die. Después de mit, bei, von, zu, aus, nach y seit va el dativo; después de durch, für, gegen, ohne y um va el acusativo. Aprende cada sustantivo con su artículo, como una sola unidad.' },
  ],
  related: ['de-articles-a1', 'en-verbs-sheet', 'cefr-poster'],
};
