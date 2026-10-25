// German-B2-goethe, Modul Sprechen (etwa 15 Minuten, 2 Teile). The examiner plays the partner in Teil 2.
// Original Alimun tasks and model answers; draft for review.
export const PAPER = {
  id: 'sprechen', title: 'Sprechen', minutes: 15,
  parts: [
    { id: 't1', ref: 'Teil 1', title: 'Vortrag halten',
      about: 'Sie halten einen Vortrag von etwa vier Minuten zum Thema „Arbeiten im Homeoffice“. Bereiten Sie sich mit den Punkten auf der Karte vor. Danach stellt Ihnen der Prüfer eine Frage zu Ihrem Vortrag.',
      blocks: [
        { t: 'ex', kind: 'talk', marking: 'goethe',
          h: 'Halten Sie Ihren Vortrag in zwei Abschnitten und beantworten Sie dann die Frage.',
          items: [
            { q: 'Bitte beginnen Sie jetzt mit Ihrem Vortrag zum Thema „Arbeiten im Homeoffice“. Stellen Sie das Thema vor, beschreiben Sie verschiedene Formen und erzählen Sie, wie die Situation in Ihrem Heimatland ist.',
              secs: 120,
              notes: ['Thema vorstellen und den Aufbau des Vortrags erklären', 'Verschiedene Formen beschreiben: immer, teilweise oder gelegentlich von zu Hause arbeiten', 'Die Situation in Ihrem Heimatland darstellen', 'Vor- und Nachteile nennen und bewerten', 'Ihre Meinung sagen und begründen', 'Den Vortrag abschließen und sich bei den Zuhörern bedanken'],
              model: 'In meinem Vortrag geht es um das Thema „Arbeiten im Homeoffice“. Zuerst möchte ich erklären, welche Formen es gibt, danach berichte ich über die Situation in meinem Heimatland, und zum Schluss spreche ich über Vor- und Nachteile und sage meine eigene Meinung.\n\nHomeoffice bedeutet, dass man seine Arbeit ganz oder teilweise von zu Hause aus erledigt. Manche Menschen arbeiten ausschließlich zu Hause und sehen ihre Kollegen nur in Videokonferenzen. Viel häufiger ist aber eine Mischform: Man ist zum Beispiel zwei Tage in der Woche im Büro und drei Tage zu Hause. Und es gibt Firmen, in denen man nur ausnahmsweise zu Hause bleiben darf, etwa wenn ein Handwerker kommt.\n\nIn meinem Heimatland war Homeoffice vor einigen Jahren noch fast unbekannt. Viele Chefs hatten Angst, dass die Mitarbeiter zu Hause weniger arbeiten. Inzwischen hat sich das stark verändert, besonders in großen Städten und bei Büroberufen. Im Handwerk, im Verkauf oder in der Pflege ist Homeoffice dagegen natürlich kaum möglich.' },
            { q: 'Danke. Bitte sprechen Sie jetzt weiter: Nennen Sie Vor- und Nachteile, sagen Sie Ihre Meinung und kommen Sie zum Schluss.',
              secs: 120,
              model: 'Kommen wir nun zu den Vor- und Nachteilen. Ein großer Vorteil ist, dass man keine Zeit für den Arbeitsweg verliert. Wer jeden Tag eine Stunde pendelt, gewinnt im Homeoffice fünf Stunden pro Woche. Außerdem kann man sich seinen Tag freier einteilen, was vor allem für Eltern wichtig ist. Auf der anderen Seite fehlt vielen der persönliche Kontakt. Kurze Gespräche in der Küche oder auf dem Flur, bei denen man Probleme schnell klärt, gibt es zu Hause nicht. Ein weiterer Nachteil ist, dass Arbeit und Freizeit leicht verschwimmen: Man schaut abends noch schnell in die E-Mails und kann nicht richtig abschalten.\n\nMeiner Meinung nach ist die Mischform die beste Lösung. Für konzentrierte Aufgaben ist das Homeoffice ideal, aber für Besprechungen und für das Teamgefühl sollte man regelmäßig ins Büro gehen. Wichtig ist, dass Firmen und Mitarbeiter klare Regeln vereinbaren, zum Beispiel, wann man erreichbar sein muss.\n\nDamit komme ich zum Schluss. Homeoffice ist aus der Arbeitswelt nicht mehr wegzudenken, aber es passt nicht für jeden Beruf und nicht für jeden Menschen. Vielen Dank für Ihre Aufmerksamkeit.' },
            { q: 'Vielen Dank für Ihren Vortrag. Ich habe noch eine Frage: Sie haben gesagt, dass im Homeoffice der persönliche Kontakt fehlt. Was können Firmen Ihrer Meinung nach tun, damit sich Mitarbeiter trotzdem als Team fühlen?',
              secs: 60 },
          ] },
      ] },
    { id: 't2', ref: 'Teil 2', title: 'Diskussion führen',
      about: 'Sie diskutieren mit einer Gesprächspartnerin oder einem Gesprächspartner über die Frage „Sollte es nach der Schule ein soziales Pflichtjahr geben?“. Der Prüfer übernimmt die Rolle Ihres Gesprächspartners. Tauschen Sie Argumente aus, reagieren Sie auf die Äußerungen und versuchen Sie am Ende, zu einem Ergebnis zu kommen.',
      blocks: [
        { t: 'ex', kind: 'talk', marking: 'goethe',
          h: 'Antworten Sie Ihrem Gesprächspartner und begründen Sie Ihre Meinung.',
          items: [
            { q: 'Ich habe gelesen, dass alle jungen Leute nach der Schule ein Jahr lang in einem sozialen Bereich arbeiten sollen, zum Beispiel in der Pflege oder im Umweltschutz. Ich finde das eigentlich eine gute Idee. Wie sehen Sie das?',
              secs: 60,
              notes: ['Erfahrungen für das Leben', 'Hilfe in Pflege und Umweltschutz', 'Freiheit bei der Berufswahl', 'Kosten für den Staat', 'Verzögerung von Ausbildung und Studium'],
              model: 'Da bin ich nur teilweise Ihrer Meinung. Natürlich kann man in so einem Jahr viel lernen, zum Beispiel Verantwortung zu übernehmen und mit ganz unterschiedlichen Menschen umzugehen. Und in der Pflege wird dringend Hilfe gebraucht. Trotzdem habe ich ein Problem mit dem Wort „Pflicht“. Wer gezwungen wird, in einem Altenheim zu arbeiten, macht das vielleicht nicht mit dem nötigen Engagement, und das merken die Bewohner sofort. Ich fände es besser, wenn der freiwillige Dienst attraktiver wäre.' },
            { q: 'Aber wenn es freiwillig ist, machen es doch nur die, die sowieso schon sozial engagiert sind. Gerade die anderen könnten davon doch am meisten profitieren, oder?',
              secs: 50 },
            { q: 'Ein Argument dagegen ist ja, dass man ein ganzes Jahr später mit der Ausbildung oder dem Studium anfängt. Halten Sie das für ein großes Problem?',
              secs: 50 },
            { q: 'Wie ist das eigentlich in Ihrem Heimatland? Gibt es dort so einen Dienst, und was halten die Menschen davon?',
              secs: 45 },
            { q: 'Wir müssen langsam zu einem Ergebnis kommen. Worauf können wir uns Ihrer Meinung nach einigen?',
              secs: 60 },
          ] },
      ] },
  ],
};
