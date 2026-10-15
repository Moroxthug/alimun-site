// Local smoke test: key pages and the three dashboards in ?preview=1 mode
// (preview only works on localhost) must load with no console errors.
const { test, expect } = require('@playwright/test');

const PAGES = [
  '/', '/tiers.html', '/signup.html', '/signin.html', '/about-us.html', '/services.html',
  '/corporate.html', '/contact.html', '/careers.html', '/fr/', '/es/tiers.html',
  // Clean URLs: `serve` 301-redirects *.html to the extensionless path and
  // drops the query string, which silently turned these into /signin checks.
  '/student-dashboard?preview=1',
  '/teacher-dashboard?preview=1',
  // Admin has no preview mode: without an admin session it must send you to sign in.
  '/admin?preview=1',
];
const EXPECT_PATH = {
  '/student-dashboard?preview=1': '/student-dashboard',
  '/teacher-dashboard?preview=1': '/teacher-dashboard',
  '/admin?preview=1': '/signin',
};

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
    // Never query the live database from tests: preview pages get "no rows",
    // answered the way PostgREST does (406 PGRST116 for .single()).
    await page.route('**/rest/v1/**', (route) => {
      const single = /vnd\.pgrst\.object/.test(route.request().headers()['accept'] || '');
      return single
        ? route.fulfill({ status: 406, contentType: 'application/json', body: JSON.stringify({ code: 'PGRST116', details: 'The result contains 0 rows', hint: null, message: 'JSON object requested, multiple (or no) rows returned' }) })
        : route.fulfill({ status: 200, contentType: 'application/json', body: '[]' });
    });
    const res = await page.goto(path, { waitUntil: 'load' });
    expect(res && res.status(), `HTTP status for ${path}`).toBeLessThan(400);
    await page.waitForTimeout(1500);
    if (EXPECT_PATH[path]) {
      expect(new URL(page.url()).pathname, `${path} ended on the wrong page`).toBe(EXPECT_PATH[path]);
    }
    const real = errors.filter((e) => !IGNORE.some((re) => re.test(e)));
    expect(real, real.join('\n')).toEqual([]);
  });
}
