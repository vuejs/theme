<template>
  <div class="VPApp">
    <VTBackdrop class="backdrop" :show="showBackdrop" @click="closeSidebar" />
    <VPNav />
    <VPLocalNav @open-menu="openSidebar" />
    <VPSidebar :open="isSidebarOpen" @close="closeSidebar" />
    <VPContent />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useAppearance, VTBackdrop } from '../../core'
import { useSidebar } from '../composables/sidebar'
import VPNav from './VPNav.vue'
import VPLocalNav from './VPLocalNav.vue'
import VPSidebar from './VPSidebar.vue'
import VPContent from './VPContent.vue'

useAppearance()

const {
  isOpen: isSidebarOpen,
  open: openSidebar,
  close: closeSidebar
} = useSidebar()

const showBackdrop = computed(() => isSidebarOpen.value)
</script>

<style scoped>
.VPApp {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--vt-c-bg);
  transition: background-color .5s;
}

.backdrop {
  z-index: var(--vp-z-index-backdrop);
}
</style>
