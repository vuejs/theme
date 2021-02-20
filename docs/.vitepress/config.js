const path = require('path')

module.exports = {
  alias: {
    'vue-theme': path.join(__dirname, '../../src')
  },

  lang: 'en-US',
  title: 'Vue.js',
  description: 'Vue.js - The Progressive JavaScript Framework',

  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Noto+Sans+JP:wght@400;500;700&family=Source+Code+Pro&display=swap' }]
  ],

  themeConfig: {
    logo: '/img/logo-vue.svg',

    algolia: {
      apiKey: 'c57105e511faa5558547599f120ceeba',
      indexName: 'vitepress'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vue-theme' },
      { icon: 'twitter', link: 'https://twitter.com/vuejs' },
      { icon: 'discord', link: 'https://discord.com/invite/HBherRA' }
    ],

    nav: [
      { text: 'Guide', link: '/guide/introduction' },
      { text: 'Styles', link: '/guide/styles' },
      { text: 'Components', link: '/guide/components' },
      {
        text: 'Support Vue',
        items: [
          { text: 'One-time Donations', link: 'https://vuejs.org/support-vuejs/#One-time-Donations' },
          { text: 'Recurring Pledges', link: 'https://vuejs.org/support-vuejs/#Recurring-Pledges' },
          { text: 'T-shirts Shop', link: 'https://vue.threadless.com/' }
        ]
      }
    ]
  }
}
