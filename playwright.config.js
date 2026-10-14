const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: 'tests/smoke',
  timeout: 30000,
  retries: process.env.CI ? 1 : 0,
  use: { baseURL: 'http://localhost:4173' },
  webServer: {
    command: 'npx --yes serve@14.2.4 -l 4173 .',
    url: 'http://localhost:4173/',
    reuseExistingServer: !process.env.CI,
    timeout: 60000,
  },
});
