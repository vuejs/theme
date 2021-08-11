<script lang="ts" setup>
import { useSidebar } from '../composables/sidebar'
import VPSidebarGroup from './VPSidebarGroup.vue'

const { sidebar, hasSidebar } = useSidebar()

defineProps<{
  open: boolean
}>()
</script>

<template>
  <aside v-if="hasSidebar" class="VPSidebar" :class="{ open }" @click.stop>
    <slot name="top" />
    <div v-for="group in sidebar" :key="group.text" class="group">
      <VPSidebarGroup
        :text="group.text"
        :items="group.items"
        @jump="$emit('close')"
      />
    </div>
    <slot name="bottom" />
  </aside>
</template>

<style scoped>
.VPSidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: var(--vp-z-index-sidebar);
  padding: 40px 24px 96px;
  width: calc(100vw - 64px);
  max-width: var(--vp-sidebar-width-mobile);
  opacity: 0;
  background-color: var(--vt-c-bg);
  box-shadow: var(--vt-c-shadow-3);
  overflow-x: hidden;
  overflow-y: auto;
  transform: translateX(-100%);
  transition: background-color 0.5s, opacity 0.5s, transform 0.75s ease;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.VPSidebar::-webkit-scrollbar {
  display: none;
}

@media (min-width: 768px) {
  .VPSidebar {
    padding: 40px 32px 96px;
  }
}

@media (min-width: 960px) {
  .VPSidebar {
    top: 56px;
    z-index: 1;
    border-right: 1px solid var(--vt-c-divider-light);
    padding: 24px 32px 96px;
    width: var(--vp-sidebar-width-small);
    max-width: 100%;
    opacity: 1;
    box-shadow: none;
    transform: translateX(0);
    transition: border-color 0.5s, background-color 0.5s;
  }
}

@media (min-width: 1280px) {
  .VPSidebar {
    width: var(--vp-sidebar-width-medium);
  }
}

@media (min-width: 1440px) {
  .VPSidebar {
    padding: 24px 32px 96px calc((100% - var(--vp-screen-max-width)) / 2);
    width: calc(
      (100% - var(--vp-screen-max-width)) / 2 + var(--vp-sidebar-width-large)
    );
  }
}

.VPSidebar.open {
  opacity: 1;
  transform: translateX(0);
  transition: background-color 0.5s, opacity 0.25s,
    transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}

.dark .VPSidebar {
  box-shadow: var(--vt-shadow-1);
}

.group + .group {
  padding-top: 24px;
}

@media (min-width: 960px) {
  .group + .group {
    padding-top: 16px;
  }
}
</style>
