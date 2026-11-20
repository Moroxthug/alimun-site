// Layout check for the dashboards (owner, 19 Nov 2026: "we need to hardcode something about the design"). Every teacher
// and admin page is opened with sample data at a desktop width (1600 px) and a phone width (375 px), and fails on what
// shipped broken before:
//   - the page scrolls sideways;
//   - a long text squeezed into a narrow column (course contracts in an 84 px "time" column, Nov 2026);
//   - a tab bar with a single tab (the first practice classroom side panel).
// Run: npx playwright test tests/smoke/layout.spec.js   (part of CLAUDE.md "Verify before claiming done")
const { test, expect } = require('@playwright/test');

const TEACH = ['today', 'classes', 'classes/availability', 'classes/new', 'classes/practice', 'students', 'homework', 'lessons', 'material', 'messages', 'payouts', 'settings', 'help'];
const ADMIN = ['overview', 'onboarding', 'teachers', 'contact'];
const SIZES = [{ name: 'desktop', width: 1600, height: 930 }, { name: 'phone', width: 375, height: 812 }];

async function problems(page, desktop) {
  return page.evaluate((desktop) => {
    const out = [];
    const view = document.querySelector('#view') || document.body;
    if (document.documentElement.scrollWidth > window.innerWidth + 1) out.push(`scrolls sideways: ${document.documentElement.scrollWidth}px wide in a ${window.innerWidth}px window`);
    view.querySelectorAll('[role="tablist"]').forEach((tl) => { if (tl.querySelectorAll('[role="tab"]').length === 1) out.push('a tab bar with a single tab'); });
    const minW = desktop ? 220 : 150;
    view.querySelectorAll('p, small, b, span, li, label, h2, h3, dd').forEach((el) => {
      const own = Array.from(el.childNodes).filter((n) => n.nodeType === 3).map((n) => n.textContent).join('').trim();
      if (own.length < 60) return;
      const r = el.getBoundingClientRect(), cs = getComputedStyle(el);
      if (!r.width || cs.visibility === 'hidden' || cs.display === 'none') return;
      if (r.width < minW) out.push(`text squeezed to ${Math.round(r.width)}px: "${own.slice(0, 60)}…"`);
    });
    return Array.from(new Set(out));
  }, desktop);
}

for (const size of SIZES) {
  test.describe(`${size.name} layout`, () => {
    test.use({ viewport: { width: size.width, height: size.height } });
    for (const route of TEACH) {
      test(`teacher #/${route}`, async ({ page }) => {
        await page.goto(`/app/teach?sample=1#/${route}`);
        await page.waitForSelector('#loading.is-done', { state: 'attached', timeout: 15000 });
        await page.waitForTimeout(1200);
        expect(await problems(page, size.name === 'desktop')).toEqual([]);
      });
    }
    for (const route of ADMIN) {
      test(`admin #/${route}`, async ({ page }) => {
        await page.goto(`/app/admin?sample=1#/${route}`);
        await page.waitForTimeout(2500);
        expect(await problems(page, size.name === 'desktop')).toEqual([]);
      });
    }
  });
}
