// Resource: quiz. German items stay German; explanations are in Spanish.
export default {
  key: 'de-quiz-b1', site: 'es', slug: 'quiz-aleman-b1', kind: 'quiz', course: 'German', level: 'B1',
  draw: 'sun', tint: 'mint', published: '2026-10-26',
  title: 'Quiz rápido de alemán: diez preguntas de nivel B1',
  metaTitle: 'Quiz de alemán B1 gratis: gramática y vocabulario – Alimun',
  desc: 'Un quiz de alemán gratis de diez preguntas de nivel B1: weil, dass y obwohl, el Präteritum, la pasiva, los verbos reflexivos y las preposiciones, todo explicado.',
  lead: 'Diez preguntas sobre la gramática que encuentras en el B1. Elige una respuesta para ver por qué es la correcta.',
  instructions: 'Elige la mejor respuesta.',
  about: [
    'El B1 es el nivel en el que te desenvuelves en la mayoría de las situaciones de viaje o de trabajo, cuentas una historia del pasado, justificas tus opiniones y unes tus ideas en frases más largas.',
    'Este quiz repasa las estructuras que lo hacen posible: las subordinadas con weil, dass y obwohl, las formas del Präteritum, la pasiva con werden, los verbos reflexivos y las preposiciones más frecuentes. Cada respuesta viene con una explicación breve.',
  ],
  items: [
    { q: 'Ich lerne Deutsch, ___ ich in Wien arbeiten möchte.', options: ['weil', 'denn', 'deshalb', 'trotzdem'], a: 0, why: 'El verbo möchte va al final, así que solo encaja la conjunción subordinante weil; denn, deshalb y trotzdem necesitan otro orden de palabras.' },
    { q: 'Er sagt, ___ er morgen keine Zeit hat.', options: ['ob', 'dass', 'wenn', 'was'], a: 1, why: 'Dass introduce lo que alguien dice o piensa: er sagt, dass ...' },
    { q: 'Er hat die Prüfung bestanden, ___ er kaum gelernt hat.', options: ['weil', 'damit', 'obwohl', 'dass'], a: 2, why: 'Obwohl (aunque) introduce un contraste: aprobó aunque apenas estudió.' },
    { q: 'Als Kind ___ ich jeden Sommer bei meiner Oma.', options: ['war', 'bin', 'wäre', 'sei'], a: 0, why: 'Para el pasado de sein, el alemán usa normalmente el Präteritum: ich war.' },
    { q: 'Gestern ___ wir einen langen Brief.', options: ['schreiben', 'schrieben', 'schreibten', 'geschrieben'], a: 1, why: 'Schreiben es un verbo fuerte y su Präteritum es schrieb, con wir schrieben.' },
    { q: 'Die Briefe ___ jeden Morgen vom Postboten gebracht.', options: ['werden', 'sind', 'haben', 'wird'], a: 0, why: 'La pasiva se forma con werden más el participio, y el sujeto plural die Briefe necesita werden.' },
    { q: 'Ich freue ___ auf das Wochenende.', options: ['mir', 'sich', 'mich', 'dich'], a: 2, why: 'Sich freuen es reflexivo, y con ich el pronombre en acusativo es mich.' },
    { q: 'Ich putze ___ die Zähne.', options: ['mich', 'mir', 'sich', 'mein'], a: 1, why: 'Cuando la frase ya tiene un complemento en acusativo (die Zähne), el pronombre reflexivo va en dativo: mir.' },
    { q: 'Wir fahren im Sommer ___ Italien.', options: ['zu', 'in', 'bei', 'nach'], a: 3, why: 'Para viajar a países y ciudades sin artículo, el alemán usa nach: nach Italien, nach Berlin.' },
    { q: 'Ich interessiere mich sehr ___ Musik.', options: ['an', 'auf', 'über', 'für'], a: 3, why: 'El verbo es sich interessieren für: ich interessiere mich für Musik.' },
  ],
  related: ['de-quiz-a2', 'de-quiz-b2', 'de-ex-b1'],
};
