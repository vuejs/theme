<template>
  <div class="VTMenu">
    <div v-if="items" class="group">
      <template v-for="item in items">
        <VTMenuLink
          v-if="item.link"
          class="item"
          :key="item.text"
          :text="item.text"
          :link="item.link"
        />

        <VTMenuGroup
          v-else
          :key="item.text"
          class="group"
          :text="item.text"
          :items="item.items"
        />
      </template>
    </div>

    <slot />
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'
import type { MenuItem } from '../composables/menu'
import VTMenuLink from './VTMenuLink.vue'
import VTMenuGroup from './VTMenuGroup.vue'

defineProps<{
  items?: MenuItem[]
}>()
</script>

<style scoped>
.VTMenu {
  border-radius: 8px;
  min-width: 192px;
  background: var(--c-bg);
  box-shadow: var(--shadow-3);
  transition: background-color .5s;
}

.dark .VTMenu {
  background: var(--c-bg-soft);
  box-shadow: var(--shadow-1);
}

.VTMenu :deep(.group) {
  padding: 12px 0;
  transition: border-color .5s;
}

.VTMenu :deep(.group > .group) {
  padding: 0 0 12px;
}

.VTMenu :deep(.group + .group) {
  border-top: 1px solid var(--c-divider-light);
  padding: 11px 0 12px;
}

.VTMenu :deep(.group + .item) {
  border-top: 1px solid var(--c-divider-light);
  padding: 11px 16px 0;
}

.VTMenu :deep(.item) {
  padding: 0 16px;
  white-space: nowrap;
}

.VTMenu :deep(.label) {
  flex-grow: 1;
  line-height: 28px;
  font-size: 12px;
  font-weight: 500;
  color: var(--c-text-2);
  transition: color .5s;
}

.VTMenu :deep(.action) {
  padding-left: 24px;
}
</style>
