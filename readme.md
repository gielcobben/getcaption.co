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

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

Outputs a static site to the `dist/` directory.

## Deploy

Deployed to Cloudflare Workers. Make sure you're authenticated with `npx wrangler login`, then:

```bash
npm run build
npm run deploy
```

## Project layout

- `src/` Application source code
  - `components/` React components
  - `index.css` Tailwind styles
  - `main.jsx` Entry point
  - `App.jsx` Root component
- `public/` Static assets (images, favicons)
- `wrangler.jsonc` Cloudflare Workers configuration

## Related Repositories

- [Caption App](https://github.com/gielcobben/Caption)
