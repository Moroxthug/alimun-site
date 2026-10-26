// Resource: printable. The page shows the sheet; the PDF is printed from the same page (scripts/resources-pdf.mjs).
export default {
  key: 'de-articles-sheet', site: 'fr', slug: 'fiche-articles-allemands', kind: 'printable', course: 'German', level: 'A1–B1',
  draw: 'pretzel', tint: 'lime', published: '2026-10-26',
  title: 'Fiche mémo des articles allemands : der, die, das sur une page',
  metaTitle: 'Fiche articles allemands (PDF gratuit) : der, die, das – Alimun',
  desc: "Une fiche PDF gratuite d'une page sur les articles allemands : les terminaisons qui donnent le genre, les quatre cas et l'article indéfini. À imprimer.",
  lead: "Les terminaisons qui donnent le genre, l'article aux quatre cas et l'article indéfini, sur une seule page à imprimer.",
  about: [
    "L'allemand a trois genres et quatre cas, et l'article change avec les deux. Cette fiche réunit sur une page les règles dont tu te sers tous les jours, pour les vérifier en un coup d'œil pendant que tu étudies.",
    "Imprime-la, colle-la à côté de ton bureau, et dis l'article à voix haute chaque fois que tu apprends un nouveau nom.",
  ],
  sheet: [
    { h: 'Les terminaisons qui donnent le genre', table: { head: ['Article', 'Terminaisons et groupes', 'Exemples'], rows: [
      ['die', '-ung, -heit, -keit, -schaft, -ion, -tät, -ik', 'die Zeitung, die Freiheit, die Möglichkeit, die Nation, die Musik'],
      ['das', '-chen, -lein, la plupart des noms en -um, les verbes employés comme noms', 'das Mädchen, das Büchlein, das Museum, das Essen'],
      ['der', 'jours, mois, saisons, -ling, -ismus', 'der Montag, der Januar, der Sommer, der Frühling, der Tourismus'],
    ] } },
    { h: "L'article défini aux quatre cas", table: { head: ['Cas', 'Masculin', 'Féminin', 'Neutre', 'Pluriel'], rows: [
      ['Nominatif', 'der', 'die', 'das', 'die'], ['Accusatif', 'den', 'die', 'das', 'die'], ['Datif', 'dem', 'der', 'dem', 'den'], ['Génitif', 'des', 'der', 'des', 'der'],
    ] } },
    { h: "L'article indéfini", table: { head: ['Cas', 'Masculin', 'Féminin', 'Neutre'], rows: [
      ['Nominatif', 'ein', 'eine', 'ein'], ['Accusatif', 'einen', 'eine', 'ein'], ['Datif', 'einem', 'einer', 'einem'], ['Génitif', 'eines', 'einer', 'eines'],
    ] } },
    { h: 'À retenir', p: "Les noms composés prennent le genre de leur dernière partie : das Haus et die Tür donnent die Haustür. Au pluriel, tous les noms prennent die. Après mit, bei, von, zu, aus, nach et seit vient le datif ; après durch, für, gegen, ohne et um vient l'accusatif. Apprends chaque nom avec son article, comme un tout." },
  ],
  related: ['de-articles-a1', 'en-verbs-sheet', 'cefr-poster'],
};
