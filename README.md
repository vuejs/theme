# Vue Theme

[![Test](https://github.com/vuejs/vue-theme/workflows/test/badge.svg)](https://github.com/vuejs/vue-theme/actions)

Vue Theme is the official design system for Vue.js. It focuses on providing design components for building a user interface for the whole Vue ecosystem.

Not only it contains essential design kits to build product docs, but it covers all surrounding essentials which are necessary for a product of the size of Vue, such as "sponsors" and "ads".

## Design Mockups

You can currently find the design mockups at [InVision](https://projects.invisionapp.com/share/3Q107L03E5B4#/screens/444890358_Home-Vue-Light?browse). Planning to move to Figma soon.

## Development Setup

It uses VitePress to test the design components visually. Well, the best way to see the design works is to use it! Here is the description of the directory structure.

- `src` - Contains all "Vue Theme" components and styles.
- `docs/.vitepress/theme` - Contains theme configuration for VitePress.

Once the Vue Theme is published, `docs/.vitepress/theme` should be moved to VitePress, but while we are in the early stage of development, we're directly building the "theme" for VitePress here.

### Booting The Local Dev Server

Just install NPM packages and boot the server with `yarn docs`.

```bash
$ yarn install
$ yarn docs
```

### Available Scripts

Here is the list of available scripts that can be used during the development.

```bash
$ yarn docs
# Boot local dev server.

$ yarn docs-serve
# Build docs, then serve locally. This is for testing
# production build in the local environment.

$ yarn lint
# Run lint via Prettier.

$ yarn type
# Run type check via tsc.

$ yarn jest
# Run unit test via Jest.

$ yarn test
# Run lint, type check, and jest.
```

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2021-present Evan You
