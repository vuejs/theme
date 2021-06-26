<script lang="ts" setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import { useAppearance, VTBackdrop } from '../../core'
import { useSidebar } from '../composables/sidebar'
import VPNav from './VPNav.vue'
import VPLocalNav from './VPLocalNav.vue'
import VPSidebar from './VPSidebar.vue'
import VPContent from './VPContent.vue'
import VPHome from './VPHome.vue'

useAppearance()

const {
  isOpen: isSidebarOpen,
  open: openSidebar,
  close: closeSidebar
} = useSidebar()

const { frontmatter } = useData()
const enableHome = computed(() => !!frontmatter.value.home)
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
    <VPHome v-if="enableHome">
      <template #hero>
        <slot name="home-hero" />
      </template>
      <template #features>
        <slot name="home-features" />
      </template>
      <template #footer>
        <slot name="home-footer" />
      </template>
    </VPHome>
    <VPContent v-else>
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
