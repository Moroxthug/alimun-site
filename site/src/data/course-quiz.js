// Level quiz for the course pages: ten fill-in questions per language, two per
// level from A1 to C1, answered in the browser. The first option listed is the
// correct one; the page shuffles the options. The result is an estimate only.
export const QUIZ = {
  English: [
    ['She ___ a teacher.', ['is', 'are', 'am', 'be']],
    ['I ___ coffee every morning.', ['drink', 'drinks', 'drinking', 'am drink']],
    ['Yesterday we ___ to the cinema.', ['went', 'go', 'gone', 'going']],
    ["There isn't ___ milk in the fridge.", ['any', 'some', 'many', 'a']],
    ['If it rains tomorrow, we ___ at home.', ['will stay', 'stay', 'would stay', 'stayed']],
    ["I've lived here ___ 2019.", ['since', 'for', 'from', 'during']],
    ['By the time we arrived, the film ___.', ['had already started', 'already started', 'has already started', 'was already start']],
    ['I wish I ___ more time to travel.', ['had', 'have', 'will have', 'am having']],
    ["It's high time we ___ a decision.", ['made', 'make', 'will make', 'have made']],
    ['Not only ___ late, but he also forgot the tickets.', ['did he arrive', 'he arrived', 'he did arrive', 'arrived he']],
  ],
  German: [
    ['Ich ___ aus Italien.', ['komme', 'kommst', 'kommt', 'kommen']],
    ['Das ist ___ Buch.', ['ein', 'eine', 'einen', 'einer']],
    ['Gestern ___ ich ins Kino gegangen.', ['bin', 'habe', 'war', 'hatte']],
    ['Ich gebe ___ Mann das Geld.', ['dem', 'der', 'den', 'des']],
    ['Ich weiß nicht, ob er morgen ___.', ['kommt', 'kommen', 'komme', 'gekommen']],
    ['Das ist die Frau, ___ ich gestern gesehen habe.', ['die', 'der', 'den', 'deren']],
    ['Wenn ich mehr Zeit ___, würde ich reisen.', ['hätte', 'habe', 'hatte', 'haben']],
    ['Trotz ___ Regens sind wir spazieren gegangen.', ['des', 'der', 'dem', 'den']],
    ['Er tat so, als ___ er nichts gehört.', ['hätte', 'hat', 'habe', 'hatte']],
    ['___ der hohen Kosten wurde das Projekt fortgesetzt.', ['Trotz', 'Wegen', 'Dank', 'Statt']],
  ],
  French: [
    ['Je ___ italien.', ['suis', 'es', 'est', 'sommes']],
    ['Nous ___ à Paris.', ['habitons', 'habitez', 'habitent', 'habite']],
    ['Hier, je ___ allé au cinéma.', ['suis', 'ai', 'étais', 'vais']],
    ["Il n'y a pas ___ pain.", ['de', 'du', 'des', 'le']],
    ["Si j'avais le temps, je ___ plus.", ['voyagerais', 'voyage', 'voyagerai', 'voyageais']],
    ["C'est le livre ___ je t'ai parlé.", ['dont', 'que', 'qui', 'où']],
    ['Il faut que tu ___ tes devoirs.', ['fasses', 'fais', 'feras', 'faisais']],
    ["Bien qu'il ___ fatigué, il est sorti.", ['soit', 'est', 'était', 'sera']],
    ['Si j\'avais su, je ne ___ pas venu.', ['serais', 'suis', 'serai', 'sois']],
    ["Les lettres qu'il a ___ sont arrivées.", ['écrites', 'écrit', 'écrite', 'écrits']],
  ],
  Spanish: [
    ['Yo ___ italiano.', ['soy', 'eres', 'es', 'somos']],
    ['¿Dónde ___ el baño?', ['está', 'es', 'hay', 'están']],
    ['Ayer ___ al cine con mis amigos.', ['fui', 'voy', 'iba', 'iré']],
    ['Me ___ mucho el chocolate.', ['gusta', 'gustan', 'gusto', 'gustas']],
    ['Cuando ___ niño, vivía en Roma.', ['era', 'fui', 'estaba', 'sería']],
    ['Espero que ___ un buen viaje.', ['tengas', 'tienes', 'tendrás', 'tenías']],
    ['Si ___ más dinero, compraría una casa.', ['tuviera', 'tengo', 'tendría', 'tenía']],
    ['Busco un piso que ___ cerca del centro.', ['esté', 'está', 'estará', 'estaba']],
    ['Si me lo hubieras dicho, te ___ ayudado.', ['habría', 'había', 'habré', 'he']],
    ['Por mucho que ___, no lo conseguirás.', ['insistas', 'insistes', 'insistirás', 'insistías']],
  ],
  Portuguese: [
    ['Eu ___ italiano.', ['sou', 'és', 'é', 'somos']],
    ['Ela ___ dois irmãos.', ['tem', 'têm', 'tenho', 'temos']],
    ['Ontem nós ___ ao cinema.', ['fomos', 'vamos', 'íamos', 'iremos']],
    ['Este livro é ___.', ['meu', 'minha', 'meus', 'minhas']],
    ['Quando eu era criança, ___ na praia todos os verões.', ['brincava', 'brinquei', 'brinco', 'brincarei']],
    ['Espero que você ___ bem.', ['esteja', 'está', 'estará', 'estava']],
    ['Se eu ___ mais tempo, aprenderia a tocar piano.', ['tivesse', 'tenho', 'terei', 'tinha']],
    ['Quando ___ tempo, vamos almoçar juntos.', ['tivermos', 'temos', 'teremos', 'tínhamos']],
    ['Embora ___ cansado, continuou a trabalhar.', ['estivesse', 'estava', 'esteja', 'estará']],
    ['Se tivéssemos saído mais cedo, não ___ o voo.', ['teríamos perdido', 'perdíamos', 'tínhamos perdido', 'perderemos']],
  ],
};

// Short description shown with the estimated level (same wording as the levels section).
export const LEVEL_TEXT = {
  A1: "Capisci e usi espressioni quotidiane e frasi molto semplici, sai presentarti e fare domande su informazioni personali, se l'altra persona parla lentamente e con chiarezza.",
  A2: 'Comunichi in situazioni semplici e abituali, come la famiglia, gli acquisti, il lavoro e il luogo in cui vivi, e descrivi con parole semplici il tuo ambiente.',
  B1: 'Te la cavi nella maggior parte delle situazioni che si incontrano in viaggio, racconti esperienze, progetti e desideri e spieghi brevemente le tue opinioni.',
  B2: 'Capisci le idee principali di testi complessi, anche tecnici nel tuo campo, e parli con una scioltezza che rende naturale la conversazione con chi parla la lingua da sempre.',
  C1: 'Usi la lingua in modo flessibile ed efficace per la vita sociale, lo studio e il lavoro, e scrivi testi chiari e ben strutturati su argomenti complessi.',
};
