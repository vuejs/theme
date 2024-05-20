// @ts-check

/**
 * This file is intended to be required from VitePress
 * consuming project's config file.
 *
 * It runs in Node.js.
 */

// for local-linked development
const deps = ['@vue/theme', '@vueuse/core', 'body-scroll-lock']

/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  scrollOffset: ['header', '.VPLocalNav'],

  vite: {
    ssr: {
      noExternal: deps
    },
    optimizeDeps: {
      exclude: deps
    }
  },

  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/logo.svg'
      }
    ]
  ],

  markdown: {
    headers: {
      level: [2, 3]
    }
  },

  transformHead({ assets }) {
    const font = assets.find((file) =>
      /inter-roman-latin\.\w+\.woff2/.test(file)
    )
    if (font) {
      return [
        [
          'link',
          {
            rel: 'preload',
            href: font,
            as: 'font',
            type: 'font/woff2',
            crossorigin: ''
          }
        ]
      ]
    }
  },

  shouldPreload(link) {
    // make algolia chunk prefetch instead of preload
    return !link.includes('Algolia')
  }
}

export default config
