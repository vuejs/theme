// config for the docs. we should make able to place this file right under the
// docs folder in the end.

const path = require('path')

module.exports = {
  vite: {
    resolve: {
      alias: {
        '@vue/theme': path.join(__dirname, '../../src')
      }
    },
    optimizeDeps: {
      exclude: ['@vueuse/core', 'body-scroll-lock']
    }
  },

  lang: 'en-US',
  title: 'Vue.js',
  description: 'Vue.js - The Progressive JavaScript Framework',

  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap'
      }
    ]
  ],

  markdown: {
    lineNumbers: true
  },

  themeConfig: {
    logo: '/img/logo-vue.svg',

    algolia: {
      apiKey: 'c57105e511faa5558547599f120ceeba',
      indexName: 'vitepress'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vue' },
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
              {
                text: 'Migration from Vue 2',
                link: '/guide/migration/introduction'
              }
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
              {
                text: 'Vue Test Utils',
                link: 'https://next.vue-test-utils.vuejs.org/v2/guide/introduction.html'
              },
              {
                text: 'Devtools',
                link: 'https://github.com/vuejs/vue-devtools'
              }
            ]
          },
          {
            text: 'Templates',
            items: [{ text: 'Themes', link: '/community/themes/' }]
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
              { text: 'Join', link: '/community/join/' }
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
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Essentials',
          items: [
            { text: 'Introduction', link: '/guide/introduction' },
            { text: 'Installation', link: '/guide/installation' },
            {
              text: 'Application & Component Instances',
              link: '/guide/instance'
            },
            { text: 'Template Syntax', link: '/guide/template-syntax' },
            {
              text: 'Data Properties and Methods',
              link: '/guide/data-methods'
            },
            {
              text: 'Computed Properties and Watchers',
              link: '/guide/computed'
            },
            {
              text: 'Class and Style Bindings',
              link: '/guide/class-and-style'
            },
            { text: 'Conditional Rendering', link: '/guide/conditional' },
            { text: 'List Rendering', link: '/guide/list' },
            { text: 'Event Handling', link: '/guide/events' },
            { text: 'Form Input Bindings', link: '/guide/forms' },
            { text: 'Components Basics', link: '/guide/component-basics' }
          ]
        },
        {
          text: 'Components In-Depth',
          items: [
            {
              text: 'Component Registration',
              link: '/guide/component-registration'
            },
            { text: 'Props', link: '/guide/component-props' },
            { text: 'Non-Prop Attributes', link: '/guide/component-attrs' },
            { text: 'Custom Events', link: '/guide/component-custom-events' },
            { text: 'Slots', link: '/guide/component-slots' },
            {
              text: 'Provide / inject',
              link: '/guide/component-provide-inject'
            },
            {
              text: 'Dynamic & Async Components',
              link: '/guide/component-dynamic-async'
            },
            { text: 'Template refs', link: '/guide/component-template-refs' },
            { text: 'Handling Edge Cases', link: '/guide/component-edge-cases' }
          ]
        },
        {
          text: 'Transitions & Animation',
          items: [
            { text: 'Overview', link: '/guide/transitions-overview' },
            {
              text: 'Enter & Leave Transitions',
              link: '/guide/transitions-enterleave'
            },
            { text: 'List Transitions', link: '/guide/transitions-list' },
            { text: 'State Transitions', link: '/guide/transitions-state' }
          ]
        },
        {
          text: 'Reusability',
          items: [
            { text: 'Mixins', link: '/guide/mixins' },
            { text: 'Mixins', link: '/guide/custom-directive' }
          ]
        },
        {
          text: 'Composition API',
          items: [
            {
              text: 'Introduction',
              link: '/guide/composition-api-introduction'
            },
            { text: 'Setup', link: '/guide/composition-api-setup' },
            {
              text: 'Lifecycle Hooks',
              link: '/guide/composition-api-lifecycle-hooks'
            },
            {
              text: 'Provide / Inject',
              link: '/guide/composition-api-provide-inject'
            },
            {
              text: 'Template Refs',
              link: '/guide/composition-api-template-refs'
            }
          ]
        },
        {
          text: 'Advanced',
          items: [
            { text: 'Teleport', link: '/guide/teleport' },
            { text: 'Render Functions', link: '/guide/render-function' },
            { text: 'Plugins', link: '/guide/plugins' }
          ]
        },
        {
          text: 'Digging Deeper',
          items: [
            { text: 'Reactivity in Depth', link: '/guide/reactivity' },
            {
              text: 'Reactivity Fundamentals',
              link: '/guide/reactivity-fundamentals'
            },
            {
              text: 'Reactivity in Computed and Watch',
              link: '/guide/reactivity-computed-watchers'
            },
            {
              text: 'Rendering Mechanisms and Optimizations',
              link: '/guide/optimizations'
            }
          ]
        },
        {
          text: 'Tooling',
          items: [
            {
              text: 'Single File Components',
              link: '/guide/single-file-component'
            },
            { text: 'Testing', link: '/guide/testing' },
            { text: 'TypeScript Support', link: '/guide/typescript-support' },
            { text: 'Mobile', link: '/guide/mobile' },
            { text: 'Production Deployment', link: '/guide/tooling/deployment' }
          ]
        },
        {
          text: 'Scaling Up',
          items: [
            { text: 'Routing', link: '/guide/routing' },
            { text: 'State Management', link: '/guide/state-management' },
            { text: 'Server-Side Rendering', link: '/guide/ssr' }
          ]
        },
        {
          text: 'Accessibility',
          items: [
            { text: 'Basics', link: '/guide/a11y-basics' },
            { text: 'Semantics', link: '/guide/a11y-semantics' },
            { text: 'Standards', link: '/guide/a11y-standards' },
            { text: 'Resources', link: '/guide/a11y-resources' }
          ]
        }
      ]
    }
  }
}
