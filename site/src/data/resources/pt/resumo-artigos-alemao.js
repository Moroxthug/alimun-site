// Resource: printable. The page shows the sheet; the PDF is printed from the same page (scripts/resources-pdf.mjs).
export default {
  key: 'de-articles-sheet', site: 'pt', slug: 'resumo-artigos-alemao', kind: 'printable', course: 'German', level: 'A1–B1',
  draw: 'pretzel', tint: 'lime', published: '2026-10-26',
  title: 'Resumo dos artigos em alemão: der, die, das em uma página',
  metaTitle: 'Resumo dos artigos em alemão (PDF grátis): der, die, das – Alimun',
  desc: 'Um PDF grátis de uma página com os artigos em alemão: as terminações que indicam o gênero, os quatro casos e o artigo indefinido. Imprima e deixe por perto.',
  lead: 'As terminações que indicam o gênero, o artigo nos quatro casos e o artigo indefinido, em uma página para imprimir.',
  about: [
    'O alemão tem três gêneros e quatro casos, e o artigo muda com os dois. Este resumo reúne em uma página os padrões que você usa todos os dias, para você consultar rapidinho enquanto estuda.',
    'Imprima, cole ao lado da sua mesa e diga o artigo em voz alta sempre que aprender um substantivo novo.',
  ],
  sheet: [
    { h: 'Terminações que indicam o gênero', table: { head: ['Artigo', 'Terminações e grupos', 'Exemplos'], rows: [
      ['die', '-ung, -heit, -keit, -schaft, -ion, -tät, -ik', 'die Zeitung, die Freiheit, die Möglichkeit, die Nation, die Musik'],
      ['das', '-chen, -lein, a maioria dos substantivos em -um, verbos usados como substantivos', 'das Mädchen, das Büchlein, das Museum, das Essen'],
      ['der', 'dias, meses, estações do ano, -ling, -ismus', 'der Montag, der Januar, der Sommer, der Frühling, der Tourismus'],
    ] } },
    { h: 'O artigo definido nos quatro casos', table: { head: ['Caso', 'Masculino', 'Feminino', 'Neutro', 'Plural'], rows: [
      ['Nominativo', 'der', 'die', 'das', 'die'], ['Acusativo', 'den', 'die', 'das', 'die'], ['Dativo', 'dem', 'der', 'dem', 'den'], ['Genitivo', 'des', 'der', 'des', 'der'],
    ] } },
    { h: 'O artigo indefinido', table: { head: ['Caso', 'Masculino', 'Feminino', 'Neutro'], rows: [
      ['Nominativo', 'ein', 'eine', 'ein'], ['Acusativo', 'einen', 'eine', 'ein'], ['Dativo', 'einem', 'einer', 'einem'], ['Genitivo', 'eines', 'einer', 'eines'],
    ] } },
    { h: 'Bom lembrar', p: 'Os substantivos compostos têm o gênero da última parte: das Haus e die Tür formam die Haustür. No plural, todos os substantivos usam die. Depois de mit, bei, von, zu, aus, nach e seit vem o dativo; depois de durch, für, gegen, ohne e um vem o acusativo. Aprenda cada substantivo com o seu artigo, como uma coisa só.' },
  ],
  related: ['de-articles-a1', 'en-verbs-sheet', 'cefr-poster'],
};
