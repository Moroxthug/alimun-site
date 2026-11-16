# Help article data files (docs/HELP_PLAN.md, Part 1)

One file per article: `site/src/data/help/<lang>/<slug>.js`. English is the source; other languages come after the owner approves the English.

```js
// Checked <date> against: <files, pages and Terms sections this article was written from>.
export default {
  slug: 'join-your-live-class',          // file name without .js, lowercase-hyphens
  section: 'help',                       // 'help' (how things work) or 'support' (when something is wrong: payment failed, can't join, refunds, reporting a problem)
  subject: 'classes',                    // classes | plans | dashboard | practice | tutor | account | teachers
  audience: 'student',                   // student | teacher | all
  updated: '2026-11-16',
  status: 'draft',                       // the owner switches it to 'approved'; only approved articles are published or used by the assistant
  title: 'How do I join my live class?', // a question a person would ask, in their words
  summary: 'One sentence that answers the question on its own.',
  body: [                                // plain paragraphs, in sentences
    'Paragraph one ...',
    'Paragraph two ...',
  ],
  related: ['change-or-cancel-your-plan'], // slugs of other help articles
};
```

Rules (CLAUDE.md and HELP_PLAN.md):
- Only facts confirmed in the code, the live pages or the Terms. Anything unconfirmed is left out, never guessed, and reported as a gap.
- Sentences only: no bullet lists, numbered steps, chips or step counters. Name the screen and button as the page shows them.
- No emojis. No invented numbers, times or promises. Prices only if fixed in the code and unlikely to change; otherwise point to the Plans page.
- Friendly, plain English, "you". 2 to 5 short paragraphs.
- No AI wording for things that are not AI. The tutor, speaking practice, pronunciation checks and teacher grade drafts may be called AI.
- When a person is needed, say "write to us from Support in your dashboard, or email support@alimun.com".
