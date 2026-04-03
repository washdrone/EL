import { test, expect } from "@playwright/test";

test.describe("Cookie consent", () => {
  test("cookie banner appears on fresh visit", async ({ page }) => {
    // Clear any stored consent
    await page.goto("/", { waitUntil: "domcontentloaded" });
    await page.evaluate(() => localStorage.removeItem("griddrone_cookie_consent"));
    await page.reload({ waitUntil: "domcontentloaded" });

    const banner = page.locator('[role="dialog"][aria-label="Cookie-samtycke"]');
    await expect(banner).toBeVisible({ timeout: 3000 });
  });

  test("accepting cookies hides the banner", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });
    await page.evaluate(() => localStorage.removeItem("griddrone_cookie_consent"));
    await page.reload({ waitUntil: "domcontentloaded" });

    const banner = page.locator('[role="dialog"][aria-label="Cookie-samtycke"]');
    await expect(banner).toBeVisible({ timeout: 3000 });

    await banner.locator('button:has-text("Godkänn")').click();
    await expect(banner).not.toBeVisible();
  });

  test("declining cookies hides the banner", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });
    await page.evaluate(() => localStorage.removeItem("griddrone_cookie_consent"));
    await page.reload({ waitUntil: "domcontentloaded" });

    const banner = page.locator('[role="dialog"][aria-label="Cookie-samtycke"]');
    await expect(banner).toBeVisible({ timeout: 3000 });

    await banner.locator('button:has-text("Avböj")').click();
    await expect(banner).not.toBeVisible();
  });

  test("banner does not reappear after consent", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });
    await page.evaluate(() => localStorage.setItem("griddrone_cookie_consent", "accepted"));
    await page.reload({ waitUntil: "domcontentloaded" });

    const banner = page.locator('[role="dialog"][aria-label="Cookie-samtycke"]');
    await expect(banner).not.toBeVisible({ timeout: 2000 });
  });
});
