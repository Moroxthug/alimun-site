// The mock tests for the site build (docs/TESTS.md): one file per test, each importing its papers.
const files = import.meta.glob('./*-*.js', { eager: true });

export function allTests() {
  return Object.values(files).map((m) => m.TEST).filter(Boolean);
}
