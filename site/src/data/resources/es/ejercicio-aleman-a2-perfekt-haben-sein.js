// Resource: exercise. German items stay German; instructions and explanations are in Spanish.
export default {
  key: 'de-ex-a2', site: 'es', slug: 'ejercicio-aleman-a2-perfekt-haben-sein', kind: 'exercise', course: 'German', level: 'A2',
  draw: 'pretzel', tint: 'mint', published: '2026-10-26',
  title: 'Ejercicio de alemán: Perfekt con haben o sein (A2)',
  metaTitle: 'Ejercicios de alemán Perfekt: ¿haben o sein? (A2) – Alimun',
  desc: 'Doce preguntas gratis sobre el Perfekt alemán para el nivel A2: elige haben o sein, con corrección inmediata y una explicación para cada respuesta.',
  lead: 'Elige la forma correcta de haben o sein en cada frase en Perfekt. Ves al momento si aciertas y por qué.',
  instructions: 'Elige el verbo auxiliar correcto.',
  about: [
    'El Perfekt es el tiempo pasado que más usan los alemanes al hablar. Tiene dos partes: una forma de haben o sein en segunda posición y el participio al final de la oración, como en "Ich habe Pizza gegessen" o "Ich bin nach Hause gegangen".',
    'La mayoría de los verbos usan haben, entre ellos todos los que llevan complemento directo. Sein se usa con verbos de movimiento de un lugar a otro (gehen, fahren, fliegen, kommen), verbos de cambio de estado (aufstehen, einschlafen, wachsen, sterben) y los verbos sein, bleiben y passieren. Si puedes preguntar "¿adónde?" o el sujeto termina en un estado nuevo, la respuesta suele ser sein.',
  ],
  items: [
    { q: 'Ich ___ gestern nach Berlin gefahren.', options: ['habe', 'bin', 'hat'], a: 1, why: 'Fahren hacia un destino es un movimiento de un lugar a otro, así que lleva sein: ich bin gefahren.' },
    { q: 'Wir ___ zum Mittagessen eine Pizza gegessen.', options: ['haben', 'sind', 'hat'], a: 0, why: 'Essen lleva complemento directo (eine Pizza), así que usa haben: wir haben gegessen.' },
    { q: 'Anna ___ heute um sieben Uhr aufgestanden.', options: ['hat', 'sind', 'ist'], a: 2, why: 'Aufstehen es un cambio de estado, de estar tumbado a estar de pie, así que lleva sein: sie ist aufgestanden.' },
    { q: 'Was ___ denn passiert?', options: ['hat', 'ist', 'haben'], a: 1, why: 'Passieren lleva siempre sein en el Perfekt: was ist passiert?' },
    { q: 'Mein Opa ___ letztes Jahr gestorben.', options: ['hat', 'haben', 'bist', 'ist'], a: 3, why: 'Sterben es un cambio de estado, así que lleva sein: er ist gestorben.' },
    { q: 'Ich ___ am Sonntag sehr lange geschlafen.', options: ['habe', 'bin', 'hat'], a: 0, why: 'Schlafen describe un estado que no cambia, así que usa haben: ich habe geschlafen.' },
    { q: 'Die Kinder ___ in diesem Jahr schnell gewachsen.', options: ['haben', 'hat', 'sind'], a: 2, why: 'Wachsen (crecer) es un cambio de estado, así que lleva sein: sie sind gewachsen.' },
    { q: 'Wie lange ___ ihr in Spanien geblieben?', options: ['seid', 'habt', 'sind'], a: 0, why: 'Bleiben lleva siempre sein, y la forma para ihr es seid: ihr seid geblieben.' },
    { q: 'Er ___ den Brief noch nicht gelesen.', options: ['ist', 'hat', 'sind'], a: 1, why: 'Lesen lleva complemento directo (den Brief), así que usa haben: er hat gelesen.' },
    { q: 'Ich ___ noch nie in Japan gewesen.', options: ['habe', 'hat', 'bin'], a: 2, why: 'El propio verbo sein forma su Perfekt con sein: ich bin gewesen.' },
    { q: 'Wann ___ du Lisa kennengelernt?', options: ['hast', 'bist', 'hat'], a: 0, why: 'Kennenlernen lleva complemento directo (Lisa), así que usa haben: du hast kennengelernt.' },
    { q: 'Der Zug ___ pünktlich in München angekommen.', options: ['hat', 'haben', 'ist', 'sind'], a: 2, why: 'Ankommen es un movimiento que termina en un lugar, así que lleva sein: der Zug ist angekommen.' },
  ],
  related: ['de-articles-a1', 'de-ex-b1', 'de-quiz-a2'],
};
