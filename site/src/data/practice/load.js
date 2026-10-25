// Practice sets for the site build (docs/BOOKS.md "Practice sets"): hand-written rounds for the Practice screen.
const setFiles = import.meta.glob('./*-*.js', { eager: true });

export function allSets() {
  return Object.values(setFiles).map(({ SET }) => SET);
}
