// The course books for the site build (docs/BOOKS.md): book files with their unit files merged in.
import { assemble } from './explain.js';

const bookFiles = import.meta.glob('./*-*.js', { eager: true });
const unitFiles = import.meta.glob('./units/*/*.js', { eager: true });

export function allBooks() {
  return Object.values(bookFiles).map(({ BOOK }) => {
    const units = {};
    Object.entries(unitFiles).forEach(([p, m]) => {
      const [, book, unit] = p.match(/units\/([^/]+)\/([^/]+)\.js$/);
      if (book === BOOK.id) units[unit] = m.UNIT;
    });
    return assemble(BOOK, units);
  });
}
