import { ref, computed } from 'vue'
import { useRoute } from 'vitepress'
import { getSidebar } from '../support/sidebar'
import { useConfig } from './config'

export function useSidebar() {
  const route = useRoute()
  const { config } = useConfig()

  const isSidebarOpen = ref(false)

  const sidebar = computed(() => {
    return config.value.sidebar
      ? getSidebar(config.value.sidebar, route.data.relativePath)
      : []
  })

  const hasSidebar = computed(() => sidebar.value.length > 0)

  function openSidebar() {
    isSidebarOpen.value = true
  }

  function closeSidebar() {
    isSidebarOpen.value = false
  }

  function toggleSidebar() {
    isSidebarOpen.value ? closeSidebar() : openSidebar()
  }

  return {
    isSidebarOpen,
    sidebar,
    hasSidebar,
    openSidebar,
    closeSidebar,
    toggleSidebar
  }
}
