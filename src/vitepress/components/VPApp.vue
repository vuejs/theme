<script lang="ts" setup>
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
</script>

<template>
  <div class="VPApp">
    <VTBackdrop class="backdrop" :show="isSidebarOpen" @click="closeSidebar" />
    <VPNav />
    <VPLocalNav @open-menu="openSidebar" />
    <VPSidebar :open="isSidebarOpen" @close="closeSidebar">
      <template #top>
        <slot name="sidebar-top" />
      </template>
      <template #bottom>
        <slot name="sidebar-bottom" />
      </template>
    </VPSidebar>
    <VPContent>
      <template #content-top>
        <slot name="content-top" />
      </template>
      <template #content-bottom>
        <slot name="content-bottom" />
      </template>
      <template #aside-top>
        <slot name="outline-top" />
      </template>
      <template #aside-bottom>
        <slot name="outline-bottom" />
      </template>
    </VPContent>
  </div>
</template>

<style scoped>
.VPApp {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--vt-c-bg);
  transition: background-color 0.5s;
}

.backdrop {
  z-index: var(--vp-z-index-backdrop);
}
</style>
