// Resource: exercise. German items stay German; instructions and explanations are in the reader's language.
export default {
  key: 'de-ex-b1', site: 'en', slug: 'german-exercise-b1-prepositions-cases', kind: 'exercise', course: 'German', level: 'B1',
  draw: 'owl', tint: 'sun', published: '2026-10-26',
  title: 'German exercise: prepositions with dative or accusative (B1)',
  metaTitle: 'German prepositions exercise: dative or accusative (B1) – Alimun',
  desc: 'Twelve free questions on German prepositions for B1 learners, including two-way prepositions, with instant feedback and an explanation for every answer.',
  lead: 'Choose the right article or ending after each preposition. You see straight away if you are right, and why.',
  instructions: 'Choose the right form after the preposition.',
  about: [
    'Every German preposition decides the case of the noun that follows it. Aus, bei, mit, nach, seit, von and zu always take the dative, so "mit dem Bus" and "seit einem Jahr". Durch, für, gegen, ohne and um always take the accusative, so "für meine Mutter" and "durch den Park".',
    'Nine two-way prepositions (Wechselpräpositionen) can take either case: an, auf, hinter, in, neben, über, unter, vor and zwischen. Use the accusative for movement toward a place, answering "wohin?", as in "Ich lege das Buch auf den Tisch". Use the dative for a position, answering "wo?", as in "Das Buch liegt auf dem Tisch". Verb pairs help here: legen, stellen and hängen (to hang something) usually go with the accusative, liegen, stehen and hängen (to be hanging) with the dative.',
  ],
  items: [
    { q: 'Ich fahre jeden Tag mit ___ Bus zur Arbeit.', options: ['den', 'dem', 'der'], a: 1, why: 'Mit always takes the dative, and der Bus becomes dem Bus.' },
    { q: 'Das Geschenk ist für ___ Mutter.', options: ['meine', 'meiner', 'meinem'], a: 0, why: 'Für always takes the accusative, and die Mutter stays meine Mutter.' },
    { q: 'Wir gehen am Abend durch ___ Park.', options: ['dem', 'der', 'den'], a: 2, why: 'Durch always takes the accusative, and der Park becomes den Park.' },
    { q: 'Ich lege das Buch auf ___ Tisch.', options: ['den', 'dem', 'der'], a: 0, why: 'Legen describes movement to a place (wohin?), so auf takes the accusative: auf den Tisch.' },
    { q: 'Das Buch liegt jetzt auf ___ Tisch.', options: ['den', 'das', 'dem'], a: 2, why: 'Liegen describes a position (wo?), so auf takes the dative: auf dem Tisch.' },
    { q: 'Die Katze schläft unter ___ Bett.', options: ['das', 'dem', 'den'], a: 1, why: 'Schlafen happens in one place (wo?), so unter takes the dative, and das Bett becomes dem Bett.' },
    { q: 'Er hängt das Bild an ___ Wand.', options: ['der', 'den', 'die'], a: 2, why: 'Hängen with an object is movement to a place (wohin?), so an takes the accusative: an die Wand.' },
    { q: 'Seit ___ Jahr lerne ich Deutsch.', options: ['einem', 'ein', 'einen'], a: 0, why: 'Seit always takes the dative, and ein Jahr becomes einem Jahr.' },
    { q: 'Ohne ___ Brille kann ich nicht lesen.', options: ['meiner', 'meinem', 'meine'], a: 2, why: 'Ohne always takes the accusative, and die Brille stays meine Brille.' },
    { q: 'Wir sitzen gerade in ___ Küche.', options: ['die', 'der', 'den'], a: 1, why: 'Sitzen describes a position (wo?), so in takes the dative, and die Küche becomes der Küche.' },
    { q: 'Stell die Flaschen bitte in ___ Kühlschrank.', options: ['dem', 'den', 'der'], a: 1, why: 'Stellen is movement to a place (wohin?), so in takes the accusative: in den Kühlschrank.' },
    { q: 'Am Wochenende wohne ich bei ___ Eltern.', options: ['meine', 'meiner', 'meinen'], a: 2, why: 'Bei always takes the dative, and in the dative plural the ending is -en: bei meinen Eltern.' },
  ],
  related: ['de-ex-a2', 'de-ex-b2', 'de-quiz-b1'],
};
