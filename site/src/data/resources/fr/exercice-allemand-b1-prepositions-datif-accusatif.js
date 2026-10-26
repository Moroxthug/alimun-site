// Resource: exercise. German items stay German; instructions and explanations are in French.
export default {
  key: 'de-ex-b1', site: 'fr', slug: 'exercice-allemand-b1-prepositions-datif-accusatif', kind: 'exercise', course: 'German', level: 'B1',
  draw: 'owl', tint: 'sun', published: '2026-10-26',
  title: "Exercice d'allemand : prépositions avec datif ou accusatif (B1)",
  metaTitle: 'Exercice allemand prépositions : datif ou accusatif (B1) – Alimun',
  desc: "Douze questions gratuites sur les prépositions allemandes pour le niveau B1, prépositions mixtes comprises, avec correction immédiate et chaque réponse expliquée.",
  lead: "Choisis le bon article ou la bonne terminaison après chaque préposition. Tu vois tout de suite si tu as juste, et pourquoi.",
  instructions: 'Choisis la bonne forme après la préposition.',
  about: [
    "En allemand, chaque préposition impose le cas du nom qui la suit. Aus, bei, mit, nach, seit, von et zu sont toujours suivies du datif : \"mit dem Bus\" et \"seit einem Jahr\". Durch, für, gegen, ohne et um sont toujours suivies de l'accusatif : \"für meine Mutter\" et \"durch den Park\".",
    "Neuf prépositions mixtes (Wechselpräpositionen) peuvent prendre les deux cas : an, auf, hinter, in, neben, über, unter, vor et zwischen. On utilise l'accusatif pour un mouvement vers un lieu, qui répond à « wohin? », comme dans \"Ich lege das Buch auf den Tisch\". On utilise le datif pour une position, qui répond à « wo? », comme dans \"Das Buch liegt auf dem Tisch\". Les paires de verbes aident : legen, stellen et hängen (accrocher quelque chose) vont en général avec l'accusatif, liegen, stehen et hängen (être accroché) avec le datif.",
  ],
  items: [
    { q: 'Ich fahre jeden Tag mit ___ Bus zur Arbeit.', options: ['den', 'dem', 'der'], a: 1, why: 'Mit est toujours suivi du datif, et der Bus devient dem Bus.' },
    { q: 'Das Geschenk ist für ___ Mutter.', options: ['meine', 'meiner', 'meinem'], a: 0, why: "Für est toujours suivi de l'accusatif, et die Mutter reste meine Mutter." },
    { q: 'Wir gehen am Abend durch ___ Park.', options: ['dem', 'der', 'den'], a: 2, why: "Durch est toujours suivi de l'accusatif, et der Park devient den Park." },
    { q: 'Ich lege das Buch auf ___ Tisch.', options: ['den', 'dem', 'der'], a: 0, why: "Legen décrit un mouvement vers un lieu (wohin?), donc auf prend l'accusatif : auf den Tisch." },
    { q: 'Das Buch liegt jetzt auf ___ Tisch.', options: ['den', 'das', 'dem'], a: 2, why: 'Liegen décrit une position (wo?), donc auf prend le datif : auf dem Tisch.' },
    { q: 'Die Katze schläft unter ___ Bett.', options: ['das', 'dem', 'den'], a: 1, why: "Schlafen se passe à un endroit (wo?), donc unter prend le datif, et das Bett devient dem Bett." },
    { q: 'Er hängt das Bild an ___ Wand.', options: ['der', 'den', 'die'], a: 2, why: "Hängen avec un complément est un mouvement vers un lieu (wohin?), donc an prend l'accusatif : an die Wand." },
    { q: 'Seit ___ Jahr lerne ich Deutsch.', options: ['einem', 'ein', 'einen'], a: 0, why: 'Seit est toujours suivi du datif, et ein Jahr devient einem Jahr.' },
    { q: 'Ohne ___ Brille kann ich nicht lesen.', options: ['meiner', 'meinem', 'meine'], a: 2, why: "Ohne est toujours suivi de l'accusatif, et die Brille reste meine Brille." },
    { q: 'Wir sitzen gerade in ___ Küche.', options: ['die', 'der', 'den'], a: 1, why: 'Sitzen décrit une position (wo?), donc in prend le datif, et die Küche devient der Küche.' },
    { q: 'Stell die Flaschen bitte in ___ Kühlschrank.', options: ['dem', 'den', 'der'], a: 1, why: "Stellen est un mouvement vers un lieu (wohin?), donc in prend l'accusatif : in den Kühlschrank." },
    { q: 'Am Wochenende wohne ich bei ___ Eltern.', options: ['meine', 'meiner', 'meinen'], a: 2, why: 'Bei est toujours suivi du datif, et au datif pluriel la terminaison est -en : bei meinen Eltern.' },
  ],
  related: ['de-ex-a2', 'de-ex-b2', 'de-quiz-b1'],
};
