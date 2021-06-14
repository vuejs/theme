# Vue Theme

[![Test](https://github.com/vuejs/vue-theme/workflows/test/badge.svg)](https://github.com/vuejs/vue-theme/actions)

Vue Theme is the official design system for Vue.js. It focuses on providing design components for building a user interface for the whole Vue ecosystem.

Not only it contains essential design kits to build product docs, but it covers all surrounding essentials which are necessary for a product of the size of Vue, such as "sponsors" and "ads".

## Current Status

[Major refactoring for Vue docs is in progress](https://github.com/vuejs/team-discussions/discussions/22). This repo is currently the development environment to create this whole ecosystem. See "Development Setup" to learn more about the current directory structure.

## Design Mockups

You can currently find the design mockups at [InVision](https://projects.invisionapp.com/share/3Q107L03E5B4#/screens/444890358_Home-Vue-Light?browse). Planning to move to Figma soon.

## Development Setup

We must create several components following the architecture described at [New Docs Deployment](https://github.com/vuejs/team-discussions/discussions/22) discussion. The basic idea of the architecture at the moment is as follows.

- `@vue/theme` (this repo) – Vue Design System. It contains both the base components and a theme for VitePress.

- [`@vue/website`](https://github.com/vuejs/website) – The central repo (the "theme") in [New Docs Deployment](https://github.com/vuejs/team-discussions/discussions/22) discussion. It extends `@vue/theme` with `vuejs.org` specific components and pages, such as Home, Team, Sponsors and Partners page.

- `vuejs/docs` – The actual docs content (markdown). It uses `@vue/website` to build the final Vue website. This is the "source repo" mentioned in [New Docs Deployment](https://github.com/vuejs/team-discussions/discussions/22) discussion.

### Booting The Local Dev Server

This repo can be developed on its own since it is a self-contained VitePress theme. A demo app is available in `/demo` and can be run with `yarn dev`. Just install NPM packages and boot the server with `yarn dev`.

```bash
$ yarn install
$ yarn dev
```

### Available Scripts

Here is the list of available scripts that can be used during the development.

```bash
# Boot local dev server.
$ yarn dev

# Build demo, then serve locally. This is for testing
# production build in the local environment.
$ yarn demo-serve

# Run lint via Prettier.
$ yarn lint

# Run type check via tsc.
$ yarn type
```

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2021-present Evan You
