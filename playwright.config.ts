import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  use: {
    headless: false,
    baseURL: 'https://guardio.app.getnotch.dev',
    storageState: 'tests/storage-states/guardio-auth.json'
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ]
});
