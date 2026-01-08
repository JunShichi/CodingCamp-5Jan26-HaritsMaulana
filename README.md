Todo List Project — Tailwind Build Instructions

This project currently uses the Tailwind CDN for development. To build a production CSS file using Tailwind CLI and PostCSS:

1. Install dependencies (requires Node.js >=16):

```bash
npm install
```

2. Build the CSS once:

```bash
npm run build:css
```

The compiled CSS will be written to `css/output.css`. To use the built file, change the link in `index.html`:

```html
<link rel="stylesheet" href="css/output.css">
```

For development with live rebuilds:

```bash
npm run watch:css
```

Notes:
- `tailwind.config.js` is included and configured to scan `index.html` and `js/**/*.js` for used classes.
- You can customize colors in `tailwind.config.js` under `theme.extend.colors`.

Quick usage:

1. Switch `index.html` stylesheet to `css/output.css` after building.
2. Remove or keep `css/styles.css` for overrides.
