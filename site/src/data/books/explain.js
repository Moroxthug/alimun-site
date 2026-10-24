// Which strings in a course book are explanations (docs/BOOKS.md). They are written in English in the book file and
// shown in the learner's language from i18n/<book>.<lang>.json, keyed by the English text. Everything else (example
// sentences, exercise items, reading texts, dialogue lines) stays in the language being learned.
// visit(book, fn): fn(text, set) for every explanation; set(newText) replaces it.
export function visit(book, fn) {
  const at = (obj, key) => { if (typeof obj[key] === 'string' && obj[key].trim()) fn(obj[key], (v) => { obj[key] = v; }); };
  const block = (b) => {
    if (b.t === 'text' || b.t === 'tip') at(b, 'md');
    if (b.t === 'examples') b.items.forEach((x) => at(x, 'n'));
    if (b.t === 'table') {
      at(b, 'caption');
      const ex = b.explain || [];
      if (ex.includes('head')) b.head.forEach((_, i) => at(b.head, i));
      ex.filter((e) => /^col\d+$/.test(e)).forEach((e) => { const k = +e.slice(3); b.rows.forEach((r) => at(r, k)); });
    }
    if (b.t === 'dialogue') at(b, 'title');
    if (b.t === 'ex') { at(b, 'h'); (b.items || []).forEach((x) => at(x, 'why')); }
  };
  at(book, 'title');
  book.units.forEach((u) => {
    at(u, 'title'); at(u, 'goal');
    (u.pages || []).forEach((p) => {
      at(p, 'title'); at(p, 'about');
      (p.spreads || []).forEach((s) => s.forEach(block));
    });
    (u.test || []).forEach(block);
  });
}

// A copy of the book with its explanations in one language (missing translations stay in English).
export function localize(book, strings) {
  const copy = JSON.parse(JSON.stringify(book));
  if (strings) visit(copy, (text, set) => { if (strings[text]) set(strings[text]); });
  return copy;
}
