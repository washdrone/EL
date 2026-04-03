import { test, expect } from "@playwright/test";

test.describe("Responsive layout", () => {
  test("no horizontal overflow on home page", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(500);

    const hasOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    expect(hasOverflow).toBe(false);
  });

  test("no horizontal overflow on kontakt page", async ({ page }) => {
    await page.goto("/kontakt", { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(500);

    const hasOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    expect(hasOverflow).toBe(false);
  });

  test("no horizontal overflow on tjanster page", async ({ page }) => {
    await page.goto("/tjanster/kraftledningsinspektion", { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(500);

    const hasOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    expect(hasOverflow).toBe(false);
  });

  test("primary CTA is visible and clickable", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });
    const cta = page.locator('a[href="/kontakt"]').first();
    await expect(cta).toBeVisible();

    const box = await cta.boundingBox();
    expect(box).toBeTruthy();
    // min-h-11 is 44px, allow for slight rendering differences
    expect(box!.height).toBeGreaterThanOrEqual(36);
  });

  test("container content stays within viewport", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(500);

    const viewportWidth = page.viewportSize()!.width;
    const containers = page.locator(".container-section");
    const count = await containers.count();

    for (let i = 0; i < Math.min(count, 5); i++) {
      const box = await containers.nth(i).boundingBox();
      if (box) {
        expect(box.x).toBeGreaterThanOrEqual(0);
        expect(box.x + box.width).toBeLessThanOrEqual(viewportWidth + 2);
      }
    }
  });

  test("footer is visible and complete", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });
    const footer = page.locator("footer");
    await footer.scrollIntoViewIfNeeded();
    await expect(footer).toBeVisible();

    // Check footer contains expected links
    await expect(footer.locator('a[href="/kontakt"]').first()).toBeVisible();
    await expect(footer.locator('a[href="/integritetspolicy"]')).toBeVisible();
  });
});
