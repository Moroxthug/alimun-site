// Library shelves for the site build (docs/LIBRARY.md): one file per course language and level.
const files = import.meta.glob('./*-library.js', { eager: true });

export function allShelves() {
  return Object.values(files).map((m) => m.SHELF).filter(Boolean);
}
