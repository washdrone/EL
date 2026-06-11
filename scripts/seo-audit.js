#!/usr/bin/env node
/* Extraherar SEO-data ur prerendrad HTML i .next/server/app för audit. */
const fs = require("fs");
const path = require("path");

const APP_DIR = path.join(__dirname, "..", ".next", "server", "app");
const SITE_URL = "https://www.griddrone.se";

function walk(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else if (e.name.endsWith(".html")) out.push(p);
  }
  return out;
}

function attr(tag, name) {
  const m = tag.match(new RegExp(`${name}="([^"]*)"`, "i"));
  return m ? m[1] : null;
}

function extract(html) {
  const r = {};
  const title = html.match(/<title>([^<]*)<\/title>/i);
  r.title = title ? title[1] : null;

  const metas = html.match(/<meta [^>]+>/gi) || [];
  for (const m of metas) {
    const n = attr(m, "name") || attr(m, "property");
    if (!n) continue;
    const c = attr(m, "content");
    if (n === "description" && !r.description) r.description = c;
    if (n === "og:title") r.ogTitle = c;
    if (n === "og:description") r.ogDescription = c;
    if (n === "og:image") r.ogImage = c;
    if (n === "og:type") r.ogType = c;
    if (n === "og:url") r.ogUrl = c;
    if (n === "twitter:card") r.twitterCard = c;
    if (n === "robots") r.robots = c;
  }

  const canonicals = html.match(/<link rel="canonical"[^>]*>/gi) || [];
  r.canonicals = canonicals.map((t) => attr(t, "href"));
  const hreflang = html.match(/<link rel="alternate" hreflang[^>]*>/gi) || [];
  r.hreflangs = hreflang.map((t) => `${attr(t, "hreflang")}=${attr(t, "href")}`);

  r.h1s = (html.match(/<h1[^>]*>(.*?)<\/h1>/gis) || []).map((h) =>
    h.replace(/<[^>]+>/g, "").trim()
  );
  r.h2s = (html.match(/<h2[^>]*>(.*?)<\/h2>/gis) || []).map((h) =>
    h.replace(/<[^>]+>/g, "").trim()
  );

  // JSON-LD
  r.jsonld = [];
  const ldRe = /<script type="application\/ld\+json">(.*?)<\/script>/gis;
  let m;
  while ((m = ldRe.exec(html))) {
    try {
      const parsed = JSON.parse(m[1]);
      r.jsonld.push({ type: parsed["@type"], ok: true, data: parsed });
    } catch (e) {
      r.jsonld.push({ type: "PARSE_ERROR", ok: false, err: e.message });
    }
  }

  r.hasBreadcrumbNav = /aria-label="Breadcrumb"/i.test(html);

  // Bilder utan alt eller med tom alt
  const imgs = html.match(/<img [^>]+>/gi) || [];
  r.images = imgs.map((t) => ({
    src: (attr(t, "src") || "").split("?")[0].slice(0, 80),
    alt: attr(t, "alt"),
    width: attr(t, "width"),
    height: attr(t, "height"),
    loading: attr(t, "loading"),
    fetchpriority: attr(t, "fetchpriority"),
  }));

  // interna länkar
  const hrefs = new Set();
  const aRe = /<a [^>]*href="(\/[^"#?]*)["#?]/gi;
  while ((m = aRe.exec(html))) hrefs.add(m[1]);
  r.internalLinks = [...hrefs];

  return r;
}

const files = walk(APP_DIR).filter(
  (f) => !f.includes("_not-found") && !path.basename(f).startsWith("_")
);

const results = {};
for (const f of files) {
  let route = "/" + path.relative(APP_DIR, f).replace(/\.html$/, "");
  if (route === "/index") route = "/";
  results[route] = extract(fs.readFileSync(f, "utf8"));
}

const mode = process.argv[2] || "summary";

if (mode === "summary") {
  for (const [route, r] of Object.entries(results).sort()) {
    const issues = [];
    if (!r.title) issues.push("NO TITLE");
    if (r.title && (r.title.length < 35 || r.title.length > 65))
      issues.push(`TITLE LEN ${r.title.length}`);
    if (!r.description) issues.push("NO DESC");
    if (r.description && (r.description.length < 120 || r.description.length > 165))
      issues.push(`DESC LEN ${r.description.length}`);
    if (r.canonicals.length !== 1) issues.push(`CANONICALS=${r.canonicals.length}`);
    if (
      r.canonicals[0] &&
      r.canonicals[0] !== `${SITE_URL}${route === "/" ? "" : route}` &&
      r.canonicals[0] !== `${SITE_URL}${route === "/" ? "/" : route}`
    )
      issues.push(`CANONICAL=${r.canonicals[0]}`);
    if (r.h1s.length !== 1) issues.push(`H1x${r.h1s.length}`);
    if (!r.hasBreadcrumbNav && route !== "/") issues.push("NO BREADCRUMB NAV");
    const ldTypes = r.jsonld.map((x) => (Array.isArray(x.type) ? x.type.join("+") : x.type));
    if (r.jsonld.some((x) => !x.ok)) issues.push("JSONLD PARSE ERROR");
    if (!ldTypes.includes("BreadcrumbList") && route !== "/") issues.push("NO BREADCRUMB LD");
    const badImgs = r.images.filter((i) => i.alt === null || i.alt === "");
    if (badImgs.length) issues.push(`IMG NO ALT x${badImgs.length}`);
    if (r.title !== null && r.ogTitle !== null) {
      const t = r.title.replace(/ \| GridDrone$/, "");
      const ot = (r.ogTitle || "").replace(/ \| GridDrone$/, "").replace(/^GridDrone \| /, "");
      if (t !== ot) issues.push("OGTITLE≠TITLE");
    }
    console.log(`${route}\n  title(${r.title ? r.title.length : 0}): ${r.title}`);
    console.log(`  desc(${r.description ? r.description.length : 0}): ${r.description}`);
    console.log(`  ld: [${ldTypes.join(", ")}]  h1: ${JSON.stringify(r.h1s)}`);
    console.log(`  issues: ${issues.length ? issues.join(" | ") : "—"}`);
  }
} else if (mode === "links") {
  const routes = new Set(Object.keys(results).map((r) => (r === "/" ? "/" : r)));
  routes.add("/sitemap.xml");
  const broken = {};
  for (const [route, r] of Object.entries(results)) {
    for (const l of r.internalLinks) {
      const norm = l.replace(/\/$/, "") || "/";
      if (!routes.has(norm) && !norm.startsWith("/images") && !norm.startsWith("/video") && norm !== "/llms.txt") {
        (broken[norm] = broken[norm] || []).push(route);
      }
    }
  }
  for (const [l, pages] of Object.entries(broken))
    console.log(`BROKEN ${l}  <- ${pages.join(", ")}`);
  console.log("done");
} else if (mode === "json") {
  console.log(JSON.stringify(results, null, 1));
} else if (mode === "page") {
  console.log(JSON.stringify(results[process.argv[3]], null, 1));
}
