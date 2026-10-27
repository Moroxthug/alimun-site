// German C1, unit 8 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u8',
  title: 'Making and defending a position',
  goal: 'Write a commentary and defend a position in speaking and writing. Learn the structure of a Kommentar and an Erörterung, the phrases for views, arguments and conclusions, concession and refutation, rhetorical devices, and polite ways to take part in a discussion.',
  art: 'dragon',
  tags: { skills: ['writing', 'speaking', 'vocabulary', 'reading'], topics: ['argument', 'commentary', 'concession', 'rhetoric', 'discussion'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Aufbau einer Erörterung',
      about: 'Build a text that states a view, gives arguments, answers an objection and concludes.',
      art: 'dragon',
      spreads: [
        [
          { t: 'text', md: 'A **Kommentar** or an **Erörterung** follows a clear plan. It opens with the **topic** and a hook. Then it states your **view** (the *These*) and supports it with **arguments** and examples. Then it names a **counterargument** and **answers** it. It ends with a **conclusion** (*Fazit*). Each step has its own phrases: **Meiner Meinung nach …** and **Ich bin der Ansicht, dass …** give your view. **Darüber hinaus, zudem** and **außerdem** add an argument. **Dagegen spricht, dass …** and **Man könnte einwenden, dass …** introduce a counterargument. **Zusammenfassend lässt sich sagen, dass …** and **Abschließend** start the conclusion.' },
          { t: 'table', caption: 'Phrases for each step', explain: ['head', 'col1'], head: ['Step', 'Phrases'], rows: [
            ['your view', 'Meiner Meinung nach … / Ich bin der Ansicht, dass …'],
            ['another argument', 'Darüber hinaus … / Zudem … / Außerdem …'],
            ['a counterargument', 'Dagegen spricht, dass … / Man könnte einwenden, dass …'],
            ['the answer to it', 'Dem lässt sich entgegnen, dass … / Allerdings darf man nicht vergessen, dass …'],
            ['the conclusion', 'Zusammenfassend lässt sich sagen, dass … / Abschließend …'],
          ] },
          { t: 'tip', art: 'owl', md: 'Give **one idea per paragraph** and start each paragraph with the phrase that shows its function. After **Dagegen spricht** and **Man könnte einwenden**, the verb comes in a **dass** clause at the end: *Dagegen spricht, dass die Kosten steigen.* Do not use **ich** too often in a formal text: **Meiner Meinung nach** once is enough. The phrases are the same in Germany, Austria and Switzerland.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Meiner Meinung nach** ist das Verbot zu streng.', n: 'Your view.' },
            { s: '**Darüber hinaus** fehlt es an Alternativen.', n: 'Another argument.' },
            { s: '**Dagegen spricht**, dass die Kosten steigen.', n: 'A counterargument.' },
            { s: '**Man könnte einwenden**, dass das zu teuer ist.', n: 'A counterargument.' },
            { s: '**Zusammenfassend lässt sich sagen**, dass sich der Aufwand lohnt.', n: 'The conclusion.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'What does the phrase do? Sort the phrases.', groups: ['your view', 'another argument', 'a counterargument', 'the conclusion'], explain: ['groups'], items: [
            { s: 'Meiner Meinung nach', g: 0, why: 'It gives your view.' },
            { s: 'Ich bin der Ansicht, dass', g: 0, why: 'It gives your view.' },
            { s: 'Darüber hinaus', g: 1, why: 'It adds an argument.' },
            { s: 'Zudem', g: 1, why: 'It adds an argument.' },
            { s: 'Dagegen spricht', g: 2, why: 'It introduces a counterargument.' },
            { s: 'Man könnte einwenden, dass', g: 2, why: 'It introduces a counterargument.' },
            { s: 'Zusammenfassend lässt sich sagen', g: 3, why: 'It starts the conclusion.' },
            { s: 'Abschließend', g: 3, why: 'It starts the conclusion.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Meiner ___ nach ist das falsch.', a: ['Meinung'], why: '*Meiner Meinung nach*.' },
            { q: 'Ich bin der ___, dass wir mehr tun müssen.', a: ['Ansicht'], why: '*Ich bin der Ansicht, dass …*' },
            { q: 'Darüber ___ gibt es ein zweites Argument.', a: ['hinaus'], why: '*Darüber hinaus*.' },
            { q: 'Man könnte ___, dass das zu teuer ist.', a: ['einwenden', 'einwerfen'], why: '*Man könnte einwenden, dass …*' },
            { q: 'Zusammenfassend ___ sich sagen, dass sich der Aufwand lohnt.', a: ['lässt'], why: '*Zusammenfassend lässt sich sagen*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the phrase with its function.', pairs: [
            ['Zudem', 'adds an argument'],
            ['Dagegen spricht', 'introduces a counterargument'],
            ['Abschließend', 'introduces the conclusion'],
            ['Meiner Meinung nach', 'gives your view'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
            { q: 'Where does the counterargument go?', o: ['In the middle, before the conclusion.', 'At the very start.', 'After the conclusion.'], why: 'You name it and answer it before you conclude.' },
            { q: 'Which phrase starts the conclusion?', o: ['Zusammenfassend lässt sich sagen, dass …', 'Darüber hinaus …', 'Dagegen spricht, dass …'], why: '*Zusammenfassend* starts the conclusion.' },
            { q: 'Which phrase gives your view?', o: ['Ich bin der Ansicht, dass …', 'Man könnte einwenden, dass …', 'Abschließend …'], why: '*Ich bin der Ansicht* gives your view.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Darüber [aus] gibt es ein zweites Argument.', a: ['hinaus'], why: '*Darüber hinaus*.' },
            { s: 'Meiner [Meinen] nach ist das falsch.', a: ['Meinung'], why: '*Meiner Meinung nach*.' },
            { s: 'Zusammenfassend [lassen] sich sagen, dass es sich lohnt.', a: ['lässt'], why: '*Zusammenfassend lässt sich sagen*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Meiner Meinung nach ist das Verbot zu streng.', why: 'Your view first.' },
            { a: 'Dagegen spricht, dass die Kosten steigen.', why: '*Dagegen spricht* + *dass* clause.' },
            { a: 'Zusammenfassend lässt sich sagen, dass sich der Aufwand lohnt.', why: 'The conclusion.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Zugeständnis und Widerlegung',
      about: 'Concede a point, refute it, and use rhetorical devices.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'A strong argument first **grants a point** and then **answers it**. **Zwar … aber …** is the classic frame: *Zwar ist das Auto bequem, aber es ist auch teuer.* **Gleichwohl** (nevertheless), **allerdings** (however), **immerhin** (at least, after all) and **zumindest** (at least) help you balance a view: *Das Projekt ist teuer; gleichwohl lohnt es sich. Immerhin hat die Stadt reagiert.* Rhetorical devices make a text lively. A **rhetorical question** needs no answer: *Wer will das schon?* A **contrast** with *nicht … sondern …*: *Nicht Verbote helfen, sondern Alternativen.* A **list of three** has rhythm: *schnell, billig und bequem*.' },
          { t: 'table', caption: 'Concession and refutation', explain: ['head', 'col1'], head: ['Word', 'Meaning', 'Example'], rows: [
            ['zwar … aber …', 'it is true … but …', 'Zwar ist das Auto bequem, aber es ist auch teuer.'],
            ['gleichwohl', 'nevertheless', 'Das Projekt ist teuer; gleichwohl lohnt es sich.'],
            ['allerdings', 'however, mind you', 'Allerdings darf man die Kosten nicht vergessen.'],
            ['immerhin', 'at least, after all', 'Immerhin hat die Stadt reagiert.'],
            ['zumindest', 'at least', 'Zumindest sollte man es versuchen.'],
          ] },
          { t: 'tip', art: 'owl', md: 'After **zwar**, the verb is in second position, and the **aber** clause follows: *Zwar ist das Auto bequem, aber es ist teuer.* **Gleichwohl** and **dennoch** mean almost the same, and **gleichwohl** is more formal. Use **rhetorical questions** sparingly, one or two in a text. A rhetorical question is a tool for the **commentary**, not for a neutral report.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Zwar** ist das Auto bequem, **aber** es ist auch teuer.', n: 'Concession and refutation.' },
            { s: 'Das Projekt ist teuer; **gleichwohl** lohnt es sich.', n: 'Nevertheless.' },
            { s: '**Immerhin** hat die Stadt reagiert.', n: 'At least.' },
            { s: '**Wer will das schon?**', n: 'A rhetorical question.' },
            { s: '**Nicht** Verbote helfen, **sondern** Alternativen.', n: 'A contrast.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Which device is it? Sort the sentences.', groups: ['rhetorical question', 'contrast', 'list of three'], explain: ['groups'], items: [
            { s: 'Wer will das schon?', g: 0, why: 'A question that needs no answer.' },
            { s: 'Wer glaubt noch daran?', g: 0, why: 'A question that needs no answer.' },
            { s: 'Nicht Verbote helfen, sondern Alternativen.', g: 1, why: '*Nicht … sondern …*' },
            { s: 'Nicht der Preis zählt, sondern die Qualität.', g: 1, why: '*Nicht … sondern …*' },
            { s: 'Es ist schnell, billig und bequem.', g: 2, why: 'Three items in a row.' },
            { s: 'Wir brauchen Zeit, Geld und Geduld.', g: 2, why: 'Three items in a row.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: '___ ist das Auto bequem, aber es ist auch teuer.', a: ['Zwar'], why: '*Zwar … aber …*' },
            { q: 'Das Projekt ist teuer; ___ lohnt es sich. (nevertheless, formal)', a: ['gleichwohl', 'dennoch'], why: '*Gleichwohl* = nevertheless.' },
            { q: '___ hat die Stadt reagiert. (at least, after all)', a: ['Immerhin'], why: '*Immerhin* = at least.' },
            { q: '___ sollte man es versuchen. (at least)', a: ['Zumindest'], why: '*Zumindest* = at least.' },
            { q: 'Nicht Verbote helfen, ___ Alternativen.', a: ['sondern'], why: '*Nicht … sondern …*' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: '___ ist das Auto bequem, aber es ist teuer.', o: ['Zwar', 'Weil', 'Sondern'], why: '*Zwar … aber …*' },
            { q: 'Das Projekt ist teuer; ___ lohnt es sich.', o: ['gleichwohl', 'zumal', 'sofern'], why: '*Gleichwohl* = nevertheless.' },
            { q: 'Nicht der Preis zählt, ___ die Qualität.', o: ['sondern', 'aber', 'denn'], why: '*Nicht … sondern …*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Join the two sentences with the word in brackets.', items: [
            { q: 'Das Auto ist bequem. Es ist auch teuer.', cue: 'Zwar', a: ['Zwar ist das Auto bequem, aber es ist auch teuer.'], why: '*Zwar* + verb second, then *aber*.' },
            { q: 'Das Projekt ist teuer. Es lohnt sich trotzdem.', cue: 'Das Projekt ist teuer;', a: ['Das Projekt ist teuer; gleichwohl lohnt es sich.'], why: '*Gleichwohl* + verb second.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Zwar ist das Auto bequem, [sondern] es ist teuer.', a: ['aber'], why: '*Zwar … aber …*' },
            { s: 'Nicht Verbote helfen, [aber] Alternativen.', a: ['sondern'], why: '*Nicht … sondern …*' },
            { s: 'Zwar [das Auto ist] bequem, aber es ist teuer.', a: ['ist das Auto'], why: 'After *zwar* the verb is in second position.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Zwar ist das Auto bequem, aber es ist teuer.', why: '*Zwar* + verb, then *aber*.' },
            { a: 'Immerhin hat die Stadt schnell reagiert.', why: '*Immerhin* + verb second.' },
            { a: 'Nicht Verbote helfen, sondern Alternativen.', why: '*Nicht … sondern …*' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Im Gespräch das Wort ergreifen',
      about: 'Take the floor, interrupt politely, agree, disagree and sum up in a discussion.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'In a discussion you need phrases to **take the floor**, to **interrupt politely**, to **agree** or **disagree** with tact, and to **sum up**. **Darf ich dazu etwas ergänzen?** and **Dürfte ich kurz etwas sagen?** take the floor. **Darf ich Sie kurz unterbrechen?** interrupts. **Da stimme ich Ihnen zu** and **Das sehe ich genauso** agree. **Da bin ich anderer Meinung** and **Das sehe ich etwas anders** disagree politely. **Wie meinen Sie das genau?** asks for clarification. **Fassen wir kurz zusammen** sums up.' },
          { t: 'table', caption: 'Phrases for a discussion', explain: ['head', 'col1'], head: ['Function', 'Phrase'], rows: [
            ['taking the floor', 'Darf ich dazu etwas ergänzen? / Dürfte ich kurz etwas sagen?'],
            ['interrupting politely', 'Darf ich Sie kurz unterbrechen?'],
            ['agreeing', 'Da stimme ich Ihnen zu. / Das sehe ich genauso.'],
            ['disagreeing politely', 'Da bin ich anderer Meinung. / Das sehe ich etwas anders.'],
            ['asking for clarification', 'Wie meinen Sie das genau?'],
            ['summing up', 'Fassen wir kurz zusammen: …'],
          ] },
          { t: 'tip', art: 'owl', md: '**Dürfte** (Konjunktiv II) is more polite than **darf**: *Dürfte ich kurz etwas sagen?* With **du**, say *Darf ich kurz etwas sagen?* and *Das sehe ich anders.* Soften a disagreement with **etwas**, **vielleicht** or **da bin ich nicht sicher**. In Switzerland and Austria the phrases are the same.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Darf ich dazu etwas ergänzen?**', n: 'Taking the floor.' },
            { s: '**Darf ich Sie kurz unterbrechen?**', n: 'Interrupting politely.' },
            { s: '**Da stimme ich Ihnen zu.**', n: 'Agreeing.' },
            { s: '**Da bin ich anderer Meinung.**', n: 'Disagreeing politely.' },
            { s: '**Fassen wir kurz zusammen.**', n: 'Summing up.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Polite or too direct? Sort the sentences.', groups: ['polite', 'too direct'], explain: ['groups'], items: [
            { s: 'Darf ich Sie kurz unterbrechen?', g: 0, why: 'A polite request.' },
            { s: 'Halt den Mund, ich will etwas sagen.', g: 1, why: 'Rude.' },
            { s: 'Da bin ich anderer Meinung.', g: 0, why: 'A polite disagreement.' },
            { s: 'Das stimmt nicht.', g: 1, why: 'Too direct in a discussion.' },
            { s: 'Das sehe ich etwas anders.', g: 0, why: 'A softened disagreement.' },
            { s: 'Du redest Unsinn.', g: 1, why: 'Rude.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the phrase with its function.', pairs: [
            ['Darf ich Sie kurz unterbrechen?', 'interrupting politely'],
            ['Das sehe ich genauso.', 'agreeing'],
            ['Wie meinen Sie das genau?', 'asking for clarification'],
            ['Fassen wir kurz zusammen.', 'summing up'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Darf ich dazu etwas ___?', a: ['ergänzen'], why: '*Etwas ergänzen* = to add something.' },
            { q: 'Darf ich Sie kurz ___?', a: ['unterbrechen'], why: '*Unterbrechen* = to interrupt.' },
            { q: 'Da stimme ich Ihnen ___.', a: ['zu'], why: '*Zustimmen* is separable: *ich stimme zu*.' },
            { q: 'Da bin ich anderer ___.', a: ['Meinung'], why: '*Anderer Meinung sein*.' },
            { q: 'Wie ___ Sie das genau?', a: ['meinen'], why: '*Wie meinen Sie das?*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it more politely with the words in brackets.', items: [
            { q: 'Das stimmt nicht.', cue: 'Da bin ich', a: ['Da bin ich anderer Meinung.'], why: 'A polite disagreement.' },
            { q: 'Du redest Unsinn.', cue: 'Das sehe ich', a: ['Das sehe ich etwas anders.'], why: 'A softened disagreement.' },
            { q: 'Halt den Mund, ich will etwas sagen.', cue: 'Darf ich', a: ['Darf ich kurz etwas sagen?'], why: 'A polite request to speak.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Darf ich Sie kurz unterbrechen?', why: 'A polite question.' },
            { a: 'Da bin ich anderer Meinung.', why: '*Anderer Meinung sein*.' },
            { a: 'Fassen wir kurz zusammen.', why: 'An invitation to sum up.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Ein Kommentar',
      about: 'Read a newspaper commentary.',
      art: 'dragon',
      spreads: [
        [
          { t: 'reading', title: 'Kommentar: Das Handy im Klassenzimmer', md: 'Das Handyverbot an Schulen ist wieder in aller Munde. Doch bringt es wirklich, was seine Befürworter versprechen?\n\nZwar lässt sich nicht bestreiten, dass Smartphones im Unterricht ablenken. Wer jede Minute auf den Bildschirm schaut, hört nicht zu. Dagegen spricht allerdings, dass ein Verbot allein das Problem nicht löst. Kinder, denen man das Handy wegnimmt, nutzen es umso mehr, sobald die Pause beginnt. Immerhin haben einige Schulen gute Erfahrungen mit klaren Regeln gemacht, die gemeinsam entwickelt wurden. Und wer sagt, dass Verbote automatisch zu mehr Aufmerksamkeit führen?\n\nMeiner Meinung nach sollten Schulen nicht verbieten, sondern erklären: Wann ist das Gerät hilfreich, wann stört es? Zusammenfassend lässt sich sagen: Nicht das Handy ist das Problem, sondern der Umgang damit. Gleichwohl braucht es Grenzen, und zwar solche, die alle mittragen.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Der Autor räumt ein, dass Smartphones im Unterricht ablenken.', a: 't', why: '*Zwar lässt sich nicht bestreiten, dass Smartphones im Unterricht ablenken.*' },
            { q: 'Der Autor meint, ein Verbot allein löse das Problem.', a: 'f', why: '*Ein Verbot allein das Problem nicht löst.*' },
            { q: 'Einige Schulen haben gute Erfahrungen mit gemeinsam entwickelten Regeln gemacht.', a: 't', why: '*Immerhin haben einige Schulen gute Erfahrungen … gemacht.*' },
            { q: 'Der Autor fordert ein vollständiges Verbot.', a: 'f', why: '*Sollten Schulen nicht verbieten, sondern erklären.*' },
            { q: 'Der Autor ist selbst Lehrer.', a: 'ng', why: 'The text does not say.' },
            { q: 'Er meint, das Problem sei der Umgang mit dem Handy.', a: 't', why: '*Nicht das Handy ist das Problem, sondern der Umgang damit.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Welche Rolle hat die Frage „Und wer sagt, dass Verbote automatisch zu mehr Aufmerksamkeit führen?“', o: ['Eine rhetorische Frage.', 'Ein Beweis.', 'Eine Zusammenfassung.'], why: 'It needs no answer.' },
            { q: 'Was empfiehlt der Autor?', o: ['Erklären statt verbieten.', 'Verbieten statt erklären.', 'Nichts tun.'], why: '*Nicht verbieten, sondern erklären.*' },
            { q: 'Womit beginnt der Schlussteil?', o: ['Mit einer Zusammenfassung.', 'Mit einem Beispiel.', 'Mit einer Frage.'], why: '*Zusammenfassend lässt sich sagen …*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the words for concession and counterargument.', items: [
            { s: '[Zwar] lässt sich nicht bestreiten, dass Smartphones ablenken. [Dagegen spricht allerdings], dass ein Verbot allein das Problem nicht löst.', why: '*Zwar* concedes; *dagegen spricht* names the counterargument.' },
            { s: '[Immerhin] haben einige Schulen gute Erfahrungen gemacht. [Gleichwohl] braucht es Grenzen.', why: '*Immerhin* and *gleichwohl* balance the view.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Meiner ___ nach sollten Schulen nicht verbieten, sondern erklären.', a: ['Meinung'], why: '*Meiner Meinung nach*.' },
            { q: '___ lässt sich sagen: Nicht das Handy ist das Problem.', a: ['Zusammenfassend'], why: '*Zusammenfassend lässt sich sagen*.' },
            { q: 'Dagegen ___ allerdings, dass ein Verbot allein das Problem nicht löst. (sprechen)', a: ['spricht'], why: '*Dagegen spricht*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Nicht das Handy ist das Problem, sondern der Umgang damit.', why: '*Nicht … sondern …*' },
            { a: 'Immerhin haben einige Schulen gute Erfahrungen gemacht.', why: '*Immerhin* + verb second.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Which phrase introduces a counterargument?', o: ['Dagegen spricht, dass …', 'Meiner Meinung nach …', 'Zusammenfassend lässt sich sagen, dass …'], why: '*Dagegen spricht* introduces a counterargument.' },
      { q: 'Which phrase is a polite interruption?', o: ['Darf ich Sie kurz unterbrechen?', 'Hören Sie auf!', 'Das ist falsch.'], why: 'A polite request.' },
      { q: '___ ist das Auto bequem, aber es ist auch teuer.', o: ['Zwar', 'Dennoch', 'Weil'], why: '*Zwar … aber …*' },
      { q: '“Wer will das schon?” is …', o: ['a rhetorical question', 'an example', 'a quotation'], why: 'It needs no answer.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Meiner ___ nach ist das falsch.', a: ['Meinung'], why: '*Meiner Meinung nach*.' },
      { q: 'Zusammenfassend ___ sich sagen, dass es sich lohnt.', a: ['lässt'], why: '*Zusammenfassend lässt sich sagen*.' },
      { q: 'Das Projekt ist teuer; ___ lohnt es sich. (nevertheless)', a: ['gleichwohl', 'dennoch', 'trotzdem'], why: '*Gleichwohl* = nevertheless.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the phrase with its function.', pairs: [
      ['Zudem', 'adds an argument'],
      ['Dagegen spricht', 'introduces a counterargument'],
      ['Abschließend', 'introduces the conclusion'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Say it with the words in brackets.', items: [
      { q: 'Das Auto ist bequem. Es ist auch teuer.', cue: 'Zwar', a: ['Zwar ist das Auto bequem, aber es ist auch teuer.'], why: '*Zwar* + verb second, then *aber*.' },
      { q: 'Das stimmt nicht.', cue: 'Da bin ich', a: ['Da bin ich anderer Meinung.'], why: 'A polite disagreement.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Zwar ist das Auto bequem, [sondern] es ist teuer.', a: ['aber'], why: '*Zwar … aber …*' },
      { s: 'Meiner [Meinen] nach ist das falsch.', a: ['Meinung'], why: '*Meiner Meinung nach*.' },
    ] },
  ],
};
