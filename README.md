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

- `Vue Theme` – Vue Design System. The sharable global Vue theme related codes, such as base css, color scheme, global components such as "Alert", etc.
- `Vitepress` – It uses `Vue Theme` to create VitePress docs theme, such as docs page, navbar, sidebar, and such.
- `Vue Web Theme` – The central repo (the "theme") in [New Docs Deployment](https://github.com/vuejs/team-discussions/discussions/22) discussion. At discussion it's called `vue-docs-theme`. It uses `Vue Theme` and `Vitepress` to create Vue website theme, such as Home, Team, Partners page. Naming it `vue-web` at the moment since it might make more sense to call it `website` rather than docs.
- `Docs` – The content (markdown). It uses `Vue Web Theme` to build final Vue website. This is the "source repo" mentioned in [New Docs Deployment](https://github.com/vuejs/team-discussions/discussions/22) discussion.

In the end, each component should live in their dedicated repo, but while we are in the early stage of development, we're directly building everything in this single repo. Here is the corresponding directory structure.

- `src-theme` – Code for `Vue Theme`. Add sharable global stuff here. Accessible via `vue-theme` alias.
- `src-vp` – Code for new `Vitepress`. Add Vitepress related code here. Accessible via `vitepress-next` alias.
- `src-web` – Code for "Vue Web Theme". Add any Vue website related code here. Accessible via `vue-web-theme` alias.
- `docs` – Contents for `Docs`. Currently, we're placing `.vitepress` folder to boot up VitePress, by importing code from `src-web` (see `docs/.vitepress` and you'll see what we mean).

### Booting The Local Dev Server

Just install NPM packages and boot the server with `yarn docs`.

```bash
$ yarn install
$ yarn docs
```

### Available Scripts

Here is the list of available scripts that can be used during the development.

```bash
# Boot local dev server.
$ yarn docs

# Build docs, then serve locally. This is for testing
# production build in the local environment.
$ yarn docs-serve

# Run lint via Prettier.
$ yarn lint

# Run type check via tsc.
$ yarn type

# Run unit test via Jest.
$ yarn jest

# Run lint, type check, and jest.
$ yarn test
```

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2021-present Evan You
