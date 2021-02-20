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
      {
        text: 'Docs',
        items: [
          {
            items: [
              { text: 'Guide', link: '/guide/introduction' },
              { text: 'API Reference', link: '/api/' }
            ]
          },
          {
            items: [
              { text: 'Style Guide', link: '/style-guide/' },
              { text: 'Cookbook', link: '/cookbook/' },
              { text: 'Examples', link: '/examples/markdown' }
            ]
          },
          {
            items: [
              { text: 'Contribute', link: '/guide/contributing/writing-guide' },
              { text: 'Migration from Vue 2', link: '/guide/migration/introduction' }
            ]
          }
        ]
      },
      {
        text: 'Ecosystem',
        items: [
          {
            text: 'Help',
            items: [
              { text: 'Forum', link: 'https://forum.vuejs.org/' },
              { text: 'Chat', link: 'https://discord.com/invite/HBherRA' }
            ]
          },
          {
            text: 'Official Projects',
            items: [
              { text: 'Vue Router', link: 'https://next.router.vuejs.org/' },
              { text: 'Vuex', link: 'https://next.vuex.vuejs.org/' },
              { text: 'Vue CLI', link: 'https://cli.vuejs.org/' },
              { text: 'Vue Test Utils', link: 'https://next.vue-test-utils.vuejs.org/v2/guide/introduction.html' },
              { text: 'Devtools', link: 'https://github.com/vuejs/vue-devtools' }
            ]
          },
          {
            text: 'Templates',
            items: [
              { text: 'Themes', link: '/community/themes/' }
            ]
          }
        ]
      },
      {
        text: 'Community',
        items: [
          {
            items: [
              { text: 'Team', link: '/community/team/' },
              { text: 'Partners', link: '/community/partners' },
              { text: 'Join', link: '/community/join/' },
            ]
          },
          {
            items: [
              { text: 'Events', link: 'https://events.vuejs.org/' },
              { text: 'DEV Community', link: 'https://dev.to/t/vue' }
            ]
          }
        ]
      },
      {
        text: 'News',
        items: [
          { text: 'Weekly News', link: 'https://news.vuejs.org/' },
          { text: 'Blog', link: 'https://blog.vuejs.org/' },
          { text: 'Roadmap', link: 'https://github.com/vuejs/vue/projects/6' },
          { text: 'Twitter', link: 'https://twitter.com/vuejs' },
          { text: 'Jobs', link: 'https://vuejobs.com/?ref=vuejs' }
        ]
      },
      {
        text: 'Support Vue',
        link: '/support-vuejs/'
      }
    ]
  }
}
