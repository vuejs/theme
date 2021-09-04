/**
 * This file is intended to be required from VitePress
 * consuming project's config file.
 *
 * It runs in Node.js.
 */

// for local-linked development
const deps = ['@vue/theme', '@vueuse/core', 'body-scroll-lock']

/**
 * @type {() => Promise<import('vitepress').UserConfig>}
 */
module.exports = async () => ({
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
    ],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap'
      }
    ],
    [
      'script',
      {},
      require('fs').readFileSync(
        require('path').resolve(
          __dirname,
          './inlined-scripts/applyDarkMode.js'
        ),
        'utf-8'
      )
    ]
  ],

  markdown: {
    highlight: await require('./highlight')()
  }
})
