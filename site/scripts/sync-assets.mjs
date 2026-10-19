// Copies the shared assets of the current site into public/ so the rebuilt
// pages load exactly the same CSS, scripts, images, videos and fonts.
import { cpSync, rmSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..', '..');
const pub = resolve(import.meta.dirname, '..', 'public');
rmSync(pub, { recursive: true, force: true });
mkdirSync(pub, { recursive: true });
for (const dir of ['css', 'js', 'images', 'videos', 'fonts']) {
  cpSync(resolve(root, dir), resolve(pub, dir), { recursive: true });
}
