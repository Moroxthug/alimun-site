// Every .js file under api/ (outside _-prefixed helper folders/files) becomes
// one serverless function. Hobby allowed 12; the owner moved the project to Pro
// on 23 Oct 2026, so the cap is now a guard against splitting handlers for no
// reason (CLAUDE.md, "Functions"), not a plan limit.
const fs = require('fs');
const path = require('path');

const MAX = Number(process.env.MAX_FUNCTIONS || 20);
const apiDir = path.resolve(__dirname, '..', '..', 'api');

function walk(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    if (name.startsWith('_') || name.startsWith('.')) continue;
    const p = path.join(dir, name);
    if (fs.statSync(p).isDirectory()) walk(p, out);
    else if (/\.(js|mjs|cjs|ts)$/.test(name)) out.push(path.relative(apiDir, p));
  }
  return out;
}

const fns = walk(apiDir).sort();
console.log(`${fns.length} functions (limit ${MAX}):\n  ` + fns.join('\n  '));
if (fns.length > MAX) {
  console.error(`\nToo many serverless functions: ${fns.length} > ${MAX}. Add an ?action= to an existing handler instead.`);
  process.exit(1);
}
