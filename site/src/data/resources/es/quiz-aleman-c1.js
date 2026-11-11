// Resource: quiz. German items stay German; explanations are in Spanish.
export default {
  key: 'de-quiz-c1', site: 'es', slug: 'quiz-aleman-c1', kind: 'quiz', course: 'German', level: 'C1',
  draw: 'cactus', tint: 'sun', published: '2026-10-26',
  title: 'Quiz rápido de alemán: diez preguntas de nivel C1',
  metaTitle: 'Quiz de alemán C1 gratis: gramática y vocabulario – Alimun',
  desc: 'Un quiz de alemán gratis de diez preguntas de nivel C1: Konjunktiv I, construcciones de participio, estilo nominal, modismos y conectores avanzados, todo explicado.',
  lead: 'Diez preguntas sobre la gramática y las expresiones que encuentras en el C1. Elige una respuesta para ver por qué es la correcta.',
  instructions: 'Elige la mejor respuesta.',
  about: [
    'El C1 es el nivel en el que lees periódicos, informes y textos académicos sin mucho esfuerzo, te expresas con fluidez y precisión y pasas sin problema del alemán cotidiano al formal.',
    'Este quiz repasa los rasgos de ese registro formal, como el estilo indirecto en Konjunktiv I, las construcciones de participio largas delante del sustantivo y el estilo nominal, junto con modismos frecuentes y conectores que exigen cuidar el orden de las palabras. Cada respuesta viene con una explicación breve.',
  ],
  items: [
    { q: 'Konjunktiv I: Der Sprecher sagte, das Unternehmen ___ keine Pläne für Entlassungen.', options: ['habe', 'hat', 'hätte', 'hatte'], a: 0, why: 'El estilo indirecto formal usa el Konjunktiv I, y para er, sie y es la forma de haben es habe.' },
    { q: 'Die ___ Maßnahmen haben sich bewährt.', options: ['von der Regierung beschlossene', 'von der Regierung beschlossenen', 'beschließend von der Regierung', 'von der Regierung beschlossen'], a: 1, why: 'Una construcción de participio delante del sustantivo lleva la terminación normal del adjetivo, y después del plural die esa terminación es -en.' },
    { q: 'Der seit Jahren ___ Streit wurde endlich beigelegt.', options: ['angedauerte', 'andauernden', 'andauernde', 'angedauerten'], a: 2, why: 'El Partizip I andauernd describe algo que sigue ocurriendo, y después de der en nominativo la terminación es -e.' },
    { q: 'Wir müssen das Problem lösen. Die ___ des Problems hat Vorrang.', options: ['Lösen', 'Gelöstheit', 'Löserei', 'Lösung'], a: 3, why: 'El sustantivo femenino derivado de lösen es die Lösung; das Lösen necesitaría un artículo neutro.' },
    { q: '___ seiner Krankheit hat er den Termin vergessen.', options: ['Trotz', 'Statt', 'Wegen', 'Mangels'], a: 2, why: 'Wegen más genitivo expresa una causa y convierte una oración con weil en un grupo nominal.' },
    { q: 'Das geht mich nichts an. Das ist nicht mein ___.', options: ['Wein', 'Brot', 'Kaffee', 'Bier'], a: 3, why: 'Das ist nicht mein Bier significa eso no es asunto mío.' },
    { q: 'Es hilft nichts, wir müssen in den sauren ___ beißen.', options: ['Apfel', 'Zitrone', 'Gurke', 'Kirsche'], a: 0, why: 'In den sauren Apfel beißen significa hacer algo desagradable porque no queda más remedio.' },
    { q: 'Das stimmt doch nicht! Er hat dir einen ___ aufgebunden.', options: ['Hund', 'Bären', 'Fuchs', 'Wolf'], a: 1, why: 'Jemandem einen Bären aufbinden significa contarle a alguien una trola.' },
    { q: 'Er ist sehr talentiert, ___ fehlt ihm die Erfahrung.', options: ['allerdings', 'obwohl', 'zumal', 'sofern'], a: 0, why: 'El verbo va justo después del hueco, así que solo encaja el adverbio allerdings; obwohl, zumal y sofern mandan el verbo al final.' },
    { q: 'Wir sollten das Angebot annehmen, ___ es nur noch bis Freitag gilt.', options: ['trotzdem', 'zumal', 'dennoch', 'folglich'], a: 1, why: 'Zumal (sobre todo porque) añade una razón más y manda el verbo al final de su oración.' },
  ],
  related: ['de-quiz-b2', 'de-ex-c1', 'de-ex-b2'],
};
