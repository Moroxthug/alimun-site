# Tutor part 4: Microsoft Azure on the Privacy page and in the Terms (draft, waiting for the owner)

Pronunciation scoring sends the student's recording to Microsoft Azure AI Speech. The Privacy page and the Terms are owner-locked blocks (`site/src/blocks/legal/gdpr.html`, `terms.html` and their translations in `site/src/blocks/legal/i18n/<lang>/`, hashes in `site/locked.json`), so nothing below is published yet. When the owner says yes, each Privacy sentence goes right after the tutor paragraph's sentence on Google Cloud ("The tutor's replies are turned into speech by Google Cloud." and its translations), the Terms sentence replaces the tutor paragraph's sentence on recordings, the two hashes in `site/locked.json` are re-approved, and `npm run build:site` is run.

The feature stays hidden until the Azure variables are in Vercel, so publishing these sentences can wait for the keys.

## Privacy page (one sentence added to the tutor paragraph)

- English: When you practise pronunciation with the tutor, your recording and the sentence you were asked to say are sent to Microsoft Azure AI Speech (servers in the European Union) to score how you said it, and the recording is then discarded; we keep only the scores. [COPY NEEDED: legal review, Microsoft as a processor.]
- French: Lorsque vous travaillez votre prononciation avec le tuteur, votre enregistrement et la phrase que vous deviez dire sont envoyés à Microsoft Azure AI Speech (serveurs dans l'Union européenne) pour évaluer votre prononciation, puis l'enregistrement est supprimé ; nous ne conservons que les scores. [COPY NEEDED: relecture juridique, Microsoft en tant que sous-traitant.]
- Spanish: Cuando practicas la pronunciación con el tutor, tu grabación y la frase que debías decir se envían a Microsoft Azure AI Speech (servidores en la Unión Europea) para puntuar cómo la dijiste, y después la grabación se elimina; solo conservamos las puntuaciones. [COPY NEEDED: revisión legal, Microsoft como encargado del tratamiento.]
- German: Wenn Sie mit dem Tutor die Aussprache üben, werden Ihre Aufnahme und der Satz, den Sie sagen sollten, an Microsoft Azure AI Speech (Server in der Europäischen Union) gesendet, um Ihre Aussprache zu bewerten; danach wird die Aufnahme gelöscht. Wir speichern nur die Bewertung. [COPY NEEDED: rechtliche Prüfung, Microsoft als Auftragsverarbeiter.]
- Italian: Quando eserciti la pronuncia con il tutor, la tua registrazione e la frase che dovevi dire vengono inviate a Microsoft Azure AI Speech (server nell'Unione europea) per valutare come l'hai detta, e poi la registrazione viene eliminata; conserviamo solo i punteggi. [COPY NEEDED: revisione legale, Microsoft come responsabile del trattamento.]
- Portuguese: Quando praticas a pronúncia com o tutor, a tua gravação e a frase que devias dizer são enviadas para o Microsoft Azure AI Speech (servidores na União Europeia) para avaliar como a disseste, e depois a gravação é eliminada; guardamos apenas as pontuações. [COPY NEEDED: revisão jurídica, a Microsoft como subcontratante.]
- Chinese: 当你和导师练习发音时，你的录音以及你需要朗读的句子会被发送到 Microsoft Azure AI Speech（服务器位于欧盟），用于为你的发音评分，之后录音即被删除；我们只保留分数。[COPY NEEDED: 法律审核，Microsoft 作为数据处理方。]
- Arabic: عندما تتدرّب على النطق مع المعلّم، يُرسَل تسجيلك والجملة التي طُلب منك قولها إلى Microsoft Azure AI Speech (خوادم داخل الاتحاد الأوروبي) لتقييم نطقك، ثم يُحذف التسجيل؛ ولا نحتفظ إلا بالنتائج. [COPY NEEDED: مراجعة قانونية، Microsoft بصفتها جهة معالجة.]

## Terms (one sentence replaced in the tutor paragraph)

English, replacing "Recordings you make for the tutor are used only to turn your speech into text and are not stored.":

- English: Recordings you make for the tutor are used only to turn your speech into text or to score your pronunciation, and are not stored.
- French: Les enregistrements que vous faites pour le tuteur servent uniquement à transcrire votre parole ou à évaluer votre prononciation, et ne sont pas conservés.
- Spanish: Las grabaciones que haces para el tutor se usan solo para pasar tu voz a texto o para puntuar tu pronunciación, y no se guardan.
- German: Aufnahmen, die Sie für den Tutor machen, werden nur verwendet, um Ihre Sprache in Text umzuwandeln oder Ihre Aussprache zu bewerten, und werden nicht gespeichert.
- Italian: Le registrazioni che fai per il tutor servono solo a trasformare la tua voce in testo o a valutare la tua pronuncia, e non vengono conservate.
- Portuguese: As gravações que fazes para o tutor servem apenas para transformar a tua voz em texto ou avaliar a tua pronúncia, e não são guardadas.
- Chinese: 你为导师录制的录音仅用于将你的语音转为文字或为你的发音评分，不会被保存。
- Arabic: تُستخدم التسجيلات التي تجريها للمعلّم فقط لتحويل كلامك إلى نص أو لتقييم نطقك، ولا يتم حفظها.
