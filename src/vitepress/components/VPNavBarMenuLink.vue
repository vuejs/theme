<script lang="ts" setup>
import { defineProps } from 'vue'
import { VTLink } from '../../core'
import { useRoute } from 'vitepress'
import { isActive } from '../support/utils'
import type { NavItemWithLink } from '../config'

defineProps<{
  item: NavItemWithLink
}>()

const route = useRoute()
</script>

<template>
  <VTLink
    :class="{
      VPNavBarMenuLink: true,
      active: isActive(route, item.activeMatch || item.link, !!item.activeMatch)
    }"
    :href="item.link"
  >
    {{ item.text }}
  </VTLink>
</template>

<style scoped>
.VPNavBarMenuLink {
  display: block;
  padding: 0 12px;
  line-height: calc(var(--vt-nav-height) - 1px);
  font-size: 13px;
  font-weight: 500;
  color: var(--vt-c-text-1);
  transition: color 0.25s;
}

.VPNavBarMenuLink.active {
  border-bottom: 1px solid var(--vt-c-green);
}

.VPNavBarMenuLink:hover {
  color: var(--vt-c-brand);
}
</style>
