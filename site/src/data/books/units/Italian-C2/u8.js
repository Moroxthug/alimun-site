// Italian C2, unit 8 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u8',
  title: 'Literature and criticism',
  goal: 'Read literary Italian closely and write about it. Learn figurative language, narrative voice and tone, and how to write an analisi del testo.',
  art: 'owl',
  tags: { skills: ['reading', 'writing', 'vocabulary'], topics: ['figurative language', 'narrative voice', 'tone', 'irony', 'literary analysis'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Metafora, similitudine, simbolo',
      about: 'Recognise figurative language and say what it does for the reader.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Writers say one thing to suggest another. **La metafora** says one thing *is* another: *Il tempo è un fiume.* **La similitudine** compares with *come*, *simile a* or *sembra*: *Il tempo scorre come un fiume.* **La personificazione** gives human qualities to a thing: *La città dormiva.* **Il simbolo** is an object that stands for an idea: a *porta chiusa* may stand for a lost chance. **Le immagini** (*imagery*) are the pictures the words draw in the mind: a *cielo di piombo* is heavy and grey.' },
          { t: 'table', caption: 'Figurative language', explain: ['head', 'col0'], head: ['Figure', 'What it does', 'Example'], rows: [
            ['metafora', 'says one thing is another', 'La vita è un viaggio.'],
            ['similitudine', 'compares with come or simile a', 'Era silenzioso come un gatto.'],
            ['personificazione', 'gives human qualities to a thing', 'Il vento sussurrava tra gli alberi.'],
            ['simbolo', 'an object that stands for an idea', 'La porta chiusa era il simbolo di un’occasione perduta.'],
            ['immagine', 'a picture made of words', 'Un cielo di piombo.'],
          ] },
        ],
        [
          { t: 'text', md: 'Naming a figure is only the first step. The second step is to say **what it does** for the reader. A *cielo di piombo* does not only describe a colour; it makes the reader feel the **weight** of the day. A *porta chiusa* does not only describe a door; it suggests a **regret**. In a good analysis, we write: *La metafora… suggerisce…*, *Questa immagine crea un senso di…*, *Il simbolo rappresenta…*.' },
          { t: 'tip', art: 'owl', md: 'Always connect the **figure** to its **effect**. Do not write *C’è una metafora.* Write *La metafora del fiume suggerisce che il tempo scorre senza ritorno.*' },
          { t: 'ex', kind: 'sort', h: 'Metaphor or simile?', groups: ['metafora', 'similitudine'], explain: ['groups'], items: [
            { s: 'La vita è un viaggio.', g: 0, why: 'One thing *is* another.' },
            { s: 'Correva come il vento.', g: 1, why: 'A comparison with *come*.' },
            { s: 'Il silenzio era un muro.', g: 0, why: 'A metaphor.' },
            { s: 'I suoi occhi sembravano due stelle.', g: 1, why: 'A comparison with *sembrare*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Name the figure.', items: [
            { q: '“Il vento sussurrava tra gli alberi.”', o: ['personificazione', 'similitudine', 'simbolo'], why: 'The wind is given a human action.' },
            { q: '“Un cielo di piombo.”', o: ['immagine', 'similitudine', 'anafora'], why: 'A picture made of words.' },
            { q: '“La porta chiusa era il simbolo di un’occasione perduta.”', o: ['simbolo', 'similitudine', 'personificazione'], why: 'An object stands for an idea.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Turn the simile into a metaphor, using the words given.', items: [
            { q: 'Il tempo scorre come un fiume.', cue: 'Il tempo è', a: ['Il tempo è un fiume.'], why: 'A metaphor drops *come* and says one thing is another.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Voce narrante, tono, ironia',
      about: 'See who tells the story and in what tone.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'Every story has a **narrator** (*voce narrante*). In the **first person** (*io*), the narrator is a character and knows only what they have seen: *Quella sera non capii che cosa stava succedendo.* In the **third person**, the narrator is outside the story: *Quella sera Anna non capì che cosa stava succedendo.* An **omniscient** narrator knows everything, even what the characters think. An **unreliable narrator** may lie, forget or misunderstand, so the reader must question what they say.' },
          { t: 'table', caption: 'Narrative voice', explain: ['head', 'col0'], head: ['Voice', 'What the reader gets', 'Example'], rows: [
            ['first person', 'one view, close and personal', 'Non capii che cosa stava succedendo.'],
            ['third person', 'a view from outside', 'Anna non capì che cosa stava succedendo.'],
            ['omniscient', 'access to every mind', 'Anna temeva il peggio; Marco, invece, sperava.'],
            ['unreliable', 'a voice that may mislead', 'Io non ho mai mentito, ve lo giuro.'],
          ] },
        ],
        [
          { t: 'text', md: '**Il tono** (tone) is the writer’s attitude: *serio, nostalgico, ironico, malinconico, distaccato*. **L’ironia** says one thing and means another: *Che bella giornata!*, said in the rain. It can also be a gap between what the characters believe and what the reader knows. To judge tone, look at **word choice** (*gelido* versus *fresco*), **rhythm** (short sentences feel tense) and **register** (a very formal word in a trivial situation can be funny).' },
          { t: 'tip', art: 'ghost', md: 'To decide whether a narrator is reliable, ask: **does the narrator contradict themselves? Do other characters see things differently? Does the narrator defend themselves too much?** If so, the voice may be unreliable.' },
          { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
            { q: '“Quella sera non capii che cosa stava succedendo.” La voce narrante è ___.', o: ['in prima persona', 'in terza persona', 'onnisciente'], why: '*Capii* shows the narrator is a character.' },
            { q: '“Che bella giornata!” — detto sotto la pioggia battente — è un esempio di ___.', o: ['ironia', 'simbolo', 'personificazione'], why: 'Saying the opposite of what is meant.' },
            { q: 'Un narratore che si contraddice e si difende troppo può essere ___.', o: ['inattendibile', 'onnisciente', 'neutrale'], why: 'An unreliable narrator.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Which tone?', groups: ['serio', 'ironico'], explain: ['groups'], items: [
            { s: 'Il ministro, con la consueta lucidità, dimenticò il discorso a casa.', g: 1, why: '“Con la consueta lucidità” is ironic here.' },
            { s: 'La notizia della sua morte ci colpì profondamente.', g: 0, why: 'Serious.' },
            { s: 'Che splendido servizio: solo due ore di attesa!', g: 1, why: 'Ironic praise.' },
            { s: 'Il tribunale ha emesso la sentenza questa mattina.', g: 0, why: 'Neutral and serious.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite in the third person, using the words given.', items: [
            { q: 'Quella sera non capii che cosa stava succedendo.', cue: 'Quella sera Anna', a: ['Quella sera Anna non capì che cosa stava succedendo.'], why: 'First person *capii* becomes third person *capì*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Scrivere un’analisi del testo',
      about: 'Structure a short analysis and quote with care.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'An **analisi del testo** has three parts. The **introduzione** names the text, its subject and your main idea: *Il brano racconta… e mostra che…* The **sviluppo** has two or three paragraphs, each with one point, a short **quotation** and an explanation of its effect. The **conclusione** brings the points together and answers the question: *In conclusione, l’autore… e così…* Do not retell the story; **analyse** how it is told.' },
          { t: 'table', caption: 'Structure of an analysis', explain: ['head', 'col0'], head: ['Part', 'What it does', 'Example opening'], rows: [
            ['introduzione', 'names the text and states the main idea', 'Il brano racconta un ritorno e mostra che…'],
            ['sviluppo', 'one point per paragraph, with a quotation', 'In primo luogo, la metafora del fiume suggerisce che…'],
            ['conclusione', 'brings the points together', 'In conclusione, l’autore usa… per…'],
          ] },
        ],
        [
          { t: 'text', md: 'Quote **briefly**. Put the words between **guillemets** («…») and explain them: *Quando scrive «una casa senza voci», l’autore suggerisce un senso di abbandono.* Use a **reporting verb** (*suggerisce, mostra, sottolinea, crea, evoca*) and a **cautious** tone (*sembra, può indicare*). Avoid *mi piace* and *è bello*: say instead *è efficace perché…*' },
          { t: 'tip', art: 'cactus', md: 'Use the formula **quotation, then effect**. First show the words (*«una casa senza voci»*), then say what they do (*crea un senso di abbandono*). A quotation with no comment is not an analysis.' },
          { t: 'ex', kind: 'choice', h: 'Choose the best option.', items: [
            { q: 'Which sentence is the best analysis?', o: ['Quando scrive «una casa senza voci», l’autore crea un senso di abbandono.', 'L’autore scrive «una casa senza voci» e mi piace molto.', 'Nel testo c’è una casa senza voci.'], why: 'Quotation, reporting verb and effect.' },
            { q: 'Which part of the essay states the main idea?', o: ['L’introduzione', 'Lo sviluppo', 'La conclusione'], why: 'The introduction names the text and the main idea.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Turn the comment into an analysis, using the words given.', items: [
            { q: 'Mi piace la frase «una casa senza voci».', cue: 'La frase «una casa senza voci» crea', a: ['La frase «una casa senza voci» crea un senso di abbandono.', 'La frase «una casa senza voci» crea un’atmosfera di silenzio.', 'La frase «una casa senza voci» crea un senso di vuoto.'], why: 'Replace opinion with effect.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the lesson.', items: [
            { q: 'In ___, l’autore usa l’immagine della casa vuota per suggerire la perdita.', a: ['conclusione'], why: 'The closing paragraph.' },
            { q: 'Quando scrive «una casa senza voci», l’autore ___ un senso di abbandono.', a: ['crea', 'suggerisce', 'evoca'], why: 'A reporting verb for effect.' },
            { q: 'La citazione va messa tra ___ («…»).', a: ['virgolette', 'caporali'], why: 'Guillemets (virgolette caporali).' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Un racconto e una nota critica',
      about: 'Read an invented story extract and a critical note on it.',
      art: 'mug',
      spreads: [
        [
          { t: 'reading', title: 'Un racconto e una nota critica', md: 'Il racconto (brano inventato)\n\nTornai a casa dopo molti anni. La porta era chiusa, e io non avevo più la chiave. Il giardino sembrava dormire sotto un cielo di piombo. Quella sera non capii che cosa stava succedendo: sapevo soltanto che la casa mi guardava, come una persona che aspetta una risposta. Giurai a me stesso che non ero cambiato, e che gli altri, semmai, erano cambiati. Che bella accoglienza, pensai, dopo tanti anni!\n\nLa nota critica\n\nIl brano è narrato in prima persona, e questa scelta ci avvicina al protagonista. La porta chiusa è un simbolo di ciò che il narratore ha perduto; il «cielo di piombo» è un’immagine di peso e di tristezza. La personificazione della casa («mi guardava») e la similitudine («come una persona che aspetta una risposta») suggeriscono che il vero rimprovero venga dal passato. La frase «Che bella accoglienza» è ironica. Il tono, infine, rivela un narratore forse inattendibile, che giura troppo di non essere cambiato.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Il narratore parla in prima persona.', a: 't', why: '*Tornai*, *non capii*.' },
            { q: 'Il narratore ha ancora la chiave della casa.', a: 'f', why: '«Non avevo più la chiave.»' },
            { q: 'La frase «Che bella accoglienza» è ironica.', a: 't', why: 'The door is closed, so it is not a welcome.' },
            { q: 'La casa si trova in montagna.', a: 'ng', why: 'The place is not given.' },
            { q: 'Il critico pensa che il narratore sia sicuramente sincero.', a: 'f', why: 'The critic says he may be unreliable.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'What does the closed door symbolise?', o: ['What the narrator has lost.', 'A new beginning.', 'A safe place.'], why: 'The critic reads it as a symbol of loss.' },
            { q: 'Which figure is «come una persona che aspetta una risposta»?', o: ['A simile', 'A metaphor', 'An anaphora'], why: 'It uses *come*.' },
            { q: 'What effect does the «cielo di piombo» have?', o: ['It suggests weight and sadness.', 'It describes warm weather.', 'It shows the narrator is happy.'], why: 'An image of weight and sadness.' },
            { q: 'Why might the narrator be unreliable?', o: ['He swears too much that he has not changed.', 'He speaks in the third person.', 'He cannot see the house.'], why: 'He defends himself too much.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the figures.', items: [
            { s: 'La casa [mi guardava].', why: 'Personification.' },
            { s: 'Un [cielo di piombo].', why: 'An image of weight.' },
            { s: '[Che bella accoglienza], pensai.', why: 'Irony.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the text.', items: [
            { q: 'La porta chiusa è un ___ di ciò che il narratore ha perduto.', a: ['simbolo'], why: 'An object standing for an idea.' },
            { q: 'La frase «Che bella accoglienza» è ___.', a: ['ironica'], why: 'It means the opposite.' },
            { q: 'Il brano è narrato in prima ___.', a: ['persona'], why: 'First person.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'La porta chiusa è un simbolo di ciò che il narratore ha perduto.', why: 'A symbol and its meaning.' },
            { a: 'Il tono rivela un narratore forse inattendibile.', why: 'A cautious judgment of tone.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
      { q: '“Il vento sussurrava tra gli alberi.” è una ___.', o: ['personificazione', 'similitudine', 'antitesi'], why: 'The wind is given a human action.' },
      { q: '“Il tempo è un fiume.” è una ___.', o: ['metafora', 'similitudine', 'anafora'], why: 'One thing is another.' },
      { q: '“Che bella giornata!” sotto la pioggia è ___.', o: ['ironia', 'simbolo', 'immagine'], why: 'The opposite of the truth.' },
      { q: 'Which is the best analytical sentence?', o: ['L’immagine del piombo crea un senso di peso.', 'Mi piace molto il piombo.', 'C’è il piombo nel testo.'], why: 'Figure plus effect.' },
    ] },
    { t: 'ex', kind: 'sort', h: 'Metaphor or simile?', groups: ['metafora', 'similitudine'], explain: ['groups'], items: [
      { s: 'Il silenzio era un muro.', g: 0, why: 'Metaphor.' },
      { s: 'Correva come il vento.', g: 1, why: 'Simile.' },
      { s: 'La vita è un viaggio.', g: 0, why: 'Metaphor.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentence.', items: [
      { q: 'Un oggetto che rappresenta un’idea è un ___.', a: ['simbolo'], why: 'A symbol.' },
      { q: 'Un narratore che può mentire è ___. (unreliable)', a: ['inattendibile'], why: 'An unreliable narrator.' },
      { q: 'Nell’analisi, la ___ riassume i punti principali.', a: ['conclusione'], why: 'The closing part.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite, using the words given.', items: [
      { q: 'Il tempo scorre come un fiume.', cue: 'Il tempo è', a: ['Il tempo è un fiume.'], why: 'A simile becomes a metaphor.' },
      { q: 'Quella sera non capii che cosa stava succedendo.', cue: 'Quella sera Anna', a: ['Quella sera Anna non capì che cosa stava succedendo.'], why: 'First to third person.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the problem.', items: [
      { s: 'Il critico scrive: «[Mi piace] la frase della casa vuota.» (analytical style)', a: ['La frase della casa vuota crea un senso di abbandono', 'La frase è efficace perché evoca abbandono'], why: 'An analysis explains the effect instead of giving a personal reaction.' },
      { s: 'Il tempo [scorre come] un fiume. (a metaphor, not a simile)', a: ['è'], why: 'A metaphor says one thing *is* another.' },
    ] },
  ],
};
