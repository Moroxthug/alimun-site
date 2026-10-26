// Resource: printable. The page shows the sheet; the PDF is printed from the same page (scripts/resources-pdf.mjs).
export default {
  key: 'de-articles-sheet', site: 'en', slug: 'german-articles-cheat-sheet', kind: 'printable', course: 'German', level: 'A1–B1',
  draw: 'pretzel', tint: 'lime', published: '2026-10-26',
  title: 'German articles cheat sheet: der, die, das on one page',
  metaTitle: 'German articles cheat sheet (free PDF): der, die, das – Alimun',
  desc: 'A free one-page PDF with the German articles: the endings that tell you the gender, the four cases and the indefinite article. Print it and keep it close.',
  lead: 'The endings that tell you the gender, the article in all four cases and the indefinite article, on one printable page.',
  about: [
    'German has three genders and four cases, and the article changes with both. This sheet puts the patterns you use every day on one page, so you can check them quickly while you study.',
    'Print it, stick it next to your desk, and say the article out loud every time you learn a new noun.',
  ],
  sheet: [
    { h: 'Endings that tell you the gender', table: { head: ['Article', 'Endings and groups', 'Examples'], rows: [
      ['die', '-ung, -heit, -keit, -schaft, -ion, -tät, -ik', 'die Zeitung, die Freiheit, die Möglichkeit, die Nation, die Musik'],
      ['das', '-chen, -lein, most nouns in -um, verbs used as nouns', 'das Mädchen, das Büchlein, das Museum, das Essen'],
      ['der', 'days, months, seasons, -ling, -ismus', 'der Montag, der Januar, der Sommer, der Frühling, der Tourismus'],
    ] } },
    { h: 'The definite article in four cases', table: { head: ['Case', 'Masculine', 'Feminine', 'Neuter', 'Plural'], rows: [
      ['Nominative', 'der', 'die', 'das', 'die'], ['Accusative', 'den', 'die', 'das', 'die'], ['Dative', 'dem', 'der', 'dem', 'den'], ['Genitive', 'des', 'der', 'des', 'der'],
    ] } },
    { h: 'The indefinite article', table: { head: ['Case', 'Masculine', 'Feminine', 'Neuter'], rows: [
      ['Nominative', 'ein', 'eine', 'ein'], ['Accusative', 'einen', 'eine', 'ein'], ['Dative', 'einem', 'einer', 'einem'], ['Genitive', 'eines', 'einer', 'eines'],
    ] } },
    { h: 'Good to remember', p: 'Compound nouns take the gender of their last part: das Haus and die Tür make die Haustür. In the plural every noun uses die. After mit, bei, von, zu, aus, nach and seit comes the dative; after durch, für, gegen, ohne and um comes the accusative. Learn every noun with its article, as one unit.' },
  ],
  related: ['de-articles-a1', 'en-verbs-sheet', 'cefr-poster'],
};
