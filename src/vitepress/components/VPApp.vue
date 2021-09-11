<script lang="ts" setup>
import { VTBackdrop } from '../../core'
import { useSidebar } from '../composables/sidebar'
import VPNav from './VPNav.vue'
import VPLocalNav from './VPLocalNav.vue'
import VPSidebar from './VPSidebar.vue'
import VPContent from './VPContent.vue'
import { provide } from 'vue'

const {
  isOpen: isSidebarOpen,
  open: openSidebar,
  close: closeSidebar
} = useSidebar()

provide('close-sidebar', closeSidebar)
</script>

<template>
  <div class="VPApp">
    <VTBackdrop class="backdrop" :show="isSidebarOpen" @click="closeSidebar" />
    <VPNav />
    <VPLocalNav @open-menu="openSidebar" />
    <VPSidebar :open="isSidebarOpen">
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
        <slot name="aside-top" />
      </template>
      <template #aside-mid>
        <slot name="aside-mid" />
      </template>
      <template #aside-bottom>
        <slot name="aside-bottom" />
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
