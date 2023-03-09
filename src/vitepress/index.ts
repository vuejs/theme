import './styles/index.css'
import VPApp from './components/VPApp.vue'
import { Theme } from 'vitepress'
import { withConfigProvider } from './composables/config'

const VPTheme: Theme = {
  Layout: withConfigProvider(VPApp)
}

export { VPTheme }

export type { Config } from './config'
