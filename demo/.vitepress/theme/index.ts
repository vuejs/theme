import { VPTheme } from '@vue/theme'
import { h } from 'vue'

export default {
  ...VPTheme,
  Layout() {
    return h(VPTheme.Layout, null, {
      // uncomment to test layout slots

      // 'sidebar-top': () => h('div', 'hello top'),
      // 'sidebar-bottom': () => h('div', 'hello bottom'),
      // 'content-top': () => h('h1', 'Announcement!'),
      // 'content-bottom': () => h('div', 'Some ads'),
      // 'outline-top': () => h('div', 'this could be huge'),
      // 'outline-bottom': () => h('h3', 'Sponsors')
    })
  }
}
