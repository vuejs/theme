<script lang="ts" setup>
import { useNav } from '../composables/nav'
import { useSidebar } from '../composables/sidebar'
import VPNavBar from './VPNavBar.vue'
import VPNavScreen from './VPNavScreen.vue'

const { isScreenOpen, closeScreen, toggleScreen } = useNav()
const { hasSidebar } = useSidebar()
</script>

<template>
  <header class="VPNav nav-bar" :class="{ stick: !hasSidebar }">
    <VPNavBar :is-screen-open="isScreenOpen" @toggle-screen="toggleScreen" />
    <VPNavScreen :open="isScreenOpen" @jump="closeScreen" />
  </header>
</template>

<style scoped>
.VPNav {
  position: relative;
  top: 0;
  left: 0;
  z-index: var(--vp-z-index-nav);
}

.VPNav.stick {
  position: sticky;
}

@media (min-width: 960px) {
  .VPNav {
    position: sticky;
  }
}
</style>
