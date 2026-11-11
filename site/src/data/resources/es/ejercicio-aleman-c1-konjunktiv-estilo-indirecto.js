// Resource: exercise. German items stay German; instructions and explanations are in Spanish.
export default {
  key: 'de-ex-c1', site: 'es', slug: 'ejercicio-aleman-c1-konjunktiv-estilo-indirecto', kind: 'exercise', course: 'German', level: 'C1',
  draw: 'dragon', tint: 'lime', published: '2026-10-26',
  title: 'Ejercicio de alemán: Konjunktiv II y Konjunktiv I (C1)',
  metaTitle: 'Ejercicios Konjunktiv alemán: estilo indirecto (C1) – Alimun',
  desc: 'Doce preguntas gratis sobre el Konjunktiv II y el Konjunktiv I en estilo indirecto para el nivel C1 de alemán, con corrección inmediata y cada respuesta explicada.',
  lead: 'Elige la forma de subjuntivo correcta en cada frase. Ves al momento si aciertas y por qué.',
  instructions: 'Elige la forma correcta del verbo.',
  about: [
    'El Konjunktiv II expresa lo irreal, lo hipotético y lo cortés: deseos, condiciones y consejos. Se forma a partir del Präteritum, a menudo con Umlaut (hätte, wäre, käme), o con würde más el infinitivo en la mayoría de los verbos regulares. Para el pasado se usa hätte o wäre con el participio: "Wenn ich das gewusst hätte, wäre ich gekommen."',
    'El Konjunktiv I marca el estilo indirecto en el alemán escrito, sobre todo en las noticias y en los textos formales. Se forma con la raíz del infinitivo más -e, así que la tercera persona del singular es la forma que más se ve: er habe, sie komme, es sei. Cuando una forma de Konjunktiv I coincide con el indicativo, como en sie haben o sie werden, el alemán estándar la sustituye por el Konjunktiv II: "Sie sagten, sie hätten keine Zeit."',
  ],
  items: [
    { q: 'Wenn ich mehr Zeit ___, würde ich öfter reisen.', options: ['habe', 'hätte', 'hatte'], a: 1, why: 'Una condición irreal en el presente usa el Konjunktiv II: wenn ich mehr Zeit hätte.' },
    { q: 'Der Minister sagte, er ___ von dem Plan nichts gewusst.', options: ['sei', 'habe', 'wäre'], a: 1, why: 'El estilo indirecto usa el Konjunktiv I, y wissen forma su pasado con haben: er habe gewusst.' },
    { q: 'Die Sprecherin erklärte, das Unternehmen ___ an einer Lösung.', options: ['arbeiten', 'arbeitete', 'arbeite'], a: 2, why: 'En estilo indirecto, la tercera persona del singular del Konjunktiv I acaba en -e: das Unternehmen arbeite.' },
    { q: 'Die Nachbarn sagten, sie ___ am Wochenende keine Zeit.', options: ['hätten', 'habe', 'hätte', 'hatten'], a: 0, why: 'La forma de Konjunktiv I sie haben coincide con el indicativo, así que se sustituye por el Konjunktiv II: sie hätten.' },
    { q: 'Wenn ich du ___, würde ich das Angebot annehmen.', options: ['bin', 'sei', 'war', 'wäre'], a: 3, why: 'Un consejo expresado como condición irreal usa el Konjunktiv II de sein: wenn ich du wäre.' },
    { q: 'Hätte ich das nur früher ___!', options: ['wissen', 'gewusst', 'gewissen'], a: 1, why: 'Un deseo sobre el pasado usa hätte con el participio, y el participio de wissen es gewusst.' },
    { q: 'Er tut so, als ___ er hier der Chef.', options: ['ist', 'war', 'wäre'], a: 2, why: 'Después de als con el verbo justo detrás, una comparación con algo irreal necesita el subjuntivo: als wäre er der Chef.' },
    { q: 'Wenn der Zug pünktlich gewesen ___, hätten wir den Anschluss erreicht.', options: ['wäre', 'hätte', 'ist'], a: 0, why: 'Una condición irreal en el pasado usa el Konjunktiv II, y sein forma su pasado con sein: wenn er gewesen wäre.' },
    { q: 'Die Polizei teilte mit, der Verdächtige ___ sich in Haft.', options: ['befinde', 'befinden', 'befänden'], a: 0, why: 'El estilo indirecto usa el Konjunktiv I, y el sujeto en singular necesita la forma acabada en -e: er befinde sich.' },
    { q: 'Er meinte, er ___ morgen wieder ins Büro.', options: ['kommen', 'komme', 'kämen'], a: 1, why: 'El estilo indirecto usa el Konjunktiv I, y la tercera persona del singular es er komme.' },
    { q: 'Sie sagte, die Kollegen ___ morgen pünktlich kommen.', options: ['werde', 'wurden', 'würden'], a: 2, why: 'La forma de Konjunktiv I sie werden coincide con el indicativo, así que se sustituye por el Konjunktiv II: sie würden kommen.' },
    { q: 'Die Firma behauptet, ihre Produkte ___ umweltfreundlich.', options: ['seid', 'seien', 'sein', 'sei'], a: 1, why: 'El estilo indirecto usa el Konjunktiv I, y el plural de sein es seien, que se distingue claramente del indicativo sind.' },
  ],
  related: ['de-ex-b2', 'de-ex-b1', 'de-quiz-c1'],
};
