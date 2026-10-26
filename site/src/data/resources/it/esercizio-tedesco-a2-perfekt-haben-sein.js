// Resource: exercise. German items stay German; instructions and explanations are in Italian.
export default {
  key: 'de-ex-a2', site: 'it', slug: 'esercizio-tedesco-a2-perfekt-haben-sein', kind: 'exercise', course: 'German', level: 'A2',
  draw: 'pretzel', tint: 'mint', published: '2026-10-26',
  title: 'Esercizio di tedesco: Perfekt con haben o sein (A2)',
  metaTitle: 'Esercizi Perfekt tedesco: haben o sein? (A2, gratis) – Alimun',
  desc: 'Dodici domande gratis sul Perfekt tedesco per chi studia al livello A2: scegli haben o sein, con correzione immediata e una spiegazione per ogni risposta.',
  lead: 'Scegli la forma giusta di haben o sein per ogni frase al Perfekt. Vedi subito se hai ragione, e perché.',
  instructions: "Scegli l'ausiliare giusto.",
  about: [
    'Il Perfekt è il passato che i tedeschi usano di più quando parlano. È formato da due parti: una forma di haben o sein in seconda posizione e il participio passato alla fine della frase, come in "Ich habe Pizza gegessen" o "Ich bin nach Hause gegangen".',
    'La maggior parte dei verbi usa haben, compresi tutti i verbi che hanno un complemento oggetto. Sein si usa con i verbi di movimento da un luogo a un altro (gehen, fahren, fliegen, kommen), con i verbi di cambiamento di stato (aufstehen, einschlafen, wachsen, sterben) e con i verbi sein, bleiben e passieren. Se puoi chiedere "verso dove?" oppure il soggetto passa a un nuovo stato, di solito la risposta è sein.',
  ],
  items: [
    { q: 'Ich ___ gestern nach Berlin gefahren.', options: ['habe', 'bin', 'hat'], a: 1, why: 'Fahren verso una destinazione è un movimento da un luogo a un altro, quindi vuole sein: ich bin gefahren.' },
    { q: 'Wir ___ zum Mittagessen eine Pizza gegessen.', options: ['haben', 'sind', 'hat'], a: 0, why: 'Essen ha un complemento oggetto (eine Pizza), quindi usa haben: wir haben gegessen.' },
    { q: 'Anna ___ heute um sieben Uhr aufgestanden.', options: ['hat', 'sind', 'ist'], a: 2, why: 'Aufstehen è un cambiamento di stato, da sdraiati a in piedi, quindi vuole sein: sie ist aufgestanden.' },
    { q: 'Was ___ denn passiert?', options: ['hat', 'ist', 'haben'], a: 1, why: 'Passieren vuole sempre sein al Perfekt: was ist passiert?' },
    { q: 'Mein Opa ___ letztes Jahr gestorben.', options: ['hat', 'haben', 'bist', 'ist'], a: 3, why: 'Sterben è un cambiamento di stato, quindi vuole sein: er ist gestorben.' },
    { q: 'Ich ___ am Sonntag sehr lange geschlafen.', options: ['habe', 'bin', 'hat'], a: 0, why: 'Schlafen descrive uno stato che non cambia, quindi usa haben: ich habe geschlafen.' },
    { q: 'Die Kinder ___ in diesem Jahr schnell gewachsen.', options: ['haben', 'hat', 'sind'], a: 2, why: 'Wachsen (crescere) è un cambiamento di stato, quindi vuole sein: sie sind gewachsen.' },
    { q: 'Wie lange ___ ihr in Spanien geblieben?', options: ['seid', 'habt', 'sind'], a: 0, why: 'Bleiben vuole sempre sein, e la forma per ihr è seid: ihr seid geblieben.' },
    { q: 'Er ___ den Brief noch nicht gelesen.', options: ['ist', 'hat', 'sind'], a: 1, why: 'Lesen ha un complemento oggetto (den Brief), quindi usa haben: er hat gelesen.' },
    { q: 'Ich ___ noch nie in Japan gewesen.', options: ['habe', 'hat', 'bin'], a: 2, why: 'Anche sein forma il suo Perfekt con sein: ich bin gewesen.' },
    { q: 'Wann ___ du Lisa kennengelernt?', options: ['hast', 'bist', 'hat'], a: 0, why: 'Kennenlernen ha un complemento oggetto (Lisa), quindi usa haben: du hast kennengelernt.' },
    { q: 'Der Zug ___ pünktlich in München angekommen.', options: ['hat', 'haben', 'ist', 'sind'], a: 2, why: 'Ankommen è un movimento che finisce in un luogo, quindi vuole sein: der Zug ist angekommen.' },
  ],
  related: ['de-articles-a1', 'de-ex-b1', 'de-quiz-a2'],
};
