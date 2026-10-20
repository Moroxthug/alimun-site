// Visual comparison of a current page (port 4173) and its rebuild (port 4174).
// Env: PAGE (path, e.g. "tiers"), KEEP (sections to keep, rest removed on both),
// TARGET (CSS selector of the element under review), OUT (screenshot folder).
// Takes the element at several scroll positions, desktop and phone, plus a
// second load of the current page to measure animation noise.
const { test } = require('@playwright/test');
const { PAGE = '', KEEP = '99', TARGET = 'body', OUT = '/tmp/cmp', HOVER = '' } = process.env;
const sites = { old: 'http://localhost:4173/', new: 'http://localhost:4174/', old2: 'http://localhost:4173/' };
for (const [vw, vh, tag] of [[1440, 900, 'desktop'], [390, 844, 'phone']]) {
  for (const [name, base] of Object.entries(sites)) {
    test(`${name}-${tag}`, async ({ page }) => {
      const errs = []; page.on('pageerror', e => errs.push(e.message));
      await page.route('**/api/**', r => r.fulfill({ status: 200, contentType: 'application/json', body: '{"ok":true}' }));
      await page.setViewportSize({ width: vw, height: vh });
      await page.goto(base + PAGE); await page.waitForTimeout(500);
      await page.getByText('REJECT ALL', { exact: false }).first().click().catch(() => {});
      await page.evaluate((keep) => {
        const secs = [...document.querySelectorAll('section.section:not(.is-footer)')];
        secs.slice(keep).forEach(el => el.remove());
        if (keep < 99) document.querySelector('footer')?.remove();
        const s = document.createElement('div'); s.style.height = '2000px';
        (secs[Math.min(keep, secs.length) - 1] || document.querySelector('main')).after(s);
      }, Number(KEEP));
      const el = page.locator(TARGET).first();
      const top = await el.evaluate(e => e.getBoundingClientRect().top + window.scrollY);
      const h = await el.evaluate(e => e.getBoundingClientRect().height);
      let i = 0;
      for (const f of [-0.5, 0, 0.35, 0.7]) {
        await page.evaluate((y) => window.scrollTo(0, y), Math.max(0, Math.round(top + f * Math.min(h, vh))));
        await page.waitForTimeout(1800);
        await page.evaluate(() => document.querySelectorAll('video').forEach(v => { v.pause(); v.currentTime = 0; }));
        await page.waitForTimeout(400);
        await page.screenshot({ path: `${OUT}/${name}-${tag}-${i++}.png` });
      }
      if (HOVER && tag === 'desktop') {
        const hv = page.locator(HOVER).first(); await hv.scrollIntoViewIfNeeded(); await page.waitForTimeout(1200);
        await hv.hover(); await page.waitForTimeout(1200);
        await page.screenshot({ path: `${OUT}/${name}-${tag}-hover.png` });
      }
      const links = await el.locator('a').evaluateAll(as => as.map(a => a.getAttribute('href')));
      console.log(`${name} ${tag} height=${Math.round(h)} links=${JSON.stringify(links)} errors=${JSON.stringify(errs)}`);
    });
  }
}
