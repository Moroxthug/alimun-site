// Resource: exercise. German items stay German; instructions and explanations are in Portuguese.
export default {
  key: 'de-ex-b1', site: 'pt', slug: 'exercicio-alemao-b1-preposicoes-dativo-acusativo', kind: 'exercise', course: 'German', level: 'B1',
  draw: 'owl', tint: 'sun', published: '2026-10-26',
  title: 'Exercício de alemão: preposições com dativo ou acusativo (B1)',
  metaTitle: 'Preposições em alemão: dativo ou acusativo? Exercício B1 – Alimun',
  desc: 'Doze perguntas grátis sobre preposições em alemão para o nível B1, incluindo as Wechselpräpositionen, com correção na hora e cada resposta explicada.',
  lead: 'Escolha o artigo ou a terminação certa depois de cada preposição. Você vê na hora se acertou e por quê.',
  instructions: 'Escolha a forma certa depois da preposição.',
  about: [
    'Toda preposição alemã define o caso do substantivo que vem depois dela. Aus, bei, mit, nach, seit, von e zu pedem sempre o dativo, por isso "mit dem Bus" e "seit einem Jahr". Durch, für, gegen, ohne e um pedem sempre o acusativo, por isso "für meine Mutter" e "durch den Park".',
    'Nove preposições de dois casos (Wechselpräpositionen) podem pedir um caso ou o outro: an, auf, hinter, in, neben, über, unter, vor e zwischen. Use o acusativo para movimento em direção a um lugar, que responde a "wohin?", como em "Ich lege das Buch auf den Tisch". Use o dativo para uma posição, que responde a "wo?", como em "Das Buch liegt auf dem Tisch". Os pares de verbos ajudam: legen, stellen e hängen (pendurar algo) costumam ir com o acusativo, e liegen, stehen e hängen (estar pendurado) com o dativo.',
  ],
  items: [
    { q: 'Ich fahre jeden Tag mit ___ Bus zur Arbeit.', options: ['den', 'dem', 'der'], a: 1, why: 'Mit pede sempre o dativo, e der Bus vira dem Bus.' },
    { q: 'Das Geschenk ist für ___ Mutter.', options: ['meine', 'meiner', 'meinem'], a: 0, why: 'Für pede sempre o acusativo, e die Mutter continua meine Mutter.' },
    { q: 'Wir gehen am Abend durch ___ Park.', options: ['dem', 'der', 'den'], a: 2, why: 'Durch pede sempre o acusativo, e der Park vira den Park.' },
    { q: 'Ich lege das Buch auf ___ Tisch.', options: ['den', 'dem', 'der'], a: 0, why: 'Legen descreve movimento para um lugar (wohin?), então auf pede o acusativo: auf den Tisch.' },
    { q: 'Das Buch liegt jetzt auf ___ Tisch.', options: ['den', 'das', 'dem'], a: 2, why: 'Liegen descreve uma posição (wo?), então auf pede o dativo: auf dem Tisch.' },
    { q: 'Die Katze schläft unter ___ Bett.', options: ['das', 'dem', 'den'], a: 1, why: 'Schlafen acontece num lugar só (wo?), então unter pede o dativo, e das Bett vira dem Bett.' },
    { q: 'Er hängt das Bild an ___ Wand.', options: ['der', 'den', 'die'], a: 2, why: 'Hängen com objeto é movimento para um lugar (wohin?), então an pede o acusativo: an die Wand.' },
    { q: 'Seit ___ Jahr lerne ich Deutsch.', options: ['einem', 'ein', 'einen'], a: 0, why: 'Seit pede sempre o dativo, e ein Jahr vira einem Jahr.' },
    { q: 'Ohne ___ Brille kann ich nicht lesen.', options: ['meiner', 'meinem', 'meine'], a: 2, why: 'Ohne pede sempre o acusativo, e die Brille continua meine Brille.' },
    { q: 'Wir sitzen gerade in ___ Küche.', options: ['die', 'der', 'den'], a: 1, why: 'Sitzen descreve uma posição (wo?), então in pede o dativo, e die Küche vira der Küche.' },
    { q: 'Stell die Flaschen bitte in ___ Kühlschrank.', options: ['dem', 'den', 'der'], a: 1, why: 'Stellen é movimento para um lugar (wohin?), então in pede o acusativo: in den Kühlschrank.' },
    { q: 'Am Wochenende wohne ich bei ___ Eltern.', options: ['meine', 'meiner', 'meinen'], a: 2, why: 'Bei pede sempre o dativo, e no dativo plural a terminação é -en: bei meinen Eltern.' },
  ],
  related: ['de-ex-a2', 'de-ex-b2', 'de-quiz-b1'],
};
