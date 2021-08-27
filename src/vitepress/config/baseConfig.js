/**
 * This file is intended to be required from VitePress
 * consuming project's config file.
 *
 * It runs in Node.js.
 */

const darkModeScript = require('fs').readFileSync(
  require('path').resolve(__dirname, './applyDarkMode.js'),
  'utf-8'
)

/**
 * @type {() => Promise<import('vitepress').UserConfig>}
 */
module.exports = async () => ({
  vite: {
    optimizeDeps: {
      exclude: ['@vue/theme', '@vueuse/core', 'body-scroll-lock']
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
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap'
      }
    ],
    ['script', {}, darkModeScript]
  ],

  markdown: {
    highlight: await require('./highlight')()
  }
})
