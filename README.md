# Vue Theme

WIP VitePress theme for the new version of Vue documentation. **Currently under heavy development - if you are not a team member working on this project, please do not open issues or PRs until it stabilizes.**

## Development Setup

This repo can be developed on its own since it is a self-contained VitePress theme. A demo app is available in `/demo` and can be run with `yarn dev`. Just install NPM packages and boot the server with `yarn dev`.

```bash
$ yarn install
$ yarn dev
```

To work on this theme in the context of the `vuejs.org` website, see [vuejs/docs#next](https://github.com/vuejs/docs/tree/next) for instructions.

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
