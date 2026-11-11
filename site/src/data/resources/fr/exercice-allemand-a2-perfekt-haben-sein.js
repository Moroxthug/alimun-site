// Resource: exercise. German items stay German; instructions and explanations are in French.
export default {
  key: 'de-ex-a2', site: 'fr', slug: 'exercice-allemand-a2-perfekt-haben-sein', kind: 'exercise', course: 'German', level: 'A2',
  draw: 'pretzel', tint: 'mint', published: '2026-10-26',
  title: "Exercice d'allemand : le Perfekt avec haben ou sein (A2)",
  metaTitle: 'Exercice allemand Perfekt : haben ou sein ? (A2, gratuit) – Alimun',
  desc: "Douze questions gratuites sur le Perfekt allemand pour le niveau A2 : choisis haben ou sein, avec une correction immédiate et chaque réponse expliquée.",
  lead: "Choisis la bonne forme de haben ou de sein pour chaque phrase au Perfekt. Tu vois tout de suite si tu as juste, et pourquoi.",
  instructions: "Choisis le bon auxiliaire.",
  about: [
    "Le Perfekt est le temps du passé que les Allemands utilisent le plus à l'oral. Il a deux parties : une forme de haben ou de sein en deuxième position, et le participe passé à la fin de la proposition, comme dans \"Ich habe Pizza gegessen\" ou \"Ich bin nach Hause gegangen\".",
    "La plupart des verbes se conjuguent avec haben, y compris tous les verbes qui ont un complément d'objet direct. On utilise sein avec les verbes de déplacement d'un endroit à un autre (gehen, fahren, fliegen, kommen), les verbes de changement d'état (aufstehen, einschlafen, wachsen, sterben) et les verbes sein, bleiben et passieren. Si tu peux demander « où ça ? » au sens de « vers où ? », ou si le sujet se retrouve dans un nouvel état, la réponse est en général sein.",
  ],
  items: [
    { q: 'Ich ___ gestern nach Berlin gefahren.', options: ['habe', 'bin', 'hat'], a: 1, why: "Fahren vers une destination est un déplacement d'un endroit à un autre, donc il prend sein : ich bin gefahren." },
    { q: 'Wir ___ zum Mittagessen eine Pizza gegessen.', options: ['haben', 'sind', 'hat'], a: 0, why: "Essen a un complément d'objet direct (eine Pizza), donc il prend haben : wir haben gegessen." },
    { q: 'Anna ___ heute um sieben Uhr aufgestanden.', options: ['hat', 'sind', 'ist'], a: 2, why: "Aufstehen est un changement d'état, de couché à debout, donc il prend sein : sie ist aufgestanden." },
    { q: 'Was ___ denn passiert?', options: ['hat', 'ist', 'haben'], a: 1, why: 'Passieren prend toujours sein au Perfekt : was ist passiert?' },
    { q: 'Mein Opa ___ letztes Jahr gestorben.', options: ['hat', 'haben', 'bist', 'ist'], a: 3, why: "Sterben est un changement d'état, donc il prend sein : er ist gestorben." },
    { q: 'Ich ___ am Sonntag sehr lange geschlafen.', options: ['habe', 'bin', 'hat'], a: 0, why: 'Schlafen décrit un état qui ne change pas, donc il prend haben : ich habe geschlafen.' },
    { q: 'Die Kinder ___ in diesem Jahr schnell gewachsen.', options: ['haben', 'hat', 'sind'], a: 2, why: "Wachsen (grandir) est un changement d'état, donc il prend sein : sie sind gewachsen." },
    { q: 'Wie lange ___ ihr in Spanien geblieben?', options: ['seid', 'habt', 'sind'], a: 0, why: 'Bleiben prend toujours sein, et la forme pour ihr est seid : ihr seid geblieben.' },
    { q: 'Er ___ den Brief noch nicht gelesen.', options: ['ist', 'hat', 'sind'], a: 1, why: "Lesen a un complément d'objet direct (den Brief), donc il prend haben : er hat gelesen." },
    { q: 'Ich ___ noch nie in Japan gewesen.', options: ['habe', 'hat', 'bin'], a: 2, why: 'Sein forme lui-même son Perfekt avec sein : ich bin gewesen.' },
    { q: 'Wann ___ du Lisa kennengelernt?', options: ['hast', 'bist', 'hat'], a: 0, why: "Kennenlernen a un complément d'objet direct (Lisa), donc il prend haben : du hast kennengelernt." },
    { q: 'Der Zug ___ pünktlich in München angekommen.', options: ['hat', 'haben', 'ist', 'sind'], a: 2, why: "Ankommen est un déplacement qui se termine à un endroit, donc il prend sein : der Zug ist angekommen." },
  ],
  related: ['de-articles-a1', 'de-ex-b1', 'de-quiz-a2'],
};
