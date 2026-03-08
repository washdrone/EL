# AGENTS.md

## Cursor Cloud specific instructions

This is a Next.js 14 (App Router) marketing website for GridDrone (drone inspection services for power grids). It is a single-service project — no database, no Docker, no external services required to run.

### Commands

Standard commands are in `package.json` and `CLAUDE.md`:
- `npm run dev` — starts the dev server on port 3000
- `npm run build` — production build (also runs TypeScript type-checking)
- `npm run lint` — ESLint
- No test framework is configured; there are no automated tests.

### Notes

- The `/api/lead` route uses the Resend email API. Without `RESEND_API_KEY` set, form submissions log to the console instead of sending email — this is expected in dev and does not cause errors.
- `NEXT_PUBLIC_GA_ID` and `NEXT_PUBLIC_SITE_URL` are optional; the site runs fine without them.
- All content is in Swedish.
