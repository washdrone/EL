import { test, expect } from "@playwright/test";

test.describe("Lead form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/kontakt", { waitUntil: "domcontentloaded" });
  });

  test("form fields are focusable and interactive", async ({ page }) => {
    const companyInput = page.locator("#company");
    await expect(companyInput).toBeVisible();
    await companyInput.focus();
    await expect(companyInput).toBeFocused();
    await companyInput.fill("Test AB");
    await expect(companyInput).toHaveValue("Test AB");
  });

  test("select dropdowns are usable", async ({ page }) => {
    const inspectionSelect = page.locator("#inspectionType");
    await expect(inspectionSelect).toBeVisible();
    await inspectionSelect.selectOption("arlig");
    await expect(inspectionSelect).toHaveValue("arlig");
  });

  test("submit button is visible and not blocked", async ({ page }) => {
    const submitBtn = page.locator('button[type="submit"]');
    await submitBtn.scrollIntoViewIfNeeded();
    await expect(submitBtn).toBeVisible();
    await expect(submitBtn).toBeEnabled();

    // Verify button has reasonable touch target
    const box = await submitBtn.boundingBox();
    expect(box).toBeTruthy();
    expect(box!.height).toBeGreaterThanOrEqual(40);
  });

  test("form labels are associated with inputs", async ({ page }) => {
    // Verify label-input association
    const companyLabel = page.locator('label[for="company"]');
    await expect(companyLabel).toBeVisible();
    await companyLabel.click();
    await expect(page.locator("#company")).toBeFocused();
  });

  test("textarea is usable", async ({ page }) => {
    const textarea = page.locator("#message");
    await textarea.scrollIntoViewIfNeeded();
    await expect(textarea).toBeVisible();
    await textarea.fill("Testmeddelande");
    await expect(textarea).toHaveValue("Testmeddelande");
  });
});
