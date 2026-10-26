// Resource: exercise. German items stay German; instructions and explanations are in Italian.
export default {
  key: 'de-ex-c1', site: 'it', slug: 'esercizio-tedesco-c1-konjunktiv', kind: 'exercise', course: 'German', level: 'C1',
  draw: 'dragon', tint: 'lime', published: '2026-10-26',
  title: 'Esercizio di tedesco: Konjunktiv II e Konjunktiv I (C1)',
  metaTitle: 'Esercizi Konjunktiv tedesco: discorso indiretto (C1) – Alimun',
  desc: 'Dodici domande gratis sul Konjunktiv II e sul Konjunktiv I nel discorso indiretto, per il tedesco di livello C1, con correzione immediata e ogni risposta spiegata.',
  lead: 'Scegli la forma giusta del congiuntivo in ogni frase. Vedi subito se hai ragione, e perché.',
  instructions: 'Scegli la forma giusta del verbo.',
  about: [
    "Il Konjunktiv II esprime ciò che è irreale, ipotetico o cortese: desideri, condizioni e consigli. Si forma dal Präteritum, spesso con l'Umlaut (hätte, wäre, käme), oppure con würde più l'infinito per la maggior parte dei verbi regolari. Per il passato si usa hätte o wäre con il participio passato: \"Wenn ich das gewusst hätte, wäre ich gekommen.\"",
    "Il Konjunktiv I segnala il discorso indiretto nel tedesco scritto, soprattutto nelle notizie e nei testi formali. Si forma dalla radice dell'infinito più -e, quindi la terza persona singolare è la forma che vedi più spesso: er habe, sie komme, es sei. Quando una forma del Konjunktiv I è identica all'indicativo, come sie haben o sie werden, il tedesco standard la sostituisce con il Konjunktiv II: \"Sie sagten, sie hätten keine Zeit.\"",
  ],
  items: [
    { q: 'Wenn ich mehr Zeit ___, würde ich öfter reisen.', options: ['habe', 'hätte', 'hatte'], a: 1, why: 'Una condizione irreale nel presente usa il Konjunktiv II: wenn ich mehr Zeit hätte.' },
    { q: 'Der Minister sagte, er ___ von dem Plan nichts gewusst.', options: ['sei', 'habe', 'wäre'], a: 1, why: 'Il discorso indiretto usa il Konjunktiv I, e wissen forma il passato con haben: er habe gewusst.' },
    { q: 'Die Sprecherin erklärte, das Unternehmen ___ an einer Lösung.', options: ['arbeiten', 'arbeitete', 'arbeite'], a: 2, why: 'Nel discorso indiretto la terza persona singolare del Konjunktiv I finisce in -e: das Unternehmen arbeite.' },
    { q: 'Die Nachbarn sagten, sie ___ am Wochenende keine Zeit.', options: ['hätten', 'habe', 'hätte', 'hatten'], a: 0, why: "La forma del Konjunktiv I sie haben è uguale all'indicativo, quindi si sostituisce con il Konjunktiv II: sie hätten." },
    { q: 'Wenn ich du ___, würde ich das Angebot annehmen.', options: ['bin', 'sei', 'war', 'wäre'], a: 3, why: 'Un consiglio dato come condizione irreale usa il Konjunktiv II di sein: wenn ich du wäre.' },
    { q: 'Hätte ich das nur früher ___!', options: ['wissen', 'gewusst', 'gewissen'], a: 1, why: 'Un desiderio sul passato usa hätte con il participio passato, e il participio di wissen è gewusst.' },
    { q: 'Er tut so, als ___ er hier der Chef.', options: ['ist', 'war', 'wäre'], a: 2, why: 'Dopo als seguito subito dal verbo, un paragone con qualcosa di irreale vuole il congiuntivo: als wäre er der Chef.' },
    { q: 'Wenn der Zug pünktlich gewesen ___, hätten wir den Anschluss erreicht.', options: ['wäre', 'hätte', 'ist'], a: 0, why: 'Una condizione irreale nel passato usa il Konjunktiv II, e sein forma il passato con sein: wenn er gewesen wäre.' },
    { q: 'Die Polizei teilte mit, der Verdächtige ___ sich in Haft.', options: ['befinde', 'befinden', 'befänden'], a: 0, why: 'Il discorso indiretto usa il Konjunktiv I, e il soggetto singolare vuole la forma in -e: er befinde sich.' },
    { q: 'Er meinte, er ___ morgen wieder ins Büro.', options: ['kommen', 'komme', 'kämen'], a: 1, why: 'Il discorso indiretto usa il Konjunktiv I, e la terza persona singolare è er komme.' },
    { q: 'Sie sagte, die Kollegen ___ morgen pünktlich kommen.', options: ['werde', 'wurden', 'würden'], a: 2, why: "La forma del Konjunktiv I sie werden è uguale all'indicativo, quindi si sostituisce con il Konjunktiv II: sie würden kommen." },
    { q: 'Die Firma behauptet, ihre Produkte ___ umweltfreundlich.', options: ['seid', 'seien', 'sein', 'sei'], a: 1, why: "Il discorso indiretto usa il Konjunktiv I, e il plurale di sein è seien, che si distingue bene dall'indicativo sind." },
  ],
  related: ['de-ex-b2', 'de-ex-b1', 'de-quiz-c1'],
};
