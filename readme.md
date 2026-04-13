<p align="center">
  <img src="https://gielcobben.com/github/caption/icon_128x128.png" height="64">
  <h3 align="center">Caption Website</h3>
  <p align="center">Find the right subtitles. Easy.<p>
</p>

## Get Caption (App)

- **[Download the latest release](https://getcaption.co/)** (macOS, Windows, Linux)
- [Caption App Repository](https://github.com/gielcobben/Caption)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Outputs a static site to the `out/` directory.

## Deploy

Deployed to Cloudflare Workers. Make sure you're authenticated with `npx wrangler login`, then:

```bash
npm run build
npm run deploy
```

## Project layout

- `pages/` Next.js pages (routes)
- `components/` React components
- `styles/` Global styles and CSS variables
- `public/` Static assets (images, favicons)
- `wrangler.jsonc` Cloudflare Workers configuration

## Related Repositories

- [Caption App](https://github.com/gielcobben/Caption)
