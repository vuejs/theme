# Vue Theme

This is the [VitePress](https://vitepress.vuejs.org/) theme for the official Vue documentation at `vuejs.org`.

Please note this theme is solely dedicated for `vuejs.org` and isn't meant to be used as a content-neutral theme. It does **not** follow semver and may contain hard-coded logic specific to the Vue documentation.

## Development Setup

This repo can be developed on its own since it is a self-contained VitePress theme. Make sure to use [pnpm](https://pnpm.io/) as the package manager when installing deps. A demo app is available in `/demo` and can be run with `npm run dev`:

```bash
$ pnpm install
$ npm run dev
```

## Developing with Real Content

To work on this theme in the context of the `vuejs.org` website requires cloning both repos and linking the theme into the docs repo:

1. Clone repositories:

   ```bash
   git clone git@github.com:vuejs/docs.git
   git clone git@github.com:vuejs/theme.git
   ```

2. Link theme into docs repo:

   ```bash
   # In ./theme
   pnpm install
   # Make @vue/theme available for global linking
   pnpm link --global

   # in ./docs
   pnpm install
   # Link theme
   pnpm link --global @vue/theme
   ```

3. Start VitePress server:

   ```bash
   # in ./docs
   pnpm run dev
   ```

### Available Scripts

Here is the list of available scripts that can be used during the development.

```bash
# Boot local dev server.
$ npm run dev

# Build demo, then serve locally. This is for testing
# production build in the local environment.
$ npm run serve

# Run lint via Prettier.
$ npm run lint

# Run type check via tsc.
$ npm run type
```

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2021-present Evan You
