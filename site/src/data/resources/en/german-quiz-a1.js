// Resource: quiz. German items stay German; explanations are in the reader's language.
export default {
  key: 'de-quiz-a1', site: 'en', slug: 'german-quiz-a1', kind: 'quiz', course: 'German', level: 'A1',
  draw: 'pretzel', tint: 'sun', published: '2026-10-26',
  title: 'German quick quiz: ten questions at A1',
  metaTitle: 'Free German quiz A1: grammar and vocabulary – Alimun',
  desc: 'A free ten-question German quiz at A1 level: sein and haben, articles, plurals, questions, numbers and everyday words, with every answer explained.',
  lead: 'Ten questions on the grammar and words you meet in your first months of German. Pick an answer to see why it is right.',
  instructions: 'Choose the best answer.',
  about: [
    'A1 is the level where you can introduce yourself, ask and answer simple questions about where you live and what you do, and understand everyday words such as days of the week, numbers and food.',
    'This quiz checks the basics that everything else builds on: the forms of sein and haben, der, die and das, plural endings, question words and numbers. Every answer comes with a short explanation, so you learn something even when you get it wrong.',
  ],
  items: [
    { q: 'Ich ___ Anna.', options: ['bin', 'bist', 'ist', 'sind'], a: 0, why: 'With ich, the verb sein (to be) becomes bin: ich bin, du bist, er ist.' },
    { q: '___ Tisch ist neu.', options: ['Die', 'Der', 'Das', 'Den'], a: 1, why: 'Tisch is masculine, so the subject takes der: der Tisch.' },
    { q: 'Wir ___ zwei Kinder.', options: ['hat', 'habt', 'haben', 'hast'], a: 2, why: 'With wir, haben (to have) keeps its full form: wir haben.' },
    { q: 'Ein Buch, zwei ___.', options: ['Buchs', 'Bücher', 'Buche', 'Buchen'], a: 1, why: 'Buch forms its plural with an umlaut and -er: das Buch, die Bücher.' },
    { q: '___ wohnst du? – In Berlin.', options: ['Wer', 'Was', 'Wann', 'Wo'], a: 3, why: 'Wo asks where someone or something is, and the answer is a place.' },
    { q: 'Wie sagt man 21 auf Deutsch?', options: ['einundzwanzig', 'zwanzigeins', 'zweiundzehn', 'einszwanzig'], a: 0, why: 'German says the ones before the tens: ein-und-zwanzig, literally one and twenty.' },
    { q: 'Ich habe ___ Bruder.', options: ['ein', 'eine', 'einer', 'einen'], a: 3, why: 'Haben takes the accusative, and masculine ein becomes einen: ich habe einen Bruder.' },
    { q: 'Am Morgen trinke ich eine Tasse ___.', options: ['Brot', 'Käse', 'Kaffee', 'Apfel'], a: 2, why: 'You drink a cup of coffee: eine Tasse Kaffee. The other words are things you eat.' },
    { q: 'Du ___ aus Spanien, oder?', options: ['kommt', 'komme', 'kommen', 'kommst'], a: 3, why: 'With du, regular verbs end in -st: du kommst.' },
    { q: 'Montag, Dienstag, ___, Donnerstag', options: ['Freitag', 'Sonntag', 'Mittwoch', 'Samstag'], a: 2, why: 'Mittwoch (Wednesday) comes between Dienstag (Tuesday) and Donnerstag (Thursday).' },
  ],
  related: ['de-articles-a1', 'de-quiz-a2', 'de-ex-a2'],
};
