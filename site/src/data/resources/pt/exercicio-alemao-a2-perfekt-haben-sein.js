// Resource: exercise. German items stay German; instructions and explanations are in Portuguese.
export default {
  key: 'de-ex-a2', site: 'pt', slug: 'exercicio-alemao-a2-perfekt-haben-sein', kind: 'exercise', course: 'German', level: 'A2',
  draw: 'pretzel', tint: 'mint', published: '2026-10-26',
  title: 'Exercício de alemão: Perfekt com haben ou sein (A2)',
  metaTitle: 'Exercício de alemão Perfekt: haben ou sein? (A2, grátis) – Alimun',
  desc: 'Doze perguntas grátis sobre o Perfekt em alemão para o nível A2: escolha haben ou sein, com correção na hora e uma explicação para cada resposta.',
  lead: 'Escolha a forma certa de haben ou sein para cada frase no Perfekt. Você vê na hora se acertou e por quê.',
  instructions: 'Escolha o verbo auxiliar certo.',
  about: [
    'O Perfekt é o tempo passado que os alemães mais usam na conversa. Ele tem duas partes: uma forma de haben ou sein na segunda posição e o particípio passado no final da oração, como em "Ich habe Pizza gegessen" ou "Ich bin nach Hause gegangen".',
    'A maioria dos verbos usa haben, incluindo todos os que pedem objeto direto. Sein é usado com verbos de deslocamento de um lugar para outro (gehen, fahren, fliegen, kommen), verbos de mudança de estado (aufstehen, einschlafen, wachsen, sterben) e os verbos sein, bleiben e passieren. Se dá para perguntar "para onde?" ou se o sujeito termina num estado novo, a resposta costuma ser sein.',
  ],
  items: [
    { q: 'Ich ___ gestern nach Berlin gefahren.', options: ['habe', 'bin', 'hat'], a: 1, why: 'Fahren para um destino é deslocamento de um lugar para outro, então pede sein: ich bin gefahren.' },
    { q: 'Wir ___ zum Mittagessen eine Pizza gegessen.', options: ['haben', 'sind', 'hat'], a: 0, why: 'Essen pede objeto direto (eine Pizza), então usa haben: wir haben gegessen.' },
    { q: 'Anna ___ heute um sieben Uhr aufgestanden.', options: ['hat', 'sind', 'ist'], a: 2, why: 'Aufstehen é uma mudança de estado, de deitado para de pé, então pede sein: sie ist aufgestanden.' },
    { q: 'Was ___ denn passiert?', options: ['hat', 'ist', 'haben'], a: 1, why: 'Passieren sempre pede sein no Perfekt: was ist passiert?' },
    { q: 'Mein Opa ___ letztes Jahr gestorben.', options: ['hat', 'haben', 'bist', 'ist'], a: 3, why: 'Sterben é uma mudança de estado, então pede sein: er ist gestorben.' },
    { q: 'Ich ___ am Sonntag sehr lange geschlafen.', options: ['habe', 'bin', 'hat'], a: 0, why: 'Schlafen descreve um estado que não muda, então usa haben: ich habe geschlafen.' },
    { q: 'Die Kinder ___ in diesem Jahr schnell gewachsen.', options: ['haben', 'hat', 'sind'], a: 2, why: 'Wachsen (crescer) é uma mudança de estado, então pede sein: sie sind gewachsen.' },
    { q: 'Wie lange ___ ihr in Spanien geblieben?', options: ['seid', 'habt', 'sind'], a: 0, why: 'Bleiben sempre pede sein, e a forma para ihr é seid: ihr seid geblieben.' },
    { q: 'Er ___ den Brief noch nicht gelesen.', options: ['ist', 'hat', 'sind'], a: 1, why: 'Lesen pede objeto direto (den Brief), então usa haben: er hat gelesen.' },
    { q: 'Ich ___ noch nie in Japan gewesen.', options: ['habe', 'hat', 'bin'], a: 2, why: 'O próprio sein forma o Perfekt com sein: ich bin gewesen.' },
    { q: 'Wann ___ du Lisa kennengelernt?', options: ['hast', 'bist', 'hat'], a: 0, why: 'Kennenlernen pede objeto direto (Lisa), então usa haben: du hast kennengelernt.' },
    { q: 'Der Zug ___ pünktlich in München angekommen.', options: ['hat', 'haben', 'ist', 'sind'], a: 2, why: 'Ankommen é um deslocamento que termina num lugar, então pede sein: der Zug ist angekommen.' },
  ],
  related: ['de-articles-a1', 'de-ex-b1', 'de-quiz-a2'],
};
