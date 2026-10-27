// German C2, unit 8 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u8',
  title: 'Literature and criticism',
  goal: 'Read literary German closely and write about it. Learn figurative language, narrative voice and tone, and how to write a Textanalyse with a structure, short quotations and explained effects.',
  art: 'owl',
  tags: { skills: ['reading', 'writing', 'vocabulary'], topics: ['Metapher', 'Vergleich', 'Personifikation', 'Symbol', 'Erzählperspektive', 'Ton', 'Textanalyse'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Metapher, Vergleich, Symbol',
      about: 'Identify figurative language and explain what it does for the reader.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Literary writers use **figurative language**, words that mean more than their literal sense. **Die Metapher** says that one thing *is* another, without a comparing word: *Die Stadt war ein Backofen.* **Der Vergleich** uses *wie* or *als ob*: *Die Stadt war wie ein Backofen.* **Die Personifikation** gives human qualities to a non-human thing: *Der Wind flüsterte in den Bäumen.* **Das Symbol** is an object or image that stands for a larger idea: *eine verschlossene Tür* may stand for a closed future. **Bilder** appeal to the senses: *der saure Geruch alten Regens*.' },
          { t: 'table', caption: 'Figurative language', explain: ['head', 'col0'], head: ['Device', 'What it does', 'Example'], rows: [
            ['Metapher', 'says one thing is another', 'Die Stadt war ein Backofen.'],
            ['Vergleich', 'compares with wie or als ob', 'Die Stadt war wie ein Backofen.'],
            ['Personifikation', 'gives human qualities to things', 'Der Wind flüsterte in den Bäumen.'],
            ['Symbol', 'stands for a larger idea', 'eine verschlossene Tür für eine verschlossene Zukunft'],
            ['sinnliches Bild', 'appeals to the senses', 'der saure Geruch alten Regens'],
          ] },
        ],
        [
          { t: 'text', md: 'Naming a device is only the first step. The skill is to explain its **effect**: what does it make the reader see, feel or think? *Die Stadt war ein Backofen* suggests not only heat but also pressure and exhaustion. Always ask: **Warum dieses Bild und kein anderes?** A weak comment says *Der Autor benutzt eine Metapher*. A strong one says *Die Backofen-Metapher stellt die Stadt als einen Ort dar, der die Menschen ausbrennt*.' },
          { t: 'tip', art: 'owl', md: 'Use verbs of effect: *andeuten, hervorrufen, verdeutlichen, verstärken, betonen, den Eindruck von … erzeugen*. Avoid *zeigen* on its own. Say what the image suggests **to the reader**: *Der Vergleich ruft Einsamkeit hervor*.' },
          { t: 'ex', kind: 'sort', h: 'Which device?', groups: ['Metapher', 'Vergleich', 'Personifikation'], explain: ['groups'], items: [
            { s: 'Die Klasse war ein Zoo.', g: 0, why: 'One thing is another: no comparing word.' },
            { s: 'Ihre Stimme war kalt wie Eis.', g: 1, why: 'A comparison with *wie*.' },
            { s: 'Die Sonne lächelte auf das Dorf herab.', g: 2, why: 'A human quality given to the sun.' },
            { s: 'Die Zeit ist ein Dieb.', g: 0, why: 'A metaphor.' },
            { s: 'Er rannte wie der Wind.', g: 1, why: 'A comparison with *wie*.' },
            { s: 'Das alte Haus ächzte in der Nacht.', g: 2, why: 'The house is given a human sound.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What is the effect?', items: [
            { q: '„Die Stadt war ein Backofen.“ This metaphor suggests…', o: ['heat and exhaustion', 'a place for baking bread', 'a quiet town'], why: 'It conveys oppressive heat and pressure.' },
            { q: '„Das alte Haus ächzte in der Nacht.“ This personification creates…', o: ['a sense of age and unease', 'a sense of comfort', 'a sense of speed'], why: 'The house sounds like a person in discomfort.' },
            { q: 'A locked door in a novel about a young person may symbolise…', o: ['a closed future', 'a broken lock', 'a new house'], why: 'A symbol stands for a larger idea.' },
            { q: '„Sie stand allein da, wie eine Laterne im Morgengrauen.“ The comparison suggests…', o: ['loneliness and being forgotten', 'brightness', 'noise'], why: 'A street lamp at dawn has lost its purpose.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the device with its definition.', pairs: [
            ['Metapher', 'says one thing is another'],
            ['Vergleich', 'compares with wie'],
            ['Personifikation', 'gives human qualities to things'],
            ['sinnliches Bild', 'language that appeals to the senses'],
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Turn the comparison into a metaphor.', items: [
            { q: 'Ihre Stimme war kalt wie Eis.', cue: 'Ihre Stimme war', a: ['Ihre Stimme war Eis.'], why: 'Remove *kalt wie*: the metaphor says it *is* ice.' },
            { q: 'Die Klasse war wie ein Zoo.', cue: 'Die Klasse war', a: ['Die Klasse war ein Zoo.'], why: 'Remove *wie*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the lesson.', items: [
            { q: 'Der Wind flüsterte in den Bäumen: Das ist eine ___.', a: ['Personifikation'], why: 'A human quality given to the wind.' },
            { q: 'Ein ___ steht für eine größere Idee, zum Beispiel eine verschlossene Tür für eine verschlossene Zukunft.', a: ['Symbol'], why: 'The definition of a symbol.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Erzählperspektive und Ton',
      about: 'Describe who is telling the story, how reliable they are and what tone they take.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Every story has a narrator (**Erzähler**). In the **Ich-Erzählung** (first person), the narrator is a character: *Ich öffnete die Tür.* The reader sees only what the narrator sees. In the **Er-/Sie-Erzählung** (third person), the narrator stands outside: *Sie öffnete die Tür.* A **personaler Erzähler** (limited) shows one character’s thoughts; an **auktorialer Erzähler** (omniscient) knows everything. A narrator is **unzuverlässig** (unreliable) when the reader has reason to doubt them, because they lie, forget, or do not understand what they see.' },
          { t: 'table', caption: 'Narrative voice', explain: ['head', 'col0'], head: ['Type', 'What the reader gets', 'Example'], rows: [
            ['Ich-Erzähler', 'one character’s view', 'Ich öffnete die Tür.'],
            ['personaler Erzähler', 'one character’s thoughts', 'Sie öffnete die Tür, voller Angst vor dem, was sie finden würde.'],
            ['auktorialer Erzähler', 'many characters’ thoughts', 'Sie öffnete die Tür; er, oben, hielt den Atem an.'],
            ['unzuverlässiger Erzähler', 'a view that cannot be trusted', 'Ich habe nie gelogen, das versichere ich Ihnen, außer ein- oder zweimal.'],
          ] },
        ],
        [
          { t: 'text', md: '**Der Ton** is the writer’s or narrator’s attitude to the subject: *ernst, ironisch, nostalgisch, bitter, verspielt, distanziert*. It comes from word choice, rhythm and detail. **Das Register** is the level of formality. A narrator who calls a funeral *eine eher langweilige Veranstaltung* uses an ironic, detached tone; one who says *an dem Tag, an dem wir sie begruben* sounds nostalgic and serious. Support any claim about tone with **evidence from the text**.' },
          { t: 'tip', art: 'owl', md: 'When you comment on tone, avoid vague words (*gut, schlecht, interessant*). Use precise ones: *ironisch, resigniert, zärtlich, sarkastisch, feierlich*. And always link the tone to a **word or phrase**: *Der Ton ist ironisch: „eher langweilig“ behandelt eine Beerdigung wie einen Empfang.*' },
          { t: 'ex', kind: 'sort', h: 'First or third person?', groups: ['first person', 'third person'], explain: ['groups'], items: [
            { s: 'Ich konnte in jener Nacht nicht schlafen.', g: 0, why: 'The narrator is a character: *ich*.' },
            { s: 'Sie konnte in jener Nacht nicht schlafen.', g: 1, why: 'The narrator stands outside: *sie*.' },
            { s: 'Wir gingen schweigend nach Hause.', g: 0, why: 'First person plural.' },
            { s: 'Sie gingen schweigend nach Hause.', g: 1, why: 'Third person.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What is the tone?', items: [
            { q: '„Es war, nehme ich an, eine eher langweilige Veranstaltung, die Beerdigung: nur vierzig Leute, und die Brötchen waren trocken.“', o: ['ironic and detached', 'tender and grieving', 'angry and bitter'], why: 'The understatement and flat details suggest an ironic tone.' },
            { q: '„Ich erinnere mich an das Sommerlicht auf ihren Händen, wenn sie Äpfel schälte, und an den Zimtgeruch in der Küche.“', o: ['nostalgic and tender', 'ironic and cold', 'angry and sharp'], why: 'Sensory memories suggest a nostalgic tone.' },
            { q: '„In dieser Stadt ändert sich nie etwas, und niemand hat das geringste Interesse daran, dass es sich ändert.“', o: ['bitter and resigned', 'excited and hopeful', 'playful and light'], why: 'A negative generalisation with a tired attitude.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
            ['ironisch', 'saying one thing and meaning another'],
            ['nostalgisch', 'looking back fondly'],
            ['distanziert', 'not emotionally involved'],
            ['auktorial', 'knowing everything'],
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite from the first person into the third person.', items: [
            { q: 'Ich öffnete die Tür und hatte Angst vor dem, was ich finden würde.', cue: 'Sie öffnete die Tür', a: ['Sie öffnete die Tür und hatte Angst vor dem, was sie finden würde.'], why: 'Change *ich* to *sie* and keep the tenses consistent.' },
            { q: 'Wir gingen schweigend nach Hause.', cue: 'Sie gingen', a: ['Sie gingen schweigend nach Hause.'], why: 'First person plural becomes third person plural.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the lesson.', items: [
            { q: 'Ein Erzähler, der die Gedanken aller Figuren kennt, ist ___.', a: ['auktorial'], why: 'The definition.' },
            { q: 'Ein Erzähler, dem der Leser nicht trauen kann, ist ___.', a: ['unzuverlässig'], why: 'The definition.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Die Textanalyse: Aufbau, Beleg, Deutung',
      about: 'Write a Textanalyse paragraph that makes a point, quotes briefly and explains the effect.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'A **Textanalyse** follows a structure: an **Einleitung** (the text, its context and the question), a **Hauptteil** (several steps of the argument) and a **Schluss**. Each paragraph in the Hauptteil makes a **Behauptung** (point), gives a **Beleg** (a short quotation) and **explains the effect** (*Deutung*). Example: *Der Autor stellt das Haus als feindlich dar **(Behauptung)**: Es „ächzte in der Nacht“ **(Beleg)**, eine Personifikation, die dem Gebäude ein menschliches Leiden verleiht und Unbehagen erzeugt **(Deutung)**.*' },
          { t: 'table', caption: 'Behauptung, Beleg, Deutung', explain: ['head', 'col0'], head: ['Part', 'What it does', 'Useful language'], rows: [
            ['Behauptung', 'answers the question in your own words', 'Der Autor stellt … dar / Der Erzähler wirkt …'],
            ['Beleg', 'a short, embedded quotation', 'es „ächzte“, was … / die Wendung „…“ deutet an …'],
            ['Deutung', 'explains the effect', 'Das deutet an / ruft hervor / verstärkt / erzeugt den Eindruck von …'],
          ] },
        ],
        [
          { t: 'text', md: 'Keep quotations **short**: a word or a phrase is better than a whole sentence. **Embed** them in your own sentence: *Das Haus „ächzte“, was ihm ein menschliches Leiden verleiht.* Then explain the **effect on the reader**. If possible, link to the writer’s wider purpose: *Das verstärkt den Eindruck, dass die Familie gefangen ist.* In a German Textanalyse, use the **present tense** for what the text does and **avoid saying “ich”**.' },
          { t: 'tip', art: 'owl', md: 'Do not just **retell** the story („Dann öffnet das Mädchen die Tür“). A Textanalyse is about **how** the writer creates meaning, not **what** happens. Use the present tense: *Der Autor verwendet…*, not *verwendete*. And do not paraphrase a quotation without commenting on it.' },
          { t: 'ex', kind: 'sort', h: 'Which part is it?', groups: ['Behauptung', 'Beleg', 'Deutung'], explain: ['groups'], items: [
            { s: 'Der Autor stellt das Haus als feindlich dar.', g: 0, why: 'A point in your own words.' },
            { s: 'es „ächzte in der Nacht“', g: 1, why: 'A short quotation.' },
            { s: 'Diese Personifikation verleiht dem Gebäude ein menschliches Leiden und erzeugt Unbehagen.', g: 2, why: 'It explains the effect.' },
            { s: 'Der Erzähler wirkt nostalgisch.', g: 0, why: 'A point.' },
            { s: 'das „Sommerlicht auf ihren Händen“', g: 1, why: 'A short quotation.' },
            { s: 'Dieses sinnliche Bild ruft Zärtlichkeit und Verlust hervor.', g: 2, why: 'It explains the effect.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which is the best sentence for a Textanalyse?', items: [
            { q: '', o: ['Der Autor lässt das Haus lebendig wirken, indem es „ächzte“, was Unbehagen erzeugt.', 'Das Haus ächzte, und dann ging sie nach oben.', 'Der Autor benutzt viele interessante Wörter.'], why: 'It has a point, a quotation and an explanation.' },
            { q: '', o: ['Der Vergleich „kalt wie Eis“ deutet die gefühlsmäßige Distanz des Sprechers an.', 'Der Sprecher sagt „kalt wie Eis“, und das finde ich gut.', 'Eis ist kalt, und der Sprecher auch.'], why: 'It names the device, quotes briefly and explains the effect.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite as an analysis sentence, using the words given.', items: [
            { q: 'Der Autor sagt, dass der Wind „flüsterte“, das ist eine Personifikation, und die Szene ist ruhig.', cue: 'Die Personifikation des Windes', a: ['Die Personifikation des Windes, der „flüsterte“, macht die Szene ruhig.', 'Die Personifikation des Windes als „flüsternd“ macht die Szene ruhig.'], why: 'Embed the quotation and explain the effect.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the tense problem.', items: [
            { s: 'Der Autor [verwendete] eine Metapher, um zu zeigen, dass die Stadt heiß ist.', a: ['verwendet'], why: 'Use the present tense for what the text does.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Der Obstgarten',
      about: 'Read a short story extract and a critical note on it.',
      art: 'sun',
      spreads: [
        [
          { t: 'reading', title: 'Der Obstgarten', md: 'ERZÄHLUNG\n\nDer Obstgarten meiner Mutter war ein stiller Ort, von jener Stille, die wartet. Im Herbst fielen die Äpfel wie kleine rote Münzen ins Gras, und ich ging zwischen ihnen umher und zählte sie, als würde ich eines Tages reich sein. Das alte Tor ächzte jedes Mal, wenn ich es aufstieß, als wüsste es, was ich vorhatte.\n\nIch bin nicht, was auch immer mein Bruder sagt, ein nachlässiger Mensch. Ich wollte den Obstgarten nur noch einmal sehen, vor dem Verkauf. Der Mann von der Agentur hatte gelächelt, als täte er mir einen Gefallen.\n\nAm Ende des Gartens beugte sich der älteste Baum über die Mauer, eine alte Frau, die etwas sucht, das sie fallen gelassen hat. Ich legte die Hand auf die Rinde. Sie war warm, was keinen Sinn ergab, denn die Sonne war längst untergegangen. Ich stand dort, glaube ich, eine Stunde. Oder eine Ewigkeit. Schwer zu sagen.\n\nKRITISCHE NOTIZ\n\nDer ruhige Ton der Erzählerin wird durch kleine Zeichen von Unbehagen untergraben. Der Vergleich der Äpfel „wie kleine rote Münzen“ deutet den Wunsch der Erzählerin nach Sicherheit an, während die Personifikation des Tores, das „ächzte, als wüsste es“, eine Schuld erahnen lässt. Der Satz „Ich bin nicht, was auch immer mein Bruder sagt, ein nachlässiger Mensch“ legt eine unzuverlässige Erzählerin nahe: Die defensive Verneinung lädt den Leser zum Zweifel ein. Das unsichere Ende („eine Stunde. Oder eine Ewigkeit“) lässt den Leser im Ungewissen darüber, was wirklich geschehen ist.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Die Erzählerin wollte den Obstgarten vor dem Verkauf noch einmal sehen.', a: 't', why: '„Ich wollte den Obstgarten nur noch einmal sehen, vor dem Verkauf.“' },
            { q: 'Ihr Bruder hält sie für nachlässig.', a: 't', why: '„Was auch immer mein Bruder sagt.“' },
            { q: 'Der alte Baum fühlte sich kalt an.', a: 'f', why: '„Sie war warm.“' },
            { q: 'Die kritische Notiz sagt, der Ton der Erzählerin sei völlig ruhig.', a: 'f', why: '„Durch kleine Zeichen von Unbehagen untergraben.“' },
            { q: 'Die Notiz legt nahe, dass die Erzählerin unzuverlässig ist.', a: 't', why: '„Legt eine unzuverlässige Erzählerin nahe.“' },
            { q: 'Der Obstgarten gehörte dem Vater der Erzählerin.', a: 'ng', why: 'The story says „der Obstgarten meiner Mutter“.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'What device is „die Äpfel fielen wie kleine rote Münzen“?', o: ['comparison', 'metaphor', 'personification'], why: 'A comparison with *wie*.' },
            { q: 'What device is „Das alte Tor ächzte … als wüsste es“?', o: ['personification', 'comparison only', 'chiasmus'], why: 'The gate is given human awareness.' },
            { q: 'What does „eine alte Frau, die etwas sucht, das sie fallen gelassen hat“ suggest?', o: ['sadness and searching', 'anger and speed', 'joy and noise'], why: 'The image evokes loss and age.' },
            { q: 'Why might the narrator be unreliable?', o: ['The denial is defensive and the ending is unsure.', 'The narrator tells the whole truth.', 'The narrator is a child.'], why: 'The text raises doubt about the narrator’s account.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the figurative language.', items: [
            { s: 'Die Äpfel fielen [wie kleine rote Münzen] ins Gras.', why: 'A comparison.' },
            { s: 'Das alte Tor [ächzte] jedes Mal, wenn ich es aufstieß, als wüsste es, was ich vorhatte.', why: 'Personification.' },
            { s: 'Der älteste Baum beugte sich über die Mauer, [eine alte Frau, die etwas sucht, das sie fallen gelassen hat].', why: 'A metaphor with a human image.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the critical note.', items: [
            { q: 'Der ruhige Ton der Erzählerin wird durch kleine Zeichen von Unbehagen ___.', a: ['untergraben'], why: 'The critic’s word.' },
            { q: 'Die defensive Verneinung lädt den Leser zum ___ ein.', a: ['Zweifel'], why: 'The effect on the reader.' },
            { q: 'Das Ende lässt den Leser im ___ darüber, was geschehen ist.', a: ['Ungewissen'], why: 'The effect of the ending.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Das Tor wird personifiziert, was eine Schuld erahnen lässt.', why: 'An analysis sentence.' },
            { a: 'Der Vergleich deutet den Wunsch nach Sicherheit an.', why: 'An analysis sentence.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: '„Die Klasse war ein Zoo.“ This is a…', o: ['Metapher', 'Vergleich', 'Symbol'], why: 'One thing is another.' },
      { q: '„Der Wind flüsterte.“ This is…', o: ['eine Personifikation', 'ein Vergleich', 'ein Symbol'], why: 'A human quality given to the wind.' },
      { q: 'A narrator who knows all the characters’ thoughts is…', o: ['auktorial', 'unzuverlässig', 'ein Ich-Erzähler'], why: 'Knows everything.' },
      { q: 'Which is the best sentence for a Textanalyse?', o: ['Der Autor lässt das Haus lebendig wirken, indem es „ächzte“, was Unbehagen erzeugt.', 'Das Haus ächzte, und sie ging hoch.', 'Der Autor benutzt interessante Wörter.'], why: 'Point, quotation, explanation.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
      ['ironisch', 'saying one thing and meaning another'],
      ['nostalgisch', 'looking back fondly'],
      ['distanziert', 'not emotionally involved'],
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentence.', items: [
      { q: 'Ein ___ vergleicht zwei Dinge mit *wie*.', a: ['Vergleich'], why: 'The definition.' },
      { q: 'Ein Erzähler, dem man nicht trauen kann, ist ___.', a: ['unzuverlässig'], why: 'The definition.' },
      { q: 'Eine verschlossene Tür, die eine verschlossene Zukunft darstellt, ist ein ___.', a: ['Symbol'], why: 'The definition.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite, using the words given.', items: [
      { q: 'Ihre Stimme war kalt wie Eis.', cue: 'Ihre Stimme war', a: ['Ihre Stimme war Eis.'], why: 'The metaphor.' },
      { q: 'Ich öffnete die Tür und hatte Angst.', cue: 'Sie öffnete die Tür', a: ['Sie öffnete die Tür und hatte Angst.'], why: 'Third person.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'Der Autor [verwendete] eine Metapher, um zu zeigen, dass die Stadt heiß ist.', a: ['verwendet'], why: 'Use the present tense for what the text does.' },
      { s: 'Der Erzähler sagt „die Stadt war wie ein Backofen“, das ist [eine Metapher].', a: ['ein Vergleich'], why: 'There is a comparing word: *wie*.' },
    ] },
  ],
};
