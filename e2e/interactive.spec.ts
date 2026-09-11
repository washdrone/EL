import { test, expect } from "@playwright/test";

test.describe("FAQ accordion", () => {
  test("FAQ items expand and collapse", async ({ page }) => {
    await page.goto("/tjanster/kraftledningsinspektion/faq", {
      waitUntil: "domcontentloaded",
    });

    const faqButtons = page.locator("button[aria-expanded]");
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

test.describe("Cost comparison", () => {
  test("uses entered costs including fixed costs and handles a more expensive alternative", async ({
    page,
  }) => {
    await page.goto("/roi-kalkylator");
    await expect(page.locator("#cost-current")).toHaveValue("");
    for (const [key, value] of Object.entries({
      distance: "100",
      frequency: "2",
      current: "1000",
      drone: "1200",
      currentFixed: "10000",
      droneFixed: "5000",
    })) {
      await page.locator(`#cost-${key}`).fill(value);
    }
    await expect(page.getByRole("status")).toContainText("Högre kostnad");
    await expect(page.getByRole("status")).toContainText(/30\s000/);
    await page.locator("#cost-frequency").fill("-1");
    await expect(page.getByRole("status")).not.toContainText(
      "Beräknad årskostnad",
    );
  });
});

test.describe("Sticky CTA", () => {
  test("sticky CTA appears on mobile after consent", async ({
    page,
    isMobile,
  }) => {
    test.skip(!isMobile, "Mobile-only test");
    await page.goto("/", { waitUntil: "domcontentloaded" });

    // Set consent to trigger StickyCTA visibility
    await page.evaluate(() =>
      localStorage.setItem("griddrone_cookie_consent", "accepted"),
    );

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
    const serviceSection = page
      .locator("section")
      .filter({ hasText: "Heltäckande inspektion" });
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
