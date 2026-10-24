# Drawing sources (step 1, approved by the owner on 24 Oct 2026)

- `zoo.json`, `cast2.json`: the Alimun zoo (owl, parrot, snail, cat, dog) and the second cast (language buddies, fantasy and everyday friends) as SVG strings, drawn for Alimun. `cast2.py` regenerates `cast2.json`. `zoo.css` holds the bubble styles and the animations (sway, bob, breathe, crawl, wag, float, spin).
- `board4.html`, `board5.html`: the boards shown to the owner (`../drawings-cast-1.png`, `../drawings-cast-2.png`); `gen4.py`, `gen5.py` built them (paths inside point to the session's temporary folders; adjust when reusing).
- The book character is built from the logo path in `images/favicon.svg` with different eyes (open, happy, wow, think, sleep); see `board4.html`.
- `open-doodles/` (opendoodles.com) and `open-peeps/` (openpeeps.com): CC0 public domain, free for commercial use, no credit needed. Recolouring rules: Open Doodles accent #FF5678 -> lime/gold/coral/mint, ink #000000 -> forest #1a443c; Open Peeps: first white shape in the body = clothes colour, first white shape in the head = skin tone, black in the head = hair colour (black, #3B2416, #6E2E14).
- `alimun-loader.html`: the owner's loader (the template inside the bundle holds the plain HTML and CSS).
