import { test, expect } from "@playwright/test";

test.describe("FAQ accordion", () => {
  test("FAQ items expand and collapse", async ({ page }) => {
    await page.goto("/tjanster/kraftledningsinspektion/faq", { waitUntil: "domcontentloaded" });

    const faqButtons = page.locator('button[aria-expanded]');
    const count = await faqButtons.count();

    if (count > 0) {
      const firstBtn = faqButtons.first();

      // Initially closed
      await expect(firstBtn).toHaveAttribute("aria-expanded", "false");

      await firstBtn.click();
      await expect(firstBtn).toHaveAttribute("aria-expanded", "true");

      // Click again to collapse
      await firstBtn.click();
      await expect(firstBtn).toHaveAttribute("aria-expanded", "false");
    }
  });
});

test.describe("ROI Calculator", () => {
  test("calculator inputs are interactive", async ({ page }) => {
    await page.goto("/roi-kalkylator", { waitUntil: "domcontentloaded" });

    const kmInput = page.locator("#km");
    await kmInput.scrollIntoViewIfNeeded();
    await expect(kmInput).toBeVisible();
    await kmInput.fill("200");
    await expect(kmInput).toHaveValue("200");

    const methodSelect = page.locator("#method");
    await expect(methodSelect).toBeVisible();
    await methodSelect.selectOption("manuell");
    await expect(methodSelect).toHaveValue("manuell");

    // Results section should show savings
    const savingsText = page.locator("text=Uppskattad årlig besparing").first();
    await expect(savingsText).toBeVisible();
  });

  test("assumptions accordion toggles", async ({ page }) => {
    await page.goto("/roi-kalkylator", { waitUntil: "domcontentloaded" });

    const assumptionsBtn = page.locator('button:has-text("Metod och antaganden")');
    await assumptionsBtn.scrollIntoViewIfNeeded();
    await expect(assumptionsBtn).toHaveAttribute("aria-expanded", "false");

    await assumptionsBtn.click();
    await expect(assumptionsBtn).toHaveAttribute("aria-expanded", "true");
    await expect(page.locator("table").first()).toBeVisible();
  });
});

test.describe("Sticky CTA", () => {
  test("sticky CTA appears on mobile after consent", async ({ page, isMobile }) => {
    test.skip(!isMobile, "Mobile-only test");
    await page.goto("/", { waitUntil: "domcontentloaded" });

    // Set consent to trigger StickyCTA visibility
    await page.evaluate(() => localStorage.setItem("griddrone_cookie_consent", "accepted"));

    // StickyCTA polls localStorage every 500ms, wait for it
    await page.waitForTimeout(1500);

    const stickyCta = page.locator('.fixed.bottom-0 a[href="/kontakt"]');
    await expect(stickyCta).toBeVisible({ timeout: 3000 });
  });
});

test.describe("Services section tabs (desktop)", () => {
  test("service tabs switch content", async ({ page, isMobile }) => {
    test.skip(!!isMobile, "Desktop-only test");
    await page.goto("/", { waitUntil: "domcontentloaded" });

    // Find service buttons
    const serviceSection = page.locator("section").filter({ hasText: "Heltäckande inspektion" });
    const serviceButtons = serviceSection.locator("button");
    const count = await serviceButtons.count();

    if (count >= 2) {
      await serviceButtons.nth(1).click();
      // Image should still be visible (interactive tab switch)
      const img = serviceSection.locator("img");
      await expect(img).toBeVisible();
    }
  });
});
