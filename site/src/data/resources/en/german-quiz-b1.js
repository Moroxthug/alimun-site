// Resource: quiz. German items stay German; explanations are in the reader's language.
export default {
  key: 'de-quiz-b1', site: 'en', slug: 'german-quiz-b1', kind: 'quiz', course: 'German', level: 'B1',
  draw: 'sun', tint: 'mint', published: '2026-10-26',
  title: 'German quick quiz: ten questions at B1',
  metaTitle: 'Free German quiz B1: grammar and vocabulary – Alimun',
  desc: 'A free ten-question German quiz at B1 level: weil, dass and obwohl, the Präteritum, the passive, reflexive verbs and prepositions, with answers explained.',
  lead: 'Ten questions on the grammar you meet at B1. Pick an answer to see why it is right.',
  instructions: 'Choose the best answer.',
  about: [
    'B1 is the level where you can deal with most situations while traveling or at work, tell a story about the past, give reasons for your opinions and connect your ideas in longer sentences.',
    'This quiz checks the structures that make that possible: subordinate clauses with weil, dass and obwohl, Präteritum forms, the passive with werden, reflexive verbs and common prepositions. Every answer comes with a short explanation.',
  ],
  items: [
    { q: 'Ich lerne Deutsch, ___ ich in Wien arbeiten möchte.', options: ['weil', 'denn', 'deshalb', 'trotzdem'], a: 0, why: 'The verb möchte stands at the end, so only the subordinating conjunction weil fits; denn, deshalb and trotzdem need a different word order.' },
    { q: 'Er sagt, ___ er morgen keine Zeit hat.', options: ['ob', 'dass', 'wenn', 'was'], a: 1, why: 'Dass introduces what someone says or thinks: er sagt, dass ...' },
    { q: 'Er hat die Prüfung bestanden, ___ er kaum gelernt hat.', options: ['weil', 'damit', 'obwohl', 'dass'], a: 2, why: 'Obwohl (although) introduces a contrast: he passed even though he hardly studied.' },
    { q: 'Als Kind ___ ich jeden Sommer bei meiner Oma.', options: ['war', 'bin', 'wäre', 'sei'], a: 0, why: 'For the past of sein, German normally uses the Präteritum: ich war.' },
    { q: 'Gestern ___ wir einen langen Brief.', options: ['schreiben', 'schrieben', 'schreibten', 'geschrieben'], a: 1, why: 'Schreiben is a strong verb, and its Präteritum is schrieb, with wir schrieben.' },
    { q: 'Die Briefe ___ jeden Morgen vom Postboten gebracht.', options: ['werden', 'sind', 'haben', 'wird'], a: 0, why: 'The passive uses werden plus the past participle, and the plural subject die Briefe needs werden.' },
    { q: 'Ich freue ___ auf das Wochenende.', options: ['mir', 'sich', 'mich', 'dich'], a: 2, why: 'Sich freuen is reflexive, and with ich the accusative pronoun is mich.' },
    { q: 'Ich putze ___ die Zähne.', options: ['mich', 'mir', 'sich', 'mein'], a: 1, why: 'When the sentence already has an accusative object (die Zähne), the reflexive pronoun is dative: mir.' },
    { q: 'Wir fahren im Sommer ___ Italien.', options: ['zu', 'in', 'bei', 'nach'], a: 3, why: 'For travel to countries and cities without an article, German uses nach: nach Italien, nach Berlin.' },
    { q: 'Ich interessiere mich sehr ___ Musik.', options: ['an', 'auf', 'über', 'für'], a: 3, why: 'The verb is sich interessieren für: ich interessiere mich für Musik.' },
  ],
  related: ['de-quiz-a2', 'de-quiz-b2', 'de-ex-b1'],
};
