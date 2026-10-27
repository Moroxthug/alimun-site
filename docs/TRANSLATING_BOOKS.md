# Translating book explanations

Course and goal books keep their explanations (titles, goals, instructions, notes, tips, every `why`, table headings)
in English; learners read them from `site/src/data/books/i18n/<book>.<lang>.json`, a flat JSON object keyed by the
exact English text. Languages: es fr de pt it zh ar (Moroccan pages use fr).

## For each book and language
1. `mkdir -p /tmp/tr/<book>.<lang> && node scripts/book-strings.mjs <book> <lang> > /tmp/tr/<book>.<lang>/todo.json`
   lists every string (existing translations filled in, the rest empty). Keep all working files in that folder.
2. Translate every empty value and write `site/src/data/books/i18n/<book>.<lang>.json` (UTF-8, 2-space indent, keys
   exactly as listed, same order). Strings that already have a translation in another file of the same language can be
   reused as they are. Write large books in parts and merge them with a small node script; never leave a value empty.
3. `node scripts/check-i18n.mjs <book> <lang>` must report 0 problems.

## How to translate
- Match an existing file of the same language and goal, e.g. `German-A2-relocation.<lang>.json` or the book's course
  book (`Spanish-B1.<lang>.json` for the Spanish B1 goal books): same tone, form of address and grammar terms.
- Simple, friendly language for learners. Keep `**bold**`, `*italic*` (same number of each) and `___` gaps.
- Words and sentences in the language being learned (usually in *italics*) stay exactly as written.
- Arabic: Modern Standard Arabic, clear and simple. Chinese: simplified. Portuguese: European, as in the existing files.
- No emojis. Do not add or drop information.

## Missing (27 Oct 2026)
None. Every book has an explanation file in every language (Italian, Chinese and Arabic included). If a new book is added, list its missing files here.
