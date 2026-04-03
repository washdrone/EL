import { test, expect } from "@playwright/test";

test.describe("Header & Navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });
  });

  test("header is visible", async ({ page }) => {
    const header = page.locator("header");
    await expect(header).toBeVisible();
  });

  test("logo links to home", async ({ page }) => {
    const logo = page.locator('header a[href="/"]').first();
    await expect(logo).toBeVisible();
  });

  test("desktop nav links are visible on large viewport", async ({ page, isMobile }) => {
    test.skip(!!isMobile, "Desktop-only test");
    await expect(page.locator('header button:has-text("Tjänster")')).toBeVisible();
    await expect(page.locator('header button:has-text("Branscher")')).toBeVisible();
  });

  test("desktop dropdown opens on click", async ({ page, isMobile }) => {
    test.skip(!!isMobile, "Desktop-only test");
    const servicesBtn = page.locator('header button:has-text("Tjänster")');
    await servicesBtn.click();
    // Dropdown should appear with service links
    const dropdown = page.locator('header a[href="/tjanster/kraftledningsinspektion"]');
    await expect(dropdown).toBeVisible({ timeout: 2000 });
  });
});

test.describe("Mobile menu", () => {
  test("hamburger button is visible on mobile", async ({ page, isMobile }) => {
    test.skip(!isMobile, "Mobile-only test");
    await page.goto("/", { waitUntil: "domcontentloaded" });
    const hamburger = page.locator('header button[aria-label="Öppna meny"]');
    await expect(hamburger).toBeVisible();
  });

  test("mobile menu opens and shows nav items", async ({ page, isMobile }) => {
    test.skip(!isMobile, "Mobile-only test");
    await page.goto("/", { waitUntil: "domcontentloaded" });

    await page.locator('header button[aria-label="Öppna meny"]').click();

    const menu = page.locator('[aria-label="Mobilmeny"]');
    await expect(menu).toBeVisible();

    // Check nav links are present
    await expect(menu.locator('a[href="/tjanster/kraftledningsinspektion"]')).toBeVisible();
    await expect(menu.locator('a[href="/kontakt"]').first()).toBeVisible();
  });

  test("mobile menu closes via close button", async ({ page, isMobile }) => {
    test.skip(!isMobile, "Mobile-only test");
    await page.goto("/", { waitUntil: "domcontentloaded" });

    await page.locator('header button[aria-label="Öppna meny"]').click();
    const menu = page.locator('[aria-label="Mobilmeny"]');
    await expect(menu).toBeVisible();

    await page.locator('header button[aria-label="Stäng meny"]').click();
    await expect(menu).not.toBeVisible({ timeout: 1000 });
  });

  test("mobile menu closes via backdrop tap", async ({ page, isMobile }) => {
    test.skip(!isMobile, "Mobile-only test");
    await page.goto("/", { waitUntil: "domcontentloaded" });

    await page.locator('header button[aria-label="Öppna meny"]').click();
    const menu = page.locator('[aria-label="Mobilmeny"]');
    await expect(menu).toBeVisible();

    // Tap the backdrop
    const backdrop = page.locator('header > div[aria-hidden="true"]');
    if (await backdrop.isVisible()) {
      await backdrop.click({ position: { x: 10, y: 10 }, force: true });
      await expect(menu).not.toBeVisible({ timeout: 1000 });
    }
  });

  test("mobile menu closes via Escape key", async ({ page, isMobile }) => {
    test.skip(!isMobile, "Mobile-only test");
    await page.goto("/", { waitUntil: "domcontentloaded" });

    await page.locator('header button[aria-label="Öppna meny"]').click();
    const menu = page.locator('[aria-label="Mobilmeny"]');
    await expect(menu).toBeVisible();

    await page.keyboard.press("Escape");
    await expect(menu).not.toBeVisible({ timeout: 1000 });
  });

  test("navigation works after menu interaction", async ({ page, isMobile }) => {
    test.skip(!isMobile, "Mobile-only test");
    await page.goto("/", { waitUntil: "domcontentloaded" });

    await page.locator('header button[aria-label="Öppna meny"]').click();
    const menu = page.locator('[aria-label="Mobilmeny"]');
    await expect(menu).toBeVisible();

    await menu.locator('a[href="/kontakt"]').first().click();
    await page.waitForURL("**/kontakt", { timeout: 5000 });
    await expect(page.locator("h1")).toBeVisible();
  });
});
