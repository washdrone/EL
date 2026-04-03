import { test, expect } from "@playwright/test";

/**
 * Global smoke test — critical pages load without errors
 */

const criticalPages = [
  { path: "/", name: "Home" },
  { path: "/tjanster", name: "Tjänster" },
  { path: "/tjanster/kraftledningsinspektion", name: "Kraftledningsinspektion" },
  { path: "/branscher/energibolag", name: "Branscher – Energibolag" },
  { path: "/kontakt", name: "Kontakt" },
  { path: "/om-oss", name: "Om oss" },
  { path: "/blogg", name: "Blogg" },
  { path: "/roi-kalkylator", name: "ROI-kalkylator" },
  { path: "/certifieringar", name: "Certifieringar" },
];

for (const page of criticalPages) {
  test(`${page.name} (${page.path}) loads without crash`, async ({ page: p }) => {
    const errors: string[] = [];
    p.on("pageerror", (err) => errors.push(err.message));

    const res = await p.goto(page.path, { waitUntil: "domcontentloaded" });
    expect(res?.status()).toBeLessThan(400);

    // No blocking JS errors from own code (ignore third-party like GA)
    const ownErrors = errors.filter(
      (e) => !e.includes("gtag") && !e.includes("googletagmanager")
    );
    expect(ownErrors).toHaveLength(0);
  });
}
