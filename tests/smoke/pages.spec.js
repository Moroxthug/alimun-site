// Local smoke test: key pages and the three dashboards in ?preview=1 mode
// (preview only works on localhost) must load with no console errors.
const { test, expect } = require('@playwright/test');

const PAGES = [
  '/', '/tiers.html', '/signup.html', '/signin.html', '/about-us.html', '/services.html',
  '/corporate.html', '/contact.html', '/careers.html', '/fr/', '/es/tiers.html',
  '/student-dashboard.html?preview=1',
  '/teacher-dashboard.html?preview=1',
  '/admin.html?preview=1',
];

// Third-party noise we cannot control from the page (blocked trackers,
// CDN warnings). Anything else is a failure.
const IGNORE = [/favicon/i, /Access to font at/i, /net::ERR_/i, /Failed to load resource/i, /third-party cookie/i];

for (const path of PAGES) {
  test(`no console errors: ${path}`, async ({ page }) => {
    const errors = [];
    page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
    page.on('pageerror', (err) => errors.push(String(err)));
    // The static server does not run api/; answer with an empty config so
    // pages exercise their own code paths.
    await page.route('**/api/**', (route) => route.fulfill({ status: 200, contentType: 'application/json', body: '{}' }));
    const res = await page.goto(path, { waitUntil: 'load' });
    expect(res && res.status(), `HTTP status for ${path}`).toBeLessThan(400);
    await page.waitForTimeout(1500);
    const real = errors.filter((e) => !IGNORE.some((re) => re.test(e)));
    expect(real, real.join('\n')).toEqual([]);
  });
}
