// Static rebuild of the public site. Blocks in src/blocks are copied verbatim
// from the Webflow export so the design and its animations stay identical.
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  build: { format: 'file' },
  compressHTML: false,
});
