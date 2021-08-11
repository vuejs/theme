import './styles/variables.css'
import VPApp from './components/VPApp.vue'
import { Theme } from 'vitepress'
import { withConfigProvider } from './composables/config'

const VPTheme: Theme = {
  Layout: withConfigProvider(VPApp),
  // TODO: implement not found page
  NotFound: () => {}
}

export { VPTheme }
