# Vue Theme

[![Test](https://github.com/vuejs/vue-theme/workflows/test/badge.svg)](https://github.com/vuejs/vue-theme/actions)

Vue Theme is the official design system for Vue.js. It focuses on providing design components for building a user interface for the whole Vue ecosystem.

Not only it contains essential design kits to build product docs, but it covers all surrounding essentials which are necessary for a product of the size of Vue, such as "sponsors" and "ads".

## Current Status

[Major refactoring for Vue docs is in progress](https://github.com/vuejs/team-discussions/discussions/22). This repo is currently the development environment to create this whole ecosystem. See "Development Setup" to learn more about the current directory structure.

## Design Mockups

You can currently find the design mockups at [InVision](https://projects.invisionapp.com/share/3Q107L03E5B4#/screens/444890358_Home-Vue-Light?browse). Planning to move to Figma soon.

## Development Setup

This repo can be developed on its own since it is a self-contained VitePress theme. A demo app is available in `/demo` and can be run with `yarn dev`. Just install NPM packages and boot the server with `yarn dev`.

```bash
$ yarn install
$ yarn dev
```

To work on this theme in the context of the `vuejs.org` website, see [vuejs/website](https://github.com/vuejs/website) for instructions.

### Available Scripts

Here is the list of available scripts that can be used during the development.

```bash
# Boot local dev server.
$ yarn dev

# Build demo, then serve locally. This is for testing
# production build in the local environment.
$ yarn serve

# Run lint via Prettier.
$ yarn lint

# Run type check via tsc.
$ yarn type
```

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2021-present Evan You
