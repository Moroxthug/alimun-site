// Resource: exercise. German items stay German; instructions and explanations are in Spanish.
export default {
  key: 'de-ex-b1', site: 'es', slug: 'ejercicio-aleman-b1-preposiciones-dativo-acusativo', kind: 'exercise', course: 'German', level: 'B1',
  draw: 'owl', tint: 'sun', published: '2026-10-26',
  title: 'Ejercicio de alemán: preposiciones con dativo o acusativo (B1)',
  metaTitle: 'Ejercicios preposiciones alemán dativo o acusativo B1 – Alimun',
  desc: 'Doce preguntas gratis sobre las preposiciones alemanas para el nivel B1, también las de doble régimen, con corrección inmediata y cada respuesta explicada.',
  lead: 'Elige el artículo o la terminación correcta después de cada preposición. Ves al momento si aciertas y por qué.',
  instructions: 'Elige la forma correcta después de la preposición.',
  about: [
    'Cada preposición alemana decide el caso del sustantivo que la sigue. Aus, bei, mit, nach, seit, von y zu rigen siempre dativo, así que se dice "mit dem Bus" y "seit einem Jahr". Durch, für, gegen, ohne y um rigen siempre acusativo, así que se dice "für meine Mutter" y "durch den Park".',
    'Nueve preposiciones de doble régimen (Wechselpräpositionen) pueden llevar uno u otro caso: an, auf, hinter, in, neben, über, unter, vor y zwischen. Usa el acusativo para un movimiento hacia un lugar, que responde a "wohin?", como en "Ich lege das Buch auf den Tisch". Usa el dativo para una posición, que responde a "wo?", como en "Das Buch liegt auf dem Tisch". Las parejas de verbos ayudan: legen, stellen y hängen (colgar algo) suelen ir con acusativo, y liegen, stehen y hängen (estar colgado) con dativo.',
  ],
  items: [
    { q: 'Ich fahre jeden Tag mit ___ Bus zur Arbeit.', options: ['den', 'dem', 'der'], a: 1, why: 'Mit rige siempre dativo, y der Bus pasa a dem Bus.' },
    { q: 'Das Geschenk ist für ___ Mutter.', options: ['meine', 'meiner', 'meinem'], a: 0, why: 'Für rige siempre acusativo, y die Mutter se queda como meine Mutter.' },
    { q: 'Wir gehen am Abend durch ___ Park.', options: ['dem', 'der', 'den'], a: 2, why: 'Durch rige siempre acusativo, y der Park pasa a den Park.' },
    { q: 'Ich lege das Buch auf ___ Tisch.', options: ['den', 'dem', 'der'], a: 0, why: 'Legen describe un movimiento hacia un lugar (wohin?), así que auf lleva acusativo: auf den Tisch.' },
    { q: 'Das Buch liegt jetzt auf ___ Tisch.', options: ['den', 'das', 'dem'], a: 2, why: 'Liegen describe una posición (wo?), así que auf lleva dativo: auf dem Tisch.' },
    { q: 'Die Katze schläft unter ___ Bett.', options: ['das', 'dem', 'den'], a: 1, why: 'Schlafen ocurre en un lugar (wo?), así que unter lleva dativo, y das Bett pasa a dem Bett.' },
    { q: 'Er hängt das Bild an ___ Wand.', options: ['der', 'den', 'die'], a: 2, why: 'Hängen con complemento es un movimiento hacia un lugar (wohin?), así que an lleva acusativo: an die Wand.' },
    { q: 'Seit ___ Jahr lerne ich Deutsch.', options: ['einem', 'ein', 'einen'], a: 0, why: 'Seit rige siempre dativo, y ein Jahr pasa a einem Jahr.' },
    { q: 'Ohne ___ Brille kann ich nicht lesen.', options: ['meiner', 'meinem', 'meine'], a: 2, why: 'Ohne rige siempre acusativo, y die Brille se queda como meine Brille.' },
    { q: 'Wir sitzen gerade in ___ Küche.', options: ['die', 'der', 'den'], a: 1, why: 'Sitzen describe una posición (wo?), así que in lleva dativo, y die Küche pasa a der Küche.' },
    { q: 'Stell die Flaschen bitte in ___ Kühlschrank.', options: ['dem', 'den', 'der'], a: 1, why: 'Stellen es un movimiento hacia un lugar (wohin?), así que in lleva acusativo: in den Kühlschrank.' },
    { q: 'Am Wochenende wohne ich bei ___ Eltern.', options: ['meine', 'meiner', 'meinen'], a: 2, why: 'Bei rige siempre dativo, y en el dativo plural la terminación es -en: bei meinen Eltern.' },
  ],
  related: ['de-ex-a2', 'de-ex-b2', 'de-quiz-b1'],
};
