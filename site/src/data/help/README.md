# Help content (docs/HELP_PLAN.md, Part 1)

One file per item: `site/src/data/help/<lang>/<slug>.js`. English first; the other eight languages are translated after the owner approves the English. The dashboards' Help page, the search, the assistant and (later) the public `/help` pages all read these same files.

```js
// Sources checked (internal, never shown): api/enroll.js, js/app/classes.js, Terms §4 ...
export default {
  slug: 'join-live-class',          // same in every language; the URL /help/<slug>
  lang: 'en',
  kind: 'answer',                   // 'answer' | 'guide' | 'problem'
  subject: 'classes',               // 'start' | 'classes' | 'plans' | 'learning' | 'tutor' | 'account' | 'teaching'
  audience: 'student',              // 'student' | 'teacher' | 'all'
  title: 'How do I join my live class?',
  summary: 'One sentence shown in search results and given to the assistant.',
  words: ['join class', 'class link', 'video call'],   // what people type; search only, never shown
  updated: '2026-11-12',
  body: [                           // answers and guides; for problems, an optional intro
    { h: 'A section heading' },     // guides only, sparingly
    { p: 'A paragraph in sentences. **Bold** is allowed; nothing else.' },
    { shot: '#/classes', alt: 'The Classes page with the Join button' }   // screenshot taken later from /app?sample=1
  ],
  check: {                          // problems only: a guided check, one question at a time
    start: 'sound',
    steps: {
      sound: { auto: 'speaker', ask: 'Do you hear the test sound?', yes: 'mic', no: 'fix-volume' },
      mic: { auto: 'mic', ask: 'Does the bar move when you speak?', yes: 'done', no: 'fix-permission' },
      'fix-volume': { fix: 'Sentences telling the person what to do.', next: 'sound' },
      'fix-permission': { fix: '...', next: 'mic' },
      done: { solved: 'Glad it works. ...' }
    }
  },
  related: ['other-slug'],
  missing: ['What could not be confirmed from the code or the Terms, for the owner.']   // internal, never shown
};
```

`auto` names a check the page can run on its own (Part 2 builds them): `speaker`, `mic`, `camera`, `browser`, `connection` in the browser; `payment`, `access`, `seat`, `next_session`, `email_confirmed` on the server for a signed-in person. A step with `auto` still has its question for when the check cannot run. Any step may say `handover: true` to end in "Talk to a person". Step ids are free text, never shown.

## Writing rules
- Facts only from the code, the dashboards' text (`js/translations.js`), the Terms and Privacy blocks (`site/src/blocks/legal/`) and the plans in `docs/`. Anything that cannot be confirmed is left out and listed in `missing`.
- No prices or amounts (they change and differ by country): link to the plans page in words ("see Plans in Settings" or "the Plans page") instead. No promised response times, refunds, discounts or exceptions beyond what the Terms say.
- Name buttons and pages exactly as the dashboards' English text names them.
- Sentences only: no numbered steps, step counters, bullet lists, checklists, tags or emojis. Guides use a few `h` headings and paragraphs. British spelling as on the site (cancelled, organise, colour).
- AI is named only where a feature really uses it (the tutor, speaking practice, pronunciation checks, homework grades drafted for teachers), never otherwise.
- Short: an answer is two to five paragraphs; a guide up to about twelve; a problem check up to about ten steps.
