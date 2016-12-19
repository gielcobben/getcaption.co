<p align="center">
  <img src="http://captionformac.com/icon.png" height="64">
  <h3 align="center">Caption Website</h3>
  <p align="center">An open-source subtitle app built with web technology<p>
</p>

## Get Caption

**[Download the latest release](http://captionformac.com/)** (macOS only)

## Contribute

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your own GitHub account and then [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device
2. Install the dependencies: `make`

To make sure that your code works in the finished app, you can generate the binary:

```
$ make build
```

After that, you'll see the binary in the `./release` folder :smile:

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
