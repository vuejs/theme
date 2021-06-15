<script lang="ts" setup>
import { defineProps } from 'vue'
import type { MenuItemWithLink } from '../../core'
import VPNavScreenMenuGroupLink from './VPNavScreenMenuGroupLink.vue'

defineProps<{
  text?: string
  items: MenuItemWithLink[]
}>()
</script>

<template>
  <div class="VPNavScreenMenuGroupSection">
    <p v-if="text" class="title">{{ text }}</p>

    <VPNavScreenMenuGroupLink
      v-for="item in items"
      :key="item.text"
      :text="item.text"
      :link="item.link"
      @jump="$emit('jump')"
    />
  </div>
</template>

<style scoped>
.VPNavScreenMenuGroupSection {
  display: block;
}

.title {
  line-height: 32px;
  font-size: 12px;
  font-weight: 700;
  color: var(--vt-c-text-2);
  transition: color 0.25s;
}
</style>
