/**
 * This file is intended to be required from VitePress
 * consuming project's config file.
 *
 * It runs in Node.js.
 */

const darkModeFix = require('fs').readFileSync(
  require('path').resolve(__dirname, './darkModeFix.js'),
  'utf-8'
)

module.exports = {
  vite: {
    optimizeDeps: {
      exclude: ['@vueuse/core', 'body-scroll-lock']
    }
  },

  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap'
      }
    ],
    ['script', {}, darkModeFix]
  ]
}
