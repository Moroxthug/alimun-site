// Which strings in a course book are explanations (docs/BOOKS.md). They are written in English in the book file and
// shown in the learner's language from i18n/<book>.<lang>.json, keyed by the English text. Everything else (example
// sentences, exercise items, reading texts, dialogue lines) stays in the language being learned.
// visit(book, fn): fn(text, set) for every explanation; set(newText) replaces it.
export function visit(book, fn) {
  const at = (obj, key) => { if (typeof obj[key] === 'string' && obj[key].trim()) fn(obj[key], (v) => { obj[key] = v; }); };
  const block = blockVisitor(at);
  /* Library shelves (docs/LIBRARY.md): each piece's summary, word meanings and exercises; titles stay in the language learned */
  if (book.pieces) {
    book.pieces.forEach((p) => { at(p, 'about'); (p.words || []).forEach((w) => at(w, 'n')); (p.blocks || []).forEach(block); });
    return;
  }
  at(book, 'title');
  if (book.blocks) { at(book, 'about'); book.blocks.forEach(block); return; }
  book.units.forEach((u) => {
    at(u, 'title'); at(u, 'goal');
    (u.pages || []).forEach((p) => {
      at(p, 'title'); at(p, 'about');
      (p.spreads || []).forEach((s) => s.forEach(block));
    });
    (u.test || []).forEach(block);
  });
}

// The explanations inside one block (practice sets have blocks instead of units).
function blockVisitor(at) {
  return (b) => {
    if (b.t === 'text' || b.t === 'tip') at(b, 'md');
    if (b.t === 'examples') b.items.forEach((x) => at(x, 'n'));
    if (b.t === 'table') {
      at(b, 'caption');
      const ex = b.explain || [];
      if (ex.includes('head')) b.head.forEach((_, i) => at(b.head, i));
      ex.filter((e) => /^col\d+$/.test(e)).forEach((e) => { const k = +e.slice(3); b.rows.forEach((r) => at(r, k)); });
    }
    if (b.t === 'dialogue') at(b, 'title');
    if (b.t === 'ex') {
      at(b, 'h'); at(b, 'tense');
      (b.items || []).forEach((x) => at(x, 'why'));
      (b.rows || []).forEach((r) => at(r, 2));
      (b.words || []).forEach((w) => { if (typeof w === 'object') at(w, 'why'); });
      if ((b.explain || []).includes('groups')) (b.groups || []).forEach((_, i) => at(b.groups, i));
    }
  };
}

// A copy of the book with its explanations in one language (missing translations stay in English).
export function localize(book, strings) {
  const copy = JSON.parse(JSON.stringify(book));
  if (strings) visit(copy, (text, set) => { if (strings[text]) set(strings[text]); });
  return copy;
}

// The book with its written units: each unit file (units/<book>/<unit>.js, exporting UNIT) replaces the planned entry
// with the same id. A unit's "plan" (the outline writers work from) is not served.
export function assemble(book, units) {
  const copy = JSON.parse(JSON.stringify(book));
  copy.units = copy.units.map((u) => {
    const w = units && units[u.id];
    const out = w ? JSON.parse(JSON.stringify(w)) : u;
    delete out.plan;
    return out;
  });
  return copy;
}
