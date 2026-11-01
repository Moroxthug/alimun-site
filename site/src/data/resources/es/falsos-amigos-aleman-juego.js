// Resource: game. German false friends and their real meanings. German meanings checked against Duden; Spanish meanings against the RAE dictionary.
// German words stay German; options, explanations and pair meanings are in Spanish.
export default {
  key: 'german-false-friends', site: 'es', slug: 'falsos-amigos-aleman-juego', kind: 'game', course: 'German', level: 'Todos los niveles',
  draw: 'ghost', tint: 'lime', published: '2026-11-01',
  title: 'Juego de falsos amigos en alemán: ¿un Gift es un regalo?',
  metaTitle: 'Falsos amigos en alemán: juego con Gift, Handy, Chef – Alimun',
  desc: 'Un juego gratis con falsos amigos del alemán: das Gift es veneno, no un regalo, y der Chef es tu jefe. Adivina qué significan de verdad diez palabras.',
  lead: 'Algunas palabras alemanas se parecen al inglés, o al español, y significan otra cosa. Das Gift es veneno y das Handy es el móvil. ¿Reconoces las demás?',
  instructions: '¿Qué significa de verdad?',
  about: [
    'Los falsos amigos son palabras que se parecen a otra que ya conoces pero significan algo distinto. El alemán tiene muchos con el inglés, y algunos también con el español.',
    'Aprenderlos pronto te ahorra errores muy graciosos, como decirle a tu anfitrión que le traes veneno o buscar al cocinero cuando quieres hablar con el jefe.',
  ],
  items: [
    { q: 'das Gift', options: ['un regalo', 'veneno', 'un talento', 'una propina'], a: 1, why: 'das Gift = el veneno. El regalo se dice das Geschenk.' },
    { q: 'das Handy', options: ['el móvil', 'un bolso de mano', 'un guante', 'una herramienta'], a: 0, why: 'das Handy = el móvil o celular. Se parece al inglés handy, que significa práctico.' },
    { q: 'der Chef', options: ['un cocinero', 'un camarero', 'el jefe', 'un cliente'], a: 2, why: 'der Chef = el jefe. Ojo, que también engaña en español: aquí un chef es un cocinero, y en alemán el cocinero es der Koch.' },
    { q: 'bekommen', options: ['convertirse', 'volver', 'dar la bienvenida', 'recibir, conseguir'], a: 3, why: 'bekommen = recibir, conseguir. Se parece al inglés become, pero convertirse o llegar a ser se dice werden.' },
    { q: 'der Rat', options: ['una rata', 'un consejo', 'una tarifa', 'un ratón'], a: 1, why: 'der Rat = el consejo, tanto el que das a alguien como un órgano, por ejemplo el consejo municipal. La rata se dice die Ratte.' },
    { q: 'die Kaution', options: ['la prudencia', 'una señal de peligro', 'una fianza', 'un cojín'], a: 2, why: 'die Kaution = la fianza, por ejemplo al alquilar un piso. En español existe caución con un sentido parecido, pero engaña a quien habla inglés: caution significa prudencia.' },
    { q: 'aktuell', options: ['actual, al día', 'real, verdadero', 'activo', 'exacto'], a: 0, why: 'aktuell = actual, al día, igual que en español. Engaña a quien habla inglés, porque actual en inglés significa real.' },
    { q: 'eventuell', options: ['al final', 'cada vez', 'enseguida', 'quizá, si se da el caso'], a: 3, why: 'eventuell = quizá, si se da el caso, como eventualmente en el sentido de la RAE. Nunca significa al final, que en alemán es schließlich.' },
    { q: 'sensibel', options: ['sensato, razonable', 'sensible', 'sensual', 'sentimental'], a: 1, why: 'sensibel = sensible, igual que en español. Sensato se dice vernünftig.' },
    { q: 'das Gymnasium', options: ['un gimnasio', 'un polideportivo', 'un instituto', 'una piscina'], a: 2, why: 'das Gymnasium = el instituto que lleva al Abitur, el examen para entrar en la universidad. Cuidado, porque engaña en español: el gimnasio se dice das Fitnessstudio, y el del colegio die Turnhalle.' },
  ],
  pairs: [
    ['das Gift', 'el veneno'],
    ['das Handy', 'el móvil'],
    ['der Chef', 'el jefe'],
    ['bekommen', 'recibir, conseguir'],
    ['der Rat', 'el consejo'],
    ['eventuell', 'quizá'],
    ['sensibel', 'sensible'],
    ['das Gymnasium', 'el instituto'],
  ],
  related: ['false-friends', 'german-compounds', 'untranslatable-german'],
};
