# EL Drönartjänster

Next.js 14 marketing site for drone inspection services.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # Production build
npm run lint    # ESLint
```

## Google Stitch Integration

This project uses [Google Stitch](https://stitch.withgoogle.com) via MCP for AI-assisted UI design.

### Setup

1. Go to [stitch.withgoogle.com](https://stitch.withgoogle.com) → Settings → Create API key
2. Create a `.env` file in the project root:
   ```
   STITCH_API_KEY=your-api-key-here
   ```
3. The MCP server is configured in `.mcp.json` and will be picked up automatically by Claude Code, Cursor, and other MCP-compatible tools.

### Available Stitch MCP tools

When connected, your AI coding tool can:

- **get_screen_code** — Fetch HTML/CSS for a specific Stitch screen
- **get_screen_image** — Download a screenshot of a Stitch screen
- **build_site** — Generate a full site from Stitch project screens

### Usage examples

Ask your AI coding tool:
- "Hämta designen från mitt Stitch-projekt och skapa React-komponenter"
- "Visa mig skärm X från Stitch-projektet"
- "Bygg en sida baserad på mina Stitch-designs"

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 measurement ID | No |
| `NEXT_PUBLIC_SITE_URL` | Site URL for metadata | No |
| `STITCH_API_KEY` | Google Stitch API key for MCP | No |
