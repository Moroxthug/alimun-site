// Resource: quiz. German items stay German; explanations are in Spanish.
export default {
  key: 'de-quiz-a1', site: 'es', slug: 'quiz-aleman-a1', kind: 'quiz', course: 'German', level: 'A1',
  draw: 'pretzel', tint: 'sun', published: '2026-10-26',
  title: 'Quiz rápido de alemán: diez preguntas de nivel A1',
  metaTitle: 'Quiz de alemán A1 gratis: gramática y vocabulario – Alimun',
  desc: 'Un quiz de alemán gratis de diez preguntas de nivel A1: sein y haben, artículos, plurales, preguntas, números y palabras cotidianas, con cada respuesta explicada.',
  lead: 'Diez preguntas sobre la gramática y las palabras de tus primeros meses de alemán. Elige una respuesta para ver por qué es la correcta.',
  instructions: 'Elige la mejor respuesta.',
  about: [
    'El A1 es el nivel en el que puedes presentarte, hacer y responder preguntas sencillas sobre dónde vives y a qué te dedicas, y entender palabras cotidianas como los días de la semana, los números y la comida.',
    'Este quiz repasa la base sobre la que se construye todo lo demás: las formas de sein y haben, der, die y das, las terminaciones del plural, los interrogativos y los números. Cada respuesta viene con una explicación breve, así que aprendes algo incluso cuando fallas.',
  ],
  items: [
    { q: 'Ich ___ Anna.', options: ['bin', 'bist', 'ist', 'sind'], a: 0, why: 'Con ich, el verbo sein (ser, estar) es bin: ich bin, du bist, er ist.' },
    { q: '___ Tisch ist neu.', options: ['Die', 'Der', 'Das', 'Den'], a: 1, why: 'Tisch es masculino, así que como sujeto lleva der: der Tisch.' },
    { q: 'Wir ___ zwei Kinder.', options: ['hat', 'habt', 'haben', 'hast'], a: 2, why: 'Con wir, haben (tener) mantiene su forma completa: wir haben.' },
    { q: 'Ein Buch, zwei ___.', options: ['Buchs', 'Bücher', 'Buche', 'Buchen'], a: 1, why: 'Buch forma el plural con Umlaut y -er: das Buch, die Bücher.' },
    { q: '___ wohnst du? – In Berlin.', options: ['Wer', 'Was', 'Wann', 'Wo'], a: 3, why: 'Wo pregunta dónde está alguien o algo, y la respuesta es un lugar.' },
    { q: 'Wie sagt man 21 auf Deutsch?', options: ['einundzwanzig', 'zwanzigeins', 'zweiundzehn', 'einszwanzig'], a: 0, why: 'El alemán dice las unidades antes que las decenas: ein-und-zwanzig, literalmente uno y veinte.' },
    { q: 'Ich habe ___ Bruder.', options: ['ein', 'eine', 'einer', 'einen'], a: 3, why: 'Haben rige acusativo, y el masculino ein pasa a einen: ich habe einen Bruder.' },
    { q: 'Am Morgen trinke ich eine Tasse ___.', options: ['Brot', 'Käse', 'Kaffee', 'Apfel'], a: 2, why: 'Una taza es de café: eine Tasse Kaffee. Las demás palabras son cosas que se comen.' },
    { q: 'Du ___ aus Spanien, oder?', options: ['kommt', 'komme', 'kommen', 'kommst'], a: 3, why: 'Con du, los verbos regulares acaban en -st: du kommst.' },
    { q: 'Montag, Dienstag, ___, Donnerstag', options: ['Freitag', 'Sonntag', 'Mittwoch', 'Samstag'], a: 2, why: 'Mittwoch (miércoles) va entre Dienstag (martes) y Donnerstag (jueves).' },
  ],
  related: ['de-articles-a1', 'de-quiz-a2', 'de-ex-a2'],
};
