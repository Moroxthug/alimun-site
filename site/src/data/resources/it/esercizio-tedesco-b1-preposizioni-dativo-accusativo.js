// Resource: exercise. German items stay German; instructions and explanations are in Italian.
export default {
  key: 'de-ex-b1', site: 'it', slug: 'esercizio-tedesco-b1-preposizioni-dativo-accusativo', kind: 'exercise', course: 'German', level: 'B1',
  draw: 'owl', tint: 'sun', published: '2026-10-26',
  title: 'Esercizio di tedesco: preposizioni con dativo o accusativo (B1)',
  metaTitle: 'Esercizi preposizioni tedesche: dativo o accusativo (B1) – Alimun',
  desc: 'Dodici domande gratis sulle preposizioni tedesche per chi studia al livello B1, anche quelle con doppio caso, con correzione immediata e ogni risposta spiegata.',
  lead: "Scegli l'articolo o la desinenza giusta dopo ogni preposizione. Vedi subito se hai ragione, e perché.",
  instructions: 'Scegli la forma giusta dopo la preposizione.',
  about: [
    "Ogni preposizione tedesca decide il caso del sostantivo che la segue. Aus, bei, mit, nach, seit, von e zu vogliono sempre il dativo, quindi \"mit dem Bus\" e \"seit einem Jahr\". Durch, für, gegen, ohne e um vogliono sempre l'accusativo, quindi \"für meine Mutter\" e \"durch den Park\".",
    "Nove preposizioni con doppio caso (Wechselpräpositionen) possono reggere l'uno o l'altro caso: an, auf, hinter, in, neben, über, unter, vor e zwischen. Usa l'accusativo per un movimento verso un luogo, che risponde a \"wohin?\", come in \"Ich lege das Buch auf den Tisch\". Usa il dativo per una posizione, che risponde a \"wo?\", come in \"Das Buch liegt auf dem Tisch\". Le coppie di verbi ti aiutano: legen, stellen e hängen (appendere qualcosa) vanno di solito con l'accusativo, liegen, stehen e hängen (essere appeso) con il dativo.",
  ],
  items: [
    { q: 'Ich fahre jeden Tag mit ___ Bus zur Arbeit.', options: ['den', 'dem', 'der'], a: 1, why: 'Mit vuole sempre il dativo, e der Bus diventa dem Bus.' },
    { q: 'Das Geschenk ist für ___ Mutter.', options: ['meine', 'meiner', 'meinem'], a: 0, why: "Für vuole sempre l'accusativo, e die Mutter resta meine Mutter." },
    { q: 'Wir gehen am Abend durch ___ Park.', options: ['dem', 'der', 'den'], a: 2, why: "Durch vuole sempre l'accusativo, e der Park diventa den Park." },
    { q: 'Ich lege das Buch auf ___ Tisch.', options: ['den', 'dem', 'der'], a: 0, why: "Legen descrive un movimento verso un luogo (wohin?), quindi auf vuole l'accusativo: auf den Tisch." },
    { q: 'Das Buch liegt jetzt auf ___ Tisch.', options: ['den', 'das', 'dem'], a: 2, why: 'Liegen descrive una posizione (wo?), quindi auf vuole il dativo: auf dem Tisch.' },
    { q: 'Die Katze schläft unter ___ Bett.', options: ['das', 'dem', 'den'], a: 1, why: 'Schlafen avviene in un posto (wo?), quindi unter vuole il dativo, e das Bett diventa dem Bett.' },
    { q: 'Er hängt das Bild an ___ Wand.', options: ['der', 'den', 'die'], a: 2, why: "Hängen con un complemento oggetto è un movimento verso un luogo (wohin?), quindi an vuole l'accusativo: an die Wand." },
    { q: 'Seit ___ Jahr lerne ich Deutsch.', options: ['einem', 'ein', 'einen'], a: 0, why: 'Seit vuole sempre il dativo, ed ein Jahr diventa einem Jahr.' },
    { q: 'Ohne ___ Brille kann ich nicht lesen.', options: ['meiner', 'meinem', 'meine'], a: 2, why: "Ohne vuole sempre l'accusativo, e die Brille resta meine Brille." },
    { q: 'Wir sitzen gerade in ___ Küche.', options: ['die', 'der', 'den'], a: 1, why: 'Sitzen descrive una posizione (wo?), quindi in vuole il dativo, e die Küche diventa der Küche.' },
    { q: 'Stell die Flaschen bitte in ___ Kühlschrank.', options: ['dem', 'den', 'der'], a: 1, why: "Stellen è un movimento verso un luogo (wohin?), quindi in vuole l'accusativo: in den Kühlschrank." },
    { q: 'Am Wochenende wohne ich bei ___ Eltern.', options: ['meine', 'meiner', 'meinen'], a: 2, why: 'Bei vuole sempre il dativo, e al dativo plurale la desinenza è -en: bei meinen Eltern.' },
  ],
  related: ['de-ex-a2', 'de-ex-b2', 'de-quiz-b1'],
};
