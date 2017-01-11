<p align="center">
  <img src="https://getcaption.co/icon.png" height="64">
  <h3 align="center">Caption Website</h3>
  <p align="center">Find the right subtitles. Easy.<p>
</p>

## Get Caption (App)

- **[Download the latest release](https://getcaption.co/)** (macOS only)
- [Caption App Repository](https://github.com/gielcobben/Caption)

## Project layout

- `Makefile` Shorthands for commands to quickly build or install.
- `config.coffee` Configuration variables like page context function
- `pages` The html pages including site structure.
- `templates` The templates used in the html pages (for extend and include).
- `assets`
	- `static` Just static files like images, fonts and downloads.
	- `css` CSS and SCSS files and dependents. The top level files get compiled.
	- `scripts` javascript/coffeescript files and dependents. The top level files get compiled and minified.
- `package.json` [npm information](https://docs.npmjs.com/files/package.json) about used javascript packages.
- `.build` Path for the generated site (hidden by default).

## Sprites

Every folder within `assets/sprites` will be converted into a sprite package. This will result in an SCSS and image file. The SCSS file will end up in the _project_ folder with the same location as the images. So `assets/sprites/mainpage/*.png` will generate an SCSS file at `assets/sprites/mainpage.scss`. That way you can include it in your main SCSS file and everything will work.

## Troubleshooting

- You can update node with `brew update; brew upgrade node; npm update -g` (Mac only).
- You can reset your npm packages with `rm -Rf ./node_modules`.

## Related Repositories

- [Caption App](https://github.com/gielcobben/Caption)
