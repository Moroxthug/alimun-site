# Email pictures

The header pictures (`images/email/hero-*.png`) and the sign-off mark (`images/email/mark.png`) used by
`api/_lib/email.js`. Mail apps do not show SVG, so the approved cast (`js/app/cast.js`, `js/app/cast3.js`) is
rendered to PNG here. The logo is part of each header picture, on its light panel, so it stays readable when a
mail app darkens the email.

To change or add one: edit `heroes.json` (tint, drawings, bubble), copy `heroes.html` to the repo root as
`__hero.html`, serve the repo (`npx serve -l 5055 .`), run
`node render-heroes.js heroes.json <out-dir>` from a folder outside the repo (the global Playwright), quantise to
128 colours (Pillow, no dither) and copy into `images/email/`. Add the alt text to `HEROES` in `api/_lib/email.js`.
Remove `__hero.html` afterwards.
