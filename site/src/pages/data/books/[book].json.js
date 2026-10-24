// Course books as static JSON (/data/books/<Language>-<Level>.json), loaded by the dashboard reader (js/app/reader.js)
// only for the book that is opened. Source: src/data/books/<Language>-<Level>.js (docs/BOOKS.md).
const books = import.meta.glob('../../../data/books/*.js', { eager: true });

export function getStaticPaths() {
  return Object.values(books).map((m) => ({ params: { book: m.BOOK.id } }));
}

export function GET({ params }) {
  const book = Object.values(books).find((m) => m.BOOK.id === params.book).BOOK;
  return new Response(JSON.stringify(book), { headers: { 'Content-Type': 'application/json' } });
}
