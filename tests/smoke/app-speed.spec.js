// The app's speed budget (docs/APP_PLAN.md, step 2): on a repeat visit, with the processor slowed down four times
// (roughly a mid-range phone), the learners' app must be drawn and answer taps in under one second. The mark
// 'alimun-ready' is set by js/app/shell.js once the first screen is on the page. The size of the bundled script is
// checked by scripts/bundle-app.js during the build.
const { test, expect } = require('@playwright/test');

const BUDGET_MS = 1000;

test('the app is ready in under a second on a repeat visit', async ({ page, context }) => {
  const ready = () => page.waitForFunction(() => performance.getEntriesByName('alimun-ready').length > 0, null, { timeout: 15000 });
  await page.goto('/app?sample=1');
  await ready();
  const cdp = await context.newCDPSession(page);
  await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 });
  const times = [];
  for (let i = 0; i < 3; i++) {
    await page.reload();
    await ready();
    times.push(await page.evaluate(() => performance.getEntriesByName('alimun-ready')[0].startTime));
  }
  times.sort((a, b) => a - b);
  const median = times[1];
  console.log(`app ready (repeat visit, CPU x4): ${times.map((t) => Math.round(t)).join(', ')} ms`);
  expect(median).toBeLessThan(BUDGET_MS);
});
