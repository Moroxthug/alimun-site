// Resource: exercise. German items stay German; instructions and explanations are in Spanish.
export default {
  key: 'de-ex-b2', site: 'es', slug: 'ejercicio-aleman-b2-declinacion-adjetivos', kind: 'exercise', course: 'German', level: 'B2',
  draw: 'cat', tint: 'coral', published: '2026-10-26',
  title: 'Ejercicio de alemán: declinación del adjetivo (B2)',
  metaTitle: 'Ejercicios declinación de adjetivos en alemán B2 – Alimun',
  desc: 'Doce preguntas gratis sobre las terminaciones del adjetivo alemán después de der, de ein y sin artículo, para el nivel B2, con cada respuesta explicada.',
  lead: 'Elige la terminación correcta del adjetivo en cada frase. Ves al momento si aciertas y por qué.',
  instructions: 'Elige el adjetivo con la terminación correcta.',
  about: [
    'Un adjetivo delante de un sustantivo lleva una terminación que depende de tres cosas: el género del sustantivo, su caso y la palabra que va delante. Después de der, die, das y de palabras como dieser y jeder, el artículo ya indica el género y el caso, así que el adjetivo lleva una terminación débil: -e en el nominativo singular y en el acusativo singular femenino y neutro, y -en en todos los demás casos, como en "der alte Mann" y "dem kleinen Kind".',
    'Sin artículo, el adjetivo tiene que indicar él mismo el género y el caso, y toma la terminación que habría tenido der, die o das: "guter Wein", "kaltes Wasser", "starken Kaffee". Después de ein, kein y posesivos como mein, las terminaciones son débiles salvo en los tres casos en los que ein no tiene terminación propia (nominativo masculino, nominativo y acusativo neutro), donde el adjetivo lleva -er o -es: "ein interessantes Buch", "mein altes Auto".',
  ],
  items: [
    { q: 'Der ___ Mann von nebenan heißt Herr Weber.', options: ['alt', 'alte', 'alten', 'alter'], a: 1, why: 'Después de der en nominativo singular, el adjetivo lleva -e: der alte Mann.' },
    { q: 'Ich habe mir einen ___ Wagen gekauft.', options: ['neuen', 'neue', 'neuer', 'neues'], a: 0, why: 'Der Wagen es aquí masculino en acusativo, y después de einen el adjetivo lleva -en: einen neuen Wagen.' },
    { q: 'Das ist ein sehr ___ Buch.', options: ['interessante', 'interessanter', 'interessanten', 'interessantes'], a: 3, why: 'Ein no tiene terminación en el nominativo neutro, así que el adjetivo lo indica con -es: ein interessantes Buch.' },
    { q: 'Morgens trinke ich gern ___ Kaffee.', options: ['starker', 'starken', 'starke', 'starkes'], a: 1, why: 'Sin artículo, el adjetivo toma la terminación del artículo, y el acusativo masculino es den, así que starken Kaffee.' },
    { q: 'Mit ___ Grüßen, Ihre Maria Schmidt', options: ['freundliche', 'freundlicher', 'freundlichen'], a: 2, why: 'Mit rige dativo, y sin artículo la terminación del dativo plural es -en: mit freundlichen Grüßen.' },
    { q: 'Sie wohnt in einer ___ Wohnung im Zentrum.', options: ['kleiner', 'kleinen', 'kleine'], a: 1, why: 'Wohnen in describe una posición, así que se usa el dativo, y después de einer el adjetivo lleva -en: in einer kleinen Wohnung.' },
    { q: 'Das ___ Wetter gefällt mir.', options: ['schön', 'schönes', 'schöne', 'schönen'], a: 2, why: 'Después de das en nominativo singular, el adjetivo lleva -e: das schöne Wetter.' },
    { q: '___ Wasser ist im Sommer besonders gut.', options: ['Kaltes', 'Kalte', 'Kalten', 'Kalter'], a: 0, why: 'Sin artículo, el adjetivo toma la terminación de das, así que un sustantivo neutro en nominativo lleva -es: kaltes Wasser.' },
    { q: 'Ich gebe dem ___ Kind ein Eis.', options: ['kleine', 'kleinen', 'kleines'], a: 1, why: 'Después de dem, en dativo, el adjetivo lleva siempre -en: dem kleinen Kind.' },
    { q: 'Das ist der Hund meines ___ Bruders.', options: ['jüngere', 'jüngerer', 'jüngeren'], a: 2, why: 'En genitivo, después de meines, el adjetivo lleva -en: meines jüngeren Bruders.' },
    { q: '___ Wein ist nicht immer teuer.', options: ['Gute', 'Guter', 'Guten', 'Gutes'], a: 1, why: 'Sin artículo, el adjetivo toma la terminación de der, así que un sustantivo masculino en nominativo lleva -er: guter Wein.' },
    { q: 'Mein ___ Auto ist schon wieder kaputt.', options: ['alte', 'alten', 'altes'], a: 2, why: 'Mein no tiene terminación en el nominativo neutro, así que el adjetivo lo indica con -es: mein altes Auto.' },
  ],
  related: ['de-ex-b1', 'de-ex-c1', 'de-quiz-b2'],
};
