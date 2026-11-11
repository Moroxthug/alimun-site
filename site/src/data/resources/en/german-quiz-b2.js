// Resource: quiz. German items stay German; explanations are in the reader's language.
export default {
  key: 'de-quiz-b2', site: 'en', slug: 'german-quiz-b2', kind: 'quiz', course: 'German', level: 'B2',
  draw: 'ghost', tint: 'lime', published: '2026-10-26',
  title: 'German quick quiz: ten questions at B2',
  metaTitle: 'Free German quiz B2: grammar and vocabulary – Alimun',
  desc: 'A free ten-question German quiz at B2 level: Konjunktiv II, the passive with modal verbs, adjective endings, the n-declension and verbs with prepositions.',
  lead: 'Ten questions on the grammar you meet at B2. Pick an answer to see why it is right.',
  instructions: 'Choose the best answer.',
  about: [
    'B2 is the level where you can follow most of a discussion on a familiar topic, explain your point of view in detail, talk about what would or could have happened and write clear texts on a wide range of subjects.',
    'This quiz checks the grammar that separates a good intermediate speaker from an accurate one: Konjunktiv II, the passive with modal verbs, adjective endings, nouns of the n-declension and verbs with fixed prepositions. Every answer comes with a short explanation.',
  ],
  items: [
    { q: 'Wenn ich mehr Zeit ___, würde ich öfter reisen.', options: ['habe', 'hatte', 'hätte', 'hat'], a: 2, why: 'An unreal condition in the present uses Konjunktiv II: wenn ich mehr Zeit hätte.' },
    { q: 'Wenn du mich angerufen ___, wäre ich gekommen.', options: ['hättest', 'wärst', 'würdest', 'hast'], a: 0, why: 'An unreal condition in the past uses hätte or wäre plus the past participle, and anrufen forms its Perfekt with haben.' },
    { q: 'Der Antrag muss bis Freitag ___.', options: ['abgeben werden', 'abgegeben werden', 'abgegeben worden', 'abgegeben wird'], a: 1, why: 'The passive with a modal verb is past participle plus werden in the infinitive: muss abgegeben werden.' },
    { q: 'Ich habe mir einen ___ Mantel gekauft.', options: ['warme', 'warmer', 'warmes', 'warmen'], a: 3, why: 'After einen (masculine accusative), the adjective ends in -en: einen warmen Mantel.' },
    { q: 'Bei ___ Wetter bleiben wir zu Hause.', options: ['schlechtem', 'schlechten', 'schlechtes', 'schlechter'], a: 0, why: 'With no article, the adjective shows the case itself: bei takes the dative, and neuter dative is -em.' },
    { q: 'Ich habe gestern mit ___ gesprochen.', options: ['dem Nachbar', 'dem Nachbarn', 'den Nachbar', 'der Nachbar'], a: 1, why: 'Nachbar belongs to the n-declension and adds -n outside the nominative singular: mit dem Nachbarn.' },
    { q: 'Die Ärztin untersucht ___.', options: ['den Patient', 'dem Patient', 'den Patienten', 'der Patienten'], a: 2, why: 'Patient is an n-declension noun, so the accusative is den Patienten.' },
    { q: 'Ich kann mich nicht ___ seinen Namen erinnern.', options: ['an', 'auf', 'für', 'über'], a: 0, why: 'The verb is sich erinnern an plus the accusative: ich erinnere mich an seinen Namen.' },
    { q: 'Ob wir fahren, hängt ___ dem Wetter ab.', options: ['an', 'mit', 'von', 'aus'], a: 2, why: 'The verb is abhängen von plus the dative: es hängt vom Wetter ab.' },
    { q: '___ wartest du? – Auf meinen Freund.', options: ['Worauf', 'Wofür', 'Woran', 'Auf wen'], a: 3, why: 'When the answer is a person, the question keeps the preposition and adds wen or wem: auf wen; worauf is used for things.' },
  ],
  related: ['de-quiz-b1', 'de-quiz-c1', 'de-ex-b2'],
};
