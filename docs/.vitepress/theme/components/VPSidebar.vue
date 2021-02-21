<template>
  <aside v-if="hasSidebar" class="VPSidebar" :class="{ open }" @click.stop>
    <div v-for="group in sidebar" :key="group.text" class="group">
      <VPSidebarGroup
        :text="group.text"
        :items="group.items"
        @jump="$emit('close')"
      />
    </div>
  </aside>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import { useSidebar } from '../composables/sidebar'
import VPSidebarGroup from './VPSidebarGroup.vue'

const { sidebar, hasSidebar } = useSidebar()

defineProps<{
  open: boolean
}>()
</script>

<style scoped>
.VPSidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: var(--z-index-sidebar);
  padding: 62px 24px 96px;
  width: calc(100vw - 64px);
  max-width: 320px;
  opacity: 0;
  background-color: var(--c-bg);
  box-shadow: var(--c-shadow-3);
  overflow-x: hidden;
  overflow-y: auto;
  transform: translateX(-100%);
  transition: background-color .5s, opacity .5s, transform .75s ease;
}

@media (min-width: 768px) {
  .VPSidebar { padding: 62px 32px 96px; }
}

@media (min-width: 960px) {
  .VPSidebar {
    top: 56px;
    border-right: 1px solid var(--c-divider-light);
    padding: 24px 32px 96px;
    width: 248px;
    max-width: 100%;
    opacity: 1;
    box-shadow: none;
    transform: translateX(0);
    transition: border-color .5s, background-color .5s;
  }
}

.VPSidebar.open {
  opacity: 1;
  transform: translateX(0);
  transition: background-color .5s, opacity .25s, transform .5s cubic-bezier(.19, 1, .22, 1);
}

.dark .VPSidebar {
  box-shadow: var(--shadow-1);
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
