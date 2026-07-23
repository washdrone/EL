#!/usr/bin/env node
/**
 * SEO-audit (live) för GridDrone.
 *
 * Kör mot lokal build eller produktion:
 *   node scripts/seo-audit.mjs                       (default http://localhost:3000)
 *   AUDIT_URL=https://www.griddrone.se node scripts/seo-audit.mjs
 *
 * Kontrollerar:
 *  - robots.txt finns, tillåter crawl och pekar på sitemap
 *  - sitemap.xml finns, använder produktionsdomänen, inga dubbletter
 *  - varje sitemap-URL: 200 utan redirect, absolut self-canonical,
 *    ingen noindex, unik titel, exakt en H1, meta description
 *  - okänd URL ger äkta 404
 *  - trailing slash-varianter redirectar (ingen dubblett)
 * Avslutar med exit-kod 1 vid fel.
 */

const BASE = (process.env.AUDIT_URL || 'http://localhost:3000').replace(/\/$/, '')
const PROD_ORIGIN = 'https://www.griddrone.se'

const errors = []
const warnings = []
const ok = (msg) => console.log('  ✓ ' + msg)
const fail = (msg) => { errors.push(msg); console.error('  ✗ ' + msg) }
const warn = (msg) => { warnings.push(msg); console.warn('  ! ' + msg) }

async function get(path, redirect = 'manual') {
  const res = await fetch(BASE + path, { redirect })
  return res
}

function extract(html, re) { const m = html.match(re); return m ? m[1] : null }

console.log(`SEO-audit mot ${BASE}\n`)

// 1. robots.txt
{
  const res = await get('/robots.txt', 'follow')
  if (res.status !== 200) fail(`robots.txt: status ${res.status}`)
  else {
    const t = await res.text()
    if (/^\s*Disallow:\s*\/\s*$/m.test(t)) fail('robots.txt blockerar hela sajten')
    else ok('robots.txt tillåter crawl')
    if (!t.includes(`${PROD_ORIGIN}/sitemap.xml`)) fail('robots.txt saknar korrekt sitemap-referens')
    else ok('robots.txt refererar korrekt sitemap')
  }
}

// 2. sitemap.xml
const res = await get('/sitemap.xml', 'follow')
if (res.status !== 200) { fail(`sitemap.xml: status ${res.status}`); process.exit(1) }
const xml = await res.text()
const locs = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1])
if (locs.length === 0) fail('sitemap.xml innehåller inga URL:er')
else ok(`sitemap.xml innehåller ${locs.length} URL:er`)

const badOrigin = locs.filter((u) => !u.startsWith(PROD_ORIGIN))
if (badOrigin.length) fail(`sitemap: fel domän: ${badOrigin.slice(0, 3).join(', ')}`)
else ok('sitemap använder endast produktionsdomänen')

if (new Set(locs).size !== locs.length) fail('sitemap innehåller dubbletter')
else ok('sitemap saknar dubbletter')

const withSlash = locs.filter((u) => u !== PROD_ORIGIN && u.endsWith('/'))
if (withSlash.length) fail(`sitemap: trailing slash-varianter: ${withSlash.slice(0, 3).join(', ')}`)
else ok('sitemap: konsekvent URL-format utan trailing slash')

// Artificiell lastmod (identisk tidsstämpel på allt) är vilseledande för Google
const lastmods = [...xml.matchAll(/<lastmod>(.*?)<\/lastmod>/g)].map((m) => m[1])
if (lastmods.length > 1 && new Set(lastmods).size === 1)
  fail('sitemap: identisk (artificiell) lastmod på alla URL:er — ta bort eller gör verklig')
else ok('sitemap: ingen artificiell lastmod')

// 3. Varje sitemap-URL
const titles = new Map()
let checked = 0
for (const loc of locs) {
  const path = loc.replace(PROD_ORIGIN, '') || '/'
  const r = await get(path)
  if (r.status !== 200) { fail(`${path}: status ${r.status} (förväntade 200 utan redirect)`); continue }
  const html = await r.text()

  const canonical = extract(html, /<link[^>]*rel="canonical"[^>]*href="([^"]*)"/) ||
    extract(html, /<link[^>]*href="([^"]*)"[^>]*rel="canonical"/)
  if (!canonical) fail(`${path}: canonical saknas`)
  else if (canonical !== loc) fail(`${path}: canonical "${canonical}" ≠ sitemap-URL "${loc}"`)

  const robots = extract(html, /<meta[^>]*name="robots"[^>]*content="([^"]*)"/)
  if (robots && /noindex/i.test(robots)) fail(`${path}: noindex på sida i sitemap`)

  const title = extract(html, /<title[^>]*>([^<]*)<\/title>/)
  if (!title) fail(`${path}: <title> saknas`)
  else {
    if (titles.has(title)) warn(`${path}: samma titel som ${titles.get(title)}`)
    titles.set(title, path)
  }

  const h1count = (html.match(/<h1[\s>]/g) || []).length
  if (h1count === 0) fail(`${path}: H1 saknas`)
  else if (h1count > 1) warn(`${path}: ${h1count} st H1`)

  if (!/<meta[^>]*name="description"/.test(html)) fail(`${path}: meta description saknas`)
  checked++
}
ok(`${checked}/${locs.length} sitemap-URL:er verifierade (200, canonical, index, titel, H1)`)

// 4. Äkta 404
{
  const r = await get('/denna-sida-finns-inte-' + Date.now())
  if (r.status !== 404) fail(`okänd URL gav status ${r.status}, förväntade 404`)
  else ok('okänd URL ger äkta 404')
}

// 5. Trailing slash redirectar
{
  const r = await get('/tjanster/')
  if (![301, 302, 307, 308].includes(r.status)) fail(`/tjanster/ gav ${r.status}, förväntade redirect`)
  else ok('trailing slash redirectar korrekt')
}


console.log(`\nResultat: ${errors.length} fel, ${warnings.length} varningar`)
process.exit(errors.length ? 1 : 0)
