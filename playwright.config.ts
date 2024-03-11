import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: "./tests",
  timeout: 25000,
  expect: {
    timeout: 25000
  },
  reporter: [['html'], ['junit', { outputFile: './playwright-report/results.xml' }], ['list']],
  use: {
    actionTimeout: 100000,
    navigationTimeout: 100000,
    headless: false,
    // retries: 1,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'Chromium',
      use: {
          ...devices['Desktop Chrome'],
          viewport: { width: 1920, height: 1080 },
          navigationTimeout: 100000,
      },
    },
    {
      name: 'Mozila',
      use: {
          ...devices['Desktop Firefox'],
          viewport: { width: 1920, height: 1080 },
          navigationTimeout: 100000,
      },
    }
  ],
});