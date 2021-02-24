<template>
  <div class="VPLayout">
    <VPBackdrop :show="showBackdrop" @click="closeSidebar" />
    <VPNav />
    <VPLocalNav @open-menu="openSidebar" />
    <VPSidebar :open="isSidebarOpen" @close="closeSidebar" />
    <VPContent />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useAppearance } from '../composables/appearance'
import { useSidebar } from '../composables/sidebar'
import VPBackdrop from './VPBackdrop.vue'
import VPNav from './VPNav.vue'
import VPLocalNav from './VPLocalNav.vue'
import VPSidebar from './VPSidebar.vue'
import VPContent from './VPContent.vue'

useAppearance()

const { isSidebarOpen, openSidebar, closeSidebar } = useSidebar()

const showBackdrop = computed(() => isSidebarOpen.value)
</script>

<style scoped>
.VPLayout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--c-bg);
  transition: background-color .5s;
}
</style>
