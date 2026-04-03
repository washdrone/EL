import { defineConfig, devices } from "@playwright/test";

const baseURL = process.env.SITE_URL || "http://localhost:3000";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    baseURL,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
  },
  projects: [
    {
      name: "desktop-chrome",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "iphone-13",
      use: {
        ...devices["iPhone 13"],
        // Use Chromium engine since WebKit binaries are unavailable
        defaultBrowserType: "chromium",
      },
    },
    {
      name: "pixel-7",
      use: { ...devices["Pixel 7"] },
    },
    {
      name: "ipad-mini",
      use: {
        ...devices["iPad Mini"],
        defaultBrowserType: "chromium",
      },
    },
  ],
  webServer: baseURL.includes("localhost")
    ? {
        command: "npm run dev",
        url: baseURL,
        reuseExistingServer: true,
        timeout: 30_000,
      }
    : undefined,
});
