// Practice test in the format of telc Deutsch B1: Mündlicher Ausdruck. Original Alimun tasks and model answers, not official material. Draft for native-teacher review.
// In the exam two candidates speak together; here the examiner takes the partner's turns.
export const PAPER = {
  id: 'sprechen', title: 'Mündlicher Ausdruck', minutes: 15,
  parts: [
    {
      id: 'm1', ref: 'Mündlicher Ausdruck, Teil 1', title: 'Kontaktaufnahme',
      about: 'Sie lernen Ihre Gesprächspartnerin oder Ihren Gesprächspartner kennen. Antworten Sie auf die Fragen und erzählen Sie etwas über sich.',
      blocks: [
        { t: 'ex', kind: 'talk', marking: 'telc', h: 'Antworten Sie auf die Fragen.',
          items: [
            { q: 'Hallo, ich bin Tom. Und wie heißen Sie? Woher kommen Sie?', secs: 30, prep: 0,
              model: 'Hallo Tom, ich heiße Elena. Ich komme aus Spanien, aus Valencia, aber ich lebe seit zwei Jahren in Deutschland.' },
            { q: 'Wo wohnen Sie jetzt, und wie gefällt es Ihnen dort?', secs: 30, prep: 0,
              model: 'Ich wohne in Leipzig, in einer kleinen Wohnung in der Nähe vom Zentrum. Die Stadt gefällt mir sehr, es gibt viele Parks und Cafés. Nur der Winter ist mir ein bisschen zu kalt.' },
            { q: 'Was machen Sie beruflich, oder was möchten Sie später einmal machen?', secs: 30, prep: 0 },
            { q: 'Warum lernen Sie Deutsch?', secs: 30, prep: 0 },
            { q: 'Was machen Sie gern in Ihrer Freizeit?', secs: 30, prep: 0 },
            { q: 'Erzählen Sie von einer Reise, an die Sie sich gern erinnern.', secs: 45, prep: 0 },
          ] },
      ],
    },
    {
      id: 'm2', ref: 'Mündlicher Ausdruck, Teil 2', title: 'Gespräch über ein Thema',
      about: 'Lesen Sie den kurzen Text. Berichten Sie, worum es geht, erzählen Sie von Ihren eigenen Erfahrungen und sagen Sie Ihre Meinung. Reagieren Sie dann auf Ihre Gesprächspartnerin.',
      text: { title: 'Leben ohne eigenes Auto', md: 'Immer mehr junge Menschen in den Städten haben kein eigenes Auto mehr. Nach einer Umfrage besitzt nur noch jeder Dritte unter 30 Jahren ein Auto. Viele fahren mit dem Fahrrad, mit Bus und Bahn oder leihen sich für einen Ausflug ein Auto.\n\n„Ein Auto kostet mich jeden Monat zu viel Geld, und einen Parkplatz finde ich sowieso nie“, sagt die 27-jährige Sophie aus Köln. „Mit dem Rad bin ich in der Stadt schneller.“ Auf dem Land sieht das anders aus: Dort fährt der Bus oft nur wenige Male am Tag, und ohne Auto kommt man kaum zur Arbeit.' },
      blocks: [
        { t: 'ex', kind: 'talk', marking: 'telc', h: 'Sprechen Sie über das Thema.',
          items: [
            { q: 'Bitte berichten Sie kurz, worum es in Ihrem Text geht.', secs: 90, prep: 60,
              model: 'In meinem Text geht es darum, dass viele junge Leute in der Stadt kein Auto mehr haben. Nach einer Umfrage hat nur noch jeder Dritte unter 30 ein eigenes Auto. Die meisten fahren mit dem Fahrrad oder mit Bus und Bahn, und für einen Ausflug leihen sie sich ein Auto. Eine junge Frau aus Köln sagt, dass ein Auto zu teuer ist und dass sie keinen Parkplatz findet. Mit dem Fahrrad ist sie in der Stadt schneller. Der Text sagt aber auch, dass es auf dem Land anders ist, weil die Busse dort selten fahren. Dort braucht man ein Auto, um zur Arbeit zu kommen.' },
            { q: 'Und wie ist das bei Ihnen? Haben Sie ein Auto, und wie war das in Ihrem Heimatland?', secs: 60, prep: 0,
              model: 'Ich habe kein Auto. In Leipzig fahre ich fast immer mit dem Fahrrad oder mit der Straßenbahn, das ist billig und praktisch. In Spanien war das anders: Meine Eltern wohnen in einem kleinen Ort, und dort hat fast jede Familie zwei Autos, weil der Bus nur zweimal am Tag fährt. Als ich dort gewohnt habe, hatte ich auch ein kleines Auto.' },
            { q: 'Ich finde, ohne Auto ist man nicht frei. Am Wochenende möchte ich spontan wegfahren können. Was meinen Sie dazu?', secs: 60, prep: 0,
              model: 'Das verstehe ich, spontan wegfahren ist natürlich schön. Aber man kann auch mit dem Zug viele Ausflüge machen, und wenn man wirklich ein Auto braucht, kann man eins leihen. Ich glaube, in der Stadt ist man ohne Auto sogar freier, weil man keinen Parkplatz suchen muss und weniger Geld ausgibt. Auf dem Land haben Sie aber recht, da braucht man ein Auto.' },
            { q: 'Was müsste sich ändern, damit mehr Menschen auf das Auto verzichten?', secs: 60, prep: 0 },
          ] },
      ],
    },
    {
      id: 'm3', ref: 'Mündlicher Ausdruck, Teil 3', title: 'Gemeinsam etwas planen',
      about: 'Ihr Deutschkurs ist bald zu Ende. Sie möchten zusammen mit Ihrer Gesprächspartnerin einen Ausflug für die ganze Kursgruppe organisieren. Machen Sie Vorschläge, reagieren Sie auf die Vorschläge Ihrer Partnerin und einigen Sie sich am Ende.',
      blocks: [
        { t: 'ex', kind: 'talk', marking: 'telc', h: 'Planen Sie den Ausflug zusammen.',
          items: [
            { q: 'Also, wir sollen den Ausflug für unseren Kurs planen. Hast du schon eine Idee, wohin wir fahren könnten?', secs: 45, prep: 60,
              notes: ['Wohin fahren?', 'An welchem Tag?', 'Wie kommen alle dorthin?', 'Essen und Trinken?', 'Was kostet es?', 'Wer macht was?'],
              model: 'Ja, ich hätte eine Idee. Wir könnten an den See fahren, der ist nur eine Stunde mit dem Zug entfernt. Dort kann man spazieren gehen, und wenn es warm ist, auch schwimmen. Was hältst du davon? Oder möchtest du lieber in eine Stadt fahren, zum Beispiel in ein Museum?' },
            { q: 'Der See ist eine gute Idee. Aber wann? Unter der Woche haben viele aus dem Kurs keine Zeit, weil sie arbeiten.', secs: 45, prep: 0,
              model: 'Stimmt, dann ist ein Samstag am besten. Der Kurs endet am 28. Juni, also könnten wir am Samstag danach fahren, am 1. Juli. Ich schlage vor, dass wir morgens um neun Uhr losfahren, dann haben wir den ganzen Tag Zeit.' },
            { q: 'Gut. Und wie fahren wir? Mit dem Auto oder mit dem Zug?', secs: 45, prep: 0,
              model: 'Ich finde, wir sollten mit dem Zug fahren. Nicht alle haben ein Auto, und mit dem Zug können wir zusammen fahren. Es gibt außerdem ein Gruppenticket, das ist ziemlich günstig.' },
            { q: 'Und was machen wir mit dem Essen? Gehen wir in ein Restaurant?', secs: 45, prep: 0,
              model: 'Ein Restaurant ist für so viele Leute vielleicht zu teuer. Wie wäre es mit einem Picknick? Jeder bringt etwas mit, zum Beispiel ein Essen aus seinem Heimatland. Das passt gut zu unserem Kurs, weil wir aus so vielen Ländern kommen.' },
            { q: 'Super Idee! Und wer kümmert sich um was? Was möchtest du übernehmen?', secs: 45, prep: 0,
              model: 'Ich kann die Zugverbindung heraussuchen und das Gruppenticket kaufen. Könntest du eine Liste machen, wer was zum Essen mitbringt? Dann fragen wir morgen im Kurs, wer mitkommt, und sagen der Lehrerin Bescheid. Einverstanden?' },
            { q: 'Und wenn es an dem Tag regnet?', secs: 30, prep: 0 },
          ] },
      ],
    },
  ],
};
