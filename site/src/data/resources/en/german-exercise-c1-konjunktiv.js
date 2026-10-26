// Resource: exercise. German items stay German; instructions and explanations are in the reader's language.
export default {
  key: 'de-ex-c1', site: 'en', slug: 'german-exercise-c1-konjunktiv', kind: 'exercise', course: 'German', level: 'C1',
  draw: 'dragon', tint: 'lime', published: '2026-10-26',
  title: 'German exercise: Konjunktiv II and Konjunktiv I (C1)',
  metaTitle: 'German Konjunktiv exercise: reported speech (C1) – Alimun',
  desc: 'Twelve free questions on Konjunktiv II and Konjunktiv I in reported speech for C1 learners of German, with instant feedback and an explanation for every answer.',
  lead: 'Choose the right subjunctive form for each sentence. You see straight away if you are right, and why.',
  instructions: 'Choose the right form of the verb.',
  about: [
    'Konjunktiv II expresses what is unreal, hypothetical or polite: wishes, conditions and advice. It is built from the simple past, often with an umlaut (hätte, wäre, käme), or with würde plus the infinitive for most regular verbs. For the past, use hätte or wäre with the past participle: "Wenn ich das gewusst hätte, wäre ich gekommen."',
    'Konjunktiv I marks reported speech in written German, especially in news and formal texts. It is built from the infinitive stem plus -e, so the third person singular is the form you see most: er habe, sie komme, es sei. When a Konjunktiv I form looks exactly like the indicative, as with sie haben or sie werden, standard German replaces it with Konjunktiv II: "Sie sagten, sie hätten keine Zeit."',
  ],
  items: [
    { q: 'Wenn ich mehr Zeit ___, würde ich öfter reisen.', options: ['habe', 'hätte', 'hatte'], a: 1, why: 'An unreal condition in the present uses Konjunktiv II: wenn ich mehr Zeit hätte.' },
    { q: 'Der Minister sagte, er ___ von dem Plan nichts gewusst.', options: ['sei', 'habe', 'wäre'], a: 1, why: 'Reported speech uses Konjunktiv I, and wissen forms its past with haben: er habe gewusst.' },
    { q: 'Die Sprecherin erklärte, das Unternehmen ___ an einer Lösung.', options: ['arbeiten', 'arbeitete', 'arbeite'], a: 2, why: 'In reported speech the third person singular of Konjunktiv I ends in -e: das Unternehmen arbeite.' },
    { q: 'Die Nachbarn sagten, sie ___ am Wochenende keine Zeit.', options: ['hätten', 'habe', 'hätte', 'hatten'], a: 0, why: 'The Konjunktiv I form sie haben looks like the indicative, so it is replaced with Konjunktiv II: sie hätten.' },
    { q: 'Wenn ich du ___, würde ich das Angebot annehmen.', options: ['bin', 'sei', 'war', 'wäre'], a: 3, why: 'Advice given as an unreal condition uses Konjunktiv II of sein: wenn ich du wäre.' },
    { q: 'Hätte ich das nur früher ___!', options: ['wissen', 'gewusst', 'gewissen'], a: 1, why: 'A wish about the past uses hätte with the past participle, and the participle of wissen is gewusst.' },
    { q: 'Er tut so, als ___ er hier der Chef.', options: ['ist', 'war', 'wäre'], a: 2, why: 'After als with the verb straight after it, a comparison with something unreal needs the subjunctive: als wäre er der Chef.' },
    { q: 'Wenn der Zug pünktlich gewesen ___, hätten wir den Anschluss erreicht.', options: ['wäre', 'hätte', 'ist'], a: 0, why: 'An unreal condition in the past uses Konjunktiv II, and sein forms its past with sein: wenn er gewesen wäre.' },
    { q: 'Die Polizei teilte mit, der Verdächtige ___ sich in Haft.', options: ['befinde', 'befinden', 'befänden'], a: 0, why: 'Reported speech uses Konjunktiv I, and the singular subject needs the form ending in -e: er befinde sich.' },
    { q: 'Er meinte, er ___ morgen wieder ins Büro.', options: ['kommen', 'komme', 'kämen'], a: 1, why: 'Reported speech uses Konjunktiv I, and the third person singular is er komme.' },
    { q: 'Sie sagte, die Kollegen ___ morgen pünktlich kommen.', options: ['werde', 'wurden', 'würden'], a: 2, why: 'The Konjunktiv I form sie werden looks like the indicative, so it is replaced with Konjunktiv II: sie würden kommen.' },
    { q: 'Die Firma behauptet, ihre Produkte ___ umweltfreundlich.', options: ['seid', 'seien', 'sein', 'sei'], a: 1, why: 'Reported speech uses Konjunktiv I, and the plural of sein is seien, which differs clearly from the indicative sind.' },
  ],
  related: ['de-ex-b2', 'de-ex-b1', 'de-quiz-c1'],
};
