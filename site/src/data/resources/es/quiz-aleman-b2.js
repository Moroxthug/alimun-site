// Resource: quiz. German items stay German; explanations are in Spanish.
export default {
  key: 'de-quiz-b2', site: 'es', slug: 'quiz-aleman-b2', kind: 'quiz', course: 'German', level: 'B2',
  draw: 'ghost', tint: 'lime', published: '2026-10-26',
  title: 'Quiz rápido de alemán: diez preguntas de nivel B2',
  metaTitle: 'Quiz de alemán B2 gratis: gramática y vocabulario – Alimun',
  desc: 'Un quiz de alemán gratis de diez preguntas de nivel B2: Konjunktiv II, pasiva con verbos modales, declinación del adjetivo, declinación en -n y verbos con preposición.',
  lead: 'Diez preguntas sobre la gramática que encuentras en el B2. Elige una respuesta para ver por qué es la correcta.',
  instructions: 'Elige la mejor respuesta.',
  about: [
    'El B2 es el nivel en el que puedes seguir casi toda una conversación sobre un tema conocido, explicar tu punto de vista con detalle, hablar de lo que habría podido pasar y escribir textos claros sobre muchos temas.',
    'Este quiz repasa la gramática que distingue a un buen hablante intermedio de uno preciso: el Konjunktiv II, la pasiva con verbos modales, la declinación del adjetivo, los sustantivos de la declinación en -n y los verbos con preposición fija. Cada respuesta viene con una explicación breve.',
  ],
  items: [
    { q: 'Wenn ich mehr Zeit ___, würde ich öfter reisen.', options: ['habe', 'hatte', 'hätte', 'hat'], a: 2, why: 'Una condición irreal en el presente usa el Konjunktiv II: wenn ich mehr Zeit hätte.' },
    { q: 'Wenn du mich angerufen ___, wäre ich gekommen.', options: ['hättest', 'wärst', 'würdest', 'hast'], a: 0, why: 'Una condición irreal en el pasado usa hätte o wäre más el participio, y anrufen forma su Perfekt con haben.' },
    { q: 'Der Antrag muss bis Freitag ___.', options: ['abgeben werden', 'abgegeben werden', 'abgegeben worden', 'abgegeben wird'], a: 1, why: 'La pasiva con un verbo modal se forma con el participio más werden en infinitivo: muss abgegeben werden.' },
    { q: 'Ich habe mir einen ___ Mantel gekauft.', options: ['warme', 'warmer', 'warmes', 'warmen'], a: 3, why: 'Después de einen (masculino en acusativo), el adjetivo acaba en -en: einen warmen Mantel.' },
    { q: 'Bei ___ Wetter bleiben wir zu Hause.', options: ['schlechtem', 'schlechten', 'schlechtes', 'schlechter'], a: 0, why: 'Sin artículo, el adjetivo indica él mismo el caso: bei rige dativo, y el dativo neutro es -em.' },
    { q: 'Ich habe gestern mit ___ gesprochen.', options: ['dem Nachbar', 'dem Nachbarn', 'den Nachbar', 'der Nachbar'], a: 1, why: 'Nachbar pertenece a la declinación en -n y añade -n fuera del nominativo singular: mit dem Nachbarn.' },
    { q: 'Die Ärztin untersucht ___.', options: ['den Patient', 'dem Patient', 'den Patienten', 'der Patienten'], a: 2, why: 'Patient es un sustantivo de la declinación en -n, así que el acusativo es den Patienten.' },
    { q: 'Ich kann mich nicht ___ seinen Namen erinnern.', options: ['an', 'auf', 'für', 'über'], a: 0, why: 'El verbo es sich erinnern an más acusativo: ich erinnere mich an seinen Namen.' },
    { q: 'Ob wir fahren, hängt ___ dem Wetter ab.', options: ['an', 'mit', 'von', 'aus'], a: 2, why: 'El verbo es abhängen von más dativo: es hängt vom Wetter ab.' },
    { q: '___ wartest du? – Auf meinen Freund.', options: ['Worauf', 'Wofür', 'Woran', 'Auf wen'], a: 3, why: 'Cuando la respuesta es una persona, la pregunta mantiene la preposición y añade wen o wem: auf wen; worauf se usa para cosas.' },
  ],
  related: ['de-quiz-b1', 'de-quiz-c1', 'de-ex-b2'],
};
