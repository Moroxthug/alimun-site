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

## Missing (31 Oct 2026)
Done: every book up to B2 and its goal books, plus English C2, Spanish C2, Italian C2, Portuguese C2, French C2, German C2, French C1 and German C1 in all seven languages.
Still to translate (all seven languages each): English C1 is done; Italian C1, Portuguese C1, Spanish C1. When a book is finished, strike it from this list in the same commit.
Tip: `scripts/book-strings.mjs` does not reuse translations from other books of the same language, so strings that appear in several books (instructions such as "Choose the best answer.") can be copied from the existing files for that language before translating the rest.
